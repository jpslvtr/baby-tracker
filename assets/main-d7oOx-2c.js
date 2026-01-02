(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var jo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},fc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|u>>4;let v=(u&15)<<2|d>>6,R=d&63;h||(R=64,a||(v=64)),r.push(e[m],e[T],e[v],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(qa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):fc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new mc;const v=o<<2|u>>4;if(r.push(v),d!==64){const R=u<<4&240|d>>2;if(r.push(R),T!==64){const P=d<<6&192|T;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pc=function(n){const t=qa(n);return ja.encodeByteArray(t,!0)},fr=function(n){return pc(n).replace(/\./g,"")},gc=function(n){try{return ja.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _c=()=>yc().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof jo>"u")return;const n=jo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&gc(n[1]);return t&&JSON.parse(t)},ti=()=>{try{return _c()||Ec()||vc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tc=n=>{var t,e;return(e=(t=ti())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ic=n=>{const t=Tc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},za=()=>{var n;return(n=ti())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ac(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fr(JSON.stringify(e)),fr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){var n;const t=(n=ti())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sc(){return!Rc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dc(){try{return typeof indexedDB=="object"}catch{return!1}}function Pc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="FirebaseError";class qe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Cc,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Vc(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new qe(s,u,r)}}function Vc(n,t){return n.replace(kc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const kc=/\{\$([^}]+)}/g;function Vs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(zo(o)&&zo(a)){if(!Vs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function zo(n){return n!==null&&typeof n=="object"}/**
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
 */function Ut(n){return n&&n._delegate?n._delegate:n}class In{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const fe="[DEFAULT]";/**
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
 */class Nc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new wc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Lc(t))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fe){return this.instances.has(t)}getOptions(t=fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=fe){return this.component?this.component.multipleInstances?t:fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xc(n){return n===fe?void 0:n}function Lc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Mc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Nc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Bc={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Oc=K.INFO,Fc={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Uc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Fc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ka{constructor(t){this.name=t,this._logLevel=Oc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const $c=(n,t)=>t.some(e=>n instanceof e);let Ho,Ko;function qc(){return Ho||(Ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jc(){return Ko||(Ko=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wa=new WeakMap,ks=new WeakMap,Ga=new WeakMap,gs=new WeakMap,ei=new WeakMap;function zc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Xt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Wa.set(e,n)}).catch(()=>{}),ei.set(t,n),t}function Hc(n){if(ks.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ks.set(n,t)}let Ns={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ks.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ga.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Xt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Kc(n){Ns=n(Ns)}function Wc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ys(this),t,...e);return Ga.set(r,t.sort?t.sort():[t]),Xt(r)}:jc().includes(n)?function(...t){return n.apply(ys(this),t),Xt(Wa.get(this))}:function(...t){return Xt(n.apply(ys(this),t))}}function Gc(n){return typeof n=="function"?Wc(n):(n instanceof IDBTransaction&&Hc(n),$c(n,qc())?new Proxy(n,Ns):n)}function Xt(n){if(n instanceof IDBRequest)return zc(n);if(gs.has(n))return gs.get(n);const t=Gc(n);return t!==n&&(gs.set(n,t),ei.set(t,n)),t}const ys=n=>ei.get(n);function Qc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Xt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Xt(a.result),h.oldVersion,h.newVersion,Xt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Yc=["get","getKey","getAll","getAllKeys","count"],Xc=["put","add","delete","clear"],_s=new Map;function Wo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(_s.get(t))return _s.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Xc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yc.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return _s.set(t,o),o}Kc(n=>({...n,get:(t,e,r)=>Wo(t,e)||n.get(t,e,r),has:(t,e)=>!!Wo(t,e)||n.has(t,e)}));/**
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
 */class Jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Zc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Zc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xs="@firebase/app",Go="0.10.13";/**
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
 */const $t=new Ka("@firebase/app"),th="@firebase/app-compat",eh="@firebase/analytics-compat",nh="@firebase/analytics",rh="@firebase/app-check-compat",sh="@firebase/app-check",ih="@firebase/auth",oh="@firebase/auth-compat",ah="@firebase/database",lh="@firebase/data-connect",uh="@firebase/database-compat",ch="@firebase/functions",hh="@firebase/functions-compat",dh="@firebase/installations",fh="@firebase/installations-compat",mh="@firebase/messaging",ph="@firebase/messaging-compat",gh="@firebase/performance",yh="@firebase/performance-compat",_h="@firebase/remote-config",Eh="@firebase/remote-config-compat",vh="@firebase/storage",Th="@firebase/storage-compat",Ih="@firebase/firestore",wh="@firebase/vertexai-preview",Ah="@firebase/firestore-compat",bh="firebase",Rh="10.14.1";/**
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
 */const Ls="[DEFAULT]",Sh={[xs]:"fire-core",[th]:"fire-core-compat",[nh]:"fire-analytics",[eh]:"fire-analytics-compat",[sh]:"fire-app-check",[rh]:"fire-app-check-compat",[ih]:"fire-auth",[oh]:"fire-auth-compat",[ah]:"fire-rtdb",[lh]:"fire-data-connect",[uh]:"fire-rtdb-compat",[ch]:"fire-fn",[hh]:"fire-fn-compat",[dh]:"fire-iid",[fh]:"fire-iid-compat",[mh]:"fire-fcm",[ph]:"fire-fcm-compat",[gh]:"fire-perf",[yh]:"fire-perf-compat",[_h]:"fire-rc",[Eh]:"fire-rc-compat",[vh]:"fire-gcs",[Th]:"fire-gcs-compat",[Ih]:"fire-fst",[Ah]:"fire-fst-compat",[wh]:"fire-vertex","fire-js":"fire-js",[bh]:"fire-js-all"};/**
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
 */const mr=new Map,Dh=new Map,Ms=new Map;function Qo(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function pr(n){const t=n.name;if(Ms.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Ms.set(t,n);for(const e of mr.values())Qo(e,n);for(const e of Dh.values())Qo(e,n);return!0}function Ph(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new Ha("app","Firebase",Ch);/**
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
 */class Vh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const kh=Rh;function Qa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ls,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(e||(e=za()),!e)throw Jt.create("no-options");const o=mr.get(s);if(o){if(Vs(e,o.options)&&Vs(r,o.config))return o;throw Jt.create("duplicate-app",{appName:s})}const a=new Mc(s);for(const h of Ms.values())a.addComponent(h);const u=new Vh(e,r,a);return mr.set(s,u),u}function Nh(n=Ls){const t=mr.get(n);if(!t&&n===Ls&&za())return Qa();if(!t)throw Jt.create("no-app",{appName:n});return t}function ke(n,t,e){var r;let s=(r=Sh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(u.join(" "));return}pr(new In(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const xh="firebase-heartbeat-database",Lh=1,wn="firebase-heartbeat-store";let Es=null;function Ya(){return Es||(Es=Qc(xh,Lh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),Es}async function Mh(n){try{const e=(await Ya()).transaction(wn),r=await e.objectStore(wn).get(Xa(n));return await e.done,r}catch(t){if(t instanceof qe)$t.warn(t.message);else{const e=Jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(e.message)}}}async function Yo(n,t){try{const r=(await Ya()).transaction(wn,"readwrite");await r.objectStore(wn).put(t,Xa(n)),await r.done}catch(e){if(e instanceof qe)$t.warn(e.message);else{const r=Jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$t.warn(r.message)}}}function Xa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bh=1024,Oh=30*24*60*60*1e3;class Fh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $h(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Oh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xo(),{heartbeatsToSend:r,unsentEntries:s}=Uh(this._heartbeatsCache.heartbeats),o=fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function Xo(){return new Date().toISOString().substring(0,10)}function Uh(n,t=Bh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Jo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Jo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class $h{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dc()?Pc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Mh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Jo(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qh(n){pr(new In("platform-logger",t=>new Jc(t),"PRIVATE")),pr(new In("heartbeat",t=>new Fh(t),"PRIVATE")),ke(xs,Go,n),ke(xs,Go,"esm2017"),ke("fire-js","")}qh("");var jh="firebase",zh="10.14.1";/**
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
 */ke(jh,zh,"app");var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pe,Ja;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,p){function g(){}g.prototype=p.prototype,_.D=p.prototype,_.prototype=new g,_.prototype.constructor=_,_.C=function(y,I,w){for(var E=Array(arguments.length-2),St=2;St<arguments.length;St++)E[St-2]=arguments[St];return p.prototype[I].apply(y,E)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var I=0;16>I;++I)y[I]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(I=0;16>I;++I)y[I]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=_.g[0],g=_.g[1],I=_.g[2];var w=_.g[3],E=p+(w^g&(I^w))+y[0]+3614090360&4294967295;p=g+(E<<7&4294967295|E>>>25),E=w+(I^p&(g^I))+y[1]+3905402710&4294967295,w=p+(E<<12&4294967295|E>>>20),E=I+(g^w&(p^g))+y[2]+606105819&4294967295,I=w+(E<<17&4294967295|E>>>15),E=g+(p^I&(w^p))+y[3]+3250441966&4294967295,g=I+(E<<22&4294967295|E>>>10),E=p+(w^g&(I^w))+y[4]+4118548399&4294967295,p=g+(E<<7&4294967295|E>>>25),E=w+(I^p&(g^I))+y[5]+1200080426&4294967295,w=p+(E<<12&4294967295|E>>>20),E=I+(g^w&(p^g))+y[6]+2821735955&4294967295,I=w+(E<<17&4294967295|E>>>15),E=g+(p^I&(w^p))+y[7]+4249261313&4294967295,g=I+(E<<22&4294967295|E>>>10),E=p+(w^g&(I^w))+y[8]+1770035416&4294967295,p=g+(E<<7&4294967295|E>>>25),E=w+(I^p&(g^I))+y[9]+2336552879&4294967295,w=p+(E<<12&4294967295|E>>>20),E=I+(g^w&(p^g))+y[10]+4294925233&4294967295,I=w+(E<<17&4294967295|E>>>15),E=g+(p^I&(w^p))+y[11]+2304563134&4294967295,g=I+(E<<22&4294967295|E>>>10),E=p+(w^g&(I^w))+y[12]+1804603682&4294967295,p=g+(E<<7&4294967295|E>>>25),E=w+(I^p&(g^I))+y[13]+4254626195&4294967295,w=p+(E<<12&4294967295|E>>>20),E=I+(g^w&(p^g))+y[14]+2792965006&4294967295,I=w+(E<<17&4294967295|E>>>15),E=g+(p^I&(w^p))+y[15]+1236535329&4294967295,g=I+(E<<22&4294967295|E>>>10),E=p+(I^w&(g^I))+y[1]+4129170786&4294967295,p=g+(E<<5&4294967295|E>>>27),E=w+(g^I&(p^g))+y[6]+3225465664&4294967295,w=p+(E<<9&4294967295|E>>>23),E=I+(p^g&(w^p))+y[11]+643717713&4294967295,I=w+(E<<14&4294967295|E>>>18),E=g+(w^p&(I^w))+y[0]+3921069994&4294967295,g=I+(E<<20&4294967295|E>>>12),E=p+(I^w&(g^I))+y[5]+3593408605&4294967295,p=g+(E<<5&4294967295|E>>>27),E=w+(g^I&(p^g))+y[10]+38016083&4294967295,w=p+(E<<9&4294967295|E>>>23),E=I+(p^g&(w^p))+y[15]+3634488961&4294967295,I=w+(E<<14&4294967295|E>>>18),E=g+(w^p&(I^w))+y[4]+3889429448&4294967295,g=I+(E<<20&4294967295|E>>>12),E=p+(I^w&(g^I))+y[9]+568446438&4294967295,p=g+(E<<5&4294967295|E>>>27),E=w+(g^I&(p^g))+y[14]+3275163606&4294967295,w=p+(E<<9&4294967295|E>>>23),E=I+(p^g&(w^p))+y[3]+4107603335&4294967295,I=w+(E<<14&4294967295|E>>>18),E=g+(w^p&(I^w))+y[8]+1163531501&4294967295,g=I+(E<<20&4294967295|E>>>12),E=p+(I^w&(g^I))+y[13]+2850285829&4294967295,p=g+(E<<5&4294967295|E>>>27),E=w+(g^I&(p^g))+y[2]+4243563512&4294967295,w=p+(E<<9&4294967295|E>>>23),E=I+(p^g&(w^p))+y[7]+1735328473&4294967295,I=w+(E<<14&4294967295|E>>>18),E=g+(w^p&(I^w))+y[12]+2368359562&4294967295,g=I+(E<<20&4294967295|E>>>12),E=p+(g^I^w)+y[5]+4294588738&4294967295,p=g+(E<<4&4294967295|E>>>28),E=w+(p^g^I)+y[8]+2272392833&4294967295,w=p+(E<<11&4294967295|E>>>21),E=I+(w^p^g)+y[11]+1839030562&4294967295,I=w+(E<<16&4294967295|E>>>16),E=g+(I^w^p)+y[14]+4259657740&4294967295,g=I+(E<<23&4294967295|E>>>9),E=p+(g^I^w)+y[1]+2763975236&4294967295,p=g+(E<<4&4294967295|E>>>28),E=w+(p^g^I)+y[4]+1272893353&4294967295,w=p+(E<<11&4294967295|E>>>21),E=I+(w^p^g)+y[7]+4139469664&4294967295,I=w+(E<<16&4294967295|E>>>16),E=g+(I^w^p)+y[10]+3200236656&4294967295,g=I+(E<<23&4294967295|E>>>9),E=p+(g^I^w)+y[13]+681279174&4294967295,p=g+(E<<4&4294967295|E>>>28),E=w+(p^g^I)+y[0]+3936430074&4294967295,w=p+(E<<11&4294967295|E>>>21),E=I+(w^p^g)+y[3]+3572445317&4294967295,I=w+(E<<16&4294967295|E>>>16),E=g+(I^w^p)+y[6]+76029189&4294967295,g=I+(E<<23&4294967295|E>>>9),E=p+(g^I^w)+y[9]+3654602809&4294967295,p=g+(E<<4&4294967295|E>>>28),E=w+(p^g^I)+y[12]+3873151461&4294967295,w=p+(E<<11&4294967295|E>>>21),E=I+(w^p^g)+y[15]+530742520&4294967295,I=w+(E<<16&4294967295|E>>>16),E=g+(I^w^p)+y[2]+3299628645&4294967295,g=I+(E<<23&4294967295|E>>>9),E=p+(I^(g|~w))+y[0]+4096336452&4294967295,p=g+(E<<6&4294967295|E>>>26),E=w+(g^(p|~I))+y[7]+1126891415&4294967295,w=p+(E<<10&4294967295|E>>>22),E=I+(p^(w|~g))+y[14]+2878612391&4294967295,I=w+(E<<15&4294967295|E>>>17),E=g+(w^(I|~p))+y[5]+4237533241&4294967295,g=I+(E<<21&4294967295|E>>>11),E=p+(I^(g|~w))+y[12]+1700485571&4294967295,p=g+(E<<6&4294967295|E>>>26),E=w+(g^(p|~I))+y[3]+2399980690&4294967295,w=p+(E<<10&4294967295|E>>>22),E=I+(p^(w|~g))+y[10]+4293915773&4294967295,I=w+(E<<15&4294967295|E>>>17),E=g+(w^(I|~p))+y[1]+2240044497&4294967295,g=I+(E<<21&4294967295|E>>>11),E=p+(I^(g|~w))+y[8]+1873313359&4294967295,p=g+(E<<6&4294967295|E>>>26),E=w+(g^(p|~I))+y[15]+4264355552&4294967295,w=p+(E<<10&4294967295|E>>>22),E=I+(p^(w|~g))+y[6]+2734768916&4294967295,I=w+(E<<15&4294967295|E>>>17),E=g+(w^(I|~p))+y[13]+1309151649&4294967295,g=I+(E<<21&4294967295|E>>>11),E=p+(I^(g|~w))+y[4]+4149444226&4294967295,p=g+(E<<6&4294967295|E>>>26),E=w+(g^(p|~I))+y[11]+3174756917&4294967295,w=p+(E<<10&4294967295|E>>>22),E=I+(p^(w|~g))+y[2]+718787259&4294967295,I=w+(E<<15&4294967295|E>>>17),E=g+(w^(I|~p))+y[9]+3951481745&4294967295,_.g[0]=_.g[0]+p&4294967295,_.g[1]=_.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,_.g[2]=_.g[2]+I&4294967295,_.g[3]=_.g[3]+w&4294967295}r.prototype.u=function(_,p){p===void 0&&(p=_.length);for(var g=p-this.blockSize,y=this.B,I=this.h,w=0;w<p;){if(I==0)for(;w<=g;)s(this,_,w),w+=this.blockSize;if(typeof _=="string"){for(;w<p;)if(y[I++]=_.charCodeAt(w++),I==this.blockSize){s(this,y),I=0;break}}else for(;w<p;)if(y[I++]=_[w++],I==this.blockSize){s(this,y),I=0;break}}this.h=I,this.o+=p},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var p=1;p<_.length-8;++p)_[p]=0;var g=8*this.o;for(p=_.length-8;p<_.length;++p)_[p]=g&255,g/=256;for(this.u(_),_=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)_[g++]=this.g[p]>>>y&255;return _};function o(_,p){var g=u;return Object.prototype.hasOwnProperty.call(g,_)?g[_]:g[_]=p(_)}function a(_,p){this.h=p;for(var g=[],y=!0,I=_.length-1;0<=I;I--){var w=_[I]|0;y&&w==p||(g[I]=w,y=!1)}this.g=g}var u={};function h(_){return-128<=_&&128>_?o(_,function(p){return new a([p|0],0>p?-1:0)}):new a([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return T;if(0>_)return D(d(-_));for(var p=[],g=1,y=0;_>=g;y++)p[y]=_/g|0,g*=4294967296;return new a(p,0)}function m(_,p){if(_.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(_.charAt(0)=="-")return D(m(_.substring(1),p));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(p,8)),y=T,I=0;I<_.length;I+=8){var w=Math.min(8,_.length-I),E=parseInt(_.substring(I,I+w),p);8>w?(w=d(Math.pow(p,w)),y=y.j(w).add(d(E))):(y=y.j(g),y=y.add(d(E)))}return y}var T=h(0),v=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-D(this).m();for(var _=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);_+=(0<=y?y:4294967296+y)*p,p*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(N(this))return"-"+D(this).toString(_);for(var p=d(Math.pow(_,6)),g=this,y="";;){var I=j(g,p).g;g=V(g,I.j(p));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(_);if(g=I,P(g))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var p=0;p<_.g.length;p++)if(_.g[p]!=0)return!1;return!0}function N(_){return _.h==-1}n.l=function(_){return _=V(this,_),N(_)?-1:P(_)?0:1};function D(_){for(var p=_.g.length,g=[],y=0;y<p;y++)g[y]=~_.g[y];return new a(g,~_.h).add(v)}n.abs=function(){return N(this)?D(this):this},n.add=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],y=0,I=0;I<=p;I++){var w=y+(this.i(I)&65535)+(_.i(I)&65535),E=(w>>>16)+(this.i(I)>>>16)+(_.i(I)>>>16);y=E>>>16,w&=65535,E&=65535,g[I]=E<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function V(_,p){return _.add(D(p))}n.j=function(_){if(P(this)||P(_))return T;if(N(this))return N(_)?D(this).j(D(_)):D(D(this).j(_));if(N(_))return D(this.j(D(_)));if(0>this.l(R)&&0>_.l(R))return d(this.m()*_.m());for(var p=this.g.length+_.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<_.g.length;I++){var w=this.i(y)>>>16,E=this.i(y)&65535,St=_.i(I)>>>16,le=_.i(I)&65535;g[2*y+2*I]+=E*le,F(g,2*y+2*I),g[2*y+2*I+1]+=w*le,F(g,2*y+2*I+1),g[2*y+2*I+1]+=E*St,F(g,2*y+2*I+1),g[2*y+2*I+2]+=w*St,F(g,2*y+2*I+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new a(g,0)};function F(_,p){for(;(_[p]&65535)!=_[p];)_[p+1]+=_[p]>>>16,_[p]&=65535,p++}function B(_,p){this.g=_,this.h=p}function j(_,p){if(P(p))throw Error("division by zero");if(P(_))return new B(T,T);if(N(_))return p=j(D(_),p),new B(D(p.g),D(p.h));if(N(p))return p=j(_,D(p)),new B(D(p.g),p.h);if(30<_.g.length){if(N(_)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var g=v,y=p;0>=y.l(_);)g=J(g),y=J(y);var I=x(g,1),w=x(y,1);for(y=x(y,2),g=x(g,2);!P(y);){var E=w.add(y);0>=E.l(_)&&(I=I.add(g),w=E),y=x(y,1),g=x(g,1)}return p=V(_,I.j(p)),new B(I,p)}for(I=T;0<=_.l(p);){for(g=Math.max(1,Math.floor(_.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(g),E=w.j(p);N(E)||0<E.l(_);)g-=y,w=d(g),E=w.j(p);P(w)&&(w=v),I=I.add(w),_=V(_,E)}return new B(I,_)}n.A=function(_){return j(this,_).h},n.and=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&_.i(y);return new a(g,this.h&_.h)},n.or=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|_.i(y);return new a(g,this.h|_.h)},n.xor=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^_.i(y);return new a(g,this.h^_.h)};function J(_){for(var p=_.g.length+1,g=[],y=0;y<p;y++)g[y]=_.i(y)<<1|_.i(y-1)>>>31;return new a(g,_.h)}function x(_,p){var g=p>>5;p%=32;for(var y=_.g.length-g,I=[],w=0;w<y;w++)I[w]=0<p?_.i(w+g)>>>p|_.i(w+g+1)<<32-p:_.i(w+g);return new a(I,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ja=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,pe=a}).apply(typeof Zo<"u"?Zo:typeof self<"u"?self:typeof window<"u"?window:{});var rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Za,fn,tl,lr,Bs,el,nl,rl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof rr=="object"&&rr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break t;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var b=c++;return{value:l(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function T(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function v(i,l,c){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,v.apply(null,arguments)}function R(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,b){for(var k=Array(arguments.length-2),X=2;X<arguments.length;X++)k[X-2]=arguments[X];return l.prototype[A].apply(f,k)}}function N(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function D(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,b=f.length||0;i.length=A+b;for(let k=0;k<b;k++)i[A+k]=f[k]}else i.push(f)}}class V{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(i){return/^[\s\xa0]*$/.test(i)}function B(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function j(i){return j[" "](i),i}j[" "]=function(){};var J=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function x(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function _(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function p(i){const l={};for(const c in i)l[c]=i[c];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let b=0;b<g.length;b++)c=g[b],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function I(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function w(i){u.setTimeout(()=>{throw i},0)}function E(){var i=Kr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class St{constructor(){this.h=this.g=null}add(l,c){const f=le.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var le=new V(()=>new $i,i=>i.reset());class $i{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,Qe=!1,Kr=new St,qi=()=>{const i=u.Promise.resolve(void 0);Ge=()=>{i.then(Nu)}};var Nu=()=>{for(var i;i=E();){try{i.h.call(i.g)}catch(c){w(c)}var l=le;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Qe=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var xu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function Ye(i,l){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(J){t:{try{j(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Lu[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ye.aa.h.call(this)}}P(Ye,dt);var Lu={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),Mu=0;function Bu(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++Mu,this.da=this.fa=!1}function Fn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Un(i){this.src=i,this.g={},this.h=0}Un.prototype.add=function(i,l,c,f,A){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var k=Gr(i,l,f,A);return-1<k?(l=i[k],c||(l.fa=!1)):(l=new Bu(l,this.src,b,!!f,A),l.fa=c,i.push(l)),l};function Wr(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(Fn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Gr(i,l,c,f){for(var A=0;A<i.length;++A){var b=i[A];if(!b.da&&b.listener==l&&b.capture==!!c&&b.ha==f)return A}return-1}var Qr="closure_lm_"+(1e6*Math.random()|0),Yr={};function ji(i,l,c,f,A){if(Array.isArray(l)){for(var b=0;b<l.length;b++)ji(i,l[b],c,f,A);return null}return c=Ki(c),i&&i[On]?i.K(l,c,d(f)?!!f.capture:!1,A):Ou(i,l,c,!1,f,A)}function Ou(i,l,c,f,A,b){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,X=Jr(i);if(X||(i[Qr]=X=new Un(i)),c=X.add(l,c,f,k,b),c.proxy)return c;if(f=Fu(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)xu||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(Hi(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Fu(){function i(c){return l.call(i.src,i.listener,c)}const l=Uu;return i}function zi(i,l,c,f,A){if(Array.isArray(l))for(var b=0;b<l.length;b++)zi(i,l[b],c,f,A);else f=d(f)?!!f.capture:!!f,c=Ki(c),i&&i[On]?(i=i.i,l=String(l).toString(),l in i.g&&(b=i.g[l],c=Gr(b,c,f,A),-1<c&&(Fn(b[c]),Array.prototype.splice.call(b,c,1),b.length==0&&(delete i.g[l],i.h--)))):i&&(i=Jr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Gr(l,c,f,A)),(c=-1<i?l[i]:null)&&Xr(c))}function Xr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[On])Wr(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(Hi(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=Jr(l))?(Wr(c,i),c.h==0&&(c.src=null,l[Qr]=null)):Fn(i)}}}function Hi(i){return i in Yr?Yr[i]:Yr[i]="on"+i}function Uu(i,l){if(i.da)i=!0;else{l=new Ye(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&Xr(i),i=c.call(f,l)}return i}function Jr(i){return i=i[Qr],i instanceof Un?i:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(i){return typeof i=="function"?i:(i[Zr]||(i[Zr]=function(l){return i.handleEvent(l)}),i[Zr])}function ft(){Kt.call(this),this.i=new Un(this),this.M=this,this.F=null}P(ft,Kt),ft.prototype[On]=!0,ft.prototype.removeEventListener=function(i,l,c,f){zi(this,i,l,c,f)};function vt(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new dt(l,i);else if(l instanceof dt)l.target=l.target||i;else{var A=l;l=new dt(f,i),y(l,A)}if(A=!0,c)for(var b=c.length-1;0<=b;b--){var k=l.g=c[b];A=$n(k,f,!0,l)&&A}if(k=l.g=i,A=$n(k,f,!0,l)&&A,A=$n(k,f,!1,l)&&A,c)for(b=0;b<c.length;b++)k=l.g=c[b],A=$n(k,f,!1,l)&&A}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)Fn(c[f]);delete i.g[l],i.h--}}this.F=null},ft.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},ft.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function $n(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,b=0;b<l.length;++b){var k=l[b];if(k&&!k.da&&k.capture==c){var X=k.listener,at=k.ha||k.src;k.fa&&Wr(i.i,k),A=X.call(at,f)!==!1&&A}}return A&&!f.defaultPrevented}function Wi(i,l,c){if(typeof i=="function")c&&(i=v(i,c));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Gi(i){i.g=Wi(()=>{i.g=null,i.i&&(i.i=!1,Gi(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class $u extends Kt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Gi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(i){Kt.call(this),this.h=i,this.g={}}P(Xe,Kt);var Qi=[];function Yi(i){x(i.g,function(l,c){this.g.hasOwnProperty(c)&&Xr(l)},i),i.g={}}Xe.prototype.N=function(){Xe.aa.N.call(this),Yi(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ts=u.JSON.stringify,qu=u.JSON.parse,ju=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function es(){}es.prototype.h=null;function Xi(i){return i.h||(i.h=i.i())}function Ji(){}var Je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ns(){dt.call(this,"d")}P(ns,dt);function rs(){dt.call(this,"c")}P(rs,dt);var ue={},Zi=null;function qn(){return Zi=Zi||new ft}ue.La="serverreachability";function to(i){dt.call(this,ue.La,i)}P(to,dt);function Ze(i){const l=qn();vt(l,new to(l))}ue.STAT_EVENT="statevent";function eo(i,l){dt.call(this,ue.STAT_EVENT,i),this.stat=l}P(eo,dt);function Tt(i){const l=qn();vt(l,new eo(l,i))}ue.Ma="timingevent";function no(i,l){dt.call(this,ue.Ma,i),this.size=l}P(no,dt);function tn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function en(){this.g=!0}en.prototype.xa=function(){this.g=!1};function zu(i,l,c,f,A,b){i.info(function(){if(i.g)if(b)for(var k="",X=b.split("&"),at=0;at<X.length;at++){var W=X[at].split("=");if(1<W.length){var mt=W[0];W=W[1];var pt=mt.split("_");k=2<=pt.length&&pt[1]=="type"?k+(mt+"="+W+"&"):k+(mt+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+k})}function Hu(i,l,c,f,A,b,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+b+" "+k})}function Ae(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Wu(i,c)+(f?" "+f:"")})}function Ku(i,l){i.info(function(){return"TIMEOUT: "+l})}en.prototype.info=function(){};function Wu(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return ts(c)}catch{return l}}var jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ro={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ss;function zn(){}P(zn,es),zn.prototype.g=function(){return new XMLHttpRequest},zn.prototype.i=function(){return{}},ss=new zn;function Wt(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new Xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new so}function so(){this.i=null,this.g="",this.h=!1}var io={},is={};function os(i,l,c){i.L=1,i.v=Gn(Bt(l)),i.m=c,i.P=!0,oo(i,null)}function oo(i,l){i.F=Date.now(),Hn(i),i.A=Bt(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),To(c.i,"t",f),i.C=0,c=i.j.J,i.h=new so,i.g=Fo(i.j,c?l:null,!i.m),0<i.O&&(i.M=new $u(v(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Qi[0]=A.toString()),A=Qi);for(var b=0;b<A.length;b++){var k=ji(c,A[b],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Ze(),zu(i.i,i.u,i.A,i.l,i.R,i.m)}Wt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ot(i)==3?l.j():this.Y(i)},Wt.prototype.Y=function(i){try{if(i==this.g)t:{const pt=Ot(this.g);var l=this.g.Ba();const Se=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Do(this.g)))){this.J||pt!=4||l==7||(l==8||0>=Se?Ze(3):Ze(2)),as(this);var c=this.g.Z();this.X=c;e:if(ao(this)){var f=Do(this.g);i="";var A=f.length,b=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ce(this),nn(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(b&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=c==200,Hu(this.i,this.u,this.A,this.l,this.R,pt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var X,at=this.g;if((X=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(X)){var W=X;break e}}W=null}if(c=W)Ae(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ls(this,c);else{this.o=!1,this.s=3,Tt(12),ce(this),nn(this);break t}}if(this.P){c=!0;let Pt;for(;!this.J&&this.C<k.length;)if(Pt=Gu(this,k),Pt==is){pt==4&&(this.s=4,Tt(14),c=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==io){this.s=4,Tt(15),Ae(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else Ae(this.i,this.l,Pt,null),ls(this,Pt);if(ao(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||k.length!=0||this.h.h||(this.s=1,Tt(16),c=!1),this.o=this.o&&c,!c)Ae(this.i,this.l,k,"[Invalid Chunked Response]"),ce(this),nn(this);else if(0<k.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ms(mt),mt.M=!0,Tt(11))}}else Ae(this.i,this.l,k,null),ls(this,k);pt==4&&ce(this),this.o&&!this.J&&(pt==4?Lo(this.j,this):(this.o=!1,Hn(this)))}else hc(this.g),c==400&&0<k.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),ce(this),nn(this)}}}catch{}finally{}};function ao(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Gu(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?is:(c=Number(l.substring(c,f)),isNaN(c)?io:(f+=1,f+c>l.length?is:(l=l.slice(f,f+c),i.C=f+c,l)))}Wt.prototype.cancel=function(){this.J=!0,ce(this)};function Hn(i){i.S=Date.now()+i.I,lo(i,i.I)}function lo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=tn(v(i.ba,i),l)}function as(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Wt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Ku(this.i,this.A),this.L!=2&&(Ze(),Tt(17)),ce(this),this.s=2,nn(this)):lo(this,this.S-i)};function nn(i){i.j.G==0||i.J||Lo(i.j,i)}function ce(i){as(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Yi(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ls(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||us(c.h,i))){if(!i.K&&us(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)tr(c),Jn(c);else break t;fs(c),Tt(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=tn(v(c.Za,c),6e3));if(1>=ho(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else de(c,11)}else if((i.K||c.g==i)&&tr(c),!F(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let W=A[l];if(c.T=W[0],W=W[1],c.G==2)if(W[0]=="c"){c.K=W[1],c.ia=W[2];const mt=W[3];mt!=null&&(c.la=mt,c.j.info("VER="+c.la));const pt=W[4];pt!=null&&(c.Aa=pt,c.j.info("SVER="+c.Aa));const Se=W[5];Se!=null&&typeof Se=="number"&&0<Se&&(f=1.5*Se,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Pt=i.g;if(Pt){const nr=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nr){var b=f.h;b.g||nr.indexOf("spdy")==-1&&nr.indexOf("quic")==-1&&nr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(cs(b,b.h),b.h=null))}if(f.D){const ps=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;ps&&(f.ya=ps,Z(f.I,f.D,ps))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var k=i;if(f.qa=Oo(f,f.J?f.ia:null,f.W),k.K){fo(f.h,k);var X=k,at=f.L;at&&(X.I=at),X.B&&(as(X),Hn(X)),f.g=k}else No(f);0<c.i.length&&Zn(c)}else W[0]!="stop"&&W[0]!="close"||de(c,7);else c.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?de(c,7):ds(c):W[0]!="noop"&&c.l&&c.l.ta(W),c.v=0)}}Ze(4)}catch{}}var Qu=class{constructor(i,l){this.g=i,this.map=l}};function uo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function co(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ho(i){return i.h?1:i.g?i.g.size:0}function us(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function cs(i,l){i.g?i.g.add(l):i.h=l}function fo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}uo.prototype.cancel=function(){if(this.i=mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function mo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return N(i.i)}function Yu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function Xu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function po(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=Xu(i),f=Yu(i),A=f.length,b=0;b<A;b++)l.call(void 0,f[b],c&&c[b],i)}var go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ju(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var b=i[c].substring(0,f);A=i[c].substring(f+1)}else b=i[c];l(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function he(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof he){this.h=i.h,Kn(this,i.j),this.o=i.o,this.g=i.g,Wn(this,i.s),this.l=i.l;var l=i.i,c=new on;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),yo(this,c),this.m=i.m}else i&&(l=String(i).match(go))?(this.h=!1,Kn(this,l[1]||"",!0),this.o=rn(l[2]||""),this.g=rn(l[3]||"",!0),Wn(this,l[4]),this.l=rn(l[5]||"",!0),yo(this,l[6]||"",!0),this.m=rn(l[7]||"")):(this.h=!1,this.i=new on(null,this.h))}he.prototype.toString=function(){var i=[],l=this.j;l&&i.push(sn(l,_o,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(sn(l,_o,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(sn(c,c.charAt(0)=="/"?ec:tc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",sn(c,rc)),i.join("")};function Bt(i){return new he(i)}function Kn(i,l,c){i.j=c?rn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Wn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function yo(i,l,c){l instanceof on?(i.i=l,sc(i.i,i.h)):(c||(l=sn(l,nc)),i.i=new on(l,i.h))}function Z(i,l,c){i.i.set(l,c)}function Gn(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function rn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function sn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Zu),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Zu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var _o=/[#\/\?@]/g,tc=/[#\?:]/g,ec=/[#\?]/g,nc=/[#\?@]/g,rc=/#/g;function on(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Gt(i){i.g||(i.g=new Map,i.h=0,i.i&&Ju(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=on.prototype,n.add=function(i,l){Gt(this),this.i=null,i=be(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Eo(i,l){Gt(i),l=be(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function vo(i,l){return Gt(i),l=be(i,l),i.g.has(l)}n.forEach=function(i,l){Gt(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){Gt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let b=0;b<A.length;b++)c.push(l[f])}return c},n.V=function(i){Gt(this);let l=[];if(typeof i=="string")vo(this,i)&&(l=l.concat(this.g.get(be(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return Gt(this),this.i=null,i=be(this,i),vo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function To(i,l,c){Eo(i,l),0<c.length&&(i.i=null,i.g.set(be(i,l),N(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=b;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function be(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function sc(i,l){l&&!i.j&&(Gt(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Eo(this,f),To(this,A,c))},i)),i.j=l}function ic(i,l){const c=new en;if(u.Image){const f=new Image;f.onload=R(Qt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Qt,c,"TestLoadImage: error",!1,l,f),f.onabort=R(Qt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Qt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function oc(i,l){const c=new en,f=new AbortController,A=setTimeout(()=>{f.abort(),Qt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?Qt(c,"TestPingServer: ok",!0,l):Qt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Qt(c,"TestPingServer: error",!1,l)})}function Qt(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function ac(){this.g=new ju}function lc(i,l,c){const f=c||"";try{po(i,function(A,b){let k=A;d(A)&&(k=ts(A)),l.push(f+b+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function Qn(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Qn,es),Qn.prototype.g=function(){return new Yn(this.l,this.j)},Qn.prototype.i=function(i){return function(){return i}}({});function Yn(i,l){ft.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Yn,ft),n=Yn.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,ln(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Io(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Io(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?an(this):ln(this),this.readyState==3&&Io(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,an(this))},n.Qa=function(i){this.g&&(this.response=i,an(this))},n.ga=function(){this.g&&an(this)};function an(i){i.readyState=4,i.l=null,i.j=null,i.v=null,ln(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function ln(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function wo(i){let l="";return x(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function hs(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=wo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):Z(i,l,c))}function nt(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(nt,ft);var uc=/^https?$/i,cc=["POST","PUT"];n=nt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ss.g(),this.v=this.o?Xi(this.o):Xi(ss),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(b){Ao(this,b);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())c.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(b=>b.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(cc,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of c)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{So(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){Ao(this,b)}};function Ao(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,bo(i),Xn(i)}function bo(i){i.A||(i.A=!0,vt(i,"complete"),vt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,vt(this,"complete"),vt(this,"abort"),Xn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xn(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ro(this):this.bb())},n.bb=function(){Ro(this)};function Ro(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ot(i)!=4||i.Z()!=2)){if(i.u&&Ot(i)==4)Wi(i.Ea,0,i);else if(vt(i,"readystatechange"),Ot(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=k===0){var A=String(i.D).match(go)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!uc.test(A?A.toLowerCase():"")}c=f}if(c)vt(i,"complete"),vt(i,"success");else{i.m=6;try{var b=2<Ot(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",bo(i)}}finally{Xn(i)}}}}function Xn(i,l){if(i.g){So(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||vt(i,"ready");try{c.onreadystatechange=f}catch{}}}function So(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ot(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),qu(l)}};function Do(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function hc(i){const l={};i=(i.g&&2<=Ot(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(F(i[f]))continue;var c=I(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const b=l[A]||[];l[A]=b,b.push(c)}_(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function un(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Po(i){this.Aa=0,this.i=[],this.j=new en,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=un("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=un("baseRetryDelayMs",5e3,i),this.cb=un("retryDelaySeedMs",1e4,i),this.Wa=un("forwardChannelMaxRetries",2,i),this.wa=un("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new uo(i&&i.concurrentRequestLimit),this.Da=new ac,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Po.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){Tt(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Oo(this,null,this.W),Zn(this)};function ds(i){if(Co(i),i.G==3){var l=i.U++,c=Bt(i.I);if(Z(c,"SID",i.K),Z(c,"RID",l),Z(c,"TYPE","terminate"),cn(i,c),l=new Wt(i,i.j,l),l.L=2,l.v=Gn(Bt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Fo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Hn(l)}Bo(i)}function Jn(i){i.g&&(ms(i),i.g.cancel(),i.g=null)}function Co(i){Jn(i),i.u&&(u.clearTimeout(i.u),i.u=null),tr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Zn(i){if(!co(i.h)&&!i.s){i.s=!0;var l=i.Ga;Ge||qi(),Qe||(Ge(),Qe=!0),Kr.add(l,i),i.B=0}}function dc(i,l){return ho(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=tn(v(i.Ga,i,l),Mo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Wt(this,this.j,i);let b=this.o;if(this.S&&(b?(b=p(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=ko(this,A,l),c=Bt(this.I),Z(c,"RID",i),Z(c,"CVER",22),this.D&&Z(c,"X-HTTP-Session-Id",this.D),cn(this,c),b&&(this.O?l="headers="+encodeURIComponent(String(wo(b)))+"&"+l:this.m&&hs(c,this.m,b)),cs(this.h,A),this.Ua&&Z(c,"TYPE","init"),this.P?(Z(c,"$req",l),Z(c,"SID","null"),A.T=!0,os(A,c,null)):os(A,c,l),this.G=2}}else this.G==3&&(i?Vo(this,i):this.i.length==0||co(this.h)||Vo(this))};function Vo(i,l){var c;l?c=l.l:c=i.U++;const f=Bt(i.I);Z(f,"SID",i.K),Z(f,"RID",c),Z(f,"AID",i.T),cn(i,f),i.m&&i.o&&hs(f,i.m,i.o),c=new Wt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ko(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),cs(i.h,c),os(c,f,l)}function cn(i,l){i.H&&x(i.H,function(c,f){Z(l,f,c)}),i.l&&po({},function(c,f){Z(l,f,c)})}function ko(i,l,c){c=Math.min(i.i.length,c);var f=i.l?v(i.l.Na,i.l,i):null;t:{var A=i.i;let b=-1;for(;;){const k=["count="+c];b==-1?0<c?(b=A[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let X=!0;for(let at=0;at<c;at++){let W=A[at].g;const mt=A[at].map;if(W-=b,0>W)b=Math.max(0,A[at].g-100),X=!1;else try{lc(mt,k,"req"+W+"_")}catch{f&&f(mt)}}if(X){f=k.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function No(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Ge||qi(),Qe||(Ge(),Qe=!0),Kr.add(l,i),i.v=0}}function fs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=tn(v(i.Fa,i),Mo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,xo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=tn(v(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Jn(this),xo(this))};function ms(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function xo(i){i.g=new Wt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Bt(i.qa);Z(l,"RID","rpc"),Z(l,"SID",i.K),Z(l,"AID",i.T),Z(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(l,"TO",i.ja),Z(l,"TYPE","xmlhttp"),cn(i,l),i.m&&i.o&&hs(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Gn(Bt(l)),c.m=null,c.P=!0,oo(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Jn(this),fs(this),Tt(19))};function tr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Lo(i,l){var c=null;if(i.g==l){tr(i),ms(i),i.g=null;var f=2}else if(us(i.h,l))c=l.D,fo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=qn(),vt(f,new no(f,c)),Zn(i)}else No(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&dc(i,l)||f==2&&fs(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:de(i,5);break;case 4:de(i,10);break;case 3:de(i,6);break;default:de(i,2)}}}function Mo(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function de(i,l){if(i.j.info("Error code "+l),l==2){var c=v(i.fb,i),f=i.Xa;const A=!f;f=new he(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Kn(f,"https"),Gn(f),A?ic(f.toString(),c):oc(f.toString(),c)}else Tt(2);i.G=0,i.l&&i.l.sa(l),Bo(i),Co(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Bo(i){if(i.G=0,i.ka=[],i.l){const l=mo(i.h);(l.length!=0||i.i.length!=0)&&(D(i.ka,l),D(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function Oo(i,l,c){var f=c instanceof he?Bt(c):new he(c);if(f.g!="")l&&(f.g=l+"."+f.g),Wn(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var b=new he(null);f&&Kn(b,f),l&&(b.g=l),A&&Wn(b,A),c&&(b.l=c),f=b}return c=i.D,l=i.ya,c&&l&&Z(f,c,l),Z(f,"VER",i.la),cn(i,f),f}function Fo(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new nt(new Qn({eb:c})):new nt(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uo(){}n=Uo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function er(){}er.prototype.g=function(i,l){return new bt(i,l)};function bt(i,l){ft.call(this),this.g=new Po(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!F(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Re(this)}P(bt,ft),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){ds(this.g)},bt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=ts(i),i=c);l.i.push(new Qu(l.Ya++,i)),l.G==3&&Zn(l)},bt.prototype.N=function(){this.g.l=null,delete this.j,ds(this.g),delete this.g,bt.aa.N.call(this)};function $o(i){ns.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P($o,ns);function qo(){rs.call(this),this.status=1}P(qo,rs);function Re(i){this.g=i}P(Re,Uo),Re.prototype.ua=function(){vt(this.g,"a")},Re.prototype.ta=function(i){vt(this.g,new $o(i))},Re.prototype.sa=function(i){vt(this.g,new qo)},Re.prototype.ra=function(){vt(this.g,"b")},er.prototype.createWebChannel=er.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,rl=function(){return new er},nl=function(){return qn()},el=ue,Bs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jn.NO_ERROR=0,jn.TIMEOUT=8,jn.HTTP_ERROR=6,lr=jn,ro.COMPLETE="complete",tl=ro,Ji.EventType=Je,Je.OPEN="a",Je.CLOSE="b",Je.ERROR="c",Je.MESSAGE="d",ft.prototype.listen=ft.prototype.K,fn=Ji,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Za=nt}).apply(typeof rr<"u"?rr:typeof self<"u"?self:typeof window<"u"?window:{});const ta="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let je="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Ka("@firebase/firestore");function hn(){return ye.logLevel}function M(n,...t){if(ye.logLevel<=K.DEBUG){const e=t.map(ni);ye.debug(`Firestore (${je}): ${n}`,...e)}}function qt(n,...t){if(ye.logLevel<=K.ERROR){const e=t.map(ni);ye.error(`Firestore (${je}): ${n}`,...e)}}function xe(n,...t){if(ye.logLevel<=K.WARN){const e=t.map(ni);ye.warn(`Firestore (${je}): ${n}`,...e)}}function ni(n){if(typeof n=="string")return n;try{/**
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
 */function U(n="Unexpected state"){const t=`FIRESTORE (${je}) INTERNAL ASSERTION FAILED: `+n;throw qt(t),new Error(t)}function Y(n,t){n||U()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends qe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Kh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Wh{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ft,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ft)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new sl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new _t(t)}}class Gh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Gh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Y(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Yh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Jh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Jh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function G(n,t){return n<t?-1:n>t?1:0}function Le(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.timestamp=t}static fromTimestamp(t){return new $(t)}static min(){return new $(new Q(0,0))}static max(){return new $(new Q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(),r===void 0?r=t.length-e:r>t.length-e&&U(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return An.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof An?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends An{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const Zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends An{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return Zh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new L(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new L(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(tt.fromString(t))}static fromName(t){return new O(tt.fromString(t).popFirst(5))}static empty(){return new O(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new tt(t.slice()))}}function td(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new ee(s,O.empty(),t)}function ed(n){return new ee(n.readTime,n.key,-1)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee($.min(),O.empty(),-1)}static max(){return new ee($.max(),O.empty(),-1)}}function nd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}/**
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
 */const rd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==rd)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function id(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function kn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ri{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ri.oe=-1;function Dr(n){return n==null}function gr(n){return n===0&&1/n==-1/0}function od(n){return typeof n=="number"&&Number.isInteger(n)&&!gr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ve(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ol(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sr(this.root,t,this.comparator,!0)}}class sr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new lt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,r,s,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new na(this.data.getIterator())}getIteratorFrom(t){return new na(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class na{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new ct(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Le(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class al extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new al("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(Y(!!n),typeof n=="string"){let t=0;const e=ad.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
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
 */function si(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ii(n){const t=n.mapValue.fields.__previous_value__;return si(t)?ii(t):t}function bn(n){const t=ne(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Rn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Rn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ir={mapValue:{}};function Ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?si(n)?4:cd(n)?9007199254740991:ud(n)?10:11:U()}function Mt(n,t){if(n===t)return!0;const e=Ee(n);if(e!==Ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return bn(n).isEqual(bn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ne(s.timestampValue),u=ne(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return _e(s.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),u=rt(o.doubleValue);return a===u?gr(a)===gr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Le(n.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(ea(a)!==ea(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Mt(a[h],u[h])))return!1;return!0}(n,t);default:return U()}}function Sn(n,t){return(n.values||[]).find(e=>Mt(e,t))!==void 0}function Me(n,t){if(n===t)return 0;const e=Ee(n),r=Ee(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return ra(n.timestampValue,t.timestampValue);case 4:return ra(bn(n),bn(t));case 5:return G(n.stringValue,t.stringValue);case 6:return function(o,a){const u=_e(o),h=_e(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=G(u[d],h[d]);if(m!==0)return m}return G(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=G(rt(o.latitude),rt(a.latitude));return u!==0?u:G(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return sa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const T=o.fields||{},v=a.fields||{},R=(u=T.value)===null||u===void 0?void 0:u.arrayValue,P=(h=v.value)===null||h===void 0?void 0:h.arrayValue,N=G(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:sa(R,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===ir.mapValue&&a===ir.mapValue)return 0;if(o===ir.mapValue)return 1;if(a===ir.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const v=G(h[T],m[T]);if(v!==0)return v;const R=Me(u[h[T]],d[m[T]]);if(R!==0)return R}return G(h.length,m.length)}(n.mapValue,t.mapValue);default:throw U()}}function ra(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);const e=ne(n),r=ne(t),s=G(e.seconds,r.seconds);return s!==0?s:G(e.nanos,r.nanos)}function sa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Me(e[s],r[s]);if(o)return o}return G(e.length,r.length)}function Be(n){return Os(n)}function Os(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Os(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Os(e.fields[a])}`;return s+"}"}(n.mapValue):U()}function ia(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Fs(n){return!!n&&"integerValue"in n}function oi(n){return!!n&&"arrayValue"in n}function oa(n){return!!n&&"nullValue"in n}function aa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ur(n){return!!n&&"mapValue"in n}function ud(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function yn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ve(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=yn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=yn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function cd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ur(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yn(e)}setAll(t){let e=ut.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=yn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ur(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ur(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ve(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new wt(yn(this.value))}}function ll(n){const t=[];return ve(n.fields,(e,r)=>{const s=new ut([e]);if(ur(r)){const o=ll(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Et(t,0,$.min(),$.min(),$.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new Et(t,1,e,$.min(),r,s,0)}static newNoDocument(t,e){return new Et(t,2,e,$.min(),$.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,$.min(),$.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yr{constructor(t,e){this.position=t,this.inclusive=e}}function la(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Me(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ua(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Mt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Dn{constructor(t,e="asc"){this.field=t,this.dir=e}}function hd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ul{}class it extends ul{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new fd(t,e,r):e==="array-contains"?new gd(t,r):e==="in"?new yd(t,r):e==="not-in"?new _d(t,r):e==="array-contains-any"?new Ed(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new md(t,r):new pd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Me(e,this.value)):e!==null&&Ee(this.value)===Ee(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends ul{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return cl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function cl(n){return n.op==="and"}function hl(n){return dd(n)&&cl(n)}function dd(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function Us(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Be(n.value);if(hl(n))return n.filters.map(t=>Us(t)).join(",");{const t=n.filters.map(e=>Us(e)).join(",");return`${n.op}(${t})`}}function dl(n,t){return n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,t):n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&dl(a,s.filters[u]),!0):!1}(n,t):void U()}function fl(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Be(e.value)}`}(n):n instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(fl).join(" ,")+"}"}(n):"Filter"}class fd extends it{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class md extends it{constructor(t,e){super(t,"in",e),this.keys=ml("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pd extends it{constructor(t,e){super(t,"not-in",e),this.keys=ml("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ml(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class gd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oi(e)&&Sn(e.arrayValue,this.value)}}class yd extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Sn(this.value.arrayValue,e)}}class _d extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(Sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Sn(this.value.arrayValue,e)}}class Ed extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Sn(this.value.arrayValue,r))}}/**
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
 */class vd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ca(n,t=null,e=[],r=[],s=null,o=null,a=null){return new vd(n,t,e,r,s,o,a)}function ai(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Us(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Dr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Be(r)).join(",")),t.ue=e}return t.ue}function li(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!hd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!dl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ua(n.startAt,t.startAt)&&ua(n.endAt,t.endAt)}function $s(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Td(n,t,e,r,s,o,a,u){return new ze(n,t,e,r,s,o,a,u)}function ui(n){return new ze(n)}function ha(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pl(n){return n.collectionGroup!==null}function _n(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ct(ut.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Dn(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new Dn(ut.keyField(),r))}return t.ce}function xt(n){const t=q(n);return t.le||(t.le=Id(t,_n(n))),t.le}function Id(n,t){if(n.limitType==="F")return ca(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Dn(s.field,o)});const e=n.endAt?new yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yr(n.startAt.position,n.startAt.inclusive):null;return ca(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function qs(n,t){const e=n.filters.concat([t]);return new ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function _r(n,t,e){return new ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pr(n,t){return li(xt(n),xt(t))&&n.limitType===t.limitType}function gl(n){return`${ai(xt(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>fl(s)).join(", ")}]`),Dr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Be(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Be(s)).join(",")),`Target(${r})`}(xt(n))}; limitType=${n.limitType})`}function Cr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of _n(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=la(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,_n(r),s)||r.endAt&&!function(a,u,h){const d=la(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,_n(r),s))}(n,t)}function wd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yl(n){return(t,e)=>{let r=!1;for(const s of _n(n)){const o=Ad(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ad(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Me(h,d):U()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return ol(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new et(O.comparator);function jt(){return bd}const _l=new et(O.comparator);function mn(...n){let t=_l;for(const e of n)t=t.insert(e.key,e);return t}function El(n){let t=_l;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function me(){return En()}function vl(){return En()}function En(){return new He(n=>n.toString(),(n,t)=>n.isEqual(t))}const Rd=new et(O.comparator),Sd=new ct(O.comparator);function z(...n){let t=Sd;for(const e of n)t=t.add(e);return t}const Dd=new ct(G);function Pd(){return Dd}/**
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
 */function ci(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gr(t)?"-0":t}}function Tl(n){return{integerValue:""+n}}function Cd(n,t){return od(t)?Tl(t):ci(n,t)}/**
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
 */class Vr{constructor(){this._=void 0}}function Vd(n,t,e){return n instanceof Er?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&si(o)&&(o=ii(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Pn?wl(n,t):n instanceof Cn?Al(n,t):function(s,o){const a=Il(s,o),u=da(a)+da(s.Pe);return Fs(a)&&Fs(s.Pe)?Tl(u):ci(s.serializer,u)}(n,t)}function kd(n,t,e){return n instanceof Pn?wl(n,t):n instanceof Cn?Al(n,t):e}function Il(n,t){return n instanceof vr?function(r){return Fs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Er extends Vr{}class Pn extends Vr{constructor(t){super(),this.elements=t}}function wl(n,t){const e=bl(t);for(const r of n.elements)e.some(s=>Mt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Cn extends Vr{constructor(t){super(),this.elements=t}}function Al(n,t){let e=bl(t);for(const r of n.elements)e=e.filter(s=>!Mt(s,r));return{arrayValue:{values:e}}}class vr extends Vr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function da(n){return rt(n.integerValue||n.doubleValue)}function bl(n){return oi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Nd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Pn&&s instanceof Pn||r instanceof Cn&&s instanceof Cn?Le(r.elements,s.elements,Mt):r instanceof vr&&s instanceof vr?Mt(r.Pe,s.Pe):r instanceof Er&&s instanceof Er}(n.transform,t.transform)}class xd{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class kr{}function Rl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new hi(n.key,Dt.none()):new Nn(n.key,n.data,Dt.none());{const e=n.data,r=wt.empty();let s=new ct(ut.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new oe(n.key,r,new Rt(s.toArray()),Dt.none())}}function Ld(n,t,e){n instanceof Nn?function(s,o,a){const u=s.value.clone(),h=ma(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof oe?function(s,o,a){if(!cr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ma(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Sl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function vn(n,t,e,r){return n instanceof Nn?function(o,a,u,h){if(!cr(o.precondition,a))return u;const d=o.value.clone(),m=pa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof oe?function(o,a,u,h){if(!cr(o.precondition,a))return u;const d=pa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Sl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,u){return cr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Md(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Il(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function fa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Le(r,s,(o,a)=>Nd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Nn extends kr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class oe extends kr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Sl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ma(n,t,e){const r=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,kd(a,u,e[s]))}return r}function pa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Vd(o,a,t))}return r}class hi extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bd extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Ld(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=vn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=vn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=vl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Rl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&Le(this.mutations,t.mutations,(e,r)=>fa(e,r))&&Le(this.baseMutations,t.baseMutations,(e,r)=>fa(e,r))}}class di{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length);let s=function(){return Rd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new di(t,e,r,s)}}/**
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
 */class Fd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ud{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,H;function $d(n){switch(n){default:return U();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Dl(n){if(n===void 0)return qt("GRPC error has no .code"),S.UNKNOWN;switch(n){case st.OK:return S.OK;case st.CANCELLED:return S.CANCELLED;case st.UNKNOWN:return S.UNKNOWN;case st.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case st.INTERNAL:return S.INTERNAL;case st.UNAVAILABLE:return S.UNAVAILABLE;case st.UNAUTHENTICATED:return S.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case st.NOT_FOUND:return S.NOT_FOUND;case st.ALREADY_EXISTS:return S.ALREADY_EXISTS;case st.PERMISSION_DENIED:return S.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case st.ABORTED:return S.ABORTED;case st.OUT_OF_RANGE:return S.OUT_OF_RANGE;case st.UNIMPLEMENTED:return S.UNIMPLEMENTED;case st.DATA_LOSS:return S.DATA_LOSS;default:return U()}}(H=st||(st={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qd(){return new TextEncoder}/**
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
 */const jd=new pe([4294967295,4294967295],0);function ga(n){const t=qd().encode(n),e=new Ja;return e.update(t),new Uint8Array(e.digest())}function ya(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new pe([e,r],0),new pe([s,o],0)]}class fi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new pn(`Invalid padding: ${e}`);if(r<0)throw new pn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new pn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new pn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=pe.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(pe.fromNumber(r)));return s.compare(jd)===1&&(s=new pe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ga(t),[r,s]=ya(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new fi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=ga(t),[r,s]=ya(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,xn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Nr($.min(),s,new et(G),jt(),z())}}class xn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new xn(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Pl{constructor(t,e){this.targetId=t,this.me=e}}class Cl{constructor(t,e,r=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class _a{constructor(){this.fe=0,this.ge=va(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=z(),e=z(),r=z();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:U()}}),new xn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=va()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zd{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=Ea(),this.Qe=new et(G)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:U()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if($s(o))if(r===0){const a=new O(o.path);this.Ue(e,a,Et.newNoDocument(a,$.min()))}else Y(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=_e(r).toUint8Array()}catch(h){if(h instanceof al)return xe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new fi(a,s,o)}catch(h){return xe(h instanceof pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&$s(u.target)){const h=new O(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Et.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=z();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Nr(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=Ea(),this.Qe=new et(G),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new _a,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ct(G),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new _a),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ea(){return new et(O.comparator)}function va(){return new et(O.comparator)}const Hd={asc:"ASCENDING",desc:"DESCENDING"},Kd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wd={and:"AND",or:"OR"};class Gd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function js(n,t){return n.useProto3Json||Dr(t)?t:{value:t}}function Tr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Qd(n,t){return Tr(n,t.toTimestamp())}function Lt(n){return Y(!!n),$.fromTimestamp(function(e){const r=ne(e);return new Q(r.seconds,r.nanos)}(n))}function mi(n,t){return zs(n,t).canonicalString()}function zs(n,t){const e=function(s){return new tt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function kl(n){const t=tt.fromString(n);return Y(Bl(t)),t}function Hs(n,t){return mi(n.databaseId,t.path)}function vs(n,t){const e=kl(t);if(e.get(1)!==n.databaseId.projectId)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(xl(e))}function Nl(n,t){return mi(n.databaseId,t)}function Yd(n){const t=kl(n);return t.length===4?tt.emptyPath():xl(t)}function Ks(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xl(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ta(n,t,e){return{name:Hs(n,t),fields:e.value.mapValue.fields}}function Xd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(Y(m===void 0||typeof m=="string"),ht.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ht.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?S.UNKNOWN:Dl(d.code);return new L(m,d.message||"")}(a);e=new Cl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=vs(n,r.document.name),o=Lt(r.document.updateTime),a=r.document.createTime?Lt(r.document.createTime):$.min(),u=new wt({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new hr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=vs(n,r.document),o=r.readTime?Lt(r.readTime):$.min(),a=Et.newNoDocument(s,o),u=r.removedTargetIds||[];e=new hr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=vs(n,r.document),o=r.removedTargetIds||[];e=new hr([],o,s,null)}else{if(!("filter"in t))return U();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ud(s,o),u=r.targetId;e=new Pl(u,a)}}return e}function Jd(n,t){let e;if(t instanceof Nn)e={update:Ta(n,t.key,t.value)};else if(t instanceof hi)e={delete:Hs(n,t.key)};else if(t instanceof oe)e={update:Ta(n,t.key,t.data),updateMask:lf(t.fieldMask)};else{if(!(t instanceof Bd))return U();e={verify:Hs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Er)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Cn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof vr)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw U()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Qd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,t.precondition)),e}function Zd(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Lt(s.updateTime):Lt(o);return a.isEqual($.min())&&(a=Lt(o)),new xd(a,s.transformResults||[])}(e,t))):[]}function tf(n,t){return{documents:[Nl(n,t.path)]}}function ef(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Nl(n,s);const o=function(d){if(d.length!==0)return Ml(Ct.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Ce(v.field),direction:sf(v.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=js(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function nf(n){let t=Yd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const v=Ll(T);return v instanceof Ct&&hl(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(v=>function(P){return new Dn(Ve(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(e.orderBy));let u=null;e.limit&&(u=function(T){let v;return v=typeof T=="object"?T.value:T,Dr(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(T){const v=!!T.before,R=T.values||[];return new yr(R,v)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const v=!T.before,R=T.values||[];return new yr(R,v)}(e.endAt)),Td(t,s,a,o,u,"F",h,d)}function rf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ll(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ve(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ve(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ve(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ve(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(e){return it.create(Ve(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(r=>Ll(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(n):U()}function sf(n){return Hd[n]}function of(n){return Kd[n]}function af(n){return Wd[n]}function Ce(n){return{fieldPath:n.canonicalString()}}function Ve(n){return ut.fromServerFormat(n.fieldPath)}function Ml(n){return n instanceof it?function(e){if(e.op==="=="){if(aa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NAN"}};if(oa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(aa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NAN"}};if(oa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ce(e.field),op:of(e.op),value:e.value}}}(n):n instanceof Ct?function(e){const r=e.getFilters().map(s=>Ml(s));return r.length===1?r[0]:{compositeFilter:{op:af(e.op),filters:r}}}(n):U()}function lf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Bl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e,r,s,o=$.min(),a=$.min(),u=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.ct=t}}function cf(n){const t=nf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_r(t,t.limit,"L"):t}/**
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
 */class hf{constructor(){this.un=new df}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(ee.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class df{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ct(tt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ct(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oe(0)}static kn(){return new Oe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.changes=new He(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&vn(r.mutation,s,Rt.empty(),Q.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const s=me();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=mn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=me();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=jt();const a=En(),u=function(){return En()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof oe)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),vn(m.mutation,d,m.mutation.getFieldMask(),Q.now())):a.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var T;return u.set(d,new mf(m,(T=a.get(d))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(t,e){const r=En();let s=new et((a,u)=>a-u),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Rt.empty();m=u.applyToLocalView(d,m),r.set(h,m);const T=(s.get(u.batchId)||z()).add(h);s=s.insert(u.batchId,T)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,T=vl();m.forEach(v=>{if(!o.has(v)){const R=Rl(e.get(v),r.get(v));R!==null&&T.set(v,R),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(me());let u=-1,h=o;return a.next(d=>C.forEach(d,(m,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(v=>{h=h.insert(m,v)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,z())).next(m=>({batchId:u,changes:El(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=mn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=mn();return this.indexManager.getCollectionParents(t,o).next(u=>C.forEach(u,h=>{const d=function(T,v){return new ze(v,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((T,v)=>{a=a.insert(T,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Et.newInvalidDocument(m)))});let u=mn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&vn(m.mutation,d,Rt.empty(),Q.now()),Cr(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class gf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:cf(s.bundledQuery),readTime:Lt(s.readTime)}}(e)),C.resolve()}}/**
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
 */class yf{constructor(){this.overlays=new et(O.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=me();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=me(),o=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new et((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=me(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=me(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return C.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Fd(e,r));let o=this.Ir.get(e);o===void 0&&(o=z(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class _f{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.Tr=new ct(ot.Er),this.dr=new ct(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new ot(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new O(new tt([])),r=new ot(e,t),s=new ot(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new tt([])),r=new ot(e,t),s=new ot(e,t+1);let o=z();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ot(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||G(t.wr,e.wr)}static Ar(t,e){return G(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ct(ot.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Od(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new ot(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),s=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const u=this.Dr(a.wr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ct(G);return e.forEach(s=>{const o=new ot(s,0),a=new ot(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ot(new O(o),0);let u=new ct(G);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.wr)),!0)},a),C.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,s=>{const o=new ot(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new ot(e,0),s=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t){this.Mr=t,this.docs=function(){return new et(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Et.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const a=e.path,u=new O(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||nd(ed(m),r)<=0||(s.has(m.key)||Cr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){U()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Tf(this)}getSize(t){return C.resolve(this.size)}}class Tf extends ff{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.persistence=t,this.Nr=new He(e=>ai(e),li),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pi,this.targetCount=0,this.kr=Oe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Oe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ri(0),this.Kr=!1,this.Kr=!0,this.$r=new _f,this.referenceDelegate=t(this),this.Ur=new If(this),this.indexManager=new hf,this.remoteDocumentCache=function(s){return new vf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new uf(e),this.Gr=new gf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Ef(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new Af(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Af extends sd{constructor(t){super(),this.currentSequenceNumber=t}}class gi{constructor(t){this.persistence=t,this.Jr=new pi,this.Yr=null}static Zr(t){return new gi(t)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,$.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=z(),s=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new yi(t,e.fromCache,r,s)}}/**
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
 */class bf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Rf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Sc()?8:id(bc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new bf;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(hn()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(hn()<=K.DEBUG&&M("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(hn()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):C.resolve())}Yi(t,e){if(ha(e))return C.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=_r(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=z(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,u);return this.ns(e,d,a,h.readTime)?this.Yi(t,_r(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return ha(e)||s.isEqual($.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?C.resolve(null):(hn()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.rs(t,a,e,td(s,-1)).next(u=>u))})}ts(t,e){let r=new ct(yl(t));return e.forEach((s,o)=>{Cr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return hn()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.Ji.getDocumentsMatchingQuery(t,e,ee.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Sf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new et(G),this._s=new He(o=>ai(o),li),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new pf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Df(n,t,e,r){return new Sf(n,t,e,r)}async function Ol(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Pf(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const T=d.batch,v=T.keys();let R=C.resolve();return v.forEach(P=>{R=R.next(()=>m.getEntry(h,P)).next(N=>{const D=d.docVersions.get(P);Y(D!==null),N.version.compareTo(D)<0&&(T.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Fl(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Cf(n,t){const e=q(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((m,T)=>{const v=s.get(T);if(!v)return;u.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,T)));let R=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?R=R.withResumeToken(ht.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(T,R),function(N,D,V){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(v,R,m)&&u.push(e.Ur.updateTargetData(o,R))});let h=jt(),d=z();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Vf(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual($.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(T=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function Vf(n,t,e){let r=z(),s=z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual($.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function kf(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Nf(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Yt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ws(n,t,e){const r=q(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!kn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Ia(n,t,e){const r=q(n);let s=$.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=q(h),v=T._s.get(m);return v!==void 0?C.resolve(T.os.get(v)):T.Ur.getTargetData(d,m)}(r,a,xt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:$.min(),e?o:z())).next(u=>(xf(r,wd(t),u),{documents:u,Ts:o})))}function xf(n,t,e){let r=n.us.get(t)||$.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class wa{constructor(){this.activeTargetIds=Pd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lf{constructor(){this.so=new wa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new wa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Mf{_o(t){}shutdown(){}}/**
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
 */class Aa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let or=null;function Ts(){return or===null?or=function(){return 268435456+Math.round(2147483648*Math.random())}():or++,"0x"+or.toString(16)}/**
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
 */const Bf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Ff extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const u=Ts(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw xe("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,u){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+je}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Bf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Ts();return new Promise((a,u)=>{const h=new Za;h.setWithCredentials(!0),h.listenOnce(tl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case lr.NO_ERROR:const m=h.getResponseJson();M(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case lr.TIMEOUT:M(gt,`RPC '${t}' ${o} timed out`),u(new L(S.DEADLINE_EXCEEDED,"Request time out"));break;case lr.HTTP_ERROR:const T=h.getStatus();if(M(gt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const P=function(D){const V=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(V)>=0?V:S.UNKNOWN}(R.status);u(new L(P,R.message))}else u(new L(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new L(S.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{M(gt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);M(gt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=Ts(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=rl(),u=nl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(gt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const T=a.createWebChannel(m,h);let v=!1,R=!1;const P=new Of({Io:D=>{R?M(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(v||(M(gt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),v=!0),M(gt,`RPC '${t}' stream ${s} sending:`,D),T.send(D))},To:()=>T.close()}),N=(D,V,F)=>{D.listen(V,B=>{try{F(B)}catch(j){setTimeout(()=>{throw j},0)}})};return N(T,fn.EventType.OPEN,()=>{R||(M(gt,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),N(T,fn.EventType.CLOSE,()=>{R||(R=!0,M(gt,`RPC '${t}' stream ${s} transport closed`),P.So())}),N(T,fn.EventType.ERROR,D=>{R||(R=!0,xe(gt,`RPC '${t}' stream ${s} transport errored:`,D),P.So(new L(S.UNAVAILABLE,"The operation could not be completed")))}),N(T,fn.EventType.MESSAGE,D=>{var V;if(!R){const F=D.data[0];Y(!!F);const B=F,j=B.error||((V=B[0])===null||V===void 0?void 0:V.error);if(j){M(gt,`RPC '${t}' stream ${s} received error:`,j);const J=j.status;let x=function(g){const y=st[g];if(y!==void 0)return Dl(y)}(J),_=j.message;x===void 0&&(x=S.INTERNAL,_="Unknown error status: "+J+" with message "+j.message),R=!0,P.So(new L(x,_)),T.close()}else M(gt,`RPC '${t}' stream ${s} received:`,F),P.bo(F)}}),N(u,el.STAT_EVENT,D=>{D.stat===Bs.PROXY?M(gt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Bs.NOPROXY&&M(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Is(){return typeof document<"u"?document:null}/**
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
 */function xr(n){return new Gd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e,r,s,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ul(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new L(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uf extends $l{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Xd(this.serializer,t),r=function(o){if(!("targetChange"in o))return $.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Lt(a.readTime):$.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Ks(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=$s(h)?{documents:tf(o,h)}:{query:ef(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Vl(o,a.resumeToken);const d=js(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){u.readTime=Tr(o,a.snapshotVersion.toTimestamp());const d=js(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=rf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Ks(this.serializer),e.removeTarget=t,this.a_(e)}}class $f extends $l{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Zd(t.writeResults,t.commitTime),r=Lt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Ks(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Jd(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,zs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(S.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,zs(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qt(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Te(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=q(h);d.L_.add(4),await Ln(d),d.q_.set("Unknown"),d.L_.delete(4),await Lr(d)}(this))})}),this.q_=new jf(r,s)}}async function Lr(n){if(Te(n))for(const t of n.B_)await t(!0)}async function Ln(n){for(const t of n.B_)await t(!1)}function ql(n,t){const e=q(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ti(e)?vi(e):Ke(e).r_()&&Ei(e,t))}function _i(n,t){const e=q(n),r=Ke(e);e.N_.delete(t),r.r_()&&jl(e,t),e.N_.size===0&&(r.r_()?r.o_():Te(e)&&e.q_.set("Unknown"))}function Ei(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ke(n).A_(t)}function jl(n,t){n.Q_.xe(t),Ke(n).R_(t)}function vi(n){n.Q_=new zd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ke(n).start(),n.q_.v_()}function Ti(n){return Te(n)&&!Ke(n).n_()&&n.N_.size>0}function Te(n){return q(n).L_.size===0}function zl(n){n.Q_=void 0}async function Hf(n){n.q_.set("Online")}async function Kf(n){n.N_.forEach((t,e)=>{Ei(n,t)})}async function Wf(n,t){zl(n),Ti(n)?(n.q_.M_(t),vi(n)):n.q_.set("Unknown")}async function Gf(n,t,e){if(n.q_.set("Online"),t instanceof Cl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ir(n,r)}else if(t instanceof hr?n.Q_.Ke(t):t instanceof Pl?n.Q_.He(t):n.Q_.We(t),!e.isEqual($.min()))try{const r=await Fl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),jl(o,h);const T=new Yt(m.target,h,d,m.sequenceNumber);Ei(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Ir(n,r)}}async function Ir(n,t,e){if(!kn(t))throw t;n.L_.add(1),await Ln(n),n.q_.set("Offline"),e||(e=()=>Fl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Lr(n)})}function Hl(n,t){return t().catch(e=>Ir(n,e,t))}async function Mr(n){const t=q(n),e=re(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Qf(t);)try{const s=await kf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,Yf(t,s)}catch(s){await Ir(t,s)}Kl(t)&&Wl(t)}function Qf(n){return Te(n)&&n.O_.length<10}function Yf(n,t){n.O_.push(t);const e=re(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Kl(n){return Te(n)&&!re(n).n_()&&n.O_.length>0}function Wl(n){re(n).start()}async function Xf(n){re(n).p_()}async function Jf(n){const t=re(n);for(const e of n.O_)t.m_(e.mutations)}async function Zf(n,t,e){const r=n.O_.shift(),s=di.from(r,t,e);await Hl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Mr(n)}async function tm(n,t){t&&re(n).V_&&await async function(r,s){if(function(a){return $d(a)&&a!==S.ABORTED}(s.code)){const o=r.O_.shift();re(r).s_(),await Hl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Mr(r)}}(n,t),Kl(n)&&Wl(n)}async function ba(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Te(e);e.L_.add(3),await Ln(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Lr(e)}async function em(n,t){const e=q(n);t?(e.L_.delete(2),await Lr(e)):t||(e.L_.add(2),await Ln(e),e.q_.set("Unknown"))}function Ke(n){return n.K_||(n.K_=function(e,r,s){const o=q(e);return o.w_(),new Uf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Hf.bind(null,n),Ro:Kf.bind(null,n),mo:Wf.bind(null,n),d_:Gf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ti(n)?vi(n):n.q_.set("Unknown")):(await n.K_.stop(),zl(n))})),n.K_}function re(n){return n.U_||(n.U_=function(e,r,s){const o=q(e);return o.w_(),new $f(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Xf.bind(null,n),mo:tm.bind(null,n),f_:Jf.bind(null,n),g_:Zf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Mr(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Ii(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wi(n,t){if(qt("AsyncQueue",`${t}: ${n}`),kn(n))return new L(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=mn(),this.sortedSet=new et(this.comparator)}static emptySet(t){return new Ne(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ne;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.W_=new et(O.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):U():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Fe{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Fe(t,e,Ne.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class rm{constructor(){this.queries=Sa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=q(e),o=s.queries;s.queries=Sa(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new L(S.ABORTED,"Firestore shutting down"))}}function Sa(){return new He(n=>gl(n),Pr)}async function Gl(n,t){const e=q(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new nm,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=wi(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ai(e)}async function Ql(n,t){const e=q(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function sm(n,t){const e=q(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(s)&&(r=!0);a.z_=s}}r&&Ai(e)}function im(n,t,e){const r=q(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Ai(n){n.Y_.forEach(t=>{t.next()})}var Gs,Da;(Da=Gs||(Gs={})).ea="default",Da.Cache="cache";class Yl{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Gs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this.key=t}}class Jl{constructor(t){this.key=t}}class om{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=z(),this.mutatedKeys=z(),this.Aa=yl(t),this.Ra=new Ne(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Ra,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const v=s.get(m),R=Cr(this.query,T)?T:null,P=!!v&&this.mutatedKeys.has(v.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;v&&R?v.data.isEqual(R.data)?P!==N&&(r.track({type:3,doc:R}),D=!0):this.ga(v,R)||(r.track({type:2,doc:R}),D=!0,(h&&this.Aa(R,h)>0||d&&this.Aa(R,d)<0)&&(u=!0)):!v&&R?(r.track({type:0,doc:R}),D=!0):v&&!R&&(r.track({type:1,doc:v}),D=!0,(h||d)&&(u=!0)),D&&(R?(a=a.add(R),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,T)=>function(R,P){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return N(R)-N(P)}(m.type,T.type)||this.Aa(m.doc,T.doc)),this.pa(r),s=s!=null&&s;const u=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Fe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ra,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Jl(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Xl(r))}),e}ba(t){this.Ta=t.Ts,this.da=z();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Fe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class am{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class lm{constructor(t){this.key=t,this.va=!1}}class um{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new He(u=>gl(u),Pr),this.Ma=new Map,this.xa=new Set,this.Oa=new et(O.comparator),this.Na=new Map,this.La=new pi,this.Ba={},this.ka=new Map,this.qa=Oe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function cm(n,t,e=!0){const r=su(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Zl(r,t,e,!0),s}async function hm(n,t){const e=su(n);await Zl(e,t,!0,!1)}async function Zl(n,t,e,r){const s=await Nf(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await dm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ql(n.remoteStore,s),u}async function dm(n,t,e,r,s){n.Ka=(T,v,R)=>async function(N,D,V,F){let B=D.view.ma(V);B.ns&&(B=await Ia(N.localStore,D.query,!1).then(({documents:_})=>D.view.ma(_,B)));const j=F&&F.targetChanges.get(D.targetId),J=F&&F.targetMismatches.get(D.targetId)!=null,x=D.view.applyChanges(B,N.isPrimaryClient,j,J);return Ca(N,D.targetId,x.wa),x.snapshot}(n,T,v,R);const o=await Ia(n.localStore,t,!0),a=new om(t,o.Ts),u=a.ma(o.documents),h=xn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Ca(n,e,d.wa);const m=new am(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function fm(n,t,e){const r=q(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Pr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ws(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&_i(r.remoteStore,s.targetId),Qs(r,s.targetId)}).catch(Vn)):(Qs(r,s.targetId),await Ws(r.localStore,s.targetId,!0))}async function mm(n,t){const e=q(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),_i(e.remoteStore,r.targetId))}async function pm(n,t,e){const r=Im(n);try{const s=await function(a,u){const h=q(a),d=Q.now(),m=u.reduce((R,P)=>R.add(P.key),z());let T,v;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=jt(),N=z();return h.cs.getEntries(R,m).next(D=>{P=D,P.forEach((V,F)=>{F.isValidDocument()||(N=N.add(V))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,P)).next(D=>{T=D;const V=[];for(const F of u){const B=Md(F,T.get(F.key).overlayedDocument);B!=null&&V.push(new oe(F.key,B,ll(B.value.mapValue),Dt.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,V,u)}).next(D=>{v=D;const V=D.applyToLocalDocumentSet(T,N);return h.documentOverlayCache.saveOverlays(R,D.batchId,V)})}).then(()=>({batchId:v.batchId,changes:El(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new et(G)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await Mn(r,s.changes),await Mr(r.remoteStore)}catch(s){const o=wi(s,"Failed to persist write");e.reject(o)}}async function tu(n,t){const e=q(n);try{const r=await Cf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Y(a.va):s.removedDocuments.size>0&&(Y(a.va),a.va=!1))}),await Mn(e,r,t)}catch(r){await Vn(r)}}function Pa(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=q(a);h.onlineState=u;let d=!1;h.queries.forEach((m,T)=>{for(const v of T.j_)v.Z_(u)&&(d=!0)}),d&&Ai(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function gm(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new et(O.comparator);a=a.insert(o,Et.newNoDocument(o,$.min()));const u=z().add(o),h=new Nr($.min(),new Map,new et(G),a,u);await tu(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),bi(r)}else await Ws(r.localStore,t,!1).then(()=>Qs(r,t,e)).catch(Vn)}async function ym(n,t){const e=q(n),r=t.batch.batchId;try{const s=await Pf(e.localStore,t);nu(e,r,null),eu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Mn(e,s)}catch(s){await Vn(s)}}async function _m(n,t,e){const r=q(n);try{const s=await function(a,u){const h=q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(Y(T!==null),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);nu(r,t,e),eu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Mn(r,s)}catch(s){await Vn(s)}}function eu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function nu(n,t,e){const r=q(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Qs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||ru(n,r)})}function ru(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(_i(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),bi(n))}function Ca(n,t,e){for(const r of e)r instanceof Xl?(n.La.addReference(r.key,t),Em(n,r)):r instanceof Jl?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||ru(n,r.key)):U()}function Em(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),bi(n))}function bi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new O(tt.fromString(t)),r=n.qa.next();n.Na.set(r,new lm(e)),n.Oa=n.Oa.insert(e,r),ql(n.remoteStore,new Yt(xt(ui(e.path)),r,"TargetPurposeLimboResolution",ri.oe))}}async function Mn(n,t,e){const r=q(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=yi.Wi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(d,v=>C.forEach(v.$i,R=>m.persistence.referenceDelegate.addReference(T,v.targetId,R)).next(()=>C.forEach(v.Ui,R=>m.persistence.referenceDelegate.removeReference(T,v.targetId,R)))))}catch(T){if(!kn(T))throw T;M("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const v=T.targetId;if(!T.fromCache){const R=m.os.get(v),P=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(P);m.os=m.os.insert(v,N)}}}(r.localStore,o))}async function vm(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await Ol(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new L(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Mn(e,r.hs)}}function Tm(n,t){const e=q(n),r=e.Na.get(t);if(r&&r.va)return z().add(r.key);{let s=z();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function su(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=tu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gm.bind(null,t),t.Ca.d_=sm.bind(null,t.eventManager),t.Ca.$a=im.bind(null,t.eventManager),t}function Im(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ym.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_m.bind(null,t),t}class wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Df(this.persistence,new Rf,t.initialUser,this.serializer)}Ga(t){return new wf(gi.Zr,this.serializer)}Wa(t){return new Lf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wr.provider={build:()=>new wr};class Ys{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vm.bind(null,this.syncEngine),await em(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rm}()}createDatastore(t){const e=xr(t.databaseInfo.databaseId),r=function(o){return new Ff(o)}(t.databaseInfo);return function(o,a,u,h){return new qf(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new zf(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Pa(this.syncEngine,e,0),function(){return Aa.D()?new Aa:new Mf}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const T=new um(s,o,a,u,h,d);return m&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=q(s);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Ln(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ys.provider={build:()=>new Ys};/**
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
 */class iu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=il.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=wi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ws(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ol(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Va(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Am(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ba(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ba(t.remoteStore,s)),n._onlineComponents=t}async function Am(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await ws(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;xe("Error using user provided cache. Falling back to memory cache: "+e),await ws(n,new wr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await ws(n,new wr);return n._offlineComponents}async function ou(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Va(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Va(n,new Ys))),n._onlineComponents}function bm(n){return ou(n).then(t=>t.syncEngine)}async function au(n){const t=await ou(n),e=t.eventManager;return e.onListen=cm.bind(null,t.syncEngine),e.onUnlisten=fm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=hm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mm.bind(null,t.syncEngine),e}function Rm(n,t,e={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new iu({next:v=>{m.Za(),a.enqueueAndForget(()=>Ql(o,T));const R=v.docs.has(u);!R&&v.fromCache?d.reject(new L(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&h&&h.source==="server"?d.reject(new L(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),T=new Yl(ui(u.path),m,{includeMetadataChanges:!0,_a:!0});return Gl(o,T)}(await au(n),n.asyncQueue,t,e,r)),r.promise}function Sm(n,t,e={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new iu({next:v=>{m.Za(),a.enqueueAndForget(()=>Ql(o,T)),v.fromCache&&h.source==="server"?d.reject(new L(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),T=new Yl(u,m,{includeMetadataChanges:!0,_a:!0});return Gl(o,T)}(await au(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function lu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ka=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n,t,e){if(!e)throw new L(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Dm(n,t,e,r){if(t===!0&&r===!0)throw new L(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Na(n){if(!O.isDocumentKey(n))throw new L(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xa(n){if(O.isDocumentKey(n))throw new L(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Br(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U()}function Vt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Br(n);throw new L(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class La{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Dm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Or{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new La({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new La(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hh;switch(r.type){case"firstParty":return new Qh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ka.get(e);r&&(M("ComponentProvider","Removing Datastore"),ka.delete(e),r.terminate())}(this),Promise.resolve()}}function Pm(n,t,e,r={}){var s;const o=(n=Vt(n,Or))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=_t.MOCK_USER;else{u=Ac(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(d)}n._authCredentials=new Kh(new sl(u,h))}}/**
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
 */class ae{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ae(this.firestore,t,this._query)}}class It{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Zt extends ae{constructor(t,e,r){super(t,e,ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new O(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function zt(n,t,...e){if(n=Ut(n),uu("collection","path",t),n instanceof Or){const r=tt.fromString(t,...e);return xa(r),new Zt(n,null,r)}{if(!(n instanceof It||n instanceof Zt))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return xa(r),new Zt(n.firestore,null,r)}}function We(n,t,...e){if(n=Ut(n),arguments.length===1&&(t=il.newId()),uu("doc","path",t),n instanceof Or){const r=tt.fromString(t,...e);return Na(r),new It(n,null,new O(r))}{if(!(n instanceof It||n instanceof Zt))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Na(r),new It(n.firestore,n instanceof Zt?n.converter:null,new O(r))}}/**
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
 */class Ma{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ul(this,"async_queue_retry"),this.Vu=()=>{const r=Is();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!kn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw qt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Ii.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ie extends Or{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ma,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ma(t),this._firestoreClient=void 0,await t}}}function Cm(n,t){const e=typeof n=="object"?n:Nh(),r=typeof n=="string"?n:"(default)",s=Ph(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ic("firestore");o&&Pm(s,...o)}return s}function Ri(n){if(n._terminated)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vm(n),n._firestoreClient}function Vm(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,m){return new ld(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,lu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new wm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(ht.fromBase64String(t))}catch(e){throw new L(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Fr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Si{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
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
 */class Pi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=/^__.*__$/;class Nm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new oe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Nn(t,this.data,e,this.fieldTransforms)}}class cu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new oe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ci{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ar(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(hu(this.Cu)&&km.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class xm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xr(t)}Qu(t,e,r,s=!1){return new Ci({Cu:t,methodName:e,qu:r,path:ut.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ur(n){const t=n._freezeSettings(),e=xr(n._databaseId);return new xm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function du(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);Vi("Data must be an object, but it was:",a,r);const u=fu(r,a);let h,d;if(o.merge)h=new Rt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const v=Xs(t,T,e);if(!a.contains(v))throw new L(S.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);pu(m,v)||m.push(v)}h=new Rt(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new Nm(new wt(u),h,d)}class $r extends Si{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $r}}function Lm(n,t,e,r){const s=n.Qu(1,t,e);Vi("Data must be an object, but it was:",s,r);const o=[],a=wt.empty();ve(r,(h,d)=>{const m=ki(t,h,e);d=Ut(d);const T=s.Nu(m);if(d instanceof $r)o.push(m);else{const v=Bn(d,T);v!=null&&(o.push(m),a.set(m,v))}});const u=new Rt(o);return new cu(a,u,s.fieldTransforms)}function Mm(n,t,e,r,s,o){const a=n.Qu(1,t,e),u=[Xs(t,r,e)],h=[s];if(o.length%2!=0)throw new L(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<o.length;v+=2)u.push(Xs(t,o[v])),h.push(o[v+1]);const d=[],m=wt.empty();for(let v=u.length-1;v>=0;--v)if(!pu(d,u[v])){const R=u[v];let P=h[v];P=Ut(P);const N=a.Nu(R);if(P instanceof $r)d.push(R);else{const D=Bn(P,N);D!=null&&(d.push(R),m.set(R,D))}}const T=new Rt(d);return new cu(m,T,a.fieldTransforms)}function Bm(n,t,e,r=!1){return Bn(e,n.Qu(r?4:3,t))}function Bn(n,t){if(mu(n=Ut(n)))return Vi("Unsupported field value:",t,n),fu(n,t);if(n instanceof Si)return function(r,s){if(!hu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Bn(u,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Cd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:Tr(s.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(s.serializer,o)}}if(r instanceof Di)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ue)return{bytesValue:Vl(s.serializer,r._byteString)};if(r instanceof It){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:mi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pi)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return ci(u.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Br(r)}`)}(n,t)}function fu(n,t){const e={};return ol(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(n,(r,s)=>{const o=Bn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function mu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Di||n instanceof Ue||n instanceof It||n instanceof Si||n instanceof Pi)}function Vi(n,t,e){if(!mu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Br(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Xs(n,t,e){if((t=Ut(t))instanceof Fr)return t._internalPath;if(typeof t=="string")return ki(n,t);throw Ar("Field path arguments must be of type string or ",n,!1,void 0,e)}const Om=new RegExp("[~\\*/\\[\\]]");function ki(n,t,e){if(t.search(Om)>=0)throw Ar(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Fr(...t.split("."))._internalPath}catch{throw Ar(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ar(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new L(S.INVALID_ARGUMENT,u+n+h)}function pu(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class gu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Fm extends gu{data(){return super.data()}}function qr(n,t){return typeof t=="string"?ki(n,t):t instanceof Fr?t._internalPath:t._delegate._internalPath}/**
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
 */function Um(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ni{}class xi extends Ni{}function se(n,t,...e){let r=[];t instanceof Ni&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Li).length,u=o.filter(h=>h instanceof jr).length;if(a>1||a>0&&u>0)throw new L(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class jr extends xi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new jr(t,e,r)}_apply(t){const e=this._parse(t);return _u(t._query,e),new ae(t.firestore,t.converter,qs(t._query,e))}_parse(t){const e=Ur(t.firestore);return function(o,a,u,h,d,m,T){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Oa(T,m);const R=[];for(const P of T)R.push(Ba(h,o,P));v={arrayValue:{values:R}}}else v=Ba(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Oa(T,m),v=Bm(u,a,T,m==="in"||m==="not-in");return it.create(d,m,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ht(n,t,e){const r=t,s=qr("where",n);return jr._create(s,r,e)}class Li extends Ni{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Li(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)_u(a,h),a=qs(a,h)}(t._query,e),new ae(t.firestore,t.converter,qs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mi extends xi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Mi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new L(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Dn(o,a)}(t._query,this._field,this._direction);return new ae(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new ze(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function ie(n,t="asc"){const e=t,r=qr("orderBy",n);return Mi._create(r,e)}class Bi extends xi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Bi(t,e,r)}_apply(t){return new ae(t.firestore,t.converter,_r(t._query,this._limit,this._limitType))}}function yu(n){return Bi._create("limit",n,"F")}function Ba(n,t,e){if(typeof(e=Ut(e))=="string"){if(e==="")throw new L(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pl(t)&&e.indexOf("/")!==-1)throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(tt.fromString(e));if(!O.isDocumentKey(r))throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ia(n,new O(r))}if(e instanceof It)return ia(n,e._key);throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Br(e)}.`)}function Oa(n,t){if(!Array.isArray(n)||n.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function _u(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class $m{convertValue(t,e="none"){switch(Ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw U()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ve(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>rt(a.doubleValue));return new Pi(o)}convertGeoPoint(t){return new Di(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ii(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(bn(t));default:return null}}convertTimestamp(t){const e=ne(t);return new Q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);Y(Bl(r));const s=new Rn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Eu(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class gn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vu extends gu{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(qr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class dr extends vu{data(t={}){return super.data(t)}}class qm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new gn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new dr(this._firestore,this._userDataWriter,r.key,r,new gn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new dr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new dr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:jm(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function jm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function Tu(n){n=Vt(n,It);const t=Vt(n.firestore,Ie);return Rm(Ri(t),n._key).then(e=>Gm(t,n,e))}class Iu extends $m{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function we(n){n=Vt(n,ae);const t=Vt(n.firestore,Ie),e=Ri(t),r=new Iu(t);return Um(n._query),Sm(e,n._query).then(s=>new qm(t,r,n,s))}function zm(n,t,e){n=Vt(n,It);const r=Vt(n.firestore,Ie),s=Eu(n.converter,t);return zr(r,[du(Ur(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Dt.none())])}function Hm(n,t,e,...r){n=Vt(n,It);const s=Vt(n.firestore,Ie),o=Ur(s);let a;return a=typeof(t=Ut(t))=="string"||t instanceof Fr?Mm(o,"updateDoc",n._key,t,e,r):Lm(o,"updateDoc",n._key,t),zr(s,[a.toMutation(n._key,Dt.exists(!0))])}function Km(n){return zr(Vt(n.firestore,Ie),[new hi(n._key,Dt.none())])}function Wm(n,t){const e=Vt(n.firestore,Ie),r=We(n),s=Eu(n.converter,t);return zr(e,[du(Ur(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function zr(n,t){return function(r,s){const o=new Ft;return r.asyncQueue.enqueueAndForget(async()=>pm(await bm(r),s,o)),o.promise}(Ri(n),t)}function Gm(n,t,e){const r=e.docs.get(t._key),s=new Iu(n);return new vu(n,s,t._key,r,new gn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){je=s})(kh),pr(new In("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Ie(new Wh(r.getProvider("auth-internal")),new Xh(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ke(ta,"4.7.3",t),ke(ta,"4.7.3","esm2017")})();const Qm="55555",Js="baby-tracker-auth",Ym=24*60*60*1e3,Xm={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},Jm=Qa(Xm),At=Cm(Jm);function Zm(){const n=localStorage.getItem(Js);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<Ym?!0:(localStorage.removeItem(Js),!1)}catch{return!1}}function tp(){const n={timestamp:Date.now()};localStorage.setItem(Js,JSON.stringify(n))}let kt=$e(new Date),br=null,As=null,bs=null,Rs=null,Ss=null,Ds=null,Ps=null;function $e(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return t.setDate(r),t.setHours(0,0,0,0),t}function ep(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function Tn(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function yt(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function np(n){const t=String(n.getMonth()+1).padStart(2,"0"),e=String(n.getDate()).padStart(2,"0"),r=n.getFullYear(),s=n.getHours(),o=String(n.getMinutes()).padStart(2,"0"),a=s>=12?"PM":"AM",u=s%12||12;return`${t}/${e}/${r} ${u}:${o} ${a}`}function Zs(n){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=n.getFullYear();return`${t[n.getDay()]}, ${e}/${r}/${s}`}function Rr(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}async function Oi(){const n=document.getElementById("vitamin-d-checkbox"),t=document.getElementById("vitamin-d-status"),e=document.getElementById("vitamin-d-label-text");if(!n||!t||!e)return;const s=Rr(new Date);try{const o=await Tu(We(At,"vitaminD",s));if(o.exists()){const a=o.data();n.checked=a.given===!0}else n.checked=!1;e.textContent=n.checked?"Vitamin D drop given":"Record Vitamin D drop",t.textContent="",t.style.display="none"}catch(o){console.error("Error loading vitamin D status:",o),t.className="error",t.textContent="Failed to load vitamin D status",t.style.display="block"}}function wu(){Ds&&clearTimeout(Ds);const n=new Date,t=new Date(n);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const e=t.getTime()-n.getTime();Ds=window.setTimeout(()=>{Oi(),wu()},e)}async function rp(n){const t=n.target,e=document.getElementById("vitamin-d-status"),r=document.getElementById("vitamin-d-label-text");if(!e||!r)return;const s=new Date,o=Rr(s);try{await zm(We(At,"vitaminD",o),{given:t.checked,date:Q.fromDate(s)}),r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop",e.style.display="none"}catch(a){console.error("Error saving vitamin D status:",a),e.className="error",e.textContent="Failed to save vitamin D status",e.style.display="block",t.checked=!t.checked,r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop"}}function Fa(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===Qm?(n.blur(),tp(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Au()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function Au(){ap(),Fi(),sp(),Ip(),ip(),op(),Oi(),wu(),window.scrollTo(0,0)}function sp(){const n=new Date,t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter");t&&(t.value=yt(n)),e&&(e.value=yt(n))}function ip(){[document.getElementById("bottle-amount"),document.getElementById("pump-amount"),document.getElementById("edit-bottle-amount"),document.getElementById("edit-pump-amount")].forEach(t=>{t&&(t.addEventListener("keypress",e=>{const r=e.key,s=t.value;e.key==="Backspace"||e.key==="Delete"||e.key==="Tab"||e.key==="Escape"||e.key==="Enter"||e.ctrlKey||e.metaKey||r>="0"&&r<="9"||r==="."&&s.indexOf(".")===-1||e.preventDefault()}),t.addEventListener("paste",e=>{var u;e.preventDefault();const s=(((u=e.clipboardData)==null?void 0:u.getData("text"))||"").replace(/[^0-9.]/g,""),o=s.split("."),a=o.length>2?o[0]+"."+o.slice(1).join(""):s;document.execCommand("insertText",!1,a)}))})}function op(){const n=document.getElementById("bottle-unit"),t=document.getElementById("bottle-amount"),e=document.getElementById("pump-unit"),r=document.getElementById("pump-amount"),s=document.getElementById("edit-bottle-unit"),o=document.getElementById("edit-bottle-amount"),a=document.getElementById("edit-pump-unit"),u=document.getElementById("edit-pump-amount");n&&t&&n.addEventListener("change",()=>{ar(t,n.value)}),e&&r&&e.addEventListener("change",()=>{ar(r,e.value)}),s&&o&&s.addEventListener("change",()=>{ar(o,s.value)}),a&&u&&a.addEventListener("change",()=>{ar(u,a.value)})}function ar(n,t){const e=parseFloat(n.value);if(isNaN(e)||e<=0)return;const r=n.dataset.lastUnit||"oz";if(r===t)return;let s;if(t==="ml"&&r==="oz")s=e*29.5735;else if(t==="oz"&&r==="ml")s=e*.033814;else return;n.value=s.toFixed(2),n.dataset.lastUnit=t}function Ua(n){if(!n.value)return!0;const t=new Date(n.value),e=new Date;return t>e?(alert("Cannot select future times. Please select a time in the past."),n.value=Tn(e),!1):!0}function De(n){const t=document.getElementById(n);t&&(t.addEventListener("blur",()=>{Ua(t)}),t.addEventListener("change",()=>{Ua(t)}))}function ap(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",lp);const e=document.getElementById("bottle-type");e&&e.addEventListener("change",up),hp();const r=document.getElementById("edit-bottle-type");r&&r.addEventListener("change",cp),dp(),t.addEventListener("click",fp);const s=document.getElementById("vitamin-d-checkbox");s&&s.addEventListener("change",rp);const o=document.getElementById("refresh-button");o&&o.addEventListener("click",()=>{window.location.reload()});const a=document.getElementById("entry-tab"),u=document.getElementById("timeline-tab"),h=document.getElementById("weekly-tab");a.addEventListener("click",()=>Cs("entry")),u.addEventListener("click",()=>Cs("timeline")),h.addEventListener("click",()=>Cs("weekly"));const d=document.getElementById("prev-week"),m=document.getElementById("next-week"),T=document.getElementById("current-week");d.addEventListener("click",()=>$a(-1)),m.addEventListener("click",()=>$a(1)),T&&T.addEventListener("click",yp);const v=document.getElementById("save-edit"),R=document.getElementById("cancel-edit");v.addEventListener("click",vp),R.addEventListener("click",bu);const P=document.getElementById("start-date-filter"),N=document.getElementById("end-date-filter"),D=document.getElementById("type-filter"),V=document.getElementById("today-button"),F=document.getElementById("yesterday-button"),B=document.getElementById("two-days-ago-button"),j=document.getElementById("three-days-ago-button"),J=document.getElementById("all-time-button");P.addEventListener("change",()=>ge()),N.addEventListener("change",()=>ge()),D.addEventListener("change",()=>ge()),V.addEventListener("click",()=>dn("today")),F.addEventListener("click",()=>dn("yesterday")),B.addEventListener("click",()=>dn("two-days-ago")),j.addEventListener("click",()=>dn("three-days-ago")),J.addEventListener("click",()=>dn("all-time")),De("bottle-time"),De("diaper-time"),De("pump-start-time"),De("edit-bottle-time"),De("edit-diaper-time"),De("edit-pump-start-time");const x=document.getElementById("graph-start-date"),_=document.getElementById("graph-end-date");if(x&&_){const g=new Date(2025,10,5);x.value=yt(g),_.value=yt(new Date)}const p=document.getElementById("update-graph-btn");p&&p.addEventListener("click",gp)}function Fi(){const t=Tn(new Date),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("pump-start-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t)}function lp(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("pump-fields"),a=document.getElementById("submit-entry"),u=document.getElementById("bottle-type-container");if(r.style.display="none",s.style.display="none",o.style.display="none",u.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"){r.style.display="block",a.style.display="block";const h=document.getElementById("bottle-unit"),d=document.getElementById("bottle-amount");d.dataset.lastUnit=h.value,e==="bottle-formula"&&(u.style.display="block")}else if(e==="diaper")s.style.display="block",a.style.display="block";else if(e==="pump"){o.style.display="block",a.style.display="block";const h=document.getElementById("pump-unit"),d=document.getElementById("pump-amount");d.dataset.lastUnit=h.value}else a.style.display="none";Fi()}function up(n){const e=n.target.value,r=document.getElementById("bottle-notes"),s=document.getElementById("bottle-type-indicator"),o=document.getElementById("bottle-type-text");if(!r)return;const a=r.value,u=a.split(`
`),h=u.length>0&&(u[0]==="Bobbie"||u[0]==="Enfamil");e?(h?(u[0]=e,r.value=u.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function cp(n){const e=n.target.value,r=document.getElementById("edit-bottle-notes"),s=document.getElementById("edit-bottle-type-indicator"),o=document.getElementById("edit-bottle-type-text");if(!r)return;const a=r.value,u=a.split(`
`),h=u.length>0&&(u[0]==="Bobbie"||u[0]==="Enfamil");e?(h?(u[0]=e,r.value=u.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function hp(){const n=document.getElementById("bottle-notes"),t=document.getElementById("bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}function dp(){const n=document.getElementById("edit-bottle-notes"),t=document.getElementById("edit-bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}async function fp(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),u=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");if(n==="bottle-formula"&&!document.getElementById("bottle-type").value)throw new Error("Formula type is required");e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:d,amount:a,unit:u,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,u=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=new Date(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:u}}else if(n==="pump"){const s=document.getElementById("pump-start-time"),o=s.value,a=parseFloat(document.getElementById("pump-amount").value),u=document.getElementById("pump-unit").value,h=document.getElementById("pump-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");e={type:"Pump",startTime:d,amount:a,unit:u,notes:h}}e&&(await Wm(zt(At,"entries"),{...e,startTime:Q.fromDate(e.startTime),endTime:e.endTime?Q.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",mp(),e.type==="Feed"?await Ru():e.type==="Diaper"?await Su():e.type==="Pump"&&await Du(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function mp(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-type").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("pump-amount").value="",document.getElementById("pump-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("bottle-type-container").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("pump-fields").style.display="none",document.getElementById("submit-entry").style.display="none",Fi()}function Cs(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block",Oi()):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",Sr(),ge()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",Sr()),window.scrollTo(0,0)}function dn(n){const t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter"),r=new Date;if(r.setHours(0,0,0,0),n==="all-time"){const s=new Date(2025,10,5);t.value=yt(s),e.value=yt(r)}else if(n==="today")t.value=yt(r),e.value=yt(r);else if(n==="yesterday"){const s=new Date(r);s.setDate(s.getDate()-1),t.value=yt(s),e.value=yt(s)}else if(n==="two-days-ago"){const s=new Date(r);s.setDate(s.getDate()-2),t.value=yt(s),e.value=yt(s)}else if(n==="three-days-ago"){const s=new Date(r);s.setDate(s.getDate()-3),t.value=yt(s),e.value=yt(s)}ge()}async function ge(){const n=document.getElementById("timeline-list"),t=document.getElementById("timeline-loading"),e=document.getElementById("start-date-filter").value,r=document.getElementById("end-date-filter").value,s=document.getElementById("type-filter").value;t.style.display="block",n.innerHTML="";const o=document.querySelector(".filter-summary");o&&o.remove();try{let a=se(zt(At,"entries"),ie("startTime","desc"));if(e&&r){const[d,m,T]=e.split("-").map(Number),v=new Date(d,m-1,T,0,0,0,0),[R,P,N]=r.split("-").map(Number),D=new Date(R,P-1,N,23,59,59,999);a=se(zt(At,"entries"),Ht("startTime",">=",Q.fromDate(v)),Ht("startTime","<=",Q.fromDate(D)),ie("startTime","desc"))}const u=await we(a),h={bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0}};if(u.empty)n.innerHTML="<p>No entries found.</p>";else{let d="",m=!1;if(u.forEach(T=>{const v=T.data(),R=T.id;if(s!=="all"){let p="";if(v.type==="Feed"&&v.subType==="Breast Milk"?p="bottle-breast-milk":v.type==="Feed"&&v.subType==="Formula"?p="bottle-formula":v.type==="Diaper"?p="diaper-all":v.type==="Pump"&&(p="pump"),s==="bottle-all"){if(v.type!=="Feed")return}else if(s==="diaper-all"){if(v.type!=="Diaper")return}else if(s==="diaper-pee"){if(v.type!=="Diaper"||v.diaperType!=="Pee"&&v.diaperType!=="Mixed")return}else if(s==="diaper-poo"){if(v.type!=="Diaper"||v.diaperType!=="Poo"&&v.diaperType!=="Mixed")return}else if(p!==s)return}if(v.type==="Feed"){const p=te(v.amount,v.unit);h.bottles.total+=p,h.bottles.sessions++,v.subType==="Breast Milk"?h.bottles.breastMilk+=p:v.subType==="Formula"&&(h.bottles.formula+=p)}else if(v.type==="Diaper")h.diapers.total++,v.diaperType==="Pee"?h.diapers.pee++:v.diaperType==="Poo"?h.diapers.poo++:v.diaperType==="Mixed"&&h.diapers.mixed++;else if(v.type==="Pump"){const p=te(v.amount,v.unit);h.pumps.total+=p,h.pumps.sessions++}m=!0;const P=v.startTime.toDate(),N=Zs(P);if(N!==d){d=N;const p=document.createElement("div");p.className="timeline-date-header",p.textContent=N,n.appendChild(p)}const D=document.createElement("div");D.className="timeline-entry";let V=v.type,F="",B="";v.type==="Feed"?(V=`Bottle - ${v.subType}`,F=`<div class="timeline-entry-details">Amount: ${Nt(v.amount,v.unit)}</div>`,B="#d9ebf2"):v.type==="Breast Feed"?(V="Breast Feed",F="",B="#d9ebf2"):v.type==="Diaper"?(F=`<div class="timeline-entry-details">Type: ${v.diaperType}</div>`,B="#fce2d4"):v.type==="Pump"&&(F=`<div class="timeline-entry-details">Amount: ${Nt(v.amount,v.unit)}</div>`,B="#e2daf2"),D.style.backgroundColor=B;const j=v.notes?`<div class="timeline-entry-notes">${v.notes.replace(/\n/g,"<br>")}</div>`:"";let J="";if(v.type==="Diaper"&&(v.diaperType==="Poo"||v.diaperType==="Mixed")){const p=P.getTime(),g=[];u.forEach(I=>{const w=I.data();w.type==="Diaper"&&(w.diaperType==="Poo"||w.diaperType==="Mixed")&&g.push({time:w.startTime.toDate().getTime()})}),g.sort((I,w)=>w.time-I.time);const y=g.findIndex(I=>I.time===p);if(y<g.length-1){const I=g[y+1].time;J=`<div class="timeline-entry-details" style="color: #666; font-style: italic;">${((p-I)/(1e3*60*60)).toFixed(1)} hours since previous poo</div>`}}D.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${V}</span>
                        <span class="timeline-entry-time">${np(P)}</span>
                    </div>
                    ${F}
                    ${j}
                    ${J}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${R}">Edit</button>
                        <button class="delete-button" data-id="${R}">Delete</button>
                    </div>
                `;const x=D.querySelector(".edit-button"),_=D.querySelector(".delete-button");x.addEventListener("click",()=>Ep(R,v)),_.addEventListener("click",()=>Tp(R)),n.appendChild(D)}),!m)n.innerHTML="<p>No entries match the selected filters.</p>";else{const T=document.createElement("div");T.className="filter-summary";let v='<div class="summary-header">Summary</div><div class="summary-stats">';if((s==="all"||s==="bottle-breast-milk"||s==="bottle-formula"||s==="bottle-all")&&(v+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Bottles</div>
                            <div class="stat-line">Number of feeds: ${h.bottles.sessions}</div>
                            <div class="stat-line">Breast Milk: ${Nt(h.bottles.breastMilk,"oz")}</div>
                            <div class="stat-line">Formula: ${Nt(h.bottles.formula,"oz")}</div>
                            <div class="stat-line">Total volume: ${Nt(h.bottles.total,"oz")}</div>
                        </div>
                    `),s==="all"||s==="diaper-all"||s==="diaper-pee"||s==="diaper-poo"){const P=h.diapers.pee+h.diapers.mixed,N=h.diapers.poo+h.diapers.mixed;v+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${P}</div>
                            <div class="stat-line">Poo: ${N}</div>
                        </div>
                    `}(s==="all"||s==="pump")&&(v+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Pumps</div>
                            <div class="stat-line">Total volume: ${Nt(h.pumps.total,"oz")}</div>
                            <div class="stat-line">Number of sessions: ${h.pumps.sessions}</div>
                        </div>
                    `),v+="</div>",T.innerHTML=v;const R=document.querySelector(".filter-section");R&&R.parentNode&&R.parentNode.insertBefore(T,n)}}}catch{n.innerHTML='<p class="error">Failed to load timeline</p>'}finally{t.style.display="none"}}async function Sr(){const n=document.getElementById("weekly-stats"),t=document.getElementById("weekly-loading"),e=document.getElementById("week-range"),r=document.getElementById("prev-week"),s=document.getElementById("next-week"),o=document.getElementById("current-week"),a=new Date(2025,10,5),u=$e(a),d=$e(new Date),m=new Date(kt);m.setHours(0,0,0,0),m<u&&(kt=new Date(u)),m.getTime()<=u.getTime()?r.disabled=!0:r.disabled=!1,m.getTime()>=d.getTime()?s.disabled=!0:s.disabled=!1,o&&(m.getTime()===d.getTime()?(o.disabled=!0,o.style.backgroundColor="#999",o.style.color="#ccc",o.style.cursor="default"):(o.disabled=!1,o.style.backgroundColor="",o.style.color="",o.style.cursor="pointer"));const T=ep(kt);e.textContent=`${Zs(kt).split(",")[1].trim()} - ${Zs(T).split(",")[1].trim()}`,t.style.display="block",n.innerHTML="";try{const v=se(zt(At,"entries"),Ht("startTime",">=",Q.fromDate(kt)),Ht("startTime","<=",Q.fromDate(T)),ie("startTime","asc")),R=await we(v),P=new Date("2025-11-11");P.setHours(0,0,0,0);const N={},D=[];for(let x=0;x<7;x++){const _=new Date(kt);if(_.setDate(_.getDate()+x),_.setHours(0,0,0,0),_>=P){const p=Rr(_);D.push(p)}}if(D.length>0){const x=await Promise.all(D.map(_=>Tu(We(At,"vitaminD",_))));D.forEach((_,p)=>{var y;const g=x[p];N[_]=g.exists()&&((y=g.data())==null?void 0:y.given)===!0})}const V={};for(let x=0;x<7;x++){const _=new Date(kt);_.setDate(_.getDate()+x),_.setHours(0,0,0,0);const p=`${_.getFullYear()}-${_.getMonth()}-${_.getDate()}`,g=Rr(_);V[p]={date:new Date(_),vitaminD:_>=P?N[g]===!0:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0}}}R.forEach(x=>{const _=x.data(),p=_.startTime.toDate(),g=new Date(p);g.setHours(0,0,0,0);const y=`${g.getFullYear()}-${g.getMonth()}-${g.getDate()}`;if(V[y]){if(_.type==="Feed"){const I=te(_.amount,_.unit);V[y].bottles.total+=I,V[y].bottles.sessions++,_.subType==="Breast Milk"?V[y].bottles.breastMilk+=I:_.subType==="Formula"&&(V[y].bottles.formula+=I)}else if(_.type==="Breast Feed")V[y].bottles.sessions++;else if(_.type==="Diaper")V[y].diapers.total++,_.diaperType==="Pee"?V[y].diapers.pee++:_.diaperType==="Poo"?V[y].diapers.poo++:_.diaperType==="Mixed"&&V[y].diapers.mixed++;else if(_.type==="Pump"){const I=te(_.amount,_.unit);V[y].pumps.total+=I,V[y].pumps.sessions++}}});const F=Object.keys(V).map(x=>V[x]).sort((x,_)=>x.date.getTime()-_.date.getTime()),B=document.createElement("div");B.className="weekly-scroll-container";const j=new Date;j.setHours(0,0,0,0);let J=-1;F.forEach((x,_)=>{const p=document.createElement("div");p.className="day-stats";const g=new Date(x.date);g.setHours(0,0,0,0),j.getTime()===g.getTime()&&(p.classList.add("current-day"),J=_);const y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][x.date.getDay()],I=`${x.date.getMonth()+1}/${x.date.getDate()}`,w=x.diapers.pee+x.diapers.mixed,E=x.diapers.poo+x.diapers.mixed;let St="";if(x.vitaminD!==null){const le=x.vitaminD?"Yes":"No";St=`
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${x.vitaminD?"#4caf50":"#f44336"}; font-weight: bold;">${le}</div>
                    </div>
                `}p.innerHTML=`
                <div class="day-stats-header">${y}<br>${I}</div>
                ${St}
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${x.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${Nt(x.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line">Formula: ${Nt(x.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total volume: ${Nt(x.bottles.total,"oz")}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${w}</div>
                    <div class="stat-line">Poo: ${E}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${Nt(x.pumps.total,"oz")}</div>
                    <div class="stat-line">Number of sessions: ${x.pumps.sessions}</div>
                </div>
            `,B.appendChild(p)}),n.appendChild(B),J!==-1&&setTimeout(()=>{const x=B.children[J];if(x){const _=B.offsetWidth,p=x.offsetWidth,g=x.offsetLeft-_/2+p/2;B.scrollTo({left:Math.max(0,g),behavior:"smooth"})}},100)}catch{n.innerHTML='<p class="error">Failed to load weekly view</p>'}finally{t.style.display="none",await pp()}}async function pp(){var T,v,R,P,N;const n=document.getElementById("json-content"),t=document.getElementById("toggle-json"),e=document.getElementById("copy-json"),r=document.querySelector(".json-tabs"),s=document.getElementById("feeds-json-tab"),o=document.getElementById("diapers-json-tab"),a=document.getElementById("pumps-json-tab");if(!n||!t||!e)return;let u="feeds",h=[],d=[],m=[];try{const D=se(zt(At,"entries"),ie("startTime","desc"));(await we(D)).docs.forEach(g=>{const y=g.data();y.type==="Feed"?h.push({type:y.type,subType:y.subType,startTime:y.startTime.toDate().toISOString(),amount:y.amount,unit:y.unit,notes:y.notes||""}):y.type==="Diaper"?d.push({type:y.type,startTime:y.startTime.toDate().toISOString(),diaperType:y.diaperType,notes:y.notes||""}):y.type==="Pump"&&m.push({type:y.type,startTime:y.startTime.toDate().toISOString(),amount:y.amount,unit:y.unit,notes:y.notes||""})});const F=()=>{let g;u==="feeds"?g=h:u==="diapers"?g=d:g=m;const y=JSON.stringify(g,null,2);return n.textContent=y,y};let B=F();const j=t.cloneNode(!0),J=e.cloneNode(!0),x=s==null?void 0:s.cloneNode(!0),_=o==null?void 0:o.cloneNode(!0),p=a==null?void 0:a.cloneNode(!0);(T=t.parentNode)==null||T.replaceChild(j,t),(v=e.parentNode)==null||v.replaceChild(J,e),s&&x&&((R=s.parentNode)==null||R.replaceChild(x,s)),o&&_&&((P=o.parentNode)==null||P.replaceChild(_,o)),a&&p&&((N=a.parentNode)==null||N.replaceChild(p,a)),j.addEventListener("click",()=>{const g=n.style.display==="none";n.style.display=g?"block":"none",J.style.display=g?"block":"none",r&&(r.style.display=g?"flex":"none"),j.textContent=g?"Hide JSON Data":"Show JSON Data"}),J.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(B);const g=J.textContent;J.textContent="✓",setTimeout(()=>{J.textContent=g},2e3)}catch{alert("Failed to copy to clipboard")}}),x&&x.addEventListener("click",()=>{u="feeds",x.classList.add("active"),_.classList.remove("active"),p.classList.remove("active"),B=F()}),_&&_.addEventListener("click",()=>{u="diapers",_.classList.add("active"),x.classList.remove("active"),p.classList.remove("active"),B=F()}),p&&p.addEventListener("click",()=>{u="pumps",p.classList.add("active"),x.classList.remove("active"),_.classList.remove("active"),B=F()})}catch{n.textContent="Failed to load data"}}async function gp(){const n=document.getElementById("graph-start-date").value,t=document.getElementById("graph-end-date").value;if(!n||!t){alert("Please select both start and end dates");return}const e=[];if(document.querySelectorAll(".graph-checkbox:checked").forEach(D=>{e.push(D.dataset.series)}),e.length===0){alert("Please select at least one data series to plot");return}const r=new Date(n);r.setHours(0,0,0,0);const s=new Date(t);s.setHours(23,59,59,999);const o=se(zt(At,"entries"),Ht("startTime",">=",Q.fromDate(r)),Ht("startTime","<=",Q.fromDate(s)),ie("startTime","asc")),a=await we(o),u={},h=new Date(r);for(;h<=s;){const D=yt(h);u[D]={"bottle-breast-milk":0,"bottle-formula":0,"bottle-all":0,"diaper-pee":0,"diaper-poo":0,"diaper-mixed":0,"diaper-all":0,pump:0},h.setDate(h.getDate()+1)}a.forEach(D=>{const V=D.data(),F=V.startTime.toDate(),B=yt(F);if(u[B]){if(V.type==="Feed"&&V.subType==="Breast Milk"){const j=te(V.amount,V.unit);u[B]["bottle-breast-milk"]+=j,u[B]["bottle-all"]+=j}else if(V.type==="Feed"&&V.subType==="Formula"){const j=te(V.amount,V.unit);u[B]["bottle-formula"]+=j,u[B]["bottle-all"]+=j}else if(V.type==="Diaper")(V.diaperType==="Pee"||V.diaperType==="Mixed")&&u[B]["diaper-pee"]++,(V.diaperType==="Poo"||V.diaperType==="Mixed")&&u[B]["diaper-poo"]++,V.diaperType==="Mixed"&&u[B]["diaper-mixed"]++,u[B]["diaper-all"]++;else if(V.type==="Pump"){const j=te(V.amount,V.unit);u[B].pump+=j}}});const d=Object.keys(u).sort(),m=[],T={"bottle-breast-milk":"#4CAF50","bottle-formula":"#2196F3","bottle-all":"#9C27B0","diaper-pee":"#FFEB3B","diaper-poo":"#795548","diaper-mixed":"#FF9800","diaper-all":"#607D8B",pump:"#E91E63"},v={"bottle-breast-milk":"Bottle - Breast Milk","bottle-formula":"Bottle - Formula","bottle-all":"Bottle - All","diaper-pee":"Diaper - Pee","diaper-poo":"Diaper - Poo","diaper-mixed":"Diaper - Mixed","diaper-all":"Diaper - All",pump:"Pump"};e.forEach(D=>{m.push({label:v[D],data:d.map(V=>u[V][D]),borderColor:T[D],backgroundColor:T[D]+"33",tension:.1,fill:!1})});const P=document.getElementById("data-chart").getContext("2d");Ps&&Ps.destroy(),Ps=new window.Chart(P,{type:"line",data:{labels:d.map(D=>{const[,V,F]=D.split("-");return`${V}/${F}`}),datasets:m},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:"Baby Tracker Data"},tooltip:{enabled:!0,callbacks:{label:function(D){let V=D.dataset.label||"";V&&(V+=": ");const F=D.parsed.y;return D.dataset.label.toLowerCase().includes("diaper")?V+=Math.round(F):V+=F.toFixed(1)+" oz",V}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(D){return e.every(F=>F.startsWith("diaper-"))?Math.round(D):D%1===0?D:D.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count"}}}}});const N=document.querySelector(".chart-container");N&&N.classList.add("active")}function $a(n){const t=new Date(2025,10,5),e=$e(t),s=$e(new Date),o=new Date(kt);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const u=new Date(s);u.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>u.getTime()||(kt=o,Sr()))}function yp(){kt=$e(new Date),Sr()}function te(n,t){return t==="ml"?n*.033814:n}function _p(n,t){return t==="oz"?n*29.5735:n}function Nt(n,t){const e=te(n,t),r=_p(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function Ep(n,t){br=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields");r.style.display="none",s.style.display="none",o.style.display="none";const a=t.startTime.toDate();if(t.type==="Feed"){r.style.display="block";const u=document.getElementById("edit-bottle-unit"),h=document.getElementById("edit-bottle-amount"),d=document.getElementById("edit-bottle-type-container"),m=document.getElementById("edit-bottle-type");document.getElementById("edit-bottle-time").value=Tn(a),h.value=t.amount.toFixed(2),u.value=t.unit||"oz",h.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";const T=document.getElementById("edit-bottle-type-indicator"),v=document.getElementById("edit-bottle-type-text");if(t.subType==="Formula"){d.style.display="block";const P=(t.notes||"").split(`
`)[0];P==="Bobbie"||P==="Enfamil"?(m.value=P,T&&v&&(v.textContent=P,T.style.display="block")):(m.value="",T&&(T.style.display="none"))}else d.style.display="none",m.value="",T&&(T.style.display="none")}else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=Tn(a),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const u=document.getElementById("edit-pump-unit"),h=document.getElementById("edit-pump-amount");document.getElementById("edit-pump-start-time").value=Tn(a),h.value=t.amount.toFixed(2),u.value=t.unit||"oz",h.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}e.style.display="block"}function bu(){const n=document.getElementById("edit-modal");n.style.display="none",br=null;const t=document.getElementById("edit-status");t.style.display="none"}async function vp(){if(!br)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields");let s={};const o=new Date;if(t.style.display==="block"){const a=document.getElementById("edit-bottle-time"),u=a.value,h=parseFloat(document.getElementById("edit-bottle-amount").value),d=document.getElementById("edit-bottle-unit").value,m=document.getElementById("edit-bottle-notes").value,T=document.getElementById("edit-bottle-type-container"),v=document.getElementById("edit-bottle-type").value;if(!u)throw new Error("Start time is required");const R=new Date(a.value);if(R>o)throw new Error("Cannot set time in the future");if(isNaN(h)||h<=0)throw new Error("Amount must be greater than 0");if(T.style.display!=="none"&&!v)throw new Error("Formula type is required");s={startTime:Q.fromDate(R),amount:h,unit:d,notes:m}}else if(e.style.display==="block"){const a=document.getElementById("edit-diaper-time"),u=a.value,h=document.getElementById("edit-diaper-type").value,d=document.getElementById("edit-diaper-notes").value;if(!u)throw new Error("Start time is required");const m=new Date(a.value);if(m>o)throw new Error("Cannot set time in the future");if(!h)throw new Error("Diaper type is required");s={startTime:Q.fromDate(m),diaperType:h,notes:d}}else if(r.style.display==="block"){const a=document.getElementById("edit-pump-start-time"),u=a.value,h=parseFloat(document.getElementById("edit-pump-amount").value),d=document.getElementById("edit-pump-unit").value,m=document.getElementById("edit-pump-notes").value;if(!u)throw new Error("Start time is required");const T=new Date(a.value);if(T>o)throw new Error("Cannot set time in the future");if(isNaN(h)||h<=0)throw new Error("Amount must be greater than 0");s={startTime:Q.fromDate(T),amount:h,unit:d,notes:m}}await Hm(We(At,"entries",br),s),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(async()=>{bu(),ge(),await Ui()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function Tp(n){if(confirm("Are you sure you want to delete this entry?"))try{await Km(We(At,"entries",n)),ge(),await Ui()}catch{alert("Failed to delete entry")}}async function Ip(){await Ui(),As&&clearInterval(As),bs&&clearInterval(bs),Rs&&clearInterval(Rs),Ss&&clearInterval(Ss),As=window.setInterval(()=>Pu(),1e3),bs=window.setInterval(()=>Cu(),1e3),Rs=window.setInterval(()=>Vu(),1e3),Ss=window.setInterval(()=>ku(),1e3)}async function Ui(){await Promise.all([Ru(),Su(),Du()])}async function Ru(){try{const n=se(zt(At,"entries"),Ht("type","==","Feed"),ie("startTime","desc"),yu(1)),t=await we(n);if(t.empty)localStorage.removeItem("lastBottleTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastBottleTime",r.toISOString())}Pu()}catch(n){console.error("Error fetching last bottle time:",n)}}async function Su(){try{const n=se(zt(At,"entries"),Ht("type","==","Diaper"),ie("startTime","desc")),t=await we(n);let e,r;t.forEach(s=>{const o=s.data(),a=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&e===void 0&&(e=a),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&r===void 0&&(r=a)}),e!==void 0?localStorage.setItem("lastPeeTime",e.toISOString()):localStorage.removeItem("lastPeeTime"),r!==void 0?localStorage.setItem("lastPooTime",r.toISOString()):localStorage.removeItem("lastPooTime"),Cu(),Vu()}catch(n){console.error("Error fetching last diaper times:",n)}}async function Du(){try{const n=se(zt(At,"entries"),Ht("type","==","Pump"),ie("startTime","desc"),yu(1)),t=await we(n);if(t.empty)localStorage.removeItem("lastPumpTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastPumpTime",r.toISOString())}ku()}catch(n){console.error("Error fetching last pump time:",n)}}function Hr(n,t){if(!n)return t;const e=new Date(n),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),u=Math.floor(s%(1e3*60)/1e3);return o>0?`${o}h ${a}m ${u}s`:a>0?`${a}m ${u}s`:`${u}s`}function Pu(){const n=document.getElementById("last-bottle-value");if(!n)return;const t=localStorage.getItem("lastBottleTime");if(!t){n.innerHTML="No bottles recorded";return}const e=Hr(t,"No bottles recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),u=[];if(a>3){u.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*3*60*60*1e3),T=m.getHours(),v=String(m.getMinutes()).padStart(2,"0"),R=T>=12?"pm":"am",P=T%12||12;u.push(`${P}:${v} ${R}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*3*60*60*1e3),T=m.getHours(),v=String(m.getMinutes()).padStart(2,"0"),R=T>=12?"pm":"am",P=T%12||12;u.push(`${P}:${v} ${R}`)}const h=u.map((d,m)=>`+ ${(m+1)*3} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${h}</span>`}function Cu(){const n=document.getElementById("last-pee-value");if(!n)return;const t=localStorage.getItem("lastPeeTime");n.textContent=Hr(t,"No pee recorded")}function Vu(){const n=document.getElementById("last-poo-value");if(!n)return;const t=localStorage.getItem("lastPooTime");n.textContent=Hr(t,"No poo recorded")}function ku(){const n=document.getElementById("last-pump-value");if(!n)return;const t=localStorage.getItem("lastPumpTime");if(!t){n.innerHTML="No pumps recorded";return}const e=Hr(t,"No pumps recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),u=[];if(a>4){u.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*4*60*60*1e3),T=m.getHours(),v=String(m.getMinutes()).padStart(2,"0"),R=T>=12?"pm":"am",P=T%12||12;u.push(`${P}:${v} ${R}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*4*60*60*1e3),T=m.getHours(),v=String(m.getMinutes()).padStart(2,"0"),R=T>=12?"pm":"am",P=T%12||12;u.push(`${P}:${v} ${R}`)}const h=u.map((d,m)=>`+ ${(m+1)*4} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${h}</span>`}window.addEventListener("DOMContentLoaded",()=>{var n,t;if(Zm()){const e=document.getElementById("passcode-screen"),r=document.getElementById("app");e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Au()}else(n=document.getElementById("passcode-submit"))==null||n.addEventListener("click",Fa),(t=document.getElementById("passcode-input"))==null||t.addEventListener("keypress",e=>{e.key==="Enter"&&Fa()})});
