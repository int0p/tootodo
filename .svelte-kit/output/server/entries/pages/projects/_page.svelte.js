import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, b as add_attribute, n as compute_slots, s as setContext, v as validate_component, g as getContext, e as escape, j as each } from "../../../chunks/index2.js";
import classNames from "classnames";
import { A as Alert, T as Textarea } from "../../../chunks/Textarea.js";
import { T as ToolbarButton } from "../../../chunks/CloseButton.js";
/* empty css                                                       */import { I as Input, C as Checkbox, a as List } from "../../../chunks/List.js";
import { B as Button } from "../../../chunks/Button.js";
import { W as Wrapper } from "../../../chunks/Wrapper.js";
import { H as Heading } from "../../../chunks/Heading.js";
import checkboxBlankOutline from "@iconify/icons-mdi/checkbox-blank-outline.js";
import checkboxMarkedOutline from "@iconify/icons-mdi/checkbox-marked-outline.js";
import { C as ChevronUp, a as ChevronDown } from "../../../chunks/ChevronUp.js";
import { w as writable } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
import arrowBackIosRounded from "@iconify/icons-material-symbols/arrow-back-ios-rounded.js";
import "@iconify/icons-material-symbols/arrow-forward-ios-rounded.js";
import starRounded from "@iconify/icons-material-symbols/star-rounded.js";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["solid", "navClass", "solidClass", "olClass"]);
  let { solid = false } = $$props;
  let { navClass = "flex" } = $$props;
  let { solidClass = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  let { olClass = "inline-flex items-center space-x-1 md:space-x-3" } = $$props;
  let classNav = solid ? solidClass : navClass;
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.solidClass === void 0 && $$bindings.solidClass && solidClass !== void 0)
    $$bindings.solidClass(solidClass);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  return `<nav${spread(
    [
      { "aria-label": "Breadcrumb" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(classNav, $$props.class))
      }
    ],
    {}
  )}><ol${add_attribute("class", classNames(olClass, $$props.classOl), 0)}>${slots.default ? slots.default({}) : ``}</ol></nav>`;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["home", "href", "linkClass", "spanClass", "homeClass"]);
  let $$slots = compute_slots(slots);
  let { home = false } = $$props;
  let { href = void 0 } = $$props;
  let { linkClass = "ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white" } = $$props;
  let { spanClass: spanClass2 = "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" } = $$props;
  let { homeClass = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" } = $$props;
  if ($$props.home === void 0 && $$bindings.home && home !== void 0)
    $$bindings.home(home);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.linkClass === void 0 && $$bindings.linkClass && linkClass !== void 0)
    $$bindings.linkClass(linkClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.homeClass === void 0 && $$bindings.homeClass && homeClass !== void 0)
    $$bindings.homeClass(homeClass);
  return `<li${spread([{ class: "inline-flex items-center" }, escape_object($$restProps)], {})}>${home ? `<a${add_attribute("class", homeClass, 0)}${add_attribute("href", href, 0)}>${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`}
      ${slots.default ? slots.default({}) : ``}</a>` : `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`}
    ${href ? `<a${add_attribute("class", linkClass, 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<span${add_attribute("class", spanClass2, 0)}>${slots.default ? slots.default({}) : ``}</span>`}`}</li>`;
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
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "placeholder", "value"]);
  let $$slots = compute_slots(slots);
  let { size = "lg" } = $$props;
  let { placeholder = "Search" } = $$props;
  let { value = "" } = $$props;
  const sizes = {
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Wrapper, "Wrapper").$$render(
      $$result,
      {
        class: "relative w-full",
        show: $$slots.default
      },
      {},
      {
        default: () => {
          return `${validate_component(Input, "Input").$$render(
            $$result,
            Object.assign({}, { type: "search" }, { placeholder }, { size }, $$restProps, { class: $$props.class }, { value }),
            {
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {
              left: () => {
                return `<svg slot="left"${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`;
              }
            }
          )}
  
  ${$$slots.default ? `<div class="flex absolute inset-y-0 right-0 items-center pr-3 text-gray-500 dark:text-gray-400">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const common = "mr-3 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "group", "value", "checked"]);
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let background = getContext("background");
  const colors = {
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6"
  };
  let divClass;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    divClass = classNames(
      common,
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "blue"],
      sizes[size],
      "relative"
    );
    $$rendered = `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      Object.assign({}, { custom: true }, $$restProps, { class: $$props.class }, { value }, { checked }, { group }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span${add_attribute("class", divClass, 0)}></span>
  ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "spanClass", "activeClass", "active"]);
  let $$slots = compute_slots(slots);
  let { aClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass: spanClass2 = "ml-3" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``}
    <span${add_attribute("class", spanClass2, 0)}>${escape(label)}</span>
    ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li>`;
});
const SidebarDropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "activeClass", "active"]);
  let { aClass = "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { activeClass = "flex items-center p-2 pl-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${escape(label)}</a></li>`;
});
const SidebarDropdownWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "btnClass",
    "label",
    "spanClass",
    "ulClass",
    "transitionType",
    "transitionParams",
    "isOpen"
  ]);
  let $$slots = compute_slots(slots);
  let { btnClass = "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" } = $$props;
  let { label = "" } = $$props;
  let { spanClass: spanClass2 = "flex-1 ml-3 text-left whitespace-nowrap" } = $$props;
  let { ulClass = "py-2 space-y-2" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { isOpen = false } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  return `<li><button${spread(
    [
      escape_object($$restProps),
      { type: "button" },
      {
        class: escape_attribute_value(classNames(btnClass, $$props.class))
      },
      { "aria-controls": "sidebar-dropdown" }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``}
    <span${add_attribute("class", spanClass2, 0)}>${escape(label)}</span>
    ${isOpen ? `${$$slots.arrowup ? `${slots.arrowup ? slots.arrowup({}) : ``}` : `${validate_component(ChevronUp, "ChevronUp").$$render($$result, {}, {}, {})}`}` : `${$$slots.arrowdown ? `${slots.arrowdown ? slots.arrowdown({}) : ``}` : `${validate_component(ChevronDown, "ChevronDown").$$render($$result, {}, {}, {})}`}`}</button>
  ${isOpen ? `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul>` : ``}</li>`;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const StepIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["steps", "currentStep", "size", "color", "glow", "hideLabel"]);
  let { steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"] } = $$props;
  let { currentStep: currentStep2 = 1 } = $$props;
  let { size = "h-2.5" } = $$props;
  let { color = "blue" } = $$props;
  let { glow = false } = $$props;
  let { hideLabel = false } = $$props;
  const completedStepColors = {
    gray: "bg-gray-400 dark:bg-gray-500",
    red: "bg-red-600 dark:bg-red-900",
    yellow: "bg-yellow-400 dark:bg-yellow-600",
    green: "bg-green-500 dark:bg-green-900",
    indigo: "bg-indigo-500 dark:bg-indigo-900",
    purple: "bg-purple-500 dark:bg-purple-900",
    pink: "bg-pink-500 dark:bg-pink-900",
    blue: "bg-blue-500 dark:bg-blue-900"
  };
  const currentStepColors = {
    gray: "bg-gray-700 dark:bg-gray-200",
    red: "bg-red-900 dark:bg-red-500",
    yellow: "bg-yellow-600 dark:bg-yellow-400",
    green: "bg-green-800 dark:bg-green-400",
    indigo: "bg-indigo-800 dark:bg-indigo-400",
    purple: "bg-purple-800 dark:bg-purple-400",
    pink: "bg-pink-800 dark:bg-pink-400",
    blue: "bg-blue-800 dark:bg-blue-400"
  };
  if ($$props.steps === void 0 && $$bindings.steps && steps !== void 0)
    $$bindings.steps(steps);
  if ($$props.currentStep === void 0 && $$bindings.currentStep && currentStep2 !== void 0)
    $$bindings.currentStep(currentStep2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.glow === void 0 && $$bindings.glow && glow !== void 0)
    $$bindings.glow(glow);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("space-y-2 dark:text-white", $$props.class))
      }
    ],
    {}
  )}>${!hideLabel ? `<h3 class="text-base font-semibold">${escape(steps[currentStep2 - 1])}</h3>` : ``}
  <div${add_attribute("class", classNames("flex justify-between gap-2 w-full", size), 0)}>${each(steps, (step, i) => {
    return `${i === currentStep2 - 1 ? `<div class="relative w-full h-full"><div${add_attribute("class", classNames("relative w-full h-full rounded-sm", currentStepColors[color]), 0)}></div>
          ${glow ? `<div${add_attribute("class", classNames("absolute -inset-1 rounded-sm blur opacity-30 dark:opacity-25", currentStepColors[color]), 0)}></div>` : ``}
        </div>` : `${i < currentStep2 - 1 ? `<div${add_attribute("class", classNames("w-full h-full rounded-sm", completedStepColors[color]), 0)}></div>` : `<div${add_attribute("class", classNames("w-full h-full rounded-sm bg-gray-200 dark:bg-gray-700"), 0)}></div>`}`}`;
  })}</div></div>`;
});
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = classNames(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", classNames("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button>

  ${open ? `<div class="hidden tab_content_placeholder"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li>`;
});
const styledActiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white",
  pill: "py-3 px-4 text-white bg-blue-600 rounded-lg",
  underline: "p-4 text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500",
  none: ""
};
const styledInactiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
  pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
  underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
  none: ""
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { style = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const ctx = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(style) ? false : divider;
  ulClass = classNames(defaultClass, style === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ style }) : ``}</ul>
