(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var sa={};/**
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
 */const sl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Pu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let T=(c&15)<<2|d>>6,b=d&63;h||(b=64,a||(T=64)),r.push(e[m],e[E],e[T],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(sl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||E==null)throw new Cu;const T=o<<2|c>>4;if(r.push(T),d!==64){const b=c<<4&240|d>>2;if(r.push(b),E!==64){const V=d<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=sl(n);return il.encodeByteArray(t,!0)},kr=function(n){return Vu(n).replace(/\./g,"")},ku=function(n){try{return il.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xu=()=>Nu().__FIREBASE_DEFAULTS__,Mu=()=>{if(typeof process>"u"||typeof sa>"u")return;const n=sa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ku(n[1]);return t&&JSON.parse(t)},yi=()=>{try{return xu()||Mu()||Bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lu=n=>{var t,e;return(e=(t=yi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Fu=n=>{const t=Lu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ol=()=>{var n;return(n=yi())===null||n===void 0?void 0:n.config};/**
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
 */class Ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Uu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kr(JSON.stringify(e)),kr(JSON.stringify(a)),""].join(".")}/**
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
 */function $u(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qu(){var n;const t=(n=yi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ju(){return!qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zu(){try{return typeof indexedDB=="object"}catch{return!1}}function Hu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ku="FirebaseError";class hn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ku,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Wu(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new hn(s,c,r)}}function Wu(n,t){return n.replace(Gu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Gu=/\{\$([^}]+)}/g;function Ws(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ia(o)&&ia(a)){if(!Ws(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ia(n){return n!==null&&typeof n=="object"}/**
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
 */function ce(n){return n&&n._delegate?n._delegate:n}class $n{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class Qu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ou;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xu(t))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Be){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Be){return this.instances.has(t)}getOptions(t=Be){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Be){return this.component?this.component.multipleInstances?t:Be:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yu(n){return n===Be?void 0:n}function Xu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ju{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var tt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(tt||(tt={}));const Zu={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},th=tt.INFO,eh={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},nh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=eh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ll{constructor(t){this.name=t,this._logLevel=th,this._logHandler=nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}const rh=(n,t)=>t.some(e=>n instanceof e);let oa,aa;function sh(){return oa||(oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ih(){return aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cl=new WeakMap,Gs=new WeakMap,ul=new WeakMap,Cs=new WeakMap,_i=new WeakMap;function oh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ve(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&cl.set(e,n)}).catch(()=>{}),_i.set(t,n),t}function ah(n){if(Gs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Gs.set(n,t)}let Qs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ul.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ve(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function lh(n){Qs=n(Qs)}function ch(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Vs(this),t,...e);return ul.set(r,t.sort?t.sort():[t]),ve(r)}:ih().includes(n)?function(...t){return n.apply(Vs(this),t),ve(cl.get(this))}:function(...t){return ve(n.apply(Vs(this),t))}}function uh(n){return typeof n=="function"?ch(n):(n instanceof IDBTransaction&&ah(n),rh(n,sh())?new Proxy(n,Qs):n)}function ve(n){if(n instanceof IDBRequest)return oh(n);if(Cs.has(n))return Cs.get(n);const t=uh(n);return t!==n&&(Cs.set(n,t),_i.set(t,n)),t}const Vs=n=>_i.get(n);function hh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=ve(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ve(a.result),h.oldVersion,h.newVersion,ve(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const dh=["get","getKey","getAll","getAllKeys","count"],fh=["put","add","delete","clear"],ks=new Map;function la(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ks.get(t))return ks.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=fh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ks.set(t,o),o}lh(n=>({...n,get:(t,e,r)=>la(t,e)||n.get(t,e,r),has:(t,e)=>!!la(t,e)||n.has(t,e)}));/**
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
 */class mh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ph(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ph(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ys="@firebase/app",ca="0.10.13";/**
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
 */const ue=new ll("@firebase/app"),gh="@firebase/app-compat",yh="@firebase/analytics-compat",_h="@firebase/analytics",Eh="@firebase/app-check-compat",vh="@firebase/app-check",Th="@firebase/auth",Ih="@firebase/auth-compat",wh="@firebase/database",Ah="@firebase/data-connect",Sh="@firebase/database-compat",bh="@firebase/functions",Dh="@firebase/functions-compat",Rh="@firebase/installations",Ph="@firebase/installations-compat",Ch="@firebase/messaging",Vh="@firebase/messaging-compat",kh="@firebase/performance",Nh="@firebase/performance-compat",xh="@firebase/remote-config",Mh="@firebase/remote-config-compat",Bh="@firebase/storage",Lh="@firebase/storage-compat",Fh="@firebase/firestore",Oh="@firebase/vertexai-preview",Uh="@firebase/firestore-compat",$h="firebase",qh="10.14.1";/**
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
 */const Xs="[DEFAULT]",jh={[Ys]:"fire-core",[gh]:"fire-core-compat",[_h]:"fire-analytics",[yh]:"fire-analytics-compat",[vh]:"fire-app-check",[Eh]:"fire-app-check-compat",[Th]:"fire-auth",[Ih]:"fire-auth-compat",[wh]:"fire-rtdb",[Ah]:"fire-data-connect",[Sh]:"fire-rtdb-compat",[bh]:"fire-fn",[Dh]:"fire-fn-compat",[Rh]:"fire-iid",[Ph]:"fire-iid-compat",[Ch]:"fire-fcm",[Vh]:"fire-fcm-compat",[kh]:"fire-perf",[Nh]:"fire-perf-compat",[xh]:"fire-rc",[Mh]:"fire-rc-compat",[Bh]:"fire-gcs",[Lh]:"fire-gcs-compat",[Fh]:"fire-fst",[Uh]:"fire-fst-compat",[Oh]:"fire-vertex","fire-js":"fire-js",[$h]:"fire-js-all"};/**
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
 */const Nr=new Map,zh=new Map,Js=new Map;function ua(n,t){try{n.container.addComponent(t)}catch(e){ue.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xr(n){const t=n.name;if(Js.has(t))return ue.debug(`There were multiple attempts to register component ${t}.`),!1;Js.set(t,n);for(const e of Nr.values())ua(e,n);for(const e of zh.values())ua(e,n);return!0}function Hh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Kh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new al("app","Firebase",Kh);/**
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
 */class Wh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
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
 */const Gh=qh;function hl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Xs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Te.create("bad-app-name",{appName:String(s)});if(e||(e=ol()),!e)throw Te.create("no-options");const o=Nr.get(s);if(o){if(Ws(e,o.options)&&Ws(r,o.config))return o;throw Te.create("duplicate-app",{appName:s})}const a=new Ju(s);for(const h of Js.values())a.addComponent(h);const c=new Wh(e,r,a);return Nr.set(s,c),c}function Qh(n=Xs){const t=Nr.get(n);if(!t&&n===Xs&&ol())return hl();if(!t)throw Te.create("no-app",{appName:n});return t}function Ze(n,t,e){var r;let s=(r=jh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ue.warn(c.join(" "));return}xr(new $n(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Yh="firebase-heartbeat-database",Xh=1,qn="firebase-heartbeat-store";let Ns=null;function dl(){return Ns||(Ns=hh(Yh,Xh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(qn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Te.create("idb-open",{originalErrorMessage:n.message})})),Ns}async function Jh(n){try{const e=(await dl()).transaction(qn),r=await e.objectStore(qn).get(fl(n));return await e.done,r}catch(t){if(t instanceof hn)ue.warn(t.message);else{const e=Te.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ue.warn(e.message)}}}async function ha(n,t){try{const r=(await dl()).transaction(qn,"readwrite");await r.objectStore(qn).put(t,fl(n)),await r.done}catch(e){if(e instanceof hn)ue.warn(e.message);else{const r=Te.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ue.warn(r.message)}}}function fl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zh=1024,td=30*24*60*60*1e3;class ed{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=da();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=td}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ue.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=da(),{heartbeatsToSend:r,unsentEntries:s}=nd(this._heartbeatsCache.heartbeats),o=kr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ue.warn(e),""}}}function da(){return new Date().toISOString().substring(0,10)}function nd(n,t=Zh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),fa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),fa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class rd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zu()?Hu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Jh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function fa(n){return kr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sd(n){xr(new $n("platform-logger",t=>new mh(t),"PRIVATE")),xr(new $n("heartbeat",t=>new ed(t),"PRIVATE")),Ze(Ys,ca,n),Ze(Ys,ca,"esm2017"),Ze("fire-js","")}sd("");var id="firebase",od="10.14.1";/**
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
 */Ze(id,od,"app");var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fe,ml;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function _(){}_.prototype=p.prototype,I.D=p.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(v,y,w){for(var g=Array(arguments.length-2),O=2;O<arguments.length;O++)g[O-2]=arguments[O];return p.prototype[y].apply(v,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,_){_||(_=0);var v=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)v[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;16>y;++y)v[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=I.g[0],_=I.g[1],y=I.g[2];var w=I.g[3],g=p+(w^_&(y^w))+v[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+v[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+v[2]+606105819&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+v[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+v[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+v[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+v[6]+2821735955&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+v[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+v[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+v[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+v[10]+4294925233&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+v[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+v[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+v[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+v[14]+2792965006&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+v[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^w&(_^y))+v[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+v[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+v[11]+643717713&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+v[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+v[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+v[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+v[15]+3634488961&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+v[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+v[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+v[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+v[3]+4107603335&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+v[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+v[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+v[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+v[7]+1735328473&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+v[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^w)+v[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+v[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+v[11]+1839030562&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+v[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+v[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+v[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+v[7]+4139469664&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+v[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+v[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+v[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+v[3]+3572445317&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+v[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+v[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+v[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+v[15]+530742520&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+v[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~w))+v[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+v[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+v[14]+2878612391&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+v[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+v[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+v[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+v[10]+4293915773&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+v[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+v[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+v[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+v[6]+2734768916&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+v[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+v[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+v[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+v[2]+718787259&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+y&4294967295,I.g[3]=I.g[3]+w&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var _=p-this.blockSize,v=this.B,y=this.h,w=0;w<p;){if(y==0)for(;w<=_;)s(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<p;)if(v[y++]=I.charCodeAt(w++),y==this.blockSize){s(this,v),y=0;break}}else for(;w<p;)if(v[y++]=I[w++],y==this.blockSize){s(this,v),y=0;break}}this.h=y,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var _=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=_&255,_/=256;for(this.u(I),I=Array(16),p=_=0;4>p;++p)for(var v=0;32>v;v+=8)I[_++]=this.g[p]>>>v&255;return I};function o(I,p){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=p(I)}function a(I,p){this.h=p;for(var _=[],v=!0,y=I.length-1;0<=y;y--){var w=I[y]|0;v&&w==p||(_[y]=w,v=!1)}this.g=_}var c={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return S(d(-I));for(var p=[],_=1,v=0;I>=_;v++)p[v]=I/_|0,_*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return S(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),v=E,y=0;y<I.length;y+=8){var w=Math.min(8,I.length-y),g=parseInt(I.substring(y,y+w),p);8>w?(w=d(Math.pow(p,w)),v=v.j(w).add(d(g))):(v=v.j(_),v=v.add(d(g)))}return v}var E=h(0),T=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(P(this))return-S(this).m();for(var I=0,p=1,_=0;_<this.g.length;_++){var v=this.i(_);I+=(0<=v?v:4294967296+v)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(P(this))return"-"+S(this).toString(I);for(var p=d(Math.pow(I,6)),_=this,v="";;){var y=Q(_,p).g;_=L(_,y.j(p));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=y,V(_))return w+v;for(;6>w.length;)w="0"+w;v=w+v}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=L(this,I),P(I)?-1:V(I)?0:1};function S(I){for(var p=I.g.length,_=[],v=0;v<p;v++)_[v]=~I.g[v];return new a(_,~I.h).add(T)}n.abs=function(){return P(this)?S(this):this},n.add=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0,y=0;y<=p;y++){var w=v+(this.i(y)&65535)+(I.i(y)&65535),g=(w>>>16)+(this.i(y)>>>16)+(I.i(y)>>>16);v=g>>>16,w&=65535,g&=65535,_[y]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function L(I,p){return I.add(S(p))}n.j=function(I){if(V(this)||V(I))return E;if(P(this))return P(I)?S(this).j(S(I)):S(S(this).j(I));if(P(I))return S(this.j(S(I)));if(0>this.l(b)&&0>I.l(b))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,_=[],v=0;v<2*p;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var y=0;y<I.g.length;y++){var w=this.i(v)>>>16,g=this.i(v)&65535,O=I.i(y)>>>16,rt=I.i(y)&65535;_[2*v+2*y]+=g*rt,F(_,2*v+2*y),_[2*v+2*y+1]+=w*rt,F(_,2*v+2*y+1),_[2*v+2*y+1]+=g*O,F(_,2*v+2*y+1),_[2*v+2*y+2]+=w*O,F(_,2*v+2*y+2)}for(v=0;v<p;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=p;v<2*p;v++)_[v]=0;return new a(_,0)};function F(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function B(I,p){this.g=I,this.h=p}function Q(I,p){if(V(p))throw Error("division by zero");if(V(I))return new B(E,E);if(P(I))return p=Q(S(I),p),new B(S(p.g),S(p.h));if(P(p))return p=Q(I,S(p)),new B(S(p.g),p.h);if(30<I.g.length){if(P(I)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var _=T,v=p;0>=v.l(I);)_=q(_),v=q(v);var y=G(_,1),w=G(v,1);for(v=G(v,2),_=G(_,2);!V(v);){var g=w.add(v);0>=g.l(I)&&(y=y.add(_),w=g),v=G(v,1),_=G(_,1)}return p=L(I,y.j(p)),new B(y,p)}for(y=E;0<=I.l(p);){for(_=Math.max(1,Math.floor(I.m()/p.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),w=d(_),g=w.j(p);P(g)||0<g.l(I);)_-=v,w=d(_),g=w.j(p);V(w)&&(w=T),y=y.add(w),I=L(I,g)}return new B(y,I)}n.A=function(I){return Q(this,I).h},n.and=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)&I.i(v);return new a(_,this.h&I.h)},n.or=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)|I.i(v);return new a(_,this.h|I.h)},n.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)^I.i(v);return new a(_,this.h^I.h)};function q(I){for(var p=I.g.length+1,_=[],v=0;v<p;v++)_[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(_,I.h)}function G(I,p){var _=p>>5;p%=32;for(var v=I.g.length-_,y=[],w=0;w<v;w++)y[w]=0<p?I.i(w+_)>>>p|I.i(w+_+1)<<32-p:I.i(w+_);return new a(y,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ml=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Fe=a}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pl,Nn,gl,Dr,Zs,yl,_l,El;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ir=="object"&&Ir];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break t;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var D=u++;return{value:l(D,i[D]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function E(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function T(i,l,u){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,T.apply(null,arguments)}function b(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function V(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,D){for(var k=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)k[ot-2]=arguments[ot];return l.prototype[A].apply(f,k)}}function P(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function S(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,D=f.length||0;i.length=A+D;for(let k=0;k<D;k++)i[A+k]=f[k]}else i.push(f)}}class L{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(i){return/^[\s\xa0]*$/.test(i)}function B(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function Q(i){return Q[" "](i),i}Q[" "]=function(){};var q=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function G(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function I(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function p(i){const l={};for(const u in i)l[u]=i[u];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let D=0;D<_.length;D++)u=_[D],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function y(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function w(i){c.setTimeout(()=>{throw i},0)}function g(){var i=pt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class O{constructor(){this.h=this.g=null}add(l,u){const f=rt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var rt=new L(()=>new $,i=>i.reset());class ${constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let N,ft=!1,pt=new O,Z=()=>{const i=c.Promise.resolve(void 0);N=()=>{i.then(lt)}};var lt=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){w(u)}var l=rt;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ft=!1};function Et(){this.s=this.s,this.C=this.C}Et.prototype.s=!1,Et.prototype.ma=function(){this.s||(this.s=!0,this.N())},Et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var zt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function fe(i,l){if(ct.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(q){t:{try{Q(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ir[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&fe.aa.h.call(this)}}V(fe,ct);var ir={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),st=0;function z(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++st,this.da=this.fa=!1}function kt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function vt(i){this.src=i,this.g={},this.h=0}vt.prototype.add=function(i,l,u,f,A){var D=i.toString();i=this.g[D],i||(i=this.g[D]=[],this.h++);var k=He(i,l,f,A);return-1<k?(l=i[k],u||(l.fa=!1)):(l=new z(l,this.src,D,!!f,A),l.fa=u,i.push(l)),l};function Kt(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),D;(D=0<=A)&&Array.prototype.splice.call(f,A,1),D&&(kt(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function He(i,l,u,f){for(var A=0;A<i.length;++A){var D=i[A];if(!D.da&&D.listener==l&&D.capture==!!u&&D.ha==f)return A}return-1}var yn="closure_lm_"+(1e6*Math.random()|0),us={};function so(i,l,u,f,A){if(Array.isArray(l)){for(var D=0;D<l.length;D++)so(i,l[D],u,f,A);return null}return u=ao(u),i&&i[Ce]?i.K(l,u,d(f)?!!f.capture:!1,A):tu(i,l,u,!1,f,A)}function tu(i,l,u,f,A,D){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,ot=ds(i);if(ot||(i[yn]=ot=new vt(i)),u=ot.add(l,u,f,k,D),u.proxy)return u;if(f=eu(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)zt||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(oo(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function eu(){function i(u){return l.call(i.src,i.listener,u)}const l=nu;return i}function io(i,l,u,f,A){if(Array.isArray(l))for(var D=0;D<l.length;D++)io(i,l[D],u,f,A);else f=d(f)?!!f.capture:!!f,u=ao(u),i&&i[Ce]?(i=i.i,l=String(l).toString(),l in i.g&&(D=i.g[l],u=He(D,u,f,A),-1<u&&(kt(D[u]),Array.prototype.splice.call(D,u,1),D.length==0&&(delete i.g[l],i.h--)))):i&&(i=ds(i))&&(l=i.g[l.toString()],i=-1,l&&(i=He(l,u,f,A)),(u=-1<i?l[i]:null)&&hs(u))}function hs(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Ce])Kt(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(oo(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=ds(l))?(Kt(u,i),u.h==0&&(u.src=null,l[yn]=null)):kt(i)}}}function oo(i){return i in us?us[i]:us[i]="on"+i}function nu(i,l){if(i.da)i=!0;else{l=new fe(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&hs(i),i=u.call(f,l)}return i}function ds(i){return i=i[yn],i instanceof vt?i:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ao(i){return typeof i=="function"?i:(i[fs]||(i[fs]=function(l){return i.handleEvent(l)}),i[fs])}function Nt(){Et.call(this),this.i=new vt(this),this.M=this,this.F=null}V(Nt,Et),Nt.prototype[Ce]=!0,Nt.prototype.removeEventListener=function(i,l,u,f){io(this,i,l,u,f)};function Ut(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new ct(l,i);else if(l instanceof ct)l.target=l.target||i;else{var A=l;l=new ct(f,i),v(l,A)}if(A=!0,u)for(var D=u.length-1;0<=D;D--){var k=l.g=u[D];A=or(k,f,!0,l)&&A}if(k=l.g=i,A=or(k,f,!0,l)&&A,A=or(k,f,!1,l)&&A,u)for(D=0;D<u.length;D++)k=l.g=u[D],A=or(k,f,!1,l)&&A}Nt.prototype.N=function(){if(Nt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)kt(u[f]);delete i.g[l],i.h--}}this.F=null},Nt.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Nt.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function or(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,D=0;D<l.length;++D){var k=l[D];if(k&&!k.da&&k.capture==u){var ot=k.listener,Dt=k.ha||k.src;k.fa&&Kt(i.i,k),A=ot.call(Dt,f)!==!1&&A}}return A&&!f.defaultPrevented}function lo(i,l,u){if(typeof i=="function")u&&(i=T(i,u));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function co(i){i.g=lo(()=>{i.g=null,i.i&&(i.i=!1,co(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ru extends Et{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:co(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(i){Et.call(this),this.h=i,this.g={}}V(_n,Et);var uo=[];function ho(i){G(i.g,function(l,u){this.g.hasOwnProperty(u)&&hs(l)},i),i.g={}}_n.prototype.N=function(){_n.aa.N.call(this),ho(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ms=c.JSON.stringify,su=c.JSON.parse,iu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function ps(){}ps.prototype.h=null;function fo(i){return i.h||(i.h=i.i())}function mo(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gs(){ct.call(this,"d")}V(gs,ct);function ys(){ct.call(this,"c")}V(ys,ct);var Ve={},po=null;function ar(){return po=po||new Nt}Ve.La="serverreachability";function go(i){ct.call(this,Ve.La,i)}V(go,ct);function vn(i){const l=ar();Ut(l,new go(l))}Ve.STAT_EVENT="statevent";function yo(i,l){ct.call(this,Ve.STAT_EVENT,i),this.stat=l}V(yo,ct);function $t(i){const l=ar();Ut(l,new yo(l,i))}Ve.Ma="timingevent";function _o(i,l){ct.call(this,Ve.Ma,i),this.size=l}V(_o,ct);function Tn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function ou(i,l,u,f,A,D){i.info(function(){if(i.g)if(D)for(var k="",ot=D.split("&"),Dt=0;Dt<ot.length;Dt++){var et=ot[Dt].split("=");if(1<et.length){var xt=et[0];et=et[1];var Mt=xt.split("_");k=2<=Mt.length&&Mt[1]=="type"?k+(xt+"="+et+"&"):k+(xt+"=redacted&")}}else k=null;else k=D;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+k})}function au(i,l,u,f,A,D,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+D+" "+k})}function Ke(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+cu(i,u)+(f?" "+f:"")})}function lu(i,l){i.info(function(){return"TIMEOUT: "+l})}In.prototype.info=function(){};function cu(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var D=A[0];if(D!="noop"&&D!="stop"&&D!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return ms(u)}catch{return l}}var lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function cr(){}V(cr,ps),cr.prototype.g=function(){return new XMLHttpRequest},cr.prototype.i=function(){return{}},_s=new cr;function me(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new _n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vo}function vo(){this.i=null,this.g="",this.h=!1}var To={},Es={};function vs(i,l,u){i.L=1,i.v=fr(oe(l)),i.m=u,i.P=!0,Io(i,null)}function Io(i,l){i.F=Date.now(),ur(i),i.A=oe(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Bo(u.i,"t",f),i.C=0,u=i.j.J,i.h=new vo,i.g=ta(i.j,u?l:null,!i.m),0<i.O&&(i.M=new ru(T(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(uo[0]=A.toString()),A=uo);for(var D=0;D<A.length;D++){var k=so(u,A[D],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),vn(),ou(i.i,i.u,i.A,i.l,i.R,i.m)}me.prototype.ca=function(i){i=i.target;const l=this.M;l&&ae(i)==3?l.j():this.Y(i)},me.prototype.Y=function(i){try{if(i==this.g)t:{const Mt=ae(this.g);var l=this.g.Ba();const Qe=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||jo(this.g)))){this.J||Mt!=4||l==7||(l==8||0>=Qe?vn(3):vn(2)),Ts(this);var u=this.g.Z();this.X=u;e:if(wo(this)){var f=jo(this.g);i="";var A=f.length,D=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),wn(this);var k="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(D&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,au(this.i,this.u,this.A,this.l,this.R,Mt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var ot,Dt=this.g;if((ot=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ot)){var et=ot;break e}}et=null}if(u=et)Ke(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,u);else{this.o=!1,this.s=3,$t(12),ke(this),wn(this);break t}}if(this.P){u=!0;let Jt;for(;!this.J&&this.C<k.length;)if(Jt=uu(this,k),Jt==Es){Mt==4&&(this.s=4,$t(14),u=!1),Ke(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==To){this.s=4,$t(15),Ke(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else Ke(this.i,this.l,Jt,null),Is(this,Jt);if(wo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||k.length!=0||this.h.h||(this.s=1,$t(16),u=!1),this.o=this.o&&u,!u)Ke(this.i,this.l,k,"[Invalid Chunked Response]"),ke(this),wn(this);else if(0<k.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Rs(xt),xt.M=!0,$t(11))}}else Ke(this.i,this.l,k,null),Is(this,k);Mt==4&&ke(this),this.o&&!this.J&&(Mt==4?Yo(this.j,this):(this.o=!1,ur(this)))}else Du(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),ke(this),wn(this)}}}catch{}finally{}};function wo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function uu(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?Es:(u=Number(l.substring(u,f)),isNaN(u)?To:(f+=1,f+u>l.length?Es:(l=l.slice(f,f+u),i.C=f+u,l)))}me.prototype.cancel=function(){this.J=!0,ke(this)};function ur(i){i.S=Date.now()+i.I,Ao(i,i.I)}function Ao(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Tn(T(i.ba,i),l)}function Ts(i){i.B&&(c.clearTimeout(i.B),i.B=null)}me.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(lu(this.i,this.A),this.L!=2&&(vn(),$t(17)),ke(this),this.s=2,wn(this)):Ao(this,this.S-i)};function wn(i){i.j.G==0||i.J||Yo(i.j,i)}function ke(i){Ts(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,ho(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Is(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||ws(u.h,i))){if(!i.K&&ws(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Er(u),yr(u);else break t;Ds(u),$t(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Tn(T(u.Za,u),6e3));if(1>=Do(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else xe(u,11)}else if((i.K||u.g==i)&&Er(u),!F(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let et=A[l];if(u.T=et[0],et=et[1],u.G==2)if(et[0]=="c"){u.K=et[1],u.ia=et[2];const xt=et[3];xt!=null&&(u.la=xt,u.j.info("VER="+u.la));const Mt=et[4];Mt!=null&&(u.Aa=Mt,u.j.info("SVER="+u.Aa));const Qe=et[5];Qe!=null&&typeof Qe=="number"&&0<Qe&&(f=1.5*Qe,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Jt=i.g;if(Jt){const Tr=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var D=f.h;D.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(As(D,D.h),D.h=null))}if(f.D){const Ps=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(f.ya=Ps,ut(f.I,f.D,Ps))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=Zo(f,f.J?f.ia:null,f.W),k.K){Ro(f.h,k);var ot=k,Dt=f.L;Dt&&(ot.I=Dt),ot.B&&(Ts(ot),ur(ot)),f.g=k}else Go(f);0<u.i.length&&_r(u)}else et[0]!="stop"&&et[0]!="close"||xe(u,7);else u.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?xe(u,7):bs(u):et[0]!="noop"&&u.l&&u.l.ta(et),u.v=0)}}vn(4)}catch{}}var hu=class{constructor(i,l){this.g=i,this.map=l}};function So(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Do(i){return i.h?1:i.g?i.g.size:0}function ws(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function As(i,l){i.g?i.g.add(l):i.h=l}function Ro(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}So.prototype.cancel=function(){if(this.i=Po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Po(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return P(i.i)}function du(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function fu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function Co(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=fu(i),f=du(i),A=f.length,D=0;D<A;D++)l.call(void 0,f[D],u&&u[D],i)}var Vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mu(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var D=i[u].substring(0,f);A=i[u].substring(f+1)}else D=i[u];l(D,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ne(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ne){this.h=i.h,hr(this,i.j),this.o=i.o,this.g=i.g,dr(this,i.s),this.l=i.l;var l=i.i,u=new bn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),ko(this,u),this.m=i.m}else i&&(l=String(i).match(Vo))?(this.h=!1,hr(this,l[1]||"",!0),this.o=An(l[2]||""),this.g=An(l[3]||"",!0),dr(this,l[4]),this.l=An(l[5]||"",!0),ko(this,l[6]||"",!0),this.m=An(l[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}Ne.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Sn(l,No,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Sn(l,No,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Sn(u,u.charAt(0)=="/"?yu:gu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Sn(u,Eu)),i.join("")};function oe(i){return new Ne(i)}function hr(i,l,u){i.j=u?An(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function dr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function ko(i,l,u){l instanceof bn?(i.i=l,vu(i.i,i.h)):(u||(l=Sn(l,_u)),i.i=new bn(l,i.h))}function ut(i,l,u){i.i.set(l,u)}function fr(i){return ut(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function An(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Sn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,pu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function pu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var No=/[#\/\?@]/g,gu=/[#\?:]/g,yu=/[#\?]/g,_u=/[#\?@]/g,Eu=/#/g;function bn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function pe(i){i.g||(i.g=new Map,i.h=0,i.i&&mu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=bn.prototype,n.add=function(i,l){pe(this),this.i=null,i=We(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function xo(i,l){pe(i),l=We(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Mo(i,l){return pe(i),l=We(i,l),i.g.has(l)}n.forEach=function(i,l){pe(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){pe(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let D=0;D<A.length;D++)u.push(l[f])}return u},n.V=function(i){pe(this);let l=[];if(typeof i=="string")Mo(this,i)&&(l=l.concat(this.g.get(We(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return pe(this),this.i=null,i=We(this,i),Mo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Bo(i,l,u){xo(i,l),0<u.length&&(i.i=null,i.g.set(We(i,l),P(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const D=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=D;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function We(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function vu(i,l){l&&!i.j&&(pe(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(xo(this,f),Bo(this,A,u))},i)),i.j=l}function Tu(i,l){const u=new In;if(c.Image){const f=new Image;f.onload=b(ge,u,"TestLoadImage: loaded",!0,l,f),f.onerror=b(ge,u,"TestLoadImage: error",!1,l,f),f.onabort=b(ge,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=b(ge,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Iu(i,l){const u=new In,f=new AbortController,A=setTimeout(()=>{f.abort(),ge(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(D=>{clearTimeout(A),D.ok?ge(u,"TestPingServer: ok",!0,l):ge(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ge(u,"TestPingServer: error",!1,l)})}function ge(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function wu(){this.g=new iu}function Au(i,l,u){const f=u||"";try{Co(i,function(A,D){let k=A;d(A)&&(k=ms(A)),l.push(f+D+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function mr(i){this.l=i.Ub||null,this.j=i.eb||!1}V(mr,ps),mr.prototype.g=function(){return new pr(this.l,this.j)},mr.prototype.i=function(i){return function(){return i}}({});function pr(i,l){Nt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(pr,Nt),n=pr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Dn(this):Rn(this),this.readyState==3&&Lo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Dn(this))},n.Qa=function(i){this.g&&(this.response=i,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Rn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Fo(i){let l="";return G(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Ss(i,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Fo(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):ut(i,l,u))}function gt(i){Nt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(gt,Nt);var Su=/^https?$/i,bu=["POST","PUT"];n=gt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?fo(this.o):fo(_s),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(D){Oo(this,D);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const D of f.keys())u.set(D,f.get(D));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(D=>D.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(bu,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,k]of u)this.g.setRequestHeader(D,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qo(this),this.u=!0,this.g.send(i),this.u=!1}catch(D){Oo(this,D)}};function Oo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Uo(i),gr(i)}function Uo(i){i.A||(i.A=!0,Ut(i,"complete"),Ut(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Ut(this,"complete"),Ut(this,"abort"),gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gr(this,!0)),gt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$o(this):this.bb())},n.bb=function(){$o(this)};function $o(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ae(i)!=4||i.Z()!=2)){if(i.u&&ae(i)==4)lo(i.Ea,0,i);else if(Ut(i,"readystatechange"),ae(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=k===0){var A=String(i.D).match(Vo)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Su.test(A?A.toLowerCase():"")}u=f}if(u)Ut(i,"complete"),Ut(i,"success");else{i.m=6;try{var D=2<ae(i)?i.g.statusText:""}catch{D=""}i.l=D+" ["+i.Z()+"]",Uo(i)}}finally{gr(i)}}}}function gr(i,l){if(i.g){qo(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Ut(i,"ready");try{u.onreadystatechange=f}catch{}}}function qo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ae(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),su(l)}};function jo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Du(i){const l={};i=(i.g&&2<=ae(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(F(i[f]))continue;var u=y(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const D=l[A]||[];l[A]=D,D.push(u)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function zo(i){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn("baseRetryDelayMs",5e3,i),this.cb=Pn("retryDelaySeedMs",1e4,i),this.Wa=Pn("forwardChannelMaxRetries",2,i),this.wa=Pn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new So(i&&i.concurrentRequestLimit),this.Da=new wu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=zo.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,f){$t(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Zo(this,null,this.W),_r(this)};function bs(i){if(Ho(i),i.G==3){var l=i.U++,u=oe(i.I);if(ut(u,"SID",i.K),ut(u,"RID",l),ut(u,"TYPE","terminate"),Cn(i,u),l=new me(i,i.j,l),l.L=2,l.v=fr(oe(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=ta(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ur(l)}Jo(i)}function yr(i){i.g&&(Rs(i),i.g.cancel(),i.g=null)}function Ho(i){yr(i),i.u&&(c.clearTimeout(i.u),i.u=null),Er(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function _r(i){if(!bo(i.h)&&!i.s){i.s=!0;var l=i.Ga;N||Z(),ft||(N(),ft=!0),pt.add(l,i),i.B=0}}function Ru(i,l){return Do(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Tn(T(i.Ga,i,l),Xo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new me(this,this.j,i);let D=this.o;if(this.S&&(D?(D=p(D),v(D,this.S)):D=this.S),this.m!==null||this.O||(A.H=D,D=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=Wo(this,A,l),u=oe(this.I),ut(u,"RID",i),ut(u,"CVER",22),this.D&&ut(u,"X-HTTP-Session-Id",this.D),Cn(this,u),D&&(this.O?l="headers="+encodeURIComponent(String(Fo(D)))+"&"+l:this.m&&Ss(u,this.m,D)),As(this.h,A),this.Ua&&ut(u,"TYPE","init"),this.P?(ut(u,"$req",l),ut(u,"SID","null"),A.T=!0,vs(A,u,null)):vs(A,u,l),this.G=2}}else this.G==3&&(i?Ko(this,i):this.i.length==0||bo(this.h)||Ko(this))};function Ko(i,l){var u;l?u=l.l:u=i.U++;const f=oe(i.I);ut(f,"SID",i.K),ut(f,"RID",u),ut(f,"AID",i.T),Cn(i,f),i.m&&i.o&&Ss(f,i.m,i.o),u=new me(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Wo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),As(i.h,u),vs(u,f,l)}function Cn(i,l){i.H&&G(i.H,function(u,f){ut(l,f,u)}),i.l&&Co({},function(u,f){ut(l,f,u)})}function Wo(i,l,u){u=Math.min(i.i.length,u);var f=i.l?T(i.l.Na,i.l,i):null;t:{var A=i.i;let D=-1;for(;;){const k=["count="+u];D==-1?0<u?(D=A[0].g,k.push("ofs="+D)):D=0:k.push("ofs="+D);let ot=!0;for(let Dt=0;Dt<u;Dt++){let et=A[Dt].g;const xt=A[Dt].map;if(et-=D,0>et)D=Math.max(0,A[Dt].g-100),ot=!1;else try{Au(xt,k,"req"+et+"_")}catch{f&&f(xt)}}if(ot){f=k.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,f}function Go(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;N||Z(),ft||(N(),ft=!0),pt.add(l,i),i.v=0}}function Ds(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Tn(T(i.Fa,i),Xo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Tn(T(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),yr(this),Qo(this))};function Rs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Qo(i){i.g=new me(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=oe(i.qa);ut(l,"RID","rpc"),ut(l,"SID",i.K),ut(l,"AID",i.T),ut(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ut(l,"TO",i.ja),ut(l,"TYPE","xmlhttp"),Cn(i,l),i.m&&i.o&&Ss(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=fr(oe(l)),u.m=null,u.P=!0,Io(u,i)}n.Za=function(){this.C!=null&&(this.C=null,yr(this),Ds(this),$t(19))};function Er(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Yo(i,l){var u=null;if(i.g==l){Er(i),Rs(i),i.g=null;var f=2}else if(ws(i.h,l))u=l.D,Ro(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=ar(),Ut(f,new _o(f,u)),_r(i)}else Go(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Ru(i,l)||f==2&&Ds(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:xe(i,5);break;case 4:xe(i,10);break;case 3:xe(i,6);break;default:xe(i,2)}}}function Xo(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function xe(i,l){if(i.j.info("Error code "+l),l==2){var u=T(i.fb,i),f=i.Xa;const A=!f;f=new Ne(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hr(f,"https"),fr(f),A?Tu(f.toString(),u):Iu(f.toString(),u)}else $t(2);i.G=0,i.l&&i.l.sa(l),Jo(i),Ho(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function Jo(i){if(i.G=0,i.ka=[],i.l){const l=Po(i.h);(l.length!=0||i.i.length!=0)&&(S(i.ka,l),S(i.ka,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.ra()}}function Zo(i,l,u){var f=u instanceof Ne?oe(u):new Ne(u);if(f.g!="")l&&(f.g=l+"."+f.g),dr(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var D=new Ne(null);f&&hr(D,f),l&&(D.g=l),A&&dr(D,A),u&&(D.l=u),f=D}return u=i.D,l=i.ya,u&&l&&ut(f,u,l),ut(f,"VER",i.la),Cn(i,f),f}function ta(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new gt(new mr({eb:u})):new gt(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ea(){}n=ea.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vr(){}vr.prototype.g=function(i,l){return new Wt(i,l)};function Wt(i,l){Nt.call(this),this.g=new zo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!F(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ge(this)}V(Wt,Nt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){bs(this.g)},Wt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=ms(i),i=u);l.i.push(new hu(l.Ya++,i)),l.G==3&&_r(l)},Wt.prototype.N=function(){this.g.l=null,delete this.j,bs(this.g),delete this.g,Wt.aa.N.call(this)};function na(i){gs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}V(na,gs);function ra(){ys.call(this),this.status=1}V(ra,ys);function Ge(i){this.g=i}V(Ge,ea),Ge.prototype.ua=function(){Ut(this.g,"a")},Ge.prototype.ta=function(i){Ut(this.g,new na(i))},Ge.prototype.sa=function(i){Ut(this.g,new ra)},Ge.prototype.ra=function(){Ut(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,El=function(){return new vr},_l=function(){return ar()},yl=Ve,Zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lr.NO_ERROR=0,lr.TIMEOUT=8,lr.HTTP_ERROR=6,Dr=lr,Eo.COMPLETE="complete",gl=Eo,mo.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",Nt.prototype.listen=Nt.prototype.K,Nn=mo,gt.prototype.listenOnce=gt.prototype.L,gt.prototype.getLastError=gt.prototype.Ka,gt.prototype.getLastErrorCode=gt.prototype.Ba,gt.prototype.getStatus=gt.prototype.Z,gt.prototype.getResponseJson=gt.prototype.Oa,gt.prototype.getResponseText=gt.prototype.oa,gt.prototype.send=gt.prototype.ea,gt.prototype.setWithCredentials=gt.prototype.Ha,pl=gt}).apply(typeof Ir<"u"?Ir:typeof self<"u"?self:typeof window<"u"?window:{});const pa="@firebase/firestore";/**
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
 */class Lt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let dn="10.14.0";/**
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
 */const Oe=new ll("@firebase/firestore");function Vn(){return Oe.logLevel}function M(n,...t){if(Oe.logLevel<=tt.DEBUG){const e=t.map(Ei);Oe.debug(`Firestore (${dn}): ${n}`,...e)}}function he(n,...t){if(Oe.logLevel<=tt.ERROR){const e=t.map(Ei);Oe.error(`Firestore (${dn}): ${n}`,...e)}}function en(n,...t){if(Oe.logLevel<=tt.WARN){const e=t.map(Ei);Oe.warn(`Firestore (${dn}): ${n}`,...e)}}function Ei(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function H(n="Unexpected state"){const t=`FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: `+n;throw he(t),new Error(t)}function it(n,t){n||H()}function W(n,t){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends hn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class le{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class vl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ad{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Lt.UNAUTHENTICATED))}shutdown(){}}class ld{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class cd{constructor(t){this.t=t,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){it(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new le;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new le,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new le)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(it(typeof r.accessToken=="string"),new vl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return it(t===null||typeof t=="string"),new Lt(t)}}class ud{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ud(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){it(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(it(typeof e.token=="string"),this.R=e.token,new dd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function md(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Tl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=md(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function nt(n,t){return n<t?-1:n>t?1:0}function nn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class j{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new j(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(t){this.timestamp=t}static fromTimestamp(t){return new K(t)}static min(){return new K(new j(0,0))}static max(){return new K(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class jn{constructor(t,e,r){e===void 0?e=0:e>t.length&&H(),r===void 0?r=t.length-e:r>t.length-e&&H(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return jn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof jn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ht extends jn{construct(t,e,r){return new ht(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ht(e)}static emptyPath(){return new ht([])}}const pd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends jn{construct(t,e,r){return new Pt(t,e,r)}static isValidIdentifier(t){return pd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pt(e)}static emptyPath(){return new Pt([])}}/**
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
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(ht.fromString(t))}static fromName(t){return new U(ht.fromString(t).popFirst(5))}static empty(){return new U(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ht.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ht.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new ht(t.slice()))}}function gd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new j(e+1,0):new j(e,r));return new Ae(s,U.empty(),t)}function yd(n){return new Ae(n.readTime,n.key,-1)}class Ae{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ae(K.min(),U.empty(),-1)}static max(){return new Ae(K.max(),U.empty(),-1)}}function _d(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
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
 */const Ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Xn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Ed)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Td(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}vi.oe=-1;function Hr(n){return n==null}function Mr(n){return n===0&&1/n==-1/0}function Id(n){return typeof n=="number"&&Number.isInteger(n)&&!Mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ga(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function qe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Il(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Rt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wr(this.root,t,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wr(this.root,t,this.comparator,!0)}}class wr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Rt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Rt.RED,this.left=s??Rt.EMPTY,this.right=o??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Rt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const t=this.left.check();if(t!==this.right.check())throw H();return t+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,r,s,o){return this}insert(t,e,r){return new Rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ct{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ya(this.data.getIterator())}getIteratorFrom(t){return new ya(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ct(this.comparator);return e.data=t,e}}class ya{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(t){this.fields=t,t.sort(Pt.comparator)}static empty(){return new Gt([])}unionWith(t){let e=new Ct(Pt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return nn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class wl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wl("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const wd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Se(n){if(it(!!n),typeof n=="string"){let t=0;const e=wd.exec(n);if(it(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ue(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
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
 */function Ti(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ii(n){const t=n.mapValue.fields.__previous_value__;return Ti(t)?Ii(t):t}function zn(n){const t=Se(n.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
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
 */class Ad{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class Hn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ar={mapValue:{}};function $e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ti(n)?4:bd(n)?9007199254740991:Sd(n)?10:11:H()}function ie(n,t){if(n===t)return!0;const e=$e(n);if(e!==$e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Se(s.timestampValue),c=Se(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ue(s.bytesValue).isEqual(Ue(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return yt(s.geoPointValue.latitude)===yt(o.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return yt(s.integerValue)===yt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=yt(s.doubleValue),c=yt(o.doubleValue);return a===c?Mr(a)===Mr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return nn(n.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ga(a)!==ga(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!ie(a[h],c[h])))return!1;return!0}(n,t);default:return H()}}function Kn(n,t){return(n.values||[]).find(e=>ie(e,t))!==void 0}function rn(n,t){if(n===t)return 0;const e=$e(n),r=$e(t);if(e!==r)return nt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=yt(o.integerValue||o.doubleValue),h=yt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return _a(n.timestampValue,t.timestampValue);case 4:return _a(zn(n),zn(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(o,a){const c=Ue(o),h=Ue(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=nt(c[d],h[d]);if(m!==0)return m}return nt(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=nt(yt(o.latitude),yt(a.latitude));return c!==0?c:nt(yt(o.longitude),yt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ea(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const E=o.fields||{},T=a.fields||{},b=(c=E.value)===null||c===void 0?void 0:c.arrayValue,V=(h=T.value)===null||h===void 0?void 0:h.arrayValue,P=nt(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return P!==0?P:Ea(b,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Ar.mapValue&&a===Ar.mapValue)return 0;if(o===Ar.mapValue)return 1;if(a===Ar.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const T=nt(h[E],m[E]);if(T!==0)return T;const b=rn(c[h[E]],d[m[E]]);if(b!==0)return b}return nt(h.length,m.length)}(n.mapValue,t.mapValue);default:throw H()}}function _a(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=Se(n),r=Se(t),s=nt(e.seconds,r.seconds);return s!==0?s:nt(e.nanos,r.nanos)}function Ea(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=rn(e[s],r[s]);if(o)return o}return nt(e.length,r.length)}function sn(n){return ti(n)}function ti(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Se(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ue(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return U.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ti(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ti(e.fields[a])}`;return s+"}"}(n.mapValue):H()}function va(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ei(n){return!!n&&"integerValue"in n}function wi(n){return!!n&&"arrayValue"in n}function Ta(n){return!!n&&"nullValue"in n}function Ia(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rr(n){return!!n&&"mapValue"in n}function Sd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ln(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return qe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ln(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ln(n.arrayValue.values[e]);return t}return Object.assign({},n)}function bd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ht{constructor(t){this.value=t}static empty(){return new Ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ln(e)}setAll(t){let e=Pt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Ln(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){qe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ht(Ln(this.value))}}function Al(n){const t=[];return qe(n.fields,(e,r)=>{const s=new Pt([e]);if(Rr(r)){const o=Al(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Gt(t)}/**
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
 */class Ft{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Ft(t,0,K.min(),K.min(),K.min(),Ht.empty(),0)}static newFoundDocument(t,e,r,s){return new Ft(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new Ft(t,2,e,K.min(),K.min(),Ht.empty(),0)}static newUnknownDocument(t,e){return new Ft(t,3,e,K.min(),K.min(),Ht.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Br{constructor(t,e){this.position=t,this.inclusive=e}}function wa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),e.key):r=rn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Aa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ie(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Dd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Sl{}class At extends Sl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Pd(t,e,r):e==="array-contains"?new kd(t,r):e==="in"?new Nd(t,r):e==="not-in"?new xd(t,r):e==="array-contains-any"?new Md(t,r):new At(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Cd(t,r):new Vd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(rn(e,this.value)):e!==null&&$e(this.value)===$e(e)&&this.matchesComparison(rn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends Sl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Zt(t,e)}matches(t){return bl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function bl(n){return n.op==="and"}function Dl(n){return Rd(n)&&bl(n)}function Rd(n){for(const t of n.filters)if(t instanceof Zt)return!1;return!0}function ni(n){if(n instanceof At)return n.field.canonicalString()+n.op.toString()+sn(n.value);if(Dl(n))return n.filters.map(t=>ni(t)).join(",");{const t=n.filters.map(e=>ni(e)).join(",");return`${n.op}(${t})`}}function Rl(n,t){return n instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&ie(r.value,s.value)}(n,t):n instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Rl(a,s.filters[c]),!0):!1}(n,t):void H()}function Pl(n){return n instanceof At?function(e){return`${e.field.canonicalString()} ${e.op} ${sn(e.value)}`}(n):n instanceof Zt?function(e){return e.op.toString()+" {"+e.getFilters().map(Pl).join(" ,")+"}"}(n):"Filter"}class Pd extends At{constructor(t,e,r){super(t,e,r),this.key=U.fromName(r.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class Cd extends At{constructor(t,e){super(t,"in",e),this.keys=Cl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vd extends At{constructor(t,e){super(t,"not-in",e),this.keys=Cl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>U.fromName(r.referenceValue))}class kd extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wi(e)&&Kn(e.arrayValue,this.value)}}class Nd extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Kn(this.value.arrayValue,e)}}class xd extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Kn(this.value.arrayValue,e)}}class Md extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Kn(this.value.arrayValue,r))}}/**
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
 */class Bd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Sa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Bd(n,t,e,r,s,o,a)}function Ai(n){const t=W(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ni(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Hr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>sn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>sn(r)).join(",")),t.ue=e}return t.ue}function Si(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Dd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Rl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Aa(n.startAt,t.startAt)&&Aa(n.endAt,t.endAt)}function ri(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class fn{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ld(n,t,e,r,s,o,a,c){return new fn(n,t,e,r,s,o,a,c)}function bi(n){return new fn(n)}function ba(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vl(n){return n.collectionGroup!==null}function Fn(n){const t=W(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ct(Pt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Wn(o,r))}),e.has(Pt.keyField().canonicalString())||t.ce.push(new Wn(Pt.keyField(),r))}return t.ce}function re(n){const t=W(n);return t.le||(t.le=Fd(t,Fn(n))),t.le}function Fd(n,t){if(n.limitType==="F")return Sa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Wn(s.field,o)});const e=n.endAt?new Br(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Br(n.startAt.position,n.startAt.inclusive):null;return Sa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function si(n,t){const e=n.filters.concat([t]);return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Lr(n,t,e){return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Kr(n,t){return Si(re(n),re(t))&&n.limitType===t.limitType}function kl(n){return`${Ai(re(n))}|lt:${n.limitType}`}function Ye(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Pl(s)).join(", ")}]`),Hr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>sn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>sn(s)).join(",")),`Target(${r})`}(re(n))}; limitType=${n.limitType})`}function Wr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Fn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=wa(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,Fn(r),s)||r.endAt&&!function(a,c,h){const d=wa(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,Fn(r),s))}(n,t)}function Od(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nl(n){return(t,e)=>{let r=!1;for(const s of Fn(n)){const o=Ud(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ud(n,t,e){const r=n.field.isKeyField()?U.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?rn(h,d):H()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class mn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Il(this.inner)}size(){return this.innerSize}}/**
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
 */const $d=new mt(U.comparator);function de(){return $d}const xl=new mt(U.comparator);function xn(...n){let t=xl;for(const e of n)t=t.insert(e.key,e);return t}function Ml(n){let t=xl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Le(){return On()}function Bl(){return On()}function On(){return new mn(n=>n.toString(),(n,t)=>n.isEqual(t))}const qd=new mt(U.comparator),jd=new Ct(U.comparator);function X(...n){let t=jd;for(const e of n)t=t.add(e);return t}const zd=new Ct(nt);function Hd(){return zd}/**
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
 */function Di(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(t)?"-0":t}}function Ll(n){return{integerValue:""+n}}function Kd(n,t){return Id(t)?Ll(t):Di(n,t)}/**
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
 */class Gr{constructor(){this._=void 0}}function Wd(n,t,e){return n instanceof Fr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ti(o)&&(o=Ii(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Gn?Ol(n,t):n instanceof Qn?Ul(n,t):function(s,o){const a=Fl(s,o),c=Da(a)+Da(s.Pe);return ei(a)&&ei(s.Pe)?Ll(c):Di(s.serializer,c)}(n,t)}function Gd(n,t,e){return n instanceof Gn?Ol(n,t):n instanceof Qn?Ul(n,t):e}function Fl(n,t){return n instanceof Or?function(r){return ei(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Fr extends Gr{}class Gn extends Gr{constructor(t){super(),this.elements=t}}function Ol(n,t){const e=$l(t);for(const r of n.elements)e.some(s=>ie(s,r))||e.push(r);return{arrayValue:{values:e}}}class Qn extends Gr{constructor(t){super(),this.elements=t}}function Ul(n,t){let e=$l(t);for(const r of n.elements)e=e.filter(s=>!ie(s,r));return{arrayValue:{values:e}}}class Or extends Gr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Da(n){return yt(n.integerValue||n.doubleValue)}function $l(n){return wi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Gn&&s instanceof Gn||r instanceof Qn&&s instanceof Qn?nn(r.elements,s.elements,ie):r instanceof Or&&s instanceof Or?ie(r.Pe,s.Pe):r instanceof Fr&&s instanceof Fr}(n.transform,t.transform)}class Yd{constructor(t,e){this.version=t,this.transformResults=e}}class Yt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Yt}static exists(t){return new Yt(void 0,t)}static updateTime(t){return new Yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Qr{}function ql(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ri(n.key,Yt.none()):new Zn(n.key,n.data,Yt.none());{const e=n.data,r=Ht.empty();let s=new Ct(Pt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Re(n.key,r,new Gt(s.toArray()),Yt.none())}}function Xd(n,t,e){n instanceof Zn?function(s,o,a){const c=s.value.clone(),h=Pa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Re?function(s,o,a){if(!Pr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Pa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(jl(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Un(n,t,e,r){return n instanceof Zn?function(o,a,c,h){if(!Pr(o.precondition,a))return c;const d=o.value.clone(),m=Ca(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Re?function(o,a,c,h){if(!Pr(o.precondition,a))return c;const d=Ca(o.fieldTransforms,h,a),m=a.data;return m.setAll(jl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,c){return Pr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Jd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Fl(r.transform,s||null);o!=null&&(e===null&&(e=Ht.empty()),e.set(r.field,o))}return e||null}function Ra(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&nn(r,s,(o,a)=>Qd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Zn extends Qr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Re extends Qr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function jl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Pa(n,t,e){const r=new Map;it(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Gd(a,c,e[s]))}return r}function Ca(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Wd(o,a,t))}return r}class Ri extends Qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zd extends Qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Xd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Bl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=ql(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&nn(this.mutations,t.mutations,(e,r)=>Ra(e,r))&&nn(this.baseMutations,t.baseMutations,(e,r)=>Ra(e,r))}}class Pi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){it(t.mutations.length===r.length);let s=function(){return qd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Pi(t,e,r,s)}}/**
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
 */class ef{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class nf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Tt,J;function rf(n){switch(n){default:return H();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function zl(n){if(n===void 0)return he("GRPC error has no .code"),R.UNKNOWN;switch(n){case Tt.OK:return R.OK;case Tt.CANCELLED:return R.CANCELLED;case Tt.UNKNOWN:return R.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return R.INTERNAL;case Tt.UNAVAILABLE:return R.UNAVAILABLE;case Tt.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Tt.NOT_FOUND:return R.NOT_FOUND;case Tt.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Tt.ABORTED:return R.ABORTED;case Tt.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Tt.DATA_LOSS:return R.DATA_LOSS;default:return H()}}(J=Tt||(Tt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sf(){return new TextEncoder}/**
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
 */const of=new Fe([4294967295,4294967295],0);function Va(n){const t=sf().encode(n),e=new ml;return e.update(t),new Uint8Array(e.digest())}function ka(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Fe([e,r],0),new Fe([s,o],0)]}class Ci{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Mn(`Invalid padding: ${e}`);if(r<0)throw new Mn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Fe.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Fe.fromNumber(r)));return s.compare(of)===1&&(s=new Fe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Va(t),[r,s]=ka(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ci(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Va(t),[r,s]=ka(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,tr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Yr(K.min(),s,new mt(nt),de(),X())}}class tr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new tr(r,e,X(),X(),X())}}/**
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
 */class Cr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Hl{constructor(t,e){this.targetId=t,this.me=e}}class Kl{constructor(t,e,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Na{constructor(){this.fe=0,this.ge=Ma(),this.pe=Vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=X(),e=X(),r=X();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:H()}}),new tr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ma()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,it(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class af{constructor(t){this.Le=t,this.Be=new Map,this.ke=de(),this.qe=xa(),this.Qe=new mt(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:H()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(ri(o))if(r===0){const a=new U(o.path);this.Ue(e,a,Ft.newNoDocument(a,K.min()))}else it(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=Ue(r).toUint8Array()}catch(h){if(h instanceof wl)return en("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ci(a,s,o)}catch(h){return en(h instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&ri(c.target)){const h=new U(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Ft.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=X();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Yr(t,e,this.Qe,this.ke,r);return this.ke=de(),this.qe=xa(),this.Qe=new mt(nt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Na,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ct(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Na),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function xa(){return new mt(U.comparator)}function Ma(){return new mt(U.comparator)}const lf={asc:"ASCENDING",desc:"DESCENDING"},cf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uf={and:"AND",or:"OR"};class hf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ii(n,t){return n.useProto3Json||Hr(t)?t:{value:t}}function Ur(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function df(n,t){return Ur(n,t.toTimestamp())}function se(n){return it(!!n),K.fromTimestamp(function(e){const r=Se(e);return new j(r.seconds,r.nanos)}(n))}function Vi(n,t){return oi(n,t).canonicalString()}function oi(n,t){const e=function(s){return new ht(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Gl(n){const t=ht.fromString(n);return it(Zl(t)),t}function ai(n,t){return Vi(n.databaseId,t.path)}function xs(n,t){const e=Gl(t);if(e.get(1)!==n.databaseId.projectId)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(Yl(e))}function Ql(n,t){return Vi(n.databaseId,t)}function ff(n){const t=Gl(n);return t.length===4?ht.emptyPath():Yl(t)}function li(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yl(n){return it(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ba(n,t,e){return{name:ai(n,t),fields:e.value.mapValue.fields}}function mf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(it(m===void 0||typeof m=="string"),Vt.fromBase64String(m||"")):(it(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Vt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?R.UNKNOWN:zl(d.code);return new x(m,d.message||"")}(a);e=new Kl(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=xs(n,r.document.name),o=se(r.document.updateTime),a=r.document.createTime?se(r.document.createTime):K.min(),c=new Ht({mapValue:{fields:r.document.fields}}),h=Ft.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Cr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=xs(n,r.document),o=r.readTime?se(r.readTime):K.min(),a=Ft.newNoDocument(s,o),c=r.removedTargetIds||[];e=new Cr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=xs(n,r.document),o=r.removedTargetIds||[];e=new Cr([],o,s,null)}else{if(!("filter"in t))return H();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new nf(s,o),c=r.targetId;e=new Hl(c,a)}}return e}function pf(n,t){let e;if(t instanceof Zn)e={update:Ba(n,t.key,t.value)};else if(t instanceof Ri)e={delete:ai(n,t.key)};else if(t instanceof Re)e={update:Ba(n,t.key,t.data),updateMask:Af(t.fieldMask)};else{if(!(t instanceof Zd))return H();e={verify:ai(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Or)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw H()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:df(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:H()}(n,t.precondition)),e}function gf(n,t){return n&&n.length>0?(it(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?se(s.updateTime):se(o);return a.isEqual(K.min())&&(a=se(o)),new Yd(a,s.transformResults||[])}(e,t))):[]}function yf(n,t){return{documents:[Ql(n,t.path)]}}function _f(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ql(n,s);const o=function(d){if(d.length!==0)return Jl(Zt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(T){return{field:Xe(T.field),direction:Tf(T.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=ii(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Ef(n){let t=ff(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){it(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const T=Xl(E);return T instanceof Zt&&Dl(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(T=>function(V){return new Wn(Je(V.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(e.orderBy));let c=null;e.limit&&(c=function(E){let T;return T=typeof E=="object"?E.value:E,Hr(T)?null:T}(e.limit));let h=null;e.startAt&&(h=function(E){const T=!!E.before,b=E.values||[];return new Br(b,T)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const T=!E.before,b=E.values||[];return new Br(b,T)}(e.endAt)),Ld(t,s,a,o,c,"F",h,d)}function vf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Je(e.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Je(e.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Je(e.unaryFilter.field);return At.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Je(e.unaryFilter.field);return At.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(e){return At.create(Je(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Zt.create(e.compositeFilter.filters.map(r=>Xl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(n):H()}function Tf(n){return lf[n]}function If(n){return cf[n]}function wf(n){return uf[n]}function Xe(n){return{fieldPath:n.canonicalString()}}function Je(n){return Pt.fromServerFormat(n.fieldPath)}function Jl(n){return n instanceof At?function(e){if(e.op==="=="){if(Ia(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NAN"}};if(Ta(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ia(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NAN"}};if(Ta(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xe(e.field),op:If(e.op),value:e.value}}}(n):n instanceof Zt?function(e){const r=e.getFilters().map(s=>Jl(s));return r.length===1?r[0]:{compositeFilter:{op:wf(e.op),filters:r}}}(n):H()}function Af(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class _e{constructor(t,e,r,s,o=K.min(),a=K.min(),c=Vt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new _e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Sf{constructor(t){this.ct=t}}function bf(n){const t=Ef({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Lr(t,t.limit,"L"):t}/**
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
 */class Df{constructor(){this.un=new Rf}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Ae.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Ae.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ct(ht.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ct(ht.comparator)).toArray()}}/**
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
 */class on{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new on(0)}static kn(){return new on(-1)}}/**
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
 */class Pf{constructor(){this.changes=new mn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ft.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Cf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Vf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Un(r.mutation,s,Gt.empty(),j.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=Le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=xn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=de();const a=On(),c=function(){return On()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Re)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Un(m.mutation,d,m.mutation.getFieldMask(),j.now())):a.set(d.key,Gt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var E;return c.set(d,new Cf(m,(E=a.get(d))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=On();let s=new mt((a,c)=>a-c),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Gt.empty();m=c.applyToLocalView(d,m),r.set(h,m);const E=(s.get(c.batchId)||X()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,E=Bl();m.forEach(T=>{if(!o.has(T)){const b=ql(e.get(T),r.get(T));b!==null&&E.set(T,b),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(Le());let c=-1,h=o;return a.next(d=>C.forEach(d,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(T=>{h=h.insert(m,T)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,X())).next(m=>({batchId:c,changes:Ml(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(r=>{let s=xn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=xn();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const d=function(E,T){return new fn(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((E,T)=>{a=a.insert(E,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ft.newInvalidDocument(m)))});let c=xn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Un(m.mutation,d,Gt.empty(),j.now()),Wr(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class kf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:se(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:bf(s.bundledQuery),readTime:se(s.readTime)}}(e)),C.resolve()}}/**
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
 */class Nf{constructor(){this.overlays=new mt(U.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Le();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=Le(),o=e.length+1,a=new U(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new mt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Le(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return C.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ef(e,r));let o=this.Ir.get(e);o===void 0&&(o=X(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class xf{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class ki{constructor(){this.Tr=new Ct(bt.Er),this.dr=new Ct(bt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new bt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new bt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new U(new ht([])),r=new bt(e,t),s=new bt(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new U(new ht([])),r=new bt(e,t),s=new bt(e,t+1);let o=X();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new bt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class bt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return U.comparator(t.key,e.key)||nt(t.wr,e.wr)}static Ar(t,e){return nt(t.wr,e.wr)||U.comparator(t.key,e.key)}}/**
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
 */class Mf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Ct(bt.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tf(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new bt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new bt(e,0),s=new bt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ct(nt);return e.forEach(s=>{const o=new bt(s,0),a=new bt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new bt(new U(o),0);let c=new Ct(nt);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),C.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){it(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,s=>{const o=new bt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new bt(e,0),s=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bf{constructor(t){this.Mr=t,this.docs=function(){return new mt(U.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Ft.newInvalidDocument(e))}getEntries(t,e){let r=de();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ft.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=de();const a=e.path,c=new U(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||_d(yd(m),r)<=0||(s.has(m.key)||Wr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){H()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Lf(this)}getSize(t){return C.resolve(this.size)}}class Lf extends Pf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Ff{constructor(t){this.persistence=t,this.Nr=new mn(e=>Ai(e),Si),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ki,this.targetCount=0,this.kr=on.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new on(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
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
 */class Of{constructor(t,e){this.qr={},this.overlays={},this.Qr=new vi(0),this.Kr=!1,this.Kr=!0,this.$r=new xf,this.referenceDelegate=t(this),this.Ur=new Ff(this),this.indexManager=new Df,this.remoteDocumentCache=function(s){return new Bf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Sf(e),this.Gr=new kf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Mf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new Uf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Uf extends vd{constructor(t){super(),this.currentSequenceNumber=t}}class Ni{constructor(t){this.persistence=t,this.Jr=new ki,this.Yr=null}static Zr(t){return new Ni(t)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=U.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class xi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new xi(t,e.fromCache,r,s)}}/**
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
 */class $f{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class qf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ju()?8:Td($u())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new $f;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(Vn()<=tt.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(Vn()<=tt.DEBUG&&M("QueryEngine","Query:",Ye(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vn()<=tt.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,re(e))):C.resolve())}Yi(t,e){if(ba(e))return C.resolve(null);let r=re(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Lr(e,null,"F"),r=re(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=X(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Lr(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return ba(e)||s.isEqual(K.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?C.resolve(null):(Vn()<=tt.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ye(e)),this.rs(t,a,e,gd(s,-1)).next(c=>c))})}ts(t,e){let r=new Ct(Nl(t));return e.forEach((s,o)=>{Wr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return Vn()<=tt.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ye(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ae.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class jf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new mt(nt),this._s=new mn(o=>Ai(o),Si),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function zf(n,t,e,r){return new jf(n,t,e,r)}async function tc(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=X();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Hf(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const E=d.batch,T=E.keys();let b=C.resolve();return T.forEach(V=>{b=b.next(()=>m.getEntry(h,V)).next(P=>{const S=d.docVersions.get(V);it(S!==null),P.version.compareTo(S)<0&&(E.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function ec(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Kf(n,t){const e=W(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,E)=>{const T=s.get(E);if(!T)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,E)));let b=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?b=b.withResumeToken(Vt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(E,b),function(P,S,L){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(T,b,m)&&c.push(e.Ur.updateTargetData(o,b))});let h=de(),d=X();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Wf(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(K.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(E=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return C.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function Wf(n,t,e){let r=X(),s=X();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=de();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(K.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function Gf(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Qf(n,t){const e=W(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new _e(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ci(n,t,e){const r=W(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Jn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function La(n,t,e){const r=W(n);let s=K.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const E=W(h),T=E._s.get(m);return T!==void 0?C.resolve(E.os.get(T)):E.Ur.getTargetData(d,m)}(r,a,re(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:X())).next(c=>(Yf(r,Od(t),c),{documents:c,Ts:o})))}function Yf(n,t,e){let r=n.us.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Fa{constructor(){this.activeTargetIds=Hd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xf{constructor(){this.so=new Fa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Fa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Jf{_o(t){}shutdown(){}}/**
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
 */class Oa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sr=null;function Ms(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
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
 */const Zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tm{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Bt="WebChannelConnection";class em extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=Ms(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw en("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Zf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Ms();return new Promise((a,c)=>{const h=new pl;h.setWithCredentials(!0),h.listenOnce(gl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Dr.NO_ERROR:const m=h.getResponseJson();M(Bt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Dr.TIMEOUT:M(Bt,`RPC '${t}' ${o} timed out`),c(new x(R.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const E=h.getStatus();if(M(Bt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const b=T==null?void 0:T.error;if(b&&b.status&&b.message){const V=function(S){const L=S.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(L)>=0?L:R.UNKNOWN}(b.status);c(new x(V,b.message))}else c(new x(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(R.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{M(Bt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);M(Bt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=Ms(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=El(),c=_l(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(Bt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let T=!1,b=!1;const V=new tm({Io:S=>{b?M(Bt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(T||(M(Bt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),T=!0),M(Bt,`RPC '${t}' stream ${s} sending:`,S),E.send(S))},To:()=>E.close()}),P=(S,L,F)=>{S.listen(L,B=>{try{F(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return P(E,Nn.EventType.OPEN,()=>{b||(M(Bt,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),P(E,Nn.EventType.CLOSE,()=>{b||(b=!0,M(Bt,`RPC '${t}' stream ${s} transport closed`),V.So())}),P(E,Nn.EventType.ERROR,S=>{b||(b=!0,en(Bt,`RPC '${t}' stream ${s} transport errored:`,S),V.So(new x(R.UNAVAILABLE,"The operation could not be completed")))}),P(E,Nn.EventType.MESSAGE,S=>{var L;if(!b){const F=S.data[0];it(!!F);const B=F,Q=B.error||((L=B[0])===null||L===void 0?void 0:L.error);if(Q){M(Bt,`RPC '${t}' stream ${s} received error:`,Q);const q=Q.status;let G=function(_){const v=Tt[_];if(v!==void 0)return zl(v)}(q),I=Q.message;G===void 0&&(G=R.INTERNAL,I="Unknown error status: "+q+" with message "+Q.message),b=!0,V.So(new x(G,I)),E.close()}else M(Bt,`RPC '${t}' stream ${s} received:`,F),V.bo(F)}}),P(c,yl.STAT_EVENT,S=>{S.stat===Zs.PROXY?M(Bt,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===Zs.NOPROXY&&M(Bt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Bs(){return typeof document<"u"?document:null}/**
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
 */function Xr(n){return new hf(n,!0)}/**
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
 */class nc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class rc{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(he(e.toString()),he("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new x(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nm extends rc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=mf(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?se(a.readTime):K.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=li(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=ri(h)?{documents:yf(o,h)}:{query:_f(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Wl(o,a.resumeToken);const d=ii(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){c.readTime=Ur(o,a.snapshotVersion.toTimestamp());const d=ii(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=vf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=li(this.serializer),e.removeTarget=t,this.a_(e)}}class rm extends rc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return it(!!t.streamToken),this.lastStreamToken=t.streamToken,it(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){it(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gf(t.writeResults,t.commitTime),r=se(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=li(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>pf(this.serializer,r))};this.a_(e)}}/**
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
 */class sm extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,oi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(R.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,oi(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class im{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(he(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class om{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{je(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=W(h);d.L_.add(4),await er(d),d.q_.set("Unknown"),d.L_.delete(4),await Jr(d)}(this))})}),this.q_=new im(r,s)}}async function Jr(n){if(je(n))for(const t of n.B_)await t(!0)}async function er(n){for(const t of n.B_)await t(!1)}function sc(n,t){const e=W(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Fi(e)?Li(e):pn(e).r_()&&Bi(e,t))}function Mi(n,t){const e=W(n),r=pn(e);e.N_.delete(t),r.r_()&&ic(e,t),e.N_.size===0&&(r.r_()?r.o_():je(e)&&e.q_.set("Unknown"))}function Bi(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}pn(n).A_(t)}function ic(n,t){n.Q_.xe(t),pn(n).R_(t)}function Li(n){n.Q_=new af({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),pn(n).start(),n.q_.v_()}function Fi(n){return je(n)&&!pn(n).n_()&&n.N_.size>0}function je(n){return W(n).L_.size===0}function oc(n){n.Q_=void 0}async function am(n){n.q_.set("Online")}async function lm(n){n.N_.forEach((t,e)=>{Bi(n,t)})}async function cm(n,t){oc(n),Fi(n)?(n.q_.M_(t),Li(n)):n.q_.set("Unknown")}async function um(n,t,e){if(n.q_.set("Online"),t instanceof Kl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $r(n,r)}else if(t instanceof Cr?n.Q_.Ke(t):t instanceof Hl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(K.min()))try{const r=await ec(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(Vt.EMPTY_BYTE_STRING,m.snapshotVersion)),ic(o,h);const E=new _e(m.target,h,d,m.sequenceNumber);Bi(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await $r(n,r)}}async function $r(n,t,e){if(!Jn(t))throw t;n.L_.add(1),await er(n),n.q_.set("Offline"),e||(e=()=>ec(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Jr(n)})}function ac(n,t){return t().catch(e=>$r(n,e,t))}async function Zr(n){const t=W(n),e=be(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hm(t);)try{const s=await Gf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,dm(t,s)}catch(s){await $r(t,s)}lc(t)&&cc(t)}function hm(n){return je(n)&&n.O_.length<10}function dm(n,t){n.O_.push(t);const e=be(n);e.r_()&&e.V_&&e.m_(t.mutations)}function lc(n){return je(n)&&!be(n).n_()&&n.O_.length>0}function cc(n){be(n).start()}async function fm(n){be(n).p_()}async function mm(n){const t=be(n);for(const e of n.O_)t.m_(e.mutations)}async function pm(n,t,e){const r=n.O_.shift(),s=Pi.from(r,t,e);await ac(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zr(n)}async function gm(n,t){t&&be(n).V_&&await async function(r,s){if(function(a){return rf(a)&&a!==R.ABORTED}(s.code)){const o=r.O_.shift();be(r).s_(),await ac(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Zr(r)}}(n,t),lc(n)&&cc(n)}async function Ua(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=je(e);e.L_.add(3),await er(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Jr(e)}async function ym(n,t){const e=W(n);t?(e.L_.delete(2),await Jr(e)):t||(e.L_.add(2),await er(e),e.q_.set("Unknown"))}function pn(n){return n.K_||(n.K_=function(e,r,s){const o=W(e);return o.w_(),new nm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:am.bind(null,n),Ro:lm.bind(null,n),mo:cm.bind(null,n),d_:um.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Fi(n)?Li(n):n.q_.set("Unknown")):(await n.K_.stop(),oc(n))})),n.K_}function be(n){return n.U_||(n.U_=function(e,r,s){const o=W(e);return o.w_(),new rm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fm.bind(null,n),mo:gm.bind(null,n),f_:mm.bind(null,n),g_:pm.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Zr(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Oi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Oi(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ui(n,t){if(he("AsyncQueue",`${t}: ${n}`),Jn(n))return new x(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class tn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||U.comparator(e.key,r.key):(e,r)=>U.comparator(e.key,r.key),this.keyedMap=xn(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new tn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof tn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new tn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class $a{constructor(){this.W_=new mt(U.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):H():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class an{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new an(t,e,tn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _m{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Em{constructor(){this.queries=qa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=W(e),o=s.queries;s.queries=qa(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new x(R.ABORTED,"Firestore shutting down"))}}function qa(){return new mn(n=>kl(n),Kr)}async function uc(n,t){const e=W(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new _m,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Ui(a,`Initialization of query '${Ye(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&$i(e)}async function hc(n,t){const e=W(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function vm(n,t){const e=W(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&$i(e)}function Tm(n,t,e){const r=W(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function $i(n){n.Y_.forEach(t=>{t.next()})}var ui,ja;(ja=ui||(ui={})).ea="default",ja.Cache="cache";class dc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new an(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=an.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ui.Cache}}/**
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
 */class fc{constructor(t){this.key=t}}class mc{constructor(t){this.key=t}}class Im{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=Nl(t),this.Ra=new tn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new $a,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const T=s.get(m),b=Wr(this.query,E)?E:null,V=!!T&&this.mutatedKeys.has(T.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let S=!1;T&&b?T.data.isEqual(b.data)?V!==P&&(r.track({type:3,doc:b}),S=!0):this.ga(T,b)||(r.track({type:2,doc:b}),S=!0,(h&&this.Aa(b,h)>0||d&&this.Aa(b,d)<0)&&(c=!0)):!T&&b?(r.track({type:0,doc:b}),S=!0):T&&!b&&(r.track({type:1,doc:T}),S=!0,(h||d)&&(c=!0)),S&&(b?(a=a.add(b),o=P?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,E)=>function(b,V){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return P(b)-P(V)}(m.type,E.type)||this.Aa(m.doc,E.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new an(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $a,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new mc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new fc(r))}),e}ba(t){this.Ta=t.Ts,this.da=X();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return an.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Am{constructor(t){this.key=t,this.va=!1}}class Sm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new mn(c=>kl(c),Kr),this.Ma=new Map,this.xa=new Set,this.Oa=new mt(U.comparator),this.Na=new Map,this.La=new ki,this.Ba={},this.ka=new Map,this.qa=on.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function bm(n,t,e=!0){const r=vc(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await pc(r,t,e,!0),s}async function Dm(n,t){const e=vc(n);await pc(e,t,!0,!1)}async function pc(n,t,e,r){const s=await Qf(n.localStore,re(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Rm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&sc(n.remoteStore,s),c}async function Rm(n,t,e,r,s){n.Ka=(E,T,b)=>async function(P,S,L,F){let B=S.view.ma(L);B.ns&&(B=await La(P.localStore,S.query,!1).then(({documents:I})=>S.view.ma(I,B)));const Q=F&&F.targetChanges.get(S.targetId),q=F&&F.targetMismatches.get(S.targetId)!=null,G=S.view.applyChanges(B,P.isPrimaryClient,Q,q);return Ha(P,S.targetId,G.wa),G.snapshot}(n,E,T,b);const o=await La(n.localStore,t,!0),a=new Im(t,o.Ts),c=a.ma(o.documents),h=tr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Ha(n,e,d.wa);const m=new wm(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function Pm(n,t,e){const r=W(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Kr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ci(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Mi(r.remoteStore,s.targetId),hi(r,s.targetId)}).catch(Xn)):(hi(r,s.targetId),await ci(r.localStore,s.targetId,!0))}async function Cm(n,t){const e=W(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Mi(e.remoteStore,r.targetId))}async function Vm(n,t,e){const r=Fm(n);try{const s=await function(a,c){const h=W(a),d=j.now(),m=c.reduce((b,V)=>b.add(V.key),X());let E,T;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=de(),P=X();return h.cs.getEntries(b,m).next(S=>{V=S,V.forEach((L,F)=>{F.isValidDocument()||(P=P.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,V)).next(S=>{E=S;const L=[];for(const F of c){const B=Jd(F,E.get(F.key).overlayedDocument);B!=null&&L.push(new Re(F.key,B,Al(B.value.mapValue),Yt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,L,c)}).next(S=>{T=S;const L=S.applyToLocalDocumentSet(E,P);return h.documentOverlayCache.saveOverlays(b,S.batchId,L)})}).then(()=>({batchId:T.batchId,changes:Ml(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new mt(nt)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await nr(r,s.changes),await Zr(r.remoteStore)}catch(s){const o=Ui(s,"Failed to persist write");e.reject(o)}}async function gc(n,t){const e=W(n);try{const r=await Kf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(it(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?it(a.va):s.removedDocuments.size>0&&(it(a.va),a.va=!1))}),await nr(e,r,t)}catch(r){await Xn(r)}}function za(n,t,e){const r=W(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=W(a);h.onlineState=c;let d=!1;h.queries.forEach((m,E)=>{for(const T of E.j_)T.Z_(c)&&(d=!0)}),d&&$i(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function km(n,t,e){const r=W(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new mt(U.comparator);a=a.insert(o,Ft.newNoDocument(o,K.min()));const c=X().add(o),h=new Yr(K.min(),new Map,new mt(nt),a,c);await gc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),qi(r)}else await ci(r.localStore,t,!1).then(()=>hi(r,t,e)).catch(Xn)}async function Nm(n,t){const e=W(n),r=t.batch.batchId;try{const s=await Hf(e.localStore,t);_c(e,r,null),yc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await nr(e,s)}catch(s){await Xn(s)}}async function xm(n,t,e){const r=W(n);try{const s=await function(a,c){const h=W(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(E=>(it(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);_c(r,t,e),yc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await nr(r,s)}catch(s){await Xn(s)}}function yc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function _c(n,t,e){const r=W(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function hi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Ec(n,r)})}function Ec(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Mi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),qi(n))}function Ha(n,t,e){for(const r of e)r instanceof fc?(n.La.addReference(r.key,t),Mm(n,r)):r instanceof mc?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Ec(n,r.key)):H()}function Mm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),qi(n))}function qi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new U(ht.fromString(t)),r=n.qa.next();n.Na.set(r,new Am(e)),n.Oa=n.Oa.insert(e,r),sc(n.remoteStore,new _e(re(bi(e.path)),r,"TargetPurposeLimboResolution",vi.oe))}}async function nr(n,t,e){const r=W(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=xi.Wi(h.targetId,d);o.push(E)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=W(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>C.forEach(d,T=>C.forEach(T.$i,b=>m.persistence.referenceDelegate.addReference(E,T.targetId,b)).next(()=>C.forEach(T.Ui,b=>m.persistence.referenceDelegate.removeReference(E,T.targetId,b)))))}catch(E){if(!Jn(E))throw E;M("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const T=E.targetId;if(!E.fromCache){const b=m.os.get(T),V=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(V);m.os=m.os.insert(T,P)}}}(r.localStore,o))}async function Bm(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await tc(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new x(R.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await nr(e,r.hs)}}function Lm(n,t){const e=W(n),r=e.Na.get(t);if(r&&r.va)return X().add(r.key);{let s=X();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function vc(n){const t=W(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=gc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=km.bind(null,t),t.Ca.d_=vm.bind(null,t.eventManager),t.Ca.$a=Tm.bind(null,t.eventManager),t}function Fm(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xm.bind(null,t),t}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return zf(this.persistence,new qf,t.initialUser,this.serializer)}Ga(t){return new Of(Ni.Zr,this.serializer)}Wa(t){return new Xf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class di{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>za(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bm.bind(null,this.syncEngine),await ym(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Em}()}createDatastore(t){const e=Xr(t.databaseInfo.databaseId),r=function(o){return new em(o)}(t.databaseInfo);return function(o,a,c,h){return new sm(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new om(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>za(this.syncEngine,e,0),function(){return Oa.D()?new Oa:new Jf}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const E=new Sm(s,o,a,c,h,d);return m&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=W(s);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await er(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}di.provider={build:()=>new di};/**
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
 */class Tc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):he("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Om{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Lt.UNAUTHENTICATED,this.clientId=Tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ui(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ls(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ka(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Um(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ua(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ua(t.remoteStore,s)),n._onlineComponents=t}async function Um(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ls(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;en("Error using user provided cache. Falling back to memory cache: "+e),await Ls(n,new qr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Ls(n,new qr);return n._offlineComponents}async function Ic(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Ka(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Ka(n,new di))),n._onlineComponents}function $m(n){return Ic(n).then(t=>t.syncEngine)}async function wc(n){const t=await Ic(n),e=t.eventManager;return e.onListen=bm.bind(null,t.syncEngine),e.onUnlisten=Pm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Cm.bind(null,t.syncEngine),e}function qm(n,t,e={}){const r=new le;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Tc({next:T=>{m.Za(),a.enqueueAndForget(()=>hc(o,E));const b=T.docs.has(c);!b&&T.fromCache?d.reject(new x(R.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&T.fromCache&&h&&h.source==="server"?d.reject(new x(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),E=new dc(bi(c.path),m,{includeMetadataChanges:!0,_a:!0});return uc(o,E)}(await wc(n),n.asyncQueue,t,e,r)),r.promise}function jm(n,t,e={}){const r=new le;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Tc({next:T=>{m.Za(),a.enqueueAndForget(()=>hc(o,E)),T.fromCache&&h.source==="server"?d.reject(new x(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),E=new dc(c,m,{includeMetadataChanges:!0,_a:!0});return uc(o,E)}(await wc(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Ac(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Wa=new Map;/**
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
 */function Sc(n,t,e){if(!e)throw new x(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function zm(n,t,e,r){if(t===!0&&r===!0)throw new x(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ga(n){if(!U.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qa(n){if(U.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ts(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":H()}function te(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ts(n);throw new x(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ya{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ac((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class es{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ya({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ya(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ad;switch(r.type){case"firstParty":return new hd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Wa.get(e);r&&(M("ComponentProvider","Removing Datastore"),Wa.delete(e),r.terminate())}(this),Promise.resolve()}}function Hm(n,t,e,r={}){var s;const o=(n=te(n,es))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&en("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Lt.MOCK_USER;else{c=Uu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Lt(d)}n._authCredentials=new ld(new vl(c,h))}}/**
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
 */class Pe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Pe(this.firestore,t,this._query)}}class jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jt(this.firestore,t,this._key)}}class Ie extends Pe{constructor(t,e,r){super(t,e,bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jt(this.firestore,null,new U(t))}withConverter(t){return new Ie(this.firestore,t,this._path)}}function _t(n,t,...e){if(n=ce(n),Sc("collection","path",t),n instanceof es){const r=ht.fromString(t,...e);return Qa(r),new Ie(n,null,r)}{if(!(n instanceof jt||n instanceof Ie))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ht.fromString(t,...e));return Qa(r),new Ie(n.firestore,null,r)}}function gn(n,t,...e){if(n=ce(n),arguments.length===1&&(t=Tl.newId()),Sc("doc","path",t),n instanceof es){const r=ht.fromString(t,...e);return Ga(r),new jt(n,null,new U(r))}{if(!(n instanceof jt||n instanceof Ie))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ht.fromString(t,...e));return Ga(r),new jt(n.firestore,n instanceof Ie?n.converter:null,new U(r))}}/**
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
 */class Xa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nc(this,"async_queue_retry"),this.Vu=()=>{const r=Bs();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Bs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new le;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Jn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw he("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Oi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class ze extends es{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Xa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Xa(t),this._firestoreClient=void 0,await t}}}function Km(n,t){const e=typeof n=="object"?n:Qh(),r=typeof n=="string"?n:"(default)",s=Hh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Fu("firestore");o&&Hm(s,...o)}return s}function ji(n){if(n._terminated)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wm(n),n._firestoreClient}function Wm(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new Ad(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ac(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Om(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ln(Vt.fromBase64String(t))}catch(e){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ln(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ns{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zi{constructor(t){this._methodName=t}}/**
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
 */class Hi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */class Ki{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Gm=/^__.*__$/;class Qm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Re(t,this.data,this.fieldMask,e,this.fieldTransforms):new Zn(t,this.data,e,this.fieldTransforms)}}class bc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Re(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Dc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Wi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Wi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return jr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Dc(this.Cu)&&Gm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Ym{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Xr(t)}Qu(t,e,r,s=!1){return new Wi({Cu:t,methodName:e,qu:r,path:Pt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rs(n){const t=n._freezeSettings(),e=Xr(n._databaseId);return new Ym(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Rc(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);Gi("Data must be an object, but it was:",a,r);const c=Pc(r,a);let h,d;if(o.merge)h=new Gt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const T=fi(t,E,e);if(!a.contains(T))throw new x(R.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Vc(m,T)||m.push(T)}h=new Gt(m),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new Qm(new Ht(c),h,d)}class ss extends zi{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ss}}function Xm(n,t,e,r){const s=n.Qu(1,t,e);Gi("Data must be an object, but it was:",s,r);const o=[],a=Ht.empty();qe(r,(h,d)=>{const m=Qi(t,h,e);d=ce(d);const E=s.Nu(m);if(d instanceof ss)o.push(m);else{const T=rr(d,E);T!=null&&(o.push(m),a.set(m,T))}});const c=new Gt(o);return new bc(a,c,s.fieldTransforms)}function Jm(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[fi(t,r,e)],h=[s];if(o.length%2!=0)throw new x(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)c.push(fi(t,o[T])),h.push(o[T+1]);const d=[],m=Ht.empty();for(let T=c.length-1;T>=0;--T)if(!Vc(d,c[T])){const b=c[T];let V=h[T];V=ce(V);const P=a.Nu(b);if(V instanceof ss)d.push(b);else{const S=rr(V,P);S!=null&&(d.push(b),m.set(b,S))}}const E=new Gt(d);return new bc(m,E,a.fieldTransforms)}function Zm(n,t,e,r=!1){return rr(e,n.Qu(r?4:3,t))}function rr(n,t){if(Cc(n=ce(n)))return Gi("Unsupported field value:",t,n),Pc(n,t);if(n instanceof zi)return function(r,s){if(!Dc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=rr(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=j.fromDate(r);return{timestampValue:Ur(s.serializer,o)}}if(r instanceof j){const o=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ur(s.serializer,o)}}if(r instanceof Hi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ln)return{bytesValue:Wl(s.serializer,r._byteString)};if(r instanceof jt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Vi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ki)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Di(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ts(r)}`)}(n,t)}function Pc(n,t){const e={};return Il(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qe(n,(r,s)=>{const o=rr(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Cc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof j||n instanceof Hi||n instanceof ln||n instanceof jt||n instanceof zi||n instanceof Ki)}function Gi(n,t,e){if(!Cc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ts(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function fi(n,t,e){if((t=ce(t))instanceof ns)return t._internalPath;if(typeof t=="string")return Qi(n,t);throw jr("Field path arguments must be of type string or ",n,!1,void 0,e)}const tp=new RegExp("[~\\*/\\[\\]]");function Qi(n,t,e){if(t.search(tp)>=0)throw jr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ns(...t.split("."))._internalPath}catch{throw jr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function jr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(R.INVALID_ARGUMENT,c+n+h)}function Vc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class kc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ep(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(is("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ep extends kc{data(){return super.data()}}function is(n,t){return typeof t=="string"?Qi(n,t):t instanceof ns?t._internalPath:t._delegate._internalPath}/**
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
 */function np(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yi{}class Xi extends Yi{}function It(n,t,...e){let r=[];t instanceof Yi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ji).length,c=o.filter(h=>h instanceof os).length;if(a>1||a>0&&c>0)throw new x(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class os extends Xi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new os(t,e,r)}_apply(t){const e=this._parse(t);return Nc(t._query,e),new Pe(t.firestore,t.converter,si(t._query,e))}_parse(t){const e=rs(t.firestore);return function(o,a,c,h,d,m,E){let T;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Za(E,m);const b=[];for(const V of E)b.push(Ja(h,o,V));T={arrayValue:{values:b}}}else T=Ja(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Za(E,m),T=Zm(c,a,E,m==="in"||m==="not-in");return At.create(d,m,T)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Y(n,t,e){const r=t,s=is("where",n);return os._create(s,r,e)}class Ji extends Yi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ji(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Zt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Nc(a,h),a=si(a,h)}(t._query,e),new Pe(t.firestore,t.converter,si(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zi extends Xi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Zi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new x(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wn(o,a)}(t._query,this._field,this._direction);return new Pe(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new fn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function wt(n,t="asc"){const e=t,r=is("orderBy",n);return Zi._create(r,e)}class to extends Xi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new to(t,e,r)}_apply(t){return new Pe(t.firestore,t.converter,Lr(t._query,this._limit,this._limitType))}}function sr(n){return to._create("limit",n,"F")}function Ja(n,t,e){if(typeof(e=ce(e))=="string"){if(e==="")throw new x(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vl(t)&&e.indexOf("/")!==-1)throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ht.fromString(e));if(!U.isDocumentKey(r))throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return va(n,new U(r))}if(e instanceof jt)return va(n,e._key);throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ts(e)}.`)}function Za(n,t){if(!Array.isArray(n)||n.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class rp{convertValue(t,e="none"){switch($e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw H()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return qe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>yt(a.doubleValue));return new Ki(o)}convertGeoPoint(t){return new Hi(yt(t.latitude),yt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ii(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(zn(t));default:return null}}convertTimestamp(t){const e=Se(t);return new j(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ht.fromString(t);it(Zl(r));const s=new Hn(r.get(1),r.get(3)),o=new U(r.popFirst(5));return s.isEqual(e)||he(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function xc(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class Bn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Mc extends kc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(is("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Vr extends Mc{data(t={}){return super.data(t)}}class sp{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Bn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Vr(this._firestore,this._userDataWriter,r.key,r,new Bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new Vr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Vr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:ip(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ip(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
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
 */function Bc(n){n=te(n,jt);const t=te(n.firestore,ze);return qm(ji(t),n._key).then(e=>up(t,n,e))}class Lc extends rp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ln(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new jt(this.firestore,null,e)}}function St(n){n=te(n,Pe);const t=te(n.firestore,ze),e=ji(t),r=new Lc(t);return np(n._query),jm(e,n._query).then(s=>new sp(t,r,n,s))}function op(n,t,e){n=te(n,jt);const r=te(n.firestore,ze),s=xc(n.converter,t);return as(r,[Rc(rs(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Yt.none())])}function ap(n,t,e,...r){n=te(n,jt);const s=te(n.firestore,ze),o=rs(s);let a;return a=typeof(t=ce(t))=="string"||t instanceof ns?Jm(o,"updateDoc",n._key,t,e,r):Xm(o,"updateDoc",n._key,t),as(s,[a.toMutation(n._key,Yt.exists(!0))])}function lp(n){return as(te(n.firestore,ze),[new Ri(n._key,Yt.none())])}function cp(n,t){const e=te(n.firestore,ze),r=gn(n),s=xc(n.converter,t);return as(e,[Rc(rs(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function as(n,t){return function(r,s){const o=new le;return r.asyncQueue.enqueueAndForget(async()=>Vm(await $m(r),s,o)),o.promise}(ji(n),t)}function up(n,t,e){const r=e.docs.get(t._key),s=new Lc(n);return new Mc(n,s,t._key,r,new Bn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){dn=s})(Gh),xr(new $n("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new ze(new cd(r.getProvider("auth-internal")),new fd(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ze(pa,"4.7.3",t),Ze(pa,"4.7.3","esm2017")})();const hp="55555",mi="baby-tracker-auth",dp=24*60*60*1e3,fp={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},mp=hl(fp),at=Km(mp);function pp(){const n=localStorage.getItem(mi);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<dp?!0:(localStorage.removeItem(mi),!1)}catch{return!1}}function gp(){const n={timestamp:Date.now()};localStorage.setItem(mi,JSON.stringify(n))}let Qt=cn(new Date),zr=null,Fs=null,Os=null,Us=null,$s=null,qs=null,js=null,zs=null,Hs=null,Me=0;function eo(){return localStorage.getItem("selectedTimezone")||"America/New_York"}function Ot(n,t){const e=eo(),r=new Intl.DateTimeFormat("en-US",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(n),s=a=>{var c;return parseInt(((c=r.find(h=>h.type===a))==null?void 0:c.value)||"0",10)};let o=s("hour");return o===24&&(o=0),new Date(s("year"),s("month")-1,s("day"),o,s("minute"),s("second"))}function Xt(n){return Ot(new Date)}function dt(n){const[t,e]=n.split("T"),[r,s,o]=t.split("-").map(Number),[a,c]=e.split(":").map(Number),h=eo(),d=new Date(Date.UTC(r,s-1,o,a,c)),m=new Intl.DateTimeFormat("en-US",{timeZone:h,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(d),E=S=>{var L;return parseInt(((L=m.find(F=>F.type===S))==null?void 0:L.value)||"0",10)};let T=E("hour");T===24&&(T=0);const b=new Date(E("year"),E("month")-1,E("day"),T,E("minute")),V=new Date(r,s-1,o,a,c),P=b.getTime()-V.getTime();return new Date(d.getTime()-P)}function tl(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function cn(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return t.setDate(r),t.setHours(0,0,0,0),t}function yp(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function ee(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function qt(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function pi(n){const t=Ot(n),e=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),s=t.getFullYear(),o=t.getHours(),a=String(t.getMinutes()).padStart(2,"0"),c=o>=12?"PM":"AM",h=o%12||12;return`${e}/${r}/${s} ${h}:${a} ${c}`}function gi(n){const t=Ot(n),e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),o=t.getFullYear();return`${e[t.getDay()]}, ${r}/${s}/${o}`}function Fc(n){const t=Ot(n),e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${r}-${s}`}async function ls(){const n=document.getElementById("vitamin-d-checkbox"),t=document.getElementById("vitamin-d-status"),e=document.getElementById("vitamin-d-label-text");if(!n||!t||!e)return;const s=Fc(new Date);try{const o=await Bc(gn(at,"vitaminD",s));if(o.exists()){const a=o.data();n.checked=a.given===!0}else n.checked=!1;e.textContent=n.checked?"Vitamin D drop given":"Record Vitamin D drop",t.textContent="",t.style.display="none"}catch(o){console.error("Error loading vitamin D status:",o),t.className="error",t.textContent="Failed to load vitamin D status",t.style.display="block"}}function Oc(){zs&&clearTimeout(zs);const n=new Date,t=Xt(),e=new Date(t);e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const s=dt(ee(e)).getTime()-n.getTime();zs=window.setTimeout(()=>{ls(),Oc()},s)}async function _p(n){const t=n.target,e=document.getElementById("vitamin-d-status"),r=document.getElementById("vitamin-d-label-text");if(!e||!r)return;const s=new Date,o=Fc(s);try{await op(gn(at,"vitaminD",o),{given:t.checked,date:j.fromDate(s)}),r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop",e.style.display="none"}catch(a){console.error("Error saving vitamin D status:",a),e.className="error",e.textContent="Failed to save vitamin D status",e.style.display="block",t.checked=!t.checked,r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop"}}function el(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===hp?(n.blur(),gp(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Uc()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function Uc(){Tp(),Yn(),$c(),Fp(),Ep(),vp(),ls(),Oc(),window.scrollTo(0,0)}function $c(){const n=Xt(),t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter");t&&(t.value=qt(n)),e&&(e.value=qt(n))}function Ep(){[document.getElementById("bottle-amount"),document.getElementById("pump-amount"),document.getElementById("edit-bottle-amount"),document.getElementById("edit-pump-amount")].forEach(t=>{t&&(t.addEventListener("keypress",e=>{const r=e.key,s=t.value;e.key==="Backspace"||e.key==="Delete"||e.key==="Tab"||e.key==="Escape"||e.key==="Enter"||e.ctrlKey||e.metaKey||r>="0"&&r<="9"||r==="."&&s.indexOf(".")===-1||e.preventDefault()}),t.addEventListener("paste",e=>{var c;e.preventDefault();const s=(((c=e.clipboardData)==null?void 0:c.getData("text"))||"").replace(/[^0-9.]/g,""),o=s.split("."),a=o.length>2?o[0]+"."+o.slice(1).join(""):s;document.execCommand("insertText",!1,a)}))})}function vp(){const n=document.getElementById("bottle-unit"),t=document.getElementById("bottle-amount"),e=document.getElementById("pump-unit"),r=document.getElementById("pump-amount"),s=document.getElementById("edit-bottle-unit"),o=document.getElementById("edit-bottle-amount"),a=document.getElementById("edit-pump-unit"),c=document.getElementById("edit-pump-amount");n&&t&&n.addEventListener("change",()=>{br(t,n.value)}),e&&r&&e.addEventListener("change",()=>{br(r,e.value)}),s&&o&&s.addEventListener("change",()=>{br(o,s.value)}),a&&c&&a.addEventListener("change",()=>{br(c,a.value)})}function br(n,t){const e=parseFloat(n.value);if(isNaN(e)||e<=0)return;const r=n.dataset.lastUnit||"oz";if(r===t)return;let s;if(t==="ml"&&r==="oz")s=e*29.5735;else if(t==="oz"&&r==="ml")s=e*.033814;else return;n.value=s.toFixed(2),n.dataset.lastUnit=t}function nl(n){return n.value&&dt(n.value)>new Date?(alert("Cannot select future times. Please select a time in the past."),n.value=ee(Xt()),!1):!0}function ye(n){const t=document.getElementById(n);t&&(t.addEventListener("blur",()=>{nl(t)}),t.addEventListener("change",()=>{nl(t)}))}function Ks(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block",ls()):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",De(),Ee()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",De()),window.scrollTo(0,0)}function Tp(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",wp);const e=document.getElementById("bottle-type");e&&e.addEventListener("change",Ap),bp();const r=document.getElementById("edit-bottle-type");r&&r.addEventListener("change",Sp),Dp(),t.addEventListener("click",Rp);const s=document.getElementById("vitamin-d-checkbox");s&&s.addEventListener("change",_p);const o=document.getElementById("refresh-button");o&&o.addEventListener("click",()=>{window.location.reload()});const a=document.getElementById("entry-tab"),c=document.getElementById("timeline-tab"),h=document.getElementById("weekly-tab");a.addEventListener("click",()=>Ks("entry")),c.addEventListener("click",()=>Ks("timeline")),h.addEventListener("click",()=>Ks("weekly"));const d=document.getElementById("prev-week"),m=document.getElementById("next-week"),E=document.getElementById("current-week");d.addEventListener("click",()=>rl(-1)),m.addEventListener("click",()=>rl(1)),E&&E.addEventListener("click",Np);const T=document.getElementById("save-edit"),b=document.getElementById("cancel-edit");T.addEventListener("click",Bp),b.addEventListener("click",qc);const V=document.getElementById("start-date-filter"),P=document.getElementById("end-date-filter"),S=document.getElementById("type-filter"),L=document.getElementById("today-button"),F=document.getElementById("yesterday-button"),B=document.getElementById("two-days-ago-button"),Q=document.getElementById("three-days-ago-button"),q=document.getElementById("all-time-button");V.addEventListener("change",()=>Ee()),P.addEventListener("change",()=>Ee()),S.addEventListener("change",()=>Ee()),L.addEventListener("click",()=>kn("today")),F.addEventListener("click",()=>kn("yesterday")),B.addEventListener("click",()=>kn("two-days-ago")),Q.addEventListener("click",()=>kn("three-days-ago")),q.addEventListener("click",()=>kn("all-time")),ye("bottle-time"),ye("diaper-time"),ye("pump-start-time"),ye("sleep-start-time"),ye("edit-bottle-time"),ye("edit-diaper-time"),ye("edit-pump-start-time"),ye("edit-sleep-start-time");const G=document.getElementById("graph-start-date"),I=document.getElementById("graph-end-date");if(G&&I){const v=new Date(2025,10,5);G.value=qt(v),I.value=qt(Xt())}const p=document.getElementById("update-graph-btn");p&&p.addEventListener("click",kp);const _=document.getElementById("timezone-select");_&&(_.value=eo(),_.addEventListener("change",()=>{localStorage.setItem("selectedTimezone",_.value),Yn(),$c(),ls(),cs(),Ee(),De()}))}function Yn(){const n=Xt(),t=ee(n),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("pump-start-time"),o=document.getElementById("sleep-start-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t),o&&(o.value="")}async function Ip(){const n=document.getElementById("submit-entry"),t=document.getElementById("submit-status");try{const e=It(_t(at,"entries"),Y("type","==","Sleep"),wt("startTime","desc"),sr(1)),r=await St(e);if(!r.empty){const s=r.docs[0].data();if(!s.endTime){const o=s.startTime.toDate();n.style.display="none",t.className="error",t.textContent=`Sleep entry ongoing since ${pi(o)}. End that entry before adding a new one.`,t.style.display="block"}}}catch(e){console.error("Error checking ongoing sleep:",e)}}function wp(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("pump-fields"),a=document.getElementById("sleep-fields"),c=document.getElementById("submit-entry"),h=document.getElementById("submit-status"),d=document.getElementById("bottle-type-container");if(r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none",d.style.display="none",h.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"){r.style.display="block",c.style.display="block";const m=document.getElementById("bottle-unit"),E=document.getElementById("bottle-amount");E.dataset.lastUnit=m.value,e==="bottle-formula"&&(d.style.display="block")}else if(e==="diaper")s.style.display="block",c.style.display="block";else if(e==="pump"){o.style.display="block",c.style.display="block";const m=document.getElementById("pump-unit"),E=document.getElementById("pump-amount");E.dataset.lastUnit=m.value}else e==="sleep"?(a.style.display="block",c.style.display="block",Ip()):c.style.display="none";Yn(),Yn()}function Ap(n){const e=n.target.value,r=document.getElementById("bottle-notes"),s=document.getElementById("bottle-type-indicator"),o=document.getElementById("bottle-type-text");if(!r)return;const a=r.value,c=a.split(`
`),h=c.length>0&&(c[0]==="Bobbie"||c[0]==="Enfamil");e?(h?(c[0]=e,r.value=c.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function Sp(n){const e=n.target.value,r=document.getElementById("edit-bottle-notes"),s=document.getElementById("edit-bottle-type-indicator"),o=document.getElementById("edit-bottle-type-text");if(!r)return;const a=r.value,c=a.split(`
`),h=c.length>0&&(c[0]==="Bobbie"||c[0]==="Enfamil");e?(h?(c[0]=e,r.value=c.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function bp(){const n=document.getElementById("bottle-notes"),t=document.getElementById("bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}function Dp(){const n=document.getElementById("edit-bottle-notes"),t=document.getElementById("edit-bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}async function Rp(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),c=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const d=dt(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");if(n==="bottle-formula"&&!document.getElementById("bottle-type").value)throw new Error("Formula type is required");e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:d,amount:a,unit:c,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,c=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=dt(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:c}}else if(n==="pump"){const s=document.getElementById("pump-start-time"),o=s.value,a=parseFloat(document.getElementById("pump-amount").value),c=document.getElementById("pump-unit").value,h=document.getElementById("pump-notes").value;if(!o)throw new Error("Start time is required");const d=dt(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");e={type:"Pump",startTime:d,amount:a,unit:c,notes:h}}else if(n==="sleep"){const s=document.getElementById("sleep-start-time"),o=document.getElementById("sleep-end-time"),a=document.getElementById("sleep-notes").value;if(!s.value)throw new Error("Start time is required");const c=dt(s.value);if(c>r)throw new Error("Cannot add entries in the future");const h=It(_t(at,"entries"),Y("type","==","Sleep"),wt("startTime","desc"),sr(1)),d=await St(h);if(!d.empty&&!d.docs[0].data().endTime)throw new Error("A sleep entry is already ongoing. End that entry before adding a new one.");let m;if(o.value){if(m=dt(o.value),m>r)throw new Error("End time cannot be in the future");if(m<=c)throw new Error("End time must be after start time")}e={type:"Sleep",startTime:c,endTime:m,notes:a}}e&&(await cp(_t(at,"entries"),{...e,startTime:j.fromDate(e.startTime),endTime:e.endTime?j.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",Pp(),e.type==="Feed"?await jc():e.type==="Diaper"?await zc():e.type==="Pump"?await Hc():e.type==="Sleep"&&(await Yc(),await Jc()),De(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function Pp(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-type").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("pump-amount").value="",document.getElementById("pump-notes").value="",document.getElementById("sleep-end-time").value="",document.getElementById("sleep-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("bottle-type-container").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("pump-fields").style.display="none",document.getElementById("sleep-fields").style.display="none",document.getElementById("submit-entry").style.display="none",Yn()}function kn(n){const t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter"),r=Xt();if(r.setHours(0,0,0,0),n==="all-time"){const s=new Date(2025,10,5);t.value=qt(s),e.value=qt(r)}else if(n==="today")t.value=qt(r),e.value=qt(r);else if(n==="yesterday"){const s=new Date(r);s.setDate(s.getDate()-1),t.value=qt(s),e.value=qt(s)}else if(n==="two-days-ago"){const s=new Date(r);s.setDate(s.getDate()-2),t.value=qt(s),e.value=qt(s)}else if(n==="three-days-ago"){const s=new Date(r);s.setDate(s.getDate()-3),t.value=qt(s),e.value=qt(s)}Ee()}async function Ee(){const n=document.getElementById("timeline-list"),t=document.getElementById("timeline-loading"),e=document.getElementById("start-date-filter").value,r=document.getElementById("end-date-filter").value,s=document.getElementById("type-filter").value;t.style.display="block",n.innerHTML="";const o=document.querySelector(".filter-summary");o&&o.remove();try{let a=It(_t(at,"entries"),wt("startTime","desc"));if(e&&r){const T=dt(`${e}T00:00`),b=dt(`${r}T23:59`);b.setSeconds(59,999),a=It(_t(at,"entries"),Y("startTime",">=",j.fromDate(T)),Y("startTime","<=",j.fromDate(b)),wt("startTime","desc"))}const c=await St(a);let h=[];if(e){const[T,b,V]=e.split("-").map(Number),P=new Date(T,b-1,V-1),S=`${P.getFullYear()}-${String(P.getMonth()+1).padStart(2,"0")}-${String(P.getDate()).padStart(2,"0")}`,L=dt(`${S}T19:00`),F=dt(`${e}T00:00`),B=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(L)),Y("startTime","<",j.fromDate(F)),wt("startTime","desc"));try{(await St(B)).forEach(q=>{h.push({id:q.id,data:q.data()})})}catch(Q){console.error("Error fetching prior evening sleep:",Q)}}const d=[],m=new Set;c.forEach(T=>{d.push({id:T.id,data:T.data()}),m.add(T.id)}),h.forEach(T=>{m.has(T.id)||(d.push(T),m.add(T.id))}),d.sort((T,b)=>b.data.startTime.toDate().getTime()-T.data.startTime.toDate().getTime());const E={bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleep:{totalMs:0,sessions:0}};if(d.length===0)n.innerHTML="<p>No entries found.</p>";else{let T="",b=!1;d.forEach(({id:P,data:S})=>{if(s!=="all"){let y="";if(S.type==="Feed"&&S.subType==="Breast Milk"?y="bottle-breast-milk":S.type==="Feed"&&S.subType==="Formula"?y="bottle-formula":S.type==="Diaper"?y="diaper-all":S.type==="Pump"?y="pump":S.type==="Sleep"&&(y="sleep"),s==="bottle-all"){if(S.type!=="Feed")return}else if(s==="diaper-all"){if(S.type!=="Diaper")return}else if(s==="diaper-pee"){if(S.type!=="Diaper"||S.diaperType!=="Pee"&&S.diaperType!=="Mixed")return}else if(s==="diaper-poo"){if(S.type!=="Diaper"||S.diaperType!=="Poo"&&S.diaperType!=="Mixed")return}else if(y!==s)return}if(S.type==="Feed"){const y=we(S.amount,S.unit);E.bottles.total+=y,E.bottles.sessions++,S.subType==="Breast Milk"?E.bottles.breastMilk+=y:S.subType==="Formula"&&(E.bottles.formula+=y)}else if(S.type==="Diaper")E.diapers.total++,S.diaperType==="Pee"?E.diapers.pee++:S.diaperType==="Poo"?E.diapers.poo++:S.diaperType==="Mixed"&&E.diapers.mixed++;else if(S.type==="Pump"){const y=we(S.amount,S.unit);E.pumps.total+=y,E.pumps.sessions++}else S.type==="Sleep"&&E.sleep.sessions++;b=!0;const L=S.startTime.toDate(),F=gi(L);if(F!==T){T=F;const y=document.createElement("div");y.className="timeline-date-header",y.textContent=F,n.appendChild(y)}const B=document.createElement("div");B.className="timeline-entry";let Q=S.type,q="",G="";if(S.type==="Feed")Q=`Bottle - ${S.subType}`,q=`<div class="timeline-entry-details">Amount: ${ne(S.amount,S.unit)}</div>`,G="#d9ebf2";else if(S.type==="Breast Feed")Q="Breast Feed",q="",G="#d9ebf2";else if(S.type==="Diaper")q=`<div class="timeline-entry-details">Type: ${S.diaperType}</div>`,G="#fce2d4";else if(S.type==="Pump")q=`<div class="timeline-entry-details">Amount: ${ne(S.amount,S.unit)}</div>`,G="#e2daf2";else if(S.type==="Sleep")if(Q="Sleep",G="#d4e8d4",S.endTime){const y=S.startTime.toDate(),w=S.endTime.toDate(),g=w.getTime()-y.getTime(),O=Math.floor(g/(1e3*60*60)),rt=Math.floor(g%(1e3*60*60)/(1e3*60));q=`<div class="timeline-entry-details">Duration: ${O}h ${rt}m</div>`,q+=`<div class="timeline-entry-details">End: ${pi(w)}</div>`}else q='<div class="timeline-entry-details">In progress</div>';B.style.backgroundColor=G;const I=S.notes?`<div class="timeline-entry-notes">${S.notes.replace(/\n/g,"<br>")}</div>`:"";let p="";if(S.type==="Diaper"&&(S.diaperType==="Poo"||S.diaperType==="Mixed")){const y=L.getTime(),w=[];d.forEach(O=>{const rt=O.data;rt.type==="Diaper"&&(rt.diaperType==="Poo"||rt.diaperType==="Mixed")&&w.push({time:rt.startTime.toDate().getTime()})}),w.sort((O,rt)=>rt.time-O.time);const g=w.findIndex(O=>O.time===y);if(g>=0&&g<w.length-1){const O=w[g+1].time;p=`<div class="timeline-entry-details" style="color: #666; font-style: italic;">${((y-O)/(1e3*60*60)).toFixed(1)} hours since previous poo</div>`}else g>=0&&g===w.length-1&&(B.dataset.needsPriorPoo="true",B.dataset.pooTime=String(y))}B.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${Q}</span>
                        <span class="timeline-entry-time">${pi(L)}</span>
                    </div>
                    ${q}
                    ${I}
                    ${p}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${P}">Edit</button>
                        <button class="delete-button" data-id="${P}">Delete</button>
                    </div>
                `;const _=B.querySelector(".edit-button"),v=B.querySelector(".delete-button");_.addEventListener("click",()=>Mp(P,S)),v.addEventListener("click",()=>Lp(P)),n.appendChild(B)});const V=n.querySelectorAll('[data-needs-prior-poo="true"]');for(const P of Array.from(V)){const S=parseInt(P.dataset.pooTime||"0",10);if(S>0)try{const L=It(_t(at,"entries"),Y("type","==","Diaper"),Y("startTime","<",j.fromDate(new Date(S))),wt("startTime","desc")),F=await St(L);let B=null;if(F.forEach(Q=>{if(B!==null)return;const q=Q.data();(q.diaperType==="Poo"||q.diaperType==="Mixed")&&(B=q.startTime.toDate().getTime())}),B!==null){const Q=(S-B)/36e5,q=document.createElement("div");q.className="timeline-entry-details",q.style.color="#666",q.style.fontStyle="italic",q.textContent=`${Q.toFixed(1)} hours since previous poo`;const G=P.querySelector(".timeline-entry-actions");G?P.insertBefore(q,G):P.appendChild(q)}}catch(L){console.error("Error fetching prior poo entry:",L)}P.removeAttribute("data-needs-prior-poo"),P.removeAttribute("data-poo-time")}if(!b)n.innerHTML="<p>No entries match the selected filters.</p>";else{const P=document.createElement("div");P.className="filter-summary";let S='<div class="summary-header">Summary</div><div class="summary-stats">';if((s==="all"||s==="bottle-breast-milk"||s==="bottle-formula"||s==="bottle-all")&&(S+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Bottles</div>
                            <div class="stat-line">Number of feeds: ${E.bottles.sessions}</div>
                            <div class="stat-line">Breast Milk: ${ne(E.bottles.breastMilk,"oz")}</div>
                            <div class="stat-line">Formula: ${ne(E.bottles.formula,"oz")}</div>
                            <div class="stat-line">Total volume: ${ne(E.bottles.total,"oz")}</div>
                        </div>
                    `),s==="all"||s==="diaper-all"||s==="diaper-pee"||s==="diaper-poo"){const F=E.diapers.pee+E.diapers.mixed,B=E.diapers.poo+E.diapers.mixed;S+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${F}</div>
                            <div class="stat-line">Poo: ${B}</div>
                        </div>
                    `}if((s==="all"||s==="pump")&&(S+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Pumps</div>
                            <div class="stat-line">Total volume: ${ne(E.pumps.total,"oz")}</div>
                            <div class="stat-line">Number of sessions: ${E.pumps.sessions}</div>
                        </div>
                    `),s==="all"||s==="sleep"){let F=0;if(e&&r){const q=[];d.forEach(lt=>{const Et=lt.data;Et.type==="Sleep"&&q.push({startTime:Et.startTime.toDate(),endTime:Et.endTime?Et.endTime.toDate():null})});const[G,I,p]=e.split("-").map(Number),_=new Date(G,I-1,p);_.setDate(_.getDate()-1);const v=new Date(_);v.setHours(0,0,0,0);const y=new Date(_);y.setHours(23,59,59,999);try{const lt=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(v)),Y("startTime","<=",j.fromDate(y)),wt("startTime","asc"));(await St(lt)).forEach(ct=>{const zt=ct.data();q.push({startTime:zt.startTime.toDate(),endTime:zt.endTime?zt.endTime.toDate():null})})}catch(lt){console.error("Error fetching prior sleep entries:",lt)}const[w,g,O]=r.split("-").map(Number),rt=new Date(w,g-1,O);rt.setDate(rt.getDate()+1);const $=new Date(rt);$.setHours(0,0,0,0);const N=new Date(rt);N.setHours(23,59,59,999);try{const lt=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate($)),Y("startTime","<=",j.fromDate(N)),wt("startTime","asc"));(await St(lt)).forEach(ct=>{const zt=ct.data();q.push({startTime:zt.startTime.toDate(),endTime:zt.endTime?zt.endTime.toDate():null})})}catch(lt){console.error("Error fetching post sleep entries:",lt)}const ft=new Date(G,I-1,p),pt=new Date(w,g-1,O),Z=new Date(ft);for(;Z<=pt;){const lt=ro(Z);F+=no(q,lt.start,lt.end),Z.setDate(Z.getDate()+1)}}const B=Math.floor(F/(1e3*60*60)),Q=Math.floor(F%(1e3*60*60)/(1e3*60));S+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Sleep</div>
                            <div class="stat-line">Total sleep: ${B}h ${Q}m</div>
                            <div class="stat-line">Number of sleeps: ${E.sleep.sessions}</div>
                            <div class="stat-line" style="font-size: 11px; color: #888;">prev day 7pm - next day 7am</div>
                        </div>
                    `}S+="</div>",P.innerHTML=S;const L=document.querySelector(".filter-section");L&&L.parentNode&&L.parentNode.insertBefore(P,n)}}}catch{n.innerHTML='<p class="error">Failed to load timeline</p>'}finally{t.style.display="none"}}function no(n,t,e){let r=0;for(const s of n){if(!s.endTime)continue;const o=Math.max(s.startTime.getTime(),t.getTime()),a=Math.min(s.endTime.getTime(),e.getTime());a>o&&(r+=a-o)}return r}function ro(n){const t=new Date(n);t.setHours(0,0,0,0);const e=new Date(t);e.setDate(e.getDate()-1);const r=dt(`${tl(e)}T19:00`),s=new Date(t);s.setDate(s.getDate()+1);const o=dt(`${tl(s)}T07:00`);return{start:r,end:o}}function Cp(n){const t=Math.floor(n/36e5),e=Math.floor(n%(1e3*60*60)/(1e3*60));return`${t}h ${e}m`}async function De(){const n=++Me,t=document.getElementById("weekly-stats"),e=document.getElementById("weekly-loading"),r=document.getElementById("week-range"),s=document.getElementById("prev-week"),o=document.getElementById("next-week"),a=document.getElementById("current-week"),c=new Date(2025,10,5),h=cn(c),d=Xt(),m=cn(d),E=new Date(Qt);E.setHours(0,0,0,0),E<h&&(Qt=new Date(h)),E.getTime()<=h.getTime()?s.disabled=!0:s.disabled=!1,E.getTime()>=m.getTime()?o.disabled=!0:o.disabled=!1,a&&(E.getTime()===m.getTime()?(a.disabled=!0,a.style.backgroundColor="#999",a.style.color="#ccc",a.style.cursor="default"):(a.disabled=!1,a.style.backgroundColor="",a.style.color="",a.style.cursor="pointer"));const T=yp(Qt);r.textContent=`${gi(Qt).split(",")[1].trim()} - ${gi(T).split(",")[1].trim()}`,e.style.display="block",t.innerHTML="";try{const b=It(_t(at,"entries"),Y("startTime",">=",j.fromDate(Qt)),Y("startTime","<=",j.fromDate(T)),wt("startTime","asc")),V=await St(b);if(n!==Me)return;const P=new Date("2025-11-11");P.setHours(0,0,0,0);const S={},L=[];for(let $=0;$<7;$++){const N=new Date(Qt);if(N.setDate(N.getDate()+$),N.setHours(0,0,0,0),N>=P){const ft=`${N.getFullYear()}-${String(N.getMonth()+1).padStart(2,"0")}-${String(N.getDate()).padStart(2,"0")}`;L.push(ft)}}if(L.length>0){const $=await Promise.all(L.map(N=>Bc(gn(at,"vitaminD",N))));L.forEach((N,ft)=>{var Z;const pt=$[ft];S[N]=pt.exists()&&((Z=pt.data())==null?void 0:Z.given)===!0})}if(n!==Me)return;const F=[];V.forEach($=>{const N=$.data();N.type==="Sleep"&&F.push({startTime:N.startTime.toDate(),endTime:N.endTime?N.endTime.toDate():null})});const B=new Date(Qt);B.setDate(B.getDate()-1),B.setHours(0,0,0,0);const Q=new Date(Qt);Q.setHours(0,0,0,0);const q=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(B)),Y("startTime","<",j.fromDate(Q)),wt("startTime","asc")),G=await St(q);if(n!==Me)return;G.forEach($=>{const N=$.data();F.push({startTime:N.startTime.toDate(),endTime:N.endTime?N.endTime.toDate():null})});const I=new Date(T);I.setDate(I.getDate()+1),I.setHours(0,0,0,0);const p=new Date(I);p.setDate(p.getDate()+1),p.setHours(0,0,0,0);const _=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(I)),Y("startTime","<",j.fromDate(p)),wt("startTime","asc")),v=await St(_);if(n!==Me)return;v.forEach($=>{const N=$.data();F.push({startTime:N.startTime.toDate(),endTime:N.endTime?N.endTime.toDate():null})});const y={};for(let $=0;$<7;$++){const N=new Date(Qt);N.setDate(N.getDate()+$),N.setHours(0,0,0,0);const ft=`${N.getFullYear()}-${N.getMonth()}-${N.getDate()}`,pt=`${N.getFullYear()}-${String(N.getMonth()+1).padStart(2,"0")}-${String(N.getDate()).padStart(2,"0")}`,Z=ro(N);y[ft]={date:new Date(N),vitaminD:N>=P?S[pt]===!0:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleepMs:no(F,Z.start,Z.end)}}V.forEach($=>{const N=$.data(),ft=N.startTime.toDate(),pt=Ot(ft);pt.setHours(0,0,0,0);const Z=`${pt.getFullYear()}-${pt.getMonth()}-${pt.getDate()}`;if(y[Z]){if(N.type==="Feed"){const lt=we(N.amount,N.unit);y[Z].bottles.total+=lt,y[Z].bottles.sessions++,N.subType==="Breast Milk"?y[Z].bottles.breastMilk+=lt:N.subType==="Formula"&&(y[Z].bottles.formula+=lt)}else if(N.type==="Breast Feed")y[Z].bottles.sessions++;else if(N.type==="Diaper")y[Z].diapers.total++,N.diaperType==="Pee"?y[Z].diapers.pee++:N.diaperType==="Poo"?y[Z].diapers.poo++:N.diaperType==="Mixed"&&y[Z].diapers.mixed++;else if(N.type==="Pump"){const lt=we(N.amount,N.unit);y[Z].pumps.total+=lt,y[Z].pumps.sessions++}}});const w=Object.keys(y).map($=>y[$]).sort(($,N)=>$.date.getTime()-N.date.getTime()),g=document.createElement("div");g.className="weekly-scroll-container";const O=Xt();O.setHours(0,0,0,0);let rt=-1;w.forEach(($,N)=>{const ft=document.createElement("div");ft.className="day-stats";const pt=new Date($.date);pt.setHours(0,0,0,0),O.getTime()===pt.getTime()&&(ft.classList.add("current-day"),rt=N);const Z=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][$.date.getDay()],lt=`${$.date.getMonth()+1}/${$.date.getDate()}`,Et=$.diapers.pee+$.diapers.mixed,ct=$.diapers.poo+$.diapers.mixed;let zt="";if($.vitaminD!==null){const fe=$.vitaminD?"Yes":"No";zt=`
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${$.vitaminD?"#4caf50":"#f44336"}; font-weight: bold;">${fe}</div>
                    </div>
                `}ft.innerHTML=`
                <div class="day-stats-header">${Z}<br>${lt}</div>
                ${zt}
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${$.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${ne($.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line">Formula: ${ne($.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total volume: ${ne($.bottles.total,"oz")}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${Et}</div>
                    <div class="stat-line">Poo: ${ct}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${ne($.pumps.total,"oz")}</div>
                    <div class="stat-line">Number of sessions: ${$.pumps.sessions}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${Cp($.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][($.date.getDay()+6)%7]} 7pm - ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][($.date.getDay()+1)%7]} 7am</div>
                </div>
            `,g.appendChild(ft)}),t.appendChild(g),rt!==-1&&setTimeout(()=>{const $=g.children[rt];if($){const N=g.offsetWidth,ft=$.offsetWidth,pt=$.offsetLeft-N/2+ft/2;g.scrollTo({left:Math.max(0,pt),behavior:"smooth"})}},100)}catch{n===Me&&(t.innerHTML='<p class="error">Failed to load weekly view</p>')}finally{n===Me&&(e.style.display="none",await Vp())}}async function Vp(){var b,V,P,S,L,F;const n=document.getElementById("json-content"),t=document.getElementById("toggle-json"),e=document.getElementById("copy-json"),r=document.querySelector(".json-tabs"),s=document.getElementById("feeds-json-tab"),o=document.getElementById("diapers-json-tab"),a=document.getElementById("pumps-json-tab"),c=document.getElementById("sleep-json-tab");if(!n||!t||!e)return;let h="feeds",d=[],m=[],E=[],T=[];try{const B=It(_t(at,"entries"),wt("startTime","desc"));(await St(B)).docs.forEach(g=>{const O=g.data();O.type==="Feed"?d.push({type:O.type,subType:O.subType,startTime:O.startTime.toDate().toISOString(),amount:O.amount,unit:O.unit,notes:O.notes||""}):O.type==="Diaper"?m.push({type:O.type,startTime:O.startTime.toDate().toISOString(),diaperType:O.diaperType,notes:O.notes||""}):O.type==="Pump"?E.push({type:O.type,startTime:O.startTime.toDate().toISOString(),amount:O.amount,unit:O.unit,notes:O.notes||""}):O.type==="Sleep"&&T.push({type:O.type,startTime:O.startTime.toDate().toISOString(),endTime:O.endTime?O.endTime.toDate().toISOString():null,notes:O.notes||""})});const q=()=>{let g;h==="feeds"?g=d:h==="diapers"?g=m:h==="sleep"?g=T:g=E;const O=JSON.stringify(g,null,2);return n.textContent=O,O};let G=q();const I=t.cloneNode(!0),p=e.cloneNode(!0),_=s==null?void 0:s.cloneNode(!0),v=o==null?void 0:o.cloneNode(!0),y=a==null?void 0:a.cloneNode(!0),w=c==null?void 0:c.cloneNode(!0);(b=t.parentNode)==null||b.replaceChild(I,t),(V=e.parentNode)==null||V.replaceChild(p,e),s&&_&&((P=s.parentNode)==null||P.replaceChild(_,s)),o&&v&&((S=o.parentNode)==null||S.replaceChild(v,o)),a&&y&&((L=a.parentNode)==null||L.replaceChild(y,a)),c&&w&&((F=c.parentNode)==null||F.replaceChild(w,c)),I.addEventListener("click",()=>{const g=n.style.display==="none";n.style.display=g?"block":"none",p.style.display=g?"block":"none",r&&(r.style.display=g?"flex":"none"),I.textContent=g?"Hide JSON Data":"Show JSON Data"}),p.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(G);const g=p.textContent;p.textContent="✓",setTimeout(()=>{p.textContent=g},2e3)}catch{alert("Failed to copy to clipboard")}}),_&&_.addEventListener("click",()=>{h="feeds",_.classList.add("active"),v.classList.remove("active"),y.classList.remove("active"),w.classList.remove("active"),G=q()}),v&&v.addEventListener("click",()=>{h="diapers",v.classList.add("active"),_.classList.remove("active"),y.classList.remove("active"),w.classList.remove("active"),G=q()}),y&&y.addEventListener("click",()=>{h="pumps",y.classList.add("active"),_.classList.remove("active"),v.classList.remove("active"),w.classList.remove("active"),G=q()}),w&&w.addEventListener("click",()=>{h="sleep",w.classList.add("active"),_.classList.remove("active"),v.classList.remove("active"),y.classList.remove("active"),G=q()})}catch{n.textContent="Failed to load data"}}async function kp(){const n=document.getElementById("graph-start-date").value,t=document.getElementById("graph-end-date").value;if(!n||!t){alert("Please select both start and end dates");return}const e=[];if(document.querySelectorAll(".graph-checkbox:checked").forEach(st=>{e.push(st.dataset.series)}),e.length===0){alert("Please select at least one data series to plot");return}const r=dt(`${n}T00:00`),s=dt(`${t}T23:59`);s.setSeconds(59,999);const o=It(_t(at,"entries"),Y("startTime",">=",j.fromDate(r)),Y("startTime","<=",j.fromDate(s)),wt("startTime","asc")),a=await St(o),[c,h,d]=n.split("-").map(Number),m=new Date(c,h-1,d-1),E=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`,T=dt(`${E}T00:00`),b=dt(`${n}T00:00`),V=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(T)),Y("startTime","<",j.fromDate(b)),wt("startTime","asc")),P=await St(V),[S,L,F]=t.split("-").map(Number),B=new Date(S,L-1,F+1),Q=`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`,q=new Date(S,L-1,F+2),G=`${q.getFullYear()}-${String(q.getMonth()+1).padStart(2,"0")}-${String(q.getDate()).padStart(2,"0")}`,I=dt(`${Q}T00:00`),p=dt(`${G}T00:00`),_=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(I)),Y("startTime","<",j.fromDate(p)),wt("startTime","asc")),v=await St(_),y={},[w,g,O]=n.split("-").map(Number),rt=new Date(w,g-1,O),[$,N,ft]=t.split("-").map(Number),pt=new Date($,N-1,ft);for(;rt<=pt;){const st=`${rt.getFullYear()}-${String(rt.getMonth()+1).padStart(2,"0")}-${String(rt.getDate()).padStart(2,"0")}`;y[st]={"bottle-breast-milk":0,"bottle-formula":0,"bottle-all":0,"diaper-pee":0,"diaper-poo":0,"diaper-mixed":0,"diaper-all":0,pump:0,sleep:0},rt.setDate(rt.getDate()+1)}const Z=[];if(a.forEach(st=>{const z=st.data(),kt=z.startTime.toDate(),vt=qt(Ot(kt));if(y[vt]){if(z.type==="Feed"&&z.subType==="Breast Milk"){const Kt=we(z.amount,z.unit);y[vt]["bottle-breast-milk"]+=Kt,y[vt]["bottle-all"]+=Kt}else if(z.type==="Feed"&&z.subType==="Formula"){const Kt=we(z.amount,z.unit);y[vt]["bottle-formula"]+=Kt,y[vt]["bottle-all"]+=Kt}else if(z.type==="Diaper")(z.diaperType==="Pee"||z.diaperType==="Mixed")&&y[vt]["diaper-pee"]++,(z.diaperType==="Poo"||z.diaperType==="Mixed")&&y[vt]["diaper-poo"]++,z.diaperType==="Mixed"&&y[vt]["diaper-mixed"]++,y[vt]["diaper-all"]++;else if(z.type==="Pump"){const Kt=we(z.amount,z.unit);y[vt].pump+=Kt}}z.type==="Sleep"&&Z.push({startTime:z.startTime.toDate(),endTime:z.endTime?z.endTime.toDate():null})}),P.forEach(st=>{const z=st.data();Z.push({startTime:z.startTime.toDate(),endTime:z.endTime?z.endTime.toDate():null})}),v.forEach(st=>{const z=st.data();Z.push({startTime:z.startTime.toDate(),endTime:z.endTime?z.endTime.toDate():null})}),e.includes("sleep"))for(const st of Object.keys(y)){const[z,kt,vt]=st.split("-").map(Number),Kt=new Date(z,kt-1,vt),He=ro(Kt),yn=no(Z,He.start,He.end);y[st].sleep=parseFloat((yn/(1e3*60*60)).toFixed(1))}const lt=Object.keys(y).sort(),Et=[],ct={"bottle-breast-milk":"#4CAF50","bottle-formula":"#2196F3","bottle-all":"#9C27B0","diaper-pee":"#FFEB3B","diaper-poo":"#795548","diaper-mixed":"#FF9800","diaper-all":"#607D8B",pump:"#E91E63",sleep:"#00897B"},zt={"bottle-breast-milk":"Bottle - Breast Milk","bottle-formula":"Bottle - Formula","bottle-all":"Bottle - All","diaper-pee":"Diaper - Pee","diaper-poo":"Diaper - Poo","diaper-mixed":"Diaper - Mixed","diaper-all":"Diaper - All",pump:"Pump",sleep:"Sleep (hrs, 7pm-7am)"};e.forEach(st=>{Et.push({label:zt[st],data:lt.map(z=>y[z][st]),borderColor:ct[st],backgroundColor:ct[st]+"33",tension:.1,fill:!1})});const ir=document.getElementById("data-chart").getContext("2d");Hs&&Hs.destroy(),Hs=new window.Chart(ir,{type:"line",data:{labels:lt.map(st=>{const[,z,kt]=st.split("-");return`${z}/${kt}`}),datasets:Et},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:"Baby Tracker Data"},tooltip:{enabled:!0,callbacks:{label:function(st){let z=st.dataset.label||"";z&&(z+=": ");const kt=st.parsed.y,vt=st.dataset.label.toLowerCase();return vt.includes("diaper")?z+=Math.round(kt):vt.includes("sleep")?z+=kt.toFixed(1)+" hrs":z+=kt.toFixed(1)+" oz",z}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(st){return e.every(kt=>kt.startsWith("diaper-"))?Math.round(st):st%1===0?st:st.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count / Hours"}}}}});const Ce=document.querySelector(".chart-container");Ce&&Ce.classList.add("active")}function rl(n){const t=new Date(2025,10,5),e=cn(t),r=Xt(),s=cn(r),o=new Date(Qt);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const c=new Date(s);c.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>c.getTime()||(Qt=o,De()))}function Np(){Qt=cn(Xt()),De()}function we(n,t){return t==="ml"?n*.033814:n}function xp(n,t){return t==="oz"?n*29.5735:n}function ne(n,t){const e=we(n,t),r=xp(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function Mp(n,t){zr=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields"),a=document.getElementById("edit-sleep-fields");r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none";const c=t.startTime.toDate();if(t.type==="Feed"){r.style.display="block";const h=document.getElementById("edit-bottle-unit"),d=document.getElementById("edit-bottle-amount"),m=document.getElementById("edit-bottle-type-container"),E=document.getElementById("edit-bottle-type");document.getElementById("edit-bottle-time").value=ee(Ot(c)),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";const T=document.getElementById("edit-bottle-type-indicator"),b=document.getElementById("edit-bottle-type-text");if(t.subType==="Formula"){m.style.display="block";const P=(t.notes||"").split(`
`)[0];P==="Bobbie"||P==="Enfamil"?(E.value=P,T&&b&&(b.textContent=P,T.style.display="block")):(E.value="",T&&(T.style.display="none"))}else m.style.display="none",E.value="",T&&(T.style.display="none")}else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=ee(Ot(c)),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const h=document.getElementById("edit-pump-unit"),d=document.getElementById("edit-pump-amount");document.getElementById("edit-pump-start-time").value=ee(Ot(c)),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}else t.type==="Sleep"&&(a.style.display="block",document.getElementById("edit-sleep-start-time").value=ee(Ot(c)),t.endTime?document.getElementById("edit-sleep-end-time").value=ee(Ot(t.endTime.toDate())):document.getElementById("edit-sleep-end-time").value=ee(Xt()),document.getElementById("edit-sleep-notes").value=t.notes||"");e.style.display="block"}function qc(){const n=document.getElementById("edit-modal");n.style.display="none",zr=null;const t=document.getElementById("edit-status");t.style.display="none"}async function Bp(){if(!zr)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields"),s=document.getElementById("edit-sleep-fields");let o={};const a=new Date;if(t.style.display==="block"){const c=document.getElementById("edit-bottle-time"),h=c.value,d=parseFloat(document.getElementById("edit-bottle-amount").value),m=document.getElementById("edit-bottle-unit").value,E=document.getElementById("edit-bottle-notes").value,T=document.getElementById("edit-bottle-type-container"),b=document.getElementById("edit-bottle-type").value;if(!h)throw new Error("Start time is required");const V=dt(c.value);if(V>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");if(T.style.display!=="none"&&!b)throw new Error("Formula type is required");o={startTime:j.fromDate(V),amount:d,unit:m,notes:E}}else if(e.style.display==="block"){const c=document.getElementById("edit-diaper-time"),h=c.value,d=document.getElementById("edit-diaper-type").value,m=document.getElementById("edit-diaper-notes").value;if(!h)throw new Error("Start time is required");const E=dt(c.value);if(E>a)throw new Error("Cannot set time in the future");if(!d)throw new Error("Diaper type is required");o={startTime:j.fromDate(E),diaperType:d,notes:m}}else if(r.style.display==="block"){const c=document.getElementById("edit-pump-start-time"),h=c.value,d=parseFloat(document.getElementById("edit-pump-amount").value),m=document.getElementById("edit-pump-unit").value,E=document.getElementById("edit-pump-notes").value;if(!h)throw new Error("Start time is required");const T=dt(c.value);if(T>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");o={startTime:j.fromDate(T),amount:d,unit:m,notes:E}}else if(s.style.display==="block"){const c=document.getElementById("edit-sleep-start-time"),h=document.getElementById("edit-sleep-end-time"),d=document.getElementById("edit-sleep-notes").value;if(!c.value)throw new Error("Start time is required");const m=dt(c.value);if(m>a)throw new Error("Cannot set time in the future");if(o={startTime:j.fromDate(m),notes:d},h.value){const E=dt(h.value);if(E>a)throw new Error("End time cannot be in the future");if(E<=m)throw new Error("End time must be after start time");o.endTime=j.fromDate(E)}else o.endTime=null}await ap(gn(at,"entries",zr),o),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(async()=>{qc(),Ee(),De(),await cs()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function Lp(n){if(confirm("Are you sure you want to delete this entry?"))try{await lp(gn(at,"entries",n)),Ee(),De(),await cs()}catch{alert("Failed to delete entry")}}async function Fp(){await cs(),Fs&&clearInterval(Fs),Os&&clearInterval(Os),Us&&clearInterval(Us),$s&&clearInterval($s),qs&&clearInterval(qs),js&&clearInterval(js),Fs=window.setInterval(()=>Kc(),1e3),Os=window.setInterval(()=>Wc(),1e3),Us=window.setInterval(()=>Gc(),1e3),$s=window.setInterval(()=>Qc(),1e3),qs=window.setInterval(()=>Xc(),1e3),js=window.setInterval(()=>Zc(),1e3)}async function cs(){await Promise.all([jc(),zc(),Hc(),Yc(),Jc()])}async function jc(){try{const n=It(_t(at,"entries"),Y("type","==","Feed"),wt("startTime","desc"),sr(1)),t=await St(n);if(t.empty)localStorage.removeItem("lastBottleTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastBottleTime",r.toISOString())}Kc()}catch(n){console.error("Error fetching last bottle time:",n)}}async function zc(){try{const n=It(_t(at,"entries"),Y("type","==","Diaper"),wt("startTime","desc")),t=await St(n);let e,r;t.forEach(s=>{const o=s.data(),a=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&e===void 0&&(e=a),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&r===void 0&&(r=a)}),e!==void 0?localStorage.setItem("lastPeeTime",e.toISOString()):localStorage.removeItem("lastPeeTime"),r!==void 0?localStorage.setItem("lastPooTime",r.toISOString()):localStorage.removeItem("lastPooTime"),Wc(),Gc()}catch(n){console.error("Error fetching last diaper times:",n)}}async function Hc(){try{const n=It(_t(at,"entries"),Y("type","==","Pump"),wt("startTime","desc"),sr(1)),t=await St(n);if(t.empty)localStorage.removeItem("lastPumpTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastPumpTime",r.toISOString())}Qc()}catch(n){console.error("Error fetching last pump time:",n)}}function un(n,t){if(!n)return t;const e=new Date(n),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),c=Math.floor(s%(1e3*60)/1e3);return o>0?`${o}h ${a}m ${c}s`:a>0?`${a}m ${c}s`:`${c}s`}function Kc(){const n=document.getElementById("last-bottle-value");if(!n)return;const t=localStorage.getItem("lastBottleTime");if(!t){n.innerHTML="No bottles recorded";return}const e=un(t,"No bottles recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>3){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*3*60*60*1e3),E=Ot(m),T=E.getHours(),b=String(E.getMinutes()).padStart(2,"0"),V=T>=12?"pm":"am",P=T%12||12;c.push(`${P}:${b} ${V}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*3*60*60*1e3),E=Ot(m),T=E.getHours(),b=String(E.getMinutes()).padStart(2,"0"),V=T>=12?"pm":"am",P=T%12||12;c.push(`${P}:${b} ${V}`)}const h=c.map((d,m)=>`+ ${(m+1)*3} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${h}</span>`}function Wc(){const n=document.getElementById("last-pee-value");if(!n)return;const t=localStorage.getItem("lastPeeTime");n.textContent=un(t,"No pee recorded")}function Gc(){const n=document.getElementById("last-poo-value");if(!n)return;const t=localStorage.getItem("lastPooTime");n.textContent=un(t,"No poo recorded")}function Qc(){const n=document.getElementById("last-pump-value");if(!n)return;const t=localStorage.getItem("lastPumpTime");if(!t){n.innerHTML="No pumps recorded";return}const e=un(t,"No pumps recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>4){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*4*60*60*1e3),E=Ot(m),T=E.getHours(),b=String(E.getMinutes()).padStart(2,"0"),V=T>=12?"pm":"am",P=T%12||12;c.push(`${P}:${b} ${V}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*4*60*60*1e3),E=Ot(m),T=E.getHours(),b=String(E.getMinutes()).padStart(2,"0"),V=T>=12?"pm":"am",P=T%12||12;c.push(`${P}:${b} ${V}`)}const h=c.map((d,m)=>`+ ${(m+1)*4} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${h}</span>`}async function Yc(){try{const n=It(_t(at,"entries"),Y("type","==","Sleep"),wt("startTime","desc"),sr(1)),t=await St(n);if(t.empty)localStorage.removeItem("lastSleepEndTime"),localStorage.removeItem("sleepInProgressStart");else{const e=t.docs[0].data();e.endTime?(localStorage.setItem("lastSleepEndTime",e.endTime.toDate().toISOString()),localStorage.removeItem("sleepInProgressStart")):(localStorage.removeItem("lastSleepEndTime"),localStorage.setItem("sleepInProgressStart",e.startTime.toDate().toISOString()))}Xc()}catch(n){console.error("Error fetching last sleep end time:",n)}}function Xc(){const n=document.getElementById("time-awake-value"),t=document.getElementById("time-awake-label");if(!n)return;const e=localStorage.getItem("sleepInProgressStart");if(e){t&&(t.textContent="Time Asleep"),n.textContent=un(e,"No sleep recorded");return}t&&(t.textContent="Time Awake");const r=localStorage.getItem("lastSleepEndTime");n.textContent=un(r,"No sleep recorded")}async function Jc(){try{const n=Xt(),t=new Date(n);t.setHours(7,0,0,0);const e=dt(ee(t)),r=It(_t(at,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(e)),wt("startTime","asc")),s=await St(r);let o=0,a=null;s.forEach(c=>{const h=c.data(),d=h.startTime.toDate(),m=Ot(d);if(d>=e&&m.toDateString()===n.toDateString())if(h.endTime){const E=h.endTime.toDate();o+=E.getTime()-d.getTime()}else a=d.toISOString()}),localStorage.setItem("napTimeCompletedMs",String(o)),a?localStorage.setItem("napTimeInProgressStart",a):localStorage.removeItem("napTimeInProgressStart"),Zc()}catch(n){console.error("Error fetching nap time:",n)}}function Zc(){const n=document.getElementById("nap-time-value");if(!n)return;const t=parseInt(localStorage.getItem("napTimeCompletedMs")||"0",10),e=localStorage.getItem("napTimeInProgressStart");let r=t;if(e){const c=new Date(e);r+=new Date().getTime()-c.getTime()}if(r<=0){n.textContent="0m";return}const s=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60)),a=Math.floor(r%(1e3*60)/1e3);s>0?n.textContent=`${s}h ${o}m ${a}s`:o>0?n.textContent=`${o}m ${a}s`:n.textContent=`${a}s`}window.addEventListener("DOMContentLoaded",()=>{var n,t;if(pp()){const e=document.getElementById("passcode-screen"),r=document.getElementById("app");e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Uc()}else(n=document.getElementById("passcode-submit"))==null||n.addEventListener("click",el),(t=document.getElementById("passcode-input"))==null||t.addEventListener("keypress",e=>{e.key==="Enter"&&el()})});
