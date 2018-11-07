// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){!function(e,t,n,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return"".concat(o).concat(i)}return"dashify"===t?n(e):"prependIndefiniteArticle"===t?"".concat(r(e)," ").concat(e):e},e)},i=function(e,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],a=r.exec(e);null!==a;){var s={modifiers:[],name:a[1]};if(void 0!==a[3])for(var c=/\\.[^(]+\\(\\)/g,u=c.exec(a[2]);null!==u;)s.modifiers.push(u[0].slice(1,-2)),u=c.exec(a[2]);i.push(s),a=r.exec(e)}var f=i.reduce(function(e,r){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\.".concat(e,"\\\\(\\\\)")}).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(r)).reduce(function(e,i,a){return 0===a?[i]:r.name in n?t(e).concat([o(n[r.name],r.modifiers),i]):t(e).concat([function(e){return o(e[r.name],r.modifiers)},i])},[]):[e]}).reduce(function(e,n){return t(e).concat(t(n))},[])},[e]);return function(e){return f.reduce(function(n,r){return"string"==typeof r?t(n).concat([r]):t(n).concat([r(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===e.code?void 0:i(e.code,t),r=void 0===e.message?void 0:i(e.message,t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=i.cause,s=i.missingParameters,c=void 0===r?new Error:new Error(r(s));return null!==a&&(c.cause=a),void 0!==n&&(c.code=n(s)),void 0!==e.status&&(c.status=e.status),c}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2),n(6),n(7))},function(e,t,n){!function(e){"use strict";var t=new WeakMap,n=Number.MAX_SAFE_INTEGER||9007199254740991,r=function(e,n){return t.set(e,n),n},o=function(e){var o=t.get(e),i=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(i))return r(e,i);if(e.size<1073741824){for(;e.has(i);)i=Math.floor(2147483648*Math.random());return r(e,i)}if(e.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(i);)i=Math.floor(Math.random()*n);return r(e,i)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){var r=n(3),o=n(4),i=n(5);e.exports=function(e){return r(e)||o(e)||i()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){"use strict";e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,n){var r=function(e){var t,n,r=/\\w+/.exec(e);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=r:window.indefiniteArticle=r},function(e,t,n){"use strict";n.r(t);var r=n(0);const o=-32603,i=-32602,a=-32601,s=Object(r.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),c=Object(r.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),u=Object(r.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(r.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i});var l=n(1);const d=new Map,g=(e,t,n)=>Object.assign({},t,{connect:n=>{let r=n.port;r.start();const o=e(r,t),i=Object(l.generateUniqueNumber)(d);return d.set(i,()=>{o(),r.close(),d.delete(i)}),{result:i}},disconnect:e=>{let t=e.portId;const n=d.get(t);if(void 0===n)throw f({portId:t.toString()});return n(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const t=new ArrayBuffer(0),n=new MessageChannel,r=n.port1,o=n.port2;r.onmessage=(t=>{let n=t.data;return e(null!==n)}),o.postMessage(t,[t])}))()){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength-(t-e.byteOffset);const r=t+e.byteOffset,o=new Uint8Array(e.buffer,r,n);return String.fromCharCode.apply(null,o)},p=(e,t,n)=>{let r;const o=U(e,t),i=o.offset,a=o.value,s=e.getUint8(i);return(r=240===s?w(e,i+1):255===s?v(e,i+1):y(s,e,i+1,n)).event.delta=a,r},h=e=>{if("MThd"!==m(e,0,4))throw new Error('Unexpected characters "'.concat(m(e,0,4),'" found instead of "MThd"'));if(6!==e.getUint32(4))throw new Error("The header has an unexpected length of ".concat(e.getUint32(4)," instead of 6"));const t=e.getUint16(8),n=e.getUint16(10);return{division:e.getUint16(12),format:t,numberOfTracks:n}},v=(e,t)=>{let n;const r=e.getUint8(t),o=U(e,t+1),i=o.offset,a=o.value;if(1===r)n={text:m(e,i,a)};else if(3===r)n={trackName:m(e,i,a)};else if(5===r)n={lyric:m(e,i,a)};else if(32===r)n={channelPrefix:e.getUint8(i)};else if(33===r)n={midiPort:e.getUint8(i)};else if(47===r)n={endOfTrack:!0};else if(81===r)n={setTempo:{microsecondsPerBeat:(e.getUint8(i)<<16)+(e.getUint8(i+1)<<8)+e.getUint8(i+2)}};else if(84===r){let t;const r=e.getUint8(i);0==(96&r)?t=24:32==(96&r)?t=25:64==(96&r)?t=29:96==(96&r)&&(t=30),n={smpteOffset:{frame:e.getUint8(i+3),frameRate:t,hour:31&r,minutes:e.getUint8(i+1),seconds:e.getUint8(i+2),subFrame:e.getUint8(i+4)}}}else if(88===r)n={timeSignature:{denominator:Math.pow(2,e.getUint8(i+1)),metronome:e.getUint8(i+2),numerator:e.getUint8(i),thirtyseconds:e.getUint8(i+3)}};else{if(89!==r)throw new Error('Cannot parse a meta event with a type of "'.concat(r.toString(16),'"'));n={keySignature:{key:e.getInt8(i),scale:e.getInt8(i+1)}}}return{event:n,offset:i+a}},y=(e,t,n,r)=>{const o=e>>4,i=0==(128&e)?r:null;let a,s=0==(128&e)?n-1:n;if(8===o||null!==i&&"noteOff"in i)a={noteOff:{noteNumber:t.getUint8(s),velocity:t.getUint8(s+1)}},s+=2;else if(9===o||null!==i&&"noteOn"in i){const e=t.getUint8(s),n=t.getUint8(s+1);a=0===n?{noteOff:{noteNumber:e,velocity:n}}:{noteOn:{noteNumber:e,velocity:n}},s+=2}else if(11===o||null!==i&&"controlChange"in i)a={controlChange:{type:t.getUint8(s),value:t.getUint8(s+1)}},s+=2;else if(12===o||null!==i&&"programChange"in i)a={programChange:{programNumber:t.getUint8(s)}},s+=1;else{if(!(14===o||null!==i&&"pitchBend"in i))throw new Error('Cannot parse a midi event with a type of "'.concat(o.toString(16),'"'));a={pitchBend:t.getUint8(s)|t.getUint8(s+1)<<7},s+=2}return a.channel=15&e,{event:a,offset:s}},w=(e,t)=>{const n=U(e,t),r=n.offset,o=n.value;return{event:{sysex:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength-(t-e.byteOffset);const r=t+e.byteOffset,o=[],i=new Uint8Array(e.buffer,r,n);for(let e=0;e<n;e+=1){let t=i[e].toString(16).toUpperCase();1===t.length&&(t=0+t),o[e]=t}return o.join("")}(e,r,o)},offset:r+o}},b=(e,t)=>{if("MTrk"!==m(e,t,4))throw new Error('Unexpected characters "'.concat(m(e,t,4),'" found instead of "MTrk"'));const n=[],r=e.getUint32(t+4)+t+8;let o=null,i=t+8;for(;i<r;){var a=p(e,i,o);o=a.event,i=a.offset,n.push(o)}return{offset:i,track:n}},U=(e,t)=>{let n=t,r=0;for(;;){const t=e.getUint8(n);if(n+=1,!(t>127))return{offset:n,value:r+=t};r+=127&t,r<<=7}};!function e(t,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=g(e,n,r),i=((e,t)=>async n=>{let r=n.data,o=r.id,i=r.method,a=r.params;const f=t[i];try{if(void 0===f)throw s({method:i});const t=void 0===a?f():f(a);if(void 0===t)throw c({method:i});const n=t instanceof Promise?await t:t;if(null===o){if(void 0!==n.result)throw u({method:i})}else{if(void 0===n.result)throw u({method:i});const t=n.result,r=n.transferables,a=void 0===r?[]:r;e.postMessage({id:o,result:t},a)}}catch(t){const n=t.message,r=t.status,i=void 0===r?-32603:r;e.postMessage({error:{code:i,message:n},id:o})}})(t,o);return t.addEventListener("message",i),()=>t.removeEventListener("message",i)}(self,{parse:e=>{return{result:(e=>{const t=new DataView(e),n=h(t);let r=14;const o=[];for(let e=0,a=n.numberOfTracks;e<a;e+=1){let e;var i=b(t,r);r=i.offset,e=i.track,o.push(e)}return{division:n.division,format:n.format,tracks:o}})(e.arrayBuffer)}}})}]);`;
