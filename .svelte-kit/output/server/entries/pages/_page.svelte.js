import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import Page$1 from "./daily/_page.svelte.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Page$1, "Daily").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
