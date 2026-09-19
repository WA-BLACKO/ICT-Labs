<?php
if(session_status()!==PHP_SESSION_ACTIVE) session_start();
require_once __DIR__.'/community_config.php';
try{$db=community_db();}catch(Throwable $e){$db=null;}
if(!$db) exit('Database not connected.');
?><!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Saved Posts · ICT Lab</title><link rel="stylesheet" href="community.css"></head><body>
<div class="saved-page"><header class="saved-hero glass"><div><a href="community.php" class="resource-back">← Community</a><h1>Saved Posts</h1><p>Your bookmarked discussions on this browser.</p></div><a class="btn" href="community_resources.php">Resource Library</a></header>
<div id="savedPosts" class="saved-grid"><div class="glass saved-empty">Loading saved posts…</div></div></div>
<script>
const ids=JSON.parse(localStorage.getItem('ictlab_saved_posts')||'[]').map(Number).filter(Boolean);
const box=document.getElementById('savedPosts');
if(!ids.length){box.innerHTML='<div class="glass saved-empty">You haven’t saved any posts yet. Use the Save button on a community post.</div>'}
else fetch('community_saved_api.php?ids='+encodeURIComponent(ids.join(','))).then(r=>r.json()).then(data=>{
 if(!data.length){box.innerHTML='<div class="glass saved-empty">No saved posts are available anymore.</div>';return}
 box.innerHTML=data.map(p=>`<article class="glass saved-card"><div><span>${esc(p.category)}</span><small>${esc(p.created_at)}</small></div><h2>${esc(p.title)}</h2><p>${esc(p.body)}</p><footer><span>By ${esc(p.display_name)}</span><a class="btn" href="community.php#post-${Number(p.id)}">Open discussion</a></footer></article>`).join('')
}).catch(()=>box.innerHTML='<div class="glass saved-empty">Could not load saved posts.</div>');
function esc(v){const d=document.createElement('div');d.textContent=v??'';return d.innerHTML}
</script></body></html>