<?php
if(!headers_sent()){
 header('X-Content-Type-Options: nosniff');
 header('Referrer-Policy: strict-origin-when-cross-origin');
 header('X-Frame-Options: SAMEORIGIN');
 header("Permissions-Policy: camera=(), microphone=(), geolocation=()");
}
if(session_status()===PHP_SESSION_NONE){
 $https=!empty($_SERVER['HTTPS'])&&$_SERVER['HTTPS']!=='off';
 session_set_cookie_params(['httponly'=>true,'secure'=>$https,'samesite'=>'Lax','path'=>'/']);
}

// ICT Lab Community — edit these values for your WAMP/MySQL setup.
define('COMMUNITY_DB_HOST', 'localhost');
define('COMMUNITY_DB_NAME', 'ictlab_community');
define('COMMUNITY_DB_USER', 'root');
define('COMMUNITY_DB_PASS', '');
// CHANGE THIS before putting the admin panel online.
define('COMMUNITY_ADMIN_PASSWORD', 'ChangeMe-ICTLab-2026');

function community_db(): PDO {
    static $pdo = null;
    if ($pdo) return $pdo;
    $pdo = new PDO(
        'mysql:host='.COMMUNITY_DB_HOST.';dbname='.COMMUNITY_DB_NAME.';charset=utf8mb4',
        COMMUNITY_DB_USER, COMMUNITY_DB_PASS,
        [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]
    );
    return $pdo;
}
function h($v){ return htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8'); }
function csrf_token(){ if(empty($_SESSION['csrf'])) $_SESSION['csrf']=bin2hex(random_bytes(32)); return $_SESSION['csrf']; }
function check_csrf(){ if(!isset($_POST['csrf']) || !hash_equals($_SESSION['csrf']??'', $_POST['csrf'])) { http_response_code(403); exit('Invalid request token.'); } }
function community_user_id(){ return (int)($_SESSION['community_user_id']??0); }
function require_member(){ if(!community_user_id()){ header('Location: community.php'); exit; } }
function normalize_message($s){ return mb_strtolower(preg_replace('/\s+/u',' ',trim($s))); }
function blocked_reason(PDO $db, string $text): ?string {
    $n = normalize_message($text);
    $rows=$db->query("SELECT term, category FROM blocked_terms WHERE active=1")->fetchAll();
    foreach($rows as $r){ if($r['term']!=='' && mb_strpos($n, mb_strtolower($r['term']))!==false) return $r['category']; }
    if(preg_match('/(.)\1{10,}/u',$n)) return 'spam';
    return null;
}
function flash($key,$value=null){ if($value!==null){$_SESSION['flash'][$key]=$value;return;} $v=$_SESSION['flash'][$key]??null; unset($_SESSION['flash'][$key]); return $v; }
