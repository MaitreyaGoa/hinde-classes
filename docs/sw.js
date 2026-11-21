/* Hinde Classes service worker. Bump VERSION to force a clean cache. */
const VERSION = "hc-v1";
const CORE = ["/", "/games/", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png", "/offline.html"];
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: cache-first (they never change for a given URL)
  if (FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
    })));
    return;
  }
  // Everything else off-site (Apps Script, Google sign-in, YouTube, APIs) goes straight to the network
  if (url.origin !== location.origin) return;

  // Same-site: always try the network first so new deploys show up at once;
  // fall back to the saved copy when offline.
  e.respondWith(fetch(req).then(res => {
    if (res.ok && res.type === "basic") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, {ignoreSearch: req.mode === "navigate"}).then(hit =>
    hit || (req.mode === "navigate" ? caches.match("/offline.html") : Response.error()))));
});
