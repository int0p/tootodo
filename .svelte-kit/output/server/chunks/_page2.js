import { c as create_ssr_component, d as compute_rest_props, o as createEventDispatcher$1, f as spread, i as escape_attribute_value, h as escape_object, k as is_void, v as validate_component, s as setContext, p as get_current_component, b as add_attribute, q as globals, r as compute_slots, g as getContext, e as escape, m as missing_component, j as each, t as onDestroy } from "./index2.js";
import classNames from "classnames";
import { a as ChevronDown, C as ChevronUp, B as Button } from "./Button.js";
/* empty css                                         */import { createPopper } from "@popperjs/core";
import { F as Frame, H as Hr } from "./Hr.js";
import { C as CloseButton, W as Wrapper, I as Icon } from "./Icon.js";
import playCircle from "@iconify/icons-bi/play-circle.js";
import "@iconify/icons-bi/pause-circle.js";
import "@iconify/icons-bi/pause-circle-fill.js";
import "@iconify/icons-bi/stop-circle.js";
import timerReset from "@iconify/icons-lucide/timer-reset.js";
import repeatRounded from "@iconify/icons-material-symbols/repeat-rounded.js";
const baseClass = "font-medium inline-flex items-center justify-center px-2.5 py-0.5";
const closeBtnBaseClass = "inline-flex items-center !p-0.5 !m-0 !ml-2 text-sm bg-transparent rounded-sm focus:!ring-0";
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "large", "border", "href", "rounded", "index", "dismissable"]);
  let { color = "blue" } = $$props;
  let { large = false } = $$props;
  let { border = false } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { index = false } = $$props;
  let { dismissable = false } = $$props;
  const colors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    ["!blue"]: "bg-blue-500 text-blue-100",
    ["!dark"]: "bg-gray-500 text-gray-100",
    ["!red"]: "bg-red-500 text-white",
    ["!green"]: "bg-green-500 text-green-100",
    ["!yellow"]: "bg-yellow-300 text-yellow-800",
    ["!indigo"]: "bg-indigo-500 text-indigo-100",
    ["!purple"]: "bg-purple-500 text-purple-100",
    ["!pink"]: "bg-pink-500 text-pink-100",
    none: ""
  };
  const borderedColors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500",
    red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400",
    green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400",
    purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400",
    pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400",
    none: ""
  };
  const hoverColors = {
    blue: "hover:bg-blue-200",
    dark: "hover:bg-gray-200",
    red: "hover:bg-red-200",
    green: "hover:bg-green-200",
    yellow: "hover:bg-yellow-200",
    indigo: "hover:bg-indigo-200",
    purple: "hover:bg-purple-200",
    pink: "hover:bg-pink-200",
    none: ""
  };
  let transition = false;
  let badgeClass;
  const closeBtnColors = {
    blue: "text-blue-400 hover:text-blue-900 dark:hover:!bg-blue-800 dark:hover:text-blue-300",
    dark: "text-gray-400 hover:!text-gray-400 hover:!bg-gray-200 dark:hover:!text-gray-300",
    red: "text-red-400 hover:text-red-900 dark:hover:!bg-red-800 dark:hover:text-red-300",
    green: "text-green-400 hover:text-green-900 dark:hover:!bg-green-800 dark:hover:text-green-300",
    yellow: "text-yellow-400 hover:text-yellow-900 dark:hover:!bg-yellow-800 dark:hover:text-yellow-300",
    indigo: "text-indigo-400 hover:text-indigo-900 dark:hover:!bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-400 hover:text-purple-900 dark:hover:!bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-400 hover:text-pink-900 dark:hover:!bg-pink-800 dark:hover:text-pink-300",
    none: ""
  };
  let closeBtnClass;
  let hidden = false;
  const dispatch = createEventDispatcher$1();
  const handleHide = () => {
    transition = true;
    setTimeout(
      () => {
        hidden = true;
      },
      300
    );
    dispatch("dismiss", { message: "The badge will be dismissed." });
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  badgeClass = classNames(
    baseClass,
    large ? "text-sm" : "text-xs",
    border ? `border ${borderedColors[color]}` : colors[color],
    href && hoverColors[color],
    rounded ? "rounded-full" : "rounded",
    index && "absolute font-bold border-2 border-white dark:border-gray-900",
    index && (large ? "w-7 h-7 -top-3 -right-3" : "w-6 h-6 -top-2 -right-2"),
    transition && "transition-opacity duration-300 ease-out opacity-0",
    $$props.class
  );
  closeBtnClass = classNames(closeBtnBaseClass, closeBtnColors[color]);
  return `${((tag) => {
    return tag ? `<${href ? "a" : "span"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(badgeClass)
        }
      ],
      { classes: hidden ? "hidden" : "" }
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}
  ${dismissable ? `${slots.closeBtn ? slots.closeBtn({ handleHide }) : `
      ${validate_component(CloseButton, "CloseButton").$$render(
      $$result,
      {
        color,
        size: large ? "sm" : "xs",
        name: "Remove badge",
        class: closeBtnClass
      },
      {},
      {}
    )}
    `}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "span")}`;
});
const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "divClass"]);
  let { size = "md" } = $$props;
  let { divClass = "inline-flex rounded-lg shadow-sm" } = $$props;
  setContext("group", { size });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, $$props.class))
      },
      { role: "group" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const { Object: Object_1 } = globals;
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let triggerEl;
  let contentEl;
  let popper;
  function init(node, _triggerEl) {
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference, popper: popper2 }) => {
              return [
                yOnly ? popper2.width / 2 - reference.width / 2 - reference.x : 0,
                offset
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open },
        { name: "flip", enabled: false }
      ]
    });
    return {
      update(_triggerEl2) {
        popper.state.elements.reference = _triggerEl2;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  {
    dispatch("show", triggerEl, open);
  }
  popper && popper.setOptions({ placement });
  return `${`<div${add_attribute("this", contentEl, 0)}></div>`}

${open && triggerEl ? `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object_1.assign({}, { use: init }, { options: triggerEl }, { role: "tooltip" }, { tabIndex: activeContent ? -1 : void 0 }, $$restProps, {
      class: classNames("z-10 outline-none", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}
    ${arrow ? `<div data-popper-arrow class="tooltip-arrow"></div>` : ``}`;
      }
    }
  )}` : ``}`;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "frameClass"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { frameClass = "" } = $$props;
  let popoverClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.frameClass === void 0 && $$bindings.frameClass && frameClass !== void 0)
    $$bindings.frameClass(frameClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    popoverClass = classNames("divide-y divide-gray-100 dark:divide-gray-600", frameClass);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: popoverClass }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div class="py-1 overflow-hidden rounded-t">${slots.header ? slots.header({}) : ``}</div>` : ``}
  <ul${add_attribute("class", $$props.class ?? "py-1 w-44", 0)}>${slots.default ? slots.default({}) : ``}</ul>
  ${$$slots.footer ? `<div class="py-1 overflow-hidden rounded-b">${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let liClass;
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  liClass = classNames(defaultClass, href ? "block" : "w-full text-left", $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })}`;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
let floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = classNames(defaultClass, $$slots.left && leftPadding[_size], $$slots.right && rightPadding[_size], ringClasses[color], colorClasses[_color], borderClasses[_color], inputPadding[_size], textSizes[_size], group || "rounded-lg", group && "first:rounded-l-lg last:rounded-r-lg", group && "border-l-0 first:border-l last:border-r", $$props.class);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(floatClass, true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}
  ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : `
    <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}>
  `}
  ${$$slots.right ? `<div class="${escape(floatClass, true) + " right-0 pr-2.5"}">${slots.right ? slots.right({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}`;
      }
    }
  )}`;
});
const ChevronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "20" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "chevron left" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path clip-rule="evenodd" fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" stroke="${color}"></path>`;
  let svgsolid = `<path clip-rule="evenodd" fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fill="${color}"></path>`;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 20 20";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 20 20";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 20 20";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "20" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "chevron right" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path clip-rule="evenodd" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" stroke="${color}"></path> `;
  let svgsolid = `<path clip-rule="evenodd" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill="${color}"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 20 20";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 20 20";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 20 20";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const Chevron = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placement = "bottom" } = $$props;
  let { aligned = false } = $$props;
  const icons = {
    top: ChevronUp,
    right: ChevronRight,
    bottom: ChevronDown,
    left: ChevronLeft
  };
  let icon;
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.aligned === void 0 && $$bindings.aligned && aligned !== void 0)
    $$bindings.aligned(aligned);
  icon = icons[placement.split("-")[0]] ?? ChevronDown;
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "flex items-center justify-between",
      show: aligned
    },
    {},
    {
      default: () => {
        return `${placement.split("-")[0] === "left" ? `${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { class: "h-4 w-4 mr-2" }, {}, {})}
    ${slots.default ? slots.default({}) : ``}` : `${slots.default ? slots.default({}) : ``}
    ${validate_component(icon || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 ml-2" }, {}, {})}`}`;
      }
    }
  )}`;
});
const clock_svelte_svelte_type_style_lang = "";
const clockDesign_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".clock.svelte-13hzk6g{color:rgb(50, 50, 50);width:20rem;height:20rem;padding:10px;border-radius:20%;border:15px solid rgb(55, 55, 55);box-shadow:inset 0 0 3px 3px rgba(50, 50, 50, 0.3), inset 0 0 1px 2px rgba(50, 50, 50, 0.2)}",
  map: null
};
const r = 50;
const cx = 65;
const cy = 65;
function AddLine() {
  this.time = 0;
  this.angle = 0;
  this.text = "";
  this.stroke_width = "thin";
}
function getLineCoordinates(line) {
  const radians = line.angle * Math.PI / 180;
  const x1 = cx + Math.sin(radians) * r;
  const y1 = cy - Math.cos(radians) * r;
  const x2 = cx + Math.sin(radians) * (r - 0.1 * r);
  const y2 = cy - Math.cos(radians) * (r - 0.1 * r);
  return { x1, y1, x2, y2 };
}
function getTextCoordinates(line) {
  const radians = line.angle * Math.PI / 180;
  let x = 0;
  let y = 0;
  if (line.angle <= 90) {
    x = cx + Math.sin(radians) * (r + 0.1 * r);
    y = cy - Math.cos(radians) * (r + 0.1 * r);
  } else if (line.angle <= 180) {
    x = cx + Math.sin(radians) * (r + 0.1 * r);
    y = cy - Math.cos(radians) * (r + 0.2 * r);
  } else if (line.angle <= 270) {
    x = cx + Math.sin(radians) * (r + 0.3 * r);
    y = cy - Math.cos(radians) * (r + 0.2 * r);
  } else {
    x = cx + Math.sin(radians) * (r + 0.3 * r);
    y = cy - Math.cos(radians) * (r + 0.1 * r);
  }
  return { x, y };
}
const Clock_design = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const vw = cx * 2;
  const vh = cy * 2;
  let lines = [];
  (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { timeStyle: "short" });
  for (let i = 0; i < 60; i += 1) {
    let line = new AddLine();
    line.time = i;
    line.angle = 6 * i;
    if (i % 5 === 0) {
      line.stroke_width = "thick";
      line.text = i.toString();
    }
    lines.push(line);
  }
  $$result.css.add(css$2);
  return `<div class="clock svelte-13hzk6g"><svg viewBox="${"0 0 " + escape(vw, true) + " " + escape(vh, true)}"><circle${add_attribute("cx", cx, 0)}${add_attribute("cy", cy, 0)}${add_attribute("r", r, 0)} stroke="black" fill="transparent"></circle><g transform="translate(50,50)">${validate_component(Icon, "Icon").$$render($$result, { icon: playCircle, width: "30" }, {}, {})}</g><g transform="translate(5,110)">${validate_component(Icon, "Icon").$$render($$result, { icon: timerReset }, {}, {})}</g><g transform="translate(110,110)">${validate_component(Icon, "Icon").$$render($$result, { icon: repeatRounded }, {}, {})}</g>${each(lines, (line) => {
    return `<line${add_attribute("x1", getLineCoordinates(line).x1, 0)}${add_attribute("y1", getLineCoordinates(line).y1, 0)}${add_attribute("x2", getLineCoordinates(line).x2, 0)}${add_attribute("y2", getLineCoordinates(line).y2, 0)} stroke="black"${add_attribute("stroke-width", line.stroke_width === "thick" ? 1.5 : 0.5, 0)}></line>
            <text${add_attribute("x", getTextCoordinates(line).x, 0)}${add_attribute("y", getTextCoordinates(line).y, 0)} font-size="8">${escape(line.text)}</text>`;
  })}</svg>
