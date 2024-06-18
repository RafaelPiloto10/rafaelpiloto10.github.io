export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/site.webmanifest","icons/.DS_Store","icons/afrl.png","icons/google.png","icons/reffy.png","icons/techlab.png","pfp.jpeg","projects/.DS_Store","projects/apollo.png","projects/edusearch.png","projects/github.png","projects/guard-ai.png","projects/habanero.png","projects/orpheus.png","projects/themis.jpg","projects/today.png","projects/treblle-go-fiber.png","resume.pdf"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json",".jpeg":"image/jpeg",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.ef78d768.js","app":"_app/immutable/entry/app.cee4a209.js","imports":["_app/immutable/entry/start.ef78d768.js","_app/immutable/chunks/entry.d886de78.js","_app/immutable/chunks/scheduler.34300998.js","_app/immutable/chunks/index.ca9ee2c1.js","_app/immutable/entry/app.cee4a209.js","_app/immutable/chunks/scheduler.34300998.js","_app/immutable/chunks/index.59673f64.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
