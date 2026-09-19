<?php
session_start(); require __DIR__.'/community_config.php';
try{$db=community_db();}catch(Throwable $e){$db=null;}
$rulesVersion='1.0'; $cats=['General','Networking','Databases','Programming','Web Development','Past Papers','Resources','Exam Help'];
if($db){
  if(empty($_SESSION['community_session_key'])) $_SESSION['community_session_key']=bin2hex(random_bytes(24));
  if(!community_user_id()){
    $st=$db->prepare('SELECT id FROM community_users WHERE session_key=?'); $st->execute([$_SESSION['community_session_key']]);
    if($id=$st->fetchColumn()) $_SESSION['community_user_id']=(int)$id;
  }
  
function community_upload_file($file){
  if(!$file || !isset($file['error']) || $file['error']===UPLOAD_ERR_NO_FILE) return [null,null,null,null];
  if($file['error']!==UPLOAD_ERR_OK) throw new RuntimeException('The attachment could not be uploaded.');
  if((int)$file['size'] > 10*1024*1024) throw new RuntimeException('Attachments must be 10 MB or smaller.');

  $allowed=[
    'image/jpeg'=>['jpg','image'],
    'image/png'=>['png','image'],
    'image/webp'=>['webp','image'],
    'application/pdf'=>['pdf','pdf']
  ];
  $finfo=new finfo(FILEINFO_MIME_TYPE);
  $mime=$finfo->file($file['tmp_name']);
  if(!isset($allowed[$mime])) throw new RuntimeException('Only JPG, PNG, WEBP images and PDF files are allowed.');

  [$ext,$kind]=$allowed[$mime];
  $dir=__DIR__.DIRECTORY_SEPARATOR.'community_uploads';
  if(!is_dir($dir) && !mkdir($dir,0755,true)) throw new RuntimeException('Upload folder is unavailable.');
  $safe=bin2hex(random_bytes(18)).'.'.$ext;
  $dest=$dir.DIRECTORY_SEPARATOR.$safe;
  if(!move_uploaded_file($file['tmp_name'],$dest)) throw new RuntimeException('Could not save the attachment.');

  $original=basename((string)($file['name']??'attachment'));
  $original=preg_replace('/[^\pL\pN._() -]+/u','_',$original);
  return ['community_uploads/'.$safe,$original,$mime,(int)$file['size']];
}
function community_file_size($bytes){
  if($bytes>=1048576) return round($bytes/1048576,1).' MB';
  if($bytes>=1024) return round($bytes/1024).' KB';
  return $bytes.' B';
}

if($_SERVER['REQUEST_METHOD']==='POST'){
    check_csrf(); $action=$_POST['action']??'';
    if($action==='join'){
      $name=trim($_POST['display_name']??''); $agree=isset($_POST['agree']);
      if(!$agree || mb_strlen($name)<2 || mb_strlen($name)>40) flash('err','Choose a 2–40 character display name and accept the rules.');
      else{
        $st=$db->prepare('INSERT INTO community_users(display_name,session_key) VALUES(?,?)');$st->execute([$name,$_SESSION['community_session_key']]);$uid=(int)$db->lastInsertId();$_SESSION['community_user_id']=$uid;
        $ipHash=hash('sha256',($_SERVER['REMOTE_ADDR']??'unknown').'|ictlab-community');
        $db->prepare('INSERT INTO community_agreements(user_id,rules_version,ip_hash) VALUES(?,?,?)')->execute([$uid,$rulesVersion,$ipHash]);flash('ok','Welcome to ICT Lab Community!');
      }
      header('Location: community.php');exit;
    }
    require_member();
    $uid=community_user_id(); $u=$db->prepare('SELECT status FROM community_users WHERE id=?');$u->execute([$uid]);$status=$u->fetchColumn();
    if($status==='banned'){flash('err','This community account cannot post.');header('Location: community.php');exit;}
    if($action==='post'){
      $title=trim($_POST['title']??'');$body=trim($_POST['body']??'');$cat=in_array($_POST['category']??'', $cats,true)?$_POST['category']:'General';$url=trim($_POST['resource_url']??'');
      $reason=blocked_reason($db,$title.' '.$body);
      if($status==='muted') flash('err','Your community account is temporarily muted.');
      elseif($reason){
        flash('blocked','Your message contained language that violates the ICT Lab Community Rules. The message was deleted and was not published. Please edit it and try again.');
        $db->prepare('INSERT INTO moderation_actions(admin_label,action_type,target_type,target_id,note) VALUES(?,?,?,?,?)')->execute(['System','blocked_language','user',$uid,'Post blocked automatically: '.$reason]);
      }
      elseif(mb_strlen($title)<4||mb_strlen($body)<2) flash('err','Add a clear title and message.');
      else{
        try{
          [$filePath,$fileName,$fileMime,$fileSize]=community_upload_file($_FILES['attachment']??null);
          $db->beginTransaction();
          $db->prepare('INSERT INTO posts(user_id,category,title,body,resource_url) VALUES(?,?,?,?,?)')->execute([$uid,$cat,$title,$body,$url?:null]);
          $newPostId=(int)$db->lastInsertId();
          if($filePath){
            $db->prepare('INSERT INTO post_attachments(post_id,file_path,original_name,mime_type,file_size) VALUES(?,?,?,?,?)')
               ->execute([$newPostId,$filePath,$fileName,$fileMime,$fileSize]);
          }
          $db->commit();
          flash('ok','Posted to the community.');
        }catch(Throwable $e){
          if($db->inTransaction())$db->rollBack();
          flash('err',$e->getMessage());
        }
      }
     } elseif($action==='toggle_solved'){
      $pid=(int)($_POST['post_id']??0);
      $ps=$db->prepare('SELECT user_id,is_solved FROM posts WHERE id=?');
      $ps->execute([$pid]);$owned=$ps->fetch();
      if($owned && (int)$owned['user_id']===$uid){
        $db->prepare('UPDATE posts SET is_solved=? WHERE id=?')->execute([(int)!$owned['is_solved'],$pid]);
        flash('ok',!$owned['is_solved']?'Question marked as solved.':'Question reopened.');
      }else flash('err','Only the post author can change the solved status.');
    } elseif($action==='react'){
      $targetType=($_POST['target_type']??'')==='comment'?'comment':'post';$targetId=(int)($_POST['target_id']??0);
      if($targetId>0){$v=$db->prepare($targetType==='post'?"SELECT user_id FROM posts WHERE id=? AND status='visible'":"SELECT user_id FROM comments WHERE id=? AND status='visible'");$v->execute([$targetId]);$targetOwner=(int)$v->fetchColumn();if($targetOwner===$uid){flash('err','Helpful is for recognizing other students’ contributions.');}elseif($targetOwner){$x=$db->prepare('SELECT id FROM community_reactions WHERE user_id=? AND target_type=? AND target_id=?');$x->execute([$uid,$targetType,$targetId]);$rid=$x->fetchColumn();if($rid)$db->prepare('DELETE FROM community_reactions WHERE id=?')->execute([$rid]);else $db->prepare('INSERT INTO community_reactions(user_id,target_type,target_id) VALUES(?,?,?)')->execute([$uid,$targetType,$targetId]);}}
    } elseif($action==='comment'){
      $body=trim($_POST['body']??'');$pid=(int)($_POST['post_id']??0);$reason=blocked_reason($db,$body);
      if($status==='muted') flash('err','Your community account is temporarily muted.');
      elseif($reason){
        flash('blocked','Your message contained language that violates the ICT Lab Community Rules. The message was deleted and was not published. Please edit it and try again.');
        $db->prepare('INSERT INTO moderation_actions(admin_label,action_type,target_type,target_id,note) VALUES(?,?,?,?,?)')->execute(['System','blocked_language','user',$uid,'Reply blocked automatically: '.$reason]);
      }
      elseif($pid&&mb_strlen($body)>=1){$db->prepare('INSERT INTO comments(post_id,user_id,body) VALUES(?,?,?)')->execute([$pid,$uid,$body]);$owner=$db->prepare('SELECT user_id FROM posts WHERE id=?');$owner->execute([$pid]);$owner=(int)$owner->fetchColumn();if($owner&&$owner!==$uid){
          $who=$db->prepare('SELECT display_name FROM community_users WHERE id=?');$who->execute([$uid]);$whoName=$who->fetchColumn()?:'A student';
          $db->prepare('INSERT INTO notifications(user_id,message,link) VALUES(?,?,?)')->execute([$owner,$whoName.' replied to your community post','community.php#post-'.$pid]);
        }flash('ok','Reply added.');}
    } elseif($action==='edit_post'){
      $pid=(int)($_POST['post_id']??0);$title=trim($_POST['title']??'');$body=trim($_POST['body']??'');$url=trim($_POST['resource_url']??'');
      $own=$db->prepare("SELECT user_id FROM posts WHERE id=? AND status='visible'");$own->execute([$pid]);
      $reason=blocked_reason($db,$title.' '.$body);
      if((int)$own->fetchColumn()!==$uid) flash('err','You can only edit your own post.');
      elseif($reason) flash('blocked','Your edited message contains language that violates the Community Rules. The changes were not published.');
      elseif(mb_strlen($title)<4||mb_strlen($body)<2) flash('err','Add a clear title and message.');
      else{$db->prepare("UPDATE posts SET title=?,body=?,resource_url=? WHERE id=? AND user_id=?")->execute([$title,$body,$url?:null,$pid,$uid]);flash('ok','Post updated.');}
    } elseif($action==='delete_own_post'){
      $pid=(int)($_POST['post_id']??0);$own=$db->prepare("SELECT user_id FROM posts WHERE id=? AND status='visible'");$own->execute([$pid]);
      if((int)$own->fetchColumn()===$uid){
        $fs=$db->prepare("SELECT file_path FROM post_attachments WHERE post_id=?");$fs->execute([$pid]);
        foreach($fs->fetchAll() as $fr){$base=realpath(__DIR__.DIRECTORY_SEPARATOR.'community_uploads');$full=realpath(__DIR__.DIRECTORY_SEPARATOR.(string)$fr['file_path']);if($base&&$full&&str_starts_with($full,$base.DIRECTORY_SEPARATOR)&&is_file($full))@unlink($full);}
        $db->prepare("DELETE FROM post_attachments WHERE post_id=?")->execute([$pid]);
        $db->prepare("UPDATE posts SET status='deleted' WHERE id=? AND user_id=?")->execute([$pid,$uid]);flash('ok','Your post was deleted.');
      }else flash('err','You can only delete your own post.');
    } elseif($action==='edit_comment'){
      $cid=(int)($_POST['comment_id']??0);$pid=(int)($_POST['post_id']??0);$body=trim($_POST['body']??'');$own=$db->prepare("SELECT user_id FROM comments WHERE id=? AND status='visible'");$own->execute([$cid]);$reason=blocked_reason($db,$body);
      if((int)$own->fetchColumn()!==$uid) flash('err','You can only edit your own reply.');
      elseif($reason) flash('blocked','Your edited reply contains language that violates the Community Rules. The changes were not published.');
      elseif(mb_strlen($body)<1) flash('err','Reply cannot be empty.');
      else{$db->prepare("UPDATE comments SET body=? WHERE id=? AND user_id=?")->execute([$body,$cid,$uid]);flash('ok','Reply updated.');}
    } elseif($action==='delete_own_comment'){
      $cid=(int)($_POST['comment_id']??0);$pid=(int)($_POST['post_id']??0);$db->prepare("UPDATE comments SET status='deleted' WHERE id=? AND user_id=?")->execute([$cid,$uid]);flash('ok','Reply deleted.');
    } elseif($action==='report'){
      $pid=(int)($_POST['post_id']??0);$cid=(int)($_POST['comment_id']??0);$reason=trim($_POST['reason']??'Other');
      $db->prepare('INSERT INTO reports(reporter_id,post_id,comment_id,reason) VALUES(?,?,?,?)')->execute([$uid,$pid?:null,$cid?:null,$reason]);flash('ok','Thanks. The report was sent to the moderator.');
    }
    header('Location: community.php'.(!empty($_POST['post_id'])?'#post-'.(int)$_POST['post_id']:''));exit;
  }
}
if($db&&community_user_id()&&isset($_GET['notification'])){
  $nid=(int)$_GET['notification'];
  $ns=$db->prepare('SELECT link FROM notifications WHERE id=? AND user_id=?');$ns->execute([$nid,community_user_id()]);
  $go=$ns->fetchColumn();
  if($go){
    $db->prepare('UPDATE notifications SET is_read=1 WHERE id=? AND user_id=?')->execute([$nid,community_user_id()]);
    header('Location: '.$go);exit;
  }
}
$uid=(int)(community_user_id()??0);$member=null;$posts=[];$notifications=[];$unreadCount=0;$attachmentsByPost=[];
if($db&&community_user_id()){$s=$db->prepare('SELECT * FROM community_users WHERE id=?');$s->execute([community_user_id()]);$member=$s->fetch();$n=$db->prepare('SELECT * FROM notifications WHERE user_id=? ORDER BY id DESC LIMIT 10');$n->execute([community_user_id()]);$notifications=$n->fetchAll();$uc=$db->prepare('SELECT COUNT(*) FROM notifications WHERE user_id=? AND is_read=0');$uc->execute([community_user_id()]);$unreadCount=(int)$uc->fetchColumn();}
$profile=null;$profileStats=['posts'=>0,'replies'=>0,'solved'=>0,'resources'=>0,'helpful'=>0];$profilePosts=[];$profileReplies=[];
if($db&&isset($_GET['profile'])){
 $profileId=(int)$_GET['profile'];$q=$db->prepare("SELECT id,display_name,status,created_at FROM community_users WHERE id=?");$q->execute([$profileId]);$profile=$q->fetch();
 if($profile){
  foreach(['posts'=>"SELECT COUNT(*) FROM posts WHERE user_id=? AND status='visible'",'replies'=>"SELECT COUNT(*) FROM comments WHERE user_id=? AND status='visible'",'solved'=>"SELECT COUNT(*) FROM posts WHERE user_id=? AND status='visible' AND is_solved=1"] as $k=>$sqlx){$q=$db->prepare($sqlx);$q->execute([$profileId]);$profileStats[$k]=(int)$q->fetchColumn();}
  $q=$db->prepare("SELECT COUNT(*) FROM community_reactions r WHERE (r.target_type='post' AND r.target_id IN (SELECT id FROM posts WHERE user_id=? AND status='visible')) OR (r.target_type='comment' AND r.target_id IN (SELECT id FROM comments WHERE user_id=? AND status='visible'))");$q->execute([$profileId,$profileId]);$profileStats['helpful']=(int)$q->fetchColumn();
  $q=$db->prepare("SELECT COUNT(DISTINCT p.id) FROM posts p LEFT JOIN post_attachments a ON a.post_id=p.id WHERE p.user_id=? AND p.status='visible' AND ((p.resource_url IS NOT NULL AND p.resource_url<>'') OR a.id IS NOT NULL)");$q->execute([$profileId]);$profileStats['resources']=(int)$q->fetchColumn();
  $q=$db->prepare("SELECT id,title,category,created_at,is_solved FROM posts WHERE user_id=? AND status='visible' ORDER BY id DESC LIMIT 12");$q->execute([$profileId]);$profilePosts=$q->fetchAll();
  $q=$db->prepare("SELECT c.body,c.created_at,p.id post_id,p.title FROM comments c JOIN posts p ON p.id=c.post_id WHERE c.user_id=? AND c.status='visible' AND p.status='visible' ORDER BY c.id DESC LIMIT 12");$q->execute([$profileId]);$profileReplies=$q->fetchAll();
 }
}
if($db){
  $aq=$db->query("SELECT id,post_id,file_path,original_name,mime_type,file_size FROM post_attachments ORDER BY id ASC");
  foreach($aq->fetchAll() as $attachmentRow){
    $attachmentPostId=(int)$attachmentRow['post_id'];
    if($attachmentPostId>0 && !isset($attachmentsByPost[$attachmentPostId])) $attachmentsByPost[$attachmentPostId]=$attachmentRow;
  }
}
if($db){$cat=$_GET['category']??'';$statusFilter=$_GET['status']??'all';$resourceFilter=$_GET['resources']??'all';$sortFilter=$_GET['sort']??'newest';$sql="SELECT p.*,u.display_name,(SELECT COUNT(*) FROM community_reactions cr WHERE cr.target_type='post' AND cr.target_id=p.id) helpful_count FROM posts p JOIN community_users u ON u.id=p.user_id WHERE p.status='visible'";$args=[];if(in_array($cat,$cats,true)){$sql.=' AND p.category=?';$args[]=$cat;}if($statusFilter==='solved')$sql.=' AND p.is_solved=1';elseif($statusFilter==='unsolved')$sql.=' AND p.is_solved=0';if($resourceFilter==='with')$sql.=" AND ((p.resource_url IS NOT NULL AND p.resource_url<>'') OR EXISTS(SELECT 1 FROM post_attachments pa WHERE pa.post_id=p.id))";elseif($resourceFilter==='without')$sql.=" AND ((p.resource_url IS NULL OR p.resource_url='') AND NOT EXISTS(SELECT 1 FROM post_attachments pa WHERE pa.post_id=p.id))";if($sortFilter==='oldest')$sql.=' ORDER BY p.is_pinned DESC,p.id ASC';elseif($sortFilter==='helpful')$sql.=' ORDER BY p.is_pinned DESC,helpful_count DESC,p.id DESC';else $sql.=' ORDER BY p.is_pinned DESC,p.id DESC';$sql.=' LIMIT 100';$s=$db->prepare($sql);$s->execute($args);$posts=$s->fetchAll();}
?>
<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Community — ICT Lab</title><meta name="theme-color" content="#0a1821"><link rel="manifest" href="community-manifest.webmanifest"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="community.css"></head><body><div class="wrap">
<div class="top"><div><div class="brand">♾ ICT Lab Community</div><div class="muted">Ask • discuss • share • learn together</div></div><div><a class="btn" href="index.html">← ICT Lab</a> </div></div>
<?php if(!$db):?><div class="notice bad"><b>Database not connected.</b> Import <code>community_setup.sql</code> in phpMyAdmin, then check <code>community_config.php</code>.</div><?php endif;?>
<?php if($m=flash('ok')):?><div class="notice"><?=h($m)?></div><?php endif;?><?php if($m=flash('err')):?><div class="notice bad"><?=h($m)?></div><?php endif;?>
<?php if($blockedMessage=flash('blocked')):?>
<div class="moderation-backdrop" id="moderationWarning" role="alertdialog" aria-modal="true" aria-labelledby="moderationWarningTitle">
  <div class="moderation-warning">
    <div class="warning-icon">!</div>
    <div class="warning-copy">
      <div class="warning-kicker">COMMUNITY MODERATION</div>
      <h2 id="moderationWarningTitle">Message Removed</h2>
      <p><?=h($blockedMessage)?></p>
      <div class="warning-rule">⚠ Repeated violations may lead to moderation action on your community account.</div>
      <button class="btn warning-btn" type="button" onclick="closeModerationWarning()">Understood</button>
    </div>
  </div>
