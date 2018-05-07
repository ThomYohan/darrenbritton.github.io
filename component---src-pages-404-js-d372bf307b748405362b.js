webpackJsonp([0x9427c64ab85d],{163:function(e,n,t){e.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(1),f=o(c),p=t(2),d=o(p),h=t(10),y=o(h),m=t(12),b=o(m),v=t(13),g=o(v),x=t(14),w=r(x),k=["🔙","⏰"],_=function(e){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={textLines:[],isDone:!1},t.onTypingDone=function(){t.mounted&&(t.setState({isDone:!0}),t.props.onTypingDone())},t.delayGenerator=function(e,n,r,o){var i=t.props.avgTypingDelay,a=t.props.stdTypingDelay;return t.props.delayGenerator(i,a,{line:e,lineIdx:n,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return w.gaussianRnd(e,n)}})},t.typeLine=function(e,n){if(!t.mounted)return Promise.resolve();var r=e,o=t.props.onLineTyped;return w.isBackspaceElement(e)?(e.props.delay>0&&(t.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):w.isDelayElement(e)&&(t.introducedDelay=e.props.ms,r="⏰"),new Promise(function(e,i){t.setState({textLines:t.state.textLines.concat([""])},function(){w.eachPromise(r,t.typeCharacter,r,n).then(function(){return o(r,n)}).then(e).catch(i)})})},t.typeCharacter=function(e,n,r,o){if(!t.mounted)return Promise.resolve();var i=t.props.onCharacterTyped;return new Promise(function(a){var u=t.state.textLines.slice();w.sleep(t.introducedDelay).then(function(){t.introducedDelay=null;var l="🔙"===e,s="⏰"===e;if(s)return void a();if(l&&o>0){for(var c=o-1,f=u[c],p=c;p>=0&&(!(f.length>0)||k.includes(f[0]));p--)c=p,f=u[c];u[c]=f.substr(0,f.length-1)}else u[o]+=e;t.setState({textLines:u},function(){var u=t.delayGenerator(r,o,e,n);i(e,n),setTimeout(a,u)})})})},t.mounted=!1,t.linesToType=[],t.introducedDelay=null,e.children&&(t.linesToType=w.extractTextFromElement(e.children)),t}return u(n,e),s(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,n=e.children,t=e.startDelay;n?t>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),t):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,n){if(n.textLines.length!==this.state.textLines.length)return!0;for(var t=0;t<n.textLines.length;t++){var r=this.state.textLines[t],o=n.textLines[t];if(r!==o)return!0}return this.state.isDone!==n.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return w.eachPromise(n,this.typeLine).then(function(){return e.onTypingDone()})}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.cursor,r=this.state.isDone,o=w.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return f.default.createElement("div",{className:"Typist "+n},o,f.default.createElement(y.default,l({isDone:r},t)))}}]),n}(c.Component);_.propTypes={children:d.default.node,className:d.default.string,avgTypingDelay:d.default.number,stdTypingDelay:d.default.number,startDelay:d.default.number,cursor:d.default.object,onCharacterTyped:d.default.func,onLineTyped:d.default.func,onTypingDone:d.default.func,delayGenerator:d.default.func},_.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:w.gaussianRnd},n.default=_,_.Backspace=b.default,_.Delay=g.default},function(e,n){e.exports=t(1)},function(e,n,t){e.exports=t(9)()},function(e,n,t){"use strict";var r=t(4),o=t(5),i=t(6),a=t(7),u=t(8);e.exports=function(e,n){function t(e){var n=e&&(D&&e[D]||e[P]);if("function"==typeof n)return n}function l(e,n){return e===n?0!==e||1/e===1/n:e!==e&&n!==n}function s(e){this.message=e,this.stack=""}function c(e){function t(t,r,i,u,l,c,f){if(u=u||R,c=c||i,f!==a)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else;return null==r[i]?t?new s(null===r[i]?"The "+l+" `"+c+"` is marked as required "+("in `"+u+"`, but its value is `null`."):"The "+l+" `"+c+"` is marked as required in "+("`"+u+"`, but its value is `undefined`.")):null:e(r,i,u,l,c)}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function f(e){function n(n,t,r,o,i,a){var u=n[t],l=_(u);if(l!==e){var c=T(u);return new s("Invalid "+o+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return c(n)}function p(){return c(r.thatReturnsNull)}function d(e){function n(n,t,r,o,i){if("function"!=typeof e)return new s("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=n[t];if(!Array.isArray(u)){var l=_(u);return new s("Invalid "+o+" `"+i+"` of type "+("`"+l+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<u.length;c++){var f=e(u,c,r,o,i+"["+c+"]",a);if(f instanceof Error)return f}return null}return c(n)}function h(){function n(n,t,r,o,i){var a=n[t];if(!e(a)){var u=_(a);return new s("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected a single ReactElement."))}return null}return c(n)}function y(e){function n(n,t,r,o,i){if(!(n[t]instanceof e)){var a=e.name||R,u=O(n[t]);return new s("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+a+"`."))}return null}return c(n)}function m(e){function n(n,t,r,o,i){for(var a=n[t],u=0;u<e.length;u++)if(l(a,e[u]))return null;var c=JSON.stringify(e);return new s("Invalid "+o+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return Array.isArray(e)?c(n):r.thatReturnsNull}function b(e){function n(n,t,r,o,i){if("function"!=typeof e)return new s("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=n[t],l=_(u);if("object"!==l)return new s("Invalid "+o+" `"+i+"` of type "+("`"+l+"` supplied to `"+r+"`, expected an object."));for(var c in u)if(u.hasOwnProperty(c)){var f=e(u,c,r,o,i+"."+c,a);if(f instanceof Error)return f}return null}return c(n)}function v(e){function n(n,t,r,o,i){for(var u=0;u<e.length;u++){var l=e[u];if(null==l(n,t,r,o,i,a))return null}return new s("Invalid "+o+" `"+i+"` supplied to "+("`"+r+"`."))}if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",E(o),t),r.thatReturnsNull}return c(n)}function g(){function e(e,n,t,r,o){return w(e[n])?null:new s("Invalid "+r+" `"+o+"` supplied to "+("`"+t+"`, expected a ReactNode."))}return c(e)}function x(e){function n(n,t,r,o,i){var u=n[t],l=_(u);if("object"!==l)return new s("Invalid "+o+" `"+i+"` of type `"+l+"` "+("supplied to `"+r+"`, expected `object`."));for(var c in e){var f=e[c];if(f){var p=f(u,c,r,o,i+"."+c,a);if(p)return p}}return null}return c(n)}function w(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(w);if(null===n||e(n))return!0;var r=t(n);if(!r)return!1;var o,i=r.call(n);if(r!==n.entries){for(;!(o=i.next()).done;)if(!w(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!w(a[1]))return!1}return!0;default:return!1}}function k(e,n){return"symbol"===e||("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}function _(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":k(n,e)?"symbol":n}function T(e){if("undefined"==typeof e||null===e)return""+e;var n=_(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function E(e){var n=T(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}function O(e){return e.constructor&&e.constructor.name?e.constructor.name:R}var D="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",R="<<anonymous>>",j={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(),arrayOf:d,element:h(),instanceOf:y,node:g(),objectOf:b,oneOf:m,oneOfType:v,shape:x};return s.prototype=Error.prototype,j.checkPropTypes=u,j.PropTypes=j,j}},function(e,n){"use strict";function t(e){return function(){return e}}var r=function(){};r.thatReturns=t,r.thatReturnsFalse=t(!1),r.thatReturnsTrue=t(!0),r.thatReturnsNull=t(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,n){"use strict";function t(e,n,t,o,i,a,u,l){if(r(n),!e){var s;if(void 0===n)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,o,i,a,u,l],f=0;s=new Error(n.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};e.exports=t},function(e,n,t){"use strict";var r=t(4),o=r;e.exports=o},function(e,n){"use strict";var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=t},function(e,n,t){"use strict";function r(e,n,t,r,o){}e.exports=r},function(e,n,t){"use strict";var r=t(4),o=t(5),i=t(7);e.exports=function(){function e(e,n,t,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n};return t.checkPropTypes=r,t.PropTypes=t,t}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=t(1),s=r(l),c=t(2),f=r(c);t(11);var p=function(e){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._isReRenderingCursor=!1,t.state={shouldRender:t.props.show},t}return a(n,e),u(n,[{key:"componentWillReceiveProps",value:function(e){var n=this,t=!this.props.isDone&&e.isDone&&this.props.hideWhenDone;t&&setTimeout(function(){return n.setState({shouldRender:!1})},this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,n=e.show,t=e.isDone;n&&(t||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},function(){e.setState({shouldRender:!0},function(){e._isReRenderingCursor=!1})})}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return s.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),n}(l.Component);p.propTypes={blink:f.default.bool,show:f.default.bool,element:f.default.node,hideWhenDone:f.default.bool,hideWhenDoneDelay:f.default.number,isDone:f.default.bool},p.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},n.default=p},function(e,n){},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),i=r(o),a=t(2),u=r(a),l=function(){return i.default.createElement("noscript",null)};l.propTypes={count:u.default.number,delay:u.default.number},l.defaultProps={count:1,delay:0},n.default=l},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),i=r(o),a=t(2),u=r(a),l=function(){return i.default.createElement("noscript",null)};l.propTypes={ms:u.default.number.isRequired},n.default=l},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e,n){for(var t=12,r=0,o=0;o<t;o++)r+=Math.random();return r-=t/2,Math.round(r*n)+e}function a(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];var i=function(e,t,o){return e.then(function(){return n.apply(void 0,[t,o].concat(r))})};return Array.from(e).reduce(i,Promise.resolve())}function u(e,n){var t={};for(var r in e)n.indexOf(r)===-1&&(t[r]=e[r]);return t}function l(e){return e&&e.type===v.default}function s(e){return e&&e.type===x.default}function c(e){for(var n=e?[e]:[],t=[];n.length>0;){var r=n.pop();if(m.default.isValidElement(r))l(r)||s(r)?t.unshift(r):m.default.Children.forEach(r.props.children,function(e){n.push(e)});else if(Array.isArray(r)){var o=!0,i=!1,a=void 0;try{for(var u,c=r[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var f=u.value;n.push(f)}}catch(e){i=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(i)throw a}}}else t.unshift(r)}return t}function f(e,n){var t=e.type,r=u(e.props,["children"]);return r.key="Typist-element-"+t+"-"+(Date.now()+Math.random()+Math.random()),m.default.createElement.apply(m.default,[t,r].concat(o(n)))}function p(e,n,t){if(t>=n.length)return[null,t];var r=t,o=function(e){var t=p(e,n,r),o=h(t,2),i=o[0],a=o[1];return r=a,i},i=m.default.isValidElement(e)&&!(l(e)||s(e));if(i){var a=m.default.Children.map(e.props.children,o)||[];return[f(e,a),r]}if(Array.isArray(e)){var u=e.map(o);return[u,r]}return[n[r],r+1]}function d(e){var n=e.element,t=e.textLines;if(n)return p(n,t,0)[0]}Object.defineProperty(n,"__esModule",{value:!0}),n.sleep=void 0;var h=function(){function e(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.gaussianRnd=i,n.eachPromise=a,n.exclude=u,n.isBackspaceElement=l,n.isDelayElement=s,n.extractTextFromElement=c,n.cloneElement=f,n.cloneElementWithSpecifiedText=d;var y=t(1),m=r(y),b=t(12),v=r(b),g=t(13),x=r(g);n.sleep=function(e){return new Promise(function(n){return null!=e?setTimeout(n,e):n()})}}])},24:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0;var i=o(["\n  border: 2px solid #47b475;\n  background-color: #fff;\n  padding: 0 26px;\n  height: 40px;\n  min-width: 150px;\n  line-height: 36px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 0;\n  color: #47b475;\n  text-align: center;\n  transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  margin-right: 8px;\n  margin-bottom: 24px;\n  cursor: pointer;\n\n  &:hover {\n    color: #fff;\n    background-color: #47b475;\n  }\n\n  ","\n\n  ","\n\n  ","\n"],["\n  border: 2px solid #47b475;\n  background-color: #fff;\n  padding: 0 26px;\n  height: 40px;\n  min-width: 150px;\n  line-height: 36px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 0;\n  color: #47b475;\n  text-align: center;\n  transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  margin-right: 8px;\n  margin-bottom: 24px;\n  cursor: pointer;\n\n  &:hover {\n    color: #fff;\n    background-color: #47b475;\n  }\n\n  ","\n\n  ","\n\n  ","\n"]),a=o(["\n    color: #949494;\n    border-color: #949494;\n    &:hover {\n      color: #fff;\n      background-color: #949494;\n    }\n  "],["\n    color: #949494;\n    border-color: #949494;\n    &:hover {\n      color: #fff;\n      background-color: #949494;\n    }\n  "]),u=o(["\n    background: none;\n    &:hover {\n      background-color: transparent;\n      color: #fff;\n      border-color: #fff;\n    }\n  "],["\n    background: none;\n    &:hover {\n      background-color: transparent;\n      color: #fff;\n      border-color: #fff;\n    }\n  "]),l=o(["\n    height: 30px;\n    font-size: 11px;\n    line-height: 27px;\n    min-width: 0;\n  "],["\n    height: 30px;\n    font-size: 11px;\n    line-height: 27px;\n    min-width: 0;\n  "]),s=t(4),c=r(s),f=c.default.button(i,function(e){return e.dark&&(0,s.css)(a)},function(e){return e.opaque&&(0,s.css)(u)},function(e){return e.small&&(0,s.css)(l)});n.default=f,e.exports=n.default},34:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0;var i=o(["\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  padding-top: 100%;\n  background-color: #194892;\n  background: linear-gradient(270deg,#355e9e,#5478b0,#194892);\n  background-size: 600% 600%;\n  animation: scroll 30s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;\n\n  button {\n    position: absolute;\n    bottom: 5%;\n    left: 15%;\n  }\n\n@keyframes scroll {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n  ","\n\n  ","\n\n  ","\n"],["\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  padding-top: 100%;\n  background-color: #194892;\n  background: linear-gradient(270deg,#355e9e,#5478b0,#194892);\n  background-size: 600% 600%;\n  animation: scroll 30s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;\n\n  button {\n    position: absolute;\n    bottom: 5%;\n    left: 15%;\n  }\n\n@keyframes scroll {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n  ","\n\n  ","\n\n  ","\n"]),a=o(["\n    animation: unset;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    image-rendering: -webkit-optimize-contrast;\n  "],["\n    animation: unset;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    image-rendering: -webkit-optimize-contrast;\n  "]),u=o(["\n    padding-top: 0;\n    width: 100vw;\n    height: 100vh;\n  "],["\n    padding-top: 0;\n    width: 100vw;\n    height: 100vh;\n  "]),l=o(['\n    &:after {\n      background: #292929;\n      opacity: 0.4;\n      content: "";\n      width: 100%;\n      height: auto;\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n    }\n  '],['\n    &:after {\n      background: #292929;\n      opacity: 0.4;\n      content: "";\n      width: 100%;\n      height: auto;\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n    }\n  ']),s=t(4),c=r(s),f=c.default.div(i,function(e){return e.img&&(0,s.css)(a,function(e){return e.img})},function(e){return e.fillPage&&(0,s.css)(u)},function(e){return e.overlay&&(0,s.css)(l)});n.default=f,e.exports=n.default},104:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function u(e,n){return e.raw=n,e}n.__esModule=!0;var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s=u(["\ncolor: #fff;\nletter-spacing: 17px;\nmax-width: 100%;\nfont-size: 72px;\nline-height: 80px;\nfont-weight: 100;\ntext-transform: uppercase;\nfont-family: 'Raleway';\nposition: absolute;\ntop: 50%;\nleft: 50%;\n","\n","\n"],["\ncolor: #fff;\nletter-spacing: 17px;\nmax-width: 100%;\nfont-size: 72px;\nline-height: 80px;\nfont-weight: 100;\ntext-transform: uppercase;\nfont-family: 'Raleway';\nposition: absolute;\ntop: 50%;\nleft: 50%;\n","\n","\n"]),c=u(["\n  left: 25%;\n  top: 40%;\n"],["\n  left: 25%;\n  top: 40%;\n"]),f=u(["\n  left: 3%;\n  top: 15%;\n  letter-spacing: 12px;\n"],["\n  left: 3%;\n  top: 15%;\n  letter-spacing: 12px;\n"]),p=t(1),d=r(p),h=t(4),y=r(h),m=t(163),b=r(m),v=t(21),g=(0,y.default)(b.default)(s,v.media.md(c),v.media.xs(f)),x=function(e){function n(){return o(this,n),i(this,e.apply(this,arguments))}return a(n,e),n.prototype.render=function(){return this.props.text?d.default.createElement(b.default,null,d.default.createElement(g,this.props,d.default.createElement("strong",null,this.props.text.split(" ").slice(0,1),d.default.createElement("br",null)),this.props.text.split(" ").slice(1).join(" "))):d.default.createElement(g,l({cursor:{show:!1}},this.props),d.default.createElement("strong",null,"I Make")," Websites",d.default.createElement(b.default.Backspace,{count:9,delay:300}),d.default.createElement("span",null," Web Apps"),d.default.createElement(b.default.Backspace,{count:9,delay:300}),d.default.createElement("span",null," Video Games"),d.default.createElement(b.default.Backspace,{count:12,delay:300}),d.default.createElement("span",null," Poor Life Decisions"),d.default.createElement(b.default.Delay,{ms:100}),d.default.createElement("span",null,"."),d.default.createElement(b.default.Delay,{ms:200}),d.default.createElement("span",null,"."),d.default.createElement(b.default.Delay,{ms:300}),d.default.createElement("span",null,"."),d.default.createElement(b.default.Backspace,{count:29,delay:10}),d.default.createElement("strong",null,"But Mostly Just")," Cool Web Stuff")},n}(d.default.Component);n.default=x,e.exports=n.default},262:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var o=t(1),i=r(o),a=(t(18),t(26)),u=t(24),l=r(u),s=t(34),c=r(s),f=t(104),p=r(f),d=function(){return i.default.createElement("div",null,i.default.createElement(c.default,{overlay:!0,fillPage:!0},i.default.createElement(l.default,{dark:!0,opaque:!0,onClick:function(){return(0,a.navigateTo)("/")}},"Return To Home Page"),i.default.createElement(p.default,{text:"404 Page Not Found"})))};n.default=d,e.exports=n.default},21:function(e,n,t){"use strict";function r(e,n){return e.raw=n,e}n.__esModule=!0,n.media=void 0;var o=r(["\n    @media (max-width: 280px) {\n      ","\n    }\n  "],["\n    @media (max-width: 280px) {\n      ","\n    }\n  "]),i=r(["\n    @media (max-width: 767px) {\n      ","\n    }\n  "],["\n    @media (max-width: 767px) {\n      ","\n    }\n  "]),a=r(["\n    @media (max-width: 991px) {\n      ","\n    }\n  "],["\n    @media (max-width: 991px) {\n      ","\n    }\n  "]),u=r(["\n    @media (max-width: 1199px) {\n      ","\n    }\n  "],["\n    @media (max-width: 1199px) {\n      ","\n    }\n  "]),l=r(["\n    @media (min-width: 1200px) {\n      ","\n    }\n  "],["\n    @media (min-width: 1200px) {\n      ","\n    }\n  "]),s=t(4);n.media={ws:function(){return(0,s.css)(o,s.css.apply(void 0,arguments))},xs:function(){return(0,s.css)(i,s.css.apply(void 0,arguments))},sm:function(){return(0,s.css)(a,s.css.apply(void 0,arguments))},md:function(){return(0,s.css)(u,s.css.apply(void 0,arguments))},lg:function(){return(0,s.css)(l,s.css.apply(void 0,arguments))}}}});
//# sourceMappingURL=component---src-pages-404-js-d372bf307b748405362b.js.map