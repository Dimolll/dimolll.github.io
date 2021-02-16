'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "2baa32b4d950a816c9336e7f1b9f7729",
"/": "2baa32b4d950a816c9336e7f1b9f7729",
"main.dart.js": "fc7ce05a28c199e19c58b2cb5f2f6487",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"assets/AssetManifest.json": "3e33bac0a1c3694a6fa954cb5e396c9d",
"assets/NOTICES": "40b98571391d59b405ce517bab017cfe",
"assets/FontManifest.json": "af72817180f1600c6ad8d83aa72f0a98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/workytime/logo.png": "d7a8032f6ba0f3e40a4ecff3f00277a9",
"assets/assets/workytime/4.png": "9030f5fc7b07f2abc0947ce6ea63d810",
"assets/assets/workytime/5.png": "cb09dadb4d85b9ddc573e2c27030918c",
"assets/assets/workytime/2.png": "f3eb32141739fd314b7acf2a8c8512fc",
"assets/assets/workytime/3.png": "3137faff507e029e7b6b72ba97fb8c2a",
"assets/assets/workytime/1.png": "9340d33a0371cf20ebca5f9c5021a2a8",
"assets/assets/workytime/0.png": "98b06f5c5d2b2c74d9fa3aedba0f5916",
"assets/assets/gmcac/logo.png": "24fb28fa005212740d0ecee4c6f5e26d",
"assets/assets/gmcac/4.png": "93039089f517b123f2aecd8253491ac3",
"assets/assets/gmcac/5.png": "1dc99dc5227872e80139fb6b19c28168",
"assets/assets/gmcac/2.png": "0e6477f8e6d26a48bac0168ee4296de4",
"assets/assets/gmcac/3.png": "08664e785bba9f1c130294afad1b6a78",
"assets/assets/gmcac/1.png": "1ebba3816ab1487bd9315ba2bb4bc331",
"assets/assets/gmcac/0.png": "9e04e508143882d17d644f6c635b3a35",
"assets/assets/courtaround/logo.png": "73ac864e83ee99a1e8a2b4dd9367986c",
"assets/assets/courtaround/4.png": "800d1e52c9e2caa665f4989298dbf8c9",
"assets/assets/courtaround/5.png": "49ef744c0a430675a03d064aa702af11",
"assets/assets/courtaround/2.png": "bd73e85d2b16846e17b2a80ef6016384",
"assets/assets/courtaround/3.png": "32b042e78a842851a779598fe17e19a4",
"assets/assets/courtaround/1.png": "47f2f45aea86ae683b2233b326ffbed4",
"assets/assets/courtaround/0.png": "9866fcc7a8981199f92403eb67cc05f0",
"assets/assets/fluics/logo.png": "9187df953a3a10779ed0ef31254b8d55",
"assets/assets/fluics/4.png": "ff0c0f39ba1235bb27b884f57bfe6a27",
"assets/assets/fluics/5.png": "fed0abe29ca0778adafc2a1c01f0d04a",
"assets/assets/fluics/6.png": "0d6cae7d34bfba7df75f33aea98fc3ca",
"assets/assets/fluics/2.png": "6017cdedb29a28095f94f7606d2b14ff",
"assets/assets/fluics/3.png": "dc1fb88ed60b5ce27742b8adb5171651",
"assets/assets/fluics/1.png": "d070e0c1fd86fe8ae891d220ae60df26",
"assets/assets/fluics/0.png": "87b8953e87c52776d59163f991c90f08",
"assets/assets/icons/sun.svg": "63bbb4b7df0e6bb723a285e8985a9365",
"assets/assets/icons/moon.svg": "3a8c6da908393d148e11a131353cb800",
"assets/assets/fortelife/logo.png": "2b602b2b63f182f578a31cdfea7149ab",
"assets/assets/fortelife/4.png": "2621bc7f900a8d1447500a0cbb4b4a65",
"assets/assets/fortelife/5.png": "b62da611c68738c98f8092f9767158df",
"assets/assets/fortelife/2.png": "80cbc6437bc61e042ae49032af795d64",
"assets/assets/fortelife/3.png": "76c343778f56663a462f36db5c79bf86",
"assets/assets/fortelife/1.png": "83446e3933fad8594bdd55706f39a3fb",
"assets/assets/fortelife/0.png": "c3512c90ad60b5be31bcc933129abf5f",
"assets/assets/fonts/PressStart2P-Regular.ttf": "2c404fd06cd67770807d242b2d2e5a16",
"assets/assets/dropasapp/logo.png": "33961b76ed22e2cd77088cf4e3389623",
"assets/assets/dropasapp/4.png": "8341c234ccccddbd96f719b121d4242c",
"assets/assets/dropasapp/5.png": "f9d89965404747752b56c8e957c11380",
"assets/assets/dropasapp/6.png": "2839bc9efe5df1d742566797fabffbbd",
"assets/assets/dropasapp/2.png": "65211e62ae7b9d393514c65c333c0d32",
"assets/assets/dropasapp/3.png": "2a0f9532f7beff4e1bc571fae00eea00",
"assets/assets/dropasapp/1.png": "32d0aad5e2f7551626358915f3824ba3",
"assets/assets/dropasapp/0.png": "66fa2fe7398baf383a5f36a07df68b3b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
