this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-category"]=function(t){function e(e){for(var n,i,u=e[0],a=e[1],s=e[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={20:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;return c.push([774,2,0,1]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e){!function(){t.exports=this.wp.apiFetch}()},101:function(t,e){},103:function(t,e){},104:function(t,e){},105:function(t,e){},106:function(t,e){},134:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(5),c=Object(n.createElement)("img",{src:o.Q+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},15:function(t,e){!function(){t.exports=this.wp.url}()},17:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},28:function(t,e){!function(){t.exports=this.wp.compose}()},29:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},30:function(t,e){!function(){t.exports=this.moment}()},31:function(t,e){!function(){t.exports=this.wp.blocks}()},32:function(t,e){!function(){t.exports=this.wp.editor}()},4:function(t,e){!function(){t.exports=this.wp.components}()},40:function(t,e,r){"use strict";r.d(e,"h",(function(){return d})),r.d(e,"e",(function(){return g})),r.d(e,"b",(function(){return p})),r.d(e,"i",(function(){return f})),r.d(e,"f",(function(){return O})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return j})),r.d(e,"g",(function(){return m})),r.d(e,"a",(function(){return w}));var n=r(7),o=r.n(n),c=r(15),i=r(10),u=r.n(i),a=r(6),s=r(5);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,u=void 0===i?[]:i,a={per_page:s.t?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b({},a,{},u))];return s.t&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id").map((function(t){return b({},t,{parent:0})}))})).catch((function(t){throw t}))},g=function(t){return u()({path:"/wc/store/products/".concat(t)})},p=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},O=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:s.w?100:0,orderby:s.w?"count":"name",order:s.w?"desc":"asc",search:n})];return s.w&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id")}))},h=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},t))})},j=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},m=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},w=function(t,e){if(!t.title.raw)return t.slug;var r=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(r?"":" - ".concat(t.slug))}},43:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(17),o=r.n(n),c=r(37),i=r.n(c),u=function(){var t=i()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},46:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},48:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(46));e.a=function(t){var e,r,i,u=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=u).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},49:function(t,e){!function(){t.exports=this.wp.keycodes}()},5:function(t,e,r){"use strict";r.d(e,"k",(function(){return l})),r.d(e,"G",(function(){return b})),r.d(e,"M",(function(){return d})),r.d(e,"x",(function(){return g})),r.d(e,"z",(function(){return p})),r.d(e,"l",(function(){return f})),r.d(e,"y",(function(){return O})),r.d(e,"B",(function(){return h})),r.d(e,"n",(function(){return j})),r.d(e,"A",(function(){return m})),r.d(e,"m",(function(){return w})),r.d(e,"C",(function(){return y})),r.d(e,"t",(function(){return v})),r.d(e,"w",(function(){return _})),r.d(e,"q",(function(){return k})),r.d(e,"r",(function(){return E})),r.d(e,"s",(function(){return S})),r.d(e,"j",(function(){return P})),r.d(e,"I",(function(){return C})),r.d(e,"N",(function(){return A})),r.d(e,"p",(function(){return x})),r.d(e,"o",(function(){return D})),r.d(e,"F",(function(){return B})),r.d(e,"c",(function(){return M})),r.d(e,"u",(function(){return R})),r.d(e,"v",(function(){return T})),r.d(e,"Q",(function(){return N})),r.d(e,"H",(function(){return I})),r.d(e,"a",(function(){return L})),r.d(e,"K",(function(){return H})),r.d(e,"b",(function(){return V})),r.d(e,"J",(function(){return z})),r.d(e,"h",(function(){return Q})),r.d(e,"L",(function(){return G})),r.d(e,"g",(function(){return W})),r.d(e,"i",(function(){return U})),r.d(e,"E",(function(){return J})),r.d(e,"D",(function(){return X})),r.d(e,"P",(function(){return K})),r.d(e,"O",(function(){return Y})),r.d(e,"d",(function(){return $})),r.d(e,"e",(function(){return Z})),r.d(e,"f",(function(){return tt}));var n=r(7),o=r.n(n),c=r(10),i=r.n(c),u=r(3);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var s=Object(u.getSetting)("storeApiNonce");i.a.use((function(t,e){if(function(t){var e=t.url||t.path;return!(!e||!t.method||"GET"===t.method)&&null!==/wc\/store\//.exec(e)}(t)){var r=t.headers||{};t.headers=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r,{"X-WC-Store-API-Nonce":s})}return e(t,e)})),i.a.setNonce=function(t){var e=null==t?void 0:t.get("X-WC-Store-API-Nonce");e&&(s=e)};var l=Object(u.getSetting)("currentUserIsAdmin",!1),b=Object(u.getSetting)("reviewRatingsEnabled",!0),d=Object(u.getSetting)("showAvatars",!0),g=Object(u.getSetting)("max_columns",6),p=Object(u.getSetting)("min_columns",1),f=Object(u.getSetting)("default_columns",3),O=Object(u.getSetting)("max_rows",6),h=Object(u.getSetting)("min_rows",1),j=Object(u.getSetting)("default_rows",3),m=Object(u.getSetting)("min_height",500),w=Object(u.getSetting)("default_height",500),y=Object(u.getSetting)("placeholderImgSrc",""),v=(Object(u.getSetting)("thumbnail_size",300),Object(u.getSetting)("isLargeCatalog")),_=Object(u.getSetting)("limitTags"),k=Object(u.getSetting)("hasProducts",!0),E=Object(u.getSetting)("hasTags",!0),S=Object(u.getSetting)("homeUrl",""),P=Object(u.getSetting)("couponsEnabled",!0),C=Object(u.getSetting)("shippingEnabled",!0),A=Object(u.getSetting)("taxesEnabled",!0),x=Object(u.getSetting)("displayItemizedTaxes",!1),D=(Object(u.getSetting)("displayShopPricesIncludingTax",!1),Object(u.getSetting)("displayCartPricesIncludingTax",!1)),B=Object(u.getSetting)("productCount",0),M=Object(u.getSetting)("attributes",[]),R=Object(u.getSetting)("isShippingCalculatorEnabled",!0),T=Object(u.getSetting)("isShippingCostHidden",!1),N=Object(u.getSetting)("wcBlocksAssetUrl",""),I=Object(u.getSetting)("shippingCountries",{}),L=Object(u.getSetting)("allowedCountries",{}),H=Object(u.getSetting)("shippingStates",{}),V=Object(u.getSetting)("allowedStates",{}),z=Object(u.getSetting)("shippingMethodsExist",!1),Q=Object(u.getSetting)("checkoutShowLoginReminder",!0),q={id:0,title:"",permalink:""},F=Object(u.getSetting)("storePages",{shop:q,cart:q,checkout:q,privacy:q,terms:q}),G=F.shop.permalink,W=F.checkout.id,U=F.checkout.permalink,J=F.privacy.permalink,X=F.privacy.title,K=F.terms.permalink,Y=F.terms.title,$=F.cart.id,Z=F.cart.permalink,tt=Object(u.getSetting)("checkoutAllowsGuest",!1);Object(u.getSetting)("checkoutAllowsSignup",!1)},6:function(t,e){!function(){t.exports=this.lodash}()},60:function(t,e,r){"use strict";var n=r(7),o=r.n(n),c=r(35),i=r.n(c),u=r(9);r(2);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},68:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n=r(5),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];e.a={columns:{type:"number",default:n.l},rows:{type:"number",default:n.n},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},687:function(t,e,r){},69:function(t,e,r){"use strict";var n=r(7),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(s({},r,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(s({},r,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return e(s({},r,{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(s({},r,{button:!n}))}}))}},70:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(6),i=(r(2),r(4)),u=r(5);e.a=function(t){var e=t.columns,r=t.rows,a=t.setAttributes,s=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.z,u.x);a({columns:Object(c.isNaN)(e)?"":e})},min:u.z,max:u.x}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,u.B,u.y);a({rows:Object(c.isNaN)(e)?"":e})},min:u.B,max:u.y}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},73:function(t,e){!function(){t.exports=this.wp.dom}()},74:function(t,e,r){"use strict";var n=r(13),o=r.n(n),c=r(0),i=r(1),u=r(6),a=(r(2),r(50)),s=r(4),l=r(17),b=r.n(l),d=r(37),g=r.n(d),p=r(24),f=r.n(p),O=r(27),h=r.n(O),j=r(19),m=r.n(j),w=r(25),y=r.n(w),v=r(26),_=r.n(v),k=r(12),E=r.n(k),S=r(28),P=r(40),C=r(43);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=E()(t);if(e){var o=E()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _()(this,r)}}var x=Object(S.createHigherOrderComponent)((function(t){return function(e){y()(n,e);var r=A(n);function n(){var t;return f()(this,n),(t=r.apply(this,arguments)).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(m()(t)),t}return h()(n,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(P.c)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch(function(){var e=g()(b.a.mark((function e(r){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(r);case 2:n=e.sent,t.setState({categories:null,loading:!1,error:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,i=e.categories;return Object(c.createElement)(t,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),n}(c.Component)}),"withCategories"),D=r(48),B=(r(149),function(t){var e=t.categories,r=t.error,n=t.isLoading,l=t.onChange,b=t.onOperatorChange,d=t.operator,g=t.selected,p=t.isSingle,f=t.showReviewCount,O={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(t){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",t,"woo-gutenberg-products-block"),t)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(D.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:e,isLoading:n,selected:g.map((function(t){return Object(u.find)(e,{id:t})})).filter(Boolean),onChange:l,renderItem:function(t){var e=t.item,r=t.search,n=t.depth,u=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===u&&0!==e.parent&&s.push("is-skip-level");var l=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name,b=f?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",e.review_count,"woo-gutenberg-products-block"),l,e.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",e.count,"woo-gutenberg-products-block"),l,e.count),d=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",e.review_count,"woo-gutenberg-products-block"),e.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",e.count,"woo-gutenberg-products-block"),e.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},t,{showCount:!0,countLabel:d,"aria-label":b}))},messages:O,isHierarchical:!0,isSingle:p}),!!b&&Object(c.createElement)("div",{className:g.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:d,onChange:b,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});B.defaultProps={operator:"any",isSingle:!1};e.a=x(B)},76:function(t,e){!function(){t.exports=this.ReactDOM}()},774:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n),c=r(0),i=r(1),u=r(31),a=r(6),s=r(60),l=r(53),b=Object(c.createElement)(l.c,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"})),d=(r(687),r(24)),g=r.n(d),p=r(27),f=r.n(p),O=r(19),h=r.n(O),j=r(25),m=r.n(j),w=r(26),y=r.n(w),v=r(12),_=r.n(v),k=r(32),E=r(4),S=(r(2),r(69)),P=r(70),C=r(74),A=r(98),x=r(134);function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=_()(t);if(e){var o=_()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y()(this,r)}}var R=function(t){m()(r,t);var e=M(r);function r(){var t;g()(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return t=e.call.apply(e,[this].concat(c)),o()(h()(t),"state",{changedAttributes:{},isEditing:!1}),o()(h()(t),"startEditing",(function(){t.setState({isEditing:!0,changedAttributes:{}})})),o()(h()(t),"stopEditing",(function(){t.setState({isEditing:!1,changedAttributes:{}})})),o()(h()(t),"setChangedAttributes",(function(e){t.setState((function(t){return{changedAttributes:B({},t.changedAttributes,{},e)}}))})),o()(h()(t),"save",(function(){var e=t.state.changedAttributes;(0,t.props.setAttributes)(e),t.stopEditing()})),t}return f()(r,[{key:"componentDidMount",value:function(){this.props.attributes.categories.length||this.setState({isEditing:!0})}},{key:"getInspectorControls",value:function(){var t=this,e=this.props,r=e.attributes,n=e.setAttributes,o=this.state.isEditing,u=r.columns,a=r.catOperator,s=r.contentVisibility,l=r.orderby,b=r.rows,d=r.alignButtons;return Object(c.createElement)(k.InspectorControls,{key:"inspector"},Object(c.createElement)(E.PanelBody,{title:Object(i.__)("Product Category","woo-gutenberg-products-block"),initialOpen:!r.categories.length&&!o},Object(c.createElement)(C.a,{selected:r.categories,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.map((function(t){return t.id})),o={categories:r};n(o),t.setChangedAttributes(o)},operator:a,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any",r={catOperator:e};n(r),t.setChangedAttributes(r)}})),Object(c.createElement)(E.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(P.a,{columns:u,rows:b,alignButtons:d,setAttributes:n})),Object(c.createElement)(E.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(S.a,{settings:s,onChange:function(t){return n({contentVisibility:t})}})),Object(c.createElement)(E.PanelBody,{title:Object(i.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(A.a,{setAttributes:n,value:l})))}},{key:"renderEditMode",value:function(){var t=this,e=this.props,r=e.attributes,n=e.debouncedSpeak,o=B({},r,{},this.state.changedAttributes);return Object(c.createElement)(E.Placeholder,{icon:Object(c.createElement)(s.a,{srcElement:b}),label:Object(i.__)("Products by Category","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),Object(c.createElement)("div",{className:"wc-block-products-category__selection"},Object(c.createElement)(C.a,{selected:o.categories,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.map((function(t){return t.id}));t.setChangedAttributes({categories:r})},operator:o.catOperator,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t.setChangedAttributes({catOperator:e})}}),Object(c.createElement)(E.Button,{isDefault:!0,onClick:function(){t.save(),n(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Done","woo-gutenberg-products-block")),Object(c.createElement)(E.Button,{className:"wc-block-products-category__cancel-button",isTertiary:!0,onClick:function(){t.stopEditing(),n(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var t=this.props,e=t.attributes,r=t.name,n=e.categories.length;return Object(c.createElement)(E.Disabled,null,n?Object(c.createElement)(k.ServerSideRender,{block:r,attributes:e,EmptyResponsePlaceholder:function(){return Object(c.createElement)(E.Placeholder,{icon:Object(c.createElement)(s.a,{srcElement:b}),label:Object(i.__)("Products by Category","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("No products were found that matched your selection.","woo-gutenberg-products-block"))}}):Object(i.__)("Select at least one category to display its products.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var t=this,e=this.state.isEditing;return this.props.attributes.isPreview?x.a:Object(c.createElement)(c.Fragment,null,Object(c.createElement)(k.BlockControls,null,Object(c.createElement)(E.Toolbar,{controls:[{icon:"edit",title:Object(i.__)("Edit"),onClick:function(){return e?t.stopEditing():t.startEditing()},isActive:e}]})),this.getInspectorControls(),e?this.renderEditMode():this.renderViewMode())}}]),r}(c.Component),T=Object(E.withSpokenMessages)(R),N=r(80),I=r(68);function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Object(u.registerBlockType)("woocommerce/product-category",{title:Object(i.__)("Products by Category","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:b}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:H({},I.a,{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),transforms:{from:[{type:"block",blocks:Object(a.without)(I.b,"woocommerce/product-category"),transform:function(t){return Object(u.createBlock)("woocommerce/product-category",H({},t,{editMode:!1}))}}]},deprecated:[{attributes:H({},I.a,{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),save:Object(N.a)("woocommerce/product-category")}],edit:function(t){return Object(c.createElement)(T,t)},save:function(){return null}})},79:function(t,e){!function(){t.exports=this.wp.viewport}()},80:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r(0),o=r(8),c=r.n(o),i=r(11),u=r.n(i),a=r(5);function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,d=r.columns||a.l,g=r.rows||a.n,p=new Map;switch(p.set("limit",g*d),p.set("columns",d),c&&c.length&&(p.set("category",c.join(",")),i&&"all"===i&&p.set("cat_operator","AND")),n&&n.length&&(p.set("terms",n.map((function(t){return t.id})).join(",")),p.set("attribute",n[0].attr_slug),o&&"all"===o&&p.set("terms_operator","AND")),l&&("price_desc"===l?(p.set("orderby","price"),p.set("order","DESC")):"price_asc"===l?(p.set("orderby","price"),p.set("order","ASC")):"date"===l?(p.set("orderby","date"),p.set("order","DESC")):p.set("orderby",l)),e){case"woocommerce/product-best-sellers":p.set("best_selling","1");break;case"woocommerce/product-top-rated":p.set("orderby","rating");break;case"woocommerce/product-on-sale":p.set("on_sale","1");break;case"woocommerce/product-new":p.set("orderby","date"),p.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";p.set("ids",b.join(",")),p.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,O="[products",h=s(p);try{for(h.s();!(f=h.n()).done;){var j=u()(f.value,2);O+=" "+j[0]+'="'+j[1]+'"'}}catch(t){h.e(t)}finally{h.f()}return O+="]"}(e,t))}}},84:function(t,e){!function(){t.exports=this.wp.hooks}()},9:function(t,e){!function(){t.exports=this.React}()},91:function(t,e){!function(){t.exports=this.wp.date}()},98:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(4);r(2);e.a=function(t){var e=t.value,r=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})}}});