!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var o,r,i,s=n(4),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){i=!1}function u(t){if(t){if(t!==o){if(t.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+e.join(", "));o=t,c()}}else o!==a&&(o=a,c())}function l(){return i||(i=function(){o||u(a);for(var t,e=o.split(""),n=[],r=s.nextValue();e.length>0;)r=s.nextValue(),t=Math.floor(r*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return o||a},characters:function(t){return u(t),o},seed:function(t){s.seed(t),r!==t&&(c(),r=t)},lookup:function(t){return l()[t]},shuffled:l}},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){},function(t,e,n){"use strict";var o=n(0),r=n(5),i=n(9),s=n(10)||0;function a(){return r(s)}t.exports=a,t.exports.generate=a,t.exports.seed=function(e){return o.seed(e),t.exports},t.exports.worker=function(e){return s=e,t.exports},t.exports.characters=function(t){return void 0!==t&&o.characters(t),o.shuffled()},t.exports.isValid=i},function(t,e,n){"use strict";var o=1;t.exports={nextValue:function(){return(o=(9301*o+49297)%233280)/233280},seed:function(t){o=t}}},function(t,e,n){"use strict";var o,r,i=n(6),s=(n(0),1459707606518),a=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-s));return n===r?o++:(o=0,r=n),e+=i(a),e+=i(t),o>0&&(e+=i(o)),e+=i(n)}},function(t,e,n){"use strict";var o=n(0),r=n(7),i=n(8);t.exports=function(t){for(var e,n=0,s="";!e;)s+=i(r,o.get(),1),e=t<Math.pow(16,n+1),n++;return s}},function(t,e,n){"use strict";var o,r="object"==typeof window&&(window.crypto||window.msCrypto);o=r&&r.getRandomValues?function(t){return r.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=o},function(t,e){t.exports=function(t,e,n){var o=(2<<Math.log(e.length-1)/Math.LN2)-1,r=Math.ceil(1.6*o*n/e.length);n=+n;for(var i="";;)for(var s=t(r),a=0;a<r;a++){var c=s[a]&o;if(e[c]&&(i+=e[c]).length===n)return i}}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6)&&!new RegExp("[^"+o.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){"use strict";n.r(e);n(2);const o={LOW:0,NORMAL:1,HIGH:2},r={EDIT:"edit",DELETE:"delete",ARROW_DOWN:"expand_more",ARROW_UP:"expand_less"},i={DELETE:"delete-note",EDIT:"edit-note",INCREASE_PRIORITY:"increase-priority",DECREASE_PRIORITY:"decrease-priority"},s={list:document.querySelector(".note-list"),form:document.querySelector(".note-editor"),title:document.querySelector('input[name="note_title"]'),body:document.querySelector('textarea[name="note_body"]'),search:document.querySelector(".search-form__input")};var a=class{constructor(t){this._notes=t}get notes(){return this._notes}findNoteById(t){return this._notes.find(e=>e.id===t)}saveNote(t){return t.priority?this._notes.push(t):(t.priority=o.LOW,this._notes.push(t)),t}deleteNote(t){this.notes.splice(this.notes.findIndex(e=>e.id===t),1)}updateNoteContent(t,e){Object.assign(this.findNoteById(t),e)}updateNotePriority(t,e){this.findNoteById(t).priority=e}filterNotesByQuery(t){const e=[];for(const n of this._notes){const o=n.title.toLowerCase(),r=n.body.toLowerCase();(o.includes(t)||r.includes(t))&&e.push(n)}return e}filterNotesByPriority(t){return this._notes.filter(e=>e.priority===t)}static get Priority(){return{LOW:0,NORMAL:1,HIGH:2}}};function c(t,e,n=null,o=null){const r=document.createElement(t);return e.split(" ").map(t=>r.classList.add(t)),o&&(r.dataset.id=o),n&&(r.textContent=n),r}function u(t,e){const n=c("button","action");n.setAttribute("data-action",t);const o=c("i","material-icons action__icon",e);return n.append(o),n}var l=function({id:t,title:e,body:n,priority:o}){const s=c("li","note-list__item",null,t),a=c("div","note");s.append(a);const l=c("div","note__content");l.append(c("h2","note__title",e)),l.append(c("p","note__body",n)),a.append(l);const d=c("footer","note__footer"),f=c("section","note__section"),p=c("section","note__section");return f.append(u(i.DECREASE_PRIORITY,r.ARROW_DOWN)),f.append(u(i.INCREASE_PRIORITY,r.ARROW_UP)),f.append(c("span","note__priority",`Priority: ${o}`)),p.append(u(i.EDIT,r.EDIT)),p.append(u(i.DELETE,r.DELETE)),d.append(f),d.append(p),a.append(d),s};var d=function(t,e){t.innerHTML="",t.append(...e.map(t=>l(t)))};const f=[{id:"id-1",title:"JavaScript essentials",body:"Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",priority:o.HIGH},{id:"id-2",title:"Refresh HTML and CSS",body:"Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",priority:o.NORMAL},{id:"id-3",title:"Get comfy with Frontend frameworks",body:"First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",priority:o.NORMAL},{id:"id-4",title:"Winter clothes",body:"Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",priority:o.LOW}];var p=function({target:t}){if("I"===t.nodeName&&"delete-note"===t.parentNode.dataset.action){const e=t.closest(".note-list__item"),{id:n}=e.dataset;e.remove(),x.deleteNote(n)}};var y=function(t){t.preventDefault();const{target:e}=t;if("edit-note"===e.dataset.action||"edit-note"===e.parentNode.dataset.action){const t=e.closest(".note-list__item"),{id:n}=t.dataset,o=x.findNoteById(n),r=t.querySelector(".note__title"),i=t.querySelector(".note__body");t.classList.toggle("active"),t.classList.contains("active")?(r.setAttribute("contenteditable",!0),i.setAttribute("contenteditable",!0),r.style.backgroundColor="#2E8B57",i.style.backgroundColor="#2E8B57",r.style.color="#fff",i.style.color="#fff",e.style.backgroundColor="#2E8B57",e.style.borderRadius="50%",o.title=r.textContent,o.body=i.textContent):(r.setAttribute("contenteditable",!1),i.setAttribute("contenteditable",!1),r.style.backgroundColor="#fff",i.style.backgroundColor="#fff",r.style.color="#7c7879",i.style.color="#7c7879",e.style.backgroundColor="#7c7879",e.style.borderRadius="50%")}};var h=function(){s.list.innerHTML="",d(s.list,x.notes)};var b=function(t){const{target:e}=t,n=e.closest(".note-list__item"),{id:o}=n.dataset,r=x.findNoteById(o);"decrease-priority"!==e.dataset.action&&"decrease-priority"!==e.parentNode.dataset.action||0!==r.priority&&(r.priority=r.priority-1,h()),"increase-priority"!==e.dataset.action&&"increase-priority"!==e.parentNode.dataset.action||2!==r.priority&&(r.priority=r.priority+1,h())};var g=function(t){const e=x.filterNotesByQuery(t.target.value);d(s.list,e)},v=n(1),_=n.n(v);var m=function(t,e){t.append(l(e))};var E=function(t){t.preventDefault();const e=s.title.value||"",n=s.body.value||"";if(0===e.length||0===n.length)return void alert("Необходимо заполнить все поля!");const o={id:_.a.generate(),title:e,body:n};x.saveNote(o),t.target.reset(),m(s.list,o)};const x=new a(f);d(s.list,x.notes),s.form.addEventListener("submit",E),s.list.addEventListener("click",b),s.list.addEventListener("click",p),s.search.addEventListener("input",g),s.list.addEventListener("click",y)}]);
//# sourceMappingURL=bundle.js.map