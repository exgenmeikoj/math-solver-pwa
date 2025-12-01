self.addEventListener('install', e => {
  e.waitUntil(caches.open('math-solver-v1').then(cache => cache.addAll(['./math_solver.html'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