</div>
<script>
function closeModerationWarning(){
  const el=document.getElementById('moderationWarning');
  if(!el) return;
  el.classList.add('closing');
  setTimeout(()=>el.remove(),220);
}
setTimeout(closeModerationWarning,6500);
</script>
<?php endif;?>

<div class="grid"><aside class="glass side"><h3>Topics</h3><div class="categories"><a href="community.php">✨ All posts</a><?php foreach($cats as $c):?><a href="?category=<?=urlencode($c)?>"><?=h($c)?></a><?php endforeach;?></div><?php if($member):?><hr style="border-color:var(--line)"><div class="muted">Signed in as</div><b><?=h($member['display_name'])?></b><p class="muted">Community status: <?=h($member['status'])?></p><a href="community_home.php">⌂ Community Home</a><a href="community_saved.php">★ Saved Posts</a><a class="my-activity-link" href="?profile=<?=$member['id']?>">◎ My Activity</a><?php endif;?></aside><main>
<?php if($member):?>
<?php if($profile):?>
<section class="glass profile-view">
<div class="profile-hero"><div class="profile-big-avatar"><?=h(mb_strtoupper(mb_substr(trim($profile['display_name']),0,1)))?></div><div><span class="feed-eyebrow"><?=((int)$profile['id']===(int)$member['id'])?'MY ACTIVITY':'STUDENT PROFILE'?></span><h1><?=h($profile['display_name'])?></h1><p>Community contributions and learning activity.</p></div><a class="btn" href="community.php">← Back to feed</a></div>
<div class="profile-stats"><div><strong><?=$profileStats['posts']?></strong><span>Posts</span></div><div><strong><?=$profileStats['replies']?></strong><span>Replies</span></div><div><strong><?=$profileStats['solved']?></strong><span>Solved</span></div><div><strong><?=$profileStats['resources']?></strong><span>Resources</span></div><div><strong><?=$profileStats['helpful']?></strong><span>Helpful</span></div></div>
<div class="profile-columns"><div><h3>Recent posts</h3><?php if($profilePosts):foreach($profilePosts as $pp):?><a class="activity-card" href="community.php#post-<?=$pp['id']?>"><b><?=h($pp['title'])?></b><small><?=h($pp['category'])?> • <?=h($pp['created_at'])?><?=!empty($pp['is_solved'])?' • ✓ Solved':''?></small></a><?php endforeach;else:?><p class="muted">No posts yet.</p><?php endif;?></div><div><h3>Recent replies</h3><?php if($profileReplies):foreach($profileReplies as $pr):?><a class="activity-card" href="community.php#post-<?=$pr['post_id']?>"><b><?=h($pr['title'])?></b><span><?=h(mb_strimwidth($pr['body'],0,120,'…'))?></span><small><?=h($pr['created_at'])?></small></a><?php endforeach;else:?><p class="muted">No replies yet.</p><?php endif;?></div></div>
</section>
<?php else:?>
<div class="community-feed-head glass">
  <div>
    <span class="feed-eyebrow">ICT LAB COMMUNITY</span>
    <h1>Learn together.</h1>
    <p>Ask questions, discuss lessons and share useful A/L ICT resources.</p>
  </div>
  <div class="feed-tools">
    <label class="community-search">
      <span>⌕</span>
      <input id="communitySearch" type="search" placeholder="Search posts…" oninput="filterCommunityPosts()">
    </label>
    <div class="notification-wrap">
      <button id="enableBrowserNotifications" class="notify-enable" type="button" onclick="enableBrowserNotifications()" title="Enable browser notifications">Enable alerts</button>
      <button id="notificationBell" class="notification-bell" type="button" onclick="toggleNotificationPanel(event)" aria-label="Notifications" aria-expanded="false">🔔<?php if($unreadCount>0):?><span class="notification-count"><?=$unreadCount>99?'99+':$unreadCount?></span><?php endif;?></button>
      <div id="notificationPanel" class="notification-panel">
        <div class="notification-panel-head"><strong>Notifications</strong><?php if($unreadCount):?><span><?=$unreadCount?> unread</span><?php endif;?></div>
        <div class="notification-list">
        <?php if($notifications): foreach($notifications as $note):?>
          <a class="notification-item <?=empty($note['is_read'])?'unread':''?>" href="?notification=<?=$note['id']?>">
            <span class="notification-dot"></span><span><b><?=h($note['message'])?></b><small><?=h($note['created_at']??'')?></small></span>
          </a>
        <?php endforeach; else:?><div class="notification-empty">No notifications yet.</div><?php endif;?>
        </div>
      </div>
    </div>
    <button class="btn primary create-focus" type="button" onclick="document.querySelector('.composer input[name=title]')?.focus()">＋ Create post</button>
  </div>
