import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Precache static files during the build process
precacheAndRoute(self.__WB_MANIFEST || []);

// Cache API responses
registerRoute(
  ({ url }) => url.origin === "https://your-api-url.com",
  new StaleWhileRevalidate()
);

// Cache other assets like images
registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "image-cache",
  })
);

// Install and activate events for cleanup
self.addEventListener("install", (event) => self.skipWaiting());
self.addEventListener("activate", (event) => self.clients.claim());
