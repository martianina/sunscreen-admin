/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stream-to-it";
exports.ids = ["vendor-chunks/stream-to-it"];
exports.modules = {

/***/ "(rsc)/../../node_modules/stream-to-it/source.js":
/*!*************************************************!*\
  !*** ../../node_modules/stream-to-it/source.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = readable => {\n  // Node.js stream\n  if (readable[Symbol.asyncIterator]) return readable\n\n  // Browser ReadableStream\n  if (readable.getReader) {\n    return (async function * () {\n      const reader = readable.getReader()\n\n      try {\n        while (true) {\n          const { done, value } = await reader.read()\n          if (done) return\n          yield value\n        }\n      } finally {\n        reader.releaseLock()\n      }\n    })()\n  }\n\n  throw new Error('unknown stream')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL3N0cmVhbS10by1pdC9zb3VyY2UuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNlLTIvbmV4dGpzLy4uLy4uL25vZGVfbW9kdWxlcy9zdHJlYW0tdG8taXQvc291cmNlLmpzPzU0ZjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZWFkYWJsZSA9PiB7XG4gIC8vIE5vZGUuanMgc3RyZWFtXG4gIGlmIChyZWFkYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHJldHVybiByZWFkYWJsZVxuXG4gIC8vIEJyb3dzZXIgUmVhZGFibGVTdHJlYW1cbiAgaWYgKHJlYWRhYmxlLmdldFJlYWRlcikge1xuICAgIHJldHVybiAoYXN5bmMgZnVuY3Rpb24gKiAoKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSByZWFkYWJsZS5nZXRSZWFkZXIoKVxuXG4gICAgICB0cnkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKClcbiAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuXG4gICAgICAgICAgeWllbGQgdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcmVhZGVyLnJlbGVhc2VMb2NrKClcbiAgICAgIH1cbiAgICB9KSgpXG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gc3RyZWFtJylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/stream-to-it/source.js\n");

/***/ })

};
;