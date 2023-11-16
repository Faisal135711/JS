/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _example_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example.csv */ \"./src/example.csv\");\n/* harmony import */ var _example_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_example_csv__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// Use 'data' in your application\nconsole.log((_example_csv__WEBPACK_IMPORTED_MODULE_0___default()));\n\n// const greet = () => {\n//   console.log(\"Hello, Webpack and Babel!\");\n// };\n//\n// greet();\n\n//# sourceURL=webpack://loader/./src/index.js?");

/***/ }),

/***/ "./src/example.csv":
/*!*************************!*\
  !*** ./src/example.csv ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = [[\"1\",\"Eldon Base for stackable storage shelf, platinum\",\"Muhammed MacIntyre\",\"3\",\"-213.25\",\"38.94\",\"35\",\"Nunavut\",\"Storage & Organization\",\"0.8\"],[\"2\",\"1.7 Cubic Foot Compact \\\"Cube\\\" Office Refrigerators\",\"Barry French\",\"293\",\"457.81\",\"208.16\",\"68.02\",\"Nunavut\",\"Appliances\",\"0.58\"],[\"3\",\"Cardinal Slant-D� Ring Binder, Heavy Gauge Vinyl\",\"Barry French\",\"293\",\"46.71\",\"8.69\",\"2.99\",\"Nunavut\",\"Binders and Binder Accessories\",\"0.39\"],[\"4\",\"R380\",\"Clay Rozendal\",\"483\",\"1198.97\",\"195.99\",\"3.99\",\"Nunavut\",\"Telephones and Communication\",\"0.58\"],[\"5\",\"Holmes HEPA Air Purifier\",\"Carlos Soltero\",\"515\",\"30.94\",\"21.78\",\"5.94\",\"Nunavut\",\"Appliances\",\"0.5\"],[\"6\",\"G.E. Longer-Life Indoor Recessed Floodlight Bulbs\",\"Carlos Soltero\",\"515\",\"4.43\",\"6.64\",\"4.95\",\"Nunavut\",\"Office Furnishings\",\"0.37\"],[\"7\",\"Angle-D Binders with Locking Rings, Label Holders\",\"Carl Jackson\",\"613\",\"-54.04\",\"7.3\",\"7.72\",\"Nunavut\",\"Binders and Binder Accessories\",\"0.38\"],[\"8\",\"SAFCO Mobile Desk Side File, Wire Frame\",\"Carl Jackson\",\"613\",\"127.70\",\"42.76\",\"6.22\",\"Nunavut\",\"Storage & Organization\",\"\"],[\"9\",\"SAFCO Commercial Wire Shelving, Black\",\"Monica Federle\",\"643\",\"-695.26\",\"138.14\",\"35\",\"Nunavut\",\"Storage & Organization\",\"\"],[\"10\",\"Xerox 198\",\"Dorothy Badders\",\"678\",\"-226.36\",\"4.98\",\"8.33\",\"Nunavut\",\"Paper\",\"0.38\"],[\"\"]]\n\n//# sourceURL=webpack://loader/./src/example.csv?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;