</div>
<form class="community-filterbar glass" method="get"><?php if(in_array($cat,$cats,true)):?><input type="hidden" name="category" value="<?=h($cat)?>"><?php endif;?><label><span>Status</span><select name="status"><option value="all">All posts</option><option value="unsolved" <?=$statusFilter==='unsolved'?'selected':''?>>Unsolved</option><option value="solved" <?=$statusFilter==='solved'?'selected':''?>>Solved</option></select></label><label><span>Resources</span><select name="resources"><option value="all">Any</option><option value="with" <?=$resourceFilter==='with'?'selected':''?>>With resources</option><option value="without" <?=$resourceFilter==='without'?'selected':''?>>Without resources</option></select></label><label><span>Sort</span><select name="sort"><option value="newest">Newest</option><option value="oldest" <?=$sortFilter==='oldest'?'selected':''?>>Oldest</option><option value="helpful" <?=$sortFilter==='helpful'?'selected':''?>>Helpful activity</option></select></label><button class="btn primary" type="submit">Apply</button><a class="btn" href="community.php">Reset</a></form><section class="glass composer"><h2 style="margin-top:0">Create a post</h2><form method="post" enctype="multipart/form-data"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="post"><select name="category"><?php foreach($cats as $c):?><option><?=h($c)?></option><?php endforeach;?></select><input name="title" maxlength="140" placeholder="What do you want to ask or share?" required><textarea name="body" maxlength="5000" placeholder="Write your question, explanation or resource details…" required></textarea><input name="resource_url" maxlength="1000" type="url" placeholder="Optional resource/video/paper link (https://…)">
<label class="attachment-picker">
  <span class="attachment-icon">＋</span>
  <span><strong>Attach image or PDF</strong><small>JPG, PNG, WEBP or PDF • max 10 MB</small></span>
  <input id="communityAttachment" name="attachment" type="file" accept=".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf" onchange="showAttachmentName(this)">
