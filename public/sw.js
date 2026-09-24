self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Minimal fetch handler to satisfy PWA installability requirements
  // We use pass-through to avoid interfering with Next.js App Router caching.
  // In a production app, you can use Workbox for advanced caching.
  return;
});
