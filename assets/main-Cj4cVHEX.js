(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Zo={};/**
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
 */const Ja=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},wu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,v=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,D=d&63;h||(D=64,a||(w=64)),r.push(e[m],e[v],e[w],e[D])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ja(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||v==null)throw new Au;const w=o<<2|c>>4;if(r.push(w),d!==64){const D=c<<4&240|d>>2;if(r.push(D),v!==64){const V=d<<6&192|v;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Au extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bu=function(n){const t=Ja(n);return Za.encodeByteArray(t,!0)},Ir=function(n){return bu(n).replace(/\./g,"")},Su=function(n){try{return Za.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Du(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ru=()=>Du().__FIREBASE_DEFAULTS__,Pu=()=>{if(typeof process>"u"||typeof Zo>"u")return;const n=Zo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Su(n[1]);return t&&JSON.parse(t)},ui=()=>{try{return Ru()||Pu()||Cu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vu=n=>{var t,e;return(e=(t=ui())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ku=n=>{const t=Vu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},tl=()=>{var n;return(n=ui())===null||n===void 0?void 0:n.config};/**
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
 */class Nu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function xu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ir(JSON.stringify(e)),Ir(JSON.stringify(a)),""].join(".")}/**
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
 */function Mu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bu(){var n;const t=(n=ui())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lu(){return!Bu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ou(){try{return typeof indexedDB=="object"}catch{return!1}}function Fu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Uu="FirebaseError";class tn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Uu,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?$u(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new tn(s,c,r)}}function $u(n,t){return n.replace(qu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const qu=/\{\$([^}]+)}/g;function Us(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ta(o)&&ta(a)){if(!Us(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
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
 */function te(n){return n&&n._delegate?n._delegate:n}class Cn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const be="[DEFAULT]";/**
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
 */class ju{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Nu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hu(t))try{this.getOrInitializeService({instanceIdentifier:be})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=be){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=be){return this.instances.has(t)}getOptions(t=be){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=be){return this.component?this.component.multipleInstances?t:be:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zu(n){return n===be?void 0:n}function Hu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ku{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ju(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Wu={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Gu=J.INFO,Qu={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Yu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Qu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nl{constructor(t){this.name=t,this._logLevel=Gu,this._logHandler=Yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Xu=(n,t)=>t.some(e=>n instanceof e);let ea,na;function Ju(){return ea||(ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zu(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,$s=new WeakMap,sl=new WeakMap,ws=new WeakMap,hi=new WeakMap;function th(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ue(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&rl.set(e,n)}).catch(()=>{}),hi.set(t,n),t}function eh(n){if($s.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});$s.set(n,t)}let qs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return $s.get(n);if(t==="objectStoreNames")return n.objectStoreNames||sl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function nh(n){qs=n(qs)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(As(this),t,...e);return sl.set(r,t.sort?t.sort():[t]),ue(r)}:Zu().includes(n)?function(...t){return n.apply(As(this),t),ue(rl.get(this))}:function(...t){return ue(n.apply(As(this),t))}}function sh(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&eh(n),Xu(n,Ju())?new Proxy(n,qs):n)}function ue(n){if(n instanceof IDBRequest)return th(n);if(ws.has(n))return ws.get(n);const t=sh(n);return t!==n&&(ws.set(n,t),hi.set(t,n)),t}const As=n=>hi.get(n);function ih(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=ue(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ue(a.result),h.oldVersion,h.newVersion,ue(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const oh=["get","getKey","getAll","getAllKeys","count"],ah=["put","add","delete","clear"],bs=new Map;function ra(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bs.get(t))return bs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=ah.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return bs.set(t,o),o}nh(n=>({...n,get:(t,e,r)=>ra(t,e)||n.get(t,e,r),has:(t,e)=>!!ra(t,e)||n.has(t,e)}));/**
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
 */class lh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ch(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ch(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const js="@firebase/app",sa="0.10.13";/**
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
 */const ee=new nl("@firebase/app"),uh="@firebase/app-compat",hh="@firebase/analytics-compat",dh="@firebase/analytics",fh="@firebase/app-check-compat",mh="@firebase/app-check",ph="@firebase/auth",gh="@firebase/auth-compat",yh="@firebase/database",_h="@firebase/data-connect",Eh="@firebase/database-compat",vh="@firebase/functions",Th="@firebase/functions-compat",Ih="@firebase/installations",wh="@firebase/installations-compat",Ah="@firebase/messaging",bh="@firebase/messaging-compat",Sh="@firebase/performance",Dh="@firebase/performance-compat",Rh="@firebase/remote-config",Ph="@firebase/remote-config-compat",Ch="@firebase/storage",Vh="@firebase/storage-compat",kh="@firebase/firestore",Nh="@firebase/vertexai-preview",xh="@firebase/firestore-compat",Mh="firebase",Bh="10.14.1";/**
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
 */const zs="[DEFAULT]",Lh={[js]:"fire-core",[uh]:"fire-core-compat",[dh]:"fire-analytics",[hh]:"fire-analytics-compat",[mh]:"fire-app-check",[fh]:"fire-app-check-compat",[ph]:"fire-auth",[gh]:"fire-auth-compat",[yh]:"fire-rtdb",[_h]:"fire-data-connect",[Eh]:"fire-rtdb-compat",[vh]:"fire-fn",[Th]:"fire-fn-compat",[Ih]:"fire-iid",[wh]:"fire-iid-compat",[Ah]:"fire-fcm",[bh]:"fire-fcm-compat",[Sh]:"fire-perf",[Dh]:"fire-perf-compat",[Rh]:"fire-rc",[Ph]:"fire-rc-compat",[Ch]:"fire-gcs",[Vh]:"fire-gcs-compat",[kh]:"fire-fst",[xh]:"fire-fst-compat",[Nh]:"fire-vertex","fire-js":"fire-js",[Mh]:"fire-js-all"};/**
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
 */const wr=new Map,Oh=new Map,Hs=new Map;function ia(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ar(n){const t=n.name;if(Hs.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Hs.set(t,n);for(const e of wr.values())ia(e,n);for(const e of Oh.values())ia(e,n);return!0}function Fh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Uh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new el("app","Firebase",Uh);/**
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
 */class $h{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
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
 */const qh=Bh;function il(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw he.create("bad-app-name",{appName:String(s)});if(e||(e=tl()),!e)throw he.create("no-options");const o=wr.get(s);if(o){if(Us(e,o.options)&&Us(r,o.config))return o;throw he.create("duplicate-app",{appName:s})}const a=new Ku(s);for(const h of Hs.values())a.addComponent(h);const c=new $h(e,r,a);return wr.set(s,c),c}function jh(n=zs){const t=wr.get(n);if(!t&&n===zs&&tl())return il();if(!t)throw he.create("no-app",{appName:n});return t}function je(n,t,e){var r;let s=(r=Lh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(c.join(" "));return}Ar(new Cn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const zh="firebase-heartbeat-database",Hh=1,Vn="firebase-heartbeat-store";let Ss=null;function ol(){return Ss||(Ss=ih(zh,Hh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Vn)}catch(e){console.warn(e)}}}}).catch(n=>{throw he.create("idb-open",{originalErrorMessage:n.message})})),Ss}async function Kh(n){try{const e=(await ol()).transaction(Vn),r=await e.objectStore(Vn).get(al(n));return await e.done,r}catch(t){if(t instanceof tn)ee.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(e.message)}}}async function oa(n,t){try{const r=(await ol()).transaction(Vn,"readwrite");await r.objectStore(Vn).put(t,al(n)),await r.done}catch(e){if(e instanceof tn)ee.warn(e.message);else{const r=he.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ee.warn(r.message)}}}function al(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wh=1024,Gh=30*24*60*60*1e3;class Qh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=aa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Gh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ee.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=aa(),{heartbeatsToSend:r,unsentEntries:s}=Yh(this._heartbeatsCache.heartbeats),o=Ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ee.warn(e),""}}}function aa(){return new Date().toISOString().substring(0,10)}function Yh(n,t=Wh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),la(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),la(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Xh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ou()?Fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Kh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function la(n){return Ir(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Jh(n){Ar(new Cn("platform-logger",t=>new lh(t),"PRIVATE")),Ar(new Cn("heartbeat",t=>new Qh(t),"PRIVATE")),je(js,sa,n),je(js,sa,"esm2017"),je("fire-js","")}Jh("");var Zh="firebase",td="10.14.1";/**
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
 */je(Zh,td,"app");var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var De,ll;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,y){function g(){}g.prototype=y.prototype,I.D=y.prototype,I.prototype=new g,I.prototype.constructor=I,I.C=function(_,E,T){for(var p=Array(arguments.length-2),F=2;F<arguments.length;F++)p[F-2]=arguments[F];return y.prototype[E].apply(_,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,g){g||(g=0);var _=Array(16);if(typeof y=="string")for(var E=0;16>E;++E)_[E]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(E=0;16>E;++E)_[E]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=I.g[0],g=I.g[1],E=I.g[2];var T=I.g[3],p=y+(T^g&(E^T))+_[0]+3614090360&4294967295;y=g+(p<<7&4294967295|p>>>25),p=T+(E^y&(g^E))+_[1]+3905402710&4294967295,T=y+(p<<12&4294967295|p>>>20),p=E+(g^T&(y^g))+_[2]+606105819&4294967295,E=T+(p<<17&4294967295|p>>>15),p=g+(y^E&(T^y))+_[3]+3250441966&4294967295,g=E+(p<<22&4294967295|p>>>10),p=y+(T^g&(E^T))+_[4]+4118548399&4294967295,y=g+(p<<7&4294967295|p>>>25),p=T+(E^y&(g^E))+_[5]+1200080426&4294967295,T=y+(p<<12&4294967295|p>>>20),p=E+(g^T&(y^g))+_[6]+2821735955&4294967295,E=T+(p<<17&4294967295|p>>>15),p=g+(y^E&(T^y))+_[7]+4249261313&4294967295,g=E+(p<<22&4294967295|p>>>10),p=y+(T^g&(E^T))+_[8]+1770035416&4294967295,y=g+(p<<7&4294967295|p>>>25),p=T+(E^y&(g^E))+_[9]+2336552879&4294967295,T=y+(p<<12&4294967295|p>>>20),p=E+(g^T&(y^g))+_[10]+4294925233&4294967295,E=T+(p<<17&4294967295|p>>>15),p=g+(y^E&(T^y))+_[11]+2304563134&4294967295,g=E+(p<<22&4294967295|p>>>10),p=y+(T^g&(E^T))+_[12]+1804603682&4294967295,y=g+(p<<7&4294967295|p>>>25),p=T+(E^y&(g^E))+_[13]+4254626195&4294967295,T=y+(p<<12&4294967295|p>>>20),p=E+(g^T&(y^g))+_[14]+2792965006&4294967295,E=T+(p<<17&4294967295|p>>>15),p=g+(y^E&(T^y))+_[15]+1236535329&4294967295,g=E+(p<<22&4294967295|p>>>10),p=y+(E^T&(g^E))+_[1]+4129170786&4294967295,y=g+(p<<5&4294967295|p>>>27),p=T+(g^E&(y^g))+_[6]+3225465664&4294967295,T=y+(p<<9&4294967295|p>>>23),p=E+(y^g&(T^y))+_[11]+643717713&4294967295,E=T+(p<<14&4294967295|p>>>18),p=g+(T^y&(E^T))+_[0]+3921069994&4294967295,g=E+(p<<20&4294967295|p>>>12),p=y+(E^T&(g^E))+_[5]+3593408605&4294967295,y=g+(p<<5&4294967295|p>>>27),p=T+(g^E&(y^g))+_[10]+38016083&4294967295,T=y+(p<<9&4294967295|p>>>23),p=E+(y^g&(T^y))+_[15]+3634488961&4294967295,E=T+(p<<14&4294967295|p>>>18),p=g+(T^y&(E^T))+_[4]+3889429448&4294967295,g=E+(p<<20&4294967295|p>>>12),p=y+(E^T&(g^E))+_[9]+568446438&4294967295,y=g+(p<<5&4294967295|p>>>27),p=T+(g^E&(y^g))+_[14]+3275163606&4294967295,T=y+(p<<9&4294967295|p>>>23),p=E+(y^g&(T^y))+_[3]+4107603335&4294967295,E=T+(p<<14&4294967295|p>>>18),p=g+(T^y&(E^T))+_[8]+1163531501&4294967295,g=E+(p<<20&4294967295|p>>>12),p=y+(E^T&(g^E))+_[13]+2850285829&4294967295,y=g+(p<<5&4294967295|p>>>27),p=T+(g^E&(y^g))+_[2]+4243563512&4294967295,T=y+(p<<9&4294967295|p>>>23),p=E+(y^g&(T^y))+_[7]+1735328473&4294967295,E=T+(p<<14&4294967295|p>>>18),p=g+(T^y&(E^T))+_[12]+2368359562&4294967295,g=E+(p<<20&4294967295|p>>>12),p=y+(g^E^T)+_[5]+4294588738&4294967295,y=g+(p<<4&4294967295|p>>>28),p=T+(y^g^E)+_[8]+2272392833&4294967295,T=y+(p<<11&4294967295|p>>>21),p=E+(T^y^g)+_[11]+1839030562&4294967295,E=T+(p<<16&4294967295|p>>>16),p=g+(E^T^y)+_[14]+4259657740&4294967295,g=E+(p<<23&4294967295|p>>>9),p=y+(g^E^T)+_[1]+2763975236&4294967295,y=g+(p<<4&4294967295|p>>>28),p=T+(y^g^E)+_[4]+1272893353&4294967295,T=y+(p<<11&4294967295|p>>>21),p=E+(T^y^g)+_[7]+4139469664&4294967295,E=T+(p<<16&4294967295|p>>>16),p=g+(E^T^y)+_[10]+3200236656&4294967295,g=E+(p<<23&4294967295|p>>>9),p=y+(g^E^T)+_[13]+681279174&4294967295,y=g+(p<<4&4294967295|p>>>28),p=T+(y^g^E)+_[0]+3936430074&4294967295,T=y+(p<<11&4294967295|p>>>21),p=E+(T^y^g)+_[3]+3572445317&4294967295,E=T+(p<<16&4294967295|p>>>16),p=g+(E^T^y)+_[6]+76029189&4294967295,g=E+(p<<23&4294967295|p>>>9),p=y+(g^E^T)+_[9]+3654602809&4294967295,y=g+(p<<4&4294967295|p>>>28),p=T+(y^g^E)+_[12]+3873151461&4294967295,T=y+(p<<11&4294967295|p>>>21),p=E+(T^y^g)+_[15]+530742520&4294967295,E=T+(p<<16&4294967295|p>>>16),p=g+(E^T^y)+_[2]+3299628645&4294967295,g=E+(p<<23&4294967295|p>>>9),p=y+(E^(g|~T))+_[0]+4096336452&4294967295,y=g+(p<<6&4294967295|p>>>26),p=T+(g^(y|~E))+_[7]+1126891415&4294967295,T=y+(p<<10&4294967295|p>>>22),p=E+(y^(T|~g))+_[14]+2878612391&4294967295,E=T+(p<<15&4294967295|p>>>17),p=g+(T^(E|~y))+_[5]+4237533241&4294967295,g=E+(p<<21&4294967295|p>>>11),p=y+(E^(g|~T))+_[12]+1700485571&4294967295,y=g+(p<<6&4294967295|p>>>26),p=T+(g^(y|~E))+_[3]+2399980690&4294967295,T=y+(p<<10&4294967295|p>>>22),p=E+(y^(T|~g))+_[10]+4293915773&4294967295,E=T+(p<<15&4294967295|p>>>17),p=g+(T^(E|~y))+_[1]+2240044497&4294967295,g=E+(p<<21&4294967295|p>>>11),p=y+(E^(g|~T))+_[8]+1873313359&4294967295,y=g+(p<<6&4294967295|p>>>26),p=T+(g^(y|~E))+_[15]+4264355552&4294967295,T=y+(p<<10&4294967295|p>>>22),p=E+(y^(T|~g))+_[6]+2734768916&4294967295,E=T+(p<<15&4294967295|p>>>17),p=g+(T^(E|~y))+_[13]+1309151649&4294967295,g=E+(p<<21&4294967295|p>>>11),p=y+(E^(g|~T))+_[4]+4149444226&4294967295,y=g+(p<<6&4294967295|p>>>26),p=T+(g^(y|~E))+_[11]+3174756917&4294967295,T=y+(p<<10&4294967295|p>>>22),p=E+(y^(T|~g))+_[2]+718787259&4294967295,E=T+(p<<15&4294967295|p>>>17),p=g+(T^(E|~y))+_[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+T&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var g=y-this.blockSize,_=this.B,E=this.h,T=0;T<y;){if(E==0)for(;T<=g;)s(this,I,T),T+=this.blockSize;if(typeof I=="string"){for(;T<y;)if(_[E++]=I.charCodeAt(T++),E==this.blockSize){s(this,_),E=0;break}}else for(;T<y;)if(_[E++]=I[T++],E==this.blockSize){s(this,_),E=0;break}}this.h=E,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var g=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.u(I),I=Array(16),y=g=0;4>y;++y)for(var _=0;32>_;_+=8)I[g++]=this.g[y]>>>_&255;return I};function o(I,y){var g=c;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=y(I)}function a(I,y){this.h=y;for(var g=[],_=!0,E=I.length-1;0<=E;E--){var T=I[E]|0;_&&T==y||(g[E]=T,_=!1)}this.g=g}var c={};function h(I){return-128<=I&&128>I?o(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return v;if(0>I)return b(d(-I));for(var y=[],g=1,_=0;I>=g;_++)y[_]=I/g|0,g*=4294967296;return new a(y,0)}function m(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return b(m(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(y,8)),_=v,E=0;E<I.length;E+=8){var T=Math.min(8,I.length-E),p=parseInt(I.substring(E,E+T),y);8>T?(T=d(Math.pow(y,T)),_=_.j(T).add(d(p))):(_=_.j(g),_=_.add(d(p)))}return _}var v=h(0),w=h(1),D=h(16777216);n=a.prototype,n.m=function(){if(P(this))return-b(this).m();for(var I=0,y=1,g=0;g<this.g.length;g++){var _=this.i(g);I+=(0<=_?_:4294967296+_)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(P(this))return"-"+b(this).toString(I);for(var y=d(Math.pow(I,6)),g=this,_="";;){var E=G(g,y).g;g=L(g,E.j(y));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(I);if(g=E,V(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=L(this,I),P(I)?-1:V(I)?0:1};function b(I){for(var y=I.g.length,g=[],_=0;_<y;_++)g[_]=~I.g[_];return new a(g,~I.h).add(w)}n.abs=function(){return P(this)?b(this):this},n.add=function(I){for(var y=Math.max(this.g.length,I.g.length),g=[],_=0,E=0;E<=y;E++){var T=_+(this.i(E)&65535)+(I.i(E)&65535),p=(T>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);_=p>>>16,T&=65535,p&=65535,g[E]=p<<16|T}return new a(g,g[g.length-1]&-2147483648?-1:0)};function L(I,y){return I.add(b(y))}n.j=function(I){if(V(this)||V(I))return v;if(P(this))return P(I)?b(this).j(b(I)):b(b(this).j(I));if(P(I))return b(this.j(b(I)));if(0>this.l(D)&&0>I.l(D))return d(this.m()*I.m());for(var y=this.g.length+I.g.length,g=[],_=0;_<2*y;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<I.g.length;E++){var T=this.i(_)>>>16,p=this.i(_)&65535,F=I.i(E)>>>16,st=I.i(E)&65535;g[2*_+2*E]+=p*st,O(g,2*_+2*E),g[2*_+2*E+1]+=T*st,O(g,2*_+2*E+1),g[2*_+2*E+1]+=p*F,O(g,2*_+2*E+1),g[2*_+2*E+2]+=T*F,O(g,2*_+2*E+2)}for(_=0;_<y;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=y;_<2*y;_++)g[_]=0;return new a(g,0)};function O(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function M(I,y){this.g=I,this.h=y}function G(I,y){if(V(y))throw Error("division by zero");if(V(I))return new M(v,v);if(P(I))return y=G(b(I),y),new M(b(y.g),b(y.h));if(P(y))return y=G(I,b(y)),new M(b(y.g),y.h);if(30<I.g.length){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var g=w,_=y;0>=_.l(I);)g=j(g),_=j(_);var E=W(g,1),T=W(_,1);for(_=W(_,2),g=W(g,2);!V(_);){var p=T.add(_);0>=p.l(I)&&(E=E.add(g),T=p),_=W(_,1),g=W(g,1)}return y=L(I,E.j(y)),new M(E,y)}for(E=v;0<=I.l(y);){for(g=Math.max(1,Math.floor(I.m()/y.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=d(g),p=T.j(y);P(p)||0<p.l(I);)g-=_,T=d(g),p=T.j(y);V(T)&&(T=w),E=E.add(T),I=L(I,p)}return new M(E,I)}n.A=function(I){return G(this,I).h},n.and=function(I){for(var y=Math.max(this.g.length,I.g.length),g=[],_=0;_<y;_++)g[_]=this.i(_)&I.i(_);return new a(g,this.h&I.h)},n.or=function(I){for(var y=Math.max(this.g.length,I.g.length),g=[],_=0;_<y;_++)g[_]=this.i(_)|I.i(_);return new a(g,this.h|I.h)},n.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),g=[],_=0;_<y;_++)g[_]=this.i(_)^I.i(_);return new a(g,this.h^I.h)};function j(I){for(var y=I.g.length+1,g=[],_=0;_<y;_++)g[_]=I.i(_)<<1|I.i(_-1)>>>31;return new a(g,I.h)}function W(I,y){var g=y>>5;y%=32;for(var _=I.g.length-g,E=[],T=0;T<_;T++)E[T]=0<y?I.i(T+g)>>>y|I.i(T+g+1)<<32-y:I.i(T+g);return new a(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ll=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,De=a}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cl,In,ul,yr,Ks,hl,dl,fl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof dr=="object"&&dr];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break t;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var S=u++;return{value:l(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function v(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function w(i,l,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,w.apply(null,arguments)}function D(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function V(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var k=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)k[rt-2]=arguments[rt];return l.prototype[A].apply(f,k)}}function P(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function b(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let k=0;k<S;k++)i[A+k]=f[k]}else i.push(f)}}class L{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function M(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function G(i){return G[" "](i),i}G[" "]=function(){};var j=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function W(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function I(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function y(i){const l={};for(const u in i)l[u]=i[u];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let S=0;S<g.length;S++)u=g[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function E(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function T(i){c.setTimeout(()=>{throw i},0)}function p(){var i=pt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,u){const f=st.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var st=new L(()=>new $,i=>i.reset());class ${constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let x,ct=!1,pt=new F,nt=()=>{const i=c.Promise.resolve(void 0);x=()=>{i.then(ut)}};var ut=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(u){T(u)}var l=st;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ct=!1};function It(){this.s=this.s,this.C=this.C}It.prototype.s=!1,It.prototype.ma=function(){this.s||(this.s=!0,this.N())},It.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function Ee(i,l){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(j){t:{try{G(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ji[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ee.aa.h.call(this)}}V(Ee,ht);var Ji={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),Kc=0;function Wc(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++Kc,this.da=this.fa=!1}function Gn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Qn(i){this.src=i,this.g={},this.h=0}Qn.prototype.add=function(i,l,u,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var k=es(i,l,f,A);return-1<k?(l=i[k],u||(l.fa=!1)):(l=new Wc(l,this.src,S,!!f,A),l.fa=u,i.push(l)),l};function ts(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Gn(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function es(i,l,u,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==f)return A}return-1}var ns="closure_lm_"+(1e6*Math.random()|0),rs={};function Zi(i,l,u,f,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Zi(i,l[S],u,f,A);return null}return u=no(u),i&&i[Wn]?i.K(l,u,d(f)?!!f.capture:!1,A):Gc(i,l,u,!1,f,A)}function Gc(i,l,u,f,A,S){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,rt=is(i);if(rt||(i[ns]=rt=new Qn(i)),u=rt.add(l,u,f,k,S),u.proxy)return u;if(f=Qc(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)$t||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(eo(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Qc(){function i(u){return l.call(i.src,i.listener,u)}const l=Yc;return i}function to(i,l,u,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)to(i,l[S],u,f,A);else f=d(f)?!!f.capture:!!f,u=no(u),i&&i[Wn]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],u=es(S,u,f,A),-1<u&&(Gn(S[u]),Array.prototype.splice.call(S,u,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=is(i))&&(l=i.g[l.toString()],i=-1,l&&(i=es(l,u,f,A)),(u=-1<i?l[i]:null)&&ss(u))}function ss(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Wn])ts(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(eo(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=is(l))?(ts(u,i),u.h==0&&(u.src=null,l[ns]=null)):Gn(i)}}}function eo(i){return i in rs?rs[i]:rs[i]="on"+i}function Yc(i,l){if(i.da)i=!0;else{l=new Ee(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&ss(i),i=u.call(f,l)}return i}function is(i){return i=i[ns],i instanceof Qn?i:null}var os="__closure_events_fn_"+(1e9*Math.random()>>>0);function no(i){return typeof i=="function"?i:(i[os]||(i[os]=function(l){return i.handleEvent(l)}),i[os])}function Rt(){It.call(this),this.i=new Qn(this),this.M=this,this.F=null}V(Rt,It),Rt.prototype[Wn]=!0,Rt.prototype.removeEventListener=function(i,l,u,f){to(this,i,l,u,f)};function Mt(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new ht(l,i);else if(l instanceof ht)l.target=l.target||i;else{var A=l;l=new ht(f,i),_(l,A)}if(A=!0,u)for(var S=u.length-1;0<=S;S--){var k=l.g=u[S];A=Yn(k,f,!0,l)&&A}if(k=l.g=i,A=Yn(k,f,!0,l)&&A,A=Yn(k,f,!1,l)&&A,u)for(S=0;S<u.length;S++)k=l.g=u[S],A=Yn(k,f,!1,l)&&A}Rt.prototype.N=function(){if(Rt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)Gn(u[f]);delete i.g[l],i.h--}}this.F=null},Rt.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Rt.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function Yn(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var k=l[S];if(k&&!k.da&&k.capture==u){var rt=k.listener,wt=k.ha||k.src;k.fa&&ts(i.i,k),A=rt.call(wt,f)!==!1&&A}}return A&&!f.defaultPrevented}function ro(i,l,u){if(typeof i=="function")u&&(i=w(i,u));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function so(i){i.g=ro(()=>{i.g=null,i.i&&(i.i=!1,so(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Xc extends It{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:so(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(i){It.call(this),this.h=i,this.g={}}V(an,It);var io=[];function oo(i){W(i.g,function(l,u){this.g.hasOwnProperty(u)&&ss(l)},i),i.g={}}an.prototype.N=function(){an.aa.N.call(this),oo(this)},an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var as=c.JSON.stringify,Jc=c.JSON.parse,Zc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function ls(){}ls.prototype.h=null;function ao(i){return i.h||(i.h=i.i())}function lo(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cs(){ht.call(this,"d")}V(cs,ht);function us(){ht.call(this,"c")}V(us,ht);var ve={},co=null;function Xn(){return co=co||new Rt}ve.La="serverreachability";function uo(i){ht.call(this,ve.La,i)}V(uo,ht);function cn(i){const l=Xn();Mt(l,new uo(l))}ve.STAT_EVENT="statevent";function ho(i,l){ht.call(this,ve.STAT_EVENT,i),this.stat=l}V(ho,ht);function Bt(i){const l=Xn();Mt(l,new ho(l,i))}ve.Ma="timingevent";function fo(i,l){ht.call(this,ve.Ma,i),this.size=l}V(fo,ht);function un(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function hn(){this.g=!0}hn.prototype.xa=function(){this.g=!1};function tu(i,l,u,f,A,S){i.info(function(){if(i.g)if(S)for(var k="",rt=S.split("&"),wt=0;wt<rt.length;wt++){var Z=rt[wt].split("=");if(1<Z.length){var Pt=Z[0];Z=Z[1];var Ct=Pt.split("_");k=2<=Ct.length&&Ct[1]=="type"?k+(Pt+"="+Z+"&"):k+(Pt+"=redacted&")}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+k})}function eu(i,l,u,f,A,S,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+S+" "+k})}function Be(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+ru(i,u)+(f?" "+f:"")})}function nu(i,l){i.info(function(){return"TIMEOUT: "+l})}hn.prototype.info=function(){};function ru(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return as(u)}catch{return l}}var Jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hs;function Zn(){}V(Zn,ls),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},hs=new Zn;function se(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new an(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new po}function po(){this.i=null,this.g="",this.h=!1}var go={},ds={};function fs(i,l,u){i.L=1,i.v=rr(Xt(l)),i.m=u,i.P=!0,yo(i,null)}function yo(i,l){i.F=Date.now(),tr(i),i.A=Xt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Vo(u.i,"t",f),i.C=0,u=i.j.J,i.h=new po,i.g=Qo(i.j,u?l:null,!i.m),0<i.O&&(i.M=new Xc(w(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(io[0]=A.toString()),A=io);for(var S=0;S<A.length;S++){var k=Zi(u,A[S],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?y(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),cn(),tu(i.i,i.u,i.A,i.l,i.R,i.m)}se.prototype.ca=function(i){i=i.target;const l=this.M;l&&Jt(i)==3?l.j():this.Y(i)},se.prototype.Y=function(i){try{if(i==this.g)t:{const Ct=Jt(this.g);var l=this.g.Ba();const Fe=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Oo(this.g)))){this.J||Ct!=4||l==7||(l==8||0>=Fe?cn(3):cn(2)),ms(this);var u=this.g.Z();this.X=u;e:if(_o(this)){var f=Oo(this.g);i="";var A=f.length,S=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Te(this),dn(this);var k="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(S&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,eu(this.i,this.u,this.A,this.l,this.R,Ct,u),this.o){if(this.T&&!this.K){e:{if(this.g){var rt,wt=this.g;if((rt=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(rt)){var Z=rt;break e}}Z=null}if(u=Z)Be(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,u);else{this.o=!1,this.s=3,Bt(12),Te(this),dn(this);break t}}if(this.P){u=!0;let zt;for(;!this.J&&this.C<k.length;)if(zt=su(this,k),zt==ds){Ct==4&&(this.s=4,Bt(14),u=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==go){this.s=4,Bt(15),Be(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else Be(this.i,this.l,zt,null),ps(this,zt);if(_o(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||k.length!=0||this.h.h||(this.s=1,Bt(16),u=!1),this.o=this.o&&u,!u)Be(this.i,this.l,k,"[Invalid Chunked Response]"),Te(this),dn(this);else if(0<k.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ts(Pt),Pt.M=!0,Bt(11))}}else Be(this.i,this.l,k,null),ps(this,k);Ct==4&&Te(this),this.o&&!this.J&&(Ct==4?Ho(this.j,this):(this.o=!1,tr(this)))}else Tu(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),Te(this),dn(this)}}}catch{}finally{}};function _o(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function su(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?ds:(u=Number(l.substring(u,f)),isNaN(u)?go:(f+=1,f+u>l.length?ds:(l=l.slice(f,f+u),i.C=f+u,l)))}se.prototype.cancel=function(){this.J=!0,Te(this)};function tr(i){i.S=Date.now()+i.I,Eo(i,i.I)}function Eo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=un(w(i.ba,i),l)}function ms(i){i.B&&(c.clearTimeout(i.B),i.B=null)}se.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nu(this.i,this.A),this.L!=2&&(cn(),Bt(17)),Te(this),this.s=2,dn(this)):Eo(this,this.S-i)};function dn(i){i.j.G==0||i.J||Ho(i.j,i)}function Te(i){ms(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,oo(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ps(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||gs(u.h,i))){if(!i.K&&gs(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)cr(u),ar(u);else break t;vs(u),Bt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=un(w(u.Za,u),6e3));if(1>=Io(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else we(u,11)}else if((i.K||u.g==i)&&cr(u),!O(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let Z=A[l];if(u.T=Z[0],Z=Z[1],u.G==2)if(Z[0]=="c"){u.K=Z[1],u.ia=Z[2];const Pt=Z[3];Pt!=null&&(u.la=Pt,u.j.info("VER="+u.la));const Ct=Z[4];Ct!=null&&(u.Aa=Ct,u.j.info("SVER="+u.Aa));const Fe=Z[5];Fe!=null&&typeof Fe=="number"&&0<Fe&&(f=1.5*Fe,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const zt=i.g;if(zt){const hr=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hr){var S=f.h;S.g||hr.indexOf("spdy")==-1&&hr.indexOf("quic")==-1&&hr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ys(S,S.h),S.h=null))}if(f.D){const Is=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(f.ya=Is,ot(f.I,f.D,Is))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=Go(f,f.J?f.ia:null,f.W),k.K){wo(f.h,k);var rt=k,wt=f.L;wt&&(rt.I=wt),rt.B&&(ms(rt),tr(rt)),f.g=k}else jo(f);0<u.i.length&&lr(u)}else Z[0]!="stop"&&Z[0]!="close"||we(u,7);else u.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?we(u,7):Es(u):Z[0]!="noop"&&u.l&&u.l.ta(Z),u.v=0)}}cn(4)}catch{}}var iu=class{constructor(i,l){this.g=i,this.map=l}};function vo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function To(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Io(i){return i.h?1:i.g?i.g.size:0}function gs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ys(i,l){i.g?i.g.add(l):i.h=l}function wo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}vo.prototype.cancel=function(){if(this.i=Ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ao(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return P(i.i)}function ou(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function au(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function bo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=au(i),f=ou(i),A=f.length,S=0;S<A;S++)l.call(void 0,f[S],u&&u[S],i)}var So=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lu(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var S=i[u].substring(0,f);A=i[u].substring(f+1)}else S=i[u];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ie(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ie){this.h=i.h,er(this,i.j),this.o=i.o,this.g=i.g,nr(this,i.s),this.l=i.l;var l=i.i,u=new pn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Do(this,u),this.m=i.m}else i&&(l=String(i).match(So))?(this.h=!1,er(this,l[1]||"",!0),this.o=fn(l[2]||""),this.g=fn(l[3]||"",!0),nr(this,l[4]),this.l=fn(l[5]||"",!0),Do(this,l[6]||"",!0),this.m=fn(l[7]||"")):(this.h=!1,this.i=new pn(null,this.h))}Ie.prototype.toString=function(){var i=[],l=this.j;l&&i.push(mn(l,Ro,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(mn(l,Ro,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(mn(u,u.charAt(0)=="/"?hu:uu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",mn(u,fu)),i.join("")};function Xt(i){return new Ie(i)}function er(i,l,u){i.j=u?fn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function nr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Do(i,l,u){l instanceof pn?(i.i=l,mu(i.i,i.h)):(u||(l=mn(l,du)),i.i=new pn(l,i.h))}function ot(i,l,u){i.i.set(l,u)}function rr(i){return ot(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function fn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function mn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,cu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function cu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ro=/[#\/\?@]/g,uu=/[#\?:]/g,hu=/[#\?]/g,du=/[#\?@]/g,fu=/#/g;function pn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ie(i){i.g||(i.g=new Map,i.h=0,i.i&&lu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=pn.prototype,n.add=function(i,l){ie(this),this.i=null,i=Le(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function Po(i,l){ie(i),l=Le(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Co(i,l){return ie(i),l=Le(i,l),i.g.has(l)}n.forEach=function(i,l){ie(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){ie(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let S=0;S<A.length;S++)u.push(l[f])}return u},n.V=function(i){ie(this);let l=[];if(typeof i=="string")Co(this,i)&&(l=l.concat(this.g.get(Le(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return ie(this),this.i=null,i=Le(this,i),Co(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Vo(i,l,u){Po(i,l),0<u.length&&(i.i=null,i.g.set(Le(i,l),P(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const S=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=S;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Le(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function mu(i,l){l&&!i.j&&(ie(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(Po(this,f),Vo(this,A,u))},i)),i.j=l}function pu(i,l){const u=new hn;if(c.Image){const f=new Image;f.onload=D(oe,u,"TestLoadImage: loaded",!0,l,f),f.onerror=D(oe,u,"TestLoadImage: error",!1,l,f),f.onabort=D(oe,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=D(oe,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function gu(i,l){const u=new hn,f=new AbortController,A=setTimeout(()=>{f.abort(),oe(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?oe(u,"TestPingServer: ok",!0,l):oe(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),oe(u,"TestPingServer: error",!1,l)})}function oe(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function yu(){this.g=new Zc}function _u(i,l,u){const f=u||"";try{bo(i,function(A,S){let k=A;d(A)&&(k=as(A)),l.push(f+S+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function sr(i){this.l=i.Ub||null,this.j=i.eb||!1}V(sr,ls),sr.prototype.g=function(){return new ir(this.l,this.j)},sr.prototype.i=function(i){return function(){return i}}({});function ir(i,l){Rt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ir,Rt),n=ir.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,yn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,yn(this)),this.g&&(this.readyState=3,yn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ko(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ko(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?gn(this):yn(this),this.readyState==3&&ko(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,gn(this))},n.Qa=function(i){this.g&&(this.response=i,gn(this))},n.ga=function(){this.g&&gn(this)};function gn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,yn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function yn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function No(i){let l="";return W(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function _s(i,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=No(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):ot(i,l,u))}function dt(i){Rt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(dt,Rt);var Eu=/^https?$/i,vu=["POST","PUT"];n=dt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hs.g(),this.v=this.o?ao(this.o):ao(hs),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){xo(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vu,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of u)this.g.setRequestHeader(S,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lo(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){xo(this,S)}};function xo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Mo(i),or(i)}function Mo(i){i.A||(i.A=!0,Mt(i,"complete"),Mt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Mt(this,"complete"),Mt(this,"abort"),or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),or(this,!0)),dt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},n.bb=function(){Bo(this)};function Bo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Jt(i)!=4||i.Z()!=2)){if(i.u&&Jt(i)==4)ro(i.Ea,0,i);else if(Mt(i,"readystatechange"),Jt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=k===0){var A=String(i.D).match(So)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Eu.test(A?A.toLowerCase():"")}u=f}if(u)Mt(i,"complete"),Mt(i,"success");else{i.m=6;try{var S=2<Jt(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",Mo(i)}}finally{or(i)}}}}function or(i,l){if(i.g){Lo(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Mt(i,"ready");try{u.onreadystatechange=f}catch{}}}function Lo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Jc(l)}};function Oo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Tu(i){const l={};i=(i.g&&2<=Jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(O(i[f]))continue;var u=E(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[A]||[];l[A]=S,S.push(u)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _n(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Fo(i){this.Aa=0,this.i=[],this.j=new hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,i),this.cb=_n("retryDelaySeedMs",1e4,i),this.Wa=_n("forwardChannelMaxRetries",2,i),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new vo(i&&i.concurrentRequestLimit),this.Da=new yu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fo.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,f){Bt(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Go(this,null,this.W),lr(this)};function Es(i){if(Uo(i),i.G==3){var l=i.U++,u=Xt(i.I);if(ot(u,"SID",i.K),ot(u,"RID",l),ot(u,"TYPE","terminate"),En(i,u),l=new se(i,i.j,l),l.L=2,l.v=rr(Xt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Qo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),tr(l)}Wo(i)}function ar(i){i.g&&(Ts(i),i.g.cancel(),i.g=null)}function Uo(i){ar(i),i.u&&(c.clearTimeout(i.u),i.u=null),cr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function lr(i){if(!To(i.h)&&!i.s){i.s=!0;var l=i.Ga;x||nt(),ct||(x(),ct=!0),pt.add(l,i),i.B=0}}function Iu(i,l){return Io(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=un(w(i.Ga,i,l),Ko(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new se(this,this.j,i);let S=this.o;if(this.S&&(S?(S=y(S),_(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=qo(this,A,l),u=Xt(this.I),ot(u,"RID",i),ot(u,"CVER",22),this.D&&ot(u,"X-HTTP-Session-Id",this.D),En(this,u),S&&(this.O?l="headers="+encodeURIComponent(String(No(S)))+"&"+l:this.m&&_s(u,this.m,S)),ys(this.h,A),this.Ua&&ot(u,"TYPE","init"),this.P?(ot(u,"$req",l),ot(u,"SID","null"),A.T=!0,fs(A,u,null)):fs(A,u,l),this.G=2}}else this.G==3&&(i?$o(this,i):this.i.length==0||To(this.h)||$o(this))};function $o(i,l){var u;l?u=l.l:u=i.U++;const f=Xt(i.I);ot(f,"SID",i.K),ot(f,"RID",u),ot(f,"AID",i.T),En(i,f),i.m&&i.o&&_s(f,i.m,i.o),u=new se(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=qo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ys(i.h,u),fs(u,f,l)}function En(i,l){i.H&&W(i.H,function(u,f){ot(l,f,u)}),i.l&&bo({},function(u,f){ot(l,f,u)})}function qo(i,l,u){u=Math.min(i.i.length,u);var f=i.l?w(i.l.Na,i.l,i):null;t:{var A=i.i;let S=-1;for(;;){const k=["count="+u];S==-1?0<u?(S=A[0].g,k.push("ofs="+S)):S=0:k.push("ofs="+S);let rt=!0;for(let wt=0;wt<u;wt++){let Z=A[wt].g;const Pt=A[wt].map;if(Z-=S,0>Z)S=Math.max(0,A[wt].g-100),rt=!1;else try{_u(Pt,k,"req"+Z+"_")}catch{f&&f(Pt)}}if(rt){f=k.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,f}function jo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;x||nt(),ct||(x(),ct=!0),pt.add(l,i),i.v=0}}function vs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=un(w(i.Fa,i),Ko(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,zo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=un(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Bt(10),ar(this),zo(this))};function Ts(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function zo(i){i.g=new se(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Xt(i.qa);ot(l,"RID","rpc"),ot(l,"SID",i.K),ot(l,"AID",i.T),ot(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ot(l,"TO",i.ja),ot(l,"TYPE","xmlhttp"),En(i,l),i.m&&i.o&&_s(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=rr(Xt(l)),u.m=null,u.P=!0,yo(u,i)}n.Za=function(){this.C!=null&&(this.C=null,ar(this),vs(this),Bt(19))};function cr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ho(i,l){var u=null;if(i.g==l){cr(i),Ts(i),i.g=null;var f=2}else if(gs(i.h,l))u=l.D,wo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Xn(),Mt(f,new fo(f,u)),lr(i)}else jo(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Iu(i,l)||f==2&&vs(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:we(i,5);break;case 4:we(i,10);break;case 3:we(i,6);break;default:we(i,2)}}}function Ko(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function we(i,l){if(i.j.info("Error code "+l),l==2){var u=w(i.fb,i),f=i.Xa;const A=!f;f=new Ie(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||er(f,"https"),rr(f),A?pu(f.toString(),u):gu(f.toString(),u)}else Bt(2);i.G=0,i.l&&i.l.sa(l),Wo(i),Uo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function Wo(i){if(i.G=0,i.ka=[],i.l){const l=Ao(i.h);(l.length!=0||i.i.length!=0)&&(b(i.ka,l),b(i.ka,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.ra()}}function Go(i,l,u){var f=u instanceof Ie?Xt(u):new Ie(u);if(f.g!="")l&&(f.g=l+"."+f.g),nr(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Ie(null);f&&er(S,f),l&&(S.g=l),A&&nr(S,A),u&&(S.l=u),f=S}return u=i.D,l=i.ya,u&&l&&ot(f,u,l),ot(f,"VER",i.la),En(i,f),f}function Qo(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new dt(new sr({eb:u})):new dt(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}n=Yo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ur(){}ur.prototype.g=function(i,l){return new Ft(i,l)};function Ft(i,l){Rt.call(this),this.g=new Fo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Oe(this)}V(Ft,Rt),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Es(this.g)},Ft.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=as(i),i=u);l.i.push(new iu(l.Ya++,i)),l.G==3&&lr(l)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Es(this.g),delete this.g,Ft.aa.N.call(this)};function Xo(i){cs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}V(Xo,cs);function Jo(){us.call(this),this.status=1}V(Jo,us);function Oe(i){this.g=i}V(Oe,Yo),Oe.prototype.ua=function(){Mt(this.g,"a")},Oe.prototype.ta=function(i){Mt(this.g,new Xo(i))},Oe.prototype.sa=function(i){Mt(this.g,new Jo)},Oe.prototype.ra=function(){Mt(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,fl=function(){return new ur},dl=function(){return Xn()},hl=ve,Ks={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jn.NO_ERROR=0,Jn.TIMEOUT=8,Jn.HTTP_ERROR=6,yr=Jn,mo.COMPLETE="complete",ul=mo,lo.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",Rt.prototype.listen=Rt.prototype.K,In=lo,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,cl=dt}).apply(typeof dr<"u"?dr:typeof self<"u"?self:typeof window<"u"?window:{});const ua="@firebase/firestore";/**
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
 */class Nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
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
 */let en="10.14.0";/**
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
 */const Pe=new nl("@firebase/firestore");function vn(){return Pe.logLevel}function B(n,...t){if(Pe.logLevel<=J.DEBUG){const e=t.map(di);Pe.debug(`Firestore (${en}): ${n}`,...e)}}function ne(n,...t){if(Pe.logLevel<=J.ERROR){const e=t.map(di);Pe.error(`Firestore (${en}): ${n}`,...e)}}function He(n,...t){if(Pe.logLevel<=J.WARN){const e=t.map(di);Pe.warn(`Firestore (${en}): ${n}`,...e)}}function di(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const t=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: `+n;throw ne(t),new Error(t)}function et(n,t){n||z()}function K(n,t){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends tn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ml{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Nt.UNAUTHENTICATED))}shutdown(){}}class nd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){et(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new ml(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new Nt(t)}}class sd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class id{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new sd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class od{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ad{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){et(this.o===void 0);const r=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new od(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ld(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class pl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ld(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function tt(n,t){return n<t?-1:n>t?1:0}function Ke(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new q(0,0))}static max(){return new H(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kn{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(),r===void 0?r=t.length-e:r>t.length-e&&z(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class at extends kn{construct(t,e,r){return new at(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new at(e)}static emptyPath(){return new at([])}}const cd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends kn{construct(t,e,r){return new bt(t,e,r)}static isValidIdentifier(t){return cd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bt(e)}static emptyPath(){return new bt([])}}/**
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
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(at.fromString(t))}static fromName(t){return new U(at.fromString(t).popFirst(5))}static empty(){return new U(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&at.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return at.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new at(t.slice()))}}function ud(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new q(e+1,0):new q(e,r));return new me(s,U.empty(),t)}function hd(n){return new me(n.readTime,n.key,-1)}class me{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new me(H.min(),U.empty(),-1)}static max(){return new me(H.max(),U.empty(),-1)}}function dd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
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
 */const fd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class md{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Fn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==fd)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function pd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Un(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}fi.oe=-1;function Lr(n){return n==null}function br(n){return n===0&&1/n==-1/0}function gd(n){return typeof n=="number"&&Number.isInteger(n)&&!br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ha(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ne(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function gl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class lt{constructor(t,e){this.comparator=t,this.root=e||At.EMPTY}insert(t,e){return new lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,At.BLACK,null,null))}remove(t){return new lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,At.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fr(this.root,t,this.comparator,!1)}getReverseIterator(){return new fr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fr(this.root,t,this.comparator,!0)}}class fr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class At{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??At.RED,this.left=s??At.EMPTY,this.right=o??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new At(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return At.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,r,s,o){return this}insert(t,e,r){return new At(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(t){this.comparator=t,this.data=new lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new da(this.data.getIterator())}getIteratorFrom(t){return new da(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof St)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new St(this.comparator);return e.data=t,e}}class da{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(t){this.fields=t,t.sort(bt.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new St(bt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ke(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class yl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new yl("Invalid base64 string: "+o):o}}(t);return new Dt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const yd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(n){if(et(!!n),typeof n=="string"){let t=0;const e=yd.exec(n);if(et(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ce(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
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
 */function mi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function pi(n){const t=n.mapValue.fields.__previous_value__;return mi(t)?pi(t):t}function Nn(n){const t=pe(n.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
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
 */class _d{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class xn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const mr={mapValue:{}};function Ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mi(n)?4:vd(n)?9007199254740991:Ed(n)?10:11:z()}function Yt(n,t){if(n===t)return!0;const e=Ve(n);if(e!==Ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Nn(n).isEqual(Nn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=pe(s.timestampValue),c=pe(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ce(s.bytesValue).isEqual(Ce(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ft(s.geoPointValue.latitude)===ft(o.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ft(s.integerValue)===ft(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ft(s.doubleValue),c=ft(o.doubleValue);return a===c?br(a)===br(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Ke(n.arrayValue.values||[],t.arrayValue.values||[],Yt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ha(a)!==ha(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Yt(a[h],c[h])))return!1;return!0}(n,t);default:return z()}}function Mn(n,t){return(n.values||[]).find(e=>Yt(e,t))!==void 0}function We(n,t){if(n===t)return 0;const e=Ve(n),r=Ve(t);if(e!==r)return tt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=ft(o.integerValue||o.doubleValue),h=ft(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return fa(n.timestampValue,t.timestampValue);case 4:return fa(Nn(n),Nn(t));case 5:return tt(n.stringValue,t.stringValue);case 6:return function(o,a){const c=Ce(o),h=Ce(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=tt(c[d],h[d]);if(m!==0)return m}return tt(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=tt(ft(o.latitude),ft(a.latitude));return c!==0?c:tt(ft(o.longitude),ft(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ma(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const v=o.fields||{},w=a.fields||{},D=(c=v.value)===null||c===void 0?void 0:c.arrayValue,V=(h=w.value)===null||h===void 0?void 0:h.arrayValue,P=tt(((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return P!==0?P:ma(D,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===mr.mapValue&&a===mr.mapValue)return 0;if(o===mr.mapValue)return 1;if(a===mr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const w=tt(h[v],m[v]);if(w!==0)return w;const D=We(c[h[v]],d[m[v]]);if(D!==0)return D}return tt(h.length,m.length)}(n.mapValue,t.mapValue);default:throw z()}}function fa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=pe(n),r=pe(t),s=tt(e.seconds,r.seconds);return s!==0?s:tt(e.nanos,r.nanos)}function ma(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=We(e[s],r[s]);if(o)return o}return tt(e.length,r.length)}function Ge(n){return Ws(n)}function Ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=pe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ce(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return U.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ws(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ws(e.fields[a])}`;return s+"}"}(n.mapValue):z()}function pa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Gs(n){return!!n&&"integerValue"in n}function gi(n){return!!n&&"arrayValue"in n}function ga(n){return!!n&&"nullValue"in n}function ya(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _r(n){return!!n&&"mapValue"in n}function Ed(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ne(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Sn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function vd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!_r(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sn(e)}setAll(t){let e=bt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Sn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());_r(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Yt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];_r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ne(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ot(Sn(this.value))}}function _l(n){const t=[];return Ne(n.fields,(e,r)=>{const s=new bt([e]);if(_r(r)){const o=_l(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Ut(t)}/**
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
 */class xt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new xt(t,0,H.min(),H.min(),H.min(),Ot.empty(),0)}static newFoundDocument(t,e,r,s){return new xt(t,1,e,H.min(),r,s,0)}static newNoDocument(t,e){return new xt(t,2,e,H.min(),H.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,H.min(),H.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sr{constructor(t,e){this.position=t,this.inclusive=e}}function _a(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),e.key):r=We(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ea(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Yt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Bn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Td(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class El{}class Et extends El{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new wd(t,e,r):e==="array-contains"?new Sd(t,r):e==="in"?new Dd(t,r):e==="not-in"?new Rd(t,r):e==="array-contains-any"?new Pd(t,r):new Et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ad(t,r):new bd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(We(e,this.value)):e!==null&&Ve(this.value)===Ve(e)&&this.matchesComparison(We(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends El{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ht(t,e)}matches(t){return vl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function Tl(n){return Id(n)&&vl(n)}function Id(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Qs(n){if(n instanceof Et)return n.field.canonicalString()+n.op.toString()+Ge(n.value);if(Tl(n))return n.filters.map(t=>Qs(t)).join(",");{const t=n.filters.map(e=>Qs(e)).join(",");return`${n.op}(${t})`}}function Il(n,t){return n instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.field.isEqual(s.field)&&Yt(r.value,s.value)}(n,t):n instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Il(a,s.filters[c]),!0):!1}(n,t):void z()}function wl(n){return n instanceof Et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ge(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(wl).join(" ,")+"}"}(n):"Filter"}class wd extends Et{constructor(t,e,r){super(t,e,r),this.key=U.fromName(r.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ad extends Et{constructor(t,e){super(t,"in",e),this.keys=Al("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bd extends Et{constructor(t,e){super(t,"not-in",e),this.keys=Al("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Al(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>U.fromName(r.referenceValue))}class Sd extends Et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gi(e)&&Mn(e.arrayValue,this.value)}}class Dd extends Et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Mn(this.value.arrayValue,e)}}class Rd extends Et{constructor(t,e){super(t,"not-in",e)}matches(t){if(Mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Mn(this.value.arrayValue,e)}}class Pd extends Et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Mn(this.value.arrayValue,r))}}/**
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
 */class Cd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function va(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Cd(n,t,e,r,s,o,a)}function yi(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Qs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ge(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ge(r)).join(",")),t.ue=e}return t.ue}function _i(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Td(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Il(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ea(n.startAt,t.startAt)&&Ea(n.endAt,t.endAt)}function Ys(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class nn{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Vd(n,t,e,r,s,o,a,c){return new nn(n,t,e,r,s,o,a,c)}function Ei(n){return new nn(n)}function Ta(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bl(n){return n.collectionGroup!==null}function Dn(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new St(bt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Bn(o,r))}),e.has(bt.keyField().canonicalString())||t.ce.push(new Bn(bt.keyField(),r))}return t.ce}function Gt(n){const t=K(n);return t.le||(t.le=kd(t,Dn(n))),t.le}function kd(n,t){if(n.limitType==="F")return va(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Bn(s.field,o)});const e=n.endAt?new Sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Sr(n.startAt.position,n.startAt.inclusive):null;return va(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Xs(n,t){const e=n.filters.concat([t]);return new nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Dr(n,t,e){return new nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Or(n,t){return _i(Gt(n),Gt(t))&&n.limitType===t.limitType}function Sl(n){return`${yi(Gt(n))}|lt:${n.limitType}`}function Ue(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>wl(s)).join(", ")}]`),Lr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ge(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ge(s)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function Fr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=_a(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,Dn(r),s)||r.endAt&&!function(a,c,h){const d=_a(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,Dn(r),s))}(n,t)}function Nd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dl(n){return(t,e)=>{let r=!1;for(const s of Dn(n)){const o=xd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function xd(n,t,e){const r=n.field.isKeyField()?U.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?We(h,d):z()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class rn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ne(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return gl(this.inner)}size(){return this.innerSize}}/**
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
 */const Md=new lt(U.comparator);function re(){return Md}const Rl=new lt(U.comparator);function wn(...n){let t=Rl;for(const e of n)t=t.insert(e.key,e);return t}function Pl(n){let t=Rl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Se(){return Rn()}function Cl(){return Rn()}function Rn(){return new rn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Bd=new lt(U.comparator),Ld=new St(U.comparator);function Y(...n){let t=Ld;for(const e of n)t=t.add(e);return t}const Od=new St(tt);function Fd(){return Od}/**
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
 */function vi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:br(t)?"-0":t}}function Vl(n){return{integerValue:""+n}}function Ud(n,t){return gd(t)?Vl(t):vi(n,t)}/**
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
 */class Ur{constructor(){this._=void 0}}function $d(n,t,e){return n instanceof Rr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&mi(o)&&(o=pi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Ln?Nl(n,t):n instanceof On?xl(n,t):function(s,o){const a=kl(s,o),c=Ia(a)+Ia(s.Pe);return Gs(a)&&Gs(s.Pe)?Vl(c):vi(s.serializer,c)}(n,t)}function qd(n,t,e){return n instanceof Ln?Nl(n,t):n instanceof On?xl(n,t):e}function kl(n,t){return n instanceof Pr?function(r){return Gs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Rr extends Ur{}class Ln extends Ur{constructor(t){super(),this.elements=t}}function Nl(n,t){const e=Ml(t);for(const r of n.elements)e.some(s=>Yt(s,r))||e.push(r);return{arrayValue:{values:e}}}class On extends Ur{constructor(t){super(),this.elements=t}}function xl(n,t){let e=Ml(t);for(const r of n.elements)e=e.filter(s=>!Yt(s,r));return{arrayValue:{values:e}}}class Pr extends Ur{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ia(n){return ft(n.integerValue||n.doubleValue)}function Ml(n){return gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Ln&&s instanceof Ln||r instanceof On&&s instanceof On?Ke(r.elements,s.elements,Yt):r instanceof Pr&&s instanceof Pr?Yt(r.Pe,s.Pe):r instanceof Rr&&s instanceof Rr}(n.transform,t.transform)}class zd{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class $r{}function Bl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ti(n.key,jt.none()):new $n(n.key,n.data,jt.none());{const e=n.data,r=Ot.empty();let s=new St(bt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ye(n.key,r,new Ut(s.toArray()),jt.none())}}function Hd(n,t,e){n instanceof $n?function(s,o,a){const c=s.value.clone(),h=Aa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ye?function(s,o,a){if(!Er(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Aa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ll(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Pn(n,t,e,r){return n instanceof $n?function(o,a,c,h){if(!Er(o.precondition,a))return c;const d=o.value.clone(),m=ba(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ye?function(o,a,c,h){if(!Er(o.precondition,a))return c;const d=ba(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ll(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,c){return Er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Kd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=kl(r.transform,s||null);o!=null&&(e===null&&(e=Ot.empty()),e.set(r.field,o))}return e||null}function wa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ke(r,s,(o,a)=>jd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class $n extends $r{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ye extends $r{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ll(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Aa(n,t,e){const r=new Map;et(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,qd(a,c,e[s]))}return r}function ba(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,$d(o,a,t))}return r}class Ti extends $r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wd extends $r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Hd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Pn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Pn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Cl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Bl(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Y())}isEqual(t){return this.batchId===t.batchId&&Ke(this.mutations,t.mutations,(e,r)=>wa(e,r))&&Ke(this.baseMutations,t.baseMutations,(e,r)=>wa(e,r))}}class Ii{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){et(t.mutations.length===r.length);let s=function(){return Bd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ii(t,e,r,s)}}/**
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
 */class Qd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Yd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var gt,X;function Xd(n){switch(n){default:return z();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Ol(n){if(n===void 0)return ne("GRPC error has no .code"),R.UNKNOWN;switch(n){case gt.OK:return R.OK;case gt.CANCELLED:return R.CANCELLED;case gt.UNKNOWN:return R.UNKNOWN;case gt.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case gt.INTERNAL:return R.INTERNAL;case gt.UNAVAILABLE:return R.UNAVAILABLE;case gt.UNAUTHENTICATED:return R.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case gt.NOT_FOUND:return R.NOT_FOUND;case gt.ALREADY_EXISTS:return R.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return R.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case gt.ABORTED:return R.ABORTED;case gt.OUT_OF_RANGE:return R.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return R.UNIMPLEMENTED;case gt.DATA_LOSS:return R.DATA_LOSS;default:return z()}}(X=gt||(gt={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jd(){return new TextEncoder}/**
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
 */const Zd=new De([4294967295,4294967295],0);function Sa(n){const t=Jd().encode(n),e=new ll;return e.update(t),new Uint8Array(e.digest())}function Da(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new De([e,r],0),new De([s,o],0)]}class wi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new An(`Invalid padding: ${e}`);if(r<0)throw new An(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new An(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new An(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=De.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(De.fromNumber(r)));return s.compare(Zd)===1&&(s=new De([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Sa(t),[r,s]=Da(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new wi(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Sa(t),[r,s]=Da(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class An extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,qn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new qr(H.min(),s,new lt(tt),re(),Y())}}class qn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new qn(r,e,Y(),Y(),Y())}}/**
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
 */class vr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Fl{constructor(t,e){this.targetId=t,this.me=e}}class Ul{constructor(t,e,r=Dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ra{constructor(){this.fe=0,this.ge=Ca(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Y(),e=Y(),r=Y();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:z()}}),new qn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ca()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tf{constructor(t){this.Le=t,this.Be=new Map,this.ke=re(),this.qe=Pa(),this.Qe=new lt(tt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:z()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Ys(o))if(r===0){const a=new U(o.path);this.Ue(e,a,xt.newNoDocument(a,H.min()))}else et(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=Ce(r).toUint8Array()}catch(h){if(h instanceof yl)return He("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new wi(a,s,o)}catch(h){return He(h instanceof An?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Ys(c.target)){const h=new U(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,xt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=Y();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new qr(t,e,this.Qe,this.ke,r);return this.ke=re(),this.qe=Pa(),this.Qe=new lt(tt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ra,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new St(tt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||B("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ra),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Pa(){return new lt(U.comparator)}function Ca(){return new lt(U.comparator)}const ef={asc:"ASCENDING",desc:"DESCENDING"},nf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rf={and:"AND",or:"OR"};class sf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Js(n,t){return n.useProto3Json||Lr(t)?t:{value:t}}function Cr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $l(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function of(n,t){return Cr(n,t.toTimestamp())}function Qt(n){return et(!!n),H.fromTimestamp(function(e){const r=pe(e);return new q(r.seconds,r.nanos)}(n))}function Ai(n,t){return Zs(n,t).canonicalString()}function Zs(n,t){const e=function(s){return new at(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ql(n){const t=at.fromString(n);return et(Wl(t)),t}function ti(n,t){return Ai(n.databaseId,t.path)}function Ds(n,t){const e=ql(t);if(e.get(1)!==n.databaseId.projectId)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(zl(e))}function jl(n,t){return Ai(n.databaseId,t)}function af(n){const t=ql(n);return t.length===4?at.emptyPath():zl(t)}function ei(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zl(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Va(n,t,e){return{name:ti(n,t),fields:e.value.mapValue.fields}}function lf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(et(m===void 0||typeof m=="string"),Dt.fromBase64String(m||"")):(et(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Dt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?R.UNKNOWN:Ol(d.code);return new N(m,d.message||"")}(a);e=new Ul(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ds(n,r.document.name),o=Qt(r.document.updateTime),a=r.document.createTime?Qt(r.document.createTime):H.min(),c=new Ot({mapValue:{fields:r.document.fields}}),h=xt.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new vr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ds(n,r.document),o=r.readTime?Qt(r.readTime):H.min(),a=xt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new vr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ds(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,s,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Yd(s,o),c=r.targetId;e=new Fl(c,a)}}return e}function cf(n,t){let e;if(t instanceof $n)e={update:Va(n,t.key,t.value)};else if(t instanceof Ti)e={delete:ti(n,t.key)};else if(t instanceof ye)e={update:Va(n,t.key,t.data),updateMask:_f(t.fieldMask)};else{if(!(t instanceof Wd))return z();e={verify:ti(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ln)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof On)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:of(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z()}(n,t.precondition)),e}function uf(n,t){return n&&n.length>0?(et(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Qt(s.updateTime):Qt(o);return a.isEqual(H.min())&&(a=Qt(o)),new zd(a,s.transformResults||[])}(e,t))):[]}function hf(n,t){return{documents:[jl(n,t.path)]}}function df(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=jl(n,s);const o=function(d){if(d.length!==0)return Kl(Ht.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:$e(w.field),direction:pf(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Js(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function ff(n){let t=af(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){et(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(v){const w=Hl(v);return w instanceof Ht&&Tl(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(w=>function(V){return new Bn(qe(V.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(v){let w;return w=typeof v=="object"?v.value:v,Lr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(v){const w=!!v.before,D=v.values||[];return new Sr(D,w)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const w=!v.before,D=v.values||[];return new Sr(D,w)}(e.endAt)),Vd(t,s,a,o,c,"F",h,d)}function mf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=qe(e.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qe(e.unaryFilter.field);return Et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=qe(e.unaryFilter.field);return Et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qe(e.unaryFilter.field);return Et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(e){return Et.create(qe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>Hl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(n):z()}function pf(n){return ef[n]}function gf(n){return nf[n]}function yf(n){return rf[n]}function $e(n){return{fieldPath:n.canonicalString()}}function qe(n){return bt.fromServerFormat(n.fieldPath)}function Kl(n){return n instanceof Et?function(e){if(e.op==="=="){if(ya(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NAN"}};if(ga(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ya(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NOT_NAN"}};if(ga(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$e(e.field),op:gf(e.op),value:e.value}}}(n):n instanceof Ht?function(e){const r=e.getFilters().map(s=>Kl(s));return r.length===1?r[0]:{compositeFilter:{op:yf(e.op),filters:r}}}(n):z()}function _f(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ce{constructor(t,e,r,s,o=H.min(),a=H.min(),c=Dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Ef{constructor(t){this.ct=t}}function vf(n){const t=ff({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Dr(t,t.limit,"L"):t}/**
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
 */class Tf{constructor(){this.un=new If}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(me.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(me.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class If{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new St(at.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new St(at.comparator)).toArray()}}/**
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
 */class Qe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qe(0)}static kn(){return new Qe(-1)}}/**
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
 */class wf{constructor(){this.changes=new rn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Af{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class bf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Pn(r.mutation,s,Ut.empty(),q.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Y()){const s=Se();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=wn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Se();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Y()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=re();const a=Rn(),c=function(){return Rn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ye)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Pn(m.mutation,d,m.mutation.getFieldMask(),q.now())):a.set(d.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var v;return c.set(d,new Af(m,(v=a.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Rn();let s=new lt((a,c)=>a-c),o=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Ut.empty();m=c.applyToLocalView(d,m),r.set(h,m);const v=(s.get(c.batchId)||Y()).add(h);s=s.insert(c.batchId,v)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,v=Cl();m.forEach(w=>{if(!o.has(w)){const D=Bl(e.get(w),r.get(w));D!==null&&v.set(w,D),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(Se());let c=-1,h=o;return a.next(d=>C.forEach(d,(m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Y())).next(m=>({batchId:c,changes:Pl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(r=>{let s=wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=wn();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const d=function(v,w){return new nn(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((v,w)=>{a=a.insert(v,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,xt.newInvalidDocument(m)))});let c=wn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Pn(m.mutation,d,Ut.empty(),q.now()),Fr(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class Sf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:vf(s.bundledQuery),readTime:Qt(s.readTime)}}(e)),C.resolve()}}/**
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
 */class Df{constructor(){this.overlays=new lt(U.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Se();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=Se(),o=e.length+1,a=new U(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new lt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Se(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Se(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return C.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Qd(e,r));let o=this.Ir.get(e);o===void 0&&(o=Y(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Rf{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class bi{constructor(){this.Tr=new St(Tt.Er),this.dr=new St(Tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new Tt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new Tt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new U(new at([])),r=new Tt(e,t),s=new Tt(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new U(new at([])),r=new Tt(e,t),s=new Tt(e,t+1);let o=Y();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Tt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Tt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return U.comparator(t.key,e.key)||tt(t.wr,e.wr)}static Ar(t,e){return tt(t.wr,e.wr)||U.comparator(t.key,e.key)}}/**
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
 */class Pf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new St(Tt.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gd(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new Tt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Tt(e,0),s=new Tt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new St(tt);return e.forEach(s=>{const o=new Tt(s,0),a=new Tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new Tt(new U(o),0);let c=new St(tt);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),C.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){et(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,s=>{const o=new Tt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new Tt(e,0),s=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Cf{constructor(t){this.Mr=t,this.docs=function(){return new lt(U.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let r=re();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():xt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=re();const a=e.path,c=new U(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||dd(hd(m),r)<=0||(s.has(m.key)||Fr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){z()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Vf(this)}getSize(t){return C.resolve(this.size)}}class Vf extends wf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class kf{constructor(t){this.persistence=t,this.Nr=new rn(e=>yi(e),_i),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new bi,this.targetCount=0,this.kr=Qe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Qe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
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
 */class Nf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new fi(0),this.Kr=!1,this.Kr=!0,this.$r=new Rf,this.referenceDelegate=t(this),this.Ur=new kf(this),this.indexManager=new Tf,this.remoteDocumentCache=function(s){return new Cf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ef(e),this.Gr=new Sf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Df,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Pf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){B("MemoryPersistence","Starting transaction:",t);const s=new xf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class xf extends md{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.Jr=new bi,this.Yr=null}static Zr(t){return new Si(t)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=U.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=Y(),s=Y();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Di(t,e.fromCache,r,s)}}/**
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
 */class Mf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Bf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Lu()?8:pd(Mu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Mf;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(vn()<=J.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(vn()<=J.DEBUG&&B("QueryEngine","Query:",Ue(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(vn()<=J.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gt(e))):C.resolve())}Yi(t,e){if(Ta(e))return C.resolve(null);let r=Gt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Dr(e,null,"F"),r=Gt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Y(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Dr(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return Ta(e)||s.isEqual(H.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?C.resolve(null):(vn()<=J.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ue(e)),this.rs(t,a,e,ud(s,-1)).next(c=>c))})}ts(t,e){let r=new St(Dl(t));return e.forEach((s,o)=>{Fr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return vn()<=J.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ue(e)),this.Ji.getDocumentsMatchingQuery(t,e,me.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Lf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new lt(tt),this._s=new rn(o=>yi(o),_i),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Of(n,t,e,r){return new Lf(n,t,e,r)}async function Gl(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=Y();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Ff(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const v=d.batch,w=v.keys();let D=C.resolve();return w.forEach(V=>{D=D.next(()=>m.getEntry(h,V)).next(P=>{const b=d.docVersions.get(V);et(b!==null),P.version.compareTo(b)<0&&(v.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))})}),D.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=Y();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Ql(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Uf(n,t){const e=K(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,v)=>{const w=s.get(v);if(!w)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,v).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,v)));let D=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?D=D.withResumeToken(Dt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(m.resumeToken,r)),s=s.insert(v,D),function(P,b,L){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(w,D,m)&&c.push(e.Ur.updateTargetData(o,D))});let h=re(),d=Y();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push($f(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(H.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(v=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return C.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function $f(n,t,e){let r=Y(),s=Y();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=re();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(H.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function qf(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jf(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new ce(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ni(n,t,e){const r=K(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Un(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function ka(n,t,e){const r=K(n);let s=H.min(),o=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const v=K(h),w=v._s.get(m);return w!==void 0?C.resolve(v.os.get(w)):v.Ur.getTargetData(d,m)}(r,a,Gt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:H.min(),e?o:Y())).next(c=>(zf(r,Nd(t),c),{documents:c,Ts:o})))}function zf(n,t,e){let r=n.us.get(t)||H.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Na{constructor(){this.activeTargetIds=Fd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hf{constructor(){this.so=new Na,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Na,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Kf{_o(t){}shutdown(){}}/**
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
 */class xa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pr=null;function Rs(){return pr===null?pr=function(){return 268435456+Math.round(2147483648*Math.random())}():pr++,"0x"+pr.toString(16)}/**
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
 */const Wf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Gf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Vt="WebChannelConnection";class Qf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=Rs(),h=this.xo(e,r.toUriEncodedString());B("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(B("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw He("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+en}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Wf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Rs();return new Promise((a,c)=>{const h=new cl;h.setWithCredentials(!0),h.listenOnce(ul.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case yr.NO_ERROR:const m=h.getResponseJson();B(Vt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case yr.TIMEOUT:B(Vt,`RPC '${t}' ${o} timed out`),c(new N(R.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const v=h.getStatus();if(B(Vt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const D=w==null?void 0:w.error;if(D&&D.status&&D.message){const V=function(b){const L=b.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(L)>=0?L:R.UNKNOWN}(D.status);c(new N(V,D.message))}else c(new N(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(R.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{B(Vt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);B(Vt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=Rs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=fl(),c=dl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");B(Vt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const v=a.createWebChannel(m,h);let w=!1,D=!1;const V=new Gf({Io:b=>{D?B(Vt,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(w||(B(Vt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),w=!0),B(Vt,`RPC '${t}' stream ${s} sending:`,b),v.send(b))},To:()=>v.close()}),P=(b,L,O)=>{b.listen(L,M=>{try{O(M)}catch(G){setTimeout(()=>{throw G},0)}})};return P(v,In.EventType.OPEN,()=>{D||(B(Vt,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),P(v,In.EventType.CLOSE,()=>{D||(D=!0,B(Vt,`RPC '${t}' stream ${s} transport closed`),V.So())}),P(v,In.EventType.ERROR,b=>{D||(D=!0,He(Vt,`RPC '${t}' stream ${s} transport errored:`,b),V.So(new N(R.UNAVAILABLE,"The operation could not be completed")))}),P(v,In.EventType.MESSAGE,b=>{var L;if(!D){const O=b.data[0];et(!!O);const M=O,G=M.error||((L=M[0])===null||L===void 0?void 0:L.error);if(G){B(Vt,`RPC '${t}' stream ${s} received error:`,G);const j=G.status;let W=function(g){const _=gt[g];if(_!==void 0)return Ol(_)}(j),I=G.message;W===void 0&&(W=R.INTERNAL,I="Unknown error status: "+j+" with message "+G.message),D=!0,V.So(new N(W,I)),v.close()}else B(Vt,`RPC '${t}' stream ${s} received:`,O),V.bo(O)}}),P(c,hl.STAT_EVENT,b=>{b.stat===Ks.PROXY?B(Vt,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Ks.NOPROXY&&B(Vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Ps(){return typeof document<"u"?document:null}/**
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
 */function jr(n){return new sf(n,!0)}/**
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
 */class Yl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Xl{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new N(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return B("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yf extends Xl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=lf(this.serializer,t),r=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Qt(a.readTime):H.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=ei(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ys(h)?{documents:hf(o,h)}:{query:df(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$l(o,a.resumeToken);const d=Js(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Cr(o,a.snapshotVersion.toTimestamp());const d=Js(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=mf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=ei(this.serializer),e.removeTarget=t,this.a_(e)}}class Xf extends Xl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return et(!!t.streamToken),this.lastStreamToken=t.streamToken,et(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=uf(t.writeResults,t.commitTime),r=Qt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ei(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>cf(this.serializer,r))};this.a_(e)}}/**
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
 */class Jf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Zs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(R.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Zs(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Zf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ne(e),this.D_=!1):B("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class tm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{xe(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=K(h);d.L_.add(4),await jn(d),d.q_.set("Unknown"),d.L_.delete(4),await zr(d)}(this))})}),this.q_=new Zf(r,s)}}async function zr(n){if(xe(n))for(const t of n.B_)await t(!0)}async function jn(n){for(const t of n.B_)await t(!1)}function Jl(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Vi(e)?Ci(e):sn(e).r_()&&Pi(e,t))}function Ri(n,t){const e=K(n),r=sn(e);e.N_.delete(t),r.r_()&&Zl(e,t),e.N_.size===0&&(r.r_()?r.o_():xe(e)&&e.q_.set("Unknown"))}function Pi(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}sn(n).A_(t)}function Zl(n,t){n.Q_.xe(t),sn(n).R_(t)}function Ci(n){n.Q_=new tf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),sn(n).start(),n.q_.v_()}function Vi(n){return xe(n)&&!sn(n).n_()&&n.N_.size>0}function xe(n){return K(n).L_.size===0}function tc(n){n.Q_=void 0}async function em(n){n.q_.set("Online")}async function nm(n){n.N_.forEach((t,e)=>{Pi(n,t)})}async function rm(n,t){tc(n),Vi(n)?(n.q_.M_(t),Ci(n)):n.q_.set("Unknown")}async function sm(n,t,e){if(n.q_.set("Online"),t instanceof Ul&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Vr(n,r)}else if(t instanceof vr?n.Q_.Ke(t):t instanceof Fl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const r=await Ql(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(Dt.EMPTY_BYTE_STRING,m.snapshotVersion)),Zl(o,h);const v=new ce(m.target,h,d,m.sequenceNumber);Pi(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Vr(n,r)}}async function Vr(n,t,e){if(!Un(t))throw t;n.L_.add(1),await jn(n),n.q_.set("Offline"),e||(e=()=>Ql(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await zr(n)})}function ec(n,t){return t().catch(e=>Vr(n,e,t))}async function Hr(n){const t=K(n),e=ge(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;im(t);)try{const s=await qf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,om(t,s)}catch(s){await Vr(t,s)}nc(t)&&rc(t)}function im(n){return xe(n)&&n.O_.length<10}function om(n,t){n.O_.push(t);const e=ge(n);e.r_()&&e.V_&&e.m_(t.mutations)}function nc(n){return xe(n)&&!ge(n).n_()&&n.O_.length>0}function rc(n){ge(n).start()}async function am(n){ge(n).p_()}async function lm(n){const t=ge(n);for(const e of n.O_)t.m_(e.mutations)}async function cm(n,t,e){const r=n.O_.shift(),s=Ii.from(r,t,e);await ec(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Hr(n)}async function um(n,t){t&&ge(n).V_&&await async function(r,s){if(function(a){return Xd(a)&&a!==R.ABORTED}(s.code)){const o=r.O_.shift();ge(r).s_(),await ec(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Hr(r)}}(n,t),nc(n)&&rc(n)}async function Ma(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=xe(e);e.L_.add(3),await jn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await zr(e)}async function hm(n,t){const e=K(n);t?(e.L_.delete(2),await zr(e)):t||(e.L_.add(2),await jn(e),e.q_.set("Unknown"))}function sn(n){return n.K_||(n.K_=function(e,r,s){const o=K(e);return o.w_(),new Yf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:em.bind(null,n),Ro:nm.bind(null,n),mo:rm.bind(null,n),d_:sm.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Vi(n)?Ci(n):n.q_.set("Unknown")):(await n.K_.stop(),tc(n))})),n.K_}function ge(n){return n.U_||(n.U_=function(e,r,s){const o=K(e);return o.w_(),new Xf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:am.bind(null,n),mo:um.bind(null,n),f_:lm.bind(null,n),g_:cm.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Hr(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ki{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new ki(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ni(n,t){if(ne("AsyncQueue",`${t}: ${n}`),Un(n))return new N(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class ze{constructor(t){this.comparator=t?(e,r)=>t(e,r)||U.comparator(e.key,r.key):(e,r)=>U.comparator(e.key,r.key),this.keyedMap=wn(),this.sortedSet=new lt(this.comparator)}static emptySet(t){return new ze(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ze)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ze;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Ba{constructor(){this.W_=new lt(U.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):z():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ye{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Ye(t,e,ze.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class dm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class fm{constructor(){this.queries=La(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=K(e),o=s.queries;s.queries=La(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new N(R.ABORTED,"Firestore shutting down"))}}function La(){return new rn(n=>Sl(n),Or)}async function sc(n,t){const e=K(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new dm,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Ni(a,`Initialization of query '${Ue(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&xi(e)}async function ic(n,t){const e=K(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function mm(n,t){const e=K(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&xi(e)}function pm(n,t,e){const r=K(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function xi(n){n.Y_.forEach(t=>{t.next()})}var ri,Oa;(Oa=ri||(ri={})).ea="default",Oa.Cache="cache";class oc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ye(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ye.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ri.Cache}}/**
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
 */class ac{constructor(t){this.key=t}}class lc{constructor(t){this.key=t}}class gm{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=Dl(t),this.Ra=new ze(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Ba,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,v)=>{const w=s.get(m),D=Fr(this.query,v)?v:null,V=!!w&&this.mutatedKeys.has(w.key),P=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let b=!1;w&&D?w.data.isEqual(D.data)?V!==P&&(r.track({type:3,doc:D}),b=!0):this.ga(w,D)||(r.track({type:2,doc:D}),b=!0,(h&&this.Aa(D,h)>0||d&&this.Aa(D,d)<0)&&(c=!0)):!w&&D?(r.track({type:0,doc:D}),b=!0):w&&!D&&(r.track({type:1,doc:w}),b=!0,(h||d)&&(c=!0)),b&&(D?(a=a.add(D),o=P?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,v)=>function(D,V){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return P(D)-P(V)}(m.type,v.type)||this.Aa(m.doc,v.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Ye(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ba,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Y(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new lc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new ac(r))}),e}ba(t){this.Ta=t.Ts,this.da=Y();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ye.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ym{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class _m{constructor(t){this.key=t,this.va=!1}}class Em{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new rn(c=>Sl(c),Or),this.Ma=new Map,this.xa=new Set,this.Oa=new lt(U.comparator),this.Na=new Map,this.La=new bi,this.Ba={},this.ka=new Map,this.qa=Qe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vm(n,t,e=!0){const r=mc(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await cc(r,t,e,!0),s}async function Tm(n,t){const e=mc(n);await cc(e,t,!0,!1)}async function cc(n,t,e,r){const s=await jf(n.localStore,Gt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Im(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Jl(n.remoteStore,s),c}async function Im(n,t,e,r,s){n.Ka=(v,w,D)=>async function(P,b,L,O){let M=b.view.ma(L);M.ns&&(M=await ka(P.localStore,b.query,!1).then(({documents:I})=>b.view.ma(I,M)));const G=O&&O.targetChanges.get(b.targetId),j=O&&O.targetMismatches.get(b.targetId)!=null,W=b.view.applyChanges(M,P.isPrimaryClient,G,j);return Ua(P,b.targetId,W.wa),W.snapshot}(n,v,w,D);const o=await ka(n.localStore,t,!0),a=new gm(t,o.Ts),c=a.ma(o.documents),h=qn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Ua(n,e,d.wa);const m=new ym(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function wm(n,t,e){const r=K(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Or(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ni(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ri(r.remoteStore,s.targetId),si(r,s.targetId)}).catch(Fn)):(si(r,s.targetId),await ni(r.localStore,s.targetId,!0))}async function Am(n,t){const e=K(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ri(e.remoteStore,r.targetId))}async function bm(n,t,e){const r=km(n);try{const s=await function(a,c){const h=K(a),d=q.now(),m=c.reduce((D,V)=>D.add(V.key),Y());let v,w;return h.persistence.runTransaction("Locally write mutations","readwrite",D=>{let V=re(),P=Y();return h.cs.getEntries(D,m).next(b=>{V=b,V.forEach((L,O)=>{O.isValidDocument()||(P=P.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(D,V)).next(b=>{v=b;const L=[];for(const O of c){const M=Kd(O,v.get(O.key).overlayedDocument);M!=null&&L.push(new ye(O.key,M,_l(M.value.mapValue),jt.exists(!0)))}return h.mutationQueue.addMutationBatch(D,d,L,c)}).next(b=>{w=b;const L=b.applyToLocalDocumentSet(v,P);return h.documentOverlayCache.saveOverlays(D,b.batchId,L)})}).then(()=>({batchId:w.batchId,changes:Pl(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new lt(tt)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await zn(r,s.changes),await Hr(r.remoteStore)}catch(s){const o=Ni(s,"Failed to persist write");e.reject(o)}}async function uc(n,t){const e=K(n);try{const r=await Uf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?et(a.va):s.removedDocuments.size>0&&(et(a.va),a.va=!1))}),await zn(e,r,t)}catch(r){await Fn(r)}}function Fa(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=K(a);h.onlineState=c;let d=!1;h.queries.forEach((m,v)=>{for(const w of v.j_)w.Z_(c)&&(d=!0)}),d&&xi(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sm(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new lt(U.comparator);a=a.insert(o,xt.newNoDocument(o,H.min()));const c=Y().add(o),h=new qr(H.min(),new Map,new lt(tt),a,c);await uc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Mi(r)}else await ni(r.localStore,t,!1).then(()=>si(r,t,e)).catch(Fn)}async function Dm(n,t){const e=K(n),r=t.batch.batchId;try{const s=await Ff(e.localStore,t);dc(e,r,null),hc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zn(e,s)}catch(s){await Fn(s)}}async function Rm(n,t,e){const r=K(n);try{const s=await function(a,c){const h=K(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(v=>(et(v!==null),m=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);dc(r,t,e),hc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zn(r,s)}catch(s){await Fn(s)}}function hc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function dc(n,t,e){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function si(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||fc(n,r)})}function fc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Ri(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Mi(n))}function Ua(n,t,e){for(const r of e)r instanceof ac?(n.La.addReference(r.key,t),Pm(n,r)):r instanceof lc?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||fc(n,r.key)):z()}function Pm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+e),n.xa.add(r),Mi(n))}function Mi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new U(at.fromString(t)),r=n.qa.next();n.Na.set(r,new _m(e)),n.Oa=n.Oa.insert(e,r),Jl(n.remoteStore,new ce(Gt(Ei(e.path)),r,"TargetPurposeLimboResolution",fi.oe))}}async function zn(n,t,e){const r=K(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=Di.Wi(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=K(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(d,w=>C.forEach(w.$i,D=>m.persistence.referenceDelegate.addReference(v,w.targetId,D)).next(()=>C.forEach(w.Ui,D=>m.persistence.referenceDelegate.removeReference(v,w.targetId,D)))))}catch(v){if(!Un(v))throw v;B("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const w=v.targetId;if(!v.fromCache){const D=m.os.get(w),V=D.snapshotVersion,P=D.withLastLimboFreeSnapshotVersion(V);m.os=m.os.insert(w,P)}}}(r.localStore,o))}async function Cm(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){B("SyncEngine","User change. New user:",t.toKey());const r=await Gl(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new N(R.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(e,r.hs)}}function Vm(n,t){const e=K(n),r=e.Na.get(t);if(r&&r.va)return Y().add(r.key);{let s=Y();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function mc(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=uc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sm.bind(null,t),t.Ca.d_=mm.bind(null,t.eventManager),t.Ca.$a=pm.bind(null,t.eventManager),t}function km(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rm.bind(null,t),t}class kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=jr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Of(this.persistence,new Bf,t.initialUser,this.serializer)}Ga(t){return new Nf(Si.Zr,this.serializer)}Wa(t){return new Hf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kr.provider={build:()=>new kr};class ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cm.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fm}()}createDatastore(t){const e=jr(t.databaseInfo.databaseId),r=function(o){return new Qf(o)}(t.databaseInfo);return function(o,a,c,h){return new Jf(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new tm(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Fa(this.syncEngine,e,0),function(){return xa.D()?new xa:new Kf}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const v=new Em(s,o,a,c,h,d);return m&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=K(s);B("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await jn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ii.provider={build:()=>new ii};/**
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
 */class pc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Nm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=pl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ni(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Cs(n,t){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function $a(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xm(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ma(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ma(t.remoteStore,s)),n._onlineComponents=t}async function xm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;He("Error using user provided cache. Falling back to memory cache: "+e),await Cs(n,new kr)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Cs(n,new kr);return n._offlineComponents}async function gc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await $a(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await $a(n,new ii))),n._onlineComponents}function Mm(n){return gc(n).then(t=>t.syncEngine)}async function yc(n){const t=await gc(n),e=t.eventManager;return e.onListen=vm.bind(null,t.syncEngine),e.onUnlisten=wm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Tm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Am.bind(null,t.syncEngine),e}function Bm(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new pc({next:w=>{m.Za(),a.enqueueAndForget(()=>ic(o,v));const D=w.docs.has(c);!D&&w.fromCache?d.reject(new N(R.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&h&&h.source==="server"?d.reject(new N(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),v=new oc(Ei(c.path),m,{includeMetadataChanges:!0,_a:!0});return sc(o,v)}(await yc(n),n.asyncQueue,t,e,r)),r.promise}function Lm(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new pc({next:w=>{m.Za(),a.enqueueAndForget(()=>ic(o,v)),w.fromCache&&h.source==="server"?d.reject(new N(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),v=new oc(c,m,{includeMetadataChanges:!0,_a:!0});return sc(o,v)}(await yc(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function _c(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const qa=new Map;/**
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
 */function Ec(n,t,e){if(!e)throw new N(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Om(n,t,e,r){if(t===!0&&r===!0)throw new N(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ja(n){if(!U.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function za(n){if(U.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z()}function Kt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Kr(n);throw new N(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ha{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Om("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_c((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ha({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ha(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ed;switch(r.type){case"firstParty":return new id(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=qa.get(e);r&&(B("ComponentProvider","Removing Datastore"),qa.delete(e),r.terminate())}(this),Promise.resolve()}}function Fm(n,t,e,r={}){var s;const o=(n=Kt(n,Wr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&He("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Nt.MOCK_USER;else{c=xu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new N(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Nt(d)}n._authCredentials=new nd(new ml(c,h))}}/**
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
 */class _e{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _e(this.firestore,t,this._query)}}class Lt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new de(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lt(this.firestore,t,this._key)}}class de extends _e{constructor(t,e,r){super(t,e,Ei(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lt(this.firestore,null,new U(t))}withConverter(t){return new de(this.firestore,t,this._path)}}function mt(n,t,...e){if(n=te(n),Ec("collection","path",t),n instanceof Wr){const r=at.fromString(t,...e);return za(r),new de(n,null,r)}{if(!(n instanceof Lt||n instanceof de))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return za(r),new de(n.firestore,null,r)}}function on(n,t,...e){if(n=te(n),arguments.length===1&&(t=pl.newId()),Ec("doc","path",t),n instanceof Wr){const r=at.fromString(t,...e);return ja(r),new Lt(n,null,new U(r))}{if(!(n instanceof Lt||n instanceof de))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return ja(r),new Lt(n.firestore,n instanceof de?n.converter:null,new U(r))}}/**
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
 */class Ka{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yl(this,"async_queue_retry"),this.Vu=()=>{const r=Ps();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Un(t))throw t;B("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ne("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ki.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Me extends Wr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ka,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ka(t),this._firestoreClient=void 0,await t}}}function Um(n,t){const e=typeof n=="object"?n:jh(),r=typeof n=="string"?n:"(default)",s=Fh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ku("firestore");o&&Fm(s,...o)}return s}function Bi(n){if(n._terminated)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$m(n),n._firestoreClient}function $m(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new _d(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,_c(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Nm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xe(Dt.fromBase64String(t))}catch(e){throw new N(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Xe(Dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Gr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Li{constructor(t){this._methodName=t}}/**
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
 */class Oi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}}/**
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
 */class Fi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const qm=/^__.*__$/;class jm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ye(t,this.data,this.fieldMask,e,this.fieldTransforms):new $n(t,this.data,e,this.fieldTransforms)}}class vc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ye(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Ui{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ui(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Nr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Tc(this.Cu)&&qm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class zm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||jr(t)}Qu(t,e,r,s=!1){return new Ui({Cu:t,methodName:e,qu:r,path:bt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qr(n){const t=n._freezeSettings(),e=jr(n._databaseId);return new zm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ic(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);$i("Data must be an object, but it was:",a,r);const c=wc(r,a);let h,d;if(o.merge)h=new Ut(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const w=oi(t,v,e);if(!a.contains(w))throw new N(R.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);bc(m,w)||m.push(w)}h=new Ut(m),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new jm(new Ot(c),h,d)}class Yr extends Li{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yr}}function Hm(n,t,e,r){const s=n.Qu(1,t,e);$i("Data must be an object, but it was:",s,r);const o=[],a=Ot.empty();Ne(r,(h,d)=>{const m=qi(t,h,e);d=te(d);const v=s.Nu(m);if(d instanceof Yr)o.push(m);else{const w=Hn(d,v);w!=null&&(o.push(m),a.set(m,w))}});const c=new Ut(o);return new vc(a,c,s.fieldTransforms)}function Km(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[oi(t,r,e)],h=[s];if(o.length%2!=0)throw new N(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(oi(t,o[w])),h.push(o[w+1]);const d=[],m=Ot.empty();for(let w=c.length-1;w>=0;--w)if(!bc(d,c[w])){const D=c[w];let V=h[w];V=te(V);const P=a.Nu(D);if(V instanceof Yr)d.push(D);else{const b=Hn(V,P);b!=null&&(d.push(D),m.set(D,b))}}const v=new Ut(d);return new vc(m,v,a.fieldTransforms)}function Wm(n,t,e,r=!1){return Hn(e,n.Qu(r?4:3,t))}function Hn(n,t){if(Ac(n=te(n)))return $i("Unsupported field value:",t,n),wc(n,t);if(n instanceof Li)return function(r,s){if(!Tc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Hn(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ud(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=q.fromDate(r);return{timestampValue:Cr(s.serializer,o)}}if(r instanceof q){const o=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cr(s.serializer,o)}}if(r instanceof Oi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xe)return{bytesValue:$l(s.serializer,r._byteString)};if(r instanceof Lt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ai(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return vi(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Kr(r)}`)}(n,t)}function wc(n,t){const e={};return gl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ne(n,(r,s)=>{const o=Hn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ac(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof q||n instanceof Oi||n instanceof Xe||n instanceof Lt||n instanceof Li||n instanceof Fi)}function $i(n,t,e){if(!Ac(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Kr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function oi(n,t,e){if((t=te(t))instanceof Gr)return t._internalPath;if(typeof t=="string")return qi(n,t);throw Nr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Gm=new RegExp("[~\\*/\\[\\]]");function qi(n,t,e){if(t.search(Gm)>=0)throw Nr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Gr(...t.split("."))._internalPath}catch{throw Nr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Nr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(R.INVALID_ARGUMENT,c+n+h)}function bc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Sc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Xr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qm extends Sc{data(){return super.data()}}function Xr(n,t){return typeof t=="string"?qi(n,t):t instanceof Gr?t._internalPath:t._delegate._internalPath}/**
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
 */function Ym(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ji{}class zi extends ji{}function yt(n,t,...e){let r=[];t instanceof ji&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Hi).length,c=o.filter(h=>h instanceof Jr).length;if(a>1||a>0&&c>0)throw new N(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Jr extends zi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Jr(t,e,r)}_apply(t){const e=this._parse(t);return Dc(t._query,e),new _e(t.firestore,t.converter,Xs(t._query,e))}_parse(t){const e=Qr(t.firestore);return function(o,a,c,h,d,m,v){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ga(v,m);const D=[];for(const V of v)D.push(Wa(h,o,V));w={arrayValue:{values:D}}}else w=Wa(h,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ga(v,m),w=Wm(c,a,v,m==="in"||m==="not-in");return Et.create(d,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Q(n,t,e){const r=t,s=Xr("where",n);return Jr._create(s,r,e)}class Hi extends ji{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Hi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ht.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Dc(a,h),a=Xs(a,h)}(t._query,e),new _e(t.firestore,t.converter,Xs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ki extends zi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ki(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bn(o,a)}(t._query,this._field,this._direction);return new _e(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new nn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function _t(n,t="asc"){const e=t,r=Xr("orderBy",n);return Ki._create(r,e)}class Wi extends zi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Wi(t,e,r)}_apply(t){return new _e(t.firestore,t.converter,Dr(t._query,this._limit,this._limitType))}}function Kn(n){return Wi._create("limit",n,"F")}function Wa(n,t,e){if(typeof(e=te(e))=="string"){if(e==="")throw new N(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bl(t)&&e.indexOf("/")!==-1)throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(at.fromString(e));if(!U.isDocumentKey(r))throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pa(n,new U(r))}if(e instanceof Lt)return pa(n,e._key);throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kr(e)}.`)}function Ga(n,t){if(!Array.isArray(n)||n.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Dc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Xm{convertValue(t,e="none"){switch(Ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ce(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ne(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ft(a.doubleValue));return new Fi(o)}convertGeoPoint(t){return new Oi(ft(t.latitude),ft(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=pi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Nn(t));default:return null}}convertTimestamp(t){const e=pe(t);return new q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=at.fromString(t);et(Wl(r));const s=new xn(r.get(1),r.get(3)),o=new U(r.popFirst(5));return s.isEqual(e)||ne(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Rc(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class bn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pc extends Sc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Xr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Tr extends Pc{data(t={}){return super.data(t)}}class Jm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new bn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Tr(this._firestore,this._userDataWriter,r.key,r,new bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new Tr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Tr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Zm(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function Cc(n){n=Kt(n,Lt);const t=Kt(n.firestore,Me);return Bm(Bi(t),n._key).then(e=>sp(t,n,e))}class Vc extends Xm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lt(this.firestore,null,e)}}function vt(n){n=Kt(n,_e);const t=Kt(n.firestore,Me),e=Bi(t),r=new Vc(t);return Ym(n._query),Lm(e,n._query).then(s=>new Jm(t,r,n,s))}function tp(n,t,e){n=Kt(n,Lt);const r=Kt(n.firestore,Me),s=Rc(n.converter,t);return Zr(r,[Ic(Qr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,jt.none())])}function ep(n,t,e,...r){n=Kt(n,Lt);const s=Kt(n.firestore,Me),o=Qr(s);let a;return a=typeof(t=te(t))=="string"||t instanceof Gr?Km(o,"updateDoc",n._key,t,e,r):Hm(o,"updateDoc",n._key,t),Zr(s,[a.toMutation(n._key,jt.exists(!0))])}function np(n){return Zr(Kt(n.firestore,Me),[new Ti(n._key,jt.none())])}function rp(n,t){const e=Kt(n.firestore,Me),r=on(n),s=Rc(n.converter,t);return Zr(e,[Ic(Qr(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function Zr(n,t){return function(r,s){const o=new Zt;return r.asyncQueue.enqueueAndForget(async()=>bm(await Mm(r),s,o)),o.promise}(Bi(n),t)}function sp(n,t,e){const r=e.docs.get(t._key),s=new Vc(n);return new Pc(n,s,t._key,r,new bn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){en=s})(qh),Ar(new Cn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Me(new rd(r.getProvider("auth-internal")),new ad(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),je(ua,"4.7.3",t),je(ua,"4.7.3","esm2017")})();const ip="55555",ai="baby-tracker-auth",op=24*60*60*1e3,ap={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},lp=il(ap),it=Um(lp);function cp(){const n=localStorage.getItem(ai);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<op?!0:(localStorage.removeItem(ai),!1)}catch{return!1}}function up(){const n={timestamp:Date.now()};localStorage.setItem(ai,JSON.stringify(n))}let qt=Je(new Date),xr=null,Vs=null,ks=null,Ns=null,xs=null,Ms=null,Bs=null,Ls=null,Os=null,Ae=0;function Je(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return t.setDate(r),t.setHours(0,0,0,0),t}function hp(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function le(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function kt(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function li(n){const t=String(n.getMonth()+1).padStart(2,"0"),e=String(n.getDate()).padStart(2,"0"),r=n.getFullYear(),s=n.getHours(),o=String(n.getMinutes()).padStart(2,"0"),a=s>=12?"PM":"AM",c=s%12||12;return`${t}/${e}/${r} ${c}:${o} ${a}`}function ci(n){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=n.getFullYear();return`${t[n.getDay()]}, ${e}/${r}/${s}`}function Mr(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}async function Gi(){const n=document.getElementById("vitamin-d-checkbox"),t=document.getElementById("vitamin-d-status"),e=document.getElementById("vitamin-d-label-text");if(!n||!t||!e)return;const s=Mr(new Date);try{const o=await Cc(on(it,"vitaminD",s));if(o.exists()){const a=o.data();n.checked=a.given===!0}else n.checked=!1;e.textContent=n.checked?"Vitamin D drop given":"Record Vitamin D drop",t.textContent="",t.style.display="none"}catch(o){console.error("Error loading vitamin D status:",o),t.className="error",t.textContent="Failed to load vitamin D status",t.style.display="block"}}function kc(){Ls&&clearTimeout(Ls);const n=new Date,t=new Date(n);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const e=t.getTime()-n.getTime();Ls=window.setTimeout(()=>{Gi(),kc()},e)}async function dp(n){const t=n.target,e=document.getElementById("vitamin-d-status"),r=document.getElementById("vitamin-d-label-text");if(!e||!r)return;const s=new Date,o=Mr(s);try{await tp(on(it,"vitaminD",o),{given:t.checked,date:q.fromDate(s)}),r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop",e.style.display="none"}catch(a){console.error("Error saving vitamin D status:",a),e.className="error",e.textContent="Failed to save vitamin D status",e.style.display="block",t.checked=!t.checked,r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop"}}function Qa(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===ip?(n.blur(),up(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Nc()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function Nc(){gp(),Br(),fp(),Np(),mp(),pp(),Gi(),kc(),window.scrollTo(0,0)}function fp(){const n=new Date,t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter");t&&(t.value=kt(n)),e&&(e.value=kt(n))}function mp(){[document.getElementById("bottle-amount"),document.getElementById("pump-amount"),document.getElementById("edit-bottle-amount"),document.getElementById("edit-pump-amount")].forEach(t=>{t&&(t.addEventListener("keypress",e=>{const r=e.key,s=t.value;e.key==="Backspace"||e.key==="Delete"||e.key==="Tab"||e.key==="Escape"||e.key==="Enter"||e.ctrlKey||e.metaKey||r>="0"&&r<="9"||r==="."&&s.indexOf(".")===-1||e.preventDefault()}),t.addEventListener("paste",e=>{var c;e.preventDefault();const s=(((c=e.clipboardData)==null?void 0:c.getData("text"))||"").replace(/[^0-9.]/g,""),o=s.split("."),a=o.length>2?o[0]+"."+o.slice(1).join(""):s;document.execCommand("insertText",!1,a)}))})}function pp(){const n=document.getElementById("bottle-unit"),t=document.getElementById("bottle-amount"),e=document.getElementById("pump-unit"),r=document.getElementById("pump-amount"),s=document.getElementById("edit-bottle-unit"),o=document.getElementById("edit-bottle-amount"),a=document.getElementById("edit-pump-unit"),c=document.getElementById("edit-pump-amount");n&&t&&n.addEventListener("change",()=>{gr(t,n.value)}),e&&r&&e.addEventListener("change",()=>{gr(r,e.value)}),s&&o&&s.addEventListener("change",()=>{gr(o,s.value)}),a&&c&&a.addEventListener("change",()=>{gr(c,a.value)})}function gr(n,t){const e=parseFloat(n.value);if(isNaN(e)||e<=0)return;const r=n.dataset.lastUnit||"oz";if(r===t)return;let s;if(t==="ml"&&r==="oz")s=e*29.5735;else if(t==="oz"&&r==="ml")s=e*.033814;else return;n.value=s.toFixed(2),n.dataset.lastUnit=t}function Ya(n){if(!n.value)return!0;const t=new Date(n.value),e=new Date;return t>e?(alert("Cannot select future times. Please select a time in the past."),n.value=le(e),!1):!0}function ae(n){const t=document.getElementById(n);t&&(t.addEventListener("blur",()=>{Ya(t)}),t.addEventListener("change",()=>{Ya(t)}))}function Fs(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block",Gi()):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",ke(),Re()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",ke()),window.scrollTo(0,0)}function gp(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",_p);const e=document.getElementById("bottle-type");e&&e.addEventListener("change",Ep),Tp();const r=document.getElementById("edit-bottle-type");r&&r.addEventListener("change",vp),Ip(),t.addEventListener("click",wp);const s=document.getElementById("vitamin-d-checkbox");s&&s.addEventListener("change",dp);const o=document.getElementById("refresh-button");o&&o.addEventListener("click",()=>{window.location.reload()});const a=document.getElementById("entry-tab"),c=document.getElementById("timeline-tab"),h=document.getElementById("weekly-tab");a.addEventListener("click",()=>Fs("entry")),c.addEventListener("click",()=>Fs("timeline")),h.addEventListener("click",()=>Fs("weekly"));const d=document.getElementById("prev-week"),m=document.getElementById("next-week"),v=document.getElementById("current-week");d.addEventListener("click",()=>Xa(-1)),m.addEventListener("click",()=>Xa(1)),v&&v.addEventListener("click",Rp);const w=document.getElementById("save-edit"),D=document.getElementById("cancel-edit");w.addEventListener("click",Vp),D.addEventListener("click",xc);const V=document.getElementById("start-date-filter"),P=document.getElementById("end-date-filter"),b=document.getElementById("type-filter"),L=document.getElementById("today-button"),O=document.getElementById("yesterday-button"),M=document.getElementById("two-days-ago-button"),G=document.getElementById("three-days-ago-button"),j=document.getElementById("all-time-button");V.addEventListener("change",()=>Re()),P.addEventListener("change",()=>Re()),b.addEventListener("change",()=>Re()),L.addEventListener("click",()=>Tn("today")),O.addEventListener("click",()=>Tn("yesterday")),M.addEventListener("click",()=>Tn("two-days-ago")),G.addEventListener("click",()=>Tn("three-days-ago")),j.addEventListener("click",()=>Tn("all-time")),ae("bottle-time"),ae("diaper-time"),ae("pump-start-time"),ae("sleep-start-time"),ae("edit-bottle-time"),ae("edit-diaper-time"),ae("edit-pump-start-time"),ae("edit-sleep-start-time");const W=document.getElementById("graph-start-date"),I=document.getElementById("graph-end-date");if(W&&I){const g=new Date(2025,10,5);W.value=kt(g),I.value=kt(new Date)}const y=document.getElementById("update-graph-btn");y&&y.addEventListener("click",Dp)}function Br(){const t=le(new Date),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("pump-start-time"),o=document.getElementById("sleep-start-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t),o&&(o.value="")}async function yp(){const n=document.getElementById("submit-entry"),t=document.getElementById("submit-status");try{const e=yt(mt(it,"entries"),Q("type","==","Sleep"),_t("startTime","desc"),Kn(1)),r=await vt(e);if(!r.empty){const s=r.docs[0].data();if(!s.endTime){const o=s.startTime.toDate();n.style.display="none",t.className="error",t.textContent=`Sleep entry ongoing since ${li(o)}. End that entry before adding a new one.`,t.style.display="block"}}}catch(e){console.error("Error checking ongoing sleep:",e)}}function _p(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("pump-fields"),a=document.getElementById("sleep-fields"),c=document.getElementById("submit-entry"),h=document.getElementById("submit-status"),d=document.getElementById("bottle-type-container");if(r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none",d.style.display="none",h.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"){r.style.display="block",c.style.display="block";const m=document.getElementById("bottle-unit"),v=document.getElementById("bottle-amount");v.dataset.lastUnit=m.value,e==="bottle-formula"&&(d.style.display="block")}else if(e==="diaper")s.style.display="block",c.style.display="block";else if(e==="pump"){o.style.display="block",c.style.display="block";const m=document.getElementById("pump-unit"),v=document.getElementById("pump-amount");v.dataset.lastUnit=m.value}else e==="sleep"?(a.style.display="block",c.style.display="block",yp()):c.style.display="none";Br(),Br()}function Ep(n){const e=n.target.value,r=document.getElementById("bottle-notes"),s=document.getElementById("bottle-type-indicator"),o=document.getElementById("bottle-type-text");if(!r)return;const a=r.value,c=a.split(`
`),h=c.length>0&&(c[0]==="Bobbie"||c[0]==="Enfamil");e?(h?(c[0]=e,r.value=c.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function vp(n){const e=n.target.value,r=document.getElementById("edit-bottle-notes"),s=document.getElementById("edit-bottle-type-indicator"),o=document.getElementById("edit-bottle-type-text");if(!r)return;const a=r.value,c=a.split(`
`),h=c.length>0&&(c[0]==="Bobbie"||c[0]==="Enfamil");e?(h?(c[0]=e,r.value=c.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function Tp(){const n=document.getElementById("bottle-notes"),t=document.getElementById("bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}function Ip(){const n=document.getElementById("edit-bottle-notes"),t=document.getElementById("edit-bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}async function wp(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),c=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");if(n==="bottle-formula"&&!document.getElementById("bottle-type").value)throw new Error("Formula type is required");e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:d,amount:a,unit:c,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,c=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=new Date(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:c}}else if(n==="pump"){const s=document.getElementById("pump-start-time"),o=s.value,a=parseFloat(document.getElementById("pump-amount").value),c=document.getElementById("pump-unit").value,h=document.getElementById("pump-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");e={type:"Pump",startTime:d,amount:a,unit:c,notes:h}}else if(n==="sleep"){const s=document.getElementById("sleep-start-time"),o=document.getElementById("sleep-end-time"),a=document.getElementById("sleep-notes").value;if(!s.value)throw new Error("Start time is required");const c=new Date(s.value);if(c>r)throw new Error("Cannot add entries in the future");const h=yt(mt(it,"entries"),Q("type","==","Sleep"),_t("startTime","desc"),Kn(1)),d=await vt(h);if(!d.empty&&!d.docs[0].data().endTime)throw new Error("A sleep entry is already ongoing. End that entry before adding a new one.");let m;if(o.value){if(m=new Date(o.value),m>r)throw new Error("End time cannot be in the future");if(m<=c)throw new Error("End time must be after start time")}e={type:"Sleep",startTime:c,endTime:m,notes:a}}e&&(await rp(mt(it,"entries"),{...e,startTime:q.fromDate(e.startTime),endTime:e.endTime?q.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",Ap(),e.type==="Feed"?await Mc():e.type==="Diaper"?await Bc():e.type==="Pump"?await Lc():e.type==="Sleep"&&(await qc(),await zc()),ke(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function Ap(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-type").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("pump-amount").value="",document.getElementById("pump-notes").value="",document.getElementById("sleep-end-time").value="",document.getElementById("sleep-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("bottle-type-container").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("pump-fields").style.display="none",document.getElementById("sleep-fields").style.display="none",document.getElementById("submit-entry").style.display="none",Br()}function Tn(n){const t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter"),r=new Date;if(r.setHours(0,0,0,0),n==="all-time"){const s=new Date(2025,10,5);t.value=kt(s),e.value=kt(r)}else if(n==="today")t.value=kt(r),e.value=kt(r);else if(n==="yesterday"){const s=new Date(r);s.setDate(s.getDate()-1),t.value=kt(s),e.value=kt(s)}else if(n==="two-days-ago"){const s=new Date(r);s.setDate(s.getDate()-2),t.value=kt(s),e.value=kt(s)}else if(n==="three-days-ago"){const s=new Date(r);s.setDate(s.getDate()-3),t.value=kt(s),e.value=kt(s)}Re()}async function Re(){const n=document.getElementById("timeline-list"),t=document.getElementById("timeline-loading"),e=document.getElementById("start-date-filter").value,r=document.getElementById("end-date-filter").value,s=document.getElementById("type-filter").value;t.style.display="block",n.innerHTML="";const o=document.querySelector(".filter-summary");o&&o.remove();try{let a=yt(mt(it,"entries"),_t("startTime","desc"));if(e&&r){const[w,D,V]=e.split("-").map(Number),P=new Date(w,D-1,V,0,0,0,0),[b,L,O]=r.split("-").map(Number),M=new Date(b,L-1,O,23,59,59,999);a=yt(mt(it,"entries"),Q("startTime",">=",q.fromDate(P)),Q("startTime","<=",q.fromDate(M)),_t("startTime","desc"))}const c=await vt(a);let h=[];if(e){const[w,D,V]=e.split("-").map(Number),P=new Date(w,D-1,V-1,19,0,0,0),b=new Date(w,D-1,V,0,0,0,0),L=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(P)),Q("startTime","<",q.fromDate(b)),_t("startTime","desc"));try{(await vt(L)).forEach(M=>{h.push({id:M.id,data:M.data()})})}catch(O){console.error("Error fetching prior evening sleep:",O)}}const d=[],m=new Set;c.forEach(w=>{d.push({id:w.id,data:w.data()}),m.add(w.id)}),h.forEach(w=>{m.has(w.id)||(d.push(w),m.add(w.id))}),d.sort((w,D)=>D.data.startTime.toDate().getTime()-w.data.startTime.toDate().getTime());const v={bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleep:{totalMs:0,sessions:0}};if(d.length===0)n.innerHTML="<p>No entries found.</p>";else{let w="",D=!1;d.forEach(({id:P,data:b})=>{if(s!=="all"){let E="";if(b.type==="Feed"&&b.subType==="Breast Milk"?E="bottle-breast-milk":b.type==="Feed"&&b.subType==="Formula"?E="bottle-formula":b.type==="Diaper"?E="diaper-all":b.type==="Pump"?E="pump":b.type==="Sleep"&&(E="sleep"),s==="bottle-all"){if(b.type!=="Feed")return}else if(s==="diaper-all"){if(b.type!=="Diaper")return}else if(s==="diaper-pee"){if(b.type!=="Diaper"||b.diaperType!=="Pee"&&b.diaperType!=="Mixed")return}else if(s==="diaper-poo"){if(b.type!=="Diaper"||b.diaperType!=="Poo"&&b.diaperType!=="Mixed")return}else if(E!==s)return}if(b.type==="Feed"){const E=fe(b.amount,b.unit);v.bottles.total+=E,v.bottles.sessions++,b.subType==="Breast Milk"?v.bottles.breastMilk+=E:b.subType==="Formula"&&(v.bottles.formula+=E)}else if(b.type==="Diaper")v.diapers.total++,b.diaperType==="Pee"?v.diapers.pee++:b.diaperType==="Poo"?v.diapers.poo++:b.diaperType==="Mixed"&&v.diapers.mixed++;else if(b.type==="Pump"){const E=fe(b.amount,b.unit);v.pumps.total+=E,v.pumps.sessions++}else b.type==="Sleep"&&v.sleep.sessions++;D=!0;const L=b.startTime.toDate(),O=ci(L);if(O!==w){w=O;const E=document.createElement("div");E.className="timeline-date-header",E.textContent=O,n.appendChild(E)}const M=document.createElement("div");M.className="timeline-entry";let G=b.type,j="",W="";if(b.type==="Feed")G=`Bottle - ${b.subType}`,j=`<div class="timeline-entry-details">Amount: ${Wt(b.amount,b.unit)}</div>`,W="#d9ebf2";else if(b.type==="Breast Feed")G="Breast Feed",j="",W="#d9ebf2";else if(b.type==="Diaper")j=`<div class="timeline-entry-details">Type: ${b.diaperType}</div>`,W="#fce2d4";else if(b.type==="Pump")j=`<div class="timeline-entry-details">Amount: ${Wt(b.amount,b.unit)}</div>`,W="#e2daf2";else if(b.type==="Sleep")if(G="Sleep",W="#d4e8d4",b.endTime){const E=b.startTime.toDate(),T=b.endTime.toDate(),p=T.getTime()-E.getTime(),F=Math.floor(p/(1e3*60*60)),st=Math.floor(p%(1e3*60*60)/(1e3*60));j=`<div class="timeline-entry-details">Duration: ${F}h ${st}m</div>`,j+=`<div class="timeline-entry-details">End: ${li(T)}</div>`}else j='<div class="timeline-entry-details">In progress</div>';M.style.backgroundColor=W;const I=b.notes?`<div class="timeline-entry-notes">${b.notes.replace(/\n/g,"<br>")}</div>`:"";let y="";if(b.type==="Diaper"&&(b.diaperType==="Poo"||b.diaperType==="Mixed")){const E=L.getTime(),T=[];d.forEach(F=>{const st=F.data;st.type==="Diaper"&&(st.diaperType==="Poo"||st.diaperType==="Mixed")&&T.push({time:st.startTime.toDate().getTime()})}),T.sort((F,st)=>st.time-F.time);const p=T.findIndex(F=>F.time===E);if(p>=0&&p<T.length-1){const F=T[p+1].time;y=`<div class="timeline-entry-details" style="color: #666; font-style: italic;">${((E-F)/(1e3*60*60)).toFixed(1)} hours since previous poo</div>`}else p>=0&&p===T.length-1&&(M.dataset.needsPriorPoo="true",M.dataset.pooTime=String(E))}M.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${G}</span>
                        <span class="timeline-entry-time">${li(L)}</span>
                    </div>
                    ${j}
                    ${I}
                    ${y}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${P}">Edit</button>
                        <button class="delete-button" data-id="${P}">Delete</button>
                    </div>
                `;const g=M.querySelector(".edit-button"),_=M.querySelector(".delete-button");g.addEventListener("click",()=>Cp(P,b)),_.addEventListener("click",()=>kp(P)),n.appendChild(M)});const V=n.querySelectorAll('[data-needs-prior-poo="true"]');for(const P of Array.from(V)){const b=parseInt(P.dataset.pooTime||"0",10);if(b>0)try{const L=yt(mt(it,"entries"),Q("type","==","Diaper"),Q("startTime","<",q.fromDate(new Date(b))),_t("startTime","desc")),O=await vt(L);let M=null;if(O.forEach(G=>{if(M!==null)return;const j=G.data();(j.diaperType==="Poo"||j.diaperType==="Mixed")&&(M=j.startTime.toDate().getTime())}),M!==null){const G=(b-M)/36e5,j=document.createElement("div");j.className="timeline-entry-details",j.style.color="#666",j.style.fontStyle="italic",j.textContent=`${G.toFixed(1)} hours since previous poo`;const W=P.querySelector(".timeline-entry-actions");W?P.insertBefore(j,W):P.appendChild(j)}}catch(L){console.error("Error fetching prior poo entry:",L)}P.removeAttribute("data-needs-prior-poo"),P.removeAttribute("data-poo-time")}if(!D)n.innerHTML="<p>No entries match the selected filters.</p>";else{const P=document.createElement("div");P.className="filter-summary";let b='<div class="summary-header">Summary</div><div class="summary-stats">';if((s==="all"||s==="bottle-breast-milk"||s==="bottle-formula"||s==="bottle-all")&&(b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Bottles</div>
                            <div class="stat-line">Number of feeds: ${v.bottles.sessions}</div>
                            <div class="stat-line">Breast Milk: ${Wt(v.bottles.breastMilk,"oz")}</div>
                            <div class="stat-line">Formula: ${Wt(v.bottles.formula,"oz")}</div>
                            <div class="stat-line">Total volume: ${Wt(v.bottles.total,"oz")}</div>
                        </div>
                    `),s==="all"||s==="diaper-all"||s==="diaper-pee"||s==="diaper-poo"){const O=v.diapers.pee+v.diapers.mixed,M=v.diapers.poo+v.diapers.mixed;b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${O}</div>
                            <div class="stat-line">Poo: ${M}</div>
                        </div>
                    `}if((s==="all"||s==="pump")&&(b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Pumps</div>
                            <div class="stat-line">Total volume: ${Wt(v.pumps.total,"oz")}</div>
                            <div class="stat-line">Number of sessions: ${v.pumps.sessions}</div>
                        </div>
                    `),s==="all"||s==="sleep"){let O=0;if(e&&r){const j=[];d.forEach(ut=>{const It=ut.data;It.type==="Sleep"&&j.push({startTime:It.startTime.toDate(),endTime:It.endTime?It.endTime.toDate():null})});const[W,I,y]=e.split("-").map(Number),g=new Date(W,I-1,y);g.setDate(g.getDate()-1);const _=new Date(g);_.setHours(0,0,0,0);const E=new Date(g);E.setHours(23,59,59,999);try{const ut=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(_)),Q("startTime","<=",q.fromDate(E)),_t("startTime","asc"));(await vt(ut)).forEach(ht=>{const $t=ht.data();j.push({startTime:$t.startTime.toDate(),endTime:$t.endTime?$t.endTime.toDate():null})})}catch(ut){console.error("Error fetching prior sleep entries:",ut)}const[T,p,F]=r.split("-").map(Number),st=new Date(T,p-1,F);st.setDate(st.getDate()+1);const $=new Date(st);$.setHours(0,0,0,0);const x=new Date(st);x.setHours(23,59,59,999);try{const ut=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate($)),Q("startTime","<=",q.fromDate(x)),_t("startTime","asc"));(await vt(ut)).forEach(ht=>{const $t=ht.data();j.push({startTime:$t.startTime.toDate(),endTime:$t.endTime?$t.endTime.toDate():null})})}catch(ut){console.error("Error fetching post sleep entries:",ut)}const ct=new Date(W,I-1,y),pt=new Date(T,p-1,F),nt=new Date(ct);for(;nt<=pt;){const ut=Yi(nt);O+=Qi(j,ut.start,ut.end),nt.setDate(nt.getDate()+1)}}const M=Math.floor(O/(1e3*60*60)),G=Math.floor(O%(1e3*60*60)/(1e3*60));b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Sleep</div>
                            <div class="stat-line">Total sleep: ${M}h ${G}m</div>
                            <div class="stat-line">Number of sleeps: ${v.sleep.sessions}</div>
                            <div class="stat-line" style="font-size: 11px; color: #888;">prev day 7pm - next day 7am</div>
                        </div>
                    `}b+="</div>",P.innerHTML=b;const L=document.querySelector(".filter-section");L&&L.parentNode&&L.parentNode.insertBefore(P,n)}}}catch{n.innerHTML='<p class="error">Failed to load timeline</p>'}finally{t.style.display="none"}}function Qi(n,t,e){let r=0;for(const s of n){if(!s.endTime)continue;const o=Math.max(s.startTime.getTime(),t.getTime()),a=Math.min(s.endTime.getTime(),e.getTime());a>o&&(r+=a-o)}return r}function Yi(n){const t=new Date(n);t.setHours(0,0,0,0);const e=new Date(t);e.setDate(e.getDate()-1),e.setHours(19,0,0,0);const r=new Date(t);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),{start:e,end:r}}function bp(n){const t=Math.floor(n/36e5),e=Math.floor(n%(1e3*60*60)/(1e3*60));return`${t}h ${e}m`}async function ke(){const n=++Ae,t=document.getElementById("weekly-stats"),e=document.getElementById("weekly-loading"),r=document.getElementById("week-range"),s=document.getElementById("prev-week"),o=document.getElementById("next-week"),a=document.getElementById("current-week"),c=new Date(2025,10,5),h=Je(c),m=Je(new Date),v=new Date(qt);v.setHours(0,0,0,0),v<h&&(qt=new Date(h)),v.getTime()<=h.getTime()?s.disabled=!0:s.disabled=!1,v.getTime()>=m.getTime()?o.disabled=!0:o.disabled=!1,a&&(v.getTime()===m.getTime()?(a.disabled=!0,a.style.backgroundColor="#999",a.style.color="#ccc",a.style.cursor="default"):(a.disabled=!1,a.style.backgroundColor="",a.style.color="",a.style.cursor="pointer"));const w=hp(qt);r.textContent=`${ci(qt).split(",")[1].trim()} - ${ci(w).split(",")[1].trim()}`,e.style.display="block",t.innerHTML="";try{const D=yt(mt(it,"entries"),Q("startTime",">=",q.fromDate(qt)),Q("startTime","<=",q.fromDate(w)),_t("startTime","asc")),V=await vt(D);if(n!==Ae)return;const P=new Date("2025-11-11");P.setHours(0,0,0,0);const b={},L=[];for(let $=0;$<7;$++){const x=new Date(qt);if(x.setDate(x.getDate()+$),x.setHours(0,0,0,0),x>=P){const ct=Mr(x);L.push(ct)}}if(L.length>0){const $=await Promise.all(L.map(x=>Cc(on(it,"vitaminD",x))));L.forEach((x,ct)=>{var nt;const pt=$[ct];b[x]=pt.exists()&&((nt=pt.data())==null?void 0:nt.given)===!0})}if(n!==Ae)return;const O=[];V.forEach($=>{const x=$.data();x.type==="Sleep"&&O.push({startTime:x.startTime.toDate(),endTime:x.endTime?x.endTime.toDate():null})});const M=new Date(qt);M.setDate(M.getDate()-1),M.setHours(0,0,0,0);const G=new Date(qt);G.setHours(0,0,0,0);const j=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(M)),Q("startTime","<",q.fromDate(G)),_t("startTime","asc")),W=await vt(j);if(n!==Ae)return;W.forEach($=>{const x=$.data();O.push({startTime:x.startTime.toDate(),endTime:x.endTime?x.endTime.toDate():null})});const I=new Date(w);I.setDate(I.getDate()+1),I.setHours(0,0,0,0);const y=new Date(I);y.setDate(y.getDate()+1),y.setHours(0,0,0,0);const g=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(I)),Q("startTime","<",q.fromDate(y)),_t("startTime","asc")),_=await vt(g);if(n!==Ae)return;_.forEach($=>{const x=$.data();O.push({startTime:x.startTime.toDate(),endTime:x.endTime?x.endTime.toDate():null})});const E={};for(let $=0;$<7;$++){const x=new Date(qt);x.setDate(x.getDate()+$),x.setHours(0,0,0,0);const ct=`${x.getFullYear()}-${x.getMonth()}-${x.getDate()}`,pt=Mr(x),nt=Yi(x);E[ct]={date:new Date(x),vitaminD:x>=P?b[pt]===!0:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleepMs:Qi(O,nt.start,nt.end)}}V.forEach($=>{const x=$.data(),ct=x.startTime.toDate(),pt=new Date(ct);pt.setHours(0,0,0,0);const nt=`${pt.getFullYear()}-${pt.getMonth()}-${pt.getDate()}`;if(E[nt]){if(x.type==="Feed"){const ut=fe(x.amount,x.unit);E[nt].bottles.total+=ut,E[nt].bottles.sessions++,x.subType==="Breast Milk"?E[nt].bottles.breastMilk+=ut:x.subType==="Formula"&&(E[nt].bottles.formula+=ut)}else if(x.type==="Breast Feed")E[nt].bottles.sessions++;else if(x.type==="Diaper")E[nt].diapers.total++,x.diaperType==="Pee"?E[nt].diapers.pee++:x.diaperType==="Poo"?E[nt].diapers.poo++:x.diaperType==="Mixed"&&E[nt].diapers.mixed++;else if(x.type==="Pump"){const ut=fe(x.amount,x.unit);E[nt].pumps.total+=ut,E[nt].pumps.sessions++}}});const T=Object.keys(E).map($=>E[$]).sort(($,x)=>$.date.getTime()-x.date.getTime()),p=document.createElement("div");p.className="weekly-scroll-container";const F=new Date;F.setHours(0,0,0,0);let st=-1;T.forEach(($,x)=>{const ct=document.createElement("div");ct.className="day-stats";const pt=new Date($.date);pt.setHours(0,0,0,0),F.getTime()===pt.getTime()&&(ct.classList.add("current-day"),st=x);const nt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][$.date.getDay()],ut=`${$.date.getMonth()+1}/${$.date.getDate()}`,It=$.diapers.pee+$.diapers.mixed,ht=$.diapers.poo+$.diapers.mixed;let $t="";if($.vitaminD!==null){const Ee=$.vitaminD?"Yes":"No";$t=`
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${$.vitaminD?"#4caf50":"#f44336"}; font-weight: bold;">${Ee}</div>
                    </div>
                `}ct.innerHTML=`
                <div class="day-stats-header">${nt}<br>${ut}</div>
                ${$t}
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${$.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${Wt($.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line">Formula: ${Wt($.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total volume: ${Wt($.bottles.total,"oz")}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${It}</div>
                    <div class="stat-line">Poo: ${ht}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${Wt($.pumps.total,"oz")}</div>
                    <div class="stat-line">Number of sessions: ${$.pumps.sessions}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${bp($.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][($.date.getDay()+6)%7]} 7pm - ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][($.date.getDay()+1)%7]} 7am</div>
                </div>
            `,p.appendChild(ct)}),t.appendChild(p),st!==-1&&setTimeout(()=>{const $=p.children[st];if($){const x=p.offsetWidth,ct=$.offsetWidth,pt=$.offsetLeft-x/2+ct/2;p.scrollTo({left:Math.max(0,pt),behavior:"smooth"})}},100)}catch{n===Ae&&(t.innerHTML='<p class="error">Failed to load weekly view</p>')}finally{n===Ae&&(e.style.display="none",await Sp())}}async function Sp(){var D,V,P,b,L,O;const n=document.getElementById("json-content"),t=document.getElementById("toggle-json"),e=document.getElementById("copy-json"),r=document.querySelector(".json-tabs"),s=document.getElementById("feeds-json-tab"),o=document.getElementById("diapers-json-tab"),a=document.getElementById("pumps-json-tab"),c=document.getElementById("sleep-json-tab");if(!n||!t||!e)return;let h="feeds",d=[],m=[],v=[],w=[];try{const M=yt(mt(it,"entries"),_t("startTime","desc"));(await vt(M)).docs.forEach(p=>{const F=p.data();F.type==="Feed"?d.push({type:F.type,subType:F.subType,startTime:F.startTime.toDate().toISOString(),amount:F.amount,unit:F.unit,notes:F.notes||""}):F.type==="Diaper"?m.push({type:F.type,startTime:F.startTime.toDate().toISOString(),diaperType:F.diaperType,notes:F.notes||""}):F.type==="Pump"?v.push({type:F.type,startTime:F.startTime.toDate().toISOString(),amount:F.amount,unit:F.unit,notes:F.notes||""}):F.type==="Sleep"&&w.push({type:F.type,startTime:F.startTime.toDate().toISOString(),endTime:F.endTime?F.endTime.toDate().toISOString():null,notes:F.notes||""})});const j=()=>{let p;h==="feeds"?p=d:h==="diapers"?p=m:h==="sleep"?p=w:p=v;const F=JSON.stringify(p,null,2);return n.textContent=F,F};let W=j();const I=t.cloneNode(!0),y=e.cloneNode(!0),g=s==null?void 0:s.cloneNode(!0),_=o==null?void 0:o.cloneNode(!0),E=a==null?void 0:a.cloneNode(!0),T=c==null?void 0:c.cloneNode(!0);(D=t.parentNode)==null||D.replaceChild(I,t),(V=e.parentNode)==null||V.replaceChild(y,e),s&&g&&((P=s.parentNode)==null||P.replaceChild(g,s)),o&&_&&((b=o.parentNode)==null||b.replaceChild(_,o)),a&&E&&((L=a.parentNode)==null||L.replaceChild(E,a)),c&&T&&((O=c.parentNode)==null||O.replaceChild(T,c)),I.addEventListener("click",()=>{const p=n.style.display==="none";n.style.display=p?"block":"none",y.style.display=p?"block":"none",r&&(r.style.display=p?"flex":"none"),I.textContent=p?"Hide JSON Data":"Show JSON Data"}),y.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(W);const p=y.textContent;y.textContent="✓",setTimeout(()=>{y.textContent=p},2e3)}catch{alert("Failed to copy to clipboard")}}),g&&g.addEventListener("click",()=>{h="feeds",g.classList.add("active"),_.classList.remove("active"),E.classList.remove("active"),T.classList.remove("active"),W=j()}),_&&_.addEventListener("click",()=>{h="diapers",_.classList.add("active"),g.classList.remove("active"),E.classList.remove("active"),T.classList.remove("active"),W=j()}),E&&E.addEventListener("click",()=>{h="pumps",E.classList.add("active"),g.classList.remove("active"),_.classList.remove("active"),T.classList.remove("active"),W=j()}),T&&T.addEventListener("click",()=>{h="sleep",T.classList.add("active"),g.classList.remove("active"),_.classList.remove("active"),E.classList.remove("active"),W=j()})}catch{n.textContent="Failed to load data"}}async function Dp(){const n=document.getElementById("graph-start-date").value,t=document.getElementById("graph-end-date").value;if(!n||!t){alert("Please select both start and end dates");return}const e=[];if(document.querySelectorAll(".graph-checkbox:checked").forEach(g=>{e.push(g.dataset.series)}),e.length===0){alert("Please select at least one data series to plot");return}const r=new Date(n);r.setHours(0,0,0,0);const s=new Date(t);s.setHours(23,59,59,999);const o=yt(mt(it,"entries"),Q("startTime",">=",q.fromDate(r)),Q("startTime","<=",q.fromDate(s)),_t("startTime","asc")),a=await vt(o),c=new Date(r);c.setDate(c.getDate()-1),c.setHours(0,0,0,0);const h=new Date(r);h.setHours(0,0,0,0);const d=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(c)),Q("startTime","<",q.fromDate(h)),_t("startTime","asc")),m=await vt(d),v=new Date(s);v.setDate(v.getDate()+1),v.setHours(0,0,0,0);const w=new Date(v);w.setDate(w.getDate()+1),w.setHours(0,0,0,0);const D=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(v)),Q("startTime","<",q.fromDate(w)),_t("startTime","asc")),V=await vt(D),P={},b=new Date(r);for(;b<=s;){const g=kt(b);P[g]={"bottle-breast-milk":0,"bottle-formula":0,"bottle-all":0,"diaper-pee":0,"diaper-poo":0,"diaper-mixed":0,"diaper-all":0,pump:0,sleep:0},b.setDate(b.getDate()+1)}const L=[];if(a.forEach(g=>{const _=g.data(),E=_.startTime.toDate(),T=kt(E);if(P[T]){if(_.type==="Feed"&&_.subType==="Breast Milk"){const p=fe(_.amount,_.unit);P[T]["bottle-breast-milk"]+=p,P[T]["bottle-all"]+=p}else if(_.type==="Feed"&&_.subType==="Formula"){const p=fe(_.amount,_.unit);P[T]["bottle-formula"]+=p,P[T]["bottle-all"]+=p}else if(_.type==="Diaper")(_.diaperType==="Pee"||_.diaperType==="Mixed")&&P[T]["diaper-pee"]++,(_.diaperType==="Poo"||_.diaperType==="Mixed")&&P[T]["diaper-poo"]++,_.diaperType==="Mixed"&&P[T]["diaper-mixed"]++,P[T]["diaper-all"]++;else if(_.type==="Pump"){const p=fe(_.amount,_.unit);P[T].pump+=p}}_.type==="Sleep"&&L.push({startTime:_.startTime.toDate(),endTime:_.endTime?_.endTime.toDate():null})}),m.forEach(g=>{const _=g.data();L.push({startTime:_.startTime.toDate(),endTime:_.endTime?_.endTime.toDate():null})}),V.forEach(g=>{const _=g.data();L.push({startTime:_.startTime.toDate(),endTime:_.endTime?_.endTime.toDate():null})}),e.includes("sleep"))for(const g of Object.keys(P)){const[_,E,T]=g.split("-").map(Number),p=new Date(_,E-1,T),F=Yi(p),st=Qi(L,F.start,F.end);P[g].sleep=parseFloat((st/(1e3*60*60)).toFixed(1))}const O=Object.keys(P).sort(),M=[],G={"bottle-breast-milk":"#4CAF50","bottle-formula":"#2196F3","bottle-all":"#9C27B0","diaper-pee":"#FFEB3B","diaper-poo":"#795548","diaper-mixed":"#FF9800","diaper-all":"#607D8B",pump:"#E91E63",sleep:"#00897B"},j={"bottle-breast-milk":"Bottle - Breast Milk","bottle-formula":"Bottle - Formula","bottle-all":"Bottle - All","diaper-pee":"Diaper - Pee","diaper-poo":"Diaper - Poo","diaper-mixed":"Diaper - Mixed","diaper-all":"Diaper - All",pump:"Pump",sleep:"Sleep (hrs, 7pm-7am)"};e.forEach(g=>{M.push({label:j[g],data:O.map(_=>P[_][g]),borderColor:G[g],backgroundColor:G[g]+"33",tension:.1,fill:!1})});const I=document.getElementById("data-chart").getContext("2d");Os&&Os.destroy(),Os=new window.Chart(I,{type:"line",data:{labels:O.map(g=>{const[,_,E]=g.split("-");return`${_}/${E}`}),datasets:M},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:"Baby Tracker Data"},tooltip:{enabled:!0,callbacks:{label:function(g){let _=g.dataset.label||"";_&&(_+=": ");const E=g.parsed.y,T=g.dataset.label.toLowerCase();return T.includes("diaper")?_+=Math.round(E):T.includes("sleep")?_+=E.toFixed(1)+" hrs":_+=E.toFixed(1)+" oz",_}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(g){return e.every(E=>E.startsWith("diaper-"))?Math.round(g):g%1===0?g:g.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count / Hours"}}}}});const y=document.querySelector(".chart-container");y&&y.classList.add("active")}function Xa(n){const t=new Date(2025,10,5),e=Je(t),s=Je(new Date),o=new Date(qt);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const c=new Date(s);c.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>c.getTime()||(qt=o,ke()))}function Rp(){qt=Je(new Date),ke()}function fe(n,t){return t==="ml"?n*.033814:n}function Pp(n,t){return t==="oz"?n*29.5735:n}function Wt(n,t){const e=fe(n,t),r=Pp(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function Cp(n,t){xr=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields"),a=document.getElementById("edit-sleep-fields");r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none";const c=t.startTime.toDate();if(t.type==="Feed"){r.style.display="block";const h=document.getElementById("edit-bottle-unit"),d=document.getElementById("edit-bottle-amount"),m=document.getElementById("edit-bottle-type-container"),v=document.getElementById("edit-bottle-type");document.getElementById("edit-bottle-time").value=le(c),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";const w=document.getElementById("edit-bottle-type-indicator"),D=document.getElementById("edit-bottle-type-text");if(t.subType==="Formula"){m.style.display="block";const P=(t.notes||"").split(`
`)[0];P==="Bobbie"||P==="Enfamil"?(v.value=P,w&&D&&(D.textContent=P,w.style.display="block")):(v.value="",w&&(w.style.display="none"))}else m.style.display="none",v.value="",w&&(w.style.display="none")}else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=le(c),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const h=document.getElementById("edit-pump-unit"),d=document.getElementById("edit-pump-amount");document.getElementById("edit-pump-start-time").value=le(c),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}else t.type==="Sleep"&&(a.style.display="block",document.getElementById("edit-sleep-start-time").value=le(c),t.endTime?document.getElementById("edit-sleep-end-time").value=le(t.endTime.toDate()):document.getElementById("edit-sleep-end-time").value=le(new Date),document.getElementById("edit-sleep-notes").value=t.notes||"");e.style.display="block"}function xc(){const n=document.getElementById("edit-modal");n.style.display="none",xr=null;const t=document.getElementById("edit-status");t.style.display="none"}async function Vp(){if(!xr)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields"),s=document.getElementById("edit-sleep-fields");let o={};const a=new Date;if(t.style.display==="block"){const c=document.getElementById("edit-bottle-time"),h=c.value,d=parseFloat(document.getElementById("edit-bottle-amount").value),m=document.getElementById("edit-bottle-unit").value,v=document.getElementById("edit-bottle-notes").value,w=document.getElementById("edit-bottle-type-container"),D=document.getElementById("edit-bottle-type").value;if(!h)throw new Error("Start time is required");const V=new Date(c.value);if(V>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");if(w.style.display!=="none"&&!D)throw new Error("Formula type is required");o={startTime:q.fromDate(V),amount:d,unit:m,notes:v}}else if(e.style.display==="block"){const c=document.getElementById("edit-diaper-time"),h=c.value,d=document.getElementById("edit-diaper-type").value,m=document.getElementById("edit-diaper-notes").value;if(!h)throw new Error("Start time is required");const v=new Date(c.value);if(v>a)throw new Error("Cannot set time in the future");if(!d)throw new Error("Diaper type is required");o={startTime:q.fromDate(v),diaperType:d,notes:m}}else if(r.style.display==="block"){const c=document.getElementById("edit-pump-start-time"),h=c.value,d=parseFloat(document.getElementById("edit-pump-amount").value),m=document.getElementById("edit-pump-unit").value,v=document.getElementById("edit-pump-notes").value;if(!h)throw new Error("Start time is required");const w=new Date(c.value);if(w>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");o={startTime:q.fromDate(w),amount:d,unit:m,notes:v}}else if(s.style.display==="block"){const c=document.getElementById("edit-sleep-start-time"),h=document.getElementById("edit-sleep-end-time"),d=document.getElementById("edit-sleep-notes").value;if(!c.value)throw new Error("Start time is required");const m=new Date(c.value);if(m>a)throw new Error("Cannot set time in the future");if(o={startTime:q.fromDate(m),notes:d},h.value){const v=new Date(h.value);if(v>a)throw new Error("End time cannot be in the future");if(v<=m)throw new Error("End time must be after start time");o.endTime=q.fromDate(v)}else o.endTime=null}await ep(on(it,"entries",xr),o),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(async()=>{xc(),Re(),ke(),await Xi()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function kp(n){if(confirm("Are you sure you want to delete this entry?"))try{await np(on(it,"entries",n)),Re(),ke(),await Xi()}catch{alert("Failed to delete entry")}}async function Np(){await Xi(),Vs&&clearInterval(Vs),ks&&clearInterval(ks),Ns&&clearInterval(Ns),xs&&clearInterval(xs),Ms&&clearInterval(Ms),Bs&&clearInterval(Bs),Vs=window.setInterval(()=>Oc(),1e3),ks=window.setInterval(()=>Fc(),1e3),Ns=window.setInterval(()=>Uc(),1e3),xs=window.setInterval(()=>$c(),1e3),Ms=window.setInterval(()=>jc(),1e3),Bs=window.setInterval(()=>Hc(),1e3)}async function Xi(){await Promise.all([Mc(),Bc(),Lc(),qc(),zc()])}async function Mc(){try{const n=yt(mt(it,"entries"),Q("type","==","Feed"),_t("startTime","desc"),Kn(1)),t=await vt(n);if(t.empty)localStorage.removeItem("lastBottleTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastBottleTime",r.toISOString())}Oc()}catch(n){console.error("Error fetching last bottle time:",n)}}async function Bc(){try{const n=yt(mt(it,"entries"),Q("type","==","Diaper"),_t("startTime","desc")),t=await vt(n);let e,r;t.forEach(s=>{const o=s.data(),a=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&e===void 0&&(e=a),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&r===void 0&&(r=a)}),e!==void 0?localStorage.setItem("lastPeeTime",e.toISOString()):localStorage.removeItem("lastPeeTime"),r!==void 0?localStorage.setItem("lastPooTime",r.toISOString()):localStorage.removeItem("lastPooTime"),Fc(),Uc()}catch(n){console.error("Error fetching last diaper times:",n)}}async function Lc(){try{const n=yt(mt(it,"entries"),Q("type","==","Pump"),_t("startTime","desc"),Kn(1)),t=await vt(n);if(t.empty)localStorage.removeItem("lastPumpTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastPumpTime",r.toISOString())}$c()}catch(n){console.error("Error fetching last pump time:",n)}}function Ze(n,t){if(!n)return t;const e=new Date(n),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),c=Math.floor(s%(1e3*60)/1e3);return o>0?`${o}h ${a}m ${c}s`:a>0?`${a}m ${c}s`:`${c}s`}function Oc(){const n=document.getElementById("last-bottle-value");if(!n)return;const t=localStorage.getItem("lastBottleTime");if(!t){n.innerHTML="No bottles recorded";return}const e=Ze(t,"No bottles recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>3){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*3*60*60*1e3),v=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=v>=12?"pm":"am",V=v%12||12;c.push(`${V}:${w} ${D}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*3*60*60*1e3),v=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=v>=12?"pm":"am",V=v%12||12;c.push(`${V}:${w} ${D}`)}const h=c.map((d,m)=>`+ ${(m+1)*3} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${h}</span>`}function Fc(){const n=document.getElementById("last-pee-value");if(!n)return;const t=localStorage.getItem("lastPeeTime");n.textContent=Ze(t,"No pee recorded")}function Uc(){const n=document.getElementById("last-poo-value");if(!n)return;const t=localStorage.getItem("lastPooTime");n.textContent=Ze(t,"No poo recorded")}function $c(){const n=document.getElementById("last-pump-value");if(!n)return;const t=localStorage.getItem("lastPumpTime");if(!t){n.innerHTML="No pumps recorded";return}const e=Ze(t,"No pumps recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>4){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*4*60*60*1e3),v=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=v>=12?"pm":"am",V=v%12||12;c.push(`${V}:${w} ${D}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*4*60*60*1e3),v=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=v>=12?"pm":"am",V=v%12||12;c.push(`${V}:${w} ${D}`)}const h=c.map((d,m)=>`+ ${(m+1)*4} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${h}</span>`}async function qc(){try{const n=yt(mt(it,"entries"),Q("type","==","Sleep"),_t("startTime","desc"),Kn(1)),t=await vt(n);if(t.empty)localStorage.removeItem("lastSleepEndTime"),localStorage.removeItem("sleepInProgressStart");else{const e=t.docs[0].data();e.endTime?(localStorage.setItem("lastSleepEndTime",e.endTime.toDate().toISOString()),localStorage.removeItem("sleepInProgressStart")):(localStorage.removeItem("lastSleepEndTime"),localStorage.setItem("sleepInProgressStart",e.startTime.toDate().toISOString()))}jc()}catch(n){console.error("Error fetching last sleep end time:",n)}}function jc(){const n=document.getElementById("time-awake-value"),t=document.getElementById("time-awake-label");if(!n)return;const e=localStorage.getItem("sleepInProgressStart");if(e){t&&(t.textContent="Time Asleep"),n.textContent=Ze(e,"No sleep recorded");return}t&&(t.textContent="Time Awake");const r=localStorage.getItem("lastSleepEndTime");n.textContent=Ze(r,"No sleep recorded")}async function zc(){try{const n=new Date,t=new Date(n);t.setHours(7,0,0,0);const e=yt(mt(it,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(t)),_t("startTime","asc")),r=await vt(e);let s=0,o=null;r.forEach(a=>{const c=a.data(),h=c.startTime.toDate();if(h>=t&&h.toDateString()===n.toDateString())if(c.endTime){const d=c.endTime.toDate();s+=d.getTime()-h.getTime()}else o=h.toISOString()}),localStorage.setItem("napTimeCompletedMs",String(s)),o?localStorage.setItem("napTimeInProgressStart",o):localStorage.removeItem("napTimeInProgressStart"),Hc()}catch(n){console.error("Error fetching nap time:",n)}}function Hc(){const n=document.getElementById("nap-time-value");if(!n)return;const t=parseInt(localStorage.getItem("napTimeCompletedMs")||"0",10),e=localStorage.getItem("napTimeInProgressStart");let r=t;if(e){const c=new Date(e);r+=new Date().getTime()-c.getTime()}if(r<=0){n.textContent="0m";return}const s=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60)),a=Math.floor(r%(1e3*60)/1e3);s>0?n.textContent=`${s}h ${o}m ${a}s`:o>0?n.textContent=`${o}m ${a}s`:n.textContent=`${a}s`}window.addEventListener("DOMContentLoaded",()=>{var n,t;if(cp()){const e=document.getElementById("passcode-screen"),r=document.getElementById("app");e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Nc()}else(n=document.getElementById("passcode-submit"))==null||n.addEventListener("click",Qa),(t=document.getElementById("passcode-input"))==null||t.addEventListener("keypress",e=>{e.key==="Enter"&&Qa()})});
