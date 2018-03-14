!function(t){function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=6)}([function(t,i,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var l=function(){function t(t,i){var e=[],s=!0,n=!1,l=void 0;try{for(var c,a=t[Symbol.iterator]();!(s=(c=a.next()).done)&&(e.push(c.value),!i||e.length!==i);s=!0);}catch(t){n=!0,l=t}finally{try{!s&&a.return&&a.return()}finally{if(n)throw l}}return e}return function(i,e){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return t(i,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),a=e(1),o=s(a),r=e(2),d=s(r),u=e(3),h=s(u);e(4);var m=function(){function t(){n(this,t),this.template=o.default,this.defaultOptions={timeFormat:"standard",autoNext:!1},this.cachedEls={},this.events=new h.default,this.setupTemplate(),this.cachedEls.body=document.body;var i=this.cachedEls.body.getElementsByClassName("mtp-overlay"),e=l(i,1);this.cachedEls.overlay=e[0];var s=this.cachedEls.overlay.getElementsByClassName("mtp-wrapper"),c=l(s,1);this.cachedEls.wrapper=c[0];var a=this.cachedEls.wrapper.getElementsByClassName("mtp-picker"),r=l(a,1);this.cachedEls.picker=r[0];var d=this.cachedEls.wrapper.getElementsByClassName("mtp-meridiem"),u=l(d,1);this.cachedEls.meridiem=u[0],this.cachedEls.meridiemSpans=this.cachedEls.meridiem.getElementsByTagName("span");var m=this.cachedEls.wrapper.getElementsByClassName("mtp-display__hours"),p=l(m,1);this.cachedEls.displayHours=p[0];var v=this.cachedEls.wrapper.getElementsByClassName("mtp-display__minutes"),y=l(v,1);this.cachedEls.displayMinutes=y[0];var E=this.cachedEls.picker.getElementsByClassName("mtp-actions__cancel"),f=l(E,1);this.cachedEls.buttonCancel=f[0];var k=this.cachedEls.picker.getElementsByClassName("mtp-actions__back"),g=l(k,1);this.cachedEls.buttonBack=g[0];var b=this.cachedEls.picker.getElementsByClassName("mtp-actions__next"),_=l(b,1);this.cachedEls.buttonNext=_[0];var L=this.cachedEls.picker.getElementsByClassName("mtp-actions__finish"),M=l(L,1);this.cachedEls.buttonFinish=M[0],this.cachedEls.displayGroups={};var H=this.cachedEls.wrapper.getElementsByClassName("hour-group"),w=l(H,1);this.cachedEls.displayGroups.hours=w[0];var x=this.cachedEls.wrapper.getElementsByClassName("minute-group"),N=l(x,1);this.cachedEls.displayGroups.minutes=N[0];var S=this.cachedEls.picker.getElementsByClassName("mtp-clock__hours"),T=l(S,1);this.cachedEls.clockHours=T[0];var B=this.cachedEls.picker.getElementsByClassName("mtp-clock__minutes"),C=l(B,1);this.cachedEls.clockMinutes=C[0];var O=this.cachedEls.picker.getElementsByClassName("mtp-clock__hours-military"),D=l(O,1);this.cachedEls.clockMilitaryHours=D[0];var A=this.cachedEls.picker.getElementsByClassName("mtp-clock__hand"),j=l(A,1);this.cachedEls.clockHand=j[0],this.cachedEls.clockHoursLi=this.cachedEls.clockHours.getElementsByTagName("li"),this.cachedEls.clockMinutesLi=this.cachedEls.clockMinutes.getElementsByTagName("li"),this.cachedEls.clockMilitaryHoursLi=this.cachedEls.clockMilitaryHours.getElementsByTagName("li"),this.setEvents()}return c(t,[{key:"bindInput",value:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t instanceof HTMLElement?t:document.querySelector(t);s.mtpOptions=(0,d.default)({},this.defaultOptions,e),s.addEventListener("focus",function(t){return i.showEvent(t)})}},{key:"openOnInput",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.inputEl=t instanceof HTMLElement?t:document.querySelector(t),this.inputEl.mtpOptions=(0,d.default)({},this.defaultOptions,i),this.show()}},{key:"setupTemplate",value:function(){this.isTemplateInDOM()||document.body.insertAdjacentHTML("beforeend",o.default)}},{key:"highlightHourDisplayGroup",value:function(){this.cachedEls.displayGroups.hours.classList.add("active-group"),this.cachedEls.displayGroups.minutes.classList.remove("active-group")}},{key:"highlightMinuteDisplayGroup",value:function(){this.cachedEls.displayGroups.hours.classList.remove("active-group"),this.cachedEls.displayGroups.minutes.classList.add("active-group")}},{key:"setEvents",value:function(){var t=this;this.hasSetEvents()||(this.cachedEls.overlay.addEventListener("click",function(i){return t.hideEvent(i)}),this.cachedEls.buttonCancel.addEventListener("click",function(i){return t.hideEvent(i)}),this.cachedEls.buttonNext.addEventListener("click",function(){return t.showMinutes()}),this.cachedEls.buttonBack.addEventListener("click",function(){return t.showHours()}),this.cachedEls.buttonFinish.addEventListener("click",function(){return t.finish()}),[].forEach.call(this.cachedEls.meridiemSpans,function(i){i.addEventListener("click",function(i){return t.meridiemSelectEvent(i)})}),[].forEach.call(this.cachedEls.clockHoursLi,function(i){i.addEventListener("click",function(i){t.hourSelectEvent(i,t.cachedEls.clockHours,t.cachedEls.clockHoursLi)})}),[].forEach.call(this.cachedEls.clockMilitaryHoursLi,function(i){i.addEventListener("click",function(i){t.hourSelectEvent(i,t.cachedEls.clockMilitaryHours,t.cachedEls.clockMilitaryHoursLi)})}),[].forEach.call(this.cachedEls.clockMinutesLi,function(i){i.addEventListener("click",function(i){t.minuteSelectEvent(i,t.cachedEls.clockMinutes,t.cachedEls.clockMinutesLi)})}),this.cachedEls.wrapper.classList.add("mtp-events-set"),this.events.on("hoursShown",function(){t.highlightHourDisplayGroup()}),this.events.on("minutesShown",function(){t.highlightMinuteDisplayGroup()}))}},{key:"show",value:function(){var t=this.isMilitaryFormat();this.inputEl.blur(),this.toggleHoursVisible(!0,t),this.toggleMinutesVisible(),this.inputEl.value.length>0?this.setTime(this.inputEl.value):this.setDisplayTime({hours:t?"00":"12",minutes:"0"}),this.cachedEls.body.style.overflow="hidden",this.cachedEls.meridiem.style.visibility=t?"none":"visible",this.cachedEls.overlay.style.display="block",this.cachedEls.clockHand.style.height=t?"90px":"105px",this.events.trigger("show")}},{key:"showEvent",value:function(t){this.inputEl=t.target,this.show()}},{key:"hide",value:function(){this.cachedEls.overlay.style.display="none",this.cachedEls.body.style.overflow="",this.inputEl.dispatchEvent(new Event("blur")),this.resetState(),this.events.trigger("hide")}},{key:"hideEvent",value:function(t){t.stopPropagation();var i=["mtp-overlay","mtp-actions__cancel"],e=t.target.classList;i.some(function(t){return e.contains(t)})&&this.hide()}},{key:"resetState",value:function(){this.currentStep="hours",this.toggleHoursVisible(!0,this.isMilitaryFormat()),this.toggleMinutesVisible(),this.cachedEls.clockHoursLi[0].dispatchEvent(new Event("click")),this.cachedEls.clockMinutesLi[0].dispatchEvent(new Event("click")),this.cachedEls.clockMilitaryHoursLi[0].dispatchEvent(new Event("click")),this.cachedEls.meridiemSpans[0].dispatchEvent(new Event("click")),this.highlightHourDisplayGroup()}},{key:"setDisplayTime",value:function(t){var i=t.hours,e=t.minutes;if(i&&("string"==typeof i||i instanceof String?this.cachedEls.displayHours.innerHTML=i.trim():this.cachedEls.displayHours.innerHTML=i),e){var s=e<10?"0"+e:e;"string"==typeof s||s instanceof String?this.cachedEls.displayMinutes.innerHTML=s.trim():this.cachedEls.displayMinutes.innerHTML=s}}},{key:"rotateHand",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,e=t*i-180,s="rotate("+e+"deg)";this.cachedEls.clockHand.style.transform=s,this.cachedEls.clockHand.style["-webkit-transform"]=s,this.cachedEls.clockHand.style["-ms-transform"]=s}},{key:"showHours",value:function(){var t=this.isMilitaryFormat(),i=t?this.cachedEls.clockMilitaryHoursLi:this.cachedEls.clockHoursLi;this.toggleHoursVisible(!0,t),this.toggleMinutesVisible(),this.rotateHand(this.getActiveIndex(i)),this.events.trigger("hoursShown")}},{key:"showMinutes",value:function(){var t=this.cachedEls.clockMinutesLi;this.toggleHoursVisible(),this.toggleMinutesVisible(!0),this.rotateHand(this.getActiveIndex(t),6),this.cachedEls.clockHand.style.height="115px",this.events.trigger("minutesShown")}},{key:"finish",value:function(){this.timeSelected(),this.hide()}},{key:"toggleHoursVisible",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&(this.currentStep="hours"),this.cachedEls.clockHours.style.display=t&&!i?"block":"none",this.cachedEls.clockMilitaryHours.style.display=t&&i?"block":"none",this.cachedEls.buttonNext.style.display=t?"none":"inline-block"}},{key:"toggleMinutesVisible",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(this.currentStep="minutes"),this.cachedEls.clockMinutes.style.display=t?"block":"none",this.cachedEls.buttonBack.style.display=t?"inline-block":"none",this.cachedEls.buttonNext.style.display=t?"none":"inline-block",this.cachedEls.buttonFinish.style.display=t?"inline-block":"none"}},{key:"getActiveIndex",value:function(t){var i=0;return[].some.call(t,function(t,e){return!!t.classList.contains("mtp-clock--active")&&(i=e,!0)}),i}},{key:"timeSelected",value:function(){var t=this.cachedEls.displayHours.innerHTML,i=this.cachedEls.displayMinutes.innerHTML,e=this.isMilitaryFormat()?"":Array.from(this.cachedEls.meridiemSpans).find(function(t){return t.classList.contains("mtp-meridiem--active")}).innerText,s=t+":"+i+" "+e;this.inputEl.value=s.trim(),this.inputEl.dispatchEvent(new Event("input")),this.events.trigger("timeSelected",{hours:t,minutes:i,meridiem:e,value:s})}},{key:"setActiveEl",value:function(t,i){t.getElementsByClassName("mtp-clock--active")[0].classList.remove("mtp-clock--active"),i.classList.add("mtp-clock--active")}},{key:"meridiemSelectEvent",value:function(t){var i=t.target,e=this.cachedEls.meridiem.getElementsByClassName("mtp-meridiem--active")[0];i.innerHTML;e.isEqualNode(i)||(e.classList.remove("mtp-meridiem--active"),i.classList.add("mtp-meridiem--active"))}},{key:"hourSelectEvent",value:function(t,i,e){t.stopPropagation();var s=t.target,n=s.parentElement,l=n.classList.contains("mtp-clock__hours--inner");this.cachedEls.clockHand.style.height=l?"90px":"105px",this.setActiveEl(i,s);var c=this.getActiveIndex(e);this.setDisplayTime({hours:s.innerHTML}),this.rotateHand(c),this.events.trigger("hourSelected")}},{key:"minuteSelectEvent",value:function(t,i,e){t.stopPropagation();var s=t.target;this.setActiveEl(i,s);var n=this.getActiveIndex(e);this.setDisplayTime({minutes:n}),this.rotateHand(n,6),this.events.trigger("minuteSelected")}},{key:"isMilitaryFormat",value:function(){return"military"===this.inputEl.mtpOptions.timeFormat}},{key:"setTime",value:function(t){var i=t.split(" "),e=i[0].split(":").map(function(t){return parseInt(t,10)});this.setDisplayTime({hours:e[0],minutes:e[1]});var s=e[0];if(this.isMilitaryFormat())s=e[0]>12?e[0]-12:e[0]+12,12===s&&(s=0),24===s&&(s=12);else{var n=i[1],l=this.cachedEls.meridiem.getElementsByClassName("mtp-meridiem--active")[0],c=Array.from(this.cachedEls.meridiemSpans).find(function(t){return t.innerText===n});l.classList.remove("mtp-meridiem--active"),c.classList.add("mtp-meridiem--active")}var a=this.isMilitaryFormat()?this.cachedEls.clockMilitaryHoursLi:this.cachedEls.clockHoursLi,o=this.cachedEls.clockMinutesLi;Array.from(a).filter(function(t){return t.classList.contains("mtp-clock--active")}).forEach(function(t){return t.classList.remove("mtp-clock--active")}),a[s].classList.add("mtp-clock--active"),Array.from(o).filter(function(t){return t.classList.contains("mtp-clock--active")}).forEach(function(t){return t.classList.remove("mtp-clock--active")}),o[e[1]].classList.add("mtp-clock--active"),"hours"===this.currentStep?this.rotateHand(this.getActiveIndex(a)):this.rotateHand(this.getActiveIndex(o))}},{key:"hasSetEvents",value:function(){return this.cachedEls.wrapper.classList.contains("mtp-events-set")}},{key:"isTemplateInDOM",value:function(){return Boolean(document.getElementsByClassName("mtp-overlay")[0])}}]),t}();i.default=m},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default='\n<div class="mtp-overlay" style="display:none">\n    <div class="mtp-wrapper">\n        <div class="mtp-display">\n            <span class="mtp-time-group">\n                <span class="hour-group active-group">\n                    <span class="mtp-display__hours">12</span>\n                    <span class="mtp-display__spacer">&hairsp;</span>\n                </span>\n                <span class="minute-group">\n                    <span class="mtp-display__separator">:</span>\n                    <span class="mtp-display__spacer">&hairsp;</span>\n                    <span class="mtp-display__minutes">00</span>\n                </span>\n            </span>\n            <div class="mtp-meridiem">\n                <span class="mtp-meridiem--active">a.m.</span>\n                <span>p.m.</span>\n            </div>\x3c!-- END .mtp-meridiem --\x3e\n        </div>\x3c!-- END .mtp-display --\x3e\n        <div class="mtp-picker">\n            <div class="mtp-clock">\n                <div class="mtp-clock__center"></div>\n                <div class="mtp-clock__hand"></div>\n                <ul class="mtp-clock__time mtp-clock__outer mtp-clock__hours" style="display:none">\n                    <li class="mtp-clock--active">12</li>\n                    <li>1</li>\n                    <li>2</li>\n                    <li>3</li>\n                    <li>4</li>\n                    <li>5</li>\n                    <li>6</li>\n                    <li>7</li>\n                    <li>8</li>\n                    <li>9</li>\n                    <li>10</li>\n                    <li>11</li>\n                </ul>\n                <ul class="mtp-clock__time mtp-clock__outer mtp-clock__minutes" style="display:none">\n                    <li class="mtp-clock--active">0</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>5</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>10</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>15</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>20</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>25</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>30</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>35</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>40</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>45</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>50</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>55</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                </ul>\n                <ul class="mtp-clock__time mtp-clock__hours-military" style="display:none">\n                    <div class="mtp-clock__hours--inner">\n                        <li class="mtp-clock--active">00</li>\n                        <li>13</li>\n                        <li>14</li>\n                        <li>15</li>\n                        <li>16</li>\n                        <li>17</li>\n                        <li>18</li>\n                        <li>19</li>\n                        <li>20</li>\n                        <li>21</li>\n                        <li>22</li>\n                        <li>23</li>\n                    </div>\n                    <div class="mtp-clock__hours">\n                        <li>12</li>\n                        <li>1</li>\n                        <li>2</li>\n                        <li>3</li>\n                        <li>4</li>\n                        <li>5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                        <li>9</li>\n                        <li>10</li>\n                        <li>11</li>\n                    </div>\n                </ul>\n            </div>\x3c!-- END .mtp-clock --\x3e\n            <div class="mtp-actions">\n                <button type="button" class="mtp-actions__button mtp-actions__cancel">Cancel</button>\n                <button type="button" class="mtp-actions__button mtp-actions__back" style="display:none">Back</button>\n                <button type="button" class="mtp-actions__button mtp-actions__next">Next</button>\n                <button type="button" class="mtp-actions__button mtp-actions__finish" style="display:none">Done</button>\n            </div>\x3c!-- END .mtp-actions --\x3e\n        </div>\x3c!-- END .mtp-picker --\x3e\n    </div>\x3c!-- END .mtp-wrapper --\x3e\n</div>\x3c!-- END .mtp-overlay --\x3e\n'},function(t,i,e){"use strict";function s(t){if("undefined"===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var i=Object(t),e=0;e<(arguments.length<=1?0:arguments.length-1);e+=1){var s=arguments.length<=e+1?void 0:arguments[e+1];if("undefined"!==s&&null!==s){s=Object(s);for(var n=Object.keys(s),l=0,c=n.length;l<c;l+=1){var a=n[l],o=Object.getOwnPropertyDescriptor(s,a);"undefined"!==o&&o.enumerable&&(i[a]=s[a])}}}return i}Object.defineProperty(i,"__esModule",{value:!0}),i.default=s},function(t,i,e){"use strict";function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),l=function(){function t(){s(this,t),this.events={}}return n(t,[{key:"on",value:function(t,i){this.events[t]||(this.events[t]=[]),this.events[t].push(i)}},{key:"off",value:function(t){this.events[t]&&(this.events[t]=[])}},{key:"trigger",value:function(t,i){this.events[t]&&this.events[t].length&&this.events[t].forEach(function(t){return t(i)})}}]),t}();i.default=l},function(t,i){},,function(t,i,e){"use strict";var s=e(0),n=function(t){return t&&t.__esModule?t:{default:t}}(s);window.TimePicker=n.default}]);