</label>
<div id="attachmentName" class="attachment-name" hidden></div>
<button class="btn primary">Publish post</button></form></section><?php endif;?>
<?php else:?><section class="glass composer"><h2>Join the Community</h2><p class="muted">Accept the community rules once before posting or replying.</p><button class="btn primary" onclick="document.getElementById('joinDialog').showModal()">Join Community</button></section><?php endif;?>
<?php foreach($posts as $p):
$att=$attachmentsByPost[(int)$p['id']]??null;$postHelpful=0;$postReacted=false;
if($db){$rq=$db->prepare("SELECT COUNT(*) FROM community_reactions WHERE target_type='post' AND target_id=?");$rq->execute([$p['id']]);$postHelpful=(int)$rq->fetchColumn();if($member){$rq=$db->prepare("SELECT 1 FROM community_reactions WHERE user_id=? AND target_type='post' AND target_id=?");$rq->execute([$uid,$p['id']]);$postReacted=(bool)$rq->fetchColumn();}}
?><article class="glass post community-post" id="post-<?=$p['id']?>"><div class="post-headline"><div class="post-author">
<span class="post-avatar"><?=h(mb_strtoupper(mb_substr(trim($p['display_name']),0,1)))?></span>
<div><div class="post-author-name"><a class="profile-link" href="?profile=<?=$p['user_id']?>"><?=h($p['display_name'])?></a></div><div class="meta"><span class="tag"><?=h($p['category'])?></span><span><?=h($p['created_at'])?></span></div></div>
</div><?php if(!empty($p['is_pinned'])):?><span class="pinned-badge">📌 Pinned</span><?php endif;?><?php if(!empty($p['is_solved'])):?><span class="solved-badge">✓ Solved</span><?php endif;?></div><h2><?=h($p['title'])?></h2><div><?=nl2br(h($p['body']))?></div><?php if($p['resource_url']):?><p><a class="btn" href="<?=h($p['resource_url'])?>" target="_blank" rel="noopener noreferrer">🔗 Open shared resource</a></p><?php endif;?>
<?php if($att && (int)$att['post_id']===(int)$p['id']):?>
  <?php if(str_starts_with($att['mime_type'],'image/')):?>
    <button class="post-image-wrap viewer-trigger" type="button"
      onclick="openCommunityViewer('image','<?=h($att['file_path'])?>','<?=h($att['original_name'])?>')"
      aria-label="Open image <?=h($att['original_name'])?>">
      <img class="post-image" src="<?=h($att['file_path'])?>" alt="<?=h($att['original_name'])?>" loading="lazy">
    </button>
  <?php elseif($att['mime_type']==='application/pdf'):?>
    <button class="pdf-card viewer-trigger" type="button"
      onclick="openCommunityViewer('pdf','<?=h($att['file_path'])?>','<?=h($att['original_name'])?>')">
      <span class="pdf-icon">PDF</span>
      <span class="pdf-info"><strong><?=h($att['original_name'])?></strong><small><?=h(community_file_size((int)$att['file_size']))?> • PDF document</small></span>
      <span class="pdf-open">View</span>
    </button>
  <?php endif;?>
