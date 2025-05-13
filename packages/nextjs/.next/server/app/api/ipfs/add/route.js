"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/ipfs/add/route";
exports.ids = ["app/api/ipfs/add/route"];
exports.modules = {

/***/ "ipfs-utils/src/env.js":
/*!****************************************!*\
  !*** external "ipfs-utils/src/env.js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("ipfs-utils/src/env.js");

/***/ }),

/***/ "ipfs-utils/src/files/glob-source.js":
/*!******************************************************!*\
  !*** external "ipfs-utils/src/files/glob-source.js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("ipfs-utils/src/files/glob-source.js");

/***/ }),

/***/ "ipfs-utils/src/files/url-source.js":
/*!*****************************************************!*\
  !*** external "ipfs-utils/src/files/url-source.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("ipfs-utils/src/files/url-source.js");

/***/ }),

/***/ "ipfs-utils/src/http.js":
/*!*****************************************!*\
  !*** external "ipfs-utils/src/http.js" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("ipfs-utils/src/http.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fadd%2Froute&page=%2Fapi%2Fipfs%2Fadd%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fadd%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fadd%2Froute&page=%2Fapi%2Fipfs%2Fadd%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fadd%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ninakilbride_sunscreen_admin_packages_nextjs_app_api_ipfs_add_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/ipfs/add/route.ts */ \"(rsc)/./app/api/ipfs/add/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ipfs/add/route\",\n        pathname: \"/api/ipfs/add\",\n        filename: \"route\",\n        bundlePath: \"app/api/ipfs/add/route\"\n    },\n    resolvedPagePath: \"/Users/ninakilbride/sunscreen-admin/packages/nextjs/app/api/ipfs/add/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ninakilbride_sunscreen_admin_packages_nextjs_app_api_ipfs_add_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/ipfs/add/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZpcGZzJTJGYWRkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZpcGZzJTJGYWRkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGaXBmcyUyRmFkZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm5pbmFraWxicmlkZSUyRnN1bnNjcmVlbi1hZG1pbiUyRnBhY2thZ2VzJTJGbmV4dGpzJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm5pbmFraWxicmlkZSUyRnN1bnNjcmVlbi1hZG1pbiUyRnBhY2thZ2VzJTJGbmV4dGpzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2QjtBQUMxRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL0BzZS0yL25leHRqcy8/NjUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbmluYWtpbGJyaWRlL3N1bnNjcmVlbi1hZG1pbi9wYWNrYWdlcy9uZXh0anMvYXBwL2FwaS9pcGZzL2FkZC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaXBmcy9hZGQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9pcGZzL2FkZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvaXBmcy9hZGQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbmluYWtpbGJyaWRlL3N1bnNjcmVlbi1hZG1pbi9wYWNrYWdlcy9uZXh0anMvYXBwL2FwaS9pcGZzL2FkZC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvaXBmcy9hZGQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fadd%2Froute&page=%2Fapi%2Fipfs%2Fadd%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fadd%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/ipfs/add/route.ts":
/*!***********************************!*\
  !*** ./app/api/ipfs/add/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_simpleNFT_ipfs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~~/utils/simpleNFT/ipfs */ \"(rsc)/./utils/simpleNFT/ipfs.ts\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"149d4a37aa7ed5d7ecf8112db20052848894763f\":\"POST\"} */ \n\n\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const res = await _utils_simpleNFT_ipfs__WEBPACK_IMPORTED_MODULE_2__.ipfsClient.add(JSON.stringify(body));\n        return Response.json(res);\n    } catch (error) {\n        console.log(\"Error adding to ipfs\", error);\n        return Response.json({\n            error: \"Error adding to ipfs\"\n        });\n    }\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__.ensureServerEntryExports)([\n    POST\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(\"149d4a37aa7ed5d7ecf8112db20052848894763f\", POST);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2lwZnMvYWRkL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXFEO0FBRTlDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELFFBQVFFLElBQUk7UUFDL0IsTUFBTUMsTUFBTSxNQUFNTCw2REFBVUEsQ0FBQ00sR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNMO1FBQ2hELE9BQU9NLFNBQVNMLElBQUksQ0FBQ0M7SUFDdkIsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JGO1FBQ3BDLE9BQU9ELFNBQVNMLElBQUksQ0FBQztZQUFFTSxPQUFPO1FBQXVCO0lBQ3ZEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvLi9hcHAvYXBpL2lwZnMvYWRkL3JvdXRlLnRzPzg5MWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGlwZnNDbGllbnQgfSBmcm9tIFwifn4vdXRpbHMvc2ltcGxlTkZUL2lwZnNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBpcGZzQ2xpZW50LmFkZChKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocmVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGFkZGluZyB0byBpcGZzXCIsIGVycm9yKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkVycm9yIGFkZGluZyB0byBpcGZzXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpcGZzQ2xpZW50IiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsInJlcyIsImFkZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ipfs/add/route.ts\n");

