// tslint:disable-next-line:max-line-length
export const worker = `!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=62)}([function(t,e,n){var r=n(19)("wks"),o=n(18),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){!function(t,e,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(t,e){return void 0===e?t:e.reduce(function(t,e){if("capitalize"===e){var o=t.charAt(0).toUpperCase(),i=t.slice(1);return""+o+i}return"dashify"===e?n(t):"prependIndefiniteArticle"===e?r(t)+" "+t:t},t)},i=function(t,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],u=r.exec(t);null!==u;){var a={modifiers:[],name:u[1]};if(void 0!==u[3])for(var c=/\\.[^(]+\\(\\)/g,f=c.exec(u[2]);null!==f;)a.modifiers.push(f[0].slice(1,-2)),f=c.exec(u[2]);i.push(a),u=r.exec(t)}var s=i.reduce(function(t,r){return t.map(function(t){return"string"==typeof t?t.split(function(t){var e=t.name+t.modifiers.map(function(t){return"\\\\."+t+"\\\\(\\\\)"}).join("");return new RegExp("\\\\$\\\\{"+e+"}","g")}(r)).reduce(function(t,i,u){return 0===u?[i]:r.name in n?[].concat(e(t),[o(n[r.name],r.modifiers),i]):[].concat(e(t),[function(t){return o(t[r.name],r.modifiers)},i])},[]):[t]}).reduce(function(t,n){return[].concat(e(t),e(n))},[])},[t]);return function(t){return s.reduce(function(n,r){return[].concat(e(n),"string"==typeof r?[r]:[r(t)])},[]).join("")}};t.compile=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===t.code?void 0:i(t.code,e),r=void 0===t.message?void 0:i(t.message,e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1],i=void 0===o&&(e instanceof Error||void 0!==e.code&&"Exception"===e.code.slice(-9))?{cause:e,missingParameters:{}}:{cause:o,missingParameters:e},u=i.cause,a=i.missingParameters,c=void 0===r?new Error:new Error(r(a));return null!==u&&(c.cause=u),void 0!==n&&(c.code=n(a)),void 0!==t.status&&(c.status=t.status),c}},Object.defineProperty(t,"__esModule",{value:!0})}(e,n(61),n(33),n(32))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(24)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(5),o=n(53),i=n(52),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(6),o=n(10);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(19)("keys"),o=n(18);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(6).f,o=n(3),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(14),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(45),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(54);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(1),o=n(12),i=n(25),u=n(7),a=function(t,e,n){var c,f,s,l=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,h=t&a.B,y=t&a.W,g=p?o:o[e]||(o[e]={}),m=g.prototype,b=p?r:d?r[e]:(r[e]||{}).prototype;for(c in p&&(n=e),n)(f=!l&&b&&void 0!==b[c])&&c in g||(s=f?b[c]:n[c],g[c]=p&&"function"!=typeof b[c]?n[c]:h&&f?i(s,r):y&&b[c]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((g.virtual||(g.virtual={}))[c]=s,t&a.R&&m&&!m[c]&&u(m,c,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){!function(t){"use strict";var e=new WeakMap,n=Number.MAX_SAFE_INTEGER||9007199254740991,r=function(t){var r=e.get(t),o=void 0===r||r>2147483648?0:r+1;if(t.size<1073741824){for(;t.has(o);)o=Math.floor(2147483648*Math.random());return e.set(t,o),o}if(t.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(o);)o=Math.floor(Math.random()*n);return e.set(t,o),o};t.addUniqueNumber=function(t){var e=r(t);return t.add(e),e},t.generateUniqueNumber=r,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";n.r(e);Object.setPrototypeOf||Array;Object.assign;function r(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var o=n(2),i=-32603,u=-32602,a=-32601,c=Object(o.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),f=Object(o.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:i}),s=Object(o.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:i}),l=Object(o.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:u}),p=function(t,e){return function(n){var o,i,u,a,l=n.data,p=l.id,d=l.method,v=l.params;return o=void 0,i=void 0,a=function(){var n,o,i,u,a,l,h,y,g,m,b,x,w,O;return r(this,function(r){switch(r.label){case 0:n=e[d],r.label=1;case 1:if(r.trys.push([1,6,,7]),void 0===n)throw c({method:d});if(void 0===(o=n(v)))throw f({method:d});if(null!==p)return[3,2];if(void 0!==o.result)throw s({method:d});return[3,5];case 2:return o instanceof Promise?[4,o]:[3,4];case 3:if(void 0===(i=r.sent()).result)throw s({method:d});return h=(u=i).result,a=u.transferables,g=void 0===a?[]:a,t.postMessage({id:p,result:h},g),[3,5];case 4:if(void 0===o.result)throw s({method:d});h=(l=o).result,y=l.transferables,g=void 0===y?[]:y,t.postMessage({id:p,result:h},g),r.label=5;case 5:return[3,7];case 6:return m=r.sent(),x=(b=m).message,w=b.status,O=void 0===w?-32603:w,t.postMessage({error:{code:O,message:x},id:p}),[3,7];case 7:return[2]}})},new((u=void 0)||(u=Promise))(function(t,e){function n(t){try{c(a.next(t))}catch(t){e(t)}}function r(t){try{c(a.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new u(function(t){t(e.value)}).then(n,r)}c((a=a.apply(o,i||[])).next())})}},d=n(27),v=new Map;n.d(e,"createWorker",function(){return h});var h=function(t,e){var n,r,o=(n=h,r=e,Object.assign({},r,{connect:function(t){var e=t.port;e.start();var o=n(e,r),i=Object(d.generateUniqueNumber)(v);return v.set(i,function(){o(),e.close(),v.delete(i)}),{result:i}},disconnect:function(t){var e=t.portId,n=v.get(e);if(void 0===n)throw l({portId:e.toString()});return n(),{result:null}}})),i=p(t,o);return t.addEventListener("message",i),function(){return t.removeEventListener("message",i)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.stringify=((t,e=0,n=t.byteLength-(e-t.byteOffset))=>{const r=e+t.byteOffset,o=new Uint8Array(t.buffer,r,n);return String.fromCharCode.apply(null,o)})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.hexify=((t,e=0,n=t.byteLength-(e-t.byteOffset))=>{const r=e+t.byteOffset,o=[],i=new Uint8Array(t.buffer,r,n);for(let t=0;t<n;t+=1){let e=i[t].toString(16).toUpperCase();1===e.length&&(e=0+e),o[t]=e}return o.join("")})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parseArrayBuffer=void 0;var r=n(30),o=n(29);e.parseArrayBuffer=(t=>{const e=new DataView(t),n=u(e);let r=14;const o=[];for(let t=0,u=n.numberOfTracks;t<u;t+=1){let t;var i=s(e,r);r=i.offset,t=i.track,o.push(t)}return{division:n.division,format:n.format,tracks:o}});const i=(t,e,n)=>{let r;var o=l(t,e);const i=o.offset,u=o.value,s=t.getUint8(i);return(r=240===s?f(t,i+1):255===s?a(t,i+1):c(s,t,i+1,n)).event.delta=u,r},u=t=>{if("MThd"!==(0,o.stringify)(t,0,4))throw new Error('Unexpected characters "'+(0,o.stringify)(t,0,4)+'" found instead of "MThd"');if(6!==t.getUint32(4))throw new Error("The header has an unexpected length of "+t.getUint32(4)+" instead of 6");const e=t.getUint16(8),n=t.getUint16(10);return{division:t.getUint16(12),format:e,numberOfTracks:n}},a=(t,e)=>{let n;const r=t.getUint8(e);var i=l(t,e+1);const u=i.offset,a=i.value;if(1===r)n={text:(0,o.stringify)(t,u,a)};else if(3===r)n={trackName:(0,o.stringify)(t,u,a)};else if(5===r)n={lyric:(0,o.stringify)(t,u,a)};else if(32===r)n={channelPrefix:t.getUint8(u)};else if(33===r)n={midiPort:t.getUint8(u)};else if(47===r)n={endOfTrack:!0};else if(81===r)n={setTempo:{microsecondsPerBeat:(t.getUint8(u)<<16)+(t.getUint8(u+1)<<8)+t.getUint8(u+2)}};else if(84===r){let e;const r=t.getUint8(u);0==(96&r)?e=24:32==(96&r)?e=25:64==(96&r)?e=29:96==(96&r)&&(e=30),n={smpteOffset:{frame:t.getUint8(u+3),frameRate:e,hour:31&r,minutes:t.getUint8(u+1),seconds:t.getUint8(u+2),subFrame:t.getUint8(u+4)}}}else if(88===r)n={timeSignature:{denominator:Math.pow(2,t.getUint8(u+1)),metronome:t.getUint8(u+2),numerator:t.getUint8(u),thirtyseconds:t.getUint8(u+3)}};else{if(89!==r)throw new Error('Cannot parse a meta event with a type of "'+r.toString(16)+'"');n={keySignature:{key:t.getInt8(u),scale:t.getInt8(u+1)}}}return{event:n,offset:u+a}},c=(t,e,n,r)=>{const o=t>>4,i=0==(128&t)?r:null;let u,a=0==(128&t)?n-1:n;if(8===o||null!==i&&"noteOff"in i)u={noteOff:{noteNumber:e.getUint8(a),velocity:e.getUint8(a+1)}},a+=2;else if(9===o||null!==i&&"noteOn"in i){const t=e.getUint8(a),n=e.getUint8(a+1);u=0===n?{noteOff:{noteNumber:t,velocity:n}}:{noteOn:{noteNumber:t,velocity:n}},a+=2}else if(11===o||null!==i&&"controlChange"in i)u={controlChange:{type:e.getUint8(a),value:e.getUint8(a+1)}},a+=2;else if(12===o||null!==i&&"programChange"in i)u={programChange:{programNumber:e.getUint8(a)}},a+=1;else{if(!(14===o||null!==i&&"pitchBend"in i))throw new Error('Cannot parse a midi event with a type of "'+o.toString(16)+'"');u={pitchBend:e.getUint8(a)|e.getUint8(a+1)<<7},a+=2}return u.channel=15&t,{event:u,offset:a}},f=(t,e)=>{var n=l(t,e);const o=n.offset,i=n.value;return{event:{sysex:(0,r.hexify)(t,o,i)},offset:o+i}},s=(t,e)=>{if("MTrk"!==(0,o.stringify)(t,e,4))throw new Error('Unexpected characters "'+(0,o.stringify)(t,e,4)+'" found instead of "MTrk"');const n=[],r=t.getUint32(e+4)+e+8;let u=null,a=e+8;for(;a<r;){var c=i(t,a,u);u=c.event,a=c.offset,n.push(u)}return{offset:a,track:n}},l=(t,e)=>{let n=e,r=0;for(;;){const e=t.getUint8(n);if(n+=1,!(e>127))return{offset:n,value:r+=e};r+=127&e,r<<=7}}},function(t,e){var n=function(t){var e,n,r=/\\w+/.exec(t);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(e in i)if(0==o.indexOf(i[e]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var u=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(e=0;e<u.length;e++)if(o.match(u[e]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==t&&void 0!==t.exports?t.exports=n:window.indefiniteArticle=n},function(t,e,n){"use strict";t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,t=>/[À-ž]/.test(t)?t:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,t=>e&&e.condense?"-":t).toLowerCase()}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){var r=n(21),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(35),o=n(0)("iterator"),i=n(9);t.exports=n(12).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(6),o=n(10);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(9),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(25),o=n(26),i=n(15),u=n(39),a=n(38),c=n(20),f=n(37),s=n(36);o(o.S+o.F*!n(34)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,g=0,m=s(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||d==Array&&a(m))for(n=new d(e=c(p.length));e>g;g++)f(n,g,y?h(p[g],g):p[g]);else for(l=m.call(p),n=new d;!(o=l.next()).done;g++)f(n,g,y?u(l,h,[o.value,g],!0):o.value);return n.length=g,n}})},function(t,e,n){var r=n(3),o=n(15),i=n(8)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(14),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(22),o=n(20),i=n(43);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(3),o=n(22),i=n(44)(!1),u=n(8)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(46),o=n(17);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(6),o=n(5),i=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(5),o=n(48),i=n(17),u=n(8)("IE_PROTO"),a=function(){},c=function(){var t,e=n(23)("iframe"),r=i.length;for(e.style.display="none",n(42).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){"use strict";var r=n(49),o=n(10),i=n(16),u={};n(7)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=!n(4)&&!n(24)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=!0},function(t,e,n){"use strict";var r=n(55),o=n(26),i=n(51),u=n(7),a=n(3),c=n(9),f=n(50),s=n(16),l=n(41),p=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,y,g,m){f(n,e,h);var b,x,w,O=function(t){if(!d&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",U="values"==y,j=!1,M=t.prototype,P=M[p]||M["@@iterator"]||y&&M[y],E=P||O(y),A=y?U?O("entries"):E:void 0,S="Array"==e&&M.entries||P;if(S&&(w=l(S.call(new t)))!==Object.prototype&&w.next&&(s(w,_,!0),r||a(w,p)||u(w,p,v)),U&&P&&"values"!==P.name&&(j=!0,E=function(){return P.call(this)}),r&&!m||!d&&!j&&M[p]||u(M,p,E),c[e]=E,c[_]=v,y)if(b={values:U?E:O("values"),keys:g?E:O("keys"),entries:A},m)for(x in b)x in M||i(M,x,b[x]);else o(o.P+o.F*(d||j),e,b);return b}},function(t,e,n){var r=n(14),o=n(13);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(57)(!0);n(56)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(58),n(40),t.exports=n(12).Array.from},function(t,e,n){t.exports={default:n(59),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(60),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},function(t,e,n){"use strict";var r=n(28),o=n(31);(0,r.createWorker)(self,{parse:({arrayBuffer:t})=>{return{result:(0,o.parseArrayBuffer)(t)}}})}]);`;
