'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3ee5f3d2e8e017a6d23d852c0645bb72",
"assets/assets/loading.gif": "badc74ced38f8aa000d067a72d2f0465",
"assets/assets/logo.png": "2f25ccb20a9e0c20cf346c54767b7125",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "dcd05c1a8f975e41f3ef546a26ed3ba4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"dirasti_dashboard_build/.git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
"dirasti_dashboard_build/.git/config": "2c7d0f95baec4a79f775f938ac996cb8",
"dirasti_dashboard_build/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"dirasti_dashboard_build/.git/FETCH_HEAD": "890cfa1183080e0a9b89fa97d47dbd68",
"dirasti_dashboard_build/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"dirasti_dashboard_build/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"dirasti_dashboard_build/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"dirasti_dashboard_build/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"dirasti_dashboard_build/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"dirasti_dashboard_build/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"dirasti_dashboard_build/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"dirasti_dashboard_build/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"dirasti_dashboard_build/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"dirasti_dashboard_build/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"dirasti_dashboard_build/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"dirasti_dashboard_build/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"dirasti_dashboard_build/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"dirasti_dashboard_build/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"dirasti_dashboard_build/.git/index": "7578fd9ee87da7995c14945340524c4e",
"dirasti_dashboard_build/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"dirasti_dashboard_build/.git/logs/HEAD": "d9e0d1c59e96805b4783410885b56ebd",
"dirasti_dashboard_build/.git/logs/refs/heads/master": "d9e0d1c59e96805b4783410885b56ebd",
"dirasti_dashboard_build/.git/logs/refs/remotes/origin/HEAD": "469635aadcce13f1bf0a2cab8c65ae49",
"dirasti_dashboard_build/.git/logs/refs/remotes/origin/master": "ea6b7625b0b3eb366b3e48b72ef37b9b",
"dirasti_dashboard_build/.git/objects/01/1a386c0a94ae1ede2abfbb432cfbd89826dbd7": "b0894eb6c1925163727bb46b29177ac0",
"dirasti_dashboard_build/.git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
"dirasti_dashboard_build/.git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
"dirasti_dashboard_build/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
"dirasti_dashboard_build/.git/objects/31/68680665e14feac7f98d3d68167c78eac8ae76": "cf89437bfa17607e4cc3f2591726acb8",
"dirasti_dashboard_build/.git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
"dirasti_dashboard_build/.git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
"dirasti_dashboard_build/.git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
"dirasti_dashboard_build/.git/objects/45/9ab4e9689923ecf175722aa125da7e3b4a9c96": "13c68e5399d5f4ea68e19e71d65a70de",
"dirasti_dashboard_build/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"dirasti_dashboard_build/.git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
"dirasti_dashboard_build/.git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
"dirasti_dashboard_build/.git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
"dirasti_dashboard_build/.git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
"dirasti_dashboard_build/.git/objects/69/4d7c3a8c2280938dbd55de73c56592f063ece4": "59f2303f78083990bf78c1cb98a65ae1",
"dirasti_dashboard_build/.git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
"dirasti_dashboard_build/.git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
"dirasti_dashboard_build/.git/objects/74/b8a079c3f3c478227c6bdf671a4ed5c1838ded": "5e0fe5ec62a1bb85488e5a56d9fe05cc",
"dirasti_dashboard_build/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"dirasti_dashboard_build/.git/objects/7d/b92a2bd63b37f38b3a515b7c7c3fe0886100dd": "dfd32f9637821632f3f92dde4c6e55b2",
"dirasti_dashboard_build/.git/objects/86/a59a69a7f0d466a943bdfa14220a3e991c9c5a": "8fe13c2921c7993d9e49bf44d12c0c1c",
"dirasti_dashboard_build/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"dirasti_dashboard_build/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"dirasti_dashboard_build/.git/objects/8c/5ef9a18b59c2c2c1cc998be6cac00f6b4d45b7": "5cca5bb324b1efb034996964d57fe6ea",
"dirasti_dashboard_build/.git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
"dirasti_dashboard_build/.git/objects/92/5cc4657ab2b3343775acf596c68fa27e880d80": "37c553fb8771e37780cb6a3cbd507ac8",
"dirasti_dashboard_build/.git/objects/95/946159caaadac7e02e3da647a9567843a0444a": "8343958a47e3344153eab19ad0c317fd",
"dirasti_dashboard_build/.git/objects/97/024b8ee8c69c391bb61e047ce8e75f1c196f0a": "dc2354c3c1f27b27cf5f836f974739e7",
"dirasti_dashboard_build/.git/objects/9b/a6ec123752f7edc01fd96905480f3216d55e87": "59782614d5ce2b9ed017ea8888e22f2e",
"dirasti_dashboard_build/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"dirasti_dashboard_build/.git/objects/a9/fa01dae5b1f2dbc870e82a267bcf87308d7ffc": "5aa67f6b2a6f8d82bb58d4772125bb38",
"dirasti_dashboard_build/.git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
"dirasti_dashboard_build/.git/objects/b0/10d245a0845916a5865efa0bd61ea0cf9471bf": "03e38a2692957de10576057229fd4f3f",
"dirasti_dashboard_build/.git/objects/b1/b0839b95d96df852f0de8a020415bf9934ac99": "541724495d2be0200f28b9341b796582",
"dirasti_dashboard_build/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"dirasti_dashboard_build/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"dirasti_dashboard_build/.git/objects/bd/0d0056edea7ce2426da63e1ef320caf8e22212": "9d6a8657081510c48fc871422b23d5d7",
"dirasti_dashboard_build/.git/objects/c1/484caafc9932f3c99724fc38d919f53bf43873": "f564135e1038edbfc55d7ae17de0fb5d",
"dirasti_dashboard_build/.git/objects/cd/3528f2e5654e8e0c176b9590b8262ec835c935": "ce66877d58af88aafd695f30c3d438aa",
"dirasti_dashboard_build/.git/objects/cd/82ecf3ea40bdb6ce61ed353f3e24e45ad2b486": "9164c7bf44a979e51b0ee0df4b9eef45",
"dirasti_dashboard_build/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"dirasti_dashboard_build/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"dirasti_dashboard_build/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"dirasti_dashboard_build/.git/objects/f0/3a89d965ee3ec81f1827d17c54f17d00826067": "19aa449f165d40389423e608626c4843",
"dirasti_dashboard_build/.git/objects/f6/3a38cc2d4f6a437a3103b5dfb120f832ebd548": "e569c6efc5ee5edc4d24e3a75d5e6f4c",
"dirasti_dashboard_build/.git/objects/f6/a6bf8927e6e53c3891ae9e86434b7b2eeb2de0": "be09b220415b48b34978d675c2444d21",
"dirasti_dashboard_build/.git/objects/fb/fdbb3cd25e1d62d985a0db744e2700c6df3f4e": "6d8158dce09b930bc423665da9b788f0",
"dirasti_dashboard_build/.git/objects/fe/11b2d91268fdf1ddcf9ef422edd1a38d4ab115": "ba391f4504b9401842fe63a7f87cc4e7",
"dirasti_dashboard_build/.git/refs/heads/master": "32cab453d2c4497de5c4db1742f059fa",
"dirasti_dashboard_build/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"dirasti_dashboard_build/.git/refs/remotes/origin/master": "32cab453d2c4497de5c4db1742f059fa",
"dirasti_dashboard_build/assets/AssetManifest.json": "3ee5f3d2e8e017a6d23d852c0645bb72",
"dirasti_dashboard_build/assets/assets/loading.gif": "badc74ced38f8aa000d067a72d2f0465",
"dirasti_dashboard_build/assets/assets/logo.png": "2f25ccb20a9e0c20cf346c54767b7125",
"dirasti_dashboard_build/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"dirasti_dashboard_build/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"dirasti_dashboard_build/assets/NOTICES": "dcd05c1a8f975e41f3ef546a26ed3ba4",
"dirasti_dashboard_build/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"dirasti_dashboard_build/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"dirasti_dashboard_build/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"dirasti_dashboard_build/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"dirasti_dashboard_build/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"dirasti_dashboard_build/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"dirasti_dashboard_build/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"dirasti_dashboard_build/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"dirasti_dashboard_build/flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"dirasti_dashboard_build/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"dirasti_dashboard_build/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"dirasti_dashboard_build/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"dirasti_dashboard_build/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"dirasti_dashboard_build/index.html": "27626f0ca6ec164f4f7df521bf4ff44f",
"/": "b2d06d10edba0295eed1b992a617b482",
"dirasti_dashboard_build/main.dart.js": "72e36e40f297c5b69c9fef76ec2a5956",
"dirasti_dashboard_build/manifest.json": "0d3e0f0e177ff2e19898980df67639b0",
"dirasti_dashboard_build/version.json": "510a2ae429117ff89d29e762898b88a0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b2d06d10edba0295eed1b992a617b482",
"main.dart.js": "0a8a77a5948fe7e4ccf5e19759204a47",
"manifest.json": "0d3e0f0e177ff2e19898980df67639b0",
"version.json": "510a2ae429117ff89d29e762898b88a0"
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
