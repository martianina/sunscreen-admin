"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/it-peekable";
exports.ids = ["vendor-chunks/it-peekable"];
exports.modules = {

/***/ "(rsc)/../../node_modules/it-peekable/dist/src/index.js":
/*!********************************************************!*\
  !*** ../../node_modules/it-peekable/dist/src/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ peekableIterator)\n/* harmony export */ });\nfunction peekableIterator(iterable) {\n    // @ts-expect-error\n    const [iterator, symbol] = iterable[Symbol.asyncIterator] != null\n        // @ts-expect-error\n        ? [iterable[Symbol.asyncIterator](), Symbol.asyncIterator]\n        // @ts-expect-error\n        : [iterable[Symbol.iterator](), Symbol.iterator];\n    const queue = [];\n    // @ts-expect-error\n    return {\n        peek: () => {\n            return iterator.next();\n        },\n        push: (value) => {\n            queue.push(value);\n        },\n        next: () => {\n            if (queue.length > 0) {\n                return {\n                    done: false,\n                    value: queue.shift()\n                };\n            }\n            return iterator.next();\n        },\n        [symbol]() {\n            return this;\n        }\n    };\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL2l0LXBlZWthYmxlL2Rpc3Qvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzZS0yL25leHRqcy8uLi8uLi9ub2RlX21vZHVsZXMvaXQtcGVla2FibGUvZGlzdC9zcmMvaW5kZXguanM/NjQzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZWVrYWJsZUl0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNvbnN0IFtpdGVyYXRvciwgc3ltYm9sXSA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSAhPSBudWxsXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgPyBbaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCksIFN5bWJvbC5hc3luY0l0ZXJhdG9yXVxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIDogW2l0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oKSwgU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBjb25zdCBxdWV1ZSA9IFtdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICByZXR1cm4ge1xuICAgICAgICBwZWVrOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICBwdXNoOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2godmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcXVldWUuc2hpZnQoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICBbc3ltYm9sXSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/it-peekable/dist/src/index.js\n");

/***/ })

};
;