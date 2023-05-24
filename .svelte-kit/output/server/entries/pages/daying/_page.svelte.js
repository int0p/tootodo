import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import Page$2 from "./clock/_page.svelte.js";
import Page$3 from "./memo/_page.svelte.js";
import Page$1 from "./work/_page.svelte.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showTimer = true;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex-col ml-4 max-w-[620px] h-screen float-left top-0 left-0">${validate_component(Page$1, "WorkSelect").$$render(
      $$result,
      { showTimer },
      {
        showTimer: ($$value) => {
          showTimer = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    ${showTimer ? `<div>${validate_component(Page$2, "Timer").$$render($$result, {}, {}, {})}</div>` : ``}
    ${validate_component(Page$3, "Memo").$$render($$result, { showTimer }, {}, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
