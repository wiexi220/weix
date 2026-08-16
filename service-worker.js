/* 离线缓存 Service Worker(需 http/https 环境生效, file:// 双击打开时自动跳过) */
var CACHE = "cqzsb-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/app.css",
  "./assets/katex/katex.min.css",
  "./assets/katex/katex.min.js",
  "./data/syllabus.js",
  "./data/math.js",
  "./data/english.js",
  "./data/computer.js",
  "./data/extra-math.js",
  "./data/extra-english.js",
  "./data/extra-computer.js",
  "./data/zhenti-math.js",
  "./data/zhenti-english.js",
  "./data/zhenti-computer.js",
  "./js/storage.js",
  "./js/quiz.js",
  "./js/generator.js",
  "./js/ai.js",
  "./js/math-render.js",
  "./js/app.js"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      var net = fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200 && resp.type === "basic") {
          var clone = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, clone); });
        }
        return resp;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});
