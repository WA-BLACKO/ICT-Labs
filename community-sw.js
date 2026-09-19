self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const url=(event.notification.data&&event.notification.data.url)||'community.php';
  event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const client of list){
      if('focus' in client){ client.navigate(url); return client.focus(); }
    }
    if(clients.openWindow) return clients.openWindow(url);
  }));
});