<?php endif;?>
<?php if($db){$cs=$db->prepare("SELECT c.*,u.display_name FROM comments c JOIN community_users u ON u.id=c.user_id WHERE c.post_id=? AND c.status='visible' ORDER BY c.id");$cs->execute([$p['id']]);foreach($cs as $c):$commentHelpful=0;$commentReacted=false;$rq=$db->prepare("SELECT COUNT(*) FROM community_reactions WHERE target_type='comment' AND target_id=?");$rq->execute([$c['id']]);$commentHelpful=(int)$rq->fetchColumn();if($member){$rq=$db->prepare("SELECT 1 FROM community_reactions WHERE user_id=? AND target_type='comment' AND target_id=?");$rq->execute([$uid,$c['id']]);$commentReacted=(bool)$rq->fetchColumn();}?><div class="comment"><b><a class="profile-link" href="?profile=<?=$c['user_id']?>"><?=h($c['display_name'])?></a></b> <span class="muted"><?=h($c['created_at'])?></span><div><?=nl2br(h($c['body']))?></div><?php if((int)$c['user_id']===$uid):?><details class="owner-edit"><summary>Edit reply</summary><form method="post"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="edit_comment"><input type="hidden" name="comment_id" value="<?=$c['id']?>"><input type="hidden" name="post_id" value="<?=$p['id']?>"><textarea name="body" maxlength="1500" required><?=h($c['body'])?></textarea><button class="btn primary">Save changes</button></form><form method="post" onsubmit="return confirm('Delete this reply?')"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="delete_own_comment"><input type="hidden" name="comment_id" value="<?=$c['id']?>"><input type="hidden" name="post_id" value="<?=$p['id']?>"><button class="btn danger">Delete reply</button></form></details><?php endif;?><?php if($member):?><form method="post" class="comment-helpful"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="react"><input type="hidden" name="target_type" value="comment"><input type="hidden" name="target_id" value="<?=$c['id']?>"><input type="hidden" name="post_id" value="<?=$p['id']?>"><button class="mini-helpful <?=$commentReacted?'active':''?>" type="submit">👍 Helpful<?=$commentHelpful?' · '.$commentHelpful:''?></button></form><form method="post" style="margin-top:6px"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="report"><input type="hidden" name="post_id" value="<?=$p['id']?>"><input type="hidden" name="comment_id" value="<?=$c['id']?>"><input type="hidden" name="reason" value="Inappropriate reply"><button class="btn" type="submit">Report reply</button></form><?php endif;?></div><?php endforeach;}?>
<?php if($member):?>
<div class="post-actionbar">
  <button class="post-action" type="button" onclick="toggleReplyBox(<?=$p['id']?>)">↩ Reply</button>
  <?php if($member):?><form method="post" class="inline-action"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="react"><input type="hidden" name="target_type" value="post"><input type="hidden" name="target_id" value="<?=$p['id']?>"><input type="hidden" name="post_id" value="<?=$p['id']?>"><button class="post-action helpful-action <?=$postReacted?'active':''?>" type="submit">👍 Helpful<?=$postHelpful?' · '.$postHelpful:''?></button></form><?php endif;?> <button class="post-action save-post" type="button" data-post="<?=$p['id']?>" onclick="toggleSavedPost(this,<?=$p['id']?>)">♡ Save</button>
  <button class="post-action" type="button" onclick="shareCommunityPost(<?=$p['id']?>)">↗ Share</button>
  <?php if((int)$p['user_id']===$uid):?>
  <form method="post" class="inline-action"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="toggle_solved"><input type="hidden" name="post_id" value="<?=$p['id']?>"><button class="post-action solved-action" type="submit"><?=!empty($p['is_solved'])?'↻ Reopen':'✓ Mark solved'?></button></form>
  <details class="owner-edit post-owner-edit"><summary class="post-action">✎ Edit</summary><form method="post"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="edit_post"><input type="hidden" name="post_id" value="<?=$p['id']?>"><input name="title" maxlength="140" value="<?=h($p['title'])?>" required><textarea name="body" maxlength="5000" required><?=h($p['body'])?></textarea><input name="resource_url" maxlength="1000" type="url" value="<?=h($p['resource_url']??'')?>" placeholder="Optional resource link"><button class="btn primary">Save changes</button></form><form method="post" onsubmit="return confirm('Delete this post and its attachment?')"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="delete_own_post"><input type="hidden" name="post_id" value="<?=$p['id']?>"><button class="btn danger">Delete post</button></form></details>
  <?php endif;?>
  <form method="post" class="inline-action report-action"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="report"><input type="hidden" name="post_id" value="<?=$p['id']?>"><input type="hidden" name="reason" value="Community rules"><button class="post-action" type="submit">⚑ Report</button></form>
