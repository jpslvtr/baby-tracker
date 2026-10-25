(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var ku={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,l=i+2<r.length,h=l?r[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,S=h&63;l||(S=64,o||(_=64)),n.push(t[f],t[p],t[_],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Nd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Yg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||p==null)throw new Xg;const _=s<<2|c>>4;if(n.push(_),h!==64){const S=c<<4&240|h>>2;if(n.push(S),p!==64){const D=h<<6&192|p;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zg=function(r){const e=Nd(r);return Md.encodeByteArray(e,!0)},Od=function(r){return Zg(r).replace(/\./g,"")},Ld=function(r){try{return Md.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=()=>ey().__FIREBASE_DEFAULTS__,ny=()=>{if(typeof process>"u"||typeof ku>"u")return;const r=ku.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ry=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ld(r[1]);return e&&JSON.parse(e)},ao=()=>{try{return ty()||ny()||ry()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},iy=r=>{var e,t;return(t=(e=ao())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Fd=()=>{var r;return(r=ao())===null||r===void 0?void 0:r.config},Bd=r=>{var e;return(e=ao())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ay(){var r;const e=(r=ao())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ly(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function uy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hy(){const r=Ee();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ud(){return!ay()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function dy(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="FirebaseError";class Vt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=fy,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?my(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,c,n)}}function my(r,e){return r.replace(py,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const py=/\{\$([^}]+)}/g;function gy(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hi(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(xu(s)&&xu(o)){if(!hi(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function xu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function yy(r,e){const t=new _y(r,e);return t.subscribe.bind(t)}class _y{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");vy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=ha),i.error===void 0&&(i.error=ha),i.complete===void 0&&(i.complete=ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vy(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ha(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r){return r&&r._delegate?r._delegate:r}class En{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new sy;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ey(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Iy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iy(r){return r===fn?void 0:r}function Ey(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ty(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ee||(ee={}));const by={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ay=ee.INFO,Sy={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ry=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Sy[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=Ay,this._logHandler=Ry,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?by[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Py=(r,e)=>e.some(t=>r instanceof t);let Nu,Mu;function Dy(){return Nu||(Nu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cy(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qd=new WeakMap,ka=new WeakMap,jd=new WeakMap,da=new WeakMap,pc=new WeakMap;function Vy(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Kt(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qd.set(t,r)}).catch(()=>{}),pc.set(e,r),e}function ky(r){if(ka.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});ka.set(r,e)}let xa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ka.get(r);if(e==="objectStoreNames")return r.objectStoreNames||jd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function xy(r){xa=r(xa)}function Ny(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(fa(this),e,...t);return jd.set(n,e.sort?e.sort():[e]),Kt(n)}:Cy().includes(r)?function(...e){return r.apply(fa(this),e),Kt(qd.get(this))}:function(...e){return Kt(r.apply(fa(this),e))}}function My(r){return typeof r=="function"?Ny(r):(r instanceof IDBTransaction&&ky(r),Py(r,Dy())?new Proxy(r,xa):r)}function Kt(r){if(r instanceof IDBRequest)return Vy(r);if(da.has(r))return da.get(r);const e=My(r);return e!==r&&(da.set(r,e),pc.set(e,r)),e}const fa=r=>pc.get(r);function Oy(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=Kt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Ly=["get","getKey","getAll","getAllKeys","count"],Fy=["put","add","delete","clear"],ma=new Map;function Ou(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Fy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ly.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&l.done]))[0]};return ma.set(e,s),s}xy(r=>({...r,get:(e,t,n)=>Ou(e,t)||r.get(e,t,n),has:(e,t)=>!!Ou(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Uy(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Uy(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Na="@firebase/app",Lu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new mc("@firebase/app"),$y="@firebase/app-compat",qy="@firebase/analytics-compat",jy="@firebase/analytics",zy="@firebase/app-check-compat",Gy="@firebase/app-check",Ky="@firebase/auth",Hy="@firebase/auth-compat",Wy="@firebase/database",Qy="@firebase/data-connect",Jy="@firebase/database-compat",Yy="@firebase/functions",Xy="@firebase/functions-compat",Zy="@firebase/installations",e_="@firebase/installations-compat",t_="@firebase/messaging",n_="@firebase/messaging-compat",r_="@firebase/performance",i_="@firebase/performance-compat",s_="@firebase/remote-config",o_="@firebase/remote-config-compat",a_="@firebase/storage",c_="@firebase/storage-compat",l_="@firebase/firestore",u_="@firebase/vertexai-preview",h_="@firebase/firestore-compat",d_="firebase",f_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="[DEFAULT]",m_={[Na]:"fire-core",[$y]:"fire-core-compat",[jy]:"fire-analytics",[qy]:"fire-analytics-compat",[Gy]:"fire-app-check",[zy]:"fire-app-check-compat",[Ky]:"fire-auth",[Hy]:"fire-auth-compat",[Wy]:"fire-rtdb",[Qy]:"fire-data-connect",[Jy]:"fire-rtdb-compat",[Yy]:"fire-fn",[Xy]:"fire-fn-compat",[Zy]:"fire-iid",[e_]:"fire-iid-compat",[t_]:"fire-fcm",[n_]:"fire-fcm-compat",[r_]:"fire-perf",[i_]:"fire-perf-compat",[s_]:"fire-rc",[o_]:"fire-rc-compat",[a_]:"fire-gcs",[c_]:"fire-gcs-compat",[l_]:"fire-fst",[h_]:"fire-fst-compat",[u_]:"fire-vertex","fire-js":"fire-js",[d_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Map,p_=new Map,Oa=new Map;function Fu(r,e){try{r.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function rr(r){const e=r.name;if(Oa.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;Oa.set(e,r);for(const t of Ls.values())Fu(t,r);for(const t of p_.values())Fu(t,r);return!0}function gc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ct(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Ci("app","Firebase",g_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=f_;function zd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ma,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(t||(t=Fd()),!t)throw Ht.create("no-options");const s=Ls.get(i);if(s){if(hi(t,s.options)&&hi(n,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const o=new wy(i);for(const l of Oa.values())o.addComponent(l);const c=new y_(t,n,o);return Ls.set(i,c),c}function __(r=Ma){const e=Ls.get(r);if(!e&&r===Ma&&Fd())return zd();if(!e)throw Ht.create("no-app",{appName:r});return e}function Wt(r,e,t){var n;let i=(n=m_[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(c.join(" "));return}rr(new En(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebase-heartbeat-database",T_=1,di="firebase-heartbeat-store";let pa=null;function Gd(){return pa||(pa=Oy(v_,T_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(di)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ht.create("idb-open",{originalErrorMessage:r.message})})),pa}async function I_(r){try{const t=(await Gd()).transaction(di),n=await t.objectStore(di).get(Kd(r));return await t.done,n}catch(e){if(e instanceof Vt)Rt.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(t.message)}}}async function Bu(r,e){try{const n=(await Gd()).transaction(di,"readwrite");await n.objectStore(di).put(e,Kd(r)),await n.done}catch(t){if(t instanceof Vt)Rt.warn(t.message);else{const n=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(n.message)}}}function Kd(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=1024,w_=30*24*60*60*1e3;class b_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new S_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=w_}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Rt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uu(),{heartbeatsToSend:n,unsentEntries:i}=A_(this._heartbeatsCache.heartbeats),s=Od(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Rt.warn(t),""}}}function Uu(){return new Date().toISOString().substring(0,10)}function A_(r,e=E_){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$u(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$u(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class S_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?dy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await I_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $u(r){return Od(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(r){rr(new En("platform-logger",e=>new By(e),"PRIVATE")),rr(new En("heartbeat",e=>new b_(e),"PRIVATE")),Wt(Na,Lu,r),Wt(Na,Lu,"esm2017"),Wt("fire-js","")}R_("");function yc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Hd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P_=Hd,Wd=new Ci("auth","Firebase",Hd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new mc("@firebase/auth");function D_(r,...e){Fs.logLevel<=ee.WARN&&Fs.warn(`Auth (${Ir}): ${r}`,...e)}function Es(r,...e){Fs.logLevel<=ee.ERROR&&Fs.error(`Auth (${Ir}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(r,...e){throw vc(r,...e)}function ot(r,...e){return vc(r,...e)}function _c(r,e,t){const n=Object.assign(Object.assign({},P_()),{[e]:t});return new Ci("auth","Firebase",n).create(e,{appName:r.name})}function Qt(r){return _c(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qd(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&pt(r,"argument-error"),_c(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Wd.create(r,...e)}function J(r,e,...t){if(!r)throw vc(e,...t)}function wt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Es(e),new Error(e)}function Pt(r,e){r||wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function C_(){return qu()==="http:"||qu()==="https:"}function qu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C_()||ly()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=oy()||uy()}get(){return V_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(r,e){Pt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new ki(3e4,6e4);function Ic(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Er(r,e,t,n,i={}){return Yd(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=Vi(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},s);return cy()||(h.referrerPolicy="no-referrer"),Jd.fetch()(Xd(r,r.config.apiHost,t,c),h)})}async function Yd(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},x_),e);try{const i=new O_(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hs(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hs(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw hs(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _c(r,f,h);pt(r,f)}}catch(i){if(i instanceof Vt)throw i;pt(r,"network-request-failed",{message:String(i)})}}async function M_(r,e,t,n,i={}){const s=await Er(r,e,t,n,i);return"mfaPendingCredential"in s&&pt(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Xd(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Tc(r.config,i):`${r.config.apiScheme}://${i}`}class O_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ot(this.auth,"network-request-failed")),N_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=ot(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(r,e){return Er(r,"POST","/v1/accounts:delete",e)}async function Zd(r,e){return Er(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F_(r,e=!1){const t=we(r),n=await t.getIdToken(e),i=Ec(n);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ii(ga(i.auth_time)),issuedAtTime:ii(ga(i.iat)),expirationTime:ii(ga(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ga(r){return Number(r)*1e3}function Ec(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Es("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ld(t);return i?JSON.parse(i):(Es("Failed to decode base64 JWT payload"),null)}catch(i){return Es("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ju(r){const e=Ec(r);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Vt&&B_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function B_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(r){var e;const t=r.auth,n=await r.getIdToken(),i=await fi(r,Zd(t,{idToken:n}));J(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ef(s.providerUserInfo):[],c=q_(r.providerData,o),l=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Fa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function $_(r){const e=we(r);await Bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function q_(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function ef(r){return r.map(e=>{var{providerId:t}=e,n=yc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(r,e){const t=await Yd(r,{},async()=>{const n=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=Xd(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Jd.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function z_(r,e){return Er(r,"POST","/v2/accounts:revokeToken",Ic(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ju(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=ju(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await j_(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new Yn;return n&&(J(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(r,e){J(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=yc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F_(this,e)}reload(){return $_(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Bs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Qt(this.auth));const e=await this.getIdToken();return await fi(this,L_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,D=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,j=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:O,isAnonymous:H,providerData:Q,stsTokenManager:T}=t;J(L&&T,e,"internal-error");const y=Yn.fromJSON(this.name,T);J(typeof L=="string",e,"internal-error"),Lt(p,e.name),Lt(_,e.name),J(typeof O=="boolean",e,"internal-error"),J(typeof H=="boolean",e,"internal-error"),Lt(S,e.name),Lt(D,e.name),Lt(k,e.name),Lt(C,e.name),Lt(j,e.name),Lt(U,e.name);const v=new bt({uid:L,auth:e,email:_,emailVerified:O,displayName:p,isAnonymous:H,photoURL:D,phoneNumber:S,tenantId:k,stsTokenManager:y,createdAt:j,lastLoginAt:U});return Q&&Array.isArray(Q)&&(v.providerData=Q.map(I=>Object.assign({},I))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,n=!1){const i=new Yn;i.updateFromServerResponse(t);const s=new bt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Bs(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ef(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Yn;c.updateFromIdToken(n);const l=new bt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map;function At(r){Pt(r instanceof Function,"Expected a class definition");let e=zu.get(r);return e?(Pt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zu.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tf.type="NONE";const Gu=tf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(r,e,t){return`firebase:${r}:${e}:${t}`}class Xn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=ws(this.userKey,i.apiKey,s),this.fullPersistenceKey=ws("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Xn(At(Gu),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||At(Gu);const o=ws(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=bt._fromJSON(e,f);h!==s&&(c=p),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xn(s,e,n):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Xn(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cf(e))return"Blackberry";if(lf(e))return"Webos";if(rf(e))return"Safari";if((e.includes("chrome/")||sf(e))&&!e.includes("edge/"))return"Chrome";if(af(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function nf(r=Ee()){return/firefox\//i.test(r)}function rf(r=Ee()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sf(r=Ee()){return/crios\//i.test(r)}function of(r=Ee()){return/iemobile/i.test(r)}function af(r=Ee()){return/android/i.test(r)}function cf(r=Ee()){return/blackberry/i.test(r)}function lf(r=Ee()){return/webos/i.test(r)}function wc(r=Ee()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function G_(r=Ee()){var e;return wc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function K_(){return hy()&&document.documentMode===10}function uf(r=Ee()){return wc(r)||af(r)||lf(r)||cf(r)||/windows phone/i.test(r)||of(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r,e=[]){let t;switch(r){case"Browser":t=Ku(Ee());break;case"Worker":t=`${Ku(Ee())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ir}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(r,e={}){return Er(r,"GET","/v2/passwordPolicy",Ic(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=6;class J_{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Q_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hu(this),this.idTokenSubscription=new Hu(this),this.beforeStateQueue=new H_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Xn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zd(this,{idToken:e}),n=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Qt(this));const t=e?we(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await W_(this),t=new J_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await z_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await Xn.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&D_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xi(r){return we(r)}class Hu{constructor(e){this.auth=e,this.observer=null,this.addObserver=yy(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X_(r){bc=r}function Z_(r){return bc.loadJS(r)}function ev(){return bc.gapiScript}function tv(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(r,e){const t=gc(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(hi(s,e??{}))return i;pt(i,"already-initialized")}return t.initialize({options:e})}function rv(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function iv(r,e,t){const n=xi(r);J(n._canInitEmulator,n,"emulator-config-failed"),J(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=df(e),{host:o,port:c}=sv(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ov()}function df(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function sv(r){const e=df(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Wu(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Wu(o)}}}function Wu(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ov(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,t){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(r,e){return M_(r,"POST","/v1/accounts:signInWithIdp",Ic(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="http://localhost";class wn extends ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=yc(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new wn(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Zn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}buildRequest(){const e={requestUri:av,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends co{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Ni{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Et.credential(t,n)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ni{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ni{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return qt.credential(t,n)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await bt._fromIdTokenResponse(e,n,i),o=Qu(n);return new ir({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qu(n);return new ir({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Qu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Vt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Us.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Us(e,t,n,i)}}function mf(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Us._fromErrorAndOperation(r,s,e,n):s})}async function cv(r,e,t=!1){const n=await fi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ir._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(r,e,t=!1){const{auth:n}=r;if(ct(n.app))return Promise.reject(Qt(n));const i="reauthenticate";try{const s=await fi(r,mf(n,i,e,r),t);J(s.idToken,n,"internal-error");const o=Ec(s.idToken);J(o,n,"internal-error");const{sub:c}=o;return J(r.uid===c,n,"user-mismatch"),ir._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(r,e,t=!1){if(ct(r.app))return Promise.reject(Qt(r));const n="signIn",i=await mf(r,n,e),s=await ir._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function hv(r,e,t,n){return we(r).onIdTokenChanged(e,t,n)}function dv(r,e,t){return we(r).beforeAuthStateChanged(e,t)}function fv(r,e,t,n){return we(r).onAuthStateChanged(e,t,n)}function pf(r){return we(r).signOut()}const $s="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($s,"1"),this.storage.removeItem($s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=1e3,pv=10;class yf extends gf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);K_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pv):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yf.type="LOCAL";const gv=yf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends gf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_f.type="SESSION";const vf=_f;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new lo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),l=await yv(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const h=Ac("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function vv(r){dt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Tv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iv(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Ev(){return Tf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="firebaseLocalStorageDb",wv=1,qs="firebaseLocalStorage",Ef="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uo(r,e){return r.transaction([qs],e?"readwrite":"readonly").objectStore(qs)}function bv(){const r=indexedDB.deleteDatabase(If);return new Mi(r).toPromise()}function Ba(){const r=indexedDB.open(If,wv);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(qs,{keyPath:Ef})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(qs)?e(n):(n.close(),await bv(),e(await Ba()))})})}async function Ju(r,e,t){const n=uo(r,!0).put({[Ef]:e,value:t});return new Mi(n).toPromise()}async function Av(r,e){const t=uo(r,!1).get(e),n=await new Mi(t).toPromise();return n===void 0?null:n.value}function Yu(r,e){const t=uo(r,!0).delete(e);return new Mi(t).toPromise()}const Sv=800,Rv=3;class wf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Rv)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(Ev()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ba();return await Ju(e,$s,"1"),await Yu(e,$s),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ju(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Av(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uo(i,!1).getAll();return new Mi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wf.type="LOCAL";const Pv=wf;new ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(r,e){return e?At(e):(J(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dv(r){return uv(r.auth,new Rc(r),r.bypassAuthState)}function Cv(r){const{auth:e,user:t}=r;return J(t,e,"internal-error"),lv(t,new Rc(r),r.bypassAuthState)}async function Vv(r){const{auth:e,user:t}=r;return J(t,e,"internal-error"),cv(t,new Rc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dv;case"linkViaPopup":case"linkViaRedirect":return Vv;case"reauthViaPopup":case"reauthViaRedirect":return Cv;default:pt(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new ki(2e3,1e4);async function xv(r,e,t){if(ct(r.app))return Promise.reject(ot(r,"operation-not-supported-in-this-environment"));const n=xi(r);Qd(r,e,co);const i=Sc(n,t);return new vn(n,"signInViaPopup",e,i).executeNotNull()}class vn extends bf{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const e=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kv.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="pendingRedirect",bs=new Map;class Mv extends bf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bs.get(this.auth._key());if(!e){try{const n=await Ov(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}bs.set(this.auth._key(),e)}return this.bypassAuthState||bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ov(r,e){const t=Sf(e),n=Af(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function Lv(r,e){return Af(r)._set(Sf(e),"true")}function Fv(r,e){bs.set(r._key(),e)}function Af(r){return At(r._redirectPersistence)}function Sf(r){return ws(Nv,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(r,e,t){return Uv(r,e,t)}async function Uv(r,e,t){if(ct(r.app))return Promise.reject(Qt(r));const n=xi(r);Qd(r,e,co),await n._initializationPromise;const i=Sc(n,t);return await Lv(i,n),i._openRedirect(n,e,"signInViaRedirect")}async function $v(r,e,t=!1){if(ct(r.app))return Promise.reject(Qt(r));const n=xi(r),i=Sc(n,e),o=await new Mv(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=10*60*1e3;class jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Rf(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xu(e))}saveEventToCache(e){this.cachedEventUids.add(Xu(e)),this.lastProcessedEventTime=Date.now()}}function Xu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Rf({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rf(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(r,e={}){return Er(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hv=/^https?/;async function Wv(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Gv(r);for(const t of e)try{if(Qv(t))return}catch{}pt(r,"unauthorized-domain")}function Qv(r){const e=La(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Hv.test(t))return!1;if(Kv.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new ki(3e4,6e4);function Zu(){const r=dt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Yv(r){return new Promise((e,t)=>{var n,i,s;function o(){Zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zu(),t(ot(r,"network-request-failed"))},timeout:Jv.get()})}if(!((i=(n=dt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)o();else{const c=tv("iframefcb");return dt()[c]=()=>{gapi.load?o():t(ot(r,"network-request-failed"))},Z_(`${ev()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw As=null,e})}let As=null;function Xv(r){return As=As||Yv(r),As}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new ki(5e3,15e3),eT="__/auth/iframe",tT="emulator/auth/iframe",nT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iT(r){const e=r.config;J(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Tc(e,tT):`https://${r.config.authDomain}/${eT}`,n={apiKey:e.apiKey,appName:r.name,v:Ir},i=rT.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Vi(n).slice(1)}`}async function sT(r){const e=await Xv(r),t=dt().gapi;return J(t,r,"internal-error"),e.open({where:document.body,url:iT(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nT,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=ot(r,"network-request-failed"),c=dt().setTimeout(()=>{s(o)},Zv.get());function l(){dt().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aT=500,cT=600,lT="_blank",uT="http://localhost";class eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hT(r,e,t,n=aT,i=cT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},oT),{width:n.toString(),height:i.toString(),top:s,left:o}),h=Ee().toLowerCase();t&&(c=sf(h)?lT:t),nf(h)&&(e=e||uT,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[S,D])=>`${_}${S}=${D},`,"");if(G_(h)&&c!=="_self")return dT(e||"",c),new eh(null);const p=window.open(e||"",c,f);J(p,r,"popup-blocked");try{p.focus()}catch{}return new eh(p)}function dT(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="__/auth/handler",mT="emulator/auth/handler",pT=encodeURIComponent("fac");async function th(r,e,t,n,i,s){J(r.config.authDomain,r,"auth-domain-config-required"),J(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Ir,eventId:i};if(e instanceof co){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",gy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ni){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${pT}=${encodeURIComponent(l)}`:"";return`${gT(r)}?${Vi(c).slice(1)}${h}`}function gT({config:r}){return r.emulator?Tc(r,mT):`https://${r.authDomain}/${fT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="webStorageSupport";class yT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vf,this._completeRedirectFn=$v,this._overrideRedirectResult=Fv}async _openPopup(e,t,n,i){var s;Pt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await th(e,t,n,La(),i);return hT(e,o,Ac())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await th(e,t,n,La(),i);return vv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Pt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await sT(e),n=new jv(e);return t.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ya,{type:ya},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ya];o!==void 0&&t(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uf()||rf()||wc()}}const _T=yT;var nh="@firebase/auth",rh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IT(r){rr(new En("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hf(r)},h=new Y_(n,i,s,l);return rv(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),rr(new En("auth-internal",e=>{const t=xi(e.getProvider("auth").getImmediate());return(n=>new vT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(nh,rh,TT(r)),Wt(nh,rh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=5*60,wT=Bd("authIdTokenMaxAge")||ET;let ih=null;const bT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>wT)return;const i=t==null?void 0:t.token;ih!==i&&(ih=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function AT(r=__()){const e=gc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=nv(r,{popupRedirectResolver:_T,persistence:[Pv,gv,vf]}),n=Bd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=bT(s.toString());dv(t,o,()=>o(t.currentUser)),hv(t,c=>o(c))}}const i=iy("auth");return i&&iv(t,`http://${i}`),t}function ST(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}X_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=ot("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",ST().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IT("Browser");var sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,Pf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(I,w,E){for(var g=Array(arguments.length-2),$=2;$<arguments.length;$++)g[$-2]=arguments[$];return y.prototype[w].apply(I,g)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var w=0;16>w;++w)I[w]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(w=0;16>w;++w)I[w]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],w=T.g[2];var E=T.g[3],g=y+(E^v&(w^E))+I[0]+3614090360&4294967295;y=v+(g<<7&4294967295|g>>>25),g=E+(w^y&(v^w))+I[1]+3905402710&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(v^E&(y^v))+I[2]+606105819&4294967295,w=E+(g<<17&4294967295|g>>>15),g=v+(y^w&(E^y))+I[3]+3250441966&4294967295,v=w+(g<<22&4294967295|g>>>10),g=y+(E^v&(w^E))+I[4]+4118548399&4294967295,y=v+(g<<7&4294967295|g>>>25),g=E+(w^y&(v^w))+I[5]+1200080426&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(v^E&(y^v))+I[6]+2821735955&4294967295,w=E+(g<<17&4294967295|g>>>15),g=v+(y^w&(E^y))+I[7]+4249261313&4294967295,v=w+(g<<22&4294967295|g>>>10),g=y+(E^v&(w^E))+I[8]+1770035416&4294967295,y=v+(g<<7&4294967295|g>>>25),g=E+(w^y&(v^w))+I[9]+2336552879&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(v^E&(y^v))+I[10]+4294925233&4294967295,w=E+(g<<17&4294967295|g>>>15),g=v+(y^w&(E^y))+I[11]+2304563134&4294967295,v=w+(g<<22&4294967295|g>>>10),g=y+(E^v&(w^E))+I[12]+1804603682&4294967295,y=v+(g<<7&4294967295|g>>>25),g=E+(w^y&(v^w))+I[13]+4254626195&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(v^E&(y^v))+I[14]+2792965006&4294967295,w=E+(g<<17&4294967295|g>>>15),g=v+(y^w&(E^y))+I[15]+1236535329&4294967295,v=w+(g<<22&4294967295|g>>>10),g=y+(w^E&(v^w))+I[1]+4129170786&4294967295,y=v+(g<<5&4294967295|g>>>27),g=E+(v^w&(y^v))+I[6]+3225465664&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^v&(E^y))+I[11]+643717713&4294967295,w=E+(g<<14&4294967295|g>>>18),g=v+(E^y&(w^E))+I[0]+3921069994&4294967295,v=w+(g<<20&4294967295|g>>>12),g=y+(w^E&(v^w))+I[5]+3593408605&4294967295,y=v+(g<<5&4294967295|g>>>27),g=E+(v^w&(y^v))+I[10]+38016083&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^v&(E^y))+I[15]+3634488961&4294967295,w=E+(g<<14&4294967295|g>>>18),g=v+(E^y&(w^E))+I[4]+3889429448&4294967295,v=w+(g<<20&4294967295|g>>>12),g=y+(w^E&(v^w))+I[9]+568446438&4294967295,y=v+(g<<5&4294967295|g>>>27),g=E+(v^w&(y^v))+I[14]+3275163606&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^v&(E^y))+I[3]+4107603335&4294967295,w=E+(g<<14&4294967295|g>>>18),g=v+(E^y&(w^E))+I[8]+1163531501&4294967295,v=w+(g<<20&4294967295|g>>>12),g=y+(w^E&(v^w))+I[13]+2850285829&4294967295,y=v+(g<<5&4294967295|g>>>27),g=E+(v^w&(y^v))+I[2]+4243563512&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^v&(E^y))+I[7]+1735328473&4294967295,w=E+(g<<14&4294967295|g>>>18),g=v+(E^y&(w^E))+I[12]+2368359562&4294967295,v=w+(g<<20&4294967295|g>>>12),g=y+(v^w^E)+I[5]+4294588738&4294967295,y=v+(g<<4&4294967295|g>>>28),g=E+(y^v^w)+I[8]+2272392833&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^v)+I[11]+1839030562&4294967295,w=E+(g<<16&4294967295|g>>>16),g=v+(w^E^y)+I[14]+4259657740&4294967295,v=w+(g<<23&4294967295|g>>>9),g=y+(v^w^E)+I[1]+2763975236&4294967295,y=v+(g<<4&4294967295|g>>>28),g=E+(y^v^w)+I[4]+1272893353&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^v)+I[7]+4139469664&4294967295,w=E+(g<<16&4294967295|g>>>16),g=v+(w^E^y)+I[10]+3200236656&4294967295,v=w+(g<<23&4294967295|g>>>9),g=y+(v^w^E)+I[13]+681279174&4294967295,y=v+(g<<4&4294967295|g>>>28),g=E+(y^v^w)+I[0]+3936430074&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^v)+I[3]+3572445317&4294967295,w=E+(g<<16&4294967295|g>>>16),g=v+(w^E^y)+I[6]+76029189&4294967295,v=w+(g<<23&4294967295|g>>>9),g=y+(v^w^E)+I[9]+3654602809&4294967295,y=v+(g<<4&4294967295|g>>>28),g=E+(y^v^w)+I[12]+3873151461&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^v)+I[15]+530742520&4294967295,w=E+(g<<16&4294967295|g>>>16),g=v+(w^E^y)+I[2]+3299628645&4294967295,v=w+(g<<23&4294967295|g>>>9),g=y+(w^(v|~E))+I[0]+4096336452&4294967295,y=v+(g<<6&4294967295|g>>>26),g=E+(v^(y|~w))+I[7]+1126891415&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~v))+I[14]+2878612391&4294967295,w=E+(g<<15&4294967295|g>>>17),g=v+(E^(w|~y))+I[5]+4237533241&4294967295,v=w+(g<<21&4294967295|g>>>11),g=y+(w^(v|~E))+I[12]+1700485571&4294967295,y=v+(g<<6&4294967295|g>>>26),g=E+(v^(y|~w))+I[3]+2399980690&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~v))+I[10]+4293915773&4294967295,w=E+(g<<15&4294967295|g>>>17),g=v+(E^(w|~y))+I[1]+2240044497&4294967295,v=w+(g<<21&4294967295|g>>>11),g=y+(w^(v|~E))+I[8]+1873313359&4294967295,y=v+(g<<6&4294967295|g>>>26),g=E+(v^(y|~w))+I[15]+4264355552&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~v))+I[6]+2734768916&4294967295,w=E+(g<<15&4294967295|g>>>17),g=v+(E^(w|~y))+I[13]+1309151649&4294967295,v=w+(g<<21&4294967295|g>>>11),g=y+(w^(v|~E))+I[4]+4149444226&4294967295,y=v+(g<<6&4294967295|g>>>26),g=E+(v^(y|~w))+I[11]+3174756917&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~v))+I[2]+718787259&4294967295,w=E+(g<<15&4294967295|g>>>17),g=v+(E^(w|~y))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(w+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+E&4294967295}n.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,I=this.B,w=this.h,E=0;E<y;){if(w==0)for(;E<=v;)i(this,T,E),E+=this.blockSize;if(typeof T=="string"){for(;E<y;)if(I[w++]=T.charCodeAt(E++),w==this.blockSize){i(this,I),w=0;break}}else for(;E<y;)if(I[w++]=T[E++],w==this.blockSize){i(this,I),w=0;break}}this.h=w,this.o+=y},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)T[v++]=this.g[y]>>>I&255;return T};function s(T,y){var v=c;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function o(T,y){this.h=y;for(var v=[],I=!0,w=T.length-1;0<=w;w--){var E=T[w]|0;I&&E==y||(v[w]=E,I=!1)}this.g=v}var c={};function l(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return C(h(-T));for(var y=[],v=1,I=0;T>=v;I++)y[I]=T/v|0,v*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return C(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),I=p,w=0;w<T.length;w+=8){var E=Math.min(8,T.length-w),g=parseInt(T.substring(w,w+E),y);8>E?(E=h(Math.pow(y,E)),I=I.j(E).add(h(g))):(I=I.j(v),I=I.add(h(g)))}return I}var p=l(0),_=l(1),S=l(16777216);r=o.prototype,r.m=function(){if(k(this))return-C(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);T+=(0<=I?I:4294967296+I)*y,y*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(k(this))return"-"+C(this).toString(T);for(var y=h(Math.pow(T,6)),v=this,I="";;){var w=O(v,y).g;v=j(v,w.j(y));var E=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=w,D(v))return E+I;for(;6>E.length;)E="0"+E;I=E+I}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}r.l=function(T){return T=j(this,T),k(T)?-1:D(T)?0:1};function C(T){for(var y=T.g.length,v=[],I=0;I<y;I++)v[I]=~T.g[I];return new o(v,~T.h).add(_)}r.abs=function(){return k(this)?C(this):this},r.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0,w=0;w<=y;w++){var E=I+(this.i(w)&65535)+(T.i(w)&65535),g=(E>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);I=g>>>16,E&=65535,g&=65535,v[w]=g<<16|E}return new o(v,v[v.length-1]&-2147483648?-1:0)};function j(T,y){return T.add(C(y))}r.j=function(T){if(D(this)||D(T))return p;if(k(this))return k(T)?C(this).j(C(T)):C(C(this).j(T));if(k(T))return C(this.j(C(T)));if(0>this.l(S)&&0>T.l(S))return h(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var w=0;w<T.g.length;w++){var E=this.i(I)>>>16,g=this.i(I)&65535,$=T.i(w)>>>16,W=T.i(w)&65535;v[2*I+2*w]+=g*W,U(v,2*I+2*w),v[2*I+2*w+1]+=E*W,U(v,2*I+2*w+1),v[2*I+2*w+1]+=g*$,U(v,2*I+2*w+1),v[2*I+2*w+2]+=E*$,U(v,2*I+2*w+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function U(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function L(T,y){this.g=T,this.h=y}function O(T,y){if(D(y))throw Error("division by zero");if(D(T))return new L(p,p);if(k(T))return y=O(C(T),y),new L(C(y.g),C(y.h));if(k(y))return y=O(T,C(y)),new L(C(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,I=y;0>=I.l(T);)v=H(v),I=H(I);var w=Q(v,1),E=Q(I,1);for(I=Q(I,2),v=Q(v,2);!D(I);){var g=E.add(I);0>=g.l(T)&&(w=w.add(v),E=g),I=Q(I,1),v=Q(v,1)}return y=j(T,w.j(y)),new L(w,y)}for(w=p;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),E=h(v),g=E.j(y);k(g)||0<g.l(T);)v-=I,E=h(v),g=E.j(y);D(E)&&(E=_),w=w.add(E),T=j(T,g)}return new L(w,T)}r.A=function(T){return O(this,T).h},r.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&T.i(I);return new o(v,this.h&T.h)},r.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|T.i(I);return new o(v,this.h|T.h)},r.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^T.i(I);return new o(v,this.h^T.h)};function H(T){for(var y=T.g.length+1,v=[],I=0;I<y;I++)v[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(v,T.h)}function Q(T,y){var v=y>>5;y%=32;for(var I=T.g.length-v,w=[],E=0;E<I;E++)w[E]=0<y?T.i(E+v)>>>y|T.i(E+v+1)<<32-y:T.i(E+v);return new o(w,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Pf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Tn=o}).apply(typeof sh<"u"?sh:typeof self<"u"?self:typeof window<"u"?window:{});var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Df,ei,Cf,Ss,Ua,Vf,kf,xf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ds=="object"&&ds];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var R=d++;return{value:u(R,a[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(u,b)}}return function(){return a.apply(u,arguments)}}function _(a,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function S(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function D(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,R){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return u.prototype[b].apply(m,N)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const b=a.length||0,R=m.length||0;a.length=b+R;for(let N=0;N<R;N++)a[b+N]=m[N]}else a.push(m)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var H=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function Q(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function T(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function w(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function E(a){c.setTimeout(()=>{throw a},0)}function g(){var a=$o;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ${constructor(){this.h=this.g=null}add(u,d){const m=W.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var W=new j(()=>new Re,a=>a.reset());class Re{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,vt=!1,$o=new $,kl=()=>{const a=c.Promise.resolve(void 0);fe=()=>{a.then(yg)}};var yg=()=>{for(var a;a=g();){try{a.h.call(a.g)}catch(d){E(d)}var u=W;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}vt=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var _g=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Dr(a,u){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(H){e:{try{O(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vg[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Dr.aa.h.call(this)}}D(Dr,xe);var vg={2:"touch",3:"pen",4:"mouse"};Dr.prototype.h=function(){Dr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),Tg=0;function Ig(a,u,d,m,b){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=b,this.key=++Tg,this.da=this.fa=!1}function Hi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Wi(a){this.src=a,this.g={},this.h=0}Wi.prototype.add=function(a,u,d,m,b){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var N=jo(a,u,m,b);return-1<N?(u=a[N],d||(u.fa=!1)):(u=new Ig(u,this.src,R,!!m,b),u.fa=d,a.push(u)),u};function qo(a,u){var d=u.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,u,void 0),R;(R=0<=b)&&Array.prototype.splice.call(m,b,1),R&&(Hi(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function jo(a,u,d,m){for(var b=0;b<a.length;++b){var R=a[b];if(!R.da&&R.listener==u&&R.capture==!!d&&R.ha==m)return b}return-1}var zo="closure_lm_"+(1e6*Math.random()|0),Go={};function xl(a,u,d,m,b){if(Array.isArray(u)){for(var R=0;R<u.length;R++)xl(a,u[R],d,m,b);return null}return d=Ol(d),a&&a[Ki]?a.K(u,d,h(m)?!!m.capture:!1,b):Eg(a,u,d,!1,m,b)}function Eg(a,u,d,m,b,R){if(!u)throw Error("Invalid event type");var N=h(b)?!!b.capture:!!b,ue=Ho(a);if(ue||(a[zo]=ue=new Wi(a)),d=ue.add(u,d,m,N,R),d.proxy)return d;if(m=wg(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)_g||(b=N),b===void 0&&(b=!1),a.addEventListener(u.toString(),m,b);else if(a.attachEvent)a.attachEvent(Ml(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function wg(){function a(d){return u.call(a.src,a.listener,d)}const u=bg;return a}function Nl(a,u,d,m,b){if(Array.isArray(u))for(var R=0;R<u.length;R++)Nl(a,u[R],d,m,b);else m=h(m)?!!m.capture:!!m,d=Ol(d),a&&a[Ki]?(a=a.i,u=String(u).toString(),u in a.g&&(R=a.g[u],d=jo(R,d,m,b),-1<d&&(Hi(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete a.g[u],a.h--)))):a&&(a=Ho(a))&&(u=a.g[u.toString()],a=-1,u&&(a=jo(u,d,m,b)),(d=-1<a?u[a]:null)&&Ko(d))}function Ko(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ki])qo(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(Ml(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Ho(u))?(qo(d,a),d.h==0&&(d.src=null,u[zo]=null)):Hi(a)}}}function Ml(a){return a in Go?Go[a]:Go[a]="on"+a}function bg(a,u){if(a.da)a=!0;else{u=new Dr(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ko(a),a=d.call(m,u)}return a}function Ho(a){return a=a[zo],a instanceof Wi?a:null}var Wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ol(a){return typeof a=="function"?a:(a[Wo]||(a[Wo]=function(u){return a.handleEvent(u)}),a[Wo])}function Ne(){xt.call(this),this.i=new Wi(this),this.M=this,this.F=null}D(Ne,xt),Ne.prototype[Ki]=!0,Ne.prototype.removeEventListener=function(a,u,d,m){Nl(this,a,u,d,m)};function $e(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new xe(u,a);else if(u instanceof xe)u.target=u.target||a;else{var b=u;u=new xe(m,a),I(u,b)}if(b=!0,d)for(var R=d.length-1;0<=R;R--){var N=u.g=d[R];b=Qi(N,m,!0,u)&&b}if(N=u.g=a,b=Qi(N,m,!0,u)&&b,b=Qi(N,m,!1,u)&&b,d)for(R=0;R<d.length;R++)N=u.g=d[R],b=Qi(N,m,!1,u)&&b}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Hi(d[m]);delete a.g[u],a.h--}}this.F=null},Ne.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},Ne.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Qi(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,R=0;R<u.length;++R){var N=u[R];if(N&&!N.da&&N.capture==d){var ue=N.listener,Pe=N.ha||N.src;N.fa&&qo(a.i,N),b=ue.call(Pe,m)!==!1&&b}}return b&&!m.defaultPrevented}function Ll(a,u,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Fl(a){a.g=Ll(()=>{a.g=null,a.i&&(a.i=!1,Fl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ag extends xt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(a){xt.call(this),this.h=a,this.g={}}D(Cr,xt);var Bl=[];function Ul(a){Q(a.g,function(u,d){this.g.hasOwnProperty(d)&&Ko(u)},a),a.g={}}Cr.prototype.N=function(){Cr.aa.N.call(this),Ul(this)},Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=c.JSON.stringify,Sg=c.JSON.parse,Rg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Jo(){}Jo.prototype.h=null;function $l(a){return a.h||(a.h=a.i())}function ql(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yo(){xe.call(this,"d")}D(Yo,xe);function Xo(){xe.call(this,"c")}D(Xo,xe);var cn={},jl=null;function Ji(){return jl=jl||new Ne}cn.La="serverreachability";function zl(a){xe.call(this,cn.La,a)}D(zl,xe);function kr(a){const u=Ji();$e(u,new zl(u))}cn.STAT_EVENT="statevent";function Gl(a,u){xe.call(this,cn.STAT_EVENT,a),this.stat=u}D(Gl,xe);function qe(a){const u=Ji();$e(u,new Gl(u,a))}cn.Ma="timingevent";function Kl(a,u){xe.call(this,cn.Ma,a),this.size=u}D(Kl,xe);function xr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Nr(){this.g=!0}Nr.prototype.xa=function(){this.g=!1};function Pg(a,u,d,m,b,R){a.info(function(){if(a.g)if(R)for(var N="",ue=R.split("&"),Pe=0;Pe<ue.length;Pe++){var ie=ue[Pe].split("=");if(1<ie.length){var Me=ie[0];ie=ie[1];var Oe=Me.split("_");N=2<=Oe.length&&Oe[1]=="type"?N+(Me+"="+ie+"&"):N+(Me+"=redacted&")}}else N=null;else N=R;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+u+`
`+d+`
`+N})}function Dg(a,u,d,m,b,R,N){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+u+`
`+d+`
`+R+" "+N})}function On(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Vg(a,d)+(m?" "+m:"")})}function Cg(a,u){a.info(function(){return"TIMEOUT: "+u})}Nr.prototype.info=function(){};function Vg(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var N=1;N<b.length;N++)b[N]=""}}}}return Qo(d)}catch{return u}}var Yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zo;function Xi(){}D(Xi,Jo),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},Zo=new Xi;function Nt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Cr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Ql={},ea={};function ta(a,u,d){a.L=1,a.v=ns(Tt(u)),a.m=d,a.P=!0,Jl(a,null)}function Jl(a,u){a.F=Date.now(),Zi(a),a.A=Tt(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),uu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Wl,a.g=Pu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Ag(_(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Bl[0]=b.toString()),b=Bl);for(var R=0;R<b.length;R++){var N=xl(d,b[R],m||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),kr(),Pg(a.i,a.u,a.A,a.l,a.R,a.m)}Nt.prototype.ca=function(a){a=a.target;const u=this.M;u&&It(a)==3?u.j():this.Y(a)},Nt.prototype.Y=function(a){try{if(a==this.g)e:{const Oe=It(this.g);var u=this.g.Ba();const Bn=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||yu(this.g)))){this.J||Oe!=4||u==7||(u==8||0>=Bn?kr(3):kr(2)),na(this);var d=this.g.Z();this.X=d;t:if(Yl(this)){var m=yu(this.g);a="";var b=m.length,R=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Mr(this);var N="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(R&&u==b-1)});m.length=0,this.h.g+=a,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,Dg(this.i,this.u,this.A,this.l,this.R,Oe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Pe=this.g;if((ue=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ue)){var ie=ue;break t}}ie=null}if(d=ie)On(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,d);else{this.o=!1,this.s=3,qe(12),ln(this),Mr(this);break e}}if(this.P){d=!0;let it;for(;!this.J&&this.C<N.length;)if(it=kg(this,N),it==ea){Oe==4&&(this.s=4,qe(14),d=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Ql){this.s=4,qe(15),On(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else On(this.i,this.l,it,null),ra(this,it);if(Yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||N.length!=0||this.h.h||(this.s=1,qe(16),d=!1),this.o=this.o&&d,!d)On(this.i,this.l,N,"[Invalid Chunked Response]"),ln(this),Mr(this);else if(0<N.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),la(Me),Me.M=!0,qe(11))}}else On(this.i,this.l,N,null),ra(this,N);Oe==4&&ln(this),this.o&&!this.J&&(Oe==4?bu(this.j,this):(this.o=!1,Zi(this)))}else Qg(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),ln(this),Mr(this)}}}catch{}finally{}};function Yl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kg(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?ea:(d=Number(u.substring(d,m)),isNaN(d)?Ql:(m+=1,m+d>u.length?ea:(u=u.slice(m,m+d),a.C=m+d,u)))}Nt.prototype.cancel=function(){this.J=!0,ln(this)};function Zi(a){a.S=Date.now()+a.I,Xl(a,a.I)}function Xl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=xr(_(a.ba,a),u)}function na(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Nt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Cg(this.i,this.A),this.L!=2&&(kr(),qe(17)),ln(this),this.s=2,Mr(this)):Xl(this,this.S-a)};function Mr(a){a.j.G==0||a.J||bu(a.j,a)}function ln(a){na(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ul(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ra(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ia(d.h,a))){if(!a.K&&ia(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)cs(d),os(d);else break e;ca(d),qe(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=xr(_(d.Za,d),6e3));if(1>=tu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else hn(d,11)}else if((a.K||d.g==a)&&cs(d),!U(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let ie=b[u];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Me=ie[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const Oe=ie[4];Oe!=null&&(d.Aa=Oe,d.j.info("SVER="+d.Aa));const Bn=ie[5];Bn!=null&&typeof Bn=="number"&&0<Bn&&(m=1.5*Bn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const it=a.g;if(it){const us=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var R=m.h;R.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(sa(R,R.h),R.h=null))}if(m.D){const ua=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;ua&&(m.ya=ua,de(m.I,m.D,ua))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var N=a;if(m.qa=Ru(m,m.J?m.ia:null,m.W),N.K){nu(m.h,N);var ue=N,Pe=m.L;Pe&&(ue.I=Pe),ue.B&&(na(ue),Zi(ue)),m.g=N}else Eu(m);0<d.i.length&&as(d)}else ie[0]!="stop"&&ie[0]!="close"||hn(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?hn(d,7):aa(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}kr(4)}catch{}}var xg=class{constructor(a,u){this.g=a,this.map=u}};function Zl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tu(a){return a.h?1:a.g?a.g.size:0}function ia(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function sa(a,u){a.g?a.g.add(u):a.h=u}function nu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Zl.prototype.cancel=function(){if(this.i=ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ru(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function Ng(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Mg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function iu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Mg(a),m=Ng(a),b=m.length,R=0;R<b;R++)u.call(void 0,m[R],d&&d[R],a)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Og(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var R=a[d].substring(0,m);b=a[d].substring(m+1)}else R=a[d];u(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function un(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof un){this.h=a.h,es(this,a.j),this.o=a.o,this.g=a.g,ts(this,a.s),this.l=a.l;var u=a.i,d=new Fr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ou(this,d),this.m=a.m}else a&&(u=String(a).match(su))?(this.h=!1,es(this,u[1]||"",!0),this.o=Or(u[2]||""),this.g=Or(u[3]||"",!0),ts(this,u[4]),this.l=Or(u[5]||"",!0),ou(this,u[6]||"",!0),this.m=Or(u[7]||"")):(this.h=!1,this.i=new Fr(null,this.h))}un.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Lr(u,au,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Lr(u,au,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Lr(d,d.charAt(0)=="/"?Bg:Fg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Lr(d,$g)),a.join("")};function Tt(a){return new un(a)}function es(a,u,d){a.j=d?Or(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ts(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ou(a,u,d){u instanceof Fr?(a.i=u,qg(a.i,a.h)):(d||(u=Lr(u,Ug)),a.i=new Fr(u,a.h))}function de(a,u,d){a.i.set(u,d)}function ns(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Or(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Lr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Lg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var au=/[#\/\?@]/g,Fg=/[#\?:]/g,Bg=/[#\?]/g,Ug=/[#\?@]/g,$g=/#/g;function Fr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Mt(a){a.g||(a.g=new Map,a.h=0,a.i&&Og(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Fr.prototype,r.add=function(a,u){Mt(this),this.i=null,a=Ln(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function cu(a,u){Mt(a),u=Ln(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function lu(a,u){return Mt(a),u=Ln(a,u),a.g.has(u)}r.forEach=function(a,u){Mt(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(u,b,m,this)},this)},this)},r.na=function(){Mt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const b=a[m];for(let R=0;R<b.length;R++)d.push(u[m])}return d},r.V=function(a){Mt(this);let u=[];if(typeof a=="string")lu(this,a)&&(u=u.concat(this.g.get(Ln(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Mt(this),this.i=null,a=Ln(this,a),lu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function uu(a,u,d){cu(a,u),0<d.length&&(a.i=null,a.g.set(Ln(a,u),k(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const R=encodeURIComponent(String(m)),N=this.V(m);for(m=0;m<N.length;m++){var b=R;N[m]!==""&&(b+="="+encodeURIComponent(String(N[m]))),a.push(b)}}return this.i=a.join("&")};function Ln(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function qg(a,u){u&&!a.j&&(Mt(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(cu(this,m),uu(this,b,d))},a)),a.j=u}function jg(a,u){const d=new Nr;if(c.Image){const m=new Image;m.onload=S(Ot,d,"TestLoadImage: loaded",!0,u,m),m.onerror=S(Ot,d,"TestLoadImage: error",!1,u,m),m.onabort=S(Ot,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=S(Ot,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function zg(a,u){const d=new Nr,m=new AbortController,b=setTimeout(()=>{m.abort(),Ot(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(R=>{clearTimeout(b),R.ok?Ot(d,"TestPingServer: ok",!0,u):Ot(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),Ot(d,"TestPingServer: error",!1,u)})}function Ot(a,u,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function Gg(){this.g=new Rg}function Kg(a,u,d){const m=d||"";try{iu(a,function(b,R){let N=b;h(b)&&(N=Qo(b)),u.push(m+R+"="+encodeURIComponent(N))})}catch(b){throw u.push(m+"type="+encodeURIComponent("_badmap")),b}}function rs(a){this.l=a.Ub||null,this.j=a.eb||!1}D(rs,Jo),rs.prototype.g=function(){return new is(this.l,this.j)},rs.prototype.i=function(a){return function(){return a}}({});function is(a,u){Ne.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(is,Ne),r=is.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ur(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ur(this)),this.g&&(this.readyState=3,Ur(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Br(this):Ur(this),this.readyState==3&&hu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Br(this))},r.Qa=function(a){this.g&&(this.response=a,Br(this))},r.ga=function(){this.g&&Br(this)};function Br(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ur(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ur(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function du(a){let u="";return Q(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function oa(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=du(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):de(a,u,d))}function ge(a){Ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ge,Ne);var Hg=/^https?$/i,Wg=["POST","PUT"];r=ge.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zo.g(),this.v=this.o?$l(this.o):$l(Zo),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(R){fu(this,R);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())d.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Wg,u,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of d)this.g.setRequestHeader(R,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gu(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){fu(this,R)}};function fu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,mu(a),ss(a)}function mu(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$e(this,"complete"),$e(this,"abort"),ss(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ss(this,!0)),ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?pu(this):this.bb())},r.bb=function(){pu(this)};function pu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||It(a)!=4||a.Z()!=2)){if(a.u&&It(a)==4)Ll(a.Ea,0,a);else if($e(a,"readystatechange"),It(a)==4){a.h=!1;try{const N=a.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=N===0){var b=String(a.D).match(su)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),m=!Hg.test(b?b.toLowerCase():"")}d=m}if(d)$e(a,"complete"),$e(a,"success");else{a.m=6;try{var R=2<It(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",mu(a)}}finally{ss(a)}}}}function ss(a,u){if(a.g){gu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||$e(a,"ready");try{d.onreadystatechange=m}catch{}}}function gu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function It(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Sg(u)}};function yu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qg(a){const u={};a=(a.g&&2<=It(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var d=w(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=u[b]||[];u[b]=R,R.push(d)}T(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function _u(a){this.Aa=0,this.i=[],this.j=new Nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$r("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$r("baseRetryDelayMs",5e3,a),this.cb=$r("retryDelaySeedMs",1e4,a),this.Wa=$r("forwardChannelMaxRetries",2,a),this.wa=$r("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Zl(a&&a.concurrentRequestLimit),this.Da=new Gg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=_u.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){qe(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Ru(this,null,this.W),as(this)};function aa(a){if(vu(a),a.G==3){var u=a.U++,d=Tt(a.I);if(de(d,"SID",a.K),de(d,"RID",u),de(d,"TYPE","terminate"),qr(a,d),u=new Nt(a,a.j,u),u.L=2,u.v=ns(Tt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Pu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Zi(u)}Su(a)}function os(a){a.g&&(la(a),a.g.cancel(),a.g=null)}function vu(a){os(a),a.u&&(c.clearTimeout(a.u),a.u=null),cs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function as(a){if(!eu(a.h)&&!a.s){a.s=!0;var u=a.Ga;fe||kl(),vt||(fe(),vt=!0),$o.add(u,a),a.B=0}}function Jg(a,u){return tu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=xr(_(a.Ga,a,u),Au(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Nt(this,this.j,a);let R=this.o;if(this.S&&(R?(R=y(R),I(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Iu(this,b,u),d=Tt(this.I),de(d,"RID",a),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),qr(this,d),R&&(this.O?u="headers="+encodeURIComponent(String(du(R)))+"&"+u:this.m&&oa(d,this.m,R)),sa(this.h,b),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",u),de(d,"SID","null"),b.T=!0,ta(b,d,null)):ta(b,d,u),this.G=2}}else this.G==3&&(a?Tu(this,a):this.i.length==0||eu(this.h)||Tu(this))};function Tu(a,u){var d;u?d=u.l:d=a.U++;const m=Tt(a.I);de(m,"SID",a.K),de(m,"RID",d),de(m,"AID",a.T),qr(a,m),a.m&&a.o&&oa(m,a.m,a.o),d=new Nt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Iu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sa(a.h,d),ta(d,m,u)}function qr(a,u){a.H&&Q(a.H,function(d,m){de(u,m,d)}),a.l&&iu({},function(d,m){de(u,m,d)})}function Iu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?_(a.l.Na,a.l,a):null;e:{var b=a.i;let R=-1;for(;;){const N=["count="+d];R==-1?0<d?(R=b[0].g,N.push("ofs="+R)):R=0:N.push("ofs="+R);let ue=!0;for(let Pe=0;Pe<d;Pe++){let ie=b[Pe].g;const Me=b[Pe].map;if(ie-=R,0>ie)R=Math.max(0,b[Pe].g-100),ue=!1;else try{Kg(Me,N,"req"+ie+"_")}catch{m&&m(Me)}}if(ue){m=N.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Eu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;fe||kl(),vt||(fe(),vt=!0),$o.add(u,a),a.v=0}}function ca(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=xr(_(a.Fa,a),Au(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=xr(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),os(this),wu(this))};function la(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function wu(a){a.g=new Nt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Tt(a.qa);de(u,"RID","rpc"),de(u,"SID",a.K),de(u,"AID",a.T),de(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(u,"TO",a.ja),de(u,"TYPE","xmlhttp"),qr(a,u),a.m&&a.o&&oa(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ns(Tt(u)),d.m=null,d.P=!0,Jl(d,a)}r.Za=function(){this.C!=null&&(this.C=null,os(this),ca(this),qe(19))};function cs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function bu(a,u){var d=null;if(a.g==u){cs(a),la(a),a.g=null;var m=2}else if(ia(a.h,u))d=u.D,nu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=a.B;m=Ji(),$e(m,new Kl(m,d)),as(a)}else Eu(a);else if(b=u.s,b==3||b==0&&0<u.X||!(m==1&&Jg(a,u)||m==2&&ca(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),b){case 1:hn(a,5);break;case 4:hn(a,10);break;case 3:hn(a,6);break;default:hn(a,2)}}}function Au(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function hn(a,u){if(a.j.info("Error code "+u),u==2){var d=_(a.fb,a),m=a.Xa;const b=!m;m=new un(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||es(m,"https"),ns(m),b?jg(m.toString(),d):zg(m.toString(),d)}else qe(2);a.G=0,a.l&&a.l.sa(u),Su(a),vu(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Su(a){if(a.G=0,a.ka=[],a.l){const u=ru(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Ru(a,u,d){var m=d instanceof un?Tt(d):new un(d);if(m.g!="")u&&(m.g=u+"."+m.g),ts(m,m.s);else{var b=c.location;m=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var R=new un(null);m&&es(R,m),u&&(R.g=u),b&&ts(R,b),d&&(R.l=d),m=R}return d=a.D,u=a.ya,d&&u&&de(m,d,u),de(m,"VER",a.la),qr(a,m),m}function Pu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ge(new rs({eb:d})):new ge(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Du(){}r=Du.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ls(){}ls.prototype.g=function(a,u){return new Je(a,u)};function Je(a,u){Ne.call(this),this.g=new _u(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!U(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Fn(this)}D(Je,Ne),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){aa(this.g)},Je.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Qo(a),a=d);u.i.push(new xg(u.Ya++,a)),u.G==3&&as(u)},Je.prototype.N=function(){this.g.l=null,delete this.j,aa(this.g),delete this.g,Je.aa.N.call(this)};function Cu(a){Yo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}D(Cu,Yo);function Vu(){Xo.call(this),this.status=1}D(Vu,Xo);function Fn(a){this.g=a}D(Fn,Du),Fn.prototype.ua=function(){$e(this.g,"a")},Fn.prototype.ta=function(a){$e(this.g,new Cu(a))},Fn.prototype.sa=function(a){$e(this.g,new Vu)},Fn.prototype.ra=function(){$e(this.g,"b")},ls.prototype.createWebChannel=ls.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,xf=function(){return new ls},kf=function(){return Ji()},Vf=cn,Ua={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,Ss=Yi,Hl.COMPLETE="complete",Cf=Hl,ql.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,ei=ql,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,Df=ge}).apply(typeof ds<"u"?ds:typeof self<"u"?self:typeof window<"u"?window:{});const oh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new mc("@firebase/firestore");function Gn(){return bn.logLevel}function V(r,...e){if(bn.logLevel<=ee.DEBUG){const t=e.map(Pc);bn.debug(`Firestore (${wr}): ${r}`,...t)}}function ve(r,...e){if(bn.logLevel<=ee.ERROR){const t=e.map(Pc);bn.error(`Firestore (${wr}): ${r}`,...t)}}function mi(r,...e){if(bn.logLevel<=ee.WARN){const t=e.map(Pc);bn.warn(`Firestore (${wr}): ${r}`,...t)}}function Pc(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const e=`FIRESTORE (${wr}) INTERNAL ASSERTION FAILED: `+r;throw ve(e),new Error(e)}function q(r,e){r||F()}function B(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class DT{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0);let n=this.i;const i=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string"),new RT(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new Fe(e)}}class CT{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VT{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new CT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){q(this.o===void 0);const n=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(q(typeof t.token=="string"),this.R=t.token,new kT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=NT(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function X(r,e){return r<e?-1:r>e?1:0}function sr(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Mf(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new K(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new K(0,0))}static max(){return new z(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(),n===void 0?n=e.length-t:n>e.length-t&&F(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends pi{construct(e,t,n){return new oe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const MT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends pi{construct(e,t,n){return new pe(e,t,n)}static isValidIdentifier(e){return MT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(oe.fromString(e))}static fromName(e){return new M(oe.fromString(e).popFirst(5))}static empty(){return new M(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new oe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function $a(r){return r.fields.find(e=>e.kind===2)}function mn(r){return r.fields.filter(e=>e.kind!==2)}js.UNKNOWN_ID=-1;class Rs{constructor(e,t){this.fieldPath=e,this.kind=t}}class gi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gi(0,et.min())}}function Of(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=z.fromTimestamp(n===1e9?new K(t+1,0):new K(t,n));return new et(i,M.empty(),e)}function Lf(r){return new et(r.readTime,r.key,-1)}class et{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new et(z.min(),M.empty(),-1)}static max(){return new et(z.max(),M.empty(),-1)}}function Dc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(r.documentKey,e.documentKey),t!==0?t:X(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Ff)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>n(l))}),o=!0,s===i&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(i=>i?A.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new A((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new A((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new si(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=Cc(n.target.error);this.V.reject(new si(e,i))}}static open(e,t,n,i){try{return new ho(t,e.transaction(i,n))}catch(s){throw new si(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new LT(t)}}class Jt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Jt.S(Ee())===12.2&&ve("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),pn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!$d())return!1;if(Jt.v())return!0;const e=Ee(),t=Jt.S(e),n=0<t&&t<10,i=Uf(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new si(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new x(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new x(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new si(e,o))},i.onupgradeneeded=s=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=ho.open(this.db,e,s?"readonly":"readwrite",n),l=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),A.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Uf(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class OT{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return pn(this.B.delete())}}class si extends x{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rn(r){return r.name==="IndexedDbTransactionError"}class LT{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),pn(n)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),pn(this.store.add(e))}get(e){return pn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),pn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),pn(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new A((o,c)=>{s.onerror=l=>{c(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new A((n,i)=>{t.onerror=s=>{const o=Cc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const l=new OT(c),h=t(c.primaryKey,c.value,l);if(h instanceof A){const f=h.catch(p=>(l.done(),A.reject(p)));n.push(f)}l.isDone?i():l.K===null?c.continue():c.continue(l.K)}}).next(()=>A.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function pn(r){return new A((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Cc(n.target.error);t(i)}})}let ah=!1;function Cc(r){const e=Jt.S(Ee());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ah||(ah=!0,setTimeout(()=>{throw n},0)),n}}return r}class FT{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){rn(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await nn(t)}await this.X(6e4)})}}class BT{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=Lf(s);Dc(o,n)>0&&(n=o)}),new et(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}He.oe=-1;function fo(r){return r==null}function yi(r){return r===0&&1/r==-1/0}function $f(r){return typeof r=="number"&&Number.isInteger(r)&&!yi(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ch(e)),e=UT(r.get(t),e);return ch(e)}function UT(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ch(r){return r+""}function lt(r){const e=r.length;if(q(e>=2),e===2)return q(r.charAt(0)===""&&r.charAt(1)===""),oe.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&F(),r.charAt(o+1)){case"":const c=r.substring(s,o);let l;i.length===0?l=c:(i+=c,l=i,i=""),n.push(l);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:F()}s=o+2}return new oe(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r,e){return[r,ze(e)]}function qf(r,e,t){return[r,ze(e),t]}const $T={},qT=["prefixPath","collectionGroup","readTime","documentId"],jT=["prefixPath","collectionGroup","documentId"],zT=["collectionGroup","readTime","prefixPath","documentId"],GT=["canonicalId","targetId"],KT=["targetId","path"],HT=["path","targetId"],WT=["collectionId","parent"],QT=["indexId","uid"],JT=["uid","sequenceNumber"],YT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],XT=["indexId","uid","orderedDocumentKey"],ZT=["userId","collectionPath","documentId"],eI=["userId","collectionPath","largestBatchId"],tI=["userId","collectionGroup","largestBatchId"],jf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nI=[...jf,"documentOverlays"],zf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Gf=zf,Vc=[...Gf,"indexConfiguration","indexState","indexEntries"],rI=Vc,iI=[...Vc,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Bf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function be(r,e){const t=B(r);return Jt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function kn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Kf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fs(this.root,e,this.comparator,!1)}getReverseIterator(){return new fs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fs(this.root,e,this.comparator,!0)}}class fs{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??De.RED,this.left=i??De.EMPTY,this.right=s??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new De(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return De.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,i,s){return this}insert(e,t,n){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hh(this.data.getIterator())}getIteratorFrom(e){return new hh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class hh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Un(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new We([])}unionWith(e){let t=new ce(pe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Hf("Invalid base64 string: "+s):s}}(e);return new Te(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const sI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(r){if(q(!!r),typeof r=="string"){let e=0;const t=sI.exec(r);if(q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zt(r){return typeof r=="string"?Te.fromBase64String(r):Te.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xc(r){const e=r.mapValue.fields.__previous_value__;return kc(e)?xc(e):e}function _i(r){const e=Dt(r.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,n,i,s,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class An{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof An&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ds={nullValue:"NULL_VALUE"};function Sn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?kc(r)?4:Wf(r)?9007199254740991:mo(r)?10:11:F()}function gt(r,e){if(r===e)return!0;const t=Sn(r);if(t!==Sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return _i(r).isEqual(_i(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dt(i.timestampValue),c=Dt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Zt(i.bytesValue).isEqual(Zt(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return me(i.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(i.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return me(i.integerValue)===me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=me(i.doubleValue),c=me(s.doubleValue);return o===c?yi(o)===yi(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return sr(r.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(uh(o)!==uh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!gt(o[l],c[l])))return!1;return!0}(r,e);default:return F()}}function vi(r,e){return(r.values||[]).find(t=>gt(t,e))!==void 0}function en(r,e){if(r===e)return 0;const t=Sn(r),n=Sn(e);if(t!==n)return X(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(r.booleanValue,e.booleanValue);case 2:return function(s,o){const c=me(s.integerValue||s.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return dh(r.timestampValue,e.timestampValue);case 4:return dh(_i(r),_i(e));case 5:return X(r.stringValue,e.stringValue);case 6:return function(s,o){const c=Zt(s),l=Zt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=X(c[h],l[h]);if(f!==0)return f}return X(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const c=X(me(s.latitude),me(o.latitude));return c!==0?c:X(me(s.longitude),me(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return fh(r.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,h,f;const p=s.fields||{},_=o.fields||{},S=(c=p.value)===null||c===void 0?void 0:c.arrayValue,D=(l=_.value)===null||l===void 0?void 0:l.arrayValue,k=X(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:fh(S,D)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===zt.mapValue&&o===zt.mapValue)return 0;if(s===zt.mapValue)return 1;if(o===zt.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=X(l[p],f[p]);if(_!==0)return _;const S=en(c[l[p]],h[f[p]]);if(S!==0)return S}return X(l.length,f.length)}(r.mapValue,e.mapValue);default:throw F()}}function dh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return X(r,e);const t=Dt(r),n=Dt(e),i=X(t.seconds,n.seconds);return i!==0?i:X(t.nanos,n.nanos)}function fh(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=en(t[i],n[i]);if(s)return s}return X(t.length,n.length)}function or(r){return ja(r)}function ja(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Dt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Zt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return M.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=ja(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${ja(t.fields[o])}`;return i+"}"}(r.mapValue):F()}function Ti(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function za(r){return!!r&&"integerValue"in r}function Ii(r){return!!r&&"arrayValue"in r}function mh(r){return!!r&&"nullValue"in r}function ph(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Cs(r){return!!r&&"mapValue"in r}function mo(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function oi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return kn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=oi(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=oi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Wf(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Qf={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function aI(r){return"nullValue"in r?Ds:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Ti(An.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?mo(r)?Qf:{mapValue:{}}:F()}function cI(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Ti(An.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Qf:"mapValue"in r?mo(r)?{mapValue:{}}:zt:F()}function gh(r,e){const t=en(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function yh(r,e){const t=en(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(t)}setAll(e){let t=pe.emptyPath(),n={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=oi(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){kn(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Be(oi(this.value))}}function Jf(r){const e=[];return kn(r.fields,(t,n)=>{const i=new pe([t]);if(Cs(n)){const s=Jf(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new We(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new _e(e,0,z.min(),z.min(),z.min(),Be.empty(),0)}static newFoundDocument(e,t,n,i){return new _e(e,1,t,z.min(),n,i,0)}static newNoDocument(e,t){return new _e(e,2,t,z.min(),z.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,z.min(),z.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.position=e,this.inclusive=t}}function _h(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=M.comparator(M.fromName(o.referenceValue),t.key):n=en(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function vh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!gt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t="asc"){this.field=e,this.dir=t}}function lI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{}class te extends Yf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new uI(e,t,n):t==="array-contains"?new fI(e,n):t==="in"?new rm(e,n):t==="not-in"?new mI(e,n):t==="array-contains-any"?new pI(e,n):new te(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new hI(e,n):new dI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(en(t,this.value)):t!==null&&Sn(this.value)===Sn(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends Yf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ae(e,t)}matches(e){return cr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function cr(r){return r.op==="and"}function Ga(r){return r.op==="or"}function Nc(r){return Xf(r)&&cr(r)}function Xf(r){for(const e of r.filters)if(e instanceof ae)return!1;return!0}function Ka(r){if(r instanceof te)return r.field.canonicalString()+r.op.toString()+or(r.value);if(Nc(r))return r.filters.map(e=>Ka(e)).join(",");{const e=r.filters.map(t=>Ka(t)).join(",");return`${r.op}(${e})`}}function Zf(r,e){return r instanceof te?function(n,i){return i instanceof te&&n.op===i.op&&n.field.isEqual(i.field)&&gt(n.value,i.value)}(r,e):r instanceof ae?function(n,i){return i instanceof ae&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,c)=>s&&Zf(o,i.filters[c]),!0):!1}(r,e):void F()}function em(r,e){const t=r.filters.concat(e);return ae.create(t,r.op)}function tm(r){return r instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${or(t.value)}`}(r):r instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(tm).join(" ,")+"}"}(r):"Filter"}class uI extends te{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class hI extends te{constructor(e,t){super(e,"in",t),this.keys=nm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dI extends te{constructor(e,t){super(e,"not-in",t),this.keys=nm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nm(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>M.fromName(n.referenceValue))}class fI extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ii(t)&&vi(t.arrayValue,this.value)}}class rm extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vi(this.value.arrayValue,t)}}class mI extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!vi(this.value.arrayValue,t)}}class pI extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ii(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>vi(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function Ha(r,e=null,t=[],n=[],i=null,s=null,o=null){return new gI(r,e,t,n,i,s,o)}function Rn(r){const e=B(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ka(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),fo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>or(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>or(n)).join(",")),e.ue=t}return e.ue}function Oi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!lI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Zf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!vh(r.startAt,e.startAt)&&vh(r.endAt,e.endAt)}function zs(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Gs(r,e){return r.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function Th(r,e,t){let n=Ds,i=!0;for(const s of Gs(r,e)){let o=Ds,c=!0;switch(s.op){case"<":case"<=":o=aI(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Ds}gh({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];gh({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Ih(r,e,t){let n=zt,i=!0;for(const s of Gs(r,e)){let o=zt,c=!0;switch(s.op){case">=":case">":o=cI(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=zt}yh({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];yh({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function im(r,e,t,n,i,s,o,c){return new br(r,e,t,n,i,s,o,c)}function Li(r){return new br(r)}function Eh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sm(r){return r.collectionGroup!==null}function ai(r){const e=B(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ce(pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ei(s,n))}),t.has(pe.keyField().canonicalString())||e.ce.push(new Ei(pe.keyField(),n))}return e.ce}function Ze(r){const e=B(r);return e.le||(e.le=yI(e,ai(r))),e.le}function yI(r,e){if(r.limitType==="F")return Ha(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ei(i.field,s)});const t=r.endAt?new ar(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ar(r.startAt.position,r.startAt.inclusive):null;return Ha(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Wa(r,e){const t=r.filters.concat([e]);return new br(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ks(r,e,t){return new br(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function po(r,e){return Oi(Ze(r),Ze(e))&&r.limitType===e.limitType}function om(r){return`${Rn(Ze(r))}|lt:${r.limitType}`}function Kn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>tm(i)).join(", ")}]`),fo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>or(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>or(i)).join(",")),`Target(${n})`}(Ze(r))}; limitType=${r.limitType})`}function Fi(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):M.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of ai(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,c,l){const h=_h(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,ai(n),i)||n.endAt&&!function(o,c,l){const h=_h(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,ai(n),i))}(r,e)}function am(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cm(r){return(e,t)=>{let n=!1;for(const i of ai(r)){const s=_I(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function _I(r,e,t){const n=r.field.isKeyField()?M.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),h=c.data.field(s);return l!==null&&h!==null?en(l,h):F()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kn(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Kf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new he(M.comparator);function Xe(){return vI}const lm=new he(M.comparator);function ti(...r){let e=lm;for(const t of r)e=e.insert(t.key,t);return e}function um(r){let e=lm;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ut(){return ci()}function hm(){return ci()}function ci(){return new sn(r=>r.toString(),(r,e)=>r.isEqual(e))}const TI=new he(M.comparator),II=new ce(M.comparator);function Z(...r){let e=II;for(const t of r)e=e.add(t);return e}const EI=new ce(X);function Mc(){return EI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yi(e)?"-0":e}}function dm(r){return{integerValue:""+r}}function wI(r,e){return $f(e)?dm(e):Oc(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this._=void 0}}function bI(r,e,t){return r instanceof lr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kc(s)&&(s=xc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof ur?mm(r,e):r instanceof hr?pm(r,e):function(i,s){const o=fm(i,s),c=wh(o)+wh(i.Pe);return za(o)&&za(i.Pe)?dm(c):Oc(i.serializer,c)}(r,e)}function AI(r,e,t){return r instanceof ur?mm(r,e):r instanceof hr?pm(r,e):t}function fm(r,e){return r instanceof wi?function(n){return za(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class lr extends go{}class ur extends go{constructor(e){super(),this.elements=e}}function mm(r,e){const t=gm(e);for(const n of r.elements)t.some(i=>gt(i,n))||t.push(n);return{arrayValue:{values:t}}}class hr extends go{constructor(e){super(),this.elements=e}}function pm(r,e){let t=gm(e);for(const n of r.elements)t=t.filter(i=>!gt(i,n));return{arrayValue:{values:t}}}class wi extends go{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wh(r){return me(r.integerValue||r.doubleValue)}function gm(r){return Ii(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t){this.field=e,this.transform=t}}function SI(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof ur&&i instanceof ur||n instanceof hr&&i instanceof hr?sr(n.elements,i.elements,gt):n instanceof wi&&i instanceof wi?gt(n.Pe,i.Pe):n instanceof lr&&i instanceof lr}(r.transform,e.transform)}class RI{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class yo{}function _m(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new _o(r.key,je.none()):new Ar(r.key,r.data,je.none());{const t=r.data,n=Be.empty();let i=new ce(pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new kt(r.key,n,new We(i.toArray()),je.none())}}function PI(r,e,t){r instanceof Ar?function(i,s,o){const c=i.value.clone(),l=Ah(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof kt?function(i,s,o){if(!Vs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Ah(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(vm(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function li(r,e,t,n){return r instanceof Ar?function(s,o,c,l){if(!Vs(s.precondition,o))return c;const h=s.value.clone(),f=Sh(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof kt?function(s,o,c,l){if(!Vs(s.precondition,o))return c;const h=Sh(s.fieldTransforms,l,o),f=o.data;return f.setAll(vm(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,o,c){return Vs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function DI(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=fm(n.transform,i||null);s!=null&&(t===null&&(t=Be.empty()),t.set(n.field,s))}return t||null}function bh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&sr(n,i,(s,o)=>SI(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ar extends yo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kt extends yo{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vm(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Ah(r,e,t){const n=new Map;q(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,AI(o,c,t[i]))}return n}function Sh(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,bI(s,o,e))}return n}class _o extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tm extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PI(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=li(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=li(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=hm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const l=_m(o,c);l!==null&&n.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,(t,n)=>bh(t,n))&&sr(this.baseMutations,e.baseMutations,(t,n)=>bh(t,n))}}class Fc{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){q(e.mutations.length===n.length);let i=function(){return TI}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Fc(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ne;function VI(r){switch(r){default:return F();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Im(r){if(r===void 0)return ve("GRPC error has no .code"),P.UNKNOWN;switch(r){case Ie.OK:return P.OK;case Ie.CANCELLED:return P.CANCELLED;case Ie.UNKNOWN:return P.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return P.INTERNAL;case Ie.UNAVAILABLE:return P.UNAVAILABLE;case Ie.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ie.NOT_FOUND:return P.NOT_FOUND;case Ie.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ie.ABORTED:return P.ABORTED;case Ie.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ie.DATA_LOSS:return P.DATA_LOSS;default:return F()}}(ne=Ie||(Ie={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Tn([4294967295,4294967295],0);function Rh(r){const e=kI().encode(r),t=new Pf;return t.update(e),new Uint8Array(t.digest())}function Ph(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tn([t,n],0),new Tn([i,s],0)]}class Uc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ni(`Invalid padding: ${t}`);if(n<0)throw new ni(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ni(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Tn.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Tn.fromNumber(n)));return i.compare(xI)===1&&(i=new Tn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Rh(e),[n,i]=Ph(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Uc(s,i,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Rh(e),[n,i]=Ph(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Bi(z.min(),i,new he(X),Xe(),Z())}}class Ui{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ui(n,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Em{constructor(e,t){this.targetId=e,this.me=t}}class wm{constructor(e,t,n=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Dh{constructor(){this.fe=0,this.ge=Vh(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),n=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:F()}}),new Ui(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Vh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xe(),this.qe=Ch(),this.Qe=new he(X)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(zs(s))if(n===0){const o=new M(s.path);this.Ue(t,o,_e.newNoDocument(o,z.min()))}else q(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=Zt(n).toUint8Array()}catch(l){if(l instanceof Hf)return mi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Uc(o,i,s)}catch(l){return mi(l instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&zs(c.target)){const l=new M(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,_e.newNoDocument(l,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let n=Z();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Bi(e,t,this.Qe,this.ke,n);return this.ke=Xe(),this.qe=Ch(),this.Qe=new he(X),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Dh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ce(X),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Dh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ch(){return new he(M.comparator)}function Vh(){return new he(M.comparator)}const MI={asc:"ASCENDING",desc:"DESCENDING"},OI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LI={and:"AND",or:"OR"};class FI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qa(r,e){return r.useProto3Json||fo(e)?e:{value:e}}function dr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function BI(r,e){return dr(r,e.toTimestamp())}function Ge(r){return q(!!r),z.fromTimestamp(function(t){const n=Dt(t);return new K(n.seconds,n.nanos)}(r))}function $c(r,e){return Ja(r,e).canonicalString()}function Ja(r,e){const t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Am(r){const e=oe.fromString(r);return q(Nm(e)),e}function Hs(r,e){return $c(r.databaseId,e.path)}function In(r,e){const t=Am(e);if(t.get(1)!==r.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new M(Pm(t))}function Sm(r,e){return $c(r.databaseId,e)}function Rm(r){const e=Am(r);return e.length===4?oe.emptyPath():Pm(e)}function Ya(r){return new oe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pm(r){return q(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function kh(r,e,t){return{name:Hs(r,e),fields:t.value.mapValue.fields}}function UI(r,e,t){const n=In(r,e.name),i=Ge(e.updateTime),s=e.createTime?Ge(e.createTime):z.min(),o=new Be({mapValue:{fields:e.fields}}),c=_e.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function $I(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(q(f===void 0||typeof f=="string"),Te.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Te.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?P.UNKNOWN:Im(h.code);return new x(f,h.message||"")}(o);t=new wm(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=In(r,n.document.name),s=Ge(n.document.updateTime),o=n.document.createTime?Ge(n.document.createTime):z.min(),c=new Be({mapValue:{fields:n.document.fields}}),l=_e.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ks(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=In(r,n.document),s=n.readTime?Ge(n.readTime):z.min(),o=_e.newNoDocument(i,s),c=n.removedTargetIds||[];t=new ks([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=In(r,n.document),s=n.removedTargetIds||[];t=new ks([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new CI(i,s),c=n.targetId;t=new Em(c,o)}}return t}function Ws(r,e){let t;if(e instanceof Ar)t={update:kh(r,e.key,e.value)};else if(e instanceof _o)t={delete:Hs(r,e.key)};else if(e instanceof kt)t={update:kh(r,e.key,e.data),updateMask:HI(e.fieldMask)};else{if(!(e instanceof Tm))return F();t={verify:Hs(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const c=o.transform;if(c instanceof lr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ur)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wi)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw F()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:BI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(r,e.precondition)),t}function Xa(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?je.updateTime(Ge(s.updateTime)):s.exists!==void 0?je.exists(s.exists):je.none()}(e.currentDocument):je.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let l=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME"),l=new lr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new ur(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new hr(f)}else"increment"in c?l=new wi(o,c.increment):F();const h=pe.fromServerFormat(c.fieldPath);return new ym(h,l)}(r,i)):[];if(e.update){e.update.name;const i=In(r,e.update.name),s=new Be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new We(h.map(f=>pe.fromServerFormat(f)))}(e.updateMask);return new kt(i,s,o,t,n)}return new Ar(i,s,t,n)}if(e.delete){const i=In(r,e.delete);return new _o(i,t)}if(e.verify){const i=In(r,e.verify);return new Tm(i,t)}return F()}function qI(r,e){return r&&r.length>0?(q(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?Ge(i.updateTime):Ge(s);return o.isEqual(z.min())&&(o=Ge(s)),new RI(o,i.transformResults||[])}(t,e))):[]}function Dm(r,e){return{documents:[Sm(r,e.path)]}}function Cm(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Sm(r,i);const s=function(h){if(h.length!==0)return xm(ae.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Hn(_.field),direction:zI(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Qa(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Vm(r){let e=Rm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){q(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const _=km(p);return _ instanceof ae&&Nc(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(D){return new Ei(Wn(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,fo(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,S=p.values||[];return new ar(S,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,S=p.values||[];return new ar(S,_)}(t.endAt)),im(e,i,o,s,c,"F",l,h)}function jI(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function km(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Wn(t.unaryFilter.field);return te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Wn(t.unaryFilter.field);return te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wn(t.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wn(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(t){return te.create(Wn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(n=>km(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(r):F()}function zI(r){return MI[r]}function GI(r){return OI[r]}function KI(r){return LI[r]}function Hn(r){return{fieldPath:r.canonicalString()}}function Wn(r){return pe.fromServerFormat(r.fieldPath)}function xm(r){return r instanceof te?function(t){if(t.op==="=="){if(ph(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NAN"}};if(mh(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ph(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NAN"}};if(mh(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hn(t.field),op:GI(t.op),value:t.value}}}(r):r instanceof ae?function(t){const n=t.getFilters().map(i=>xm(i));return n.length===1?n[0]:{compositeFilter:{op:KI(t.op),filters:n}}}(r):F()}function HI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,n,i,s=z.min(),o=z.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.ct=e}}function WI(r,e){let t;if(e.document)t=UI(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=M.fromSegments(e.noDocument.path),i=Dn(e.noDocument.readTime);t=_e.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const n=M.fromSegments(e.unknownDocument.path),i=Dn(e.unknownDocument.version);t=_e.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new K(i[0],i[1]);return z.fromTimestamp(s)}(e.readTime)),t}function xh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Qs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:Hs(s,o.key),fields:o.data.value.mapValue.fields,updateTime:dr(s,o.version.toTimestamp()),createTime:dr(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Pn(e.version)};else{if(!e.isUnknownDocument())return F();n.unknownDocument={path:t.path.toArray(),version:Pn(e.version)}}return n}function Qs(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Pn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Dn(r){const e=new K(r.seconds,r.nanoseconds);return z.fromTimestamp(e)}function gn(r,e){const t=(e.baseMutations||[]).map(s=>Xa(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Xa(r.ct,s)),i=K.fromMillis(e.localWriteTimeMs);return new Lc(e.batchId,i,t,n)}function ri(r){const e=Dn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Dn(r.lastLimboFreeSnapshotVersion):z.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return q(s.documents.length===1),Ze(Li(Rm(s.documents[0])))}(r.query):function(s){return Ze(Vm(s))}(r.query),new St(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Te.fromBase64String(r.resumeToken))}function Om(r,e){const t=Pn(e.snapshotVersion),n=Pn(e.lastLimboFreeSnapshotVersion);let i;i=zs(e.target)?Dm(r.ct,e.target):Cm(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Rn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Lm(r){const e=Vm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ks(e,e.limit,"L"):e}function _a(r,e){return new Bc(e.largestBatchId,Xa(r.ct,e.overlayMutation))}function Nh(r,e){const t=e.path.lastSegment();return[r,ze(e.path.popLast()),t]}function Mh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Pn(n.readTime),documentKey:ze(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{getBundleMetadata(e,t){return Oh(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:Dn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Oh(e).put(function(i){return{bundleId:i.id,createTime:Pn(Ge(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Lh(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:Lm(s.bundledQuery),readTime:Dn(s.readTime)}}(n)})}saveNamedQuery(e,t){return Lh(e).put(function(i){return{name:i.name,readTime:Pn(Ge(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Oh(r){return be(r,"bundles")}function Lh(r){return be(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new vo(e,n)}getOverlay(e,t){return jr(e).get(Nh(this.userId,t)).next(n=>n?_a(this.serializer,n):null)}getOverlays(e,t){const n=ut();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const c=new Bc(t,o);i.push(this.ht(e,c))}),A.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(ze(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(jr(e).j("collectionPathOverlayIndex",c))}),A.waitFor(s)}getOverlaysForCollection(e,t,n){const i=ut(),s=ze(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return jr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=_a(this.serializer,l);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=ut();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return jr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=_a(this.serializer,h);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return jr(e).put(function(i,s,o){const[c,l,h]=Nh(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ws(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function jr(r){return be(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{Pt(e){return be(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Te.fromUint8Array(n):Te.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(me(e.integerValue));else if("doubleValue"in e){const n=me(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),yi(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=Dt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Zt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Wf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):mo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):F()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const s=e.fields||{};this.dt(t,53);const o="value",c=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(me(c)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),M.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}yn.vt=new yn;function YI(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Fh(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=YI(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class XI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),n=Fh(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=Fh(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class ZI{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class eE{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class zr{constructor(){this.jt=new XI,this.Ht=new ZI(this.jt),this.Jt=new eE(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new _n(this.indexId,this.documentKey,this.arrayValue,n)}}function Ft(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Bh(r.arrayValue,e.arrayValue),t!==0?t:(t=Bh(r.directionalValue,e.directionalValue),t!==0?t:M.comparator(r.documentKey,e.documentKey)))}function Bh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.Xt=new ce((t,n)=>pe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(q(e.collectionGroup===this.collectionId),this.nn)return!1;const t=$a(e);if(t!==void 0&&!this.sn(t))return!1;const n=mn(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const l=n[s];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ce(pe.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Rs(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Rs(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Rs(n.field,n.dir==="asc"?0:1)));return new js(js.UNKNOWN_ID,this.collectionId,t,gi.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(r){var e,t;if(q(r instanceof te||r instanceof ae),r instanceof te){if(r instanceof rm){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>te.create(r.field,"==",s)))||[];return ae.create(i,"or")}return r}const n=r.filters.map(i=>Fm(i));return ae.create(n,r.op)}function tE(r){if(r.getFilters().length===0)return[];const e=tc(Fm(r));return q(Bm(e)),Za(e)||ec(e)?[e]:e.getFilters()}function Za(r){return r instanceof te}function ec(r){return r instanceof ae&&Nc(r)}function Bm(r){return Za(r)||ec(r)||function(t){if(t instanceof ae&&Ga(t)){for(const n of t.getFilters())if(!Za(n)&&!ec(n))return!1;return!0}return!1}(r)}function tc(r){if(q(r instanceof te||r instanceof ae),r instanceof te)return r;if(r.filters.length===1)return tc(r.filters[0]);const e=r.filters.map(n=>tc(n));let t=ae.create(e,r.op);return t=Js(t),Bm(t)?t:(q(t instanceof ae),q(cr(t)),q(t.filters.length>1),t.filters.reduce((n,i)=>qc(n,i)))}function qc(r,e){let t;return q(r instanceof te||r instanceof ae),q(e instanceof te||e instanceof ae),t=r instanceof te?e instanceof te?function(i,s){return ae.create([i,s],"and")}(r,e):$h(r,e):e instanceof te?$h(e,r):function(i,s){if(q(i.filters.length>0&&s.filters.length>0),cr(i)&&cr(s))return em(i,s.getFilters());const o=Ga(i)?i:s,c=Ga(i)?s:i,l=o.filters.map(h=>qc(h,c));return ae.create(l,"or")}(r,e),Js(t)}function $h(r,e){if(cr(e))return em(e,r.getFilters());{const t=e.filters.map(n=>qc(r,n));return ae.create(t,"or")}}function Js(r){if(q(r instanceof te||r instanceof ae),r instanceof te)return r;const e=r.getFilters();if(e.length===1)return Js(e[0]);if(Xf(r))return r;const t=e.map(i=>Js(i)),n=[];return t.forEach(i=>{i instanceof te?n.push(i):i instanceof ae&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:ae.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.un=new jc}addToCollectionParentIndex(e,t){return this.un.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(et.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(et.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class jc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ce(oe.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ce(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Uint8Array(0);class rE{constructor(e,t){this.databaseId=t,this.cn=new jc,this.ln=new sn(n=>Rn(n),(n,i)=>Oi(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:n,parent:ze(i)};return qh(e).put(s)}return A.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Mf(t),""],!1,!0);return qh(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(lt(o.parent))}return n})}addFieldIndex(e,t){const n=Gr(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=qn(e);return s.next(c=>{o.put(Mh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Gr(e),i=qn(e),s=$n(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Gr(e),n=$n(e),i=qn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return A.forEach(this.hn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new Uh(n).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=$n(e);let i=!0;const s=new Map;return A.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=Z();const c=[];return A.forEach(s,(l,h)=>{V("IndexedDbIndexManager",`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`}(l)} to execute ${Rn(t)}`);const f=function(L,O){const H=$a(O);if(H===void 0)return null;for(const Q of Gs(L,H.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(h,l),p=function(L,O){const H=new Map;for(const Q of mn(O))for(const T of Gs(L,Q.fieldPath))switch(T.op){case"==":case"in":H.set(Q.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return H.set(Q.fieldPath.canonicalString(),T.value),Array.from(H.values())}return null}(h,l),_=function(L,O){const H=[];let Q=!0;for(const T of mn(O)){const y=T.kind===0?Th(L,T.fieldPath,L.startAt):Ih(L,T.fieldPath,L.startAt);H.push(y.value),Q&&(Q=y.inclusive)}return new ar(H,Q)}(h,l),S=function(L,O){const H=[];let Q=!0;for(const T of mn(O)){const y=T.kind===0?Ih(L,T.fieldPath,L.endAt):Th(L,T.fieldPath,L.endAt);H.push(y.value),Q&&(Q=y.inclusive)}return new ar(H,Q)}(h,l),D=this.In(l,h,_),k=this.In(l,h,S),C=this.Tn(l,h,p),j=this.En(l.indexId,f,D,_.inclusive,k,S.inclusive,C);return A.forEach(j,U=>n.G(U,t.limit).next(L=>{L.forEach(O=>{const H=M.fromSegments(O.documentKey);o.has(H)||(o=o.add(H),c.push(H))})}))}).next(()=>c)}return A.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=tE(ae.create(e.filters,"and")).map(n=>Ha(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,i,s,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,s.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const _=t?this.dn(t[p/h]):ms,S=this.An(e,_,n[p%h],i),D=this.Rn(e,_,s[p%h],o),k=c.map(C=>this.An(e,_,C,!0));f.push(...this.createRange(S,D,k))}return f}An(e,t,n,i){const s=new _n(e,M.empty(),t,n);return i?s:s.Zt()}Rn(e,t,n,i){const s=new _n(e,M.empty(),t,n);return i?s.Zt():s}Pn(e,t){const n=new Uh(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const i=this.hn(t);return A.forEach(i,s=>this.Pn(e,s).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new ce(pe.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}Vn(e,t){const n=new zr;for(const i of mn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Yt(i.kind);yn.vt.It(s,o)}return n.zt()}dn(e){const t=new zr;return yn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new zr;return yn.vt.It(Ti(this.databaseId,t),n.Yt(function(s){const o=mn(s);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let i=[];i.push(new zr);let s=0;for(const o of mn(e)){const c=n[s++];for(const l of i)if(this.fn(t,o.fieldPath)&&Ii(c))i=this.gn(i,o,c);else{const h=l.Yt(o.kind);yn.vt.It(c,h)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const l=new zr;l.seed(c.zt()),yn.vt.It(o,l.Yt(t.kind)),s.push(l)}return s}fn(e,t){return!!e.filters.find(n=>n instanceof te&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Gr(e),i=qn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return A.forEach(s,c=>i.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const _=p?new gi(p.sequenceNumber,new et(Dn(p.readTime),new M(lt(p.documentKey)),p.largestBatchId)):gi.empty(),S=f.fields.map(([D,k])=>new Rs(pe.fromServerFormat(D),k));return new js(f.indexId,f.collectionGroup,S,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:X(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=Gr(e),s=qn(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>A.forEach(c,l=>s.put(Mh(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),A.forEach(c,l=>this.wn(e,i,l).next(h=>{const f=this.Sn(s,l);return h.isEqual(f)?A.resolve():this.bn(e,s,l,h,f)}))))})}Dn(e,t,n,i){return $n(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return $n(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=$n(e);let s=new ce(Ft);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{s=s.add(new _n(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Sn(e,t){let n=new ce(Ft);const i=this.Vn(t,e);if(i==null)return n;const s=$a(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Ii(o))for(const c of o.arrayValue.values||[])n=n.add(new _n(t.indexId,e.key,this.dn(c),i))}else n=n.add(new _n(t.indexId,e.key,ms,i));return n}bn(e,t,n,i,s){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,_){const S=l.getIterator(),D=h.getIterator();let k=Un(S),C=Un(D);for(;k||C;){let j=!1,U=!1;if(k&&C){const L=f(k,C);L<0?U=!0:L>0&&(j=!0)}else k!=null?U=!0:j=!0;j?(p(C),C=Un(D)):U?(_(k),k=Un(S)):(k=Un(S),C=Un(D))}}(i,s,Ft,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),A.waitFor(o)}yn(e){let t=1;return qn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>Ft(o,c)).filter((o,c,l)=>!c||Ft(o,l[c-1])!==0);const i=[];i.push(e);for(const o of n){const c=Ft(o,e),l=Ft(o,t);if(c===0)i[0]=e.Zt();else if(c>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ms,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ms,[]];s.push(IDBKeyRange.bound(c,l))}return s}Cn(e,t){return Ft(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(jh)}getMinOffset(e,t){return A.mapArray(this.hn(t),n=>this.Pn(e,n).next(i=>i||F())).next(jh)}}function qh(r){return be(r,"collectionParents")}function $n(r){return be(r,"indexEntries")}function Gr(r){return be(r,"indexConfiguration")}function qn(r){return be(r,"indexState")}function jh(r){q(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Dc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new et(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ke{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,p,_)=>(c++,_.delete()));s.push(l.next(()=>{q(c===1)}));const h=[];for(const f of t.mutations){const p=qf(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return A.waitFor(s).next(()=>h)}function Ys(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(41943040,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);class To{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new To(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=Qn(e),o=Bt(e);return o.add({}).next(c=>{q(typeof c=="number");const l=new Lc(c,t,n,i),h=function(S,D,k){const C=k.baseMutations.map(U=>Ws(S.ct,U)),j=k.mutations.map(U=>Ws(S.ct,U));return{userId:D,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:C,mutations:j}}(this.serializer,this.userId,l),f=[];let p=new ce((_,S)=>X(_.canonicalString(),S.canonicalString()));for(const _ of i){const S=qf(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(S,$T))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),A.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Bt(e).get(t).next(n=>n?(q(n.userId===this.userId),gn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?A.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Bt(e).J({index:"userMutationsIndex",range:i},(o,c,l)=>{c.userId===this.userId&&(q(c.batchId>=n),s=gn(this.serializer,c)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Bt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).U("userMutationsIndex",t).next(n=>n.map(i=>gn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ps(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return Qn(e).J({range:i},(o,c,l)=>{const[h,f,p]=o,_=lt(f);if(h===this.userId&&t.path.isEqual(_))return Bt(e).get(p).next(S=>{if(!S)throw F();q(S.userId===this.userId),s.push(gn(this.serializer,S))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce(X);const i=[];return t.forEach(s=>{const o=Ps(this.userId,s.path),c=IDBKeyRange.lowerBound(o),l=Qn(e).J({range:c},(h,f,p)=>{const[_,S,D]=h,k=lt(S);_===this.userId&&s.path.isEqual(k)?n=n.add(D):p.done()});i.push(l)}),A.waitFor(i).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Ps(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new ce(X);return Qn(e).J({range:o},(l,h,f)=>{const[p,_,S]=l,D=lt(_);p===this.userId&&n.isPrefixOf(D)?D.length===i&&(c=c.add(S)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(Bt(e).get(s).next(o=>{if(o===null)throw F();q(o.userId===this.userId),n.push(gn(this.serializer,o))}))}),A.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Um(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),A.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Qn(e).J({range:n},(s,o,c)=>{if(s[0]===this.userId){const l=lt(s[1]);i.push(l)}else c.done()}).next(()=>{q(i.length===0)})})}containsKey(e,t){return $m(e,this.userId,t)}Nn(e){return qm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function $m(r,e,t){const n=Ps(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return Qn(r).J({range:s,H:!0},(c,l,h)=>{const[f,p,_]=c;f===e&&p===i&&(o=!0),h.done()}).next(()=>o)}function Bt(r){return be(r,"mutations")}function Qn(r){return be(r,"documentMutations")}function qm(r){return be(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cn(0)}static kn(){return new Cn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new Cn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>z.fromTimestamp(new K(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>jn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(q(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return jn(e).J((o,c)=>{const l=ri(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,t){return jn(e).J((n,i)=>{const s=ri(i);t(s)})}qn(e){return Gh(e).get("targetGlobalKey").next(t=>(q(t!==null),t))}Qn(e,t){return Gh(e).put("targetGlobalKey",t)}Kn(e,t){return jn(e).put(Om(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Rn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return jn(e).J({range:i,index:"queryTargetsIndex"},(o,c,l)=>{const h=ri(c);Oi(t,h.target)&&(s=h,l.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=jt(e);return t.forEach(o=>{const c=ze(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))}),A.waitFor(i)}removeMatchingKeys(e,t,n){const i=jt(e);return A.forEach(t,s=>{const o=ze(s.path);return A.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=jt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=jt(e);let s=Z();return i.J({range:n,H:!0},(o,c,l)=>{const h=lt(o[1]),f=new M(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=ze(t.path),i=IDBKeyRange.bound([n],[Mf(n)],!1,!0);let s=0;return jt(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],l,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return jn(e).get(t).next(n=>n?ri(n):null)}}function jn(r){return be(r,"targets")}function Gh(r){return be(r,"targetGlobal")}function jt(r){return be(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh([r,e],[t,n]){const i=X(r,t);return i===0?X(e,n):i}class sE{constructor(e){this.Un=e,this.buffer=new ce(Kh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Kh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oE{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await nn(t)}await this.Hn(3e5)})}}class aE{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return A.resolve(He.oe);const n=new sE(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(zh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),Gn()<=ee.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function cE(r,e){return new aE(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t){this.db=e,this.garbageCollector=cE(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,i)=>t(i))}addReference(e,t,n){return ps(e,n)}removeReference(e,t,n){return ps(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ps(e,t)}nr(e,t){return function(i,s){let o=!1;return qm(i).Y(c=>$m(i,c,s).next(l=>(l&&(o=!0),A.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,z.min()),jt(e).delete(function(p){return[0,ze(p.path)]}(o))))});i.push(l)}}).next(()=>A.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ps(e,t)}tr(e,t){const n=jt(e);let i,s=He.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(s!==He.oe&&t(new M(lt(i)),s),s=h,i=l):s=He.oe}).next(()=>{s!==He.oe&&t(new M(lt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ps(r,e){return jt(r).put(function(n,i){return{targetId:0,path:ze(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.changes=new sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return dn(e).put(n)}removeEntry(e,t,n){return dn(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Qs(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=_e.newInvalidDocument(t);return dn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Kr(t))},(i,s)=>{n=this.ir(t,s)}).next(()=>n)}sr(e,t){let n={size:0,document:_e.newInvalidDocument(t)};return dn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Kr(t))},(i,s)=>{n={document:this.ir(t,s),size:Ys(s)}}).next(()=>n)}getEntries(e,t){let n=Xe();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);n=n.insert(i,o)}).next(()=>n)}ar(e,t){let n=Xe(),i=new he(M.comparator);return this._r(e,t,(s,o)=>{const c=this.ir(s,o);n=n.insert(s,c),i=i.insert(s,Ys(o))}).next(()=>({documents:n,ur:i}))}_r(e,t,n){if(t.isEmpty())return A.resolve();let i=new ce(Qh);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Kr(i.first()),Kr(i.last())),o=i.getIterator();let c=o.getNext();return dn(e).J({index:"documentKeyIndex",range:s},(l,h,f)=>{const p=M.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Qh(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Kr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Qs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return dn(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Xe();for(const p of h){const _=this.ir(M.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(Fi(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Xe();const o=Wh(t,n),c=Wh(t,et.max());return dn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(M.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new hE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hh(e).get("remoteDocumentGlobalKey").next(t=>(q(!!t),t))}rr(e,t){return Hh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=WI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(z.min())))return n}return _e.newInvalidDocument(e)}}function zm(r){return new uE(r)}class hE extends jm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new sn(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ce((s,o)=>X(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const l=xh(this.cr.serializer,o);i=i.add(s.path.popLast());const h=Ys(l);n+=h-c.size,t.push(this.cr.addEntry(e,s,l))}else if(n-=c.size,this.trackRemovals){const l=xh(this.cr.serializer,o.convertToNoDocument(z.min()));t.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function Hh(r){return be(r,"remoteDocumentGlobal")}function dn(r){return be(r,"remoteDocumentsV14")}function Kr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wh(r,e){const t=e.documentKey.path.toArray();return[r,Qs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Qh(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=X(t[s],n[s]),i)return i;return i=X(t.length,n.length),i||(i=X(t[t.length-2],n[n.length-2]),i||X(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&li(n.mutation,i,We.empty(),K.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Z()){const i=ut();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=ti();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=ut();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Z()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,i){let s=Xe();const o=ci(),c=function(){return ci()}();return t.forEach((l,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof kt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),li(f.mutation,h,f.mutation.getFieldMask(),K.now())):o.set(h.key,We.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new dE(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=ci();let i=new he((o,c)=>o-c),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||We.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(i.get(c.batchId)||Z()).add(l);i=i.insert(c.batchId,p)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=hm();f.forEach(_=>{if(!s.has(_)){const S=_m(t.get(_),n.get(_));S!==null&&p.set(_,S),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return A.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):A.resolve(ut());let c=-1,l=s;return o.next(h=>A.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,Z())).next(f=>({batchId:c,changes:um(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(n=>{let i=ti();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,s).next(c=>A.forEach(c,l=>{const h=function(p,_){return new br(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,_e.newInvalidDocument(f)))});let c=ti();return o.forEach((l,h)=>{const f=s.get(l);f!==void 0&&li(f.mutation,h,We.empty(),K.now()),Fi(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return A.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ge(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Lm(i.bundledQuery),readTime:Ge(i.readTime)}}(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.overlays=new he(M.comparator),this.Ir=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ut();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const i=ut(),s=t.length+1,o=new M(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>n&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new he((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=ut(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ut(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return A.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Bc(t,n));let s=this.Ir.get(t);s===void 0&&(s=Z(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.Tr=new ce(Ae.Er),this.dr=new ce(Ae.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ae(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ae(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new M(new oe([])),n=new Ae(t,e),i=new Ae(t,e+1),s=[];return this.dr.forEachInRange([n,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new M(new oe([])),n=new Ae(t,e),i=new Ae(t,e+1);let s=Z();return this.dr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ae(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ae{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return M.comparator(e.key,t.key)||X(e.wr,t.wr)}static Ar(e,t){return X(e.wr,t.wr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ce(Ae.Er)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Lc(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.br=this.br.add(new Ae(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ae(t,0),i=new Ae(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],o=>{const c=this.Dr(o.wr);s.push(c)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce(X);return t.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],c=>{n=n.add(c.wr)})}),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;M.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new M(s),0);let c=new ce(X);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.wr)),!0)},o),A.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){q(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return A.forEach(t.mutations,i=>{const s=new Ae(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ae(t,0),i=this.br.firstAfterOrEqual(n);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.Mr=e,this.docs=function(){return new he(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():_e.newInvalidDocument(t))}getEntries(e,t){let n=Xe();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():_e.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Xe();const o=t.path,c=new M(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Dc(Lf(f),n)<=0||(i.has(f.key)||Fi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,n,i){F()}Or(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new _E(this)}getSize(e){return A.resolve(this.size)}}class _E extends jm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.persistence=e,this.Nr=new sn(t=>Rn(t),Oi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zc,this.targetCount=0,this.kr=Cn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),A.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Cn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Kn(t),A.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t){this.qr={},this.overlays={},this.Qr=new He(0),this.Kr=!1,this.Kr=!0,this.$r=new pE,this.referenceDelegate=e(this),this.Ur=new vE(this),this.indexManager=new nE,this.remoteDocumentCache=function(i){return new yE(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Mm(t),this.Gr=new fE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new gE(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new TE(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return A.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class TE extends Bf{constructor(e){super(),this.currentSequenceNumber=e}}class Io{constructor(e){this.persistence=e,this.Jr=new zc,this.Yr=null}static Zr(e){return new Io(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),A.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xr,n=>{const i=M.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return A.or([()=>A.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.serializer=e}O(e,t,n,i){const s=new ho("createOrUpgrade",t);n<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lh,{unique:!0}),l.createObjectStore("documentMutations")}(e),Jh(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return n<3&&i>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Jh(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lh,{unique:!0});const p=h.store("mutations"),_=f.map(S=>p.put(S));return A.waitFor(_)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.ni(s))),n<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),n<7&&i>=7&&(o=o.next(()=>this.ii(s))),n<8&&i>=8&&(o=o.next(()=>this.si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.oi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:ZT});h.createIndex("collectionPathOverlayIndex",eI,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",tI,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:qT});h.createIndex("documentKeyIndex",jT),h.createIndex("collectionGroupIndex",zT)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),n<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:QT}).createIndex("sequenceNumberIndex",JT,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:YT}).createIndex("documentKeyIndex",XT,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Ys(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>A.forEach(c,l=>{q(l.userId===s.userId);const h=gn(this.serializer,l);return Um(e,s.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,c)=>{const l=new oe(o),h=function(p){return[0,ze(p)]}(l);s.push(t.get(h).next(f=>f?A.resolve():(p=>t.put({targetId:0,path:ze(p),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>A.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:WT});const n=t.store("collectionParents"),i=new jc,s=o=>{if(i.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:ze(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new oe(o);return s(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=lt(c);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,i)=>{const s=ri(i),o=Om(this.serializer,s);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new M(oe.fromString(p.document.name).popFirst(5)):p.noDocument?M.fromSegments(p.noDocument.path):p.unknownDocument?M.fromSegments(p.unknownDocument.path):F()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>A.waitFor(i))}ai(e,t){const n=t.store("mutations"),i=zm(this.serializer),s=new Km(Io.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:Z();gn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),A.forEach(c,(l,h)=>{const f=new Fe(h),p=vo.lt(this.serializer,f),_=s.getIndexManager(f),S=To.lt(f,this.serializer,_,s.referenceDelegate);return new Gm(i,S,p,_).recalculateAndSaveOverlaysForDocumentKeys(new qa(t,He.oe),l).next()})})}}function Jh(r){r.createObjectStore("targetDocuments",{keyPath:KT}).createIndex("documentTargetsIndex",HT,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",GT,{unique:!0}),r.createObjectStore("targetGlobal")}const va="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Gc{constructor(e,t,n,i,s,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=s,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!Gc.D())throw new x(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new lE(this,i),this.Ai=t+"main",this.serializer=new Mm(l),this.Ri=new Jt(this.Ai,this.hi,new IE(this.serializer)),this.$r=new JI,this.Ur=new iE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zm(this.serializer),this.Gr=new QI,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&ve("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,va);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new He(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>gs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(rn(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Hr(e).get("owner").next(t=>A.resolve(this.vi(t)))}Ci(e){return gs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=be(t,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return A.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?A.resolve(!0):Hr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,va);return!1}}return!(!this.networkEnabled||!this.inForeground)||gs(e).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new qa(e,He.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>gs(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return To.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rE(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return vo.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===17?iI:l===16?rI:l===15?Vc:l===14?Gf:l===13?zf:l===12?nI:l===11?jf:void F()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,c=>(o=new qa(c,this.Qr?this.Qr.next():He.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw ve(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new x(P.FAILED_PRECONDITION,Ff);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Hr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new x(P.FAILED_PRECONDITION,va)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Hr(e).put("owner",t)}static D(){return Jt.D()}bi(e){const t=Hr(e);return t.get("owner").next(n=>this.vi(n)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):A.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ve(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Ud()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ve("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ve("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Hr(r){return be(r,"owner")}function gs(r){return be(r,"clientMetadata")}function Hm(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=Z(),i=Z();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kc(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ud()?8:Uf(Ee())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new EE;return this.Xi(e,t,o).next(c=>{if(s.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(Gn()<=ee.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),A.resolve()):(Gn()<=ee.DEBUG&&V("QueryEngine","Query:",Kn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Gn()<=ee.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):A.resolve())}Yi(e,t){if(Eh(t))return A.resolve(null);let n=Ze(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ks(t,null,"F"),n=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,Ks(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,i){return Eh(t)||i.isEqual(z.min())?A.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const o=this.ts(t,s);return this.ns(t,o,n,i)?A.resolve(null):(Gn()<=ee.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kn(t)),this.rs(e,o,t,Of(i,-1)).next(c=>c))})}ts(e,t){let n=new ce(cm(e));return t.forEach((i,s)=>{Fi(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return Gn()<=ee.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.Ji.getDocumentsMatchingQuery(e,t,et.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new he(X),this._s=new sn(s=>Rn(s),Oi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Qm(r,e,t,n){return new wE(r,e,t,n)}async function Jm(r,e){const t=B(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],c=[];let l=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function bE(r,e){const t=B(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,_=p.keys();let S=A.resolve();return _.forEach(D=>{S=S.next(()=>f.getEntry(l,D)).next(k=>{const C=h.docVersions.get(D);q(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Z();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Ym(r){const e=B(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function AE(r,e){const t=B(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const _=i.get(p);if(!_)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,p)));let S=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Te.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),i=i.insert(p,S),function(k,C,j){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(_,S,f)&&c.push(t.Ur.updateTargetData(s,S))});let l=Xe(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(SE(s,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(z.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return A.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(t.os=i,s))}function SE(r,e,t){let n=Z(),i=Z();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Xe();return t.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function RE(r,e){const t=B(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Xs(r,e){const t=B(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,A.resolve(i)):t.Ur.allocateTargetId(n).next(o=>(i=new St(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function fr(r,e,t){const n=B(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rn(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function Zs(r,e,t){const n=B(r);let i=z.min(),s=Z();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=B(l),_=p._s.get(f);return _!==void 0?A.resolve(p.os.get(_)):p.Ur.getTargetData(h,f)}(n,o,Ze(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?i:z.min(),t?s:Z())).next(c=>(ep(n,am(e),c),{documents:c,Ts:s})))}function Xm(r,e){const t=B(r),n=B(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function Zm(r,e){const t=B(r),n=t.us.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Of(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(ep(t,e,i),i))}function ep(r,e,t){let n=r.us.get(e)||z.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}function Yh(r,e){return`firestore_clients_${r}_${e}`}function Xh(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Ta(r,e){return`firestore_targets_${r}_${e}`}class eo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new x(i.error.code,i.error.message))),o?new eo(e,t,i.state,s):(ve("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ui{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new x(n.error.code,n.error.message))),s?new ui(e,n.state,i):(ve("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class to{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Mc();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=$f(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new to(e,s):(ve("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Hc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Hc(t.clientId,t.onlineState):(ve("SharedClientState",`Failed to parse online state: ${e}`),null)}}class nc{constructor(){this.activeTargetIds=Mc()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ia{constructor(e,t,n,i,s){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new he(X),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Yh(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new nc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const i=this.getItem(Yh(this.persistenceKey,n));if(i){const s=to.Rs(n,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ta(this.persistenceKey,e));if(i){const s=ui.Rs(e,i);s&&(n=s.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ta(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void ve("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(s){let o=He.oe;if(s!=null)try{const c=JSON.parse(s);q(typeof c=="number"),o=c}catch(c){ve("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==He.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new eo(this.currentUser,e,t,n),s=Xh(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=Xh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=Ta(this.persistenceKey,e),s=new ui(e,t,n);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return to.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return eo.Rs(new Fe(s),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return ui.Rs(i,t)}Ls(e){return Hc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(n),o=[],c=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Mc();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class tp{constructor(){this.so=new nc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new nc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys=null;function Ea(){return ys===null?ys=function(){return 268435456+Math.round(2147483648*Math.random())}():ys++,"0x"+ys.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class VE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,o){const c=Ea(),l=this.xo(t,n.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,l,h,i).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw mi("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(t,n,i,s,o,c){return this.Mo(t,n,i,s,o)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,n){const i=DE[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=Ea();return new Promise((o,c)=>{const l=new Df;l.setWithCredentials(!0),l.listenOnce(Cf.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ss.NO_ERROR:const f=l.getResponseJson();V(Le,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ss.TIMEOUT:V(Le,`RPC '${e}' ${s} timed out`),c(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ss.HTTP_ERROR:const p=l.getStatus();if(V(Le,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const D=function(C){const j=C.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(S.status);c(new x(D,S.message))}else c(new x(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new x(P.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{V(Le,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);V(Le,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=Ea(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xf(),c=kf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=s.join("");V(Le,`Creating RPC '${e}' stream ${i}: ${f}`,l);const p=o.createWebChannel(f,l);let _=!1,S=!1;const D=new CE({Io:C=>{S?V(Le,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(_||(V(Le,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),V(Le,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),k=(C,j,U)=>{C.listen(j,L=>{try{U(L)}catch(O){setTimeout(()=>{throw O},0)}})};return k(p,ei.EventType.OPEN,()=>{S||(V(Le,`RPC '${e}' stream ${i} transport opened.`),D.yo())}),k(p,ei.EventType.CLOSE,()=>{S||(S=!0,V(Le,`RPC '${e}' stream ${i} transport closed`),D.So())}),k(p,ei.EventType.ERROR,C=>{S||(S=!0,mi(Le,`RPC '${e}' stream ${i} transport errored:`,C),D.So(new x(P.UNAVAILABLE,"The operation could not be completed")))}),k(p,ei.EventType.MESSAGE,C=>{var j;if(!S){const U=C.data[0];q(!!U);const L=U,O=L.error||((j=L[0])===null||j===void 0?void 0:j.error);if(O){V(Le,`RPC '${e}' stream ${i} received error:`,O);const H=O.status;let Q=function(v){const I=Ie[v];if(I!==void 0)return Im(I)}(H),T=O.message;Q===void 0&&(Q=P.INTERNAL,T="Unknown error status: "+H+" with message "+O.message),S=!0,D.So(new x(Q,T)),p.close()}else V(Le,`RPC '${e}' stream ${i} received:`,U),D.bo(U)}}),k(c,Vf.STAT_EVENT,C=>{C.stat===Ua.PROXY?V(Le,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Ua.NOPROXY&&V(Le,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){return typeof window<"u"?window:null}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(r){return new FI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,n,i,s,o,c,l){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ve(t.toString()),ve("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new x(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kE extends ip{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=$I(this.serializer,e),n=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Ge(o.readTime):z.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Ya(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=zs(l)?{documents:Dm(s,l)}:{query:Cm(s,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=bm(s,o.resumeToken);const h=Qa(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(z.min())>0){c.readTime=dr(s,o.snapshotVersion.toTimestamp());const h=Qa(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=jI(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Ya(this.serializer),t.removeTarget=e,this.a_(t)}}class xE extends ip{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return q(!!e.streamToken),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=qI(e.writeResults,e.commitTime),n=Ge(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Ya(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ws(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ja(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(P.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Ja(t,n),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(P.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ME{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ve(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{xn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=B(l);h.L_.add(4),await $i(h),h.q_.set("Unknown"),h.L_.delete(4),await wo(h)}(this))})}),this.q_=new ME(n,i)}}async function wo(r){if(xn(r))for(const e of r.B_)await e(!0)}async function $i(r){for(const e of r.B_)await e(!1)}function bo(r,e){const t=B(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Jc(t)?Qc(t):Rr(t).r_()&&Wc(t,e))}function mr(r,e){const t=B(r),n=Rr(t);t.N_.delete(e),n.r_()&&sp(t,e),t.N_.size===0&&(n.r_()?n.o_():xn(t)&&t.q_.set("Unknown"))}function Wc(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rr(r).A_(e)}function sp(r,e){r.Q_.xe(e),Rr(r).R_(e)}function Qc(r){r.Q_=new NI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Rr(r).start(),r.q_.v_()}function Jc(r){return xn(r)&&!Rr(r).n_()&&r.N_.size>0}function xn(r){return B(r).L_.size===0}function op(r){r.Q_=void 0}async function LE(r){r.q_.set("Online")}async function FE(r){r.N_.forEach((e,t)=>{Wc(r,e)})}async function BE(r,e){op(r),Jc(r)?(r.q_.M_(e),Qc(r)):r.q_.set("Unknown")}async function UE(r,e,t){if(r.q_.set("Online"),e instanceof wm&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.N_.delete(c),i.Q_.removeTarget(c))}(r,e)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await no(r,n)}else if(e instanceof ks?r.Q_.Ke(e):e instanceof Em?r.Q_.He(e):r.Q_.We(e),!t.isEqual(z.min()))try{const n=await Ym(r.localStore);t.compareTo(n)>=0&&await function(s,o){const c=s.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=s.N_.get(l);if(!f)return;s.N_.set(l,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),sp(s,l);const p=new St(f.target,l,h,f.sequenceNumber);Wc(s,p)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await no(r,n)}}async function no(r,e,t){if(!rn(e))throw e;r.L_.add(1),await $i(r),r.q_.set("Offline"),t||(t=()=>Ym(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await wo(r)})}function ap(r,e){return e().catch(t=>no(r,t,e))}async function Sr(r){const e=B(r),t=tn(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;$E(e);)try{const i=await RE(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,qE(e,i)}catch(i){await no(e,i)}cp(e)&&lp(e)}function $E(r){return xn(r)&&r.O_.length<10}function qE(r,e){r.O_.push(e);const t=tn(r);t.r_()&&t.V_&&t.m_(e.mutations)}function cp(r){return xn(r)&&!tn(r).n_()&&r.O_.length>0}function lp(r){tn(r).start()}async function jE(r){tn(r).p_()}async function zE(r){const e=tn(r);for(const t of r.O_)e.m_(t.mutations)}async function GE(r,e,t){const n=r.O_.shift(),i=Fc.from(n,e,t);await ap(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Sr(r)}async function KE(r,e){e&&tn(r).V_&&await async function(n,i){if(function(o){return VI(o)&&o!==P.ABORTED}(i.code)){const s=n.O_.shift();tn(n).s_(),await ap(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sr(n)}}(r,e),cp(r)&&lp(r)}async function ed(r,e){const t=B(r);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=xn(t);t.L_.add(3),await $i(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await wo(t)}async function rc(r,e){const t=B(r);e?(t.L_.delete(2),await wo(t)):e||(t.L_.add(2),await $i(t),t.q_.set("Unknown"))}function Rr(r){return r.K_||(r.K_=function(t,n,i){const s=B(t);return s.w_(),new kE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:LE.bind(null,r),Ro:FE.bind(null,r),mo:BE.bind(null,r),d_:UE.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Jc(r)?Qc(r):r.q_.set("Unknown")):(await r.K_.stop(),op(r))})),r.K_}function tn(r){return r.U_||(r.U_=function(t,n,i){const s=B(t);return s.w_(),new xE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:jE.bind(null,r),mo:KE.bind(null,r),f_:zE.bind(null,r),g_:GE.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await Sr(r)):(await r.U_.stop(),r.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new Yc(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qi(r,e){if(ve("AsyncQueue",`${e}: ${r}`),rn(r))return new x(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=ti(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new er(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new er;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.W_=new he(M.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class pr{constructor(e,t,n,i,s,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new pr(e,t,er.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&po(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class WE{constructor(){this.queries=nd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=B(t),s=i.queries;i.queries=nd(),s.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new x(P.ABORTED,"Firestore shutting down"))}}function nd(){return new sn(r=>om(r),po)}async function Xc(r,e){const t=B(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new HE,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=qi(o,`Initialization of query '${Kn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&el(t)}async function Zc(r,e){const t=B(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function QE(r,e){const t=B(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.j_)c.X_(i)&&(n=!0);o.z_=i}}n&&el(t)}function JE(r,e,t){const n=B(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function el(r){r.Y_.forEach(e=>{e.next()})}var ic,rd;(rd=ic||(ic={})).ea="default",rd.Cache="cache";class tl{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new pr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ic.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.key=e}}class hp{constructor(e){this.key=e}}class dp{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=cm(e),this.Ra=new er(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new td,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const _=i.get(f),S=Fi(this.query,p)?p:null,D=!!_&&this.mutatedKeys.has(_.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;_&&S?_.data.isEqual(S.data)?D!==k&&(n.track({type:3,doc:S}),C=!0):this.ga(_,S)||(n.track({type:2,doc:S}),C=!0,(l&&this.Aa(S,l)>0||h&&this.Aa(S,h)<0)&&(c=!0)):!_&&S?(n.track({type:0,doc:S}),C=!0):_&&!S&&(n.track({type:1,doc:_}),C=!0,(l||h)&&(c=!0)),C&&(S?(o=o.add(S),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,D){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return k(S)-k(D)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),i=i!=null&&i;const c=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new pr(this.query,e.Ra,s,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new td,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new hp(n))}),this.da.forEach(n=>{e.has(n)||t.push(new up(n))}),t}ba(e){this.Ta=e.Ts,this.da=Z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return pr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class YE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class XE{constructor(e){this.key=e,this.va=!1}}class ZE{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new sn(c=>om(c),po),this.Ma=new Map,this.xa=new Set,this.Oa=new he(M.comparator),this.Na=new Map,this.La=new zc,this.Ba={},this.ka=new Map,this.qa=Cn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ew(r,e,t=!0){const n=Ao(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await fp(n,e,t,!0),i}async function tw(r,e){const t=Ao(r);await fp(t,e,!0,!1)}async function fp(r,e,t,n){const i=await Xs(r.localStore,Ze(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await nl(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&bo(r.remoteStore,i),c}async function nl(r,e,t,n,i){r.Ka=(p,_,S)=>async function(k,C,j,U){let L=C.view.ma(j);L.ns&&(L=await Zs(k.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,L)));const O=U&&U.targetChanges.get(C.targetId),H=U&&U.targetMismatches.get(C.targetId)!=null,Q=C.view.applyChanges(L,k.isPrimaryClient,O,H);return sc(k,C.targetId,Q.wa),Q.snapshot}(r,p,_,S);const s=await Zs(r.localStore,e,!0),o=new dp(e,s.Ts),c=o.ma(s.documents),l=Ui.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,l);sc(r,t,h.wa);const f=new YE(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function nw(r,e,t){const n=B(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(o=>!po(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await fr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&mr(n.remoteStore,i.targetId),gr(n,i.targetId)}).catch(nn)):(gr(n,i.targetId),await fr(n.localStore,i.targetId,!0))}async function rw(r,e){const t=B(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),mr(t.remoteStore,n.targetId))}async function iw(r,e,t){const n=ol(r);try{const i=await function(o,c){const l=B(o),h=K.now(),f=c.reduce((S,D)=>S.add(D.key),Z());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Xe(),k=Z();return l.cs.getEntries(S,f).next(C=>{D=C,D.forEach((j,U)=>{U.isValidDocument()||(k=k.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,D)).next(C=>{p=C;const j=[];for(const U of c){const L=DI(U,p.get(U.key).overlayedDocument);L!=null&&j.push(new kt(U.key,L,Jf(L.value.mapValue),je.exists(!0)))}return l.mutationQueue.addMutationBatch(S,h,j,c)}).next(C=>{_=C;const j=C.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(S,C.batchId,j)})}).then(()=>({batchId:_.batchId,changes:um(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new he(X)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,i.batchId,t),await on(n,i.changes),await Sr(n.remoteStore)}catch(i){const s=qi(i,"Failed to persist write");t.reject(s)}}async function mp(r,e){const t=B(r);try{const n=await AE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?q(o.va):i.removedDocuments.size>0&&(q(o.va),o.va=!1))}),await on(t,n,e)}catch(n){await nn(n)}}function id(r,e,t){const n=B(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,o)=>{const c=o.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=B(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(c)&&(h=!0)}),h&&el(l)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function sw(r,e,t){const n=B(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let o=new he(M.comparator);o=o.insert(s,_e.newNoDocument(s,z.min()));const c=Z().add(s),l=new Bi(z.min(),new Map,new he(X),o,c);await mp(n,l),n.Oa=n.Oa.remove(s),n.Na.delete(e),sl(n)}else await fr(n.localStore,e,!1).then(()=>gr(n,e,t)).catch(nn)}async function ow(r,e){const t=B(r),n=e.batch.batchId;try{const i=await bE(t.localStore,e);il(t,n,null),rl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await on(t,i)}catch(i){await nn(i)}}async function aw(r,e,t){const n=B(r);try{const i=await function(o,c){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(q(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);il(n,e,t),rl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await on(n,i)}catch(i){await nn(i)}}function rl(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function il(r,e,t){const n=B(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function gr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||pp(r,n)})}function pp(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(mr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),sl(r))}function sc(r,e,t){for(const n of t)n instanceof up?(r.La.addReference(n.key,e),cw(r,n)):n instanceof hp?(V("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||pp(r,n.key)):F()}function cw(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(V("SyncEngine","New document in limbo: "+t),r.xa.add(n),sl(r))}function sl(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new M(oe.fromString(e)),n=r.qa.next();r.Na.set(n,new XE(t)),r.Oa=r.Oa.insert(t,n),bo(r.remoteStore,new St(Ze(Li(t.path)),n,"TargetPurposeLimboResolution",He.oe))}}async function on(r,e,t){const n=B(r),i=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Kc.Wi(l.targetId,h);s.push(p)}}))}),await Promise.all(o),n.Ca.d_(i),await async function(l,h){const f=B(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>A.forEach(h,_=>A.forEach(_.$i,S=>f.persistence.referenceDelegate.addReference(p,_.targetId,S)).next(()=>A.forEach(_.Ui,S=>f.persistence.referenceDelegate.removeReference(p,_.targetId,S)))))}catch(p){if(!rn(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const S=f.os.get(_),D=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(_,k)}}}(n.localStore,s))}async function lw(r,e){const t=B(r);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const n=await Jm(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(c=>{c.forEach(l=>{l.reject(new x(P.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await on(t,n.hs)}}function uw(r,e){const t=B(r),n=t.Na.get(e);if(n&&n.va)return Z().add(n.key);{let i=Z();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const c=t.Fa.get(o);i=i.unionWith(c.view.Va)}return i}}async function hw(r,e){const t=B(r),n=await Zs(t.localStore,e.query,!0),i=e.view.ba(n);return t.isPrimaryClient&&sc(t,e.targetId,i.wa),i}async function dw(r,e){const t=B(r);return Zm(t.localStore,e).then(n=>on(t,n))}async function fw(r,e,t,n){const i=B(r),s=await function(c,l){const h=B(c),f=B(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(_=>_?h.localDocuments.getDocuments(p,_):A.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Sr(i.remoteStore):t==="acknowledged"||t==="rejected"?(il(i,e,n||null),rl(i,e),function(c,l){B(B(c).mutationQueue).On(l)}(i.localStore,e)):F(),await on(i,s)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function mw(r,e){const t=B(r);if(Ao(t),ol(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await sd(t,n.toArray());t.Qa=!0,await rc(t.remoteStore,!0);for(const s of i)bo(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const n=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(gr(t,o),fr(t.localStore,o,!0))),mr(t.remoteStore,o)}),await i,await sd(t,n),function(o){const c=B(o);c.Na.forEach((l,h)=>{mr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new he(M.comparator)}(t),t.Qa=!1,await rc(t.remoteStore,!1)}}async function sd(r,e,t){const n=B(r),i=[],s=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Xs(n.localStore,Ze(l[0]));for(const h of l){const f=n.Fa.get(h),p=await hw(n,f);p.snapshot&&s.push(p.snapshot)}}else{const h=await Xm(n.localStore,o);c=await Xs(n.localStore,h),await nl(n,gp(h),o,!1,c.resumeToken)}i.push(c)}return n.Ca.d_(s),i}function gp(r){return im(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function pw(r){return function(t){return B(B(t).persistence).Qi()}(B(r).localStore)}async function gw(r,e,t,n){const i=B(r);if(i.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Zm(i.localStore,am(s[0])),c=Bi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Te.EMPTY_BYTE_STRING);await on(i,o,c);break}case"rejected":await fr(i.localStore,e,!0),gr(i,e,n);break;default:F()}}async function yw(r,e,t){const n=Ao(r);if(n.Qa){for(const i of e){if(n.Ma.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){V("SyncEngine","Adding an already active target "+i);continue}const s=await Xm(n.localStore,i),o=await Xs(n.localStore,s);await nl(n,gp(s),o.targetId,!1,o.resumeToken),bo(n.remoteStore,o)}for(const i of t)n.Ma.has(i)&&await fr(n.localStore,i,!1).then(()=>{mr(n.remoteStore,i),gr(n,i)}).catch(nn)}}function Ao(r){const e=B(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=mp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sw.bind(null,e),e.Ca.d_=QE.bind(null,e.eventManager),e.Ca.$a=JE.bind(null,e.eventManager),e}function ol(r){const e=B(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ow.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aw.bind(null,e),e}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Qm(this.persistence,new Wm,e.initialUser,this.serializer)}Ga(e){return new Km(Io.Zr,this.serializer)}Wa(e){return new tp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class yp extends bi{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await ol(this.Ja.syncEngine),await Sr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Qm(this.persistence,new Wm,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new oE(n,e.asyncQueue,t)}Ha(e,t){const n=new BT(t,this.persistence);return new FT(e.asyncQueue,n)}Ga(e){const t=Hm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new Gc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,np(),xs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new tp}}class _w extends yp{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Ia&&(this.sharedClientState.syncEngine={no:fw.bind(null,t),ro:gw.bind(null,t),io:yw.bind(null,t),Qi:pw.bind(null,t),eo:dw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await mw(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=np();if(!Ia.D(t))throw new x(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Hm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ia(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ai{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>id(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=lw.bind(null,this.syncEngine),await rc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WE}()}createDatastore(e){const t=Eo(e.databaseInfo.databaseId),n=function(s){return new VE(s)}(e.databaseInfo);return function(s,o,c,l){return new NE(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,c){return new OE(n,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>id(this.syncEngine,t,0),function(){return Zh.D()?new Zh:new PE}())}createSyncEngine(e,t){return function(i,s,o,c,l,h,f){const p=new ZE(i,s,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=B(i);V("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await $i(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ai.provider={build:()=>new Ai};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ve("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=Nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=qi(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function wa(r,e){r.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Jm(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function od(r,e){r.asyncQueue.verifyOperationInProgress();const t=await _p(r);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>ed(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ed(e.remoteStore,i)),r._onlineComponents=e}async function _p(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await wa(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;mi("Error using user provided cache. Falling back to memory cache: "+t),await wa(r,new bi)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await wa(r,new bi);return r._offlineComponents}async function vp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await od(r,r._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await od(r,new Ai))),r._onlineComponents}function Tp(r){return _p(r).then(e=>e.localStore)}function Tw(r){return vp(r).then(e=>e.syncEngine)}async function ro(r){const e=await vp(r),t=e.eventManager;return t.onListen=ew.bind(null,e.syncEngine),t.onUnlisten=nw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rw.bind(null,e.syncEngine),t}function Iw(r,e){const t=new tt;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await function(h,f){const p=B(h);return p.persistence.runTransaction("read document","readonly",_=>p.localDocuments.getDocument(_,f))}(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new x(P.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const l=qi(c,`Failed to get document '${s} from cache`);o.reject(l)}}(await Tp(r),e,t)),t.promise}function Ip(r,e,t={}){const n=new tt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new al({next:_=>{f.Za(),o.enqueueAndForget(()=>Zc(s,p));const S=_.docs.has(c);!S&&_.fromCache?h.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&_.fromCache&&l&&l.source==="server"?h.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new tl(Li(c.path),f,{includeMetadataChanges:!0,_a:!0});return Xc(s,p)}(await ro(r),r.asyncQueue,e,t,n)),n.promise}function Ew(r,e){const t=new tt;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await Zs(i,s,!0),l=new dp(s,c.Ts),h=l.ma(c.documents),f=l.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const l=qi(c,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Tp(r),e,t)),t.promise}function ww(r,e,t={}){const n=new tt;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new al({next:_=>{f.Za(),o.enqueueAndForget(()=>Zc(s,p)),_.fromCache&&l.source==="server"?h.reject(new x(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new tl(c,f,{includeMetadataChanges:!0,_a:!0});return Xc(s,p)}(await ro(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(r,e,t){if(!t)throw new x(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function bw(r,e,t,n){if(e===!0&&n===!0)throw new x(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function cd(r){if(!M.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ld(r){if(M.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function So(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F()}function Qe(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=So(r);throw new x(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Aw(r,e){if(e<=0)throw new x(P.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ep((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cl{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ud({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ud(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PT;switch(n.type){case"firstParty":return new VT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ad.get(t);n&&(V("ComponentProvider","Removing Datastore"),ad.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new _t(this.firestore,e,this._query)}}class Ue{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class Yt extends _t{constructor(e,t,n){super(e,t,Li(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new M(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function Se(r,e,...t){if(r=we(r),wp("collection","path",e),r instanceof cl){const n=oe.fromString(e,...t);return ld(n),new Yt(r,null,n)}{if(!(r instanceof Ue||r instanceof Yt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(oe.fromString(e,...t));return ld(n),new Yt(r.firestore,null,n)}}function Nn(r,e,...t){if(r=we(r),arguments.length===1&&(e=Nf.newId()),wp("doc","path",e),r instanceof cl){const n=oe.fromString(e,...t);return cd(n),new Ue(r,null,new M(n))}{if(!(r instanceof Ue||r instanceof Yt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(oe.fromString(e,...t));return cd(n),new Ue(r.firestore,r instanceof Yt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rp(this,"async_queue_retry"),this.Vu=()=>{const n=xs();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=xs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=xs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!rn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw ve("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Yc.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function dd(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class Ct extends cl{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new hd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hd(e),this._firestoreClient=void 0,await e}}}function Sw(r,e,t){t||(t="(default)");const n=gc(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(hi(s,e))return i;throw new x(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new x(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function an(r){if(r._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Rw(r),r._firestoreClient}function Rw(r){var e,t,n;const i=r._freezeSettings(),s=function(c,l,h,f){return new oI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ep(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new vw(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(Te.fromBase64String(e))}catch(t){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yr(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=/^__.*__$/;class Dw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ar(e,this.data,t,this.fieldTransforms)}}class bp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ap(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class hl{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return io(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ap(this.Cu)&&Pw.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Cw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Eo(e)}Qu(e,t,n,i=!1){return new hl({Cu:e,methodName:t,qu:n,path:pe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sp(r){const e=r._freezeSettings(),t=Eo(r._databaseId);return new Cw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Vw(r,e,t,n,i,s={}){const o=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);fl("Data must be an object, but it was:",o,n);const c=Rp(n,o);let l,h;if(s.merge)l=new We(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const _=oc(e,p,t);if(!o.contains(_))throw new x(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Dp(f,_)||f.push(_)}l=new We(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new Dw(new Be(c),l,h)}class Do extends Po{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Do}}class dl extends Po{_toFieldTransform(e){return new ym(e.path,new lr)}isEqual(e){return e instanceof dl}}function kw(r,e,t,n){const i=r.Qu(1,e,t);fl("Data must be an object, but it was:",i,n);const s=[],o=Be.empty();kn(n,(l,h)=>{const f=ml(e,l,t);h=we(h);const p=i.Nu(f);if(h instanceof Do)s.push(f);else{const _=ji(h,p);_!=null&&(s.push(f),o.set(f,_))}});const c=new We(s);return new bp(o,c,i.fieldTransforms)}function xw(r,e,t,n,i,s){const o=r.Qu(1,e,t),c=[oc(e,n,t)],l=[i];if(s.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(oc(e,s[_])),l.push(s[_+1]);const h=[],f=Be.empty();for(let _=c.length-1;_>=0;--_)if(!Dp(h,c[_])){const S=c[_];let D=l[_];D=we(D);const k=o.Nu(S);if(D instanceof Do)h.push(S);else{const C=ji(D,k);C!=null&&(h.push(S),f.set(S,C))}}const p=new We(h);return new bp(f,p,o.fieldTransforms)}function Nw(r,e,t,n=!1){return ji(t,r.Qu(n?4:3,e))}function ji(r,e){if(Pp(r=we(r)))return fl("Unsupported field value:",e,r),Rp(r,e);if(r instanceof Po)return function(n,i){if(!Ap(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const c of n){let l=ji(c,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=we(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wI(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=K.fromDate(n);return{timestampValue:dr(i.serializer,s)}}if(n instanceof K){const s=new K(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:dr(i.serializer,s)}}if(n instanceof ll)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yr)return{bytesValue:bm(i.serializer,n._byteString)};if(n instanceof Ue){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$c(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ul)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Oc(c.serializer,l)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${So(n)}`)}(r,e)}function Rp(r,e){const t={};return Kf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kn(r,(n,i)=>{const s=ji(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Pp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof K||r instanceof ll||r instanceof yr||r instanceof Ue||r instanceof Po||r instanceof ul)}function fl(r,e,t){if(!Pp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=So(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function oc(r,e,t){if((e=we(e))instanceof Ro)return e._internalPath;if(typeof e=="string")return ml(r,e);throw io("Field path arguments must be of type string or ",r,!1,void 0,t)}const Mw=new RegExp("[~\\*/\\[\\]]");function ml(r,e,t){if(e.search(Mw)>=0)throw io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Ro(...e.split("."))._internalPath}catch{throw io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function io(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new x(P.INVALID_ARGUMENT,c+r+l)}function Dp(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ow(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Co("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ow extends Cp{data(){return super.data()}}function Co(r,e){return typeof e=="string"?ml(r,e):e instanceof Ro?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pl{}class gl extends pl{}function Ce(r,e,...t){let n=[];e instanceof pl&&n.push(e),n=n.concat(t),function(s){const o=s.filter(l=>l instanceof yl).length,c=s.filter(l=>l instanceof Vo).length;if(o>1||o>0&&c>0)throw new x(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Vo extends gl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Vo(e,t,n)}_apply(e){const t=this._parse(e);return kp(e._query,t),new _t(e.firestore,e.converter,Wa(e._query,t))}_parse(e){const t=Sp(e.firestore);return function(s,o,c,l,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){md(p,f);const S=[];for(const D of p)S.push(fd(l,s,D));_={arrayValue:{values:S}}}else _=fd(l,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||md(p,f),_=Nw(c,o,p,f==="in"||f==="not-in");return te.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function se(r,e,t){const n=e,i=Co("where",r);return Vo._create(i,n,t)}class yl extends pl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yl(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const l of c)kp(o,l),o=Wa(o,l)}(e._query,t),new _t(e.firestore,e.converter,Wa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _l extends gl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _l(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new x(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ei(s,o)}(e._query,this._field,this._direction);return new _t(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new br(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Ve(r,e="asc"){const t=e,n=Co("orderBy",r);return _l._create(n,t)}class vl extends gl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new vl(e,t,n)}_apply(e){return new _t(e.firestore,e.converter,Ks(e._query,this._limit,this._limitType))}}function Pr(r){return Aw("limit",r),vl._create("limit",r,"F")}function fd(r,e,t){if(typeof(t=we(t))=="string"){if(t==="")throw new x(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sm(e)&&t.indexOf("/")!==-1)throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(oe.fromString(t));if(!M.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ti(r,new M(n))}if(t instanceof Ue)return Ti(r,t._key);throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${So(t)}.`)}function md(r,e){if(!Array.isArray(r)||r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kp(r,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Lw{convertValue(e,t="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return kn(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>me(o.doubleValue));return new ul(s)}convertGeoPoint(e){return new ll(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=xc(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const t=Dt(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=oe.fromString(e);q(Nm(n));const i=new An(n.get(1),n.get(3)),s=new M(n.popFirst(5));return i.isEqual(t)||ve(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tl extends Cp{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Co("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ns extends Tl{data(e={}){return super.data(e)}}class Il{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Jn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ns(this._firestore,this._userDataWriter,n.key,n,new Jn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const l=new Ns(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new Ns(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Bw(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Bw(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(r){r=Qe(r,Ue);const e=Qe(r.firestore,Ct);return Ip(an(e),r._key).then(t=>wl(e,r,t))}class zi extends Lw{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function Uw(r){r=Qe(r,Ue);const e=Qe(r.firestore,Ct),t=an(e),n=new zi(e);return Iw(t,r._key).then(i=>new Tl(e,n,r._key,i,new Jn(i!==null&&i.hasLocalMutations,!0),r.converter))}function $w(r){r=Qe(r,Ue);const e=Qe(r.firestore,Ct);return Ip(an(e),r._key,{source:"server"}).then(t=>wl(e,r,t))}function Si(r){r=Qe(r,_t);const e=Qe(r.firestore,Ct),t=an(e),n=new zi(e);return Vp(r._query),ww(t,r._query).then(i=>new Il(e,n,r,i))}function El(r){r=Qe(r,_t);const e=Qe(r.firestore,Ct),t=an(e),n=new zi(e);return Ew(t,r._query).then(i=>new Il(e,n,r,i))}function qw(r,...e){var t,n,i;r=we(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dd(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(dd(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,h,f;if(r instanceof Ue)h=Qe(r.firestore,Ct),f=Li(r._key.path),l={next:p=>{e[o]&&e[o](wl(h,r,p))},error:e[o+1],complete:e[o+2]};else{const p=Qe(r,_t);h=Qe(p.firestore,Ct),f=p._query;const _=new zi(h);l={next:S=>{e[o]&&e[o](new Il(h,_,p,S))},error:e[o+1],complete:e[o+2]},Vp(r._query)}return function(_,S,D,k){const C=new al(k),j=new tl(S,C,D);return _.asyncQueue.enqueueAndForget(async()=>Xc(await ro(_),j)),()=>{C.Za(),_.asyncQueue.enqueueAndForget(async()=>Zc(await ro(_),j))}}(an(h),f,c,l)}function jw(r,e){return function(n,i){const s=new tt;return n.asyncQueue.enqueueAndForget(async()=>iw(await Tw(n),i,s)),s.promise}(an(r),e)}function wl(r,e,t){const n=t.docs.get(e._key),i=new zi(r);return new Tl(r,i,e._key,n,new Jn(t.hasPendingWrites,t.fromCache),e.converter)}class zw{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Ww(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Gw(r){return new zw(r)}class Kw{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ai.provider,this._offlineComponentProvider={build:t=>new yp(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class Hw{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ai.provider,this._offlineComponentProvider={build:t=>new _w(t,e==null?void 0:e.cacheSizeBytes)}}}function Ww(r){return new Kw(void 0)}function Qw(){return new Hw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Sp(e)}set(e,t,n){this._verifyNotCommitted();const i=ba(e,this._firestore),s=Fw(i.converter,t,n),o=Vw(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,je.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=ba(e,this._firestore);let o;return o=typeof(t=we(t))=="string"||t instanceof Ro?xw(this._dataReader,"WriteBatch.update",s._key,t,n,i):kw(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,je.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ba(e,this._firestore);return this._mutations=this._mutations.concat(new _o(t._key,je.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ba(r,e){if((r=we(r)).firestore!==e)throw new x(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function Yw(){return new dl("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(r){return an(r=Qe(r,Ct)),new Jw(r,e=>jw(r,e))}(function(e,t=!0){(function(i){wr=i})(Ir),rr(new En("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new Ct(new DT(n.getProvider("auth-internal")),new xT(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Wt(oh,"4.7.3",e),Wt(oh,"4.7.3","esm2017")})();var Xw="firebase",Zw="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(Xw,Zw,"app");var eb={title:"Baby Tracker",footer:"© 2026 James Park",firebase:{apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},birthDate:"2025-11-05",timeZone:"America/New_York",defaultUnit:"oz",features:{breastMilk:{state:"archived"},formula:{state:"on",brands:["Bobbie"],pastBrands:["Enfamil"]},solids:{state:"on"},sleep:{state:"on",dayStartHour:7,nightStartHour:19},pumping:{state:"archived",intervalHours:4},vitaminD:{state:"archived",startDate:"2025-11-11"},nextFeeds:{enabled:!1,intervalHours:3},timeZoneSwitcher:{enabled:!0,zones:[{label:"EST",zone:"America/New_York"},{label:"PST",zone:"America/Los_Angeles"}]}}};const ft=eb,re=ft.features;function _r(r){return r!=="off"}function mt(r){return r==="on"}function at(r,e){return r==="on"||r==="archived"&&e>0}function tb(){return mt(re.breastMilk.state)||mt(re.formula.state)}function so(){return _r(re.breastMilk.state)||_r(re.formula.state)}function Np(r){const[e,t,n]=r.split("-").map(Number);return new Date(e,t-1,n)}function xo(){return Np(ft.birthDate)}function nb(){return Np(re.vitaminD.startDate)}function Mp(r){const e=r>=12?"pm":"am";return`${r%12||12}${e}`}function ac(r){return`${String(r).padStart(2,"0")}:00`}const No=Mp(re.sleep.dayStartHour),Mo=Mp(re.sleep.nightStartHour),Op=zd(ft.firebase),Ri=AT(Op),le=Sw(Op,{localCache:Gw({tabManager:Qw()})});function nt(r,e){return e==="cache"?El(r):Si(r)}function Oo(r,e){return e==="cache"?El(r).catch(()=>Si(r)):Si(r)}const bl=Nn(le,"meta","lastChange"),Lp=Math.random().toString(36).slice(2);function Lo(r){r.set(bl,{at:Yw(),by:Lp,nonce:Math.random().toString(36).slice(2)})}async function rb(){const r=$w(bl).then(()=>!0,t=>(t==null?void 0:t.code)!=="permission-denied"),e=new Promise(t=>setTimeout(()=>t(!0),4e3));return Promise.race([r,e])}function Fp(r){const e=document.getElementById("signin-error");e.textContent=r,e.style.display="block"}function pd(r){console.error("Sign-in failed:",r),Fp((r==null?void 0:r.code)==="auth/unauthorized-domain"?`Sign-in isn't set up for ${window.location.hostname} yet. In the Firebase console, add it under Authentication > Settings > Authorized domains.`:`Sign-in failed (${(r==null?void 0:r.code)??"unknown error"}). Please try again.`)}async function ib(){const r=new Et;r.setCustomParameters({prompt:"select_account"});try{await xv(Ri,r)}catch(e){(e==null?void 0:e.code)==="auth/popup-blocked"?await Bv(Ri,r).catch(pd):(e==null?void 0:e.code)!=="auth/popup-closed-by-user"&&(e==null?void 0:e.code)!=="auth/cancelled-popup-request"&&pd(e)}}async function sb(){await pf(Ri),window.location.reload()}const cc="signinDenied";function ob(){const r=sessionStorage.getItem(cc);r&&(sessionStorage.removeItem(cc),Fp(`${r} doesn't have access. Sign in with an account on the list, or ask the person who set this up to add yours.`))}function ab(r){var i;const e=document.getElementById("signin-screen"),t=document.getElementById("app");let n=!1;(i=document.getElementById("signin-button"))==null||i.addEventListener("click",ib),fv(Ri,async s=>{if(s&&await rb()){e.style.display="none",t.style.display="block",n||(n=!0,r());return}if(s&&(sessionStorage.setItem(cc,s.email??"This account"),await pf(Ri)),n){window.location.reload();return}t.style.display="none",e.style.display="flex",ob()})}const Bp="selectedTimezone";function Al(){const r=re.timeZoneSwitcher,e=localStorage.getItem(Bp);return e&&r.zones.some(t=>t.zone===e)?e:ft.timeZone}function cb(r){localStorage.setItem(Bp,r)}const _s=new Map;function yt(r,e){const t=Al(),n=`${t}|${r.getTime()}`,i=_s.get(n);if(i!==void 0)return new Date(i);const s=new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(r),o=h=>{var f;return parseInt(((f=s.find(p=>p.type===h))==null?void 0:f.value)||"0",10)};let c=o("hour");c===24&&(c=0);const l=new Date(o("year"),o("month")-1,o("day"),c,o("minute"),o("second"));return _s.size>5e3&&_s.clear(),_s.set(n,l.getTime()),l}function rt(r){return yt(new Date)}function ke(r){const[e,t]=r.split("T"),[n,i,s]=e.split("-").map(Number),[o,c]=t.split(":").map(Number),l=Al(),h=new Date(Date.UTC(n,i-1,s,o,c)),f=new Intl.DateTimeFormat("en-US",{timeZone:l,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(h),p=C=>{var j;return parseInt(((j=f.find(U=>U.type===C))==null?void 0:j.value)||"0",10)};let _=p("hour");_===24&&(_=0);const S=new Date(p("year"),p("month")-1,p("day"),_,p("minute")),D=new Date(n,i-1,s,o,c),k=S.getTime()-D.getTime();return new Date(h.getTime()-k)}function Pi(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function vr(r){const e=new Date(r),t=e.getDay(),n=e.getDate()-t;return e.setDate(n),e.setHours(0,0,0,0),e}function lb(r){const e=new Date(r);return e.setDate(e.getDate()+6),e.setHours(23,59,59,999),e}function Tr(r){const e=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,"0"),n=String(r.getDate()).padStart(2,"0"),i=String(r.getHours()).padStart(2,"0"),s=String(r.getMinutes()).padStart(2,"0");return`${e}-${t}-${n}T${i}:${s}`}function Ye(r){const e=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,"0"),n=String(r.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}function Sl(r){const e=yt(r),t=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),i=e.getFullYear(),s=e.getHours(),o=String(e.getMinutes()).padStart(2,"0"),c=s>=12?"PM":"AM",l=s%12||12;return`${t}/${n}/${i} ${l}:${o} ${c}`}function lc(r){const e=yt(r),t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),s=e.getFullYear();return`${t[e.getDay()]}, ${n}/${i}/${s}`}function Up(r){return Pi(yt(r))}function gd(r){const e=yt(r),t=e.getHours(),n=String(e.getMinutes()).padStart(2,"0"),i=t>=12?"pm":"am";return`${t%12||12}:${n} ${i}`}function $p(){const r=rt();return r.setDate(r.getDate()+1),r.setHours(0,0,0,0),ke(Tr(r)).getTime()-Date.now()}function Rl(r,e,t){let n=0;for(const i of r){if(!i.endTime)continue;const s=Math.max(i.startTime.getTime(),e.getTime()),o=Math.min(i.endTime.getTime(),t.getTime());o>s&&(n+=o-s)}return n}function Pl(r){const e=new Date(r);e.setHours(0,0,0,0);const t=new Date(e);t.setDate(t.getDate()-1);const n=ke(`${Pi(t)}T${ac(re.sleep.nightStartHour)}`),i=new Date(e);i.setDate(i.getDate()+1);const s=ke(`${Pi(i)}T${ac(re.sleep.dayStartHour)}`);return{start:n,end:s}}function ub(r){const e=Math.floor(r/36e5),t=Math.floor(r%(1e3*60*60)/(1e3*60));return`${e}h ${t}m`}function Di(r,e){return r?qp(Date.now()-new Date(r).getTime()):e}function qp(r){const e=Math.floor(r/36e5),t=Math.floor(r%(1e3*60*60)/(1e3*60)),n=Math.floor(r%(1e3*60)/1e3);return e>0?`${e}h ${t}m ${n}s`:t>0?`${t}m ${n}s`:`${n}s`}const Vn="Other",Fo=re.formula.brands,hb=[...Fo,...re.formula.pastBrands],jp=Fo[0]??Vn;function Dl(r){return hb.includes(r)}function Ms(r,e,t,n=null){const i=document.createElement("option");return i.value=e,i.textContent=t,r.insertBefore(i,n),i}function yd(r,e){r.replaceChildren(),e&&Ms(r,"","Select type..."),Fo.forEach(t=>Ms(r,t,t)),Ms(r,Vn,Vn)}function _d(r,e){r.querySelectorAll("option[data-past-brand]").forEach(t=>t.remove()),re.formula.pastBrands.includes(e)&&!Fo.includes(e)&&(Ms(r,e,e,r.querySelector(`option[value="${Vn}"]`)).dataset.pastBrand="")}function db(r){if(r.formulaType)return r.formulaType;const e=(r.notes||"").split(`
`)[0];return Dl(e)?e:""}function fb(r){const e=r.value.split(`
`);e.length>0&&Dl(e[0])&&(e.splice(0,1),r.value=e.join(`
`))}function mb(r){const{select:e,notes:t,indicator:n,typeText:i}=r,s=e.value,o=t.value,c=o.split(`
`),l=c.length>0&&Dl(c[0]);s===Vn?(l&&(c.splice(0,1),t.value=c.join(`
`)),i.textContent=Vn,n.style.display="block"):s?(l?(c[0]=s,t.value=c.join(`
`)):o.trim()?t.value=`${s}
${o}`:t.value=s+`
`,i.textContent=s,n.style.display="block"):n.style.display="none"}function pb(r){const{select:e,notes:t}=r,n=()=>{const i=e.value;return r.active()&&i&&i!==Vn?i:null};t.addEventListener("input",()=>{const i=n();if(!i)return;const s=t.value,o=s.split(`
`);(o.length===0||o[0]!==i&&o[0]!=="")&&(o.length===0?t.value=i+`
`:o[0]!==i&&(o[0]=i,t.value=o.join(`
`))),s===i&&(t.value=i+`
`)}),t.addEventListener("keydown",i=>{const s=n();if(!s)return;const o=t.selectionStart,c=s.length;if(o<=c){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(i.key)||i.key==="a"&&(i.ctrlKey||i.metaKey))return;if(i.key==="Backspace"||i.key==="Delete"){i.preventDefault();return}if(i.key.length===1||i.key==="Enter"){i.preventDefault();const l=t.value.substring(0,c+1),h=t.value.substring(c+1);t.value=l+(i.key==="Enter"?`
`:i.key)+h,t.selectionStart=c+2,t.selectionEnd=c+2}}}),t.addEventListener("paste",i=>{const s=n();s&&t.selectionStart<=s.length&&i.preventDefault()})}function vd(r){const e=document.getElementById(r.container),t={select:document.getElementById(r.select),notes:document.getElementById(r.notes),indicator:document.getElementById(r.indicator),typeText:document.getElementById(r.typeText),active:()=>e.style.display!=="none"};t.select.addEventListener("change",()=>mb(t)),pb(t)}function Xt(r,e){return e==="ml"?r*.033814:r}function gb(r,e){return e==="oz"?r*29.5735:r}function ht(r,e){const t=Xt(r,e),n=gb(r,e);return`${t.toFixed(1)} oz / ${n.toFixed(0)} ml`}const zp=[["bottle-amount","bottle-unit"],["pump-amount","pump-unit"],["edit-bottle-amount","edit-bottle-unit"],["edit-pump-amount","edit-pump-unit"]];function yb(){zp.forEach(([r])=>{const e=document.getElementById(r);e&&(e.addEventListener("keypress",t=>{const n=t.key,i=e.value;t.key==="Backspace"||t.key==="Delete"||t.key==="Tab"||t.key==="Escape"||t.key==="Enter"||t.ctrlKey||t.metaKey||n>="0"&&n<="9"||n==="."&&i.indexOf(".")===-1||t.preventDefault()}),e.addEventListener("paste",t=>{var c;t.preventDefault();const i=(((c=t.clipboardData)==null?void 0:c.getData("text"))||"").replace(/[^0-9.]/g,""),s=i.split("."),o=s.length>2?s[0]+"."+s.slice(1).join(""):i;document.execCommand("insertText",!1,o)}))})}function _b(){zp.forEach(([r,e])=>{const t=document.getElementById(r),n=document.getElementById(e);t&&n&&n.addEventListener("change",()=>vb(t,n.value))})}function vb(r,e){const t=r.dataset.lastUnit||"oz",n=parseFloat(r.value);if(isNaN(n)||n<=0){r.dataset.lastUnit=e;return}if(t===e)return;let i;if(e==="ml"&&t==="oz")i=n*29.5735;else if(e==="oz"&&t==="ml")i=n*.033814;else return;r.value=i.toFixed(2),r.dataset.lastUnit=e}let Os=null,Wr=0,Td="",Qr=null;function Id(r){return new Promise((e,t)=>{const n=document.createElement("script");n.src=r,n.async=!0,n.onload=()=>e(),n.onerror=()=>t(new Error("Failed to load "+r)),document.head.appendChild(n)})}function Gp(){return Qr||(Qr=(async()=>{await Id("https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"),await Id("https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.0.1/dist/chartjs-plugin-zoom.min.js");const r=window.Chart;r&&(r.defaults.color="#cccccc",r.defaults.borderColor="rgba(255, 255, 255, 0.12)")})().catch(r=>{throw Qr=null,r}),Qr)}function Tb(){document.getElementById("graph-start-date").value=Ye(xo()),document.getElementById("graph-end-date").value=Ye(rt())}const Kp=`Sleep (hrs, ${Mo}-${No})`,vs={"bottle-breast-milk":{label:"Bottle - Breast Milk",color:"#4CAF50"},"bottle-formula":{label:"Bottle - Formula",color:"#2196F3"},"bottle-all":{label:"Bottle - All",color:"#9C27B0"},"diaper-pee":{label:"Diaper - Pee",color:"#FFEB3B"},"diaper-poo":{label:"Diaper - Poo",color:"#795548"},"diaper-mixed":{label:"Diaper - Mixed",color:"#FF9800"},"diaper-all":{label:"Diaper - All",color:"#607D8B"},pump:{label:"Pump",color:"#E91E63"},sleep:{label:Kp,color:"#00897B"}};function Ib(){var t;const r=(t=document.querySelector('.graph-checkbox[data-series="sleep"]'))==null?void 0:t.parentElement,e=r?Array.from(r.childNodes).find(n=>{var i;return n.nodeType===Node.TEXT_NODE&&((i=n.textContent)==null?void 0:i.trim())}):null;e&&(e.textContent=` ${Kp}`)}function Hp(){return Array.from(document.querySelectorAll(".graph-checkbox:checked")).map(r=>r.dataset.series)}async function Eb(){const r=document.getElementById("graph-start-date").value,e=document.getElementById("graph-end-date").value;if(!r||!e){alert("Please select both start and end dates");return}if(Hp().length===0){alert("Please select at least one data series to plot");return}await Gp();try{await uc("cache")}catch{}await uc("server")}function wb(){Os&&uc("server").catch(r=>console.error("Error refreshing graph:",r))}function Ed(r,e){return Ce(Se(le,"entries"),se("type","==","Sleep"),se("startTime",">=",K.fromDate(ke(`${r}T00:00`))),se("startTime","<",K.fromDate(ke(`${e}T00:00`))),Ve("startTime","asc"))}function wd(r,e){r.forEach(t=>{const n=t.data();e.push({startTime:n.startTime.toDate(),endTime:n.endTime?n.endTime.toDate():null})})}async function uc(r){const e=++Wr,t=document.getElementById("graph-start-date").value,n=document.getElementById("graph-end-date").value;if(!t||!n)return;const i=Hp();if(i.length===0)return;const s=ke(`${t}T00:00`),o=ke(`${n}T23:59`);o.setSeconds(59,999);const c=await nt(Ce(Se(le,"entries"),se("startTime",">=",K.fromDate(s)),se("startTime","<=",K.fromDate(o)),Ve("startTime","asc")),r);if(e!==Wr||r==="cache"&&c.empty)return;const[l,h,f]=t.split("-").map(Number),[p,_,S]=n.split("-").map(Number),D=Ye(new Date(l,h-1,f-1)),k=Ye(new Date(p,_-1,S+1)),C=Ye(new Date(p,_-1,S+2)),j=await nt(Ed(D,t),r);if(e!==Wr)return;const U=await nt(Ed(k,C),r);if(e!==Wr)return;const L={},O=new Date(l,h-1,f),H=new Date(p,_-1,S);for(;O<=H;)L[Ye(O)]=Object.fromEntries(Object.keys(vs).map(E=>[E,0])),O.setDate(O.getDate()+1);const Q=[];if(c.forEach(E=>{const g=E.data(),$=L[Ye(yt(g.startTime.toDate()))];if($)if(g.type==="Feed"&&g.subType==="Breast Milk"){const W=Xt(g.amount,g.unit);$["bottle-breast-milk"]+=W,$["bottle-all"]+=W}else if(g.type==="Feed"&&g.subType==="Formula"){const W=Xt(g.amount,g.unit);$["bottle-formula"]+=W,$["bottle-all"]+=W}else g.type==="Diaper"?((g.diaperType==="Pee"||g.diaperType==="Mixed")&&$["diaper-pee"]++,(g.diaperType==="Poo"||g.diaperType==="Mixed")&&$["diaper-poo"]++,g.diaperType==="Mixed"&&$["diaper-mixed"]++,$["diaper-all"]++):g.type==="Pump"&&($.pump+=Xt(g.amount,g.unit));g.type==="Sleep"&&Q.push({startTime:g.startTime.toDate(),endTime:g.endTime?g.endTime.toDate():null})}),wd(j,Q),wd(U,Q),i.includes("sleep"))for(const E of Object.keys(L)){const[g,$,W]=E.split("-").map(Number),Re=Pl(new Date(g,$-1,W)),fe=Rl(Q,Re.start,Re.end);L[E].sleep=parseFloat((fe/(1e3*60*60)).toFixed(1))}const T=Object.keys(L).sort(),y=i.map(E=>({label:vs[E].label,data:T.map(g=>L[g][E]),borderColor:vs[E].color,backgroundColor:vs[E].color+"33",tension:.1,fill:!1}));if(e!==Wr)return;const v=document.querySelector(".chart-container"),I=JSON.stringify({labels:T,data:y.map(E=>E.data)});if(r==="server"&&I===Td){v==null||v.classList.add("active");return}Td=I;const w=document.getElementById("data-chart").getContext("2d");Os&&Os.destroy(),Os=new window.Chart(w,{type:"line",data:{labels:T.map(E=>{const[,g,$]=E.split("-");return`${g}/${$}`}),datasets:y},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:`${ft.title} Data`},tooltip:{enabled:!0,callbacks:{label:function(E){let g=E.dataset.label||"";g&&(g+=": ");const $=E.parsed.y,W=E.dataset.label.toLowerCase();return W.includes("diaper")?g+=Math.round($):W.includes("sleep")?g+=$.toFixed(1)+" hrs":g+=$.toFixed(1)+" oz",g}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(E){return i.every($=>$.startsWith("diaper-"))?Math.round(E):E%1===0?E:E.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count / Hours"}}}}}),v==null||v.classList.add("active")}function bb(r){switch(r){case"breastMilk":return re.breastMilk.state;case"formula":return re.formula.state;case"solids":return re.solids.state;case"sleep":return re.sleep.state;case"pumping":return re.pumping.state;case"vitaminD":return re.vitaminD.state;case"timeZoneSwitcher":return"on"}throw new Error(`Unknown feature "${r}" in index.html`)}function Ab(){document.querySelectorAll("[data-feature]").forEach(r=>{const e=r.dataset.when==="on";r.dataset.feature.split(" ").some(n=>{const i=bb(n);return e?mt(i):_r(i)})||r.remove()})}function Ts(r,e){document.querySelectorAll(r).forEach(t=>t.textContent=e)}function Sb(){const r=document.getElementById("timezone-select");r&&(r.replaceChildren(...re.timeZoneSwitcher.zones.map(e=>{const t=document.createElement("option");return t.value=e.zone,t.textContent=e.label,t})),r.value=Al())}function Rb(){document.title=ft.title,Ts(".app-title",ft.title),Ts(".footer-text",ft.footer),Ts(".day-start-label",No),Ts(".night-start-label",Mo),Ab(),Sb(),yd(document.getElementById("bottle-type"),!1),yd(document.getElementById("edit-bottle-type"),!0),Ib()}let tr=null,Aa=null;const Sa={};async function Cl(r,e,t){const n=Ce(Se(le,"entries"),se("type","==",r),Ve("startTime","desc"),Pr(1)),i=await Oo(n,t);i.empty?localStorage.removeItem(e):localStorage.setItem(e,i.docs[0].data().startTime.toDate().toISOString())}async function Wp(r="server"){try{await Cl("Feed","lastBottleTime",r),Zp()}catch(e){console.error("Error fetching last bottle time:",e)}}async function Qp(r="server"){try{await Cl("Solids","lastSolidsTime",r),nr("last-solids-value","lastSolidsTime","No solids recorded")}catch(e){console.error("Error fetching last solids time:",e)}}async function Jp(r="server"){try{await Cl("Pump","lastPumpTime",r),eg()}catch(e){console.error("Error fetching last pump time:",e)}}async function Yp(r="server"){try{const e=Ce(Se(le,"entries"),se("type","==","Diaper"),Ve("startTime","desc"),Pr(30)),t=await Oo(e,r);let n,i;t.forEach(s=>{const o=s.data(),c=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&n===void 0&&(n=c),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&i===void 0&&(i=c)}),n!==void 0?localStorage.setItem("lastPeeTime",n.toISOString()):localStorage.removeItem("lastPeeTime"),i!==void 0?localStorage.setItem("lastPooTime",i.toISOString()):localStorage.removeItem("lastPooTime"),nr("last-pee-value","lastPeeTime","No pee recorded"),nr("last-poo-value","lastPooTime","No poo recorded")}catch(e){console.error("Error fetching last diaper times:",e)}}async function Xp(r="server"){try{const e=Ce(Se(le,"entries"),se("type","==","Sleep"),Ve("startTime","desc"),Pr(1)),t=await Oo(e,r);if(t.empty)localStorage.removeItem("lastSleepEndTime"),localStorage.removeItem("sleepInProgressStart");else{const n=t.docs[0].data();n.endTime?(localStorage.setItem("lastSleepEndTime",n.endTime.toDate().toISOString()),localStorage.removeItem("sleepInProgressStart")):(localStorage.removeItem("lastSleepEndTime"),localStorage.setItem("sleepInProgressStart",n.startTime.toDate().toISOString()))}tg()}catch(e){console.error("Error fetching last sleep end time:",e)}}async function Vl(r="server"){try{const e=rt(),t=new Date(e);t.setHours(re.sleep.dayStartHour,0,0,0);const n=ke(Tr(t)),i=Ce(Se(le,"entries"),se("type","==","Sleep"),se("startTime",">=",K.fromDate(n)),Ve("startTime","asc")),s=await Oo(i,r);let o=0,c=null;s.forEach(l=>{const h=l.data(),f=h.startTime.toDate();f>=n&&yt(f).toDateString()===e.toDateString()&&(h.endTime?o+=h.endTime.toDate().getTime()-f.getTime():c=f.toISOString())}),localStorage.setItem("napTimeCompletedMs",String(o)),c?localStorage.setItem("napTimeInProgressStart",c):localStorage.removeItem("napTimeInProgressStart"),ng()}catch(e){console.error("Error fetching nap time:",e)}}function nr(r,e,t){const n=document.getElementById(r);n&&(n.textContent=Di(localStorage.getItem(e),t))}function Pb(r,e,t,n,i){let s=r.querySelector(".elapsed-time"),o=r.querySelector(".elapsed-next");(!s||!o)&&(r.textContent="",s=document.createElement("span"),s.className="elapsed-time",o=document.createElement("span"),o.className="elapsed-next",o.style.fontSize="12px",o.style.color="#aaa",r.append(s,document.createElement("br"),o),delete Sa[r.id]),s.textContent=Di(e,t);const c=new Date(e),l=new Date,h=i*60*60*1e3,f=l.getTime()-c.getTime()>h,p=f?`>|${Math.floor(l.getTime()/6e4)}`:`<=|${e}`;if(p===Sa[r.id])return;Sa[r.id]=p;const _=[];if(f){_.push("in the next minute");for(let D=1;D<=2;D++)_.push(gd(new Date(l.getTime()+D*h)))}else for(let D=1;D<=3;D++)_.push(gd(new Date(c.getTime()+D*h)));const S=_.map((D,k)=>`+ ${(k+1)*i} hours: ${D}`).join("<br>");o.innerHTML=`${n}:<br>${S}`}function Zp(){const r=document.getElementById("last-bottle-value");if(!r)return;const e=localStorage.getItem("lastBottleTime");{r.textContent=Di(e,"No bottles recorded");return}}function eg(){const r=document.getElementById("last-pump-value");if(!r)return;const e=localStorage.getItem("lastPumpTime");if(!e){r.textContent="No pumps recorded";return}Pb(r,e,"No pumps recorded","Next pumps",re.pumping.intervalHours)}function tg(){const r=document.getElementById("time-awake-value"),e=document.getElementById("time-awake-label");if(!r)return;const t=localStorage.getItem("sleepInProgressStart");if(t){e&&(e.textContent="Time Asleep"),r.textContent=Di(t,"No sleep recorded");return}e&&(e.textContent="Time Awake"),r.textContent=Di(localStorage.getItem("lastSleepEndTime"),"No sleep recorded")}function ng(){const r=document.getElementById("nap-time-value");if(!r)return;let e=parseInt(localStorage.getItem("napTimeCompletedMs")||"0",10);const t=localStorage.getItem("napTimeInProgressStart");t&&(e+=Date.now()-new Date(t).getTime()),r.textContent=e<=0?"0m":qp(e)}function bd(){Zp(),nr("last-solids-value","lastSolidsTime","No solids recorded"),nr("last-pee-value","lastPeeTime","No pee recorded"),nr("last-poo-value","lastPooTime","No poo recorded"),eg(),tg(),ng()}function rg(){tr&&clearInterval(tr),bd(),tr=window.setInterval(bd,1e3)}function Db(){tr&&(clearInterval(tr),tr=null)}async function Bo(){const r=[Yp()];tb()&&r.push(Wp()),mt(re.solids.state)&&r.push(Qp()),mt(re.pumping.state)&&r.push(Jp()),mt(re.sleep.state)&&r.push(Xp(),Vl()),await Promise.all(r)}async function Cb(){await Bo(),rg()}function ig(){mt(re.sleep.state)&&(Aa&&clearTimeout(Aa),Aa=window.setTimeout(()=>{Vl(),ig()},$p()))}let Ra=null;function hc(r){return r?"Vitamin D drop given":"Record Vitamin D drop"}async function Gi(){if(!mt(re.vitaminD.state))return;const r=document.getElementById("vitamin-d-checkbox"),e=document.getElementById("vitamin-d-status"),t=document.getElementById("vitamin-d-label-text");try{const n=await xp(Nn(le,"vitaminD",Up(new Date)));r.checked=n.exists()&&n.data().given===!0,t.textContent=hc(r.checked),e.textContent="",e.style.display="none"}catch(n){console.error("Error loading vitamin D status:",n),e.className="error",e.textContent="Failed to load vitamin D status",e.style.display="block"}}async function Vb(r){const e=r.target,t=document.getElementById("vitamin-d-status"),n=document.getElementById("vitamin-d-label-text"),i=new Date;try{const s=ko(le);s.set(Nn(le,"vitaminD",Up(i)),{given:e.checked,date:K.fromDate(i)}),Lo(s),await s.commit(),n.textContent=hc(e.checked),t.style.display="none"}catch(s){console.error("Error saving vitamin D status:",s),t.className="error",t.textContent="Failed to save vitamin D status",t.style.display="block",e.checked=!e.checked,n.textContent=hc(e.checked)}}function sg(){Ra&&clearTimeout(Ra),Ra=window.setTimeout(()=>{Gi(),sg()},$p())}function kb(){var r;mt(re.vitaminD.state)&&((r=document.getElementById("vitamin-d-checkbox"))==null||r.addEventListener("change",Vb),Gi(),sg())}function xb(r,e){return e==="server"?xp(r):Uw(r).catch(()=>({exists:()=>!1,data:()=>{}}))}async function Nb(r,e){const t=await Promise.all(r.map(i=>xb(Nn(le,"vitaminD",i),e))),n={};return r.forEach((i,s)=>{var o;n[i]=t[s].exists()&&((o=t[s].data())==null?void 0:o.given)===!0}),n}const Pa=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let st=vr(new Date),Is=0;async function Mn(){try{await Ad("cache")}catch{}await Ad("server")}function Da(r,e){const t=[];return r.forEach(n=>{const i=n.data();(!e||i.type==="Sleep")&&t.push({startTime:i.startTime.toDate(),endTime:i.endTime?i.endTime.toDate():null})}),t}function Mb(r){return r===null||!r&&!mt(re.vitaminD.state)?"":`
                <div class="stat-group">
                    <div class="stat-group-title">Vitamin D</div>
                    <div class="stat-line" style="color: ${r?"#4caf50":"#f44336"}; font-weight: bold;">${r?"Yes":"No"}</div>
                </div>`}function Ob(r){const e=re,t=Pa[r.date.getDay()],n=`${r.date.getMonth()+1}/${r.date.getDate()}`,i=r.diapers.pee+r.diapers.mixed,s=r.diapers.poo+r.diapers.mixed,o=[];(so()||_r(e.solids.state))&&o.push(`<div class="stat-line">Number of Feeds: ${r.bottles.sessions+r.solids.sessions}</div>`),at(e.breastMilk.state,r.bottles.breastMilk)&&o.push(`<div class="stat-line">Breast Milk: ${ht(r.bottles.breastMilk,"oz")}</div>`),at(e.formula.state,r.bottles.formula)&&o.push(`<div class="stat-line">Formula: ${ht(r.bottles.formula,"oz")}</div>`),so()&&o.push(`<div class="stat-line">Total Milk Volume: ${ht(r.bottles.total,"oz")}</div>`),at(e.solids.state,r.solids.sessions)&&o.push(`<div class="stat-line">Solid Sessions: ${r.solids.sessions}</div>`);const c=o.length?`
                <div class="stat-group">
                    <div class="stat-group-title">Feeds</div>
                    ${o.join(`
                    `)}
                </div>`:"",l=at(e.pumping.state,r.pumps.sessions)?`
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${ht(r.pumps.total,"oz")}</div>
                    <div class="stat-line">Number of sessions: ${r.pumps.sessions}</div>
                </div>`:"",h=at(e.sleep.state,r.sleepMs)?`
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${ub(r.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${Pa[(r.date.getDay()+6)%7]} ${Mo} - ${Pa[(r.date.getDay()+1)%7]} ${No}</div>
                </div>`:"";return`
                <div class="day-stats-header">${t}<br>${n}</div>${Mb(r.vitaminD)}${c}
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${i}</div>
                    <div class="stat-line">Poo: ${s}</div>
                </div>${l}${h}
            `}async function Ad(r){const e=++Is,t=document.getElementById("weekly-stats"),n=document.getElementById("weekly-loading"),i=document.getElementById("week-range"),s=document.getElementById("prev-week"),o=document.getElementById("next-week"),c=document.getElementById("current-week"),l=vr(xo()),h=vr(rt()),f=new Date(st);f.setHours(0,0,0,0),f<l&&(st=new Date(l)),s.disabled=f.getTime()<=l.getTime(),o.disabled=f.getTime()>=h.getTime(),c&&(f.getTime()===h.getTime()?(c.disabled=!0,c.style.backgroundColor="#2a2a2a",c.style.color="#666",c.style.cursor="default"):(c.disabled=!1,c.style.backgroundColor="",c.style.color="",c.style.cursor="pointer"));const p=lb(st);i.textContent=`${lc(st).split(",")[1].trim()} - ${lc(p).split(",")[1].trim()}`,t.children.length===0&&(n.style.display="block");try{const _=[];for(let $=0;$<7;$++){const W=new Date(st);W.setDate(W.getDate()+$),W.setHours(0,0,0,0),_.push(W)}const S=_r(re.vitaminD.state),D=nb(),k=S?_.filter($=>$>=D).map(Pi):[],C=new Date(st);C.setDate(C.getDate()-1),C.setHours(0,0,0,0);const j=new Date(st);j.setHours(0,0,0,0);const U=new Date(p);U.setDate(U.getDate()+1),U.setHours(0,0,0,0);const L=new Date(U);L.setDate(L.getDate()+1),L.setHours(0,0,0,0);const[O,H,Q,T]=await Promise.all([nt(Ce(Se(le,"entries"),se("startTime",">=",K.fromDate(st)),se("startTime","<=",K.fromDate(p)),Ve("startTime","asc")),r),nt(Ce(Se(le,"entries"),se("type","==","Sleep"),se("startTime",">=",K.fromDate(C)),se("startTime","<",K.fromDate(j)),Ve("startTime","asc")),r),nt(Ce(Se(le,"entries"),se("type","==","Sleep"),se("startTime",">=",K.fromDate(U)),se("startTime","<",K.fromDate(L)),Ve("startTime","asc")),r),Nb(k,r)]);if(e!==Is||r==="cache"&&O.empty)return;const y=[...Da(O,!0),...Da(H,!1),...Da(Q,!1)],v={};_.forEach($=>{const W=`${$.getFullYear()}-${$.getMonth()}-${$.getDate()}`,Re=Pl($),fe=Pi($);v[W]={date:new Date($),vitaminD:fe in T?T[fe]:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},solids:{sessions:0},sleepMs:Rl(y,Re.start,Re.end)}}),O.forEach($=>{const W=$.data(),Re=yt(W.startTime.toDate());Re.setHours(0,0,0,0);const fe=v[`${Re.getFullYear()}-${Re.getMonth()}-${Re.getDate()}`];if(fe)if(W.type==="Feed"){const vt=Xt(W.amount,W.unit);fe.bottles.total+=vt,fe.bottles.sessions++,W.subType==="Breast Milk"?fe.bottles.breastMilk+=vt:W.subType==="Formula"&&(fe.bottles.formula+=vt)}else W.type==="Breast Feed"?fe.bottles.sessions++:W.type==="Diaper"?(fe.diapers.total++,W.diaperType==="Pee"?fe.diapers.pee++:W.diaperType==="Poo"?fe.diapers.poo++:W.diaperType==="Mixed"&&fe.diapers.mixed++):W.type==="Pump"?(fe.pumps.total+=Xt(W.amount,W.unit),fe.pumps.sessions++):W.type==="Solids"&&fe.solids.sessions++});const I=Object.values(v).sort(($,W)=>$.date.getTime()-W.date.getTime()),w=document.createElement("div");w.className="weekly-scroll-container";const E=rt();E.setHours(0,0,0,0);let g=-1;I.forEach(($,W)=>{const Re=document.createElement("div");Re.className="day-stats",E.getTime()===$.date.getTime()&&(Re.classList.add("current-day"),g=W),Re.innerHTML=Ob($),w.appendChild(Re)}),t.replaceChildren(w),g!==-1&&setTimeout(()=>{const $=w.children[g];if($){const W=$.offsetLeft-w.offsetWidth/2+$.offsetWidth/2;w.scrollTo({left:Math.max(0,W),behavior:"smooth"})}},100)}catch{r==="server"&&e===Is&&t.children.length===0&&(t.innerHTML='<p class="error">Failed to load weekly view</p>')}finally{e===Is&&(n.style.display="none")}}function Sd(r){const e=vr(xo()),t=vr(rt()),n=new Date(st);n.setDate(n.getDate()+r*7),n.setHours(0,0,0,0),!(n.getTime()<e.getTime()||n.getTime()>t.getTime())&&(st=n,Mn())}function Lb(){st=vr(rt()),Mn()}let Ca=!1;const og=["bottle-fields","diaper-fields","pump-fields","sleep-fields","solids-fields"];function G(r){return document.getElementById(r)}function Rd(r){return r.value&&ke(r.value)>new Date?(alert("Cannot select future times. Please select a time in the past."),r.value=Tr(rt()),!1):!0}function Fb(r){const e=document.getElementById(r);e&&(e.addEventListener("blur",()=>Rd(e)),e.addEventListener("change",()=>Rd(e)))}function Uo(){const r=Tr(rt());["bottle-time","diaper-time","pump-start-time","solids-start-time"].forEach(e=>{G(e).value=r}),G("sleep-start-time").value=""}function Bb(){G("bottle-unit").value=ft.defaultUnit,G("pump-unit").value=ft.defaultUnit}async function ag(){const r=G("submit-entry"),e=G("submit-status");try{const t=Ce(Se(le,"entries"),se("type","==","Sleep"),Ve("startTime","desc"),Pr(1)),n=await Si(t);if(G("entry-type").value!=="sleep")return;if(!n.empty){const i=n.docs[0].data();if(!i.endTime){const s=i.startTime.toDate();r.style.display="none",e.className="error",e.textContent=`Sleep entry ongoing since ${Sl(s)}. End that entry before adding a new one.`,e.style.display="block"}}}catch(t){console.error("Error checking ongoing sleep:",t)}}function Ub(){G("entry-type").value==="sleep"&&(G("submit-entry").style.display="block",G("submit-status").style.display="none",ag())}function $b(r){const e=r.target.value,t=G("submit-entry"),n=G("bottle-type-container");if(og.forEach(i=>G(i).style.display="none"),n.style.display="none",G("submit-status").style.display="none",t.style.display="block",e==="bottle-formula"||e==="bottle-breast-milk")if(G("bottle-fields").style.display="block",G("bottle-amount").dataset.lastUnit=G("bottle-unit").value,e==="bottle-formula"){n.style.display="block";const i=G("bottle-type");i.value=jp,i.dispatchEvent(new Event("change"))}else fb(G("bottle-notes")),G("bottle-type-indicator").style.display="none";else e==="diaper"?G("diaper-fields").style.display="block":e==="pump"?(G("pump-fields").style.display="block",G("pump-amount").dataset.lastUnit=G("pump-unit").value):e==="sleep"?(G("sleep-fields").style.display="block",ag()):e==="solids"?G("solids-fields").style.display="block":t.style.display="none";Uo()}function Jr(r,e){const t=G(r);if(!t.value)throw new Error("Start time is required");const n=ke(t.value);if(n>e)throw new Error("Cannot add entries in the future");return n}function Pd(r){const e=parseFloat(G(r).value);if(isNaN(e)||e<=0)throw new Error("Amount must be greater than 0");return e}async function qb(r,e){if(r==="bottle-formula"||r==="bottle-breast-milk"){const t=Jr("bottle-time",e),n=Pd("bottle-amount"),i=r==="bottle-formula",s=i?G("bottle-type").value:null;if(i&&!s)throw new Error("Formula type is required");return{type:"Feed",subType:i?"Formula":"Breast Milk",startTime:t,amount:n,unit:G("bottle-unit").value,formulaType:s,notes:G("bottle-notes").value}}if(r==="diaper"){const t=Jr("diaper-time",e),n=G("diaper-type").value;if(!n)throw new Error("Diaper type is required");return{type:"Diaper",diaperType:n,startTime:t,notes:G("diaper-notes").value}}if(r==="pump"){const t=Jr("pump-start-time",e),n=Pd("pump-amount");return{type:"Pump",startTime:t,amount:n,unit:G("pump-unit").value,notes:G("pump-notes").value}}if(r==="solids")return{type:"Solids",startTime:Jr("solids-start-time",e),notes:G("solids-notes").value};if(r==="sleep"){const t=Jr("sleep-start-time",e),n=Ce(Se(le,"entries"),se("type","==","Sleep"),Ve("startTime","desc"),Pr(1)),i=await El(n).catch(()=>Si(n));if(!i.empty&&!i.docs[0].data().endTime)throw new Error("A sleep entry is already ongoing. End that entry before adding a new one.");const s=G("sleep-end-time");let o;if(s.value){if(o=ke(s.value),o>e)throw new Error("End time cannot be in the future");if(o<=t)throw new Error("End time must be after start time")}return{type:"Sleep",startTime:t,endTime:o,notes:G("sleep-notes").value}}return null}async function jb(){if(Ca)return;const r=G("entry-type").value,e=G("submit-status"),t=G("submit-entry");Ca=!0,t.disabled=!0;const n=t.textContent;t.textContent="Adding...";try{const i=await qb(r,new Date);if(!i)return;const s=ko(le);s.set(Nn(Se(le,"entries")),{...i,startTime:K.fromDate(i.startTime),endTime:i.endTime?K.fromDate(i.endTime):null}),Lo(s),s.commit().catch(o=>{console.error("Error saving entry:",o),e.className="error",e.textContent="Failed to save entry. Please try again.",e.style.display="block"}),e.className="success",e.textContent="Entry added successfully!",e.style.display="block",zb(),i.type==="Feed"?Wp("cache"):i.type==="Solids"?Qp("cache"):i.type==="Diaper"?Yp("cache"):i.type==="Pump"?Jp("cache"):i.type==="Sleep"&&(Xp("cache"),Vl("cache")),Mn(),setTimeout(()=>{e.style.display="none"},3e3)}catch(i){e.className="error",e.textContent=i instanceof Error?i.message:"Failed to add entry",e.style.display="block"}finally{Ca=!1,t.disabled=!1,t.textContent=n}}function zb(){G("entry-type").value="",G("bottle-amount").value="",G("bottle-type").value=jp,G("pump-amount").value="",["bottle-notes","diaper-notes","pump-notes","solids-notes","sleep-notes"].forEach(r=>{G(r).value=""}),G("sleep-end-time").value="",og.forEach(r=>G(r).style.display="none"),G("bottle-type-container").style.display="none",G("submit-entry").style.display="none",Uo()}function Gb(){return{bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleep:{sessions:0},solids:{sessions:0}}}function Kb(r,e){if(e.type==="Feed"){const t=Xt(e.amount,e.unit);r.bottles.total+=t,r.bottles.sessions++,e.subType==="Breast Milk"?r.bottles.breastMilk+=t:e.subType==="Formula"&&(r.bottles.formula+=t)}else e.type==="Diaper"?(r.diapers.total++,e.diaperType==="Pee"?r.diapers.pee++:e.diaperType==="Poo"?r.diapers.poo++:e.diaperType==="Mixed"&&r.diapers.mixed++):e.type==="Pump"?(r.pumps.total+=Xt(e.amount,e.unit),r.pumps.sessions++):e.type==="Sleep"?r.sleep.sessions++:e.type==="Solids"&&r.solids.sessions++}async function Dd(r,e){const t=new Date(r);t.setHours(0,0,0,0);const n=new Date(r);n.setHours(23,59,59,999);const i=[];return(await nt(Ce(Se(le,"entries"),se("type","==","Sleep"),se("startTime",">=",K.fromDate(t)),se("startTime","<=",K.fromDate(n)),Ve("startTime","asc")),e)).forEach(o=>i.push({id:o.id,data:o.data()})),i}async function Hb(r,e,t,n){const i=new Map,s=C=>C.forEach(j=>{j.data.type==="Sleep"&&i.set(j.id,j.data)});s(r);const[o,c,l]=e.split("-").map(Number),[h,f,p]=t.split("-").map(Number);try{s(await Dd(new Date(o,c-1,l-1),n))}catch(C){console.error("Error fetching prior sleep entries:",C)}try{s(await Dd(new Date(h,f-1,p+1),n))}catch(C){console.error("Error fetching post sleep entries:",C)}const _=Array.from(i.values()).map(C=>({startTime:C.startTime.toDate(),endTime:C.endTime?C.endTime.toDate():null}));let S=0;const D=new Date(o,c-1,l),k=new Date(h,f-1,p);for(;D<=k;){const C=Pl(D);S+=Rl(_,C.start,C.end),D.setDate(D.getDate()+1)}return S}async function Wb(r,e,t,n,i,s){const o=re,c=[];if(["all","bottle-breast-milk","bottle-formula","bottle-all","solids"].includes(t)&&(so()||_r(o.solids.state))){const h=t!=="solids",f=t==="all"||t==="solids",p=[`<div class="stat-line">Number of Feeds: ${r.bottles.sessions+r.solids.sessions}</div>`];h&&(at(o.breastMilk.state,r.bottles.breastMilk)&&p.push(`<div class="stat-line">Breast Milk: ${ht(r.bottles.breastMilk,"oz")}</div>`),at(o.formula.state,r.bottles.formula)&&p.push(`<div class="stat-line">Formula: ${ht(r.bottles.formula,"oz")}</div>`),so()&&p.push(`<div class="stat-line">Total Milk Volume: ${ht(r.bottles.total,"oz")}</div>`)),f&&at(o.solids.state,r.solids.sessions)&&p.push(`<div class="stat-line">Solid Sessions: ${r.solids.sessions}</div>`),c.push(`<div class="stat-group"><div class="stat-group-title">Feeds</div>${p.join("")}</div>`)}if(["all","diaper-all","diaper-pee","diaper-poo"].includes(t)&&c.push(`
            <div class="stat-group">
                <div class="stat-group-title">Diapers</div>
                <div class="stat-line">Pee: ${r.diapers.pee+r.diapers.mixed}</div>
                <div class="stat-line">Poo: ${r.diapers.poo+r.diapers.mixed}</div>
            </div>`),(t==="all"||t==="pump")&&at(o.pumping.state,r.pumps.sessions)&&c.push(`
            <div class="stat-group">
                <div class="stat-group-title">Pumps</div>
                <div class="stat-line">Total volume: ${ht(r.pumps.total,"oz")}</div>
                <div class="stat-line">Number of sessions: ${r.pumps.sessions}</div>
            </div>`),(t==="all"||t==="sleep")&&at(o.sleep.state,r.sleep.sessions)){const h=n&&i?await Hb(e,n,i,s):0,f=Math.floor(h/(1e3*60*60)),p=Math.floor(h%(1e3*60*60)/(1e3*60));c.push(`
            <div class="stat-group">
                <div class="stat-group-title">Sleep</div>
                <div class="stat-line">Total Sleep: ${f}h ${p}m</div>
                <div class="stat-line">Number of Sleeps: ${r.sleep.sessions}</div>
                <div class="stat-line" style="font-size: 11px; color: #888;">prev day ${Mo} - next day ${No}</div>
            </div>`)}return c.length===0?null:`<div class="summary-header">Summary</div><div class="summary-stats">${c.join("")}</div>`}let oo=null;const Qb=["edit-bottle-fields","edit-diaper-fields","edit-pump-fields","edit-sleep-fields","edit-solids-fields"];function Y(r){return document.getElementById(r)}function Yr(r){return Y(r).style.display==="block"}function Jb(r,e){oo=r,Qb.forEach(n=>Y(n).style.display="none");const t=Tr(yt(e.startTime.toDate()));if(e.type==="Feed"){Y("edit-bottle-fields").style.display="block";const n=Y("edit-bottle-unit"),i=Y("edit-bottle-amount"),s=Y("edit-bottle-type-container"),o=Y("edit-bottle-type"),c=Y("edit-bottle-type-indicator"),l=Y("edit-bottle-type-text");if(Y("edit-bottle-time").value=t,i.value=e.amount.toFixed(2),n.value=e.unit||"oz",i.dataset.lastUnit=e.unit||"oz",Y("edit-bottle-notes").value=e.notes||"",e.subType==="Formula"){s.style.display="block";const h=db(e);_d(o,h),o.value=h,h?(l.textContent=h,c.style.display="block"):c.style.display="none"}else s.style.display="none",_d(o,""),o.value="",c.style.display="none"}else if(e.type==="Diaper")Y("edit-diaper-fields").style.display="block",Y("edit-diaper-time").value=t,Y("edit-diaper-type").value=e.diaperType,Y("edit-diaper-notes").value=e.notes||"";else if(e.type==="Pump"){Y("edit-pump-fields").style.display="block";const n=Y("edit-pump-amount");Y("edit-pump-start-time").value=t,n.value=e.amount.toFixed(2),Y("edit-pump-unit").value=e.unit||"oz",n.dataset.lastUnit=e.unit||"oz",Y("edit-pump-notes").value=e.notes||""}else e.type==="Sleep"?(Y("edit-sleep-fields").style.display="block",Y("edit-sleep-start-time").value=t,Y("edit-sleep-end-time").value=Tr(e.endTime?yt(e.endTime.toDate()):rt()),Y("edit-sleep-notes").value=e.notes||""):e.type==="Solids"&&(Y("edit-solids-fields").style.display="block",Y("edit-solids-start-time").value=t,Y("edit-solids-notes").value=e.notes||"");Y("edit-modal").style.display="block"}function cg(){Y("edit-modal").style.display="none",oo=null,Y("edit-status").style.display="none"}function Xr(r,e){const t=Y(r);if(!t.value)throw new Error("Start time is required");const n=ke(t.value);if(n>e)throw new Error("Cannot set time in the future");return n}function Cd(r){const e=parseFloat(Y(r).value);if(isNaN(e)||e<=0)throw new Error("Amount must be greater than 0");return e}function Yb(r){if(Yr("edit-bottle-fields")){const e=Xr("edit-bottle-time",r),t=Cd("edit-bottle-amount"),n=Y("edit-bottle-type").value;if(Y("edit-bottle-type-container").style.display!=="none"&&!n)throw new Error("Formula type is required");return{startTime:K.fromDate(e),amount:t,unit:Y("edit-bottle-unit").value,notes:Y("edit-bottle-notes").value,formulaType:n||null}}if(Yr("edit-diaper-fields")){const e=Xr("edit-diaper-time",r),t=Y("edit-diaper-type").value;if(!t)throw new Error("Diaper type is required");return{startTime:K.fromDate(e),diaperType:t,notes:Y("edit-diaper-notes").value}}if(Yr("edit-pump-fields")){const e=Xr("edit-pump-start-time",r),t=Cd("edit-pump-amount");return{startTime:K.fromDate(e),amount:t,unit:Y("edit-pump-unit").value,notes:Y("edit-pump-notes").value}}if(Yr("edit-sleep-fields")){const e=Xr("edit-sleep-start-time",r),t={startTime:K.fromDate(e),notes:Y("edit-sleep-notes").value,endTime:null},n=Y("edit-sleep-end-time");if(n.value){const i=ke(n.value);if(i>r)throw new Error("End time cannot be in the future");if(i<=e)throw new Error("End time must be after start time");t.endTime=K.fromDate(i)}return t}if(Yr("edit-solids-fields")){const e=Xr("edit-solids-start-time",r);return{startTime:K.fromDate(e),notes:Y("edit-solids-notes").value}}return{}}function lg(){Gt(),Mn(),Bo()}async function Xb(){if(!oo)return;const r=Y("edit-status");try{const e=ko(le);e.update(Nn(le,"entries",oo),Yb(new Date)),Lo(e),await e.commit(),r.className="success",r.textContent="Entry updated successfully!",r.style.display="block",setTimeout(()=>{cg(),lg()},1e3)}catch(e){r.className="error",r.textContent=e instanceof Error?e.message:"Failed to update entry",r.style.display="block"}}async function Zb(r){if(confirm("Are you sure you want to delete this entry?"))try{const e=ko(le);e.delete(Nn(le,"entries",r)),Lo(e),await e.commit(),lg()}catch{alert("Failed to delete entry")}}let zn=0;function ug(){const r=Ye(rt());document.getElementById("start-date-filter").value=r,document.getElementById("end-date-filter").value=r}function Zr(r){const e=document.getElementById("start-date-filter"),t=document.getElementById("end-date-filter"),n=rt();n.setHours(0,0,0,0);const i={today:0,yesterday:1,"two-days-ago":2,"three-days-ago":3};if(r==="all-time")e.value=Ye(xo()),t.value=Ye(n);else if(r in i){const s=new Date(n);s.setDate(s.getDate()-i[r]),e.value=Ye(s),t.value=Ye(s)}Gt()}async function Gt(){try{await Vd("cache")}catch{}await Vd("server")}function eA(r,e){return e==="all"?!0:e==="bottle-all"?r.type==="Feed":e==="bottle-breast-milk"?r.type==="Feed"&&r.subType==="Breast Milk":e==="bottle-formula"?r.type==="Feed"&&r.subType==="Formula":e==="diaper-all"?r.type==="Diaper":e==="diaper-pee"?r.type==="Diaper"&&(r.diaperType==="Pee"||r.diaperType==="Mixed"):e==="diaper-poo"?r.type==="Diaper"&&(r.diaperType==="Poo"||r.diaperType==="Mixed"):e==="pump"?r.type==="Pump":e==="sleep"?r.type==="Sleep":e==="solids"?r.type==="Solids":!1}function dc(r){return r.type==="Diaper"&&(r.diaperType==="Poo"||r.diaperType==="Mixed")}function tA(r){if(r.type==="Feed")return{typeDisplay:`Bottle - ${r.subType}`,detailsHTML:`<div class="timeline-entry-details">Amount: ${ht(r.amount,r.unit)}</div>`,backgroundColor:"#22323f"};if(r.type==="Breast Feed")return{typeDisplay:"Breast Feed",detailsHTML:"",backgroundColor:"#22323f"};if(r.type==="Diaper")return{typeDisplay:"Diaper",detailsHTML:`<div class="timeline-entry-details">Type: ${r.diaperType}</div>`,backgroundColor:"#3a2c20"};if(r.type==="Pump")return{typeDisplay:"Pump",detailsHTML:`<div class="timeline-entry-details">Amount: ${ht(r.amount,r.unit)}</div>`,backgroundColor:"#2e2740"};if(r.type==="Solids")return{typeDisplay:"Solids",detailsHTML:"",backgroundColor:"#38301f"};if(r.type==="Sleep"){if(!r.endTime)return{typeDisplay:"Sleep",detailsHTML:'<div class="timeline-entry-details">In progress</div>',backgroundColor:"#213425"};const e=r.startTime.toDate(),t=r.endTime.toDate(),n=t.getTime()-e.getTime(),i=Math.floor(n/(1e3*60*60)),s=Math.floor(n%(1e3*60*60)/(1e3*60));return{typeDisplay:"Sleep",detailsHTML:`<div class="timeline-entry-details">Duration: ${i}h ${s}m</div><div class="timeline-entry-details">End: ${Sl(t)}</div>`,backgroundColor:"#213425"}}return{typeDisplay:r.type,detailsHTML:"",backgroundColor:""}}function hg(r){const e=document.createElement("div");return e.className="timeline-entry-details",e.style.color="#aaa",e.style.fontStyle="italic",e.textContent=`${r.toFixed(1)} hours since previous poo`,e}async function nA(r,e){const[t,n,i]=r.split("-").map(Number),s=new Date(t,n-1,i-1),o=Ye(s),c=ke(`${o}T${ac(re.sleep.nightStartHour)}`),l=ke(`${r}T00:00`),h=[];try{(await nt(Ce(Se(le,"entries"),se("type","==","Sleep"),se("startTime",">=",K.fromDate(c)),se("startTime","<",K.fromDate(l)),Ve("startTime","desc")),e)).forEach(p=>h.push({id:p.id,data:p.data()}))}catch(f){console.error("Error fetching prior evening sleep:",f)}return h}async function rA(r,e){const t=r.querySelectorAll('[data-needs-prior-poo="true"]');for(const n of Array.from(t)){const i=parseInt(n.dataset.pooTime||"0",10);if(i>0)try{const s=await nt(Ce(Se(le,"entries"),se("type","==","Diaper"),se("startTime","<",K.fromDate(new Date(i))),Ve("startTime","desc"),Pr(40)),e);let o=null;if(s.forEach(c=>{if(o!==null)return;const l=c.data();dc(l)&&(o=l.startTime.toDate().getTime())}),o!==null){const c=hg((i-o)/36e5);n.insertBefore(c,n.querySelector(".timeline-entry-actions"))}}catch(s){console.error("Error fetching prior poo entry:",s)}n.removeAttribute("data-needs-prior-poo"),n.removeAttribute("data-poo-time")}}async function Vd(r){var l;const e=++zn,t=document.getElementById("timeline-list"),n=document.getElementById("timeline-loading"),i=document.getElementById("start-date-filter").value,s=document.getElementById("end-date-filter").value,o=document.getElementById("type-filter").value;t.children.length===0&&(n.style.display="block");const c=()=>{var h;return(h=document.querySelector(".filter-summary"))==null?void 0:h.remove()};try{let h=Ce(Se(le,"entries"),Ve("startTime","desc"));if(i&&s){const O=ke(`${i}T00:00`),H=ke(`${s}T23:59`);H.setSeconds(59,999),h=Ce(Se(le,"entries"),se("startTime",">=",K.fromDate(O)),se("startTime","<=",K.fromDate(H)),Ve("startTime","desc"))}const f=await nt(h,r);if(e!==zn||r==="cache"&&f.empty)return;const p=i?await nA(i,r):[];if(e!==zn)return;const _=[],S=new Set;if(f.forEach(O=>{_.push({id:O.id,data:O.data()}),S.add(O.id)}),p.forEach(O=>{S.has(O.id)||(_.push(O),S.add(O.id))}),_.sort((O,H)=>H.data.startTime.toDate().getTime()-O.data.startTime.toDate().getTime()),_.length===0){c();const O=document.createElement("p");O.textContent="No entries found.",t.replaceChildren(O);return}const D=_.filter(O=>dc(O.data)).map(O=>O.data.startTime.toDate().getTime()).sort((O,H)=>H-O),k=Gb(),C=document.createDocumentFragment();let j="",U=!1;if(_.forEach(({id:O,data:H})=>{if(!eA(H,o))return;Kb(k,H),U=!0;const Q=H.startTime.toDate(),T=lc(Q);if(T!==j){j=T;const g=document.createElement("div");g.className="timeline-date-header",g.textContent=T,C.appendChild(g)}const y=document.createElement("div");y.className="timeline-entry";const{typeDisplay:v,detailsHTML:I,backgroundColor:w}=tA(H);y.style.backgroundColor=w;const E=H.notes?`<div class="timeline-entry-notes">${H.notes.replace(/\n/g,"<br>")}</div>`:"";if(y.innerHTML=`
                <div class="timeline-entry-header">
                    <span class="timeline-entry-type">${v}</span>
                    <span class="timeline-entry-time">${Sl(Q)}</span>
                </div>
                ${I}
                ${E}
                <div class="timeline-entry-actions">
                    <button class="edit-button" data-id="${O}">Edit</button>
                    <button class="delete-button" data-id="${O}">Delete</button>
                </div>
            `,dc(H)){const g=Q.getTime(),$=D.findIndex(W=>W===g);if($>=0&&$<D.length-1){const W=(g-D[$+1])/36e5;y.insertBefore(hg(W),y.querySelector(".timeline-entry-actions"))}else $>=0&&(y.dataset.needsPriorPoo="true",y.dataset.pooTime=String(g))}y.querySelector(".edit-button").addEventListener("click",()=>Jb(O,H)),y.querySelector(".delete-button").addEventListener("click",()=>Zb(O)),C.appendChild(y)}),t.replaceChildren(C),await rA(t,r),!U){c(),t.innerHTML="<p>No entries match the selected filters.</p>";return}const L=await Wb(k,_,o,i,s,r);if(e!==zn)return;if(c(),L){const O=document.createElement("div");O.className="filter-summary",O.innerHTML=L,(l=t.parentNode)==null||l.insertBefore(O,t)}}catch{r==="server"&&e===zn&&t.children.length===0&&(t.innerHTML='<p class="error">Failed to load timeline</p>')}finally{e===zn&&(n.style.display="none")}}let kd=!1,dg="feeds",fc="[]";const fg={feeds:[],diapers:[],pumps:[],sleep:[]};function mg(){const r=document.getElementById("json-content");fc=JSON.stringify(fg[dg],null,2),r.textContent=fc}async function pg(){const r=document.getElementById("json-content"),e=Ce(Se(le,"entries"),Ve("startTime","desc")),t=i=>{const s={feeds:[],diapers:[],pumps:[],sleep:[]};i.docs.forEach(o=>{const c=o.data(),l=c.startTime.toDate().toISOString();c.type==="Feed"?s.feeds.push({type:c.type,subType:c.subType,startTime:l,amount:c.amount,unit:c.unit,notes:c.notes||""}):c.type==="Solids"?s.feeds.push({type:c.type,startTime:l,notes:c.notes||""}):c.type==="Diaper"?s.diapers.push({type:c.type,startTime:l,diaperType:c.diaperType,notes:c.notes||""}):c.type==="Pump"?s.pumps.push({type:c.type,startTime:l,amount:c.amount,unit:c.unit,notes:c.notes||""}):c.type==="Sleep"&&s.sleep.push({type:c.type,startTime:l,endTime:c.endTime?c.endTime.toDate().toISOString():null,notes:c.notes||""})}),Object.assign(fg,s),mg()};let n=!1;try{const i=await nt(e,"cache");i.empty||(t(i),n=!0)}catch{}try{t(await nt(e,"server"))}catch{n||(r.textContent="Failed to load data")}}function gg(){document.getElementById("json-content").style.display!=="none"&&pg()}function iA(){if(kd)return;kd=!0;const r=document.getElementById("json-content"),e=document.getElementById("toggle-json"),t=document.getElementById("copy-json"),n=document.querySelector(".json-tabs"),i=Array.from(document.querySelectorAll(".json-tab-button")).map(o=>({btn:o,key:o.dataset.tab})),s=o=>{dg=o,i.forEach(c=>c.btn.classList.toggle("active",c.key===o))};i.length&&s(i[0].key),e.addEventListener("click",async()=>{const o=r.style.display==="none";r.style.display=o?"block":"none",t.style.display=o?"block":"none",n.style.display=o?"flex":"none",e.textContent=o?"Hide JSON Data":"Show JSON Data",o&&(r.textContent="Loading...",await pg())}),t.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(fc);const o=t.textContent;t.textContent="Copied",setTimeout(()=>{t.textContent=o},2e3)}catch{alert("Failed to copy to clipboard")}}),i.forEach(({btn:o,key:c})=>{o.addEventListener("click",()=>{s(c),mg()})})}function xd(r){return document.getElementById(r).style.display==="block"}function sA(){Bo(),Gi(),Ub(),xd("timeline-view")&&(Mn(),Gt()),xd("weekly-view")&&(gg(),wb())}function oA(){let r;qw(bl,e=>{if(e.metadata.hasPendingWrites)return;const t=e.data(),n=(t==null?void 0:t.nonce)??null;if(r===void 0){r=n;return}n!==r&&(r=n,(t==null?void 0:t.by)!==Lp&&sA())},e=>{console.error("Live updates stopped:",e)})}function ye(r,e,t){var n;(n=document.getElementById(r))==null||n.addEventListener(e,t)}function Va(r){var e;document.querySelectorAll(".tab-button").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".view").forEach(t=>t.style.display="none"),(e=document.getElementById(`${r}-tab`))==null||e.classList.add("active"),document.getElementById(`${r}-view`).style.display="block",r==="entry"?(rg(),Gi()):Db(),r==="timeline"?(Mn(),Gt()):r==="weekly"&&(Gp(),iA(),gg()),window.scrollTo(0,0)}function aA(){ye("entry-type","change",$b),ye("submit-entry","click",jb),vd({select:"bottle-type",notes:"bottle-notes",indicator:"bottle-type-indicator",typeText:"bottle-type-text",container:"bottle-type-container"}),vd({select:"edit-bottle-type",notes:"edit-bottle-notes",indicator:"edit-bottle-type-indicator",typeText:"edit-bottle-type-text",container:"edit-bottle-type-container"}),ye("refresh-button","click",()=>window.location.reload()),ye("signout-button","click",sb),ye("entry-tab","click",()=>Va("entry")),ye("timeline-tab","click",()=>Va("timeline")),ye("weekly-tab","click",()=>Va("weekly")),ye("prev-week","click",()=>Sd(-1)),ye("next-week","click",()=>Sd(1)),ye("current-week","click",Lb),ye("save-edit","click",Xb),ye("cancel-edit","click",cg),ye("start-date-filter","change",()=>Gt()),ye("end-date-filter","change",()=>Gt()),ye("type-filter","change",()=>Gt()),ye("today-button","click",()=>Zr("today")),ye("yesterday-button","click",()=>Zr("yesterday")),ye("two-days-ago-button","click",()=>Zr("two-days-ago")),ye("three-days-ago-button","click",()=>Zr("three-days-ago")),ye("all-time-button","click",()=>Zr("all-time")),["bottle-time","diaper-time","pump-start-time","solids-start-time","sleep-start-time","edit-bottle-time","edit-diaper-time","edit-pump-start-time","edit-sleep-start-time","edit-solids-start-time"].forEach(Fb),ye("update-graph-btn","click",Eb),ye("timezone-select","change",r=>{cb(r.target.value),Uo(),ug(),Gi(),Bo(),Gt(),Mn()})}function cA(){aA(),Uo(),Bb(),ug(),Tb(),Cb(),yb(),_b(),kb(),ig(),oA(),window.scrollTo(0,0)}Rb();ab(cA);
