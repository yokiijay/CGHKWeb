!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=40)}({0:function(e,n,t){e.exports=t.p+"images/43caf8cea1ed6ff67f6f33078415e9d9.svg"},1:function(e,n,t){e.exports=t.p+"images/9fea14d987f943eb8863b933fd14b7d1.svg"},2:function(e,n,t){e.exports=t.p+"images/5a2b37e3ad53de87bd3eb9df3587bf0b.svg"},3:function(e,n){document.querySelectorAll(".menu-list__sublist").forEach(e=>{const n=e.parentNode,t=n.querySelector(".arrow-down");n.addEventListener("touchstart",function(){e.classList.toggle("menu-list__sublist--active"),t.classList.toggle("arrow-down--inactive")})});const t=document.querySelector("button"),a=document.querySelector(".menu-list");t.addEventListener("touchend",()=>{a.classList.toggle("menu-list--active",!0)}),document.addEventListener("touchstart",e=>{const{clientX:n,clientY:t}=e.touches[0],{width:i}=a.getBoundingClientRect();n>i&&a.classList.toggle("menu-list--active",!1)})},4:function(e,n){const t=document.querySelector(".btn-float"),a=document.querySelector(".menu-list");window.addEventListener("scroll",e=>{window.scrollY>200?(t.style.filter="blur(0)",t.style.transform="scale(1)",t.style.top="30px"):(t.style.filter="blur(20px)",t.style.transform="scale(0)",t.style.top="60px")}),t.addEventListener("touchstart",()=>{a.classList.toggle("menu-list--active",!0)})},40:function(e,n,t){"use strict";t.r(n);t(41),t(42),t(3),t(4)},41:function(e,n,t){e.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="icon" type="image/png" href="https://i.postimg.cc/ryf98PTw/favicon.png">\n  <title>CGHK - About CGHK</title>\n</head>\n<body>\n  \x3c!-- Nav --\x3e\n  <header class="header">\n    <div class="nav">\n      <div class="nav__wrapper">\n        <a href="index.html" class="nav__logo"></a>\n        <div class="nav-links">\n          <nav class="nav-links-one">\n            <a href="private-policy.html" class="nav-links-one__item">Private Policy</a>\n            <a href="contact.html" class="nav-links-one__item">Contact Us</a>\n            <a href="media.html" class="nav-links-one__item">Media</a>\n            <a href="donate.html" class="nav-links-one__item">Donate</a>\n            <div class="language">\n              <img class="language__selected" src="'+t(0)+'" alt="">\n              <ul href="" class="language__item">\n                <li class="language__en"><img title="English" width="13px" src="'+t(0)+'" alt=""></li>\n                <li class="language__zh"><img title="中文" width="13px" src="'+t(1)+'" alt=""></li>\n              </ul>\n            </div>\n          </nav>\n          <nav class="nav-links-two">\n            <div class="nav-links-two__item">\n              <a href="about-CGHK.html">About CGHK<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="about.html">About</a></li>\n                <li><a href="about-CGHK.html">Message of President</a></li>\n                <li><a href="about-committee.html">Advisory Committee</a></li>\n                <li><a href="about-committee.html">Commentators & Experts</a></li>\n                <li><a href="about-committee.html">Partners</a></li>\n                <li><a href="about-committee.html">Staff and Interships</a></li>\n                <li><a href="contact.html">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="perspective.html">CGHK\'s Perspective</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="events.html">Events</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="service.html">Service<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service-research.html">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="publication.html">Publication</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service.html">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="membership.html">Membership</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">E-Newsletter</a></li>\n                <li><a href="">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    \x3c!-- 手机版nav --\x3e\n    <div class="nav-mob">\n      <a href="index.html" class="nav-mob__logo"><img src="'+t(2)+'" alt=""></a>\n      <div class="language">\n        <img class="language__selected" src="'+t(0)+'" alt="">\n        <ul href="" class="language__item">\n          <li class="language__en"><a href=""><img title="English" width="13px" src="'+t(0)+'"\n                alt=""></a></li>\n          <li class="language__zh"><a href=""><img title="中文" width="13px" src="'+t(1)+'" alt=""></a>\n          </li>\n        </ul>\n      </div>\n      <div class="menu">\n        <button class="btn-stroke"><i class="icon hamb"></i> Menu</button>\n        <ul class="menu-list">\n          <li class="menu-list__item">\n            <div class="flex-between">About CGHK <i class="icon arrow-down arrow-down--inactive"></i></div>\n            <ul class="menu-list__sublist">\n              <li><a href="about.html">About</a></li>\n              <li><a href="about-CGHK.html">Message of President</a></li>\n              <li><a href="about-committee.html">Advisory Committee</a></li>\n              <li><a href="about-committee.html">Commentators & Experts</a></li>\n              <li><a href="about-committee.html">Partners</a></li>\n              <li><a href="about-committee.html">Staff and Interships</a></li>\n              <li><a href="contact.html">Contact Us</a></li>\n            </ul>\n          </li>\n          <li class="menu-list__item"><a href="perspective.html">CGHK\'s Perspective</a></li>\n          <li class="menu-list__item"><a href="events.html">Events</a></li>\n          <li class="menu-list__item">\n            <div class="flex-between">Service <i class="icon arrow-down arrow-down--inactive"></i></div>\n            <ul class="menu-list__sublist">\n              <li><a href="service.html">E-Newsletter</a></li>\n              <li><a href="service-research.html">Policy and Market Research</a></li>\n            </ul>\n          </li>\n          <li class="menu-list__item"><a href="publication.html">Publication</a></li>\n          <li class="menu-list__item"><a href="membership.html">Membership</a></li>\n          <hr class="divider">\n          <li class="menu-list__item"><a href="private-policy.html">Private Policy</a></li>\n          <li class="menu-list__item"><a href="contact.html">Contact Us</a></li>\n          <li class="menu-list__item"><a href="media.html">Media</a></li>\n          <li class="menu-list__item"><a href="donate.html">Donate</a></li>\n        </ul>\n        \x3c!-- Btn-Float --\x3e\n        <button class="btn-float"><i class="icon hamb"></i></button>\n      </div>\n    </div>\n  </header>\n  \x3c!-- Body --\x3e\n  <article class="body">\n    \x3c!-- Aside --\x3e\n    <aside class="aside">\n      <nav class="aside-bread">\n        <a href="index.html" class="aside-bread__link">Home</a>\n        <a href="about-CGHK.html" class="aside-bread__link">About CGHK</a>\n      </nav>\n      <nav class="aside-nav">\n        <a href="about.html" class="aside-nav__link aside-nav__link">About</a>\n        <a href="about-CGHK.html" class="aside-nav__link aside-nav__link--current">Message of President</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Advisory Committee</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Commentators & Experts</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Partners</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Staff and Interships</a>\n        <a href="contact.html" class="aside-nav__link aside-nav__link">Contact Us</a>\n      </nav>\n    </aside>\n    \x3c!-- Content --\x3e\n    <div class="content">\n      \x3c!-- Title --\x3e\n      <h1 class="title content__title"><img src="'+t(6)+'" alt="">Message of President</h1>\n      <div class="content__headline">\n        <span>Prof. Dr. Peter Qiu, </span>\n        <h2>Applauds EPA’s Replacement of the Clean Power Plan</h2>\n        <div class="content__headline-pic"><figure></figure></div>\n      </div>\n\n      \x3c!-- 手机版message --\x3e\n      <div class="message-mob">\n        <div class="message-mob__photo"><figure></figure></div>\n        <span>Prof. Dr. Peter Qiu, </span>\n        <h2>Applauds EPA’s Replacement of the Clean Power Plan</h2>\n      </div>\n      \n      <div class="content__main">\n        <p class="content__p">\n          The Foreign Policy Centre holds events to engage the public in debates around key international affairs issues.\n          These include seminars, conferences, keynote speeches and expert roundtables. The majority of events will take\n          place in London but the FPC will work with partners to hold events in other UK Cities and internationally. To\n          listen to recordings of previous events visit our Soundcloud page or click on past events. For general enquiries\n          about our events, please email: events@fpc.org.uk.\n        </p>\n        <p class="content__p">\n          There are wars and rumors of war. And then there is Trump’s policy toward Iran, which fuels endless\n          speculation. Despite much public handwringing over the announcement that the Pentagon is sending an additional\n          1,000 troops to the Gulf region, there are no signs the U.S. plans to escalate the stand-off with Tehran.\n        </p>\n        <p class="content__p">\n          This week, fellow Heritage scholar Cully Stimson joins Elizabeth Slattery to highlight recent opinions. From\n          the Bladensburg Peace Cross to nondelegation to redistricting, things are finally getting interesting.\n          Elizabeth also chats with SCOTUS short lister Third Circuit Judge Thomas Hardiman.\n        </p>\n        <p class="content__p">\n          The Foreign Policy Centre holds events to engage the public in debates around key international affairs\n          issues. These include seminars, conferences, keynote speeches and expert roundtables. The majority of events\n          will take place in London but the FPC will work with partners to hold events in other UK Cities and\n          internationally. To listen to recordings of previous events visit our Soundcloud page or click on past events.\n          For general enquiries about our events, please email: events@fpc.org.uk.\n        </p>\n        <p class="content__p">\n          The Foreign Policy Centre holds events to engage the public in debates around key international affairs\n          issues. These include seminars, conferences, keynote speeches and expert roundtables. The majority of events\n          will take place in London but the FPC will work with partners to hold events in other UK Cities and\n          internationally. To listen to recordings of previous events visit our Soundcloud page or click on past events.\n          For general enquiries about our events, please email: events@fpc.org.uk.\n        </p>\n      </div>\n    </div>\n  </article>\n  \x3c!-- Footer --\x3e\n  <footer class="footer">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n</body>\n</html>'},42:function(e,n,t){},6:function(e,n,t){e.exports=t.p+"images/cdbd071073466ad55a79c381fccfa0db.svg"}});