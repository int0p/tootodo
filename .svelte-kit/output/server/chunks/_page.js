import { c as create_ssr_component, d as compute_rest_props, r as compute_slots, o as createEventDispatcher, v as validate_component, u as add_classes, f as spread, h as escape_object, i as escape_attribute_value, b as add_attribute, g as getContext, k as is_void, j as each, e as escape } from "./index2.js";
import { C as CloseButton, W as Wrapper, T as ToolbarButton, I as Icon } from "./Icon.js";
import messageQuestion from "@iconify/icons-mdi/message-question.js";
import messageQuestionOutline from "@iconify/icons-mdi/message-question-outline.js";
import bookmarkAddRounded from "@iconify/icons-material-symbols/bookmark-add-rounded.js";
import bookmarkAddOutlineRounded from "@iconify/icons-material-symbols/bookmark-add-outline-rounded.js";
import classNames from "classnames";
import { F as Frame, H as Hr } from "./Hr.js";
/* empty css                                         */import { H as Heading } from "./Heading.js";
import bookmarkRounded from "@iconify/icons-material-symbols/bookmark-rounded.js";
import bookmarkOutlineRounded from "@iconify/icons-material-symbols/bookmark-outline-rounded.js";
import "@iconify/icons-material-symbols/delete-outline-rounded.js";
import { v4 } from "uuid";
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
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass2;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses2 = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass2 = classNames(defaultClass, colorClasses2[color], $$props.class);
  return `${show ? `
  <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass2)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const colorClasses = {
  red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
  green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
  purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
  teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
  yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
  orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
  blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
};
const labelClass = (inline, extraClass) => classNames(inline ? "inline-flex" : "flex", "items-center", extraClass);
const inputClass = (custom, color, rounded, tinted, extraClass) => classNames(
  "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",
  extraClass === true && "mr-2",
  tinted ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
  custom && "sr-only peer",
  rounded && "rounded",
  colorClasses[color],
  extraClass
);
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "custom", "inline", "group", "value", "checked"]);
  let $$slots = compute_slots(slots);
  let { color = "blue" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let background = getContext("background");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  return `${validate_component(Label, "Label").$$render(
    $$result,
    {
      class: labelClass(inline, $$props.class),
      show: !!$$slots.default
    },
    {},
    {
      default: () => {
        return `<input${spread(
          [
            { type: "checkbox" },
            { value: escape_attribute_value(value) },
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass(custom, color, true, background, $$slots.default || $$props.class))
            }
          ],
          {}
        )}${add_attribute("checked", checked, 1)}>${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
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
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "list", "position", "color", "olClass", "ulClass", "dlClass"]);
  let { tag = "ul" } = $$props;
  let { list = "disc" } = $$props;
  let { position = "inside" } = $$props;
  let { color = "text-gray-500 dark:text-gray-400" } = $$props;
  let { olClass = "list-decimal list-inside" } = $$props;
  let { ulClass = "max-w-md" } = $$props;
  let { dlClass = "max-w-md divide-y divide-gray-200  dark:divide-gray-700" } = $$props;
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = classNames(color, tag === "ul" ? ulClass : olClass, lists[list], positions[position], $$props.class);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.dlClass === void 0 && $$bindings.dlClass && dlClass !== void 0)
    $$bindings.dlClass(dlClass);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(classList) }], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { height = "normal" } = $$props;
  let { align = "left" } = $$props;
  let { justify = false } = $$props;
  let { italic = false } = $$props;
  let { firstupper = false } = $$props;
  let { upperClass = "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left" } = $$props;
  let { opacity = void 0 } = $$props;
  let { whitespace = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { space = void 0 } = $$props;
  let { weight = "normal" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  let colorAndopacity = color.split(" ").map((element) => element.trim()).map((element) => element + "/" + String(opacity)).join(" ");
  let classP = classNames(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.firstupper === void 0 && $$bindings.firstupper && firstupper !== void 0)
    $$bindings.firstupper(firstupper);
  if ($$props.upperClass === void 0 && $$bindings.upperClass && upperClass !== void 0)
    $$bindings.upperClass(upperClass);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.whitespace === void 0 && $$bindings.whitespace && whitespace !== void 0)
    $$bindings.whitespace(whitespace);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  return `<p${spread([escape_object($$restProps), { class: escape_attribute_value(classP) }], {})}>${slots.default ? slots.default({}) : ``}</p>`;
});
const MemoAdd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputText = "";
  let isSave = true;
  let isAsk = false;
  (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { timeStyle: "short" });
  createEventDispatcher();
  function clearInput() {
    inputText = "";
    isSave = true;
    isAsk = false;
  }
  if ($$props.clearInput === void 0 && $$bindings.clearInput && clearInput !== void 0)
    $$bindings.clearInput(clearInput);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