</div>
<div class="reply-composer" id="replyBox-<?=$p['id']?>">
  <form method="post"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="comment"><input type="hidden" name="post_id" value="<?=$p['id']?>"><input name="body" maxlength="1500" placeholder="Write a helpful reply…" required><button class="btn primary">Reply</button></form>
</div>
<?php endif;?></article><?php endforeach;?>
<?php if($db&&!$posts):?><div class="glass post"><h2>No posts yet</h2><p class="muted">Be the first student to start a useful ICT discussion.</p></div><?php endif;?></main></div></div>
<?php if($db&&!$member):?><dialog id="joinDialog"><h2>ICT Lab Community Agreement</h2><p class="muted">Rules version <?=h($rulesVersion)?>. You must agree before participating.</p><ul class="rules"><li>Be respectful. No bullying, harassment, hate, threats or targeted abuse.</li><li>No sexual/adult, dangerous, illegal or otherwise inappropriate material.</li><li>No spam, scams, impersonation or deliberately misleading resources.</li><li>Do not post private information about yourself or other people.</li><li>Share learning resources responsibly and respect copyright.</li><li>Moderators may remove content or restrict accounts when necessary to protect the community.</li></ul><form method="post"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="join"><label>Community display name</label><input name="display_name" maxlength="40" required placeholder="Choose a display name"><label style="display:flex;gap:10px;align-items:flex-start"><input style="width:auto;margin-top:4px" type="checkbox" name="agree" value="1" required><span>I have read and agree to follow the ICT Lab Community Rules.</span></label><div class="actions"><button class="btn primary">Agree & Join</button><button type="button" class="btn" onclick="this.closest('dialog').close()">Cancel</button></div></form></dialog><?php endif;?>
<script>
function filterCommunityPosts(){
  const q=(document.getElementById('communitySearch')?.value||'').toLowerCase().trim();
  document.querySelectorAll('.community-post, .post-card').forEach(card=>{
    card.style.display=!q || card.innerText.toLowerCase().includes(q) ? '' : 'none';
  });
}
document.querySelectorAll('.topics a').forEach(a=>{
  const here=new URLSearchParams(location.search).get('category')||'';
  const url=new URL(a.href,location.href);
  const cat=url.searchParams.get('category')||'';
  if(cat===here) a.classList.add('active-topic');
});
</script>

