/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,i=a.hasOwnProperty,l=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function v(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new k(n||[]);return l(a,"_invoke",{value:j(t,r,i)}),a}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=v;var h="suspendedStart",d="suspendedYield",y="executing",g="completed",x={};function b(){}function w(){}function L(){}var _={};p(_,u,(function(){return this}));var O=Object.getPrototypeOf,E=O&&O(O(U([])));E&&E!==a&&i.call(E,u)&&(_=E);var T=L.prototype=b.prototype=Object.create(_);function N(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,a,l,s){var u=m(t[o],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,l,s)}),(function(t){r("throw",t,l,s)})):e.resolve(f).then((function(t){c.value=t,l(c)}),(function(t){return r("throw",t,l,s)}))}s(u.arg)}var o;l(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function j(t,r,n){var o=h;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var s=R(l,n);if(s){if(s===x)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=m(t,r,n);if("normal"===u.type){if(o=n.done?g:d,u.arg===x)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function R(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var a=m(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,x;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,x):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,x)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function U(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=L,l(T,"constructor",{value:L,configurable:!0}),l(L,"constructor",{value:w,configurable:!0}),w.displayName=p(L,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,p(t,f,"GeneratorFunction")),t.prototype=Object.create(T),t},r.awrap=function(t){return{__await:t}},N(P.prototype),p(P.prototype,c,(function(){return this})),r.AsyncIterator=P,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new P(v(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(T),p(T,f,"Generator"),p(T,u,(function(){return this})),p(T,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=U,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),x}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:U(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),x}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{extend:()=>u});const t=flarum.core.compat["common/extenders"];var e=r.n(t);function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}const i=flarum.core.compat["common/Model"];var l=r.n(i),s=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).name=l().attribute("name"),e.condition=l().attribute("conditions"),e.icon=l().attribute("icon"),e.level=l().attribute("level"),e.group_id=l().attribute("group_id"),e.next=l().hasOne("next"),e}return a(e,t),e}(l());const u=[(new(e().Store)).add("trust-levels",s)],c=flarum.core.compat["forum/app"];var f=r.n(c);const p=flarum.core.compat["common/models/User"];var v=r.n(p);const h=flarum.core.compat["forum/components/UserPage"];var d=r.n(h);const y=flarum.core.compat["common/extend"],g=flarum.core.compat["common/components/LinkButton"];var x=r.n(g);function b(t,e,r,n,o,a,i){try{var l=t[a](i),s=l.value}catch(t){return void r(t)}l.done?e(s):Promise.resolve(s).then(n,o)}var w=r(183),L=r.n(w);const _=flarum.core.compat["common/components/LoadingIndicator"];var O=r.n(_);const E=flarum.core.compat["common/components/Placeholder"];var T=r.n(E);const N=flarum.extensions["xypp-collector"];function P(t,e,r){return t?e:r||""}var j=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).loading=!1,e.valueUtils=void 0,e.current={key:"current",title:"",names:[],conditions:[],user:[],target:[],achieved:[]},e.next={key:"next",title:"",names:[],conditions:[],user:[],target:[],achieved:[]},e}a(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.user=null,this.loading=!0,this.loadUser(m.route.param("username"))},r.show=function(e){t.prototype.show.call(this,e),this.user=e,this.loadData()},r.loadData=function(){var t,e=(t=L().mark((function t(){var e,r,n,o,a,i=this;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().store.find("users",this.user.id()+"",{include:"trustLevel,trustLevel.next"});case 2:return e=t.sent,r=N.HumanizeUtils.getInstance(f()),t.next=6,r.loadDefinition();case 6:return t.prev=6,t.next=9,(0,N.getConditionMap)(!1,this.user);case 9:n=t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(6),n={};case 15:this.valueUtils=new N.userValueUtil(r,n),o=e.trustLevel(),a=o&&(null==o?void 0:o.next()),[[o,this.current,f().translator.trans("xypp-trust-levels.forum.page.current-level")],[a,this.next,f().translator.trans("xypp-trust-levels.forum.page.next-level")]].forEach((function(t){var e=t[0],n=t[1];n.level=e,n.title=t[2],e&&e.condition().forEach((function(t){n.conditions.push(t);var e=i.valueUtils.getValue(t);n.user.push(e),n.target.push(t.value),n.achieved.push(!1!==e&&i.conditionOp(e,t.operator,t.value)),n.names.push(r.humanizeCondition(Object.assign(t,{value:""})))}))})),this.loading=!1,m.redraw();case 21:case"end":return t.stop()}}),t,this,[[6,12]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){b(a,n,o,i,l,"next",t)}function l(t){b(a,n,o,i,l,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),r.content=function(){return!this.user||this.loading?m(O(),{size:46}):m("div",{className:"TrustLevelPage container"},m("h2",null,f().translator.trans("xypp-trust-levels.forum.page.title")),[this.current,this.next].map(this.makeTable))},r.makeTable=function(t){var e,r,n;return t.level?m("div",{className:"TrustLevelPage-table"},m("div",{className:"TrustLevelPage-table-header"},m("h3",null,t.title)),m("div",{className:"TrustLevelPage-table-level"},P(!(null==(e=t.level)||!e.icon()),m("i",{className:null==(r=t.level)?void 0:r.icon()})),m("span",{className:"level-name level-name-"+t.key},null==(n=t.level)?void 0:n.name())),P(!!t.level.condition().length,m("table",{className:"Table Level-table-"+t.key},m("thead",null,m("tr",null,m("th",null,f().translator.trans("xypp-trust-levels.forum.page.condition")),m("th",null,f().translator.trans("xypp-trust-levels.forum.page.required")),m("th",null,f().translator.trans("xypp-trust-levels.forum.page.your")))),m("tbody",null,t.names.map((function(e,r){return m("tr",{"data-idx":r,className:"condition-row "+P(t.achieved[r],"achieved")},m("td",{className:"col-condition"},e),m("td",{className:"col-required"},t.target[r]),m("td",{className:"col-your"},P(!1===t.user[r],"-",t.user[r])))})))),m(T(),{text:f().translator.trans("xypp-trust-levels.forum.page.no-condition")}))):m("div",{className:"TrustLevelPage-table"},m("div",{className:"TrustLevelPage-table-header"},m("h3",null,t.title)),m("div",{className:"TrustLevelPage-table-level"},m("i",{class:"fas fa-border-none"})," ",m("span",{className:"level-name level-name-"+t.key},f().translator.trans("xypp-trust-levels.forum.page.no-info"))))},r.conditionOp=function(t,e,r){switch(e){case N.OPERATOR.EQUAL:return t==r;case N.OPERATOR.GREATER_THAN:return t>r;case N.OPERATOR.GREATER_THAN_OR_EQUAL:return t>=r;case N.OPERATOR.LESS_THAN:return t<r;case N.OPERATOR.LESS_THAN_OR_EQUAL:return t<=r;case N.OPERATOR.NOT_EQUAL:return t!=r}},e}(d());const R=flarum.core.compat["forum/components/Notification"];var S=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var r=e.prototype;return r.excerpt=function(){var t=this.attrs.notification.subject(),e=this.attrs.notification.attribute("data.from");if(!e)return f().translator.trans("xypp-trust-levels.forum.notification.level-set-excerpt",{name:t.name(),level:t.level()});var r=this.attrs.notification.attribute("data.from_level");return f().translator.trans("xypp-trust-levels.forum.notification.level-change-excerpt",{name:t.name(),level:t.level(),from:e,fromLevel:r})},r.icon=function(){var t=this.attrs.notification.attribute("data.from_level");return t?t>this.attrs.notification.subject().level()?"fas fa-level-down-alt":"fas fa-level-up-alt":"fas fa-layer-group"},r.href=function(){return f().route("user.trust-level",{username:this.attrs.notification.fromUser().slug()})},r.content=function(){var t=this.attrs.notification.subject(),e=this.attrs.notification.attribute("data.from");if(!e)return f().translator.trans("xypp-trust-levels.forum.notification.level",{name:t.name(),level:t.level()});var r=this.attrs.notification.attribute("data.from_level");return r<t.level()?f().translator.trans("xypp-trust-levels.forum.notification.level-up",{name:t.name(),level:t.level(),from:e,fromLevel:r}):f().translator.trans("xypp-trust-levels.forum.notification.level-down",{name:t.name(),level:t.level(),from:e,fromLevel:r})},e}(r.n(R)());const A=flarum.core.compat["forum/components/NotificationGrid"];var k=r.n(A);f().initializers.add("xypp/flarum-trust-levels",(function(){v().prototype.trustLevel=l().hasOne("trustLevel"),f().routes["user.trust-level"]={path:"/u/:username/trust-level",component:j},(0,y.extend)(d().prototype,"navItems",(function(t){var e;f().session.user&&t.add("trust-levels",x().component({href:f().route("user.trust-level",{username:null==(e=this.user)?void 0:e.username()}),icon:"fas fa-layer-group"},[f().translator.trans("xypp-trust-levels.forum.nav-title")]),10)})),(0,y.extend)(k().prototype,"notificationTypes",(function(t){t.add("trust_level_change",{name:"trust_level_change",icon:"fas fa-layer-group",label:f().translator.trans("xypp-trust-levels.forum.notification.name")})})),f().notificationComponents.trust_level_change=S}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map