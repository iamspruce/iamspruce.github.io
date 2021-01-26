

// On install, cache some stuff
addEventListener('install', function (event) {
	event.waitUntil(caches.open('spruce.com.ng-v1').then(function (cache) {
		return cache.addAll([
			'/offline/index.html',
			'/assets/img/spruce.png',
			'css/style.css',
			'/assets/theme.css',
			'/assets/js/main.js',
			'/assets/js/theme.js'
		]);
	}));
});


// listen for requests
addEventListener('fetch', function (event) {

	// Get the request
	var request = event.request;

	// Bug fix
	// https://stackoverflow.com/a/49719964
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

	// HTML files
	// Network-first
	if (request.headers.get('Accept').includes('*/*')) {
		event.respondWith(
			fetch(request).then(function (response) {

				// Save the response to cache
				if (response.type !== 'opaque') {
					var copy = response.clone();
					event.waitUntil(caches.open('pages').then(function (cache) {
						return cache.put(request, copy);
					}));
				}

				// Then return it
				return response;

			}).catch(function (error) {
				return caches.match(request).then(function (response) {
					return response || caches.match('/offline/index.html');
				});
			})
		);
	}

});