${divider ? `${slots.divider ? slots.divider({ style }) : `
    <div class="h-px bg-gray-200 dark:bg-gray-700"></div>
  `}` : ``}
<div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { customClass = "" } = $$props;
  let { order = "default" } = $$props;
  setContext("order", order);
  let olClasses = {
    group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    horizontal: "sm:flex",
    activity: "relative border-l border-gray-200 dark:border-gray-700",
    vertical: "relative border-l border-gray-200 dark:border-gray-700",
    default: "relative border-l border-gray-200 dark:border-gray-700",
    custom: customClass
  };
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  return `<ol${add_attribute("class", olClasses[order], 0)}>${slots.default ? slots.default({}) : ``}</ol>`;
});
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { date = "" } = $$props;
  let { customDiv = "" } = $$props;
  let { customTimeClass = "" } = $$props;
  let order = "default";
  order = getContext("order");
  const liClasses = {
    default: "mb-10 ml-4",
    vertical: "mb-10 ml-6",
    horizontal: "relative mb-6 sm:mb-0",
    activity: "mb-10 ml-6",
    group: ""
  };
  const divClasses = {
    default: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
    vertical: "flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
    horizontal: "flex items-center",
    activity: "flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
    group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    custom: customDiv
  };
  const timeClasses = {
    default: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    vertical: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    horizontal: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    activity: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    group: "text-lg font-semibold text-gray-900 dark:text-white",
    custom: customTimeClass
  };
  const h3Class = classNames(order === "vertical" ? "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white" : "text-lg font-semibold text-gray-900 dark:text-white");
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.customDiv === void 0 && $$bindings.customDiv && customDiv !== void 0)
    $$bindings.customDiv(customDiv);
  if ($$props.customTimeClass === void 0 && $$bindings.customTimeClass && customTimeClass !== void 0)
    $$bindings.customTimeClass(customTimeClass);
  return `<li${add_attribute("class", liClasses[order], 0)}>${order === "default" ? `<div${add_attribute("class", divClasses[order], 0)}></div>
		${date ? `<time${add_attribute("class", timeClasses[order], 0)}>${escape(date)}</time>` : ``}
		${title ? `<h3${add_attribute("class", h3Class, 0)}>${escape(title)}</h3>` : ``}
		${slots.default ? slots.default({}) : ``}` : `${order === "vertical" ? `<div${add_attribute("class", divClasses[order], 0)}></div>
		${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>`}
		${title ? `<h3${add_attribute("class", h3Class, 0)}>${escape(title)}</h3>` : ``}
		${date ? `<time${add_attribute("class", timeClasses[order], 0)}>${escape(date)}</time>` : ``}
		${slots.default ? slots.default({}) : ``}` : `${order === "horizontal" ? `<div${add_attribute("class", divClasses[order], 0)}></div>
		${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>`}
		${title ? `<h3${add_attribute("class", h3Class, 0)}>${escape(title)}</h3>` : ``}
		${date ? `<time${add_attribute("class", timeClasses[order], 0)}>${escape(date)}</time>` : ``}
		${slots.default ? slots.default({}) : ``}` : `<div${add_attribute("class", divClasses[order], 0)}></div>
		${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>`}
		${title ? `<h3${add_attribute("class", h3Class, 0)}>${escape(title)}</h3>` : ``}
		${date ? `<time${add_attribute("class", timeClasses[order], 0)}>${escape(date)}</time>` : ``}
		${slots.default ? slots.default({}) : ``}`}`}`}</li>`;
});
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = classNames(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const WorkDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-7/12 float-right top-0 right-0 relative h-full flex-col justify-between content-stretch overflow-x-hidden ">${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      "aria-label": "Solid background breadcrumb example",
      class: "bg-gray-50 py-3 px-5 dark:bg-gray-900 mb-2"
    },
    {},
    {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
          icon: () => {
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
            `;
          },
          default: () => {
            return `Home`;
          }
        })}
        ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
          icon: () => {
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path></svg>
            `;
          },
          default: () => {
            return `Projects`;
          }
        })}
        ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          icon: () => {
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path></svg>
            `;
          },
          default: () => {
            return `Flowbite Svelte`;
          }
        })}`;
      }
    }
  )}

    <div class="max-h-[calc(100%-100px)] overflow-y-auto p-2">${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(TimelineItem, "TimelineItem").$$render($$result, { title: "", date: "February 2022" }, {}, {
        default: () => {
          return `${validate_component(List, "List").$$render(
            $$result,
            {
              tag: "ul",
              class: "mt-4 mb-2 space-y-4",
              list: "none"
            },
            {},
            {
              default: () => {
                return `${each(Array(7), (_) => {
                  return `${validate_component(Li, "Li").$$render($$result, { icon: true, class: "gap-3" }, {}, {
                    default: () => {
                      return `${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: true, color: "green" }, {}, {
                        default: () => {
                          return `<span class="text-lg">Checked state</span>`;
                        }
                      })}
                        `;
                    }
                  })}`;
                })}`;
              }
            }
          )}`;
        }
      })}
            ${validate_component(TimelineItem, "TimelineItem").$$render($$result, { title: "", date: "March 2022" }, {}, {
        default: () => {
          return `${validate_component(List, "List").$$render(
            $$result,
            {
              tag: "ul",
              class: "mt-4 mb-2 space-y-4",
              list: "none"
            },
            {},
            {
              default: () => {
                return `${validate_component(Li, "Li").$$render($$result, { icon: true, class: "gap-3" }, {}, {
                  default: () => {
                    return `<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        Individual configuration
                    `;
                  }
                })}
                    ${each(Array(4), (_) => {
                  return `${validate_component(Li, "Li").$$render($$result, { icon: true, class: "gap-3" }, {}, {
                    default: () => {
                      return `${validate_component(Checkbox, "Checkbox").$$render($$result, { unchecked: true, color: "green" }, {}, {
                        default: () => {
                          return `<span class="text-lg">Checked state</span>`;
                        }
                      })}
                        `;
                    }
                  })}`;
                })}`;
              }
            }
          )}`;
        }
      })}
            ${validate_component(TimelineItem, "TimelineItem").$$render(
        $$result,
        {
          title: "Application UI code in Tailwind CSS",
          date: "April 2022"
        },
        {},
        {
          default: () => {
            return `<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind
                    CSS.
                </p>`;
          }
        }
      )}`;
    }
  })}</div>

    
    <div class="flex justify-around border-t-2 absolute w-full bottom-0 right-0 bg-white"><form class="w-full"><label for="chat" class="sr-only">Your message</label>
            ${validate_component(Alert, "Alert").$$render($$result, { color: "dark", class: "px-3 py-2" }, {}, {
    icon: () => {
      return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
        $$result,
        {
          color: "dark",
          class: "text-gray-500 dark:text-gray-400"
        },
        {},
        {
          default: () => {
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                        <span class="sr-only">Upload image</span>`;
          }
        }
      )}
                    ${validate_component(ToolbarButton, "ToolbarButton").$$render(
        $$result,
        {
          color: "dark",
          class: "text-gray-500 dark:text-gray-400"
        },
        {},
        {
          default: () => {
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path></svg>
                        <span class="sr-only">Add emoji</span>`;
          }
        }
      )}
                    ${validate_component(Textarea, "Textarea").$$render(
        $$result,
        {
          id: "chat",
          class: "mx-4",
          rows: "1",
          placeholder: "Your message..."
        },
        {},
        {}
      )}
                    ${validate_component(ToolbarButton, "ToolbarButton").$$render(
        $$result,
        {
          type: "submit",
          color: "blue",
          class: "rounded-full text-blue-600 dark:text-blue-500"
        },
        {},
        {
          default: () => {
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg>
                        <span class="sr-only">Send message</span>`;
          }
        }
      )}`;
    }
  })}</form></div></div>`;
});
const Status = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex justify-around items-center h-[80px]">${validate_component(Toggle, "Toggle").$$render($$result, { class: "", checked: false }, {}, {})}

    <div class="space-x-2 ">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          pill: true,
          outline: true,
          color: "green",
          class: "w-[120px]"
        },
        {},
        {
          default: () => {
            return `Not started`;
          }
        }
      )}
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          pill: true,
          outline: true,
          color: "red",
          class: "w-[120px]"
        },
        {},
        {
          default: () => {
            return `Ongoing`;
          }
        }
      )}
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          pill: true,
          outline: true,
          color: "yellow",
          class: "w-[120px]"
        },
        {},
        {
          default: () => {
            return `Done`;
          }
        }
      )}`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { outline: true, size: "xs" }, {}, {
    default: () => {
      return `ALL`;
    }
  })}</div>

    <div class="flex items-center justify-center md:order-2 gap-2">${validate_component(Search, "Search").$$render($$result, { size: "md" }, {}, {})}
        ${validate_component(Button, "Button").$$render($$result, { class: "!p-2.5" }, {}, {
    default: () => {
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`;
    }
  })}</div></div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex bg-white text-gray-500 rounded-lg border border-gray-200 shadow-md w-[calc(100%-1rem)] mr-2 mb-4 max-h-[140px] overflow-x-hidden"><img src="https://images.unsplash.com/photo-1610534440162-e0e68fbdeca3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" alt="" class="w-1/6 aspect-square object-cover object-center rounded-l-lg ">

    <div class="p-5 pt-4"><div class="flex justify-between overflow-x-hidden"><h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Memo
            </h5>
            <p class="mb-3 text-sm">05/18/2023</p></div>

        <p class="mb-3 text-sm font-normal break-all max-h-[calc(100%-2rem)] overflow-y-hidden text-gray-700 dark:text-gray-400 leading-tight">DescriptionscriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            DescriptionscriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            DescriptionDescriptionDescriptionDescription
        </p></div></div>`;
});
const listNote_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".fullWidth.svelte-ozknf9{transform:translateX(-210px);z-index:1;background-color:white}",
  map: null
};
const ListNote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fullMemo } = $$props;
  if ($$props.fullMemo === void 0 && $$bindings.fullMemo && fullMemo !== void 0)
    $$bindings.fullMemo(fullMemo);
  $$result.css.add(css$2);
  {
    console.log(fullMemo);
  }
  return `
<div class="${[
    "flex-col justify-center items-center float-right bottom-0 right-0 relative h-full svelte-ozknf9",
    fullMemo ? "fullWidth" : ""
  ].join(" ").trim()}">${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "m-4 " }, {}, {
    default: () => {
      return `Memo`;
    }
  })}

    <div class="ml-4 max-h-[calc(100%-100px)] overflow-y-auto overflow-x-hidden w-full relative">${each(Array(6), (_) => {
    return `${validate_component(Card, "Card").$$render($$result, {}, {}, {})}`;
  })}</div>

    
    <div class="flex h-[56px] justify-around border-t-2 absolute w-full bottom-0 right-0 bg-white mb-2 mt-2 ">
        <svg class="mt-2 w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"></path></svg>
        
        <div class="mt-2 flex items-center justify-center col-span-2 "><div class="flex items-center justify-between text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-600 max-w-[128px] mx-2"><button type="button" class="inline-flex items-center justify-center h-8 px-1 bg-gray-100 rounded-l-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path></svg>
                    <span class="sr-only">Previous page</span></button>
                <span class="flex-shrink-0 mx-1 text-sm font-medium">1 of 345</span>
                <button type="button" class="inline-flex items-center justify-center h-8 px-1 bg-gray-100 rounded-r-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                    <span class="sr-only">Next page</span></button></div></div>
        
        <svg class="mt-2 w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">--&gt;
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg></div>
</div>`;
});
const listWork_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".filpList.svelte-1i3lp7f{transform:rotateY(180deg)}",
  map: null
};
let spanClass = "flex-1 ml-3 whitespace-nowrap";
let style_sidebarGrp = "h-[calc(100%-70px)] overflow-y-auto absolute bottom-2 left-0 w-full bg-gray-50 p-2";
let style_tabItem = "relative h-[40px] -top-2.5";
const ListWork = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fullMemo } = $$props;
  if ($$props.fullMemo === void 0 && $$bindings.fullMemo && fullMemo !== void 0)
    $$bindings.fullMemo(fullMemo);
  $$result.css.add(css$1);
  return `<div class="${[
    "float-left bottom-0 left-0 h-full max-w-[280px] relative svelte-1i3lp7f",
    fullMemo ? "filpList" : ""
  ].join(" ").trim()}">${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      defaultClass: "w-full flex h-[40px] justify-center items-center rounded-lg divide-x divide-gray-100 shadow p-1"
    },
    {},
    {
      default: () => {
        return `
        ${validate_component(TabItem, "TabItem").$$render($$result, { open: true, class: style_tabItem }, {}, {
          title: () => {
            return `<span slot="title">Working</span>`;
          },
          default: () => {
            return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { class: style_sidebarGrp }, {}, {
              default: () => {
                return `${each(Array(5), (_, index) => {
                  return `${validate_component(SidebarDropdownWrapper, "SidebarDropdownWrapper").$$render($$result, { label: "Work - " + index, isOpen: true }, {}, {
                    icon: () => {
                      return `${validate_component(Icon, "Icon").$$render($$result, { icon: checkboxBlankOutline, width: "22" }, {}, {})}
                        `;
                    },
                    default: () => {
                      return `${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { label: "Products" }, {}, {})}
                        ${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { label: "Billing" }, {}, {})}
                        ${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { label: "Invoice" }, {}, {})}
                    `;
                    }
                  })}`;
                })}
                ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Kanban", spanClass }, {}, {
                  subtext: () => {
                    return `<span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">+</span>
                    `;
                  },
                  icon: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { icon: checkboxBlankOutline, width: "22" }, {}, {})}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

        
        ${validate_component(TabItem, "TabItem").$$render($$result, { class: style_tabItem }, {}, {
          title: () => {
            return `<span slot="title">Done</span>`;
          },
          default: () => {
            return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { class: style_sidebarGrp }, {}, {
              default: () => {
                return `${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Users" }, {}, {
                  icon: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { icon: checkboxMarkedOutline, width: "22" }, {}, {})}`;
                  }
                })}
                ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Sign In" }, {}, {
                  icon: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { icon: checkboxMarkedOutline, width: "22" }, {}, {})}`;
                  }
                })}
                ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Sign Up" }, {}, {
                  icon: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { icon: checkboxMarkedOutline, width: "22" }, {}, {})}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

        
        ${validate_component(TabItem, "TabItem").$$render($$result, { class: style_tabItem }, {}, {
          title: () => {
            return `<span slot="title">${validate_component(Icon, "Icon").$$render($$result, { icon: starRounded, width: "22" }, {}, {})}</span>`;
          },
          default: () => {
            return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { class: style_sidebarGrp }, {}, {})}`;
          }
        })}

        ${validate_component(Button, "Button").$$render(
          $$result,
          {
            gradient: true,
            color: "greenToBlue",
            class: "w-12 h-7 text-9xl"
          },
          {},
          {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, { icon: arrowBackIosRounded, width: "30" }, {}, {})}`;
            }
          }
        )}`;
      }
    }
  )}
</div>`;
});
const projectDetail_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fullWidth.svelte-9p4d45{width:calc(100% + 210px)}.fitWidth.svelte-9p4d45{width:100%}",
  map: null
};
const ProjectDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fullMemo = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${[
      "flex h-[calc(100vh-290px)] overflow-x-hidden svelte-9p4d45",
      (fullMemo ? "fullWidth" : "") + " " + (!fullMemo ? "fitWidth" : "")
    ].join(" ").trim()}">${validate_component(ListWork, "WorkList").$$render(
      $$result,
      { fullMemo },
      {
        fullMemo: ($$value) => {
          fullMemo = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    ${validate_component(ListNote, "MemoList").$$render($$result, { fullMemo }, {}, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
let currentStep = 2;
let status = "blue";
const style_tapItem = "text-sm text-gray-500 dark:text-gray-400 h-[60px] max-h-[60px] overflow-y-auto";
const ProjectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return `<div class="float-left top-0 left-0 w-5/12 ml-4 mr-2 flex-col h-full ">
    ${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      class: "w-full flex-nowrap overflow-x-hidden "
    },
    {},
    {
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            pill: true,
            class: "h-8 w-4 self-end mb-1",
            color: status
          },
          {},
          {
            default: () => {
              return `+`;
            }
          }
        )}
        ${each(Array(5), (_, index) => {
          return `${validate_component(TabItem, "TabItem").$$render(
            $$result,
            {
              open: true,
              title: "Proj" + (index + 1),
              class: "h-[44px]"
            },
            {},
            {
              default: () => {
                return `<p${add_attribute("class", style_tapItem, 0)}><b>Goal:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            `;
              }
            }
          )}`;
        })}`;
      }
    }
  )}

    
    <div class="my-4 w-full ">${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, hideLabel: true }, {}, {})}</div>


    ${validate_component(ProjectDetail, "ProjectDetail").$$render($$result, {}, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex-col m-4 h-full w-[calc(100%-100px)]">

    ${validate_component(Status, "Status").$$render($$result, {}, {}, {})} 


    <div class="flex clear-both h-[calc(100%-100px)] ">${validate_component(ProjectList, "ProjectList").$$render($$result, {}, {}, {})}
        ${validate_component(WorkDetail, "WorkDetail").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
