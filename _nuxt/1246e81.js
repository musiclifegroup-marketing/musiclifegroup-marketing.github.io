(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(t,e,l){"use strict";var n={name:"Nav",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},o=l(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"site-header header-one "},[l("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky "+(t.sticky?"stricked-menu stricky-fixed":"")},[l("div",{staticClass:"container clearfix"},[l("div",{staticClass:"logo-box clearfix"},[t._m(0),t._v(" "),l("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"}},[l("span",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})])]),t._v(" "),l("div",{class:"main-navigation "+(t.mobileToggle?"showen":""),style:"display: "+(t.mobileToggle?"block":"none")},[l("ul",{staticClass:" navigation-box one-page-scroll-menu "},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),l("li",{staticClass:"scrollToLink"},[l("a",{attrs:{href:"#blog"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"sub-menu",staticStyle:{display:"block"}},[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("img",{staticClass:"main-logo",attrs:{src:"/images/logo-light.png",width:"66",alt:"Awesome Image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"current scrollToLink"},[e("a",{attrs:{href:"#home"}},[this._v("主頁")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"#services"}},[this._v("關於我們")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"#pricing"}},[this._v("Pricing")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"#testimonials"}},[this._v("Testimonials")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"scrollToLink"},[e("a",{attrs:{href:"#contact"}},[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-side-box"},[e("a",{staticClass:"thm-btn header-one__btn",attrs:{href:"#"}},[this._v("Contact")])])}],!1,null,"0dde7ed7",null);e.a=component.exports},149:function(t,e,l){"use strict";var n={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},o=l(19),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: "+(this.scrollBtn?"inline":"none"),attrs:{href:"#"},on:{click:this.scrollTop}},[e("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"site-footer"},[l("div",{staticClass:"site-footer__upper"},[l("div",{staticClass:"container"},[l("div",{staticClass:"site-footer__5-col-wrap"},[l("div",{staticClass:"footer-widget footer-widget__about"},[l("a",{staticClass:"footer-widget__logo",attrs:{href:"/"}},[l("img",{attrs:{width:"66",src:"/images/logo-dark.png",alt:"Awesome Image"}})])]),t._v(" "),l("div",{staticClass:"footer-widget"},[l("h3",{staticClass:"footer-widget__title"},[t._v("Explore")]),t._v(" "),l("ul",{staticClass:"footer-widget__links"},[l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("About")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Our Team")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Features")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Blog")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("How It Works")])])])]),t._v(" "),l("div",{staticClass:"footer-widget"},[l("h3",{staticClass:"footer-widget__title"},[t._v("Services")]),t._v(" "),l("ul",{staticClass:"footer-widget__links"},[l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Speed Optimization")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Marketing Analysis")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("SEO and Backlinks")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Content Marketing")])])])]),t._v(" "),l("div",{staticClass:"footer-widget"},[l("h3",{staticClass:"footer-widget__title"},[t._v("Links")]),t._v(" "),l("ul",{staticClass:"footer-widget__links"},[l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Help")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Support")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Clients")])]),t._v(" "),l("li",{staticClass:"footer-widget__links-item"},[l("a",{staticClass:"footer-widget__links-link",attrs:{href:"#"}},[t._v("Contact")])])])]),t._v(" "),l("div",{staticClass:"footer-widget footer-widget__subscribe"},[l("h3",{staticClass:"footer-widget__title"},[t._v("Subscribe")]),t._v(" "),l("form",{staticClass:"footer-widget__subscribe-form",attrs:{action:"#"}},[l("input",{attrs:{type:"text",name:"email",placeholder:"Email address"}}),t._v(" "),l("button",{attrs:{type:"submit"}},[l("i",{staticClass:"fa fa-location-arrow"})])])])])])]),t._v(" "),l("div",{staticClass:"site-footer__lower"},[l("div",{staticClass:"container"},[l("div",{staticClass:"inner-container"},[l("p",{staticClass:"site-footer__copytext"},[t._v("© copyright 2020 by "),l("a",{attrs:{href:"#"}},[t._v("Layerdrops.com")])]),t._v(" "),l("div",{staticClass:"site-footer__social"},[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook-square"})]),t._v(" "),l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})]),t._v(" "),l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-instagram"})]),t._v(" "),l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-pinterest-p"})])])])])])])}],!1,null,"0c562ce8",null);e.a=component.exports},150:function(t,e,l){"use strict";var n={name:"CallToAction"},o=l(19),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"cta-one",attrs:{id:"contact"}},[e("div",{staticClass:"container text-center "},[e("div",{staticClass:"block-title"},[e("h2",{staticClass:"block-title__title light-text-color"},[this._v("聯絡我們")])]),this._v(" "),e("a",{staticClass:"thm-btn cta-one__btn",attrs:{href:"https://www.facebook.com/生命之樂-Music-Life-Group-101231378718871/",target:"_blank"}},[this._v("Facebook")])])])}],!1,null,"18be8b06",null);e.a=component.exports},151:function(t,e,l){var content=l(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(75).default)("0bf4c33e",content,!0,{sourceMap:!1})},152:function(t,e,l){var content=l(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(75).default)("c937b860",content,!0,{sourceMap:!1})},156:function(t,e,l){"use strict";var n=l(151);l.n(n).a},157:function(t,e,l){(e=l(74)(!1)).push([t.i,"#pricing[data-v-c4aff0ec]{height:5400px}.row[data-v-c4aff0ec]{display:flex}img[data-v-c4aff0ec]{z-index:20}",""]),t.exports=e},159:function(t,e,l){"use strict";var n=l(152);l.n(n).a},160:function(t,e,l){(e=l(74)(!1)).push([t.i,".testimonials-one__image-block.swiper-container[data-v-6e14f0bd]{height:500px}",""]),t.exports=e},164:function(t,e,l){"use strict";l.r(e);var n=l(148),o={name:"Banner"},c=l(19),r=Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"banner-one",attrs:{id:"home"}},[l("span",{staticClass:"banner-one__shape-1"}),t._v(" "),l("span",{staticClass:"banner-one__shape-2"}),t._v(" "),l("span",{staticClass:"banner-one__shape-3"}),t._v(" "),l("span",{staticClass:"banner-one__shape-4"}),t._v(" "),l("span",{staticClass:"banner-one__shape-5"}),t._v(" "),l("span",{staticClass:"banner-one__shape-6"}),t._v(" "),l("img",{staticClass:"banner-one__globe",attrs:{src:"/images/globe-1-1.png",alt:"Awesome Image"}}),t._v(" "),l("img",{staticClass:"banner-one__rocket",attrs:{src:"/images/rocket-1-1.png",alt:"Awesome Image"}}),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"banner-one__content"},[l("h3",{staticClass:"banner-one__title"},[t._v("\n            生命之樂\n            "),l("br"),t._v("\n            Music Life Group\n          ")])])])])])])}],!1,null,"cc2d9fd2",null).exports,_=l(149),v={name:"Service"},d=Object(c.a)(v,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"service-one",attrs:{id:"services"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"block-title text-center"},[l("h2",{staticClass:"block-title__title black-text-color"},[t._v("服務範疇")])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4"},[l("div",{staticClass:"service-one__single"},[l("span",{staticClass:"service-one__dot-1"}),t._v(" "),l("span",{staticClass:"service-one__dot-2"}),t._v(" "),l("span",{staticClass:"service-one__dot-3"}),t._v(" "),l("div",{staticClass:"service-one__icon"},[l("i",{staticClass:"lums-icon-laptop"})]),t._v(" "),l("h3",{staticClass:"service-one__title"},[l("div",[t._v("個人作曲")])]),t._v(" "),l("ul",[l("li",[t._v("婚姻")]),t._v(" "),l("li",[t._v("小寶寶出生")]),t._v(" "),l("li",[t._v("新品牌誕生")]),t._v(" "),l("li",[t._v("散水禮")])])])]),t._v(" "),l("div",{staticClass:"col-lg-4"},[l("div",{staticClass:"service-one__single"},[l("span",{staticClass:"service-one__dot-1"}),t._v(" "),l("span",{staticClass:"service-one__dot-2"}),t._v(" "),l("span",{staticClass:"service-one__dot-3"}),t._v(" "),l("div",{staticClass:"service-one__icon"},[l("i",{staticClass:"lums-icon-presentation"})]),t._v(" "),l("h3",{staticClass:"service-one__title"},[l("div",[t._v("企業作曲")])]),t._v(" "),l("ul",[l("li",[t._v("廣告音樂")]),t._v(" "),l("li",[t._v("電影配樂")])])])]),t._v(" "),l("div",{staticClass:"col-lg-4"},[l("div",{staticClass:"service-one__single"},[l("span",{staticClass:"service-one__dot-1"}),t._v(" "),l("span",{staticClass:"service-one__dot-2"}),t._v(" "),l("span",{staticClass:"service-one__dot-3"}),t._v(" "),l("div",{staticClass:"service-one__icon"},[l("i",{staticClass:"lums-icon-target"})]),t._v(" "),l("h3",{staticClass:"service-one__title"},[l("div",[t._v("\n              音樂課程\n            ")])]),t._v(" "),l("ul",[l("li",[t._v("鋼琴保證班")]),t._v(" "),l("li",[t._v("作曲保證班")])])])])])])])}],!1,null,"36af888f",null).exports,m={name:"CallToActionThree"},C=Object(c.a)(m,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"cta-three"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"cta-three__image"},[l("img",{attrs:{src:"/images/angels.png",alt:"Awesome Image"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"cta-three__content"},[l("div",{staticClass:"block-title text-left"},[l("h2",{staticClass:"block-title__title black-text-color"},[t._v("\n              品牌概念\n            ")])]),t._v(" "),l("p",{staticClass:"cta-three__text"},[t._v("\n            我們是一間實務的音樂創作機構，通過為你作曲，以音樂面對人生。我們的主題有四個天使，包括誕生之歌\n            - Angel O、成熟旅途 - Angel Dot、挑戰命運 - 16th angel、天使之歌 -\n            Angel Pitch。\n          ")]),t._v(" "),l("ul",{staticClass:"cta-three__list"},[l("li",{staticClass:"cta-three__list-item"},[l("i",{staticClass:"fa fa-check"}),t._v("誕生之歌 - Angel O -\n              象徵一個人或一件事情的開始\n            ")]),t._v(" "),l("li",{staticClass:"cta-three__list-item"},[l("i",{staticClass:"fa fa-check"}),t._v("成熟旅途 - Angel Dot -\n              象徵每一個階段的轉變\n            ")]),t._v(" "),l("li",{staticClass:"cta-three__list-item"},[l("i",{staticClass:"fa fa-check"}),t._v("挑戰命運 - 16th angel -\n              象徵正向面對人生不同的挑戰\n            ")]),t._v(" "),l("li",{staticClass:"cta-three__list-item"},[l("i",{staticClass:"fa fa-check"}),t._v("天使之歌 - Angel Pitch -\n              象徵一件事情的終結\n            ")])])])])])])])}],!1,null,"482aeeed",null).exports,f={name:"CallToActionTwo"},h=Object(c.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"cta-two"},[l("img",{staticClass:"cta-two__moc",attrs:{src:"/images/cta-moc-1-1.png",alt:"Awesome Image"}}),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"cta-two__block"},[l("div",{staticClass:"block-title text-left"},[l("h2",{staticClass:"block-title__title black-text-color"},[t._v("Discover more new "),l("br"),t._v(" features")])]),t._v(" "),l("div",{staticClass:"cta-two__single"},[l("div",{staticClass:"cta-two__icon"},[l("i",{staticClass:"lums-icon-strategy"})]),t._v(" "),l("div",{staticClass:"cta-two__content"},[l("h3",{staticClass:"cta-two__title"},[t._v("Business Strategy")]),t._v(" "),l("p",{staticClass:"cta-two__text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make.")])])]),t._v(" "),l("div",{staticClass:"cta-two__single"},[l("div",{staticClass:"cta-two__icon"},[l("i",{staticClass:"lums-icon-training"})]),t._v(" "),l("div",{staticClass:"cta-two__content"},[l("h3",{staticClass:"cta-two__title"},[t._v("Business Strategy")]),t._v(" "),l("p",{staticClass:"cta-two__text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make.")])])]),t._v(" "),l("a",{staticClass:"thm-btn cta-two__btn",attrs:{href:"#"}},[t._v("Learn More")])])])])])])}],!1,null,"01bb2317",null).exports,w={name:"Pricing"},k=(l(156),Object(c.a)(w,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"pricing-one",attrs:{id:"pricing"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"block-title text-center"},[e("h2",{staticClass:"block-title__title black-text-color"},[this._v("\n        音樂課程內容\n      ")])]),this._v(" "),e("div",{staticClass:"row"},[e("img",{attrs:{src:"/images/box1.png"}}),this._v(" "),e("img",{attrs:{src:"/images/box2.png"}}),this._v(" "),e("img",{attrs:{src:"/images/box3.png"}})])])])}],!1,null,"c4aff0ec",null).exports),x=l(154),y=(l(155),{name:"Testimonial",components:{Swiper:x.Swiper,SwiperSlide:x.SwiperSlide},directives:{swiper:x.directive},data:function(){return{swiperOptions:{slidesPerView:1,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}},swiperOptionsVerticle:{direction:"vertical",autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}}}}),A=(l(159),Object(c.a)(y,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"testimonials-one",attrs:{id:"testimonials"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"testimonials-one__image-block swiper-container"},[l("div",{staticClass:"swiper-wrapper",attrs:{id:"sync2"}},[l("swiper",{attrs:{options:t.swiperOptionsVerticle}},[l("swiper-slide",[l("div",{staticClass:"item clearfix"},[l("div",{staticClass:"testimonials-one__image"},[l("img",{staticClass:"testimonials-one__thumb",attrs:{src:"/images/testi-1-1.jpg",alt:"Awesome Image"}}),t._v(" "),l("div",{staticClass:"testimonials-one__qoute"},[l("img",{attrs:{src:"/images/testi-qoute-1-1.png",alt:"Awesome Image"}})])])])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item clearfix"},[l("div",{staticClass:"testimonials-one__image"},[l("img",{staticClass:"testimonials-one__thumb",attrs:{src:"/images/testi-1-2.jpg",alt:"Awesome Image"}}),t._v(" "),l("div",{staticClass:"testimonials-one__qoute"},[l("img",{attrs:{src:"/images/testi-qoute-1-1.png",alt:"Awesome Image"}})])])])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item clearfix"},[l("div",{staticClass:"testimonials-one__image"},[l("img",{staticClass:"testimonials-one__thumb",attrs:{src:"/images/testi-1-3.jpg",alt:"Awesome Image"}}),t._v(" "),l("div",{staticClass:"testimonials-one__qoute"},[l("img",{attrs:{src:"/images/testi-qoute-1-1.png",alt:"Awesome Image"}})])])])])],1)],1)])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"testimonials-one__content"},[t._m(0),t._v(" "),l("div",{staticClass:"swiper-wrapper",attrs:{id:"sync1"}},[l("swiper",{attrs:{options:t.swiperOptions}},[l("swiper-slide",[l("div",{staticClass:"item"},[l("div",{staticClass:"testimonials-one__single",attrs:{"data-thumb-img":"images/testi-1-1.jpg"}},[l("p",{staticClass:"testimonials-one__text"},[t._v("This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.")]),t._v(" "),l("div",{staticClass:"testimonials-one__bottom"},[l("h3",{staticClass:"testimonials-one__title"},[t._v("Jona Leisey")]),t._v(" "),l("div",{staticClass:"testimonials-one__sep"},[t._v(".")]),t._v(" "),l("p",{staticClass:"testimonials-one__designation"},[t._v("CEO Lums")])])])])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("div",{staticClass:"testimonials-one__single",attrs:{"data-thumb-img":"images/testi-1-2.jpg"}},[l("p",{staticClass:"testimonials-one__text"},[t._v("This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.")]),t._v(" "),l("div",{staticClass:"testimonials-one__bottom"},[l("h3",{staticClass:"testimonials-one__title"},[t._v("Chas Samul")]),t._v(" "),l("div",{staticClass:"testimonials-one__sep"},[t._v(".")]),t._v(" "),l("p",{staticClass:"testimonials-one__designation"},[t._v("CEO Lums")])])])])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("div",{staticClass:"testimonials-one__single",attrs:{"data-thumb-img":"images/testi-1-3.jpg"}},[l("p",{staticClass:"testimonials-one__text"},[t._v("This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.")]),t._v(" "),l("div",{staticClass:"testimonials-one__bottom"},[l("h3",{staticClass:"testimonials-one__title"},[t._v("Chelsey Pozar")]),t._v(" "),l("div",{staticClass:"testimonials-one__sep"},[t._v(".")]),t._v(" "),l("p",{staticClass:"testimonials-one__designation"},[t._v("CEO Lums")])])])])])],1)],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-left"},[e("h2",{staticClass:"block-title__title light-text-color"},[this._v("What our clients "),e("br"),this._v(" are saying")])])}],!1,null,"6e14f0bd",null).exports),T={name:"Brands",components:{Swiper:x.Swiper,SwiperSlide:x.SwiperSlide},directives:{swiper:x.directive},data:function(){return{swiperOptions:{slidesPerView:5,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:4},640:{slidesPerView:3},320:{slidesPerView:2}}}}}},E=Object(c.a)(T,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"brand-one"},[l("div",{staticClass:"container"},[l("div",{staticClass:"brand-one__carousel swiper-wrapper"},[l("swiper",{attrs:{options:t.swiperOptions}},[l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"item"},[l("img",{attrs:{src:"/images/brand-1-1.png",alt:"Awesome Image"}})])])],1)],1)])])}),[],!1,null,"69c7d4d5",null).exports,I=l(161),O=l.n(I),$=l(162),S={name:"FunFact",components:{countTo:O.a},directives:{ObserveVisibility:$.a},data:function(){return{startCounter:!1}},methods:{onVisibilityChange:function(t){t&&(this.startCounter=!0)}}},j=Object(c.a)(S,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onVisibilityChange,expression:"onVisibilityChange"}],staticClass:"funfact-one"},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[l("div",{staticClass:"funfact-one__single-outer"},[l("div",{staticClass:"funfact-one__single"},[l("span",{staticClass:"funfact-one__dot-1"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-2"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-3"}),t._v(" "),l("h3",{staticClass:"funfact-one__title counter"},[l("countTo",{attrs:{startVal:0,endVal:t.startCounter?4789:0,duration:3e3}})],1),t._v(" "),l("p",{staticClass:"funfact-one__tag-line"},[t._v("projects")])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[l("div",{staticClass:"funfact-one__single-outer"},[l("div",{staticClass:"funfact-one__single"},[l("span",{staticClass:"funfact-one__dot-1"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-2"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-3"}),t._v(" "),l("h3",{staticClass:"funfact-one__title counter"},[l("countTo",{attrs:{startVal:0,endVal:t.startCounter?6400:0,duration:3e3}})],1),t._v(" "),l("p",{staticClass:"funfact-one__tag-line"},[t._v("Customers")])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[l("div",{staticClass:"funfact-one__single-outer"},[l("div",{staticClass:"funfact-one__single"},[l("span",{staticClass:"funfact-one__dot-1"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-2"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-3"}),t._v(" "),l("h3",{staticClass:"funfact-one__title counter"},[l("countTo",{attrs:{startVal:0,endVal:t.startCounter?960:0,duration:3e3}})],1),t._v(" "),l("p",{staticClass:"funfact-one__tag-line"},[t._v("Success")])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[l("div",{staticClass:"funfact-one__single-outer"},[l("div",{staticClass:"funfact-one__single"},[l("span",{staticClass:"funfact-one__dot-1"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-2"}),t._v(" "),l("span",{staticClass:"funfact-one__dot-3"}),t._v(" "),l("h3",{staticClass:"funfact-one__title counter"},[l("countTo",{attrs:{startVal:0,endVal:t.startCounter?446:0,duration:3e3}})],1),t._v(" "),l("p",{staticClass:"funfact-one__tag-line"},[t._v("Awards")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-center"},[e("h2",{staticClass:"block-title__title black-text-color"},[this._v("Over 2200 projects "),e("br"),this._v(" completed")])])}],!1,null,"e0ddc23e",null).exports,B={name:"BlogArea"},V=Object(c.a)(B,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"blog-one",attrs:{id:"blog"}},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row high-gutters"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"blog-one__single"},[l("div",{staticClass:"blog-one__image-outer"},[l("div",{staticClass:"blog-one__image"},[l("img",{attrs:{src:"/images/blog-1-1.jpg",alt:"Awesome Image"}}),t._v(" "),l("nuxt-link",{staticClass:"blog-one__link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)]),t._v(" "),l("div",{staticClass:"blog-one__content"},[l("div",{staticClass:"blog-one__meta"},[l("nuxt-link",{staticClass:"blog-one__meta-link",attrs:{to:"/blog-details"}},[t._v("By admin")]),t._v(" "),l("span",{staticClass:"blog-one__meta-sep"},[t._v(".")]),t._v(" "),l("nuxt-link",{staticClass:"blog-one__meta-link",attrs:{to:"/blog-details"}},[t._v("4 Aug")]),t._v(" "),l("span",{staticClass:"blog-one__meta-sep"},[t._v(".")]),t._v(" "),l("nuxt-link",{staticClass:"blog-one__meta-link",attrs:{to:"/blog-details"}},[t._v("2 comments")])],1),t._v(" "),l("h3",{staticClass:"blog-one__title"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Checkout pre launch mobile app "),l("br"),t._v(" marketing pitfalls")])],1)])])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"blog-one__single"},[l("div",{staticClass:"blog-one__image-outer"},[l("div",{staticClass:"blog-one__image"},[l("img",{attrs:{src:"/images/blog-1-2.jpg",alt:"Awesome Image"}}),t._v(" "),l("nuxt-link",{staticClass:"blog-one__link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)]),t._v(" "),l("div",{staticClass:"blog-one__content"},[l("div",{staticClass:"blog-one__meta"},[l("nuxt-link",{staticClass:"blog-one__meta-link",attrs:{to:"/blog-details"}},[t._v("By admin")]),t._v(" "),l("span",{staticClass:"blog-one__meta-sep"},[t._v(".")]),t._v(" "),l("nuxt-link",{staticClass:"blog-one__meta-link",attrs:{to:"/blog-details"}},[t._v("4 Aug")]),t._v(" "),l("span",{staticClass:"blog-one__meta-sep"},[t._v(".")]),t._v(" "),l("nuxt-link",{staticClass:"blog-one__meta-link",attrs:{to:"/blog-details"}},[t._v("2 comments")])],1),t._v(" "),l("h3",{staticClass:"blog-one__title"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Checkout pre launch mobile app "),l("br"),t._v(" marketing pitfalls")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-center"},[e("h2",{staticClass:"block-title__title black-text-color"},[this._v("Check out our latest "),e("br"),this._v(" news & articles")])])}],!1,null,"59db59be",null).exports,L={components:{CallToAction:l(150).a,BlogArea:V,FunFact:j,Brands:E,Testimonial:A,Pricing:k,CallToActionTwo:h,CallToActionThree:C,Service:d,Footer:_.a,Banner:r,Nav:n.a}},P=Object(c.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nav"),this._v(" "),e("Banner"),this._v(" "),e("Service"),this._v(" "),e("CallToActionThree"),this._v(" "),e("Pricing"),this._v(" "),e("CallToAction"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=P.exports}}]);