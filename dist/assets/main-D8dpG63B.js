(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var ia={};/**
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
 */const il=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Pu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let v=(c&15)<<2|d>>6,S=d&63;h||(S=64,a||(v=64)),r.push(e[m],e[E],e[v],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(il(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||E==null)throw new Cu;const v=o<<2|c>>4;if(r.push(v),d!==64){const S=c<<4&240|d>>2;if(r.push(S),E!==64){const P=d<<6&192|E;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=il(n);return ol.encodeByteArray(t,!0)},Vr=function(n){return Vu(n).replace(/\./g,"")},ku=function(n){try{return ol.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const xu=()=>Nu().__FIREBASE_DEFAULTS__,Mu=()=>{if(typeof process>"u"||typeof ia>"u")return;const n=ia.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ku(n[1]);return t&&JSON.parse(t)},_i=()=>{try{return xu()||Mu()||Bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lu=n=>{var t,e;return(e=(t=_i())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ou=n=>{const t=Lu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},al=()=>{var n;return(n=_i())===null||n===void 0?void 0:n.config};/**
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
 */class Fu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Uu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vr(JSON.stringify(e)),Vr(JSON.stringify(a)),""].join(".")}/**
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
 */function $u(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qu(){var n;const t=(n=_i())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ju(){return!qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zu(){try{return typeof indexedDB=="object"}catch{return!1}}function Hu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ku="FirebaseError";class dn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ku,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ll.prototype.create)}}class ll{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Wu(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new dn(s,c,r)}}function Wu(n,t){return n.replace(Gu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Gu=/\{\$([^}]+)}/g;function Gs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(oa(o)&&oa(a)){if(!Gs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function oa(n){return n!==null&&typeof n=="object"}/**
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
 */function ue(n){return n&&n._delegate?n._delegate:n}class jn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const xe="[DEFAULT]";/**
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
 */class Qu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Fu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xu(t))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=xe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xe){return this.instances.has(t)}getOptions(t=xe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=xe){return this.component?this.component.multipleInstances?t:xe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yu(n){return n===xe?void 0:n}function Xu(n){return n.instantiationMode==="EAGER"}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Zu={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},th=Z.INFO,eh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},nh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=eh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cl{constructor(t){this.name=t,this._logLevel=th,this._logHandler=nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const rh=(n,t)=>t.some(e=>n instanceof e);let aa,la;function sh(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ih(){return la||(la=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,Qs=new WeakMap,hl=new WeakMap,Cs=new WeakMap,Ei=new WeakMap;function oh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Te(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ul.set(e,n)}).catch(()=>{}),Ei.set(t,n),t}function ah(n){if(Qs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Qs.set(n,t)}let Ys={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Qs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||hl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Te(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function lh(n){Ys=n(Ys)}function ch(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Vs(this),t,...e);return hl.set(r,t.sort?t.sort():[t]),Te(r)}:ih().includes(n)?function(...t){return n.apply(Vs(this),t),Te(ul.get(this))}:function(...t){return Te(n.apply(Vs(this),t))}}function uh(n){return typeof n=="function"?ch(n):(n instanceof IDBTransaction&&ah(n),rh(n,sh())?new Proxy(n,Ys):n)}function Te(n){if(n instanceof IDBRequest)return oh(n);if(Cs.has(n))return Cs.get(n);const t=uh(n);return t!==n&&(Cs.set(n,t),Ei.set(t,n)),t}const Vs=n=>Ei.get(n);function hh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Te(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Te(a.result),h.oldVersion,h.newVersion,Te(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const dh=["get","getKey","getAll","getAllKeys","count"],fh=["put","add","delete","clear"],ks=new Map;function ca(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ks.get(t))return ks.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=fh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ks.set(t,o),o}lh(n=>({...n,get:(t,e,r)=>ca(t,e)||n.get(t,e,r),has:(t,e)=>!!ca(t,e)||n.has(t,e)}));/**
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
 */class mh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ph(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ph(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xs="@firebase/app",ua="0.10.13";/**
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
 */const he=new cl("@firebase/app"),gh="@firebase/app-compat",yh="@firebase/analytics-compat",_h="@firebase/analytics",Eh="@firebase/app-check-compat",Th="@firebase/app-check",vh="@firebase/auth",Ih="@firebase/auth-compat",wh="@firebase/database",Ah="@firebase/data-connect",Sh="@firebase/database-compat",bh="@firebase/functions",Dh="@firebase/functions-compat",Rh="@firebase/installations",Ph="@firebase/installations-compat",Ch="@firebase/messaging",Vh="@firebase/messaging-compat",kh="@firebase/performance",Nh="@firebase/performance-compat",xh="@firebase/remote-config",Mh="@firebase/remote-config-compat",Bh="@firebase/storage",Lh="@firebase/storage-compat",Oh="@firebase/firestore",Fh="@firebase/vertexai-preview",Uh="@firebase/firestore-compat",$h="firebase",qh="10.14.1";/**
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
 */const Js="[DEFAULT]",jh={[Xs]:"fire-core",[gh]:"fire-core-compat",[_h]:"fire-analytics",[yh]:"fire-analytics-compat",[Th]:"fire-app-check",[Eh]:"fire-app-check-compat",[vh]:"fire-auth",[Ih]:"fire-auth-compat",[wh]:"fire-rtdb",[Ah]:"fire-data-connect",[Sh]:"fire-rtdb-compat",[bh]:"fire-fn",[Dh]:"fire-fn-compat",[Rh]:"fire-iid",[Ph]:"fire-iid-compat",[Ch]:"fire-fcm",[Vh]:"fire-fcm-compat",[kh]:"fire-perf",[Nh]:"fire-perf-compat",[xh]:"fire-rc",[Mh]:"fire-rc-compat",[Bh]:"fire-gcs",[Lh]:"fire-gcs-compat",[Oh]:"fire-fst",[Uh]:"fire-fst-compat",[Fh]:"fire-vertex","fire-js":"fire-js",[$h]:"fire-js-all"};/**
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
 */const kr=new Map,zh=new Map,Zs=new Map;function ha(n,t){try{n.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Nr(n){const t=n.name;if(Zs.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;Zs.set(t,n);for(const e of kr.values())ha(e,n);for(const e of zh.values())ha(e,n);return!0}function Hh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Kh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new ll("app","Firebase",Kh);/**
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
 */class Wh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
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
 */const Gh=qh;function dl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Js,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ve.create("bad-app-name",{appName:String(s)});if(e||(e=al()),!e)throw ve.create("no-options");const o=kr.get(s);if(o){if(Gs(e,o.options)&&Gs(r,o.config))return o;throw ve.create("duplicate-app",{appName:s})}const a=new Ju(s);for(const h of Zs.values())a.addComponent(h);const c=new Wh(e,r,a);return kr.set(s,c),c}function Qh(n=Js){const t=kr.get(n);if(!t&&n===Js&&al())return dl();if(!t)throw ve.create("no-app",{appName:n});return t}function Ze(n,t,e){var r;let s=(r=jh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(c.join(" "));return}Nr(new jn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Yh="firebase-heartbeat-database",Xh=1,zn="firebase-heartbeat-store";let Ns=null;function fl(){return Ns||(Ns=hh(Yh,Xh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(zn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),Ns}async function Jh(n){try{const e=(await fl()).transaction(zn),r=await e.objectStore(zn).get(ml(n));return await e.done,r}catch(t){if(t instanceof dn)he.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});he.warn(e.message)}}}async function da(n,t){try{const r=(await fl()).transaction(zn,"readwrite");await r.objectStore(zn).put(t,ml(n)),await r.done}catch(e){if(e instanceof dn)he.warn(e.message);else{const r=ve.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});he.warn(r.message)}}}function ml(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zh=1024,td=30*24*60*60*1e3;class ed{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=td}),this._storage.overwrite(this._heartbeatsCache))}catch(r){he.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fa(),{heartbeatsToSend:r,unsentEntries:s}=nd(this._heartbeatsCache.heartbeats),o=Vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return he.warn(e),""}}}function fa(){return new Date().toISOString().substring(0,10)}function nd(n,t=Zh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ma(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ma(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class rd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zu()?Hu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Jh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ma(n){return Vr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sd(n){Nr(new jn("platform-logger",t=>new mh(t),"PRIVATE")),Nr(new jn("heartbeat",t=>new ed(t),"PRIVATE")),Ze(Xs,ua,n),Ze(Xs,ua,"esm2017"),Ze("fire-js","")}sd("");var id="firebase",od="10.14.1";/**
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
 */Ze(id,od,"app");var pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Be,pl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,_,w){for(var p=Array(arguments.length-2),$=2;$<arguments.length;$++)p[$-2]=arguments[$];return g.prototype[_].apply(T,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var _=0;16>_;++_)T[_]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(_=0;16>_;++_)T[_]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],_=I.g[2];var w=I.g[3],p=g+(w^y&(_^w))+T[0]+3614090360&4294967295;g=y+(p<<7&4294967295|p>>>25),p=w+(_^g&(y^_))+T[1]+3905402710&4294967295,w=g+(p<<12&4294967295|p>>>20),p=_+(y^w&(g^y))+T[2]+606105819&4294967295,_=w+(p<<17&4294967295|p>>>15),p=y+(g^_&(w^g))+T[3]+3250441966&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(w^y&(_^w))+T[4]+4118548399&4294967295,g=y+(p<<7&4294967295|p>>>25),p=w+(_^g&(y^_))+T[5]+1200080426&4294967295,w=g+(p<<12&4294967295|p>>>20),p=_+(y^w&(g^y))+T[6]+2821735955&4294967295,_=w+(p<<17&4294967295|p>>>15),p=y+(g^_&(w^g))+T[7]+4249261313&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(w^y&(_^w))+T[8]+1770035416&4294967295,g=y+(p<<7&4294967295|p>>>25),p=w+(_^g&(y^_))+T[9]+2336552879&4294967295,w=g+(p<<12&4294967295|p>>>20),p=_+(y^w&(g^y))+T[10]+4294925233&4294967295,_=w+(p<<17&4294967295|p>>>15),p=y+(g^_&(w^g))+T[11]+2304563134&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(w^y&(_^w))+T[12]+1804603682&4294967295,g=y+(p<<7&4294967295|p>>>25),p=w+(_^g&(y^_))+T[13]+4254626195&4294967295,w=g+(p<<12&4294967295|p>>>20),p=_+(y^w&(g^y))+T[14]+2792965006&4294967295,_=w+(p<<17&4294967295|p>>>15),p=y+(g^_&(w^g))+T[15]+1236535329&4294967295,y=_+(p<<22&4294967295|p>>>10),p=g+(_^w&(y^_))+T[1]+4129170786&4294967295,g=y+(p<<5&4294967295|p>>>27),p=w+(y^_&(g^y))+T[6]+3225465664&4294967295,w=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(w^g))+T[11]+643717713&4294967295,_=w+(p<<14&4294967295|p>>>18),p=y+(w^g&(_^w))+T[0]+3921069994&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(_^w&(y^_))+T[5]+3593408605&4294967295,g=y+(p<<5&4294967295|p>>>27),p=w+(y^_&(g^y))+T[10]+38016083&4294967295,w=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(w^g))+T[15]+3634488961&4294967295,_=w+(p<<14&4294967295|p>>>18),p=y+(w^g&(_^w))+T[4]+3889429448&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(_^w&(y^_))+T[9]+568446438&4294967295,g=y+(p<<5&4294967295|p>>>27),p=w+(y^_&(g^y))+T[14]+3275163606&4294967295,w=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(w^g))+T[3]+4107603335&4294967295,_=w+(p<<14&4294967295|p>>>18),p=y+(w^g&(_^w))+T[8]+1163531501&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(_^w&(y^_))+T[13]+2850285829&4294967295,g=y+(p<<5&4294967295|p>>>27),p=w+(y^_&(g^y))+T[2]+4243563512&4294967295,w=g+(p<<9&4294967295|p>>>23),p=_+(g^y&(w^g))+T[7]+1735328473&4294967295,_=w+(p<<14&4294967295|p>>>18),p=y+(w^g&(_^w))+T[12]+2368359562&4294967295,y=_+(p<<20&4294967295|p>>>12),p=g+(y^_^w)+T[5]+4294588738&4294967295,g=y+(p<<4&4294967295|p>>>28),p=w+(g^y^_)+T[8]+2272392833&4294967295,w=g+(p<<11&4294967295|p>>>21),p=_+(w^g^y)+T[11]+1839030562&4294967295,_=w+(p<<16&4294967295|p>>>16),p=y+(_^w^g)+T[14]+4259657740&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(y^_^w)+T[1]+2763975236&4294967295,g=y+(p<<4&4294967295|p>>>28),p=w+(g^y^_)+T[4]+1272893353&4294967295,w=g+(p<<11&4294967295|p>>>21),p=_+(w^g^y)+T[7]+4139469664&4294967295,_=w+(p<<16&4294967295|p>>>16),p=y+(_^w^g)+T[10]+3200236656&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(y^_^w)+T[13]+681279174&4294967295,g=y+(p<<4&4294967295|p>>>28),p=w+(g^y^_)+T[0]+3936430074&4294967295,w=g+(p<<11&4294967295|p>>>21),p=_+(w^g^y)+T[3]+3572445317&4294967295,_=w+(p<<16&4294967295|p>>>16),p=y+(_^w^g)+T[6]+76029189&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(y^_^w)+T[9]+3654602809&4294967295,g=y+(p<<4&4294967295|p>>>28),p=w+(g^y^_)+T[12]+3873151461&4294967295,w=g+(p<<11&4294967295|p>>>21),p=_+(w^g^y)+T[15]+530742520&4294967295,_=w+(p<<16&4294967295|p>>>16),p=y+(_^w^g)+T[2]+3299628645&4294967295,y=_+(p<<23&4294967295|p>>>9),p=g+(_^(y|~w))+T[0]+4096336452&4294967295,g=y+(p<<6&4294967295|p>>>26),p=w+(y^(g|~_))+T[7]+1126891415&4294967295,w=g+(p<<10&4294967295|p>>>22),p=_+(g^(w|~y))+T[14]+2878612391&4294967295,_=w+(p<<15&4294967295|p>>>17),p=y+(w^(_|~g))+T[5]+4237533241&4294967295,y=_+(p<<21&4294967295|p>>>11),p=g+(_^(y|~w))+T[12]+1700485571&4294967295,g=y+(p<<6&4294967295|p>>>26),p=w+(y^(g|~_))+T[3]+2399980690&4294967295,w=g+(p<<10&4294967295|p>>>22),p=_+(g^(w|~y))+T[10]+4293915773&4294967295,_=w+(p<<15&4294967295|p>>>17),p=y+(w^(_|~g))+T[1]+2240044497&4294967295,y=_+(p<<21&4294967295|p>>>11),p=g+(_^(y|~w))+T[8]+1873313359&4294967295,g=y+(p<<6&4294967295|p>>>26),p=w+(y^(g|~_))+T[15]+4264355552&4294967295,w=g+(p<<10&4294967295|p>>>22),p=_+(g^(w|~y))+T[6]+2734768916&4294967295,_=w+(p<<15&4294967295|p>>>17),p=y+(w^(_|~g))+T[13]+1309151649&4294967295,y=_+(p<<21&4294967295|p>>>11),p=g+(_^(y|~w))+T[4]+4149444226&4294967295,g=y+(p<<6&4294967295|p>>>26),p=w+(y^(g|~_))+T[11]+3174756917&4294967295,w=g+(p<<10&4294967295|p>>>22),p=_+(g^(w|~y))+T[2]+718787259&4294967295,_=w+(p<<15&4294967295|p>>>17),p=y+(w^(_|~g))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,I.g[2]=I.g[2]+_&4294967295,I.g[3]=I.g[3]+w&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,T=this.B,_=this.h,w=0;w<g;){if(_==0)for(;w<=y;)s(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<g;)if(T[_++]=I.charCodeAt(w++),_==this.blockSize){s(this,T),_=0;break}}else for(;w<g;)if(T[_++]=I[w++],_==this.blockSize){s(this,T),_=0;break}}this.h=_,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)I[y++]=this.g[g]>>>T&255;return I};function o(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;for(var y=[],T=!0,_=I.length-1;0<=_;_--){var w=I[_]|0;T&&w==g||(y[_]=w,T=!1)}this.g=y}var c={};function h(I){return-128<=I&&128>I?o(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return C(d(-I));for(var g=[],y=1,T=0;I>=y;T++)g[T]=I/y|0,y*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return C(m(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),T=E,_=0;_<I.length;_+=8){var w=Math.min(8,I.length-_),p=parseInt(I.substring(_,_+w),g);8>w?(w=d(Math.pow(g,w)),T=T.j(w).add(d(p))):(T=T.j(y),T=T.add(d(p)))}return T}var E=h(0),v=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-C(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(k(this))return"-"+C(this).toString(I);for(var g=d(Math.pow(I,6)),y=this,T="";;){var _=z(y,g).g;y=R(y,_.j(g));var w=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=_,P(y))return w+T;for(;6>w.length;)w="0"+w;T=w+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=R(this,I),k(I)?-1:P(I)?0:1};function C(I){for(var g=I.g.length,y=[],T=0;T<g;T++)y[T]=~I.g[T];return new a(y,~I.h).add(v)}n.abs=function(){return k(this)?C(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0,_=0;_<=g;_++){var w=T+(this.i(_)&65535)+(I.i(_)&65535),p=(w>>>16)+(this.i(_)>>>16)+(I.i(_)>>>16);T=p>>>16,w&=65535,p&=65535,y[_]=p<<16|w}return new a(y,y[y.length-1]&-2147483648?-1:0)};function R(I,g){return I.add(C(g))}n.j=function(I){if(P(this)||P(I))return E;if(k(this))return k(I)?C(this).j(C(I)):C(C(this).j(I));if(k(I))return C(this.j(C(I)));if(0>this.l(S)&&0>I.l(S))return d(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var _=0;_<I.g.length;_++){var w=this.i(T)>>>16,p=this.i(T)&65535,$=I.i(_)>>>16,rt=I.i(_)&65535;y[2*T+2*_]+=p*rt,F(y,2*T+2*_),y[2*T+2*_+1]+=w*rt,F(y,2*T+2*_+1),y[2*T+2*_+1]+=p*$,F(y,2*T+2*_+1),y[2*T+2*_+2]+=w*$,F(y,2*T+2*_+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function F(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function O(I,g){this.g=I,this.h=g}function z(I,g){if(P(g))throw Error("division by zero");if(P(I))return new O(E,E);if(k(I))return g=z(C(I),g),new O(C(g.g),C(g.h));if(k(g))return g=z(I,C(g)),new O(C(g.g),g.h);if(30<I.g.length){if(k(I)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=v,T=g;0>=T.l(I);)y=Q(y),T=Q(T);var _=U(y,1),w=U(T,1);for(T=U(T,2),y=U(y,2);!P(T);){var p=w.add(T);0>=p.l(I)&&(_=_.add(y),w=p),T=U(T,1),y=U(y,1)}return g=R(I,_.j(g)),new O(_,g)}for(_=E;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),w=d(y),p=w.j(g);k(p)||0<p.l(I);)y-=T,w=d(y),p=w.j(g);P(w)&&(w=v),_=_.add(w),I=R(I,p)}return new O(_,I)}n.A=function(I){return z(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function Q(I){for(var g=I.g.length+1,y=[],T=0;T<g;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function U(I,g){var y=g>>5;g%=32;for(var T=I.g.length-y,_=[],w=0;w<T;w++)_[w]=0<g?I.i(w+y)>>>g|I.i(w+y+1)<<32-g:I.i(w+y);return new a(_,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Be=a}).apply(typeof pa<"u"?pa:typeof self<"u"?self:typeof window<"u"?window:{});var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gl,Mn,yl,br,ti,_l,El,Tl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ir=="object"&&Ir];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break t;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var b=u++;return{value:l(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function E(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function v(i,l,u){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,v.apply(null,arguments)}function S(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,b){for(var N=Array(arguments.length-2),at=2;at<arguments.length;at++)N[at-2]=arguments[at];return l.prototype[A].apply(f,N)}}function k(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function C(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,b=f.length||0;i.length=A+b;for(let N=0;N<b;N++)i[A+N]=f[N]}else i.push(f)}}class R{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(i){return/^[\s\xa0]*$/.test(i)}function O(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function z(i){return z[" "](i),i}z[" "]=function(){};var Q=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function U(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function I(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function g(i){const l={};for(const u in i)l[u]=i[u];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let b=0;b<y.length;b++)u=y[b],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function _(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function w(i){c.setTimeout(()=>{throw i},0)}function p(){var i=pt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class ${constructor(){this.h=this.g=null}add(l,u){const f=rt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var rt=new R(()=>new B,i=>i.reset());class B{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let M,ht=!1,pt=new $,st=()=>{const i=c.Promise.resolve(void 0);M=()=>{i.then(Ut)}};var Ut=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(u){w(u)}var l=rt;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ht=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var ne=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function kt(i,l){if(ot.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Q){t:{try{z(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ir[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&kt.aa.h.call(this)}}P(kt,ot);var ir={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),nt=0;function H(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++nt,this.da=this.fa=!1}function Nt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Et(i){this.src=i,this.g={},this.h=0}Et.prototype.add=function(i,l,u,f,A){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var N=ze(i,l,f,A);return-1<N?(l=i[N],u||(l.fa=!1)):(l=new H(l,this.src,b,!!f,A),l.fa=u,i.push(l)),l};function Kt(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(Nt(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function ze(i,l,u,f){for(var A=0;A<i.length;++A){var b=i[A];if(!b.da&&b.listener==l&&b.capture==!!u&&b.ha==f)return A}return-1}var En="closure_lm_"+(1e6*Math.random()|0),us={};function io(i,l,u,f,A){if(Array.isArray(l)){for(var b=0;b<l.length;b++)io(i,l[b],u,f,A);return null}return u=lo(u),i&&i[Re]?i.K(l,u,d(f)?!!f.capture:!1,A):tu(i,l,u,!1,f,A)}function tu(i,l,u,f,A,b){if(!l)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,at=ds(i);if(at||(i[En]=at=new Et(i)),u=at.add(l,u,f,N,b),u.proxy)return u;if(f=eu(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)ne||(A=N),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(ao(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function eu(){function i(u){return l.call(i.src,i.listener,u)}const l=nu;return i}function oo(i,l,u,f,A){if(Array.isArray(l))for(var b=0;b<l.length;b++)oo(i,l[b],u,f,A);else f=d(f)?!!f.capture:!!f,u=lo(u),i&&i[Re]?(i=i.i,l=String(l).toString(),l in i.g&&(b=i.g[l],u=ze(b,u,f,A),-1<u&&(Nt(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete i.g[l],i.h--)))):i&&(i=ds(i))&&(l=i.g[l.toString()],i=-1,l&&(i=ze(l,u,f,A)),(u=-1<i?l[i]:null)&&hs(u))}function hs(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Re])Kt(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(ao(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=ds(l))?(Kt(u,i),u.h==0&&(u.src=null,l[En]=null)):Nt(i)}}}function ao(i){return i in us?us[i]:us[i]="on"+i}function nu(i,l){if(i.da)i=!0;else{l=new kt(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&hs(i),i=u.call(f,l)}return i}function ds(i){return i=i[En],i instanceof Et?i:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function lo(i){return typeof i=="function"?i:(i[fs]||(i[fs]=function(l){return i.handleEvent(l)}),i[fs])}function xt(){lt.call(this),this.i=new Et(this),this.M=this,this.F=null}P(xt,lt),xt.prototype[Re]=!0,xt.prototype.removeEventListener=function(i,l,u,f){oo(this,i,l,u,f)};function $t(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new ot(l,i);else if(l instanceof ot)l.target=l.target||i;else{var A=l;l=new ot(f,i),T(l,A)}if(A=!0,u)for(var b=u.length-1;0<=b;b--){var N=l.g=u[b];A=or(N,f,!0,l)&&A}if(N=l.g=i,A=or(N,f,!0,l)&&A,A=or(N,f,!1,l)&&A,u)for(b=0;b<u.length;b++)N=l.g=u[b],A=or(N,f,!1,l)&&A}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)Nt(u[f]);delete i.g[l],i.h--}}this.F=null},xt.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},xt.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function or(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,b=0;b<l.length;++b){var N=l[b];if(N&&!N.da&&N.capture==u){var at=N.listener,bt=N.ha||N.src;N.fa&&Kt(i.i,N),A=at.call(bt,f)!==!1&&A}}return A&&!f.defaultPrevented}function co(i,l,u){if(typeof i=="function")u&&(i=v(i,u));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function uo(i){i.g=co(()=>{i.g=null,i.i&&(i.i=!1,uo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ru extends lt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:uo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(i){lt.call(this),this.h=i,this.g={}}P(Tn,lt);var ho=[];function fo(i){U(i.g,function(l,u){this.g.hasOwnProperty(u)&&hs(l)},i),i.g={}}Tn.prototype.N=function(){Tn.aa.N.call(this),fo(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ms=c.JSON.stringify,su=c.JSON.parse,iu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function ps(){}ps.prototype.h=null;function mo(i){return i.h||(i.h=i.i())}function po(){}var vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gs(){ot.call(this,"d")}P(gs,ot);function ys(){ot.call(this,"c")}P(ys,ot);var Pe={},go=null;function ar(){return go=go||new xt}Pe.La="serverreachability";function yo(i){ot.call(this,Pe.La,i)}P(yo,ot);function In(i){const l=ar();$t(l,new yo(l))}Pe.STAT_EVENT="statevent";function _o(i,l){ot.call(this,Pe.STAT_EVENT,i),this.stat=l}P(_o,ot);function qt(i){const l=ar();$t(l,new _o(l,i))}Pe.Ma="timingevent";function Eo(i,l){ot.call(this,Pe.Ma,i),this.size=l}P(Eo,ot);function wn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function ou(i,l,u,f,A,b){i.info(function(){if(i.g)if(b)for(var N="",at=b.split("&"),bt=0;bt<at.length;bt++){var tt=at[bt].split("=");if(1<tt.length){var Mt=tt[0];tt=tt[1];var Bt=Mt.split("_");N=2<=Bt.length&&Bt[1]=="type"?N+(Mt+"="+tt+"&"):N+(Mt+"=redacted&")}}else N=null;else N=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+N})}function au(i,l,u,f,A,b,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+b+" "+N})}function He(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+cu(i,u)+(f?" "+f:"")})}function lu(i,l){i.info(function(){return"TIMEOUT: "+l})}An.prototype.info=function(){};function cu(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return ms(u)}catch{return l}}var lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},To={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function cr(){}P(cr,ps),cr.prototype.g=function(){return new XMLHttpRequest},cr.prototype.i=function(){return{}},_s=new cr;function me(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new Tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vo}function vo(){this.i=null,this.g="",this.h=!1}var Io={},Es={};function Ts(i,l,u){i.L=1,i.v=fr(oe(l)),i.m=u,i.P=!0,wo(i,null)}function wo(i,l){i.F=Date.now(),ur(i),i.A=oe(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Lo(u.i,"t",f),i.C=0,u=i.j.J,i.h=new vo,i.g=ea(i.j,u?l:null,!i.m),0<i.O&&(i.M=new ru(v(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(ho[0]=A.toString()),A=ho);for(var b=0;b<A.length;b++){var N=io(u,A[b],f||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),In(),ou(i.i,i.u,i.A,i.l,i.R,i.m)}me.prototype.ca=function(i){i=i.target;const l=this.M;l&&ae(i)==3?l.j():this.Y(i)},me.prototype.Y=function(i){try{if(i==this.g)t:{const Bt=ae(this.g);var l=this.g.Ba();const Ge=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||zo(this.g)))){this.J||Bt!=4||l==7||(l==8||0>=Ge?In(3):In(2)),vs(this);var u=this.g.Z();this.X=u;e:if(Ao(this)){var f=zo(this.g);i="";var A=f.length,b=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),Sn(this);var N="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(b&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=u==200,au(this.i,this.u,this.A,this.l,this.R,Bt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var at,bt=this.g;if((at=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(at)){var tt=at;break e}}tt=null}if(u=tt)He(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,u);else{this.o=!1,this.s=3,qt(12),Ce(this),Sn(this);break t}}if(this.P){u=!0;let Jt;for(;!this.J&&this.C<N.length;)if(Jt=uu(this,N),Jt==Es){Bt==4&&(this.s=4,qt(14),u=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Io){this.s=4,qt(15),He(this.i,this.l,N,"[Invalid Chunk]"),u=!1;break}else He(this.i,this.l,Jt,null),Is(this,Jt);if(Ao(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||N.length!=0||this.h.h||(this.s=1,qt(16),u=!1),this.o=this.o&&u,!u)He(this.i,this.l,N,"[Invalid Chunked Response]"),Ce(this),Sn(this);else if(0<N.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Rs(Mt),Mt.M=!0,qt(11))}}else He(this.i,this.l,N,null),Is(this,N);Bt==4&&Ce(this),this.o&&!this.J&&(Bt==4?Xo(this.j,this):(this.o=!1,ur(this)))}else Du(this.g),u==400&&0<N.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),Ce(this),Sn(this)}}}catch{}finally{}};function Ao(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function uu(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?Es:(u=Number(l.substring(u,f)),isNaN(u)?Io:(f+=1,f+u>l.length?Es:(l=l.slice(f,f+u),i.C=f+u,l)))}me.prototype.cancel=function(){this.J=!0,Ce(this)};function ur(i){i.S=Date.now()+i.I,So(i,i.I)}function So(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=wn(v(i.ba,i),l)}function vs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}me.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(lu(this.i,this.A),this.L!=2&&(In(),qt(17)),Ce(this),this.s=2,Sn(this)):So(this,this.S-i)};function Sn(i){i.j.G==0||i.J||Xo(i.j,i)}function Ce(i){vs(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,fo(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Is(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||ws(u.h,i))){if(!i.K&&ws(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Er(u),yr(u);else break t;Ds(u),qt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=wn(v(u.Za,u),6e3));if(1>=Ro(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else ke(u,11)}else if((i.K||u.g==i)&&Er(u),!F(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let tt=A[l];if(u.T=tt[0],tt=tt[1],u.G==2)if(tt[0]=="c"){u.K=tt[1],u.ia=tt[2];const Mt=tt[3];Mt!=null&&(u.la=Mt,u.j.info("VER="+u.la));const Bt=tt[4];Bt!=null&&(u.Aa=Bt,u.j.info("SVER="+u.Aa));const Ge=tt[5];Ge!=null&&typeof Ge=="number"&&0<Ge&&(f=1.5*Ge,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Jt=i.g;if(Jt){const vr=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var b=f.h;b.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(As(b,b.h),b.h=null))}if(f.D){const Ps=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(f.ya=Ps,dt(f.I,f.D,Ps))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var N=i;if(f.qa=ta(f,f.J?f.ia:null,f.W),N.K){Po(f.h,N);var at=N,bt=f.L;bt&&(at.I=bt),at.B&&(vs(at),ur(at)),f.g=N}else Qo(f);0<u.i.length&&_r(u)}else tt[0]!="stop"&&tt[0]!="close"||ke(u,7);else u.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?ke(u,7):bs(u):tt[0]!="noop"&&u.l&&u.l.ta(tt),u.v=0)}}In(4)}catch{}}var hu=class{constructor(i,l){this.g=i,this.map=l}};function bo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Do(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ro(i){return i.h?1:i.g?i.g.size:0}function ws(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function As(i,l){i.g?i.g.add(l):i.h=l}function Po(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}bo.prototype.cancel=function(){if(this.i=Co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Co(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return k(i.i)}function du(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function fu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function Vo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=fu(i),f=du(i),A=f.length,b=0;b<A;b++)l.call(void 0,f[b],u&&u[b],i)}var ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mu(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var b=i[u].substring(0,f);A=i[u].substring(f+1)}else b=i[u];l(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ve(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ve){this.h=i.h,hr(this,i.j),this.o=i.o,this.g=i.g,dr(this,i.s),this.l=i.l;var l=i.i,u=new Rn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),No(this,u),this.m=i.m}else i&&(l=String(i).match(ko))?(this.h=!1,hr(this,l[1]||"",!0),this.o=bn(l[2]||""),this.g=bn(l[3]||"",!0),dr(this,l[4]),this.l=bn(l[5]||"",!0),No(this,l[6]||"",!0),this.m=bn(l[7]||"")):(this.h=!1,this.i=new Rn(null,this.h))}Ve.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Dn(l,xo,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Dn(l,xo,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Dn(u,u.charAt(0)=="/"?yu:gu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Dn(u,Eu)),i.join("")};function oe(i){return new Ve(i)}function hr(i,l,u){i.j=u?bn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function dr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function No(i,l,u){l instanceof Rn?(i.i=l,Tu(i.i,i.h)):(u||(l=Dn(l,_u)),i.i=new Rn(l,i.h))}function dt(i,l,u){i.i.set(l,u)}function fr(i){return dt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function bn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Dn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,pu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function pu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var xo=/[#\/\?@]/g,gu=/[#\?:]/g,yu=/[#\?]/g,_u=/[#\?@]/g,Eu=/#/g;function Rn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function pe(i){i.g||(i.g=new Map,i.h=0,i.i&&mu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Rn.prototype,n.add=function(i,l){pe(this),this.i=null,i=Ke(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function Mo(i,l){pe(i),l=Ke(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Bo(i,l){return pe(i),l=Ke(i,l),i.g.has(l)}n.forEach=function(i,l){pe(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){pe(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let b=0;b<A.length;b++)u.push(l[f])}return u},n.V=function(i){pe(this);let l=[];if(typeof i=="string")Bo(this,i)&&(l=l.concat(this.g.get(Ke(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return pe(this),this.i=null,i=Ke(this,i),Bo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Lo(i,l,u){Mo(i,l),0<u.length&&(i.i=null,i.g.set(Ke(i,l),k(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const b=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var A=b;N[f]!==""&&(A+="="+encodeURIComponent(String(N[f]))),i.push(A)}}return this.i=i.join("&")};function Ke(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Tu(i,l){l&&!i.j&&(pe(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(Mo(this,f),Lo(this,A,u))},i)),i.j=l}function vu(i,l){const u=new An;if(c.Image){const f=new Image;f.onload=S(ge,u,"TestLoadImage: loaded",!0,l,f),f.onerror=S(ge,u,"TestLoadImage: error",!1,l,f),f.onabort=S(ge,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(ge,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Iu(i,l){const u=new An,f=new AbortController,A=setTimeout(()=>{f.abort(),ge(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?ge(u,"TestPingServer: ok",!0,l):ge(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ge(u,"TestPingServer: error",!1,l)})}function ge(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function wu(){this.g=new iu}function Au(i,l,u){const f=u||"";try{Vo(i,function(A,b){let N=A;d(A)&&(N=ms(A)),l.push(f+b+"="+encodeURIComponent(N))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function mr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(mr,ps),mr.prototype.g=function(){return new pr(this.l,this.j)},mr.prototype.i=function(i){return function(){return i}}({});function pr(i,l){xt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(pr,xt),n=pr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Cn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Pn(this):Cn(this),this.readyState==3&&Oo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Pn(this))},n.Qa=function(i){this.g&&(this.response=i,Pn(this))},n.ga=function(){this.g&&Pn(this)};function Pn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Cn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Cn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Fo(i){let l="";return U(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Ss(i,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Fo(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):dt(i,l,u))}function gt(i){xt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(gt,xt);var Su=/^https?$/i,bu=["POST","PUT"];n=gt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?mo(this.o):mo(_s),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(b){Uo(this,b);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(bu,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,N]of u)this.g.setRequestHeader(b,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jo(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){Uo(this,b)}};function Uo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,$o(i),gr(i)}function $o(i){i.A||(i.A=!0,$t(i,"complete"),$t(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,$t(this,"complete"),$t(this,"abort"),gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gr(this,!0)),gt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qo(this):this.bb())},n.bb=function(){qo(this)};function qo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ae(i)!=4||i.Z()!=2)){if(i.u&&ae(i)==4)co(i.Ea,0,i);else if($t(i,"readystatechange"),ae(i)==4){i.h=!1;try{const N=i.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=N===0){var A=String(i.D).match(ko)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Su.test(A?A.toLowerCase():"")}u=f}if(u)$t(i,"complete"),$t(i,"success");else{i.m=6;try{var b=2<ae(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",$o(i)}}finally{gr(i)}}}}function gr(i,l){if(i.g){jo(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||$t(i,"ready");try{u.onreadystatechange=f}catch{}}}function jo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ae(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),su(l)}};function zo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Du(i){const l={};i=(i.g&&2<=ae(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(F(i[f]))continue;var u=_(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=l[A]||[];l[A]=b,b.push(u)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Ho(i){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vn("baseRetryDelayMs",5e3,i),this.cb=Vn("retryDelaySeedMs",1e4,i),this.Wa=Vn("forwardChannelMaxRetries",2,i),this.wa=Vn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new bo(i&&i.concurrentRequestLimit),this.Da=new wu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ho.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,f){qt(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=ta(this,null,this.W),_r(this)};function bs(i){if(Ko(i),i.G==3){var l=i.U++,u=oe(i.I);if(dt(u,"SID",i.K),dt(u,"RID",l),dt(u,"TYPE","terminate"),kn(i,u),l=new me(i,i.j,l),l.L=2,l.v=fr(oe(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=ea(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ur(l)}Zo(i)}function yr(i){i.g&&(Rs(i),i.g.cancel(),i.g=null)}function Ko(i){yr(i),i.u&&(c.clearTimeout(i.u),i.u=null),Er(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function _r(i){if(!Do(i.h)&&!i.s){i.s=!0;var l=i.Ga;M||st(),ht||(M(),ht=!0),pt.add(l,i),i.B=0}}function Ru(i,l){return Ro(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=wn(v(i.Ga,i,l),Jo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new me(this,this.j,i);let b=this.o;if(this.S&&(b?(b=g(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=Go(this,A,l),u=oe(this.I),dt(u,"RID",i),dt(u,"CVER",22),this.D&&dt(u,"X-HTTP-Session-Id",this.D),kn(this,u),b&&(this.O?l="headers="+encodeURIComponent(String(Fo(b)))+"&"+l:this.m&&Ss(u,this.m,b)),As(this.h,A),this.Ua&&dt(u,"TYPE","init"),this.P?(dt(u,"$req",l),dt(u,"SID","null"),A.T=!0,Ts(A,u,null)):Ts(A,u,l),this.G=2}}else this.G==3&&(i?Wo(this,i):this.i.length==0||Do(this.h)||Wo(this))};function Wo(i,l){var u;l?u=l.l:u=i.U++;const f=oe(i.I);dt(f,"SID",i.K),dt(f,"RID",u),dt(f,"AID",i.T),kn(i,f),i.m&&i.o&&Ss(f,i.m,i.o),u=new me(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Go(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),As(i.h,u),Ts(u,f,l)}function kn(i,l){i.H&&U(i.H,function(u,f){dt(l,f,u)}),i.l&&Vo({},function(u,f){dt(l,f,u)})}function Go(i,l,u){u=Math.min(i.i.length,u);var f=i.l?v(i.l.Na,i.l,i):null;t:{var A=i.i;let b=-1;for(;;){const N=["count="+u];b==-1?0<u?(b=A[0].g,N.push("ofs="+b)):b=0:N.push("ofs="+b);let at=!0;for(let bt=0;bt<u;bt++){let tt=A[bt].g;const Mt=A[bt].map;if(tt-=b,0>tt)b=Math.max(0,A[bt].g-100),at=!1;else try{Au(Mt,N,"req"+tt+"_")}catch{f&&f(Mt)}}if(at){f=N.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,f}function Qo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;M||st(),ht||(M(),ht=!0),pt.add(l,i),i.v=0}}function Ds(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=wn(v(i.Fa,i),Jo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Yo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=wn(v(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),yr(this),Yo(this))};function Rs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Yo(i){i.g=new me(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=oe(i.qa);dt(l,"RID","rpc"),dt(l,"SID",i.K),dt(l,"AID",i.T),dt(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&dt(l,"TO",i.ja),dt(l,"TYPE","xmlhttp"),kn(i,l),i.m&&i.o&&Ss(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=fr(oe(l)),u.m=null,u.P=!0,wo(u,i)}n.Za=function(){this.C!=null&&(this.C=null,yr(this),Ds(this),qt(19))};function Er(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Xo(i,l){var u=null;if(i.g==l){Er(i),Rs(i),i.g=null;var f=2}else if(ws(i.h,l))u=l.D,Po(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=ar(),$t(f,new Eo(f,u)),_r(i)}else Qo(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Ru(i,l)||f==2&&Ds(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:ke(i,5);break;case 4:ke(i,10);break;case 3:ke(i,6);break;default:ke(i,2)}}}function Jo(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function ke(i,l){if(i.j.info("Error code "+l),l==2){var u=v(i.fb,i),f=i.Xa;const A=!f;f=new Ve(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hr(f,"https"),fr(f),A?vu(f.toString(),u):Iu(f.toString(),u)}else qt(2);i.G=0,i.l&&i.l.sa(l),Zo(i),Ko(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function Zo(i){if(i.G=0,i.ka=[],i.l){const l=Co(i.h);(l.length!=0||i.i.length!=0)&&(C(i.ka,l),C(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function ta(i,l,u){var f=u instanceof Ve?oe(u):new Ve(u);if(f.g!="")l&&(f.g=l+"."+f.g),dr(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var b=new Ve(null);f&&hr(b,f),l&&(b.g=l),A&&dr(b,A),u&&(b.l=u),f=b}return u=i.D,l=i.ya,u&&l&&dt(f,u,l),dt(f,"VER",i.la),kn(i,f),f}function ea(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new gt(new mr({eb:u})):new gt(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function na(){}n=na.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Tr(){}Tr.prototype.g=function(i,l){return new Wt(i,l)};function Wt(i,l){xt.call(this),this.g=new Ho(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!F(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new We(this)}P(Wt,xt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){bs(this.g)},Wt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=ms(i),i=u);l.i.push(new hu(l.Ya++,i)),l.G==3&&_r(l)},Wt.prototype.N=function(){this.g.l=null,delete this.j,bs(this.g),delete this.g,Wt.aa.N.call(this)};function ra(i){gs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P(ra,gs);function sa(){ys.call(this),this.status=1}P(sa,ys);function We(i){this.g=i}P(We,na),We.prototype.ua=function(){$t(this.g,"a")},We.prototype.ta=function(i){$t(this.g,new ra(i))},We.prototype.sa=function(i){$t(this.g,new sa)},We.prototype.ra=function(){$t(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Tl=function(){return new Tr},El=function(){return ar()},_l=Pe,ti={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lr.NO_ERROR=0,lr.TIMEOUT=8,lr.HTTP_ERROR=6,br=lr,To.COMPLETE="complete",yl=To,po.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",xt.prototype.listen=xt.prototype.K,Mn=po,gt.prototype.listenOnce=gt.prototype.L,gt.prototype.getLastError=gt.prototype.Ka,gt.prototype.getLastErrorCode=gt.prototype.Ba,gt.prototype.getStatus=gt.prototype.Z,gt.prototype.getResponseJson=gt.prototype.Oa,gt.prototype.getResponseText=gt.prototype.oa,gt.prototype.send=gt.prototype.ea,gt.prototype.setWithCredentials=gt.prototype.Ha,gl=gt}).apply(typeof Ir<"u"?Ir:typeof self<"u"?self:typeof window<"u"?window:{});const ga="@firebase/firestore";/**
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
 */class Ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let fn="10.14.0";/**
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
 */const Le=new cl("@firebase/firestore");function Nn(){return Le.logLevel}function L(n,...t){if(Le.logLevel<=Z.DEBUG){const e=t.map(Ti);Le.debug(`Firestore (${fn}): ${n}`,...e)}}function de(n,...t){if(Le.logLevel<=Z.ERROR){const e=t.map(Ti);Le.error(`Firestore (${fn}): ${n}`,...e)}}function nn(n,...t){if(Le.logLevel<=Z.WARN){const e=t.map(Ti);Le.warn(`Firestore (${fn}): ${n}`,...e)}}function Ti(n){if(typeof n=="string")return n;try{/**
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
 */function K(n="Unexpected state"){const t=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: `+n;throw de(t),new Error(t)}function it(n,t){n||K()}function G(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends dn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ce{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class vl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ad{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ot.UNAUTHENTICATED))}shutdown(){}}class ld{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class cd{constructor(t){this.t=t,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){it(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ce;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ce,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ce)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(it(typeof r.accessToken=="string"),new vl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return it(t===null||typeof t=="string"),new Ot(t)}}class ud{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ud(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){it(this.o===void 0);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(it(typeof e.token=="string"),this.R=e.token,new dd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Il{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=md(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function et(n,t){return n<t?-1:n>t?1:0}function rn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class j{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new j(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?et(this.nanoseconds,t.nanoseconds):et(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new j(0,0))}static max(){return new W(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hn{constructor(t,e,r){e===void 0?e=0:e>t.length&&K(),r===void 0?r=t.length-e:r>t.length-e&&K(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Hn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Hn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ft extends Hn{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const pd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Hn{construct(t,e,r){return new Pt(t,e,r)}static isValidIdentifier(t){return pd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new x(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pt(e)}static emptyPath(){return new Pt([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(ft.fromString(t))}static fromName(t){return new q(ft.fromString(t).popFirst(5))}static empty(){return new q(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new ft(t.slice()))}}function gd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new j(e+1,0):new j(e,r));return new we(s,q.empty(),t)}function yd(n){return new we(n.readTime,n.key,-1)}class we{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new we(W.min(),q.empty(),-1)}static max(){return new we(W.max(),q.empty(),-1)}}function _d(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:et(n.largestBatchId,t.largestBatchId))}/**
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
 */const Ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Td{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Jn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Ed)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new V((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function vd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Zn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}vi.oe=-1;function zr(n){return n==null}function xr(n){return n===0&&1/n==-1/0}function Id(n){return typeof n=="number"&&Number.isInteger(n)&&!xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ya(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ue(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function wl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Dt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wr(this.root,t,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wr(this.root,t,this.comparator,!0)}}class wr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Dt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Dt.RED,this.left=s??Dt.EMPTY,this.right=o??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Dt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,r,s,o){return this}insert(t,e,r){return new Dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ct{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _a(this.data.getIterator())}getIteratorFrom(t){return new _a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ct(this.comparator);return e.data=t,e}}class _a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(t){this.fields=t,t.sort(Pt.comparator)}static empty(){return new Gt([])}unionWith(t){let e=new Ct(Pt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return rn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Al extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Al("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return et(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const wd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ae(n){if(it(!!n),typeof n=="string"){let t=0;const e=wd.exec(n);if(it(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Oe(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
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
 */function Ii(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function wi(n){const t=n.mapValue.fields.__previous_value__;return Ii(t)?wi(t):t}function Kn(n){const t=Ae(n.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
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
 */class Ad{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class Wn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Wn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Wn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ar={mapValue:{}};function Fe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ii(n)?4:bd(n)?9007199254740991:Sd(n)?10:11:K()}function ie(n,t){if(n===t)return!0;const e=Fe(n);if(e!==Fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Kn(n).isEqual(Kn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Ae(s.timestampValue),c=Ae(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Oe(s.bytesValue).isEqual(Oe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return yt(s.geoPointValue.latitude)===yt(o.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return yt(s.integerValue)===yt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=yt(s.doubleValue),c=yt(o.doubleValue);return a===c?xr(a)===xr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return rn(n.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ya(a)!==ya(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!ie(a[h],c[h])))return!1;return!0}(n,t);default:return K()}}function Gn(n,t){return(n.values||[]).find(e=>ie(e,t))!==void 0}function sn(n,t){if(n===t)return 0;const e=Fe(n),r=Fe(t);if(e!==r)return et(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return et(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=yt(o.integerValue||o.doubleValue),h=yt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Ea(n.timestampValue,t.timestampValue);case 4:return Ea(Kn(n),Kn(t));case 5:return et(n.stringValue,t.stringValue);case 6:return function(o,a){const c=Oe(o),h=Oe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=et(c[d],h[d]);if(m!==0)return m}return et(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=et(yt(o.latitude),yt(a.latitude));return c!==0?c:et(yt(o.longitude),yt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ta(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const E=o.fields||{},v=a.fields||{},S=(c=E.value)===null||c===void 0?void 0:c.arrayValue,P=(h=v.value)===null||h===void 0?void 0:h.arrayValue,k=et(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Ta(S,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Ar.mapValue&&a===Ar.mapValue)return 0;if(o===Ar.mapValue)return 1;if(a===Ar.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const v=et(h[E],m[E]);if(v!==0)return v;const S=sn(c[h[E]],d[m[E]]);if(S!==0)return S}return et(h.length,m.length)}(n.mapValue,t.mapValue);default:throw K()}}function Ea(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return et(n,t);const e=Ae(n),r=Ae(t),s=et(e.seconds,r.seconds);return s!==0?s:et(e.nanos,r.nanos)}function Ta(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=sn(e[s],r[s]);if(o)return o}return et(e.length,r.length)}function on(n){return ei(n)}function ei(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ae(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Oe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ei(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ei(e.fields[a])}`;return s+"}"}(n.mapValue):K()}function va(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ni(n){return!!n&&"integerValue"in n}function Ai(n){return!!n&&"arrayValue"in n}function Ia(n){return!!n&&"nullValue"in n}function wa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Dr(n){return!!n&&"mapValue"in n}function Sd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Fn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ue(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Fn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Fn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function bd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ht{constructor(t){this.value=t}static empty(){return new Ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Dr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fn(e)}setAll(t){let e=Pt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Fn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Dr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Dr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ue(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ht(Fn(this.value))}}function Sl(n){const t=[];return Ue(n.fields,(e,r)=>{const s=new Pt([e]);if(Dr(r)){const o=Sl(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Gt(t)}/**
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
 */class Ft{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Ft(t,0,W.min(),W.min(),W.min(),Ht.empty(),0)}static newFoundDocument(t,e,r,s){return new Ft(t,1,e,W.min(),r,s,0)}static newNoDocument(t,e){return new Ft(t,2,e,W.min(),W.min(),Ht.empty(),0)}static newUnknownDocument(t,e){return new Ft(t,3,e,W.min(),W.min(),Ht.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mr{constructor(t,e){this.position=t,this.inclusive=e}}function Aa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=sn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ie(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Dd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class bl{}class wt extends bl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Pd(t,e,r):e==="array-contains"?new kd(t,r):e==="in"?new Nd(t,r):e==="not-in"?new xd(t,r):e==="array-contains-any"?new Md(t,r):new wt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Cd(t,r):new Vd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(sn(e,this.value)):e!==null&&Fe(this.value)===Fe(e)&&this.matchesComparison(sn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends bl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new te(t,e)}matches(t){return Dl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Dl(n){return n.op==="and"}function Rl(n){return Rd(n)&&Dl(n)}function Rd(n){for(const t of n.filters)if(t instanceof te)return!1;return!0}function ri(n){if(n instanceof wt)return n.field.canonicalString()+n.op.toString()+on(n.value);if(Rl(n))return n.filters.map(t=>ri(t)).join(",");{const t=n.filters.map(e=>ri(e)).join(",");return`${n.op}(${t})`}}function Pl(n,t){return n instanceof wt?function(r,s){return s instanceof wt&&r.op===s.op&&r.field.isEqual(s.field)&&ie(r.value,s.value)}(n,t):n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Pl(a,s.filters[c]),!0):!1}(n,t):void K()}function Cl(n){return n instanceof wt?function(e){return`${e.field.canonicalString()} ${e.op} ${on(e.value)}`}(n):n instanceof te?function(e){return e.op.toString()+" {"+e.getFilters().map(Cl).join(" ,")+"}"}(n):"Filter"}class Pd extends wt{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Cd extends wt{constructor(t,e){super(t,"in",e),this.keys=Vl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vd extends wt{constructor(t,e){super(t,"not-in",e),this.keys=Vl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Vl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class kd extends wt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ai(e)&&Gn(e.arrayValue,this.value)}}class Nd extends wt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Gn(this.value.arrayValue,e)}}class xd extends wt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Gn(this.value.arrayValue,e)}}class Md extends wt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ai(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Gn(this.value.arrayValue,r))}}/**
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
 */class Bd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function ba(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Bd(n,t,e,r,s,o,a)}function Si(n){const t=G(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ri(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),zr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>on(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>on(r)).join(",")),t.ue=e}return t.ue}function bi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Dd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Pl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Sa(n.startAt,t.startAt)&&Sa(n.endAt,t.endAt)}function si(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class mn{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ld(n,t,e,r,s,o,a,c){return new mn(n,t,e,r,s,o,a,c)}function Di(n){return new mn(n)}function Da(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kl(n){return n.collectionGroup!==null}function Un(n){const t=G(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ct(Pt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Qn(o,r))}),e.has(Pt.keyField().canonicalString())||t.ce.push(new Qn(Pt.keyField(),r))}return t.ce}function re(n){const t=G(n);return t.le||(t.le=Od(t,Un(n))),t.le}function Od(n,t){if(n.limitType==="F")return ba(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Qn(s.field,o)});const e=n.endAt?new Mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mr(n.startAt.position,n.startAt.inclusive):null;return ba(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ii(n,t){const e=n.filters.concat([t]);return new mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Br(n,t,e){return new mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Hr(n,t){return bi(re(n),re(t))&&n.limitType===t.limitType}function Nl(n){return`${Si(re(n))}|lt:${n.limitType}`}function Ye(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Cl(s)).join(", ")}]`),zr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>on(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>on(s)).join(",")),`Target(${r})`}(re(n))}; limitType=${n.limitType})`}function Kr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Un(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=Aa(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,Un(r),s)||r.endAt&&!function(a,c,h){const d=Aa(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,Un(r),s))}(n,t)}function Fd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xl(n){return(t,e)=>{let r=!1;for(const s of Un(n)){const o=Ud(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ud(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?sn(h,d):K()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class pn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ue(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return wl(this.inner)}size(){return this.innerSize}}/**
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
 */const $d=new mt(q.comparator);function fe(){return $d}const Ml=new mt(q.comparator);function Bn(...n){let t=Ml;for(const e of n)t=t.insert(e.key,e);return t}function Bl(n){let t=Ml;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Me(){return $n()}function Ll(){return $n()}function $n(){return new pn(n=>n.toString(),(n,t)=>n.isEqual(t))}const qd=new mt(q.comparator),jd=new Ct(q.comparator);function X(...n){let t=jd;for(const e of n)t=t.add(e);return t}const zd=new Ct(et);function Hd(){return zd}/**
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
 */function Ri(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(t)?"-0":t}}function Ol(n){return{integerValue:""+n}}function Kd(n,t){return Id(t)?Ol(t):Ri(n,t)}/**
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
 */class Wr{constructor(){this._=void 0}}function Wd(n,t,e){return n instanceof Lr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ii(o)&&(o=wi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Yn?Ul(n,t):n instanceof Xn?$l(n,t):function(s,o){const a=Fl(s,o),c=Ra(a)+Ra(s.Pe);return ni(a)&&ni(s.Pe)?Ol(c):Ri(s.serializer,c)}(n,t)}function Gd(n,t,e){return n instanceof Yn?Ul(n,t):n instanceof Xn?$l(n,t):e}function Fl(n,t){return n instanceof Or?function(r){return ni(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Lr extends Wr{}class Yn extends Wr{constructor(t){super(),this.elements=t}}function Ul(n,t){const e=ql(t);for(const r of n.elements)e.some(s=>ie(s,r))||e.push(r);return{arrayValue:{values:e}}}class Xn extends Wr{constructor(t){super(),this.elements=t}}function $l(n,t){let e=ql(t);for(const r of n.elements)e=e.filter(s=>!ie(s,r));return{arrayValue:{values:e}}}class Or extends Wr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ra(n){return yt(n.integerValue||n.doubleValue)}function ql(n){return Ai(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Yn&&s instanceof Yn||r instanceof Xn&&s instanceof Xn?rn(r.elements,s.elements,ie):r instanceof Or&&s instanceof Or?ie(r.Pe,s.Pe):r instanceof Lr&&s instanceof Lr}(n.transform,t.transform)}class Yd{constructor(t,e){this.version=t,this.transformResults=e}}class Yt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Yt}static exists(t){return new Yt(void 0,t)}static updateTime(t){return new Yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Gr{}function jl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Pi(n.key,Yt.none()):new tr(n.key,n.data,Yt.none());{const e=n.data,r=Ht.empty();let s=new Ct(Pt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new be(n.key,r,new Gt(s.toArray()),Yt.none())}}function Xd(n,t,e){n instanceof tr?function(s,o,a){const c=s.value.clone(),h=Ca(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof be?function(s,o,a){if(!Rr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ca(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(zl(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function qn(n,t,e,r){return n instanceof tr?function(o,a,c,h){if(!Rr(o.precondition,a))return c;const d=o.value.clone(),m=Va(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof be?function(o,a,c,h){if(!Rr(o.precondition,a))return c;const d=Va(o.fieldTransforms,h,a),m=a.data;return m.setAll(zl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,c){return Rr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Jd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Fl(r.transform,s||null);o!=null&&(e===null&&(e=Ht.empty()),e.set(r.field,o))}return e||null}function Pa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rn(r,s,(o,a)=>Qd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class tr extends Gr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class be extends Gr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function zl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ca(n,t,e){const r=new Map;it(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Gd(a,c,e[s]))}return r}function Va(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Wd(o,a,t))}return r}class Pi extends Gr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zd extends Gr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Xd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=qn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=qn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ll();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=jl(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&rn(this.mutations,t.mutations,(e,r)=>Pa(e,r))&&rn(this.baseMutations,t.baseMutations,(e,r)=>Pa(e,r))}}class Ci{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){it(t.mutations.length===r.length);let s=function(){return qd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ci(t,e,r,s)}}/**
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
 */var Tt,J;function rf(n){switch(n){default:return K();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Hl(n){if(n===void 0)return de("GRPC error has no .code"),D.UNKNOWN;switch(n){case Tt.OK:return D.OK;case Tt.CANCELLED:return D.CANCELLED;case Tt.UNKNOWN:return D.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return D.INTERNAL;case Tt.UNAVAILABLE:return D.UNAVAILABLE;case Tt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Tt.NOT_FOUND:return D.NOT_FOUND;case Tt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Tt.ABORTED:return D.ABORTED;case Tt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Tt.DATA_LOSS:return D.DATA_LOSS;default:return K()}}(J=Tt||(Tt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const of=new Be([4294967295,4294967295],0);function ka(n){const t=sf().encode(n),e=new pl;return e.update(t),new Uint8Array(e.digest())}function Na(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Be([e,r],0),new Be([s,o],0)]}class Vi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ln(`Invalid padding: ${e}`);if(r<0)throw new Ln(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ln(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ln(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Be.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Be.fromNumber(r)));return s.compare(of)===1&&(s=new Be([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ka(t),[r,s]=Na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Vi(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=ka(t),[r,s]=Na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,er.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Qr(W.min(),s,new mt(et),fe(),X())}}class er{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new er(r,e,X(),X(),X())}}/**
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
 */class Pr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Kl{constructor(t,e){this.targetId=t,this.me=e}}class Wl{constructor(t,e,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class xa{constructor(){this.fe=0,this.ge=Ba(),this.pe=Vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=X(),e=X(),r=X();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:K()}}),new er(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ba()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,it(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class af{constructor(t){this.Le=t,this.Be=new Map,this.ke=fe(),this.qe=Ma(),this.Qe=new mt(et)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:K()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(si(o))if(r===0){const a=new q(o.path);this.Ue(e,a,Ft.newNoDocument(a,W.min()))}else it(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=Oe(r).toUint8Array()}catch(h){if(h instanceof Al)return nn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Vi(a,s,o)}catch(h){return nn(h instanceof Ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&si(c.target)){const h=new q(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Ft.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=X();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Qr(t,e,this.Qe,this.ke,r);return this.ke=fe(),this.qe=Ma(),this.Qe=new mt(et),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new xa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ct(et),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new xa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ma(){return new mt(q.comparator)}function Ba(){return new mt(q.comparator)}const lf={asc:"ASCENDING",desc:"DESCENDING"},cf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uf={and:"AND",or:"OR"};class hf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function oi(n,t){return n.useProto3Json||zr(t)?t:{value:t}}function Fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function df(n,t){return Fr(n,t.toTimestamp())}function se(n){return it(!!n),W.fromTimestamp(function(e){const r=Ae(e);return new j(r.seconds,r.nanos)}(n))}function ki(n,t){return ai(n,t).canonicalString()}function ai(n,t){const e=function(s){return new ft(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ql(n){const t=ft.fromString(n);return it(tc(t)),t}function li(n,t){return ki(n.databaseId,t.path)}function xs(n,t){const e=Ql(t);if(e.get(1)!==n.databaseId.projectId)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(Xl(e))}function Yl(n,t){return ki(n.databaseId,t)}function ff(n){const t=Ql(n);return t.length===4?ft.emptyPath():Xl(t)}function ci(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xl(n){return it(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function La(n,t,e){return{name:li(n,t),fields:e.value.mapValue.fields}}function mf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(it(m===void 0||typeof m=="string"),Vt.fromBase64String(m||"")):(it(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Vt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?D.UNKNOWN:Hl(d.code);return new x(m,d.message||"")}(a);e=new Wl(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=xs(n,r.document.name),o=se(r.document.updateTime),a=r.document.createTime?se(r.document.createTime):W.min(),c=new Ht({mapValue:{fields:r.document.fields}}),h=Ft.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Pr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=xs(n,r.document),o=r.readTime?se(r.readTime):W.min(),a=Ft.newNoDocument(s,o),c=r.removedTargetIds||[];e=new Pr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=xs(n,r.document),o=r.removedTargetIds||[];e=new Pr([],o,s,null)}else{if(!("filter"in t))return K();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new nf(s,o),c=r.targetId;e=new Kl(c,a)}}return e}function pf(n,t){let e;if(t instanceof tr)e={update:La(n,t.key,t.value)};else if(t instanceof Pi)e={delete:li(n,t.key)};else if(t instanceof be)e={update:La(n,t.key,t.data),updateMask:Af(t.fieldMask)};else{if(!(t instanceof Zd))return K();e={verify:li(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Yn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Or)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw K()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:df(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(n,t.precondition)),e}function gf(n,t){return n&&n.length>0?(it(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?se(s.updateTime):se(o);return a.isEqual(W.min())&&(a=se(o)),new Yd(a,s.transformResults||[])}(e,t))):[]}function yf(n,t){return{documents:[Yl(n,t.path)]}}function _f(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Yl(n,s);const o=function(d){if(d.length!==0)return Zl(te.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Xe(v.field),direction:vf(v.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=oi(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Ef(n){let t=ff(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){it(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const v=Jl(E);return v instanceof te&&Rl(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(v=>function(P){return new Qn(Je(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(e.orderBy));let c=null;e.limit&&(c=function(E){let v;return v=typeof E=="object"?E.value:E,zr(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(E){const v=!!E.before,S=E.values||[];return new Mr(S,v)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const v=!E.before,S=E.values||[];return new Mr(S,v)}(e.endAt)),Ld(t,s,a,o,c,"F",h,d)}function Tf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Jl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Je(e.unaryFilter.field);return wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Je(e.unaryFilter.field);return wt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Je(e.unaryFilter.field);return wt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Je(e.unaryFilter.field);return wt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(e){return wt.create(Je(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return te.create(e.compositeFilter.filters.map(r=>Jl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(n):K()}function vf(n){return lf[n]}function If(n){return cf[n]}function wf(n){return uf[n]}function Xe(n){return{fieldPath:n.canonicalString()}}function Je(n){return Pt.fromServerFormat(n.fieldPath)}function Zl(n){return n instanceof wt?function(e){if(e.op==="=="){if(wa(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NAN"}};if(Ia(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wa(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NAN"}};if(Ia(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xe(e.field),op:If(e.op),value:e.value}}}(n):n instanceof te?function(e){const r=e.getFilters().map(s=>Zl(s));return r.length===1?r[0]:{compositeFilter:{op:wf(e.op),filters:r}}}(n):K()}function Af(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function tc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class _e{constructor(t,e,r,s,o=W.min(),a=W.min(),c=Vt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new _e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Sf{constructor(t){this.ct=t}}function bf(n){const t=Ef({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Br(t,t.limit,"L"):t}/**
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
 */class Df{constructor(){this.un=new Rf}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(we.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(we.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ct(ft.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ct(ft.comparator)).toArray()}}/**
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
 */class an{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new an(0)}static kn(){return new an(-1)}}/**
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
 */class Pf{constructor(){this.changes=new pn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ft.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Vf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&qn(r.mutation,s,Gt.empty(),j.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=Me();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Bn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Me();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=fe();const a=$n(),c=function(){return $n()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof be)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),qn(m.mutation,d,m.mutation.getFieldMask(),j.now())):a.set(d.key,Gt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var E;return c.set(d,new Cf(m,(E=a.get(d))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=$n();let s=new mt((a,c)=>a-c),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Gt.empty();m=c.applyToLocalView(d,m),r.set(h,m);const E=(s.get(c.batchId)||X()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,E=Ll();m.forEach(v=>{if(!o.has(v)){const S=jl(e.get(v),r.get(v));S!==null&&E.set(v,S),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):kl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):V.resolve(Me());let c=-1,h=o;return a.next(d=>V.forEach(d,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(v=>{h=h.insert(m,v)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,X())).next(m=>({batchId:c,changes:Bl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=Bn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Bn();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const d=function(E,v){return new mn(v,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((E,v)=>{a=a.insert(E,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ft.newInvalidDocument(m)))});let c=Bn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&qn(m.mutation,d,Gt.empty(),j.now()),Kr(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class kf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:se(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:bf(s.bundledQuery),readTime:se(s.readTime)}}(e)),V.resolve()}}/**
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
 */class Nf{constructor(){this.overlays=new mt(q.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Me();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=Me(),o=e.length+1,a=new q(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new mt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Me(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Me(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return V.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ef(e,r));let o=this.Ir.get(e);o===void 0&&(o=X(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class xf{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Ni{constructor(){this.Tr=new Ct(St.Er),this.dr=new Ct(St.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new St(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new St(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new q(new ft([])),r=new St(e,t),s=new St(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new q(new ft([])),r=new St(e,t),s=new St(e,t+1);let o=X();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new St(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class St{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return q.comparator(t.key,e.key)||et(t.wr,e.wr)}static Ar(t,e){return et(t.wr,e.wr)||q.comparator(t.key,e.key)}}/**
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
 */class Mf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Ct(St.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tf(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new St(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new St(e,0),s=new St(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ct(et);return e.forEach(s=>{const o=new St(s,0),a=new St(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const a=new St(new q(o),0);let c=new Ct(et);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){it(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(e.mutations,s=>{const o=new St(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new St(e,0),s=this.br.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bf{constructor(t){this.Mr=t,this.docs=function(){return new mt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():Ft.newInvalidDocument(e))}getEntries(t,e){let r=fe();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ft.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=fe();const a=e.path,c=new q(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||_d(yd(m),r)<=0||(s.has(m.key)||Kr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,s){K()}Or(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Lf(this)}getSize(t){return V.resolve(this.size)}}class Lf extends Pf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Of{constructor(t){this.persistence=t,this.Nr=new pn(e=>Si(e),bi),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ni,this.targetCount=0,this.kr=an.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new an(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
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
 */class Ff{constructor(t,e){this.qr={},this.overlays={},this.Qr=new vi(0),this.Kr=!1,this.Kr=!0,this.$r=new xf,this.referenceDelegate=t(this),this.Ur=new Of(this),this.indexManager=new Df,this.remoteDocumentCache=function(s){return new Bf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Sf(e),this.Gr=new kf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Mf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new Uf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Uf extends Td{constructor(t){super(),this.currentSequenceNumber=t}}class xi{constructor(t){this.persistence=t,this.Jr=new Ni,this.Yr=null}static Zr(t){return new xi(t)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=q.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,W.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Mi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Mi(t,e.fromCache,r,s)}}/**
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
 */class qf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ju()?8:vd($u())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new $f;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(Nn()<=Z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Nn()<=Z.DEBUG&&L("QueryEngine","Query:",Ye(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Nn()<=Z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,re(e))):V.resolve())}Yi(t,e){if(Da(e))return V.resolve(null);let r=re(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Br(e,null,"F"),r=re(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=X(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Br(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return Da(e)||s.isEqual(W.min())?V.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?V.resolve(null):(Nn()<=Z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ye(e)),this.rs(t,a,e,gd(s,-1)).next(c=>c))})}ts(t,e){let r=new Ct(xl(t));return e.forEach((s,o)=>{Kr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return Nn()<=Z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Ye(e)),this.Ji.getDocumentsMatchingQuery(t,e,we.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class jf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new mt(et),this._s=new pn(o=>Si(o),bi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function zf(n,t,e,r){return new jf(n,t,e,r)}async function ec(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=X();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Hf(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const E=d.batch,v=E.keys();let S=V.resolve();return v.forEach(P=>{S=S.next(()=>m.getEntry(h,P)).next(k=>{const C=d.docVersions.get(P);it(C!==null),k.version.compareTo(C)<0&&(E.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function nc(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Kf(n,t){const e=G(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,E)=>{const v=s.get(E);if(!v)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,E)));let S=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?S=S.withResumeToken(Vt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(E,S),function(k,C,R){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(v,S,m)&&c.push(e.Ur.updateTargetData(o,S))});let h=fe(),d=X();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Wf(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(W.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(E=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return V.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function Wf(n,t,e){let r=X(),s=X();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=fe();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(W.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):L("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function Gf(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Qf(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,V.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new _e(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ui(n,t,e){const r=G(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Zn(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Oa(n,t,e){const r=G(n);let s=W.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const E=G(h),v=E._s.get(m);return v!==void 0?V.resolve(E.os.get(v)):E.Ur.getTargetData(d,m)}(r,a,re(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:W.min(),e?o:X())).next(c=>(Yf(r,Fd(t),c),{documents:c,Ts:o})))}function Yf(n,t,e){let r=n.us.get(t)||W.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Fa{constructor(){this.activeTargetIds=Hd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xf{constructor(){this.so=new Fa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Fa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ua{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Lt="WebChannelConnection";class em extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=Ms(),h=this.xo(e,r.toUriEncodedString());L("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(L("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw nn("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Zf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Ms();return new Promise((a,c)=>{const h=new gl;h.setWithCredentials(!0),h.listenOnce(yl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case br.NO_ERROR:const m=h.getResponseJson();L(Lt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case br.TIMEOUT:L(Lt,`RPC '${t}' ${o} timed out`),c(new x(D.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const E=h.getStatus();if(L(Lt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const P=function(C){const R=C.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(R)>=0?R:D.UNKNOWN}(S.status);c(new x(P,S.message))}else c(new x(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(D.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{L(Lt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);L(Lt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=Ms(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Tl(),c=El(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");L(Lt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let v=!1,S=!1;const P=new tm({Io:C=>{S?L(Lt,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(v||(L(Lt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),v=!0),L(Lt,`RPC '${t}' stream ${s} sending:`,C),E.send(C))},To:()=>E.close()}),k=(C,R,F)=>{C.listen(R,O=>{try{F(O)}catch(z){setTimeout(()=>{throw z},0)}})};return k(E,Mn.EventType.OPEN,()=>{S||(L(Lt,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),k(E,Mn.EventType.CLOSE,()=>{S||(S=!0,L(Lt,`RPC '${t}' stream ${s} transport closed`),P.So())}),k(E,Mn.EventType.ERROR,C=>{S||(S=!0,nn(Lt,`RPC '${t}' stream ${s} transport errored:`,C),P.So(new x(D.UNAVAILABLE,"The operation could not be completed")))}),k(E,Mn.EventType.MESSAGE,C=>{var R;if(!S){const F=C.data[0];it(!!F);const O=F,z=O.error||((R=O[0])===null||R===void 0?void 0:R.error);if(z){L(Lt,`RPC '${t}' stream ${s} received error:`,z);const Q=z.status;let U=function(y){const T=Tt[y];if(T!==void 0)return Hl(T)}(Q),I=z.message;U===void 0&&(U=D.INTERNAL,I="Unknown error status: "+Q+" with message "+z.message),S=!0,P.So(new x(U,I)),E.close()}else L(Lt,`RPC '${t}' stream ${s} received:`,F),P.bo(F)}}),k(c,_l.STAT_EVENT,C=>{C.stat===ti.PROXY?L(Lt,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===ti.NOPROXY&&L(Lt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Bs(){return typeof document<"u"?document:null}/**
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
 */function Yr(n){return new hf(n,!0)}/**
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
 */class rc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class sc{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(de(e.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new x(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nm extends sc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=mf(this.serializer,t),r=function(o){if(!("targetChange"in o))return W.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?se(a.readTime):W.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=ci(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=si(h)?{documents:yf(o,h)}:{query:_f(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Gl(o,a.resumeToken);const d=oi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=Fr(o,a.snapshotVersion.toTimestamp());const d=oi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=Tf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=ci(this.serializer),e.removeTarget=t,this.a_(e)}}class rm extends sc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return it(!!t.streamToken),this.lastStreamToken=t.streamToken,it(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){it(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gf(t.writeResults,t.commitTime),r=se(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ci(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>pf(this.serializer,r))};this.a_(e)}}/**
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
 */class sm extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,ai(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(D.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,ai(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class im{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(de(e),this.D_=!1):L("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class om{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{$e(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=G(h);d.L_.add(4),await nr(d),d.q_.set("Unknown"),d.L_.delete(4),await Xr(d)}(this))})}),this.q_=new im(r,s)}}async function Xr(n){if($e(n))for(const t of n.B_)await t(!0)}async function nr(n){for(const t of n.B_)await t(!1)}function ic(n,t){const e=G(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Fi(e)?Oi(e):gn(e).r_()&&Li(e,t))}function Bi(n,t){const e=G(n),r=gn(e);e.N_.delete(t),r.r_()&&oc(e,t),e.N_.size===0&&(r.r_()?r.o_():$e(e)&&e.q_.set("Unknown"))}function Li(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}gn(n).A_(t)}function oc(n,t){n.Q_.xe(t),gn(n).R_(t)}function Oi(n){n.Q_=new af({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),gn(n).start(),n.q_.v_()}function Fi(n){return $e(n)&&!gn(n).n_()&&n.N_.size>0}function $e(n){return G(n).L_.size===0}function ac(n){n.Q_=void 0}async function am(n){n.q_.set("Online")}async function lm(n){n.N_.forEach((t,e)=>{Li(n,t)})}async function cm(n,t){ac(n),Fi(n)?(n.q_.M_(t),Oi(n)):n.q_.set("Unknown")}async function um(n,t,e){if(n.q_.set("Online"),t instanceof Wl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ur(n,r)}else if(t instanceof Pr?n.Q_.Ke(t):t instanceof Kl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(W.min()))try{const r=await nc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(Vt.EMPTY_BYTE_STRING,m.snapshotVersion)),oc(o,h);const E=new _e(m.target,h,d,m.sequenceNumber);Li(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Ur(n,r)}}async function Ur(n,t,e){if(!Zn(t))throw t;n.L_.add(1),await nr(n),n.q_.set("Offline"),e||(e=()=>nc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Xr(n)})}function lc(n,t){return t().catch(e=>Ur(n,e,t))}async function Jr(n){const t=G(n),e=Se(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hm(t);)try{const s=await Gf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,dm(t,s)}catch(s){await Ur(t,s)}cc(t)&&uc(t)}function hm(n){return $e(n)&&n.O_.length<10}function dm(n,t){n.O_.push(t);const e=Se(n);e.r_()&&e.V_&&e.m_(t.mutations)}function cc(n){return $e(n)&&!Se(n).n_()&&n.O_.length>0}function uc(n){Se(n).start()}async function fm(n){Se(n).p_()}async function mm(n){const t=Se(n);for(const e of n.O_)t.m_(e.mutations)}async function pm(n,t,e){const r=n.O_.shift(),s=Ci.from(r,t,e);await lc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Jr(n)}async function gm(n,t){t&&Se(n).V_&&await async function(r,s){if(function(a){return rf(a)&&a!==D.ABORTED}(s.code)){const o=r.O_.shift();Se(r).s_(),await lc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Jr(r)}}(n,t),cc(n)&&uc(n)}async function $a(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=$e(e);e.L_.add(3),await nr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Xr(e)}async function ym(n,t){const e=G(n);t?(e.L_.delete(2),await Xr(e)):t||(e.L_.add(2),await nr(e),e.q_.set("Unknown"))}function gn(n){return n.K_||(n.K_=function(e,r,s){const o=G(e);return o.w_(),new nm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:am.bind(null,n),Ro:lm.bind(null,n),mo:cm.bind(null,n),d_:um.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Fi(n)?Oi(n):n.q_.set("Unknown")):(await n.K_.stop(),ac(n))})),n.K_}function Se(n){return n.U_||(n.U_=function(e,r,s){const o=G(e);return o.w_(),new rm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fm.bind(null,n),mo:gm.bind(null,n),f_:mm.bind(null,n),g_:pm.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Jr(n)):(await n.U_.stop(),n.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ui{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Ui(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $i(n,t){if(de("AsyncQueue",`${t}: ${n}`),Zn(n))return new x(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class tn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=Bn(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new tn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof tn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class qa{constructor(){this.W_=new mt(q.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):K():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ln{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new ln(t,e,tn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _m{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Em{constructor(){this.queries=ja(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=G(e),o=s.queries;s.queries=ja(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new x(D.ABORTED,"Firestore shutting down"))}}function ja(){return new pn(n=>Nl(n),Hr)}async function hc(n,t){const e=G(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new _m,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=$i(a,`Initialization of query '${Ye(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&qi(e)}async function dc(n,t){const e=G(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Tm(n,t){const e=G(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&qi(e)}function vm(n,t,e){const r=G(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function qi(n){n.Y_.forEach(t=>{t.next()})}var hi,za;(za=hi||(hi={})).ea="default",za.Cache="cache";class fc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ln(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=ln.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==hi.Cache}}/**
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
 */class mc{constructor(t){this.key=t}}class pc{constructor(t){this.key=t}}class Im{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=xl(t),this.Ra=new tn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new qa,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const v=s.get(m),S=Kr(this.query,E)?E:null,P=!!v&&this.mutatedKeys.has(v.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;v&&S?v.data.isEqual(S.data)?P!==k&&(r.track({type:3,doc:S}),C=!0):this.ga(v,S)||(r.track({type:2,doc:S}),C=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!v&&S?(r.track({type:0,doc:S}),C=!0):v&&!S&&(r.track({type:1,doc:v}),C=!0,(h||d)&&(c=!0)),C&&(S?(a=a.add(S),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,E)=>function(S,P){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return k(S)-k(P)}(m.type,E.type)||this.Aa(m.doc,E.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new ln(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qa,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new pc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new mc(r))}),e}ba(t){this.Ta=t.Ts,this.da=X();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return ln.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Am{constructor(t){this.key=t,this.va=!1}}class Sm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new pn(c=>Nl(c),Hr),this.Ma=new Map,this.xa=new Set,this.Oa=new mt(q.comparator),this.Na=new Map,this.La=new Ni,this.Ba={},this.ka=new Map,this.qa=an.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function bm(n,t,e=!0){const r=vc(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await gc(r,t,e,!0),s}async function Dm(n,t){const e=vc(n);await gc(e,t,!0,!1)}async function gc(n,t,e,r){const s=await Qf(n.localStore,re(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Rm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ic(n.remoteStore,s),c}async function Rm(n,t,e,r,s){n.Ka=(E,v,S)=>async function(k,C,R,F){let O=C.view.ma(R);O.ns&&(O=await Oa(k.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,O)));const z=F&&F.targetChanges.get(C.targetId),Q=F&&F.targetMismatches.get(C.targetId)!=null,U=C.view.applyChanges(O,k.isPrimaryClient,z,Q);return Ka(k,C.targetId,U.wa),U.snapshot}(n,E,v,S);const o=await Oa(n.localStore,t,!0),a=new Im(t,o.Ts),c=a.ma(o.documents),h=er.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Ka(n,e,d.wa);const m=new wm(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function Pm(n,t,e){const r=G(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Hr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ui(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Bi(r.remoteStore,s.targetId),di(r,s.targetId)}).catch(Jn)):(di(r,s.targetId),await ui(r.localStore,s.targetId,!0))}async function Cm(n,t){const e=G(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Bi(e.remoteStore,r.targetId))}async function Vm(n,t,e){const r=Om(n);try{const s=await function(a,c){const h=G(a),d=j.now(),m=c.reduce((S,P)=>S.add(P.key),X());let E,v;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=fe(),k=X();return h.cs.getEntries(S,m).next(C=>{P=C,P.forEach((R,F)=>{F.isValidDocument()||(k=k.add(R))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,P)).next(C=>{E=C;const R=[];for(const F of c){const O=Jd(F,E.get(F.key).overlayedDocument);O!=null&&R.push(new be(F.key,O,Sl(O.value.mapValue),Yt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,R,c)}).next(C=>{v=C;const R=C.applyToLocalDocumentSet(E,k);return h.documentOverlayCache.saveOverlays(S,C.batchId,R)})}).then(()=>({batchId:v.batchId,changes:Bl(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new mt(et)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await rr(r,s.changes),await Jr(r.remoteStore)}catch(s){const o=$i(s,"Failed to persist write");e.reject(o)}}async function yc(n,t){const e=G(n);try{const r=await Kf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(it(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?it(a.va):s.removedDocuments.size>0&&(it(a.va),a.va=!1))}),await rr(e,r,t)}catch(r){await Jn(r)}}function Ha(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=G(a);h.onlineState=c;let d=!1;h.queries.forEach((m,E)=>{for(const v of E.j_)v.Z_(c)&&(d=!0)}),d&&qi(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function km(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new mt(q.comparator);a=a.insert(o,Ft.newNoDocument(o,W.min()));const c=X().add(o),h=new Qr(W.min(),new Map,new mt(et),a,c);await yc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),ji(r)}else await ui(r.localStore,t,!1).then(()=>di(r,t,e)).catch(Jn)}async function Nm(n,t){const e=G(n),r=t.batch.batchId;try{const s=await Hf(e.localStore,t);Ec(e,r,null),_c(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await rr(e,s)}catch(s){await Jn(s)}}async function xm(n,t,e){const r=G(n);try{const s=await function(a,c){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(E=>(it(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Ec(r,t,e),_c(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await rr(r,s)}catch(s){await Jn(s)}}function _c(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Ec(n,t,e){const r=G(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function di(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Tc(n,r)})}function Tc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Bi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ji(n))}function Ka(n,t,e){for(const r of e)r instanceof mc?(n.La.addReference(r.key,t),Mm(n,r)):r instanceof pc?(L("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Tc(n,r.key)):K()}function Mm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(L("SyncEngine","New document in limbo: "+e),n.xa.add(r),ji(n))}function ji(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new q(ft.fromString(t)),r=n.qa.next();n.Na.set(r,new Am(e)),n.Oa=n.Oa.insert(e,r),ic(n.remoteStore,new _e(re(Di(e.path)),r,"TargetPurposeLimboResolution",vi.oe))}}async function rr(n,t,e){const r=G(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=Mi.Wi(h.targetId,d);o.push(E)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=G(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>V.forEach(d,v=>V.forEach(v.$i,S=>m.persistence.referenceDelegate.addReference(E,v.targetId,S)).next(()=>V.forEach(v.Ui,S=>m.persistence.referenceDelegate.removeReference(E,v.targetId,S)))))}catch(E){if(!Zn(E))throw E;L("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const v=E.targetId;if(!E.fromCache){const S=m.os.get(v),P=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(P);m.os=m.os.insert(v,k)}}}(r.localStore,o))}async function Bm(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const r=await ec(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new x(D.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await rr(e,r.hs)}}function Lm(n,t){const e=G(n),r=e.Na.get(t);if(r&&r.va)return X().add(r.key);{let s=X();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function vc(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=yc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=km.bind(null,t),t.Ca.d_=Tm.bind(null,t.eventManager),t.Ca.$a=vm.bind(null,t.eventManager),t}function Om(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xm.bind(null,t),t}class $r{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Yr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return zf(this.persistence,new qf,t.initialUser,this.serializer)}Ga(t){return new Ff(xi.Zr,this.serializer)}Wa(t){return new Xf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$r.provider={build:()=>new $r};class fi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ha(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bm.bind(null,this.syncEngine),await ym(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Em}()}createDatastore(t){const e=Yr(t.databaseInfo.databaseId),r=function(o){return new em(o)}(t.databaseInfo);return function(o,a,c,h){return new sm(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new om(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ha(this.syncEngine,e,0),function(){return Ua.D()?new Ua:new Jf}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const E=new Sm(s,o,a,c,h,d);return m&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=G(s);L("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await nr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}fi.provider={build:()=>new fi};/**
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
 */class Ic{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):de("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Fm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=Il.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{L("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$i(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ls(n,t){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ec(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Wa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Um(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>$a(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>$a(t.remoteStore,s)),n._onlineComponents=t}async function Um(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ls(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;nn("Error using user provided cache. Falling back to memory cache: "+e),await Ls(n,new $r)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Ls(n,new $r);return n._offlineComponents}async function wc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Wa(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Wa(n,new fi))),n._onlineComponents}function $m(n){return wc(n).then(t=>t.syncEngine)}async function Ac(n){const t=await wc(n),e=t.eventManager;return e.onListen=bm.bind(null,t.syncEngine),e.onUnlisten=Pm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Cm.bind(null,t.syncEngine),e}function qm(n,t,e={}){const r=new ce;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Ic({next:v=>{m.Za(),a.enqueueAndForget(()=>dc(o,E));const S=v.docs.has(c);!S&&v.fromCache?d.reject(new x(D.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&h&&h.source==="server"?d.reject(new x(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),E=new fc(Di(c.path),m,{includeMetadataChanges:!0,_a:!0});return hc(o,E)}(await Ac(n),n.asyncQueue,t,e,r)),r.promise}function jm(n,t,e={}){const r=new ce;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Ic({next:v=>{m.Za(),a.enqueueAndForget(()=>dc(o,E)),v.fromCache&&h.source==="server"?d.reject(new x(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),E=new fc(c,m,{includeMetadataChanges:!0,_a:!0});return hc(o,E)}(await Ac(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Sc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ga=new Map;/**
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
 */function bc(n,t,e){if(!e)throw new x(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function zm(n,t,e,r){if(t===!0&&r===!0)throw new x(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Qa(n){if(!q.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ya(n){if(q.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K()}function ee(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zr(n);throw new x(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Hm(n,t){if(t<=0)throw new x(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class Xa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ts{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ad;switch(r.type){case"firstParty":return new hd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ga.get(e);r&&(L("ComponentProvider","Removing Datastore"),Ga.delete(e),r.terminate())}(this),Promise.resolve()}}function Km(n,t,e,r={}){var s;const o=(n=ee(n,ts))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Ot.MOCK_USER;else{c=Uu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ot(d)}n._authCredentials=new ld(new vl(c,h))}}/**
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
 */class De{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new De(this.firestore,t,this._query)}}class zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zt(this.firestore,t,this._key)}}class Ie extends De{constructor(t,e,r){super(t,e,Di(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zt(this.firestore,null,new q(t))}withConverter(t){return new Ie(this.firestore,t,this._path)}}function _t(n,t,...e){if(n=ue(n),bc("collection","path",t),n instanceof ts){const r=ft.fromString(t,...e);return Ya(r),new Ie(n,null,r)}{if(!(n instanceof zt||n instanceof Ie))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Ya(r),new Ie(n.firestore,null,r)}}function yn(n,t,...e){if(n=ue(n),arguments.length===1&&(t=Il.newId()),bc("doc","path",t),n instanceof ts){const r=ft.fromString(t,...e);return Qa(r),new zt(n,null,new q(r))}{if(!(n instanceof zt||n instanceof Ie))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Qa(r),new zt(n.firestore,n instanceof Ie?n.converter:null,new q(r))}}/**
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
 */class Ja{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rc(this,"async_queue_retry"),this.Vu=()=>{const r=Bs();r&&L("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Bs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ce;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Zn(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw de("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Ui.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class qe extends ts{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ja,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ja(t),this._firestoreClient=void 0,await t}}}function Wm(n,t){const e=typeof n=="object"?n:Qh(),r=typeof n=="string"?n:"(default)",s=Hh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ou("firestore");o&&Km(s,...o)}return s}function zi(n){if(n._terminated)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gm(n),n._firestoreClient}function Gm(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new Ad(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Sc(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Fm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class cn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new cn(Vt.fromBase64String(t))}catch(e){throw new x(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new cn(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class es{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Hi{constructor(t){this._methodName=t}}/**
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
 */class Ki{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return et(this._lat,t._lat)||et(this._long,t._long)}}/**
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
 */class Wi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Qm=/^__.*__$/;class Ym{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new be(t,this.data,this.fieldMask,e,this.fieldTransforms):new tr(t,this.data,e,this.fieldTransforms)}}class Dc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new be(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Rc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Gi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Gi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return qr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Rc(this.Cu)&&Qm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Xm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Yr(t)}Qu(t,e,r,s=!1){return new Gi({Cu:t,methodName:e,qu:r,path:Pt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ns(n){const t=n._freezeSettings(),e=Yr(n._databaseId);return new Xm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Pc(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);Qi("Data must be an object, but it was:",a,r);const c=Cc(r,a);let h,d;if(o.merge)h=new Gt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const v=mi(t,E,e);if(!a.contains(v))throw new x(D.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);kc(m,v)||m.push(v)}h=new Gt(m),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new Ym(new Ht(c),h,d)}class rs extends Hi{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof rs}}function Jm(n,t,e,r){const s=n.Qu(1,t,e);Qi("Data must be an object, but it was:",s,r);const o=[],a=Ht.empty();Ue(r,(h,d)=>{const m=Yi(t,h,e);d=ue(d);const E=s.Nu(m);if(d instanceof rs)o.push(m);else{const v=sr(d,E);v!=null&&(o.push(m),a.set(m,v))}});const c=new Gt(o);return new Dc(a,c,s.fieldTransforms)}function Zm(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[mi(t,r,e)],h=[s];if(o.length%2!=0)throw new x(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<o.length;v+=2)c.push(mi(t,o[v])),h.push(o[v+1]);const d=[],m=Ht.empty();for(let v=c.length-1;v>=0;--v)if(!kc(d,c[v])){const S=c[v];let P=h[v];P=ue(P);const k=a.Nu(S);if(P instanceof rs)d.push(S);else{const C=sr(P,k);C!=null&&(d.push(S),m.set(S,C))}}const E=new Gt(d);return new Dc(m,E,a.fieldTransforms)}function tp(n,t,e,r=!1){return sr(e,n.Qu(r?4:3,t))}function sr(n,t){if(Vc(n=ue(n)))return Qi("Unsupported field value:",t,n),Cc(n,t);if(n instanceof Hi)return function(r,s){if(!Rc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=sr(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=j.fromDate(r);return{timestampValue:Fr(s.serializer,o)}}if(r instanceof j){const o=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fr(s.serializer,o)}}if(r instanceof Ki)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:Gl(s.serializer,r._byteString)};if(r instanceof zt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ki(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ri(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Zr(r)}`)}(n,t)}function Cc(n,t){const e={};return wl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ue(n,(r,s)=>{const o=sr(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Vc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof j||n instanceof Ki||n instanceof cn||n instanceof zt||n instanceof Hi||n instanceof Wi)}function Qi(n,t,e){if(!Vc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Zr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function mi(n,t,e){if((t=ue(t))instanceof es)return t._internalPath;if(typeof t=="string")return Yi(n,t);throw qr("Field path arguments must be of type string or ",n,!1,void 0,e)}const ep=new RegExp("[~\\*/\\[\\]]");function Yi(n,t,e){if(t.search(ep)>=0)throw qr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new es(...t.split("."))._internalPath}catch{throw qr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function qr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(D.INVALID_ARGUMENT,c+n+h)}function kc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Nc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new np(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ss("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class np extends Nc{data(){return super.data()}}function ss(n,t){return typeof t=="string"?Yi(n,t):t instanceof es?t._internalPath:t._delegate._internalPath}/**
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
 */function rp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xi{}class Ji extends Xi{}function vt(n,t,...e){let r=[];t instanceof Xi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Zi).length,c=o.filter(h=>h instanceof is).length;if(a>1||a>0&&c>0)throw new x(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class is extends Ji{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new is(t,e,r)}_apply(t){const e=this._parse(t);return xc(t._query,e),new De(t.firestore,t.converter,ii(t._query,e))}_parse(t){const e=ns(t.firestore);return function(o,a,c,h,d,m,E){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){tl(E,m);const S=[];for(const P of E)S.push(Za(h,o,P));v={arrayValue:{values:S}}}else v=Za(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||tl(E,m),v=tp(c,a,E,m==="in"||m==="not-in");return wt.create(d,m,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Y(n,t,e){const r=t,s=ss("where",n);return is._create(s,r,e)}class Zi extends Xi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Zi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:te.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)xc(a,h),a=ii(a,h)}(t._query,e),new De(t.firestore,t.converter,ii(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class to extends Ji{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new to(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new x(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qn(o,a)}(t._query,this._field,this._direction);return new De(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new mn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function It(n,t="asc"){const e=t,r=ss("orderBy",n);return to._create(r,e)}class eo extends Ji{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new eo(t,e,r)}_apply(t){return new De(t.firestore,t.converter,Br(t._query,this._limit,this._limitType))}}function _n(n){return Hm("limit",n),eo._create("limit",n,"F")}function Za(n,t,e){if(typeof(e=ue(e))=="string"){if(e==="")throw new x(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kl(t)&&e.indexOf("/")!==-1)throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ft.fromString(e));if(!q.isDocumentKey(r))throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return va(n,new q(r))}if(e instanceof zt)return va(n,e._key);throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zr(e)}.`)}function tl(n,t){if(!Array.isArray(n)||n.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class sp{convertValue(t,e="none"){switch(Fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw K()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ue(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>yt(a.doubleValue));return new Wi(o)}convertGeoPoint(t){return new Ki(yt(t.latitude),yt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=wi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Kn(t));default:return null}}convertTimestamp(t){const e=Ae(t);return new j(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ft.fromString(t);it(tc(r));const s=new Wn(r.get(1),r.get(3)),o=new q(r.popFirst(5));return s.isEqual(e)||de(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Mc(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bc extends Nc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ss("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Cr extends Bc{data(t={}){return super.data(t)}}class ip{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new On(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Cr(this._firestore,this._userDataWriter,r.key,r,new On(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new Cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new On(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new On(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:op(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function op(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function Lc(n){n=ee(n,zt);const t=ee(n.firestore,qe);return qm(zi(t),n._key).then(e=>hp(t,n,e))}class Oc extends sp{constructor(t){super(),this.firestore=t}convertBytes(t){return new cn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zt(this.firestore,null,e)}}function At(n){n=ee(n,De);const t=ee(n.firestore,qe),e=zi(t),r=new Oc(t);return rp(n._query),jm(e,n._query).then(s=>new ip(t,r,n,s))}function ap(n,t,e){n=ee(n,zt);const r=ee(n.firestore,qe),s=Mc(n.converter,t);return os(r,[Pc(ns(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Yt.none())])}function lp(n,t,e,...r){n=ee(n,zt);const s=ee(n.firestore,qe),o=ns(s);let a;return a=typeof(t=ue(t))=="string"||t instanceof es?Zm(o,"updateDoc",n._key,t,e,r):Jm(o,"updateDoc",n._key,t),os(s,[a.toMutation(n._key,Yt.exists(!0))])}function cp(n){return os(ee(n.firestore,qe),[new Pi(n._key,Yt.none())])}function up(n,t){const e=ee(n.firestore,qe),r=yn(n),s=Mc(n.converter,t);return os(e,[Pc(ns(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function os(n,t){return function(r,s){const o=new ce;return r.asyncQueue.enqueueAndForget(async()=>Vm(await $m(r),s,o)),o.promise}(zi(n),t)}function hp(n,t,e){const r=e.docs.get(t._key),s=new Oc(n);return new Bc(n,s,t._key,r,new On(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){fn=s})(Gh),Nr(new jn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new qe(new cd(r.getProvider("auth-internal")),new fd(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ze(ga,"4.7.3",t),Ze(ga,"4.7.3","esm2017")})();const dp="55555",pi="baby-tracker-auth",fp=24*60*60*1e3,mp={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},pp=dl(mp),ct=Wm(pp);function gp(){const n=localStorage.getItem(pi);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<fp?!0:(localStorage.removeItem(pi),!1)}catch{return!1}}function yp(){const n={timestamp:Date.now()};localStorage.setItem(pi,JSON.stringify(n))}let Qt=un(new Date),jr=null,Os=null,Fs=null,Us=null,$s=null,qs=null,js=null,zs=null,Hs=null,Ne=0,Qe=0;function no(){return localStorage.getItem("selectedTimezone")||"America/New_York"}function Rt(n,t){const e=no(),r=new Intl.DateTimeFormat("en-US",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(n),s=a=>{var c;return parseInt(((c=r.find(h=>h.type===a))==null?void 0:c.value)||"0",10)};let o=s("hour");return o===24&&(o=0),new Date(s("year"),s("month")-1,s("day"),o,s("minute"),s("second"))}function Xt(n){return Rt(new Date)}function ut(n){const[t,e]=n.split("T"),[r,s,o]=t.split("-").map(Number),[a,c]=e.split(":").map(Number),h=no(),d=new Date(Date.UTC(r,s-1,o,a,c)),m=new Intl.DateTimeFormat("en-US",{timeZone:h,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(d),E=C=>{var R;return parseInt(((R=m.find(F=>F.type===C))==null?void 0:R.value)||"0",10)};let v=E("hour");v===24&&(v=0);const S=new Date(E("year"),E("month")-1,E("day"),v,E("minute")),P=new Date(r,s-1,o,a,c),k=S.getTime()-P.getTime();return new Date(d.getTime()-k)}function el(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function un(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return t.setDate(r),t.setHours(0,0,0,0),t}function _p(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function Zt(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function jt(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function gi(n){const t=Rt(n),e=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),s=t.getFullYear(),o=t.getHours(),a=String(t.getMinutes()).padStart(2,"0"),c=o>=12?"PM":"AM",h=o%12||12;return`${e}/${r}/${s} ${h}:${a} ${c}`}function yi(n){const t=Rt(n),e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),o=t.getFullYear();return`${e[t.getDay()]}, ${r}/${s}/${o}`}function Fc(n){const t=Rt(n),e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${r}-${s}`}async function as(){const n=document.getElementById("vitamin-d-checkbox"),t=document.getElementById("vitamin-d-status"),e=document.getElementById("vitamin-d-label-text");if(!n||!t||!e)return;const s=Fc(new Date);try{const o=await Lc(yn(ct,"vitaminD",s));if(o.exists()){const a=o.data();n.checked=a.given===!0}else n.checked=!1;e.textContent=n.checked?"Vitamin D drop given":"Record Vitamin D drop",t.textContent="",t.style.display="none"}catch(o){console.error("Error loading vitamin D status:",o),t.className="error",t.textContent="Failed to load vitamin D status",t.style.display="block"}}function Uc(){zs&&clearTimeout(zs);const n=new Date,t=Xt(),e=new Date(t);e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const s=ut(Zt(e)).getTime()-n.getTime();zs=window.setTimeout(()=>{as(),Uc()},s)}async function Ep(n){const t=n.target,e=document.getElementById("vitamin-d-status"),r=document.getElementById("vitamin-d-label-text");if(!e||!r)return;const s=new Date,o=Fc(s);try{await ap(yn(ct,"vitaminD",o),{given:t.checked,date:j.fromDate(s)}),r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop",e.style.display="none"}catch(a){console.error("Error saving vitamin D status:",a),e.className="error",e.textContent="Failed to save vitamin D status",e.style.display="block",t.checked=!t.checked,r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop"}}function nl(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===dp?(n.blur(),yp(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),$c()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function $c(){Ip(),ls(),qc(),Fp(),Tp(),vp(),as(),Uc(),window.scrollTo(0,0)}function qc(){const n=Xt(),t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter");t&&(t.value=jt(n)),e&&(e.value=jt(n))}function Tp(){[document.getElementById("bottle-amount"),document.getElementById("edit-bottle-amount"),document.getElementById("edit-pump-amount")].forEach(t=>{t&&(t.addEventListener("keypress",e=>{const r=e.key,s=t.value;e.key==="Backspace"||e.key==="Delete"||e.key==="Tab"||e.key==="Escape"||e.key==="Enter"||e.ctrlKey||e.metaKey||r>="0"&&r<="9"||r==="."&&s.indexOf(".")===-1||e.preventDefault()}),t.addEventListener("paste",e=>{var c;e.preventDefault();const s=(((c=e.clipboardData)==null?void 0:c.getData("text"))||"").replace(/[^0-9.]/g,""),o=s.split("."),a=o.length>2?o[0]+"."+o.slice(1).join(""):s;document.execCommand("insertText",!1,a)}))})}function vp(){const n=document.getElementById("bottle-unit"),t=document.getElementById("bottle-amount"),e=document.getElementById("edit-bottle-unit"),r=document.getElementById("edit-bottle-amount"),s=document.getElementById("edit-pump-unit"),o=document.getElementById("edit-pump-amount");n&&t&&n.addEventListener("change",()=>{Ks(t,n.value)}),e&&r&&e.addEventListener("change",()=>{Ks(r,e.value)}),s&&o&&s.addEventListener("change",()=>{Ks(o,s.value)})}function Ks(n,t){const e=parseFloat(n.value);if(isNaN(e)||e<=0)return;const r=n.dataset.lastUnit||"oz";if(r===t)return;let s;if(t==="ml"&&r==="oz")s=e*29.5735;else if(t==="oz"&&r==="ml")s=e*.033814;else return;n.value=s.toFixed(2),n.dataset.lastUnit=t}function rl(n){return n.value&&ut(n.value)>new Date?(alert("Cannot select future times. Please select a time in the past."),n.value=Zt(Xt()),!1):!0}function le(n){const t=document.getElementById(n);t&&(t.addEventListener("blur",()=>{rl(t)}),t.addEventListener("change",()=>{rl(t)}))}function Ws(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block",as()):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",je(),Ee()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",kp()),window.scrollTo(0,0)}function Ip(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",Ap);const e=document.getElementById("bottle-type");e&&e.addEventListener("change",Sp),Dp();const r=document.getElementById("edit-bottle-type");r&&r.addEventListener("change",bp),Rp(),t.addEventListener("click",Pp);const s=document.getElementById("vitamin-d-checkbox");s&&s.addEventListener("change",Ep);const o=document.getElementById("refresh-button");o&&o.addEventListener("click",()=>{window.location.reload()});const a=document.getElementById("entry-tab"),c=document.getElementById("timeline-tab"),h=document.getElementById("weekly-tab");a.addEventListener("click",()=>Ws("entry")),c.addEventListener("click",()=>Ws("timeline")),h.addEventListener("click",()=>Ws("weekly"));const d=document.getElementById("prev-week"),m=document.getElementById("next-week"),E=document.getElementById("current-week");d.addEventListener("click",()=>sl(-1)),m.addEventListener("click",()=>sl(1)),E&&E.addEventListener("click",xp);const v=document.getElementById("save-edit"),S=document.getElementById("cancel-edit");v.addEventListener("click",Lp),S.addEventListener("click",jc);const P=document.getElementById("start-date-filter"),k=document.getElementById("end-date-filter"),C=document.getElementById("type-filter"),R=document.getElementById("today-button"),F=document.getElementById("yesterday-button"),O=document.getElementById("two-days-ago-button"),z=document.getElementById("three-days-ago-button"),Q=document.getElementById("all-time-button");P.addEventListener("change",()=>Ee()),k.addEventListener("change",()=>Ee()),C.addEventListener("change",()=>Ee()),R.addEventListener("click",()=>xn("today")),F.addEventListener("click",()=>xn("yesterday")),O.addEventListener("click",()=>xn("two-days-ago")),z.addEventListener("click",()=>xn("three-days-ago")),Q.addEventListener("click",()=>xn("all-time")),le("bottle-time"),le("diaper-time"),le("solids-start-time"),le("sleep-start-time"),le("edit-bottle-time"),le("edit-diaper-time"),le("edit-pump-start-time"),le("edit-sleep-start-time"),le("edit-solids-start-time");const U=document.getElementById("graph-start-date"),I=document.getElementById("graph-end-date");if(U&&I){const T=new Date(2025,10,5);U.value=jt(T),I.value=jt(Xt())}const g=document.getElementById("update-graph-btn");g&&g.addEventListener("click",Np);const y=document.getElementById("timezone-select");y&&(y.value=no(),y.addEventListener("change",()=>{localStorage.setItem("selectedTimezone",y.value),ls(),qc(),as(),cs(),Ee(),je()}))}function ls(){const n=Xt(),t=Zt(n),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("solids-start-time"),o=document.getElementById("sleep-start-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t),o&&(o.value="")}async function wp(){const n=document.getElementById("submit-entry"),t=document.getElementById("submit-status");try{const e=vt(_t(ct,"entries"),Y("type","==","Sleep"),It("startTime","desc"),_n(1)),r=await At(e);if(!r.empty){const s=r.docs[0].data();if(!s.endTime){const o=s.startTime.toDate();n.style.display="none",t.className="error",t.textContent=`Sleep entry ongoing since ${gi(o)}. End that entry before adding a new one.`,t.style.display="block"}}}catch(e){console.error("Error checking ongoing sleep:",e)}}function Ap(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("sleep-fields"),a=document.getElementById("solids-fields"),c=document.getElementById("submit-entry"),h=document.getElementById("submit-status"),d=document.getElementById("bottle-type-container");if(r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none",d.style.display="none",h.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"){r.style.display="block",c.style.display="block";const m=document.getElementById("bottle-unit"),E=document.getElementById("bottle-amount");E.dataset.lastUnit=m.value,e==="bottle-formula"&&(d.style.display="block")}else e==="diaper"?(s.style.display="block",c.style.display="block"):e==="sleep"?(o.style.display="block",c.style.display="block",wp()):e==="solids"?(a.style.display="block",c.style.display="block"):c.style.display="none";ls()}function Sp(n){const e=n.target.value,r=document.getElementById("bottle-notes"),s=document.getElementById("bottle-type-indicator"),o=document.getElementById("bottle-type-text");if(!r)return;const a=r.value,c=a.split(`
`),h=c.length>0&&(c[0]==="Bobbie"||c[0]==="Enfamil");e==="Other"?(h&&(c.splice(0,1),r.value=c.join(`
`)),s&&o&&(o.textContent="Other",s.style.display="block")):e?(h?(c[0]=e,r.value=c.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function bp(n){const e=n.target.value,r=document.getElementById("edit-bottle-notes"),s=document.getElementById("edit-bottle-type-indicator"),o=document.getElementById("edit-bottle-type-text");if(!r)return;const a=r.value,c=a.split(`
`),h=c.length>0&&(c[0]==="Bobbie"||c[0]==="Enfamil");e==="Other"?(h&&(c.splice(0,1),r.value=c.join(`
`)),s&&o&&(o.textContent="Other",s.style.display="block")):e?(h?(c[0]=e,r.value=c.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function Dp(){const n=document.getElementById("bottle-notes"),t=document.getElementById("bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e||e==="Other")return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r||r==="Other")return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r||r==="Other")return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}function Rp(){const n=document.getElementById("edit-bottle-notes"),t=document.getElementById("edit-bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e||e==="Other")return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r||r==="Other")return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r||r==="Other")return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}async function Pp(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),c=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const d=ut(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");if(n==="bottle-formula"&&!document.getElementById("bottle-type").value)throw new Error("Formula type is required");const m=n==="bottle-formula"?document.getElementById("bottle-type").value:void 0;e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:d,amount:a,unit:c,formulaType:m,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,c=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=ut(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:c}}else if(n==="solids"){const s=document.getElementById("solids-start-time"),o=document.getElementById("solids-notes").value;if(!s.value)throw new Error("Start time is required");const a=ut(s.value);if(a>r)throw new Error("Cannot add entries in the future");e={type:"Solids",startTime:a,notes:o}}else if(n==="sleep"){const s=document.getElementById("sleep-start-time"),o=document.getElementById("sleep-end-time"),a=document.getElementById("sleep-notes").value;if(!s.value)throw new Error("Start time is required");const c=ut(s.value);if(c>r)throw new Error("Cannot add entries in the future");const h=vt(_t(ct,"entries"),Y("type","==","Sleep"),It("startTime","desc"),_n(1)),d=await At(h);if(!d.empty&&!d.docs[0].data().endTime)throw new Error("A sleep entry is already ongoing. End that entry before adding a new one.");let m;if(o.value){if(m=ut(o.value),m>r)throw new Error("End time cannot be in the future");if(m<=c)throw new Error("End time must be after start time")}e={type:"Sleep",startTime:c,endTime:m,notes:a}}e&&(await up(_t(ct,"entries"),{...e,startTime:j.fromDate(e.startTime),endTime:e.endTime?j.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",Cp(),e.type==="Feed"?await zc():e.type==="Diaper"?await Hc():e.type==="Sleep"&&(await Yc(),await Jc()),je(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function Cp(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-type").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("solids-notes").value="",document.getElementById("sleep-end-time").value="",document.getElementById("sleep-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("bottle-type-container").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("solids-fields").style.display="none",document.getElementById("sleep-fields").style.display="none",document.getElementById("submit-entry").style.display="none",ls()}function xn(n){const t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter"),r=Xt();if(r.setHours(0,0,0,0),n==="all-time"){const s=new Date(2025,10,5);t.value=jt(s),e.value=jt(r)}else if(n==="today")t.value=jt(r),e.value=jt(r);else if(n==="yesterday"){const s=new Date(r);s.setDate(s.getDate()-1),t.value=jt(s),e.value=jt(s)}else if(n==="two-days-ago"){const s=new Date(r);s.setDate(s.getDate()-2),t.value=jt(s),e.value=jt(s)}else if(n==="three-days-ago"){const s=new Date(r);s.setDate(s.getDate()-3),t.value=jt(s),e.value=jt(s)}Ee()}async function Ee(){const n=++Qe,t=document.getElementById("timeline-list"),e=document.getElementById("timeline-loading"),r=document.getElementById("start-date-filter").value,s=document.getElementById("end-date-filter").value,o=document.getElementById("type-filter").value;e.style.display="block",t.innerHTML="";const a=document.querySelector(".filter-summary");a&&a.remove();try{let c=vt(_t(ct,"entries"),It("startTime","desc"));if(r&&s){const S=ut(`${r}T00:00`),P=ut(`${s}T23:59`);P.setSeconds(59,999),c=vt(_t(ct,"entries"),Y("startTime",">=",j.fromDate(S)),Y("startTime","<=",j.fromDate(P)),It("startTime","desc"))}const h=await At(c);if(n!==Qe)return;let d=[];if(r){const[S,P,k]=r.split("-").map(Number),C=new Date(S,P-1,k-1),R=`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}-${String(C.getDate()).padStart(2,"0")}`,F=ut(`${R}T19:00`),O=ut(`${r}T00:00`),z=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(F)),Y("startTime","<",j.fromDate(O)),It("startTime","desc"));try{(await At(z)).forEach(U=>{d.push({id:U.id,data:U.data()})})}catch(Q){console.error("Error fetching prior evening sleep:",Q)}}if(n!==Qe)return;const m=[],E=new Set;h.forEach(S=>{m.push({id:S.id,data:S.data()}),E.add(S.id)}),d.forEach(S=>{E.has(S.id)||(m.push(S),E.add(S.id))}),m.sort((S,P)=>P.data.startTime.toDate().getTime()-S.data.startTime.toDate().getTime());const v={bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},sleep:{totalMs:0,sessions:0},solids:{sessions:0}};if(m.length===0)t.innerHTML="<p>No entries found.</p>";else{let S="",P=!1;m.forEach(({id:C,data:R})=>{if(o!=="all"){let w="";if(R.type==="Feed"&&R.subType==="Breast Milk"?w="bottle-breast-milk":R.type==="Feed"&&R.subType==="Formula"?w="bottle-formula":R.type==="Diaper"?w="diaper-all":R.type==="Pump"?w="pump":R.type==="Sleep"?w="sleep":R.type==="Solids"&&(w="solids"),o==="bottle-all"){if(R.type!=="Feed")return}else if(o==="diaper-all"){if(R.type!=="Diaper")return}else if(o==="diaper-pee"){if(R.type!=="Diaper"||R.diaperType!=="Pee"&&R.diaperType!=="Mixed")return}else if(o==="diaper-poo"){if(R.type!=="Diaper"||R.diaperType!=="Poo"&&R.diaperType!=="Mixed")return}else if(w!==o)return}if(R.type==="Feed"){const w=en(R.amount,R.unit);v.bottles.total+=w,v.bottles.sessions++,R.subType==="Breast Milk"?v.bottles.breastMilk+=w:R.subType==="Formula"&&(v.bottles.formula+=w)}else R.type==="Diaper"?(v.diapers.total++,R.diaperType==="Pee"?v.diapers.pee++:R.diaperType==="Poo"?v.diapers.poo++:R.diaperType==="Mixed"&&v.diapers.mixed++):R.type==="Sleep"?v.sleep.sessions++:R.type==="Solids"&&v.solids.sessions++;P=!0;const F=R.startTime.toDate(),O=yi(F);if(O!==S){S=O;const w=document.createElement("div");w.className="timeline-date-header",w.textContent=O,t.appendChild(w)}const z=document.createElement("div");z.className="timeline-entry";let Q=R.type,U="",I="";if(R.type==="Feed")Q=`Bottle - ${R.subType}`,U=`<div class="timeline-entry-details">Amount: ${ye(R.amount,R.unit)}</div>`,I="#d9ebf2";else if(R.type==="Breast Feed")Q="Breast Feed",U="",I="#d9ebf2";else if(R.type==="Diaper")U=`<div class="timeline-entry-details">Type: ${R.diaperType}</div>`,I="#fce2d4";else if(R.type==="Pump")U=`<div class="timeline-entry-details">Amount: ${ye(R.amount,R.unit)}</div>`,I="#e2daf2";else if(R.type==="Solids")Q="Solids",I="#f5e6d0";else if(R.type==="Sleep")if(Q="Sleep",I="#d4e8d4",R.endTime){const w=R.startTime.toDate(),p=R.endTime.toDate(),$=p.getTime()-w.getTime(),rt=Math.floor($/(1e3*60*60)),B=Math.floor($%(1e3*60*60)/(1e3*60));U=`<div class="timeline-entry-details">Duration: ${rt}h ${B}m</div>`,U+=`<div class="timeline-entry-details">End: ${gi(p)}</div>`}else U='<div class="timeline-entry-details">In progress</div>';z.style.backgroundColor=I;const g=R.notes?`<div class="timeline-entry-notes">${R.notes.replace(/\n/g,"<br>")}</div>`:"";let y="";if(R.type==="Diaper"&&(R.diaperType==="Poo"||R.diaperType==="Mixed")){const w=F.getTime(),p=[];m.forEach(rt=>{const B=rt.data;B.type==="Diaper"&&(B.diaperType==="Poo"||B.diaperType==="Mixed")&&p.push({time:B.startTime.toDate().getTime()})}),p.sort((rt,B)=>B.time-rt.time);const $=p.findIndex(rt=>rt.time===w);if($>=0&&$<p.length-1){const rt=p[$+1].time;y=`<div class="timeline-entry-details" style="color: #666; font-style: italic;">${((w-rt)/(1e3*60*60)).toFixed(1)} hours since previous poo</div>`}else $>=0&&$===p.length-1&&(z.dataset.needsPriorPoo="true",z.dataset.pooTime=String(w))}z.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${Q}</span>
                        <span class="timeline-entry-time">${gi(F)}</span>
                    </div>
                    ${U}
                    ${g}
                    ${y}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${C}">Edit</button>
                        <button class="delete-button" data-id="${C}">Delete</button>
                    </div>
                `;const T=z.querySelector(".edit-button"),_=z.querySelector(".delete-button");T.addEventListener("click",()=>Bp(C,R)),_.addEventListener("click",()=>Op(C)),t.appendChild(z)});const k=t.querySelectorAll('[data-needs-prior-poo="true"]');for(const C of Array.from(k)){const R=parseInt(C.dataset.pooTime||"0",10);if(R>0)try{const F=vt(_t(ct,"entries"),Y("type","==","Diaper"),Y("startTime","<",j.fromDate(new Date(R))),It("startTime","desc")),O=await At(F);let z=null;if(O.forEach(Q=>{if(z!==null)return;const U=Q.data();(U.diaperType==="Poo"||U.diaperType==="Mixed")&&(z=U.startTime.toDate().getTime())}),z!==null){const Q=(R-z)/36e5,U=document.createElement("div");U.className="timeline-entry-details",U.style.color="#666",U.style.fontStyle="italic",U.textContent=`${Q.toFixed(1)} hours since previous poo`;const I=C.querySelector(".timeline-entry-actions");I?C.insertBefore(U,I):C.appendChild(U)}}catch(F){console.error("Error fetching prior poo entry:",F)}C.removeAttribute("data-needs-prior-poo"),C.removeAttribute("data-poo-time")}if(!P)t.innerHTML="<p>No entries match the selected filters.</p>";else{const C=document.createElement("div");C.className="filter-summary";let R='<div class="summary-header">Summary</div><div class="summary-stats">',F=!1;if(o==="all"||o==="bottle-breast-milk"||o==="bottle-formula"||o==="bottle-all"||o==="solids"){const O=v.bottles.sessions+v.solids.sessions,z=o!=="solids",Q=o==="all"||o==="solids";R+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Feeds</div>
                            <div class="stat-line">Number of feeds: ${O}</div>
                            ${z?`
                            <div class="stat-line">Breast Milk: ${ye(v.bottles.breastMilk,"oz")}</div>
                            <div class="stat-line">Formula: ${ye(v.bottles.formula,"oz")}</div>
                            <div class="stat-line">Total milk volume: ${ye(v.bottles.total,"oz")}</div>
                            `:""}
                            ${Q?`<div class="stat-line">Solid Sessions: ${v.solids.sessions}</div>`:""}
                        </div>
                    `,F=!0}if(o==="all"||o==="diaper-all"||o==="diaper-pee"||o==="diaper-poo"){const O=v.diapers.pee+v.diapers.mixed,z=v.diapers.poo+v.diapers.mixed;R+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${O}</div>
                            <div class="stat-line">Poo: ${z}</div>
                        </div>
                    `,F=!0}if(o==="all"||o==="sleep"){let O=0;if(r&&s){const U=[];m.forEach(lt=>{const ot=lt.data;ot.type==="Sleep"&&U.push({startTime:ot.startTime.toDate(),endTime:ot.endTime?ot.endTime.toDate():null})});const[I,g,y]=r.split("-").map(Number),T=new Date(I,g-1,y);T.setDate(T.getDate()-1);const _=new Date(T);_.setHours(0,0,0,0);const w=new Date(T);w.setHours(23,59,59,999);try{const lt=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(_)),Y("startTime","<=",j.fromDate(w)),It("startTime","asc"));(await At(lt)).forEach(ne=>{const kt=ne.data();U.push({startTime:kt.startTime.toDate(),endTime:kt.endTime?kt.endTime.toDate():null})})}catch(lt){console.error("Error fetching prior sleep entries:",lt)}const[p,$,rt]=s.split("-").map(Number),B=new Date(p,$-1,rt);B.setDate(B.getDate()+1);const M=new Date(B);M.setHours(0,0,0,0);const ht=new Date(B);ht.setHours(23,59,59,999);try{const lt=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(M)),Y("startTime","<=",j.fromDate(ht)),It("startTime","asc"));(await At(lt)).forEach(ne=>{const kt=ne.data();U.push({startTime:kt.startTime.toDate(),endTime:kt.endTime?kt.endTime.toDate():null})})}catch(lt){console.error("Error fetching post sleep entries:",lt)}const pt=new Date(I,g-1,y),st=new Date(p,$-1,rt),Ut=new Date(pt);for(;Ut<=st;){const lt=so(Ut);O+=ro(U,lt.start,lt.end),Ut.setDate(Ut.getDate()+1)}}const z=Math.floor(O/(1e3*60*60)),Q=Math.floor(O%(1e3*60*60)/(1e3*60));R+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Sleep</div>
                            <div class="stat-line">Total sleep: ${z}h ${Q}m</div>
                            <div class="stat-line">Number of sleeps: ${v.sleep.sessions}</div>
                            <div class="stat-line" style="font-size: 11px; color: #888;">prev day 7pm - next day 7am</div>
                        </div>
                    `,F=!0}if(R+="</div>",n===Qe&&F){C.innerHTML=R;const O=document.querySelector(".filter-section");O&&O.parentNode&&O.parentNode.insertBefore(C,t)}}}}catch{n===Qe&&(t.innerHTML='<p class="error">Failed to load timeline</p>')}finally{n===Qe&&(e.style.display="none")}}function ro(n,t,e){let r=0;for(const s of n){if(!s.endTime)continue;const o=Math.max(s.startTime.getTime(),t.getTime()),a=Math.min(s.endTime.getTime(),e.getTime());a>o&&(r+=a-o)}return r}function so(n){const t=new Date(n);t.setHours(0,0,0,0);const e=new Date(t);e.setDate(e.getDate()-1);const r=ut(`${el(e)}T19:00`),s=new Date(t);s.setDate(s.getDate()+1);const o=ut(`${el(s)}T07:00`);return{start:r,end:o}}function Vp(n){const t=Math.floor(n/36e5),e=Math.floor(n%(1e3*60*60)/(1e3*60));return`${t}h ${e}m`}async function je(){const n=++Ne,t=document.getElementById("weekly-stats"),e=document.getElementById("weekly-loading"),r=document.getElementById("week-range"),s=document.getElementById("prev-week"),o=document.getElementById("next-week"),a=document.getElementById("current-week"),c=new Date(2025,10,5),h=un(c),d=Xt(),m=un(d),E=new Date(Qt);E.setHours(0,0,0,0),E<h&&(Qt=new Date(h)),E.getTime()<=h.getTime()?s.disabled=!0:s.disabled=!1,E.getTime()>=m.getTime()?o.disabled=!0:o.disabled=!1,a&&(E.getTime()===m.getTime()?(a.disabled=!0,a.style.backgroundColor="#999",a.style.color="#ccc",a.style.cursor="default"):(a.disabled=!1,a.style.backgroundColor="",a.style.color="",a.style.cursor="pointer"));const v=_p(Qt);r.textContent=`${yi(Qt).split(",")[1].trim()} - ${yi(v).split(",")[1].trim()}`,e.style.display="block",t.innerHTML="";try{const S=vt(_t(ct,"entries"),Y("startTime",">=",j.fromDate(Qt)),Y("startTime","<=",j.fromDate(v)),It("startTime","asc")),P=await At(S);if(n!==Ne)return;const k=new Date("2025-11-11");k.setHours(0,0,0,0);const C={},R=[];for(let B=0;B<7;B++){const M=new Date(Qt);if(M.setDate(M.getDate()+B),M.setHours(0,0,0,0),M>=k){const ht=`${M.getFullYear()}-${String(M.getMonth()+1).padStart(2,"0")}-${String(M.getDate()).padStart(2,"0")}`;R.push(ht)}}if(R.length>0){const B=await Promise.all(R.map(M=>Lc(yn(ct,"vitaminD",M))));R.forEach((M,ht)=>{var st;const pt=B[ht];C[M]=pt.exists()&&((st=pt.data())==null?void 0:st.given)===!0})}if(n!==Ne)return;const F=[];P.forEach(B=>{const M=B.data();M.type==="Sleep"&&F.push({startTime:M.startTime.toDate(),endTime:M.endTime?M.endTime.toDate():null})});const O=new Date(Qt);O.setDate(O.getDate()-1),O.setHours(0,0,0,0);const z=new Date(Qt);z.setHours(0,0,0,0);const Q=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(O)),Y("startTime","<",j.fromDate(z)),It("startTime","asc")),U=await At(Q);if(n!==Ne)return;U.forEach(B=>{const M=B.data();F.push({startTime:M.startTime.toDate(),endTime:M.endTime?M.endTime.toDate():null})});const I=new Date(v);I.setDate(I.getDate()+1),I.setHours(0,0,0,0);const g=new Date(I);g.setDate(g.getDate()+1),g.setHours(0,0,0,0);const y=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(I)),Y("startTime","<",j.fromDate(g)),It("startTime","asc")),T=await At(y);if(n!==Ne)return;T.forEach(B=>{const M=B.data();F.push({startTime:M.startTime.toDate(),endTime:M.endTime?M.endTime.toDate():null})});const _={};for(let B=0;B<7;B++){const M=new Date(Qt);M.setDate(M.getDate()+B),M.setHours(0,0,0,0);const ht=`${M.getFullYear()}-${M.getMonth()}-${M.getDate()}`,pt=`${M.getFullYear()}-${String(M.getMonth()+1).padStart(2,"0")}-${String(M.getDate()).padStart(2,"0")}`,st=so(M);_[ht]={date:new Date(M),vitaminD:M>=k?C[pt]===!0:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},solids:{sessions:0},sleepMs:ro(F,st.start,st.end)}}P.forEach(B=>{const M=B.data(),ht=M.startTime.toDate(),pt=Rt(ht);pt.setHours(0,0,0,0);const st=`${pt.getFullYear()}-${pt.getMonth()}-${pt.getDate()}`;if(_[st])if(M.type==="Feed"){const Ut=en(M.amount,M.unit);_[st].bottles.total+=Ut,_[st].bottles.sessions++,M.subType==="Breast Milk"?_[st].bottles.breastMilk+=Ut:M.subType==="Formula"&&(_[st].bottles.formula+=Ut)}else M.type==="Breast Feed"?_[st].bottles.sessions++:M.type==="Diaper"?(_[st].diapers.total++,M.diaperType==="Pee"?_[st].diapers.pee++:M.diaperType==="Poo"?_[st].diapers.poo++:M.diaperType==="Mixed"&&_[st].diapers.mixed++):M.type==="Solids"&&_[st].solids.sessions++});const w=Object.keys(_).map(B=>_[B]).sort((B,M)=>B.date.getTime()-M.date.getTime()),p=document.createElement("div");p.className="weekly-scroll-container";const $=Xt();$.setHours(0,0,0,0);let rt=-1;w.forEach((B,M)=>{const ht=document.createElement("div");ht.className="day-stats";const pt=new Date(B.date);pt.setHours(0,0,0,0),$.getTime()===pt.getTime()&&(ht.classList.add("current-day"),rt=M);const st=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][B.date.getDay()],Ut=`${B.date.getMonth()+1}/${B.date.getDate()}`,lt=B.diapers.pee+B.diapers.mixed,ot=B.diapers.poo+B.diapers.mixed;let ne="";if(B.vitaminD!==null){const kt=B.vitaminD?"Yes":"No";ne=`
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${B.vitaminD?"#4caf50":"#f44336"}; font-weight: bold;">${kt}</div>
                    </div>
                `}ht.innerHTML=`
                <div class="day-stats-header">${st}<br>${Ut}</div>
                ${ne}
                <div class="stat-group">
                    <div class="stat-group-title">Feeds</div>
                    <div class="stat-line">Number of feeds: ${B.bottles.sessions+B.solids.sessions}</div>
                    <div class="stat-line">Breast Milk: ${ye(B.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line">Formula: ${ye(B.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total milk volume: ${ye(B.bottles.total,"oz")}</div>
                    <div class="stat-line">Solid Sessions: ${B.solids.sessions}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${lt}</div>
                    <div class="stat-line">Poo: ${ot}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${Vp(B.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(B.date.getDay()+6)%7]} 7pm - ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(B.date.getDay()+1)%7]} 7am</div>
                </div>
            `,p.appendChild(ht)}),t.appendChild(p),rt!==-1&&setTimeout(()=>{const B=p.children[rt];if(B){const M=p.offsetWidth,ht=B.offsetWidth,pt=B.offsetLeft-M/2+ht/2;p.scrollTo({left:Math.max(0,pt),behavior:"smooth"})}},100)}catch{n===Ne&&(t.innerHTML='<p class="error">Failed to load weekly view</p>')}finally{n===Ne&&(e.style.display="none")}}async function kp(){var S,P,k,C,R,F;const n=document.getElementById("json-content"),t=document.getElementById("toggle-json"),e=document.getElementById("copy-json"),r=document.querySelector(".json-tabs"),s=document.getElementById("feeds-json-tab"),o=document.getElementById("diapers-json-tab"),a=document.getElementById("pumps-json-tab"),c=document.getElementById("sleep-json-tab");if(!n||!t||!e)return;let h="feeds",d=[],m=[],E=[],v=[];try{const O=vt(_t(ct,"entries"),It("startTime","desc"));(await At(O)).docs.forEach(p=>{const $=p.data();$.type==="Feed"?d.push({type:$.type,subType:$.subType,startTime:$.startTime.toDate().toISOString(),amount:$.amount,unit:$.unit,notes:$.notes||""}):$.type==="Solids"?d.push({type:$.type,startTime:$.startTime.toDate().toISOString(),notes:$.notes||""}):$.type==="Diaper"?m.push({type:$.type,startTime:$.startTime.toDate().toISOString(),diaperType:$.diaperType,notes:$.notes||""}):$.type==="Pump"?E.push({type:$.type,startTime:$.startTime.toDate().toISOString(),amount:$.amount,unit:$.unit,notes:$.notes||""}):$.type==="Sleep"&&v.push({type:$.type,startTime:$.startTime.toDate().toISOString(),endTime:$.endTime?$.endTime.toDate().toISOString():null,notes:$.notes||""})});const Q=()=>{let p;h==="feeds"?p=d:h==="diapers"?p=m:h==="sleep"?p=v:p=E;const $=JSON.stringify(p,null,2);return n.textContent=$,$};let U=Q();const I=t.cloneNode(!0),g=e.cloneNode(!0),y=s==null?void 0:s.cloneNode(!0),T=o==null?void 0:o.cloneNode(!0),_=a==null?void 0:a.cloneNode(!0),w=c==null?void 0:c.cloneNode(!0);(S=t.parentNode)==null||S.replaceChild(I,t),(P=e.parentNode)==null||P.replaceChild(g,e),s&&y&&((k=s.parentNode)==null||k.replaceChild(y,s)),o&&T&&((C=o.parentNode)==null||C.replaceChild(T,o)),a&&_&&((R=a.parentNode)==null||R.replaceChild(_,a)),c&&w&&((F=c.parentNode)==null||F.replaceChild(w,c)),I.addEventListener("click",()=>{const p=n.style.display==="none";n.style.display=p?"block":"none",g.style.display=p?"block":"none",r&&(r.style.display=p?"flex":"none"),I.textContent=p?"Hide JSON Data":"Show JSON Data"}),g.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(U);const p=g.textContent;g.textContent="✓",setTimeout(()=>{g.textContent=p},2e3)}catch{alert("Failed to copy to clipboard")}}),y&&y.addEventListener("click",()=>{h="feeds",y.classList.add("active"),T.classList.remove("active"),_.classList.remove("active"),w.classList.remove("active"),U=Q()}),T&&T.addEventListener("click",()=>{h="diapers",T.classList.add("active"),y.classList.remove("active"),_.classList.remove("active"),w.classList.remove("active"),U=Q()}),_&&_.addEventListener("click",()=>{h="pumps",_.classList.add("active"),y.classList.remove("active"),T.classList.remove("active"),w.classList.remove("active"),U=Q()}),w&&w.addEventListener("click",()=>{h="sleep",w.classList.add("active"),y.classList.remove("active"),T.classList.remove("active"),_.classList.remove("active"),U=Q()})}catch{n.textContent="Failed to load data"}}async function Np(){const n=document.getElementById("graph-start-date").value,t=document.getElementById("graph-end-date").value;if(!n||!t){alert("Please select both start and end dates");return}const e=[];if(document.querySelectorAll(".graph-checkbox:checked").forEach(nt=>{e.push(nt.dataset.series)}),e.length===0){alert("Please select at least one data series to plot");return}const r=ut(`${n}T00:00`),s=ut(`${t}T23:59`);s.setSeconds(59,999);const o=vt(_t(ct,"entries"),Y("startTime",">=",j.fromDate(r)),Y("startTime","<=",j.fromDate(s)),It("startTime","asc")),a=await At(o),[c,h,d]=n.split("-").map(Number),m=new Date(c,h-1,d-1),E=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`,v=ut(`${E}T00:00`),S=ut(`${n}T00:00`),P=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(v)),Y("startTime","<",j.fromDate(S)),It("startTime","asc")),k=await At(P),[C,R,F]=t.split("-").map(Number),O=new Date(C,R-1,F+1),z=`${O.getFullYear()}-${String(O.getMonth()+1).padStart(2,"0")}-${String(O.getDate()).padStart(2,"0")}`,Q=new Date(C,R-1,F+2),U=`${Q.getFullYear()}-${String(Q.getMonth()+1).padStart(2,"0")}-${String(Q.getDate()).padStart(2,"0")}`,I=ut(`${z}T00:00`),g=ut(`${U}T00:00`),y=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(I)),Y("startTime","<",j.fromDate(g)),It("startTime","asc")),T=await At(y),_={},[w,p,$]=n.split("-").map(Number),rt=new Date(w,p-1,$),[B,M,ht]=t.split("-").map(Number),pt=new Date(B,M-1,ht);for(;rt<=pt;){const nt=`${rt.getFullYear()}-${String(rt.getMonth()+1).padStart(2,"0")}-${String(rt.getDate()).padStart(2,"0")}`;_[nt]={"bottle-breast-milk":0,"bottle-formula":0,"bottle-all":0,"diaper-pee":0,"diaper-poo":0,"diaper-mixed":0,"diaper-all":0,pump:0,sleep:0},rt.setDate(rt.getDate()+1)}const st=[];if(a.forEach(nt=>{const H=nt.data(),Nt=H.startTime.toDate(),Et=jt(Rt(Nt));if(_[Et]){if(H.type==="Feed"&&H.subType==="Breast Milk"){const Kt=en(H.amount,H.unit);_[Et]["bottle-breast-milk"]+=Kt,_[Et]["bottle-all"]+=Kt}else if(H.type==="Feed"&&H.subType==="Formula"){const Kt=en(H.amount,H.unit);_[Et]["bottle-formula"]+=Kt,_[Et]["bottle-all"]+=Kt}else if(H.type==="Diaper")(H.diaperType==="Pee"||H.diaperType==="Mixed")&&_[Et]["diaper-pee"]++,(H.diaperType==="Poo"||H.diaperType==="Mixed")&&_[Et]["diaper-poo"]++,H.diaperType==="Mixed"&&_[Et]["diaper-mixed"]++,_[Et]["diaper-all"]++;else if(H.type==="Pump"){const Kt=en(H.amount,H.unit);_[Et].pump+=Kt}}H.type==="Sleep"&&st.push({startTime:H.startTime.toDate(),endTime:H.endTime?H.endTime.toDate():null})}),k.forEach(nt=>{const H=nt.data();st.push({startTime:H.startTime.toDate(),endTime:H.endTime?H.endTime.toDate():null})}),T.forEach(nt=>{const H=nt.data();st.push({startTime:H.startTime.toDate(),endTime:H.endTime?H.endTime.toDate():null})}),e.includes("sleep"))for(const nt of Object.keys(_)){const[H,Nt,Et]=nt.split("-").map(Number),Kt=new Date(H,Nt-1,Et),ze=so(Kt),En=ro(st,ze.start,ze.end);_[nt].sleep=parseFloat((En/(1e3*60*60)).toFixed(1))}const Ut=Object.keys(_).sort(),lt=[],ot={"bottle-breast-milk":"#4CAF50","bottle-formula":"#2196F3","bottle-all":"#9C27B0","diaper-pee":"#FFEB3B","diaper-poo":"#795548","diaper-mixed":"#FF9800","diaper-all":"#607D8B",pump:"#E91E63",sleep:"#00897B"},ne={"bottle-breast-milk":"Bottle - Breast Milk","bottle-formula":"Bottle - Formula","bottle-all":"Bottle - All","diaper-pee":"Diaper - Pee","diaper-poo":"Diaper - Poo","diaper-mixed":"Diaper - Mixed","diaper-all":"Diaper - All",pump:"Pump",sleep:"Sleep (hrs, 7pm-7am)"};e.forEach(nt=>{lt.push({label:ne[nt],data:Ut.map(H=>_[H][nt]),borderColor:ot[nt],backgroundColor:ot[nt]+"33",tension:.1,fill:!1})});const ir=document.getElementById("data-chart").getContext("2d");Hs&&Hs.destroy(),Hs=new window.Chart(ir,{type:"line",data:{labels:Ut.map(nt=>{const[,H,Nt]=nt.split("-");return`${H}/${Nt}`}),datasets:lt},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:"Baby Tracker Data"},tooltip:{enabled:!0,callbacks:{label:function(nt){let H=nt.dataset.label||"";H&&(H+=": ");const Nt=nt.parsed.y,Et=nt.dataset.label.toLowerCase();return Et.includes("diaper")?H+=Math.round(Nt):Et.includes("sleep")?H+=Nt.toFixed(1)+" hrs":H+=Nt.toFixed(1)+" oz",H}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(nt){return e.every(Nt=>Nt.startsWith("diaper-"))?Math.round(nt):nt%1===0?nt:nt.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count / Hours"}}}}});const Re=document.querySelector(".chart-container");Re&&Re.classList.add("active")}function sl(n){const t=new Date(2025,10,5),e=un(t),r=Xt(),s=un(r),o=new Date(Qt);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const c=new Date(s);c.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>c.getTime()||(Qt=o,je()))}function xp(){Qt=un(Xt()),je()}function en(n,t){return t==="ml"?n*.033814:n}function Mp(n,t){return t==="oz"?n*29.5735:n}function ye(n,t){const e=en(n,t),r=Mp(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function Bp(n,t){jr=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields"),a=document.getElementById("edit-sleep-fields"),c=document.getElementById("edit-solids-fields");r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none",c.style.display="none";const h=t.startTime.toDate();if(t.type==="Feed"){r.style.display="block";const d=document.getElementById("edit-bottle-unit"),m=document.getElementById("edit-bottle-amount"),E=document.getElementById("edit-bottle-type-container"),v=document.getElementById("edit-bottle-type");document.getElementById("edit-bottle-time").value=Zt(Rt(h)),m.value=t.amount.toFixed(2),d.value=t.unit||"oz",m.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";const S=document.getElementById("edit-bottle-type-indicator"),P=document.getElementById("edit-bottle-type-text");if(t.subType==="Formula"){E.style.display="block";let k="";if(t.formulaType)k=t.formulaType;else{const R=(t.notes||"").split(`
`)[0];(R==="Bobbie"||R==="Enfamil")&&(k=R)}v.value=k,k&&S&&P?(P.textContent=k,S.style.display="block"):S&&(S.style.display="none")}else E.style.display="none",v.value="",S&&(S.style.display="none")}else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=Zt(Rt(h)),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const d=document.getElementById("edit-pump-unit"),m=document.getElementById("edit-pump-amount");document.getElementById("edit-pump-start-time").value=Zt(Rt(h)),m.value=t.amount.toFixed(2),d.value=t.unit||"oz",m.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}else t.type==="Sleep"?(a.style.display="block",document.getElementById("edit-sleep-start-time").value=Zt(Rt(h)),t.endTime?document.getElementById("edit-sleep-end-time").value=Zt(Rt(t.endTime.toDate())):document.getElementById("edit-sleep-end-time").value=Zt(Xt()),document.getElementById("edit-sleep-notes").value=t.notes||""):t.type==="Solids"&&(c.style.display="block",document.getElementById("edit-solids-start-time").value=Zt(Rt(h)),document.getElementById("edit-solids-notes").value=t.notes||"");e.style.display="block"}function jc(){const n=document.getElementById("edit-modal");n.style.display="none",jr=null;const t=document.getElementById("edit-status");t.style.display="none"}async function Lp(){if(!jr)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields"),s=document.getElementById("edit-sleep-fields"),o=document.getElementById("edit-solids-fields");let a={};const c=new Date;if(t.style.display==="block"){const h=document.getElementById("edit-bottle-time"),d=h.value,m=parseFloat(document.getElementById("edit-bottle-amount").value),E=document.getElementById("edit-bottle-unit").value,v=document.getElementById("edit-bottle-notes").value,S=document.getElementById("edit-bottle-type-container"),P=document.getElementById("edit-bottle-type").value;if(!d)throw new Error("Start time is required");const k=ut(h.value);if(k>c)throw new Error("Cannot set time in the future");if(isNaN(m)||m<=0)throw new Error("Amount must be greater than 0");if(S.style.display!=="none"&&!P)throw new Error("Formula type is required");a={startTime:j.fromDate(k),amount:m,unit:E,notes:v,formulaType:P||null}}else if(e.style.display==="block"){const h=document.getElementById("edit-diaper-time"),d=h.value,m=document.getElementById("edit-diaper-type").value,E=document.getElementById("edit-diaper-notes").value;if(!d)throw new Error("Start time is required");const v=ut(h.value);if(v>c)throw new Error("Cannot set time in the future");if(!m)throw new Error("Diaper type is required");a={startTime:j.fromDate(v),diaperType:m,notes:E}}else if(r.style.display==="block"){const h=document.getElementById("edit-pump-start-time"),d=h.value,m=parseFloat(document.getElementById("edit-pump-amount").value),E=document.getElementById("edit-pump-unit").value,v=document.getElementById("edit-pump-notes").value;if(!d)throw new Error("Start time is required");const S=ut(h.value);if(S>c)throw new Error("Cannot set time in the future");if(isNaN(m)||m<=0)throw new Error("Amount must be greater than 0");a={startTime:j.fromDate(S),amount:m,unit:E,notes:v}}else if(s.style.display==="block"){const h=document.getElementById("edit-sleep-start-time"),d=document.getElementById("edit-sleep-end-time"),m=document.getElementById("edit-sleep-notes").value;if(!h.value)throw new Error("Start time is required");const E=ut(h.value);if(E>c)throw new Error("Cannot set time in the future");if(a={startTime:j.fromDate(E),notes:m},d.value){const v=ut(d.value);if(v>c)throw new Error("End time cannot be in the future");if(v<=E)throw new Error("End time must be after start time");a.endTime=j.fromDate(v)}else a.endTime=null}else if(o.style.display==="block"){const h=document.getElementById("edit-solids-start-time"),d=document.getElementById("edit-solids-notes").value;if(!h.value)throw new Error("Start time is required");const m=ut(h.value);if(m>c)throw new Error("Cannot set time in the future");a={startTime:j.fromDate(m),notes:d}}await lp(yn(ct,"entries",jr),a),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(async()=>{jc(),Ee(),je(),await cs()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function Op(n){if(confirm("Are you sure you want to delete this entry?"))try{await cp(yn(ct,"entries",n)),Ee(),je(),await cs()}catch{alert("Failed to delete entry")}}async function Fp(){await cs(),Os&&clearInterval(Os),Fs&&clearInterval(Fs),Us&&clearInterval(Us),$s&&clearInterval($s),qs&&clearInterval(qs),js&&clearInterval(js),Os=window.setInterval(()=>Kc(),1e3),Fs=window.setInterval(()=>Wc(),1e3),Us=window.setInterval(()=>Gc(),1e3),$s=window.setInterval(()=>Qc(),1e3),qs=window.setInterval(()=>Xc(),1e3),js=window.setInterval(()=>Zc(),1e3)}async function cs(){await Promise.all([zc(),Hc(),Up(),Yc(),Jc()])}async function zc(){try{const n=vt(_t(ct,"entries"),Y("type","==","Feed"),It("startTime","desc"),_n(1)),t=await At(n);if(t.empty)localStorage.removeItem("lastBottleTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastBottleTime",r.toISOString())}Kc()}catch(n){console.error("Error fetching last bottle time:",n)}}async function Hc(){try{const n=vt(_t(ct,"entries"),Y("type","==","Diaper"),It("startTime","desc"),_n(30)),t=await At(n);let e,r;t.forEach(s=>{const o=s.data(),a=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&e===void 0&&(e=a),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&r===void 0&&(r=a)}),e!==void 0?localStorage.setItem("lastPeeTime",e.toISOString()):localStorage.removeItem("lastPeeTime"),r!==void 0?localStorage.setItem("lastPooTime",r.toISOString()):localStorage.removeItem("lastPooTime"),Wc(),Gc()}catch(n){console.error("Error fetching last diaper times:",n)}}async function Up(){try{const n=vt(_t(ct,"entries"),Y("type","==","Pump"),It("startTime","desc"),_n(1)),t=await At(n);if(t.empty)localStorage.removeItem("lastPumpTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastPumpTime",r.toISOString())}Qc()}catch(n){console.error("Error fetching last pump time:",n)}}function hn(n,t){if(!n)return t;const e=new Date(n),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),c=Math.floor(s%(1e3*60)/1e3);return o>0?`${o}h ${a}m ${c}s`:a>0?`${a}m ${c}s`:`${c}s`}function Kc(){const n=document.getElementById("last-bottle-value");if(!n)return;const t=localStorage.getItem("lastBottleTime");if(!t){n.innerHTML="No bottles recorded";return}const e=hn(t,"No bottles recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>3){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*3*60*60*1e3),E=Rt(m),v=E.getHours(),S=String(E.getMinutes()).padStart(2,"0"),P=v>=12?"pm":"am",k=v%12||12;c.push(`${k}:${S} ${P}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*3*60*60*1e3),E=Rt(m),v=E.getHours(),S=String(E.getMinutes()).padStart(2,"0"),P=v>=12?"pm":"am",k=v%12||12;c.push(`${k}:${S} ${P}`)}const h=c.map((d,m)=>`+ ${(m+1)*3} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${h}</span>`}function Wc(){const n=document.getElementById("last-pee-value");if(!n)return;const t=localStorage.getItem("lastPeeTime");n.textContent=hn(t,"No pee recorded")}function Gc(){const n=document.getElementById("last-poo-value");if(!n)return;const t=localStorage.getItem("lastPooTime");n.textContent=hn(t,"No poo recorded")}function Qc(){const n=document.getElementById("last-pump-value");if(!n)return;const t=localStorage.getItem("lastPumpTime");if(!t){n.innerHTML="No pumps recorded";return}const e=hn(t,"No pumps recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>4){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*4*60*60*1e3),E=Rt(m),v=E.getHours(),S=String(E.getMinutes()).padStart(2,"0"),P=v>=12?"pm":"am",k=v%12||12;c.push(`${k}:${S} ${P}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*4*60*60*1e3),E=Rt(m),v=E.getHours(),S=String(E.getMinutes()).padStart(2,"0"),P=v>=12?"pm":"am",k=v%12||12;c.push(`${k}:${S} ${P}`)}const h=c.map((d,m)=>`+ ${(m+1)*4} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${h}</span>`}async function Yc(){try{const n=vt(_t(ct,"entries"),Y("type","==","Sleep"),It("startTime","desc"),_n(1)),t=await At(n);if(t.empty)localStorage.removeItem("lastSleepEndTime"),localStorage.removeItem("sleepInProgressStart");else{const e=t.docs[0].data();e.endTime?(localStorage.setItem("lastSleepEndTime",e.endTime.toDate().toISOString()),localStorage.removeItem("sleepInProgressStart")):(localStorage.removeItem("lastSleepEndTime"),localStorage.setItem("sleepInProgressStart",e.startTime.toDate().toISOString()))}Xc()}catch(n){console.error("Error fetching last sleep end time:",n)}}function Xc(){const n=document.getElementById("time-awake-value"),t=document.getElementById("time-awake-label");if(!n)return;const e=localStorage.getItem("sleepInProgressStart");if(e){t&&(t.textContent="Time Asleep"),n.textContent=hn(e,"No sleep recorded");return}t&&(t.textContent="Time Awake");const r=localStorage.getItem("lastSleepEndTime");n.textContent=hn(r,"No sleep recorded")}async function Jc(){try{const n=Xt(),t=new Date(n);t.setHours(7,0,0,0);const e=ut(Zt(t)),r=vt(_t(ct,"entries"),Y("type","==","Sleep"),Y("startTime",">=",j.fromDate(e)),It("startTime","asc")),s=await At(r);let o=0,a=null;s.forEach(c=>{const h=c.data(),d=h.startTime.toDate(),m=Rt(d);if(d>=e&&m.toDateString()===n.toDateString())if(h.endTime){const E=h.endTime.toDate();o+=E.getTime()-d.getTime()}else a=d.toISOString()}),localStorage.setItem("napTimeCompletedMs",String(o)),a?localStorage.setItem("napTimeInProgressStart",a):localStorage.removeItem("napTimeInProgressStart"),Zc()}catch(n){console.error("Error fetching nap time:",n)}}function Zc(){const n=document.getElementById("nap-time-value");if(!n)return;const t=parseInt(localStorage.getItem("napTimeCompletedMs")||"0",10),e=localStorage.getItem("napTimeInProgressStart");let r=t;if(e){const c=new Date(e);r+=new Date().getTime()-c.getTime()}if(r<=0){n.textContent="0m";return}const s=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60)),a=Math.floor(r%(1e3*60)/1e3);s>0?n.textContent=`${s}h ${o}m ${a}s`:o>0?n.textContent=`${o}m ${a}s`:n.textContent=`${a}s`}window.addEventListener("DOMContentLoaded",()=>{var n,t;if(gp()){const e=document.getElementById("passcode-screen"),r=document.getElementById("app");e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),$c()}else(n=document.getElementById("passcode-submit"))==null||n.addEventListener("click",nl),(t=document.getElementById("passcode-input"))==null||t.addEventListener("keypress",e=>{e.key==="Enter"&&nl()})});
