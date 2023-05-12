import { c as create_ssr_component, s as setContext, v as validate_component, g as getContext, a as subscribe, b as add_attribute, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as each, e as escape } from "../../../chunks/index2.js";
import classNames from "classnames";
import { C as ChevronUp, a as ChevronDown, B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { F as Frame, H as Hr } from "../../../chunks/Hr.js";
import { w as writable } from "../../../chunks/index.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClasses = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClasses = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClasses,
    inactiveClasses,
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass = classNames(defaultClass, "divide-y divide-gray-200 dark:divide-gray-700", "border-gray-200 dark:border-gray-700", "rounded-t-xl", $$props.class);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      class: frameClass,
      color: "none",
      border: !flush
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selected;
  let { open = false } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFulshDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0)
    $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0)
    $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0)
    $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFulshDefault === void 0 && $$bindings.textFulshDefault && textFulshDefault !== void 0)
    $$bindings.textFulshDefault(textFulshDefault);
  buttonClass = classNames(
    defaultClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeClasses || ctx.activeClasses),
    !open && (ctx.flush ? textFulshDefault : inactiveClasses || ctx.inactiveClasses),
    $$props.class
  );
  $$unsubscribe_selected();
  return `<h2 class="group"><button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``}
    ${open ? `${slots.arrowup ? slots.arrowup({}) : `${validate_component(ChevronUp, "ChevronUp").$$render($$result, {}, {}, {})}`}` : `${slots.arrowdown ? slots.arrowdown({}) : `${validate_component(ChevronDown, "ChevronDown").$$render($$result, {}, {}, {})}`}`}</button></h2>
${open ? `<div><div${add_attribute("class", ctx.flush ? paddingFlush : paddingDefault, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "striped", "hoverable", "noborder", "shadow", "color"]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: ""
  };
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0)
    $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  return `<div${add_attribute("class", classNames(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}><table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableBodyClass = void 0 } = $$props;
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0)
    $$bindings.tableBodyClass(tableBodyClass);
  return `<tbody${add_attribute("class", tableBodyClass, 0)}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0)
    $$bindings.tdClass(tdClass);
  tdClassfinal = classNames(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `<td${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tdClassfinal)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</td>`;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  trClass = classNames(!getContext("noborder") && "border-b last:border-b-0", colors[color], getContext("hoverable") && hoverColors[color], getContext("striped") && stripColors[color], $$props.class);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0)
    $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0)
    $$bindings.defaultRow(defaultRow);
  theadClassfinal = classNames(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead>`;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding"]);
  let { padding = "px-6 py-3" } = $$props;
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  return `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>`;
});
const startTime_1 = 8;
const TenRecord = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const columns = [10, 20, 30, 40, 50, 60];
  const rows = Array(24).fill(0).map((_, i) => (i + startTime_1) % 12 + 1);
  let table = Array.from(Array(rows.length), () => Array(columns.length).fill(false));
  console.log(table);
  table[1][1] = true;
  table[1][2] = true;
  table[1][3] = true;
  table[1][4] = true;
  table[1][5] = true;
  table[2][0] = true;
  table[2][1] = true;
  table[2][2] = true;
  return `
<div class="w-full">${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, { class: "border-b-2 border-gray-300" }, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
            ${each(Array(6), (_, index) => {
            return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "border-l-2 border-gray-200" }, {}, {
              default: () => {
                return `${escape(columns[index])}`;
              }
            })}`;
          })}`;
        }
      })}

        ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
        default: () => {
          return `${each(Array(24), (_, index) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                let rowIdx = index;
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(rows[rowIdx])}`;
                  }
                })}
                    ${each(Array(6), (_2, index2) => {
                  return `${table[rowIdx][index2] === true ? `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "bg-purple-100 border-l-2 border-gray-200"
                    },
                    {},
                    {}
                  )}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "border-l-2 border-gray-200" }, {}, {})}`}`;
                })}
                `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
const MemoRecord = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [true, false, true];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex-col w-full m-4"><div class="flex justify-end m-2 space-x-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "lg",
        gradient: true,
        color: "blue"
      },
      {},
      {}
    )}
        ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "lg",
        gradient: true,
        color: "green"
      },
      {},
      {}
    )}
        ${validate_component(Button, "Button").$$render($$result, { size: "lg", gradient: true, color: "red" }, {}, {})}</div>
    ${validate_component(Accordion, "Accordion").$$render($$result, { multiple: true }, {}, {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[0] },
          {
            open: ($$value) => {
              items[0] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<span slot="header">Todo</span>`;
            },
            default: () => {
              return `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
            }
          }
        )}
        ${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[1] },
          {
            open: ($$value) => {
              items[1] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<div slot="header">Done</div>`;
            },
            default: () => {
              return `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>`;
            }
          }
        )}
        ${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[2] },
          {
            open: ($$value) => {
              items[2] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<div slot="header">Memo</div>`;
            },
            default: () => {
              return `<p>Something more</p>`;
            }
          }
        )}`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentDate = /* @__PURE__ */ new Date();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDay();
  return `<div class="flex-col m-4 w-full h-full">
    ${validate_component(Hr, "Hr").$$render(
    $$result,
    {
      class: "my-4 mx-auto md:my-8  ",
      height: "h-1"
    },
    {},
    {
      default: () => {
        return `${escape(month)}월 ${escape(day)}일`;
      }
    }
  )}


    <div class="flex gap-2 mb-4 justify-center ">${validate_component(Button, "Button").$$render($$result, { outline: true, color: "dark" }, {}, {
    default: () => {
      return `M`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "dark" }, {}, {
    default: () => {
      return `T`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "dark" }, {}, {
    default: () => {
      return `W`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "dark" }, {}, {
    default: () => {
      return `T`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "dark" }, {}, {
    default: () => {
      return `F`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "blue" }, {}, {
    default: () => {
      return `S`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { outline: true, color: "red" }, {}, {
    default: () => {
      return `S`;
    }
  })}</div>


    <div class="flex">${validate_component(TenRecord, "TenRecord").$$render($$result, { class: "w-1/2" }, {}, {})}
        ${validate_component(MemoRecord, "MemoRecord").$$render($$result, { class: "w-1/2" }, {}, {})}</div></div>`;
});
export {
  Page as default
};
