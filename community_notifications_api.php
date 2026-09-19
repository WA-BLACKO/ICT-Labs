<?php
session_start();
require __DIR__.'/community_config.php';
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
try{$db=community_db();}catch(Throwable $e){http_response_code(500);echo json_encode(['ok'=>false]);exit;}
$uid=community_user_id();
if(!$uid){echo json_encode(['ok'=>true,'latest'=>null]);exit;}
$q=$db->prepare('SELECT id,message,link,is_read,created_at FROM notifications WHERE user_id=? ORDER BY id DESC LIMIT 1');
$q->execute([$uid]);$n=$q->fetch();
if(!$n){echo json_encode(['ok'=>true,'latest'=>null]);exit;}
$link=(string)($n['link']??'community.php');
echo json_encode(['ok'=>true,'latest'=>[
  'id'=>(int)$n['id'],
  'message'=>(string)$n['message'],
  'is_read'=>(int)$n['is_read'],
  'created_at'=>(string)$n['created_at'],
  'open_url'=>'community.php?notification='.(int)$n['id']
]],JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
