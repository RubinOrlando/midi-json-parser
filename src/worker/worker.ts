// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){!function(e,t,n,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return"".concat(o).concat(i)}return"dashify"===t?n(e):"prependIndefiniteArticle"===t?"".concat(r(e)," ").concat(e):e},e)},i=function(e,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],a=r.exec(e);null!==a;){var u={modifiers:[],name:a[1]};if(void 0!==a[3])for(var s=/\\.[^(]+\\(\\)/g,c=s.exec(a[2]);null!==c;)u.modifiers.push(c[0].slice(1,-2)),c=s.exec(a[2]);i.push(u),a=r.exec(e)}var f=i.reduce(function(e,r){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\.".concat(e,"\\\\(\\\\)")}).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(r)).reduce(function(e,i,a){return 0===a?[i]:r.name in n?t(e).concat([o(n[r.name],r.modifiers),i]):t(e).concat([function(e){return o(e[r.name],r.modifiers)},i])},[]):[e]}).reduce(function(e,n){return t(e).concat(t(n))},[])},[e]);return function(e){return f.reduce(function(n,r){return"string"==typeof r?t(n).concat([r]):t(n).concat([r(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===e.code?void 0:i(e.code,t),r=void 0===e.message?void 0:i(e.message,t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=i.cause,u=i.missingParameters,s=void 0===r?new Error:new Error(r(u));return null!==a&&(s.cause=a),void 0!==n&&(s.code=n(u)),void 0!==e.status&&(s.status=e.status),s}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2),n(6),n(7))},function(e,t,n){!function(e){"use strict";var t=new WeakMap,n=Number.MAX_SAFE_INTEGER||9007199254740991,r=function(e,n){return t.set(e,n),n},o=function(e){var o=t.get(e),i=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(i))return r(e,i);if(e.size<1073741824){for(;e.has(i);)i=Math.floor(2147483648*Math.random());return r(e,i)}if(e.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(i);)i=Math.floor(Math.random()*n);return r(e,i)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){var r=n(3),o=n(4),i=n(5);e.exports=function(e){return r(e)||o(e)||i()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){"use strict";e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t){var n=function(e){var t,n,r=/\\w+/.exec(e);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e&&void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t,n){"use strict";n.r(t);var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})}function i(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var a=n(0),u=-32603,s=-32602,c=-32601,f=Object(a.compile)({message:'The requested method called "\${method}" is not supported.',status:c}),l=Object(a.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:u}),d=Object(a.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:u}),p=Object(a.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:s}),h=n(1),g=new Map,m=function(e,t,n){return r({},t,{connect:function(n){var r=n.port;r.start();var o=e(r,t),i=Object(h.generateUniqueNumber)(g);return g.set(i,function(){o(),r.close(),g.delete(i)}),{result:i}},disconnect:function(e){var t=e.portId,n=g.get(t);if(void 0===n)throw p({portId:t.toString()});return n(),{result:null}},isSupported:function(e){return o(void 0,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return[4,new Promise(function(e){var t=new ArrayBuffer(0),n=new MessageChannel,r=n.port1,o=n.port2;r.onmessage=function(t){var n=t.data;return e(null!==n)},o.postMessage(t,[t])})];case 1:return r.sent()?(e=n())instanceof Promise?[4,e]:[3,3]:[3,5];case 2:return t=r.sent(),[3,4];case 3:t=e,r.label=4;case 4:return[2,{result:t}];case 5:return[2,{result:!1}]}})})}})};const v=(e,t=0,n=e.byteLength-(t-e.byteOffset))=>{const r=t+e.byteOffset,o=new Uint8Array(e.buffer,r,n);return String.fromCharCode.apply(null,o)},y=(e,t,n)=>{let r;const o=M(e,t),i=o.offset,a=o.value,u=e.getUint8(i);return(r=240===u?O(e,i+1):255===u?w(e,i+1):U(u,e,i+1,n)).event.delta=a,r},b=e=>{if("MThd"!==v(e,0,4))throw new Error('Unexpected characters "'.concat(v(e,0,4),'" found instead of "MThd"'));if(6!==e.getUint32(4))throw new Error("The header has an unexpected length of ".concat(e.getUint32(4)," instead of 6"));const t=e.getUint16(8),n=e.getUint16(10);return{division:e.getUint16(12),format:t,numberOfTracks:n}},w=(e,t)=>{let n;const r=e.getUint8(t),o=M(e,t+1),i=o.offset,a=o.value;if(1===r)n={text:v(e,i,a)};else if(3===r)n={trackName:v(e,i,a)};else if(5===r)n={lyric:v(e,i,a)};else if(32===r)n={channelPrefix:e.getUint8(i)};else if(33===r)n={midiPort:e.getUint8(i)};else if(47===r)n={endOfTrack:!0};else if(81===r)n={setTempo:{microsecondsPerBeat:(e.getUint8(i)<<16)+(e.getUint8(i+1)<<8)+e.getUint8(i+2)}};else if(84===r){let t;const r=e.getUint8(i);0==(96&r)?t=24:32==(96&r)?t=25:64==(96&r)?t=29:96==(96&r)&&(t=30),n={smpteOffset:{frame:e.getUint8(i+3),frameRate:t,hour:31&r,minutes:e.getUint8(i+1),seconds:e.getUint8(i+2),subFrame:e.getUint8(i+4)}}}else if(88===r)n={timeSignature:{denominator:Math.pow(2,e.getUint8(i+1)),metronome:e.getUint8(i+2),numerator:e.getUint8(i),thirtyseconds:e.getUint8(i+3)}};else{if(89!==r)throw new Error('Cannot parse a meta event with a type of "'.concat(r.toString(16),'"'));n={keySignature:{key:e.getInt8(i),scale:e.getInt8(i+1)}}}return{event:n,offset:i+a}},U=(e,t,n,r)=>{const o=e>>4,i=0==(128&e)?r:null;let a,u=0==(128&e)?n-1:n;if(8===o||null!==i&&"noteOff"in i)a={noteOff:{noteNumber:t.getUint8(u),velocity:t.getUint8(u+1)}},u+=2;else if(9===o||null!==i&&"noteOn"in i){const e=t.getUint8(u),n=t.getUint8(u+1);a=0===n?{noteOff:{noteNumber:e,velocity:n}}:{noteOn:{noteNumber:e,velocity:n}},u+=2}else if(11===o||null!==i&&"controlChange"in i)a={controlChange:{type:t.getUint8(u),value:t.getUint8(u+1)}},u+=2;else if(12===o||null!==i&&"programChange"in i)a={programChange:{programNumber:t.getUint8(u)}},u+=1;else{if(!(14===o||null!==i&&"pitchBend"in i))throw new Error('Cannot parse a midi event with a type of "'.concat(o.toString(16),'"'));a={pitchBend:t.getUint8(u)|t.getUint8(u+1)<<7},u+=2}return a.channel=15&e,{event:a,offset:u}},O=(e,t)=>{const n=M(e,t),r=n.offset,o=n.value;return{event:{sysex:((e,t=0,n=e.byteLength-(t-e.byteOffset))=>{const r=t+e.byteOffset,o=[],i=new Uint8Array(e.buffer,r,n);for(let e=0;e<n;e+=1){let t=i[e].toString(16).toUpperCase();1===t.length&&(t=0+t),o[e]=t}return o.join("")})(e,r,o)},offset:r+o}},x=(e,t)=>{if("MTrk"!==v(e,t,4))throw new Error('Unexpected characters "'.concat(v(e,t,4),'" found instead of "MTrk"'));const n=[],r=e.getUint32(t+4)+t+8;let o=null,i=t+8;for(;i<r;){var a=y(e,i,o);o=a.event,i=a.offset,n.push(o)}return{offset:i,track:n}},M=(e,t)=>{let n=t,r=0;for(;;){const t=e.getUint8(n);if(n+=1,!(t>127))return{offset:n,value:r+=t};r+=127&t,r<<=7}};!function e(t,n,r){void 0===r&&(r=function(){return!0});var a=m(e,n,r),u=function(e,t){return function(n){var r=n.data,a=r.id,u=r.method,s=r.params;return o(void 0,void 0,void 0,function(){var n,r,o,c,p,h,g,m,v,y,b,w,U;return i(this,function(i){switch(i.label){case 0:n=t[u],i.label=1;case 1:if(i.trys.push([1,5,,6]),void 0===n)throw f({method:u});if(void 0===(r=n(s)))throw l({method:u});return r instanceof Promise?[4,r]:[3,3];case 2:return c=i.sent(),[3,4];case 3:c=r,i.label=4;case 4:if(o=c,null===a){if(void 0!==o.result)throw d({method:u})}else{if(void 0===o.result)throw d({method:u});h=(p=o).result,g=p.transferables,m=void 0===g?[]:g,e.postMessage({id:a,result:h},m)}return[3,6];case 5:return v=i.sent(),b=(y=v).message,w=y.status,U=void 0===w?-32603:w,e.postMessage({error:{code:U,message:b},id:a}),[3,6];case 6:return[2]}})})}}(t,a);return t.addEventListener("message",u),function(){return t.removeEventListener("message",u)}}(self,{parse:({arrayBuffer:e})=>{return{result:(e=>{const t=new DataView(e),n=b(t);let r=14;const o=[];for(let e=0,a=n.numberOfTracks;e<a;e+=1){let e;var i=x(t,r);r=i.offset,e=i.track,o.push(e)}return{division:n.division,format:n.format,tracks:o}})(e)}}})}]);`;
