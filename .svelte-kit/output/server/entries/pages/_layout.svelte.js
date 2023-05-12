import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import Page from "./timerAsSidebar/_page.svelte.js";
import "classnames";
/* empty css                                                    */import { C as Checkbox } from "../../chunks/_page.js";
import { I as Icon } from "../../chunks/Icon.js";
import tableMoveColumnAfterLtr from "@iconify/icons-ooui/table-move-column-after-ltr.js";
import tableMoveColumnAfterRtl from "@iconify/icons-ooui/table-move-column-after-rtl.js";
const app$1 = "";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showSidebar = true } = $$props;
  if ($$props.showSidebar === void 0 && $$bindings.showSidebar && showSidebar !== void 0)
    $$bindings.showSidebar(showSidebar);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log(showSidebar);
    }
    $$rendered = `

<div class="flex w-full">${showSidebar ? `<div class="w-full flex ">${validate_component(Page, "Sidebar").$$render($$result, {}, {}, {})}
            ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { custom: true, checked: showSidebar },
      {
        checked: ($$value) => {
          showSidebar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer peer-checked:border-blue-100 ">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: tableMoveColumnAfterRtl,
              class: "h-full text-lg"
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}
            ${slots.default ? slots.default({ class: "w-full h-full" }) : ``}</div>` : `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { custom: true, checked: showSidebar },
      {
        checked: ($$value) => {
          showSidebar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-full mt-8 ml-4 pr-2 rounded-lg border-r-2 border-blue-100 cursor-pointer peer-checked:border-blue-100 ">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: tableMoveColumnAfterLtr,
              class: "h-full text-lg"
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}
        ${slots.default ? slots.default({ class: "w-full h-full" }) : ``}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
