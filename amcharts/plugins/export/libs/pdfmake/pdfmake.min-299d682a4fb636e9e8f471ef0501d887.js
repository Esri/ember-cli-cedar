!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{var n=e()
for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports
var i=n[r]={exports:{},id:r,loaded:!1}
return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={}
return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(e){t.exports=e.pdfMake=n(1)}).call(e,function(){return this}())},function(t,e,n){(function(e,r){"use strict"
function i(t,e,n,r){this.docDefinition=t,this.tableLayouts=e||null,this.fonts=n||s,this.vfs=r}var o=n(6),a=n(300).saveAs,s={Roboto:{normal:"Roboto-Regular.ttf",bold:"Roboto-Medium.ttf",italics:"Roboto-Italic.ttf",bolditalics:"Roboto-MediumItalic.ttf"}}
i.prototype._createDoc=function(t,n){t=t||{},this.tableLayouts&&(t.tableLayouts=this.tableLayouts)
var r=new o(this.fonts)
r.fs.bindFS(this.vfs)
var i,a=r.createPdfKitDocument(this.docDefinition,t),s=[]
a.on("readable",function(){for(var t;null!==(t=a.read(9007199254740991));)s.push(t)}),a.on("end",function(){i=e.concat(s),n(i,a._pdfMakePages)}),a.end()},i.prototype._getPages=function(t,e){if(!e)throw"_getPages is an async method and needs a callback argument"
this._createDoc(t,function(t,n){e(n)})},i.prototype._bufferToBlob=function(t){var e
try{e=new Blob([t],{type:"application/pdf"})}catch(r){if("InvalidStateError"===r.name){var n=new Uint8Array(t)
e=new Blob([n.buffer],{type:"application/pdf"})}}if(!e)throw"Could not generate blob"
return e},i.prototype._openWindow=function(){var t=r.open("","_blank")
if(null===t)throw"Open PDF in new window blocked by browser"
return t},i.prototype._openPdf=function(t,e){e||(e=this._openWindow())
try{this.getBlob(function(t){var n=(r.URL||r.webkitURL).createObjectURL(t)
e.location.href=n},t)}catch(t){throw e.close(),t}},i.prototype.open=function(t,e){(t=t||{}).autoPrint=!1,e=e||null,this._openPdf(t,e)},i.prototype.print=function(t,e){(t=t||{}).autoPrint=!0,e=e||null,this._openPdf(t,e)},i.prototype.download=function(t,e,n){"function"==typeof t&&(e=t,t=null),t=t||"file.pdf",this.getBlob(function(n){a(n,t),"function"==typeof e&&e()},n)},i.prototype.getBase64=function(t,e){if(!t)throw"getBase64 is an async method and needs a callback argument"
this.getBuffer(function(e){t(e.toString("base64"))},e)},i.prototype.getDataUrl=function(t,e){if(!t)throw"getDataUrl is an async method and needs a callback argument"
this.getBuffer(function(e){t("data:application/pdf;base64,"+e.toString("base64"))},e)},i.prototype.getBlob=function(t,e){if(!t)throw"getBlob is an async method and needs a callback argument"
var n=this
this.getBuffer(function(e){var r=n._bufferToBlob(e)
t(r)},e)},i.prototype.getBuffer=function(t,e){if(!t)throw"getBuffer is an async method and needs a callback argument"
this._createDoc(e,function(e){t(e)})},t.exports={createPdf:function(t){if(!Object.keys)throw"Your browser does not provide the level of support needed"
return new i(t,r.pdfMake.tableLayouts,r.pdfMake.fonts,r.pdfMake.vfs)}}}).call(e,n(2).Buffer,function(){return this}())},function(t,e,n){(function(t){"use strict"
function r(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(r()<e)throw new RangeError("Invalid typed array length")
return o.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=o.prototype:(null===t&&(t=new o(e)),t.length=e),t}function o(t,e,n){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(t,e,n)
if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string")
return u(this,t)}return a(this,t,e,n)}function a(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),o.TYPED_ARRAY_SUPPORT?(t=e).__proto__=o.prototype:t=l(t,e),t}(t,e,n,r):"string"==typeof e?function(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!o.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|f(e,n),a=(t=i(t,r)).write(e,n)
return a!==r&&(t=t.slice(0,a)),t}(t,e,n):function(t,e){if(o.isBuffer(e)){var n=0|c(e.length)
return 0===(t=i(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length,r!=r)?i(t,0):l(t,e)
if("Buffer"===e.type&&R(e.data))return l(t,e.data)}var r
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number')
if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,e){if(s(e),t=i(t,e<0?0:0|c(e)),!o.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0
return t}function l(t,e){var n=e.length<0?0:0|c(e.length)
t=i(t,n)
for(var r=0;r<n;r+=1)t[r]=255&e[r]
return t}function c(t){if(t>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes")
return 0|t}function f(t,e){if(o.isBuffer(t))return t.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength
"string"!=typeof t&&(t=""+t)
var n=t.length
if(0===n)return 0
for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return I(t).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return T(t).length
default:if(r)return I(t).length
e=(""+e).toLowerCase(),r=!0}}function h(t,e,n){var r=t[e]
t[e]=t[n],t[n]=r}function p(t,e,n,r,i){if(0===t.length)return-1
if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1
n=t.length-1}else if(n<0){if(!i)return-1
n=0}if("string"==typeof e&&(e=o.from(e,r)),o.isBuffer(e))return 0===e.length?-1:d(t,e,n,r,i)
if("number"==typeof e)return e&=255,o.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):d(t,[e],n,r,i)
throw new TypeError("val must be string, number or Buffer")}function d(t,e,n,r,i){function o(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var a,s=1,u=t.length,l=e.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1
s=2,u/=2,l/=2,n/=2}if(i){var c=-1
for(a=n;a<u;a++)if(o(t,a)===o(e,-1===c?0:a-c)){if(-1===c&&(c=a),a-c+1===l)return c*s}else-1!==c&&(a-=a-c),c=-1}else for(n+l>u&&(n=u-l),a=n;a>=0;a--){for(var f=!0,h=0;h<l;h++)if(o(t,a+h)!==o(e,h)){f=!1
break}if(f)return a}return-1}function g(t,e,n,r){n=Number(n)||0
var i=t.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=e.length
if(o%2!=0)throw new TypeError("Invalid hex string")
r>o/2&&(r=o/2)
for(var a=0;a<r;++a){var s=parseInt(e.substr(2*a,2),16)
if(isNaN(s))return a
t[n+a]=s}return a}function y(t,e,n,r){return O(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n))
return e}(e),t,n,r)}function v(t,e,n){n=Math.min(t.length,n)
for(var r=[],i=e;i<n;){var o,a,s,u,l=t[i],c=null,f=l>239?4:l>223?3:l>191?2:1
if(i+f<=n)switch(f){case 1:l<128&&(c=l)
break
case 2:128==(192&(o=t[i+1]))&&(u=(31&l)<<6|63&o)>127&&(c=u)
break
case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(u=(15&l)<<12|(63&o)<<6|63&a)>2047&&(u<55296||u>57343)&&(c=u)
break
case 4:o=t[i+1],a=t[i+2],s=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(u=(15&l)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(c=u)}null===c?(c=65533,f=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),i+=f}return function(t){var e=t.length
if(e<=M)return String.fromCharCode.apply(String,t)
for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=M))
return n}(r)}function b(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i])
return r}function m(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(t[i])
return r}function w(t,e,n){var r,i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i)
for(var o="",a=e;a<n;++a)o+=(r=t[a],r<16?"0"+r.toString(16):r.toString(16))
return o}function x(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function _(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint")
if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function k(t,e,n,r,i,a){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance')
if(e>i||e<a)throw new RangeError('"value" argument is out of bounds')
if(n+r>t.length)throw new RangeError("Index out of range")}function S(t,e,n,r){e<0&&(e=65535+e+1)
for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function C(t,e,n,r){e<0&&(e=4294967295+e+1)
for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function A(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function P(t,e,n,r,i){return i||A(t,0,n,4),L.write(t,e,n,r,23,4),n+4}function E(t,e,n,r,i){return i||A(t,0,n,8),L.write(t,e,n,r,52,8),n+8}function I(t,e){e=e||1/0
for(var n,r=t.length,i=null,o=[],a=0;a<r;++a){if((n=t.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189)
continue}if(a+1===r){(e-=3)>-1&&o.push(239,191,189)
continue}i=n
continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n
continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189)
if(i=null,n<128){if((e-=1)<0)break
o.push(n)}else if(n<2048){if((e-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((e-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function T(t){return B.toByteArray(function(t){if((t=(e=t,e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")).replace(F,"")).length<2)return""
for(var e;t.length%4!=0;)t+="="
return t}(t))}function O(t,e,n,r){for(var i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i]
return i}var B=n(3),L=n(4),R=n(5)
e.Buffer=o,e.SlowBuffer=function(t){return+t!=t&&(t=0),o.alloc(+t)},e.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1)
return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=r(),o.poolSize=8192,o._augment=function(t){return t.__proto__=o.prototype,t},o.from=function(t,e,n){return a(null,t,e,n)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(t,e,n){return r=null,a=e,u=n,s(o=t),o<=0?i(r,o):void 0!==a?"string"==typeof u?i(r,o).fill(a,u):i(r,o).fill(a):i(r,o)
var r,o,a,u},o.allocUnsafe=function(t){return u(null,t)},o.allocUnsafeSlow=function(t){return u(null,t)},o.isBuffer=function(t){return!(null==t||!t._isBuffer)},o.compare=function(t,e){if(!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError("Arguments must be Buffers")
if(t===e)return 0
for(var n=t.length,r=e.length,i=0,a=Math.min(n,r);i<a;++i)if(t[i]!==e[i]){n=t[i],r=e[i]
break}return n<r?-1:r<n?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},o.concat=function(t,e){if(!R(t))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===t.length)return o.alloc(0)
var n
if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length
var r=o.allocUnsafe(e),i=0
for(n=0;n<t.length;++n){var a=t[n]
if(!o.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers')
a.copy(r,i),i+=a.length}return r},o.byteLength=f,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length
if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var e=0;e<t;e+=2)h(this,e,e+1)
return this},o.prototype.swap32=function(){var t=this.length
if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var e=0;e<t;e+=4)h(this,e,e+3),h(this,e+1,e+2)
return this},o.prototype.swap64=function(){var t=this.length
if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var e=0;e<t;e+=8)h(this,e,e+7),h(this,e+1,e+6),h(this,e+2,e+5),h(this,e+3,e+4)
return this},o.prototype.toString=function(){var t=0|this.length
return 0===t?"":0===arguments.length?v(this,0,t):function(t,e,n){var r,i,o,a=!1
if((void 0===e||e<0)&&(e=0),e>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(e>>>=0))return""
for(t||(t="utf8");;)switch(t){case"hex":return w(this,e,n)
case"utf8":case"utf-8":return v(this,e,n)
case"ascii":return b(this,e,n)
case"latin1":case"binary":return m(this,e,n)
case"base64":return r=this,o=n,0===(i=e)&&o===r.length?B.fromByteArray(r):B.fromByteArray(r.slice(i,o))
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,n)
default:if(a)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),a=!0}}.apply(this,arguments)},o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES
return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},o.prototype.compare=function(t,e,n,r,i){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer")
if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index")
if(r>=i&&e>=n)return 0
if(r>=i)return-1
if(e>=n)return 1
if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0
for(var a=i-r,s=n-e,u=Math.min(a,s),l=this.slice(r,i),c=t.slice(e,n),f=0;f<u;++f)if(l[f]!==c[f]){a=l[f],s=c[f]
break}return a<s?-1:s<a?1:0},o.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},o.prototype.indexOf=function(t,e,n){return p(this,t,e,n,!0)},o.prototype.lastIndexOf=function(t,e,n){return p(this,t,e,n,!1)},o.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0
else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0
else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i,o,a,s,u,l,c,f,h,p=this.length-e
if((void 0===n||n>p)&&(n=p),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var d=!1;;)switch(r){case"hex":return g(this,t,e,n)
case"utf8":case"utf-8":return f=e,h=n,O(I(t,(c=this).length-f),c,f,h)
case"ascii":return y(this,t,e,n)
case"latin1":case"binary":return y(this,t,e,n)
case"base64":return s=this,u=e,l=n,O(T(t),s,u,l)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o=e,a=n,O(function(t,e){for(var n,r,i,o=[],a=0;a<t.length&&!((e-=2)<0);++a)n=t.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r)
return o}(t,(i=this).length-o),i,o,a)
default:if(d)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),d=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var M=4096
o.prototype.slice=function(t,e){var n,r=this.length
if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),o.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=o.prototype
else{var i=e-t
n=new o(i,void 0)
for(var a=0;a<i;++a)n[a]=this[a+t]}return n},o.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r},o.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length)
for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i
return r},o.prototype.readUInt8=function(t,e){return e||_(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,e){return e||_(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,e){return e||_(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,e){return e||_(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUInt32BE=function(t,e){return e||_(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},o.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||_(t,e,this.length)
for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},o.prototype.readInt8=function(t,e){return e||_(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,e){e||_(t,2,this.length)
var n=this[t]|this[t+1]<<8
return 32768&n?4294901760|n:n},o.prototype.readInt16BE=function(t,e){e||_(t,2,this.length)
var n=this[t+1]|this[t]<<8
return 32768&n?4294901760|n:n},o.prototype.readInt32LE=function(t,e){return e||_(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return e||_(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,e){return e||_(t,4,this.length),L.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return e||_(t,4,this.length),L.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return e||_(t,8,this.length),L.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return e||_(t,8,this.length),L.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,e,n,r){t=+t,e|=0,n|=0,r||k(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255
return e+n},o.prototype.writeUIntBE=function(t,e,n,r){t=+t,e|=0,n|=0,r||k(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255
return e+n},o.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,1,255,0),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},o.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):S(this,t,e,!0),e+2},o.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):S(this,t,e,!1),e+2},o.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):C(this,t,e,!0),e+4},o.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},o.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
k(this,t,e,n,i-1,-i)}var o=0,a=1,s=0
for(this[e]=255&t;++o<n&&(a*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255
return e+n},o.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
k(this,t,e,n,i-1,-i)}var o=n-1,a=1,s=0
for(this[e+o]=255&t;--o>=0&&(a*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255
return e+n},o.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,1,127,-128),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):S(this,t,e,!0),e+2},o.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):S(this,t,e,!1),e+2},o.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):C(this,t,e,!0),e+4},o.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},o.prototype.writeFloatLE=function(t,e,n){return P(this,t,e,!0,n)},o.prototype.writeFloatBE=function(t,e,n){return P(this,t,e,!1,n)},o.prototype.writeDoubleLE=function(t,e,n){return E(this,t,e,!0,n)},o.prototype.writeDoubleBE=function(t,e,n){return E(this,t,e,!1,n)},o.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0
if(0===t.length||0===this.length)return 0
if(e<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n)
var i,a=r-n
if(this===t&&n<e&&e<r)for(i=a-1;i>=0;--i)t[i+e]=this[i+n]
else if(a<1e3||!o.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)t[i+e]=this[i+n]
else Uint8Array.prototype.set.call(t,this.subarray(n,n+a),e)
return a},o.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0)
i<256&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255)
if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index")
if(n<=e)return this
var a
if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(a=e;a<n;++a)this[a]=t
else{var s=o.isBuffer(t)?t:I(new o(t,r).toString()),u=s.length
for(a=0;a<n-e;++a)this[a+e]=s[a%u]}return this}
var F=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},function(t,e){"use strict"
function n(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
return"="===t[e-2]?2:"="===t[e-1]?1:0}function r(t,e,n){for(var r,o=[],a=e;a<n;a+=3)r=(t[a]<<16)+(t[a+1]<<8)+t[a+2],o.push((s=r,i[s>>18&63]+i[s>>12&63]+i[s>>6&63]+i[63&s]))
var s
return o.join("")}e.byteLength=function(t){return 3*t.length/4-n(t)},e.toByteArray=function(t){var e,r,i,s,u,l,c=t.length
u=n(t),l=new a(3*c/4-u),i=u>0?c-4:c
var f=0
for(e=0,r=0;e<i;e+=4,r+=3)s=o[t.charCodeAt(e)]<<18|o[t.charCodeAt(e+1)]<<12|o[t.charCodeAt(e+2)]<<6|o[t.charCodeAt(e+3)],l[f++]=s>>16&255,l[f++]=s>>8&255,l[f++]=255&s
return 2===u?(s=o[t.charCodeAt(e)]<<2|o[t.charCodeAt(e+1)]>>4,l[f++]=255&s):1===u&&(s=o[t.charCodeAt(e)]<<10|o[t.charCodeAt(e+1)]<<4|o[t.charCodeAt(e+2)]>>2,l[f++]=s>>8&255,l[f++]=255&s),l},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,a="",s=[],u=0,l=n-o;u<l;u+=16383)s.push(r(t,u,u+16383>l?l:u+16383))
return 1===o?(e=t[n-1],a+=i[e>>2],a+=i[e<<4&63],a+="=="):2===o&&(e=(t[n-2]<<8)+t[n-1],a+=i[e>>10],a+=i[e>>4&63],a+=i[e<<2&63],a+="="),s.push(a),s.join("")}
for(var i=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,l=s.length;u<l;++u)i[u]=s[u],o[s.charCodeAt(u)]=u
o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,l=u>>1,c=-7,f=n?i-1:0,h=n?-1:1,p=t[e+f]
for(f+=h,o=p&(1<<-c)-1,p>>=-c,c+=s;c>0;o=256*o+t[e+f],f+=h,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=r;c>0;a=256*a+t[e+f],f+=h,c-=8);if(0===o)o=1-l
else{if(o===u)return a?NaN:1/0*(p?-1:1)
a+=Math.pow(2,r),o-=l}return(p?-1:1)*a*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var a,s,u,l=8*o-i-1,c=(1<<l)-1,f=c>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,g=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),(e+=a+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(a++,u/=2),a+f>=c?(s=0,a=c):a+f>=1?(s=(e*u-1)*Math.pow(2,i),a+=f):(s=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;t[n+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,l+=i;l>0;t[n+p]=255&a,p+=d,a/=256,l-=8);t[n+p-d]|=128*g}},function(t,e){var n={}.toString
t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){"use strict"
function r(t){this.fontDescriptors=t}function i(t,e){t&&"auto"===t.height&&(t.height=1/0)
var n,r=function(t){if("string"==typeof t||t instanceof String){var e=d[t.toUpperCase()]
if(!e)throw"Page size "+t+" not recognized"
return{width:e[0],height:e[1]}}return t}(t||"A4")
return("string"==typeof(n=e)||n instanceof String)&&("portrait"===(n=n.toLowerCase())&&r.width>r.height||"landscape"===n&&r.width<r.height)&&(r={width:r.height,height:r.width}),r.orientation=r.width>r.height?"landscape":"portrait",r}function o(t){if(!t)return null
if("number"==typeof t||t instanceof Number)t={left:t,right:t,top:t,bottom:t}
else if(Array.isArray(t))if(2===t.length)t={left:t[0],top:t[1],right:t[0],bottom:t[1]}
else{if(4!==t.length)throw"Invalid pageMargins definition"
t={left:t[0],top:t[1],right:t[2],bottom:t[3]}}return t}function a(t,e){var n=e.options.size[0]>e.options.size[1]?"landscape":"portrait"
if(t.pageSize.orientation!==n){var r=e.options.size[0],i=e.options.size[1]
e.options.size=[i,r]}}function s(t,e,n,r){if(t._tocItemNode){var i,o,a=new v(null)
switch(t.inlines[0].text=t._tocItemNode.positions[0].pageNumber.toString(),i=a.widthOfString(t.inlines[0].text,t.inlines[0].font,t.inlines[0].fontSize,t.inlines[0].characterSpacing),o=t.inlines[0].width-i,t.inlines[0].width=i,t.inlines[0].alignment){case"right":t.inlines[0].x+=o
break
case"center":t.inlines[0].x+=o/2}}e=e||0,n=n||0
var s=t.getHeight(),u=s-t.getAscenderHeight()
y.drawBackground(t,e,n,r)
for(var l=0,c=t.inlines.length;l<c;l++){var f=t.inlines[l],h=s-f.font.ascender/1e3*f.fontSize-u
r.fill(f.color||"black"),r._font=f.font,r.fontSize(f.fontSize),r.text(f.text,e+f.x,n+h,{lineBreak:!1,textWidth:f.width,characterSpacing:f.characterSpacing,wordCount:1,link:f.link}),f.linkToPage&&(r.ref({Type:"Action",S:"GoTo",D:[f.linkToPage,0,0]}).end(),r.annotate(e+f.x,n+h,f.width,f.height,{Subtype:"Link",Dest:[f.linkToPage-1,"XYZ",null,null,null]}))}y.drawDecorations(t,e,n,r)}function u(t,e){var n=t.watermark
e.fill(n.color),e.opacity(n.opacity),e.save()
var r=-180*Math.atan2(e.page.height,e.page.width)/Math.PI
e.rotate(r,{origin:[e.page.width/2,e.page.height/2]})
var i=e.page.width/2-n.size.size.width/2,o=e.page.height/2-n.size.size.height/4
e._font=n.font,e.fontSize(n.size.fontSize),e.text(n.text,i,o,{lineBreak:!1}),e.restore()}function l(t,e){switch(e.lineWidth(t.lineWidth||1),t.dash?e.dash(t.dash.length,{space:t.dash.space||t.dash.length,phase:t.dash.phase||0}):e.undash(),e.lineJoin(t.lineJoin||"miter"),t.type){case"ellipse":e.ellipse(t.x,t.y,t.r1,t.r2)
break
case"rect":if(t.r?e.roundedRect(t.x,t.y,t.w,t.h,t.r):e.rect(t.x,t.y,t.w,t.h),t.linearGradient){for(var n=e.linearGradient(t.x,t.y,t.x+t.w,t.y),r=1/(t.linearGradient.length-1),i=0;i<t.linearGradient.length;i++)n.stop(i*r,t.linearGradient[i])
t.color=n}break
case"line":e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2)
break
case"polyline":if(0===t.points.length)break
e.moveTo(t.points[0].x,t.points[0].y)
i=1
for(var o=t.points.length;i<o;i++)e.lineTo(t.points[i].x,t.points[i].y)
if(t.points.length>1){var a=t.points[0],s=t.points[t.points.length-1];(t.closePath||a.x===s.x&&a.y===s.y)&&e.closePath()}break
case"path":e.path(t.d)}t.color&&t.lineColor?(e.fillColor(t.color,t.fillOpacity||1),e.strokeColor(t.lineColor,t.strokeOpacity||1),e.fillAndStroke()):t.color?(e.fillColor(t.color,t.fillOpacity||1),e.fill()):(e.strokeColor(t.lineColor||"black",t.strokeOpacity||1),e.stroke())}var c=n(7),f=n(9),h=n(10),p=n(30),d=n(297),g=n(298),y=n(299),v=n(15)
c.noConflict(),r.prototype.createPdfKitDocument=function(t,e){e=e||{}
var n=i(t.pageSize,t.pageOrientation)
this.pdfKitDoc=new p({size:[n.width,n.height],autoFirstPage:!1,compress:t.compress||!0}),function(t,e){if(e.info.Producer="pdfmake",e.info.Creator="pdfmake",t.info)for(var n in t.info){var r=t.info[n]
r&&(o=(i=n).charAt(0).toUpperCase()+i.slice(1),n=-1!==["Title","Author","Subject","Keywords","Creator","Producer","CreationDate","ModDate","Trapped"].indexOf(o)?o:i.replace(/\s+/g,""),e.info[n]=r)}var i,o}(t,this.pdfKitDoc),this.fontProvider=new f(this.fontDescriptors,this.pdfKitDoc),t.images=t.images||{}
var r=new h(n,o(t.pageMargins||40),new g(this.pdfKitDoc,t.images))
r.registerTableLayouts({noBorders:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t){return t?4:0},paddingRight:function(t,e){return t<e.table.widths.length-1?4:0}},headerLineOnly:{hLineWidth:function(t,e){return 0===t||t===e.table.body.length?0:t===e.table.headerRows?2:0},vLineWidth:function(t){return 0},paddingLeft:function(t){return 0===t?0:8},paddingRight:function(t,e){return t===e.table.widths.length-1?0:8}},lightHorizontalLines:{hLineWidth:function(t,e){return 0===t||t===e.table.body.length?0:t===e.table.headerRows?2:1},vLineWidth:function(t){return 0},hLineColor:function(t){return 1===t?"black":"#aaa"},paddingLeft:function(t){return 0===t?0:8},paddingRight:function(t,e){return t===e.table.widths.length-1?0:8}}}),e.tableLayouts&&r.registerTableLayouts(e.tableLayouts)
var d,y,v,b,m=r.layoutDocument(t.content,this.fontProvider,t.styles||{},t.defaultStyle||{fontSize:12,font:"Roboto"},t.background,t.header,t.footer,t.images,t.watermark,t.pageBreakBefore),w=t.maxPagesNumber||-1
if("number"==typeof w&&w>-1&&(m=m.slice(0,w)),n.height===1/0){var x=(d=m,y=t.pageMargins,v=o(y||40),b=v.top+v.bottom,d.forEach(function(t){t.items.forEach(function(t){var e
b+="function"==typeof(e=t).item.getHeight?e.item.getHeight():e.item._height?e.item._height:0})}),b)
this.pdfKitDoc.options.size=[n.width,x]}if(function(t,e,n,r){n._pdfMakePages=t,n.addPage()
var i,o,f=r&&c.sumBy(t,function(t){return t.items.length}),h=0
r=r||function(){}
for(var p=0;p<t.length;p++){p>0&&(a(t[p],n),n.addPage(n.options))
for(var d=t[p],g=0,y=d.items.length;g<y;g++){var v=d.items[g]
switch(v.type){case"vector":l(v.item,n)
break
case"line":s(v.item,v.item.x,v.item.y,n)
break
case"image":i=v.item,v.item.x,v.item.y,(o=n).image(i.image,i.x,i.y,{width:i._width,height:i._height}),i.link&&o.link(i.x,i.y,i._width,i._height,i.link)}r(++h/f)}d.watermark&&u(d,n)}}(m,this.fontProvider,this.pdfKitDoc,e.progressCallback),e.autoPrint){var _=this.pdfKitDoc.ref({Type:"Action",S:"Named",N:"Print"})
this.pdfKitDoc._root.data.OpenAction=_,_.end()}return this.pdfKitDoc},t.exports=r,r.prototype.fs=n(56)},function(t,e,n){var r;(function(t,i){(function(){function o(t,e){return t.set(e[0],e[1]),t}function a(t,e){return t.add(e),t}function s(t,e,n){switch(n.length){case 0:return t.call(e)
case 1:return t.call(e,n[0])
case 2:return t.call(e,n[0],n[1])
case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function u(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i]
e(r,a,n(a),t)}return r}function l(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function c(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1
return!0}function f(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n]
e(a,n,t)&&(o[i++]=a)}return o}function h(t,e){return!(null==t||!t.length)&&x(t,e,0)>-1}function p(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0
return!1}function d(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t)
return i}function g(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n]
return t}function y(t,e,n,r){var i=-1,o=null==t?0:t.length
for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t)
return n}function v(t,e,n,r){var i=null==t?0:t.length
for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t)
return n}function b(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0
return!1}function m(t,e,n){var r
return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1}),r}function w(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o
return-1}function x(t,e,n){return e==e?function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r
return-1}(t,e,n):w(t,k,n)}function _(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i
return-1}function k(t){return t!=t}function S(t,e){var n=null==t?0:t.length
return n?E(t,e)/n:mt}function C(t){return function(e){return null==e?G:e[t]}}function A(t){return function(e){return null==t?G:t[e]}}function P(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}function E(t,e){for(var n,r=-1,i=t.length;++r<i;){var o=e(t[r])
o!==G&&(n=n===G?o:n+o)}return n}function I(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n)
return r}function T(t){return function(e){return t(e)}}function O(t,e){return d(e,function(e){return t[e]})}function B(t,e){return t.has(e)}function L(t,e){for(var n=-1,r=t.length;++n<r&&x(e,t[n],0)>-1;);return n}function R(t,e){for(var n=t.length;n--&&x(e,t[n],0)>-1;);return n}function M(t){return"\\"+sn[t]}function F(t){return tn.test(t)}function z(t){var e=-1,n=Array(t.size)
return t.forEach(function(t,r){n[++e]=[r,t]}),n}function D(t,e){return function(n){return t(e(n))}}function N(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n]
a!==e&&a!==Y||(t[n]=Y,o[i++]=n)}return o}function U(t){var e=-1,n=Array(t.size)
return t.forEach(function(t){n[++e]=t}),n}function W(t){return F(t)?function(t){for(var e=Qe.lastIndex=0;Qe.test(t);)++e
return e}(t):Sn(t)}function j(t){return F(t)?t.match(Qe)||[]:t.split("")}var G,V=200,H="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",q="Expected a function",Z="__lodash_hash_undefined__",Y="__lodash_placeholder__",X=1,K=2,J=4,Q=1,$=2,tt=1,et=2,nt=4,rt=8,it=16,ot=32,at=64,st=128,ut=256,lt=512,ct=30,ft="...",ht=800,pt=16,dt=1,gt=2,yt=1/0,vt=9007199254740991,bt=1.7976931348623157e308,mt=NaN,wt=4294967295,xt=wt-1,_t=wt>>>1,kt=[["ary",st],["bind",tt],["bindKey",et],["curry",rt],["curryRight",it],["flip",lt],["partial",ot],["partialRight",at],["rearg",ut]],St="[object Arguments]",Ct="[object Array]",At="[object AsyncFunction]",Pt="[object Boolean]",Et="[object Date]",It="[object DOMException]",Tt="[object Error]",Ot="[object Function]",Bt="[object GeneratorFunction]",Lt="[object Map]",Rt="[object Number]",Mt="[object Null]",Ft="[object Object]",zt="[object Proxy]",Dt="[object RegExp]",Nt="[object Set]",Ut="[object String]",Wt="[object Symbol]",jt="[object Undefined]",Gt="[object WeakMap]",Vt="[object WeakSet]",Ht="[object ArrayBuffer]",qt="[object DataView]",Zt="[object Float32Array]",Yt="[object Float64Array]",Xt="[object Int8Array]",Kt="[object Int16Array]",Jt="[object Int32Array]",Qt="[object Uint8Array]",$t="[object Uint8ClampedArray]",te="[object Uint16Array]",ee="[object Uint32Array]",ne=/\b__p \+= '';/g,re=/\b(__p \+=) '' \+/g,ie=/(__e\(.*?\)|\b__t\)) \+\n'';/g,oe=/&(?:amp|lt|gt|quot|#39);/g,ae=/[&<>"']/g,se=RegExp(oe.source),ue=RegExp(ae.source),le=/<%-([\s\S]+?)%>/g,ce=/<%([\s\S]+?)%>/g,fe=/<%=([\s\S]+?)%>/g,he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/,de=/^\./,ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/[\\^$.*+?()[\]{}|]/g,ve=RegExp(ye.source),be=/^\s+|\s+$/g,me=/^\s+/,we=/\s+$/,xe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_e=/\{\n\/\* \[wrapped with (.+)\] \*/,ke=/,? & /,Se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ce=/\\(\\)?/g,Ae=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pe=/\w*$/,Ee=/^[-+]0x[0-9a-f]+$/i,Ie=/^0b[01]+$/i,Te=/^\[object .+?Constructor\]$/,Oe=/^0o[0-7]+$/i,Be=/^(?:0|[1-9]\d*)$/,Le=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Re=/($^)/,Me=/['\n\r\u2028\u2029\\]/g,Fe="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",ze="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="["+ze+"]",Ne="["+Fe+"]",Ue="[a-z\\xdf-\\xf6\\xf8-\\xff]",We="\\ud83c[\\udffb-\\udfff]",je="(?:\\ud83c[\\udde6-\\uddff]){2}",Ge="[\\ud800-\\udbff][\\udc00-\\udfff]",Ve="[A-Z\\xc0-\\xd6\\xd8-\\xde]",He="(?:"+Ue+"|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])",qe="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Ze="[\\ufe0e\\ufe0f]?"+qe+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",je,Ge].join("|")+")[\\ufe0e\\ufe0f]?"+qe+")*"),Ye="(?:"+["[\\u2700-\\u27bf]",je,Ge].join("|")+")"+Ze,Xe="(?:"+["[^\\ud800-\\udfff]"+Ne+"?",Ne,je,Ge,"[\\ud800-\\udfff]"].join("|")+")",Ke=RegExp("['’]","g"),Je=RegExp(Ne,"g"),Qe=RegExp(We+"(?="+We+")|"+Xe+Ze,"g"),$e=RegExp([Ve+"?"+Ue+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[De,Ve,"$"].join("|")+")","(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[De,Ve+He,"$"].join("|")+")",Ve+"?"+He+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Ve+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)","\\d+",Ye].join("|"),"g"),tn=RegExp("[\\u200d\\ud800-\\udfff"+Fe+"\\ufe0e\\ufe0f]"),en=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rn=-1,on={}
on[Zt]=on[Yt]=on[Xt]=on[Kt]=on[Jt]=on[Qt]=on[$t]=on[te]=on[ee]=!0,on[St]=on[Ct]=on[Ht]=on[Pt]=on[qt]=on[Et]=on[Tt]=on[Ot]=on[Lt]=on[Rt]=on[Ft]=on[Dt]=on[Nt]=on[Ut]=on[Gt]=!1
var an={}
an[St]=an[Ct]=an[Ht]=an[qt]=an[Pt]=an[Et]=an[Zt]=an[Yt]=an[Xt]=an[Kt]=an[Jt]=an[Lt]=an[Rt]=an[Ft]=an[Dt]=an[Nt]=an[Ut]=an[Wt]=an[Qt]=an[$t]=an[te]=an[ee]=!0,an[Tt]=an[Ot]=an[Gt]=!1
var sn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},un=parseFloat,ln=parseInt,cn="object"==typeof t&&t&&t.Object===Object&&t,fn="object"==typeof self&&self&&self.Object===Object&&self,hn=cn||fn||Function("return this")(),pn="object"==typeof e&&e&&!e.nodeType&&e,dn=pn&&"object"==typeof i&&i&&!i.nodeType&&i,gn=dn&&dn.exports===pn,yn=gn&&cn.process,vn=function(){try{return yn&&yn.binding&&yn.binding("util")}catch(t){}}(),bn=vn&&vn.isArrayBuffer,mn=vn&&vn.isDate,wn=vn&&vn.isMap,xn=vn&&vn.isRegExp,_n=vn&&vn.isSet,kn=vn&&vn.isTypedArray,Sn=C("length"),Cn=A({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),An=A({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),Pn=A({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),En=function t(e){function n(t){if(no(t)&&!Ks(t)&&!(t instanceof A)){if(t instanceof i)return t
if(Zo.call(t,"__wrapped__"))return Ei(t)}return new i(t)}function r(){}function i(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=G}function A(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=wt,this.__views__=[]}function Fe(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}function ze(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}function De(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}function Ne(t){var e=-1,n=null==t?0:t.length
for(this.__data__=new De;++e<n;)this.add(t[e])}function Ue(t){var e=this.__data__=new ze(t)
this.size=e.size}function We(t,e){var n=Ks(t),r=!n&&Xs(t),i=!n&&!r&&Qs(t),o=!n&&!r&&!i&&ru(t),a=n||r||i||o,s=a?I(t.length,Uo):[],u=s.length
for(var l in t)!e&&!Zo.call(t,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||di(l,u))||s.push(l)
return s}function je(t){var e=t.length
return e?t[nr(0,e-1)]:G}function Ge(t,e,n){(n===G||Yi(t[e],n))&&(n!==G||e in t)||Ye(t,e,n)}function Ve(t,e,n){var r=t[e]
Zo.call(t,e)&&Yi(r,n)&&(n!==G||e in t)||Ye(t,e,n)}function He(t,e){for(var n=t.length;n--;)if(Yi(t[n][0],e))return n
return-1}function qe(t,e,n,r){return Ha(t,function(t,i,o){e(r,t,n(t),o)}),r}function Ze(t,e){return t&&Or(e,vo(e),t)}function Ye(t,e,n){"__proto__"==e&&fa?fa(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Xe(t,e){for(var n=-1,r=e.length,i=Lo(r),o=null==t;++n<r;)i[n]=o?G:go(t,e[n])
return i}function Qe(t,e,n){return t==t&&(n!==G&&(t=t<=n?t:n),e!==G&&(t=t>=e?t:e)),t}function tn(t,e,n,r,i,s){var u,c=e&X,f=e&K,h=e&J
if(n&&(u=i?n(t,r,i,s):n(t)),u!==G)return u
if(!eo(t))return t
var p,d,g,v,b,m,w,x,_,k=Ks(t)
if(k){if(x=(w=t).length,_=w.constructor(x),x&&"string"==typeof w[0]&&Zo.call(w,"index")&&(_.index=w.index,_.input=w.input),u=_,!c)return Tr(t,u)}else{var S=rs(t),C=S==Ot||S==Bt
if(Qs(t))return Sr(t,c)
if(S==Ft||S==St||C&&!i){if(u=f||C?{}:hi(t),!c)return f?(g=t,b=u,m=t,v=b&&Or(m,bo(m),b),Or(g,ns(g),v)):(p=t,d=Ze(u,t),Or(p,es(p),d))}else{if(!an[S])return i?t:{}
u=function(t,e,n,r){var i=t.constructor
switch(e){case Ht:return Cr(t)
case Pt:case Et:return new i(+t)
case qt:return h=t,p=r?Cr(h.buffer):h.buffer,new h.constructor(p,h.byteOffset,h.byteLength)
case Zt:case Yt:case Xt:case Kt:case Jt:case Qt:case $t:case te:case ee:return Ar(t,r)
case Lt:return f=t,y(r?n(z(f),X):z(f),o,new f.constructor)
case Rt:case Ut:return new i(t)
case Dt:return(c=new(l=t).constructor(l.source,Pe.exec(l))).lastIndex=l.lastIndex,c
case Nt:return u=t,y(r?n(U(u),X):U(u),a,new u.constructor)
case Wt:return s=t,ja?Do(ja.call(s)):{}}var s
var u
var l,c
var f
var h,p}(t,S,tn,c)}}s||(s=new Ue)
var A=s.get(t)
if(A)return A
s.set(t,u)
var P=k?G:(h?f?ii:ri:f?bo:vo)(t)
return l(P||t,function(r,i){P&&(r=t[i=r]),Ve(u,i,tn(r,e,n,i,t,s))}),u}function sn(t,e,n){var r=n.length
if(null==t)return!r
for(t=Do(t);r--;){var i=n[r],o=e[i],a=t[i]
if(a===G&&!(i in t)||!o(a))return!1}return!0}function cn(t,e,n){if("function"!=typeof t)throw new Wo(q)
return us(function(){t.apply(G,n)},e)}function fn(t,e,n,r){var i=-1,o=h,a=!0,s=t.length,u=[],l=e.length
if(!s)return u
n&&(e=d(e,T(n))),r?(o=p,a=!1):e.length>=V&&(o=B,a=!1,e=new Ne(e))
t:for(;++i<s;){var c=t[i],f=null==n?c:n(c)
if(c=r||0!==c?c:0,a&&f==f){for(var g=l;g--;)if(e[g]===f)continue t
u.push(c)}else o(e,f,r)||u.push(c)}return u}function pn(t,e){var n=!0
return Ha(t,function(t,r,i){return n=!!e(t,r,i)}),n}function dn(t,e,n){for(var r=-1,i=t.length;++r<i;){var o=t[r],a=e(o)
if(null!=a&&(s===G?a==a&&!ao(a):n(a,s)))var s=a,u=o}return u}function yn(t,e){var n=[]
return Ha(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function vn(t,e,n,r,i){var o=-1,a=t.length
for(n||(n=pi),i||(i=[]);++o<a;){var s=t[o]
e>0&&n(s)?e>1?vn(s,e-1,n,r,i):g(i,s):r||(i[i.length]=s)}return i}function Sn(t,e){return t&&Za(t,e,vo)}function In(t,e){return t&&Ya(t,e,vo)}function Tn(t,e){return f(e,function(e){return Qi(t[e])})}function On(t,e){for(var n=0,r=(e=_r(e,t)).length;null!=t&&n<r;)t=t[Ai(e[n++])]
return n&&n==r?t:G}function Bn(t,e,n){var r=e(t)
return Ks(t)?r:g(r,n(t))}function Ln(t){return null==t?t===G?jt:Mt:ca&&ca in Do(t)?function(t){var e=Zo.call(t,ca),n=t[ca]
try{t[ca]=G
var r=!0}catch(t){}var i=Ko.call(t)
return r&&(e?t[ca]=n:delete t[ca]),i}(t):(e=t,Ko.call(e))
var e}function Rn(t,e){return t>e}function Mn(t,e){return null!=t&&Zo.call(t,e)}function Fn(t,e){return null!=t&&e in Do(t)}function zn(t,e,n){for(var r=n?p:h,i=t[0].length,o=t.length,a=o,s=Lo(o),u=1/0,l=[];a--;){var c=t[a]
a&&e&&(c=d(c,T(e))),u=ka(c.length,u),s[a]=!n&&(e||i>=120&&c.length>=120)?new Ne(a&&c):G}c=t[0]
var f=-1,g=s[0]
t:for(;++f<i&&l.length<u;){var y=c[f],v=e?e(y):y
if(y=n||0!==y?y:0,!(g?B(g,v):r(l,v,n))){for(a=o;--a;){var b=s[a]
if(!(b?B(b,v):r(t[a],v,n)))continue t}g&&g.push(v),l.push(y)}}return l}function Dn(t,e,n){var r=null==(t=_i(t,e=_r(e,t)))?t:t[Ai(Li(e))]
return null==r?G:s(r,t,n)}function Nn(t){return no(t)&&Ln(t)==St}function Un(t,e,n,r,i){return t===e||(null==t||null==e||!no(t)&&!no(e)?t!=t&&e!=e:function(t,e,n,r,i,o){var a=Ks(t),s=Ks(e),u=a?Ct:rs(t),l=s?Ct:rs(e),c=(u=u==St?Ft:u)==Ft,f=(l=l==St?Ft:l)==Ft,h=u==l
if(h&&Qs(t)){if(!Qs(e))return!1
a=!0,c=!1}if(h&&!c)return o||(o=new Ue),a||ru(t)?ei(t,e,n,r,i,o):function(t,e,n,r,i,o,a){switch(n){case qt:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1
t=t.buffer,e=e.buffer
case Ht:return!(t.byteLength!=e.byteLength||!o(new na(t),new na(e)))
case Pt:case Et:case Rt:return Yi(+t,+e)
case Tt:return t.name==e.name&&t.message==e.message
case Dt:case Ut:return t==e+""
case Lt:var s=z
case Nt:var u=r&Q
if(s||(s=U),t.size!=e.size&&!u)return!1
var l=a.get(t)
if(l)return l==e
r|=$,a.set(t,e)
var c=ei(s(t),s(e),r,i,o,a)
return a.delete(t),c
case Wt:if(ja)return ja.call(t)==ja.call(e)}return!1}(t,e,u,n,r,i,o)
if(!(n&Q)){var p=c&&Zo.call(t,"__wrapped__"),d=f&&Zo.call(e,"__wrapped__")
if(p||d){var g=p?t.value():t,y=d?e.value():e
return o||(o=new Ue),i(g,y,n,r,o)}}return!!h&&(o||(o=new Ue),function(t,e,n,r,i,o){var a=n&Q,s=ri(t),u=s.length
if(u!=ri(e).length&&!a)return!1
for(var l=u;l--;){var c=s[l]
if(!(a?c in e:Zo.call(e,c)))return!1}var f=o.get(t)
if(f&&o.get(e))return f==e
var h=!0
o.set(t,e),o.set(e,t)
for(var p=a;++l<u;){c=s[l]
var d=t[c],g=e[c]
if(r)var y=a?r(g,d,c,e,t,o):r(d,g,c,t,e,o)
if(!(y===G?d===g||i(d,g,n,r,o):y)){h=!1
break}p||(p="constructor"==c)}if(h&&!p){var v=t.constructor,b=e.constructor
v!=b&&"constructor"in t&&"constructor"in e&&!("function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b)&&(h=!1)}return o.delete(t),o.delete(e),h}(t,e,n,r,i,o))}(t,e,n,r,Un,i))}function Wn(t,e,n,r){var i=n.length,o=i,a=!r
if(null==t)return!o
for(t=Do(t);i--;){var s=n[i]
if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<o;){var u=(s=n[i])[0],l=t[u],c=s[1]
if(a&&s[2]){if(l===G&&!(u in t))return!1}else{var f=new Ue
if(r)var h=r(l,c,u,t,e,f)
if(!(h===G?Un(c,l,Q|$,r,f):h))return!1}}return!0}function jn(t){return!(!eo(t)||(e=t,Xo&&Xo in e))&&(Qi(t)?$o:Te).test(Pi(t))
var e}function Gn(t){return"function"==typeof t?t:null==t?Co:"object"==typeof t?Ks(t)?Xn(t[0],t[1]):Yn(t):Io(t)}function Vn(t){if(!bi(t))return xa(t)
var e=[]
for(var n in Do(t))Zo.call(t,n)&&"constructor"!=n&&e.push(n)
return e}function Hn(t){if(!eo(t))return function(t){var e=[]
if(null!=t)for(var n in Do(t))e.push(n)
return e}(t)
var e=bi(t),n=[]
for(var r in t)("constructor"!=r||!e&&Zo.call(t,r))&&n.push(r)
return n}function qn(t,e){return t<e}function Zn(t,e){var n=-1,r=Xi(t)?Lo(t.length):[]
return Ha(t,function(t,i,o){r[++n]=e(t,i,o)}),r}function Yn(t){var e=li(t)
return 1==e.length&&e[0][2]?wi(e[0][0],e[0][1]):function(n){return n===t||Wn(n,t,e)}}function Xn(t,e){return yi(t)&&mi(e)?wi(Ai(t),e):function(n){var r=go(n,t)
return r===G&&r===e?yo(n,t):Un(e,r,Q|$)}}function Kn(t,e,n,r,i){t!==e&&Za(e,function(o,a){if(eo(o))i||(i=new Ue),function(t,e,n,r,i,o,a){var s=t[n],u=e[n],l=a.get(u)
if(l)return void Ge(t,n,l)
var c=o?o(s,u,n+"",t,e,a):G,f=c===G
if(f){var h=Ks(u),p=!h&&Qs(u),d=!h&&!p&&ru(u)
c=u,h||p||d?Ks(s)?c=s:Ki(s)?c=Tr(s):p?(f=!1,c=Sr(u,!0)):d?(f=!1,c=Ar(u,!0)):c=[]:io(u)||Xs(u)?(c=s,Xs(s)?c=ho(s):(!eo(s)||r&&Qi(s))&&(c=hi(u))):f=!1}f&&(a.set(u,c),i(c,u,r,o,a),a.delete(u)),Ge(t,n,c)}(t,e,a,n,Kn,r,i)
else{var s=r?r(t[a],o,a+"",t,e,i):G
s===G&&(s=o),Ge(t,a,s)}},bo)}function Jn(t,e){var n=t.length
if(n)return e+=e<0?n:0,di(e,n)?t[e]:G}function Qn(t,e,n){var r=-1
return e=d(e.length?e:[Co],T(si())),function(t,e){var n=t.length
for(t.sort(e);n--;)t[n]=t[n].value
return t}(Zn(t,function(t,n,i){return{criteria:d(e,function(e){return e(t)}),index:++r,value:t}}),function(t,e){return function(t,e,n){for(var r=-1,i=t.criteria,o=e.criteria,a=i.length,s=n.length;++r<a;){var u=Pr(i[r],o[r])
if(u)return r>=s?u:u*("desc"==n[r]?-1:1)}return t.index-e.index}(t,e,n)})}function $n(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var a=e[r],s=On(t,a)
n(s,a)&&or(o,_r(a,t),s)}return o}function tr(t,e,n,r){var i=r?_:x,o=-1,a=e.length,s=t
for(t===e&&(e=Tr(e)),n&&(s=d(t,T(n)));++o<a;)for(var u=0,l=e[o],c=n?n(l):l;(u=i(s,c,u,r))>-1;)s!==t&&sa.call(s,u,1),sa.call(t,u,1)
return t}function er(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n]
if(n==r||i!==o){var o=i
di(i)?sa.call(t,i,1):dr(t,i)}}return t}function nr(t,e){return t+ya(Aa()*(e-t+1))}function rr(t,e){var n=""
if(!t||e<1||e>vt)return n
do{e%2&&(n+=t),(e=ya(e/2))&&(t+=t)}while(e)
return n}function ir(t,e){return ls(xi(t,e,Co),t+"")}function or(t,e,n,r){if(!eo(t))return t
for(var i=-1,o=(e=_r(e,t)).length,a=o-1,s=t;null!=s&&++i<o;){var u=Ai(e[i]),l=n
if(i!=a){var c=s[u];(l=r?r(c,u,s):G)===G&&(l=eo(c)?c:di(e[i+1])?[]:{})}Ve(s,u,l),s=s[u]}return t}function ar(t,e,n){var r=-1,i=t.length
e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0
for(var o=Lo(i);++r<i;)o[r]=t[r+e]
return o}function sr(t,e){var n
return Ha(t,function(t,r,i){return!(n=e(t,r,i))}),!!n}function ur(t,e,n){var r=0,i=null==t?r:t.length
if("number"==typeof e&&e==e&&i<=_t){for(;r<i;){var o=r+i>>>1,a=t[o]
null!==a&&!ao(a)&&(n?a<=e:a<e)?r=o+1:i=o}return i}return lr(t,e,Co,n)}function lr(t,e,n,r){e=n(e)
for(var i=0,o=null==t?0:t.length,a=e!=e,s=null===e,u=ao(e),l=e===G;i<o;){var c=ya((i+o)/2),f=n(t[c]),h=f!==G,p=null===f,d=f==f,g=ao(f)
if(a)var y=r||d
else y=l?d&&(r||h):s?d&&h&&(r||!p):u?d&&h&&!p&&(r||!g):!p&&!g&&(r?f<=e:f<e)
y?i=c+1:o=c}return ka(o,xt)}function cr(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n],s=e?e(a):a
if(!n||!Yi(s,u)){var u=s
o[i++]=0===a?0:a}}return o}function fr(t){return"number"==typeof t?t:ao(t)?mt:+t}function hr(t){if("string"==typeof t)return t
if(Ks(t))return d(t,hr)+""
if(ao(t))return Ga?Ga.call(t):""
var e=t+""
return"0"==e&&1/t==-yt?"-0":e}function pr(t,e,n){var r=-1,i=h,o=t.length,a=!0,s=[],u=s
if(n)a=!1,i=p
else if(o>=V){var l=e?null:$a(t)
if(l)return U(l)
a=!1,i=B,u=new Ne}else u=e?[]:s
t:for(;++r<o;){var c=t[r],f=e?e(c):c
if(c=n||0!==c?c:0,a&&f==f){for(var d=u.length;d--;)if(u[d]===f)continue t
e&&u.push(f),s.push(c)}else i(u,f,n)||(u!==s&&u.push(f),s.push(c))}return s}function dr(t,e){return null==(t=_i(t,e=_r(e,t)))||delete t[Ai(Li(e))]}function gr(t,e,n,r){return or(t,e,n(On(t,e)),r)}function yr(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?ar(t,r?0:o,r?o+1:i):ar(t,r?o+1:0,r?i:o)}function vr(t,e){var n=t
return n instanceof A&&(n=n.value()),y(e,function(t,e){return e.func.apply(e.thisArg,g([t],e.args))},n)}function br(t,e,n){var r=t.length
if(r<2)return r?pr(t[0]):[]
for(var i=-1,o=Lo(r);++i<r;)for(var a=t[i],s=-1;++s<r;)s!=i&&(o[i]=fn(o[i]||a,t[s],e,n))
return pr(vn(o,1),e,n)}function mr(t,e,n){for(var r=-1,i=t.length,o=e.length,a={};++r<i;){var s=r<o?e[r]:G
n(a,t[r],s)}return a}function wr(t){return Ki(t)?t:[]}function xr(t){return"function"==typeof t?t:Co}function _r(t,e){return Ks(t)?t:yi(t,e)?[t]:cs(po(t))}function kr(t,e,n){var r=t.length
return n=n===G?r:n,!e&&n>=r?t:ar(t,e,n)}function Sr(t,e){if(e)return t.slice()
var n=t.length,r=ra?ra(n):new t.constructor(n)
return t.copy(r),r}function Cr(t){var e=new t.constructor(t.byteLength)
return new na(e).set(new na(t)),e}function Ar(t,e){var n=e?Cr(t.buffer):t.buffer
return new t.constructor(n,t.byteOffset,t.length)}function Pr(t,e){if(t!==e){var n=t!==G,r=null===t,i=t==t,o=ao(t),a=e!==G,s=null===e,u=e==e,l=ao(e)
if(!s&&!l&&!o&&t>e||o&&a&&u&&!s&&!l||r&&a&&u||!n&&u||!i)return 1
if(!r&&!o&&!l&&t<e||l&&n&&i&&!r&&!o||s&&n&&i||!a&&i||!u)return-1}return 0}function Er(t,e,n,r){for(var i=-1,o=t.length,a=n.length,s=-1,u=e.length,l=_a(o-a,0),c=Lo(u+l),f=!r;++s<u;)c[s]=e[s]
for(;++i<a;)(f||i<o)&&(c[n[i]]=t[i])
for(;l--;)c[s++]=t[i++]
return c}function Ir(t,e,n,r){for(var i=-1,o=t.length,a=-1,s=n.length,u=-1,l=e.length,c=_a(o-s,0),f=Lo(c+l),h=!r;++i<c;)f[i]=t[i]
for(var p=i;++u<l;)f[p+u]=e[u]
for(;++a<s;)(h||i<o)&&(f[p+n[a]]=t[i++])
return f}function Tr(t,e){var n=-1,r=t.length
for(e||(e=Lo(r));++n<r;)e[n]=t[n]
return e}function Or(t,e,n,r){var i=!n
n||(n={})
for(var o=-1,a=e.length;++o<a;){var s=e[o],u=r?r(n[s],t[s],s,n,t):G
u===G&&(u=t[s]),i?Ye(n,s,u):Ve(n,s,u)}return n}function Br(t,e){return function(n,r){var i=Ks(n)?u:qe,o=e?e():{}
return i(n,t,si(r,2),o)}}function Lr(t){return ir(function(e,n){var r=-1,i=n.length,o=i>1?n[i-1]:G,a=i>2?n[2]:G
for(o=t.length>3&&"function"==typeof o?(i--,o):G,a&&gi(n[0],n[1],a)&&(o=i<3?G:o,i=1),e=Do(e);++r<i;){var s=n[r]
s&&t(e,s,r,o)}return e})}function Rr(t,e){return function(n,r){if(null==n)return n
if(!Xi(n))return t(n,r)
for(var i=n.length,o=e?i:-1,a=Do(n);(e?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function Mr(t){return function(e,n,r){for(var i=-1,o=Do(e),a=r(e),s=a.length;s--;){var u=a[t?s:++i]
if(!1===n(o[u],u,o))break}return e}}function Fr(t){return function(e){var n=F(e=po(e))?j(e):G,r=n?n[0]:e.charAt(0),i=n?kr(n,1).join(""):e.slice(1)
return r[t]()+i}}function zr(t){return function(e){return y(ko(_o(e).replace(Ke,"")),t,"")}}function Dr(t){return function(){var e=arguments
switch(e.length){case 0:return new t
case 1:return new t(e[0])
case 2:return new t(e[0],e[1])
case 3:return new t(e[0],e[1],e[2])
case 4:return new t(e[0],e[1],e[2],e[3])
case 5:return new t(e[0],e[1],e[2],e[3],e[4])
case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5])
case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Va(t.prototype),r=t.apply(n,e)
return eo(r)?r:n}}function Nr(t){return function(e,n,r){var i=Do(e)
if(!Xi(e)){var o=si(n,3)
e=vo(e),n=function(t){return o(i[t],t,i)}}var a=t(e,n,r)
return a>-1?i[o?e[a]:a]:G}}function Ur(t){return ni(function(e){var n=e.length,r=n,o=i.prototype.thru
for(t&&e.reverse();r--;){var a=e[r]
if("function"!=typeof a)throw new Wo(q)
if(o&&!s&&"wrapper"==oi(a))var s=new i([],!0)}for(r=s?r:n;++r<n;){var u=oi(a=e[r]),l="wrapper"==u?ts(a):G
s=l&&vi(l[0])&&l[1]==(st|rt|ot|ut)&&!l[4].length&&1==l[9]?s[oi(l[0])].apply(s,l[3]):1==a.length&&vi(a)?s[u]():s.thru(a)}return function(){var t=arguments,r=t[0]
if(s&&1==t.length&&Ks(r))return s.plant(r).value()
for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o)
return o}})}function Wr(t,e,n,r,i,o,a,s,u,l){var c=e&st,f=e&tt,h=e&et,p=e&(rt|it),d=e&lt,g=h?G:Dr(t)
return function y(){for(var v=arguments.length,b=Lo(v),m=v;m--;)b[m]=arguments[m]
if(p)var w=ai(y),x=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r
return r}(b,w)
if(r&&(b=Er(b,r,i,p)),o&&(b=Ir(b,o,a,p)),v-=x,p&&v<l){var _=N(b,w)
return Yr(t,e,Wr,y.placeholder,n,b,_,s,u,l-v)}var k=f?n:this,S=h?k[t]:t
return v=b.length,s?b=function(t,e){for(var n=t.length,r=ka(e.length,n),i=Tr(t);r--;){var o=e[r]
t[r]=di(o,n)?i[o]:G}return t}(b,s):d&&v>1&&b.reverse(),c&&u<v&&(b.length=u),this&&this!==hn&&this instanceof y&&(S=g||Dr(S)),S.apply(k,b)}}function jr(t,e){return function(n,r){return i=n,o=t,a=e(r),s={},Sn(i,function(t,e,n){o(s,a(t),e,n)}),s
var i,o,a,s}}function Gr(t,e){return function(n,r){var i
if(n===G&&r===G)return e
if(n!==G&&(i=n),r!==G){if(i===G)return r
"string"==typeof n||"string"==typeof r?(n=hr(n),r=hr(r)):(n=fr(n),r=fr(r)),i=t(n,r)}return i}}function Vr(t){return ni(function(e){return e=d(e,T(si())),ir(function(n){var r=this
return t(e,function(t){return s(t,r,n)})})})}function Hr(t,e){var n=(e=e===G?" ":hr(e)).length
if(n<2)return n?rr(e,t):e
var r=rr(e,ga(t/W(e)))
return F(e)?kr(j(r),0,t).join(""):r.slice(0,t)}function qr(t){return function(e,n,r){return r&&"number"!=typeof r&&gi(e,n,r)&&(n=r=G),e=uo(e),n===G?(n=e,e=0):n=uo(n),function(t,e,n,r){for(var i=-1,o=_a(ga((e-t)/(n||1)),0),a=Lo(o);o--;)a[r?o:++i]=t,t+=n
return a}(e,n,r=r===G?e<n?1:-1:uo(r),t)}}function Zr(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=fo(e),n=fo(n)),t(e,n)}}function Yr(t,e,n,r,i,o,a,s,u,l){var c=e&rt
e|=c?ot:at,(e&=~(c?at:ot))&nt||(e&=~(tt|et))
var f=[t,e,i,c?o:G,c?a:G,c?G:o,c?G:a,s,u,l],h=n.apply(G,f)
return vi(t)&&ss(h,f),h.placeholder=r,ki(h,t,e)}function Xr(t){var e=zo[t]
return function(t,n){if(t=fo(t),n=null==n?0:ka(lo(n),292)){var r=(po(t)+"e").split("e")
return+((r=(po(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}function Kr(t){return function(e){var n,r,i,o,a=rs(e)
return a==Lt?z(e):a==Nt?(r=e,i=-1,o=Array(r.size),r.forEach(function(t){o[++i]=[t,t]}),o):(n=e,d(t(e),function(t){return[t,n[t]]}))}}function Jr(t,e,n,r,i,o,a,u){var l=e&et
if(!l&&"function"!=typeof t)throw new Wo(q)
var c=r?r.length:0
if(c||(e&=~(ot|at),r=i=G),a=a===G?a:_a(lo(a),0),u=u===G?u:lo(u),c-=i?i.length:0,e&at){var f=r,h=i
r=i=G}var p,d,g,y,v,b,m,w,x,_,k,S,C,A,P,E=l?G:ts(t),I=[t,e,n,r,i,f,h,o,a,u]
if(E&&function(t,e){var n=t[1],r=e[1],i=n|r,o=i<(tt|et|st),a=r==st&&n==rt||r==st&&n==ut&&t[7].length<=e[8]||r==(st|ut)&&e[7].length<=e[8]&&n==rt
if(!o&&!a)return t
r&tt&&(t[2]=e[2],i|=n&tt?0:nt)
var s=e[3]
if(s){var u=t[3]
t[3]=u?Er(u,s,e[4]):s,t[4]=u?N(t[3],Y):e[4]}(s=e[5])&&(u=t[5],t[5]=u?Ir(u,s,e[6]):s,t[6]=u?N(t[5],Y):e[6]),(s=e[7])&&(t[7]=s),r&st&&(t[8]=null==t[8]?e[8]:ka(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i}(I,E),t=I[0],e=I[1],n=I[2],r=I[3],i=I[4],!(u=I[9]=I[9]===G?l?0:t.length:_a(I[9]-c,0))&&e&(rt|it)&&(e&=~(rt|it)),e&&e!=tt)T=e==rt||e==it?(S=t,C=e,A=u,P=Dr(S),function t(){for(var e=arguments.length,n=Lo(e),r=e,i=ai(t);r--;)n[r]=arguments[r]
var o=e<3&&n[0]!==i&&n[e-1]!==i?[]:N(n,i)
return(e-=o.length)<A?Yr(S,C,Wr,t.placeholder,G,n,o,G,G,A-e):s(this&&this!==hn&&this instanceof t?P:S,this,n)}):e!=ot&&e!=(tt|ot)||i.length?Wr.apply(G,I):(b=t,m=e,w=n,x=r,_=m&tt,k=Dr(b),function t(){for(var e=-1,n=arguments.length,r=-1,i=x.length,o=Lo(i+n),a=this&&this!==hn&&this instanceof t?k:b;++r<i;)o[r]=x[r]
for(;n--;)o[r++]=arguments[++e]
return s(a,_?w:this,o)})
else var T=(p=t,d=e,g=n,y=d&tt,v=Dr(p),function t(){return(this&&this!==hn&&this instanceof t?v:p).apply(y?g:this,arguments)})
return ki((E?Xa:ss)(T,I),t,e)}function Qr(t,e,n,r){return t===G||Yi(t,Vo[n])&&!Zo.call(r,n)?e:t}function $r(t,e,n,r,i,o){return eo(t)&&eo(e)&&(o.set(e,t),Kn(t,e,G,$r,o),o.delete(e)),t}function ti(t){return io(t)?G:t}function ei(t,e,n,r,i,o){var a=n&Q,s=t.length,u=e.length
if(s!=u&&!(a&&u>s))return!1
var l=o.get(t)
if(l&&o.get(e))return l==e
var c=-1,f=!0,h=n&$?new Ne:G
for(o.set(t,e),o.set(e,t);++c<s;){var p=t[c],d=e[c]
if(r)var g=a?r(d,p,c,e,t,o):r(p,d,c,t,e,o)
if(g!==G){if(g)continue
f=!1
break}if(h){if(!b(e,function(t,e){if(!B(h,e)&&(p===t||i(p,t,n,r,o)))return h.push(e)})){f=!1
break}}else if(p!==d&&!i(p,d,n,r,o)){f=!1
break}}return o.delete(t),o.delete(e),f}function ni(t){return ls(xi(t,G,Oi),t+"")}function ri(t){return Bn(t,vo,es)}function ii(t){return Bn(t,bo,ns)}function oi(t){for(var e=t.name+"",n=Ma[e],r=Zo.call(Ma,e)?n.length:0;r--;){var i=n[r],o=i.func
if(null==o||o==t)return i.name}return e}function ai(t){return(Zo.call(n,"placeholder")?n:t).placeholder}function si(){var t=n.iteratee||Ao
return t=t===Ao?Gn:t,arguments.length?t(arguments[0],arguments[1]):t}function ui(t,e){var n,r,i=t.__data__
return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function li(t){for(var e=vo(t),n=e.length;n--;){var r=e[n],i=t[r]
e[n]=[r,i,mi(i)]}return e}function ci(t,e){var n,r=null==(n=t)?G:n[e]
return jn(r)?r:G}function fi(t,e,n){for(var r=-1,i=(e=_r(e,t)).length,o=!1;++r<i;){var a=Ai(e[r])
if(!(o=null!=t&&n(t,a)))break
t=t[a]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&to(i)&&di(a,i)&&(Ks(t)||Xs(t))}function hi(t){return"function"!=typeof t.constructor||bi(t)?{}:Va(ia(t))}function pi(t){return Ks(t)||Xs(t)||!!(ua&&t&&t[ua])}function di(t,e){return!!(e=null==e?vt:e)&&("number"==typeof t||Be.test(t))&&t>-1&&t%1==0&&t<e}function gi(t,e,n){if(!eo(n))return!1
var r=typeof e
return!!("number"==r?Xi(n)&&di(e,n.length):"string"==r&&e in n)&&Yi(n[e],t)}function yi(t,e){if(Ks(t))return!1
var n=typeof t
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!ao(t))||pe.test(t)||!he.test(t)||null!=e&&t in Do(e)}function vi(t){var e=oi(t),r=n[e]
if("function"!=typeof r||!(e in A.prototype))return!1
if(t===r)return!0
var i=ts(r)
return!!i&&t===i[0]}function bi(t){var e=t&&t.constructor
return t===("function"==typeof e&&e.prototype||Vo)}function mi(t){return t==t&&!eo(t)}function wi(t,e){return function(n){return null!=n&&n[t]===e&&(e!==G||t in Do(n))}}function xi(t,e,n){return e=_a(e===G?t.length-1:e,0),function(){for(var r=arguments,i=-1,o=_a(r.length-e,0),a=Lo(o);++i<o;)a[i]=r[e+i]
i=-1
for(var u=Lo(e+1);++i<e;)u[i]=r[i]
return u[e]=n(a),s(t,this,u)}}function _i(t,e){return e.length<2?t:On(t,ar(e,0,-1))}function ki(t,e,n){var r,i,o,a=e+""
return ls(t,function(t,e){var n=e.length
if(!n)return t
var r=n-1
return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(xe,"{\n/* [wrapped with "+e+"] */\n")}(a,(o=a.match(_e),r=o?o[1].split(ke):[],i=n,l(kt,function(t){var e="_."+t[0]
i&t[1]&&!h(r,e)&&r.push(e)}),r.sort())))}function Si(t){var e=0,n=0
return function(){var r=Sa(),i=pt-(r-n)
if(n=r,i>0){if(++e>=ht)return arguments[0]}else e=0
return t.apply(G,arguments)}}function Ci(t,e){var n=-1,r=t.length,i=r-1
for(e=e===G?r:e;++n<e;){var o=nr(n,i),a=t[o]
t[o]=t[n],t[n]=a}return t.length=e,t}function Ai(t){if("string"==typeof t||ao(t))return t
var e=t+""
return"0"==e&&1/t==-yt?"-0":e}function Pi(t){if(null!=t){try{return qo.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ei(t){if(t instanceof A)return t.clone()
var e=new i(t.__wrapped__,t.__chain__)
return e.__actions__=Tr(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Ii(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var i=null==n?0:lo(n)
return i<0&&(i=_a(r+i,0)),w(t,si(e,3),i)}function Ti(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var i=r-1
return n!==G&&(i=lo(n),i=n<0?_a(r+i,0):ka(i,r-1)),w(t,si(e,3),i,!0)}function Oi(t){return null!=t&&t.length?vn(t,1):[]}function Bi(t){return t&&t.length?t[0]:G}function Li(t){var e=null==t?0:t.length
return e?t[e-1]:G}function Ri(t,e){return t&&t.length&&e&&e.length?tr(t,e):t}function Mi(t){return null==t?t:Pa.call(t)}function Fi(t){if(!t||!t.length)return[]
var e=0
return t=f(t,function(t){if(Ki(t))return e=_a(t.length,e),!0}),I(e,function(e){return d(t,C(e))})}function zi(t,e){if(!t||!t.length)return[]
var n=Fi(t)
return null==e?n:d(n,function(t){return s(e,G,t)})}function Di(t){var e=n(t)
return e.__chain__=!0,e}function Ni(t,e){return e(t)}function Ui(t,e){return(Ks(t)?l:Ha)(t,si(e,3))}function Wi(t,e){return(Ks(t)?function(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}:qa)(t,si(e,3))}function ji(t,e){return(Ks(t)?d:Zn)(t,si(e,3))}function Gi(t,e,n){return e=n?G:e,e=t&&null==e?t.length:e,Jr(t,st,G,G,G,G,e)}function Vi(t,e){var n
if("function"!=typeof e)throw new Wo(q)
return t=lo(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=G),n}}function Hi(t,e,n){function r(e){var n=u,r=l
return u=l=G,d=e,f=t.apply(r,n)}function i(t){var n=t-p
return p===G||n>=e||n<0||y&&t-d>=c}function o(){var t,n,r=zs()
if(i(r))return a(r)
h=us(o,(n=e-((t=r)-p),y?ka(n,c-(t-d)):n))}function a(t){return h=G,v&&u?r(t):(u=l=G,f)}function s(){var t,n=zs(),a=i(n)
if(u=arguments,l=this,p=n,a){if(h===G)return t=p,d=t,h=us(o,e),g?r(t):f
if(y)return h=us(o,e),r(p)}return h===G&&(h=us(o,e)),f}var u,l,c,f,h,p,d=0,g=!1,y=!1,v=!0
if("function"!=typeof t)throw new Wo(q)
return e=fo(e)||0,eo(n)&&(g=!!n.leading,c=(y="maxWait"in n)?_a(fo(n.maxWait)||0,e):c,v="trailing"in n?!!n.trailing:v),s.cancel=function(){h!==G&&Qa(h),d=0,u=p=l=h=G},s.flush=function(){return h===G?f:a(zs())},s}function qi(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Wo(q)
var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache
if(o.has(i))return o.get(i)
var a=t.apply(this,r)
return n.cache=o.set(i,a)||o,a}
return n.cache=new(qi.Cache||De),n}function Zi(t){if("function"!=typeof t)throw new Wo(q)
return function(){var e=arguments
switch(e.length){case 0:return!t.call(this)
case 1:return!t.call(this,e[0])
case 2:return!t.call(this,e[0],e[1])
case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Yi(t,e){return t===e||t!=t&&e!=e}function Xi(t){return null!=t&&to(t.length)&&!Qi(t)}function Ki(t){return no(t)&&Xi(t)}function Ji(t){if(!no(t))return!1
var e=Ln(t)
return e==Tt||e==It||"string"==typeof t.message&&"string"==typeof t.name&&!io(t)}function Qi(t){if(!eo(t))return!1
var e=Ln(t)
return e==Ot||e==Bt||e==At||e==zt}function $i(t){return"number"==typeof t&&t==lo(t)}function to(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=vt}function eo(t){var e=typeof t
return null!=t&&("object"==e||"function"==e)}function no(t){return null!=t&&"object"==typeof t}function ro(t){return"number"==typeof t||no(t)&&Ln(t)==Rt}function io(t){if(!no(t)||Ln(t)!=Ft)return!1
var e=ia(t)
if(null===e)return!0
var n=Zo.call(e,"constructor")&&e.constructor
return"function"==typeof n&&n instanceof n&&qo.call(n)==Jo}function oo(t){return"string"==typeof t||!Ks(t)&&no(t)&&Ln(t)==Ut}function ao(t){return"symbol"==typeof t||no(t)&&Ln(t)==Wt}function so(t){if(!t)return[]
if(Xi(t))return oo(t)?j(t):Tr(t)
if(la&&t[la])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value)
return n}(t[la]())
var e=rs(t)
return(e==Lt?z:e==Nt?U:wo)(t)}function uo(t){return t?(t=fo(t))===yt||t===-yt?(t<0?-1:1)*bt:t==t?t:0:0===t?t:0}function lo(t){var e=uo(t),n=e%1
return e==e?n?e-n:e:0}function co(t){return t?Qe(lo(t),0,wt):0}function fo(t){if("number"==typeof t)return t
if(ao(t))return mt
if(eo(t)){var e="function"==typeof t.valueOf?t.valueOf():t
t=eo(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t
t=t.replace(be,"")
var n=Ie.test(t)
return n||Oe.test(t)?ln(t.slice(2),n?2:8):Ee.test(t)?mt:+t}function ho(t){return Or(t,bo(t))}function po(t){return null==t?"":hr(t)}function go(t,e,n){var r=null==t?G:On(t,e)
return r===G?n:r}function yo(t,e){return null!=t&&fi(t,e,Fn)}function vo(t){return Xi(t)?We(t):Vn(t)}function bo(t){return Xi(t)?We(t,!0):Hn(t)}function mo(t,e){if(null==t)return{}
var n=d(ii(t),function(t){return[t]})
return e=si(e),$n(t,n,function(t,n){return e(t,n[0])})}function wo(t){return null==t?[]:O(t,vo(t))}function xo(t){return Iu(po(t).toLowerCase())}function _o(t){return(t=po(t))&&t.replace(Le,Cn).replace(Je,"")}function ko(t,e,n){return t=po(t),(e=n?G:e)===G?(r=t,en.test(r)?t.match($e)||[]:t.match(Se)||[]):t.match(e)||[]
var r}function So(t){return function(){return t}}function Co(t){return t}function Ao(t){return Gn("function"==typeof t?t:tn(t,X))}function Po(t,e,n){var r=vo(e),i=Tn(e,r)
null!=n||eo(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Tn(e,vo(e)))
var o=!(eo(n)&&"chain"in n&&!n.chain),a=Qi(t)
return l(i,function(n){var r=e[n]
t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__
if(o||e){var n=t(this.__wrapped__)
return(n.__actions__=Tr(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,g([this.value()],arguments))})}),t}function Eo(){}function Io(t){return yi(t)?C(Ai(t)):(e=t,function(t){return On(t,e)})
var e}function To(){return[]}function Oo(){return!1}var Bo,Lo=(e=null==e?hn:En.defaults(hn.Object(),e,En.pick(hn,nn))).Array,Ro=e.Date,Mo=e.Error,Fo=e.Function,zo=e.Math,Do=e.Object,No=e.RegExp,Uo=e.String,Wo=e.TypeError,jo=Lo.prototype,Go=Fo.prototype,Vo=Do.prototype,Ho=e["__core-js_shared__"],qo=Go.toString,Zo=Vo.hasOwnProperty,Yo=0,Xo=(Bo=/[^.]+$/.exec(Ho&&Ho.keys&&Ho.keys.IE_PROTO||""))?"Symbol(src)_1."+Bo:"",Ko=Vo.toString,Jo=qo.call(Do),Qo=hn._,$o=No("^"+qo.call(Zo).replace(ye,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ta=gn?e.Buffer:G,ea=e.Symbol,na=e.Uint8Array,ra=ta?ta.allocUnsafe:G,ia=D(Do.getPrototypeOf,Do),oa=Do.create,aa=Vo.propertyIsEnumerable,sa=jo.splice,ua=ea?ea.isConcatSpreadable:G,la=ea?ea.iterator:G,ca=ea?ea.toStringTag:G,fa=function(){try{var t=ci(Do,"defineProperty")
return t({},"",{}),t}catch(t){}}(),ha=e.clearTimeout!==hn.clearTimeout&&e.clearTimeout,pa=Ro&&Ro.now!==hn.Date.now&&Ro.now,da=e.setTimeout!==hn.setTimeout&&e.setTimeout,ga=zo.ceil,ya=zo.floor,va=Do.getOwnPropertySymbols,ba=ta?ta.isBuffer:G,ma=e.isFinite,wa=jo.join,xa=D(Do.keys,Do),_a=zo.max,ka=zo.min,Sa=Ro.now,Ca=e.parseInt,Aa=zo.random,Pa=jo.reverse,Ea=ci(e,"DataView"),Ia=ci(e,"Map"),Ta=ci(e,"Promise"),Oa=ci(e,"Set"),Ba=ci(e,"WeakMap"),La=ci(Do,"create"),Ra=Ba&&new Ba,Ma={},Fa=Pi(Ea),za=Pi(Ia),Da=Pi(Ta),Na=Pi(Oa),Ua=Pi(Ba),Wa=ea?ea.prototype:G,ja=Wa?Wa.valueOf:G,Ga=Wa?Wa.toString:G,Va=function(){function t(){}return function(e){if(!eo(e))return{}
if(oa)return oa(e)
t.prototype=e
var n=new t
return t.prototype=G,n}}()
n.templateSettings={escape:le,evaluate:ce,interpolate:fe,variable:"",imports:{_:n}},n.prototype=r.prototype,n.prototype.constructor=n,i.prototype=Va(r.prototype),i.prototype.constructor=i,A.prototype=Va(r.prototype),A.prototype.constructor=A,Fe.prototype.clear=function(){this.__data__=La?La(null):{},this.size=0},Fe.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t]
return this.size-=e?1:0,e},Fe.prototype.get=function(t){var e=this.__data__
if(La){var n=e[t]
return n===Z?G:n}return Zo.call(e,t)?e[t]:G},Fe.prototype.has=function(t){var e=this.__data__
return La?e[t]!==G:Zo.call(e,t)},Fe.prototype.set=function(t,e){var n=this.__data__
return this.size+=this.has(t)?0:1,n[t]=La&&e===G?Z:e,this},ze.prototype.clear=function(){this.__data__=[],this.size=0},ze.prototype.delete=function(t){var e=this.__data__,n=He(e,t)
return!(n<0||(n==e.length-1?e.pop():sa.call(e,n,1),--this.size,0))},ze.prototype.get=function(t){var e=this.__data__,n=He(e,t)
return n<0?G:e[n][1]},ze.prototype.has=function(t){return He(this.__data__,t)>-1},ze.prototype.set=function(t,e){var n=this.__data__,r=He(n,t)
return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},De.prototype.clear=function(){this.size=0,this.__data__={hash:new Fe,map:new(Ia||ze),string:new Fe}},De.prototype.delete=function(t){var e=ui(this,t).delete(t)
return this.size-=e?1:0,e},De.prototype.get=function(t){return ui(this,t).get(t)},De.prototype.has=function(t){return ui(this,t).has(t)},De.prototype.set=function(t,e){var n=ui(this,t),r=n.size
return n.set(t,e),this.size+=n.size==r?0:1,this},Ne.prototype.add=Ne.prototype.push=function(t){return this.__data__.set(t,Z),this},Ne.prototype.has=function(t){return this.__data__.has(t)},Ue.prototype.clear=function(){this.__data__=new ze,this.size=0},Ue.prototype.delete=function(t){var e=this.__data__,n=e.delete(t)
return this.size=e.size,n},Ue.prototype.get=function(t){return this.__data__.get(t)},Ue.prototype.has=function(t){return this.__data__.has(t)},Ue.prototype.set=function(t,e){var n=this.__data__
if(n instanceof ze){var r=n.__data__
if(!Ia||r.length<V-1)return r.push([t,e]),this.size=++n.size,this
n=this.__data__=new De(r)}return n.set(t,e),this.size=n.size,this}
var Ha=Rr(Sn),qa=Rr(In,!0),Za=Mr(),Ya=Mr(!0),Xa=Ra?function(t,e){return Ra.set(t,e),t}:Co,Ka=fa?function(t,e){return fa(t,"toString",{configurable:!0,enumerable:!1,value:So(e),writable:!0})}:Co,Ja=ir,Qa=ha||function(t){return hn.clearTimeout(t)},$a=Oa&&1/U(new Oa([,-0]))[1]==yt?function(t){return new Oa(t)}:Eo,ts=Ra?function(t){return Ra.get(t)}:Eo,es=va?function(t){return null==t?[]:(t=Do(t),f(va(t),function(e){return aa.call(t,e)}))}:To,ns=va?function(t){for(var e=[];t;)g(e,es(t)),t=ia(t)
return e}:To,rs=Ln;(Ea&&rs(new Ea(new ArrayBuffer(1)))!=qt||Ia&&rs(new Ia)!=Lt||Ta&&"[object Promise]"!=rs(Ta.resolve())||Oa&&rs(new Oa)!=Nt||Ba&&rs(new Ba)!=Gt)&&(rs=function(t){var e=Ln(t),n=e==Ft?t.constructor:G,r=n?Pi(n):""
if(r)switch(r){case Fa:return qt
case za:return Lt
case Da:return"[object Promise]"
case Na:return Nt
case Ua:return Gt}return e})
var is,os,as=Ho?Qi:Oo,ss=Si(Xa),us=da||function(t,e){return hn.setTimeout(t,e)},ls=Si(Ka),cs=(is=qi(function(t){var e=[]
return de.test(t)&&e.push(""),t.replace(ge,function(t,n,r,i){e.push(r?i.replace(Ce,"$1"):n||t)}),e},function(t){return 500===os.size&&os.clear(),t}),os=is.cache,is),fs=ir(function(t,e){return Ki(t)?fn(t,vn(e,1,Ki,!0)):[]}),hs=ir(function(t,e){var n=Li(e)
return Ki(n)&&(n=G),Ki(t)?fn(t,vn(e,1,Ki,!0),si(n,2)):[]}),ps=ir(function(t,e){var n=Li(e)
return Ki(n)&&(n=G),Ki(t)?fn(t,vn(e,1,Ki,!0),G,n):[]}),ds=ir(function(t){var e=d(t,wr)
return e.length&&e[0]===t[0]?zn(e):[]}),gs=ir(function(t){var e=Li(t),n=d(t,wr)
return e===Li(n)?e=G:n.pop(),n.length&&n[0]===t[0]?zn(n,si(e,2)):[]}),ys=ir(function(t){var e=Li(t),n=d(t,wr)
return(e="function"==typeof e?e:G)&&n.pop(),n.length&&n[0]===t[0]?zn(n,G,e):[]}),vs=ir(Ri),bs=ni(function(t,e){var n=null==t?0:t.length,r=Xe(t,e)
return er(t,d(e,function(t){return di(t,n)?+t:t}).sort(Pr)),r}),ms=ir(function(t){return pr(vn(t,1,Ki,!0))}),ws=ir(function(t){var e=Li(t)
return Ki(e)&&(e=G),pr(vn(t,1,Ki,!0),si(e,2))}),xs=ir(function(t){var e=Li(t)
return e="function"==typeof e?e:G,pr(vn(t,1,Ki,!0),G,e)}),_s=ir(function(t,e){return Ki(t)?fn(t,e):[]}),ks=ir(function(t){return br(f(t,Ki))}),Ss=ir(function(t){var e=Li(t)
return Ki(e)&&(e=G),br(f(t,Ki),si(e,2))}),Cs=ir(function(t){var e=Li(t)
return e="function"==typeof e?e:G,br(f(t,Ki),G,e)}),As=ir(Fi),Ps=ir(function(t){var e=t.length,n=e>1?t[e-1]:G
return zi(t,n="function"==typeof n?(t.pop(),n):G)}),Es=ni(function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,o=function(e){return Xe(e,t)}
return!(e>1||this.__actions__.length)&&r instanceof A&&di(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:Ni,args:[o],thisArg:G}),new i(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(G),t})):this.thru(o)}),Is=Br(function(t,e,n){Zo.call(t,n)?++t[n]:Ye(t,n,1)}),Ts=Nr(Ii),Os=Nr(Ti),Bs=Br(function(t,e,n){Zo.call(t,n)?t[n].push(e):Ye(t,n,[e])}),Ls=ir(function(t,e,n){var r=-1,i="function"==typeof e,o=Xi(t)?Lo(t.length):[]
return Ha(t,function(t){o[++r]=i?s(e,t,n):Dn(t,e,n)}),o}),Rs=Br(function(t,e,n){Ye(t,n,e)}),Ms=Br(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]}),Fs=ir(function(t,e){if(null==t)return[]
var n=e.length
return n>1&&gi(t,e[0],e[1])?e=[]:n>2&&gi(e[0],e[1],e[2])&&(e=[e[0]]),Qn(t,vn(e,1),[])}),zs=pa||function(){return hn.Date.now()},Ds=ir(function(t,e,n){var r=tt
if(n.length){var i=N(n,ai(Ds))
r|=ot}return Jr(t,r,e,n,i)}),Ns=ir(function(t,e,n){var r=tt|et
if(n.length){var i=N(n,ai(Ns))
r|=ot}return Jr(e,r,t,n,i)}),Us=ir(function(t,e){return cn(t,1,e)}),Ws=ir(function(t,e,n){return cn(t,fo(e)||0,n)})
qi.Cache=De
var js,Gs=Ja(function(t,e){var n=(e=1==e.length&&Ks(e[0])?d(e[0],T(si())):d(vn(e,1),T(si()))).length
return ir(function(r){for(var i=-1,o=ka(r.length,n);++i<o;)r[i]=e[i].call(this,r[i])
return s(t,this,r)})}),Vs=ir(function(t,e){var n=N(e,ai(Vs))
return Jr(t,ot,G,e,n)}),Hs=ir(function(t,e){var n=N(e,ai(Hs))
return Jr(t,at,G,e,n)}),qs=ni(function(t,e){return Jr(t,ut,G,G,G,e)}),Zs=Zr(Rn),Ys=Zr(function(t,e){return t>=e}),Xs=Nn(function(){return arguments}())?Nn:function(t){return no(t)&&Zo.call(t,"callee")&&!aa.call(t,"callee")},Ks=Lo.isArray,Js=bn?T(bn):function(t){return no(t)&&Ln(t)==Ht},Qs=ba||Oo,$s=mn?T(mn):function(t){return no(t)&&Ln(t)==Et},tu=wn?T(wn):function(t){return no(t)&&rs(t)==Lt},eu=xn?T(xn):function(t){return no(t)&&Ln(t)==Dt},nu=_n?T(_n):function(t){return no(t)&&rs(t)==Nt},ru=kn?T(kn):function(t){return no(t)&&to(t.length)&&!!on[Ln(t)]},iu=Zr(qn),ou=Zr(function(t,e){return t<=e}),au=Lr(function(t,e){if(bi(e)||Xi(e))Or(e,vo(e),t)
else for(var n in e)Zo.call(e,n)&&Ve(t,n,e[n])}),su=Lr(function(t,e){Or(e,bo(e),t)}),uu=Lr(function(t,e,n,r){Or(e,bo(e),t,r)}),lu=Lr(function(t,e,n,r){Or(e,vo(e),t,r)}),cu=ni(Xe),fu=ir(function(t){return t.push(G,Qr),s(uu,G,t)}),hu=ir(function(t){return t.push(G,$r),s(vu,G,t)}),pu=jr(function(t,e,n){t[e]=n},So(Co)),du=jr(function(t,e,n){Zo.call(t,e)?t[e].push(n):t[e]=[n]},si),gu=ir(Dn),yu=Lr(function(t,e,n){Kn(t,e,n)}),vu=Lr(function(t,e,n,r){Kn(t,e,n,r)}),bu=ni(function(t,e){var n={}
if(null==t)return n
var r=!1
e=d(e,function(e){return e=_r(e,t),r||(r=e.length>1),e}),Or(t,ii(t),n),r&&(n=tn(n,X|K|J,ti))
for(var i=e.length;i--;)dr(n,e[i])
return n}),mu=ni(function(t,e){return null==t?{}:$n(n=t,e,function(t,e){return yo(n,e)})
var n}),wu=Kr(vo),xu=Kr(bo),_u=zr(function(t,e,n){return e=e.toLowerCase(),t+(n?xo(e):e)}),ku=zr(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),Su=zr(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),Cu=Fr("toLowerCase"),Au=zr(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),Pu=zr(function(t,e,n){return t+(n?" ":"")+Iu(e)}),Eu=zr(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),Iu=Fr("toUpperCase"),Tu=ir(function(t,e){try{return s(t,G,e)}catch(t){return Ji(t)?t:new Mo(t)}}),Ou=ni(function(t,e){return l(e,function(e){e=Ai(e),Ye(t,e,Ds(t[e],t))}),t}),Bu=Ur(),Lu=Ur(!0),Ru=ir(function(t,e){return function(n){return Dn(n,t,e)}}),Mu=ir(function(t,e){return function(n){return Dn(t,n,e)}}),Fu=Vr(d),zu=Vr(c),Du=Vr(b),Nu=qr(),Uu=qr(!0),Wu=Gr(function(t,e){return t+e},0),ju=Xr("ceil"),Gu=Gr(function(t,e){return t/e},1),Vu=Xr("floor"),Hu=Gr(function(t,e){return t*e},1),qu=Xr("round"),Zu=Gr(function(t,e){return t-e},0)
return n.after=function(t,e){if("function"!=typeof e)throw new Wo(q)
return t=lo(t),function(){if(--t<1)return e.apply(this,arguments)}},n.ary=Gi,n.assign=au,n.assignIn=su,n.assignInWith=uu,n.assignWith=lu,n.at=cu,n.before=Vi,n.bind=Ds,n.bindAll=Ou,n.bindKey=Ns,n.castArray=function(){if(!arguments.length)return[]
var t=arguments[0]
return Ks(t)?t:[t]},n.chain=Di,n.chunk=function(t,e,n){e=(n?gi(t,e,n):e===G)?1:_a(lo(e),0)
var r=null==t?0:t.length
if(!r||e<1)return[]
for(var i=0,o=0,a=Lo(ga(r/e));i<r;)a[o++]=ar(t,i,i+=e)
return a},n.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e]
o&&(i[r++]=o)}return i},n.concat=function(){var t=arguments.length
if(!t)return[]
for(var e=Lo(t-1),n=arguments[0],r=t;r--;)e[r-1]=arguments[r]
return g(Ks(n)?Tr(n):[n],vn(e,1))},n.cond=function(t){var e=null==t?0:t.length,n=si()
return t=e?d(t,function(t){if("function"!=typeof t[1])throw new Wo(q)
return[n(t[0]),t[1]]}):[],ir(function(n){for(var r=-1;++r<e;){var i=t[r]
if(s(i[0],this,n))return s(i[1],this,n)}})},n.conforms=function(t){return e=tn(t,X),n=vo(e),function(t){return sn(t,e,n)}
var e,n},n.constant=So,n.countBy=Is,n.create=function(t,e){var n=Va(t)
return null==e?n:Ze(n,e)},n.curry=function t(e,n,r){var i=Jr(e,rt,G,G,G,G,G,n=r?G:n)
return i.placeholder=t.placeholder,i},n.curryRight=function t(e,n,r){var i=Jr(e,it,G,G,G,G,G,n=r?G:n)
return i.placeholder=t.placeholder,i},n.debounce=Hi,n.defaults=fu,n.defaultsDeep=hu,n.defer=Us,n.delay=Ws,n.difference=fs,n.differenceBy=hs,n.differenceWith=ps,n.drop=function(t,e,n){var r=null==t?0:t.length
return r?ar(t,(e=n||e===G?1:lo(e))<0?0:e,r):[]},n.dropRight=function(t,e,n){var r=null==t?0:t.length
return r?ar(t,0,(e=r-(e=n||e===G?1:lo(e)))<0?0:e):[]},n.dropRightWhile=function(t,e){return t&&t.length?yr(t,si(e,3),!0,!0):[]},n.dropWhile=function(t,e){return t&&t.length?yr(t,si(e,3),!0):[]},n.fill=function(t,e,n,r){var i=null==t?0:t.length
return i?(n&&"number"!=typeof n&&gi(t,e,n)&&(n=0,r=i),function(t,e,n,r){var i=t.length
for((n=lo(n))<0&&(n=-n>i?0:i+n),(r=r===G||r>i?i:lo(r))<0&&(r+=i),r=n>r?0:co(r);n<r;)t[n++]=e
return t}(t,e,n,r)):[]},n.filter=function(t,e){return(Ks(t)?f:yn)(t,si(e,3))},n.flatMap=function(t,e){return vn(ji(t,e),1)},n.flatMapDeep=function(t,e){return vn(ji(t,e),yt)},n.flatMapDepth=function(t,e,n){return n=n===G?1:lo(n),vn(ji(t,e),n)},n.flatten=Oi,n.flattenDeep=function(t){return null!=t&&t.length?vn(t,yt):[]},n.flattenDepth=function(t,e){return null!=t&&t.length?vn(t,e=e===G?1:lo(e)):[]},n.flip=function(t){return Jr(t,lt)},n.flow=Bu,n.flowRight=Lu,n.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e]
r[i[0]]=i[1]}return r},n.functions=function(t){return null==t?[]:Tn(t,vo(t))},n.functionsIn=function(t){return null==t?[]:Tn(t,bo(t))},n.groupBy=Bs,n.initial=function(t){return null!=t&&t.length?ar(t,0,-1):[]},n.intersection=ds,n.intersectionBy=gs,n.intersectionWith=ys,n.invert=pu,n.invertBy=du,n.invokeMap=Ls,n.iteratee=Ao,n.keyBy=Rs,n.keys=vo,n.keysIn=bo,n.map=ji,n.mapKeys=function(t,e){var n={}
return e=si(e,3),Sn(t,function(t,r,i){Ye(n,e(t,r,i),t)}),n},n.mapValues=function(t,e){var n={}
return e=si(e,3),Sn(t,function(t,r,i){Ye(n,r,e(t,r,i))}),n},n.matches=function(t){return Yn(tn(t,X))},n.matchesProperty=function(t,e){return Xn(t,tn(e,X))},n.memoize=qi,n.merge=yu,n.mergeWith=vu,n.method=Ru,n.methodOf=Mu,n.mixin=Po,n.negate=Zi,n.nthArg=function(t){return t=lo(t),ir(function(e){return Jn(e,t)})},n.omit=bu,n.omitBy=function(t,e){return mo(t,Zi(si(e)))},n.once=function(t){return Vi(2,t)},n.orderBy=function(t,e,n,r){return null==t?[]:(Ks(e)||(e=null==e?[]:[e]),Ks(n=r?G:n)||(n=null==n?[]:[n]),Qn(t,e,n))},n.over=Fu,n.overArgs=Gs,n.overEvery=zu,n.overSome=Du,n.partial=Vs,n.partialRight=Hs,n.partition=Ms,n.pick=mu,n.pickBy=mo,n.property=Io,n.propertyOf=function(t){return function(e){return null==t?G:On(t,e)}},n.pull=vs,n.pullAll=Ri,n.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?tr(t,e,si(n,2)):t},n.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?tr(t,e,G,n):t},n.pullAt=bs,n.range=Nu,n.rangeRight=Uu,n.rearg=qs,n.reject=function(t,e){return(Ks(t)?f:yn)(t,Zi(si(e,3)))},n.remove=function(t,e){var n=[]
if(!t||!t.length)return n
var r=-1,i=[],o=t.length
for(e=si(e,3);++r<o;){var a=t[r]
e(a,r,t)&&(n.push(a),i.push(r))}return er(t,i),n},n.rest=function(t,e){if("function"!=typeof t)throw new Wo(q)
return ir(t,e=e===G?e:lo(e))},n.reverse=Mi,n.sampleSize=function(t,e,n){return e=(n?gi(t,e,n):e===G)?1:lo(e),(Ks(t)?function(t,e){return Ci(Tr(t),Qe(e,0,t.length))}:function(t,e){var n=wo(t)
return Ci(n,Qe(e,0,n.length))})(t,e)},n.set=function(t,e,n){return null==t?t:or(t,e,n)},n.setWith=function(t,e,n,r){return r="function"==typeof r?r:G,null==t?t:or(t,e,n,r)},n.shuffle=function(t){return(Ks(t)?function(t){return Ci(Tr(t))}:function(t){return Ci(wo(t))})(t)},n.slice=function(t,e,n){var r=null==t?0:t.length
return r?(n&&"number"!=typeof n&&gi(t,e,n)?(e=0,n=r):(e=null==e?0:lo(e),n=n===G?r:lo(n)),ar(t,e,n)):[]},n.sortBy=Fs,n.sortedUniq=function(t){return t&&t.length?cr(t):[]},n.sortedUniqBy=function(t,e){return t&&t.length?cr(t,si(e,2)):[]},n.split=function(t,e,n){return n&&"number"!=typeof n&&gi(t,e,n)&&(e=n=G),(n=n===G?wt:n>>>0)?(t=po(t))&&("string"==typeof e||null!=e&&!eu(e))&&!(e=hr(e))&&F(t)?kr(j(t),0,n):t.split(e,n):[]},n.spread=function(t,e){if("function"!=typeof t)throw new Wo(q)
return e=null==e?0:_a(lo(e),0),ir(function(n){var r=n[e],i=kr(n,0,e)
return r&&g(i,r),s(t,this,i)})},n.tail=function(t){var e=null==t?0:t.length
return e?ar(t,1,e):[]},n.take=function(t,e,n){return t&&t.length?ar(t,0,(e=n||e===G?1:lo(e))<0?0:e):[]},n.takeRight=function(t,e,n){var r=null==t?0:t.length
return r?ar(t,(e=r-(e=n||e===G?1:lo(e)))<0?0:e,r):[]},n.takeRightWhile=function(t,e){return t&&t.length?yr(t,si(e,3),!1,!0):[]},n.takeWhile=function(t,e){return t&&t.length?yr(t,si(e,3)):[]},n.tap=function(t,e){return e(t),t},n.throttle=function(t,e,n){var r=!0,i=!0
if("function"!=typeof t)throw new Wo(q)
return eo(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Hi(t,e,{leading:r,maxWait:e,trailing:i})},n.thru=Ni,n.toArray=so,n.toPairs=wu,n.toPairsIn=xu,n.toPath=function(t){return Ks(t)?d(t,Ai):ao(t)?[t]:Tr(cs(po(t)))},n.toPlainObject=ho,n.transform=function(t,e,n){var r=Ks(t),i=r||Qs(t)||ru(t)
if(e=si(e,4),null==n){var o=t&&t.constructor
n=i?r?new o:[]:eo(t)&&Qi(o)?Va(ia(t)):{}}return(i?l:Sn)(t,function(t,r,i){return e(n,t,r,i)}),n},n.unary=function(t){return Gi(t,1)},n.union=ms,n.unionBy=ws,n.unionWith=xs,n.uniq=function(t){return t&&t.length?pr(t):[]},n.uniqBy=function(t,e){return t&&t.length?pr(t,si(e,2)):[]},n.uniqWith=function(t,e){return e="function"==typeof e?e:G,t&&t.length?pr(t,G,e):[]},n.unset=function(t,e){return null==t||dr(t,e)},n.unzip=Fi,n.unzipWith=zi,n.update=function(t,e,n){return null==t?t:gr(t,e,xr(n))},n.updateWith=function(t,e,n,r){return r="function"==typeof r?r:G,null==t?t:gr(t,e,xr(n),r)},n.values=wo,n.valuesIn=function(t){return null==t?[]:O(t,bo(t))},n.without=_s,n.words=ko,n.wrap=function(t,e){return Vs(xr(e),t)},n.xor=ks,n.xorBy=Ss,n.xorWith=Cs,n.zip=As,n.zipObject=function(t,e){return mr(t||[],e||[],Ve)},n.zipObjectDeep=function(t,e){return mr(t||[],e||[],or)},n.zipWith=Ps,n.entries=wu,n.entriesIn=xu,n.extend=su,n.extendWith=uu,Po(n,n),n.add=Wu,n.attempt=Tu,n.camelCase=_u,n.capitalize=xo,n.ceil=ju,n.clamp=function(t,e,n){return n===G&&(n=e,e=G),n!==G&&(n=(n=fo(n))==n?n:0),e!==G&&(e=(e=fo(e))==e?e:0),Qe(fo(t),e,n)},n.clone=function(t){return tn(t,J)},n.cloneDeep=function(t){return tn(t,X|J)},n.cloneDeepWith=function(t,e){return tn(t,X|J,e="function"==typeof e?e:G)},n.cloneWith=function(t,e){return tn(t,J,e="function"==typeof e?e:G)},n.conformsTo=function(t,e){return null==e||sn(t,e,vo(e))},n.deburr=_o,n.defaultTo=function(t,e){return null==t||t!=t?e:t},n.divide=Gu,n.endsWith=function(t,e,n){t=po(t),e=hr(e)
var r=t.length,i=n=n===G?r:Qe(lo(n),0,r)
return(n-=e.length)>=0&&t.slice(n,i)==e},n.eq=Yi,n.escape=function(t){return(t=po(t))&&ue.test(t)?t.replace(ae,An):t},n.escapeRegExp=function(t){return(t=po(t))&&ve.test(t)?t.replace(ye,"\\$&"):t},n.every=function(t,e,n){var r=Ks(t)?c:pn
return n&&gi(t,e,n)&&(e=G),r(t,si(e,3))},n.find=Ts,n.findIndex=Ii,n.findKey=function(t,e){return m(t,si(e,3),Sn)},n.findLast=Os,n.findLastIndex=Ti,n.findLastKey=function(t,e){return m(t,si(e,3),In)},n.floor=Vu,n.forEach=Ui,n.forEachRight=Wi,n.forIn=function(t,e){return null==t?t:Za(t,si(e,3),bo)},n.forInRight=function(t,e){return null==t?t:Ya(t,si(e,3),bo)},n.forOwn=function(t,e){return t&&Sn(t,si(e,3))},n.forOwnRight=function(t,e){return t&&In(t,si(e,3))},n.get=go,n.gt=Zs,n.gte=Ys,n.has=function(t,e){return null!=t&&fi(t,e,Mn)},n.hasIn=yo,n.head=Bi,n.identity=Co,n.includes=function(t,e,n,r){t=Xi(t)?t:wo(t),n=n&&!r?lo(n):0
var i=t.length
return n<0&&(n=_a(i+n,0)),oo(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&x(t,e,n)>-1},n.indexOf=function(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var i=null==n?0:lo(n)
return i<0&&(i=_a(r+i,0)),x(t,e,i)},n.inRange=function(t,e,n){return e=uo(e),n===G?(n=e,e=0):n=uo(n),t=fo(t),(r=t)>=ka(i=e,o=n)&&r<_a(i,o)
var r,i,o},n.invoke=gu,n.isArguments=Xs,n.isArray=Ks,n.isArrayBuffer=Js,n.isArrayLike=Xi,n.isArrayLikeObject=Ki,n.isBoolean=function(t){return!0===t||!1===t||no(t)&&Ln(t)==Pt},n.isBuffer=Qs,n.isDate=$s,n.isElement=function(t){return no(t)&&1===t.nodeType&&!io(t)},n.isEmpty=function(t){if(null==t)return!0
if(Xi(t)&&(Ks(t)||"string"==typeof t||"function"==typeof t.splice||Qs(t)||ru(t)||Xs(t)))return!t.length
var e=rs(t)
if(e==Lt||e==Nt)return!t.size
if(bi(t))return!Vn(t).length
for(var n in t)if(Zo.call(t,n))return!1
return!0},n.isEqual=function(t,e){return Un(t,e)},n.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:G)?n(t,e):G
return r===G?Un(t,e,G,n):!!r},n.isError=Ji,n.isFinite=function(t){return"number"==typeof t&&ma(t)},n.isFunction=Qi,n.isInteger=$i,n.isLength=to,n.isMap=tu,n.isMatch=function(t,e){return t===e||Wn(t,e,li(e))},n.isMatchWith=function(t,e,n){return n="function"==typeof n?n:G,Wn(t,e,li(e),n)},n.isNaN=function(t){return ro(t)&&t!=+t},n.isNative=function(t){if(as(t))throw new Mo(H)
return jn(t)},n.isNil=function(t){return null==t},n.isNull=function(t){return null===t},n.isNumber=ro,n.isObject=eo,n.isObjectLike=no,n.isPlainObject=io,n.isRegExp=eu,n.isSafeInteger=function(t){return $i(t)&&t>=-vt&&t<=vt},n.isSet=nu,n.isString=oo,n.isSymbol=ao,n.isTypedArray=ru,n.isUndefined=function(t){return t===G},n.isWeakMap=function(t){return no(t)&&rs(t)==Gt},n.isWeakSet=function(t){return no(t)&&Ln(t)==Vt},n.join=function(t,e){return null==t?"":wa.call(t,e)},n.kebabCase=ku,n.last=Li,n.lastIndexOf=function(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var i=r
return n!==G&&(i=(i=lo(n))<0?_a(r+i,0):ka(i,r-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r
return r}(t,e,i):w(t,k,i,!0)},n.lowerCase=Su,n.lowerFirst=Cu,n.lt=iu,n.lte=ou,n.max=function(t){return t&&t.length?dn(t,Co,Rn):G},n.maxBy=function(t,e){return t&&t.length?dn(t,si(e,2),Rn):G},n.mean=function(t){return S(t,Co)},n.meanBy=function(t,e){return S(t,si(e,2))},n.min=function(t){return t&&t.length?dn(t,Co,qn):G},n.minBy=function(t,e){return t&&t.length?dn(t,si(e,2),qn):G},n.stubArray=To,n.stubFalse=Oo,n.stubObject=function(){return{}},n.stubString=function(){return""},n.stubTrue=function(){return!0},n.multiply=Hu,n.nth=function(t,e){return t&&t.length?Jn(t,lo(e)):G},n.noConflict=function(){return hn._===this&&(hn._=Qo),this},n.noop=Eo,n.now=zs,n.pad=function(t,e,n){t=po(t)
var r=(e=lo(e))?W(t):0
if(!e||r>=e)return t
var i=(e-r)/2
return Hr(ya(i),n)+t+Hr(ga(i),n)},n.padEnd=function(t,e,n){t=po(t)
var r=(e=lo(e))?W(t):0
return e&&r<e?t+Hr(e-r,n):t},n.padStart=function(t,e,n){t=po(t)
var r=(e=lo(e))?W(t):0
return e&&r<e?Hr(e-r,n)+t:t},n.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),Ca(po(t).replace(me,""),e||0)},n.random=function(t,e,n){if(n&&"boolean"!=typeof n&&gi(t,e,n)&&(e=n=G),n===G&&("boolean"==typeof e?(n=e,e=G):"boolean"==typeof t&&(n=t,t=G)),t===G&&e===G?(t=0,e=1):(t=uo(t),e===G?(e=t,t=0):e=uo(e)),t>e){var r=t
t=e,e=r}if(n||t%1||e%1){var i=Aa()
return ka(t+i*(e-t+un("1e-"+((i+"").length-1))),e)}return nr(t,e)},n.reduce=function(t,e,n){var r=Ks(t)?y:P,i=arguments.length<3
return r(t,si(e,4),n,i,Ha)},n.reduceRight=function(t,e,n){var r=Ks(t)?v:P,i=arguments.length<3
return r(t,si(e,4),n,i,qa)},n.repeat=function(t,e,n){return e=(n?gi(t,e,n):e===G)?1:lo(e),rr(po(t),e)},n.replace=function(){var t=arguments,e=po(t[0])
return t.length<3?e:e.replace(t[1],t[2])},n.result=function(t,e,n){var r=-1,i=(e=_r(e,t)).length
for(i||(i=1,t=G);++r<i;){var o=null==t?G:t[Ai(e[r])]
o===G&&(r=i,o=n),t=Qi(o)?o.call(t):o}return t},n.round=qu,n.runInContext=t,n.sample=function(t){return(Ks(t)?je:function(t){return je(wo(t))})(t)},n.size=function(t){if(null==t)return 0
if(Xi(t))return oo(t)?W(t):t.length
var e=rs(t)
return e==Lt||e==Nt?t.size:Vn(t).length},n.snakeCase=Au,n.some=function(t,e,n){var r=Ks(t)?b:sr
return n&&gi(t,e,n)&&(e=G),r(t,si(e,3))},n.sortedIndex=function(t,e){return ur(t,e)},n.sortedIndexBy=function(t,e,n){return lr(t,e,si(n,2))},n.sortedIndexOf=function(t,e){var n=null==t?0:t.length
if(n){var r=ur(t,e)
if(r<n&&Yi(t[r],e))return r}return-1},n.sortedLastIndex=function(t,e){return ur(t,e,!0)},n.sortedLastIndexBy=function(t,e,n){return lr(t,e,si(n,2),!0)},n.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=ur(t,e,!0)-1
if(Yi(t[n],e))return n}return-1},n.startCase=Pu,n.startsWith=function(t,e,n){return t=po(t),n=null==n?0:Qe(lo(n),0,t.length),e=hr(e),t.slice(n,n+e.length)==e},n.subtract=Zu,n.sum=function(t){return t&&t.length?E(t,Co):0},n.sumBy=function(t,e){return t&&t.length?E(t,si(e,2)):0},n.template=function(t,e,r){var i=n.templateSettings
r&&gi(t,e,r)&&(e=G),t=po(t),e=uu({},e,i,Qr)
var o,a,s=uu({},e.imports,i.imports,Qr),u=vo(s),l=O(s,u),c=0,f=e.interpolate||Re,h="__p += '",p=No((e.escape||Re).source+"|"+f.source+"|"+(f===fe?Ae:Re).source+"|"+(e.evaluate||Re).source+"|$","g"),d="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++rn+"]")+"\n"
t.replace(p,function(e,n,r,i,s,u){return r||(r=i),h+=t.slice(c,u).replace(Me,M),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+e.length,e}),h+="';\n"
var g=e.variable
g||(h="with (obj) {\n"+h+"\n}\n"),h=(a?h.replace(ne,""):h).replace(re,"$1").replace(ie,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}"
var y=Tu(function(){return Fo(u,d+"return "+h).apply(G,l)})
if(y.source=h,Ji(y))throw y
return y},n.times=function(t,e){if((t=lo(t))<1||t>vt)return[]
var n=wt,r=ka(t,wt)
e=si(e),t-=wt
for(var i=I(r,e);++n<t;)e(n)
return i},n.toFinite=uo,n.toInteger=lo,n.toLength=co,n.toLower=function(t){return po(t).toLowerCase()},n.toNumber=fo,n.toSafeInteger=function(t){return t?Qe(lo(t),-vt,vt):0===t?t:0},n.toString=po,n.toUpper=function(t){return po(t).toUpperCase()},n.trim=function(t,e,n){if((t=po(t))&&(n||e===G))return t.replace(be,"")
if(!t||!(e=hr(e)))return t
var r=j(t),i=j(e)
return kr(r,L(r,i),R(r,i)+1).join("")},n.trimEnd=function(t,e,n){if((t=po(t))&&(n||e===G))return t.replace(we,"")
if(!t||!(e=hr(e)))return t
var r=j(t)
return kr(r,0,R(r,j(e))+1).join("")},n.trimStart=function(t,e,n){if((t=po(t))&&(n||e===G))return t.replace(me,"")
if(!t||!(e=hr(e)))return t
var r=j(t)
return kr(r,L(r,j(e))).join("")},n.truncate=function(t,e){var n=ct,r=ft
if(eo(e)){var i="separator"in e?e.separator:i
n="length"in e?lo(e.length):n,r="omission"in e?hr(e.omission):r}var o=(t=po(t)).length
if(F(t)){var a=j(t)
o=a.length}if(n>=o)return t
var s=n-W(r)
if(s<1)return r
var u=a?kr(a,0,s).join(""):t.slice(0,s)
if(i===G)return u+r
if(a&&(s+=u.length-s),eu(i)){if(t.slice(s).search(i)){var l,c=u
for(i.global||(i=No(i.source,po(Pe.exec(i))+"g")),i.lastIndex=0;l=i.exec(c);)var f=l.index
u=u.slice(0,f===G?s:f)}}else if(t.indexOf(hr(i),s)!=s){var h=u.lastIndexOf(i)
h>-1&&(u=u.slice(0,h))}return u+r},n.unescape=function(t){return(t=po(t))&&se.test(t)?t.replace(oe,Pn):t},n.uniqueId=function(t){var e=++Yo
return po(t)+e},n.upperCase=Eu,n.upperFirst=Iu,n.each=Ui,n.eachRight=Wi,n.first=Bi,Po(n,(js={},Sn(n,function(t,e){Zo.call(n.prototype,e)||(js[e]=t)}),js),{chain:!1}),n.VERSION="4.17.4",l(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){n[t].placeholder=n}),l(["drop","take"],function(t,e){A.prototype[t]=function(n){n=n===G?1:_a(lo(n),0)
var r=this.__filtered__&&!e?new A(this):this.clone()
return r.__filtered__?r.__takeCount__=ka(n,r.__takeCount__):r.__views__.push({size:ka(n,wt),type:t+(r.__dir__<0?"Right":"")}),r},A.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),l(["filter","map","takeWhile"],function(t,e){var n=e+1,r=n==dt||3==n
A.prototype[t]=function(t){var e=this.clone()
return e.__iteratees__.push({iteratee:si(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),l(["head","last"],function(t,e){var n="take"+(e?"Right":"")
A.prototype[t]=function(){return this[n](1).value()[0]}}),l(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right")
A.prototype[t]=function(){return this.__filtered__?new A(this):this[n](1)}}),A.prototype.compact=function(){return this.filter(Co)},A.prototype.find=function(t){return this.filter(t).head()},A.prototype.findLast=function(t){return this.reverse().find(t)},A.prototype.invokeMap=ir(function(t,e){return"function"==typeof t?new A(this):this.map(function(n){return Dn(n,t,e)})}),A.prototype.reject=function(t){return this.filter(Zi(si(t)))},A.prototype.slice=function(t,e){t=lo(t)
var n=this
return n.__filtered__&&(t>0||e<0)?new A(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==G&&(n=(e=lo(e))<0?n.dropRight(-e):n.take(e-t)),n)},A.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},A.prototype.toArray=function(){return this.take(wt)},Sn(A.prototype,function(t,e){var r=/^(?:filter|find|map|reject)|While$/.test(e),o=/^(?:head|last)$/.test(e),a=n[o?"take"+("last"==e?"Right":""):e],s=o||/^find/.test(e)
a&&(n.prototype[e]=function(){var e=this.__wrapped__,u=o?[1]:arguments,l=e instanceof A,c=u[0],f=l||Ks(e),h=function(t){var e=a.apply(n,g([t],u))
return o&&p?e[0]:e}
f&&r&&"function"==typeof c&&1!=c.length&&(l=f=!1)
var p=this.__chain__,d=!!this.__actions__.length,y=s&&!p,v=l&&!d
if(!s&&f){e=v?e:new A(this)
var b=t.apply(e,u)
return b.__actions__.push({func:Ni,args:[h],thisArg:G}),new i(b,p)}return y&&v?t.apply(this,u):(b=this.thru(h),y?o?b.value()[0]:b.value():b)})}),l(["pop","push","shift","sort","splice","unshift"],function(t){var e=jo[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t)
n.prototype[t]=function(){var t=arguments
if(i&&!this.__chain__){var n=this.value()
return e.apply(Ks(n)?n:[],t)}return this[r](function(n){return e.apply(Ks(n)?n:[],t)})}}),Sn(A.prototype,function(t,e){var r=n[e]
if(r){var i=r.name+"";(Ma[i]||(Ma[i]=[])).push({name:e,func:r})}}),Ma[Wr(G,et).name]=[{name:"wrapper",func:G}],A.prototype.clone=function(){var t=new A(this.__wrapped__)
return t.__actions__=Tr(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Tr(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Tr(this.__views__),t},A.prototype.reverse=function(){if(this.__filtered__){var t=new A(this)
t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1
return t},A.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=Ks(t),r=e<0,i=n?t.length:0,o=function(t,e,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size
switch(o.type){case"drop":t+=a
break
case"dropRight":e-=a
break
case"take":e=ka(e,t+a)
break
case"takeRight":t=_a(t,e-a)}}return{start:t,end:e}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,l=r?s:a-1,c=this.__iteratees__,f=c.length,h=0,p=ka(u,this.__takeCount__)
if(!n||!r&&i==u&&p==u)return vr(t,this.__actions__)
var d=[]
t:for(;u--&&h<p;){for(var g=-1,y=t[l+=e];++g<f;){var v=c[g],b=v.iteratee,m=v.type,w=b(y)
if(m==gt)y=w
else if(!w){if(m==dt)continue t
break t}}d[h++]=y}return d},n.prototype.at=Es,n.prototype.chain=function(){return Di(this)},n.prototype.commit=function(){return new i(this.value(),this.__chain__)},n.prototype.next=function(){this.__values__===G&&(this.__values__=so(this.value()))
var t=this.__index__>=this.__values__.length
return{done:t,value:t?G:this.__values__[this.__index__++]}},n.prototype.plant=function(t){for(var e,n=this;n instanceof r;){var i=Ei(n)
i.__index__=0,i.__values__=G,e?o.__wrapped__=i:e=i
var o=i
n=n.__wrapped__}return o.__wrapped__=t,e},n.prototype.reverse=function(){var t=this.__wrapped__
if(t instanceof A){var e=t
return this.__actions__.length&&(e=new A(this)),(e=e.reverse()).__actions__.push({func:Ni,args:[Mi],thisArg:G}),new i(e,this.__chain__)}return this.thru(Mi)},n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=function(){return vr(this.__wrapped__,this.__actions__)},n.prototype.first=n.prototype.head,la&&(n.prototype[la]=function(){return this}),n}()
hn._=En,(r=function(){return En}.call(e,n,e,i))!==G&&(i.exports=r)}).call(this)}).call(e,function(){return this}(),n(8)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){"use strict"
function r(t,e){this.fonts={},this.pdfKitDoc=e,this.fontCache={}
for(var n in t)if(t.hasOwnProperty(n)){var r=t[n]
this.fonts[n]={normal:r.normal,bold:r.bold,italics:r.italics,bolditalics:r.bolditalics}}}n(7).noConflict(),r.prototype.provideFont=function(t,e,n){var r,i,o,a=(i=n,o="normal",(r=e)&&i?o="bolditalics":r?o="bold":i&&(o="italics"),o)
if(!this.fonts[t]||!this.fonts[t][a])throw new Error("Font '"+t+"' in style '"+a+"' is not defined in the font section of the document definition.")
if(this.fontCache[t]=this.fontCache[t]||{},!this.fontCache[t][a]){var s=this.fonts[t][a]
Array.isArray(s)||(s=[s]),this.fontCache[t][a]=this.pdfKitDoc.font.apply(this.pdfKitDoc,s)._font}return this.fontCache[t][a]},t.exports=r},function(t,e,n){"use strict"
function r(t,e){o.each(e,function(e){t.push(e)})}function i(t,e,n){this.pageSize=t,this.pageMargins=e,this.tracker=new a,this.imageMeasure=n,this.tableLayouts={}}var o=n(7),a=n(11),s=n(12),u=n(14),l=n(25),c=n(26),f=n(23),h=n(29),p=n(28),d=n(13).pack,g=n(13).offsetVector,y=n(13).fontStringify,v=n(13).isFunction,b=n(15),m=n(22)
i.prototype.registerTableLayouts=function(t){this.tableLayouts=d(this.tableLayouts,t)},i.prototype.layoutDocument=function(t,e,n,r,i,a,l,c,f,h){this.docPreprocessor=new s,this.docMeasure=new u(e,n,r,this.imageMeasure,this.tableLayouts,c)
for(var p=this.tryLayoutDocument(t,e,n,r,i,a,l,c,f);function(t,e){return!!v(h)&&(t=o.reject(t,function(t){return o.isEmpty(t.positions)}),o.each(t,function(t){var n=o.pick(t,["id","text","ul","ol","table","image","qr","canvas","columns","headlineLevel","style","pageBreak","pageOrientation","width","height"])
n.startPosition=o.first(t.positions),n.pageNumbers=o.chain(t.positions).map("pageNumber").uniq().value(),n.pages=e.length,n.stack=o.isArray(t.stack),t.nodeInfo=n}),o.some(t,function(t,e,n){if("before"!==t.pageBreak&&!t.pageBreakCalculated){t.pageBreakCalculated=!0
var r=o.first(t.nodeInfo.pageNumbers),i=o.chain(n).drop(e+1).filter(function(t){return o.includes(t.nodeInfo.pageNumbers,r)}).value(),a=o.chain(n).drop(e+1).filter(function(t){return o.includes(t.nodeInfo.pageNumbers,r+1)}).value(),s=o.chain(n).take(e).filter(function(t){return o.includes(t.nodeInfo.pageNumbers,r)}).value()
if(h(t.nodeInfo,o.map(i,"nodeInfo"),o.map(a,"nodeInfo"),o.map(s,"nodeInfo")))return t.pageBreak="before",!0}}))}(p.linearNodeList,p.pages);)d=p,o.each(d.linearNodeList,function(t){t.resetXY()}),p=this.tryLayoutDocument(t,e,n,r,i,a,l,c,f)
var d
return p.pages},i.prototype.tryLayoutDocument=function(t,e,n,r,i,o,a,s,u,f){this.linearNodeList=[],t=this.docPreprocessor.preprocessDocument(t),t=this.docMeasure.measureDocument(t),this.writer=new c(new l(this.pageSize,this.pageMargins),this.tracker)
var h=this
return this.writer.context().tracker.startTracking("pageAdded",function(){h.addBackground(i)}),this.addBackground(i),this.processNode(t),this.addHeadersAndFooters(o,a),null!=u&&this.addWatermark(u,e,r),{pages:this.writer.context().pages,linearNodeList:this.linearNodeList}},i.prototype.addBackground=function(t){var e=(v(t)?t:function(){return t})(this.writer.context().page+1)
if(e){var n=this.writer.context().getCurrentPage().pageSize
this.writer.beginUnbreakableBlock(n.width,n.height),e=this.docPreprocessor.preprocessDocument(e),this.processNode(this.docMeasure.measureDocument(e)),this.writer.commitUnbreakableBlock(0,0)}},i.prototype.addStaticRepeatable=function(t,e){this.addDynamicRepeatable(function(){return JSON.parse(JSON.stringify(t))},e)},i.prototype.addDynamicRepeatable=function(t,e){for(var n=0,r=this.writer.context().pages.length;n<r;n++){this.writer.context().page=n
var i=t(n+1,r,this.writer.context().pages[n].pageSize)
if(i){var o=e(this.writer.context().getCurrentPage().pageSize,this.pageMargins)
this.writer.beginUnbreakableBlock(o.width,o.height),i=this.docPreprocessor.preprocessDocument(i),this.processNode(this.docMeasure.measureDocument(i)),this.writer.commitUnbreakableBlock(o.x,o.y)}}},i.prototype.addHeadersAndFooters=function(t,e){var n=function(t,e){return{x:0,y:0,width:t.width,height:e.top}},r=function(t,e){return{x:0,y:t.height-e.bottom,width:t.width,height:e.bottom}}
v(t)?this.addDynamicRepeatable(t,n):t&&this.addStaticRepeatable(t,n),v(e)?this.addDynamicRepeatable(e,r):e&&this.addStaticRepeatable(e,r)},i.prototype.addWatermark=function(t,e,n){if("string"==typeof t&&(t={text:t}),t.text){t.font=t.font||n.font||"Roboto",t.color=t.color||"black",t.opacity=t.opacity||.6,t.bold=t.bold||!1,t.italics=t.italics||!1
for(var r={text:t.text,font:e.provideFont(t.font,t.bold,t.italics),size:function(t,e,n){for(var r,i=t.width,o=t.height,a=.8*Math.sqrt(i*i+o*o),s=new b(n),u=new m(null,{font:e.font,bold:e.bold,italics:e.italics}),l=0,c=1e3,f=(l+c)/2;Math.abs(l-c)>1;)u.push({fontSize:f}),r=s.sizeOfString(e.text,u),r.width>a?(c=f,f=(l+c)/2):r.width<a&&(l=f,f=(l+c)/2),u.pop()
return{size:r,fontSize:f}}(this.pageSize,t,e),color:t.color,opacity:t.opacity},i=this.writer.context().pages,o=0,a=i.length;o<a;o++)i[o].watermark=r}},i.prototype.processNode=function(t){var e,n,r,i,a=this
this.linearNodeList.push(t),r=(n=t).x,i=n.y,n.positions=[],o.each(n.canvas,function(t){var e=t.x,n=t.y,r=t.x1,i=t.y1,o=t.x2,a=t.y2
t.resetXY=function(){t.x=e,t.y=n,t.x1=r,t.y1=i,t.x2=o,t.y2=a}}),n.resetXY=function(){n.x=r,n.y=i,o.each(n.canvas,function(t){t.resetXY()})},e=t._margin,"before"===t.pageBreak&&a.writer.moveToNextPage(t.pageOrientation),e&&(a.writer.context().moveDown(e[1]),a.writer.context().addMargin(e[0],e[2])),function(){var e=t.absolutePosition
e&&(a.writer.context().beginDetachedBlock(),a.writer.context().moveTo(e.x||0,e.y||0))
var n=t.relativePosition
if(n&&(a.writer.context().beginDetachedBlock(),a.writer.context().moveTo((n.x||0)+a.writer.context().x,(n.y||0)+a.writer.context().y)),t.stack)a.processVerticalContainer(t)
else if(t.columns)a.processColumns(t)
else if(t.ul)a.processList(!1,t)
else if(t.ol)a.processList(!0,t)
else if(t.table)a.processTable(t)
else if(void 0!==t.text)a.processLeaf(t)
else if(t.toc)a.processToc(t)
else if(t.image)a.processImage(t)
else if(t.canvas)a.processCanvas(t)
else if(t.qr)a.processQr(t)
else if(!t._span)throw"Unrecognized document structure: "+JSON.stringify(t,y);(e||n)&&a.writer.context().endDetachedBlock()}(),e&&(a.writer.context().addMargin(-e[0],-e[2]),a.writer.context().moveDown(e[3])),"after"===t.pageBreak&&a.writer.moveToNextPage(t.pageOrientation)},i.prototype.processVerticalContainer=function(t){var e=this
t.stack.forEach(function(n){e.processNode(n),r(t.positions,n.positions)})},i.prototype.processColumns=function(t){var e=t.columns,n=this.writer.context().availableWidth,i=function(t){if(!t)return null
var n=[]
n.push(0)
for(var r=e.length-1;r>0;r--)n.push(t)
return n}(t._gap)
i&&(n-=(i.length-1)*t._gap),f.buildColumnWidths(e,n)
var o=this.processRow(e,e,i)
r(t.positions,o.positions)},i.prototype.processRow=function(t,e,n,i,o){function a(t,e){if(t.rowSpan&&t.rowSpan>1){var n=o+t.rowSpan-1
if(n>=i.length)throw"Row span for column "+e+" (with indexes starting from 0) exceeded row count"
return i[n][e]}return null}var s=this,u=[],l=[]
return this.tracker.auto("pageChanged",function(t){for(var e,n=0,r=u.length;n<r;n++){var i=u[n]
if(i.prevPage===t.prevPage){e=i
break}}e||(e=t,u.push(e)),e.prevY=Math.max(e.prevY,t.prevY),e.y=Math.min(e.y,t.y)},function(){e=e||t,s.writer.context().beginColumnGroup()
for(var i=0,o=t.length;i<o;i++){var u=t[i],c=e[i]._calcWidth,f=(p=i,n&&n.length>p?n[p]:0)
if(u.colSpan&&u.colSpan>1)for(var h=1;h<u.colSpan;h++)c+=e[++i]._calcWidth+n[i]
s.writer.context().beginColumn(c,f,a(u,i)),u._span?u._columnEndingContext&&s.writer.context().markEnding(u):(s.processNode(u),r(l,u.positions))}var p
s.writer.context().completeColumnGroup()}),{pageBreaks:u,positions:l}},i.prototype.processList=function(t,e){var n,i=this,o=t?e.ol:e.ul,a=e._gapSize
this.writer.context().addMargin(a.width),this.tracker.auto("lineAdded",function(t){if(n){var e=n
if(n=null,e.canvas){var r=e.canvas[0]
g(r,-e._minWidth,0),i.writer.addVector(r)}else if(e._inlines){var o=new p(i.pageSize.width)
o.addInline(e._inlines[0]),o.x=-e._minWidth,o.y=t.getAscenderHeight()-o.getAscenderHeight(),i.writer.addLine(o,!0)}}},function(){o.forEach(function(t){n=t.listMarker,i.processNode(t),r(e.positions,t.positions)})}),this.writer.context().addMargin(-a.width)},i.prototype.processTable=function(t){var e=new h(t)
e.beginTable(this.writer)
for(var n=0,i=t.table.body.length;n<i;n++){e.beginRow(n,this.writer)
var o=this.processRow(t.table.body[n],t.table.widths,t._offsets.offsets,t.table.body,n)
r(t.positions,o.positions),e.endRow(n,this.writer,o.pageBreaks)}e.endTable(this.writer)},i.prototype.processLeaf=function(t){var e=this.buildNextLine(t),n=e?e.getHeight():0,r=t.maxHeight||-1
for(t._tocItemRef&&(e._tocItemNode=t._tocItemRef);e&&(-1===r||n<r);){var i=this.writer.addLine(e)
t.positions.push(i),(e=this.buildNextLine(t))&&(n+=e.getHeight())}},i.prototype.processToc=function(t){t.toc.title&&this.processNode(t.toc.title),this.processNode(t.toc._table)},i.prototype.buildNextLine=function(t){if(!t._inlines||0===t._inlines.length)return null
for(var e=new p(this.writer.context().availableWidth),n=new b(null);t._inlines&&t._inlines.length>0&&e.hasEnoughSpaceForInline(t._inlines[0]);){var r=t._inlines.shift()
if(!r.noWrap&&r.text.length>1&&r.width>e.maxWidth){var i=r.width/r.text.length,o=Math.floor(e.maxWidth/i)
if(o<1&&(o=1),o<r.text.length){var a=function(t){var e=t.constructor()
for(var n in t)e[n]=t[n]
return e}(r)
a.text=r.text.substr(o),r.text=r.text.substr(0,o),a.width=n.widthOfString(a.text,a.font,a.fontSize,a.characterSpacing),r.width=n.widthOfString(r.text,r.font,r.fontSize,r.characterSpacing),t._inlines.unshift(a)}}e.addInline(r)}return e.lastLineInParagraph=0===t._inlines.length,e},i.prototype.processImage=function(t){var e=this.writer.addImage(t)
t.positions.push(e)},i.prototype.processCanvas=function(t){var e=t._minHeight
this.writer.context().availableHeight<e&&this.writer.moveToNextPage(),t.canvas.forEach(function(e){var n=this.writer.addVector(e)
t.positions.push(n)},this),this.writer.context().moveDown(e)},i.prototype.processQr=function(t){var e=this.writer.addQr(t)
t.positions.push(e)},t.exports=i},function(t,e){"use strict"
function n(){this.events={}}n.prototype.startTracking=function(t,e){var n=this.events[t]||(this.events[t]=[])
n.indexOf(e)<0&&n.push(e)},n.prototype.stopTracking=function(t,e){var n=this.events[t]
if(n){var r=n.indexOf(e)
r>=0&&n.splice(r,1)}},n.prototype.emit=function(t){var e=Array.prototype.slice.call(arguments,1),n=this.events[t]
n&&n.forEach(function(t){t.apply(this,e)})},n.prototype.auto=function(t,e,n){this.startTracking(t,e),n(),this.stopTracking(t,e)},t.exports=n},function(t,e,n){"use strict"
function r(){}var i=n(13).fontStringify
r.prototype.preprocessDocument=function(t){return this.tocs=[],this.preprocessNode(t)},r.prototype.preprocessNode=function(t){if(Array.isArray(t)?t={stack:t}:"string"==typeof t||t instanceof String?t={text:t}:"number"==typeof t||"boolean"==typeof t?t={text:t.toString()}:null===t?t={text:""}:0===Object.keys(t).length&&(t={text:""}),t.columns)return this.preprocessColumns(t)
if(t.stack)return this.preprocessVerticalContainer(t)
if(t.ul)return this.preprocessList(t)
if(t.ol)return this.preprocessList(t)
if(t.table)return this.preprocessTable(t)
if(void 0!==t.text)return this.preprocessText(t)
if(t.toc)return this.preprocessToc(t)
if(t.image)return this.preprocessImage(t)
if(t.canvas)return this.preprocessCanvas(t)
if(t.qr)return this.preprocessQr(t)
throw"Unrecognized document structure: "+JSON.stringify(t,i)},r.prototype.preprocessColumns=function(t){for(var e=t.columns,n=0,r=e.length;n<r;n++)e[n]=this.preprocessNode(e[n])
return t},r.prototype.preprocessVerticalContainer=function(t){for(var e=t.stack,n=0,r=e.length;n<r;n++)e[n]=this.preprocessNode(e[n])
return t},r.prototype.preprocessList=function(t){for(var e=t.ul||t.ol,n=0,r=e.length;n<r;n++)e[n]=this.preprocessNode(e[n])
return t},r.prototype.preprocessTable=function(t){var e,n,r,i
for(e=0,r=t.table.body[0].length;e<r;e++)for(n=0,i=t.table.body.length;n<i;n++){var o=t.table.body[n],a=o[e]
if(void 0===a)throw"Malformed table row, a cell is undefined."
null===a&&(a=""),o[e]=this.preprocessNode(a)}return t},r.prototype.preprocessText=function(t){if(t.tocItem){Array.isArray(t.tocItem)||(t.tocItem=[t.tocItem])
for(var e=0,n=t.tocItem.length;e<n;e++){"string"==typeof t.tocItem[e]||t.tocItem[e]instanceof String||(t.tocItem[e]="_default_")
var r=t.tocItem[e]
this.tocs[r]||(this.tocs[r]={toc:{_items:[],_pseudo:!0}}),this.tocs[r].toc._items.push(t)}}return t},r.prototype.preprocessToc=function(t){if(t.toc.id||(t.toc.id="_default_"),t.toc.title=t.toc.title?this.preprocessNode(t.toc.title):null,t.toc._items=[],this.tocs[t.toc.id]){if(!this.tocs[t.toc.id].toc._pseudo)throw"TOC '"+t.toc.id+"' already exists"
t.toc._items=this.tocs[t.toc.id].toc._items}return this.tocs[t.toc.id]=t,t},r.prototype.preprocessImage=function(t){return t},r.prototype.preprocessCanvas=function(t){return t},r.prototype.preprocessQr=function(t){return t},t.exports=r},function(t,e){"use strict"
t.exports={pack:function(){for(var t={},e=0,n=arguments.length;e<n;e++){var r=arguments[e]
if(r)for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}return t},fontStringify:function(t,e){return"font"===t?"font":e},offsetVector:function(t,e,n){switch(t.type){case"ellipse":case"rect":t.x+=e,t.y+=n
break
case"line":t.x1+=e,t.x2+=e,t.y1+=n,t.y2+=n
break
case"polyline":for(var r=0,i=t.points.length;r<i;r++)t.points[r].x+=e,t.points[r].y+=n}},isFunction:function(t){return t&&"[object Function]"==={}.toString.call(t)}}},function(t,e,n){"use strict"
function r(t,e,n,r,a,s){this.textTools=new i(t),this.styleStack=new o(e,n),this.imageMeasure=r,this.tableLayouts=a,this.images=s,this.autoImageIndex=1}var i=n(15),o=n(22),a=n(23),s=n(13).fontStringify,u=n(13).pack,l=n(24)
r.prototype.measureDocument=function(t){return this.measureNode(t)},r.prototype.measureNode=function(t){function e(t){var e=t._margin
return e&&(t._minWidth+=e[0]+e[2],t._maxWidth+=e[0]+e[2]),t}var n=this
return this.styleStack.auto(t,function(){if(t._margin=function(){function e(t,e){return t.marginLeft||t.marginTop||t.marginRight||t.marginBottom?[t.marginLeft||e[0]||0,t.marginTop||e[1]||0,t.marginRight||e[2]||0,t.marginBottom||e[3]||0]:e}function r(t){return"number"==typeof t||t instanceof Number?t=[t,t,t,t]:Array.isArray(t)&&2===t.length&&(t=[t[0],t[1],t[0],t[1]]),t}var i=[void 0,void 0,void 0,void 0]
if(t.style){var o=function(t){for(var e={},r=t.length-1;r>=0;r--){var i=t[r],o=n.styleStack.styleDictionary[i]
for(var a in o)o.hasOwnProperty(a)&&(e[a]=o[a])}return e}(Array.isArray(t.style)?t.style:[t.style])
o&&(i=e(o,i)),o.margin&&(i=r(o.margin))}return i=e(t,i),t.margin&&(i=r(t.margin)),void 0===i[0]&&void 0===i[1]&&void 0===i[2]&&void 0===i[3]?null:i}(),t.columns)return e(n.measureColumns(t))
if(t.stack)return e(n.measureVerticalContainer(t))
if(t.ul)return e(n.measureUnorderedList(t))
if(t.ol)return e(n.measureOrderedList(t))
if(t.table)return e(n.measureTable(t))
if(void 0!==t.text)return e(n.measureLeaf(t))
if(t.toc)return e(n.measureToc(t))
if(t.image)return e(n.measureImage(t))
if(t.canvas)return e(n.measureCanvas(t))
if(t.qr)return e(n.measureQr(t))
throw"Unrecognized document structure: "+JSON.stringify(t,s)})},r.prototype.convertIfBase64Image=function(t){if(/^data:image\/(jpeg|jpg|png);base64,/.test(t.image)){var e="$$pdfmake$$"+this.autoImageIndex++
this.images[e]=t.image,t.image=e}},r.prototype.measureImage=function(t){this.images&&this.convertIfBase64Image(t)
var e=this.imageMeasure.measureImage(t.image)
if(t.fit){var n=e.width/e.height>t.fit[0]/t.fit[1]?t.fit[0]/e.width:t.fit[1]/e.height
t._width=t._minWidth=t._maxWidth=e.width*n,t._height=e.height*n}else t._width=t._minWidth=t._maxWidth=t.width||e.width,t._height=t.height||e.height*t._width/e.width,"number"==typeof t.maxWidth&&t.maxWidth<t._width&&(t._width=t._minWidth=t._maxWidth=t.maxWidth,t._height=t._width*e.height/e.width),"number"==typeof t.maxHeight&&t.maxHeight<t._height&&(t._height=t.maxHeight,t._width=t._minWidth=t._maxWidth=t._height*e.width/e.height),"number"==typeof t.minWidth&&t.minWidth>t._width&&(t._width=t._minWidth=t._maxWidth=t.minWidth,t._height=t._width*e.height/e.width),"number"==typeof t.minHeight&&t.minHeight>t._height&&(t._height=t.minHeight,t._width=t._minWidth=t._maxWidth=t._height*e.width/e.height)
return t._alignment=this.styleStack.getProperty("alignment"),t},r.prototype.measureLeaf=function(t){var e=this.styleStack.clone()
e.push(t)
var n=this.textTools.buildInlines(t.text,e)
return t._inlines=n.items,t._minWidth=n.minWidth,t._maxWidth=n.maxWidth,t},r.prototype.measureToc=function(t){t.toc.title&&(t.toc.title=this.measureNode(t.toc.title))
for(var e=[],n=0,r=t.toc._items.length;n<r;n++){var i=t.toc._items[n]
e.push([{text:i.text,alignment:"left"},{text:"00000",alignment:"right",_tocItemRef:i}])}return t.toc._table={table:{dontBreakRows:!0,widths:["*","auto"],body:e},layout:"noBorders"},t.toc._table=this.measureNode(t.toc._table),t},r.prototype.measureVerticalContainer=function(t){var e=t.stack
t._minWidth=0,t._maxWidth=0
for(var n=0,r=e.length;n<r;n++)e[n]=this.measureNode(e[n]),t._minWidth=Math.max(t._minWidth,e[n]._minWidth),t._maxWidth=Math.max(t._maxWidth,e[n]._maxWidth)
return t},r.prototype.gapSizeForList=function(){return this.textTools.sizeOfString("9. ",this.styleStack)},r.prototype.buildUnorderedMarker=function(t,e,n){var r,i,o,a,s,u,l,c,f,h,p=t.getProperty("markerColor")||t.getProperty("color")||"black"
switch(n){case"circle":f=p,r={canvas:[{x:h=(c=e).fontSize/6,y:c.height/c.lineHeight+c.descender-c.fontSize/3,r1:h,r2:h,type:"ellipse",lineColor:f}]}
break
case"square":u=p,l=(s=e).fontSize/3,r={canvas:[{x:0,y:s.height/s.lineHeight+s.descender-s.fontSize/3-l/2,h:l,w:l,type:"rect",color:u}]}
break
case"none":r={}
break
case"disc":default:o=p,r={canvas:[{x:a=(i=e).fontSize/6,y:i.height/i.lineHeight+i.descender-i.fontSize/3,r1:a,r2:a,type:"ellipse",color:o}]}}return r._minWidth=r._maxWidth=e.width,r._minHeight=r._maxHeight=e.height,r},r.prototype.buildOrderedMarker=function(t,e,n,r){function i(t){return t<1?t.toString():function t(e){return(e>=26?t((e/26>>0)-1):"")+"abcdefghijklmnopqrstuvwxyz"[e%26>>0]}(t-1)}function o(t){if(t<1||t>4999)return t.toString()
var e,n=t,r={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},i=""
for(e in r)for(;n>=r[e];)i+=e,n-=r[e]
return i}var a
switch(n){case"none":a=null
break
case"upper-alpha":a=i(t).toUpperCase()
break
case"lower-alpha":a=i(t)
break
case"upper-roman":a=o(t)
break
case"lower-roman":a=o(t).toLowerCase()
break
case"decimal":default:a=t.toString()}if(null===a)return{}
r&&(Array.isArray(r)?(r[0]&&(a=r[0]+a),r[1]&&(a+=r[1]),a+=" "):a+=r+" ")
var s={text:a},u=e.getProperty("markerColor")
return u&&(s.color=u),{_inlines:this.textTools.buildInlines(s,e).items}},r.prototype.measureUnorderedList=function(t){var e=this.styleStack.clone(),n=t.ul
t.type=t.type||"disc",t._gapSize=this.gapSizeForList(),t._minWidth=0,t._maxWidth=0
for(var r=0,i=n.length;r<i;r++){var o=n[r]=this.measureNode(n[r])
o.ol||o.ul||(o.listMarker=this.buildUnorderedMarker(e,t._gapSize,t.type)),t._minWidth=Math.max(t._minWidth,n[r]._minWidth+t._gapSize.width),t._maxWidth=Math.max(t._maxWidth,n[r]._maxWidth+t._gapSize.width)}return t},r.prototype.measureOrderedList=function(t){var e=this.styleStack.clone(),n=t.ol
t.type=t.type||"decimal",t.separator=t.separator||".",t.reversed=t.reversed||!1,t.start||(t.start=t.reversed?n.length:1),t._gapSize=this.gapSizeForList(),t._minWidth=0,t._maxWidth=0
for(var r=t.start,i=0,o=n.length;i<o;i++){(a=n[i]=this.measureNode(n[i])).ol||a.ul||(a.listMarker=this.buildOrderedMarker(a.counter||r,e,t.type,t.separator),a.listMarker._inlines&&(t._gapSize.width=Math.max(t._gapSize.width,a.listMarker._inlines[0].width))),t._minWidth=Math.max(t._minWidth,n[i]._minWidth),t._maxWidth=Math.max(t._maxWidth,n[i]._maxWidth),t.reversed?r--:r++}t._minWidth+=t._gapSize.width,t._maxWidth+=t._gapSize.width
for(i=0,o=n.length;i<o;i++){var a;(a=n[i]).ol||a.ul||(a.listMarker._minWidth=a.listMarker._maxWidth=t._gapSize.width)}return t},r.prototype.measureColumns=function(t){var e=t.columns
t._gap=this.styleStack.getProperty("columnGap")||0
for(var n=0,r=e.length;n<r;n++)e[n]=this.measureNode(e[n])
var i=a.measureMinMax(e)
return t._minWidth=i.min+t._gap*(e.length-1),t._maxWidth=i.max+t._gap*(e.length-1),t},r.prototype.measureTable=function(t){function e(e,n,r){for(var i={minWidth:0,maxWidth:0},o=0;o<n;o++)i.minWidth+=t.table.widths[e+o]._minWidth+(o?r.offsets[e+o]:0),i.maxWidth+=t.table.widths[e+o]._maxWidth+(o?r.offsets[e+o]:0)
return i}var n,r
!function(t){if(t.table.widths||(t.table.widths="auto"),"string"==typeof t.table.widths||t.table.widths instanceof String)for(t.table.widths=[t.table.widths];t.table.widths.length<t.table.body[0].length;)t.table.widths.push(t.table.widths[t.table.widths.length-1])
for(var e=0,n=t.table.widths.length;e<n;e++){var r=t.table.widths[e];("number"==typeof r||r instanceof Number||"string"==typeof r||r instanceof String)&&(t.table.widths[e]={width:r})}}(t),t._layout=(n=this.tableLayouts,r=t.layout,("string"==typeof t.layout||t instanceof String)&&(r=n[r]),u({hLineWidth:function(t,e){return 1},vLineWidth:function(t,e){return 1},hLineColor:function(t,e){return"black"},vLineColor:function(t,e){return"black"},paddingLeft:function(t,e){return 4},paddingRight:function(t,e){return 4},paddingTop:function(t,e){return 2},paddingBottom:function(t,e){return 2},fillColor:function(t,e){return null},defaultBorder:!0},r)),t._offsets=function(e){for(var n=[],r=0,i=0,o=0,a=t.table.widths.length;o<a;o++){var s=i+e.vLineWidth(o,t)+e.paddingLeft(o,t)
n.push(s),r+=s,i=e.paddingRight(o,t)}return{total:r+=i+e.vLineWidth(t.table.widths.length,t),offsets:n}}(t._layout)
var i,o,s,l,c=[]
for(i=0,s=t.table.body[0].length;i<s;i++){var f=t.table.widths[i]
for(f._minWidth=0,f._maxWidth=0,o=0,l=t.table.body.length;o<l;o++){var h=t.table.body[o],p=h[i]
p._span||((p=h[i]=this.styleStack.auto(p,function(t,e){return function(){return null!==e&&"object"==typeof e&&(e.fillColor=t.styleStack.getProperty("fillColor")),t.measureNode(e)}}(this,p))).colSpan&&p.colSpan>1?(function(t,e,n){for(var r=1;r<n;r++)t[e+r]={_span:!0,_minWidth:0,_maxWidth:0,rowSpan:t[e].rowSpan}}(h,i,p.colSpan),c.push({col:i,span:p.colSpan,minWidth:p._minWidth,maxWidth:p._maxWidth})):(f._minWidth=Math.max(f._minWidth,p._minWidth),f._maxWidth=Math.max(f._maxWidth,p._maxWidth))),p.rowSpan&&p.rowSpan>1&&function(t,e,n,r){for(var i=1;i<r;i++)t.body[e+i][n]={_span:!0,_minWidth:0,_maxWidth:0,fillColor:t.body[e][n].fillColor}}(t.table,o,i,p.rowSpan)}}!function(){for(var n,r,i=0,o=c.length;i<o;i++){var a=c[i],s=e(a.col,a.span,t._offsets),u=a.minWidth-s.minWidth,l=a.maxWidth-s.maxWidth
if(u>0)for(n=u/a.span,r=0;r<a.span;r++)t.table.widths[a.col+r]._minWidth+=n
if(l>0)for(n=l/a.span,r=0;r<a.span;r++)t.table.widths[a.col+r]._maxWidth+=n}}()
var d=a.measureMinMax(t.table.widths)
return t._minWidth=d.min+t._offsets.total,t._maxWidth=d.max+t._offsets.total,t},r.prototype.measureCanvas=function(t){for(var e=0,n=0,r=0,i=t.canvas.length;r<i;r++){var o=t.canvas[r]
switch(o.type){case"ellipse":e=Math.max(e,o.x+o.r1),n=Math.max(n,o.y+o.r2)
break
case"rect":e=Math.max(e,o.x+o.w),n=Math.max(n,o.y+o.h)
break
case"line":e=Math.max(e,o.x1,o.x2),n=Math.max(n,o.y1,o.y2)
break
case"polyline":for(var a=0,s=o.points.length;a<s;a++)e=Math.max(e,o.points[a].x),n=Math.max(n,o.points[a].y)}}return t._minWidth=t._maxWidth=e,t._minHeight=t._maxHeight=n,t},r.prototype.measureQr=function(t){return(t=l.measure(t))._alignment=this.styleStack.getProperty("alignment"),t},t.exports=r},function(t,e,n){"use strict"
function r(t){this.fontProvider=t}function i(t,e){var n=[]
if(t=t.replace("\t","    "),e)return n.push({text:t}),n
for(var r,i=new c(t),o=0;r=i.nextBreak();){var a=t.slice(o,r.position)
r.required||a.match(/\r?\n$|\r$/)?(a=a.replace(/\r?\n$|\r$/,""),n.push({text:a,lineEnd:!0})):n.push({text:a}),o=r.position}return n}function o(t,e){e=e||{},t=t||{}
for(var n in t)"text"!=n&&t.hasOwnProperty(n)&&(e[n]=t[n])
return e}function a(t){return void 0===t||null===t?"":"number"==typeof t?t.toString():"string"==typeof t||t instanceof String?t:t.toString()}function s(t,e,n,r){var i
return void 0!==t[n]&&null!==t[n]?t[n]:e?(e.auto(t,function(){i=e.getProperty(n)}),null!==i&&void 0!==i?i:r):r}function u(t,e,n){var r=function(t,e){var n=[]
Array.isArray(t)||(t=[t])
for(var r=0,u=t.length;r<u;r++){var l,c=t[r],f=null,h=s(c||{},e,"noWrap",!1)
null!==c&&("object"==typeof c||c instanceof Object)?(l=i(a(c.text),h),f=o(c)):l=i(a(c),h)
for(var p=0,d=l.length;p<d;p++){var g={text:l[p].text}
l[p].lineEnd&&(g.lineEnd=!0),o(f,g),n.push(g)}}return n}(e,n)
return r.forEach(function(e){var r=s(e,n,"font","Roboto"),i=s(e,n,"fontSize",12),o=s(e,n,"bold",!1),a=s(e,n,"italics",!1),u=s(e,n,"color","black"),c=s(e,n,"decoration",null),p=s(e,n,"decorationColor",null),d=s(e,n,"decorationStyle",null),g=s(e,n,"background",null),y=s(e,n,"lineHeight",1),v=s(e,n,"characterSpacing",0),b=s(e,n,"link",null),m=s(e,n,"linkToPage",null),w=s(e,n,"noWrap",null),x=t.provideFont(r,o,a)
e.width=l(e.text,x,i,v),e.height=x.lineHeight(i)*y
var _=e.text.match(f),k=e.text.match(h)
e.leadingCut=_?l(_[0],x,i,v):0,e.trailingCut=k?l(k[0],x,i,v):0,e.alignment=s(e,n,"alignment","left"),e.font=x,e.fontSize=i,e.characterSpacing=v,e.color=u,e.decoration=c,e.decorationColor=p,e.decorationStyle=d,e.background=g,e.link=b,e.linkToPage=m,e.noWrap=w}),r}function l(t,e,n,r){return e.widthOfString(t,n)+(r||0)*(t.length-1)}var c=n(16),f=/^(\s)+/g,h=/(\s)+$/g
r.prototype.buildInlines=function(t,e){var n,r=u(this.fontProvider,t,e),i=0,o=0
return r.forEach(function(t){var e
i=Math.max(i,t.width-t.leadingCut-t.trailingCut),n||(n={width:0,leadingCut:t.leadingCut,trailingCut:0}),n.width+=t.width,n.trailingCut=t.trailingCut,o=Math.max(o,(e=n,Math.max(0,e.width-e.leadingCut-e.trailingCut))),t.lineEnd&&(n=null)}),s({},e,"noWrap",!1)&&(i=o),{items:r,minWidth:i,maxWidth:o}},r.prototype.sizeOfString=function(t,e){t=t?t.toString().replace("\t","    "):""
var n=s({},e,"font","Roboto"),r=s({},e,"fontSize",12),i=s({},e,"bold",!1),o=s({},e,"italics",!1),a=s({},e,"lineHeight",1),u=s({},e,"characterSpacing",0),c=this.fontProvider.provideFont(n,i,o)
return{width:l(t,c,r,u),height:c.lineHeight(r)*a,fontSize:r,lineHeight:a,ascender:c.ascender/1e3*r,descender:c.descender/1e3*r}},r.prototype.widthOfString=function(t,e,n,r){return l(t,e,n,r)},t.exports=r},function(t,e,n){(function(){var e,r,i,o,a,s,u,l,c,f,h,p,d,g,y,v,b,m,w,x,_,k,S,C,A,P,E
w=n(17),k=n(19),P=n(20),P.BK,c=P.CR,P.LF,P.NL,a=P.CB,i=P.BA,P.SP,x=P.WJ,m=P.SP,o=P.BK,p=P.LF,g=P.NL,e=P.AI,r=P.AL,v=P.SA,b=P.SG,_=P.XX,u=P.CJ,P.ID,y=P.NS,P.characterClasses,E=n(21),f=E.DI_BRK,h=E.IN_BRK,s=E.CI_BRK,l=E.CP_BRK,E.PR_BRK,A=E.pairTable,C=k.toByteArray("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"),S=new w(C),d=function(){function t(t){this.string=t,this.pos=0,this.lastPos=0,this.curClass=null,this.nextClass=null}var n,d,w
return t.prototype.nextCodePoint=function(){var t,e
return t=this.string.charCodeAt(this.pos++),e=this.string.charCodeAt(this.pos),55296<=t&&t<=56319&&56320<=e&&e<=57343?(this.pos++,1024*(t-55296)+(e-56320)+65536):t},d=function(t){switch(t){case e:return r
case v:case b:case _:return r
case u:return y
default:return t}},w=function(t){switch(t){case p:case g:return o
case a:return i
case m:return x
default:return t}},t.prototype.nextCharClass=function(t){return null==t&&(t=!1),d(S.get(this.nextCodePoint()))},n=function(){return function(t,e){this.position=t,this.required=null!=e&&e}}(),t.prototype.nextBreak=function(){var t,e,r
for(null==this.curClass&&(this.curClass=w(this.nextCharClass()));this.pos<this.string.length;){if(this.lastPos=this.pos,e=this.nextClass,this.nextClass=this.nextCharClass(),this.curClass===o||this.curClass===c&&this.nextClass!==p)return this.curClass=w(d(this.nextClass)),new n(this.lastPos,!0)
if(null==(t=function(){switch(this.nextClass){case m:return this.curClass
case o:case p:case g:return o
case c:return c
case a:return i}}.call(this))){switch(r=!1,A[this.curClass][this.nextClass]){case f:r=!0
break
case h:r=e===m
break
case s:if(!(r=e===m))continue
break
case l:if(e!==m)continue}if(this.curClass=this.nextClass,r)return new n(this.lastPos)}else if(this.curClass=t,this.nextClass===a)return new n(this.lastPos)}if(this.pos>=this.string.length)return this.lastPos<this.string.length?(this.lastPos=this.string.length,new n(this.string.length)):null},t}(),t.exports=d}).call(this)},function(t,e,n){var r,i
i=n(18),r=function(){function t(t){var e,n,r;(e="function"==typeof t.readUInt32BE&&"function"==typeof t.slice)||t instanceof Uint8Array?(e?(this.highStart=t.readUInt32BE(0),this.errorValue=t.readUInt32BE(4),n=t.readUInt32BE(8),t=t.slice(12)):(r=new DataView(t.buffer),this.highStart=r.getUint32(0),this.errorValue=r.getUint32(4),n=r.getUint32(8),t=t.subarray(12)),t=i(t,new Uint8Array(n)),t=i(t,new Uint8Array(n)),this.data=new Uint32Array(t.buffer)):(this.data=t.data,this.highStart=t.highStart,this.errorValue=t.errorValue)}return 11,5,6,32,64,63,2,32,31,2048,32,2080,2080,32,2112,4,t.prototype.get=function(t){var e
return t<0||t>1114111?this.errorValue:t<55296||t>56319&&t<=65535?(e=(this.data[t>>5]<<2)+(31&t),this.data[e]):t<=65535?(e=(this.data[2048+(t-55296>>5)]<<2)+(31&t),this.data[e]):t<this.highStart?(e=this.data[2080+(t>>11)],e=((e=this.data[e+(t>>5&63)])<<2)+(31&t),this.data[e]):this.data[this.data.length-4]},t}(),t.exports=r},function(t,e){function n(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function r(t,e,n,r){var i,o
for(i=0;i<n;++i)t[i]=0
for(i=0;i<30-n;++i)t[i+n]=i/n|0
for(o=r,i=0;i<30;++i)e[i]=o,o+=1<<t[i]}function i(t,e,n,r){var i,o
for(i=0;i<16;++i)t.table[i]=0
for(i=0;i<r;++i)t.table[e[n+i]]++
for(t.table[0]=0,o=0,i=0;i<16;++i)_[i]=o,o+=t.table[i]
for(i=0;i<r;++i)e[n+i]&&(t.trans[_[e[n+i]]++]=i)}function o(t){t.bitcount--||(t.tag=t.source[t.sourceIndex++],t.bitcount=7)
var e=1&t.tag
return t.tag>>>=1,e}function a(t,e,n){if(!e)return n
for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8
var r=t.tag&65535>>>16-e
return t.tag>>>=e,t.bitcount-=e,r+n}function s(t,e){for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8
var n=0,r=0,i=0,o=t.tag
do{r=2*r+(1&o),o>>>=1,++i,n+=e.table[i],r-=e.table[i]}while(r>=0)
return t.tag=o,t.bitcount-=i,e.trans[n+r]}function u(t,e,n){var r,o,u,l,c,f
for(r=a(t,5,257),o=a(t,5,1),u=a(t,4,4),l=0;l<19;++l)x[l]=0
for(l=0;l<u;++l){var h=a(t,3,0)
x[m[l]]=h}for(i(w,x,0,19),c=0;c<r+o;){var p=s(t,w)
switch(p){case 16:var d=x[c-1]
for(f=a(t,2,3);f;--f)x[c++]=d
break
case 17:for(f=a(t,3,3);f;--f)x[c++]=0
break
case 18:for(f=a(t,7,11);f;--f)x[c++]=0
break
default:x[c++]=p}}i(e,x,0,r),i(n,x,r,o)}function l(t,e,n){for(;;){var r,i,o,u,l=s(t,e)
if(256===l)return f
if(l<256)t.dest[t.destLen++]=l
else for(r=a(t,g[l-=257],y[l]),i=s(t,n),u=o=t.destLen-a(t,v[i],b[i]);u<o+r;++u)t.dest[t.destLen++]=t.dest[u]}}function c(t){for(var e,n;t.bitcount>8;)t.sourceIndex--,t.bitcount-=8
if((e=256*(e=t.source[t.sourceIndex+1])+t.source[t.sourceIndex])!==(65535&~(256*t.source[t.sourceIndex+3]+t.source[t.sourceIndex+2])))return h
for(t.sourceIndex+=4,n=e;n;--n)t.dest[t.destLen++]=t.source[t.sourceIndex++]
return t.bitcount=0,f}var f=0,h=-3,p=new n,d=new n,g=new Uint8Array(30),y=new Uint16Array(30),v=new Uint8Array(30),b=new Uint16Array(30),m=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),w=new n,x=new Uint8Array(320),_=new Uint16Array(16)
!function(t,e){var n
for(n=0;n<7;++n)t.table[n]=0
for(t.table[7]=24,t.table[8]=152,t.table[9]=112,n=0;n<24;++n)t.trans[n]=256+n
for(n=0;n<144;++n)t.trans[24+n]=n
for(n=0;n<8;++n)t.trans[168+n]=280+n
for(n=0;n<112;++n)t.trans[176+n]=144+n
for(n=0;n<5;++n)e.table[n]=0
for(e.table[5]=32,n=0;n<32;++n)e.trans[n]=n}(p,d),r(g,y,4,3),r(v,b,2,1),g[28]=0,y[28]=258,t.exports=function(t,e){var r,i,s=new function(t,e){this.source=t,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new n,this.dtree=new n}(t,e)
do{switch(r=o(s),a(s,2,0)){case 0:i=c(s)
break
case 1:i=l(s,p,d)
break
case 2:u(s,s.ltree,s.dtree),i=l(s,s.ltree,s.dtree)
break
default:i=h}if(i!==f)throw new Error("Data error")}while(!r)
return s.destLen<s.dest.length?"function"==typeof s.dest.slice?s.dest.slice(0,s.destLen):s.dest.subarray(0,s.destLen):s.dest}},function(t,e,n){!function(t){"use strict"
function e(t){var e=t.charCodeAt(0)
return e===r||e===u?62:e===i||e===l?63:e<o?-1:e<o+10?e-o+26+26:e<s+26?e-s:e<a+26?e-a+26:void 0}var n="undefined"!=typeof Uint8Array?Uint8Array:Array,r="+".charCodeAt(0),i="/".charCodeAt(0),o="0".charCodeAt(0),a="a".charCodeAt(0),s="A".charCodeAt(0),u="-".charCodeAt(0),l="_".charCodeAt(0)
t.toByteArray=function(t){function r(t){l[f++]=t}var i,o,a,s,u,l
if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var c=t.length
u="="===t.charAt(c-2)?2:"="===t.charAt(c-1)?1:0,l=new n(3*t.length/4-u),a=u>0?t.length-4:t.length
var f=0
for(i=0,o=0;i<a;i+=4,o+=3)s=e(t.charAt(i))<<18|e(t.charAt(i+1))<<12|e(t.charAt(i+2))<<6|e(t.charAt(i+3)),r((16711680&s)>>16),r((65280&s)>>8),r(255&s)
return 2===u?r(255&(s=e(t.charAt(i))<<2|e(t.charAt(i+1))>>4)):1===u&&(r((s=e(t.charAt(i))<<10|e(t.charAt(i+1))<<4|e(t.charAt(i+2))>>2)>>8&255),r(255&s)),l},t.fromByteArray=function(t){function e(t){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)}var n,r,i,o,a=t.length%3,s=""
for(n=0,i=t.length-a;n<i;n+=3)r=(t[n]<<16)+(t[n+1]<<8)+t[n+2],s+=(o=r,e(o>>18&63)+e(o>>12&63)+e(o>>6&63)+e(63&o))
switch(a){case 1:s+=e((r=t[t.length-1])>>2),s+=e(r<<4&63),s+="=="
break
case 2:s+=e((r=(t[t.length-2]<<8)+t[t.length-1])>>10),s+=e(r>>4&63),s+=e(r<<2&63),s+="="}return s}}(e)},function(t,e){(function(){e.OP=0,e.CL=1,e.CP=2,e.QU=3,e.GL=4,e.NS=5,e.EX=6,e.SY=7,e.IS=8,e.PR=9,e.PO=10,e.NU=11,e.AL=12,e.HL=13,e.ID=14,e.IN=15,e.HY=16,e.BA=17,e.BB=18,e.B2=19,e.ZW=20,e.CM=21,e.WJ=22,e.H2=23,e.H3=24,e.JL=25,e.JV=26,e.JT=27,e.RI=28,e.AI=29,e.BK=30,e.CB=31,e.CJ=32,e.CR=33,e.LF=34,e.NL=35,e.SA=36,e.SG=37,e.SP=38,e.XX=39}).call(this)},function(t,e){(function(){e.DI_BRK=0,e.IN_BRK=1,e.CI_BRK=2,e.CP_BRK=3,e.PR_BRK=4,e.pairTable=[[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,4],[0,4,4,1,1,4,4,4,4,1,1,0,0,0,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,1,4,4,4,4,1,1,1,1,1,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[4,4,4,1,1,1,4,4,4,1,1,1,1,1,1,1,1,1,1,1,4,2,4,1,1,1,1,1,1],[1,4,4,1,1,1,4,4,4,1,1,1,1,1,1,1,1,1,1,1,4,2,4,1,1,1,1,1,1],[0,4,4,1,1,1,4,4,4,0,0,0,0,0,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,1,1,4,4,4,0,0,0,0,0,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,1,1,4,4,4,0,0,1,0,0,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,1,1,4,4,4,0,0,1,1,1,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[1,4,4,1,1,1,4,4,4,0,0,1,1,1,1,0,1,1,0,0,4,2,4,1,1,1,1,1,0],[1,4,4,1,1,1,4,4,4,0,0,1,1,1,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[1,4,4,1,1,1,4,4,4,1,1,1,1,1,0,1,1,1,0,0,4,2,4,0,0,0,0,0,0],[1,4,4,1,1,1,4,4,4,0,0,1,1,1,0,1,1,1,0,0,4,2,4,0,0,0,0,0,0],[1,4,4,1,1,1,4,4,4,0,0,1,1,1,0,1,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,1,1,4,4,4,0,1,0,0,0,0,1,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,1,1,4,4,4,0,0,0,0,0,0,1,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,0,1,4,4,4,0,0,1,0,0,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[0,4,4,1,0,1,4,4,4,0,0,0,0,0,0,0,1,1,0,0,4,2,4,0,0,0,0,0,0],[1,4,4,1,1,1,4,4,4,1,1,1,1,1,1,1,1,1,1,1,4,2,4,1,1,1,1,1,1],[0,4,4,1,1,1,4,4,4,0,0,0,0,0,0,0,1,1,0,4,4,2,4,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[1,4,4,1,1,1,4,4,4,0,0,1,1,1,0,1,1,1,0,0,4,2,4,0,0,0,0,0,0],[1,4,4,1,1,1,4,4,4,1,1,1,1,1,1,1,1,1,1,1,4,2,4,1,1,1,1,1,1],[0,4,4,1,1,1,4,4,4,0,1,0,0,0,0,1,1,1,0,0,4,2,4,0,0,0,1,1,0],[0,4,4,1,1,1,4,4,4,0,1,0,0,0,0,1,1,1,0,0,4,2,4,0,0,0,0,1,0],[0,4,4,1,1,1,4,4,4,0,1,0,0,0,0,1,1,1,0,0,4,2,4,1,1,1,1,0,0],[0,4,4,1,1,1,4,4,4,0,1,0,0,0,0,1,1,1,0,0,4,2,4,0,0,0,1,1,0],[0,4,4,1,1,1,4,4,4,0,1,0,0,0,0,1,1,1,0,0,4,2,4,0,0,0,0,1,0],[0,4,4,1,1,1,4,4,4,0,0,0,0,0,0,0,1,1,0,0,4,2,4,0,0,0,0,0,1]]}).call(this)},function(t,e){"use strict"
function n(t,e){this.defaultStyle=e||{},this.styleDictionary=t,this.styleOverrides=[]}n.prototype.clone=function(){var t=new n(this.styleDictionary,this.defaultStyle)
return this.styleOverrides.forEach(function(e){t.styleOverrides.push(e)}),t},n.prototype.push=function(t){this.styleOverrides.push(t)},n.prototype.pop=function(t){for(t=t||1;t-- >0;)this.styleOverrides.pop()},n.prototype.autopush=function(t){if("string"==typeof t||t instanceof String)return 0
var e=[]
t.style&&(e=Array.isArray(t.style)?t.style:[t.style])
for(var n=0,r=e.length;n<r;n++)this.push(e[n])
var i={},o=!1
return["font","fontSize","bold","italics","alignment","color","columnGap","fillColor","decoration","decorationStyle","decorationColor","background","lineHeight","characterSpacing","noWrap","markerColor"].forEach(function(e){void 0!==t[e]&&null!==t[e]&&(i[e]=t[e],o=!0)}),o&&this.push(i),e.length+(o?1:0)},n.prototype.auto=function(t,e){var n=this.autopush(t),r=e()
return n>0&&this.pop(n),r},n.prototype.getProperty=function(t){if(this.styleOverrides)for(var e=this.styleOverrides.length-1;e>=0;e--){var n=this.styleOverrides[e]
if("string"==typeof n||n instanceof String){var r=this.styleDictionary[n]
if(r&&null!==r[t]&&void 0!==r[t])return r[t]}else if(void 0!==n[t]&&null!==n[t])return n[t]}return this.defaultStyle&&this.defaultStyle[t]},t.exports=n},function(t,e){"use strict"
function n(t){return"auto"===t.width}function r(t){return null===t.width||void 0===t.width||"*"===t.width||"star"===t.width}t.exports={buildColumnWidths:function(t,e){var i=[],o=0,a=0,s=[],u=0,l=0,c=[],f=e
t.forEach(function(t){n(t)?(i.push(t),o+=t._minWidth,a+=t._maxWidth):r(t)?(s.push(t),u=Math.max(u,t._minWidth),l=Math.max(l,t._maxWidth)):c.push(t)}),c.forEach(function(t){"string"==typeof t.width&&/\d+%/.test(t.width)&&(t.width=parseFloat(t.width)*f/100),t.width<t._minWidth&&t.elasticWidth?t._calcWidth=t._minWidth:t._calcWidth=t.width,e-=t._calcWidth})
var h=o+u*s.length,p=a+l*s.length
if(h>=e)i.forEach(function(t){t._calcWidth=t._minWidth}),s.forEach(function(t){t._calcWidth=u})
else{if(p<e)i.forEach(function(t){t._calcWidth=t._maxWidth,e-=t._calcWidth})
else{var d=e-h,g=p-h
i.forEach(function(t){var n=t._maxWidth-t._minWidth
t._calcWidth=t._minWidth+n*d/g,e-=t._calcWidth})}if(s.length>0){var y=e/s.length
s.forEach(function(t){t._calcWidth=y})}}},measureMinMax:function(t){for(var e={min:0,max:0},i={min:0,max:0},o=0,a=0,s=t.length;a<s;a++){var u=t[a]
r(u)?(i.min=Math.max(i.min,u._minWidth),i.max=Math.max(i.max,u._maxWidth),o++):n(u)?(e.min+=u._minWidth,e.max+=u._maxWidth):(e.min+=void 0!==u.width&&u.width||u._minWidth,e.max+=void 0!==u.width&&u.width||u._maxWidth)}return o&&(e.min+=o*i.min,e.max+=o*i.max),e},isAutoColumn:n,isStarColumn:r}},function(t,e){"use strict"
function n(t,e){var n=[],r=e.background||"#fff",u=e.foreground||"#000",d=function(t,e){var n={numeric:i,alphanumeric:o,octet:a},r={L:c,M:f,Q:h,H:p},u=(e=e||{}).version||-1,d=r[(e.eccLevel||"L").toUpperCase()],g=e.mode?n[e.mode.toLowerCase()]:-1,y="mask"in e?e.mask:-1
if(g<0)g="string"==typeof t?t.match(s)?i:t.match(l)?o:a:a
else if(g!=i&&g!=o&&g!=a)throw"invalid or unsupported mode"
if(null===(t=T(g,t)))throw"invalid data format"
if(d<0||d>3)throw"invalid ECC level"
if(u<0){for(u=1;u<=40&&!(t.length<=I(u,g,d));++u);if(u>40)throw"too large data for the Qr format"}else if(u<1||u>40)throw"invalid Qr version! should be between 1 and 40"
if(-1!=y&&(y<0||y>8))throw"invalid mask"
return F(t,u,g,d,y)}(t,e),g=d.length,y=Math.floor(e.fit?e.fit/g:5),v=g*y
n.push({type:"rect",x:0,y:0,w:v,h:v,lineWidth:0,color:r})
for(var b=0;b<g;++b)for(var m=0;m<g;++m)d[b][m]&&n.push({type:"rect",x:y*m,y:y*b,w:y,h:y,lineWidth:0,color:u})
return{canvas:n,size:v}}for(var r=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],i=1,o=2,a=4,s=/^\d*$/,u=/^[A-Za-z0-9 $%*+\-.\/:]*$/,l=/^[A-Z0-9 $%*+\-.\/:]*$/,c=1,f=0,h=3,p=2,d=[],g=[-1],y=0,v=1;y<255;++y)d.push(v),g[v]=y,v=2*v^(v>=128?285:0)
var b=[[]]
for(y=0;y<30;++y){for(var m=b[y],w=[],x=0;x<=y;++x){var _=x<y?d[m[x]]:0,k=d[(y+(m[x-1]||0))%255]
w.push(g[_^k])}b.push(w)}var S={}
for(y=0;y<45;++y)S["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(y)]=y
var C=[function(t,e){return(t+e)%2==0},function(t,e){return t%2==0},function(t,e){return e%3==0},function(t,e){return(t+e)%3==0},function(t,e){return((t/2|0)+(e/3|0))%2==0},function(t,e){return t*e%2+t*e%3==0},function(t,e){return(t*e%2+t*e%3)%2==0},function(t,e){return((t+e)%2+t*e%3)%2==0}],A=function(t){return t>6},P=function(t,e){var n,i,o,a=-8&(i=r[n=t],o=16*n*n+128*n+64,A(n)&&(o-=36),i[2].length&&(o-=25*i[2].length*i[2].length-10*i[2].length-55),o),s=r[t]
return a-8*s[0][e]*s[1][e]},E=function(t,e){switch(e){case i:return t<10?10:t<27?12:14
case o:return t<10?9:t<27?11:13
case a:return t<10?8:16
case 8:return t<10?8:t<27?10:12}},I=function(t,e,n){var r=P(t,n)-4-E(t,e)
switch(e){case i:return 3*(r/10|0)+(r%10<4?0:r%10<7?1:2)
case o:return 2*(r/11|0)+(r%11<6?0:1)
case a:return r/8|0
case 8:return r/13|0}},T=function(t,e){switch(t){case i:return e.match(s)?e:null
case o:return e.match(u)?e.toUpperCase():null
case a:if("string"==typeof e){for(var n=[],r=0;r<e.length;++r){var l=e.charCodeAt(r)
l<128?n.push(l):l<2048?n.push(192|l>>6,128|63&l):l<65536?n.push(224|l>>12,128|l>>6&63,128|63&l):n.push(240|l>>18,128|l>>12&63,128|l>>6&63,128|63&l)}return n}return e}},O=function(t,e){for(var n=t.slice(0),r=t.length,i=e.length,o=0;o<i;++o)n.push(0)
for(o=0;o<r;){var a=g[n[o++]]
if(a>=0)for(var s=0;s<i;++s)n[o+s]^=d[(a+e[s])%255]}return n.slice(r)},B=function(t,e,n,r){for(var i=t<<r,o=e-1;o>=0;--o)i>>r+o&1&&(i^=n<<o)
return t<<r|i},L=function(t,e,n){for(var r=C[n],i=t.length,o=0;o<i;++o)for(var a=0;a<i;++a)e[o][a]||(t[o][a]^=r(o,a))
return t},R=function(t,e,n,r){for(var i=t.length,o=21522^B(n<<3|r,5,1335,10),a=0;a<15;++a){var s=[i-1,i-2,i-3,i-4,i-5,i-6,i-7,i-8,7,5,4,3,2,1,0][a]
t[[0,1,2,3,4,5,7,8,i-7,i-6,i-5,i-4,i-3,i-2,i-1][a]][8]=t[8][s]=o>>a&1}return t},M=function(t){for(var e=function(t){for(var e=0,n=0;n<t.length;++n)t[n]>=5&&(e+=t[n]-5+3)
for(n=5;n<t.length;n+=2){var r=t[n]
t[n-1]==r&&t[n-2]==3*r&&t[n-3]==r&&t[n-4]==r&&(t[n-5]>=4*r||t[n+1]>=4*r)&&(e+=40)}return e},n=t.length,r=0,i=0,o=0;o<n;++o){var a,s=t[o]
a=[0]
for(var u=0;u<n;){for(l=0;u<n&&s[u];++l)++u
for(a.push(l),l=0;u<n&&!s[u];++l)++u
a.push(l)}r+=e(a),a=[0]
for(u=0;u<n;){var l
for(l=0;u<n&&t[u][o];++l)++u
for(a.push(l),l=0;u<n&&!t[u][o];++l)++u
a.push(l)}r+=e(a)
var c=t[o+1]||[]
i+=s[0]
for(u=1;u<n;++u){var f=s[u]
i+=f,s[u-1]==f&&c[u]===f&&c[u-1]===f&&(r+=3)}}return r+10*(Math.abs(i/n/n-.5)/.05|0)},F=function(t,e,n,s,u){var l=r[e],c=function(t,e,n,r){var s=[],u=0,l=8,c=n.length,f=function(t,e){if(e>=l){for(s.push(u|t>>(e-=l));e>=8;)s.push(t>>(e-=8)&255)
u=0,l=8}e>0&&(u|=(t&(1<<e)-1)<<(l-=e))},h=E(t,e)
switch(f(e,4),f(c,h),e){case i:for(var p=2;p<c;p+=3)f(parseInt(n.substring(p-2,p+1),10),10)
f(parseInt(n.substring(p-2),10),[0,4,7][c%3])
break
case o:for(p=1;p<c;p+=2)f(45*S[n.charAt(p-1)]+S[n.charAt(p)],11)
c%2==1&&f(S[n.charAt(p-1)],6)
break
case a:for(p=0;p<c;++p)f(n[p],8)}for(f(0,4),l<8&&s.push(u);s.length+1<r;)s.push(236,17)
return s.length<r&&s.push(236),s}(e,n,t,P(e,s)>>3)
c=function(t,e,n){for(var r=[],i=t.length/e|0,o=0,a=e-t.length%e,s=0;s<a;++s)r.push(o),o+=i
for(s=a;s<e;++s)r.push(o),o+=i+1
r.push(o)
var u=[]
for(s=0;s<e;++s)u.push(O(t.slice(r[s],r[s+1]),n))
var l=[],c=t.length/e|0
for(s=0;s<c;++s)for(var f=0;f<e;++f)l.push(t[r[f]+s])
for(f=a;f<e;++f)l.push(t[r[f+1]-1])
for(s=0;s<n.length;++s)for(f=0;f<e;++f)l.push(u[f][s])
return l}(c,l[1][s],b[l[0][s]])
var f=function(t){for(var e=r[t],n=4*t+17,i=[],o=[],a=0;a<n;++a)i.push([]),o.push([])
var s=function(t,e,n,r,a){for(var s=0;s<n;++s)for(var u=0;u<r;++u)i[t+s][e+u]=a[s]>>u&1,o[t+s][e+u]=1}
s(0,0,9,9,[127,65,93,93,93,65,383,0,64]),s(n-8,0,8,9,[256,127,65,93,93,93,65,127]),s(0,n-8,9,8,[254,130,186,186,186,130,254,0,0])
for(a=9;a<n-8;++a)i[6][a]=i[a][6]=1&~a,o[6][a]=o[a][6]=1
var u=e[2],l=u.length
for(a=0;a<l;++a)for(var c=0===a||a===l-1?1:0,f=0===a?l-1:l,h=c;h<f;++h)s(u[a],u[h],5,5,[31,17,21,17,31])
if(A(t)){var p=B(t,6,7973,12),d=0
for(a=0;a<6;++a)for(h=0;h<3;++h)i[a][n-11+h]=i[n-11+h][a]=p>>d++&1,o[a][n-11+h]=o[n-11+h][a]=1}return{matrix:i,reserved:o}}(e),h=f.matrix,p=f.reserved
if(function(t,e,n){for(var r=t.length,i=0,o=-1,a=r-1;a>=0;a-=2){6==a&&--a
for(var s=o<0?r-1:0,u=0;u<r;++u){for(var l=a;l>a-2;--l)e[s][l]||(t[s][l]=n[i>>3]>>(7&~i)&1,++i)
s+=o}o=-o}}(h,p,c),u<0){L(h,p,0),R(h,0,s,0)
var d=0,g=M(h)
for(L(h,p,0),u=1;u<8;++u){L(h,p,u),R(h,0,s,u)
var y=M(h)
g>y&&(g=y,d=u),L(h,p,u)}u=d}return L(h,p,u),R(h,0,s,u),h}
t.exports={measure:function(t){var e=n(t.qr,t)
return t._canvas=e.canvas,t._width=t._height=t._minWidth=t._maxWidth=t._minHeight=t._maxHeight=e.size,t}}},function(t,e,n){"use strict"
function r(t,e){this.pages=[],this.pageMargins=e,this.x=e.left,this.availableWidth=t.width-e.left-e.right,this.availableHeight=0,this.page=-1,this.snapshots=[],this.endingCell=null,this.tracker=new i,this.addPage(t)}var i=n(11)
r.prototype.beginColumnGroup=function(){this.snapshots.push({x:this.x,y:this.y,availableHeight:this.availableHeight,availableWidth:this.availableWidth,page:this.page,bottomMost:{y:this.y,page:this.page},endingCell:this.endingCell,lastColumnWidth:this.lastColumnWidth}),this.lastColumnWidth=0},r.prototype.beginColumn=function(t,e,n){var r=this.snapshots[this.snapshots.length-1]
this.calculateBottomMost(r),this.endingCell=n,this.page=r.page,this.x=this.x+this.lastColumnWidth+(e||0),this.y=r.y,this.availableWidth=t,this.availableHeight=r.availableHeight,this.lastColumnWidth=t},r.prototype.calculateBottomMost=function(t){var e,n,r
this.endingCell?(this.saveContextInEndingCell(this.endingCell),this.endingCell=null):t.bottomMost=(e=this,n=t.bottomMost,{page:(r=e.page>n.page?e:n.page>e.page?n:e.y>n.y?e:n).page,x:r.x,y:r.y,availableHeight:r.availableHeight,availableWidth:r.availableWidth})},r.prototype.markEnding=function(t){this.page=t._columnEndingContext.page,this.x=t._columnEndingContext.x,this.y=t._columnEndingContext.y,this.availableWidth=t._columnEndingContext.availableWidth,this.availableHeight=t._columnEndingContext.availableHeight,this.lastColumnWidth=t._columnEndingContext.lastColumnWidth},r.prototype.saveContextInEndingCell=function(t){t._columnEndingContext={page:this.page,x:this.x,y:this.y,availableHeight:this.availableHeight,availableWidth:this.availableWidth,lastColumnWidth:this.lastColumnWidth}},r.prototype.completeColumnGroup=function(){var t=this.snapshots.pop()
this.calculateBottomMost(t),this.endingCell=null,this.x=t.x,this.y=t.bottomMost.y,this.page=t.bottomMost.page,this.availableWidth=t.availableWidth,this.availableHeight=t.bottomMost.availableHeight,this.lastColumnWidth=t.lastColumnWidth},r.prototype.addMargin=function(t,e){this.x+=t,this.availableWidth-=t+(e||0)},r.prototype.moveDown=function(t){return this.y+=t,this.availableHeight-=t,this.availableHeight>0},r.prototype.initializePage=function(){this.y=this.pageMargins.top,this.availableHeight=this.getCurrentPage().pageSize.height-this.pageMargins.top-this.pageMargins.bottom,this.pageSnapshot().availableWidth=this.getCurrentPage().pageSize.width-this.pageMargins.left-this.pageMargins.right},r.prototype.pageSnapshot=function(){return this.snapshots[0]?this.snapshots[0]:this},r.prototype.moveTo=function(t,e){void 0!==t&&null!==t&&(this.x=t,this.availableWidth=this.getCurrentPage().pageSize.width-this.x-this.pageMargins.right),void 0!==e&&null!==e&&(this.y=e,this.availableHeight=this.getCurrentPage().pageSize.height-this.y-this.pageMargins.bottom)},r.prototype.beginDetachedBlock=function(){this.snapshots.push({x:this.x,y:this.y,availableHeight:this.availableHeight,availableWidth:this.availableWidth,page:this.page,endingCell:this.endingCell,lastColumnWidth:this.lastColumnWidth})},r.prototype.endDetachedBlock=function(){var t=this.snapshots.pop()
this.x=t.x,this.y=t.y,this.availableWidth=t.availableWidth,this.availableHeight=t.availableHeight,this.page=t.page,this.endingCell=t.endingCell,this.lastColumnWidth=t.lastColumnWidth}
var o=function(t,e){return n=e,r=t.pageSize.orientation,(e=void 0===n?r:("string"==typeof n||n instanceof String)&&"landscape"===n.toLowerCase()?"landscape":"portrait")!==t.pageSize.orientation?{orientation:e,width:t.pageSize.height,height:t.pageSize.width}:{orientation:t.pageSize.orientation,width:t.pageSize.width,height:t.pageSize.height}
var n,r}
r.prototype.moveToNextPage=function(t){var e=this.page+1,n=this.page,r=this.y,i=e>=this.pages.length
if(i){var a=this.availableWidth,s=this.getCurrentPage().pageSize.orientation,u=o(this.getCurrentPage(),t)
this.addPage(u),s===u.orientation&&(this.availableWidth=a)}else this.page=e,this.initializePage()
return{newPageCreated:i,prevPage:n,prevY:r,y:this.y}},r.prototype.addPage=function(t){var e={items:[],pageSize:t}
return this.pages.push(e),this.page=this.pages.length-1,this.initializePage(),this.tracker.emit("pageAdded"),e},r.prototype.getCurrentPage=function(){return this.page<0||this.page>=this.pages.length?null:this.pages[this.page]},r.prototype.getCurrentPosition=function(){var t=this.getCurrentPage().pageSize,e=t.height-this.pageMargins.top-this.pageMargins.bottom,n=t.width-this.pageMargins.left-this.pageMargins.right
return{pageNumber:this.page+1,pageOrientation:t.orientation,pageInnerHeight:e,pageInnerWidth:n,left:this.x,top:this.y,verticalRatio:(this.y-this.pageMargins.top)/e,horizontalRatio:(this.x-this.pageMargins.left)/n}},t.exports=r},function(t,e,n){"use strict"
function r(t,e){this.transactionLevel=0,this.repeatables=[],this.tracker=e,this.writer=new o(t,e)}function i(t,e){var n=e(t)
return n||(t.moveToNextPage(),n=e(t)),n}var o=n(27)
r.prototype.addLine=function(t,e,n){return i(this,function(r){return r.writer.addLine(t,e,n)})},r.prototype.addImage=function(t,e){return i(this,function(n){return n.writer.addImage(t,e)})},r.prototype.addQr=function(t,e){return i(this,function(n){return n.writer.addQr(t,e)})},r.prototype.addVector=function(t,e,n,r){return this.writer.addVector(t,e,n,r)},r.prototype.addFragment=function(t,e,n,r){this.writer.addFragment(t,e,n,r)||(this.moveToNextPage(),this.writer.addFragment(t,e,n,r))},r.prototype.moveToNextPage=function(t){var e=this.writer.context.moveToNextPage(t)
e.newPageCreated?this.repeatables.forEach(function(t){this.writer.addFragment(t,!0)},this):this.repeatables.forEach(function(t){this.writer.context.moveDown(t.height)},this),this.writer.tracker.emit("pageChanged",{prevPage:e.prevPage,prevY:e.prevY,y:e.y})},r.prototype.beginUnbreakableBlock=function(t,e){0==this.transactionLevel++&&(this.originalX=this.writer.context.x,this.writer.pushContext(t,e))},r.prototype.commitUnbreakableBlock=function(t,e){if(0==--this.transactionLevel){var n=this.writer.context
this.writer.popContext()
var r=n.pages.length
if(r>0){var i=n.pages[0]
if(i.xOffset=t,i.yOffset=e,r>1)if(void 0!==t||void 0!==e)i.height=n.getCurrentPage().pageSize.height-n.pageMargins.top-n.pageMargins.bottom
else{i.height=this.writer.context.getCurrentPage().pageSize.height-this.writer.context.pageMargins.top-this.writer.context.pageMargins.bottom
for(var o=0,a=this.repeatables.length;o<a;o++)i.height-=this.repeatables[o].height}else i.height=n.y
void 0!==t||void 0!==e?this.writer.addFragment(i,!0,!0,!0):this.addFragment(i)}}},r.prototype.currentBlockToRepeatable=function(){var t=this.writer.context,e={items:[]}
return t.pages[0].items.forEach(function(t){e.items.push(t)}),e.xOffset=this.originalX,e.height=t.y,e},r.prototype.pushToRepeatables=function(t){this.repeatables.push(t)},r.prototype.popFromRepeatables=function(){this.repeatables.pop()},r.prototype.context=function(){return this.writer.context},t.exports=r},function(t,e,n){"use strict"
function r(t,e){this.context=t,this.contextStack=[],this.tracker=e}function i(t,e,n){null===n||void 0===n||n<0||n>t.items.length?t.items.push(e):t.items.splice(n,0,e)}var o=n(28),a=n(13).pack,s=n(13).offsetVector,u=n(25)
r.prototype.addLine=function(t,e,n){var r=t.getHeight(),o=this.context,a=o.getCurrentPage(),s=this.getCurrentPositionOnPage()
return!(o.availableHeight<r||!a)&&(t.x=o.x+(t.x||0),t.y=o.y+(t.y||0),this.alignLine(t),i(a,{type:"line",item:t},n),this.tracker.emit("lineAdded",t),e||o.moveDown(r),s)},r.prototype.alignLine=function(t){var e=this.context.availableWidth,n=t.getWidth(),r=t.inlines&&t.inlines.length>0&&t.inlines[0].alignment,i=0
switch(r){case"right":i=e-n
break
case"center":i=(e-n)/2}if(i&&(t.x=(t.x||0)+i),"justify"===r&&!t.newLineForced&&!t.lastLineInParagraph&&t.inlines.length>1)for(var o=(e-n)/(t.inlines.length-1),a=1,s=t.inlines.length;a<s;a++)i=a*o,t.inlines[a].x+=i,t.inlines[a].justifyShift=o},r.prototype.addImage=function(t,e){var n=this.context,r=n.getCurrentPage(),o=this.getCurrentPositionOnPage()
return!(n.availableHeight<t._height||!r)&&(void 0===t._x&&(t._x=t.x||0),t.x=n.x+t._x,t.y=n.y,this.alignImage(t),i(r,{type:"image",item:t},e),n.moveDown(t._height),o)},r.prototype.addQr=function(t,e){var n=this.context,r=n.getCurrentPage(),i=this.getCurrentPositionOnPage()
if(n.availableHeight<t._height||!r)return!1
void 0===t._x&&(t._x=t.x||0),t.x=n.x+t._x,t.y=n.y,this.alignImage(t)
for(var o=0,a=t._canvas.length;o<a;o++){var s=t._canvas[o]
s.x+=t.x,s.y+=t.y,this.addVector(s,!0,!0,e)}return n.moveDown(t._height),i},r.prototype.alignImage=function(t){var e=this.context.availableWidth,n=t._minWidth,r=0
switch(t._alignment){case"right":r=e-n
break
case"center":r=(e-n)/2}r&&(t.x=(t.x||0)+r)},r.prototype.addVector=function(t,e,n,r){var o=this.context,a=o.getCurrentPage(),u=this.getCurrentPositionOnPage()
if(a)return s(t,e?0:o.x,n?0:o.y),i(a,{type:"vector",item:t},r),u},r.prototype.addFragment=function(t,e,n,r){var i=this.context,u=i.getCurrentPage()
return!(!e&&t.height>i.availableHeight||(t.items.forEach(function(r){switch(r.type){case"line":var l=function(t){var e=new o(t.maxWidth)
for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return e}(r.item)
l.x=(l.x||0)+(e?t.xOffset||0:i.x),l.y=(l.y||0)+(n?t.yOffset||0:i.y),u.items.push({type:"line",item:l})
break
case"vector":var c=a(r.item)
s(c,e?t.xOffset||0:i.x,n?t.yOffset||0:i.y),u.items.push({type:"vector",item:c})
break
case"image":var f=a(r.item)
f.x=(f.x||0)+(e?t.xOffset||0:i.x),f.y=(f.y||0)+(n?t.yOffset||0:i.y),u.items.push({type:"image",item:f})}}),r||i.moveDown(t.height),0))},r.prototype.pushContext=function(t,e){void 0===t&&(e=this.context.getCurrentPage().height-this.context.pageMargins.top-this.context.pageMargins.bottom,t=this.context.availableWidth),("number"==typeof t||t instanceof Number)&&(t=new u({width:t,height:e},{left:0,right:0,top:0,bottom:0})),this.contextStack.push(this.context),this.context=t},r.prototype.popContext=function(){this.context=this.contextStack.pop()},r.prototype.getCurrentPositionOnPage=function(){return(this.contextStack[0]||this.context).getCurrentPosition()},t.exports=r},function(t,e){"use strict"
function n(t){this.maxWidth=t,this.leadingCut=0,this.trailingCut=0,this.inlineWidths=0,this.inlines=[]}n.prototype.getAscenderHeight=function(){var t=0
return this.inlines.forEach(function(e){t=Math.max(t,e.font.ascender/1e3*e.fontSize)}),t},n.prototype.hasEnoughSpaceForInline=function(t){return 0===this.inlines.length||!this.newLineForced&&this.inlineWidths+t.width-this.leadingCut-(t.trailingCut||0)<=this.maxWidth},n.prototype.addInline=function(t){0===this.inlines.length&&(this.leadingCut=t.leadingCut||0),this.trailingCut=t.trailingCut||0,t.x=this.inlineWidths-this.leadingCut,this.inlines.push(t),this.inlineWidths+=t.width,t.lineEnd&&(this.newLineForced=!0)},n.prototype.getWidth=function(){return this.inlineWidths-this.leadingCut-this.trailingCut},n.prototype.getHeight=function(){var t=0
return this.inlines.forEach(function(e){t=Math.max(t,e.height||0)}),t},t.exports=n},function(t,e,n){"use strict"
function r(t){this.tableNode=t}var i=n(23)
r.prototype.beginTable=function(t){var e,n,r,o=this
e=this.tableNode,this.offsets=e._offsets,this.layout=e._layout,n=t.context().availableWidth-this.offsets.total,i.buildColumnWidths(e.table.widths,n),this.tableWidth=e._offsets.total+(r=0,e.table.widths.forEach(function(t){r+=t._calcWidth}),r),this.rowSpanData=function(){var t=[],e=0,n=0
t.push({left:0,rowSpan:0})
for(var r=0,i=o.tableNode.table.body[0].length;r<i;r++)n=o.layout.paddingLeft(r,o.tableNode)+o.layout.paddingRight(r,o.tableNode)+o.layout.vLineWidth(r,o.tableNode)+o.tableNode.table.widths[r]._calcWidth,t[t.length-1].width=n,e+=n,t.push({left:e,rowSpan:0,width:0})
return t}(),this.cleanUpRepeatables=!1,this.headerRows=e.table.headerRows||0,this.rowsWithoutPageBreak=this.headerRows+(e.table.keepWithHeaderRows||0),this.dontBreakRows=e.table.dontBreakRows||!1,this.rowsWithoutPageBreak&&t.beginUnbreakableBlock(),function(t){function e(e,n,r,i){var o=t[e][n]
o.border=o.border||{},o.border[r]=i}for(var n=0;n<t.length;n++)for(var r=t[n],i=0;i<r.length;i++){var o=r[i]
if(o.border){for(var a=o.rowSpan||1,s=o.colSpan||1,u=0;u<a;u++)void 0!==o.border[0]&&u>0&&e(n+u,i,0,o.border[0]),void 0!==o.border[2]&&e(n+u,i+s-1,2,o.border[2])
for(var l=0;l<s;l++)void 0!==o.border[1]&&l>0&&e(n,i+l,1,o.border[1]),void 0!==o.border[3]&&e(n+a-1,i+l,3,o.border[3])}}}(this.tableNode.table.body),this.drawHorizontalLine(0,t)},r.prototype.onRowBreak=function(t,e){var n=this
return function(){var t=n.rowPaddingTop+(n.headerRows?0:n.topLineWidth)
e.context().moveDown(t)}},r.prototype.beginRow=function(t,e){this.topLineWidth=this.layout.hLineWidth(t,this.tableNode),this.rowPaddingTop=this.layout.paddingTop(t,this.tableNode),this.bottomLineWidth=this.layout.hLineWidth(t+1,this.tableNode),this.rowPaddingBottom=this.layout.paddingBottom(t,this.tableNode),this.rowCallback=this.onRowBreak(t,e),e.tracker.startTracking("pageChanged",this.rowCallback),this.dontBreakRows&&e.beginUnbreakableBlock(),this.rowTopY=e.context().y,this.reservedAtBottom=this.bottomLineWidth+this.rowPaddingBottom,e.context().availableHeight-=this.reservedAtBottom,e.context().moveDown(this.rowPaddingTop)},r.prototype.drawHorizontalLine=function(t,e,n){var r=this.layout.hLineWidth(t,this.tableNode)
if(r){for(var i=r/2,o=null,a=this.tableNode.table.body,s=0,u=this.rowSpanData.length;s<u;s++){var l=this.rowSpanData[s],c=!l.rowSpan
if(c&&s<u-1){var f=!1,h=!1
if(t<a.length){var p=a[t][s]
f=p.border?p.border[1]:this.layout.defaultBorder}if(t>0){var d=a[t-1][s]
h=d.border?d.border[3]:this.layout.defaultBorder}c=f||h}!o&&c&&(o={left:l.left,width:0}),c&&(o.width+=l.width||0)
var g=(n||0)+i
c&&s!==u-1||o&&o.width&&(e.addVector({type:"line",x1:o.left,x2:o.left+o.width,y1:g,y2:g,lineWidth:r,lineColor:"function"==typeof this.layout.hLineColor?this.layout.hLineColor(t,this.tableNode):this.layout.hLineColor},!1,n),o=null)}e.context().moveDown(r)}},r.prototype.drawVerticalLine=function(t,e,n,r,i){var o=this.layout.vLineWidth(r,this.tableNode)
0!==o&&i.addVector({type:"line",x1:t+o/2,x2:t+o/2,y1:e,y2:n,lineWidth:o,lineColor:"function"==typeof this.layout.vLineColor?this.layout.vLineColor(r,this.tableNode):this.layout.vLineColor},!1,!0)},r.prototype.endTable=function(t){this.cleanUpRepeatables&&(t.popFromRepeatables(),this.headerRepeatableHeight=null)},r.prototype.endRow=function(t,e,n){var r,i,o=this
e.tracker.stopTracking("pageChanged",this.rowCallback),e.context().moveDown(this.layout.paddingBottom(t,this.tableNode)),e.context().availableHeight+=this.reservedAtBottom
var a=e.context().page,s=e.context().y,u=function(){for(var e=[],n=0,r=0,i=o.tableNode.table.body[t].length;r<i;r++){if(!n){e.push({x:o.rowSpanData[r].left,index:r})
var a=o.tableNode.table.body[t][r]
n=a._colSpan||a.colSpan||0}n>0&&n--}return e.push({x:o.rowSpanData[o.rowSpanData.length-1].left,index:o.rowSpanData.length-1}),e}(),l=[],c=n&&n.length>0,f=this.tableNode.table.body
if(l.push({y0:this.rowTopY,page:c?n[0].prevPage:a}),c)for(i=0,r=n.length;i<r;i++){var h=n[i]
l[l.length-1].y1=h.prevY,l.push({y0:h.y,page:h.prevPage+1}),this.headerRepeatableHeight&&(l[l.length-1].y0+=this.headerRepeatableHeight)}l[l.length-1].y1=s
for(var p=l[0].y1-l[0].y0===this.rowPaddingTop?1:0,d=l.length;p<d;p++){var g=p<l.length-1,y=p>0&&!this.headerRows,v=y?0:this.topLineWidth,b=l[p].y0,m=l[p].y1
for(g&&(m+=this.rowPaddingBottom),e.context().page!=l[p].page&&(e.context().page=l[p].page,this.reservedAtBottom=0),i=0,r=u.length;i<r;i++){var w,x=!1,_=!1,k=u[i].index
if(k<f[t].length)x=(w=f[t][k]).border?w.border[0]:this.layout.defaultBorder
if(k>0)_=(w=f[t][k-1]).border?w.border[2]:this.layout.defaultBorder
if((x||_)&&this.drawVerticalLine(u[i].x,b-v,m+this.bottomLineWidth,u[i].index,e),i<r-1){var S=f[t][k].fillColor
if(S||(S="function"==typeof this.layout.fillColor?this.layout.fillColor(t,this.tableNode):this.layout.fillColor),S){var C=x||_?this.layout.vLineWidth(k,this.tableNode):0,A=u[i].x+C,P=this.dontBreakRows?b:b-v
e.addVector({type:"rect",x:A,y:P,w:u[i+1].x-A,h:m+this.bottomLineWidth-P,lineWidth:0,color:S},!1,!0,0)}}}g&&!1!==this.layout.hLineWhenBroken&&this.drawHorizontalLine(t+1,e,m),y&&!1!==this.layout.hLineWhenBroken&&this.drawHorizontalLine(t,e,b)}e.context().page=a,e.context().y=s
var E=this.tableNode.table.body[t]
for(i=0,r=E.length;i<r;i++){if(E[i].rowSpan&&(this.rowSpanData[i].rowSpan=E[i].rowSpan,E[i].colSpan&&E[i].colSpan>1))for(var I=1;I<E[i].rowSpan;I++)this.tableNode.table.body[t+I][i]._colSpan=E[i].colSpan
this.rowSpanData[i].rowSpan>0&&this.rowSpanData[i].rowSpan--}this.drawHorizontalLine(t+1,e),this.headerRows&&t===this.headerRows-1&&(this.headerRepeatable=e.currentBlockToRepeatable()),this.dontBreakRows&&e.tracker.auto("pageChanged",function(){o.headerRows||!1===o.layout.hLineWhenBroken||o.drawHorizontalLine(t,e)},function(){e.commitUnbreakableBlock()}),!this.headerRepeatable||t!==this.rowsWithoutPageBreak-1&&t!==this.tableNode.table.body.length-1||(this.headerRepeatableHeight=this.headerRepeatable.height,e.commitUnbreakableBlock(),e.pushToRepeatables(this.headerRepeatable),this.cleanUpRepeatables=!0,this.headerRepeatable=null)},t.exports=r},function(t,e,n){(function(e){(function(){var r,i,o,a,s,u,l={}.hasOwnProperty
u=n(31),s=n(56),i=n(57),a=n(58),o=n(76),r=function(t){function r(t){var e,n,i,o
if(this.options=null!=t?t:{},r.__super__.constructor.apply(this,arguments),this.version=1.3,this.compress=null==(n=this.options.compress)||n,this._pageBuffer=[],this._pageBufferStart=0,this._offsets=[],this._waiting=0,this._ended=!1,this._offset=0,this._root=this.ref({Type:"Catalog",Pages:this.ref({Type:"Pages",Count:0,Kids:[]})}),this.page=null,this.initColor(),this.initVector(),this.initFonts(),this.initText(),this.initImages(),this.info={Producer:"PDFKit",Creator:"PDFKit",CreationDate:new Date},this.options.info){i=this.options.info
for(e in i)o=i[e],this.info[e]=o}this._write("%PDF-"+this.version),this._write("%ÿÿÿÿ"),!1!==this.options.autoFirstPage&&this.addPage()}var c
return function(t,e){function n(){this.constructor=t}for(var r in e)l.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(r,u.Readable),(c=function(t){var e,n,i
i=[]
for(n in t)e=t[n],i.push(r.prototype[n]=e)
return i})(n(77)),c(n(79)),c(n(81)),c(n(288)),c(n(290)),c(n(296)),r.prototype.addPage=function(t){var e
return null==t&&(t=this.options),this.options.bufferPages||this.flushPages(),this.page=new o(this,t),this._pageBuffer.push(this.page),(e=this._root.data.Pages.data).Kids.push(this.page.dictionary),e.Count++,this.x=this.page.margins.left,this.y=this.page.margins.top,this._ctm=[1,0,0,1,0,0],this.transform(1,0,0,-1,0,this.page.height),this.emit("pageAdded"),this},r.prototype.bufferedPageRange=function(){return{start:this._pageBufferStart,count:this._pageBuffer.length}},r.prototype.switchToPage=function(t){var e
if(!(e=this._pageBuffer[t-this._pageBufferStart]))throw new Error("switchToPage("+t+") out of bounds, current buffer covers pages "+this._pageBufferStart+" to "+(this._pageBufferStart+this._pageBuffer.length-1))
return this.page=e},r.prototype.flushPages=function(){var t,e,n,r
for(r=this._pageBuffer,this._pageBuffer=[],this._pageBufferStart+=r.length,t=0,e=r.length;t<e;t++)n=r[t],n.end()},r.prototype.ref=function(t){var e
return e=new a(this,this._offsets.length+1,t),this._offsets.push(null),this._waiting++,e},r.prototype._read=function(){},r.prototype._write=function(t){return e.isBuffer(t)||(t=new e(t+"\n","binary")),this.push(t),this._offset+=t.length},r.prototype.addContent=function(t){return this.page.write(t),this},r.prototype._refEnd=function(t){if(this._offsets[t.id-1]=t.offset,0==--this._waiting&&this._ended)return this._finalize(),this._ended=!1},r.prototype.write=function(t,e){return new Error("PDFDocument#write is deprecated, and will be removed in a future version of PDFKit. Please pipe the document into a Node stream."),this.pipe(s.createWriteStream(t)),this.end(),this.once("end",e)},r.prototype.output=function(t){throw new Error("PDFDocument#output is deprecated, and has been removed from PDFKit. Please pipe the document into a Node stream.")},r.prototype.end=function(){var t,e,n,r,i,o
this.flushPages(),this._info=this.ref(),r=this.info
for(e in r)o=r[e],"string"==typeof o&&(o=new String(o)),this._info.data[e]=o
this._info.end(),i=this._fontFamilies
for(n in i)t=i[n],t.finalize()
return this._root.end(),this._root.data.Pages.end(),0===this._waiting?this._finalize():this._ended=!0},r.prototype._finalize=function(t){var e,n,r,o,a
for(a=this._offset,this._write("xref"),this._write("0 "+(this._offsets.length+1)),this._write("0000000000 65535 f "),e=0,n=(o=this._offsets).length;e<n;e++)r=o[e],r=("0000000000"+r).slice(-10),this._write(r+" 00000 n ")
return this._write("trailer"),this._write(i.convert({Size:this._offsets.length+1,Root:this._root,Info:this._info})),this._write("startxref"),this._write(""+a),this._write("%%EOF"),this.push(null)},r.prototype.toString=function(){return"[object PDFDocument]"},r}(),t.exports=r}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){function r(){i.call(this)}t.exports=r
var i=n(32).EventEmitter
n(33)(r,i),r.Readable=n(34),r.Writable=n(52),r.Duplex=n(53),r.Transform=n(54),r.PassThrough=n(55),r.Stream=r,r.prototype.pipe=function(t,e){function n(e){t.writable&&!1===t.write(e)&&l.pause&&l.pause()}function r(){l.readable&&l.resume&&l.resume()}function o(){c||(c=!0,t.end())}function a(){c||(c=!0,"function"==typeof t.destroy&&t.destroy())}function s(t){if(u(),0===i.listenerCount(this,"error"))throw t}function u(){l.removeListener("data",n),t.removeListener("drain",r),l.removeListener("end",o),l.removeListener("close",a),l.removeListener("error",s),t.removeListener("error",s),l.removeListener("end",u),l.removeListener("close",u),t.removeListener("close",u)}var l=this
l.on("data",n),t.on("drain",r),t._isStdio||e&&!1===e.end||(l.on("end",o),l.on("close",a))
var c=!1
return l.on("error",s),t.on("error",s),l.on("end",u),l.on("close",u),t.on("close",u),t.emit("pipe",l),t}},function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw TypeError("n must be a positive number")
return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,a,s,u,l
if(this._events||(this._events={}),"error"===t&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e
var c=new Error('Uncaught, unspecified "error" event. ('+e+")")
throw c.context=e,c}if(o(n=this._events[t]))return!1
if(r(n))switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(i(n))for(s=Array.prototype.slice.call(arguments,1),l=n.slice(),a=l.length,u=0;u<a;u++)l[u].apply(this,s)
return!0},n.prototype.addListener=function(t,e){var a
if(!r(e))throw TypeError("listener must be a function")
return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?i(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,i(this._events[t])&&!this._events[t].warned&&(a=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[t].length>a&&(this._events[t].warned=!0,console.trace),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function")
var i=!1
return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var n,o,a,s
if(!r(e))throw TypeError("listener must be a function")
if(!this._events||!this._events[t])return this
if(a=(n=this._events[t]).length,o=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e)
else if(i(n)){for(s=a;s-- >0;)if(n[s]===e||n[s].listener&&n[s].listener===e){o=s
break}if(o<0)return this
1===n.length?(n.length=0,delete this._events[t]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this
if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e)
return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[t]))this.removeListener(t,n)
else if(n)for(;n.length;)this.removeListener(t,n[n.length-1])
return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t]
if(r(e))return 1
if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){(e=t.exports=n(35)).Stream=e,e.Readable=e,e.Writable=n(44),e.Duplex=n(43),e.Transform=n(50),e.PassThrough=n(51)},function(t,e,n){(function(e){"use strict"
function r(t,e){v=v||n(43),t=t||{},this.objectMode=!!t.objectMode,e instanceof v&&(this.objectMode=this.objectMode||!!t.readableObjectMode)
var r=t.highWaterMark,i=this.objectMode?16:16384
this.highWaterMark=r||0===r?r:i,this.highWaterMark=~~this.highWaterMark,this.buffer=new E,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(P||(P=n(48).StringDecoder),this.decoder=new P(t.encoding),this.encoding=t.encoding)}function i(t){if(v=v||n(43),!(this instanceof i))return new i(t)
this._readableState=new r(t,this),this.readable=!0,t&&"function"==typeof t.read&&(this._read=t.read),x.call(this)}function o(t,e,n,r,i){var o,a,u,c,f,h,p=(o=e,a=n,u=null,_.isBuffer(a)||"string"==typeof a||null===a||void 0===a||o.objectMode||(u=new TypeError("Invalid non-string/buffer chunk")),u)
if(p)t.emit("error",p)
else if(null===n)e.reading=!1,function(t,e){if(!e.ended){if(e.decoder){var n=e.decoder.end()
n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,s(t)}}(t,e)
else if(e.objectMode||n&&n.length>0)if(e.ended&&!i){var d=new Error("stream.push() after EOF")
t.emit("error",d)}else if(e.endEmitted&&i){var g=new Error("stream.unshift() after end event")
t.emit("error",g)}else{var y
!e.decoder||i||r||(n=e.decoder.write(n),y=!e.objectMode&&0===n.length),i||(e.reading=!1),y||(e.flowing&&0===e.length&&!e.sync?(t.emit("data",n),t.read(0)):(e.length+=e.objectMode?1:n.length,i?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&s(t))),c=t,(f=e).readingMore||(f.readingMore=!0,b(l,c,f))}else i||(e.reading=!1)
return!(h=e).ended&&(h.needReadable||h.length<h.highWaterMark||0===h.length)}function a(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=((n=t)>=T?n=T:(n--,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n++),n)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))
var n}function s(t){var e=t._readableState
e.needReadable=!1,e.emittedReadable||(A("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?b(u,t):u(t))}function u(t){A("emit readable"),t.emit("readable"),h(t)}function l(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(A("maybeReadMore read 0"),t.read(0),n!==e.length);)n=e.length
e.readingMore=!1}function c(t){A("readable nexttick read 0"),t.read(0)}function f(t,e){e.reading||(A("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),h(t),e.flowing&&!e.reading&&t.read(0)}function h(t){var e=t._readableState
for(A("flow",e.flowing);e.flowing&&null!==t.read(););}function p(t,e){return 0===e.length?null:(e.objectMode?n=e.buffer.shift():!t||t>=e.length?(n=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):(r=t,i=e.buffer,o=e.decoder,r<i.head.data.length?(a=i.head.data.slice(0,r),i.head.data=i.head.data.slice(r)):a=r===i.head.data.length?i.shift():o?function(t,e){var n=e.head,r=1,i=n.data
for(t-=i.length;n=n.next;){var o=n.data,a=t>o.length?o.length:t
if(a===o.length?i+=o:i+=o.slice(0,t),0==(t-=a)){a===o.length?(++r,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=o.slice(a))
break}++r}return e.length-=r,i}(r,i):function(t,e){var n=k.allocUnsafe(t),r=e.head,i=1
for(r.data.copy(n),t-=r.data.length;r=r.next;){var o=r.data,a=t>o.length?o.length:t
if(o.copy(n,n.length-t,0,a),0==(t-=a)){a===o.length?(++i,r.next?e.head=r.next:e.head=e.tail=null):(e.head=r,r.data=o.slice(a))
break}++i}return e.length-=i,n}(r,i),n=a),n)
var n,r,i,o,a}function d(t){var e=t._readableState
if(e.length>0)throw new Error('"endReadable()" called on non-empty stream')
e.endEmitted||(e.ended=!0,b(g,e,t))}function g(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function y(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n
return-1}t.exports=i
var v,b=n(37),m=n(5)
i.ReadableState=r
var w=(n(32).EventEmitter,function(t,e){return t.listeners(e).length}),x=n(38),_=n(2).Buffer,k=n(39),S=n(40)
S.inherits=n(33)
var C=n(41),A=void 0
A=C&&C.debuglog?C.debuglog("stream"):function(){}
var P,E=n(42)
S.inherits(i,x)
var I=["error","close","destroy","pause","resume"]
i.prototype.push=function(t,e){var n=this._readableState
return n.objectMode||"string"!=typeof t||(e=e||n.defaultEncoding)!==n.encoding&&(t=k.from(t,e),e=""),o(this,n,t,e,!1)},i.prototype.unshift=function(t){return o(this,this._readableState,t,"",!0)},i.prototype.isPaused=function(){return!1===this._readableState.flowing},i.prototype.setEncoding=function(t){return P||(P=n(48).StringDecoder),this._readableState.decoder=new P(t),this._readableState.encoding=t,this}
var T=8388608
i.prototype.read=function(t){A("read",t),t=parseInt(t,10)
var e=this._readableState,n=t
if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return A("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?d(this):s(this),null
if(0===(t=a(t,e))&&e.ended)return 0===e.length&&d(this),null
var r,i=e.needReadable
return A("need readable",i),(0===e.length||e.length-t<e.highWaterMark)&&A("length less than watermark",i=!0),e.ended||e.reading?A("reading or ended",i=!1):i&&(A("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=a(n,e))),null===(r=t>0?p(t,e):null)?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),n!==t&&e.ended&&d(this)),null!==r&&this.emit("data",r),r},i.prototype._read=function(t){this.emit("error",new Error("_read() is not implemented"))},i.prototype.pipe=function(t,n){function r(t){A("onunpipe"),t===f&&o()}function i(){A("onend"),t.end()}function o(){A("cleanup"),t.removeListener("close",u),t.removeListener("finish",l),t.removeListener("drain",v),t.removeListener("error",s),t.removeListener("unpipe",r),f.removeListener("end",i),f.removeListener("end",o),f.removeListener("data",a),x=!0,!p.awaitDrain||t._writableState&&!t._writableState.needDrain||v()}function a(e){A("ondata"),_=!1,!1!==t.write(e)||_||((1===p.pipesCount&&p.pipes===t||p.pipesCount>1&&-1!==y(p.pipes,t))&&!x&&(A("false write response, pause",f._readableState.awaitDrain),f._readableState.awaitDrain++,_=!0),f.pause())}function s(e){A("onerror",e),c(),t.removeListener("error",s),0===w(t,"error")&&t.emit("error",e)}function u(){t.removeListener("finish",l),c()}function l(){A("onfinish"),t.removeListener("close",u),c()}function c(){A("unpipe"),f.unpipe(t)}var f=this,p=this._readableState
switch(p.pipesCount){case 0:p.pipes=t
break
case 1:p.pipes=[p.pipes,t]
break
default:p.pipes.push(t)}p.pipesCount+=1,A("pipe count=%d opts=%j",p.pipesCount,n)
var d=(!n||!1!==n.end)&&t!==e.stdout&&t!==e.stderr?i:o
p.endEmitted?b(d):f.once("end",d),t.on("unpipe",r)
var g,v=(g=f,function(){var t=g._readableState
A("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&w(g,"data")&&(t.flowing=!0,h(g))})
t.on("drain",v)
var x=!1,_=!1
return f.on("data",a),function(t,e,n){if("function"==typeof t.prependListener)return t.prependListener(e,n)
t._events&&t._events[e]?m(t._events[e])?t._events[e].unshift(n):t._events[e]=[n,t._events[e]]:t.on(e,n)}(t,"error",s),t.once("close",u),t.once("finish",l),t.emit("pipe",f),p.flowing||(A("pipe resume"),f.resume()),t},i.prototype.unpipe=function(t){var e=this._readableState
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this),this)
if(!t){var n=e.pipes,r=e.pipesCount
e.pipes=null,e.pipesCount=0,e.flowing=!1
for(var i=0;i<r;i++)n[i].emit("unpipe",this)
return this}var o=y(e.pipes,t)
return-1===o?this:(e.pipes.splice(o,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},i.prototype.on=function(t,e){var n=x.prototype.on.call(this,t,e)
if("data"===t)!1!==this._readableState.flowing&&this.resume()
else if("readable"===t){var r=this._readableState
r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&s(this):b(c,this))}return n},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){var t,e,n=this._readableState
return n.flowing||(A("resume"),n.flowing=!0,t=this,(e=n).resumeScheduled||(e.resumeScheduled=!0,b(f,t,e))),this},i.prototype.pause=function(){return A("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(A("pause"),this._readableState.flowing=!1,this.emit("pause")),this},i.prototype.wrap=function(t){var e=this._readableState,n=!1,r=this
t.on("end",function(){if(A("wrapped end"),e.decoder&&!e.ended){var t=e.decoder.end()
t&&t.length&&r.push(t)}r.push(null)}),t.on("data",function(i){A("wrapped data"),e.decoder&&(i=e.decoder.write(i)),(!e.objectMode||null!==i&&void 0!==i)&&(e.objectMode||i&&i.length)&&(r.push(i)||(n=!0,t.pause()))})
for(var i in t)void 0===this[i]&&"function"==typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i))
for(var o=0;o<I.length;o++)t.on(I[o],r.emit.bind(r,I[o]))
return r._read=function(e){A("wrapped _read",e),n&&(n=!1,t.resume())},r},i._fromList=p}).call(e,n(36))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0)
if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0)
try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(){d&&h&&(d=!1,h.length?p=h.concat(p):g=-1,p.length&&a())}function a(){if(!d){var t=i(o)
d=!0
for(var e=p.length;e;){for(h=p,p=[];++g<e;)h&&h[g].run()
g=-1,e=p.length}h=null,d=!1,function(t){if(c===clearTimeout)return clearTimeout(t)
if((c===r||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t)
try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function s(t,e){this.fun=t,this.array=e}function u(){}var l,c,f=t.exports={}
!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{c="function"==typeof clearTimeout?clearTimeout:r}catch(t){c=r}}()
var h,p=[],d=!1,g=-1
f.nextTick=function(t){var e=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n]
p.push(new s(t,e)),1!==p.length||d||i(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){(function(e){"use strict"
!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports=function(t,n,r,i){if("function"!=typeof t)throw new TypeError('"callback" argument must be a function')
var o,a,s=arguments.length
switch(s){case 0:case 1:return e.nextTick(t)
case 2:return e.nextTick(function(){t.call(null,n)})
case 3:return e.nextTick(function(){t.call(null,n,r)})
case 4:return e.nextTick(function(){t.call(null,n,r,i)})
default:for(o=new Array(s-1),a=0;a<o.length;)o[a++]=arguments[a]
return e.nextTick(function(){t.apply(null,o)})}}:t.exports=e.nextTick}).call(e,n(36))},function(t,e,n){t.exports=n(32).EventEmitter},function(t,e,n){(function(t){"use strict"
var r=n(2),i=r.Buffer,o=r.SlowBuffer,a=r.kMaxLength||2147483647
e.alloc=function(t,e,n){if("function"==typeof i.alloc)return i.alloc(t,e,n)
if("number"==typeof n)throw new TypeError("encoding must not be number")
if("number"!=typeof t)throw new TypeError("size must be a number")
if(t>a)throw new RangeError("size is too large")
var r=n,o=e
void 0===o&&(r=void 0,o=0)
var s=new i(t)
if("string"==typeof o)for(var u=new i(o,r),l=u.length,c=-1;++c<t;)s[c]=u[c%l]
else s.fill(o)
return s},e.allocUnsafe=function(t){if("function"==typeof i.allocUnsafe)return i.allocUnsafe(t)
if("number"!=typeof t)throw new TypeError("size must be a number")
if(t>a)throw new RangeError("size is too large")
return new i(t)},e.from=function(e,n,r){if("function"==typeof i.from&&(!t.Uint8Array||Uint8Array.from!==i.from))return i.from(e,n,r)
if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
if("string"==typeof e)return new i(e,n)
if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer){var o=n
if(1===arguments.length)return new i(e)
void 0===o&&(o=0)
var a=r
if(void 0===a&&(a=e.byteLength-o),o>=e.byteLength)throw new RangeError("'offset' is out of bounds")
if(a>e.byteLength-o)throw new RangeError("'length' is out of bounds")
return new i(e.slice(o,o+a))}if(i.isBuffer(e)){var s=new i(e.length)
return e.copy(s,0,0,e.length),s}if(e){if(Array.isArray(e)||"undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return new i(e)
if("Buffer"===e.type&&Array.isArray(e.data))return new i(e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")},e.allocUnsafeSlow=function(t){if("function"==typeof i.allocUnsafeSlow)return i.allocUnsafeSlow(t)
if("number"!=typeof t)throw new TypeError("size must be a number")
if(t>=a)throw new RangeError("size is too large")
return new o(t)}}).call(e,function(){return this}())},function(t,e,n){(function(t){function n(t){return Object.prototype.toString.call(t)}e.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===n(t)},e.isBoolean=function(t){return"boolean"==typeof t},e.isNull=function(t){return null===t},e.isNullOrUndefined=function(t){return null==t},e.isNumber=function(t){return"number"==typeof t},e.isString=function(t){return"string"==typeof t},e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=function(t){return void 0===t},e.isRegExp=function(t){return"[object RegExp]"===n(t)},e.isObject=function(t){return"object"==typeof t&&null!==t},e.isDate=function(t){return"[object Date]"===n(t)},e.isError=function(t){return"[object Error]"===n(t)||t instanceof Error},e.isFunction=function(t){return"function"==typeof t},e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=t.isBuffer}).call(e,n(2).Buffer)},function(t,e){},function(t,e,n){"use strict"
function r(){this.head=null,this.tail=null,this.length=0}var i=(n(2).Buffer,n(39))
t.exports=r,r.prototype.push=function(t){var e={data:t,next:null}
this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},r.prototype.unshift=function(t){var e={data:t,next:this.head}
0===this.length&&(this.tail=e),this.head=e,++this.length},r.prototype.shift=function(){if(0!==this.length){var t=this.head.data
return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},r.prototype.clear=function(){this.head=this.tail=null,this.length=0},r.prototype.join=function(t){if(0===this.length)return""
for(var e=this.head,n=""+e.data;e=e.next;)n+=t+e.data
return n},r.prototype.concat=function(t){if(0===this.length)return i.alloc(0)
if(1===this.length)return this.head.data
for(var e=i.allocUnsafe(t>>>0),n=this.head,r=0;n;)n.data.copy(e,r),r+=n.data.length,n=n.next
return e}},function(t,e,n){"use strict"
function r(t){if(!(this instanceof r))return new r(t)
l.call(this,t),c.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",i)}function i(){this.allowHalfOpen||this._writableState.ended||s(o,this)}function o(t){t.end()}var a=Object.keys||function(t){var e=[]
for(var n in t)e.push(n)
return e}
t.exports=r
var s=n(37),u=n(40)
u.inherits=n(33)
var l=n(35),c=n(44)
u.inherits(r,l)
for(var f=a(c.prototype),h=0;h<f.length;h++){var p=f[h]
r.prototype[p]||(r.prototype[p]=c.prototype[p])}},function(t,e,n){(function(e,r){"use strict"
function i(){}function o(t,e){g=g||n(43),t=t||{},this.objectMode=!!t.objectMode,e instanceof g&&(this.objectMode=this.objectMode||!!t.writableObjectMode)
var r=t.highWaterMark,i=this.objectMode?16:16384
this.highWaterMark=r||0===r?r:i,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var o=!1===t.decodeStrings
this.decodeStrings=!o,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){(function(t,e){var n=t._writableState,r=n.sync,i=n.writecb
if(d=n,d.writing=!1,d.writecb=null,d.length-=d.writelen,d.writelen=0,e)a=t,s=n,u=r,h=e,p=i,--s.pendingcb,u?y(p,h):p(h),a._writableState.errorEmitted=!0,a.emit("error",h)
else{var o=f(n)
o||n.corked||n.bufferProcessing||!n.bufferedRequest||c(t,n),r?v(l,t,n,o,i):l(t,n,o,i)}var a,s,u,h,p
var d})(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new d(this)}function a(t){if(g=g||n(43),!(m.call(a,this)||this instanceof g))return new a(t)
this._writableState=new o(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev)),x.call(this)}function s(t,e,n,r,i,o){var a,s,l
n||(s=r,l=i,(a=e).objectMode||!1===a.decodeStrings||"string"!=typeof s||(s=k.from(s,l)),r=s,_.isBuffer(r)&&(i="buffer"))
var c=e.objectMode?1:r.length
e.length+=c
var f=e.length<e.highWaterMark
if(f||(e.needDrain=!0),e.writing||e.corked){var h=e.lastBufferedRequest
e.lastBufferedRequest=new function(t,e,n){this.chunk=t,this.encoding=e,this.callback=n,this.next=null}(r,i,o),h?h.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else u(t,e,!1,c,r,i,o)
return f}function u(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function l(t,e,n,r){var i,o
n||(i=t,0===(o=e).length&&o.needDrain&&(o.needDrain=!1,i.emit("drain"))),e.pendingcb--,r(),p(t,e)}function c(t,e){e.bufferProcessing=!0
var n=e.bufferedRequest
if(t._writev&&n&&n.next){var r=e.bufferedRequestCount,i=new Array(r),o=e.corkedRequestsFree
o.entry=n
for(var a=0;n;)i[a]=n,n=n.next,a+=1
u(t,e,!0,e.length,i,"",o.finish),e.pendingcb++,e.lastBufferedRequest=null,o.next?(e.corkedRequestsFree=o.next,o.next=null):e.corkedRequestsFree=new d(e)}else{for(;n;){var s=n.chunk,l=n.encoding,c=n.callback
if(u(t,e,!1,e.objectMode?1:s.length,s,l,c),n=n.next,e.writing)break}null===n&&(e.lastBufferedRequest=null)}e.bufferedRequestCount=0,e.bufferedRequest=n,e.bufferProcessing=!1}function f(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function h(t,e){e.prefinished||(e.prefinished=!0,t.emit("prefinish"))}function p(t,e){var n=f(e)
return n&&(0===e.pendingcb?(h(t,e),e.finished=!0,t.emit("finish")):h(t,e)),n}function d(t){var e=this
this.next=null,this.entry=null,this.finish=function(n){var r=e.entry
for(e.entry=null;r;){var i=r.callback
t.pendingcb--,i(n),r=r.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}}t.exports=a
var g,y=n(37),v=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?r:y
a.WritableState=o
var b=n(40)
b.inherits=n(33)
var m,w={deprecate:n(47)},x=n(38),_=n(2).Buffer,k=n(39)
b.inherits(a,x),o.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next
return e},function(){try{Object.defineProperty(o.prototype,"buffer",{get:w.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(m=Function.prototype[Symbol.hasInstance],Object.defineProperty(a,Symbol.hasInstance,{value:function(t){return!!m.call(this,t)||t&&t._writableState instanceof o}})):m=function(t){return t instanceof this},a.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},a.prototype.write=function(t,e,n){var r,o,a,u,l,c,f,h,p,d=this._writableState,g=!1,v=_.isBuffer(t)
return"function"==typeof e&&(n=e,e=null),v?e="buffer":e||(e=d.defaultEncoding),"function"!=typeof n&&(n=i),d.ended?(f=this,h=n,p=new Error("write after end"),f.emit("error",p),y(h,p)):(v||(r=this,o=d,u=n,l=!0,c=!1,null===(a=t)?c=new TypeError("May not write null values to stream"):"string"==typeof a||void 0===a||o.objectMode||(c=new TypeError("Invalid non-string/buffer chunk")),c&&(r.emit("error",c),y(u,c),l=!1),l))&&(d.pendingcb++,g=s(this,d,v,t,e,n)),g},a.prototype.cork=function(){this._writableState.corked++},a.prototype.uncork=function(){var t=this._writableState
t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||c(this,t))},a.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t)
return this._writableState.defaultEncoding=t,this},a.prototype._write=function(t,e,n){n(new Error("_write() is not implemented"))},a.prototype._writev=null,a.prototype.end=function(t,e,n){var r,i,o,a=this._writableState
"function"==typeof t?(n=t,t=null,e=null):"function"==typeof e&&(n=e,e=null),null!==t&&void 0!==t&&this.write(t,e),a.corked&&(a.corked=1,this.uncork()),a.ending||a.finished||(r=this,o=n,(i=a).ending=!0,p(r,i),o&&(i.finished?y(o):r.once("finish",o)),i.ended=!0,r.writable=!1)}}).call(e,n(36),n(45).setImmediate)},function(t,e,n){function r(t,e){this._id=t,this._clearFn=e}var i=Function.prototype.apply
e.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId)
var e=t._idleTimeout
e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(46),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict"
function r(t){delete s[t]}function i(t){if(u)setTimeout(i,0,t)
else{var e=s[t]
if(e){u=!0
try{(function(t){var e=t.callback,r=t.args
switch(r.length){case 0:e()
break
case 1:e(r[0])
break
case 2:e(r[0],r[1])
break
case 3:e(r[0],r[1],r[2])
break
default:e.apply(n,r)}})(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var o,a=1,s={},u=!1,l=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t)
c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?o=function(t){e.nextTick(function(){i(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage
return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?(p="setImmediate$"+Math.random()+"$",d=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(p)&&i(+e.data.slice(p.length))},t.addEventListener?t.addEventListener("message",d,!1):t.attachEvent("onmessage",d),o=function(e){t.postMessage(p+e,"*")}):t.MessageChannel?((h=new MessageChannel).port1.onmessage=function(t){i(t.data)},o=function(t){h.port2.postMessage(t)}):l&&"onreadystatechange"in l.createElement("script")?(f=l.documentElement,o=function(t){var e=l.createElement("script")
e.onreadystatechange=function(){i(t),e.onreadystatechange=null,f.removeChild(e),e=null},f.appendChild(e)}):o=function(t){setTimeout(i,0,t)},c.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t))
for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1]
var r={callback:t,args:e}
return s[a]=r,o(a),a++},c.clearImmediate=r}var f,h,p,d}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,function(){return this}(),n(36))},function(t,e){(function(e){function n(t){try{if(!e.localStorage)return!1}catch(t){return!1}var n=e.localStorage[t]
return null!=n&&"true"===String(n).toLowerCase()}t.exports=function(t,e){if(n("noDeprecation"))return t
var r=!1
return function(){if(!r){if(n("throwDeprecation"))throw new Error(e)
n("traceDeprecation"),r=!0}return t.apply(this,arguments)}}}).call(e,function(){return this}())},function(t,e,n){"use strict"
function r(t){var e
switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8"
for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return t
default:if(e)return
t=(""+t).toLowerCase(),e=!0}}(t)
if("string"!=typeof e&&(h.isEncoding===p||!p(t)))throw new Error("Unknown encoding: "+t)
return e||t}(t),this.encoding){case"utf16le":this.text=a,this.end=s,e=4
break
case"utf8":this.fillLast=o,e=4
break
case"base64":this.text=u,this.end=l,e=3
break
default:return this.write=c,void(this.end=f)}this.lastNeed=0,this.lastTotal=0,this.lastChar=h.allocUnsafe(e)}function i(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:-1}function o(t){var e=this.lastTotal-this.lastNeed,n=function(t,e,n){if(128!=(192&e[0]))return t.lastNeed=0,"�".repeat(n)
if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�".repeat(n+1)
if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�".repeat(n+2)}}(this,t,e)
return void 0!==n?n:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function a(t,e){if((t.length-e)%2==0){var n=t.toString("utf16le",e)
if(n){var r=n.charCodeAt(n.length-1)
if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function s(t){var e=t&&t.length?this.write(t):""
if(this.lastNeed){var n=this.lastTotal-this.lastNeed
return e+this.lastChar.toString("utf16le",0,n)}return e}function u(t,e){var n=(t.length-e)%3
return 0===n?t.toString("base64",e):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-n))}function l(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function c(t){return t.toString(this.encoding)}function f(t){return t&&t.length?this.write(t):""}var h=n(49).Buffer,p=h.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
e.StringDecoder=r,r.prototype.write=function(t){if(0===t.length)return""
var e,n
if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return""
n=this.lastNeed,this.lastNeed=0}else n=0
return n<t.length?e?e+this.text(t,n):this.text(t,n):e||""},r.prototype.end=function(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+"�".repeat(this.lastTotal-this.lastNeed):e},r.prototype.text=function(t,e){var n=function(t,e,n){var r=e.length-1
if(r<n)return 0
var o=i(e[r])
return o>=0?(o>0&&(t.lastNeed=o-1),o):--r<n?0:(o=i(e[r]))>=0?(o>0&&(t.lastNeed=o-2),o):--r<n?0:(o=i(e[r]))>=0?(o>0&&(2===o?o=0:t.lastNeed=o-3),o):0}(this,t,e)
if(!this.lastNeed)return t.toString("utf8",e)
this.lastTotal=n
var r=t.length-(n-this.lastNeed)
return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)},r.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)
t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict"
function r(t){this.afterTransform=function(e,n){return function(t,e,n){var r=t._transformState
r.transforming=!1
var i=r.writecb
if(!i)return t.emit("error",new Error("no writecb in Transform class"))
r.writechunk=null,r.writecb=null,null!==n&&void 0!==n&&t.push(n),i(e)
var o=t._readableState
o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&t._read(o.highWaterMark)}(t,e,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function i(t){if(!(this instanceof i))return new i(t)
a.call(this,t),this._transformState=new r(this)
var e=this
this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(t,n){o(e,t,n)}):o(e)})}function o(t,e,n){if(e)return t.emit("error",e)
null!==n&&void 0!==n&&t.push(n)
var r=t._writableState,i=t._transformState
if(r.length)throw new Error("Calling transform done when ws.length != 0")
if(i.transforming)throw new Error("Calling transform done when still transforming")
return t.push(null)}t.exports=i
var a=n(43),s=n(40)
s.inherits=n(33),s.inherits(i,a),i.prototype.push=function(t,e){return this._transformState.needTransform=!1,a.prototype.push.call(this,t,e)},i.prototype._transform=function(t,e,n){throw new Error("_transform() is not implemented")},i.prototype._write=function(t,e,n){var r=this._transformState
if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},i.prototype._read=function(t){var e=this._transformState
null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0}},function(t,e,n){"use strict"
function r(t){if(!(this instanceof r))return new r(t)
i.call(this,t)}t.exports=r
var i=n(50),o=n(40)
o.inherits=n(33),o.inherits(r,i),r.prototype._transform=function(t,e,n){n(null,t)}},function(t,e,n){t.exports=n(44)},function(t,e,n){t.exports=n(43)},function(t,e,n){t.exports=n(34).Transform},function(t,e,n){t.exports=n(34).PassThrough},function(t,e,n){(function(e,n){"use strict"
function r(){this.fileSystem={},this.baseSystem={}}function i(t){return 0===t.indexOf(n)&&(t=t.substring(n.length)),0===t.indexOf("/")&&(t=t.substring(1)),t}r.prototype.readFileSync=function(t){t=i(t)
var n=this.baseSystem[t]
if(n)return new e(n,"base64")
var r=this.fileSystem[t]
if(r)return r
throw"File '"+t+"' not found in virtual file system"},r.prototype.writeFileSync=function(t,e){this.fileSystem[i(t)]=e},r.prototype.bindFS=function(t){this.baseSystem=t||{}},t.exports=new r}).call(e,n(2).Buffer,"/")},function(t,e,n){(function(e){(function(){var r,i
r=function(){function t(){}var n,r,o,a
return o=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},r=/[\n\r\t\b\f\(\)\\]/g,n={"\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","\\":"\\\\","(":"\\(",")":"\\)"},a=function(t){var e,n,r,i,o
if(1&(i=t.length))throw new Error("Buffer length must be even")
for(n=r=0,o=i-1;r<o;n=r+=2)e=t[n],t[n]=t[n+1],t[n+1]=e
return t},t.convert=function(s){var u,l,c,f,h,p,d,g,y
if("string"==typeof s)return"/"+s
if(s instanceof String){for(c=!1,l=f=0,d=(g=s.replace(r,function(t){return n[t]})).length;f<d;l=f+=1)if(g.charCodeAt(l)>127){c=!0
break}return c&&(g=a(new e("\ufeff"+g,"utf16le")).toString("binary")),"("+g+")"}if(e.isBuffer(s))return"<"+s.toString("hex")+">"
if(s instanceof i)return s.toString()
if(s instanceof Date)return"(D:"+o(s.getUTCFullYear(),4)+o(s.getUTCMonth()+1,2)+o(s.getUTCDate(),2)+o(s.getUTCHours(),2)+o(s.getUTCMinutes(),2)+o(s.getUTCSeconds(),2)+"Z)"
if(Array.isArray(s))return"["+function(){var e,n,r
for(r=[],e=0,n=s.length;e<n;e++)u=s[e],r.push(t.convert(u))
return r}().join(" ")+"]"
if("[object Object]"==={}.toString.call(s)){p=["<<"]
for(h in s)y=s[h],p.push("/"+h+" "+t.convert(y))
return p.push(">>"),p.join("\n")}return"number"==typeof s?t.number(s):""+s},t.number=function(t){if(t>-1e21&&t<1e21)return Math.round(1e6*t)/1e6
throw new Error("unsupported number: "+t)},t}(),t.exports=r,i=n(58)}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){(function(e){(function(){var r,i,o,a,s=function(t,e){return function(){return t.apply(e,arguments)}},u={}.hasOwnProperty
a=n(59),o=n(31),i=function(t){function n(t,e,r){this.document=t,this.id=e,this.data=null!=r?r:{},this.finalize=s(this.finalize,this),n.__super__.constructor.call(this,{decodeStrings:!1}),this.gen=0,this.deflate=null,this.compress=this.document.compress&&!this.data.Filter,this.uncompressedLength=0,this.chunks=[]}return function(t,e){function n(){this.constructor=t}for(var r in e)u.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(n,o.Writable),n.prototype.initDeflate=function(){return this.data.Filter="FlateDecode",this.deflate=a.createDeflate(),this.deflate.on("data",(t=this,function(e){return t.chunks.push(e),t.data.Length+=e.length})),this.deflate.on("end",this.finalize)
var t},n.prototype._write=function(t,n,r){var i
return e.isBuffer(t)||(t=new e(t+"\n","binary")),this.uncompressedLength+=t.length,null==(i=this.data).Length&&(i.Length=0),this.compress?(this.deflate||this.initDeflate(),this.deflate.write(t)):(this.chunks.push(t),this.data.Length+=t.length),r()},n.prototype.end=function(t){return n.__super__.end.apply(this,arguments),this.deflate?this.deflate.end():this.finalize()},n.prototype.finalize=function(){var t,e,n,i
if(this.offset=this.document._offset,this.document._write(this.id+" "+this.gen+" obj"),this.document._write(r.convert(this.data)),this.chunks.length){for(this.document._write("stream"),e=0,n=(i=this.chunks).length;e<n;e++)t=i[e],this.document._write(t)
this.chunks.length=0,this.document._write("\nendstream")}return this.document._write("endobj"),this.document._refEnd(this)},n.prototype.toString=function(){return this.id+" "+this.gen+" R"},n}(),t.exports=i,r=n(57)}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){(function(t,r){function i(e,n,r){function i(){for(var t;null!==(t=e.read());)a.push(t),s+=t.length
e.once("readable",i)}function o(){var n=t.concat(a,s)
a=[],r(null,n),e.close()}var a=[],s=0
e.on("error",function(t){e.removeListener("end",o),e.removeListener("readable",i),r(t)}),e.on("end",o),e.end(n),i()}function o(e,n){if("string"==typeof n&&(n=new t(n)),!t.isBuffer(n))throw new TypeError("Not a string or buffer")
var r=g.Z_FINISH
return e._processChunk(n,r)}function a(t){if(!(this instanceof a))return new a(t)
p.call(this,t,g.DEFLATE)}function s(t){if(!(this instanceof s))return new s(t)
p.call(this,t,g.INFLATE)}function u(t){if(!(this instanceof u))return new u(t)
p.call(this,t,g.GZIP)}function l(t){if(!(this instanceof l))return new l(t)
p.call(this,t,g.GUNZIP)}function c(t){if(!(this instanceof c))return new c(t)
p.call(this,t,g.DEFLATERAW)}function f(t){if(!(this instanceof f))return new f(t)
p.call(this,t,g.INFLATERAW)}function h(t){if(!(this instanceof h))return new h(t)
p.call(this,t,g.UNZIP)}function p(n,r){if(this._opts=n=n||{},this._chunkSize=n.chunkSize||e.Z_DEFAULT_CHUNK,d.call(this,n),n.flush&&n.flush!==g.Z_NO_FLUSH&&n.flush!==g.Z_PARTIAL_FLUSH&&n.flush!==g.Z_SYNC_FLUSH&&n.flush!==g.Z_FULL_FLUSH&&n.flush!==g.Z_FINISH&&n.flush!==g.Z_BLOCK)throw new Error("Invalid flush flag: "+n.flush)
if(this._flushFlag=n.flush||g.Z_NO_FLUSH,n.chunkSize&&(n.chunkSize<e.Z_MIN_CHUNK||n.chunkSize>e.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+n.chunkSize)
if(n.windowBits&&(n.windowBits<e.Z_MIN_WINDOWBITS||n.windowBits>e.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+n.windowBits)
if(n.level&&(n.level<e.Z_MIN_LEVEL||n.level>e.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+n.level)
if(n.memLevel&&(n.memLevel<e.Z_MIN_MEMLEVEL||n.memLevel>e.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+n.memLevel)
if(n.strategy&&n.strategy!=e.Z_FILTERED&&n.strategy!=e.Z_HUFFMAN_ONLY&&n.strategy!=e.Z_RLE&&n.strategy!=e.Z_FIXED&&n.strategy!=e.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+n.strategy)
if(n.dictionary&&!t.isBuffer(n.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance")
this._binding=new g.Zlib(r)
var i=this
this._hadError=!1,this._binding.onerror=function(t,n){i._binding=null,i._hadError=!0
var r=new Error(t)
r.errno=n,r.code=e.codes[n],i.emit("error",r)}
var o=e.Z_DEFAULT_COMPRESSION
"number"==typeof n.level&&(o=n.level)
var a=e.Z_DEFAULT_STRATEGY
"number"==typeof n.strategy&&(a=n.strategy),this._binding.init(n.windowBits||e.Z_DEFAULT_WINDOWBITS,o,n.memLevel||e.Z_DEFAULT_MEMLEVEL,a,n.dictionary),this._buffer=new t(this._chunkSize),this._offset=0,this._closed=!1,this._level=o,this._strategy=a,this.once("end",this.close)}var d=n(54),g=n(60),y=n(72),v=n(75).ok
g.Z_MIN_WINDOWBITS=8,g.Z_MAX_WINDOWBITS=15,g.Z_DEFAULT_WINDOWBITS=15,g.Z_MIN_CHUNK=64,g.Z_MAX_CHUNK=1/0,g.Z_DEFAULT_CHUNK=16384,g.Z_MIN_MEMLEVEL=1,g.Z_MAX_MEMLEVEL=9,g.Z_DEFAULT_MEMLEVEL=8,g.Z_MIN_LEVEL=-1,g.Z_MAX_LEVEL=9,g.Z_DEFAULT_LEVEL=g.Z_DEFAULT_COMPRESSION,Object.keys(g).forEach(function(t){t.match(/^Z/)&&(e[t]=g[t])}),e.codes={Z_OK:g.Z_OK,Z_STREAM_END:g.Z_STREAM_END,Z_NEED_DICT:g.Z_NEED_DICT,Z_ERRNO:g.Z_ERRNO,Z_STREAM_ERROR:g.Z_STREAM_ERROR,Z_DATA_ERROR:g.Z_DATA_ERROR,Z_MEM_ERROR:g.Z_MEM_ERROR,Z_BUF_ERROR:g.Z_BUF_ERROR,Z_VERSION_ERROR:g.Z_VERSION_ERROR},Object.keys(e.codes).forEach(function(t){e.codes[e.codes[t]]=t}),e.Deflate=a,e.Inflate=s,e.Gzip=u,e.Gunzip=l,e.DeflateRaw=c,e.InflateRaw=f,e.Unzip=h,e.createDeflate=function(t){return new a(t)},e.createInflate=function(t){return new s(t)},e.createDeflateRaw=function(t){return new c(t)},e.createInflateRaw=function(t){return new f(t)},e.createGzip=function(t){return new u(t)},e.createGunzip=function(t){return new l(t)},e.createUnzip=function(t){return new h(t)},e.deflate=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new a(e),t,n)},e.deflateSync=function(t,e){return o(new a(e),t)},e.gzip=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new u(e),t,n)},e.gzipSync=function(t,e){return o(new u(e),t)},e.deflateRaw=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new c(e),t,n)},e.deflateRawSync=function(t,e){return o(new c(e),t)},e.unzip=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new h(e),t,n)},e.unzipSync=function(t,e){return o(new h(e),t)},e.inflate=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new s(e),t,n)},e.inflateSync=function(t,e){return o(new s(e),t)},e.gunzip=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new l(e),t,n)},e.gunzipSync=function(t,e){return o(new l(e),t)},e.inflateRaw=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new f(e),t,n)},e.inflateRawSync=function(t,e){return o(new f(e),t)},y.inherits(p,d),p.prototype.params=function(t,n,i){if(t<e.Z_MIN_LEVEL||t>e.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+t)
if(n!=e.Z_FILTERED&&n!=e.Z_HUFFMAN_ONLY&&n!=e.Z_RLE&&n!=e.Z_FIXED&&n!=e.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+n)
if(this._level!==t||this._strategy!==n){var o=this
this.flush(g.Z_SYNC_FLUSH,function(){o._binding.params(t,n),o._hadError||(o._level=t,o._strategy=n,i&&i())})}else r.nextTick(i)},p.prototype.reset=function(){return this._binding.reset()},p.prototype._flush=function(e){this._transform(new t(0),"",e)},p.prototype.flush=function(e,n){var i=this._writableState
if(("function"==typeof e||void 0===e&&!n)&&(n=e,e=g.Z_FULL_FLUSH),i.ended)n&&r.nextTick(n)
else if(i.ending)n&&this.once("end",n)
else if(i.needDrain){var o=this
this.once("drain",function(){o.flush(n)})}else this._flushFlag=e,this.write(new t(0),"",n)},p.prototype.close=function(t){if(t&&r.nextTick(t),!this._closed){this._closed=!0,this._binding.close()
var e=this
r.nextTick(function(){e.emit("close")})}},p.prototype._transform=function(e,n,r){var i,o=this._writableState,a=(o.ending||o.ended)&&(!e||o.length===e.length)
if(null===!e&&!t.isBuffer(e))return r(new Error("invalid input"))
a?i=g.Z_FINISH:(i=this._flushFlag,e.length>=o.length&&(this._flushFlag=this._opts.flush||g.Z_NO_FLUSH)),this._processChunk(e,i,r)},p.prototype._processChunk=function(e,n,r){function i(c,p){if(!u._hadError){var d=a-p
if(v(d>=0,"have should not go down"),d>0){var g=u._buffer.slice(u._offset,u._offset+d)
u._offset+=d,l?u.push(g):(f.push(g),h+=g.length)}if((0===p||u._offset>=u._chunkSize)&&(a=u._chunkSize,u._offset=0,u._buffer=new t(u._chunkSize)),0===p){if(s+=o-c,o=c,!l)return!0
var y=u._binding.write(n,e,s,o,u._buffer,u._offset,u._chunkSize)
return y.callback=i,void(y.buffer=e)}if(!l)return!1
r()}}var o=e&&e.length,a=this._chunkSize-this._offset,s=0,u=this,l="function"==typeof r
if(!l){var c,f=[],h=0
this.on("error",function(t){c=t})
do{var p=this._binding.writeSync(n,e,s,o,this._buffer,this._offset,a)}while(!this._hadError&&i(p[0],p[1]))
if(this._hadError)throw c
var d=t.concat(f,h)
return this.close(),d}var g=this._binding.write(n,e,s,o,this._buffer,this._offset,a)
g.buffer=e,g.callback=i},y.inherits(a,p),y.inherits(s,p),y.inherits(u,p),y.inherits(l,p),y.inherits(c,p),y.inherits(f,p),y.inherits(h,p)}).call(e,n(2).Buffer,n(36))},function(t,e,n){(function(t,r){function i(t){if(t<e.DEFLATE||t>e.UNZIP)throw new TypeError("Bad argument")
this.mode=t,this.init_done=!1,this.write_in_progress=!1,this.pending_close=!1,this.windowBits=0,this.level=0,this.memLevel=0,this.strategy=0,this.dictionary=null}function o(t,e){for(var n=0;n<t.length;n++)this[e+n]=t[n]}var a=n(61),s=n(62),u=n(63),l=n(68),c=n(71)
for(var f in c)e[f]=c[f]
e.NONE=0,e.DEFLATE=1,e.INFLATE=2,e.GZIP=3,e.GUNZIP=4,e.DEFLATERAW=5,e.INFLATERAW=6,e.UNZIP=7,i.prototype.init=function(t,n,r,i,o){switch(this.windowBits=t,this.level=n,this.memLevel=r,this.strategy=i,this.mode!==e.GZIP&&this.mode!==e.GUNZIP||(this.windowBits+=16),this.mode===e.UNZIP&&(this.windowBits+=32),this.mode!==e.DEFLATERAW&&this.mode!==e.INFLATERAW||(this.windowBits=-this.windowBits),this.strm=new s,this.mode){case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:var a=u.deflateInit2(this.strm,this.level,e.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy)
break
case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:case e.UNZIP:a=l.inflateInit2(this.strm,this.windowBits)
break
default:throw new Error("Unknown mode "+this.mode)}a===e.Z_OK?(this.write_in_progress=!1,this.init_done=!0):this._error(a)},i.prototype.params=function(){throw new Error("deflateParams Not supported")},i.prototype._writeCheck=function(){if(!this.init_done)throw new Error("write before init")
if(this.mode===e.NONE)throw new Error("already finalized")
if(this.write_in_progress)throw new Error("write already in progress")
if(this.pending_close)throw new Error("close is pending")},i.prototype.write=function(e,n,r,i,o,a,s){this._writeCheck(),this.write_in_progress=!0
var u=this
return t.nextTick(function(){u.write_in_progress=!1
var t=u._write(e,n,r,i,o,a,s)
u.callback(t[0],t[1]),u.pending_close&&u.close()}),this},i.prototype.writeSync=function(t,e,n,r,i,o,a){return this._writeCheck(),this._write(t,e,n,r,i,o,a)},i.prototype._write=function(t,n,i,a,s,c,f){if(this.write_in_progress=!0,t!==e.Z_NO_FLUSH&&t!==e.Z_PARTIAL_FLUSH&&t!==e.Z_SYNC_FLUSH&&t!==e.Z_FULL_FLUSH&&t!==e.Z_FINISH&&t!==e.Z_BLOCK)throw new Error("Invalid flush value")
null==n&&(n=new r(0),a=0,i=0),s._set?s.set=s._set:s.set=o
var h=this.strm
switch(h.avail_in=a,h.input=n,h.next_in=i,h.avail_out=f,h.output=s,h.next_out=c,this.mode){case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:var p=u.deflate(h,t)
break
case e.UNZIP:case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:p=l.inflate(h,t)
break
default:throw new Error("Unknown mode "+this.mode)}return p!==e.Z_STREAM_END&&p!==e.Z_OK&&this._error(p),this.write_in_progress=!1,[h.avail_in,h.avail_out]},i.prototype.close=function(){this.write_in_progress?this.pending_close=!0:(this.pending_close=!1,this.mode===e.DEFLATE||this.mode===e.GZIP||this.mode===e.DEFLATERAW?u.deflateEnd(this.strm):l.inflateEnd(this.strm),this.mode=e.NONE)},i.prototype.reset=function(){switch(this.mode){case e.DEFLATE:case e.DEFLATERAW:var t=u.deflateReset(this.strm)
break
case e.INFLATE:case e.INFLATERAW:t=l.inflateReset(this.strm)}t!==e.Z_OK&&this._error(t)},i.prototype._error=function(t){this.onerror(a[t]+": "+this.strm.msg,t),this.write_in_progress=!1,this.pending_close&&this.close()},e.Zlib=i}).call(e,n(36),n(2).Buffer)},function(t,e){"use strict"
t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(t,e){"use strict"
t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},function(t,e,n){"use strict"
function r(t,e){return t.msg=k[e],e}function i(t){return(t<<1)-(t>4?9:0)}function o(t){for(var e=t.length;--e>=0;)t[e]=0}function a(t){var e=t.state,n=e.pending
n>t.avail_out&&(n=t.avail_out),0!==n&&(m.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function s(t,e){w._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,a(t.strm)}function u(t,e){t.pending_buf[t.pending++]=e}function l(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function c(t,e){var n,r,i=t.max_chain_length,o=t.strstart,a=t.prev_length,s=t.nice_match,u=t.strstart>t.w_size-Q?t.strstart-(t.w_size-Q):0,l=t.window,c=t.w_mask,f=t.prev,h=t.strstart+J,p=l[o+a-1],d=l[o+a]
t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead)
do{if(l[(n=e)+a]===d&&l[n+a-1]===p&&l[n]===l[o]&&l[++n]===l[o+1]){o+=2,n++
do{}while(l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&o<h)
if(r=J-(h-o),o=h-J,r>a){if(t.match_start=e,a=r,r>=s)break
p=l[o+a-1],d=l[o+a]}}}while((e=f[e&c])>u&&0!=--i)
return a<=t.lookahead?a:t.lookahead}function f(t){var e,n,r,i,o,a,s,u,l,c,f=t.w_size
do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-Q)){m.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=n=t.hash_size
do{r=t.head[--e],t.head[e]=r>=f?r-f:0}while(--n)
e=n=f
do{r=t.prev[--e],t.prev[e]=r>=f?r-f:0}while(--n)
i+=f}if(0===t.strm.avail_in)break
if(a=t.strm,s=t.window,u=t.strstart+t.lookahead,l=i,c=void 0,(c=a.avail_in)>l&&(c=l),n=0===c?0:(a.avail_in-=c,m.arraySet(s,a.input,a.next_in,c,u),1===a.state.wrap?a.adler=x(a.adler,s,c,u):2===a.state.wrap&&(a.adler=_(a.adler,s,c,u)),a.next_in+=c,a.total_in+=c,c),t.lookahead+=n,t.lookahead+t.insert>=K)for(o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+K-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<K)););}while(t.lookahead<Q&&0!==t.strm.avail_in)}function h(t,e){for(var n,r;;){if(t.lookahead<Q){if(f(t),t.lookahead<Q&&e===S)return st
if(0===t.lookahead)break}if(n=0,t.lookahead>=K&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+K-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-Q&&(t.match_length=c(t,n)),t.match_length>=K)if(r=w._tr_tally(t,t.strstart-t.match_start,t.match_length-K),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=K){t.match_length--
do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+K-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length)
t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask
else r=w._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++
if(r&&(s(t,!1),0===t.strm.avail_out))return st}return t.insert=t.strstart<K-1?t.strstart:K-1,e===P?(s(t,!0),0===t.strm.avail_out?lt:ct):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?st:ut}function p(t,e){for(var n,r,i;;){if(t.lookahead<Q){if(f(t),t.lookahead<Q&&e===S)return st
if(0===t.lookahead)break}if(n=0,t.lookahead>=K&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+K-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=K-1,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-Q&&(t.match_length=c(t,n),t.match_length<=5&&(t.strategy===M||t.match_length===K&&t.strstart-t.match_start>4096)&&(t.match_length=K-1)),t.prev_length>=K&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-K,r=w._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-K),t.lookahead-=t.prev_length-1,t.prev_length-=2
do{++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+K-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length)
if(t.match_available=0,t.match_length=K-1,t.strstart++,r&&(s(t,!1),0===t.strm.avail_out))return st}else if(t.match_available){if((r=w._tr_tally(t,0,t.window[t.strstart-1]))&&s(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return st}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=w._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<K-1?t.strstart:K-1,e===P?(s(t,!0),0===t.strm.avail_out?lt:ct):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?st:ut}function d(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}function g(t){var e
return t&&t.state?(t.total_in=t.total_out=0,t.data_type=U,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?tt:ot,t.adler=2===e.wrap?0:1,e.last_flush=S,w._tr_init(e),I):r(t,O)}function y(t){var e,n=g(t)
return n===I&&((e=t.state).window_size=2*e.w_size,o(e.head),e.max_lazy_match=b[e.level].max_lazy,e.good_match=b[e.level].good_length,e.nice_match=b[e.level].nice_length,e.max_chain_length=b[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=K-1,e.match_available=0,e.ins_h=0),n}function v(t,e,n,i,a,s){if(!t)return O
var u=1
if(e===R&&(e=6),i<0?(u=0,i=-i):i>15&&(u=2,i-=16),a<1||a>j||n!==W||i<8||i>15||e<0||e>9||s<0||s>D)return r(t,O)
8===i&&(i=9)
var l=new function(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=W,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new m.Buf16(2*Y),this.dyn_dtree=new m.Buf16(2*(2*q+1)),this.bl_tree=new m.Buf16(2*(2*Z+1)),o(this.dyn_ltree),o(this.dyn_dtree),o(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new m.Buf16(X+1),this.heap=new m.Buf16(2*H+1),o(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new m.Buf16(2*H+1),o(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}
return t.state=l,l.strm=t,l.wrap=u,l.gzhead=null,l.w_bits=i,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=a+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+K-1)/K),l.window=new m.Buf8(2*l.w_size),l.head=new m.Buf16(l.hash_size),l.prev=new m.Buf16(l.w_size),l.lit_bufsize=1<<a+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new m.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=n,y(t)}var b,m=n(64),w=n(65),x=n(66),_=n(67),k=n(61),S=0,C=1,A=3,P=4,E=5,I=0,T=1,O=-2,B=-3,L=-5,R=-1,M=1,F=2,z=3,D=4,N=0,U=2,W=8,j=9,G=15,V=8,H=286,q=30,Z=19,Y=2*H+1,X=15,K=3,J=258,Q=J+K+1,$=32,tt=42,et=69,nt=73,rt=91,it=103,ot=113,at=666,st=1,ut=2,lt=3,ct=4,ft=3
b=[new d(0,0,0,0,function(t,e){var n=65535
for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(f(t),0===t.lookahead&&e===S)return st
if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0
var r=t.block_start+n
if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,t.strstart=r,s(t,!1),0===t.strm.avail_out))return st
if(t.strstart-t.block_start>=t.w_size-Q&&(s(t,!1),0===t.strm.avail_out))return st}return t.insert=0,e===P?(s(t,!0),0===t.strm.avail_out?lt:ct):(t.strstart>t.block_start&&(s(t,!1),t.strm.avail_out),st)}),new d(4,4,8,4,h),new d(4,5,16,8,h),new d(4,6,32,32,h),new d(4,4,16,16,p),new d(8,16,32,32,p),new d(8,16,128,128,p),new d(8,32,128,256,p),new d(32,128,258,1024,p),new d(32,258,258,4096,p)],e.deflateInit=function(t,e){return v(t,e,W,G,V,N)},e.deflateInit2=v,e.deflateReset=y,e.deflateResetKeep=g,e.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?O:(t.state.gzhead=e,I):O},e.deflate=function(t,e){var n,c,h,p
if(!t||!t.state||e>E||e<0)return t?r(t,O):O
if(c=t.state,!t.output||!t.input&&0!==t.avail_in||c.status===at&&e!==P)return r(t,0===t.avail_out?L:O)
if(c.strm=t,n=c.last_flush,c.last_flush=e,c.status===tt)if(2===c.wrap)t.adler=0,u(c,31),u(c,139),u(c,8),c.gzhead?(u(c,(c.gzhead.text?1:0)+(c.gzhead.hcrc?2:0)+(c.gzhead.extra?4:0)+(c.gzhead.name?8:0)+(c.gzhead.comment?16:0)),u(c,255&c.gzhead.time),u(c,c.gzhead.time>>8&255),u(c,c.gzhead.time>>16&255),u(c,c.gzhead.time>>24&255),u(c,9===c.level?2:c.strategy>=F||c.level<2?4:0),u(c,255&c.gzhead.os),c.gzhead.extra&&c.gzhead.extra.length&&(u(c,255&c.gzhead.extra.length),u(c,c.gzhead.extra.length>>8&255)),c.gzhead.hcrc&&(t.adler=_(t.adler,c.pending_buf,c.pending,0)),c.gzindex=0,c.status=et):(u(c,0),u(c,0),u(c,0),u(c,0),u(c,0),u(c,9===c.level?2:c.strategy>=F||c.level<2?4:0),u(c,ft),c.status=ot)
else{var d=W+(c.w_bits-8<<4)<<8
d|=(c.strategy>=F||c.level<2?0:c.level<6?1:6===c.level?2:3)<<6,0!==c.strstart&&(d|=$),d+=31-d%31,c.status=ot,l(c,d),0!==c.strstart&&(l(c,t.adler>>>16),l(c,65535&t.adler)),t.adler=1}if(c.status===et)if(c.gzhead.extra){for(h=c.pending;c.gzindex<(65535&c.gzhead.extra.length)&&(c.pending!==c.pending_buf_size||(c.gzhead.hcrc&&c.pending>h&&(t.adler=_(t.adler,c.pending_buf,c.pending-h,h)),a(t),h=c.pending,c.pending!==c.pending_buf_size));)u(c,255&c.gzhead.extra[c.gzindex]),c.gzindex++
c.gzhead.hcrc&&c.pending>h&&(t.adler=_(t.adler,c.pending_buf,c.pending-h,h)),c.gzindex===c.gzhead.extra.length&&(c.gzindex=0,c.status=nt)}else c.status=nt
if(c.status===nt)if(c.gzhead.name){h=c.pending
do{if(c.pending===c.pending_buf_size&&(c.gzhead.hcrc&&c.pending>h&&(t.adler=_(t.adler,c.pending_buf,c.pending-h,h)),a(t),h=c.pending,c.pending===c.pending_buf_size)){p=1
break}p=c.gzindex<c.gzhead.name.length?255&c.gzhead.name.charCodeAt(c.gzindex++):0,u(c,p)}while(0!==p)
c.gzhead.hcrc&&c.pending>h&&(t.adler=_(t.adler,c.pending_buf,c.pending-h,h)),0===p&&(c.gzindex=0,c.status=rt)}else c.status=rt
if(c.status===rt)if(c.gzhead.comment){h=c.pending
do{if(c.pending===c.pending_buf_size&&(c.gzhead.hcrc&&c.pending>h&&(t.adler=_(t.adler,c.pending_buf,c.pending-h,h)),a(t),h=c.pending,c.pending===c.pending_buf_size)){p=1
break}p=c.gzindex<c.gzhead.comment.length?255&c.gzhead.comment.charCodeAt(c.gzindex++):0,u(c,p)}while(0!==p)
c.gzhead.hcrc&&c.pending>h&&(t.adler=_(t.adler,c.pending_buf,c.pending-h,h)),0===p&&(c.status=it)}else c.status=it
if(c.status===it&&(c.gzhead.hcrc?(c.pending+2>c.pending_buf_size&&a(t),c.pending+2<=c.pending_buf_size&&(u(c,255&t.adler),u(c,t.adler>>8&255),t.adler=0,c.status=ot)):c.status=ot),0!==c.pending){if(a(t),0===t.avail_out)return c.last_flush=-1,I}else if(0===t.avail_in&&i(e)<=i(n)&&e!==P)return r(t,L)
if(c.status===at&&0!==t.avail_in)return r(t,L)
if(0!==t.avail_in||0!==c.lookahead||e!==S&&c.status!==at){var g=c.strategy===F?function(t,e){for(var n;;){if(0===t.lookahead&&(f(t),0===t.lookahead)){if(e===S)return st
break}if(t.match_length=0,n=w._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(s(t,!1),0===t.strm.avail_out))return st}return t.insert=0,e===P?(s(t,!0),0===t.strm.avail_out?lt:ct):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?st:ut}(c,e):c.strategy===z?function(t,e){for(var n,r,i,o,a=t.window;;){if(t.lookahead<=J){if(f(t),t.lookahead<=J&&e===S)return st
if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=K&&t.strstart>0&&(r=a[i=t.strstart-1])===a[++i]&&r===a[++i]&&r===a[++i]){o=t.strstart+J
do{}while(r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&i<o)
t.match_length=J-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=K?(n=w._tr_tally(t,1,t.match_length-K),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=w._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(s(t,!1),0===t.strm.avail_out))return st}return t.insert=0,e===P?(s(t,!0),0===t.strm.avail_out?lt:ct):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?st:ut}(c,e):b[c.level].func(c,e)
if(g!==lt&&g!==ct||(c.status=at),g===st||g===lt)return 0===t.avail_out&&(c.last_flush=-1),I
if(g===ut&&(e===C?w._tr_align(c):e!==E&&(w._tr_stored_block(c,0,0,!1),e===A&&(o(c.head),0===c.lookahead&&(c.strstart=0,c.block_start=0,c.insert=0))),a(t),0===t.avail_out))return c.last_flush=-1,I}return e!==P?I:c.wrap<=0?T:(2===c.wrap?(u(c,255&t.adler),u(c,t.adler>>8&255),u(c,t.adler>>16&255),u(c,t.adler>>24&255),u(c,255&t.total_in),u(c,t.total_in>>8&255),u(c,t.total_in>>16&255),u(c,t.total_in>>24&255)):(l(c,t.adler>>>16),l(c,65535&t.adler)),a(t),c.wrap>0&&(c.wrap=-c.wrap),0!==c.pending?I:T)},e.deflateEnd=function(t){var e
return t&&t.state?(e=t.state.status)!==tt&&e!==et&&e!==nt&&e!==rt&&e!==it&&e!==ot&&e!==at?r(t,O):(t.state=null,e===ot?r(t,B):I):O},e.deflateSetDictionary=function(t,e){var n,r,i,a,s,u,l,c,h=e.length
if(!t||!t.state)return O
if(2===(a=(n=t.state).wrap)||1===a&&n.status!==tt||n.lookahead)return O
for(1===a&&(t.adler=x(t.adler,e,h,0)),n.wrap=0,h>=n.w_size&&(0===a&&(o(n.head),n.strstart=0,n.block_start=0,n.insert=0),c=new m.Buf8(n.w_size),m.arraySet(c,e,h-n.w_size,n.w_size,0),e=c,h=n.w_size),s=t.avail_in,u=t.next_in,l=t.input,t.avail_in=h,t.next_in=0,t.input=e,f(n);n.lookahead>=K;){r=n.strstart,i=n.lookahead-(K-1)
do{n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+K-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++}while(--i)
n.strstart=r,n.lookahead=K-1,f(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=K-1,n.match_available=0,t.next_in=u,t.input=l,t.avail_in=s,n.wrap=a,I},e.deflateInfo="pako deflate (from Nodeca project)"},function(t,e){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array
e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift()
if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object")
for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)}
var r={arraySet:function(t,e,n,r,i){if(e.subarray&&t.subarray)t.set(e.subarray(n,n+r),i)
else for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){var e,n,r,i,o,a
for(r=0,e=0,n=t.length;e<n;e++)r+=t[e].length
for(a=new Uint8Array(r),i=0,e=0,n=t.length;e<n;e++)o=t[e],a.set(o,i),i+=o.length
return a}},i={arraySet:function(t,e,n,r,i){for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)}}
e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,r)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,i))},e.setTyped(n)},function(t,e,n){"use strict"
function r(t){for(var e=t.length;--e>=0;)t[e]=0}function i(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=t&&t.length}function o(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function a(t){return t<256?Y[t]:Y[256+(t>>>7)]}function s(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function u(t,e,n){t.bi_valid>F-n?(t.bi_buf|=e<<t.bi_valid&65535,s(t,t.bi_buf),t.bi_buf=e>>F-t.bi_valid,t.bi_valid+=n-F):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function l(t,e,n){u(t,n[2*e],n[2*e+1])}function c(t,e){var n=0
do{n|=1&t,t>>>=1,n<<=1}while(--e>0)
return n>>>1}function f(t,e,n){var r,i,o=new Array(M+1),a=0
for(r=1;r<=M;r++)o[r]=a=a+n[r-1]<<1
for(i=0;i<=e;i++){var s=t[2*i+1]
0!==s&&(t[2*i]=c(o[s]++,s))}}function h(t){var e
for(e=0;e<O;e++)t.dyn_ltree[2*e]=0
for(e=0;e<B;e++)t.dyn_dtree[2*e]=0
for(e=0;e<L;e++)t.bl_tree[2*e]=0
t.dyn_ltree[2*D]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function p(t){t.bi_valid>8?s(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function d(t,e,n,r){var i=2*e,o=2*n
return t[i]<t[o]||t[i]===t[o]&&r[e]<=r[n]}function g(t,e,n){for(var r=t.heap[n],i=n<<1;i<=t.heap_len&&(i<t.heap_len&&d(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!d(e,r,t.heap[i],t.depth));)t.heap[n]=t.heap[i],n=i,i<<=1
t.heap[n]=r}function y(t,e,n){var r,i,o,s,c=0
if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*c]<<8|t.pending_buf[t.d_buf+2*c+1],i=t.pending_buf[t.l_buf+c],c++,0===r?l(t,i,e):(l(t,(o=X[i])+T+1,e),0!==(s=j[o])&&u(t,i-=K[o],s),l(t,o=a(--r),n),0!==(s=G[o])&&u(t,r-=J[o],s))}while(c<t.last_lit)
l(t,D,e)}function v(t,e){var n,r,i,o=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,u=e.stat_desc.elems,l=-1
for(t.heap_len=0,t.heap_max=R,n=0;n<u;n++)0!==o[2*n]?(t.heap[++t.heap_len]=l=n,t.depth[n]=0):o[2*n+1]=0
for(;t.heap_len<2;)i=t.heap[++t.heap_len]=l<2?++l:0,o[2*i]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=a[2*i+1])
for(e.max_code=l,n=t.heap_len>>1;n>=1;n--)g(t,o,n)
i=u
do{n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],g(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,o[2*i]=o[2*n]+o[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,o[2*n+1]=o[2*r+1]=i,t.heap[1]=i++,g(t,o,1)}while(t.heap_len>=2)
t.heap[--t.heap_max]=t.heap[1],function(t,e){var n,r,i,o,a,s,u=e.dyn_tree,l=e.max_code,c=e.stat_desc.static_tree,f=e.stat_desc.has_stree,h=e.stat_desc.extra_bits,p=e.stat_desc.extra_base,d=e.stat_desc.max_length,g=0
for(o=0;o<=M;o++)t.bl_count[o]=0
for(u[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<R;n++)r=t.heap[n],o=u[2*u[2*r+1]+1]+1,o>d&&(o=d,g++),u[2*r+1]=o,r>l||(t.bl_count[o]++,a=0,r>=p&&(a=h[r-p]),s=u[2*r],t.opt_len+=s*(o+a),f&&(t.static_len+=s*(c[2*r+1]+a)))
if(0!==g){do{for(o=d-1;0===t.bl_count[o];)o--
t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[d]--,g-=2}while(g>0)
for(o=d;0!==o;o--)for(r=t.bl_count[o];0!==r;)(i=t.heap[--n])>l||(u[2*i+1]!==o&&(t.opt_len+=(o-u[2*i+1])*u[2*i],u[2*i+1]=o),r--)}}(t,e),f(o,l,t.bl_count)}function b(t,e,n){var r,i,o=-1,a=e[1],s=0,u=7,l=4
for(0===a&&(u=138,l=3),e[2*(n+1)+1]=65535,r=0;r<=n;r++)i=a,a=e[2*(r+1)+1],++s<u&&i===a||(s<l?t.bl_tree[2*i]+=s:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[2*N]++):s<=10?t.bl_tree[2*U]++:t.bl_tree[2*W]++,s=0,o=i,0===a?(u=138,l=3):i===a?(u=6,l=3):(u=7,l=4))}function m(t,e,n){var r,i,o=-1,a=e[1],s=0,c=7,f=4
for(0===a&&(c=138,f=3),r=0;r<=n;r++)if(i=a,a=e[2*(r+1)+1],!(++s<c&&i===a)){if(s<f)do{l(t,i,t.bl_tree)}while(0!=--s)
else 0!==i?(i!==o&&(l(t,i,t.bl_tree),s--),l(t,N,t.bl_tree),u(t,s-3,2)):s<=10?(l(t,U,t.bl_tree),u(t,s-3,3)):(l(t,W,t.bl_tree),u(t,s-11,7))
s=0,o=i,0===a?(c=138,f=3):i===a?(c=6,f=3):(c=7,f=4)}}function w(t,e,n,r){var i,o,a,l
u(t,(A<<1)+(r?1:0),3),o=e,a=n,l=!0,p(i=t),l&&(s(i,a),s(i,~a)),x.arraySet(i.pending_buf,i.window,o,a,i.pending),i.pending+=a}var x=n(64),_=4,k=0,S=1,C=2,A=0,P=1,E=2,I=29,T=256,O=T+1+I,B=30,L=19,R=2*O+1,M=15,F=16,z=7,D=256,N=16,U=17,W=18,j=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],V=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],q=new Array(2*(O+2))
r(q)
var Z=new Array(2*B)
r(Z)
var Y=new Array(512)
r(Y)
var X=new Array(256)
r(X)
var K=new Array(I)
r(K)
var J=new Array(B)
r(J)
var Q,$,tt,et=!1
e._tr_init=function(t){et||(function(){var t,e,n,r,o,a=new Array(M+1)
for(n=0,r=0;r<I-1;r++)for(K[r]=n,t=0;t<1<<j[r];t++)X[n++]=r
for(X[n-1]=r,o=0,r=0;r<16;r++)for(J[r]=o,t=0;t<1<<G[r];t++)Y[o++]=r
for(o>>=7;r<B;r++)for(J[r]=o<<7,t=0;t<1<<G[r]-7;t++)Y[256+o++]=r
for(e=0;e<=M;e++)a[e]=0
for(t=0;t<=143;)q[2*t+1]=8,t++,a[8]++
for(;t<=255;)q[2*t+1]=9,t++,a[9]++
for(;t<=279;)q[2*t+1]=7,t++,a[7]++
for(;t<=287;)q[2*t+1]=8,t++,a[8]++
for(f(q,O+1,a),t=0;t<B;t++)Z[2*t+1]=5,Z[2*t]=c(t,5)
Q=new i(q,j,T+1,O,M),$=new i(Z,G,0,B,M),tt=new i(new Array(0),V,0,L,z)}(),et=!0),t.l_desc=new o(t.dyn_ltree,Q),t.d_desc=new o(t.dyn_dtree,$),t.bl_desc=new o(t.bl_tree,tt),t.bi_buf=0,t.bi_valid=0,h(t)},e._tr_stored_block=w,e._tr_flush_block=function(t,e,n,r){var i,o,a=0
t.level>0?(t.strm.data_type===C&&(t.strm.data_type=function(t){var e,n=4093624447
for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return k
if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return S
for(e=32;e<T;e++)if(0!==t.dyn_ltree[2*e])return S
return k}(t)),v(t,t.l_desc),v(t,t.d_desc),a=function(t){var e
for(b(t,t.dyn_ltree,t.l_desc.max_code),b(t,t.dyn_dtree,t.d_desc.max_code),v(t,t.bl_desc),e=L-1;e>=3&&0===t.bl_tree[2*H[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(o=t.static_len+3+7>>>3)<=i&&(i=o)):i=o=n+5,n+4<=i&&-1!==e?w(t,e,n,r):t.strategy===_||o===i?(u(t,(P<<1)+(r?1:0),3),y(t,q,Z)):(u(t,(E<<1)+(r?1:0),3),function(t,e,n,r){var i
for(u(t,e-257,5),u(t,n-1,5),u(t,r-4,4),i=0;i<r;i++)u(t,t.bl_tree[2*H[i]+1],3)
m(t,t.dyn_ltree,e-1),m(t,t.dyn_dtree,n-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),y(t,t.dyn_ltree,t.dyn_dtree)),h(t),r&&p(t)},e._tr_tally=function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(X[n]+T+1)]++,t.dyn_dtree[2*a(e)]++),t.last_lit===t.lit_bufsize-1},e._tr_align=function(t){var e
u(t,P<<1,3),l(t,D,q),16===(e=t).bi_valid?(s(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}},function(t,e){"use strict"
t.exports=function(t,e,n,r){for(var i=65535&t|0,o=t>>>16&65535|0,a=0;0!==n;){n-=a=n>2e3?2e3:n
do{o=o+(i=i+e[r++]|0)|0}while(--a)
i%=65521,o%=65521}return i|o<<16|0}},function(t,e){"use strict"
var n=function(){for(var t,e=[],n=0;n<256;n++){t=n
for(var r=0;r<8;r++)t=1&t?3988292384^t>>>1:t>>>1
e[n]=t}return e}()
t.exports=function(t,e,r,i){var o=n,a=i+r
t^=-1
for(var s=i;s<a;s++)t=t>>>8^o[255&(t^e[s])]
return-1^t}},function(t,e,n){"use strict"
function r(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function i(t){var e
return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=O,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new h.Buf32(lt),e.distcode=e.distdyn=new h.Buf32(ct),e.sane=1,e.back=-1,k):A}function o(t){var e
return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,i(t)):A}function a(t,e){var n,r
return t&&t.state?(r=t.state,e<0?(n=0,e=-e):(n=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?A:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,o(t))):A}function s(t,e){var n,r
return t?(r=new function(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new h.Buf16(320),this.work=new h.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0},t.state=r,r.window=null,(n=a(t,e))!==k&&(t.state=null),n):A}function u(t){if(ht){var e
for(c=new h.Buf32(512),f=new h.Buf32(32),e=0;e<144;)t.lens[e++]=8
for(;e<256;)t.lens[e++]=9
for(;e<280;)t.lens[e++]=7
for(;e<288;)t.lens[e++]=8
for(y(b,t.lens,0,288,c,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5
y(m,t.lens,0,32,f,0,t.work,{bits:5}),ht=!1}t.lencode=c,t.lenbits=9,t.distcode=f,t.distbits=5}function l(t,e,n,r){var i,o=t.state
return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new h.Buf8(o.wsize)),r>=o.wsize?(h.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>r&&(i=r),h.arraySet(o.window,e,n-r,i,o.wnext),(r-=i)?(h.arraySet(o.window,e,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}var c,f,h=n(64),p=n(66),d=n(67),g=n(69),y=n(70),v=0,b=1,m=2,w=4,x=5,_=6,k=0,S=1,C=2,A=-2,P=-3,E=-4,I=-5,T=8,O=1,B=2,L=3,R=4,M=5,F=6,z=7,D=8,N=9,U=10,W=11,j=12,G=13,V=14,H=15,q=16,Z=17,Y=18,X=19,K=20,J=21,Q=22,$=23,tt=24,et=25,nt=26,rt=27,it=28,ot=29,at=30,st=31,ut=32,lt=852,ct=592,ft=15,ht=!0
e.inflateReset=o,e.inflateReset2=a,e.inflateResetKeep=i,e.inflateInit=function(t){return s(t,ft)},e.inflateInit2=s,e.inflate=function(t,e){var n,i,o,a,s,c,f,lt,ct,ft,ht,pt,dt,gt,yt,vt,bt,mt,wt,xt,_t,kt,St,Ct,At=0,Pt=new h.Buf8(4),Et=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return A;(n=t.state).mode===j&&(n.mode=G),s=t.next_out,o=t.output,f=t.avail_out,a=t.next_in,i=t.input,c=t.avail_in,lt=n.hold,ct=n.bits,ft=c,ht=f,kt=k
t:for(;;)switch(n.mode){case O:if(0===n.wrap){n.mode=G
break}for(;ct<16;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(2&n.wrap&&35615===lt){n.check=0,Pt[0]=255&lt,Pt[1]=lt>>>8&255,n.check=d(n.check,Pt,2,0),lt=0,ct=0,n.mode=B
break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&lt)<<8)+(lt>>8))%31){t.msg="incorrect header check",n.mode=at
break}if((15&lt)!==T){t.msg="unknown compression method",n.mode=at
break}if(ct-=4,_t=8+(15&(lt>>>=4)),0===n.wbits)n.wbits=_t
else if(_t>n.wbits){t.msg="invalid window size",n.mode=at
break}n.dmax=1<<_t,t.adler=n.check=1,n.mode=512&lt?U:j,lt=0,ct=0
break
case B:for(;ct<16;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(n.flags=lt,(255&n.flags)!==T){t.msg="unknown compression method",n.mode=at
break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=at
break}n.head&&(n.head.text=lt>>8&1),512&n.flags&&(Pt[0]=255&lt,Pt[1]=lt>>>8&255,n.check=d(n.check,Pt,2,0)),lt=0,ct=0,n.mode=L
case L:for(;ct<32;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}n.head&&(n.head.time=lt),512&n.flags&&(Pt[0]=255&lt,Pt[1]=lt>>>8&255,Pt[2]=lt>>>16&255,Pt[3]=lt>>>24&255,n.check=d(n.check,Pt,4,0)),lt=0,ct=0,n.mode=R
case R:for(;ct<16;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}n.head&&(n.head.xflags=255&lt,n.head.os=lt>>8),512&n.flags&&(Pt[0]=255&lt,Pt[1]=lt>>>8&255,n.check=d(n.check,Pt,2,0)),lt=0,ct=0,n.mode=M
case M:if(1024&n.flags){for(;ct<16;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}n.length=lt,n.head&&(n.head.extra_len=lt),512&n.flags&&(Pt[0]=255&lt,Pt[1]=lt>>>8&255,n.check=d(n.check,Pt,2,0)),lt=0,ct=0}else n.head&&(n.head.extra=null)
n.mode=F
case F:if(1024&n.flags&&((pt=n.length)>c&&(pt=c),pt&&(n.head&&(_t=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),h.arraySet(n.head.extra,i,a,pt,_t)),512&n.flags&&(n.check=d(n.check,i,pt,a)),c-=pt,a+=pt,n.length-=pt),n.length))break t
n.length=0,n.mode=z
case z:if(2048&n.flags){if(0===c)break t
pt=0
do{_t=i[a+pt++],n.head&&_t&&n.length<65536&&(n.head.name+=String.fromCharCode(_t))}while(_t&&pt<c)
if(512&n.flags&&(n.check=d(n.check,i,pt,a)),c-=pt,a+=pt,_t)break t}else n.head&&(n.head.name=null)
n.length=0,n.mode=D
case D:if(4096&n.flags){if(0===c)break t
pt=0
do{_t=i[a+pt++],n.head&&_t&&n.length<65536&&(n.head.comment+=String.fromCharCode(_t))}while(_t&&pt<c)
if(512&n.flags&&(n.check=d(n.check,i,pt,a)),c-=pt,a+=pt,_t)break t}else n.head&&(n.head.comment=null)
n.mode=N
case N:if(512&n.flags){for(;ct<16;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(lt!==(65535&n.check)){t.msg="header crc mismatch",n.mode=at
break}lt=0,ct=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=j
break
case U:for(;ct<32;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}t.adler=n.check=r(lt),lt=0,ct=0,n.mode=W
case W:if(0===n.havedict)return t.next_out=s,t.avail_out=f,t.next_in=a,t.avail_in=c,n.hold=lt,n.bits=ct,C
t.adler=n.check=1,n.mode=j
case j:if(e===x||e===_)break t
case G:if(n.last){lt>>>=7&ct,ct-=7&ct,n.mode=rt
break}for(;ct<3;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}switch(n.last=1&lt,ct-=1,3&(lt>>>=1)){case 0:n.mode=V
break
case 1:if(u(n),n.mode=K,e===_){lt>>>=2,ct-=2
break t}break
case 2:n.mode=Z
break
case 3:t.msg="invalid block type",n.mode=at}lt>>>=2,ct-=2
break
case V:for(lt>>>=7&ct,ct-=7&ct;ct<32;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if((65535&lt)!=(lt>>>16^65535)){t.msg="invalid stored block lengths",n.mode=at
break}if(n.length=65535&lt,lt=0,ct=0,n.mode=H,e===_)break t
case H:n.mode=q
case q:if(pt=n.length){if(pt>c&&(pt=c),pt>f&&(pt=f),0===pt)break t
h.arraySet(o,i,a,pt,s),c-=pt,a+=pt,f-=pt,s+=pt,n.length-=pt
break}n.mode=j
break
case Z:for(;ct<14;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(n.nlen=257+(31&lt),lt>>>=5,ct-=5,n.ndist=1+(31&lt),lt>>>=5,ct-=5,n.ncode=4+(15&lt),lt>>>=4,ct-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=at
break}n.have=0,n.mode=Y
case Y:for(;n.have<n.ncode;){for(;ct<3;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}n.lens[Et[n.have++]]=7&lt,lt>>>=3,ct-=3}for(;n.have<19;)n.lens[Et[n.have++]]=0
if(n.lencode=n.lendyn,n.lenbits=7,St={bits:n.lenbits},kt=y(v,n.lens,0,19,n.lencode,0,n.work,St),n.lenbits=St.bits,kt){t.msg="invalid code lengths set",n.mode=at
break}n.have=0,n.mode=X
case X:for(;n.have<n.nlen+n.ndist;){for(;vt=(At=n.lencode[lt&(1<<n.lenbits)-1])>>>16&255,bt=65535&At,!((yt=At>>>24)<=ct);){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(bt<16)lt>>>=yt,ct-=yt,n.lens[n.have++]=bt
else{if(16===bt){for(Ct=yt+2;ct<Ct;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(lt>>>=yt,ct-=yt,0===n.have){t.msg="invalid bit length repeat",n.mode=at
break}_t=n.lens[n.have-1],pt=3+(3&lt),lt>>>=2,ct-=2}else if(17===bt){for(Ct=yt+3;ct<Ct;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}ct-=yt,_t=0,pt=3+(7&(lt>>>=yt)),lt>>>=3,ct-=3}else{for(Ct=yt+7;ct<Ct;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}ct-=yt,_t=0,pt=11+(127&(lt>>>=yt)),lt>>>=7,ct-=7}if(n.have+pt>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=at
break}for(;pt--;)n.lens[n.have++]=_t}}if(n.mode===at)break
if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=at
break}if(n.lenbits=9,St={bits:n.lenbits},kt=y(b,n.lens,0,n.nlen,n.lencode,0,n.work,St),n.lenbits=St.bits,kt){t.msg="invalid literal/lengths set",n.mode=at
break}if(n.distbits=6,n.distcode=n.distdyn,St={bits:n.distbits},kt=y(m,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,St),n.distbits=St.bits,kt){t.msg="invalid distances set",n.mode=at
break}if(n.mode=K,e===_)break t
case K:n.mode=J
case J:if(c>=6&&f>=258){t.next_out=s,t.avail_out=f,t.next_in=a,t.avail_in=c,n.hold=lt,n.bits=ct,g(t,ht),s=t.next_out,o=t.output,f=t.avail_out,a=t.next_in,i=t.input,c=t.avail_in,lt=n.hold,ct=n.bits,n.mode===j&&(n.back=-1)
break}for(n.back=0;vt=(At=n.lencode[lt&(1<<n.lenbits)-1])>>>16&255,bt=65535&At,!((yt=At>>>24)<=ct);){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(vt&&0==(240&vt)){for(mt=yt,wt=vt,xt=bt;vt=(At=n.lencode[xt+((lt&(1<<mt+wt)-1)>>mt)])>>>16&255,bt=65535&At,!(mt+(yt=At>>>24)<=ct);){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}lt>>>=mt,ct-=mt,n.back+=mt}if(lt>>>=yt,ct-=yt,n.back+=yt,n.length=bt,0===vt){n.mode=nt
break}if(32&vt){n.back=-1,n.mode=j
break}if(64&vt){t.msg="invalid literal/length code",n.mode=at
break}n.extra=15&vt,n.mode=Q
case Q:if(n.extra){for(Ct=n.extra;ct<Ct;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}n.length+=lt&(1<<n.extra)-1,lt>>>=n.extra,ct-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=$
case $:for(;vt=(At=n.distcode[lt&(1<<n.distbits)-1])>>>16&255,bt=65535&At,!((yt=At>>>24)<=ct);){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(0==(240&vt)){for(mt=yt,wt=vt,xt=bt;vt=(At=n.distcode[xt+((lt&(1<<mt+wt)-1)>>mt)])>>>16&255,bt=65535&At,!(mt+(yt=At>>>24)<=ct);){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}lt>>>=mt,ct-=mt,n.back+=mt}if(lt>>>=yt,ct-=yt,n.back+=yt,64&vt){t.msg="invalid distance code",n.mode=at
break}n.offset=bt,n.extra=15&vt,n.mode=tt
case tt:if(n.extra){for(Ct=n.extra;ct<Ct;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}n.offset+=lt&(1<<n.extra)-1,lt>>>=n.extra,ct-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=at
break}n.mode=et
case et:if(0===f)break t
if(pt=ht-f,n.offset>pt){if((pt=n.offset-pt)>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=at
break}pt>n.wnext?(pt-=n.wnext,dt=n.wsize-pt):dt=n.wnext-pt,pt>n.length&&(pt=n.length),gt=n.window}else gt=o,dt=s-n.offset,pt=n.length
pt>f&&(pt=f),f-=pt,n.length-=pt
do{o[s++]=gt[dt++]}while(--pt)
0===n.length&&(n.mode=J)
break
case nt:if(0===f)break t
o[s++]=n.length,f--,n.mode=J
break
case rt:if(n.wrap){for(;ct<32;){if(0===c)break t
c--,lt|=i[a++]<<ct,ct+=8}if(ht-=f,t.total_out+=ht,n.total+=ht,ht&&(t.adler=n.check=n.flags?d(n.check,o,ht,s-ht):p(n.check,o,ht,s-ht)),ht=f,(n.flags?lt:r(lt))!==n.check){t.msg="incorrect data check",n.mode=at
break}lt=0,ct=0}n.mode=it
case it:if(n.wrap&&n.flags){for(;ct<32;){if(0===c)break t
c--,lt+=i[a++]<<ct,ct+=8}if(lt!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=at
break}lt=0,ct=0}n.mode=ot
case ot:kt=S
break t
case at:kt=P
break t
case st:return E
case ut:default:return A}return t.next_out=s,t.avail_out=f,t.next_in=a,t.avail_in=c,n.hold=lt,n.bits=ct,(n.wsize||ht!==t.avail_out&&n.mode<at&&(n.mode<rt||e!==w))&&l(t,t.output,t.next_out,ht-t.avail_out)?(n.mode=st,E):(ft-=t.avail_in,ht-=t.avail_out,t.total_in+=ft,t.total_out+=ht,n.total+=ht,n.wrap&&ht&&(t.adler=n.check=n.flags?d(n.check,o,ht,t.next_out-ht):p(n.check,o,ht,t.next_out-ht)),t.data_type=n.bits+(n.last?64:0)+(n.mode===j?128:0)+(n.mode===K||n.mode===H?256:0),(0===ft&&0===ht||e===w)&&kt===k&&(kt=I),kt)},e.inflateEnd=function(t){if(!t||!t.state)return A
var e=t.state
return e.window&&(e.window=null),t.state=null,k},e.inflateGetHeader=function(t,e){var n
return t&&t.state?0==(2&(n=t.state).wrap)?A:(n.head=e,e.done=!1,k):A},e.inflateSetDictionary=function(t,e){var n,r=e.length
return t&&t.state?0!==(n=t.state).wrap&&n.mode!==W?A:n.mode===W&&p(1,e,r,0)!==n.check?P:l(t,e,r,r)?(n.mode=st,E):(n.havedict=1,k):A},e.inflateInfo="pako inflate (from Nodeca project)"},function(t,e){"use strict"
t.exports=function(t,e){var n,r,i,o,a,s,u,l,c,f,h,p,d,g,y,v,b,m,w,x,_,k,S,C,A
n=t.state,r=t.next_in,C=t.input,i=r+(t.avail_in-5),o=t.next_out,A=t.output,a=o-(e-t.avail_out),s=o+(t.avail_out-257),u=n.dmax,l=n.wsize,c=n.whave,f=n.wnext,h=n.window,p=n.hold,d=n.bits,g=n.lencode,y=n.distcode,v=(1<<n.lenbits)-1,b=(1<<n.distbits)-1
t:do{d<15&&(p+=C[r++]<<d,d+=8,p+=C[r++]<<d,d+=8),m=g[p&v]
e:for(;;){if(p>>>=w=m>>>24,d-=w,0==(w=m>>>16&255))A[o++]=65535&m
else{if(!(16&w)){if(0==(64&w)){m=g[(65535&m)+(p&(1<<w)-1)]
continue e}if(32&w){n.mode=12
break t}t.msg="invalid literal/length code",n.mode=30
break t}x=65535&m,(w&=15)&&(d<w&&(p+=C[r++]<<d,d+=8),x+=p&(1<<w)-1,p>>>=w,d-=w),d<15&&(p+=C[r++]<<d,d+=8,p+=C[r++]<<d,d+=8),m=y[p&b]
n:for(;;){if(p>>>=w=m>>>24,d-=w,!(16&(w=m>>>16&255))){if(0==(64&w)){m=y[(65535&m)+(p&(1<<w)-1)]
continue n}t.msg="invalid distance code",n.mode=30
break t}if(_=65535&m,d<(w&=15)&&(p+=C[r++]<<d,(d+=8)<w&&(p+=C[r++]<<d,d+=8)),(_+=p&(1<<w)-1)>u){t.msg="invalid distance too far back",n.mode=30
break t}if(p>>>=w,d-=w,_>(w=o-a)){if((w=_-w)>c&&n.sane){t.msg="invalid distance too far back",n.mode=30
break t}if(k=0,S=h,0===f){if(k+=l-w,w<x){x-=w
do{A[o++]=h[k++]}while(--w)
k=o-_,S=A}}else if(f<w){if(k+=l+f-w,(w-=f)<x){x-=w
do{A[o++]=h[k++]}while(--w)
if(k=0,f<x){x-=w=f
do{A[o++]=h[k++]}while(--w)
k=o-_,S=A}}}else if(k+=f-w,w<x){x-=w
do{A[o++]=h[k++]}while(--w)
k=o-_,S=A}for(;x>2;)A[o++]=S[k++],A[o++]=S[k++],A[o++]=S[k++],x-=3
x&&(A[o++]=S[k++],x>1&&(A[o++]=S[k++]))}else{k=o-_
do{A[o++]=A[k++],A[o++]=A[k++],A[o++]=A[k++],x-=3}while(x>2)
x&&(A[o++]=A[k++],x>1&&(A[o++]=A[k++]))}break}}break}}while(r<i&&o<s)
r-=x=d>>3,p&=(1<<(d-=x<<3))-1,t.next_in=r,t.next_out=o,t.avail_in=r<i?i-r+5:5-(r-i),t.avail_out=o<s?s-o+257:257-(o-s),n.hold=p,n.bits=d}},function(t,e,n){"use strict"
var r=n(64),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]
t.exports=function(t,e,n,u,l,c,f,h){var p,d,g,y,v,b,m,w,x,_=h.bits,k=0,S=0,C=0,A=0,P=0,E=0,I=0,T=0,O=0,B=0,L=null,R=0,M=new r.Buf16(16),F=new r.Buf16(16),z=null,D=0
for(k=0;k<=15;k++)M[k]=0
for(S=0;S<u;S++)M[e[n+S]]++
for(P=_,A=15;A>=1&&0===M[A];A--);if(P>A&&(P=A),0===A)return l[c++]=20971520,l[c++]=20971520,h.bits=1,0
for(C=1;C<A&&0===M[C];C++);for(P<C&&(P=C),T=1,k=1;k<=15;k++)if(T<<=1,(T-=M[k])<0)return-1
if(T>0&&(0===t||1!==A))return-1
for(F[1]=0,k=1;k<15;k++)F[k+1]=F[k]+M[k]
for(S=0;S<u;S++)0!==e[n+S]&&(f[F[e[n+S]]++]=S)
if(0===t?(L=z=f,b=19):1===t?(L=i,R-=257,z=o,D-=257,b=256):(L=a,z=s,b=-1),B=0,S=0,k=C,v=c,E=P,I=0,g=-1,y=(O=1<<P)-1,1===t&&O>852||2===t&&O>592)return 1
for(;;){0,m=k-I,f[S]<b?(w=0,x=f[S]):f[S]>b?(w=z[D+f[S]],x=L[R+f[S]]):(w=96,x=0),p=1<<k-I,C=d=1<<E
do{l[v+(B>>I)+(d-=p)]=m<<24|w<<16|x|0}while(0!==d)
for(p=1<<k-1;B&p;)p>>=1
if(0!==p?(B&=p-1,B+=p):B=0,S++,0==--M[k]){if(k===A)break
k=e[n+f[S]]}if(k>P&&(B&y)!==g){for(0===I&&(I=P),v+=C,T=1<<(E=k-I);E+I<A&&!((T-=M[E+I])<=0);)E++,T<<=1
if(O+=1<<E,1===t&&O>852||2===t&&O>592)return 1
l[g=B&y]=P<<24|E<<16|v-c|0}}return 0!==B&&(l[v+B]=k-I<<24|64<<16|0),h.bits=P,0}},function(t,e){"use strict"
t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},function(t,e,n){(function(t,r){function i(t,n){var r={seen:[],stylize:a}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),f(n)?r.showHidden=n:n&&e._extend(r,n),g(r.showHidden)&&(r.showHidden=!1),g(r.depth)&&(r.depth=2),g(r.colors)&&(r.colors=!1),g(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),s(r,t,r.depth)}function o(t,e){var n=i.styles[e]
return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function a(t,e){return t}function s(t,n,r){if(t.customInspect&&n&&w(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t)
return d(i)||(i=s(t,i,r)),i}var o=function(t,e){if(g(e))return t.stylize("undefined","undefined")
if(d(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return t.stylize(n,"string")}return p(e)?t.stylize(""+e,"number"):f(e)?t.stylize(""+e,"boolean"):h(e)?t.stylize("null","null"):void 0}(t,n)
if(o)return o
var a,v=Object.keys(n),x=(a={},v.forEach(function(t,e){a[t]=!0}),a)
if(t.showHidden&&(v=Object.getOwnPropertyNames(n)),m(n)&&(v.indexOf("message")>=0||v.indexOf("description")>=0))return u(n)
if(0===v.length){if(w(n)){var k=n.name?": "+n.name:""
return t.stylize("[Function"+k+"]","special")}if(y(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp")
if(b(n))return t.stylize(Date.prototype.toString.call(n),"date")
if(m(n))return u(n)}var S,C,A,P,E="",I=!1,T=["{","}"]
return c(n)&&(I=!0,T=["[","]"]),w(n)&&(E=" [Function"+(n.name?": "+n.name:"")+"]"),y(n)&&(E=" "+RegExp.prototype.toString.call(n)),b(n)&&(E=" "+Date.prototype.toUTCString.call(n)),m(n)&&(E=" "+u(n)),0!==v.length||I&&0!=n.length?r<0?y(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),S=I?function(t,e,n,r,i){for(var o=[],a=0,s=e.length;a<s;++a)_(e,String(a))?o.push(l(t,e,n,r,String(a),!0)):o.push("")
return i.forEach(function(i){i.match(/^\d+$/)||o.push(l(t,e,n,r,i,!0))}),o}(t,n,r,x,v):v.map(function(e){return l(t,n,r,x,e,I)}),t.seen.pop(),A=E,P=T,(C=S).reduce(function(t,e){return e.indexOf("\n"),t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?P[0]+(""===A?"":A+"\n ")+" "+C.join(",\n  ")+" "+P[1]:P[0]+A+" "+C.join(", ")+" "+P[1]):T[0]+E+T[1]}function u(t){return"["+Error.prototype.toString.call(t)+"]"}function l(t,e,n,r,i,o){var a,u,l
if((l=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?u=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(u=t.stylize("[Setter]","special")),_(r,i)||(a="["+i+"]"),u||(t.seen.indexOf(l.value)<0?(u=h(n)?s(t,l.value,null):s(t,l.value,n-1)).indexOf("\n")>-1&&(u=o?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n")):u=t.stylize("[Circular]","special")),g(a)){if(o&&i.match(/^\d+$/))return u;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+u}function c(t){return Array.isArray(t)}function f(t){return"boolean"==typeof t}function h(t){return null===t}function p(t){return"number"==typeof t}function d(t){return"string"==typeof t}function g(t){return void 0===t}function y(t){return v(t)&&"[object RegExp]"===x(t)}function v(t){return"object"==typeof t&&null!==t}function b(t){return v(t)&&"[object Date]"===x(t)}function m(t){return v(t)&&("[object Error]"===x(t)||t instanceof Error)}function w(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function _(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var k=/%[sdj%]/g
e.format=function(t){if(!d(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]))
return e.join(" ")}n=1
for(var r=arguments,o=r.length,a=String(t).replace(k,function(t){if("%%"===t)return"%"
if(n>=o)return t
switch(t){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),s=r[n];n<o;s=r[++n])h(s)||!v(s)?a+=" "+s:a+=" "+i(s)
return a},e.deprecate=function(n,i){if(g(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)}
if(!0===r.noDeprecation)return n
var o=!1
return function(){if(!o){if(r.throwDeprecation)throw new Error(i)
r.traceDeprecation,o=!0}return n.apply(this,arguments)}}
var S,C={}
e.debuglog=function(t){return g(S)&&(S=r.env.NODE_DEBUG||""),t=t.toUpperCase(),C[t]||(new RegExp("\\b"+t+"\\b","i").test(S)?(r.pid,C[t]=function(){e.format.apply(e,arguments)}):C[t]=function(){}),C[t]},e.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=c,e.isBoolean=f,e.isNull=h,e.isNullOrUndefined=function(t){return null==t},e.isNumber=p,e.isString=d,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=g,e.isRegExp=y,e.isObject=v,e.isDate=b,e.isError=m,e.isFunction=w,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(73),e.log=function(){},e.inherits=n(74),e._extend=function(t,e){if(!e||!v(e))return t
for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]]
return t}}).call(e,function(){return this}(),n(36))},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){(function(e){"use strict"
function r(t,e){if(t===e)return 0
for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i]
break}return n<r?-1:r<n?1:0}function i(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}function o(t){return Object.prototype.toString.call(t)}function a(t){return!i(t)&&"function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer)))}function s(t){if(y.isFunction(t)){if(m)return t.name
var e=t.toString().match(x)
return e&&e[1]}}function u(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function l(t){if(m||!y.isFunction(t))return y.inspect(t)
var e=s(t)
return"[Function"+(e?": "+e:"")+"]"}function c(t,e,n,r,i){throw new w.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:i})}function f(t,e){t||c(t,!0,e,"==",w.ok)}function h(t,e,n,s){if(t===e)return!0
if(i(t)&&i(e))return 0===r(t,e)
if(y.isDate(t)&&y.isDate(e))return t.getTime()===e.getTime()
if(y.isRegExp(t)&&y.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase
if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(a(t)&&a(e)&&o(t)===o(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer))
if(i(t)!==i(e))return!1
var u=(s=s||{actual:[],expected:[]}).actual.indexOf(t)
return-1!==u&&u===s.expected.indexOf(e)||(s.actual.push(t),s.expected.push(e),function(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1
if(y.isPrimitive(t)||y.isPrimitive(e))return t===e
if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1
var i=p(t),o=p(e)
if(i&&!o||!i&&o)return!1
if(i)return t=b.call(t),e=b.call(e),h(t,e,n)
var a,s,u=_(t),l=_(e)
if(u.length!==l.length)return!1
for(u.sort(),l.sort(),s=u.length-1;s>=0;s--)if(u[s]!==l[s])return!1
for(s=u.length-1;s>=0;s--)if(a=u[s],!h(t[a],e[a],n,r))return!1
return!0}(t,e,n,s))}return n?t===e:t==e}function p(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function d(t,e){if(!t||!e)return!1
if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t)
try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function g(t,e,n,r){var i
if("function"!=typeof e)throw new TypeError('"block" argument must be a function')
"string"==typeof n&&(r=n,n=null),i=function(t){var e
try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!i&&c(i,n,"Missing expected exception"+r)
var o="string"==typeof r,a=!t&&y.isError(i),s=!t&&i&&!n
if((a&&o&&d(i,n)||s)&&c(i,n,"Got unwanted exception"+r),t&&i&&n&&!d(i,n)||!t&&i)throw i}var y=n(72),v=Object.prototype.hasOwnProperty,b=Array.prototype.slice,m="foo"===function(){}.name,w=t.exports=f,x=/\s*function\s+([^\(\s]*)\s*/
w.AssertionError=function(t){var e
this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=u(l((e=this).actual),128)+" "+e.operator+" "+u(l(e.expected),128),this.generatedMessage=!0)
var n=t.stackStartFunction||c
if(Error.captureStackTrace)Error.captureStackTrace(this,n)
else{var r=new Error
if(r.stack){var i=r.stack,o=s(n),a=i.indexOf("\n"+o)
if(a>=0){var f=i.indexOf("\n",a+1)
i=i.substring(f+1)}this.stack=i}}},y.inherits(w.AssertionError,Error),w.fail=c,w.ok=f,w.equal=function(t,e,n){t!=e&&c(t,e,n,"==",w.equal)},w.notEqual=function(t,e,n){t==e&&c(t,e,n,"!=",w.notEqual)},w.deepEqual=function(t,e,n){h(t,e,!1)||c(t,e,n,"deepEqual",w.deepEqual)},w.deepStrictEqual=function(t,e,n){h(t,e,!0)||c(t,e,n,"deepStrictEqual",w.deepStrictEqual)},w.notDeepEqual=function(t,e,n){h(t,e,!1)&&c(t,e,n,"notDeepEqual",w.notDeepEqual)},w.notDeepStrictEqual=function t(e,n,r){h(e,n,!0)&&c(e,n,r,"notDeepStrictEqual",t)},w.strictEqual=function(t,e,n){t!==e&&c(t,e,n,"===",w.strictEqual)},w.notStrictEqual=function(t,e,n){t===e&&c(t,e,n,"!==",w.notStrictEqual)},w.throws=function(t,e,n){g(!0,t,e,n)},w.doesNotThrow=function(t,e,n){g(!1,t,e,n)},w.ifError=function(t){if(t)throw t}
var _=Object.keys||function(t){var e=[]
for(var n in t)v.call(t,n)&&e.push(n)
return e}}).call(e,function(){return this}())},function(t,e){(function(){var e
e=function(){function t(t,r){var i,o,a,s,u,l
this.document=t,null==r&&(r={}),this.size=r.size||"letter",this.layout=r.layout||"portrait","number"==typeof r.margin?this.margins={top:r.margin,left:r.margin,bottom:r.margin,right:r.margin}:this.margins=r.margins||e,i=Array.isArray(this.size)?this.size:n[this.size.toUpperCase()],this.width=i["portrait"===this.layout?0:1],this.height=i["portrait"===this.layout?1:0],this.content=this.document.ref(),this.resources=this.document.ref({ProcSet:["PDF","Text","ImageB","ImageC","ImageI"]}),Object.defineProperties(this,{fonts:{get:(l=this,function(){var t
return null!=(t=l.resources.data).Font?t.Font:t.Font={}})},xobjects:{get:(u=this,function(){var t
return null!=(t=u.resources.data).XObject?t.XObject:t.XObject={}})},ext_gstates:{get:(s=this,function(){var t
return null!=(t=s.resources.data).ExtGState?t.ExtGState:t.ExtGState={}})},patterns:{get:(a=this,function(){var t
return null!=(t=a.resources.data).Pattern?t.Pattern:t.Pattern={}})},annotations:{get:(o=this,function(){var t
return null!=(t=o.dictionary.data).Annots?t.Annots:t.Annots=[]})}}),this.dictionary=this.document.ref({Type:"Page",Parent:this.document._root.data.Pages,MediaBox:[0,0,this.width,this.height],Contents:this.content,Resources:this.resources})}var e,n
return t.prototype.maxY=function(){return this.height-this.margins.bottom},t.prototype.write=function(t){return this.content.write(t)},t.prototype.end=function(){return this.dictionary.end(),this.resources.end(),this.content.end()},e={top:72,left:72,bottom:72,right:72},n={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224]},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i,o,a
a=n(78),e=a.PDFGradient,r=a.PDFLinearGradient,i=a.PDFRadialGradient,t.exports={initColor:function(){return this._opacityRegistry={},this._opacityCount=0,this._gradCount=0},_normalizeColor:function(t){var n,r
return t instanceof e?t:("string"==typeof t&&("#"===t.charAt(0)?(4===t.length&&(t=t.replace(/#([0-9A-F])([0-9A-F])([0-9A-F])/i,"#$1$1$2$2$3$3")),n=parseInt(t.slice(1),16),t=[n>>16,n>>8&255,255&n]):o[t]&&(t=o[t])),Array.isArray(t)?(3===t.length?t=function(){var e,n,i
for(i=[],e=0,n=t.length;e<n;e++)r=t[e],i.push(r/255)
return i}():4===t.length&&(t=function(){var e,n,i
for(i=[],e=0,n=t.length;e<n;e++)r=t[e],i.push(r/100)
return i}()),t):null)},_setColor:function(t,n){var r,i
return!!(t=this._normalizeColor(t))&&(r=n?"SCN":"scn",t instanceof e?(this._setColorSpace("Pattern",n),t.apply(r)):(i=4===t.length?"DeviceCMYK":"DeviceRGB",this._setColorSpace(i,n),t=t.join(" "),this.addContent(t+" "+r)),!0)},_setColorSpace:function(t,e){var n
return n=e?"CS":"cs",this.addContent("/"+t+" "+n)},fillColor:function(t,e){return null==e&&(e=1),this._setColor(t,!1)&&this.fillOpacity(e),this._fillColor=[t,e],this},strokeColor:function(t,e){return null==e&&(e=1),this._setColor(t,!0)&&this.strokeOpacity(e),this},opacity:function(t){return this._doOpacity(t,t),this},fillOpacity:function(t){return this._doOpacity(t,null),this},strokeOpacity:function(t){return this._doOpacity(null,t),this},_doOpacity:function(t,e){var n,r,i,o,a
if(null!=t||null!=e)return null!=t&&(t=Math.max(0,Math.min(1,t))),null!=e&&(e=Math.max(0,Math.min(1,e))),i=t+"_"+e,this._opacityRegistry[i]?(a=this._opacityRegistry[i],n=a[0],o=a[1]):(n={Type:"ExtGState"},null!=t&&(n.ca=t),null!=e&&(n.CA=e),n=this.ref(n),n.end(),r=++this._opacityCount,o="Gs"+r,this._opacityRegistry[i]=[n,o]),this.page.ext_gstates[o]=n,this.addContent("/"+o+" gs")},linearGradient:function(t,e,n,i){return new r(this,t,e,n,i)},radialGradient:function(t,e,n,r,o,a){return new i(this,t,e,n,r,o,a)}},o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}).call(this)},function(t,e){(function(){var e,n,r,i=function(t,e){function n(){this.constructor=t}for(var r in e)o.call(e,r)&&(t[r]=e[r])
return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty
e=function(){function t(t){this.doc=t,this.stops=[],this.embedded=!1,this.transform=[1,0,0,1,0,0],this._colorSpace="DeviceRGB"}return t.prototype.stop=function(t,e,n){return null==n&&(n=1),n=Math.max(0,Math.min(1,n)),this.stops.push([t,this.doc._normalizeColor(e),n]),this},t.prototype.setTransform=function(t,e,n,r,i,o){return this.transform=[t,e,n,r,i,o],this},t.prototype.embed=function(t){var e,n,r,i,o,a,s,u,l,c,f,h,p,d,g,y,v,b,m,w
if(0!==this.stops.length){for(this.embedded=!0,this.matrix=t,(c=this.stops[this.stops.length-1])[0]<1&&this.stops.push([1,c[1],c[2]]),e=[],n=[],m=[],s=u=0,g=this.stops.length-1;0<=g?u<g:u>g;s=0<=g?++u:--u)n.push(0,1),s+2!==this.stops.length&&e.push(this.stops[s+1][0]),r=this.doc.ref({FunctionType:2,Domain:[0,1],C0:this.stops[s+0][1],C1:this.stops[s+1][1],N:1}),m.push(r),r.end()
if(1===m.length?r=m[0]:(r=this.doc.ref({FunctionType:3,Domain:[0,1],Functions:m,Bounds:e,Encode:n})).end(),this.id="Sh"+ ++this.doc._gradCount,(v=this.shader(r)).end(),(d=this.doc.ref({Type:"Pattern",PatternType:2,Shading:v,Matrix:function(){var t,e,n,r
for(r=[],t=0,e=(n=this.matrix).length;t<e;t++)w=n[t],r.push(+w.toFixed(5))
return r}.call(this)})).end(),this.stops.some(function(t){return t[2]<1})){for((o=this.opacityGradient())._colorSpace="DeviceGray",l=0,f=(y=this.stops).length;l<f;l++)b=y[l],o.stop(b[0],[b[2]])
o=o.embed(this.matrix),p=[0,0,this.doc.page.width,this.doc.page.height],(i=this.doc.ref({Type:"XObject",Subtype:"Form",FormType:1,BBox:p,Group:{Type:"Group",S:"Transparency",CS:"DeviceGray"},Resources:{ProcSet:["PDF","Text","ImageB","ImageC","ImageI"],Pattern:{Sh1:o}}})).write("/Pattern cs /Sh1 scn"),i.end(p.join(" ")+" re f"),(a=this.doc.ref({Type:"ExtGState",SMask:{Type:"Mask",S:"Luminosity",G:i}})).end(),(h=this.doc.ref({Type:"Pattern",PatternType:1,PaintType:1,TilingType:2,BBox:p,XStep:p[2],YStep:p[3],Resources:{ProcSet:["PDF","Text","ImageB","ImageC","ImageI"],Pattern:{Sh1:d},ExtGState:{Gs1:a}}})).write("/Gs1 gs /Pattern cs /Sh1 scn"),h.end(p.join(" ")+" re f"),this.doc.page.patterns[this.id]=h}else this.doc.page.patterns[this.id]=d
return d}},t.prototype.apply=function(t){var e,n,r,i,o,a,s,u,l,c,f,h,p,d,g
return i=(d=this.doc._ctm.slice())[0],o=d[1],u=d[2],f=d[3],h=d[4],p=d[5],r=[i*(a=(g=this.transform)[0])+u*(s=g[1]),o*a+f*s,i*(l=g[2])+u*(c=g[3]),o*l+f*c,i*(e=g[4])+u*(n=g[5])+h,o*e+f*n+p],this.embedded&&r.join(" ")===this.matrix.join(" ")||this.embed(r),this.doc.addContent("/"+this.id+" "+t)},t}(),n=function(t){function n(t,e,r,i,o){this.doc=t,this.x1=e,this.y1=r,this.x2=i,this.y2=o,n.__super__.constructor.apply(this,arguments)}return i(n,e),n.prototype.shader=function(t){return this.doc.ref({ShadingType:2,ColorSpace:this._colorSpace,Coords:[this.x1,this.y1,this.x2,this.y2],Function:t,Extend:[!0,!0]})},n.prototype.opacityGradient=function(){return new n(this.doc,this.x1,this.y1,this.x2,this.y2)},n}(),r=function(t){function n(t,e,r,i,o,a,s){this.doc=t,this.x1=e,this.y1=r,this.r1=i,this.x2=o,this.y2=a,this.r2=s,n.__super__.constructor.apply(this,arguments)}return i(n,e),n.prototype.shader=function(t){return this.doc.ref({ShadingType:3,ColorSpace:this._colorSpace,Coords:[this.x1,this.y1,this.r1,this.x2,this.y2,this.r2],Function:t,Extend:[!0,!0]})},n.prototype.opacityGradient=function(){return new n(this.doc,this.x1,this.y1,this.r1,this.x2,this.y2,this.r2)},n}(),t.exports={PDFGradient:e,PDFLinearGradient:n,PDFRadialGradient:r}}).call(this)},function(t,e,n){(function(){var e,r,i,o=[].slice
r=n(80),i=n(57).number,e=(Math.sqrt(2)-1)/3*4,t.exports={initVector:function(){return this._ctm=[1,0,0,1,0,0],this._ctmStack=[]},save:function(){return this._ctmStack.push(this._ctm.slice()),this.addContent("q")},restore:function(){return this._ctm=this._ctmStack.pop()||[1,0,0,1,0,0],this.addContent("Q")},closePath:function(){return this.addContent("h")},lineWidth:function(t){return this.addContent(i(t)+" w")},_CAP_STYLES:{BUTT:0,ROUND:1,SQUARE:2},lineCap:function(t){return"string"==typeof t&&(t=this._CAP_STYLES[t.toUpperCase()]),this.addContent(t+" J")},_JOIN_STYLES:{MITER:0,ROUND:1,BEVEL:2},lineJoin:function(t){return"string"==typeof t&&(t=this._JOIN_STYLES[t.toUpperCase()]),this.addContent(t+" j")},miterLimit:function(t){return this.addContent(i(t)+" M")},dash:function(t,e){var n,r,o,a
return null==e&&(e={}),null==t?this:Array.isArray(t)?(t=function(){var e,n,r
for(r=[],e=0,n=t.length;e<n;e++)a=t[e],r.push(i(a))
return r}().join(" "),n=e.phase||0,this.addContent("["+t+"] "+i(n)+" d")):(o=null!=(r=e.space)?r:t,n=e.phase||0,this.addContent("["+i(t)+" "+i(o)+"] "+i(n)+" d"))},undash:function(){return this.addContent("[] 0 d")},moveTo:function(t,e){return this.addContent(i(t)+" "+i(e)+" m")},lineTo:function(t,e){return this.addContent(i(t)+" "+i(e)+" l")},bezierCurveTo:function(t,e,n,r,o,a){return this.addContent(i(t)+" "+i(e)+" "+i(n)+" "+i(r)+" "+i(o)+" "+i(a)+" c")},quadraticCurveTo:function(t,e,n,r){return this.addContent(i(t)+" "+i(e)+" "+i(n)+" "+i(r)+" v")},rect:function(t,e,n,r){return this.addContent(i(t)+" "+i(e)+" "+i(n)+" "+i(r)+" re")},roundedRect:function(t,n,r,i,o){var a
return null==o&&(o=0),a=(o=Math.min(o,.5*r,.5*i))*(1-e),this.moveTo(t+o,n),this.lineTo(t+r-o,n),this.bezierCurveTo(t+r-a,n,t+r,n+a,t+r,n+o),this.lineTo(t+r,n+i-o),this.bezierCurveTo(t+r,n+i-a,t+r-a,n+i,t+r-o,n+i),this.lineTo(t+o,n+i),this.bezierCurveTo(t+a,n+i,t,n+i-a,t,n+i-o),this.lineTo(t,n+o),this.bezierCurveTo(t,n+a,t+a,n,t+o,n),this.closePath()},ellipse:function(t,n,r,i){var o,a,s,u,l,c
return null==i&&(i=r),o=r*e,a=i*e,s=(t-=r)+2*r,l=(n-=i)+2*i,u=t+r,c=n+i,this.moveTo(t,c),this.bezierCurveTo(t,c-a,u-o,n,u,n),this.bezierCurveTo(u+o,n,s,c-a,s,c),this.bezierCurveTo(s,c+a,u+o,l,u,l),this.bezierCurveTo(u-o,l,t,c+a,t,c),this.closePath()},circle:function(t,e,n){return this.ellipse(t,e,n)},polygon:function(){var t,e,n,r
for(r=1<=arguments.length?o.call(arguments,0):[],this.moveTo.apply(this,r.shift()),t=0,e=r.length;t<e;t++)n=r[t],this.lineTo.apply(this,n)
return this.closePath()},path:function(t){return r.apply(this,t),this},_windingRule:function(t){return/even-?odd/.test(t)?"*":""},fill:function(t,e){return/(even-?odd)|(non-?zero)/.test(t)&&(e=t,t=null),t&&this.fillColor(t),this.addContent("f"+this._windingRule(e))},stroke:function(t){return t&&this.strokeColor(t),this.addContent("S")},fillAndStroke:function(t,e,n){var r
return null==e&&(e=t),(r=/(even-?odd)|(non-?zero)/).test(t)&&(n=t,t=null),r.test(e)&&(n=e,e=t),t&&(this.fillColor(t),this.strokeColor(e)),this.addContent("B"+this._windingRule(n))},clip:function(t){return this.addContent("W"+this._windingRule(t)+" n")},transform:function(t,e,n,r,o,a){var s,u,l,c,f,h,p,d,g
return u=(s=this._ctm)[0],l=s[1],c=s[2],f=s[3],h=s[4],p=s[5],s[0]=u*t+c*e,s[1]=l*t+f*e,s[2]=u*n+c*r,s[3]=l*n+f*r,s[4]=u*o+c*a+h,s[5]=l*o+f*a+p,g=function(){var s,u,l,c
for(c=[],s=0,u=(l=[t,e,n,r,o,a]).length;s<u;s++)d=l[s],c.push(i(d))
return c}().join(" "),this.addContent(g+" cm")},translate:function(t,e){return this.transform(1,0,0,1,t,e)},rotate:function(t,e){var n,r,i,o,a,s,u
return null==e&&(e={}),r=t*Math.PI/180,n=Math.cos(r),o=Math.sin(r),a=s=0,null!=e.origin&&(u=(a=(i=e.origin)[0])*o+(s=i[1])*n,a-=a*n-s*o,s-=u),this.transform(n,o,-o,n,a,s)},scale:function(t,e,n){var r,i,o
return null==e&&(e=t),null==n&&(n={}),2===arguments.length&&(n=e=t),i=o=0,null!=n.origin&&(i=(r=n.origin)[0],o=r[1],i-=t*i,o-=e*o),this.transform(t,0,0,e,i,o)}}}).call(this)},function(t,e){(function(){var e
e=function(){function t(){}var e,n,r,i,o,a,s,u,l,c,f,h,p
return t.apply=function(t,n){var r
return r=a(n),e(r,t)},o={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0},a=function(t){var e,n,r,i,a,s,u,l,c
for(c=[],e=[],i="",a=!1,l=0,s=0,u=t.length;s<u;s++)if(n=t[s],null!=o[n])l=o[n],r&&(i.length>0&&(e[e.length]=+i),c[c.length]={cmd:r,args:e},e=[],i="",a=!1),r=n
else if(" "===n||","===n||"-"===n&&i.length>0&&"e"!==i[i.length-1]||"."===n&&a){if(0===i.length)continue
e.length===l?(c[c.length]={cmd:r,args:e},e=[+i],"M"===r&&(r="L"),"m"===r&&(r="l")):e[e.length]=+i,a="."===n,i="-"===n||"."===n?n:""}else i+=n,"."===n&&(a=!0)
return i.length>0&&(e.length===l?(c[c.length]={cmd:r,args:e},e=[+i],"M"===r&&(r="L"),"m"===r&&(r="l")):e[e.length]=+i),c[c.length]={cmd:r,args:e},c},r=i=s=u=h=p=0,e=function(t,e){var n,o,a,c,f
for(r=i=s=u=h=p=0,o=a=0,c=t.length;a<c;o=++a)n=t[o],"function"==typeof l[f=n.cmd]&&l[f](e,n.args)
return r=i=s=u=0},l={M:function(t,e){return r=e[0],i=e[1],s=u=null,h=r,p=i,t.moveTo(r,i)},m:function(t,e){return r+=e[0],i+=e[1],s=u=null,h=r,p=i,t.moveTo(r,i)},C:function(t,e){return r=e[4],i=e[5],s=e[2],u=e[3],t.bezierCurveTo.apply(t,e)},c:function(t,e){return t.bezierCurveTo(e[0]+r,e[1]+i,e[2]+r,e[3]+i,e[4]+r,e[5]+i),s=r+e[2],u=i+e[3],r+=e[4],i+=e[5]},S:function(t,e){return null===s&&(s=r,u=i),t.bezierCurveTo(r-(s-r),i-(u-i),e[0],e[1],e[2],e[3]),s=e[0],u=e[1],r=e[2],i=e[3]},s:function(t,e){return null===s&&(s=r,u=i),t.bezierCurveTo(r-(s-r),i-(u-i),r+e[0],i+e[1],r+e[2],i+e[3]),s=r+e[0],u=i+e[1],r+=e[2],i+=e[3]},Q:function(t,e){return s=e[0],u=e[1],r=e[2],i=e[3],t.quadraticCurveTo(e[0],e[1],r,i)},q:function(t,e){return t.quadraticCurveTo(e[0]+r,e[1]+i,e[2]+r,e[3]+i),s=r+e[0],u=i+e[1],r+=e[2],i+=e[3]},T:function(t,e){return null===s?(s=r,u=i):(s=r-(s-r),u=i-(u-i)),t.quadraticCurveTo(s,u,e[0],e[1]),s=r-(s-r),u=i-(u-i),r=e[0],i=e[1]},t:function(t,e){return null===s?(s=r,u=i):(s=r-(s-r),u=i-(u-i)),t.quadraticCurveTo(s,u,r+e[0],i+e[1]),r+=e[0],i+=e[1]},A:function(t,e){return f(t,r,i,e),r=e[5],i=e[6]},a:function(t,e){return e[5]+=r,e[6]+=i,f(t,r,i,e),r=e[5],i=e[6]},L:function(t,e){return r=e[0],i=e[1],s=u=null,t.lineTo(r,i)},l:function(t,e){return r+=e[0],i+=e[1],s=u=null,t.lineTo(r,i)},H:function(t,e){return r=e[0],s=u=null,t.lineTo(r,i)},h:function(t,e){return r+=e[0],s=u=null,t.lineTo(r,i)},V:function(t,e){return i=e[0],s=u=null,t.lineTo(r,i)},v:function(t,e){return i+=e[0],s=u=null,t.lineTo(r,i)},Z:function(t){return t.closePath(),r=h,i=p},z:function(t){return t.closePath(),r=h,i=p}},f=function(t,e,r,i){var o,a,s,u,l,f,h,p,d,g,y,v,b
for(d=i[0],g=i[1],p=i[2],l=i[3],b=i[4],a=i[5],s=i[6],h=[],u=0,f=(v=n(a,s,d,g,l,b,p,e,r)).length;u<f;u++)y=v[u],o=c.apply(null,y),h.push(t.bezierCurveTo.apply(t,o))
return h},n=function(t,e,n,r,i,o,a,l,c){var f,h,p,d,g,y,v,b,m,w,x,_,k,S,C,A,P,E,I,T,O,B,L,R,M
for(C=a*(Math.PI/180),S=Math.sin(C),g=Math.cos(C),n=Math.abs(n),r=Math.abs(r),(b=(s=g*(l-t)*.5+S*(c-e)*.5)*s/(n*n)+(u=g*(c-e)*.5-S*(l-t)*.5)*u/(r*r))>1&&(n*=b=Math.sqrt(b),r*=b),(k=1/(((O=(f=g/n)*t+(h=S/n)*e)-(T=f*l+h*c))*(O-T)+((R=(p=-S/r)*t+(d=g/r)*e)-(L=p*l+d*c))*(R-L))-.25)<0&&(k=0),_=Math.sqrt(k),o===i&&(_=-_),B=.5*(T+O)-_*(R-L),M=.5*(L+R)+_*(O-T),A=Math.atan2(L-M,T-B),(I=Math.atan2(R-M,O-B)-A)<0&&1===o?I+=2*Math.PI:I>0&&0===o&&(I-=2*Math.PI),w=[],y=v=0,m=x=Math.ceil(Math.abs(I/(.5*Math.PI+.001)));0<=m?v<m:v>m;y=0<=m?++v:--v)P=A+y*I/x,E=A+(y+1)*I/x,w[y]=[B,M,P,E,n,r,S,g]
return w},c=function(t,e,n,r,i,o,a,s){var u,l,c,f,h,p,d,g,y,v,b,m
return u=s*i,l=-a*o,c=a*i,f=s*o,p=.5*(r-n),h=8/3*Math.sin(.5*p)*Math.sin(.5*p)/Math.sin(p),d=t+Math.cos(n)-h*Math.sin(n),v=e+Math.sin(n)+h*Math.cos(n),y=t+Math.cos(r),m=e+Math.sin(r),[u*d+l*v,c*d+f*v,u*(g=y+h*Math.sin(r))+l*(b=m-h*Math.cos(r)),c*g+f*b,u*y+l*m,c*y+f*m]},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e
e=n(82),t.exports={initFonts:function(){this._fontFamilies={},this._fontCount=0,this._fontSize=12,this._font=null,this._registeredFonts={}},font:function(t,n,r){var i,o,a,s
return"number"==typeof n&&(r=n,n=null),"string"==typeof t&&this._registeredFonts[t]?(i=t,t=(s=this._registeredFonts[t]).src,n=s.family):"string"!=typeof(i=n||t)&&(i=null),null!=r&&this.fontSize(r),(o=this._fontFamilies[i])?(this._font=o,this):(a="F"+ ++this._fontCount,this._font=e.open(this,t,n,a),(o=this._fontFamilies[this._font.name])?(this._font=o,this):(i&&(this._fontFamilies[i]=this._font),this._fontFamilies[this._font.name]=this._font,this))},fontSize:function(t){return this._fontSize=t,this},currentLineHeight:function(t){return null==t&&(t=!1),this._font.lineHeight(this._fontSize,t)},registerFont:function(t,e,n){return this._registeredFonts[t]={src:e,family:n},this}}}).call(this)},function(t,e,n){(function(e){(function(){var r,i,o,a
a=n(83),i=function(){function t(){throw new Error("Cannot construct a PDFFont directly.")}return t.open=function(t,n,i,s){var u
if("string"==typeof n){if(o.isStandardFont(n))return new o(t,n,s)
u=a.openSync(n,i)}else e.isBuffer(n)?u=a.create(n,i):n instanceof Uint8Array?u=a.create(new e(n),i):n instanceof ArrayBuffer&&(u=a.create(new e(new Uint8Array(n)),i))
if(null==u)throw new Error("Not a supported font format or standard PDF font.")
return new r(t,u,s)},t.prototype.encode=function(t){throw new Error("Must be implemented by subclasses")},t.prototype.widthOfString=function(t){throw new Error("Must be implemented by subclasses")},t.prototype.ref=function(){return null!=this.dictionary?this.dictionary:this.dictionary=this.document.ref()},t.prototype.finalize=function(){if(!this.embedded&&null!=this.dictionary)return this.embed(),this.embedded=!0},t.prototype.embed=function(){throw new Error("Must be implemented by subclasses")},t.prototype.lineHeight=function(t,e){var n
return null==e&&(e=!1),n=e?this.lineGap:0,(this.ascender+n-this.descender)/1e3*t},t}(),t.exports=i,o=n(285),r=n(287)}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){(function(e,r){"use strict"
function i(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(t,e,n){if(n.get){var r=n.get
n.get=function(){var t=r.call(this)
return Q(this,e,{value:t}),t}}else if("function"==typeof n.value){var i=n.value
return{get:function(){function t(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r]
var o=e.length>0?e[0]:"value"
if(n.has(o))return n.get(o)
var a=i.apply(this,e)
return n.set(o,a),a}var n=new et
return Q(this,e,{value:t}),t}}}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
return 1===t&&Ft[n]?Ft[n]:Mt[t][e]}function s(t){var e=new q.Struct({lookupType:q.uint16,flags:ye,subTableCount:q.uint16,subTables:new q.Array(new q.Pointer(q.uint16,t),"subTableCount"),markFilteringSet:new q.Optional(q.uint16,function(t){return t.flags.flags.useMarkFilteringSet})})
return new q.LazyArray(new q.Pointer(q.uint16,e),q.uint16)}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q.uint16,n=st({newState:q.uint16,flags:q.uint16},t),r=new q.Struct(n),i=new $r(new q.Array(q.uint16,function(t){return t.nClasses}))
return new q.Struct({nClasses:q.uint32,classTable:new q.Pointer(q.uint32,new ti(e)),stateArray:new q.Pointer(q.uint32,i),entryTable:new q.Pointer(q.uint32,new $r(r))})}function l(t,e){for(var n=0,r=t.length-1;n<=r;){var i=n+r>>1,o=e(t[i])
if(o<0)r=i-1
else{if(!(o>0))return i
n=i+1}}return-1}function c(t,e){for(var n=[];t<e;)n.push(t++)
return n}function f(t,e,n,r,i){var o={}
return Object.keys(r).forEach(function(t){o[t]=r[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(t,e,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,e,o),o=null),o}function h(t){return Xi[t]?"rtl":"ltr"}function p(t){var e=t[0],n=t[1]
if(isNaN(e))var r=Ji[e]&&Ji[e].code
else r=e
if(isNaN(n))var i=Ji[e]&&Ji[e][n]
else i=n
return[r,i]}function d(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=t.splice(n[0]-(n[1]-1),n[1])
i&&o.reverse()
var a=t.splice.apply(t,[e[0],e[1]].concat(o))
return r&&a.reverse(),t.splice.apply(t,[n[0]-(e[1]-1),0].concat(a)),t}function g(t){var e=Ao.get(t)
if(e)return e-1
var n=ft.getCategory(t)
return"Mn"===n||"Me"===n||"Cf"===n?Eo.Transparent:Eo.Non_Joining}function y(t){return Zo(t)?ra:Yo(t)?ia:Xo(t)?oa:Qo(t)?aa:Jo(t)?sa:Ko(t)?ua:na}function v(t,e,n){return new Ro(t,t.glyphForCodePoint(e).id,[e],n)}function b(t,e,n){var r=t[e],i=r.codePoints[0]-Fo,o=Uo+i%jo,a=Do+(i=i/jo|0)/Wo|0,s=No+i%Wo
if(!n.hasGlyphForCodePoint(a)||!n.hasGlyphForCodePoint(s)||o!==Uo&&!n.hasGlyphForCodePoint(o))return e
var u=v(n,a,r.features)
u.features.ljmo=!0
var l=v(n,s,r.features)
l.features.vjmo=!0
var c=[u,l]
if(o>Uo){var f=v(n,o,r.features)
f.features.tjmo=!0,c.push(f)}return t.splice.apply(t,[e,1].concat(c)),e+c.length-1}function m(t,e,n){var r=t[e],i=y(t[e].codePoints[0]),o=t[e-1].codePoints[0],a=y(o),s=void 0,u=void 0,l=void 0,c=void 0
if(a===aa&&i===oa)s=o,c=r
else{i===ia?(u=t[e-1],l=r):(u=t[e-2],l=t[e-1],c=r)
var f=u.codePoints[0],h=l.codePoints[0]
$o(f)&&ta(h)&&(s=Fo+((f-Do)*Wo+(h-No))*jo)}var p=c&&c.codePoints[0]||Uo
if(null!=s&&(p===Uo||ea(p))){var d=s+(p-Uo)
if(n.hasGlyphForCodePoint(d)){var g=a===ia?3:2
return t.splice(e-g+1,g,v(n,d,r.features)),e-g+1}}return u&&(u.features.ljmo=!0),l&&(l.features.vjmo=!0),c&&(c.features.tjmo=!0),a===aa?(b(t,e-1,n),e+1):e}function w(t,e,n){var r=t[e],i=t[e].codePoints[0]
if(0!==n.glyphForCodePoint(i).advanceWidth){var o=function(t){switch(y(t)){case aa:case sa:return 1
case ia:return 2
case oa:return 3}}(t[e-1].codePoints[0])
return t.splice(e,1),t.splice(e-o,0,r)}}function x(t,e,n){var r=t[e],i=t[e].codePoints[0]
if(n.hasGlyphForCodePoint(qo)){var o=v(n,qo,r.features),a=0===n.glyphForCodePoint(i).advanceWidth?e:e+1
t.splice(a,0,o),e++}return e}function _(t){return Sa.get(t.codePoints[0])>>8}function k(t){return 1<<(255&Sa.get(t.codePoints[0]))}function S(t,e){var n=0,r=0,i=Ca.match(e.map(_)),o=Array.isArray(i),a=0
for(i=o?i:Y(i);;){var s
if(o){if(a>=i.length)break
s=i[a++]}else{if((a=i.next()).done)break
s=a.value}var u=s,l=u[0],c=u[1],f=u[2]
if(l>r){++n
for(var h=r;h<l;h++)e[h].shaperInfo=new Pa(ya.X,va.End,"non_indic_cluster",n)}++n
for(var p=l;p<=c;p++)e[p].shaperInfo=new Pa(1<<_(e[p]),k(e[p]),f[0],n)
r=c+1}if(r<e.length){++n
for(var d=r;d<e.length;d++)e[d].shaperInfo=new Pa(ya.X,va.End,"non_indic_cluster",n)}}function C(t){return t.shaperInfo.category&ba}function A(t){return t.shaperInfo.category&ma}function P(t){return t.shaperInfo.category&wa}function E(t,e){var n=t,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o,a
if(r){if(i>=n.length)break
a=n[i++]}else{if((i=n.next()).done)break
a=i.value}a.features=((o={})[e]=!0,o)}return t[0]._font._layoutEngine.engine.GSUBProcessor.applyFeatures([e],t),1===t.length}function I(t,e,n){var r,i,o,a=n.indicConfig,s=t._layoutEngine.engine.GSUBProcessor.features,u=t.glyphForCodePoint(9676).id,l=t.glyphForCodePoint(a.virama).id
if(l)for(var c=new Ro(t,l,[a.virama]),f=0;f<e.length;f++)e[f].shaperInfo.position===va.Base_C&&(e[f].shaperInfo.position=(r=e[f].copy(),i=c,o=void 0,o=[i,r,i],E(o.slice(0,2),"blwf")||E(o.slice(1,3),"blwf")?va.Below_C:E(o.slice(0,2),"pstf")||E(o.slice(1,3),"pstf")?va.Post_C:E(o.slice(0,2),"pref")||E(o.slice(1,3),"pref")?va.Post_C:va.Base_C))
for(var h=0,p=O(e,0);h<e.length;p=O(e,h=p)){var d=e[h].shaperInfo,g=(d.category,d.syllableType)
if("symbol_cluster"!==g&&"non_indic_cluster"!==g){if("broken_cluster"===g&&u){var y=new Ro(t,u,[9676])
y.shaperInfo=new Pa(1<<_(y),k(y),e[h].shaperInfo.syllableType,e[h].shaperInfo.syllable)
for(var v=h;v<p&&e[v].shaperInfo.category===ya.Repha;)v++
e.splice(v++,0,y),p++}var b=p,m=h,w=!1
if(a.rephPos!==va.Ra_To_Become_Reph&&s.rphf&&h+3<=p&&("Implicit"===a.rephMode&&!A(e[h+2])||"Explicit"===a.rephMode&&e[h+2].shaperInfo.category===ya.ZWJ)){var x=[e[h].copy(),e[h+1].copy(),e[h+2].copy()]
if(E(x.slice(0,2),"rphf")||"Explicit"===a.rephMode&&E(x,"rphf")){for(m+=2;m<p&&A(e[m]);)m++
b=h,w=!0}}else if("Log_Repha"===a.rephMode&&e[h].shaperInfo.category===ya.Repha){for(m++;m<p&&A(e[m]);)m++
b=h,w=!0}switch(a.basePos){case"Last":var S=p,P=!1
do{var I=e[--S].shaperInfo
if(C(e[S])){if(I.position!==va.Below_C&&(I.position!==va.Post_C||P)){b=S
break}I.position===va.Below_C&&(P=!0),b=S}else if(h<S&&I.category===ya.ZWJ&&e[S-1].shaperInfo.category===ya.H)break}while(S>m)
break
case"First":for(var T=(b=h)+1;T<p;T++)C(e[T])&&(e[T].shaperInfo.position=va.Below_C)}w&&b===h&&m-b<=2&&(w=!1)
for(var B=h;B<b;B++){var L=e[B].shaperInfo
L.position=Math.min(va.Pre_C,L.position)}b<p&&(e[b].shaperInfo.position=va.Base_C)
for(var R=b+1;R<p;R++)if(e[R].shaperInfo.category===ya.M){for(var M=R+1;M<p;M++)if(C(e[M])){e[M].shaperInfo.position=va.Final_C
break}break}if(w&&(e[h].shaperInfo.position=va.Ra_To_Become_Reph),n.isOldSpec)for(var F="Malayalam"!==n.unicodeScript,z=b+1;z<p;z++)if(e[z].shaperInfo.category===ya.H){var D=void 0
for(D=p-1;D>z&&!(C(e[D])||F&&e[D].shaperInfo.category===ya.H);D--);if(e[D].shaperInfo.category!==ya.H&&D>z){var N=e[z]
e.splice.apply(e,[z,0].concat(e.splice(z+1,D-z))),e[D]=N}break}for(var U=va.Start,W=h;W<p;W++){var j=e[W].shaperInfo
if(j.category&(ma|ya.N|ya.RS|ya.CM|wa&j.category)){if(j.position=U,j.category===ya.H&&j.position===va.Pre_M)for(var G=W;G>h;G--)if(e[G-1].shaperInfo.position!==va.Pre_M){j.position=e[G-1].shaperInfo.position
break}}else j.position!==va.SMVD&&(U=j.position)}for(var V=b,H=b+1;H<p;H++)if(C(e[H])){for(var q=V+1;q<H;q++)e[q].shaperInfo.position<va.SMVD&&(e[q].shaperInfo.position=e[H].shaperInfo.position)
V=H}else e[H].shaperInfo.category===ya.M&&(V=H)
var Z=e.slice(h,p)
Z.sort(function(t,e){return t.shaperInfo.position-e.shaperInfo.position}),e.splice.apply(e,[h,Z.length].concat(Z))
for(var Y=h;Y<p;Y++)if(e[Y].shaperInfo.position===va.Base_C){b=Y
break}for(var X=h;X<p&&e[X].shaperInfo.position===va.Ra_To_Become_Reph;X++)e[X].features.rphf=!0
for(var K=!n.isOldSpec&&"Pre_And_Post"===a.blwfMode,J=h;J<b;J++)e[J].features.half=!0,K&&(e[J].features.blwf=!0)
for(var Q=b+1;Q<p;Q++)e[Q].features.abvf=!0,e[Q].features.pstf=!0,e[Q].features.blwf=!0
if(n.isOldSpec&&"Devanagari"===n.unicodeScript)for(var $=h;$+1<b;$++)e[$].shaperInfo.category!==ya.Ra||e[$+1].shaperInfo.category!==ya.H||$+1!==b&&e[$+2].shaperInfo.category!==ya.ZWJ||(e[$].features.blwf=!0,e[$+1].features.blwf=!0)
if(s.pref&&b+2<p)for(var tt=b+1;tt+2-1<p;tt++){if(E([e[tt].copy(),e[tt+1].copy()],"pref")){for(var et=0;et<2;et++)e[tt++].features.pref=!0
if(s.cfar)for(;tt<p;tt++)e[tt].features.cfar=!0
break}}for(var nt=h+1;nt<p;nt++)if(A(e[nt])){var rt=e[nt].shaperInfo.category===ya.ZWNJ,it=nt
do{it--,rt&&delete e[it].features.half}while(it>h&&!C(e[it]))}}}}function T(t,e,n){for(var r=n.indicConfig,i=t._layoutEngine.engine.GSUBProcessor.features,o=0,a=O(e,0);o<e.length;a=O(e,o=a)){for(var s=!!i.pref,u=o;u<a;u++)if(e[u].shaperInfo.position>=va.Base_C){if(s&&u+1<a)for(var l=u+1;l<a;l++)if(e[l].features.pref){if(!e[l].substituted||!e[l].isLigated||e[l].isMultiplied){for(u=l;u<a&&P(e[u]);)u++
e[u].shaperInfo.position=va.BASE_C,s=!1}break}if("Malayalam"===n.unicodeScript)for(var c=u+1;c<a;c++){for(;c<a&&A(e[c]);)c++
if(c===a||!P(e[c]))break
for(c++;c<a&&A(e[c]);)c++
c<a&&C(e[c])&&e[c].shaperInfo.position===va.Below_C&&(e[u=c].shaperInfo.position=va.Base_C)}o<u&&e[u].shaperInfo.position>va.Base_C&&u--
break}if(u===a&&o<u&&e[u-1].shaperInfo.category===ya.ZWJ&&u--,u<a)for(;o<u&&e[u].shaperInfo.category&(ya.N|wa);)u--
if(o+1<a&&o<u){var f=u===a?u-2:u-1
if("Malayalam"!==n.unicodeScript&&"Tamil"!==n.unicodeScript){for(;f>o&&!(e[f].shaperInfo.category&(ya.M|wa));)f--
P(e[f])&&e[f].shaperInfo.position!==va.Pre_M?f+1<a&&A(e[f+1])&&f++:f=o}if(o<f&&e[f].shaperInfo.position!==va.Pre_M)for(var h=f;h>o;h--)if(e[h-1].shaperInfo.position===va.Pre_M){var p=h-1
p<u&&u<=f&&u--
var d=e[p]
e.splice.apply(e,[p,0].concat(e.splice(p+1,f-p))),e[f]=d,f--}}if(o+1<a&&e[o].shaperInfo.position===va.Ra_To_Become_Reph&&e[o].shaperInfo.category===ya.Repha!==(e[o].isLigated&&!e[o].isMultiplied)){var g=void 0,y=r.rephPos,v=!1
if(y!==va.After_Post){for(g=o+1;g<u&&!P(e[g]);)g++
if(g<u&&P(e[g])&&(g+1<u&&A(e[g+1])&&g++,v=!0),!v&&y===va.After_Main){for(g=u;g+1<a&&e[g+1].shaperInfo.position<=va.After_Main;)g++
v=g<a}if(!v&&y===va.After_Sub){for(g=u;g+1<a&&!(e[g+1].shaperInfo.position&(va.Post_C|va.After_Post|va.SMVD));)g++
v=g<a}}if(!v){for(g=o+1;g<u&&!P(e[g]);)g++
g<u&&P(e[g])&&(g+1<u&&A(e[g+1])&&g++,v=!0)}if(!v){for(g=a-1;g>o&&e[g].shaperInfo.position===va.SMVD;)g--
if(P(e[g]))for(var b=u+1;b<g;b++)e[b].shaperInfo.category===ya.M&&g--}var m=e[o]
e.splice.apply(e,[o,0].concat(e.splice(o+1,g-o))),e[g]=m,o<u&&u<=g&&u--}if(s&&u+1<a)for(var w=u+1;w<a;w++)if(e[w].features.pref){if(e[w].isLigated&&!e[w].isMultiplied){var x=u
if("Malayalam"!==n.unicodeScript&&"Tamil"!==n.unicodeScript){for(;x>o&&!(e[x-1].shaperInfo.category&(ya.M|wa));)x--
if(x>o&&e[x-1].shaperInfo.category===ya.M)for(var _=w,k=u+1;k<_;k++)if(e[k].shaperInfo.category===ya.M){x--
break}}x>o&&P(e[x-1])&&x<a&&A(e[x])&&x++
var S=w,E=e[S]
e.splice.apply(e,[x+1,0].concat(e.splice(x,S-x))),e[x]=E,x<=u&&u<S&&u++}break}e[o].shaperInfo.position!==va.Pre_M||o&&/Cf|Mn/.test(ft.getCategory(e[o-1].codePoints[0]))||(e[o].features.init=!0)}}function O(t,e){if(e>=t.length)return e
for(var n=t[e].shaperInfo.syllable;++e<t.length&&t[e].shaperInfo.syllable===n;);return e}function B(t){return Ta.get(t.codePoints[0])}function L(t,e){var n=0,r=Oa.match(e.map(B)),i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a,u=s[0],l=s[1],c=s[2];++n
for(var f=u;f<=l;f++)e[f].shaperInfo=new La(Ea[B(e[f])],c[0],n)
for(var h="R"===e[u].shaperInfo.category?1:Math.min(3,l-u),p=u;p<u+h;p++)e[p].features.rphf=!0}}function R(t,e){var n=e,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}o.substituted=!1}}function M(t,e){var n=e,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o
a.substituted&&a.features.rphf&&(a.shaperInfo.category="R")}}function F(t,e){var n=e,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o
a.substituted&&(a.shaperInfo.category="VPre")}}function z(t,e){for(var n=t.glyphForCodePoint(9676).id,r=0,i=D(e,0);r<e.length;i=D(e,r=i)){var o=void 0,a=void 0,s=e[r].shaperInfo,u=s.syllableType
if("virama_terminated_cluster"===u||"standard_cluster"===u||"broken_cluster"===u){if("broken_cluster"===u&&n){var l=new Ro(t,n,[9676])
for(l.shaperInfo=s,o=r;o<i&&"R"===e[o].shaperInfo.category;o++);e.splice(++o,0,l),i++}if("R"===s.category&&i-r>1)for(o=r+1;o<i;o++)if(s=e[o].shaperInfo,U(s)||N(e[o])){N(e[o])&&o--,e.splice.apply(e,[r,0].concat(e.splice(r+1,o-r),[e[o]]))
break}for(o=r,a=i;o<i;o++)s=e[o].shaperInfo,U(s)||N(e[o])?a=N(e[o])?o+1:o:("VPre"===s.category||"VMPre"===s.category)&&a<o&&e.splice.apply(e,[a,1,e[o]].concat(e.splice(a,o-a)))}}}function D(t,e){if(e>=t.length)return e
for(var n=t[e].shaperInfo.syllable;++e<t.length&&t[e].shaperInfo.syllable===n;);return e}function N(t){return"H"===t.shaperInfo.category&&!t.isLigated}function U(t){return"B"===t.category||"GB"===t.category}function W(t,e,n,r,i){var o={}
return Object.keys(r).forEach(function(t){o[t]=r[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(t,e,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,e,o),o=null),o}function j(t,e,n,r,i){var o={}
return Object.keys(r).forEach(function(t){o[t]=r[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(t,e,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,e,o),o=null),o}function G(t){var e=t.readUInt8()
return e===xs?t.readUInt16BE():e===ks?t.readUInt8()+Ss:e===_s?t.readUInt8()+2*Ss:e}function V(t,e){return 1&t?e:-e}function H(t,e,n){for(var r=void 0,i=r=0,o=[],a=0;a<n;a++){var s=0,u=0,l=t.readUInt8(),c=!(l>>7)
if((l&=127)<10)s=0,u=V(l,((14&l)<<7)+e.readUInt8())
else if(l<20)s=V(l,((l-10&14)<<7)+e.readUInt8()),u=0
else if(l<84){s=V(l,1+(48&(f=l-20))+((h=e.readUInt8())>>4)),u=V(l>>1,1+((12&f)<<2)+(15&h))}else if(l<120){var f
s=V(l,1+((f=l-84)/12<<8)+e.readUInt8()),u=V(l>>1,1+(f%12>>2<<8)+e.readUInt8())}else if(l<124){var h=e.readUInt8(),p=e.readUInt8()
s=V(l,(h<<4)+(p>>4)),u=V(l>>1,((15&p)<<8)+e.readUInt8())}else s=V(l,e.readUInt16BE()),u=V(l>>1,e.readUInt16BE())
i+=s,r+=u,o.push(new Ya(c,!1,i,r))}return o}var q=i(n(84)),Z=i(n(122)),Y=i(n(148)),X=i(n(181)),K=i(n(185)),J=i(n(188)),Q=i(n(205)),$=i(n(208)),tt=i(n(209)),et=i(n(210)),nt=i(n(227)),rt=i(n(228)),it=n(110),ot=i(n(236)),at=i(n(239)),st=i(n(242)),ut=i(n(246)),lt=i(n(249)),ct=i(n(254)),ft=i(n(258)),ht=i(n(17)),pt=i(n(260)),dt=i(n(269)),gt=i(n(272)),yt=i(n(18)),vt=i(n(273)),bt={}
bt.logErrors=!1
var mt=[]
bt.registerFormat=function(t){mt.push(t)},bt.openSync=function(t,e){var r=n(56).readFileSync(t)
return bt.create(r,e)},bt.open=function(t,e,r){"function"==typeof e&&(r=e,e=null),n(56).readFile(t,function(t,n){if(t)return r(t)
try{var i=bt.create(n,e)}catch(t){return r(t)}return r(null,i)})},bt.create=function(t,e){for(var n=0;n<mt.length;n++){var r=mt[n]
if(r.probe(t)){var i=new r(new q.DecodeStream(t))
return e?i.getFont(e):i}}throw new Error("Unknown font format")}
var wt=new q.Struct({firstCode:q.uint16,entryCount:q.uint16,idDelta:q.int16,idRangeOffset:q.uint16}),xt=new q.Struct({startCharCode:q.uint32,endCharCode:q.uint32,glyphID:q.uint32}),_t=new q.Struct({startUnicodeValue:q.uint24,additionalCount:q.uint8}),kt=new q.Struct({unicodeValue:q.uint24,glyphID:q.uint16}),St=new q.Array(_t,q.uint32),Ct=new q.Array(kt,q.uint32),At=new q.Struct({varSelector:q.uint24,defaultUVS:new q.Pointer(q.uint32,St,{type:"parent"}),nonDefaultUVS:new q.Pointer(q.uint32,Ct,{type:"parent"})}),Pt=new q.VersionedStruct(q.uint16,{0:{length:q.uint16,language:q.uint16,codeMap:new q.LazyArray(q.uint8,256)},2:{length:q.uint16,language:q.uint16,subHeaderKeys:new q.Array(q.uint16,256),subHeaderCount:function(t){return Math.max.apply(Math,t.subHeaderKeys)},subHeaders:new q.LazyArray(wt,"subHeaderCount"),glyphIndexArray:new q.LazyArray(q.uint16,"subHeaderCount")},4:{length:q.uint16,language:q.uint16,segCountX2:q.uint16,segCount:function(t){return t.segCountX2>>1},searchRange:q.uint16,entrySelector:q.uint16,rangeShift:q.uint16,endCode:new q.LazyArray(q.uint16,"segCount"),reservedPad:new q.Reserved(q.uint16),startCode:new q.LazyArray(q.uint16,"segCount"),idDelta:new q.LazyArray(q.int16,"segCount"),idRangeOffset:new q.LazyArray(q.uint16,"segCount"),glyphIndexArray:new q.LazyArray(q.uint16,function(t){return(t.length-t._currentOffset)/2})},6:{length:q.uint16,language:q.uint16,firstCode:q.uint16,entryCount:q.uint16,glyphIndices:new q.LazyArray(q.uint16,"entryCount")},8:{reserved:new q.Reserved(q.uint16),length:q.uint32,language:q.uint16,is32:new q.LazyArray(q.uint8,8192),nGroups:q.uint32,groups:new q.LazyArray(xt,"nGroups")},10:{reserved:new q.Reserved(q.uint16),length:q.uint32,language:q.uint32,firstCode:q.uint32,entryCount:q.uint32,glyphIndices:new q.LazyArray(q.uint16,"numChars")},12:{reserved:new q.Reserved(q.uint16),length:q.uint32,language:q.uint32,nGroups:q.uint32,groups:new q.LazyArray(xt,"nGroups")},13:{reserved:new q.Reserved(q.uint16),length:q.uint32,language:q.uint32,nGroups:q.uint32,groups:new q.LazyArray(xt,"nGroups")},14:{length:q.uint32,numRecords:q.uint32,varSelectors:new q.LazyArray(At,"numRecords")}}),Et=new q.Struct({platformID:q.uint16,encodingID:q.uint16,table:new q.Pointer(q.uint32,Pt,{type:"parent",lazy:!0})}),It=new q.Struct({version:q.uint16,numSubtables:q.uint16,tables:new q.Array(Et,"numSubtables")}),Tt=new q.Struct({version:q.int32,revision:q.int32,checkSumAdjustment:q.uint32,magicNumber:q.uint32,flags:q.uint16,unitsPerEm:q.uint16,created:new q.Array(q.int32,2),modified:new q.Array(q.int32,2),xMin:q.int16,yMin:q.int16,xMax:q.int16,yMax:q.int16,macStyle:new q.Bitfield(q.uint16,["bold","italic","underline","outline","shadow","condensed","extended"]),lowestRecPPEM:q.uint16,fontDirectionHint:q.int16,indexToLocFormat:q.int16,glyphDataFormat:q.int16}),Ot=new q.Struct({version:q.int32,ascent:q.int16,descent:q.int16,lineGap:q.int16,advanceWidthMax:q.uint16,minLeftSideBearing:q.int16,minRightSideBearing:q.int16,xMaxExtent:q.int16,caretSlopeRise:q.int16,caretSlopeRun:q.int16,caretOffset:q.int16,reserved:new q.Reserved(q.int16,4),metricDataFormat:q.int16,numberOfMetrics:q.uint16}),Bt=new q.Struct({advance:q.uint16,bearing:q.int16}),Lt=new q.Struct({metrics:new q.LazyArray(Bt,function(t){return t.parent.hhea.numberOfMetrics}),bearings:new q.LazyArray(q.int16,function(t){return t.parent.maxp.numGlyphs-t.parent.hhea.numberOfMetrics})}),Rt=new q.Struct({version:q.int32,numGlyphs:q.uint16,maxPoints:q.uint16,maxContours:q.uint16,maxComponentPoints:q.uint16,maxComponentContours:q.uint16,maxZones:q.uint16,maxTwilightPoints:q.uint16,maxStorage:q.uint16,maxFunctionDefs:q.uint16,maxInstructionDefs:q.uint16,maxStackElements:q.uint16,maxSizeOfInstructions:q.uint16,maxComponentElements:q.uint16,maxComponentDepth:q.uint16}),Mt=[["utf16be","utf16be","utf16be","utf16be","utf16be","utf16be"],["macroman","shift-jis","big5","euc-kr","iso-8859-6","iso-8859-8","macgreek","maccyrillic","symbol","Devanagari","Gurmukhi","Gujarati","Oriya","Bengali","Tamil","Telugu","Kannada","Malayalam","Sinhalese","Burmese","Khmer","macthai","Laotian","Georgian","Armenian","gb-2312-80","Tibetan","Mongolian","Geez","maccenteuro","Vietnamese","Sindhi"],["ascii"],["symbol","utf16be","shift-jis","gb18030","big5","wansung","johab",null,null,null,"utf16be"]],Ft={15:"maciceland",17:"macturkish",18:"maccroatian",24:"maccenteuro",25:"maccenteuro",26:"maccenteuro",27:"maccenteuro",28:"maccenteuro",30:"maciceland",37:"macromania",38:"maccenteuro",39:"maccenteuro",40:"maccenteuro",143:"macinuit",146:"macgaelic"},zt=[[],{0:"en",30:"fo",60:"ks",90:"rw",1:"fr",31:"fa",61:"ku",91:"rn",2:"de",32:"ru",62:"sd",92:"ny",3:"it",33:"zh",63:"bo",93:"mg",4:"nl",34:"nl-BE",64:"ne",94:"eo",5:"sv",35:"ga",65:"sa",128:"cy",6:"es",36:"sq",66:"mr",129:"eu",7:"da",37:"ro",67:"bn",130:"ca",8:"pt",38:"cz",68:"as",131:"la",9:"no",39:"sk",69:"gu",132:"qu",10:"he",40:"si",70:"pa",133:"gn",11:"ja",41:"yi",71:"or",134:"ay",12:"ar",42:"sr",72:"ml",135:"tt",13:"fi",43:"mk",73:"kn",136:"ug",14:"el",44:"bg",74:"ta",137:"dz",15:"is",45:"uk",75:"te",138:"jv",16:"mt",46:"be",76:"si",139:"su",17:"tr",47:"uz",77:"my",140:"gl",18:"hr",48:"kk",78:"km",141:"af",19:"zh-Hant",49:"az-Cyrl",79:"lo",142:"br",20:"ur",50:"az-Arab",80:"vi",143:"iu",21:"hi",51:"hy",81:"id",144:"gd",22:"th",52:"ka",82:"tl",145:"gv",23:"ko",53:"mo",83:"ms",146:"ga",24:"lt",54:"ky",84:"ms-Arab",147:"to",25:"pl",55:"tg",85:"am",148:"el-polyton",26:"hu",56:"tk",86:"ti",149:"kl",27:"es",57:"mn-CN",87:"om",150:"az",28:"lv",58:"mn",88:"so",151:"nn",29:"se",59:"ps",89:"sw"},[],{1078:"af",16393:"en-IN",1159:"rw",1074:"tn",1052:"sq",6153:"en-IE",1089:"sw",1115:"si",1156:"gsw",8201:"en-JM",1111:"kok",1051:"sk",1118:"am",17417:"en-MY",1042:"ko",1060:"sl",5121:"ar-DZ",5129:"en-NZ",1088:"ky",11274:"es-AR",15361:"ar-BH",13321:"en-PH",1108:"lo",16394:"es-BO",3073:"ar",18441:"en-SG",1062:"lv",13322:"es-CL",2049:"ar-IQ",7177:"en-ZA",1063:"lt",9226:"es-CO",11265:"ar-JO",11273:"en-TT",2094:"dsb",5130:"es-CR",13313:"ar-KW",2057:"en-GB",1134:"lb",7178:"es-DO",12289:"ar-LB",1033:"en",1071:"mk",12298:"es-EC",4097:"ar-LY",12297:"en-ZW",2110:"ms-BN",17418:"es-SV",6145:"ary",1061:"et",1086:"ms",4106:"es-GT",8193:"ar-OM",1080:"fo",1100:"ml",18442:"es-HN",16385:"ar-QA",1124:"fil",1082:"mt",2058:"es-MX",1025:"ar-SA",1035:"fi",1153:"mi",19466:"es-NI",10241:"ar-SY",2060:"fr-BE",1146:"arn",6154:"es-PA",7169:"aeb",3084:"fr-CA",1102:"mr",15370:"es-PY",14337:"ar-AE",1036:"fr",1148:"moh",10250:"es-PE",9217:"ar-YE",5132:"fr-LU",1104:"mn",20490:"es-PR",1067:"hy",6156:"fr-MC",2128:"mn-CN",3082:"es",1101:"as",4108:"fr-CH",1121:"ne",1034:"es",2092:"az-Cyrl",1122:"fy",1044:"nb",21514:"es-US",1068:"az",1110:"gl",2068:"nn",14346:"es-UY",1133:"ba",1079:"ka",1154:"oc",8202:"es-VE",1069:"eu",3079:"de-AT",1096:"or",2077:"sv-FI",1059:"be",1031:"de",1123:"ps",1053:"sv",2117:"bn",5127:"de-LI",1045:"pl",1114:"syr",1093:"bn-IN",4103:"de-LU",1046:"pt",1064:"tg",8218:"bs-Cyrl",2055:"de-CH",2070:"pt-PT",2143:"tzm",5146:"bs",1032:"el",1094:"pa",1097:"ta",1150:"br",1135:"kl",1131:"qu-BO",1092:"tt",1026:"bg",1095:"gu",2155:"qu-EC",1098:"te",1027:"ca",1128:"ha",3179:"qu",1054:"th",3076:"zh-HK",1037:"he",1048:"ro",1105:"bo",5124:"zh-MO",1081:"hi",1047:"rm",1055:"tr",2052:"zh",1038:"hu",1049:"ru",1090:"tk",4100:"zh-SG",1039:"is",9275:"smn",1152:"ug",1028:"zh-TW",1136:"ig",4155:"smj-NO",1058:"uk",1155:"co",1057:"id",5179:"smj",1070:"hsb",1050:"hr",1117:"iu",3131:"se-FI",1056:"ur",4122:"hr-BA",2141:"iu-Latn",1083:"se",2115:"uz-Cyrl",1029:"cs",2108:"ga",2107:"se-SE",1091:"uz",1030:"da",1076:"xh",8251:"sms",1066:"vi",1164:"prs",1077:"zu",6203:"sma-NO",1106:"cy",1125:"dv",1040:"it",7227:"sms",1160:"wo",2067:"nl-BE",2064:"it-CH",1103:"sa",1157:"sah",1043:"nl",1041:"ja",7194:"sr-Cyrl-BA",1144:"ii",3081:"en-AU",1099:"kn",3098:"sr",1130:"yo",10249:"en-BZ",1087:"kk",6170:"sr-Latn-BA",4105:"en-CA",1107:"km",2074:"sr-Latn",9225:"en-029",1158:"quc",1132:"nso"}],Dt=new q.Struct({platformID:q.uint16,encodingID:q.uint16,languageID:q.uint16,nameID:q.uint16,length:q.uint16,string:new q.Pointer(q.uint16,new q.String("length",function(t){return a(t.platformID,t.encodingID,t.languageID)}),{type:"parent",relativeTo:"parent.stringOffset",allowNull:!1})}),Nt=new q.Struct({length:q.uint16,tag:new q.Pointer(q.uint16,new q.String("length","utf16be"),{type:"parent",relativeTo:"stringOffset"})}),Ut=new q.VersionedStruct(q.uint16,{0:{count:q.uint16,stringOffset:q.uint16,records:new q.Array(Dt,"count")},1:{count:q.uint16,stringOffset:q.uint16,records:new q.Array(Dt,"count"),langTagCount:q.uint16,langTags:new q.Array(Nt,"langTagCount")}}),Wt=["copyright","fontFamily","fontSubfamily","uniqueSubfamily","fullName","version","postscriptName","trademark","manufacturer","designer","description","vendorURL","designerURL","license","licenseURL",null,"preferredFamily","preferredSubfamily","compatibleFull","sampleText","postscriptCIDFontName","wwsFamilyName","wwsSubfamilyName"]
Ut.process=function(t){var e={},n=this.records,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=zt[a.platformID][a.languageID]
null==s&&null!=this.langTags&&a.languageID>=32768&&(s=this.langTags[a.languageID-32768].tag),null==s&&(s=a.platformID+"-"+a.languageID)
var u=a.nameID>=256?"fontFeatures":Wt[a.nameID]||a.nameID
null==e[u]&&(e[u]={})
var l=e[u]
a.nameID>=256&&(l=l[a.nameID]||(l[a.nameID]={})),"string"!=typeof a.string&&"string"==typeof l[s]||(l[s]=a.string)}this.records=e},Ut.preEncode=function(){if(!Array.isArray(this.records)){this.version=0
var t=[]
for(var n in this.records){var r=this.records[n]
"fontFeatures"!==n&&(t.push({platformID:3,encodingID:1,languageID:1033,nameID:Wt.indexOf(n),length:e.byteLength(r.en,"utf16le"),string:r.en}),"postscriptName"===n&&t.push({platformID:1,encodingID:0,languageID:0,nameID:Wt.indexOf(n),length:r.en.length,string:r.en}))}this.records=t,this.count=t.length,this.stringOffset=Ut.size(this,null,!1)}}
var jt=new q.VersionedStruct(q.uint16,{header:{xAvgCharWidth:q.int16,usWeightClass:q.uint16,usWidthClass:q.uint16,fsType:new q.Bitfield(q.uint16,[null,"noEmbedding","viewOnly","editable",null,null,null,null,"noSubsetting","bitmapOnly"]),ySubscriptXSize:q.int16,ySubscriptYSize:q.int16,ySubscriptXOffset:q.int16,ySubscriptYOffset:q.int16,ySuperscriptXSize:q.int16,ySuperscriptYSize:q.int16,ySuperscriptXOffset:q.int16,ySuperscriptYOffset:q.int16,yStrikeoutSize:q.int16,yStrikeoutPosition:q.int16,sFamilyClass:q.int16,panose:new q.Array(q.uint8,10),ulCharRange:new q.Array(q.uint32,4),vendorID:new q.String(4),fsSelection:new q.Bitfield(q.uint16,["italic","underscore","negative","outlined","strikeout","bold","regular","useTypoMetrics","wws","oblique"]),usFirstCharIndex:q.uint16,usLastCharIndex:q.uint16},0:{},1:{typoAscender:q.int16,typoDescender:q.int16,typoLineGap:q.int16,winAscent:q.uint16,winDescent:q.uint16,codePageRange:new q.Array(q.uint32,2)},2:{typoAscender:q.int16,typoDescender:q.int16,typoLineGap:q.int16,winAscent:q.uint16,winDescent:q.uint16,codePageRange:new q.Array(q.uint32,2),xHeight:q.int16,capHeight:q.int16,defaultChar:q.uint16,breakChar:q.uint16,maxContent:q.uint16},5:{typoAscender:q.int16,typoDescender:q.int16,typoLineGap:q.int16,winAscent:q.uint16,winDescent:q.uint16,codePageRange:new q.Array(q.uint32,2),xHeight:q.int16,capHeight:q.int16,defaultChar:q.uint16,breakChar:q.uint16,maxContent:q.uint16,usLowerOpticalPointSize:q.uint16,usUpperOpticalPointSize:q.uint16}}),Gt=jt.versions
Gt[3]=Gt[4]=Gt[2]
var Vt=new q.VersionedStruct(q.fixed32,{header:{italicAngle:q.fixed32,underlinePosition:q.int16,underlineThickness:q.int16,isFixedPitch:q.uint32,minMemType42:q.uint32,maxMemType42:q.uint32,minMemType1:q.uint32,maxMemType1:q.uint32},1:{},2:{numberOfGlyphs:q.uint16,glyphNameIndex:new q.Array(q.uint16,"numberOfGlyphs"),names:new q.Array(new q.String(q.uint8))},2.5:{numberOfGlyphs:q.uint16,offsets:new q.Array(q.uint8,"numberOfGlyphs")},3:{},4:{map:new q.Array(q.uint32,function(t){return t.parent.maxp.numGlyphs})}}),Ht=new q.Struct({controlValues:new q.Array(q.int16)}),qt=new q.Struct({instructions:new q.Array(q.uint8)}),Zt=new q.VersionedStruct("head.indexToLocFormat",{0:{offsets:new q.Array(q.uint16)},1:{offsets:new q.Array(q.uint32)}})
Zt.process=function(){if(0===this.version)for(var t=0;t<this.offsets.length;t++)this.offsets[t]<<=1},Zt.preEncode=function(){if(null==this.version&&(this.version=this.offsets[this.offsets.length-1]>65535?1:0,0===this.version))for(var t=0;t<this.offsets.length;t++)this.offsets[t]>>>=1}
var Yt,Xt=new q.Struct({controlValueProgram:new q.Array(q.uint8)}),Kt=new q.Array(new q.Buffer),Jt=function(){function t(e){$(this,t),this.type=e}return t.prototype.getCFFVersion=function(t){for(;t&&!t.hdrSize;)t=t.parent
return t?t.version:-1},t.prototype.decode=function(t,e){var n=this.getCFFVersion(e)>=2?t.readUInt32BE():t.readUInt16BE()
if(0===n)return[]
var r=t.readUInt8(),i=void 0
if(1===r)i=q.uint8
else if(2===r)i=q.uint16
else if(3===r)i=q.uint24
else{if(4!==r)throw new Error("Bad offset size in CFFIndex: "+r+" "+t.pos)
i=q.uint32}for(var o=[],a=t.pos+(n+1)*r-1,s=i.decode(t),u=0;u<n;u++){var l=i.decode(t)
if(null!=this.type){var c=t.pos
t.pos=a+s,e.length=l-s,o.push(this.type.decode(t,e)),t.pos=c}else o.push({offset:a+s,length:l-s})
s=l}return t.pos=a+s,o},t.prototype.size=function(t,e){var n=2
if(0===t.length)return n
for(var r=this.type||new q.Buffer,i=1,o=0;o<t.length;o++){var a=t[o]
i+=r.size(a,e)}var s=void 0
if(i<=255)s=q.uint8
else if(i<=65535)s=q.uint16
else if(i<=16777215)s=q.uint24
else{if(!(i<=4294967295))throw new Error("Bad offset in CFFIndex")
s=q.uint32}return n+=1+s.size()*(t.length+1),n+=i-1},t.prototype.encode=function(t,e,n){if(t.writeUInt16BE(e.length),0!==e.length){var r=this.type||new q.Buffer,i=[],o=1,a=e,s=Array.isArray(a),u=0
for(a=s?a:Y(a);;){var l
if(s){if(u>=a.length)break
l=a[u++]}else{if((u=a.next()).done)break
l=u.value}var c=l,f=r.size(c,n)
i.push(f),o+=f}var h=void 0
if(o<=255)h=q.uint8
else if(o<=65535)h=q.uint16
else if(o<=16777215)h=q.uint24
else{if(!(o<=4294967295))throw new Error("Bad offset in CFFIndex")
h=q.uint32}t.writeUInt8(h.size()),o=1,h.encode(t,o)
var p=i,d=Array.isArray(p),g=0
for(p=d?p:Y(p);;){var y
if(d){if(g>=p.length)break
y=p[g++]}else{if((g=p.next()).done)break
y=g.value}o+=y,h.encode(t,o)}var v=e,b=Array.isArray(v),m=0
for(v=b?v:Y(v);;){var w
if(b){if(m>=v.length)break
w=v[m++]}else{if((m=v.next()).done)break
w=m.value}var x=w
r.encode(t,x,n)}}},t}(),Qt=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"],$t={".":10,E:11,"E-":12,"-":14},te=function(){function t(){$(this,t)}return t.decode=function(t,e){if(32<=e&&e<=246)return e-139
if(247<=e&&e<=250)return 256*(e-247)+t.readUInt8()+108
if(251<=e&&e<=254)return 256*-(e-251)-t.readUInt8()-108
if(28===e)return t.readInt16BE()
if(29===e)return t.readInt32BE()
if(30===e){for(var n="";;){var r=t.readUInt8(),i=r>>4
if(15===i)break
n+=Qt[i]
var o=15&r
if(15===o)break
n+=Qt[o]}return parseFloat(n)}return null},t.size=function(t){if(t.forceLarge&&(t=32768),(0|t)!==t){var e=""+t
return 1+Math.ceil((e.length+1)/2)}return-107<=t&&t<=107?1:108<=t&&t<=1131||-1131<=t&&t<=-108?2:-32768<=t&&t<=32767?3:5},t.encode=function(t,e){var n=Number(e)
if(e.forceLarge)return t.writeUInt8(29),t.writeInt32BE(n)
if((0|n)===n)return-107<=n&&n<=107?t.writeUInt8(n+139):108<=n&&n<=1131?(n-=108,t.writeUInt8(247+(n>>8)),t.writeUInt8(255&n)):-1131<=n&&n<=-108?(n=-n-108,t.writeUInt8(251+(n>>8)),t.writeUInt8(255&n)):-32768<=n&&n<=32767?(t.writeUInt8(28),t.writeInt16BE(n)):(t.writeUInt8(29),t.writeInt32BE(n))
t.writeUInt8(30)
for(var r=""+n,i=0;i<r.length;i+=2){var o=r[i],a=$t[o]||+o
if(i===r.length-1)var s=15
else{var u=r[i+1]
s=$t[u]||+u}t.writeUInt8(a<<4|15&s)}return 15!==s?t.writeUInt8(240):void 0},t}(),ee=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
$(this,t),this.ops=e,this.fields={}
var n=e,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=Array.isArray(a[0])?a[0][0]<<8|a[0][1]:a[0]
this.fields[s]=a}}return t.prototype.decodeOperands=function(t,e,n,r){var i=this
if(Array.isArray(t))return r.map(function(r,o){return i.decodeOperands(t[o],e,n,[r])})
if(null!=t.decode)return t.decode(e,n,r)
switch(t){case"number":case"offset":case"sid":return r[0]
case"boolean":return!!r[0]
default:return r}},t.prototype.encodeOperands=function(t,e,n,r){var i=this
return Array.isArray(t)?r.map(function(r,o){return i.encodeOperands(t[o],e,n,r)[0]}):null!=t.encode?t.encode(e,r,n):"number"==typeof r?[r]:"boolean"==typeof r?[+r]:Array.isArray(r)?r:[r]},t.prototype.decode=function(t,e){var n=t.pos+e.length,r={},i=[]
ot(r,{parent:{value:e},_startOffset:{value:t.pos}})
for(var o in this.fields){var a=this.fields[o]
r[a[1]]=a[3]}for(;t.pos<n;){var s=t.readUInt8()
if(s<28){12===s&&(s=s<<8|t.readUInt8())
var u=this.fields[s]
if(!u)throw new Error("Unknown operator "+s)
var l=this.decodeOperands(u[2],t,r,i)
null!=l&&(l instanceof it.PropertyDescriptor?Q(r,u[1],l):r[u[1]]=l),i=[]}else i.push(te.decode(t,s))}return r},t.prototype.size=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r={parent:e,val:t,pointerSize:0,startOffset:e.startOffset||0},i=0
for(var o in this.fields){var a=this.fields[o],s=t[a[1]]
if(null!=s&&!at(s,a[3])){var u=this.encodeOperands(a[2],null,r,s),l=Array.isArray(u),c=0
for(u=l?u:Y(u);;){var f
if(l){if(c>=u.length)break
f=u[c++]}else{if((c=u.next()).done)break
f=c.value}var h=f
i+=te.size(h)}i+=(Array.isArray(a[0])?a[0]:[a[0]]).length}}return n&&(i+=r.pointerSize),i},t.prototype.encode=function(t,e,n){var r={pointers:[],startOffset:t.pos,parent:n,val:e,pointerSize:0}
r.pointerOffset=t.pos+this.size(e,r,!1)
var i=this.ops,o=Array.isArray(i),a=0
for(i=o?i:Y(i);;){var s
if(o){if(a>=i.length)break
s=i[a++]}else{if((a=i.next()).done)break
s=a.value}var u=s,l=e[u[1]]
if(null!=l&&!at(l,u[3])){var c=this.encodeOperands(u[2],t,r,l),f=Array.isArray(c),h=0
for(c=f?c:Y(c);;){var p
if(f){if(h>=c.length)break
p=c[h++]}else{if((h=c.next()).done)break
p=h.value}var d=p
te.encode(t,d)}var g=Array.isArray(u[0])?u[0]:[u[0]],y=Array.isArray(g),v=0
for(g=y?g:Y(g);;){var b
if(y){if(v>=g.length)break
b=g[v++]}else{if((v=g.next()).done)break
b=v.value}var m=b
t.writeUInt8(m)}}}for(var w=0;w<r.pointers.length;){var x=r.pointers[w++]
x.type.encode(t,x.val,x.parent)}},t}(),ne=function(t){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return $(this,e),null==r.type&&(r.type="global"),nt(this,t.call(this,null,n,r))}return rt(e,t),e.prototype.decode=function(e,n,r){return this.offsetType={decode:function(){return r[0]}},t.prototype.decode.call(this,e,n,r)},e.prototype.encode=function(e,n,r){if(!e)return this.offsetType={size:function(){return 0}},this.size(n,r),[new re(0)]
var i=null
return this.offsetType={encode:function(t,e){return i=e}},t.prototype.encode.call(this,e,n,r),[new re(i)]},e}(q.Pointer),re=function(){function t(e){$(this,t),this.val=e,this.forceLarge=!0}return t.prototype.valueOf=function(){return this.val},t}(),ie=new ee([[6,"BlueValues","delta",null],[7,"OtherBlues","delta",null],[8,"FamilyBlues","delta",null],[9,"FamilyOtherBlues","delta",null],[[12,9],"BlueScale","number",.039625],[[12,10],"BlueShift","number",7],[[12,11],"BlueFuzz","number",1],[10,"StdHW","number",null],[11,"StdVW","number",null],[[12,12],"StemSnapH","delta",null],[[12,13],"StemSnapV","delta",null],[[12,14],"ForceBold","boolean",!1],[[12,17],"LanguageGroup","number",0],[[12,18],"ExpansionFactor","number",.06],[[12,19],"initialRandomSeed","number",0],[20,"defaultWidthX","number",0],[21,"nominalWidthX","number",0],[22,"vsindex","number",0],[23,"blend",function(){function t(){$(this,t)}return t.decode=function(t,e,n){for(var r=n.pop();n.length>r;)n.pop()},t}(),null],[19,"Subrs",new ne(new Jt,{type:"local"}),null]]),oe=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],ae=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],se=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],ue=new q.Struct({reserved:new q.Reserved(q.uint16),reqFeatureIndex:q.uint16,featureCount:q.uint16,featureIndexes:new q.Array(q.uint16,"featureCount")}),le=new q.Struct({tag:new q.String(4),langSys:new q.Pointer(q.uint16,ue,{type:"parent"})}),ce=new q.Struct({defaultLangSys:new q.Pointer(q.uint16,ue),count:q.uint16,langSysRecords:new q.Array(le,"count")}),fe=new q.Struct({tag:new q.String(4),script:new q.Pointer(q.uint16,ce,{type:"parent"})}),he=new q.Array(fe,q.uint16),pe=new q.Struct({featureParams:q.uint16,lookupCount:q.uint16,lookupListIndexes:new q.Array(q.uint16,"lookupCount")}),de=new q.Struct({tag:new q.String(4),feature:new q.Pointer(q.uint16,pe,{type:"parent"})}),ge=new q.Array(de,q.uint16),ye=new q.Struct({markAttachmentType:q.uint8,flags:new q.Bitfield(q.uint8,["rightToLeft","ignoreBaseGlyphs","ignoreLigatures","ignoreMarks","useMarkFilteringSet"])}),ve=new q.Struct({start:q.uint16,end:q.uint16,startCoverageIndex:q.uint16}),be=new q.VersionedStruct(q.uint16,{1:{glyphCount:q.uint16,glyphs:new q.Array(q.uint16,"glyphCount")},2:{rangeCount:q.uint16,rangeRecords:new q.Array(ve,"rangeCount")}}),me=new q.Struct({start:q.uint16,end:q.uint16,class:q.uint16}),we=new q.VersionedStruct(q.uint16,{1:{startGlyph:q.uint16,glyphCount:q.uint16,classValueArray:new q.Array(q.uint16,"glyphCount")},2:{classRangeCount:q.uint16,classRangeRecord:new q.Array(me,"classRangeCount")}}),xe=new q.Struct({startSize:q.uint16,endSize:q.uint16,deltaFormat:q.uint16}),_e=new q.Struct({sequenceIndex:q.uint16,lookupListIndex:q.uint16}),ke=new q.Struct({glyphCount:q.uint16,lookupCount:q.uint16,input:new q.Array(q.uint16,function(t){return t.glyphCount-1}),lookupRecords:new q.Array(_e,"lookupCount")}),Se=new q.Array(new q.Pointer(q.uint16,ke),q.uint16),Ce=new q.Struct({glyphCount:q.uint16,lookupCount:q.uint16,classes:new q.Array(q.uint16,function(t){return t.glyphCount-1}),lookupRecords:new q.Array(_e,"lookupCount")}),Ae=new q.Array(new q.Pointer(q.uint16,Ce),q.uint16),Pe=new q.VersionedStruct(q.uint16,{1:{coverage:new q.Pointer(q.uint16,be),ruleSetCount:q.uint16,ruleSets:new q.Array(new q.Pointer(q.uint16,Se),"ruleSetCount")},2:{coverage:new q.Pointer(q.uint16,be),classDef:new q.Pointer(q.uint16,we),classSetCnt:q.uint16,classSet:new q.Array(new q.Pointer(q.uint16,Ae),"classSetCnt")},3:{glyphCount:q.uint16,lookupCount:q.uint16,coverages:new q.Array(new q.Pointer(q.uint16,be),"glyphCount"),lookupRecords:new q.Array(_e,"lookupCount")}}),Ee=new q.Struct({backtrackGlyphCount:q.uint16,backtrack:new q.Array(q.uint16,"backtrackGlyphCount"),inputGlyphCount:q.uint16,input:new q.Array(q.uint16,function(t){return t.inputGlyphCount-1}),lookaheadGlyphCount:q.uint16,lookahead:new q.Array(q.uint16,"lookaheadGlyphCount"),lookupCount:q.uint16,lookupRecords:new q.Array(_e,"lookupCount")}),Ie=new q.Array(new q.Pointer(q.uint16,Ee),q.uint16),Te=new q.VersionedStruct(q.uint16,{1:{coverage:new q.Pointer(q.uint16,be),chainCount:q.uint16,chainRuleSets:new q.Array(new q.Pointer(q.uint16,Ie),"chainCount")},2:{coverage:new q.Pointer(q.uint16,be),backtrackClassDef:new q.Pointer(q.uint16,we),inputClassDef:new q.Pointer(q.uint16,we),lookaheadClassDef:new q.Pointer(q.uint16,we),chainCount:q.uint16,chainClassSet:new q.Array(new q.Pointer(q.uint16,Ie),"chainCount")},3:{backtrackGlyphCount:q.uint16,backtrackCoverage:new q.Array(new q.Pointer(q.uint16,be),"backtrackGlyphCount"),inputGlyphCount:q.uint16,inputCoverage:new q.Array(new q.Pointer(q.uint16,be),"inputGlyphCount"),lookaheadGlyphCount:q.uint16,lookaheadCoverage:new q.Array(new q.Pointer(q.uint16,be),"lookaheadGlyphCount"),lookupCount:q.uint16,lookupRecords:new q.Array(_e,"lookupCount")}}),Oe=new q.Fixed(16,"BE",14),Be=new q.Struct({startCoord:Oe,peakCoord:Oe,endCoord:Oe}),Le=new q.Struct({axisCount:q.uint16,regionCount:q.uint16,variationRegions:new q.Array(new q.Array(Be,"axisCount"),"regionCount")}),Re=new q.Struct({shortDeltas:new q.Array(q.int16,function(t){return t.parent.shortDeltaCount}),regionDeltas:new q.Array(q.int8,function(t){return t.parent.regionIndexCount-t.parent.shortDeltaCount}),deltas:function(t){return t.shortDeltas.concat(t.regionDeltas)}}),Me=new q.Struct({itemCount:q.uint16,shortDeltaCount:q.uint16,regionIndexCount:q.uint16,regionIndexes:new q.Array(q.uint16,"regionIndexCount"),deltaSets:new q.Array(Re,"itemCount")}),Fe=new q.Struct({format:q.uint16,variationRegionList:new q.Pointer(q.uint32,Le),variationDataCount:q.uint16,itemVariationData:new q.Array(new q.Pointer(q.uint32,Me),"variationDataCount")}),ze=new q.VersionedStruct(q.uint16,{1:(Yt={axisIndex:q.uint16},Yt.axisIndex=q.uint16,Yt.filterRangeMinValue=Oe,Yt.filterRangeMaxValue=Oe,Yt)}),De=new q.Struct({conditionCount:q.uint16,conditionTable:new q.Array(new q.Pointer(q.uint32,ze),"conditionCount")}),Ne=new q.Struct({featureIndex:q.uint16,alternateFeatureTable:new q.Pointer(q.uint32,pe,{type:"parent"})}),Ue=new q.Struct({version:q.fixed32,substitutionCount:q.uint16,substitutions:new q.Array(Ne,"substitutionCount")}),We=new q.Struct({conditionSet:new q.Pointer(q.uint32,De,{type:"parent"}),featureTableSubstitution:new q.Pointer(q.uint32,Ue,{type:"parent"})}),je=new q.Struct({majorVersion:q.uint16,minorVersion:q.uint16,featureVariationRecordCount:q.uint32,featureVariationRecords:new q.Array(We,"featureVariationRecordCount")}),Ge=function(){function t(e,n){$(this,t),this.predefinedOps=e,this.type=n}return t.prototype.decode=function(t,e,n){return this.predefinedOps[n[0]]?this.predefinedOps[n[0]]:this.type.decode(t,e,n)},t.prototype.size=function(t,e){return this.type.size(t,e)},t.prototype.encode=function(t,e,n){var r=this.predefinedOps.indexOf(e)
return-1!==r?r:this.type.encode(t,e,n)},t}(),Ve=function(t){function e(){return $(this,e),nt(this,t.call(this,"UInt8"))}return rt(e,t),e.prototype.decode=function(t){return 127&q.uint8.decode(t)},e}(q.Number),He=new q.Struct({first:q.uint16,nLeft:q.uint8}),qe=new q.Struct({first:q.uint16,nLeft:q.uint16}),Ze=new Ge([ae,["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"]],new ne(new q.VersionedStruct(new Ve,{0:{nCodes:q.uint8,codes:new q.Array(q.uint8,"nCodes")},1:{nRanges:q.uint8,ranges:new q.Array(He,"nRanges")}}),{lazy:!0})),Ye=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype.decode=function(t,e){for(var n=it.resolveLength(this.length,t,e),r=0,i=[];r<n;){var o=this.type.decode(t,e)
o.offset=r,r+=o.nLeft+1,i.push(o)}return i},e}(q.Array),Xe=new Ge([se,[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"]],new ne(new q.VersionedStruct(q.uint8,{0:{glyphs:new q.Array(q.uint16,function(t){return t.parent.CharStrings.length-1})},1:{ranges:new Ye(He,function(t){return t.parent.CharStrings.length-1})},2:{ranges:new Ye(qe,function(t){return t.parent.CharStrings.length-1})}}),{lazy:!0})),Ke=new q.Struct({first:q.uint16,fd:q.uint8}),Je=new q.Struct({first:q.uint32,fd:q.uint16}),Qe=new q.VersionedStruct(q.uint8,{0:{fds:new q.Array(q.uint8,function(t){return t.parent.CharStrings.length})},3:{nRanges:q.uint16,ranges:new q.Array(Ke,"nRanges"),sentinel:q.uint16},4:{nRanges:q.uint32,ranges:new q.Array(Je,"nRanges"),sentinel:q.uint32}}),$e=new ne(ie),tn=function(){function t(){$(this,t)}return t.prototype.decode=function(t,e,n){return e.length=n[0],$e.decode(t,e,[n[1]])},t.prototype.size=function(t,e){return[ie.size(t,e,!1),$e.size(t,e)[0]]},t.prototype.encode=function(t,e,n){return[ie.size(e,n,!1),$e.encode(t,e,n)[0]]},t}(),en=new ee([[18,"Private",new tn,null],[[12,38],"FontName","sid",null]]),nn=new ee([[[12,30],"ROS",["sid","sid","number"],null],[0,"version","sid",null],[1,"Notice","sid",null],[[12,0],"Copyright","sid",null],[2,"FullName","sid",null],[3,"FamilyName","sid",null],[4,"Weight","sid",null],[[12,1],"isFixedPitch","boolean",!1],[[12,2],"ItalicAngle","number",0],[[12,3],"UnderlinePosition","number",-100],[[12,4],"UnderlineThickness","number",50],[[12,5],"PaintType","number",0],[[12,6],"CharstringType","number",2],[[12,7],"FontMatrix","array",[.001,0,0,.001,0,0]],[13,"UniqueID","number",null],[5,"FontBBox","array",[0,0,0,0]],[[12,8],"StrokeWidth","number",0],[14,"XUID","array",null],[15,"charset",Xe,se],[16,"Encoding",Ze,ae],[17,"CharStrings",new ne(new Jt),null],[18,"Private",new tn,null],[[12,20],"SyntheticBase","number",null],[[12,21],"PostScript","sid",null],[[12,22],"BaseFontName","sid",null],[[12,23],"BaseFontBlend","delta",null],[[12,31],"CIDFontVersion","number",0],[[12,32],"CIDFontRevision","number",0],[[12,33],"CIDFontType","number",0],[[12,34],"CIDCount","number",8720],[[12,35],"UIDBase","number",null],[[12,37],"FDSelect",new ne(Qe),null],[[12,36],"FDArray",new ne(new Jt(en)),null],[[12,38],"FontName","sid",null]]),rn=new q.Struct({length:q.uint16,itemVariationStore:Fe}),on=new ee([[[12,7],"FontMatrix","array",[.001,0,0,.001,0,0]],[17,"CharStrings",new ne(new Jt),null],[[12,37],"FDSelect",new ne(Qe),null],[[12,36],"FDArray",new ne(new Jt(en)),null],[24,"vstore",new ne(rn),null],[25,"maxstack","number",193]]),an=new q.VersionedStruct(q.fixed16,{1:{hdrSize:q.uint8,offSize:q.uint8,nameIndex:new Jt(new q.String("length")),topDictIndex:new Jt(nn),stringIndex:new Jt(new q.String("length")),globalSubrIndex:new Jt},2:{hdrSize:q.uint8,length:q.uint16,topDict:on,globalSubrIndex:new Jt}}),sn=function(){function t(e){$(this,t),this.stream=e,this.decode()}return t.decode=function(e){return new t(e)},t.prototype.decode=function(){var t=(this.stream.pos,an.decode(this.stream))
for(var e in t){var n=t[e]
this[e]=n}if(this.version<2){if(1!==this.topDictIndex.length)throw new Error("Only a single font is allowed in CFF")
this.topDict=this.topDictIndex[0]}return this.isCIDFont=null!=this.topDict.ROS,this},t.prototype.string=function(t){return this.version>=2?null:t<oe.length?oe[t]:this.stringIndex[t-oe.length]},t.prototype.getCharString=function(t){return this.stream.pos=this.topDict.CharStrings[t].offset,this.stream.readBuffer(this.topDict.CharStrings[t].length)},t.prototype.getGlyphName=function(t){if(this.version>=2)return null
if(this.isCIDFont)return null
var e=this.topDict.charset
if(Array.isArray(e))return e[t]
if(0===t)return".notdef"
switch(t-=1,e.version){case 0:return this.string(e.glyphs[t])
case 1:case 2:for(var n=0;n<e.ranges.length;n++){var r=e.ranges[n]
if(r.offset<=t&&t<=r.offset+r.nLeft)return this.string(r.first+(t-r.offset))}}return null},t.prototype.fdForGlyph=function(t){if(!this.topDict.FDSelect)return null
switch(this.topDict.FDSelect.version){case 0:return this.topDict.FDSelect.fds[t]
case 3:case 4:for(var e=this.topDict.FDSelect.ranges,n=0,r=e.length-1;n<=r;){var i=n+r>>1
if(t<e[i].first)r=i-1
else{if(!(i<r&&t>e[i+1].first))return e[i].fd
n=i+1}}default:throw new Error("Unknown FDSelect version: "+this.topDict.FDSelect.version)}},t.prototype.privateDictForGlyph=function(t){if(this.topDict.FDSelect){var e=this.fdForGlyph(t)
return this.topDict.FDArray[e]?this.topDict.FDArray[e].Private:null}return this.version<2?this.topDict.Private:this.topDict.FDArray[0].Private},tt(t,[{key:"postscriptName",get:function(){return this.version<2?this.nameIndex[0]:null}},{key:"fullName",get:function(){return this.string(this.topDict.FullName)}},{key:"familyName",get:function(){return this.string(this.topDict.FamilyName)}}]),t}(),un=new q.Struct({glyphIndex:q.uint16,vertOriginY:q.int16}),ln=new q.Struct({majorVersion:q.uint16,minorVersion:q.uint16,defaultVertOriginY:q.int16,numVertOriginYMetrics:q.uint16,metrics:new q.Array(un,"numVertOriginYMetrics")}),cn=new q.Struct({height:q.uint8,width:q.uint8,horiBearingX:q.int8,horiBearingY:q.int8,horiAdvance:q.uint8,vertBearingX:q.int8,vertBearingY:q.int8,vertAdvance:q.uint8}),fn=new q.Struct({height:q.uint8,width:q.uint8,bearingX:q.int8,bearingY:q.int8,advance:q.uint8}),hn=new q.Struct({glyph:q.uint16,xOffset:q.int8,yOffset:q.int8}),pn=function t(){$(this,t)},dn=function t(){$(this,t)},gn=(new q.VersionedStruct("version",{1:{metrics:fn,data:pn},2:{metrics:fn,data:dn},5:{data:dn},6:{metrics:cn,data:pn},7:{metrics:cn,data:dn},8:{metrics:fn,pad:new q.Reserved(q.uint8),numComponents:q.uint16,components:new q.Array(hn,"numComponents")},9:{metrics:cn,pad:new q.Reserved(q.uint8),numComponents:q.uint16,components:new q.Array(hn,"numComponents")},17:{metrics:fn,dataLen:q.uint32,data:new q.Buffer("dataLen")},18:{metrics:cn,dataLen:q.uint32,data:new q.Buffer("dataLen")},19:{dataLen:q.uint32,data:new q.Buffer("dataLen")}}),new q.Struct({ascender:q.int8,descender:q.int8,widthMax:q.uint8,caretSlopeNumerator:q.int8,caretSlopeDenominator:q.int8,caretOffset:q.int8,minOriginSB:q.int8,minAdvanceSB:q.int8,maxBeforeBL:q.int8,minAfterBL:q.int8,pad:new q.Reserved(q.int8,2)})),yn=new q.Struct({glyphCode:q.uint16,offset:q.uint16}),vn=new q.VersionedStruct(q.uint16,{header:{imageFormat:q.uint16,imageDataOffset:q.uint32},1:{offsetArray:new q.Array(q.uint32,function(t){return t.parent.lastGlyphIndex-t.parent.firstGlyphIndex+1})},2:{imageSize:q.uint32,bigMetrics:cn},3:{offsetArray:new q.Array(q.uint16,function(t){return t.parent.lastGlyphIndex-t.parent.firstGlyphIndex+1})},4:{numGlyphs:q.uint32,glyphArray:new q.Array(yn,function(t){return t.numGlyphs+1})},5:{imageSize:q.uint32,bigMetrics:cn,numGlyphs:q.uint32,glyphCodeArray:new q.Array(q.uint16,"numGlyphs")}}),bn=new q.Struct({firstGlyphIndex:q.uint16,lastGlyphIndex:q.uint16,subtable:new q.Pointer(q.uint32,vn)}),mn=new q.Struct({indexSubTableArray:new q.Pointer(q.uint32,new q.Array(bn,1),{type:"parent"}),indexTablesSize:q.uint32,numberOfIndexSubTables:q.uint32,colorRef:q.uint32,hori:gn,vert:gn,startGlyphIndex:q.uint16,endGlyphIndex:q.uint16,ppemX:q.uint8,ppemY:q.uint8,bitDepth:q.uint8,flags:new q.Bitfield(q.uint8,["horizontal","vertical"])}),wn=new q.Struct({version:q.uint32,numSizes:q.uint32,sizes:new q.Array(mn,"numSizes")}),xn=new q.Struct({ppem:q.uint16,resolution:q.uint16,imageOffsets:new q.Array(new q.Pointer(q.uint32,"void"),function(t){return t.parent.parent.maxp.numGlyphs+1})}),_n=new q.Struct({version:q.uint16,flags:new q.Bitfield(q.uint16,["renderOutlines"]),numImgTables:q.uint32,imageTables:new q.Array(new q.Pointer(q.uint32,xn),"numImgTables")}),kn=new q.Struct({gid:q.uint16,paletteIndex:q.uint16}),Sn=new q.Struct({gid:q.uint16,firstLayerIndex:q.uint16,numLayers:q.uint16}),Cn=new q.Struct({version:q.uint16,numBaseGlyphRecords:q.uint16,baseGlyphRecord:new q.Pointer(q.uint32,new q.Array(Sn,"numBaseGlyphRecords")),layerRecords:new q.Pointer(q.uint32,new q.Array(kn,"numLayerRecords"),{lazy:!0}),numLayerRecords:q.uint16}),An=new q.Struct({blue:q.uint8,green:q.uint8,red:q.uint8,alpha:q.uint8}),Pn=new q.Struct({version:q.uint16,numPaletteEntries:q.uint16,numPalettes:q.uint16,numColorRecords:q.uint16,colorRecords:new q.Pointer(q.uint32,new q.Array(An,"numColorRecords")),colorRecordIndices:new q.Array(q.uint16,"numPalettes")}),En=new q.VersionedStruct(q.uint16,{1:{coordinate:q.int16},2:{coordinate:q.int16,referenceGlyph:q.uint16,baseCoordPoint:q.uint16},3:{coordinate:q.int16,deviceTable:new q.Pointer(q.uint16,xe)}}),In=new q.Struct({defaultIndex:q.uint16,baseCoordCount:q.uint16,baseCoords:new q.Array(new q.Pointer(q.uint16,En),"baseCoordCount")}),Tn=new q.Struct({tag:new q.String(4),minCoord:new q.Pointer(q.uint16,En,{type:"parent"}),maxCoord:new q.Pointer(q.uint16,En,{type:"parent"})}),On=new q.Struct({minCoord:new q.Pointer(q.uint16,En),maxCoord:new q.Pointer(q.uint16,En),featMinMaxCount:q.uint16,featMinMaxRecords:new q.Array(Tn,"featMinMaxCount")}),Bn=new q.Struct({tag:new q.String(4),minMax:new q.Pointer(q.uint16,On,{type:"parent"})}),Ln=new q.Struct({baseValues:new q.Pointer(q.uint16,In),defaultMinMax:new q.Pointer(q.uint16,On),baseLangSysCount:q.uint16,baseLangSysRecords:new q.Array(Bn,"baseLangSysCount")}),Rn=new q.Struct({tag:new q.String(4),script:new q.Pointer(q.uint16,Ln,{type:"parent"})}),Mn=new q.Array(Rn,q.uint16),Fn=new q.Array(new q.String(4),q.uint16),zn=new q.Struct({baseTagList:new q.Pointer(q.uint16,Fn),baseScriptList:new q.Pointer(q.uint16,Mn)}),Dn=new q.VersionedStruct(q.uint32,{header:{horizAxis:new q.Pointer(q.uint16,zn),vertAxis:new q.Pointer(q.uint16,zn)},65536:{},65537:{itemVariationStore:new q.Pointer(q.uint32,Fe)}}),Nn=new q.Array(q.uint16,q.uint16),Un=new q.Struct({coverage:new q.Pointer(q.uint16,be),glyphCount:q.uint16,attachPoints:new q.Array(new q.Pointer(q.uint16,Nn),"glyphCount")}),Wn=new q.VersionedStruct(q.uint16,{1:{coordinate:q.int16},2:{caretValuePoint:q.uint16},3:{coordinate:q.int16,deviceTable:new q.Pointer(q.uint16,xe)}}),jn=new q.Array(new q.Pointer(q.uint16,Wn),q.uint16),Gn=new q.Struct({coverage:new q.Pointer(q.uint16,be),ligGlyphCount:q.uint16,ligGlyphs:new q.Array(new q.Pointer(q.uint16,jn),"ligGlyphCount")}),Vn=new q.Struct({markSetTableFormat:q.uint16,markSetCount:q.uint16,coverage:new q.Array(new q.Pointer(q.uint32,be),"markSetCount")}),Hn=new q.VersionedStruct(q.uint32,{header:{glyphClassDef:new q.Pointer(q.uint16,we),attachList:new q.Pointer(q.uint16,Un),ligCaretList:new q.Pointer(q.uint16,Gn),markAttachClassDef:new q.Pointer(q.uint16,we)},65536:{},65538:{markGlyphSetsDef:new q.Pointer(q.uint16,Vn)},65539:{markGlyphSetsDef:new q.Pointer(q.uint16,Vn),itemVariationStore:new q.Pointer(q.uint32,Fe)}}),qn=new q.Bitfield(q.uint16,["xPlacement","yPlacement","xAdvance","yAdvance","xPlaDevice","yPlaDevice","xAdvDevice","yAdvDevice"]),Zn={xPlacement:q.int16,yPlacement:q.int16,xAdvance:q.int16,yAdvance:q.int16,xPlaDevice:new q.Pointer(q.uint16,xe,{type:"global",relativeTo:"rel"}),yPlaDevice:new q.Pointer(q.uint16,xe,{type:"global",relativeTo:"rel"}),xAdvDevice:new q.Pointer(q.uint16,xe,{type:"global",relativeTo:"rel"}),yAdvDevice:new q.Pointer(q.uint16,xe,{type:"global",relativeTo:"rel"})},Yn=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"valueFormat"
$(this,t),this.key=e}return t.prototype.buildStruct=function(t){for(var e=t;!e[this.key]&&e.parent;)e=e.parent
if(e[this.key]){var n={}
n.rel=function(){return e._startOffset}
var r=e[this.key]
for(var i in r)r[i]&&(n[i]=Zn[i])
return new q.Struct(n)}},t.prototype.size=function(t,e){return this.buildStruct(e).size(t,e)},t.prototype.decode=function(t,e){var n=this.buildStruct(e).decode(t,e)
return delete n.rel,n},t}(),Xn=new q.Struct({secondGlyph:q.uint16,value1:new Yn("valueFormat1"),value2:new Yn("valueFormat2")}),Kn=new q.Array(Xn,q.uint16),Jn=new q.Struct({value1:new Yn("valueFormat1"),value2:new Yn("valueFormat2")}),Qn=new q.VersionedStruct(q.uint16,{1:{xCoordinate:q.int16,yCoordinate:q.int16},2:{xCoordinate:q.int16,yCoordinate:q.int16,anchorPoint:q.uint16},3:{xCoordinate:q.int16,yCoordinate:q.int16,xDeviceTable:new q.Pointer(q.uint16,xe),yDeviceTable:new q.Pointer(q.uint16,xe)}}),$n=new q.Struct({entryAnchor:new q.Pointer(q.uint16,Qn,{type:"parent"}),exitAnchor:new q.Pointer(q.uint16,Qn,{type:"parent"})}),tr=new q.Struct({class:q.uint16,markAnchor:new q.Pointer(q.uint16,Qn,{type:"parent"})}),er=new q.Array(tr,q.uint16),nr=new q.Array(new q.Pointer(q.uint16,Qn),function(t){return t.parent.classCount}),rr=new q.Array(nr,q.uint16),ir=new q.Array(new q.Pointer(q.uint16,Qn),function(t){return t.parent.parent.classCount}),or=new q.Array(ir,q.uint16),ar=new q.Array(new q.Pointer(q.uint16,or),q.uint16),sr=new q.VersionedStruct("lookupType",{1:new q.VersionedStruct(q.uint16,{1:{coverage:new q.Pointer(q.uint16,be),valueFormat:qn,value:new Yn},2:{coverage:new q.Pointer(q.uint16,be),valueFormat:qn,valueCount:q.uint16,values:new q.LazyArray(new Yn,"valueCount")}}),2:new q.VersionedStruct(q.uint16,{1:{coverage:new q.Pointer(q.uint16,be),valueFormat1:qn,valueFormat2:qn,pairSetCount:q.uint16,pairSets:new q.LazyArray(new q.Pointer(q.uint16,Kn),"pairSetCount")},2:{coverage:new q.Pointer(q.uint16,be),valueFormat1:qn,valueFormat2:qn,classDef1:new q.Pointer(q.uint16,we),classDef2:new q.Pointer(q.uint16,we),class1Count:q.uint16,class2Count:q.uint16,classRecords:new q.LazyArray(new q.LazyArray(Jn,"class2Count"),"class1Count")}}),3:{format:q.uint16,coverage:new q.Pointer(q.uint16,be),entryExitCount:q.uint16,entryExitRecords:new q.Array($n,"entryExitCount")},4:{format:q.uint16,markCoverage:new q.Pointer(q.uint16,be),baseCoverage:new q.Pointer(q.uint16,be),classCount:q.uint16,markArray:new q.Pointer(q.uint16,er),baseArray:new q.Pointer(q.uint16,rr)},5:{format:q.uint16,markCoverage:new q.Pointer(q.uint16,be),ligatureCoverage:new q.Pointer(q.uint16,be),classCount:q.uint16,markArray:new q.Pointer(q.uint16,er),ligatureArray:new q.Pointer(q.uint16,ar)},6:{format:q.uint16,mark1Coverage:new q.Pointer(q.uint16,be),mark2Coverage:new q.Pointer(q.uint16,be),classCount:q.uint16,mark1Array:new q.Pointer(q.uint16,er),mark2Array:new q.Pointer(q.uint16,rr)},7:Pe,8:Te,9:{posFormat:q.uint16,lookupType:q.uint16,extension:new q.Pointer(q.uint32,sr)}})
sr.versions[9].extension.type=sr
var ur=new q.VersionedStruct(q.uint32,{header:{scriptList:new q.Pointer(q.uint16,he),featureList:new q.Pointer(q.uint16,ge),lookupList:new q.Pointer(q.uint16,new s(sr))},65536:{},65537:{featureVariations:new q.Pointer(q.uint32,je)}}),lr=new q.Array(q.uint16,q.uint16),cr=lr,fr=new q.Struct({glyph:q.uint16,compCount:q.uint16,components:new q.Array(q.uint16,function(t){return t.compCount-1})}),hr=new q.Array(new q.Pointer(q.uint16,fr),q.uint16),pr=new q.VersionedStruct("lookupType",{1:new q.VersionedStruct(q.uint16,{1:{coverage:new q.Pointer(q.uint16,be),deltaGlyphID:q.int16},2:{coverage:new q.Pointer(q.uint16,be),glyphCount:q.uint16,substitute:new q.LazyArray(q.uint16,"glyphCount")}}),2:{substFormat:q.uint16,coverage:new q.Pointer(q.uint16,be),count:q.uint16,sequences:new q.LazyArray(new q.Pointer(q.uint16,lr),"count")},3:{substFormat:q.uint16,coverage:new q.Pointer(q.uint16,be),count:q.uint16,alternateSet:new q.LazyArray(new q.Pointer(q.uint16,cr),"count")},4:{substFormat:q.uint16,coverage:new q.Pointer(q.uint16,be),count:q.uint16,ligatureSets:new q.LazyArray(new q.Pointer(q.uint16,hr),"count")},5:Pe,6:Te,7:{substFormat:q.uint16,lookupType:q.uint16,extension:new q.Pointer(q.uint32,pr)},8:{substFormat:q.uint16,coverage:new q.Pointer(q.uint16,be),backtrackCoverage:new q.Array(new q.Pointer(q.uint16,be),"backtrackGlyphCount"),lookaheadGlyphCount:q.uint16,lookaheadCoverage:new q.Array(new q.Pointer(q.uint16,be),"lookaheadGlyphCount"),glyphCount:q.uint16,substitutes:new q.Array(q.uint16,"glyphCount")}})
pr.versions[7].extension.type=pr
var dr=new q.VersionedStruct(q.uint32,{header:{scriptList:new q.Pointer(q.uint16,he),featureList:new q.Pointer(q.uint16,ge),lookupList:new q.Pointer(q.uint16,new s(pr))},65536:{},65537:{featureVariations:new q.Pointer(q.uint32,je)}}),gr=new q.Array(q.uint16,q.uint16),yr=new q.Struct({shrinkageEnableGSUB:new q.Pointer(q.uint16,gr),shrinkageDisableGSUB:new q.Pointer(q.uint16,gr),shrinkageEnableGPOS:new q.Pointer(q.uint16,gr),shrinkageDisableGPOS:new q.Pointer(q.uint16,gr),shrinkageJstfMax:new q.Pointer(q.uint16,new s(sr)),extensionEnableGSUB:new q.Pointer(q.uint16,gr),extensionDisableGSUB:new q.Pointer(q.uint16,gr),extensionEnableGPOS:new q.Pointer(q.uint16,gr),extensionDisableGPOS:new q.Pointer(q.uint16,gr),extensionJstfMax:new q.Pointer(q.uint16,new s(sr))}),vr=new q.Array(new q.Pointer(q.uint16,yr),q.uint16),br=new q.Struct({tag:new q.String(4),jstfLangSys:new q.Pointer(q.uint16,vr)}),mr=new q.Struct({extenderGlyphs:new q.Pointer(q.uint16,new q.Array(q.uint16,q.uint16)),defaultLangSys:new q.Pointer(q.uint16,vr),langSysCount:q.uint16,langSysRecords:new q.Array(br,"langSysCount")}),wr=new q.Struct({tag:new q.String(4),script:new q.Pointer(q.uint16,mr,{type:"parent"})}),xr=new q.Struct({version:q.uint32,scriptCount:q.uint16,scriptList:new q.Array(wr,"scriptCount")}),_r=function(){function t(e){$(this,t),this._size=e}return t.prototype.decode=function(t,e){switch(this.size(0,e)){case 1:return t.readUInt8()
case 2:return t.readUInt16BE()
case 3:return t.readUInt24BE()
case 4:return t.readUInt32BE()}},t.prototype.size=function(t,e){return it.resolveLength(this._size,null,e)},t}(),kr=new q.Struct({entry:new _r(function(t){return 1+((48&t.parent.entryFormat)>>4)}),outerIndex:function(t){return t.entry>>1+(15&t.parent.entryFormat)},innerIndex:function(t){return t.entry&(1<<1+(15&t.parent.entryFormat))-1}}),Sr=new q.Struct({entryFormat:q.uint16,mapCount:q.uint16,mapData:new q.Array(kr,"mapCount")}),Cr=new q.Struct({majorVersion:q.uint16,minorVersion:q.uint16,itemVariationStore:new q.Pointer(q.uint32,Fe),advanceWidthMapping:new q.Pointer(q.uint32,Sr),LSBMapping:new q.Pointer(q.uint32,Sr),RSBMapping:new q.Pointer(q.uint32,Sr)}),Ar=new q.Struct({format:q.uint32,length:q.uint32,offset:q.uint32}),Pr=new q.Struct({reserved:new q.Reserved(q.uint16,2),cbSignature:q.uint32,signature:new q.Buffer("cbSignature")}),Er=new q.Struct({ulVersion:q.uint32,usNumSigs:q.uint16,usFlag:q.uint16,signatures:new q.Array(Ar,"usNumSigs"),signatureBlocks:new q.Array(Pr,"usNumSigs")}),Ir=new q.Struct({rangeMaxPPEM:q.uint16,rangeGaspBehavior:new q.Bitfield(q.uint16,["grayscale","gridfit","symmetricSmoothing","symmetricGridfit"])}),Tr=new q.Struct({version:q.uint16,numRanges:q.uint16,gaspRanges:new q.Array(Ir,"numRanges")}),Or=new q.Struct({pixelSize:q.uint8,maximumWidth:q.uint8,widths:new q.Array(q.uint8,function(t){return t.parent.parent.maxp.numGlyphs})}),Br=new q.Struct({version:q.uint16,numRecords:q.int16,sizeDeviceRecord:q.int32,records:new q.Array(Or,"numRecords")}),Lr=new q.Struct({left:q.uint16,right:q.uint16,value:q.int16}),Rr=new q.Struct({firstGlyph:q.uint16,nGlyphs:q.uint16,offsets:new q.Array(q.uint16,"nGlyphs"),max:function(t){return t.offsets.length&&Math.max.apply(Math,t.offsets)}}),Mr=new q.Struct({off:function(t){return t._startOffset-t.parent.parent._startOffset},len:function(t){return((t.parent.leftTable.max-t.off)/t.parent.rowWidth+1)*(t.parent.rowWidth/2)},values:new q.LazyArray(q.int16,"len")}),Fr=new q.VersionedStruct("format",{0:{nPairs:q.uint16,searchRange:q.uint16,entrySelector:q.uint16,rangeShift:q.uint16,pairs:new q.Array(Lr,"nPairs")},2:{rowWidth:q.uint16,leftTable:new q.Pointer(q.uint16,Rr,{type:"parent"}),rightTable:new q.Pointer(q.uint16,Rr,{type:"parent"}),array:new q.Pointer(q.uint16,Mr,{type:"parent"})},3:{glyphCount:q.uint16,kernValueCount:q.uint8,leftClassCount:q.uint8,rightClassCount:q.uint8,flags:q.uint8,kernValue:new q.Array(q.int16,"kernValueCount"),leftClass:new q.Array(q.uint8,"glyphCount"),rightClass:new q.Array(q.uint8,"glyphCount"),kernIndex:new q.Array(q.uint8,function(t){return t.leftClassCount*t.rightClassCount})}}),zr=new q.VersionedStruct("version",{0:{subVersion:q.uint16,length:q.uint16,format:q.uint8,coverage:new q.Bitfield(q.uint8,["horizontal","minimum","crossStream","override"]),subtable:Fr,padding:new q.Reserved(q.uint8,function(t){return t.length-t._currentOffset})},1:{length:q.uint32,coverage:new q.Bitfield(q.uint8,[null,null,null,null,null,"variation","crossStream","vertical"]),format:q.uint8,tupleIndex:q.uint16,subtable:Fr,padding:new q.Reserved(q.uint8,function(t){return t.length-t._currentOffset})}}),Dr=new q.VersionedStruct(q.uint16,{0:{nTables:q.uint16,tables:new q.Array(zr,"nTables")},1:{reserved:new q.Reserved(q.uint16),nTables:q.uint32,tables:new q.Array(zr,"nTables")}}),Nr=new q.Struct({version:q.uint16,numGlyphs:q.uint16,yPels:new q.Array(q.uint8,"numGlyphs")}),Ur=new q.Struct({version:q.uint16,fontNumber:q.uint32,pitch:q.uint16,xHeight:q.uint16,style:q.uint16,typeFamily:q.uint16,capHeight:q.uint16,symbolSet:q.uint16,typeface:new q.String(16),characterComplement:new q.String(8),fileName:new q.String(6),strokeWeight:new q.String(1),widthType:new q.String(1),serifStyle:q.uint8,reserved:new q.Reserved(q.uint8)}),Wr=new q.Struct({bCharSet:q.uint8,xRatio:q.uint8,yStartRatio:q.uint8,yEndRatio:q.uint8}),jr=new q.Struct({yPelHeight:q.uint16,yMax:q.int16,yMin:q.int16}),Gr=new q.Struct({recs:q.uint16,startsz:q.uint8,endsz:q.uint8,entries:new q.Array(jr,"recs")}),Vr=new q.Struct({version:q.uint16,numRecs:q.uint16,numRatios:q.uint16,ratioRanges:new q.Array(Wr,"numRatios"),offsets:new q.Array(q.uint16,"numRatios"),groups:new q.Array(Gr,"numRecs")}),Hr=new q.Struct({version:q.uint16,ascent:q.int16,descent:q.int16,lineGap:q.int16,advanceHeightMax:q.int16,minTopSideBearing:q.int16,minBottomSideBearing:q.int16,yMaxExtent:q.int16,caretSlopeRise:q.int16,caretSlopeRun:q.int16,caretOffset:q.int16,reserved:new q.Reserved(q.int16,4),metricDataFormat:q.int16,numberOfMetrics:q.uint16}),qr=new q.Struct({advance:q.uint16,bearing:q.int16}),Zr=new q.Struct({metrics:new q.LazyArray(qr,function(t){return t.parent.vhea.numberOfMetrics}),bearings:new q.LazyArray(q.int16,function(t){return t.parent.maxp.numGlyphs-t.parent.vhea.numberOfMetrics})}),Yr=new q.Fixed(16,"BE",14),Xr=new q.Struct({fromCoord:Yr,toCoord:Yr}),Kr=new q.Struct({pairCount:q.uint16,correspondence:new q.Array(Xr,"pairCount")}),Jr=new q.Struct({version:q.fixed32,axisCount:q.uint32,segment:new q.Array(Kr,"axisCount")}),Qr=function(){function t(e,n,r){$(this,t),this.type=e,this.stream=n,this.parent=r,this.base=this.stream.pos,this._items=[]}return t.prototype.getItem=function(t){if(null==this._items[t]){var e=this.stream.pos
this.stream.pos=this.base+this.type.size(null,this.parent)*t,this._items[t]=this.type.decode(this.stream,this.parent),this.stream.pos=e}return this._items[t]},t.prototype.inspect=function(){return"[UnboundedArray "+this.type.constructor.name+"]"},t}(),$r=function(t){function e(n){return $(this,e),nt(this,t.call(this,n,0))}return rt(e,t),e.prototype.decode=function(t,e){return new Qr(this.type,t,e)},e}(q.Array),ti=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q.uint16
t=new(function(){function t(e){$(this,t),this.type=e}return t.prototype.decode=function(t,e){return e=e.parent.parent,this.type.decode(t,e)},t.prototype.size=function(t,e){return e=e.parent.parent,this.type.size(t,e)},t.prototype.encode=function(t,e,n){return n=n.parent.parent,this.type.encode(t,e,n)},t}())(t)
var e=new q.Struct({unitSize:q.uint16,nUnits:q.uint16,searchRange:q.uint16,entrySelector:q.uint16,rangeShift:q.uint16}),n=new q.Struct({lastGlyph:q.uint16,firstGlyph:q.uint16,value:t}),r=new q.Struct({lastGlyph:q.uint16,firstGlyph:q.uint16,values:new q.Pointer(q.uint16,new q.Array(t,function(t){return t.lastGlyph-t.firstGlyph+1}),{type:"parent"})}),i=new q.Struct({glyph:q.uint16,value:t})
return new q.VersionedStruct(q.uint16,{0:{values:new $r(t)},2:{binarySearchHeader:e,segments:new q.Array(n,function(t){return t.binarySearchHeader.nUnits})},4:{binarySearchHeader:e,segments:new q.Array(r,function(t){return t.binarySearchHeader.nUnits})},6:{binarySearchHeader:e,segments:new q.Array(i,function(t){return t.binarySearchHeader.nUnits})},8:{firstGlyph:q.uint16,count:q.uint16,values:new q.Array(t,"count")}})},ei=new q.VersionedStruct("format",{0:{deltas:new q.Array(q.int16,32)},1:{deltas:new q.Array(q.int16,32),mappingData:new ti(q.uint16)},2:{standardGlyph:q.uint16,controlPoints:new q.Array(q.uint16,32)},3:{standardGlyph:q.uint16,controlPoints:new q.Array(q.uint16,32),mappingData:new ti(q.uint16)}}),ni=new q.Struct({version:q.fixed32,format:q.uint16,defaultBaseline:q.uint16,subtable:ei}),ri=new q.Struct({setting:q.uint16,nameIndex:q.int16,name:function(t){return t.parent.parent.parent.name.records.fontFeatures[t.nameIndex]}}),ii=new q.Struct({feature:q.uint16,nSettings:q.uint16,settingTable:new q.Pointer(q.uint32,new q.Array(ri,"nSettings"),{type:"parent"}),featureFlags:new q.Bitfield(q.uint8,[null,null,null,null,null,null,"hasDefault","exclusive"]),defaultSetting:q.uint8,nameIndex:q.int16,name:function(t){return t.parent.parent.name.records.fontFeatures[t.nameIndex]}}),oi=new q.Struct({version:q.fixed32,featureNameCount:q.uint16,reserved1:new q.Reserved(q.uint16),reserved2:new q.Reserved(q.uint32),featureNames:new q.Array(ii,"featureNameCount")}),ai=new q.Struct({axisTag:new q.String(4),minValue:q.fixed32,defaultValue:q.fixed32,maxValue:q.fixed32,flags:q.uint16,nameID:q.uint16,name:function(t){return t.parent.parent.name.records.fontFeatures[t.nameID]}}),si=new q.Struct({nameID:q.uint16,name:function(t){return t.parent.parent.name.records.fontFeatures[t.nameID]},flags:q.uint16,coord:new q.Array(q.fixed32,function(t){return t.parent.axisCount}),postscriptNameID:new q.Optional(q.uint16,function(t){return t.parent.instanceSize-t._currentOffset>0})}),ui=new q.Struct({version:q.fixed32,offsetToData:q.uint16,countSizePairs:q.uint16,axisCount:q.uint16,axisSize:q.uint16,instanceCount:q.uint16,instanceSize:q.uint16,axis:new q.Array(ai,"axisCount"),instance:new q.Array(si,"instanceCount")}),li=new q.Fixed(16,"BE",14),ci=function(){function t(){$(this,t)}return t.decode=function(t,e){return e.flags?t.readUInt32BE():2*t.readUInt16BE()},t}(),fi=new q.Struct({version:q.uint16,reserved:new q.Reserved(q.uint16),axisCount:q.uint16,globalCoordCount:q.uint16,globalCoords:new q.Pointer(q.uint32,new q.Array(new q.Array(li,"axisCount"),"globalCoordCount")),glyphCount:q.uint16,flags:q.uint16,offsetToData:q.uint32,offsets:new q.Array(new q.Pointer(ci,"void",{relativeTo:"offsetToData",allowNull:!1}),function(t){return t.glyphCount+1})}),hi=new q.Struct({length:q.uint16,coverage:q.uint16,subFeatureFlags:q.uint32,stateTable:new function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:q.uint16,new q.Struct({version:function(){return 8},firstGlyph:q.uint16,values:new q.Array(q.uint8,q.uint16)})),n=st({newStateOffset:q.uint16,newState:function(t){return(t.newStateOffset-(t.parent.stateArray.base-t.parent._startOffset))/t.parent.nClasses},flags:q.uint16},t),r=new q.Struct(n),i=new $r(new q.Array(q.uint8,function(t){return t.nClasses}))
return new q.Struct({nClasses:q.uint16,classTable:new q.Pointer(q.uint16,e),stateArray:new q.Pointer(q.uint16,i),entryTable:new q.Pointer(q.uint16,new $r(r))})}}),pi=new q.Struct({justClass:q.uint32,beforeGrowLimit:q.fixed32,beforeShrinkLimit:q.fixed32,afterGrowLimit:q.fixed32,afterShrinkLimit:q.fixed32,growFlags:q.uint16,shrinkFlags:q.uint16}),di=new q.Array(pi,q.uint32),gi=new q.VersionedStruct("actionType",{0:{lowerLimit:q.fixed32,upperLimit:q.fixed32,order:q.uint16,glyphs:new q.Array(q.uint16,q.uint16)},1:{addGlyph:q.uint16},2:{substThreshold:q.fixed32,addGlyph:q.uint16,substGlyph:q.uint16},3:{},4:{variationAxis:q.uint32,minimumLimit:q.fixed32,noStretchValue:q.fixed32,maximumLimit:q.fixed32},5:{flags:q.uint16,glyph:q.uint16}}),yi=new q.Struct({actionClass:q.uint16,actionType:q.uint16,actionLength:q.uint32,actionData:gi,padding:new q.Reserved(q.uint8,function(t){return t.actionLength-t._currentOffset})}),vi=new q.Array(yi,q.uint32),bi=new q.Struct({lookupTable:new ti(new q.Pointer(q.uint16,vi))}),mi=new q.Struct({classTable:new q.Pointer(q.uint16,hi,{type:"parent"}),wdcOffset:q.uint16,postCompensationTable:new q.Pointer(q.uint16,bi,{type:"parent"}),widthDeltaClusters:new ti(new q.Pointer(q.uint16,di,{type:"parent",relativeTo:"wdcOffset"}))}),wi=new q.Struct({version:q.uint32,format:q.uint16,horizontal:new q.Pointer(q.uint16,mi),vertical:new q.Pointer(q.uint16,mi)}),xi={action:q.uint16},_i={markIndex:q.uint16,currentIndex:q.uint16},ki={currentInsertIndex:q.uint16,markedInsertIndex:q.uint16},Si=new q.Struct({items:new $r(new q.Pointer(q.uint32,new ti))}),Ci=new q.VersionedStruct("type",{0:{stateTable:new u},1:{stateTable:new u(_i),substitutionTable:new q.Pointer(q.uint32,Si)},2:{stateTable:new u(xi),ligatureActions:new q.Pointer(q.uint32,new $r(q.uint32)),components:new q.Pointer(q.uint32,new $r(q.uint16)),ligatureList:new q.Pointer(q.uint32,new $r(q.uint16))},4:{lookupTable:new ti},5:{stateTable:new u(ki),insertionActions:new q.Pointer(q.uint32,new $r(q.uint16))}}),Ai=new q.Struct({length:q.uint32,coverage:q.uint24,type:q.uint8,subFeatureFlags:q.uint32,table:Ci,padding:new q.Reserved(q.uint8,function(t){return t.length-t._currentOffset})}),Pi=new q.Struct({featureType:q.uint16,featureSetting:q.uint16,enableFlags:q.uint32,disableFlags:q.uint32}),Ei=new q.Struct({defaultFlags:q.uint32,chainLength:q.uint32,nFeatureEntries:q.uint32,nSubtables:q.uint32,features:new q.Array(Pi,"nFeatureEntries"),subtables:new q.Array(Ai,"nSubtables")}),Ii=new q.Struct({version:q.uint16,unused:new q.Reserved(q.uint16),nChains:q.uint32,chains:new q.Array(Ei,"nChains")}),Ti=new q.Struct({left:q.int16,top:q.int16,right:q.int16,bottom:q.int16}),Oi=new q.Struct({version:q.fixed32,format:q.uint16,lookupTable:new ti(Ti)}),Bi={}
Bi.cmap=It,Bi.head=Tt,Bi.hhea=Ot,Bi.hmtx=Lt,Bi.maxp=Rt,Bi.name=Ut,Bi["OS/2"]=jt,Bi.post=Vt,Bi.fpgm=qt,Bi.loca=Zt,Bi.prep=Xt,Bi["cvt "]=Ht,Bi.glyf=Kt,Bi["CFF "]=sn,Bi.CFF2=sn,Bi.VORG=ln,Bi.EBLC=wn,Bi.CBLC=Bi.EBLC,Bi.sbix=_n,Bi.COLR=Cn,Bi.CPAL=Pn,Bi.BASE=Dn,Bi.GDEF=Hn,Bi.GPOS=ur,Bi.GSUB=dr,Bi.JSTF=xr,Bi.HVAR=Cr,Bi.DSIG=Er,Bi.gasp=Tr,Bi.hdmx=Br,Bi.kern=Dr,Bi.LTSH=Nr,Bi.PCLT=Ur,Bi.VDMX=Vr,Bi.vhea=Hr,Bi.vmtx=Zr,Bi.avar=Jr,Bi.bsln=ni,Bi.feat=oi,Bi.fvar=ui,Bi.gvar=fi,Bi.just=wi,Bi.morx=Ii,Bi.opbd=Oi
var Li,Ri=new q.Struct({tag:new q.String(4),checkSum:q.uint32,offset:new q.Pointer(q.uint32,"void",{type:"global"}),length:q.uint32}),Mi=new q.Struct({tag:new q.String(4),numTables:q.uint16,searchRange:q.uint16,entrySelector:q.uint16,rangeShift:q.uint16,tables:new q.Array(Ri,"numTables")})
Mi.process=function(){var t={},e=this.tables,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i
t[o.tag]=o}this.tables=t},Mi.preEncode=function(t){var e=[]
for(var n in this.tables){var r=this.tables[n]
r&&e.push({tag:n,checkSum:0,offset:new q.VoidPointer(Bi[n],r),length:Bi[n].size(r)})}this.tag="true",this.numTables=e.length,this.tables=e,this.searchRange=16*Math.floor(Math.log(this.numTables)/Math.LN2),this.entrySelector=Math.floor(this.searchRange/Math.LN2),this.rangeShift=16*this.numTables-this.searchRange}
try{var Fi=n(87)}catch(t){}var zi=(f((Li=function(){function t(e){if($(this,t),this.encoding=null,this.cmap=this.findSubtable(e,[[3,10],[0,6],[0,4],[3,1],[0,3],[0,2],[0,1],[0,0]]),!this.cmap&&Fi){var n=e.tables,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var s=o,u=a(s.platformID,s.encodingID,s.table.language-1)
Fi.encodingExists(u)&&(this.cmap=s.table,this.encoding=u)}}if(!this.cmap)throw new Error("Could not find a supported cmap table")
this.uvs=this.findSubtable(e,[[0,5]]),this.uvs&&14!==this.uvs.version&&(this.uvs=null)}return t.prototype.findSubtable=function(t,e){var n=e,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=a[0],u=a[1],l=t.tables,c=Array.isArray(l),f=0
for(l=c?l:Y(l);;){var h
if(c){if(f>=l.length)break
h=l[f++]}else{if((f=l.next()).done)break
h=f.value}var p=h
if(p.platformID===s&&p.encodingID===u)return p.table}}return null},t.prototype.lookup=function(t,e){if(this.encoding){var n=Fi.encode(ut(t),this.encoding)
t=0
for(var r=0;r<n.length;r++)t=t<<8|n[r]}else if(e){var i=this.getVariationSelector(t,e)
if(i)return i}var o=this.cmap
switch(o.version){case 0:return o.codeMap.get(t)||0
case 4:for(var a=0,s=o.segCount-1;a<=s;){var u=a+s>>1
if(t<o.startCode.get(u))s=u-1
else{if(!(t>o.endCode.get(u))){var l=o.idRangeOffset.get(u),c=void 0
if(0===l)c=t+o.idDelta.get(u)
else{var f=l/2+(t-o.startCode.get(u))-(o.segCount-u)
0!==(c=o.glyphIndexArray.get(f)||0)&&(c+=o.idDelta.get(u))}return 65535&c}a=u+1}}return 0
case 8:throw new Error("TODO: cmap format 8")
case 6:case 10:return o.glyphIndices.get(t-o.firstCode)||0
case 12:case 13:for(var h=0,p=o.nGroups-1;h<=p;){var d=h+p>>1,g=o.groups.get(d)
if(t<g.startCharCode)p=d-1
else{if(!(t>g.endCharCode))return 12===o.version?g.glyphID+(t-g.startCharCode):g.glyphID
h=d+1}}return 0
case 14:throw new Error("TODO: cmap format 14")
default:throw new Error("Unknown cmap format "+o.version)}},t.prototype.getVariationSelector=function(t,e){if(!this.uvs)return 0
var n=this.uvs.varSelectors.toArray(),r=l(n,function(t){return e-t.varSelector}),i=n[r]
return-1!==r&&i.defaultUVS&&(r=l(i.defaultUVS,function(e){return t<e.startUnicodeValue?-1:t>e.startUnicodeValue+e.additionalCount?1:0})),-1!==r&&i.nonDefaultUVS&&-1!==(r=l(i.nonDefaultUVS,function(e){return t-e.unicodeValue}))?i.nonDefaultUVS[r].glyphID:0},t.prototype.getCharacterSet=function(){var t=this.cmap
switch(t.version){case 0:return c(0,t.codeMap.length)
case 4:for(var e=[],n=t.endCode.toArray(),r=0;r<n.length;r++){var i=n[r]+1,o=t.startCode.get(r)
e.push.apply(e,c(o,i))}return e
case 8:throw new Error("TODO: cmap format 8")
case 6:case 10:return c(t.firstCode,t.firstCode+t.glyphIndices.length)
case 12:case 13:var a=[],s=t.groups.toArray(),u=Array.isArray(s),l=0
for(s=u?s:Y(s);;){var f
if(u){if(l>=s.length)break
f=s[l++]}else{if((l=s.next()).done)break
f=l.value}var h=f
a.push.apply(a,c(h.startCharCode,h.endCharCode+1))}return a
case 14:throw new Error("TODO: cmap format 14")
default:throw new Error("Unknown cmap format "+t.version)}},t.prototype.codePointsForGlyph=function(t){var e=this.cmap
switch(e.version){case 0:for(var n=[],r=0;r<256;r++)e.codeMap.get(r)===t&&n.push(r)
return n
case 4:for(var i=[],o=0;o<e.segCount;o++)for(var a=e.endCode.get(o),s=e.startCode.get(o),u=e.idRangeOffset.get(o),l=e.idDelta.get(o),f=s;f<=a;f++){var h=0
if(0===u)h=f+l
else{var p=u/2+(f-s)-(e.segCount-o)
0!==(h=e.glyphIndexArray.get(p)||0)&&(h+=l)}h===t&&i.push(f)}return i
case 12:var d=[],g=e.groups.toArray(),y=Array.isArray(g),v=0
for(g=y?g:Y(g);;){var b
if(y){if(v>=g.length)break
b=g[v++]}else{if((v=g.next()).done)break
b=v.value}var m=b
t>=m.glyphID&&t<=m.glyphID+(m.endCharCode-m.startCharCode)&&d.push(m.startCharCode+(t-m.glyphID))}return d
case 13:var w=[],x=e.groups.toArray(),_=Array.isArray(x),k=0
for(x=_?x:Y(x);;){var S
if(_){if(k>=x.length)break
S=x[k++]}else{if((k=x.next()).done)break
S=k.value}var C=S
t===C.glyphID&&w.push.apply(w,c(C.startCharCode,C.endCharCode+1))}return w
default:throw new Error("Unknown cmap format "+e.version)}},t}()).prototype,"getCharacterSet",[o],Z(Li.prototype,"getCharacterSet"),Li.prototype),f(Li.prototype,"codePointsForGlyph",[o],Z(Li.prototype,"codePointsForGlyph"),Li.prototype),Li),Di=function(){function t(e){$(this,t),this.kern=e.kern}return t.prototype.process=function(t,e){for(var n=0;n<t.length-1;n++){var r=t[n].id,i=t[n+1].id
e[n].xAdvance+=this.getKerning(r,i)}},t.prototype.getKerning=function(t,e){var n=0,r=this.kern.tables,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a
if(!s.coverage.crossStream){switch(s.version){case 0:if(!s.coverage.horizontal)continue
break
case 1:if(s.coverage.vertical||s.coverage.variation)continue
break
default:throw new Error("Unsupported kerning table version "+s.version)}var u=0,c=s.subtable
switch(s.format){case 0:var f=l(c.pairs,function(n){return t-n.left||e-n.right})
f>=0&&(u=c.pairs[f].value)
break
case 2:var h,p=0
h=t>=c.leftTable.firstGlyph&&t<c.leftTable.firstGlyph+c.leftTable.nGlyphs?c.leftTable.offsets[t-c.leftTable.firstGlyph]:c.array.off,e>=c.rightTable.firstGlyph&&e<c.rightTable.firstGlyph+c.rightTable.nGlyphs&&(p=c.rightTable.offsets[e-c.rightTable.firstGlyph])
var d=(h+p-c.array.off)/2
u=c.array.values.get(d)
break
case 3:if(t>=c.glyphCount||e>=c.glyphCount)return 0
u=c.kernValue[c.kernIndex[c.leftClass[t]*c.rightClassCount+c.rightClass[e]]]
break
default:throw new Error("Unsupported kerning sub-table format "+s.format)}s.coverage.override?n=u:n+=u}}return n},t}(),Ni=function(){function t(e){$(this,t),this.font=e}return t.prototype.positionGlyphs=function(t,e){for(var n=0,r=0,i=0;i<t.length;i++)t[i].isMark?r=i:(n!==r&&this.positionCluster(t,e,n,r),n=r=i)
return n!==r&&this.positionCluster(t,e,n,r),e},t.prototype.positionCluster=function(t,e,n,r){var i=t[n],o=i.cbox.copy()
i.codePoints.length>1&&(o.minX+=(i.codePoints.length-1)*o.width/i.codePoints.length)
for(var a=-e[n].xAdvance,s=0,u=this.font.unitsPerEm/16,l=n+1;l<=r;l++){var c=t[l],f=c.cbox,h=e[l],p=this.getCombiningClass(c.codePoints[0])
if("Not_Reordered"!==p){switch(h.xOffset=h.yOffset=0,p){case"Double_Above":case"Double_Below":h.xOffset+=o.minX-f.width/2-f.minX
break
case"Attached_Below_Left":case"Below_Left":case"Above_Left":h.xOffset+=o.minX-f.minX
break
case"Attached_Above_Right":case"Below_Right":case"Above_Right":h.xOffset+=o.maxX-f.width-f.minX
break
default:h.xOffset+=o.minX+(o.width-f.width)/2-f.minX}switch(p){case"Double_Below":case"Below_Left":case"Below":case"Below_Right":case"Attached_Below_Left":case"Attached_Below":"Attached_Below_Left"!==p&&"Attached_Below"!==p||(o.minY+=u),h.yOffset=-o.minY-f.maxY,o.minY+=f.height
break
case"Double_Above":case"Above_Left":case"Above":case"Above_Right":case"Attached_Above":case"Attached_Above_Right":"Attached_Above"!==p&&"Attached_Above_Right"!==p||(o.maxY+=u),h.yOffset=o.maxY-f.minY,o.maxY+=f.height}h.xAdvance=h.yAdvance=0,h.xOffset+=a,h.yOffset+=s}else a-=h.xAdvance,s-=h.yAdvance}},t.prototype.getCombiningClass=function(t){var e=ft.getCombiningClass(t)
if(3584==(-256&t))if("Not_Reordered"===e)switch(t){case 3633:case 3636:case 3637:case 3638:case 3639:case 3655:case 3660:case 3645:case 3662:return"Above_Right"
case 3761:case 3764:case 3765:case 3766:case 3767:case 3771:case 3788:case 3789:return"Above"
case 3772:return"Below"}else if(3642===t)return"Below_Right"
switch(e){case"CCC10":case"CCC11":case"CCC12":case"CCC13":case"CCC14":case"CCC15":case"CCC16":case"CCC17":case"CCC18":case"CCC20":case"CCC22":return"Below"
case"CCC23":return"Attached_Above"
case"CCC24":return"Above_Right"
case"CCC25":case"CCC19":return"Above_Left"
case"CCC26":return"Above"
case"CCC21":break
case"CCC27":case"CCC28":case"CCC30":case"CCC31":case"CCC33":case"CCC34":case"CCC35":case"CCC36":return"Above"
case"CCC29":case"CCC32":return"Below"
case"CCC103":return"Below_Right"
case"CCC107":return"Above_Right"
case"CCC118":return"Below"
case"CCC122":return"Above"
case"CCC129":case"CCC132":return"Below"
case"CCC130":return"Above"}return e},t}(),Ui=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1/0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1/0
$(this,t),this.minX=e,this.minY=n,this.maxX=r,this.maxY=i}return t.prototype.addPoint=function(t,e){t<this.minX&&(this.minX=t),e<this.minY&&(this.minY=e),t>this.maxX&&(this.maxX=t),e>this.maxY&&(this.maxY=e)},t.prototype.copy=function(){return new t(this.minX,this.minY,this.maxX,this.maxY)},tt(t,[{key:"width",get:function(){return this.maxX-this.minX}},{key:"height",get:function(){return this.maxY-this.minY}}]),t}(),Wi={Caucasian_Albanian:"aghb",Arabic:"arab",Imperial_Aramaic:"armi",Armenian:"armn",Avestan:"avst",Balinese:"bali",Bamum:"bamu",Bassa_Vah:"bass",Batak:"batk",Bengali:["bng2","beng"],Bopomofo:"bopo",Brahmi:"brah",Braille:"brai",Buginese:"bugi",Buhid:"buhd",Chakma:"cakm",Canadian_Aboriginal:"cans",Carian:"cari",Cham:"cham",Cherokee:"cher",Coptic:"copt",Cypriot:"cprt",Cyrillic:"cyrl",Devanagari:["dev2","deva"],Deseret:"dsrt",Duployan:"dupl",Egyptian_Hieroglyphs:"egyp",Elbasan:"elba",Ethiopic:"ethi",Georgian:"geor",Glagolitic:"glag",Gothic:"goth",Grantha:"gran",Greek:"grek",Gujarati:["gjr2","gujr"],Gurmukhi:["gur2","guru"],Hangul:"hang",Han:"hani",Hanunoo:"hano",Hebrew:"hebr",Hiragana:"hira",Pahawh_Hmong:"hmng",Katakana_Or_Hiragana:"hrkt",Old_Italic:"ital",Javanese:"java",Kayah_Li:"kali",Katakana:"kana",Kharoshthi:"khar",Khmer:"khmr",Khojki:"khoj",Kannada:["knd2","knda"],Kaithi:"kthi",Tai_Tham:"lana",Lao:"lao ",Latin:"latn",Lepcha:"lepc",Limbu:"limb",Linear_A:"lina",Linear_B:"linb",Lisu:"lisu",Lycian:"lyci",Lydian:"lydi",Mahajani:"mahj",Mandaic:"mand",Manichaean:"mani",Mende_Kikakui:"mend",Meroitic_Cursive:"merc",Meroitic_Hieroglyphs:"mero",Malayalam:["mlm2","mlym"],Modi:"modi",Mongolian:"mong",Mro:"mroo",Meetei_Mayek:"mtei",Myanmar:["mym2","mymr"],Old_North_Arabian:"narb",Nabataean:"nbat",Nko:"nko ",Ogham:"ogam",Ol_Chiki:"olck",Old_Turkic:"orkh",Oriya:["ory2","orya"],Osmanya:"osma",Palmyrene:"palm",Pau_Cin_Hau:"pauc",Old_Permic:"perm",Phags_Pa:"phag",Inscriptional_Pahlavi:"phli",Psalter_Pahlavi:"phlp",Phoenician:"phnx",Miao:"plrd",Inscriptional_Parthian:"prti",Rejang:"rjng",Runic:"runr",Samaritan:"samr",Old_South_Arabian:"sarb",Saurashtra:"saur",Shavian:"shaw",Sharada:"shrd",Siddham:"sidd",Khudawadi:"sind",Sinhala:"sinh",Sora_Sompeng:"sora",Sundanese:"sund",Syloti_Nagri:"sylo",Syriac:"syrc",Tagbanwa:"tagb",Takri:"takr",Tai_Le:"tale",New_Tai_Lue:"talu",Tamil:["tml2","taml"],Tai_Viet:"tavt",Telugu:["tel2","telu"],Tifinagh:"tfng",Tagalog:"tglg",Thaana:"thaa",Thai:"thai",Tibetan:"tibt",Tirhuta:"tirh",Ugaritic:"ugar",Vai:"vai ",Warang_Citi:"wara",Old_Persian:"xpeo",Cuneiform:"xsux",Yi:"yi  ",Inherited:"zinh",Common:"zyyy",Unknown:"zzzz"},ji={}
for(var Gi in Wi){var Vi=Wi[Gi]
if(Array.isArray(Vi)){var Hi=Vi,qi=Array.isArray(Hi),Zi=0
for(Hi=qi?Hi:Y(Hi);;){var Yi
if(qi){if(Zi>=Hi.length)break
Yi=Hi[Zi++]}else{if((Zi=Hi.next()).done)break
Yi=Zi.value}ji[Yi]=Gi}}else ji[Vi]=Gi}for(var Xi={arab:!0,hebr:!0,syrc:!0,thaa:!0,cprt:!0,khar:!0,phnx:!0,"nko ":!0,lydi:!0,avst:!0,armi:!0,phli:!0,prti:!0,sarb:!0,orkh:!0,samr:!0,mand:!0,merc:!0,mero:!0,mani:!0,mend:!0,nbat:!0,narb:!0,palm:!0,phlp:!0},Ki=function(){function t(e,n,r,i){if($(this,t),this.glyphs=e,this.positions=null,this.script=r,this.language=i||null,this.direction=h(r),this.features={},Array.isArray(n)){var o=n,a=Array.isArray(o),s=0
for(o=a?o:Y(o);;){var u
if(a){if(s>=o.length)break
u=o[s++]}else{if((s=o.next()).done)break
u=s.value}var l=u
this.features[l]=!0}}else"object"===(void 0===n?"undefined":J(n))&&(this.features=n)}return tt(t,[{key:"advanceWidth",get:function(){var t=0,e=this.positions,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}t+=i.xAdvance}return t}},{key:"advanceHeight",get:function(){var t=0,e=this.positions,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}t+=i.yAdvance}return t}},{key:"bbox",get:function(){for(var t=new Ui,e=0,n=0,r=0;r<this.glyphs.length;r++){var i=this.glyphs[r],o=this.positions[r],a=i.bbox
t.addPoint(a.minX+e+o.xOffset,a.minY+n+o.yOffset),t.addPoint(a.maxX+e+o.xOffset,a.maxY+n+o.yOffset),e+=o.xAdvance,n+=o.yAdvance}return t}}]),t}(),Ji={allTypographicFeatures:{code:0,exclusive:!1,allTypeFeatures:0},ligatures:{code:1,exclusive:!1,requiredLigatures:0,commonLigatures:2,rareLigatures:4,rebusPictures:8,diphthongLigatures:10,squaredLigatures:12,abbrevSquaredLigatures:14,symbolLigatures:16,contextualLigatures:18,historicalLigatures:20},cursiveConnection:{code:2,exclusive:!0,unconnected:0,partiallyConnected:1,cursive:2},letterCase:{code:3,exclusive:!0},verticalSubstitution:{code:4,exclusive:!1,substituteVerticalForms:0},linguisticRearrangement:{code:5,exclusive:!1,linguisticRearrangement:0},numberSpacing:{code:6,exclusive:!0,monospacedNumbers:0,proportionalNumbers:1,thirdWidthNumbers:2,quarterWidthNumbers:3},smartSwash:{code:8,exclusive:!1,wordInitialSwashes:0,wordFinalSwashes:2,nonFinalSwashes:8},diacritics:{code:9,exclusive:!0,showDiacritics:0,hideDiacritics:1,decomposeDiacritics:2},verticalPosition:{code:10,exclusive:!0,normalPosition:0,superiors:1,inferiors:2,ordinals:3,scientificInferiors:4},fractions:{code:11,exclusive:!0,noFractions:0,verticalFractions:1,diagonalFractions:2},overlappingCharacters:{code:13,exclusive:!1,preventOverlap:0},typographicExtras:{code:14,exclusive:!1,slashedZero:4},mathematicalExtras:{code:15,exclusive:!1,mathematicalGreek:10},ornamentSets:{code:16,exclusive:!0,noOrnaments:0,dingbats:1,piCharacters:2,fleurons:3,decorativeBorders:4,internationalSymbols:5,mathSymbols:6},characterAlternatives:{code:17,exclusive:!0,noAlternates:0},designComplexity:{code:18,exclusive:!0,designLevel1:0,designLevel2:1,designLevel3:2,designLevel4:3,designLevel5:4},styleOptions:{code:19,exclusive:!0,noStyleOptions:0,displayText:1,engravedText:2,illuminatedCaps:3,titlingCaps:4,tallCaps:5},characterShape:{code:20,exclusive:!0,traditionalCharacters:0,simplifiedCharacters:1,JIS1978Characters:2,JIS1983Characters:3,JIS1990Characters:4,traditionalAltOne:5,traditionalAltTwo:6,traditionalAltThree:7,traditionalAltFour:8,traditionalAltFive:9,expertCharacters:10,JIS2004Characters:11,hojoCharacters:12,NLCCharacters:13,traditionalNamesCharacters:14},numberCase:{code:21,exclusive:!0,lowerCaseNumbers:0,upperCaseNumbers:1},textSpacing:{code:22,exclusive:!0,proportionalText:0,monospacedText:1,halfWidthText:2,thirdWidthText:3,quarterWidthText:4,altProportionalText:5,altHalfWidthText:6},transliteration:{code:23,exclusive:!0,noTransliteration:0},annotation:{code:24,exclusive:!0,noAnnotation:0,boxAnnotation:1,roundedBoxAnnotation:2,circleAnnotation:3,invertedCircleAnnotation:4,parenthesisAnnotation:5,periodAnnotation:6,romanNumeralAnnotation:7,diamondAnnotation:8,invertedBoxAnnotation:9,invertedRoundedBoxAnnotation:10},kanaSpacing:{code:25,exclusive:!0,fullWidthKana:0,proportionalKana:1},ideographicSpacing:{code:26,exclusive:!0,fullWidthIdeographs:0,proportionalIdeographs:1,halfWidthIdeographs:2},unicodeDecomposition:{code:27,exclusive:!1,canonicalComposition:0,compatibilityComposition:2,transcodingComposition:4},rubyKana:{code:28,exclusive:!1,rubyKana:2},CJKSymbolAlternatives:{code:29,exclusive:!0,noCJKSymbolAlternatives:0,CJKSymbolAltOne:1,CJKSymbolAltTwo:2,CJKSymbolAltThree:3,CJKSymbolAltFour:4,CJKSymbolAltFive:5},ideographicAlternatives:{code:30,exclusive:!0,noIdeographicAlternatives:0,ideographicAltOne:1,ideographicAltTwo:2,ideographicAltThree:3,ideographicAltFour:4,ideographicAltFive:5},CJKVerticalRomanPlacement:{code:31,exclusive:!0,CJKVerticalRomanCentered:0,CJKVerticalRomanHBaseline:1},italicCJKRoman:{code:32,exclusive:!1,CJKItalicRoman:2},caseSensitiveLayout:{code:33,exclusive:!1,caseSensitiveLayout:0,caseSensitiveSpacing:2},alternateKana:{code:34,exclusive:!1,alternateHorizKana:0,alternateVertKana:2},stylisticAlternatives:{code:35,exclusive:!1,noStylisticAlternates:0,stylisticAltOne:2,stylisticAltTwo:4,stylisticAltThree:6,stylisticAltFour:8,stylisticAltFive:10,stylisticAltSix:12,stylisticAltSeven:14,stylisticAltEight:16,stylisticAltNine:18,stylisticAltTen:20,stylisticAltEleven:22,stylisticAltTwelve:24,stylisticAltThirteen:26,stylisticAltFourteen:28,stylisticAltFifteen:30,stylisticAltSixteen:32,stylisticAltSeventeen:34,stylisticAltEighteen:36,stylisticAltNineteen:38,stylisticAltTwenty:40},contextualAlternates:{code:36,exclusive:!1,contextualAlternates:0,swashAlternates:2,contextualSwashAlternates:4},lowerCase:{code:37,exclusive:!0,defaultLowerCase:0,lowerCaseSmallCaps:1,lowerCasePetiteCaps:2},upperCase:{code:38,exclusive:!0,defaultUpperCase:0,upperCaseSmallCaps:1,upperCasePetiteCaps:2},languageTag:{code:39,exclusive:!0},CJKRomanSpacing:{code:103,exclusive:!0,halfWidthCJKRoman:0,proportionalCJKRoman:1,defaultCJKRoman:2,fullWidthCJKRoman:3}},Qi=function(t,e){return[Ji[t].code,Ji[t][e]]},$i={rlig:Qi("ligatures","requiredLigatures"),clig:Qi("ligatures","contextualLigatures"),dlig:Qi("ligatures","rareLigatures"),hlig:Qi("ligatures","historicalLigatures"),liga:Qi("ligatures","commonLigatures"),hist:Qi("ligatures","historicalLigatures"),smcp:Qi("lowerCase","lowerCaseSmallCaps"),pcap:Qi("lowerCase","lowerCasePetiteCaps"),frac:Qi("fractions","diagonalFractions"),dnom:Qi("fractions","diagonalFractions"),numr:Qi("fractions","diagonalFractions"),afrc:Qi("fractions","verticalFractions"),case:Qi("caseSensitiveLayout","caseSensitiveLayout"),ccmp:Qi("unicodeDecomposition","canonicalComposition"),cpct:Qi("CJKVerticalRomanPlacement","CJKVerticalRomanCentered"),valt:Qi("CJKVerticalRomanPlacement","CJKVerticalRomanCentered"),swsh:Qi("contextualAlternates","swashAlternates"),cswh:Qi("contextualAlternates","contextualSwashAlternates"),curs:Qi("cursiveConnection","cursive"),c2pc:Qi("upperCase","upperCasePetiteCaps"),c2sc:Qi("upperCase","upperCaseSmallCaps"),init:Qi("smartSwash","wordInitialSwashes"),fin2:Qi("smartSwash","wordFinalSwashes"),medi:Qi("smartSwash","nonFinalSwashes"),med2:Qi("smartSwash","nonFinalSwashes"),fin3:Qi("smartSwash","wordFinalSwashes"),fina:Qi("smartSwash","wordFinalSwashes"),pkna:Qi("kanaSpacing","proportionalKana"),half:Qi("textSpacing","halfWidthText"),halt:Qi("textSpacing","altHalfWidthText"),hkna:Qi("alternateKana","alternateHorizKana"),vkna:Qi("alternateKana","alternateVertKana"),ital:Qi("italicCJKRoman","CJKItalicRoman"),lnum:Qi("numberCase","upperCaseNumbers"),onum:Qi("numberCase","lowerCaseNumbers"),mgrk:Qi("mathematicalExtras","mathematicalGreek"),calt:Qi("contextualAlternates","contextualAlternates"),vrt2:Qi("verticalSubstitution","substituteVerticalForms"),vert:Qi("verticalSubstitution","substituteVerticalForms"),tnum:Qi("numberSpacing","monospacedNumbers"),pnum:Qi("numberSpacing","proportionalNumbers"),sups:Qi("verticalPosition","superiors"),subs:Qi("verticalPosition","inferiors"),ordn:Qi("verticalPosition","ordinals"),pwid:Qi("textSpacing","proportionalText"),hwid:Qi("textSpacing","halfWidthText"),qwid:Qi("textSpacing","quarterWidthText"),twid:Qi("textSpacing","thirdWidthText"),fwid:Qi("textSpacing","proportionalText"),palt:Qi("textSpacing","altProportionalText"),trad:Qi("characterShape","traditionalCharacters"),smpl:Qi("characterShape","simplifiedCharacters"),jp78:Qi("characterShape","JIS1978Characters"),jp83:Qi("characterShape","JIS1983Characters"),jp90:Qi("characterShape","JIS1990Characters"),jp04:Qi("characterShape","JIS2004Characters"),expt:Qi("characterShape","expertCharacters"),hojo:Qi("characterShape","hojoCharacters"),nlck:Qi("characterShape","NLCCharacters"),tnam:Qi("characterShape","traditionalNamesCharacters"),ruby:Qi("rubyKana","rubyKana"),titl:Qi("styleOptions","titlingCaps"),zero:Qi("typographicExtras","slashedZero"),ss01:Qi("stylisticAlternatives","stylisticAltOne"),ss02:Qi("stylisticAlternatives","stylisticAltTwo"),ss03:Qi("stylisticAlternatives","stylisticAltThree"),ss04:Qi("stylisticAlternatives","stylisticAltFour"),ss05:Qi("stylisticAlternatives","stylisticAltFive"),ss06:Qi("stylisticAlternatives","stylisticAltSix"),ss07:Qi("stylisticAlternatives","stylisticAltSeven"),ss08:Qi("stylisticAlternatives","stylisticAltEight"),ss09:Qi("stylisticAlternatives","stylisticAltNine"),ss10:Qi("stylisticAlternatives","stylisticAltTen"),ss11:Qi("stylisticAlternatives","stylisticAltEleven"),ss12:Qi("stylisticAlternatives","stylisticAltTwelve"),ss13:Qi("stylisticAlternatives","stylisticAltThirteen"),ss14:Qi("stylisticAlternatives","stylisticAltFourteen"),ss15:Qi("stylisticAlternatives","stylisticAltFifteen"),ss16:Qi("stylisticAlternatives","stylisticAltSixteen"),ss17:Qi("stylisticAlternatives","stylisticAltSeventeen"),ss18:Qi("stylisticAlternatives","stylisticAltEighteen"),ss19:Qi("stylisticAlternatives","stylisticAltNineteen"),ss20:Qi("stylisticAlternatives","stylisticAltTwenty")},to=1;to<=99;to++)$i["cv"+("00"+to).slice(-2)]=[Ji.characterAlternatives.code,to]
var eo={}
for(var no in $i){var ro=$i[no]
null==eo[ro[0]]&&(eo[ro[0]]={}),eo[ro[0]][ro[1]]=no}for(var io,oo,ao,so,uo,lo,co,fo,ho,po,go=(function(t,e,n,r,i){var o={}
Object.keys(r).forEach(function(t){o[t]=r[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(e,n){return n(t,"glyphsForValue",e)||e},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,"glyphsForValue",o),o=null)}((io=function(){function t(e){$(this,t),this.table=e}return t.prototype.lookup=function(t){switch(this.table.version){case 0:return this.table.values.getItem(t)
case 2:case 4:for(var e=0,n=this.table.binarySearchHeader.nUnits-1;e<=n;){var r=e+n>>1
if(65535===(a=this.table.segments[r]).firstGlyph)return null
if(t<a.firstGlyph)n=r-1
else{if(!(t>a.lastGlyph))return 2===this.table.version?a.value:a.values[t-a.firstGlyph]
e=r+1}}return null
case 6:for(var i=0,o=this.table.binarySearchHeader.nUnits-1;i<=o;){var a
r=i+o>>1
if(65535===(a=this.table.segments[r]).glyph)return null
if(t<a.glyph)o=r-1
else{if(!(t>a.glyph))return a.value
i=r+1}}return null
case 8:return this.table.values[t-this.table.firstGlyph]
default:throw new Error("Unknown lookup table format: "+this.table.version)}},t.prototype.glyphsForValue=function(t){var e=[]
switch(this.table.version){case 2:case 4:var n=this.table.segments,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o
if(2===this.table.version&&a.value===t)e.push.apply(e,c(a.firstGlyph,a.lastGlyph+1))
else for(var s=0;s<a.values.length;s++)a.values[s]===t&&e.push(a.firstGlyph+s)}break
case 6:var u=this.table.segments,l=Array.isArray(u),f=0
for(u=l?u:Y(u);;){var h
if(l){if(f>=u.length)break
h=u[f++]}else{if((f=u.next()).done)break
h=f.value}var p=h
p.value===t&&e.push(p.glyph)}break
case 8:for(var d=0;d<this.table.values.length;d++)this.table.values[d]===t&&e.push(this.table.firstGlyph+d)
break
default:throw new Error("Unknown lookup table format: "+this.table.version)}return e},t}()).prototype,0,[o],Z(io.prototype,"glyphsForValue"),io.prototype),io),yo=function(){function t(e){$(this,t),this.stateTable=e,this.lookupTable=new go(e.classTable)}return t.prototype.process=function(t,e,n){for(var r=0,i=e?t.length-1:0,o=e?-1:1;1===o&&i<=t.length||-1===o&&i>=-1;){var a=null,s=1,u=!0
i===t.length||-1===i?s=0:65535===(a=t[i]).id?s=2:null==(s=this.lookupTable.lookup(a.id))&&(s=1)
var l=this.stateTable.stateArray.getItem(r)[s],c=this.stateTable.entryTable.getItem(l)
0!==s&&2!==s&&(n(a,c,i),u=!(16384&c.flags)),r=c.newState,u&&(i+=o)}return t},t.prototype.traverse=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new ct
if(!n.has(e)){n.add(e)
for(var r=this.stateTable,i=r.nClasses,o=r.stateArray,a=r.entryTable,s=o.getItem(e),u=4;u<i;u++){var l=s[u],c=a.getItem(l),f=this.lookupTable.glyphsForValue(u),h=Array.isArray(f),p=0
for(f=h?f:Y(f);;){var d
if(h){if(p>=f.length)break
d=f[p++]}else{if((p=f.next()).done)break
d=p.value}var g=d
t.enter&&t.enter(g,c),0!==c.newState&&this.traverse(t,c.newState,n),t.exit&&t.exit(g,c)}}}},t}(),vo=(function(t,e,n,r,i){var o={}
Object.keys(r).forEach(function(t){o[t]=r[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(e,n){return n(t,"getStateMachine",e)||e},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,"getStateMachine",o),o=null)}((oo=function(){function t(e){$(this,t),this.processIndicRearragement=this.processIndicRearragement.bind(this),this.processContextualSubstitution=this.processContextualSubstitution.bind(this),this.processLigature=this.processLigature.bind(this),this.processNoncontextualSubstitutions=this.processNoncontextualSubstitutions.bind(this),this.processGlyphInsertion=this.processGlyphInsertion.bind(this),this.font=e,this.morx=e.morx,this.inputCache=null}return t.prototype.process=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.morx.chains,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=a.defaultFlags,u=a.features,l=Array.isArray(u),c=0
for(u=l?u:Y(u);;){var f
if(l){if(c>=u.length)break
f=u[c++]}else{if((c=u.next()).done)break
f=c.value}var h,p=f;(h=e[p.featureType])&&h[p.featureSetting]&&(s&=p.disableFlags,s|=p.enableFlags)}var d=a.subtables,g=Array.isArray(d),y=0
for(d=g?d:Y(d);;){var v
if(g){if(y>=d.length)break
v=d[y++]}else{if((y=d.next()).done)break
v=y.value}var b=v
b.subFeatureFlags&s&&this.processSubtable(b,t)}}for(var m=t.length-1;m>=0;)65535===t[m].id&&t.splice(m,1),m--
return t},t.prototype.processSubtable=function(t,e){if(this.subtable=t,this.glyphs=e,4!==this.subtable.type){this.ligatureStack=[],this.markedGlyph=null,this.firstGlyph=null,this.lastGlyph=null,this.markedIndex=null
var n=this.getStateMachine(t),r=this.getProcessor(),i=!!(4194304&this.subtable.coverage)
return n.process(this.glyphs,i,r)}this.processNoncontextualSubstitutions(this.subtable,this.glyphs)},t.prototype.getStateMachine=function(t){return new yo(t.table.stateTable)},t.prototype.getProcessor=function(){switch(this.subtable.type){case 0:return this.processIndicRearragement
case 1:return this.processContextualSubstitution
case 2:return this.processLigature
case 4:return this.processNoncontextualSubstitutions
case 5:return this.processGlyphInsertion
default:throw new Error("Invalid morx subtable type: "+this.subtable.type)}},t.prototype.processIndicRearragement=function(t,e,n){32768&e.flags&&(this.firstGlyph=n),8192&e.flags&&(this.lastGlyph=n),function(t,e,n,r){switch(e){case 0:return t
case 1:return d(t,[n,1],[r,0])
case 2:return d(t,[n,0],[r,1])
case 3:return d(t,[n,1],[r,1])
case 4:return d(t,[n,2],[r,0])
case 5:return d(t,[n,2],[r,0],!0,!1)
case 6:return d(t,[n,0],[r,2])
case 7:return d(t,[n,0],[r,2],!1,!0)
case 8:return d(t,[n,1],[r,2])
case 9:return d(t,[n,1],[r,2],!1,!0)
case 10:return d(t,[n,2],[r,1])
case 11:return d(t,[n,2],[r,1],!0,!1)
case 12:return d(t,[n,2],[r,2])
case 13:return d(t,[n,2],[r,2],!0,!1)
case 14:return d(t,[n,2],[r,2],!1,!0)
case 15:return d(t,[n,2],[r,2],!0,!0)
default:throw new Error("Unknown verb: "+e)}}(this.glyphs,15&e.flags,this.firstGlyph,this.lastGlyph)},t.prototype.processContextualSubstitution=function(t,e,n){var r=this.subtable.table.substitutionTable.items
if(65535!==e.markIndex){var i=r.getItem(e.markIndex),o=new go(i)
t=this.glyphs[this.markedGlyph],(a=o.lookup(t.id))&&(this.glyphs[this.markedGlyph]=this.font.getGlyph(a,t.codePoints))}if(65535!==e.currentIndex){var a,s=r.getItem(e.currentIndex),u=new go(s)
t=this.glyphs[n],(a=u.lookup(t.id))&&(this.glyphs[n]=this.font.getGlyph(a,t.codePoints))}32768&e.flags&&(this.markedGlyph=n)},t.prototype.processLigature=function(t,e,n){if(32768&e.flags&&this.ligatureStack.push(n),8192&e.flags){for(var r,i=this.subtable.table.ligatureActions,o=this.subtable.table.components,a=this.subtable.table.ligatureList,s=e.action,u=!1,l=0,c=[],f=[];!u;){var h,p=this.ligatureStack.pop();(h=c).unshift.apply(h,this.glyphs[p].codePoints)
var d=i.getItem(s++)
u=!!(2147483648&d)
var g=!!(1073741824&d),y=(1073741823&d)<<2>>2
if(y+=this.glyphs[p].id,l+=o.getItem(y),u||g){var v=a.getItem(l)
this.glyphs[p]=this.font.getGlyph(v,c),f.push(p),l=0,c=[]}else this.glyphs[p]=this.font.getGlyph(65535)}(r=this.ligatureStack).push.apply(r,f)}},t.prototype.processNoncontextualSubstitutions=function(t,e,n){var r=new go(t.table.lookupTable)
for(n=0;n<e.length;n++){var i=e[n]
if(65535!==i.id){var o=r.lookup(i.id)
o&&(e[n]=this.font.getGlyph(o,i.codePoints))}}},t.prototype._insertGlyphs=function(t,e,n,r){for(var i,o=[];n--;){var a=this.subtable.table.insertionActions.getItem(e++)
o.push(this.font.getGlyph(a))}r||t++,(i=this.glyphs).splice.apply(i,[t,0].concat(o))},t.prototype.processGlyphInsertion=function(t,e,n){if(32768&e.flags&&(this.markedIndex=n),65535!==e.markedInsertIndex){var r=(31&e.flags)>>>5,i=!!(1024&e.flags)
this._insertGlyphs(this.markedIndex,e.markedInsertIndex,r,i)}if(65535!==e.currentInsertIndex){var o=(992&e.flags)>>>5,a=!!(2048&e.flags)
this._insertGlyphs(n,e.currentInsertIndex,o,a)}},t.prototype.getSupportedFeatures=function(){var t=[],e=this.morx.chains,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i.features,a=Array.isArray(o),s=0
for(o=a?o:Y(o);;){var u
if(a){if(s>=o.length)break
u=o[s++]}else{if((s=o.next()).done)break
u=s.value}var l=u
t.push([l.featureType,l.featureSetting])}}return t},t.prototype.generateInputs=function(t){return this.inputCache||this.generateInputCache(),this.inputCache[t]||[]},t.prototype.generateInputCache=function(){this.inputCache={}
var t=this.morx.chains,e=Array.isArray(t),n=0
for(t=e?t:Y(t);;){var r
if(e){if(n>=t.length)break
r=t[n++]}else{if((n=t.next()).done)break
r=n.value}var i=r,o=i.defaultFlags,a=i.subtables,s=Array.isArray(a),u=0
for(a=s?a:Y(a);;){var l
if(s){if(u>=a.length)break
l=a[u++]}else{if((u=a.next()).done)break
l=u.value}var c=l
c.subFeatureFlags&o&&this.generateInputsForSubtable(c)}}},t.prototype.generateInputsForSubtable=function(t){var e=this
if(2===t.type){if(4194304&t.coverage)throw new Error("Reverse subtable, not supported.")
this.subtable=t,this.ligatureStack=[]
var n=this.getStateMachine(t),r=this.getProcessor(),i=[],o=[]
this.glyphs=[],n.traverse({enter:function(t,n){var a=e.glyphs
o.push({glyphs:a.slice(),ligatureStack:e.ligatureStack.slice()})
var s=e.font.getGlyph(t)
i.push(s),a.push(i[i.length-1]),r(a[a.length-1],n,a.length-1)
for(var u=0,l=0,c=0;c<a.length&&u<=1;c++)65535!==a[c].id&&(u++,l=a[c].id)
if(1===u){var f=i.map(function(t){return t.id}),h=e.inputCache[l]
h?h.push(f):e.inputCache[l]=[f]}},exit:function(){var t=o.pop()
e.glyphs=t.glyphs,e.ligatureStack=t.ligatureStack,i.pop()}})}},t}()).prototype,0,[o],Z(oo.prototype,"getStateMachine"),oo.prototype),oo),bo=function(){function t(e){$(this,t),this.font=e,this.morxProcessor=new vo(e),this.fallbackPosition=!1}return t.prototype.substitute=function(t){"rtl"===t.direction&&glyphs.reverse(),this.morxProcessor.process(t.glyphs,function(t){var e={}
for(var n in t){var r;(r=$i[n])&&(null==e[r[0]]&&(e[r[0]]={}),e[r[0]][r[1]]=t[n])}return e}(t.features))},t.prototype.getAvailableFeatures=function(t,e){return function(t){var e={}
if(Array.isArray(t))for(var n=0;n<t.length;n++){var r,i=p(t[n]);(r=eo[i[0]]&&eo[i[0]][i[1]])&&(e[r]=!0)}else if("object"===(void 0===t?"undefined":J(t)))for(var o in t){var a=t[o]
for(var s in a){var u=void 0,l=p([o,s])
a[s]&&(u=eo[l[0]]&&eo[l[0]][l[1]])&&(e[u]=!0)}}return K(e)}(this.morxProcessor.getSupportedFeatures())},t.prototype.stringsForGlyph=function(t){var e=this.morxProcessor.generateInputs(t),n=new ct,r=e,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a
this._addStrings(s,0,n,"")}return n},t.prototype._addStrings=function(t,e,n,r){var i=this.font._cmapProcessor.codePointsForGlyph(t[e]),o=Array.isArray(i),a=0
for(i=o?i:Y(i);;){var s
if(o){if(a>=i.length)break
s=i[a++]}else{if((a=i.next()).done)break
s=a.value}var u=r+ut(s)
e<t.length-1?this._addStrings(t,e+1,n,u):n.add(u)}},t}(),mo=function(){function t(e,n){$(this,t),this.font=e,this.script=n,this.direction=h(n),this.stages=[],this.globalFeatures={},this.allFeatures={}}return t.prototype._addFeatures=function(t,e){var n=this.stages.length-1,r=this.stages[n],i=t,o=Array.isArray(i),a=0
for(i=o?i:Y(i);;){var s
if(o){if(a>=i.length)break
s=i[a++]}else{if((a=i.next()).done)break
s=a.value}var u=s
null==this.allFeatures[u]&&(r.push(u),this.allFeatures[u]=n,e&&(this.globalFeatures[u]=!0))}},t.prototype.add=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(0===this.stages.length&&this.stages.push([]),"string"==typeof t&&(t=[t]),Array.isArray(t))this._addFeatures(t,e)
else{if("object"!==(void 0===t?"undefined":J(t)))throw new Error("Unsupported argument to ShapingPlan#add")
this._addFeatures(t.global||[],!0),this._addFeatures(t.local||[],!1)}},t.prototype.addStage=function(t,e){"function"==typeof t?this.stages.push(t,[]):(this.stages.push([]),this.add(t,e))},t.prototype.setFeatureOverrides=function(t){if(Array.isArray(t))this.add(t)
else if("object"===(void 0===t?"undefined":J(t)))for(var e in t)if(t[e])this.add(e)
else if(null!=this.allFeatures[e]){var n=this.stages[this.allFeatures[e]]
n.splice(n.indexOf(e),1),delete this.allFeatures[e],delete this.globalFeatures[e]}},t.prototype.assignGlobalFeatures=function(t){var e=t,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i
for(var a in this.globalFeatures)o.features[a]=!0}},t.prototype.process=function(t,e,n){t.selectScript(this.script,this.language)
var r=this.stages,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a
"function"==typeof s?n||s(this.font,e,this):s.length>0&&t.applyFeatures(s,e,n)}},t}(),wo=["rvrn"],xo=["ccmp","locl","rlig","mark","mkmk"],_o=["frac","numr","dnom"],ko=["calt","clig","liga","rclt","curs","kern"],So={ltr:["ltra","ltrm"],rtl:["rtla","rtlm"]},Co=(so=ao=function(){function t(){$(this,t)}return t.plan=function(t,e,n){this.planPreprocessing(t),this.planFeatures(t),this.planPostprocessing(t,n),t.assignGlobalFeatures(e),this.assignFeatures(t,e)},t.planPreprocessing=function(t){t.add({global:[].concat(wo,So[t.direction]),local:_o})},t.planFeatures=function(t){},t.planPostprocessing=function(t,e){t.add([].concat(xo,ko)),t.setFeatureOverrides(e)},t.assignFeatures=function(t,e){for(var n=0;n<e.length;){var r=e[n]
if(8260===r.codePoints[0]){for(var i=n-1,o=n+1;i>=0&&ft.isDigit(e[i].codePoints[0]);)e[i].features.numr=!0,e[i].features.frac=!0,i--
for(;o<e.length&&ft.isDigit(e[o].codePoints[0]);)e[o].features.dnom=!0,e[o].features.frac=!0,o++
r.features.frac=!0,n=o-1}else n++}},t}(),ao.zeroMarkWidths="AFTER_GPOS",so),Ao=new ht(e("AAEQAAAAAAAAADGgAZUBav7t2CtPA0EUBeDZB00pin9AJZIEgyUEj0QhweDAgQOJxCBRBElQSBwSicLgkOAwnNKZ5GaY2c7uzj4o5yZfZrrbefbuIx2nSq3CGmzAWH/+K+UO7MIe7MMhHMMpnMMFXMIVXIt2t3CnP088iPqjqNN8e4Ij7Rle4LUH82rLm6i/92A+RERERERERERNmfz/89GDeRARERERzbN8ceps2Iwt9H0C9/AJ6yOlDkbTczcot5VSm8Pm1vcFWfb7+BKOLTuOd2UlTX4wGP85Eg953lWPFbnuN7PkjtLmalOWbNenkHOSa7T3KmR9MVTZ2zZkVj1kHa68MueVKH0R4zqQ44WEXLM8VjcWHP0PtKLfPzQnMtGn3W4QYf6qxFxceVI394r2xnV+1rih0fV1Vzf3fO1n3evL5J78ruvZ5ptX2Rwy92Tfb1wlEqut3U+sZ3HXOeJ7/zDrbyuP6+Zz0fqa6Nv3vhY7Yu1xWnGevmsvsUpTT/RYIe8waUH/rvHMWKFzLfN8L+rTfp645mfX7ftlnfDtYxN59w0=","base64")),Po=["isol","fina","fin2","fin3","medi","med2","init"],Eo={Non_Joining:0,Left_Joining:1,Right_Joining:2,Dual_Joining:3,Join_Causing:3,ALAPH:4,"DALATH RISH":5,Transparent:6},Io=[[[null,null,0],[null,"isol",2],[null,"isol",1],[null,"isol",2],[null,"isol",1],[null,"isol",6]],[[null,null,0],[null,"isol",2],[null,"isol",1],[null,"isol",2],[null,"fin2",5],[null,"isol",6]],[[null,null,0],[null,"isol",2],["init","fina",1],["init","fina",3],["init","fina",4],["init","fina",6]],[[null,null,0],[null,"isol",2],["medi","fina",1],["medi","fina",3],["medi","fina",4],["medi","fina",6]],[[null,null,0],[null,"isol",2],["med2","isol",1],["med2","isol",2],["med2","fin2",5],["med2","isol",6]],[[null,null,0],[null,"isol",2],["isol","isol",1],["isol","isol",2],["isol","fin2",5],["isol","isol",6]],[[null,null,0],[null,"isol",2],[null,"isol",1],[null,"isol",2],[null,"fin3",5],[null,"isol",6]]],To=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.planFeatures=function(t){t.add(["ccmp","locl"])
for(var e=0;e<Po.length;e++){var n=Po[e]
t.addStage(n,!1)}t.addStage("mset")},e.assignFeatures=function(e,n){t.assignFeatures.call(this,e,n)
for(var r=-1,i=0,o=[],a=0;a<n.length;a++){var s=void 0,u=void 0,l=g((p=n[a]).codePoints[0])
if(l!==Eo.Transparent){var c=Io[i][l]
u=c[0],s=c[1],i=c[2],null!==u&&-1!==r&&(o[r]=u),o[a]=s,r=a}else o[a]=null}for(var f=0;f<n.length;f++){var h,p=n[f];(h=o[f])&&(p.features[h]=!0)}},e}(Co),Oo=function(){function t(e,n){$(this,t),this.glyphs=e,this.reset(n)}return t.prototype.reset=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
this.options=t,this.flags=t.flags||{},this.markAttachmentType=t.markAttachmentType||0,this.index=e},t.prototype.shouldIgnore=function(t){return this.flags.ignoreMarks&&t.isMark||this.flags.ignoreBaseGlyphs&&t.isBase||this.flags.ignoreLigatures&&t.isLigature||this.markAttachmentType&&t.isMark&&t.markAttachmentType!==this.markAttachmentType},t.prototype.move=function(t){for(this.index+=t;0<=this.index&&this.index<this.glyphs.length&&this.shouldIgnore(this.glyphs[this.index]);)this.index+=t
return 0>this.index||this.index>=this.glyphs.length?null:this.glyphs[this.index]},t.prototype.next=function(){return this.move(1)},t.prototype.prev=function(){return this.move(-1)},t.prototype.peek=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.index,n=this.increment(t)
return this.index=e,n},t.prototype.peekIndex=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.index
this.increment(t)
var n=this.index
return this.index=e,n},t.prototype.increment=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=t<0?-1:1
for(t=Math.abs(t);t--;)this.move(e)
return this.glyphs[this.index]},tt(t,[{key:"cur",get:function(){return this.glyphs[this.index]||null}}]),t}(),Bo=["DFLT","dflt","latn"],Lo=function(){function t(e,n){$(this,t),this.font=e,this.table=n,this.script=null,this.scriptTag=null,this.language=null,this.languageTag=null,this.features={},this.lookups={},this.variationsIndex=e._variationProcessor?this.findVariationsIndex(e._variationProcessor.normalizedCoords):-1,this.selectScript(),this.glyphs=[],this.positions=[],this.ligatureID=1,this.currentFeature=null}return t.prototype.findScript=function(t){if(null==this.table.scriptList)return null
Array.isArray(t)||(t=[t])
var e=t,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i,a=this.table.scriptList,s=Array.isArray(a),u=0
for(a=s?a:Y(a);;){var l
if(s){if(u>=a.length)break
l=a[u++]}else{if((u=a.next()).done)break
l=u.value}var c=l
if(c.tag===o)return c}}return null},t.prototype.selectScript=function(t,e){var n=!1,r=void 0
if(!this.script||t!==this.scriptTag){if((r=this.findScript(t))||(r=this.findScript(Bo)),!r)return this.scriptTag
this.scriptTag=r.tag,this.script=r.script,this.direction=h(t),this.language=null,this.languageTag=null,n=!0}if(!e||e!==this.languageTag){this.language=null
var i=this.script.langSysRecords,o=Array.isArray(i),a=0
for(i=o?i:Y(i);;){var s
if(o){if(a>=i.length)break
s=i[a++]}else{if((a=i.next()).done)break
s=a.value}var u=s
if(u.tag===e){this.language=u.langSys,this.languageTag=u.tag
break}}this.language||(this.language=this.script.defaultLangSys,this.languageTag=null),n=!0}if(n&&(this.features={},this.language)){var l=this.language.featureIndexes,c=Array.isArray(l),f=0
for(l=c?l:Y(l);;){var p
if(c){if(f>=l.length)break
p=l[f++]}else{if((f=l.next()).done)break
p=f.value}var d=p,g=this.table.featureList[d],y=this.substituteFeatureForVariations(d)
this.features[g.tag]=y||g.feature}}return this.scriptTag},t.prototype.lookupsForFeatures=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1],n=[],r=t,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a,u=this.features[s]
if(u){var l=u.lookupListIndexes,c=Array.isArray(l),f=0
for(l=c?l:Y(l);;){var h
if(c){if(f>=l.length)break
h=l[f++]}else{if((f=l.next()).done)break
h=f.value}var p=h
e&&-1!==e.indexOf(p)||n.push({feature:s,index:p,lookup:this.table.lookupList.get(p)})}}}return n.sort(function(t,e){return t.index-e.index}),n},t.prototype.substituteFeatureForVariations=function(t){if(-1===this.variationsIndex)return null
var e=this.table.featureVariations.featureVariationRecords[this.variationsIndex].featureTableSubstitution.substitutions,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i
if(o.featureIndex===t)return o.alternateFeatureTable}return null},t.prototype.findVariationsIndex=function(t){var e=this.table.featureVariations
if(!e)return-1
for(var n=e.featureVariationRecords,r=0;r<n.length;r++){var i=n[r].conditionSet.conditionTable
if(this.variationConditionsMatch(i,t))return r}return-1},t.prototype.variationConditionsMatch=function(t,e){return t.every(function(t){var n=t.axisIndex<e.length?e[t.axisIndex]:0
return t.filterRangeMinValue<=n&&n<=t.filterRangeMaxValue})},t.prototype.applyFeatures=function(t,e,n){var r=this.lookupsForFeatures(t)
this.applyLookups(r,e,n)},t.prototype.applyLookups=function(t,e,n){this.glyphs=e,this.positions=n,this.glyphIterator=new Oo(e)
var r=t,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a,u=s.feature,l=s.lookup
for(this.currentFeature=u,this.glyphIterator.reset(l.flags);this.glyphIterator.index<e.length;)if(u in this.glyphIterator.cur.features){var c=l.subTables,f=Array.isArray(c),h=0
for(c=f?c:Y(c);;){var p
if(f){if(h>=c.length)break
p=c[h++]}else{if((h=c.next()).done)break
p=h.value}var d=p
if(this.applyLookup(l.lookupType,d))break}this.glyphIterator.next()}else this.glyphIterator.next()}},t.prototype.applyLookup=function(t,e){throw new Error("applyLookup must be implemented by subclasses")},t.prototype.applyLookupList=function(t){var e=this.glyphIterator.options,n=this.glyphIterator.index,r=t,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a
this.glyphIterator.reset(e,n),this.glyphIterator.increment(s.sequenceIndex)
var u=this.table.lookupList.get(s.lookupListIndex)
this.glyphIterator.reset(u.flags,this.glyphIterator.index)
var l=u.subTables,c=Array.isArray(l),f=0
for(l=c?l:Y(l);;){var h
if(c){if(f>=l.length)break
h=l[f++]}else{if((f=l.next()).done)break
h=f.value}var p=h
if(this.applyLookup(u.lookupType,p))break}}return this.glyphIterator.reset(e,n),!0},t.prototype.coverageIndex=function(t,e){switch(null==e&&(e=this.glyphIterator.cur.id),t.version){case 1:return t.glyphs.indexOf(e)
case 2:var n=t.rangeRecords,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o
if(a.start<=e&&e<=a.end)return a.startCoverageIndex+e-a.start}}return-1},t.prototype.match=function(t,e,n,r){for(var i=this.glyphIterator.index,o=this.glyphIterator.increment(t),a=0;a<e.length&&o&&n(e[a],o);)r&&r.push(this.glyphIterator.index),a++,o=this.glyphIterator.next()
return this.glyphIterator.index=i,!(a<e.length)&&(r||!0)},t.prototype.sequenceMatches=function(t,e){return this.match(t,e,function(t,e){return t===e.id})},t.prototype.sequenceMatchIndices=function(t,e){var n=this
return this.match(t,e,function(t,e){return n.currentFeature in e.features&&t===e.id},[])},t.prototype.coverageSequenceMatches=function(t,e){var n=this
return this.match(t,e,function(t,e){return n.coverageIndex(t,e.id)>=0})},t.prototype.getClassID=function(t,e){switch(e.version){case 1:var n=t-e.startGlyph
if(n>=0&&n<e.classValueArray.length)return e.classValueArray[n]
break
case 2:var r=e.classRangeRecord,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a
if(s.start<=t&&t<=s.end)return s.class}}return 0},t.prototype.classSequenceMatches=function(t,e,n){var r=this
return this.match(t,e,function(t,e){return t===r.getClassID(e.id,n)})},t.prototype.applyContext=function(t){switch(t.version){case 1:var e=this.coverageIndex(t.coverage)
if(-1===e)return!1
var n=t.ruleSets[e],r=n,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a
if(this.sequenceMatches(1,s.input))return this.applyLookupList(s.lookupRecords)}break
case 2:if(-1===this.coverageIndex(t.coverage))return!1
if(-1===(e=this.getClassID(this.glyphIterator.cur.id,t.classDef)))return!1
var u=n=t.classSet[e],l=Array.isArray(u),c=0
for(u=l?u:Y(u);;){var f
if(l){if(c>=u.length)break
f=u[c++]}else{if((c=u.next()).done)break
f=c.value}var h=f
if(this.classSequenceMatches(1,h.classes,t.classDef))return this.applyLookupList(h.lookupRecords)}break
case 3:if(this.coverageSequenceMatches(0,t.coverages))return this.applyLookupList(t.lookupRecords)}return!1},t.prototype.applyChainingContext=function(t){switch(t.version){case 1:var e=this.coverageIndex(t.coverage)
if(-1===e)return!1
var n=t.chainRuleSets[e],r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o
if(this.sequenceMatches(-a.backtrack.length,a.backtrack)&&this.sequenceMatches(1,a.input)&&this.sequenceMatches(1+a.input.length,a.lookahead))return this.applyLookupList(a.lookupRecords)}break
case 2:if(-1===this.coverageIndex(t.coverage))return!1
e=this.getClassID(this.glyphIterator.cur.id,t.inputClassDef)
var s=t.chainClassSet[e]
if(!s)return!1
var u=s,l=Array.isArray(u),c=0
for(u=l?u:Y(u);;){var f
if(l){if(c>=u.length)break
f=u[c++]}else{if((c=u.next()).done)break
f=c.value}var h=f
if(this.classSequenceMatches(-h.backtrack.length,h.backtrack,t.backtrackClassDef)&&this.classSequenceMatches(1,h.input,t.inputClassDef)&&this.classSequenceMatches(1+h.input.length,h.lookahead,t.lookaheadClassDef))return this.applyLookupList(h.lookupRecords)}break
case 3:if(this.coverageSequenceMatches(-t.backtrackGlyphCount,t.backtrackCoverage)&&this.coverageSequenceMatches(0,t.inputCoverage)&&this.coverageSequenceMatches(t.inputGlyphCount,t.lookaheadCoverage))return this.applyLookupList(t.lookupRecords)}return!1},t}(),Ro=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments[3]
if($(this,t),this._font=e,this.codePoints=r,this.id=n,this.features={},Array.isArray(i))for(var o=0;o<i.length;o++){var a=i[o]
this.features[a]=!0}else"object"===(void 0===i?"undefined":J(i))&&st(this.features,i)
this.ligatureID=null,this.ligatureComponent=null,this.isLigated=!1,this.cursiveAttachment=null,this.markAttachment=null,this.shaperInfo=null,this.substituted=!1,this.isMultiplied=!1}return t.prototype.copy=function(){return new t(this._font,this.id,this.codePoints,this.features)},tt(t,[{key:"id",get:function(){return this._id},set:function(t){this._id=t,this.substituted=!0
var e=this._font.GDEF
if(e&&e.glyphClassDef){var n=Lo.prototype.getClassID(t,e.glyphClassDef)
this.isBase=1===n,this.isLigature=2===n,this.isMark=3===n,this.markAttachmentType=e.markAttachClassDef?Lo.prototype.getClassID(t,e.markAttachClassDef):0}else this.isMark=this.codePoints.every(ft.isMark),this.isBase=!this.isMark,this.isLigature=this.codePoints.length>1,this.markAttachmentType=0}}]),t}(),Mo=(lo=uo=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.planFeatures=function(t){t.add(["ljmo","vjmo","tjmo"],!1)},e.assignFeatures=function(t,e){for(var n=0,r=0;r<e.length;){var i,o=e[r].codePoints[0],a=y(o),s=pa[n][a]
switch(i=s[0],n=s[1],i){case la:t.font.hasGlyphForCodePoint(o)||(r=b(e,r,t.font))
break
case ca:r=m(e,r,t.font)
break
case fa:w(e,r,t.font)
break
case ha:r=x(e,r,t.font)}r++}},e}(Co),uo.zeroMarkWidths="NONE",lo),Fo=44032,zo=55204-Fo+1,Do=4352,No=4449,Uo=4519,Wo=21,jo=28,Go=Do+19-1,Vo=No+Wo-1,Ho=Uo+jo-1,qo=9676,Zo=function(t){return 4352<=t&&t<=4447||43360<=t&&t<=43388},Yo=function(t){return 4448<=t&&t<=4519||55216<=t&&t<=55238},Xo=function(t){return 4520<=t&&t<=4607||55243<=t&&t<=55291},Ko=function(t){return 12334<=t&&t<=12335},Jo=function(t){return Fo<=t&&t<=55204},Qo=function(t){return t-Fo<zo&&(t-Fo)%jo==0},$o=function(t){return Do<=t&&t<=Go},ta=function(t){return No<=t&&t<=Vo},ea=function(t){return Uo+1&&1<=t&&t<=Ho},na=0,ra=1,ia=2,oa=3,aa=4,sa=5,ua=6,la=1,ca=2,fa=4,ha=5,pa=[[[0,0],[0,1],[0,0],[0,0],[la,2],[la,3],[ha,0]],[[0,0],[0,1],[ca,2],[0,0],[la,2],[la,3],[ha,0]],[[0,0],[0,1],[0,0],[ca,3],[la,2],[la,3],[fa,0]],[[0,0],[0,1],[0,0],[0,0],[la,2],[la,3],[fa,0]]],da={stateTable:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,14,15,16,17],[0,0,0,18,19,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,28,29,30,31,32,33,0,34,0,0,35,36,0,0,37,0],[0,0,0,38,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,39,0,0,0,40,41,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,12,43,0,0,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,0,43,0,0,0,0],[0,0,0,45,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,50,0,0,51,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0],[0,0,0,53,54,55,56,57,58,0,59,0,0,60,61,0,0,62,0],[0,0,0,4,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,63,64,0,0,40,41,0,9,0,10,0,0,0,42,0,63,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,0,2,16,0],[0,0,0,18,65,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,0,0],[0,0,0,69,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,73,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,75,0,0,0,76,77,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,25,79,0,0,0,0],[0,0,0,18,19,20,74,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,81,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,86,0,0,87,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,88,0,0,0,0,0,0,0,0],[0,0,0,18,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,89,90,0,0,76,77,0,23,0,24,0,0,0,78,0,89,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,0,0],[0,0,0,94,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,96,0,0,0,97,98,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,35,100,0,0,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,102,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,107,0,0,108,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,109,0,0,0,0,0,0,0,0],[0,0,0,28,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,110,111,0,0,97,98,0,33,0,34,0,0,0,99,0,110,0,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,0,0],[0,0,0,0,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,0,0,115,116,117,118,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,39,0,122,0,123,123,8,9,0,10,0,0,0,42,0,39,0,0],[0,124,64,0,0,0,0,0,0,0,0,0,0,0,0,0,124,0,0],[0,39,0,0,0,121,125,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,126,126,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,47,47,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,128,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,129,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,50,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0],[0,0,0,135,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,136,0,0,0,137,138,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,60,140,0,0,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,0,140,0,0,0,0],[0,0,0,142,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,147,0,0,148,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,149,0,0,0,0,0,0,0,0],[0,0,0,53,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,150,151,0,0,137,138,0,58,0,59,0,0,0,139,0,150,0,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,0,0],[0,0,0,155,116,156,157,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,75,3,4,5,159,160,8,161,0,162,0,11,12,163,0,75,16,0],[0,0,0,0,0,40,164,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,0,165,0,0,0,0],[0,124,64,0,0,40,164,0,9,0,10,0,0,0,42,0,124,0,0],[0,0,0,0,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,167,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,168,0,0,0,0,0,0,0,0],[0,0,0,0,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,0,79,0,0,0,0],[0,0,0,169,170,171,172,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,75,0,176,0,177,177,22,23,0,24,0,0,0,78,0,75,0,0],[0,178,90,0,0,0,0,0,0,0,0,0,0,0,0,0,178,0,0],[0,75,0,0,0,175,179,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,180,180,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,83,83,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,182,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,183,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,86,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,188,0,0,0,0,0,0,0,0],[0,0,0,189,170,190,191,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,76,193,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,0,194,0,0,0,0],[0,178,90,0,0,76,193,0,23,0,24,0,0,0,78,0,178,0,0],[0,0,0,0,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,195,196,197,198,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,96,0,202,0,203,203,32,33,0,34,0,0,0,99,0,96,0,0],[0,204,111,0,0,0,0,0,0,0,0,0,0,0,0,0,204,0,0],[0,96,0,0,0,201,205,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,206,206,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,104,104,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,208,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,209,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,107,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,214,0,0,0,0,0,0,0,0],[0,0,0,215,196,216,217,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,97,219,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,0,220,0,0,0,0],[0,204,111,0,0,97,219,0,33,0,34,0,0,0,99,0,204,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,223,0,0,0,40,224,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,119,225,0,0,0,0],[0,0,0,115,116,117,222,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,115,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,226,64,0,0,40,224,0,9,0,10,0,0,0,42,0,226,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,39,0,0,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,44,44,8,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,227,0,228,229,0,9,0,10,0,0,230,0,0,0,0,0],[0,39,0,122,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,231,231,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,232,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,131,131,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,234,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,235,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,0,0,240,241,242,243,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,136,0,247,0,248,248,57,58,0,59,0,0,0,139,0,136,0,0],[0,249,151,0,0,0,0,0,0,0,0,0,0,0,0,0,249,0,0],[0,136,0,0,0,246,250,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,251,251,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,144,144,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,253,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,254,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,147,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,259,0,0,0,0,0,0,0,0],[0,0,0,260,241,261,262,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,137,264,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,0,265,0,0,0,0],[0,249,151,0,0,137,264,0,58,0,59,0,0,0,139,0,249,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,158,225,0,0,0,0],[0,0,0,155,116,156,222,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,155,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,43,266,266,8,161,0,24,0,0,12,267,0,0,0,0],[0,75,0,176,43,268,268,269,161,0,24,0,0,0,267,0,75,0,0],[0,0,0,0,0,270,0,0,271,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,272,0,0,0,0,0,0,0,0],[0,273,274,0,0,40,41,0,9,0,10,0,0,0,42,0,273,0,0],[0,0,0,40,0,123,123,8,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,121,275,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,276,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,279,0,0,0,76,280,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,173,281,0,0,0,0],[0,0,0,169,170,171,278,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,169,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,282,90,0,0,76,280,0,23,0,24,0,0,0,78,0,282,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,75,0,0,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,80,80,22,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,283,0,284,285,0,23,0,24,0,0,286,0,0,0,0,0],[0,75,0,176,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,287,287,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,288,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,185,185,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,290,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,291,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,192,281,0,0,0,0],[0,0,0,189,170,190,278,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,189,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,76,0,177,177,22,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,175,296,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,299,0,0,0,97,300,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,199,301,0,0,0,0],[0,0,0,195,196,197,298,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,195,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,302,111,0,0,97,300,0,33,0,34,0,0,0,99,0,302,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,96,0,0,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,101,101,32,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,303,0,304,305,0,33,0,34,0,0,306,0,0,0,0,0],[0,96,0,202,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,307,307,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,211,211,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,310,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,311,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,218,301,0,0,0,0],[0,0,0,215,196,216,298,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,215,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,97,0,203,203,32,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,201,316,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,0,225,0,0,0,0],[0,0,0,317,318,319,320,8,9,0,10,0,0,321,322,0,0,16,0],[0,223,0,323,0,123,123,8,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,0,0,121,324,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,325,318,326,327,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,64,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,230,0,0,0,0,0],[0,0,0,227,0,228,121,0,9,0,10,0,0,230,0,0,0,0,0],[0,0,0,227,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0],[0,0,0,0,0,329,329,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,330,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,237,237,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,332,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,333,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,337,0,0,0,137,338,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,244,339,0,0,0,0],[0,0,0,240,241,242,336,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,240,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,340,151,0,0,137,338,0,58,0,59,0,0,0,139,0,340,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,136,0,0,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,141,141,57,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,341,0,342,343,0,58,0,59,0,0,344,0,0,0,0,0],[0,136,0,247,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,345,345,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,346,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,256,256,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,348,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,349,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,263,339,0,0,0,0],[0,0,0,260,241,261,336,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,260,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,137,0,248,248,57,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,246,354,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,126,126,8,23,0,0,0,0,0,0,0,0,0,0],[0,355,90,0,0,121,125,0,9,0,10,0,0,0,42,0,355,0,0],[0,0,0,0,0,356,356,269,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,357,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,270,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,363,0,0,0,0,0,0,0,0],[0,0,0,364,116,365,366,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,40,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,0,281,0,0,0,0],[0,0,0,369,370,371,372,22,23,0,24,0,0,373,374,0,0,27,0],[0,279,0,375,0,177,177,22,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,0,0,175,376,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,377,370,378,379,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,90,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,286,0,0,0,0,0],[0,0,0,283,0,284,175,0,23,0,24,0,0,286,0,0,0,0,0],[0,0,0,283,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,0,0],[0,0,0,0,0,381,381,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,382,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,293,293,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,384,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,385,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,76,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,0,301,0,0,0,0],[0,0,0,387,388,389,390,32,33,0,34,0,0,391,392,0,0,37,0],[0,299,0,393,0,203,203,32,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,0,0,201,394,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,395,388,396,397,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,111,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,306,0,0,0,0,0],[0,0,0,303,0,304,201,0,33,0,34,0,0,306,0,0,0,0,0],[0,0,0,303,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,103,0,0],[0,0,0,0,0,399,399,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,400,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,313,313,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,402,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,403,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,97,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,407,0,0,0,40,408,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,321,409,0,0,0,0],[0,0,0,317,318,319,406,8,9,0,10,0,0,321,322,0,0,16,0],[0,0,0,317,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,410,64,0,0,40,408,0,9,0,10,0,0,0,42,0,410,0,0],[0,223,0,0,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,323,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,328,409,0,0,0,0],[0,0,0,325,318,326,406,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,325,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,0,0,0,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0],[0,0,0,0,0,411,411,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,412,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,413,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,0,339,0,0,0,0],[0,0,0,414,415,416,417,57,58,0,59,0,0,418,419,0,0,62,0],[0,337,0,420,0,248,248,57,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,0,0,246,421,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,422,415,423,424,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,151,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,344,0,0,0,0,0],[0,0,0,341,0,342,246,0,58,0,59,0,0,344,0,0,0,0,0],[0,0,0,341,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,143,0,0],[0,0,0,0,0,426,426,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,427,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,351,351,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,429,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,430,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,137,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,432,116,433,434,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,0,0,180,180,269,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,359,359,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,437,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,438,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,443,274,0,0,0,0,0,0,0,0,0,0,0,0,0,443,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,367,225,0,0,0,0],[0,0,0,364,116,365,445,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,364,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,448,0,0,0,76,449,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,373,450,0,0,0,0],[0,0,0,369,370,371,447,22,23,0,24,0,0,373,374,0,0,27,0],[0,0,0,369,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,451,90,0,0,76,449,0,23,0,24,0,0,0,78,0,451,0,0],[0,279,0,0,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,375,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,380,450,0,0,0,0],[0,0,0,377,370,378,447,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,377,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,0,0,0,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,0,0],[0,0,0,0,0,452,452,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,453,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,454,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,457,0,0,0,97,458,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,391,459,0,0,0,0],[0,0,0,387,388,389,456,32,33,0,34,0,0,391,392,0,0,37,0],[0,0,0,387,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,460,111,0,0,97,458,0,33,0,34,0,0,0,99,0,460,0,0],[0,299,0,0,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,393,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,398,459,0,0,0,0],[0,0,0,395,388,396,456,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,395,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,0,0,0,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0],[0,0,0,0,0,461,461,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,462,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,463,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,0,409,0,0,0,0],[0,0,0,464,465,466,467,8,9,0,10,0,0,468,469,0,0,16,0],[0,407,0,470,0,123,123,8,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,0,0,121,471,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,472,465,473,474,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,0,0,0,0,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,236,0,0],[0,0,0,0,0,0,476,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,479,0,0,0,137,480,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,418,481,0,0,0,0],[0,0,0,414,415,416,478,57,58,0,59,0,0,418,419,0,0,62,0],[0,0,0,414,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,482,151,0,0,137,480,0,58,0,59,0,0,0,139,0,482,0,0],[0,337,0,0,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,420,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,425,481,0,0,0,0],[0,0,0,422,415,423,478,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,422,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,0,0,0,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0],[0,0,0,0,0,483,483,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,484,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,485,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,435,225,0,0,0,0],[0,0,0,432,116,433,445,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,432,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,486,486,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,487,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,440,440,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,489,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,490,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,495,0,496,497,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,0,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,0,225,0,0,0,0],[0,0,0,0,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,0,450,0,0,0,0],[0,0,0,499,500,501,502,22,23,0,24,0,0,503,504,0,0,27,0],[0,448,0,505,0,177,177,22,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,0,0,175,506,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,507,500,508,509,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,0,0,0,0,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,292,0,0],[0,0,0,0,0,0,511,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,0,459,0,0,0,0],[0,0,0,512,513,514,515,32,33,0,34,0,0,516,517,0,0,37,0],[0,457,0,518,0,203,203,32,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,0,0,201,519,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,520,513,521,522,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,0,0,0,0,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,312,0,0],[0,0,0,0,0,0,524,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,527,0,0,0,40,528,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,468,529,0,0,0,0],[0,0,0,464,465,466,526,8,9,0,10,0,0,468,469,0,0,16,0],[0,0,0,464,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,530,64,0,0,40,528,0,9,0,10,0,0,0,42,0,530,0,0],[0,407,0,0,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,470,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,475,529,0,0,0,0],[0,0,0,472,465,473,526,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,472,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0],[0,0,0,0,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,0,481,0,0,0,0],[0,0,0,531,532,533,534,57,58,0,59,0,0,535,536,0,0,62,0],[0,479,0,537,0,248,248,57,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,0,0,246,538,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,539,532,540,541,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,0,0,0,0,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,350,0,0],[0,0,0,0,0,0,543,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,358,0,0],[0,0,0,0,0,544,544,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,545,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,492,492,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,547,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,548,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,274,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,498,0,0,0,0,0],[0,0,0,495,0,496,368,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,495,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,553,0,0,0,76,554,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,503,555,0,0,0,0],[0,0,0,499,500,501,552,22,23,0,24,0,0,503,504,0,0,27,0],[0,0,0,499,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,556,90,0,0,76,554,0,23,0,24,0,0,0,78,0,556,0,0],[0,448,0,0,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,505,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,510,555,0,0,0,0],[0,0,0,507,500,508,552,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,507,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,559,0,0,0,97,560,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,516,561,0,0,0,0],[0,0,0,512,513,514,558,32,33,0,34,0,0,516,517,0,0,37,0],[0,0,0,512,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,562,111,0,0,97,560,0,33,0,34,0,0,0,99,0,562,0,0],[0,457,0,0,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,518,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,523,561,0,0,0,0],[0,0,0,520,513,521,558,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,520,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,97,0,0],[0,0,0,0,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,0,529,0,0,0,0],[0,0,0,563,66,564,565,8,9,0,10,0,0,566,68,0,0,16,0],[0,527,0,567,0,123,123,8,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,0,0,121,568,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,569,66,570,571,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,575,0,0,0,137,576,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,535,577,0,0,0,0],[0,0,0,531,532,533,574,57,58,0,59,0,0,535,536,0,0,62,0],[0,0,0,531,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,578,151,0,0,137,576,0,58,0,59,0,0,0,139,0,578,0,0],[0,479,0,0,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,537,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,542,577,0,0,0,0],[0,0,0,539,532,540,574,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,539,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,137,0,0],[0,0,0,0,0,0,0,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,439,0,0],[0,0,0,0,0,579,579,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,580,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,581,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,0,555,0,0,0,0],[0,0,0,582,91,583,584,22,23,0,24,0,0,585,93,0,0,27,0],[0,553,0,586,0,177,177,22,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,0,0,175,587,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,588,91,589,590,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,0,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,0,561,0,0,0,0],[0,0,0,592,112,593,594,32,33,0,34,0,0,595,114,0,0,37,0],[0,559,0,596,0,203,203,32,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,0,0,201,597,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,598,112,599,600,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,566,165,0,0,0,0],[0,0,0,563,66,564,67,8,9,0,10,0,0,566,68,0,0,16,0],[0,0,0,563,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,527,0,0,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,567,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,572,165,0,0,0,0],[0,0,0,569,66,570,67,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,569,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,0,577,0,0,0,0],[0,0,0,603,152,604,605,57,58,0,59,0,0,606,154,0,0,62,0],[0,575,0,607,0,248,248,57,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,0,0,246,608,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,609,152,610,611,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,0,0,0,0,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,491,0,0],[0,0,0,0,0,0,613,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,585,194,0,0,0,0],[0,0,0,582,91,583,92,22,23,0,24,0,0,585,93,0,0,27,0],[0,0,0,582,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,553,0,0,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,586,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,591,194,0,0,0,0],[0,0,0,588,91,589,92,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,588,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,595,220,0,0,0,0],[0,0,0,592,112,593,113,32,33,0,34,0,0,595,114,0,0,37,0],[0,0,0,592,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,559,0,0,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,596,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,601,220,0,0,0,0],[0,0,0,598,112,599,113,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,598,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,606,265,0,0,0,0],[0,0,0,603,152,604,153,57,58,0,59,0,0,606,154,0,0,62,0],[0,0,0,603,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,575,0,0,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,607,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,612,265,0,0,0,0],[0,0,0,609,152,610,153,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,609,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,549,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0]],accepting:[!1,!0,!0,!0,!0,!0,!1,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!0,!0,!0,!0,!0,!0,!1,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0,!0,!1,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!1,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!1,!0,!0,!0,!1,!0,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!1,!0,!0,!0,!0,!1,!0,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!1,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!0,!1,!0,!0,!1,!1,!0,!1,!0,!0,!1,!0,!0,!1,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!1,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!1,!0,!1,!0,!0,!0,!0,!1,!1,!1,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!0,!0,!1,!1,!0,!0,!0,!1,!0,!1,!0,!0,!0,!0,!1,!1,!1,!0,!1,!0,!0,!0,!0,!1,!1,!1,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!1,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!1,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!1,!1,!1,!1,!0,!0,!1,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!0,!1,!0,!0,!0,!0,!1,!1,!1,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0,!0],tags:[[],["broken_cluster"],["consonant_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],[],["broken_cluster"],["symbol_cluster"],[],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["symbol_cluster"],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],[],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],[],[],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],["consonant_syllable"],["vowel_syllable"],["standalone_cluster"]]},ga={categories:["O","IND","S","GB","B","FM","CGJ","VMAbv","VMPst","VAbv","VPst","CMBlw","VPre","VBlw","H","VMBlw","CMAbv","MBlw","CS","R","SUB","MPst","MPre","FAbv","FPst","FBlw","SMAbv","SMBlw","VMPre","ZWNJ","ZWJ","WJ","VS","N","HN","MAbv"],decompositions:{2507:[2503,2494],2508:[2503,2519],2888:[2887,2902],2891:[2887,2878],2892:[2887,2903],3018:[3014,3006],3019:[3015,3006],3020:[3014,3031],3144:[3142,3158],3264:[3263,3285],3271:[3270,3285],3272:[3270,3286],3274:[3270,3266],3275:[3270,3266,3285],3402:[3398,3390],3403:[3399,3390],3404:[3398,3415],3546:[3545,3530],3548:[3545,3535],3549:[3545,3535,3530],3550:[3545,3551],3635:[3661,3634],3763:[3789,3762],3955:[3953,3954],3957:[3953,3956],3958:[4018,3968],3959:[4018,3953,3968],3960:[4019,3968],3961:[4019,3953,3968],3969:[3953,3968],6971:[6970,6965],6973:[6972,6965],6976:[6974,6965],6977:[6975,6965],6979:[6978,6965],69934:[69937,69927],69935:[69938,69927],70475:[70471,70462],70476:[70471,70487],70843:[70841,70842],70844:[70841,70832],70846:[70841,70845],71098:[71096,71087],71099:[71097,71087]},stateTable:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,3,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,17,18,11,19,20,21,22,0,0,23,0,0,2,0,24,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,27,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,39,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,49,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,53,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0]],accepting:[!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],tags:[[],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["symbol_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["virama_terminated_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["number_joiner_terminated_cluster"],["standard_cluster"],["standard_cluster"],["numeral_cluster"]]},ya={X:1,C:2,V:4,N:8,H:16,ZWNJ:32,ZWJ:64,M:128,SM:256,VD:512,A:1024,Placeholder:2048,Dotted_Circle:4096,RS:8192,Coeng:16384,Repha:32768,Ra:65536,CM:1<<17,Symbol:1<<18},va={Start:1,Ra_To_Become_Reph:2,Pre_M:4,Pre_C:8,Base_C:16,After_Main:32,Above_C:64,Before_Sub:128,Below_C:256,After_Sub:512,Before_Post:1024,Post_C:2048,After_Post:4096,Final_C:8192,SMVD:16384,End:32768},ba=ya.C|ya.Ra|ya.CM|ya.V|ya.Placeholder|ya.Dotted_Circle,ma=ya.ZWJ|ya.ZWNJ,wa=ya.H|ya.Coeng,xa={Default:{hasOldSpec:!1,virama:0,basePos:"Last",rephPos:va.Before_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Devanagari:{hasOldSpec:!0,virama:2381,basePos:"Last",rephPos:va.Before_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Bengali:{hasOldSpec:!0,virama:2509,basePos:"Last",rephPos:va.After_Sub,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Gurmukhi:{hasOldSpec:!0,virama:2637,basePos:"Last",rephPos:va.Before_Sub,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Gujarati:{hasOldSpec:!0,virama:2765,basePos:"Last",rephPos:va.Before_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Oriya:{hasOldSpec:!0,virama:2893,basePos:"Last",rephPos:va.After_Main,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Tamil:{hasOldSpec:!0,virama:3021,basePos:"Last",rephPos:va.After_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Telugu:{hasOldSpec:!0,virama:3149,basePos:"Last",rephPos:va.After_Post,rephMode:"Explicit",blwfMode:"Post_Only"},Kannada:{hasOldSpec:!0,virama:3277,basePos:"Last",rephPos:va.After_Post,rephMode:"Implicit",blwfMode:"Post_Only"},Malayalam:{hasOldSpec:!0,virama:3405,basePos:"Last",rephPos:va.After_Main,rephMode:"Log_Repha",blwfMode:"Pre_And_Post"},Khmer:{hasOldSpec:!1,virama:6098,basePos:"First",rephPos:va.Ra_To_Become_Reph,rephMode:"Vis_Repha",blwfMode:"Pre_And_Post"}},_a={6078:[6081,6078],6079:[6081,6079],6080:[6081,6080],6084:[6081,6084],6085:[6081,6085]},ka=ga.decompositions,Sa=new ht(e("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","base64")),Ca=new pt(da),Aa=(fo=co=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.planFeatures=function(t){var e
t.addStage(S),t.addStage(["locl","ccmp"]),t.addStage(I),t.addStage("nukt"),t.addStage("akhn"),t.addStage("rphf",!1),t.addStage("rkrf"),t.addStage("pref",!1),t.addStage("blwf",!1),t.addStage("abvf",!1),t.addStage("half",!1),t.addStage("pstf",!1),t.addStage("vatu"),t.addStage("cjct"),t.addStage("cfar",!1),t.addStage(T),t.addStage({local:["init"],global:["pres","abvs","blws","psts","haln","dist","abvm","blwm","calt","clig"]}),t.unicodeScript=(e=t.script,ji[e]),t.indicConfig=xa[t.unicodeScript]||xa.Default,t.isOldSpec=t.indicConfig.hasOldSpec&&"2"!==t.script[t.script.length-1]},e.assignFeatures=function(t,e){for(var n=e.length-1;n>=0;n--)!function(n){var r=e[n].codePoints[0],i=_a[r]||ka[r]
if(i){var o=i.map(function(r){var i=t.font.glyphForCodePoint(r)
return new Ro(t.font,i.id,[r],e[n].features)})
e.splice.apply(e,[n,1].concat(o))}}(n)},e}(Co),co.zeroMarkWidths="NONE",fo),Pa=function t(e,n,r,i){$(this,t),this.category=e,this.position=n,this.syllableType=r,this.syllable=i},Ea=ga.categories,Ia=ga.decompositions,Ta=new ht(e("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","base64")),Oa=new pt(ga),Ba=(po=ho=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.planFeatures=function(t){t.addStage(L),t.addStage(["locl","ccmp","nukt","akhn"]),t.addStage(R),t.addStage(["rphf"],!1),t.addStage(M),t.addStage(R),t.addStage(["pref"]),t.addStage(F),t.addStage(["rkrf","abvf","blwf","half","pstf","vatu","cjct"]),t.addStage(z),t.addStage(["abvs","blws","pres","psts","dist","abvm","blwm"])},e.assignFeatures=function(t,e){for(var n=e.length-1;n>=0;n--)!function(n){var r=e[n].codePoints[0]
if(Ia[r]){var i=Ia[r].map(function(r){var i=t.font.glyphForCodePoint(r)
return new Ro(t.font,i.id,[r],e[n].features)})
e.splice.apply(e,[n,1].concat(i))}}(n)},e}(Co),ho.zeroMarkWidths="BEFORE_GPOS",po),La=function t(e,n,r){$(this,t),this.category=e,this.syllableType=n,this.syllable=r},Ra={arab:To,mong:To,syrc:To,"nko ":To,phag:To,mand:To,mani:To,phlp:To,hang:Mo,bng2:Aa,beng:Aa,dev2:Aa,deva:Aa,gjr2:Aa,gujr:Aa,guru:Aa,gur2:Aa,knda:Aa,knd2:Aa,mlm2:Aa,mlym:Aa,ory2:Aa,orya:Aa,taml:Aa,tml2:Aa,telu:Aa,tel2:Aa,khmr:Aa,bali:Ba,batk:Ba,brah:Ba,bugi:Ba,buhd:Ba,cakm:Ba,cham:Ba,dupl:Ba,egyp:Ba,gran:Ba,hano:Ba,java:Ba,kthi:Ba,kali:Ba,khar:Ba,khoj:Ba,sind:Ba,lepc:Ba,limb:Ba,mahj:Ba,mtei:Ba,modi:Ba,hmng:Ba,rjng:Ba,saur:Ba,shrd:Ba,sidd:Ba,sinh:Ba,sund:Ba,sylo:Ba,tglg:Ba,tagb:Ba,tale:Ba,lana:Ba,tavt:Ba,takr:Ba,tibt:Ba,tfng:Ba,tirh:Ba,latn:Co,DFLT:Co},Ma=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype.applyLookup=function(t,e){var n=this
switch(t){case 1:var r=this.coverageIndex(e.coverage)
if(-1===r)return!1
var i=this.glyphIterator.cur
switch(e.version){case 1:i.id=i.id+e.deltaGlyphID&65535
break
case 2:i.id=e.substitute.get(r)}return!0
case 2:var o=this.coverageIndex(e.coverage)
if(-1!==o){var a,s=e.sequences.get(o)
this.glyphIterator.cur.id=s[0],this.glyphIterator.cur.ligatureComponent=0
var u=this.glyphIterator.cur.features,l=this.glyphIterator.cur,c=s.slice(1).map(function(t,e){var r=new Ro(n.font,t,void 0,u)
return r.shaperInfo=l.shaperInfo,r.isLigated=l.isLigated,r.ligatureComponent=e+1,r.substituted=!0,r.isMultiplied=!0,r})
return(a=this.glyphs).splice.apply(a,[this.glyphIterator.index+1,0].concat(c)),!0}return!1
case 3:var f=this.coverageIndex(e.coverage)
return-1!==f&&(this.glyphIterator.cur.id=e.alternateSet.get(f)[0],!0)
case 4:var h=this.coverageIndex(e.coverage)
if(-1===h)return!1
var p=e.ligatureSets.get(h),d=Array.isArray(p),g=0
for(p=d?p:Y(p);;){var y
if(d){if(g>=p.length)break
y=p[g++]}else{if((g=p.next()).done)break
y=g.value}var v=y,b=this.sequenceMatchIndices(1,v.components)
if(b){var m=this.glyphIterator.cur,w=m.codePoints.slice(),x=b,_=Array.isArray(x),k=0
for(x=_?x:Y(x);;){var S
if(_){if(k>=x.length)break
S=x[k++]}else{if((k=x.next()).done)break
S=k.value}var C=S
w.push.apply(w,this.glyphs[C].codePoints)}var A=new Ro(this.font,v.glyph,w,m.features)
A.shaperInfo=m.shaperInfo,A.isLigated=!0,A.substituted=!0
for(var P=m.isMark,E=0;E<b.length&&P;E++)P=this.glyphs[b[E]].isMark
A.ligatureID=P?null:this.ligatureID++
var I=m.ligatureID,T=m.codePoints.length,O=T,B=this.glyphIterator.index+1,L=b,R=Array.isArray(L),M=0
for(L=R?L:Y(L);;){var F
if(R){if(M>=L.length)break
F=L[M++]}else{if((M=L.next()).done)break
F=M.value}var z=F
if(P)B=z
else for(;B<z;){var D=O-T+Math.min(this.glyphs[B].ligatureComponent||1,T)
this.glyphs[B].ligatureID=A.ligatureID,this.glyphs[B].ligatureComponent=D,B++}I=this.glyphs[B].ligatureID,O+=T=this.glyphs[B].codePoints.length,B++}if(I&&!P)for(var N=B;N<this.glyphs.length&&this.glyphs[N].ligatureID===I;N++){D=O-T+Math.min(this.glyphs[N].ligatureComponent||1,T)
this.glyphs[N].ligatureComponent=D}for(var U=b.length-1;U>=0;U--)this.glyphs.splice(b[U],1)
return this.glyphs[this.glyphIterator.index]=A,!0}}return!1
case 5:return this.applyContext(e)
case 6:return this.applyChainingContext(e)
case 7:return this.applyLookup(e.lookupType,e.extension)
default:throw new Error("GSUB lookupType "+t+" is not supported")}},e}(Lo),Fa=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype.applyPositionValue=function(t,e){var n=this.positions[this.glyphIterator.peekIndex(t)]
null!=e.xAdvance&&(n.xAdvance+=e.xAdvance),null!=e.yAdvance&&(n.yAdvance+=e.yAdvance),null!=e.xPlacement&&(n.xOffset+=e.xPlacement),null!=e.yPlacement&&(n.yOffset+=e.yPlacement)},e.prototype.applyLookup=function(t,e){switch(t){case 1:var n=this.coverageIndex(e.coverage)
if(-1===n)return!1
switch(e.version){case 1:this.applyPositionValue(0,e.value)
break
case 2:this.applyPositionValue(0,e.values.get(n))}return!0
case 2:var r=this.glyphIterator.peek()
if(!r)return!1
var i=this.coverageIndex(e.coverage)
if(-1===i)return!1
switch(e.version){case 1:var o=e.pairSets.get(i),a=Array.isArray(o),s=0
for(o=a?o:Y(o);;){var u
if(a){if(s>=o.length)break
u=o[s++]}else{if((s=o.next()).done)break
u=s.value}var l=u
if(l.secondGlyph===r.id)return this.applyPositionValue(0,l.value1),this.applyPositionValue(1,l.value2),!0}return!1
case 2:var c=this.getClassID(this.glyphIterator.cur.id,e.classDef1),f=this.getClassID(r.id,e.classDef2)
if(-1===c||-1===f)return!1
var h=e.classRecords.get(c).get(f)
return this.applyPositionValue(0,h.value1),this.applyPositionValue(1,h.value2),!0}case 3:var p=this.glyphIterator.peekIndex(),d=this.glyphs[p]
if(!d)return!1
var g=e.entryExitRecords[this.coverageIndex(e.coverage)]
if(!g||!g.exitAnchor)return!1
var y=e.entryExitRecords[this.coverageIndex(e.coverage,d.id)]
if(!y||!y.entryAnchor)return!1
var v=this.getAnchor(y.entryAnchor),b=this.getAnchor(g.exitAnchor),m=this.positions[this.glyphIterator.index],w=this.positions[p]
switch(this.direction){case"ltr":m.xAdvance=b.x+m.xOffset
var x=v.x+w.xOffset
w.xAdvance-=x,w.xOffset-=x
break
case"rtl":x=b.x+m.xOffset,m.xAdvance-=x,m.xOffset-=x,w.xAdvance=v.x+w.xOffset}return this.glyphIterator.flags.rightToLeft?(this.glyphIterator.cur.cursiveAttachment=p,m.yOffset=v.y-b.y):(d.cursiveAttachment=this.glyphIterator.index,m.yOffset=b.y-v.y),!0
case 4:var _=this.coverageIndex(e.markCoverage)
if(-1===_)return!1
for(var k=this.glyphIterator.index;--k>=0&&this.glyphs[k].isMark;);if(k<0)return!1
var S=this.coverageIndex(e.baseCoverage,this.glyphs[k].id)
if(-1===S)return!1
var C=e.markArray[_],A=e.baseArray[S][C.class]
return this.applyAnchor(C,A,k),!0
case 5:var P=this.coverageIndex(e.markCoverage)
if(-1===P)return!1
for(var E=this.glyphIterator.index;--E>=0&&this.glyphs[E].isMark;);if(E<0)return!1
var I=this.coverageIndex(e.ligatureCoverage,this.glyphs[E].id)
if(-1===I)return!1
var T=e.ligatureArray[I],O=this.glyphIterator.cur,B=this.glyphs[E],L=B.ligatureID&&B.ligatureID===O.ligatureID&&null!=O.ligatureComponent?Math.min(O.ligatureComponent,B.codePoints.length)-1:B.codePoints.length-1,R=e.markArray[P],M=T[L][R.class]
return this.applyAnchor(R,M,E),!0
case 6:var F=this.coverageIndex(e.mark1Coverage)
if(-1===F)return!1
var z=this.glyphIterator.peekIndex(-1),D=this.glyphs[z]
if(!D||!D.isMark)return!1
var N=this.glyphIterator.cur,U=!1
if(N.ligatureID===D.ligatureID?N.ligatureID?N.ligatureComponent===D.ligatureComponent&&(U=!0):U=!0:(N.ligatureID&&!N.ligatureComponent||D.ligatureID&&!D.ligatureComponent)&&(U=!0),!U)return!1
var W=this.coverageIndex(e.mark2Coverage,D.id)
if(-1===W)return!1
var j=e.mark1Array[F],G=e.mark2Array[W][j.class]
return this.applyAnchor(j,G,z),!0
case 7:return this.applyContext(e)
case 8:return this.applyChainingContext(e)
case 9:return this.applyLookup(e.lookupType,e.extension)
default:throw new Error("Unsupported GPOS table: "+t)}},e.prototype.applyAnchor=function(t,e,n){var r=this.getAnchor(e),i=this.getAnchor(t.markAnchor),o=(this.positions[n],this.positions[this.glyphIterator.index])
o.xOffset=r.x-i.x,o.yOffset=r.y-i.y,this.glyphIterator.cur.markAttachment=n},e.prototype.getAnchor=function(t){return{x:t.xCoordinate,y:t.yCoordinate}},e.prototype.applyFeatures=function(e,n,r){t.prototype.applyFeatures.call(this,e,n,r)
for(var i=0;i<this.glyphs.length;i++)this.fixCursiveAttachment(i)
this.fixMarkAttachment()},e.prototype.fixCursiveAttachment=function(t){var e=this.glyphs[t]
if(null!=e.cursiveAttachment){var n=e.cursiveAttachment
e.cursiveAttachment=null,this.fixCursiveAttachment(n),this.positions[t].yOffset+=this.positions[n].yOffset}},e.prototype.fixMarkAttachment=function(){for(var t=0;t<this.glyphs.length;t++){var e=this.glyphs[t]
if(null!=e.markAttachment){var n=e.markAttachment
if(this.positions[t].xOffset+=this.positions[n].xOffset,this.positions[t].yOffset+=this.positions[n].yOffset,"ltr"===this.direction)for(var r=n;r<t;r++)this.positions[t].xOffset-=this.positions[r].xAdvance,this.positions[t].yOffset-=this.positions[r].yAdvance}}},e}(Lo),za=function(){function t(e){$(this,t),this.font=e,this.glyphInfos=null,this.plan=null,this.GSUBProcessor=null,this.GPOSProcessor=null,this.fallbackPosition=!0,e.GSUB&&(this.GSUBProcessor=new Ma(e,e.GSUB)),e.GPOS&&(this.GPOSProcessor=new Fa(e,e.GPOS))}return t.prototype.setup=function(t){var e=this
this.glyphInfos=t.glyphs.map(function(t){return new Ro(e.font,t.id,[].concat(t.codePoints))})
var n=this.GSUBProcessor?this.GSUBProcessor.selectScript(t.script,t.language):this.GPOSProcessor.selectScript(t.script,t.language)
this.shaper=function(t){Array.isArray(t)||(t=[t])
var e=t,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=Ra[i]
if(o)return o}return Co}(n),this.plan=new mo(this.font,n),this.shaper.plan(this.plan,this.glyphInfos,t.features)
for(var r in this.plan.allFeatures)t.features[r]=!0},t.prototype.substitute=function(t){var e=this
this.GSUBProcessor&&(this.plan.process(this.GSUBProcessor,this.glyphInfos),t.glyphs=this.glyphInfos.map(function(t){return e.font.getGlyph(t.id,t.codePoints)}))},t.prototype.position=function(t){return"BEFORE_GPOS"===this.shaper.zeroMarkWidths&&this.zeroMarkAdvances(t.positions),this.GPOSProcessor&&this.plan.process(this.GPOSProcessor,this.glyphInfos,t.positions),"AFTER_GPOS"===this.shaper.zeroMarkWidths&&this.zeroMarkAdvances(t.positions),"rtl"===t.direction&&(t.glyphs.reverse(),t.positions.reverse()),this.GPOSProcessor&&this.GPOSProcessor.features},t.prototype.zeroMarkAdvances=function(t){for(var e=0;e<this.glyphInfos.length;e++)this.glyphInfos[e].isMark&&(t[e].xAdvance=0,t[e].yAdvance=0)},t.prototype.cleanup=function(){this.glyphInfos=null,this.plan=null,this.shaper=null},t.prototype.getAvailableFeatures=function(t,e){var n=[]
return this.GSUBProcessor&&(this.GSUBProcessor.selectScript(t,e),n.push.apply(n,K(this.GSUBProcessor.features))),this.GPOSProcessor&&(this.GPOSProcessor.selectScript(t,e),n.push.apply(n,K(this.GPOSProcessor.features))),n},t}(),Da=function(){function t(e){$(this,t),this.font=e,this.unicodeLayoutEngine=null,this.kernProcessor=null,this.font.morx?this.engine=new bo(this.font):(this.font.GSUB||this.font.GPOS)&&(this.engine=new za(this.font))}return t.prototype.layout=function(t,e,n,r){if("string"==typeof e&&(r=n=e,e=[]),"string"==typeof t){null==n&&(n=function(t){for(var e=t.length,n=0;n<e;){var r=t.charCodeAt(n++)
if(55296<=r&&r<=56319&&n<e){var i=t.charCodeAt(n)
56320<=i&&i<=57343&&(n++,r=((1023&r)<<10)+(1023&i)+65536)}var o=ft.getScript(r)
if("Common"!==o&&"Inherited"!==o&&"Unknown"!==o)return Wi[o]}return Wi.Unknown}(t))
var i=this.font.glyphsForString(t)}else{if(null==n){var o=[],a=t,s=Array.isArray(a),u=0
for(a=s?a:Y(a);;){var l
if(s){if(u>=a.length)break
l=a[u++]}else{if((u=a.next()).done)break
l=u.value}var c=l
o.push.apply(o,c.codePoints)}n=function(t){for(var e=0;e<t.length;e++){var n=t[e],r=ft.getScript(n)
if("Common"!==r&&"Inherited"!==r&&"Unknown"!==r)return Wi[r]}return Wi.Unknown}(o)}i=t}var f=new Ki(i,e,n,r)
return 0===i.length?(f.positions=[],f):(this.engine&&this.engine.setup&&this.engine.setup(f),this.substitute(f),this.position(f),this.hideDefaultIgnorables(f.glyphs,f.positions),this.engine&&this.engine.cleanup&&this.engine.cleanup(),f)},t.prototype.substitute=function(t){this.engine&&this.engine.substitute&&this.engine.substitute(t)},t.prototype.position=function(t){t.positions=t.glyphs.map(function(t){return new function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
$(this,t),this.xAdvance=e,this.yAdvance=n,this.xOffset=r,this.yOffset=i}(t.advanceWidth)})
var e=null
this.engine&&this.engine.position&&(e=this.engine.position(t)),e||this.engine&&!this.engine.fallbackPosition||(this.unicodeLayoutEngine||(this.unicodeLayoutEngine=new Ni(this.font)),this.unicodeLayoutEngine.positionGlyphs(t.glyphs,t.positions)),e&&e.kern||!1===t.features.kern||!this.font.kern||(this.kernProcessor||(this.kernProcessor=new Di(this.font)),this.kernProcessor.process(t.glyphs,t.positions),t.features.kern=!0)},t.prototype.hideDefaultIgnorables=function(t,e){for(var n=this.font.glyphForCodePoint(32),r=0;r<t.length;r++)this.isDefaultIgnorable(t[r].codePoints[0])&&(t[r]=n,e[r].xAdvance=0,e[r].yAdvance=0)},t.prototype.isDefaultIgnorable=function(t){var e=t>>16
if(0===e)switch(t>>8){case 0:return 173===t
case 3:return 847===t
case 6:return 1564===t
case 23:return 6068<=t&&t<=6069
case 24:return 6155<=t&&t<=6158
case 32:return 8203<=t&&t<=8207||8234<=t&&t<=8238||8288<=t&&t<=8303
case 254:return 65024<=t&&t<=65039||65279===t
case 255:return 65520<=t&&t<=65528
default:return!1}else switch(e){case 1:return 113824<=t&&t<=113827||119155<=t&&t<=119162
case 14:return 917504<=t&&t<=921599
default:return!1}},t.prototype.getAvailableFeatures=function(t,e){var n=[]
return this.engine&&n.push.apply(n,this.engine.getAvailableFeatures(t,e)),this.font.kern&&-1===n.indexOf("kern")&&n.push("kern"),n},t.prototype.stringsForGlyph=function(t){var e=new ct,n=this.font._cmapProcessor.codePointsForGlyph(t),r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o
e.add(ut(a))}if(this.engine&&this.engine.stringsForGlyph){var s=this.engine.stringsForGlyph(t),u=Array.isArray(s),l=0
for(s=u?s:Y(s);;){var c
if(u){if(l>=s.length)break
c=s[l++]}else{if((l=s.next()).done)break
c=l.value}var f=c
e.add(f)}}return lt(e)},t}(),Na={moveTo:"M",lineTo:"L",quadraticCurveTo:"Q",bezierCurveTo:"C",closePath:"Z"},Ua=function(){function t(){$(this,t),this.commands=[],this._bbox=null,this._cbox=null}return t.prototype.toFunction=function(){var t=this.commands.map(function(t){return"  ctx."+t.command+"("+t.args.join(", ")+");"})
return new Function("ctx",t.join("\n"))},t.prototype.toSVG=function(){return this.commands.map(function(t){var e=t.args.map(function(t){return Math.round(100*t)/100})
return""+Na[t.command]+e.join(" ")}).join("")},t.prototype.mapPoints=function(e){var n=new t,r=this.commands,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}for(var s=a,u=[],l=0;l<s.args.length;l+=2){var c=e(s.args[l],s.args[l+1]),f=c[0],h=c[1]
u.push(f,h)}n[s.command].apply(n,u)}return n},t.prototype.transform=function(t,e,n,r,i,o){return this.mapPoints(function(a,s){return[a=t*a+n*s+i,s=e*a+r*s+o]})},t.prototype.translate=function(t,e){return this.transform(1,0,0,1,t,e)},t.prototype.rotate=function(t){var e=Math.cos(t),n=Math.sin(t)
return this.transform(e,n,-n,e,0,0)},t.prototype.scale=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t
return this.transform(t,0,0,e,0,0)},tt(t,[{key:"cbox",get:function(){if(!this._cbox){var t=new Ui,e=this.commands,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}for(var o=i,a=0;a<o.args.length;a+=2)t.addPoint(o.args[a],o.args[a+1])}this._cbox=X(t)}return this._cbox}},{key:"bbox",get:function(){if(this._bbox)return this._bbox
var t=new Ui,e=0,n=0,r=function(t){return Math.pow(1-t,3)*_[A]+3*Math.pow(1-t,2)*t*k[A]+3*(1-t)*Math.pow(t,2)*S[A]+Math.pow(t,3)*C[A]},i=this.commands,o=Array.isArray(i),a=0
for(i=o?i:Y(i);;){var s
if(o){if(a>=i.length)break
s=i[a++]}else{if((a=i.next()).done)break
s=a.value}var u=s
switch(u.command){case"moveTo":case"lineTo":var l=u.args,c=l[0],f=l[1]
t.addPoint(c,f),e=c,n=f
break
case"quadraticCurveTo":case"bezierCurveTo":if("quadraticCurveTo"===u.command)var h=u.args,p=h[0],d=h[1],g=h[2],y=h[3],v=e+2/3*(p-e),b=n+2/3*(d-n),m=g+2/3*(p-g),w=y+2/3*(d-y)
else{var x=u.args
v=x[0],b=x[1],m=x[2],w=x[3],g=x[4],y=x[5]}t.addPoint(g,y)
for(var _=[e,n],k=[v,b],S=[m,w],C=[g,y],A=0;A<=1;A++){var P=6*_[A]-12*k[A]+6*S[A],E=-3*_[A]+9*k[A]-9*S[A]+3*C[A]
if(u=3*k[A]-3*_[A],0!==E){var I=Math.pow(P,2)-4*u*E
if(!(I<0)){var T=(-P+Math.sqrt(I))/(2*E)
0<T&&T<1&&(0===A?t.addPoint(r(T),t.maxY):1===A&&t.addPoint(t.maxX,r(T)))
var O=(-P-Math.sqrt(I))/(2*E)
0<O&&O<1&&(0===A?t.addPoint(r(O),t.maxY):1===A&&t.addPoint(t.maxX,r(O)))}}else{if(0===P)continue
var B=-u/P
0<B&&B<1&&(0===A?t.addPoint(r(B),t.maxY):1===A&&t.addPoint(t.maxX,r(B)))}}e=g,n=y}}return this._bbox=X(t)}}]),t}(),Wa=["moveTo","lineTo","quadraticCurveTo","bezierCurveTo","closePath"],ja=0;ja<Wa.length;ja++)!function(){var t=Wa[ja]
Ua.prototype[t]=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r]
return this._bbox=this._cbox=null,this.commands.push({command:t,args:n}),this}}()
var Ga,Va,Ha=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"],qa=(W((Ga=function(){function t(e,n,r){$(this,t),this.id=e,this.codePoints=n,this._font=r,this.isMark=this.codePoints.every(ft.isMark),this.isLigature=this.codePoints.length>1}return t.prototype._getPath=function(){return new Ua},t.prototype._getCBox=function(){return this.path.cbox},t.prototype._getBBox=function(){return this.path.bbox},t.prototype._getTableMetrics=function(t){if(this.id<t.metrics.length)return t.metrics.get(this.id)
var e=t.metrics.get(t.metrics.length-1)
return{advance:e?e.advance:0,bearing:t.bearings.get(this.id-t.metrics.length)||0}},t.prototype._getMetrics=function(t){if(this._metrics)return this._metrics
var e=this._getTableMetrics(this._font.hmtx),n=e.advance,r=e.bearing
if(this._font.vmtx)var i=this._getTableMetrics(this._font.vmtx),o=i.advance,a=i.bearing
else{var s
if(void 0!==t&&null!==t||(t=this.cbox),(s=this._font["OS/2"])&&s.version>0)o=Math.abs(s.typoAscender-s.typoDescender),a=s.typoAscender-t.maxY
else{var u=this._font.hhea
o=Math.abs(u.ascent-u.descent),a=u.ascent-t.maxY}}return this._font._variationProcessor&&this._font.HVAR&&(n+=this._font._variationProcessor.getAdvanceAdjustment(this.id,this._font.HVAR)),this._metrics={advanceWidth:n,advanceHeight:o,leftBearing:r,topBearing:a}},t.prototype.getScaledPath=function(t){var e=1/this._font.unitsPerEm*t
return this.path.scale(e)},t.prototype._getName=function(){var t=this._font.post
if(!t)return null
switch(t.version){case 1:return Ha[this.id]
case 2:var e=t.glyphNameIndex[this.id]
return e<Ha.length?Ha[e]:t.names[e-Ha.length]
case 2.5:return Ha[this.id+t.offsets[this.id]]
case 4:return String.fromCharCode(t.map[this.id])}},t.prototype.render=function(t,e){t.save()
var n=1/this._font.head.unitsPerEm*e
t.scale(n,n),this.path.toFunction()(t),t.fill(),t.restore()},tt(t,[{key:"cbox",get:function(){return this._getCBox()}},{key:"bbox",get:function(){return this._getBBox()}},{key:"path",get:function(){return this._getPath()}},{key:"advanceWidth",get:function(){return this._getMetrics().advanceWidth}},{key:"advanceHeight",get:function(){return this._getMetrics().advanceHeight}},{key:"ligatureCaretPositions",get:function(){}},{key:"name",get:function(){return this._getName()}}]),t}()).prototype,"cbox",[o],Z(Ga.prototype,"cbox"),Ga.prototype),W(Ga.prototype,"bbox",[o],Z(Ga.prototype,"bbox"),Ga.prototype),W(Ga.prototype,"path",[o],Z(Ga.prototype,"path"),Ga.prototype),W(Ga.prototype,"advanceWidth",[o],Z(Ga.prototype,"advanceWidth"),Ga.prototype),W(Ga.prototype,"advanceHeight",[o],Z(Ga.prototype,"advanceHeight"),Ga.prototype),W(Ga.prototype,"name",[o],Z(Ga.prototype,"name"),Ga.prototype),Ga),Za=new q.Struct({numberOfContours:q.int16,xMin:q.int16,yMin:q.int16,xMax:q.int16,yMax:q.int16}),Ya=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
$(this,t),this.onCurve=e,this.endContour=n,this.x=r,this.y=i}return t.prototype.copy=function(){return new t(this.onCurve,this.endContour,this.x,this.y)},t}(),Xa=function t(e,n,r){$(this,t),this.glyphID=e,this.dx=n,this.dy=r,this.pos=0,this.scaleX=this.scaleY=1,this.scale01=this.scale10=0},Ka=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype._getCBox=function(t){if(this._font._variationProcessor&&!t)return this.path.cbox
var e=this._font._getTableStream("glyf")
e.pos+=this._font.loca.offsets[this.id]
var n=Za.decode(e),r=new Ui(n.xMin,n.yMin,n.xMax,n.yMax)
return X(r)},e.prototype._parseGlyphCoord=function(t,e,n,r){if(n){var i=t.readUInt8()
r||(i=-i),i+=e}else if(r)i=e
else i=e+t.readInt16BE()
return i},e.prototype._decode=function(){var t=this._font.loca.offsets[this.id]
if(t===this._font.loca.offsets[this.id+1])return null
var e=this._font._getTableStream("glyf")
e.pos+=t
var n=e.pos,r=Za.decode(e)
return r.numberOfContours>0?this._decodeSimple(r,e):r.numberOfContours<0&&this._decodeComposite(r,e,n),r},e.prototype._decodeSimple=function(t,e){t.points=[]
var n=new q.Array(q.uint16,t.numberOfContours).decode(e)
t.instructions=new q.Array(q.uint8,q.uint16).decode(e)
for(var r=[],i=n[n.length-1]+1;r.length<i;){var o=e.readUInt8()
if(r.push(o),8&o)for(var a=e.readUInt8(),s=0;s<a;s++)r.push(o)}for(var u=0;u<r.length;u++){o=r[u]
var l=new Ya(!!(1&o),n.indexOf(u)>=0,0,0)
t.points.push(l)}var c=0
for(u=0;u<r.length;u++){o=r[u]
t.points[u].x=c=this._parseGlyphCoord(e,c,2&o,16&o)}var f=0
for(u=0;u<r.length;u++){o=r[u]
t.points[u].y=f=this._parseGlyphCoord(e,f,4&o,32&o)}if(this._font._variationProcessor){var h=t.points.slice()
h.push.apply(h,this._getPhantomPoints(t)),this._font._variationProcessor.transformPoints(this.id,h),t.phantomPoints=h.slice(-4)}},e.prototype._decodeComposite=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
t.components=[]
for(var r=!1,i=32;32&i;){i=e.readUInt16BE()
var o=e.pos-n,a=e.readUInt16BE()
if(r||(r=0!=(256&i)),1&i)var s=e.readInt16BE(),u=e.readInt16BE()
else s=e.readInt8(),u=e.readInt8();(f=new Xa(a,s,u)).pos=o,8&i?f.scaleX=f.scaleY=(e.readUInt8()<<24|e.readUInt8()<<16)/1073741824:64&i?(f.scaleX=(e.readUInt8()<<24|e.readUInt8()<<16)/1073741824,f.scaleY=(e.readUInt8()<<24|e.readUInt8()<<16)/1073741824):128&i&&(f.scaleX=(e.readUInt8()<<24|e.readUInt8()<<16)/1073741824,f.scale01=(e.readUInt8()<<24|e.readUInt8()<<16)/1073741824,f.scale10=(e.readUInt8()<<24|e.readUInt8()<<16)/1073741824,f.scaleY=(e.readUInt8()<<24|e.readUInt8()<<16)/1073741824),t.components.push(f)}if(this._font._variationProcessor){for(var l=[],c=0;c<t.components.length;c++){var f=t.components[c]
l.push(new Ya(!0,!0,f.dx,f.dy))}l.push.apply(l,this._getPhantomPoints(t)),this._font._variationProcessor.transformPoints(this.id,l),t.phantomPoints=l.splice(-4,4)
for(var h=0;h<l.length;h++){var p=l[h]
t.components[h].dx=p.x,t.components[h].dy=p.y}}return r},e.prototype._getPhantomPoints=function(t){var e=this._getCBox(!0)
null==this._metrics&&(this._metrics=qa.prototype._getMetrics.call(this,e))
var n=this._metrics,r=n.advanceWidth,i=n.advanceHeight,o=n.leftBearing,a=n.topBearing
return[new Ya(!1,!0,t.xMin-o,0),new Ya(!1,!0,t.xMin-o+r,0),new Ya(!1,!0,0,t.yMax+a),new Ya(!1,!0,0,t.yMax+a+i)]},e.prototype._getContours=function(){var t=this._decode()
if(!t)return[]
if(t.numberOfContours<0){var e=[],n=t.components,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=(t=this._font.getGlyph(a.glyphID)._decode()).points,u=Array.isArray(s),l=0
for(s=u?s:Y(s);;){var c
if(u){if(l>=s.length)break
c=s[l++]}else{if((l=s.next()).done)break
c=l.value}var f=c
e.push(new Ya(f.onCurve,f.endContour,f.x+a.dx,f.y+a.dy))}}}else e=t.points||[]
t.phantomPoints&&!this._font.directory.tables.HVAR&&(this._metrics.advanceWidth=t.phantomPoints[1].x-t.phantomPoints[0].x,this._metrics.advanceHeight=t.phantomPoints[3].y-t.phantomPoints[2].y,this._metrics.leftBearing=t.xMin-t.phantomPoints[0].x,this._metrics.topBearing=t.phantomPoints[2].y-t.yMax)
for(var h=[],p=[],d=0;d<e.length;d++){var g=e[d]
p.push(g),g.endContour&&(h.push(p),p=[])}return h},e.prototype._getMetrics=function(){if(this._metrics)return this._metrics
var e=this._getCBox(!0)
return t.prototype._getMetrics.call(this,e),this._font._variationProcessor&&!this._font.HVAR&&this.path,this._metrics},e.prototype._getPath=function(){for(var t=this._getContours(),e=new Ua,n=0;n<t.length;n++){var r=t[n],i=r[0],o=r[r.length-1],a=0
if(i.onCurve){var s=null
a=1}else s=i=o.onCurve?o:new Ya(!1,!1,(i.x+o.x)/2,(i.y+o.y)/2)
e.moveTo(i.x,i.y)
for(var u=a;u<r.length;u++){var l=r[u],c=0===u?i:r[u-1]
if(c.onCurve&&l.onCurve)e.lineTo(l.x,l.y)
else if(c.onCurve&&!l.onCurve)s=l
else if(c.onCurve||l.onCurve){if(c.onCurve||!l.onCurve)throw new Error("Unknown TTF path state")
e.quadraticCurveTo(s.x,s.y,l.x,l.y)
s=null}else{var f=(c.x+l.x)/2,h=(c.y+l.y)/2
e.quadraticCurveTo(c.x,c.y,f,h)
s=l}}s&&e.quadraticCurveTo(s.x,s.y,i.x,i.y),e.closePath()}return e},e}(qa),Ja=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype._getName=function(){return this._font.CFF2?t.prototype._getName.call(this):this._font["CFF "].getGlyphName(this.id)},e.prototype.bias=function(t){return t.length<1240?107:t.length<33900?1131:32768},e.prototype._getPath=function(){function t(){null==c&&(c=u.shift()+m.nominalWidthX)}function e(){return u.length%2!=0&&t(),f+=u.length>>1,u.length=0}function n(t,e){y&&s.closePath(),s.moveTo(t,e),y=!0}var r=this._font.stream,i=(r.pos,this._font.CFF2||this._font["CFF "]),o=i.topDict.CharStrings[this.id],a=o.offset+o.length
r.pos=o.offset
var s=new Ua,u=[],l=[],c=null,f=0,h=0,p=0,d=void 0,g=void 0,y=!1
this._usedGsubrs=d={},this._usedSubrs=g={}
var v=i.globalSubrIndex||[],b=this.bias(v),m=i.privateDictForGlyph(this.id),w=m.Subrs||[],x=this.bias(w),_=i.topDict.vstore&&i.topDict.vstore.itemVariationStore,k=m.vsindex,S=this._font._variationProcessor
return function o(){for(;r.pos<a;){var c=r.readUInt8()
if(c<32)switch(c){case 1:case 3:case 18:case 23:e()
break
case 4:u.length>1&&t(),p+=u.shift(),n(h,p)
break
case 5:for(;u.length>=2;)h+=u.shift(),p+=u.shift(),s.lineTo(h,p)
break
case 6:case 7:for(var m=6===c;u.length>=1;)m?h+=u.shift():p+=u.shift(),s.lineTo(h,p),m=!m
break
case 8:for(;u.length>0;){var C=h+u.shift(),A=p+u.shift(),P=C+u.shift(),E=A+u.shift()
h=P+u.shift(),p=E+u.shift(),s.bezierCurveTo(C,A,P,E,h,p)}break
case 10:var I=u.pop()+x,T=w[I]
if(T){g[I]=!0
var O=r.pos,B=a
r.pos=T.offset,a=T.offset+T.length,o(),r.pos=O,a=B}break
case 11:if(i.version>=2)break
return
case 14:if(i.version>=2)break
u.length>0&&t(),y&&(s.closePath(),y=!1)
break
case 15:if(i.version<2)throw new Error("vsindex operator not supported in CFF v1")
k=u.pop()
break
case 16:if(i.version<2)throw new Error("blend operator not supported in CFF v1")
if(!S)throw new Error("blend operator in non-variation font")
for(var L=S.getBlendVector(_,k),R=u.pop(),M=R*L.length,F=u.length-M,z=F-R,D=0;D<R;D++){for(var N=u[z+D],U=0;U<L.length;U++)N+=L[U]*u[F++]
u[z+D]=N}for(;M--;)u.pop()
break
case 19:case 20:e(),r.pos+=f+7>>3
break
case 21:u.length>2&&t(),h+=u.shift(),p+=u.shift(),n(h,p)
break
case 22:u.length>1&&t(),n(h+=u.shift(),p)
break
case 24:for(;u.length>=8;){C=h+u.shift(),A=p+u.shift(),P=C+u.shift(),E=A+u.shift()
h=P+u.shift(),p=E+u.shift(),s.bezierCurveTo(C,A,P,E,h,p)}h+=u.shift(),p+=u.shift(),s.lineTo(h,p)
break
case 25:for(;u.length>=8;)h+=u.shift(),p+=u.shift(),s.lineTo(h,p)
C=h+u.shift(),A=p+u.shift(),P=C+u.shift(),E=A+u.shift()
h=P+u.shift(),p=E+u.shift(),s.bezierCurveTo(C,A,P,E,h,p)
break
case 26:for(u.length%2&&(h+=u.shift());u.length>=4;)C=h,A=p+u.shift(),P=C+u.shift(),E=A+u.shift(),h=P,p=E+u.shift(),s.bezierCurveTo(C,A,P,E,h,p)
break
case 27:for(u.length%2&&(p+=u.shift());u.length>=4;)C=h+u.shift(),A=p,P=C+u.shift(),E=A+u.shift(),h=P+u.shift(),p=E,s.bezierCurveTo(C,A,P,E,h,p)
break
case 28:u.push(r.readInt16BE())
break
case 29:if(I=u.pop()+b,T=v[I]){d[I]=!0
O=r.pos,B=a
r.pos=T.offset,a=T.offset+T.length,o(),r.pos=O,a=B}break
case 30:case 31:for(m=31===c;u.length>=4;)m?(C=h+u.shift(),A=p,P=C+u.shift(),E=A+u.shift(),p=E+u.shift(),h=P+(1===u.length?u.shift():0)):(C=h,A=p+u.shift(),P=C+u.shift(),E=A+u.shift(),h=P+u.shift(),p=E+(1===u.length?u.shift():0)),s.bezierCurveTo(C,A,P,E,h,p),m=!m
break
case 12:switch(c=r.readUInt8()){case 3:var W=u.pop(),j=u.pop()
u.push(W&&j?1:0)
break
case 4:W=u.pop(),j=u.pop(),u.push(W||j?1:0)
break
case 5:W=u.pop(),u.push(W?0:1)
break
case 9:W=u.pop(),u.push(Math.abs(W))
break
case 10:W=u.pop(),j=u.pop(),u.push(W+j)
break
case 11:W=u.pop(),j=u.pop(),u.push(W-j)
break
case 12:W=u.pop(),j=u.pop(),u.push(W/j)
break
case 14:W=u.pop(),u.push(-W)
break
case 15:W=u.pop(),j=u.pop(),u.push(W===j?1:0)
break
case 18:u.pop()
break
case 20:var G=u.pop(),V=u.pop()
l[V]=G
break
case 21:V=u.pop(),u.push(l[V]||0)
break
case 22:var H=u.pop(),q=u.pop(),Z=u.pop(),Y=u.pop()
u.push(Z<=Y?H:q)
break
case 23:u.push(Math.random())
break
case 24:W=u.pop(),j=u.pop(),u.push(W*j)
break
case 26:W=u.pop(),u.push(Math.sqrt(W))
break
case 27:W=u.pop(),u.push(W,W)
break
case 28:W=u.pop(),j=u.pop(),u.push(j,W)
break
case 29:(V=u.pop())<0?V=0:V>u.length-1&&(V=u.length-1),u.push(u[V])
break
case 30:var X=u.pop(),K=u.pop()
if(K>=0)for(;K>0;){for(var J=u[X-1],Q=X-2;Q>=0;Q--)u[Q+1]=u[Q]
u[0]=J,K--}else for(;K<0;){J=u[0]
for(var $=0;$<=X;$++)u[$]=u[$+1]
u[X-1]=J,K++}break
case 34:C=h+u.shift(),A=p,P=C+u.shift(),E=A+u.shift()
var tt=P+u.shift(),et=E,nt=tt+u.shift(),rt=et,it=nt+u.shift(),ot=rt,at=it+u.shift(),st=ot
h=at,p=st,s.bezierCurveTo(C,A,P,E,tt,et),s.bezierCurveTo(nt,rt,it,ot,at,st)
break
case 35:for(var ut=[],lt=0;lt<=5;lt++)h+=u.shift(),p+=u.shift(),ut.push(h,p)
s.bezierCurveTo.apply(s,ut.slice(0,6)),s.bezierCurveTo.apply(s,ut.slice(6)),u.shift()
break
case 36:C=h+u.shift(),A=p+u.shift(),P=C+u.shift(),rt=et=E=A+u.shift(),it=(nt=(tt=P+u.shift())+u.shift())+u.shift(),ot=rt+u.shift(),at=it+u.shift(),h=at,p=st=ot,s.bezierCurveTo(C,A,P,E,tt,et),s.bezierCurveTo(nt,rt,it,ot,at,st)
break
case 37:var ct=h,ft=p
ut=[]
for(var ht=0;ht<=4;ht++)h+=u.shift(),p+=u.shift(),ut.push(h,p)
Math.abs(h-ct)>Math.abs(p-ft)?(h+=u.shift(),p=ft):(h=ct,p+=u.shift()),ut.push(h,p),s.bezierCurveTo.apply(s,ut.slice(0,6)),s.bezierCurveTo.apply(s,ut.slice(6))
break
default:throw new Error("Unknown op: 12 "+c)}break
default:throw new Error("Unknown op: "+c)}else if(c<247)u.push(c-139)
else if(c<251){var pt=r.readUInt8()
u.push(256*(c-247)+pt+108)}else if(c<255){pt=r.readUInt8()
u.push(256*-(c-251)-pt-108)}else u.push(r.readInt32BE()/65536)}}(),y&&s.closePath(),s},e}(qa),Qa=new q.Struct({originX:q.uint16,originY:q.uint16,type:new q.String(4),data:new q.Buffer(function(t){return t.parent.buflen-t._currentOffset})}),$a=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype.getImageForSize=function(t){for(var e=0;e<this._font.sbix.imageTables.length;e++){var n=this._font.sbix.imageTables[e]
if(n.ppem>=t)break}var r=n.imageOffsets,i=r[this.id],o=r[this.id+1]
return i===o?null:(this._font.stream.pos=i,Qa.decode(this._font.stream,{buflen:o-i}))},e.prototype.render=function(e,n){var r=this.getImageForSize(n)
if(null!=r){var i=n/this._font.unitsPerEm
e.image(r.data,{height:n,x:r.originX,y:(this.bbox.minY-r.originY)*i})}this._font.sbix.flags.renderOutlines&&t.prototype.render.call(this,e,n)},e}(Ka),ts=function t(e,n){$(this,t),this.glyph=e,this.color=n},es=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype._getBBox=function(){for(var t=new Ui,e=0;e<this.layers.length;e++){var n=this.layers[e].glyph.bbox
t.addPoint(n.minX,n.minY),t.addPoint(n.maxX,n.maxY)}return t},e.prototype.render=function(t,e){var n=this.layers,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=a.glyph,u=a.color
t.fillColor([u.red,u.green,u.blue],u.alpha/255*100),s.render(t,e)}},tt(e,[{key:"layers",get:function(){for(var t=this._font.CPAL,e=this._font.COLR,n=0,r=e.baseGlyphRecord.length-1;n<=r;){var i=n+r>>1,o=e.baseGlyphRecord[i]
if(this.id<o.gid)r=i-1
else{if(!(this.id>o.gid)){var a=o
break}n=i+1}}if(null==a){var s=this._font._getBaseGlyph(this.id)
return[new ts(s,c={red:0,green:0,blue:0,alpha:255})]}for(var u=[],l=a.firstLayerIndex;l<a.firstLayerIndex+a.numLayers;l++){o=e.layerRecords[l]
var c=t.colorRecords[o.paletteIndex]
s=this._font._getBaseGlyph(o.gid)
u.push(new ts(s,c))}return u}}]),e}(qa),ns=function(){function t(e,n){$(this,t),this.font=e,this.normalizedCoords=this.normalizeCoords(n),this.blendVectors=new et}return t.prototype.normalizeCoords=function(t){for(var e=[],n=0;n<this.font.fvar.axis.length;n++){var r=this.font.fvar.axis[n]
t[n]<r.defaultValue?e.push((t[n]-r.defaultValue+dt)/(r.defaultValue-r.minValue+dt)):e.push((t[n]-r.defaultValue+dt)/(r.maxValue-r.defaultValue+dt))}if(this.font.avar)for(n=0;n<this.font.avar.segment.length;n++)for(var i=this.font.avar.segment[n],o=0;o<i.correspondence.length;o++){var a=i.correspondence[o]
if(o>=1&&e[n]<a.fromCoord){var s=i.correspondence[o-1]
e[n]=((e[n]-s.fromCoord)*(a.toCoord-s.toCoord)+dt)/(a.fromCoord-s.fromCoord+dt)+s.toCoord
break}}return e},t.prototype.transformPoints=function(t,e){if(this.font.fvar&&this.font.gvar){var n=this.font.gvar
if(!(t>=n.glyphCount)){var r=n.offsets[t]
if(r!==n.offsets[t+1]){var i=this.font.stream
if(i.pos=r,!(i.pos>=i.length)){var o=i.readUInt16BE(),a=r+i.readUInt16BE()
if(32768&o){var s=i.pos
i.pos=a
var u=this.decodePoints()
a=i.pos,i.pos=s}var l=e.map(function(t){return t.copy()})
o&=4095
for(var c=0;c<o;c++){var f=i.readUInt16BE(),h=i.readUInt16BE()
if(32768&h)for(var p=[],d=0;d<n.axisCount;d++)p.push(i.readInt16BE()/16384)
else{if((4095&h)>=n.globalCoordCount)throw new Error("Invalid gvar table")
p=n.globalCoords[4095&h]}if(16384&h){for(var g=[],y=0;y<n.axisCount;y++)g.push(i.readInt16BE()/16384)
for(var v=[],b=0;b<n.axisCount;b++)v.push(i.readInt16BE()/16384)}var m=this.tupleFactor(h,p,g,v)
if(0!==m){s=i.pos
if(i.pos=a,8192&h)var w=this.decodePoints()
else w=u
var x=0===w.length?e.length:w.length,_=this.decodeDeltas(x),k=this.decodeDeltas(x)
if(0===w.length)for(var S=0;S<e.length;S++){var C=e[S]
C.x+=Math.round(_[S]*m),C.y+=Math.round(k[S]*m)}else{for(var A=l.map(function(t){return t.copy()}),P=e.map(function(){return!1}),E=0;E<w.length;E++){var I=w[E]
if(I<e.length){var T=A[I]
P[I]=!0,T.x+=Math.round(_[E]*m),T.y+=Math.round(k[E]*m)}}this.interpolateMissingDeltas(A,l,P)
for(var O=0;O<e.length;O++){var B=A[O].x-l[O].x,L=A[O].y-l[O].y
e[O].x+=B,e[O].y+=L}}a+=f,i.pos=s}else a+=f}}}}}},t.prototype.decodePoints=function(){var t=this.font.stream,e=t.readUInt8()
128&e&&(e=(127&e)<<8|t.readUInt8())
for(var n=new Uint16Array(e),r=0,i=0;r<e;)for(var o=t.readUInt8(),a=1+(127&o),s=128&o?t.readUInt16:t.readUInt8,u=0;u<a&&r<e;u++)i+=s.call(t),n[r++]=i
return n},t.prototype.decodeDeltas=function(t){for(var e=this.font.stream,n=0,r=new Int16Array(t);n<t;){var i=e.readUInt8(),o=1+(63&i)
if(128&i)n+=o
else for(var a=64&i?e.readInt16BE:e.readInt8,s=0;s<o&&n<t;s++)r[n++]=a.call(e)}return r},t.prototype.tupleFactor=function(t,e,n,r){for(var i=this.normalizedCoords,o=this.font.gvar,a=1,s=0;s<o.axisCount;s++)if(0!==e[s]){if(0===i[s])return 0
if(0==(16384&t)){if(i[s]<Math.min(0,e[s])||i[s]>Math.max(0,e[s]))return 0
a=(a*i[s]+dt)/(e[s]+dt)}else{if(i[s]<n[s]||i[s]>r[s])return 0
a=i[s]<e[s]?a*(i[s]-n[s]+dt)/(e[s]-n[s]+dt):a*(r[s]-i[s]+dt)/(r[s]-e[s]+dt)}}return a},t.prototype.interpolateMissingDeltas=function(t,e,n){if(0!==t.length)for(var r=0;r<t.length;){for(var i=r,o=r,a=t[o];!a.endContour;)a=t[++o]
for(;r<=o&&!n[r];)r++
if(!(r>o)){var s=r,u=r
for(r++;r<=o;)n[r]&&(this.deltaInterpolate(u+1,r-1,u,r,e,t),u=r),r++
u===s?this.deltaShift(i,o,u,e,t):(this.deltaInterpolate(u+1,o,u,s,e,t),s>0&&this.deltaInterpolate(i,s-1,u,s,e,t)),r=o+1}}},t.prototype.deltaInterpolate=function(t,e,n,r,i,o){if(!(t>e))for(var a=["x","y"],s=0;s<a.length;s++){var u=a[s]
if(i[n][u]>i[r][u]){var l=n
n=r,r=l}var c=i[n][u],f=i[r][u],h=o[n][u],p=o[r][u]
if(c!==f||h===p)for(var d=c===f?0:(p-h)/(f-c),g=t;g<=e;g++){var y=i[g][u]
y<=c?y+=h-c:y>=f?y+=p-f:y=h+(y-c)*d,o[g][u]=y}}},t.prototype.deltaShift=function(t,e,n,r,i){var o=i[n].x-r[n].x,a=i[n].y-r[n].y
if(0!==o||0!==a)for(var s=t;s<=e;s++)s!==n&&(i[s].x+=o,i[s].y+=a)},t.prototype.getAdvanceAdjustment=function(t,e){var n=void 0,r=void 0
if(e.advanceWidthMapping){var i=t
i>=e.advanceWidthMapping.mapCount&&(i=e.advanceWidthMapping.mapCount-1)
var o=(e.advanceWidthMapping.entryFormat,e.advanceWidthMapping.mapData[i])
n=o.outerIndex,r=o.innerIndex}else n=0,r=t
return this.getMetricDelta(e.itemVariationStore,n,r)},t.prototype.getMetricDelta=function(t,e,n){for(var r=t.itemVariationData[e],i=r.deltaSets[n],o=this.getBlendVector(t,e),a=0,s=0;s<r.regionIndexCount;s++)a+=i.deltas[s]*o[s]
return a},t.prototype.getBlendVector=function(t,e){var n=t.itemVariationData[e]
if(this.blendVectors.has(n))return this.blendVectors.get(n)
for(var r=this.normalizedCoords,i=[],o=0;o<n.regionIndexCount;o++){for(var a=1,s=n.regionIndexes[o],u=t.variationRegionList.variationRegions[s],l=0;l<u.length;l++){var c=u[l]
a*=c.startCoord>c.peakCoord||c.peakCoord>c.endCoord?1:c.startCoord<0&&c.endCoord>0&&0!==c.peakCoord?1:0===c.peakCoord?1:r[l]<c.startCoord||r[l]>c.endCoord?0:r[l]===c.peakCoord?1:r[l]<c.peakCoord?(r[l]-c.startCoord+dt)/(c.peakCoord-c.startCoord+dt):(c.endCoord-r[l]+dt)/(c.endCoord-c.peakCoord+dt)}i[o]=a}return this.blendVectors.set(n,i),i},t}(),rs=function(){function t(e){$(this,t),this.font=e,this.glyphs=[],this.mapping={},this.includeGlyph(0)}return t.prototype.includeGlyph=function(t){return"object"===(void 0===t?"undefined":J(t))&&(t=t.id),null==this.mapping[t]&&(this.glyphs.push(t),this.mapping[t]=this.glyphs.length-1),this.mapping[t]},t.prototype.encodeStream=function(){var t=this,e=new q.EncodeStream
return r.nextTick(function(){return t.encode(e),e.end()}),e},t}(),is=function(){function t(){$(this,t)}return t.size=function(t){return t>=0&&t<=255?1:2},t.encode=function(t,e){e>=0&&e<=255?t.writeUInt8(e):t.writeInt16BE(e)},t}(),os=new q.Struct({numberOfContours:q.int16,xMin:q.int16,yMin:q.int16,xMax:q.int16,yMax:q.int16,endPtsOfContours:new q.Array(q.uint16,"numberOfContours"),instructions:new q.Array(q.uint8,q.uint16),flags:new q.Array(q.uint8,0),xPoints:new q.Array(is,0),yPoints:new q.Array(is,0)}),as=function(){function t(){$(this,t)}return t.prototype.encodeSimple=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],r=[],i=[],o=[],a=0,s=0,u=0,l=0,c=0,f=0;f<t.commands.length;f++){for(var h=t.commands[f],p=0;p<h.args.length;p+=2){var d=h.args[p],g=h.args[p+1],y=0
if("quadraticCurveTo"===h.command&&2===p){var v=t.commands[f+1]
if(v&&"quadraticCurveTo"===v.command){var b=(s+v.args[0])/2,m=(u+v.args[1])/2
if(d===b&&g===m)continue}}"quadraticCurveTo"===h.command&&0===p||(y|=1),y=this._encodePoint(d,s,r,y,2,16),(y=this._encodePoint(g,u,i,y,4,32))===l&&a<255?(o[o.length-1]|=8,a++):(a>0&&(o.push(a),a=0),o.push(y),l=y),s=d,u=g,c++}"closePath"===h.command&&n.push(c-1)}t.commands.length>1&&"closePath"!==t.commands[t.commands.length-1].command&&n.push(c-1)
var w=t.bbox,x={numberOfContours:n.length,xMin:w.minX,yMin:w.minY,xMax:w.maxX,yMax:w.maxY,endPtsOfContours:n,instructions:e,flags:o,xPoints:r,yPoints:i},_=os.size(x),k=4-_%4,S=new q.EncodeStream(_+k)
return os.encode(S,x),0!==k&&S.fill(0,k),S.buffer},t.prototype._encodePoint=function(t,e,n,r,i,o){var a=t-e
return t===e?r|=o:(-255<=a&&a<=255&&(r|=i,a<0?a=-a:r|=o),n.push(a)),r},t}(),ss=function(t){function n(e){$(this,n)
var r=nt(this,t.call(this,e))
return r.glyphEncoder=new as,r}return rt(n,t),n.prototype._addGlyph=function(t){var n=this.font.getGlyph(t),r=n._decode(),i=this.font.loca.offsets[t],o=this.font.loca.offsets[t+1],a=this.font._getTableStream("glyf")
a.pos+=i
var s=a.readBuffer(o-i)
if(r&&r.numberOfContours<0){s=new e(s)
var u=r.components,l=Array.isArray(u),c=0
for(u=l?u:Y(u);;){var f
if(l){if(c>=u.length)break
f=u[c++]}else{if((c=u.next()).done)break
f=c.value}var h=f
t=this.includeGlyph(h.glyphID),s.writeUInt16BE(t,h.pos)}}else r&&this.font._variationProcessor&&(s=this.glyphEncoder.encodeSimple(n.path,r.instructions))
return this.glyf.push(s),this.loca.offsets.push(this.offset),this.hmtx.metrics.push({advance:n.advanceWidth,bearing:n._getMetrics().leftBearing}),this.offset+=s.length,this.glyf.length-1},n.prototype.encode=function(t){this.glyf=[],this.offset=0,this.loca={offsets:[]},this.hmtx={metrics:[],bearings:[]}
for(var e=0;e<this.glyphs.length;)this._addGlyph(this.glyphs[e++])
var n=gt(this.font.maxp)
n.numGlyphs=this.glyf.length,this.loca.offsets.push(this.offset),Bi.loca.preEncode.call(this.loca)
var r=gt(this.font.head)
r.indexToLocFormat=this.loca.version
var i=gt(this.font.hhea)
i.numberOfMetrics=this.hmtx.metrics.length,Mi.encode(t,{tables:{head:r,hhea:i,loca:this.loca,maxp:n,"cvt ":this.font["cvt "],prep:this.font.prep,glyf:this.glyf,hmtx:this.hmtx,fpgm:this.font.fpgm}})},n}(rs),us=function(t){function n(e){$(this,n)
var r=nt(this,t.call(this,e))
if(r.cff=r.font["CFF "],!r.cff)throw new Error("Not a CFF Font")
return r}return rt(n,t),n.prototype.subsetCharstrings=function(){this.charstrings=[]
var t={},e=this.glyphs,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i
this.charstrings.push(this.cff.getCharString(o))
var a=this.font.getGlyph(o)
a.path
for(var s in a._usedGsubrs)t[s]=!0}this.gsubrs=this.subsetSubrs(this.cff.globalSubrIndex,t)},n.prototype.subsetSubrs=function(t,n){for(var r=[],i=0;i<t.length;i++){var o=t[i]
n[i]?(this.cff.stream.pos=o.offset,r.push(this.cff.stream.readBuffer(o.length))):r.push(new e([11]))}return r},n.prototype.subsetFontdict=function(t){t.FDArray=[],t.FDSelect={version:0,fds:[]}
var e={},n=[],r=this.glyphs,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a,u=this.cff.fdForGlyph(s)
if(null!=u){e[u]||(t.FDArray.push(st({},this.cff.topDict.FDArray[u])),n.push({})),e[u]=!0,t.FDSelect.fds.push(t.FDArray.length-1)
var l=this.font.getGlyph(s)
l.path
for(var c in l._usedSubrs)n[n.length-1][c]=!0}}for(var f=0;f<t.FDArray.length;f++){var h=t.FDArray[f]
delete h.FontName,h.Private&&h.Private.Subrs&&(h.Private=st({},h.Private),h.Private.Subrs=this.subsetSubrs(h.Private.Subrs,n[f]))}},n.prototype.createCIDFontdict=function(t){var e={},n=this.glyphs,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=this.font.getGlyph(a)
s.path
for(var u in s._usedSubrs)e[u]=!0}var l=st({},this.cff.topDict.Private)
return l.Subrs=this.subsetSubrs(this.cff.topDict.Private.Subrs,e),t.FDArray=[{Private:l}],t.FDSelect={version:3,nRanges:1,ranges:[{first:0,fd:0}],sentinel:this.charstrings.length}},n.prototype.addString=function(t){return t?(this.strings||(this.strings=[]),this.strings.push(t),oe.length+this.strings.length-1):null},n.prototype.encode=function(t){this.subsetCharstrings()
var e={version:this.charstrings.length>255?2:1,ranges:[{first:1,nLeft:this.charstrings.length-2}]},n=st({},this.cff.topDict)
n.Private=null,n.charset=e,n.Encoding=null,n.CharStrings=this.charstrings
for(var r=["version","Notice","Copyright","FullName","FamilyName","Weight","PostScript","BaseFontName","FontName"],i=0;i<r.length;i++){var o=r[i]
n[o]=this.addString(this.cff.string(n[o]))}n.ROS=[this.addString("Adobe"),this.addString("Identity"),0],n.CIDCount=this.charstrings.length,this.cff.isCIDFont?this.subsetFontdict(n):this.createCIDFontdict(n)
var a={version:1,hdrSize:this.cff.hdrSize,offSize:this.cff.length,header:this.cff.header,nameIndex:[this.cff.postscriptName],topDictIndex:[n],stringIndex:this.strings,globalSubrIndex:this.gsubrs}
an.encode(t,a)},n}(rs),ls=(j((Va=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
$(this,t),this.stream=e,this.variationCoords=n,this._directoryPos=this.stream.pos,this._tables={},this._glyphs={},this._decodeDirectory()
for(var r in this.directory.tables){var i=this.directory.tables[r]
Bi[r]&&i.length>0&&Q(this,r,{get:this._getTable.bind(this,i)})}}return t.probe=function(t){var e=t.toString("ascii",0,4)
return"true"===e||"OTTO"===e||e===String.fromCharCode(0,1,0,0)},t.prototype._getTable=function(t){if(!(t.tag in this._tables))try{this._tables[t.tag]=this._decodeTable(t)}catch(t){bt.logErrors}return this._tables[t.tag]},t.prototype._getTableStream=function(t){var e=this.directory.tables[t]
return e?(this.stream.pos=e.offset,this.stream):null},t.prototype._decodeDirectory=function(){return this.directory=Mi.decode(this.stream,{_startOffset:0})},t.prototype._decodeTable=function(t){var e=this.stream.pos,n=this._getTableStream(t.tag),r=Bi[t.tag].decode(n,this,t.length)
return this.stream.pos=e,r},t.prototype.getName=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=this.name.records[t]
return n?n[e]:null},t.prototype.hasGlyphForCodePoint=function(t){return!!this._cmapProcessor.lookup(t)},t.prototype.glyphForCodePoint=function(t){return this.getGlyph(this._cmapProcessor.lookup(t),[t])},t.prototype.glyphsForString=function(t){for(var e=[],n=t.length,r=0,i=-1,o=-1;r<=n;){var a=0,s=0
if(r<n){if(55296<=(a=t.charCodeAt(r++))&&a<=56319&&r<n){var u=t.charCodeAt(r)
56320<=u&&u<=57343&&(r++,a=((1023&a)<<10)+(1023&u)+65536)}s=65024<=a&&a<=65039||917760<=a&&a<=917999?1:0}else r++
0===o&&1===s?e.push(this.getGlyph(this._cmapProcessor.lookup(i,a),[i,a])):0===o&&0===s&&e.push(this.glyphForCodePoint(i)),i=a,o=s}return e},t.prototype.layout=function(t,e,n,r){return this._layoutEngine.layout(t,e,n,r)},t.prototype.stringsForGlyph=function(t){return this._layoutEngine.stringsForGlyph(t)},t.prototype.getAvailableFeatures=function(t,e){return this._layoutEngine.getAvailableFeatures(t,e)},t.prototype._getBaseGlyph=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return this._glyphs[t]||(this.directory.tables.glyf?this._glyphs[t]=new Ka(t,e,this):(this.directory.tables["CFF "]||this.directory.tables.CFF2)&&(this._glyphs[t]=new Ja(t,e,this))),this._glyphs[t]||null},t.prototype.getGlyph=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return this._glyphs[t]||(this.directory.tables.sbix?this._glyphs[t]=new $a(t,e,this):this.directory.tables.COLR&&this.directory.tables.CPAL?this._glyphs[t]=new es(t,e,this):this._getBaseGlyph(t,e)),this._glyphs[t]||null},t.prototype.createSubset=function(){return this.directory.tables["CFF "]?new us(this):new ss(this)},t.prototype.getVariation=function(e){if(!this.directory.tables.fvar||!(this.directory.tables.gvar&&this.directory.tables.glyf||this.directory.tables.CFF2))throw new Error("Variations require a font with the fvar, gvar and glyf, or CFF2 tables.")
if("string"==typeof e&&(e=this.namedVariations[e]),"object"!==(void 0===e?"undefined":J(e)))throw new Error("Variation settings must be either a variation name or settings object.")
var n=this.fvar.axis.map(function(t,n){var r=t.axisTag.trim()
return r in e?Math.max(t.minValue,Math.min(t.maxValue,e[r])):t.defaultValue}),r=new q.DecodeStream(this.stream.buffer)
r.pos=this._directoryPos
var i=new t(r,n)
return i._tables=this._tables,i},t.prototype.getFont=function(t){return this.getVariation(t)},tt(t,[{key:"postscriptName",get:function(){var t=this.name.records.postscriptName
return t[K(t)[0]]}},{key:"fullName",get:function(){return this.getName("fullName")}},{key:"familyName",get:function(){return this.getName("fontFamily")}},{key:"subfamilyName",get:function(){return this.getName("fontSubfamily")}},{key:"copyright",get:function(){return this.getName("copyright")}},{key:"version",get:function(){return this.getName("version")}},{key:"ascent",get:function(){return this.hhea.ascent}},{key:"descent",get:function(){return this.hhea.descent}},{key:"lineGap",get:function(){return this.hhea.lineGap}},{key:"underlinePosition",get:function(){return this.post.underlinePosition}},{key:"underlineThickness",get:function(){return this.post.underlineThickness}},{key:"italicAngle",get:function(){return this.post.italicAngle}},{key:"capHeight",get:function(){var t=this["OS/2"]
return t?t.capHeight:this.ascent}},{key:"xHeight",get:function(){var t=this["OS/2"]
return t?t.xHeight:0}},{key:"numGlyphs",get:function(){return this.maxp.numGlyphs}},{key:"unitsPerEm",get:function(){return this.head.unitsPerEm}},{key:"bbox",get:function(){return X(new Ui(this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax))}},{key:"_cmapProcessor",get:function(){return new zi(this.cmap)}},{key:"characterSet",get:function(){return this._cmapProcessor.getCharacterSet()}},{key:"_layoutEngine",get:function(){return new Da(this)}},{key:"availableFeatures",get:function(){return this._layoutEngine.getAvailableFeatures()}},{key:"variationAxes",get:function(){var t={}
if(!this.fvar)return t
var e=this.fvar.axis,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i
t[o.axisTag.trim()]={name:o.name.en,min:o.minValue,default:o.defaultValue,max:o.maxValue}}return t}},{key:"namedVariations",get:function(){var t={}
if(!this.fvar)return t
var e=this.fvar.instance,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}for(var o=i,a={},s=0;s<this.fvar.axis.length;s++)a[this.fvar.axis[s].axisTag.trim()]=o.coord[s]
t[o.name.en]=a}return t}},{key:"_variationProcessor",get:function(){if(!this.fvar)return null
var t=this.variationCoords
return t||this.CFF2?(t||(t=this.fvar.axis.map(function(t){return t.defaultValue})),new ns(this,t)):null}}]),t}()).prototype,"bbox",[o],Z(Va.prototype,"bbox"),Va.prototype),j(Va.prototype,"_cmapProcessor",[o],Z(Va.prototype,"_cmapProcessor"),Va.prototype),j(Va.prototype,"characterSet",[o],Z(Va.prototype,"characterSet"),Va.prototype),j(Va.prototype,"_layoutEngine",[o],Z(Va.prototype,"_layoutEngine"),Va.prototype),j(Va.prototype,"variationAxes",[o],Z(Va.prototype,"variationAxes"),Va.prototype),j(Va.prototype,"namedVariations",[o],Z(Va.prototype,"namedVariations"),Va.prototype),j(Va.prototype,"_variationProcessor",[o],Z(Va.prototype,"_variationProcessor"),Va.prototype),Va),cs=new q.Struct({tag:new q.String(4),offset:new q.Pointer(q.uint32,"void",{type:"global"}),compLength:q.uint32,length:q.uint32,origChecksum:q.uint32}),fs=new q.Struct({tag:new q.String(4),flavor:q.uint32,length:q.uint32,numTables:q.uint16,reserved:new q.Reserved(q.uint16),totalSfntSize:q.uint32,majorVersion:q.uint16,minorVersion:q.uint16,metaOffset:q.uint32,metaLength:q.uint32,metaOrigLength:q.uint32,privOffset:q.uint32,privLength:q.uint32,tables:new q.Array(cs,"numTables")})
fs.process=function(){var t={},e=this.tables,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i
t[o.tag]=o}this.tables=t}
var hs=function(t){function n(){return $(this,n),nt(this,t.apply(this,arguments))}return rt(n,t),n.probe=function(t){return"wOFF"===t.toString("ascii",0,4)},n.prototype._decodeDirectory=function(){this.directory=fs.decode(this.stream,{_startOffset:0})},n.prototype._getTableStream=function(t){var n=this.directory.tables[t]
if(n){if(this.stream.pos=n.offset,n.compLength<n.length){this.stream.pos+=2
var r=new e(n.length),i=yt(this.stream.readBuffer(n.compLength-2),r)
return new q.DecodeStream(i)}return this.stream}return null},n}(ls),ps=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype._decode=function(){return this._font._transformedGlyphs[this.id]},e.prototype._getCBox=function(){return this.path.bbox},e}(Ka),ds={decode:function(t){for(var e=0,n=[0,1,2,3,4],r=0;r<n.length;r++){var i=t.readUInt8()
if(3758096384&e)throw new Error("Overflow")
if(e=e<<7|127&i,0==(128&i))return e}throw new Error("Bad base 128 number")}},gs=["cmap","head","hhea","hmtx","maxp","name","OS/2","post","cvt ","fpgm","glyf","loca","prep","CFF ","VORG","EBDT","EBLC","gasp","hdmx","kern","LTSH","PCLT","VDMX","vhea","vmtx","BASE","GDEF","GPOS","GSUB","EBSC","JSTF","MATH","CBDT","CBLC","COLR","CPAL","SVG ","sbix","acnt","avar","bdat","bloc","bsln","cvar","fdsc","feat","fmtx","fvar","gvar","hsty","just","lcar","mort","morx","opbd","prop","trak","Zapf","Silf","Glat","Gloc","Feat","Sill"],ys=new q.Struct({flags:q.uint8,customTag:new q.Optional(new q.String(4),function(t){return 63==(63&t.flags)}),tag:function(t){return t.customTag||gs[63&t.flags]},length:ds,transformVersion:function(t){return t.flags>>>6&3},transformed:function(t){return"glyf"===t.tag||"loca"===t.tag?0===t.transformVersion:0!==t.transformVersion},transformLength:new q.Optional(ds,function(t){return t.transformed})}),vs=new q.Struct({tag:new q.String(4),flavor:q.uint32,length:q.uint32,numTables:q.uint16,reserved:new q.Reserved(q.uint16),totalSfntSize:q.uint32,totalCompressedSize:q.uint32,majorVersion:q.uint16,minorVersion:q.uint16,metaOffset:q.uint32,metaLength:q.uint32,metaOrigLength:q.uint32,privOffset:q.uint32,privLength:q.uint32,tables:new q.Array(ys,"numTables")})
vs.process=function(){for(var t={},e=0;e<this.tables.length;e++){var n=this.tables[e]
t[n.tag]=n}return this.tables=t}
var bs=function(t){function n(){return $(this,n),nt(this,t.apply(this,arguments))}return rt(n,t),n.probe=function(t){return"wOF2"===t.toString("ascii",0,4)},n.prototype._decodeDirectory=function(){this.directory=vs.decode(this.stream),this._dataPos=this.stream.pos},n.prototype._decompress=function(){if(!this._decompressed){this.stream.pos=this._dataPos
var t=this.stream.readBuffer(this.directory.totalCompressedSize),n=0
for(var r in this.directory.tables){var i=this.directory.tables[r]
i.offset=n,n+=null!=i.transformLength?i.transformLength:i.length}var o=vt(t,n)
if(!o)throw new Error("Error decoding compressed data in WOFF2")
this.stream=new q.DecodeStream(new e(o)),this._decompressed=!0}},n.prototype._decodeTable=function(e){return this._decompress(),t.prototype._decodeTable.call(this,e)},n.prototype._getBaseGlyph=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(!this._glyphs[e])return this.directory.tables.glyf&&this.directory.tables.glyf.transformed?(this._transformedGlyphs||this._transformGlyfTable(),this._glyphs[e]=new ps(e,n,this)):t.prototype._getBaseGlyph.call(this,e,n)},n.prototype._transformGlyfTable=function(){this._decompress(),this.stream.pos=this.directory.tables.glyf.offset
for(var t=ws.decode(this.stream),e=[],n=0;n<t.numGlyphs;n++){var r={},i=t.nContours.readInt16BE()
if(r.numberOfContours=i,i>0){for(var o=[],a=0,s=0;s<i;s++){var u=G(t.nPoints)
o.push(u),a+=u}r.points=H(t.flags,t.glyphs,a)
for(var l=0;l<i;l++)r.points[o[l]-1].endContour=!0
G(t.glyphs)}else if(i<0){Ka.prototype._decodeComposite.call({_font:this},r,t.composites)&&G(t.glyphs)}e.push(r)}this._transformedGlyphs=e},n}(ls),ms=function(){function t(e){$(this,t),this.length=e,this._buf=new q.Buffer(e)}return t.prototype.decode=function(t,e){return new q.DecodeStream(this._buf.decode(t,e))},t}(),ws=new q.Struct({version:q.uint32,numGlyphs:q.uint16,indexFormat:q.uint16,nContourStreamSize:q.uint32,nPointsStreamSize:q.uint32,flagStreamSize:q.uint32,glyphStreamSize:q.uint32,compositeStreamSize:q.uint32,bboxStreamSize:q.uint32,instructionStreamSize:q.uint32,nContours:new ms("nContourStreamSize"),nPoints:new ms("nPointsStreamSize"),flags:new ms("flagStreamSize"),glyphs:new ms("glyphStreamSize"),composites:new ms("compositeStreamSize"),bboxes:new ms("bboxStreamSize"),instructions:new ms("instructionStreamSize")}),xs=253,_s=254,ks=255,Ss=253,Cs=new q.VersionedStruct(q.uint32,{65536:{numFonts:q.uint32,offsets:new q.Array(q.uint32,"numFonts")},131072:{numFonts:q.uint32,offsets:new q.Array(q.uint32,"numFonts"),dsigTag:q.uint32,dsigLength:q.uint32,dsigOffset:q.uint32}}),As=function(){function t(e){if($(this,t),this.stream=e,"ttcf"!==e.readString(4))throw new Error("Not a TrueType collection")
this.header=Cs.decode(e)}return t.probe=function(t){return"ttcf"===t.toString("ascii",0,4)},t.prototype.getFont=function(t){var e=this.header.offsets,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i,a=new q.DecodeStream(this.stream.buffer)
a.pos=o
var s=new ls(a)
if(s.postscriptName===t)return s}return null},tt(t,[{key:"fonts",get:function(){var t=[],e=this.header.offsets,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i,a=new q.DecodeStream(this.stream.buffer)
a.pos=o,t.push(new ls(a))}return t}}]),t}(),Ps=new q.String(q.uint8),Es=(new q.Struct({len:q.uint32,buf:new q.Buffer("len")}),new q.Struct({id:q.uint16,nameOffset:q.int16,attr:q.uint8,dataOffset:q.uint24,handle:q.uint32})),Is=new q.Struct({name:new q.String(4),maxTypeIndex:q.uint16,refList:new q.Pointer(q.uint16,new q.Array(Es,function(t){return t.maxTypeIndex+1}),{type:"parent"})}),Ts=new q.Struct({length:q.uint16,types:new q.Array(Is,function(t){return t.length+1})}),Os=new q.Struct({reserved:new q.Reserved(q.uint8,24),typeList:new q.Pointer(q.uint16,Ts),nameListOffset:new q.Pointer(q.uint16,"void")}),Bs=new q.Struct({dataOffset:q.uint32,map:new q.Pointer(q.uint32,Os),dataLength:q.uint32,mapLength:q.uint32}),Ls=function(){function t(e){$(this,t),this.stream=e,this.header=Bs.decode(this.stream)
var n=this.header.map.typeList.types,r=Array.isArray(n),i=0
for(n=r?n:Y(n);;){var o
if(r){if(i>=n.length)break
o=n[i++]}else{if((i=n.next()).done)break
o=i.value}var a=o,s=a.refList,u=Array.isArray(s),l=0
for(s=u?s:Y(s);;){var c
if(u){if(l>=s.length)break
c=s[l++]}else{if((l=s.next()).done)break
c=l.value}var f=c
f.nameOffset>=0?(this.stream.pos=f.nameOffset+this.header.map.nameListOffset,f.name=Ps.decode(this.stream)):f.name=null}"sfnt"===a.name&&(this.sfnt=a)}}return t.probe=function(t){var e=new q.DecodeStream(t)
try{var n=Bs.decode(e)}catch(t){return!1}var r=n.map.typeList.types,i=Array.isArray(r),o=0
for(r=i?r:Y(r);;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}if("sfnt"===a.name)return!0}return!1},t.prototype.getFont=function(t){if(!this.sfnt)return null
var e=this.sfnt.refList,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i,a=this.header.dataOffset+o.dataOffset+4,s=new q.DecodeStream(this.stream.buffer.slice(a)),u=new ls(s)
if(u.postscriptName===t)return u}return null},tt(t,[{key:"fonts",get:function(){var t=[],e=this.sfnt.refList,n=Array.isArray(e),r=0
for(e=n?e:Y(e);;){var i
if(n){if(r>=e.length)break
i=e[r++]}else{if((r=e.next()).done)break
i=r.value}var o=i,a=this.header.dataOffset+o.dataOffset+4,s=new q.DecodeStream(this.stream.buffer.slice(a))
t.push(new ls(s))}return t}}]),t}()
bt.registerFormat(ls),bt.registerFormat(hs),bt.registerFormat(bs),bt.registerFormat(As),bt.registerFormat(Ls),t.exports=bt}).call(e,n(2).Buffer,n(36))},function(t,e,n){(function(){var t,r,i,o
e.EncodeStream=n(85),e.DecodeStream=n(86),e.Array=n(108),e.LazyArray=n(111),e.Bitfield=n(112),e.Boolean=n(113),e.Buffer=n(114),e.Enum=n(115),e.Optional=n(116),e.Reserved=n(117),e.String=n(118),e.Struct=n(119),e.VersionedStruct=n(120),i=n(109)
for(t in i)r=i[t],e[t]=r
o=n(121)
for(t in o)r=o[t],e[t]=r}).call(this)},function(t,e,n){(function(e){(function(){var r,i,o,a,s={}.hasOwnProperty
a=n(31),r=n(86)
try{o=n(87)}catch(t){}i=function(t){function n(t){null==t&&(t=65536),n.__super__.constructor.apply(this,arguments),this.buffer=new e(t),this.bufferOffset=0,this.pos=0}var i;(function(t,e){function n(){this.constructor=t}for(var r in e)s.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype})(n,a.Readable)
for(i in e.prototype)"write"===i.slice(0,5)&&function(t){var e
e=+r.TYPES[t.replace(/write|[BL]E/g,"")],n.prototype[t]=function(n){return this.ensure(e),this.buffer[t](n,this.bufferOffset),this.bufferOffset+=e,this.pos+=e}}(i)
return n.prototype._read=function(){},n.prototype.ensure=function(t){if(this.bufferOffset+t>this.buffer.length)return this.flush()},n.prototype.flush=function(){if(this.bufferOffset>0)return this.push(new e(this.buffer.slice(0,this.bufferOffset))),this.bufferOffset=0},n.prototype.writeBuffer=function(t){return this.flush(),this.push(t),this.pos+=t.length},n.prototype.writeString=function(t,n){var r,i,a,s,u
switch(null==n&&(n="ascii"),n){case"utf16le":case"ucs2":case"utf8":case"ascii":return this.writeBuffer(new e(t,n))
case"utf16be":for(a=s=0,u=(r=new e(t,"utf16le")).length-1;s<u;a=s+=2)i=r[a],r[a]=r[a+1],r[a+1]=i
return this.writeBuffer(r)
default:if(o)return this.writeBuffer(o.encode(t,n))
throw new Error("Install iconv-lite to enable additional string encodings.")}},n.prototype.writeUInt24BE=function(t){return this.ensure(3),this.buffer[this.bufferOffset++]=t>>>16&255,this.buffer[this.bufferOffset++]=t>>>8&255,this.buffer[this.bufferOffset++]=255&t,this.pos+=3},n.prototype.writeUInt24LE=function(t){return this.ensure(3),this.buffer[this.bufferOffset++]=255&t,this.buffer[this.bufferOffset++]=t>>>8&255,this.buffer[this.bufferOffset++]=t>>>16&255,this.pos+=3},n.prototype.writeInt24BE=function(t){return t>=0?this.writeUInt24BE(t):this.writeUInt24BE(t+16777215+1)},n.prototype.writeInt24LE=function(t){return t>=0?this.writeUInt24LE(t):this.writeUInt24LE(t+16777215+1)},n.prototype.fill=function(t,n){var r
return n<this.buffer.length?(this.ensure(n),this.buffer.fill(t,this.bufferOffset,this.bufferOffset+n),this.bufferOffset+=n,this.pos+=n):((r=new e(n)).fill(t),this.writeBuffer(r))},n.prototype.end=function(){return this.flush(),this.push(null)},n}(),t.exports=i}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){(function(e){(function(){var r,i
try{i=n(87)}catch(t){}r=function(){function t(t){this.buffer=t,this.pos=0,this.length=this.buffer.length}var n
t.TYPES={UInt8:1,UInt16:2,UInt24:3,UInt32:4,Int8:1,Int16:2,Int24:3,Int32:4,Float:4,Double:8}
for(n in e.prototype)"read"===n.slice(0,4)&&function(e){var n
n=t.TYPES[e.replace(/read|[BL]E/g,"")],t.prototype[e]=function(){var t
return t=this.buffer[e](this.pos),this.pos+=n,t}}(n)
return t.prototype.readString=function(t,n){var r,o,a,s,u
switch(null==n&&(n="ascii"),n){case"utf16le":case"ucs2":case"utf8":case"ascii":return this.buffer.toString(n,this.pos,this.pos+=t)
case"utf16be":for(a=s=0,u=(r=new e(this.readBuffer(t))).length-1;s<u;a=s+=2)o=r[a],r[a]=r[a+1],r[a+1]=o
return r.toString("utf16le")
default:if(r=this.readBuffer(t),i)try{return i.decode(r,n)}catch(t){}return r}},t.prototype.readBuffer=function(t){return this.buffer.slice(this.pos,this.pos+=t)},t.prototype.readUInt24BE=function(){return(this.readUInt16BE()<<8)+this.readUInt8()},t.prototype.readUInt24LE=function(){return this.readUInt16LE()+(this.readUInt8()<<16)},t.prototype.readInt24BE=function(){return(this.readInt16BE()<<8)+this.readUInt8()},t.prototype.readInt24LE=function(){return this.readUInt16LE()+(this.readInt8()<<16)},t}(),t.exports=r}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){(function(e){"use strict"
var r=n(2).Buffer,i=n(88),o=t.exports
o.encodings=null,o.defaultCharUnicode="�",o.defaultCharSingleByte="?",o.encode=function(t,e,n){t=""+(t||"")
var i=o.getEncoder(e,n),a=i.write(t),s=i.end()
return s&&s.length>0?r.concat([a,s]):a},o.decode=function(t,e,n){"string"==typeof t&&(o.skipDecodeWarning||(o.skipDecodeWarning=!0),t=new r(""+(t||""),"binary"))
var i=o.getDecoder(e,n),a=i.write(t),s=i.end()
return s?a+s:a},o.encodingExists=function(t){try{return o.getCodec(t),!0}catch(t){return!1}},o.toEncoding=o.encode,o.fromEncoding=o.decode,o._codecDataCache={},o.getCodec=function(t){o.encodings||(o.encodings=n(89))
for(var e=(""+t).toLowerCase().replace(/[^0-9a-z]|:\d{4}$/g,""),r={};;){var i=o._codecDataCache[e]
if(i)return i
var a=o.encodings[e]
switch(typeof a){case"string":e=a
break
case"object":for(var s in a)r[s]=a[s]
r.encodingName||(r.encodingName=e),e=a.type
break
case"function":return r.encodingName||(r.encodingName=e),i=new a(r,o),o._codecDataCache[r.encodingName]=i,i
default:throw new Error("Encoding not recognized: '"+t+"' (searched as: '"+e+"')")}}},o.getEncoder=function(t,e){var n=o.getCodec(t),r=new n.encoder(e,n)
return n.bomAware&&e&&e.addBOM&&(r=new i.PrependBOM(r,e)),r},o.getDecoder=function(t,e){var n=o.getCodec(t),r=new n.decoder(e,n)
return!n.bomAware||e&&!1===e.stripBOM||(r=new i.StripBOM(r,e)),r}
var a=void 0!==e&&e.versions&&e.versions.node
if(a){var s=a.split(".").map(Number);(s[0]>0||s[1]>=10)&&n(106)(o),n(107)(o)}}).call(e,n(36))},function(t,e){"use strict"
function n(t,e){this.encoder=t,this.addBOM=!0}function r(t,e){this.decoder=t,this.pass=!1,this.options=e||{}}e.PrependBOM=n,n.prototype.write=function(t){return this.addBOM&&(t="\ufeff"+t,this.addBOM=!1),this.encoder.write(t)},n.prototype.end=function(){return this.encoder.end()},e.StripBOM=r,r.prototype.write=function(t){var e=this.decoder.write(t)
return this.pass||!e?e:("\ufeff"===e[0]&&(e=e.slice(1),"function"==typeof this.options.stripBOM&&this.options.stripBOM()),this.pass=!0,e)},r.prototype.end=function(){return this.decoder.end()}},function(t,e,n){"use strict"
for(var r=[n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97)],i=0;i<r.length;i++){t=r[i]
for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}},function(t,e,n){"use strict"
function r(t,e){this.enc=t.encodingName,this.bomAware=t.bomAware,"base64"===this.enc?this.encoder=a:"cesu8"===this.enc&&(this.enc="utf8",this.encoder=s,3==new l("eda080","hex").toString().length&&(this.decoder=u,this.defaultCharUnicode=e.defaultCharUnicode))}function i(t,e){c.call(this,e.enc)}function o(t,e){this.enc=e.enc}function a(t,e){this.prevStr=""}function s(t,e){}function u(t,e){this.acc=0,this.contBytes=0,this.accBytes=0,this.defaultCharUnicode=e.defaultCharUnicode}var l=n(2).Buffer
t.exports={utf8:{type:"_internal",bomAware:!0},cesu8:{type:"_internal",bomAware:!0},unicode11utf8:"utf8",ucs2:{type:"_internal",bomAware:!0},utf16le:"ucs2",binary:{type:"_internal"},iso88591:"binary",base64:{type:"_internal"},hex:{type:"_internal"},_internal:r},r.prototype.encoder=o,r.prototype.decoder=i
var c=n(48).StringDecoder
c.prototype.end||(c.prototype.end=function(){}),i.prototype=c.prototype,o.prototype.write=function(t){return new l(t,this.enc)},o.prototype.end=function(){},a.prototype.write=function(t){var e=(t=this.prevStr+t).length-t.length%4
return this.prevStr=t.slice(e),t=t.slice(0,e),new l(t,"base64")},a.prototype.end=function(){return new l(this.prevStr,"base64")},s.prototype.write=function(t){for(var e=new l(3*t.length),n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r)
i<128?e[n++]=i:i<2048?(e[n++]=192+(i>>>6),e[n++]=128+(63&i)):(e[n++]=224+(i>>>12),e[n++]=128+(i>>>6&63),e[n++]=128+(63&i))}return e.slice(0,n)},s.prototype.end=function(){},u.prototype.write=function(t){for(var e=this.acc,n=this.contBytes,r=this.accBytes,i="",o=0;o<t.length;o++){var a=t[o]
128!=(192&a)?(n>0&&(i+=this.defaultCharUnicode,n=0),a<128?i+=String.fromCharCode(a):a<224?(e=31&a,n=1,r=1):a<240?(e=15&a,n=2,r=1):i+=this.defaultCharUnicode):n>0?(e=e<<6|63&a,r++,0===--n&&(i+=2===r&&e<128&&e>0?this.defaultCharUnicode:3===r&&e<2048?this.defaultCharUnicode:String.fromCharCode(e))):i+=this.defaultCharUnicode}return this.acc=e,this.contBytes=n,this.accBytes=r,i},u.prototype.end=function(){var t=0
return this.contBytes>0&&(t+=this.defaultCharUnicode),t}},function(t,e,n){"use strict"
function r(){}function i(){}function o(){this.overflowByte=-1}function a(t,e){this.iconv=e}function s(t,e){void 0===(t=t||{}).addBOM&&(t.addBOM=!0),this.encoder=e.iconv.getEncoder("utf-16le",t)}function u(t,e){this.decoder=null,this.initialBytes=[],this.initialBytesLen=0,this.options=t||{},this.iconv=e.iconv}function l(t,e){var n=e||"utf-16le"
if(t.length>=2)if(254==t[0]&&255==t[1])n="utf-16be"
else if(255==t[0]&&254==t[1])n="utf-16le"
else{for(var r=0,i=0,o=Math.min(t.length-t.length%2,64),a=0;a<o;a+=2)0===t[a]&&0!==t[a+1]&&i++,0!==t[a]&&0===t[a+1]&&r++
i>r?n="utf-16be":i<r&&(n="utf-16le")}return n}var c=n(2).Buffer
e.utf16be=r,r.prototype.encoder=i,r.prototype.decoder=o,r.prototype.bomAware=!0,i.prototype.write=function(t){for(var e=new c(t,"ucs2"),n=0;n<e.length;n+=2){var r=e[n]
e[n]=e[n+1],e[n+1]=r}return e},i.prototype.end=function(){},o.prototype.write=function(t){if(0==t.length)return""
var e=new c(t.length+1),n=0,r=0
for(-1!==this.overflowByte&&(e[0]=t[0],e[1]=this.overflowByte,n=1,r=2);n<t.length-1;n+=2,r+=2)e[r]=t[n+1],e[r+1]=t[n]
return this.overflowByte=n==t.length-1?t[t.length-1]:-1,e.slice(0,r).toString("ucs2")},o.prototype.end=function(){},e.utf16=a,a.prototype.encoder=s,a.prototype.decoder=u,s.prototype.write=function(t){return this.encoder.write(t)},s.prototype.end=function(){return this.encoder.end()},u.prototype.write=function(t){if(!this.decoder){if(this.initialBytes.push(t),this.initialBytesLen+=t.length,this.initialBytesLen<16)return""
var e=l(t=c.concat(this.initialBytes),this.options.defaultEncoding)
this.decoder=this.iconv.getDecoder(e,this.options),this.initialBytes.length=this.initialBytesLen=0}return this.decoder.write(t)},u.prototype.end=function(){if(!this.decoder){var t=c.concat(this.initialBytes),e=l(t,this.options.defaultEncoding)
this.decoder=this.iconv.getDecoder(e,this.options)
var n=this.decoder.write(t),r=this.decoder.end()
return r?n+r:n}return this.decoder.end()}},function(t,e,n){"use strict"
function r(t,e){this.iconv=e}function i(t,e){this.iconv=e.iconv}function o(t,e){this.iconv=e.iconv,this.inBase64=!1,this.base64Accum=""}function a(t,e){this.iconv=e}function s(t,e){this.iconv=e.iconv,this.inBase64=!1,this.base64Accum=new l(6),this.base64AccumIdx=0}function u(t,e){this.iconv=e.iconv,this.inBase64=!1,this.base64Accum=""}var l=n(2).Buffer
e.utf7=r,e.unicode11utf7="utf7",r.prototype.encoder=i,r.prototype.decoder=o,r.prototype.bomAware=!0
var c=/[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g
i.prototype.write=function(t){return new l(t.replace(c,function(t){return"+"+("+"===t?"":this.iconv.encode(t,"utf16-be").toString("base64").replace(/=+$/,""))+"-"}.bind(this)))},i.prototype.end=function(){}
for(var f=/[A-Za-z0-9\/+]/,h=[],p=0;p<256;p++)h[p]=f.test(String.fromCharCode(p))
var d="+".charCodeAt(0),g="-".charCodeAt(0),y="&".charCodeAt(0)
o.prototype.write=function(t){for(var e="",n=0,r=this.inBase64,i=this.base64Accum,o=0;o<t.length;o++)if(r){if(!h[t[o]]){if(o==n&&t[o]==g)e+="+"
else{var a=i+t.slice(n,o).toString()
e+=this.iconv.decode(new l(a,"base64"),"utf16-be")}t[o]!=g&&o--,n=o+1,r=!1,i=""}}else t[o]==d&&(e+=this.iconv.decode(t.slice(n,o),"ascii"),n=o+1,r=!0)
if(r){var s=(a=i+t.slice(n).toString()).length-a.length%8
i=a.slice(s),a=a.slice(0,s),e+=this.iconv.decode(new l(a,"base64"),"utf16-be")}else e+=this.iconv.decode(t.slice(n),"ascii")
return this.inBase64=r,this.base64Accum=i,e},o.prototype.end=function(){var t=""
return this.inBase64&&this.base64Accum.length>0&&(t=this.iconv.decode(new l(this.base64Accum,"base64"),"utf16-be")),this.inBase64=!1,this.base64Accum="",t},e.utf7imap=a,a.prototype.encoder=s,a.prototype.decoder=u,a.prototype.bomAware=!0,s.prototype.write=function(t){for(var e=this.inBase64,n=this.base64Accum,r=this.base64AccumIdx,i=new l(5*t.length+10),o=0,a=0;a<t.length;a++){var s=t.charCodeAt(a)
32<=s&&s<=126?(e&&(r>0&&(o+=i.write(n.slice(0,r).toString("base64").replace(/\//g,",").replace(/=+$/,""),o),r=0),i[o++]=g,e=!1),e||(i[o++]=s,s===y&&(i[o++]=g))):(e||(i[o++]=y,e=!0),e&&(n[r++]=s>>8,n[r++]=255&s,r==n.length&&(o+=i.write(n.toString("base64").replace(/\//g,","),o),r=0)))}return this.inBase64=e,this.base64AccumIdx=r,i.slice(0,o)},s.prototype.end=function(){var t=new l(10),e=0
return this.inBase64&&(this.base64AccumIdx>0&&(e+=t.write(this.base64Accum.slice(0,this.base64AccumIdx).toString("base64").replace(/\//g,",").replace(/=+$/,""),e),this.base64AccumIdx=0),t[e++]=g,this.inBase64=!1),t.slice(0,e)}
var v=h.slice()
v[",".charCodeAt(0)]=!0,u.prototype.write=function(t){for(var e="",n=0,r=this.inBase64,i=this.base64Accum,o=0;o<t.length;o++)if(r){if(!v[t[o]]){if(o==n&&t[o]==g)e+="&"
else{var a=i+t.slice(n,o).toString().replace(/,/g,"/")
e+=this.iconv.decode(new l(a,"base64"),"utf16-be")}t[o]!=g&&o--,n=o+1,r=!1,i=""}}else t[o]==y&&(e+=this.iconv.decode(t.slice(n,o),"ascii"),n=o+1,r=!0)
if(r){var s=(a=i+t.slice(n).toString().replace(/,/g,"/")).length-a.length%8
i=a.slice(s),a=a.slice(0,s),e+=this.iconv.decode(new l(a,"base64"),"utf16-be")}else e+=this.iconv.decode(t.slice(n),"ascii")
return this.inBase64=r,this.base64Accum=i,e},u.prototype.end=function(){var t=""
return this.inBase64&&this.base64Accum.length>0&&(t=this.iconv.decode(new l(this.base64Accum,"base64"),"utf16-be")),this.inBase64=!1,this.base64Accum="",t}},function(t,e,n){"use strict"
function r(t,e){if(!t)throw new Error("SBCS codec is called without the data.")
if(!t.chars||128!==t.chars.length&&256!==t.chars.length)throw new Error("Encoding '"+t.type+"' has incorrect 'chars' (must be of len 128 or 256)")
if(128===t.chars.length){for(var n="",r=0;r<128;r++)n+=String.fromCharCode(r)
t.chars=n+t.chars}this.decodeBuf=new a(t.chars,"ucs2")
var i=new a(65536)
i.fill(e.defaultCharSingleByte.charCodeAt(0))
for(r=0;r<t.chars.length;r++)i[t.chars.charCodeAt(r)]=r
this.encodeBuf=i}function i(t,e){this.encodeBuf=e.encodeBuf}function o(t,e){this.decodeBuf=e.decodeBuf}var a=n(2).Buffer
e._sbcs=r,r.prototype.encoder=i,r.prototype.decoder=o,i.prototype.write=function(t){for(var e=new a(t.length),n=0;n<t.length;n++)e[n]=this.encodeBuf[t.charCodeAt(n)]
return e},i.prototype.end=function(){},o.prototype.write=function(t){for(var e=this.decodeBuf,n=new a(2*t.length),r=0,i=0,o=0;o<t.length;o++)r=2*t[o],i=2*o,n[i]=e[r],n[i+1]=e[r+1]
return n.toString("ucs2")},o.prototype.end=function(){}},function(t,e){"use strict"
t.exports={10029:"maccenteuro",maccenteuro:{type:"_sbcs",chars:"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"},808:"cp808",ibm808:"cp808",cp808:{type:"_sbcs",chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "},ascii8bit:"ascii",usascii:"ascii",ansix34:"ascii",ansix341968:"ascii",ansix341986:"ascii",csascii:"ascii",cp367:"ascii",ibm367:"ascii",isoir6:"ascii",iso646us:"ascii",iso646irv:"ascii",us:"ascii",latin1:"iso88591",latin2:"iso88592",latin3:"iso88593",latin4:"iso88594",latin5:"iso88599",latin6:"iso885910",latin7:"iso885913",latin8:"iso885914",latin9:"iso885915",latin10:"iso885916",csisolatin1:"iso88591",csisolatin2:"iso88592",csisolatin3:"iso88593",csisolatin4:"iso88594",csisolatincyrillic:"iso88595",csisolatinarabic:"iso88596",csisolatingreek:"iso88597",csisolatinhebrew:"iso88598",csisolatin5:"iso88599",csisolatin6:"iso885910",l1:"iso88591",l2:"iso88592",l3:"iso88593",l4:"iso88594",l5:"iso88599",l6:"iso885910",l7:"iso885913",l8:"iso885914",l9:"iso885915",l10:"iso885916",isoir14:"iso646jp",isoir57:"iso646cn",isoir100:"iso88591",isoir101:"iso88592",isoir109:"iso88593",isoir110:"iso88594",isoir144:"iso88595",isoir127:"iso88596",isoir126:"iso88597",isoir138:"iso88598",isoir148:"iso88599",isoir157:"iso885910",isoir166:"tis620",isoir179:"iso885913",isoir199:"iso885914",isoir203:"iso885915",isoir226:"iso885916",cp819:"iso88591",ibm819:"iso88591",cp28591:"iso88591",28591:"iso88591",cyrillic:"iso88595",arabic:"iso88596",arabic8:"iso88596",ecma114:"iso88596",asmo708:"iso88596",greek:"iso88597",greek8:"iso88597",ecma118:"iso88597",elot928:"iso88597",hebrew:"iso88598",hebrew8:"iso88598",turkish:"iso88599",turkish8:"iso88599",thai:"iso885911",thai8:"iso885911",celtic:"iso885914",celtic8:"iso885914",isoceltic:"iso885914",tis6200:"tis620",tis62025291:"tis620",tis62025330:"tis620",1e4:"macroman",10006:"macgreek",10007:"maccyrillic",10079:"maciceland",10081:"macturkish",cspc8codepage437:"cp437",cspc775baltic:"cp775",cspc850multilingual:"cp850",cspcp852:"cp852",cspc862latinhebrew:"cp862",cpgr:"cp869",msee:"cp1250",mscyrl:"cp1251",msansi:"cp1252",msgreek:"cp1253",msturk:"cp1254",mshebr:"cp1255",msarab:"cp1256",winbaltrim:"cp1257",cp20866:"koi8r",20866:"koi8r",ibm878:"koi8r",cskoi8r:"koi8r",cp21866:"koi8u",21866:"koi8u",ibm1168:"koi8u",strk10482002:"rk1048",tcvn5712:"tcvn",tcvn57121:"tcvn",gb198880:"iso646cn",cn:"iso646cn",csiso14jisc6220ro:"iso646jp",jisc62201969ro:"iso646jp",jp:"iso646jp",cshproman8:"hproman8",r8:"hproman8",roman8:"hproman8",xroman8:"hproman8",ibm1051:"hproman8",mac:"macintosh",csmacintosh:"macintosh"}},function(t,e){"use strict"
t.exports={437:"cp437",737:"cp737",775:"cp775",850:"cp850",852:"cp852",855:"cp855",856:"cp856",857:"cp857",858:"cp858",860:"cp860",861:"cp861",862:"cp862",863:"cp863",864:"cp864",865:"cp865",866:"cp866",869:"cp869",874:"windows874",922:"cp922",1046:"cp1046",1124:"cp1124",1125:"cp1125",1129:"cp1129",1133:"cp1133",1161:"cp1161",1162:"cp1162",1163:"cp1163",1250:"windows1250",1251:"windows1251",1252:"windows1252",1253:"windows1253",1254:"windows1254",1255:"windows1255",1256:"windows1256",1257:"windows1257",1258:"windows1258",28592:"iso88592",28593:"iso88593",28594:"iso88594",28595:"iso88595",28596:"iso88596",28597:"iso88597",28598:"iso88598",28599:"iso88599",28600:"iso885910",28601:"iso885911",28603:"iso885913",28604:"iso885914",28605:"iso885915",28606:"iso885916",windows874:{type:"_sbcs",chars:"€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"},win874:"windows874",cp874:"windows874",windows1250:{type:"_sbcs",chars:"€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"},win1250:"windows1250",cp1250:"windows1250",windows1251:{type:"_sbcs",chars:"ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"},win1251:"windows1251",cp1251:"windows1251",windows1252:{type:"_sbcs",chars:"€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},win1252:"windows1252",cp1252:"windows1252",windows1253:{type:"_sbcs",chars:"€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"},win1253:"windows1253",cp1253:"windows1253",windows1254:{type:"_sbcs",chars:"€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"},win1254:"windows1254",cp1254:"windows1254",windows1255:{type:"_sbcs",chars:"€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹ�ֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"},win1255:"windows1255",cp1255:"windows1255",windows1256:{type:"_sbcs",chars:"€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"},win1256:"windows1256",cp1256:"windows1256",windows1257:{type:"_sbcs",chars:"€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"},win1257:"windows1257",cp1257:"windows1257",windows1258:{type:"_sbcs",chars:"€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"},win1258:"windows1258",cp1258:"windows1258",iso88592:{type:"_sbcs",chars:" Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"},cp28592:"iso88592",iso88593:{type:"_sbcs",chars:" Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"},cp28593:"iso88593",iso88594:{type:"_sbcs",chars:" ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"},cp28594:"iso88594",iso88595:{type:"_sbcs",chars:" ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"},cp28595:"iso88595",iso88596:{type:"_sbcs",chars:" ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"},cp28596:"iso88596",iso88597:{type:"_sbcs",chars:" ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"},cp28597:"iso88597",iso88598:{type:"_sbcs",chars:" �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"},cp28598:"iso88598",iso88599:{type:"_sbcs",chars:" ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"},cp28599:"iso88599",iso885910:{type:"_sbcs",chars:" ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"},cp28600:"iso885910",iso885911:{type:"_sbcs",chars:" กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"},cp28601:"iso885911",iso885913:{type:"_sbcs",chars:" ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"},cp28603:"iso885913",iso885914:{type:"_sbcs",chars:" Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"},cp28604:"iso885914",iso885915:{type:"_sbcs",chars:" ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},cp28605:"iso885915",iso885916:{type:"_sbcs",chars:" ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"},cp28606:"iso885916",cp437:{type:"_sbcs",chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},ibm437:"cp437",csibm437:"cp437",cp737:{type:"_sbcs",chars:"ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "},ibm737:"cp737",csibm737:"cp737",cp775:{type:"_sbcs",chars:"ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "},ibm775:"cp775",csibm775:"cp775",cp850:{type:"_sbcs",chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "},ibm850:"cp850",csibm850:"cp850",cp852:{type:"_sbcs",chars:"ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "},ibm852:"cp852",csibm852:"cp852",cp855:{type:"_sbcs",chars:"ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "},ibm855:"cp855",csibm855:"cp855",cp856:{type:"_sbcs",chars:"אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "},ibm856:"cp856",csibm856:"cp856",cp857:{type:"_sbcs",chars:"ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "},ibm857:"cp857",csibm857:"cp857",cp858:{type:"_sbcs",chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "},ibm858:"cp858",csibm858:"cp858",cp860:{type:"_sbcs",chars:"ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},ibm860:"cp860",csibm860:"cp860",cp861:{type:"_sbcs",chars:"ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},ibm861:"cp861",csibm861:"cp861",cp862:{type:"_sbcs",chars:"אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},ibm862:"cp862",csibm862:"cp862",cp863:{type:"_sbcs",chars:"ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},ibm863:"cp863",csibm863:"cp863",cp864:{type:"_sbcs",chars:"\0\b\t\n\v\f\r !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"},ibm864:"cp864",csibm864:"cp864",cp865:{type:"_sbcs",chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},ibm865:"cp865",csibm865:"cp865",cp866:{type:"_sbcs",chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "},ibm866:"cp866",csibm866:"cp866",cp869:{type:"_sbcs",chars:"������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "},ibm869:"cp869",csibm869:"cp869",cp922:{type:"_sbcs",chars:" ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"},ibm922:"cp922",csibm922:"cp922",cp1046:{type:"_sbcs",chars:"ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"},ibm1046:"cp1046",csibm1046:"cp1046",cp1124:{type:"_sbcs",chars:" ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"},ibm1124:"cp1124",csibm1124:"cp1124",cp1125:{type:"_sbcs",chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "},ibm1125:"cp1125",csibm1125:"cp1125",cp1129:{type:"_sbcs",chars:" ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"},ibm1129:"cp1129",csibm1129:"cp1129",cp1133:{type:"_sbcs",chars:" ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"},ibm1133:"cp1133",csibm1133:"cp1133",cp1161:{type:"_sbcs",chars:"��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "},ibm1161:"cp1161",csibm1161:"cp1161",cp1162:{type:"_sbcs",chars:"€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"},ibm1162:"cp1162",csibm1162:"cp1162",cp1163:{type:"_sbcs",chars:" ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"},ibm1163:"cp1163",csibm1163:"cp1163",maccroatian:{type:"_sbcs",chars:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"},maccyrillic:{type:"_sbcs",chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"},macgreek:{type:"_sbcs",chars:"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"},maciceland:{type:"_sbcs",chars:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"},macroman:{type:"_sbcs",chars:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"},macromania:{type:"_sbcs",chars:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"},macthai:{type:"_sbcs",chars:"«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\ufeff​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"},macturkish:{type:"_sbcs",chars:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"},macukraine:{type:"_sbcs",chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"},koi8r:{type:"_sbcs",chars:"─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"},koi8u:{type:"_sbcs",chars:"─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"},koi8ru:{type:"_sbcs",chars:"─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"},koi8t:{type:"_sbcs",chars:"қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"},armscii8:{type:"_sbcs",chars:" �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"},rk1048:{type:"_sbcs",chars:"ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"},tcvn:{type:"_sbcs",chars:"\0ÚỤỪỬỮ\b\t\n\v\f\rỨỰỲỶỸÝỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"},georgianacademy:{type:"_sbcs",chars:"‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},georgianps:{type:"_sbcs",chars:"‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},pt154:{type:"_sbcs",chars:"ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"},viscii:{type:"_sbcs",chars:"\0ẲẴẪ\b\t\n\v\f\rỶỸỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"},iso646cn:{type:"_sbcs",chars:"\0\b\t\n\v\f\r !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"},iso646jp:{type:"_sbcs",chars:"\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"},hproman8:{type:"_sbcs",chars:" ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"},macintosh:{type:"_sbcs",chars:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"},ascii:{type:"_sbcs",chars:"��������������������������������������������������������������������������������������������������������������������������������"},tis620:{type:"_sbcs",chars:"���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"}}},function(t,e,n){"use strict"
function r(t,e){if(this.encodingName=t.encodingName,!t)throw new Error("DBCS codec is called without the data.")
if(!t.table)throw new Error("Encoding '"+this.encodingName+"' has no data.")
var n=t.table()
this.decodeTables=[],this.decodeTables[0]=f.slice(0),this.decodeTableSeq=[]
for(var r=0;r<n.length;r++)this._addDecodeChunk(n[r])
this.defaultCharUnicode=e.defaultCharUnicode,this.encodeTable=[],this.encodeTableSeq=[]
var i={}
if(t.encodeSkipVals)for(r=0;r<t.encodeSkipVals.length;r++){var o=t.encodeSkipVals[r]
if("number"==typeof o)i[o]=!0
else for(var a=o.from;a<=o.to;a++)i[a]=!0}if(this._fillEncodeTable(0,0,i),t.encodeAdd)for(var s in t.encodeAdd)Object.prototype.hasOwnProperty.call(t.encodeAdd,s)&&this._setEncodeChar(s.charCodeAt(0),t.encodeAdd[s])
if(this.defCharSB=this.encodeTable[0][e.defaultCharSingleByte.charCodeAt(0)],this.defCharSB===u&&(this.defCharSB=this.encodeTable[0]["?"]),this.defCharSB===u&&(this.defCharSB="?".charCodeAt(0)),"function"==typeof t.gb18030){this.gb18030=t.gb18030()
var h=this.decodeTables.length,p=this.decodeTables[h]=f.slice(0),d=this.decodeTables.length,g=this.decodeTables[d]=f.slice(0)
for(r=129;r<=254;r++){var y=c-this.decodeTables[0][r],v=this.decodeTables[y]
for(a=48;a<=57;a++)v[a]=c-h}for(r=129;r<=254;r++)p[r]=c-d
for(r=48;r<=57;r++)g[r]=l}}function i(t,e){this.leadSurrogate=-1,this.seqObj=void 0,this.encodeTable=e.encodeTable,this.encodeTableSeq=e.encodeTableSeq,this.defaultCharSingleByte=e.defCharSB,this.gb18030=e.gb18030}function o(t,e){this.nodeIdx=0,this.prevBuf=new s(0),this.decodeTables=e.decodeTables,this.decodeTableSeq=e.decodeTableSeq,this.defaultCharUnicode=e.defaultCharUnicode,this.gb18030=e.gb18030}function a(t,e){if(t[0]>e)return-1
for(var n=0,r=t.length;n<r-1;){var i=n+Math.floor((r-n+1)/2)
t[i]<=e?n=i:r=i}return n}var s=n(2).Buffer
e._dbcs=r
for(var u=-1,l=-2,c=-1e3,f=new Array(256),h=0;h<256;h++)f[h]=u
r.prototype.encoder=i,r.prototype.decoder=o,r.prototype._getDecodeTrieNode=function(t){for(var e=[];t>0;t>>=8)e.push(255&t)
0==e.length&&e.push(0)
for(var n=this.decodeTables[0],r=e.length-1;r>0;r--){var i=n[e[r]]
if(i==u)n[e[r]]=c-this.decodeTables.length,this.decodeTables.push(n=f.slice(0))
else{if(!(i<=c))throw new Error("Overwrite byte in "+this.encodingName+", addr: "+t.toString(16))
n=this.decodeTables[c-i]}}return n},r.prototype._addDecodeChunk=function(t){var e=parseInt(t[0],16),n=this._getDecodeTrieNode(e)
e&=255
for(var r=1;r<t.length;r++){var i=t[r]
if("string"==typeof i)for(var o=0;o<i.length;){var a=i.charCodeAt(o++)
if(55296<=a&&a<56320){var s=i.charCodeAt(o++)
if(!(56320<=s&&s<57344))throw new Error("Incorrect surrogate pair in "+this.encodingName+" at chunk "+t[0])
n[e++]=65536+1024*(a-55296)+(s-56320)}else if(4080<a&&a<=4095){for(var u=4095-a+2,l=[],c=0;c<u;c++)l.push(i.charCodeAt(o++))
n[e++]=-10-this.decodeTableSeq.length,this.decodeTableSeq.push(l)}else n[e++]=a}else{if("number"!=typeof i)throw new Error("Incorrect type '"+typeof i+"' given in "+this.encodingName+" at chunk "+t[0])
var f=n[e-1]+1
for(o=0;o<i;o++)n[e++]=f++}}if(e>255)throw new Error("Incorrect chunk in "+this.encodingName+" at addr "+t[0]+": too long"+e)},r.prototype._getEncodeBucket=function(t){var e=t>>8
return void 0===this.encodeTable[e]&&(this.encodeTable[e]=f.slice(0)),this.encodeTable[e]},r.prototype._setEncodeChar=function(t,e){var n=this._getEncodeBucket(t),r=255&t
n[r]<=-10?this.encodeTableSeq[-10-n[r]][-1]=e:n[r]==u&&(n[r]=e)},r.prototype._setEncodeSequence=function(t,e){var n,r=t[0],i=this._getEncodeBucket(r),o=255&r
i[o]<=-10?n=this.encodeTableSeq[-10-i[o]]:(n={},i[o]!==u&&(n[-1]=i[o]),i[o]=-10-this.encodeTableSeq.length,this.encodeTableSeq.push(n))
for(var a=1;a<t.length-1;a++){var s=n[r]
"object"==typeof s?n=s:(n=n[r]={},void 0!==s&&(n[-1]=s))}n[r=t[t.length-1]]=e},r.prototype._fillEncodeTable=function(t,e,n){for(var r=this.decodeTables[t],i=0;i<256;i++){var o=r[i],a=e+i
n[a]||(o>=0?this._setEncodeChar(o,a):o<=c?this._fillEncodeTable(c-o,a<<8,n):o<=-10&&this._setEncodeSequence(this.decodeTableSeq[-10-o],a))}},i.prototype.write=function(t){for(var e=new s(t.length*(this.gb18030?4:3)),n=this.leadSurrogate,r=this.seqObj,i=-1,o=0,l=0;;){if(-1===i){if(o==t.length)break
var c=t.charCodeAt(o++)}else{c=i
i=-1}if(55296<=c&&c<57344)if(c<56320){if(-1===n){n=c
continue}n=c,c=u}else-1!==n?(c=65536+1024*(n-55296)+(c-56320),n=-1):c=u
else-1!==n&&(i=c,c=u,n=-1)
var f=u
if(void 0!==r&&c!=u){var h=r[c]
if("object"==typeof h){r=h
continue}"number"==typeof h?f=h:void 0==h&&void 0!==(h=r[-1])&&(f=h,i=c),r=void 0}else if(c>=0){var p=this.encodeTable[c>>8]
if(void 0!==p&&(f=p[255&c]),f<=-10){r=this.encodeTableSeq[-10-f]
continue}if(f==u&&this.gb18030){var d=a(this.gb18030.uChars,c)
if(-1!=d){f=this.gb18030.gbChars[d]+(c-this.gb18030.uChars[d])
e[l++]=129+Math.floor(f/12600),f%=12600,e[l++]=48+Math.floor(f/1260),f%=1260,e[l++]=129+Math.floor(f/10),f%=10,e[l++]=48+f
continue}}}f===u&&(f=this.defaultCharSingleByte),f<256?e[l++]=f:f<65536?(e[l++]=f>>8,e[l++]=255&f):(e[l++]=f>>16,e[l++]=f>>8&255,e[l++]=255&f)}return this.seqObj=r,this.leadSurrogate=n,e.slice(0,l)},i.prototype.end=function(){if(-1!==this.leadSurrogate||void 0!==this.seqObj){var t=new s(10),e=0
if(this.seqObj){var n=this.seqObj[-1]
void 0!==n&&(n<256?t[e++]=n:(t[e++]=n>>8,t[e++]=255&n)),this.seqObj=void 0}return-1!==this.leadSurrogate&&(t[e++]=this.defaultCharSingleByte,this.leadSurrogate=-1),t.slice(0,e)}},i.prototype.findIdx=a,o.prototype.write=function(t){var e=new s(2*t.length),n=this.nodeIdx,r=this.prevBuf,i=this.prevBuf.length,o=-this.prevBuf.length
i>0&&(r=s.concat([r,t.slice(0,10)]))
for(var f=0,h=0;f<t.length;f++){var p,d=f>=0?t[f]:r[f+i]
if((p=this.decodeTables[n][d])>=0);else if(p===u)f=o,p=this.defaultCharUnicode.charCodeAt(0)
else if(p===l){var g=o>=0?t.slice(o,f+1):r.slice(o+i,f+1+i),y=12600*(g[0]-129)+1260*(g[1]-48)+10*(g[2]-129)+(g[3]-48),v=a(this.gb18030.gbChars,y)
p=this.gb18030.uChars[v]+y-this.gb18030.gbChars[v]}else{if(p<=c){n=c-p
continue}if(!(p<=-10))throw new Error("iconv-lite internal error: invalid decoding table value "+p+" at "+n+"/"+d)
for(var b=this.decodeTableSeq[-10-p],m=0;m<b.length-1;m++)p=b[m],e[h++]=255&p,e[h++]=p>>8
p=b[b.length-1]}if(p>65535){p-=65536
var w=55296+Math.floor(p/1024)
e[h++]=255&w,e[h++]=w>>8,p=56320+p%1024}e[h++]=255&p,e[h++]=p>>8,n=0,o=f+1}return this.nodeIdx=n,this.prevBuf=o>=0?t.slice(o):r.slice(o+i),e.slice(0,h).toString("ucs2")},o.prototype.end=function(){for(var t="";this.prevBuf.length>0;){t+=this.defaultCharUnicode
var e=this.prevBuf.slice(1)
this.prevBuf=new s(0),this.nodeIdx=0,e.length>0&&(t+=this.write(e))}return this.nodeIdx=0,t}},function(t,e,n){"use strict"
t.exports={shiftjis:{type:"_dbcs",table:function(){return n(98)},encodeAdd:{"¥":92,"‾":126},encodeSkipVals:[{from:60736,to:63808}]},csshiftjis:"shiftjis",mskanji:"shiftjis",sjis:"shiftjis",windows31j:"shiftjis",ms31j:"shiftjis",xsjis:"shiftjis",windows932:"shiftjis",ms932:"shiftjis",932:"shiftjis",cp932:"shiftjis",eucjp:{type:"_dbcs",table:function(){return n(99)},encodeAdd:{"¥":92,"‾":126}},gb2312:"cp936",gb231280:"cp936",gb23121980:"cp936",csgb2312:"cp936",csiso58gb231280:"cp936",euccn:"cp936",windows936:"cp936",ms936:"cp936",936:"cp936",cp936:{type:"_dbcs",table:function(){return n(100)}},gbk:{type:"_dbcs",table:function(){return n(100).concat(n(101))}},xgbk:"gbk",isoir58:"gbk",gb18030:{type:"_dbcs",table:function(){return n(100).concat(n(101))},gb18030:function(){return n(102)},encodeSkipVals:[128],encodeAdd:{"€":41699}},chinese:"gb18030",windows949:"cp949",ms949:"cp949",949:"cp949",cp949:{type:"_dbcs",table:function(){return n(103)}},cseuckr:"cp949",csksc56011987:"cp949",euckr:"cp949",isoir149:"cp949",korean:"cp949",ksc56011987:"cp949",ksc56011989:"cp949",ksc5601:"cp949",windows950:"cp950",ms950:"cp950",950:"cp950",cp950:{type:"_dbcs",table:function(){return n(104)}},big5:"big5hkscs",big5hkscs:{type:"_dbcs",table:function(){return n(104).concat(n(105))},encodeSkipVals:[41676]},cnbig5:"big5hkscs",csbig5:"big5hkscs",xxbig5:"big5hkscs"}},function(t,e){t.exports=[["0","\0",128],["a1","｡",62],["8140","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×"],["8180","÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"],["81b8","∈∋⊆⊇⊂⊃∪∩"],["81c8","∧∨￢⇒⇔∀∃"],["81da","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["81f0","Å‰♯♭♪†‡¶"],["81fc","◯"],["824f","０",9],["8260","Ａ",25],["8281","ａ",25],["829f","ぁ",82],["8340","ァ",62],["8380","ム",22],["839f","Α",16,"Σ",6],["83bf","α",16,"σ",6],["8440","А",5,"ЁЖ",25],["8470","а",5,"ёж",7],["8480","о",17],["849f","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["8740","①",19,"Ⅰ",9],["875f","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["877e","㍻"],["8780","〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["889f","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["8940","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"],["8980","園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["8a40","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"],["8a80","橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["8b40","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"],["8b80","朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["8c40","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"],["8c80","劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["8d40","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"],["8d80","項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["8e40","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"],["8e80","死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["8f40","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"],["8f80","準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["9040","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"],["9080","逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["9140","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"],["9180","操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["9240","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"],["9280","逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["9340","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"],["9380","凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["9440","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"],["9480","楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["9540","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"],["9580","斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["9640","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"],["9680","摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["9740","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"],["9780","沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["9840","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["989f","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["9940","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"],["9980","凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["9a40","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"],["9a80","噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["9b40","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"],["9b80","它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["9c40","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"],["9c80","怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["9d40","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"],["9d80","捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["9e40","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"],["9e80","梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["9f40","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"],["9f80","麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["e040","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"],["e080","烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e140","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"],["e180","痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e240","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"],["e280","窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e340","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"],["e380","縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e440","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"],["e480","艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e540","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"],["e580","蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["e640","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"],["e680","諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["e740","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"],["e780","轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["e840","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"],["e880","閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["e940","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"],["e980","騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["ea40","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"],["ea80","黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"],["ed40","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"],["ed80","塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["ee40","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"],["ee80","蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["eeef","ⅰ",9,"￢￤＇＂"],["f040","",62],["f080","",124],["f140","",62],["f180","",124],["f240","",62],["f280","",124],["f340","",62],["f380","",124],["f440","",62],["f480","",124],["f540","",62],["f580","",124],["f640","",62],["f680","",124],["f740","",62],["f780","",124],["f840","",62],["f880","",124],["f940",""],["fa40","ⅰ",9,"Ⅰ",9,"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"],["fa80","兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"],["fb40","涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"],["fb80","祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"],["fc40","髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"]]},function(t,e){t.exports=[["0","\0",127],["8ea1","｡",62],["a1a1","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"],["a2a1","◆□■△▲▽▼※〒→←↑↓〓"],["a2ba","∈∋⊆⊇⊂⊃∪∩"],["a2ca","∧∨￢⇒⇔∀∃"],["a2dc","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["a2f2","Å‰♯♭♪†‡¶"],["a2fe","◯"],["a3b0","０",9],["a3c1","Ａ",25],["a3e1","ａ",25],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a8a1","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["ada1","①",19,"Ⅰ",9],["adc0","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["addf","㍻〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["b0a1","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["b1a1","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"],["b2a1","押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["b3a1","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"],["b4a1","粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["b5a1","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"],["b6a1","供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["b7a1","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"],["b8a1","検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["b9a1","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"],["baa1","此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["bba1","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"],["bca1","次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["bda1","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"],["bea1","勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["bfa1","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"],["c0a1","澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["c1a1","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"],["c2a1","臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["c3a1","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"],["c4a1","帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["c5a1","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"],["c6a1","董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["c7a1","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"],["c8a1","函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["c9a1","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"],["caa1","福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["cba1","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"],["cca1","漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["cda1","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"],["cea1","痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["cfa1","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["d0a1","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["d1a1","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"],["d2a1","辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["d3a1","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"],["d4a1","圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["d5a1","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"],["d6a1","屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["d7a1","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"],["d8a1","悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["d9a1","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"],["daa1","據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["dba1","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"],["dca1","棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["dda1","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"],["dea1","沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["dfa1","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"],["e0a1","燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e1a1","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"],["e2a1","癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e3a1","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"],["e4a1","筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e5a1","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"],["e6a1","罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e7a1","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"],["e8a1","茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e9a1","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"],["eaa1","蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["eba1","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"],["eca1","譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["eda1","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"],["eea1","遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["efa1","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"],["f0a1","陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["f1a1","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"],["f2a1","髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["f3a1","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"],["f4a1","堯槇遙瑤凜熙"],["f9a1","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"],["faa1","忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["fba1","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"],["fca1","釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["fcf1","ⅰ",9,"￢￤＇＂"],["8fa2af","˘ˇ¸˙˝¯˛˚～΄΅"],["8fa2c2","¡¦¿"],["8fa2eb","ºª©®™¤№"],["8fa6e1","ΆΈΉΊΪ"],["8fa6e7","Ό"],["8fa6e9","ΎΫ"],["8fa6ec","Ώ"],["8fa6f1","άέήίϊΐόςύϋΰώ"],["8fa7c2","Ђ",10,"ЎЏ"],["8fa7f2","ђ",10,"ўџ"],["8fa9a1","ÆĐ"],["8fa9a4","Ħ"],["8fa9a6","Ĳ"],["8fa9a8","ŁĿ"],["8fa9ab","ŊØŒ"],["8fa9af","ŦÞ"],["8fa9c1","æđðħıĳĸłŀŉŋøœßŧþ"],["8faaa1","ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"],["8faaba","ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"],["8faba1","áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"],["8fabbd","ġĥíìïîǐ"],["8fabc5","īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"],["8fb0a1","丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"],["8fb1a1","侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"],["8fb2a1","傒傓傔傖傛傜傞",4,"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"],["8fb3a1","凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"],["8fb4a1","匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"],["8fb5a1","咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"],["8fb6a1","嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",5,"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",4,"囱囫园"],["8fb7a1","囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",4,"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"],["8fb8a1","堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"],["8fb9a1","奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"],["8fbaa1","嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",4,"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"],["8fbba1","屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"],["8fbca1","巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",4,"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"],["8fbda1","彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",4,"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"],["8fbea1","悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",4,"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"],["8fbfa1","懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"],["8fc0a1","捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"],["8fc1a1","擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"],["8fc2a1","昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"],["8fc3a1","杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",4,"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"],["8fc4a1","棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"],["8fc5a1","樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"],["8fc6a1","歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"],["8fc7a1","泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"],["8fc8a1","湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"],["8fc9a1","濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",4,"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",4,"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"],["8fcaa1","煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"],["8fcba1","狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"],["8fcca1","珿琀琁琄琇琊琑琚琛琤琦琨",9,"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"],["8fcda1","甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",5,"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"],["8fcea1","瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",6,"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"],["8fcfa1","睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"],["8fd0a1","碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"],["8fd1a1","秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"],["8fd2a1","笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",5],["8fd3a1","籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"],["8fd4a1","綞綦綧綪綳綶綷綹緂",4,"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"],["8fd5a1","罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"],["8fd6a1","胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"],["8fd7a1","艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"],["8fd8a1","荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"],["8fd9a1","蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",4,"蕖蕙蕜",6,"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"],["8fdaa1","藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",4,"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"],["8fdba1","蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",6,"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"],["8fdca1","蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",4,"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"],["8fdda1","襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",4,"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"],["8fdea1","誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",4,"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"],["8fdfa1","貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"],["8fe0a1","踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"],["8fe1a1","轃轇轏轑",4,"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"],["8fe2a1","郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"],["8fe3a1","釂釃釅釓釔釗釙釚釞釤釥釩釪釬",5,"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",4,"鉻鉼鉽鉿銈銉銊銍銎銒銗"],["8fe4a1","銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",4,"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"],["8fe5a1","鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",4,"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"],["8fe6a1","镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"],["8fe7a1","霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"],["8fe8a1","頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",4,"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"],["8fe9a1","馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",4],["8feaa1","鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",4,"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"],["8feba1","鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",4,"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"],["8feca1","鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"],["8feda1","黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",4,"齓齕齖齗齘齚齝齞齨齩齭",4,"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"]]},function(t,e){t.exports=[["0","\0",127,"€"],["8140","丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",5,"乲乴",9,"乿",6,"亇亊"],["8180","亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",6,"伋伌伒",4,"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",4,"佄佅佇",5,"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"],["8240","侤侫侭侰",4,"侶",8,"俀俁係俆俇俈俉俋俌俍俒",4,"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",11],["8280","個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",10,"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",4,"偖偗偘偙偛偝",7,"偦",5,"偭",8,"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",20,"傤傦傪傫傭",4,"傳",6,"傼"],["8340","傽",17,"僐",5,"僗僘僙僛",10,"僨僩僪僫僯僰僱僲僴僶",4,"僼",9,"儈"],["8380","儉儊儌",5,"儓",13,"儢",28,"兂兇兊兌兎兏児兒兓兗兘兙兛兝",4,"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",4,"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",5],["8440","凘凙凚凜凞凟凢凣凥",5,"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",5,"剋剎剏剒剓剕剗剘"],["8480","剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",9,"剾劀劃",4,"劉",6,"劑劒劔",6,"劜劤劥劦劧劮劯劰労",9,"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",5,"勠勡勢勣勥",10,"勱",7,"勻勼勽匁匂匃匄匇匉匊匋匌匎"],["8540","匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",9,"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"],["8580","厐",4,"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",6,"厷厸厹厺厼厽厾叀參",4,"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",4,"呣呥呧呩",7,"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"],["8640","咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",4,"哫哬哯哰哱哴",5,"哻哾唀唂唃唄唅唈唊",4,"唒唓唕",5,"唜唝唞唟唡唥唦"],["8680","唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",4,"啑啒啓啔啗",4,"啝啞啟啠啢啣啨啩啫啯",5,"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",6,"喨",8,"喲喴営喸喺喼喿",4,"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",4,"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",4,"嗿嘂嘃嘄嘅"],["8740","嘆嘇嘊嘋嘍嘐",7,"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",11,"噏",4,"噕噖噚噛噝",4],["8780","噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",7,"嚇",6,"嚐嚑嚒嚔",14,"嚤",10,"嚰",6,"嚸嚹嚺嚻嚽",12,"囋",8,"囕囖囘囙囜団囥",5,"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",6],["8840","園",9,"圝圞圠圡圢圤圥圦圧圫圱圲圴",4,"圼圽圿坁坃坄坅坆坈坉坋坒",4,"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"],["8880","垁垇垈垉垊垍",4,"垔",6,"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",8,"埄",6,"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",7,"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",4,"堫",4,"報堲堳場堶",7],["8940","堾",5,"塅",6,"塎塏塐塒塓塕塖塗塙",4,"塟",5,"塦",4,"塭",16,"塿墂墄墆墇墈墊墋墌"],["8980","墍",4,"墔",4,"墛墜墝墠",7,"墪",17,"墽墾墿壀壂壃壄壆",10,"壒壓壔壖",13,"壥",5,"壭壯壱売壴壵壷壸壺",7,"夃夅夆夈",4,"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"],["8a40","夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",4,"奡奣奤奦",12,"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"],["8a80","妧妬妭妰妱妳",5,"妺妼妽妿",6,"姇姈姉姌姍姎姏姕姖姙姛姞",4,"姤姦姧姩姪姫姭",11,"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",6,"娳娵娷",4,"娽娾娿婁",4,"婇婈婋",9,"婖婗婘婙婛",5],["8b40","婡婣婤婥婦婨婩婫",8,"婸婹婻婼婽婾媀",17,"媓",6,"媜",13,"媫媬"],["8b80","媭",4,"媴媶媷媹",4,"媿嫀嫃",5,"嫊嫋嫍",4,"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",4,"嫲",22,"嬊",11,"嬘",25,"嬳嬵嬶嬸",7,"孁",6],["8c40","孈",7,"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"],["8c80","寑寔",8,"寠寢寣實寧審",4,"寯寱",6,"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",6,"屰屲",6,"屻屼屽屾岀岃",4,"岉岊岋岎岏岒岓岕岝",4,"岤",4],["8d40","岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",5,"峌",5,"峓",5,"峚",6,"峢峣峧峩峫峬峮峯峱",9,"峼",4],["8d80","崁崄崅崈",5,"崏",4,"崕崗崘崙崚崜崝崟",4,"崥崨崪崫崬崯",4,"崵",7,"崿",7,"嵈嵉嵍",10,"嵙嵚嵜嵞",10,"嵪嵭嵮嵰嵱嵲嵳嵵",12,"嶃",21,"嶚嶛嶜嶞嶟嶠"],["8e40","嶡",21,"嶸",12,"巆",6,"巎",12,"巜巟巠巣巤巪巬巭"],["8e80","巰巵巶巸",4,"巿帀帄帇帉帊帋帍帎帒帓帗帞",7,"帨",4,"帯帰帲",4,"帹帺帾帿幀幁幃幆",5,"幍",6,"幖",4,"幜幝幟幠幣",14,"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",4,"庮",4,"庴庺庻庼庽庿",6],["8f40","廆廇廈廋",5,"廔廕廗廘廙廚廜",11,"廩廫",8,"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"],["8f80","弨弫弬弮弰弲",6,"弻弽弾弿彁",14,"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",5,"復徫徬徯",5,"徶徸徹徺徻徾",4,"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"],["9040","怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",4,"怶",4,"怽怾恀恄",6,"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"],["9080","悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",7,"惇惈惉惌",4,"惒惓惔惖惗惙惛惞惡",4,"惪惱惲惵惷惸惻",4,"愂愃愄愅愇愊愋愌愐",4,"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",18,"慀",6],["9140","慇慉態慍慏慐慒慓慔慖",6,"慞慟慠慡慣慤慥慦慩",6,"慱慲慳慴慶慸",18,"憌憍憏",4,"憕"],["9180","憖",6,"憞",8,"憪憫憭",9,"憸",5,"憿懀懁懃",4,"應懌",4,"懓懕",16,"懧",13,"懶",8,"戀",5,"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",4,"扂扄扅扆扊"],["9240","扏扐払扖扗扙扚扜",6,"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",5,"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"],["9280","拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",5,"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",7,"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",6,"採掤掦掫掯掱掲掵掶掹掻掽掿揀"],["9340","揁揂揃揅揇揈揊揋揌揑揓揔揕揗",6,"揟揢揤",4,"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",4,"損搎搑搒搕",5,"搝搟搢搣搤"],["9380","搥搧搨搩搫搮",5,"搵",4,"搻搼搾摀摂摃摉摋",6,"摓摕摖摗摙",4,"摟",7,"摨摪摫摬摮",9,"摻",6,"撃撆撈",8,"撓撔撗撘撚撛撜撝撟",4,"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",6,"擏擑擓擔擕擖擙據"],["9440","擛擜擝擟擠擡擣擥擧",24,"攁",7,"攊",7,"攓",4,"攙",8],["9480","攢攣攤攦",4,"攬攭攰攱攲攳攷攺攼攽敀",4,"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",14,"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",7,"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",7,"旡旣旤旪旫"],["9540","旲旳旴旵旸旹旻",4,"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",4,"昽昿晀時晄",6,"晍晎晐晑晘"],["9580","晙晛晜晝晞晠晢晣晥晧晩",4,"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",4,"暞",8,"暩",4,"暯",4,"暵暶暷暸暺暻暼暽暿",25,"曚曞",7,"曧曨曪",5,"曱曵曶書曺曻曽朁朂會"],["9640","朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",5,"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",4,"杝杢杣杤杦杧杫杬杮東杴杶"],["9680","杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",7,"柂柅",9,"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",7,"柾栁栂栃栄栆栍栐栒栔栕栘",4,"栞栟栠栢",6,"栫",6,"栴栵栶栺栻栿桇桋桍桏桒桖",5],["9740","桜桝桞桟桪桬",7,"桵桸",8,"梂梄梇",7,"梐梑梒梔梕梖梘",9,"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"],["9780","梹",6,"棁棃",5,"棊棌棎棏棐棑棓棔棖棗棙棛",4,"棡棢棤",9,"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",4,"椌椏椑椓",11,"椡椢椣椥",7,"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",16,"楕楖楘楙楛楜楟"],["9840","楡楢楤楥楧楨楩楪楬業楯楰楲",4,"楺楻楽楾楿榁榃榅榊榋榌榎",5,"榖榗榙榚榝",9,"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"],["9880","榾榿槀槂",7,"構槍槏槑槒槓槕",5,"槜槝槞槡",11,"槮槯槰槱槳",9,"槾樀",9,"樋",11,"標",5,"樠樢",5,"権樫樬樭樮樰樲樳樴樶",6,"樿",4,"橅橆橈",7,"橑",6,"橚"],["9940","橜",4,"橢橣橤橦",10,"橲",6,"橺橻橽橾橿檁檂檃檅",8,"檏檒",4,"檘",7,"檡",5],["9980","檧檨檪檭",114,"欥欦欨",6],["9a40","欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",11,"歚",7,"歨歩歫",13,"歺歽歾歿殀殅殈"],["9a80","殌殎殏殐殑殔殕殗殘殙殜",4,"殢",7,"殫",7,"殶殸",6,"毀毃毄毆",4,"毌毎毐毑毘毚毜",4,"毢",7,"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",6,"氈",4,"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",4,"汑汒汓汖汘"],["9b40","汙汚汢汣汥汦汧汫",4,"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"],["9b80","泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",5,"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",4,"涃涄涆涇涊涋涍涏涐涒涖",4,"涜涢涥涬涭涰涱涳涴涶涷涹",5,"淁淂淃淈淉淊"],["9c40","淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",7,"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"],["9c80","渶渷渹渻",7,"湅",7,"湏湐湑湒湕湗湙湚湜湝湞湠",10,"湬湭湯",14,"満溁溂溄溇溈溊",4,"溑",6,"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",5],["9d40","滰滱滲滳滵滶滷滸滺",7,"漃漄漅漇漈漊",4,"漐漑漒漖",9,"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",6,"漿潀潁潂"],["9d80","潃潄潅潈潉潊潌潎",9,"潙潚潛潝潟潠潡潣潤潥潧",5,"潯潰潱潳潵潶潷潹潻潽",6,"澅澆澇澊澋澏",12,"澝澞澟澠澢",4,"澨",10,"澴澵澷澸澺",5,"濁濃",5,"濊",6,"濓",10,"濟濢濣濤濥"],["9e40","濦",7,"濰",32,"瀒",7,"瀜",6,"瀤",6],["9e80","瀫",9,"瀶瀷瀸瀺",17,"灍灎灐",13,"灟",11,"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",12,"炰炲炴炵炶為炾炿烄烅烆烇烉烋",12,"烚"],["9f40","烜烝烞烠烡烢烣烥烪烮烰",6,"烸烺烻烼烾",10,"焋",4,"焑焒焔焗焛",10,"焧",7,"焲焳焴"],["9f80","焵焷",13,"煆煇煈煉煋煍煏",12,"煝煟",4,"煥煩",4,"煯煰煱煴煵煶煷煹煻煼煾",5,"熅",4,"熋熌熍熎熐熑熒熓熕熖熗熚",4,"熡",6,"熩熪熫熭",5,"熴熶熷熸熺",8,"燄",9,"燏",4],["a040","燖",9,"燡燢燣燤燦燨",5,"燯",9,"燺",11,"爇",19],["a080","爛爜爞",9,"爩爫爭爮爯爲爳爴爺爼爾牀",6,"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",4,"犌犎犐犑犓",11,"犠",11,"犮犱犲犳犵犺",6,"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"],["a1a1","　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",7,"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"],["a2a1","ⅰ",9],["a2b1","⒈",19,"⑴",19,"①",9],["a2e5","㈠",9],["a2f1","Ⅰ",11],["a3a1","！＂＃￥％",88,"￣"],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a6e0","︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"],["a6ee","︻︼︷︸︱"],["a6f4","︳︴"],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a840","ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",35,"▁",6],["a880","█",7,"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"],["a8a1","āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"],["a8bd","ńň"],["a8c0","ɡ"],["a8c5","ㄅ",36],["a940","〡",8,"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"],["a959","℡㈱"],["a95c","‐"],["a960","ー゛゜ヽヾ〆ゝゞ﹉",9,"﹔﹕﹖﹗﹙",8],["a980","﹢",4,"﹨﹩﹪﹫"],["a996","〇"],["a9a4","─",75],["aa40","狜狝狟狢",5,"狪狫狵狶狹狽狾狿猀猂猄",5,"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",8],["aa80","獉獊獋獌獎獏獑獓獔獕獖獘",7,"獡",10,"獮獰獱"],["ab40","獲",11,"獿",4,"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",5,"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",4],["ab80","珋珌珎珒",6,"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",4],["ac40","珸",10,"琄琇琈琋琌琍琎琑",8,"琜",5,"琣琤琧琩琫琭琯琱琲琷",4,"琽琾琿瑀瑂",11],["ac80","瑎",6,"瑖瑘瑝瑠",12,"瑮瑯瑱",4,"瑸瑹瑺"],["ad40","瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",10,"璝璟",7,"璪",15,"璻",12],["ad80","瓈",9,"瓓",8,"瓝瓟瓡瓥瓧",6,"瓰瓱瓲"],["ae40","瓳瓵瓸",6,"甀甁甂甃甅",7,"甎甐甒甔甕甖甗甛甝甞甠",4,"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"],["ae80","畝",7,"畧畨畩畫",6,"畳畵當畷畺",4,"疀疁疂疄疅疇"],["af40","疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",4,"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"],["af80","瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"],["b040","癅",6,"癎",5,"癕癗",4,"癝癟癠癡癢癤",6,"癬癭癮癰",7,"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"],["b080","皜",7,"皥",8,"皯皰皳皵",9,"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"],["b140","盄盇盉盋盌盓盕盙盚盜盝盞盠",4,"盦",7,"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",10,"眛眜眝眞眡眣眤眥眧眪眫"],["b180","眬眮眰",4,"眹眻眽眾眿睂睄睅睆睈",7,"睒",7,"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"],["b240","睝睞睟睠睤睧睩睪睭",11,"睺睻睼瞁瞂瞃瞆",5,"瞏瞐瞓",11,"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",4],["b280","瞼瞾矀",12,"矎",8,"矘矙矚矝",4,"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"],["b340","矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",5,"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"],["b380","硛硜硞",11,"硯",7,"硸硹硺硻硽",6,"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"],["b440","碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",7,"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",9],["b480","磤磥磦磧磩磪磫磭",4,"磳磵磶磸磹磻",5,"礂礃礄礆",6,"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"],["b540","礍",5,"礔",9,"礟",4,"礥",14,"礵",4,"礽礿祂祃祄祅祇祊",8,"祔祕祘祙祡祣"],["b580","祤祦祩祪祫祬祮祰",6,"祹祻",4,"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"],["b640","禓",6,"禛",11,"禨",10,"禴",4,"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",5,"秠秡秢秥秨秪"],["b680","秬秮秱",6,"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",4,"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"],["b740","稝稟稡稢稤",14,"稴稵稶稸稺稾穀",5,"穇",9,"穒",4,"穘",16],["b780","穩",6,"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"],["b840","窣窤窧窩窪窫窮",4,"窴",10,"竀",10,"竌",9,"竗竘竚竛竜竝竡竢竤竧",5,"竮竰竱竲竳"],["b880","竴",4,"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"],["b940","笯笰笲笴笵笶笷笹笻笽笿",5,"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",10,"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",6,"箎箏"],["b980","箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",7,"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"],["ba40","篅篈築篊篋篍篎篏篐篒篔",4,"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",4,"篸篹篺篻篽篿",7,"簈簉簊簍簎簐",5,"簗簘簙"],["ba80","簚",4,"簠",5,"簨簩簫",12,"簹",5,"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"],["bb40","籃",9,"籎",36,"籵",5,"籾",9],["bb80","粈粊",6,"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",4,"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"],["bc40","粿糀糂糃糄糆糉糋糎",6,"糘糚糛糝糞糡",6,"糩",5,"糰",7,"糹糺糼",13,"紋",5],["bc80","紑",14,"紡紣紤紥紦紨紩紪紬紭紮細",6,"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"],["bd40","紷",54,"絯",7],["bd80","絸",32,"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"],["be40","継",12,"綧",6,"綯",42],["be80","線",32,"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"],["bf40","緻",62],["bf80","縺縼",4,"繂",4,"繈",21,"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"],["c040","繞",35,"纃",23,"纜纝纞"],["c080","纮纴纻纼绖绤绬绹缊缐缞缷缹缻",6,"罃罆",9,"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"],["c140","罖罙罛罜罝罞罠罣",4,"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",7,"羋羍羏",4,"羕",4,"羛羜羠羢羣羥羦羨",6,"羱"],["c180","羳",4,"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",4,"翖翗翙",5,"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"],["c240","翤翧翨翪翫翬翭翯翲翴",6,"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",5,"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"],["c280","聙聛",13,"聫",5,"聲",11,"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"],["c340","聾肁肂肅肈肊肍",5,"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",4,"胏",6,"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"],["c380","脌脕脗脙脛脜脝脟",12,"脭脮脰脳脴脵脷脹",4,"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"],["c440","腀",5,"腇腉腍腎腏腒腖腗腘腛",4,"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",4,"膉膋膌膍膎膐膒",5,"膙膚膞",4,"膤膥"],["c480","膧膩膫",7,"膴",5,"膼膽膾膿臄臅臇臈臉臋臍",6,"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"],["c540","臔",14,"臤臥臦臨臩臫臮",4,"臵",5,"臽臿舃與",4,"舎舏舑舓舕",5,"舝舠舤舥舦舧舩舮舲舺舼舽舿"],["c580","艀艁艂艃艅艆艈艊艌艍艎艐",7,"艙艛艜艝艞艠",7,"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"],["c640","艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"],["c680","苺苼",4,"茊茋茍茐茒茓茖茘茙茝",9,"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"],["c740","茾茿荁荂荄荅荈荊",4,"荓荕",4,"荝荢荰",6,"荹荺荾",6,"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",6,"莬莭莮"],["c780","莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"],["c840","菮華菳",4,"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",5,"萙萚萛萞",5,"萩",7,"萲",5,"萹萺萻萾",7,"葇葈葉"],["c880","葊",6,"葒",4,"葘葝葞葟葠葢葤",4,"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"],["c940","葽",4,"蒃蒄蒅蒆蒊蒍蒏",7,"蒘蒚蒛蒝蒞蒟蒠蒢",12,"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"],["c980","蓘",4,"蓞蓡蓢蓤蓧",4,"蓭蓮蓯蓱",10,"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"],["ca40","蔃",8,"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",8,"蔭",9,"蔾",4,"蕄蕅蕆蕇蕋",10],["ca80","蕗蕘蕚蕛蕜蕝蕟",4,"蕥蕦蕧蕩",8,"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"],["cb40","薂薃薆薈",6,"薐",10,"薝",6,"薥薦薧薩薫薬薭薱",5,"薸薺",6,"藂",6,"藊",4,"藑藒"],["cb80","藔藖",5,"藝",6,"藥藦藧藨藪",14,"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"],["cc40","藹藺藼藽藾蘀",4,"蘆",10,"蘒蘓蘔蘕蘗",15,"蘨蘪",13,"蘹蘺蘻蘽蘾蘿虀"],["cc80","虁",11,"虒虓處",4,"虛虜虝號虠虡虣",7,"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"],["cd40","虭虯虰虲",6,"蚃",6,"蚎",4,"蚔蚖",5,"蚞",4,"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",4,"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"],["cd80","蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"],["ce40","蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",6,"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",5,"蝡蝢蝦",7,"蝯蝱蝲蝳蝵"],["ce80","蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",4,"螔螕螖螘",6,"螠",4,"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"],["cf40","螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",4,"蟇蟈蟉蟌",4,"蟔",6,"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",9],["cf80","蟺蟻蟼蟽蟿蠀蠁蠂蠄",5,"蠋",7,"蠔蠗蠘蠙蠚蠜",4,"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"],["d040","蠤",13,"蠳",5,"蠺蠻蠽蠾蠿衁衂衃衆",5,"衎",5,"衕衖衘衚",6,"衦衧衪衭衯衱衳衴衵衶衸衹衺"],["d080","衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",4,"袝",4,"袣袥",5,"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"],["d140","袬袮袯袰袲",4,"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",4,"裠裡裦裧裩",6,"裲裵裶裷裺裻製裿褀褁褃",5],["d180","褉褋",4,"褑褔",4,"褜",4,"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"],["d240","褸",8,"襂襃襅",24,"襠",5,"襧",19,"襼"],["d280","襽襾覀覂覄覅覇",26,"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"],["d340","覢",30,"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",6],["d380","觻",4,"訁",5,"計",21,"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"],["d440","訞",31,"訿",8,"詉",21],["d480","詟",25,"詺",6,"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"],["d540","誁",7,"誋",7,"誔",46],["d580","諃",32,"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"],["d640","諤",34,"謈",27],["d680","謤謥謧",30,"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"],["d740","譆",31,"譧",4,"譭",25],["d780","讇",24,"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"],["d840","谸",8,"豂豃豄豅豈豊豋豍",7,"豖豗豘豙豛",5,"豣",6,"豬",6,"豴豵豶豷豻",6,"貃貄貆貇"],["d880","貈貋貍",6,"貕貖貗貙",20,"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"],["d940","貮",62],["d980","賭",32,"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"],["da40","贎",14,"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",8,"趂趃趆趇趈趉趌",4,"趒趓趕",9,"趠趡"],["da80","趢趤",12,"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"],["db40","跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",6,"踆踇踈踋踍踎踐踑踒踓踕",7,"踠踡踤",4,"踫踭踰踲踳踴踶踷踸踻踼踾"],["db80","踿蹃蹅蹆蹌",4,"蹓",5,"蹚",11,"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"],["dc40","蹳蹵蹷",4,"蹽蹾躀躂躃躄躆躈",6,"躑躒躓躕",6,"躝躟",11,"躭躮躰躱躳",6,"躻",7],["dc80","軃",10,"軏",21,"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"],["dd40","軥",62],["dd80","輤",32,"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"],["de40","轅",32,"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"],["de80","迉",4,"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"],["df40","這逜連逤逥逧",5,"逰",4,"逷逹逺逽逿遀遃遅遆遈",4,"過達違遖遙遚遜",5,"遤遦遧適遪遫遬遯",4,"遶",6,"遾邁"],["df80","還邅邆邇邉邊邌",4,"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"],["e040","郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",19,"鄚鄛鄜"],["e080","鄝鄟鄠鄡鄤",10,"鄰鄲",6,"鄺",8,"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"],["e140","酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",4,"醆醈醊醎醏醓",6,"醜",5,"醤",5,"醫醬醰醱醲醳醶醷醸醹醻"],["e180","醼",10,"釈釋釐釒",9,"針",8,"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"],["e240","釦",62],["e280","鈥",32,"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",5,"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"],["e340","鉆",45,"鉵",16],["e380","銆",7,"銏",24,"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"],["e440","銨",5,"銯",24,"鋉",31],["e480","鋩",32,"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"],["e540","錊",51,"錿",10],["e580","鍊",31,"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"],["e640","鍬",34,"鎐",27],["e680","鎬",29,"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"],["e740","鏎",7,"鏗",54],["e780","鐎",32,"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",6,"缪缫缬缭缯",4,"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"],["e840","鐯",14,"鐿",43,"鑬鑭鑮鑯"],["e880","鑰",20,"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"],["e940","锧锳锽镃镈镋镕镚镠镮镴镵長",7,"門",42],["e980","閫",32,"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"],["ea40","闌",27,"闬闿阇阓阘阛阞阠阣",6,"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"],["ea80","陘陙陚陜陝陞陠陣陥陦陫陭",4,"陳陸",12,"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"],["eb40","隌階隑隒隓隕隖隚際隝",9,"隨",7,"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",9,"雡",6,"雫"],["eb80","雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",4,"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"],["ec40","霡",8,"霫霬霮霯霱霳",4,"霺霻霼霽霿",18,"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",7],["ec80","靲靵靷",4,"靽",7,"鞆",4,"鞌鞎鞏鞐鞓鞕鞖鞗鞙",4,"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"],["ed40","鞞鞟鞡鞢鞤",6,"鞬鞮鞰鞱鞳鞵",46],["ed80","韤韥韨韮",4,"韴韷",23,"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"],["ee40","頏",62],["ee80","顎",32,"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",4,"钼钽钿铄铈",6,"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"],["ef40","顯",5,"颋颎颒颕颙颣風",37,"飏飐飔飖飗飛飜飝飠",4],["ef80","飥飦飩",30,"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",4,"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",8,"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"],["f040","餈",4,"餎餏餑",28,"餯",26],["f080","饊",9,"饖",12,"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",4,"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",6,"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"],["f140","馌馎馚",10,"馦馧馩",47],["f180","駙",32,"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"],["f240","駺",62],["f280","騹",32,"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"],["f340","驚",17,"驲骃骉骍骎骔骕骙骦骩",6,"骲骳骴骵骹骻骽骾骿髃髄髆",4,"髍髎髏髐髒體髕髖髗髙髚髛髜"],["f380","髝髞髠髢髣髤髥髧髨髩髪髬髮髰",8,"髺髼",6,"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"],["f440","鬇鬉",5,"鬐鬑鬒鬔",10,"鬠鬡鬢鬤",10,"鬰鬱鬳",7,"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",5],["f480","魛",32,"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"],["f540","魼",62],["f580","鮻",32,"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"],["f640","鯜",62],["f680","鰛",32,"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",5,"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",5,"鲥",4,"鲫鲭鲮鲰",7,"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"],["f740","鰼",62],["f780","鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",4,"鳈鳉鳑鳒鳚鳛鳠鳡鳌",4,"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"],["f840","鳣",62],["f880","鴢",32],["f940","鵃",62],["f980","鶂",32],["fa40","鶣",62],["fa80","鷢",32],["fb40","鸃",27,"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",9,"麀"],["fb80","麁麃麄麅麆麉麊麌",5,"麔",8,"麞麠",5,"麧麨麩麪"],["fc40","麫",8,"麵麶麷麹麺麼麿",4,"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",8,"黺黽黿",6],["fc80","鼆",4,"鼌鼏鼑鼒鼔鼕鼖鼘鼚",5,"鼡鼣",8,"鼭鼮鼰鼱"],["fd40","鼲",4,"鼸鼺鼼鼿",4,"齅",10,"齒",38],["fd80","齹",5,"龁龂龍",11,"龜龝龞龡",4,"郎凉秊裏隣"],["fe40","兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"]]},function(t,e){t.exports=[["a140","",62],["a180","",32],["a240","",62],["a280","",32],["a2ab","",5],["a2e3","€"],["a2ef",""],["a2fd",""],["a340","",62],["a380","",31,"　"],["a440","",62],["a480","",32],["a4f4","",10],["a540","",62],["a580","",32],["a5f7","",7],["a640","",62],["a680","",32],["a6b9","",7],["a6d9","",6],["a6ec",""],["a6f3",""],["a6f6","",8],["a740","",62],["a780","",32],["a7c2","",14],["a7f2","",12],["a896","",10],["a8bc",""],["a8bf","ǹ"],["a8c1",""],["a8ea","",20],["a958",""],["a95b",""],["a95d",""],["a989","〾⿰",11],["a997","",12],["a9f0","",14],["aaa1","",93],["aba1","",93],["aca1","",93],["ada1","",93],["aea1","",93],["afa1","",93],["d7fa","",4],["f8a1","",93],["f9a1","",93],["faa1","",93],["fba1","",93],["fca1","",93],["fda1","",93],["fe50","⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"],["fe80","䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",6,"䶮",93]]},function(t,e){t.exports={uChars:[128,165,169,178,184,216,226,235,238,244,248,251,253,258,276,284,300,325,329,334,364,463,465,467,469,471,473,475,477,506,594,610,712,716,730,930,938,962,970,1026,1104,1106,8209,8215,8218,8222,8231,8241,8244,8246,8252,8365,8452,8454,8458,8471,8482,8556,8570,8596,8602,8713,8720,8722,8726,8731,8737,8740,8742,8748,8751,8760,8766,8777,8781,8787,8802,8808,8816,8854,8858,8870,8896,8979,9322,9372,9548,9588,9616,9622,9634,9652,9662,9672,9676,9680,9702,9735,9738,9793,9795,11906,11909,11913,11917,11928,11944,11947,11951,11956,11960,11964,11979,12284,12292,12312,12319,12330,12351,12436,12447,12535,12543,12586,12842,12850,12964,13200,13215,13218,13253,13263,13267,13270,13384,13428,13727,13839,13851,14617,14703,14801,14816,14964,15183,15471,15585,16471,16736,17208,17325,17330,17374,17623,17997,18018,18212,18218,18301,18318,18760,18811,18814,18820,18823,18844,18848,18872,19576,19620,19738,19887,40870,59244,59336,59367,59413,59417,59423,59431,59437,59443,59452,59460,59478,59493,63789,63866,63894,63976,63986,64016,64018,64021,64025,64034,64037,64042,65074,65093,65107,65112,65127,65132,65375,65510,65536],gbChars:[0,36,38,45,50,81,89,95,96,100,103,104,105,109,126,133,148,172,175,179,208,306,307,308,309,310,311,312,313,341,428,443,544,545,558,741,742,749,750,805,819,820,7922,7924,7925,7927,7934,7943,7944,7945,7950,8062,8148,8149,8152,8164,8174,8236,8240,8262,8264,8374,8380,8381,8384,8388,8390,8392,8393,8394,8396,8401,8406,8416,8419,8424,8437,8439,8445,8482,8485,8496,8521,8603,8936,8946,9046,9050,9063,9066,9076,9092,9100,9108,9111,9113,9131,9162,9164,9218,9219,11329,11331,11334,11336,11346,11361,11363,11366,11370,11372,11375,11389,11682,11686,11687,11692,11694,11714,11716,11723,11725,11730,11736,11982,11989,12102,12336,12348,12350,12384,12393,12395,12397,12510,12553,12851,12962,12973,13738,13823,13919,13933,14080,14298,14585,14698,15583,15847,16318,16434,16438,16481,16729,17102,17122,17315,17320,17402,17418,17859,17909,17911,17915,17916,17936,17939,17961,18664,18703,18814,18962,19043,33469,33470,33471,33484,33485,33490,33497,33501,33505,33513,33520,33536,33550,37845,37921,37948,38029,38038,38064,38065,38066,38069,38075,38076,38078,39108,39109,39113,39114,39115,39116,39265,39394,189e3]}},function(t,e){t.exports=[["0","\0",127],["8141","갂갃갅갆갋",4,"갘갞갟갡갢갣갥",6,"갮갲갳갴"],["8161","갵갶갷갺갻갽갾갿걁",9,"걌걎",5,"걕"],["8181","걖걗걙걚걛걝",18,"걲걳걵걶걹걻",4,"겂겇겈겍겎겏겑겒겓겕",6,"겞겢",5,"겫겭겮겱",6,"겺겾겿곀곂곃곅곆곇곉곊곋곍",7,"곖곘",7,"곢곣곥곦곩곫곭곮곲곴곷",4,"곾곿괁괂괃괅괇",4,"괎괐괒괓"],["8241","괔괕괖괗괙괚괛괝괞괟괡",7,"괪괫괮",5],["8261","괶괷괹괺괻괽",6,"굆굈굊",5,"굑굒굓굕굖굗"],["8281","굙",7,"굢굤",7,"굮굯굱굲굷굸굹굺굾궀궃",4,"궊궋궍궎궏궑",10,"궞",5,"궥",17,"궸",7,"귂귃귅귆귇귉",6,"귒귔",7,"귝귞귟귡귢귣귥",18],["8341","귺귻귽귾긂",5,"긊긌긎",5,"긕",7],["8361","긝",18,"긲긳긵긶긹긻긼"],["8381","긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",4,"깞깢깣깤깦깧깪깫깭깮깯깱",6,"깺깾",5,"꺆",5,"꺍",46,"꺿껁껂껃껅",6,"껎껒",5,"껚껛껝",8],["8441","껦껧껩껪껬껮",5,"껵껶껷껹껺껻껽",8],["8461","꼆꼉꼊꼋꼌꼎꼏꼑",18],["8481","꼤",7,"꼮꼯꼱꼳꼵",6,"꼾꽀꽄꽅꽆꽇꽊",5,"꽑",10,"꽞",5,"꽦",18,"꽺",5,"꾁꾂꾃꾅꾆꾇꾉",6,"꾒꾓꾔꾖",5,"꾝",26,"꾺꾻꾽꾾"],["8541","꾿꿁",5,"꿊꿌꿏",4,"꿕",6,"꿝",4],["8561","꿢",5,"꿪",5,"꿲꿳꿵꿶꿷꿹",6,"뀂뀃"],["8581","뀅",6,"뀍뀎뀏뀑뀒뀓뀕",6,"뀞",9,"뀩",26,"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",29,"끾끿낁낂낃낅",6,"낎낐낒",5,"낛낝낞낣낤"],["8641","낥낦낧낪낰낲낶낷낹낺낻낽",6,"냆냊",5,"냒"],["8661","냓냕냖냗냙",6,"냡냢냣냤냦",10],["8681","냱",22,"넊넍넎넏넑넔넕넖넗넚넞",4,"넦넧넩넪넫넭",6,"넶넺",5,"녂녃녅녆녇녉",6,"녒녓녖녗녙녚녛녝녞녟녡",22,"녺녻녽녾녿놁놃",4,"놊놌놎놏놐놑놕놖놗놙놚놛놝"],["8741","놞",9,"놩",15],["8761","놹",18,"뇍뇎뇏뇑뇒뇓뇕"],["8781","뇖",5,"뇞뇠",7,"뇪뇫뇭뇮뇯뇱",7,"뇺뇼뇾",5,"눆눇눉눊눍",6,"눖눘눚",5,"눡",18,"눵",6,"눽",26,"뉙뉚뉛뉝뉞뉟뉡",6,"뉪",4],["8841","뉯",4,"뉶",5,"뉽",6,"늆늇늈늊",4],["8861","늏늒늓늕늖늗늛",4,"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"],["8881","늸",15,"닊닋닍닎닏닑닓",4,"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",6,"댒댖",5,"댝",54,"덗덙덚덝덠덡덢덣"],["8941","덦덨덪덬덭덯덲덳덵덶덷덹",6,"뎂뎆",5,"뎍"],["8961","뎎뎏뎑뎒뎓뎕",10,"뎢",5,"뎩뎪뎫뎭"],["8981","뎮",21,"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",18,"돽",18,"됑",6,"됙됚됛됝됞됟됡",6,"됪됬",7,"됵",15],["8a41","둅",10,"둒둓둕둖둗둙",6,"둢둤둦"],["8a61","둧",4,"둭",18,"뒁뒂"],["8a81","뒃",4,"뒉",19,"뒞",5,"뒥뒦뒧뒩뒪뒫뒭",7,"뒶뒸뒺",5,"듁듂듃듅듆듇듉",6,"듑듒듓듔듖",5,"듞듟듡듢듥듧",4,"듮듰듲",5,"듹",26,"딖딗딙딚딝"],["8b41","딞",5,"딦딫",4,"딲딳딵딶딷딹",6,"땂땆"],["8b61","땇땈땉땊땎땏땑땒땓땕",6,"땞땢",8],["8b81","땫",52,"떢떣떥떦떧떩떬떭떮떯떲떶",4,"떾떿뗁뗂뗃뗅",6,"뗎뗒",5,"뗙",18,"뗭",18],["8c41","똀",15,"똒똓똕똖똗똙",4],["8c61","똞",6,"똦",5,"똭",6,"똵",5],["8c81","똻",12,"뙉",26,"뙥뙦뙧뙩",50,"뚞뚟뚡뚢뚣뚥",5,"뚭뚮뚯뚰뚲",16],["8d41","뛃",16,"뛕",8],["8d61","뛞",17,"뛱뛲뛳뛵뛶뛷뛹뛺"],["8d81","뛻",4,"뜂뜃뜄뜆",33,"뜪뜫뜭뜮뜱",6,"뜺뜼",7,"띅띆띇띉띊띋띍",6,"띖",9,"띡띢띣띥띦띧띩",6,"띲띴띶",5,"띾띿랁랂랃랅",6,"랎랓랔랕랚랛랝랞"],["8e41","랟랡",6,"랪랮",5,"랶랷랹",8],["8e61","럂",4,"럈럊",19],["8e81","럞",13,"럮럯럱럲럳럵",6,"럾렂",4,"렊렋렍렎렏렑",6,"렚렜렞",5,"렦렧렩렪렫렭",6,"렶렺",5,"롁롂롃롅",11,"롒롔",7,"롞롟롡롢롣롥",6,"롮롰롲",5,"롹롺롻롽",7],["8f41","뢅",7,"뢎",17],["8f61","뢠",7,"뢩",6,"뢱뢲뢳뢵뢶뢷뢹",4],["8f81","뢾뢿룂룄룆",5,"룍룎룏룑룒룓룕",7,"룞룠룢",5,"룪룫룭룮룯룱",6,"룺룼룾",5,"뤅",18,"뤙",6,"뤡",26,"뤾뤿륁륂륃륅",6,"륍륎륐륒",5],["9041","륚륛륝륞륟륡",6,"륪륬륮",5,"륶륷륹륺륻륽"],["9061","륾",5,"릆릈릋릌릏",15],["9081","릟",12,"릮릯릱릲릳릵",6,"릾맀맂",5,"맊맋맍맓",4,"맚맜맟맠맢맦맧맩맪맫맭",6,"맶맻",4,"먂",5,"먉",11,"먖",33,"먺먻먽먾먿멁멃멄멅멆"],["9141","멇멊멌멏멐멑멒멖멗멙멚멛멝",6,"멦멪",5],["9161","멲멳멵멶멷멹",9,"몆몈몉몊몋몍",5],["9181","몓",20,"몪몭몮몯몱몳",4,"몺몼몾",5,"뫅뫆뫇뫉",14,"뫚",33,"뫽뫾뫿묁묂묃묅",7,"묎묐묒",5,"묙묚묛묝묞묟묡",6],["9241","묨묪묬",7,"묷묹묺묿",4,"뭆뭈뭊뭋뭌뭎뭑뭒"],["9261","뭓뭕뭖뭗뭙",7,"뭢뭤",7,"뭭",4],["9281","뭲",21,"뮉뮊뮋뮍뮎뮏뮑",18,"뮥뮦뮧뮩뮪뮫뮭",6,"뮵뮶뮸",7,"믁믂믃믅믆믇믉",6,"믑믒믔",35,"믺믻믽믾밁"],["9341","밃",4,"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"],["9361","밶밷밹",6,"뱂뱆뱇뱈뱊뱋뱎뱏뱑",8],["9381","뱚뱛뱜뱞",37,"벆벇벉벊벍벏",4,"벖벘벛",4,"벢벣벥벦벩",6,"벲벶",5,"벾벿볁볂볃볅",7,"볎볒볓볔볖볗볙볚볛볝",22,"볷볹볺볻볽"],["9441","볾",5,"봆봈봊",5,"봑봒봓봕",8],["9461","봞",5,"봥",6,"봭",12],["9481","봺",5,"뵁",6,"뵊뵋뵍뵎뵏뵑",6,"뵚",9,"뵥뵦뵧뵩",22,"붂붃붅붆붋",4,"붒붔붖붗붘붛붝",6,"붥",10,"붱",6,"붹",24],["9541","뷒뷓뷖뷗뷙뷚뷛뷝",11,"뷪",5,"뷱"],["9561","뷲뷳뷵뷶뷷뷹",6,"븁븂븄븆",5,"븎븏븑븒븓"],["9581","븕",6,"븞븠",35,"빆빇빉빊빋빍빏",4,"빖빘빜빝빞빟빢빣빥빦빧빩빫",4,"빲빶",4,"빾빿뺁뺂뺃뺅",6,"뺎뺒",5,"뺚",13,"뺩",14],["9641","뺸",23,"뻒뻓"],["9661","뻕뻖뻙",6,"뻡뻢뻦",5,"뻭",8],["9681","뻶",10,"뼂",5,"뼊",13,"뼚뼞",33,"뽂뽃뽅뽆뽇뽉",6,"뽒뽓뽔뽖",44],["9741","뾃",16,"뾕",8],["9761","뾞",17,"뾱",7],["9781","뾹",11,"뿆",5,"뿎뿏뿑뿒뿓뿕",6,"뿝뿞뿠뿢",89,"쀽쀾쀿"],["9841","쁀",16,"쁒",5,"쁙쁚쁛"],["9861","쁝쁞쁟쁡",6,"쁪",15],["9881","쁺",21,"삒삓삕삖삗삙",6,"삢삤삦",5,"삮삱삲삷",4,"삾샂샃샄샆샇샊샋샍샎샏샑",6,"샚샞",5,"샦샧샩샪샫샭",6,"샶샸샺",5,"섁섂섃섅섆섇섉",6,"섑섒섓섔섖",5,"섡섢섥섨섩섪섫섮"],["9941","섲섳섴섵섷섺섻섽섾섿셁",6,"셊셎",5,"셖셗"],["9961","셙셚셛셝",6,"셦셪",5,"셱셲셳셵셶셷셹셺셻"],["9981","셼",8,"솆",5,"솏솑솒솓솕솗",4,"솞솠솢솣솤솦솧솪솫솭솮솯솱",11,"솾",5,"쇅쇆쇇쇉쇊쇋쇍",6,"쇕쇖쇙",6,"쇡쇢쇣쇥쇦쇧쇩",6,"쇲쇴",7,"쇾쇿숁숂숃숅",6,"숎숐숒",5,"숚숛숝숞숡숢숣"],["9a41","숤숥숦숧숪숬숮숰숳숵",16],["9a61","쉆쉇쉉",6,"쉒쉓쉕쉖쉗쉙",6,"쉡쉢쉣쉤쉦"],["9a81","쉧",4,"쉮쉯쉱쉲쉳쉵",6,"쉾슀슂",5,"슊",5,"슑",6,"슙슚슜슞",5,"슦슧슩슪슫슮",5,"슶슸슺",33,"싞싟싡싢싥",5,"싮싰싲싳싴싵싷싺싽싾싿쌁",6,"쌊쌋쌎쌏"],["9b41","쌐쌑쌒쌖쌗쌙쌚쌛쌝",6,"쌦쌧쌪",8],["9b61","쌳",17,"썆",7],["9b81","썎",25,"썪썫썭썮썯썱썳",4,"썺썻썾",5,"쎅쎆쎇쎉쎊쎋쎍",50,"쏁",22,"쏚"],["9c41","쏛쏝쏞쏡쏣",4,"쏪쏫쏬쏮",5,"쏶쏷쏹",5],["9c61","쏿",8,"쐉",6,"쐑",9],["9c81","쐛",8,"쐥",6,"쐭쐮쐯쐱쐲쐳쐵",6,"쐾",9,"쑉",26,"쑦쑧쑩쑪쑫쑭",6,"쑶쑷쑸쑺",5,"쒁",18,"쒕",6,"쒝",12],["9d41","쒪",13,"쒹쒺쒻쒽",8],["9d61","쓆",25],["9d81","쓠",8,"쓪",5,"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",9,"씍씎씏씑씒씓씕",6,"씝",10,"씪씫씭씮씯씱",6,"씺씼씾",5,"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",6,"앲앶",5,"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"],["9e41","얖얙얚얛얝얞얟얡",7,"얪",9,"얶"],["9e61","얷얺얿",4,"엋엍엏엒엓엕엖엗엙",6,"엢엤엦엧"],["9e81","엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",6,"옚옝",6,"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",6,"왒왖",5,"왞왟왡",10,"왭왮왰왲",5,"왺왻왽왾왿욁",6,"욊욌욎",5,"욖욗욙욚욛욝",6,"욦"],["9f41","욨욪",5,"욲욳욵욶욷욻",4,"웂웄웆",5,"웎"],["9f61","웏웑웒웓웕",6,"웞웟웢",5,"웪웫웭웮웯웱웲"],["9f81","웳",4,"웺웻웼웾",5,"윆윇윉윊윋윍",6,"윖윘윚",5,"윢윣윥윦윧윩",6,"윲윴윶윸윹윺윻윾윿읁읂읃읅",4,"읋읎읐읙읚읛읝읞읟읡",6,"읩읪읬",7,"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",4,"잢잧",4,"잮잯잱잲잳잵잶잷"],["a041","잸잹잺잻잾쟂",5,"쟊쟋쟍쟏쟑",6,"쟙쟚쟛쟜"],["a061","쟞",5,"쟥쟦쟧쟩쟪쟫쟭",13],["a081","쟻",4,"젂젃젅젆젇젉젋",4,"젒젔젗",4,"젞젟젡젢젣젥",6,"젮젰젲",5,"젹젺젻젽젾젿졁",6,"졊졋졎",5,"졕",26,"졲졳졵졶졷졹졻",4,"좂좄좈좉좊좎",5,"좕",7,"좞좠좢좣좤"],["a141","좥좦좧좩",18,"좾좿죀죁"],["a161","죂죃죅죆죇죉죊죋죍",6,"죖죘죚",5,"죢죣죥"],["a181","죦",14,"죶",5,"죾죿줁줂줃줇",4,"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",9,"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"],["a241","줐줒",5,"줙",18],["a261","줭",6,"줵",18],["a281","쥈",7,"쥒쥓쥕쥖쥗쥙",6,"쥢쥤",7,"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"],["a341","쥱쥲쥳쥵",6,"쥽",10,"즊즋즍즎즏"],["a361","즑",6,"즚즜즞",16],["a381","즯",16,"짂짃짅짆짉짋",4,"짒짔짗짘짛！",58,"￦］",32,"￣"],["a441","짞짟짡짣짥짦짨짩짪짫짮짲",5,"짺짻짽짾짿쨁쨂쨃쨄"],["a461","쨅쨆쨇쨊쨎",5,"쨕쨖쨗쨙",12],["a481","쨦쨧쨨쨪",28,"ㄱ",93],["a541","쩇",4,"쩎쩏쩑쩒쩓쩕",6,"쩞쩢",5,"쩩쩪"],["a561","쩫",17,"쩾",5,"쪅쪆"],["a581","쪇",16,"쪙",14,"ⅰ",9],["a5b0","Ⅰ",9],["a5c1","Α",16,"Σ",6],["a5e1","α",16,"σ",6],["a641","쪨",19,"쪾쪿쫁쫂쫃쫅"],["a661","쫆",5,"쫎쫐쫒쫔쫕쫖쫗쫚",5,"쫡",6],["a681","쫨쫩쫪쫫쫭",6,"쫵",18,"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",7],["a741","쬋",4,"쬑쬒쬓쬕쬖쬗쬙",6,"쬢",7],["a761","쬪",22,"쭂쭃쭄"],["a781","쭅쭆쭇쭊쭋쭍쭎쭏쭑",6,"쭚쭛쭜쭞",5,"쭥",7,"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",9,"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",9,"㎀",4,"㎺",5,"㎐",4,"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"],["a841","쭭",10,"쭺",14],["a861","쮉",18,"쮝",6],["a881","쮤",19,"쮹",11,"ÆÐªĦ"],["a8a6","Ĳ"],["a8a8","ĿŁØŒºÞŦŊ"],["a8b1","㉠",27,"ⓐ",25,"①",14,"½⅓⅔¼¾⅛⅜⅝⅞"],["a941","쯅",14,"쯕",10],["a961","쯠쯡쯢쯣쯥쯦쯨쯪",18],["a981","쯽",14,"찎찏찑찒찓찕",6,"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",27,"⒜",25,"⑴",14,"¹²³⁴ⁿ₁₂₃₄"],["aa41","찥찦찪찫찭찯찱",6,"찺찿",4,"챆챇챉챊챋챍챎"],["aa61","챏",4,"챖챚",5,"챡챢챣챥챧챩",6,"챱챲"],["aa81","챳챴챶",29,"ぁ",82],["ab41","첔첕첖첗첚첛첝첞첟첡",6,"첪첮",5,"첶첷첹"],["ab61","첺첻첽",6,"쳆쳈쳊",5,"쳑쳒쳓쳕",5],["ab81","쳛",8,"쳥",6,"쳭쳮쳯쳱",12,"ァ",85],["ac41","쳾쳿촀촂",5,"촊촋촍촎촏촑",6,"촚촜촞촟촠"],["ac61","촡촢촣촥촦촧촩촪촫촭",11,"촺",4],["ac81","촿",28,"쵝쵞쵟А",5,"ЁЖ",25],["acd1","а",5,"ёж",25],["ad41","쵡쵢쵣쵥",6,"쵮쵰쵲",5,"쵹",7],["ad61","춁",6,"춉",10,"춖춗춙춚춛춝춞춟"],["ad81","춠춡춢춣춦춨춪",5,"춱",18,"췅"],["ae41","췆",5,"췍췎췏췑",16],["ae61","췢",5,"췩췪췫췭췮췯췱",6,"췺췼췾",4],["ae81","츃츅츆츇츉츊츋츍",6,"츕츖츗츘츚",5,"츢츣츥츦츧츩츪츫"],["af41","츬츭츮츯츲츴츶",19],["af61","칊",13,"칚칛칝칞칢",5,"칪칬"],["af81","칮",5,"칶칷칹칺칻칽",6,"캆캈캊",5,"캒캓캕캖캗캙"],["b041","캚",5,"캢캦",5,"캮",12],["b061","캻",5,"컂",19],["b081","컖",13,"컦컧컩컪컭",6,"컶컺",5,"가각간갇갈갉갊감",7,"같",4,"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"],["b141","켂켃켅켆켇켉",6,"켒켔켖",5,"켝켞켟켡켢켣"],["b161","켥",6,"켮켲",5,"켹",11],["b181","콅",14,"콖콗콙콚콛콝",6,"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"],["b241","콭콮콯콲콳콵콶콷콹",6,"쾁쾂쾃쾄쾆",5,"쾍"],["b261","쾎",18,"쾢",5,"쾩"],["b281","쾪",5,"쾱",18,"쿅",6,"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"],["b341","쿌",19,"쿢쿣쿥쿦쿧쿩"],["b361","쿪",5,"쿲쿴쿶",5,"쿽쿾쿿퀁퀂퀃퀅",5],["b381","퀋",5,"퀒",5,"퀙",19,"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",4,"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"],["b441","퀮",5,"퀶퀷퀹퀺퀻퀽",6,"큆큈큊",5],["b461","큑큒큓큕큖큗큙",6,"큡",10,"큮큯"],["b481","큱큲큳큵",6,"큾큿킀킂",18,"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",4,"닳담답닷",4,"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"],["b541","킕",14,"킦킧킩킪킫킭",5],["b561","킳킶킸킺",5,"탂탃탅탆탇탊",5,"탒탖",4],["b581","탛탞탟탡탢탣탥",6,"탮탲",5,"탹",11,"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"],["b641","턅",7,"턎",17],["b661","턠",15,"턲턳턵턶턷턹턻턼턽턾"],["b681","턿텂텆",5,"텎텏텑텒텓텕",6,"텞텠텢",5,"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"],["b741","텮",13,"텽",6,"톅톆톇톉톊"],["b761","톋",20,"톢톣톥톦톧"],["b781","톩",6,"톲톴톶톷톸톹톻톽톾톿퇁",14,"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"],["b841","퇐",7,"퇙",17],["b861","퇫",8,"퇵퇶퇷퇹",13],["b881","툈툊",5,"툑",24,"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",4,"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"],["b941","툪툫툮툯툱툲툳툵",6,"툾퉀퉂",5,"퉉퉊퉋퉌"],["b961","퉍",14,"퉝",6,"퉥퉦퉧퉨"],["b981","퉩",22,"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",4,"받",4,"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"],["ba41","튍튎튏튒튓튔튖",5,"튝튞튟튡튢튣튥",6,"튭"],["ba61","튮튯튰튲",5,"튺튻튽튾틁틃",4,"틊틌",5],["ba81","틒틓틕틖틗틙틚틛틝",6,"틦",9,"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"],["bb41","틻",4,"팂팄팆",5,"팏팑팒팓팕팗",4,"팞팢팣"],["bb61","팤팦팧팪팫팭팮팯팱",6,"팺팾",5,"퍆퍇퍈퍉"],["bb81","퍊",31,"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"],["bc41","퍪",17,"퍾퍿펁펂펃펅펆펇"],["bc61","펈펉펊펋펎펒",5,"펚펛펝펞펟펡",6,"펪펬펮"],["bc81","펯",4,"펵펶펷펹펺펻펽",6,"폆폇폊",5,"폑",5,"샥샨샬샴샵샷샹섀섄섈섐섕서",4,"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"],["bd41","폗폙",7,"폢폤",7,"폮폯폱폲폳폵폶폷"],["bd61","폸폹폺폻폾퐀퐂",5,"퐉",13],["bd81","퐗",5,"퐞",25,"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"],["be41","퐸",7,"푁푂푃푅",14],["be61","푔",7,"푝푞푟푡푢푣푥",7,"푮푰푱푲"],["be81","푳",4,"푺푻푽푾풁풃",4,"풊풌풎",5,"풕",8,"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",6,"엌엎"],["bf41","풞",10,"풪",14],["bf61","풹",18,"퓍퓎퓏퓑퓒퓓퓕"],["bf81","퓖",5,"퓝퓞퓠",7,"퓩퓪퓫퓭퓮퓯퓱",6,"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",5,"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"],["c041","퓾",5,"픅픆픇픉픊픋픍",6,"픖픘",5],["c061","픞",25],["c081","픸픹픺픻픾픿핁핂핃핅",6,"핎핐핒",5,"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",7,"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"],["c141","핤핦핧핪핬핮",5,"핶핷핹핺핻핽",6,"햆햊햋"],["c161","햌햍햎햏햑",19,"햦햧"],["c181","햨",31,"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"],["c241","헊헋헍헎헏헑헓",4,"헚헜헞",5,"헦헧헩헪헫헭헮"],["c261","헯",4,"헶헸헺",5,"혂혃혅혆혇혉",6,"혒"],["c281","혖",5,"혝혞혟혡혢혣혥",7,"혮",9,"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"],["c341","혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",4],["c361","홢",4,"홨홪",5,"홲홳홵",11],["c381","횁횂횄횆",5,"횎횏횑횒횓횕",7,"횞횠횢",5,"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"],["c441","횫횭횮횯횱",7,"횺횼",7,"훆훇훉훊훋"],["c461","훍훎훏훐훒훓훕훖훘훚",5,"훡훢훣훥훦훧훩",4],["c481","훮훯훱훲훳훴훶",5,"훾훿휁휂휃휅",11,"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"],["c541","휕휖휗휚휛휝휞휟휡",6,"휪휬휮",5,"휶휷휹"],["c561","휺휻휽",6,"흅흆흈흊",5,"흒흓흕흚",4],["c581","흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",6,"흾흿힀힂",5,"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"],["c641","힍힎힏힑",6,"힚힜힞",5],["c6a1","퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"],["c7a1","퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"],["c8a1","혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"],["caa1","伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"],["cba1","匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"],["cca1","瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"],["cda1","棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"],["cea1","科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"],["cfa1","區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"],["d0a1","鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"],["d1a1","朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",5,"那樂",4,"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"],["d2a1","納臘蠟衲囊娘廊",4,"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",5,"駑魯",10,"濃籠聾膿農惱牢磊腦賂雷尿壘",7,"嫩訥杻紐勒",5,"能菱陵尼泥匿溺多茶"],["d3a1","丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"],["d4a1","棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"],["d5a1","蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"],["d6a1","煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"],["d7a1","遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"],["d8a1","立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"],["d9a1","蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"],["daa1","汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"],["dba1","發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"],["dca1","碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"],["dda1","孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"],["dea1","脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"],["dfa1","傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"],["e0a1","胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"],["e1a1","聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"],["e2a1","戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"],["e3a1","嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"],["e4a1","沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"],["e5a1","櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"],["e6a1","旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"],["e7a1","簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"],["e8a1","烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"],["e9a1","窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"],["eaa1","運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"],["eba1","濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"],["eca1","議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"],["eda1","立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"],["eea1","障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"],["efa1","煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"],["f0a1","靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"],["f1a1","踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"],["f2a1","咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"],["f3a1","鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"],["f4a1","責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"],["f5a1","椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"],["f6a1","贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"],["f7a1","鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"],["f8a1","阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"],["f9a1","品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"],["faa1","行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"],["fba1","形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"],["fca1","禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"],["fda1","爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"]]},function(t,e){t.exports=[["0","\0",127],["a140","　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"],["a1a1","﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",4,"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"],["a240","＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",7,"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"],["a2a1","╮╰╯═╞╪╡◢◣◥◤╱╲╳０",9,"Ⅰ",9,"〡",8,"十卄卅Ａ",25,"ａ",21],["a340","ｗｘｙｚΑ",16,"Σ",6,"α",16,"σ",6,"ㄅ",10],["a3a1","ㄐ",25,"˙ˉˊˇˋ"],["a3e1","€"],["a440","一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"],["a4a1","丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"],["a540","世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"],["a5a1","央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"],["a640","共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"],["a6a1","式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"],["a740","作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"],["a7a1","均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"],["a840","杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"],["a8a1","芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"],["a940","咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"],["a9a1","屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"],["aa40","昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"],["aaa1","炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"],["ab40","陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"],["aba1","哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"],["ac40","拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"],["aca1","活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"],["ad40","耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"],["ada1","迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"],["ae40","哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"],["aea1","恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"],["af40","浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"],["afa1","砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"],["b040","虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"],["b0a1","陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"],["b140","娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"],["b1a1","情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"],["b240","毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"],["b2a1","瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"],["b340","莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"],["b3a1","部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"],["b440","婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"],["b4a1","插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"],["b540","溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"],["b5a1","窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"],["b640","詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"],["b6a1","間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"],["b740","媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"],["b7a1","楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"],["b840","睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"],["b8a1","腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"],["b940","辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"],["b9a1","飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"],["ba40","愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"],["baa1","滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"],["bb40","罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"],["bba1","說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"],["bc40","劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"],["bca1","慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"],["bd40","瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"],["bda1","翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"],["be40","輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"],["bea1","鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"],["bf40","濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"],["bfa1","縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"],["c040","錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"],["c0a1","嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"],["c140","瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"],["c1a1","薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"],["c240","駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"],["c2a1","癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"],["c340","鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"],["c3a1","獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"],["c440","願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"],["c4a1","纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"],["c540","護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"],["c5a1","禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"],["c640","讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"],["c940","乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"],["c9a1","氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"],["ca40","汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"],["caa1","吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"],["cb40","杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"],["cba1","芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"],["cc40","坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"],["cca1","怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"],["cd40","泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"],["cda1","矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"],["ce40","哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"],["cea1","峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"],["cf40","柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"],["cfa1","洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"],["d040","穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"],["d0a1","苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"],["d140","唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"],["d1a1","恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"],["d240","毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"],["d2a1","牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"],["d340","笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"],["d3a1","荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"],["d440","酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"],["d4a1","唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"],["d540","崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"],["d5a1","捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"],["d640","淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"],["d6a1","痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"],["d740","耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"],["d7a1","蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"],["d840","釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"],["d8a1","堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"],["d940","惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"],["d9a1","晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"],["da40","湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"],["daa1","琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"],["db40","罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"],["dba1","菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"],["dc40","軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"],["dca1","隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"],["dd40","媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"],["dda1","搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"],["de40","毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"],["dea1","煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"],["df40","稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"],["dfa1","腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"],["e040","觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"],["e0a1","遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"],["e140","凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"],["e1a1","寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"],["e240","榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"],["e2a1","漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"],["e340","禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"],["e3a1","耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"],["e440","裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"],["e4a1","銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"],["e540","噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"],["e5a1","憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"],["e640","澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"],["e6a1","獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"],["e740","膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"],["e7a1","蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"],["e840","踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"],["e8a1","銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"],["e940","噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"],["e9a1","憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"],["ea40","澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"],["eaa1","瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"],["eb40","蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"],["eba1","諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"],["ec40","錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"],["eca1","魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"],["ed40","檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"],["eda1","瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"],["ee40","蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"],["eea1","謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"],["ef40","鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"],["efa1","鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"],["f040","璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"],["f0a1","臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"],["f140","蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"],["f1a1","鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"],["f240","徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"],["f2a1","礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"],["f340","譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"],["f3a1","鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"],["f440","嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"],["f4a1","禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"],["f540","鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"],["f5a1","鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"],["f640","蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"],["f6a1","騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"],["f740","糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"],["f7a1","驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"],["f840","讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"],["f8a1","齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"],["f940","纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"],["f9a1","龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"]]},function(t,e){t.exports=[["8740","䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"],["8767","綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"],["87a1","𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"],["8840","㇀",4,"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"],["88a1","ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"],["8940","𪎩𡅅"],["8943","攊"],["8946","丽滝鵎釟"],["894c","𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"],["89a1","琑糼緍楆竉刧"],["89ab","醌碸酞肼"],["89b0","贋胶𠧧"],["89b5","肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"],["89c1","溚舾甙"],["89c5","䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"],["8a40","𧶄唥"],["8a43","𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"],["8a64","𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"],["8a76","䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"],["8aa1","𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"],["8aac","䠋𠆩㿺塳𢶍"],["8ab2","𤗈𠓼𦂗𠽌𠶖啹䂻䎺"],["8abb","䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"],["8ac9","𪘁𠸉𢫏𢳉"],["8ace","𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"],["8adf","𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"],["8af6","𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"],["8b40","𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"],["8b55","𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"],["8ba1","𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"],["8bde","𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"],["8c40","倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"],["8ca1","𣏹椙橃𣱣泿"],["8ca7","爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"],["8cc9","顨杫䉶圽"],["8cce","藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"],["8ce6","峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"],["8d40","𠮟"],["8d42","𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"],["8da1","㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"],["8e40","𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"],["8ea1","繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"],["8f40","蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"],["8fa1","𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"],["9040","趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"],["90a1","𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"],["9140","𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"],["91a1","鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"],["9240","𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"],["92a1","働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"],["9340","媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"],["93a1","摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"],["9440","銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"],["94a1","㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"],["9540","𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"],["95a1","衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"],["9640","桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"],["96a1","𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"],["9740","愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"],["97a1","𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"],["9840","𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"],["98a1","咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"],["9940","䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"],["99a1","䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"],["9a40","鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"],["9aa1","黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"],["9b40","𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"],["9b62","𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"],["9ba1","椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"],["9c40","嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"],["9ca1","㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"],["9d40","𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"],["9da1","辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"],["9e40","𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"],["9ea1","鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"],["9ead","𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"],["9ec5","㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"],["9ef5","噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"],["9f40","籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"],["9f4f","凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"],["9fa1","椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"],["9fae","酙隁酜"],["9fb2","酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"],["9fc1","𤤙盖鮝个𠳔莾衂"],["9fc9","届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"],["9fdb","歒酼龥鮗頮颴骺麨麄煺笔"],["9fe7","毺蠘罸"],["9feb","嘠𪙊蹷齓"],["9ff0","跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"],["a040","𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"],["a055","𡠻𦸅"],["a058","詾𢔛"],["a05b","惽癧髗鵄鍮鮏蟵"],["a063","蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"],["a073","坟慯抦戹拎㩜懢厪𣏵捤栂㗒"],["a0a1","嵗𨯂迚𨸹"],["a0a6","僙𡵆礆匲阸𠼻䁥"],["a0ae","矾"],["a0b0","糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"],["a0d4","覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"],["a0e2","罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"],["a3c0","␀",31,"␡"],["c6a1","①",9,"⑴",9,"ⅰ",9,"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",23],["c740","す",58,"ァアィイ"],["c7a1","ゥ",81,"А",5,"ЁЖ",4],["c840","Л",26,"ёж",25,"⇧↸↹㇏𠃌乚𠂊刂䒑"],["c8a1","龰冈龱𧘇"],["c8cd","￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"],["c8f5","ʃɐɛɔɵœøŋʊɪ"],["f9fe","￭"],["fa40","𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"],["faa1","鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"],["fb40","𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"],["fba1","𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"],["fc40","廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"],["fca1","𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"],["fd40","𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"],["fda1","𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"],["fe40","鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"],["fea1","𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"]]},function(t,e,n){"use strict"
function r(t,e){this.conv=t,(e=e||{}).decodeStrings=!1,a.call(this,e)}function i(t,e){this.conv=t,(e=e||{}).encoding=this.encoding="utf8",a.call(this,e)}var o=n(2).Buffer,a=n(31).Transform
t.exports=function(t){t.encodeStream=function(e,n){return new r(t.getEncoder(e,n),n)},t.decodeStream=function(e,n){return new i(t.getDecoder(e,n),n)},t.supportsStreams=!0,t.IconvLiteEncoderStream=r,t.IconvLiteDecoderStream=i,t._collect=i.prototype.collect},r.prototype=Object.create(a.prototype,{constructor:{value:r}}),r.prototype._transform=function(t,e,n){if("string"!=typeof t)return n(new Error("Iconv encoding stream needs strings as its input."))
try{var r=this.conv.write(t)
r&&r.length&&this.push(r),n()}catch(t){n(t)}},r.prototype._flush=function(t){try{var e=this.conv.end()
e&&e.length&&this.push(e),t()}catch(e){t(e)}},r.prototype.collect=function(t){var e=[]
return this.on("error",t),this.on("data",function(t){e.push(t)}),this.on("end",function(){t(null,o.concat(e))}),this},i.prototype=Object.create(a.prototype,{constructor:{value:i}}),i.prototype._transform=function(t,e,n){if(!o.isBuffer(t))return n(new Error("Iconv decoding stream needs buffers as its input."))
try{var r=this.conv.write(t)
r&&r.length&&this.push(r,this.encoding),n()}catch(t){n(t)}},i.prototype._flush=function(t){try{var e=this.conv.end()
e&&e.length&&this.push(e,this.encoding),t()}catch(e){t(e)}},i.prototype.collect=function(t){var e=""
return this.on("error",t),this.on("data",function(t){e+=t}),this.on("end",function(){t(null,e)}),this}},function(t,e,n){"use strict"
var r=n(2).Buffer
t.exports=function(t){var e=void 0
t.supportsNodeEncodingsExtension=!(new r(0)instanceof Uint8Array),t.extendNodeEncodings=function(){if(!e&&(e={},t.supportsNodeEncodingsExtension)){var i={hex:!0,utf8:!0,"utf-8":!0,ascii:!0,binary:!0,base64:!0,ucs2:!0,"ucs-2":!0,utf16le:!0,"utf-16le":!0}
r.isNativeEncoding=function(t){return t&&i[t.toLowerCase()]}
var o=n(2).SlowBuffer
if(e.SlowBufferToString=o.prototype.toString,o.prototype.toString=function(n,i,o){return n=String(n||"utf8").toLowerCase(),r.isNativeEncoding(n)?e.SlowBufferToString.call(this,n,i,o):(void 0===i&&(i=0),void 0===o&&(o=this.length),t.decode(this.slice(i,o),n))},e.SlowBufferWrite=o.prototype.write,o.prototype.write=function(n,i,o,a){if(isFinite(i))isFinite(o)||(a=o,o=void 0)
else{var s=a
a=i,i=o,o=s}i=+i||0
var u=this.length-i
if(o?(o=+o)>u&&(o=u):o=u,a=String(a||"utf8").toLowerCase(),r.isNativeEncoding(a))return e.SlowBufferWrite.call(this,n,i,o,a)
if(n.length>0&&(o<0||i<0))throw new RangeError("attempt to write beyond buffer bounds")
var l=t.encode(n,a)
return l.length<o&&(o=l.length),l.copy(this,i,0,o),o},e.BufferIsEncoding=r.isEncoding,r.isEncoding=function(e){return r.isNativeEncoding(e)||t.encodingExists(e)},e.BufferByteLength=r.byteLength,r.byteLength=o.byteLength=function(n,i){return i=String(i||"utf8").toLowerCase(),r.isNativeEncoding(i)?e.BufferByteLength.call(this,n,i):t.encode(n,i).length},e.BufferToString=r.prototype.toString,r.prototype.toString=function(n,i,o){return n=String(n||"utf8").toLowerCase(),r.isNativeEncoding(n)?e.BufferToString.call(this,n,i,o):(void 0===i&&(i=0),void 0===o&&(o=this.length),t.decode(this.slice(i,o),n))},e.BufferWrite=r.prototype.write,r.prototype.write=function(n,i,o,a){var s=i,u=o,l=a
if(isFinite(i))isFinite(o)||(a=o,o=void 0)
else{var c=a
a=i,i=o,o=c}if(a=String(a||"utf8").toLowerCase(),r.isNativeEncoding(a))return e.BufferWrite.call(this,n,s,u,l)
i=+i||0
var f=this.length-i
if(o?(o=+o)>f&&(o=f):o=f,n.length>0&&(o<0||i<0))throw new RangeError("attempt to write beyond buffer bounds")
var h=t.encode(n,a)
return h.length<o&&(o=h.length),h.copy(this,i,0,o),o},t.supportsStreams){var a=n(31).Readable
e.ReadableSetEncoding=a.prototype.setEncoding,a.prototype.setEncoding=function(e,n){this._readableState.decoder=t.getDecoder(e,n),this._readableState.encoding=e},a.prototype.collect=t._collect}}},t.undoExtendNodeEncodings=function(){if(t.supportsNodeEncodingsExtension){if(!e)throw new Error("require('iconv-lite').undoExtendNodeEncodings(): Nothing to undo; extendNodeEncodings() is not called.")
delete r.isNativeEncoding
var i=n(2).SlowBuffer
if(i.prototype.toString=e.SlowBufferToString,i.prototype.write=e.SlowBufferWrite,r.isEncoding=e.BufferIsEncoding,r.byteLength=e.BufferByteLength,r.prototype.toString=e.BufferToString,r.prototype.write=e.BufferWrite,t.supportsStreams){var o=n(31).Readable
o.prototype.setEncoding=e.ReadableSetEncoding,delete o.prototype.collect}e=void 0}}}},function(t,e,n){(function(){var e,r,i
r=n(109).Number,i=n(110),e=function(){function t(t,e,n){this.type=t,this.length=e,this.lengthType=null!=n?n:"count"}return t.prototype.decode=function(t,e){var n,o,a,s,u,l
if(a=t.pos,s=[],n=e,null!=this.length&&(o=i.resolveLength(this.length,t,e)),this.length instanceof r&&(Object.defineProperties(s,{parent:{value:e},_startOffset:{value:a},_currentOffset:{value:0,writable:!0},_length:{value:o}}),n=s),null==o||"bytes"===this.lengthType)for(u=null!=o?t.pos+o:(null!=e?e._length:void 0)?e._startOffset+e._length:t.length;t.pos<u;)s.push(this.type.decode(t,n))
else for(l=0;l<o;l+=1)s.push(this.type.decode(t,n))
return s},t.prototype.size=function(t,e){var n,o,a,s
if(!t)return this.type.size(null,e)*i.resolveLength(this.length,null,e)
for(o=0,this.length instanceof r&&(o+=this.length.size(),e={parent:e}),a=0,s=t.length;a<s;a++)n=t[a],o+=this.type.size(n,e)
return o},t.prototype.encode=function(t,e,n){var i,o,a,s,u,l
for(i=n,this.length instanceof r&&((i={pointers:[],startOffset:t.pos,parent:n}).pointerOffset=t.pos+this.size(e,i),this.length.encode(t,e.length)),u=0,l=e.length;u<l;u++)a=e[u],this.type.encode(t,a,i)
if(this.length instanceof r)for(o=0;o<i.pointers.length;)s=i.pointers[o++],s.type.encode(t,s.val)},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var t,r,i,o={}.hasOwnProperty
t=n(86),i=function(){function e(t,e){this.type=t,this.endian=null!=e?e:"BE",this.fn=this.type,"8"!==this.type[this.type.length-1]&&(this.fn+=this.endian)}return e.prototype.size=function(){return t.TYPES[this.type]},e.prototype.decode=function(t){return t["read"+this.fn]()},e.prototype.encode=function(t,e){return t["write"+this.fn](e)},e}(),e.Number=i,e.uint8=new i("UInt8"),e.uint16be=e.uint16=new i("UInt16","BE"),e.uint16le=new i("UInt16","LE"),e.uint24be=e.uint24=new i("UInt24","BE"),e.uint24le=new i("UInt24","LE"),e.uint32be=e.uint32=new i("UInt32","BE"),e.uint32le=new i("UInt32","LE"),e.int8=new i("Int8"),e.int16be=e.int16=new i("Int16","BE"),e.int16le=new i("Int16","LE"),e.int24be=e.int24=new i("Int24","BE"),e.int24le=new i("Int24","LE"),e.int32be=e.int32=new i("Int32","BE"),e.int32le=new i("Int32","LE"),e.floatbe=e.float=new i("Float","BE"),e.floatle=new i("Float","LE"),e.doublebe=e.double=new i("Double","BE"),e.doublele=new i("Double","LE"),r=function(t){function e(t,n,r){null==r&&(r=t>>1),e.__super__.constructor.call(this,"Int"+t,n),this._point=1<<r}return function(t,e){function n(){this.constructor=t}for(var r in e)o.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,i),e.prototype.decode=function(t){return e.__super__.decode.call(this,t)/this._point},e.prototype.encode=function(t,n){return e.__super__.encode.call(this,t,n*this._point|0)},e}(),e.Fixed=r,e.fixed16be=e.fixed16=new r(16,"BE"),e.fixed16le=new r(16,"LE"),e.fixed32be=e.fixed32=new r(32,"BE"),e.fixed32le=new r(32,"LE")}).call(this)},function(t,e,n){(function(){var t,r
t=n(109).Number,e.resolveLength=function(e,n,r){var i
if("number"==typeof e?i=e:"function"==typeof e?i=e.call(r,r):r&&"string"==typeof e?i=r[e]:n&&e instanceof t&&(i=e.decode(n)),isNaN(i))throw new Error("Not a fixed size")
return i},r=function(){return function(t){var e,n
null==t&&(t={}),this.enumerable=!0,this.configurable=!0
for(e in t)n=t[e],this[e]=n}}(),e.PropertyDescriptor=r}).call(this)},function(t,e,n){(function(){var e,r,i,o,a,s,u={}.hasOwnProperty
e=n(108),o=n(109).Number,s=n(110),a=n(72).inspect,i=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return function(t,e){function n(){this.constructor=t}for(var r in e)u.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(n,e),n.prototype.decode=function(t,e){var n,i,a
return i=t.pos,n=s.resolveLength(this.length,t,e),this.length instanceof o&&(e={parent:e,_startOffset:i,_currentOffset:0,_length:n}),a=new r(this.type,n,t,e),t.pos+=n*this.type.size(null,e),a},n.prototype.size=function(t,e){return t instanceof r&&(t=t.toArray()),n.__super__.size.call(this,t,e)},n.prototype.encode=function(t,e,i){return e instanceof r&&(e=e.toArray()),n.__super__.encode.call(this,t,e,i)},n}(),r=function(){function t(t,e,n,r){this.type=t,this.length=e,this.stream=n,this.ctx=r,this.base=this.stream.pos,this.items=[]}return t.prototype.get=function(t){var e
if(!(t<0||t>=this.length))return null==this.items[t]&&(e=this.stream.pos,this.stream.pos=this.base+this.type.size(null,this.ctx)*t,this.items[t]=this.type.decode(this.stream,this.ctx),this.stream.pos=e),this.items[t]},t.prototype.toArray=function(){var t,e,n,r
for(r=[],t=e=0,n=this.length;e<n;t=e+=1)r.push(this.get(t))
return r},t.prototype.inspect=function(){return a(this.toArray())},t}(),t.exports=i}).call(this)},function(t,e){(function(){var e
e=function(){function t(t,e){this.type=t,this.flags=null!=e?e:[]}return t.prototype.decode=function(t){var e,n,r,i,o,a,s
for(i=this.type.decode(t),r={},n=o=0,a=(s=this.flags).length;o<a;n=++o)null!=(e=s[n])&&(r[e]=!!(i&1<<n))
return r},t.prototype.size=function(){return this.type.size()},t.prototype.encode=function(t,e){var n,r,i,o,a,s
for(i=0,r=o=0,a=(s=this.flags).length;o<a;r=++o)null!=(n=s[r])&&e[n]&&(i|=1<<r)
return this.type.encode(t,i)},t}(),t.exports=e}).call(this)},function(t,e){(function(){var e
e=function(){function t(t){this.type=t}return t.prototype.decode=function(t,e){return!!this.type.decode(t,e)},t.prototype.size=function(t,e){return this.type.size(t,e)},t.prototype.encode=function(t,e,n){return this.type.encode(t,+e,n)},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i
i=n(110),r=n(109).Number,e=function(){function t(t){this.length=t}return t.prototype.decode=function(t,e){var n
return n=i.resolveLength(this.length,t,e),t.readBuffer(n)},t.prototype.size=function(t,e){return t?t.length:i.resolveLength(this.length,null,e)},t.prototype.encode=function(t,e,n){return this.length instanceof r&&this.length.encode(t,e.length),t.writeBuffer(e)},t}(),t.exports=e}).call(this)},function(t,e){(function(){var e
e=function(){function t(t,e){this.type=t,this.options=null!=e?e:[]}return t.prototype.decode=function(t){var e
return e=this.type.decode(t),this.options[e]||e},t.prototype.size=function(){return this.type.size()},t.prototype.encode=function(t,e){var n
if(-1===(n=this.options.indexOf(e)))throw new Error("Unknown option in enum: "+e)
return this.type.encode(t,n)},t}(),t.exports=e}).call(this)},function(t,e){(function(){var e
e=function(){function t(t,e){this.type=t,this.condition=null==e||e}return t.prototype.decode=function(t,e){var n
if("function"==typeof(n=this.condition)&&(n=n.call(e,e)),n)return this.type.decode(t,e)},t.prototype.size=function(t,e){var n
return"function"==typeof(n=this.condition)&&(n=n.call(e,e)),n?this.type.size(t,e):0},t.prototype.encode=function(t,e,n){var r
if("function"==typeof(r=this.condition)&&(r=r.call(n,n)),r)return this.type.encode(t,e,n)},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r
r=n(110),e=function(){function t(t,e){this.type=t,this.count=null!=e?e:1}return t.prototype.decode=function(t,e){t.pos+=this.size(null,e)},t.prototype.size=function(t,e){var n
return n=r.resolveLength(this.count,null,e),this.type.size()*n},t.prototype.encode=function(t,e,n){return t.fill(0,this.size(e,n))},t}(),t.exports=e}).call(this)},function(t,e,n){(function(e){(function(){var r,i,o
r=n(109).Number,o=n(110),i=function(){function t(t,e){this.length=t,this.encoding=null!=e?e:"ascii"}return t.prototype.decode=function(t,e){var n,r,i,a,s
return i=function(){if(null!=this.length)return o.resolveLength(this.length,t,e)
for(n=t.buffer,i=t.length,a=t.pos;a<i&&0!==n[a];)++a
return a-t.pos}.call(this),"function"==typeof(r=this.encoding)&&(r=r.call(e,e)||"ascii"),s=t.readString(i,r),null==this.length&&t.pos<t.length&&t.pos++,s},t.prototype.size=function(t,n){var i,a
return t?("function"==typeof(i=this.encoding)&&(i=i.call(null!=n?n.val:void 0,null!=n?n.val:void 0)||"ascii"),"utf16be"===i&&(i="utf16le"),a=e.byteLength(t,i),this.length instanceof r&&(a+=this.length.size()),null==this.length&&a++,a):o.resolveLength(this.length,null,n)},t.prototype.encode=function(t,n,i){var o
if("function"==typeof(o=this.encoding)&&(o=o.call(null!=i?i.val:void 0,null!=i?i.val:void 0)||"ascii"),this.length instanceof r&&this.length.encode(t,e.byteLength(n,o)),t.writeString(n,o),null==this.length)return t.writeUInt8(0)},t}(),t.exports=i}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){(function(){var e,r
r=n(110),e=function(){function t(t){this.fields=null!=t?t:{}}return t.prototype.decode=function(t,e,n){var r,i
return null==n&&(n=0),r=this._setup(t,e,n),this._parseFields(t,r,this.fields),null!=(i=this.process)&&i.call(r,t),r},t.prototype._setup=function(t,e,n){var r
return r={},Object.defineProperties(r,{parent:{value:e},_startOffset:{value:t.pos},_currentOffset:{value:0,writable:!0},_length:{value:n}}),r},t.prototype._parseFields=function(t,e,n){var i,o,a
for(i in n)o=n[i],a="function"==typeof o?o.call(e,e):o.decode(t,e),void 0!==a&&(a instanceof r.PropertyDescriptor?Object.defineProperty(e,i,a):e[i]=a),e._currentOffset=t.pos-e._startOffset},t.prototype.size=function(t,e,n){var r,i,o,a,s
null==t&&(t={}),null==n&&(n=!0),r={parent:e,val:t,pointerSize:0},o=0,s=this.fields
for(i in s)a=s[i],null!=a.size&&(o+=a.size(t[i],r))
return n&&(o+=r.pointerSize),o},t.prototype.encode=function(t,e,n){var r,i,o,a,s,u,l
null!=(u=this.preEncode)&&u.call(e,t),(r={pointers:[],startOffset:t.pos,parent:n,val:e,pointerSize:0}).pointerOffset=t.pos+this.size(e,r,!1),l=this.fields
for(o in l)s=l[o],null!=s.encode&&s.encode(t,e[o],r)
for(i=0;i<r.pointers.length;)a=r.pointers[i++],a.type.encode(t,a.val,a.parent)},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i={}.hasOwnProperty
e=n(119),r=function(t){function n(t,e){this.type=t,this.versions=null!=e?e:{},"string"==typeof this.type&&(this.versionGetter=new Function("parent","return parent."+this.type),this.versionSetter=new Function("parent","version","return parent."+this.type+" = version"))}return function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(n,e),n.prototype.decode=function(t,e,r){var i,o,a
if(null==r&&(r=0),o=this._setup(t,e,r),"string"==typeof this.type?o.version=this.versionGetter(e):o.version=this.type.decode(t),this.versions.header&&this._parseFields(t,o,this.versions.header),null==(i=this.versions[o.version]))throw new Error("Unknown version "+o.version)
return i instanceof n?i.decode(t,e):(this._parseFields(t,o,i),null!=(a=this.process)&&a.call(o,t),o)},n.prototype.size=function(t,e,n){var r,i,o,a,s,u
if(null==n&&(n=!0),!t)throw new Error("Not a fixed size")
if(r={parent:e,val:t,pointerSize:0},a=0,"string"!=typeof this.type&&(a+=this.type.size(t.version,r)),this.versions.header){u=this.versions.header
for(o in u)s=u[o],null!=s.size&&(a+=s.size(t[o],r))}if(null==(i=this.versions[t.version]))throw new Error("Unknown version "+t.version)
for(o in i)s=i[o],null!=s.size&&(a+=s.size(t[o],r))
return n&&(a+=r.pointerSize),a},n.prototype.encode=function(t,e,n){var r,i,o,a,s,u,l,c
if(null!=(l=this.preEncode)&&l.call(e,t),(r={pointers:[],startOffset:t.pos,parent:n,val:e,pointerSize:0}).pointerOffset=t.pos+this.size(e,r,!1),"string"!=typeof this.type&&this.type.encode(t,e.version),this.versions.header){c=this.versions.header
for(a in c)u=c[a],null!=u.encode&&u.encode(t,e[a],r)}i=this.versions[e.version]
for(a in i)u=i[a],null!=u.encode&&u.encode(t,e[a],r)
for(o=0;o<r.pointers.length;)s=r.pointers[o++],s.type.encode(t,s.val,s.parent)},n}(),t.exports=r}).call(this)},function(t,e,n){(function(){var t,r,i
i=n(110),t=function(){function t(t,e,n){var r,i,o,a
this.offsetType=t,this.type=e,this.options=null!=n?n:{},"void"===this.type&&(this.type=null),null==(r=this.options).type&&(r.type="local"),null==(i=this.options).allowNull&&(i.allowNull=!0),null==(o=this.options).nullValue&&(o.nullValue=0),null==(a=this.options).lazy&&(a.lazy=!1),this.options.relativeTo&&(this.relativeToGetter=new Function("ctx","return ctx."+this.options.relativeTo))}return t.prototype.decode=function(t,e){var n,r,o,a,s,u,l
return(o=this.offsetType.decode(t,e))===this.options.nullValue&&this.options.allowNull?null:(s=function(){switch(this.options.type){case"local":return e._startOffset
case"immediate":return t.pos-this.offsetType.size()
case"parent":return e.parent._startOffset
default:for(n=e;n.parent;)n=n.parent
return n._startOffset||0}}.call(this),this.options.relativeTo&&(s+=this.relativeToGetter(e)),a=o+s,null!=this.type?(u=null,l=this,r=function(){var n
return null!=u?u:(n=t.pos,t.pos=a,u=l.type.decode(t,e),t.pos=n,u)},this.options.lazy?new i.PropertyDescriptor({get:r}):r()):a)},t.prototype.size=function(t,e){var n,i
switch(n=e,this.options.type){case"local":case"immediate":break
case"parent":e=e.parent
break
default:for(;e.parent;)e=e.parent}if(null==(i=this.type)){if(!(t instanceof r))throw new Error("Must be a VoidPointer")
i=t.type,t=t.value}return t&&e&&(e.pointerSize+=i.size(t,n)),this.offsetType.size()},t.prototype.encode=function(t,e,n){var i,o,a
if(i=n,null!=e){switch(this.options.type){case"local":o=n.startOffset
break
case"immediate":o=t.pos+this.offsetType.size(e,i)
break
case"parent":o=(n=n.parent).startOffset
break
default:for(o=0;n.parent;)n=n.parent}if(this.options.relativeTo&&(o+=this.relativeToGetter(i.val)),this.offsetType.encode(t,n.pointerOffset-o),null==(a=this.type)){if(!(e instanceof r))throw new Error("Must be a VoidPointer")
a=e.type,e=e.value}return n.pointers.push({type:a,val:e,parent:i}),n.pointerOffset+=a.size(e,i)}this.offsetType.encode(t,this.options.nullValue)},t}(),r=function(){return function(t,e){this.type=t,this.value=e}}(),e.Pointer=t,e.VoidPointer=r}).call(this)},function(t,e,n){t.exports={default:n(123),__esModule:!0}},function(t,e,n){n(124)
var r=n(142).Object
t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},function(t,e,n){var r=n(125),i=n(129).f
n(140)("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},function(t,e,n){var r=n(126),i=n(128)
t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(127)
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString
t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t)
return t}},function(t,e,n){var r=n(130),i=n(131),o=n(125),a=n(132),s=n(134),u=n(135),l=Object.getOwnPropertyDescriptor
e.f=n(136)?l:function(t,e){if(t=o(t),e=a(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(133)
t.exports=function(t,e){if(!r(t))return t
var n,i
if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i
if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i
if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i
throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty
t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(136)&&!n(137)(function(){return 7!=Object.defineProperty(n(138)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(137)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(133),i=n(139).document,o=r(i)&&r(i.createElement)
t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()
"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(141),i=n(142),o=n(137)
t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={}
a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},function(t,e,n){var r=n(139),i=n(142),o=n(143),a=n(145),s=function(t,e,n){var u,l,c,f=t&s.F,h=t&s.G,p=t&s.S,d=t&s.P,g=t&s.B,y=t&s.W,v=h?i:i[e]||(i[e]={}),b=v.prototype,m=h?r:p?r[e]:(r[e]||{}).prototype
h&&(n=e)
for(u in n)(l=!f&&m&&void 0!==m[u])&&u in v||(c=l?m[u]:n[u],v[u]=h&&"function"!=typeof m[u]?n[u]:g&&l?o(c,r):y&&m[u]==c?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t
case 1:return new t(e)
case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)}
return e.prototype=t.prototype,e}(c):d&&"function"==typeof c?o(Function.call,c):c,d&&((v.virtual||(v.virtual={}))[u]=c,t&s.R&&b&&!b[u]&&a(b,u,c)))}
s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports={version:"2.4.0"}
"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(144)
t.exports=function(t,e,n){if(r(t),void 0===e)return t
switch(n){case 1:return function(n){return t.call(e,n)}
case 2:return function(n,r){return t.call(e,n,r)}
case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")
return t}},function(t,e,n){var r=n(146),i=n(131)
t.exports=n(136)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(147),i=n(135),o=n(132),a=Object.defineProperty
e.f=n(136)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!")
return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(133)
t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!")
return t}},function(t,e,n){t.exports={default:n(149),__esModule:!0}},function(t,e,n){n(150),n(176),t.exports=n(178)},function(t,e,n){n(151)
for(var r=n(139),i=n(145),o=n(154),a=n(173)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var l=s[u],c=r[l],f=c&&c.prototype
f&&!f[a]&&i(f,a,l),o[l]=o.Array}},function(t,e,n){"use strict"
var r=n(152),i=n(153),o=n(154),a=n(125)
t.exports=n(155)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++
return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports={}},function(t,e,n){"use strict"
var r=n(156),i=n(141),o=n(157),a=n(145),s=n(134),u=n(154),l=n(158),c=n(172),f=n(174),h=n(173)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this}
t.exports=function(t,e,n,g,y,v,b){l(n,e,g)
var m,w,x,_=function(t){if(!p&&t in A)return A[t]
switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",S="values"==y,C=!1,A=t.prototype,P=A[h]||A["@@iterator"]||y&&A[y],E=P||_(y),I=y?S?_("entries"):E:void 0,T="Array"==e?A.entries||P:P
if(T&&(x=f(T.call(new t)))!==Object.prototype&&(c(x,k,!0),r||s(x,h)||a(x,h,d)),S&&P&&"values"!==P.name&&(C=!0,E=function(){return P.call(this)}),r&&!b||!p&&!C&&A[h]||a(A,h,E),u[e]=E,u[k]=d,y)if(m={values:S?E:_("values"),keys:v?E:_("keys"),entries:I},b)for(w in m)w in A||o(A,w,m[w])
else i(i.P+i.F*(p||C),e,m)
return m}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(145)},function(t,e,n){"use strict"
var r=n(159),i=n(131),o=n(172),a={}
n(145)(a,n(173)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(147),i=n(160),o=n(170),a=n(167)("IE_PROTO"),s=function(){},u=function(){var t,e=n(138)("iframe"),r=o.length
for(e.style.display="none",n(171).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]]
return u()}
t.exports=Object.create||function(t,e){var n
return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(146),i=n(147),o=n(161)
t.exports=n(136)?Object.defineProperties:function(t,e){i(t)
for(var n,a=o(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n])
return t}},function(t,e,n){var r=n(162),i=n(170)
t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(134),i=n(125),o=n(163)(!1),a=n(167)("IE_PROTO")
t.exports=function(t,e){var n,s=i(t),u=0,l=[]
for(n in s)n!=a&&r(s,n)&&l.push(n)
for(;e.length>u;)r(s,n=e[u++])&&(~o(l,n)||l.push(n))
return l}},function(t,e,n){var r=n(125),i=n(164),o=n(166)
t.exports=function(t){return function(e,n,a){var s,u=r(e),l=i(u.length),c=o(a,l)
if(t&&n!=n){for(;l>c;)if((s=u[c++])!=s)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===n)return t||c||0
return!t&&-1}}},function(t,e,n){var r=n(165),i=Math.min
t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor
t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(165),i=Math.max,o=Math.min
t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(168)("keys"),i=n(169)
t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(139),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={})
t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random()
t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(139).document&&document.documentElement},function(t,e,n){var r=n(146).f,i=n(134),o=n(173)("toStringTag")
t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(168)("wks"),i=n(169),o=n(139).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(134),i=n(175),o=n(167)("IE_PROTO"),a=Object.prototype
t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(128)
t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict"
var r=n(177)(!0)
n(155)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i
return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(165),i=n(128)
t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),u=r(n),l=s.length
return u<0||u>=l?t?"":void 0:(o=s.charCodeAt(u))<55296||o>56319||u+1===l||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):o:t?s.slice(u,u+2):a-56320+(o-55296<<10)+65536}}},function(t,e,n){var r=n(147),i=n(179)
t.exports=n(142).getIterator=function(t){var e=i(t)
if("function"!=typeof e)throw TypeError(t+" is not iterable!")
return r(e.call(t))}},function(t,e,n){var r=n(180),i=n(173)("iterator"),o=n(154)
t.exports=n(142).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(127),i=n(173)("toStringTag"),o="Arguments"==r(function(){return arguments}())
t.exports=function(t){var e,n,a
return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){t.exports={default:n(182),__esModule:!0}},function(t,e,n){n(183),t.exports=n(142).Object.freeze},function(t,e,n){var r=n(133),i=n(184).onFreeze
n(140)("freeze",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},function(t,e,n){var r=n(169)("meta"),i=n(133),o=n(134),a=n(146).f,s=0,u=Object.isExtensible||function(){return!0},l=!n(137)(function(){return u(Object.preventExtensions({}))}),c=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t
if(!o(t,r)){if(!u(t))return"F"
if(!e)return"E"
c(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!u(t))return!0
if(!e)return!1
c(t)}return t[r].w},onFreeze:function(t){return l&&f.NEED&&u(t)&&!o(t,r)&&c(t),t}}},function(t,e,n){t.exports={default:n(186),__esModule:!0}},function(t,e,n){n(187),t.exports=n(142).Object.keys},function(t,e,n){var r=n(175),i=n(161)
n(140)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){"use strict"
function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0
var i=r(n(189)),o=r(n(192)),a="function"==typeof o.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t}
e.default="function"==typeof o.default&&"symbol"===a(i.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){t.exports={default:n(190),__esModule:!0}},function(t,e,n){n(176),n(150),t.exports=n(191).f("iterator")},function(t,e,n){e.f=n(173)},function(t,e,n){t.exports={default:n(193),__esModule:!0}},function(t,e,n){n(194),n(202),n(203),n(204),t.exports=n(142).Symbol},function(t,e,n){"use strict"
var r=n(139),i=n(134),o=n(136),a=n(141),s=n(157),u=n(184).KEY,l=n(137),c=n(168),f=n(172),h=n(169),p=n(173),d=n(191),g=n(195),y=n(196),v=n(197),b=n(199),m=n(147),w=n(125),x=n(132),_=n(131),k=n(159),S=n(200),C=n(129),A=n(146),P=n(161),E=C.f,I=A.f,T=S.f,O=r.Symbol,B=r.JSON,L=B&&B.stringify,R=p("_hidden"),M=p("toPrimitive"),F={}.propertyIsEnumerable,z=c("symbol-registry"),D=c("symbols"),N=c("op-symbols"),U=Object.prototype,W="function"==typeof O,j=r.QObject,G=!j||!j.prototype||!j.prototype.findChild,V=o&&l(function(){return 7!=k(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(U,e)
r&&delete U[e],I(t,e,n),r&&t!==U&&I(U,e,r)}:I,H=function(t){var e=D[t]=k(O.prototype)
return e._k=t,e},q=W&&"symbol"==typeof O.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof O},Z=function(t,e,n){return t===U&&Z(N,e,n),m(t),e=x(e,!0),m(n),i(D,e)?(n.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),n=k(n,{enumerable:_(0,!1)})):(i(t,R)||I(t,R,_(1,{})),t[R][e]=!0),V(t,e,n)):I(t,e,n)},Y=function(t,e){m(t)
for(var n,r=v(e=w(e)),i=0,o=r.length;o>i;)Z(t,n=r[i++],e[n])
return t},X=function(t){var e=F.call(this,t=x(t,!0))
return!(this===U&&i(D,t)&&!i(N,t))&&(!(e||!i(this,t)||!i(D,t)||i(this,R)&&this[R][t])||e)},K=function(t,e){if(t=w(t),e=x(e,!0),t!==U||!i(D,e)||i(N,e)){var n=E(t,e)
return!n||!i(D,e)||i(t,R)&&t[R][e]||(n.enumerable=!0),n}},J=function(t){for(var e,n=T(w(t)),r=[],o=0;n.length>o;)i(D,e=n[o++])||e==R||e==u||r.push(e)
return r},Q=function(t){for(var e,n=t===U,r=T(n?N:w(t)),o=[],a=0;r.length>a;)!i(D,e=r[a++])||n&&!i(U,e)||o.push(D[e])
return o}
W||(s((O=function(){if(this instanceof O)throw TypeError("Symbol is not a constructor!")
var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===U&&e.call(N,n),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),V(this,t,_(1,n))}
return o&&G&&V(U,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),C.f=K,A.f=Z,n(201).f=S.f=J,n(130).f=X,n(198).f=Q,o&&!n(156)&&s(U,"propertyIsEnumerable",X,!0),d.f=function(t){return H(p(t))}),a(a.G+a.W+a.F*!W,{Symbol:O})
for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)p($[tt++])
for($=P(p.store),tt=0;$.length>tt;)g($[tt++])
a(a.S+a.F*!W,"Symbol",{for:function(t){return i(z,t+="")?z[t]:z[t]=O(t)},keyFor:function(t){if(q(t))return y(z,t)
throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!W,"Object",{create:function(t,e){return void 0===e?k(t):Y(k(t),e)},defineProperty:Z,defineProperties:Y,getOwnPropertyDescriptor:K,getOwnPropertyNames:J,getOwnPropertySymbols:Q}),B&&a(a.S+a.F*(!W||l(function(){var t=O()
return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++])
return"function"==typeof(e=r[1])&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,L.apply(B,r)}}}),O.prototype[M]||n(145)(O.prototype,M,O.prototype.valueOf),f(O,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){var r=n(139),i=n(142),o=n(156),a=n(191),s=n(146).f
t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{})
"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var r=n(161),i=n(125)
t.exports=function(t,e){for(var n,o=i(t),a=r(o),s=a.length,u=0;s>u;)if(o[n=a[u++]]===e)return n}},function(t,e,n){var r=n(161),i=n(198),o=n(130)
t.exports=function(t){var e=r(t),n=i.f
if(n)for(var a,s=n(t),u=o.f,l=0;s.length>l;)u.call(t,a=s[l++])&&e.push(a)
return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(127)
t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(125),i=n(201).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[]
t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){var r=n(162),i=n(170).concat("length","prototype")
e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e){},function(t,e,n){n(195)("asyncIterator")},function(t,e,n){n(195)("observable")},function(t,e,n){t.exports={default:n(206),__esModule:!0}},function(t,e,n){n(207)
var r=n(142).Object
t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(141)
r(r.S+r.F*!n(136),"Object",{defineProperty:n(146).f})},function(t,e){"use strict"
e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict"
e.__esModule=!0
var r,i=n(205),o=(r=i)&&r.__esModule?r:{default:r}
e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(211),__esModule:!0}},function(t,e,n){n(202),n(176),n(150),n(212),n(224),t.exports=n(142).Map},function(t,e,n){"use strict"
var r=n(213)
t.exports=n(220)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(this,t)
return e&&e.v},set:function(t,e){return r.def(this,0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict"
var r=n(146).f,i=n(159),o=n(214),a=n(143),s=n(215),u=n(128),l=n(216),c=n(155),f=n(153),h=n(219),p=n(136),d=n(184).fastKey,g=p?"_s":"size",y=function(t,e){var n,r=d(e)
if("F"!==r)return t._i[r]
for(n=t._f;n;n=n.n)if(n.k==e)return n}
t.exports={getConstructor:function(t,e,n,c){var f=t(function(t,r){s(t,f,e,"_i"),t._i=i(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=r&&l(r,n,t[c],t)})
return o(f.prototype,{clear:function(){for(var t=this._i,e=this._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete t[e.i]
this._f=this._l=void 0,this[g]=0},delete:function(t){var e=y(this,t)
if(e){var n=e.n,r=e.p
delete this._i[e.i],e.r=!0,r&&(r.n=n),n&&(n.p=r),this._f==e&&(this._f=n),this._l==e&&(this._l=r),this[g]--}return!!e},forEach:function(t){s(this,f,"forEach")
for(var e,n=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(n(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(this,t)}}),p&&r(f.prototype,"size",{get:function(){return u(this[g])}}),f},def:function(t,e,n){var r,i,o=y(t,e)
return o?o.v=n:(t._l=o={i:i=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,e,n){c(t,e,function(t,e){this._t=t,this._k=e,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p
return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))},n?"entries":"values",!n,!0),h(e)}}},function(t,e,n){var r=n(145)
t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i])
return t}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!")
return t}},function(t,e,n){var r=n(143),i=n(217),o=n(218),a=n(147),s=n(164),u=n(179),l={},c={};(e=t.exports=function(t,e,n,f,h){var p,d,g,y,v=h?function(){return t}:u(t),b=r(n,f,e?2:1),m=0
if("function"!=typeof v)throw TypeError(t+" is not iterable!")
if(o(v)){for(p=s(t.length);p>m;m++)if((y=e?b(a(d=t[m])[0],d[1]):b(t[m]))===l||y===c)return y}else for(g=v.call(t);!(d=g.next()).done;)if((y=i(g,b,d.value,e))===l||y===c)return y}).BREAK=l,e.RETURN=c},function(t,e,n){var r=n(147)
t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return
throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(154),i=n(173)("iterator"),o=Array.prototype
t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict"
var r=n(139),i=n(142),o=n(146),a=n(136),s=n(173)("species")
t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t]
a&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict"
var r=n(139),i=n(141),o=n(184),a=n(137),s=n(145),u=n(214),l=n(216),c=n(215),f=n(133),h=n(172),p=n(146).f,d=n(221)(0),g=n(136)
t.exports=function(t,e,n,y,v,b){var m=r[t],w=m,x=v?"set":"add",_=w&&w.prototype,k={}
return g&&"function"==typeof w&&(b||_.forEach&&!a(function(){(new w).entries().next()}))?(w=e(function(e,n){c(e,w,t,"_c"),e._c=new m,void 0!=n&&l(n,v,e[x],e)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t
t in _&&(!b||"clear"!=t)&&s(w.prototype,t,function(n,r){if(c(this,w,t),!e&&b&&!f(n))return"get"==t&&void 0
var i=this._c[t](0===n?0:n,r)
return e?this:i})}),"size"in _&&p(w.prototype,"size",{get:function(){return this._c.size}})):(w=y.getConstructor(e,t,v,x),u(w.prototype,n),o.NEED=!0),h(w,t),k[t]=w,i(i.G+i.W+i.F,k),b||y.setStrong(w,t,v),w}},function(t,e,n){var r=n(143),i=n(126),o=n(175),a=n(164),s=n(222)
t.exports=function(t,e){var n=1==t,u=2==t,l=3==t,c=4==t,f=6==t,h=5==t||f,p=e||s
return function(e,s,d){for(var g,y,v=o(e),b=i(v),m=r(s,d,3),w=a(b.length),x=0,_=n?p(e,w):u?p(e,0):void 0;w>x;x++)if((h||x in b)&&(g=b[x],y=m(g,x,v),t))if(n)_[x]=y
else if(y)switch(t){case 3:return!0
case 5:return g
case 6:return x
case 2:_.push(g)}else if(c)return!1
return f?-1:l||c?c:_}}},function(t,e,n){var r=n(223)
t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(133),i=n(199),o=n(173)("species")
t.exports=function(t){var e
return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(141)
r(r.P+r.R,"Map",{toJSON:n(225)("Map")})},function(t,e,n){var r=n(180),i=n(226)
t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic")
return i(this)}}},function(t,e,n){var r=n(216)
t.exports=function(t,e){var n=[]
return r(t,!1,n.push,n,e),n}},function(t,e,n){"use strict"
e.__esModule=!0
var r,i=n(188),o=(r=i)&&r.__esModule?r:{default:r}
e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict"
function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0
var i=r(n(229)),o=r(n(233)),a=r(n(188))
e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,a.default)(e)))
t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(230),__esModule:!0}},function(t,e,n){n(231),t.exports=n(142).Object.setPrototypeOf},function(t,e,n){var r=n(141)
r(r.S,"Object",{setPrototypeOf:n(232).set})},function(t,e,n){var r=n(133),i=n(147),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")}
t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(143)(Function.call,n(129).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){t.exports={default:n(234),__esModule:!0}},function(t,e,n){n(235)
var r=n(142).Object
t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(141)
r(r.S,"Object",{create:n(159)})},function(t,e,n){t.exports={default:n(237),__esModule:!0}},function(t,e,n){n(238)
var r=n(142).Object
t.exports=function(t,e){return r.defineProperties(t,e)}},function(t,e,n){var r=n(141)
r(r.S+r.F*!n(136),"Object",{defineProperties:n(160)})},function(t,e,n){function r(t){return null===t||void 0===t}function i(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length||"function"!=typeof t.copy||"function"!=typeof t.slice||t.length>0&&"number"!=typeof t[0])}var o=Array.prototype.slice,a=n(240),s=n(241),u=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:function(t,e,n){var l,c
if(r(t)||r(e))return!1
if(t.prototype!==e.prototype)return!1
if(s(t))return!!s(e)&&(t=o.call(t),e=o.call(e),u(t,e,n))
if(i(t)){if(!i(e))return!1
if(t.length!==e.length)return!1
for(l=0;l<t.length;l++)if(t[l]!==e[l])return!1
return!0}try{var f=a(t),h=a(e)}catch(t){return!1}if(f.length!=h.length)return!1
for(f.sort(),h.sort(),l=f.length-1;l>=0;l--)if(f[l]!=h[l])return!1
for(l=f.length-1;l>=0;l--)if(c=f[l],!u(t[c],e[c],n))return!1
return typeof t==typeof e}(t,e,n))}},function(t,e){function n(t){var e=[]
for(var n in t)e.push(n)
return e}(t.exports="function"==typeof Object.keys?Object.keys:n).shim=n},function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var i="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();(e=t.exports=i?n:r).supported=n,e.unsupported=r},function(t,e,n){t.exports={default:n(243),__esModule:!0}},function(t,e,n){n(244),t.exports=n(142).Object.assign},function(t,e,n){var r=n(141)
r(r.S+r.F,"Object",{assign:n(245)})},function(t,e,n){"use strict"
var r=n(161),i=n(198),o=n(130),a=n(175),s=n(126),u=Object.assign
t.exports=!u||n(137)(function(){var t={},e={},n=Symbol()
return t[n]=7,"abcdefghijklmnopqrst".split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||"abcdefghijklmnopqrst"!=Object.keys(u({},e)).join("")})?function(t,e){for(var n=a(t),u=arguments.length,l=1,c=i.f,f=o.f;u>l;)for(var h,p=s(arguments[l++]),d=c?r(p).concat(c(p)):r(p),g=d.length,y=0;g>y;)f.call(p,h=d[y++])&&(n[h]=p[h])
return n}:u},function(t,e,n){t.exports={default:n(247),__esModule:!0}},function(t,e,n){n(248),t.exports=n(142).String.fromCodePoint},function(t,e,n){var r=n(141),i=n(166),o=String.fromCharCode,a=String.fromCodePoint
r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],r=arguments.length,a=0;r>a;){if(e=+arguments[a++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point")
n.push(e<65536?o(e):o(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){t.exports={default:n(250),__esModule:!0}},function(t,e,n){n(176),n(251),t.exports=n(142).Array.from},function(t,e,n){"use strict"
var r=n(143),i=n(141),o=n(175),a=n(217),s=n(218),u=n(164),l=n(252),c=n(179)
i(i.S+i.F*!n(253)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,h=o(t),p="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,y=void 0!==g,v=0,b=c(h)
if(y&&(g=r(g,d>2?arguments[2]:void 0,2)),void 0==b||p==Array&&s(b))for(e=u(h.length),n=new p(e);e>v;v++)l(n,v,y?g(h[v],v):h[v])
else for(f=b.call(h),n=new p;!(i=f.next()).done;v++)l(n,v,y?a(f,g,[i.value,v],!0):i.value)
return n.length=v,n}})},function(t,e,n){"use strict"
var r=n(146),i=n(131)
t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(173)("iterator"),i=!1
try{var o=[7][r]()
o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1
var n=!1
try{var o=[7],a=o[r]()
a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},function(t,e,n){t.exports={default:n(255),__esModule:!0}},function(t,e,n){n(202),n(176),n(150),n(256),n(257),t.exports=n(142).Set},function(t,e,n){"use strict"
var r=n(213)
t.exports=n(220)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(this,t=0===t?0:t,t)}},r)},function(t,e,n){var r=n(141)
r(r.P+r.R,"Set",{toJSON:n(225)("Set")})},function(t,e,n){(function(t){var r,i,o,a,s,u,l,c,f,h,p,d,g,y,v,b
d=n(17),y=n(259),b=new d(t("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","base64")),v=Math.log2||function(t){return Math.log(t)/Math.LN2},r=(g=function(t){return v(t)+1|0})(y.categories.length-1),a=g(y.combiningClasses.length-1),f=g(y.scripts.length-1),l=g(y.eaw.length-1),o=a+f+l+10,u=f+l+10,p=l+10,i=(1<<r)-1,s=(1<<a)-1,h=(1<<f)-1,c=(1<<l)-1,e.getCategory=function(t){var e
return e=b.get(t),y.categories[e>>o&i]},e.getCombiningClass=function(t){var e
return e=b.get(t),y.combiningClasses[e>>u&s]},e.getScript=function(t){var e
return e=b.get(t),y.scripts[e>>p&h]},e.getEastAsianWidth=function(t){var e
return e=b.get(t),y.eaw[e>>10&c]},e.getNumericValue=function(t){var e,n,r,i,o
if(0==(r=1023&(o=b.get(t))))return null
if(r<=50)return r-1
if(r<480)return i=(r>>4)-12,e=1+(15&r),i/e
if(r<768){for(o=(r>>5)-14,n=2+(31&r);n>0;)o*=10,n--
return o}for(o=(r>>2)-191,n=1+(3&r);n>0;)o*=60,n--
return o},e.isAlphabetic=function(t){var n
return"Lu"===(n=e.getCategory(t))||"Ll"===n||"Lt"===n||"Lm"===n||"Lo"===n||"Nl"===n},e.isDigit=function(t){return"Nd"===e.getCategory(t)},e.isPunctuation=function(t){var n
return"Pc"===(n=e.getCategory(t))||"Pd"===n||"Pe"===n||"Pf"===n||"Pi"===n||"Po"===n||"Ps"===n},e.isLowerCase=function(t){return"Ll"===e.getCategory(t)},e.isUpperCase=function(t){return"Lu"===e.getCategory(t)},e.isTitleCase=function(t){return"Lt"===e.getCategory(t)},e.isWhiteSpace=function(t){var n
return"Zs"===(n=e.getCategory(t))||"Zl"===n||"Zp"===n},e.isBaseForm=function(t){var n
return"Nd"===(n=e.getCategory(t))||"No"===n||"Nl"===n||"Lu"===n||"Ll"===n||"Lt"===n||"Lm"===n||"Lo"===n||"Me"===n||"Mc"===n},e.isMark=function(t){var n
return"Mn"===(n=e.getCategory(t))||"Me"===n||"Mc"===n}}).call(e,n(2).Buffer)},function(t,e){t.exports={categories:["Cc","Zs","Po","Sc","Ps","Pe","Sm","Pd","Nd","Lu","Sk","Pc","Ll","So","Lo","Pi","Cf","No","Pf","Lt","Lm","Mn","Me","Mc","Nl","Zl","Zp","Cs","Co"],combiningClasses:["Not_Reordered","Above","Above_Right","Below","Attached_Above_Right","Attached_Below","Overlay","Iota_Subscript","Double_Below","Double_Above","Below_Right","Above_Left","CCC10","CCC11","CCC12","CCC13","CCC14","CCC15","CCC16","CCC17","CCC18","CCC19","CCC20","CCC21","CCC22","CCC23","CCC24","CCC25","CCC30","CCC31","CCC32","CCC27","CCC28","CCC29","CCC33","CCC34","CCC35","CCC36","Nukta","Virama","CCC84","CCC91","CCC103","CCC107","CCC118","CCC122","CCC129","CCC130","CCC132","Attached_Above","Below_Left","Left","Kana_Voicing","CCC26","Right"],scripts:["Common","Latin","Bopomofo","Inherited","Greek","Coptic","Cyrillic","Armenian","Hebrew","Arabic","Syriac","Thaana","Nko","Samaritan","Mandaic","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","Hangul","Ethiopic","Cherokee","Canadian_Aboriginal","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","Tai_Le","New_Tai_Lue","Buginese","Tai_Tham","Balinese","Sundanese","Batak","Lepcha","Ol_Chiki","Braille","Glagolitic","Tifinagh","Han","Hiragana","Katakana","Yi","Lisu","Vai","Bamum","Syloti_Nagri","Phags_Pa","Saurashtra","Kayah_Li","Rejang","Javanese","Cham","Tai_Viet","Meetei_Mayek","null","Linear_B","Lycian","Carian","Old_Italic","Gothic","Old_Permic","Ugaritic","Old_Persian","Deseret","Shavian","Osmanya","Elbasan","Caucasian_Albanian","Linear_A","Cypriot","Imperial_Aramaic","Palmyrene","Nabataean","Hatran","Phoenician","Lydian","Meroitic_Hieroglyphs","Meroitic_Cursive","Kharoshthi","Old_South_Arabian","Old_North_Arabian","Manichaean","Avestan","Inscriptional_Parthian","Inscriptional_Pahlavi","Psalter_Pahlavi","Old_Turkic","Old_Hungarian","Brahmi","Kaithi","Sora_Sompeng","Chakma","Mahajani","Sharada","Khojki","Multani","Khudawadi","Grantha","Tirhuta","Siddham","Modi","Takri","Ahom","Warang_Citi","Pau_Cin_Hau","Cuneiform","Egyptian_Hieroglyphs","Anatolian_Hieroglyphs","Mro","Bassa_Vah","Pahawh_Hmong","Miao","Duployan","SignWriting","Mende_Kikakui"],eaw:["N","Na","A","W","H","F"]}},function(t,e,n){"use strict"
function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var i=r(n(261)),o=r(n(148)),a=r(n(265)),s=r(n(266)),u=r(n(189)),l=r(n(208)),c=r(n(209)),f=function(){function t(e){l(this,t),this.stateTable=e.stateTable,this.accepting=e.accepting,this.tags=e.tags}return c(t,[{key:"match",value:function(t){var e=this
return a({},u,s.mark(function n(){var r,i,o,a,u,l
return s.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=1,i=null,o=null,a=null,u=0
case 5:if(!(u<t.length)){n.next=21
break}if(l=t[u],a=r,0!==(r=e.stateTable[r][l])){n.next=15
break}if(!(null!=i&&null!=o&&o>=i)){n.next=13
break}return n.next=13,[i,o,e.tags[a]]
case 13:r=e.stateTable[1][l],i=null
case 15:0!==r&&null==i&&(i=u),e.accepting[r]&&(o=u),0===r&&(r=1)
case 18:u++,n.next=5
break
case 21:if(!(null!=i&&null!=o&&o>=i)){n.next=24
break}return n.next=24,[i,o,e.tags[r]]
case 24:case"end":return n.stop()}},n,this)}))}},{key:"apply",value:function(t,e){var n=!0,r=!1,a=void 0
try{for(var s,u=o(this.match(t));!(n=(s=u.next()).done);n=!0){var l=i(s.value,3),c=l[0],f=l[1],h=l[2],p=!0,d=!1,g=void 0
try{for(var y,v=o(h);!(p=(y=v.next()).done);p=!0){var b=y.value
"function"==typeof e[b]&&e[b](c,f,t.slice(c,f+1))}}catch(t){d=!0,g=t}finally{try{!p&&v.return&&v.return()}finally{if(d)throw g}}}}catch(t){r=!0,a=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw a}}}}]),t}()
t.exports=f},function(t,e,n){"use strict"
function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0
var i=r(n(262)),o=r(n(148))
e.default=function(){return function(t,e){if(Array.isArray(t))return t
if((0,i.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,a=void 0
try{for(var s,u=(0,o.default)(t);!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}(t,e)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(263),__esModule:!0}},function(t,e,n){n(150),n(176),t.exports=n(264)},function(t,e,n){var r=n(180),i=n(173)("iterator"),o=n(154)
t.exports=n(142).isIterable=function(t){var e=Object(t)
return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(r(e))}},function(t,e,n){"use strict"
e.__esModule=!0
var r,i=n(205),o=(r=i)&&r.__esModule?r:{default:r}
e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports=n(267)},function(t,e,n){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime
if(r.regeneratorRuntime=void 0,t.exports=n(268),i)r.regeneratorRuntime=o
else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(e,function(){return this}())},function(t,e){(function(e){!function(e){"use strict"
function n(t,e,n,o){var a,s,u,c,f=e&&e.prototype instanceof i?e:i,p=Object.create(f.prototype),g=new h(o||[])
return p._invoke=(a=t,s=n,u=g,c=S,function(t,e){if(c===A)throw new Error("Generator is already running")
if(c===P){if("throw"===t)throw e
return d()}for(u.method=t,u.arg=e;;){var n=u.delegate
if(n){var i=l(n,u)
if(i){if(i===E)continue
return i}}if("next"===u.method)u.sent=u._sent=u.arg
else if("throw"===u.method){if(c===S)throw c=P,u.arg
u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg)
c=A
var o=r(a,s,u)
if("normal"===o.type){if(c=u.done?P:C,o.arg===E)continue
return{value:o.arg,done:u.done}}"throw"===o.type&&(c=P,u.method="throw",u.arg=o.arg)}}),p}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function n(e,i,o,a){var s=r(t[e],t,i)
if("throw"!==s.type){var u=s.arg,l=u.value
return l&&"object"==typeof l&&v.call(l,"__await")?Promise.resolve(l.__await).then(function(t){n("next",t,o,a)},function(t){n("throw",t,o,a)}):Promise.resolve(l).then(function(t){u.value=t,o(u)},a)}a(s.arg)}var i
"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n)),this._invoke=function(t,e){function r(){return new Promise(function(r,i){n(t,e,r,i)})}return i=i?i.then(r,r):r()}}function l(t,e){var n=t.iterator[e.method]
if(n===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,l(t,e),"throw"===e.method))return E
e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return E}var i=r(n,t.iterator,e.arg)
if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,E
var o=i.arg
return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,E):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,E)}function c(t){var e={tryLoc:t[0]}
1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{}
e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(c,this),this.reset(!0)}function p(t){if(t){var e=t[m]
if(e)return e.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(v.call(t,n))return e.value=t[n],e.done=!1,e
return e.value=g,e.done=!0,e}
return r.next=r}}return{next:d}}function d(){return{value:g,done:!0}}var g,y=Object.prototype,v=y.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},m=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",x=b.toStringTag||"@@toStringTag",_="object"==typeof t,k=e.regeneratorRuntime
if(k)_&&(t.exports=k)
else{(k=e.regeneratorRuntime=_?t.exports:{}).wrap=n
var S="suspendedStart",C="suspendedYield",A="executing",P="completed",E={},I={}
I[m]=function(){return this}
var T=Object.getPrototypeOf,O=T&&T(T(p([])))
O&&O!==y&&v.call(O,m)&&(I=O)
var B=a.prototype=i.prototype=Object.create(I)
o.prototype=B.constructor=a,a.constructor=o,a[x]=o.displayName="GeneratorFunction",k.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor
return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},k.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(B),t},k.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[w]=function(){return this},k.AsyncIterator=u,k.async=function(t,e,r,i){var o=new u(n(t,e,r,i))
return k.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(B),B[x]="Generator",B[m]=function(){return this},B.toString=function(){return"[object Generator]"},k.keys=function(t){var e=[]
for(var n in t)e.push(n)
return e.reverse(),function n(){for(;e.length;){var r=e.pop()
if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},k.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(t){function e(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=g),!!r}if(this.done)throw t
for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion
if("root"===i.tryLoc)return e("end")
if(i.tryLoc<=this.prev){var a=v.call(i,"catchLoc"),s=v.call(i,"finallyLoc")
if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)
if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally")
if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n]
if(r.tryLoc<=this.prev&&v.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r
break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null)
var o=i?i.completion:{}
return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,E):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),E},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),f(n),E}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.tryLoc===t){var r=n.completion
if("throw"===r.type){var i=r.arg
f(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=g),E}}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,function(){return this}())},function(t,e,n){t.exports={default:n(270),__esModule:!0}},function(t,e,n){n(271),t.exports=Math.pow(2,-52)},function(t,e,n){var r=n(141)
r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){(function(e){var n=function(){"use strict"
function t(n,i,o,a){"object"==typeof i&&(o=i.depth,a=i.prototype,i.filter,i=i.circular)
var s=[],u=[],l=void 0!==e
return void 0===i&&(i=!0),void 0===o&&(o=1/0),function n(o,c){if(null===o)return null
if(0==c)return o
var f,h
if("object"!=typeof o)return o
if(t.__isArray(o))f=[]
else if(t.__isRegExp(o))f=new RegExp(o.source,r(o)),o.lastIndex&&(f.lastIndex=o.lastIndex)
else if(t.__isDate(o))f=new Date(o.getTime())
else{if(l&&e.isBuffer(o))return f=new e(o.length),o.copy(f),f
void 0===a?(h=Object.getPrototypeOf(o),f=Object.create(h)):(f=Object.create(a),h=a)}if(i){var p=s.indexOf(o)
if(-1!=p)return u[p]
s.push(o),u.push(f)}for(var d in o){var g
h&&(g=Object.getOwnPropertyDescriptor(h,d)),g&&null==g.set||(f[d]=n(o[d],c-1))}return f}(n,o)}function n(t){return Object.prototype.toString.call(t)}function r(t){var e=""
return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return t.clonePrototype=function(t){if(null===t)return null
var e=function(){}
return e.prototype=t,new e},t.__objToStr=n,t.__isDate=function(t){return"object"==typeof t&&"[object Date]"===n(t)},t.__isArray=function(t){return"object"==typeof t&&"[object Array]"===n(t)},t.__isRegExp=function(t){return"object"==typeof t&&"[object RegExp]"===n(t)},t.__getRegExpFlags=r,t}()
"object"==typeof t&&t.exports&&(t.exports=n)}).call(e,n(2).Buffer)},function(t,e,n){t.exports=n(274).BrotliDecompressBuffer},function(t,e,n){function r(t){var e
return 0===t.readBits(1)?16:(e=t.readBits(3))>0?17+e:(e=t.readBits(3))>0?8+e:17}function i(t){if(t.readBits(1)){var e=t.readBits(3)
return 0===e?1:t.readBits(e)+(1<<e)}return 0}function o(t){var e,n,r,i=new function(){this.meta_block_length=0,this.input_end=0,this.is_uncompressed=0,this.is_metadata=!1}
if(i.input_end=t.readBits(1),i.input_end&&t.readBits(1))return i
if(7===(e=t.readBits(2)+4)){if(i.is_metadata=!0,0!==t.readBits(1))throw new Error("Invalid reserved bit")
if(0===(n=t.readBits(2)))return i
for(r=0;r<n;r++){var o=t.readBits(8)
if(r+1===n&&n>1&&0===o)throw new Error("Invalid size byte")
i.meta_block_length|=o<<8*r}}else for(r=0;r<e;++r){var a=t.readBits(4)
if(r+1===e&&e>4&&0===a)throw new Error("Invalid size nibble")
i.meta_block_length|=a<<4*r}return++i.meta_block_length,i.input_end||i.is_metadata||(i.is_uncompressed=t.readBits(1)),i}function a(t,e,n){var r
return n.fillBitWindow(),(r=t[e+=n.val_>>>n.bit_pos_&L].bits-B)>0&&(n.bit_pos_+=B,e+=t[e].value,e+=n.val_>>>n.bit_pos_&(1<<r)-1),n.bit_pos_+=t[e].bits,t[e].value}function s(t,e,n,r){var i,o,a=new Uint8Array(t)
if(r.readMoreInput(),1===(i=r.readBits(2))){for(var s=t-1,u=0,l=new Int32Array(4),c=r.readBits(2)+1;s;)s>>=1,++u
for(f=0;f<c;++f)l[f]=r.readBits(u)%t,a[l[f]]=2
switch(a[l[0]]=1,c){case 1:break
case 3:if(l[0]===l[1]||l[0]===l[2]||l[1]===l[2])throw new Error("[ReadHuffmanCode] invalid symbols")
break
case 2:if(l[0]===l[1])throw new Error("[ReadHuffmanCode] invalid symbols")
a[l[1]]=1
break
case 4:if(l[0]===l[1]||l[0]===l[2]||l[0]===l[3]||l[1]===l[2]||l[1]===l[3]||l[2]===l[3])throw new Error("[ReadHuffmanCode] invalid symbols")
r.readBits(1)?(a[l[2]]=3,a[l[3]]=3):a[l[0]]=2}}else{var f,h=new Uint8Array(M),p=32,d=0,g=[new w(2,0),new w(2,4),new w(2,3),new w(3,2),new w(2,0),new w(2,4),new w(2,3),new w(4,1),new w(2,0),new w(2,4),new w(2,3),new w(3,2),new w(2,0),new w(2,4),new w(2,3),new w(4,5)]
for(f=i;f<M&&p>0;++f){var y,v=F[f],b=0
r.fillBitWindow(),b+=r.val_>>>r.bit_pos_&15,r.bit_pos_+=g[b].bits,y=g[b].value,h[v]=y,0!==y&&(p-=32>>y,++d)}if(1!==d&&0!==p)throw new Error("[ReadHuffmanCode] invalid num_codes or space");(function(t,e,n,r){for(var i=0,o=C,a=0,s=0,u=32768,l=[],c=0;c<32;c++)l.push(new w(0,0))
for(x(l,0,5,t,M);i<e&&u>0;){var f,h=0
if(r.readMoreInput(),r.fillBitWindow(),h+=r.val_>>>r.bit_pos_&31,r.bit_pos_+=l[h].bits,(f=255&l[h].value)<A)a=0,n[i++]=f,0!==f&&(o=f,u-=32768>>f)
else{var p,d,g=f-14,y=0
if(f===A&&(y=o),s!==y&&(a=0,s=y),p=a,a>0&&(a-=2,a<<=g),i+(d=(a+=r.readBits(g)+3)-p)>e)throw new Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols")
for(var v=0;v<d;v++)n[i+v]=s
i+=d,0!==s&&(u-=d<<15-s)}}if(0!==u)throw new Error("[ReadHuffmanCodeLengths] space = "+u)
for(;i<e;i++)n[i]=0})(h,t,a,r)}if(0===(o=x(e,n,B,a,t)))throw new Error("[ReadHuffmanCode] BuildHuffmanTable failed: ")
return o}function u(t,e,n){var r,i
return r=a(t,e,n),i=k.kBlockLengthPrefixCode[r].nbits,k.kBlockLengthPrefixCode[r].offset+n.readBits(i)}function l(t,e){for(var n=t[e],r=e;r;--r)t[r]=t[r-1]
t[0]=n}function c(t,e){this.alphabet_size=t,this.num_htrees=e,this.codes=new Array(e+e*U[t+31>>>5]),this.htrees=new Uint32Array(e)}function f(t,e){var n,r,o={num_htrees:null,context_map:null},u=0
e.readMoreInput()
var c=o.num_htrees=i(e)+1,f=o.context_map=new Uint8Array(t)
if(c<=1)return o
for(e.readBits(1)&&(u=e.readBits(4)+1),n=[],r=0;r<R;r++)n[r]=new w(0,0)
for(s(c+u,n,0,e),r=0;r<t;){var h
if(e.readMoreInput(),0===(h=a(n,0,e)))f[r]=0,++r
else if(h<=u)for(var p=1+(1<<h)+e.readBits(h);--p;){if(r>=t)throw new Error("[DecodeContextMap] i >= context_map_size")
f[r]=0,++r}else f[r]=h-u,++r}return e.readBits(1)&&function(t,e){var n,r=new Uint8Array(256)
for(n=0;n<256;++n)r[n]=n
for(n=0;n<e;++n){var i=t[n]
t[n]=r[i],i&&l(r,i)}}(f,t),o}function h(t,e,n,r,i,o,s){var u,l=2*n,c=n,f=a(e,n*R,s);(u=0===f?i[l+(1&o[c])]:1===f?i[l+(o[c]-1&1)]+1:f-2)>=t&&(u-=t),r[n]=u,i[l+(1&o[c])]=u,++o[c]}function p(t,e,n,r,i,o){var a,s=i+1,u=n&i,l=o.pos_&b.IBUF_MASK
if(e<8||o.bit_pos_+(e<<3)<o.bit_end_pos_)for(;e-- >0;)o.readMoreInput(),r[u++]=o.readBits(8),u===s&&(t.write(r,s),u=0)
else{if(o.bit_end_pos_<32)throw new Error("[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32")
for(;o.bit_pos_<32;)r[u]=o.val_>>>o.bit_pos_,o.bit_pos_+=8,++u,--e
if(l+(a=o.bit_end_pos_-o.bit_pos_>>3)>b.IBUF_MASK){for(var c=b.IBUF_MASK+1-l,f=0;f<c;f++)r[u+f]=o.buf_[l+f]
a-=c,u+=c,e-=c,l=0}for(f=0;f<a;f++)r[u+f]=o.buf_[l+f]
if(e-=a,(u+=a)>=s){t.write(r,s),u-=s
for(f=0;f<u;f++)r[f]=r[s+f]}for(;u+e>=s;){if(a=s-u,o.input_.read(r,u,a)<a)throw new Error("[CopyUncompressedBlockToOutput] not enough bytes")
t.write(r,s),e-=a,u=0}if(o.input_.read(r,u,e)<e)throw new Error("[CopyUncompressedBlockToOutput] not enough bytes")
o.reset()}}function d(t){var e=new y(t),n=new b(e)
return r(n),o(n).meta_block_length}function g(t,e){var n,l,d,g,y,v,x,C,A,B,L,M,F,U,W,j,G=0,V=0,H=0,q=[16,15,11,4],Z=0,Y=0,X=0,K=[new c(0,0),new c(0,0),new c(0,0)],J=128+b.READ_SIZE
l=(1<<(B=r(A=new b(t))))-16,g=(d=1<<B)-1,y=new Uint8Array(d+J+m.maxDictionaryWordLength),v=d,x=[],C=[]
for(var Q=0;Q<3*R;Q++)x[Q]=new w(0,0),C[Q]=new w(0,0)
for(;!V;){var $,tt,et,nt,rt,it,ot,at,st,ut=0,lt=[1<<28,1<<28,1<<28],ct=[0],ft=[1,1,1],ht=[0,1,0,1,0,1],pt=[0],dt=null,gt=null,yt=null,vt=0,bt=null,mt=0,wt=null,xt=0,_t=0,kt=0
for(n=0;n<3;++n)K[n].codes=null,K[n].htrees=null
A.readMoreInput()
var St=o(A)
if(G+(ut=St.meta_block_length)>e.buffer.length){var Ct=new Uint8Array(G+ut)
Ct.set(e.buffer),e.buffer=Ct}if(V=St.input_end,$=St.is_uncompressed,St.is_metadata)for(W=A,void 0,j=W.bit_pos_+7&-8,W.readBits(j-W.bit_pos_);ut>0;--ut)A.readMoreInput(),A.readBits(8)
else if(0!==ut)if($)A.bit_pos_=A.bit_pos_+7&-8,p(e,ut,G,y,g,A),G+=ut
else{for(n=0;n<3;++n)ft[n]=i(A)+1,ft[n]>=2&&(s(ft[n]+2,x,n*R,A),s(I,C,n*R,A),lt[n]=u(C,n*R,A),pt[n]=1)
for(A.readMoreInput(),nt=(1<<(tt=A.readBits(2)))-1,rt=(et=z+(A.readBits(4)<<tt))+(48<<tt),gt=new Uint8Array(ft[0]),n=0;n<ft[0];++n)A.readMoreInput(),gt[n]=A.readBits(2)<<1
var At=f(ft[0]<<T,A)
it=At.num_htrees,dt=At.context_map
var Pt=f(ft[2]<<O,A)
for(ot=Pt.num_htrees,yt=Pt.context_map,K[0]=new c(P,it),K[1]=new c(E,ft[1]),K[2]=new c(rt,ot),n=0;n<3;++n)K[n].decode(A)
for(bt=0,wt=0,at=gt[ct[0]],_t=_.lookupOffsets[at],kt=_.lookupOffsets[at+1],st=K[1].htrees[0];ut>0;){var Et,It,Tt,Ot,Bt,Lt,Rt,Mt,Ft,zt,Dt,Nt,Ut
for(A.readMoreInput(),0===lt[1]&&(h(ft[1],x,1,ct,ht,pt,A),lt[1]=u(C,R,A),st=K[1].htrees[ct[1]]),--lt[1],(It=(Et=a(K[1].codes,st,A))>>6)>=2?(It-=2,Rt=-1):Rt=0,Tt=k.kInsertRangeLut[It]+(Et>>3&7),Ot=k.kCopyRangeLut[It]+(7&Et),Bt=k.kInsertLengthPrefixCode[Tt].offset+A.readBits(k.kInsertLengthPrefixCode[Tt].nbits),Lt=k.kCopyLengthPrefixCode[Ot].offset+A.readBits(k.kCopyLengthPrefixCode[Ot].nbits),Y=y[G-1&g],X=y[G-2&g],Ft=0;Ft<Bt;++Ft)A.readMoreInput(),0===lt[0]&&(h(ft[0],x,0,ct,ht,pt,A),lt[0]=u(C,0,A),vt=ct[0]<<T,bt=vt,at=gt[ct[0]],_t=_.lookupOffsets[at],kt=_.lookupOffsets[at+1]),Dt=_.lookup[_t+Y]|_.lookup[kt+X],mt=dt[bt+Dt],--lt[0],X=Y,Y=a(K[0].codes,K[0].htrees[mt],A),y[G&g]=Y,(G&g)===g&&e.write(y,d),++G
if((ut-=Bt)<=0)break
if(Rt<0)if(A.readMoreInput(),0===lt[2]&&(h(ft[2],x,2,ct,ht,pt,A),lt[2]=u(C,2*R,A),wt=ct[2]<<O),--lt[2],xt=yt[wt+(Dt=255&(Lt>4?3:Lt-2))],(Rt=a(K[2].codes,K[2].htrees[xt],A))>=et)Ut=(Rt-=et)&nt,Rt=et+((Wt=(2+(1&(Rt>>=tt))<<(Nt=1+(Rt>>1)))-4)+A.readBits(Nt)<<tt)+Ut
if(M=q,F=Z,U=void 0,(L=Rt)<z?(F+=D[L],U=M[F&=3]+N[L]):U=L-z+1,(Mt=U)<0)throw new Error("[BrotliDecompress] invalid distance")
if(zt=G&g,Mt>(H=G<l&&H!==l?G:l)){if(!(Lt>=m.minDictionaryWordLength&&Lt<=m.maxDictionaryWordLength))throw new Error("Invalid backward reference. pos: "+G+" distance: "+Mt+" len: "+Lt+" bytes left: "+ut)
var Wt=m.offsetsByLength[Lt],jt=Mt-H-1,Gt=m.sizeBitsByLength[Lt],Vt=jt>>Gt
if(Wt+=(jt&(1<<Gt)-1)*Lt,!(Vt<S.kNumTransforms))throw new Error("Invalid backward reference. pos: "+G+" distance: "+Mt+" len: "+Lt+" bytes left: "+ut)
var Ht=S.transformDictionaryWord(y,zt,Wt,Lt,Vt)
if(G+=Ht,ut-=Ht,(zt+=Ht)>=v){e.write(y,d)
for(var qt=0;qt<zt-v;qt++)y[qt]=y[v+qt]}}else{if(Rt>0&&(q[3&Z]=Mt,++Z),Lt>ut)throw new Error("Invalid backward reference. pos: "+G+" distance: "+Mt+" len: "+Lt+" bytes left: "+ut)
for(Ft=0;Ft<Lt;++Ft)y[G&g]=y[G-Mt&g],(G&g)===g&&e.write(y,d),++G,--ut}Y=y[G-1&g],X=y[G-2&g]}G&=1073741823}}e.write(y,G&g)}var y=n(275).BrotliInput,v=n(275).BrotliOutput,b=n(276),m=n(277),w=n(281).HuffmanCode,x=n(281).BrotliBuildHuffmanTable,_=n(282),k=n(283),S=n(284),C=8,A=16,P=256,E=704,I=26,T=6,O=2,B=8,L=255,R=1080,M=18,F=new Uint8Array([1,2,3,4,0,5,17,6,16,7,8,9,10,11,12,13,14,15]),z=16,D=new Uint8Array([3,2,1,0,3,3,3,3,3,3,2,2,2,2,2,2]),N=new Int8Array([0,0,0,0,-1,1,-2,2,-3,3,-1,1,-2,2,-3,3]),U=new Uint16Array([256,402,436,468,500,534,566,598,630,662,694,726,758,790,822,854,886,920,952,984,1016,1048,1080])
c.prototype.decode=function(t){var e,n,r=0
for(e=0;e<this.num_htrees;++e)this.htrees[e]=r,n=s(this.alphabet_size,this.codes,r,t),r+=n},e.BrotliDecompressedSize=d,e.BrotliDecompressBuffer=function(t,e){var n=new y(t)
null==e&&(e=d(t))
var r=new Uint8Array(e),i=new v(r)
return g(n,i),i.pos<i.buffer.length&&(i.buffer=i.buffer.subarray(0,i.pos)),i.buffer},e.BrotliDecompress=g,m.init()},function(t,e){function n(t){this.buffer=t,this.pos=0}function r(t){this.buffer=t,this.pos=0}n.prototype.read=function(t,e,n){this.pos+n>this.buffer.length&&(n=this.buffer.length-this.pos)
for(var r=0;r<n;r++)t[e+r]=this.buffer[this.pos+r]
return this.pos+=n,n},e.BrotliInput=n,r.prototype.write=function(t,e){if(this.pos+e>this.buffer.length)throw new Error("Output buffer is not large enough")
return this.buffer.set(t.subarray(0,e),this.pos),this.pos+=e,e},e.BrotliOutput=r},function(t,e){function n(t){this.buf_=new Uint8Array(r),this.input_=t,this.reset()}var r=8224,i=new Uint32Array([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215])
n.READ_SIZE=4096,n.IBUF_MASK=8191,n.prototype.reset=function(){this.buf_ptr_=0,this.val_=0,this.pos_=0,this.bit_pos_=0,this.bit_end_pos_=0,this.eos_=0,this.readMoreInput()
for(var t=0;t<4;t++)this.val_|=this.buf_[this.pos_]<<8*t,++this.pos_
return this.bit_end_pos_>0},n.prototype.readMoreInput=function(){if(!(this.bit_end_pos_>256))if(this.eos_){if(this.bit_pos_>this.bit_end_pos_)throw new Error("Unexpected end of input "+this.bit_pos_+" "+this.bit_end_pos_)}else{var t=this.buf_ptr_,e=this.input_.read(this.buf_,t,4096)
if(e<0)throw new Error("Unexpected end of input")
if(e<4096){this.eos_=1
for(var n=0;n<32;n++)this.buf_[t+e+n]=0}if(0===t){for(n=0;n<32;n++)this.buf_[8192+n]=this.buf_[n]
this.buf_ptr_=4096}else this.buf_ptr_=0
this.bit_end_pos_+=e<<3}},n.prototype.fillBitWindow=function(){for(;this.bit_pos_>=8;)this.val_>>>=8,this.val_|=this.buf_[8191&this.pos_]<<24,++this.pos_,this.bit_pos_=this.bit_pos_-8>>>0,this.bit_end_pos_=this.bit_end_pos_-8>>>0},n.prototype.readBits=function(t){32-this.bit_pos_<t&&this.fillBitWindow()
var e=this.val_>>>this.bit_pos_&i[t]
return this.bit_pos_+=t,e},t.exports=n},function(t,e,n){var r=n(278)
e.init=function(){e.dictionary=r.init()},e.offsetsByLength=new Uint32Array([0,0,0,0,0,4096,9216,21504,35840,44032,53248,63488,74752,87040,93696,100864,104704,106752,108928,113536,115968,118528,119872,121280,122016]),e.sizeBitsByLength=new Uint8Array([0,0,0,0,10,10,11,11,10,10,10,10,10,9,9,8,7,7,8,7,7,6,6,5,5]),e.minDictionaryWordLength=4,e.maxDictionaryWordLength=24},function(t,e,n){var r=n(279)
n(56),e.init=function(){return(0,n(274).BrotliDecompressBuffer)(r.toByteArray(n(280)))}},function(t,e){"use strict"
function n(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
return"="===t[e-2]?2:"="===t[e-1]?1:0}function r(t,e,n){for(var r,o=[],a=e;a<n;a+=3)r=(t[a]<<16)+(t[a+1]<<8)+t[a+2],o.push((s=r,i[s>>18&63]+i[s>>12&63]+i[s>>6&63]+i[63&s]))
var s
return o.join("")}e.byteLength=function(t){return 3*t.length/4-n(t)},e.toByteArray=function(t){var e,r,i,s,u,l,c=t.length
u=n(t),l=new a(3*c/4-u),i=u>0?c-4:c
var f=0
for(e=0,r=0;e<i;e+=4,r+=3)s=o[t.charCodeAt(e)]<<18|o[t.charCodeAt(e+1)]<<12|o[t.charCodeAt(e+2)]<<6|o[t.charCodeAt(e+3)],l[f++]=s>>16&255,l[f++]=s>>8&255,l[f++]=255&s
return 2===u?(s=o[t.charCodeAt(e)]<<2|o[t.charCodeAt(e+1)]>>4,l[f++]=255&s):1===u&&(s=o[t.charCodeAt(e)]<<10|o[t.charCodeAt(e+1)]<<4|o[t.charCodeAt(e+2)]>>2,l[f++]=s>>8&255,l[f++]=255&s),l},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,a="",s=[],u=0,l=n-o;u<l;u+=16383)s.push(r(t,u,u+16383>l?l:u+16383))
return 1===o?(e=t[n-1],a+=i[e>>2],a+=i[e<<4&63],a+="=="):2===o&&(e=(t[n-2]<<8)+t[n-1],a+=i[e>>10],a+=i[e>>4&63],a+=i[e<<2&63],a+="="),s.push(a),s.join("")}
for(var i=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,l=s.length;u<l;++u)i[u]=s[u],o[s.charCodeAt(u)]=u
o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){t.exports="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"},function(t,e){function n(t,e){this.bits=t,this.value=e}function r(t,e){for(var n=1<<e-1;t&n;)n>>=1
return(t&n-1)+n}function i(t,e,r,i,o){do{t[e+(i-=r)]=new n(o.bits,o.value)}while(i>0)}function o(t,e,n){for(var r=1<<e-n;e<a&&!((r-=t[e])<=0);)++e,r<<=1
return e-n}e.HuffmanCode=n
var a=15
e.BrotliBuildHuffmanTable=function(t,e,s,u,l){var c,f,h,p,d,g,y,v,b,m,w,x=e,_=new Int32Array(a+1),k=new Int32Array(a+1)
for(w=new Int32Array(l),h=0;h<l;h++)_[u[h]]++
for(k[1]=0,f=1;f<a;f++)k[f+1]=k[f]+_[f]
for(h=0;h<l;h++)0!==u[h]&&(w[k[u[h]]++]=h)
if(m=b=1<<(v=s),1===k[a]){for(p=0;p<m;++p)t[e+p]=new n(0,65535&w[0])
return m}for(p=0,h=0,f=1,d=2;f<=s;++f,d<<=1)for(;_[f]>0;--_[f])c=new n(255&f,65535&w[h++]),i(t,e+p,d,b,c),p=r(p,f)
for(y=m-1,g=-1,f=s+1,d=2;f<=a;++f,d<<=1)for(;_[f]>0;--_[f])(p&y)!==g&&(e+=b,v=o(_,f,s),b=1<<v,m+=b,g=p&y,t[x+g]=new n(v+s&255,e-x-g&65535)),c=new n(f-s&255,65535&w[h++]),i(t,e+(p>>s),d,b,c),p=r(p,f)
return m}},function(t,e){e.lookup=new Uint8Array([0,0,0,0,0,0,0,0,0,4,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,12,16,12,12,20,12,16,24,28,12,12,32,12,36,12,44,44,44,44,44,44,44,44,44,44,32,32,24,40,28,12,12,48,52,52,52,48,52,52,52,48,52,52,52,52,52,48,52,52,52,52,52,48,52,52,52,52,52,24,12,28,12,12,12,56,60,60,60,56,60,60,60,56,60,60,60,60,60,56,60,60,60,60,60,56,60,60,60,60,60,24,12,28,12,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,56,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),e.lookupOffsets=new Uint16Array([1024,1536,1280,1536,0,256,768,512])},function(t,e){function n(t,e){this.offset=t,this.nbits=e}e.kBlockLengthPrefixCode=[new n(1,2),new n(5,2),new n(9,2),new n(13,2),new n(17,3),new n(25,3),new n(33,3),new n(41,3),new n(49,4),new n(65,4),new n(81,4),new n(97,4),new n(113,5),new n(145,5),new n(177,5),new n(209,5),new n(241,6),new n(305,6),new n(369,7),new n(497,8),new n(753,9),new n(1265,10),new n(2289,11),new n(4337,12),new n(8433,13),new n(16625,24)],e.kInsertLengthPrefixCode=[new n(0,0),new n(1,0),new n(2,0),new n(3,0),new n(4,0),new n(5,0),new n(6,1),new n(8,1),new n(10,2),new n(14,2),new n(18,3),new n(26,3),new n(34,4),new n(50,4),new n(66,5),new n(98,5),new n(130,6),new n(194,7),new n(322,8),new n(578,9),new n(1090,10),new n(2114,12),new n(6210,14),new n(22594,24)],e.kCopyLengthPrefixCode=[new n(2,0),new n(3,0),new n(4,0),new n(5,0),new n(6,0),new n(7,0),new n(8,0),new n(9,0),new n(10,1),new n(12,1),new n(14,2),new n(18,2),new n(22,3),new n(30,3),new n(38,4),new n(54,4),new n(70,5),new n(102,5),new n(134,6),new n(198,7),new n(326,8),new n(582,9),new n(1094,10),new n(2118,24)],e.kInsertRangeLut=[0,0,8,8,0,16,8,16,16],e.kCopyRangeLut=[0,8,0,8,16,0,16,8,16]},function(t,e,n){function r(t,e,n){this.prefix=new Uint8Array(t.length),this.transform=e,this.suffix=new Uint8Array(n.length)
for(var r=0;r<t.length;r++)this.prefix[r]=t.charCodeAt(r)
for(r=0;r<n.length;r++)this.suffix[r]=n.charCodeAt(r)}function i(t,e){return t[e]<192?(t[e]>=97&&t[e]<=122&&(t[e]^=32),1):t[e]<224?(t[e+1]^=32,2):(t[e+2]^=5,3)}var o=n(277),a=[new r("",0,""),new r("",0," "),new r(" ",0," "),new r("",12,""),new r("",10," "),new r("",0," the "),new r(" ",0,""),new r("s ",0," "),new r("",0," of "),new r("",10,""),new r("",0," and "),new r("",13,""),new r("",1,""),new r(", ",0," "),new r("",0,", "),new r(" ",10," "),new r("",0," in "),new r("",0," to "),new r("e ",0," "),new r("",0,'"'),new r("",0,"."),new r("",0,'">'),new r("",0,"\n"),new r("",3,""),new r("",0,"]"),new r("",0," for "),new r("",14,""),new r("",2,""),new r("",0," a "),new r("",0," that "),new r(" ",10,""),new r("",0,". "),new r(".",0,""),new r(" ",0,", "),new r("",15,""),new r("",0," with "),new r("",0,"'"),new r("",0," from "),new r("",0," by "),new r("",16,""),new r("",17,""),new r(" the ",0,""),new r("",4,""),new r("",0,". The "),new r("",11,""),new r("",0," on "),new r("",0," as "),new r("",0," is "),new r("",7,""),new r("",1,"ing "),new r("",0,"\n\t"),new r("",0,":"),new r(" ",0,". "),new r("",0,"ed "),new r("",20,""),new r("",18,""),new r("",6,""),new r("",0,"("),new r("",10,", "),new r("",8,""),new r("",0," at "),new r("",0,"ly "),new r(" the ",0," of "),new r("",5,""),new r("",9,""),new r(" ",10,", "),new r("",10,'"'),new r(".",0,"("),new r("",11," "),new r("",10,'">'),new r("",0,'="'),new r(" ",0,"."),new r(".com/",0,""),new r(" the ",0," of the "),new r("",10,"'"),new r("",0,". This "),new r("",0,","),new r(".",0," "),new r("",10,"("),new r("",10,"."),new r("",0," not "),new r(" ",0,'="'),new r("",0,"er "),new r(" ",11," "),new r("",0,"al "),new r(" ",11,""),new r("",0,"='"),new r("",11,'"'),new r("",10,". "),new r(" ",0,"("),new r("",0,"ful "),new r(" ",10,". "),new r("",0,"ive "),new r("",0,"less "),new r("",11,"'"),new r("",0,"est "),new r(" ",10,"."),new r("",11,'">'),new r(" ",0,"='"),new r("",10,","),new r("",0,"ize "),new r("",11,"."),new r("Â ",0,""),new r(" ",0,","),new r("",10,'="'),new r("",11,'="'),new r("",0,"ous "),new r("",11,", "),new r("",10,"='"),new r(" ",10,","),new r(" ",11,'="'),new r(" ",11,", "),new r("",11,","),new r("",11,"("),new r("",11,". "),new r(" ",11,"."),new r("",11,"='"),new r(" ",11,". "),new r(" ",10,'="'),new r(" ",11,"='"),new r(" ",10,"='")]
e.kTransforms=a,e.kNumTransforms=a.length,e.transformDictionaryWord=function(t,e,n,r,s){var u,l=a[s].prefix,c=a[s].suffix,f=a[s].transform,h=f<12?0:f-11,p=0,d=e
h>r&&(h=r)
for(var g=0;g<l.length;)t[e++]=l[g++]
for(n+=h,r-=h,f<=9&&(r-=f),p=0;p<r;p++)t[e++]=o.dictionary[n+p]
if(u=e-r,10===f)i(t,u)
else if(11===f)for(;r>0;){var y=i(t,u)
u+=y,r-=y}for(var v=0;v<c.length;)t[e++]=c[v++]
return e-d}},function(t,e,n){(function(e){(function(){var r,i,o,a,s={}.hasOwnProperty
r=n(286),i=n(82),a=n(56),o=function(t){function n(t,e,n){var i
this.document=t,this.name=e,this.id=n,this.font=new r(o[this.name]()),i=this.font,this.ascender=i.ascender,this.descender=i.descender,this.bbox=i.bbox,this.lineGap=i.lineGap}var o
return function(t,e){function n(){this.constructor=t}for(var r in e)s.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(n,i),n.prototype.embed=function(){return this.dictionary.data={Type:"Font",BaseFont:this.name,Subtype:"Type1",Encoding:"WinAnsiEncoding"},this.dictionary.end()},n.prototype.encode=function(t){var e,n,r,i,o,a,s,u
for(n=this.font.encodeText(t),i=this.font.glyphsForString(""+t),e=this.font.advancesForGlyphs(i),u=[],o=a=0,s=i.length;a<s;o=++a)r=i[o],u.push({xAdvance:e[o],yAdvance:0,xOffset:0,yOffset:0,advanceWidth:this.font.widthOfGlyph(r)})
return[n,u]},n.prototype.widthOfString=function(t,e){var n,r,i,o,a,s
for(i=this.font.glyphsForString(""+t),s=0,o=0,a=(r=this.font.advancesForGlyphs(i)).length;o<a;o++)n=r[o],s+=n
return s*(e/1e3)},n.isStandardFont=function(t){return t in o},o={Courier:function(){return a.readFileSync(e+"/../font/data/Courier.afm","utf8")},"Courier-Bold":function(){return a.readFileSync(e+"/../font/data/Courier-Bold.afm","utf8")},"Courier-Oblique":function(){return a.readFileSync(e+"/../font/data/Courier-Oblique.afm","utf8")},"Courier-BoldOblique":function(){return a.readFileSync(e+"/../font/data/Courier-BoldOblique.afm","utf8")},Helvetica:function(){return a.readFileSync(e+"/../font/data/Helvetica.afm","utf8")},"Helvetica-Bold":function(){return a.readFileSync(e+"/../font/data/Helvetica-Bold.afm","utf8")},"Helvetica-Oblique":function(){return a.readFileSync(e+"/../font/data/Helvetica-Oblique.afm","utf8")},"Helvetica-BoldOblique":function(){return a.readFileSync(e+"/../font/data/Helvetica-BoldOblique.afm","utf8")},"Times-Roman":function(){return a.readFileSync(e+"/../font/data/Times-Roman.afm","utf8")},"Times-Bold":function(){return a.readFileSync(e+"/../font/data/Times-Bold.afm","utf8")},"Times-Italic":function(){return a.readFileSync(e+"/../font/data/Times-Italic.afm","utf8")},"Times-BoldItalic":function(){return a.readFileSync(e+"/../font/data/Times-BoldItalic.afm","utf8")},Symbol:function(){return a.readFileSync(e+"/../font/data/Symbol.afm","utf8")},ZapfDingbats:function(){return a.readFileSync(e+"/../font/data/ZapfDingbats.afm","utf8")}},n}(),t.exports=o}).call(this)}).call(e,"/")},function(t,e,n){(function(){var e,r
r=n(56),e=function(){function t(t){var e,r
this.contents=t,this.attributes={},this.glyphWidths={},this.boundingBoxes={},this.kernPairs={},this.parse(),this.charWidths=function(){var t,e
for(e=[],r=t=0;t<=255;r=++t)e.push(this.glyphWidths[n[r]])
return e}.call(this),this.bbox=function(){var t,n,r,i
for(i=[],t=0,n=(r=this.attributes.FontBBox.split(/\s+/)).length;t<n;t++)e=r[t],i.push(+e)
return i}.call(this),this.ascender=+(this.attributes.Ascender||0),this.descender=+(this.attributes.Descender||0),this.lineGap=this.bbox[3]-this.bbox[1]-(this.ascender-this.descender)}var e,n
return t.open=function(e){return new t(r.readFileSync(e,"utf8"))},t.prototype.parse=function(){var t,e,n,r,i,o,a,s,u,l
for(u="",e=0,r=(s=this.contents.split("\n")).length;e<r;e++)if(i=s[e],o=i.match(/^Start(\w+)/))u=o[1]
else if(o=i.match(/^End(\w+)/))u=""
else switch(u){case"FontMetrics":n=(o=i.match(/(^\w+)\s+(.*)/))[1],l=o[2],(t=this.attributes[n])?(Array.isArray(t)||(t=this.attributes[n]=[t]),t.push(l)):this.attributes[n]=l
break
case"CharMetrics":if(!/^CH?\s/.test(i))continue
a=i.match(/\bN\s+(\.?\w+)\s*;/)[1],this.glyphWidths[a]=+i.match(/\bWX\s+(\d+)\s*;/)[1]
break
case"KernPairs":(o=i.match(/^KPX\s+(\.?\w+)\s+(\.?\w+)\s+(-?\d+)/))&&(this.kernPairs[o[1]+"\0"+o[2]]=parseInt(o[3]))}},e={402:131,8211:150,8212:151,8216:145,8217:146,8218:130,8220:147,8221:148,8222:132,8224:134,8225:135,8226:149,8230:133,8364:128,8240:137,8249:139,8250:155,710:136,8482:153,338:140,339:156,732:152,352:138,353:154,376:159,381:142,382:158},t.prototype.encodeText=function(t){var n,r,i,o,a
for(a=[],r=i=0,o=t.length;0<=o?i<o:i>o;r=0<=o?++i:--i)n=t.charCodeAt(r),n=e[n]||n,a.push(n.toString(16))
return a},t.prototype.glyphsForString=function(t){var e,n,r,i,o
for(n=[],r=i=0,o=t.length;0<=o?i<o:i>o;r=0<=o?++i:--i)e=t.charCodeAt(r),n.push(this.characterToGlyph(e))
return n},t.prototype.characterToGlyph=function(t){return n[e[t]||t]||".notdef"},t.prototype.widthOfGlyph=function(t){return this.glyphWidths[t]||0},t.prototype.getKernPair=function(t,e){return this.kernPairs[t+"\0"+e]||0},t.prototype.advancesForGlyphs=function(t){var e,n,r,i,o,a
for(e=[],n=r=0,o=t.length;r<o;n=++r)i=t[n],a=t[n+1],e.push(this.widthOfGlyph(i)+this.getKernPair(i,a))
return e},n=".notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n\nspace         exclam         quotedbl       numbersign\ndollar        percent        ampersand      quotesingle\nparenleft     parenright     asterisk       plus\ncomma         hyphen         period         slash\nzero          one            two            three\nfour          five           six            seven\neight         nine           colon          semicolon\nless          equal          greater        question\n\nat            A              B              C\nD             E              F              G\nH             I              J              K\nL             M              N              O\nP             Q              R              S\nT             U              V              W\nX             Y              Z              bracketleft\nbackslash     bracketright   asciicircum    underscore\n\ngrave         a              b              c\nd             e              f              g\nh             i              j              k\nl             m              n              o\np             q              r              s\nt             u              v              w\nx             y              z              braceleft\nbar           braceright     asciitilde     .notdef\n\nEuro          .notdef        quotesinglbase florin\nquotedblbase  ellipsis       dagger         daggerdbl\ncircumflex    perthousand    Scaron         guilsinglleft\nOE            .notdef        Zcaron         .notdef\n.notdef       quoteleft      quoteright     quotedblleft\nquotedblright bullet         endash         emdash\ntilde         trademark      scaron         guilsinglright\noe            .notdef        zcaron         ydieresis\n\nspace         exclamdown     cent           sterling\ncurrency      yen            brokenbar      section\ndieresis      copyright      ordfeminine    guillemotleft\nlogicalnot    hyphen         registered     macron\ndegree        plusminus      twosuperior    threesuperior\nacute         mu             paragraph      periodcentered\ncedilla       onesuperior    ordmasculine   guillemotright\nonequarter    onehalf        threequarters  questiondown\n\nAgrave        Aacute         Acircumflex    Atilde\nAdieresis     Aring          AE             Ccedilla\nEgrave        Eacute         Ecircumflex    Edieresis\nIgrave        Iacute         Icircumflex    Idieresis\nEth           Ntilde         Ograve         Oacute\nOcircumflex   Otilde         Odieresis      multiply\nOslash        Ugrave         Uacute         Ucircumflex\nUdieresis     Yacute         Thorn          germandbls\n\nagrave        aacute         acircumflex    atilde\nadieresis     aring          ae             ccedilla\negrave        eacute         ecircumflex    edieresis\nigrave        iacute         icircumflex    idieresis\neth           ntilde         ograve         oacute\nocircumflex   otilde         odieresis      divide\noslash        ugrave         uacute         ucircumflex\nudieresis     yacute         thorn          ydieresis".split(/\s+/),t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i={}.hasOwnProperty,o=[].slice
r=n(82),n(57),e=function(t){function e(t,e,n){this.document=t,this.font=e,this.id=n,this.subset=this.font.createSubset(),this.unicode=[[0]],this.widths=[this.font.getGlyph(0).advanceWidth],this.name=this.font.postscriptName,this.scale=1e3/this.font.unitsPerEm,this.ascender=this.font.ascent*this.scale,this.descender=this.font.descent*this.scale,this.lineGap=this.font.lineGap*this.scale,this.bbox=this.font.bbox,this.layoutCache=Object.create(null)}var n
return function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,r),e.prototype.layoutRun=function(t,e){var n,r,i,o,a,s,u
for(n=r=0,o=(s=(u=this.font.layout(t,e)).positions).length;r<o;n=++r){a=s[n]
for(i in a)a[i]*=this.scale
a.advanceWidth=u.glyphs[n].advanceWidth*this.scale}return u},e.prototype.layoutCached=function(t){var e,n
return(e=this.layoutCache[t])?e:(n=this.layoutRun(t),this.layoutCache[t]=n,n)},e.prototype.layout=function(t,e,n){var r,i,o,a,s,u,l
if(null==n&&(n=!1),e)return this.layoutRun(t,e)
for(i=n?null:[],s=n?null:[],r=0,a=0,o=0;o<=t.length;)o===t.length&&a<o||" "===(u=t.charAt(o))||"\t"===u?(l=this.layoutCached(t.slice(a,++o)),n||(i.push.apply(i,l.glyphs),s.push.apply(s,l.positions)),r+=l.advanceWidth,a=o):o++
return{glyphs:i,positions:s,advanceWidth:r}},e.prototype.encode=function(t,e){var n,r,i,o,a,s,u,l,c,f,h
for(a=(f=this.layout(t,e)).glyphs,c=f.positions,h=[],s=u=0,l=a.length;u<l;s=++u)o=a[s],i=this.subset.includeGlyph(o.id),h.push(("0000"+i.toString(16)).slice(-4)),null==(n=this.widths)[i]&&(n[i]=o.advanceWidth*this.scale),null==(r=this.unicode)[i]&&(r[i]=o.codePoints)
return[h,c]},e.prototype.widthOfString=function(t,e,n){return this.layout(t,n,!0).advanceWidth*(e/1e3)},e.prototype.embed=function(){var t,e,n,r,i,o,a,s,u
return a=null!=this.subset.cff,o=this.document.ref(),a&&(o.data.Subtype="CIDFontType0C"),this.subset.encodeStream().pipe(o),r=((null!=(u=this.font["OS/2"])?u.sFamilyClass:void 0)||0)>>8,i=0,this.font.post.isFixedPitch&&(i|=1),1<=r&&r<=7&&(i|=2),i|=4,10===r&&(i|=8),this.font.head.macStyle.italic&&(i|=64),s=function(){var t,e
for(e=[],t=0;t<6;++t)e.push(String.fromCharCode(26*Math.random()+65))
return e}().join("")+"+"+this.font.postscriptName,t=this.font.bbox,n=this.document.ref({Type:"FontDescriptor",FontName:s,Flags:i,FontBBox:[t.minX*this.scale,t.minY*this.scale,t.maxX*this.scale,t.maxY*this.scale],ItalicAngle:this.font.italicAngle,Ascent:this.ascender,Descent:this.descender,CapHeight:(this.font.capHeight||this.font.ascent)*this.scale,XHeight:(this.font.xHeight||0)*this.scale,StemV:0}),a?n.data.FontFile3=o:n.data.FontFile2=o,n.end(),(e=this.document.ref({Type:"Font",Subtype:a?"CIDFontType0":"CIDFontType2",BaseFont:s,CIDSystemInfo:{Registry:new String("Adobe"),Ordering:new String("Identity"),Supplement:0},FontDescriptor:n,W:[0,this.widths]})).end(),this.dictionary.data={Type:"Font",Subtype:"Type0",BaseFont:s,Encoding:"Identity-H",DescendantFonts:[e],ToUnicode:this.toUnicodeCmap()},this.dictionary.end()},n=function(){var t,e
return e=1<=arguments.length?o.call(arguments,0):[],function(){var n,r,i
for(i=[],n=0,r=e.length;n<r;n++)t=e[n],i.push(("0000"+t.toString(16)).slice(-4))
return i}().join("")},e.prototype.toUnicodeCmap=function(){var t,e,r,i,o,a,s,u,l,c
for(t=this.document.ref(),i=[],o=0,s=(l=this.unicode).length;o<s;o++){for(r=[],a=0,u=(e=l[o]).length;a<u;a++)c=e[a],c>65535&&(c-=65536,r.push(n(c>>>10&1023|55296)),c=56320|1023&c),r.push(n(c))
i.push("<"+r.join(" ")+">")}return t.end("/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n1 beginbfrange\n<0000> <"+n(i.length-1)+"> ["+i.join(" ")+"]\nendbfrange\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"),t},e}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r
e=n(289),r=n(57).number,t.exports={initText:function(){return this.x=0,this.y=0,this._lineGap=0},lineGap:function(t){return this._lineGap=t,this},moveDown:function(t){return null==t&&(t=1),this.y+=this.currentLineHeight(!0)*t+this._lineGap,this},moveUp:function(t){return null==t&&(t=1),this.y-=this.currentLineHeight(!0)*t+this._lineGap,this},_text:function(t,n,r,i,o){var a,s,u,l,c
if(t=""+t,(i=this._initOptions(n,r,i)).wordSpacing&&(t=t.replace(/\s{2,}/g," ")),i.width)c=this._wrapper,c||(c=new e(this,i),c.on("line",o)),this._wrapper=i.continued?c:null,this._textOptions=i.continued?i:null,c.wrap(t,i)
else for(l=t.split("\n"),a=0,s=l.length;a<s;a++)u=l[a],o(u,i)
return this},text:function(t,e,n,r){return this._text(t,e,n,r,this._line.bind(this))},widthOfString:function(t,e){return null==e&&(e={}),this._font.widthOfString(t,this._fontSize,e.features)+(e.characterSpacing||0)*(t.length-1)},heightOfString:function(t,e){var n,r,i,o,a
return null==e&&(e={}),this,i=this.x,o=this.y,(e=this._initOptions(e)).height=1/0,r=e.lineGap||this._lineGap||0,this._text(t,this.x,this.y,e,(a=this,function(t,e){return a.y+=a.currentLineHeight(!0)+r})),n=this.y-o,this.x=i,this.y=o,n},list:function(t,n,r,i,o){var a,s,u,l,c,f,h,p,d,g,y,v
return i=this._initOptions(n,r,i),p=Math.round(this._font.ascender/1e3*this._fontSize/2),d=i.bulletRadius||Math.round(this._font.ascender/1e3*this._fontSize/3),u=i.textIndent||5*d,l=i.bulletIndent||8*d,f=1,c=[],h=[],(a=function(t){var e,n,r,i,o
for(o=[],e=r=0,i=t.length;r<i;e=++r)n=t[e],Array.isArray(n)?(f++,a(n),o.push(f--)):(c.push(n),o.push(h.push(f)))
return o})(t),(o=new e(this,i)).on("line",this._line.bind(this)),f=1,s=0,o.on("firstLine",(v=this,function(){var t,e
return(e=h[s++])!==f&&(t=l*(e-f),v.x+=t,o.lineWidth-=t,f=e),v.circle(v.x-u+d,v.y+p,d),v.fill()})),o.on("sectionStart",(y=this,function(){var t
return t=u+l*(f-1),y.x+=t,o.lineWidth-=t})),o.on("sectionEnd",(g=this,function(){var t
return t=u+l*(f-1),g.x-=t,o.lineWidth+=t})),o.wrap(c.join("\n"),i),this},_initOptions:function(t,e,n){var r,i,o
if(null==t&&(t={}),null==n&&(n={}),"object"==typeof t&&(n=t,t=null),n=function(){var t,e,r
e={}
for(t in n)r=n[t],e[t]=r
return e}(),this._textOptions){i=this._textOptions
for(r in i)o=i[r],"continued"!==r&&null==n[r]&&(n[r]=o)}return null!=t&&(this.x=t),null!=e&&(this.y=e),!1!==n.lineBreak&&null==n.width&&(n.width=this.page.width-this.x-this.page.margins.right),n.columns||(n.columns=0),null==n.columnGap&&(n.columnGap=18),n},_line:function(t,e,n){var r
return null==e&&(e={}),this._fragment(t,this.x,this.y,e),r=e.lineGap||this._lineGap||0,n?this.y+=this.currentLineHeight(!0)+r:this.x+=this.widthOfString(t)},_fragment:function(t,e,n,i){var o,a,s,u,l,c,f,h,p,d,g,y,v,b,m,w,x,_,k,S,C,A,P,E,I,T,O,B,L,R,M,F
if(0!==(t=(""+t).replace(/\n/g,"")).length){if(a=i.align||"left",M=i.wordSpacing||0,u=i.characterSpacing||0,i.width)switch(a){case"right":L=this.widthOfString(t.replace(/\s+$/,""),i),e+=i.lineWidth-L
break
case"center":e+=i.lineWidth/2-i.textWidth/2
break
case"justify":F=t.trim().split(/\s+/),L=this.widthOfString(t.replace(/\s+/g,""),i),B=this.widthOfString(" ")+u,M=Math.max(0,(i.lineWidth-L)/Math.max(1,F.length-1)-B)}if(T=i.textWidth+M*(i.wordCount-1)+u*(t.length-1),i.link&&this.link(e,n,T,this.currentLineHeight(),i.link),(i.underline||i.strike)&&(this.save(),i.stroke||this.strokeColor.apply(this,this._fillColor),w=this._fontSize<10?.5:Math.floor(this._fontSize/10),this.lineWidth(w),c=i.underline?1:2,x=n+this.currentLineHeight()/c,i.underline&&(x-=w),this.moveTo(e,x),this.lineTo(e+T,x),this.stroke(),this.restore()),this.save(),this.transform(1,0,0,-1,0,this.page.height),n=this.page.height-n-this._font.ascender/1e3*this._fontSize,null==(s=this.page.fonts)[S=this._font.id]&&(s[S]=this._font.ref()),this.addContent("BT"),this.addContent("1 0 0 1 "+r(e)+" "+r(n)+" Tm"),this.addContent("/"+this._font.id+" "+r(this._fontSize)+" Tf"),(k=i.fill&&i.stroke?2:i.stroke?1:0)&&this.addContent(k+" Tr"),u&&this.addContent(r(u)+" Tc"),M)for(F=t.trim().split(/\s+/),M+=this.widthOfString(" ")+u,M*=1e3/this._fontSize,f=[],A=[],y=0,b=F.length;y<b;y++)R=F[y],E=this._font.encode(R,i.features),h=E[0],P=E[1],f.push.apply(f,h),A.push.apply(A,P),A[A.length-1].xAdvance+=M
else I=this._font.encode(t,i.features),f=I[0],A=I[1]
for(O=this._fontSize/1e3,l=[],v=0,d=!1,o=function(t){var e,n
return v<t&&(n=f.slice(v,t).join(""),e=A[t-1].xAdvance-A[t-1].advanceWidth,l.push("<"+n+"> "+r(-e))),v=t},p=function(t){return function(e){if(o(e),l.length>0)return t.addContent("["+l.join(" ")+"] TJ"),l.length=0}}(this),g=_=0,m=A.length;_<m;g=++_)C=A[g],C.xOffset||C.yOffset?(p(g),this.addContent("1 0 0 1 "+r(e+C.xOffset*O)+" "+r(n+C.yOffset*O)+" Tm"),p(g+1),d=!0):(d&&(this.addContent("1 0 0 1 "+r(e)+" "+r(n)+" Tm"),d=!1),C.xAdvance-C.advanceWidth!=0&&o(g+1)),e+=C.xAdvance*O
return p(g),this.addContent("ET"),this.restore()}}}}).call(this)},function(t,e,n){(function(){var e,r,i,o={}.hasOwnProperty
e=n(32).EventEmitter,r=n(16),i=function(t){function n(t,e){var n,r,i
this.document=t,this.indent=e.indent||0,this.characterSpacing=e.characterSpacing||0,this.wordSpacing=0===e.wordSpacing,this.columns=e.columns||1,this.columnGap=null!=(n=e.columnGap)?n:18,this.lineWidth=(e.width-this.columnGap*(this.columns-1))/this.columns,this.spaceLeft=this.lineWidth,this.startX=this.document.x,this.startY=this.document.y,this.column=1,this.ellipsis=e.ellipsis,this.continuedX=0,this.features=e.features,null!=e.height?(this.height=e.height,this.maxY=this.startY+e.height):this.maxY=this.document.page.maxY(),this.on("firstLine",(i=this,function(t){var e
return e=i.continuedX||i.indent,i.document.x+=e,i.lineWidth-=e,i.once("line",function(){if(i.document.x-=e,i.lineWidth+=e,t.continued&&!i.continuedX&&(i.continuedX=i.indent),!t.continued)return i.continuedX=0})})),this.on("lastLine",(r=this,function(t){var e
return"justify"===(e=t.align)&&(t.align="left"),r.lastLine=!0,r.once("line",function(){return r.document.y+=t.paragraphGap||0,t.align=e,r.lastLine=!1})}))}return function(t,e){function n(){this.constructor=t}for(var r in e)o.call(e,r)&&(t[r]=e[r])
n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(n,e),n.prototype.wordWidth=function(t){return this.document.widthOfString(t,this)+this.characterSpacing+this.wordSpacing},n.prototype.eachWord=function(t,e){var n,i,o,a,s,u,l,c,f,h
for(i=new r(t),s=null,h=Object.create(null);n=i.nextBreak();){if((c=null!=h[f=t.slice((null!=s?s.position:void 0)||0,n.position)]?h[f]:h[f]=this.wordWidth(f))>this.lineWidth+this.continuedX)for(u=s,o={};f.length;){for(a=f.length;c>this.spaceLeft;)c=this.wordWidth(f.slice(0,--a))
if(o.required=a<f.length,l=e(f.slice(0,a),c,o,u),u={required:!1},f=f.slice(a),c=this.wordWidth(f),!1===l)break}else l=e(f,c,n,s)
if(!1===l)break
s=n}},n.prototype.wrap=function(t,e){var n,r,i,o,a,s,u,l,c
return null!=e.indent&&(this.indent=e.indent),null!=e.characterSpacing&&(this.characterSpacing=e.characterSpacing),null!=e.wordSpacing&&(this.wordSpacing=e.wordSpacing),null!=e.ellipsis&&(this.ellipsis=e.ellipsis),o=this.document.y+this.document.currentLineHeight(!0),(this.document.y>this.maxY||o>this.maxY)&&this.nextSection(),n="",a=0,s=0,i=0,u=this.document.y,c=this,r=function(){return e.textWidth=a+c.wordSpacing*(s-1),e.wordCount=s,e.lineWidth=c.lineWidth,u=c.document.y,c.emit("line",n,e,c),i++},this.emit("sectionStart",e,this),this.eachWord(t,(l=this,function(t,i,o,u){var c
if((null==u||u.required)&&(l.emit("firstLine",e,l),l.spaceLeft=l.lineWidth),i<=l.spaceLeft&&(n+=t,a+=i,s++),o.required||i>l.spaceLeft){if(o.required&&l.emit("lastLine",e,l),c=l.document.currentLineHeight(!0),null!=l.height&&l.ellipsis&&l.document.y+2*c>l.maxY&&l.column>=l.columns){for(!0===l.ellipsis&&(l.ellipsis="…"),n=n.replace(/\s+$/,""),a=l.wordWidth(n+l.ellipsis);a>l.lineWidth;)n=n.slice(0,-1).replace(/\s+$/,""),a=l.wordWidth(n+l.ellipsis)
n+=l.ellipsis}return o.required&&i>l.spaceLeft&&(n=t,a=i,s=1),r(),l.document.y+c>l.maxY&&!l.nextSection()?(s=0,n="",!1):o.required?(l.spaceLeft=l.lineWidth,n="",a=0,s=0):(l.spaceLeft=l.lineWidth-i,n=t,a=i,s=1)}return l.spaceLeft-=i})),s>0&&(this.emit("lastLine",e,this),r()),this.emit("sectionEnd",e,this),!0===e.continued?(i>1&&(this.continuedX=0),this.continuedX+=e.textWidth,this.document.y=u):this.document.x=this.startX},n.prototype.nextSection=function(t){var e
if(this.emit("sectionEnd",t,this),++this.column>this.columns){if(null!=this.height)return!1
this.document.addPage(),this.column=1,this.startY=this.document.page.margins.top,this.maxY=this.document.page.maxY(),this.document.x=this.startX,this.document._fillColor&&(e=this.document).fillColor.apply(e,this.document._fillColor),this.emit("pageBreak",t,this)}else this.document.x+=this.lineWidth+this.columnGap,this.document.y=this.startY,this.emit("columnBreak",t,this)
return this.emit("sectionStart",t,this),!0},n}(),t.exports=i}).call(this)},function(t,e,n){(function(){var e
e=n(291),t.exports={initImages:function(){return this._imageRegistry={},this._imageCount=0},image:function(t,e,n,r){var i,o,a,s,u,l,c,f,h,p,d,g,y,v,b
return null==r&&(r={}),"object"==typeof e&&(r=e,e=null),e=null!=(p=null!=e?e:r.x)?p:this.x,n=null!=(d=null!=n?n:r.y)?d:this.y,"string"==typeof t&&(c=this._imageRegistry[t]),c||(c=t.width&&t.height?t:this.openImage(t)),c.obj||c.embed(this),null==(i=this.page.xobjects)[h=c.label]&&(i[h]=c.obj),v=r.width||c.width,u=r.height||c.height,r.width&&!r.height?(b=v/c.width,v=c.width*b,u=c.height*b):r.height&&!r.width?(l=u/c.height,v=c.width*l,u=c.height*l):r.scale?(v=c.width*r.scale,u=c.height*r.scale):r.fit?(a=(s=(g=r.fit)[0])/(o=g[1]),(f=c.width/c.height)>a?(v=s,u=s/f):(u=o,v=o*f)):r.cover&&(a=(s=(y=r.cover)[0])/(o=y[1]),(f=c.width/c.height)>a?(u=o,v=o*f):(v=s,u=s/f)),(r.fit||r.cover)&&("center"===r.align?e=e+s/2-v/2:"right"===r.align&&(e=e+s-v),"center"===r.valign?n=n+o/2-u/2:"bottom"===r.valign&&(n=n+o-u)),this.y===n&&(this.y+=u),this.save(),this.transform(v,0,0,-u,e,n+u),this.addContent("/"+c.label+" Do"),this.restore(),this},openImage:function(t){var n
return"string"==typeof t&&(n=this._imageRegistry[t]),n||(n=e.open(t,"I"+ ++this._imageCount),"string"==typeof t&&(this._imageRegistry[t]=n)),n}}}).call(this)},function(t,e,n){(function(e){(function(){var r,i,o,a
a=n(56),n(292),r=n(293),o=n(294),i=function(){function t(){}return t.open=function(t,n){var i,s
if(e.isBuffer(t))i=t
else if(t instanceof ArrayBuffer)i=new e(new Uint8Array(t))
else if(s=/^data:.+;base64,(.*)$/.exec(t))i=new e(s[1],"base64")
else if(!(i=a.readFileSync(t)))return
if(255===i[0]&&216===i[1])return new r(i,n)
if(137===i[0]&&"PNG"===i.toString("ascii",1,4))return new o(i,n)
throw new Error("Unknown image format.")},t}(),t.exports=i}).call(this)}).call(e,n(2).Buffer)},function(t,e){(function(){var e
e=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.byteAt=function(t){return this.data[t]},t.prototype.readBool=function(){return!!this.readByte()},t.prototype.writeBool=function(t){return this.writeByte(t?1:0)},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t
return(t=this.readUInt32())>=2147483648?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t
return(t=this.readUInt16())>=32768?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,n,r,i
for(i=[],e=n=0,r=t;0<=r?n<r:n>r;e=0<=r?++n:--n)i[e]=String.fromCharCode(this.readByte())
return i.join("")},t.prototype.writeString=function(t){var e,n,r,i
for(i=[],e=n=0,r=t.length;0<=r?n<r:n>r;e=0<=r?++n:--n)i.push(this.writeByte(t.charCodeAt(e)))
return i},t.prototype.stringAt=function(t,e){return this.pos=t,this.readString(e)},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,n,r,i,o,a,s
return t=this.readByte(),e=this.readByte(),n=this.readByte(),r=this.readByte(),i=this.readByte(),o=this.readByte(),a=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^n)+4294967296*(255^r)+16777216*(255^i)+65536*(255^o)+256*(255^a)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*n+4294967296*r+16777216*i+65536*o+256*a+s},t.prototype.writeLongLong=function(t){var e,n
return e=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.slice=function(t,e){return this.data.slice(t,e)},t.prototype.read=function(t){var e,n,r
for(e=[],n=0,r=t;0<=r?n<r:n>r;0<=r?++n:--n)e.push(this.readByte())
return e},t.prototype.write=function(t){var e,n,r,i
for(i=[],n=0,r=t.length;n<r;n++)e=t[n],i.push(this.writeByte(e))
return i},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e
return-1}
n(56),e=function(){function t(t,n){var i,o,a
if(this.data=t,this.label=n,65496!==this.data.readUInt16BE(0))throw"SOI not found in JPEG"
for(a=2;a<this.data.length&&(o=this.data.readUInt16BE(a),a+=2,!(r.call(e,o)>=0));)a+=this.data.readUInt16BE(a)
if(r.call(e,o)<0)throw"Invalid JPEG."
a+=2,this.bits=this.data[a++],this.height=this.data.readUInt16BE(a),a+=2,this.width=this.data.readUInt16BE(a),a+=2,i=this.data[a++],this.colorSpace=function(){switch(i){case 1:return"DeviceGray"
case 3:return"DeviceRGB"
case 4:return"DeviceCMYK"}}(),this.obj=null}var e
return e=[65472,65473,65474,65475,65477,65478,65479,65480,65481,65482,65483,65484,65485,65486,65487],t.prototype.embed=function(t){if(!this.obj)return this.obj=t.ref({Type:"XObject",Subtype:"Image",BitsPerComponent:this.bits,Width:this.width,Height:this.height,ColorSpace:this.colorSpace,Filter:"DCTDecode"}),"DeviceCMYK"===this.colorSpace&&(this.obj.data.Decode=[1,0,1,0,1,0,1,0]),this.obj.end(this.data),this.data=null},t}(),t.exports=e}).call(this)},function(t,e,n){(function(e){(function(){var r,i,o
o=n(59),r=n(295),i=function(){function t(t,e){this.label=e,this.image=new r(t),this.width=this.image.width,this.height=this.image.height,this.imgData=this.image.imgData,this.obj=null}return t.prototype.embed=function(t){var n,r,i,o,a,s,u,l
if(this.document=t,!this.obj){if(this.obj=this.document.ref({Type:"XObject",Subtype:"Image",BitsPerComponent:this.image.bits,Width:this.width,Height:this.height,Filter:"FlateDecode"}),this.image.hasAlphaChannel||(a=this.document.ref({Predictor:15,Colors:this.image.colors,BitsPerComponent:this.image.bits,Columns:this.width}),this.obj.data.DecodeParms=a,a.end()),0===this.image.palette.length?this.obj.data.ColorSpace=this.image.colorSpace:((o=this.document.ref()).end(new e(this.image.palette)),this.obj.data.ColorSpace=["Indexed","DeviceRGB",this.image.palette.length/3-1,o]),this.image.transparency.grayscale)return u=this.image.transparency.greyscale,this.obj.data.Mask=[u,u]
if(this.image.transparency.rgb){for(i=[],n=0,r=(s=this.image.transparency.rgb).length;n<r;n++)l=s[n],i.push(l,l)
return this.obj.data.Mask=i}return this.image.transparency.indexed?this.loadIndexedAlphaChannel():this.image.hasAlphaChannel?this.splitAlphaChannel():this.finalize()}},t.prototype.finalize=function(){var t
return this.alphaChannel&&((t=this.document.ref({Type:"XObject",Subtype:"Image",Height:this.height,Width:this.width,BitsPerComponent:8,Filter:"FlateDecode",ColorSpace:"DeviceGray",Decode:[0,1]})).end(this.alphaChannel),this.obj.data.SMask=t),this.obj.end(this.imgData),this.image=null,this.imgData=null},t.prototype.splitAlphaChannel=function(){return this.image.decodePixels((t=this,function(n){var r,i,a,s,u,l,c,f,h
for(a=t.image.colors*t.image.bits/8,h=t.width*t.height,l=new e(h*a),i=new e(h),u=f=r=0,c=n.length;u<c;)l[f++]=n[u++],l[f++]=n[u++],l[f++]=n[u++],i[r++]=n[u++]
return s=0,o.deflate(l,function(e,n){if(t.imgData=n,e)throw e
if(2==++s)return t.finalize()}),o.deflate(i,function(e,n){if(t.alphaChannel=n,e)throw e
if(2==++s)return t.finalize()})}))
var t},t.prototype.loadIndexedAlphaChannel=function(t){var n,r
return n=this.image.transparency.indexed,this.image.decodePixels((r=this,function(t){var i,a,s,u,l
for(i=new e(r.width*r.height),a=0,s=u=0,l=t.length;u<l;s=u+=1)i[a++]=n[t[s]]
return o.deflate(i,function(t,e){if(r.alphaChannel=e,t)throw t
return r.finalize()})}))},t}(),t.exports=i}).call(this)}).call(e,n(2).Buffer)},function(t,e,n){(function(e){(function(){var r,i
r=n(56),i=n(59),t.exports=function(){function t(t){var n,r,i,o,a,s,u,l,c
for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.text={};;){switch(n=this.readUInt32(),function(){var t,e
for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]))
return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++]
break
case"PLTE":this.palette=this.read(n)
break
case"IDAT":for(u=0;u<n;u+=1)this.imgData.push(this.data[this.pos++])
break
case"tRNS":switch(this.transparency={},this.colorType){case 3:if(this.transparency.indexed=this.read(n),(a=255-this.transparency.indexed.length)>0)for(l=0;0<=a?l<a:l>a;0<=a?++l:--l)this.transparency.indexed.push(255)
break
case 0:this.transparency.grayscale=this.read(n)[0]
break
case 2:this.transparency.rgb=this.read(n)}break
case"tEXt":i=(s=this.read(n)).indexOf(0),o=String.fromCharCode.apply(String,s.slice(0,i)),this.text[o]=String.fromCharCode.apply(String,s.slice(i+1))
break
case"IEND":return this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1
case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(c=this.colorType)||6===c,r=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*r,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray"
case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new e(this.imgData))
default:this.pos+=n}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}return t.decode=function(e,n){return r.readFile(e,function(e,r){return new t(r).decode(function(t){return n(t)})})},t.load=function(e){return new t(r.readFileSync(e))},t.prototype.read=function(t){var e,n
for(n=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)n.push(this.data[this.pos++])
return n},t.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},t.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},t.prototype.decodePixels=function(t){var n=this
return i.inflate(this.imgData,function(r,i){var o,a,s,u,l,c,f,h,p,d,g,y,v,b,m,w,x,_,k,S,C,A,P
if(r)throw r
for(w=(y=n.pixelBitlength/8)*n.width,v=new e(w*n.height),c=i.length,m=0,b=0,a=0;b<c;){switch(i[b++]){case 0:for(u=k=0;k<w;u=k+=1)v[a++]=i[b++]
break
case 1:for(u=S=0;S<w;u=S+=1)o=i[b++],l=u<y?0:v[a-y],v[a++]=(o+l)%256
break
case 2:for(u=C=0;C<w;u=C+=1)o=i[b++],s=(u-u%y)/y,x=m&&v[(m-1)*w+s*y+u%y],v[a++]=(x+o)%256
break
case 3:for(u=A=0;A<w;u=A+=1)o=i[b++],s=(u-u%y)/y,l=u<y?0:v[a-y],x=m&&v[(m-1)*w+s*y+u%y],v[a++]=(o+Math.floor((l+x)/2))%256
break
case 4:for(u=P=0;P<w;u=P+=1)o=i[b++],s=(u-u%y)/y,l=u<y?0:v[a-y],0===m?x=_=0:(x=v[(m-1)*w+s*y+u%y],_=s&&v[(m-1)*w+(s-1)*y+u%y]),f=l+x-_,h=Math.abs(f-l),d=Math.abs(f-x),g=Math.abs(f-_),p=h<=d&&h<=g?l:d<=g?x:_,v[a++]=(o+p)%256
break
default:throw new Error("Invalid filter algorithm: "+i[b-1])}m++}return t(v)})},t.prototype.decodePalette=function(){var t,n,r,i,o,a,s,u,l
for(r=this.palette,a=this.transparency.indexed||[],o=new e(a.length+r.length),i=0,r.length,t=0,n=s=0,u=r.length;s<u;n=s+=3)o[i++]=r[n],o[i++]=r[n+1],o[i++]=r[n+2],o[i++]=null!=(l=a[t++])?l:255
return o},t.prototype.copyToImageData=function(t,e){var n,r,i,o,a,s,u,l,c,f,h
if(r=this.colors,c=null,n=this.hasAlphaChannel,this.palette.length&&(c=null!=(h=this._decodedPalette)?h:this._decodedPalette=this.decodePalette(),r=4,n=!0),l=(i=(null!=t?t.data:void 0)||t).length,a=c||e,o=s=0,1===r)for(;o<l;)u=c?4*e[o/4]:s,f=a[u++],i[o++]=f,i[o++]=f,i[o++]=f,i[o++]=n?a[u++]:255,s=u
else for(;o<l;)u=c?4*e[o/4]:s,i[o++]=a[u++],i[o++]=a[u++],i[o++]=a[u++],i[o++]=n?a[u++]:255,s=u},t.prototype.decode=function(t){var n,r=this
return n=new e(this.width*this.height*4),this.decodePixels(function(e){return r.copyToImageData(n,e),t(n)})},t}()}).call(this)}).call(e,n(2).Buffer)},function(t,e){(function(){t.exports={annotate:function(t,e,n,r,i){var o,a,s
i.Type="Annot",i.Rect=this._convertRect(t,e,n,r),i.Border=[0,0,0],"Link"!==i.Subtype&&null==i.C&&(i.C=this._normalizeColor(i.color||[0,0,0])),delete i.color,"string"==typeof i.Dest&&(i.Dest=new String(i.Dest))
for(o in i)s=i[o],i[o[0].toUpperCase()+o.slice(1)]=s
return a=this.ref(i),this.page.annotations.push(a),a.end(),this},note:function(t,e,n,r,i,o){return null==o&&(o={}),o.Subtype="Text",o.Contents=new String(i),o.Name="Comment",null==o.color&&(o.color=[243,223,92]),this.annotate(t,e,n,r,o)},link:function(t,e,n,r,i,o){return null==o&&(o={}),o.Subtype="Link",o.A=this.ref({S:"URI",URI:new String(i)}),o.A.end(),this.annotate(t,e,n,r,o)},_markup:function(t,e,n,r,i){var o,a,s,u,l
return null==i&&(i={}),a=(o=this._convertRect(t,e,n,r))[0],u=o[1],s=o[2],l=o[3],i.QuadPoints=[a,l,s,l,a,u,s,u],i.Contents=new String,this.annotate(t,e,n,r,i)},highlight:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Highlight",null==i.color&&(i.color=[241,238,148]),this._markup(t,e,n,r,i)},underline:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Underline",this._markup(t,e,n,r,i)},strike:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="StrikeOut",this._markup(t,e,n,r,i)},lineAnnotation:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Line",i.Contents=new String,i.L=[t,this.page.height-e,n,this.page.height-r],this.annotate(t,e,n,r,i)},rectAnnotation:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Square",i.Contents=new String,this.annotate(t,e,n,r,i)},ellipseAnnotation:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Circle",i.Contents=new String,this.annotate(t,e,n,r,i)},textAnnotation:function(t,e,n,r,i,o){return null==o&&(o={}),o.Subtype="FreeText",o.Contents=new String(i),o.DA=new String,this.annotate(t,e,n,r,o)},_convertRect:function(t,e,n,r){var i,o,a,s,u,l,c,f,h
return h=e,e+=r,f=t+n,i=(c=this._ctm)[0],o=c[1],a=c[2],s=c[3],[t=i*t+a*e+(u=c[4]),e=o*t+s*e+(l=c[5]),f=i*f+a*h+u,h=o*f+s*h+l]}}}).call(this)},function(t,e){"use strict"
t.exports={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224]}},function(t,e,n){(function(e){"use strict"
function r(t,e){this.pdfKitDoc=t,this.imageDictionary=e||{}}var i=n(291)
r.prototype.measureImage=function(t){var n,r,o=this
if(this.pdfKitDoc._imageRegistry[t])n=this.pdfKitDoc._imageRegistry[t]
else{r="I"+ ++this.pdfKitDoc._imageCount
try{n=i.open(function(t){var n=o.imageDictionary[t]
if(!n)return t
var r=n.indexOf("base64,")
return r<0?o.imageDictionary[t]:new e(n.substring(r+7),"base64")}(t),r)}catch(t){n=null}if(null===n||void 0===n)throw"invalid image, images dictionary should contain dataURL entries (or local file paths in node.js)"
n.embed(this.pdfKitDoc),this.pdfKitDoc._imageRegistry[t]=n}return{width:n.width,height:n.height}},t.exports=r}).call(e,n(2).Buffer)},function(t,e){"use strict"
function n(t,e,n,r){var i=t.inlines[0],o=function(){for(var e=0,n=0,r=t.inlines.length;n<r;n++)e=t.inlines[n].fontSize>e?n:e
return t.inlines[e]}(),a=function(){for(var e=0,n=0,r=t.inlines.length;n<r;n++)e+=t.inlines[n].width
return e}(),s=t.line.getAscenderHeight(),u=o.font.ascender/1e3*o.fontSize,l=o.height-u,c=.5+.12*Math.floor(Math.max(o.fontSize-8,0)/2)
switch(t.decoration){case"underline":n+=s+.45*l
break
case"overline":n+=s-.85*u
break
case"lineThrough":n+=s-.25*u
break
default:throw"Unkown decoration : "+t.decoration}if(r.save(),"double"===t.decorationStyle){var f=Math.max(.5,2*c)
r.fillColor(t.decorationColor).rect(e+i.x,n-c/2,a,c/2).fill().rect(e+i.x,n+f-c/2,a,c/2).fill()}else if("dashed"===t.decorationStyle){var h=Math.ceil(a/6.8),p=e+i.x
r.rect(p,n,a,c).clip(),r.fillColor(t.decorationColor)
for(var d=0;d<h;d++)r.rect(p,n-c/2,3.96,c).fill(),p+=6.8}else if("dotted"===t.decorationStyle){var g=Math.ceil(a/(3*c)),y=e+i.x
r.rect(y,n,a,c).clip(),r.fillColor(t.decorationColor)
for(var v=0;v<g;v++)r.rect(y,n-c/2,c,c).fill(),y+=3*c}else if("wavy"===t.decorationStyle){var b=Math.ceil(a/1.4)+1,m=e+i.x-1
r.rect(e+i.x,n-1,a,n+1).clip(),r.lineWidth(.24),r.moveTo(m,n)
for(var w=0;w<b;w++)r.bezierCurveTo(m+.7,n-1,m+1.4,n-1,m+.7*3,n).bezierCurveTo(m+2.8,n+1,m+3.5,n+1,m+.7*6,n),m+=.7*6
r.stroke(t.decorationColor)}else r.fillColor(t.decorationColor).rect(e+i.x,n-c/2,a,c).fill()
r.restore()}t.exports={drawBackground:function(t,e,n,r){for(var i=t.getHeight(),o=0,a=t.inlines.length;o<a;o++){var s=t.inlines[o]
if(s.background){var u=s.justifyShift||0
r.fillColor(s.background).rect(e+s.x-u,n,s.width+u,i).fill()}}},drawDecorations:function(t,e,r,i){for(var o=function(t){for(var e=[],n=null,r=0,i=t.inlines.length;r<i;r++){var o=t.inlines[r],a=o.decoration
if(a)for(var s=o.decorationColor||o.color||"black",u=o.decorationStyle||"solid",l=0,c=(a=Array.isArray(a)?a:[a]).length;l<c;l++){var f=a[l]
n&&f===n.decoration&&u===n.decorationStyle&&s===n.decorationColor&&"lineThrough"!==f?n.inlines.push(o):(n={line:t,decoration:f,decorationColor:s,decorationStyle:u,inlines:[o]},e.push(n))}else n=null}return e}(t),a=0,s=o.length;a<s;a++)n(o[a],e,r,i)}}},function(t,e,n){var r,i=i||function(t){"use strict"
if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,n=function(){return t.URL||t.webkitURL||t},r=e?e.createElementNS("http://www.w3.org/1999/xhtml","a"):[],i="download"in r,o=/constructor/i.test(t.HTMLElement)||t.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},u=function(t){setTimeout(function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()},4e4)},l=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},c=function(e,c,f){f||(e=l(e))
var h,p=this,d="application/octet-stream"===e.type,g=function(){(function(t,e,n){for(var r=(e=[].concat(e)).length;r--;){var i=t["on"+e[r]]
if("function"==typeof i)try{i.call(t,n||t)}catch(t){s(t)}}})(p,"writestart progress write writeend".split(" "))}
if(p.readyState=p.INIT,i)return h=n().createObjectURL(e),void setTimeout(function(){var t,e
r.href=h,r.download=c,t=r,e=new MouseEvent("click"),t.dispatchEvent(e),g(),u(h),p.readyState=p.DONE})
!function(){if((a||d&&o)&&t.FileReader){var r=new FileReader
return r.onloadend=function(){var e=a?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;")
t.open(e,"_blank")||(t.location.href=e),e=void 0,p.readyState=p.DONE,g()},r.readAsDataURL(e),void(p.readyState=p.INIT)}h||(h=n().createObjectURL(e)),d?t.location.href=h:t.open(h,"_blank")||(t.location.href=h),p.readyState=p.DONE,g(),u(h)}()},f=c.prototype
return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=l(t)),navigator.msSaveOrOpenBlob(t,e)}:(f.abort=function(){},f.readyState=f.INIT=0,f.WRITING=1,f.DONE=2,f.error=f.onwritestart=f.onprogress=f.onwrite=f.onabort=f.onerror=f.onwriteend=null,function(t,e,n){return new c(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content)
void 0!==t&&t.exports?t.exports.saveAs=i:null!==n(301)&&null!==n(302)&&void 0!==(r=function(){return i}.call(e,n,e,t))&&(t.exports=r)},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){(function(e){t.exports=e}).call(e,{})}])})
