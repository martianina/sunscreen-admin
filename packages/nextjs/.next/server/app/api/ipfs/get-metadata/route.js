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
exports.id = "app/api/ipfs/get-metadata/route";
exports.ids = ["app/api/ipfs/get-metadata/route"];
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

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fget-metadata%2Froute&page=%2Fapi%2Fipfs%2Fget-metadata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fget-metadata%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fget-metadata%2Froute&page=%2Fapi%2Fipfs%2Fget-metadata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fget-metadata%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ninakilbride_sunscreen_admin_packages_nextjs_app_api_ipfs_get_metadata_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/ipfs/get-metadata/route.ts */ \"(rsc)/./app/api/ipfs/get-metadata/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ipfs/get-metadata/route\",\n        pathname: \"/api/ipfs/get-metadata\",\n        filename: \"route\",\n        bundlePath: \"app/api/ipfs/get-metadata/route\"\n    },\n    resolvedPagePath: \"/Users/ninakilbride/sunscreen-admin/packages/nextjs/app/api/ipfs/get-metadata/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ninakilbride_sunscreen_admin_packages_nextjs_app_api_ipfs_get_metadata_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/ipfs/get-metadata/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGaXBmcyUyRmdldC1tZXRhZGF0YSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaXBmcyUyRmdldC1tZXRhZGF0YSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmlwZnMlMkZnZXQtbWV0YWRhdGElMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZuaW5ha2lsYnJpZGUlMkZzdW5zY3JlZW4tYWRtaW4lMkZwYWNrYWdlcyUyRm5leHRqcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZuaW5ha2lsYnJpZGUlMkZzdW5zY3JlZW4tYWRtaW4lMkZwYWNrYWdlcyUyRm5leHRqcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0M7QUFDbkg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvP2ZkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL25pbmFraWxicmlkZS9zdW5zY3JlZW4tYWRtaW4vcGFja2FnZXMvbmV4dGpzL2FwcC9hcGkvaXBmcy9nZXQtbWV0YWRhdGEvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2lwZnMvZ2V0LW1ldGFkYXRhL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaXBmcy9nZXQtbWV0YWRhdGFcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2lwZnMvZ2V0LW1ldGFkYXRhL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL25pbmFraWxicmlkZS9zdW5zY3JlZW4tYWRtaW4vcGFja2FnZXMvbmV4dGpzL2FwcC9hcGkvaXBmcy9nZXQtbWV0YWRhdGEvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2lwZnMvZ2V0LW1ldGFkYXRhL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fget-metadata%2Froute&page=%2Fapi%2Fipfs%2Fget-metadata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fget-metadata%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/ipfs/get-metadata/route.ts":
/*!********************************************!*\
  !*** ./app/api/ipfs/get-metadata/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_simpleNFT_ipfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~~/utils/simpleNFT/ipfs */ \"(rsc)/./utils/simpleNFT/ipfs.ts\");\n\nasync function POST(request) {\n    try {\n        const { ipfsHash } = await request.json();\n        const res = await (0,_utils_simpleNFT_ipfs__WEBPACK_IMPORTED_MODULE_0__.getNFTMetadataFromIPFS)(ipfsHash);\n        return Response.json(res);\n    } catch (error) {\n        console.log(\"Error getting metadata from ipfs\", error);\n        return Response.json({\n            error: \"Error getting metadata from ipfs\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2lwZnMvZ2V0LW1ldGFkYXRhL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlFO0FBRTFELGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1ELFFBQVFFLElBQUk7UUFDdkMsTUFBTUMsTUFBTSxNQUFNTCw2RUFBc0JBLENBQUNHO1FBQ3pDLE9BQU9HLFNBQVNGLElBQUksQ0FBQ0M7SUFDdkIsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQyxvQ0FBb0NGO1FBQ2hELE9BQU9ELFNBQVNGLElBQUksQ0FBQztZQUFFRyxPQUFPO1FBQW1DO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvLi9hcHAvYXBpL2lwZnMvZ2V0LW1ldGFkYXRhL3JvdXRlLnRzP2MzZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TkZUTWV0YWRhdGFGcm9tSVBGUyB9IGZyb20gXCJ+fi91dGlscy9zaW1wbGVORlQvaXBmc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBpcGZzSGFzaCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TkZUTWV0YWRhdGFGcm9tSVBGUyhpcGZzSGFzaCk7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocmVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgbWV0YWRhdGEgZnJvbSBpcGZzXCIsIGVycm9yKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkVycm9yIGdldHRpbmcgbWV0YWRhdGEgZnJvbSBpcGZzXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRORlRNZXRhZGF0YUZyb21JUEZTIiwiUE9TVCIsInJlcXVlc3QiLCJpcGZzSGFzaCIsImpzb24iLCJyZXMiLCJSZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ipfs/get-metadata/route.ts\n");

