!function(){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(e)}System.register(["./clipboard-legacy-531f08f2.js"],(function(e,r){"use strict";var t;return{setters:[function(o){t=o.c}],execute:function(){var r={};!function(e,r){var n=t,c={autoSetContainer:!1,appendToBody:!0},i={install:function(e){var r="3."===e.version.slice(0,2)?e.config.globalProperties:e.prototype;r.$clipboardConfig=c,r.$copyText=function(e,r){return new Promise((function(t,i){var u=document.createElement("button"),a=new n(u,{text:function(){return e},action:function(){return"copy"},container:"object"===o(r)?r:document.body});a.on("success",(function(o){a.destroy(),t(o)})),a.on("error",(function(o){a.destroy(),i(o)})),c.appendToBody&&document.body.appendChild(u),u.click(),c.appendToBody&&document.body.removeChild(u)}))},e.directive("clipboard",{bind:function(o,e,r){if("success"===e.arg)o._vClipboard_success=e.value;else if("error"===e.arg)o._vClipboard_error=e.value;else{var t=new n(o,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:c.autoSetContainer?o:void 0});t.on("success",(function(e){var r=o._vClipboard_success;r&&r(e)})),t.on("error",(function(e){var r=o._vClipboard_error;r&&r(e)})),o._vClipboard=t}},update:function(o,e){"success"===e.arg?o._vClipboard_success=e.value:"error"===e.arg?o._vClipboard_error=e.value:(o._vClipboard.text=function(){return e.value},o._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(o,e){o._vClipboard&&("success"===e.arg?delete o._vClipboard_success:"error"===e.arg?delete o._vClipboard_error:(o._vClipboard.destroy(),delete o._vClipboard))}})},config:c};e.exports=i}({get exports(){return r},set exports(o){r=o}});e("V",r)}}}))}();
