

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b424ca86.js","_app/immutable/chunks/scheduler.34300998.js","_app/immutable/chunks/index.59673f64.js","_app/immutable/chunks/index.ca9ee2c1.js"];
export const stylesheets = [];
export const fonts = [];
