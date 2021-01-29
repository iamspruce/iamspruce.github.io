

const cacheName = "spruce.com.ng";
const cacheAssets = [
	'/assets/theme.css',
	'/assets/js/main.js',
	'/assets/js/theme.js',
	'/assets/img/spruce.png',
	'/css/style.css',
	'/offline/'
];

self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(cacheAssets);
		})
	)
});

self.addEventListener('activate', (e) => {
	e.waitUntil(
		caches.keys().then((keyList) => {
				return Promise.all(keyList.map((key) => {
					if(cacheName.indexOf(key) === -1) {
						return caches.delete(key);
					}
				}));
			})
	);
});

self.addEventListener('fetch', (e) => {
	if (e.request.method !== 'GET') {
		console.log('ignored', e.request.method, e.request.url);
		return
	}
	e.respondWith(
		caches.match(e.request).then((resp) => {
			return resp || fetch(e.request).then((response) => {
				let responseClone = response.clone();
				caches.open('spruce.com.ng').then((cache) => {
					cache.put(e.request, responseClone)
				});


				return response;
			}).catch(() => {
				return caches.match('/offline/');
			})
		})
	);
});