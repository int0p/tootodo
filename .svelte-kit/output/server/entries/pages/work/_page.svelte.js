import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { H as Heading } from "../../../chunks/Heading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "m-8 text-center" }, {}, {
    default: () => {
      return `Work Page `;
    }
  })}`;
});
export {
  Page as default
};
