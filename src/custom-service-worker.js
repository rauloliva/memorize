self.addEventListener('fetch', e => {
    console.log(`Intercepting ${e.request.method} to ${e.request.url}`);
})

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                './memorize/static/',
                './memorize/static/media'
            ])
        })
    )
})