/***/ }),

/***/ "(rsc)/./utils/simpleNFT/ipfs.ts":
/*!*********************************!*\
  !*** ./utils/simpleNFT/ipfs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNFTMetadataFromIPFS: () => (/* binding */ getNFTMetadataFromIPFS),\n/* harmony export */   ipfsClient: () => (/* binding */ ipfsClient)\n/* harmony export */ });\n/* harmony import */ var kubo_rpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kubo-rpc-client */ \"(rsc)/./node_modules/kubo-rpc-client/src/index.js\");\n\nconst PROJECT_ID = \"2GajDLTC6y04qsYsoDRq9nGmWwK\";\nconst PROJECT_SECRET = \"48c62c6b3f82d2ecfa2cbe4c90f97037\";\nconst PROJECT_ID_SECRECT = `${PROJECT_ID}:${PROJECT_SECRET}`;\nconst ipfsClient = (0,kubo_rpc_client__WEBPACK_IMPORTED_MODULE_0__.create)({\n    host: \"ipfs.infura.io\",\n    port: 5001,\n    protocol: \"https\",\n    headers: {\n        Authorization: `Basic ${Buffer.from(PROJECT_ID_SECRECT).toString(\"base64\")}`\n    }\n});\nasync function getNFTMetadataFromIPFS(ipfsHash) {\n    for await (const file of ipfsClient.get(ipfsHash)){\n        // The file is of type unit8array so we need to convert it to string\n        const content = new TextDecoder().decode(file);\n        // Remove any leading/trailing whitespace\n        const trimmedContent = content.trim();\n        // Find the start and end index of the JSON object\n        const startIndex = trimmedContent.indexOf(\"{\");\n        const endIndex = trimmedContent.lastIndexOf(\"}\") + 1;\n        // Extract the JSON object string\n        const jsonObjectString = trimmedContent.slice(startIndex, endIndex);\n        try {\n            const jsonObject = JSON.parse(jsonObjectString);\n            return jsonObject;\n        } catch (error) {\n            console.log(\"Error parsing JSON:\", error);\n            return undefined;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9zaW1wbGVORlQvaXBmcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsTUFBTUMsYUFBYTtBQUNuQixNQUFNQyxpQkFBaUI7QUFDdkIsTUFBTUMscUJBQXFCLENBQUMsRUFBRUYsV0FBVyxDQUFDLEVBQUVDLGVBQWUsQ0FBQztBQUVyRCxNQUFNRSxhQUFhSix1REFBTUEsQ0FBQztJQUMvQkssTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsU0FBUztRQUNQQyxlQUFlLENBQUMsTUFBTSxFQUFFQyxPQUFPQyxJQUFJLENBQUNSLG9CQUFvQlMsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUM5RTtBQUNGLEdBQUc7QUFFSSxlQUFlQyx1QkFBdUJDLFFBQWdCO0lBQzNELFdBQVcsTUFBTUMsUUFBUVgsV0FBV1ksR0FBRyxDQUFDRixVQUFXO1FBQ2pELG9FQUFvRTtRQUNwRSxNQUFNRyxVQUFVLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0o7UUFDekMseUNBQXlDO1FBQ3pDLE1BQU1LLGlCQUFpQkgsUUFBUUksSUFBSTtRQUNuQyxrREFBa0Q7UUFDbEQsTUFBTUMsYUFBYUYsZUFBZUcsT0FBTyxDQUFDO1FBQzFDLE1BQU1DLFdBQVdKLGVBQWVLLFdBQVcsQ0FBQyxPQUFPO1FBQ25ELGlDQUFpQztRQUNqQyxNQUFNQyxtQkFBbUJOLGVBQWVPLEtBQUssQ0FBQ0wsWUFBWUU7UUFDMUQsSUFBSTtZQUNGLE1BQU1JLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ0o7WUFDOUIsT0FBT0U7UUFDVCxFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7WUFDbkMsT0FBT0c7UUFDVDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvLi91dGlscy9zaW1wbGVORlQvaXBmcy50cz80ZTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJrdWJvLXJwYy1jbGllbnRcIjtcblxuY29uc3QgUFJPSkVDVF9JRCA9IFwiMkdhakRMVEM2eTA0cXNZc29EUnE5bkdtV3dLXCI7XG5jb25zdCBQUk9KRUNUX1NFQ1JFVCA9IFwiNDhjNjJjNmIzZjgyZDJlY2ZhMmNiZTRjOTBmOTcwMzdcIjtcbmNvbnN0IFBST0pFQ1RfSURfU0VDUkVDVCA9IGAke1BST0pFQ1RfSUR9OiR7UFJPSkVDVF9TRUNSRVR9YDtcblxuZXhwb3J0IGNvbnN0IGlwZnNDbGllbnQgPSBjcmVhdGUoe1xuICBob3N0OiBcImlwZnMuaW5mdXJhLmlvXCIsXG4gIHBvcnQ6IDUwMDEsXG4gIHByb3RvY29sOiBcImh0dHBzXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShQUk9KRUNUX0lEX1NFQ1JFQ1QpLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5GVE1ldGFkYXRhRnJvbUlQRlMoaXBmc0hhc2g6IHN0cmluZykge1xuICBmb3IgYXdhaXQgKGNvbnN0IGZpbGUgb2YgaXBmc0NsaWVudC5nZXQoaXBmc0hhc2gpKSB7XG4gICAgLy8gVGhlIGZpbGUgaXMgb2YgdHlwZSB1bml0OGFycmF5IHNvIHdlIG5lZWQgdG8gY29udmVydCBpdCB0byBzdHJpbmdcbiAgICBjb25zdCBjb250ZW50ID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGZpbGUpO1xuICAgIC8vIFJlbW92ZSBhbnkgbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgY29uc3QgdHJpbW1lZENvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcbiAgICAvLyBGaW5kIHRoZSBzdGFydCBhbmQgZW5kIGluZGV4IG9mIHRoZSBKU09OIG9iamVjdFxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0cmltbWVkQ29udGVudC5pbmRleE9mKFwie1wiKTtcbiAgICBjb25zdCBlbmRJbmRleCA9IHRyaW1tZWRDb250ZW50Lmxhc3RJbmRleE9mKFwifVwiKSArIDE7XG4gICAgLy8gRXh0cmFjdCB0aGUgSlNPTiBvYmplY3Qgc3RyaW5nXG4gICAgY29uc3QganNvbk9iamVjdFN0cmluZyA9IHRyaW1tZWRDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbk9iamVjdCA9IEpTT04ucGFyc2UoanNvbk9iamVjdFN0cmluZyk7XG4gICAgICByZXR1cm4ganNvbk9iamVjdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBwYXJzaW5nIEpTT046XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlIiwiUFJPSkVDVF9JRCIsIlBST0pFQ1RfU0VDUkVUIiwiUFJPSkVDVF9JRF9TRUNSRUNUIiwiaXBmc0NsaWVudCIsImhvc3QiLCJwb3J0IiwicHJvdG9jb2wiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImdldE5GVE1ldGFkYXRhRnJvbUlQRlMiLCJpcGZzSGFzaCIsImZpbGUiLCJnZXQiLCJjb250ZW50IiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJ0cmltbWVkQ29udGVudCIsInRyaW0iLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsImVuZEluZGV4IiwibGFzdEluZGV4T2YiLCJqc29uT2JqZWN0U3RyaW5nIiwic2xpY2UiLCJqc29uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/simpleNFT/ipfs.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/debug","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-flag","vendor-chunks/kubo-rpc-client","vendor-chunks/@ipld","vendor-chunks/ipfs-core-utils","vendor-chunks/cborg","vendor-chunks/@multiformats","vendor-chunks/uint8arrays","vendor-chunks/protobufjs","vendor-chunks/multiformats","vendor-chunks/ipfs-unixfs","vendor-chunks/@protobufjs","vendor-chunks/@chainsafe","vendor-chunks/@libp2p","vendor-chunks/dag-jose","vendor-chunks/uint8-varint","vendor-chunks/merge-options","vendor-chunks/it-to-stream","vendor-chunks/fast-fifo","vendor-chunks/browser-readablestream-to-it","vendor-chunks/varint","vendor-chunks/parse-duration","vendor-chunks/err-code","vendor-chunks/it-peekable","vendor-chunks/blob-to-it","vendor-chunks/p-fifo","vendor-chunks/any-signal","vendor-chunks/get-iterator","vendor-chunks/stream-to-it","vendor-chunks/it-first","vendor-chunks/it-last","vendor-chunks/it-map","vendor-chunks/is-plain-obj","vendor-chunks/p-defer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fadd%2Froute&page=%2Fapi%2Fipfs%2Fadd%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fadd%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();