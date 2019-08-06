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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Events/events.js");
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

/***/ "./src/Events/events.js":
/*!******************************!*\
  !*** ./src/Events/events.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.html */ "./src/events.html");
/* harmony import */ var _events_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_events_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/Events/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/components/nav */ "./src/Common/components/nav.js");
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Common_components_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/components/btnFloat */ "./src/Common/components/btnFloat.js");
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__);




// import axios from 'axios'

/*------------------ 异步加载 ------------------*/
// let loading = true
// let page = 0
// const contentCards = document.querySelector('.content-cards')
// const oLoading = document.querySelector('.loading')

// window.addEventListener('scroll', ()=>{
//   return false
//   const clientBottom = (window.innerHeight - contentCards.getBoundingClientRect().bottom)
//   if (clientBottom > 300 && contentCards.offsetHeight > window.innerHeight / 2 && loading){
//     loading = false
//     oLoading.style.visibility = 'visible'
//     loadMore(APIMore + `?page=${page}`)
//   }
// })

// function loadMore(url) {
//   axios.get(url)
//   .then(data=>{
//     if(data.status!==200) return
//     page ++ // 每次触底page+1
//     const { moreList } = data.data
//     moreList.forEach((list)=>{
//       const a = document.createElement('a')
//       a.href = list.url
//       a.className = 'content-cards__item'
//       a.innerHTML = `
//         <div class="content-cards__item-img">
//           <figure style="background:url(${list.img})"></figure>
//         </div>
//         <div class="content-cards__item-content">
//           <span>${list.date}</span>
//           <h3>${list.h3}</h3>
//           <p>${list.p}</p>
//         </div>
//         <div class="content-cards__item-info">
//           <span>${list.span1}</span>
//           <span>${list.span2}</span>
//         </div>
//       `
//       contentCards.appendChild(a)
//     })
//     oLoading.style.visibility = 'hidden'
//     loading = true
//   })
// }

/***/ }),

