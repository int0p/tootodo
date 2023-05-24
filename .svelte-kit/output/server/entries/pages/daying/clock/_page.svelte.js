import { c as create_ssr_component, d as compute_rest_props, k as createEventDispatcher, f as spread, i as escape_attribute_value, h as escape_object, l as is_void, v as validate_component, a as subscribe, j as each, e as escape, b as add_attribute, o as onDestroy } from "../../../../chunks/index2.js";
import classNames from "classnames";
/* empty css                                                          */import { H as Hr } from "../../../../chunks/Hr.js";
import { c as currentTime } from "../../../../chunks/clock.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import playCircle from "@iconify/icons-bi/play-circle.js";
import "@iconify/icons-bi/pause-circle.js";
import "@iconify/icons-bi/pause-circle-fill.js";
import "@iconify/icons-bi/stop-circle.js";
import timerReset from "@iconify/icons-lucide/timer-reset.js";
import repeatRounded from "@iconify/icons-material-symbols/repeat-rounded.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { H as Heading } from "../../../../chunks/Heading.js";
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
  const dispatch = createEventDispatcher();
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
const clock_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: "svg{height:100%}.clock-face.svelte-qw8sd9{stroke:#333;fill:white}.minor.svelte-qw8sd9{stroke:#999;stroke-width:0.5}.major.svelte-qw8sd9{stroke:#333;stroke-width:1}.hour.svelte-qw8sd9{stroke:#333}.minute.svelte-qw8sd9{stroke:#666}.second.svelte-qw8sd9,.second-counterweight.svelte-qw8sd9{stroke:rgb(180,0,0)}.second-counterweight.svelte-qw8sd9{stroke-width:3}",
  map: null
};
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hours;
  let minutes;
  let seconds;
  let fullTime;
  let $currentTime, $$unsubscribe_currentTime;
  $$unsubscribe_currentTime = subscribe(currentTime, (value) => $currentTime = value);
  $$result.css.add(css$2);
  hours = $currentTime.hours;
  minutes = $currentTime.minutes;
  seconds = $currentTime.seconds;
  fullTime = $currentTime.fullTime;
  $$unsubscribe_currentTime();
  return `<svg viewBox="-50 -40 100 100"><circle class="clock-face svelte-qw8sd9" r="38"></circle>${each([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], (minute) => {
    return `<line class="major svelte-qw8sd9" y1="32" y2="38" transform="${"rotate(" + escape(30 * minute, true) + ")"}"></line>

        ${each([1, 2, 3, 4], (offset) => {
      return `<line class="minor svelte-qw8sd9" y1="33" y2="38" transform="${"rotate(" + escape(6 * (minute + offset), true) + ")"}"></line>`;
    })}`;
  })}<line class="hour svelte-qw8sd9" y1="2" y2="-15" transform="${"rotate(" + escape(30 * hours + minutes / 2, true) + ")"}"></line><line class="minute svelte-qw8sd9" y1="4" y2="-23" transform="${"rotate(" + escape(6 * minutes + seconds / 10, true) + ")"}"></line><g transform="${"rotate(" + escape(6 * seconds, true) + ")"}"><line class="second svelte-qw8sd9" y1="10" y2="-30"></line><line class="second-counterweight svelte-qw8sd9" y1="10" y2="2"></line></g><text x="-32" y="60" font-size="18">${escape(fullTime)}</text></svg>`;
});
const clock_svelte_svelte_type_style_lang = "";
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
  return `<div class=""><svg viewBox="${"0 0 " + escape(vw, true) + " " + escape(vh, true)}"><circle${add_attribute("cx", cx, 0)}${add_attribute("cy", cy, 0)}${add_attribute("r", r, 0)} stroke="black" fill="transparent"></circle><g transform="translate(50,50)">${validate_component(Icon, "Icon").$$render($$result, { icon: playCircle, width: "30" }, {}, {})}</g><g transform="translate(5,110)">${validate_component(Icon, "Icon").$$render($$result, { icon: timerReset }, {}, {})}</g><g transform="translate(110,110)">${validate_component(Icon, "Icon").$$render($$result, { icon: repeatRounded }, {}, {})}</g>${each(lines, (line) => {
    return `<line${add_attribute("x1", getLineCoordinates(line).x1, 0)}${add_attribute("y1", getLineCoordinates(line).y1, 0)}${add_attribute("x2", getLineCoordinates(line).x2, 0)}${add_attribute("y2", getLineCoordinates(line).y2, 0)} stroke="black"${add_attribute("stroke-width", line.stroke_width === "thick" ? 1.5 : 0.5, 0)}></line>
            <text${add_attribute("x", getTextCoordinates(line).x, 0)}${add_attribute("y", getTextCoordinates(line).y, 0)} font-size="8">${escape(line.text)}</text>`;
  })}</svg></div>`;
});
const pomodoro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".align-col.svelte-1i5q31a{display:flex;flex-direction:column;justify-content:center;align-items:center}.timeController.svelte-1i5q31a{display:flex;flex-direction:column;justify-content:flex-end;align-items:stretch}.clock.svelte-1i5q31a{color:rgb(50, 50, 50);width:360px;height:250px;padding:10px;border-radius:20%;border:10px solid rgb(55, 55, 55);box-shadow:inset 0 0 3px 3px rgba(50, 50, 50, 0.3), inset 0 0 1px 2px rgba(50, 50, 50, 0.2);margin:0 20px}",
  map: null
};
const Pomodoro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nowString;
  let $currentTime, $$unsubscribe_currentTime;
  $$unsubscribe_currentTime = subscribe(currentTime, (value) => $currentTime = value);
  let timeLeft = 1500;
  let timer = null;
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }
  onDestroy(() => {
    stopTimer();
  });
  $$result.css.add(css$1);
  nowString = $currentTime.fullTime;
  $$unsubscribe_currentTime();
  return `<div class="flex w-full items-center justify-center"><div class="align-col w-[400px] svelte-1i5q31a"><div class="clock flex svelte-1i5q31a">${validate_component(Clock, "CurrentClock").$$render($$result, {}, {}, {})}
            ${validate_component(Clock_design, "ClockDesign").$$render($$result, {}, {}, {})}</div>


        <div class="flex space-x-2 mt-4 justify-evenly w-full">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      large: true,
      color: "pink",
      class: "w-[130px] ml-5"
    },
    {},
    {
      default: () => {
        return `${escape(Math.floor(timeLeft / 60))}:${escape(("0" + timeLeft % 60).slice(-2))}`;
      }
    }
  )}
            <div class="flex-col w-[200px]"><p><span class="text-pink-800">session:</span> work </p>
                <p><span class="text-pink-800">goal:</span> ${escape(nowString)} - ${escape(nowString)}</p></div></div></div>

    <div class="flex-col timeController w-[110px] h-[340px]  svelte-1i5q31a">${each(Array(6), (_, i) => {
    return `<div class="flex mb-3 border-2 rounded-lg shadow p-1 w-full">${validate_component(Badge, "Badge").$$render($$result, { large: true }, {}, {
      default: () => {
        return `-`;
      }
    })}
                ${validate_component(Heading, "Heading").$$render($$result, { tag: "h5", class: "pr-2 pl-2" }, {}, {
      default: () => {
        return `${escape((i + 1) * 10)}`;
      }
    })}
                ${validate_component(Badge, "Badge").$$render($$result, { color: "red", large: true }, {}, {
      default: () => {
        return `+`;
      }
    })}
            </div>`;
  })}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".timer-container.svelte-ixxy13{display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="pr-8 pl-8 pb-4 w-full">
    <div class="timer-container  svelte-ixxy13">${validate_component(Hr, "Hr").$$render($$result, { width: "w-full mb-4", height: "h-1" }, {}, {
    default: () => {
      return `<div class="text-xl font-semibold text-gray-900 dark:text-white px-6">Too -&gt; do</div>`;
    }
  })}
        <div class="flex w-full">${validate_component(Pomodoro, "PomoTimer").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
export {
  Page as default
};
