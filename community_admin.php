<?php
session_start();require __DIR__.'/community_config.php';
try{$db=community_db();}catch(Throwable $e){$db=null;}
if(isset($_POST['logout'])){unset($_SESSION['community_admin']);header('Location: community_admin.php');exit;}
if(empty($_SESSION['community_admin'])){
 if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['password']) && hash_equals(COMMUNITY_ADMIN_PASSWORD,(string)$_POST['password'])){$_SESSION['community_admin']=true;header('Location: community_admin.php');exit;}
?><!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="community.css"><title>Community Admin</title></head><body><div class="wrap" style="max-width:520px"><div class="glass admin-card"><h1>Community Admin</h1><p class="muted">Owner/moderator access.</p><form method="post"><input type="password" name="password" placeholder="Admin password" required><button class="btn primary">Sign in</button></form><p class="muted">Change the default password in <code>community_config.php</code> before deployment.</p></div></div></body></html><?php exit;}
if(!$db) exit('Database not connected. Import community_setup.sql first.');
if($_SERVER['REQUEST_METHOD']==='POST'){check_csrf();$a=$_POST['action']??'';$id=(int)($_POST['id']??0);
 if($a==='toggle_pin'){$id=(int)($_POST['id']??0);if($id>0)$db->prepare('UPDATE posts SET is_pinned=IF(is_pinned=1,0,1) WHERE id=?')->execute([$id]);}
elseif($a==='delete_post'){
  $fs=$db->prepare("SELECT file_path FROM post_attachments WHERE post_id=?");$fs->execute([$id]);
  foreach($fs->fetchAll() as $fr){$rel=(string)($fr['file_path']??'');$base=realpath(__DIR__.DIRECTORY_SEPARATOR.'community_uploads');$full=realpath(__DIR__.DIRECTORY_SEPARATOR.$rel);if($base&&$full&&str_starts_with($full,$base.DIRECTORY_SEPARATOR)&&is_file($full))@unlink($full);}
  $db->prepare("DELETE FROM post_attachments WHERE post_id=?")->execute([$id]);
  $db->prepare("UPDATE posts SET status='deleted' WHERE id=?")->execute([$id]);
  $db->prepare("INSERT INTO moderation_actions(action_type,target_type,target_id,note) VALUES('delete','post',?,'Removed from admin dashboard; attachments cleaned')")->execute([$id]);
}
 if($a==='delete_comment'){$db->prepare("UPDATE comments SET status='deleted' WHERE id=?")->execute([$id]);$db->prepare("INSERT INTO moderation_actions(action_type,target_type,target_id,note) VALUES('delete','comment',?,'Removed from admin dashboard')")->execute([$id]);}
 if(in_array($a,['mute','ban','activate'],true)){$status=$a==='activate'?'active':($a==='mute'?'muted':'banned');$db->prepare('UPDATE community_users SET status=? WHERE id=?')->execute([$status,$id]);$db->prepare("INSERT INTO moderation_actions(action_type,target_type,target_id,note) VALUES(?,'user',?,'Status changed from admin dashboard')")->execute([$a,$id]);}
 if($a==='resolve_report')$db->prepare("UPDATE reports SET status='reviewed' WHERE id=?")->execute([$id]);
 if($a==='add_term'){$term=trim($_POST['term']??'');$cat=trim($_POST['category']??'moderation');if($term!=='')$db->prepare('INSERT IGNORE INTO blocked_terms(term,category) VALUES(?,?)')->execute([$term,$cat]);}
  if($a==='remove_term'){
    $id=(int)($_POST['id']??0);
    if($id>0)$db->prepare('DELETE FROM blocked_terms WHERE id=?')->execute([$id]);
  }
 header('Location: community_admin.php');exit;}
