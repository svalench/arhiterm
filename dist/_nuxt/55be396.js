(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{644:function(t,e,o){var content=o(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("562cfd84",content,!0,{sourceMap:!1})},666:function(t,e,o){"use strict";o(644)},667:function(t,e,o){var n=o(50)(!1);n.push([t.i,".hooper-indicator{background-color:#e3e3e3}.hooper-pagination{bottom:-15px}",""]),t.exports=n},691:function(t,e,o){"use strict";o.r(e);o(30),o(15),o(29),o(39),o(23),o(40);var n=o(10),r=o(13),c=o(669);o(670);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Hooper:c.a,Slide:c.d,HooperPagination:c.c,HooperNavigation:c.b},data:function(){return{hooperSettings:{infiniteScroll:!0,wheelControl:!1,breakpoints:{1800:{itemsToShow:4},1500:{itemsToShow:4},1100:{itemsToShow:2}}}}},computed:d({},Object(r.c)({category:"category/manufacturerIndex"})),mounted:function(){this.getManufacturerIndex()},methods:d({},Object(r.b)("category",["getManufacturerIndex"]))},h=(o(666),o(5)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index-brand"},[o("h4",[t._v("Производители")]),t._v(" "),o("el-row",{staticStyle:{"margin-left":"-10px","margin-right":"-10px"}},[o("hooper",{attrs:{settings:t.hooperSettings}},[t._l(t.category.results,(function(e){return o("slide",{key:e.id},[o("nuxt-link",{staticClass:"nuxt-link-cat",attrs:{to:"/catalog/factory/"+e.id}},[o("div",{staticClass:"index-brand-block"},[o("div",{staticClass:"index-brand-block-desc"},["undefined"!==e.description?o("strong",[t._v("\n                                "+t._s(e.description)+"\n                            ")]):t._e(),t._v(" "),o("span",[t._v(t._s(e.name))])]),t._v(" "),o("img",{attrs:{src:e.img,alt:e.name}})])])],1)})),t._v(" "),o("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t._v(" "),o("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2),t._v(" "),o("div",{staticClass:"index-brand-all",attrs:{hidden:""}},[o("nuxt-link",{attrs:{to:"/"}},[t._v("\n                Все производители\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);