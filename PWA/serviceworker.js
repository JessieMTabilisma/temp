var cacheName = 'v1';
var cacheFiles = [
    './',
    './index.html',
    './css/animation.css',
    './css/main.css',
    'https://fonts.googleapis.com/css?family=Lato:700',
    'https://fonts.googleapis.com/css?family=Roboto+Condensed',
    './script/app.js',
    './script/data.js',
    './script/INDEXDB.js',
]
//install event
self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Installed");
    //waits until promise is resolved
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[ServiceWorker] Caching cacheFiles");
            return cache.addAll(cacheFiles);
        })
    )
})
//activate event
self.addEventListener('activate', function(e) {
    console.log("[ServiceWorker] Activated");
})
//fetch event
self.addEventListener('fetch', function(e) {
    console.log("[ServiceWorker] Fetching", e.request.url);

    e.respondWith(
        caches.match(e.request).then(function(response) {
            if(response) {
                console.log("[ServiceWorker] Found in cache", e.request.url);
                return response;
            }
            return fetch(e.request);
        })
    )
})