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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet photoArr = [];\n\nclass Photo {\n    constructor(name, imageLink, description) {\n        this.name = name;\n        this.image = imageLink;\n        this.description = description;\n    }\n}\n\nfunction photoSlider(arrPhotos) {\n    const sliderContainer = document.createElement('div');\n    const titleBar = document.createElement('div');\n    const btnLeft = document.createElement('div');\n    const btnRight = document.createElement('div');\n    const photoAlbumContainer = document.createElement('div');\n    const photoDescriptionConatianer = document.createElement('div');\n    const bubbleContainer = document.createElement('div');\n    const photosContainer = document.createElement('div');\n    const mainPhoto = document.createElement('img');\n    const leftPhoto = document.createElement('img');\n    const rightPhoto = document.createElement('img');\n    sliderContainer.id = 'sliderContainer';\n    titleBar.id = 'titleBar';\n    btnLeft.id = 'btnLeft';\n    btnRight.id = 'btnRight';\n    photoAlbumContainer.id = 'photo';\n    photoDescriptionConatianer.id = 'photoDescription';\n    bubbleContainer.id = 'bubbleContainer';\n    photosContainer.id = 'photoContainer';\n    mainPhoto.id = 'mainPhoto';\n    leftPhoto.id = 'leftPhoto';\n    rightPhoto.id = 'rightPhot';\n    btnLeft.addEventListener('click', () => {\n        let lastObj = photoArr.pop();\n        photoArr.unshift(lastObj);\n        showIMG(photoArr, mainPhoto, leftPhoto, rightPhoto, titleBar, photoDescriptionConatianer);\n    });\n    btnRight.addEventListener('click', () => {\n        let firstObj = photoArr.shift();\n        photoArr.push(firstObj);\n        showIMG(photoArr, mainPhoto, leftPhoto, rightPhoto, titleBar, photoDescriptionConatianer);\n    });\n    photosContainer.append(leftPhoto, rightPhoto, mainPhoto);\n    photoAlbumContainer.appendChild(photosContainer, photoDescriptionConatianer);\n    sliderContainer.append(titleBar, btnLeft, photoContainer, btnRight, bubbleContainer);\n    return sliderContainer;\n}\n\nfunction showIMG(arrPhoto, mainIMGElement, leftIMGElement, rightIMGElement, titleELement, descriptionEL) {\n    const currentIMGSrc = arrPhoto[1].image;\n    const currentTitle = arrPhoto[1].name;\n    const currentDescription = arrPhoto[1].description;\n    const leftIMGSrc = arrPhoto[0].image;\n    const rightIMGSrc = arrPhoto[2].image;\n    mainIMGElement.src = currentIMGSrc;\n    titleELement.textContext = currentTitle\n    descriptionEL.textContext = currentDescription;\n    leftIMGElement.src = leftIMGSrc;\n    rightIMGElement.src = rightIMGSrc;\n}\n\n\n\n//# sourceURL=webpack://img-slider/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://img-slider/./src/style.css?");

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