/***/ "./src/Events/scss/main.scss":
/*!***********************************!*\
  !*** ./src/Events/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/events.html":
/*!*************************!*\
  !*** ./src/events.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"icon\" type=\"image/png\" href=\"https://i.postimg.cc/ryf98PTw/favicon.png\">\n  <title>CGHK - Events</title>\n</head>\n<body>\n  <!-- Nav -->\n  <header class=\"header\">\n    <div class=\"nav\">\n      <div class=\"nav__wrapper\">\n        <a href=\"index.html\" class=\"nav__logo\"></a>\n        <div class=\"nav-links\">\n          <nav class=\"nav-links-one\">\n            <a href=\"private-policy.html\" class=\"nav-links-one__item\">Private Policy</a>\n            <a href=\"contact.html\" class=\"nav-links-one__item\">Contact Us</a>\n            <a href=\"media.html\" class=\"nav-links-one__item\">Media</a>\n            <a href=\"donate.html\" class=\"nav-links-one__item\">Donate</a>\n            <div class=\"language\">\n              <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n              <ul href=\"\" class=\"language__item\">\n                <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\"\n                alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a>\n          </li>\n              </ul>\n            </div>\n          </nav>\n          <nav class=\"nav-links-two\">\n            <div class=\"nav-links-two__item\">\n              <a href=\"about-CGHK.html\">About CGHK<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"about.html\">About</a></li>\n                <li><a href=\"about-CGHK.html\">Message of President</a></li>\n                <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n                <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n                <li><a href=\"about-parners.html\">Partners</a></li>\n                <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n                <li><a href=\"contact.html\">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"perspective.html?tab=Take on top news\">CGHK's Perspective<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n                <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n                <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"events.html\">Events<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"service.html\">Service<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"publication.html\">Publication</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service.html\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"membership.html\">Membership</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"\">E-Newsletter</a></li>\n                <li><a href=\"\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!-- 手机版nav -->\n    <div class=\"nav-mob\">\n      <a href=\"index.html\" class=\"nav-mob__logo\"><img src=\"" + __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg") + "\" alt=\"\"></a>\n      <div class=\"language\">\n        <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n        <ul href=\"\" class=\"language__item\">\n          <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a></li>\n        </ul>\n      </div>\n      <div class=\"menu\">\n        <button class=\"btn-stroke\"><i class=\"icon hamb\"></i> Menu</button>\n        <ul class=\"menu-list\">\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">About CGHK <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"about.html\">About</a></li>\n              <li><a href=\"about-CGHK.html\">Message of President</a></li>\n              <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n              <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n              <li><a href=\"about-parners.html\">Partners</a></li>\n              <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n              <li><a href=\"contact.html\">Contact Us</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">CGHK's Perspective <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n              <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n              <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Events <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Service <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"service.html\">E-Newsletter</a></li>\n              <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\"><a href=\"publication.html\">Publication</a></li>\n          <li class=\"menu-list__item\"><a href=\"membership.html\">Membership</a></li>\n          <hr class=\"divider\">\n          <li class=\"menu-list__item\"><a href=\"private-policy.html\">Private Policy</a></li>\n          <li class=\"menu-list__item\"><a href=\"contact.html\">Contact Us</a></li>\n          <li class=\"menu-list__item\"><a href=\"media.html\">Media</a></li>\n          <li class=\"menu-list__item\"><a href=\"donate.html\">Donate</a></li>\n        </ul>\n        <!-- Btn-Float -->\n        <button class=\"btn-float\"><i class=\"icon hamb\"></i></button>\n      </div>\n    </div>\n  </header>\n  <!-- Body -->\n  <article class=\"body\">\n    <!-- Aside -->\n    <aside class=\"aside\">\n      <nav class=\"aside-bread\">\n        <a href=\"index.html\" class=\"aside-bread__link\">Home</a>\n        <a href=\"\" class=\"aside-bread__link\">Events</a>\n      </nav>\n    </aside>\n    <!-- Content -->\n    <div class=\"content\">\n      <!-- Title -->\n      <h1 class=\"title content__title\"><img src=\"" + __webpack_require__(/*! ./images/dots-2.svg */ "./src/images/dots-2.svg") + "\" alt=\"\">Events</h1>\n\n      <p class=\"content__caption\">\n        The Foreign Policy Centre holds events to engage the public in debates around key international affairs issues.\n        These include seminars, conferences, keynote speeches and expert roundtables. The majority of events will take\n        place in London but the FPC will work with partners to hold events in other UK Cities and internationally. To\n        listen to recordings of previous events visit our Soundcloud page or click on past events. For general enquiries\n        about our events, please email: events@fpc.org.uk.\n      </p>\n\n      \n      <div class=\"content-cards\">\n        <div class=\"content-cards__upcoming\">\n          <h3>UPCOMING EVENTS</h3>\n        </div>\n        \n        <div class=\"content-cards__top\">\n          <div class=\"content-cards__left\">\n            <figure></figure>\n            <div class=\"content-cards__left-content\">\n              <h2>Jun 28 <span>12:00pm - 1:00pm</span></h2>\n              <a href=\"events-link.html\">\n                <p>Will We Ban “Hate Speech”? Lessons from Europe and the Threat of Big Tech</p>\n              </a>\n              <div class=\"flex-between\">\n                <a href=\"events-link.html\"><img src=\"" + __webpack_require__(/*! ./images/arrow-lg.svg */ "./src/images/arrow-lg.svg") + "\" alt=\"\"></a>\n                <span>Hong Kong</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-cards__right\">\n            <figure></figure>\n            <div class=\"content-cards__right-content\">\n              <h2>Jun 06 <span>12:00pm - 1:00pm</span></h2>\n              <a href=\"events-link.html\">\n                <p>Will We Ban “Hate Speech”? Lessons from Europe and the</p>\n              </a>\n              <div class=\"flex-between\">\n                <span></span>\n                <span>Washington, DC</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <div class=\"content-cards__viewall\">\n          <a class=\"btn-stroke\" href=\"events-list.html\">VIEW ALL UPCOMING EVENTS</a>\n        </div>\n      </div>\n\n      <div class=\"content-cards\">\n        <div class=\"content-cards__past\">\n          <h3>PAST EVENTS</h3>\n        </div>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <div class=\"content-cards__viewall\">\n          <a class=\"btn-stroke\" href=\"events-list.html\">VIEW ALL PAST EVENTS</a>\n        </div>\n      </div>\n\n      <div class=\"loading\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n  </article>\n  <!-- Footer -->\n  <footer class=\"footer\">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n\n  <script>\n  /*------------------ API 数据接口 ------------------*/\n  const [APIMore] = [\n    '/api/events/getMore.json'\n  ]\n  </script>\n</body>\n</html>";

/***/ }),

/***/ "./src/images/arrow-lg.svg":
/*!*********************************!*\
  !*** ./src/images/arrow-lg.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/df73f51cefe569f2d25eb7dff831ac8e.svg";

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

/***/ })

/******/ });
//# sourceMappingURL=events.bundle.js.map