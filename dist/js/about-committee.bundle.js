!function(n){var e={};function a(i){if(e[i])return e[i].exports;var t=e[i]={i:i,l:!1,exports:{}};return n[i].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=e,a.d=function(n,e,i){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)a.d(i,t,function(e){return n[e]}.bind(null,t));return i},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=17)}([function(n,e,a){n.exports=a.p+"images/43caf8cea1ed6ff67f6f33078415e9d9.svg"},function(n,e,a){n.exports=a.p+"images/9fea14d987f943eb8863b933fd14b7d1.svg"},function(n,e,a){n.exports=a.p+"images/cdbd071073466ad55a79c381fccfa0db.svg"},,,,,,,,,,,,,,,function(n,e,a){"use strict";a.r(e);a(18),a(19);const i=document.querySelector(".content-cards");for(let n=0;n<21;n++)fetch("https://uinames.com/api/?ext").then(n=>n.json()).then(n=>{console.log(n);const{name:e,photo:a}=n,t=`\n      <div class="content-cards__item">\n        <a href='' class="content-cards__item-img">\n          <figure style="background-image: url(${a})"></figure>\n          <div class="overlay">${e}</div>\n        </a>\n        <h2>Subscribe to our weekly podcast</h2>\n      </div>\n    `;i.innerHTML+=t})},function(n,e,a){n.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="icon" type="image/png" href="https://i.postimg.cc/ryf98PTw/favicon.png">\n  <title>CGHK - About Committee</title>\n</head>\n<body>\n  \x3c!-- Nav --\x3e\n  <header class="header">\n    <div class="nav">\n      <div class="nav__wrapper">\n        <a href="index.html" class="nav__logo"></a>\n        <div class="nav-links">\n          <nav class="nav-links-one">\n            <a href="private-policy.html" class="nav-links-one__item">Private Policy</a>\n            <a href="contact.html" class="nav-links-one__item">Contact Us</a>\n            <a href="media.html" class="nav-links-one__item">Media</a>\n            <a href="donate.html" class="nav-links-one__item">Donate</a>\n            <div class="language">\n              <img class="language__selected" src="'+a(0)+'" alt="">\n              <ul href="" class="language__item">\n                <li class="language__en"><img title="English" width="13px" src="'+a(0)+'" alt=""></li>\n                <li class="language__zh"><img title="中文" width="13px" src="'+a(1)+'" alt=""></li>\n              </ul>\n            </div>\n          </nav>\n          <nav class="nav-links-two">\n            <div class="nav-links-two__item">\n              <a href="about-CGHK.html">About CGHK<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="about.html">About</a></li>\n                <li><a href="about-CGHK.html">Message of President</a></li>\n                <li><a href="about-committee.html">Advisory Committee</a></li>\n                <li><a href="about-committee.html">Commentators & Experts</a></li>\n                <li><a href="about-committee.html">Partners</a></li>\n                <li><a href="about-committee.html">Staff and Interships</a></li>\n                <li><a href="contact.html">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="perspective.html">CGHK\'s Perspective</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="events.html">Events</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">Message of President</a></li>\n                <li><a href="">About</a></li>\n                <li><a href="">Advisory Committee</a></li>\n                <li><a href="">Commentators & Experts</a></li>\n                <li><a href="">Staff</a></li>\n                <li><a href="">Contact Us</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="service.html">Service<i class="icon arrow-down"></i></a>\n              <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service-research.html">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class="nav-links-two__item">\n              <a href="publication.html">Publication</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="service.html">E-Newsletter</a></li>\n                <li><a href="service.html">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n            <div class="nav-links-two__item">\n              <a href="membership.html">Membership</a>\n              \x3c!-- <ul class="nav-links-two__subnav">\n                <li><a href="">E-Newsletter</a></li>\n                <li><a href="">Policy and Market Research</a></li>\n              </ul> --\x3e\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </header>\n  \x3c!-- Body --\x3e\n  <article class="body">\n    \x3c!-- Aside --\x3e\n    <aside class="aside">\n      <nav class="aside-bread">\n        <a href="index.html" class="aside-bread__link">Home</a>\n        <a href="" class="aside-bread__link">Advisory Committee</a>\n      </nav>\n      <nav class="aside-nav">\n        <a href="about.html" class="aside-nav__link aside-nav__link">About</a>\n        <a href="about-CGHK.html" class="aside-nav__link aside-nav__link">Message of President</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link--current">Advisory Committee</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Commentators & Experts</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Partners</a>\n        <a href="about-committee.html" class="aside-nav__link aside-nav__link">Staff and Interships</a>\n        <a href="contact.html" class="aside-nav__link aside-nav__link">Contact Us</a>\n      </nav>\n    </aside>\n    \x3c!-- Content --\x3e\n    <div class="content">\n      \x3c!-- Title --\x3e\n      <h1 class="title content__title"><img src="'+a(2)+'" alt="">Advisory Committee</h1>\n\n      <section class="content-cards">\n        \x3c!-- items --\x3e\n        \x3c!-- <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay">Angela Perez</div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay">Douglas Morris</div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay">Kyle Crawford</div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Subscribe to our weekly podcast</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Here’s What Congress Can Do to Cut Waste and Debt</h2>\n        </div>\n        <div class="content-cards__item">\n          <a href=\'\' class="content-cards__item-img">\n            <figure></figure>\n            <div class="overlay"></div>\n          </a>\n          <h2>Celebrating 100 Years of Women’s Suffrage</h2>\n        </div> --\x3e\n\n        <div class="loading">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </section>\n    </div>\n  </article>\n  \x3c!-- Footer --\x3e\n  <footer class="footer">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n</body>\n</html>'},function(n,e,a){}]);