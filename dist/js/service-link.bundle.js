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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Service-link/service-link.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Common/components/btnFloat.js":
/*!*******************************************!*\
  !*** ./src/Common/components/btnFloat.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const btnFLoat = document.querySelector('.btn-float')
const menuList = document.querySelector('.menu-list')

window.addEventListener('scroll', (ev)=>{
  if(window.scrollY>200) {
    btnFLoat.style.filter = 'blur(0)'
    btnFLoat.style.transform = 'scale(1)'
    btnFLoat.style.top = '30px'
  }else {
    btnFLoat.style.filter = 'blur(20px)'
    btnFLoat.style.transform = 'scale(0)'
    btnFLoat.style.top = '60px'
  }
})

btnFLoat.addEventListener('touchstart', () => {
  menuList.classList.toggle('menu-list--active', true)
})

/***/ }),

/***/ "./src/Common/components/nav.js":
/*!**************************************!*\
  !*** ./src/Common/components/nav.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 展开侧边sublist */
const aSublist = document.querySelectorAll('.menu-list__sublist')

aSublist.forEach((sublist)=>{
  const parentNode = sublist.parentNode
  const arrow = parentNode.querySelector('.arrow-down')
  parentNode.addEventListener('touchstart', function (){
    sublist.classList.toggle('menu-list__sublist--active')
    arrow.classList.toggle('arrow-down--inactive')
  })
})

/* 点击出发menu-mob */
const menuBtn = document.querySelector('button')
const menuList = document.querySelector('.menu-list')

menuBtn.addEventListener('touchend', ()=>{
  menuList.classList.toggle('menu-list--active', true)
})
document.addEventListener('touchstart', (ev)=>{
  const { clientX, clientY } = ev.touches[0]
  const { width } = menuList.getBoundingClientRect()
  if(clientX>width){
    menuList.classList.toggle('menu-list--active', false)
  }
})



/***/ }),

/***/ "./src/Service-link/scss/main.scss":
/*!*****************************************!*\
  !*** ./src/Service-link/scss/main.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Service-link/service-link.js":
/*!******************************************!*\
  !*** ./src/Service-link/service-link.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_link_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service-link.html */ "./src/service-link.html");
/* harmony import */ var _service_link_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_service_link_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/Service-link/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/components/nav */ "./src/Common/components/nav.js");
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Common_components_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/components/btnFloat */ "./src/Common/components/btnFloat.js");
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/images/dots-2.svg":
/*!*******************************!*\
  !*** ./src/images/dots-2.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cdbd071073466ad55a79c381fccfa0db.svg";

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

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5a2b37e3ad53de87bd3eb9df3587bf0b.svg";

/***/ }),

