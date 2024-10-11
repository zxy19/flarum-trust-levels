/*! For license information please see admin.js.LICENSE.txt */
(()=>{var t={24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,i=a.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",m=l.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),i=new P(n||[]);return s(a,"_invoke",{value:j(t,r,i)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var f="suspendedStart",v="suspendedYield",y="executing",g="completed",b={};function x(){}function w(){}function _(){}var L={};p(L,u,(function(){return this}));var N=Object.getPrototypeOf,S=N&&N(N(C([])));S&&S!==a&&i.call(S,u)&&(L=S);var E=_.prototype=x.prototype=Object.create(L);function O(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function B(t,e){function r(o,a,s,l){var u=h(t[o],t,a);if("throw"!==u.type){var c=u.arg,m=c.value;return m&&"object"==n(m)&&i.call(m,"__await")?e.resolve(m.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):e.resolve(m).then((function(t){c.value=t,s(c)}),(function(t){return r("throw",t,s,l)}))}l(u.arg)}var o;s(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function j(t,r,n){var o=f;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var l=k(s,n);if(l){if(l===b)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=h(t,r,n);if("normal"===u.type){if(o=n.done?g:v,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=_,s(E,"constructor",{value:_,configurable:!0}),s(_,"constructor",{value:w,configurable:!0}),w.displayName=p(_,m,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,p(t,m,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},O(B.prototype),p(B.prototype,c,(function(){return this})),r.AsyncIterator=B,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new B(d(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(E),p(E,m,"Generator"),p(E,u,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{extend:()=>u});const t=flarum.core.compat["common/extenders"];var e=r.n(t);function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}const i=flarum.core.compat["common/Model"];var s=r.n(i),l=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).name=s().attribute("name"),e.condition=s().attribute("conditions"),e.icon=s().attribute("icon"),e.level=s().attribute("level"),e.group_id=s().attribute("group_id"),e.next=s().hasOne("next"),e}return a(e,t),e}(s());const u=[(new(e().Store)).add("trust-levels",l)],c=flarum.core.compat["admin/app"];var p=r.n(c);function d(t,e,r,n,o,a,i){try{var s=t[a](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){d(a,n,o,i,s,"next",t)}function s(t){d(a,n,o,i,s,"throw",t)}i(void 0)}))}}var f=r(183),v=r.n(f);const y=flarum.core.compat["admin/components/ExtensionPage"];var g=r.n(y);const b=flarum.core.compat["common/components/Button"];var x=r.n(b);const w=flarum.core.compat["common/components/LoadingIndicator"];var _=r.n(w);const L=flarum.extensions["xypp-collector"];function N(t,e,r){return t?e:r||""}const S=flarum.core.compat["common/components/Modal"];var E=r.n(S);const O=flarum.core.compat["common/components/Select"];var B=r.n(O);const j=flarum.core.compat["common/utils/Stream"];var k=r.n(j),F=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).conditions=void 0,e.name="",e.icon="",e.level=0,e.group_id=0,e.groups={"-1":p().translator.trans("xypp-trust-levels.admin.create-modal.null_group")+""},e.loadedLevels={},e.referenceLevelId=0,e}a(e,t);var r=e.prototype;return r.oninit=function(e){var r=this;t.prototype.oninit.call(this,e),this.attrs.item?(this.conditions=new(k())(this.attrs.item.condition()),this.name=this.attrs.item.name(),this.level=this.attrs.item.level(),this.icon=this.attrs.item.icon(),this.group_id=this.attrs.item.group_id()):this.conditions=new(k())([]),p().store.all("groups").forEach((function(t){r.groups[t.id()+""]=t.nameSingular()})),p().store.all("trust-levels").forEach((function(t){t.level()>r.referenceLevelId&&(!r.attrs.item||r.level>t.level())&&(r.referenceLevelId=t.level()),r.loadedLevels[parseInt(t.id()+"")]="#"+t.level()+":"+t.name()}))},r.className=function(){return"Modal Modal--large"},r.title=function(){return this.attrs.item?p().translator.trans("xypp-trust-levels.admin.create-modal.edit",[this.attrs.item]):p().translator.trans("xypp-trust-levels.admin.create-modal.title")},r.oncreate=function(e){t.prototype.oncreate.call(this,e)},r.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",{for:"xypp-trust-levels-create-ipt-name"},p().translator.trans("xypp-trust-levels.admin.create-modal.name")),m("input",{id:"xypp-trust-levels-create-ipt-name",required:!0,className:"FormControl",type:"text",step:"any",value:this.name,onchange:function(e){t.name=e.target.value}.bind(this)})),m("div",{className:"Form-group"},m("label",{for:"xypp-trust-levels-create-ipt-icon"},p().translator.trans("xypp-trust-levels.admin.create-modal.icon")),m("div",{class:"xypp-trust-levels-create-icon-preview"},m("input",{id:"xypp-trust-levels-create-ipt-icon",className:"FormControl",type:"text",step:"any",value:this.icon,onchange:function(e){t.icon=e.target.value}.bind(this)}),N(!!this.icon,m("i",{className:this.icon})))),m("div",{className:"Form-group"},m("label",null,p().translator.trans("xypp-trust-levels.admin.create-modal.condition")),m("div",null,m(B(),{options:this.loadedLevels,value:this.referenceLevelId,onchange:function(e){t.referenceLevelId=e}.bind(this)}),m(x(),{className:"Button Button--primary",onclick:this.copyData.bind(this)},p().translator.trans("xypp-trust-levels.admin.create-modal.copy-data")),m(x(),{className:"Button Button--primary",onclick:this.copyName.bind(this)},p().translator.trans("xypp-trust-levels.admin.create-modal.copy-name"))),m(L.ConditionConfigure,{conditions:this.conditions})),m("div",{className:"Form-group"},m("label",{for:"xypp-trust-levels-create-ipt-re_available"},p().translator.trans("xypp-trust-levels.admin.create-modal.group")),m(B(),{className:"FormControl",value:this.group_id,options:this.groups,onchange:function(e){t.group_id=parseInt(e)}.bind(this)}))),m("div",{className:"Form-group"},m(x(),{class:"Button Button--primary",type:"submit",loading:this.loading},N(!!this.attrs.item,p().translator.trans("xypp-trust-levels.admin.create-modal.button-edit"),p().translator.trans("xypp-trust-levels.admin.create-modal.button")))))},r.onsubmit=function(){var t=h(v().mark((function t(e){var r,n,o;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.loading=!0,m.redraw(),r=this.attrs.item||p().store.createRecord("trust-levels"),t.prev=4,n=this.conditions(),t.next=8,r.save({conditions:n.filter((function(t){return"*"!=t.name})),name:this.name,icon:this.icon,group_id:this.group_id});case 8:o=t.sent,this.attrs.update&&this.attrs.update(o),p().modal.close();case 11:return t.prev=11,this.loading=!1,m.redraw(),t.finish(11);case 15:case"end":return t.stop()}}),t,this,[[4,,11,15]])})));return function(e){return t.apply(this,arguments)}}(),r.copyFrom=function(t){void 0===t&&(t=!1);var e=this.conditions(),r=p().store.getById("trust-levels",this.referenceLevelId+"");r&&(r.condition().forEach((function(r){var n=e.find((function(t){return t.name==r.name&&t.operator==r.operator&&t.span==r.span}));n?t&&(n.calculate=r.calculate,n.value=r.value,n.operator=r.operator,n.span=r.span,n.alter_name=r.alter_name):e.push(r)})),this.conditions(e),m.redraw())},r.copyData=function(){this.copyFrom(!0)},r.copyName=function(){this.copyFrom(!1)},e}(E()),I=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).items=[],e.more=!1,e.item_loading=!1,e.offset=0,e.currentFilter="all",e.sortChanged=!1,e.isRemoving={},e.savingSorting=!1,e}a(e,t);var r=e.prototype;return r.oncreate=function(e){t.prototype.oncreate.call(this,e),L.HumanizeUtils.getInstance(p()),this.loadData()},r.content=function(t){var e=this;return m("div",{className:"container"},this.buildSettingComponent({type:"boolean",setting:"xypp-trust-levels.no-auto-update",label:p().translator.trans("xypp-trust-levels.admin.no-auto-update")}),this.submitButton(),m("h2",null,p().translator.trans("xypp-trust-levels.admin.data")),m("table",{className:"xypp-trust-levels-adminPage-table Table"},m("thead",null,m("tr",null,m("th",null,p().translator.trans("xypp-trust-levels.admin.table.id")),m("th",null,m("i",{class:"fas fa-icons"})),m("th",null,p().translator.trans("xypp-trust-levels.admin.table.name")),m("th",null,p().translator.trans("xypp-trust-levels.admin.table.level")),m("th",null,p().translator.trans("xypp-trust-levels.admin.table.group")),m("th",null,p().translator.trans("xypp-trust-levels.admin.table.operation")))),m("tbody",null,this.items.map((function(t,r){var n,o=e.isRemoving[t.id()]||!1;return m("tr",null,m("td",null,t.id()),m("td",null,N(!!t.icon(),m("i",{className:t.icon()}))),m("td",null,t.name()),m("td",null,N(t.attribute("levelChanged"),"*"),t.level()),m("td",null,null==(n=p().store.getById("groups",t.group_id()+""))?void 0:n.nameSingular()),m("td",null,m(x(),{className:"Button Button--primary",onclick:e.click.bind(e),"data-id":t.id()},m("i",{class:"fas fa-edit"})),m(x(),{className:"Button Button--danger",onclick:e.remove.bind(e),"data-id":t.id(),disabled:o,loading:o},m("i",{class:"fas fa-trash"})),N(!!e.items[r-1],m(x(),{className:"Button Button--secondary",onclick:e.swap(r,-1),"data-id":t.id()},m("i",{class:"fas fa-sort-up"}))),N(!!e.items[r+1],m(x(),{className:"Button Button--secondary",onclick:e.swap(r,1),"data-id":t.id()},m("i",{class:"fas fa-sort-down"})))))})),m("tr",null,m("td",null,m(x(),{className:"Button Button--primary",onclick:this.create.bind(this)},p().translator.trans("xypp-trust-levels.admin.table.create"))),m("td",null,N(this.sortChanged,m(x(),{className:"Button Button--primary",onclick:this.submitSort.bind(this),loading:this.savingSorting,disabled:this.savingSorting},p().translator.trans("xypp-trust-levels.admin.table.save-level")))),m("td",null,N(this.item_loading,m(_(),null)))))))},r.create=function(){var t=this;p().modal.show(F,{item:null,update:function(e){t.items.push(e),t.items.sort((function(t,e){return t.level()-e.level()})),m.redraw()}})},r.loadData=function(){var t=h(v().mark((function t(){var e,r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.item_loading=!0,m.redraw(),t.next=4,L.HumanizeUtils.getInstance(p()).loadDefinition();case 4:return t.next=6,p().store.find("trust-levels");case 6:return r=t.sent,t.next=9,p().store.find("groups");case 9:(e=this.items).push.apply(e,r),this.items.sort((function(t,e){return t.level()-e.level()})),this.item_loading=!1,m.redraw();case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r.click=function(t){var e=this,r=t.currentTarget.getAttribute("data-id");r&&p().modal.show(F,{item:p().store.getById("trust-levels",r),update:function(t){e.items=e.items.map((function(t){return t.id(),t})),e.items.sort((function(t,e){return t.level()-e.level()})),m.redraw()}})},r.remove=function(t){var e=this,r=t.currentTarget.getAttribute("data-id");if(r){var n=p().store.getById("trust-levels",r);n&&confirm(p().translator.trans("xypp-trust-levels.admin.table.remove_confirm")+"")&&(this.isRemoving[r]=!0,m.redraw(),n.delete().then((function(){e.items=e.items.filter((function(t){return t.id()!=r})),e.isRemoving[r]=!1,m.redraw()})))}},r.swap=function(t,e){var r=this;return function(){var n=Math.max(t+e,t),o=Math.min(t+e,t),a=r.items[n].level(),i=r.items[o].level();r.items[n].pushAttributes({level:i,levelChanged:!0}),r.items[o].pushAttributes({level:a,levelChanged:!0}),r.sortChanged=!0,r.items.sort((function(t,e){return t.level()-e.level()})),m.redraw()}.bind(this)},r.submitSort=function(){var t=h(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.savingSorting=!0,m.redraw(),e={},this.items.forEach((function(t){t.attribute("levelChanged")&&(e[parseInt(t.id()||"")]=t.level())})),t.prev=4,t.next=7,p().request({method:"POST",url:p().forum.attribute("apiUrl")+"/trust-levels/sort",body:{sorts:e}});case 7:this.sortChanged=!1,this.items.forEach((function(t){t.pushAttributes({levelChanged:!1})}));case 9:return t.prev=9,this.savingSorting=!1,m.redraw(),t.finish(9);case 13:case"end":return t.stop()}}),t,this,[[4,,9,13]])})));return function(){return t.apply(this,arguments)}}(),e}(g());p().initializers.add("xypp/flarum-trust-levels",(function(){p().extensionData.for("xypp-trust-levels").registerPage(I)}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map