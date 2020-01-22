/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ \"./frontend/styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_BookServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/BookServices */ \"./frontend/services/BookServices.js\");\n//version de emmascript 6\r\n\r\n//Solo importamos \r\n\r\n\r\n//Capturando datos del formulario\r\n\r\ndocument.getElementById(\"book-form\").addEventListener(\"submit\", e => {\r\n  const title = document.getElementById(\"title\").value; //capturamos su valor\r\n  const author = document.getElementById(\"author\").value;\r\n  const isbn = document.getElementById(\"isbn\").value;\r\n  const image = document.getElementById(\"image\").files;\r\n\r\n //FormData es como un formulario virtual de javascript\r\n  const formData=new FormData();\r\n  formData.append('title',title);\r\n  formData.append('author',author);\r\n  formData.append('isbn',isbn);\r\n\r\n  const bookService=new _services_BookServices__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  //Guardar libro\r\n  bookService.postBook(formData);\r\n  e.preventDefault();//evitamos que la pagina recargue al ejecutar una funcion\r\n});\r\n\n\n//# sourceURL=webpack:///./frontend/app.js?");

/***/ }),

/***/ "./frontend/services/BookServices.js":
/*!*******************************************!*\
  !*** ./frontend/services/BookServices.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//Los servicios son clases con metodos que se pueden reutilizar\r\n\r\nclass BookServices {\r\n  constructor() {\r\n    this.URI = \"http://localhost:3000/api/books\";\r\n  }\r\n\r\n  //Obtener libros\r\n  async getBook() {\r\n    const response = await fetch(this.URI);\r\n    const books = await response.json();\r\n\r\n    return books;\r\n  }\r\n  //Guardar libros\r\n  async postBook(book) {\r\n    const res = await fetch(this.URI, {\r\n      method: \"POST\",\r\n      body: book\r\n    });\r\n    const data = await res.json(); //No solo mandamos datos sino tambn una imagen\r\n    console.log(data);\r\n  }\r\n  //Eliminar libros\r\n  async deleteBook(bookId) {\r\n    const res = await fetch(\"$(this.URI)/$(bookId)\", {\r\n      headers: {\r\n        \"content-type\": \"application/json\" //colcoamos esto porque solo estamos enviando datos\r\n      },\r\n      method: \"DELETE\"\r\n    });\r\n    const data=await res.json();\r\n    console.log(data);\r\n  }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookServices);\n\n//# sourceURL=webpack:///./frontend/services/BookServices.js?");

/***/ }),

/***/ "./frontend/styles/app.css":
/*!*********************************!*\
  !*** ./frontend/styles/app.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./frontend/styles/app.css?");

/***/ })

/******/ });