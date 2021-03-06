'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0c1ff217cb14f3a4f6538309f642a2c4",
"assets/assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/assets/fonts/NotoSans/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/NotoSans/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/NotoSans/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/NotoSans/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/NotoSans/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/assets/fonts/NotoSans/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/assets/icons/cash.svg": "889fc79dbac6b346002211e5b9a8e977",
"assets/assets/icons/graduation-cap-solid.svg": "3a248b836d7068dec4a79f580e7fb458",
"assets/assets/icons/icon_4word.png": "edce287f45c16f2c0cd1ed886c407832",
"assets/assets/icons/icon_app_cross.svg": "923bf618dfd1672e97445dcb208ee329",
"assets/assets/icons/icon_dictionary.png": "f680af29059ed631ff12b602c81714ca",
"assets/assets/icons/icon_hourglass.svg": "7ac5f7100f65eb464851d1015fdcfad5",
"assets/assets/icons/icon_math.png": "82e9f5cf63e373cdfb4bfa967d819de9",
"assets/assets/icons/icon_time_alarm.svg": "a21c2f127e53bc85f973e7114aa72472",
"assets/assets/icons/icon_time_plus.svg": "7cfb3ee1663911d72e7a52841320f357",
"assets/assets/icons/icon_time_recycle.svg": "b3729a7de7e78b6e0196613d070968c6",
"assets/assets/icons/icon_use_limit.svg": "226668ea7093e779a2223f9cb3c5184e",
"assets/assets/icons/kakao_icon.png": "ab3c351be6da947b8d71cc7adf1fe13a",
"assets/assets/icons/limit_icon.png": "5c25385c0bd96b0ba1955de44a0d7dc6",
"assets/assets/icons/map.png": "dcbafc6bb76090d1d670a84e1615ffc3",
"assets/assets/icons/menu-list.svg": "5008e616c109aa487891a0de7e36c21d",
"assets/assets/icons/message.png": "cae4d612a4032deead178b53bbb6873e",
"assets/assets/icons/phone.png": "7152997288041c754270fc3edee338d7",
"assets/assets/icons/Rectangle_green.png": "992d6a1f73177a9eab045ad9334b7f80",
"assets/assets/icons/study_icon.png": "c949376735b43bc98aae5a6e577b734e",
"assets/assets/icons/thumb_icon.png": "8116a9d7822dde9353d4eddca070bb75",
"assets/assets/icons/user-gear-solid.svg": "b535ad6e5a1e8ff0fedcd9b06db1fa0a",
"assets/assets/images/background_main.png": "9da014d798db7f7f6faed7ac873befcb",
"assets/assets/images/bg_rectangle.png": "936db5cbba5ec9cee6f9280abcf5878d",
"assets/assets/images/bg_scroll_line.png": "061b3c96ab55f31d0e54d5335d8478c2",
"assets/assets/images/bg_usage.png": "dfdd178011b8e7dd821125b91b4f927c",
"assets/assets/images/dot_line.png": "48c3af8fb18faae06d0d6ba6d6fc9956",
"assets/assets/images/dot_line_primary.png": "0aa3f79094c2ba5fc3d6f215424029b4",
"assets/assets/images/ex_plus1.png": "fec89ef8d3d8f7bf524192e44ccabab2",
"assets/assets/images/ex_plus2.png": "412b8a82c31f783a935addbe7e2968b0",
"assets/assets/images/home_beginning.png": "e6166b6b6cedc8b9a3176778da293f1c",
"assets/assets/images/img_child_setting_complete.png": "369d4ac032afe7aeed68aadd641ce140",
"assets/assets/images/img_reason1.png": "8ee629befed877d499d195bb64ea15ef",
"assets/assets/images/img_reason2.png": "14a35896959a84cbd02517422494146d",
"assets/assets/images/img_reason3.png": "f9691467732536174e297169d369d337",
"assets/assets/images/img_reason4.png": "69836e0083c648f97627c8c5cbd4bd11",
"assets/assets/images/img_reason5.png": "6fc1ad9223469566f22b40f67b0d273a",
"assets/assets/images/logo_whale.png": "24798047fbdc728d53a559c90b42f9a8",
"assets/assets/images/praise_card_01.png": "9119ccab862a65497ed7d30d97e73f57",
"assets/assets/labels.txt": "924c9701e106a9469fe057e0f6b0b9b5",
"assets/assets/lottie/lottie_like.json": "40dd6ce663eb108589bf1128a9eec5c4",
"assets/assets/lottie/lottie_whale.json": "792fde25251559490c928a33b7120afb",
"assets/assets/model.tflite": "0100d99f8b10d9067d4c77bc2aa43c73",
"assets/FontManifest.json": "97d4edcae325da5286665a07c555a513",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "47bd9866ba9dec5dabdcbf5983d2c809",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c198803e8946cc0d43c6c9c07c599c5e",
"/": "c198803e8946cc0d43c6c9c07c599c5e",
"main.dart.js": "2e26462f0a72cb1a31f5281ac76801b9",
"manifest.json": "45408d12f1abcf29fe8347ec7c1e5cef",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "7dbd3ec228db34d59a0422bb31352dbf",
"version.json": "366efa6fbfceea6939fa9bb5e9a89af5"
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