</div>`;
});
const pomodoro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".timeController.svelte-1432w4y{display:flex;flex-direction:column;margin:10px;width:4.5rem;height:25rem;justify-content:space-between;align-items:stretch}",
  map: null
};
const Pomodoro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let timeLeft = 1500;
  let timer = null;
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }
  onDestroy(() => {
    stopTimer();
  });
  let currentTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { timeStyle: "short" });
  $$result.css.add(css$1);
  return `<div class="flex justify-center items-center"><div class="timeController svelte-1432w4y">${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "cyanToBlue"
    },
    {},
    {
      default: () => {
        return `-05`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "cyanToBlue"
    },
    {},
    {
      default: () => {
        return `-05`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "cyanToBlue"
    },
    {},
    {
      default: () => {
        return `-05`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "cyanToBlue"
    },
    {},
    {
      default: () => {
        return `-05`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "cyanToBlue"
    },
    {},
    {
      default: () => {
        return `-05`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "cyanToBlue"
    },
    {},
    {
      default: () => {
        return `-05`;
      }
    }
  )}</div>
    <div class="flex-col">${validate_component(Clock_design, "ClockDesign").$$render($$result, {}, {}, {})}
        <div class="flex space-x-2 mt-4 justify-around">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      large: true,
      color: "pink",
      class: "w-[100px]"
    },
    {},
    {
      default: () => {
        return `${escape(Math.floor(timeLeft / 60))}:${escape(("0" + timeLeft % 60).slice(-2))}`;
      }
    }
  )}
            <div class="flex-col"><p><span class="text-pink-800">current time:</span> ${escape(currentTime)}</p>
                <p><span class="text-pink-800">goal: </span> ${escape(currentTime)} - ${escape(currentTime)}</p></div></div></div>
    <div class="timeController  svelte-1432w4y">${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "pinkToOrange"
    },
    {},
    {
      default: () => {
        return `+05`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "pinkToOrange"
    },
    {},
    {
      default: () => {
        return `+10`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "pinkToOrange"
    },
    {},
    {
      default: () => {
        return `+25`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "pinkToOrange"
    },
    {},
    {
      default: () => {
        return `+25`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "pinkToOrange"
    },
    {},
    {
      default: () => {
        return `+60`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      gradient: true,
      color: "pinkToOrange"
    },
    {},
    {
      default: () => {
        return `+60`;
      }
    }
  )}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".timer-container.svelte-ixxy13{display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="p-8 ">
    ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "w-full" }, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "none",
          class: "flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        },
        {},
        {
          default: () => {
            return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
              default: () => {
                return `All categories`;
              }
            })}`;
          }
        }
      )}
        ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Work A`;
            }
          })}
            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Work B`;
            }
          })}
            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Work C`;
            }
          })}
            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Work D`;
            }
          })}`;
        }
      })}

        ${validate_component(Input, "Input").$$render($$result, { placeholder: "session" }, {}, {})}

        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "blue",
          class: "!p-2.5",
          type: "submit"
        },
        {},
        {
          default: () => {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>`;
          }
        }
      )}`;
    }
  })}

    
    <div class="timer-container  svelte-ixxy13">${validate_component(Hr, "Hr").$$render(
    $$result,
    {
      class: "my-4 mx-auto md:my-10 ",
      width: "w-full",
      height: "h-1"
    },
    {},
    {
      default: () => {
        return `<div class="flex">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "space-x-px" }, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, { color: "blue" }, {}, {
              default: () => {
                return `Work`;
              }
            })}
                    ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "blue" }, {}, {
              default: () => {
                return `Break`;
              }
            })}`;
          }
        })}</div>`;
      }
    }
  )}
        ${validate_component(Pomodoro, "Timer").$$render($$result, {}, {}, {})}</div>



</div>`;
});
export {
  ButtonGroup as B,
  Page as P
};
