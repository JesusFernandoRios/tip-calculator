const staticCalculator = "Tip-Calculator-dev"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
]

// storing Cache
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCalculator).then(cache => {
      cache.addAll(assets)
    })
  )
})

// offline functionality
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})