import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const tagFilters = writable([]);
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tagFilters;
  $$unsubscribe_tagFilters = subscribe(tagFilters, (value) => value);
  $$unsubscribe_tagFilters();
  return `${``}`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tagFilters;
  $$unsubscribe_tagFilters = subscribe(tagFilters, (value) => value);
  $$unsubscribe_tagFilters();
  return `${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-row items-center justify-center"><div class="flex w-full max-w-screen-2xl flex-col items-center justify-center">${validate_component(About, "About").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} <footer class="w-full snap-start p-2" data-svelte-h="svelte-1x0qn0z"><div class="flex w-full flex-row items-center justify-center gap-2 text-gray-400"><i class="fa-regular fa-copyright"></i> <p class="text-sm">2023 Rafael Piloto</p></div></footer>`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
