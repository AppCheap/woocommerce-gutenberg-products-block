this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var n,i,a=t[0],s=t[1],l=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={6:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;return c.push([767,2,0,1]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.apiFetch}()},107:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p}));var n=r(0),o=r(1),c=r(144),i=r(4),a=r(32),s=r(3),l=r(5),u=r(67),b=function(e,t){return Object(n.createElement)(a.BlockControls,null,Object(n.createElement)(i.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit","woo-gutenberg-products-block"),onClick:function(){return t({editMode:!e})},isActive:e}]}))},d=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Product rating","woo-gutenberg-products-block"),checked:e.showReviewRating,onChange:function(){return t({showReviewRating:!e.showReviewRating})}}),e.showReviewRating&&!l.G&&Object(n.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(c.a)(Object(o.__)("Product rating is disabled in your <a>store settings</a>.","woo-gutenberg-products-block"),{a:Object(n.createElement)("a",{href:Object(s.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Reviewer name","woo-gutenberg-products-block"),checked:e.showReviewerName,onChange:function(){return t({showReviewerName:!e.showReviewerName})}}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Image","woo-gutenberg-products-block"),checked:e.showReviewImage,onChange:function(){return t({showReviewImage:!e.showReviewImage})}}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Review date","woo-gutenberg-products-block"),checked:e.showReviewDate,onChange:function(){return t({showReviewDate:!e.showReviewDate})}}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Review content","woo-gutenberg-products-block"),checked:e.showReviewContent,onChange:function(){return t({showReviewContent:!e.showReviewContent})}}),e.showReviewImage&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,{label:Object(o.__)("Review image","woo-gutenberg-products-block"),value:e.imageType,options:[{label:Object(o.__)("Reviewer photo","woo-gutenberg-products-block"),value:"reviewer"},{label:Object(o.__)("Product","woo-gutenberg-products-block"),value:"product"}],onChange:function(e){return t({imageType:e})}}),"reviewer"===e.imageType&&!l.M&&Object(n.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(c.a)(Object(o.__)("Reviewer photo is disabled in your <a>site settings</a>.","woo-gutenberg-products-block"),{a:Object(n.createElement)("a",{href:Object(s.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))},p=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Order by","woo-gutenberg-products-block"),checked:e.showOrderby,onChange:function(){return t({showOrderby:!e.showOrderby})}}),Object(n.createElement)(i.SelectControl,{label:Object(o.__)("Order Product Reviews by","woo-gutenberg-products-block"),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:function(e){return t({orderby:e})}}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Starting Number of Reviews","woo-gutenberg-products-block"),value:e.reviewsOnPageLoad,onChange:function(e){return t({reviewsOnPageLoad:e})},max:20,min:1}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Load more","woo-gutenberg-products-block"),checked:e.showLoadMore,onChange:function(){return t({showLoadMore:!e.showLoadMore})}}),e.showLoadMore&&Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Load More Reviews","woo-gutenberg-products-block"),value:e.reviewsOnLoadMore,onChange:function(e){return t({reviewsOnLoadMore:e})},max:20,min:1}))}},113:function(e,t,r){"use strict";var n=r(0),o=(r(2),r(8)),c=r.n(o),i=r(42),a=r(145);r(223);t.a=Object(a.a)((function(e){var t=e.className,r=e.instanceId,o=e.defaultValue,a=e.label,s=e.onChange,l=e.options,u=e.screenReaderLabel,b=e.readOnly,d=e.value,p="wc-block-sort-select__select-".concat(r);return Object(n.createElement)("div",{className:c()("wc-block-sort-select",t)},Object(n.createElement)(i.a,{label:a,screenReaderLabel:u,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label",htmlFor:p}}),Object(n.createElement)("select",{id:p,className:"wc-block-sort-select__select",defaultValue:o,onChange:s,readOnly:b,value:d},l.map((function(e){return Object(n.createElement)("option",{key:e.key,value:e.key},e.label)}))))}))},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),o="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAMAAwAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t6KKtaXps2sahBZ24DTTNtXPQepPsBzQBVo/OvddD+H2j6Nbqr2sd7Pj5prhQ2T7A8Cl1z4f6PrNuyrax2c+Plmt1CkH3A4NAHhP50Vb1bTJtG1G4srgASwttOOh9CPYjBqp+VABXX/AAreNfF8If7zROEz/ex/hmuQq1pT3cepW7WAdrxXBiEYyS30oA+kKKp6RPeXOnwyX9strdEfPErBgD9f6UurT3dtp80ljbC7ugPkiZgoJ+tAHkHxWeNvFsgT7ywoHx/e6/yIrj6t6vJdy6lcvfh1vGcmUSDBB+lVKACvbvh/4Qj8PaYlxOgOozrudmHMYPRB/X3+leVeDrBdT8UabbuNyGUMwPcL8xH6V9BUAJRRRQByfxA8IR+IdMe4gjA1GBSyMo5kA6of6e/1rxGvpr/PWvn3xjYLpnijUrdBtQTFlHoGG4D9aAP/2Q==",c={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(n.__)("July 15, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(n.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",reviewer:Object(n.__)("Alice","woo-gutenberg-products-block"),review:"<p>".concat(Object(n.__)("I bought this product last week and I'm very happy with it.","woo-gutenberg-products-block"),"</p>\n"),reviewer_avatar_urls:{48:o,96:o},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(n.__)("July 12, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(n.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",reviewer:Object(n.__)("Bob","woo-gutenberg-products-block"),review:"<p>".concat(Object(n.__)("This product is awesome, I love it!","woo-gutenberg-products-block"),"</p>\n"),reviewer_avatar_urls:{48:o,96:o},rating:null,verified:!1}]}}},120:function(e,t,r){"use strict";var n=r(0),o=r(53),c=Object(n.createElement)(o.c,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},126:function(e,t,r){},136:function(e,t,r){},137:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},138:function(e,t,r){"use strict";var n=r(13),o=r.n(n),c=r(0),i=(r(136),r(71));t.a=function(e){var t=e.attributes,r=t.categoryIds,n=t.imageType,a=t.orderby,s=t.productId,l={"data-image-type":n,"data-orderby":a,"data-reviews-on-page-load":t.reviewsOnPageLoad,"data-reviews-on-load-more":t.reviewsOnLoadMore,"data-show-load-more":t.showLoadMore,"data-show-orderby":t.showOrderby},u="wc-block-all-reviews";return s&&(l["data-product-id"]=s,u="wc-block-reviews-by-product"),Array.isArray(r)&&(l["data-category-ids"]=r.join(","),u="wc-block-reviews-by-category"),Object(c.createElement)("div",o()({className:Object(i.a)(u,t)},l))}},140:function(e,t,r){"use strict";var n=r(24),o=r.n(n),c=r(27),i=r.n(c),a=r(25),s=r.n(a),l=r(26),u=r.n(l),b=r(12),d=r.n(b),p=r(0),g=r(1),w=r(9),f=(r(2),r(6)),v=r(4),m=r(5),h=r(92),O=r(42),j=(r(285),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return Object(p.createElement)("div",{className:"wp-block-button wc-block-load-more"},Object(p.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(p.createElement)(O.a,{label:r,screenReaderLabel:n})))});j.defaultProps={label:Object(g.__)("Load more","woo-gutenberg-products-block")};var y=j,_=r(113),k=(r(282),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return Object(p.createElement)(_.a,{className:"wc-block-review-sort-select",defaultValue:t,label:Object(g.__)("Order by","woo-gutenberg-products-block"),onChange:r,options:[{key:"most-recent",label:Object(g.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(g.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(g.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:n,screenReaderLabel:Object(g.__)("Order reviews by","woo-gutenberg-products-block"),value:o})}),R=r(7),E=r.n(R),A=r(8),P=r.n(A),S=r(19),C=r.n(S),B=r(171),N=r.n(B),x=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=N()(e,{suffix:r,limit:t});return n.html},D=function(e,t,r,n){var o=T(e,t,r);return x(e,o-n.length,n)},T=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=x(e,n.middle),n=L(n,t.clientHeight,r);return n.middle},L=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e};function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}var I=function(e){s()(r,e);var t=Q(r);function r(e){var n;return o()(this,r),(n=t.apply(this,arguments)).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},n.reviewSummary=Object(w.createRef)(),n.reviewContent=Object(w.createRef)(),n.getButton=n.getButton.bind(C()(n)),n.onClick=n.onClick.bind(C()(n)),n}return i()(r,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:D(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,c=e?n:o;if(c)return Object(p.createElement)("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,c=t.isExpanded;return r?!1===o?Object(p.createElement)("div",{className:e},Object(p.createElement)("div",{ref:this.reviewContent},r)):Object(p.createElement)("div",{className:e},(!c||null===o)&&Object(p.createElement)("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:n}}),(c||null===o)&&Object(p.createElement)("div",{ref:this.reviewContent,"aria-hidden":!c},r),this.getButton()):null}}]),r}(w.Component);I.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(g.__)("Read more","woo-gutenberg-products-block"),lessText:Object(g.__)("Read less","woo-gutenberg-products-block"),className:"read-more-content"};var M=I;r(284);var F=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,c=t.showReviewDate,i=t.showReviewerName,a=t.showReviewImage,s=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,b=n.rating,d=!Object.keys(n).length>0,w=Number.isFinite(b)&&s;return Object(p.createElement)("li",{className:P()("wc-block-review-list-item__item",{"is-loading":d}),"aria-hidden":d},(u||c||i||a||w)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__info"},a&&function(e,t,r){var n,o;return r||!e?Object(p.createElement)("div",{className:"wc-block-review-list-item__image",width:"48",height:"48"}):Object(p.createElement)("div",{className:"wc-block-review-list-item__image"},"product"===t?Object(p.createElement)("img",{"aria-hidden":"true",alt:(null===(n=e.product_image)||void 0===n?void 0:n.alt)||"",src:(null===(o=e.product_image)||void 0===o?void 0:o.src)||"",className:"wc-block-review-list-item__image",width:"48",height:"48"}):Object(p.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x",className:"wc-block-review-list-item__image",width:"48",height:"48"}),e.verified&&Object(p.createElement)("div",{className:"wc-block-review-list-item__verified",title:Object(g.__)("Verified buyer","woo-gutenberg-products-block")},Object(g.__)("Verified buyer","woo-gutenberg-products-block")))}(n,o,d),(u||i||w||c)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__meta"},w&&function(e){var t=e.rating,r={width:t/5*100+"%"};return Object(p.createElement)("div",{className:"wc-block-review-list-item__rating"},Object(p.createElement)("div",{className:"wc-block-review-list-item__rating__stars",role:"img"},Object(p.createElement)("span",{style:r},Object(g.sprintf)(Object(g.__)("Rated %d out of 5","woo-gutenberg-products-block"),t))))}(n),u&&function(e){return Object(p.createElement)("div",{className:"wc-block-review-list-item__product"},Object(p.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),i&&function(e){var t=e.reviewer,r=void 0===t?"":t;return Object(p.createElement)("div",{className:"wc-block-review-list-item__author"},r)}(n),c&&function(e){var t=e.date_created,r=e.formatted_date_created;return Object(p.createElement)("time",{className:"wc-block-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return Object(p.createElement)(M,{maxLines:10,moreText:Object(g.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(g.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text"},Object(p.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(283);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var H=function(e){var t=e.attributes,r=e.reviews,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{showReviewImage:(m.M||"product"===t.imageType)&&t.showReviewImage,showReviewRating:m.G&&t.showReviewRating});return Object(p.createElement)("ul",{className:"wc-block-review-list"},0===r.length?Object(p.createElement)(F,{attributes:n}):r.map((function(e,t){return Object(p.createElement)(F,{key:e.id||t,attributes:n,review:e})})))},V=r(13),W=r.n(V),G=r(17),J=r.n(G),z=r(37),X=r.n(z),K=r(45),Y=r.n(K),Z=r(71),q=r(43);function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}function ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}var te=function(e){var t=function(t){s()(n,t);var r=$(n);function n(){var e;o()(this,n);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return e=r.call.apply(r,[this].concat(c)),E()(C()(e),"isPreview",!!e.props.attributes.previewReviews),E()(C()(e),"delayedAppendReviews",e.props.delayFunction(e.appendReviews)),E()(C()(e),"state",{error:null,loading:!0,reviews:e.isPreview?e.props.attributes.previewReviews:[],totalReviews:e.isPreview?e.props.attributes.previewReviews.length:0}),E()(C()(e),"setError",function(){var t=X()(J.a.mark((function t(r){var n,o;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.onReviewsLoadError,t.next=3,Object(q.a)(r);case 3:o=t.sent,e.setState({reviews:[],loading:!1,error:o}),n(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return i()(n,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!Y()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,c=t.productId,i={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(i.category_id=Array.isArray(r)?r.join(","):r),c&&(i.product_id=c),i}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),Object(Z.b)(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,o=r.loading,c=r.reviews,i=r.totalReviews;return Object(p.createElement)(e,W()({},this.props,{error:n,isLoading:o,reviews:c.slice(0,t),totalReviews:i}))}}]),n}(w.Component);E()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}(function(e){s()(r,e);var t=ee(r);function r(){return o()(this,r),t.apply(this,arguments)}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.error,n=e.isLoading,o=e.noReviewsPlaceholder,c=e.reviews,i=e.totalReviews;return r?Object(p.createElement)(h.a,{className:"wc-block-featured-product-error",error:r,isLoading:n}):0!==c.length||n?Object(p.createElement)(v.Disabled,null,t.showOrderby&&m.G&&Object(p.createElement)(k,{readOnly:!0,value:t.orderby}),Object(p.createElement)(H,{attributes:t,reviews:c}),t.showLoadMore&&i>c.length&&Object(p.createElement)(y,{screenReaderLabel:Object(g.__)("Load more reviews","woo-gutenberg-products-block")})):Object(p.createElement)(o,{attributes:t})}}]),r}(w.Component));function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}var ne=function(e){s()(r,e);var t=re(r);function r(){return o()(this,r),t.apply(this,arguments)}return i()(r,[{key:"renderHiddenContentPlaceholder",value:function(){var e=this.props,t=e.icon,r=e.name;return Object(p.createElement)(v.Placeholder,{icon:t,label:r},Object(g.__)("The content for this block is hidden due to block settings.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.className,n=e.noReviewsPlaceholder,o=t.categoryIds,c=t.productId,i=t.reviewsOnPageLoad,a=t.showProductName,s=t.showReviewDate,l=t.showReviewerName,u=t.showReviewContent,b=t.showReviewImage,d=t.showReviewRating,g=Object(Z.c)(t.orderby),w=g.order,v=g.orderby;return!(u||d||s||l||b||a)?this.renderHiddenContentPlaceholder():Object(p.createElement)("div",{className:Object(Z.a)(r,t)},Object(p.createElement)(te,{attributes:t,categoryIds:o,delayFunction:function(e){return Object(f.debounce)(e,400)},noReviewsPlaceholder:n,orderby:v,order:w,productId:c,reviewsToDisplay:i}))}}]),r}(w.Component);t.a=ne},17:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},28:function(e,t){!function(){e.exports=this.wp.compose}()},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},31:function(e,t){!function(){e.exports=this.wp.blocks}()},32:function(e,t){!function(){e.exports=this.wp.editor}()},4:function(e,t){!function(){e.exports=this.wp.components}()},42:function(e,t,r){"use strict";var n=r(7),o=r.n(n),c=r(0),i=(r(2),r(9)),a=r(8),s=r.n(a);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=function(e){var t,r=e.label,n=e.screenReaderLabel,a=e.wrapperElement,u=e.wrapperProps,b=null!=r,d=null!=n;return!b&&d?(t=a||"span",u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u,{className:s()(u.className,"screen-reader-text")}),Object(c.createElement)(t,u,n)):(t=a||i.Fragment,b&&d&&r!==n?Object(c.createElement)(t,u,Object(c.createElement)("span",{"aria-hidden":"true"},r),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,u,r))};u.defaultProps={wrapperProps:{}},t.a=u},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(17),o=r.n(n),c=r(37),i=r.n(c),a=function(){var e=i()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},45:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},46:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},48:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(46));t.a=function(e){var t,r,i,a=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=a).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},5:function(e,t,r){"use strict";r.d(t,"k",(function(){return u})),r.d(t,"G",(function(){return b})),r.d(t,"M",(function(){return d})),r.d(t,"x",(function(){return p})),r.d(t,"z",(function(){return g})),r.d(t,"l",(function(){return w})),r.d(t,"y",(function(){return f})),r.d(t,"B",(function(){return v})),r.d(t,"n",(function(){return m})),r.d(t,"A",(function(){return h})),r.d(t,"m",(function(){return O})),r.d(t,"C",(function(){return j})),r.d(t,"t",(function(){return y})),r.d(t,"w",(function(){return _})),r.d(t,"q",(function(){return k})),r.d(t,"r",(function(){return R})),r.d(t,"s",(function(){return E})),r.d(t,"j",(function(){return A})),r.d(t,"I",(function(){return P})),r.d(t,"N",(function(){return S})),r.d(t,"p",(function(){return C})),r.d(t,"o",(function(){return B})),r.d(t,"F",(function(){return N})),r.d(t,"c",(function(){return x})),r.d(t,"u",(function(){return D})),r.d(t,"v",(function(){return T})),r.d(t,"Q",(function(){return L})),r.d(t,"H",(function(){return Q})),r.d(t,"a",(function(){return I})),r.d(t,"K",(function(){return M})),r.d(t,"b",(function(){return F})),r.d(t,"J",(function(){return U})),r.d(t,"h",(function(){return H})),r.d(t,"L",(function(){return G})),r.d(t,"g",(function(){return J})),r.d(t,"i",(function(){return z})),r.d(t,"E",(function(){return X})),r.d(t,"D",(function(){return K})),r.d(t,"P",(function(){return Y})),r.d(t,"O",(function(){return Z})),r.d(t,"d",(function(){return q})),r.d(t,"e",(function(){return $})),r.d(t,"f",(function(){return ee}));var n=r(7),o=r.n(n),c=r(10),i=r.n(c),a=r(3);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=Object(a.getSetting)("storeApiNonce");i.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var r=e.headers||{};e.headers=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{"X-WC-Store-API-Nonce":l})}return t(e,t)})),i.a.setNonce=function(e){var t=null==e?void 0:e.get("X-WC-Store-API-Nonce");t&&(l=t)};var u=Object(a.getSetting)("currentUserIsAdmin",!1),b=Object(a.getSetting)("reviewRatingsEnabled",!0),d=Object(a.getSetting)("showAvatars",!0),p=Object(a.getSetting)("max_columns",6),g=Object(a.getSetting)("min_columns",1),w=Object(a.getSetting)("default_columns",3),f=Object(a.getSetting)("max_rows",6),v=Object(a.getSetting)("min_rows",1),m=Object(a.getSetting)("default_rows",3),h=Object(a.getSetting)("min_height",500),O=Object(a.getSetting)("default_height",500),j=Object(a.getSetting)("placeholderImgSrc",""),y=(Object(a.getSetting)("thumbnail_size",300),Object(a.getSetting)("isLargeCatalog")),_=Object(a.getSetting)("limitTags"),k=Object(a.getSetting)("hasProducts",!0),R=Object(a.getSetting)("hasTags",!0),E=Object(a.getSetting)("homeUrl",""),A=Object(a.getSetting)("couponsEnabled",!0),P=Object(a.getSetting)("shippingEnabled",!0),S=Object(a.getSetting)("taxesEnabled",!0),C=Object(a.getSetting)("displayItemizedTaxes",!1),B=(Object(a.getSetting)("displayShopPricesIncludingTax",!1),Object(a.getSetting)("displayCartPricesIncludingTax",!1)),N=Object(a.getSetting)("productCount",0),x=Object(a.getSetting)("attributes",[]),D=Object(a.getSetting)("isShippingCalculatorEnabled",!0),T=Object(a.getSetting)("isShippingCostHidden",!1),L=Object(a.getSetting)("wcBlocksAssetUrl",""),Q=Object(a.getSetting)("shippingCountries",{}),I=Object(a.getSetting)("allowedCountries",{}),M=Object(a.getSetting)("shippingStates",{}),F=Object(a.getSetting)("allowedStates",{}),U=Object(a.getSetting)("shippingMethodsExist",!1),H=Object(a.getSetting)("checkoutShowLoginReminder",!0),V={id:0,title:"",permalink:""},W=Object(a.getSetting)("storePages",{shop:V,cart:V,checkout:V,privacy:V,terms:V}),G=W.shop.permalink,J=W.checkout.id,z=W.checkout.permalink,X=W.privacy.permalink,K=W.privacy.title,Y=W.terms.permalink,Z=W.terms.title,q=W.cart.id,$=W.cart.permalink,ee=Object(a.getSetting)("checkoutAllowsGuest",!1);Object(a.getSetting)("checkoutAllowsSignup",!1)},6:function(e,t){!function(){e.exports=this.lodash}()},60:function(e,t,r){"use strict";var n=r(7),o=r.n(n),c=r(35),i=r.n(c),a=r(9);r(2);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(a.isValidElement)(t)&&Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},67:function(e,t,r){"use strict";var n=r(13),o=r.n(n),c=r(24),i=r.n(c),a=r(27),s=r.n(a),l=r(19),u=r.n(l),b=r(25),d=r.n(b),p=r(26),g=r.n(p),w=r(12),f=r.n(w),v=r(0),m=r(6),h=r(8),O=r.n(h),j=r(4),y=r(28);r(135);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var o=f()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var k=function(e){d()(r,e);var t=_(r);function r(){var e;return i()(this,r),(e=t.apply(this,arguments)).onClick=e.onClick.bind(u()(e)),e}return s()(r,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.label,c=r.checked,i=r.instanceId,a=r.className,s=r.help,l=r.options,u=r.value,b="inspector-toggle-button-control-".concat(i);return s&&(e=Object(m.isFunction)(s)?s(c):s),Object(v.createElement)(j.BaseControl,{id:b,help:e,className:O()("components-toggle-button-control",a)},Object(v.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},n),Object(v.createElement)(j.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,r){var c={};return u===e.value?(c.isPrimary=!0,c["aria-pressed"]=!0):(c.isDefault=!0,c["aria-pressed"]=!1),Object(v.createElement)(j.Button,o()({key:"".concat(e.label,"-").concat(e.value,"-").concat(r),value:e.value,onClick:t.onClick,"aria-label":n+": "+e.label},c),e.label)}))))}}]),r}(v.Component);t.a=Object(y.withInstanceId)(k)},71:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var n=r(10),o=r.n(n),c=r(8),i=r.n(c),a=r(5),s=function(e){if(a.G){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=function(e){return o()({path:"/wc/store/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))},u=function(e,t){var r=t.className,n=t.showReviewDate,o=t.showReviewerName,c=t.showReviewContent,a=t.showProductName,s=t.showReviewImage,l=t.showReviewRating;return i()(e,r,{"has-image":s,"has-name":o,"has-date":n,"has-rating":l,"has-content":c,"has-product-name":a})}},767:function(e,t,r){"use strict";r.r(t);var n=r(7),o=r.n(n),c=r(0),i=r(1),a=r(31),s=r(60),l=r(53),u=Object(c.createElement)(l.c,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"})),b=(r(136),r(32)),d=r(4),p=(r(2),r(140)),g=function(){return Object(c.createElement)(d.Placeholder,{className:"wc-block-all-reviews",icon:Object(c.createElement)(s.a,{srcElement:u,className:"block-editor-block-icon"}),label:Object(i.__)("All Reviews","woo-gutenberg-products-block")},Object(i.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.","woo-gutenberg-products-block"))},w=r(107),f=function(e){var t=e.attributes,r=e.setAttributes;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(b.InspectorControls,{key:"inspector"},Object(c.createElement)(d.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block")},Object(c.createElement)(d.ToggleControl,{label:Object(i.__)("Product name","woo-gutenberg-products-block"),checked:t.showProductName,onChange:function(){return r({showProductName:!t.showProductName})}}),Object(w.b)(t,r)),Object(c.createElement)(d.PanelBody,{title:Object(i.__)("List Settings","woo-gutenberg-products-block")},Object(w.c)(t,r))),Object(c.createElement)(p.a,{attributes:t,className:"wc-block-all-reviews",icon:Object(c.createElement)(s.a,{icon:u,className:"block-editor-block-icon"}),name:Object(i.__)("All Reviews","woo-gutenberg-products-block"),noReviewsPlaceholder:g}))},v=r(137),m=r(138),h=r(118);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(a.registerBlockType)("woocommerce/all-reviews",{title:Object(i.__)("All Reviews","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Show a list of all product reviews.","woo-gutenberg-products-block"),supports:{html:!1},example:j({},h.a,{attributes:j({},h.a.attributes,{showProductName:!0})}),attributes:j({},v.a,{showProductName:{type:"boolean",default:!0}}),edit:function(e){return Object(c.createElement)(f,e)},save:m.a})},9:function(e,t){!function(){e.exports=this.React}()},92:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(60)),i=r(120),a=r(8),s=r.n(a),l=r(4),u=r(48);r(126);t.a=function(e){var t=e.className,r=e.error,a=e.isLoading,b=e.onRetry;return Object(n.createElement)(l.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:i.a}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:s()("wc-block-api-error",t)},Object(n.createElement)(u.a,{error:r}),b&&Object(n.createElement)(n.Fragment,null,a?Object(n.createElement)(l.Spinner,null):Object(n.createElement)(l.Button,{isDefault:!0,onClick:b},Object(o.__)("Retry","woo-gutenberg-products-block"))))}}});