<form><label for="chat" class="sr-only">Your message</label>
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
              return `${isAsk ? `${validate_component(Icon, "Icon").$$render($$result, { icon: messageQuestion, width: "28" }, {}, {})}` : `${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: messageQuestionOutline,
                  width: "28"
                },
                {},
                {}
              )}`}

                <span class="sr-only">Ask GPT</span>`;
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
              return `${isSave ? `${validate_component(Icon, "Icon").$$render($$result, { icon: bookmarkAddRounded, width: "28" }, {}, {})}` : `${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: bookmarkAddOutlineRounded,
                  width: "28"
                },
                {},
                {}
              )}`}

                <span class="sr-only">Store</span>`;
            }
          }
        )}

            ${validate_component(Textarea, "Textarea").$$render(
          $$result,
          {
            class: "mx-4",
            rows: "1",
            placeholder: "Your message...",
            value: inputText
          },
          {
            value: ($$value) => {
              inputText = $$value;
              $$settled = false;
            }
          },
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
    })}</form>`;
  } while (!$$settled);
  return $$rendered;
});
const MemoList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { memos = [] } = $$props;
  let { todoList = [] } = $$props;
  let listDiv;
  let prevListLength = memos.length;
  createEventDispatcher();
  let showTodo = false;
  if ($$props.memos === void 0 && $$bindings.memos && memos !== void 0)
    $$bindings.memos(memos);
  if ($$props.todoList === void 0 && $$bindings.todoList && todoList !== void 0)
    $$bindings.todoList(todoList);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        memos.length > prevListLength;
        prevListLength = memos.length;
      }
    }
    $$rendered = `
${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { class: "w-full p-4", checked: showTodo },
      {
        checked: ($$value) => {
          showTodo = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Heading, "Heading").$$render(
            $$result,
            {
              tag: "h2",
              customSize: "text-lg font-semibold",
              class: "text-lg font-semibold text-gray-900 dark:text-white"
            },
            {},
            {
              default: () => {
                return `Show/Hide Todo List`;
              }
            }
          )}`;
        }
      }
    )}
${showTodo ? `<div class="border-2 ml-8 mr-8">${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1" }, {}, {
      default: () => {
        return `${each(todoList, (todo) => {
          return `${validate_component(Li, "Li").$$render($$result, { class: "p-2 m-2" }, {}, {
            default: () => {
              return `${escape(todo.title)}`;
            }
          })}`;
        })}`;
      }
    })}</div>
    ${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})}` : ``}



<div style="max-height: 648px; overflow:auto;"${add_attribute("this", listDiv, 0)}>${each(memos, ({ title, ask, save, id, date }) => {
      return `<div class="flex justify-end m-3 ">${validate_component(P, "P").$$render($$result, { class: "text-xs mt-8 mr-2" }, {}, {
        default: () => {
          return `${escape(date)}`;
        }
      })}

            
            
            ${validate_component(Alert, "Alert").$$render($$result, { color: ask ? "green" : "yellow" }, {}, {
        icon: () => {
          return `<span slot="icon">${save ? `${validate_component(Icon, "Icon").$$render($$result, { icon: bookmarkRounded, width: "22" }, {}, {})}` : `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: bookmarkOutlineRounded,
              width: "22"
            },
            {},
            {}
          )}`}
                </span>`;
        },
        default: () => {
          return `
                
                ${escape(title)}
            `;
        }
      })}

            
            
            
            
            
            

        </div>`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { memos = [
    {
      id: v4(),
      title: "5/3,2023 개발 시작",
      save: false,
      ask: false,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "5/4 시계 svg디자인",
      save: true,
      ask: false,
      date: "2:12 PM"
    },
    {
      id: v4(),
      title: "5/5 전체 레이아웃 디자인",
      save: false,
      ask: false,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "5/7 메모 추가, 삭제, 토글",
      save: false,
      ask: false,
      date: "2:00 PM"
    },
    {
      id: v4(),
      title: "5/10 입력 폼 초기화 기능, 라이프 사이클로 show/hide list, scroll 기능 추가",
      save: false,
      ask: false,
      date: "5:11 PM"
    },
    {
      id: v4(),
      title: "5/11 저장된 메모만 보는 기능 추가(todo)",
      save: true,
      ask: false,
      date: "6:30 PM"
    },
    {
      id: v4(),
      title: "5/12 타이머 시계 디자인 수정, 라우팅 및 store공부",
      save: true,
      ask: false,
      date: "3:15 PM"
    },
    {
      id: v4(),
      title: "5/13 타이머 함수 구현, 로딩데이터, contextAPI 공부",
      save: true,
      ask: false,
      date: "3:15 PM"
    },
    {
      id: v4(),
      title: "5/14 MVVM패턴으로 리펙토링, 로딩데이터 공부",
      save: true,
      ask: false,
      date: "2:10 PM"
    }
  ] } = $$props;
  let memoList;
  let { todoList = [] } = $$props;
  if ($$props.memos === void 0 && $$bindings.memos && memos !== void 0)
    $$bindings.memos(memos);
  if ($$props.todoList === void 0 && $$bindings.todoList && todoList !== void 0)
    $$bindings.todoList(todoList);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



${validate_component(MemoAdd, "MemoAdd").$$render(
      $$result,
      { this: memoList },
      {
        this: ($$value) => {
          memoList = $$value;
          $$settled = false;
        }
      },
      {}
    )}


${validate_component(MemoList, "MemoList").$$render($$result, { memos, todoList }, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Checkbox as C,
  Page as P
};
