'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2c6ef68281d7b38ab30dafad33a5b507",
"assets/assets/badges/badge-1.ico": "489780f37f080acc250fccd1a5c972e9",
"assets/assets/badges/badge-10.ico": "7d5f85125f3cd814545761c3a2c2bff9",
"assets/assets/badges/badge-2.ico": "47d2ce2588e1e6a55be481ddf949c762",
"assets/assets/badges/badge-3.ico": "4868d922a14637832dc2d37b0eb3123f",
"assets/assets/badges/badge-4.ico": "befc484f217d6877b2120b223e53c5a4",
"assets/assets/badges/badge-5.ico": "7027d40c95b56f277c9f4385f3d3bdd9",
"assets/assets/badges/badge-6.ico": "0fd785688d4ad96ae9da21fd88852ef2",
"assets/assets/badges/badge-7.ico": "3317240572d1095e6bce71afa1a3efec",
"assets/assets/badges/badge-8.ico": "a503e004197d3f67fc7bcadf78b2c18e",
"assets/assets/badges/badge-9.ico": "1fac617bd18382b45cbe08733cff2336",
"assets/assets/changelog/changelog.md": "76460312cda3c404257c890e0f422fee",
"assets/assets/icon/discord.svg": "d06dfc96703b12a1aa53977b752b2241",
"assets/assets/icon/icon.ico": "a875b571a2bbda19cb77ec7683cc0219",
"assets/assets/icon/icon.png": "9d43fb9ac447147d5c4740d85bfffd91",
"assets/assets/icon/moon.svg": "7fe50f25c11d11f5833b33d03a17fa04",
"assets/assets/images/no-video-preview.png": "38bfca667765f6c0a9313942732bec76",
"assets/assets/images/person.png": "581e3911cd91da768886b85a510fbc5b",
"assets/assets/images/person64.png": "e7d54aae7ff4bef166218893e777bfa8",
"assets/assets/images/transparent.png": "48a6640ee19bd6effa57a8111bdbba6c",
"assets/assets/images/unplayable-video.png": "b5d48d689c723e139dd537a3fd70bf71",
"assets/assets/reactions/dislike-black.svg": "d674fddce5420322065f8c352ff497d3",
"assets/assets/reactions/dislike-white.svg": "1f2b6b4e58a485bc404ea1f0a3be2b7e",
"assets/assets/reactions/emphasize-black.svg": "3d628e4053b7fb9891e2d3ac0d0f7b9b",
"assets/assets/reactions/emphasize-white.svg": "5c74aeb9f8c88f7547dac0fc35ad5c08",
"assets/assets/reactions/laugh-black.svg": "5f9e39b90761e4ebde7f62576975fc2d",
"assets/assets/reactions/like-black.svg": "80377f30564d6000993c926ba10c29d5",
"assets/assets/reactions/like-white.svg": "b05494b45079b9d8f17943412919c531",
"assets/assets/reactions/love-black.svg": "0f0a056e8d5201f34189fc50f0566f97",
"assets/assets/reactions/love-white.svg": "77e83451d8e76f0edb6b6c4fafe26f53",
"assets/assets/reactions/question-black.svg": "824fa3e5b54e6dbf2afc0881b0f1337a",
"assets/assets/reactions/question-white.svg": "8a5c916e432097e30c964a5f5ffad8ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "62f1f8a3c5bc4bd9989b469d46754ccf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/giphy_get/assets/img/GIPHY_dark.png": "13139c9681ad6a03a0f4a45030aee388",
"assets/packages/giphy_get/assets/img/GIPHY_light.png": "7c7ed0e459349435c6694a720236d5f4",
"assets/packages/giphy_get/assets/img/poweredby_dark.png": "e4fe68503ab5d004deb31e43636a0a7c",
"assets/packages/giphy_get/assets/img/poweredby_light.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/libphonenumber_plugin/assets/js/libphonenumber.js": "88b22ae35b39feec4fae0bf38bb37813",
"assets/packages/libphonenumber_plugin/assets/js/stringbuffer.js": "6841824b0e11a399b78d135a7bfb5c53",
"assets/packages/libphonenumber_plugin/js/libphonenumber.js": "88b22ae35b39feec4fae0bf38bb37813",
"assets/packages/libphonenumber_plugin/js/stringbuffer.js": "6841824b0e11a399b78d135a7bfb5c53",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/favicon.ico": "2b083199e38815813e7f02e1dab074cd",
"icons/Icon-128.png": "4df524384acfdb7a560efda41f1b2e83",
"icons/Icon-256.png": "878c05a2060031d95a8a2c15cea73148",
"icons/Icon-maskable-128.png": "4df524384acfdb7a560efda41f1b2e83",
"icons/Icon-maskable-256.png": "878c05a2060031d95a8a2c15cea73148",
"index.html": "3722f9ba52aaf70b7899fef893ea3892",
"/": "3722f9ba52aaf70b7899fef893ea3892",
"main.dart.js": "9bc58dc25243ea1f790672462d3939b8",
"manifest.json": "3e7aeae6a24110980254435ed972d02a",
"splash/img/dark-1x.png": "6b3a33cdd699ae9708f4d12304b4b8f7",
"splash/img/dark-2x.png": "caa9eb94f806e94eb98525acb1f1dcdb",
"splash/img/dark-3x.png": "ab508326b99d7ac0d3718c030205606f",
"splash/img/dark-4x.png": "2e45f11012b1509b005668cf70895453",
"splash/img/light-1x.png": "6b3a33cdd699ae9708f4d12304b4b8f7",
"splash/img/light-2x.png": "caa9eb94f806e94eb98525acb1f1dcdb",
"splash/img/light-3x.png": "ab508326b99d7ac0d3718c030205606f",
"splash/img/light-4x.png": "2e45f11012b1509b005668cf70895453",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "7669b1ebc754dafc0411808c7c717656",
"version.json": "a486bc5bdc901ce9ad44d4eaf33b17ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
