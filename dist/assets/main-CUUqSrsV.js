(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var bo={};/**
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
 */const Sa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Bu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,I=(o&3)<<4|u>>4;let A=(u&15)<<2|f>>6,S=f&63;h||(S=64,a||(A=64)),r.push(e[m],e[I],e[A],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Sa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Bu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const I=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||I==null)throw new Uu;const A=o<<2|u>>4;if(r.push(A),f!==64){const S=u<<4&240|f>>2;if(r.push(S),I!==64){const k=f<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qu=function(n){const t=Sa(n);return Pa.encodeByteArray(t,!0)},rr=function(n){return qu(n).replace(/\./g,"")},$u=function(n){try{return Pa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ju(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zu=()=>ju().__FIREBASE_DEFAULTS__,Hu=()=>{if(typeof process>"u"||typeof bo>"u")return;const n=bo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ku=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&$u(n[1]);return t&&JSON.parse(t)},Os=()=>{try{return zu()||Hu()||Ku()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wu=n=>{var t,e;return(e=(t=Os())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Gu=n=>{const t=Wu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ca=()=>{var n;return(n=Os())===null||n===void 0?void 0:n.config};/**
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
 */class Qu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Yu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[rr(JSON.stringify(e)),rr(JSON.stringify(a)),""].join(".")}/**
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
 */function Xu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ju(){var n;const t=(n=Os())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zu(){return!Ju()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tc(){try{return typeof indexedDB=="object"}catch{return!1}}function ec(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const nc="FirebaseError";class ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=nc,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?rc(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new ke(s,u,r)}}function rc(n,t){return n.replace(sc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const sc=/\{\$([^}]+)}/g;function cs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(So(o)&&So(a)){if(!cs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function So(n){return n!==null&&typeof n=="object"}/**
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
 */function Ot(n){return n&&n._delegate?n._delegate:n}class cn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const re="[DEFAULT]";/**
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
 */class ic{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Qu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ac(t))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=re){return this.instances.has(t)}getOptions(t=re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=re){return this.component?this.component.multipleInstances?t:re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oc(n){return n===re?void 0:n}function ac(n){return n.instantiationMode==="EAGER"}/**
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
 */class lc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ic(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const uc={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},cc=z.INFO,hc={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},dc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=hc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=cc,this._logHandler=dc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const fc=(n,t)=>t.some(e=>n instanceof e);let Po,Co;function mc(){return Po||(Po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pc(){return Co||(Co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ka=new WeakMap,hs=new WeakMap,Na=new WeakMap,es=new WeakMap,xs=new WeakMap;function gc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Ht(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ka.set(e,n)}).catch(()=>{}),xs.set(t,n),t}function _c(n){if(hs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});hs.set(n,t)}let ds={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return hs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Na.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ht(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function yc(n){ds=n(ds)}function Ec(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ns(this),t,...e);return Na.set(r,t.sort?t.sort():[t]),Ht(r)}:pc().includes(n)?function(...t){return n.apply(ns(this),t),Ht(ka.get(this))}:function(...t){return Ht(n.apply(ns(this),t))}}function vc(n){return typeof n=="function"?Ec(n):(n instanceof IDBTransaction&&_c(n),fc(n,mc())?new Proxy(n,ds):n)}function Ht(n){if(n instanceof IDBRequest)return gc(n);if(es.has(n))return es.get(n);const t=vc(n);return t!==n&&(es.set(n,t),xs.set(t,n)),t}const ns=n=>xs.get(n);function Tc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Ht(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ht(a.result),h.oldVersion,h.newVersion,Ht(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Ic=["get","getKey","getAll","getAllKeys","count"],wc=["put","add","delete","clear"],rs=new Map;function Vo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(rs.get(t))return rs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=wc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ic.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&h.done]))[0]};return rs.set(t,o),o}yc(n=>({...n,get:(t,e,r)=>Vo(t,e)||n.get(t,e,r),has:(t,e)=>!!Vo(t,e)||n.has(t,e)}));/**
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
 */class Ac{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Rc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Rc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fs="@firebase/app",Do="0.10.13";/**
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
 */const xt=new Da("@firebase/app"),bc="@firebase/app-compat",Sc="@firebase/analytics-compat",Pc="@firebase/analytics",Cc="@firebase/app-check-compat",Vc="@firebase/app-check",Dc="@firebase/auth",kc="@firebase/auth-compat",Nc="@firebase/database",Mc="@firebase/data-connect",Oc="@firebase/database-compat",xc="@firebase/functions",Lc="@firebase/functions-compat",Fc="@firebase/installations",Bc="@firebase/installations-compat",Uc="@firebase/messaging",qc="@firebase/messaging-compat",$c="@firebase/performance",jc="@firebase/performance-compat",zc="@firebase/remote-config",Hc="@firebase/remote-config-compat",Kc="@firebase/storage",Wc="@firebase/storage-compat",Gc="@firebase/firestore",Qc="@firebase/vertexai-preview",Yc="@firebase/firestore-compat",Xc="firebase",Jc="10.14.1";/**
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
 */const ms="[DEFAULT]",Zc={[fs]:"fire-core",[bc]:"fire-core-compat",[Pc]:"fire-analytics",[Sc]:"fire-analytics-compat",[Vc]:"fire-app-check",[Cc]:"fire-app-check-compat",[Dc]:"fire-auth",[kc]:"fire-auth-compat",[Nc]:"fire-rtdb",[Mc]:"fire-data-connect",[Oc]:"fire-rtdb-compat",[xc]:"fire-fn",[Lc]:"fire-fn-compat",[Fc]:"fire-iid",[Bc]:"fire-iid-compat",[Uc]:"fire-fcm",[qc]:"fire-fcm-compat",[$c]:"fire-perf",[jc]:"fire-perf-compat",[zc]:"fire-rc",[Hc]:"fire-rc-compat",[Kc]:"fire-gcs",[Wc]:"fire-gcs-compat",[Gc]:"fire-fst",[Yc]:"fire-fst-compat",[Qc]:"fire-vertex","fire-js":"fire-js",[Xc]:"fire-js-all"};/**
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
 */const sr=new Map,th=new Map,ps=new Map;function ko(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ir(n){const t=n.name;if(ps.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;ps.set(t,n);for(const e of sr.values())ko(e,n);for(const e of th.values())ko(e,n);return!0}function eh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const nh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Va("app","Firebase",nh);/**
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
 */class rh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const sh=Jc;function Ma(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ms,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(e||(e=Ca()),!e)throw Kt.create("no-options");const o=sr.get(s);if(o){if(cs(e,o.options)&&cs(r,o.config))return o;throw Kt.create("duplicate-app",{appName:s})}const a=new lc(s);for(const h of ps.values())a.addComponent(h);const u=new rh(e,r,a);return sr.set(s,u),u}function ih(n=ms){const t=sr.get(n);if(!t&&n===ms&&Ca())return Ma();if(!t)throw Kt.create("no-app",{appName:n});return t}function Ie(n,t,e){var r;let s=(r=Zc[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(u.join(" "));return}ir(new cn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const oh="firebase-heartbeat-database",ah=1,hn="firebase-heartbeat-store";let ss=null;function Oa(){return ss||(ss=Tc(oh,ah,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(hn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),ss}async function lh(n){try{const e=(await Oa()).transaction(hn),r=await e.objectStore(hn).get(xa(n));return await e.done,r}catch(t){if(t instanceof ke)xt.warn(t.message);else{const e=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(e.message)}}}async function No(n,t){try{const r=(await Oa()).transaction(hn,"readwrite");await r.objectStore(hn).put(t,xa(n)),await r.done}catch(e){if(e instanceof ke)xt.warn(e.message);else{const r=Kt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xt.warn(r.message)}}}function xa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const uh=1024,ch=30*24*60*60*1e3;class hh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new fh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Mo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=ch}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mo(),{heartbeatsToSend:r,unsentEntries:s}=dh(this._heartbeatsCache.heartbeats),o=rr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function Mo(){return new Date().toISOString().substring(0,10)}function dh(n,t=uh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Oo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Oo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class fh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tc()?ec().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await lh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return No(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return No(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Oo(n){return rr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function mh(n){ir(new cn("platform-logger",t=>new Ac(t),"PRIVATE")),ir(new cn("heartbeat",t=>new hh(t),"PRIVATE")),Ie(fs,Do,n),Ie(fs,Do,"esm2017"),Ie("fire-js","")}mh("");var ph="firebase",gh="10.14.1";/**
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
 */Ie(ph,gh,"app");var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ie,La;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,w){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var w=v.g[3],g=p+(w^_&(E^w))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(w^_&(E^w))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(w^_&(E^w))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(w^_&(E^w))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^w&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^w)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^w)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^w)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^w)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~w))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~w))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~w))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~w))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,w=0;w<p;){if(E==0)for(;w<=_;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<p;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){s(this,y),E=0;break}}else for(;w<p;)if(y[E++]=v[w++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==p||(_[E]=w,y=!1)}this.g=_}var u={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return P(f(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return P(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=I,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+w),p);8>w?(w=f(Math.pow(p,w)),y=y.j(w).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var I=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(D(this))return"-"+P(this).toString(v);for(var p=f(Math.pow(v,6)),_=this,y="";;){var E=et(_,p).g;_=U(_,E.j(p));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,k(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function D(v){return v.h==-1}n.l=function(v){return v=U(this,v),D(v)?-1:k(v)?0:1};function P(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new a(_,~v.h).add(A)}n.abs=function(){return D(this)?P(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(v,p){return v.add(P(p))}n.j=function(v){if(k(this)||k(v))return I;if(D(this))return D(v)?P(this).j(P(v)):P(P(this).j(v));if(D(v))return P(this.j(P(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,kt=v.i(E)>>>16,Fe=v.i(E)&65535;_[2*y+2*E]+=g*Fe,B(_,2*y+2*E),_[2*y+2*E+1]+=w*Fe,B(_,2*y+2*E+1),_[2*y+2*E+1]+=g*kt,B(_,2*y+2*E+1),_[2*y+2*E+2]+=w*kt,B(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function B(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function $(v,p){this.g=v,this.h=p}function et(v,p){if(k(p))throw Error("division by zero");if(k(v))return new $(I,I);if(D(v))return p=et(P(v),p),new $(P(p.g),P(p.h));if(D(p))return p=et(v,P(p)),new $(P(p.g),p.h);if(30<v.g.length){if(D(v)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=p;0>=y.l(v);)_=Dt(_),y=Dt(y);var E=it(_,1),w=it(y,1);for(y=it(y,2),_=it(_,2);!k(y);){var g=w.add(y);0>=g.l(v)&&(E=E.add(_),w=g),y=it(y,1),_=it(_,1)}return p=U(v,E.j(p)),new $(E,p)}for(E=I;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),g=w.j(p);D(g)||0<g.l(v);)_-=y,w=f(_),g=w.j(p);k(w)&&(w=A),E=E.add(w),v=U(v,g)}return new $(E,v)}n.A=function(v){return et(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Dt(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function it(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],w=0;w<y;w++)E[w]=0<p?v.i(w+_)>>>p|v.i(w+_+1)<<32-p:v.i(w+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,La=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ie=a}).apply(typeof xo<"u"?xo:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,nn,Ba,Jn,gs,Ua,qa,$a;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var T=i[d];if(!(T in c))break t;c=c[T]}i=i[i.length-1],d=c[i],l=l(d),l!=d&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,d=!1,T={next:function(){if(!d&&c<i.length){var R=c++;return{value:l(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function I(i,l,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),i.apply(l,T)}}return function(){return i.apply(l,arguments)}}function A(i,l,c){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:I,A.apply(null,arguments)}function S(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function k(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,T,R){for(var V=Array(arguments.length-2),G=2;G<arguments.length;G++)V[G-2]=arguments[G];return l.prototype[T].apply(d,V)}}function D(i){const l=i.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=i[d];return c}return[]}function P(i,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const T=i.length||0,R=d.length||0;i.length=T+R;for(let V=0;V<R;V++)i[T+V]=d[V]}else i.push(d)}}class U{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function et(i){return et[" "](i),i}et[" "]=function(){};var Dt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function it(i,l,c){for(const d in i)l.call(c,i[d],d,i)}function v(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function p(i){const l={};for(const c in i)l[c]=i[c];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,l){let c,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(c in d)i[c]=d[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function E(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function w(i){u.setTimeout(()=>{throw i},0)}function g(){var i=Dr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class kt{constructor(){this.h=this.g=null}add(l,c){const d=Fe.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Fe=new U(()=>new su,i=>i.reset());class su{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,Ue=!1,Dr=new kt,Ri=()=>{const i=u.Promise.resolve(void 0);Be=()=>{i.then(iu)}};var iu=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){w(c)}var l=Fe;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Ue=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var ou=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function qe(i,l){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Dt){t:{try{et(l.nodeName);var T=!0;break t}catch{}T=!1}T||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:au[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&qe.aa.h.call(this)}}k(qe,ht);var au={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),lu=0;function uu(i,l,c,d,T){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=T,this.key=++lu,this.da=this.fa=!1}function Pn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Cn(i){this.src=i,this.g={},this.h=0}Cn.prototype.add=function(i,l,c,d,T){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var V=Nr(i,l,d,T);return-1<V?(l=i[V],c||(l.fa=!1)):(l=new uu(l,this.src,R,!!d,T),l.fa=c,i.push(l)),l};function kr(i,l){var c=l.type;if(c in i.g){var d=i.g[c],T=Array.prototype.indexOf.call(d,l,void 0),R;(R=0<=T)&&Array.prototype.splice.call(d,T,1),R&&(Pn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Nr(i,l,c,d){for(var T=0;T<i.length;++T){var R=i[T];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==d)return T}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),Or={};function bi(i,l,c,d,T){if(Array.isArray(l)){for(var R=0;R<l.length;R++)bi(i,l[R],c,d,T);return null}return c=Ci(c),i&&i[Sn]?i.K(l,c,f(d)?!!d.capture:!1,T):cu(i,l,c,!1,d,T)}function cu(i,l,c,d,T,R){if(!l)throw Error("Invalid event type");var V=f(T)?!!T.capture:!!T,G=Lr(i);if(G||(i[Mr]=G=new Cn(i)),c=G.add(l,c,d,V,R),c.proxy)return c;if(d=hu(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)ou||(T=V),T===void 0&&(T=!1),i.addEventListener(l.toString(),d,T);else if(i.attachEvent)i.attachEvent(Pi(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function hu(){function i(c){return l.call(i.src,i.listener,c)}const l=du;return i}function Si(i,l,c,d,T){if(Array.isArray(l))for(var R=0;R<l.length;R++)Si(i,l[R],c,d,T);else d=f(d)?!!d.capture:!!d,c=Ci(c),i&&i[Sn]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],c=Nr(R,c,d,T),-1<c&&(Pn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=Lr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Nr(l,c,d,T)),(c=-1<i?l[i]:null)&&xr(c))}function xr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Sn])kr(l.i,i);else{var c=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(c,d,i.capture):l.detachEvent?l.detachEvent(Pi(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=Lr(l))?(kr(c,i),c.h==0&&(c.src=null,l[Mr]=null)):Pn(i)}}}function Pi(i){return i in Or?Or[i]:Or[i]="on"+i}function du(i,l){if(i.da)i=!0;else{l=new qe(l,this);var c=i.listener,d=i.ha||i.src;i.fa&&xr(i),i=c.call(d,l)}return i}function Lr(i){return i=i[Mr],i instanceof Cn?i:null}var Fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ci(i){return typeof i=="function"?i:(i[Fr]||(i[Fr]=function(l){return i.handleEvent(l)}),i[Fr])}function dt(){Bt.call(this),this.i=new Cn(this),this.M=this,this.F=null}k(dt,Bt),dt.prototype[Sn]=!0,dt.prototype.removeEventListener=function(i,l,c,d){Si(this,i,l,c,d)};function yt(i,l){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new ht(l,i);else if(l instanceof ht)l.target=l.target||i;else{var T=l;l=new ht(d,i),y(l,T)}if(T=!0,c)for(var R=c.length-1;0<=R;R--){var V=l.g=c[R];T=Vn(V,d,!0,l)&&T}if(V=l.g=i,T=Vn(V,d,!0,l)&&T,T=Vn(V,d,!1,l)&&T,c)for(R=0;R<c.length;R++)V=l.g=c[R],T=Vn(V,d,!1,l)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],d=0;d<c.length;d++)Pn(c[d]);delete i.g[l],i.h--}}this.F=null},dt.prototype.K=function(i,l,c,d){return this.i.add(String(i),l,!1,c,d)},dt.prototype.L=function(i,l,c,d){return this.i.add(String(i),l,!0,c,d)};function Vn(i,l,c,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,R=0;R<l.length;++R){var V=l[R];if(V&&!V.da&&V.capture==c){var G=V.listener,ot=V.ha||V.src;V.fa&&kr(i.i,V),T=G.call(ot,d)!==!1&&T}}return T&&!d.defaultPrevented}function Vi(i,l,c){if(typeof i=="function")c&&(i=A(i,c));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Di(i){i.g=Vi(()=>{i.g=null,i.i&&(i.i=!1,Di(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class fu extends Bt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(i){Bt.call(this),this.h=i,this.g={}}k($e,Bt);var ki=[];function Ni(i){it(i.g,function(l,c){this.g.hasOwnProperty(c)&&xr(l)},i),i.g={}}$e.prototype.N=function(){$e.aa.N.call(this),Ni(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Br=u.JSON.stringify,mu=u.JSON.parse,pu=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Ur(){}Ur.prototype.h=null;function Mi(i){return i.h||(i.h=i.i())}function Oi(){}var je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qr(){ht.call(this,"d")}k(qr,ht);function $r(){ht.call(this,"c")}k($r,ht);var Zt={},xi=null;function Dn(){return xi=xi||new dt}Zt.La="serverreachability";function Li(i){ht.call(this,Zt.La,i)}k(Li,ht);function ze(i){const l=Dn();yt(l,new Li(l))}Zt.STAT_EVENT="statevent";function Fi(i,l){ht.call(this,Zt.STAT_EVENT,i),this.stat=l}k(Fi,ht);function Et(i){const l=Dn();yt(l,new Fi(l,i))}Zt.Ma="timingevent";function Bi(i,l){ht.call(this,Zt.Ma,i),this.size=l}k(Bi,ht);function He(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function Ke(){this.g=!0}Ke.prototype.xa=function(){this.g=!1};function gu(i,l,c,d,T,R){i.info(function(){if(i.g)if(R)for(var V="",G=R.split("&"),ot=0;ot<G.length;ot++){var H=G[ot].split("=");if(1<H.length){var ft=H[0];H=H[1];var mt=ft.split("_");V=2<=mt.length&&mt[1]=="type"?V+(ft+"="+H+"&"):V+(ft+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+l+`
`+c+`
`+V})}function _u(i,l,c,d,T,R,V){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+l+`
`+c+`
`+R+" "+V})}function fe(i,l,c,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Eu(i,c)+(d?" "+d:"")})}function yu(i,l){i.info(function(){return"TIMEOUT: "+l})}Ke.prototype.info=function(){};function Eu(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<T.length;V++)T[V]=""}}}}return Br(c)}catch{return l}}var kn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ui={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function Nn(){}k(Nn,Ur),Nn.prototype.g=function(){return new XMLHttpRequest},Nn.prototype.i=function(){return{}},jr=new Nn;function Ut(i,l,c,d){this.j=i,this.i=l,this.l=c,this.R=d||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qi}function qi(){this.i=null,this.g="",this.h=!1}var $i={},zr={};function Hr(i,l,c){i.L=1,i.v=Ln(Nt(l)),i.m=c,i.P=!0,ji(i,null)}function ji(i,l){i.F=Date.now(),Mn(i),i.A=Nt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),ro(c.i,"t",d),i.C=0,c=i.j.J,i.h=new qi,i.g=Io(i.j,c?l:null,!i.m),0<i.O&&(i.M=new fu(A(i.Y,i,i.g),i.O)),l=i.U,c=i.g,d=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(ki[0]=T.toString()),T=ki);for(var R=0;R<T.length;R++){var V=bi(c,T[R],d||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),ze(),gu(i.i,i.u,i.A,i.l,i.R,i.m)}Ut.prototype.ca=function(i){i=i.target;const l=this.M;l&&Mt(i)==3?l.j():this.Y(i)},Ut.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Mt(this.g);var l=this.g.Ba();const ge=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||co(this.g)))){this.J||mt!=4||l==7||(l==8||0>=ge?ze(3):ze(2)),Kr(this);var c=this.g.Z();this.X=c;e:if(zi(this)){var d=co(this.g);i="";var T=d.length,R=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),We(this);var V="";break e}this.h.i=new u.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(R&&l==T-1)});d.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,_u(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var G,ot=this.g;if((G=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(G)){var H=G;break e}}H=null}if(c=H)fe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,c);else{this.o=!1,this.s=3,Et(12),te(this),We(this);break t}}if(this.P){c=!0;let At;for(;!this.J&&this.C<V.length;)if(At=vu(this,V),At==zr){mt==4&&(this.s=4,Et(14),c=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(At==$i){this.s=4,Et(15),fe(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else fe(this.i,this.l,At,null),Wr(this,At);if(zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||V.length!=0||this.h.h||(this.s=1,Et(16),c=!1),this.o=this.o&&c,!c)fe(this.i,this.l,V,"[Invalid Chunked Response]"),te(this),We(this);else if(0<V.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Zr(ft),ft.M=!0,Et(11))}}else fe(this.i,this.l,V,null),Wr(this,V);mt==4&&te(this),this.o&&!this.J&&(mt==4?yo(this.j,this):(this.o=!1,Mn(this)))}else Lu(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),te(this),We(this)}}}catch{}finally{}};function zi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function vu(i,l){var c=i.C,d=l.indexOf(`
`,c);return d==-1?zr:(c=Number(l.substring(c,d)),isNaN(c)?$i:(d+=1,d+c>l.length?zr:(l=l.slice(d,d+c),i.C=d+c,l)))}Ut.prototype.cancel=function(){this.J=!0,te(this)};function Mn(i){i.S=Date.now()+i.I,Hi(i,i.I)}function Hi(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=He(A(i.ba,i),l)}function Kr(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Ut.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(yu(this.i,this.A),this.L!=2&&(ze(),Et(17)),te(this),this.s=2,We(this)):Hi(this,this.S-i)};function We(i){i.j.G==0||i.J||yo(i.j,i)}function te(i){Kr(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Ni(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Wr(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||Gr(c.h,i))){if(!i.K&&Gr(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)jn(c),qn(c);else break t;Jr(c),Et(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=He(A(c.Za,c),6e3));if(1>=Gi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ne(c,11)}else if((i.K||c.g==i)&&jn(c),!B(l))for(T=c.Da.g.parse(l),l=0;l<T.length;l++){let H=T[l];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const ft=H[3];ft!=null&&(c.la=ft,c.j.info("VER="+c.la));const mt=H[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const ge=H[5];ge!=null&&typeof ge=="number"&&0<ge&&(d=1.5*ge,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const At=i.g;if(At){const Hn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var R=d.h;R.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Qr(R,R.h),R.h=null))}if(d.D){const ts=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;ts&&(d.ya=ts,Y(d.I,d.D,ts))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var V=i;if(d.qa=To(d,d.J?d.ia:null,d.W),V.K){Qi(d.h,V);var G=V,ot=d.L;ot&&(G.I=ot),G.B&&(Kr(G),Mn(G)),d.g=V}else go(d);0<c.i.length&&$n(c)}else H[0]!="stop"&&H[0]!="close"||ne(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ne(c,7):Xr(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}ze(4)}catch{}}var Tu=class{constructor(i,l){this.g=i,this.map=l}};function Ki(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Gi(i){return i.h?1:i.g?i.g.size:0}function Gr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Qr(i,l){i.g?i.g.add(l):i.h=l}function Qi(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ki.prototype.cancel=function(){if(this.i=Yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Yi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return D(i.i)}function Iu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,d=0;d<c;d++)l.push(i[d]);return l}l=[],c=0;for(d in i)l[c++]=i[d];return l}function wu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const d in i)l[c++]=d;return l}}}function Xi(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=wu(i),d=Iu(i),T=d.length,R=0;R<T;R++)l.call(void 0,d[R],c&&c[R],i)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Au(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),T=null;if(0<=d){var R=i[c].substring(0,d);T=i[c].substring(d+1)}else R=i[c];l(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ee(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ee){this.h=i.h,On(this,i.j),this.o=i.o,this.g=i.g,xn(this,i.s),this.l=i.l;var l=i.i,c=new Ye;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Zi(this,c),this.m=i.m}else i&&(l=String(i).match(Ji))?(this.h=!1,On(this,l[1]||"",!0),this.o=Ge(l[2]||""),this.g=Ge(l[3]||"",!0),xn(this,l[4]),this.l=Ge(l[5]||"",!0),Zi(this,l[6]||"",!0),this.m=Ge(l[7]||"")):(this.h=!1,this.i=new Ye(null,this.h))}ee.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Qe(l,to,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Qe(l,to,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Qe(c,c.charAt(0)=="/"?Su:bu,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Qe(c,Cu)),i.join("")};function Nt(i){return new ee(i)}function On(i,l,c){i.j=c?Ge(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function xn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Zi(i,l,c){l instanceof Ye?(i.i=l,Vu(i.i,i.h)):(c||(l=Qe(l,Pu)),i.i=new Ye(l,i.h))}function Y(i,l,c){i.i.set(l,c)}function Ln(i){return Y(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ge(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Qe(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Ru),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Ru(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var to=/[#\/\?@]/g,bu=/[#\?:]/g,Su=/[#\?]/g,Pu=/[#\?@]/g,Cu=/#/g;function Ye(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function qt(i){i.g||(i.g=new Map,i.h=0,i.i&&Au(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Ye.prototype,n.add=function(i,l){qt(this),this.i=null,i=me(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function eo(i,l){qt(i),l=me(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function no(i,l){return qt(i),l=me(i,l),i.g.has(l)}n.forEach=function(i,l){qt(this),this.g.forEach(function(c,d){c.forEach(function(T){i.call(l,T,d,this)},this)},this)},n.na=function(){qt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const T=i[d];for(let R=0;R<T.length;R++)c.push(l[d])}return c},n.V=function(i){qt(this);let l=[];if(typeof i=="string")no(this,i)&&(l=l.concat(this.g.get(me(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return qt(this),this.i=null,i=me(this,i),no(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function ro(i,l,c){eo(i,l),0<c.length&&(i.i=null,i.g.set(me(i,l),D(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const R=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var T=R;V[d]!==""&&(T+="="+encodeURIComponent(String(V[d]))),i.push(T)}}return this.i=i.join("&")};function me(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Vu(i,l){l&&!i.j&&(qt(i),i.i=null,i.g.forEach(function(c,d){var T=d.toLowerCase();d!=T&&(eo(this,d),ro(this,T,c))},i)),i.j=l}function Du(i,l){const c=new Ke;if(u.Image){const d=new Image;d.onload=S($t,c,"TestLoadImage: loaded",!0,l,d),d.onerror=S($t,c,"TestLoadImage: error",!1,l,d),d.onabort=S($t,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=S($t,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function ku(i,l){const c=new Ke,d=new AbortController,T=setTimeout(()=>{d.abort(),$t(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(T),R.ok?$t(c,"TestPingServer: ok",!0,l):$t(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),$t(c,"TestPingServer: error",!1,l)})}function $t(i,l,c,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(c)}catch{}}function Nu(){this.g=new pu}function Mu(i,l,c){const d=c||"";try{Xi(i,function(T,R){let V=T;f(T)&&(V=Br(T)),l.push(d+R+"="+encodeURIComponent(V))})}catch(T){throw l.push(d+"type="+encodeURIComponent("_badmap")),T}}function Fn(i){this.l=i.Ub||null,this.j=i.eb||!1}k(Fn,Ur),Fn.prototype.g=function(){return new Bn(this.l,this.j)},Fn.prototype.i=function(i){return function(){return i}}({});function Bn(i,l){dt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Bn,dt),n=Bn.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Je(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Je(this)),this.g&&(this.readyState=3,Je(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;so(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function so(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Xe(this):Je(this),this.readyState==3&&so(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Xe(this))},n.Qa=function(i){this.g&&(this.response=i,Xe(this))},n.ga=function(){this.g&&Xe(this)};function Xe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Je(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function Je(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function io(i){let l="";return it(i,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function Yr(i,l,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=io(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):Y(i,l,c))}function Z(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Z,dt);var Ou=/^https?$/i,xu=["POST","PUT"];n=Z.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?Mi(this.o):Mi(jr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){oo(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)c.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),T=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(xu,l,void 0))||d||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of c)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){oo(this,R)}};function oo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,ao(i),Un(i)}function ao(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Un(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lo(this):this.bb())},n.bb=function(){lo(this)};function lo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Mt(i)!=4||i.Z()!=2)){if(i.u&&Mt(i)==4)Vi(i.Ea,0,i);else if(yt(i,"readystatechange"),Mt(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var d;if(d=V===0){var T=String(i.D).match(Ji)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!Ou.test(T?T.toLowerCase():"")}c=d}if(c)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var R=2<Mt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",ao(i)}}finally{Un(i)}}}}function Un(i,l){if(i.g){uo(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||yt(i,"ready");try{c.onreadystatechange=d}catch{}}}function uo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Mt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),mu(l)}};function co(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Lu(i){const l={};i=(i.g&&2<=Mt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(B(i[d]))continue;var c=E(i[d]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[T]||[];l[T]=R,R.push(c)}v(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ze(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function ho(i){this.Aa=0,this.i=[],this.j=new Ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ze("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ze("baseRetryDelayMs",5e3,i),this.cb=Ze("retryDelaySeedMs",1e4,i),this.Wa=Ze("forwardChannelMaxRetries",2,i),this.wa=Ze("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(i&&i.concurrentRequestLimit),this.Da=new Nu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ho.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,d){Et(0),this.W=i,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=To(this,null,this.W),$n(this)};function Xr(i){if(fo(i),i.G==3){var l=i.U++,c=Nt(i.I);if(Y(c,"SID",i.K),Y(c,"RID",l),Y(c,"TYPE","terminate"),tn(i,c),l=new Ut(i,i.j,l),l.L=2,l.v=Ln(Nt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Io(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Mn(l)}vo(i)}function qn(i){i.g&&(Zr(i),i.g.cancel(),i.g=null)}function fo(i){qn(i),i.u&&(u.clearTimeout(i.u),i.u=null),jn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function $n(i){if(!Wi(i.h)&&!i.s){i.s=!0;var l=i.Ga;Be||Ri(),Ue||(Be(),Ue=!0),Dr.add(l,i),i.B=0}}function Fu(i,l){return Gi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=He(A(i.Ga,i,l),Eo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Ut(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=po(this,T,l),c=Nt(this.I),Y(c,"RID",i),Y(c,"CVER",22),this.D&&Y(c,"X-HTTP-Session-Id",this.D),tn(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(io(R)))+"&"+l:this.m&&Yr(c,this.m,R)),Qr(this.h,T),this.Ua&&Y(c,"TYPE","init"),this.P?(Y(c,"$req",l),Y(c,"SID","null"),T.T=!0,Hr(T,c,null)):Hr(T,c,l),this.G=2}}else this.G==3&&(i?mo(this,i):this.i.length==0||Wi(this.h)||mo(this))};function mo(i,l){var c;l?c=l.l:c=i.U++;const d=Nt(i.I);Y(d,"SID",i.K),Y(d,"RID",c),Y(d,"AID",i.T),tn(i,d),i.m&&i.o&&Yr(d,i.m,i.o),c=new Ut(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=po(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Qr(i.h,c),Hr(c,d,l)}function tn(i,l){i.H&&it(i.H,function(c,d){Y(l,d,c)}),i.l&&Xi({},function(c,d){Y(l,d,c)})}function po(i,l,c){c=Math.min(i.i.length,c);var d=i.l?A(i.l.Na,i.l,i):null;t:{var T=i.i;let R=-1;for(;;){const V=["count="+c];R==-1?0<c?(R=T[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let G=!0;for(let ot=0;ot<c;ot++){let H=T[ot].g;const ft=T[ot].map;if(H-=R,0>H)R=Math.max(0,T[ot].g-100),G=!1;else try{Mu(ft,V,"req"+H+"_")}catch{d&&d(ft)}}if(G){d=V.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,d}function go(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Be||Ri(),Ue||(Be(),Ue=!0),Dr.add(l,i),i.v=0}}function Jr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=He(A(i.Fa,i),Eo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,_o(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=He(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),qn(this),_o(this))};function Zr(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function _o(i){i.g=new Ut(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Nt(i.qa);Y(l,"RID","rpc"),Y(l,"SID",i.K),Y(l,"AID",i.T),Y(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Y(l,"TO",i.ja),Y(l,"TYPE","xmlhttp"),tn(i,l),i.m&&i.o&&Yr(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Ln(Nt(l)),c.m=null,c.P=!0,ji(c,i)}n.Za=function(){this.C!=null&&(this.C=null,qn(this),Jr(this),Et(19))};function jn(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function yo(i,l){var c=null;if(i.g==l){jn(i),Zr(i),i.g=null;var d=2}else if(Gr(i.h,l))c=l.D,Qi(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var T=i.B;d=Dn(),yt(d,new Bi(d,c)),$n(i)}else go(i);else if(T=l.s,T==3||T==0&&0<l.X||!(d==1&&Fu(i,l)||d==2&&Jr(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),T){case 1:ne(i,5);break;case 4:ne(i,10);break;case 3:ne(i,6);break;default:ne(i,2)}}}function Eo(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function ne(i,l){if(i.j.info("Error code "+l),l==2){var c=A(i.fb,i),d=i.Xa;const T=!d;d=new ee(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||On(d,"https"),Ln(d),T?Du(d.toString(),c):ku(d.toString(),c)}else Et(2);i.G=0,i.l&&i.l.sa(l),vo(i),fo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function vo(i){if(i.G=0,i.ka=[],i.l){const l=Yi(i.h);(l.length!=0||i.i.length!=0)&&(P(i.ka,l),P(i.ka,i.i),i.h.i.length=0,D(i.i),i.i.length=0),i.l.ra()}}function To(i,l,c){var d=c instanceof ee?Nt(c):new ee(c);if(d.g!="")l&&(d.g=l+"."+d.g),xn(d,d.s);else{var T=u.location;d=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var R=new ee(null);d&&On(R,d),l&&(R.g=l),T&&xn(R,T),c&&(R.l=c),d=R}return c=i.D,l=i.ya,c&&l&&Y(d,c,l),Y(d,"VER",i.la),tn(i,d),d}function Io(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Z(new Fn({eb:c})):new Z(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wo(){}n=wo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(i,l){return new Tt(i,l)};function Tt(i,l){dt.call(this),this.g=new ho(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!B(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new pe(this)}k(Tt,dt),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Xr(this.g)},Tt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Br(i),i=c);l.i.push(new Tu(l.Ya++,i)),l.G==3&&$n(l)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Xr(this.g),delete this.g,Tt.aa.N.call(this)};function Ao(i){qr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}k(Ao,qr);function Ro(){$r.call(this),this.status=1}k(Ro,$r);function pe(i){this.g=i}k(pe,wo),pe.prototype.ua=function(){yt(this.g,"a")},pe.prototype.ta=function(i){yt(this.g,new Ao(i))},pe.prototype.sa=function(i){yt(this.g,new Ro)},pe.prototype.ra=function(){yt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,$a=function(){return new zn},qa=function(){return Dn()},Ua=Zt,gs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,Jn=kn,Ui.COMPLETE="complete",Ba=Ui,Oi.EventType=je,je.OPEN="a",je.CLOSE="b",je.ERROR="c",je.MESSAGE="d",dt.prototype.listen=dt.prototype.K,nn=Oi,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Fa=Z}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const Lo="@firebase/firestore";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Ne="10.14.0";/**
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
 */const oe=new Da("@firebase/firestore");function en(){return oe.logLevel}function M(n,...t){if(oe.logLevel<=z.DEBUG){const e=t.map(Ls);oe.debug(`Firestore (${Ne}): ${n}`,...e)}}function Lt(n,...t){if(oe.logLevel<=z.ERROR){const e=t.map(Ls);oe.error(`Firestore (${Ne}): ${n}`,...e)}}function Ae(n,...t){if(oe.logLevel<=z.WARN){const e=t.map(Ls);oe.warn(`Firestore (${Ne}): ${n}`,...e)}}function Ls(n){if(typeof n=="string")return n;try{/**
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
 */function x(n="Unexpected state"){const t=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: `+n;throw Lt(t),new Error(t)}function W(n,t){n||x()}function F(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ja{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _h{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class yh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Eh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new ja(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new gt(t)}}class vh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Th{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new vh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ih{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){W(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new Ih(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ah(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class za{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Ah(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function K(n,t){return n<t?-1:n>t?1:0}function Re(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class Q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new Q(0,0))}static max(){return new L(new Q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class dn{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return dn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof dn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends dn{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Rh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends dn{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return Rh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}function bh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new Qt(s,O.empty(),t)}function Sh(n){return new Qt(n.readTime,n.key,-1)}class Qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Qt(L.min(),O.empty(),-1)}static max(){return new Qt(L.max(),O.empty(),-1)}}function Ph(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
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
 */const Ch="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function En(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Ch)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Dh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function vn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Fs.oe=-1;function pr(n){return n==null}function or(n){return n===0&&1/n==-1/0}function kh(n){return typeof n=="number"&&Number.isInteger(n)&&!or(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Fo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ce(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ha(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new at(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Bo(this.data.getIterator())}getIteratorFrom(t){return new Bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class Bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new It([])}unionWith(t){let e=new ut(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Ka extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ka("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Nh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(W(!!n),typeof n=="string"){let t=0;const e=Nh.exec(n);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ae(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
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
 */function Bs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Us(n){const t=n.mapValue.fields.__previous_value__;return Bs(t)?Us(t):t}function fn(n){const t=Yt(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
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
 */class Mh{constructor(t,e,r,s,o,a,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class mn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Gn={mapValue:{}};function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bs(n)?4:xh(n)?9007199254740991:Oh(n)?10:11:x()}function Vt(n,t){if(n===t)return!0;const e=le(n);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return fn(n).isEqual(fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Yt(s.timestampValue),u=Yt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ae(s.bytesValue).isEqual(ae(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return tt(s.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return tt(s.integerValue)===tt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=tt(s.doubleValue),u=tt(o.doubleValue);return a===u?or(a)===or(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Re(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Fo(a)!==Fo(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Vt(a[h],u[h])))return!1;return!0}(n,t);default:return x()}}function pn(n,t){return(n.values||[]).find(e=>Vt(e,t))!==void 0}function be(n,t){if(n===t)return 0;const e=le(n),r=le(t);if(e!==r)return K(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Uo(n.timestampValue,t.timestampValue);case 4:return Uo(fn(n),fn(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(o,a){const u=ae(o),h=ae(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const m=K(u[f],h[f]);if(m!==0)return m}return K(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=K(tt(o.latitude),tt(a.latitude));return u!==0?u:K(tt(o.longitude),tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return qo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,f,m;const I=o.fields||{},A=a.fields||{},S=(u=I.value)===null||u===void 0?void 0:u.arrayValue,k=(h=A.value)===null||h===void 0?void 0:h.arrayValue,D=K(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:qo(S,k)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Gn.mapValue&&a===Gn.mapValue)return 0;if(o===Gn.mapValue)return 1;if(a===Gn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let I=0;I<h.length&&I<m.length;++I){const A=K(h[I],m[I]);if(A!==0)return A;const S=be(u[h[I]],f[m[I]]);if(S!==0)return S}return K(h.length,m.length)}(n.mapValue,t.mapValue);default:throw x()}}function Uo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=Yt(n),r=Yt(t),s=K(e.seconds,r.seconds);return s!==0?s:K(e.nanos,r.nanos)}function qo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=be(e[s],r[s]);if(o)return o}return K(e.length,r.length)}function Se(n){return _s(n)}function _s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Yt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ae(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=_s(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${_s(e.fields[a])}`;return s+"}"}(n.mapValue):x()}function $o(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ys(n){return!!n&&"integerValue"in n}function qs(n){return!!n&&"arrayValue"in n}function jo(n){return!!n&&"nullValue"in n}function zo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zn(n){return!!n&&"mapValue"in n}function Oh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function on(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ce(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=on(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=on(n.arrayValue.values[e]);return t}return Object.assign({},n)}function xh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Zn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=on(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=on(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Zn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Zn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ce(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new vt(on(this.value))}}function Wa(n){const t=[];return ce(n.fields,(e,r)=>{const s=new lt([e]);if(Zn(r)){const o=Wa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new It(t)}/**
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
 */class _t{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),vt.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ar{constructor(t,e){this.position=t,this.inclusive=e}}function Ho(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=be(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ko(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ga{}class rt extends Ga{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Bh(t,e,r):e==="array-contains"?new $h(t,r):e==="in"?new jh(t,r):e==="not-in"?new zh(t,r):e==="array-contains-any"?new Hh(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Uh(t,r):new qh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(be(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Ga{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new St(t,e)}matches(t){return Qa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Qa(n){return n.op==="and"}function Ya(n){return Fh(n)&&Qa(n)}function Fh(n){for(const t of n.filters)if(t instanceof St)return!1;return!0}function Es(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Se(n.value);if(Ya(n))return n.filters.map(t=>Es(t)).join(",");{const t=n.filters.map(e=>Es(e)).join(",");return`${n.op}(${t})`}}function Xa(n,t){return n instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Vt(r.value,s.value)}(n,t):n instanceof St?function(r,s){return s instanceof St&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Xa(a,s.filters[u]),!0):!1}(n,t):void x()}function Ja(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Se(e.value)}`}(n):n instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Ja).join(" ,")+"}"}(n):"Filter"}class Bh extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Uh extends rt{constructor(t,e){super(t,"in",e),this.keys=Za("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qh extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Za("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Za(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class $h extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qs(e)&&pn(e.arrayValue,this.value)}}class jh extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&pn(this.value.arrayValue,e)}}class zh extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!pn(this.value.arrayValue,e)}}class Hh extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>pn(this.value.arrayValue,r))}}/**
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
 */class Kh{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function Wo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Kh(n,t,e,r,s,o,a)}function $s(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Es(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Se(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Se(r)).join(",")),t.ue=e}return t.ue}function js(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Lh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Xa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ko(n.startAt,t.startAt)&&Ko(n.endAt,t.endAt)}function vs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Me{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wh(n,t,e,r,s,o,a,u){return new Me(n,t,e,r,s,o,a,u)}function tl(n){return new Me(n)}function Go(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function el(n){return n.collectionGroup!==null}function an(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ut(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new gn(o,r))}),e.has(lt.keyField().canonicalString())||t.ce.push(new gn(lt.keyField(),r))}return t.ce}function Pt(n){const t=F(n);return t.le||(t.le=Gh(t,an(n))),t.le}function Gh(n,t){if(n.limitType==="F")return Wo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new gn(s.field,o)});const e=n.endAt?new ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ar(n.startAt.position,n.startAt.inclusive):null;return Wo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ts(n,t){const e=n.filters.concat([t]);return new Me(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Is(n,t,e){return new Me(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function gr(n,t){return js(Pt(n),Pt(t))&&n.limitType===t.limitType}function nl(n){return`${$s(Pt(n))}|lt:${n.limitType}`}function _e(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Ja(s)).join(", ")}]`),pr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Se(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Se(s)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function _r(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of an(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const f=Ho(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,an(r),s)||r.endAt&&!function(a,u,h){const f=Ho(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,an(r),s))}(n,t)}function Qh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rl(n){return(t,e)=>{let r=!1;for(const s of an(n)){const o=Yh(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Yh(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?be(h,f):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class Oe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ce(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Ha(this.inner)}size(){return this.innerSize}}/**
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
 */const Xh=new J(O.comparator);function Ft(){return Xh}const sl=new J(O.comparator);function rn(...n){let t=sl;for(const e of n)t=t.insert(e.key,e);return t}function il(n){let t=sl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function se(){return ln()}function ol(){return ln()}function ln(){return new Oe(n=>n.toString(),(n,t)=>n.isEqual(t))}const Jh=new J(O.comparator),Zh=new ut(O.comparator);function q(...n){let t=Zh;for(const e of n)t=t.add(e);return t}const td=new ut(K);function ed(){return td}/**
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
 */function zs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:or(t)?"-0":t}}function al(n){return{integerValue:""+n}}function nd(n,t){return kh(t)?al(t):zs(n,t)}/**
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
 */class yr{constructor(){this._=void 0}}function rd(n,t,e){return n instanceof lr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Bs(o)&&(o=Us(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof _n?ul(n,t):n instanceof yn?cl(n,t):function(s,o){const a=ll(s,o),u=Qo(a)+Qo(s.Pe);return ys(a)&&ys(s.Pe)?al(u):zs(s.serializer,u)}(n,t)}function sd(n,t,e){return n instanceof _n?ul(n,t):n instanceof yn?cl(n,t):e}function ll(n,t){return n instanceof ur?function(r){return ys(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class lr extends yr{}class _n extends yr{constructor(t){super(),this.elements=t}}function ul(n,t){const e=hl(t);for(const r of n.elements)e.some(s=>Vt(s,r))||e.push(r);return{arrayValue:{values:e}}}class yn extends yr{constructor(t){super(),this.elements=t}}function cl(n,t){let e=hl(t);for(const r of n.elements)e=e.filter(s=>!Vt(s,r));return{arrayValue:{values:e}}}class ur extends yr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Qo(n){return tt(n.integerValue||n.doubleValue)}function hl(n){return qs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function id(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof _n&&s instanceof _n||r instanceof yn&&s instanceof yn?Re(r.elements,s.elements,Vt):r instanceof ur&&s instanceof ur?Vt(r.Pe,s.Pe):r instanceof lr&&s instanceof lr}(n.transform,t.transform)}class od{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function tr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Er{}function dl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Hs(n.key,bt.none()):new Tn(n.key,n.data,bt.none());{const e=n.data,r=vt.empty();let s=new ut(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Jt(n.key,r,new It(s.toArray()),bt.none())}}function ad(n,t,e){n instanceof Tn?function(s,o,a){const u=s.value.clone(),h=Xo(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Jt?function(s,o,a){if(!tr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Xo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(fl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function un(n,t,e,r){return n instanceof Tn?function(o,a,u,h){if(!tr(o.precondition,a))return u;const f=o.value.clone(),m=Jo(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Jt?function(o,a,u,h){if(!tr(o.precondition,a))return u;const f=Jo(o.fieldTransforms,h,a),m=a.data;return m.setAll(fl(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,a,u){return tr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function ld(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ll(r.transform,s||null);o!=null&&(e===null&&(e=vt.empty()),e.set(r.field,o))}return e||null}function Yo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Re(r,s,(o,a)=>id(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Tn extends Er{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jt extends Er{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function fl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Xo(n,t,e){const r=new Map;W(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,sd(a,u,e[s]))}return r}function Jo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,rd(o,a,t))}return r}class Hs extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ud extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&ad(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ol();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=dl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(e,r)=>Yo(e,r))&&Re(this.baseMutations,t.baseMutations,(e,r)=>Yo(e,r))}}class Ks{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length);let s=function(){return Jh}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ks(t,e,r,s)}}/**
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
 */class hd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class dd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,j;function fd(n){switch(n){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function ml(n){if(n===void 0)return Lt("GRPC error has no .code"),b.UNKNOWN;switch(n){case nt.OK:return b.OK;case nt.CANCELLED:return b.CANCELLED;case nt.UNKNOWN:return b.UNKNOWN;case nt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case nt.INTERNAL:return b.INTERNAL;case nt.UNAVAILABLE:return b.UNAVAILABLE;case nt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case nt.NOT_FOUND:return b.NOT_FOUND;case nt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case nt.ABORTED:return b.ABORTED;case nt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case nt.DATA_LOSS:return b.DATA_LOSS;default:return x()}}(j=nt||(nt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function md(){return new TextEncoder}/**
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
 */const pd=new ie([4294967295,4294967295],0);function Zo(n){const t=md().encode(n),e=new La;return e.update(t),new Uint8Array(e.digest())}function ta(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ie([e,r],0),new ie([s,o],0)]}class Ws{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new sn(`Invalid padding: ${e}`);if(r<0)throw new sn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new sn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new sn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ie.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(ie.fromNumber(r)));return s.compare(pd)===1&&(s=new ie([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Zo(t),[r,s]=ta(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ws(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=Zo(t),[r,s]=ta(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class sn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new vr(L.min(),s,new J(K),Ft(),q())}}class In{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new In(r,e,q(),q(),q())}}/**
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
 */class er{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class pl{constructor(t,e){this.targetId=t,this.me=e}}class gl{constructor(t,e,r=ct.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ea{constructor(){this.fe=0,this.ge=ra(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),r=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x()}}),new In(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=ra()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gd{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ft(),this.qe=na(),this.Qe=new J(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(vs(o))if(r===0){const a=new O(o.path);this.Ue(e,a,_t.newNoDocument(a,L.min()))}else W(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=ae(r).toUint8Array()}catch(h){if(h instanceof Ka)return Ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ws(a,s,o)}catch(h){return Ae(h instanceof sn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&vs(u.target)){const h=new O(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,_t.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=q();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new vr(t,e,this.Qe,this.ke,r);return this.ke=Ft(),this.qe=na(),this.Qe=new J(K),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ea,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ea),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function na(){return new J(O.comparator)}function ra(){return new J(O.comparator)}const _d={asc:"ASCENDING",desc:"DESCENDING"},yd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ed={and:"AND",or:"OR"};class vd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ws(n,t){return n.useProto3Json||pr(t)?t:{value:t}}function cr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _l(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Td(n,t){return cr(n,t.toTimestamp())}function Ct(n){return W(!!n),L.fromTimestamp(function(e){const r=Yt(e);return new Q(r.seconds,r.nanos)}(n))}function Gs(n,t){return As(n,t).canonicalString()}function As(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function yl(n){const t=X.fromString(n);return W(wl(t)),t}function Rs(n,t){return Gs(n.databaseId,t.path)}function is(n,t){const e=yl(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(vl(e))}function El(n,t){return Gs(n.databaseId,t)}function Id(n){const t=yl(n);return t.length===4?X.emptyPath():vl(t)}function bs(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vl(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function sa(n,t,e){return{name:Rs(n,t),fields:e.value.mapValue.fields}}function wd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(W(m===void 0||typeof m=="string"),ct.fromBase64String(m||"")):(W(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ct.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const m=f.code===void 0?b.UNKNOWN:ml(f.code);return new N(m,f.message||"")}(a);e=new gl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=is(n,r.document.name),o=Ct(r.document.updateTime),a=r.document.createTime?Ct(r.document.createTime):L.min(),u=new vt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,u),f=r.targetIds||[],m=r.removedTargetIds||[];e=new er(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=is(n,r.document),o=r.readTime?Ct(r.readTime):L.min(),a=_t.newNoDocument(s,o),u=r.removedTargetIds||[];e=new er([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=is(n,r.document),o=r.removedTargetIds||[];e=new er([],o,s,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new dd(s,o),u=r.targetId;e=new pl(u,a)}}return e}function Ad(n,t){let e;if(t instanceof Tn)e={update:sa(n,t.key,t.value)};else if(t instanceof Hs)e={delete:Rs(n,t.key)};else if(t instanceof Jt)e={update:sa(n,t.key,t.data),updateMask:Nd(t.fieldMask)};else{if(!(t instanceof ud))return x();e={verify:Rs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof _n)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ur)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Td(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Rd(n,t){return n&&n.length>0?(W(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Ct(s.updateTime):Ct(o);return a.isEqual(L.min())&&(a=Ct(o)),new od(a,s.transformResults||[])}(e,t))):[]}function bd(n,t){return{documents:[El(n,t.path)]}}function Sd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=El(n,s);const o=function(f){if(f.length!==0)return Il(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(A){return{field:ye(A.field),direction:Vd(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ws(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Pd(n){let t=Id(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(I){const A=Tl(I);return A instanceof St&&Ya(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(A=>function(k){return new gn(Ee(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(e.orderBy));let u=null;e.limit&&(u=function(I){let A;return A=typeof I=="object"?I.value:I,pr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(I){const A=!!I.before,S=I.values||[];return new ar(S,A)}(e.startAt));let f=null;return e.endAt&&(f=function(I){const A=!I.before,S=I.values||[];return new ar(S,A)}(e.endAt)),Wh(t,s,a,o,u,"F",h,f)}function Cd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ee(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ee(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ee(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ee(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(Ee(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(r=>Tl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function Vd(n){return _d[n]}function Dd(n){return yd[n]}function kd(n){return Ed[n]}function ye(n){return{fieldPath:n.canonicalString()}}function Ee(n){return lt.fromServerFormat(n.fieldPath)}function Il(n){return n instanceof rt?function(e){if(e.op==="=="){if(zo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NAN"}};if(jo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NAN"}};if(jo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ye(e.field),op:Dd(e.op),value:e.value}}}(n):n instanceof St?function(e){const r=e.getFilters().map(s=>Il(s));return r.length===1?r[0]:{compositeFilter:{op:kd(e.op),filters:r}}}(n):x()}function Nd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function wl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class zt{constructor(t,e,r,s,o=L.min(),a=L.min(),u=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Md{constructor(t){this.ct=t}}function Od(n){const t=Pd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Is(t,t.limit,"L"):t}/**
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
 */class xd{constructor(){this.un=new Ld}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Qt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Ld{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ut(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ut(X.comparator)).toArray()}}/**
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
 */class Pe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Pe(0)}static kn(){return new Pe(-1)}}/**
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
 */class Fd{constructor(){this.changes=new Oe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Bd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Ud{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&un(r.mutation,s,It.empty(),Q.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=se();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=rn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=se();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Ft();const a=ln(),u=function(){return ln()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Jt)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),un(m.mutation,f,m.mutation.getFieldMask(),Q.now())):a.set(f.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var I;return u.set(f,new Bd(m,(I=a.get(f))!==null&&I!==void 0?I:null))}),u))}recalculateAndSaveOverlays(t,e){const r=ln();let s=new J((a,u)=>a-u),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||It.empty();m=u.applyToLocalView(f,m),r.set(h,m);const I=(s.get(u.batchId)||q()).add(h);s=s.insert(u.batchId,I)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,m=h.value,I=ol();m.forEach(A=>{if(!o.has(A)){const S=dl(e.get(A),r.get(A));S!==null&&I.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,I))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):el(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(se());let u=-1,h=o;return a.next(f=>C.forEach(f,(m,I)=>(u<I.largestBatchId&&(u=I.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(m=>({batchId:u,changes:il(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=rn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=rn();return this.indexManager.getCollectionParents(t,o).next(u=>C.forEach(u,h=>{const f=function(I,A){return new Me(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((I,A)=>{a=a.insert(I,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))});let u=rn();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&un(m.mutation,f,It.empty(),Q.now()),_r(e,f)&&(u=u.insert(h,f))}),u})}}/**
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
 */class qd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ct(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Od(s.bundledQuery),readTime:Ct(s.readTime)}}(e)),C.resolve()}}/**
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
 */class $d{constructor(){this.overlays=new J(O.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=se();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=se(),o=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new J((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=se(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const u=se(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>u.set(f,m)),!(u.size()>=s)););return C.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hd(e,r));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class jd{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class Qs{constructor(){this.Tr=new ut(st.Er),this.dr=new ut(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new st(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new st(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new O(new X([])),r=new st(e,t),s=new st(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new X([])),r=new st(e,t),s=new st(e,t+1);let o=q();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new st(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
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
 */class zd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(st.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new st(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),s=new st(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const u=this.Dr(a.wr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut(K);return e.forEach(s=>{const o=new st(s,0),a=new st(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new st(new O(o),0);let u=new ut(K);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.wr)),!0)},a),C.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,s=>{const o=new st(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new st(e,0),s=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Hd{constructor(t){this.Mr=t,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=Ft();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Ft();const a=e.path,u=new O(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Ph(Sh(m),r)<=0||(s.has(m.key)||_r(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Kd(this)}getSize(t){return C.resolve(this.size)}}class Kd extends Fd{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Wd{constructor(t){this.persistence=t,this.Nr=new Oe(e=>$s(e),js),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qs,this.targetCount=0,this.kr=Pe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
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
 */class Gd{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Fs(0),this.Kr=!1,this.Kr=!0,this.$r=new jd,this.referenceDelegate=t(this),this.Ur=new Wd(this),this.indexManager=new xd,this.remoteDocumentCache=function(s){return new Hd(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Md(e),this.Gr=new qd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $d,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new zd(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new Qd(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Qd extends Vh{constructor(t){super(),this.currentSequenceNumber=t}}class Ys{constructor(t){this.persistence=t,this.Jr=new Qs,this.Yr=null}static Zr(t){return new Ys(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Xs{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Xs(t,e.fromCache,r,s)}}/**
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
 */class Yd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Xd{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Zu()?8:Dh(Xu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Yd;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(en()<=z.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",_e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(en()<=z.DEBUG&&M("QueryEngine","Query:",_e(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(en()<=z.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",_e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):C.resolve())}Yi(t,e){if(Go(e))return C.resolve(null);let r=Pt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Is(e,null,"F"),r=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ts(e,u);return this.ns(e,f,a,h.readTime)?this.Yi(t,Is(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,r,s){return Go(e)||s.isEqual(L.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?C.resolve(null):(en()<=z.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_e(e)),this.rs(t,a,e,bh(s,-1)).next(u=>u))})}ts(t,e){let r=new ut(rl(t));return e.forEach((s,o)=>{_r(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return en()<=z.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",_e(e)),this.Ji.getDocumentsMatchingQuery(t,e,Qt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Jd{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new J(K),this._s=new Oe(o=>$s(o),js),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ud(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Zd(n,t,e,r){return new Jd(n,t,e,r)}async function Al(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=q();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:u}))})})}function tf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,m){const I=f.batch,A=I.keys();let S=C.resolve();return A.forEach(k=>{S=S.next(()=>m.getEntry(h,k)).next(D=>{const P=f.docVersions.get(k);W(P!==null),D.version.compareTo(P)<0&&(I.applyToRemoteDocument(D,f),D.isValidDocument()&&(D.setReadTime(f.commitVersion),m.addEntry(D)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=q();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Rl(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ef(n,t){const e=F(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((m,I)=>{const A=s.get(I);if(!A)return;u.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,I).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,I)));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(ct.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(I,S),function(D,P,U){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(A,S,m)&&u.push(e.Ur.updateTargetData(o,S))});let h=Ft(),f=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(nf(o,a,t.documentUpdates).next(m=>{h=m.Ps,f=m.Is})),!r.isEqual(L.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(I=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=s,o))}function nf(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Ft();return e.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function rf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function sf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new zt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ss(n,t,e){const r=F(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!vn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function ia(n,t,e){const r=F(n);let s=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const I=F(h),A=I._s.get(m);return A!==void 0?C.resolve(I.os.get(A)):I.Ur.getTargetData(f,m)}(r,a,Pt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:q())).next(u=>(of(r,Qh(t),u),{documents:u,Ts:o})))}function of(n,t,e){let r=n.us.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class oa{constructor(){this.activeTargetIds=ed()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class af{constructor(){this.so=new oa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new oa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class lf{_o(t){}shutdown(){}}/**
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
 */class aa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qn=null;function os(){return Qn===null?Qn=function(){return 268435456+Math.round(2147483648*Math.random())}():Qn++,"0x"+Qn.toString(16)}/**
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
 */const uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const pt="WebChannelConnection";class hf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const u=os(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw Ae("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,u){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ne}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=uf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=os();return new Promise((a,u)=>{const h=new Fa;h.setWithCredentials(!0),h.listenOnce(Ba.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Jn.NO_ERROR:const m=h.getResponseJson();M(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Jn.TIMEOUT:M(pt,`RPC '${t}' ${o} timed out`),u(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Jn.HTTP_ERROR:const I=h.getStatus();if(M(pt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const k=function(P){const U=P.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(U)>=0?U:b.UNKNOWN}(S.status);u(new N(k,S.message))}else u(new N(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new N(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{M(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);M(pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=os(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=$a(),u=qa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(pt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const I=a.createWebChannel(m,h);let A=!1,S=!1;const k=new cf({Io:P=>{S?M(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(A||(M(pt,`Opening RPC '${t}' stream ${s} transport.`),I.open(),A=!0),M(pt,`RPC '${t}' stream ${s} sending:`,P),I.send(P))},To:()=>I.close()}),D=(P,U,B)=>{P.listen(U,$=>{try{B($)}catch(et){setTimeout(()=>{throw et},0)}})};return D(I,nn.EventType.OPEN,()=>{S||(M(pt,`RPC '${t}' stream ${s} transport opened.`),k.yo())}),D(I,nn.EventType.CLOSE,()=>{S||(S=!0,M(pt,`RPC '${t}' stream ${s} transport closed`),k.So())}),D(I,nn.EventType.ERROR,P=>{S||(S=!0,Ae(pt,`RPC '${t}' stream ${s} transport errored:`,P),k.So(new N(b.UNAVAILABLE,"The operation could not be completed")))}),D(I,nn.EventType.MESSAGE,P=>{var U;if(!S){const B=P.data[0];W(!!B);const $=B,et=$.error||((U=$[0])===null||U===void 0?void 0:U.error);if(et){M(pt,`RPC '${t}' stream ${s} received error:`,et);const Dt=et.status;let it=function(_){const y=nt[_];if(y!==void 0)return ml(y)}(Dt),v=et.message;it===void 0&&(it=b.INTERNAL,v="Unknown error status: "+Dt+" with message "+et.message),S=!0,k.So(new N(it,v)),I.close()}else M(pt,`RPC '${t}' stream ${s} received:`,B),k.bo(B)}}),D(u,Ua.STAT_EVENT,P=>{P.stat===gs.PROXY?M(pt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===gs.NOPROXY&&M(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function as(){return typeof document<"u"?document:null}/**
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
 */function Tr(n){return new vd(n,!0)}/**
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
 */class bl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sl{constructor(t,e,r,s,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class df extends Sl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=wd(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Ct(a.readTime):L.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=bs(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=vs(h)?{documents:bd(o,h)}:{query:Sd(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=_l(o,a.resumeToken);const f=ws(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=cr(o,a.snapshotVersion.toTimestamp());const f=ws(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const r=Cd(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=bs(this.serializer),e.removeTarget=t,this.a_(e)}}class ff extends Sl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return W(!!t.streamToken),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Rd(t.writeResults,t.commitTime),r=Ct(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=bs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ad(this.serializer,r))};this.a_(e)}}/**
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
 */class mf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,As(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,As(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Lt(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{he(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.L_.add(4),await wn(f),f.q_.set("Unknown"),f.L_.delete(4),await Ir(f)}(this))})}),this.q_=new pf(r,s)}}async function Ir(n){if(he(n))for(const t of n.B_)await t(!0)}async function wn(n){for(const t of n.B_)await t(!1)}function Pl(n,t){const e=F(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ei(e)?ti(e):xe(e).r_()&&Zs(e,t))}function Js(n,t){const e=F(n),r=xe(e);e.N_.delete(t),r.r_()&&Cl(e,t),e.N_.size===0&&(r.r_()?r.o_():he(e)&&e.q_.set("Unknown"))}function Zs(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xe(n).A_(t)}function Cl(n,t){n.Q_.xe(t),xe(n).R_(t)}function ti(n){n.Q_=new gd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),xe(n).start(),n.q_.v_()}function ei(n){return he(n)&&!xe(n).n_()&&n.N_.size>0}function he(n){return F(n).L_.size===0}function Vl(n){n.Q_=void 0}async function _f(n){n.q_.set("Online")}async function yf(n){n.N_.forEach((t,e)=>{Zs(n,t)})}async function Ef(n,t){Vl(n),ei(n)?(n.q_.M_(t),ti(n)):n.q_.set("Unknown")}async function vf(n,t,e){if(n.q_.set("Online"),t instanceof gl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await hr(n,r)}else if(t instanceof er?n.Q_.Ke(t):t instanceof pl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(L.min()))try{const r=await Rl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(ct.EMPTY_BYTE_STRING,m.snapshotVersion)),Cl(o,h);const I=new zt(m.target,h,f,m.sequenceNumber);Zs(o,I)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await hr(n,r)}}async function hr(n,t,e){if(!vn(t))throw t;n.L_.add(1),await wn(n),n.q_.set("Offline"),e||(e=()=>Rl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Ir(n)})}function Dl(n,t){return t().catch(e=>hr(n,e,t))}async function wr(n){const t=F(n),e=Xt(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Tf(t);)try{const s=await rf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,If(t,s)}catch(s){await hr(t,s)}kl(t)&&Nl(t)}function Tf(n){return he(n)&&n.O_.length<10}function If(n,t){n.O_.push(t);const e=Xt(n);e.r_()&&e.V_&&e.m_(t.mutations)}function kl(n){return he(n)&&!Xt(n).n_()&&n.O_.length>0}function Nl(n){Xt(n).start()}async function wf(n){Xt(n).p_()}async function Af(n){const t=Xt(n);for(const e of n.O_)t.m_(e.mutations)}async function Rf(n,t,e){const r=n.O_.shift(),s=Ks.from(r,t,e);await Dl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await wr(n)}async function bf(n,t){t&&Xt(n).V_&&await async function(r,s){if(function(a){return fd(a)&&a!==b.ABORTED}(s.code)){const o=r.O_.shift();Xt(r).s_(),await Dl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await wr(r)}}(n,t),kl(n)&&Nl(n)}async function la(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=he(e);e.L_.add(3),await wn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ir(e)}async function Sf(n,t){const e=F(n);t?(e.L_.delete(2),await Ir(e)):t||(e.L_.add(2),await wn(e),e.q_.set("Unknown"))}function xe(n){return n.K_||(n.K_=function(e,r,s){const o=F(e);return o.w_(),new df(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:_f.bind(null,n),Ro:yf.bind(null,n),mo:Ef.bind(null,n),d_:vf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),ei(n)?ti(n):n.q_.set("Unknown")):(await n.K_.stop(),Vl(n))})),n.K_}function Xt(n){return n.U_||(n.U_=function(e,r,s){const o=F(e);return o.w_(),new ff(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wf.bind(null,n),mo:bf.bind(null,n),f_:Af.bind(null,n),g_:Rf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await wr(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ni{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new ni(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ri(n,t){if(Lt("AsyncQueue",`${t}: ${n}`),vn(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class we{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=rn(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new we(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new we;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ua{constructor(){this.W_=new J(O.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):x():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ce{constructor(t,e,r,s,o,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ce(t,e,we.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Pf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Cf{constructor(){this.queries=ca(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=ca(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function ca(){return new Oe(n=>nl(n),gr)}async function Vf(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new Pf,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=ri(a,`Initialization of query '${_e(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&si(e)}async function Df(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function kf(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(s)&&(r=!0);a.z_=s}}r&&si(e)}function Nf(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function si(n){n.Y_.forEach(t=>{t.next()})}var Ps,ha;(ha=Ps||(Ps={})).ea="default",ha.Cache="cache";class Mf{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ce(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ps.Cache}}/**
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
 */class Ml{constructor(t){this.key=t}}class Ol{constructor(t){this.key=t}}class Of{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=rl(t),this.Ra=new we(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new ua,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,I)=>{const A=s.get(m),S=_r(this.query,I)?I:null,k=!!A&&this.mutatedKeys.has(A.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;A&&S?A.data.isEqual(S.data)?k!==D&&(r.track({type:3,doc:S}),P=!0):this.ga(A,S)||(r.track({type:2,doc:S}),P=!0,(h&&this.Aa(S,h)>0||f&&this.Aa(S,f)<0)&&(u=!0)):!A&&S?(r.track({type:0,doc:S}),P=!0):A&&!S&&(r.track({type:1,doc:A}),P=!0,(h||f)&&(u=!0)),P&&(S?(a=a.add(S),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,I)=>function(S,k){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return D(S)-D(k)}(m.type,I.type)||this.Aa(m.doc,I.doc)),this.pa(r),s=s!=null&&s;const u=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new Ce(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ua,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Ol(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Ml(r))}),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ce.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Lf{constructor(t){this.key=t,this.va=!1}}class Ff{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Oe(u=>nl(u),gr),this.Ma=new Map,this.xa=new Set,this.Oa=new J(O.comparator),this.Na=new Map,this.La=new Qs,this.Ba={},this.ka=new Map,this.qa=Pe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Bf(n,t,e=!0){const r=ql(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await xl(r,t,e,!0),s}async function Uf(n,t){const e=ql(n);await xl(e,t,!0,!1)}async function xl(n,t,e,r){const s=await sf(n.localStore,Pt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await qf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Pl(n.remoteStore,s),u}async function qf(n,t,e,r,s){n.Ka=(I,A,S)=>async function(D,P,U,B){let $=P.view.ma(U);$.ns&&($=await ia(D.localStore,P.query,!1).then(({documents:v})=>P.view.ma(v,$)));const et=B&&B.targetChanges.get(P.targetId),Dt=B&&B.targetMismatches.get(P.targetId)!=null,it=P.view.applyChanges($,D.isPrimaryClient,et,Dt);return fa(D,P.targetId,it.wa),it.snapshot}(n,I,A,S);const o=await ia(n.localStore,t,!0),a=new Of(t,o.Ts),u=a.ma(o.documents),h=In.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,h);fa(n,e,f.wa);const m=new xf(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function $f(n,t,e){const r=F(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!gr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ss(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Js(r.remoteStore,s.targetId),Cs(r,s.targetId)}).catch(En)):(Cs(r,s.targetId),await Ss(r.localStore,s.targetId,!0))}async function jf(n,t){const e=F(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Js(e.remoteStore,r.targetId))}async function zf(n,t,e){const r=Xf(n);try{const s=await function(a,u){const h=F(a),f=Q.now(),m=u.reduce((S,k)=>S.add(k.key),q());let I,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=Ft(),D=q();return h.cs.getEntries(S,m).next(P=>{k=P,k.forEach((U,B)=>{B.isValidDocument()||(D=D.add(U))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,k)).next(P=>{I=P;const U=[];for(const B of u){const $=ld(B,I.get(B.key).overlayedDocument);$!=null&&U.push(new Jt(B.key,$,Wa($.value.mapValue),bt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,U,u)}).next(P=>{A=P;const U=P.applyToLocalDocumentSet(I,D);return h.documentOverlayCache.saveOverlays(S,P.batchId,U)})}).then(()=>({batchId:A.batchId,changes:il(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new J(K)),f=f.insert(u,h),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,e),await An(r,s.changes),await wr(r.remoteStore)}catch(s){const o=ri(s,"Failed to persist write");e.reject(o)}}async function Ll(n,t){const e=F(n);try{const r=await ef(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?W(a.va):s.removedDocuments.size>0&&(W(a.va),a.va=!1))}),await An(e,r,t)}catch(r){await En(r)}}function da(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=F(a);h.onlineState=u;let f=!1;h.queries.forEach((m,I)=>{for(const A of I.j_)A.Z_(u)&&(f=!0)}),f&&si(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Hf(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new J(O.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const u=q().add(o),h=new vr(L.min(),new Map,new J(K),a,u);await Ll(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),ii(r)}else await Ss(r.localStore,t,!1).then(()=>Cs(r,t,e)).catch(En)}async function Kf(n,t){const e=F(n),r=t.batch.batchId;try{const s=await tf(e.localStore,t);Bl(e,r,null),Fl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await An(e,s)}catch(s){await En(s)}}async function Wf(n,t,e){const r=F(n);try{const s=await function(a,u){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,u).next(I=>(W(I!==null),m=I.keys(),h.mutationQueue.removeMutationBatch(f,I))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);Bl(r,t,e),Fl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await An(r,s)}catch(s){await En(s)}}function Fl(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Bl(n,t,e){const r=F(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Cs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Ul(n,r)})}function Ul(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Js(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ii(n))}function fa(n,t,e){for(const r of e)r instanceof Ml?(n.La.addReference(r.key,t),Gf(n,r)):r instanceof Ol?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Ul(n,r.key)):x()}function Gf(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),ii(n))}function ii(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new O(X.fromString(t)),r=n.qa.next();n.Na.set(r,new Lf(e)),n.Oa=n.Oa.insert(e,r),Pl(n.remoteStore,new zt(Pt(tl(e.path)),r,"TargetPurposeLimboResolution",Fs.oe))}}async function An(n,t,e){const r=F(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const I=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){s.push(f);const I=Xs.Wi(h.targetId,f);o.push(I)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>C.forEach(f,A=>C.forEach(A.$i,S=>m.persistence.referenceDelegate.addReference(I,A.targetId,S)).next(()=>C.forEach(A.Ui,S=>m.persistence.referenceDelegate.removeReference(I,A.targetId,S)))))}catch(I){if(!vn(I))throw I;M("LocalStore","Failed to update sequence numbers: "+I)}for(const I of f){const A=I.targetId;if(!I.fromCache){const S=m.os.get(A),k=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(k);m.os=m.os.insert(A,D)}}}(r.localStore,o))}async function Qf(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await Al(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new N(b.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await An(e,r.hs)}}function Yf(n,t){const e=F(n),r=e.Na.get(t);if(r&&r.va)return q().add(r.key);{let s=q();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function ql(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ll.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Hf.bind(null,t),t.Ca.d_=kf.bind(null,t.eventManager),t.Ca.$a=Nf.bind(null,t.eventManager),t}function Xf(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wf.bind(null,t),t}class dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Zd(this.persistence,new Xd,t.initialUser,this.serializer)}Ga(t){return new Gd(Ys.Zr,this.serializer)}Wa(t){return new af}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dr.provider={build:()=>new dr};class Vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>da(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qf.bind(null,this.syncEngine),await Sf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Cf}()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),r=function(o){return new hf(o)}(t.databaseInfo);return function(o,a,u,h){return new mf(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new gf(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>da(this.syncEngine,e,0),function(){return aa.D()?new aa:new lf}())}createSyncEngine(t,e){return function(s,o,a,u,h,f,m){const I=new Ff(s,o,a,u,h,f);return m&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await wn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Vs.provider={build:()=>new Vs};/**
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
 */class Jf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Zf{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=za.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ri(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ls(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Al(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ma(n,t){n.asyncQueue.verifyOperationInProgress();const e=await tm(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>la(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>la(t.remoteStore,s)),n._onlineComponents=t}async function tm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await ls(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await ls(n,new dr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await ls(n,new dr);return n._offlineComponents}async function $l(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await ma(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await ma(n,new Vs))),n._onlineComponents}function em(n){return $l(n).then(t=>t.syncEngine)}async function nm(n){const t=await $l(n),e=t.eventManager;return e.onListen=Bf.bind(null,t.syncEngine),e.onUnlisten=$f.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Uf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=jf.bind(null,t.syncEngine),e}function rm(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const m=new Jf({next:A=>{m.Za(),a.enqueueAndForget(()=>Df(o,I)),A.fromCache&&h.source==="server"?f.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),I=new Mf(u,m,{includeMetadataChanges:!0,_a:!0});return Vf(o,I)}(await nm(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function jl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const pa=new Map;/**
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
 */function zl(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function sm(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ga(n){if(!O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _a(n){if(O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ar(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function ue(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ar(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ya{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ya({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ya(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _h;switch(r.type){case"firstParty":return new Th(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=pa.get(e);r&&(M("ComponentProvider","Removing Datastore"),pa.delete(e),r.terminate())}(this),Promise.resolve()}}function im(n,t,e,r={}){var s;const o=(n=ue(n,Rr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=gt.MOCK_USER;else{u=Yu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}n._authCredentials=new yh(new ja(u,h))}}/**
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
 */class de{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new de(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class Gt extends de{constructor(t,e,r){super(t,e,tl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new O(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function br(n,t,...e){if(n=Ot(n),zl("collection","path",t),n instanceof Rr){const r=X.fromString(t,...e);return _a(r),new Gt(n,null,r)}{if(!(n instanceof wt||n instanceof Gt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return _a(r),new Gt(n.firestore,null,r)}}function oi(n,t,...e){if(n=Ot(n),arguments.length===1&&(t=za.newId()),zl("doc","path",t),n instanceof Rr){const r=X.fromString(t,...e);return ga(r),new wt(n,null,new O(r))}{if(!(n instanceof wt||n instanceof Gt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ga(r),new wt(n.firestore,n instanceof Gt?n.converter:null,new O(r))}}/**
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
 */class Ea{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bl(this,"async_queue_retry"),this.Vu=()=>{const r=as();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=as();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=as();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Wt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!vn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ni.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Rn extends Rr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ea,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ea(t),this._firestoreClient=void 0,await t}}}function om(n,t){const e=typeof n=="object"?n:ih(),r=typeof n=="string"?n:"(default)",s=eh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Gu("firestore");o&&im(s,...o)}return s}function Hl(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||am(n),n._firestoreClient}function am(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,f,m){return new Mh(u,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,jl(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Zf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(ct.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Sr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ai{constructor(t){this._methodName=t}}/**
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
 */class li{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
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
 */class ui{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const lm=/^__.*__$/;class um{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Jt(t,this.data,this.fieldMask,e,this.fieldTransforms):new Tn(t,this.data,e,this.fieldTransforms)}}class Kl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Jt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Wl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ci{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return fr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Wl(this.Cu)&&lm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class cm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Tr(t)}Qu(t,e,r,s=!1){return new ci({Cu:t,methodName:e,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hi(n){const t=n._freezeSettings(),e=Tr(n._databaseId);return new cm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function hm(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);di("Data must be an object, but it was:",a,r);const u=Gl(r,a);let h,f;if(o.merge)h=new It(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const I of o.mergeFields){const A=Ds(t,I,e);if(!a.contains(A))throw new N(b.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Yl(m,A)||m.push(A)}h=new It(m),f=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,f=a.fieldTransforms;return new um(new vt(u),h,f)}class Pr extends ai{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Pr}}function dm(n,t,e,r){const s=n.Qu(1,t,e);di("Data must be an object, but it was:",s,r);const o=[],a=vt.empty();ce(r,(h,f)=>{const m=fi(t,h,e);f=Ot(f);const I=s.Nu(m);if(f instanceof Pr)o.push(m);else{const A=bn(f,I);A!=null&&(o.push(m),a.set(m,A))}});const u=new It(o);return new Kl(a,u,s.fieldTransforms)}function fm(n,t,e,r,s,o){const a=n.Qu(1,t,e),u=[Ds(t,r,e)],h=[s];if(o.length%2!=0)throw new N(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)u.push(Ds(t,o[A])),h.push(o[A+1]);const f=[],m=vt.empty();for(let A=u.length-1;A>=0;--A)if(!Yl(f,u[A])){const S=u[A];let k=h[A];k=Ot(k);const D=a.Nu(S);if(k instanceof Pr)f.push(S);else{const P=bn(k,D);P!=null&&(f.push(S),m.set(S,P))}}const I=new It(f);return new Kl(m,I,a.fieldTransforms)}function mm(n,t,e,r=!1){return bn(e,n.Qu(r?4:3,t))}function bn(n,t){if(Ql(n=Ot(n)))return di("Unsupported field value:",t,n),Gl(n,t);if(n instanceof ai)return function(r,s){if(!Wl(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=bn(u,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:cr(s.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cr(s.serializer,o)}}if(r instanceof li)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:_l(s.serializer,r._byteString)};if(r instanceof wt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Gs(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ui)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return zs(u.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ar(r)}`)}(n,t)}function Gl(n,t){const e={};return Ha(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ce(n,(r,s)=>{const o=bn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ql(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof li||n instanceof Ve||n instanceof wt||n instanceof ai||n instanceof ui)}function di(n,t,e){if(!Ql(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ar(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Ds(n,t,e){if((t=Ot(t))instanceof Sr)return t._internalPath;if(typeof t=="string")return fi(n,t);throw fr("Field path arguments must be of type string or ",n,!1,void 0,e)}const pm=new RegExp("[~\\*/\\[\\]]");function fi(n,t,e){if(t.search(pm)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Sr(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function fr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(b.INVALID_ARGUMENT,u+n+h)}function Yl(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Xl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Cr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class gm extends Xl{data(){return super.data()}}function Cr(n,t){return typeof t=="string"?fi(n,t):t instanceof Sr?t._internalPath:t._delegate._internalPath}/**
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
 */function _m(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mi{}class Jl extends mi{}function pi(n,t,...e){let r=[];t instanceof mi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof gi).length,u=o.filter(h=>h instanceof Vr).length;if(a>1||a>0&&u>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Vr extends Jl{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Vr(t,e,r)}_apply(t){const e=this._parse(t);return Zl(t._query,e),new de(t.firestore,t.converter,Ts(t._query,e))}_parse(t){const e=hi(t.firestore);return function(o,a,u,h,f,m,I){let A;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ia(I,m);const S=[];for(const k of I)S.push(Ta(h,o,k));A={arrayValue:{values:S}}}else A=Ta(h,o,I)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ia(I,m),A=mm(u,a,I,m==="in"||m==="not-in");return rt.create(f,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function va(n,t,e){const r=t,s=Cr("where",n);return Vr._create(s,r,e)}class gi extends mi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new gi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:St.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Zl(a,h),a=Ts(a,h)}(t._query,e),new de(t.firestore,t.converter,Ts(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _i extends Jl{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new _i(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gn(o,a)}(t._query,this._field,this._direction);return new de(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Me(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function yi(n,t="asc"){const e=t,r=Cr("orderBy",n);return _i._create(r,e)}function Ta(n,t,e){if(typeof(e=Ot(e))=="string"){if(e==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!el(t)&&e.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!O.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $o(n,new O(r))}if(e instanceof wt)return $o(n,e._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ar(e)}.`)}function Ia(n,t){if(!Array.isArray(n)||n.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Zl(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ym{convertValue(t,e="none"){switch(le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ae(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ce(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>tt(a.doubleValue));return new ui(o)}convertGeoPoint(t){return new li(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Us(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(fn(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new Q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);W(wl(r));const s=new mn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Em(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class Yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vm extends Xl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Cr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class nr extends vm{data(t={}){return super.data(t)}}class Tm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Yn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new nr(this._firestore,this._userDataWriter,r.key,r,new Yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new nr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Yn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new nr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Yn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Im(u.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Im(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class wm extends ym{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function Ei(n){n=ue(n,de);const t=ue(n.firestore,Rn),e=Hl(t),r=new wm(t);return _m(n._query),rm(e,n._query).then(s=>new Tm(t,r,n,s))}function Am(n,t,e,...r){n=ue(n,wt);const s=ue(n.firestore,Rn),o=hi(s);let a;return a=typeof(t=Ot(t))=="string"||t instanceof Sr?fm(o,"updateDoc",n._key,t,e,r):dm(o,"updateDoc",n._key,t),vi(s,[a.toMutation(n._key,bt.exists(!0))])}function Rm(n){return vi(ue(n.firestore,Rn),[new Hs(n._key,bt.none())])}function bm(n,t){const e=ue(n.firestore,Rn),r=oi(n),s=Em(n.converter,t);return vi(e,[hm(hi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function vi(n,t){return function(r,s){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>zf(await em(r),s,o)),o.promise}(Hl(n),t)}(function(t,e=!0){(function(s){Ne=s})(sh),ir(new cn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Rn(new Eh(r.getProvider("auth-internal")),new wh(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ie(Lo,"4.7.3",t),Ie(Lo,"4.7.3","esm2017")})();const Sm="55555",Pm={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},Cm=Ma(Pm),Le=om(Cm),ks="baby-tracker-auth",Vm=24*60*60*1e3;function Dm(){const n=localStorage.getItem(ks);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<Vm?!0:(localStorage.removeItem(ks),!1)}catch{return!1}}function km(){const n={timestamp:Date.now()};localStorage.setItem(ks,JSON.stringify(n))}let Rt=De(new Date),mr=null,Xn=null;function De(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return new Date(t.setDate(r))}function Nm(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function ve(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function Mm(n){const t=String(n.getMonth()+1).padStart(2,"0"),e=String(n.getDate()).padStart(2,"0"),r=n.getFullYear(),s=n.getHours(),o=String(n.getMinutes()).padStart(2,"0"),a=s>=12?"PM":"AM",u=s%12||12;return`${t}/${e}/${r} ${u}:${o} ${a}`}function Ns(n){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=n.getFullYear();return`${t[n.getDay()]}, ${e}/${r}/${s}`}function tu(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===Sm?(n.blur(),km(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),eu()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function eu(){Om(),Ti(),zm(),window.scrollTo(0,0)}function wa(n){if(!n.value)return!0;const t=new Date(n.value),e=new Date;return t>e?(alert("Cannot select future times. Please select a time in the past."),n.value=ve(e),!1):!0}function jt(n){const t=document.getElementById(n);t&&(n==="pump-end-time"||n==="edit-pump-end-time"||(t.addEventListener("blur",()=>{wa(t)}),t.addEventListener("change",()=>{wa(t)})))}function Om(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",xm),t.addEventListener("click",Lm);const e=document.getElementById("entry-tab"),r=document.getElementById("timeline-tab"),s=document.getElementById("weekly-tab");e.addEventListener("click",()=>us("entry")),r.addEventListener("click",()=>us("timeline")),s.addEventListener("click",()=>us("weekly"));const o=document.getElementById("prev-week"),a=document.getElementById("next-week"),u=document.getElementById("current-week");o.addEventListener("click",()=>Aa(-1)),a.addEventListener("click",()=>Aa(1)),u&&u.addEventListener("click",Bm);const h=document.getElementById("save-edit"),f=document.getElementById("cancel-edit");h.addEventListener("click",$m),f.addEventListener("click",nu),jt("bottle-time"),jt("diaper-time"),jt("pump-start-time"),jt("pump-end-time"),jt("edit-bottle-time"),jt("edit-diaper-time"),jt("edit-pump-start-time"),jt("edit-pump-end-time")}function Ti(){const t=ve(new Date),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("pump-start-time"),o=document.getElementById("pump-end-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t),o&&(o.value=t)}function xm(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("pump-fields"),a=document.getElementById("submit-entry");r.style.display="none",s.style.display="none",o.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"?(r.style.display="block",a.style.display="block"):e==="diaper"?(s.style.display="block",a.style.display="block"):e==="pump"?(o.style.display="block",a.style.display="block"):a.style.display="none",Ti()}async function Lm(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),u=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const f=new Date(s.value);if(f>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:f,amount:a,unit:u,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,u=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=new Date(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:u}}else if(n==="pump"){const s=document.getElementById("pump-start-time"),o=document.getElementById("pump-end-time"),a=s.value,u=o.value,h=parseFloat(document.getElementById("pump-amount").value),f=document.getElementById("pump-unit").value,m=document.getElementById("pump-notes").value;if(!a)throw new Error("Start time is required");if(!u)throw new Error("End time is required");const I=new Date(s.value),A=new Date(o.value);if(I>r)throw new Error("Cannot add entries in the future");if(A<I)throw new Error("End time must be after start time");if(isNaN(h)||h<=0)throw new Error("Amount must be greater than 0");e={type:"Pump",startTime:I,endTime:A,amount:h,unit:f,notes:m}}e&&(await bm(br(Le,"entries"),{...e,startTime:Q.fromDate(e.startTime),endTime:e.endTime?Q.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",Fm(),e.type==="Feed"&&Ai(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function Fm(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("pump-amount").value="",document.getElementById("pump-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("pump-fields").style.display="none",document.getElementById("submit-entry").style.display="none",Ti()}function us(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block"):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",Ii()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",wi()),window.scrollTo(0,0)}async function Ii(){const n=document.getElementById("timeline-list"),t=document.getElementById("timeline-loading");t.style.display="block",n.innerHTML="";try{const e=pi(br(Le,"entries"),yi("startTime","desc")),r=await Ei(e);if(r.empty)n.innerHTML="<p>No entries found.</p>";else{let s="";r.forEach(o=>{const a=o.data(),u=o.id,h=a.startTime.toDate(),f=Ns(h);if(f!==s){s=f;const P=document.createElement("div");P.className="timeline-date-header",P.textContent=f,n.appendChild(P)}const m=document.createElement("div");m.className="timeline-entry";let I=a.type,A="";if(a.type==="Feed")I=`Bottle - ${a.subType}`,A=`<div class="timeline-entry-details">Amount: ${Te(a.amount,a.unit)}</div>`;else if(a.type==="Breast Feed")I="Breast Feed",A="";else if(a.type==="Diaper")A=`<div class="timeline-entry-details">Type: ${a.diaperType}</div>`;else if(a.type==="Pump"){const P=a.endTime?a.endTime.toDate():null,U=P?Math.round((P.getTime()-h.getTime())/6e4):0;A=`<div class="timeline-entry-details">Amount: ${Te(a.amount,a.unit)}<br>Duration: ${U} minutes</div>`}const S=a.notes?`<div class="timeline-entry-notes">${a.notes}</div>`:"";m.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${I}</span>
                        <span class="timeline-entry-time">${Mm(h)}</span>
                    </div>
                    ${A}
                    ${S}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${u}">Edit</button>
                        <button class="delete-button" data-id="${u}">Delete</button>
                    </div>
                `;const k=m.querySelector(".edit-button"),D=m.querySelector(".delete-button");k.addEventListener("click",()=>qm(u,a)),D.addEventListener("click",()=>jm(u)),n.appendChild(m)})}}catch{n.innerHTML='<p class="error">Failed to load timeline</p>'}finally{t.style.display="none"}}async function wi(){const n=document.getElementById("weekly-stats"),t=document.getElementById("weekly-loading"),e=document.getElementById("week-range"),r=document.getElementById("next-week"),s=document.getElementById("current-week"),a=De(new Date("2025-11-05")),h=De(new Date);Rt<a&&(Rt=new Date(a)),Rt>=h?r.disabled=!0:r.disabled=!1,s&&(Rt.getTime()===h.getTime()?s.style.display="none":s.style.display="block");const f=Nm(Rt);e.textContent=`${Ns(Rt).split(",")[1].trim()} - ${Ns(f).split(",")[1].trim()}`,t.style.display="block",n.innerHTML="";try{const m=pi(br(Le,"entries"),va("startTime",">=",Q.fromDate(Rt)),va("startTime","<=",Q.fromDate(f)),yi("startTime","asc")),I=await Ei(m),A={};for(let D=0;D<7;D++){const P=new Date(Rt);P.setDate(P.getDate()+D);const U=P.toDateString();A[U]={date:P,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0}}}I.forEach(D=>{const P=D.data(),B=P.startTime.toDate().toDateString();if(A[B]){if(P.type==="Feed"){const $=Ms(P.amount,P.unit);A[B].bottles.total+=$,A[B].bottles.sessions++,P.subType==="Breast Milk"?A[B].bottles.breastMilk+=$:P.subType==="Formula"&&(A[B].bottles.formula+=$)}else if(P.type==="Diaper")A[B].diapers.total++,P.diaperType==="Pee"?A[B].diapers.pee++:P.diaperType==="Poo"?A[B].diapers.poo++:P.diaperType==="Mixed"&&A[B].diapers.mixed++;else if(P.type==="Pump"){const $=Ms(P.amount,P.unit);A[B].pumps.total+=$,A[B].pumps.sessions++}}});const S=Object.keys(A).map(D=>A[D]),k=document.createElement("div");k.className="weekly-scroll-container",S.forEach(D=>{const P=document.createElement("div");P.className="day-stats";const U=new Date;U.setHours(0,0,0,0);const B=new Date(D.date);B.setHours(0,0,0,0),U.getTime()===B.getTime()&&P.classList.add("current-day");const $=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][D.date.getDay()],et=`${D.date.getMonth()+1}/${D.date.getDate()}`;P.innerHTML=`
                <div class="day-stats-header">${$}<br>${et}</div>
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line-small">Number of feeds: ${D.bottles.sessions}</div>
                    <div class="stat-line-small">Breast Milk: ${Te(D.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line-small">Formula: ${Te(D.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total volume: ${Te(D.bottles.total,"oz")}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line-small">Pee: ${D.diapers.pee}</div>
                    <div class="stat-line-small">Poo: ${D.diapers.poo}</div>
                    <div class="stat-line-small">Mixed: ${D.diapers.mixed}</div>
                    <div class="stat-line">Total diapers: ${D.diapers.total}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${Te(D.pumps.total,"oz")}</div>
                    <div class="stat-line-small">Number of sessions: ${D.pumps.sessions}</div>
                </div>
            `,k.appendChild(P)}),n.appendChild(k)}catch{n.innerHTML='<p class="error">Failed to load weekly view</p>'}finally{t.style.display="none"}}function Aa(n){const e=De(new Date("2025-11-05")),s=De(new Date),o=new Date(Rt);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const u=new Date(s);u.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>u.getTime()||(Rt=o,wi()))}function Bm(){Rt=De(new Date),wi()}function Ms(n,t){return t==="ml"?n*.033814:n}function Um(n,t){return t==="oz"?n*29.5735:n}function Te(n,t){const e=Ms(n,t),r=Um(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function qm(n,t){mr=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields");r.style.display="none",s.style.display="none",o.style.display="none";const a=t.startTime.toDate();if(t.type==="Feed")r.style.display="block",document.getElementById("edit-bottle-time").value=ve(a),document.getElementById("edit-bottle-amount").value=t.amount.toFixed(2),document.getElementById("edit-bottle-unit").value=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=ve(a),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const u=t.endTime?t.endTime.toDate():a;document.getElementById("edit-pump-start-time").value=ve(a),document.getElementById("edit-pump-end-time").value=ve(u),document.getElementById("edit-pump-amount").value=t.amount.toFixed(2),document.getElementById("edit-pump-unit").value=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}e.style.display="block"}function nu(){const n=document.getElementById("edit-modal");n.style.display="none",mr=null;const t=document.getElementById("edit-status");t.style.display="none"}async function $m(){if(!mr)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields");let s={};const o=new Date;if(t.style.display==="block"){const a=document.getElementById("edit-bottle-time"),u=a.value,h=parseFloat(document.getElementById("edit-bottle-amount").value),f=document.getElementById("edit-bottle-unit").value,m=document.getElementById("edit-bottle-notes").value;if(!u)throw new Error("Start time is required");const I=new Date(a.value);if(I>o)throw new Error("Cannot set time in the future");if(isNaN(h)||h<=0)throw new Error("Amount must be greater than 0");s={startTime:Q.fromDate(I),amount:h,unit:f,notes:m}}else if(e.style.display==="block"){const a=document.getElementById("edit-diaper-time"),u=a.value,h=document.getElementById("edit-diaper-type").value,f=document.getElementById("edit-diaper-notes").value;if(!u)throw new Error("Start time is required");const m=new Date(a.value);if(m>o)throw new Error("Cannot set time in the future");if(!h)throw new Error("Diaper type is required");s={startTime:Q.fromDate(m),diaperType:h,notes:f}}else if(r.style.display==="block"){const a=document.getElementById("edit-pump-start-time"),u=document.getElementById("edit-pump-end-time"),h=a.value,f=u.value,m=parseFloat(document.getElementById("edit-pump-amount").value),I=document.getElementById("edit-pump-unit").value,A=document.getElementById("edit-pump-notes").value;if(!h)throw new Error("Start time is required");if(!f)throw new Error("End time is required");const S=new Date(a.value),k=new Date(u.value);if(S>o)throw new Error("Cannot set time in the future");if(k<S)throw new Error("End time must be after start time");if(isNaN(m)||m<=0)throw new Error("Amount must be greater than 0");s={startTime:Q.fromDate(S),endTime:Q.fromDate(k),amount:m,unit:I,notes:A}}await Am(oi(Le,"entries",mr),s),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(()=>{nu(),Ii()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function jm(n){if(confirm("Are you sure you want to delete this entry?"))try{await Rm(oi(Le,"entries",n)),Ii(),Ai()}catch{alert("Failed to delete entry")}}async function zm(){console.log("Starting last bottle timer..."),await Ai(),Xn&&clearInterval(Xn),Xn=window.setInterval(()=>{ru()},1e3),console.log("Timer started, interval ID:",Xn)}async function Ai(){console.log("Fetching last bottle time...");try{const n=pi(br(Le,"entries"),yi("startTime","desc")),t=await Ei(n);console.log("Total entries found:",t.docs.length);const e=t.docs.find(r=>r.data().type==="Feed");if(e){const s=e.data().startTime.toDate();localStorage.setItem("lastBottleTime",s.toISOString()),console.log("Last bottle time set:",s)}else localStorage.removeItem("lastBottleTime"),console.log("No bottle entries found");ru()}catch(n){console.error("Error fetching last bottle time:",n);const t=document.querySelector(".last-bottle-value");t&&(t.textContent="Error loading")}}function ru(){const n=document.querySelector(".last-bottle-value");if(!n){console.log("Display element not found");return}const t=localStorage.getItem("lastBottleTime");if(console.log("Updating display, last bottle time from storage:",t),!t){n.textContent="No bottles recorded";return}const e=new Date(t),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),u=Math.floor(s%(1e3*60)/1e3);o>0?n.textContent=`${o}h ${a}m ${u}s`:a>0?n.textContent=`${a}m ${u}s`:n.textContent=`${u}s`}var Ra;(Ra=document.getElementById("passcode-submit"))==null||Ra.addEventListener("click",tu);var ba;(ba=document.getElementById("passcode-input"))==null||ba.addEventListener("keypress",n=>{n.key==="Enter"&&tu()});window.addEventListener("DOMContentLoaded",()=>{if(Dm()){const n=document.getElementById("passcode-screen"),t=document.getElementById("app");n.style.display="none",t.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),eu()}});
