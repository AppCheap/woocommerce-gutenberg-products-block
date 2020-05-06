this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-search"]=function(e){function t(t){for(var n,i,a=t[0],l=t[1],s=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,a=1;a<c.length;a++){var l=c[a];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=c[0]))}return e}var n={},r={18:0},o=[];function i(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(c,n,function(t){return e[t]}.bind(null,n));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;return o.push([581,2,0,1]),c()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.React}()},199:function(e,t,c){},21:function(e,t){!function(){e.exports=this.wp.editor}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},24:function(e,t){!function(){e.exports=this.wp.blocks}()},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},4:function(e,t){!function(){e.exports=this.wp.components}()},5:function(e,t){!function(){e.exports=this.lodash}()},581:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c(24),i=c(62),a=c(601),l=Object(n.createElement)(a.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})),s=(c(198),c(199),c(8)),u=c.n(s),b=(c(2),c(6)),p=function(e){var t=e.attributes,c=t.label,o=t.placeholder,i=t.formId,a=t.className,l=t.hasLabel,s=t.align,p=u()("wc-block-product-search",s?"align"+s:"",a);return Object(n.createElement)("div",{className:p},Object(n.createElement)("form",{role:"search",method:"get",action:b.e},Object(n.createElement)("label",{htmlFor:i,className:l?"wc-block-product-search__label":"wc-block-product-search__label screen-reader-text"},c),Object(n.createElement)("div",{className:"wc-block-product-search__fields"},Object(n.createElement)("input",{type:"search",id:i,className:"wc-block-product-search__field",placeholder:o,name:"s"}),Object(n.createElement)("input",{type:"hidden",name:"post_type",value:"product"}),Object(n.createElement)("button",{type:"submit",className:"wc-block-product-search__button",label:Object(r.__)("Search","woo-gutenberg-products-block")},Object(n.createElement)("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-arrow-right-alt2",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},Object(n.createElement)("path",{d:"M6 15l5-5-5-5 1-2 7 7-7 7z"}))))))},g=c(21),d=c(4),h=c(22),f=Object(h.withInstanceId)((function(e){var t=e.attributes,c=t.label,o=t.placeholder,i=t.formId,a=t.className,l=t.hasLabel,s=t.align,b=e.instanceId,p=e.setAttributes,h=u()("wc-block-product-search",s?"align"+s:"",a);return i||p({formId:"wc-block-product-search-".concat(b)}),Object(n.createElement)(n.Fragment,null,Object(n.createElement)(g.InspectorControls,{key:"inspector"},Object(n.createElement)(d.PanelBody,{title:Object(r.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(d.ToggleControl,{label:Object(r.__)("Show search field label","woo-gutenberg-products-block"),help:l?Object(r.__)("Label is visible.","woo-gutenberg-products-block"):Object(r.__)("Label is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return p({hasLabel:!l})}}))),Object(n.createElement)("div",{className:h},!!l&&Object(n.createElement)(g.PlainText,{className:"wc-block-product-search__label",value:c,onChange:function(e){return p({label:e})}}),Object(n.createElement)("div",{className:"wc-block-product-search__fields"},Object(n.createElement)(g.PlainText,{className:"wc-block-product-search__field input-control",value:o,onChange:function(e){return p({placeholder:e})}}),Object(n.createElement)("button",{type:"submit",className:"wc-block-product-search__button",label:Object(r.__)("Search","woo-gutenberg-products-block"),onClick:function(e){return e.preventDefault()},tabIndex:"-1"},Object(n.createElement)("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-arrow-right-alt2",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},Object(n.createElement)("path",{d:"M6 15l5-5-5-5 1-2 7 7-7 7z"}))))))}));Object(o.registerBlockType)("woocommerce/product-search",{title:Object(r.__)("Product Search","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(i.a,{srcElement:l}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(r.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(r.__)("A search box to allow customers to search for products by keyword.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},example:{attributes:{hasLabel:!0}},attributes:{hasLabel:{type:"boolean",default:!0},label:{type:"string",default:Object(r.__)("Search","woo-gutenberg-products-block"),source:"text",selector:"label"},placeholder:{type:"string",default:Object(r.__)("Search products…","woo-gutenberg-products-block"),source:"attribute",selector:"input.wc-block-product-search__field",attribute:"placeholder"},formId:{type:"string",default:""}},edit:f,save:function(e){return Object(n.createElement)("div",null,Object(n.createElement)(p,e))}})},6:function(e,t,c){"use strict";c.d(t,"m",(function(){return u})),c.d(t,"n",(function(){return b})),c.d(t,"h",(function(){return p})),c.d(t,"j",(function(){return g})),c.d(t,"a",(function(){return d})),c.d(t,"i",(function(){return h})),c.d(t,"l",(function(){return f})),c.d(t,"c",(function(){return O})),c.d(t,"k",(function(){return m})),c.d(t,"b",(function(){return j})),c.d(t,"f",(function(){return w})),c.d(t,"g",(function(){return S})),c.d(t,"d",(function(){return v})),c.d(t,"e",(function(){return y})),c.d(t,"o",(function(){return _}));var n=c(9),r=c.n(n),o=c(7),i=c.n(o),a=c(3);function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}var s=Object(a.getSetting)("storeApiNonce");i.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var c=e.headers||{};e.headers=function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(Object(c),!0).forEach((function(t){r()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({},c,{"X-WC-Store-API-Nonce":s})}return t(e,t)})),i.a.setNonce=function(e){var t=null==e?void 0:e.get("X-WC-Store-API-Nonce");t&&(s=t)};Object(a.getSetting)("currentUserIsAdmin",!1);var u=Object(a.getSetting)("reviewRatingsEnabled",!0),b=Object(a.getSetting)("showAvatars",!0),p=Object(a.getSetting)("max_columns",6),g=Object(a.getSetting)("min_columns",1),d=Object(a.getSetting)("default_columns",3),h=Object(a.getSetting)("max_rows",6),f=Object(a.getSetting)("min_rows",1),O=Object(a.getSetting)("default_rows",3),m=Object(a.getSetting)("min_height",500),j=Object(a.getSetting)("default_height",500),w=(Object(a.getSetting)("placeholderImgSrc",""),Object(a.getSetting)("thumbnail_size",300),Object(a.getSetting)("isLargeCatalog")),S=Object(a.getSetting)("limitTags"),v=(Object(a.getSetting)("hasProducts",!0),Object(a.getSetting)("hasTags",!0)),y=Object(a.getSetting)("homeUrl",""),_=(Object(a.getSetting)("couponsEnabled",!0),Object(a.getSetting)("shippingEnabled",!0),Object(a.getSetting)("taxesEnabled",!0),Object(a.getSetting)("displayItemizedTaxes",!1),Object(a.getSetting)("displayShopPricesIncludingTax",!1),Object(a.getSetting)("displayCartPricesIncludingTax",!1),Object(a.getSetting)("productCount",0),Object(a.getSetting)("attributes",[]),Object(a.getSetting)("isShippingCalculatorEnabled",!0),Object(a.getSetting)("isShippingCostHidden",!1),Object(a.getSetting)("wcBlocksAssetUrl","")),k=(Object(a.getSetting)("shippingCountries",{}),Object(a.getSetting)("allowedCountries",{}),Object(a.getSetting)("shippingStates",{}),Object(a.getSetting)("allowedStates",{}),Object(a.getSetting)("shippingMethodsExist",!1),Object(a.getSetting)("checkoutShowLoginReminder",!0),{id:0,title:"",permalink:""}),E=Object(a.getSetting)("storePages",{shop:k,cart:k,checkout:k,privacy:k,terms:k});E.shop.permalink,E.checkout.id,E.checkout.permalink,E.privacy.permalink,E.privacy.title,E.terms.permalink,E.terms.title,E.cart.id,E.cart.permalink,Object(a.getSetting)("checkoutAllowsGuest",!1),Object(a.getSetting)("checkoutAllowsSignup",!1)},62:function(e,t,c){"use strict";var n=c(9),r=c.n(n),o=c(37),i=c.n(o),a=c(10);c(2);function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}t.a=function(e){var t=e.srcElement,c=e.size,n=void 0===c?24:c,o=i()(e,["srcElement","size"]);return Object(a.isValidElement)(t)&&Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(Object(c),!0).forEach((function(t){r()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({width:n,height:n},o))}},7:function(e,t){!function(){e.exports=this.wp.apiFetch}()}});