<?php
if(session_status()!==PHP_SESSION_ACTIVE) session_start();
require_once __DIR__.'/community_config.php';
header('Content-Type: application/json; charset=utf-8');header('Cache-Control: no-store, private');header('X-Content-Type-Options: nosniff');
try{$db=community_db();}catch(Throwable $e){$db=null;}
if(!$db){echo '[]';exit;}
$ids=array_values(array_unique(array_filter(array_map('intval',explode(',',$_GET['ids']??'')))));
$ids=array_slice($ids,0,100);
if(!$ids){echo '[]';exit;}
$ph=implode(',',array_fill(0,count($ids),'?'));
$s=$db->prepare("SELECT p.id,p.title,p.body,p.category,p.created_at,u.display_name FROM posts p JOIN community_users u ON u.id=p.user_id WHERE p.status='visible' AND p.id IN ($ph)");
$s->execute($ids);$rows=$s->fetchAll(PDO::FETCH_ASSOC);
$order=array_flip($ids);usort($rows,fn($a,$b)=>($order[(int)$a['id']]??999)<=>($order[(int)$b['id']]??999));
foreach($rows as &$r)$r['body']=mb_strimwidth($r['body'],0,220,'…');
echo json_encode($rows,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);