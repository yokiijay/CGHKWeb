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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Home/scss/main.scss":
/*!*********************************!*\
  !*** ./src/Home/scss/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/images/dots.svg":
/*!*****************************!*\
  !*** ./src/images/dots.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/852b2b4cdec751a04dc86045decf0470.svg";

/***/ }),

/***/ "./src/images/language-en.svg":
/*!************************************!*\
  !*** ./src/images/language-en.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/43caf8cea1ed6ff67f6f33078415e9d9.svg";

/***/ }),

/***/ "./src/images/language-zh.svg":
/*!************************************!*\
  !*** ./src/images/language-zh.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9fea14d987f943eb8863b933fd14b7d1.svg";

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"icon\" type=\"image/png\" href=\"https://i.postimg.cc/ryf98PTw/favicon.png\">\n  <title>CGHK - Center for globalization</title>\n</head>\n<body>\n  <header class=\"header\">\n    <div class=\"header__overlay\"></div>\n    <div class=\"nav\">\n      <div class=\"nav__wrapper\">\n        <a href=\"\" class=\"nav__logo\"></a>\n        <div class=\"nav-links\">\n          <nav class=\"nav-links-one\">\n            <a href=\"\" class=\"nav-links-one__item\">Private Policy</a>\n            <a href=\"\" class=\"nav-links-one__item\">Contact Us</a>\n            <a href=\"\" class=\"nav-links-one__item\">Media</a>\n            <a href=\"\" class=\"nav-links-one__item\">Donate</a>\n            <div class=\"language\">\n              <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n              <ul href=\"\" class=\"language__item\">\n                <li class=\"language__en\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\"></li>\n                <li class=\"language__zh\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></li>\n              </ul>\n            </div>\n          </nav>\n          <nav class=\"nav-links-two\">\n            <a href=\"\" class=\"nav-links-two__item\">About CGHK</a>\n            <a href=\"\" class=\"nav-links-two__item\">CGHK's Perspective</a>\n            <a href=\"\" class=\"nav-links-two__item\">Events</a>\n            <a href=\"\" class=\"nav-links-two__item\">Service</a>\n            <a href=\"\" class=\"nav-links-two__item\">Membership</a>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"banner\">\n      <div class=\"banner__wrapper\">\n        <div class=\"banner-title\">\n          <h1>Prescription Drug Pricing: Striking the Right Balance</h1>\n        </div>\n        <div class=\"banner-message\">\n          <h3>Message of President</h3>\n          <div class=\"banner-message__photo\"><figure></figure></div>\n          <h4>Prof. Dr. Peter Qiu, </h4>\n          <p>Only independent and in-depth research makes thoughts and advices valuable…</p>\n          <a class=\"linkto\" href=\"\">Read more<i class=\"icon readmore\"></i></a>\n        </div>\n        <div class=\"banner-pagination\">\n          <div class=\"banner-pagination__item\"></div>\n          <div class=\"banner-pagination__item banner-pagination__item--current\"></div>\n          <div class=\"banner-pagination__item\"></div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <article class=\"perspective\">\n    <div class=\"perspective__wrapper\">\n      <div style=\"font-size: 0\" class=\"perspective__title\">\n        <img src=\"" + __webpack_require__(/*! ./images/dots.svg */ "./src/images/dots.svg") + "\" alt=\"\">\n        <h1>CGHK's Perspective</h1>\n      </div>\n      <div class=\"flex perspective-block1 perspective__content\">\n        <section class=\"perspective-block1__left\">\n          <span>4 hrs ago</span>\n          <h2>Heritage Applauds EPA’s Replacement of the Clean Power Plan</h2>\n          <p>“The Affordable Clean Energy rule is a sensible alternative to the Obama administration’s climate alarmist\n            agenda, the Clean Power Plan,\" said Heritage expert Nick Loris. \"The U.S. Supreme Court agreed that the\n            proposed Obama-era regulation unacceptably exceeded EPA’s statutory authority and disregarded states’\n            concerns that the rule abandoned federalism, so the CPP never went into effect.\"\n          </p>\n          <a href=\"\" class=\"linkto\">Keep reading<i class=\"icon readmore\"></i></a>\n        </section>\n        <section class=\"perspective-block1__right\">\n          <figure></figure>\n        </section>\n      </div>\n      <div class=\"flex perspective-block2 perspective__content\">\n        <section class=\"perspective-block2__item\">\n          <span>Jun 13</span>\n          <h3>Is there a 'Trump Doctrine in Foreign Policy'?</h3>\n          <p>Ian Lesser, of The German Marshall Fund of the United States, recently sat down with Heritage's Kim Holmes,\n            to discuss the current state of transatlantic relations. \"We’ve spent an interesting afternoon talking with\n            an audience here in Brussels about what is happening in transatlantic relations ... To begin with, would you\n            say there is such a thing as a Trump doctrine in foreign policy?\" asked Lesser.\n          </p>\n          <a href=\"\" class=\"linkto\">Keep reading<i class=\"icon readmore\"></i></a>\n        </section>\n        <section class=\"perspective-block2__item\">\n          <span>Jun 13</span>\n          <figure></figure>\n          <h3>SCOTUS 101: A Supremely Soporific Slog</h3>\n          <p>This week, Heritage colleague Jason Snead joins Elizabeth Slattery to slog through recent snooze-worthy\n            opinions. Elizabeth also chats with Ed Whelan and Chris Scalia about \"On Faith: Lessons from an American\n            Believer.\"\n          </p>\n          <a href=\"\" class=\"linkto\">Keep reading<i class=\"icon readmore\"></i></a>\n        </section>\n        <section class=\"perspective-block2__item\">\n          <span>Jun 12</span>\n          <h3>Update on Hong Kong Protests</h3>\n          <p>\"Friday, June 14 is the U.S. Army’s 244th birthday. Since it was born in 1775, even before the birth of the\n            nation itself, the Army has always responded to fight our wars, provide disaster support, build dams and\n            levees, enforce desegregation, and help partner nations develop their own armies.\"\n          </p>\n          <a href=\"\" class=\"linkto\">Keep reading<i class=\"icon readmore\"></i></a>\n        </section>\n      </div>\n      <button class=\"perspective__more\">MORE</button>\n    </div>\n  </article>\n</body>\n</html>";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/scss/main.scss */ "./src/Home/scss/main.scss");
/* harmony import */ var _Home_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Home_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map