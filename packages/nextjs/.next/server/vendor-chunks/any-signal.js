/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/any-signal";
exports.ids = ["vendor-chunks/any-signal"];
exports.modules = {

/***/ "(rsc)/../../node_modules/any-signal/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/any-signal/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/**\n * Takes an array of AbortSignals and returns a single signal.\n * If any signals are aborted, the returned signal will be aborted.\n * @param {Array<AbortSignal>} signals\n * @returns {AbortSignal}\n */\nfunction anySignal (signals) {\n  const controller = new globalThis.AbortController()\n\n  function onAbort () {\n    controller.abort()\n\n    for (const signal of signals) {\n      if (!signal || !signal.removeEventListener) continue\n      signal.removeEventListener('abort', onAbort)\n    }\n  }\n\n  for (const signal of signals) {\n    if (!signal || !signal.addEventListener) continue\n    if (signal.aborted) {\n      onAbort()\n      break\n    }\n    signal.addEventListener('abort', onAbort)\n  }\n\n  return controller.signal\n}\n\nmodule.exports = anySignal\nmodule.exports.anySignal = anySignal\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL2FueS1zaWduYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNlLTIvbmV4dGpzLy4uLy4uL25vZGVfbW9kdWxlcy9hbnktc2lnbmFsL2luZGV4LmpzP2YxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUYWtlcyBhbiBhcnJheSBvZiBBYm9ydFNpZ25hbHMgYW5kIHJldHVybnMgYSBzaW5nbGUgc2lnbmFsLlxuICogSWYgYW55IHNpZ25hbHMgYXJlIGFib3J0ZWQsIHRoZSByZXR1cm5lZCBzaWduYWwgd2lsbCBiZSBhYm9ydGVkLlxuICogQHBhcmFtIHtBcnJheTxBYm9ydFNpZ25hbD59IHNpZ25hbHNcbiAqIEByZXR1cm5zIHtBYm9ydFNpZ25hbH1cbiAqL1xuZnVuY3Rpb24gYW55U2lnbmFsIChzaWduYWxzKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgZ2xvYmFsVGhpcy5BYm9ydENvbnRyb2xsZXIoKVxuXG4gIGZ1bmN0aW9uIG9uQWJvcnQgKCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuXG4gICAgZm9yIChjb25zdCBzaWduYWwgb2Ygc2lnbmFscykge1xuICAgICAgaWYgKCFzaWduYWwgfHwgIXNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKSBjb250aW51ZVxuICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25BYm9ydClcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IHNpZ25hbCBvZiBzaWduYWxzKSB7XG4gICAgaWYgKCFzaWduYWwgfHwgIXNpZ25hbC5hZGRFdmVudExpc3RlbmVyKSBjb250aW51ZVxuICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgb25BYm9ydCgpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkFib3J0KVxuICB9XG5cbiAgcmV0dXJuIGNvbnRyb2xsZXIuc2lnbmFsXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYW55U2lnbmFsXG5tb2R1bGUuZXhwb3J0cy5hbnlTaWduYWwgPSBhbnlTaWduYWxcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/any-signal/index.js\n");

/***/ })

};
;