/***/ }),

/***/ "(rsc)/./utils/simpleNFT/ipfs.ts":
/*!*********************************!*\
  !*** ./utils/simpleNFT/ipfs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNFTMetadataFromIPFS: () => (/* binding */ getNFTMetadataFromIPFS),\n/* harmony export */   ipfsClient: () => (/* binding */ ipfsClient)\n/* harmony export */ });\n/* harmony import */ var kubo_rpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kubo-rpc-client */ \"(rsc)/../../node_modules/kubo-rpc-client/src/index.js\");\n\nconst PROJECT_ID = \"2GajDLTC6y04qsYsoDRq9nGmWwK\";\nconst PROJECT_SECRET = \"48c62c6b3f82d2ecfa2cbe4c90f97037\";\nconst PROJECT_ID_SECRECT = `${PROJECT_ID}:${PROJECT_SECRET}`;\nconst ipfsClient = (0,kubo_rpc_client__WEBPACK_IMPORTED_MODULE_0__.create)({\n    host: \"ipfs.infura.io\",\n    port: 5001,\n    protocol: \"https\",\n    headers: {\n        Authorization: `Basic ${Buffer.from(PROJECT_ID_SECRECT).toString(\"base64\")}`\n    }\n});\nasync function getNFTMetadataFromIPFS(ipfsHash) {\n    for await (const file of ipfsClient.get(ipfsHash)){\n        // The file is of type unit8array so we need to convert it to string\n        const content = new TextDecoder().decode(file);\n        // Remove any leading/trailing whitespace\n        const trimmedContent = content.trim();\n        // Find the start and end index of the JSON object\n        const startIndex = trimmedContent.indexOf(\"{\");\n        const endIndex = trimmedContent.lastIndexOf(\"}\") + 1;\n        // Extract the JSON object string\n        const jsonObjectString = trimmedContent.slice(startIndex, endIndex);\n        try {\n            const jsonObject = JSON.parse(jsonObjectString);\n            return jsonObject;\n        } catch (error) {\n            console.log(\"Error parsing JSON:\", error);\n            return undefined;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9zaW1wbGVORlQvaXBmcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsTUFBTUMsYUFBYTtBQUNuQixNQUFNQyxpQkFBaUI7QUFDdkIsTUFBTUMscUJBQXFCLENBQUMsRUFBRUYsV0FBVyxDQUFDLEVBQUVDLGVBQWUsQ0FBQztBQUVyRCxNQUFNRSxhQUFhSix1REFBTUEsQ0FBQztJQUMvQkssTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsU0FBUztRQUNQQyxlQUFlLENBQUMsTUFBTSxFQUFFQyxPQUFPQyxJQUFJLENBQUNSLG9CQUFvQlMsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUM5RTtBQUNGLEdBQUc7QUFFSSxlQUFlQyx1QkFBdUJDLFFBQWdCO0lBQzNELFdBQVcsTUFBTUMsUUFBUVgsV0FBV1ksR0FBRyxDQUFDRixVQUFXO1FBQ2pELG9FQUFvRTtRQUNwRSxNQUFNRyxVQUFVLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0o7UUFDekMseUNBQXlDO1FBQ3pDLE1BQU1LLGlCQUFpQkgsUUFBUUksSUFBSTtRQUNuQyxrREFBa0Q7UUFDbEQsTUFBTUMsYUFBYUYsZUFBZUcsT0FBTyxDQUFDO1FBQzFDLE1BQU1DLFdBQVdKLGVBQWVLLFdBQVcsQ0FBQyxPQUFPO1FBQ25ELGlDQUFpQztRQUNqQyxNQUFNQyxtQkFBbUJOLGVBQWVPLEtBQUssQ0FBQ0wsWUFBWUU7UUFDMUQsSUFBSTtZQUNGLE1BQU1JLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ0o7WUFDOUIsT0FBT0U7UUFDVCxFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7WUFDbkMsT0FBT0c7UUFDVDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2UtMi9uZXh0anMvLi91dGlscy9zaW1wbGVORlQvaXBmcy50cz80ZTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJrdWJvLXJwYy1jbGllbnRcIjtcblxuY29uc3QgUFJPSkVDVF9JRCA9IFwiMkdhakRMVEM2eTA0cXNZc29EUnE5bkdtV3dLXCI7XG5jb25zdCBQUk9KRUNUX1NFQ1JFVCA9IFwiNDhjNjJjNmIzZjgyZDJlY2ZhMmNiZTRjOTBmOTcwMzdcIjtcbmNvbnN0IFBST0pFQ1RfSURfU0VDUkVDVCA9IGAke1BST0pFQ1RfSUR9OiR7UFJPSkVDVF9TRUNSRVR9YDtcblxuZXhwb3J0IGNvbnN0IGlwZnNDbGllbnQgPSBjcmVhdGUoe1xuICBob3N0OiBcImlwZnMuaW5mdXJhLmlvXCIsXG4gIHBvcnQ6IDUwMDEsXG4gIHByb3RvY29sOiBcImh0dHBzXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShQUk9KRUNUX0lEX1NFQ1JFQ1QpLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5GVE1ldGFkYXRhRnJvbUlQRlMoaXBmc0hhc2g6IHN0cmluZykge1xuICBmb3IgYXdhaXQgKGNvbnN0IGZpbGUgb2YgaXBmc0NsaWVudC5nZXQoaXBmc0hhc2gpKSB7XG4gICAgLy8gVGhlIGZpbGUgaXMgb2YgdHlwZSB1bml0OGFycmF5IHNvIHdlIG5lZWQgdG8gY29udmVydCBpdCB0byBzdHJpbmdcbiAgICBjb25zdCBjb250ZW50ID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGZpbGUpO1xuICAgIC8vIFJlbW92ZSBhbnkgbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgY29uc3QgdHJpbW1lZENvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcbiAgICAvLyBGaW5kIHRoZSBzdGFydCBhbmQgZW5kIGluZGV4IG9mIHRoZSBKU09OIG9iamVjdFxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0cmltbWVkQ29udGVudC5pbmRleE9mKFwie1wiKTtcbiAgICBjb25zdCBlbmRJbmRleCA9IHRyaW1tZWRDb250ZW50Lmxhc3RJbmRleE9mKFwifVwiKSArIDE7XG4gICAgLy8gRXh0cmFjdCB0aGUgSlNPTiBvYmplY3Qgc3RyaW5nXG4gICAgY29uc3QganNvbk9iamVjdFN0cmluZyA9IHRyaW1tZWRDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbk9iamVjdCA9IEpTT04ucGFyc2UoanNvbk9iamVjdFN0cmluZyk7XG4gICAgICByZXR1cm4ganNvbk9iamVjdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBwYXJzaW5nIEpTT046XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlIiwiUFJPSkVDVF9JRCIsIlBST0pFQ1RfU0VDUkVUIiwiUFJPSkVDVF9JRF9TRUNSRUNUIiwiaXBmc0NsaWVudCIsImhvc3QiLCJwb3J0IiwicHJvdG9jb2wiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImdldE5GVE1ldGFkYXRhRnJvbUlQRlMiLCJpcGZzSGFzaCIsImZpbGUiLCJnZXQiLCJjb250ZW50IiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJ0cmltbWVkQ29udGVudCIsInRyaW0iLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsImVuZEluZGV4IiwibGFzdEluZGV4T2YiLCJqc29uT2JqZWN0U3RyaW5nIiwic2xpY2UiLCJqc29uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/simpleNFT/ipfs.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/debug","vendor-chunks/supports-color","vendor-chunks/ms","vendor-chunks/has-flag","vendor-chunks/kubo-rpc-client","vendor-chunks/ipfs-core-utils","vendor-chunks/@ipld","vendor-chunks/@multiformats","vendor-chunks/uint8arrays","vendor-chunks/multiformats","vendor-chunks/cborg","vendor-chunks/protobufjs","vendor-chunks/@chainsafe","vendor-chunks/@protobufjs","vendor-chunks/@libp2p","vendor-chunks/dag-jose","vendor-chunks/varint","vendor-chunks/it-to-stream","vendor-chunks/ipfs-unixfs","vendor-chunks/merge-options","vendor-chunks/fast-fifo","vendor-chunks/uint8-varint","vendor-chunks/parse-duration","vendor-chunks/it-peekable","vendor-chunks/it-map","vendor-chunks/it-last","vendor-chunks/it-first","vendor-chunks/browser-readablestream-to-it","vendor-chunks/blob-to-it","vendor-chunks/stream-to-it","vendor-chunks/p-fifo","vendor-chunks/p-defer","vendor-chunks/is-plain-obj","vendor-chunks/get-iterator","vendor-chunks/err-code","vendor-chunks/any-signal"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fipfs%2Fget-metadata%2Froute&page=%2Fapi%2Fipfs%2Fget-metadata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fipfs%2Fget-metadata%2Froute.ts&appDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fninakilbride%2Fsunscreen-admin%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();