/***/ "./src/service-link.html":
/*!*******************************!*\
  !*** ./src/service-link.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"icon\" type=\"image/png\" href=\"https://i.postimg.cc/ryf98PTw/favicon.png\">\n  <title>CGHK - The Evening: Iranian Drone Down, Hezbollah, Fame and More | Service</title>\n</head>\n<body>\n  <!-- Nav -->\n  <header class=\"header\">\n    <div class=\"nav\">\n      <div class=\"nav__wrapper\">\n        <a href=\"index.html\" class=\"nav__logo\"></a>\n        <div class=\"nav-links\">\n          <nav class=\"nav-links-one\">\n            <a href=\"private-policy.html\" class=\"nav-links-one__item\">Private Policy</a>\n            <a href=\"contact.html\" class=\"nav-links-one__item\">Contact Us</a>\n            <a href=\"media.html\" class=\"nav-links-one__item\">Media</a>\n            <a href=\"donate.html\" class=\"nav-links-one__item\">Donate</a>\n            <div class=\"language\">\n              <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n              <ul href=\"\" class=\"language__item\">\n                <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\"\n                alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a>\n          </li>\n              </ul>\n            </div>\n          </nav>\n          <nav class=\"nav-links-two\">\n            <div class=\"nav-links-two__item\">\n              <a href=\"about-CGHK.html\">About CGHK<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"about.html\">About</a></li>\n                <li><a href=\"about-CGHK.html\">Message of President</a></li>\n                <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n                <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n                <li><a href=\"about-parners.html\">Partners</a></li>\n                <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n                <li><a href=\"contact.html\">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"perspective.html?tab=Take on top news\">CGHK's Perspective<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n                <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n                <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"events.html\">Events<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"service.html\">Service<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"publication.html\">Publication</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service.html\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"membership.html\">Membership</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"\">E-Newsletter</a></li>\n                <li><a href=\"\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!-- 手机版nav -->\n    <div class=\"nav-mob\">\n      <a href=\"index.html\" class=\"nav-mob__logo\"><img src=\"" + __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg") + "\" alt=\"\"></a>\n      <div class=\"language\">\n        <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n        <ul href=\"\" class=\"language__item\">\n          <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a></li>\n        </ul>\n      </div>\n      <div class=\"menu\">\n        <button class=\"btn-stroke\"><i class=\"icon hamb\"></i> Menu</button>\n        <ul class=\"menu-list\">\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">About CGHK <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"about.html\">About</a></li>\n              <li><a href=\"about-CGHK.html\">Message of President</a></li>\n              <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n              <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n              <li><a href=\"about-parners.html\">Partners</a></li>\n              <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n              <li><a href=\"contact.html\">Contact Us</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">CGHK's Perspective <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n              <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n              <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Events <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Service <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"service.html\">E-Newsletter</a></li>\n              <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\"><a href=\"publication.html\">Publication</a></li>\n          <li class=\"menu-list__item\"><a href=\"membership.html\">Membership</a></li>\n          <hr class=\"divider\">\n          <li class=\"menu-list__item\"><a href=\"private-policy.html\">Private Policy</a></li>\n          <li class=\"menu-list__item\"><a href=\"contact.html\">Contact Us</a></li>\n          <li class=\"menu-list__item\"><a href=\"media.html\">Media</a></li>\n          <li class=\"menu-list__item\"><a href=\"donate.html\">Donate</a></li>\n        </ul>\n        <!-- Btn-Float -->\n        <button class=\"btn-float\"><i class=\"icon hamb\"></i></button>\n      </div>\n    </div>\n  </header>\n  <!-- Body -->\n  <article class=\"body\">\n    <!-- Aside -->\n    <aside class=\"aside\">\n      <nav class=\"aside-bread\">\n        <a href=\"index.html\" class=\"aside-bread__link\">Home</a>\n        <a href=\"\" class=\"aside-bread__link\">E-Newsletter</a>\n      </nav>\n      <nav class=\"aside-nav\">\n        <a href=\"service.html\" class=\"aside-nav__link aside-nav__link--current\">E-Newsletter</a>\n        <a href=\"service-research.html\" class=\"aside-nav__link aside-nav__link\">Policy and Market Research</a>\n      </nav>\n    </aside>\n    <!-- Content -->\n    <div class=\"content\">\n      <!-- Title -->\n      <h1 class=\"title content__title\"><img src=\"" + __webpack_require__(/*! ./images/dots-2.svg */ "./src/images/dots-2.svg") + "\" alt=\"\">The Evening: Iranian Drone Down, Hezbollah,\n        Fame and More</h1>\n      <p class=\"content__p\">\n        <strong>July 18, 2019</strong>\n      </p>\n      <h2 class=\"content__subtitle\">Navy Ship Shot Down Iranian Drone</h2>\n      <p class=\"content__p\">\n        The American military shot down an Iranian drone in the Strait of Hormuz on Thursday, President Trump said today\n        at the White House, as the NYT’s Thomas Gibbons-Neff <a class=\"\" href=\"/\">reports</a>.\n        <br><br>\n        <strong>Dive Deeper</strong>: \"<a class=\"\" href=\"/\">Risks to Watch in 2019: Q3 Update</a>,\" by CSIS’s Sam\n        Brannen.\n      </p>\n      <h2 class=\"content__subtitle\">Argentina Brands Hezbollah Terrorist Organization</h2>\n      <p class=\"content__p\">\n        Argentinian authorities designated Hezbollah, which it blames for two attacks on its soil, a terrorist\n        organization on Thursday and ordered the freezing of its assets in the country, as Reuters’ Cassandra Garrison\n        <a href=\"/\" class=\"\">reports</a>.\n      </p>\n      <h2 class=\"content__subtitle\">Narrowing Divisions on Digital Tax Plan</h2>\n      <p class=\"content__p\">\n        Finance officials from some of the world’s largest economies took a step toward an agreement on how to divide up\n        multinational companies’ profits, narrowing differences over U.S. and French approaches to taxing digital firms\n        and pledging to outline their plan by January, as the WSJ’s Noemie Bisserbe <a href=\"/\" class=\"\">reports</a>.\n        <br><br>\n        <strong>Dive Deeper</strong>: Check out the new episode of the CSIS Trade Guys podcast “<a href=\"/\" class=\"\">\n          World Peace Through\n          World Trade\n        </a>” with special guest Chris Padilla of IBM.\n      </p>\n      <h2 class=\"content__subtitle\">Enroll for Fall</h2>\n      <p class=\"content__p\">\n        Now enrolling for the Fall, CSIS & Syracuse University's Maxwell School of Citizenship and Public Affairs offer\n        a new Executive Master's in International Relations. Information <a href=\"/\" class=\"\">here</a>.\n      </p>\n      <p class=\"content__p\">\n        Check out CSIS’s new series of video shorts: “Testify” and “High Resolution.” And don’t forget to <a href=\"\" class=\"\">\n          subscribe to\n          the CSIS YouTube Channel\n        </a>!\n      </p>\n    </div>\n  </article>\n  <!-- Footer -->\n  <footer class=\"footer\">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n</body>\n</html>";

/***/ })

/******/ });
//# sourceMappingURL=service-link.bundle.js.map