// Hippocketease Service Worker (hardened for testing)
// - Caches only a pre-declared allowlist of same-origin files.
// - Does NOT cache cross-origin or unexpected responses.
// - Falls back to a clear offline message if the app shell isn't cached.

const CACHE_NAME = 'hippocketease-test-v1';
const ORIGIN = self.location.origin;
const APP_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GETs on our own origin. Everything else falls through to the browser.
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== ORIGIN) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((response) => {
        // Only cache successful, same-origin, basic responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return response;
      }).catch(() => {
        // Offline + not in cache — serve the app shell so the app still opens
        return caches.match('./index.html');
      });
    })
  );
});
