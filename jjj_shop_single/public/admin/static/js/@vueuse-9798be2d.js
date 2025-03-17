import{r as e,w as t,u as n,g as r,d as o,e as a,f as u,n as i,h as s,i as l}from"./@vue-5f6096d8.js";var c;const d="undefined"!=typeof window,f=e=>"string"==typeof e,v=()=>{},p=d&&(null==(c=null==window?void 0:window.navigator)?void 0:c.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function m(e){return"function"==typeof e?e():n(e)}function y(e){return!!r()&&(o(e),!0)}function O(e,t=200,n={}){return function(e,t){return function(...n){return new Promise(((r,o)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(r).catch(o)}))}}(function(e,t={}){let n,r,o=v;const a=e=>{clearTimeout(e),o(),o=v};return u=>{const i=m(e),s=m(t.maxWait);return n&&a(n),i<=0||void 0!==s&&s<=0?(r&&(a(r),r=null),Promise.resolve(u())):new Promise(((e,l)=>{o=t.rejectOnCancel?l:e,s&&!r&&(r=setTimeout((()=>{n&&a(n),r=null,e(u())}),s)),n=setTimeout((()=>{r&&a(r),r=null,e(u())}),i)}))}}(t,n),e)}function w(n,r=200,o={}){const a=e(n.value),u=O((()=>{a.value=n.value}),r,o);return t(n,(()=>u())),a}function b(t,n,r={}){const{immediate:o=!0}=r,a=e(!1);let u=null;function i(){u&&(clearTimeout(u),u=null)}function l(){a.value=!1,i()}function c(...e){i(),a.value=!0,u=setTimeout((()=>{a.value=!1,u=null,t(...e)}),m(n))}return o&&(a.value=!0,d&&c()),y(l),{isPending:s(a),start:c,stop:l}}function g(e){var t;const n=m(e);return null!=(t=null==n?void 0:n.$el)?t:n}const h=d?window:void 0;function I(...e){let n,r,o,a;if(f(e[0])||Array.isArray(e[0])?([r,o,a]=e,n=h):[n,r,o,a]=e,!n)return v;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const u=[],i=()=>{u.forEach((e=>e())),u.length=0},s=t((()=>[g(n),m(a)]),(([e,t])=>{i(),e&&u.push(...r.flatMap((n=>o.map((r=>((e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)))(e,n,r,t))))))}),{immediate:!0,flush:"post"}),l=()=>{s(),i()};return y(l),l}let E=!1;function P(e,t,n={}){const{window:r=h,ignore:o=[],capture:a=!0,detectIframe:u=!1}=n;if(!r)return;p&&!E&&(E=!0,Array.from(r.document.body.children).forEach((e=>e.addEventListener("click",v))));let i=!0;const s=e=>o.some((t=>{if("string"==typeof t)return Array.from(r.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=g(t);return n&&(e.target===n||e.composedPath().includes(n))}})),l=[I(r,"click",(n=>{const r=g(e);r&&r!==n.target&&!n.composedPath().includes(r)&&(0===n.detail&&(i=!s(n)),i?t(n):i=!0)}),{passive:!0,capture:a}),I(r,"pointerdown",(t=>{const n=g(e);n&&(i=!t.composedPath().includes(n)&&!s(t))}),{passive:!0}),u&&I(r,"blur",(n=>{var o;const a=g(e);"IFRAME"!==(null==(o=r.document.activeElement)?void 0:o.tagName)||(null==a?void 0:a.contains(r.document.activeElement))||t(n)}))].filter(Boolean);return()=>l.forEach((e=>e()))}function A(t,n=!1){const r=e(),o=()=>r.value=Boolean(t());return o(),function(e,t=!0){a()?u(e):t?e():i(e)}(o,n),r}const T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},j="__vueuse_ssr_handlers__";function Q(n,r,{window:o=h,initialValue:a=""}={}){const u=e(a),i=l((()=>{var e;return g(r)||(null==(e=null==o?void 0:o.document)?void 0:e.documentElement)}));return t([i,()=>m(n)],(([e,t])=>{var n;if(e&&o){const r=null==(n=o.getComputedStyle(e).getPropertyValue(t))?void 0:n.trim();u.value=r||a}}),{immediate:!0}),t(u,(e=>{var t;(null==(t=i.value)?void 0:t.style)&&i.value.style.setProperty(m(n),e)})),u}T[j]=T[j]||{};var C,S,x=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;function k(e,n,r={}){const o=r,{window:a=h}=o,u=((e,t)=>{var n={};for(var r in e)N.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))t.indexOf(r)<0&&_.call(e,r)&&(n[r]=e[r]);return n})(o,["window"]);let i;const s=A((()=>a&&"ResizeObserver"in a)),l=()=>{i&&(i.disconnect(),i=void 0)},c=t((()=>g(e)),(e=>{l(),s.value&&a&&e&&(i=new ResizeObserver(n),i.observe(e,u))}),{immediate:!0,flush:"post"}),d=()=>{l(),c()};return y(d),{isSupported:s,stop:d}}(S=C||(C={})).UP="UP",S.RIGHT="RIGHT",S.DOWN="DOWN",S.LEFT="LEFT",S.NONE="NONE";var B=Object.defineProperty,L=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,W=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;((e,t)=>{for(var n in t||(t={}))R.call(t,n)&&W(e,n,t[n]);if(L)for(var n of L(t))F.call(t,n)&&W(e,n,t[n])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{I as a,g as b,Q as c,b as d,p as e,d as i,P as o,w as r,y as t,k as u};
