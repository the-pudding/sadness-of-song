var G=Object.defineProperty;var I=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(I(t,typeof e!="symbol"?e+"":e,n),n);function j(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function dt(){return Object.create(null)}function U(t){t.forEach(F)}function J(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function mt(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function pt(t){return Object.keys(t).length===0}function K(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t,e,n){t.$$.on_destroy.push(K(e,n))}function gt(t,e,n,i){if(t){const s=D(t,e,n,i);return t[0](s)}}function D(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function xt(t,e,n,i,s,c){if(s){const r=D(e,n,i,c);t.p(r,s)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Et(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Tt(t,e,n){return t.set(n),e}function At(t){return t&&J(t.destroy)?t.destroy:j}let x=!1;function Nt(){x=!0}function kt(){x=!1}function Q(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:Q(1,s,W=>e[n[W]].claim_order,a))-1;i[l]=n[u]+1;const H=u+1;n[H]=l,s=Math.max(H,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[l],u)}}function X(t,e){t.appendChild(e)}function Y(t,e){if(x){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){x&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function Ht(){return k(" ")}function Lt(){return k("")}function L(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Mt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:C(t,i,e[i])}function St(t,e){for(const n in e)C(t,n,e[n])}function nt(t,e){Object.keys(e).forEach(n=>{it(t,n,e[n])})}function it(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:C(t,e,n)}function jt(t){return/-/.test(t)?nt:et}function Dt(t){return t.dataset.svelteH}function Pt(t){return t===""?null:+t}function Ot(t){return Array.from(t.childNodes)}function O(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,s=!1){O(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function q(t,e,n,i){return z(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function zt(t,e,n){return q(t,e,n,N)}function qt(t,e,n){return q(t,e,n,P)}function st(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function Bt(t){return st(t," ")}function M(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Wt(t,e){const n=M(t,"HTML_TAG_START",0),i=M(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new w(e);O(t);const s=t.splice(n,i-n+1);g(s[0]),g(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new w(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new w(e,c)}function Gt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e){t.value=e??""}function Rt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let y;function rt(){if(y===void 0){y=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{y=!0}}return y}function Ft(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=N("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=rt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=L(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=L(i.contentWindow,"resize",e),e()}),X(t,i),()=>{(s||c&&i.contentWindow)&&c(),g(i)}}function Ut(t,e,n){t.classList.toggle(e,!!n)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Jt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class lt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=P(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(g)}}class w extends lt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function Kt(t,e){return new t(e)}let b;function v(t){b=t}function m(){if(!b)throw new Error("Function called outside component initialization");return b}function Qt(t){m().$$.on_mount.push(t)}function Vt(t){m().$$.after_update.push(t)}function Xt(){const t=m();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ct(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Yt(t,e){return m().$$.context.set(t,e),e}function Zt(t){return m().$$.context.get(t)}const h=[],S=[];let d=[];const T=[],B=Promise.resolve();let A=!1;function ot(){A||(A=!0,B.then(ut))}function $t(){return ot(),B}function at(t){d.push(t)}function te(t){T.push(t)}const E=new Set;let _=0;function ut(){if(_!==0)return;const t=b;do{try{for(;_<h.length;){const e=h[_];_++,v(e),ft(e.$$)}}catch(e){throw h.length=0,_=0,e}for(v(null),h.length=0,_=0;S.length;)S.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];E.has(n)||(E.add(n),n())}d.length=0}while(h.length);for(;T.length;)T.pop()();A=!1,E.clear(),v(t)}function ft(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(at)}}function ee(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{vt as $,Kt as A,$t as B,U as C,dt as D,ut as E,J as F,pt as G,at as H,ee as I,b as J,v as K,F as L,h as M,ot as N,Nt as O,kt as P,Jt as Q,At as R,L as S,Ct as T,Pt as U,Ut as V,R as W,P as X,qt as Y,St as Z,Et as _,Ot as a,Xt as a0,Ft as a1,Yt as a2,Zt as a3,te as a4,w as a5,Wt as a6,jt as a7,mt as a8,Tt as a9,Mt as aa,st as b,zt as c,g as d,N as e,Y as f,Gt as g,yt as h,$ as i,gt as j,wt as k,bt as l,Ht as m,j as n,Dt as o,Bt as p,C as q,It as r,ht as s,k as t,xt as u,Lt as v,Vt as w,Qt as x,Rt as y,S as z};