<script>
function showAttachmentName(input){
  const box=document.getElementById('attachmentName');
  if(!box)return;
  if(!input.files || !input.files[0]){box.hidden=true;box.textContent='';return;}
  const f=input.files[0];
  const mb=(f.size/1048576).toFixed(1);
  box.hidden=false;
  box.textContent='📎 '+f.name+' • '+mb+' MB';
}
</script>

<div id="communityViewer" class="community-viewer" aria-hidden="true" onclick="viewerBackdropClose(event)">
  <div class="community-viewer-shell" role="dialog" aria-modal="true" aria-labelledby="viewerTitle">
    <div class="community-viewer-bar">
      <div id="viewerTitle" class="community-viewer-title">Attachment</div>
      <button class="community-viewer-close" type="button" onclick="closeCommunityViewer()" aria-label="Close viewer">×</button>
    </div>
    <div id="communityViewerBody" class="community-viewer-body"></div>
  </div>
</div>
<script>
function openCommunityViewer(type,src,title){
  const viewer=document.getElementById('communityViewer');
  const body=document.getElementById('communityViewerBody');
  const heading=document.getElementById('viewerTitle');
  heading.textContent=title||'Attachment';
  body.innerHTML='';
  if(type==='image'){
    const img=document.createElement('img');
    img.src=src; img.alt=title||'Shared image'; img.className='community-viewer-image';
    body.appendChild(img);
  }else if(type==='pdf'){
    const frame=document.createElement('iframe');
    frame.src=src; frame.title=title||'Shared PDF'; frame.className='community-viewer-pdf';
    body.appendChild(frame);
  }
  viewer.classList.add('open');
  viewer.setAttribute('aria-hidden','false');
  document.body.classList.add('viewer-open');
  viewer.querySelector('.community-viewer-close')?.focus();
}
function closeCommunityViewer(){
  const viewer=document.getElementById('communityViewer');
  const body=document.getElementById('communityViewerBody');
  viewer.classList.remove('open');
  viewer.setAttribute('aria-hidden','true');
  document.body.classList.remove('viewer-open');
  body.innerHTML='';
}
function viewerBackdropClose(e){
  if(e.target===document.getElementById('communityViewer')) closeCommunityViewer();
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape' && document.getElementById('communityViewer')?.classList.contains('open')){
    closeCommunityViewer();
  }
});
</script>

