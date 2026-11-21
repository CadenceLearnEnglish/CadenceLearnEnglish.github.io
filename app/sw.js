const C='cadence-v1';self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./data.json','./manifest.webmanifest','../icons/icon-192.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp)).catch(()=>{});return r}).catch(()=>caches.match(e.request)))});
