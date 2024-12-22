'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/android-icon-36x36.png": "58d7d8f3c0d5bd2913246a838b4fa066",
"icons/favicon-16x16.png": "c8cbed129ae7d19b92ed485d5d0624a5",
"icons/android-chrome-192x192.png": "005a9e34763c16d375c4b642a54ff41f",
"icons/manifest.json": "d02408ad35400f09ccb0e359ec729121",
"icons/apple-icon-144x144.png": "a33ff33e7c50b64d7e78b3dfc3958597",
"icons/ms-icon-144x144.png": "a33ff33e7c50b64d7e78b3dfc3958597",
"icons/apple-icon-114x114.png": "718aec7093bd5798e91ded1567e901c8",
"icons/apple-icon-152x152.png": "15b0d4462fb7d9dd6a41279d1677d906",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/apple-icon-57x57.png": "4ffb3b3e9335b01278d2532b95bf93a9",
"icons/apple-icon-180x180.png": "d95ada84ef5c6bedcea05f24d1b2d7ed",
"icons/apple-icon-76x76.png": "a58d38faacc2ce31ed731fe203db5b73",
"icons/apple-icon-72x72.png": "13e88441749887dc52a1d3befdf15107",
"icons/apple-icon-60x60.png": "bc31317a67b9de729d9187a0ee042064",
"icons/apple-icon-120x120.png": "ac513f9d351ea6b5e9b6cd5fd7c9f50e",
"icons/apple-icon-precomposed.png": "99281805b16ce706a08eb361a5003684",
"icons/android-icon-96x96.png": "08c8a2c516dc91d05c064f64788276c0",
"icons/android-icon-48x48.png": "d86c0bc0bd72b52bf7e0bbbaf4d83ed4",
"icons/android-icon-192x192.png": "eee5094f959a3cb9d048b06bac30bd79",
"icons/favicon.ico": "bbcdae7b0dd599c7933808fba1a56f0f",
"icons/ms-icon-310x310.png": "9af2f2e01a7a8628dc1543bdaeee3ad4",
"icons/ms-icon-150x150.png": "470c249a442fd9daed119cb6e555d02e",
"icons/apple-icon.png": "99281805b16ce706a08eb361a5003684",
"icons/android-icon-144x144.png": "a33ff33e7c50b64d7e78b3dfc3958597",
"icons/android-icon-72x72.png": "13e88441749887dc52a1d3befdf15107",
"icons/ms-icon-70x70.png": "99f818911f8ddfceab709ff7a7da27f3",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"icons/apple-touch-icon.png": "fd764eea44cba439d9a96ef2ed0d6fe2",
"icons/android-chrome-512x512.png": "d73212a373fa7d521f65be5a3af5ab63",
"icons/favicon-32x32.png": "7825130da16918b69a124c4b73c91ecd",
"icons/favicon-96x96.png": "08c8a2c516dc91d05c064f64788276c0",
"assets/NOTICES": "41b904f532e3e64034ce828512464c87",
"assets/AssetManifest.json": "e9b5e1b5d19949bea2e636cbb40f83d0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "cc0b3f26586b4e47cc66b137f159b932",
"assets/lib/assets/images/breakout.png": "c36cef95dd7fe37f0cd3a0a269c886e5",
"assets/lib/assets/images/apple_logo.png": "1ec1e12293c4d74919e0a270c1842a8c",
"assets/lib/assets/images/icon.png": "3402bec03cd5f6a83ae1b7d0599ec4f9",
"assets/lib/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/lib/assets/fonts/JetBrainsMono-Regular.ttf": "a7151c5349c1aa20beefb3c5430c3a79",
"version.json": "0b2589dbf241c02cf3cab00b87114331",
"manifest.json": "60e69c5df2c9324442b8ba37c1e49b17",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"splash/img/dark-2x.png": "1abff47ffa8afe82282c5e467414ee0e",
"splash/img/light-2x.png": "1abff47ffa8afe82282c5e467414ee0e",
"splash/img/dark-3x.png": "cc464308d12b37ef1d21c24f3653f9a8",
"splash/img/dark-1x.png": "286c52dc8fb0a92b5f1c6c86e7fc3b60",
"splash/img/light-3x.png": "cc464308d12b37ef1d21c24f3653f9a8",
"splash/img/light-1x.png": "286c52dc8fb0a92b5f1c6c86e7fc3b60",
"splash/style.css": "fe6a658f418e73e81ed0e29ebae963ca",
"index.html": "61ea76f886c7384ea12e2397c53a792c",
"/": "61ea76f886c7384ea12e2397c53a792c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "8c76b56457fdd34513e53152901f968a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
