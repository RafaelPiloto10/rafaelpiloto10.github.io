

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0b94055a.js","_app/immutable/chunks/scheduler.34300998.js","_app/immutable/chunks/index.59673f64.js"];
export const stylesheets = ["_app/immutable/assets/0.1bbd3137.css"];
export const fonts = [];
