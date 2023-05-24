import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, a as subscribe, k as createEventDispatcher, v as validate_component, b as add_attribute, j as each, e as escape } from "../../../../chunks/index2.js";
import { c as currentTime } from "../../../../chunks/clock.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import messageQuestion from "@iconify/icons-mdi/message-question.js";
import messageQuestionOutline from "@iconify/icons-mdi/message-question-outline.js";
import bookmarkAddRounded from "@iconify/icons-material-symbols/bookmark-add-rounded.js";
import bookmarkAddOutlineRounded from "@iconify/icons-material-symbols/bookmark-add-outline-rounded.js";
import classNames from "classnames";
import { A as Alert, T as Textarea } from "../../../../chunks/Textarea.js";
import { T as ToolbarButton } from "../../../../chunks/CloseButton.js";
/* empty css                                                          */import bookmarkRounded from "@iconify/icons-material-symbols/bookmark-rounded.js";
import bookmarkOutlineRounded from "@iconify/icons-material-symbols/bookmark-outline-rounded.js";
import deleteOutlineRounded from "@iconify/icons-material-symbols/delete-outline-rounded.js";
import { v4 } from "uuid";
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
  let $$unsubscribe_currentTime;
  $$unsubscribe_currentTime = subscribe(currentTime, (value) => value);
  let inputText = "";
  let isSave = true;
  let isAsk = false;
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
  $$unsubscribe_currentTime();
  return $$rendered;
});
const MemoList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fullHeight.svelte-kqnsfo{height:calc(100% - 160px)}.fitHeight.svelte-kqnsfo{height:calc(100% - 550px)}",
  map: null
};
const MemoList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { memos = [] } = $$props;
  let { todoList = [] } = $$props;
  let listDiv;
  let prevListLength = memos.length;
  createEventDispatcher();
  let { showTimer } = $$props;
  if ($$props.memos === void 0 && $$bindings.memos && memos !== void 0)
    $$bindings.memos(memos);
  if ($$props.todoList === void 0 && $$bindings.todoList && todoList !== void 0)
    $$bindings.todoList(todoList);
  if ($$props.showTimer === void 0 && $$bindings.showTimer && showTimer !== void 0)
    $$bindings.showTimer(showTimer);
  $$result.css.add(css);
  {
    {
      memos.length > prevListLength;
      prevListLength = memos.length;
    }
  }
  return `<div class="${[
    "w-[610px] overflow-y-auto mt-4 svelte-kqnsfo",
    (!showTimer ? "fullHeight" : "") + " " + (showTimer ? "fitHeight" : "")
  ].join(" ").trim()}"${add_attribute("this", listDiv, 0)}>



















    
    <div class="">${each(memos, ({ title, ask, save, id, date }) => {
    return `<div class="flex justify-end items-end mb-3">${validate_component(P, "P").$$render($$result, { class: "text-xs mt-8 mr-2" }, {}, {
      default: () => {
        return `${escape(date)}`;
      }
    })}

                
                
                ${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        color: ask ? "green" : "yellow",
        class: "max-w-[calc(100%-155px)] "
      },
      {},
      {
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
                    
                    <span class="break-words">${escape(title)}</span>

                `;
        }
      }
    )}

                
                ${validate_component(ToolbarButton, "ToolbarButton").$$render(
      $$result,
      {
        type: "submit",
        color: "gray",
        class: "rounded-full"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render($$result, { icon: deleteOutlineRounded, width: "22" }, {}, {})}
                    <span class="sr-only">Delete message</span>
                `;
        }
      }
    )}

            </div>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { memos = [
    {
      id: v4(),
      title: '관람 포인트 "메인-[타이머]"',
      save: false,
      ask: true,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "메모추가! 메모 작성 칸에서 좌측의 아이콘을 누른 상태에 따라 메세지 색과 북마크 표시가 변합니다.",
      save: false,
      ask: false,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "투두리스트! 북마크한 메모만 보여줍니다. 작성된 메모의 북마크 버튼과 삭제버튼을 눌러보세요.",
      save: true,
      ask: false,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "토글 타이머! 메모를 적는것에 집중하고 싶을 경우 타이머를 가려보세요.",
      save: true,
      ask: false,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "사이드바! [타이머]를 가려 각 페이지를 전체 화면에서 볼 수 있습니다.",
      save: false,
      ask: false,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: '관람 포인트 "시계 아이콘 -[데일리 기록]"',
      save: true,
      ask: true,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "파랑초록빨강 버튼! 오늘의 기록을 어떤식으로 볼지 선택할 수 있습니다.",
      save: false,
      ask: false,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: '관람 포인트 "폴더 아이콘 -[작업 관리]"',
      save: true,
      ask: true,
      date: "3:11 PM"
    },
    {
      id: v4(),
      title: "메모 옆 그라데이션 버튼! 작업이 적힌 사이드 바를 가려 메모만 볼 수 있습니다. ",
      save: false,
      ask: false,
      date: "3:11 PM"
    }
  ] } = $$props;
  let memoList;
  let { todoList = [] } = $$props;
  let { showTimer } = $$props;
  if ($$props.memos === void 0 && $$bindings.memos && memos !== void 0)
    $$bindings.memos(memos);
  if ($$props.todoList === void 0 && $$bindings.todoList && todoList !== void 0)
    $$bindings.todoList(todoList);
  if ($$props.showTimer === void 0 && $$bindings.showTimer && showTimer !== void 0)
    $$bindings.showTimer(showTimer);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


${showTimer ? `${validate_component(MemoAdd, "MemoAdd").$$render(
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

    ${validate_component(MemoList, "MemoList").$$render(
      $$result,
      {
        memos,
        todoList,
        class: "h-2/3",
        showTimer
      },
      {
        showTimer: ($$value) => {
          showTimer = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(MemoList, "MemoList").$$render(
      $$result,
      {
        memos,
        todoList,
        class: "h-2/3",
        showTimer
      },
      {
        showTimer: ($$value) => {
          showTimer = $$value;
          $$settled = false;
        }
      },
      {}
    )}
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
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
