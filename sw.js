self.addEventListener("install", e => {
  console.log("SW instalado");
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  console.log("SW ativo");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
