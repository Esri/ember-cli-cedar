!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t()
else if("function"==typeof define&&define.amd)JSZip=t(),define([],t)
else{var e
"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof $&&$.global?e=$.global:"undefined"!=typeof self&&(e=self),e.JSZip=t()}}(function(){return function t(e,r,n){function i(s,o){if(!r[s]){if(!e[s]){var d="function"==typeof require&&require
if(!o&&d)return d(s,!0)
if(a)return a(s,!0)
throw new Error("Cannot find module '"+s+"'")}var h=r[s]={exports:{}}
e[s][0].call(h.exports,function(t){return i(e[s][1][t]||t)},h,h.exports,t,e,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s])
return i}({1:[function(t,e,r){"use strict"
var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
r.encode=function(t,e){for(var r,i,a,s,o,d,h,l="",f=0;f<t.length;)s=(r=t.charCodeAt(f++))>>2,o=(3&r)<<4|(i=t.charCodeAt(f++))>>4,d=(15&i)<<2|(a=t.charCodeAt(f++))>>6,h=63&a,isNaN(i)?d=h=64:isNaN(a)&&(h=64),l=l+n.charAt(s)+n.charAt(o)+n.charAt(d)+n.charAt(h)
return l},r.decode=function(t,e){var r,i,a,s,o,d,h="",l=0
for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<t.length;)r=n.indexOf(t.charAt(l++))<<2|(s=n.indexOf(t.charAt(l++)))>>4,i=(15&s)<<4|(o=n.indexOf(t.charAt(l++)))>>2,a=(3&o)<<6|(d=n.indexOf(t.charAt(l++))),h+=String.fromCharCode(r),64!=o&&(h+=String.fromCharCode(i)),64!=d&&(h+=String.fromCharCode(a))
return h}},{}],2:[function(t,e,r){"use strict"
function n(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}n.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},e.exports=n},{}],3:[function(t,e,r){"use strict"
r.STORE={magic:"\0\0",compress:function(t){return t},uncompress:function(t){return t},compressInputType:null,uncompressInputType:null},r.DEFLATE=t("./flate")},{"./flate":8}],4:[function(t,e,r){"use strict"
var n=t("./utils"),i=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]
e.exports=function(t,e){if(void 0===t||!t.length)return 0
var r="string"!==n.getTypeOf(t)
void 0===e&&(e=0)
var a=0
e^=-1
for(var s=0,o=t.length;s<o;s++)a=r?t[s]:t.charCodeAt(s),e=e>>>8^i[255&(e^a)]
return-1^e}},{"./utils":21}],5:[function(t,e,r){"use strict"
function n(t){this.data=null,this.length=0,this.index=0}var i=t("./utils")
n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(t){},readInt:function(t){var e,r=0
for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e)
return this.index+=t,r},readString:function(t){return i.transformTo("string",this.readData(t))},readData:function(t){},lastIndexOfSignature:function(t){},readDate:function(){var t=this.readInt(4)
return new Date(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1)}},e.exports=n},{"./utils":21}],6:[function(t,e,r){"use strict"
r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!1,r.date=null,r.compression=null,r.comment=null},{}],7:[function(t,e,r){"use strict"
var n=t("./utils")
r.string2binary=function(t){return n.string2binary(t)},r.string2Uint8Array=function(t){return n.transformTo("uint8array",t)},r.uint8Array2String=function(t){return n.transformTo("string",t)},r.string2Blob=function(t){var e=n.transformTo("arraybuffer",t)
return n.arrayBuffer2Blob(e)},r.arrayBuffer2Blob=function(t){return n.arrayBuffer2Blob(t)},r.transformTo=function(t,e){return n.transformTo(t,e)},r.getTypeOf=function(t){return n.getTypeOf(t)},r.checkSupport=function(t){return n.checkSupport(t)},r.MAX_VALUE_16BITS=n.MAX_VALUE_16BITS,r.MAX_VALUE_32BITS=n.MAX_VALUE_32BITS,r.pretty=function(t){return n.pretty(t)},r.findCompression=function(t){return n.findCompression(t)},r.isRegExp=function(t){return n.isRegExp(t)}},{"./utils":21}],8:[function(t,e,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=t("pako")
r.uncompressInputType=n?"uint8array":"array",r.compressInputType=n?"uint8array":"array",r.magic="\b\0",r.compress=function(t){return i.deflateRaw(t)},r.uncompress=function(t){return i.inflateRaw(t)}},{pako:24}],9:[function(t,e,r){"use strict"
function n(t,e){if(!(this instanceof n))return new n(t,e)
this.files={},this.comment=null,this.root="",t&&this.load(t,e),this.clone=function(){var t=new n
for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e])
return t}}var i=t("./base64")
n.prototype=t("./object"),n.prototype.load=t("./load"),n.support=t("./support"),n.defaults=t("./defaults"),n.utils=t("./deprecatedPublicUtils"),n.base64={encode:function(t){return i.encode(t)},decode:function(t){return i.decode(t)}},n.compressions=t("./compressions"),e.exports=n},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(t,e,r){"use strict"
var n=t("./base64"),i=t("./zipEntries")
e.exports=function(t,e){var r,a,s,o
for((e=e||{}).base64&&(t=n.decode(t)),r=(a=new i(t,e)).files,s=0;s<r.length;s++)o=r[s],this.file(o.fileName,o.decompressed,{binary:!0,optimizedBinaryString:!0,date:o.date,dir:o.dir,comment:o.fileComment.length?o.fileComment:null,createFolders:e.createFolders})
return a.zipComment.length&&(this.comment=a.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(t,e,r){(function(t){"use strict"
e.exports=function(e,r){return new t(e,r)},e.exports.test=function(e){return t.isBuffer(e)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],12:[function(t,e,r){"use strict"
function n(t){this.data=t,this.length=this.data.length,this.index=0}var i=t("./uint8ArrayReader")
n.prototype=new i,n.prototype.readData=function(t){this.checkOffset(t)
var e=this.data.slice(this.index,this.index+t)
return this.index+=t,e},e.exports=n},{"./uint8ArrayReader":18}],13:[function(t,e,r){"use strict"
var n=t("./support"),i=t("./utils"),a=t("./crc32"),s=t("./signature"),o=t("./defaults"),d=t("./base64"),h=t("./compressions"),l=t("./compressedObject"),f=t("./nodeBuffer"),u=t("./utf8"),c=t("./stringWriter"),_=t("./uint8ArrayWriter"),p=function(t){if(t._data instanceof l&&(t._data=t._data.getContent(),t.options.binary=!0,t.options.base64=!1,"uint8array"===i.getTypeOf(t._data))){var e=t._data
t._data=new Uint8Array(e.length),0!==e.length&&t._data.set(e,0)}return t._data},m=function(t){var e=p(t)
return"string"===i.getTypeOf(e)?!t.options.binary&&n.nodebuffer?f(e,"utf-8"):t.asBinary():e},g=function(t){var e=p(this)
return null===e||void 0===e?"":(this.options.base64&&(e=d.decode(e)),e=t&&this.options.binary?A.utf8decode(e):i.transformTo("string",e),t||this.options.binary||(e=i.transformTo("string",A.utf8encode(e))),e)},b=function(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this._data=e,this.options=r,this._initialMetadata={dir:r.dir,date:r.date}}
b.prototype={asText:function(){return g.call(this,!0)},asBinary:function(){return g.call(this,!1)},asNodeBuffer:function(){var t=m(this)
return i.transformTo("nodebuffer",t)},asUint8Array:function(){var t=m(this)
return i.transformTo("uint8array",t)},asArrayBuffer:function(){return this.asUint8Array().buffer}}
var w=function(t,e){var r,n=""
for(r=0;r<e;r++)n+=String.fromCharCode(255&t),t>>>=8
return n},v=function(){var t,e,r={}
for(t=0;t<arguments.length;t++)for(e in arguments[t])arguments[t].hasOwnProperty(e)&&void 0===r[e]&&(r[e]=arguments[t][e])
return r},y=function(t,e,r){var n,a,s=i.getTypeOf(e)
if((a=r,!0!==(a=a||{}).base64||null!==a.binary&&void 0!==a.binary||(a.binary=!0),(a=v(a,o)).date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),r=a).createFolders&&(n=k(t))&&x.call(this,n,!0),r.dir||null===e||void 0===e)r.base64=!1,r.binary=!1,e=null
else if("string"===s)r.binary&&!r.base64&&!0!==r.optimizedBinaryString&&(e=i.string2binary(e))
else{if(r.base64=!1,r.binary=!0,!(s||e instanceof l))throw new Error("The data of '"+t+"' is in an unsupported format !")
"arraybuffer"===s&&(e=i.transformTo("uint8array",e))}var d=new b(t,e,r)
return this.files[t]=d,d},k=function(t){"/"==t.slice(-1)&&(t=t.substring(0,t.length-1))
var e=t.lastIndexOf("/")
return e>0?t.substring(0,e):""},x=function(t,e){return"/"!=t.slice(-1)&&(t+="/"),e=void 0!==e&&e,this.files[t]||y.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]},z=function(t,e){var r,n=new l
return t._data instanceof l?(n.uncompressedSize=t._data.uncompressedSize,n.crc32=t._data.crc32,0===n.uncompressedSize||t.dir?(e=h.STORE,n.compressedContent="",n.crc32=0):t._data.compressionMethod===e.magic?n.compressedContent=t._data.getCompressedContent():(r=t._data.getContent(),n.compressedContent=e.compress(i.transformTo(e.compressInputType,r)))):((r=m(t))&&0!==r.length&&!t.dir||(e=h.STORE,r=""),n.uncompressedSize=r.length,n.crc32=a(r),n.compressedContent=e.compress(i.transformTo(e.compressInputType,r))),n.compressedSize=n.compressedContent.length,n.compressionMethod=e.magic,n},C=function(t,e,r,n){r.compressedContent
var o,d,h,l,f=i.transformTo("string",u.utf8encode(e.name)),c=e.comment||"",_=i.transformTo("string",u.utf8encode(c)),p=f.length!==e.name.length,m=_.length!==c.length,g=e.options,b="",v="",y=""
h=e._initialMetadata.dir!==e.dir?e.dir:g.dir,o=(l=e._initialMetadata.date!==e.date?e.date:g.date).getHours(),o<<=6,o|=l.getMinutes(),o<<=5,o|=l.getSeconds()/2,d=l.getFullYear()-1980,d<<=4,d|=l.getMonth()+1,d<<=5,d|=l.getDate(),p&&(v=w(1,1)+w(a(f),4)+f,b+="up"+w(v.length,2)+v),m&&(y=w(1,1)+w(this.crc32(_),4)+_,b+="uc"+w(y.length,2)+y)
var k=""
return k+="\n\0",k+=p||m?"\0\b":"\0\0",k+=r.compressionMethod,k+=w(o,2),k+=w(d,2),k+=w(r.crc32,4),k+=w(r.compressedSize,4),k+=w(r.uncompressedSize,4),k+=w(f.length,2),k+=w(b.length,2),{fileRecord:s.LOCAL_FILE_HEADER+k+f+b,dirRecord:s.CENTRAL_FILE_HEADER+"\0"+k+w(_.length,2)+"\0\0\0\0"+(!0===h?"\0\0\0":"\0\0\0\0")+w(n,4)+f+b+_,compressedObject:r}},A={load:function(t,e){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(t){var e,r,n,i,a=[]
for(e in this.files)this.files.hasOwnProperty(e)&&(n=this.files[e],i=new b(n.name,n._data,v(n.options)),r=e.slice(this.root.length,e.length),e.slice(0,this.root.length)===this.root&&t(r,i)&&a.push(i))
return a},file:function(t,e,r){if(1===arguments.length){if(i.isRegExp(t)){var n=t
return this.filter(function(t,e){return!e.dir&&n.test(t)})}return this.filter(function(e,r){return!r.dir&&e===t})[0]||null}return t=this.root+t,y.call(this,t,e,r),this},folder:function(t){if(!t)return this
if(i.isRegExp(t))return this.filter(function(e,r){return r.dir&&t.test(e)})
var e=this.root+t,r=x.call(this,e),n=this.clone()
return n.root=r.name,n},remove:function(t){t=this.root+t
var e=this.files[t]
if(e||("/"!=t.slice(-1)&&(t+="/"),e=this.files[t]),e&&!e.dir)delete this.files[t]
else for(var r=this.filter(function(e,r){return r.name.slice(0,t.length)===t}),n=0;n<r.length;n++)delete this.files[r[n].name]
return this},generate:function(t){t=v(t||{},{base64:!0,compression:"STORE",type:"base64",comment:null}),i.checkSupport(t.type)
var e,r,n=[],a=0,o=0,l=i.transformTo("string",this.utf8encode(t.comment||this.comment||""))
for(var f in this.files)if(this.files.hasOwnProperty(f)){var u=this.files[f],p=u.options.compression||t.compression.toUpperCase(),m=h[p]
if(!m)throw new Error(p+" is not a valid compression method !")
var g=z.call(this,u,m),b=C.call(this,f,u,g,a)
a+=b.fileRecord.length+g.compressedSize,o+=b.dirRecord.length,n.push(b)}var y
y=s.CENTRAL_DIRECTORY_END+"\0\0\0\0"+w(n.length,2)+w(n.length,2)+w(o,4)+w(a,4)+w(l.length,2)+l
var k=t.type.toLowerCase()
for(e="uint8array"===k||"arraybuffer"===k||"blob"===k||"nodebuffer"===k?new _(a+o+y.length):new c(a+o+y.length),r=0;r<n.length;r++)e.append(n[r].fileRecord),e.append(n[r].compressedObject.compressedContent)
for(r=0;r<n.length;r++)e.append(n[r].dirRecord)
e.append(y)
var x=e.finalize()
switch(t.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return i.transformTo(t.type.toLowerCase(),x)
case"blob":return i.arrayBuffer2Blob(i.transformTo("arraybuffer",x))
case"base64":return t.base64?d.encode(x):x
default:return x}},crc32:function(t,e){return a(t,e)},utf8encode:function(t){return i.transformTo("string",u.utf8encode(t))},utf8decode:function(t){return u.utf8decode(t)}}
e.exports=A},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(t,e,r){"use strict"
r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],15:[function(t,e,r){"use strict"
function n(t,e){this.data=t,e||(this.data=a.string2binary(this.data)),this.length=this.data.length,this.index=0}var i=t("./dataReader"),a=t("./utils")
n.prototype=new i,n.prototype.byteAt=function(t){return this.data.charCodeAt(t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)},n.prototype.readData=function(t){this.checkOffset(t)
var e=this.data.slice(this.index,this.index+t)
return this.index+=t,e},e.exports=n},{"./dataReader":5,"./utils":21}],16:[function(t,e,r){"use strict"
var n=t("./utils"),i=function(){this.data=[]}
i.prototype={append:function(t){t=n.transformTo("string",t),this.data.push(t)},finalize:function(){return this.data.join("")}},e.exports=i},{"./utils":21}],17:[function(t,e,r){(function(t){"use strict"
if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer=void 0!==t,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1
else{var e=new ArrayBuffer(0)
try{r.blob=0===new Blob([e],{type:"application/zip"}).size}catch(t){try{var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
n.append(e),r.blob=0===n.getBlob("application/zip").size}catch(t){r.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],18:[function(t,e,r){"use strict"
function n(t){t&&(this.data=t,this.length=this.data.length,this.index=0)}var i=t("./dataReader")
n.prototype=new i,n.prototype.byteAt=function(t){return this.data[t]},n.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),n=t.charCodeAt(2),i=t.charCodeAt(3),a=this.length-4;a>=0;--a)if(this.data[a]===e&&this.data[a+1]===r&&this.data[a+2]===n&&this.data[a+3]===i)return a
return-1},n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0)
var e=this.data.subarray(this.index,this.index+t)
return this.index+=t,e},e.exports=n},{"./dataReader":5}],19:[function(t,e,r){"use strict"
var n=t("./utils"),i=function(t){this.data=new Uint8Array(t),this.index=0}
i.prototype={append:function(t){0!==t.length&&(t=n.transformTo("uint8array",t),this.data.set(t,this.index),this.index+=t.length)},finalize:function(){return this.data}},e.exports=i},{"./utils":21}],20:[function(t,e,r){"use strict"
for(var n=t("./utils"),i=t("./support"),a=t("./nodeBuffer"),s=new Array(256),o=0;o<256;o++)s[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1
s[254]=s[254]=1
var d=function(t,e){var r
for((e=e||t.length)>t.length&&(e=t.length),r=e-1;r>=0&&128==(192&t[r]);)r--
return r<0?e:0===r?e:r+s[t[r]]>e?r:e},h=function(t){var e,r,i,a,o=t.length,d=new Array(2*o)
for(r=0,e=0;e<o;)if((i=t[e++])<128)d[r++]=i
else if((a=s[i])>4)d[r++]=65533,e+=a-1
else{for(i&=2===a?31:3===a?15:7;a>1&&e<o;)i=i<<6|63&t[e++],a--
a>1?d[r++]=65533:i<65536?d[r++]=i:(i-=65536,d[r++]=55296|i>>10&1023,d[r++]=56320|1023&i)}return d.length!==r&&(d.subarray?d=d.subarray(0,r):d.length=r),n.applyFromCharCode(d)}
r.utf8encode=function(t){return i.nodebuffer?a(t,"utf-8"):function(t){var e,r,n,a,s,o=t.length,d=0
for(a=0;a<o;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),d+=r<128?1:r<2048?2:r<65536?3:4
for(e=i.uint8array?new Uint8Array(d):new Array(d),s=0,a=0;s<d;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),r<128?e[s++]=r:r<2048?(e[s++]=192|r>>>6,e[s++]=128|63&r):r<65536?(e[s++]=224|r>>>12,e[s++]=128|r>>>6&63,e[s++]=128|63&r):(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63,e[s++]=128|r>>>6&63,e[s++]=128|63&r)
return e}(t)},r.utf8decode=function(t){if(i.nodebuffer)return n.transformTo("nodebuffer",t).toString("utf-8")
for(var e=[],r=0,a=(t=n.transformTo(i.uint8array?"uint8array":"array",t)).length;r<a;){var s=d(t,Math.min(r+65536,a))
i.uint8array?e.push(h(t.subarray(r,s))):e.push(h(t.slice(r,s))),r=s}return e.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(t,e,r){"use strict"
function n(t){return t}function i(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r)
return e}function a(t){var e=65536,n=[],i=t.length,a=r.getTypeOf(t),s=0,o=!0
try{switch(a){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0))
break
case"nodebuffer":String.fromCharCode.apply(null,h(0))}}catch(t){o=!1}if(!o){for(var d="",l=0;l<t.length;l++)d+=String.fromCharCode(t[l])
return d}for(;s<i&&e>1;)try{"array"===a||"nodebuffer"===a?n.push(String.fromCharCode.apply(null,t.slice(s,Math.min(s+e,i)))):n.push(String.fromCharCode.apply(null,t.subarray(s,Math.min(s+e,i)))),s+=e}catch(t){e=Math.floor(e/2)}return n.join("")}function s(t,e){for(var r=0;r<t.length;r++)e[r]=t[r]
return e}var o=t("./support"),d=t("./compressions"),h=t("./nodeBuffer")
r.string2binary=function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(255&t.charCodeAt(r))
return e},r.arrayBuffer2Blob=function(t){r.checkSupport("blob")
try{return new Blob([t],{type:"application/zip"})}catch(r){try{var e=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
return e.append(t),e.getBlob("application/zip")}catch(t){throw new Error("Bug : can't construct the Blob.")}}},r.applyFromCharCode=a
var l={}
l.string={string:n,array:function(t){return i(t,new Array(t.length))},arraybuffer:function(t){return l.string.uint8array(t).buffer},uint8array:function(t){return i(t,new Uint8Array(t.length))},nodebuffer:function(t){return i(t,h(t.length))}},l.array={string:a,array:n,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return h(t)}},l.arraybuffer={string:function(t){return a(new Uint8Array(t))},array:function(t){return s(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:n,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return h(new Uint8Array(t))}},l.uint8array={string:a,array:function(t){return s(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:n,nodebuffer:function(t){return h(t)}},l.nodebuffer={string:a,array:function(t){return s(t,new Array(t.length))},arraybuffer:function(t){return l.nodebuffer.uint8array(t).buffer},uint8array:function(t){return s(t,new Uint8Array(t.length))},nodebuffer:n},r.transformTo=function(t,e){if(e||(e=""),!t)return e
r.checkSupport(t)
var n=r.getTypeOf(e)
return l[n][t](e)},r.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":o.nodebuffer&&h.test(t)?"nodebuffer":o.uint8array&&t instanceof Uint8Array?"uint8array":o.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(t){if(!o[t.toLowerCase()])throw new Error(t+" is not supported by this browser")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(t){var e,r,n=""
for(r=0;r<(t||"").length;r++)n+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase()
return n},r.findCompression=function(t){for(var e in d)if(d.hasOwnProperty(e)&&d[e].magic===t)return d[e]
return null},r.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(t,e,r){"use strict"
function n(t,e){this.files=[],this.loadOptions=e,t&&this.load(t)}var i=t("./stringReader"),a=t("./nodeBufferReader"),s=t("./uint8ArrayReader"),o=t("./utils"),d=t("./signature"),h=t("./zipEntry"),l=t("./support"),f=t("./object")
n.prototype={checkSignature:function(t){var e=this.reader.readString(4)
if(e!==t)throw new Error("Corrupted zip or bug : unexpected signature ("+o.pretty(e)+", expected "+o.pretty(t)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=f.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={}
for(var t,e,r,n=this.zip64EndOfCentralSize-44;0<n;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readString(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e
for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8()},readCentralDir:function(){var t
for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===d.CENTRAL_FILE_HEADER;)(t=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END)
if(-1===t)throw new Error("Corrupted zip : can't find end of central directory")
if(this.reader.setIndex(t),this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,-1===(t=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR)))throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator")
this.reader.setIndex(t),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(t){var e=o.getTypeOf(t)
"string"!==e||l.uint8array?this.reader="nodebuffer"===e?new a(t):new s(o.transformTo("uint8array",t)):this.reader=new i(t,this.loadOptions.optimizedBinaryString)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=n},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(t,e,r){"use strict"
function n(t,e){this.options=t,this.loadOptions=e}var i=t("./stringReader"),a=t("./utils"),s=t("./compressedObject"),o=t("./object")
n.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},prepareCompressedContent:function(t,e,r){return function(){var n=t.index
t.setIndex(e)
var i=t.readData(r)
return t.setIndex(n),i}},prepareContent:function(t,e,r,n,i){return function(){var t=a.transformTo(n.uncompressInputType,this.getCompressedContent()),e=n.uncompress(t)
if(e.length!==i)throw new Error("Bug : uncompressed data size mismatch")
return e}},readLocalPart:function(t){var e,r
if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readString(this.fileNameLength),t.skip(r),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)")
if(null===(e=a.findCompression(this.compressionMethod)))throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")")
if(this.decompressed=new s,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(t,t.index,this.compressedSize,e),this.decompressed.getContent=this.prepareContent(t,t.index,this.compressedSize,e,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=a.transformTo("string",this.decompressed.getContent()),o.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(t){if(this.versionMadeBy=t.readString(2),this.versionNeeded=t.readInt(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4),this.fileNameLength=t.readInt(2),this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported")
this.fileName=t.readString(this.fileNameLength),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readString(this.fileCommentLength),this.dir=!!(16&this.externalFileAttributes)},parseZIP64ExtraField:function(t){if(this.extraFields[1]){var e=new i(this.extraFields[1].value)
this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(t){var e,r,n,i=t.index
for(this.extraFields=this.extraFields||{};t.index<i+this.extraFieldsLength;)e=t.readInt(2),r=t.readInt(2),n=t.readString(r),this.extraFields[e]={id:e,length:r,value:n}},handleUTF8:function(){if(this.useUTF8())this.fileName=o.utf8decode(this.fileName),this.fileComment=o.utf8decode(this.fileComment)
else{var t=this.findExtraFieldUnicodePath()
null!==t&&(this.fileName=t)
var e=this.findExtraFieldUnicodeComment()
null!==e&&(this.fileComment=e)}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789]
if(t){var e=new i(t.value)
return 1!==e.readInt(1)?null:o.crc32(this.fileName)!==e.readInt(4)?null:o.utf8decode(e.readString(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461]
if(t){var e=new i(t.value)
return 1!==e.readInt(1)?null:o.crc32(this.fileComment)!==e.readInt(4)?null:o.utf8decode(e.readString(t.length-5))}return null}},e.exports=n},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(t,e,r){"use strict"
var n={};(0,t("./lib/utils/common").assign)(n,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=n},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(t,e,r){"use strict"
function n(t,e){var r=new h(e)
if(r.push(t,!0),r.err)throw r.msg
return r.result}var i=t("./zlib/deflate.js"),a=t("./utils/common"),s=t("./utils/strings"),o=t("./zlib/messages"),d=t("./zlib/zstream"),h=function(t){this.options=a.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{})
var e=this.options
e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0
var r=i.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy)
if(0!==r)throw new Error(o[r])
e.header&&i.deflateSetHeader(this.strm,e.header)}
h.prototype.push=function(t,e){var r,n,o=this.strm,d=this.options.chunkSize
if(this.ended)return!1
n=e===~~e?e:!0===e?4:0,o.input="string"==typeof t?s.string2buf(t):t,o.next_in=0,o.avail_in=o.input.length
do{if(0===o.avail_out&&(o.output=new a.Buf8(d),o.next_out=0,o.avail_out=d),1!==(r=i.deflate(o,n))&&0!==r)return this.onEnd(r),this.ended=!0,!1;(0===o.avail_out||0===o.avail_in&&4===n)&&("string"===this.options.to?this.onData(s.buf2binstring(a.shrinkBuf(o.output,o.next_out))):this.onData(a.shrinkBuf(o.output,o.next_out)))}while((o.avail_in>0||0===o.avail_out)&&1!==r)
return 4!==n||(r=i.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r)},h.prototype.onData=function(t){this.chunks.push(t)},h.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=h,r.deflate=n,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,n(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,n(t,e)}},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(t,e,r){"use strict"
function n(t,e){var r=new f(e)
if(r.push(t,!0),r.err)throw r.msg
return r.result}var i=t("./zlib/inflate.js"),a=t("./utils/common"),s=t("./utils/strings"),o=t("./zlib/constants"),d=t("./zlib/messages"),h=t("./zlib/zstream"),l=t("./zlib/gzheader"),f=function(t){this.options=a.assign({chunkSize:16384,windowBits:0,to:""},t||{})
var e=this.options
e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0
var r=i.inflateInit2(this.strm,e.windowBits)
if(r!==o.Z_OK)throw new Error(d[r])
this.header=new l,i.inflateGetHeader(this.strm,this.header)}
f.prototype.push=function(t,e){var r,n,d,h,l,f=this.strm,u=this.options.chunkSize
if(this.ended)return!1
n=e===~~e?e:!0===e?o.Z_FINISH:o.Z_NO_FLUSH,f.input="string"==typeof t?s.binstring2buf(t):t,f.next_in=0,f.avail_in=f.input.length
do{if(0===f.avail_out&&(f.output=new a.Buf8(u),f.next_out=0,f.avail_out=u),(r=i.inflate(f,o.Z_NO_FLUSH))!==o.Z_STREAM_END&&r!==o.Z_OK)return this.onEnd(r),this.ended=!0,!1
f.next_out&&(0===f.avail_out||r===o.Z_STREAM_END||0===f.avail_in&&n===o.Z_FINISH)&&("string"===this.options.to?(d=s.utf8border(f.output,f.next_out),h=f.next_out-d,l=s.buf2string(f.output,d),f.next_out=h,f.avail_out=u-h,h&&a.arraySet(f.output,f.output,d,h,0),this.onData(l)):this.onData(a.shrinkBuf(f.output,f.next_out)))}while(f.avail_in>0&&r!==o.Z_STREAM_END)
return r===o.Z_STREAM_END&&(n=o.Z_FINISH),n!==o.Z_FINISH||(r=i.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===o.Z_OK)},f.prototype.onData=function(t){this.chunks.push(t)},f.prototype.onEnd=function(t){t===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=f,r.inflate=n,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,n(t,e)},r.ungzip=n},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(t,e,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array
r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift()
if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object")
for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)}
var i={arraySet:function(t,e,r,n,i){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+n),i)
else for(var a=0;a<n;a++)t[i+a]=e[r+a]},flattenChunks:function(t){var e,r,n,i,a,s
for(n=0,e=0,r=t.length;e<r;e++)n+=t[e].length
for(s=new Uint8Array(n),i=0,e=0,r=t.length;e<r;e++)a=t[e],s.set(a,i),i+=a.length
return s}},a={arraySet:function(t,e,r,n,i){for(var a=0;a<n;a++)t[i+a]=e[r+a]},flattenChunks:function(t){return[].concat.apply([],t)}}
r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(n)},{}],28:[function(t,e,r){"use strict"
function n(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&a))return String.fromCharCode.apply(null,i.shrinkBuf(t,e))
for(var r="",n=0;n<e;n++)r+=String.fromCharCode(t[n])
return r}var i=t("./common"),a=!0,s=!0
try{String.fromCharCode.apply(null,[0])}catch(t){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var o=new i.Buf8(256),d=0;d<256;d++)o[d]=d>=252?6:d>=248?5:d>=240?4:d>=224?3:d>=192?2:1
o[254]=o[254]=1,r.string2buf=function(t){var e,r,n,a,s,o=t.length,d=0
for(a=0;a<o;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),d+=r<128?1:r<2048?2:r<65536?3:4
for(e=new i.Buf8(d),s=0,a=0;s<d;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),r<128?e[s++]=r:r<2048?(e[s++]=192|r>>>6,e[s++]=128|63&r):r<65536?(e[s++]=224|r>>>12,e[s++]=128|r>>>6&63,e[s++]=128|63&r):(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63,e[s++]=128|r>>>6&63,e[s++]=128|63&r)
return e},r.buf2binstring=function(t){return n(t,t.length)},r.binstring2buf=function(t){for(var e=new i.Buf8(t.length),r=0,n=e.length;r<n;r++)e[r]=t.charCodeAt(r)
return e},r.buf2string=function(t,e){var r,i,a,s,d=e||t.length,h=new Array(2*d)
for(i=0,r=0;r<d;)if((a=t[r++])<128)h[i++]=a
else if((s=o[a])>4)h[i++]=65533,r+=s-1
else{for(a&=2===s?31:3===s?15:7;s>1&&r<d;)a=a<<6|63&t[r++],s--
s>1?h[i++]=65533:a<65536?h[i++]=a:(a-=65536,h[i++]=55296|a>>10&1023,h[i++]=56320|1023&a)}return n(h,i)},r.utf8border=function(t,e){var r
for((e=e||t.length)>t.length&&(e=t.length),r=e-1;r>=0&&128==(192&t[r]);)r--
return r<0?e:0===r?e:r+o[t[r]]>e?r:e}},{"./common":27}],29:[function(t,e,r){"use strict"
e.exports=function(t,e,r,n){for(var i=65535&t|0,a=t>>>16&65535|0,s=0;0!==r;){r-=s=r>2e3?2e3:r
do{a=a+(i=i+e[n++]|0)|0}while(--s)
i%=65521,a%=65521}return i|a<<16|0}},{}],30:[function(t,e,r){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(t,e,r){"use strict"
var n=function(){for(var t,e=[],r=0;r<256;r++){t=r
for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1
e[r]=t}return e}()
e.exports=function(t,e,r,i){var a=n,s=i+r
t^=-1
for(var o=i;o<s;o++)t=t>>>8^a[255&(t^e[o])]
return-1^t}},{}],32:[function(t,e,r){"use strict"
function n(t,e){return t.msg=k[e],e}function i(t){return(t<<1)-(t>4?9:0)}function a(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,r=e.pending
r>t.avail_out&&(r=t.avail_out),0!==r&&(b.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function o(t,e){w._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function d(t,e){t.pending_buf[t.pending++]=e}function h(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function l(t,e){var r,n,i=t.max_chain_length,a=t.strstart,s=t.prev_length,o=t.nice_match,d=t.strstart>t.w_size-J?t.strstart-(t.w_size-J):0,h=t.window,l=t.w_mask,f=t.prev,u=t.strstart+G,c=h[a+s-1],_=h[a+s]
t.prev_length>=t.good_match&&(i>>=2),o>t.lookahead&&(o=t.lookahead)
do{if(h[(r=e)+s]===_&&h[r+s-1]===c&&h[r]===h[a]&&h[++r]===h[a+1]){a+=2,r++
do{}while(h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&a<u)
if(n=G-(u-a),a=u-G,n>s){if(t.match_start=e,s=n,n>=o)break
c=h[a+s-1],_=h[a+s]}}}while((e=f[e&l])>d&&0!=--i)
return s<=t.lookahead?s:t.lookahead}function f(t){var e,r,n,i,a,s,o,d,h,l,f=t.w_size
do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-J)){b.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=r=t.hash_size
do{n=t.head[--e],t.head[e]=n>=f?n-f:0}while(--r)
e=r=f
do{n=t.prev[--e],t.prev[e]=n>=f?n-f:0}while(--r)
i+=f}if(0===t.strm.avail_in)break
if(s=t.strm,o=t.window,d=t.strstart+t.lookahead,h=i,l=void 0,(l=s.avail_in)>h&&(l=h),r=0===l?0:(s.avail_in-=l,b.arraySet(o,s.input,s.next_in,l,d),1===s.state.wrap?s.adler=v(s.adler,o,l,d):2===s.state.wrap&&(s.adler=y(s.adler,o,l,d)),s.next_in+=l,s.total_in+=l,l),t.lookahead+=r,t.lookahead+t.insert>=q)for(a=t.strstart-t.insert,t.ins_h=t.window[a],t.ins_h=(t.ins_h<<t.hash_shift^t.window[a+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[a+q-1])&t.hash_mask,t.prev[a&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=a,a++,t.insert--,!(t.lookahead+t.insert<q)););}while(t.lookahead<J&&0!==t.strm.avail_in)}function u(t,e){for(var r,n;;){if(t.lookahead<J){if(f(t),t.lookahead<J&&e===x)return st
if(0===t.lookahead)break}if(r=0,t.lookahead>=q&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+q-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-J&&(t.match_length=l(t,r)),t.match_length>=q)if(n=w._tr_tally(t,t.strstart-t.match_start,t.match_length-q),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=q){t.match_length--
do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+q-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length)
t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask
else n=w._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++
if(n&&(o(t,!1),0===t.strm.avail_out))return st}return t.insert=t.strstart<q-1?t.strstart:q-1,e===A?(o(t,!0),0===t.strm.avail_out?dt:ht):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?st:ot}function c(t,e){for(var r,n,i;;){if(t.lookahead<J){if(f(t),t.lookahead<J&&e===x)return st
if(0===t.lookahead)break}if(r=0,t.lookahead>=q&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+q-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=q-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-J&&(t.match_length=l(t,r),t.match_length<=5&&(t.strategy===L||t.match_length===q&&t.strstart-t.match_start>4096)&&(t.match_length=q-1)),t.prev_length>=q&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-q,n=w._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-q),t.lookahead-=t.prev_length-1,t.prev_length-=2
do{++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+q-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length)
if(t.match_available=0,t.match_length=q-1,t.strstart++,n&&(o(t,!1),0===t.strm.avail_out))return st}else if(t.match_available){if((n=w._tr_tally(t,0,t.window[t.strstart-1]))&&o(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return st}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=w._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<q-1?t.strstart:q-1,e===A?(o(t,!0),0===t.strm.avail_out?dt:ht):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?st:ot}function _(t){var e
return t&&t.state?(t.total_in=t.total_out=0,t.data_type=Z,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?Q:it,t.adler=2===e.wrap?0:1,e.last_flush=x,w._tr_init(e),S):n(t,I)}function p(t){var e,r=_(t)
return r===S&&((e=t.state).window_size=2*e.w_size,a(e.head),e.max_lazy_match=g[e.level].max_lazy,e.good_match=g[e.level].good_length,e.nice_match=g[e.level].nice_length,e.max_chain_length=g[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=q-1,e.match_available=0,e.ins_h=0),r}function m(t,e,r,i,s,o){if(!t)return I
var d=1
if(e===O&&(e=6),i<0?(d=0,i=-i):i>15&&(d=2,i-=16),s<1||s>P||r!==M||i<8||i>15||e<0||e>9||o<0||o>U)return n(t,I)
8===i&&(i=9)
var h=new function(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new b.Buf16(2*Y),this.dyn_dtree=new b.Buf16(2*(2*K+1)),this.bl_tree=new b.Buf16(2*(2*V+1)),a(this.dyn_ltree),a(this.dyn_dtree),a(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new b.Buf16(W+1),this.heap=new b.Buf16(2*X+1),a(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new b.Buf16(2*X+1),a(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}
return t.state=h,h.strm=t,h.wrap=d,h.gzhead=null,h.w_bits=i,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=s+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+q-1)/q),h.window=new b.Buf8(2*h.w_size),h.head=new b.Buf16(h.hash_size),h.prev=new b.Buf16(h.w_size),h.lit_bufsize=1<<s+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new b.Buf8(h.pending_buf_size),h.d_buf=h.lit_bufsize>>1,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=o,h.method=r,p(t)}var g,b=t("../utils/common"),w=t("./trees"),v=t("./adler32"),y=t("./crc32"),k=t("./messages"),x=0,z=1,C=3,A=4,E=5,S=0,B=1,I=-2,T=-3,R=-5,O=-1,L=1,D=2,N=3,U=4,F=0,Z=2,M=8,P=9,j=15,H=8,X=286,K=30,V=19,Y=2*X+1,W=15,q=3,G=258,J=G+q+1,$=32,Q=42,tt=69,et=73,rt=91,nt=103,it=113,at=666,st=1,ot=2,dt=3,ht=4,lt=3,ft=function(t,e,r,n,i){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=n,this.func=i}
g=[new ft(0,0,0,0,function(t,e){var r=65535
for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(f(t),0===t.lookahead&&e===x)return st
if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0
var n=t.block_start+r
if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,o(t,!1),0===t.strm.avail_out))return st
if(t.strstart-t.block_start>=t.w_size-J&&(o(t,!1),0===t.strm.avail_out))return st}return t.insert=0,e===A?(o(t,!0),0===t.strm.avail_out?dt:ht):(t.strstart>t.block_start&&(o(t,!1),t.strm.avail_out),st)}),new ft(4,4,8,4,u),new ft(4,5,16,8,u),new ft(4,6,32,32,u),new ft(4,4,16,16,c),new ft(8,16,32,32,c),new ft(8,16,128,128,c),new ft(8,32,128,256,c),new ft(32,128,258,1024,c),new ft(32,258,258,4096,c)],r.deflateInit=function(t,e){return m(t,e,M,j,H,F)},r.deflateInit2=m,r.deflateReset=p,r.deflateResetKeep=_,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?I:(t.state.gzhead=e,S):I},r.deflate=function(t,e){var r,l,u,c
if(!t||!t.state||e>E||e<0)return t?n(t,I):I
if(l=t.state,!t.output||!t.input&&0!==t.avail_in||l.status===at&&e!==A)return n(t,0===t.avail_out?R:I)
if(l.strm=t,r=l.last_flush,l.last_flush=e,l.status===Q)if(2===l.wrap)t.adler=0,d(l,31),d(l,139),d(l,8),l.gzhead?(d(l,(l.gzhead.text?1:0)+(l.gzhead.hcrc?2:0)+(l.gzhead.extra?4:0)+(l.gzhead.name?8:0)+(l.gzhead.comment?16:0)),d(l,255&l.gzhead.time),d(l,l.gzhead.time>>8&255),d(l,l.gzhead.time>>16&255),d(l,l.gzhead.time>>24&255),d(l,9===l.level?2:l.strategy>=D||l.level<2?4:0),d(l,255&l.gzhead.os),l.gzhead.extra&&l.gzhead.extra.length&&(d(l,255&l.gzhead.extra.length),d(l,l.gzhead.extra.length>>8&255)),l.gzhead.hcrc&&(t.adler=y(t.adler,l.pending_buf,l.pending,0)),l.gzindex=0,l.status=tt):(d(l,0),d(l,0),d(l,0),d(l,0),d(l,0),d(l,9===l.level?2:l.strategy>=D||l.level<2?4:0),d(l,lt),l.status=it)
else{var _=M+(l.w_bits-8<<4)<<8
_|=(l.strategy>=D||l.level<2?0:l.level<6?1:6===l.level?2:3)<<6,0!==l.strstart&&(_|=$),_+=31-_%31,l.status=it,h(l,_),0!==l.strstart&&(h(l,t.adler>>>16),h(l,65535&t.adler)),t.adler=1}if(l.status===tt)if(l.gzhead.extra){for(u=l.pending;l.gzindex<(65535&l.gzhead.extra.length)&&(l.pending!==l.pending_buf_size||(l.gzhead.hcrc&&l.pending>u&&(t.adler=y(t.adler,l.pending_buf,l.pending-u,u)),s(t),u=l.pending,l.pending!==l.pending_buf_size));)d(l,255&l.gzhead.extra[l.gzindex]),l.gzindex++
l.gzhead.hcrc&&l.pending>u&&(t.adler=y(t.adler,l.pending_buf,l.pending-u,u)),l.gzindex===l.gzhead.extra.length&&(l.gzindex=0,l.status=et)}else l.status=et
if(l.status===et)if(l.gzhead.name){u=l.pending
do{if(l.pending===l.pending_buf_size&&(l.gzhead.hcrc&&l.pending>u&&(t.adler=y(t.adler,l.pending_buf,l.pending-u,u)),s(t),u=l.pending,l.pending===l.pending_buf_size)){c=1
break}c=l.gzindex<l.gzhead.name.length?255&l.gzhead.name.charCodeAt(l.gzindex++):0,d(l,c)}while(0!==c)
l.gzhead.hcrc&&l.pending>u&&(t.adler=y(t.adler,l.pending_buf,l.pending-u,u)),0===c&&(l.gzindex=0,l.status=rt)}else l.status=rt
if(l.status===rt)if(l.gzhead.comment){u=l.pending
do{if(l.pending===l.pending_buf_size&&(l.gzhead.hcrc&&l.pending>u&&(t.adler=y(t.adler,l.pending_buf,l.pending-u,u)),s(t),u=l.pending,l.pending===l.pending_buf_size)){c=1
break}c=l.gzindex<l.gzhead.comment.length?255&l.gzhead.comment.charCodeAt(l.gzindex++):0,d(l,c)}while(0!==c)
l.gzhead.hcrc&&l.pending>u&&(t.adler=y(t.adler,l.pending_buf,l.pending-u,u)),0===c&&(l.status=nt)}else l.status=nt
if(l.status===nt&&(l.gzhead.hcrc?(l.pending+2>l.pending_buf_size&&s(t),l.pending+2<=l.pending_buf_size&&(d(l,255&t.adler),d(l,t.adler>>8&255),t.adler=0,l.status=it)):l.status=it),0!==l.pending){if(s(t),0===t.avail_out)return l.last_flush=-1,S}else if(0===t.avail_in&&i(e)<=i(r)&&e!==A)return n(t,R)
if(l.status===at&&0!==t.avail_in)return n(t,R)
if(0!==t.avail_in||0!==l.lookahead||e!==x&&l.status!==at){var p=l.strategy===D?function(t,e){for(var r;;){if(0===t.lookahead&&(f(t),0===t.lookahead)){if(e===x)return st
break}if(t.match_length=0,r=w._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(o(t,!1),0===t.strm.avail_out))return st}return t.insert=0,e===A?(o(t,!0),0===t.strm.avail_out?dt:ht):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?st:ot}(l,e):l.strategy===N?function(t,e){for(var r,n,i,a,s=t.window;;){if(t.lookahead<=G){if(f(t),t.lookahead<=G&&e===x)return st
if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=q&&t.strstart>0&&(n=s[i=t.strstart-1])===s[++i]&&n===s[++i]&&n===s[++i]){a=t.strstart+G
do{}while(n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&i<a)
t.match_length=G-(a-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=q?(r=w._tr_tally(t,1,t.match_length-q),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=w._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(o(t,!1),0===t.strm.avail_out))return st}return t.insert=0,e===A?(o(t,!0),0===t.strm.avail_out?dt:ht):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?st:ot}(l,e):g[l.level].func(l,e)
if(p!==dt&&p!==ht||(l.status=at),p===st||p===dt)return 0===t.avail_out&&(l.last_flush=-1),S
if(p===ot&&(e===z?w._tr_align(l):e!==E&&(w._tr_stored_block(l,0,0,!1),e===C&&(a(l.head),0===l.lookahead&&(l.strstart=0,l.block_start=0,l.insert=0))),s(t),0===t.avail_out))return l.last_flush=-1,S}return e!==A?S:l.wrap<=0?B:(2===l.wrap?(d(l,255&t.adler),d(l,t.adler>>8&255),d(l,t.adler>>16&255),d(l,t.adler>>24&255),d(l,255&t.total_in),d(l,t.total_in>>8&255),d(l,t.total_in>>16&255),d(l,t.total_in>>24&255)):(h(l,t.adler>>>16),h(l,65535&t.adler)),s(t),l.wrap>0&&(l.wrap=-l.wrap),0!==l.pending?S:B)},r.deflateEnd=function(t){var e
return t&&t.state?(e=t.state.status)!==Q&&e!==tt&&e!==et&&e!==rt&&e!==nt&&e!==it&&e!==at?n(t,I):(t.state=null,e===it?n(t,T):S):I},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(t,e,r){"use strict"
e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],34:[function(t,e,r){"use strict"
e.exports=function(t,e){var r,n,i,a,s,o,d,h,l,f,u,c,_,p,m,g,b,w,v,y,k,x,z,C,A
r=t.state,n=t.next_in,C=t.input,i=n+(t.avail_in-5),a=t.next_out,A=t.output,s=a-(e-t.avail_out),o=a+(t.avail_out-257),d=r.dmax,h=r.wsize,l=r.whave,f=r.wnext,u=r.window,c=r.hold,_=r.bits,p=r.lencode,m=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1
t:do{_<15&&(c+=C[n++]<<_,_+=8,c+=C[n++]<<_,_+=8),w=p[c&g]
e:for(;;){if(c>>>=v=w>>>24,_-=v,0==(v=w>>>16&255))A[a++]=65535&w
else{if(!(16&v)){if(0==(64&v)){w=p[(65535&w)+(c&(1<<v)-1)]
continue e}if(32&v){r.mode=12
break t}t.msg="invalid literal/length code",r.mode=30
break t}y=65535&w,(v&=15)&&(_<v&&(c+=C[n++]<<_,_+=8),y+=c&(1<<v)-1,c>>>=v,_-=v),_<15&&(c+=C[n++]<<_,_+=8,c+=C[n++]<<_,_+=8),w=m[c&b]
r:for(;;){if(c>>>=v=w>>>24,_-=v,!(16&(v=w>>>16&255))){if(0==(64&v)){w=m[(65535&w)+(c&(1<<v)-1)]
continue r}t.msg="invalid distance code",r.mode=30
break t}if(k=65535&w,_<(v&=15)&&(c+=C[n++]<<_,(_+=8)<v&&(c+=C[n++]<<_,_+=8)),(k+=c&(1<<v)-1)>d){t.msg="invalid distance too far back",r.mode=30
break t}if(c>>>=v,_-=v,k>(v=a-s)){if((v=k-v)>l&&r.sane){t.msg="invalid distance too far back",r.mode=30
break t}if(x=0,z=u,0===f){if(x+=h-v,v<y){y-=v
do{A[a++]=u[x++]}while(--v)
x=a-k,z=A}}else if(f<v){if(x+=h+f-v,(v-=f)<y){y-=v
do{A[a++]=u[x++]}while(--v)
if(x=0,f<y){y-=v=f
do{A[a++]=u[x++]}while(--v)
x=a-k,z=A}}}else if(x+=f-v,v<y){y-=v
do{A[a++]=u[x++]}while(--v)
x=a-k,z=A}for(;y>2;)A[a++]=z[x++],A[a++]=z[x++],A[a++]=z[x++],y-=3
y&&(A[a++]=z[x++],y>1&&(A[a++]=z[x++]))}else{x=a-k
do{A[a++]=A[x++],A[a++]=A[x++],A[a++]=A[x++],y-=3}while(y>2)
y&&(A[a++]=A[x++],y>1&&(A[a++]=A[x++]))}break}}break}}while(n<i&&a<o)
n-=y=_>>3,c&=(1<<(_-=y<<3))-1,t.next_in=n,t.next_out=a,t.avail_in=n<i?i-n+5:5-(n-i),t.avail_out=a<o?o-a+257:257-(a-o),r.hold=c,r.bits=_}},{}],35:[function(t,e,r){"use strict"
function n(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function i(t){var e
return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=I,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new f.Buf32(dt),e.distcode=e.distdyn=new f.Buf32(ht),e.sane=1,e.back=-1,k):C}function a(t){var e
return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,i(t)):C}function s(t,e){var r,n
return t&&t.state?(n=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?C:(null!==n.window&&n.wbits!==e&&(n.window=null),n.wrap=r,n.wbits=e,a(t))):C}function o(t,e){var r,n
return t?(n=new function(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0},t.state=n,n.window=null,(r=s(t,e))!==k&&(t.state=null),r):C}function d(t){if(ft){var e
for(h=new f.Buf32(512),l=new f.Buf32(32),e=0;e<144;)t.lens[e++]=8
for(;e<256;)t.lens[e++]=9
for(;e<280;)t.lens[e++]=7
for(;e<288;)t.lens[e++]=8
for(p(g,t.lens,0,288,h,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5
p(b,t.lens,0,32,l,0,t.work,{bits:5}),ft=!1}t.lencode=h,t.lenbits=9,t.distcode=l,t.distbits=5}var h,l,f=t("../utils/common"),u=t("./adler32"),c=t("./crc32"),_=t("./inffast"),p=t("./inftrees"),m=0,g=1,b=2,w=4,v=5,y=6,k=0,x=1,z=2,C=-2,A=-3,E=-4,S=-5,B=8,I=1,T=2,R=3,O=4,L=5,D=6,N=7,U=8,F=9,Z=10,M=11,P=12,j=13,H=14,X=15,K=16,V=17,Y=18,W=19,q=20,G=21,J=22,$=23,Q=24,tt=25,et=26,rt=27,nt=28,it=29,at=30,st=31,ot=32,dt=852,ht=592,lt=15,ft=!0
r.inflateReset=a,r.inflateReset2=s,r.inflateResetKeep=i,r.inflateInit=function(t){return o(t,lt)},r.inflateInit2=o,r.inflate=function(t,e){var r,i,a,s,o,h,l,dt,ht,lt,ft,ut,ct,_t,pt,mt,gt,bt,wt,vt,yt,kt,xt,zt,Ct,At,Et,St,Bt,It,Tt=0,Rt=new f.Buf8(4),Ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return C;(r=t.state).mode===P&&(r.mode=j),o=t.next_out,a=t.output,l=t.avail_out,s=t.next_in,i=t.input,h=t.avail_in,dt=r.hold,ht=r.bits,lt=h,ft=l,kt=k
t:for(;;)switch(r.mode){case I:if(0===r.wrap){r.mode=j
break}for(;ht<16;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(2&r.wrap&&35615===dt){r.check=0,Rt[0]=255&dt,Rt[1]=dt>>>8&255,r.check=c(r.check,Rt,2,0),dt=0,ht=0,r.mode=T
break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&dt)<<8)+(dt>>8))%31){t.msg="incorrect header check",r.mode=at
break}if((15&dt)!==B){t.msg="unknown compression method",r.mode=at
break}if(ht-=4,yt=8+(15&(dt>>>=4)),0===r.wbits)r.wbits=yt
else if(yt>r.wbits){t.msg="invalid window size",r.mode=at
break}r.dmax=1<<yt,t.adler=r.check=1,r.mode=512&dt?Z:P,dt=0,ht=0
break
case T:for(;ht<16;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(r.flags=dt,(255&r.flags)!==B){t.msg="unknown compression method",r.mode=at
break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=at
break}r.head&&(r.head.text=dt>>8&1),512&r.flags&&(Rt[0]=255&dt,Rt[1]=dt>>>8&255,r.check=c(r.check,Rt,2,0)),dt=0,ht=0,r.mode=R
case R:for(;ht<32;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}r.head&&(r.head.time=dt),512&r.flags&&(Rt[0]=255&dt,Rt[1]=dt>>>8&255,Rt[2]=dt>>>16&255,Rt[3]=dt>>>24&255,r.check=c(r.check,Rt,4,0)),dt=0,ht=0,r.mode=O
case O:for(;ht<16;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}r.head&&(r.head.xflags=255&dt,r.head.os=dt>>8),512&r.flags&&(Rt[0]=255&dt,Rt[1]=dt>>>8&255,r.check=c(r.check,Rt,2,0)),dt=0,ht=0,r.mode=L
case L:if(1024&r.flags){for(;ht<16;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}r.length=dt,r.head&&(r.head.extra_len=dt),512&r.flags&&(Rt[0]=255&dt,Rt[1]=dt>>>8&255,r.check=c(r.check,Rt,2,0)),dt=0,ht=0}else r.head&&(r.head.extra=null)
r.mode=D
case D:if(1024&r.flags&&((ut=r.length)>h&&(ut=h),ut&&(r.head&&(yt=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),f.arraySet(r.head.extra,i,s,ut,yt)),512&r.flags&&(r.check=c(r.check,i,ut,s)),h-=ut,s+=ut,r.length-=ut),r.length))break t
r.length=0,r.mode=N
case N:if(2048&r.flags){if(0===h)break t
ut=0
do{yt=i[s+ut++],r.head&&yt&&r.length<65536&&(r.head.name+=String.fromCharCode(yt))}while(yt&&ut<h)
if(512&r.flags&&(r.check=c(r.check,i,ut,s)),h-=ut,s+=ut,yt)break t}else r.head&&(r.head.name=null)
r.length=0,r.mode=U
case U:if(4096&r.flags){if(0===h)break t
ut=0
do{yt=i[s+ut++],r.head&&yt&&r.length<65536&&(r.head.comment+=String.fromCharCode(yt))}while(yt&&ut<h)
if(512&r.flags&&(r.check=c(r.check,i,ut,s)),h-=ut,s+=ut,yt)break t}else r.head&&(r.head.comment=null)
r.mode=F
case F:if(512&r.flags){for(;ht<16;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(dt!==(65535&r.check)){t.msg="header crc mismatch",r.mode=at
break}dt=0,ht=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=P
break
case Z:for(;ht<32;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}t.adler=r.check=n(dt),dt=0,ht=0,r.mode=M
case M:if(0===r.havedict)return t.next_out=o,t.avail_out=l,t.next_in=s,t.avail_in=h,r.hold=dt,r.bits=ht,z
t.adler=r.check=1,r.mode=P
case P:if(e===v||e===y)break t
case j:if(r.last){dt>>>=7&ht,ht-=7&ht,r.mode=rt
break}for(;ht<3;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}switch(r.last=1&dt,ht-=1,3&(dt>>>=1)){case 0:r.mode=H
break
case 1:if(d(r),r.mode=q,e===y){dt>>>=2,ht-=2
break t}break
case 2:r.mode=V
break
case 3:t.msg="invalid block type",r.mode=at}dt>>>=2,ht-=2
break
case H:for(dt>>>=7&ht,ht-=7&ht;ht<32;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if((65535&dt)!=(dt>>>16^65535)){t.msg="invalid stored block lengths",r.mode=at
break}if(r.length=65535&dt,dt=0,ht=0,r.mode=X,e===y)break t
case X:r.mode=K
case K:if(ut=r.length){if(ut>h&&(ut=h),ut>l&&(ut=l),0===ut)break t
f.arraySet(a,i,s,ut,o),h-=ut,s+=ut,l-=ut,o+=ut,r.length-=ut
break}r.mode=P
break
case V:for(;ht<14;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(r.nlen=257+(31&dt),dt>>>=5,ht-=5,r.ndist=1+(31&dt),dt>>>=5,ht-=5,r.ncode=4+(15&dt),dt>>>=4,ht-=4,r.nlen>286||r.ndist>30){t.msg="too many length or distance symbols",r.mode=at
break}r.have=0,r.mode=Y
case Y:for(;r.have<r.ncode;){for(;ht<3;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}r.lens[Ot[r.have++]]=7&dt,dt>>>=3,ht-=3}for(;r.have<19;)r.lens[Ot[r.have++]]=0
if(r.lencode=r.lendyn,r.lenbits=7,xt={bits:r.lenbits},kt=p(m,r.lens,0,19,r.lencode,0,r.work,xt),r.lenbits=xt.bits,kt){t.msg="invalid code lengths set",r.mode=at
break}r.have=0,r.mode=W
case W:for(;r.have<r.nlen+r.ndist;){for(;mt=(Tt=r.lencode[dt&(1<<r.lenbits)-1])>>>16&255,gt=65535&Tt,!((pt=Tt>>>24)<=ht);){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(gt<16)dt>>>=pt,ht-=pt,r.lens[r.have++]=gt
else{if(16===gt){for(zt=pt+2;ht<zt;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(dt>>>=pt,ht-=pt,0===r.have){t.msg="invalid bit length repeat",r.mode=at
break}yt=r.lens[r.have-1],ut=3+(3&dt),dt>>>=2,ht-=2}else if(17===gt){for(zt=pt+3;ht<zt;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}ht-=pt,yt=0,ut=3+(7&(dt>>>=pt)),dt>>>=3,ht-=3}else{for(zt=pt+7;ht<zt;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}ht-=pt,yt=0,ut=11+(127&(dt>>>=pt)),dt>>>=7,ht-=7}if(r.have+ut>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=at
break}for(;ut--;)r.lens[r.have++]=yt}}if(r.mode===at)break
if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=at
break}if(r.lenbits=9,xt={bits:r.lenbits},kt=p(g,r.lens,0,r.nlen,r.lencode,0,r.work,xt),r.lenbits=xt.bits,kt){t.msg="invalid literal/lengths set",r.mode=at
break}if(r.distbits=6,r.distcode=r.distdyn,xt={bits:r.distbits},kt=p(b,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,xt),r.distbits=xt.bits,kt){t.msg="invalid distances set",r.mode=at
break}if(r.mode=q,e===y)break t
case q:r.mode=G
case G:if(h>=6&&l>=258){t.next_out=o,t.avail_out=l,t.next_in=s,t.avail_in=h,r.hold=dt,r.bits=ht,_(t,ft),o=t.next_out,a=t.output,l=t.avail_out,s=t.next_in,i=t.input,h=t.avail_in,dt=r.hold,ht=r.bits,r.mode===P&&(r.back=-1)
break}for(r.back=0;mt=(Tt=r.lencode[dt&(1<<r.lenbits)-1])>>>16&255,gt=65535&Tt,!((pt=Tt>>>24)<=ht);){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(mt&&0==(240&mt)){for(bt=pt,wt=mt,vt=gt;mt=(Tt=r.lencode[vt+((dt&(1<<bt+wt)-1)>>bt)])>>>16&255,gt=65535&Tt,!(bt+(pt=Tt>>>24)<=ht);){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}dt>>>=bt,ht-=bt,r.back+=bt}if(dt>>>=pt,ht-=pt,r.back+=pt,r.length=gt,0===mt){r.mode=et
break}if(32&mt){r.back=-1,r.mode=P
break}if(64&mt){t.msg="invalid literal/length code",r.mode=at
break}r.extra=15&mt,r.mode=J
case J:if(r.extra){for(zt=r.extra;ht<zt;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}r.length+=dt&(1<<r.extra)-1,dt>>>=r.extra,ht-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=$
case $:for(;mt=(Tt=r.distcode[dt&(1<<r.distbits)-1])>>>16&255,gt=65535&Tt,!((pt=Tt>>>24)<=ht);){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(0==(240&mt)){for(bt=pt,wt=mt,vt=gt;mt=(Tt=r.distcode[vt+((dt&(1<<bt+wt)-1)>>bt)])>>>16&255,gt=65535&Tt,!(bt+(pt=Tt>>>24)<=ht);){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}dt>>>=bt,ht-=bt,r.back+=bt}if(dt>>>=pt,ht-=pt,r.back+=pt,64&mt){t.msg="invalid distance code",r.mode=at
break}r.offset=gt,r.extra=15&mt,r.mode=Q
case Q:if(r.extra){for(zt=r.extra;ht<zt;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}r.offset+=dt&(1<<r.extra)-1,dt>>>=r.extra,ht-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=at
break}r.mode=tt
case tt:if(0===l)break t
if(ut=ft-l,r.offset>ut){if((ut=r.offset-ut)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=at
break}ut>r.wnext?(ut-=r.wnext,ct=r.wsize-ut):ct=r.wnext-ut,ut>r.length&&(ut=r.length),_t=r.window}else _t=a,ct=o-r.offset,ut=r.length
ut>l&&(ut=l),l-=ut,r.length-=ut
do{a[o++]=_t[ct++]}while(--ut)
0===r.length&&(r.mode=G)
break
case et:if(0===l)break t
a[o++]=r.length,l--,r.mode=G
break
case rt:if(r.wrap){for(;ht<32;){if(0===h)break t
h--,dt|=i[s++]<<ht,ht+=8}if(ft-=l,t.total_out+=ft,r.total+=ft,ft&&(t.adler=r.check=r.flags?c(r.check,a,ft,o-ft):u(r.check,a,ft,o-ft)),ft=l,(r.flags?dt:n(dt))!==r.check){t.msg="incorrect data check",r.mode=at
break}dt=0,ht=0}r.mode=nt
case nt:if(r.wrap&&r.flags){for(;ht<32;){if(0===h)break t
h--,dt+=i[s++]<<ht,ht+=8}if(dt!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=at
break}dt=0,ht=0}r.mode=it
case it:kt=x
break t
case at:kt=A
break t
case st:return E
case ot:default:return C}return t.next_out=o,t.avail_out=l,t.next_in=s,t.avail_in=h,r.hold=dt,r.bits=ht,(r.wsize||ft!==t.avail_out&&r.mode<at&&(r.mode<rt||e!==w))&&(Ct=t,At=t.output,Et=t.next_out,St=ft-t.avail_out,null===(It=Ct.state).window&&(It.wsize=1<<It.wbits,It.wnext=0,It.whave=0,It.window=new f.Buf8(It.wsize)),St>=It.wsize?(f.arraySet(It.window,At,Et-It.wsize,It.wsize,0),It.wnext=0,It.whave=It.wsize):((Bt=It.wsize-It.wnext)>St&&(Bt=St),f.arraySet(It.window,At,Et-St,Bt,It.wnext),(St-=Bt)?(f.arraySet(It.window,At,Et-St,St,0),It.wnext=St,It.whave=It.wsize):(It.wnext+=Bt,It.wnext===It.wsize&&(It.wnext=0),It.whave<It.wsize&&(It.whave+=Bt))),0)?(r.mode=st,E):(lt-=t.avail_in,ft-=t.avail_out,t.total_in+=lt,t.total_out+=ft,r.total+=ft,r.wrap&&ft&&(t.adler=r.check=r.flags?c(r.check,a,ft,t.next_out-ft):u(r.check,a,ft,t.next_out-ft)),t.data_type=r.bits+(r.last?64:0)+(r.mode===P?128:0)+(r.mode===q||r.mode===X?256:0),(0===lt&&0===ft||e===w)&&kt===k&&(kt=S),kt)},r.inflateEnd=function(t){if(!t||!t.state)return C
var e=t.state
return e.window&&(e.window=null),t.state=null,k},r.inflateGetHeader=function(t,e){var r
return t&&t.state?0==(2&(r=t.state).wrap)?C:(r.head=e,e.done=!1,k):C},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(t,e,r){"use strict"
var n=t("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]
e.exports=function(t,e,r,d,h,l,f,u){var c,_,p,m,g,b,w,v,y,k=u.bits,x=0,z=0,C=0,A=0,E=0,S=0,B=0,I=0,T=0,R=0,O=null,L=0,D=new n.Buf16(16),N=new n.Buf16(16),U=null,F=0
for(x=0;x<=15;x++)D[x]=0
for(z=0;z<d;z++)D[e[r+z]]++
for(E=k,A=15;A>=1&&0===D[A];A--);if(E>A&&(E=A),0===A)return h[l++]=20971520,h[l++]=20971520,u.bits=1,0
for(C=1;C<A&&0===D[C];C++);for(E<C&&(E=C),I=1,x=1;x<=15;x++)if(I<<=1,(I-=D[x])<0)return-1
if(I>0&&(0===t||1!==A))return-1
for(N[1]=0,x=1;x<15;x++)N[x+1]=N[x]+D[x]
for(z=0;z<d;z++)0!==e[r+z]&&(f[N[e[r+z]]++]=z)
if(0===t?(O=U=f,b=19):1===t?(O=i,L-=257,U=a,F-=257,b=256):(O=s,U=o,b=-1),R=0,z=0,x=C,g=l,S=E,B=0,p=-1,m=(T=1<<E)-1,1===t&&T>852||2===t&&T>592)return 1
for(;;){0,w=x-B,f[z]<b?(v=0,y=f[z]):f[z]>b?(v=U[F+f[z]],y=O[L+f[z]]):(v=96,y=0),c=1<<x-B,C=_=1<<S
do{h[g+(R>>B)+(_-=c)]=w<<24|v<<16|y|0}while(0!==_)
for(c=1<<x-1;R&c;)c>>=1
if(0!==c?(R&=c-1,R+=c):R=0,z++,0==--D[x]){if(x===A)break
x=e[r+f[z]]}if(x>E&&(R&m)!==p){for(0===B&&(B=E),g+=C,I=1<<(S=x-B);S+B<A&&!((I-=D[S+B])<=0);)S++,I<<=1
if(T+=1<<S,1===t&&T>852||2===t&&T>592)return 1
h[p=R&m]=E<<24|S<<16|g-l|0}}return 0!==R&&(h[g+R]=x-B<<24|64<<16|0),u.bits=E,0}},{"../utils/common":27}],37:[function(t,e,r){"use strict"
e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(t,e,r){"use strict"
function n(t){for(var e=t.length;--e>=0;)t[e]=0}function i(t){return t<256?V[t]:V[256+(t>>>7)]}function a(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function s(t,e,r){t.bi_valid>L-r?(t.bi_buf|=e<<t.bi_valid&65535,a(t,t.bi_buf),t.bi_buf=e>>L-t.bi_valid,t.bi_valid+=r-L):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function o(t,e,r){s(t,r[2*e],r[2*e+1])}function d(t,e){var r=0
do{r|=1&t,t>>>=1,r<<=1}while(--e>0)
return r>>>1}function h(t,e,r){var n,i,a=new Array(O+1),s=0
for(n=1;n<=O;n++)a[n]=s=s+r[n-1]<<1
for(i=0;i<=e;i++){var o=t[2*i+1]
0!==o&&(t[2*i]=d(a[o]++,o))}}function l(t){var e
for(e=0;e<B;e++)t.dyn_ltree[2*e]=0
for(e=0;e<I;e++)t.dyn_dtree[2*e]=0
for(e=0;e<T;e++)t.bl_tree[2*e]=0
t.dyn_ltree[2*N]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function f(t){t.bi_valid>8?a(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function u(t,e,r,n){var i=2*e,a=2*r
return t[i]<t[a]||t[i]===t[a]&&n[e]<=n[r]}function c(t,e,r){for(var n=t.heap[r],i=r<<1;i<=t.heap_len&&(i<t.heap_len&&u(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!u(e,n,t.heap[i],t.depth));)t.heap[r]=t.heap[i],r=i,i<<=1
t.heap[r]=n}function _(t,e,r){var n,a,d,h,l=0
if(0!==t.last_lit)do{n=t.pending_buf[t.d_buf+2*l]<<8|t.pending_buf[t.d_buf+2*l+1],a=t.pending_buf[t.l_buf+l],l++,0===n?o(t,a,e):(o(t,(d=Y[a])+S+1,e),0!==(h=M[d])&&s(t,a-=W[d],h),o(t,d=i(--n),r),0!==(h=P[d])&&s(t,n-=q[d],h))}while(l<t.last_lit)
o(t,N,e)}function p(t,e){var r,n,i,a=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,d=e.stat_desc.elems,l=-1
for(t.heap_len=0,t.heap_max=R,r=0;r<d;r++)0!==a[2*r]?(t.heap[++t.heap_len]=l=r,t.depth[r]=0):a[2*r+1]=0
for(;t.heap_len<2;)a[2*(i=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[i]=0,t.opt_len--,o&&(t.static_len-=s[2*i+1])
for(e.max_code=l,r=t.heap_len>>1;r>=1;r--)c(t,a,r)
i=d
do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],c(t,a,1),n=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=n,a[2*i]=a[2*r]+a[2*n],t.depth[i]=(t.depth[r]>=t.depth[n]?t.depth[r]:t.depth[n])+1,a[2*r+1]=a[2*n+1]=i,t.heap[1]=i++,c(t,a,1)}while(t.heap_len>=2)
t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,n,i,a,s,o,d=e.dyn_tree,h=e.max_code,l=e.stat_desc.static_tree,f=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,_=e.stat_desc.max_length,p=0
for(a=0;a<=O;a++)t.bl_count[a]=0
for(d[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<R;r++)(a=d[2*d[2*(n=t.heap[r])+1]+1]+1)>_&&(a=_,p++),d[2*n+1]=a,n>h||(t.bl_count[a]++,s=0,n>=c&&(s=u[n-c]),o=d[2*n],t.opt_len+=o*(a+s),f&&(t.static_len+=o*(l[2*n+1]+s)))
if(0!==p){do{for(a=_-1;0===t.bl_count[a];)a--
t.bl_count[a]--,t.bl_count[a+1]+=2,t.bl_count[_]--,p-=2}while(p>0)
for(a=_;0!==a;a--)for(n=t.bl_count[a];0!==n;)(i=t.heap[--r])>h||(d[2*i+1]!==a&&(t.opt_len+=(a-d[2*i+1])*d[2*i],d[2*i+1]=a),n--)}}(t,e),h(a,l,t.bl_count)}function m(t,e,r){var n,i,a=-1,s=e[1],o=0,d=7,h=4
for(0===s&&(d=138,h=3),e[2*(r+1)+1]=65535,n=0;n<=r;n++)i=s,s=e[2*(n+1)+1],++o<d&&i===s||(o<h?t.bl_tree[2*i]+=o:0!==i?(i!==a&&t.bl_tree[2*i]++,t.bl_tree[2*U]++):o<=10?t.bl_tree[2*F]++:t.bl_tree[2*Z]++,o=0,a=i,0===s?(d=138,h=3):i===s?(d=6,h=3):(d=7,h=4))}function g(t,e,r){var n,i,a=-1,d=e[1],h=0,l=7,f=4
for(0===d&&(l=138,f=3),n=0;n<=r;n++)if(i=d,d=e[2*(n+1)+1],!(++h<l&&i===d)){if(h<f)do{o(t,i,t.bl_tree)}while(0!=--h)
else 0!==i?(i!==a&&(o(t,i,t.bl_tree),h--),o(t,U,t.bl_tree),s(t,h-3,2)):h<=10?(o(t,F,t.bl_tree),s(t,h-3,3)):(o(t,Z,t.bl_tree),s(t,h-11,7))
h=0,a=i,0===d?(l=138,f=3):i===d?(l=6,f=3):(l=7,f=4)}}function b(t,e,r,n){var i,o,d,h
s(t,(z<<1)+(n?1:0),3),o=e,d=r,h=!0,f(i=t),h&&(a(i,d),a(i,~d)),w.arraySet(i.pending_buf,i.window,o,d,i.pending),i.pending+=d}var w=t("../utils/common"),v=4,y=0,k=1,x=2,z=0,C=1,A=2,E=29,S=256,B=S+1+E,I=30,T=19,R=2*B+1,O=15,L=16,D=7,N=256,U=16,F=17,Z=18,M=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],P=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],j=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(B+2))
n(X)
var K=new Array(2*I)
n(K)
var V=new Array(512)
n(V)
var Y=new Array(256)
n(Y)
var W=new Array(E)
n(W)
var q=new Array(I)
n(q)
var G,J,$,Q=function(t,e,r,n,i){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=t&&t.length},tt=function(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e},et=!1
r._tr_init=function(t){et||(function(){var t,e,r,n,i,a=new Array(O+1)
for(r=0,n=0;n<E-1;n++)for(W[n]=r,t=0;t<1<<M[n];t++)Y[r++]=n
for(Y[r-1]=n,i=0,n=0;n<16;n++)for(q[n]=i,t=0;t<1<<P[n];t++)V[i++]=n
for(i>>=7;n<I;n++)for(q[n]=i<<7,t=0;t<1<<P[n]-7;t++)V[256+i++]=n
for(e=0;e<=O;e++)a[e]=0
for(t=0;t<=143;)X[2*t+1]=8,t++,a[8]++
for(;t<=255;)X[2*t+1]=9,t++,a[9]++
for(;t<=279;)X[2*t+1]=7,t++,a[7]++
for(;t<=287;)X[2*t+1]=8,t++,a[8]++
for(h(X,B+1,a),t=0;t<I;t++)K[2*t+1]=5,K[2*t]=d(t,5)
G=new Q(X,M,S+1,B,O),J=new Q(K,P,0,I,O),$=new Q(new Array(0),j,0,T,D)}(),et=!0),t.l_desc=new tt(t.dyn_ltree,G),t.d_desc=new tt(t.dyn_dtree,J),t.bl_desc=new tt(t.bl_tree,$),t.bi_buf=0,t.bi_valid=0,l(t)},r._tr_stored_block=b,r._tr_flush_block=function(t,e,r,n){var i,a,o=0
t.level>0?(t.strm.data_type===x&&(t.strm.data_type=function(t){var e,r=4093624447
for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return y
if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return k
for(e=32;e<S;e++)if(0!==t.dyn_ltree[2*e])return k
return y}(t)),p(t,t.l_desc),p(t,t.d_desc),o=function(t){var e
for(m(t,t.dyn_ltree,t.l_desc.max_code),m(t,t.dyn_dtree,t.d_desc.max_code),p(t,t.bl_desc),e=T-1;e>=3&&0===t.bl_tree[2*H[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(a=t.static_len+3+7>>>3)<=i&&(i=a)):i=a=r+5,r+4<=i&&-1!==e?b(t,e,r,n):t.strategy===v||a===i?(s(t,(C<<1)+(n?1:0),3),_(t,X,K)):(s(t,(A<<1)+(n?1:0),3),function(t,e,r,n){var i
for(s(t,e-257,5),s(t,r-1,5),s(t,n-4,4),i=0;i<n;i++)s(t,t.bl_tree[2*H[i]+1],3)
g(t,t.dyn_ltree,e-1),g(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,o+1),_(t,t.dyn_ltree,t.dyn_dtree)),l(t),n&&f(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(Y[r]+S+1)]++,t.dyn_dtree[2*i(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){var e
s(t,C<<1,3),o(t,N,X),16===(e=t).bi_valid?(a(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}},{"../utils/common":27}],39:[function(t,e,r){"use strict"
e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}]},{},[9])(9)})
