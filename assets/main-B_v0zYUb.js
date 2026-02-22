(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Ko={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},vc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,g=o>>2,T=(o&3)<<4|u>>4;let _=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(_=64)),r.push(e[g],e[T],e[_],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ka(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):vc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new Ec;const _=o<<2|u>>4;if(r.push(_),d!==64){const S=u<<4&240|d>>2;if(r.push(S),T!==64){const D=d<<6&192|T;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ec extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tc=function(n){const t=Ka(n);return Wa.encodeByteArray(t,!0)},yr=function(n){return Tc(n).replace(/\./g,"")},Ic=function(n){try{return Wa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ac=()=>wc().__FIREBASE_DEFAULTS__,bc=()=>{if(typeof process>"u"||typeof Ko>"u")return;const n=Ko.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ic(n[1]);return t&&JSON.parse(t)},ri=()=>{try{return Ac()||bc()||Sc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rc=n=>{var t,e;return(e=(t=ri())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Dc=n=>{const t=Rc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ga=()=>{var n;return(n=ri())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Cc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yr(JSON.stringify(e)),yr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kc(){var n;const t=(n=ri())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nc(){return!kc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xc(){try{return typeof indexedDB=="object"}catch{return!1}}function Mc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="FirebaseError";class Ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Lc,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Bc(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ke(s,u,r)}}function Bc(n,t){return n.replace(Oc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Oc=/\{\$([^}]+)}/g;function xs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Wo(o)&&Wo(a)){if(!xs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Wo(n){return n!==null&&typeof n=="object"}/**
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
 */function qt(n){return n&&n._delegate?n._delegate:n}class An{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ge="[DEFAULT]";/**
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
 */class Fc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Pc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($c(t))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ge){return this.instances.has(t)}getOptions(t=ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ge){return this.component?this.component.multipleInstances?t:ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uc(n){return n===ge?void 0:n}function $c(n){return n.instantiationMode==="EAGER"}/**
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
 */class qc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Fc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const jc={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},zc=G.INFO,Hc={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Kc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Hc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ya{constructor(t){this.name=t,this._logLevel=zc,this._logHandler=Kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const Wc=(n,t)=>t.some(e=>n instanceof e);let Go,Qo;function Gc(){return Go||(Go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qc(){return Qo||(Qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,Ms=new WeakMap,Ja=new WeakMap,_s=new WeakMap,si=new WeakMap;function Yc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(te(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Xa.set(e,n)}).catch(()=>{}),si.set(t,n),t}function Xc(n){if(Ms.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ms.set(n,t)}let Ls={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ms.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ja.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return te(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jc(n){Ls=n(Ls)}function Zc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(vs(this),t,...e);return Ja.set(r,t.sort?t.sort():[t]),te(r)}:Qc().includes(n)?function(...t){return n.apply(vs(this),t),te(Xa.get(this))}:function(...t){return te(n.apply(vs(this),t))}}function th(n){return typeof n=="function"?Zc(n):(n instanceof IDBTransaction&&Xc(n),Wc(n,Gc())?new Proxy(n,Ls):n)}function te(n){if(n instanceof IDBRequest)return Yc(n);if(_s.has(n))return _s.get(n);const t=th(n);return t!==n&&(_s.set(n,t),si.set(t,n)),t}const vs=n=>si.get(n);function eh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=te(a);return r&&a.addEventListener("upgradeneeded",h=>{r(te(a.result),h.oldVersion,h.newVersion,te(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const nh=["get","getKey","getAll","getAllKeys","count"],rh=["put","add","delete","clear"],Es=new Map;function Yo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Es.get(t))return Es.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=rh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Es.set(t,o),o}Jc(n=>({...n,get:(t,e,r)=>Yo(t,e)||n.get(t,e,r),has:(t,e)=>!!Yo(t,e)||n.has(t,e)}));/**
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
 */class sh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ih(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ih(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bs="@firebase/app",Xo="0.10.13";/**
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
 */const jt=new Ya("@firebase/app"),oh="@firebase/app-compat",ah="@firebase/analytics-compat",lh="@firebase/analytics",uh="@firebase/app-check-compat",ch="@firebase/app-check",hh="@firebase/auth",dh="@firebase/auth-compat",fh="@firebase/database",mh="@firebase/data-connect",ph="@firebase/database-compat",gh="@firebase/functions",yh="@firebase/functions-compat",_h="@firebase/installations",vh="@firebase/installations-compat",Eh="@firebase/messaging",Th="@firebase/messaging-compat",Ih="@firebase/performance",wh="@firebase/performance-compat",Ah="@firebase/remote-config",bh="@firebase/remote-config-compat",Sh="@firebase/storage",Rh="@firebase/storage-compat",Dh="@firebase/firestore",Ph="@firebase/vertexai-preview",Ch="@firebase/firestore-compat",Vh="firebase",kh="10.14.1";/**
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
 */const Os="[DEFAULT]",Nh={[Bs]:"fire-core",[oh]:"fire-core-compat",[lh]:"fire-analytics",[ah]:"fire-analytics-compat",[ch]:"fire-app-check",[uh]:"fire-app-check-compat",[hh]:"fire-auth",[dh]:"fire-auth-compat",[fh]:"fire-rtdb",[mh]:"fire-data-connect",[ph]:"fire-rtdb-compat",[gh]:"fire-fn",[yh]:"fire-fn-compat",[_h]:"fire-iid",[vh]:"fire-iid-compat",[Eh]:"fire-fcm",[Th]:"fire-fcm-compat",[Ih]:"fire-perf",[wh]:"fire-perf-compat",[Ah]:"fire-rc",[bh]:"fire-rc-compat",[Sh]:"fire-gcs",[Rh]:"fire-gcs-compat",[Dh]:"fire-fst",[Ch]:"fire-fst-compat",[Ph]:"fire-vertex","fire-js":"fire-js",[Vh]:"fire-js-all"};/**
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
 */const _r=new Map,xh=new Map,Fs=new Map;function Jo(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function vr(n){const t=n.name;if(Fs.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;Fs.set(t,n);for(const e of _r.values())Jo(e,n);for(const e of xh.values())Jo(e,n);return!0}function Mh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Lh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ee=new Qa("app","Firebase",Lh);/**
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
 */class Bh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Oh=kh;function Za(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Os,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ee.create("bad-app-name",{appName:String(s)});if(e||(e=Ga()),!e)throw ee.create("no-options");const o=_r.get(s);if(o){if(xs(e,o.options)&&xs(r,o.config))return o;throw ee.create("duplicate-app",{appName:s})}const a=new qc(s);for(const h of Fs.values())a.addComponent(h);const u=new Bh(e,r,a);return _r.set(s,u),u}function Fh(n=Os){const t=_r.get(n);if(!t&&n===Os&&Ga())return Za();if(!t)throw ee.create("no-app",{appName:n});return t}function Le(n,t,e){var r;let s=(r=Nh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(u.join(" "));return}vr(new An(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Uh="firebase-heartbeat-database",$h=1,bn="firebase-heartbeat-store";let Ts=null;function tl(){return Ts||(Ts=eh(Uh,$h,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(bn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ee.create("idb-open",{originalErrorMessage:n.message})})),Ts}async function qh(n){try{const e=(await tl()).transaction(bn),r=await e.objectStore(bn).get(el(n));return await e.done,r}catch(t){if(t instanceof Ke)jt.warn(t.message);else{const e=ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jt.warn(e.message)}}}async function Zo(n,t){try{const r=(await tl()).transaction(bn,"readwrite");await r.objectStore(bn).put(t,el(n)),await r.done}catch(e){if(e instanceof Ke)jt.warn(e.message);else{const r=ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});jt.warn(r.message)}}}function el(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jh=1024,zh=30*24*60*60*1e3;class Hh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ta();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=zh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ta(),{heartbeatsToSend:r,unsentEntries:s}=Kh(this._heartbeatsCache.heartbeats),o=yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return jt.warn(e),""}}}function ta(){return new Date().toISOString().substring(0,10)}function Kh(n,t=jh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ea(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ea(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Wh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xc()?Mc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ea(n){return yr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gh(n){vr(new An("platform-logger",t=>new sh(t),"PRIVATE")),vr(new An("heartbeat",t=>new Hh(t),"PRIVATE")),Le(Bs,Xo,n),Le(Bs,Xo,"esm2017"),Le("fire-js","")}Gh("");var Qh="firebase",Yh="10.14.1";/**
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
 */Le(Qh,Yh,"app");var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ve,nl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,m){function p(){}p.prototype=m.prototype,w.D=m.prototype,w.prototype=new p,w.prototype.constructor=w,w.C=function(v,E,I){for(var y=Array(arguments.length-2),j=2;j<arguments.length;j++)y[j-2]=arguments[j];return m.prototype[E].apply(v,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,p){p||(p=0);var v=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)v[E]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(E=0;16>E;++E)v[E]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=w.g[0],p=w.g[1],E=w.g[2];var I=w.g[3],y=m+(I^p&(E^I))+v[0]+3614090360&4294967295;m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[1]+3905402710&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[2]+606105819&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[3]+3250441966&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(I^p&(E^I))+v[4]+4118548399&4294967295,m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[5]+1200080426&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[6]+2821735955&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[7]+4249261313&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(I^p&(E^I))+v[8]+1770035416&4294967295,m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[9]+2336552879&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[10]+4294925233&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[11]+2304563134&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(I^p&(E^I))+v[12]+1804603682&4294967295,m=p+(y<<7&4294967295|y>>>25),y=I+(E^m&(p^E))+v[13]+4254626195&4294967295,I=m+(y<<12&4294967295|y>>>20),y=E+(p^I&(m^p))+v[14]+2792965006&4294967295,E=I+(y<<17&4294967295|y>>>15),y=p+(m^E&(I^m))+v[15]+1236535329&4294967295,p=E+(y<<22&4294967295|y>>>10),y=m+(E^I&(p^E))+v[1]+4129170786&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[6]+3225465664&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[11]+643717713&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[0]+3921069994&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(E^I&(p^E))+v[5]+3593408605&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[10]+38016083&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[15]+3634488961&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[4]+3889429448&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(E^I&(p^E))+v[9]+568446438&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[14]+3275163606&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[3]+4107603335&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[8]+1163531501&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(E^I&(p^E))+v[13]+2850285829&4294967295,m=p+(y<<5&4294967295|y>>>27),y=I+(p^E&(m^p))+v[2]+4243563512&4294967295,I=m+(y<<9&4294967295|y>>>23),y=E+(m^p&(I^m))+v[7]+1735328473&4294967295,E=I+(y<<14&4294967295|y>>>18),y=p+(I^m&(E^I))+v[12]+2368359562&4294967295,p=E+(y<<20&4294967295|y>>>12),y=m+(p^E^I)+v[5]+4294588738&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[8]+2272392833&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[11]+1839030562&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[14]+4259657740&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(p^E^I)+v[1]+2763975236&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[4]+1272893353&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[7]+4139469664&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[10]+3200236656&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(p^E^I)+v[13]+681279174&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[0]+3936430074&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[3]+3572445317&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[6]+76029189&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(p^E^I)+v[9]+3654602809&4294967295,m=p+(y<<4&4294967295|y>>>28),y=I+(m^p^E)+v[12]+3873151461&4294967295,I=m+(y<<11&4294967295|y>>>21),y=E+(I^m^p)+v[15]+530742520&4294967295,E=I+(y<<16&4294967295|y>>>16),y=p+(E^I^m)+v[2]+3299628645&4294967295,p=E+(y<<23&4294967295|y>>>9),y=m+(E^(p|~I))+v[0]+4096336452&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[7]+1126891415&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[14]+2878612391&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[5]+4237533241&4294967295,p=E+(y<<21&4294967295|y>>>11),y=m+(E^(p|~I))+v[12]+1700485571&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[3]+2399980690&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[10]+4293915773&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[1]+2240044497&4294967295,p=E+(y<<21&4294967295|y>>>11),y=m+(E^(p|~I))+v[8]+1873313359&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[15]+4264355552&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[6]+2734768916&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[13]+1309151649&4294967295,p=E+(y<<21&4294967295|y>>>11),y=m+(E^(p|~I))+v[4]+4149444226&4294967295,m=p+(y<<6&4294967295|y>>>26),y=I+(p^(m|~E))+v[11]+3174756917&4294967295,I=m+(y<<10&4294967295|y>>>22),y=E+(m^(I|~p))+v[2]+718787259&4294967295,E=I+(y<<15&4294967295|y>>>17),y=p+(I^(E|~m))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+I&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var p=m-this.blockSize,v=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=p;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<m;)if(v[E++]=w.charCodeAt(I++),E==this.blockSize){s(this,v),E=0;break}}else for(;I<m;)if(v[E++]=w[I++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var p=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=p&255,p/=256;for(this.u(w),w=Array(16),m=p=0;4>m;++m)for(var v=0;32>v;v+=8)w[p++]=this.g[m]>>>v&255;return w};function o(w,m){var p=u;return Object.prototype.hasOwnProperty.call(p,w)?p[w]:p[w]=m(w)}function a(w,m){this.h=m;for(var p=[],v=!0,E=w.length-1;0<=E;E--){var I=w[E]|0;v&&I==m||(p[E]=I,v=!1)}this.g=p}var u={};function h(w){return-128<=w&&128>w?o(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return T;if(0>w)return C(d(-w));for(var m=[],p=1,v=0;w>=p;v++)m[v]=w/p|0,p*=4294967296;return new a(m,0)}function g(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return C(g(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(m,8)),v=T,E=0;E<w.length;E+=8){var I=Math.min(8,w.length-E),y=parseInt(w.substring(E,E+I),m);8>I?(I=d(Math.pow(m,I)),v=v.j(I).add(d(y))):(v=v.j(p),v=v.add(d(y)))}return v}var T=h(0),_=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();for(var w=0,m=1,p=0;p<this.g.length;p++){var v=this.i(p);w+=(0<=v?v:4294967296+v)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(N(this))return"-"+C(this).toString(w);for(var m=d(Math.pow(w,6)),p=this,v="";;){var E=q(p,m).g;p=x(p,E.j(m));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(w);if(p=E,D(p))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=x(this,w),N(w)?-1:D(w)?0:1};function C(w){for(var m=w.g.length,p=[],v=0;v<m;v++)p[v]=~w.g[v];return new a(p,~w.h).add(_)}n.abs=function(){return N(this)?C(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),p=[],v=0,E=0;E<=m;E++){var I=v+(this.i(E)&65535)+(w.i(E)&65535),y=(I>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);v=y>>>16,I&=65535,y&=65535,p[E]=y<<16|I}return new a(p,p[p.length-1]&-2147483648?-1:0)};function x(w,m){return w.add(C(m))}n.j=function(w){if(D(this)||D(w))return T;if(N(this))return N(w)?C(this).j(C(w)):C(C(this).j(w));if(N(w))return C(this.j(C(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,p=[],v=0;v<2*m;v++)p[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<w.g.length;E++){var I=this.i(v)>>>16,y=this.i(v)&65535,j=w.i(E)>>>16,ce=w.i(E)&65535;p[2*v+2*E]+=y*ce,V(p,2*v+2*E),p[2*v+2*E+1]+=I*ce,V(p,2*v+2*E+1),p[2*v+2*E+1]+=y*j,V(p,2*v+2*E+1),p[2*v+2*E+2]+=I*j,V(p,2*v+2*E+2)}for(v=0;v<m;v++)p[v]=p[2*v+1]<<16|p[2*v];for(v=m;v<2*m;v++)p[v]=0;return new a(p,0)};function V(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function L(w,m){this.g=w,this.h=m}function q(w,m){if(D(m))throw Error("division by zero");if(D(w))return new L(T,T);if(N(w))return m=q(C(w),m),new L(C(m.g),C(m.h));if(N(m))return m=q(w,C(m)),new L(C(m.g),m.h);if(30<w.g.length){if(N(w)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var p=_,v=m;0>=v.l(w);)p=z(p),v=z(v);var E=W(p,1),I=W(v,1);for(v=W(v,2),p=W(p,2);!D(v);){var y=I.add(v);0>=y.l(w)&&(E=E.add(p),I=y),v=W(v,1),p=W(p,1)}return m=x(w,E.j(m)),new L(E,m)}for(E=T;0<=w.l(m);){for(p=Math.max(1,Math.floor(w.m()/m.m())),v=Math.ceil(Math.log(p)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=d(p),y=I.j(m);N(y)||0<y.l(w);)p-=v,I=d(p),y=I.j(m);D(I)&&(I=_),E=E.add(I),w=x(w,y)}return new L(E,w)}n.A=function(w){return q(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)&w.i(v);return new a(p,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)|w.i(v);return new a(p,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),p=[],v=0;v<m;v++)p[v]=this.i(v)^w.i(v);return new a(p,this.h^w.h)};function z(w){for(var m=w.g.length+1,p=[],v=0;v<m;v++)p[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(p,w.h)}function W(w,m){var p=m>>5;m%=32;for(var v=w.g.length-p,E=[],I=0;I<v;I++)E[I]=0<m?w.i(I+p)>>>m|w.i(I+p+1)<<32-m:w.i(I+p);return new a(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,ve=a}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});var ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rl,gn,sl,dr,Us,il,ol,al;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ar=="object"&&ar];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break t;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var b=c++;return{value:l(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function g(i,l,c){return i.call.apply(i.bind,arguments)}function T(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function _(i,l,c){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:T,_.apply(null,arguments)}function S(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,b){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return l.prototype[A].apply(f,k)}}function N(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function C(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,b=f.length||0;i.length=A+b;for(let k=0;k<b;k++)i[A+k]=f[k]}else i.push(f)}}class x{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function V(i){return/^[\s\xa0]*$/.test(i)}function L(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function q(i){return q[" "](i),i}q[" "]=function(){};var z=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function W(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function w(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function m(i){const l={};for(const c in i)l[c]=i[c];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let b=0;b<p.length;b++)c=p[b],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function E(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function I(i){u.setTimeout(()=>{throw i},0)}function y(){var i=Gr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,c){const f=ce.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var ce=new x(()=>new $n,i=>i.reset());class $n{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let he,De=!1,Gr=new j,Hi=()=>{const i=u.Promise.resolve(void 0);he=()=>{i.then(Fu)}};var Fu=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(c){I(c)}var l=ce;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}De=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Uu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function Je(i,l){if(ft.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(z){t:{try{q(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:$u[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Je.aa.h.call(this)}}D(Je,ft);var $u={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),qu=0;function ju(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++qu,this.da=this.fa=!1}function jn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function zn(i){this.src=i,this.g={},this.h=0}zn.prototype.add=function(i,l,c,f,A){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var k=Yr(i,l,f,A);return-1<k?(l=i[k],c||(l.fa=!1)):(l=new ju(l,this.src,b,!!f,A),l.fa=c,i.push(l)),l};function Qr(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(jn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Yr(i,l,c,f){for(var A=0;A<i.length;++A){var b=i[A];if(!b.da&&b.listener==l&&b.capture==!!c&&b.ha==f)return A}return-1}var Xr="closure_lm_"+(1e6*Math.random()|0),Jr={};function Ki(i,l,c,f,A){if(Array.isArray(l)){for(var b=0;b<l.length;b++)Ki(i,l[b],c,f,A);return null}return c=Qi(c),i&&i[qn]?i.K(l,c,d(f)?!!f.capture:!1,A):zu(i,l,c,!1,f,A)}function zu(i,l,c,f,A,b){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,Z=ts(i);if(Z||(i[Xr]=Z=new zn(i)),c=Z.add(l,c,f,k,b),c.proxy)return c;if(f=Hu(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Uu||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(Gi(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Hu(){function i(c){return l.call(i.src,i.listener,c)}const l=Ku;return i}function Wi(i,l,c,f,A){if(Array.isArray(l))for(var b=0;b<l.length;b++)Wi(i,l[b],c,f,A);else f=d(f)?!!f.capture:!!f,c=Qi(c),i&&i[qn]?(i=i.i,l=String(l).toString(),l in i.g&&(b=i.g[l],c=Yr(b,c,f,A),-1<c&&(jn(b[c]),Array.prototype.splice.call(b,c,1),b.length==0&&(delete i.g[l],i.h--)))):i&&(i=ts(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Yr(l,c,f,A)),(c=-1<i?l[i]:null)&&Zr(c))}function Zr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[qn])Qr(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(Gi(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=ts(l))?(Qr(c,i),c.h==0&&(c.src=null,l[Xr]=null)):jn(i)}}}function Gi(i){return i in Jr?Jr[i]:Jr[i]="on"+i}function Ku(i,l){if(i.da)i=!0;else{l=new Je(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&Zr(i),i=c.call(f,l)}return i}function ts(i){return i=i[Xr],i instanceof zn?i:null}var es="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qi(i){return typeof i=="function"?i:(i[es]||(i[es]=function(l){return i.handleEvent(l)}),i[es])}function mt(){Gt.call(this),this.i=new zn(this),this.M=this,this.F=null}D(mt,Gt),mt.prototype[qn]=!0,mt.prototype.removeEventListener=function(i,l,c,f){Wi(this,i,l,c,f)};function Tt(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new ft(l,i);else if(l instanceof ft)l.target=l.target||i;else{var A=l;l=new ft(f,i),v(l,A)}if(A=!0,c)for(var b=c.length-1;0<=b;b--){var k=l.g=c[b];A=Hn(k,f,!0,l)&&A}if(k=l.g=i,A=Hn(k,f,!0,l)&&A,A=Hn(k,f,!1,l)&&A,c)for(b=0;b<c.length;b++)k=l.g=c[b],A=Hn(k,f,!1,l)&&A}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)jn(c[f]);delete i.g[l],i.h--}}this.F=null},mt.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},mt.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function Hn(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,b=0;b<l.length;++b){var k=l[b];if(k&&!k.da&&k.capture==c){var Z=k.listener,lt=k.ha||k.src;k.fa&&Qr(i.i,k),A=Z.call(lt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Yi(i,l,c){if(typeof i=="function")c&&(i=_(i,c));else if(i&&typeof i.handleEvent=="function")i=_(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Xi(i){i.g=Yi(()=>{i.g=null,i.i&&(i.i=!1,Xi(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Wu extends Gt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Xi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(i){Gt.call(this),this.h=i,this.g={}}D(Ze,Gt);var Ji=[];function Zi(i){W(i.g,function(l,c){this.g.hasOwnProperty(c)&&Zr(l)},i),i.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),Zi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ns=u.JSON.stringify,Gu=u.JSON.parse,Qu=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function rs(){}rs.prototype.h=null;function to(i){return i.h||(i.h=i.i())}function eo(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ss(){ft.call(this,"d")}D(ss,ft);function is(){ft.call(this,"c")}D(is,ft);var de={},no=null;function Kn(){return no=no||new mt}de.La="serverreachability";function ro(i){ft.call(this,de.La,i)}D(ro,ft);function en(i){const l=Kn();Tt(l,new ro(l))}de.STAT_EVENT="statevent";function so(i,l){ft.call(this,de.STAT_EVENT,i),this.stat=l}D(so,ft);function It(i){const l=Kn();Tt(l,new so(l,i))}de.Ma="timingevent";function io(i,l){ft.call(this,de.Ma,i),this.size=l}D(io,ft);function nn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function rn(){this.g=!0}rn.prototype.xa=function(){this.g=!1};function Yu(i,l,c,f,A,b){i.info(function(){if(i.g)if(b)for(var k="",Z=b.split("&"),lt=0;lt<Z.length;lt++){var Y=Z[lt].split("=");if(1<Y.length){var pt=Y[0];Y=Y[1];var gt=pt.split("_");k=2<=gt.length&&gt[1]=="type"?k+(pt+"="+Y+"&"):k+(pt+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+k})}function Xu(i,l,c,f,A,b,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+b+" "+k})}function Pe(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Zu(i,c)+(f?" "+f:"")})}function Ju(i,l){i.info(function(){return"TIMEOUT: "+l})}rn.prototype.info=function(){};function Zu(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return ns(c)}catch{return l}}var Wn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},os;function Gn(){}D(Gn,rs),Gn.prototype.g=function(){return new XMLHttpRequest},Gn.prototype.i=function(){return{}},os=new Gn;function Qt(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ao}function ao(){this.i=null,this.g="",this.h=!1}var lo={},as={};function ls(i,l,c){i.L=1,i.v=Jn(Ft(l)),i.m=c,i.P=!0,uo(i,null)}function uo(i,l){i.F=Date.now(),Qn(i),i.A=Ft(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ao(c.i,"t",f),i.C=0,c=i.j.J,i.h=new ao,i.g=qo(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Wu(_(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ji[0]=A.toString()),A=Ji);for(var b=0;b<A.length;b++){var k=Ki(c,A[b],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),en(),Yu(i.i,i.u,i.A,i.l,i.R,i.m)}Qt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ut(i)==3?l.j():this.Y(i)},Qt.prototype.Y=function(i){try{if(i==this.g)t:{const gt=Ut(this.g);var l=this.g.Ba();const ke=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Vo(this.g)))){this.J||gt!=4||l==7||(l==8||0>=ke?en(3):en(2)),us(this);var c=this.g.Z();this.X=c;e:if(co(this)){var f=Vo(this.g);i="";var A=f.length,b=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fe(this),sn(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(b&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=c==200,Xu(this.i,this.u,this.A,this.l,this.R,gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,lt=this.g;if((Z=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Z)){var Y=Z;break e}}Y=null}if(c=Y)Pe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cs(this,c);else{this.o=!1,this.s=3,It(12),fe(this),sn(this);break t}}if(this.P){c=!0;let Pt;for(;!this.J&&this.C<k.length;)if(Pt=tc(this,k),Pt==as){gt==4&&(this.s=4,It(14),c=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==lo){this.s=4,It(15),Pe(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else Pe(this.i,this.l,Pt,null),cs(this,Pt);if(co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||k.length!=0||this.h.h||(this.s=1,It(16),c=!1),this.o=this.o&&c,!c)Pe(this.i,this.l,k,"[Invalid Chunked Response]"),fe(this),sn(this);else if(0<k.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),gs(pt),pt.M=!0,It(11))}}else Pe(this.i,this.l,k,null),cs(this,k);gt==4&&fe(this),this.o&&!this.J&&(gt==4?Oo(this.j,this):(this.o=!1,Qn(this)))}else yc(this.g),c==400&&0<k.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),fe(this),sn(this)}}}catch{}finally{}};function co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function tc(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?as:(c=Number(l.substring(c,f)),isNaN(c)?lo:(f+=1,f+c>l.length?as:(l=l.slice(f,f+c),i.C=f+c,l)))}Qt.prototype.cancel=function(){this.J=!0,fe(this)};function Qn(i){i.S=Date.now()+i.I,ho(i,i.I)}function ho(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=nn(_(i.ba,i),l)}function us(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Qt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Ju(this.i,this.A),this.L!=2&&(en(),It(17)),fe(this),this.s=2,sn(this)):ho(this,this.S-i)};function sn(i){i.j.G==0||i.J||Oo(i.j,i)}function fe(i){us(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Zi(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function cs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||hs(c.h,i))){if(!i.K&&hs(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)sr(c),nr(c);else break t;ps(c),It(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=nn(_(c.Za,c),6e3));if(1>=po(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else pe(c,11)}else if((i.K||c.g==i)&&sr(c),!V(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(c.T=Y[0],Y=Y[1],c.G==2)if(Y[0]=="c"){c.K=Y[1],c.ia=Y[2];const pt=Y[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const gt=Y[4];gt!=null&&(c.Aa=gt,c.j.info("SVER="+c.Aa));const ke=Y[5];ke!=null&&typeof ke=="number"&&0<ke&&(f=1.5*ke,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Pt=i.g;if(Pt){const or=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(or){var b=f.h;b.g||or.indexOf("spdy")==-1&&or.indexOf("quic")==-1&&or.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ds(b,b.h),b.h=null))}if(f.D){const ys=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;ys&&(f.ya=ys,tt(f.I,f.D,ys))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var k=i;if(f.qa=$o(f,f.J?f.ia:null,f.W),k.K){go(f.h,k);var Z=k,lt=f.L;lt&&(Z.I=lt),Z.B&&(us(Z),Qn(Z)),f.g=k}else Lo(f);0<c.i.length&&rr(c)}else Y[0]!="stop"&&Y[0]!="close"||pe(c,7);else c.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?pe(c,7):ms(c):Y[0]!="noop"&&c.l&&c.l.ta(Y),c.v=0)}}en(4)}catch{}}var ec=class{constructor(i,l){this.g=i,this.map=l}};function fo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function po(i){return i.h?1:i.g?i.g.size:0}function hs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ds(i,l){i.g?i.g.add(l):i.h=l}function go(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}fo.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function yo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return N(i.i)}function nc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function rc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function _o(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=rc(i),f=nc(i),A=f.length,b=0;b<A;b++)l.call(void 0,f[b],c&&c[b],i)}var vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var b=i[c].substring(0,f);A=i[c].substring(f+1)}else b=i[c];l(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function me(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof me){this.h=i.h,Yn(this,i.j),this.o=i.o,this.g=i.g,Xn(this,i.s),this.l=i.l;var l=i.i,c=new ln;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Eo(this,c),this.m=i.m}else i&&(l=String(i).match(vo))?(this.h=!1,Yn(this,l[1]||"",!0),this.o=on(l[2]||""),this.g=on(l[3]||"",!0),Xn(this,l[4]),this.l=on(l[5]||"",!0),Eo(this,l[6]||"",!0),this.m=on(l[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}me.prototype.toString=function(){var i=[],l=this.j;l&&i.push(an(l,To,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(an(l,To,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(an(c,c.charAt(0)=="/"?ac:oc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",an(c,uc)),i.join("")};function Ft(i){return new me(i)}function Yn(i,l,c){i.j=c?on(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Xn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Eo(i,l,c){l instanceof ln?(i.i=l,cc(i.i,i.h)):(c||(l=an(l,lc)),i.i=new ln(l,i.h))}function tt(i,l,c){i.i.set(l,c)}function Jn(i){return tt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function on(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function an(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,ic),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ic(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var To=/[#\/\?@]/g,oc=/[#\?:]/g,ac=/[#\?]/g,lc=/[#\?@]/g,uc=/#/g;function ln(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Yt(i){i.g||(i.g=new Map,i.h=0,i.i&&sc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=ln.prototype,n.add=function(i,l){Yt(this),this.i=null,i=Ce(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Io(i,l){Yt(i),l=Ce(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function wo(i,l){return Yt(i),l=Ce(i,l),i.g.has(l)}n.forEach=function(i,l){Yt(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){Yt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let b=0;b<A.length;b++)c.push(l[f])}return c},n.V=function(i){Yt(this);let l=[];if(typeof i=="string")wo(this,i)&&(l=l.concat(this.g.get(Ce(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return Yt(this),this.i=null,i=Ce(this,i),wo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Ao(i,l,c){Io(i,l),0<c.length&&(i.i=null,i.g.set(Ce(i,l),N(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=b;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Ce(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function cc(i,l){l&&!i.j&&(Yt(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Io(this,f),Ao(this,A,c))},i)),i.j=l}function hc(i,l){const c=new rn;if(u.Image){const f=new Image;f.onload=S(Xt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=S(Xt,c,"TestLoadImage: error",!1,l,f),f.onabort=S(Xt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(Xt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function dc(i,l){const c=new rn,f=new AbortController,A=setTimeout(()=>{f.abort(),Xt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?Xt(c,"TestPingServer: ok",!0,l):Xt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Xt(c,"TestPingServer: error",!1,l)})}function Xt(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function fc(){this.g=new Qu}function mc(i,l,c){const f=c||"";try{_o(i,function(A,b){let k=A;d(A)&&(k=ns(A)),l.push(f+b+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function Zn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(Zn,rs),Zn.prototype.g=function(){return new tr(this.l,this.j)},Zn.prototype.i=function(i){return function(){return i}}({});function tr(i,l){mt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(tr,mt),n=tr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,cn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function bo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?un(this):cn(this),this.readyState==3&&bo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,un(this))},n.Qa=function(i){this.g&&(this.response=i,un(this))},n.ga=function(){this.g&&un(this)};function un(i){i.readyState=4,i.l=null,i.j=null,i.v=null,cn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function cn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function So(i){let l="";return W(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function fs(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=So(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):tt(i,l,c))}function rt(i){mt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(rt,mt);var pc=/^https?$/i,gc=["POST","PUT"];n=rt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():os.g(),this.v=this.o?to(this.o):to(os),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(b){Ro(this,b);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())c.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(b=>b.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(gc,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of c)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Co(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){Ro(this,b)}};function Ro(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Do(i),er(i)}function Do(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Tt(this,"complete"),Tt(this,"abort"),er(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),er(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Po(this):this.bb())},n.bb=function(){Po(this)};function Po(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ut(i)!=4||i.Z()!=2)){if(i.u&&Ut(i)==4)Yi(i.Ea,0,i);else if(Tt(i,"readystatechange"),Ut(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=k===0){var A=String(i.D).match(vo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!pc.test(A?A.toLowerCase():"")}c=f}if(c)Tt(i,"complete"),Tt(i,"success");else{i.m=6;try{var b=2<Ut(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",Do(i)}}finally{er(i)}}}}function er(i,l){if(i.g){Co(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Tt(i,"ready");try{c.onreadystatechange=f}catch{}}}function Co(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ut(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Gu(l)}};function Vo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function yc(i){const l={};i=(i.g&&2<=Ut(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(V(i[f]))continue;var c=E(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const b=l[A]||[];l[A]=b,b.push(c)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function ko(i){this.Aa=0,this.i=[],this.j=new rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,i),this.cb=hn("retryDelaySeedMs",1e4,i),this.Wa=hn("forwardChannelMaxRetries",2,i),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new fo(i&&i.concurrentRequestLimit),this.Da=new fc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ko.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){It(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=$o(this,null,this.W),rr(this)};function ms(i){if(No(i),i.G==3){var l=i.U++,c=Ft(i.I);if(tt(c,"SID",i.K),tt(c,"RID",l),tt(c,"TYPE","terminate"),dn(i,c),l=new Qt(i,i.j,l),l.L=2,l.v=Jn(Ft(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=qo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Qn(l)}Uo(i)}function nr(i){i.g&&(gs(i),i.g.cancel(),i.g=null)}function No(i){nr(i),i.u&&(u.clearTimeout(i.u),i.u=null),sr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function rr(i){if(!mo(i.h)&&!i.s){i.s=!0;var l=i.Ga;he||Hi(),De||(he(),De=!0),Gr.add(l,i),i.B=0}}function _c(i,l){return po(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=nn(_(i.Ga,i,l),Fo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Qt(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Mo(this,A,l),c=Ft(this.I),tt(c,"RID",i),tt(c,"CVER",22),this.D&&tt(c,"X-HTTP-Session-Id",this.D),dn(this,c),b&&(this.O?l="headers="+encodeURIComponent(String(So(b)))+"&"+l:this.m&&fs(c,this.m,b)),ds(this.h,A),this.Ua&&tt(c,"TYPE","init"),this.P?(tt(c,"$req",l),tt(c,"SID","null"),A.T=!0,ls(A,c,null)):ls(A,c,l),this.G=2}}else this.G==3&&(i?xo(this,i):this.i.length==0||mo(this.h)||xo(this))};function xo(i,l){var c;l?c=l.l:c=i.U++;const f=Ft(i.I);tt(f,"SID",i.K),tt(f,"RID",c),tt(f,"AID",i.T),dn(i,f),i.m&&i.o&&fs(f,i.m,i.o),c=new Qt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Mo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ds(i.h,c),ls(c,f,l)}function dn(i,l){i.H&&W(i.H,function(c,f){tt(l,f,c)}),i.l&&_o({},function(c,f){tt(l,f,c)})}function Mo(i,l,c){c=Math.min(i.i.length,c);var f=i.l?_(i.l.Na,i.l,i):null;t:{var A=i.i;let b=-1;for(;;){const k=["count="+c];b==-1?0<c?(b=A[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let Z=!0;for(let lt=0;lt<c;lt++){let Y=A[lt].g;const pt=A[lt].map;if(Y-=b,0>Y)b=Math.max(0,A[lt].g-100),Z=!1;else try{mc(pt,k,"req"+Y+"_")}catch{f&&f(pt)}}if(Z){f=k.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function Lo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;he||Hi(),De||(he(),De=!0),Gr.add(l,i),i.v=0}}function ps(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=nn(_(i.Fa,i),Fo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Bo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=nn(_(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),nr(this),Bo(this))};function gs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Bo(i){i.g=new Qt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ft(i.qa);tt(l,"RID","rpc"),tt(l,"SID",i.K),tt(l,"AID",i.T),tt(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&tt(l,"TO",i.ja),tt(l,"TYPE","xmlhttp"),dn(i,l),i.m&&i.o&&fs(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Jn(Ft(l)),c.m=null,c.P=!0,uo(c,i)}n.Za=function(){this.C!=null&&(this.C=null,nr(this),ps(this),It(19))};function sr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Oo(i,l){var c=null;if(i.g==l){sr(i),gs(i),i.g=null;var f=2}else if(hs(i.h,l))c=l.D,go(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Kn(),Tt(f,new io(f,c)),rr(i)}else Lo(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&_c(i,l)||f==2&&ps(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:pe(i,5);break;case 4:pe(i,10);break;case 3:pe(i,6);break;default:pe(i,2)}}}function Fo(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function pe(i,l){if(i.j.info("Error code "+l),l==2){var c=_(i.fb,i),f=i.Xa;const A=!f;f=new me(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Yn(f,"https"),Jn(f),A?hc(f.toString(),c):dc(f.toString(),c)}else It(2);i.G=0,i.l&&i.l.sa(l),Uo(i),No(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Uo(i){if(i.G=0,i.ka=[],i.l){const l=yo(i.h);(l.length!=0||i.i.length!=0)&&(C(i.ka,l),C(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function $o(i,l,c){var f=c instanceof me?Ft(c):new me(c);if(f.g!="")l&&(f.g=l+"."+f.g),Xn(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var b=new me(null);f&&Yn(b,f),l&&(b.g=l),A&&Xn(b,A),c&&(b.l=c),f=b}return c=i.D,l=i.ya,c&&l&&tt(f,c,l),tt(f,"VER",i.la),dn(i,f),f}function qo(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new rt(new Zn({eb:c})):new rt(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jo(){}n=jo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ir(){}ir.prototype.g=function(i,l){return new St(i,l)};function St(i,l){mt.call(this),this.g=new ko(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!V(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!V(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ve(this)}D(St,mt),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ms(this.g)},St.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=ns(i),i=c);l.i.push(new ec(l.Ya++,i)),l.G==3&&rr(l)},St.prototype.N=function(){this.g.l=null,delete this.j,ms(this.g),delete this.g,St.aa.N.call(this)};function zo(i){ss.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}D(zo,ss);function Ho(){is.call(this),this.status=1}D(Ho,is);function Ve(i){this.g=i}D(Ve,jo),Ve.prototype.ua=function(){Tt(this.g,"a")},Ve.prototype.ta=function(i){Tt(this.g,new zo(i))},Ve.prototype.sa=function(i){Tt(this.g,new Ho)},Ve.prototype.ra=function(){Tt(this.g,"b")},ir.prototype.createWebChannel=ir.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,al=function(){return new ir},ol=function(){return Kn()},il=de,Us={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wn.NO_ERROR=0,Wn.TIMEOUT=8,Wn.HTTP_ERROR=6,dr=Wn,oo.COMPLETE="complete",sl=oo,eo.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,gn=eo,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,rl=rt}).apply(typeof ar<"u"?ar:typeof self<"u"?self:typeof window<"u"?window:{});const ra="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Ya("@firebase/firestore");function fn(){return Te.logLevel}function B(n,...t){if(Te.logLevel<=G.DEBUG){const e=t.map(ii);Te.debug(`Firestore (${We}): ${n}`,...e)}}function zt(n,...t){if(Te.logLevel<=G.ERROR){const e=t.map(ii);Te.error(`Firestore (${We}): ${n}`,...e)}}function Oe(n,...t){if(Te.logLevel<=G.WARN){const e=t.map(ii);Te.warn(`Firestore (${We}): ${n}`,...e)}}function ii(n){if(typeof n=="string")return n;try{/**
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
 */function F(n="Unexpected state"){const t=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: `+n;throw zt(t),new Error(t)}function J(n,t){n||F()}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class Jh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zh{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new ll(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new vt(t)}}class td{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ed{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new td(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){J(this.o===void 0);const r=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new nd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=sd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function X(n,t){return n<t?-1:n>t?1:0}function Fe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new Q(0,0))}static max(){return new U(new Q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(),r===void 0?r=t.length-e:r>t.length-e&&F(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Sn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Sn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class et extends Sn{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const id=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Sn{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return id.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new M(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new M(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(et.fromString(t))}static fromName(t){return new O(et.fromString(t).popFirst(5))}static empty(){return new O(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new et(t.slice()))}}function od(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new se(s,O.empty(),t)}function ad(n){return new se(n.readTime,n.key,-1)}class se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new se(U.min(),O.empty(),-1)}static max(){return new se(U.max(),O.empty(),-1)}}function ld(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:X(n.largestBatchId,t.largestBatchId))}/**
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
 */const ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==ud)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(g=>{a[d]=g,++u,u===o&&r(a)},g=>s(g))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function hd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class oi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}oi.oe=-1;function Vr(n){return n==null}function Er(n){return n===0&&1/n==-1/0}function dd(n){return typeof n=="number"&&Number.isInteger(n)&&!Er(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function be(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function cl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new lr(this.root,t,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new lr(this.root,t,this.comparator,!0)}}class lr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ia(this.data.getIterator())}getIteratorFrom(t){return new ia(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class ia{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new ht(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class hl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new hl("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const fd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(J(!!n),typeof n=="string"){let t=0;const e=fd.exec(n);if(J(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ie(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
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
 */function ai(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function li(n){const t=n.mapValue.fields.__previous_value__;return ai(t)?li(t):t}function Rn(n){const t=ie(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Dn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Dn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ur={mapValue:{}};function we(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ai(n)?4:gd(n)?9007199254740991:pd(n)?10:11:F()}function Lt(n,t){if(n===t)return!0;const e=we(n);if(e!==we(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Rn(n).isEqual(Rn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ie(s.timestampValue),u=ie(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ie(s.bytesValue).isEqual(Ie(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),u=st(o.doubleValue);return a===u?Er(a)===Er(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(sa(a)!==sa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Lt(a[h],u[h])))return!1;return!0}(n,t);default:return F()}}function Pn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Ue(n,t){if(n===t)return 0;const e=we(n),r=we(t);if(e!==r)return X(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return oa(n.timestampValue,t.timestampValue);case 4:return oa(Rn(n),Rn(t));case 5:return X(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Ie(o),h=Ie(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const g=X(u[d],h[d]);if(g!==0)return g}return X(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=X(st(o.latitude),st(a.latitude));return u!==0?u:X(st(o.longitude),st(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return aa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,g;const T=o.fields||{},_=a.fields||{},S=(u=T.value)===null||u===void 0?void 0:u.arrayValue,D=(h=_.value)===null||h===void 0?void 0:h.arrayValue,N=X(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((g=D==null?void 0:D.values)===null||g===void 0?void 0:g.length)||0);return N!==0?N:aa(S,D)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===ur.mapValue&&a===ur.mapValue)return 0;if(o===ur.mapValue)return 1;if(a===ur.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let T=0;T<h.length&&T<g.length;++T){const _=X(h[T],g[T]);if(_!==0)return _;const S=Ue(u[h[T]],d[g[T]]);if(S!==0)return S}return X(h.length,g.length)}(n.mapValue,t.mapValue);default:throw F()}}function oa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return X(n,t);const e=ie(n),r=ie(t),s=X(e.seconds,r.seconds);return s!==0?s:X(e.nanos,r.nanos)}function aa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ue(e[s],r[s]);if(o)return o}return X(e.length,r.length)}function $e(n){return $s(n)}function $s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ie(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=$s(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${$s(e.fields[a])}`;return s+"}"}(n.mapValue):F()}function la(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function qs(n){return!!n&&"integerValue"in n}function ui(n){return!!n&&"arrayValue"in n}function ua(n){return!!n&&"nullValue"in n}function ca(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fr(n){return!!n&&"mapValue"in n}function pd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function En(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return be(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=En(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=En(n.arrayValue.values[e]);return t}return Object.assign({},n)}function gd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!fr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=En(e)}setAll(t){let e=ct.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=En(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());fr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){be(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new bt(En(this.value))}}function dl(n){const t=[];return be(n.fields,(e,r)=>{const s=new ct([e]);if(fr(r)){const o=dl(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Et(t,0,U.min(),U.min(),U.min(),bt.empty(),0)}static newFoundDocument(t,e,r,s){return new Et(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new Et(t,2,e,U.min(),U.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,U.min(),U.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tr{constructor(t,e){this.position=t,this.inclusive=e}}function ha(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Ue(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function da(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Cn{constructor(t,e="asc"){this.field=t,this.dir=e}}function yd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class fl{}class ot extends fl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new vd(t,e,r):e==="array-contains"?new Id(t,r):e==="in"?new wd(t,r):e==="not-in"?new Ad(t,r):e==="array-contains-any"?new bd(t,r):new ot(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ed(t,r):new Td(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ue(e,this.value)):e!==null&&we(this.value)===we(e)&&this.matchesComparison(Ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends fl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return ml(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ml(n){return n.op==="and"}function pl(n){return _d(n)&&ml(n)}function _d(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function js(n){if(n instanceof ot)return n.field.canonicalString()+n.op.toString()+$e(n.value);if(pl(n))return n.filters.map(t=>js(t)).join(",");{const t=n.filters.map(e=>js(e)).join(",");return`${n.op}(${t})`}}function gl(n,t){return n instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&Lt(r.value,s.value)}(n,t):n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&gl(a,s.filters[u]),!0):!1}(n,t):void F()}function yl(n){return n instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${$e(e.value)}`}(n):n instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(yl).join(" ,")+"}"}(n):"Filter"}class vd extends ot{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ed extends ot{constructor(t,e){super(t,"in",e),this.keys=_l("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Td extends ot{constructor(t,e){super(t,"not-in",e),this.keys=_l("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function _l(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Id extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ui(e)&&Pn(e.arrayValue,this.value)}}class wd extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Pn(this.value.arrayValue,e)}}class Ad extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Pn(this.value.arrayValue,e)}}class bd extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ui(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Pn(this.value.arrayValue,r))}}/**
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
 */class Sd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function fa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Sd(n,t,e,r,s,o,a)}function ci(n){const t=$(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>js(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>$e(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>$e(r)).join(",")),t.ue=e}return t.ue}function hi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!yd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!gl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!da(n.startAt,t.startAt)&&da(n.endAt,t.endAt)}function zs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rd(n,t,e,r,s,o,a,u){return new Ge(n,t,e,r,s,o,a,u)}function di(n){return new Ge(n)}function ma(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vl(n){return n.collectionGroup!==null}function Tn(n){const t=$(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ht(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Cn(o,r))}),e.has(ct.keyField().canonicalString())||t.ce.push(new Cn(ct.keyField(),r))}return t.ce}function xt(n){const t=$(n);return t.le||(t.le=Dd(t,Tn(n))),t.le}function Dd(n,t){if(n.limitType==="F")return fa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Cn(s.field,o)});const e=n.endAt?new Tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Tr(n.startAt.position,n.startAt.inclusive):null;return fa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Hs(n,t){const e=n.filters.concat([t]);return new Ge(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ir(n,t,e){return new Ge(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function kr(n,t){return hi(xt(n),xt(t))&&n.limitType===t.limitType}function El(n){return`${ci(xt(n))}|lt:${n.limitType}`}function Ne(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>yl(s)).join(", ")}]`),Vr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>$e(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>$e(s)).join(",")),`Target(${r})`}(xt(n))}; limitType=${n.limitType})`}function Nr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Tn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=ha(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Tn(r),s)||r.endAt&&!function(a,u,h){const d=ha(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Tn(r),s))}(n,t)}function Pd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tl(n){return(t,e)=>{let r=!1;for(const s of Tn(n)){const o=Cd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Cd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Ue(h,d):F()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){be(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return cl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new nt(O.comparator);function Ht(){return Vd}const Il=new nt(O.comparator);function yn(...n){let t=Il;for(const e of n)t=t.insert(e.key,e);return t}function wl(n){let t=Il;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function _e(){return In()}function Al(){return In()}function In(){return new Qe(n=>n.toString(),(n,t)=>n.isEqual(t))}const kd=new nt(O.comparator),Nd=new ht(O.comparator);function H(...n){let t=Nd;for(const e of n)t=t.add(e);return t}const xd=new ht(X);function Md(){return xd}/**
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
 */function fi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Er(t)?"-0":t}}function bl(n){return{integerValue:""+n}}function Ld(n,t){return dd(t)?bl(t):fi(n,t)}/**
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
 */class xr{constructor(){this._=void 0}}function Bd(n,t,e){return n instanceof wr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ai(o)&&(o=li(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Vn?Rl(n,t):n instanceof kn?Dl(n,t):function(s,o){const a=Sl(s,o),u=pa(a)+pa(s.Pe);return qs(a)&&qs(s.Pe)?bl(u):fi(s.serializer,u)}(n,t)}function Od(n,t,e){return n instanceof Vn?Rl(n,t):n instanceof kn?Dl(n,t):e}function Sl(n,t){return n instanceof Ar?function(r){return qs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class wr extends xr{}class Vn extends xr{constructor(t){super(),this.elements=t}}function Rl(n,t){const e=Pl(t);for(const r of n.elements)e.some(s=>Lt(s,r))||e.push(r);return{arrayValue:{values:e}}}class kn extends xr{constructor(t){super(),this.elements=t}}function Dl(n,t){let e=Pl(t);for(const r of n.elements)e=e.filter(s=>!Lt(s,r));return{arrayValue:{values:e}}}class Ar extends xr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function pa(n){return st(n.integerValue||n.doubleValue)}function Pl(n){return ui(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Fd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Vn&&s instanceof Vn||r instanceof kn&&s instanceof kn?Fe(r.elements,s.elements,Lt):r instanceof Ar&&s instanceof Ar?Lt(r.Pe,s.Pe):r instanceof wr&&s instanceof wr}(n.transform,t.transform)}class Ud{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Mr{}function Cl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new mi(n.key,Dt.none()):new Mn(n.key,n.data,Dt.none());{const e=n.data,r=bt.empty();let s=new ht(ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ae(n.key,r,new Rt(s.toArray()),Dt.none())}}function $d(n,t,e){n instanceof Mn?function(s,o,a){const u=s.value.clone(),h=ya(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ae?function(s,o,a){if(!mr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ya(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Vl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function wn(n,t,e,r){return n instanceof Mn?function(o,a,u,h){if(!mr(o.precondition,a))return u;const d=o.value.clone(),g=_a(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ae?function(o,a,u,h){if(!mr(o.precondition,a))return u;const d=_a(o.fieldTransforms,h,a),g=a.data;return g.setAll(Vl(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,u){return mr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function qd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Sl(r.transform,s||null);o!=null&&(e===null&&(e=bt.empty()),e.set(r.field,o))}return e||null}function ga(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fe(r,s,(o,a)=>Fd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Mn extends Mr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ae extends Mr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Vl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ya(n,t,e){const r=new Map;J(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Od(a,u,e[s]))}return r}function _a(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Bd(o,a,t))}return r}class mi extends Mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jd extends Mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&$d(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=wn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=wn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Al();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Cl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),H())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(e,r)=>ga(e,r))&&Fe(this.baseMutations,t.baseMutations,(e,r)=>ga(e,r))}}class pi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){J(t.mutations.length===r.length);let s=function(){return kd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new pi(t,e,r,s)}}/**
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
 */class Hd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Kd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,K;function Wd(n){switch(n){default:return F();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function kl(n){if(n===void 0)return zt("GRPC error has no .code"),R.UNKNOWN;switch(n){case it.OK:return R.OK;case it.CANCELLED:return R.CANCELLED;case it.UNKNOWN:return R.UNKNOWN;case it.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case it.INTERNAL:return R.INTERNAL;case it.UNAVAILABLE:return R.UNAVAILABLE;case it.UNAUTHENTICATED:return R.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case it.NOT_FOUND:return R.NOT_FOUND;case it.ALREADY_EXISTS:return R.ALREADY_EXISTS;case it.PERMISSION_DENIED:return R.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case it.ABORTED:return R.ABORTED;case it.OUT_OF_RANGE:return R.OUT_OF_RANGE;case it.UNIMPLEMENTED:return R.UNIMPLEMENTED;case it.DATA_LOSS:return R.DATA_LOSS;default:return F()}}(K=it||(it={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Gd(){return new TextEncoder}/**
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
 */const Qd=new ve([4294967295,4294967295],0);function va(n){const t=Gd().encode(n),e=new nl;return e.update(t),new Uint8Array(e.digest())}function Ea(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ve([e,r],0),new ve([s,o],0)]}class gi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new _n(`Invalid padding: ${e}`);if(r<0)throw new _n(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new _n(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new _n(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ve.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(ve.fromNumber(r)));return s.compare(Qd)===1&&(s=new ve([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=va(t),[r,s]=Ea(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new gi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=va(t),[r,s]=Ea(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class _n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Ln.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Lr(U.min(),s,new nt(X),Ht(),H())}}class Ln{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Ln(r,e,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Nl{constructor(t,e){this.targetId=t,this.me=e}}class xl{constructor(t,e,r=dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ta{constructor(){this.fe=0,this.ge=wa(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=H(),e=H(),r=H();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F()}}),new Ln(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=wa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Yd{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ht(),this.qe=Ia(),this.Qe=new nt(X)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:F()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(zs(o))if(r===0){const a=new O(o.path);this.Ue(e,a,Et.newNoDocument(a,U.min()))}else J(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=Ie(r).toUint8Array()}catch(h){if(h instanceof hl)return Oe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new gi(a,s,o)}catch(h){return Oe(h instanceof _n?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&zs(u.target)){const h=new O(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Et.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=H();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Lr(t,e,this.Qe,this.ke,r);return this.ke=Ht(),this.qe=Ia(),this.Qe=new nt(X),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ta,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(X),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||B("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ta),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ia(){return new nt(O.comparator)}function wa(){return new nt(O.comparator)}const Xd={asc:"ASCENDING",desc:"DESCENDING"},Jd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zd={and:"AND",or:"OR"};class tf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ks(n,t){return n.useProto3Json||Vr(t)?t:{value:t}}function br(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ml(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ef(n,t){return br(n,t.toTimestamp())}function Mt(n){return J(!!n),U.fromTimestamp(function(e){const r=ie(e);return new Q(r.seconds,r.nanos)}(n))}function yi(n,t){return Ws(n,t).canonicalString()}function Ws(n,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ll(n){const t=et.fromString(n);return J($l(t)),t}function Gs(n,t){return yi(n.databaseId,t.path)}function Is(n,t){const e=Ll(t);if(e.get(1)!==n.databaseId.projectId)throw new M(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Ol(e))}function Bl(n,t){return yi(n.databaseId,t)}function nf(n){const t=Ll(n);return t.length===4?et.emptyPath():Ol(t)}function Qs(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ol(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Aa(n,t,e){return{name:Gs(n,t),fields:e.value.mapValue.fields}}function rf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,g){return d.useProto3Json?(J(g===void 0||typeof g=="string"),dt.fromBase64String(g||"")):(J(g===void 0||g instanceof Buffer||g instanceof Uint8Array),dt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const g=d.code===void 0?R.UNKNOWN:kl(d.code);return new M(g,d.message||"")}(a);e=new xl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Is(n,r.document.name),o=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):U.min(),u=new bt({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(s,o,a,u),d=r.targetIds||[],g=r.removedTargetIds||[];e=new pr(d,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Is(n,r.document),o=r.readTime?Mt(r.readTime):U.min(),a=Et.newNoDocument(s,o),u=r.removedTargetIds||[];e=new pr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Is(n,r.document),o=r.removedTargetIds||[];e=new pr([],o,s,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Kd(s,o),u=r.targetId;e=new Nl(u,a)}}return e}function sf(n,t){let e;if(t instanceof Mn)e={update:Aa(n,t.key,t.value)};else if(t instanceof mi)e={delete:Gs(n,t.key)};else if(t instanceof ae)e={update:Aa(n,t.key,t.data),updateMask:mf(t.fieldMask)};else{if(!(t instanceof jd))return F();e={verify:Gs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ar)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw F()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:ef(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F()}(n,t.precondition)),e}function of(n,t){return n&&n.length>0?(J(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Mt(s.updateTime):Mt(o);return a.isEqual(U.min())&&(a=Mt(o)),new Ud(a,s.transformResults||[])}(e,t))):[]}function af(n,t){return{documents:[Bl(n,t.path)]}}function lf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Bl(n,s);const o=function(d){if(d.length!==0)return Ul(Ct.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(g=>function(_){return{field:xe(_.field),direction:hf(_.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Ks(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function uf(n){let t=nf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){J(r===1);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(T){const _=Fl(T);return _ instanceof Ct&&pl(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(_=>function(D){return new Cn(Me(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(e.orderBy));let u=null;e.limit&&(u=function(T){let _;return _=typeof T=="object"?T.value:T,Vr(_)?null:_}(e.limit));let h=null;e.startAt&&(h=function(T){const _=!!T.before,S=T.values||[];return new Tr(S,_)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const _=!T.before,S=T.values||[];return new Tr(S,_)}(e.endAt)),Rd(t,s,a,o,u,"F",h,d)}function cf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Fl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Me(e.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Me(e.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Me(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Me(e.unaryFilter.field);return ot.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(e){return ot.create(Me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(r=>Fl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(n):F()}function hf(n){return Xd[n]}function df(n){return Jd[n]}function ff(n){return Zd[n]}function xe(n){return{fieldPath:n.canonicalString()}}function Me(n){return ct.fromServerFormat(n.fieldPath)}function Ul(n){return n instanceof ot?function(e){if(e.op==="=="){if(ca(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NAN"}};if(ua(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ca(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NOT_NAN"}};if(ua(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xe(e.field),op:df(e.op),value:e.value}}}(n):n instanceof Ct?function(e){const r=e.getFilters().map(s=>Ul(s));return r.length===1?r[0]:{compositeFilter:{op:ff(e.op),filters:r}}}(n):F()}function mf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $l(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e,r,s,o=U.min(),a=U.min(),u=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.ct=t}}function gf(n){const t=uf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ir(t,t.limit,"L"):t}/**
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
 */class yf{constructor(){this.un=new _f}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(se.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class _f{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ht(et.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ht(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new qe(0)}static kn(){return new qe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.changes=new Qe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ef{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&wn(r.mutation,s,Rt.empty(),Q.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,e,r=H()){const s=_e();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=yn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=_e();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,H()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Ht();const a=In(),u=function(){return In()}();return e.forEach((h,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof ae)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),wn(g.mutation,d,g.mutation.getFieldMask(),Q.now())):a.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,g)=>a.set(d,g)),e.forEach((d,g)=>{var T;return u.set(d,new Ef(g,(T=a.get(d))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(t,e){const r=In();let s=new nt((a,u)=>a-u),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let g=r.get(h)||Rt.empty();g=u.applyToLocalView(d,g),r.set(h,g);const T=(s.get(u.batchId)||H()).add(h);s=s.insert(u.batchId,T)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,g=h.value,T=Al();g.forEach(_=>{if(!o.has(_)){const S=Cl(e.get(_),r.get(_));S!==null&&T.set(_,S),o=o.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):vl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(_e());let u=-1,h=o;return a.next(d=>P.forEach(d,(g,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(g)?P.resolve():this.remoteDocumentCache.getEntry(t,g).next(_=>{h=h.insert(g,_)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,H())).next(g=>({batchId:u,changes:wl(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=yn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=yn();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const d=function(T,_){return new Ge(_,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(g=>{g.forEach((T,_)=>{a=a.insert(T,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Et.newInvalidDocument(g)))});let u=yn();return a.forEach((h,d)=>{const g=o.get(h);g!==void 0&&wn(g.mutation,d,Rt.empty(),Q.now()),Nr(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class If{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:gf(s.bundledQuery),readTime:Mt(s.readTime)}}(e)),P.resolve()}}/**
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
 */class wf{constructor(){this.overlays=new nt(O.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=_e();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=_e(),o=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new nt((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=_e(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const u=_e(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>u.set(d,g)),!(u.size()>=s)););return P.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Hd(e,r));let o=this.Ir.get(e);o===void 0&&(o=H(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Af{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.Tr=new ht(at.Er),this.dr=new ht(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new O(new et([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new et([])),r=new at(e,t),s=new at(e,t+1);let o=H();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||X(t.wr,e.wr)}static Ar(t,e){return X(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ht(at.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new at(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const u=this.Dr(a.wr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(X);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new at(new O(o),0);let u=new ht(X);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.wr)),!0)},a),P.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){J(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new at(e,0),s=this.br.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.Mr=t,this.docs=function(){return new nt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=Ht();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Et.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Ht();const a=e.path,u=new O(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ld(ad(g),r)<=0||(s.has(g.key)||Nr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){F()}Or(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Rf(this)}getSize(t){return P.resolve(this.size)}}class Rf extends vf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.persistence=t,this.Nr=new Qe(e=>ci(e),hi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _i,this.targetCount=0,this.kr=qe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new qe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new oi(0),this.Kr=!1,this.Kr=!0,this.$r=new Af,this.referenceDelegate=t(this),this.Ur=new Df(this),this.indexManager=new yf,this.remoteDocumentCache=function(s){return new Sf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new pf(e),this.Gr=new If(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new bf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){B("MemoryPersistence","Starting transaction:",t);const s=new Cf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Cf extends cd{constructor(t){super(),this.currentSequenceNumber=t}}class vi{constructor(t){this.persistence=t,this.Jr=new _i,this.Yr=null}static Zr(t){return new vi(t)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=H(),s=H();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ei(t,e.fromCache,r,s)}}/**
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
 */class Vf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class kf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nc()?8:hd(Vc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Vf;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(fn()<=G.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(fn()<=G.DEBUG&&B("QueryEngine","Query:",Ne(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(fn()<=G.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):P.resolve())}Yi(t,e){if(ma(e))return P.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ir(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=H(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,u);return this.ns(e,d,a,h.readTime)?this.Yi(t,Ir(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return ma(e)||s.isEqual(U.min())?P.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?P.resolve(null):(fn()<=G.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ne(e)),this.rs(t,a,e,od(s,-1)).next(u=>u))})}ts(t,e){let r=new ht(Tl(t));return e.forEach((s,o)=>{Nr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return fn()<=G.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.Ji.getDocumentsMatchingQuery(t,e,se.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Nf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new nt(X),this._s=new Qe(o=>ci(o),hi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function xf(n,t,e,r){return new Nf(n,t,e,r)}async function ql(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=H();for(const d of s){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){u.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Mf(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,g){const T=d.batch,_=T.keys();let S=P.resolve();return _.forEach(D=>{S=S.next(()=>g.getEntry(h,D)).next(N=>{const C=d.docVersions.get(D);J(C!==null),N.version.compareTo(C)<0&&(T.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),g.addEntry(N)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=H();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function jl(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Lf(n,t){const e=$(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((g,T)=>{const _=s.get(T);if(!_)return;u.push(e.Ur.removeMatchingKeys(o,g.removedDocuments,T).next(()=>e.Ur.addMatchingKeys(o,g.addedDocuments,T)));let S=_.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?S=S.withResumeToken(dt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,r)),s=s.insert(T,S),function(N,C,x){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(_,S,g)&&u.push(e.Ur.updateTargetData(o,S))});let h=Ht(),d=H();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),u.push(Bf(o,a,t.documentUpdates).next(g=>{h=g.Ps,d=g.Is})),!r.isEqual(U.min())){const g=e.Ur.getLastRemoteSnapshotVersion(o).next(T=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(g)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function Bf(n,t,e){let r=H(),s=H();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Ht();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):B("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function Of(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ff(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Zt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ys(n,t,e){const r=$(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!xn(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function ba(n,t,e){const r=$(n);let s=U.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,g){const T=$(h),_=T._s.get(g);return _!==void 0?P.resolve(T.os.get(_)):T.Ur.getTargetData(d,g)}(r,a,xt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:H())).next(u=>(Uf(r,Pd(t),u),{documents:u,Ts:o})))}function Uf(n,t,e){let r=n.us.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Sa{constructor(){this.activeTargetIds=Md()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $f{constructor(){this.so=new Sa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Sa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class qf{_o(t){}shutdown(){}}/**
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
 */class Ra{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cr=null;function ws(){return cr===null?cr=function(){return 268435456+Math.round(2147483648*Math.random())}():cr++,"0x"+cr.toString(16)}/**
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
 */const jf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class Hf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const u=ws(),h=this.xo(e,r.toUriEncodedString());B("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(g=>(B("RestConnection",`Received RPC '${e}' ${u}: `,g),g),g=>{throw Oe("RestConnection",`RPC '${e}' ${u} failed with error: `,g,"url: ",h,"request:",s),g})}Lo(e,r,s,o,a,u){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+We}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=jf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=ws();return new Promise((a,u)=>{const h=new rl;h.setWithCredentials(!0),h.listenOnce(sl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case dr.NO_ERROR:const g=h.getResponseJson();B(yt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),a(g);break;case dr.TIMEOUT:B(yt,`RPC '${t}' ${o} timed out`),u(new M(R.DEADLINE_EXCEEDED,"Request time out"));break;case dr.HTTP_ERROR:const T=h.getStatus();if(B(yt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const D=function(C){const x=C.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(x)>=0?x:R.UNKNOWN}(S.status);u(new M(D,S.message))}else u(new M(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new M(R.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{B(yt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);B(yt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=ws(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=al(),u=ol(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");B(yt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const T=a.createWebChannel(g,h);let _=!1,S=!1;const D=new zf({Io:C=>{S?B(yt,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(_||(B(yt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),_=!0),B(yt,`RPC '${t}' stream ${s} sending:`,C),T.send(C))},To:()=>T.close()}),N=(C,x,V)=>{C.listen(x,L=>{try{V(L)}catch(q){setTimeout(()=>{throw q},0)}})};return N(T,gn.EventType.OPEN,()=>{S||(B(yt,`RPC '${t}' stream ${s} transport opened.`),D.yo())}),N(T,gn.EventType.CLOSE,()=>{S||(S=!0,B(yt,`RPC '${t}' stream ${s} transport closed`),D.So())}),N(T,gn.EventType.ERROR,C=>{S||(S=!0,Oe(yt,`RPC '${t}' stream ${s} transport errored:`,C),D.So(new M(R.UNAVAILABLE,"The operation could not be completed")))}),N(T,gn.EventType.MESSAGE,C=>{var x;if(!S){const V=C.data[0];J(!!V);const L=V,q=L.error||((x=L[0])===null||x===void 0?void 0:x.error);if(q){B(yt,`RPC '${t}' stream ${s} received error:`,q);const z=q.status;let W=function(p){const v=it[p];if(v!==void 0)return kl(v)}(z),w=q.message;W===void 0&&(W=R.INTERNAL,w="Unknown error status: "+z+" with message "+q.message),S=!0,D.So(new M(W,w)),T.close()}else B(yt,`RPC '${t}' stream ${s} received:`,V),D.bo(V)}}),N(u,il.STAT_EVENT,C=>{C.stat===Us.PROXY?B(yt,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===Us.NOPROXY&&B(yt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function As(){return typeof document<"u"?document:null}/**
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
 */function Br(n){return new tf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e,r,s,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(zt(e.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new M(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return B("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kf extends Hl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=rf(this.serializer,t),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Mt(a.readTime):U.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Qs(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=zs(h)?{documents:af(o,h)}:{query:lf(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ml(o,a.resumeToken);const d=Ks(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=br(o,a.snapshotVersion.toTimestamp());const d=Ks(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=cf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Qs(this.serializer),e.removeTarget=t,this.a_(e)}}class Wf extends Hl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return J(!!t.streamToken),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){J(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=of(t.writeResults,t.commitTime),r=Mt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Qs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>sf(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Ws(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(R.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Ws(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Qf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(zt(e),this.D_=!1):B("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Se(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=$(h);d.L_.add(4),await Bn(d),d.q_.set("Unknown"),d.L_.delete(4),await Or(d)}(this))})}),this.q_=new Qf(r,s)}}async function Or(n){if(Se(n))for(const t of n.B_)await t(!0)}async function Bn(n){for(const t of n.B_)await t(!1)}function Kl(n,t){const e=$(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ai(e)?wi(e):Ye(e).r_()&&Ii(e,t))}function Ti(n,t){const e=$(n),r=Ye(e);e.N_.delete(t),r.r_()&&Wl(e,t),e.N_.size===0&&(r.r_()?r.o_():Se(e)&&e.q_.set("Unknown"))}function Ii(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ye(n).A_(t)}function Wl(n,t){n.Q_.xe(t),Ye(n).R_(t)}function wi(n){n.Q_=new Yd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ye(n).start(),n.q_.v_()}function Ai(n){return Se(n)&&!Ye(n).n_()&&n.N_.size>0}function Se(n){return $(n).L_.size===0}function Gl(n){n.Q_=void 0}async function Xf(n){n.q_.set("Online")}async function Jf(n){n.N_.forEach((t,e)=>{Ii(n,t)})}async function Zf(n,t){Gl(n),Ai(n)?(n.q_.M_(t),wi(n)):n.q_.set("Unknown")}async function tm(n,t,e){if(n.q_.set("Online"),t instanceof xl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(n,t)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Sr(n,r)}else if(t instanceof pr?n.Q_.Ke(t):t instanceof Nl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(U.min()))try{const r=await jl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.N_.get(d);g&&o.N_.set(d,g.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const g=o.N_.get(h);if(!g)return;o.N_.set(h,g.withResumeToken(dt.EMPTY_BYTE_STRING,g.snapshotVersion)),Wl(o,h);const T=new Zt(g.target,h,d,g.sequenceNumber);Ii(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Sr(n,r)}}async function Sr(n,t,e){if(!xn(t))throw t;n.L_.add(1),await Bn(n),n.q_.set("Offline"),e||(e=()=>jl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Or(n)})}function Ql(n,t){return t().catch(e=>Sr(n,e,t))}async function Fr(n){const t=$(n),e=oe(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;em(t);)try{const s=await Of(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,nm(t,s)}catch(s){await Sr(t,s)}Yl(t)&&Xl(t)}function em(n){return Se(n)&&n.O_.length<10}function nm(n,t){n.O_.push(t);const e=oe(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Yl(n){return Se(n)&&!oe(n).n_()&&n.O_.length>0}function Xl(n){oe(n).start()}async function rm(n){oe(n).p_()}async function sm(n){const t=oe(n);for(const e of n.O_)t.m_(e.mutations)}async function im(n,t,e){const r=n.O_.shift(),s=pi.from(r,t,e);await Ql(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fr(n)}async function om(n,t){t&&oe(n).V_&&await async function(r,s){if(function(a){return Wd(a)&&a!==R.ABORTED}(s.code)){const o=r.O_.shift();oe(r).s_(),await Ql(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Fr(r)}}(n,t),Yl(n)&&Xl(n)}async function Da(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Se(e);e.L_.add(3),await Bn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Or(e)}async function am(n,t){const e=$(n);t?(e.L_.delete(2),await Or(e)):t||(e.L_.add(2),await Bn(e),e.q_.set("Unknown"))}function Ye(n){return n.K_||(n.K_=function(e,r,s){const o=$(e);return o.w_(),new Kf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Xf.bind(null,n),Ro:Jf.bind(null,n),mo:Zf.bind(null,n),d_:tm.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ai(n)?wi(n):n.q_.set("Unknown")):(await n.K_.stop(),Gl(n))})),n.K_}function oe(n){return n.U_||(n.U_=function(e,r,s){const o=$(e);return o.w_(),new Wf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rm.bind(null,n),mo:om.bind(null,n),f_:sm.bind(null,n),g_:im.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Fr(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new bi(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Si(n,t){if(zt("AsyncQueue",`${t}: ${n}`),xn(n))return new M(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=yn(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new Be(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Be)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Be;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.W_=new nt(O.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):F():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class je{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new je(t,e,Be.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class um{constructor(){this.queries=Ca(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=$(e),o=s.queries;s.queries=Ca(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new M(R.ABORTED,"Firestore shutting down"))}}function Ca(){return new Qe(n=>El(n),kr)}async function Jl(n,t){const e=$(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new lm,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Si(a,`Initialization of query '${Ne(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ri(e)}async function Zl(n,t){const e=$(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function cm(n,t){const e=$(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(s)&&(r=!0);a.z_=s}}r&&Ri(e)}function hm(n,t,e){const r=$(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Ri(n){n.Y_.forEach(t=>{t.next()})}var Xs,Va;(Va=Xs||(Xs={})).ea="default",Va.Cache="cache";class tu{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new je(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Xs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t){this.key=t}}class nu{constructor(t){this.key=t}}class dm{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=H(),this.mutatedKeys=H(),this.Aa=Tl(t),this.Ra=new Be(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Pa,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,T)=>{const _=s.get(g),S=Nr(this.query,T)?T:null,D=!!_&&this.mutatedKeys.has(_.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;_&&S?_.data.isEqual(S.data)?D!==N&&(r.track({type:3,doc:S}),C=!0):this.ga(_,S)||(r.track({type:2,doc:S}),C=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(u=!0)):!_&&S?(r.track({type:0,doc:S}),C=!0):_&&!S&&(r.track({type:1,doc:_}),C=!0,(h||d)&&(u=!0)),C&&(S?(a=a.add(S),o=N?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((g,T)=>function(S,D){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return N(S)-N(D)}(g.type,T.type)||this.Aa(g.doc,T.doc)),this.pa(r),s=s!=null&&s;const u=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new je(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pa,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=H(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new nu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new eu(r))}),e}ba(t){this.Ta=t.Ts,this.da=H();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return je.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class mm{constructor(t){this.key=t,this.va=!1}}class pm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Qe(u=>El(u),kr),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(O.comparator),this.Na=new Map,this.La=new _i,this.Ba={},this.ka=new Map,this.qa=qe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gm(n,t,e=!0){const r=lu(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await ru(r,t,e,!0),s}async function ym(n,t){const e=lu(n);await ru(e,t,!0,!1)}async function ru(n,t,e,r){const s=await Ff(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await _m(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Kl(n.remoteStore,s),u}async function _m(n,t,e,r,s){n.Ka=(T,_,S)=>async function(N,C,x,V){let L=C.view.ma(x);L.ns&&(L=await ba(N.localStore,C.query,!1).then(({documents:w})=>C.view.ma(w,L)));const q=V&&V.targetChanges.get(C.targetId),z=V&&V.targetMismatches.get(C.targetId)!=null,W=C.view.applyChanges(L,N.isPrimaryClient,q,z);return Na(N,C.targetId,W.wa),W.snapshot}(n,T,_,S);const o=await ba(n.localStore,t,!0),a=new dm(t,o.Ts),u=a.ma(o.documents),h=Ln.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Na(n,e,d.wa);const g=new fm(t,e,a);return n.Fa.set(t,g),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function vm(n,t,e){const r=$(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!kr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ys(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ti(r.remoteStore,s.targetId),Js(r,s.targetId)}).catch(Nn)):(Js(r,s.targetId),await Ys(r.localStore,s.targetId,!0))}async function Em(n,t){const e=$(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ti(e.remoteStore,r.targetId))}async function Tm(n,t,e){const r=Dm(n);try{const s=await function(a,u){const h=$(a),d=Q.now(),g=u.reduce((S,D)=>S.add(D.key),H());let T,_;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Ht(),N=H();return h.cs.getEntries(S,g).next(C=>{D=C,D.forEach((x,V)=>{V.isValidDocument()||(N=N.add(x))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,D)).next(C=>{T=C;const x=[];for(const V of u){const L=qd(V,T.get(V.key).overlayedDocument);L!=null&&x.push(new ae(V.key,L,dl(L.value.mapValue),Dt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,x,u)}).next(C=>{_=C;const x=C.applyToLocalDocumentSet(T,N);return h.documentOverlayCache.saveOverlays(S,C.batchId,x)})}).then(()=>({batchId:_.batchId,changes:wl(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new nt(X)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await On(r,s.changes),await Fr(r.remoteStore)}catch(s){const o=Si(s,"Failed to persist write");e.reject(o)}}async function su(n,t){const e=$(n);try{const r=await Lf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?J(a.va):s.removedDocuments.size>0&&(J(a.va),a.va=!1))}),await On(e,r,t)}catch(r){await Nn(r)}}function ka(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=$(a);h.onlineState=u;let d=!1;h.queries.forEach((g,T)=>{for(const _ of T.j_)_.Z_(u)&&(d=!0)}),d&&Ri(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Im(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new nt(O.comparator);a=a.insert(o,Et.newNoDocument(o,U.min()));const u=H().add(o),h=new Lr(U.min(),new Map,new nt(X),a,u);await su(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Di(r)}else await Ys(r.localStore,t,!1).then(()=>Js(r,t,e)).catch(Nn)}async function wm(n,t){const e=$(n),r=t.batch.batchId;try{const s=await Mf(e.localStore,t);ou(e,r,null),iu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await On(e,s)}catch(s){await Nn(s)}}async function Am(n,t,e){const r=$(n);try{const s=await function(a,u){const h=$(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(J(T!==null),g=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>h.localDocuments.getDocuments(d,g))})}(r.localStore,t);ou(r,t,e),iu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await On(r,s)}catch(s){await Nn(s)}}function iu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function ou(n,t,e){const r=$(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Js(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||au(n,r)})}function au(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Ti(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Di(n))}function Na(n,t,e){for(const r of e)r instanceof eu?(n.La.addReference(r.key,t),bm(n,r)):r instanceof nu?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||au(n,r.key)):F()}function bm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+e),n.xa.add(r),Di(n))}function Di(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new O(et.fromString(t)),r=n.qa.next();n.Na.set(r,new mm(e)),n.Oa=n.Oa.insert(e,r),Kl(n.remoteStore,new Zt(xt(di(e.path)),r,"TargetPurposeLimboResolution",oi.oe))}}async function On(n,t,e){const r=$(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(d=>{var g;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=Ei.Wi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const g=$(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>P.forEach(d,_=>P.forEach(_.$i,S=>g.persistence.referenceDelegate.addReference(T,_.targetId,S)).next(()=>P.forEach(_.Ui,S=>g.persistence.referenceDelegate.removeReference(T,_.targetId,S)))))}catch(T){if(!xn(T))throw T;B("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const _=T.targetId;if(!T.fromCache){const S=g.os.get(_),D=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(D);g.os=g.os.insert(_,N)}}}(r.localStore,o))}async function Sm(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){B("SyncEngine","User change. New user:",t.toKey());const r=await ql(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new M(R.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await On(e,r.hs)}}function Rm(n,t){const e=$(n),r=e.Na.get(t);if(r&&r.va)return H().add(r.key);{let s=H();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function lu(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=su.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Im.bind(null,t),t.Ca.d_=cm.bind(null,t.eventManager),t.Ca.$a=hm.bind(null,t.eventManager),t}function Dm(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Am.bind(null,t),t}class Rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Br(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return xf(this.persistence,new kf,t.initialUser,this.serializer)}Ga(t){return new Pf(vi.Zr,this.serializer)}Wa(t){return new $f}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rr.provider={build:()=>new Rr};class Zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ka(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sm.bind(null,this.syncEngine),await am(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new um}()}createDatastore(t){const e=Br(t.databaseInfo.databaseId),r=function(o){return new Hf(o)}(t.databaseInfo);return function(o,a,u,h){return new Gf(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new Yf(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>ka(this.syncEngine,e,0),function(){return Ra.D()?new Ra:new qf}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,g){const T=new pm(s,o,a,u,h,d);return g&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);B("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Bn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Zs.provider={build:()=>new Zs};/**
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
 */class uu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):zt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=ul.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Si(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function bs(n,t){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ql(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function xa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Cm(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Da(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Da(t.remoteStore,s)),n._onlineComponents=t}async function Cm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await bs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Oe("Error using user provided cache. Falling back to memory cache: "+e),await bs(n,new Rr)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await bs(n,new Rr);return n._offlineComponents}async function cu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await xa(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await xa(n,new Zs))),n._onlineComponents}function Vm(n){return cu(n).then(t=>t.syncEngine)}async function hu(n){const t=await cu(n),e=t.eventManager;return e.onListen=gm.bind(null,t.syncEngine),e.onUnlisten=vm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ym.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Em.bind(null,t.syncEngine),e}function km(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const g=new uu({next:_=>{g.Za(),a.enqueueAndForget(()=>Zl(o,T));const S=_.docs.has(u);!S&&_.fromCache?d.reject(new M(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&_.fromCache&&h&&h.source==="server"?d.reject(new M(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),T=new tu(di(u.path),g,{includeMetadataChanges:!0,_a:!0});return Jl(o,T)}(await hu(n),n.asyncQueue,t,e,r)),r.promise}function Nm(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const g=new uu({next:_=>{g.Za(),a.enqueueAndForget(()=>Zl(o,T)),_.fromCache&&h.source==="server"?d.reject(new M(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),T=new tu(u,g,{includeMetadataChanges:!0,_a:!0});return Jl(o,T)}(await hu(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function du(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ma=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n,t,e){if(!e)throw new M(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xm(n,t,e,r){if(t===!0&&r===!0)throw new M(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function La(n){if(!O.isDocumentKey(n))throw new M(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ba(n){if(O.isDocumentKey(n))throw new M(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ur(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F()}function Vt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ur(n);throw new M(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Oa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new M(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new M(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=du((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $r{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xh;switch(r.type){case"firstParty":return new ed(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ma.get(e);r&&(B("ComponentProvider","Removing Datastore"),Ma.delete(e),r.terminate())}(this),Promise.resolve()}}function Mm(n,t,e,r={}){var s;const o=(n=Vt(n,$r))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Oe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=vt.MOCK_USER;else{u=Cc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new M(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new vt(d)}n._authCredentials=new Jh(new ll(u,h))}}/**
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
 */class le{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new le(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class ne extends le{constructor(t,e,r){super(t,e,di(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new O(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Bt(n,t,...e){if(n=qt(n),fu("collection","path",t),n instanceof $r){const r=et.fromString(t,...e);return Ba(r),new ne(n,null,r)}{if(!(n instanceof wt||n instanceof ne))throw new M(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Ba(r),new ne(n.firestore,null,r)}}function Xe(n,t,...e){if(n=qt(n),arguments.length===1&&(t=ul.newId()),fu("doc","path",t),n instanceof $r){const r=et.fromString(t,...e);return La(r),new wt(n,null,new O(r))}{if(!(n instanceof wt||n instanceof ne))throw new M(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return La(r),new wt(n.firestore,n instanceof ne?n.converter:null,new O(r))}}/**
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
 */class Fa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zl(this,"async_queue_retry"),this.Vu=()=>{const r=As();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=As();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=As();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new $t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!xn(t))throw t;B("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw zt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=bi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Re extends $r{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Fa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Fa(t),this._firestoreClient=void 0,await t}}}function Lm(n,t){const e=typeof n=="object"?n:Fh(),r=typeof n=="string"?n:"(default)",s=Mh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Dc("firestore");o&&Mm(s,...o)}return s}function Pi(n){if(n._terminated)throw new M(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Bm(n),n._firestoreClient}function Bm(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,g){return new md(u,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,du(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Pm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ze(dt.fromBase64String(t))}catch(e){throw new M(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ze(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class qr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ci{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
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
 */class ki{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=/^__.*__$/;class Fm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mn(t,this.data,e,this.fieldTransforms)}}class mu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function pu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Ni{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ni(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Dr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(pu(this.Cu)&&Om.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Um{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Br(t)}Qu(t,e,r,s=!1){return new Ni({Cu:t,methodName:e,qu:r,path:ct.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jr(n){const t=n._freezeSettings(),e=Br(n._databaseId);return new Um(n._databaseId,!!t.ignoreUndefinedProperties,e)}function gu(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);xi("Data must be an object, but it was:",a,r);const u=yu(r,a);let h,d;if(o.merge)h=new Rt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const T of o.mergeFields){const _=ti(t,T,e);if(!a.contains(_))throw new M(R.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);vu(g,_)||g.push(_)}h=new Rt(g),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new Fm(new bt(u),h,d)}class zr extends Ci{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zr}}function $m(n,t,e,r){const s=n.Qu(1,t,e);xi("Data must be an object, but it was:",s,r);const o=[],a=bt.empty();be(r,(h,d)=>{const g=Mi(t,h,e);d=qt(d);const T=s.Nu(g);if(d instanceof zr)o.push(g);else{const _=Fn(d,T);_!=null&&(o.push(g),a.set(g,_))}});const u=new Rt(o);return new mu(a,u,s.fieldTransforms)}function qm(n,t,e,r,s,o){const a=n.Qu(1,t,e),u=[ti(t,r,e)],h=[s];if(o.length%2!=0)throw new M(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)u.push(ti(t,o[_])),h.push(o[_+1]);const d=[],g=bt.empty();for(let _=u.length-1;_>=0;--_)if(!vu(d,u[_])){const S=u[_];let D=h[_];D=qt(D);const N=a.Nu(S);if(D instanceof zr)d.push(S);else{const C=Fn(D,N);C!=null&&(d.push(S),g.set(S,C))}}const T=new Rt(d);return new mu(g,T,a.fieldTransforms)}function jm(n,t,e,r=!1){return Fn(e,n.Qu(r?4:3,t))}function Fn(n,t){if(_u(n=qt(n)))return xi("Unsupported field value:",t,n),yu(n,t);if(n instanceof Ci)return function(r,s){if(!pu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Fn(u,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ld(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:br(s.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:br(s.serializer,o)}}if(r instanceof Vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ze)return{bytesValue:Ml(s.serializer,r._byteString)};if(r instanceof wt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:yi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ki)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return fi(u.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ur(r)}`)}(n,t)}function yu(n,t){const e={};return cl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):be(n,(r,s)=>{const o=Fn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function _u(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Vi||n instanceof ze||n instanceof wt||n instanceof Ci||n instanceof ki)}function xi(n,t,e){if(!_u(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ur(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function ti(n,t,e){if((t=qt(t))instanceof qr)return t._internalPath;if(typeof t=="string")return Mi(n,t);throw Dr("Field path arguments must be of type string or ",n,!1,void 0,e)}const zm=new RegExp("[~\\*/\\[\\]]");function Mi(n,t,e){if(t.search(zm)>=0)throw Dr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new qr(...t.split("."))._internalPath}catch{throw Dr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Dr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(R.INVALID_ARGUMENT,u+n+h)}function vu(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Eu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Hm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Hm extends Eu{data(){return super.data()}}function Hr(n,t){return typeof t=="string"?Mi(n,t):t instanceof qr?t._internalPath:t._delegate._internalPath}/**
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
 */function Km(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Li{}class Bi extends Li{}function Kt(n,t,...e){let r=[];t instanceof Li&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Oi).length,u=o.filter(h=>h instanceof Kr).length;if(a>1||a>0&&u>0)throw new M(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Kr extends Bi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Kr(t,e,r)}_apply(t){const e=this._parse(t);return Tu(t._query,e),new le(t.firestore,t.converter,Hs(t._query,e))}_parse(t){const e=jr(t.firestore);return function(o,a,u,h,d,g,T){let _;if(d.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new M(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){$a(T,g);const S=[];for(const D of T)S.push(Ua(h,o,D));_={arrayValue:{values:S}}}else _=Ua(h,o,T)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||$a(T,g),_=jm(u,a,T,g==="in"||g==="not-in");return ot.create(d,g,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ot(n,t,e){const r=t,s=Hr("where",n);return Kr._create(s,r,e)}class Oi extends Li{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Oi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Tu(a,h),a=Hs(a,h)}(t._query,e),new le(t.firestore,t.converter,Hs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fi extends Bi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Fi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new M(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cn(o,a)}(t._query,this._field,this._direction);return new le(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Ge(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Wt(n,t="asc"){const e=t,r=Hr("orderBy",n);return Fi._create(r,e)}class Ui extends Bi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ui(t,e,r)}_apply(t){return new le(t.firestore,t.converter,Ir(t._query,this._limit,this._limitType))}}function $i(n){return Ui._create("limit",n,"F")}function Ua(n,t,e){if(typeof(e=qt(e))=="string"){if(e==="")throw new M(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vl(t)&&e.indexOf("/")!==-1)throw new M(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!O.isDocumentKey(r))throw new M(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return la(n,new O(r))}if(e instanceof wt)return la(n,e._key);throw new M(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ur(e)}.`)}function $a(n,t){if(!Array.isArray(n)||n.length===0)throw new M(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Tu(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new M(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new M(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Wm{convertValue(t,e="none"){switch(we(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return be(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>st(a.doubleValue));return new ki(o)}convertGeoPoint(t){return new Vi(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=li(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Rn(t));default:return null}}convertTimestamp(t){const e=ie(t);return new Q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);J($l(r));const s=new Dn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||zt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Iu(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wu extends Eu{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Hr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class gr extends wu{data(t={}){return super.data(t)}}class Gm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new vn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new gr(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new gr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new vn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new gr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new vn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:Qm(u.type),doc:h,oldIndex:d,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Qm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function Au(n){n=Vt(n,wt);const t=Vt(n.firestore,Re);return km(Pi(t),n._key).then(e=>tp(t,n,e))}class bu extends Wm{constructor(t){super(),this.firestore=t}convertBytes(t){return new ze(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function ue(n){n=Vt(n,le);const t=Vt(n.firestore,Re),e=Pi(t),r=new bu(t);return Km(n._query),Nm(e,n._query).then(s=>new Gm(t,r,n,s))}function Ym(n,t,e){n=Vt(n,wt);const r=Vt(n.firestore,Re),s=Iu(n.converter,t);return Wr(r,[gu(jr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Dt.none())])}function Xm(n,t,e,...r){n=Vt(n,wt);const s=Vt(n.firestore,Re),o=jr(s);let a;return a=typeof(t=qt(t))=="string"||t instanceof qr?qm(o,"updateDoc",n._key,t,e,r):$m(o,"updateDoc",n._key,t),Wr(s,[a.toMutation(n._key,Dt.exists(!0))])}function Jm(n){return Wr(Vt(n.firestore,Re),[new mi(n._key,Dt.none())])}function Zm(n,t){const e=Vt(n.firestore,Re),r=Xe(n),s=Iu(n.converter,t);return Wr(e,[gu(jr(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function Wr(n,t){return function(r,s){const o=new $t;return r.asyncQueue.enqueueAndForget(async()=>Tm(await Vm(r),s,o)),o.promise}(Pi(n),t)}function tp(n,t,e){const r=e.docs.get(t._key),s=new bu(n);return new wu(n,s,t._key,r,new vn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){We=s})(Oh),vr(new An("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Re(new Zh(r.getProvider("auth-internal")),new rd(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dn(d.options.projectId,g)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Le(ra,"4.7.3",t),Le(ra,"4.7.3","esm2017")})();const ep="55555",ei="baby-tracker-auth",np=24*60*60*1e3,rp={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},sp=Za(rp),At=Lm(sp);function ip(){const n=localStorage.getItem(ei);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<np?!0:(localStorage.removeItem(ei),!1)}catch{return!1}}function op(){const n={timestamp:Date.now()};localStorage.setItem(ei,JSON.stringify(n))}let kt=He(new Date),Pr=null,Ss=null,Rs=null,Ds=null,Ps=null,Cs=null,Vs=null,ks=null,mn=0;function He(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return t.setDate(r),t.setHours(0,0,0,0),t}function ap(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function ye(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function _t(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function qa(n){const t=String(n.getMonth()+1).padStart(2,"0"),e=String(n.getDate()).padStart(2,"0"),r=n.getFullYear(),s=n.getHours(),o=String(n.getMinutes()).padStart(2,"0"),a=s>=12?"PM":"AM",u=s%12||12;return`${t}/${e}/${r} ${u}:${o} ${a}`}function ni(n){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=n.getFullYear();return`${t[n.getDay()]}, ${e}/${r}/${s}`}function Cr(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}async function qi(){const n=document.getElementById("vitamin-d-checkbox"),t=document.getElementById("vitamin-d-status"),e=document.getElementById("vitamin-d-label-text");if(!n||!t||!e)return;const s=Cr(new Date);try{const o=await Au(Xe(At,"vitaminD",s));if(o.exists()){const a=o.data();n.checked=a.given===!0}else n.checked=!1;e.textContent=n.checked?"Vitamin D drop given":"Record Vitamin D drop",t.textContent="",t.style.display="none"}catch(o){console.error("Error loading vitamin D status:",o),t.className="error",t.textContent="Failed to load vitamin D status",t.style.display="block"}}function Su(){Vs&&clearTimeout(Vs);const n=new Date,t=new Date(n);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const e=t.getTime()-n.getTime();Vs=window.setTimeout(()=>{qi(),Su()},e)}async function lp(n){const t=n.target,e=document.getElementById("vitamin-d-status"),r=document.getElementById("vitamin-d-label-text");if(!e||!r)return;const s=new Date,o=Cr(s);try{await Ym(Xe(At,"vitaminD",o),{given:t.checked,date:Q.fromDate(s)}),r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop",e.style.display="none"}catch(a){console.error("Error saving vitamin D status:",a),e.className="error",e.textContent="Failed to save vitamin D status",e.style.display="block",t.checked=!t.checked,r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop"}}function ja(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===ep?(n.blur(),op(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Ru()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function Ru(){dp(),ji(),up(),Dp(),cp(),hp(),qi(),Su(),window.scrollTo(0,0)}function up(){const n=new Date,t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter");t&&(t.value=_t(n)),e&&(e.value=_t(n))}function cp(){[document.getElementById("bottle-amount"),document.getElementById("pump-amount"),document.getElementById("edit-bottle-amount"),document.getElementById("edit-pump-amount")].forEach(t=>{t&&(t.addEventListener("keypress",e=>{const r=e.key,s=t.value;e.key==="Backspace"||e.key==="Delete"||e.key==="Tab"||e.key==="Escape"||e.key==="Enter"||e.ctrlKey||e.metaKey||r>="0"&&r<="9"||r==="."&&s.indexOf(".")===-1||e.preventDefault()}),t.addEventListener("paste",e=>{var u;e.preventDefault();const s=(((u=e.clipboardData)==null?void 0:u.getData("text"))||"").replace(/[^0-9.]/g,""),o=s.split("."),a=o.length>2?o[0]+"."+o.slice(1).join(""):s;document.execCommand("insertText",!1,a)}))})}function hp(){const n=document.getElementById("bottle-unit"),t=document.getElementById("bottle-amount"),e=document.getElementById("pump-unit"),r=document.getElementById("pump-amount"),s=document.getElementById("edit-bottle-unit"),o=document.getElementById("edit-bottle-amount"),a=document.getElementById("edit-pump-unit"),u=document.getElementById("edit-pump-amount");n&&t&&n.addEventListener("change",()=>{hr(t,n.value)}),e&&r&&e.addEventListener("change",()=>{hr(r,e.value)}),s&&o&&s.addEventListener("change",()=>{hr(o,s.value)}),a&&u&&a.addEventListener("change",()=>{hr(u,a.value)})}function hr(n,t){const e=parseFloat(n.value);if(isNaN(e)||e<=0)return;const r=n.dataset.lastUnit||"oz";if(r===t)return;let s;if(t==="ml"&&r==="oz")s=e*29.5735;else if(t==="oz"&&r==="ml")s=e*.033814;else return;n.value=s.toFixed(2),n.dataset.lastUnit=t}function za(n){if(!n.value)return!0;const t=new Date(n.value),e=new Date;return t>e?(alert("Cannot select future times. Please select a time in the past."),n.value=ye(e),!1):!0}function Jt(n){const t=document.getElementById(n);t&&(t.addEventListener("blur",()=>{za(t)}),t.addEventListener("change",()=>{za(t)}))}function Ns(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block",qi()):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",Ae(),Ee()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",Ae()),window.scrollTo(0,0)}function dp(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",fp);const e=document.getElementById("bottle-type");e&&e.addEventListener("change",mp),gp();const r=document.getElementById("edit-bottle-type");r&&r.addEventListener("change",pp),yp(),t.addEventListener("click",_p);const s=document.getElementById("vitamin-d-checkbox");s&&s.addEventListener("change",lp);const o=document.getElementById("refresh-button");o&&o.addEventListener("click",()=>{window.location.reload()});const a=document.getElementById("entry-tab"),u=document.getElementById("timeline-tab"),h=document.getElementById("weekly-tab");a.addEventListener("click",()=>Ns("entry")),u.addEventListener("click",()=>Ns("timeline")),h.addEventListener("click",()=>Ns("weekly"));const d=document.getElementById("prev-week"),g=document.getElementById("next-week"),T=document.getElementById("current-week");d.addEventListener("click",()=>Ha(-1)),g.addEventListener("click",()=>Ha(1)),T&&T.addEventListener("click",wp);const _=document.getElementById("save-edit"),S=document.getElementById("cancel-edit");_.addEventListener("click",Sp),S.addEventListener("click",Pu);const D=document.getElementById("start-date-filter"),N=document.getElementById("end-date-filter"),C=document.getElementById("type-filter"),x=document.getElementById("today-button"),V=document.getElementById("yesterday-button"),L=document.getElementById("two-days-ago-button"),q=document.getElementById("three-days-ago-button"),z=document.getElementById("all-time-button");D.addEventListener("change",()=>Ee()),N.addEventListener("change",()=>Ee()),C.addEventListener("change",()=>Ee()),x.addEventListener("click",()=>pn("today")),V.addEventListener("click",()=>pn("yesterday")),L.addEventListener("click",()=>pn("two-days-ago")),q.addEventListener("click",()=>pn("three-days-ago")),z.addEventListener("click",()=>pn("all-time")),Jt("bottle-time"),Jt("diaper-time"),Jt("pump-start-time"),Jt("sleep-start-time"),Jt("edit-bottle-time"),Jt("edit-diaper-time"),Jt("edit-pump-start-time"),Jt("edit-sleep-start-time");const W=document.getElementById("graph-start-date"),w=document.getElementById("graph-end-date");if(W&&w){const p=new Date(2025,10,5);W.value=_t(p),w.value=_t(new Date)}const m=document.getElementById("update-graph-btn");m&&m.addEventListener("click",Ip)}function ji(){const t=ye(new Date),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("pump-start-time"),o=document.getElementById("sleep-start-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t),o&&(o.value=t)}function fp(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("pump-fields"),a=document.getElementById("sleep-fields"),u=document.getElementById("submit-entry"),h=document.getElementById("bottle-type-container");if(r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none",h.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"){r.style.display="block",u.style.display="block";const g=document.getElementById("bottle-unit"),T=document.getElementById("bottle-amount");T.dataset.lastUnit=g.value,e==="bottle-formula"&&(h.style.display="block")}else if(e==="diaper")s.style.display="block",u.style.display="block";else if(e==="pump"){o.style.display="block",u.style.display="block";const g=document.getElementById("pump-unit"),T=document.getElementById("pump-amount");T.dataset.lastUnit=g.value}else e==="sleep"?(a.style.display="block",u.style.display="block"):u.style.display="none";ji();const d=document.getElementById("sleep-end-time");d&&(d.value="")}function mp(n){const e=n.target.value,r=document.getElementById("bottle-notes"),s=document.getElementById("bottle-type-indicator"),o=document.getElementById("bottle-type-text");if(!r)return;const a=r.value,u=a.split(`
`),h=u.length>0&&(u[0]==="Bobbie"||u[0]==="Enfamil");e?(h?(u[0]=e,r.value=u.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function pp(n){const e=n.target.value,r=document.getElementById("edit-bottle-notes"),s=document.getElementById("edit-bottle-type-indicator"),o=document.getElementById("edit-bottle-type-text");if(!r)return;const a=r.value,u=a.split(`
`),h=u.length>0&&(u[0]==="Bobbie"||u[0]==="Enfamil");e?(h?(u[0]=e,r.value=u.join(`
`)):a.trim()?r.value=`${e}
${a}`:r.value=e+`
`,s&&o&&(o.textContent=e,s.style.display="block")):s&&(s.style.display="none")}function gp(){const n=document.getElementById("bottle-notes"),t=document.getElementById("bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}function yp(){const n=document.getElementById("edit-bottle-notes"),t=document.getElementById("edit-bottle-type");!n||!t||(n.addEventListener("input",()=>{const e=t.value;if(!e)return;const r=n.value,s=r.split(`
`);(s.length===0||s[0]!==e&&s[0]!=="")&&(s.length===0?n.value=e+`
`:s[0]!==e&&(s[0]=e,n.value=s.join(`
`))),r===e&&(n.value=e+`
`)}),n.addEventListener("keydown",e=>{const r=t.value;if(!r)return;const s=e.target,o=s.selectionStart,a=r.length;if(o<=a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||e.key==="a"&&(e.ctrlKey||e.metaKey))return;if(e.key==="Backspace"||e.key==="Delete"){e.preventDefault();return}if(e.key.length===1||e.key==="Enter"){if(e.preventDefault(),s.selectionStart=a+1,s.selectionEnd=a+1,e.key==="Enter"){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+`
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const u=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=u+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}async function _p(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),u=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");if(n==="bottle-formula"&&!document.getElementById("bottle-type").value)throw new Error("Formula type is required");e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:d,amount:a,unit:u,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,u=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=new Date(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:u}}else if(n==="pump"){const s=document.getElementById("pump-start-time"),o=s.value,a=parseFloat(document.getElementById("pump-amount").value),u=document.getElementById("pump-unit").value,h=document.getElementById("pump-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");e={type:"Pump",startTime:d,amount:a,unit:u,notes:h}}else if(n==="sleep"){const s=document.getElementById("sleep-start-time"),o=document.getElementById("sleep-end-time"),a=document.getElementById("sleep-notes").value;if(!s.value)throw new Error("Start time is required");const u=new Date(s.value);if(u>r)throw new Error("Cannot add entries in the future");let h;if(o.value){if(h=new Date(o.value),h>r)throw new Error("End time cannot be in the future");if(h<=u)throw new Error("End time must be after start time")}e={type:"Sleep",startTime:u,endTime:h,notes:a}}e&&(await Zm(Bt(At,"entries"),{...e,startTime:Q.fromDate(e.startTime),endTime:e.endTime?Q.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",vp(),e.type==="Feed"?await Cu():e.type==="Diaper"?await Vu():e.type==="Pump"?await ku():e.type==="Sleep"&&await Bu(),Ae(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function vp(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-type").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("pump-amount").value="",document.getElementById("pump-notes").value="",document.getElementById("sleep-end-time").value="",document.getElementById("sleep-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("bottle-type-container").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("pump-fields").style.display="none",document.getElementById("sleep-fields").style.display="none",document.getElementById("submit-entry").style.display="none",ji()}function pn(n){const t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter"),r=new Date;if(r.setHours(0,0,0,0),n==="all-time"){const s=new Date(2025,10,5);t.value=_t(s),e.value=_t(r)}else if(n==="today")t.value=_t(r),e.value=_t(r);else if(n==="yesterday"){const s=new Date(r);s.setDate(s.getDate()-1),t.value=_t(s),e.value=_t(s)}else if(n==="two-days-ago"){const s=new Date(r);s.setDate(s.getDate()-2),t.value=_t(s),e.value=_t(s)}else if(n==="three-days-ago"){const s=new Date(r);s.setDate(s.getDate()-3),t.value=_t(s),e.value=_t(s)}Ee()}async function Ee(){const n=document.getElementById("timeline-list"),t=document.getElementById("timeline-loading"),e=document.getElementById("start-date-filter").value,r=document.getElementById("end-date-filter").value,s=document.getElementById("type-filter").value;t.style.display="block",n.innerHTML="";const o=document.querySelector(".filter-summary");o&&o.remove();try{let a=Kt(Bt(At,"entries"),Wt("startTime","desc"));if(e&&r){const[d,g,T]=e.split("-").map(Number),_=new Date(d,g-1,T,0,0,0,0),[S,D,N]=r.split("-").map(Number),C=new Date(S,D-1,N,23,59,59,999);a=Kt(Bt(At,"entries"),Ot("startTime",">=",Q.fromDate(_)),Ot("startTime","<=",Q.fromDate(C)),Wt("startTime","desc"))}const u=await ue(a),h={bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleep:{totalMs:0,sessions:0}};if(u.empty)n.innerHTML="<p>No entries found.</p>";else{let d="",g=!1;if(u.forEach(T=>{const _=T.data(),S=T.id;if(s!=="all"){let m="";if(_.type==="Feed"&&_.subType==="Breast Milk"?m="bottle-breast-milk":_.type==="Feed"&&_.subType==="Formula"?m="bottle-formula":_.type==="Diaper"?m="diaper-all":_.type==="Pump"?m="pump":_.type==="Sleep"&&(m="sleep"),s==="bottle-all"){if(_.type!=="Feed")return}else if(s==="diaper-all"){if(_.type!=="Diaper")return}else if(s==="diaper-pee"){if(_.type!=="Diaper"||_.diaperType!=="Pee"&&_.diaperType!=="Mixed")return}else if(s==="diaper-poo"){if(_.type!=="Diaper"||_.diaperType!=="Poo"&&_.diaperType!=="Mixed")return}else if(m!==s)return}if(_.type==="Feed"){const m=re(_.amount,_.unit);h.bottles.total+=m,h.bottles.sessions++,_.subType==="Breast Milk"?h.bottles.breastMilk+=m:_.subType==="Formula"&&(h.bottles.formula+=m)}else if(_.type==="Diaper")h.diapers.total++,_.diaperType==="Pee"?h.diapers.pee++:_.diaperType==="Poo"?h.diapers.poo++:_.diaperType==="Mixed"&&h.diapers.mixed++;else if(_.type==="Pump"){const m=re(_.amount,_.unit);h.pumps.total+=m,h.pumps.sessions++}else if(_.type==="Sleep"&&(h.sleep.sessions++,_.endTime)){const m=_.startTime.toDate().getTime(),p=_.endTime.toDate().getTime();h.sleep.totalMs+=p-m}g=!0;const D=_.startTime.toDate(),N=ni(D);if(N!==d){d=N;const m=document.createElement("div");m.className="timeline-date-header",m.textContent=N,n.appendChild(m)}const C=document.createElement("div");C.className="timeline-entry";let x=_.type,V="",L="";if(_.type==="Feed")x=`Bottle - ${_.subType}`,V=`<div class="timeline-entry-details">Amount: ${Nt(_.amount,_.unit)}</div>`,L="#d9ebf2";else if(_.type==="Breast Feed")x="Breast Feed",V="",L="#d9ebf2";else if(_.type==="Diaper")V=`<div class="timeline-entry-details">Type: ${_.diaperType}</div>`,L="#fce2d4";else if(_.type==="Pump")V=`<div class="timeline-entry-details">Amount: ${Nt(_.amount,_.unit)}</div>`,L="#e2daf2";else if(_.type==="Sleep")if(x="Sleep",L="#d4e8d4",_.endTime){const m=_.startTime.toDate(),p=_.endTime.toDate(),v=p.getTime()-m.getTime(),E=Math.floor(v/(1e3*60*60)),I=Math.floor(v%(1e3*60*60)/(1e3*60));V=`<div class="timeline-entry-details">Duration: ${E}h ${I}m</div>`,V+=`<div class="timeline-entry-details">End: ${qa(p)}</div>`}else V='<div class="timeline-entry-details">In progress</div>';C.style.backgroundColor=L;const q=_.notes?`<div class="timeline-entry-notes">${_.notes.replace(/\n/g,"<br>")}</div>`:"";let z="";if(_.type==="Diaper"&&(_.diaperType==="Poo"||_.diaperType==="Mixed")){const m=D.getTime(),p=[];u.forEach(E=>{const I=E.data();I.type==="Diaper"&&(I.diaperType==="Poo"||I.diaperType==="Mixed")&&p.push({time:I.startTime.toDate().getTime()})}),p.sort((E,I)=>I.time-E.time);const v=p.findIndex(E=>E.time===m);if(v<p.length-1){const E=p[v+1].time;z=`<div class="timeline-entry-details" style="color: #666; font-style: italic;">${((m-E)/(1e3*60*60)).toFixed(1)} hours since previous poo</div>`}}C.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${x}</span>
                        <span class="timeline-entry-time">${qa(D)}</span>
                    </div>
                    ${V}
                    ${q}
                    ${z}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${S}">Edit</button>
                        <button class="delete-button" data-id="${S}">Delete</button>
                    </div>
                `;const W=C.querySelector(".edit-button"),w=C.querySelector(".delete-button");W.addEventListener("click",()=>bp(S,_)),w.addEventListener("click",()=>Rp(S)),n.appendChild(C)}),!g)n.innerHTML="<p>No entries match the selected filters.</p>";else{const T=document.createElement("div");T.className="filter-summary";let _='<div class="summary-header">Summary</div><div class="summary-stats">';if((s==="all"||s==="bottle-breast-milk"||s==="bottle-formula"||s==="bottle-all")&&(_+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Bottles</div>
                            <div class="stat-line">Number of feeds: ${h.bottles.sessions}</div>
                            <div class="stat-line">Breast Milk: ${Nt(h.bottles.breastMilk,"oz")}</div>
                            <div class="stat-line">Formula: ${Nt(h.bottles.formula,"oz")}</div>
                            <div class="stat-line">Total volume: ${Nt(h.bottles.total,"oz")}</div>
                        </div>
                    `),s==="all"||s==="diaper-all"||s==="diaper-pee"||s==="diaper-poo"){const D=h.diapers.pee+h.diapers.mixed,N=h.diapers.poo+h.diapers.mixed;_+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${D}</div>
                            <div class="stat-line">Poo: ${N}</div>
                        </div>
                    `}if((s==="all"||s==="pump")&&(_+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Pumps</div>
                            <div class="stat-line">Total volume: ${Nt(h.pumps.total,"oz")}</div>
                            <div class="stat-line">Number of sessions: ${h.pumps.sessions}</div>
                        </div>
                    `),s==="all"||s==="sleep"){const D=Math.floor(h.sleep.totalMs/36e5),N=Math.floor(h.sleep.totalMs%(1e3*60*60)/(1e3*60));_+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Sleep</div>
                            <div class="stat-line">Total sleep: ${D}h ${N}m</div>
                            <div class="stat-line">Number of sleep: ${h.sleep.sessions}</div>
                        </div>
                    `}_+="</div>",T.innerHTML=_;const S=document.querySelector(".filter-section");S&&S.parentNode&&S.parentNode.insertBefore(T,n)}}}catch{n.innerHTML='<p class="error">Failed to load timeline</p>'}finally{t.style.display="none"}}function Du(n,t,e){let r=0;for(const s of n){if(!s.endTime)continue;const o=Math.max(s.startTime.getTime(),t.getTime()),a=Math.min(s.endTime.getTime(),e.getTime());a>o&&(r+=a-o)}return r}function Ep(n){const t=Math.floor(n/36e5),e=Math.floor(n%(1e3*60*60)/(1e3*60));return`${t}h ${e}m`}async function Ae(){const n=++mn,t=document.getElementById("weekly-stats"),e=document.getElementById("weekly-loading"),r=document.getElementById("week-range"),s=document.getElementById("prev-week"),o=document.getElementById("next-week"),a=document.getElementById("current-week"),u=new Date(2025,10,5),h=He(u),g=He(new Date),T=new Date(kt);T.setHours(0,0,0,0),T<h&&(kt=new Date(h)),T.getTime()<=h.getTime()?s.disabled=!0:s.disabled=!1,T.getTime()>=g.getTime()?o.disabled=!0:o.disabled=!1,a&&(T.getTime()===g.getTime()?(a.disabled=!0,a.style.backgroundColor="#999",a.style.color="#ccc",a.style.cursor="default"):(a.disabled=!1,a.style.backgroundColor="",a.style.color="",a.style.cursor="pointer"));const _=ap(kt);r.textContent=`${ni(kt).split(",")[1].trim()} - ${ni(_).split(",")[1].trim()}`,e.style.display="block",t.innerHTML="";try{const S=Kt(Bt(At,"entries"),Ot("startTime",">=",Q.fromDate(kt)),Ot("startTime","<=",Q.fromDate(_)),Wt("startTime","asc")),D=await ue(S);if(n!==mn)return;const N=new Date("2025-11-11");N.setHours(0,0,0,0);const C={},x=[];for(let m=0;m<7;m++){const p=new Date(kt);if(p.setDate(p.getDate()+m),p.setHours(0,0,0,0),p>=N){const v=Cr(p);x.push(v)}}if(x.length>0){const m=await Promise.all(x.map(p=>Au(Xe(At,"vitaminD",p))));x.forEach((p,v)=>{var I;const E=m[v];C[p]=E.exists()&&((I=E.data())==null?void 0:I.given)===!0})}if(n!==mn)return;const V=[];D.forEach(m=>{const p=m.data();p.type==="Sleep"&&V.push({startTime:p.startTime.toDate(),endTime:p.endTime?p.endTime.toDate():null})});const L={};for(let m=0;m<7;m++){const p=new Date(kt);p.setDate(p.getDate()+m),p.setHours(0,0,0,0);const v=`${p.getFullYear()}-${p.getMonth()}-${p.getDate()}`,E=Cr(p),I=new Date(p);I.setHours(0,0,0,0);const y=new Date(p);y.setHours(23,59,59,999),L[v]={date:new Date(p),vitaminD:p>=N?C[E]===!0:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleepMs:Du(V,I,y)}}D.forEach(m=>{const p=m.data(),v=p.startTime.toDate(),E=new Date(v);E.setHours(0,0,0,0);const I=`${E.getFullYear()}-${E.getMonth()}-${E.getDate()}`;if(L[I]){if(p.type==="Feed"){const y=re(p.amount,p.unit);L[I].bottles.total+=y,L[I].bottles.sessions++,p.subType==="Breast Milk"?L[I].bottles.breastMilk+=y:p.subType==="Formula"&&(L[I].bottles.formula+=y)}else if(p.type==="Breast Feed")L[I].bottles.sessions++;else if(p.type==="Diaper")L[I].diapers.total++,p.diaperType==="Pee"?L[I].diapers.pee++:p.diaperType==="Poo"?L[I].diapers.poo++:p.diaperType==="Mixed"&&L[I].diapers.mixed++;else if(p.type==="Pump"){const y=re(p.amount,p.unit);L[I].pumps.total+=y,L[I].pumps.sessions++}}});const q=Object.keys(L).map(m=>L[m]).sort((m,p)=>m.date.getTime()-p.date.getTime()),z=document.createElement("div");z.className="weekly-scroll-container";const W=new Date;W.setHours(0,0,0,0);let w=-1;q.forEach((m,p)=>{const v=document.createElement("div");v.className="day-stats";const E=new Date(m.date);E.setHours(0,0,0,0),W.getTime()===E.getTime()&&(v.classList.add("current-day"),w=p);const I=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][m.date.getDay()],y=`${m.date.getMonth()+1}/${m.date.getDate()}`,j=m.diapers.pee+m.diapers.mixed,ce=m.diapers.poo+m.diapers.mixed;let $n="";if(m.vitaminD!==null){const he=m.vitaminD?"Yes":"No";$n=`
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${m.vitaminD?"#4caf50":"#f44336"}; font-weight: bold;">${he}</div>
                    </div>
                `}v.innerHTML=`
                <div class="day-stats-header">${I}<br>${y}</div>
                ${$n}
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${m.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${Nt(m.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line">Formula: ${Nt(m.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total volume: ${Nt(m.bottles.total,"oz")}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${j}</div>
                    <div class="stat-line">Poo: ${ce}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${Nt(m.pumps.total,"oz")}</div>
                    <div class="stat-line">Number of sessions: ${m.pumps.sessions}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${Ep(m.sleepMs)}</div>
                </div>
            `,z.appendChild(v)}),t.appendChild(z),w!==-1&&setTimeout(()=>{const m=z.children[w];if(m){const p=z.offsetWidth,v=m.offsetWidth,E=m.offsetLeft-p/2+v/2;z.scrollTo({left:Math.max(0,E),behavior:"smooth"})}},100)}catch{n===mn&&(t.innerHTML='<p class="error">Failed to load weekly view</p>')}finally{n===mn&&(e.style.display="none",await Tp())}}async function Tp(){var S,D,N,C,x,V;const n=document.getElementById("json-content"),t=document.getElementById("toggle-json"),e=document.getElementById("copy-json"),r=document.querySelector(".json-tabs"),s=document.getElementById("feeds-json-tab"),o=document.getElementById("diapers-json-tab"),a=document.getElementById("pumps-json-tab"),u=document.getElementById("sleep-json-tab");if(!n||!t||!e)return;let h="feeds",d=[],g=[],T=[],_=[];try{const L=Kt(Bt(At,"entries"),Wt("startTime","desc"));(await ue(L)).docs.forEach(y=>{const j=y.data();j.type==="Feed"?d.push({type:j.type,subType:j.subType,startTime:j.startTime.toDate().toISOString(),amount:j.amount,unit:j.unit,notes:j.notes||""}):j.type==="Diaper"?g.push({type:j.type,startTime:j.startTime.toDate().toISOString(),diaperType:j.diaperType,notes:j.notes||""}):j.type==="Pump"?T.push({type:j.type,startTime:j.startTime.toDate().toISOString(),amount:j.amount,unit:j.unit,notes:j.notes||""}):j.type==="Sleep"&&_.push({type:j.type,startTime:j.startTime.toDate().toISOString(),endTime:j.endTime?j.endTime.toDate().toISOString():null,notes:j.notes||""})});const z=()=>{let y;h==="feeds"?y=d:h==="diapers"?y=g:h==="sleep"?y=_:y=T;const j=JSON.stringify(y,null,2);return n.textContent=j,j};let W=z();const w=t.cloneNode(!0),m=e.cloneNode(!0),p=s==null?void 0:s.cloneNode(!0),v=o==null?void 0:o.cloneNode(!0),E=a==null?void 0:a.cloneNode(!0),I=u==null?void 0:u.cloneNode(!0);(S=t.parentNode)==null||S.replaceChild(w,t),(D=e.parentNode)==null||D.replaceChild(m,e),s&&p&&((N=s.parentNode)==null||N.replaceChild(p,s)),o&&v&&((C=o.parentNode)==null||C.replaceChild(v,o)),a&&E&&((x=a.parentNode)==null||x.replaceChild(E,a)),u&&I&&((V=u.parentNode)==null||V.replaceChild(I,u)),w.addEventListener("click",()=>{const y=n.style.display==="none";n.style.display=y?"block":"none",m.style.display=y?"block":"none",r&&(r.style.display=y?"flex":"none"),w.textContent=y?"Hide JSON Data":"Show JSON Data"}),m.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(W);const y=m.textContent;m.textContent="✓",setTimeout(()=>{m.textContent=y},2e3)}catch{alert("Failed to copy to clipboard")}}),p&&p.addEventListener("click",()=>{h="feeds",p.classList.add("active"),v.classList.remove("active"),E.classList.remove("active"),I.classList.remove("active"),W=z()}),v&&v.addEventListener("click",()=>{h="diapers",v.classList.add("active"),p.classList.remove("active"),E.classList.remove("active"),I.classList.remove("active"),W=z()}),E&&E.addEventListener("click",()=>{h="pumps",E.classList.add("active"),p.classList.remove("active"),v.classList.remove("active"),I.classList.remove("active"),W=z()}),I&&I.addEventListener("click",()=>{h="sleep",I.classList.add("active"),p.classList.remove("active"),v.classList.remove("active"),E.classList.remove("active"),W=z()})}catch{n.textContent="Failed to load data"}}async function Ip(){const n=document.getElementById("graph-start-date").value,t=document.getElementById("graph-end-date").value;if(!n||!t){alert("Please select both start and end dates");return}const e=[];if(document.querySelectorAll(".graph-checkbox:checked").forEach(x=>{e.push(x.dataset.series)}),e.length===0){alert("Please select at least one data series to plot");return}const r=new Date(n);r.setHours(0,0,0,0);const s=new Date(t);s.setHours(23,59,59,999);const o=Kt(Bt(At,"entries"),Ot("startTime",">=",Q.fromDate(r)),Ot("startTime","<=",Q.fromDate(s)),Wt("startTime","asc")),a=await ue(o),u={},h=new Date(r);for(;h<=s;){const x=_t(h);u[x]={"bottle-breast-milk":0,"bottle-formula":0,"bottle-all":0,"diaper-pee":0,"diaper-poo":0,"diaper-mixed":0,"diaper-all":0,pump:0,sleep:0},h.setDate(h.getDate()+1)}const d=[];if(a.forEach(x=>{const V=x.data(),L=V.startTime.toDate(),q=_t(L);if(u[q]){if(V.type==="Feed"&&V.subType==="Breast Milk"){const z=re(V.amount,V.unit);u[q]["bottle-breast-milk"]+=z,u[q]["bottle-all"]+=z}else if(V.type==="Feed"&&V.subType==="Formula"){const z=re(V.amount,V.unit);u[q]["bottle-formula"]+=z,u[q]["bottle-all"]+=z}else if(V.type==="Diaper")(V.diaperType==="Pee"||V.diaperType==="Mixed")&&u[q]["diaper-pee"]++,(V.diaperType==="Poo"||V.diaperType==="Mixed")&&u[q]["diaper-poo"]++,V.diaperType==="Mixed"&&u[q]["diaper-mixed"]++,u[q]["diaper-all"]++;else if(V.type==="Pump"){const z=re(V.amount,V.unit);u[q].pump+=z}}V.type==="Sleep"&&d.push({startTime:V.startTime.toDate(),endTime:V.endTime?V.endTime.toDate():null})}),e.includes("sleep"))for(const x of Object.keys(u)){const[V,L,q]=x.split("-").map(Number),z=new Date(V,L-1,q,0,0,0,0),W=new Date(V,L-1,q,23,59,59,999),w=Du(d,z,W);u[x].sleep=parseFloat((w/(1e3*60*60)).toFixed(1))}const g=Object.keys(u).sort(),T=[],_={"bottle-breast-milk":"#4CAF50","bottle-formula":"#2196F3","bottle-all":"#9C27B0","diaper-pee":"#FFEB3B","diaper-poo":"#795548","diaper-mixed":"#FF9800","diaper-all":"#607D8B",pump:"#E91E63",sleep:"#00897B"},S={"bottle-breast-milk":"Bottle - Breast Milk","bottle-formula":"Bottle - Formula","bottle-all":"Bottle - All","diaper-pee":"Diaper - Pee","diaper-poo":"Diaper - Poo","diaper-mixed":"Diaper - Mixed","diaper-all":"Diaper - All",pump:"Pump",sleep:"Sleep (hours)"};e.forEach(x=>{T.push({label:S[x],data:g.map(V=>u[V][x]),borderColor:_[x],backgroundColor:_[x]+"33",tension:.1,fill:!1})});const N=document.getElementById("data-chart").getContext("2d");ks&&ks.destroy(),ks=new window.Chart(N,{type:"line",data:{labels:g.map(x=>{const[,V,L]=x.split("-");return`${V}/${L}`}),datasets:T},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:"Baby Tracker Data"},tooltip:{enabled:!0,callbacks:{label:function(x){let V=x.dataset.label||"";V&&(V+=": ");const L=x.parsed.y,q=x.dataset.label.toLowerCase();return q.includes("diaper")?V+=Math.round(L):q.includes("sleep")?V+=L.toFixed(1)+" hrs":V+=L.toFixed(1)+" oz",V}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(x){return e.every(L=>L.startsWith("diaper-"))?Math.round(x):x%1===0?x:x.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count / Hours"}}}}});const C=document.querySelector(".chart-container");C&&C.classList.add("active")}function Ha(n){const t=new Date(2025,10,5),e=He(t),s=He(new Date),o=new Date(kt);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const u=new Date(s);u.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>u.getTime()||(kt=o,Ae()))}function wp(){kt=He(new Date),Ae()}function re(n,t){return t==="ml"?n*.033814:n}function Ap(n,t){return t==="oz"?n*29.5735:n}function Nt(n,t){const e=re(n,t),r=Ap(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function bp(n,t){Pr=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields"),a=document.getElementById("edit-sleep-fields");r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none";const u=t.startTime.toDate();if(t.type==="Feed"){r.style.display="block";const h=document.getElementById("edit-bottle-unit"),d=document.getElementById("edit-bottle-amount"),g=document.getElementById("edit-bottle-type-container"),T=document.getElementById("edit-bottle-type");document.getElementById("edit-bottle-time").value=ye(u),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";const _=document.getElementById("edit-bottle-type-indicator"),S=document.getElementById("edit-bottle-type-text");if(t.subType==="Formula"){g.style.display="block";const N=(t.notes||"").split(`
`)[0];N==="Bobbie"||N==="Enfamil"?(T.value=N,_&&S&&(S.textContent=N,_.style.display="block")):(T.value="",_&&(_.style.display="none"))}else g.style.display="none",T.value="",_&&(_.style.display="none")}else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=ye(u),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const h=document.getElementById("edit-pump-unit"),d=document.getElementById("edit-pump-amount");document.getElementById("edit-pump-start-time").value=ye(u),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}else t.type==="Sleep"&&(a.style.display="block",document.getElementById("edit-sleep-start-time").value=ye(u),t.endTime?document.getElementById("edit-sleep-end-time").value=ye(t.endTime.toDate()):document.getElementById("edit-sleep-end-time").value="",document.getElementById("edit-sleep-notes").value=t.notes||"");e.style.display="block"}function Pu(){const n=document.getElementById("edit-modal");n.style.display="none",Pr=null;const t=document.getElementById("edit-status");t.style.display="none"}async function Sp(){if(!Pr)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields"),s=document.getElementById("edit-sleep-fields");let o={};const a=new Date;if(t.style.display==="block"){const u=document.getElementById("edit-bottle-time"),h=u.value,d=parseFloat(document.getElementById("edit-bottle-amount").value),g=document.getElementById("edit-bottle-unit").value,T=document.getElementById("edit-bottle-notes").value,_=document.getElementById("edit-bottle-type-container"),S=document.getElementById("edit-bottle-type").value;if(!h)throw new Error("Start time is required");const D=new Date(u.value);if(D>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");if(_.style.display!=="none"&&!S)throw new Error("Formula type is required");o={startTime:Q.fromDate(D),amount:d,unit:g,notes:T}}else if(e.style.display==="block"){const u=document.getElementById("edit-diaper-time"),h=u.value,d=document.getElementById("edit-diaper-type").value,g=document.getElementById("edit-diaper-notes").value;if(!h)throw new Error("Start time is required");const T=new Date(u.value);if(T>a)throw new Error("Cannot set time in the future");if(!d)throw new Error("Diaper type is required");o={startTime:Q.fromDate(T),diaperType:d,notes:g}}else if(r.style.display==="block"){const u=document.getElementById("edit-pump-start-time"),h=u.value,d=parseFloat(document.getElementById("edit-pump-amount").value),g=document.getElementById("edit-pump-unit").value,T=document.getElementById("edit-pump-notes").value;if(!h)throw new Error("Start time is required");const _=new Date(u.value);if(_>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");o={startTime:Q.fromDate(_),amount:d,unit:g,notes:T}}else if(s.style.display==="block"){const u=document.getElementById("edit-sleep-start-time"),h=document.getElementById("edit-sleep-end-time"),d=document.getElementById("edit-sleep-notes").value;if(!u.value)throw new Error("Start time is required");const g=new Date(u.value);if(g>a)throw new Error("Cannot set time in the future");if(o={startTime:Q.fromDate(g),notes:d},h.value){const T=new Date(h.value);if(T>a)throw new Error("End time cannot be in the future");if(T<=g)throw new Error("End time must be after start time");o.endTime=Q.fromDate(T)}else o.endTime=null}await Xm(Xe(At,"entries",Pr),o),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(async()=>{Pu(),Ee(),Ae(),await zi()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function Rp(n){if(confirm("Are you sure you want to delete this entry?"))try{await Jm(Xe(At,"entries",n)),Ee(),Ae(),await zi()}catch{alert("Failed to delete entry")}}async function Dp(){await zi(),Ss&&clearInterval(Ss),Rs&&clearInterval(Rs),Ds&&clearInterval(Ds),Ps&&clearInterval(Ps),Cs&&clearInterval(Cs),Ss=window.setInterval(()=>Nu(),1e3),Rs=window.setInterval(()=>xu(),1e3),Ds=window.setInterval(()=>Mu(),1e3),Ps=window.setInterval(()=>Lu(),1e3),Cs=window.setInterval(()=>Ou(),1e3)}async function zi(){await Promise.all([Cu(),Vu(),ku(),Bu()])}async function Cu(){try{const n=Kt(Bt(At,"entries"),Ot("type","==","Feed"),Wt("startTime","desc"),$i(1)),t=await ue(n);if(t.empty)localStorage.removeItem("lastBottleTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastBottleTime",r.toISOString())}Nu()}catch(n){console.error("Error fetching last bottle time:",n)}}async function Vu(){try{const n=Kt(Bt(At,"entries"),Ot("type","==","Diaper"),Wt("startTime","desc")),t=await ue(n);let e,r;t.forEach(s=>{const o=s.data(),a=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&e===void 0&&(e=a),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&r===void 0&&(r=a)}),e!==void 0?localStorage.setItem("lastPeeTime",e.toISOString()):localStorage.removeItem("lastPeeTime"),r!==void 0?localStorage.setItem("lastPooTime",r.toISOString()):localStorage.removeItem("lastPooTime"),xu(),Mu()}catch(n){console.error("Error fetching last diaper times:",n)}}async function ku(){try{const n=Kt(Bt(At,"entries"),Ot("type","==","Pump"),Wt("startTime","desc"),$i(1)),t=await ue(n);if(t.empty)localStorage.removeItem("lastPumpTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastPumpTime",r.toISOString())}Lu()}catch(n){console.error("Error fetching last pump time:",n)}}function Un(n,t){if(!n)return t;const e=new Date(n),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),u=Math.floor(s%(1e3*60)/1e3);return o>0?`${o}h ${a}m ${u}s`:a>0?`${a}m ${u}s`:`${u}s`}function Nu(){const n=document.getElementById("last-bottle-value");if(!n)return;const t=localStorage.getItem("lastBottleTime");if(!t){n.innerHTML="No bottles recorded";return}const e=Un(t,"No bottles recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),u=[];if(a>3){u.push("in the next minute");for(let d=1;d<=2;d++){const g=new Date(s.getTime()+d*3*60*60*1e3),T=g.getHours(),_=String(g.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",D=T%12||12;u.push(`${D}:${_} ${S}`)}}else for(let d=1;d<=3;d++){const g=new Date(r.getTime()+d*3*60*60*1e3),T=g.getHours(),_=String(g.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",D=T%12||12;u.push(`${D}:${_} ${S}`)}const h=u.map((d,g)=>`+ ${(g+1)*3} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${h}</span>`}function xu(){const n=document.getElementById("last-pee-value");if(!n)return;const t=localStorage.getItem("lastPeeTime");n.textContent=Un(t,"No pee recorded")}function Mu(){const n=document.getElementById("last-poo-value");if(!n)return;const t=localStorage.getItem("lastPooTime");n.textContent=Un(t,"No poo recorded")}function Lu(){const n=document.getElementById("last-pump-value");if(!n)return;const t=localStorage.getItem("lastPumpTime");if(!t){n.innerHTML="No pumps recorded";return}const e=Un(t,"No pumps recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),u=[];if(a>4){u.push("in the next minute");for(let d=1;d<=2;d++){const g=new Date(s.getTime()+d*4*60*60*1e3),T=g.getHours(),_=String(g.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",D=T%12||12;u.push(`${D}:${_} ${S}`)}}else for(let d=1;d<=3;d++){const g=new Date(r.getTime()+d*4*60*60*1e3),T=g.getHours(),_=String(g.getMinutes()).padStart(2,"0"),S=T>=12?"pm":"am",D=T%12||12;u.push(`${D}:${_} ${S}`)}const h=u.map((d,g)=>`+ ${(g+1)*4} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${h}</span>`}async function Bu(){try{const n=Kt(Bt(At,"entries"),Ot("type","==","Sleep"),Wt("startTime","desc"),$i(1)),t=await ue(n);if(t.empty)localStorage.removeItem("lastSleepEndTime");else{const e=t.docs[0].data();e.endTime?localStorage.setItem("lastSleepEndTime",e.endTime.toDate().toISOString()):localStorage.removeItem("lastSleepEndTime")}Ou()}catch(n){console.error("Error fetching last sleep end time:",n)}}function Ou(){const n=document.getElementById("time-awake-value");if(!n)return;const t=localStorage.getItem("lastSleepEndTime");n.textContent=Un(t,"No sleep recorded")}window.addEventListener("DOMContentLoaded",()=>{var n,t;if(ip()){const e=document.getElementById("passcode-screen"),r=document.getElementById("app");e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Ru()}else(n=document.getElementById("passcode-submit"))==null||n.addEventListener("click",ja),(t=document.getElementById("passcode-input"))==null||t.addEventListener("keypress",e=>{e.key==="Enter"&&ja()})});