<script>
function toggleReplyBox(id){
  const box=document.getElementById('replyBox-'+id);
  if(!box)return;
  box.classList.toggle('open');
  if(box.classList.contains('open')) box.querySelector('input[name=body]')?.focus();
}
function savedPostIds(){
  try{return JSON.parse(localStorage.getItem('ictlab_saved_posts')||'[]')}catch(e){return []}
}
function toggleSavedPost(btn,id){
  let ids=savedPostIds();
  if(ids.includes(id)){ids=ids.filter(x=>x!==id);btn.classList.remove('saved');btn.textContent='♡ Save'}
  else{ids.push(id);btn.classList.add('saved');btn.textContent='♥ Saved'}
  localStorage.setItem('ictlab_saved_posts',JSON.stringify(ids));
}
function restoreSavedPosts(){
  const ids=savedPostIds();
  document.querySelectorAll('.save-post').forEach(btn=>{
    const id=Number(btn.dataset.post);
    if(ids.includes(id)){btn.classList.add('saved');btn.textContent='♥ Saved'}
  });
}
async function shareCommunityPost(id){
  const url=location.origin+location.pathname+'#post-'+id;
  try{
    if(navigator.share){await navigator.share({title:'ICT Lab Community',url:url});}
    else{await navigator.clipboard.writeText(url);showShareToast('Post link copied');}
  }catch(e){}
}
function showShareToast(msg){
  let t=document.getElementById('communityShareToast');
  if(!t){t=document.createElement('div');t.id='communityShareToast';t.className='community-share-toast';document.body.appendChild(t)}
  t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);
}
document.addEventListener('DOMContentLoaded',restoreSavedPosts);
</script>

<script>
function toggleNotificationPanel(e){
  e?.stopPropagation();
  const p=document.getElementById('notificationPanel'),b=document.getElementById('notificationBell');
  if(!p)return;
  const open=p.classList.toggle('open');
  b?.setAttribute('aria-expanded',open?'true':'false');
}
document.addEventListener('click',e=>{
  const wrap=e.target.closest('.notification-wrap');
  if(!wrap){
    document.getElementById('notificationPanel')?.classList.remove('open');
    document.getElementById('notificationBell')?.setAttribute('aria-expanded','false');
  }
});
</script>

<script>
/* Phase 4B — browser notification foundation */
let ictlabLastNotificationId = null;

async function registerCommunityWorker(){
  if(!('serviceWorker' in navigator)) return null;
  try { return await navigator.serviceWorker.register('community-sw.js'); }
  catch(e){ console.warn('ICT Lab service worker:', e); return null; }
}
function syncNotifyButton(){
  const b=document.getElementById('enableBrowserNotifications');
  if(!b) return;
  if(!('Notification' in window)){ b.textContent='Alerts unsupported'; b.disabled=true; return; }
  if(Notification.permission==='granted'){ b.textContent='Alerts on'; b.classList.add('enabled'); }
  else if(Notification.permission==='denied'){ b.textContent='Alerts blocked'; b.disabled=true; }
  else b.textContent='Enable alerts';
}
async function enableBrowserNotifications(){
  if(!('Notification' in window)) return;
  const permission=await Notification.requestPermission();
  await registerCommunityWorker();
  syncNotifyButton();
  if(permission==='granted') showCommunityToast?.('Browser alerts enabled.');
}
async function pollCommunityNotifications(){
  try{
    const r=await fetch('community_notifications_api.php',{cache:'no-store',credentials:'same-origin'});
    if(!r.ok) return;
    const d=await r.json();
    if(!d.ok || !d.latest) return;
    const id=Number(d.latest.id||0);
    if(ictlabLastNotificationId===null){ ictlabLastNotificationId=id; return; }
    if(id>ictlabLastNotificationId){
      ictlabLastNotificationId=id;
      if('Notification' in window && Notification.permission==='granted'){
        const reg=await registerCommunityWorker();
        if(reg) reg.showNotification('ICT Lab Community',{
          body:d.latest.message||'You have a new community notification.',
          tag:'ictlab-community-'+id,
          data:{url:d.latest.open_url||'community.php'}
        });
      }
    }
  }catch(e){}
}
document.addEventListener('DOMContentLoaded',async()=>{
  syncNotifyButton();
  await registerCommunityWorker();
  pollCommunityNotifications();
  setInterval(pollCommunityNotifications,20000);
});
</script>
<script>
(()=>{const forms=document.querySelectorAll('form[method="post"]');forms.forEach(f=>f.addEventListener('submit',()=>{const b=f.querySelector('button[type="submit"],button:not([type])');if(b&&!b.dataset.busy){b.dataset.busy='1';b.disabled=true;const old=b.textContent;b.dataset.old=old;b.textContent='Working…';setTimeout(()=>{b.disabled=false;b.textContent=old;delete b.dataset.busy},5000)}}));
window.addEventListener('offline',()=>{if(typeof showCommunityToast==='function')showCommunityToast('You are offline. Some Community actions may not work.')});
window.addEventListener('online',()=>{if(typeof showCommunityToast==='function')showCommunityToast('Back online.')});
})();
</script></body></html>
