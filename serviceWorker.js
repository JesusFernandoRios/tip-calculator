const staticCalculator = "Tip-Calculator-dev"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCalculator).then(cache => {
      cache.addAll(assets)
    })
  )
})