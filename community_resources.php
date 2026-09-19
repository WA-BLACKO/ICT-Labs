<?php
if(session_status()!==PHP_SESSION_ACTIVE) session_start();
require_once __DIR__.'/community_config.php';
try{$db=community_db();}catch(Throwable $e){$db=null;}
if(!$db) exit('Database not connected.');
$cats=['General','Networking','Databases','Programming','Web Development','Past Papers','Resources','Exam Help'];
$q=trim($_GET['q']??''); $cat=$_GET['category']??''; $type=$_GET['type']??'all'; $sort=$_GET['sort']??'newest';
$sql="SELECT p.id,p.title,p.body,p.category,p.resource_url,p.created_at,u.display_name,
 (SELECT pa.file_path FROM post_attachments pa WHERE pa.post_id=p.id ORDER BY pa.id ASC LIMIT 1) file_path,
 (SELECT pa.original_name FROM post_attachments pa WHERE pa.post_id=p.id ORDER BY pa.id ASC LIMIT 1) original_name,
 (SELECT pa.mime_type FROM post_attachments pa WHERE pa.post_id=p.id ORDER BY pa.id ASC LIMIT 1) mime_type,
 (SELECT COUNT(*) FROM community_reactions cr WHERE cr.target_type='post' AND cr.target_id=p.id) helpful_count
 FROM posts p JOIN community_users u ON u.id=p.user_id
 WHERE p.status='visible' AND ((p.resource_url IS NOT NULL AND p.resource_url<>'') OR EXISTS(SELECT 1 FROM post_attachments pa2 WHERE pa2.post_id=p.id))";
$args=[];
if(in_array($cat,$cats,true)){$sql.=" AND p.category=?";$args[]=$cat;}
if($q!==''){$sql.=" AND (p.title LIKE ? OR p.body LIKE ? OR u.display_name LIKE ?)";$like='%'.$q.'%';array_push($args,$like,$like,$like);}
if($type==='pdf')$sql.=" AND EXISTS(SELECT 1 FROM post_attachments px WHERE px.post_id=p.id AND px.mime_type='application/pdf')";
elseif($type==='image')$sql.=" AND EXISTS(SELECT 1 FROM post_attachments px WHERE px.post_id=p.id AND px.mime_type LIKE 'image/%')";
elseif($type==='link')$sql.=" AND p.resource_url IS NOT NULL AND p.resource_url<>''";
$sql.=$sort==='oldest'?" ORDER BY p.id ASC":($sort==='helpful'?" ORDER BY helpful_count DESC,p.id DESC":" ORDER BY p.id DESC");
$sql.=" LIMIT 100";$st=$db->prepare($sql);$st->execute($args);$items=$st->fetchAll();
?>
<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ICT Lab Resource Library</title><link rel="stylesheet" href="community.css"></head>
<body><div class="resource-page">
<header class="resource-hero glass"><div><a class="resource-back" href="community.php">← Community</a><h1>Resource Library</h1><p>Find papers, PDFs, images and useful learning links shared by the community.</p></div><div class="resource-count"><?=count($items)?> resources</div></header>
<form class="resource-filters glass" method="get"><input name="q" value="<?=h($q)?>" placeholder="Search resources…"><select name="category"><option value="">All topics</option><?php foreach($cats as $c):?><option value="<?=h($c)?>" <?=$cat===$c?'selected':''?>><?=h($c)?></option><?php endforeach;?></select><select name="type"><option value="all">All types</option><option value="pdf" <?=$type==='pdf'?'selected':''?>>PDF</option><option value="image" <?=$type==='image'?'selected':''?>>Images</option><option value="link" <?=$type==='link'?'selected':''?>>Links</option></select><select name="sort"><option value="newest">Newest</option><option value="oldest" <?=$sort==='oldest'?'selected':''?>>Oldest</option><option value="helpful" <?=$sort==='helpful'?'selected':''?>>Helpful activity</option></select><button class="btn primary">Search</button><a class="btn" href="community_resources.php">Reset</a></form>
<div class="resource-grid"><?php foreach($items as $r):?><article class="resource-card glass">
<div class="resource-meta"><span><?=h($r['category'])?></span><span><?=date('M j, Y',strtotime($r['created_at']))?></span></div>
<h2><?=h($r['title'])?></h2><p><?=h(mb_strimwidth($r['body'],0,150,'…'))?></p>
<?php if($r['file_path']):?>
<?php if(str_starts_with($r['mime_type'],'image/')):?><button class="resource-preview" onclick='openResource(<?=json_encode($r["file_path"])?>,"image")'><img src="<?=h($r['file_path'])?>" alt=""></button>
<?php elseif($r['mime_type']==='application/pdf'):?><button class="resource-file" onclick='openResource(<?=json_encode($r["file_path"])?>,"pdf")'>📄 <?=h($r['original_name']?:'PDF document')?></button><?php endif;?>
<?php endif;?>
<div class="resource-actions"><?php $safeUrl=(string)($r['resource_url']??'');$scheme=strtolower((string)parse_url($safeUrl,PHP_URL_SCHEME));if($safeUrl&&in_array($scheme,['http','https'],true)):?><a class="btn" href="<?=h($safeUrl)?>" target="_blank" rel="noopener noreferrer">Open link ↗</a><?php endif;?><a class="btn" href="community.php#post-<?=$r['id']?>">View discussion</a></div>
<div class="resource-by">Shared by <?=h($r['display_name'])?> · 👍 <?=intval($r['helpful_count'])?></div></article><?php endforeach;?>
<?php if(!$items):?><div class="glass resource-empty">No resources matched those filters.</div><?php endif;?></div></div>
<div id="resourceViewer" class="resource-viewer" onclick="if(event.target===this)closeResource()"><button onclick="closeResource()">×</button><img id="resourceImage" alt=""><iframe id="resourcePdf" title="PDF viewer"></iframe></div>
<script>function openResource(src,type){const v=document.getElementById('resourceViewer'),im=document.getElementById('resourceImage'),pdf=document.getElementById('resourcePdf');im.style.display=type==='image'?'block':'none';pdf.style.display=type==='pdf'?'block':'none';if(type==='image')im.src=src;else pdf.src=src;v.classList.add('open')}function closeResource(){const v=document.getElementById('resourceViewer');v.classList.remove('open');document.getElementById('resourcePdf').src=''}document.addEventListener('keydown',e=>{if(e.key==='Escape')closeResource()})</script></body></html>
