var staticCacheName = 'site-static';
const dynamicCacheName = 'site-dynamic-v1';

var assets = [
	'/',
	'/index.html',
	'/favicon.ico',
	'/images/icons/icon-96x96.png',
	'https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css',
	'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css',
	'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css',
	'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
	'https://code.jquery.com/jquery-1.9.1.min.js',
	'https://unpkg.com/swiper@8/swiper-bundle.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
	'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js',
	'https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js',
	'https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/additional-methods.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js"',
	'https://unpkg.com/textillate@0.4.1/jquery.textillate.js',
	'/manifest.json',
	'/app.js',
	'/dist/build.js',
	'/sw.js',
];

// install event
self.addEventListener('install', (evt) => {
	// console.log('service worker installed');
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			console.log('caching shell assets');
			cache.addAll(assets);
		})
	);
});

// activate event
self.addEventListener('activate', (evt) => {
	console.log('service worker activated');
	evt.waitUntil(
		caches.keys().then((keys) => {
			//console.log(keys);
			return Promise.all(
				keys
					.filter((key) => key !== staticCacheName && key !== dynamicCacheName)
					.map((key) => caches.delete(key))
			);
		})
	);
});

// fetch event
self.addEventListener('fetch', (evt) => {
	console.log('fetch event', evt);
	evt.respondWith(
		caches
			.match(evt.request)
			.then((cacheRes) => {
				return (
					cacheRes ||
					fetch(evt.request).then((fetchRes) => {
						return caches.open(dynamicCacheName).then((cache) => {
							cache.put(evt.request.url, fetchRes.clone());
							return fetchRes;
						});
					})
				);
			})
			.catch(() => {
				if (evt.request.url.indexOf('.html') > -1) {
					return caches.match('/pages/fallback.html');
				}
			})
	);
});