$stats=['members'=>$db->query('SELECT COUNT(*) FROM community_users')->fetchColumn(),'posts'=>$db->query("SELECT COUNT(*) FROM posts WHERE status='visible'")->fetchColumn(),'reports'=>$db->query("SELECT COUNT(*) FROM reports WHERE status='open'")->fetchColumn(),'blocked'=>$db->query('SELECT COUNT(*) FROM blocked_terms WHERE active=1')->fetchColumn()];
$reports=$db->query("SELECT r.*,u.display_name FROM reports r JOIN community_users u ON u.id=r.reporter_id WHERE r.status='open' ORDER BY r.id DESC LIMIT 30")->fetchAll();$posts=$db->query("SELECT p.id,p.title,p.body,p.category,p.created_at,u.display_name,u.id user_id FROM posts p JOIN community_users u ON u.id=p.user_id WHERE p.status='visible' ORDER BY p.id DESC LIMIT 30")->fetchAll();$users=$db->query('SELECT * FROM community_users ORDER BY id DESC LIMIT 50')->fetchAll();$blockedTerms=$db->query("SELECT id,term,category,active FROM blocked_terms ORDER BY id DESC")->fetchAll();
$adminStats=[
 'visible_posts'=>(int)$db->query("SELECT COUNT(*) FROM posts WHERE status='visible'")->fetchColumn(),
 'open_reports'=>(int)$db->query("SELECT COUNT(*) FROM reports WHERE status='open'")->fetchColumn(),
 'active_members'=>(int)$db->query("SELECT COUNT(*) FROM community_users WHERE status='active'")->fetchColumn(),
 'resources'=>(int)$db->query("SELECT COUNT(DISTINCT post_id) FROM post_attachments")->fetchColumn()
];
?><!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Community Admin — ICT Lab</title><link rel="stylesheet" href="community.css"></head><body><div class="wrap"><div class="admin-stats"><div class="glass"><b><?=$adminStats['visible_posts']?></b><span>Visible posts</span></div><div class="glass"><b><?=$adminStats['open_reports']?></b><span>Open reports</span></div><div class="glass"><b><?=$adminStats['active_members']?></b><span>Active members</span></div><div class="glass"><b><?=$adminStats['resources']?></b><span>Resources</span></div></div><div class="top"><div><div class="brand">♾ Community Admin</div><div class="muted">Moderation & community health</div></div><div><a class="btn" href="community.php">View Community</a><form method="post" style="display:inline"><button class="btn" name="logout">Logout</button></form></div></div><div class="admin-grid"><div class="glass stat"><span class="muted">Members</span><strong><?=$stats['members']?></strong></div><div class="glass stat"><span class="muted">Visible posts</span><strong><?=$stats['posts']?></strong></div><div class="glass stat"><span class="muted">Open reports</span><strong><?=$stats['reports']?></strong></div><div class="glass stat"><span class="muted">Blocked terms</span><strong><?=$stats['blocked']?></strong></div></div>
<section class="glass admin-card" style="margin-top:16px"><h2>Reports queue</h2><div class="table-wrap"><table><tr><th>Reporter</th><th>Target</th><th>Reason</th><th>Action</th></tr><?php foreach($reports as $r):?><tr><td><?=h($r['display_name'])?></td><td><?= $r['post_id']?'Post #'.(int)$r['post_id']:'Comment #'.(int)$r['comment_id']?></td><td><?=h($r['reason'])?></td><td><form method="post"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="resolve_report"><input type="hidden" name="id" value="<?=$r['id']?>"><button class="btn">Mark reviewed</button></form></td></tr><?php endforeach;?></table></div></section>
<section class="glass admin-card" style="margin-top:16px"><h2>Recent posts</h2><div class="table-wrap"><table><tr><th>User</th><th>Post</th><th>Category</th><th>Moderate</th></tr><?php foreach($posts as $p):?><tr><td><?=h($p['display_name'])?></td><td><b><?=h($p['title'])?></b><br><span class="muted"><?=h(mb_strimwidth($p['body'],0,130,'…'))?></span></td><td><?=h($p['category'])?></td><td><div class="admin-post-actions"><form method="post"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="toggle_pin"><input type="hidden" name="id" value="<?=$p['id']?>"><button class="btn"><?=$p['is_pinned']?'Unpin':'📌 Pin'?></button></form><form method="post"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="action" value="delete_post"><input type="hidden" name="id" value="<?=$p['id']?>"><button class="btn danger">Delete</button></form></div></td></tr><?php endforeach;?></table></div></section>
<section class="glass admin-card" style="margin-top:16px"><h2>Members</h2><div class="table-wrap"><table><tr><th>Name</th><th>Status</th><th>Joined</th><th>Actions</th></tr><?php foreach($users as $u):?><tr><td><?=h($u['display_name'])?></td><td><?=h($u['status'])?></td><td><?=h($u['joined_at'])?></td><td><form method="post" style="display:flex;gap:5px"><input type="hidden" name="csrf" value="<?=h(csrf_token())?>"><input type="hidden" name="id" value="<?=$u['id']?>"><button class="btn" name="action" value="activate">Active</button><button class="btn" name="action" value="mute">Mute</button><button class="btn danger" name="action" value="ban">Ban</button></form></td></tr><?php endforeach;?></table></div></section>
<section class="glass admin-card blocked-manager" style="margin-top:16px">
<h2>🛡️ Blocked Words Manager</h2>
<p class="muted">Only admins can see this list. Community users are never told which exact term triggered the filter.</p>
<form method="post" class="blocked-add-form">
<input type="hidden" name="csrf" value="<?=h(csrf_token())?>">
<input type="hidden" name="action" value="add_term">
<input name="term" placeholder="Blocked term or phrase" required autocomplete="off">
<input name="category" placeholder="Reason/category e.g. harassment">
<button class="btn primary">+ Add to filter</button>
</form>
<div class="blocked-toolbar"><strong>Currently stored: <?=count($blockedTerms)?></strong><input id="blockedSearch" type="search" placeholder="Search blocked terms…" oninput="filterBlockedTerms(this.value)"></div>
<div class="table-wrap">
<table id="blockedTermsTable">
<tr><th>Blocked term</th><th>Category</th><th>Status</th><th>Action</th></tr>
<?php foreach($blockedTerms as $bt):?>
<tr class="blocked-row" data-search="<?=h(strtolower($bt['term'].' '.$bt['category']))?>">
<td><code class="blocked-word"><?=h($bt['term'])?></code></td>
<td><?=h($bt['category'])?></td>
<td><span class="term-status <?=$bt['active']?'active':'inactive'?>"><?=$bt['active']?'Active':'Inactive'?></span></td>
<td>
<form method="post" onsubmit="return confirm('Remove this term from the blocked list?');">
<input type="hidden" name="csrf" value="<?=h(csrf_token())?>">
<input type="hidden" name="action" value="remove_term">
<input type="hidden" name="id" value="<?=(int)$bt['id']?>">
<button class="btn danger" type="submit">Remove</button>
</form>
</td>
</tr>
<?php endforeach;?>
<?php if(!$blockedTerms):?><tr><td colspan="4" class="muted">No blocked terms yet.</td></tr><?php endif;?>
</table>
</div>
<script>
function filterBlockedTerms(value){
  const q=value.toLowerCase().trim();
  document.querySelectorAll('#blockedTermsTable .blocked-row').forEach(row=>{
    row.style.display=!q || row.dataset.search.includes(q) ? '' : 'none';
  });
}
</script>
</section></div></body></html>
