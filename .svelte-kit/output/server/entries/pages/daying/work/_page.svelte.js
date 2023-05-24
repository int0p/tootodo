import { c as create_ssr_component, n as compute_slots, b as add_attribute, p as get_current_component, d as compute_rest_props, v as validate_component, q as globals, e as escape, j as each } from "../../../../chunks/index2.js";
import classNames from "classnames";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */import { I as Icon } from "../../../../chunks/Icon.js";
import clock2Fill from "@iconify/icons-mingcute/clock-2-fill.js";
import { L as Label, I as Input, a as List, C as Checkbox } from "../../../../chunks/List.js";
import { createPopper } from "@popperjs/core";
import { F as Frame } from "../../../../chunks/Frame.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import searchIcon from "@iconify/icons-mdi/search.js";
import listLineDuotone from "@iconify/icons-solar/list-line-duotone.js";
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 left-0",
    center: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 right-0",
    // bottom
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = classNames("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
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
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { defaultClass = "py-2 px-3" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Popper, "Popper").$$render($$result, Object.assign({}, { "data-popover": true }, { activeContent: true }, { border: true }, { shadow: true }, { rounded: true }, $$restProps, { class: $$props.class }), {}, {
    default: () => {
      return `${$$slots.title || title ? `<div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">${slots.title ? slots.title({}) : `
				<h3 class="font-semibold text-gray-900 dark:text-white">${escape(title)}</h3>
			`}</div>` : ``}
	<div${add_attribute("class", defaultClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`;
});
const WorkSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todayList = [{ title: "test1" }, { title: "test2" }, { title: "test3" }, { title: "test4" }];
  let allList = [{ title: "test1" }, { title: "test2" }, { title: "test3" }, { title: "test4" }];
  return `${validate_component(Label, "Label").$$render($$result, { class: "w-full h-[44px]" }, {}, {
    default: () => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "text",
          placeholder: "select work",
          size: "lg"
        },
        {},
        {
          right: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: listLineDuotone,
                id: "listIcon",
                width: "30",
                slot: "right",
                hFlip: true
              },
              {},
              {}
            )}`;
          },
          left: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: searchIcon,
                width: "28",
                slot: "left"
              },
              {},
              {}
            )}`;
          }
        }
      )}`;
    }
  })}

${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      triggeredBy: "#listIcon",
      class: "w-[600px] h-[500px] text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
    },
    {},
    {
      default: () => {
        return `<div class="flex-col p-3 ">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-4" }, {}, {
          default: () => {
            return `Work List`;
          }
        })}

        <div class="flex justify-around">${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            class: "relative w-[264px] ",
            outline: true,
            gradient: true,
            color: "cyanToBlue"
          },
          {},
          {
            default: () => {
              return `<span class="sr-only">Remain</span>
                    <div class="flex-col w-full">${validate_component(Heading, "Heading").$$render(
                $$result,
                {
                  tag: "h5",
                  customSize: "text-lg font-semibold",
                  class: "text-lg font-semibold text-gray-900 dark:text-white px-20"
                },
                {},
                {
                  default: () => {
                    return `Today`;
                  }
                }
              )}
                        <div class="border-2 w-full h-[360px]">${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1" }, {}, {
                default: () => {
                  return `${each(todayList, (work) => {
                    return `${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "p-2 m-2 break-words" }, {}, {
                      default: () => {
                        return `${escape(work.title)}`;
                      }
                    })}`;
                  })}`;
                }
              })}</div></div>
                    ${validate_component(Indicator, "Indicator").$$render(
                $$result,
                {
                  color: "red",
                  border: true,
                  size: "xl",
                  placement: "top-right"
                },
                {},
                {
                  default: () => {
                    return `<span class="text-white text-xs font-bold">8</span>`;
                  }
                }
              )}`;
            }
          }
        )}

            ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            class: "relative w-[264px] ",
            outline: true,
            gradient: true,
            color: "pinkToOrange"
          },
          {},
          {
            default: () => {
              return `<span class="sr-only">Remain</span>
                <div class="flex-col w-full">${validate_component(Heading, "Heading").$$render(
                $$result,
                {
                  tag: "h5",
                  customSize: "text-lg font-semibold",
                  class: "text-lg font-semibold text-gray-900 dark:text-white px-[94px]"
                },
                {},
                {
                  default: () => {
                    return `All`;
                  }
                }
              )}
                    <div class="border-2 w-full h-[360px]">${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1" }, {}, {
                default: () => {
                  return `${each(allList, (work) => {
                    return `${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "p-2 m-2 break-words" }, {}, {
                      default: () => {
                        return `${escape(work.title)}`;
                      }
                    })}`;
                  })}`;
                }
              })}</div></div>
                ${validate_component(Indicator, "Indicator").$$render(
                $$result,
                {
                  color: "red",
                  border: true,
                  size: "xl",
                  placement: "top-right"
                },
                {},
                {
                  default: () => {
                    return `<span class="text-white text-xs font-bold">8</span>`;
                  }
                }
              )}`;
            }
          }
        )}</div></div>`;
      }
    }
  )}


















`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showTimer } = $$props;
  if ($$props.showTimer === void 0 && $$bindings.showTimer && showTimer !== void 0)
    $$bindings.showTimer(showTimer);
  return `<div class="pt-8 pl-4 pr-4 pb-4 m-4 mt-0 flex gap-2">
    ${validate_component(WorkSelect, "WorkSelect").$$render($$result, {}, {}, {})}

    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      gradient: true,
      color: "purpleToPink",
      class: "w-[44px] aspect-square !p-2.5"
    },
    {},
    {
      default: () => {
        return `${!showTimer ? `${validate_component(Icon, "Icon").$$render($$result, { icon: clock2Fill, width: "24" }, {}, {})}` : ``}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
