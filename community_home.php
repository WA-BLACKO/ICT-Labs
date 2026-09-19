<?php
if(session_status()!==PHP_SESSION_ACTIVE) session_start();
require_once __DIR__.'/community_config.php';
try{$db=community_db();}catch(Throwable $e){$db=null;}
if(!$db) exit('Database not connected.');
$uid=(int)(community_user_id()??0);
$member=null;if($uid){$s=$db->prepare("SELECT id,display_name,status FROM community_users WHERE id=?");$s->execute([$uid]);$member=$s->fetch();}
function dash_posts($db,$where,$limit=5){$sql="SELECT p.id,p.title,p.body,p.category,p.is_solved,p.is_pinned,p.created_at,u.display_name FROM posts p JOIN community_users u ON u.id=p.user_id WHERE p.status='visible' AND ".$where." ORDER BY p.is_pinned DESC,p.id DESC LIMIT ".intval($limit);return $db->query($sql)->fetchAll();}
$pinned=dash_posts($db,"p.is_pinned=1",4);
$recent=dash_posts($db,"1=1",6);
$unanswered=dash_posts($db,"p.is_solved=0",5);
$res=$db->query("SELECT p.id,p.title,p.category,p.created_at,u.display_name,pa.original_name,pa.mime_type FROM posts p JOIN community_users u ON u.id=p.user_id LEFT JOIN post_attachments pa ON pa.id=(SELECT MIN(pa2.id) FROM post_attachments pa2 WHERE pa2.post_id=p.id) WHERE p.status='visible' AND ((p.resource_url IS NOT NULL AND p.resource_url<>'') OR pa.id IS NOT NULL) ORDER BY p.id DESC LIMIT 5")->fetchAll();
$unread=0;if($uid){$n=$db->prepare("SELECT COUNT(*) FROM notifications WHERE user_id=? AND is_read=0");$n->execute([$uid]);$unread=(int)$n->fetchColumn();}
function h2($v){return htmlspecialchars((string)$v,ENT_QUOTES,'UTF-8');}
function cards($rows){foreach($rows as $r){echo '<a class="dash-item" href="community.php#post-'.(int)$r['id'].'"><div><b>'.h2($r['title']).'</b><span>'.h2($r['category']).' · '.h2($r['display_name']).'</span></div>'.(!empty($r['is_solved'])?'<em>✓ Solved</em>':'').'</a>';}}
?><!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ICT Lab Community Home</title><link rel="stylesheet" href="community.css"></head><body>
<div class="dash-page">
<header class="dash-hero glass"><div><a href="community.php" class="resource-back">← Community feed</a><h1>Community Home</h1><p><?= $member?'Welcome back, '.h2($member['display_name']).'.':'ICT Lab students learning together.'?> Here’s what’s happening now.</p></div><div class="dash-notify">🔔 <b><?=$unread?></b><span> unread</span></div></header>
<div class="dash-actions"><a class="glass" href="community.php#composer">＋ Ask a question</a><a class="glass" href="community.php#composer">⇧ Share a resource</a><a class="glass" href="community_resources.php">▣ Resource Library</a><a class="glass" href="community_saved.php">★ Saved Posts</a><a class="glass" href="community.php<?= $uid?'?profile='.$uid:''?>">◎ My Activity</a></div>
<?php if($pinned):?><section class="dash-section glass"><div class="dash-title"><div><small>IMPORTANT</small><h2>📌 Pinned</h2></div><a href="community.php">View feed →</a></div><div class="dash-list"><?php cards($pinned);?></div></section><?php endif;?>
<div class="dash-columns">
<section class="dash-section glass"><div class="dash-title"><div><small>DISCUSSIONS</small><h2>Recent posts</h2></div><a href="community.php">See all →</a></div><div class="dash-list"><?php cards($recent);?></div></section>
<section class="dash-section glass"><div class="dash-title"><div><small>HELP OUT</small><h2>Unsolved questions</h2></div><a href="community.php?status=unsolved">See all →</a></div><div class="dash-list"><?php cards($unanswered);?></div></section>
</div>
<section class="dash-section glass"><div class="dash-title"><div><small>LEARNING MATERIALS</small><h2>Latest resources</h2></div><a href="community_resources.php">Open library →</a></div><div class="dash-resource-grid"><?php foreach($res as $r):?><a href="community.php#post-<?=(int)$r['id']?>" class="dash-resource"><span><?=($r['mime_type']==='application/pdf'?'📄':(str_starts_with((string)$r['mime_type'],'image/')?'🖼️':'🔗'))?></span><div><b><?=h2($r['title'])?></b><small><?=h2($r['original_name']?:$r['category'])?> · <?=h2($r['display_name'])?></small></div></a><?php endforeach;?><?php if(!$res):?><p class="muted">No resources shared yet.</p><?php endif;?></div></section>
</div></body></html>