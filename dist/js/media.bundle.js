!function(n){var e={};function a(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)a.d(t,i,function(e){return n[e]}.bind(null,i));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=81)}({0:function(n,e,a){n.exports=a.p+"images/43caf8cea1ed6ff67f6f33078415e9d9.svg"},1:function(n,e,a){n.exports=a.p+"images/9fea14d987f943eb8863b933fd14b7d1.svg"},2:function(n,e,a){n.exports=a.p+"images/5a2b37e3ad53de87bd3eb9df3587bf0b.svg"},3:function(n,e){document.querySelectorAll(".menu-list__sublist").forEach(n=>{const e=n.parentNode,a=e.querySelector(".arrow-down");e.addEventListener("touchstart",function(){n.classList.toggle("menu-list__sublist--active"),a.classList.toggle("arrow-down--inactive")})});const a=document.querySelector("button"),t=document.querySelector(".menu-list");a.addEventListener("touchend",()=>{t.classList.toggle("menu-list--active",!0)}),document.addEventListener("touchstart",n=>{const{clientX:e,clientY:a}=n.touches[0],{width:i}=t.getBoundingClientRect();e>i&&t.classList.toggle("menu-list--active",!1)})},4:function(n,e){const a=document.querySelector(".btn-float"),t=document.querySelector(".menu-list");window.addEventListener("scroll",n=>{window.scrollY>200?(a.style.filter="blur(0)",a.style.transform="scale(1)",a.style.top="30px"):(a.style.filter="blur(20px)",a.style.transform="scale(0)",a.style.top="60px")}),a.addEventListener("touchstart",()=>{t.classList.toggle("menu-list--active",!0)})},6:function(n,e,a){n.exports=a.p+"images/cdbd071073466ad55a79c381fccfa0db.svg"},81:function(n,e,a){"use strict";a.r(e);a(82),a(83),a(3),a(4)},82:function(n,e,a){n.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="icon" type="image/png" href="https://i.postimg.cc/ryf98PTw/favicon.png">\n  <title>CGHK - Media</title>\n</head>\n<body>\n  \x3c!-- Nav --\x3e\n  <header class="header">\n    <div class="nav">\n      <div class="nav__wrapper">\n        <a href="index.html" class="nav__logo"></a>\n        <div class="nav-links">\n          <nav class="nav-links-one">\n            <a href="private-policy.html" class="nav-links-one__item">Private Policy</a>\n            <a href="contact.html" class="nav-links-one__item">Contact Us</a>\n            <a href="media.html" class="nav-links-one__item">Media</a>\n            <a href="donate.html" class="nav-links-one__item">Donate</a>\n            <div class="language">\n              <img class="language__selected" src="'+a(0)+'" alt="">\n              <ul href="" class="language__item">\n                <li class="language__en"><img title="English" width="13px" src="'+a(0)+'" alt=""></li>\n                <li class="language__zh"><img title="中文" width="13px" src="'+a(1)+'" alt=""></li>\n              </ul>\n            </div>\n          </nav>\n          <nav class="nav-links-two">\n            <div class="nav-links-two__item">\n              <a href="about-CGHK.html">About CGHK<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="about.html">About</a></li>\n                <li><a href="about-CGHK.html">Message of President</a></li>\n                <li><a href="about-committee.html">Advisory Committee</a></li>\n                <li><a href="about-committee.html">Commentators & Experts</a></li>\n                <li><a href="about-committee.html">Partners</a></li>\n                <li><a href="about-committee.html">Staff and Interships</a></li>\n                <li><a href="contact.html">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="perspective.html">CGHK\'s Perspective</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="events.html">Events</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="service.html">Service<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service-research.html">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="publication.html">Publication</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service.html">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="membership.html">Membership</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">E-Newsletter</a></li>\n                <li><a href="">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    \x3c!-- 手机版nav --\x3e\n    <div class="nav-mob">\n      <a href="index.html" class="nav-mob__logo"><img src="'+a(2)+'" alt=""></a>\n      <div class="language">\n        <img class="language__selected" src="'+a(0)+'" alt="">\n        <ul href="" class="language__item">\n          <li class="language__en"><a href=""><img title="English" width="13px" src="'+a(0)+'"\n                alt=""></a></li>\n          <li class="language__zh"><a href=""><img title="中文" width="13px" src="'+a(1)+'" alt=""></a>\n          </li>\n        </ul>\n      </div>\n      <div class="menu">\n        <button class="btn-stroke"><i class="icon hamb"></i> Menu</button>\n        <ul class="menu-list">\n          <li class="menu-list__item">\n            <div class="flex-between">About CGHK <i class="icon arrow-down arrow-down--inactive"></i></div>\n            <ul class="menu-list__sublist">\n              <li><a href="about.html">About</a></li>\n              <li><a href="about-CGHK.html">Message of President</a></li>\n              <li><a href="about-committee.html">Advisory Committee</a></li>\n              <li><a href="about-committee.html">Commentators & Experts</a></li>\n              <li><a href="about-committee.html">Partners</a></li>\n              <li><a href="about-committee.html">Staff and Interships</a></li>\n              <li><a href="contact.html">Contact Us</a></li>\n            </ul>\n          </li>\n          <li class="menu-list__item"><a href="perspective.html">CGHK\'s Perspective</a></li>\n          <li class="menu-list__item"><a href="events.html">Events</a></li>\n          <li class="menu-list__item">\n            <div class="flex-between">Service <i class="icon arrow-down arrow-down--inactive"></i></div>\n            <ul class="menu-list__sublist">\n              <li><a href="service.html">E-Newsletter</a></li>\n              <li><a href="service-research.html">Policy and Market Research</a></li>\n            </ul>\n          </li>\n          <li class="menu-list__item"><a href="publication.html">Publication</a></li>\n          <li class="menu-list__item"><a href="membership.html">Membership</a></li>\n          <hr class="divider">\n          <li class="menu-list__item"><a href="private-policy.html">Private Policy</a></li>\n          <li class="menu-list__item"><a href="contact.html">Contact Us</a></li>\n          <li class="menu-list__item"><a href="media.html">Media</a></li>\n          <li class="menu-list__item"><a href="donate.html">Donate</a></li>\n        </ul>\n        \x3c!-- Btn-Float --\x3e\n        <button class="btn-float"><i class="icon hamb"></i></button>\n      </div>\n    </div>\n  </header>\n  \x3c!-- Body --\x3e\n  <article class="body">\n    \x3c!-- Aside --\x3e\n    <aside class="aside">\n      <nav class="aside-bread">\n        <a href="index.html" class="aside-bread__link">Home</a>\n        <a href="" class="aside-bread__link">Media</a>\n      </nav>\n    </aside>\n    \x3c!-- Content --\x3e\n    <div class="content">\n      \x3c!-- Title --\x3e\n      <h1 class="title content__title"><img src="'+a(6)+'" alt="">Media</h1>\n\n      <p class="content__caption">\n        The Foreign Policy Centre holds events to engage the public in debates around key international affairs issues.\n        These include seminars, conferences, keynote speeches and expert roundtables. The majority of events will take\n        place in London but the FPC will work with partners to hold events in other UK Cities and internationally. To\n        listen to recordings of previous events visit our Soundcloud page or click on past events. For general enquiries\n        about our events, please email: events@fpc.org.uk.\n      </p>\n\n      <div class="content-cards">\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n        <a href="" class="content-cards__item">\n          <div class="content-cards__item-img">\n            <figure></figure>\n          </div>\n          <div class="content-cards__item-content">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          \x3c!-- <div class="content-cards__item-info">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div> --\x3e\n        </a>\n      </div>\n\n      <div class="loading">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n  </article>\n  \x3c!-- Footer --\x3e\n  <footer class="footer">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n</body>\n</html>'},83:function(n,e,a){}});