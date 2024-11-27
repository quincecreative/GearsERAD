self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/openDifferential/",
          "/openDifferential/index.html",
          "/openDifferential/index.js",
          "/openDifferential/style.css",
          "/openDifferential/main.js",
          "/openDifferential/housing.JPG",
          "/openDifferential/gear.JPG",
          "/openDifferential/Cheveron_process copy-frei.png",
          "/openDifferential/download.png",
          "/openDifferential/environment.env",
          "/openDifferential/gkn-au-stacked.svg",
          "/openDifferential/85 Size ASM (NovaAnimacija).glb",
          "/openDifferential/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Lt.otf",
          "/openDifferential/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Bd.otf",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
