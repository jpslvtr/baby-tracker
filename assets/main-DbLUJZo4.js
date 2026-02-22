(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Jo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},wc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|u>>4;let E=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(E=64)),r.push(e[m],e[T],e[E],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ja(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new Ac;const E=o<<2|u>>4;if(r.push(E),d!==64){const S=u<<4&240|d>>2;if(r.push(S),T!==64){const R=d<<6&192|T;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ac extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bc=function(n){const t=Ja(n);return Za.encodeByteArray(t,!0)},Tr=function(n){return bc(n).replace(/\./g,"")},Sc=function(n){try{return Za.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rc=()=>Dc().__FIREBASE_DEFAULTS__,Pc=()=>{if(typeof process>"u"||typeof Jo>"u")return;const n=Jo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Sc(n[1]);return t&&JSON.parse(t)},ai=()=>{try{return Rc()||Pc()||Cc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vc=n=>{var t,e;return(e=(t=ai())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},kc=n=>{const t=Vc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},tl=()=>{var n;return(n=ai())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function xc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tr(JSON.stringify(e)),Tr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bc(){var n;const t=(n=ai())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lc(){return!Bc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oc(){try{return typeof indexedDB=="object"}catch{return!1}}function Fc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="FirebaseError";class Ze extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Uc,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?$c(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ze(s,u,r)}}function $c(n,t){return n.replace(qc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const qc=/\{\$([^}]+)}/g;function Os(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Zo(o)&&Zo(a)){if(!Os(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Zo(n){return n!==null&&typeof n=="object"}/**
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
 */function te(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ae="[DEFAULT]";/**
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
 */class jc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Nc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hc(t))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ae){return this.instances.has(t)}getOptions(t=Ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ae){return this.component?this.component.multipleInstances?t:Ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zc(n){return n===Ae?void 0:n}function Hc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Kc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new jc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Wc={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Gc=Q.INFO,Qc={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Yc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Qc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nl{constructor(t){this.name=t,this._logLevel=Gc,this._logHandler=Yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const Xc=(n,t)=>t.some(e=>n instanceof e);let ta,ea;function Jc(){return ta||(ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zc(){return ea||(ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,Fs=new WeakMap,sl=new WeakMap,Ts=new WeakMap,li=new WeakMap;function th(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ue(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&rl.set(e,n)}).catch(()=>{}),li.set(t,n),t}function eh(n){if(Fs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Fs.set(n,t)}let Us={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Fs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||sl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function nh(n){Us=n(Us)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Is(this),t,...e);return sl.set(r,t.sort?t.sort():[t]),ue(r)}:Zc().includes(n)?function(...t){return n.apply(Is(this),t),ue(rl.get(this))}:function(...t){return ue(n.apply(Is(this),t))}}function sh(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&eh(n),Xc(n,Jc())?new Proxy(n,Us):n)}function ue(n){if(n instanceof IDBRequest)return th(n);if(Ts.has(n))return Ts.get(n);const t=sh(n);return t!==n&&(Ts.set(n,t),li.set(t,n)),t}const Is=n=>li.get(n);function ih(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=ue(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ue(a.result),h.oldVersion,h.newVersion,ue(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const oh=["get","getKey","getAll","getAllKeys","count"],ah=["put","add","delete","clear"],ws=new Map;function na(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ws.get(t))return ws.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=ah.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return ws.set(t,o),o}nh(n=>({...n,get:(t,e,r)=>na(t,e)||n.get(t,e,r),has:(t,e)=>!!na(t,e)||n.has(t,e)}));/**
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
 */class lh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(uh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function uh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $s="@firebase/app",ra="0.10.13";/**
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
 */const ee=new nl("@firebase/app"),ch="@firebase/app-compat",hh="@firebase/analytics-compat",dh="@firebase/analytics",fh="@firebase/app-check-compat",mh="@firebase/app-check",ph="@firebase/auth",gh="@firebase/auth-compat",yh="@firebase/database",_h="@firebase/data-connect",Eh="@firebase/database-compat",vh="@firebase/functions",Th="@firebase/functions-compat",Ih="@firebase/installations",wh="@firebase/installations-compat",Ah="@firebase/messaging",bh="@firebase/messaging-compat",Sh="@firebase/performance",Dh="@firebase/performance-compat",Rh="@firebase/remote-config",Ph="@firebase/remote-config-compat",Ch="@firebase/storage",Vh="@firebase/storage-compat",kh="@firebase/firestore",Nh="@firebase/vertexai-preview",xh="@firebase/firestore-compat",Mh="firebase",Bh="10.14.1";/**
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
 */const qs="[DEFAULT]",Lh={[$s]:"fire-core",[ch]:"fire-core-compat",[dh]:"fire-analytics",[hh]:"fire-analytics-compat",[mh]:"fire-app-check",[fh]:"fire-app-check-compat",[ph]:"fire-auth",[gh]:"fire-auth-compat",[yh]:"fire-rtdb",[_h]:"fire-data-connect",[Eh]:"fire-rtdb-compat",[vh]:"fire-fn",[Th]:"fire-fn-compat",[Ih]:"fire-iid",[wh]:"fire-iid-compat",[Ah]:"fire-fcm",[bh]:"fire-fcm-compat",[Sh]:"fire-perf",[Dh]:"fire-perf-compat",[Rh]:"fire-rc",[Ph]:"fire-rc-compat",[Ch]:"fire-gcs",[Vh]:"fire-gcs-compat",[kh]:"fire-fst",[xh]:"fire-fst-compat",[Nh]:"fire-vertex","fire-js":"fire-js",[Mh]:"fire-js-all"};/**
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
 */const Ir=new Map,Oh=new Map,js=new Map;function sa(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function wr(n){const t=n.name;if(js.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;js.set(t,n);for(const e of Ir.values())sa(e,n);for(const e of Oh.values())sa(e,n);return!0}function Fh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Uh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ce=new el("app","Firebase",Uh);/**
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
 */class $h{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}/**
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
 */const qh=Bh;function il(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:qs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ce.create("bad-app-name",{appName:String(s)});if(e||(e=tl()),!e)throw ce.create("no-options");const o=Ir.get(s);if(o){if(Os(e,o.options)&&Os(r,o.config))return o;throw ce.create("duplicate-app",{appName:s})}const a=new Kc(s);for(const h of js.values())a.addComponent(h);const u=new $h(e,r,a);return Ir.set(s,u),u}function jh(n=qs){const t=Ir.get(n);if(!t&&n===qs&&tl())return il();if(!t)throw ce.create("no-app",{appName:n});return t}function qe(n,t,e){var r;let s=(r=Lh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(u.join(" "));return}wr(new Pn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const zh="firebase-heartbeat-database",Hh=1,Cn="firebase-heartbeat-store";let As=null;function ol(){return As||(As=ih(zh,Hh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ce.create("idb-open",{originalErrorMessage:n.message})})),As}async function Kh(n){try{const e=(await ol()).transaction(Cn),r=await e.objectStore(Cn).get(al(n));return await e.done,r}catch(t){if(t instanceof Ze)ee.warn(t.message);else{const e=ce.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(e.message)}}}async function ia(n,t){try{const r=(await ol()).transaction(Cn,"readwrite");await r.objectStore(Cn).put(t,al(n)),await r.done}catch(e){if(e instanceof Ze)ee.warn(e.message);else{const r=ce.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ee.warn(r.message)}}}function al(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wh=1024,Gh=30*24*60*60*1e3;class Qh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=oa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Gh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ee.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oa(),{heartbeatsToSend:r,unsentEntries:s}=Yh(this._heartbeatsCache.heartbeats),o=Tr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ee.warn(e),""}}}function oa(){return new Date().toISOString().substring(0,10)}function Yh(n,t=Wh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),aa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),aa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Xh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oc()?Fc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Kh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ia(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ia(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function aa(n){return Tr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Jh(n){wr(new Pn("platform-logger",t=>new lh(t),"PRIVATE")),wr(new Pn("heartbeat",t=>new Qh(t),"PRIVATE")),qe($s,ra,n),qe($s,ra,"esm2017"),qe("fire-js","")}Jh("");var Zh="firebase",td="10.14.1";/**
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
 */qe(Zh,td,"app");var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Se,ll;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,p){function g(){}g.prototype=p.prototype,w.D=p.prototype,w.prototype=new g,w.prototype.constructor=w,w.C=function(_,v,I){for(var y=Array(arguments.length-2),j=2;j<arguments.length;j++)y[j-2]=arguments[j];return p.prototype[v].apply(_,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,g){g||(g=0);var _=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)_[v]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(v=0;16>v;++v)_[v]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=w.g[0],g=w.g[1],v=w.g[2];var I=w.g[3],y=p+(I^g&(v^I))+_[0]+3614090360&4294967295;p=g+(y<<7&4294967295|y>>>25),y=I+(v^p&(g^v))+_[1]+3905402710&4294967295,I=p+(y<<12&4294967295|y>>>20),y=v+(g^I&(p^g))+_[2]+606105819&4294967295,v=I+(y<<17&4294967295|y>>>15),y=g+(p^v&(I^p))+_[3]+3250441966&4294967295,g=v+(y<<22&4294967295|y>>>10),y=p+(I^g&(v^I))+_[4]+4118548399&4294967295,p=g+(y<<7&4294967295|y>>>25),y=I+(v^p&(g^v))+_[5]+1200080426&4294967295,I=p+(y<<12&4294967295|y>>>20),y=v+(g^I&(p^g))+_[6]+2821735955&4294967295,v=I+(y<<17&4294967295|y>>>15),y=g+(p^v&(I^p))+_[7]+4249261313&4294967295,g=v+(y<<22&4294967295|y>>>10),y=p+(I^g&(v^I))+_[8]+1770035416&4294967295,p=g+(y<<7&4294967295|y>>>25),y=I+(v^p&(g^v))+_[9]+2336552879&4294967295,I=p+(y<<12&4294967295|y>>>20),y=v+(g^I&(p^g))+_[10]+4294925233&4294967295,v=I+(y<<17&4294967295|y>>>15),y=g+(p^v&(I^p))+_[11]+2304563134&4294967295,g=v+(y<<22&4294967295|y>>>10),y=p+(I^g&(v^I))+_[12]+1804603682&4294967295,p=g+(y<<7&4294967295|y>>>25),y=I+(v^p&(g^v))+_[13]+4254626195&4294967295,I=p+(y<<12&4294967295|y>>>20),y=v+(g^I&(p^g))+_[14]+2792965006&4294967295,v=I+(y<<17&4294967295|y>>>15),y=g+(p^v&(I^p))+_[15]+1236535329&4294967295,g=v+(y<<22&4294967295|y>>>10),y=p+(v^I&(g^v))+_[1]+4129170786&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^v&(p^g))+_[6]+3225465664&4294967295,I=p+(y<<9&4294967295|y>>>23),y=v+(p^g&(I^p))+_[11]+643717713&4294967295,v=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(v^I))+_[0]+3921069994&4294967295,g=v+(y<<20&4294967295|y>>>12),y=p+(v^I&(g^v))+_[5]+3593408605&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^v&(p^g))+_[10]+38016083&4294967295,I=p+(y<<9&4294967295|y>>>23),y=v+(p^g&(I^p))+_[15]+3634488961&4294967295,v=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(v^I))+_[4]+3889429448&4294967295,g=v+(y<<20&4294967295|y>>>12),y=p+(v^I&(g^v))+_[9]+568446438&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^v&(p^g))+_[14]+3275163606&4294967295,I=p+(y<<9&4294967295|y>>>23),y=v+(p^g&(I^p))+_[3]+4107603335&4294967295,v=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(v^I))+_[8]+1163531501&4294967295,g=v+(y<<20&4294967295|y>>>12),y=p+(v^I&(g^v))+_[13]+2850285829&4294967295,p=g+(y<<5&4294967295|y>>>27),y=I+(g^v&(p^g))+_[2]+4243563512&4294967295,I=p+(y<<9&4294967295|y>>>23),y=v+(p^g&(I^p))+_[7]+1735328473&4294967295,v=I+(y<<14&4294967295|y>>>18),y=g+(I^p&(v^I))+_[12]+2368359562&4294967295,g=v+(y<<20&4294967295|y>>>12),y=p+(g^v^I)+_[5]+4294588738&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^v)+_[8]+2272392833&4294967295,I=p+(y<<11&4294967295|y>>>21),y=v+(I^p^g)+_[11]+1839030562&4294967295,v=I+(y<<16&4294967295|y>>>16),y=g+(v^I^p)+_[14]+4259657740&4294967295,g=v+(y<<23&4294967295|y>>>9),y=p+(g^v^I)+_[1]+2763975236&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^v)+_[4]+1272893353&4294967295,I=p+(y<<11&4294967295|y>>>21),y=v+(I^p^g)+_[7]+4139469664&4294967295,v=I+(y<<16&4294967295|y>>>16),y=g+(v^I^p)+_[10]+3200236656&4294967295,g=v+(y<<23&4294967295|y>>>9),y=p+(g^v^I)+_[13]+681279174&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^v)+_[0]+3936430074&4294967295,I=p+(y<<11&4294967295|y>>>21),y=v+(I^p^g)+_[3]+3572445317&4294967295,v=I+(y<<16&4294967295|y>>>16),y=g+(v^I^p)+_[6]+76029189&4294967295,g=v+(y<<23&4294967295|y>>>9),y=p+(g^v^I)+_[9]+3654602809&4294967295,p=g+(y<<4&4294967295|y>>>28),y=I+(p^g^v)+_[12]+3873151461&4294967295,I=p+(y<<11&4294967295|y>>>21),y=v+(I^p^g)+_[15]+530742520&4294967295,v=I+(y<<16&4294967295|y>>>16),y=g+(v^I^p)+_[2]+3299628645&4294967295,g=v+(y<<23&4294967295|y>>>9),y=p+(v^(g|~I))+_[0]+4096336452&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~v))+_[7]+1126891415&4294967295,I=p+(y<<10&4294967295|y>>>22),y=v+(p^(I|~g))+_[14]+2878612391&4294967295,v=I+(y<<15&4294967295|y>>>17),y=g+(I^(v|~p))+_[5]+4237533241&4294967295,g=v+(y<<21&4294967295|y>>>11),y=p+(v^(g|~I))+_[12]+1700485571&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~v))+_[3]+2399980690&4294967295,I=p+(y<<10&4294967295|y>>>22),y=v+(p^(I|~g))+_[10]+4293915773&4294967295,v=I+(y<<15&4294967295|y>>>17),y=g+(I^(v|~p))+_[1]+2240044497&4294967295,g=v+(y<<21&4294967295|y>>>11),y=p+(v^(g|~I))+_[8]+1873313359&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~v))+_[15]+4264355552&4294967295,I=p+(y<<10&4294967295|y>>>22),y=v+(p^(I|~g))+_[6]+2734768916&4294967295,v=I+(y<<15&4294967295|y>>>17),y=g+(I^(v|~p))+_[13]+1309151649&4294967295,g=v+(y<<21&4294967295|y>>>11),y=p+(v^(g|~I))+_[4]+4149444226&4294967295,p=g+(y<<6&4294967295|y>>>26),y=I+(g^(p|~v))+_[11]+3174756917&4294967295,I=p+(y<<10&4294967295|y>>>22),y=v+(p^(I|~g))+_[2]+718787259&4294967295,v=I+(y<<15&4294967295|y>>>17),y=g+(I^(v|~p))+_[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+I&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var g=p-this.blockSize,_=this.B,v=this.h,I=0;I<p;){if(v==0)for(;I<=g;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<p;)if(_[v++]=w.charCodeAt(I++),v==this.blockSize){s(this,_),v=0;break}}else for(;I<p;)if(_[v++]=w[I++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var g=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=g&255,g/=256;for(this.u(w),w=Array(16),p=g=0;4>p;++p)for(var _=0;32>_;_+=8)w[g++]=this.g[p]>>>_&255;return w};function o(w,p){var g=u;return Object.prototype.hasOwnProperty.call(g,w)?g[w]:g[w]=p(w)}function a(w,p){this.h=p;for(var g=[],_=!0,v=w.length-1;0<=v;v--){var I=w[v]|0;_&&I==p||(g[v]=I,_=!1)}this.g=g}var u={};function h(w){return-128<=w&&128>w?o(w,function(p){return new a([p|0],0>p?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return T;if(0>w)return V(d(-w));for(var p=[],g=1,_=0;w>=g;_++)p[_]=w/g|0,g*=4294967296;return new a(p,0)}function m(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return V(m(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(p,8)),_=T,v=0;v<w.length;v+=8){var I=Math.min(8,w.length-v),y=parseInt(w.substring(v,v+I),p);8>I?(I=d(Math.pow(p,I)),_=_.j(I).add(d(y))):(_=_.j(g),_=_.add(d(y)))}return _}var T=h(0),E=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(C(this))return-V(this).m();for(var w=0,p=1,g=0;g<this.g.length;g++){var _=this.i(g);w+=(0<=_?_:4294967296+_)*p,p*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(C(this))return"-"+V(this).toString(w);for(var p=d(Math.pow(w,6)),g=this,_="";;){var v=Y(g,p).g;g=L(g,v.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(w);if(g=v,R(g))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function C(w){return w.h==-1}n.l=function(w){return w=L(this,w),C(w)?-1:R(w)?0:1};function V(w){for(var p=w.g.length,g=[],_=0;_<p;_++)g[_]=~w.g[_];return new a(g,~w.h).add(E)}n.abs=function(){return C(this)?V(this):this},n.add=function(w){for(var p=Math.max(this.g.length,w.g.length),g=[],_=0,v=0;v<=p;v++){var I=_+(this.i(v)&65535)+(w.i(v)&65535),y=(I>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);_=y>>>16,I&=65535,y&=65535,g[v]=y<<16|I}return new a(g,g[g.length-1]&-2147483648?-1:0)};function L(w,p){return w.add(V(p))}n.j=function(w){if(R(this)||R(w))return T;if(C(this))return C(w)?V(this).j(V(w)):V(V(this).j(w));if(C(w))return V(this.j(V(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var p=this.g.length+w.g.length,g=[],_=0;_<2*p;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<w.g.length;v++){var I=this.i(_)>>>16,y=this.i(_)&65535,j=w.i(v)>>>16,Bt=w.i(v)&65535;g[2*_+2*v]+=y*Bt,O(g,2*_+2*v),g[2*_+2*v+1]+=I*Bt,O(g,2*_+2*v+1),g[2*_+2*v+1]+=y*j,O(g,2*_+2*v+1),g[2*_+2*v+2]+=I*j,O(g,2*_+2*v+2)}for(_=0;_<p;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=p;_<2*p;_++)g[_]=0;return new a(g,0)};function O(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function U(w,p){this.g=w,this.h=p}function Y(w,p){if(R(p))throw Error("division by zero");if(R(w))return new U(T,T);if(C(w))return p=Y(V(w),p),new U(V(p.g),V(p.h));if(C(p))return p=Y(w,V(p)),new U(V(p.g),p.h);if(30<w.g.length){if(C(w)||C(p))throw Error("slowDivide_ only works with positive integers.");for(var g=E,_=p;0>=_.l(w);)g=et(g),_=et(_);var v=W(g,1),I=W(_,1);for(_=W(_,2),g=W(g,2);!R(_);){var y=I.add(_);0>=y.l(w)&&(v=v.add(g),I=y),_=W(_,1),g=W(g,1)}return p=L(w,v.j(p)),new U(v,p)}for(v=T;0<=w.l(p);){for(g=Math.max(1,Math.floor(w.m()/p.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=d(g),y=I.j(p);C(y)||0<y.l(w);)g-=_,I=d(g),y=I.j(p);R(I)&&(I=E),v=v.add(I),w=L(w,y)}return new U(v,w)}n.A=function(w){return Y(this,w).h},n.and=function(w){for(var p=Math.max(this.g.length,w.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)&w.i(_);return new a(g,this.h&w.h)},n.or=function(w){for(var p=Math.max(this.g.length,w.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)|w.i(_);return new a(g,this.h|w.h)},n.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)^w.i(_);return new a(g,this.h^w.h)};function et(w){for(var p=w.g.length+1,g=[],_=0;_<p;_++)g[_]=w.i(_)<<1|w.i(_-1)>>>31;return new a(g,w.h)}function W(w,p){var g=p>>5;p%=32;for(var _=w.g.length-g,v=[],I=0;I<_;I++)v[I]=0<p?w.i(I+g)>>>p|w.i(I+g+1)<<32-p:w.i(I+g);return new a(v,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ll=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Se=a}).apply(typeof la<"u"?la:typeof self<"u"?self:typeof window<"u"?window:{});var hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ul,Tn,cl,gr,zs,hl,dl,fl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof hr=="object"&&hr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break t;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var b=c++;return{value:l(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function T(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function E(i,l,c){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,E.apply(null,arguments)}function S(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function R(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,b){for(var k=Array(arguments.length-2),st=2;st<arguments.length;st++)k[st-2]=arguments[st];return l.prototype[A].apply(f,k)}}function C(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function V(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,b=f.length||0;i.length=A+b;for(let k=0;k<b;k++)i[A+k]=f[k]}else i.push(f)}}class L{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function U(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Y(i){return Y[" "](i),i}Y[" "]=function(){};var et=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function W(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function w(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function p(i){const l={};for(const c in i)l[c]=i[c];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let b=0;b<g.length;b++)c=g[b],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function v(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function I(i){u.setTimeout(()=>{throw i},0)}function y(){var i=lt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,c){const f=Bt.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Bt=new L(()=>new F,i=>i.reset());class F{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let N,rt=!1,lt=new j,Z=()=>{const i=u.Promise.resolve(void 0);N=()=>{i.then(Qt)}};var Qt=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(c){I(c)}var l=Bt;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}rt=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function _e(i,l){if(mt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(et){t:{try{Y(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Xi[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&_e.aa.h.call(this)}}R(_e,mt);var Xi={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),Ku=0;function Wu(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++Ku,this.da=this.fa=!1}function Wn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Gn(i){this.src=i,this.g={},this.h=0}Gn.prototype.add=function(i,l,c,f,A){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var k=Zr(i,l,f,A);return-1<k?(l=i[k],c||(l.fa=!1)):(l=new Wu(l,this.src,b,!!f,A),l.fa=c,i.push(l)),l};function Jr(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(Wn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Zr(i,l,c,f){for(var A=0;A<i.length;++A){var b=i[A];if(!b.da&&b.listener==l&&b.capture==!!c&&b.ha==f)return A}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),es={};function Ji(i,l,c,f,A){if(Array.isArray(l)){for(var b=0;b<l.length;b++)Ji(i,l[b],c,f,A);return null}return c=eo(c),i&&i[Kn]?i.K(l,c,d(f)?!!f.capture:!1,A):Gu(i,l,c,!1,f,A)}function Gu(i,l,c,f,A,b){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,st=rs(i);if(st||(i[ts]=st=new Gn(i)),c=st.add(l,c,f,k,b),c.proxy)return c;if(f=Qu(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Hn||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(to(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Qu(){function i(c){return l.call(i.src,i.listener,c)}const l=Yu;return i}function Zi(i,l,c,f,A){if(Array.isArray(l))for(var b=0;b<l.length;b++)Zi(i,l[b],c,f,A);else f=d(f)?!!f.capture:!!f,c=eo(c),i&&i[Kn]?(i=i.i,l=String(l).toString(),l in i.g&&(b=i.g[l],c=Zr(b,c,f,A),-1<c&&(Wn(b[c]),Array.prototype.splice.call(b,c,1),b.length==0&&(delete i.g[l],i.h--)))):i&&(i=rs(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Zr(l,c,f,A)),(c=-1<i?l[i]:null)&&ns(c))}function ns(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Kn])Jr(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(to(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=rs(l))?(Jr(c,i),c.h==0&&(c.src=null,l[ts]=null)):Wn(i)}}}function to(i){return i in es?es[i]:es[i]="on"+i}function Yu(i,l){if(i.da)i=!0;else{l=new _e(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&ns(i),i=c.call(f,l)}return i}function rs(i){return i=i[ts],i instanceof Gn?i:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function eo(i){return typeof i=="function"?i:(i[ss]||(i[ss]=function(l){return i.handleEvent(l)}),i[ss])}function It(){zt.call(this),this.i=new Gn(this),this.M=this,this.F=null}R(It,zt),It.prototype[Kn]=!0,It.prototype.removeEventListener=function(i,l,c,f){Zi(this,i,l,c,f)};function Vt(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new mt(l,i);else if(l instanceof mt)l.target=l.target||i;else{var A=l;l=new mt(f,i),_(l,A)}if(A=!0,c)for(var b=c.length-1;0<=b;b--){var k=l.g=c[b];A=Qn(k,f,!0,l)&&A}if(k=l.g=i,A=Qn(k,f,!0,l)&&A,A=Qn(k,f,!1,l)&&A,c)for(b=0;b<c.length;b++)k=l.g=c[b],A=Qn(k,f,!1,l)&&A}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)Wn(c[f]);delete i.g[l],i.h--}}this.F=null},It.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},It.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function Qn(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,b=0;b<l.length;++b){var k=l[b];if(k&&!k.da&&k.capture==c){var st=k.listener,gt=k.ha||k.src;k.fa&&Jr(i.i,k),A=st.call(gt,f)!==!1&&A}}return A&&!f.defaultPrevented}function no(i,l,c){if(typeof i=="function")c&&(i=E(i,c));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function ro(i){i.g=no(()=>{i.g=null,i.i&&(i.i=!1,ro(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Xu extends zt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ro(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){zt.call(this),this.h=i,this.g={}}R(on,zt);var so=[];function io(i){W(i.g,function(l,c){this.g.hasOwnProperty(c)&&ns(l)},i),i.g={}}on.prototype.N=function(){on.aa.N.call(this),io(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var is=u.JSON.stringify,Ju=u.JSON.parse,Zu=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function os(){}os.prototype.h=null;function oo(i){return i.h||(i.h=i.i())}function ao(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function as(){mt.call(this,"d")}R(as,mt);function ls(){mt.call(this,"c")}R(ls,mt);var Ee={},lo=null;function Yn(){return lo=lo||new It}Ee.La="serverreachability";function uo(i){mt.call(this,Ee.La,i)}R(uo,mt);function ln(i){const l=Yn();Vt(l,new uo(l))}Ee.STAT_EVENT="statevent";function co(i,l){mt.call(this,Ee.STAT_EVENT,i),this.stat=l}R(co,mt);function kt(i){const l=Yn();Vt(l,new co(l,i))}Ee.Ma="timingevent";function ho(i,l){mt.call(this,Ee.Ma,i),this.size=l}R(ho,mt);function un(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function cn(){this.g=!0}cn.prototype.xa=function(){this.g=!1};function tc(i,l,c,f,A,b){i.info(function(){if(i.g)if(b)for(var k="",st=b.split("&"),gt=0;gt<st.length;gt++){var X=st[gt].split("=");if(1<X.length){var wt=X[0];X=X[1];var At=wt.split("_");k=2<=At.length&&At[1]=="type"?k+(wt+"="+X+"&"):k+(wt+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+k})}function ec(i,l,c,f,A,b,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+b+" "+k})}function Me(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+rc(i,c)+(f?" "+f:"")})}function nc(i,l){i.info(function(){return"TIMEOUT: "+l})}cn.prototype.info=function(){};function rc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return is(c)}catch{return l}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},us;function Jn(){}R(Jn,os),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},us=new Jn;function se(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mo}function mo(){this.i=null,this.g="",this.h=!1}var po={},cs={};function hs(i,l,c){i.L=1,i.v=nr(Yt(l)),i.m=c,i.P=!0,go(i,null)}function go(i,l){i.F=Date.now(),Zn(i),i.A=Yt(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Co(c.i,"t",f),i.C=0,c=i.j.J,i.h=new mo,i.g=Go(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Xu(E(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(so[0]=A.toString()),A=so);for(var b=0;b<A.length;b++){var k=Ji(c,A[b],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),ln(),tc(i.i,i.u,i.A,i.l,i.R,i.m)}se.prototype.ca=function(i){i=i.target;const l=this.M;l&&Xt(i)==3?l.j():this.Y(i)},se.prototype.Y=function(i){try{if(i==this.g)t:{const At=Xt(this.g);var l=this.g.Ba();const Oe=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Lo(this.g)))){this.J||At!=4||l==7||(l==8||0>=Oe?ln(3):ln(2)),ds(this);var c=this.g.Z();this.X=c;e:if(yo(this)){var f=Lo(this.g);i="";var A=f.length,b=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),hn(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(b&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=c==200,ec(this.i,this.u,this.A,this.l,this.R,At,c),this.o){if(this.T&&!this.K){e:{if(this.g){var st,gt=this.g;if((st=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(st)){var X=st;break e}}X=null}if(c=X)Me(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fs(this,c);else{this.o=!1,this.s=3,kt(12),ve(this),hn(this);break t}}if(this.P){c=!0;let $t;for(;!this.J&&this.C<k.length;)if($t=sc(this,k),$t==cs){At==4&&(this.s=4,kt(14),c=!1),Me(this.i,this.l,null,"[Incomplete Response]");break}else if($t==po){this.s=4,kt(15),Me(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else Me(this.i,this.l,$t,null),fs(this,$t);if(yo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||k.length!=0||this.h.h||(this.s=1,kt(16),c=!1),this.o=this.o&&c,!c)Me(this.i,this.l,k,"[Invalid Chunked Response]"),ve(this),hn(this);else if(0<k.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Es(wt),wt.M=!0,kt(11))}}else Me(this.i,this.l,k,null),fs(this,k);At==4&&ve(this),this.o&&!this.J&&(At==4?zo(this.j,this):(this.o=!1,Zn(this)))}else Tc(this.g),c==400&&0<k.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),ve(this),hn(this)}}}catch{}finally{}};function yo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function sc(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?cs:(c=Number(l.substring(c,f)),isNaN(c)?po:(f+=1,f+c>l.length?cs:(l=l.slice(f,f+c),i.C=f+c,l)))}se.prototype.cancel=function(){this.J=!0,ve(this)};function Zn(i){i.S=Date.now()+i.I,_o(i,i.I)}function _o(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=un(E(i.ba,i),l)}function ds(i){i.B&&(u.clearTimeout(i.B),i.B=null)}se.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nc(this.i,this.A),this.L!=2&&(ln(),kt(17)),ve(this),this.s=2,hn(this)):_o(this,this.S-i)};function hn(i){i.j.G==0||i.J||zo(i.j,i)}function ve(i){ds(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,io(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function fs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||ms(c.h,i))){if(!i.K&&ms(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)lr(c),or(c);else break t;_s(c),kt(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=un(E(c.Za,c),6e3));if(1>=To(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ie(c,11)}else if((i.K||c.g==i)&&lr(c),!O(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(c.T=X[0],X=X[1],c.G==2)if(X[0]=="c"){c.K=X[1],c.ia=X[2];const wt=X[3];wt!=null&&(c.la=wt,c.j.info("VER="+c.la));const At=X[4];At!=null&&(c.Aa=At,c.j.info("SVER="+c.Aa));const Oe=X[5];Oe!=null&&typeof Oe=="number"&&0<Oe&&(f=1.5*Oe,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const $t=i.g;if($t){const cr=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var b=f.h;b.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ps(b,b.h),b.h=null))}if(f.D){const vs=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;vs&&(f.ya=vs,it(f.I,f.D,vs))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var k=i;if(f.qa=Wo(f,f.J?f.ia:null,f.W),k.K){Io(f.h,k);var st=k,gt=f.L;gt&&(st.I=gt),st.B&&(ds(st),Zn(st)),f.g=k}else qo(f);0<c.i.length&&ar(c)}else X[0]!="stop"&&X[0]!="close"||Ie(c,7);else c.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ie(c,7):ys(c):X[0]!="noop"&&c.l&&c.l.ta(X),c.v=0)}}ln(4)}catch{}}var ic=class{constructor(i,l){this.g=i,this.map=l}};function Eo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function To(i){return i.h?1:i.g?i.g.size:0}function ms(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ps(i,l){i.g?i.g.add(l):i.h=l}function Io(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Eo.prototype.cancel=function(){if(this.i=wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function wo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return C(i.i)}function oc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function ac(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function Ao(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=ac(i),f=oc(i),A=f.length,b=0;b<A;b++)l.call(void 0,f[b],c&&c[b],i)}var bo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var b=i[c].substring(0,f);A=i[c].substring(f+1)}else b=i[c];l(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Te(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Te){this.h=i.h,tr(this,i.j),this.o=i.o,this.g=i.g,er(this,i.s),this.l=i.l;var l=i.i,c=new mn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),So(this,c),this.m=i.m}else i&&(l=String(i).match(bo))?(this.h=!1,tr(this,l[1]||"",!0),this.o=dn(l[2]||""),this.g=dn(l[3]||"",!0),er(this,l[4]),this.l=dn(l[5]||"",!0),So(this,l[6]||"",!0),this.m=dn(l[7]||"")):(this.h=!1,this.i=new mn(null,this.h))}Te.prototype.toString=function(){var i=[],l=this.j;l&&i.push(fn(l,Do,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(fn(l,Do,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(fn(c,c.charAt(0)=="/"?hc:cc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",fn(c,fc)),i.join("")};function Yt(i){return new Te(i)}function tr(i,l,c){i.j=c?dn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function er(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function So(i,l,c){l instanceof mn?(i.i=l,mc(i.i,i.h)):(c||(l=fn(l,dc)),i.i=new mn(l,i.h))}function it(i,l,c){i.i.set(l,c)}function nr(i){return it(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function dn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function fn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,uc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function uc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Do=/[#\/\?@]/g,cc=/[#\?:]/g,hc=/[#\?]/g,dc=/[#\?@]/g,fc=/#/g;function mn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ie(i){i.g||(i.g=new Map,i.h=0,i.i&&lc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=mn.prototype,n.add=function(i,l){ie(this),this.i=null,i=Be(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Ro(i,l){ie(i),l=Be(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Po(i,l){return ie(i),l=Be(i,l),i.g.has(l)}n.forEach=function(i,l){ie(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){ie(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let b=0;b<A.length;b++)c.push(l[f])}return c},n.V=function(i){ie(this);let l=[];if(typeof i=="string")Po(this,i)&&(l=l.concat(this.g.get(Be(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return ie(this),this.i=null,i=Be(this,i),Po(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Co(i,l,c){Ro(i,l),0<c.length&&(i.i=null,i.g.set(Be(i,l),C(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=b;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Be(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function mc(i,l){l&&!i.j&&(ie(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Ro(this,f),Co(this,A,c))},i)),i.j=l}function pc(i,l){const c=new cn;if(u.Image){const f=new Image;f.onload=S(oe,c,"TestLoadImage: loaded",!0,l,f),f.onerror=S(oe,c,"TestLoadImage: error",!1,l,f),f.onabort=S(oe,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(oe,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function gc(i,l){const c=new cn,f=new AbortController,A=setTimeout(()=>{f.abort(),oe(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?oe(c,"TestPingServer: ok",!0,l):oe(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),oe(c,"TestPingServer: error",!1,l)})}function oe(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function yc(){this.g=new Zu}function _c(i,l,c){const f=c||"";try{Ao(i,function(A,b){let k=A;d(A)&&(k=is(A)),l.push(f+b+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function rr(i){this.l=i.Ub||null,this.j=i.eb||!1}R(rr,os),rr.prototype.g=function(){return new sr(this.l,this.j)},rr.prototype.i=function(i){return function(){return i}}({});function sr(i,l){It.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(sr,It),n=sr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,gn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?pn(this):gn(this),this.readyState==3&&Vo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,pn(this))},n.Qa=function(i){this.g&&(this.response=i,pn(this))},n.ga=function(){this.g&&pn(this)};function pn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,gn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function gn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ko(i){let l="";return W(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function gs(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=ko(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):it(i,l,c))}function ut(i){It.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ut,It);var Ec=/^https?$/i,vc=["POST","PUT"];n=ut.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():us.g(),this.v=this.o?oo(this.o):oo(us),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(b){No(this,b);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())c.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(b=>b.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(vc,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of c)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bo(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){No(this,b)}};function No(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,xo(i),ir(i)}function xo(i){i.A||(i.A=!0,Vt(i,"complete"),Vt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Vt(this,"complete"),Vt(this,"abort"),ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ir(this,!0)),ut.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Mo(this):this.bb())},n.bb=function(){Mo(this)};function Mo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Xt(i)!=4||i.Z()!=2)){if(i.u&&Xt(i)==4)no(i.Ea,0,i);else if(Vt(i,"readystatechange"),Xt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=k===0){var A=String(i.D).match(bo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Ec.test(A?A.toLowerCase():"")}c=f}if(c)Vt(i,"complete"),Vt(i,"success");else{i.m=6;try{var b=2<Xt(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",xo(i)}}finally{ir(i)}}}}function ir(i,l){if(i.g){Bo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Vt(i,"ready");try{c.onreadystatechange=f}catch{}}}function Bo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Xt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Ju(l)}};function Lo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Tc(i){const l={};i=(i.g&&2<=Xt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(O(i[f]))continue;var c=v(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const b=l[A]||[];l[A]=b,b.push(c)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Oo(i){this.Aa=0,this.i=[],this.j=new cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yn("baseRetryDelayMs",5e3,i),this.cb=yn("retryDelaySeedMs",1e4,i),this.Wa=yn("forwardChannelMaxRetries",2,i),this.wa=yn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Eo(i&&i.concurrentRequestLimit),this.Da=new yc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oo.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){kt(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Wo(this,null,this.W),ar(this)};function ys(i){if(Fo(i),i.G==3){var l=i.U++,c=Yt(i.I);if(it(c,"SID",i.K),it(c,"RID",l),it(c,"TYPE","terminate"),_n(i,c),l=new se(i,i.j,l),l.L=2,l.v=nr(Yt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Go(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Zn(l)}Ko(i)}function or(i){i.g&&(Es(i),i.g.cancel(),i.g=null)}function Fo(i){or(i),i.u&&(u.clearTimeout(i.u),i.u=null),lr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function ar(i){if(!vo(i.h)&&!i.s){i.s=!0;var l=i.Ga;N||Z(),rt||(N(),rt=!0),lt.add(l,i),i.B=0}}function Ic(i,l){return To(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=un(E(i.Ga,i,l),Ho(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new se(this,this.j,i);let b=this.o;if(this.S&&(b?(b=p(b),_(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=$o(this,A,l),c=Yt(this.I),it(c,"RID",i),it(c,"CVER",22),this.D&&it(c,"X-HTTP-Session-Id",this.D),_n(this,c),b&&(this.O?l="headers="+encodeURIComponent(String(ko(b)))+"&"+l:this.m&&gs(c,this.m,b)),ps(this.h,A),this.Ua&&it(c,"TYPE","init"),this.P?(it(c,"$req",l),it(c,"SID","null"),A.T=!0,hs(A,c,null)):hs(A,c,l),this.G=2}}else this.G==3&&(i?Uo(this,i):this.i.length==0||vo(this.h)||Uo(this))};function Uo(i,l){var c;l?c=l.l:c=i.U++;const f=Yt(i.I);it(f,"SID",i.K),it(f,"RID",c),it(f,"AID",i.T),_n(i,f),i.m&&i.o&&gs(f,i.m,i.o),c=new se(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=$o(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ps(i.h,c),hs(c,f,l)}function _n(i,l){i.H&&W(i.H,function(c,f){it(l,f,c)}),i.l&&Ao({},function(c,f){it(l,f,c)})}function $o(i,l,c){c=Math.min(i.i.length,c);var f=i.l?E(i.l.Na,i.l,i):null;t:{var A=i.i;let b=-1;for(;;){const k=["count="+c];b==-1?0<c?(b=A[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let st=!0;for(let gt=0;gt<c;gt++){let X=A[gt].g;const wt=A[gt].map;if(X-=b,0>X)b=Math.max(0,A[gt].g-100),st=!1;else try{_c(wt,k,"req"+X+"_")}catch{f&&f(wt)}}if(st){f=k.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function qo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;N||Z(),rt||(N(),rt=!0),lt.add(l,i),i.v=0}}function _s(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=un(E(i.Fa,i),Ho(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,jo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=un(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),or(this),jo(this))};function Es(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function jo(i){i.g=new se(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Yt(i.qa);it(l,"RID","rpc"),it(l,"SID",i.K),it(l,"AID",i.T),it(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&it(l,"TO",i.ja),it(l,"TYPE","xmlhttp"),_n(i,l),i.m&&i.o&&gs(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=nr(Yt(l)),c.m=null,c.P=!0,go(c,i)}n.Za=function(){this.C!=null&&(this.C=null,or(this),_s(this),kt(19))};function lr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function zo(i,l){var c=null;if(i.g==l){lr(i),Es(i),i.g=null;var f=2}else if(ms(i.h,l))c=l.D,Io(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Yn(),Vt(f,new ho(f,c)),ar(i)}else qo(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Ic(i,l)||f==2&&_s(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:Ie(i,5);break;case 4:Ie(i,10);break;case 3:Ie(i,6);break;default:Ie(i,2)}}}function Ho(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function Ie(i,l){if(i.j.info("Error code "+l),l==2){var c=E(i.fb,i),f=i.Xa;const A=!f;f=new Te(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||tr(f,"https"),nr(f),A?pc(f.toString(),c):gc(f.toString(),c)}else kt(2);i.G=0,i.l&&i.l.sa(l),Ko(i),Fo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Ko(i){if(i.G=0,i.ka=[],i.l){const l=wo(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.ra()}}function Wo(i,l,c){var f=c instanceof Te?Yt(c):new Te(c);if(f.g!="")l&&(f.g=l+"."+f.g),er(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var b=new Te(null);f&&tr(b,f),l&&(b.g=l),A&&er(b,A),c&&(b.l=c),f=b}return c=i.D,l=i.ya,c&&l&&it(f,c,l),it(f,"VER",i.la),_n(i,f),f}function Go(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ut(new rr({eb:c})):new ut(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qo(){}n=Qo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ur(){}ur.prototype.g=function(i,l){return new Lt(i,l)};function Lt(i,l){It.call(this),this.g=new Oo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Le(this)}R(Lt,It),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){ys(this.g)},Lt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=is(i),i=c);l.i.push(new ic(l.Ya++,i)),l.G==3&&ar(l)},Lt.prototype.N=function(){this.g.l=null,delete this.j,ys(this.g),delete this.g,Lt.aa.N.call(this)};function Yo(i){as.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}R(Yo,as);function Xo(){ls.call(this),this.status=1}R(Xo,ls);function Le(i){this.g=i}R(Le,Qo),Le.prototype.ua=function(){Vt(this.g,"a")},Le.prototype.ta=function(i){Vt(this.g,new Yo(i))},Le.prototype.sa=function(i){Vt(this.g,new Xo)},Le.prototype.ra=function(){Vt(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,fl=function(){return new ur},dl=function(){return Yn()},hl=Ee,zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,gr=Xn,fo.COMPLETE="complete",cl=fo,ao.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",It.prototype.listen=It.prototype.K,Tn=ao,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,ul=ut}).apply(typeof hr<"u"?hr:typeof self<"u"?self:typeof window<"u"?window:{});const ua="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new nl("@firebase/firestore");function En(){return Re.logLevel}function M(n,...t){if(Re.logLevel<=Q.DEBUG){const e=t.map(ui);Re.debug(`Firestore (${tn}): ${n}`,...e)}}function ne(n,...t){if(Re.logLevel<=Q.ERROR){const e=t.map(ui);Re.error(`Firestore (${tn}): ${n}`,...e)}}function ze(n,...t){if(Re.logLevel<=Q.WARN){const e=t.map(ui);Re.warn(`Firestore (${tn}): ${n}`,...e)}}function ui(n){if(typeof n=="string")return n;try{/**
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
 */function q(n="Unexpected state"){const t=`FIRESTORE (${tn}) INTERNAL ASSERTION FAILED: `+n;throw ne(t),new Error(t)}function nt(n,t){n||q()}function H(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ze{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ml{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Dt.UNAUTHENTICATED))}shutdown(){}}class nd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new ml(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new Dt(t)}}class sd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class id{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new sd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class od{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ad{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){nt(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new od(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class pl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ld(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function J(n,t){return n<t?-1:n>t?1:0}function He(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new $(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new $(0,0))}static max(){return new z(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(),r===void 0?r=t.length-e:r>t.length-e&&q(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ot extends Vn{construct(t,e,r){return new ot(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ot(e)}static emptyPath(){return new ot([])}}const ud=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Vn{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return ud.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new x(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(ot.fromString(t))}static fromName(t){return new B(ot.fromString(t).popFirst(5))}static empty(){return new B(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new ot(t.slice()))}}function cd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new $(e+1,0):new $(e,r));return new fe(s,B.empty(),t)}function hd(n){return new fe(n.readTime,n.key,-1)}class fe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new fe(z.min(),B.empty(),-1)}static max(){return new fe(z.max(),B.empty(),-1)}}function dd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(n.documentKey,t.documentKey),e!==0?e:J(n.largestBatchId,t.largestBatchId))}/**
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
 */async function On(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==fd)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function pd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Fn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ci{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ci.oe=-1;function Mr(n){return n==null}function Ar(n){return n===0&&1/n==-1/0}function gd(n){return typeof n=="number"&&Number.isInteger(n)&&!Ar(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ke(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function gl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e){this.comparator=t,this.root=e||yt.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dr(this.root,t,this.comparator,!0)}}class dr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=o??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new yt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,r,s,o){return this}insert(t,e,r){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ha(this.data.getIterator())}getIteratorFrom(t){return new ha(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new vt(this.comparator);return e.data=t,e}}class ha{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new vt(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return He(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new yl("Invalid base64 string: "+o):o}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const yd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(n){if(nt(!!n),typeof n=="string"){let t=0;const e=yd.exec(n);if(nt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ht(n.seconds),nanos:ht(n.nanos)}}function ht(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pe(n){return typeof n=="string"?Tt.fromBase64String(n):Tt.fromUint8Array(n)}/**
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
 */function hi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function di(n){const t=n.mapValue.fields.__previous_value__;return hi(t)?di(t):t}function kn(n){const t=me(n.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const fr={mapValue:{}};function Ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hi(n)?4:vd(n)?9007199254740991:Ed(n)?10:11:q()}function Gt(n,t){if(n===t)return!0;const e=Ce(n);if(e!==Ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return kn(n).isEqual(kn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=me(s.timestampValue),u=me(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Pe(s.bytesValue).isEqual(Pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ht(s.geoPointValue.latitude)===ht(o.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ht(s.integerValue)===ht(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ht(s.doubleValue),u=ht(o.doubleValue);return a===u?Ar(a)===Ar(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return He(n.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(ca(a)!==ca(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Gt(a[h],u[h])))return!1;return!0}(n,t);default:return q()}}function xn(n,t){return(n.values||[]).find(e=>Gt(e,t))!==void 0}function Ke(n,t){if(n===t)return 0;const e=Ce(n),r=Ce(t);if(e!==r)return J(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=ht(o.integerValue||o.doubleValue),h=ht(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return da(n.timestampValue,t.timestampValue);case 4:return da(kn(n),kn(t));case 5:return J(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Pe(o),h=Pe(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=J(u[d],h[d]);if(m!==0)return m}return J(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=J(ht(o.latitude),ht(a.latitude));return u!==0?u:J(ht(o.longitude),ht(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return fa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const T=o.fields||{},E=a.fields||{},S=(u=T.value)===null||u===void 0?void 0:u.arrayValue,R=(h=E.value)===null||h===void 0?void 0:h.arrayValue,C=J(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=R==null?void 0:R.values)===null||m===void 0?void 0:m.length)||0);return C!==0?C:fa(S,R)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===fr.mapValue&&a===fr.mapValue)return 0;if(o===fr.mapValue)return 1;if(a===fr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const E=J(h[T],m[T]);if(E!==0)return E;const S=Ke(u[h[T]],d[m[T]]);if(S!==0)return S}return J(h.length,m.length)}(n.mapValue,t.mapValue);default:throw q()}}function da(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return J(n,t);const e=me(n),r=me(t),s=J(e.seconds,r.seconds);return s!==0?s:J(e.nanos,r.nanos)}function fa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ke(e[s],r[s]);if(o)return o}return J(e.length,r.length)}function We(n){return Hs(n)}function Hs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return B.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Hs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Hs(e.fields[a])}`;return s+"}"}(n.mapValue):q()}function ma(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ks(n){return!!n&&"integerValue"in n}function fi(n){return!!n&&"arrayValue"in n}function pa(n){return!!n&&"nullValue"in n}function ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yr(n){return!!n&&"mapValue"in n}function Ed(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function bn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ke(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=bn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=bn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function vd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bn(e)}setAll(t){let e=_t.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=bn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ke(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Mt(bn(this.value))}}function _l(n){const t=[];return ke(n.fields,(e,r)=>{const s=new _t([e]);if(yr(r)){const o=_l(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Rt(t,0,z.min(),z.min(),z.min(),Mt.empty(),0)}static newFoundDocument(t,e,r,s){return new Rt(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new Rt(t,2,e,z.min(),z.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,z.min(),z.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class br{constructor(t,e){this.position=t,this.inclusive=e}}function ya(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),e.key):r=Ke(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function _a(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Gt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Mn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Td(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class El{}class ft extends El{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new wd(t,e,r):e==="array-contains"?new Sd(t,r):e==="in"?new Dd(t,r):e==="not-in"?new Rd(t,r):e==="array-contains-any"?new Pd(t,r):new ft(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ad(t,r):new bd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ke(e,this.value)):e!==null&&Ce(this.value)===Ce(e)&&this.matchesComparison(Ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends El{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new qt(t,e)}matches(t){return vl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function Tl(n){return Id(n)&&vl(n)}function Id(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function Ws(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+We(n.value);if(Tl(n))return n.filters.map(t=>Ws(t)).join(",");{const t=n.filters.map(e=>Ws(e)).join(",");return`${n.op}(${t})`}}function Il(n,t){return n instanceof ft?function(r,s){return s instanceof ft&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(n,t):n instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Il(a,s.filters[u]),!0):!1}(n,t):void q()}function wl(n){return n instanceof ft?function(e){return`${e.field.canonicalString()} ${e.op} ${We(e.value)}`}(n):n instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(wl).join(" ,")+"}"}(n):"Filter"}class wd extends ft{constructor(t,e,r){super(t,e,r),this.key=B.fromName(r.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ad extends ft{constructor(t,e){super(t,"in",e),this.keys=Al("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bd extends ft{constructor(t,e){super(t,"not-in",e),this.keys=Al("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Al(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>B.fromName(r.referenceValue))}class Sd extends ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fi(e)&&xn(e.arrayValue,this.value)}}class Dd extends ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&xn(this.value.arrayValue,e)}}class Rd extends ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!xn(this.value.arrayValue,e)}}class Pd extends ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>xn(this.value.arrayValue,r))}}/**
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
 */class Cd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function Ea(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Cd(n,t,e,r,s,o,a)}function mi(n){const t=H(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ws(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Mr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>We(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>We(r)).join(",")),t.ue=e}return t.ue}function pi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Td(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Il(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!_a(n.startAt,t.startAt)&&_a(n.endAt,t.endAt)}function Gs(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Vd(n,t,e,r,s,o,a,u){return new en(n,t,e,r,s,o,a,u)}function gi(n){return new en(n)}function va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bl(n){return n.collectionGroup!==null}function Sn(n){const t=H(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new vt(_t.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Mn(o,r))}),e.has(_t.keyField().canonicalString())||t.ce.push(new Mn(_t.keyField(),r))}return t.ce}function Kt(n){const t=H(n);return t.le||(t.le=kd(t,Sn(n))),t.le}function kd(n,t){if(n.limitType==="F")return Ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Mn(s.field,o)});const e=n.endAt?new br(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new br(n.startAt.position,n.startAt.inclusive):null;return Ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Qs(n,t){const e=n.filters.concat([t]);return new en(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Sr(n,t,e){return new en(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Br(n,t){return pi(Kt(n),Kt(t))&&n.limitType===t.limitType}function Sl(n){return`${mi(Kt(n))}|lt:${n.limitType}`}function Fe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>wl(s)).join(", ")}]`),Mr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>We(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>We(s)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function Lr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):B.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Sn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=ya(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Sn(r),s)||r.endAt&&!function(a,u,h){const d=ya(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Sn(r),s))}(n,t)}function Nd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dl(n){return(t,e)=>{let r=!1;for(const s of Sn(n)){const o=xd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function xd(n,t,e){const r=n.field.isKeyField()?B.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Ke(h,d):q()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ke(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return gl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new at(B.comparator);function re(){return Md}const Rl=new at(B.comparator);function In(...n){let t=Rl;for(const e of n)t=t.insert(e.key,e);return t}function Pl(n){let t=Rl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function be(){return Dn()}function Cl(){return Dn()}function Dn(){return new nn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Bd=new at(B.comparator),Ld=new vt(B.comparator);function K(...n){let t=Ld;for(const e of n)t=t.add(e);return t}const Od=new vt(J);function Fd(){return Od}/**
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
 */function yi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(t)?"-0":t}}function Vl(n){return{integerValue:""+n}}function Ud(n,t){return gd(t)?Vl(t):yi(n,t)}/**
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
 */class Or{constructor(){this._=void 0}}function $d(n,t,e){return n instanceof Dr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&hi(o)&&(o=di(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Bn?Nl(n,t):n instanceof Ln?xl(n,t):function(s,o){const a=kl(s,o),u=Ta(a)+Ta(s.Pe);return Ks(a)&&Ks(s.Pe)?Vl(u):yi(s.serializer,u)}(n,t)}function qd(n,t,e){return n instanceof Bn?Nl(n,t):n instanceof Ln?xl(n,t):e}function kl(n,t){return n instanceof Rr?function(r){return Ks(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Dr extends Or{}class Bn extends Or{constructor(t){super(),this.elements=t}}function Nl(n,t){const e=Ml(t);for(const r of n.elements)e.some(s=>Gt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ln extends Or{constructor(t){super(),this.elements=t}}function xl(n,t){let e=Ml(t);for(const r of n.elements)e=e.filter(s=>!Gt(s,r));return{arrayValue:{values:e}}}class Rr extends Or{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ta(n){return ht(n.integerValue||n.doubleValue)}function Ml(n){return fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof Ln&&s instanceof Ln?He(r.elements,s.elements,Gt):r instanceof Rr&&s instanceof Rr?Gt(r.Pe,s.Pe):r instanceof Dr&&s instanceof Dr}(n.transform,t.transform)}class zd{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Fr{}function Bl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new _i(n.key,Ut.none()):new Un(n.key,n.data,Ut.none());{const e=n.data,r=Mt.empty();let s=new vt(_t.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ge(n.key,r,new Ot(s.toArray()),Ut.none())}}function Hd(n,t,e){n instanceof Un?function(s,o,a){const u=s.value.clone(),h=wa(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ge?function(s,o,a){if(!_r(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=wa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ll(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Rn(n,t,e,r){return n instanceof Un?function(o,a,u,h){if(!_r(o.precondition,a))return u;const d=o.value.clone(),m=Aa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ge?function(o,a,u,h){if(!_r(o.precondition,a))return u;const d=Aa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ll(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,u){return _r(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Kd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=kl(r.transform,s||null);o!=null&&(e===null&&(e=Mt.empty()),e.set(r.field,o))}return e||null}function Ia(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&He(r,s,(o,a)=>jd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Un extends Fr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ge extends Fr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ll(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function wa(n,t,e){const r=new Map;nt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,qd(a,u,e[s]))}return r}function Aa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,$d(o,a,t))}return r}class _i extends Fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wd extends Fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Hd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Cl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Bl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),K())}isEqual(t){return this.batchId===t.batchId&&He(this.mutations,t.mutations,(e,r)=>Ia(e,r))&&He(this.baseMutations,t.baseMutations,(e,r)=>Ia(e,r))}}class Ei{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){nt(t.mutations.length===r.length);let s=function(){return Bd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ei(t,e,r,s)}}/**
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
 */var dt,G;function Xd(n){switch(n){default:return q();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Ol(n){if(n===void 0)return ne("GRPC error has no .code"),D.UNKNOWN;switch(n){case dt.OK:return D.OK;case dt.CANCELLED:return D.CANCELLED;case dt.UNKNOWN:return D.UNKNOWN;case dt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case dt.INTERNAL:return D.INTERNAL;case dt.UNAVAILABLE:return D.UNAVAILABLE;case dt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case dt.NOT_FOUND:return D.NOT_FOUND;case dt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case dt.ABORTED:return D.ABORTED;case dt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case dt.DATA_LOSS:return D.DATA_LOSS;default:return q()}}(G=dt||(dt={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Zd=new Se([4294967295,4294967295],0);function ba(n){const t=Jd().encode(n),e=new ll;return e.update(t),new Uint8Array(e.digest())}function Sa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Se([e,r],0),new Se([s,o],0)]}class vi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new wn(`Invalid padding: ${e}`);if(r<0)throw new wn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new wn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new wn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Se.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Se.fromNumber(r)));return s.compare(Zd)===1&&(s=new Se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ba(t),[r,s]=Sa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new vi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=ba(t),[r,s]=Sa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,$n.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ur(z.min(),s,new at(J),re(),K())}}class $n{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new $n(r,e,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Fl{constructor(t,e){this.targetId=t,this.me=e}}class Ul{constructor(t,e,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Da{constructor(){this.fe=0,this.ge=Pa(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=K(),e=K(),r=K();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:q()}}),new $n(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Pa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,nt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tf{constructor(t){this.Le=t,this.Be=new Map,this.ke=re(),this.qe=Ra(),this.Qe=new at(J)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Gs(o))if(r===0){const a=new B(o.path);this.Ue(e,a,Rt.newNoDocument(a,z.min()))}else nt(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=Pe(r).toUint8Array()}catch(h){if(h instanceof yl)return ze("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new vi(a,s,o)}catch(h){return ze(h instanceof wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&Gs(u.target)){const h=new B(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Rt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=K();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Ur(t,e,this.Qe,this.ke,r);return this.ke=re(),this.qe=Ra(),this.Qe=new at(J),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Da,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new vt(J),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Da),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ra(){return new at(B.comparator)}function Pa(){return new at(B.comparator)}const ef={asc:"ASCENDING",desc:"DESCENDING"},nf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rf={and:"AND",or:"OR"};class sf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ys(n,t){return n.useProto3Json||Mr(t)?t:{value:t}}function Pr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $l(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function of(n,t){return Pr(n,t.toTimestamp())}function Wt(n){return nt(!!n),z.fromTimestamp(function(e){const r=me(e);return new $(r.seconds,r.nanos)}(n))}function Ti(n,t){return Xs(n,t).canonicalString()}function Xs(n,t){const e=function(s){return new ot(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ql(n){const t=ot.fromString(n);return nt(Wl(t)),t}function Js(n,t){return Ti(n.databaseId,t.path)}function bs(n,t){const e=ql(t);if(e.get(1)!==n.databaseId.projectId)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new B(zl(e))}function jl(n,t){return Ti(n.databaseId,t)}function af(n){const t=ql(n);return t.length===4?ot.emptyPath():zl(t)}function Zs(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zl(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ca(n,t,e){return{name:Js(n,t),fields:e.value.mapValue.fields}}function lf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(nt(m===void 0||typeof m=="string"),Tt.fromBase64String(m||"")):(nt(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Tt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?D.UNKNOWN:Ol(d.code);return new x(m,d.message||"")}(a);e=new Ul(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=bs(n,r.document.name),o=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):z.min(),u=new Mt({mapValue:{fields:r.document.fields}}),h=Rt.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Er(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=bs(n,r.document),o=r.readTime?Wt(r.readTime):z.min(),a=Rt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Er([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=bs(n,r.document),o=r.removedTargetIds||[];e=new Er([],o,s,null)}else{if(!("filter"in t))return q();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Yd(s,o),u=r.targetId;e=new Fl(u,a)}}return e}function uf(n,t){let e;if(t instanceof Un)e={update:Ca(n,t.key,t.value)};else if(t instanceof _i)e={delete:Js(n,t.key)};else if(t instanceof ge)e={update:Ca(n,t.key,t.data),updateMask:_f(t.fieldMask)};else{if(!(t instanceof Wd))return q();e={verify:Js(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ln)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw q()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:of(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q()}(n,t.precondition)),e}function cf(n,t){return n&&n.length>0?(nt(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Wt(s.updateTime):Wt(o);return a.isEqual(z.min())&&(a=Wt(o)),new zd(a,s.transformResults||[])}(e,t))):[]}function hf(n,t){return{documents:[jl(n,t.path)]}}function df(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=jl(n,s);const o=function(d){if(d.length!==0)return Kl(qt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(E){return{field:Ue(E.field),direction:pf(E.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Ys(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function ff(n){let t=af(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){nt(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const E=Hl(T);return E instanceof qt&&Tl(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(E=>function(R){return new Mn($e(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(E))}(e.orderBy));let u=null;e.limit&&(u=function(T){let E;return E=typeof T=="object"?T.value:T,Mr(E)?null:E}(e.limit));let h=null;e.startAt&&(h=function(T){const E=!!T.before,S=T.values||[];return new br(S,E)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const E=!T.before,S=T.values||[];return new br(S,E)}(e.endAt)),Vd(t,s,a,o,u,"F",h,d)}function mf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=$e(e.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$e(e.unaryFilter.field);return ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$e(e.unaryFilter.field);return ft.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$e(e.unaryFilter.field);return ft.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return ft.create($e(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(r=>Hl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function pf(n){return ef[n]}function gf(n){return nf[n]}function yf(n){return rf[n]}function Ue(n){return{fieldPath:n.canonicalString()}}function $e(n){return _t.fromServerFormat(n.fieldPath)}function Kl(n){return n instanceof ft?function(e){if(e.op==="=="){if(ga(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NAN"}};if(pa(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ga(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NOT_NAN"}};if(pa(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ue(e.field),op:gf(e.op),value:e.value}}}(n):n instanceof qt?function(e){const r=e.getFilters().map(s=>Kl(s));return r.length===1?r[0]:{compositeFilter:{op:yf(e.op),filters:r}}}(n):q()}function _f(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e,r,s,o=z.min(),a=z.min(),u=Tt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new le(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.ct=t}}function vf(n){const t=ff({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sr(t,t.limit,"L"):t}/**
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
 */class Tf{constructor(){this.un=new If}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(fe.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(fe.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class If{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new vt(ot.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new vt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ge(0)}static kn(){return new Ge(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.changes=new nn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Rn(r.mutation,s,Ot.empty(),$.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,K()).next(()=>r))}getLocalViewOfDocuments(t,e,r=K()){const s=be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=In();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=be();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,K()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=re();const a=Dn(),u=function(){return Dn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ge)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Rn(m.mutation,d,m.mutation.getFieldMask(),$.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var T;return u.set(d,new Af(m,(T=a.get(d))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Dn();let s=new at((a,u)=>a-u),o=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Ot.empty();m=u.applyToLocalView(d,m),r.set(h,m);const T=(s.get(u.batchId)||K()).add(h);s=s.insert(u.batchId,T)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,T=Cl();m.forEach(E=>{if(!o.has(E)){const S=Bl(e.get(E),r.get(E));S!==null&&T.set(E,S),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(be());let u=-1,h=o;return a.next(d=>P.forEach(d,(m,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(E=>{h=h.insert(m,E)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,K())).next(m=>({batchId:u,changes:Pl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(r=>{let s=In();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=In();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const d=function(T,E){return new en(E,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((T,E)=>{a=a.insert(T,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Rt.newInvalidDocument(m)))});let u=In();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Rn(m.mutation,d,Ot.empty(),$.now()),Lr(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class Sf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:vf(s.bundledQuery),readTime:Wt(s.readTime)}}(e)),P.resolve()}}/**
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
 */class Df{constructor(){this.overlays=new at(B.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=be();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=be(),o=e.length+1,a=new B(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new at((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=be(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return P.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Qd(e,r));let o=this.Ir.get(e);o===void 0&&(o=K(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Rf{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.Tr=new vt(pt.Er),this.dr=new vt(pt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new pt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new pt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new B(new ot([])),r=new pt(e,t),s=new pt(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new B(new ot([])),r=new pt(e,t),s=new pt(e,t+1);let o=K();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new pt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class pt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return B.comparator(t.key,e.key)||J(t.wr,e.wr)}static Ar(t,e){return J(t.wr,e.wr)||B.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new vt(pt.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new pt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new pt(e,0),s=new pt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const u=this.Dr(a.wr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new vt(J);return e.forEach(s=>{const o=new pt(s,0),a=new pt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;B.isDocumentKey(o)||(o=o.child(""));const a=new pt(new B(o),0);let u=new vt(J);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.wr)),!0)},a),P.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){nt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(e.mutations,s=>{const o=new pt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new pt(e,0),s=this.br.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.Mr=t,this.docs=function(){return new at(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let r=re();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Rt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=re();const a=e.path,u=new B(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||dd(hd(m),r)<=0||(s.has(m.key)||Lr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){q()}Or(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Vf(this)}getSize(t){return P.resolve(this.size)}}class Vf extends wf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.persistence=t,this.Nr=new nn(e=>mi(e),pi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ii,this.targetCount=0,this.kr=Ge.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ci(0),this.Kr=!1,this.Kr=!0,this.$r=new Rf,this.referenceDelegate=t(this),this.Ur=new kf(this),this.indexManager=new Tf,this.remoteDocumentCache=function(s){return new Cf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ef(e),this.Gr=new Sf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Df,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Pf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new xf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class xf extends md{constructor(t){super(),this.currentSequenceNumber=t}}class wi{constructor(t){this.persistence=t,this.Jr=new Ii,this.Yr=null}static Zr(t){return new wi(t)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=B.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=K(),s=K();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ai(t,e.fromCache,r,s)}}/**
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
 */class Bf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Lc()?8:pd(Mc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Mf;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(En()<=Q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(En()<=Q.DEBUG&&M("QueryEngine","Query:",Fe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(En()<=Q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(e))):P.resolve())}Yi(t,e){if(va(e))return P.resolve(null);let r=Kt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Sr(e,null,"F"),r=Kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=K(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,u);return this.ns(e,d,a,h.readTime)?this.Yi(t,Sr(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return va(e)||s.isEqual(z.min())?P.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?P.resolve(null):(En()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.rs(t,a,e,cd(s,-1)).next(u=>u))})}ts(t,e){let r=new vt(Dl(t));return e.forEach((s,o)=>{Lr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return En()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.Ji.getDocumentsMatchingQuery(t,e,fe.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Lf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new at(J),this._s=new nn(o=>mi(o),pi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Of(n,t,e,r){return new Lf(n,t,e,r)}async function Gl(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=K();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Ff(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const T=d.batch,E=T.keys();let S=P.resolve();return E.forEach(R=>{S=S.next(()=>m.getEntry(h,R)).next(C=>{const V=d.docVersions.get(R);nt(V!==null),C.version.compareTo(V)<0&&(T.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),m.addEntry(C)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=K();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Ql(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Uf(n,t){const e=H(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((m,T)=>{const E=s.get(T);if(!E)return;u.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,T)));let S=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?S=S.withResumeToken(Tt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(T,S),function(C,V,L){return C.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(E,S,m)&&u.push(e.Ur.updateTargetData(o,S))});let h=re(),d=K();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push($f(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(z.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(T=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function $f(n,t,e){let r=K(),s=K();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=re();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function qf(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jf(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new le(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ti(n,t,e){const r=H(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Fn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Va(n,t,e){const r=H(n);let s=z.min(),o=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=H(h),E=T._s.get(m);return E!==void 0?P.resolve(T.os.get(E)):T.Ur.getTargetData(d,m)}(r,a,Kt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?o:K())).next(u=>(zf(r,Nd(t),u),{documents:u,Ts:o})))}function zf(n,t,e){let r=n.us.get(t)||z.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class ka{constructor(){this.activeTargetIds=Fd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hf{constructor(){this.so=new ka,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ka,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Na{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mr=null;function Ss(){return mr===null?mr=function(){return 268435456+Math.round(2147483648*Math.random())}():mr++,"0x"+mr.toString(16)}/**
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
 */const bt="WebChannelConnection";class Qf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const u=Ss(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw ze("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,u){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Wf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Ss();return new Promise((a,u)=>{const h=new ul;h.setWithCredentials(!0),h.listenOnce(cl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case gr.NO_ERROR:const m=h.getResponseJson();M(bt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case gr.TIMEOUT:M(bt,`RPC '${t}' ${o} timed out`),u(new x(D.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const T=h.getStatus();if(M(bt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const R=function(V){const L=V.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(L)>=0?L:D.UNKNOWN}(S.status);u(new x(R,S.message))}else u(new x(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new x(D.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{M(bt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);M(bt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=Ss(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=fl(),u=dl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(bt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const T=a.createWebChannel(m,h);let E=!1,S=!1;const R=new Gf({Io:V=>{S?M(bt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(E||(M(bt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),E=!0),M(bt,`RPC '${t}' stream ${s} sending:`,V),T.send(V))},To:()=>T.close()}),C=(V,L,O)=>{V.listen(L,U=>{try{O(U)}catch(Y){setTimeout(()=>{throw Y},0)}})};return C(T,Tn.EventType.OPEN,()=>{S||(M(bt,`RPC '${t}' stream ${s} transport opened.`),R.yo())}),C(T,Tn.EventType.CLOSE,()=>{S||(S=!0,M(bt,`RPC '${t}' stream ${s} transport closed`),R.So())}),C(T,Tn.EventType.ERROR,V=>{S||(S=!0,ze(bt,`RPC '${t}' stream ${s} transport errored:`,V),R.So(new x(D.UNAVAILABLE,"The operation could not be completed")))}),C(T,Tn.EventType.MESSAGE,V=>{var L;if(!S){const O=V.data[0];nt(!!O);const U=O,Y=U.error||((L=U[0])===null||L===void 0?void 0:L.error);if(Y){M(bt,`RPC '${t}' stream ${s} received error:`,Y);const et=Y.status;let W=function(g){const _=dt[g];if(_!==void 0)return Ol(_)}(et),w=Y.message;W===void 0&&(W=D.INTERNAL,w="Unknown error status: "+et+" with message "+Y.message),S=!0,R.So(new x(W,w)),T.close()}else M(bt,`RPC '${t}' stream ${s} received:`,O),R.bo(O)}}),C(u,hl.STAT_EVENT,V=>{V.stat===zs.PROXY?M(bt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===zs.NOPROXY&&M(bt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Ds(){return typeof document<"u"?document:null}/**
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
 */function $r(n){return new sf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,e,r,s,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new x(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yf extends Xl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=lf(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Wt(a.readTime):z.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Zs(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=Gs(h)?{documents:hf(o,h)}:{query:df(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=$l(o,a.resumeToken);const d=Ys(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){u.readTime=Pr(o,a.snapshotVersion.toTimestamp());const d=Ys(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=mf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Zs(this.serializer),e.removeTarget=t,this.a_(e)}}class Xf extends Xl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return nt(!!t.streamToken),this.lastStreamToken=t.streamToken,nt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=cf(t.writeResults,t.commitTime),r=Wt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Zs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>uf(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Xs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(D.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Xs(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Zf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ne(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ne(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=H(h);d.L_.add(4),await qn(d),d.q_.set("Unknown"),d.L_.delete(4),await qr(d)}(this))})}),this.q_=new Zf(r,s)}}async function qr(n){if(Ne(n))for(const t of n.B_)await t(!0)}async function qn(n){for(const t of n.B_)await t(!1)}function Jl(n,t){const e=H(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ri(e)?Di(e):rn(e).r_()&&Si(e,t))}function bi(n,t){const e=H(n),r=rn(e);e.N_.delete(t),r.r_()&&Zl(e,t),e.N_.size===0&&(r.r_()?r.o_():Ne(e)&&e.q_.set("Unknown"))}function Si(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rn(n).A_(t)}function Zl(n,t){n.Q_.xe(t),rn(n).R_(t)}function Di(n){n.Q_=new tf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),rn(n).start(),n.q_.v_()}function Ri(n){return Ne(n)&&!rn(n).n_()&&n.N_.size>0}function Ne(n){return H(n).L_.size===0}function tu(n){n.Q_=void 0}async function em(n){n.q_.set("Online")}async function nm(n){n.N_.forEach((t,e)=>{Si(n,t)})}async function rm(n,t){tu(n),Ri(n)?(n.q_.M_(t),Di(n)):n.q_.set("Unknown")}async function sm(n,t,e){if(n.q_.set("Online"),t instanceof Ul&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Cr(n,r)}else if(t instanceof Er?n.Q_.Ke(t):t instanceof Fl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(z.min()))try{const r=await Ql(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(Tt.EMPTY_BYTE_STRING,m.snapshotVersion)),Zl(o,h);const T=new le(m.target,h,d,m.sequenceNumber);Si(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Cr(n,r)}}async function Cr(n,t,e){if(!Fn(t))throw t;n.L_.add(1),await qn(n),n.q_.set("Offline"),e||(e=()=>Ql(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await qr(n)})}function eu(n,t){return t().catch(e=>Cr(n,e,t))}async function jr(n){const t=H(n),e=pe(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;im(t);)try{const s=await qf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,om(t,s)}catch(s){await Cr(t,s)}nu(t)&&ru(t)}function im(n){return Ne(n)&&n.O_.length<10}function om(n,t){n.O_.push(t);const e=pe(n);e.r_()&&e.V_&&e.m_(t.mutations)}function nu(n){return Ne(n)&&!pe(n).n_()&&n.O_.length>0}function ru(n){pe(n).start()}async function am(n){pe(n).p_()}async function lm(n){const t=pe(n);for(const e of n.O_)t.m_(e.mutations)}async function um(n,t,e){const r=n.O_.shift(),s=Ei.from(r,t,e);await eu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await jr(n)}async function cm(n,t){t&&pe(n).V_&&await async function(r,s){if(function(a){return Xd(a)&&a!==D.ABORTED}(s.code)){const o=r.O_.shift();pe(r).s_(),await eu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await jr(r)}}(n,t),nu(n)&&ru(n)}async function xa(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Ne(e);e.L_.add(3),await qn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await qr(e)}async function hm(n,t){const e=H(n);t?(e.L_.delete(2),await qr(e)):t||(e.L_.add(2),await qn(e),e.q_.set("Unknown"))}function rn(n){return n.K_||(n.K_=function(e,r,s){const o=H(e);return o.w_(),new Yf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:em.bind(null,n),Ro:nm.bind(null,n),mo:rm.bind(null,n),d_:sm.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ri(n)?Di(n):n.q_.set("Unknown")):(await n.K_.stop(),tu(n))})),n.K_}function pe(n){return n.U_||(n.U_=function(e,r,s){const o=H(e);return o.w_(),new Xf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:am.bind(null,n),mo:cm.bind(null,n),f_:lm.bind(null,n),g_:um.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await jr(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Pi(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ci(n,t){if(ne("AsyncQueue",`${t}: ${n}`),Fn(n))return new x(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.comparator=t?(e,r)=>t(e,r)||B.comparator(e.key,r.key):(e,r)=>B.comparator(e.key,r.key),this.keyedMap=In(),this.sortedSet=new at(this.comparator)}static emptySet(t){return new je(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof je)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new je;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.W_=new at(B.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Qe{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Qe(t,e,je.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Br(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class fm{constructor(){this.queries=Ba(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=H(e),o=s.queries;s.queries=Ba(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new x(D.ABORTED,"Firestore shutting down"))}}function Ba(){return new nn(n=>Sl(n),Br)}async function su(n,t){const e=H(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new dm,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Ci(a,`Initialization of query '${Fe(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Vi(e)}async function iu(n,t){const e=H(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function mm(n,t){const e=H(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(s)&&(r=!0);a.z_=s}}r&&Vi(e)}function pm(n,t,e){const r=H(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Vi(n){n.Y_.forEach(t=>{t.next()})}var ei,La;(La=ei||(ei={})).ea="default",La.Cache="cache";class ou{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ei.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t){this.key=t}}class lu{constructor(t){this.key=t}}class gm{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=Dl(t),this.Ra=new je(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Ma,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const E=s.get(m),S=Lr(this.query,T)?T:null,R=!!E&&this.mutatedKeys.has(E.key),C=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;E&&S?E.data.isEqual(S.data)?R!==C&&(r.track({type:3,doc:S}),V=!0):this.ga(E,S)||(r.track({type:2,doc:S}),V=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(u=!0)):!E&&S?(r.track({type:0,doc:S}),V=!0):E&&!S&&(r.track({type:1,doc:E}),V=!0,(h||d)&&(u=!0)),V&&(S?(a=a.add(S),o=C?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,T)=>function(S,R){const C=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return C(S)-C(R)}(m.type,T.type)||this.Aa(m.doc,T.doc)),this.pa(r),s=s!=null&&s;const u=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Qe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ma,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new lu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new au(r))}),e}ba(t){this.Ta=t.Ts,this.da=K();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Qe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ym{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class _m{constructor(t){this.key=t,this.va=!1}}class Em{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new nn(u=>Sl(u),Br),this.Ma=new Map,this.xa=new Set,this.Oa=new at(B.comparator),this.Na=new Map,this.La=new Ii,this.Ba={},this.ka=new Map,this.qa=Ge.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vm(n,t,e=!0){const r=mu(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await uu(r,t,e,!0),s}async function Tm(n,t){const e=mu(n);await uu(e,t,!0,!1)}async function uu(n,t,e,r){const s=await jf(n.localStore,Kt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Im(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Jl(n.remoteStore,s),u}async function Im(n,t,e,r,s){n.Ka=(T,E,S)=>async function(C,V,L,O){let U=V.view.ma(L);U.ns&&(U=await Va(C.localStore,V.query,!1).then(({documents:w})=>V.view.ma(w,U)));const Y=O&&O.targetChanges.get(V.targetId),et=O&&O.targetMismatches.get(V.targetId)!=null,W=V.view.applyChanges(U,C.isPrimaryClient,Y,et);return Fa(C,V.targetId,W.wa),W.snapshot}(n,T,E,S);const o=await Va(n.localStore,t,!0),a=new gm(t,o.Ts),u=a.ma(o.documents),h=$n.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Fa(n,e,d.wa);const m=new ym(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function wm(n,t,e){const r=H(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Br(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ti(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&bi(r.remoteStore,s.targetId),ni(r,s.targetId)}).catch(On)):(ni(r,s.targetId),await ti(r.localStore,s.targetId,!0))}async function Am(n,t){const e=H(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),bi(e.remoteStore,r.targetId))}async function bm(n,t,e){const r=km(n);try{const s=await function(a,u){const h=H(a),d=$.now(),m=u.reduce((S,R)=>S.add(R.key),K());let T,E;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=re(),C=K();return h.cs.getEntries(S,m).next(V=>{R=V,R.forEach((L,O)=>{O.isValidDocument()||(C=C.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,R)).next(V=>{T=V;const L=[];for(const O of u){const U=Kd(O,T.get(O.key).overlayedDocument);U!=null&&L.push(new ge(O.key,U,_l(U.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,L,u)}).next(V=>{E=V;const L=V.applyToLocalDocumentSet(T,C);return h.documentOverlayCache.saveOverlays(S,V.batchId,L)})}).then(()=>({batchId:E.batchId,changes:Pl(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new at(J)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await jn(r,s.changes),await jr(r.remoteStore)}catch(s){const o=Ci(s,"Failed to persist write");e.reject(o)}}async function cu(n,t){const e=H(n);try{const r=await Uf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?nt(a.va):s.removedDocuments.size>0&&(nt(a.va),a.va=!1))}),await jn(e,r,t)}catch(r){await On(r)}}function Oa(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=H(a);h.onlineState=u;let d=!1;h.queries.forEach((m,T)=>{for(const E of T.j_)E.Z_(u)&&(d=!0)}),d&&Vi(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sm(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new at(B.comparator);a=a.insert(o,Rt.newNoDocument(o,z.min()));const u=K().add(o),h=new Ur(z.min(),new Map,new at(J),a,u);await cu(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),ki(r)}else await ti(r.localStore,t,!1).then(()=>ni(r,t,e)).catch(On)}async function Dm(n,t){const e=H(n),r=t.batch.batchId;try{const s=await Ff(e.localStore,t);du(e,r,null),hu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await jn(e,s)}catch(s){await On(s)}}async function Rm(n,t,e){const r=H(n);try{const s=await function(a,u){const h=H(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(nt(T!==null),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);du(r,t,e),hu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await jn(r,s)}catch(s){await On(s)}}function hu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function du(n,t,e){const r=H(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function ni(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||fu(n,r)})}function fu(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(bi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ki(n))}function Fa(n,t,e){for(const r of e)r instanceof au?(n.La.addReference(r.key,t),Pm(n,r)):r instanceof lu?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||fu(n,r.key)):q()}function Pm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),ki(n))}function ki(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new B(ot.fromString(t)),r=n.qa.next();n.Na.set(r,new _m(e)),n.Oa=n.Oa.insert(e,r),Jl(n.remoteStore,new le(Kt(gi(e.path)),r,"TargetPurposeLimboResolution",ci.oe))}}async function jn(n,t,e){const r=H(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=Ai.Wi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=H(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>P.forEach(d,E=>P.forEach(E.$i,S=>m.persistence.referenceDelegate.addReference(T,E.targetId,S)).next(()=>P.forEach(E.Ui,S=>m.persistence.referenceDelegate.removeReference(T,E.targetId,S)))))}catch(T){if(!Fn(T))throw T;M("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const E=T.targetId;if(!T.fromCache){const S=m.os.get(E),R=S.snapshotVersion,C=S.withLastLimboFreeSnapshotVersion(R);m.os=m.os.insert(E,C)}}}(r.localStore,o))}async function Cm(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await Gl(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new x(D.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await jn(e,r.hs)}}function Vm(n,t){const e=H(n),r=e.Na.get(t);if(r&&r.va)return K().add(r.key);{let s=K();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function mu(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=cu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sm.bind(null,t),t.Ca.d_=mm.bind(null,t.eventManager),t.Ca.$a=pm.bind(null,t.eventManager),t}function km(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rm.bind(null,t),t}class Vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$r(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Of(this.persistence,new Bf,t.initialUser,this.serializer)}Ga(t){return new Nf(wi.Zr,this.serializer)}Wa(t){return new Hf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vr.provider={build:()=>new Vr};class ri{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Oa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cm.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fm}()}createDatastore(t){const e=$r(t.databaseInfo.databaseId),r=function(o){return new Qf(o)}(t.databaseInfo);return function(o,a,u,h){return new Jf(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new tm(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Oa(this.syncEngine,e,0),function(){return Na.D()?new Na:new Kf}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const T=new Em(s,o,a,u,h,d);return m&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=H(s);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await qn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ri.provider={build:()=>new ri};/**
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
 */class pu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Dt.UNAUTHENTICATED,this.clientId=pl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ci(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Rs(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ua(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xm(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>xa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>xa(t.remoteStore,s)),n._onlineComponents=t}async function xm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ze("Error using user provided cache. Falling back to memory cache: "+e),await Rs(n,new Vr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Rs(n,new Vr);return n._offlineComponents}async function gu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Ua(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Ua(n,new ri))),n._onlineComponents}function Mm(n){return gu(n).then(t=>t.syncEngine)}async function yu(n){const t=await gu(n),e=t.eventManager;return e.onListen=vm.bind(null,t.syncEngine),e.onUnlisten=wm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Tm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Am.bind(null,t.syncEngine),e}function Bm(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new pu({next:E=>{m.Za(),a.enqueueAndForget(()=>iu(o,T));const S=E.docs.has(u);!S&&E.fromCache?d.reject(new x(D.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&h&&h.source==="server"?d.reject(new x(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),T=new ou(gi(u.path),m,{includeMetadataChanges:!0,_a:!0});return su(o,T)}(await yu(n),n.asyncQueue,t,e,r)),r.promise}function Lm(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new pu({next:E=>{m.Za(),a.enqueueAndForget(()=>iu(o,T)),E.fromCache&&h.source==="server"?d.reject(new x(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),T=new ou(u,m,{includeMetadataChanges:!0,_a:!0});return su(o,T)}(await yu(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function _u(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const $a=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n,t,e){if(!e)throw new x(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Om(n,t,e,r){if(t===!0&&r===!0)throw new x(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function qa(n){if(!B.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ja(n){if(B.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function jt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=zr(n);throw new x(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class za{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Om("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_u((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new za({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new za(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ed;switch(r.type){case"firstParty":return new id(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=$a.get(e);r&&(M("ComponentProvider","Removing Datastore"),$a.delete(e),r.terminate())}(this),Promise.resolve()}}function Fm(n,t,e,r={}){var s;const o=(n=jt(n,Hr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Dt.MOCK_USER;else{u=xc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Dt(d)}n._authCredentials=new nd(new ml(u,h))}}/**
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
 */class ye{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ye(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new he(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class he extends ye{constructor(t,e,r){super(t,e,gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new B(t))}withConverter(t){return new he(this.firestore,t,this._path)}}function Et(n,t,...e){if(n=te(n),Eu("collection","path",t),n instanceof Hr){const r=ot.fromString(t,...e);return ja(r),new he(n,null,r)}{if(!(n instanceof Nt||n instanceof he))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return ja(r),new he(n.firestore,null,r)}}function sn(n,t,...e){if(n=te(n),arguments.length===1&&(t=pl.newId()),Eu("doc","path",t),n instanceof Hr){const r=ot.fromString(t,...e);return qa(r),new Nt(n,null,new B(r))}{if(!(n instanceof Nt||n instanceof he))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return qa(r),new Nt(n.firestore,n instanceof he?n.converter:null,new B(r))}}/**
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
 */class Ha{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yl(this,"async_queue_retry"),this.Vu=()=>{const r=Ds();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ds();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Fn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw ne("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Pi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class xe extends Hr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ha,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ha(t),this._firestoreClient=void 0,await t}}}function Um(n,t){const e=typeof n=="object"?n:jh(),r=typeof n=="string"?n:"(default)",s=Fh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=kc("firestore");o&&Fm(s,...o)}return s}function Ni(n){if(n._terminated)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$m(n),n._firestoreClient}function $m(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,m){return new _d(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,_u(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Nm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(Tt.fromBase64String(t))}catch(e){throw new x(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ye(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Kr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class xi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}}/**
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
 */class Bi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=/^__.*__$/;class jm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Un(t,this.data,e,this.fieldTransforms)}}class vu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ge(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Li{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return kr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Tu(this.Cu)&&qm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class zm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||$r(t)}Qu(t,e,r,s=!1){return new Li({Cu:t,methodName:e,qu:r,path:_t.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wr(n){const t=n._freezeSettings(),e=$r(n._databaseId);return new zm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Iu(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);Oi("Data must be an object, but it was:",a,r);const u=wu(r,a);let h,d;if(o.merge)h=new Ot(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const E=si(t,T,e);if(!a.contains(E))throw new x(D.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);bu(m,E)||m.push(E)}h=new Ot(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new jm(new Mt(u),h,d)}class Gr extends xi{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Gr}}function Hm(n,t,e,r){const s=n.Qu(1,t,e);Oi("Data must be an object, but it was:",s,r);const o=[],a=Mt.empty();ke(r,(h,d)=>{const m=Fi(t,h,e);d=te(d);const T=s.Nu(m);if(d instanceof Gr)o.push(m);else{const E=zn(d,T);E!=null&&(o.push(m),a.set(m,E))}});const u=new Ot(o);return new vu(a,u,s.fieldTransforms)}function Km(n,t,e,r,s,o){const a=n.Qu(1,t,e),u=[si(t,r,e)],h=[s];if(o.length%2!=0)throw new x(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)u.push(si(t,o[E])),h.push(o[E+1]);const d=[],m=Mt.empty();for(let E=u.length-1;E>=0;--E)if(!bu(d,u[E])){const S=u[E];let R=h[E];R=te(R);const C=a.Nu(S);if(R instanceof Gr)d.push(S);else{const V=zn(R,C);V!=null&&(d.push(S),m.set(S,V))}}const T=new Ot(d);return new vu(m,T,a.fieldTransforms)}function Wm(n,t,e,r=!1){return zn(e,n.Qu(r?4:3,t))}function zn(n,t){if(Au(n=te(n)))return Oi("Unsupported field value:",t,n),wu(n,t);if(n instanceof xi)return function(r,s){if(!Tu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=zn(u,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ud(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=$.fromDate(r);return{timestampValue:Pr(s.serializer,o)}}if(r instanceof $){const o=new $(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pr(s.serializer,o)}}if(r instanceof Mi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ye)return{bytesValue:$l(s.serializer,r._byteString)};if(r instanceof Nt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ti(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bi)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return yi(u.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${zr(r)}`)}(n,t)}function wu(n,t){const e={};return gl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ke(n,(r,s)=>{const o=zn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Au(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $||n instanceof Mi||n instanceof Ye||n instanceof Nt||n instanceof xi||n instanceof Bi)}function Oi(n,t,e){if(!Au(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=zr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function si(n,t,e){if((t=te(t))instanceof Kr)return t._internalPath;if(typeof t=="string")return Fi(n,t);throw kr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Gm=new RegExp("[~\\*/\\[\\]]");function Fi(n,t,e){if(t.search(Gm)>=0)throw kr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Kr(...t.split("."))._internalPath}catch{throw kr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function kr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(D.INVALID_ARGUMENT,u+n+h)}function bu(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Su{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Qr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qm extends Su{data(){return super.data()}}function Qr(n,t){return typeof t=="string"?Fi(n,t):t instanceof Kr?t._internalPath:t._delegate._internalPath}/**
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
 */function Ym(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ui{}class $i extends Ui{}function Pt(n,t,...e){let r=[];t instanceof Ui&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof qi).length,u=o.filter(h=>h instanceof Yr).length;if(a>1||a>0&&u>0)throw new x(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Yr extends $i{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Yr(t,e,r)}_apply(t){const e=this._parse(t);return Du(t._query,e),new ye(t.firestore,t.converter,Qs(t._query,e))}_parse(t){const e=Wr(t.firestore);return function(o,a,u,h,d,m,T){let E;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Wa(T,m);const S=[];for(const R of T)S.push(Ka(h,o,R));E={arrayValue:{values:S}}}else E=Ka(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Wa(T,m),E=Wm(u,a,T,m==="in"||m==="not-in");return ft.create(d,m,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function tt(n,t,e){const r=t,s=Qr("where",n);return Yr._create(s,r,e)}class qi extends Ui{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:qt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Du(a,h),a=Qs(a,h)}(t._query,e),new ye(t.firestore,t.converter,Qs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ji extends $i{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ji(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new x(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mn(o,a)}(t._query,this._field,this._direction);return new ye(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new en(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Ct(n,t="asc"){const e=t,r=Qr("orderBy",n);return ji._create(r,e)}class zi extends $i{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new zi(t,e,r)}_apply(t){return new ye(t.firestore,t.converter,Sr(t._query,this._limit,this._limitType))}}function Hi(n){return zi._create("limit",n,"F")}function Ka(n,t,e){if(typeof(e=te(e))=="string"){if(e==="")throw new x(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bl(t)&&e.indexOf("/")!==-1)throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ot.fromString(e));if(!B.isDocumentKey(r))throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ma(n,new B(r))}if(e instanceof Nt)return ma(n,e._key);throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zr(e)}.`)}function Wa(n,t){if(!Array.isArray(n)||n.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Du(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Xm{convertValue(t,e="none"){switch(Ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ke(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ht(a.doubleValue));return new Bi(o)}convertGeoPoint(t){return new Mi(ht(t.latitude),ht(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=di(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(kn(t));default:return null}}convertTimestamp(t){const e=me(t);return new $(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ot.fromString(t);nt(Wl(r));const s=new Nn(r.get(1),r.get(3)),o=new B(r.popFirst(5));return s.isEqual(e)||ne(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Ru(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class An{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pu extends Su{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Qr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class vr extends Pu{data(t={}){return super.data(t)}}class Jm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new An(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new vr(this._firestore,this._userDataWriter,r.key,r,new An(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new vr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new An(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new vr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new An(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Zm(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function Cu(n){n=jt(n,Nt);const t=jt(n.firestore,xe);return Bm(Ni(t),n._key).then(e=>sp(t,n,e))}class Vu extends Xm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ye(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function xt(n){n=jt(n,ye);const t=jt(n.firestore,xe),e=Ni(t),r=new Vu(t);return Ym(n._query),Lm(e,n._query).then(s=>new Jm(t,r,n,s))}function tp(n,t,e){n=jt(n,Nt);const r=jt(n.firestore,xe),s=Ru(n.converter,t);return Xr(r,[Iu(Wr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ut.none())])}function ep(n,t,e,...r){n=jt(n,Nt);const s=jt(n.firestore,xe),o=Wr(s);let a;return a=typeof(t=te(t))=="string"||t instanceof Kr?Km(o,"updateDoc",n._key,t,e,r):Hm(o,"updateDoc",n._key,t),Xr(s,[a.toMutation(n._key,Ut.exists(!0))])}function np(n){return Xr(jt(n.firestore,xe),[new _i(n._key,Ut.none())])}function rp(n,t){const e=jt(n.firestore,xe),r=sn(n),s=Ru(n.converter,t);return Xr(e,[Iu(Wr(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function Xr(n,t){return function(r,s){const o=new Zt;return r.asyncQueue.enqueueAndForget(async()=>bm(await Mm(r),s,o)),o.promise}(Ni(n),t)}function sp(n,t,e){const r=e.docs.get(t._key),s=new Vu(n);return new Pu(n,s,t._key,r,new An(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){tn=s})(qh),wr(new Pn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new xe(new rd(r.getProvider("auth-internal")),new ad(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),qe(ua,"4.7.3",t),qe(ua,"4.7.3","esm2017")})();const ip="55555",ii="baby-tracker-auth",op=24*60*60*1e3,ap={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},lp=il(ap),ct=Um(lp);function up(){const n=localStorage.getItem(ii);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<op?!0:(localStorage.removeItem(ii),!1)}catch{return!1}}function cp(){const n={timestamp:Date.now()};localStorage.setItem(ii,JSON.stringify(n))}let Ft=Xe(new Date),Nr=null,Ps=null,Cs=null,Vs=null,ks=null,Ns=null,xs=null,Ms=null,Bs=null,we=0;function Xe(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return t.setDate(r),t.setHours(0,0,0,0),t}function hp(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function Jt(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function St(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function Ga(n){const t=String(n.getMonth()+1).padStart(2,"0"),e=String(n.getDate()).padStart(2,"0"),r=n.getFullYear(),s=n.getHours(),o=String(n.getMinutes()).padStart(2,"0"),a=s>=12?"PM":"AM",u=s%12||12;return`${t}/${e}/${r} ${u}:${o} ${a}`}function oi(n){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=n.getFullYear();return`${t[n.getDay()]}, ${e}/${r}/${s}`}function xr(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}async function Ki(){const n=document.getElementById("vitamin-d-checkbox"),t=document.getElementById("vitamin-d-status"),e=document.getElementById("vitamin-d-label-text");if(!n||!t||!e)return;const s=xr(new Date);try{const o=await Cu(sn(ct,"vitaminD",s));if(o.exists()){const a=o.data();n.checked=a.given===!0}else n.checked=!1;e.textContent=n.checked?"Vitamin D drop given":"Record Vitamin D drop",t.textContent="",t.style.display="none"}catch(o){console.error("Error loading vitamin D status:",o),t.className="error",t.textContent="Failed to load vitamin D status",t.style.display="block"}}function ku(){Ms&&clearTimeout(Ms);const n=new Date,t=new Date(n);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const e=t.getTime()-n.getTime();Ms=window.setTimeout(()=>{Ki(),ku()},e)}async function dp(n){const t=n.target,e=document.getElementById("vitamin-d-status"),r=document.getElementById("vitamin-d-label-text");if(!e||!r)return;const s=new Date,o=xr(s);try{await tp(sn(ct,"vitaminD",o),{given:t.checked,date:$.fromDate(s)}),r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop",e.style.display="none"}catch(a){console.error("Error saving vitamin D status:",a),e.className="error",e.textContent="Failed to save vitamin D status",e.style.display="block",t.checked=!t.checked,r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop"}}function Qa(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===ip?(n.blur(),cp(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Nu()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function Nu(){gp(),Wi(),fp(),kp(),mp(),pp(),Ki(),ku(),window.scrollTo(0,0)}function fp(){const n=new Date,t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter");t&&(t.value=St(n)),e&&(e.value=St(n))}function mp(){[document.getElementById("bottle-amount"),document.getElementById("pump-amount"),document.getElementById("edit-bottle-amount"),document.getElementById("edit-pump-amount")].forEach(t=>{t&&(t.addEventListener("keypress",e=>{const r=e.key,s=t.value;e.key==="Backspace"||e.key==="Delete"||e.key==="Tab"||e.key==="Escape"||e.key==="Enter"||e.ctrlKey||e.metaKey||r>="0"&&r<="9"||r==="."&&s.indexOf(".")===-1||e.preventDefault()}),t.addEventListener("paste",e=>{var u;e.preventDefault();const s=(((u=e.clipboardData)==null?void 0:u.getData("text"))||"").replace(/[^0-9.]/g,""),o=s.split("."),a=o.length>2?o[0]+"."+o.slice(1).join(""):s;document.execCommand("insertText",!1,a)}))})}function pp(){const n=document.getElementById("bottle-unit"),t=document.getElementById("bottle-amount"),e=document.getElementById("pump-unit"),r=document.getElementById("pump-amount"),s=document.getElementById("edit-bottle-unit"),o=document.getElementById("edit-bottle-amount"),a=document.getElementById("edit-pump-unit"),u=document.getElementById("edit-pump-amount");n&&t&&n.addEventListener("change",()=>{pr(t,n.value)}),e&&r&&e.addEventListener("change",()=>{pr(r,e.value)}),s&&o&&s.addEventListener("change",()=>{pr(o,s.value)}),a&&u&&a.addEventListener("change",()=>{pr(u,a.value)})}function pr(n,t){const e=parseFloat(n.value);if(isNaN(e)||e<=0)return;const r=n.dataset.lastUnit||"oz";if(r===t)return;let s;if(t==="ml"&&r==="oz")s=e*29.5735;else if(t==="oz"&&r==="ml")s=e*.033814;else return;n.value=s.toFixed(2),n.dataset.lastUnit=t}function Ya(n){if(!n.value)return!0;const t=new Date(n.value),e=new Date;return t>e?(alert("Cannot select future times. Please select a time in the past."),n.value=Jt(e),!1):!0}function ae(n){const t=document.getElementById(n);t&&(t.addEventListener("blur",()=>{Ya(t)}),t.addEventListener("change",()=>{Ya(t)}))}function Ls(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block",Ki()):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",Ve(),De()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",Ve()),window.scrollTo(0,0)}function gp(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",yp);const e=document.getElementById("bottle-type");e&&e.addEventListener("change",_p),vp();const r=document.getElementById("edit-bottle-type");r&&r.addEventListener("change",Ep),Tp(),t.addEventListener("click",Ip);const s=document.getElementById("vitamin-d-checkbox");s&&s.addEventListener("change",dp);const o=document.getElementById("refresh-button");o&&o.addEventListener("click",()=>{window.location.reload()});const a=document.getElementById("entry-tab"),u=document.getElementById("timeline-tab"),h=document.getElementById("weekly-tab");a.addEventListener("click",()=>Ls("entry")),u.addEventListener("click",()=>Ls("timeline")),h.addEventListener("click",()=>Ls("weekly"));const d=document.getElementById("prev-week"),m=document.getElementById("next-week"),T=document.getElementById("current-week");d.addEventListener("click",()=>Xa(-1)),m.addEventListener("click",()=>Xa(1)),T&&T.addEventListener("click",Dp);const E=document.getElementById("save-edit"),S=document.getElementById("cancel-edit");E.addEventListener("click",Cp),S.addEventListener("click",xu);const R=document.getElementById("start-date-filter"),C=document.getElementById("end-date-filter"),V=document.getElementById("type-filter"),L=document.getElementById("today-button"),O=document.getElementById("yesterday-button"),U=document.getElementById("two-days-ago-button"),Y=document.getElementById("three-days-ago-button"),et=document.getElementById("all-time-button");R.addEventListener("change",()=>De()),C.addEventListener("change",()=>De()),V.addEventListener("change",()=>De()),L.addEventListener("click",()=>vn("today")),O.addEventListener("click",()=>vn("yesterday")),U.addEventListener("click",()=>vn("two-days-ago")),Y.addEventListener("click",()=>vn("three-days-ago")),et.addEventListener("click",()=>vn("all-time")),ae("bottle-time"),ae("diaper-time"),ae("pump-start-time"),ae("sleep-start-time"),ae("edit-bottle-time"),ae("edit-diaper-time"),ae("edit-pump-start-time"),ae("edit-sleep-start-time");const W=document.getElementById("graph-start-date"),w=document.getElementById("graph-end-date");if(W&&w){const g=new Date(2025,10,5);W.value=St(g),w.value=St(new Date)}const p=document.getElementById("update-graph-btn");p&&p.addEventListener("click",Sp)}function Wi(){const t=Jt(new Date),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("pump-start-time"),o=document.getElementById("sleep-start-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t),o&&(o.value=t)}function yp(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("pump-fields"),a=document.getElementById("sleep-fields"),u=document.getElementById("submit-entry"),h=document.getElementById("bottle-type-container");if(r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none",h.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"){r.style.display="block",u.style.display="block";const m=document.getElementById("bottle-unit"),T=document.getElementById("bottle-amount");T.dataset.lastUnit=m.value,e==="bottle-formula"&&(h.style.display="block")}else if(e==="diaper")s.style.display="block",u.style.display="block";else if(e==="pump"){o.style.display="block",u.style.display="block";const m=document.getElementById("pump-unit"),T=document.getElementById("pump-amount");T.dataset.lastUnit=m.value}else e==="sleep"?(a.style.display="block",u.style.display="block"):u.style.display="none";Wi();const d=document.getElementById("sleep-end-time");d&&(d.value=Jt(new Date))}function _p(n){const e=n.target.value,r=document.getElementById("bottle-notes"),s=document.getElementById("bottle-type-indicator"),o=document.getElementById("bottle-type-text");if(!r)return;const a=r.value,u=a.split(`
`),h=u.length>0&&(u[0]==="Bobbie"||u[0]==="Enfamil");e?(h?(u[0]=e,r.value=u.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function Ep(n){const e=n.target.value,r=document.getElementById("edit-bottle-notes"),s=document.getElementById("edit-bottle-type-indicator"),o=document.getElementById("edit-bottle-type-text");if(!r)return;const a=r.value,u=a.split(`
`),h=u.length>0&&(u[0]==="Bobbie"||u[0]==="Enfamil");e?(h?(u[0]=e,r.value=u.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function vp(){const n=document.getElementById("bottle-notes"),t=document.getElementById("bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}function Tp(){const n=document.getElementById("edit-bottle-notes"),t=document.getElementById("edit-bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}async function Ip(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),u=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");if(n==="bottle-formula"&&!document.getElementById("bottle-type").value)throw new Error("Formula type is required");e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:d,amount:a,unit:u,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,u=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=new Date(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:u}}else if(n==="pump"){const s=document.getElementById("pump-start-time"),o=s.value,a=parseFloat(document.getElementById("pump-amount").value),u=document.getElementById("pump-unit").value,h=document.getElementById("pump-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");e={type:"Pump",startTime:d,amount:a,unit:u,notes:h}}else if(n==="sleep"){const s=document.getElementById("sleep-start-time"),o=document.getElementById("sleep-end-time"),a=document.getElementById("sleep-notes").value;if(!s.value)throw new Error("Start time is required");const u=new Date(s.value);if(u>r)throw new Error("Cannot add entries in the future");let h;if(o.value){if(h=new Date(o.value),h>r)throw new Error("End time cannot be in the future");if(h<=u)throw new Error("End time must be after start time")}e={type:"Sleep",startTime:u,endTime:h,notes:a}}e&&(await rp(Et(ct,"entries"),{...e,startTime:$.fromDate(e.startTime),endTime:e.endTime?$.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",wp(),e.type==="Feed"?await Mu():e.type==="Diaper"?await Bu():e.type==="Pump"?await Lu():e.type==="Sleep"&&(await qu(),await zu()),Ve(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function wp(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-type").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("pump-amount").value="",document.getElementById("pump-notes").value="",document.getElementById("sleep-end-time").value="",document.getElementById("sleep-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("bottle-type-container").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("pump-fields").style.display="none",document.getElementById("sleep-fields").style.display="none",document.getElementById("submit-entry").style.display="none",Wi()}function vn(n){const t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter"),r=new Date;if(r.setHours(0,0,0,0),n==="all-time"){const s=new Date(2025,10,5);t.value=St(s),e.value=St(r)}else if(n==="today")t.value=St(r),e.value=St(r);else if(n==="yesterday"){const s=new Date(r);s.setDate(s.getDate()-1),t.value=St(s),e.value=St(s)}else if(n==="two-days-ago"){const s=new Date(r);s.setDate(s.getDate()-2),t.value=St(s),e.value=St(s)}else if(n==="three-days-ago"){const s=new Date(r);s.setDate(s.getDate()-3),t.value=St(s),e.value=St(s)}De()}async function De(){const n=document.getElementById("timeline-list"),t=document.getElementById("timeline-loading"),e=document.getElementById("start-date-filter").value,r=document.getElementById("end-date-filter").value,s=document.getElementById("type-filter").value;t.style.display="block",n.innerHTML="";const o=document.querySelector(".filter-summary");o&&o.remove();try{let a=Pt(Et(ct,"entries"),Ct("startTime","desc"));if(e&&r){const[d,m,T]=e.split("-").map(Number),E=new Date(d,m-1,T,0,0,0,0),[S,R,C]=r.split("-").map(Number),V=new Date(S,R-1,C,23,59,59,999);a=Pt(Et(ct,"entries"),tt("startTime",">=",$.fromDate(E)),tt("startTime","<=",$.fromDate(V)),Ct("startTime","desc"))}const u=await xt(a),h={bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleep:{totalMs:0,sessions:0}};if(u.empty)n.innerHTML="<p>No entries found.</p>";else{let d="",m=!1;if(u.forEach(T=>{const E=T.data(),S=T.id;if(s!=="all"){let p="";if(E.type==="Feed"&&E.subType==="Breast Milk"?p="bottle-breast-milk":E.type==="Feed"&&E.subType==="Formula"?p="bottle-formula":E.type==="Diaper"?p="diaper-all":E.type==="Pump"?p="pump":E.type==="Sleep"&&(p="sleep"),s==="bottle-all"){if(E.type!=="Feed")return}else if(s==="diaper-all"){if(E.type!=="Diaper")return}else if(s==="diaper-pee"){if(E.type!=="Diaper"||E.diaperType!=="Pee"&&E.diaperType!=="Mixed")return}else if(s==="diaper-poo"){if(E.type!=="Diaper"||E.diaperType!=="Poo"&&E.diaperType!=="Mixed")return}else if(p!==s)return}if(E.type==="Feed"){const p=de(E.amount,E.unit);h.bottles.total+=p,h.bottles.sessions++,E.subType==="Breast Milk"?h.bottles.breastMilk+=p:E.subType==="Formula"&&(h.bottles.formula+=p)}else if(E.type==="Diaper")h.diapers.total++,E.diaperType==="Pee"?h.diapers.pee++:E.diaperType==="Poo"?h.diapers.poo++:E.diaperType==="Mixed"&&h.diapers.mixed++;else if(E.type==="Pump"){const p=de(E.amount,E.unit);h.pumps.total+=p,h.pumps.sessions++}else E.type==="Sleep"&&h.sleep.sessions++;m=!0;const R=E.startTime.toDate(),C=oi(R);if(C!==d){d=C;const p=document.createElement("div");p.className="timeline-date-header",p.textContent=C,n.appendChild(p)}const V=document.createElement("div");V.className="timeline-entry";let L=E.type,O="",U="";if(E.type==="Feed")L=`Bottle - ${E.subType}`,O=`<div class="timeline-entry-details">Amount: ${Ht(E.amount,E.unit)}</div>`,U="#d9ebf2";else if(E.type==="Breast Feed")L="Breast Feed",O="",U="#d9ebf2";else if(E.type==="Diaper")O=`<div class="timeline-entry-details">Type: ${E.diaperType}</div>`,U="#fce2d4";else if(E.type==="Pump")O=`<div class="timeline-entry-details">Amount: ${Ht(E.amount,E.unit)}</div>`,U="#e2daf2";else if(E.type==="Sleep")if(L="Sleep",U="#d4e8d4",E.endTime){const p=E.startTime.toDate(),g=E.endTime.toDate(),_=g.getTime()-p.getTime(),v=Math.floor(_/(1e3*60*60)),I=Math.floor(_%(1e3*60*60)/(1e3*60));O=`<div class="timeline-entry-details">Duration: ${v}h ${I}m</div>`,O+=`<div class="timeline-entry-details">End: ${Ga(g)}</div>`}else O='<div class="timeline-entry-details">In progress</div>';V.style.backgroundColor=U;const Y=E.notes?`<div class="timeline-entry-notes">${E.notes.replace(/\n/g,"<br>")}</div>`:"";let et="";if(E.type==="Diaper"&&(E.diaperType==="Poo"||E.diaperType==="Mixed")){const p=R.getTime(),g=[];u.forEach(v=>{const I=v.data();I.type==="Diaper"&&(I.diaperType==="Poo"||I.diaperType==="Mixed")&&g.push({time:I.startTime.toDate().getTime()})}),g.sort((v,I)=>I.time-v.time);const _=g.findIndex(v=>v.time===p);if(_<g.length-1){const v=g[_+1].time;et=`<div class="timeline-entry-details" style="color: #666; font-style: italic;">${((p-v)/(1e3*60*60)).toFixed(1)} hours since previous poo</div>`}}V.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${L}</span>
                        <span class="timeline-entry-time">${Ga(R)}</span>
                    </div>
                    ${O}
                    ${Y}
                    ${et}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${S}">Edit</button>
                        <button class="delete-button" data-id="${S}">Delete</button>
                    </div>
                `;const W=V.querySelector(".edit-button"),w=V.querySelector(".delete-button");W.addEventListener("click",()=>Pp(S,E)),w.addEventListener("click",()=>Vp(S)),n.appendChild(V)}),!m)n.innerHTML="<p>No entries match the selected filters.</p>";else{const T=document.createElement("div");T.className="filter-summary";let E='<div class="summary-header">Summary</div><div class="summary-stats">';if((s==="all"||s==="bottle-breast-milk"||s==="bottle-formula"||s==="bottle-all")&&(E+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Bottles</div>
                            <div class="stat-line">Number of feeds: ${h.bottles.sessions}</div>
                            <div class="stat-line">Breast Milk: ${Ht(h.bottles.breastMilk,"oz")}</div>
                            <div class="stat-line">Formula: ${Ht(h.bottles.formula,"oz")}</div>
                            <div class="stat-line">Total volume: ${Ht(h.bottles.total,"oz")}</div>
                        </div>
                    `),s==="all"||s==="diaper-all"||s==="diaper-pee"||s==="diaper-poo"){const R=h.diapers.pee+h.diapers.mixed,C=h.diapers.poo+h.diapers.mixed;E+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${R}</div>
                            <div class="stat-line">Poo: ${C}</div>
                        </div>
                    `}if((s==="all"||s==="pump")&&(E+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Pumps</div>
                            <div class="stat-line">Total volume: ${Ht(h.pumps.total,"oz")}</div>
                            <div class="stat-line">Number of sessions: ${h.pumps.sessions}</div>
                        </div>
                    `),s==="all"||s==="sleep"){let R=0;if(e&&r){const L=[];u.forEach(N=>{const rt=N.data();rt.type==="Sleep"&&L.push({startTime:rt.startTime.toDate(),endTime:rt.endTime?rt.endTime.toDate():null})});const[O,U,Y]=e.split("-").map(Number),et=new Date(O,U-1,Y);et.setDate(et.getDate()-1);const W=new Date(et);W.setHours(0,0,0,0);const w=new Date(et);w.setHours(23,59,59,999);try{const N=Pt(Et(ct,"entries"),tt("type","==","Sleep"),tt("startTime",">=",$.fromDate(W)),tt("startTime","<=",$.fromDate(w)),Ct("startTime","asc"));(await xt(N)).forEach(lt=>{const Z=lt.data();L.push({startTime:Z.startTime.toDate(),endTime:Z.endTime?Z.endTime.toDate():null})})}catch(N){console.error("Error fetching prior sleep entries:",N)}const[p,g,_]=r.split("-").map(Number),v=new Date(p,g-1,_);v.setDate(v.getDate()+1);const I=new Date(v);I.setHours(0,0,0,0);const y=new Date(v);y.setHours(23,59,59,999);try{const N=Pt(Et(ct,"entries"),tt("type","==","Sleep"),tt("startTime",">=",$.fromDate(I)),tt("startTime","<=",$.fromDate(y)),Ct("startTime","asc"));(await xt(N)).forEach(lt=>{const Z=lt.data();L.push({startTime:Z.startTime.toDate(),endTime:Z.endTime?Z.endTime.toDate():null})})}catch(N){console.error("Error fetching post sleep entries:",N)}const j=new Date(O,U-1,Y),Bt=new Date(p,g-1,_),F=new Date(j);for(;F<=Bt;){const N=Qi(F);R+=Gi(L,N.start,N.end),F.setDate(F.getDate()+1)}}const C=Math.floor(R/(1e3*60*60)),V=Math.floor(R%(1e3*60*60)/(1e3*60));E+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Sleep</div>
                            <div class="stat-line">Total sleep: ${C}h ${V}m</div>
                            <div class="stat-line">Number of sleeps: ${h.sleep.sessions}</div>
                            <div class="stat-line" style="font-size: 11px; color: #888;">prev day 7pm - next day 7am</div>
                        </div>
                    `}E+="</div>",T.innerHTML=E;const S=document.querySelector(".filter-section");S&&S.parentNode&&S.parentNode.insertBefore(T,n)}}}catch{n.innerHTML='<p class="error">Failed to load timeline</p>'}finally{t.style.display="none"}}function Gi(n,t,e){let r=0;for(const s of n){if(!s.endTime)continue;const o=Math.max(s.startTime.getTime(),t.getTime()),a=Math.min(s.endTime.getTime(),e.getTime());a>o&&(r+=a-o)}return r}function Qi(n){const t=new Date(n);t.setHours(0,0,0,0);const e=new Date(t);e.setDate(e.getDate()-1),e.setHours(19,0,0,0);const r=new Date(t);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),{start:e,end:r}}function Ap(n){const t=Math.floor(n/36e5),e=Math.floor(n%(1e3*60*60)/(1e3*60));return`${t}h ${e}m`}async function Ve(){const n=++we,t=document.getElementById("weekly-stats"),e=document.getElementById("weekly-loading"),r=document.getElementById("week-range"),s=document.getElementById("prev-week"),o=document.getElementById("next-week"),a=document.getElementById("current-week"),u=new Date(2025,10,5),h=Xe(u),m=Xe(new Date),T=new Date(Ft);T.setHours(0,0,0,0),T<h&&(Ft=new Date(h)),T.getTime()<=h.getTime()?s.disabled=!0:s.disabled=!1,T.getTime()>=m.getTime()?o.disabled=!0:o.disabled=!1,a&&(T.getTime()===m.getTime()?(a.disabled=!0,a.style.backgroundColor="#999",a.style.color="#ccc",a.style.cursor="default"):(a.disabled=!1,a.style.backgroundColor="",a.style.color="",a.style.cursor="pointer"));const E=hp(Ft);r.textContent=`${oi(Ft).split(",")[1].trim()} - ${oi(E).split(",")[1].trim()}`,e.style.display="block",t.innerHTML="";try{const S=Pt(Et(ct,"entries"),tt("startTime",">=",$.fromDate(Ft)),tt("startTime","<=",$.fromDate(E)),Ct("startTime","asc")),R=await xt(S);if(n!==we)return;const C=new Date("2025-11-11");C.setHours(0,0,0,0);const V={},L=[];for(let F=0;F<7;F++){const N=new Date(Ft);if(N.setDate(N.getDate()+F),N.setHours(0,0,0,0),N>=C){const rt=xr(N);L.push(rt)}}if(L.length>0){const F=await Promise.all(L.map(N=>Cu(sn(ct,"vitaminD",N))));L.forEach((N,rt)=>{var Z;const lt=F[rt];V[N]=lt.exists()&&((Z=lt.data())==null?void 0:Z.given)===!0})}if(n!==we)return;const O=[];R.forEach(F=>{const N=F.data();N.type==="Sleep"&&O.push({startTime:N.startTime.toDate(),endTime:N.endTime?N.endTime.toDate():null})});const U=new Date(Ft);U.setDate(U.getDate()-1),U.setHours(0,0,0,0);const Y=new Date(Ft);Y.setHours(0,0,0,0);const et=Pt(Et(ct,"entries"),tt("type","==","Sleep"),tt("startTime",">=",$.fromDate(U)),tt("startTime","<",$.fromDate(Y)),Ct("startTime","asc")),W=await xt(et);if(n!==we)return;W.forEach(F=>{const N=F.data();O.push({startTime:N.startTime.toDate(),endTime:N.endTime?N.endTime.toDate():null})});const w=new Date(E);w.setDate(w.getDate()+1),w.setHours(0,0,0,0);const p=new Date(w);p.setDate(p.getDate()+1),p.setHours(0,0,0,0);const g=Pt(Et(ct,"entries"),tt("type","==","Sleep"),tt("startTime",">=",$.fromDate(w)),tt("startTime","<",$.fromDate(p)),Ct("startTime","asc")),_=await xt(g);if(n!==we)return;_.forEach(F=>{const N=F.data();O.push({startTime:N.startTime.toDate(),endTime:N.endTime?N.endTime.toDate():null})});const v={};for(let F=0;F<7;F++){const N=new Date(Ft);N.setDate(N.getDate()+F),N.setHours(0,0,0,0);const rt=`${N.getFullYear()}-${N.getMonth()}-${N.getDate()}`,lt=xr(N),Z=Qi(N);v[rt]={date:new Date(N),vitaminD:N>=C?V[lt]===!0:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleepMs:Gi(O,Z.start,Z.end)}}R.forEach(F=>{const N=F.data(),rt=N.startTime.toDate(),lt=new Date(rt);lt.setHours(0,0,0,0);const Z=`${lt.getFullYear()}-${lt.getMonth()}-${lt.getDate()}`;if(v[Z]){if(N.type==="Feed"){const Qt=de(N.amount,N.unit);v[Z].bottles.total+=Qt,v[Z].bottles.sessions++,N.subType==="Breast Milk"?v[Z].bottles.breastMilk+=Qt:N.subType==="Formula"&&(v[Z].bottles.formula+=Qt)}else if(N.type==="Breast Feed")v[Z].bottles.sessions++;else if(N.type==="Diaper")v[Z].diapers.total++,N.diaperType==="Pee"?v[Z].diapers.pee++:N.diaperType==="Poo"?v[Z].diapers.poo++:N.diaperType==="Mixed"&&v[Z].diapers.mixed++;else if(N.type==="Pump"){const Qt=de(N.amount,N.unit);v[Z].pumps.total+=Qt,v[Z].pumps.sessions++}}});const I=Object.keys(v).map(F=>v[F]).sort((F,N)=>F.date.getTime()-N.date.getTime()),y=document.createElement("div");y.className="weekly-scroll-container";const j=new Date;j.setHours(0,0,0,0);let Bt=-1;I.forEach((F,N)=>{const rt=document.createElement("div");rt.className="day-stats";const lt=new Date(F.date);lt.setHours(0,0,0,0),j.getTime()===lt.getTime()&&(rt.classList.add("current-day"),Bt=N);const Z=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][F.date.getDay()],Qt=`${F.date.getMonth()+1}/${F.date.getDate()}`,zt=F.diapers.pee+F.diapers.mixed,mt=F.diapers.poo+F.diapers.mixed;let Hn="";if(F.vitaminD!==null){const _e=F.vitaminD?"Yes":"No";Hn=`
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${F.vitaminD?"#4caf50":"#f44336"}; font-weight: bold;">${_e}</div>
                    </div>
                `}rt.innerHTML=`
                <div class="day-stats-header">${Z}<br>${Qt}</div>
                ${Hn}
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${F.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${Ht(F.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line">Formula: ${Ht(F.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total volume: ${Ht(F.bottles.total,"oz")}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${zt}</div>
                    <div class="stat-line">Poo: ${mt}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${Ht(F.pumps.total,"oz")}</div>
                    <div class="stat-line">Number of sessions: ${F.pumps.sessions}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${Ap(F.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(F.date.getDay()+6)%7]} 7pm - ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(F.date.getDay()+1)%7]} 7am</div>
                </div>
            `,y.appendChild(rt)}),t.appendChild(y),Bt!==-1&&setTimeout(()=>{const F=y.children[Bt];if(F){const N=y.offsetWidth,rt=F.offsetWidth,lt=F.offsetLeft-N/2+rt/2;y.scrollTo({left:Math.max(0,lt),behavior:"smooth"})}},100)}catch{n===we&&(t.innerHTML='<p class="error">Failed to load weekly view</p>')}finally{n===we&&(e.style.display="none",await bp())}}async function bp(){var S,R,C,V,L,O;const n=document.getElementById("json-content"),t=document.getElementById("toggle-json"),e=document.getElementById("copy-json"),r=document.querySelector(".json-tabs"),s=document.getElementById("feeds-json-tab"),o=document.getElementById("diapers-json-tab"),a=document.getElementById("pumps-json-tab"),u=document.getElementById("sleep-json-tab");if(!n||!t||!e)return;let h="feeds",d=[],m=[],T=[],E=[];try{const U=Pt(Et(ct,"entries"),Ct("startTime","desc"));(await xt(U)).docs.forEach(y=>{const j=y.data();j.type==="Feed"?d.push({type:j.type,subType:j.subType,startTime:j.startTime.toDate().toISOString(),amount:j.amount,unit:j.unit,notes:j.notes||""}):j.type==="Diaper"?m.push({type:j.type,startTime:j.startTime.toDate().toISOString(),diaperType:j.diaperType,notes:j.notes||""}):j.type==="Pump"?T.push({type:j.type,startTime:j.startTime.toDate().toISOString(),amount:j.amount,unit:j.unit,notes:j.notes||""}):j.type==="Sleep"&&E.push({type:j.type,startTime:j.startTime.toDate().toISOString(),endTime:j.endTime?j.endTime.toDate().toISOString():null,notes:j.notes||""})});const et=()=>{let y;h==="feeds"?y=d:h==="diapers"?y=m:h==="sleep"?y=E:y=T;const j=JSON.stringify(y,null,2);return n.textContent=j,j};let W=et();const w=t.cloneNode(!0),p=e.cloneNode(!0),g=s==null?void 0:s.cloneNode(!0),_=o==null?void 0:o.cloneNode(!0),v=a==null?void 0:a.cloneNode(!0),I=u==null?void 0:u.cloneNode(!0);(S=t.parentNode)==null||S.replaceChild(w,t),(R=e.parentNode)==null||R.replaceChild(p,e),s&&g&&((C=s.parentNode)==null||C.replaceChild(g,s)),o&&_&&((V=o.parentNode)==null||V.replaceChild(_,o)),a&&v&&((L=a.parentNode)==null||L.replaceChild(v,a)),u&&I&&((O=u.parentNode)==null||O.replaceChild(I,u)),w.addEventListener("click",()=>{const y=n.style.display==="none";n.style.display=y?"block":"none",p.style.display=y?"block":"none",r&&(r.style.display=y?"flex":"none"),w.textContent=y?"Hide JSON Data":"Show JSON Data"}),p.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(W);const y=p.textContent;p.textContent="✓",setTimeout(()=>{p.textContent=y},2e3)}catch{alert("Failed to copy to clipboard")}}),g&&g.addEventListener("click",()=>{h="feeds",g.classList.add("active"),_.classList.remove("active"),v.classList.remove("active"),I.classList.remove("active"),W=et()}),_&&_.addEventListener("click",()=>{h="diapers",_.classList.add("active"),g.classList.remove("active"),v.classList.remove("active"),I.classList.remove("active"),W=et()}),v&&v.addEventListener("click",()=>{h="pumps",v.classList.add("active"),g.classList.remove("active"),_.classList.remove("active"),I.classList.remove("active"),W=et()}),I&&I.addEventListener("click",()=>{h="sleep",I.classList.add("active"),g.classList.remove("active"),_.classList.remove("active"),v.classList.remove("active"),W=et()})}catch{n.textContent="Failed to load data"}}async function Sp(){const n=document.getElementById("graph-start-date").value,t=document.getElementById("graph-end-date").value;if(!n||!t){alert("Please select both start and end dates");return}const e=[];if(document.querySelectorAll(".graph-checkbox:checked").forEach(g=>{e.push(g.dataset.series)}),e.length===0){alert("Please select at least one data series to plot");return}const r=new Date(n);r.setHours(0,0,0,0);const s=new Date(t);s.setHours(23,59,59,999);const o=Pt(Et(ct,"entries"),tt("startTime",">=",$.fromDate(r)),tt("startTime","<=",$.fromDate(s)),Ct("startTime","asc")),a=await xt(o),u=new Date(r);u.setDate(u.getDate()-1),u.setHours(0,0,0,0);const h=new Date(r);h.setHours(0,0,0,0);const d=Pt(Et(ct,"entries"),tt("type","==","Sleep"),tt("startTime",">=",$.fromDate(u)),tt("startTime","<",$.fromDate(h)),Ct("startTime","asc")),m=await xt(d),T=new Date(s);T.setDate(T.getDate()+1),T.setHours(0,0,0,0);const E=new Date(T);E.setDate(E.getDate()+1),E.setHours(0,0,0,0);const S=Pt(Et(ct,"entries"),tt("type","==","Sleep"),tt("startTime",">=",$.fromDate(T)),tt("startTime","<",$.fromDate(E)),Ct("startTime","asc")),R=await xt(S),C={},V=new Date(r);for(;V<=s;){const g=St(V);C[g]={"bottle-breast-milk":0,"bottle-formula":0,"bottle-all":0,"diaper-pee":0,"diaper-poo":0,"diaper-mixed":0,"diaper-all":0,pump:0,sleep:0},V.setDate(V.getDate()+1)}const L=[];if(a.forEach(g=>{const _=g.data(),v=_.startTime.toDate(),I=St(v);if(C[I]){if(_.type==="Feed"&&_.subType==="Breast Milk"){const y=de(_.amount,_.unit);C[I]["bottle-breast-milk"]+=y,C[I]["bottle-all"]+=y}else if(_.type==="Feed"&&_.subType==="Formula"){const y=de(_.amount,_.unit);C[I]["bottle-formula"]+=y,C[I]["bottle-all"]+=y}else if(_.type==="Diaper")(_.diaperType==="Pee"||_.diaperType==="Mixed")&&C[I]["diaper-pee"]++,(_.diaperType==="Poo"||_.diaperType==="Mixed")&&C[I]["diaper-poo"]++,_.diaperType==="Mixed"&&C[I]["diaper-mixed"]++,C[I]["diaper-all"]++;else if(_.type==="Pump"){const y=de(_.amount,_.unit);C[I].pump+=y}}_.type==="Sleep"&&L.push({startTime:_.startTime.toDate(),endTime:_.endTime?_.endTime.toDate():null})}),m.forEach(g=>{const _=g.data();L.push({startTime:_.startTime.toDate(),endTime:_.endTime?_.endTime.toDate():null})}),R.forEach(g=>{const _=g.data();L.push({startTime:_.startTime.toDate(),endTime:_.endTime?_.endTime.toDate():null})}),e.includes("sleep"))for(const g of Object.keys(C)){const[_,v,I]=g.split("-").map(Number),y=new Date(_,v-1,I),j=Qi(y),Bt=Gi(L,j.start,j.end);C[g].sleep=parseFloat((Bt/(1e3*60*60)).toFixed(1))}const O=Object.keys(C).sort(),U=[],Y={"bottle-breast-milk":"#4CAF50","bottle-formula":"#2196F3","bottle-all":"#9C27B0","diaper-pee":"#FFEB3B","diaper-poo":"#795548","diaper-mixed":"#FF9800","diaper-all":"#607D8B",pump:"#E91E63",sleep:"#00897B"},et={"bottle-breast-milk":"Bottle - Breast Milk","bottle-formula":"Bottle - Formula","bottle-all":"Bottle - All","diaper-pee":"Diaper - Pee","diaper-poo":"Diaper - Poo","diaper-mixed":"Diaper - Mixed","diaper-all":"Diaper - All",pump:"Pump",sleep:"Sleep (hrs, 7pm-7am)"};e.forEach(g=>{U.push({label:et[g],data:O.map(_=>C[_][g]),borderColor:Y[g],backgroundColor:Y[g]+"33",tension:.1,fill:!1})});const w=document.getElementById("data-chart").getContext("2d");Bs&&Bs.destroy(),Bs=new window.Chart(w,{type:"line",data:{labels:O.map(g=>{const[,_,v]=g.split("-");return`${_}/${v}`}),datasets:U},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:"Baby Tracker Data"},tooltip:{enabled:!0,callbacks:{label:function(g){let _=g.dataset.label||"";_&&(_+=": ");const v=g.parsed.y,I=g.dataset.label.toLowerCase();return I.includes("diaper")?_+=Math.round(v):I.includes("sleep")?_+=v.toFixed(1)+" hrs":_+=v.toFixed(1)+" oz",_}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(g){return e.every(v=>v.startsWith("diaper-"))?Math.round(g):g%1===0?g:g.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count / Hours"}}}}});const p=document.querySelector(".chart-container");p&&p.classList.add("active")}function Xa(n){const t=new Date(2025,10,5),e=Xe(t),s=Xe(new Date),o=new Date(Ft);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const u=new Date(s);u.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>u.getTime()||(Ft=o,Ve()))}function Dp(){Ft=Xe(new Date),Ve()}function de(n,t){return t==="ml"?n*.033814:n}function Rp(n,t){return t==="oz"?n*29.5735:n}function Ht(n,t){const e=de(n,t),r=Rp(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function Pp(n,t){Nr=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields"),a=document.getElementById("edit-sleep-fields");r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none";const u=t.startTime.toDate();if(t.type==="Feed"){r.style.display="block";const h=document.getElementById("edit-bottle-unit"),d=document.getElementById("edit-bottle-amount"),m=document.getElementById("edit-bottle-type-container"),T=document.getElementById("edit-bottle-type");document.getElementById("edit-bottle-time").value=Jt(u),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";const E=document.getElementById("edit-bottle-type-indicator"),S=document.getElementById("edit-bottle-type-text");if(t.subType==="Formula"){m.style.display="block";const C=(t.notes||"").split(`
`)[0];C==="Bobbie"||C==="Enfamil"?(T.value=C,E&&S&&(S.textContent=C,E.style.display="block")):(T.value="",E&&(E.style.display="none"))}else m.style.display="none",T.value="",E&&(E.style.display="none")}else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=Jt(u),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const h=document.getElementById("edit-pump-unit"),d=document.getElementById("edit-pump-amount");document.getElementById("edit-pump-start-time").value=Jt(u),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}else t.type==="Sleep"&&(a.style.display="block",document.getElementById("edit-sleep-start-time").value=Jt(u),t.endTime?document.getElementById("edit-sleep-end-time").value=Jt(t.endTime.toDate()):document.getElementById("edit-sleep-end-time").value=Jt(new Date),document.getElementById("edit-sleep-notes").value=t.notes||"");e.style.display="block"}function xu(){const n=document.getElementById("edit-modal");n.style.display="none",Nr=null;const t=document.getElementById("edit-status");t.style.display="none"}async function Cp(){if(!Nr)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields"),s=document.getElementById("edit-sleep-fields");let o={};const a=new Date;if(t.style.display==="block"){const u=document.getElementById("edit-bottle-time"),h=u.value,d=parseFloat(document.getElementById("edit-bottle-amount").value),m=document.getElementById("edit-bottle-unit").value,T=document.getElementById("edit-bottle-notes").value,E=document.getElementById("edit-bottle-type-container"),S=document.getElementById("edit-bottle-type").value;if(!h)throw new Error("Start time is required");const R=new Date(u.value);if(R>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");if(E.style.display!=="none"&&!S)throw new Error("Formula type is required");o={startTime:$.fromDate(R),amount:d,unit:m,notes:T}}else if(e.style.display==="block"){const u=document.getElementById("edit-diaper-time"),h=u.value,d=document.getElementById("edit-diaper-type").value,m=document.getElementById("edit-diaper-notes").value;if(!h)throw new Error("Start time is required");const T=new Date(u.value);if(T>a)throw new Error("Cannot set time in the future");if(!d)throw new Error("Diaper type is required");o={startTime:$.fromDate(T),diaperType:d,notes:m}}else if(r.style.display==="block"){const u=document.getElementById("edit-pump-start-time"),h=u.value,d=parseFloat(document.getElementById("edit-pump-amount").value),m=document.getElementById("edit-pump-unit").value,T=document.getElementById("edit-pump-notes").value;if(!h)throw new Error("Start time is required");const E=new Date(u.value);if(E>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");o={startTime:$.fromDate(E),amount:d,unit:m,notes:T}}else if(s.style.display==="block"){const u=document.getElementById("edit-sleep-start-time"),h=document.getElementById("edit-sleep-end-time"),d=document.getElementById("edit-sleep-notes").value;if(!u.value)throw new Error("Start time is required");const m=new Date(u.value);if(m>a)throw new Error("Cannot set time in the future");if(o={startTime:$.fromDate(m),notes:d},h.value){const T=new Date(h.value);if(T>a)throw new Error("End time cannot be in the future");if(T<=m)throw new Error("End time must be after start time");o.endTime=$.fromDate(T)}else o.endTime=null}await ep(sn(ct,"entries",Nr),o),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(async()=>{xu(),De(),Ve(),await Yi()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function Vp(n){if(confirm("Are you sure you want to delete this entry?"))try{await np(sn(ct,"entries",n)),De(),Ve(),await Yi()}catch{alert("Failed to delete entry")}}async function kp(){await Yi(),Ps&&clearInterval(Ps),Cs&&clearInterval(Cs),Vs&&clearInterval(Vs),ks&&clearInterval(ks),Ns&&clearInterval(Ns),xs&&clearInterval(xs),Ps=window.setInterval(()=>Ou(),1e3),Cs=window.setInterval(()=>Fu(),1e3),Vs=window.setInterval(()=>Uu(),1e3),ks=window.setInterval(()=>$u(),1e3),Ns=window.setInterval(()=>ju(),1e3),xs=window.setInterval(()=>Hu(),1e3)}async function Yi(){await Promise.all([Mu(),Bu(),Lu(),qu(),zu()])}async function Mu(){try{const n=Pt(Et(ct,"entries"),tt("type","==","Feed"),Ct("startTime","desc"),Hi(1)),t=await xt(n);if(t.empty)localStorage.removeItem("lastBottleTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastBottleTime",r.toISOString())}Ou()}catch(n){console.error("Error fetching last bottle time:",n)}}async function Bu(){try{const n=Pt(Et(ct,"entries"),tt("type","==","Diaper"),Ct("startTime","desc")),t=await xt(n);let e,r;t.forEach(s=>{const o=s.data(),a=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&e===void 0&&(e=a),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&r===void 0&&(r=a)}),e!==void 0?localStorage.setItem("lastPeeTime",e.toISOString()):localStorage.removeItem("lastPeeTime"),r!==void 0?localStorage.setItem("lastPooTime",r.toISOString()):localStorage.removeItem("lastPooTime"),Fu(),Uu()}catch(n){console.error("Error fetching last diaper times:",n)}}async function Lu(){try{const n=Pt(Et(ct,"entries"),tt("type","==","Pump"),Ct("startTime","desc"),Hi(1)),t=await xt(n);if(t.empty)localStorage.removeItem("lastPumpTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastPumpTime",r.toISOString())}$u()}catch(n){console.error("Error fetching last pump time:",n)}}function Je(n,t){if(!n)return t;const e=new Date(n),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),u=Math.floor(s%(1e3*60)/1e3);return o>0?`${o}h ${a}m ${u}s`:a>0?`${a}m ${u}s`:`${u}s`}function Ou(){const n=document.getElementById("last-bottle-value");if(!n)return;const t=localStorage.getItem("lastBottleTime");if(!t){n.innerHTML="No bottles recorded";return}const e=Je(t,"No bottles recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),u=[];if(a>3){u.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*3*60*60*1e3),T=m.getHours(),E=String(m.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",R=T%12||12;u.push(`${R}:${E} ${S}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*3*60*60*1e3),T=m.getHours(),E=String(m.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",R=T%12||12;u.push(`${R}:${E} ${S}`)}const h=u.map((d,m)=>`+ ${(m+1)*3} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${h}</span>`}function Fu(){const n=document.getElementById("last-pee-value");if(!n)return;const t=localStorage.getItem("lastPeeTime");n.textContent=Je(t,"No pee recorded")}function Uu(){const n=document.getElementById("last-poo-value");if(!n)return;const t=localStorage.getItem("lastPooTime");n.textContent=Je(t,"No poo recorded")}function $u(){const n=document.getElementById("last-pump-value");if(!n)return;const t=localStorage.getItem("lastPumpTime");if(!t){n.innerHTML="No pumps recorded";return}const e=Je(t,"No pumps recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),u=[];if(a>4){u.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*4*60*60*1e3),T=m.getHours(),E=String(m.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",R=T%12||12;u.push(`${R}:${E} ${S}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*4*60*60*1e3),T=m.getHours(),E=String(m.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",R=T%12||12;u.push(`${R}:${E} ${S}`)}const h=u.map((d,m)=>`+ ${(m+1)*4} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${h}</span>`}async function qu(){try{const n=Pt(Et(ct,"entries"),tt("type","==","Sleep"),Ct("startTime","desc"),Hi(1)),t=await xt(n);if(t.empty)localStorage.removeItem("lastSleepEndTime"),localStorage.removeItem("sleepInProgressStart");else{const e=t.docs[0].data();e.endTime?(localStorage.setItem("lastSleepEndTime",e.endTime.toDate().toISOString()),localStorage.removeItem("sleepInProgressStart")):(localStorage.removeItem("lastSleepEndTime"),localStorage.setItem("sleepInProgressStart",e.startTime.toDate().toISOString()))}ju()}catch(n){console.error("Error fetching last sleep end time:",n)}}function ju(){const n=document.getElementById("time-awake-value"),t=document.getElementById("time-awake-label");if(!n)return;const e=localStorage.getItem("sleepInProgressStart");if(e){t&&(t.textContent="Time Asleep"),n.textContent=Je(e,"No sleep recorded");return}t&&(t.textContent="Time Awake");const r=localStorage.getItem("lastSleepEndTime");n.textContent=Je(r,"No sleep recorded")}async function zu(){try{const n=new Date,t=new Date(n);t.setHours(7,0,0,0);const e=Pt(Et(ct,"entries"),tt("type","==","Sleep"),tt("startTime",">=",$.fromDate(t)),Ct("startTime","asc")),r=await xt(e);let s=0,o=null;r.forEach(a=>{const u=a.data(),h=u.startTime.toDate();if(h>=t&&h.toDateString()===n.toDateString())if(u.endTime){const d=u.endTime.toDate();s+=d.getTime()-h.getTime()}else o=h.toISOString()}),localStorage.setItem("napTimeCompletedMs",String(s)),o?localStorage.setItem("napTimeInProgressStart",o):localStorage.removeItem("napTimeInProgressStart"),Hu()}catch(n){console.error("Error fetching nap time:",n)}}function Hu(){const n=document.getElementById("nap-time-value");if(!n)return;const t=parseInt(localStorage.getItem("napTimeCompletedMs")||"0",10),e=localStorage.getItem("napTimeInProgressStart");let r=t;if(e){const u=new Date(e);r+=new Date().getTime()-u.getTime()}if(r<=0){n.textContent="0m";return}const s=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60)),a=Math.floor(r%(1e3*60)/1e3);s>0?n.textContent=`${s}h ${o}m ${a}s`:o>0?n.textContent=`${o}m ${a}s`:n.textContent=`${a}s`}window.addEventListener("DOMContentLoaded",()=>{var n,t;if(up()){const e=document.getElementById("passcode-screen"),r=document.getElementById("app");e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Nu()}else(n=document.getElementById("passcode-submit"))==null||n.addEventListener("click",Qa),(t=document.getElementById("passcode-input"))==null||t.addEventListener("keypress",e=>{e.key==="Enter"&&Qa()})});
