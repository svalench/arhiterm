(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{692:function(t,r,c){"use strict";c.r(r);var o={props:["product_filter","new_char"],data:function(){return{char_start:this.product_filter[0],show_char:!1}},computed:{},watch:{new_char:function(){this.char_start=this.new_char}},methods:{showChar:function(t){this.show_char=!this.show_char}},mounted:function(){}},h=c(5),component=Object(h.a)(o,(function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"cost-product-block-char"},[c("div",{staticClass:"cost-product-char-all",class:{"cost-all-top":!0===t.show_char},on:{click:t.showChar}},[c("i",{staticClass:"el-icon-d-arrow-right"})]),t._v(" "),c("div",{staticClass:"cost-product-char"},[c("p",{directives:[{name:"show",rawName:"v-show",value:t.show_char,expression:"show_char"}]},[c("strong",[t._v("Код товара")]),t._v(" "),c("span",[t._v(t._s(t.char_start.name))])]),t._v(" "),t._l(t.char_start.filter_dict,(function(r,o){return c("p",{directives:[{name:"show",rawName:"v-show",value:t.show_char,expression:"show_char"}],key:o},[c("strong",[t._v(t._s(r.name))]),t._v(" "),c("span",[t._v(t._s(r.value))])])})),t._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:t.show_char,expression:"show_char"}],staticClass:"padding-char"})],2)])}),[],!1,null,null,null);r.default=component.exports}}]);