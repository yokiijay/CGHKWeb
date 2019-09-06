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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Perspective-link/perspective-link.js");
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

/***/ "./src/Perspective-link/perspective-link.js":
/*!**************************************************!*\
  !*** ./src/Perspective-link/perspective-link.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _perspective_link_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../perspective-link.html */ "./src/perspective-link.html");
/* harmony import */ var _perspective_link_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_perspective_link_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/Perspective-link/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/components/nav */ "./src/Common/components/nav.js");
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Common_components_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/components/btnFloat */ "./src/Common/components/btnFloat.js");
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _voice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voice */ "./src/Perspective-link/voice.js");






Object(_voice__WEBPACK_IMPORTED_MODULE_4__["default"])()

/***/ }),

/***/ "./src/Perspective-link/scss/main.scss":
/*!*********************************************!*\
  !*** ./src/Perspective-link/scss/main.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Perspective-link/voice.js":
/*!***************************************!*\
  !*** ./src/Perspective-link/voice.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return refreshVoices; });
// 当ajax异步加载后 dom会变 调用refreshVoices函数以重新生效
function refreshVoices() {
  const voices = document.querySelectorAll('.voice')

  voices.forEach(el => {
    // 获取元素
    const audioEl = el.querySelector('audio')
    const audioBtn = el.querySelector('i.icon-voice')
    const audioSlider = el.querySelector('.voice__slider')
    const audioProgress = el.querySelector('.voice__slider-progress')
    const audioOval = el.querySelector('.voice__slider-progress-oval')
    const audioIcon = el.querySelector('.icon-voice')

    // 滑动slider
    if (window.innerWidth < 992) {
      audioSlider.ontouchstart = ev => {
        let originalClientX = ev.changedTouches[0].clientX
        let originalWidth = audioProgress.offsetWidth

        window.ontouchmove = ev => {
          let currentClientX = ev.changedTouches[0].clientX
          let disClientX = currentClientX - originalClientX

          audioProgress.style.width = disClientX + originalWidth + 'px'
          if (audioEl.readyState >= 2) {
            const duration = audioEl.duration
            audioEl.currentTime = modulate(audioProgress.offsetWidth,
              [0, audioSlider.offsetWidth],
              [0, duration]
            )
          }
        }

        window.ontouchend = () => {
          window.onmousemove = null
        }
      }
    } else {
      audioSlider.onmousedown = ev => {
        let originalClientX = ev.clientX
        let originalWidth = audioProgress.offsetWidth

        window.onmousemove = ev => {
          ev.preventDefault()
          let currentClientX = ev.clientX
          let disClientX = currentClientX - originalClientX

          audioProgress.style.width = disClientX + originalWidth + 'px'
          if (audioEl.readyState >= 2) {
            const duration = audioEl.duration
            audioEl.currentTime = modulate(audioProgress.offsetWidth,
              [0, audioSlider.offsetWidth],
              [0, duration]
            )
          }
        }

        window.onmouseup = () => {
          window.onmousemove = null
        }
      }
    }

    // 点击喇叭播放/暂停
    audioBtn.addEventListener('click', () => {
      if (audioEl.readyState === 0) {
        audioEl.load()
      } else {
        audioEl.paused && audioEl.play() || audioEl.pause()
      }
    })
    audioEl.addEventListener('canplay', () => {
      audioEl.play()
    })

    // 播放时oval动画开始
    audioEl.addEventListener('play', () => {
      document.querySelectorAll('audio').forEach(el => {
        if (el !== audioEl) el.pause()
      })
      audioOval.classList.toggle('voice__slider-progress-oval--active', true)
      audioIcon.classList.toggle('icon--active', true)
    })
    audioEl.oncanplay = () => {
      // 播放时oval动画停止
      audioEl.addEventListener('pause', () => {
        audioOval.classList.toggle('voice__slider-progress-oval--active', false)
        audioIcon.classList.toggle('icon--active', false)
      })
      // 播放结束时重置时间轴
      audioEl.addEventListener('ended', () => {
        audioEl.currentTime = 0
      })

      // 音频进度处理
      const spanIn = el.querySelector('.voice__slider-in')
      const spanOut = el.querySelector('.voice__slider-out')
      const slider = el.querySelector('.voice__slider-progress')
      const { duration, currentTime } = audioEl

      spanIn.innerHTML = `${parseInt(currentTime / 60 / 10) || '0'}${parseInt(currentTime / 60 % 10)}:${parseInt(currentTime % 60 / 10)}${parseInt(currentTime % 60 % 10)}`
      spanOut.innerHTML = `${parseInt(duration / 60 / 10) || '0'}${parseInt(duration / 60 % 10)}:${parseInt(duration % 60 / 10)}${parseInt(duration % 60 % 10)}`
      slider.style.width = modulate(currentTime, [0, duration], [0, 100]) + '%'

      audioEl.addEventListener('timeupdate', () => {
        const { duration, currentTime } = audioEl
        spanIn.innerHTML = `${parseInt(currentTime / 60 / 10) || '0'}${parseInt(currentTime / 60 % 10)}:${parseInt(currentTime % 60 / 10)}${parseInt(currentTime % 60 % 10)}`
        spanOut.innerHTML = `${parseInt(duration / 60 / 10) || '0'}${parseInt(duration / 60 % 10)}:${parseInt(duration % 60 / 10)}${parseInt(duration % 60 % 10)}`
        slider.style.width = modulate(currentTime, [0, duration], [0, 100]) + '%'
      })
    }
  })
}

// 联动函数 例如modulate(50,[0,100],[500,1000]) => 750
function modulate(i, [a, b], [c, d]) {
  return (i - a) / (b - a) * (d - c) + c
}

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

/***/ "./src/perspective-link.html":
/*!***********************************!*\
  !*** ./src/perspective-link.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"icon\" type=\"image/png\" href=\"https://i.postimg.cc/ryf98PTw/favicon.png\">\n  <title>CGHK - Perspective</title>\n</head>\n<body>\n  <!-- Nav -->\n  <header class=\"header\">\n    <div class=\"nav\">\n      <div class=\"nav__wrapper\">\n        <a href=\"index.html\" class=\"nav__logo\"></a>\n        <div class=\"nav-links\">\n          <nav class=\"nav-links-one\">\n            <a href=\"private-policy.html\" class=\"nav-links-one__item\">Private Policy</a>\n            <a href=\"contact.html\" class=\"nav-links-one__item\">Contact Us</a>\n            <a href=\"media.html\" class=\"nav-links-one__item\">Media</a>\n            <a href=\"donate.html\" class=\"nav-links-one__item\">Donate</a>\n            <div class=\"language\">\n              <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n              <ul href=\"\" class=\"language__item\">\n                <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\"\n                alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a>\n          </li>\n              </ul>\n            </div>\n          </nav>\n          <nav class=\"nav-links-two\">\n            <div class=\"nav-links-two__item\">\n              <a href=\"about-CGHK.html\">About CGHK<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"about.html\">About</a></li>\n                <li><a href=\"about-CGHK.html\">Message of President</a></li>\n                <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n                <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n                <li><a href=\"about-parners.html\">Partners</a></li>\n                <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n                <li><a href=\"contact.html\">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"perspective.html?tab=Take on top news\">CGHK's Perspective<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n                <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n                <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"events.html\">Events<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"service.html\">Service<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"publication.html\">Publication</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service.html\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"membership.html\">Membership</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"\">E-Newsletter</a></li>\n                <li><a href=\"\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!-- 手机版nav -->\n    <div class=\"nav-mob\">\n      <a href=\"index.html\" class=\"nav-mob__logo\"><img src=\"" + __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg") + "\" alt=\"\"></a>\n      <div class=\"language\">\n        <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n        <ul href=\"\" class=\"language__item\">\n          <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a></li>\n        </ul>\n      </div>\n      <div class=\"menu\">\n        <button class=\"btn-stroke\"><i class=\"icon hamb\"></i> Menu</button>\n        <ul class=\"menu-list\">\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">About CGHK <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"about.html\">About</a></li>\n              <li><a href=\"about-CGHK.html\">Message of President</a></li>\n              <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n              <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n              <li><a href=\"about-parners.html\">Partners</a></li>\n              <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n              <li><a href=\"contact.html\">Contact Us</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">CGHK's Perspective <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n              <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n              <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Events <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Service <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"service.html\">E-Newsletter</a></li>\n              <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\"><a href=\"publication.html\">Publication</a></li>\n          <li class=\"menu-list__item\"><a href=\"membership.html\">Membership</a></li>\n          <hr class=\"divider\">\n          <li class=\"menu-list__item\"><a href=\"private-policy.html\">Private Policy</a></li>\n          <li class=\"menu-list__item\"><a href=\"contact.html\">Contact Us</a></li>\n          <li class=\"menu-list__item\"><a href=\"media.html\">Media</a></li>\n          <li class=\"menu-list__item\"><a href=\"donate.html\">Donate</a></li>\n        </ul>\n        <!-- Btn-Float -->\n        <button class=\"btn-float\"><i class=\"icon hamb\"></i></button>\n      </div>\n    </div>\n  </header>\n  <!-- Body -->\n  <article class=\"body\">\n    <!-- Aside -->\n    <aside class=\"aside\">\n      <nav class=\"aside-bread\">\n        <a href=\"index.html\" class=\"aside-bread__link\">Home</a>\n        <a href=\"perspective.html\" class=\"aside-bread__link\">CGHK's Perspective</a>\n      </nav>\n      <!-- <nav class=\"aside-nav\">\n        <a href=\"\" class=\"aside-nav__link aside-nav__link\">Message of President</a>\n        <a href=\"\" class=\"aside-nav__link aside-nav__link--current\">About</a>\n        <a href=\"\" class=\"aside-nav__link aside-nav__link\">Advisory Committee</a>\n        <a href=\"\" class=\"aside-nav__link aside-nav__link\">Commentators & Experts</a>\n        <a href=\"\" class=\"aside-nav__link aside-nav__link\">Staff</a>\n        <a href=\"\" class=\"aside-nav__link aside-nav__link\">Contact Us</a>\n      </nav> -->\n    </aside>\n    <!-- Content -->\n    <div class=\"content\">\n      <!-- Title -->\n      <h1 class=\"title content__title\"><img src=\"" + __webpack_require__(/*! ./images/dots-2.svg */ "./src/images/dots-2.svg") + "\" alt=\"\">CGHK's Perspective</h1>\n      <div class=\"content__main\">\n        <p class=\"content__p\">\n          The Foreign Policy Centre holds events to engage the public in debates around key international affairs\n          issues. These include seminars, conferences, keynote speeches and expert roundtables. The majority of events\n          will take place in London but the FPC will work with partners to hold events in other UK Cities and\n          internationally. To listen to recordings of previous events visit our Soundcloud page or click on past events.\n          For general enquiries about our events, please email: events@fpc.org.uk.\n        </p>\n        <p class=\"content__p\">\n          <div class=\"voice content-cards__item-voice\">\n            <audio preload=\"none\" src=\"https://res.wx.qq.com/voice/getvoice?mediaid=MzA4MzI3NDIwNF8yNjU1OTQyOTgw\"></audio>\n            <i class=\"icon icon-voice\"></i>\n            <p>Is there a 'Trump Doctrine in Foreign Policy'?</p>\n            <div class=\"voice__slider\">\n              <div class=\"voice__slider-progress\">\n                <div class=\"voice__slider-progress-oval\"></div>\n              </div>\n            </div>\n            <div class=\"flex-between\">\n              <span class=\"voice__slider-in\"></span>\n              <span class=\"voice__slider-out\"></span>\n            </div>\n          </div>\n        </p>\n        <p class=\"content__p\">\n          There are wars and rumors of war. And then there is Trump’s policy toward Iran, which fuels endless\n          speculation. Despite much public handwringing over the announcement that the Pentagon is sending an additional\n          1,000 troops to the Gulf region, there are no signs the U.S. plans to escalate the stand-off with Tehran.\n        </p>\n        <p class=\"content__p\">\n          <img src=\"https://picsum.photos/1100/700?random=1\" alt=\"\">\n        </p>\n        <p class=\"content__p\">\n          This week, fellow Heritage scholar Cully Stimson joins Elizabeth Slattery to highlight recent opinions. From\n          the Bladensburg Peace Cross to nondelegation to redistricting, things are finally getting interesting.\n          Elizabeth also chats with SCOTUS short lister Third Circuit Judge Thomas Hardiman.\n        </p>\n        <p class=\"content__p\">\n          The Foreign Policy Centre holds events to engage the public in debates around key international affairs\n          issues. These include seminars, conferences, keynote speeches and expert roundtables. The majority of events\n          will take place in London but the FPC will work with partners to hold events in other UK Cities and\n          internationally. To listen to recordings of previous events visit our Soundcloud page or click on past events.\n          For general enquiries about our events, please email: events@fpc.org.uk.\n        </p>\n        <p class=\"content__p\">\n          The Foreign Policy Centre holds events to engage the public in debates around key international affairs\n          issues. These include seminars, conferences, keynote speeches and expert roundtables. The majority of events\n          will take place in London but the FPC will work with partners to hold events in other UK Cities and\n          internationally. To listen to recordings of previous events visit our Soundcloud page or click on past events.\n          For general enquiries about our events, please email: events@fpc.org.uk.\n        </p>\n      </div>\n    </div>\n  </article>\n  <!-- Footer -->\n  <footer class=\"footer\">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n</body>\n</html>";

/***/ })

/******/ });
//# sourceMappingURL=perspective-link.bundle.js.map