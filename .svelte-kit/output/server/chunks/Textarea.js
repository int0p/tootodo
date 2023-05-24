import { c as create_ssr_component, d as compute_rest_props, n as compute_slots, k as createEventDispatcher, v as validate_component, r as add_classes, g as getContext, b as add_attribute, f as spread, h as escape_object, i as escape_attribute_value } from "./index2.js";
import classNames from "classnames";
import { C as CloseButton } from "./CloseButton.js";
import { F as Frame } from "./Frame.js";
import { W as Wrapper } from "./Wrapper.js";
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["dismissable", "accent"]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { dismissable = false } = $$props;
  let { accent = false } = $$props;
  let hidden = false;
  let divClass;
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  divClass = classNames("p-4 text-sm", accent && "border-t-4 ", hidden, $$props.class);
  {
    {
      $$restProps.color = $$restProps.color ?? "blue";
      $$restProps.rounded = $$restProps.rounded ?? !accent;
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: divClass }, { role: "alert" }), {}, {
    default: () => {
      return `<div class="flex items-center">${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : ``}
    <div${add_classes(($$slots.icon ? "ml-3" : "").trim())}>${slots.default ? slots.default({}) : ``}</div>

    ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          class: "-mx-1.5 -my-1.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}</div>
  ${slots.extra ? slots.extra({}) : ``}`;
    }
  })}`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = "" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => classNames(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = classNames(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? classNames("block w-full", "text-sm", "border-0 px-0", "bg-inherit dark:bg-inherit", "focus:outline-none focus:ring-0") : classNames(wrapperClass, "p-2.5 text-sm", "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500");
  innerWrapperClass = classNames("py-2 px-4 bg-white dark:bg-gray-800", $$slots.footer || "rounded-b-lg", $$slots.header || "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``}
  ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${value || ""}</textarea>`;
        }
      })}
  ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })}`;
});
export {
  Alert as A,
  Textarea as T
};
