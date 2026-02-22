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
 */const Ja=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},wu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,D=d&63;h||(D=64,a||(w=64)),r.push(e[m],e[E],e[w],e[D])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ja(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||E==null)throw new Au;const w=o<<2|c>>4;if(r.push(w),d!==64){const D=c<<4&240|d>>2;if(r.push(D),E!==64){const P=d<<6&192|E;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Au extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bu=function(n){const t=Ja(n);return Za.encodeByteArray(t,!0)},Ir=function(n){return bu(n).replace(/\./g,"")},Su=function(n){try{return Za.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Uu="FirebaseError";class Ze extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Uu,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?$u(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ze(s,c,r)}}function $u(n,t){return n.replace(qu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const qu=/\{\$([^}]+)}/g;function Us(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ta(o)&&ta(a)){if(!Us(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
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
 */function Zt(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class ju{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Nu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hu(t))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ae){return this.instances.has(t)}getOptions(t=Ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ae){return this.component?this.component.multipleInstances?t:Ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zu(n){return n===Ae?void 0:n}function Hu(n){return n.instantiationMode==="EAGER"}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Wu={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Gu=J.INFO,Qu={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Yu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Qu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nl{constructor(t){this.name=t,this._logLevel=Gu,this._logHandler=Yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Xu=(n,t)=>t.some(e=>n instanceof e);let ea,na;function Ju(){return ea||(ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zu(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,$s=new WeakMap,sl=new WeakMap,ws=new WeakMap,hi=new WeakMap;function th(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ce(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&rl.set(e,n)}).catch(()=>{}),hi.set(t,n),t}function eh(n){if($s.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});$s.set(n,t)}let qs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return $s.get(n);if(t==="objectStoreNames")return n.objectStoreNames||sl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ce(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function nh(n){qs=n(qs)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(As(this),t,...e);return sl.set(r,t.sort?t.sort():[t]),ce(r)}:Zu().includes(n)?function(...t){return n.apply(As(this),t),ce(rl.get(this))}:function(...t){return ce(n.apply(As(this),t))}}function sh(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&eh(n),Xu(n,Ju())?new Proxy(n,qs):n)}function ce(n){if(n instanceof IDBRequest)return th(n);if(ws.has(n))return ws.get(n);const t=sh(n);return t!==n&&(ws.set(n,t),hi.set(t,n)),t}const As=n=>hi.get(n);function ih(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=ce(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ce(a.result),h.oldVersion,h.newVersion,ce(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const oh=["get","getKey","getAll","getAllKeys","count"],ah=["put","add","delete","clear"],bs=new Map;function ra(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bs.get(t))return bs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=ah.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return bs.set(t,o),o}nh(n=>({...n,get:(t,e,r)=>ra(t,e)||n.get(t,e,r),has:(t,e)=>!!ra(t,e)||n.has(t,e)}));/**
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
 */const te=new nl("@firebase/app"),uh="@firebase/app-compat",hh="@firebase/analytics-compat",dh="@firebase/analytics",fh="@firebase/app-check-compat",mh="@firebase/app-check",ph="@firebase/auth",gh="@firebase/auth-compat",yh="@firebase/database",_h="@firebase/data-connect",Eh="@firebase/database-compat",vh="@firebase/functions",Th="@firebase/functions-compat",Ih="@firebase/installations",wh="@firebase/installations-compat",Ah="@firebase/messaging",bh="@firebase/messaging-compat",Sh="@firebase/performance",Dh="@firebase/performance-compat",Rh="@firebase/remote-config",Ph="@firebase/remote-config-compat",Ch="@firebase/storage",Vh="@firebase/storage-compat",kh="@firebase/firestore",Nh="@firebase/vertexai-preview",xh="@firebase/firestore-compat",Mh="firebase",Bh="10.14.1";/**
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
 */const wr=new Map,Oh=new Map,Hs=new Map;function ia(n,t){try{n.container.addComponent(t)}catch(e){te.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ar(n){const t=n.name;if(Hs.has(t))return te.debug(`There were multiple attempts to register component ${t}.`),!1;Hs.set(t,n);for(const e of wr.values())ia(e,n);for(const e of Oh.values())ia(e,n);return!0}function Fh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Uh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new el("app","Firebase",Uh);/**
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
 */class $h{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const qh=Bh;function il(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ue.create("bad-app-name",{appName:String(s)});if(e||(e=tl()),!e)throw ue.create("no-options");const o=wr.get(s);if(o){if(Us(e,o.options)&&Us(r,o.config))return o;throw ue.create("duplicate-app",{appName:s})}const a=new Ku(s);for(const h of Hs.values())a.addComponent(h);const c=new $h(e,r,a);return wr.set(s,c),c}function jh(n=zs){const t=wr.get(n);if(!t&&n===zs&&tl())return il();if(!t)throw ue.create("no-app",{appName:n});return t}function qe(n,t,e){var r;let s=(r=Lh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),te.warn(c.join(" "));return}Ar(new Pn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const zh="firebase-heartbeat-database",Hh=1,Cn="firebase-heartbeat-store";let Ss=null;function ol(){return Ss||(Ss=ih(zh,Hh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),Ss}async function Kh(n){try{const e=(await ol()).transaction(Cn),r=await e.objectStore(Cn).get(al(n));return await e.done,r}catch(t){if(t instanceof Ze)te.warn(t.message);else{const e=ue.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});te.warn(e.message)}}}async function oa(n,t){try{const r=(await ol()).transaction(Cn,"readwrite");await r.objectStore(Cn).put(t,al(n)),await r.done}catch(e){if(e instanceof Ze)te.warn(e.message);else{const r=ue.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});te.warn(r.message)}}}function al(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wh=1024,Gh=30*24*60*60*1e3;class Qh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=aa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Gh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){te.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=aa(),{heartbeatsToSend:r,unsentEntries:s}=Yh(this._heartbeatsCache.heartbeats),o=Ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return te.warn(e),""}}}function aa(){return new Date().toISOString().substring(0,10)}function Yh(n,t=Wh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),la(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),la(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Xh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ou()?Fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Kh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function la(n){return Ir(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Jh(n){Ar(new Pn("platform-logger",t=>new lh(t),"PRIVATE")),Ar(new Pn("heartbeat",t=>new Qh(t),"PRIVATE")),qe(js,sa,n),qe(js,sa,"esm2017"),qe("fire-js","")}Jh("");var Zh="firebase",td="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(Zh,td,"app");var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Se,ll;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,_){function y(){}y.prototype=_.prototype,I.D=_.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(p,v,T){for(var g=Array(arguments.length-2),B=2;B<arguments.length;B++)g[B-2]=arguments[B];return _.prototype[v].apply(p,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,y){y||(y=0);var p=Array(16);if(typeof _=="string")for(var v=0;16>v;++v)p[v]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(v=0;16>v;++v)p[v]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=I.g[0],y=I.g[1],v=I.g[2];var T=I.g[3],g=_+(T^y&(v^T))+p[0]+3614090360&4294967295;_=y+(g<<7&4294967295|g>>>25),g=T+(v^_&(y^v))+p[1]+3905402710&4294967295,T=_+(g<<12&4294967295|g>>>20),g=v+(y^T&(_^y))+p[2]+606105819&4294967295,v=T+(g<<17&4294967295|g>>>15),g=y+(_^v&(T^_))+p[3]+3250441966&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(T^y&(v^T))+p[4]+4118548399&4294967295,_=y+(g<<7&4294967295|g>>>25),g=T+(v^_&(y^v))+p[5]+1200080426&4294967295,T=_+(g<<12&4294967295|g>>>20),g=v+(y^T&(_^y))+p[6]+2821735955&4294967295,v=T+(g<<17&4294967295|g>>>15),g=y+(_^v&(T^_))+p[7]+4249261313&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(T^y&(v^T))+p[8]+1770035416&4294967295,_=y+(g<<7&4294967295|g>>>25),g=T+(v^_&(y^v))+p[9]+2336552879&4294967295,T=_+(g<<12&4294967295|g>>>20),g=v+(y^T&(_^y))+p[10]+4294925233&4294967295,v=T+(g<<17&4294967295|g>>>15),g=y+(_^v&(T^_))+p[11]+2304563134&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(T^y&(v^T))+p[12]+1804603682&4294967295,_=y+(g<<7&4294967295|g>>>25),g=T+(v^_&(y^v))+p[13]+4254626195&4294967295,T=_+(g<<12&4294967295|g>>>20),g=v+(y^T&(_^y))+p[14]+2792965006&4294967295,v=T+(g<<17&4294967295|g>>>15),g=y+(_^v&(T^_))+p[15]+1236535329&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(v^T&(y^v))+p[1]+4129170786&4294967295,_=y+(g<<5&4294967295|g>>>27),g=T+(y^v&(_^y))+p[6]+3225465664&4294967295,T=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(T^_))+p[11]+643717713&4294967295,v=T+(g<<14&4294967295|g>>>18),g=y+(T^_&(v^T))+p[0]+3921069994&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(v^T&(y^v))+p[5]+3593408605&4294967295,_=y+(g<<5&4294967295|g>>>27),g=T+(y^v&(_^y))+p[10]+38016083&4294967295,T=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(T^_))+p[15]+3634488961&4294967295,v=T+(g<<14&4294967295|g>>>18),g=y+(T^_&(v^T))+p[4]+3889429448&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(v^T&(y^v))+p[9]+568446438&4294967295,_=y+(g<<5&4294967295|g>>>27),g=T+(y^v&(_^y))+p[14]+3275163606&4294967295,T=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(T^_))+p[3]+4107603335&4294967295,v=T+(g<<14&4294967295|g>>>18),g=y+(T^_&(v^T))+p[8]+1163531501&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(v^T&(y^v))+p[13]+2850285829&4294967295,_=y+(g<<5&4294967295|g>>>27),g=T+(y^v&(_^y))+p[2]+4243563512&4294967295,T=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(T^_))+p[7]+1735328473&4294967295,v=T+(g<<14&4294967295|g>>>18),g=y+(T^_&(v^T))+p[12]+2368359562&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(y^v^T)+p[5]+4294588738&4294967295,_=y+(g<<4&4294967295|g>>>28),g=T+(_^y^v)+p[8]+2272392833&4294967295,T=_+(g<<11&4294967295|g>>>21),g=v+(T^_^y)+p[11]+1839030562&4294967295,v=T+(g<<16&4294967295|g>>>16),g=y+(v^T^_)+p[14]+4259657740&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(y^v^T)+p[1]+2763975236&4294967295,_=y+(g<<4&4294967295|g>>>28),g=T+(_^y^v)+p[4]+1272893353&4294967295,T=_+(g<<11&4294967295|g>>>21),g=v+(T^_^y)+p[7]+4139469664&4294967295,v=T+(g<<16&4294967295|g>>>16),g=y+(v^T^_)+p[10]+3200236656&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(y^v^T)+p[13]+681279174&4294967295,_=y+(g<<4&4294967295|g>>>28),g=T+(_^y^v)+p[0]+3936430074&4294967295,T=_+(g<<11&4294967295|g>>>21),g=v+(T^_^y)+p[3]+3572445317&4294967295,v=T+(g<<16&4294967295|g>>>16),g=y+(v^T^_)+p[6]+76029189&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(y^v^T)+p[9]+3654602809&4294967295,_=y+(g<<4&4294967295|g>>>28),g=T+(_^y^v)+p[12]+3873151461&4294967295,T=_+(g<<11&4294967295|g>>>21),g=v+(T^_^y)+p[15]+530742520&4294967295,v=T+(g<<16&4294967295|g>>>16),g=y+(v^T^_)+p[2]+3299628645&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(v^(y|~T))+p[0]+4096336452&4294967295,_=y+(g<<6&4294967295|g>>>26),g=T+(y^(_|~v))+p[7]+1126891415&4294967295,T=_+(g<<10&4294967295|g>>>22),g=v+(_^(T|~y))+p[14]+2878612391&4294967295,v=T+(g<<15&4294967295|g>>>17),g=y+(T^(v|~_))+p[5]+4237533241&4294967295,y=v+(g<<21&4294967295|g>>>11),g=_+(v^(y|~T))+p[12]+1700485571&4294967295,_=y+(g<<6&4294967295|g>>>26),g=T+(y^(_|~v))+p[3]+2399980690&4294967295,T=_+(g<<10&4294967295|g>>>22),g=v+(_^(T|~y))+p[10]+4293915773&4294967295,v=T+(g<<15&4294967295|g>>>17),g=y+(T^(v|~_))+p[1]+2240044497&4294967295,y=v+(g<<21&4294967295|g>>>11),g=_+(v^(y|~T))+p[8]+1873313359&4294967295,_=y+(g<<6&4294967295|g>>>26),g=T+(y^(_|~v))+p[15]+4264355552&4294967295,T=_+(g<<10&4294967295|g>>>22),g=v+(_^(T|~y))+p[6]+2734768916&4294967295,v=T+(g<<15&4294967295|g>>>17),g=y+(T^(v|~_))+p[13]+1309151649&4294967295,y=v+(g<<21&4294967295|g>>>11),g=_+(v^(y|~T))+p[4]+4149444226&4294967295,_=y+(g<<6&4294967295|g>>>26),g=T+(y^(_|~v))+p[11]+3174756917&4294967295,T=_+(g<<10&4294967295|g>>>22),g=v+(_^(T|~y))+p[2]+718787259&4294967295,v=T+(g<<15&4294967295|g>>>17),g=y+(T^(v|~_))+p[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+T&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var y=_-this.blockSize,p=this.B,v=this.h,T=0;T<_;){if(v==0)for(;T<=y;)s(this,I,T),T+=this.blockSize;if(typeof I=="string"){for(;T<_;)if(p[v++]=I.charCodeAt(T++),v==this.blockSize){s(this,p),v=0;break}}else for(;T<_;)if(p[v++]=I[T++],v==this.blockSize){s(this,p),v=0;break}}this.h=v,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var y=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=y&255,y/=256;for(this.u(I),I=Array(16),_=y=0;4>_;++_)for(var p=0;32>p;p+=8)I[y++]=this.g[_]>>>p&255;return I};function o(I,_){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=_(I)}function a(I,_){this.h=_;for(var y=[],p=!0,v=I.length-1;0<=v;v--){var T=I[v]|0;p&&T==_||(y[v]=T,p=!1)}this.g=y}var c={};function h(I){return-128<=I&&128>I?o(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return V(d(-I));for(var _=[],y=1,p=0;I>=y;p++)_[p]=I/y|0,y*=4294967296;return new a(_,0)}function m(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return V(m(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(_,8)),p=E,v=0;v<I.length;v+=8){var T=Math.min(8,I.length-v),g=parseInt(I.substring(v,v+T),_);8>T?(T=d(Math.pow(_,T)),p=p.j(T).add(d(g))):(p=p.j(y),p=p.add(d(g)))}return p}var E=h(0),w=h(1),D=h(16777216);n=a.prototype,n.m=function(){if(b(this))return-V(this).m();for(var I=0,_=1,y=0;y<this.g.length;y++){var p=this.i(y);I+=(0<=p?p:4294967296+p)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(b(this))return"-"+V(this).toString(I);for(var _=d(Math.pow(I,6)),y=this,p="";;){var v=K(y,_).g;y=L(y,v.j(_));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=v,P(y))return T+p;for(;6>T.length;)T="0"+T;p=T+p}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function b(I){return I.h==-1}n.l=function(I){return I=L(this,I),b(I)?-1:P(I)?0:1};function V(I){for(var _=I.g.length,y=[],p=0;p<_;p++)y[p]=~I.g[p];return new a(y,~I.h).add(w)}n.abs=function(){return b(this)?V(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],p=0,v=0;v<=_;v++){var T=p+(this.i(v)&65535)+(I.i(v)&65535),g=(T>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);p=g>>>16,T&=65535,g&=65535,y[v]=g<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function L(I,_){return I.add(V(_))}n.j=function(I){if(P(this)||P(I))return E;if(b(this))return b(I)?V(this).j(V(I)):V(V(this).j(I));if(b(I))return V(this.j(V(I)));if(0>this.l(D)&&0>I.l(D))return d(this.m()*I.m());for(var _=this.g.length+I.g.length,y=[],p=0;p<2*_;p++)y[p]=0;for(p=0;p<this.g.length;p++)for(var v=0;v<I.g.length;v++){var T=this.i(p)>>>16,g=this.i(p)&65535,B=I.i(v)>>>16,Bt=I.i(v)&65535;y[2*p+2*v]+=g*Bt,O(y,2*p+2*v),y[2*p+2*v+1]+=T*Bt,O(y,2*p+2*v+1),y[2*p+2*v+1]+=g*B,O(y,2*p+2*v+1),y[2*p+2*v+2]+=T*B,O(y,2*p+2*v+2)}for(p=0;p<_;p++)y[p]=y[2*p+1]<<16|y[2*p];for(p=_;p<2*_;p++)y[p]=0;return new a(y,0)};function O(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function U(I,_){this.g=I,this.h=_}function K(I,_){if(P(_))throw Error("division by zero");if(P(I))return new U(E,E);if(b(I))return _=K(V(I),_),new U(V(_.g),V(_.h));if(b(_))return _=K(I,V(_)),new U(V(_.g),_.h);if(30<I.g.length){if(b(I)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var y=w,p=_;0>=p.l(I);)y=et(y),p=et(p);var v=Y(y,1),T=Y(p,1);for(p=Y(p,2),y=Y(y,2);!P(p);){var g=T.add(p);0>=g.l(I)&&(v=v.add(y),T=g),p=Y(p,1),y=Y(y,1)}return _=L(I,v.j(_)),new U(v,_)}for(v=E;0<=I.l(_);){for(y=Math.max(1,Math.floor(I.m()/_.m())),p=Math.ceil(Math.log(y)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),T=d(y),g=T.j(_);b(g)||0<g.l(I);)y-=p,T=d(y),g=T.j(_);P(T)&&(T=w),v=v.add(T),I=L(I,g)}return new U(v,I)}n.A=function(I){return K(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],p=0;p<_;p++)y[p]=this.i(p)&I.i(p);return new a(y,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],p=0;p<_;p++)y[p]=this.i(p)|I.i(p);return new a(y,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],p=0;p<_;p++)y[p]=this.i(p)^I.i(p);return new a(y,this.h^I.h)};function et(I){for(var _=I.g.length+1,y=[],p=0;p<_;p++)y[p]=I.i(p)<<1|I.i(p-1)>>>31;return new a(y,I.h)}function Y(I,_){var y=_>>5;_%=32;for(var p=I.g.length-y,v=[],T=0;T<p;T++)v[T]=0<_?I.i(T+y)>>>_|I.i(T+y+1)<<32-_:I.i(T+y);return new a(v,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ll=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Se=a}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cl,Tn,ul,yr,Ks,hl,dl,fl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof dr=="object"&&dr];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break t;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var S=u++;return{value:l(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function E(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function w(i,l,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,w.apply(null,arguments)}function D(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var k=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)k[rt-2]=arguments[rt];return l.prototype[A].apply(f,k)}}function b(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function V(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let k=0;k<S;k++)i[A+k]=f[k]}else i.push(f)}}class L{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function U(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function K(i){return K[" "](i),i}K[" "]=function(){};var et=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Y(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function I(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function _(i){const l={};for(const u in i)l[u]=i[u];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let S=0;S<y.length;S++)u=y[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function v(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function T(i){c.setTimeout(()=>{throw i},0)}function g(){var i=lt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class B{constructor(){this.h=this.g=null}add(l,u){const f=Bt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Bt=new L(()=>new $,i=>i.reset());class ${constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let x,ut=!1,lt=new B,W=()=>{const i=c.Promise.resolve(void 0);x=()=>{i.then(bt)}};var bt=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){T(u)}var l=Bt;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ut=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function _e(i,l){if(st.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(et){t:{try{K(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ji[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&_e.aa.h.call(this)}}P(_e,st);var Ji={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),Kc=0;function Wc(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++Kc,this.da=this.fa=!1}function Gn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Qn(i){this.src=i,this.g={},this.h=0}Qn.prototype.add=function(i,l,u,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var k=es(i,l,f,A);return-1<k?(l=i[k],u||(l.fa=!1)):(l=new Wc(l,this.src,S,!!f,A),l.fa=u,i.push(l)),l};function ts(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Gn(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function es(i,l,u,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==f)return A}return-1}var ns="closure_lm_"+(1e6*Math.random()|0),rs={};function Zi(i,l,u,f,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Zi(i,l[S],u,f,A);return null}return u=no(u),i&&i[Wn]?i.K(l,u,d(f)?!!f.capture:!1,A):Gc(i,l,u,!1,f,A)}function Gc(i,l,u,f,A,S){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,rt=is(i);if(rt||(i[ns]=rt=new Qn(i)),u=rt.add(l,u,f,k,S),u.proxy)return u;if(f=Qc(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)Kn||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(eo(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Qc(){function i(u){return l.call(i.src,i.listener,u)}const l=Yc;return i}function to(i,l,u,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)to(i,l[S],u,f,A);else f=d(f)?!!f.capture:!!f,u=no(u),i&&i[Wn]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],u=es(S,u,f,A),-1<u&&(Gn(S[u]),Array.prototype.splice.call(S,u,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=is(i))&&(l=i.g[l.toString()],i=-1,l&&(i=es(l,u,f,A)),(u=-1<i?l[i]:null)&&ss(u))}function ss(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Wn])ts(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(eo(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=is(l))?(ts(u,i),u.h==0&&(u.src=null,l[ns]=null)):Gn(i)}}}function eo(i){return i in rs?rs[i]:rs[i]="on"+i}function Yc(i,l){if(i.da)i=!0;else{l=new _e(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&ss(i),i=u.call(f,l)}return i}function is(i){return i=i[ns],i instanceof Qn?i:null}var os="__closure_events_fn_"+(1e9*Math.random()>>>0);function no(i){return typeof i=="function"?i:(i[os]||(i[os]=function(l){return i.handleEvent(l)}),i[os])}function St(){Lt.call(this),this.i=new Qn(this),this.M=this,this.F=null}P(St,Lt),St.prototype[Wn]=!0,St.prototype.removeEventListener=function(i,l,u,f){to(this,i,l,u,f)};function Nt(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new st(l,i);else if(l instanceof st)l.target=l.target||i;else{var A=l;l=new st(f,i),p(l,A)}if(A=!0,u)for(var S=u.length-1;0<=S;S--){var k=l.g=u[S];A=Yn(k,f,!0,l)&&A}if(k=l.g=i,A=Yn(k,f,!0,l)&&A,A=Yn(k,f,!1,l)&&A,u)for(S=0;S<u.length;S++)k=l.g=u[S],A=Yn(k,f,!1,l)&&A}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)Gn(u[f]);delete i.g[l],i.h--}}this.F=null},St.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},St.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function Yn(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var k=l[S];if(k&&!k.da&&k.capture==u){var rt=k.listener,vt=k.ha||k.src;k.fa&&ts(i.i,k),A=rt.call(vt,f)!==!1&&A}}return A&&!f.defaultPrevented}function ro(i,l,u){if(typeof i=="function")u&&(i=w(i,u));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function so(i){i.g=ro(()=>{i.g=null,i.i&&(i.i=!1,so(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Xc extends Lt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:so(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){Lt.call(this),this.h=i,this.g={}}P(on,Lt);var io=[];function oo(i){Y(i.g,function(l,u){this.g.hasOwnProperty(u)&&ss(l)},i),i.g={}}on.prototype.N=function(){on.aa.N.call(this),oo(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var as=c.JSON.stringify,Jc=c.JSON.parse,Zc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function ls(){}ls.prototype.h=null;function ao(i){return i.h||(i.h=i.i())}function lo(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cs(){st.call(this,"d")}P(cs,st);function us(){st.call(this,"c")}P(us,st);var Ee={},co=null;function Xn(){return co=co||new St}Ee.La="serverreachability";function uo(i){st.call(this,Ee.La,i)}P(uo,st);function ln(i){const l=Xn();Nt(l,new uo(l))}Ee.STAT_EVENT="statevent";function ho(i,l){st.call(this,Ee.STAT_EVENT,i),this.stat=l}P(ho,st);function xt(i){const l=Xn();Nt(l,new ho(l,i))}Ee.Ma="timingevent";function fo(i,l){st.call(this,Ee.Ma,i),this.size=l}P(fo,st);function cn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function un(){this.g=!0}un.prototype.xa=function(){this.g=!1};function tu(i,l,u,f,A,S){i.info(function(){if(i.g)if(S)for(var k="",rt=S.split("&"),vt=0;vt<rt.length;vt++){var Z=rt[vt].split("=");if(1<Z.length){var Dt=Z[0];Z=Z[1];var Rt=Dt.split("_");k=2<=Rt.length&&Rt[1]=="type"?k+(Dt+"="+Z+"&"):k+(Dt+"=redacted&")}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+k})}function eu(i,l,u,f,A,S,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+S+" "+k})}function Me(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+ru(i,u)+(f?" "+f:"")})}function nu(i,l){i.info(function(){return"TIMEOUT: "+l})}un.prototype.info=function(){};function ru(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return as(u)}catch{return l}}var Jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hs;function Zn(){}P(Zn,ls),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},hs=new Zn;function re(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new po}function po(){this.i=null,this.g="",this.h=!1}var go={},ds={};function fs(i,l,u){i.L=1,i.v=rr(Yt(l)),i.m=u,i.P=!0,yo(i,null)}function yo(i,l){i.F=Date.now(),tr(i),i.A=Yt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Vo(u.i,"t",f),i.C=0,u=i.j.J,i.h=new po,i.g=Qo(i.j,u?l:null,!i.m),0<i.O&&(i.M=new Xc(w(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(io[0]=A.toString()),A=io);for(var S=0;S<A.length;S++){var k=Zi(u,A[S],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?_(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),ln(),tu(i.i,i.u,i.A,i.l,i.R,i.m)}re.prototype.ca=function(i){i=i.target;const l=this.M;l&&Xt(i)==3?l.j():this.Y(i)},re.prototype.Y=function(i){try{if(i==this.g)t:{const Rt=Xt(this.g);var l=this.g.Ba();const Oe=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Oo(this.g)))){this.J||Rt!=4||l==7||(l==8||0>=Oe?ln(3):ln(2)),ms(this);var u=this.g.Z();this.X=u;e:if(_o(this)){var f=Oo(this.g);i="";var A=f.length,S=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),hn(this);var k="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(S&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,eu(this.i,this.u,this.A,this.l,this.R,Rt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var rt,vt=this.g;if((rt=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(rt)){var Z=rt;break e}}Z=null}if(u=Z)Me(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,u);else{this.o=!1,this.s=3,xt(12),ve(this),hn(this);break t}}if(this.P){u=!0;let jt;for(;!this.J&&this.C<k.length;)if(jt=su(this,k),jt==ds){Rt==4&&(this.s=4,xt(14),u=!1),Me(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==go){this.s=4,xt(15),Me(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else Me(this.i,this.l,jt,null),ps(this,jt);if(_o(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||k.length!=0||this.h.h||(this.s=1,xt(16),u=!1),this.o=this.o&&u,!u)Me(this.i,this.l,k,"[Invalid Chunked Response]"),ve(this),hn(this);else if(0<k.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ts(Dt),Dt.M=!0,xt(11))}}else Me(this.i,this.l,k,null),ps(this,k);Rt==4&&ve(this),this.o&&!this.J&&(Rt==4?Ho(this.j,this):(this.o=!1,tr(this)))}else Tu(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),ve(this),hn(this)}}}catch{}finally{}};function _o(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function su(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?ds:(u=Number(l.substring(u,f)),isNaN(u)?go:(f+=1,f+u>l.length?ds:(l=l.slice(f,f+u),i.C=f+u,l)))}re.prototype.cancel=function(){this.J=!0,ve(this)};function tr(i){i.S=Date.now()+i.I,Eo(i,i.I)}function Eo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=cn(w(i.ba,i),l)}function ms(i){i.B&&(c.clearTimeout(i.B),i.B=null)}re.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nu(this.i,this.A),this.L!=2&&(ln(),xt(17)),ve(this),this.s=2,hn(this)):Eo(this,this.S-i)};function hn(i){i.j.G==0||i.J||Ho(i.j,i)}function ve(i){ms(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,oo(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ps(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||gs(u.h,i))){if(!i.K&&gs(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)cr(u),ar(u);else break t;vs(u),xt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=cn(w(u.Za,u),6e3));if(1>=Io(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ie(u,11)}else if((i.K||u.g==i)&&cr(u),!O(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let Z=A[l];if(u.T=Z[0],Z=Z[1],u.G==2)if(Z[0]=="c"){u.K=Z[1],u.ia=Z[2];const Dt=Z[3];Dt!=null&&(u.la=Dt,u.j.info("VER="+u.la));const Rt=Z[4];Rt!=null&&(u.Aa=Rt,u.j.info("SVER="+u.Aa));const Oe=Z[5];Oe!=null&&typeof Oe=="number"&&0<Oe&&(f=1.5*Oe,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const jt=i.g;if(jt){const hr=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hr){var S=f.h;S.g||hr.indexOf("spdy")==-1&&hr.indexOf("quic")==-1&&hr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ys(S,S.h),S.h=null))}if(f.D){const Is=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(f.ya=Is,it(f.I,f.D,Is))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=Go(f,f.J?f.ia:null,f.W),k.K){wo(f.h,k);var rt=k,vt=f.L;vt&&(rt.I=vt),rt.B&&(ms(rt),tr(rt)),f.g=k}else jo(f);0<u.i.length&&lr(u)}else Z[0]!="stop"&&Z[0]!="close"||Ie(u,7);else u.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Ie(u,7):Es(u):Z[0]!="noop"&&u.l&&u.l.ta(Z),u.v=0)}}ln(4)}catch{}}var iu=class{constructor(i,l){this.g=i,this.map=l}};function vo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function To(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Io(i){return i.h?1:i.g?i.g.size:0}function gs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ys(i,l){i.g?i.g.add(l):i.h=l}function wo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}vo.prototype.cancel=function(){if(this.i=Ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ao(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return b(i.i)}function ou(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function au(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function bo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=au(i),f=ou(i),A=f.length,S=0;S<A;S++)l.call(void 0,f[S],u&&u[S],i)}var So=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lu(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var S=i[u].substring(0,f);A=i[u].substring(f+1)}else S=i[u];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Te(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Te){this.h=i.h,er(this,i.j),this.o=i.o,this.g=i.g,nr(this,i.s),this.l=i.l;var l=i.i,u=new mn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Do(this,u),this.m=i.m}else i&&(l=String(i).match(So))?(this.h=!1,er(this,l[1]||"",!0),this.o=dn(l[2]||""),this.g=dn(l[3]||"",!0),nr(this,l[4]),this.l=dn(l[5]||"",!0),Do(this,l[6]||"",!0),this.m=dn(l[7]||"")):(this.h=!1,this.i=new mn(null,this.h))}Te.prototype.toString=function(){var i=[],l=this.j;l&&i.push(fn(l,Ro,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(fn(l,Ro,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(fn(u,u.charAt(0)=="/"?hu:uu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",fn(u,fu)),i.join("")};function Yt(i){return new Te(i)}function er(i,l,u){i.j=u?dn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function nr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Do(i,l,u){l instanceof mn?(i.i=l,mu(i.i,i.h)):(u||(l=fn(l,du)),i.i=new mn(l,i.h))}function it(i,l,u){i.i.set(l,u)}function rr(i){return it(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function dn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function fn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,cu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function cu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ro=/[#\/\?@]/g,uu=/[#\?:]/g,hu=/[#\?]/g,du=/[#\?@]/g,fu=/#/g;function mn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function se(i){i.g||(i.g=new Map,i.h=0,i.i&&lu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=mn.prototype,n.add=function(i,l){se(this),this.i=null,i=Be(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function Po(i,l){se(i),l=Be(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Co(i,l){return se(i),l=Be(i,l),i.g.has(l)}n.forEach=function(i,l){se(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){se(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let S=0;S<A.length;S++)u.push(l[f])}return u},n.V=function(i){se(this);let l=[];if(typeof i=="string")Co(this,i)&&(l=l.concat(this.g.get(Be(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return se(this),this.i=null,i=Be(this,i),Co(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Vo(i,l,u){Po(i,l),0<u.length&&(i.i=null,i.g.set(Be(i,l),b(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const S=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=S;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Be(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function mu(i,l){l&&!i.j&&(se(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(Po(this,f),Vo(this,A,u))},i)),i.j=l}function pu(i,l){const u=new un;if(c.Image){const f=new Image;f.onload=D(ie,u,"TestLoadImage: loaded",!0,l,f),f.onerror=D(ie,u,"TestLoadImage: error",!1,l,f),f.onabort=D(ie,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=D(ie,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function gu(i,l){const u=new un,f=new AbortController,A=setTimeout(()=>{f.abort(),ie(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?ie(u,"TestPingServer: ok",!0,l):ie(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ie(u,"TestPingServer: error",!1,l)})}function ie(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function yu(){this.g=new Zc}function _u(i,l,u){const f=u||"";try{bo(i,function(A,S){let k=A;d(A)&&(k=as(A)),l.push(f+S+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function sr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(sr,ls),sr.prototype.g=function(){return new ir(this.l,this.j)},sr.prototype.i=function(i){return function(){return i}}({});function ir(i,l){St.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ir,St),n=ir.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,gn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ko(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ko(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?pn(this):gn(this),this.readyState==3&&ko(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,pn(this))},n.Qa=function(i){this.g&&(this.response=i,pn(this))},n.ga=function(){this.g&&pn(this)};function pn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,gn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function gn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function No(i){let l="";return Y(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function _s(i,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=No(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):it(i,l,u))}function ht(i){St.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ht,St);var Eu=/^https?$/i,vu=["POST","PUT"];n=ht.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hs.g(),this.v=this.o?ao(this.o):ao(hs),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){xo(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vu,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of u)this.g.setRequestHeader(S,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lo(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){xo(this,S)}};function xo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Mo(i),or(i)}function Mo(i){i.A||(i.A=!0,Nt(i,"complete"),Nt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Nt(this,"complete"),Nt(this,"abort"),or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),or(this,!0)),ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},n.bb=function(){Bo(this)};function Bo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Xt(i)!=4||i.Z()!=2)){if(i.u&&Xt(i)==4)ro(i.Ea,0,i);else if(Nt(i,"readystatechange"),Xt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=k===0){var A=String(i.D).match(So)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Eu.test(A?A.toLowerCase():"")}u=f}if(u)Nt(i,"complete"),Nt(i,"success");else{i.m=6;try{var S=2<Xt(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",Mo(i)}}finally{or(i)}}}}function or(i,l){if(i.g){Lo(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Nt(i,"ready");try{u.onreadystatechange=f}catch{}}}function Lo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Xt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Jc(l)}};function Oo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Tu(i){const l={};i=(i.g&&2<=Xt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(O(i[f]))continue;var u=v(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[A]||[];l[A]=S,S.push(u)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Fo(i){this.Aa=0,this.i=[],this.j=new un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yn("baseRetryDelayMs",5e3,i),this.cb=yn("retryDelaySeedMs",1e4,i),this.Wa=yn("forwardChannelMaxRetries",2,i),this.wa=yn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new vo(i&&i.concurrentRequestLimit),this.Da=new yu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fo.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,f){xt(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Go(this,null,this.W),lr(this)};function Es(i){if(Uo(i),i.G==3){var l=i.U++,u=Yt(i.I);if(it(u,"SID",i.K),it(u,"RID",l),it(u,"TYPE","terminate"),_n(i,u),l=new re(i,i.j,l),l.L=2,l.v=rr(Yt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Qo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),tr(l)}Wo(i)}function ar(i){i.g&&(Ts(i),i.g.cancel(),i.g=null)}function Uo(i){ar(i),i.u&&(c.clearTimeout(i.u),i.u=null),cr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function lr(i){if(!To(i.h)&&!i.s){i.s=!0;var l=i.Ga;x||W(),ut||(x(),ut=!0),lt.add(l,i),i.B=0}}function Iu(i,l){return Io(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=cn(w(i.Ga,i,l),Ko(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new re(this,this.j,i);let S=this.o;if(this.S&&(S?(S=_(S),p(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=qo(this,A,l),u=Yt(this.I),it(u,"RID",i),it(u,"CVER",22),this.D&&it(u,"X-HTTP-Session-Id",this.D),_n(this,u),S&&(this.O?l="headers="+encodeURIComponent(String(No(S)))+"&"+l:this.m&&_s(u,this.m,S)),ys(this.h,A),this.Ua&&it(u,"TYPE","init"),this.P?(it(u,"$req",l),it(u,"SID","null"),A.T=!0,fs(A,u,null)):fs(A,u,l),this.G=2}}else this.G==3&&(i?$o(this,i):this.i.length==0||To(this.h)||$o(this))};function $o(i,l){var u;l?u=l.l:u=i.U++;const f=Yt(i.I);it(f,"SID",i.K),it(f,"RID",u),it(f,"AID",i.T),_n(i,f),i.m&&i.o&&_s(f,i.m,i.o),u=new re(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=qo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ys(i.h,u),fs(u,f,l)}function _n(i,l){i.H&&Y(i.H,function(u,f){it(l,f,u)}),i.l&&bo({},function(u,f){it(l,f,u)})}function qo(i,l,u){u=Math.min(i.i.length,u);var f=i.l?w(i.l.Na,i.l,i):null;t:{var A=i.i;let S=-1;for(;;){const k=["count="+u];S==-1?0<u?(S=A[0].g,k.push("ofs="+S)):S=0:k.push("ofs="+S);let rt=!0;for(let vt=0;vt<u;vt++){let Z=A[vt].g;const Dt=A[vt].map;if(Z-=S,0>Z)S=Math.max(0,A[vt].g-100),rt=!1;else try{_u(Dt,k,"req"+Z+"_")}catch{f&&f(Dt)}}if(rt){f=k.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,f}function jo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;x||W(),ut||(x(),ut=!0),lt.add(l,i),i.v=0}}function vs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=cn(w(i.Fa,i),Ko(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,zo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=cn(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),ar(this),zo(this))};function Ts(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function zo(i){i.g=new re(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Yt(i.qa);it(l,"RID","rpc"),it(l,"SID",i.K),it(l,"AID",i.T),it(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&it(l,"TO",i.ja),it(l,"TYPE","xmlhttp"),_n(i,l),i.m&&i.o&&_s(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=rr(Yt(l)),u.m=null,u.P=!0,yo(u,i)}n.Za=function(){this.C!=null&&(this.C=null,ar(this),vs(this),xt(19))};function cr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ho(i,l){var u=null;if(i.g==l){cr(i),Ts(i),i.g=null;var f=2}else if(gs(i.h,l))u=l.D,wo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Xn(),Nt(f,new fo(f,u)),lr(i)}else jo(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Iu(i,l)||f==2&&vs(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:Ie(i,5);break;case 4:Ie(i,10);break;case 3:Ie(i,6);break;default:Ie(i,2)}}}function Ko(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function Ie(i,l){if(i.j.info("Error code "+l),l==2){var u=w(i.fb,i),f=i.Xa;const A=!f;f=new Te(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||er(f,"https"),rr(f),A?pu(f.toString(),u):gu(f.toString(),u)}else xt(2);i.G=0,i.l&&i.l.sa(l),Wo(i),Uo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Wo(i){if(i.G=0,i.ka=[],i.l){const l=Ao(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,b(i.i),i.i.length=0),i.l.ra()}}function Go(i,l,u){var f=u instanceof Te?Yt(u):new Te(u);if(f.g!="")l&&(f.g=l+"."+f.g),nr(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Te(null);f&&er(S,f),l&&(S.g=l),A&&nr(S,A),u&&(S.l=u),f=S}return u=i.D,l=i.ya,u&&l&&it(f,u,l),it(f,"VER",i.la),_n(i,f),f}function Qo(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ht(new sr({eb:u})):new ht(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}n=Yo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ur(){}ur.prototype.g=function(i,l){return new Ft(i,l)};function Ft(i,l){St.call(this),this.g=new Fo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Le(this)}P(Ft,St),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Es(this.g)},Ft.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=as(i),i=u);l.i.push(new iu(l.Ya++,i)),l.G==3&&lr(l)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Es(this.g),delete this.g,Ft.aa.N.call(this)};function Xo(i){cs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P(Xo,cs);function Jo(){us.call(this),this.status=1}P(Jo,us);function Le(i){this.g=i}P(Le,Yo),Le.prototype.ua=function(){Nt(this.g,"a")},Le.prototype.ta=function(i){Nt(this.g,new Xo(i))},Le.prototype.sa=function(i){Nt(this.g,new Jo)},Le.prototype.ra=function(){Nt(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,fl=function(){return new ur},dl=function(){return Xn()},hl=Ee,Ks={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jn.NO_ERROR=0,Jn.TIMEOUT=8,Jn.HTTP_ERROR=6,yr=Jn,mo.COMPLETE="complete",ul=mo,lo.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",St.prototype.listen=St.prototype.K,Tn=lo,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,cl=ht}).apply(typeof dr<"u"?dr:typeof self<"u"?self:typeof window<"u"?window:{});const ua="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Re=new nl("@firebase/firestore");function En(){return Re.logLevel}function M(n,...t){if(Re.logLevel<=J.DEBUG){const e=t.map(di);Re.debug(`Firestore (${tn}): ${n}`,...e)}}function ee(n,...t){if(Re.logLevel<=J.ERROR){const e=t.map(di);Re.error(`Firestore (${tn}): ${n}`,...e)}}function ze(n,...t){if(Re.logLevel<=J.WARN){const e=t.map(di);Re.warn(`Firestore (${tn}): ${n}`,...e)}}function di(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function j(n="Unexpected state"){const t=`FIRESTORE (${tn}) INTERNAL ASSERTION FAILED: `+n;throw ee(t),new Error(t)}function nt(n,t){n||j()}function H(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ze{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Vt.UNAUTHENTICATED))}shutdown(){}}class nd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new ml(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new Vt(t)}}class sd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class id{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new sd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class od{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ad{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){nt(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new od(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ld(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function tt(n,t){return n<t?-1:n>t?1:0}function He(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new q(0,0))}static max(){return new z(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(),r===void 0?r=t.length-e:r>t.length-e&&j(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ot extends Vn{construct(t,e,r){return new ot(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ot(e)}static emptyPath(){return new ot([])}}const cd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Vn{construct(t,e,r){return new It(t,e,r)}static isValidIdentifier(t){return cd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new It(e)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(ot.fromString(t))}static fromName(t){return new F(ot.fromString(t).popFirst(5))}static empty(){return new F(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new ot(t.slice()))}}function ud(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new q(e+1,0):new q(e,r));return new fe(s,F.empty(),t)}function hd(n){return new fe(n.readTime,n.key,-1)}class fe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new fe(z.min(),F.empty(),-1)}static max(){return new fe(z.max(),F.empty(),-1)}}function dd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function On(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==fd)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function pd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Fn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */function ha(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ke(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function gl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){this.comparator=t,this.root=e||Tt.EMPTY}insert(t,e){return new ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fr(this.root,t,this.comparator,!1)}getReverseIterator(){return new fr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fr(this.root,t,this.comparator,!0)}}class fr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Tt.RED,this.left=s??Tt.EMPTY,this.right=o??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Tt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,r,s,o){return this}insert(t,e,r){return new Tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new da(this.data.getIterator())}getIteratorFrom(t){return new da(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof wt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new wt(this.comparator);return e.data=t,e}}class da{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.fields=t,t.sort(It.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new wt(It.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return He(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new yl("Invalid base64 string: "+o):o}}(t);return new At(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new At(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const yd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(n){if(nt(!!n),typeof n=="string"){let t=0;const e=yd.exec(n);if(nt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pe(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function pi(n){const t=n.mapValue.fields.__previous_value__;return mi(t)?pi(t):t}function kn(n){const t=me(n.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class Nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={mapValue:{}};function Ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mi(n)?4:vd(n)?9007199254740991:Ed(n)?10:11:j()}function Qt(n,t){if(n===t)return!0;const e=Ce(n);if(e!==Ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return kn(n).isEqual(kn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=me(s.timestampValue),c=me(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Pe(s.bytesValue).isEqual(Pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return dt(s.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(s.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return dt(s.integerValue)===dt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=dt(s.doubleValue),c=dt(o.doubleValue);return a===c?br(a)===br(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return He(n.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ha(a)!==ha(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Qt(a[h],c[h])))return!1;return!0}(n,t);default:return j()}}function xn(n,t){return(n.values||[]).find(e=>Qt(e,t))!==void 0}function Ke(n,t){if(n===t)return 0;const e=Ce(n),r=Ce(t);if(e!==r)return tt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=dt(o.integerValue||o.doubleValue),h=dt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return fa(n.timestampValue,t.timestampValue);case 4:return fa(kn(n),kn(t));case 5:return tt(n.stringValue,t.stringValue);case 6:return function(o,a){const c=Pe(o),h=Pe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=tt(c[d],h[d]);if(m!==0)return m}return tt(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=tt(dt(o.latitude),dt(a.latitude));return c!==0?c:tt(dt(o.longitude),dt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ma(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const E=o.fields||{},w=a.fields||{},D=(c=E.value)===null||c===void 0?void 0:c.arrayValue,P=(h=w.value)===null||h===void 0?void 0:h.arrayValue,b=tt(((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return b!==0?b:ma(D,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===mr.mapValue&&a===mr.mapValue)return 0;if(o===mr.mapValue)return 1;if(a===mr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const w=tt(h[E],m[E]);if(w!==0)return w;const D=Ke(c[h[E]],d[m[E]]);if(D!==0)return D}return tt(h.length,m.length)}(n.mapValue,t.mapValue);default:throw j()}}function fa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=me(n),r=me(t),s=tt(e.seconds,r.seconds);return s!==0?s:tt(e.nanos,r.nanos)}function ma(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ke(e[s],r[s]);if(o)return o}return tt(e.length,r.length)}function We(n){return Ws(n)}function Ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ws(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ws(e.fields[a])}`;return s+"}"}(n.mapValue):j()}function pa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Gs(n){return!!n&&"integerValue"in n}function gi(n){return!!n&&"arrayValue"in n}function ga(n){return!!n&&"nullValue"in n}function ya(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _r(n){return!!n&&"mapValue"in n}function Ed(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function bn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ke(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=bn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=bn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function vd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!_r(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bn(e)}setAll(t){let e=It.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=bn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());_r(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];_r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ke(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ot(bn(this.value))}}function _l(n){const t=[];return ke(n.fields,(e,r)=>{const s=new It([e]);if(_r(r)){const o=_l(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new kt(t,0,z.min(),z.min(),z.min(),Ot.empty(),0)}static newFoundDocument(t,e,r,s){return new kt(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new kt(t,2,e,z.min(),z.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new kt(t,3,e,z.min(),z.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sr{constructor(t,e){this.position=t,this.inclusive=e}}function _a(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=Ke(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ea(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Qt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class El{}class mt extends El{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new wd(t,e,r):e==="array-contains"?new Sd(t,r):e==="in"?new Dd(t,r):e==="not-in"?new Rd(t,r):e==="array-contains-any"?new Pd(t,r):new mt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ad(t,r):new bd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ke(e,this.value)):e!==null&&Ce(this.value)===Ce(e)&&this.matchesComparison(Ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends El{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new zt(t,e)}matches(t){return vl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function Tl(n){return Id(n)&&vl(n)}function Id(n){for(const t of n.filters)if(t instanceof zt)return!1;return!0}function Qs(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+We(n.value);if(Tl(n))return n.filters.map(t=>Qs(t)).join(",");{const t=n.filters.map(e=>Qs(e)).join(",");return`${n.op}(${t})`}}function Il(n,t){return n instanceof mt?function(r,s){return s instanceof mt&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(n,t):n instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Il(a,s.filters[c]),!0):!1}(n,t):void j()}function wl(n){return n instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${We(e.value)}`}(n):n instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(wl).join(" ,")+"}"}(n):"Filter"}class wd extends mt{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ad extends mt{constructor(t,e){super(t,"in",e),this.keys=Al("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bd extends mt{constructor(t,e){super(t,"not-in",e),this.keys=Al("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Al(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class Sd extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gi(e)&&xn(e.arrayValue,this.value)}}class Dd extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&xn(this.value.arrayValue,e)}}class Rd extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!xn(this.value.arrayValue,e)}}class Pd extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>xn(this.value.arrayValue,r))}}/**
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
 */class Cd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function va(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Cd(n,t,e,r,s,o,a)}function yi(n){const t=H(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Qs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>We(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>We(r)).join(",")),t.ue=e}return t.ue}function _i(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Td(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Il(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ea(n.startAt,t.startAt)&&Ea(n.endAt,t.endAt)}function Ys(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Vd(n,t,e,r,s,o,a,c){return new en(n,t,e,r,s,o,a,c)}function Ei(n){return new en(n)}function Ta(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bl(n){return n.collectionGroup!==null}function Sn(n){const t=H(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new wt(It.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Mn(o,r))}),e.has(It.keyField().canonicalString())||t.ce.push(new Mn(It.keyField(),r))}return t.ce}function Wt(n){const t=H(n);return t.le||(t.le=kd(t,Sn(n))),t.le}function kd(n,t){if(n.limitType==="F")return va(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Mn(s.field,o)});const e=n.endAt?new Sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Sr(n.startAt.position,n.startAt.inclusive):null;return va(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Xs(n,t){const e=n.filters.concat([t]);return new en(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Dr(n,t,e){return new en(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Or(n,t){return _i(Wt(n),Wt(t))&&n.limitType===t.limitType}function Sl(n){return`${yi(Wt(n))}|lt:${n.limitType}`}function Fe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>wl(s)).join(", ")}]`),Lr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>We(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>We(s)).join(",")),`Target(${r})`}(Wt(n))}; limitType=${n.limitType})`}function Fr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Sn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=_a(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,Sn(r),s)||r.endAt&&!function(a,c,h){const d=_a(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,Sn(r),s))}(n,t)}function Nd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dl(n){return(t,e)=>{let r=!1;for(const s of Sn(n)){const o=xd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function xd(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Ke(h,d):j()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Md=new ct(F.comparator);function ne(){return Md}const Rl=new ct(F.comparator);function In(...n){let t=Rl;for(const e of n)t=t.insert(e.key,e);return t}function Pl(n){let t=Rl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function be(){return Dn()}function Cl(){return Dn()}function Dn(){return new nn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Bd=new ct(F.comparator),Ld=new wt(F.comparator);function G(...n){let t=Ld;for(const e of n)t=t.add(e);return t}const Od=new wt(tt);function Fd(){return Od}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ur{constructor(){this._=void 0}}function $d(n,t,e){return n instanceof Rr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&mi(o)&&(o=pi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Bn?Nl(n,t):n instanceof Ln?xl(n,t):function(s,o){const a=kl(s,o),c=Ia(a)+Ia(s.Pe);return Gs(a)&&Gs(s.Pe)?Vl(c):vi(s.serializer,c)}(n,t)}function qd(n,t,e){return n instanceof Bn?Nl(n,t):n instanceof Ln?xl(n,t):e}function kl(n,t){return n instanceof Pr?function(r){return Gs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Rr extends Ur{}class Bn extends Ur{constructor(t){super(),this.elements=t}}function Nl(n,t){const e=Ml(t);for(const r of n.elements)e.some(s=>Qt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ln extends Ur{constructor(t){super(),this.elements=t}}function xl(n,t){let e=Ml(t);for(const r of n.elements)e=e.filter(s=>!Qt(s,r));return{arrayValue:{values:e}}}class Pr extends Ur{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ia(n){return dt(n.integerValue||n.doubleValue)}function Ml(n){return gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof Ln&&s instanceof Ln?He(r.elements,s.elements,Qt):r instanceof Pr&&s instanceof Pr?Qt(r.Pe,s.Pe):r instanceof Rr&&s instanceof Rr}(n.transform,t.transform)}class zd{constructor(t,e){this.version=t,this.transformResults=e}}class qt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new qt}static exists(t){return new qt(void 0,t)}static updateTime(t){return new qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class $r{}function Bl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ti(n.key,qt.none()):new Un(n.key,n.data,qt.none());{const e=n.data,r=Ot.empty();let s=new wt(It.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ge(n.key,r,new Ut(s.toArray()),qt.none())}}function Hd(n,t,e){n instanceof Un?function(s,o,a){const c=s.value.clone(),h=Aa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ge?function(s,o,a){if(!Er(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Aa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ll(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Rn(n,t,e,r){return n instanceof Un?function(o,a,c,h){if(!Er(o.precondition,a))return c;const d=o.value.clone(),m=ba(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ge?function(o,a,c,h){if(!Er(o.precondition,a))return c;const d=ba(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ll(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,c){return Er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Kd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=kl(r.transform,s||null);o!=null&&(e===null&&(e=Ot.empty()),e.set(r.field,o))}return e||null}function wa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&He(r,s,(o,a)=>jd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Un extends $r{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ge extends $r{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ll(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Aa(n,t,e){const r=new Map;nt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,qd(a,c,e[s]))}return r}function ba(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,$d(o,a,t))}return r}class Ti extends $r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wd extends $r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Hd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Cl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Bl(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&He(this.mutations,t.mutations,(e,r)=>wa(e,r))&&He(this.baseMutations,t.baseMutations,(e,r)=>wa(e,r))}}class Ii{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){nt(t.mutations.length===r.length);let s=function(){return Bd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ii(t,e,r,s)}}/**
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
 */var ft,X;function Xd(n){switch(n){default:return j();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Ol(n){if(n===void 0)return ee("GRPC error has no .code"),R.UNKNOWN;switch(n){case ft.OK:return R.OK;case ft.CANCELLED:return R.CANCELLED;case ft.UNKNOWN:return R.UNKNOWN;case ft.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ft.INTERNAL:return R.INTERNAL;case ft.UNAVAILABLE:return R.UNAVAILABLE;case ft.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ft.NOT_FOUND:return R.NOT_FOUND;case ft.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ft.ABORTED:return R.ABORTED;case ft.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ft.DATA_LOSS:return R.DATA_LOSS;default:return j()}}(X=ft||(ft={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Zd=new Se([4294967295,4294967295],0);function Sa(n){const t=Jd().encode(n),e=new ll;return e.update(t),new Uint8Array(e.digest())}function Da(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Se([e,r],0),new Se([s,o],0)]}class wi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new wn(`Invalid padding: ${e}`);if(r<0)throw new wn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new wn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new wn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Se.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Se.fromNumber(r)));return s.compare(Zd)===1&&(s=new Se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Sa(t),[r,s]=Da(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new wi(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Sa(t),[r,s]=Da(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,$n.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new qr(z.min(),s,new ct(tt),ne(),G())}}class $n{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new $n(r,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Fl{constructor(t,e){this.targetId=t,this.me=e}}class Ul{constructor(t,e,r=At.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ra{constructor(){this.fe=0,this.ge=Ca(),this.pe=At.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=G(),e=G(),r=G();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:j()}}),new $n(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ca()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,nt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tf{constructor(t){this.Le=t,this.Be=new Map,this.ke=ne(),this.qe=Pa(),this.Qe=new ct(tt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:j()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Ys(o))if(r===0){const a=new F(o.path);this.Ue(e,a,kt.newNoDocument(a,z.min()))}else nt(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=Pe(r).toUint8Array()}catch(h){if(h instanceof yl)return ze("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new wi(a,s,o)}catch(h){return ze(h instanceof wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Ys(c.target)){const h=new F(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,kt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=G();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new qr(t,e,this.Qe,this.ke,r);return this.ke=ne(),this.qe=Pa(),this.Qe=new ct(tt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ra,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new wt(tt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ra),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Pa(){return new ct(F.comparator)}function Ca(){return new ct(F.comparator)}const ef={asc:"ASCENDING",desc:"DESCENDING"},nf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rf={and:"AND",or:"OR"};class sf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Js(n,t){return n.useProto3Json||Lr(t)?t:{value:t}}function Cr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $l(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function of(n,t){return Cr(n,t.toTimestamp())}function Gt(n){return nt(!!n),z.fromTimestamp(function(e){const r=me(e);return new q(r.seconds,r.nanos)}(n))}function Ai(n,t){return Zs(n,t).canonicalString()}function Zs(n,t){const e=function(s){return new ot(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ql(n){const t=ot.fromString(n);return nt(Wl(t)),t}function ti(n,t){return Ai(n.databaseId,t.path)}function Ds(n,t){const e=ql(t);if(e.get(1)!==n.databaseId.projectId)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(zl(e))}function jl(n,t){return Ai(n.databaseId,t)}function af(n){const t=ql(n);return t.length===4?ot.emptyPath():zl(t)}function ei(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zl(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Va(n,t,e){return{name:ti(n,t),fields:e.value.mapValue.fields}}function lf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(nt(m===void 0||typeof m=="string"),At.fromBase64String(m||"")):(nt(m===void 0||m instanceof Buffer||m instanceof Uint8Array),At.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?R.UNKNOWN:Ol(d.code);return new N(m,d.message||"")}(a);e=new Ul(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ds(n,r.document.name),o=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):z.min(),c=new Ot({mapValue:{fields:r.document.fields}}),h=kt.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new vr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ds(n,r.document),o=r.readTime?Gt(r.readTime):z.min(),a=kt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new vr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ds(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,s,null)}else{if(!("filter"in t))return j();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Yd(s,o),c=r.targetId;e=new Fl(c,a)}}return e}function cf(n,t){let e;if(t instanceof Un)e={update:Va(n,t.key,t.value)};else if(t instanceof Ti)e={delete:ti(n,t.key)};else if(t instanceof ge)e={update:Va(n,t.key,t.data),updateMask:_f(t.fieldMask)};else{if(!(t instanceof Wd))return j();e={verify:ti(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ln)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw j()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:of(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j()}(n,t.precondition)),e}function uf(n,t){return n&&n.length>0?(nt(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Gt(s.updateTime):Gt(o);return a.isEqual(z.min())&&(a=Gt(o)),new zd(a,s.transformResults||[])}(e,t))):[]}function hf(n,t){return{documents:[jl(n,t.path)]}}function df(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=jl(n,s);const o=function(d){if(d.length!==0)return Kl(zt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Ue(w.field),direction:pf(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Js(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function ff(n){let t=af(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){nt(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const w=Hl(E);return w instanceof zt&&Tl(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(w=>function(P){return new Mn($e(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(E){let w;return w=typeof E=="object"?E.value:E,Lr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(E){const w=!!E.before,D=E.values||[];return new Sr(D,w)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const w=!E.before,D=E.values||[];return new Sr(D,w)}(e.endAt)),Vd(t,s,a,o,c,"F",h,d)}function mf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=$e(e.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$e(e.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$e(e.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$e(e.unaryFilter.field);return mt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(e){return mt.create($e(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(r=>Hl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(n):j()}function pf(n){return ef[n]}function gf(n){return nf[n]}function yf(n){return rf[n]}function Ue(n){return{fieldPath:n.canonicalString()}}function $e(n){return It.fromServerFormat(n.fieldPath)}function Kl(n){return n instanceof mt?function(e){if(e.op==="=="){if(ya(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NAN"}};if(ga(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ya(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NOT_NAN"}};if(ga(e.value))return{unaryFilter:{field:Ue(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ue(e.field),op:gf(e.op),value:e.value}}}(n):n instanceof zt?function(e){const r=e.getFilters().map(s=>Kl(s));return r.length===1?r[0]:{compositeFilter:{op:yf(e.op),filters:r}}}(n):j()}function _f(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e,r,s,o=z.min(),a=z.min(),c=At.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new le(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tf{constructor(){this.un=new If}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(fe.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(fe.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class If{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new wt(ot.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new wt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wf{constructor(){this.changes=new nn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,kt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Rn(r.mutation,s,Ut.empty(),q.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,G()).next(()=>r))}getLocalViewOfDocuments(t,e,r=G()){const s=be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=In();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=be();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,G()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=ne();const a=Dn(),c=function(){return Dn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ge)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Rn(m.mutation,d,m.mutation.getFieldMask(),q.now())):a.set(d.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var E;return c.set(d,new Af(m,(E=a.get(d))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Dn();let s=new ct((a,c)=>a-c),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Ut.empty();m=c.applyToLocalView(d,m),r.set(h,m);const E=(s.get(c.batchId)||G()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,E=Cl();m.forEach(w=>{if(!o.has(w)){const D=Bl(e.get(w),r.get(w));D!==null&&E.set(w,D),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(be());let c=-1,h=o;return a.next(d=>C.forEach(d,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,G())).next(m=>({batchId:c,changes:Pl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=In();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=In();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const d=function(E,w){return new en(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((E,w)=>{a=a.insert(E,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,kt.newInvalidDocument(m)))});let c=In();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Rn(m.mutation,d,Ut.empty(),q.now()),Fr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:vf(s.bundledQuery),readTime:Gt(s.readTime)}}(e)),C.resolve()}}/**
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
 */class Df{constructor(){this.overlays=new ct(F.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=be();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=be(),o=e.length+1,a=new F(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ct((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=be(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return C.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Qd(e,r));let o=this.Ir.get(e);o===void 0&&(o=G(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Rf{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.Tr=new wt(_t.Er),this.dr=new wt(_t.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new _t(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new F(new ot([])),r=new _t(e,t),s=new _t(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new F(new ot([])),r=new _t(e,t),s=new _t(e,t+1);let o=G();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new _t(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return F.comparator(t.key,e.key)||tt(t.wr,e.wr)}static Ar(t,e){return tt(t.wr,e.wr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new wt(_t.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gd(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new _t(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),s=new _t(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new wt(tt);return e.forEach(s=>{const o=new _t(s,0),a=new _t(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new _t(new F(o),0);let c=new wt(tt);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),C.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){nt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,s=>{const o=new _t(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new _t(e,0),s=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.Mr=t,this.docs=function(){return new ct(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(e))}getEntries(t,e){let r=ne();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():kt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ne();const a=e.path,c=new F(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||dd(hd(m),r)<=0||(s.has(m.key)||Fr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){j()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Vf(this)}getSize(t){return C.resolve(this.size)}}class Vf extends wf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.persistence=t,this.Nr=new nn(e=>yi(e),_i),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new bi,this.targetCount=0,this.kr=Ge.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new fi(0),this.Kr=!1,this.Kr=!0,this.$r=new Rf,this.referenceDelegate=t(this),this.Ur=new kf(this),this.indexManager=new Tf,this.remoteDocumentCache=function(s){return new Cf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ef(e),this.Gr=new Sf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Df,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Pf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new xf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class xf extends md{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.Jr=new bi,this.Yr=null}static Zr(t){return new Si(t)}get Xr(){if(this.Yr)return this.Yr;throw j()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=F.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=G(),s=G();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Di(t,e.fromCache,r,s)}}/**
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
 */class Bf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Lu()?8:pd(Mu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Mf;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(En()<=J.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(En()<=J.DEBUG&&M("QueryEngine","Query:",Fe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(En()<=J.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Wt(e))):C.resolve())}Yi(t,e){if(Ta(e))return C.resolve(null);let r=Wt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Dr(e,null,"F"),r=Wt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=G(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Dr(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return Ta(e)||s.isEqual(z.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?C.resolve(null):(En()<=J.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.rs(t,a,e,ud(s,-1)).next(c=>c))})}ts(t,e){let r=new wt(Dl(t));return e.forEach((s,o)=>{Fr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return En()<=J.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.Ji.getDocumentsMatchingQuery(t,e,fe.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new ct(tt),this._s=new nn(o=>yi(o),_i),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Of(n,t,e,r){return new Lf(n,t,e,r)}async function Gl(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=G();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Ff(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const E=d.batch,w=E.keys();let D=C.resolve();return w.forEach(P=>{D=D.next(()=>m.getEntry(h,P)).next(b=>{const V=d.docVersions.get(P);nt(V!==null),b.version.compareTo(V)<0&&(E.applyToRemoteDocument(b,d),b.isValidDocument()&&(b.setReadTime(d.commitVersion),m.addEntry(b)))})}),D.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=G();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Ql(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Uf(n,t){const e=H(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,E)=>{const w=s.get(E);if(!w)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,E)));let D=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?D=D.withResumeToken(At.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(m.resumeToken,r)),s=s.insert(E,D),function(b,V,L){return b.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(w,D,m)&&c.push(e.Ur.updateTargetData(o,D))});let h=ne(),d=G();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push($f(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(z.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(E=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return C.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function $f(n,t,e){let r=G(),s=G();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ne();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function qf(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jf(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new le(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ni(n,t,e){const r=H(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Fn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function ka(n,t,e){const r=H(n);let s=z.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const E=H(h),w=E._s.get(m);return w!==void 0?C.resolve(E.os.get(w)):E.Ur.getTargetData(d,m)}(r,a,Wt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?o:G())).next(c=>(zf(r,Nd(t),c),{documents:c,Ts:o})))}function zf(n,t,e){let r=n.us.get(t)||z.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Na{constructor(){this.activeTargetIds=Fd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hf{constructor(){this.so=new Na,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Na,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class xa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Pt="WebChannelConnection";class Qf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=Rs(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw ze("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Wf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Rs();return new Promise((a,c)=>{const h=new cl;h.setWithCredentials(!0),h.listenOnce(ul.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case yr.NO_ERROR:const m=h.getResponseJson();M(Pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case yr.TIMEOUT:M(Pt,`RPC '${t}' ${o} timed out`),c(new N(R.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const E=h.getStatus();if(M(Pt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const D=w==null?void 0:w.error;if(D&&D.status&&D.message){const P=function(V){const L=V.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(L)>=0?L:R.UNKNOWN}(D.status);c(new N(P,D.message))}else c(new N(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(R.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{M(Pt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);M(Pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=Rs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=fl(),c=dl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(Pt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let w=!1,D=!1;const P=new Gf({Io:V=>{D?M(Pt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(w||(M(Pt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),w=!0),M(Pt,`RPC '${t}' stream ${s} sending:`,V),E.send(V))},To:()=>E.close()}),b=(V,L,O)=>{V.listen(L,U=>{try{O(U)}catch(K){setTimeout(()=>{throw K},0)}})};return b(E,Tn.EventType.OPEN,()=>{D||(M(Pt,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),b(E,Tn.EventType.CLOSE,()=>{D||(D=!0,M(Pt,`RPC '${t}' stream ${s} transport closed`),P.So())}),b(E,Tn.EventType.ERROR,V=>{D||(D=!0,ze(Pt,`RPC '${t}' stream ${s} transport errored:`,V),P.So(new N(R.UNAVAILABLE,"The operation could not be completed")))}),b(E,Tn.EventType.MESSAGE,V=>{var L;if(!D){const O=V.data[0];nt(!!O);const U=O,K=U.error||((L=U[0])===null||L===void 0?void 0:L.error);if(K){M(Pt,`RPC '${t}' stream ${s} received error:`,K);const et=K.status;let Y=function(y){const p=ft[y];if(p!==void 0)return Ol(p)}(et),I=K.message;Y===void 0&&(Y=R.INTERNAL,I="Unknown error status: "+et+" with message "+K.message),D=!0,P.So(new N(Y,I)),E.close()}else M(Pt,`RPC '${t}' stream ${s} received:`,O),P.bo(O)}}),b(c,hl.STAT_EVENT,V=>{V.stat===Ks.PROXY?M(Pt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Ks.NOPROXY&&M(Pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xl{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(ee(e.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new N(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yf extends Xl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=lf(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Gt(a.readTime):z.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=ei(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ys(h)?{documents:hf(o,h)}:{query:df(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$l(o,a.resumeToken);const d=Js(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=Cr(o,a.snapshotVersion.toTimestamp());const d=Js(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=mf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=ei(this.serializer),e.removeTarget=t,this.a_(e)}}class Xf extends Xl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return nt(!!t.streamToken),this.lastStreamToken=t.streamToken,nt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=uf(t.writeResults,t.commitTime),r=Gt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ei(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>cf(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ee(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ne(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=H(h);d.L_.add(4),await qn(d),d.q_.set("Unknown"),d.L_.delete(4),await zr(d)}(this))})}),this.q_=new Zf(r,s)}}async function zr(n){if(Ne(n))for(const t of n.B_)await t(!0)}async function qn(n){for(const t of n.B_)await t(!1)}function Jl(n,t){const e=H(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Vi(e)?Ci(e):rn(e).r_()&&Pi(e,t))}function Ri(n,t){const e=H(n),r=rn(e);e.N_.delete(t),r.r_()&&Zl(e,t),e.N_.size===0&&(r.r_()?r.o_():Ne(e)&&e.q_.set("Unknown"))}function Pi(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rn(n).A_(t)}function Zl(n,t){n.Q_.xe(t),rn(n).R_(t)}function Ci(n){n.Q_=new tf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),rn(n).start(),n.q_.v_()}function Vi(n){return Ne(n)&&!rn(n).n_()&&n.N_.size>0}function Ne(n){return H(n).L_.size===0}function tc(n){n.Q_=void 0}async function em(n){n.q_.set("Online")}async function nm(n){n.N_.forEach((t,e)=>{Pi(n,t)})}async function rm(n,t){tc(n),Vi(n)?(n.q_.M_(t),Ci(n)):n.q_.set("Unknown")}async function sm(n,t,e){if(n.q_.set("Online"),t instanceof Ul&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Vr(n,r)}else if(t instanceof vr?n.Q_.Ke(t):t instanceof Fl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(z.min()))try{const r=await Ql(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(At.EMPTY_BYTE_STRING,m.snapshotVersion)),Zl(o,h);const E=new le(m.target,h,d,m.sequenceNumber);Pi(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Vr(n,r)}}async function Vr(n,t,e){if(!Fn(t))throw t;n.L_.add(1),await qn(n),n.q_.set("Offline"),e||(e=()=>Ql(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await zr(n)})}function ec(n,t){return t().catch(e=>Vr(n,e,t))}async function Hr(n){const t=H(n),e=pe(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;im(t);)try{const s=await qf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,om(t,s)}catch(s){await Vr(t,s)}nc(t)&&rc(t)}function im(n){return Ne(n)&&n.O_.length<10}function om(n,t){n.O_.push(t);const e=pe(n);e.r_()&&e.V_&&e.m_(t.mutations)}function nc(n){return Ne(n)&&!pe(n).n_()&&n.O_.length>0}function rc(n){pe(n).start()}async function am(n){pe(n).p_()}async function lm(n){const t=pe(n);for(const e of n.O_)t.m_(e.mutations)}async function cm(n,t,e){const r=n.O_.shift(),s=Ii.from(r,t,e);await ec(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Hr(n)}async function um(n,t){t&&pe(n).V_&&await async function(r,s){if(function(a){return Xd(a)&&a!==R.ABORTED}(s.code)){const o=r.O_.shift();pe(r).s_(),await ec(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Hr(r)}}(n,t),nc(n)&&rc(n)}async function Ma(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Ne(e);e.L_.add(3),await qn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await zr(e)}async function hm(n,t){const e=H(n);t?(e.L_.delete(2),await zr(e)):t||(e.L_.add(2),await qn(e),e.q_.set("Unknown"))}function rn(n){return n.K_||(n.K_=function(e,r,s){const o=H(e);return o.w_(),new Yf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:em.bind(null,n),Ro:nm.bind(null,n),mo:rm.bind(null,n),d_:sm.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Vi(n)?Ci(n):n.q_.set("Unknown")):(await n.K_.stop(),tc(n))})),n.K_}function pe(n){return n.U_||(n.U_=function(e,r,s){const o=H(e);return o.w_(),new Xf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:am.bind(null,n),mo:um.bind(null,n),f_:lm.bind(null,n),g_:cm.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Hr(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new ki(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ni(n,t){if(ee("AsyncQueue",`${t}: ${n}`),Fn(n))return new N(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=In(),this.sortedSet=new ct(this.comparator)}static emptySet(t){return new je(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof je)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ba{constructor(){this.W_=new ct(F.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):j():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Qe{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Qe(t,e,je.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class fm{constructor(){this.queries=La(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=H(e),o=s.queries;s.queries=La(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new N(R.ABORTED,"Firestore shutting down"))}}function La(){return new nn(n=>Sl(n),Or)}async function sc(n,t){const e=H(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new dm,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Ni(a,`Initialization of query '${Fe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&xi(e)}async function ic(n,t){const e=H(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function mm(n,t){const e=H(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&xi(e)}function pm(n,t,e){const r=H(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function xi(n){n.Y_.forEach(t=>{t.next()})}var ri,Oa;(Oa=ri||(ri={})).ea="default",Oa.Cache="cache";class oc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ri.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.key=t}}class lc{constructor(t){this.key=t}}class gm{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=G(),this.mutatedKeys=G(),this.Aa=Dl(t),this.Ra=new je(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Ba,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const w=s.get(m),D=Fr(this.query,E)?E:null,P=!!w&&this.mutatedKeys.has(w.key),b=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let V=!1;w&&D?w.data.isEqual(D.data)?P!==b&&(r.track({type:3,doc:D}),V=!0):this.ga(w,D)||(r.track({type:2,doc:D}),V=!0,(h&&this.Aa(D,h)>0||d&&this.Aa(D,d)<0)&&(c=!0)):!w&&D?(r.track({type:0,doc:D}),V=!0):w&&!D&&(r.track({type:1,doc:w}),V=!0,(h||d)&&(c=!0)),V&&(D?(a=a.add(D),o=b?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,E)=>function(D,P){const b=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return b(D)-b(P)}(m.type,E.type)||this.Aa(m.doc,E.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Qe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ba,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=G(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new lc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new ac(r))}),e}ba(t){this.Ta=t.Ts,this.da=G();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Qe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ym{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class _m{constructor(t){this.key=t,this.va=!1}}class Em{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new nn(c=>Sl(c),Or),this.Ma=new Map,this.xa=new Set,this.Oa=new ct(F.comparator),this.Na=new Map,this.La=new bi,this.Ba={},this.ka=new Map,this.qa=Ge.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vm(n,t,e=!0){const r=mc(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await cc(r,t,e,!0),s}async function Tm(n,t){const e=mc(n);await cc(e,t,!0,!1)}async function cc(n,t,e,r){const s=await jf(n.localStore,Wt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Im(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Jl(n.remoteStore,s),c}async function Im(n,t,e,r,s){n.Ka=(E,w,D)=>async function(b,V,L,O){let U=V.view.ma(L);U.ns&&(U=await ka(b.localStore,V.query,!1).then(({documents:I})=>V.view.ma(I,U)));const K=O&&O.targetChanges.get(V.targetId),et=O&&O.targetMismatches.get(V.targetId)!=null,Y=V.view.applyChanges(U,b.isPrimaryClient,K,et);return Ua(b,V.targetId,Y.wa),Y.snapshot}(n,E,w,D);const o=await ka(n.localStore,t,!0),a=new gm(t,o.Ts),c=a.ma(o.documents),h=$n.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Ua(n,e,d.wa);const m=new ym(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function wm(n,t,e){const r=H(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Or(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ni(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ri(r.remoteStore,s.targetId),si(r,s.targetId)}).catch(On)):(si(r,s.targetId),await ni(r.localStore,s.targetId,!0))}async function Am(n,t){const e=H(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ri(e.remoteStore,r.targetId))}async function bm(n,t,e){const r=km(n);try{const s=await function(a,c){const h=H(a),d=q.now(),m=c.reduce((D,P)=>D.add(P.key),G());let E,w;return h.persistence.runTransaction("Locally write mutations","readwrite",D=>{let P=ne(),b=G();return h.cs.getEntries(D,m).next(V=>{P=V,P.forEach((L,O)=>{O.isValidDocument()||(b=b.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(D,P)).next(V=>{E=V;const L=[];for(const O of c){const U=Kd(O,E.get(O.key).overlayedDocument);U!=null&&L.push(new ge(O.key,U,_l(U.value.mapValue),qt.exists(!0)))}return h.mutationQueue.addMutationBatch(D,d,L,c)}).next(V=>{w=V;const L=V.applyToLocalDocumentSet(E,b);return h.documentOverlayCache.saveOverlays(D,V.batchId,L)})}).then(()=>({batchId:w.batchId,changes:Pl(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new ct(tt)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await jn(r,s.changes),await Hr(r.remoteStore)}catch(s){const o=Ni(s,"Failed to persist write");e.reject(o)}}async function uc(n,t){const e=H(n);try{const r=await Uf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?nt(a.va):s.removedDocuments.size>0&&(nt(a.va),a.va=!1))}),await jn(e,r,t)}catch(r){await On(r)}}function Fa(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=H(a);h.onlineState=c;let d=!1;h.queries.forEach((m,E)=>{for(const w of E.j_)w.Z_(c)&&(d=!0)}),d&&xi(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sm(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new ct(F.comparator);a=a.insert(o,kt.newNoDocument(o,z.min()));const c=G().add(o),h=new qr(z.min(),new Map,new ct(tt),a,c);await uc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Mi(r)}else await ni(r.localStore,t,!1).then(()=>si(r,t,e)).catch(On)}async function Dm(n,t){const e=H(n),r=t.batch.batchId;try{const s=await Ff(e.localStore,t);dc(e,r,null),hc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await jn(e,s)}catch(s){await On(s)}}async function Rm(n,t,e){const r=H(n);try{const s=await function(a,c){const h=H(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(E=>(nt(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);dc(r,t,e),hc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await jn(r,s)}catch(s){await On(s)}}function hc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function dc(n,t,e){const r=H(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function si(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||fc(n,r)})}function fc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Ri(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Mi(n))}function Ua(n,t,e){for(const r of e)r instanceof ac?(n.La.addReference(r.key,t),Pm(n,r)):r instanceof lc?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||fc(n,r.key)):j()}function Pm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),Mi(n))}function Mi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new F(ot.fromString(t)),r=n.qa.next();n.Na.set(r,new _m(e)),n.Oa=n.Oa.insert(e,r),Jl(n.remoteStore,new le(Wt(Ei(e.path)),r,"TargetPurposeLimboResolution",fi.oe))}}async function jn(n,t,e){const r=H(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=Di.Wi(h.targetId,d);o.push(E)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=H(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>C.forEach(d,w=>C.forEach(w.$i,D=>m.persistence.referenceDelegate.addReference(E,w.targetId,D)).next(()=>C.forEach(w.Ui,D=>m.persistence.referenceDelegate.removeReference(E,w.targetId,D)))))}catch(E){if(!Fn(E))throw E;M("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const w=E.targetId;if(!E.fromCache){const D=m.os.get(w),P=D.snapshotVersion,b=D.withLastLimboFreeSnapshotVersion(P);m.os=m.os.insert(w,b)}}}(r.localStore,o))}async function Cm(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await Gl(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new N(R.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await jn(e,r.hs)}}function Vm(n,t){const e=H(n),r=e.Na.get(t);if(r&&r.va)return G().add(r.key);{let s=G();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function mc(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=uc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sm.bind(null,t),t.Ca.d_=mm.bind(null,t.eventManager),t.Ca.$a=pm.bind(null,t.eventManager),t}function km(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rm.bind(null,t),t}class kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=jr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Of(this.persistence,new Bf,t.initialUser,this.serializer)}Ga(t){return new Nf(Si.Zr,this.serializer)}Wa(t){return new Hf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kr.provider={build:()=>new kr};class ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cm.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fm}()}createDatastore(t){const e=jr(t.databaseInfo.databaseId),r=function(o){return new Qf(o)}(t.databaseInfo);return function(o,a,c,h){return new Jf(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new tm(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Fa(this.syncEngine,e,0),function(){return xa.D()?new xa:new Kf}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const E=new Em(s,o,a,c,h,d);return m&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=H(s);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await qn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ii.provider={build:()=>new ii};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ee("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Vt.UNAUTHENTICATED,this.clientId=pl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ni(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Cs(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function $a(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xm(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ma(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ma(t.remoteStore,s)),n._onlineComponents=t}async function xm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ze("Error using user provided cache. Falling back to memory cache: "+e),await Cs(n,new kr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Cs(n,new kr);return n._offlineComponents}async function gc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await $a(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await $a(n,new ii))),n._onlineComponents}function Mm(n){return gc(n).then(t=>t.syncEngine)}async function yc(n){const t=await gc(n),e=t.eventManager;return e.onListen=vm.bind(null,t.syncEngine),e.onUnlisten=wm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Tm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Am.bind(null,t.syncEngine),e}function Bm(n,t,e={}){const r=new Jt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new pc({next:w=>{m.Za(),a.enqueueAndForget(()=>ic(o,E));const D=w.docs.has(c);!D&&w.fromCache?d.reject(new N(R.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&h&&h.source==="server"?d.reject(new N(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),E=new oc(Ei(c.path),m,{includeMetadataChanges:!0,_a:!0});return sc(o,E)}(await yc(n),n.asyncQueue,t,e,r)),r.promise}function Lm(n,t,e={}){const r=new Jt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new pc({next:w=>{m.Za(),a.enqueueAndForget(()=>ic(o,E)),w.fromCache&&h.source==="server"?d.reject(new N(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),E=new oc(c,m,{includeMetadataChanges:!0,_a:!0});return sc(o,E)}(await yc(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Ec(n,t,e){if(!e)throw new N(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Om(n,t,e,r){if(t===!0&&r===!0)throw new N(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ja(n){if(!F.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function za(n){if(F.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j()}function Ht(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Kr(n);throw new N(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Om("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_c((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ha({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ha(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ed;switch(r.type){case"firstParty":return new id(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=qa.get(e);r&&(M("ComponentProvider","Removing Datastore"),qa.delete(e),r.terminate())}(this),Promise.resolve()}}function Fm(n,t,e,r={}){var s;const o=(n=Ht(n,Wr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Vt.MOCK_USER;else{c=xu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new N(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Vt(d)}n._authCredentials=new nd(new ml(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ye(this.firestore,t,this._query)}}class Mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new he(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mt(this.firestore,t,this._key)}}class he extends ye{constructor(t,e,r){super(t,e,Ei(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mt(this.firestore,null,new F(t))}withConverter(t){return new he(this.firestore,t,this._path)}}function pt(n,t,...e){if(n=Zt(n),Ec("collection","path",t),n instanceof Wr){const r=ot.fromString(t,...e);return za(r),new he(n,null,r)}{if(!(n instanceof Mt||n instanceof he))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return za(r),new he(n.firestore,null,r)}}function sn(n,t,...e){if(n=Zt(n),arguments.length===1&&(t=pl.newId()),Ec("doc","path",t),n instanceof Wr){const r=ot.fromString(t,...e);return ja(r),new Mt(n,null,new F(r))}{if(!(n instanceof Mt||n instanceof he))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return ja(r),new Mt(n.firestore,n instanceof he?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yl(this,"async_queue_retry"),this.Vu=()=>{const r=Ps();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Jt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Fn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ee("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ki.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&j()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class xe extends Wr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ka,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ka(t),this._firestoreClient=void 0,await t}}}function Um(n,t){const e=typeof n=="object"?n:jh(),r=typeof n=="string"?n:"(default)",s=Fh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ku("firestore");o&&Fm(s,...o)}return s}function Bi(n){if(n._terminated)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$m(n),n._firestoreClient}function $m(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new _d(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,_c(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Nm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(At.fromBase64String(t))}catch(e){throw new N(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ye(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qm=/^__.*__$/;class jm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Un(t,this.data,e,this.fieldTransforms)}}class vc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ge(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Ui{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ui(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Nr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Tc(this.Cu)&&qm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class zm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||jr(t)}Qu(t,e,r,s=!1){return new Ui({Cu:t,methodName:e,qu:r,path:It.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qr(n){const t=n._freezeSettings(),e=jr(n._databaseId);return new zm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ic(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);$i("Data must be an object, but it was:",a,r);const c=wc(r,a);let h,d;if(o.merge)h=new Ut(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const w=oi(t,E,e);if(!a.contains(w))throw new N(R.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);bc(m,w)||m.push(w)}h=new Ut(m),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new jm(new Ot(c),h,d)}class Yr extends Li{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yr}}function Hm(n,t,e,r){const s=n.Qu(1,t,e);$i("Data must be an object, but it was:",s,r);const o=[],a=Ot.empty();ke(r,(h,d)=>{const m=qi(t,h,e);d=Zt(d);const E=s.Nu(m);if(d instanceof Yr)o.push(m);else{const w=zn(d,E);w!=null&&(o.push(m),a.set(m,w))}});const c=new Ut(o);return new vc(a,c,s.fieldTransforms)}function Km(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[oi(t,r,e)],h=[s];if(o.length%2!=0)throw new N(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(oi(t,o[w])),h.push(o[w+1]);const d=[],m=Ot.empty();for(let w=c.length-1;w>=0;--w)if(!bc(d,c[w])){const D=c[w];let P=h[w];P=Zt(P);const b=a.Nu(D);if(P instanceof Yr)d.push(D);else{const V=zn(P,b);V!=null&&(d.push(D),m.set(D,V))}}const E=new Ut(d);return new vc(m,E,a.fieldTransforms)}function Wm(n,t,e,r=!1){return zn(e,n.Qu(r?4:3,t))}function zn(n,t){if(Ac(n=Zt(n)))return $i("Unsupported field value:",t,n),wc(n,t);if(n instanceof Li)return function(r,s){if(!Tc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=zn(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ud(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=q.fromDate(r);return{timestampValue:Cr(s.serializer,o)}}if(r instanceof q){const o=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cr(s.serializer,o)}}if(r instanceof Oi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ye)return{bytesValue:$l(s.serializer,r._byteString)};if(r instanceof Mt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ai(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return vi(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Kr(r)}`)}(n,t)}function wc(n,t){const e={};return gl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ke(n,(r,s)=>{const o=zn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ac(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof q||n instanceof Oi||n instanceof Ye||n instanceof Mt||n instanceof Li||n instanceof Fi)}function $i(n,t,e){if(!Ac(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Kr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function oi(n,t,e){if((t=Zt(t))instanceof Gr)return t._internalPath;if(typeof t=="string")return qi(n,t);throw Nr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Gm=new RegExp("[~\\*/\\[\\]]");function qi(n,t,e){if(t.search(Gm)>=0)throw Nr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Gr(...t.split("."))._internalPath}catch{throw Nr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Nr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(R.INVALID_ARGUMENT,c+n+h)}function bc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Xr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qm extends Sc{data(){return super.data()}}function Xr(n,t){return typeof t=="string"?qi(n,t):t instanceof Gr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ji{}class zi extends ji{}function gt(n,t,...e){let r=[];t instanceof ji&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Hi).length,c=o.filter(h=>h instanceof Jr).length;if(a>1||a>0&&c>0)throw new N(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Jr extends zi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Jr(t,e,r)}_apply(t){const e=this._parse(t);return Dc(t._query,e),new ye(t.firestore,t.converter,Xs(t._query,e))}_parse(t){const e=Qr(t.firestore);return function(o,a,c,h,d,m,E){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ga(E,m);const D=[];for(const P of E)D.push(Wa(h,o,P));w={arrayValue:{values:D}}}else w=Wa(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ga(E,m),w=Wm(c,a,E,m==="in"||m==="not-in");return mt.create(d,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Q(n,t,e){const r=t,s=Xr("where",n);return Jr._create(s,r,e)}class Hi extends ji{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Hi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:zt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Dc(a,h),a=Xs(a,h)}(t._query,e),new ye(t.firestore,t.converter,Xs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ki extends zi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ki(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mn(o,a)}(t._query,this._field,this._direction);return new ye(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new en(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function yt(n,t="asc"){const e=t,r=Xr("orderBy",n);return Ki._create(r,e)}class Wi extends zi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Wi(t,e,r)}_apply(t){return new ye(t.firestore,t.converter,Dr(t._query,this._limit,this._limitType))}}function Hn(n){return Wi._create("limit",n,"F")}function Wa(n,t,e){if(typeof(e=Zt(e))=="string"){if(e==="")throw new N(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bl(t)&&e.indexOf("/")!==-1)throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ot.fromString(e));if(!F.isDocumentKey(r))throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pa(n,new F(r))}if(e instanceof Mt)return pa(n,e._key);throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kr(e)}.`)}function Ga(n,t){if(!Array.isArray(n)||n.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Dc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Xm{convertValue(t,e="none"){switch(Ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ke(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>dt(a.doubleValue));return new Fi(o)}convertGeoPoint(t){return new Oi(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=pi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(kn(t));default:return null}}convertTimestamp(t){const e=me(t);return new q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ot.fromString(t);nt(Wl(r));const s=new Nn(r.get(1),r.get(3)),o=new F(r.popFirst(5));return s.isEqual(e)||ee(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class An{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pc extends Sc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Xr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Tr extends Pc{data(t={}){return super.data(t)}}class Jm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new An(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Tr(this._firestore,this._userDataWriter,r.key,r,new An(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new Tr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new An(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Tr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new An(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Zm(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n){n=Ht(n,Mt);const t=Ht(n.firestore,xe);return Bm(Bi(t),n._key).then(e=>sp(t,n,e))}class Vc extends Xm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ye(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mt(this.firestore,null,e)}}function Et(n){n=Ht(n,ye);const t=Ht(n.firestore,xe),e=Bi(t),r=new Vc(t);return Ym(n._query),Lm(e,n._query).then(s=>new Jm(t,r,n,s))}function tp(n,t,e){n=Ht(n,Mt);const r=Ht(n.firestore,xe),s=Rc(n.converter,t);return Zr(r,[Ic(Qr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,qt.none())])}function ep(n,t,e,...r){n=Ht(n,Mt);const s=Ht(n.firestore,xe),o=Qr(s);let a;return a=typeof(t=Zt(t))=="string"||t instanceof Gr?Km(o,"updateDoc",n._key,t,e,r):Hm(o,"updateDoc",n._key,t),Zr(s,[a.toMutation(n._key,qt.exists(!0))])}function np(n){return Zr(Ht(n.firestore,xe),[new Ti(n._key,qt.none())])}function rp(n,t){const e=Ht(n.firestore,xe),r=sn(n),s=Rc(n.converter,t);return Zr(e,[Ic(Qr(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Zr(n,t){return function(r,s){const o=new Jt;return r.asyncQueue.enqueueAndForget(async()=>bm(await Mm(r),s,o)),o.promise}(Bi(n),t)}function sp(n,t,e){const r=e.docs.get(t._key),s=new Vc(n);return new Pc(n,s,t._key,r,new An(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){tn=s})(qh),Ar(new Pn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new xe(new rd(r.getProvider("auth-internal")),new ad(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),qe(ua,"4.7.3",t),qe(ua,"4.7.3","esm2017")})();const ip="55555",ai="baby-tracker-auth",op=24*60*60*1e3,ap={apiKey:"AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",authDomain:"baby-tracker-b0936.firebaseapp.com",projectId:"baby-tracker-b0936",storageBucket:"baby-tracker-b0936.firebasestorage.app",messagingSenderId:"931756532206",appId:"1:931756532206:web:bf90d10dc3e3837383eeff"},lp=il(ap),at=Um(lp);function cp(){const n=localStorage.getItem(ai);if(!n)return!1;try{const{timestamp:t}=JSON.parse(n);return Date.now()-t<op?!0:(localStorage.removeItem(ai),!1)}catch{return!1}}function up(){const n={timestamp:Date.now()};localStorage.setItem(ai,JSON.stringify(n))}let $t=Xe(new Date),xr=null,Vs=null,ks=null,Ns=null,xs=null,Ms=null,Bs=null,Ls=null,Os=null,we=0;function Xe(n){const t=new Date(n),e=t.getDay(),r=t.getDate()-e;return t.setDate(r),t.setHours(0,0,0,0),t}function hp(n){const t=new Date(n);return t.setDate(t.getDate()+6),t.setHours(23,59,59,999),t}function ae(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),o=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r}T${s}:${o}`}function Ct(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function li(n){const t=String(n.getMonth()+1).padStart(2,"0"),e=String(n.getDate()).padStart(2,"0"),r=n.getFullYear(),s=n.getHours(),o=String(n.getMinutes()).padStart(2,"0"),a=s>=12?"PM":"AM",c=s%12||12;return`${t}/${e}/${r} ${c}:${o} ${a}`}function ci(n){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=n.getFullYear();return`${t[n.getDay()]}, ${e}/${r}/${s}`}function Mr(n){const t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}async function Gi(){const n=document.getElementById("vitamin-d-checkbox"),t=document.getElementById("vitamin-d-status"),e=document.getElementById("vitamin-d-label-text");if(!n||!t||!e)return;const s=Mr(new Date);try{const o=await Cc(sn(at,"vitaminD",s));if(o.exists()){const a=o.data();n.checked=a.given===!0}else n.checked=!1;e.textContent=n.checked?"Vitamin D drop given":"Record Vitamin D drop",t.textContent="",t.style.display="none"}catch(o){console.error("Error loading vitamin D status:",o),t.className="error",t.textContent="Failed to load vitamin D status",t.style.display="block"}}function kc(){Ls&&clearTimeout(Ls);const n=new Date,t=new Date(n);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const e=t.getTime()-n.getTime();Ls=window.setTimeout(()=>{Gi(),kc()},e)}async function dp(n){const t=n.target,e=document.getElementById("vitamin-d-status"),r=document.getElementById("vitamin-d-label-text");if(!e||!r)return;const s=new Date,o=Mr(s);try{await tp(sn(at,"vitaminD",o),{given:t.checked,date:q.fromDate(s)}),r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop",e.style.display="none"}catch(a){console.error("Error saving vitamin D status:",a),e.className="error",e.textContent="Failed to save vitamin D status",e.style.display="block",t.checked=!t.checked,r.textContent=t.checked?"Vitamin D drop given":"Record Vitamin D drop"}}function Qa(){const n=document.getElementById("passcode-input"),t=document.getElementById("passcode-error"),e=document.getElementById("passcode-screen"),r=document.getElementById("app");n.value===ip?(n.blur(),up(),e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Nc()):(t.textContent="Incorrect passcode",t.style.display="block",n.value="")}function Nc(){gp(),Br(),fp(),Np(),mp(),pp(),Gi(),kc(),window.scrollTo(0,0)}function fp(){const n=new Date,t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter");t&&(t.value=Ct(n)),e&&(e.value=Ct(n))}function mp(){[document.getElementById("bottle-amount"),document.getElementById("pump-amount"),document.getElementById("edit-bottle-amount"),document.getElementById("edit-pump-amount")].forEach(t=>{t&&(t.addEventListener("keypress",e=>{const r=e.key,s=t.value;e.key==="Backspace"||e.key==="Delete"||e.key==="Tab"||e.key==="Escape"||e.key==="Enter"||e.ctrlKey||e.metaKey||r>="0"&&r<="9"||r==="."&&s.indexOf(".")===-1||e.preventDefault()}),t.addEventListener("paste",e=>{var c;e.preventDefault();const s=(((c=e.clipboardData)==null?void 0:c.getData("text"))||"").replace(/[^0-9.]/g,""),o=s.split("."),a=o.length>2?o[0]+"."+o.slice(1).join(""):s;document.execCommand("insertText",!1,a)}))})}function pp(){const n=document.getElementById("bottle-unit"),t=document.getElementById("bottle-amount"),e=document.getElementById("pump-unit"),r=document.getElementById("pump-amount"),s=document.getElementById("edit-bottle-unit"),o=document.getElementById("edit-bottle-amount"),a=document.getElementById("edit-pump-unit"),c=document.getElementById("edit-pump-amount");n&&t&&n.addEventListener("change",()=>{gr(t,n.value)}),e&&r&&e.addEventListener("change",()=>{gr(r,e.value)}),s&&o&&s.addEventListener("change",()=>{gr(o,s.value)}),a&&c&&a.addEventListener("change",()=>{gr(c,a.value)})}function gr(n,t){const e=parseFloat(n.value);if(isNaN(e)||e<=0)return;const r=n.dataset.lastUnit||"oz";if(r===t)return;let s;if(t==="ml"&&r==="oz")s=e*29.5735;else if(t==="oz"&&r==="ml")s=e*.033814;else return;n.value=s.toFixed(2),n.dataset.lastUnit=t}function Ya(n){if(!n.value)return!0;const t=new Date(n.value),e=new Date;return t>e?(alert("Cannot select future times. Please select a time in the past."),n.value=ae(e),!1):!0}function oe(n){const t=document.getElementById(n);t&&(t.addEventListener("blur",()=>{Ya(t)}),t.addEventListener("change",()=>{Ya(t)}))}function Fs(n){var t,e,r;document.querySelectorAll(".tab-button").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".view").forEach(s=>s.style.display="none"),n==="entry"?((t=document.getElementById("entry-tab"))==null||t.classList.add("active"),document.getElementById("entry-view").style.display="block",Gi()):n==="timeline"?((e=document.getElementById("timeline-tab"))==null||e.classList.add("active"),document.getElementById("timeline-view").style.display="block",Ve(),De()):n==="weekly"&&((r=document.getElementById("weekly-tab"))==null||r.classList.add("active"),document.getElementById("weekly-view").style.display="block",Ve()),window.scrollTo(0,0)}function gp(){const n=document.getElementById("entry-type"),t=document.getElementById("submit-entry");n.addEventListener("change",_p);const e=document.getElementById("bottle-type");e&&e.addEventListener("change",Ep),Tp();const r=document.getElementById("edit-bottle-type");r&&r.addEventListener("change",vp),Ip(),t.addEventListener("click",wp);const s=document.getElementById("vitamin-d-checkbox");s&&s.addEventListener("change",dp);const o=document.getElementById("refresh-button");o&&o.addEventListener("click",()=>{window.location.reload()});const a=document.getElementById("entry-tab"),c=document.getElementById("timeline-tab"),h=document.getElementById("weekly-tab");a.addEventListener("click",()=>Fs("entry")),c.addEventListener("click",()=>Fs("timeline")),h.addEventListener("click",()=>Fs("weekly"));const d=document.getElementById("prev-week"),m=document.getElementById("next-week"),E=document.getElementById("current-week");d.addEventListener("click",()=>Xa(-1)),m.addEventListener("click",()=>Xa(1)),E&&E.addEventListener("click",Rp);const w=document.getElementById("save-edit"),D=document.getElementById("cancel-edit");w.addEventListener("click",Vp),D.addEventListener("click",xc);const P=document.getElementById("start-date-filter"),b=document.getElementById("end-date-filter"),V=document.getElementById("type-filter"),L=document.getElementById("today-button"),O=document.getElementById("yesterday-button"),U=document.getElementById("two-days-ago-button"),K=document.getElementById("three-days-ago-button"),et=document.getElementById("all-time-button");P.addEventListener("change",()=>De()),b.addEventListener("change",()=>De()),V.addEventListener("change",()=>De()),L.addEventListener("click",()=>vn("today")),O.addEventListener("click",()=>vn("yesterday")),U.addEventListener("click",()=>vn("two-days-ago")),K.addEventListener("click",()=>vn("three-days-ago")),et.addEventListener("click",()=>vn("all-time")),oe("bottle-time"),oe("diaper-time"),oe("pump-start-time"),oe("sleep-start-time"),oe("edit-bottle-time"),oe("edit-diaper-time"),oe("edit-pump-start-time"),oe("edit-sleep-start-time");const Y=document.getElementById("graph-start-date"),I=document.getElementById("graph-end-date");if(Y&&I){const y=new Date(2025,10,5);Y.value=Ct(y),I.value=Ct(new Date)}const _=document.getElementById("update-graph-btn");_&&_.addEventListener("click",Dp)}function Br(){const t=ae(new Date),e=document.getElementById("bottle-time"),r=document.getElementById("diaper-time"),s=document.getElementById("pump-start-time"),o=document.getElementById("sleep-start-time");e&&(e.value=t),r&&(r.value=t),s&&(s.value=t),o&&(o.value=t)}async function yp(){const n=document.getElementById("submit-entry"),t=document.getElementById("submit-status");try{const e=gt(pt(at,"entries"),Q("type","==","Sleep"),yt("startTime","desc"),Hn(1)),r=await Et(e);if(!r.empty){const s=r.docs[0].data();if(!s.endTime){const o=s.startTime.toDate();n.style.display="none",t.className="error",t.textContent=`Sleep entry ongoing since ${li(o)}. End that entry before adding a new one.`,t.style.display="block"}}}catch(e){console.error("Error checking ongoing sleep:",e)}}function _p(n){const e=n.target.value,r=document.getElementById("bottle-fields"),s=document.getElementById("diaper-fields"),o=document.getElementById("pump-fields"),a=document.getElementById("sleep-fields"),c=document.getElementById("submit-entry"),h=document.getElementById("submit-status"),d=document.getElementById("bottle-type-container");if(r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none",d.style.display="none",h.style.display="none",e==="bottle-breast-milk"||e==="bottle-formula"){r.style.display="block",c.style.display="block";const m=document.getElementById("bottle-unit"),E=document.getElementById("bottle-amount");E.dataset.lastUnit=m.value,e==="bottle-formula"&&(d.style.display="block")}else if(e==="diaper")s.style.display="block",c.style.display="block";else if(e==="pump"){o.style.display="block",c.style.display="block";const m=document.getElementById("pump-unit"),E=document.getElementById("pump-amount");E.dataset.lastUnit=m.value}else e==="sleep"?(a.style.display="block",c.style.display="block",yp()):c.style.display="none";Br(),Br()}function Ep(n){const e=n.target.value,r=document.getElementById("bottle-notes"),s=document.getElementById("bottle-type-indicator"),o=document.getElementById("bottle-type-text");if(!r)return;const a=r.value,c=a.split(`
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
`+h,s.selectionStart=a+2,s.selectionEnd=a+2}else if(e.key.length===1){const c=s.value.substring(0,a+1),h=s.value.substring(a+1);s.value=c+e.key+h,s.selectionStart=a+2,s.selectionEnd=a+2}return}}}),n.addEventListener("paste",e=>{const r=t.value;if(!r)return;const o=e.target.selectionStart,a=r.length;if(o<=a){e.preventDefault();return}}))}async function wp(){const n=document.getElementById("entry-type").value,t=document.getElementById("submit-status");try{let e=null;const r=new Date;if(n==="bottle-breast-milk"||n==="bottle-formula"){const s=document.getElementById("bottle-time"),o=s.value,a=parseFloat(document.getElementById("bottle-amount").value),c=document.getElementById("bottle-unit").value,h=document.getElementById("bottle-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");if(n==="bottle-formula"&&!document.getElementById("bottle-type").value)throw new Error("Formula type is required");e={type:"Feed",subType:n==="bottle-breast-milk"?"Breast Milk":"Formula",startTime:d,amount:a,unit:c,notes:h}}else if(n==="diaper"){const s=document.getElementById("diaper-time"),o=s.value,a=document.getElementById("diaper-type").value,c=document.getElementById("diaper-notes").value;if(!o)throw new Error("Start time is required");const h=new Date(s.value);if(h>r)throw new Error("Cannot add entries in the future");if(!a)throw new Error("Diaper type is required");e={type:"Diaper",diaperType:a,startTime:h,notes:c}}else if(n==="pump"){const s=document.getElementById("pump-start-time"),o=s.value,a=parseFloat(document.getElementById("pump-amount").value),c=document.getElementById("pump-unit").value,h=document.getElementById("pump-notes").value;if(!o)throw new Error("Start time is required");const d=new Date(s.value);if(d>r)throw new Error("Cannot add entries in the future");if(isNaN(a)||a<=0)throw new Error("Amount must be greater than 0");e={type:"Pump",startTime:d,amount:a,unit:c,notes:h}}else if(n==="sleep"){const s=document.getElementById("sleep-start-time"),o=document.getElementById("sleep-end-time"),a=document.getElementById("sleep-notes").value;if(!s.value)throw new Error("Start time is required");const c=new Date(s.value);if(c>r)throw new Error("Cannot add entries in the future");const h=gt(pt(at,"entries"),Q("type","==","Sleep"),yt("startTime","desc"),Hn(1)),d=await Et(h);if(!d.empty&&!d.docs[0].data().endTime)throw new Error("A sleep entry is already ongoing. End that entry before adding a new one.");let m;if(o.value){if(m=new Date(o.value),m>r)throw new Error("End time cannot be in the future");if(m<=c)throw new Error("End time must be after start time")}e={type:"Sleep",startTime:c,endTime:m,notes:a}}e&&(await rp(pt(at,"entries"),{...e,startTime:q.fromDate(e.startTime),endTime:e.endTime?q.fromDate(e.endTime):null}),t.className="success",t.textContent="Entry added successfully!",t.style.display="block",Ap(),e.type==="Feed"?await Mc():e.type==="Diaper"?await Bc():e.type==="Pump"?await Lc():e.type==="Sleep"&&(await qc(),await zc()),Ve(),setTimeout(()=>{t.style.display="none"},3e3))}catch(e){t.className="error",t.textContent=e instanceof Error?e.message:"Failed to add entry",t.style.display="block"}}function Ap(){document.getElementById("entry-type").value="",document.getElementById("bottle-amount").value="",document.getElementById("bottle-type").value="",document.getElementById("bottle-notes").value="",document.getElementById("diaper-notes").value="",document.getElementById("pump-amount").value="",document.getElementById("pump-notes").value="",document.getElementById("sleep-end-time").value="",document.getElementById("sleep-notes").value="",document.getElementById("bottle-fields").style.display="none",document.getElementById("bottle-type-container").style.display="none",document.getElementById("diaper-fields").style.display="none",document.getElementById("pump-fields").style.display="none",document.getElementById("sleep-fields").style.display="none",document.getElementById("submit-entry").style.display="none",Br()}function vn(n){const t=document.getElementById("start-date-filter"),e=document.getElementById("end-date-filter"),r=new Date;if(r.setHours(0,0,0,0),n==="all-time"){const s=new Date(2025,10,5);t.value=Ct(s),e.value=Ct(r)}else if(n==="today")t.value=Ct(r),e.value=Ct(r);else if(n==="yesterday"){const s=new Date(r);s.setDate(s.getDate()-1),t.value=Ct(s),e.value=Ct(s)}else if(n==="two-days-ago"){const s=new Date(r);s.setDate(s.getDate()-2),t.value=Ct(s),e.value=Ct(s)}else if(n==="three-days-ago"){const s=new Date(r);s.setDate(s.getDate()-3),t.value=Ct(s),e.value=Ct(s)}De()}async function De(){const n=document.getElementById("timeline-list"),t=document.getElementById("timeline-loading"),e=document.getElementById("start-date-filter").value,r=document.getElementById("end-date-filter").value,s=document.getElementById("type-filter").value;t.style.display="block",n.innerHTML="";const o=document.querySelector(".filter-summary");o&&o.remove();try{let a=gt(pt(at,"entries"),yt("startTime","desc"));if(e&&r){const[w,D,P]=e.split("-").map(Number),b=new Date(w,D-1,P,0,0,0,0),[V,L,O]=r.split("-").map(Number),U=new Date(V,L-1,O,23,59,59,999);a=gt(pt(at,"entries"),Q("startTime",">=",q.fromDate(b)),Q("startTime","<=",q.fromDate(U)),yt("startTime","desc"))}const c=await Et(a);let h=[];if(e){const[w,D,P]=e.split("-").map(Number),b=new Date(w,D-1,P-1,19,0,0,0),V=new Date(w,D-1,P,0,0,0,0),L=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(b)),Q("startTime","<",q.fromDate(V)),yt("startTime","desc"));try{(await Et(L)).forEach(U=>{h.push({id:U.id,data:U.data()})})}catch(O){console.error("Error fetching prior evening sleep:",O)}}const d=[],m=new Set;c.forEach(w=>{d.push({id:w.id,data:w.data()}),m.add(w.id)}),h.forEach(w=>{m.has(w.id)||(d.push(w),m.add(w.id))}),d.sort((w,D)=>D.data.startTime.toDate().getTime()-w.data.startTime.toDate().getTime());const E={bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleep:{totalMs:0,sessions:0}};if(d.length===0)n.innerHTML="<p>No entries found.</p>";else{let w="",D=!1;if(d.forEach(({id:P,data:b})=>{if(s!=="all"){let p="";if(b.type==="Feed"&&b.subType==="Breast Milk"?p="bottle-breast-milk":b.type==="Feed"&&b.subType==="Formula"?p="bottle-formula":b.type==="Diaper"?p="diaper-all":b.type==="Pump"?p="pump":b.type==="Sleep"&&(p="sleep"),s==="bottle-all"){if(b.type!=="Feed")return}else if(s==="diaper-all"){if(b.type!=="Diaper")return}else if(s==="diaper-pee"){if(b.type!=="Diaper"||b.diaperType!=="Pee"&&b.diaperType!=="Mixed")return}else if(s==="diaper-poo"){if(b.type!=="Diaper"||b.diaperType!=="Poo"&&b.diaperType!=="Mixed")return}else if(p!==s)return}if(b.type==="Feed"){const p=de(b.amount,b.unit);E.bottles.total+=p,E.bottles.sessions++,b.subType==="Breast Milk"?E.bottles.breastMilk+=p:b.subType==="Formula"&&(E.bottles.formula+=p)}else if(b.type==="Diaper")E.diapers.total++,b.diaperType==="Pee"?E.diapers.pee++:b.diaperType==="Poo"?E.diapers.poo++:b.diaperType==="Mixed"&&E.diapers.mixed++;else if(b.type==="Pump"){const p=de(b.amount,b.unit);E.pumps.total+=p,E.pumps.sessions++}else b.type==="Sleep"&&E.sleep.sessions++;D=!0;const V=b.startTime.toDate(),L=ci(V);if(L!==w){w=L;const p=document.createElement("div");p.className="timeline-date-header",p.textContent=L,n.appendChild(p)}const O=document.createElement("div");O.className="timeline-entry";let U=b.type,K="",et="";if(b.type==="Feed")U=`Bottle - ${b.subType}`,K=`<div class="timeline-entry-details">Amount: ${Kt(b.amount,b.unit)}</div>`,et="#d9ebf2";else if(b.type==="Breast Feed")U="Breast Feed",K="",et="#d9ebf2";else if(b.type==="Diaper")K=`<div class="timeline-entry-details">Type: ${b.diaperType}</div>`,et="#fce2d4";else if(b.type==="Pump")K=`<div class="timeline-entry-details">Amount: ${Kt(b.amount,b.unit)}</div>`,et="#e2daf2";else if(b.type==="Sleep")if(U="Sleep",et="#d4e8d4",b.endTime){const p=b.startTime.toDate(),v=b.endTime.toDate(),T=v.getTime()-p.getTime(),g=Math.floor(T/(1e3*60*60)),B=Math.floor(T%(1e3*60*60)/(1e3*60));K=`<div class="timeline-entry-details">Duration: ${g}h ${B}m</div>`,K+=`<div class="timeline-entry-details">End: ${li(v)}</div>`}else K='<div class="timeline-entry-details">In progress</div>';O.style.backgroundColor=et;const Y=b.notes?`<div class="timeline-entry-notes">${b.notes.replace(/\n/g,"<br>")}</div>`:"";let I="";if(b.type==="Diaper"&&(b.diaperType==="Poo"||b.diaperType==="Mixed")){const p=V.getTime(),v=[];d.forEach(g=>{const B=g.data;B.type==="Diaper"&&(B.diaperType==="Poo"||B.diaperType==="Mixed")&&v.push({time:B.startTime.toDate().getTime()})}),v.sort((g,B)=>B.time-g.time);const T=v.findIndex(g=>g.time===p);if(T<v.length-1){const g=v[T+1].time;I=`<div class="timeline-entry-details" style="color: #666; font-style: italic;">${((p-g)/(1e3*60*60)).toFixed(1)} hours since previous poo</div>`}}O.innerHTML=`
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${U}</span>
                        <span class="timeline-entry-time">${li(V)}</span>
                    </div>
                    ${K}
                    ${Y}
                    ${I}
                    <div class="timeline-entry-actions">
                        <button class="edit-button" data-id="${P}">Edit</button>
                        <button class="delete-button" data-id="${P}">Delete</button>
                    </div>
                `;const _=O.querySelector(".edit-button"),y=O.querySelector(".delete-button");_.addEventListener("click",()=>Cp(P,b)),y.addEventListener("click",()=>kp(P)),n.appendChild(O)}),!D)n.innerHTML="<p>No entries match the selected filters.</p>";else{const P=document.createElement("div");P.className="filter-summary";let b='<div class="summary-header">Summary</div><div class="summary-stats">';if((s==="all"||s==="bottle-breast-milk"||s==="bottle-formula"||s==="bottle-all")&&(b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Bottles</div>
                            <div class="stat-line">Number of feeds: ${E.bottles.sessions}</div>
                            <div class="stat-line">Breast Milk: ${Kt(E.bottles.breastMilk,"oz")}</div>
                            <div class="stat-line">Formula: ${Kt(E.bottles.formula,"oz")}</div>
                            <div class="stat-line">Total volume: ${Kt(E.bottles.total,"oz")}</div>
                        </div>
                    `),s==="all"||s==="diaper-all"||s==="diaper-pee"||s==="diaper-poo"){const L=E.diapers.pee+E.diapers.mixed,O=E.diapers.poo+E.diapers.mixed;b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${L}</div>
                            <div class="stat-line">Poo: ${O}</div>
                        </div>
                    `}if((s==="all"||s==="pump")&&(b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Pumps</div>
                            <div class="stat-line">Total volume: ${Kt(E.pumps.total,"oz")}</div>
                            <div class="stat-line">Number of sessions: ${E.pumps.sessions}</div>
                        </div>
                    `),s==="all"||s==="sleep"){let L=0;if(e&&r){const K=[];d.forEach(W=>{const bt=W.data;bt.type==="Sleep"&&K.push({startTime:bt.startTime.toDate(),endTime:bt.endTime?bt.endTime.toDate():null})});const[et,Y,I]=e.split("-").map(Number),_=new Date(et,Y-1,I);_.setDate(_.getDate()-1);const y=new Date(_);y.setHours(0,0,0,0);const p=new Date(_);p.setHours(23,59,59,999);try{const W=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(y)),Q("startTime","<=",q.fromDate(p)),yt("startTime","asc"));(await Et(W)).forEach(Lt=>{const st=Lt.data();K.push({startTime:st.startTime.toDate(),endTime:st.endTime?st.endTime.toDate():null})})}catch(W){console.error("Error fetching prior sleep entries:",W)}const[v,T,g]=r.split("-").map(Number),B=new Date(v,T-1,g);B.setDate(B.getDate()+1);const Bt=new Date(B);Bt.setHours(0,0,0,0);const $=new Date(B);$.setHours(23,59,59,999);try{const W=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(Bt)),Q("startTime","<=",q.fromDate($)),yt("startTime","asc"));(await Et(W)).forEach(Lt=>{const st=Lt.data();K.push({startTime:st.startTime.toDate(),endTime:st.endTime?st.endTime.toDate():null})})}catch(W){console.error("Error fetching post sleep entries:",W)}const x=new Date(et,Y-1,I),ut=new Date(v,T-1,g),lt=new Date(x);for(;lt<=ut;){const W=Yi(lt);L+=Qi(K,W.start,W.end),lt.setDate(lt.getDate()+1)}}const O=Math.floor(L/(1e3*60*60)),U=Math.floor(L%(1e3*60*60)/(1e3*60));b+=`
                        <div class="stat-group">
                            <div class="stat-group-title">Sleep</div>
                            <div class="stat-line">Total sleep: ${O}h ${U}m</div>
                            <div class="stat-line">Number of sleeps: ${E.sleep.sessions}</div>
                            <div class="stat-line" style="font-size: 11px; color: #888;">prev day 7pm - next day 7am</div>
                        </div>
                    `}b+="</div>",P.innerHTML=b;const V=document.querySelector(".filter-section");V&&V.parentNode&&V.parentNode.insertBefore(P,n)}}}catch{n.innerHTML='<p class="error">Failed to load timeline</p>'}finally{t.style.display="none"}}function Qi(n,t,e){let r=0;for(const s of n){if(!s.endTime)continue;const o=Math.max(s.startTime.getTime(),t.getTime()),a=Math.min(s.endTime.getTime(),e.getTime());a>o&&(r+=a-o)}return r}function Yi(n){const t=new Date(n);t.setHours(0,0,0,0);const e=new Date(t);e.setDate(e.getDate()-1),e.setHours(19,0,0,0);const r=new Date(t);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),{start:e,end:r}}function bp(n){const t=Math.floor(n/36e5),e=Math.floor(n%(1e3*60*60)/(1e3*60));return`${t}h ${e}m`}async function Ve(){const n=++we,t=document.getElementById("weekly-stats"),e=document.getElementById("weekly-loading"),r=document.getElementById("week-range"),s=document.getElementById("prev-week"),o=document.getElementById("next-week"),a=document.getElementById("current-week"),c=new Date(2025,10,5),h=Xe(c),m=Xe(new Date),E=new Date($t);E.setHours(0,0,0,0),E<h&&($t=new Date(h)),E.getTime()<=h.getTime()?s.disabled=!0:s.disabled=!1,E.getTime()>=m.getTime()?o.disabled=!0:o.disabled=!1,a&&(E.getTime()===m.getTime()?(a.disabled=!0,a.style.backgroundColor="#999",a.style.color="#ccc",a.style.cursor="default"):(a.disabled=!1,a.style.backgroundColor="",a.style.color="",a.style.cursor="pointer"));const w=hp($t);r.textContent=`${ci($t).split(",")[1].trim()} - ${ci(w).split(",")[1].trim()}`,e.style.display="block",t.innerHTML="";try{const D=gt(pt(at,"entries"),Q("startTime",">=",q.fromDate($t)),Q("startTime","<=",q.fromDate(w)),yt("startTime","asc")),P=await Et(D);if(n!==we)return;const b=new Date("2025-11-11");b.setHours(0,0,0,0);const V={},L=[];for(let $=0;$<7;$++){const x=new Date($t);if(x.setDate(x.getDate()+$),x.setHours(0,0,0,0),x>=b){const ut=Mr(x);L.push(ut)}}if(L.length>0){const $=await Promise.all(L.map(x=>Cc(sn(at,"vitaminD",x))));L.forEach((x,ut)=>{var W;const lt=$[ut];V[x]=lt.exists()&&((W=lt.data())==null?void 0:W.given)===!0})}if(n!==we)return;const O=[];P.forEach($=>{const x=$.data();x.type==="Sleep"&&O.push({startTime:x.startTime.toDate(),endTime:x.endTime?x.endTime.toDate():null})});const U=new Date($t);U.setDate(U.getDate()-1),U.setHours(0,0,0,0);const K=new Date($t);K.setHours(0,0,0,0);const et=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(U)),Q("startTime","<",q.fromDate(K)),yt("startTime","asc")),Y=await Et(et);if(n!==we)return;Y.forEach($=>{const x=$.data();O.push({startTime:x.startTime.toDate(),endTime:x.endTime?x.endTime.toDate():null})});const I=new Date(w);I.setDate(I.getDate()+1),I.setHours(0,0,0,0);const _=new Date(I);_.setDate(_.getDate()+1),_.setHours(0,0,0,0);const y=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(I)),Q("startTime","<",q.fromDate(_)),yt("startTime","asc")),p=await Et(y);if(n!==we)return;p.forEach($=>{const x=$.data();O.push({startTime:x.startTime.toDate(),endTime:x.endTime?x.endTime.toDate():null})});const v={};for(let $=0;$<7;$++){const x=new Date($t);x.setDate(x.getDate()+$),x.setHours(0,0,0,0);const ut=`${x.getFullYear()}-${x.getMonth()}-${x.getDate()}`,lt=Mr(x),W=Yi(x);v[ut]={date:new Date(x),vitaminD:x>=b?V[lt]===!0:null,bottles:{total:0,breastMilk:0,formula:0,sessions:0},diapers:{total:0,pee:0,poo:0,mixed:0},pumps:{total:0,sessions:0},sleepMs:Qi(O,W.start,W.end)}}P.forEach($=>{const x=$.data(),ut=x.startTime.toDate(),lt=new Date(ut);lt.setHours(0,0,0,0);const W=`${lt.getFullYear()}-${lt.getMonth()}-${lt.getDate()}`;if(v[W]){if(x.type==="Feed"){const bt=de(x.amount,x.unit);v[W].bottles.total+=bt,v[W].bottles.sessions++,x.subType==="Breast Milk"?v[W].bottles.breastMilk+=bt:x.subType==="Formula"&&(v[W].bottles.formula+=bt)}else if(x.type==="Breast Feed")v[W].bottles.sessions++;else if(x.type==="Diaper")v[W].diapers.total++,x.diaperType==="Pee"?v[W].diapers.pee++:x.diaperType==="Poo"?v[W].diapers.poo++:x.diaperType==="Mixed"&&v[W].diapers.mixed++;else if(x.type==="Pump"){const bt=de(x.amount,x.unit);v[W].pumps.total+=bt,v[W].pumps.sessions++}}});const T=Object.keys(v).map($=>v[$]).sort(($,x)=>$.date.getTime()-x.date.getTime()),g=document.createElement("div");g.className="weekly-scroll-container";const B=new Date;B.setHours(0,0,0,0);let Bt=-1;T.forEach(($,x)=>{const ut=document.createElement("div");ut.className="day-stats";const lt=new Date($.date);lt.setHours(0,0,0,0),B.getTime()===lt.getTime()&&(ut.classList.add("current-day"),Bt=x);const W=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][$.date.getDay()],bt=`${$.date.getMonth()+1}/${$.date.getDate()}`,Lt=$.diapers.pee+$.diapers.mixed,st=$.diapers.poo+$.diapers.mixed;let Kn="";if($.vitaminD!==null){const _e=$.vitaminD?"Yes":"No";Kn=`
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${$.vitaminD?"#4caf50":"#f44336"}; font-weight: bold;">${_e}</div>
                    </div>
                `}ut.innerHTML=`
                <div class="day-stats-header">${W}<br>${bt}</div>
                ${Kn}
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${$.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${Kt($.bottles.breastMilk,"oz")}</div>
                    <div class="stat-line">Formula: ${Kt($.bottles.formula,"oz")}</div>
                    <div class="stat-line">Total volume: ${Kt($.bottles.total,"oz")}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${Lt}</div>
                    <div class="stat-line">Poo: ${st}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${Kt($.pumps.total,"oz")}</div>
                    <div class="stat-line">Number of sessions: ${$.pumps.sessions}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${bp($.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][($.date.getDay()+6)%7]} 7pm - ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][($.date.getDay()+1)%7]} 7am</div>
                </div>
            `,g.appendChild(ut)}),t.appendChild(g),Bt!==-1&&setTimeout(()=>{const $=g.children[Bt];if($){const x=g.offsetWidth,ut=$.offsetWidth,lt=$.offsetLeft-x/2+ut/2;g.scrollTo({left:Math.max(0,lt),behavior:"smooth"})}},100)}catch{n===we&&(t.innerHTML='<p class="error">Failed to load weekly view</p>')}finally{n===we&&(e.style.display="none",await Sp())}}async function Sp(){var D,P,b,V,L,O;const n=document.getElementById("json-content"),t=document.getElementById("toggle-json"),e=document.getElementById("copy-json"),r=document.querySelector(".json-tabs"),s=document.getElementById("feeds-json-tab"),o=document.getElementById("diapers-json-tab"),a=document.getElementById("pumps-json-tab"),c=document.getElementById("sleep-json-tab");if(!n||!t||!e)return;let h="feeds",d=[],m=[],E=[],w=[];try{const U=gt(pt(at,"entries"),yt("startTime","desc"));(await Et(U)).docs.forEach(g=>{const B=g.data();B.type==="Feed"?d.push({type:B.type,subType:B.subType,startTime:B.startTime.toDate().toISOString(),amount:B.amount,unit:B.unit,notes:B.notes||""}):B.type==="Diaper"?m.push({type:B.type,startTime:B.startTime.toDate().toISOString(),diaperType:B.diaperType,notes:B.notes||""}):B.type==="Pump"?E.push({type:B.type,startTime:B.startTime.toDate().toISOString(),amount:B.amount,unit:B.unit,notes:B.notes||""}):B.type==="Sleep"&&w.push({type:B.type,startTime:B.startTime.toDate().toISOString(),endTime:B.endTime?B.endTime.toDate().toISOString():null,notes:B.notes||""})});const et=()=>{let g;h==="feeds"?g=d:h==="diapers"?g=m:h==="sleep"?g=w:g=E;const B=JSON.stringify(g,null,2);return n.textContent=B,B};let Y=et();const I=t.cloneNode(!0),_=e.cloneNode(!0),y=s==null?void 0:s.cloneNode(!0),p=o==null?void 0:o.cloneNode(!0),v=a==null?void 0:a.cloneNode(!0),T=c==null?void 0:c.cloneNode(!0);(D=t.parentNode)==null||D.replaceChild(I,t),(P=e.parentNode)==null||P.replaceChild(_,e),s&&y&&((b=s.parentNode)==null||b.replaceChild(y,s)),o&&p&&((V=o.parentNode)==null||V.replaceChild(p,o)),a&&v&&((L=a.parentNode)==null||L.replaceChild(v,a)),c&&T&&((O=c.parentNode)==null||O.replaceChild(T,c)),I.addEventListener("click",()=>{const g=n.style.display==="none";n.style.display=g?"block":"none",_.style.display=g?"block":"none",r&&(r.style.display=g?"flex":"none"),I.textContent=g?"Hide JSON Data":"Show JSON Data"}),_.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Y);const g=_.textContent;_.textContent="✓",setTimeout(()=>{_.textContent=g},2e3)}catch{alert("Failed to copy to clipboard")}}),y&&y.addEventListener("click",()=>{h="feeds",y.classList.add("active"),p.classList.remove("active"),v.classList.remove("active"),T.classList.remove("active"),Y=et()}),p&&p.addEventListener("click",()=>{h="diapers",p.classList.add("active"),y.classList.remove("active"),v.classList.remove("active"),T.classList.remove("active"),Y=et()}),v&&v.addEventListener("click",()=>{h="pumps",v.classList.add("active"),y.classList.remove("active"),p.classList.remove("active"),T.classList.remove("active"),Y=et()}),T&&T.addEventListener("click",()=>{h="sleep",T.classList.add("active"),y.classList.remove("active"),p.classList.remove("active"),v.classList.remove("active"),Y=et()})}catch{n.textContent="Failed to load data"}}async function Dp(){const n=document.getElementById("graph-start-date").value,t=document.getElementById("graph-end-date").value;if(!n||!t){alert("Please select both start and end dates");return}const e=[];if(document.querySelectorAll(".graph-checkbox:checked").forEach(y=>{e.push(y.dataset.series)}),e.length===0){alert("Please select at least one data series to plot");return}const r=new Date(n);r.setHours(0,0,0,0);const s=new Date(t);s.setHours(23,59,59,999);const o=gt(pt(at,"entries"),Q("startTime",">=",q.fromDate(r)),Q("startTime","<=",q.fromDate(s)),yt("startTime","asc")),a=await Et(o),c=new Date(r);c.setDate(c.getDate()-1),c.setHours(0,0,0,0);const h=new Date(r);h.setHours(0,0,0,0);const d=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(c)),Q("startTime","<",q.fromDate(h)),yt("startTime","asc")),m=await Et(d),E=new Date(s);E.setDate(E.getDate()+1),E.setHours(0,0,0,0);const w=new Date(E);w.setDate(w.getDate()+1),w.setHours(0,0,0,0);const D=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(E)),Q("startTime","<",q.fromDate(w)),yt("startTime","asc")),P=await Et(D),b={},V=new Date(r);for(;V<=s;){const y=Ct(V);b[y]={"bottle-breast-milk":0,"bottle-formula":0,"bottle-all":0,"diaper-pee":0,"diaper-poo":0,"diaper-mixed":0,"diaper-all":0,pump:0,sleep:0},V.setDate(V.getDate()+1)}const L=[];if(a.forEach(y=>{const p=y.data(),v=p.startTime.toDate(),T=Ct(v);if(b[T]){if(p.type==="Feed"&&p.subType==="Breast Milk"){const g=de(p.amount,p.unit);b[T]["bottle-breast-milk"]+=g,b[T]["bottle-all"]+=g}else if(p.type==="Feed"&&p.subType==="Formula"){const g=de(p.amount,p.unit);b[T]["bottle-formula"]+=g,b[T]["bottle-all"]+=g}else if(p.type==="Diaper")(p.diaperType==="Pee"||p.diaperType==="Mixed")&&b[T]["diaper-pee"]++,(p.diaperType==="Poo"||p.diaperType==="Mixed")&&b[T]["diaper-poo"]++,p.diaperType==="Mixed"&&b[T]["diaper-mixed"]++,b[T]["diaper-all"]++;else if(p.type==="Pump"){const g=de(p.amount,p.unit);b[T].pump+=g}}p.type==="Sleep"&&L.push({startTime:p.startTime.toDate(),endTime:p.endTime?p.endTime.toDate():null})}),m.forEach(y=>{const p=y.data();L.push({startTime:p.startTime.toDate(),endTime:p.endTime?p.endTime.toDate():null})}),P.forEach(y=>{const p=y.data();L.push({startTime:p.startTime.toDate(),endTime:p.endTime?p.endTime.toDate():null})}),e.includes("sleep"))for(const y of Object.keys(b)){const[p,v,T]=y.split("-").map(Number),g=new Date(p,v-1,T),B=Yi(g),Bt=Qi(L,B.start,B.end);b[y].sleep=parseFloat((Bt/(1e3*60*60)).toFixed(1))}const O=Object.keys(b).sort(),U=[],K={"bottle-breast-milk":"#4CAF50","bottle-formula":"#2196F3","bottle-all":"#9C27B0","diaper-pee":"#FFEB3B","diaper-poo":"#795548","diaper-mixed":"#FF9800","diaper-all":"#607D8B",pump:"#E91E63",sleep:"#00897B"},et={"bottle-breast-milk":"Bottle - Breast Milk","bottle-formula":"Bottle - Formula","bottle-all":"Bottle - All","diaper-pee":"Diaper - Pee","diaper-poo":"Diaper - Poo","diaper-mixed":"Diaper - Mixed","diaper-all":"Diaper - All",pump:"Pump",sleep:"Sleep (hrs, 7pm-7am)"};e.forEach(y=>{U.push({label:et[y],data:O.map(p=>b[p][y]),borderColor:K[y],backgroundColor:K[y]+"33",tension:.1,fill:!1})});const I=document.getElementById("data-chart").getContext("2d");Os&&Os.destroy(),Os=new window.Chart(I,{type:"line",data:{labels:O.map(y=>{const[,p,v]=y.split("-");return`${p}/${v}`}),datasets:U},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,interaction:{mode:"nearest",intersect:!1,axis:"x"},plugins:{legend:{display:!0,position:"top"},title:{display:!0,text:"Baby Tracker Data"},tooltip:{enabled:!0,callbacks:{label:function(y){let p=y.dataset.label||"";p&&(p+=": ");const v=y.parsed.y,T=y.dataset.label.toLowerCase();return T.includes("diaper")?p+=Math.round(v):T.includes("sleep")?p+=v.toFixed(1)+" hrs":p+=v.toFixed(1)+" oz",p}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(y){return e.every(v=>v.startsWith("diaper-"))?Math.round(y):y%1===0?y:y.toFixed(1)+" oz"}},title:{display:!0,text:"Amount (oz) / Count / Hours"}}}}});const _=document.querySelector(".chart-container");_&&_.classList.add("active")}function Xa(n){const t=new Date(2025,10,5),e=Xe(t),s=Xe(new Date),o=new Date($t);o.setDate(o.getDate()+n*7),o.setHours(0,0,0,0);const a=new Date(e);a.setHours(0,0,0,0);const c=new Date(s);c.setHours(0,0,0,0),!(o.getTime()<a.getTime())&&(o.getTime()>c.getTime()||($t=o,Ve()))}function Rp(){$t=Xe(new Date),Ve()}function de(n,t){return t==="ml"?n*.033814:n}function Pp(n,t){return t==="oz"?n*29.5735:n}function Kt(n,t){const e=de(n,t),r=Pp(n,t);return`${e.toFixed(1)} oz / ${r.toFixed(0)} ml`}function Cp(n,t){xr=n;const e=document.getElementById("edit-modal"),r=document.getElementById("edit-bottle-fields"),s=document.getElementById("edit-diaper-fields"),o=document.getElementById("edit-pump-fields"),a=document.getElementById("edit-sleep-fields");r.style.display="none",s.style.display="none",o.style.display="none",a.style.display="none";const c=t.startTime.toDate();if(t.type==="Feed"){r.style.display="block";const h=document.getElementById("edit-bottle-unit"),d=document.getElementById("edit-bottle-amount"),m=document.getElementById("edit-bottle-type-container"),E=document.getElementById("edit-bottle-type");document.getElementById("edit-bottle-time").value=ae(c),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-bottle-notes").value=t.notes||"";const w=document.getElementById("edit-bottle-type-indicator"),D=document.getElementById("edit-bottle-type-text");if(t.subType==="Formula"){m.style.display="block";const b=(t.notes||"").split(`
`)[0];b==="Bobbie"||b==="Enfamil"?(E.value=b,w&&D&&(D.textContent=b,w.style.display="block")):(E.value="",w&&(w.style.display="none"))}else m.style.display="none",E.value="",w&&(w.style.display="none")}else if(t.type==="Diaper")s.style.display="block",document.getElementById("edit-diaper-time").value=ae(c),document.getElementById("edit-diaper-type").value=t.diaperType,document.getElementById("edit-diaper-notes").value=t.notes||"";else if(t.type==="Pump"){o.style.display="block";const h=document.getElementById("edit-pump-unit"),d=document.getElementById("edit-pump-amount");document.getElementById("edit-pump-start-time").value=ae(c),d.value=t.amount.toFixed(2),h.value=t.unit||"oz",d.dataset.lastUnit=t.unit||"oz",document.getElementById("edit-pump-notes").value=t.notes||""}else t.type==="Sleep"&&(a.style.display="block",document.getElementById("edit-sleep-start-time").value=ae(c),t.endTime?document.getElementById("edit-sleep-end-time").value=ae(t.endTime.toDate()):document.getElementById("edit-sleep-end-time").value=ae(new Date),document.getElementById("edit-sleep-notes").value=t.notes||"");e.style.display="block"}function xc(){const n=document.getElementById("edit-modal");n.style.display="none",xr=null;const t=document.getElementById("edit-status");t.style.display="none"}async function Vp(){if(!xr)return;const n=document.getElementById("edit-status");try{const t=document.getElementById("edit-bottle-fields"),e=document.getElementById("edit-diaper-fields"),r=document.getElementById("edit-pump-fields"),s=document.getElementById("edit-sleep-fields");let o={};const a=new Date;if(t.style.display==="block"){const c=document.getElementById("edit-bottle-time"),h=c.value,d=parseFloat(document.getElementById("edit-bottle-amount").value),m=document.getElementById("edit-bottle-unit").value,E=document.getElementById("edit-bottle-notes").value,w=document.getElementById("edit-bottle-type-container"),D=document.getElementById("edit-bottle-type").value;if(!h)throw new Error("Start time is required");const P=new Date(c.value);if(P>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");if(w.style.display!=="none"&&!D)throw new Error("Formula type is required");o={startTime:q.fromDate(P),amount:d,unit:m,notes:E}}else if(e.style.display==="block"){const c=document.getElementById("edit-diaper-time"),h=c.value,d=document.getElementById("edit-diaper-type").value,m=document.getElementById("edit-diaper-notes").value;if(!h)throw new Error("Start time is required");const E=new Date(c.value);if(E>a)throw new Error("Cannot set time in the future");if(!d)throw new Error("Diaper type is required");o={startTime:q.fromDate(E),diaperType:d,notes:m}}else if(r.style.display==="block"){const c=document.getElementById("edit-pump-start-time"),h=c.value,d=parseFloat(document.getElementById("edit-pump-amount").value),m=document.getElementById("edit-pump-unit").value,E=document.getElementById("edit-pump-notes").value;if(!h)throw new Error("Start time is required");const w=new Date(c.value);if(w>a)throw new Error("Cannot set time in the future");if(isNaN(d)||d<=0)throw new Error("Amount must be greater than 0");o={startTime:q.fromDate(w),amount:d,unit:m,notes:E}}else if(s.style.display==="block"){const c=document.getElementById("edit-sleep-start-time"),h=document.getElementById("edit-sleep-end-time"),d=document.getElementById("edit-sleep-notes").value;if(!c.value)throw new Error("Start time is required");const m=new Date(c.value);if(m>a)throw new Error("Cannot set time in the future");if(o={startTime:q.fromDate(m),notes:d},h.value){const E=new Date(h.value);if(E>a)throw new Error("End time cannot be in the future");if(E<=m)throw new Error("End time must be after start time");o.endTime=q.fromDate(E)}else o.endTime=null}await ep(sn(at,"entries",xr),o),n.className="success",n.textContent="Entry updated successfully!",n.style.display="block",setTimeout(async()=>{xc(),De(),Ve(),await Xi()},1e3)}catch(t){n.className="error",n.textContent=t instanceof Error?t.message:"Failed to update entry",n.style.display="block"}}async function kp(n){if(confirm("Are you sure you want to delete this entry?"))try{await np(sn(at,"entries",n)),De(),Ve(),await Xi()}catch{alert("Failed to delete entry")}}async function Np(){await Xi(),Vs&&clearInterval(Vs),ks&&clearInterval(ks),Ns&&clearInterval(Ns),xs&&clearInterval(xs),Ms&&clearInterval(Ms),Bs&&clearInterval(Bs),Vs=window.setInterval(()=>Oc(),1e3),ks=window.setInterval(()=>Fc(),1e3),Ns=window.setInterval(()=>Uc(),1e3),xs=window.setInterval(()=>$c(),1e3),Ms=window.setInterval(()=>jc(),1e3),Bs=window.setInterval(()=>Hc(),1e3)}async function Xi(){await Promise.all([Mc(),Bc(),Lc(),qc(),zc()])}async function Mc(){try{const n=gt(pt(at,"entries"),Q("type","==","Feed"),yt("startTime","desc"),Hn(1)),t=await Et(n);if(t.empty)localStorage.removeItem("lastBottleTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastBottleTime",r.toISOString())}Oc()}catch(n){console.error("Error fetching last bottle time:",n)}}async function Bc(){try{const n=gt(pt(at,"entries"),Q("type","==","Diaper"),yt("startTime","desc")),t=await Et(n);let e,r;t.forEach(s=>{const o=s.data(),a=o.startTime.toDate();(o.diaperType==="Pee"||o.diaperType==="Mixed")&&e===void 0&&(e=a),(o.diaperType==="Poo"||o.diaperType==="Mixed")&&r===void 0&&(r=a)}),e!==void 0?localStorage.setItem("lastPeeTime",e.toISOString()):localStorage.removeItem("lastPeeTime"),r!==void 0?localStorage.setItem("lastPooTime",r.toISOString()):localStorage.removeItem("lastPooTime"),Fc(),Uc()}catch(n){console.error("Error fetching last diaper times:",n)}}async function Lc(){try{const n=gt(pt(at,"entries"),Q("type","==","Pump"),yt("startTime","desc"),Hn(1)),t=await Et(n);if(t.empty)localStorage.removeItem("lastPumpTime");else{const r=t.docs[0].data().startTime.toDate();localStorage.setItem("lastPumpTime",r.toISOString())}$c()}catch(n){console.error("Error fetching last pump time:",n)}}function Je(n,t){if(!n)return t;const e=new Date(n),s=new Date().getTime()-e.getTime(),o=Math.floor(s/(1e3*60*60)),a=Math.floor(s%(1e3*60*60)/(1e3*60)),c=Math.floor(s%(1e3*60)/1e3);return o>0?`${o}h ${a}m ${c}s`:a>0?`${a}m ${c}s`:`${c}s`}function Oc(){const n=document.getElementById("last-bottle-value");if(!n)return;const t=localStorage.getItem("lastBottleTime");if(!t){n.innerHTML="No bottles recorded";return}const e=Je(t,"No bottles recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>3){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*3*60*60*1e3),E=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=E>=12?"pm":"am",P=E%12||12;c.push(`${P}:${w} ${D}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*3*60*60*1e3),E=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=E>=12?"pm":"am",P=E%12||12;c.push(`${P}:${w} ${D}`)}const h=c.map((d,m)=>`+ ${(m+1)*3} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${h}</span>`}function Fc(){const n=document.getElementById("last-pee-value");if(!n)return;const t=localStorage.getItem("lastPeeTime");n.textContent=Je(t,"No pee recorded")}function Uc(){const n=document.getElementById("last-poo-value");if(!n)return;const t=localStorage.getItem("lastPooTime");n.textContent=Je(t,"No poo recorded")}function $c(){const n=document.getElementById("last-pump-value");if(!n)return;const t=localStorage.getItem("lastPumpTime");if(!t){n.innerHTML="No pumps recorded";return}const e=Je(t,"No pumps recorded"),r=new Date(t),s=new Date,a=(s.getTime()-r.getTime())/(1e3*60*60),c=[];if(a>4){c.push("in the next minute");for(let d=1;d<=2;d++){const m=new Date(s.getTime()+d*4*60*60*1e3),E=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=E>=12?"pm":"am",P=E%12||12;c.push(`${P}:${w} ${D}`)}}else for(let d=1;d<=3;d++){const m=new Date(r.getTime()+d*4*60*60*1e3),E=m.getHours(),w=String(m.getMinutes()).padStart(2,"0"),D=E>=12?"pm":"am",P=E%12||12;c.push(`${P}:${w} ${D}`)}const h=c.map((d,m)=>`+ ${(m+1)*4} hours: ${d}`).join("<br>");n.innerHTML=`${e}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${h}</span>`}async function qc(){try{const n=gt(pt(at,"entries"),Q("type","==","Sleep"),yt("startTime","desc"),Hn(1)),t=await Et(n);if(t.empty)localStorage.removeItem("lastSleepEndTime"),localStorage.removeItem("sleepInProgressStart");else{const e=t.docs[0].data();e.endTime?(localStorage.setItem("lastSleepEndTime",e.endTime.toDate().toISOString()),localStorage.removeItem("sleepInProgressStart")):(localStorage.removeItem("lastSleepEndTime"),localStorage.setItem("sleepInProgressStart",e.startTime.toDate().toISOString()))}jc()}catch(n){console.error("Error fetching last sleep end time:",n)}}function jc(){const n=document.getElementById("time-awake-value"),t=document.getElementById("time-awake-label");if(!n)return;const e=localStorage.getItem("sleepInProgressStart");if(e){t&&(t.textContent="Time Asleep"),n.textContent=Je(e,"No sleep recorded");return}t&&(t.textContent="Time Awake");const r=localStorage.getItem("lastSleepEndTime");n.textContent=Je(r,"No sleep recorded")}async function zc(){try{const n=new Date,t=new Date(n);t.setHours(7,0,0,0);const e=gt(pt(at,"entries"),Q("type","==","Sleep"),Q("startTime",">=",q.fromDate(t)),yt("startTime","asc")),r=await Et(e);let s=0,o=null;r.forEach(a=>{const c=a.data(),h=c.startTime.toDate();if(h>=t&&h.toDateString()===n.toDateString())if(c.endTime){const d=c.endTime.toDate();s+=d.getTime()-h.getTime()}else o=h.toISOString()}),localStorage.setItem("napTimeCompletedMs",String(s)),o?localStorage.setItem("napTimeInProgressStart",o):localStorage.removeItem("napTimeInProgressStart"),Hc()}catch(n){console.error("Error fetching nap time:",n)}}function Hc(){const n=document.getElementById("nap-time-value");if(!n)return;const t=parseInt(localStorage.getItem("napTimeCompletedMs")||"0",10),e=localStorage.getItem("napTimeInProgressStart");let r=t;if(e){const c=new Date(e);r+=new Date().getTime()-c.getTime()}if(r<=0){n.textContent="0m";return}const s=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60)),a=Math.floor(r%(1e3*60)/1e3);s>0?n.textContent=`${s}h ${o}m ${a}s`:o>0?n.textContent=`${o}m ${a}s`:n.textContent=`${a}s`}window.addEventListener("DOMContentLoaded",()=>{var n,t;if(cp()){const e=document.getElementById("passcode-screen"),r=document.getElementById("app");e.style.display="none",r.style.display="block",setTimeout(()=>{window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0},0),Nc()}else(n=document.getElementById("passcode-submit"))==null||n.addEventListener("click",Qa),(t=document.getElementById("passcode-input"))==null||t.addEventListener("keypress",e=>{e.key==="Enter"&&Qa()})});
