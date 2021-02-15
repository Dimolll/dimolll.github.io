'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "15205713ded055688c513e4fdb4ce5e6",
"/": "552b81952166a64a393dfa40517358c8",
"main.dart.js": "f87183dcfabe80653de8093e7758034c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"dimolll/version.json": "426313f2f3133c2f20415344c4a22df3",
"dimolll/index.html": "552b81952166a64a393dfa40517358c8",
"dimolll/main.dart.js": "f87183dcfabe80653de8093e7758034c",
"dimolll/README.md": "2ab5c9f98bb74edef3ee4499edb0d8e7",
"dimolll/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"dimolll/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"dimolll/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"dimolll/manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"dimolll/.git/config": "34f76fd0147c1d9611714d8c368ecef3",
"dimolll/.git/objects/3e/d82c42b2eccacd433f1142afbcfdec8f3cc090": "f1331ad339890c3f296fdb97376391d5",
"dimolll/.git/objects/56/263d51c4ee2d45c6fe18cd3debef831245529e": "dc293a0b325400c91f087c6770ae4974",
"dimolll/.git/objects/51/a75474e5c3e77a9ecbcc5e128825615f17e9e0": "e7380902b50ec981108c8a0a9d240517",
"dimolll/.git/objects/94/fdcea7c4ec5a12748fd005f4bf011017f1d825": "bf2cced05cfe02ee3ec4b210e02f92dc",
"dimolll/.git/objects/60/9c031d537715deea691ce65edc13152cec0804": "5d95d7d88eaaaae93a22fc5a3a40c7f9",
"dimolll/.git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
"dimolll/.git/objects/df/de9a64464c01a58de722ea481fafb39b954478": "1af46150936f28734ca655423cdefea0",
"dimolll/.git/objects/d1/95032dcba1902adb3f6b4c2240c69c075b9289": "210f142984c700ae568694b658713de1",
"dimolll/.git/objects/bc/0bf105fe1e26ea85f045179ed98578250f46c4": "2a8d69f9a892298af1de8d0b3c7af14f",
"dimolll/.git/objects/e2/38255d29a8d3be0918173f14387e536c9c6a23": "59cec10c35a4f6dda34c4bca31a48482",
"dimolll/.git/objects/f4/0b3afffb722f1bc222f9ca3e8aa5cb23f01423": "7ad6033058b0c540572d9c6bc17ee93c",
"dimolll/.git/objects/c0/db63028b1b38603b4a4671551f1f482fbee064": "7976f78966a167d247f50ea5622e1010",
"dimolll/.git/objects/c9/d1da6299b875258811b49626f10ab6d5f96440": "b429ea67c32be369d1e3c47438bc4e7d",
"dimolll/.git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
"dimolll/.git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
"dimolll/.git/objects/c1/36972be006301bed1a768f2acea8cd87966f11": "d63d1bf70c095718e9ea282805327052",
"dimolll/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"dimolll/.git/objects/29/3dc222a706a2c17fe4ab04ccb7e8af0e4da892": "40209b7fef23d3ae02db26b904b3a2d8",
"dimolll/.git/objects/7b/0aab658de15a06fc55a7d824004c3557a9798f": "e182fdc4ed21fa85cfdb170083bf9cb8",
"dimolll/.git/objects/8f/b9960c795b7e9cc5dc25f301fe31f7a4993b16": "cbe8fce68651dd9d1a0cb5b2b8c3aaf3",
"dimolll/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"dimolll/.git/objects/4c/70f8c1ea25ae262b624013cc9e41bf333562e6": "17aff83fc965882d60aef393f4d9cfb4",
"dimolll/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"dimolll/.git/objects/5c/257028e3ad45880c1f5546d16d51acdb0e8844": "f3e90185f1a626386dc02b2890612c67",
"dimolll/.git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
"dimolll/.git/objects/91/dca9060b157190834526f6d097656c68e9155a": "c3fdd7156d30b5c3812dac7e0aefee56",
"dimolll/.git/objects/97/fef7dc79893b7a0db48dd67e64da280c5022e6": "a90bf5cc3673e7598344ede1dfc17036",
"dimolll/.git/objects/63/cc2ce338bfa7410450bde6a0fb5f20ffa7c16d": "1cb1dc8be270a6335458c2e2c875b6a8",
"dimolll/.git/objects/0f/f36640f58c5f553b9d6b45d995e11be41b2585": "9ce05c9a15732f8c3ff50c8961e24239",
"dimolll/.git/objects/90/f8672f74eb4484d47362b85a90de2a6a13fd59": "979a87b1e0303508af18c37098af958b",
"dimolll/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"dimolll/.git/objects/db/0c346b0f30f4b3c7bd51defedae8b41ee6ac5e": "7f83834bd6c999abb673098e637e0282",
"dimolll/.git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
"dimolll/.git/objects/a1/16aa784c0826a290cd08d96f9f060454111d15": "85eb5ddd46b878096de897db4db66792",
"dimolll/.git/objects/ef/1ce9e3d2d5ec9d82e5049cae57d8db3c947046": "4d5692b7edf84cdcd2a038cb84fe45f8",
"dimolll/.git/objects/cc/7b99c8fbb6c25d2fe947f2bbb2c62082f0375f": "f7c7b0f34e6bb2b41ef0432dfc62a64b",
"dimolll/.git/objects/e9/b029c59f65b24bb486b3630eb17202e3151137": "0645912609c8fcc802300d62bb493b95",
"dimolll/.git/objects/46/4a1dd65357e8ce540173147b7120e08be0d0bd": "41fc554c0cfc64052dd0da4a31ad1b8b",
"dimolll/.git/objects/77/044403b9901ea71f3986fde0d1991b1a51861e": "1a56386ee24b13440dcc80dde377b219",
"dimolll/.git/objects/48/1563952916e24aed0282e19ed2d121354a4cee": "0e04432694908e7ae064b189be24dc1e",
"dimolll/.git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
"dimolll/.git/objects/12/1417c60897df9e9949d6a5770d9d882de0f1a9": "e8481dc8dadb1603de3a6e3ced7a3ce0",
"dimolll/.git/objects/76/8f20e41317fb8e618715225ccd227c155b9a19": "66986a1c67dbbcc68eede579ea71fa8d",
"dimolll/.git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
"dimolll/.git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
"dimolll/.git/objects/7a/849cfbb11772f3e37f4a881af30dc4b435d521": "282047c5d3f9f71fc615b5ff30df52a4",
"dimolll/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"dimolll/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"dimolll/.git/logs/HEAD": "2bfd9a888a615921157e8dc850cf278c",
"dimolll/.git/logs/refs/heads/master": "2bfd9a888a615921157e8dc850cf278c",
"dimolll/.git/logs/refs/remotes/origin/HEAD": "f6be7bd23441e06d4931fd050cab0c01",
"dimolll/.git/logs/refs/remotes/origin/master": "79b29587ff081bfd35bda842b077414f",
"dimolll/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"dimolll/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"dimolll/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"dimolll/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"dimolll/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"dimolll/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"dimolll/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"dimolll/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"dimolll/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"dimolll/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"dimolll/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"dimolll/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"dimolll/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"dimolll/.git/refs/heads/master": "af781a1b63124c49c37d0c56ccd45642",
"dimolll/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"dimolll/.git/refs/remotes/origin/master": "af781a1b63124c49c37d0c56ccd45642",
"dimolll/.git/index": "b883f29482f518a556b1d01b485cf647",
"dimolll/.git/packed-refs": "d132846dc792775af4b8906272701d47",
"dimolll/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"dimolll/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"dimolll/assets/AssetManifest.json": "3bbb270258678db01cd932740a190196",
"dimolll/assets/NOTICES": "484c0d88427cb1bf19070f71d185f4e5",
"dimolll/assets/FontManifest.json": "af72817180f1600c6ad8d83aa72f0a98",
"dimolll/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"dimolll/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"dimolll/assets/assets/workytime/4.png": "9030f5fc7b07f2abc0947ce6ea63d810",
"dimolll/assets/assets/workytime/5.png": "cb09dadb4d85b9ddc573e2c27030918c",
"dimolll/assets/assets/workytime/2.png": "f3eb32141739fd314b7acf2a8c8512fc",
"dimolll/assets/assets/workytime/3.png": "3137faff507e029e7b6b72ba97fb8c2a",
"dimolll/assets/assets/workytime/1.png": "9340d33a0371cf20ebca5f9c5021a2a8",
"dimolll/assets/assets/workytime/0.png": "98b06f5c5d2b2c74d9fa3aedba0f5916",
"dimolll/assets/assets/gmcac/4.png": "93039089f517b123f2aecd8253491ac3",
"dimolll/assets/assets/gmcac/5.png": "1dc99dc5227872e80139fb6b19c28168",
"dimolll/assets/assets/gmcac/2.png": "0e6477f8e6d26a48bac0168ee4296de4",
"dimolll/assets/assets/gmcac/3.png": "08664e785bba9f1c130294afad1b6a78",
"dimolll/assets/assets/gmcac/1.png": "1ebba3816ab1487bd9315ba2bb4bc331",
"dimolll/assets/assets/gmcac/0.png": "9e04e508143882d17d644f6c635b3a35",
"dimolll/assets/assets/icons/sun.svg": "63bbb4b7df0e6bb723a285e8985a9365",
"dimolll/assets/assets/icons/moon.svg": "3a8c6da908393d148e11a131353cb800",
"dimolll/assets/assets/fonts/PressStart2P-Regular.ttf": "2c404fd06cd67770807d242b2d2e5a16",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"assets/AssetManifest.json": "3bbb270258678db01cd932740a190196",
"assets/NOTICES": "484c0d88427cb1bf19070f71d185f4e5",
"assets/FontManifest.json": "af72817180f1600c6ad8d83aa72f0a98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/workytime/4.png": "9030f5fc7b07f2abc0947ce6ea63d810",
"assets/assets/workytime/5.png": "cb09dadb4d85b9ddc573e2c27030918c",
"assets/assets/workytime/2.png": "f3eb32141739fd314b7acf2a8c8512fc",
"assets/assets/workytime/3.png": "3137faff507e029e7b6b72ba97fb8c2a",
"assets/assets/workytime/1.png": "9340d33a0371cf20ebca5f9c5021a2a8",
"assets/assets/workytime/0.png": "98b06f5c5d2b2c74d9fa3aedba0f5916",
"assets/assets/gmcac/4.png": "93039089f517b123f2aecd8253491ac3",
"assets/assets/gmcac/5.png": "1dc99dc5227872e80139fb6b19c28168",
"assets/assets/gmcac/2.png": "0e6477f8e6d26a48bac0168ee4296de4",
"assets/assets/gmcac/3.png": "08664e785bba9f1c130294afad1b6a78",
"assets/assets/gmcac/1.png": "1ebba3816ab1487bd9315ba2bb4bc331",
"assets/assets/gmcac/0.png": "9e04e508143882d17d644f6c635b3a35",
"assets/assets/icons/sun.svg": "63bbb4b7df0e6bb723a285e8985a9365",
"assets/assets/icons/moon.svg": "3a8c6da908393d148e11a131353cb800",
"assets/assets/fonts/PressStart2P-Regular.ttf": "2c404fd06cd67770807d242b2d2e5a16"
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
