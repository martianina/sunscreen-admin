"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/blob-to-it";
exports.ids = ["vendor-chunks/blob-to-it"];
exports.modules = {

/***/ "(rsc)/../../node_modules/blob-to-it/dist/src/index.js":
/*!*******************************************************!*\
  !*** ../../node_modules/blob-to-it/dist/src/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ blobToIt)\n/* harmony export */ });\n/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-readablestream-to-it */ \"(rsc)/../../node_modules/browser-readablestream-to-it/dist/src/index.js\");\n/**\n * @packageDocumentation\n *\n * Allows reading Blob contents as an async iterator.\n *\n * @example\n *\n * ```javascript\n * import toIt from 'blob-to-it'\n * import all from 'it-all'\n *\n * const content = [ Uint8Array.from([0, 1, 2, 3, 4]) ]\n * const blob = new Blob(content)\n * const arr = await all(toIt(blob))\n *\n * console.info(arr) // [ [ 0, 1, 2, 3, 4 ] ]\n * ```\n */\n\nfunction blobToIt(blob) {\n    if (typeof blob.stream === 'function') {\n        return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blob.stream());\n    }\n    // firefox < 69 does not support blob.stream()\n    // @ts-expect-error - response.body is optional, but in practice it's a stream.\n    return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Response(blob).body);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL2Jsb2ItdG8taXQvZGlzdC9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUU7QUFDdEQ7QUFDZjtBQUNBLGVBQWUsd0VBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0VBQXlCO0FBQ3BDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvLi4vLi4vbm9kZV9tb2R1bGVzL2Jsb2ItdG8taXQvZGlzdC9zcmMvaW5kZXguanM/OWFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICpcbiAqIEFsbG93cyByZWFkaW5nIEJsb2IgY29udGVudHMgYXMgYW4gYXN5bmMgaXRlcmF0b3IuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgdG9JdCBmcm9tICdibG9iLXRvLWl0J1xuICogaW1wb3J0IGFsbCBmcm9tICdpdC1hbGwnXG4gKlxuICogY29uc3QgY29udGVudCA9IFsgVWludDhBcnJheS5mcm9tKFswLCAxLCAyLCAzLCA0XSkgXVxuICogY29uc3QgYmxvYiA9IG5ldyBCbG9iKGNvbnRlbnQpXG4gKiBjb25zdCBhcnIgPSBhd2FpdCBhbGwodG9JdChibG9iKSlcbiAqXG4gKiBjb25zb2xlLmluZm8oYXJyKSAvLyBbIFsgMCwgMSwgMiwgMywgNCBdIF1cbiAqIGBgYFxuICovXG5pbXBvcnQgYnJvd3NlclJlYWRhYmxlU3RyZWFtVG9JdCBmcm9tICdicm93c2VyLXJlYWRhYmxlc3RyZWFtLXRvLWl0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2JUb0l0KGJsb2IpIHtcbiAgICBpZiAodHlwZW9mIGJsb2Iuc3RyZWFtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBicm93c2VyUmVhZGFibGVTdHJlYW1Ub0l0KGJsb2Iuc3RyZWFtKCkpO1xuICAgIH1cbiAgICAvLyBmaXJlZm94IDwgNjkgZG9lcyBub3Qgc3VwcG9ydCBibG9iLnN0cmVhbSgpXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlc3BvbnNlLmJvZHkgaXMgb3B0aW9uYWwsIGJ1dCBpbiBwcmFjdGljZSBpdCdzIGEgc3RyZWFtLlxuICAgIHJldHVybiBicm93c2VyUmVhZGFibGVTdHJlYW1Ub0l0KG5ldyBSZXNwb25zZShibG9iKS5ib2R5KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/blob-to-it/dist/src/index.js\n");

/***/ })

};
;