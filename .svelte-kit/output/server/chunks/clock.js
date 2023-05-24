import { r as readable, d as derived } from "./index.js";
const current = readable(/* @__PURE__ */ new Date(), (set) => {
  const interval = setInterval(() => {
    set(/* @__PURE__ */ new Date());
  }, 900);
  return () => clearInterval(interval);
});
const currentTime = derived(
  current,
  ($current) => {
    const hours = $current.getHours().toString().padStart(2, "0");
    const minutes = $current.getMinutes().toString().padStart(2, "0");
    const seconds = $current.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const fullTime = `${hours % 12}:${minutes}:${seconds}`;
    const shortTime = `${hours % 12}:${minutes} ${ampm}`;
    return { hours, minutes, seconds, fullTime, shortTime };
  }
);
export {
  currentTime as c
};
