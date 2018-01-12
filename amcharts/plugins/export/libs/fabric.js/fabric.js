var fabric=fabric||{version:"1.7.19"}
"undefined"!=typeof exports&&(exports.fabric=fabric),"undefined"!=typeof document&&"undefined"!=typeof window?(fabric.document=document,fabric.window=window,window.fabric=fabric):(fabric.document=require("jsdom").jsdom(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E")),fabric.document.createWindow?fabric.window=fabric.document.createWindow():fabric.window=fabric.document.parentWindow),fabric.isTouchSupported="ontouchstart"in fabric.window,fabric.isLikelyNode="undefined"!=typeof Buffer&&"undefined"==typeof window,fabric.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id"],fabric.DPI=96,fabric.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)",fabric.fontPaths={},fabric.iMatrix=[1,0,0,1,0,0],fabric.canvasModule="canvas",fabric.perfLimitSizeTotal=2097152,fabric.maxCacheSideLimit=4096,fabric.minCacheSideLimit=256,fabric.charWidthsCache={},fabric.devicePixelRatio=fabric.window.devicePixelRatio||fabric.window.webkitDevicePixelRatio||fabric.window.mozDevicePixelRatio||1,function(){function t(t,e){if(this.__eventListeners[t]){var i=this.__eventListeners[t]
e?i[i.indexOf(e)]=!1:fabric.util.array.fill(i,!1)}}function e(t,e){if(this.__eventListeners||(this.__eventListeners={}),1===arguments.length)for(var i in t)this.on(i,t[i])
else this.__eventListeners[t]||(this.__eventListeners[t]=[]),this.__eventListeners[t].push(e)
return this}function i(e,i){if(this.__eventListeners){if(0===arguments.length)for(e in this.__eventListeners)t.call(this,e)
else if(1===arguments.length&&"object"==typeof arguments[0])for(var r in e)t.call(this,r,e[r])
else t.call(this,e,i)
return this}}function r(t,e){if(this.__eventListeners){var i=this.__eventListeners[t]
if(i){for(var r=0,s=i.length;r<s;r++)i[r]&&i[r].call(this,e||{})
return this.__eventListeners[t]=i.filter(function(t){return!1!==t}),this}}}fabric.Observable={observe:e,stopObserving:i,fire:r,on:e,off:i,trigger:r}}(),fabric.Collection={_objects:[],add:function(){if(this._objects.push.apply(this._objects,arguments),this._onObjectAdded)for(var t=0,e=arguments.length;t<e;t++)this._onObjectAdded(arguments[t])
return this.renderOnAddRemove&&this.renderAll(),this},insertAt:function(t,e,i){var r=this.getObjects()
return i?r[e]=t:r.splice(e,0,t),this._onObjectAdded&&this._onObjectAdded(t),this.renderOnAddRemove&&this.renderAll(),this},remove:function(){for(var t,e=this.getObjects(),i=!1,r=0,s=arguments.length;r<s;r++)-1!==(t=e.indexOf(arguments[r]))&&(i=!0,e.splice(t,1),this._onObjectRemoved&&this._onObjectRemoved(arguments[r]))
return this.renderOnAddRemove&&i&&this.renderAll(),this},forEachObject:function(t,e){for(var i=this.getObjects(),r=0,s=i.length;r<s;r++)t.call(e,i[r],r,i)
return this},getObjects:function(t){return void 0===t?this._objects:this._objects.filter(function(e){return e.type===t})},item:function(t){return this.getObjects()[t]},isEmpty:function(){return 0===this.getObjects().length},size:function(){return this.getObjects().length},contains:function(t){return this.getObjects().indexOf(t)>-1},complexity:function(){return this.getObjects().reduce(function(t,e){return t+=e.complexity?e.complexity():0},0)}},fabric.CommonMethods={_setOptions:function(t){for(var e in t)this.set(e,t[e])},_initGradient:function(t,e){!t||!t.colorStops||t instanceof fabric.Gradient||this.set(e,new fabric.Gradient(t))},_initPattern:function(t,e,i){!t||!t.source||t instanceof fabric.Pattern?i&&i():this.set(e,new fabric.Pattern(t,i))},_initClipping:function(t){if(t.clipTo&&"string"==typeof t.clipTo){var e=fabric.util.getFunctionBody(t.clipTo)
void 0!==e&&(this.clipTo=new Function("ctx",e))}},_setObject:function(t){for(var e in t)this._set(e,t[e])},set:function(t,e){return"object"==typeof t?this._setObject(t):"function"==typeof e&&"clipTo"!==t?this._set(t,e(this.get(t))):this._set(t,e),this},_set:function(t,e){this[t]=e},toggle:function(t){var e=this.get(t)
return"boolean"==typeof e&&this.set(t,!e),this},get:function(t){return this[t]}},function(t){var e=Math.sqrt,i=Math.atan2,r=Math.pow,s=Math.abs,n=Math.PI/180
fabric.util={removeFromArray:function(t,e){var i=t.indexOf(e)
return-1!==i&&t.splice(i,1),t},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},degreesToRadians:function(t){return t*n},radiansToDegrees:function(t){return t/n},rotatePoint:function(t,e,i){t.subtractEquals(e)
var r=fabric.util.rotateVector(t,i)
return new fabric.Point(r.x,r.y).addEquals(e)},rotateVector:function(t,e){var i=Math.sin(e),r=Math.cos(e)
return{x:t.x*r-t.y*i,y:t.x*i+t.y*r}},transformPoint:function(t,e,i){return i?new fabric.Point(e[0]*t.x+e[2]*t.y,e[1]*t.x+e[3]*t.y):new fabric.Point(e[0]*t.x+e[2]*t.y+e[4],e[1]*t.x+e[3]*t.y+e[5])},makeBoundingBoxFromPoints:function(t){var e=[t[0].x,t[1].x,t[2].x,t[3].x],i=fabric.util.array.min(e),r=fabric.util.array.max(e),s=Math.abs(i-r),n=[t[0].y,t[1].y,t[2].y,t[3].y],o=fabric.util.array.min(n),a=fabric.util.array.max(n)
return{left:i,top:o,width:s,height:Math.abs(o-a)}},invertTransform:function(t){var e=1/(t[0]*t[3]-t[1]*t[2]),i=[e*t[3],-e*t[1],-e*t[2],e*t[0]],r=fabric.util.transformPoint({x:t[4],y:t[5]},i,!0)
return i[4]=-r.x,i[5]=-r.y,i},toFixed:function(t,e){return parseFloat(Number(t).toFixed(e))},parseUnit:function(t,e){var i=/\D{0,2}$/.exec(t),r=parseFloat(t)
switch(e||(e=fabric.Text.DEFAULT_SVG_FONT_SIZE),i[0]){case"mm":return r*fabric.DPI/25.4
case"cm":return r*fabric.DPI/2.54
case"in":return r*fabric.DPI
case"pt":return r*fabric.DPI/72
case"pc":return r*fabric.DPI/72*12
case"em":return r*e
default:return r}},falseFunction:function(){return!1},getKlass:function(t,e){return t=fabric.util.string.camelize(t.charAt(0).toUpperCase()+t.slice(1)),fabric.util.resolveNamespace(e)[t]},resolveNamespace:function(e){if(!e)return fabric
var i,r=e.split("."),s=r.length,n=t||fabric.window
for(i=0;i<s;++i)n=n[r[i]]
return n},loadImage:function(t,e,i,r){if(t){var s=fabric.util.createImage()
s.onload=function(){e&&e.call(i,s),s=s.onload=s.onerror=null},s.onerror=function(){fabric.log("Error loading "+s.src),e&&e.call(i,null,!0),s=s.onload=s.onerror=null},0!==t.indexOf("data")&&r&&(s.crossOrigin=r),s.src=t}else e&&e.call(i,t)},enlivenObjects:function(t,e,i,r){function s(){++o===a&&e&&e(n)}var n=[],o=0,a=(t=t||[]).length
a?t.forEach(function(t,e){t&&t.type?fabric.util.getKlass(t.type,i).fromObject(t,function(i,o){o||(n[e]=i),r&&r(t,i,o),s()},!0):s()}):e&&e(n)},enlivenPatterns:function(t,e){function i(){++s===n&&e&&e(r)}var r=[],s=0,n=(t=t||[]).length
n?t.forEach(function(t,e){t&&t.source?new fabric.Pattern(t,function(t){r[e]=t,i()}):(r[e]=t,i())}):e&&e(r)},groupSVGElements:function(t,e,i){var r
return r=new fabric.PathGroup(t,e),void 0!==i&&(r.sourcePath=i),r},populateWithProperties:function(t,e,i){if(i&&"[object Array]"===Object.prototype.toString.call(i))for(var r=0,s=i.length;r<s;r++)i[r]in t&&(e[i[r]]=t[i[r]])},drawDashedLine:function(t,r,s,n,o,a){var h=n-r,c=o-s,l=e(h*h+c*c),u=i(c,h),f=a.length,d=0,g=!0
for(t.save(),t.translate(r,s),t.moveTo(0,0),t.rotate(u),r=0;l>r;)(r+=a[d++%f])>l&&(r=l),t[g?"lineTo":"moveTo"](r,0),g=!g
t.restore()},createCanvasElement:function(t){return t||(t=fabric.document.createElement("canvas")),t.getContext||"undefined"==typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(t),t},createImage:function(){return fabric.isLikelyNode?new(require("canvas").Image):fabric.document.createElement("img")},createAccessors:function(t){var e,i,r,s,n,o=t.prototype
for(e=o.stateProperties.length;e--;)s="set"+(r=(i=o.stateProperties[e]).charAt(0).toUpperCase()+i.slice(1)),o[n="get"+r]||(o[n]=new Function('return this.get("'+i+'")')),o[s]||(o[s]=new Function("value",'return this.set("'+i+'", value)'))},clipContext:function(t,e){e.save(),e.beginPath(),t.clipTo(e),e.clip()},multiplyTransformMatrices:function(t,e,i){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],i?0:t[0]*e[4]+t[2]*e[5]+t[4],i?0:t[1]*e[4]+t[3]*e[5]+t[5]]},qrDecompose:function(t){var s=i(t[1],t[0]),o=r(t[0],2)+r(t[1],2),a=e(o),h=(t[0]*t[3]-t[2]*t[1])/a,c=i(t[0]*t[2]+t[1]*t[3],o)
return{angle:s/n,scaleX:a,scaleY:h,skewX:c/n,skewY:0,translateX:t[4],translateY:t[5]}},customTransformMatrix:function(t,e,i){var r=[1,0,s(Math.tan(i*n)),1],o=[s(t),0,0,s(e)]
return fabric.util.multiplyTransformMatrices(o,r,!0)},resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.flipX=!1,t.flipY=!1,t.setAngle(0)},getFunctionBody:function(t){return(String(t).match(/function[^{]*\{([\s\S]*)\}/)||{})[1]},isTransparent:function(t,e,i,r){r>0&&(e>r?e-=r:e=0,i>r?i-=r:i=0)
var s,n=!0,o=t.getImageData(e,i,2*r||1,2*r||1),a=o.data.length
for(s=3;s<a&&!1!==(n=o.data[s]<=0);s+=4);return o=null,n},parsePreserveAspectRatioAttribute:function(t){var e,i="meet",r=t.split(" ")
return r&&r.length&&("meet"!==(i=r.pop())&&"slice"!==i?(e=i,i="meet"):r.length&&(e=r.pop())),{meetOrSlice:i,alignX:"none"!==e?e.slice(1,4):"none",alignY:"none"!==e?e.slice(5,8):"none"}},clearFabricFontCache:function(t){t?fabric.charWidthsCache[t]&&delete fabric.charWidthsCache[t]:fabric.charWidthsCache={}},limitDimsByArea:function(t,e){var i=Math.sqrt(e*t),r=Math.floor(e/i)
return{x:Math.floor(i),y:r}},capValue:function(t,e,i){return Math.max(t,Math.min(e,i))}}}("undefined"!=typeof exports?exports:this),function(){var t={},e={},i={},r=Array.prototype.join
function s(e,i,s,a,h,c,l){var u=r.call(arguments)
if(t[u])return t[u]
var f=Math.PI,d=l*f/180,g=Math.sin(d),p=Math.cos(d),v=0,b=0,m=-p*e*.5-g*i*.5,_=-p*i*.5+g*e*.5,y=(s=Math.abs(s))*s,x=(a=Math.abs(a))*a,C=_*_,S=m*m,w=y*x-y*C-x*S,O=0
if(w<0){var T=Math.sqrt(1-w/(y*x))
s*=T,a*=T}else O=(h===c?-1:1)*Math.sqrt(w/(y*C+x*S))
var j=O*s*_/a,k=-O*a*m/s,M=p*j-g*k+.5*e,D=g*j+p*k+.5*i,A=o(1,0,(m-j)/s,(_-k)/a),P=o((m-j)/s,(_-k)/a,(-m-j)/s,(-_-k)/a)
0===c&&P>0?P-=2*f:1===c&&P<0&&(P+=2*f)
for(var E=Math.ceil(Math.abs(P/f*2)),I=[],L=P/E,F=8/3*Math.sin(L/4)*Math.sin(L/4)/Math.sin(L/2),B=A+L,R=0;R<E;R++)I[R]=n(A,B,p,g,s,a,M,D,F,v,b),v=I[R][4],b=I[R][5],A=B,B+=L
return t[u]=I,I}function n(t,i,s,n,o,a,h,c,l,u,f){var d=r.call(arguments)
if(e[d])return e[d]
var g=Math.cos(t),p=Math.sin(t),v=Math.cos(i),b=Math.sin(i),m=s*o*v-n*a*b+h,_=n*o*v+s*a*b+c,y=u+l*(-s*o*p-n*a*g),x=f+l*(-n*o*p+s*a*g),C=m+l*(s*o*b+n*a*v),S=_+l*(n*o*b-s*a*v)
return e[d]=[y,x,C,S,m,_],e[d]}function o(t,e,i,r){var s=Math.atan2(e,t),n=Math.atan2(r,i)
return n>=s?n-s:2*Math.PI-(s-n)}function a(t,e,s,n,o,a,h,c){var l=r.call(arguments)
if(i[l])return i[l]
var u,f,d,g,p,v,b,m,_=Math.sqrt,y=Math.min,x=Math.max,C=Math.abs,S=[],w=[[],[]]
f=6*t-12*s+6*o,u=-3*t+9*s-9*o+3*h,d=3*s-3*t
for(var O=0;O<2;++O)if(O>0&&(f=6*e-12*n+6*a,u=-3*e+9*n-9*a+3*c,d=3*n-3*e),C(u)<1e-12){if(C(f)<1e-12)continue
0<(g=-d/f)&&g<1&&S.push(g)}else(b=f*f-4*d*u)<0||(0<(p=(-f+(m=_(b)))/(2*u))&&p<1&&S.push(p),0<(v=(-f-m)/(2*u))&&v<1&&S.push(v))
for(var T,j,k,M=S.length,D=M;M--;)T=(k=1-(g=S[M]))*k*k*t+3*k*k*g*s+3*k*g*g*o+g*g*g*h,w[0][M]=T,j=k*k*k*e+3*k*k*g*n+3*k*g*g*a+g*g*g*c,w[1][M]=j
w[0][D]=t,w[1][D]=e,w[0][D+1]=h,w[1][D+1]=c
var A=[{x:y.apply(null,w[0]),y:y.apply(null,w[1])},{x:x.apply(null,w[0]),y:x.apply(null,w[1])}]
return i[l]=A,A}fabric.util.drawArc=function(t,e,i,r){for(var n=r[0],o=r[1],a=r[2],h=r[3],c=r[4],l=[[],[],[],[]],u=s(r[5]-e,r[6]-i,n,o,h,c,a),f=0,d=u.length;f<d;f++)l[f][0]=u[f][0]+e,l[f][1]=u[f][1]+i,l[f][2]=u[f][2]+e,l[f][3]=u[f][3]+i,l[f][4]=u[f][4]+e,l[f][5]=u[f][5]+i,t.bezierCurveTo.apply(t,l[f])},fabric.util.getBoundsOfArc=function(t,e,i,r,n,o,h,c,l){for(var u,f=0,d=0,g=[],p=s(c-t,l-e,i,r,o,h,n),v=0,b=p.length;v<b;v++)u=a(f,d,p[v][0],p[v][1],p[v][2],p[v][3],p[v][4],p[v][5]),g.push({x:u[0].x+t,y:u[0].y+e}),g.push({x:u[1].x+t,y:u[1].y+e}),f=p[v][4],d=p[v][5]
return g},fabric.util.getBoundsOfCurve=a}(),function(){var t=Array.prototype.slice
function e(t,e,i){if(t&&0!==t.length){var r=t.length-1,s=e?t[r][e]:t[r]
if(e)for(;r--;)i(t[r][e],s)&&(s=t[r][e])
else for(;r--;)i(t[r],s)&&(s=t[r])
return s}}Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(void 0===this||null===this)throw new TypeError
var e=Object(this),i=e.length>>>0
if(0===i)return-1
var r=0
if(arguments.length>0&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==Number.POSITIVE_INFINITY&&r!==Number.NEGATIVE_INFINITY&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=i)return-1
for(var s=r>=0?r:Math.max(i-Math.abs(r),0);s<i;s++)if(s in e&&e[s]===t)return s
return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)i in this&&t.call(e,this[i],i,this)}),Array.prototype.map||(Array.prototype.map=function(t,e){for(var i=[],r=0,s=this.length>>>0;r<s;r++)r in this&&(i[r]=t.call(e,this[r],r,this))
return i}),Array.prototype.every||(Array.prototype.every=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)if(i in this&&!t.call(e,this[i],i,this))return!1
return!0}),Array.prototype.some||(Array.prototype.some=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)if(i in this&&t.call(e,this[i],i,this))return!0
return!1}),Array.prototype.filter||(Array.prototype.filter=function(t,e){for(var i,r=[],s=0,n=this.length>>>0;s<n;s++)s in this&&(i=this[s],t.call(e,i,s,this)&&r.push(i))
return r}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e,i=this.length>>>0,r=0
if(arguments.length>1)e=arguments[1]
else for(;;){if(r in this){e=this[r++]
break}if(++r>=i)throw new TypeError}for(;r<i;r++)r in this&&(e=t.call(null,e,this[r],r,this))
return e}),fabric.util.array={fill:function(t,e){for(var i=t.length;i--;)t[i]=e
return t},invoke:function(e,i){for(var r=t.call(arguments,2),s=[],n=0,o=e.length;n<o;n++)s[n]=r.length?e[n][i].apply(e[n],r):e[n][i].call(e[n])
return s},min:function(t,i){return e(t,i,function(t,e){return t<e})},max:function(t,i){return e(t,i,function(t,e){return t>=e})}}}(),function(){function t(e,i,r){if(r)if(!fabric.isLikelyNode&&i instanceof Element)e=i
else if(i instanceof Array){e=[]
for(var s=0,n=i.length;s<n;s++)e[s]=t({},i[s],r)}else if(i&&"object"==typeof i)for(var o in i)i.hasOwnProperty(o)&&(e[o]=t({},i[o],r))
else e=i
else for(var o in i)e[o]=i[o]
return e}fabric.util.object={extend:t,clone:function(e,i){return t({},e,i)}}}(),function(){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")}),fabric.util.string={camelize:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},capitalize:function(t,e){return t.charAt(0).toUpperCase()+(e?t.slice(1):t.slice(1).toLowerCase())},escapeXml:function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}}(),function(){var t=Array.prototype.slice,e=Function.prototype.apply,i=function(){}
Function.prototype.bind||(Function.prototype.bind=function(r){var s,n=this,o=t.call(arguments,1)
return s=o.length?function(){return e.call(n,this instanceof i?this:r,o.concat(t.call(arguments)))}:function(){return e.call(n,this instanceof i?this:r,arguments)},i.prototype=this.prototype,s.prototype=new i,s})}(),function(){var t=Array.prototype.slice,e=function(){},i=function(){for(var t in{toString:1})if("toString"===t)return!1
return!0}(),r=function(t,e,r){for(var s in e)s in t.prototype&&"function"==typeof t.prototype[s]&&(e[s]+"").indexOf("callSuper")>-1?t.prototype[s]=function(t){return function(){var i=this.constructor.superclass
this.constructor.superclass=r
var s=e[t].apply(this,arguments)
if(this.constructor.superclass=i,"initialize"!==t)return s}}(s):t.prototype[s]=e[s],i&&(e.toString!==Object.prototype.toString&&(t.prototype.toString=e.toString),e.valueOf!==Object.prototype.valueOf&&(t.prototype.valueOf=e.valueOf))}
function s(){}function n(e){for(var i=null,r=this;r.constructor.superclass;){var s=r.constructor.superclass.prototype[e]
if(r[e]!==s){i=s
break}r=r.constructor.superclass.prototype}return i?arguments.length>1?i.apply(this,t.call(arguments,1)):i.call(this):console.log("tried to callSuper "+e+", method not found in prototype chain",this)}fabric.util.createClass=function(){var i=null,o=t.call(arguments,0)
function a(){this.initialize.apply(this,arguments)}"function"==typeof o[0]&&(i=o.shift()),a.superclass=i,a.subclasses=[],i&&(s.prototype=i.prototype,a.prototype=new s,i.subclasses.push(a))
for(var h=0,c=o.length;h<c;h++)r(a,o[h],i)
return a.prototype.initialize||(a.prototype.initialize=e),a.prototype.constructor=a,a.prototype.callSuper=n,a}}(),function(){var t="unknown"
function e(t){var e,i,r=Array.prototype.slice.call(arguments,1),s=r.length
for(i=0;i<s;i++)if(e=typeof t[r[i]],!/^(?:function|object|unknown)$/.test(e))return!1
return!0}var i,r,s,n,o=(s=0,function(t){return t.__uniqueID||(t.__uniqueID="uniqueID__"+s++)})
function a(t,e){return{handler:e,wrappedHandler:(r=t,s=e,function(t){s.call(i(r),t||fabric.window.event)})}
var r,s}n={},i=function(t){return n[t]},r=function(t,e){n[t]=e}
var h,c,l=e(fabric.document.documentElement,"addEventListener","removeEventListener")&&e(fabric.window,"addEventListener","removeEventListener"),u=e(fabric.document.documentElement,"attachEvent","detachEvent")&&e(fabric.window,"attachEvent","detachEvent"),f={},d={}
l?(h=function(t,e,i,r){t&&t.addEventListener(e,i,!u&&r)},c=function(t,e,i,r){t&&t.removeEventListener(e,i,!u&&r)}):u?(h=function(t,e,i){if(t){var s=o(t)
r(s,t),f[s]||(f[s]={}),f[s][e]||(f[s][e]=[])
var n=a(s,i)
f[s][e].push(n),t.attachEvent("on"+e,n.wrappedHandler)}},c=function(t,e,i){if(t){var r,s=o(t)
if(f[s]&&f[s][e])for(var n=0,a=f[s][e].length;n<a;n++)(r=f[s][e][n])&&r.handler===i&&(t.detachEvent("on"+e,r.wrappedHandler),f[s][e][n]=null)}}):(h=function(t,e,i){if(t){var r,s,n=o(t)
if(d[n]||(d[n]={}),!d[n][e]){d[n][e]=[]
var a=t["on"+e]
a&&d[n][e].push(a),t["on"+e]=(r=n,s=e,function(t){if(d[r]&&d[r][s])for(var e=d[r][s],i=0,n=e.length;i<n;i++)e[i].call(this,t||fabric.window.event)})}d[n][e].push(i)}},c=function(t,e,i){if(t){var r=o(t)
if(d[r]&&d[r][e])for(var s=d[r][e],n=0,a=s.length;n<a;n++)s[n]===i&&s.splice(n,1)}}),fabric.util.addListener=h,fabric.util.removeListener=c
var g=function(e){return typeof e.clientX!==t?e.clientX:0},p=function(e){return typeof e.clientY!==t?e.clientY:0}
function v(t,e,i){var r="touchend"===t.type?"changedTouches":"touches"
return t[r]&&t[r][0]?t[r][0][e]-(t[r][0][e]-t[r][0][i])||t[i]:t[i]}fabric.isTouchSupported&&(g=function(t){return v(t,"pageX","clientX")},p=function(t){return v(t,"pageY","clientY")}),fabric.util.getPointer=function(e){e||(e=fabric.window.event)
var i=e.target||(typeof e.srcElement!==t?e.srcElement:null),r=fabric.util.getScrollLeftTop(i)
return{x:g(e)+r.left,y:p(e)+r.top}},fabric.util.object.extend(fabric.util,fabric.Observable)}(),function(){var t=fabric.document.createElement("div"),e="string"==typeof t.style.opacity,i="string"==typeof t.style.filter,r=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,s=function(t){return t}
e?s=function(t,e){return t.style.opacity=e,t}:i&&(s=function(t,e){var i=t.style
return t.currentStyle&&!t.currentStyle.hasLayout&&(i.zoom=1),r.test(i.filter)?(e=e>=.9999?"":"alpha(opacity="+100*e+")",i.filter=i.filter.replace(r,e)):i.filter+=" alpha(opacity="+100*e+")",t}),fabric.util.setStyle=function(t,e){var i=t.style
if(!i)return t
if("string"==typeof e)return t.style.cssText+=";"+e,e.indexOf("opacity")>-1?s(t,e.match(/opacity:\s*(\d?\.?\d*)/)[1]):t
for(var r in e)"opacity"===r?s(t,e[r]):i["float"===r||"cssFloat"===r?void 0===i.styleFloat?"cssFloat":"styleFloat":r]=e[r]
return t}}(),function(){var t=Array.prototype.slice
var e,i,r=function(e){return t.call(e,0)}
try{e=r(fabric.document.childNodes)instanceof Array}catch(t){}function s(t,e){var i=fabric.document.createElement(t)
for(var r in e)"class"===r?i.className=e[r]:"for"===r?i.htmlFor=e[r]:i.setAttribute(r,e[r])
return i}function n(t){for(var e=0,i=0,r=fabric.document.documentElement,s=fabric.document.body||{scrollLeft:0,scrollTop:0};t&&(t.parentNode||t.host)&&((t=t.parentNode||t.host)===fabric.document?(e=s.scrollLeft||r.scrollLeft||0,i=s.scrollTop||r.scrollTop||0):(e+=t.scrollLeft||0,i+=t.scrollTop||0),1!==t.nodeType||"fixed"!==fabric.util.getElementStyle(t,"position")););return{left:e,top:i}}e||(r=function(t){for(var e=new Array(t.length),i=t.length;i--;)e[i]=t[i]
return e}),i=fabric.document.defaultView&&fabric.document.defaultView.getComputedStyle?function(t,e){var i=fabric.document.defaultView.getComputedStyle(t,null)
return i?i[e]:void 0}:function(t,e){var i=t.style[e]
return!i&&t.currentStyle&&(i=t.currentStyle[e]),i},function(){var t=fabric.document.documentElement.style,e="userSelect"in t?"userSelect":"MozUserSelect"in t?"MozUserSelect":"WebkitUserSelect"in t?"WebkitUserSelect":"KhtmlUserSelect"in t?"KhtmlUserSelect":""
fabric.util.makeElementUnselectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=fabric.util.falseFunction),e?t.style[e]="none":"string"==typeof t.unselectable&&(t.unselectable="on"),t},fabric.util.makeElementSelectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=null),e?t.style[e]="":"string"==typeof t.unselectable&&(t.unselectable=""),t}}(),function(){fabric.util.getScript=function(t,e){var i=fabric.document.getElementsByTagName("head")[0],r=fabric.document.createElement("script"),s=!0
r.onload=r.onreadystatechange=function(t){if(s){if("string"==typeof this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)return
s=!1,e(t||fabric.window.event),r=r.onload=r.onreadystatechange=null}},r.src=t,i.appendChild(r)}}(),fabric.util.getById=function(t){return"string"==typeof t?fabric.document.getElementById(t):t},fabric.util.toArray=r,fabric.util.makeElement=s,fabric.util.addClass=function(t,e){t&&-1===(" "+t.className+" ").indexOf(" "+e+" ")&&(t.className+=(t.className?" ":"")+e)},fabric.util.wrapElement=function(t,e,i){return"string"==typeof e&&(e=s(e,i)),t.parentNode&&t.parentNode.replaceChild(e,t),e.appendChild(t),e},fabric.util.getScrollLeftTop=n,fabric.util.getElementOffset=function(t){var e,r,s=t&&t.ownerDocument,o={left:0,top:0},a={left:0,top:0},h={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"}
if(!s)return a
for(var c in h)a[h[c]]+=parseInt(i(t,c),10)||0
return e=s.documentElement,void 0!==t.getBoundingClientRect&&(o=t.getBoundingClientRect()),r=n(t),{left:o.left+r.left-(e.clientLeft||0)+a.left,top:o.top+r.top-(e.clientTop||0)+a.top}},fabric.util.getElementStyle=i}(),function(){var t=function(){for(var t=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new XMLHttpRequest}],e=t.length;e--;)try{if(t[e]())return t[e]}catch(t){}}()
function e(){}fabric.util.request=function(i,r){r||(r={})
var s,n,o=r.method?r.method.toUpperCase():"GET",a=r.onComplete||function(){},h=t(),c=r.body||r.parameters
return h.onreadystatechange=function(){4===h.readyState&&(a(h),h.onreadystatechange=e)},"GET"===o&&(c=null,"string"==typeof r.parameters&&(s=i,n=r.parameters,i=s+(/\?/.test(s)?"&":"?")+n)),h.open(o,i,!0),"POST"!==o&&"PUT"!==o||h.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),h.send(c),h}}(),fabric.log=function(){}
fabric.warn=function(){},"undefined"!=typeof console&&["log","warn"].forEach(function(t){void 0!==console[t]&&"function"==typeof console[t].apply&&(fabric[t]=function(){return console[t].apply(console,arguments)})}),function(){function t(){return!1}var e=fabric.window.requestAnimationFrame||fabric.window.webkitRequestAnimationFrame||fabric.window.mozRequestAnimationFrame||fabric.window.oRequestAnimationFrame||fabric.window.msRequestAnimationFrame||function(t){fabric.window.setTimeout(t,1e3/60)}
function i(){return e.apply(fabric.window,arguments)}fabric.util.animate=function(e){i(function(r){e||(e={})
var s,n=r||+new Date,o=e.duration||500,a=n+o,h=e.onChange||t,c=e.abort||t,l=e.onComplete||t,u=e.easing||function(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e},f="startValue"in e?e.startValue:0,d="endValue"in e?e.endValue:100,g=e.byValue||d-f
e.onStart&&e.onStart(),function t(r){if(c())l(d,1,1)
else{var p=(s=r||+new Date)>a?o:s-n,v=p/o,b=u(p,f,g,o),m=Math.abs((b-f)/g)
h(b,m,v),s>a?e.onComplete&&e.onComplete():i(t)}}(n)})},fabric.util.requestAnimFrame=i}(),function(){fabric.util.animateColor=function(t,e,i,r){var s=new fabric.Color(t).getSource(),n=new fabric.Color(e).getSource()
r=r||{},fabric.util.animate(fabric.util.object.extend(r,{duration:i||500,startValue:s,endValue:n,byValue:n,easing:function(t,e,i,s){var n,o,a,h,c=r.colorEasing?r.colorEasing(t,s):1-Math.cos(t/s*(Math.PI/2))
return n=e,o=i,a=c,h="rgba("+parseInt(n[0]+a*(o[0]-n[0]),10)+","+parseInt(n[1]+a*(o[1]-n[1]),10)+","+parseInt(n[2]+a*(o[2]-n[2]),10),h+=","+(n&&o?parseFloat(n[3]+a*(o[3]-n[3])):1),h+=")"}}))}}(),function(){function t(t,e,i,r){return t<Math.abs(e)?(t=e,r=i/4):r=0===e&&0===t?i/(2*Math.PI)*Math.asin(1):i/(2*Math.PI)*Math.asin(e/t),{a:t,c:e,p:i,s:r}}function e(t,e,i){return t.a*Math.pow(2,10*(e-=1))*Math.sin((e*i-t.s)*(2*Math.PI)/t.p)}function i(t,e,i,s){return i-r(s-t,0,i,s)+e}function r(t,e,i,r){return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e}fabric.util.ease={easeInQuad:function(t,e,i,r){return i*(t/=r)*t+e},easeOutQuad:function(t,e,i,r){return-i*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,r){return i*(t/=r)*t*t+e},easeOutCubic:function(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,r){return i*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,i,r){return-i*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,r){return i*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,i,r){return i*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,i,r){return i*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,i,r){return-i/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,i,r){return 0===t?e:i*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,i,r){return t===r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,i,r){return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,i,r){return-i*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,i,r){return i*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,i,r){return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(i,r,s,n){var o=0
return 0===i?r:1==(i/=n)?r+s:(o||(o=.3*n),-e(t(s,s,o,1.70158),i,n)+r)},easeOutElastic:function(e,i,r,s){var n=0,o=r
if(0===e)return i
if(1==(e/=s))return i+r
n||(n=.3*s)
var a=t(o,r,n,1.70158)
return a.a*Math.pow(2,-10*e)*Math.sin((e*s-a.s)*(2*Math.PI)/a.p)+a.c+i},easeInOutElastic:function(i,r,s,n){var o=0,a=s
if(0===i)return r
if(2==(i/=n/2))return r+s
o||(o=n*(.3*1.5))
var h=t(a,s,o,1.70158)
return i<1?-.5*e(h,i,n)+r:h.a*Math.pow(2,-10*(i-=1))*Math.sin((i*n-h.s)*(2*Math.PI)/h.p)*.5+h.c+r},easeInBack:function(t,e,i,r,s){return void 0===s&&(s=1.70158),i*(t/=r)*t*((s+1)*t-s)+e},easeOutBack:function(t,e,i,r,s){return void 0===s&&(s=1.70158),i*((t=t/r-1)*t*((s+1)*t+s)+1)+e},easeInOutBack:function(t,e,i,r,s){return void 0===s&&(s=1.70158),(t/=r/2)<1?i/2*(t*t*((1+(s*=1.525))*t-s))+e:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},easeInBounce:i,easeOutBounce:r,easeInOutBounce:function(t,e,s,n){return t<n/2?.5*i(2*t,0,s,n)+e:.5*r(2*t-n,0,s,n)+.5*s+e}}}(),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.object.clone,s=e.util.toFixed,n=e.util.parseUnit,o=e.util.multiplyTransformMatrices,a=/^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/i,h=/^(symbol|image|marker|pattern|view|svg)$/i,c=/^(?:pattern|defs|symbol|metadata|clipPath|mask)$/i,l=/^(symbol|g|a|svg)$/i,u={cx:"left",x:"left",r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","stroke-dasharray":"strokeDashArray","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"originX",opacity:"opacity"},f={stroke:"strokeOpacity",fill:"fillOpacity"}
function d(t,e){for(var i,r,s=[],n=0;n<e.length;n++)i=e[n],r=t.getElementsByTagName(i),s=s.concat(Array.prototype.slice.call(r))
return s}function g(t,e){var i,r=!0
return(i=p(t,e.pop()))&&e.length&&(r=function(t,e){var i,r=!0
for(;t.parentNode&&1===t.parentNode.nodeType&&e.length;)r&&(i=e.pop()),t=t.parentNode,r=p(t,i)
return 0===e.length}(t,e)),i&&r&&0===e.length}function p(t,e){var i,r=t.nodeName,s=t.getAttribute("class"),n=t.getAttribute("id")
if(i=new RegExp("^"+r,"i"),e=e.replace(i,""),n&&e.length&&(i=new RegExp("#"+n+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"")),s&&e.length)for(var o=(s=s.split(" ")).length;o--;)i=new RegExp("\\."+s[o]+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"")
return 0===e.length}function v(t,e){var i
if(t.getElementById&&(i=t.getElementById(e)),i)return i
var r,s,n=t.getElementsByTagName("*")
for(s=0;s<n.length;s++)if(e===(r=n[s]).getAttribute("id"))return r}e.cssRules={},e.gradientDefs={},e.parseTransformAttribute=function(){function t(t,i,r){t[r]=Math.tan(e.util.degreesToRadians(i[0]))}var i=[1,0,0,1,0,0],r=e.reNum,s="(?:\\s+,?\\s*|,\\s*)",n="(?:"+("(?:(matrix)\\s*\\(\\s*("+r+")"+s+"("+r+")"+s+"("+r+")"+s+"("+r+")"+s+"("+r+")"+s+"("+r+")\\s*\\))")+"|"+("(?:(translate)\\s*\\(\\s*("+r+")(?:"+s+"("+r+"))?\\s*\\))")+"|"+("(?:(scale)\\s*\\(\\s*("+r+")(?:"+s+"("+r+"))?\\s*\\))")+"|"+("(?:(rotate)\\s*\\(\\s*("+r+")(?:"+s+"("+r+")"+s+"("+r+"))?\\s*\\))")+"|"+("(?:(skewX)\\s*\\(\\s*("+r+")\\s*\\))")+"|"+("(?:(skewY)\\s*\\(\\s*("+r+")\\s*\\))")+")",o=new RegExp("^\\s*(?:"+("(?:"+n+"(?:"+s+"*"+n+")*)")+"?)\\s*$"),a=new RegExp(n,"g")
return function(r){var s=i.concat(),h=[]
if(!r||r&&!o.test(r))return s
r.replace(a,function(r){var o,a,c,l,u,f,d,g,p,v,b,m,_=new RegExp(n).exec(r).filter(function(t){return!!t}),y=_[1],x=_.slice(2).map(parseFloat)
switch(y){case"translate":m=x,(b=s)[4]=m[0],2===m.length&&(b[5]=m[1])
break
case"rotate":x[0]=e.util.degreesToRadians(x[0]),u=s,f=x,d=Math.cos(f[0]),g=Math.sin(f[0]),p=0,v=0,3===f.length&&(p=f[1],v=f[2]),u[0]=d,u[1]=g,u[2]=-g,u[3]=d,u[4]=p-(d*p-g*v),u[5]=v-(g*p+d*v)
break
case"scale":o=s,c=(a=x)[0],l=2===a.length?a[1]:a[0],o[0]=c,o[3]=l
break
case"skewX":t(s,x,2)
break
case"skewY":t(s,x,1)
break
case"matrix":s=x}h.push(s.concat()),s=i.concat()})
for(var c=h[0];h.length>1;)h.shift(),c=e.util.multiplyTransformMatrices(c,h[0])
return c}}()
var b=new RegExp("^\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*$")
function m(t){var i,r,s,o,a,c,l=t.getAttribute("viewBox"),u=1,f=1,d=t.getAttribute("width"),g=t.getAttribute("height"),p=t.getAttribute("x")||0,v=t.getAttribute("y")||0,m=t.getAttribute("preserveAspectRatio")||"",_=!l||!h.test(t.nodeName)||!(l=l.match(b)),y=!d||!g||"100%"===d||"100%"===g,x=_&&y,C={},S=""
if(C.width=0,C.height=0,C.toBeParsed=x,x)return C
if(_)return C.width=n(d),C.height=n(g),C
if(i=-parseFloat(l[1]),r=-parseFloat(l[2]),s=parseFloat(l[3]),o=parseFloat(l[4]),y?(C.width=s,C.height=o):(C.width=n(d),C.height=n(g),u=C.width/s,f=C.height/o),"none"!==(m=e.util.parsePreserveAspectRatioAttribute(m)).alignX&&(f=u=u>f?f:u),1===u&&1===f&&0===i&&0===r&&0===p&&0===v)return C
if((p||v)&&(S=" translate("+n(p)+" "+n(v)+") "),a=S+" matrix("+u+" 0 0 "+f+" "+i*u+" "+r*f+") ","svg"===t.nodeName){for(c=t.ownerDocument.createElement("g");t.firstChild;)c.appendChild(t.firstChild)
t.appendChild(c)}else a=(c=t).getAttribute("transform")+a
return c.setAttribute("transform",a),C}e.parseSVGDocument=function(t,i,s,n){if(t){(function(t){for(var e=d(t,["use","svg:use"]),i=0;e.length&&i<e.length;){var r,s,n,o,a=e[i],h=a.getAttribute("xlink:href").substr(1),c=a.getAttribute("x")||0,l=a.getAttribute("y")||0,u=v(t,h).cloneNode(!0),f=(u.getAttribute("transform")||"")+" translate("+c+", "+l+")",g=e.length
if(m(u),/^svg$/i.test(u.nodeName)){var p=u.ownerDocument.createElement("g")
for(s=0,o=(n=u.attributes).length;s<o;s++)r=n.item(s),p.setAttribute(r.nodeName,r.nodeValue)
for(;u.firstChild;)p.appendChild(u.firstChild)
u=p}for(s=0,o=(n=a.attributes).length;s<o;s++)"x"!==(r=n.item(s)).nodeName&&"y"!==r.nodeName&&"xlink:href"!==r.nodeName&&("transform"===r.nodeName?f=r.nodeValue+" "+f:u.setAttribute(r.nodeName,r.nodeValue))
u.setAttribute("transform",f),u.setAttribute("instantiated_by_use","1"),u.removeAttribute("id"),a.parentNode.replaceChild(u,a),e.length===g&&i++}})(t)
var o=e.Object.__uid++,h=m(t),l=e.util.toArray(t.getElementsByTagName("*"))
if(h.crossOrigin=n&&n.crossOrigin,h.svgUid=o,0===l.length&&e.isLikelyNode){for(var u=[],f=0,g=(l=t.selectNodes('//*[name(.)!="svg"]')).length;f<g;f++)u[f]=l[f]
l=u}var p=l.filter(function(t){return m(t),a.test(t.nodeName.replace("svg:",""))&&!function(t,e){for(;t&&(t=t.parentNode);)if(t.nodeName&&e.test(t.nodeName.replace("svg:",""))&&!t.getAttribute("instantiated_by_use"))return!0
return!1}(t,c)})
!p||p&&!p.length?i&&i([],{}):(e.gradientDefs[o]=e.getGradientDefs(t),e.cssRules[o]=e.getCSSRules(t),e.parseElements(p,function(t){i&&i(t,h)},r(h),s,n))}}
var _=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+e.reNum+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+e.reNum+"))?\\s+(.*)")
i(e,{parseFontDeclaration:function(t,e){var i=t.match(_)
if(i){var r=i[1],s=i[3],o=i[4],a=i[5],h=i[6]
r&&(e.fontStyle=r),s&&(e.fontWeight=isNaN(parseFloat(s))?s:parseFloat(s)),o&&(e.fontSize=n(o)),h&&(e.fontFamily=h),a&&(e.lineHeight="normal"===a?1:a)}},getGradientDefs:function(t){var e,i,r,s=d(t,["linearGradient","radialGradient","svg:linearGradient","svg:radialGradient"]),n=0,o={},a={}
for(n=s.length;n--;)r=(e=s[n]).getAttribute("xlink:href"),i=e.getAttribute("id"),r&&(a[i]=r.substr(1)),o[i]=e
for(i in a){var h=o[a[i]].cloneNode(!0)
for(e=o[i];h.firstChild;)e.appendChild(h.firstChild)}return o},parseAttributes:function(t,r,a){if(t){var h,c,d={}
void 0===a&&(a=t.getAttribute("svgUid")),t.parentNode&&l.test(t.parentNode.nodeName)&&(d=e.parseAttributes(t.parentNode,r,a)),c=d&&d.fontSize||t.getAttribute("font-size")||e.Text.DEFAULT_SVG_FONT_SIZE
var p=r.reduce(function(e,i){return(h=t.getAttribute(i))&&(e[i]=h),e},{})
p=i(p,i(function(t,i){var r={}
for(var s in e.cssRules[i])if(g(t,s.split(" ")))for(var n in e.cssRules[i][s])r[n]=e.cssRules[i][s][n]
return r}(t,a),e.parseStyleAttribute(t)))
var v,b,m,_,y,x,C,S,w,O={}
for(var T in p)v=(w=T)in u?u[w]:w,m=v,_=p[T],y=d,x=c,C=void 0,void 0,S="[object Array]"===Object.prototype.toString.call(_),"fill"!==m&&"stroke"!==m||"none"!==_?"strokeDashArray"===m?_="none"===_?null:_.replace(/,/g," ").split(/\s+/).map(function(t){return parseFloat(t)}):"transformMatrix"===m?_=y&&y.transformMatrix?o(y.transformMatrix,e.parseTransformAttribute(_)):e.parseTransformAttribute(_):"visible"===m?(_="none"!==_&&"hidden"!==_,y&&!1===y.visible&&(_=!1)):"opacity"===m?(_=parseFloat(_),y&&void 0!==y.opacity&&(_*=y.opacity)):"originX"===m?_="start"===_?"left":"end"===_?"right":"center":C=S?_.map(n):n(_,x):_="",b=!S&&isNaN(C)?_:C,O[v]=b
O&&O.font&&e.parseFontDeclaration(O.font,O)
var j=i(d,O)
return l.test(t.nodeName)?j:function(t){for(var i in f)if(void 0!==t[f[i]]&&""!==t[i]){if(void 0===t[i]){if(!e.Object.prototype[i])continue
t[i]=e.Object.prototype[i]}if(0!==t[i].indexOf("url(")){var r=new e.Color(t[i])
t[i]=r.setAlpha(s(r.getAlpha()*t[f[i]],2)).toRgba()}}return t}(j)}},parseElements:function(t,i,r,s,n){new e.ElementsParser(t,i,r,s,n).parse()},parseStyleAttribute:function(t){var e,i,r,s={},n=t.getAttribute("style")
return n?("string"==typeof n?(e=s,n.replace(/;\s*$/,"").split(";").forEach(function(t){var s=t.split(":")
i=s[0].trim().toLowerCase(),r=s[1].trim(),e[i]=r})):function(t,e){var i,r
for(var s in t)void 0!==t[s]&&(i=s.toLowerCase(),r=t[s],e[i]=r)}(n,s),s):s},parsePointsAttribute:function(t){if(!t)return null
var e,i,r=[]
for(e=0,i=(t=(t=t.replace(/,/g," ").trim()).split(/\s+/)).length;e<i;e+=2)r.push({x:parseFloat(t[e]),y:parseFloat(t[e+1])})
return r},getCSSRules:function(t){for(var i=t.getElementsByTagName("style"),r={},s=0,n=i.length;s<n;s++){var o=i[s].textContent||i[s].text
""!==(o=o.replace(/\/\*[\s\S]*?\*\//g,"")).trim()&&o.match(/[^{]*\{[\s\S]*?\}/g).map(function(t){return t.trim()}).forEach(function(t){for(var i=t.match(/([\s\S]*?)\s*\{([^}]*)\}/),s={},n=i[2].trim().replace(/;$/,"").split(/\s*;\s*/),o=0,a=n.length;o<a;o++){var h=n[o].split(/\s*:\s*/),c=h[0],l=h[1]
s[c]=l}(t=i[1]).split(",").forEach(function(t){""!==(t=t.replace(/^svg/i,"").trim())&&(r[t]?e.util.object.extend(r[t],s):r[t]=e.util.object.clone(s))})})}return r},loadSVGFromURL:function(t,i,r,s){t=t.replace(/^\n\s*/,"").trim(),new e.util.request(t,{method:"get",onComplete:function(t){var n=t.responseXML
n&&!n.documentElement&&e.window.ActiveXObject&&t.responseText&&((n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")))
n&&n.documentElement||i&&i(null)
e.parseSVGDocument(n.documentElement,function(t,e){i&&i(t,e)},r,s)}})},loadSVGFromString:function(t,i,r,s){var n
if(t=t.trim(),"undefined"!=typeof DOMParser){var o=new DOMParser
o&&o.parseFromString&&(n=o.parseFromString(t,"text/xml"))}else e.window.ActiveXObject&&((n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")))
e.parseSVGDocument(n.documentElement,function(t,e){i(t,e)},r,s)}})}("undefined"!=typeof exports?exports:this),fabric.ElementsParser=function(t,e,i,r,s){this.elements=t,this.callback=e,this.options=i,this.reviver=r,this.svgUid=i&&i.svgUid||0,this.parsingOptions=s},fabric.ElementsParser.prototype.parse=function(){this.instances=new Array(this.elements.length),this.numElements=this.elements.length,this.createObjects()},fabric.ElementsParser.prototype.createObjects=function(){for(var t=0,e=this.elements.length;t<e;t++)this.elements[t].setAttribute("svgUid",this.svgUid),function(t,e){setTimeout(function(){t.createObject(t.elements[e],e)},0)}(this,t)},fabric.ElementsParser.prototype.createObject=function(t,e){var i=fabric[fabric.util.string.capitalize(t.tagName.replace("svg:",""))]
if(i&&i.fromElement)try{this._createObject(i,t,e)}catch(t){fabric.log(t)}else this.checkIfDone()},fabric.ElementsParser.prototype._createObject=function(t,e,i){if(t.async)t.fromElement(e,this.createCallback(i,e),this.options)
else{var r=t.fromElement(e,this.options)
this.resolveGradient(r,"fill"),this.resolveGradient(r,"stroke"),this.reviver&&this.reviver(e,r),this.instances[i]=r,this.checkIfDone()}},fabric.ElementsParser.prototype.createCallback=function(t,e){var i=this
return function(r){i.resolveGradient(r,"fill"),i.resolveGradient(r,"stroke"),i.reviver&&i.reviver(e,r),i.instances[t]=r,i.checkIfDone()}},fabric.ElementsParser.prototype.resolveGradient=function(t,e){var i=t.get(e)
if(/^url\(/.test(i)){var r=i.slice(5,i.length-1)
fabric.gradientDefs[this.svgUid][r]&&t.set(e,fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][r],t))}},fabric.ElementsParser.prototype.checkIfDone=function(){0==--this.numElements&&(this.instances=this.instances.filter(function(t){return null!=t}),this.callback(this.instances))},function(t){"use strict"
var e=t.fabric||(t.fabric={})
function i(t,e){this.x=t,this.y=e}e.Point?e.warn("fabric.Point is already defined"):(e.Point=i,i.prototype={type:"point",constructor:i,add:function(t){return new i(this.x+t.x,this.y+t.y)},addEquals:function(t){return this.x+=t.x,this.y+=t.y,this},scalarAdd:function(t){return new i(this.x+t,this.y+t)},scalarAddEquals:function(t){return this.x+=t,this.y+=t,this},subtract:function(t){return new i(this.x-t.x,this.y-t.y)},subtractEquals:function(t){return this.x-=t.x,this.y-=t.y,this},scalarSubtract:function(t){return new i(this.x-t,this.y-t)},scalarSubtractEquals:function(t){return this.x-=t,this.y-=t,this},multiply:function(t){return new i(this.x*t,this.y*t)},multiplyEquals:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return new i(this.x/t,this.y/t)},divideEquals:function(t){return this.x/=t,this.y/=t,this},eq:function(t){return this.x===t.x&&this.y===t.y},lt:function(t){return this.x<t.x&&this.y<t.y},lte:function(t){return this.x<=t.x&&this.y<=t.y},gt:function(t){return this.x>t.x&&this.y>t.y},gte:function(t){return this.x>=t.x&&this.y>=t.y},lerp:function(t,e){return void 0===e&&(e=.5),e=Math.max(Math.min(1,e),0),new i(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)},distanceFrom:function(t){var e=this.x-t.x,i=this.y-t.y
return Math.sqrt(e*e+i*i)},midPointFrom:function(t){return this.lerp(t)},min:function(t){return new i(Math.min(this.x,t.x),Math.min(this.y,t.y))},max:function(t){return new i(Math.max(this.x,t.x),Math.max(this.y,t.y))},toString:function(){return this.x+","+this.y},setXY:function(t,e){return this.x=t,this.y=e,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setFromPoint:function(t){return this.x=t.x,this.y=t.y,this},swap:function(t){var e=this.x,i=this.y
this.x=t.x,this.y=t.y,t.x=e,t.y=i},clone:function(){return new i(this.x,this.y)}})}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={})
function i(t){this.status=t,this.points=[]}e.Intersection?e.warn("fabric.Intersection is already defined"):(e.Intersection=i,e.Intersection.prototype={constructor:i,appendPoint:function(t){return this.points.push(t),this},appendPoints:function(t){return this.points=this.points.concat(t),this}},e.Intersection.intersectLineLine=function(t,r,s,n){var o,a=(n.x-s.x)*(t.y-s.y)-(n.y-s.y)*(t.x-s.x),h=(r.x-t.x)*(t.y-s.y)-(r.y-t.y)*(t.x-s.x),c=(n.y-s.y)*(r.x-t.x)-(n.x-s.x)*(r.y-t.y)
if(0!==c){var l=a/c,u=h/c
0<=l&&l<=1&&0<=u&&u<=1?(o=new i("Intersection")).appendPoint(new e.Point(t.x+l*(r.x-t.x),t.y+l*(r.y-t.y))):o=new i}else o=new i(0===a||0===h?"Coincident":"Parallel")
return o},e.Intersection.intersectLinePolygon=function(t,e,r){for(var s,n,o,a=new i,h=r.length,c=0;c<h;c++)s=r[c],n=r[(c+1)%h],o=i.intersectLineLine(t,e,s,n),a.appendPoints(o.points)
return a.points.length>0&&(a.status="Intersection"),a},e.Intersection.intersectPolygonPolygon=function(t,e){for(var r=new i,s=t.length,n=0;n<s;n++){var o=t[n],a=t[(n+1)%s],h=i.intersectLinePolygon(o,a,e)
r.appendPoints(h.points)}return r.points.length>0&&(r.status="Intersection"),r},e.Intersection.intersectPolygonRectangle=function(t,r,s){var n=r.min(s),o=r.max(s),a=new e.Point(o.x,n.y),h=new e.Point(n.x,o.y),c=i.intersectLinePolygon(n,a,t),l=i.intersectLinePolygon(a,o,t),u=i.intersectLinePolygon(o,h,t),f=i.intersectLinePolygon(h,n,t),d=new i
return d.appendPoints(c.points),d.appendPoints(l.points),d.appendPoints(u.points),d.appendPoints(f.points),d.points.length>0&&(d.status="Intersection"),d})}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={})
function i(t){t?this._tryParsingColor(t):this.setSource([0,0,0,1])}function r(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}e.Color?e.warn("fabric.Color is already defined."):(e.Color=i,e.Color.prototype={_tryParsingColor:function(t){var e
t in i.colorNameMap&&(t=i.colorNameMap[t]),"transparent"===t&&(e=[255,255,255,0]),e||(e=i.sourceFromHex(t)),e||(e=i.sourceFromRgb(t)),e||(e=i.sourceFromHsl(t)),e||(e=[0,0,0,1]),e&&this.setSource(e)},_rgbToHsl:function(t,i,r){t/=255,i/=255,r/=255
var s,n,o,a=e.util.array.max([t,i,r]),h=e.util.array.min([t,i,r])
if(o=(a+h)/2,a===h)s=n=0
else{var c=a-h
switch(n=o>.5?c/(2-a-h):c/(a+h),a){case t:s=(i-r)/c+(i<r?6:0)
break
case i:s=(r-t)/c+2
break
case r:s=(t-i)/c+4}s/=6}return[Math.round(360*s),Math.round(100*n),Math.round(100*o)]},getSource:function(){return this._source},setSource:function(t){this._source=t},toRgb:function(){var t=this.getSource()
return"rgb("+t[0]+","+t[1]+","+t[2]+")"},toRgba:function(){var t=this.getSource()
return"rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")"},toHsl:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2])
return"hsl("+e[0]+","+e[1]+"%,"+e[2]+"%)"},toHsla:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2])
return"hsla("+e[0]+","+e[1]+"%,"+e[2]+"%,"+t[3]+")"},toHex:function(){var t,e,i,r=this.getSource()
return t=1===(t=r[0].toString(16)).length?"0"+t:t,e=1===(e=r[1].toString(16)).length?"0"+e:e,i=1===(i=r[2].toString(16)).length?"0"+i:i,t.toUpperCase()+e.toUpperCase()+i.toUpperCase()},toHexa:function(){var t
return t=1===(t=(t=255*this.getSource()[3]).toString(16)).length?"0"+t:t,this.toHex()+t.toUpperCase()},getAlpha:function(){return this.getSource()[3]},setAlpha:function(t){var e=this.getSource()
return e[3]=t,this.setSource(e),this},toGrayscale:function(){var t=this.getSource(),e=parseInt((.3*t[0]+.59*t[1]+.11*t[2]).toFixed(0),10),i=t[3]
return this.setSource([e,e,e,i]),this},toBlackWhite:function(t){var e=this.getSource(),i=(.3*e[0]+.59*e[1]+.11*e[2]).toFixed(0),r=e[3]
return t=t||127,i=Number(i)<Number(t)?0:255,this.setSource([i,i,i,r]),this},overlayWith:function(t){t instanceof i||(t=new i(t))
for(var e=[],r=this.getAlpha(),s=this.getSource(),n=t.getSource(),o=0;o<3;o++)e.push(Math.round(.5*s[o]+.5*n[o]))
return e[3]=r,this.setSource(e),this}},e.Color.reRGBa=/^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/,e.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,e.Color.reHex=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,e.Color.colorNameMap={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",grey:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"},e.Color.fromRgb=function(t){return i.fromSource(i.sourceFromRgb(t))},e.Color.sourceFromRgb=function(t){var e=t.match(i.reRGBa)
if(e){var r=parseInt(e[1],10)/(/%$/.test(e[1])?100:1)*(/%$/.test(e[1])?255:1),s=parseInt(e[2],10)/(/%$/.test(e[2])?100:1)*(/%$/.test(e[2])?255:1),n=parseInt(e[3],10)/(/%$/.test(e[3])?100:1)*(/%$/.test(e[3])?255:1)
return[parseInt(r,10),parseInt(s,10),parseInt(n,10),e[4]?parseFloat(e[4]):1]}},e.Color.fromRgba=i.fromRgb,e.Color.fromHsl=function(t){return i.fromSource(i.sourceFromHsl(t))},e.Color.sourceFromHsl=function(t){var e=t.match(i.reHSLa)
if(e){var s,n,o,a=(parseFloat(e[1])%360+360)%360/360,h=parseFloat(e[2])/(/%$/.test(e[2])?100:1),c=parseFloat(e[3])/(/%$/.test(e[3])?100:1)
if(0===h)s=n=o=c
else{var l=c<=.5?c*(h+1):c+h-c*h,u=2*c-l
s=r(u,l,a+1/3),n=r(u,l,a),o=r(u,l,a-1/3)}return[Math.round(255*s),Math.round(255*n),Math.round(255*o),e[4]?parseFloat(e[4]):1]}},e.Color.fromHsla=i.fromHsl,e.Color.fromHex=function(t){return i.fromSource(i.sourceFromHex(t))},e.Color.sourceFromHex=function(t){if(t.match(i.reHex)){var e=t.slice(t.indexOf("#")+1),r=3===e.length||4===e.length,s=8===e.length||4===e.length,n=r?e.charAt(0)+e.charAt(0):e.substring(0,2),o=r?e.charAt(1)+e.charAt(1):e.substring(2,4),a=r?e.charAt(2)+e.charAt(2):e.substring(4,6),h=s?r?e.charAt(3)+e.charAt(3):e.substring(6,8):"FF"
return[parseInt(n,16),parseInt(o,16),parseInt(a,16),parseFloat((parseInt(h,16)/255).toFixed(2))]}},e.Color.fromSource=function(t){var e=new i
return e.setSource(t),e})}("undefined"!=typeof exports?exports:this),function(){function t(t){var e,i,r,s=t.getAttribute("style"),n=t.getAttribute("offset")||0
if(n=(n=parseFloat(n)/(/%$/.test(n)?100:1))<0?0:n>1?1:n,s){var o=s.split(/\s*;\s*/)
""===o[o.length-1]&&o.pop()
for(var a=o.length;a--;){var h=o[a].split(/\s*:\s*/),c=h[0].trim(),l=h[1].trim()
"stop-color"===c?e=l:"stop-opacity"===c&&(r=l)}}return e||(e=t.getAttribute("stop-color")||"rgb(0,0,0)"),r||(r=t.getAttribute("stop-opacity")),i=(e=new fabric.Color(e)).getAlpha(),r=isNaN(parseFloat(r))?1:parseFloat(r),r*=i,{offset:n,color:e.toRgb(),opacity:r}}var e=fabric.util.object.clone
function i(t,e,i){var r,s=0,n=1,o=""
for(var a in e)"Infinity"===e[a]?e[a]=1:"-Infinity"===e[a]&&(e[a]=0),r=parseFloat(e[a],10),n="string"==typeof e[a]&&/^\d+%$/.test(e[a])?.01:1,"x1"===a||"x2"===a||"r2"===a?(n*="objectBoundingBox"===i?t.width:1,s="objectBoundingBox"===i?t.left||0:0):"y1"!==a&&"y2"!==a||(n*="objectBoundingBox"===i?t.height:1,s="objectBoundingBox"===i?t.top||0:0),e[a]=r*n+s
if("ellipse"===t.type&&null!==e.r2&&"objectBoundingBox"===i&&t.rx!==t.ry){var h=t.ry/t.rx
o=" scale(1, "+h+")",e.y1&&(e.y1/=h),e.y2&&(e.y2/=h)}return o}fabric.Gradient=fabric.util.createClass({offsetX:0,offsetY:0,initialize:function(t){t||(t={})
var e={}
this.id=fabric.Object.__uid++,this.type=t.type||"linear",e={x1:t.coords.x1||0,y1:t.coords.y1||0,x2:t.coords.x2||0,y2:t.coords.y2||0},"radial"===this.type&&(e.r1=t.coords.r1||0,e.r2=t.coords.r2||0),this.coords=e,this.colorStops=t.colorStops.slice(),t.gradientTransform&&(this.gradientTransform=t.gradientTransform),this.offsetX=t.offsetX||this.offsetX,this.offsetY=t.offsetY||this.offsetY},addColorStop:function(t){for(var e in t){var i=new fabric.Color(t[e])
this.colorStops.push({offset:parseFloat(e),color:i.toRgb(),opacity:i.getAlpha()})}return this},toObject:function(t){var e={type:this.type,coords:this.coords,colorStops:this.colorStops,offsetX:this.offsetX,offsetY:this.offsetY,gradientTransform:this.gradientTransform?this.gradientTransform.concat():this.gradientTransform}
return fabric.util.populateWithProperties(this,e,t),e},toSVG:function(t){var i,r,s=e(this.coords,!0),n=e(this.colorStops,!0),o=s.r1>s.r2
if(n.sort(function(t,e){return t.offset-e.offset}),!t.group||"path-group"!==t.group.type)for(var a in s)"x1"===a||"x2"===a?s[a]+=this.offsetX-t.width/2:"y1"!==a&&"y2"!==a||(s[a]+=this.offsetY-t.height/2)
if(r='id="SVGID_'+this.id+'" gradientUnits="userSpaceOnUse"',this.gradientTransform&&(r+=' gradientTransform="matrix('+this.gradientTransform.join(" ")+')" '),"linear"===this.type?i=["<linearGradient ",r,' x1="',s.x1,'" y1="',s.y1,'" x2="',s.x2,'" y2="',s.y2,'">\n']:"radial"===this.type&&(i=["<radialGradient ",r,' cx="',o?s.x1:s.x2,'" cy="',o?s.y1:s.y2,'" r="',o?s.r1:s.r2,'" fx="',o?s.x2:s.x1,'" fy="',o?s.y2:s.y1,'">\n']),"radial"===this.type){if(o){(n=n.concat()).reverse()
for(var h=0;h<n.length;h++)n[h].offset=1-n[h].offset}var c=Math.min(s.r1,s.r2)
if(c>0){var l=c/Math.max(s.r1,s.r2)
for(h=0;h<n.length;h++)n[h].offset+=l*(1-n[h].offset)}}for(h=0;h<n.length;h++){var u=n[h]
i.push("<stop ",'offset="',100*u.offset+"%",'" style="stop-color:',u.color,null!==u.opacity?";stop-opacity: "+u.opacity:";",'"/>\n')}return i.push("linear"===this.type?"</linearGradient>\n":"</radialGradient>\n"),i.join("")},toLive:function(t,e){var i,r,s=fabric.util.object.clone(this.coords)
if(this.type){if(e.group&&"path-group"===e.group.type)for(r in s)"x1"===r||"x2"===r?s[r]+=-this.offsetX+e.width/2:"y1"!==r&&"y2"!==r||(s[r]+=-this.offsetY+e.height/2)
"linear"===this.type?i=t.createLinearGradient(s.x1,s.y1,s.x2,s.y2):"radial"===this.type&&(i=t.createRadialGradient(s.x1,s.y1,s.r1,s.x2,s.y2,s.r2))
for(var n=0,o=this.colorStops.length;n<o;n++){var a=this.colorStops[n].color,h=this.colorStops[n].opacity,c=this.colorStops[n].offset
void 0!==h&&(a=new fabric.Color(a).setAlpha(h).toRgba()),i.addColorStop(c,a)}return i}}}),fabric.util.object.extend(fabric.Gradient,{fromElement:function(e,r){var s,n,o,a,h,c=e.getElementsByTagName("stop"),l=e.getAttribute("gradientUnits")||"objectBoundingBox",u=e.getAttribute("gradientTransform"),f=[]
"linear"===(s="linearGradient"===e.nodeName||"LINEARGRADIENT"===e.nodeName?"linear":"radial")?n={x1:(h=e).getAttribute("x1")||0,y1:h.getAttribute("y1")||0,x2:h.getAttribute("x2")||"100%",y2:h.getAttribute("y2")||0}:"radial"===s&&(n={x1:(a=e).getAttribute("fx")||a.getAttribute("cx")||"50%",y1:a.getAttribute("fy")||a.getAttribute("cy")||"50%",r1:0,x2:a.getAttribute("cx")||"50%",y2:a.getAttribute("cy")||"50%",r2:a.getAttribute("r")||"50%"})
for(var d=c.length;d--;)f.push(t(c[d]))
o=i(r,n,l)
var g=new fabric.Gradient({type:s,coords:n,colorStops:f,offsetX:-r.left,offsetY:-r.top})
return(u||""!==o)&&(g.gradientTransform=fabric.parseTransformAttribute((u||"")+o)),g},forObject:function(t,e){return e||(e={}),i(t,e.coords,"userSpaceOnUse"),new fabric.Gradient(e)}})}(),function(){"use strict"
var t=fabric.util.toFixed
fabric.Pattern=fabric.util.createClass({repeat:"repeat",offsetX:0,offsetY:0,initialize:function(t,e){if(t||(t={}),this.id=fabric.Object.__uid++,this.setOptions(t),!t.source||t.source&&"string"!=typeof t.source)e&&e(this)
else if(void 0!==fabric.util.getFunctionBody(t.source))this.source=new Function(fabric.util.getFunctionBody(t.source)),e&&e(this)
else{var i=this
this.source=fabric.util.createImage(),fabric.util.loadImage(t.source,function(t){i.source=t,e&&e(i)})}},toObject:function(e){var i,r,s=fabric.Object.NUM_FRACTION_DIGITS
return"function"==typeof this.source?i=String(this.source):"string"==typeof this.source.src?i=this.source.src:"object"==typeof this.source&&this.source.toDataURL&&(i=this.source.toDataURL()),r={type:"pattern",source:i,repeat:this.repeat,offsetX:t(this.offsetX,s),offsetY:t(this.offsetY,s)},fabric.util.populateWithProperties(this,r,e),r},toSVG:function(t){var e="function"==typeof this.source?this.source():this.source,i=e.width/t.width,r=e.height/t.height,s=this.offsetX/t.width,n=this.offsetY/t.height,o=""
return"repeat-x"!==this.repeat&&"no-repeat"!==this.repeat||(r=1),"repeat-y"!==this.repeat&&"no-repeat"!==this.repeat||(i=1),e.src?o=e.src:e.toDataURL&&(o=e.toDataURL()),'<pattern id="SVGID_'+this.id+'" x="'+s+'" y="'+n+'" width="'+i+'" height="'+r+'">\n<image x="0" y="0" width="'+e.width+'" height="'+e.height+'" xlink:href="'+o+'"></image>\n</pattern>\n'},setOptions:function(t){for(var e in t)this[e]=t[e]},toLive:function(t){var e="function"==typeof this.source?this.source():this.source
if(!e)return""
if(void 0!==e.src){if(!e.complete)return""
if(0===e.naturalWidth||0===e.naturalHeight)return""}return t.createPattern(e,this.repeat)}})}(),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.toFixed
e.Shadow?e.warn("fabric.Shadow is already defined."):(e.Shadow=e.util.createClass({color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,initialize:function(t){"string"==typeof t&&(t=this._parseShadow(t))
for(var i in t)this[i]=t[i]
this.id=e.Object.__uid++},_parseShadow:function(t){var i=t.trim(),r=e.Shadow.reOffsetsAndBlur.exec(i)||[]
return{color:(i.replace(e.Shadow.reOffsetsAndBlur,"")||"rgb(0,0,0)").trim(),offsetX:parseInt(r[1],10)||0,offsetY:parseInt(r[2],10)||0,blur:parseInt(r[3],10)||0}},toString:function(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")},toSVG:function(t){var r=40,s=40,n=e.Object.NUM_FRACTION_DIGITS,o=e.util.rotateVector({x:this.offsetX,y:this.offsetY},e.util.degreesToRadians(-t.angle))
return t.width&&t.height&&(r=100*i((Math.abs(o.x)+this.blur)/t.width,n)+20,s=100*i((Math.abs(o.y)+this.blur)/t.height,n)+20),t.flipX&&(o.x*=-1),t.flipY&&(o.y*=-1),'<filter id="SVGID_'+this.id+'" y="-'+s+'%" height="'+(100+2*s)+'%" x="-'+r+'%" width="'+(100+2*r)+'%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="'+i(this.blur?this.blur/2:0,n)+'"></feGaussianBlur>\n\t<feOffset dx="'+i(o.x,n)+'" dy="'+i(o.y,n)+'" result="oBlur" ></feOffset>\n\t<feFlood flood-color="'+this.color+'"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'},toObject:function(){if(this.includeDefaultValues)return{color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke}
var t={},i=e.Shadow.prototype
return["color","blur","offsetX","offsetY","affectStroke"].forEach(function(e){this[e]!==i[e]&&(t[e]=this[e])},this),t}}),e.Shadow.reOffsetsAndBlur=/(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/)}("undefined"!=typeof exports?exports:this),function(){"use strict"
if(fabric.StaticCanvas)fabric.warn("fabric.StaticCanvas is already defined.")
else{var t=fabric.util.object.extend,e=fabric.util.getElementOffset,i=fabric.util.removeFromArray,r=fabric.util.toFixed,s=fabric.util.transformPoint,n=fabric.util.invertTransform,o=new Error("Could not initialize `canvas` element")
fabric.StaticCanvas=fabric.util.createClass(fabric.CommonMethods,{initialize:function(t,e){e||(e={}),this._initStatic(t,e)},backgroundColor:"",backgroundImage:null,overlayColor:"",overlayImage:null,includeDefaultValues:!0,stateful:!1,renderOnAddRemove:!0,clipTo:null,controlsAboveOverlay:!1,allowTouchScrolling:!1,imageSmoothingEnabled:!0,viewportTransform:fabric.iMatrix.concat(),backgroundVpt:!0,overlayVpt:!0,onBeforeScaleRotate:function(){},enableRetinaScaling:!0,vptCoords:{},skipOffscreen:!1,_initStatic:function(t,e){var i=fabric.StaticCanvas.prototype.renderAll.bind(this)
this._objects=[],this._createLowerCanvas(t),this._initOptions(e),this._setImageSmoothing(),this.interactive||this._initRetinaScaling(),e.overlayImage&&this.setOverlayImage(e.overlayImage,i),e.backgroundImage&&this.setBackgroundImage(e.backgroundImage,i),e.backgroundColor&&this.setBackgroundColor(e.backgroundColor,i),e.overlayColor&&this.setOverlayColor(e.overlayColor,i),this.calcOffset()},_isRetinaScaling:function(){return 1!==fabric.devicePixelRatio&&this.enableRetinaScaling},getRetinaScaling:function(){return this._isRetinaScaling()?fabric.devicePixelRatio:1},_initRetinaScaling:function(){this._isRetinaScaling()&&(this.lowerCanvasEl.setAttribute("width",this.width*fabric.devicePixelRatio),this.lowerCanvasEl.setAttribute("height",this.height*fabric.devicePixelRatio),this.contextContainer.scale(fabric.devicePixelRatio,fabric.devicePixelRatio))},calcOffset:function(){return this._offset=e(this.lowerCanvasEl),this},setOverlayImage:function(t,e,i){return this.__setBgOverlayImage("overlayImage",t,e,i)},setBackgroundImage:function(t,e,i){return this.__setBgOverlayImage("backgroundImage",t,e,i)},setOverlayColor:function(t,e){return this.__setBgOverlayColor("overlayColor",t,e)},setBackgroundColor:function(t,e){return this.__setBgOverlayColor("backgroundColor",t,e)},_setImageSmoothing:function(){var t=this.getContext()
t.imageSmoothingEnabled=t.imageSmoothingEnabled||t.webkitImageSmoothingEnabled||t.mozImageSmoothingEnabled||t.msImageSmoothingEnabled||t.oImageSmoothingEnabled,t.imageSmoothingEnabled=this.imageSmoothingEnabled},__setBgOverlayImage:function(t,e,i,r){return"string"==typeof e?fabric.util.loadImage(e,function(e){e&&(this[t]=new fabric.Image(e,r)),i&&i(e)},this,r&&r.crossOrigin):(r&&e.setOptions(r),this[t]=e,i&&i(e)),this},__setBgOverlayColor:function(t,e,i){return this[t]=e,this._initGradient(e,t),this._initPattern(e,t,i),this},_createCanvasElement:function(t){var e=fabric.util.createCanvasElement(t)
if(e.style||(e.style={}),!e)throw o
if(void 0===e.getContext)throw o
return e},_initOptions:function(t){this._setOptions(t),this.width=this.width||parseInt(this.lowerCanvasEl.width,10)||0,this.height=this.height||parseInt(this.lowerCanvasEl.height,10)||0,this.lowerCanvasEl.style&&(this.lowerCanvasEl.width=this.width,this.lowerCanvasEl.height=this.height,this.lowerCanvasEl.style.width=this.width+"px",this.lowerCanvasEl.style.height=this.height+"px",this.viewportTransform=this.viewportTransform.slice())},_createLowerCanvas:function(t){this.lowerCanvasEl=fabric.util.getById(t)||this._createCanvasElement(t),fabric.util.addClass(this.lowerCanvasEl,"lower-canvas"),this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},getWidth:function(){return this.width},getHeight:function(){return this.height},setWidth:function(t,e){return this.setDimensions({width:t},e)},setHeight:function(t,e){return this.setDimensions({height:t},e)},setDimensions:function(t,e){var i
e=e||{}
for(var r in t)i=t[r],e.cssOnly||(this._setBackstoreDimension(r,t[r]),i+="px"),e.backstoreOnly||this._setCssDimension(r,i)
return this._initRetinaScaling(),this._setImageSmoothing(),this.calcOffset(),e.cssOnly||this.renderAll(),this},_setBackstoreDimension:function(t,e){return this.lowerCanvasEl[t]=e,this.upperCanvasEl&&(this.upperCanvasEl[t]=e),this.cacheCanvasEl&&(this.cacheCanvasEl[t]=e),this[t]=e,this},_setCssDimension:function(t,e){return this.lowerCanvasEl.style[t]=e,this.upperCanvasEl&&(this.upperCanvasEl.style[t]=e),this.wrapperEl&&(this.wrapperEl.style[t]=e),this},getZoom:function(){return this.viewportTransform[0]},setViewportTransform:function(t){var e,i=this._activeGroup
this.viewportTransform=t
for(var r=0,s=this._objects.length;r<s;r++)(e=this._objects[r]).group||e.setCoords(!1,!0)
return i&&i.setCoords(!1,!0),this.calcViewportBoundaries(),this.renderAll(),this},zoomToPoint:function(t,e){var i=t,r=this.viewportTransform.slice(0)
t=s(t,n(this.viewportTransform)),r[0]=e,r[3]=e
var o=s(t,r)
return r[4]+=i.x-o.x,r[5]+=i.y-o.y,this.setViewportTransform(r)},setZoom:function(t){return this.zoomToPoint(new fabric.Point(0,0),t),this},absolutePan:function(t){var e=this.viewportTransform.slice(0)
return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)},relativePan:function(t){return this.absolutePan(new fabric.Point(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))},getElement:function(){return this.lowerCanvasEl},_onObjectAdded:function(t){this.stateful&&t.setupState(),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added")},_onObjectRemoved:function(t){this.fire("object:removed",{target:t}),t.fire("removed"),delete t.canvas},clearContext:function(t){return t.clearRect(0,0,this.width,this.height),this},getContext:function(){return this.contextContainer},clear:function(){return this._objects.length=0,this.backgroundImage=null,this.overlayImage=null,this.backgroundColor="",this.overlayColor="",this._hasITextHandlers&&(this.off("mouse:up",this._mouseUpITextHandler),this._iTextInstances=null,this._hasITextHandlers=!1),this.clearContext(this.contextContainer),this.fire("canvas:cleared"),this.renderAll(),this},renderAll:function(){var t=this.contextContainer
return this.renderCanvas(t,this._objects),this},calcViewportBoundaries:function(){var t={},e=this.getWidth(),i=this.getHeight(),r=n(this.viewportTransform)
return t.tl=s({x:0,y:0},r),t.br=s({x:e,y:i},r),t.tr=new fabric.Point(t.br.x,t.tl.y),t.bl=new fabric.Point(t.tl.x,t.br.y),this.vptCoords=t,t},renderCanvas:function(t,e){this.calcViewportBoundaries(),this.clearContext(t),this.fire("before:render"),this.clipTo&&fabric.util.clipContext(this,t),this._renderBackground(t),t.save(),t.transform.apply(t,this.viewportTransform),this._renderObjects(t,e),t.restore(),!this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.clipTo&&t.restore(),this._renderOverlay(t),this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.fire("after:render")},_renderObjects:function(t,e){for(var i=0,r=e.length;i<r;++i)e[i]&&e[i].render(t)},_renderBackgroundOrOverlay:function(t,e){var i=this[e+"Color"]
i&&(t.fillStyle=i.toLive?i.toLive(t,this):i,t.fillRect(i.offsetX||0,i.offsetY||0,this.width,this.height)),(i=this[e+"Image"])&&(this[e+"Vpt"]&&(t.save(),t.transform.apply(t,this.viewportTransform)),i.render(t),this[e+"Vpt"]&&t.restore())},_renderBackground:function(t){this._renderBackgroundOrOverlay(t,"background")},_renderOverlay:function(t){this._renderBackgroundOrOverlay(t,"overlay")},getCenter:function(){return{top:this.getHeight()/2,left:this.getWidth()/2}},centerObjectH:function(t){return this._centerObject(t,new fabric.Point(this.getCenter().left,t.getCenterPoint().y))},centerObjectV:function(t){return this._centerObject(t,new fabric.Point(t.getCenterPoint().x,this.getCenter().top))},centerObject:function(t){var e=this.getCenter()
return this._centerObject(t,new fabric.Point(e.left,e.top))},viewportCenterObject:function(t){var e=this.getVpCenter()
return this._centerObject(t,e)},viewportCenterObjectH:function(t){var e=this.getVpCenter()
return this._centerObject(t,new fabric.Point(e.x,t.getCenterPoint().y)),this},viewportCenterObjectV:function(t){var e=this.getVpCenter()
return this._centerObject(t,new fabric.Point(t.getCenterPoint().x,e.y))},getVpCenter:function(){var t=this.getCenter(),e=n(this.viewportTransform)
return s({x:t.left,y:t.top},e)},_centerObject:function(t,e){return t.setPositionByOrigin(e,"center","center"),this.renderAll(),this},toDatalessJSON:function(t){return this.toDatalessObject(t)},toObject:function(t){return this._toObjectMethod("toObject",t)},toDatalessObject:function(t){return this._toObjectMethod("toDatalessObject",t)},_toObjectMethod:function(e,i){var r={objects:this._toObjects(e,i)}
return t(r,this.__serializeBgOverlay(e,i)),fabric.util.populateWithProperties(this,r,i),r},_toObjects:function(t,e){return this.getObjects().filter(function(t){return!t.excludeFromExport}).map(function(i){return this._toObject(i,t,e)},this)},_toObject:function(t,e,i){var r
this.includeDefaultValues||(r=t.includeDefaultValues,t.includeDefaultValues=!1)
var s=t[e](i)
return this.includeDefaultValues||(t.includeDefaultValues=r),s},__serializeBgOverlay:function(t,e){var i={},r=this.backgroundImage,s=this.overlayImage
return this.backgroundColor&&(i.background=this.backgroundColor.toObject?this.backgroundColor.toObject(e):this.backgroundColor),this.overlayColor&&(i.overlay=this.overlayColor.toObject?this.overlayColor.toObject(e):this.overlayColor),r&&!r.excludeFromExport&&(i.backgroundImage=this._toObject(r,t,e)),s&&!s.excludeFromExport&&(i.overlayImage=this._toObject(s,t,e)),i},svgViewportTransformation:!0,toSVG:function(t,e){t||(t={})
var i=[]
return this._setSVGPreamble(i,t),this._setSVGHeader(i,t),this._setSVGBgOverlayColor(i,"backgroundColor"),this._setSVGBgOverlayImage(i,"backgroundImage",e),this._setSVGObjects(i,e),this._setSVGBgOverlayColor(i,"overlayColor"),this._setSVGBgOverlayImage(i,"overlayImage",e),i.push("</svg>"),i.join("")},_setSVGPreamble:function(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",'" standalone="no" ?>\n','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')},_setSVGHeader:function(t,e){var i,s=e.width||this.width,n=e.height||this.height,o='viewBox="0 0 '+this.width+" "+this.height+'" ',a=fabric.Object.NUM_FRACTION_DIGITS
e.viewBox?o='viewBox="'+e.viewBox.x+" "+e.viewBox.y+" "+e.viewBox.width+" "+e.viewBox.height+'" ':this.svgViewportTransformation&&(i=this.viewportTransform,o='viewBox="'+r(-i[4]/i[0],a)+" "+r(-i[5]/i[3],a)+" "+r(this.width/i[0],a)+" "+r(this.height/i[3],a)+'" '),t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',s,'" ','height="',n,'" ',o,'xml:space="preserve">\n',"<desc>Created with Fabric.js ",fabric.version,"</desc>\n","<defs>\n",this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),"</defs>\n")},createSVGRefElementsMarkup:function(){var t=this
return["backgroundColor","overlayColor"].map(function(e){var i=t[e]
if(i&&i.toLive)return i.toSVG(t,!1)}).join("")},createSVGFontFacesMarkup:function(){for(var t,e,i,r,s,n,o="",a={},h=fabric.fontPaths,c=this.getObjects(),l=0,u=c.length;l<u;l++)if(e=(t=c[l]).fontFamily,-1!==t.type.indexOf("text")&&!a[e]&&h[e]&&(a[e]=!0,t.styles)){i=t.styles
for(s in i){r=i[s]
for(n in r)!a[e=r[n].fontFamily]&&h[e]&&(a[e]=!0)}}for(var f in a)o+=["\t\t@font-face {\n","\t\t\tfont-family: '",f,"';\n","\t\t\tsrc: url('",h[f],"');\n","\t\t}\n"].join("")
return o&&(o=['\t<style type="text/css">',"<![CDATA[\n",o,"]]>","</style>\n"].join("")),o},_setSVGObjects:function(t,e){for(var i,r=0,s=this.getObjects(),n=s.length;r<n;r++)(i=s[r]).excludeFromExport||this._setSVGObject(t,i,e)},_setSVGObject:function(t,e,i){t.push(e.toSVG(i))},_setSVGBgOverlayImage:function(t,e,i){this[e]&&this[e].toSVG&&t.push(this[e].toSVG(i))},_setSVGBgOverlayColor:function(t,e){var i=this[e]
if(i)if(i.toLive){var r=i.repeat
t.push('<rect transform="translate(',this.width/2,",",this.height/2,')"',' x="',i.offsetX-this.width/2,'" y="',i.offsetY-this.height/2,'" ','width="',"repeat-y"===r||"no-repeat"===r?i.source.width:this.width,'" height="',"repeat-x"===r||"no-repeat"===r?i.source.height:this.height,'" fill="url(#SVGID_'+i.id+')"',"></rect>\n")}else t.push('<rect x="0" y="0" ','width="',this.width,'" height="',this.height,'" fill="',this[e],'"',"></rect>\n")},sendToBack:function(t){if(!t)return this
var e,r,s,n=this._activeGroup
if(t===n)for(e=(s=n._objects).length;e--;)r=s[e],i(this._objects,r),this._objects.unshift(r)
else i(this._objects,t),this._objects.unshift(t)
return this.renderAll&&this.renderAll()},bringToFront:function(t){if(!t)return this
var e,r,s,n=this._activeGroup
if(t===n)for(s=n._objects,e=0;e<s.length;e++)r=s[e],i(this._objects,r),this._objects.push(r)
else i(this._objects,t),this._objects.push(t)
return this.renderAll&&this.renderAll()},sendBackwards:function(t,e){if(!t)return this
var r,s,n,o,a,h=this._activeGroup,c=0
if(t===h)for(a=h._objects,r=0;r<a.length;r++)s=a[r],(n=this._objects.indexOf(s))>0+c&&(o=n-1,i(this._objects,s),this._objects.splice(o,0,s)),c++
else 0!==(n=this._objects.indexOf(t))&&(o=this._findNewLowerIndex(t,n,e),i(this._objects,t),this._objects.splice(o,0,t))
return this.renderAll&&this.renderAll(),this},_findNewLowerIndex:function(t,e,i){var r
if(i){r=e
for(var s=e-1;s>=0;--s){if(t.intersectsWithObject(this._objects[s])||t.isContainedWithinObject(this._objects[s])||this._objects[s].isContainedWithinObject(t)){r=s
break}}}else r=e-1
return r},bringForward:function(t,e){if(!t)return this
var r,s,n,o,a,h=this._activeGroup,c=0
if(t===h)for(r=(a=h._objects).length;r--;)s=a[r],(n=this._objects.indexOf(s))<this._objects.length-1-c&&(o=n+1,i(this._objects,s),this._objects.splice(o,0,s)),c++
else(n=this._objects.indexOf(t))!==this._objects.length-1&&(o=this._findNewUpperIndex(t,n,e),i(this._objects,t),this._objects.splice(o,0,t))
return this.renderAll&&this.renderAll(),this},_findNewUpperIndex:function(t,e,i){var r
if(i){r=e
for(var s=e+1;s<this._objects.length;++s){if(t.intersectsWithObject(this._objects[s])||t.isContainedWithinObject(this._objects[s])||this._objects[s].isContainedWithinObject(t)){r=s
break}}}else r=e+1
return r},moveTo:function(t,e){return i(this._objects,t),this._objects.splice(e,0,t),this.renderAll&&this.renderAll()},dispose:function(){return this.clear(),this},toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): { objects: "+this.getObjects().length+" }>"}}),t(fabric.StaticCanvas.prototype,fabric.Observable),t(fabric.StaticCanvas.prototype,fabric.Collection),t(fabric.StaticCanvas.prototype,fabric.DataURLExporter),t(fabric.StaticCanvas,{EMPTY_JSON:'{"objects": [], "background": "white"}',supports:function(t){var e=fabric.util.createCanvasElement()
if(!e||!e.getContext)return null
var i=e.getContext("2d")
if(!i)return null
switch(t){case"getImageData":return void 0!==i.getImageData
case"setLineDash":return void 0!==i.setLineDash
case"toDataURL":return void 0!==e.toDataURL
case"toDataURLWithQuality":try{return e.toDataURL("image/jpeg",0),!0}catch(t){}return!1
default:return null}}}),fabric.StaticCanvas.prototype.toJSON=fabric.StaticCanvas.prototype.toObject}}(),fabric.BaseBrush=fabric.util.createClass({color:"rgb(0, 0, 0)",width:1,shadow:null,strokeLineCap:"round",strokeLineJoin:"round",strokeDashArray:null,setShadow:function(t){return this.shadow=new fabric.Shadow(t),this},_setBrushStyles:function(){var t=this.canvas.contextTop
t.strokeStyle=this.color,t.lineWidth=this.width,t.lineCap=this.strokeLineCap,t.lineJoin=this.strokeLineJoin,this.strokeDashArray&&fabric.StaticCanvas.supports("setLineDash")&&t.setLineDash(this.strokeDashArray)},_setShadow:function(){if(this.shadow){var t=this.canvas.contextTop,e=this.canvas.getZoom()
t.shadowColor=this.shadow.color,t.shadowBlur=this.shadow.blur*e,t.shadowOffsetX=this.shadow.offsetX*e,t.shadowOffsetY=this.shadow.offsetY*e}},_resetShadow:function(){var t=this.canvas.contextTop
t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0}}),fabric.PencilBrush=fabric.util.createClass(fabric.BaseBrush,{initialize:function(t){this.canvas=t,this._points=[]},onMouseDown:function(t){this._prepareForDrawing(t),this._captureDrawingPath(t),this._render()},onMouseMove:function(t){this._captureDrawingPath(t),this.canvas.clearContext(this.canvas.contextTop),this._render()},onMouseUp:function(){this._finalizeAndAddPath()},_prepareForDrawing:function(t){var e=new fabric.Point(t.x,t.y)
this._reset(),this._addPoint(e),this.canvas.contextTop.moveTo(e.x,e.y)},_addPoint:function(t){this._points.push(t)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},_captureDrawingPath:function(t){var e=new fabric.Point(t.x,t.y)
this._addPoint(e)},_render:function(){var t,e,i=this.canvas.contextTop,r=this.canvas.viewportTransform,s=this._points[0],n=this._points[1]
if(i.save(),i.transform(r[0],r[1],r[2],r[3],r[4],r[5]),i.beginPath(),2===this._points.length&&s.x===n.x&&s.y===n.y){var o=this.width/1e3
s=new fabric.Point(s.x,s.y),n=new fabric.Point(n.x,n.y),s.x-=o,n.x+=o}for(i.moveTo(s.x,s.y),t=1,e=this._points.length;t<e;t++){var a=s.midPointFrom(n)
i.quadraticCurveTo(s.x,s.y,a.x,a.y),s=this._points[t],n=this._points[t+1]}i.lineTo(s.x,s.y),i.stroke(),i.restore()},convertPointsToSVGPath:function(t){var e,i=[],r=this.width/1e3,s=new fabric.Point(t[0].x,t[0].y),n=new fabric.Point(t[1].x,t[1].y),o=t.length
for(i.push("M ",s.x-r," ",s.y," "),e=1;e<o;e++){if(!s.eq(n)){var a=s.midPointFrom(n)
i.push("Q ",s.x," ",s.y," ",a.x," ",a.y," ")}s=t[e],e+1<t.length&&(n=t[e+1])}return i.push("L ",s.x+r," ",s.y," "),i},createPath:function(t){var e=new fabric.Path(t,{fill:null,stroke:this.color,strokeWidth:this.width,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeDashArray:this.strokeDashArray}),i=new fabric.Point(e.left+e.width/2,e.top+e.height/2)
return i=e.translateToGivenOrigin(i,"center","center",e.originX,e.originY),e.top=i.y,e.left=i.x,this.shadow&&(this.shadow.affectStroke=!0,e.setShadow(this.shadow)),e},_finalizeAndAddPath:function(){this.canvas.contextTop.closePath()
var t=this.convertPointsToSVGPath(this._points).join("")
if("M 0 0 Q 0 0 0 0 L 0 0"!==t){var e=this.createPath(t)
this.canvas.add(e),e.setCoords(),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderAll(),this.canvas.fire("path:created",{path:e})}else this.canvas.renderAll()}}),fabric.CircleBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,initialize:function(t){this.canvas=t,this.points=[]},drawDot:function(t){var e=this.addPoint(t),i=this.canvas.contextTop,r=this.canvas.viewportTransform
i.save(),i.transform(r[0],r[1],r[2],r[3],r[4],r[5]),i.fillStyle=e.fill,i.beginPath(),i.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),i.closePath(),i.fill(),i.restore()},onMouseDown:function(t){this.points.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.drawDot(t)},onMouseMove:function(t){this.drawDot(t)},onMouseUp:function(){var t=this.canvas.renderOnAddRemove
this.canvas.renderOnAddRemove=!1
for(var e=[],i=0,r=this.points.length;i<r;i++){var s=this.points[i],n=new fabric.Circle({radius:s.radius,left:s.x,top:s.y,originX:"center",originY:"center",fill:s.fill})
this.shadow&&n.setShadow(this.shadow),e.push(n)}var o=new fabric.Group(e,{originX:"center",originY:"center"})
o.canvas=this.canvas,this.canvas.add(o),this.canvas.fire("path:created",{path:o}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.renderAll()},addPoint:function(t){var e=new fabric.Point(t.x,t.y),i=fabric.util.getRandomInt(Math.max(0,this.width-20),this.width+20)/2,r=new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0,100)/100).toRgba()
return e.radius=i,e.fill=r,this.points.push(e),e}}),fabric.SprayBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,density:20,dotWidth:1,dotWidthVariance:1,randomOpacity:!1,optimizeOverlapping:!0,initialize:function(t){this.canvas=t,this.sprayChunks=[]},onMouseDown:function(t){this.sprayChunks.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.addSprayChunk(t),this.render()},onMouseMove:function(t){this.addSprayChunk(t),this.render()},onMouseUp:function(){var t=this.canvas.renderOnAddRemove
this.canvas.renderOnAddRemove=!1
for(var e=[],i=0,r=this.sprayChunks.length;i<r;i++)for(var s=this.sprayChunks[i],n=0,o=s.length;n<o;n++){var a=new fabric.Rect({width:s[n].width,height:s[n].width,left:s[n].x+1,top:s[n].y+1,originX:"center",originY:"center",fill:this.color})
this.shadow&&a.setShadow(this.shadow),e.push(a)}this.optimizeOverlapping&&(e=this._getOptimizedRects(e))
var h=new fabric.Group(e,{originX:"center",originY:"center"})
h.canvas=this.canvas,this.canvas.add(h),this.canvas.fire("path:created",{path:h}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.renderAll()},_getOptimizedRects:function(t){for(var e,i={},r=0,s=t.length;r<s;r++)i[e=t[r].left+""+t[r].top]||(i[e]=t[r])
var n=[]
for(e in i)n.push(i[e])
return n},render:function(){var t=this.canvas.contextTop
t.fillStyle=this.color
var e=this.canvas.viewportTransform
t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5])
for(var i=0,r=this.sprayChunkPoints.length;i<r;i++){var s=this.sprayChunkPoints[i]
void 0!==s.opacity&&(t.globalAlpha=s.opacity),t.fillRect(s.x,s.y,s.width,s.width)}t.restore()},addSprayChunk:function(t){this.sprayChunkPoints=[]
for(var e,i,r,s=this.width/2,n=0;n<this.density;n++){e=fabric.util.getRandomInt(t.x-s,t.x+s),i=fabric.util.getRandomInt(t.y-s,t.y+s),r=this.dotWidthVariance?fabric.util.getRandomInt(Math.max(1,this.dotWidth-this.dotWidthVariance),this.dotWidth+this.dotWidthVariance):this.dotWidth
var o=new fabric.Point(e,i)
o.width=r,this.randomOpacity&&(o.opacity=fabric.util.getRandomInt(0,100)/100),this.sprayChunkPoints.push(o)}this.sprayChunks.push(this.sprayChunkPoints)}}),fabric.PatternBrush=fabric.util.createClass(fabric.PencilBrush,{getPatternSrc:function(){var t=fabric.document.createElement("canvas"),e=t.getContext("2d")
return t.width=t.height=25,e.fillStyle=this.color,e.beginPath(),e.arc(10,10,10,0,2*Math.PI,!1),e.closePath(),e.fill(),t},getPatternSrcFunction:function(){return String(this.getPatternSrc).replace("this.color",'"'+this.color+'"')},getPattern:function(){return this.canvas.contextTop.createPattern(this.source||this.getPatternSrc(),"repeat")},_setBrushStyles:function(){this.callSuper("_setBrushStyles"),this.canvas.contextTop.strokeStyle=this.getPattern()},createPath:function(t){var e=this.callSuper("createPath",t),i=e._getLeftTopCoords().scalarAdd(e.strokeWidth/2)
return e.stroke=new fabric.Pattern({source:this.source||this.getPatternSrcFunction(),offsetX:-i.x,offsetY:-i.y}),e}}),function(){var t=fabric.util.getPointer,e=fabric.util.degreesToRadians,i=fabric.util.radiansToDegrees,r=Math.atan2,s=Math.abs,n=fabric.StaticCanvas.supports("setLineDash")
fabric.Canvas=fabric.util.createClass(fabric.StaticCanvas,{initialize:function(t,e){e||(e={}),this._initStatic(t,e),this._initInteractive(),this._createCacheCanvas()},uniScaleTransform:!1,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",interactive:!0,selection:!0,selectionKey:"shiftKey",altSelectionKey:null,selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",rotationCursor:"crosshair",containerClass:"canvas-container",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,isDrawingMode:!1,preserveObjectStacking:!1,snapAngle:0,snapThreshold:null,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEventListeners(),this._initRetinaScaling(),this.freeDrawingBrush=fabric.PencilBrush&&new fabric.PencilBrush(this),this.calcOffset()},_chooseObjectsToRender:function(){var t,e=this.getActiveGroup(),i=this.getActiveObject(),r=[],s=[]
if(!e&&!i||this.preserveObjectStacking)r=this._objects
else{for(var n=0,o=this._objects.length;n<o;n++)t=this._objects[n],e&&e.contains(t)||t===i?s.push(t):r.push(t)
e&&(e._set("_objects",s),r.push(e)),i&&r.push(i)}return r},renderAll:function(){!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1)
var t=this.contextContainer
return this.renderCanvas(t,this._chooseObjectsToRender()),this},renderTop:function(){var t=this.contextTop
return this.clearContext(t),this.selection&&this._groupSelector&&this._drawSelection(t),this.fire("after:render"),this.contextTopDirty=!0,this},_resetCurrentTransform:function(){var t=this._currentTransform
t.target.set({scaleX:t.original.scaleX,scaleY:t.original.scaleY,skewX:t.original.skewX,skewY:t.original.skewY,left:t.original.left,top:t.original.top}),this._shouldCenterTransform(t.target)?"rotate"===t.action?this._setOriginToCenter(t.target):("center"!==t.originX&&("right"===t.originX?t.mouseXSign=-1:t.mouseXSign=1),"center"!==t.originY&&("bottom"===t.originY?t.mouseYSign=-1:t.mouseYSign=1),t.originX="center",t.originY="center"):(t.originX=t.original.originX,t.originY=t.original.originY)},containsPoint:function(t,e,i){var r,s=i||this.getPointer(t,!0)
return r=e.group&&e.group===this.getActiveGroup()?this._normalizePointer(e.group,s):{x:s.x,y:s.y},e.containsPoint(r)||e._findTargetCorner(s)},_normalizePointer:function(t,e){var i=t.calcTransformMatrix(),r=fabric.util.invertTransform(i),s=this.restorePointerVpt(e)
return fabric.util.transformPoint(s,r)},isTargetTransparent:function(t,e,i){var r=t.hasBorders,s=t.transparentCorners,n=this.contextCache,o=t.selectionBackgroundColor
t.hasBorders=t.transparentCorners=!1,t.selectionBackgroundColor="",n.save(),n.transform.apply(n,this.viewportTransform),t.render(n),n.restore(),t.active&&t._renderControls(n),t.hasBorders=r,t.transparentCorners=s,t.selectionBackgroundColor=o
var a=fabric.util.isTransparent(n,e,i,this.targetFindTolerance)
return this.clearContext(n),a},_shouldClearSelection:function(t,e){var i=this.getActiveGroup(),r=this.getActiveObject()
return!e||e&&i&&!i.contains(e)&&i!==e&&!t[this.selectionKey]||e&&!e.evented||e&&!e.selectable&&r&&r!==e},_shouldCenterTransform:function(t){if(t){var e,i=this._currentTransform
return"scale"===i.action||"scaleX"===i.action||"scaleY"===i.action?e=this.centeredScaling||t.centeredScaling:"rotate"===i.action&&(e=this.centeredRotation||t.centeredRotation),e?!i.altKey:i.altKey}},_getOriginFromCorner:function(t,e){var i={x:t.originX,y:t.originY}
return"ml"===e||"tl"===e||"bl"===e?i.x="right":"mr"!==e&&"tr"!==e&&"br"!==e||(i.x="left"),"tl"===e||"mt"===e||"tr"===e?i.y="bottom":"bl"!==e&&"mb"!==e&&"br"!==e||(i.y="top"),i},_getActionFromCorner:function(t,e,i){if(!e)return"drag"
switch(e){case"mtr":return"rotate"
case"ml":case"mr":return i[this.altActionKey]?"skewY":"scaleX"
case"mt":case"mb":return i[this.altActionKey]?"skewX":"scaleY"
default:return"scale"}},_setupCurrentTransform:function(t,i){if(i){var r=this.getPointer(t),s=i._findTargetCorner(this.getPointer(t,!0)),n=this._getActionFromCorner(i,s,t),o=this._getOriginFromCorner(i,s)
this._currentTransform={target:i,action:n,corner:s,scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,offsetX:r.x-i.left,offsetY:r.y-i.top,originX:o.x,originY:o.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,left:i.left,top:i.top,theta:e(i.angle),width:i.width*i.scaleX,mouseXSign:1,mouseYSign:1,shiftKey:t.shiftKey,altKey:t[this.centeredKey]},this._currentTransform.original={left:i.left,top:i.top,scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,originX:o.x,originY:o.y},this._resetCurrentTransform()}},_translateObject:function(t,e){var i=this._currentTransform,r=i.target,s=t-i.offsetX,n=e-i.offsetY,o=!r.get("lockMovementX")&&r.left!==s,a=!r.get("lockMovementY")&&r.top!==n
return o&&r.set("left",s),a&&r.set("top",n),o||a},_changeSkewTransformOrigin:function(t,e,i){var r="originX",s={0:"center"},n=e.target.skewX,o="left",a="right",h="mt"===e.corner||"ml"===e.corner?1:-1,c=1
t=t>0?1:-1,"y"===i&&(n=e.target.skewY,o="top",a="bottom",r="originY"),s[-1]=o,s[1]=a,e.target.flipX&&(c*=-1),e.target.flipY&&(c*=-1),0===n?(e.skewSign=-h*t*c,e[r]=s[-t]):(n=n>0?1:-1,e.skewSign=n,e[r]=s[n*h*c])},_skewObject:function(t,e,i){var r,s=this._currentTransform,n=s.target,o=n.get("lockSkewingX"),a=n.get("lockSkewingY")
if(o&&"x"===i||a&&"y"===i)return!1
var h,c,l=n.getCenterPoint(),u=n.toLocalPoint(new fabric.Point(t,e),"center","center")[i],f=n.toLocalPoint(new fabric.Point(s.lastX,s.lastY),"center","center")[i],d=n._getTransformedDimensions()
return this._changeSkewTransformOrigin(u-f,s,i),h=n.toLocalPoint(new fabric.Point(t,e),s.originX,s.originY)[i],c=n.translateToOriginPoint(l,s.originX,s.originY),r=this._setObjectSkew(h,s,i,d),s.lastX=t,s.lastY=e,n.setPositionByOrigin(c,s.originX,s.originY),r},_setObjectSkew:function(t,e,i,r){var s,n,o,a,h,c,l,u,f,d,g=e.target,p=e.skewSign
return"x"===i?(h="y",c="Y",l="X",f=0,d=g.skewY):(h="x",c="X",l="Y",f=g.skewX,d=0),a=g._getTransformedDimensions(f,d),(u=2*Math.abs(t)-a[i])<=2?s=0:(s=p*Math.atan(u/g["scale"+l]/(a[h]/g["scale"+c])),s=fabric.util.radiansToDegrees(s)),n=g["skew"+l]!==s,g.set("skew"+l,s),0!==g["skew"+c]&&(o=g._getTransformedDimensions(),s=r[h]/o[h]*g["scale"+c],g.set("scale"+c,s)),n},_scaleObject:function(t,e,i){var r=this._currentTransform,s=r.target,n=s.get("lockScalingX"),o=s.get("lockScalingY"),a=s.get("lockScalingFlip")
if(n&&o)return!1
var h,c=s.translateToOriginPoint(s.getCenterPoint(),r.originX,r.originY),l=s.toLocalPoint(new fabric.Point(t,e),r.originX,r.originY),u=s._getTransformedDimensions()
return this._setLocalMouse(l,r),h=this._setObjectScale(l,r,n,o,i,a,u),s.setPositionByOrigin(c,r.originX,r.originY),h},_setObjectScale:function(t,e,i,r,s,n,o){var a,h,c,l,u=e.target,f=!1,d=!1,g=!1
return c=t.x*u.scaleX/o.x,l=t.y*u.scaleY/o.y,a=u.scaleX!==c,h=u.scaleY!==l,n&&c<=0&&c<u.scaleX&&(f=!0),n&&l<=0&&l<u.scaleY&&(d=!0),"equally"!==s||i||r?s?"x"!==s||u.get("lockUniScaling")?"y"!==s||u.get("lockUniScaling")||d||r||u.set("scaleY",l)&&(g=g||h):f||i||u.set("scaleX",c)&&(g=g||a):(f||i||u.set("scaleX",c)&&(g=g||a),d||r||u.set("scaleY",l)&&(g=g||h)):f||d||(g=this._scaleObjectEqually(t,u,e,o)),e.newScaleX=c,e.newScaleY=l,f||d||this._flipObject(e,s),g},_scaleObjectEqually:function(t,e,i,r){var s,n=t.y+t.x,o=r.y*i.original.scaleY/e.scaleY+r.x*i.original.scaleX/e.scaleX,a=t.x/Math.abs(t.x),h=t.y/Math.abs(t.y)
return i.newScaleX=a*Math.abs(i.original.scaleX*n/o),i.newScaleY=h*Math.abs(i.original.scaleY*n/o),s=i.newScaleX!==e.scaleX||i.newScaleY!==e.scaleY,e.set("scaleX",i.newScaleX),e.set("scaleY",i.newScaleY),s},_flipObject:function(t,e){t.newScaleX<0&&"y"!==e&&("left"===t.originX?t.originX="right":"right"===t.originX&&(t.originX="left")),t.newScaleY<0&&"x"!==e&&("top"===t.originY?t.originY="bottom":"bottom"===t.originY&&(t.originY="top"))},_setLocalMouse:function(t,e){var i=e.target,r=this.getZoom(),n=i.padding/r
"right"===e.originX?t.x*=-1:"center"===e.originX&&(t.x*=2*e.mouseXSign,t.x<0&&(e.mouseXSign=-e.mouseXSign)),"bottom"===e.originY?t.y*=-1:"center"===e.originY&&(t.y*=2*e.mouseYSign,t.y<0&&(e.mouseYSign=-e.mouseYSign)),s(t.x)>n?t.x<0?t.x+=n:t.x-=n:t.x=0,s(t.y)>n?t.y<0?t.y+=n:t.y-=n:t.y=0},_rotateObject:function(t,e){var s=this._currentTransform
if(s.target.get("lockRotation"))return!1
var n=r(s.ey-s.top,s.ex-s.left),o=r(e-s.top,t-s.left),a=i(o-n+s.theta),h=!0
if(s.target.snapAngle>0){var c=s.target.snapAngle,l=s.target.snapThreshold||c,u=Math.ceil(a/c)*c,f=Math.floor(a/c)*c
Math.abs(a-f)<l?a=f:Math.abs(a-u)<l&&(a=u)}return a<0&&(a=360+a),a%=360,s.target.angle===a?h=!1:s.target.angle=a,h},setCursor:function(t){this.upperCanvasEl.style.cursor=t},_resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.setAngle(0)},_drawSelection:function(t){var e=this._groupSelector,i=e.left,r=e.top,o=s(i),a=s(r)
if(this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(e.ex-(i>0?0:-i),e.ey-(r>0?0:-r),o,a)),this.selectionLineWidth&&this.selectionBorderColor)if(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,this.selectionDashArray.length>1&&!n){var h=e.ex+.5-(i>0?0:o),c=e.ey+.5-(r>0?0:a)
t.beginPath(),fabric.util.drawDashedLine(t,h,c,h+o,c,this.selectionDashArray),fabric.util.drawDashedLine(t,h,c+a-1,h+o,c+a-1,this.selectionDashArray),fabric.util.drawDashedLine(t,h,c,h,c+a,this.selectionDashArray),fabric.util.drawDashedLine(t,h+o-1,c,h+o-1,c+a,this.selectionDashArray),t.closePath(),t.stroke()}else fabric.Object.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(e.ex+.5-(i>0?0:o),e.ey+.5-(r>0?0:a),o,a)},findTarget:function(t,e){if(!this.skipTargetFind){var i,r,s=this.getPointer(t,!0),n=this.getActiveGroup(),o=this.getActiveObject()
if(this.targets=[],n&&!e&&n===this._searchPossibleTargets([n],s))return this._fireOverOutEvents(n,t),n
if(o&&o._findTargetCorner(s))return this._fireOverOutEvents(o,t),o
if(o&&o===this._searchPossibleTargets([o],s)){if(!this.preserveObjectStacking)return this._fireOverOutEvents(o,t),o
i=o,r=this.targets,this.targets=[]}var a=this._searchPossibleTargets(this._objects,s)
return t[this.altSelectionKey]&&a&&i&&a!==i&&(a=i,this.targets=r),this._fireOverOutEvents(a,t),a}},_fireOverOutEvents:function(t,e){var i,r,s=this._hoveredTarget
s!==t&&(i={e:e,target:t,previousTarget:this._hoveredTarget},r={e:e,target:this._hoveredTarget,nextTarget:t},this._hoveredTarget=t),t?s!==t&&(s&&(this.fire("mouse:out",r),s.fire("mouseout",r)),this.fire("mouse:over",i),t.fire("mouseover",i)):s&&(this.fire("mouse:out",r),s.fire("mouseout",r))},_checkTarget:function(t,e){if(e&&e.visible&&e.evented&&this.containsPoint(null,e,t)){if(!this.perPixelTargetFind&&!e.perPixelTargetFind||e.isEditing)return!0
if(!this.isTargetTransparent(e,t.x,t.y))return!0}},_searchPossibleTargets:function(t,e){for(var i,r,s,n=t.length;n--;)if(this._checkTarget(e,t[n])){"group"===(i=t[n]).type&&i.subTargetCheck&&(r=this._normalizePointer(i,e),(s=this._searchPossibleTargets(i._objects,r))&&this.targets.push(s))
break}return i},restorePointerVpt:function(t){return fabric.util.transformPoint(t,fabric.util.invertTransform(this.viewportTransform))},getPointer:function(e,i,r){r||(r=this.upperCanvasEl)
var s,n=t(e),o=r.getBoundingClientRect(),a=o.width||0,h=o.height||0
return a&&h||("top"in o&&"bottom"in o&&(h=Math.abs(o.top-o.bottom)),"right"in o&&"left"in o&&(a=Math.abs(o.right-o.left))),this.calcOffset(),n.x=n.x-this._offset.left,n.y=n.y-this._offset.top,i||(n=this.restorePointerVpt(n)),s=0===a||0===h?{width:1,height:1}:{width:r.width/a,height:r.height/h},{x:n.x*s.width,y:n.y*s.height}},_createUpperCanvas:function(){var t=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,"")
this.upperCanvasEl?this.upperCanvasEl.className="":this.upperCanvasEl=this._createCanvasElement(),fabric.util.addClass(this.upperCanvasEl,"upper-canvas "+t),this.wrapperEl.appendChild(this.upperCanvasEl),this._copyCanvasStyle(this.lowerCanvasEl,this.upperCanvasEl),this._applyCanvasStyle(this.upperCanvasEl),this.contextTop=this.upperCanvasEl.getContext("2d")},_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},_initWrapperElement:function(){this.wrapperEl=fabric.util.wrapElement(this.lowerCanvasEl,"div",{class:this.containerClass}),fabric.util.setStyle(this.wrapperEl,{width:this.getWidth()+"px",height:this.getHeight()+"px",position:"relative"}),fabric.util.makeElementUnselectable(this.wrapperEl)},_applyCanvasStyle:function(t){var e=this.getWidth()||t.width,i=this.getHeight()||t.height
fabric.util.setStyle(t,{position:"absolute",width:e+"px",height:i+"px",left:0,top:0,"touch-action":"none"}),t.width=e,t.height=i,fabric.util.makeElementUnselectable(t)},_copyCanvasStyle:function(t,e){e.style.cssText=t.style.cssText},getSelectionContext:function(){return this.contextTop},getSelectionElement:function(){return this.upperCanvasEl},_setActiveObject:function(t){var e=this._activeObject
e&&(e.set("active",!1),t!==e&&e.onDeselect&&"function"==typeof e.onDeselect&&e.onDeselect()),this._activeObject=t,t.set("active",!0)},setActiveObject:function(t,e){var i=this.getActiveObject()
return i&&i!==t&&i.fire("deselected",{e:e}),this._setActiveObject(t),this.fire("object:selected",{target:t,e:e}),t.fire("selected",{e:e}),this.renderAll(),this},getActiveObject:function(){return this._activeObject},_onObjectRemoved:function(t){this.getActiveObject()===t&&(this.fire("before:selection:cleared",{target:t}),this._discardActiveObject(),this.fire("selection:cleared",{target:t}),t.fire("deselected")),this._hoveredTarget===t&&(this._hoveredTarget=null),this.callSuper("_onObjectRemoved",t)},_discardActiveObject:function(){var t=this._activeObject
t&&(t.set("active",!1),t.onDeselect&&"function"==typeof t.onDeselect&&t.onDeselect()),this._activeObject=null},discardActiveObject:function(t){var e=this._activeObject
return e&&(this.fire("before:selection:cleared",{target:e,e:t}),this._discardActiveObject(),this.fire("selection:cleared",{e:t}),e.fire("deselected",{e:t})),this},_setActiveGroup:function(t){this._activeGroup=t,t&&t.set("active",!0)},setActiveGroup:function(t,e){return this._setActiveGroup(t),t&&(this.fire("object:selected",{target:t,e:e}),t.fire("selected",{e:e})),this},getActiveGroup:function(){return this._activeGroup},_discardActiveGroup:function(){var t=this.getActiveGroup()
t&&t.destroy(),this.setActiveGroup(null)},discardActiveGroup:function(t){var e=this.getActiveGroup()
return e&&(this.fire("before:selection:cleared",{e:t,target:e}),this._discardActiveGroup(),this.fire("selection:cleared",{e:t})),this},deactivateAll:function(){for(var t,e=this.getObjects(),i=0,r=e.length;i<r;i++)(t=e[i])&&t.set("active",!1)
return this._discardActiveGroup(),this._discardActiveObject(),this},deactivateAllWithDispatch:function(t){for(var e,i=this.getObjects(),r=0,s=i.length;r<s;r++)(e=i[r])&&e.set("active",!1)
return this.discardActiveGroup(t),this.discardActiveObject(t),this},dispose:function(){fabric.StaticCanvas.prototype.dispose.call(this)
var t=this.wrapperEl
return this.removeListeners(),t.removeChild(this.upperCanvasEl),t.removeChild(this.lowerCanvasEl),delete this.upperCanvasEl,t.parentNode&&t.parentNode.replaceChild(this.lowerCanvasEl,this.wrapperEl),delete this.wrapperEl,this},clear:function(){return this.discardActiveGroup(),this.discardActiveObject(),this.clearContext(this.contextTop),this.callSuper("clear")},drawControls:function(t){var e=this.getActiveGroup()
e?e._renderControls(t):this._drawObjectsControls(t)},_drawObjectsControls:function(t){for(var e=0,i=this._objects.length;e<i;++e)this._objects[e]&&this._objects[e].active&&this._objects[e]._renderControls(t)},_toObject:function(t,e,i){var r=this._realizeGroupTransformOnObject(t),s=this.callSuper("_toObject",t,e,i)
return this._unwindGroupTransformOnObject(t,r),s},_realizeGroupTransformOnObject:function(t){if(t.group&&t.group===this.getActiveGroup()){var e={}
return["angle","flipX","flipY","left","scaleX","scaleY","skewX","skewY","top"].forEach(function(i){e[i]=t[i]}),this.getActiveGroup().realizeTransform(t),e}return null},_unwindGroupTransformOnObject:function(t,e){e&&t.set(e)},_setSVGObject:function(t,e,i){var r
r=this._realizeGroupTransformOnObject(e),this.callSuper("_setSVGObject",t,e,i),this._unwindGroupTransformOnObject(e,r)}})
for(var o in fabric.StaticCanvas)"prototype"!==o&&(fabric.Canvas[o]=fabric.StaticCanvas[o])
fabric.isTouchSupported&&(fabric.Canvas.prototype._setCursorFromEvent=function(){}),fabric.Element=fabric.Canvas}(),function(){var t={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7},e=fabric.util.addListener,i=fabric.util.removeListener
function r(t,e){return"which"in t?t.which===e:t.button===e-1}fabric.util.object.extend(fabric.Canvas.prototype,{cursorMap:["n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize"],_initEventListeners:function(){this.removeListeners(),this._bindEvents(),e(fabric.window,"resize",this._onResize),e(this.upperCanvasEl,"mousedown",this._onMouseDown),e(this.upperCanvasEl,"mousemove",this._onMouseMove),e(this.upperCanvasEl,"mouseout",this._onMouseOut),e(this.upperCanvasEl,"mouseenter",this._onMouseEnter),e(this.upperCanvasEl,"wheel",this._onMouseWheel),e(this.upperCanvasEl,"contextmenu",this._onContextMenu),e(this.upperCanvasEl,"touchstart",this._onMouseDown,{passive:!1}),e(this.upperCanvasEl,"touchmove",this._onMouseMove,{passive:!1}),"undefined"!=typeof eventjs&&"add"in eventjs&&(eventjs.add(this.upperCanvasEl,"gesture",this._onGesture),eventjs.add(this.upperCanvasEl,"drag",this._onDrag),eventjs.add(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.add(this.upperCanvasEl,"shake",this._onShake),eventjs.add(this.upperCanvasEl,"longpress",this._onLongPress))},_bindEvents:function(){this.eventsBinded||(this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=this._onGesture.bind(this),this._onDrag=this._onDrag.bind(this),this._onShake=this._onShake.bind(this),this._onLongPress=this._onLongPress.bind(this),this._onOrientationChange=this._onOrientationChange.bind(this),this._onMouseWheel=this._onMouseWheel.bind(this),this._onMouseOut=this._onMouseOut.bind(this),this._onMouseEnter=this._onMouseEnter.bind(this),this._onContextMenu=this._onContextMenu.bind(this),this.eventsBinded=!0)},removeListeners:function(){i(fabric.window,"resize",this._onResize),i(this.upperCanvasEl,"mousedown",this._onMouseDown),i(this.upperCanvasEl,"mousemove",this._onMouseMove),i(this.upperCanvasEl,"mouseout",this._onMouseOut),i(this.upperCanvasEl,"mouseenter",this._onMouseEnter),i(this.upperCanvasEl,"wheel",this._onMouseWheel),i(this.upperCanvasEl,"contextmenu",this._onContextMenu),i(this.upperCanvasEl,"touchstart",this._onMouseDown),i(this.upperCanvasEl,"touchmove",this._onMouseMove),"undefined"!=typeof eventjs&&"remove"in eventjs&&(eventjs.remove(this.upperCanvasEl,"gesture",this._onGesture),eventjs.remove(this.upperCanvasEl,"drag",this._onDrag),eventjs.remove(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.remove(this.upperCanvasEl,"shake",this._onShake),eventjs.remove(this.upperCanvasEl,"longpress",this._onLongPress))},_onGesture:function(t,e){this.__onTransformGesture&&this.__onTransformGesture(t,e)},_onDrag:function(t,e){this.__onDrag&&this.__onDrag(t,e)},_onMouseWheel:function(t){this.__onMouseWheel(t)},_onMouseOut:function(t){var e=this._hoveredTarget
this.fire("mouse:out",{target:e,e:t}),this._hoveredTarget=null,e&&e.fire("mouseout",{e:t}),this._iTextInstances&&this._iTextInstances.forEach(function(t){t.isEditing&&t.hiddenTextarea.focus()})},_onMouseEnter:function(t){this.findTarget(t)||(this.fire("mouse:over",{target:null,e:t}),this._hoveredTarget=null)},_onOrientationChange:function(t,e){this.__onOrientationChange&&this.__onOrientationChange(t,e)},_onShake:function(t,e){this.__onShake&&this.__onShake(t,e)},_onLongPress:function(t,e){this.__onLongPress&&this.__onLongPress(t,e)},_onContextMenu:function(t){return this.stopContextMenu&&(t.stopPropagation(),t.preventDefault()),!1},_onMouseDown:function(t){this.__onMouseDown(t),e(fabric.document,"touchend",this._onMouseUp,{passive:!1}),e(fabric.document,"touchmove",this._onMouseMove,{passive:!1}),i(this.upperCanvasEl,"mousemove",this._onMouseMove),i(this.upperCanvasEl,"touchmove",this._onMouseMove),"touchstart"===t.type?i(this.upperCanvasEl,"mousedown",this._onMouseDown):(e(fabric.document,"mouseup",this._onMouseUp),e(fabric.document,"mousemove",this._onMouseMove))},_onMouseUp:function(t){if(this.__onMouseUp(t),i(fabric.document,"mouseup",this._onMouseUp),i(fabric.document,"touchend",this._onMouseUp),i(fabric.document,"mousemove",this._onMouseMove),i(fabric.document,"touchmove",this._onMouseMove),e(this.upperCanvasEl,"mousemove",this._onMouseMove),e(this.upperCanvasEl,"touchmove",this._onMouseMove,{passive:!1}),"touchend"===t.type){var r=this
setTimeout(function(){e(r.upperCanvasEl,"mousedown",r._onMouseDown)},400)}},_onMouseMove:function(t){!this.allowTouchScrolling&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)},_onResize:function(){this.calcOffset()},_shouldRender:function(t,e){var i=this.getActiveGroup()||this.getActiveObject()
return(!i||!i.isEditing||t!==i)&&!!(t&&(t.isMoving||t!==i)||!t&&i||!t&&!i&&!this._groupSelector||e&&this._previousPointer&&this.selection&&(e.x!==this._previousPointer.x||e.y!==this._previousPointer.y))},__onMouseUp:function(t){var e
if(r(t,3))this.fireRightClick&&this._handleEvent(t,"up",e,3)
else if(r(t,2))this.fireMiddleClick&&this._handleEvent(t,"up",e,2)
else if(this.isDrawingMode&&this._isCurrentlyDrawing)this._onMouseUpInDrawingMode(t)
else{var i=!0,s=this._currentTransform,n=this._groupSelector,o=!n||0===n.left&&0===n.top
s&&(this._finalizeCurrentTransform(t),i=!s.actionPerformed),e=i?this.findTarget(t,!0):s.target
var a=this._shouldRender(e,this.getPointer(t))
e||!o?this._maybeGroupObjects(t):(this._groupSelector=null,this._currentTransform=null),e&&(e.isMoving=!1),this._setCursorFromEvent(t,e),this._handleEvent(t,"up",e||null,1,o),e&&(e.__corner=0),a&&this.renderAll()}},_handleEvent:function(t,e,i,r,s){var n=void 0===i?this.findTarget(t):i,o=this.targets||[],a={e:t,target:n,subTargets:o,button:r||1,isClick:s||!1}
this.fire("mouse:"+e,a),n&&n.fire("mouse"+e,a)
for(var h=0;h<o.length;h++)o[h].fire("mouse"+e,a)},_finalizeCurrentTransform:function(t){var e=this._currentTransform,i=e.target
i._scaling&&(i._scaling=!1),i.setCoords(),this._restoreOriginXY(i),(e.actionPerformed||this.stateful&&i.hasStateChanged())&&(this.fire("object:modified",{target:i,e:t}),i.fire("modified",{e:t}))},_restoreOriginXY:function(t){if(this._previousOriginX&&this._previousOriginY){var e=t.translateToOriginPoint(t.getCenterPoint(),this._previousOriginX,this._previousOriginY)
t.originX=this._previousOriginX,t.originY=this._previousOriginY,t.left=e.x,t.top=e.y,this._previousOriginX=null,this._previousOriginY=null}},_onMouseDownInDrawingMode:function(t){this._isCurrentlyDrawing=!0,this.discardActiveObject(t).renderAll(),this.clipTo&&fabric.util.clipContext(this,this.contextTop)
var e=this.getPointer(t)
this.freeDrawingBrush.onMouseDown(e),this._handleEvent(t,"down")},_onMouseMoveInDrawingMode:function(t){if(this._isCurrentlyDrawing){var e=this.getPointer(t)
this.freeDrawingBrush.onMouseMove(e)}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")},_onMouseUpInDrawingMode:function(t){this._isCurrentlyDrawing=!1,this.clipTo&&this.contextTop.restore(),this.freeDrawingBrush.onMouseUp(),this._handleEvent(t,"up")},__onMouseDown:function(t){var e=this.findTarget(t)
if(r(t,3))this.fireRightClick&&this._handleEvent(t,"down",e||null,3)
else if(r(t,2))this.fireMiddleClick&&this._handleEvent(t,"down",e||null,2)
else if(this.isDrawingMode)this._onMouseDownInDrawingMode(t)
else if(!this._currentTransform){var i=this.getPointer(t,!0)
this._previousPointer=i
var s=this._shouldRender(e,i),n=this._shouldGroup(t,e)
if(this._shouldClearSelection(t,e)?this.deactivateAllWithDispatch(t):n&&(this._handleGrouping(t,e),e=this.getActiveGroup()),!this.selection||e&&(e.selectable||e.isEditing)||(this._groupSelector={ex:i.x,ey:i.y,top:0,left:0}),e){!e.selectable||!e.__corner&&n||(this._beforeTransform(t,e),this._setupCurrentTransform(t,e))
var o=this.getActiveObject()
e!==this.getActiveGroup()&&e!==o&&(this.deactivateAll(),e.selectable&&(o&&o.fire("deselected",{e:t}),this.setActiveObject(e,t)))}this._handleEvent(t,"down",e||null),s&&this.renderAll()}},_beforeTransform:function(t,e){this.stateful&&e.saveState(),e._findTargetCorner(this.getPointer(t))&&this.onBeforeScaleRotate(e)},_setOriginToCenter:function(t){this._previousOriginX=this._currentTransform.target.originX,this._previousOriginY=this._currentTransform.target.originY
var e=t.getCenterPoint()
t.originX="center",t.originY="center",t.left=e.x,t.top=e.y,this._currentTransform.left=t.left,this._currentTransform.top=t.top},_setCenterToOrigin:function(t){var e=t.translateToOriginPoint(t.getCenterPoint(),this._previousOriginX,this._previousOriginY)
t.originX=this._previousOriginX,t.originY=this._previousOriginY,t.left=e.x,t.top=e.y,this._previousOriginX=null,this._previousOriginY=null},__onMouseMove:function(t){var e,i
if(this.isDrawingMode)this._onMouseMoveInDrawingMode(t)
else if(!(void 0!==t.touches&&t.touches.length>1)){var r=this._groupSelector
r?(i=this.getPointer(t,!0),r.left=i.x-r.ex,r.top=i.y-r.ey,this.renderTop()):this._currentTransform?this._transformObject(t):(e=this.findTarget(t),this._setCursorFromEvent(t,e)),this._handleEvent(t,"move",e||null)}},__onMouseWheel:function(t){this._handleEvent(t,"wheel")},_transformObject:function(t){var e=this.getPointer(t),i=this._currentTransform
i.reset=!1,i.target.isMoving=!0,i.shiftKey=t.shiftKey,i.altKey=t[this.centeredKey],this._beforeScaleTransform(t,i),this._performTransformAction(t,i,e),i.actionPerformed&&this.renderAll()},_performTransformAction:function(t,e,i){var r=i.x,s=i.y,n=e.target,o=e.action,a=!1
"rotate"===o?(a=this._rotateObject(r,s))&&this._fire("rotating",n,t):"scale"===o?(a=this._onScale(t,e,r,s))&&this._fire("scaling",n,t):"scaleX"===o?(a=this._scaleObject(r,s,"x"))&&this._fire("scaling",n,t):"scaleY"===o?(a=this._scaleObject(r,s,"y"))&&this._fire("scaling",n,t):"skewX"===o?(a=this._skewObject(r,s,"x"))&&this._fire("skewing",n,t):"skewY"===o?(a=this._skewObject(r,s,"y"))&&this._fire("skewing",n,t):(a=this._translateObject(r,s))&&(this._fire("moving",n,t),this.setCursor(n.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||a},_fire:function(t,e,i){this.fire("object:"+t,{target:e,e:i}),e.fire(t,{e:i})},_beforeScaleTransform:function(t,e){if("scale"===e.action||"scaleX"===e.action||"scaleY"===e.action){var i=this._shouldCenterTransform(e.target);(i&&("center"!==e.originX||"center"!==e.originY)||!i&&"center"===e.originX&&"center"===e.originY)&&(this._resetCurrentTransform(),e.reset=!0)}},_onScale:function(t,e,i,r){return!t[this.uniScaleKey]&&!this.uniScaleTransform||e.target.get("lockUniScaling")?(e.reset||"scale"!==e.currentAction||this._resetCurrentTransform(),e.currentAction="scaleEqually",this._scaleObject(i,r,"equally")):(e.currentAction="scale",this._scaleObject(i,r))},_setCursorFromEvent:function(t,e){if(!e)return this.setCursor(this.defaultCursor),!1
var i=e.hoverCursor||this.hoverCursor,r=this.getActiveGroup(),s=e._findTargetCorner&&(!r||!r.contains(e))&&e._findTargetCorner(this.getPointer(t,!0))
return s?this._setCornerCursor(s,e,t):this.setCursor(i),!0},_setCornerCursor:function(e,i,r){if(e in t)this.setCursor(this._getRotatedCornerCursor(e,i,r))
else{if("mtr"!==e||!i.hasRotatingPoint)return this.setCursor(this.defaultCursor),!1
this.setCursor(this.rotationCursor)}},_getRotatedCornerCursor:function(e,i,r){var s=Math.round(i.getAngle()%360/45)
return s<0&&(s+=8),s+=t[e],r[this.altActionKey]&&t[e]%2==0&&(s+=2),s%=8,this.cursorMap[s]}})}(),function(){var t=Math.min,e=Math.max
fabric.util.object.extend(fabric.Canvas.prototype,{_shouldGroup:function(t,e){var i=this.getActiveObject()
return t[this.selectionKey]&&e&&e.selectable&&(this.getActiveGroup()||i&&i!==e)&&this.selection},_handleGrouping:function(t,e){var i=this.getActiveGroup();(e!==i||(e=this.findTarget(t,!0)))&&(i?this._updateActiveGroup(e,t):this._createActiveGroup(e,t),this._activeGroup&&this._activeGroup.saveCoords())},_updateActiveGroup:function(t,e){var i=this.getActiveGroup()
if(i.contains(t)){if(i.removeWithUpdate(t),t.set("active",!1),1===i.size())return this.discardActiveGroup(e),void this.setActiveObject(i.item(0),e)}else i.addWithUpdate(t)
this.fire("selection:created",{target:i,e:e}),i.set("active",!0)},_createActiveGroup:function(t,e){if(this._activeObject&&t!==this._activeObject){var i=this._createGroup(t)
i.addWithUpdate(),this.setActiveGroup(i,e),this._activeObject=null,this.fire("selection:created",{target:i,e:e})}t.set("active",!0)},_createGroup:function(t){var e=this.getObjects(),i=e.indexOf(this._activeObject)<e.indexOf(t)?[this._activeObject,t]:[t,this._activeObject]
return this._activeObject.isEditing&&this._activeObject.exitEditing(),new fabric.Group(i,{canvas:this})},_groupSelectedObjects:function(t){var e=this._collectObjects()
1===e.length?this.setActiveObject(e[0],t):e.length>1&&((e=new fabric.Group(e.reverse(),{canvas:this})).addWithUpdate(),this.setActiveGroup(e,t),e.saveCoords(),this.fire("selection:created",{target:e,e:t}),this.renderAll())},_collectObjects:function(){for(var i,r=[],s=this._groupSelector.ex,n=this._groupSelector.ey,o=s+this._groupSelector.left,a=n+this._groupSelector.top,h=new fabric.Point(t(s,o),t(n,a)),c=new fabric.Point(e(s,o),e(n,a)),l=s===o&&n===a,u=this._objects.length;u--&&!((i=this._objects[u])&&i.selectable&&i.visible&&(i.intersectsWithRect(h,c)||i.isContainedWithinRect(h,c)||i.containsPoint(h)||i.containsPoint(c))&&(i.set("active",!0),r.push(i),l)););return r},_maybeGroupObjects:function(t){this.selection&&this._groupSelector&&this._groupSelectedObjects(t)
var e=this.getActiveGroup()
e&&(e.setObjectsCoords().setCoords(),e.isMoving=!1,this.setCursor(this.defaultCursor)),this._groupSelector=null,this._currentTransform=null}})}(),function(){var t=fabric.StaticCanvas.supports("toDataURLWithQuality")
fabric.util.object.extend(fabric.StaticCanvas.prototype,{toDataURL:function(t){t||(t={})
var e=t.format||"png",i=t.quality||1,r=t.multiplier||1,s={left:t.left||0,top:t.top||0,width:t.width||0,height:t.height||0}
return this.__toDataURLWithMultiplier(e,i,s,r)},__toDataURLWithMultiplier:function(t,e,i,r){var s=this.getWidth(),n=this.getHeight(),o=(i.width||this.getWidth())*r,a=(i.height||this.getHeight())*r,h=this.getZoom()*r,c=this.viewportTransform,l=[h,0,0,h,(c[4]-i.left)*r,(c[5]-i.top)*r],u=this.interactive
this.viewportTransform=l,this.interactive&&(this.interactive=!1),s!==o||n!==a?this.setDimensions({width:o,height:a}):this.renderAll()
var f=this.__toDataURL(t,e,i)
return u&&(this.interactive=u),this.viewportTransform=c,this.setDimensions({width:s,height:n}),f},__toDataURL:function(e,i){var r=this.contextContainer.canvas
return"jpg"===e&&(e="jpeg"),t?r.toDataURL("image/"+e,i):r.toDataURL("image/"+e)},toDataURLWithMultiplier:function(t,e,i){return this.toDataURL({format:t,multiplier:e,quality:i})}})}()
fabric.util.object.extend(fabric.StaticCanvas.prototype,{loadFromDatalessJSON:function(t,e,i){return this.loadFromJSON(t,e,i)},loadFromJSON:function(t,e,i){if(t){var r="string"==typeof t?JSON.parse(t):fabric.util.object.clone(t),s=this,n=this.renderOnAddRemove
return this.renderOnAddRemove=!1,this._enlivenObjects(r.objects,function(t){s.clear(),s._setBgOverlay(r,function(){t.forEach(function(t,e){s.insertAt(t,e)}),s.renderOnAddRemove=n,delete r.objects,delete r.backgroundImage,delete r.overlayImage,delete r.background,delete r.overlay,s._setOptions(r),s.renderAll(),e&&e()})},i),this}},_setBgOverlay:function(t,e){var i={backgroundColor:!1,overlayColor:!1,backgroundImage:!1,overlayImage:!1}
if(t.backgroundImage||t.overlayImage||t.background||t.overlay){var r=function(){i.backgroundImage&&i.overlayImage&&i.backgroundColor&&i.overlayColor&&e&&e()}
this.__setBgOverlay("backgroundImage",t.backgroundImage,i,r),this.__setBgOverlay("overlayImage",t.overlayImage,i,r),this.__setBgOverlay("backgroundColor",t.background,i,r),this.__setBgOverlay("overlayColor",t.overlay,i,r)}else e&&e()},__setBgOverlay:function(t,e,i,r){var s=this
if(!e)return i[t]=!0,void(r&&r())
"backgroundImage"===t||"overlayImage"===t?fabric.util.enlivenObjects([e],function(e){s[t]=e[0],i[t]=!0,r&&r()}):this["set"+fabric.util.string.capitalize(t,!0)](e,function(){i[t]=!0,r&&r()})},_enlivenObjects:function(t,e,i){t&&0!==t.length?fabric.util.enlivenObjects(t,function(t){e&&e(t)},null,i):e&&e([])},_toDataURL:function(t,e){this.clone(function(i){e(i.toDataURL(t))})},_toDataURLWithMultiplier:function(t,e,i){this.clone(function(r){i(r.toDataURLWithMultiplier(t,e))})},clone:function(t,e){var i=JSON.stringify(this.toJSON(e))
this.cloneWithoutData(function(e){e.loadFromJSON(i,function(){t&&t(e)})})},cloneWithoutData:function(t){var e=fabric.document.createElement("canvas")
e.width=this.getWidth(),e.height=this.getHeight()
var i=new fabric.Canvas(e)
i.clipTo=this.clipTo,this.backgroundImage?(i.setBackgroundImage(this.backgroundImage.src,function(){i.renderAll(),t&&t(i)}),i.backgroundImageOpacity=this.backgroundImageOpacity,i.backgroundImageStretch=this.backgroundImageStretch):t&&t(i)}}),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.object.clone,s=e.util.toFixed,n=e.util.string.capitalize,o=e.util.degreesToRadians,a=e.StaticCanvas.supports("setLineDash"),h=!e.isLikelyNode
e.Object||(e.Object=e.util.createClass(e.CommonMethods,{type:"object",originX:"left",originY:"top",top:0,left:0,width:0,height:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,opacity:1,angle:0,skewX:0,skewY:0,cornerSize:13,transparentCorners:!0,hoverCursor:null,moveCursor:null,padding:0,borderColor:"rgba(102,153,255,0.75)",borderDashArray:null,cornerColor:"rgba(102,153,255,0.5)",cornerStrokeColor:null,cornerStyle:"rect",cornerDashArray:null,centeredScaling:!1,centeredRotation:!0,fill:"rgb(0,0,0)",fillRule:"nonzero",globalCompositeOperation:"source-over",backgroundColor:"",selectionBackgroundColor:"",stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,shadow:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,transformMatrix:null,minScaleLimit:.01,selectable:!0,evented:!0,visible:!0,hasControls:!0,hasBorders:!0,hasRotatingPoint:!0,rotatingPointOffset:40,perPixelTargetFind:!1,includeDefaultValues:!0,clipTo:null,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockUniScaling:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,excludeFromExport:!1,objectCaching:h,statefullCache:!1,noScaleCache:!0,dirty:!0,stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow clipTo visible backgroundColor skewX skewY fillRule".split(" "),cacheProperties:"fill stroke strokeWidth strokeDashArray width height strokeLineCap strokeLineJoin strokeMiterLimit backgroundColor".split(" "),initialize:function(t){(t=t||{})&&this.setOptions(t)},_createCacheCanvas:function(){this._cacheProperties={},this._cacheCanvas=e.document.createElement("canvas"),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas()},_limitCacheSize:function(t){var i=e.perfLimitSizeTotal,r=e.cacheSideLimit,s=t.width,n=t.height,o=s/n,a=e.util.limitDimsByArea(o,i,r),h=e.util.capValue,c=e.maxCacheSideLimit,l=e.minCacheSideLimit,u=h(l,a.x,c),f=h(l,a.y,c)
return s>u?(t.zoomX/=s/u,t.width=u):s<l&&(t.width=l),n>f?(t.zoomY/=n/f,t.height=f):n<l&&(t.height=l),t},_getCacheCanvasDimensions:function(){var t=this.canvas&&this.canvas.getZoom()||1,i=this.getObjectScaling(),r=this._getNonTransformedDimensions(),s=this.canvas&&this.canvas._isRetinaScaling()?e.devicePixelRatio:1,n=i.scaleX*t*s,o=i.scaleY*t*s
return{width:r.x*n+2,height:r.y*o+2,zoomX:n,zoomY:o}},_updateCacheCanvas:function(){if(this.noScaleCache&&this.canvas&&this.canvas._currentTransform){var t=this.canvas._currentTransform.action
if(t.slice&&"scale"===t.slice(0,5))return!1}var i=this._limitCacheSize(this._getCacheCanvasDimensions()),r=e.minCacheSideLimit,s=i.width,n=i.height,o=i.zoomX,a=i.zoomY,h=s!==this.cacheWidth||n!==this.cacheHeight,c=this.zoomX!==o||this.zoomY!==a,l=h||c,u=0,f=0,d=!1
if(h){var g=this._cacheCanvas.width,p=this._cacheCanvas.height,v=s>g||n>p
d=v||(s<.9*g||n<.9*p)&&g>r&&p>r,v&&(u=.1*s&-2,f=.1*n&-2)}return!!l&&(d?(this._cacheCanvas.width=Math.max(Math.ceil(s)+u,r),this._cacheCanvas.height=Math.max(Math.ceil(n)+f,r),this.cacheTranslationX=(s+u)/2,this.cacheTranslationY=(n+f)/2):(this._cacheContext.setTransform(1,0,0,1,0,0),this._cacheContext.clearRect(0,0,this._cacheCanvas.width,this._cacheCanvas.height)),this.cacheWidth=s,this.cacheHeight=n,this._cacheContext.translate(this.cacheTranslationX,this.cacheTranslationY),this._cacheContext.scale(o,a),this.zoomX=o,this.zoomY=a,!0)},setOptions:function(t){this._setOptions(t),this._initGradient(t.fill,"fill"),this._initGradient(t.stroke,"stroke"),this._initClipping(t),this._initPattern(t.fill,"fill"),this._initPattern(t.stroke,"stroke")},transform:function(t,e){this.group&&!this.group._transformDone&&this.group===this.canvas._activeGroup&&this.group.transform(t)
var i=e?this._getLeftTopCoords():this.getCenterPoint()
t.translate(i.x,i.y),this.angle&&t.rotate(o(this.angle)),t.scale(this.scaleX*(this.flipX?-1:1),this.scaleY*(this.flipY?-1:1)),this.skewX&&t.transform(1,0,Math.tan(o(this.skewX)),1,0,0),this.skewY&&t.transform(1,Math.tan(o(this.skewY)),0,1,0,0)},toObject:function(t){var i=e.Object.NUM_FRACTION_DIGITS,r={type:this.type,originX:this.originX,originY:this.originY,left:s(this.left,i),top:s(this.top,i),width:s(this.width,i),height:s(this.height,i),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:s(this.strokeWidth,i),strokeDashArray:this.strokeDashArray?this.strokeDashArray.concat():this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:s(this.strokeMiterLimit,i),scaleX:s(this.scaleX,i),scaleY:s(this.scaleY,i),angle:s(this.getAngle(),i),flipX:this.flipX,flipY:this.flipY,opacity:s(this.opacity,i),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,clipTo:this.clipTo&&String(this.clipTo),backgroundColor:this.backgroundColor,fillRule:this.fillRule,globalCompositeOperation:this.globalCompositeOperation,transformMatrix:this.transformMatrix?this.transformMatrix.concat():null,skewX:s(this.skewX,i),skewY:s(this.skewY,i)}
return e.util.populateWithProperties(this,r,t),this.includeDefaultValues||(r=this._removeDefaultValues(r)),r},toDatalessObject:function(t){return this.toObject(t)},_removeDefaultValues:function(t){var i=e.util.getKlass(t.type).prototype
return i.stateProperties.forEach(function(e){t[e]===i[e]&&delete t[e],"[object Array]"===Object.prototype.toString.call(t[e])&&"[object Array]"===Object.prototype.toString.call(i[e])&&0===t[e].length&&0===i[e].length&&delete t[e]}),t},toString:function(){return"#<fabric."+n(this.type)+">"},getObjectScaling:function(){var t=this.scaleX,e=this.scaleY
if(this.group){var i=this.group.getObjectScaling()
t*=i.scaleX,e*=i.scaleY}return{scaleX:t,scaleY:e}},_set:function(t,i){return("scaleX"===t||"scaleY"===t)&&(i=this._constrainScale(i)),"scaleX"===t&&i<0?(this.flipX=!this.flipX,i*=-1):"scaleY"===t&&i<0?(this.flipY=!this.flipY,i*=-1):"shadow"!==t||!i||i instanceof e.Shadow?"dirty"===t&&this.group&&this.group.set("dirty",i):i=new e.Shadow(i),this[t]=i,this.cacheProperties.indexOf(t)>-1&&(this.group&&this.group.set("dirty",!0),this.dirty=!0),this.group&&this.stateProperties.indexOf(t)>-1&&this.group.set("dirty",!0),"width"!==t&&"height"!==t||(this.minScaleLimit=Math.min(.1,1/Math.max(this.width,this.height))),this},setOnGroup:function(){},setSourcePath:function(t){return this.sourcePath=t,this},getViewportTransform:function(){return this.canvas&&this.canvas.viewportTransform?this.canvas.viewportTransform:e.iMatrix.concat()},isNotVisible:function(){return 0===this.opacity||0===this.width&&0===this.height||!this.visible},render:function(t,i){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),i||this.transform(t),this._setOpacity(t),this._setShadow(t),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this.clipTo&&e.util.clipContext(this,t),this.shouldCache(i)?(this._cacheCanvas||this._createCacheCanvas(),this.isCacheDirty(i)&&(this.statefullCache&&this.saveState({propertySet:"cacheProperties"}),this.drawObject(this._cacheContext,i),this.dirty=!1),this.drawCacheOnCanvas(t)):(this.dirty=!1,this.drawObject(t,i),i&&this.objectCaching&&this.statefullCache&&this.saveState({propertySet:"cacheProperties"})),this.clipTo&&t.restore(),t.restore())},needsItsOwnCache:function(){return!1},shouldCache:function(t){return!t&&this.objectCaching&&(!this.group||this.needsItsOwnCache()||!this.group.isCaching())},willDrawShadow:function(){return!!this.shadow&&(0!==this.shadow.offsetX||0!==this.shadow.offsetY)},drawObject:function(t,e){this._renderBackground(t),this._setStrokeStyles(t),this._setFillStyles(t),this._render(t,e)},drawCacheOnCanvas:function(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)},isCacheDirty:function(t){if(this.isNotVisible())return!1
if(this._cacheCanvas&&!t&&this._updateCacheCanvas())return!0
if(this.dirty||this.statefullCache&&this.hasStateChanged("cacheProperties")){if(this._cacheCanvas&&!t){var e=this.cacheWidth/this.zoomX,i=this.cacheHeight/this.zoomY
this._cacheContext.clearRect(-e/2,-i/2,e,i)}return!0}return!1},_renderBackground:function(t){if(this.backgroundColor){var e=this._getNonTransformedDimensions()
t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}},_setOpacity:function(t){t.globalAlpha*=this.opacity},_setStrokeStyles:function(t){this.stroke&&(t.lineWidth=this.strokeWidth,t.lineCap=this.strokeLineCap,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,t.strokeStyle=this.stroke.toLive?this.stroke.toLive(t,this):this.stroke)},_setFillStyles:function(t){this.fill&&(t.fillStyle=this.fill.toLive?this.fill.toLive(t,this):this.fill)},_setLineDash:function(t,e,i){e&&(1&e.length&&e.push.apply(e,e),a?t.setLineDash(e):i&&i(t))},_renderControls:function(t){if(this.active&&(!this.group||this.group===this.canvas.getActiveGroup())){var i,r=this.getViewportTransform(),s=this.calcTransformMatrix()
s=e.util.multiplyTransformMatrices(r,s),i=e.util.qrDecompose(s),t.save(),t.translate(i.translateX,i.translateY),t.lineWidth=1*this.borderScaleFactor,this.group||(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.group&&this.group===this.canvas.getActiveGroup()?(t.rotate(o(i.angle)),this.drawBordersInGroup(t,i)):(t.rotate(o(this.angle)),this.drawBorders(t)),this.drawControls(t),t.restore()}},_setShadow:function(t){if(this.shadow){var i=this.canvas&&this.canvas.viewportTransform[0]||1,r=this.canvas&&this.canvas.viewportTransform[3]||1,s=this.getObjectScaling()
this.canvas&&this.canvas._isRetinaScaling()&&(i*=e.devicePixelRatio,r*=e.devicePixelRatio),t.shadowColor=this.shadow.color,t.shadowBlur=this.shadow.blur*(i+r)*(s.scaleX+s.scaleY)/4,t.shadowOffsetX=this.shadow.offsetX*i*s.scaleX,t.shadowOffsetY=this.shadow.offsetY*r*s.scaleY}},_removeShadow:function(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)},_applyPatternGradientTransform:function(t,e){if(e.toLive){var i=e.gradientTransform||e.patternTransform
i&&t.transform.apply(t,i)
var r=-this.width/2+e.offsetX||0,s=-this.height/2+e.offsetY||0
t.translate(r,s)}},_renderFill:function(t){this.fill&&(t.save(),this._applyPatternGradientTransform(t,this.fill),"evenodd"===this.fillRule?t.fill("evenodd"):t.fill(),t.restore())},_renderStroke:function(t){this.stroke&&0!==this.strokeWidth&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray,this._renderDashedStroke),this._applyPatternGradientTransform(t,this.stroke),t.stroke(),t.restore())},clone:function(t,i){return this.constructor.fromObject?this.constructor.fromObject(this.toObject(i),t):new e.Object(this.toObject(i))},cloneAsImage:function(t,i){var r=this.toDataURL(i)
return e.util.loadImage(r,function(i){t&&t(new e.Image(i))}),this},toDataURL:function(t){t||(t={})
var i=e.util.createCanvasElement(),r=this.getBoundingRect()
i.width=r.width,i.height=r.height,e.util.wrapElement(i,"div")
var s=new e.StaticCanvas(i,{enableRetinaScaling:t.enableRetinaScaling})
"jpg"===t.format&&(t.format="jpeg"),"jpeg"===t.format&&(s.backgroundColor="#fff")
var n={active:this.get("active"),left:this.getLeft(),top:this.getTop()}
this.set("active",!1),this.setPositionByOrigin(new e.Point(s.getWidth()/2,s.getHeight()/2),"center","center")
var o=this.canvas
s.add(this)
var a=s.toDataURL(t)
return this.set(n).setCoords(),this.canvas=o,s.dispose(),s=null,a},isType:function(t){return this.type===t},complexity:function(){return 1},toJSON:function(t){return this.toObject(t)},setGradient:function(t,i){i||(i={})
var r={colorStops:[]}
return r.type=i.type||(i.r1||i.r2?"radial":"linear"),r.coords={x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2},(i.r1||i.r2)&&(r.coords.r1=i.r1,r.coords.r2=i.r2),r.gradientTransform=i.gradientTransform,e.Gradient.prototype.addColorStop.call(r,i.colorStops),this.set(t,e.Gradient.forObject(this,r))},setPatternFill:function(t){return this.set("fill",new e.Pattern(t))},setShadow:function(t){return this.set("shadow",t?new e.Shadow(t):null)},setColor:function(t){return this.set("fill",t),this},setAngle:function(t){var e=("center"!==this.originX||"center"!==this.originY)&&this.centeredRotation
return e&&this._setOriginToCenter(),this.set("angle",t),e&&this._resetOrigin(),this},centerH:function(){return this.canvas&&this.canvas.centerObjectH(this),this},viewportCenterH:function(){return this.canvas&&this.canvas.viewportCenterObjectH(this),this},centerV:function(){return this.canvas&&this.canvas.centerObjectV(this),this},viewportCenterV:function(){return this.canvas&&this.canvas.viewportCenterObjectV(this),this},center:function(){return this.canvas&&this.canvas.centerObject(this),this},viewportCenter:function(){return this.canvas&&this.canvas.viewportCenterObject(this),this},remove:function(){return this.canvas&&(this.group&&this.group===this.canvas._activeGroup&&this.group.remove(this),this.canvas.remove(this)),this},getLocalPointer:function(t,i){i=i||this.canvas.getPointer(t)
var r=new e.Point(i.x,i.y),s=this._getLeftTopCoords()
return this.angle&&(r=e.util.rotatePoint(r,s,o(-this.angle))),{x:r.x-s.x,y:r.y-s.y}},_setupCompositeOperation:function(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}}),e.util.createAccessors(e.Object),e.Object.prototype.rotate=e.Object.prototype.setAngle,i(e.Object.prototype,e.Observable),e.Object.NUM_FRACTION_DIGITS=2,e.Object._fromObject=function(t,i,s,n,o){var a=e[t]
if(i=r(i,!0),!n){var h=o?new a(i[o],i):new a(i)
return s&&s(h),h}e.util.enlivenPatterns([i.fill,i.stroke],function(t){void 0!==t[0]&&(i.fill=t[0]),void 0!==t[1]&&(i.stroke=t[1])
var e=o?new a(i[o],i):new a(i)
s&&s(e)})},e.Object.__uid=0)}("undefined"!=typeof exports?exports:this),function(){var t=fabric.util.degreesToRadians,e={left:-.5,center:0,right:.5},i={top:-.5,center:0,bottom:.5}
fabric.util.object.extend(fabric.Object.prototype,{translateToGivenOrigin:function(t,r,s,n,o){var a,h,c,l=t.x,u=t.y
return"string"==typeof r?r=e[r]:r-=.5,"string"==typeof n?n=e[n]:n-=.5,a=n-r,"string"==typeof s?s=i[s]:s-=.5,"string"==typeof o?o=i[o]:o-=.5,h=o-s,(a||h)&&(c=this._getTransformedDimensions(),l=t.x+a*c.x,u=t.y+h*c.y),new fabric.Point(l,u)},translateToCenterPoint:function(e,i,r){var s=this.translateToGivenOrigin(e,i,r,"center","center")
return this.angle?fabric.util.rotatePoint(s,e,t(this.angle)):s},translateToOriginPoint:function(e,i,r){var s=this.translateToGivenOrigin(e,"center","center",i,r)
return this.angle?fabric.util.rotatePoint(s,e,t(this.angle)):s},getCenterPoint:function(){var t=new fabric.Point(this.left,this.top)
return this.translateToCenterPoint(t,this.originX,this.originY)},getPointByOrigin:function(t,e){var i=this.getCenterPoint()
return this.translateToOriginPoint(i,t,e)},toLocalPoint:function(e,i,r){var s,n,o=this.getCenterPoint()
return s=void 0!==i&&void 0!==r?this.translateToGivenOrigin(o,"center","center",i,r):new fabric.Point(this.left,this.top),n=new fabric.Point(e.x,e.y),this.angle&&(n=fabric.util.rotatePoint(n,o,-t(this.angle))),n.subtractEquals(s)},setPositionByOrigin:function(t,e,i){var r=this.translateToCenterPoint(t,e,i),s=this.translateToOriginPoint(r,this.originX,this.originY)
this.set("left",s.x),this.set("top",s.y)},adjustPosition:function(i){var r,s,n=t(this.angle),o=this.getWidth(),a=Math.cos(n)*o,h=Math.sin(n)*o
r="string"==typeof this.originX?e[this.originX]:this.originX-.5,s="string"==typeof i?e[i]:i-.5,this.left+=a*(s-r),this.top+=h*(s-r),this.setCoords(),this.originX=i},_setOriginToCenter:function(){this._originalOriginX=this.originX,this._originalOriginY=this.originY
var t=this.getCenterPoint()
this.originX="center",this.originY="center",this.left=t.x,this.top=t.y},_resetOrigin:function(){var t=this.translateToOriginPoint(this.getCenterPoint(),this._originalOriginX,this._originalOriginY)
this.originX=this._originalOriginX,this.originY=this._originalOriginY,this.left=t.x,this.top=t.y,this._originalOriginX=null,this._originalOriginY=null},_getLeftTopCoords:function(){return this.translateToOriginPoint(this.getCenterPoint(),"left","top")},onDeselect:function(){}})}(),function(){var t=fabric.util.degreesToRadians,e=fabric.util.multiplyTransformMatrices
fabric.util.object.extend(fabric.Object.prototype,{oCoords:null,aCoords:null,getCoords:function(t,e){this.oCoords||this.setCoords()
var i,r=t?this.aCoords:this.oCoords
return i=e?this.calcCoords(t):r,[new fabric.Point(i.tl.x,i.tl.y),new fabric.Point(i.tr.x,i.tr.y),new fabric.Point(i.br.x,i.br.y),new fabric.Point(i.bl.x,i.bl.y)]},intersectsWithRect:function(t,e,i,r){var s=this.getCoords(i,r)
return"Intersection"===fabric.Intersection.intersectPolygonRectangle(s,t,e).status},intersectsWithObject:function(t,e,i){return"Intersection"===fabric.Intersection.intersectPolygonPolygon(this.getCoords(e,i),t.getCoords(e,i)).status||t.isContainedWithinObject(this,e,i)||this.isContainedWithinObject(t,e,i)},isContainedWithinObject:function(t,e,i){for(var r=this.getCoords(e,i),s=0,n=t._getImageLines(i?t.calcCoords(e):e?t.aCoords:t.oCoords);s<4;s++)if(!t.containsPoint(r[s],n))return!1
return!0},isContainedWithinRect:function(t,e,i,r){var s=this.getBoundingRect(i,r)
return s.left>=t.x&&s.left+s.width<=e.x&&s.top>=t.y&&s.top+s.height<=e.y},containsPoint:function(t,e,i,r){e=e||this._getImageLines(r?this.calcCoords(i):i?this.aCoords:this.oCoords)
var s=this._findCrossPoints(t,e)
return 0!==s&&s%2==1},isOnScreen:function(t){if(!this.canvas)return!1
for(var e,i=this.canvas.vptCoords.tl,r=this.canvas.vptCoords.br,s=this.getCoords(!0,t),n=0;n<4;n++)if((e=s[n]).x<=r.x&&e.x>=i.x&&e.y<=r.y&&e.y>=i.y)return!0
if(this.intersectsWithRect(i,r,!0))return!0
var o={x:(i.x+r.x)/2,y:(i.y+r.y)/2}
return!!this.containsPoint(o,null,!0)},_getImageLines:function(t){return{topline:{o:t.tl,d:t.tr},rightline:{o:t.tr,d:t.br},bottomline:{o:t.br,d:t.bl},leftline:{o:t.bl,d:t.tl}}},_findCrossPoints:function(t,e){var i,r,s,n,o=0
for(var a in e)if(!((n=e[a]).o.y<t.y&&n.d.y<t.y||n.o.y>=t.y&&n.d.y>=t.y||(n.o.x===n.d.x&&n.o.x>=t.x?s=n.o.x:(i=0,r=(n.d.y-n.o.y)/(n.d.x-n.o.x),s=-(t.y-i*t.x-(n.o.y-r*n.o.x))/(i-r)),s>=t.x&&(o+=1),2!==o)))break
return o},getBoundingRectWidth:function(){return this.getBoundingRect().width},getBoundingRectHeight:function(){return this.getBoundingRect().height},getBoundingRect:function(t,e){var i=this.getCoords(t,e)
return fabric.util.makeBoundingBoxFromPoints(i)},getWidth:function(){return this._getTransformedDimensions().x},getHeight:function(){return this._getTransformedDimensions().y},_constrainScale:function(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t},scale:function(t){return(t=this._constrainScale(t))<0&&(this.flipX=!this.flipX,this.flipY=!this.flipY,t*=-1),this.scaleX=t,this.scaleY=t,this.setCoords()},scaleToWidth:function(t){var e=this.getBoundingRect().width/this.getWidth()
return this.scale(t/this.width/e)},scaleToHeight:function(t){var e=this.getBoundingRect().height/this.getHeight()
return this.scale(t/this.height/e)},calcCoords:function(e){var i=t(this.angle),r=this.getViewportTransform(),s=e?this._getTransformedDimensions():this._calculateCurrentDimensions(),n=s.x,o=s.y,a=Math.sin(i),h=Math.cos(i),c=n>0?Math.atan(o/n):0,l=n/Math.cos(c)/2,u=Math.cos(c+i)*l,f=Math.sin(c+i)*l,d=this.getCenterPoint(),g=e?d:fabric.util.transformPoint(d,r),p=new fabric.Point(g.x-u,g.y-f),v=new fabric.Point(p.x+n*h,p.y+n*a),b=new fabric.Point(p.x-o*a,p.y+o*h),m=new fabric.Point(g.x+u,g.y+f)
if(!e)var _=new fabric.Point((p.x+b.x)/2,(p.y+b.y)/2),y=new fabric.Point((v.x+p.x)/2,(v.y+p.y)/2),x=new fabric.Point((m.x+v.x)/2,(m.y+v.y)/2),C=new fabric.Point((m.x+b.x)/2,(m.y+b.y)/2),S=new fabric.Point(y.x+a*this.rotatingPointOffset,y.y-h*this.rotatingPointOffset)
g={tl:p,tr:v,br:m,bl:b}
return e||(g.ml=_,g.mt=y,g.mr=x,g.mb=C,g.mtr=S),g},setCoords:function(t,e){return this.oCoords=this.calcCoords(t),e||(this.aCoords=this.calcCoords(!0)),t||this._setCornerCoords&&this._setCornerCoords(),this},_calcRotateMatrix:function(){if(this.angle){var e=t(this.angle),i=Math.cos(e),r=Math.sin(e)
return 6.123233995736766e-17!==i&&-1.8369701987210297e-16!==i||(i=0),[i,r,-r,i,0,0]}return fabric.iMatrix.concat()},calcTransformMatrix:function(t){var i,r,s=this.getCenterPoint(),n=[1,0,0,1,s.x,s.y],o=this._calcDimensionsTransformMatrix(this.skewX,this.skewY,!0)
return r=this.group&&!t?e(this.group.calcTransformMatrix(),n):n,this.angle&&(i=this._calcRotateMatrix(),r=e(r,i)),r=e(r,o)},_calcDimensionsTransformMatrix:function(i,r,s){var n,o=[this.scaleX*(s&&this.flipX?-1:1),0,0,this.scaleY*(s&&this.flipY?-1:1),0,0]
return i&&(n=[1,0,Math.tan(t(i)),1],o=e(o,n,!0)),r&&(n=[1,Math.tan(t(r)),0,1],o=e(o,n,!0)),o},_getNonTransformedDimensions:function(){var t=this.strokeWidth
return{x:this.width+t,y:this.height+t}},_getTransformedDimensions:function(t,e){void 0===t&&(t=this.skewX),void 0===e&&(e=this.skewY)
var i,r,s=this._getNonTransformedDimensions(),n=s.x/2,o=s.y/2,a=[{x:-n,y:-o},{x:n,y:-o},{x:-n,y:o},{x:n,y:o}],h=this._calcDimensionsTransformMatrix(t,e,!1)
for(i=0;i<a.length;i++)a[i]=fabric.util.transformPoint(a[i],h)
return{x:(r=fabric.util.makeBoundingBoxFromPoints(a)).width,y:r.height}},_calculateCurrentDimensions:function(){var t=this.getViewportTransform(),e=this._getTransformedDimensions()
return fabric.util.transformPoint(e,t,!0).scalarAdd(2*this.padding)}})}(),fabric.util.object.extend(fabric.Object.prototype,{sendToBack:function(){return this.group?fabric.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas.sendToBack(this),this},bringToFront:function(){return this.group?fabric.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas.bringToFront(this),this},sendBackwards:function(t){return this.group?fabric.StaticCanvas.prototype.sendBackwards.call(this.group,this,t):this.canvas.sendBackwards(this,t),this},bringForward:function(t){return this.group?fabric.StaticCanvas.prototype.bringForward.call(this.group,this,t):this.canvas.bringForward(this,t),this},moveTo:function(t){return this.group?fabric.StaticCanvas.prototype.moveTo.call(this.group,this,t):this.canvas.moveTo(this,t),this}}),function(){function t(t,e){if(e){if(e.toLive)return t+": url(#SVGID_"+e.id+"); "
var i=new fabric.Color(e),r=t+": "+i.toRgb()+"; ",s=i.getAlpha()
return 1!==s&&(r+=t+"-opacity: "+s.toString()+"; "),r}return t+": none; "}fabric.util.object.extend(fabric.Object.prototype,{getSvgStyles:function(e){var i=this.fillRule,r=this.strokeWidth?this.strokeWidth:"0",s=this.strokeDashArray?this.strokeDashArray.join(" "):"none",n=this.strokeLineCap?this.strokeLineCap:"butt",o=this.strokeLineJoin?this.strokeLineJoin:"miter",a=this.strokeMiterLimit?this.strokeMiterLimit:"4",h=void 0!==this.opacity?this.opacity:"1",c=this.visible?"":" visibility: hidden;",l=e?"":this.getSvgFilter(),u=t("fill",this.fill)
return[t("stroke",this.stroke),"stroke-width: ",r,"; ","stroke-dasharray: ",s,"; ","stroke-linecap: ",n,"; ","stroke-linejoin: ",o,"; ","stroke-miterlimit: ",a,"; ",u,"fill-rule: ",i,"; ","opacity: ",h,";",l,c].join("")},getSvgFilter:function(){return this.shadow?"filter: url(#SVGID_"+this.shadow.id+");":""},getSvgId:function(){return this.id?'id="'+this.id+'" ':""},getSvgTransform:function(){if(this.group&&"path-group"===this.group.type)return""
var t=fabric.util.toFixed,e=this.getAngle(),i=this.getSkewX()%360,r=this.getSkewY()%360,s=this.getCenterPoint(),n=fabric.Object.NUM_FRACTION_DIGITS,o="path-group"===this.type?"":"translate("+t(s.x,n)+" "+t(s.y,n)+")",a=0!==e?" rotate("+t(e,n)+")":"",h=1===this.scaleX&&1===this.scaleY?"":" scale("+t(this.scaleX,n)+" "+t(this.scaleY,n)+")",c=0!==i?" skewX("+t(i,n)+")":"",l=0!==r?" skewY("+t(r,n)+")":"",u="path-group"===this.type?this.width:0,f=this.flipX?" matrix(-1 0 0 1 "+u+" 0) ":"",d="path-group"===this.type?this.height:0
return[o,a,h,f,this.flipY?" matrix(1 0 0 -1 0 "+d+")":"",c,l].join("")},getSvgTransformMatrix:function(){return this.transformMatrix?" matrix("+this.transformMatrix.join(" ")+") ":""},_createBaseSVGMarkup:function(){var t=[]
return this.fill&&this.fill.toLive&&t.push(this.fill.toSVG(this,!1)),this.stroke&&this.stroke.toLive&&t.push(this.stroke.toSVG(this,!1)),this.shadow&&t.push(this.shadow.toSVG(this)),t}})}(),function(){var t=fabric.util.object.extend,e="stateProperties"
function i(e,i,r){var s={}
r.forEach(function(t){s[t]=e[t]}),t(e[i],s,!0)}fabric.util.object.extend(fabric.Object.prototype,{hasStateChanged:function(t){var i="_"+(t=t||e)
return Object.keys(this[i]).length<this[t].length||!function t(e,i,r){if(e===i)return!0
if(Array.isArray(e)){if(e.length!==i.length)return!1
for(var s=0,n=e.length;s<n;s++)if(!t(e[s],i[s]))return!1
return!0}if(e&&"object"==typeof e){var o,a=Object.keys(e)
if(!r&&a.length!==Object.keys(i).length)return!1
for(s=0,n=a.length;s<n;s++)if(!t(e[o=a[s]],i[o]))return!1
return!0}}(this[i],this,!0)},saveState:function(t){var r=t&&t.propertySet||e,s="_"+r
return this[s]?(i(this,s,this[r]),t&&t.stateProperties&&i(this,s,t.stateProperties),this):this.setupState(t)},setupState:function(t){var i=(t=t||{}).propertySet||e
return t.propertySet=i,this["_"+i]={},this.saveState(t),this}})}(),function(){var t=fabric.util.degreesToRadians
fabric.util.object.extend(fabric.Object.prototype,{_controlsVisibility:null,_findTargetCorner:function(t){if(!this.hasControls||!this.active)return!1
var e,i,r=t.x,s=t.y
this.__corner=0
for(var n in this.oCoords)if(this.isControlVisible(n)&&("mtr"!==n||this.hasRotatingPoint)&&(!this.get("lockUniScaling")||"mt"!==n&&"mr"!==n&&"mb"!==n&&"ml"!==n)&&(i=this._getImageLines(this.oCoords[n].corner),0!==(e=this._findCrossPoints({x:r,y:s},i))&&e%2==1))return this.__corner=n,n
return!1},_setCornerCoords:function(){var e,i,r=this.oCoords,s=t(45-this.angle),n=.707106*this.cornerSize,o=n*Math.cos(s),a=n*Math.sin(s)
for(var h in r)e=r[h].x,i=r[h].y,r[h].corner={tl:{x:e-a,y:i-o},tr:{x:e+o,y:i-a},bl:{x:e-o,y:i+a},br:{x:e+a,y:i+o}}},drawSelectionBackground:function(e){if(!this.selectionBackgroundColor||this.group||!this.active||this.canvas&&!this.canvas.interactive)return this
e.save()
var i=this.getCenterPoint(),r=this._calculateCurrentDimensions(),s=this.canvas.viewportTransform
return e.translate(i.x,i.y),e.scale(1/s[0],1/s[3]),e.rotate(t(this.angle)),e.fillStyle=this.selectionBackgroundColor,e.fillRect(-r.x/2,-r.y/2,r.x,r.y),e.restore(),this},drawBorders:function(t){if(!this.hasBorders)return this
var e=this._calculateCurrentDimensions(),i=1/this.borderScaleFactor,r=e.x+i,s=e.y+i
if(t.save(),t.strokeStyle=this.borderColor,this._setLineDash(t,this.borderDashArray,null),t.strokeRect(-r/2,-s/2,r,s),this.hasRotatingPoint&&this.isControlVisible("mtr")&&!this.get("lockRotation")&&this.hasControls){var n=-s/2
t.beginPath(),t.moveTo(0,n),t.lineTo(0,n-this.rotatingPointOffset),t.closePath(),t.stroke()}return t.restore(),this},drawBordersInGroup:function(t,e){if(!this.hasBorders)return this
var i=this._getNonTransformedDimensions(),r=fabric.util.customTransformMatrix(e.scaleX,e.scaleY,e.skewX),s=fabric.util.transformPoint(i,r),n=1/this.borderScaleFactor,o=s.x+n,a=s.y+n
return t.save(),this._setLineDash(t,this.borderDashArray,null),t.strokeStyle=this.borderColor,t.strokeRect(-o/2,-a/2,o,a),t.restore(),this},drawControls:function(t){if(!this.hasControls)return this
var e=this._calculateCurrentDimensions(),i=e.x,r=e.y,s=this.cornerSize,n=-(i+s)/2,o=-(r+s)/2,a=this.transparentCorners?"stroke":"fill"
return t.save(),t.strokeStyle=t.fillStyle=this.cornerColor,this.transparentCorners||(t.strokeStyle=this.cornerStrokeColor),this._setLineDash(t,this.cornerDashArray,null),this._drawControl("tl",t,a,n,o),this._drawControl("tr",t,a,n+i,o),this._drawControl("bl",t,a,n,o+r),this._drawControl("br",t,a,n+i,o+r),this.get("lockUniScaling")||(this._drawControl("mt",t,a,n+i/2,o),this._drawControl("mb",t,a,n+i/2,o+r),this._drawControl("mr",t,a,n+i,o+r/2),this._drawControl("ml",t,a,n,o+r/2)),this.hasRotatingPoint&&this._drawControl("mtr",t,a,n+i/2,o-this.rotatingPointOffset),t.restore(),this},_drawControl:function(t,e,i,r,s){if(this.isControlVisible(t)){var n=this.cornerSize,o=!this.transparentCorners&&this.cornerStrokeColor
switch(this.cornerStyle){case"circle":e.beginPath(),e.arc(r+n/2,s+n/2,n/2,0,2*Math.PI,!1),e[i](),o&&e.stroke()
break
default:"undefined"!=typeof G_vmlCanvasManager||this.transparentCorners||e.clearRect(r,s,n,n),e[i+"Rect"](r,s,n,n),o&&e.strokeRect(r,s,n,n)}}},isControlVisible:function(t){return this._getControlsVisibility()[t]},setControlVisible:function(t,e){return this._getControlsVisibility()[t]=e,this},setControlsVisibility:function(t){t||(t={})
for(var e in t)this.setControlVisible(e,t[e])
return this},_getControlsVisibility:function(){return this._controlsVisibility||(this._controlsVisibility={tl:!0,tr:!0,br:!0,bl:!0,ml:!0,mt:!0,mr:!0,mb:!0,mtr:!0}),this._controlsVisibility}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{FX_DURATION:500,fxCenterObjectH:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,s=e.onChange||i,n=this
return fabric.util.animate({startValue:t.get("left"),endValue:this.getCenter().left,duration:this.FX_DURATION,onChange:function(e){t.set("left",e),n.renderAll(),s()},onComplete:function(){t.setCoords(),r()}}),this},fxCenterObjectV:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,s=e.onChange||i,n=this
return fabric.util.animate({startValue:t.get("top"),endValue:this.getCenter().top,duration:this.FX_DURATION,onChange:function(e){t.set("top",e),n.renderAll(),s()},onComplete:function(){t.setCoords(),r()}}),this},fxRemove:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,s=e.onChange||i,n=this
return fabric.util.animate({startValue:t.get("opacity"),endValue:0,duration:this.FX_DURATION,onStart:function(){t.set("active",!1)},onChange:function(e){t.set("opacity",e),n.renderAll(),s()},onComplete:function(){n.remove(t),r()}}),this}}),fabric.util.object.extend(fabric.Object.prototype,{animate:function(){if(arguments[0]&&"object"==typeof arguments[0]){var t,e,i=[]
for(t in arguments[0])i.push(t)
for(var r=0,s=i.length;r<s;r++)t=i[r],e=r!==s-1,this._animate(t,arguments[0][t],arguments[1],e)}else this._animate.apply(this,arguments)
return this},_animate:function(t,e,i,r){var s,n=this
e=e.toString(),i=i?fabric.util.object.clone(i):{},~t.indexOf(".")&&(s=t.split("."))
var o=s?this.get(s[0])[s[1]]:this.get(t)
"from"in i||(i.from=o),e=~e.indexOf("=")?o+parseFloat(e.replace("=","")):parseFloat(e),fabric.util.animate({startValue:i.from,endValue:e,byValue:i.by,easing:i.easing,duration:i.duration,abort:i.abort&&function(){return i.abort.call(n)},onChange:function(e,o,a){s?n[s[0]][s[1]]=e:n.set(t,e),r||i.onChange&&i.onChange(e,o,a)},onComplete:function(t,e,s){r||(n.setCoords(),i.onComplete&&i.onComplete(t,e,s))}})}}),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.object.clone,s={x1:1,x2:1,y1:1,y2:1},n=e.StaticCanvas.supports("setLineDash")
if(e.Line)e.warn("fabric.Line is already defined")
else{var o=e.Object.prototype.cacheProperties.concat()
o.push("x1","x2","y1","y2"),e.Line=e.util.createClass(e.Object,{type:"line",x1:0,y1:0,x2:0,y2:0,cacheProperties:o,initialize:function(t,e){t||(t=[0,0,0,0]),this.callSuper("initialize",e),this.set("x1",t[0]),this.set("y1",t[1]),this.set("x2",t[2]),this.set("y2",t[3]),this._setWidthHeight(e)},_setWidthHeight:function(t){t||(t={}),this.width=Math.abs(this.x2-this.x1),this.height=Math.abs(this.y2-this.y1),this.left="left"in t?t.left:this._getLeftToOriginX(),this.top="top"in t?t.top:this._getTopToOriginY()},_set:function(t,e){return this.callSuper("_set",t,e),void 0!==s[t]&&this._setWidthHeight(),this},_getLeftToOriginX:a({origin:"originX",axis1:"x1",axis2:"x2",dimension:"width"},{nearest:"left",center:"center",farthest:"right"}),_getTopToOriginY:a({origin:"originY",axis1:"y1",axis2:"y2",dimension:"height"},{nearest:"top",center:"center",farthest:"bottom"}),_render:function(t,e){if(t.beginPath(),e){var i=this.getCenterPoint(),r=this.strokeWidth/2
t.translate(i.x-("butt"===this.strokeLineCap&&0===this.height?0:r),i.y-("butt"===this.strokeLineCap&&0===this.width?0:r))}if(!this.strokeDashArray||this.strokeDashArray&&n){var s=this.calcLinePoints()
t.moveTo(s.x1,s.y1),t.lineTo(s.x2,s.y2)}t.lineWidth=this.strokeWidth
var o=t.strokeStyle
t.strokeStyle=this.stroke||t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=o},_renderDashedStroke:function(t){var i=this.calcLinePoints()
t.beginPath(),e.util.drawDashedLine(t,i.x1,i.y1,i.x2,i.y2,this.strokeDashArray),t.closePath()},toObject:function(t){return i(this.callSuper("toObject",t),this.calcLinePoints())},_getNonTransformedDimensions:function(){var t=this.callSuper("_getNonTransformedDimensions")
return"butt"===this.strokeLineCap&&(0===this.width&&(t.y-=this.strokeWidth),0===this.height&&(t.x-=this.strokeWidth)),t},calcLinePoints:function(){var t=this.x1<=this.x2?-1:1,e=this.y1<=this.y2?-1:1,i=t*this.width*.5,r=e*this.height*.5
return{x1:i,x2:t*this.width*-.5,y1:r,y2:e*this.height*-.5}},toSVG:function(t){var e=this._createBaseSVGMarkup(),i={x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2}
return this.group&&"path-group"===this.group.type||(i=this.calcLinePoints()),e.push("<line ",this.getSvgId(),'x1="',i.x1,'" y1="',i.y1,'" x2="',i.x2,'" y2="',i.y2,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")}}),e.Line.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),e.Line.fromElement=function(t,r){r=r||{}
var s=e.parseAttributes(t,e.Line.ATTRIBUTE_NAMES),n=[s.x1||0,s.y1||0,s.x2||0,s.y2||0]
return r.originX="left",r.originY="top",new e.Line(n,i(s,r))},e.Line.fromObject=function(t,i,s){var n=r(t,!0)
n.points=[t.x1,t.y1,t.x2,t.y2]
var o=e.Object._fromObject("Line",n,function(t){delete t.points,i&&i(t)},s,"points")
return o&&delete o.points,o}}function a(t,e){var i=t.origin,r=t.axis1,s=t.axis2,n=t.dimension,o=e.nearest,a=e.center,h=e.farthest
return function(){switch(this.get(i)){case o:return Math.min(this.get(r),this.get(s))
case a:return Math.min(this.get(r),this.get(s))+.5*this.get(n)
case h:return Math.max(this.get(r),this.get(s))}}}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=Math.PI,r=e.util.object.extend
if(e.Circle)e.warn("fabric.Circle is already defined.")
else{var s=e.Object.prototype.cacheProperties.concat()
s.push("radius"),e.Circle=e.util.createClass(e.Object,{type:"circle",radius:0,startAngle:0,endAngle:2*i,cacheProperties:s,initialize:function(t){this.callSuper("initialize",t),this.set("radius",t&&t.radius||0)},_set:function(t,e){return this.callSuper("_set",t,e),"radius"===t&&this.setRadius(e),this},toObject:function(t){return this.callSuper("toObject",["radius","startAngle","endAngle"].concat(t))},toSVG:function(t){var e=this._createBaseSVGMarkup(),r=0,s=0,n=(this.endAngle-this.startAngle)%(2*i)
if(0===n)this.group&&"path-group"===this.group.type&&(r=this.left+this.radius,s=this.top+this.radius),e.push("<circle ",this.getSvgId(),'cx="'+r+'" cy="'+s+'" ','r="',this.radius,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n')
else{var o=Math.cos(this.startAngle)*this.radius,a=Math.sin(this.startAngle)*this.radius,h=Math.cos(this.endAngle)*this.radius,c=Math.sin(this.endAngle)*this.radius,l=n>i?"1":"0"
e.push('<path d="M '+o+" "+a," A "+this.radius+" "+this.radius," 0 ",+l+" 1"," "+h+" "+c,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n')}return t?t(e.join("")):e.join("")},_render:function(t,e){t.beginPath(),t.arc(e?this.left+this.radius:0,e?this.top+this.radius:0,this.radius,this.startAngle,this.endAngle,!1),this._renderFill(t),this._renderStroke(t)},getRadiusX:function(){return this.get("radius")*this.get("scaleX")},getRadiusY:function(){return this.get("radius")*this.get("scaleY")},setRadius:function(t){return this.radius=t,this.set("width",2*t).set("height",2*t)}}),e.Circle.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),e.Circle.fromElement=function(t,i){i||(i={})
var s,n=e.parseAttributes(t,e.Circle.ATTRIBUTE_NAMES)
if(!("radius"in(s=n)&&s.radius>=0))throw new Error("value of `r` attribute is required and can not be negative")
n.left=n.left||0,n.top=n.top||0
var o=new e.Circle(r(n,i))
return o.left-=o.radius,o.top-=o.radius,o},e.Circle.fromObject=function(t,i,r){return e.Object._fromObject("Circle",t,i,r)}}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={})
e.Triangle?e.warn("fabric.Triangle is already defined"):(e.Triangle=e.util.createClass(e.Object,{type:"triangle",initialize:function(t){this.callSuper("initialize",t),this.set("width",t&&t.width||100).set("height",t&&t.height||100)},_render:function(t){var e=this.width/2,i=this.height/2
t.beginPath(),t.moveTo(-e,i),t.lineTo(0,-i),t.lineTo(e,i),t.closePath(),this._renderFill(t),this._renderStroke(t)},_renderDashedStroke:function(t){var i=this.width/2,r=this.height/2
t.beginPath(),e.util.drawDashedLine(t,-i,r,0,-r,this.strokeDashArray),e.util.drawDashedLine(t,0,-r,i,r,this.strokeDashArray),e.util.drawDashedLine(t,i,r,-i,r,this.strokeDashArray),t.closePath()},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=this.width/2,r=this.height/2,s=[-i+" "+r,"0 "+-r,i+" "+r].join(",")
return e.push("<polygon ",this.getSvgId(),'points="',s,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),t?t(e.join("")):e.join("")}}),e.Triangle.fromObject=function(t,i,r){return e.Object._fromObject("Triangle",t,i,r)})}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=2*Math.PI,r=e.util.object.extend
if(e.Ellipse)e.warn("fabric.Ellipse is already defined.")
else{var s=e.Object.prototype.cacheProperties.concat()
s.push("rx","ry"),e.Ellipse=e.util.createClass(e.Object,{type:"ellipse",rx:0,ry:0,cacheProperties:s,initialize:function(t){this.callSuper("initialize",t),this.set("rx",t&&t.rx||0),this.set("ry",t&&t.ry||0)},_set:function(t,e){switch(this.callSuper("_set",t,e),t){case"rx":this.rx=e,this.set("width",2*e)
break
case"ry":this.ry=e,this.set("height",2*e)}return this},getRx:function(){return this.get("rx")*this.get("scaleX")},getRy:function(){return this.get("ry")*this.get("scaleY")},toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=0,r=0
return this.group&&"path-group"===this.group.type&&(i=this.left+this.rx,r=this.top+this.ry),e.push("<ellipse ",this.getSvgId(),'cx="',i,'" cy="',r,'" ','rx="',this.rx,'" ry="',this.ry,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")},_render:function(t,e){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(e?this.left+this.rx:0,e?(this.top+this.ry)*this.rx/this.ry:0,this.rx,0,i,!1),t.restore(),this._renderFill(t),this._renderStroke(t)}}),e.Ellipse.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),e.Ellipse.fromElement=function(t,i){i||(i={})
var s=e.parseAttributes(t,e.Ellipse.ATTRIBUTE_NAMES)
s.left=s.left||0,s.top=s.top||0
var n=new e.Ellipse(r(s,i))
return n.top-=n.ry,n.left-=n.rx,n},e.Ellipse.fromObject=function(t,i,r){return e.Object._fromObject("Ellipse",t,i,r)}}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend
if(e.Rect)e.warn("fabric.Rect is already defined")
else{var r=e.Object.prototype.stateProperties.concat()
r.push("rx","ry")
var s=e.Object.prototype.cacheProperties.concat()
s.push("rx","ry"),e.Rect=e.util.createClass(e.Object,{stateProperties:r,type:"rect",rx:0,ry:0,cacheProperties:s,initialize:function(t){this.callSuper("initialize",t),this._initRxRy()},_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},_render:function(t,e){if(1!==this.width||1!==this.height){var i=this.rx?Math.min(this.rx,this.width/2):0,r=this.ry?Math.min(this.ry,this.height/2):0,s=this.width,n=this.height,o=e?this.left:-this.width/2,a=e?this.top:-this.height/2,h=0!==i||0!==r,c=.4477152502
t.beginPath(),t.moveTo(o+i,a),t.lineTo(o+s-i,a),h&&t.bezierCurveTo(o+s-c*i,a,o+s,a+c*r,o+s,a+r),t.lineTo(o+s,a+n-r),h&&t.bezierCurveTo(o+s,a+n-c*r,o+s-c*i,a+n,o+s-i,a+n),t.lineTo(o+i,a+n),h&&t.bezierCurveTo(o+c*i,a+n,o,a+n-c*r,o,a+n-r),t.lineTo(o,a+r),h&&t.bezierCurveTo(o,a+c*r,o+c*i,a,o+i,a),t.closePath(),this._renderFill(t),this._renderStroke(t)}else t.fillRect(-.5,-.5,1,1)},_renderDashedStroke:function(t){var i=-this.width/2,r=-this.height/2,s=this.width,n=this.height
t.beginPath(),e.util.drawDashedLine(t,i,r,i+s,r,this.strokeDashArray),e.util.drawDashedLine(t,i+s,r,i+s,r+n,this.strokeDashArray),e.util.drawDashedLine(t,i+s,r+n,i,r+n,this.strokeDashArray),e.util.drawDashedLine(t,i,r+n,i,r,this.strokeDashArray),t.closePath()},toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=this.left,r=this.top
return this.group&&"path-group"===this.group.type||(i=-this.width/2,r=-this.height/2),e.push("<rect ",this.getSvgId(),'x="',i,'" y="',r,'" rx="',this.get("rx"),'" ry="',this.get("ry"),'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")}}),e.Rect.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),e.Rect.fromElement=function(t,r){if(!t)return null
r=r||{}
var s=e.parseAttributes(t,e.Rect.ATTRIBUTE_NAMES)
s.left=s.left||0,s.top=s.top||0
var n=new e.Rect(i(r?e.util.object.clone(r):{},s))
return n.visible=n.visible&&n.width>0&&n.height>0,n},e.Rect.fromObject=function(t,i,r){return e.Object._fromObject("Rect",t,i,r)}}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.array.min,s=e.util.array.max,n=e.util.toFixed,o=e.Object.NUM_FRACTION_DIGITS
if(e.Polyline)e.warn("fabric.Polyline is already defined")
else{var a=e.Object.prototype.cacheProperties.concat()
a.push("points"),e.Polyline=e.util.createClass(e.Object,{type:"polyline",points:null,minX:0,minY:0,cacheProperties:a,initialize:function(t,e){e=e||{},this.points=t||[],this.callSuper("initialize",e),this._calcDimensions(),"top"in e||(this.top=this.minY),"left"in e||(this.left=this.minX),this.pathOffset={x:this.minX+this.width/2,y:this.minY+this.height/2}},_calcDimensions:function(){var t=this.points,e=r(t,"x"),i=r(t,"y"),n=s(t,"x"),o=s(t,"y")
this.width=n-e||0,this.height=o-i||0,this.minX=e||0,this.minY=i||0},toObject:function(t){return i(this.callSuper("toObject",t),{points:this.points.concat()})},toSVG:function(t){var e=[],i=0,r=0,s=this._createBaseSVGMarkup()
this.group&&"path-group"===this.group.type||(i=this.pathOffset.x,r=this.pathOffset.y)
for(var a=0,h=this.points.length;a<h;a++)e.push(n(this.points[a].x-i,o),",",n(this.points[a].y-r,o)," ")
return s.push("<",this.type," ",this.getSvgId(),'points="',e.join(""),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n'),t?t(s.join("")):s.join("")},commonRender:function(t,e){var i,r=this.points.length,s=e?0:this.pathOffset.x,n=e?0:this.pathOffset.y
if(!r||isNaN(this.points[r-1].y))return!1
t.beginPath(),t.moveTo(this.points[0].x-s,this.points[0].y-n)
for(var o=0;o<r;o++)i=this.points[o],t.lineTo(i.x-s,i.y-n)
return!0},_render:function(t,e){this.commonRender(t,e)&&(this._renderFill(t),this._renderStroke(t))},_renderDashedStroke:function(t){var i,r
t.beginPath()
for(var s=0,n=this.points.length;s<n;s++)i=this.points[s],r=this.points[s+1]||i,e.util.drawDashedLine(t,i.x,i.y,r.x,r.y,this.strokeDashArray)},complexity:function(){return this.get("points").length}}),e.Polyline.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polyline.fromElement=function(t,i){if(!t)return null
i||(i={})
var r=e.parsePointsAttribute(t.getAttribute("points")),s=e.parseAttributes(t,e.Polyline.ATTRIBUTE_NAMES)
return new e.Polyline(r,e.util.object.extend(s,i))},e.Polyline.fromObject=function(t,i,r){return e.Object._fromObject("Polyline",t,i,r,"points")}}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend
e.Polygon?e.warn("fabric.Polygon is already defined"):(e.Polygon=e.util.createClass(e.Polyline,{type:"polygon",_render:function(t,e){this.commonRender(t,e)&&(t.closePath(),this._renderFill(t),this._renderStroke(t))},_renderDashedStroke:function(t){this.callSuper("_renderDashedStroke",t),t.closePath()}}),e.Polygon.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polygon.fromElement=function(t,r){if(!t)return null
r||(r={})
var s=e.parsePointsAttribute(t.getAttribute("points")),n=e.parseAttributes(t,e.Polygon.ATTRIBUTE_NAMES)
return new e.Polygon(s,i(n,r))},e.Polygon.fromObject=function(t,i,r){return e.Object._fromObject("Polygon",t,i,r,"points")})}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.array.min,r=e.util.array.max,s=e.util.object.extend,n=Object.prototype.toString,o=e.util.drawArc,a={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},h={m:"l",M:"L"}
if(e.Path)e.warn("fabric.Path is already defined")
else{var c=e.Object.prototype.stateProperties.concat()
c.push("path")
var l=e.Object.prototype.cacheProperties.concat()
l.push("path","fillRule"),e.Path=e.util.createClass(e.Object,{type:"path",path:null,minX:0,minY:0,cacheProperties:l,stateProperties:c,initialize:function(t,e){e=e||{},this.callSuper("initialize",e),t||(t=[])
var i="[object Array]"===n.call(t)
this.path=i?t:t.match&&t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi),this.path&&(i||(this.path=this._parsePath()),this._setPositionDimensions(e))},_setPositionDimensions:function(t){var e=this._parseDimensions()
this.minX=e.left,this.minY=e.top,this.width=e.width,this.height=e.height,void 0===t.left&&(this.left=e.left+("center"===this.originX?this.width/2:"right"===this.originX?this.width:0)),void 0===t.top&&(this.top=e.top+("center"===this.originY?this.height/2:"bottom"===this.originY?this.height:0)),this.pathOffset=this.pathOffset||{x:this.minX+this.width/2,y:this.minY+this.height/2}},_renderPathCommands:function(t){var e,i,r,s=null,n=0,a=0,h=0,c=0,l=0,u=0,f=-this.pathOffset.x,d=-this.pathOffset.y
this.group&&"path-group"===this.group.type&&(f=0,d=0),t.beginPath()
for(var g=0,p=this.path.length;g<p;++g){switch((e=this.path[g])[0]){case"l":h+=e[1],c+=e[2],t.lineTo(h+f,c+d)
break
case"L":h=e[1],c=e[2],t.lineTo(h+f,c+d)
break
case"h":h+=e[1],t.lineTo(h+f,c+d)
break
case"H":h=e[1],t.lineTo(h+f,c+d)
break
case"v":c+=e[1],t.lineTo(h+f,c+d)
break
case"V":c=e[1],t.lineTo(h+f,c+d)
break
case"m":n=h+=e[1],a=c+=e[2],t.moveTo(h+f,c+d)
break
case"M":n=h=e[1],a=c=e[2],t.moveTo(h+f,c+d)
break
case"c":i=h+e[5],r=c+e[6],l=h+e[3],u=c+e[4],t.bezierCurveTo(h+e[1]+f,c+e[2]+d,l+f,u+d,i+f,r+d),h=i,c=r
break
case"C":h=e[5],c=e[6],l=e[3],u=e[4],t.bezierCurveTo(e[1]+f,e[2]+d,l+f,u+d,h+f,c+d)
break
case"s":i=h+e[3],r=c+e[4],null===s[0].match(/[CcSs]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.bezierCurveTo(l+f,u+d,h+e[1]+f,c+e[2]+d,i+f,r+d),l=h+e[1],u=c+e[2],h=i,c=r
break
case"S":i=e[3],r=e[4],null===s[0].match(/[CcSs]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.bezierCurveTo(l+f,u+d,e[1]+f,e[2]+d,i+f,r+d),h=i,c=r,l=e[1],u=e[2]
break
case"q":i=h+e[3],r=c+e[4],l=h+e[1],u=c+e[2],t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r
break
case"Q":i=e[3],r=e[4],t.quadraticCurveTo(e[1]+f,e[2]+d,i+f,r+d),h=i,c=r,l=e[1],u=e[2]
break
case"t":i=h+e[1],r=c+e[2],null===s[0].match(/[QqTt]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r
break
case"T":i=e[1],r=e[2],null===s[0].match(/[QqTt]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r
break
case"a":o(t,h+f,c+d,[e[1],e[2],e[3],e[4],e[5],e[6]+h+f,e[7]+c+d]),h+=e[6],c+=e[7]
break
case"A":o(t,h+f,c+d,[e[1],e[2],e[3],e[4],e[5],e[6]+f,e[7]+d]),h=e[6],c=e[7]
break
case"z":case"Z":h=n,c=a,t.closePath()}s=e}},_render:function(t){this._renderPathCommands(t),this._renderFill(t),this._renderStroke(t)},toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},toObject:function(t){return s(this.callSuper("toObject",["sourcePath","pathOffset"].concat(t)),{path:this.path.map(function(t){return t.slice()}),top:this.top,left:this.left})},toDatalessObject:function(t){var e=this.toObject(t)
return this.sourcePath&&(e.path=this.sourcePath),delete e.sourcePath,e},toSVG:function(t){for(var e=[],i=this._createBaseSVGMarkup(),r="",s=0,n=this.path.length;s<n;s++)e.push(this.path[s].join(" "))
var o=e.join(" ")
return this.group&&"path-group"===this.group.type||(r=" translate("+-this.pathOffset.x+", "+-this.pathOffset.y+") "),i.push("<path ",this.getSvgId(),'d="',o,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),r,this.getSvgTransformMatrix(),'" stroke-linecap="round" ',"/>\n"),t?t(i.join("")):i.join("")},complexity:function(){return this.path.length},_parsePath:function(){for(var t,e,i,r,s,n=[],o=[],c=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi,l=0,u=this.path.length;l<u;l++){for(r=(t=this.path[l]).slice(1).trim(),o.length=0;i=c.exec(r);)o.push(i[0])
s=[t.charAt(0)]
for(var f=0,d=o.length;f<d;f++)e=parseFloat(o[f]),isNaN(e)||s.push(e)
var g=s[0],p=a[g.toLowerCase()],v=h[g]||g
if(s.length-1>p)for(var b=1,m=s.length;b<m;b+=p)n.push([g].concat(s.slice(b,b+p))),g=v
else n.push(s)}return n},_parseDimensions:function(){for(var t,s,n,o,a=[],h=[],c=null,l=0,u=0,f=0,d=0,g=0,p=0,v=0,b=this.path.length;v<b;++v){switch((t=this.path[v])[0]){case"l":f+=t[1],d+=t[2],o=[]
break
case"L":f=t[1],d=t[2],o=[]
break
case"h":f+=t[1],o=[]
break
case"H":f=t[1],o=[]
break
case"v":d+=t[1],o=[]
break
case"V":d=t[1],o=[]
break
case"m":l=f+=t[1],u=d+=t[2],o=[]
break
case"M":l=f=t[1],u=d=t[2],o=[]
break
case"c":s=f+t[5],n=d+t[6],g=f+t[3],p=d+t[4],o=e.util.getBoundsOfCurve(f,d,f+t[1],d+t[2],g,p,s,n),f=s,d=n
break
case"C":g=t[3],p=t[4],o=e.util.getBoundsOfCurve(f,d,t[1],t[2],g,p,t[5],t[6]),f=t[5],d=t[6]
break
case"s":s=f+t[3],n=d+t[4],null===c[0].match(/[CcSs]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,f+t[1],d+t[2],s,n),g=f+t[1],p=d+t[2],f=s,d=n
break
case"S":s=t[3],n=t[4],null===c[0].match(/[CcSs]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,t[1],t[2],s,n),f=s,d=n,g=t[1],p=t[2]
break
case"q":s=f+t[3],n=d+t[4],g=f+t[1],p=d+t[2],o=e.util.getBoundsOfCurve(f,d,g,p,g,p,s,n),f=s,d=n
break
case"Q":g=t[1],p=t[2],o=e.util.getBoundsOfCurve(f,d,g,p,g,p,t[3],t[4]),f=t[3],d=t[4]
break
case"t":s=f+t[1],n=d+t[2],null===c[0].match(/[QqTt]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,g,p,s,n),f=s,d=n
break
case"T":s=t[1],n=t[2],null===c[0].match(/[QqTt]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,g,p,s,n),f=s,d=n
break
case"a":o=e.util.getBoundsOfArc(f,d,t[1],t[2],t[3],t[4],t[5],t[6]+f,t[7]+d),f+=t[6],d+=t[7]
break
case"A":o=e.util.getBoundsOfArc(f,d,t[1],t[2],t[3],t[4],t[5],t[6],t[7]),f=t[6],d=t[7]
break
case"z":case"Z":f=l,d=u}c=t,o.forEach(function(t){a.push(t.x),h.push(t.y)}),a.push(f),h.push(d)}var m=i(a)||0,_=i(h)||0
return{left:m,top:_,width:(r(a)||0)-m,height:(r(h)||0)-_}}}),e.Path.fromObject=function(t,i,r){var s
if("string"!=typeof t.path)return e.Object._fromObject("Path",t,i,r,"path")
e.loadSVGFromURL(t.path,function(e){var r=t.path
s=e[0],delete t.path,s.setOptions(t),s.setSourcePath(r),i&&i(s)})},e.Path.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(["d"]),e.Path.fromElement=function(t,i,r){var n=e.parseAttributes(t,e.Path.ATTRIBUTE_NAMES)
i&&i(new e.Path(n.d,s(n,r)))},e.Path.async=!0}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend
e.PathGroup?e.warn("fabric.PathGroup is already defined"):(e.PathGroup=e.util.createClass(e.Object,{type:"path-group",fill:"",cacheProperties:[],initialize:function(t,e){e=e||{},this.paths=t||[]
for(var i=this.paths.length;i--;)this.paths[i].group=this
e.toBeParsed&&(this.parseDimensionsFromPaths(e),delete e.toBeParsed),this.setOptions(e),this.setCoords()},parseDimensionsFromPaths:function(t){for(var i,r,s,n,o,a,h=[],c=[],l=this.paths.length;l--;){n=(s=this.paths[l]).height+s.strokeWidth,o=s.width+s.strokeWidth,i=[{x:s.left,y:s.top},{x:s.left+o,y:s.top},{x:s.left,y:s.top+n},{x:s.left+o,y:s.top+n}],a=this.paths[l].transformMatrix
for(var u=0;u<i.length;u++)r=i[u],a&&(r=e.util.transformPoint(r,a,!1)),h.push(r.x),c.push(r.y)}t.width=Math.max.apply(null,h),t.height=Math.max.apply(null,c)},drawObject:function(t){t.save(),t.translate(-this.width/2,-this.height/2)
for(var e=0,i=this.paths.length;e<i;++e)this.paths[e].render(t,!0)
t.restore()},shouldCache:function(){var t=this.objectCaching&&(!this.group||this.needsItsOwnCache()||!this.group.isCaching())
if(this.caching=t,t)for(var e=0,i=this.paths.length;e<i;e++)if(this.paths[e].willDrawShadow())return this.caching=!1,!1
return t},willDrawShadow:function(){if(this.shadow)return!0
for(var t=0,e=this.paths.length;t<e;t++)if(this.paths[t].willDrawShadow())return!0
return!1},isCaching:function(){return this.caching||this.group&&this.group.isCaching()},isCacheDirty:function(){if(this.callSuper("isCacheDirty"))return!0
if(!this.statefullCache)return!1
for(var t=0,e=this.paths.length;t<e;t++)if(this.paths[t].isCacheDirty(!0)){if(this._cacheCanvas){var i=this.cacheWidth/this.zoomX,r=this.cacheHeight/this.zoomY
this._cacheContext.clearRect(-i/2,-r/2,i,r)}return!0}return!1},_set:function(t,e){if("fill"===t&&e&&this.isSameColor())for(var i=this.paths.length;i--;)this.paths[i]._set(t,e)
return this.callSuper("_set",t,e)},toObject:function(t){var e=this.paths.map(function(e){var i=e.includeDefaultValues
e.includeDefaultValues=e.group.includeDefaultValues
var r=e.toObject(t)
return e.includeDefaultValues=i,r})
return i(this.callSuper("toObject",["sourcePath"].concat(t)),{paths:e})},toDatalessObject:function(t){var e=this.toObject(t)
return this.sourcePath&&(e.paths=this.sourcePath),e},toSVG:function(t){var e=this.getObjects(),i=this.getPointByOrigin("left","top"),r="translate("+i.x+" "+i.y+")",s=this._createBaseSVGMarkup()
s.push("<g ",this.getSvgId(),'style="',this.getSvgStyles(),'" ','transform="',this.getSvgTransformMatrix(),r,this.getSvgTransform(),'" ',">\n")
for(var n=0,o=e.length;n<o;n++)s.push("\t",e[n].toSVG(t))
return s.push("</g>\n"),t?t(s.join("")):s.join("")},toString:function(){return"#<fabric.PathGroup ("+this.complexity()+"): { top: "+this.top+", left: "+this.left+" }>"},isSameColor:function(){var t=this.getObjects()[0].get("fill")||""
return"string"==typeof t&&(t=t.toLowerCase(),this.getObjects().every(function(e){var i=e.get("fill")||""
return"string"==typeof i&&i.toLowerCase()===t}))},complexity:function(){return this.paths.reduce(function(t,e){return t+(e&&e.complexity?e.complexity():0)},0)},getObjects:function(){return this.paths}}),e.PathGroup.fromObject=function(t,i){var r=t.paths
delete t.paths,"string"==typeof r?e.loadSVGFromURL(r,function(s){var n=r,o=e.util.groupSVGElements(s,t,n)
t.paths=r,i(o)}):e.util.enlivenObjects(r,function(s){var n=new e.PathGroup(s,t)
t.paths=r,i(n)})},e.PathGroup.async=!0)}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.array.min,s=e.util.array.max
if(!e.Group){var n={lockMovementX:!0,lockMovementY:!0,lockRotation:!0,lockScalingX:!0,lockScalingY:!0,lockUniScaling:!0}
e.Group=e.util.createClass(e.Object,e.Collection,{type:"group",strokeWidth:0,subTargetCheck:!1,cacheProperties:[],initialize:function(t,e,i){e=e||{},this._objects=[],i&&this.callSuper("initialize",e),this._objects=t||[]
for(var r=this._objects.length;r--;)this._objects[r].group=this
e.originX&&(this.originX=e.originX),e.originY&&(this.originY=e.originY),i?this._updateObjectsCoords(!0):(this._calcBounds(),this._updateObjectsCoords(),this.callSuper("initialize",e)),this.setCoords(),this.saveCoords()},_updateObjectsCoords:function(t){for(var e=this.getCenterPoint(),i=this._objects.length;i--;)this._updateObjectCoords(this._objects[i],e,t)},_updateObjectCoords:function(t,e,i){if(t.__origHasControls=t.hasControls,t.hasControls=!1,!i){var r=t.getLeft(),s=t.getTop()
t.set({left:r-e.x,top:s-e.y}),t.setCoords(!0,!0)}},toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},addWithUpdate:function(t){return this._restoreObjectsState(),e.util.resetObjectTransform(this),t&&(this._objects.push(t),t.group=this,t._set("canvas",this.canvas)),this.forEachObject(this._setObjectActive,this),this._calcBounds(),this._updateObjectsCoords(),this.setCoords(),this.dirty=!0,this},_setObjectActive:function(t){t.set("active",!0),t.group=this},removeWithUpdate:function(t){return this._restoreObjectsState(),e.util.resetObjectTransform(this),this.forEachObject(this._setObjectActive,this),this.remove(t),this._calcBounds(),this._updateObjectsCoords(),this.setCoords(),this.dirty=!0,this},_onObjectAdded:function(t){this.dirty=!0,t.group=this,t._set("canvas",this.canvas)},_onObjectRemoved:function(t){this.dirty=!0,delete t.group,t.set("active",!1)},delegatedProperties:{fill:!0,stroke:!0,strokeWidth:!0,fontFamily:!0,fontWeight:!0,fontSize:!0,fontStyle:!0,lineHeight:!0,textDecoration:!0,textAlign:!0,backgroundColor:!0},_set:function(t,e){var i=this._objects.length
if(this.delegatedProperties[t]||"canvas"===t)for(;i--;)this._objects[i].set(t,e)
else for(;i--;)this._objects[i].setOnGroup(t,e)
this.callSuper("_set",t,e)},toObject:function(t){var e=this.getObjects().map(function(e){var i=e.includeDefaultValues
e.includeDefaultValues=e.group.includeDefaultValues
var r=e.toObject(t)
return e.includeDefaultValues=i,r})
return i(this.callSuper("toObject",t),{objects:e})},toDatalessObject:function(t){var e=this.getObjects().map(function(e){var i=e.includeDefaultValues
e.includeDefaultValues=e.group.includeDefaultValues
var r=e.toDatalessObject(t)
return e.includeDefaultValues=i,r})
return i(this.callSuper("toDatalessObject",t),{objects:e})},render:function(t){this._transformDone=!0,this.callSuper("render",t),this._transformDone=!1},shouldCache:function(){var t=this.objectCaching&&(!this.group||this.needsItsOwnCache()||!this.group.isCaching())
if(this.caching=t,t)for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e].willDrawShadow())return this.caching=!1,!1
return t},willDrawShadow:function(){if(this.callSuper("willDrawShadow"))return!0
for(var t=0,e=this._objects.length;t<e;t++)if(this._objects[t].willDrawShadow())return!0
return!1},isCaching:function(){return this.caching||this.group&&this.group.isCaching()},drawObject:function(t){for(var e=0,i=this._objects.length;e<i;e++)this._renderObject(this._objects[e],t)},isCacheDirty:function(){if(this.callSuper("isCacheDirty"))return!0
if(!this.statefullCache)return!1
for(var t=0,e=this._objects.length;t<e;t++)if(this._objects[t].isCacheDirty(!0)){if(this._cacheCanvas){var i=this.cacheWidth/this.zoomX,r=this.cacheHeight/this.zoomY
this._cacheContext.clearRect(-i/2,-r/2,i,r)}return!0}return!1},_renderControls:function(t,e){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,this.callSuper("_renderControls",t,e)
for(var i=0,r=this._objects.length;i<r;i++)this._objects[i]._renderControls(t)
t.restore()},_renderObject:function(t,e){if(t.visible){var i=t.hasRotatingPoint
t.hasRotatingPoint=!1,t.render(e),t.hasRotatingPoint=i}},_restoreObjectsState:function(){return this._objects.forEach(this._restoreObjectState,this),this},realizeTransform:function(t){var i=t.calcTransformMatrix(),r=e.util.qrDecompose(i),s=new e.Point(r.translateX,r.translateY)
return t.flipX=!1,t.flipY=!1,t.set("scaleX",r.scaleX),t.set("scaleY",r.scaleY),t.skewX=r.skewX,t.skewY=r.skewY,t.angle=r.angle,t.setPositionByOrigin(s,"center","center"),t},_restoreObjectState:function(t){return this.realizeTransform(t),t.setCoords(),t.hasControls=t.__origHasControls,delete t.__origHasControls,t.set("active",!1),delete t.group,this},destroy:function(){return this._objects.forEach(function(t){t.set("dirty",!0)}),this._restoreObjectsState()},saveCoords:function(){return this._originalLeft=this.get("left"),this._originalTop=this.get("top"),this},hasMoved:function(){return this._originalLeft!==this.get("left")||this._originalTop!==this.get("top")},setObjectsCoords:function(){return this.forEachObject(function(t){t.setCoords(!0,!0)}),this},_calcBounds:function(t){for(var e,i,r,s=[],n=[],o=["tr","br","bl","tl"],a=0,h=this._objects.length,c=o.length;a<h;++a)for((e=this._objects[a]).setCoords(!0),r=0;r<c;r++)i=o[r],s.push(e.oCoords[i].x),n.push(e.oCoords[i].y)
this.set(this._getBounds(s,n,t))},_getBounds:function(t,i,n){var o=new e.Point(r(t),r(i)),a=new e.Point(s(t),s(i)),h={width:a.x-o.x||0,height:a.y-o.y||0}
return n||(h.left=o.x||0,h.top=o.y||0,"center"===this.originX&&(h.left+=h.width/2),"right"===this.originX&&(h.left+=h.width),"center"===this.originY&&(h.top+=h.height/2),"bottom"===this.originY&&(h.top+=h.height)),h},toSVG:function(t){var e=this._createBaseSVGMarkup()
e.push("<g ",this.getSvgId(),'transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'" style="',this.getSvgFilter(),'">\n')
for(var i=0,r=this._objects.length;i<r;i++)e.push("\t",this._objects[i].toSVG(t))
return e.push("</g>\n"),t?t(e.join("")):e.join("")},get:function(t){if(t in n){if(this[t])return this[t]
for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e][t])return!0
return!1}return t in this.delegatedProperties?this._objects[0]&&this._objects[0].get(t):this[t]}}),e.Group.fromObject=function(t,i){e.util.enlivenObjects(t.objects,function(r){var s=e.util.object.clone(t,!0)
delete s.objects,i&&i(new e.Group(r,s,!0))})},e.Group.async=!0}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=fabric.util.object.extend
if(t.fabric||(t.fabric={}),t.fabric.Image)fabric.warn("fabric.Image is already defined.")
else{var i=fabric.Object.prototype.stateProperties.concat()
i.push("alignX","alignY","meetOrSlice"),fabric.Image=fabric.util.createClass(fabric.Object,{type:"image",crossOrigin:"",alignX:"none",alignY:"none",meetOrSlice:"meet",strokeWidth:0,_lastScaleX:1,_lastScaleY:1,minimumScaleTrigger:.5,stateProperties:i,objectCaching:!1,initialize:function(t,e,i){e||(e={}),this.filters=[],this.resizeFilters=[],this.callSuper("initialize",e),this._initElement(t,e,i)},getElement:function(){return this._element},setElement:function(t,e,i){var r,s
return this._element=t,this._originalElement=t,this._initConfig(i),0===this.resizeFilters.length?r=e:(s=this,r=function(){s.applyFilters(e,s.resizeFilters,s._filteredEl||s._originalElement,!0)}),0!==this.filters.length?this.applyFilters(r):r&&r(this),this},setCrossOrigin:function(t){return this.crossOrigin=t,this._element.crossOrigin=t,this},getOriginalSize:function(){var t=this.getElement()
return{width:t.width,height:t.height}},_stroke:function(t){if(this.stroke&&0!==this.strokeWidth){var e=this.width/2,i=this.height/2
t.beginPath(),t.moveTo(-e,-i),t.lineTo(e,-i),t.lineTo(e,i),t.lineTo(-e,i),t.lineTo(-e,-i),t.closePath()}},_renderDashedStroke:function(t){var e=-this.width/2,i=-this.height/2,r=this.width,s=this.height
t.save(),this._setStrokeStyles(t),t.beginPath(),fabric.util.drawDashedLine(t,e,i,e+r,i,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i,e+r,i+s,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i+s,e,i+s,this.strokeDashArray),fabric.util.drawDashedLine(t,e,i+s,e,i,this.strokeDashArray),t.closePath(),t.restore()},toObject:function(t){var i=[],r=[],s=1,n=1
this.filters.forEach(function(t){t&&("Resize"===t.type&&(s*=t.scaleX,n*=t.scaleY),i.push(t.toObject()))}),this.resizeFilters.forEach(function(t){t&&r.push(t.toObject())})
var o=e(this.callSuper("toObject",["crossOrigin","alignX","alignY","meetOrSlice"].concat(t)),{src:this.getSrc(),filters:i,resizeFilters:r})
return o.width/=s,o.height/=n,o},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=-this.width/2,r=-this.height/2,s="none"
if(this.group&&"path-group"===this.group.type&&(i=this.left,r=this.top),"none"!==this.alignX&&"none"!==this.alignY&&(s="x"+this.alignX+"Y"+this.alignY+" "+this.meetOrSlice),e.push('<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'">\n',"<image ",this.getSvgId(),'xlink:href="',this.getSvgSrc(!0),'" x="',i,'" y="',r,'" style="',this.getSvgStyles(),'" width="',this.width,'" height="',this.height,'" preserveAspectRatio="',s,'"',"></image>\n"),this.stroke||this.strokeDashArray){var n=this.fill
this.fill=null,e.push("<rect ",'x="',i,'" y="',r,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>\n'),this.fill=n}return e.push("</g>\n"),t?t(e.join("")):e.join("")},getSrc:function(t){var e=t?this._element:this._originalElement
return e?fabric.isLikelyNode?e._src:e.src:this.src||""},setSrc:function(t,e,i){fabric.util.loadImage(t,function(t){return this.setElement(t,e,i)},this,i&&i.crossOrigin)},toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},applyFilters:function(t,e,i,r){if(e=e||this.filters,i=i||this._originalElement){var s,n,o=fabric.util.createImage(),a=this.canvas?this.canvas.getRetinaScaling():fabric.devicePixelRatio,h=this.minimumScaleTrigger/a,c=this
if(0===e.length)return this._element=i,t&&t(this),i
var l=fabric.util.createCanvasElement()
return l.width=i.width,l.height=i.height,l.getContext("2d").drawImage(i,0,0,i.width,i.height),e.forEach(function(t){t&&(r?(s=c.scaleX<h?c.scaleX:1,n=c.scaleY<h?c.scaleY:1,s*a<1&&(s*=a),n*a<1&&(n*=a)):(s=t.scaleX,n=t.scaleY),t.applyTo(l,s,n),r||"Resize"!==t.type||(c.width*=t.scaleX,c.height*=t.scaleY))}),o.width=l.width,o.height=l.height,fabric.isLikelyNode?(o.src=l.toBuffer(void 0,fabric.Image.pngCompression),c._element=o,!r&&(c._filteredEl=o),t&&t(c)):(o.onload=function(){c._element=o,!r&&(c._filteredEl=o),t&&t(c),o.onload=l=null},o.src=l.toDataURL("image/png")),l}},_render:function(t,e){var i,r,s,n=this._findMargins()
i=e?this.left:-this.width/2,r=e?this.top:-this.height/2,"slice"===this.meetOrSlice&&(t.beginPath(),t.rect(i,r,this.width,this.height),t.clip()),!1===this.isMoving&&this.resizeFilters.length&&this._needsResize()?(this._lastScaleX=this.scaleX,this._lastScaleY=this.scaleY,s=this.applyFilters(null,this.resizeFilters,this._filteredEl||this._originalElement,!0)):s=this._element,s&&t.drawImage(s,i+n.marginX,r+n.marginY,n.width,n.height),this._stroke(t),this._renderStroke(t)},_needsResize:function(){return this.scaleX!==this._lastScaleX||this.scaleY!==this._lastScaleY},_findMargins:function(){var t,e,i=this.width,r=this.height,s=0,n=0
return"none"===this.alignX&&"none"===this.alignY||(t=[this.width/this._element.width,this.height/this._element.height],e="meet"===this.meetOrSlice?Math.min.apply(null,t):Math.max.apply(null,t),i=this._element.width*e,r=this._element.height*e,"Mid"===this.alignX&&(s=(this.width-i)/2),"Max"===this.alignX&&(s=this.width-i),"Mid"===this.alignY&&(n=(this.height-r)/2),"Max"===this.alignY&&(n=this.height-r)),{width:i,height:r,marginX:s,marginY:n}},_resetWidthHeight:function(){var t=this.getElement()
this.set("width",t.width),this.set("height",t.height)},_initElement:function(t,e,i){this.setElement(fabric.util.getById(t),i,e),fabric.util.addClass(this.getElement(),fabric.Image.CSS_CANVAS)},_initConfig:function(t){t||(t={}),this.setOptions(t),this._setWidthHeight(t),this._element&&this.crossOrigin&&(this._element.crossOrigin=this.crossOrigin)},_initFilters:function(t,e){t&&t.length?fabric.util.enlivenObjects(t,function(t){e&&e(t)},"fabric.Image.filters"):e&&e()},_setWidthHeight:function(t){this.width="width"in t?t.width:this.getElement()?this.getElement().width||0:0,this.height="height"in t?t.height:this.getElement()?this.getElement().height||0:0}}),fabric.Image.CSS_CANVAS="canvas-img",fabric.Image.prototype.getSvgSrc=fabric.Image.prototype.getSrc,fabric.Image.fromObject=function(t,e){fabric.util.loadImage(t.src,function(i,r){r?e&&e(null,r):fabric.Image.prototype._initFilters.call(t,t.filters,function(r){t.filters=r||[],fabric.Image.prototype._initFilters.call(t,t.resizeFilters,function(r){return t.resizeFilters=r||[],new fabric.Image(i,t,e)})})},null,t.crossOrigin)},fabric.Image.fromURL=function(t,e,i){fabric.util.loadImage(t,function(t){e&&e(new fabric.Image(t,i))},null,i&&i.crossOrigin)},fabric.Image.ATTRIBUTE_NAMES=fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin".split(" ")),fabric.Image.fromElement=function(t,i,r){var s,n=fabric.parseAttributes(t,fabric.Image.ATTRIBUTE_NAMES)
n.preserveAspectRatio&&(s=fabric.util.parsePreserveAspectRatioAttribute(n.preserveAspectRatio),e(n,s)),fabric.Image.fromURL(n["xlink:href"],i,e(r?fabric.util.object.clone(r):{},n))},fabric.Image.async=!0,fabric.Image.pngCompression=1}}("undefined"!=typeof exports?exports:this),fabric.util.object.extend(fabric.Object.prototype,{_getAngleValueForStraighten:function(){var t=this.getAngle()%360
return t>0?90*Math.round((t-1)/90):90*Math.round(t/90)},straighten:function(){return this.setAngle(this._getAngleValueForStraighten()),this},fxStraighten:function(t){var e=function(){},i=(t=t||{}).onComplete||e,r=t.onChange||e,s=this
return fabric.util.animate({startValue:this.get("angle"),endValue:this._getAngleValueForStraighten(),duration:this.FX_DURATION,onChange:function(t){s.setAngle(t),r()},onComplete:function(){s.setCoords(),i()},onStart:function(){s.set("active",!1)}}),this}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{straightenObject:function(t){return t.straighten(),this.renderAll(),this},fxStraightenObject:function(t){return t.fxStraighten({onChange:this.renderAll.bind(this)}),this}}),fabric.Image.filters=fabric.Image.filters||{},fabric.Image.filters.BaseFilter=fabric.util.createClass({type:"BaseFilter",initialize:function(t){t&&this.setOptions(t)},setOptions:function(t){for(var e in t)this[e]=t[e]},toObject:function(){return{type:this.type}},toJSON:function(){return this.toObject()}}),fabric.Image.filters.BaseFilter.fromObject=function(t,e){var i=new fabric.Image.filters[t.type](t)
return e&&e(i),i},function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Brightness=s(r.BaseFilter,{type:"Brightness",initialize:function(t){t=t||{},this.brightness=t.brightness||0},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,s=this.brightness,n=0,o=r.length;n<o;n+=4)r[n]+=s,r[n+1]+=s,r[n+2]+=s
e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{brightness:this.brightness})}}),e.Image.filters.Brightness.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Convolute=s(r.BaseFilter,{type:"Convolute",initialize:function(t){t=t||{},this.opaque=t.opaque,this.matrix=t.matrix||[0,0,0,0,1,0,0,0,0]},applyTo:function(t){for(var e,i,r,s,n,o,a,h,c,l=this.matrix,u=t.getContext("2d"),f=u.getImageData(0,0,t.width,t.height),d=Math.round(Math.sqrt(l.length)),g=Math.floor(d/2),p=f.data,v=f.width,b=f.height,m=u.createImageData(v,b),_=m.data,y=this.opaque?1:0,x=0;x<b;x++)for(var C=0;C<v;C++){n=4*(x*v+C),e=0,i=0,r=0,s=0
for(var S=0;S<d;S++)for(var w=0;w<d;w++)o=C+w-g,(a=x+S-g)<0||a>b||o<0||o>v||(h=4*(a*v+o),c=l[S*d+w],e+=p[h]*c,i+=p[h+1]*c,r+=p[h+2]*c,s+=p[h+3]*c)
_[n]=e,_[n+1]=i,_[n+2]=r,_[n+3]=s+y*(255-s)}u.putImageData(m,0,0)},toObject:function(){return i(this.callSuper("toObject"),{opaque:this.opaque,matrix:this.matrix})}}),e.Image.filters.Convolute.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.GradientTransparency=s(r.BaseFilter,{type:"GradientTransparency",initialize:function(t){t=t||{},this.threshold=t.threshold||100},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,s=this.threshold,n=r.length,o=0,a=r.length;o<a;o+=4)r[o+3]=s+255*(n-o)/n
e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{threshold:this.threshold})}}),e.Image.filters.GradientTransparency.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass
i.Grayscale=r(i.BaseFilter,{type:"Grayscale",applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),s=r.data,n=r.width*r.height*4,o=0;o<n;)e=(s[o]+s[o+1]+s[o+2])/3,s[o]=e,s[o+1]=e,s[o+2]=e,o+=4
i.putImageData(r,0,0)}}),e.Image.filters.Grayscale.fromObject=function(t,i){return(t=t||{}).type="Grayscale",e.Image.filters.BaseFilter.fromObject(t,i)}}("undefined"!=typeof exports?exports:this);(function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass
i.Invert=r(i.BaseFilter,{type:"Invert",applyTo:function(t){var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),s=r.data,n=s.length
for(e=0;e<n;e+=4)s[e]=255-s[e],s[e+1]=255-s[e+1],s[e+2]=255-s[e+2]
i.putImageData(r,0,0)}}),e.Image.filters.Invert.fromObject=function(t,i){return(t=t||{}).type="Invert",e.Image.filters.BaseFilter.fromObject(t,i)}})("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Mask=s(r.BaseFilter,{type:"Mask",initialize:function(t){t=t||{},this.mask=t.mask,this.channel=[0,1,2,3].indexOf(t.channel)>-1?t.channel:0},applyTo:function(t){if(this.mask){var i,r=t.getContext("2d"),s=r.getImageData(0,0,t.width,t.height),n=s.data,o=this.mask.getElement(),a=e.util.createCanvasElement(),h=this.channel,c=s.width*s.height*4
a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(o,0,0,t.width,t.height)
var l=a.getContext("2d").getImageData(0,0,t.width,t.height).data
for(i=0;i<c;i+=4)n[i+3]=l[i+h]
r.putImageData(s,0,0)}},toObject:function(){return i(this.callSuper("toObject"),{mask:this.mask.toObject(),channel:this.channel})}}),e.Image.filters.Mask.fromObject=function(t,i){e.util.loadImage(t.mask.src,function(r){return t.mask=new e.Image(r,t.mask),e.Image.filters.BaseFilter.fromObject(t,i)})},e.Image.filters.Mask.async=!0}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Noise=s(r.BaseFilter,{type:"Noise",initialize:function(t){t=t||{},this.noise=t.noise||0},applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),s=r.data,n=this.noise,o=0,a=s.length;o<a;o+=4)e=(.5-Math.random())*n,s[o]+=e,s[o+1]+=e,s[o+2]+=e
i.putImageData(r,0,0)},toObject:function(){return i(this.callSuper("toObject"),{noise:this.noise})}}),e.Image.filters.Noise.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Pixelate=s(r.BaseFilter,{type:"Pixelate",initialize:function(t){t=t||{},this.blocksize=t.blocksize||4},applyTo:function(t){var e,i,r,s,n,o,a,h=t.getContext("2d"),c=h.getImageData(0,0,t.width,t.height),l=c.data,u=c.height,f=c.width
for(i=0;i<u;i+=this.blocksize)for(r=0;r<f;r+=this.blocksize){s=l[e=4*i*f+4*r],n=l[e+1],o=l[e+2],a=l[e+3]
for(var d=i,g=i+this.blocksize;d<g;d++)for(var p=r,v=r+this.blocksize;p<v;p++)l[e=4*d*f+4*p]=s,l[e+1]=n,l[e+2]=o,l[e+3]=a}h.putImageData(c,0,0)},toObject:function(){return i(this.callSuper("toObject"),{blocksize:this.blocksize})}}),e.Image.filters.Pixelate.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.RemoveWhite=s(r.BaseFilter,{type:"RemoveWhite",initialize:function(t){t=t||{},this.threshold=t.threshold||30,this.distance=t.distance||20},applyTo:function(t){for(var e,i,r,s=t.getContext("2d"),n=s.getImageData(0,0,t.width,t.height),o=n.data,a=this.threshold,h=this.distance,c=255-a,l=Math.abs,u=0,f=o.length;u<f;u+=4)e=o[u],i=o[u+1],r=o[u+2],e>c&&i>c&&r>c&&l(e-i)<h&&l(e-r)<h&&l(i-r)<h&&(o[u+3]=0)
s.putImageData(n,0,0)},toObject:function(){return i(this.callSuper("toObject"),{threshold:this.threshold,distance:this.distance})}}),e.Image.filters.RemoveWhite.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass
i.Sepia=r(i.BaseFilter,{type:"Sepia",applyTo:function(t){var e,i,r=t.getContext("2d"),s=r.getImageData(0,0,t.width,t.height),n=s.data,o=n.length
for(e=0;e<o;e+=4)i=.3*n[e]+.59*n[e+1]+.11*n[e+2],n[e]=i+100,n[e+1]=i+50,n[e+2]=i+255
r.putImageData(s,0,0)}}),e.Image.filters.Sepia.fromObject=function(t,i){return(t=t||{}).type="Sepia",new e.Image.filters.BaseFilter.fromObject(t,i)}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass
i.Sepia2=r(i.BaseFilter,{type:"Sepia2",applyTo:function(t){var e,i,r,s,n=t.getContext("2d"),o=n.getImageData(0,0,t.width,t.height),a=o.data,h=a.length
for(e=0;e<h;e+=4)i=a[e],r=a[e+1],s=a[e+2],a[e]=(.393*i+.769*r+.189*s)/1.351,a[e+1]=(.349*i+.686*r+.168*s)/1.203,a[e+2]=(.272*i+.534*r+.131*s)/2.14
n.putImageData(o,0,0)}}),e.Image.filters.Sepia2.fromObject=function(t,i){return(t=t||{}).type="Sepia2",new e.Image.filters.BaseFilter.fromObject(t,i)}}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Tint=s(r.BaseFilter,{type:"Tint",initialize:function(t){t=t||{},this.color=t.color||"#000000",this.opacity=void 0!==t.opacity?t.opacity:new e.Color(this.color).getAlpha()},applyTo:function(t){var i,r,s,n,o,a,h,c,l,u=t.getContext("2d"),f=u.getImageData(0,0,t.width,t.height),d=f.data,g=d.length
for(r=(l=new e.Color(this.color).getSource())[0]*this.opacity,s=l[1]*this.opacity,n=l[2]*this.opacity,c=1-this.opacity,i=0;i<g;i+=4)o=d[i],a=d[i+1],h=d[i+2],d[i]=r+o*c,d[i+1]=s+a*c,d[i+2]=n+h*c
u.putImageData(f,0,0)},toObject:function(){return i(this.callSuper("toObject"),{color:this.color,opacity:this.opacity})}}),e.Image.filters.Tint.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Multiply=s(r.BaseFilter,{type:"Multiply",initialize:function(t){t=t||{},this.color=t.color||"#000000"},applyTo:function(t){var i,r,s=t.getContext("2d"),n=s.getImageData(0,0,t.width,t.height),o=n.data,a=o.length
for(r=new e.Color(this.color).getSource(),i=0;i<a;i+=4)o[i]*=r[0]/255,o[i+1]*=r[1]/255,o[i+2]*=r[2]/255
s.putImageData(n,0,0)},toObject:function(){return i(this.callSuper("toObject"),{color:this.color})}}),e.Image.filters.Multiply.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric,i=e.Image.filters,r=e.util.createClass
i.Blend=r(i.BaseFilter,{type:"Blend",initialize:function(t){t=t||{},this.color=t.color||"#000",this.image=t.image||!1,this.mode=t.mode||"multiply",this.alpha=t.alpha||1},applyTo:function(t){var i,r,s,n,o,a,h,c,l,u,f=t.getContext("2d"),d=f.getImageData(0,0,t.width,t.height),g=d.data,p=!1
if(this.image){p=!0
var v=e.util.createCanvasElement()
v.width=this.image.width,v.height=this.image.height
var b=new e.StaticCanvas(v)
b.add(this.image),u=b.getContext("2d").getImageData(0,0,b.width,b.height).data}else i=(u=new e.Color(this.color).getSource())[0]*this.alpha,r=u[1]*this.alpha,s=u[2]*this.alpha
for(var m=0,_=g.length;m<_;m+=4)switch(n=g[m],o=g[m+1],a=g[m+2],p&&(i=u[m]*this.alpha,r=u[m+1]*this.alpha,s=u[m+2]*this.alpha),this.mode){case"multiply":g[m]=n*i/255,g[m+1]=o*r/255,g[m+2]=a*s/255
break
case"screen":g[m]=1-(1-n)*(1-i),g[m+1]=1-(1-o)*(1-r),g[m+2]=1-(1-a)*(1-s)
break
case"add":g[m]=Math.min(255,n+i),g[m+1]=Math.min(255,o+r),g[m+2]=Math.min(255,a+s)
break
case"diff":case"difference":g[m]=Math.abs(n-i),g[m+1]=Math.abs(o-r),g[m+2]=Math.abs(a-s)
break
case"subtract":h=n-i,c=o-r,l=a-s,g[m]=h<0?0:h,g[m+1]=c<0?0:c,g[m+2]=l<0?0:l
break
case"darken":g[m]=Math.min(n,i),g[m+1]=Math.min(o,r),g[m+2]=Math.min(a,s)
break
case"lighten":g[m]=Math.max(n,i),g[m+1]=Math.max(o,r),g[m+2]=Math.max(a,s)}f.putImageData(d,0,0)},toObject:function(){return{color:this.color,image:this.image,mode:this.mode,alpha:this.alpha}}}),e.Image.filters.Blend.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=Math.pow,r=Math.floor,s=Math.sqrt,n=Math.abs,o=Math.max,a=Math.round,h=Math.sin,c=Math.ceil,l=e.Image.filters,u=e.util.createClass
l.Resize=u(l.BaseFilter,{type:"Resize",resizeType:"hermite",scaleX:0,scaleY:0,lanczosLobes:3,applyTo:function(t,e,i){if(1!==e||1!==i){this.rcpScaleX=1/e,this.rcpScaleY=1/i
var r,s=t.width,n=t.height,o=a(s*e),h=a(n*i)
"sliceHack"===this.resizeType&&(r=this.sliceByTwo(t,s,n,o,h)),"hermite"===this.resizeType&&(r=this.hermiteFastResize(t,s,n,o,h)),"bilinear"===this.resizeType&&(r=this.bilinearFiltering(t,s,n,o,h)),"lanczos"===this.resizeType&&(r=this.lanczosResize(t,s,n,o,h)),t.width=o,t.height=h,t.getContext("2d").putImageData(r,0,0)}},sliceByTwo:function(t,i,s,n,a){var h,c=t.getContext("2d"),l=.5,u=.5,f=1,d=1,g=!1,p=!1,v=i,b=s,m=e.util.createCanvasElement(),_=m.getContext("2d")
for(n=r(n),a=r(a),m.width=o(n,i),m.height=o(a,s),n>i&&(l=2,f=-1),a>s&&(u=2,d=-1),h=c.getImageData(0,0,i,s),t.width=o(n,i),t.height=o(a,s),c.putImageData(h,0,0);!g||!p;)i=v,s=b,n*f<r(v*l*f)?v=r(v*l):(v=n,g=!0),a*d<r(b*u*d)?b=r(b*u):(b=a,p=!0),h=c.getImageData(0,0,i,s),_.putImageData(h,0,0),c.clearRect(0,0,v,b),c.drawImage(m,0,0,i,s,0,0,v,b)
return c.getImageData(0,0,n,a)},lanczosResize:function(t,e,o,a,l){var u,f=t.getContext("2d"),d=f.getImageData(0,0,e,o),g=f.getImageData(0,0,a,l),p=d.data,v=g.data,b=(u=this.lanczosLobes,function(t){if(t>u)return 0
if(t*=Math.PI,n(t)<1e-16)return 1
var e=t/u
return h(t)*h(e)/t/e}),m=this.rcpScaleX,_=this.rcpScaleY,y=2/this.rcpScaleX,x=2/this.rcpScaleY,C=c(m*this.lanczosLobes/2),S=c(_*this.lanczosLobes/2),w={},O={},T={}
return function t(h){var c,u,f,d,j,k,M,D,A,P,E
for(O.x=(h+.5)*m,T.x=r(O.x),c=0;c<l;c++){for(O.y=(c+.5)*_,T.y=r(O.y),j=0,k=0,M=0,D=0,A=0,u=T.x-C;u<=T.x+C;u++)if(!(u<0||u>=e)){P=r(1e3*n(u-O.x)),w[P]||(w[P]={})
for(var I=T.y-S;I<=T.y+S;I++)I<0||I>=o||(E=r(1e3*n(I-O.y)),w[P][E]||(w[P][E]=b(s(i(P*y,2)+i(E*x,2))/1e3)),(f=w[P][E])>0&&(j+=f,k+=f*p[d=4*(I*e+u)],M+=f*p[d+1],D+=f*p[d+2],A+=f*p[d+3]))}v[d=4*(c*a+h)]=k/j,v[d+1]=M/j,v[d+2]=D/j,v[d+3]=A/j}return++h<a?t(h):g}(0)},bilinearFiltering:function(t,e,i,s,n){var o,a,h,c,l,u,f,d,g,p=0,v=this.rcpScaleX,b=this.rcpScaleY,m=t.getContext("2d"),_=4*(e-1),y=m.getImageData(0,0,e,i).data,x=m.getImageData(0,0,s,n),C=x.data
for(h=0;h<n;h++)for(c=0;c<s;c++)for(l=v*c-(o=r(v*c)),u=b*h-(a=r(b*h)),g=4*(a*e+o),f=0;f<4;f++)d=y[g+f]*(1-l)*(1-u)+y[g+4+f]*l*(1-u)+y[g+_+f]*u*(1-l)+y[g+_+4+f]*l*u,C[p++]=d
return x},hermiteFastResize:function(t,e,i,o,a){for(var h=this.rcpScaleX,l=this.rcpScaleY,u=c(h/2),f=c(l/2),d=t.getContext("2d"),g=d.getImageData(0,0,e,i).data,p=d.getImageData(0,0,o,a),v=p.data,b=0;b<a;b++)for(var m=0;m<o;m++){for(var _=4*(m+b*o),y=0,x=0,C=0,S=0,w=0,O=0,T=0,j=(b+.5)*l,k=r(b*l);k<(b+1)*l;k++)for(var M=n(j-(k+.5))/f,D=(m+.5)*h,A=M*M,P=r(m*h);P<(m+1)*h;P++){var E=n(D-(P+.5))/u,I=s(A+E*E)
I>1&&I<-1||(y=2*I*I*I-3*I*I+1)>0&&(T+=y*g[(E=4*(P+k*e))+3],C+=y,g[E+3]<255&&(y=y*g[E+3]/250),S+=y*g[E],w+=y*g[E+1],O+=y*g[E+2],x+=y)}v[_]=S/x,v[_+1]=w/x,v[_+2]=O/x,v[_+3]=T/C}return p},toObject:function(){return{type:this.type,scaleX:this.scaleX,scaleY:this.scaleY,resizeType:this.resizeType,lanczosLobes:this.lanczosLobes}}}),e.Image.filters.Resize.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.ColorMatrix=s(r.BaseFilter,{type:"ColorMatrix",initialize:function(t){t||(t={}),this.matrix=t.matrix||[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]},applyTo:function(t){var e,i,r,s,n,o=t.getContext("2d"),a=o.getImageData(0,0,t.width,t.height),h=a.data,c=h.length,l=this.matrix
for(e=0;e<c;e+=4)i=h[e],r=h[e+1],s=h[e+2],n=h[e+3],h[e]=i*l[0]+r*l[1]+s*l[2]+n*l[3]+l[4],h[e+1]=i*l[5]+r*l[6]+s*l[7]+n*l[8]+l[9],h[e+2]=i*l[10]+r*l[11]+s*l[12]+n*l[13]+l[14],h[e+3]=i*l[15]+r*l[16]+s*l[17]+n*l[18]+l[19]
o.putImageData(a,0,0)},toObject:function(){return i(this.callSuper("toObject"),{type:this.type,matrix:this.matrix})}}),e.Image.filters.ColorMatrix.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Contrast=s(r.BaseFilter,{type:"Contrast",initialize:function(t){t=t||{},this.contrast=t.contrast||0},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,s=259*(this.contrast+255)/(255*(259-this.contrast)),n=0,o=r.length;n<o;n+=4)r[n]=s*(r[n]-128)+128,r[n+1]=s*(r[n+1]-128)+128,r[n+2]=s*(r[n+2]-128)+128
e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{contrast:this.contrast})}}),e.Image.filters.Contrast.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,s=e.util.createClass
r.Saturate=s(r.BaseFilter,{type:"Saturate",initialize:function(t){t=t||{},this.saturate=t.saturate||0},applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),s=r.data,n=.01*-this.saturate,o=0,a=s.length;o<a;o+=4)e=Math.max(s[o],s[o+1],s[o+2]),s[o]+=e!==s[o]?(e-s[o])*n:0,s[o+1]+=e!==s[o+1]?(e-s[o+1])*n:0,s[o+2]+=e!==s[o+2]?(e-s[o+2])*n:0
i.putImageData(r,0,0)},toObject:function(){return i(this.callSuper("toObject"),{saturate:this.saturate})}}),e.Image.filters.Saturate.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict"
var e=t.fabric||(t.fabric={}),i=e.util.toFixed,r=e.Object.NUM_FRACTION_DIGITS
if(e.Text)e.warn("fabric.Text is already defined")
else{var s=e.Object.prototype.stateProperties.concat()
s.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","textBackgroundColor","charSpacing")
var n=e.Object.prototype.cacheProperties.concat()
n.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","textBackgroundColor","charSpacing","styles"),e.Text=e.util.createClass(e.Object,{_dimensionAffectingProps:["fontSize","fontWeight","fontFamily","fontStyle","lineHeight","text","charSpacing","textAlign"],_reNewline:/\r?\n/,_reSpacesAndTabs:/[ \t\r]+/g,type:"text",fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",textDecoration:"",textAlign:"left",fontStyle:"",lineHeight:1.16,textBackgroundColor:"",stateProperties:s,cacheProperties:n,stroke:null,shadow:null,_fontSizeFraction:.25,_fontSizeMult:1.13,charSpacing:0,initialize:function(t,e){e=e||{},this.text=t,this.__skipDimension=!0,this.callSuper("initialize",e),this.__skipDimension=!1,this._initDimensions(),this.setCoords(),this.setupState({propertySet:"_dimensionAffectingProps"})},_initDimensions:function(t){this.__skipDimension||(t||(t=e.util.createCanvasElement().getContext("2d"),this._setTextStyles(t)),this._textLines=this._splitTextIntoLines(),this._clearCache(),this.width=this._getTextWidth(t)||this.cursorWidth||2,this.height=this._getTextHeight(t))},toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},_getCacheCanvasDimensions:function(){var t=this.callSuper("_getCacheCanvasDimensions"),e=this.fontSize
return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t},_render:function(t){this._setTextStyles(t),this.group&&"path-group"===this.group.type&&t.translate(this.left,this.top),this._renderTextLinesBackground(t),this._renderText(t),this._renderTextDecoration(t)},_renderText:function(t){this._renderTextFill(t),this._renderTextStroke(t)},_setTextStyles:function(t){t.textBaseline="alphabetic",t.font=this._getFontDeclaration()},_getTextHeight:function(){return this._getHeightOfSingleLine()+(this._textLines.length-1)*this._getHeightOfLine()},_getTextWidth:function(t){for(var e=this._getLineWidth(t,0),i=1,r=this._textLines.length;i<r;i++){var s=this._getLineWidth(t,i)
s>e&&(e=s)}return e},_renderChars:function(t,e,i,r,s){var n,o,a=t.slice(0,-4)
if(this[a].toLive){var h=-this.width/2+this[a].offsetX||0,c=-this.height/2+this[a].offsetY||0
e.save(),e.translate(h,c),r-=h,s-=c}if(0!==this.charSpacing)for(var l=this._getWidthOfCharSpacing(),u=0,f=(i=i.split("")).length;u<f;u++)n=i[u],o=e.measureText(n).width+l,e[t](n,r,s),r+=o>0?o:0
else e[t](i,r,s)
this[a].toLive&&e.restore()},_renderTextLine:function(t,e,i,r,s,n){s-=this.fontSize*this._fontSizeFraction
var o=this._getLineWidth(e,n)
if("justify"!==this.textAlign||this.width<o)this._renderChars(t,e,i,r,s,n)
else for(var a,h=i.split(/\s+/),c=0,l=this._getWidthOfWords(e,h.join(" "),n,0),u=this.width-l,f=h.length-1,d=f>0?u/f:0,g=0,p=0,v=h.length;p<v;p++){for(;" "===i[c]&&c<i.length;)c++
a=h[p],this._renderChars(t,e,a,r+g,s,n,c),g+=this._getWidthOfWords(e,a,n,c)+d,c+=a.length}},_getWidthOfWords:function(t,e){var i=t.measureText(e).width
return 0!==this.charSpacing&&(i+=e.split("").length*this._getWidthOfCharSpacing()),i>0?i:0},_getLeftOffset:function(){return-this.width/2},_getTopOffset:function(){return-this.height/2},isEmptyStyles:function(){return!0},_renderTextCommon:function(t,e){for(var i=0,r=this._getLeftOffset(),s=this._getTopOffset(),n=0,o=this._textLines.length;n<o;n++){var a=this._getHeightOfLine(t,n),h=a/this.lineHeight,c=this._getLineWidth(t,n),l=this._getLineLeftOffset(c)
this._renderTextLine(e,t,this._textLines[n],r+l,s+i+h,n),i+=a}},_renderTextFill:function(t){!this.fill&&this.isEmptyStyles()||this._renderTextCommon(t,"fillText")},_renderTextStroke:function(t){(this.stroke&&0!==this.strokeWidth||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())},_getHeightOfLine:function(){return this._getHeightOfSingleLine()*this.lineHeight},_getHeightOfSingleLine:function(){return this.fontSize*this._fontSizeMult},_renderTextLinesBackground:function(t){if(this.textBackgroundColor){var e,i,r,s=0,n=t.fillStyle
t.fillStyle=this.textBackgroundColor
for(var o=0,a=this._textLines.length;o<a;o++)e=this._getHeightOfLine(t,o),(i=this._getLineWidth(t,o))>0&&(r=this._getLineLeftOffset(i),t.fillRect(this._getLeftOffset()+r,this._getTopOffset()+s,i,e/this.lineHeight)),s+=e
t.fillStyle=n,this._removeShadow(t)}},_getLineLeftOffset:function(t){return"center"===this.textAlign?(this.width-t)/2:"right"===this.textAlign?this.width-t:0},_clearCache:function(){this.__lineWidths=[],this.__lineHeights=[]},_shouldClearDimensionCache:function(){var t=this._forceClearCache
return t||(t=this.hasStateChanged("_dimensionAffectingProps")),t&&(this.saveState({propertySet:"_dimensionAffectingProps"}),this.dirty=!0),t},_getLineWidth:function(t,e){if(this.__lineWidths[e])return-1===this.__lineWidths[e]?this.width:this.__lineWidths[e]
var i,r=this._textLines[e]
return i=""===r?0:this._measureLine(t,e),this.__lineWidths[e]=i,i&&"justify"===this.textAlign&&r.split(/\s+/).length>1&&(this.__lineWidths[e]=-1),i},_getWidthOfCharSpacing:function(){return 0!==this.charSpacing?this.fontSize*this.charSpacing/1e3:0},_measureLine:function(t,e){var i,r=this._textLines[e],s=t.measureText(r).width,n=0
return 0!==this.charSpacing&&(n=(r.split("").length-1)*this._getWidthOfCharSpacing()),(i=s+n)>0?i:0},_renderTextDecoration:function(t){if(this.textDecoration){var e=this.height/2,i=this,r=[]
this.textDecoration.indexOf("underline")>-1&&r.push(.85),this.textDecoration.indexOf("line-through")>-1&&r.push(.43),this.textDecoration.indexOf("overline")>-1&&r.push(-.12),r.length>0&&function(r){var s,n,o,a,h,c,l,u=0
for(s=0,n=i._textLines.length;s<n;s++){for(h=i._getLineWidth(t,s),c=i._getLineLeftOffset(h),l=i._getHeightOfLine(t,s),o=0,a=r.length;o<a;o++)t.fillRect(i._getLeftOffset()+c,u+(i._fontSizeMult-1+r[o])*i.fontSize-e,h,i.fontSize/15)
u+=l}}(r)}},_getFontDeclaration:function(){return[e.isLikelyNode?this.fontWeight:this.fontStyle,e.isLikelyNode?this.fontStyle:this.fontWeight,this.fontSize+"px",e.isLikelyNode?'"'+this.fontFamily+'"':this.fontFamily].join(" ")},render:function(t,e){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._shouldClearDimensionCache()&&(this._setTextStyles(t),this._initDimensions(t)),this.callSuper("render",t,e)))},_splitTextIntoLines:function(){return this.text.split(this._reNewline)},toObject:function(t){var e=["text","fontSize","fontWeight","fontFamily","fontStyle","lineHeight","textDecoration","textAlign","textBackgroundColor","charSpacing"].concat(t)
return this.callSuper("toObject",e)},toSVG:function(t){this.ctx||(this.ctx=e.util.createCanvasElement().getContext("2d"))
var i=this._createBaseSVGMarkup(),r=this._getSVGLeftTopOffsets(this.ctx),s=this._getSVGTextAndBg(r.textTop,r.textLeft)
return this._wrapSVGTextAndBg(i,s),t?t(i.join("")):i.join("")},_getSVGLeftTopOffsets:function(t){var e=this._getHeightOfLine(t,0)
return{textLeft:-this.width/2+(this.group&&"path-group"===this.group.type?this.left:0),textTop:0+(this.group&&"path-group"===this.group.type?-this.top:0),lineTop:e}},_wrapSVGTextAndBg:function(t,e){var i=this.getSvgFilter(),r=""===i?"":' style="'+i+'"'
t.push("\t<g ",this.getSvgId(),'transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"',r,">\n",e.textBgRects.join(""),'\t\t<text xml:space="preserve" ',this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",this.textDecoration?'text-decoration="'+this.textDecoration+'" ':"",'style="',this.getSvgStyles(!0),'" >\n',e.textSpans.join(""),"\t\t</text>\n","\t</g>\n")},getSvgStyles:function(t){return e.Object.prototype.getSvgStyles.call(this,t)+" white-space: pre;"},_getSVGTextAndBg:function(t,e){var i=[],r=[],s=0
this._setSVGBg(r)
for(var n=0,o=this._textLines.length;n<o;n++)this.textBackgroundColor&&this._setSVGTextLineBg(r,n,e,t,s),this._setSVGTextLineText(n,i,s,e,t,r),s+=this._getHeightOfLine(this.ctx,n)
return{textSpans:i,textBgRects:r}},_setSVGTextLineText:function(t,s,n,o,a){var h=this.fontSize*(this._fontSizeMult-this._fontSizeFraction)-a+n-this.height/2
"justify"!==this.textAlign?s.push('\t\t\t<tspan x="',i(o+this._getLineLeftOffset(this._getLineWidth(this.ctx,t)),r),'" ','y="',i(h,r),'" ',this._getFillAttributes(this.fill),">",e.util.string.escapeXml(this._textLines[t]),"</tspan>\n"):this._setSVGTextLineJustifed(t,s,h,o)},_setSVGTextLineJustifed:function(t,s,n,o){var a=e.util.createCanvasElement().getContext("2d")
this._setTextStyles(a)
var h,c,l=this._textLines[t].split(/\s+/),u=this._getWidthOfWords(a,l.join("")),f=this.width-u,d=l.length-1,g=d>0?f/d:0,p=this._getFillAttributes(this.fill)
for(o+=this._getLineLeftOffset(this._getLineWidth(a,t)),t=0,c=l.length;t<c;t++)h=l[t],s.push('\t\t\t<tspan x="',i(o,r),'" ','y="',i(n,r),'" ',p,">",e.util.string.escapeXml(h),"</tspan>\n"),o+=this._getWidthOfWords(a,h)+g},_setSVGTextLineBg:function(t,e,s,n,o){t.push("\t\t<rect ",this._getFillAttributes(this.textBackgroundColor),' x="',i(s+this._getLineLeftOffset(this._getLineWidth(this.ctx,e)),r),'" y="',i(o-this.height/2,r),'" width="',i(this._getLineWidth(this.ctx,e),r),'" height="',i(this._getHeightOfLine(this.ctx,e)/this.lineHeight,r),'"></rect>\n')},_setSVGBg:function(t){this.backgroundColor&&t.push("\t\t<rect ",this._getFillAttributes(this.backgroundColor),' x="',i(-this.width/2,r),'" y="',i(-this.height/2,r),'" width="',i(this.width,r),'" height="',i(this.height,r),'"></rect>\n')},_getFillAttributes:function(t){var i=t&&"string"==typeof t?new e.Color(t):""
return i&&i.getSource()&&1!==i.getAlpha()?'opacity="'+i.getAlpha()+'" fill="'+i.setAlpha(1).toRgb()+'"':'fill="'+t+'"'},_set:function(t,e){this.callSuper("_set",t,e),this._dimensionAffectingProps.indexOf(t)>-1&&(this._initDimensions(),this.setCoords())},complexity:function(){return 1}}),e.Text.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size text-decoration text-anchor".split(" ")),e.Text.DEFAULT_SVG_FONT_SIZE=16,e.Text.fromElement=function(t,i){if(!t)return null
var r=e.parseAttributes(t,e.Text.ATTRIBUTE_NAMES);(i=e.util.object.extend(i?e.util.object.clone(i):{},r)).top=i.top||0,i.left=i.left||0,"dx"in r&&(i.left+=r.dx),"dy"in r&&(i.top+=r.dy),"fontSize"in i||(i.fontSize=e.Text.DEFAULT_SVG_FONT_SIZE),i.originX||(i.originX="left")
var s=""
"textContent"in t?s=t.textContent:"firstChild"in t&&null!==t.firstChild&&"data"in t.firstChild&&null!==t.firstChild.data&&(s=t.firstChild.data),s=s.replace(/^\s+|\s+$|\n+/g,"").replace(/\s+/g," ")
var n=new e.Text(s,i),o=n.getHeight()/n.height,a=((n.height+n.strokeWidth)*n.lineHeight-n.height)*o,h=n.getHeight()+a,c=0
return"left"===n.originX&&(c=n.getWidth()/2),"right"===n.originX&&(c=-n.getWidth()/2),n.set({left:n.getLeft()+c,top:n.getTop()-h/2+n.fontSize*(.18+n._fontSizeFraction)/n.lineHeight}),n},e.Text.fromObject=function(t,i,r){return e.Object._fromObject("Text",t,i,r,"text")},e.util.createAccessors(e.Text)}}("undefined"!=typeof exports?exports:this),function(){var t=fabric.util.object.clone
fabric.IText=fabric.util.createClass(fabric.Text,fabric.Observable,{type:"i-text",selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"#333",cursorDelay:1e3,cursorDuration:600,styles:null,caching:!0,_reSpace:/\s|\n/,_currentCursorOpacity:0,_selectionDirection:null,_abortCursorAnimation:!1,__widthOfSpace:[],initialize:function(t,e){this.styles=e?e.styles||{}:{},this.callSuper("initialize",t,e),this.initBehavior()},_clearCache:function(){this.callSuper("_clearCache"),this.__widthOfSpace=[]},isEmptyStyles:function(){if(!this.styles)return!0
var t=this.styles
for(var e in t)for(var i in t[e])for(var r in t[e][i])return!1
return!0},setSelectionStart:function(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)},setSelectionEnd:function(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)},_updateAndFire:function(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()},_fireSelectionChanged:function(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},getSelectionStyles:function(t,e){if(2===arguments.length){for(var i=[],r=t;r<e;r++)i.push(this.getSelectionStyles(r))
return i}var s=this.get2DCursorLocation(t)
return this._getStyleDeclaration(s.lineIndex,s.charIndex)||{}},setSelectionStyles:function(t){if(this.selectionStart===this.selectionEnd)this._extendStyles(this.selectionStart,t)
else for(var e=this.selectionStart;e<this.selectionEnd;e++)this._extendStyles(e,t)
return this._forceClearCache=!0,this},_extendStyles:function(t,e){var i=this.get2DCursorLocation(t)
this._getLineStyle(i.lineIndex)||this._setLineStyle(i.lineIndex,{}),this._getStyleDeclaration(i.lineIndex,i.charIndex)||this._setStyleDeclaration(i.lineIndex,i.charIndex,{}),fabric.util.object.extend(this._getStyleDeclaration(i.lineIndex,i.charIndex),e)},_initDimensions:function(t){t||this.clearContextTop(),this.callSuper("_initDimensions",t)},render:function(t,e){this.clearContextTop(),this.callSuper("render",t,e),this.cursorOffsetCache={},this.renderCursorOrSelection()},_render:function(t){this.callSuper("_render",t),this.ctx=t},clearContextTop:function(){if(this.active&&this.isEditing&&this.canvas&&this.canvas.contextTop){var t=this.canvas.contextTop
t.save(),t.transform.apply(t,this.canvas.viewportTransform),this.transform(t),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this._clearTextArea(t),t.restore()}},renderCursorOrSelection:function(){if(this.active&&this.isEditing){var t,e,i=this.text.split("")
this.canvas&&this.canvas.contextTop?((e=this.canvas.contextTop).save(),e.transform.apply(e,this.canvas.viewportTransform),this.transform(e),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),this._clearTextArea(e)):(e=this.ctx).save(),this.selectionStart===this.selectionEnd?(t=this._getCursorBoundaries(i,"cursor"),this.renderCursor(t,e)):(t=this._getCursorBoundaries(i,"selection"),this.renderSelection(i,t,e)),e.restore()}},_clearTextArea:function(t){var e=this.width+4,i=this.height+4
t.clearRect(-e/2,-i/2,e,i)},get2DCursorLocation:function(t){void 0===t&&(t=this.selectionStart)
for(var e=this._textLines.length,i=0;i<e;i++){if(t<=this._textLines[i].length)return{lineIndex:i,charIndex:t}
t-=this._textLines[i].length+1}return{lineIndex:i-1,charIndex:this._textLines[i-1].length<t?this._textLines[i-1].length:t}},getCurrentCharStyle:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1)
return{fontSize:i&&i.fontSize||this.fontSize,fill:i&&i.fill||this.fill,textBackgroundColor:i&&i.textBackgroundColor||this.textBackgroundColor,textDecoration:i&&i.textDecoration||this.textDecoration,fontFamily:i&&i.fontFamily||this.fontFamily,fontWeight:i&&i.fontWeight||this.fontWeight,fontStyle:i&&i.fontStyle||this.fontStyle,stroke:i&&i.stroke||this.stroke,strokeWidth:i&&i.strokeWidth||this.strokeWidth}},getCurrentCharFontSize:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1)
return i&&i.fontSize?i.fontSize:this.fontSize},getCurrentCharColor:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1)
return i&&i.fill?i.fill:this.cursorColor},_getCursorBoundaries:function(t,e){var i=Math.round(this._getLeftOffset()),r=this._getTopOffset(),s=this._getCursorBoundariesOffsets(t,e)
return{left:i,top:r,leftOffset:s.left+s.lineLeft,topOffset:s.top}},_getCursorBoundariesOffsets:function(t,e){if(this.cursorOffsetCache&&"top"in this.cursorOffsetCache)return this.cursorOffsetCache
for(var i,r=0,s=0,n=0,o=0,a=0,h=0;h<this.selectionStart;h++)"\n"===t[h]?(a=0,o+=this._getHeightOfLine(this.ctx,s),s++,n=0):(a+=this._getWidthOfChar(this.ctx,t[h],s,n),n++),r=this._getLineLeftOffset(this._getLineWidth(this.ctx,s))
return"cursor"===e&&(o+=(1-this._fontSizeFraction)*this._getHeightOfLine(this.ctx,s)/this.lineHeight-this.getCurrentCharFontSize(s,n)*(1-this._fontSizeFraction)),0!==this.charSpacing&&n===this._textLines[s].length&&(a-=this._getWidthOfCharSpacing()),i={top:o,left:a>0?a:0,lineLeft:r},this.cursorOffsetCache=i,this.cursorOffsetCache},renderCursor:function(t,e){var i=this.get2DCursorLocation(),r=i.lineIndex,s=i.charIndex,n=this.getCurrentCharFontSize(r,s),o=t.leftOffset,a=this.scaleX*this.canvas.getZoom(),h=this.cursorWidth/a
e.fillStyle=this.getCurrentCharColor(r,s),e.globalAlpha=this.__isMousedown?1:this._currentCursorOpacity,e.fillRect(t.left+o-h/2,t.top+t.topOffset,h,n)},renderSelection:function(t,e,i){i.fillStyle=this.selectionColor
for(var r=this.get2DCursorLocation(this.selectionStart),s=this.get2DCursorLocation(this.selectionEnd),n=r.lineIndex,o=s.lineIndex,a=n;a<=o;a++){var h,c=this._getLineLeftOffset(this._getLineWidth(i,a))||0,l=this._getHeightOfLine(this.ctx,a),u=0,f=this._textLines[a]
if(a===n){for(var d=0,g=f.length;d<g;d++)d>=r.charIndex&&(a!==o||d<s.charIndex)&&(u+=this._getWidthOfChar(i,f[d],a,d)),d<r.charIndex&&(c+=this._getWidthOfChar(i,f[d],a,d))
d===f.length&&(u-=this._getWidthOfCharSpacing())}else if(a>n&&a<o)u+=this._getLineWidth(i,a)||5
else if(a===o){for(var p=0,v=s.charIndex;p<v;p++)u+=this._getWidthOfChar(i,f[p],a,p)
s.charIndex===f.length&&(u-=this._getWidthOfCharSpacing())}h=l,(this.lineHeight<1||a===o&&this.lineHeight>1)&&(l/=this.lineHeight),i.fillRect(e.left+c,e.top+e.topOffset,u>0?u:0,l),e.topOffset+=h}},_renderChars:function(t,e,i,r,s,n,o){if(this.isEmptyStyles())return this._renderCharsFast(t,e,i,r,s)
o=o||0
var a,h,c=this._getHeightOfLine(e,n),l=""
e.save(),s-=c/this.lineHeight*this._fontSizeFraction
for(var u=o,f=i.length+o;u<=f;u++)a=a||this.getCurrentCharStyle(n,u),h=this.getCurrentCharStyle(n,u+1),(this._hasStyleChanged(a,h)||u===f)&&(this._renderChar(t,e,n,u-1,l,r,s,c),l="",a=h),l+=i[u-o]
e.restore()},_renderCharsFast:function(t,e,i,r,s){"fillText"===t&&this.fill&&this.callSuper("_renderChars",t,e,i,r,s),"strokeText"===t&&(this.stroke&&this.strokeWidth>0||this.skipFillStrokeCheck)&&this.callSuper("_renderChars",t,e,i,r,s)},_renderChar:function(t,e,i,r,s,n,o,a){var h,c,l,u,f,d,g,p,v,b=this._getStyleDeclaration(i,r)
if(b?(c=this._getHeightOfChar(e,s,i,r),u=b.stroke,l=b.fill,d=b.textDecoration):c=this.fontSize,u=(u||this.stroke)&&"strokeText"===t,l=(l||this.fill)&&"fillText"===t,b&&e.save(),h=this._applyCharStylesGetWidth(e,s,i,r,b||null),d=d||this.textDecoration,b&&b.textBackgroundColor&&this._removeShadow(e),0!==this.charSpacing){p=this._getWidthOfCharSpacing(),h=0
for(var m,_=0,y=(g=s.split("")).length;_<y;_++)m=g[_],l&&e.fillText(m,n+h,o),u&&e.strokeText(m,n+h,o),h+=(v=e.measureText(m).width+p)>0?v:0}else l&&e.fillText(s,n,o),u&&e.strokeText(s,n,o);(d||""!==d)&&(f=this._fontSizeFraction*a/this.lineHeight,this._renderCharDecoration(e,d,n,o,f,h,c)),b&&e.restore(),e.translate(h,0)},_hasStyleChanged:function(t,e){return t.fill!==e.fill||t.fontSize!==e.fontSize||t.textBackgroundColor!==e.textBackgroundColor||t.textDecoration!==e.textDecoration||t.fontFamily!==e.fontFamily||t.fontWeight!==e.fontWeight||t.fontStyle!==e.fontStyle||t.stroke!==e.stroke||t.strokeWidth!==e.strokeWidth},_renderCharDecoration:function(t,e,i,r,s,n,o){if(e){var a,h,c=o/15,l={underline:r+o/10,"line-through":r-o*(this._fontSizeFraction+this._fontSizeMult-1)+c,overline:r-(this._fontSizeMult-this._fontSizeFraction)*o},u=["underline","line-through","overline"]
for(a=0;a<u.length;a++)h=u[a],e.indexOf(h)>-1&&t.fillRect(i,l[h],n,c)}},_renderTextLine:function(t,e,i,r,s,n){this.isEmptyStyles()||(s+=this.fontSize*(this._fontSizeFraction+.03)),this.callSuper("_renderTextLine",t,e,i,r,s,n)},_renderTextDecoration:function(t){if(this.isEmptyStyles())return this.callSuper("_renderTextDecoration",t)},_renderTextLinesBackground:function(t){this.callSuper("_renderTextLinesBackground",t)
var e,i,r,s,n,o,a,h,c,l,u=0,f=this._getLeftOffset(),d=this._getTopOffset(),g=""
t.save()
for(var p=0,v=this._textLines.length;p<v;p++)if(e=this._getHeightOfLine(t,p),""!==(s=this._textLines[p])&&this.styles&&this._getLineStyle(p)){i=this._getLineWidth(t,p),r=this._getLineLeftOffset(i),a=h=c=l=0
for(var b=0,m=s.length;b<m;b++)g!==(o=this._getStyleDeclaration(p,b)||{}).textBackgroundColor&&(l&&c&&(t.fillStyle=g,t.fillRect(a,h,c,l)),a=h=c=l=0,g=o.textBackgroundColor||""),o.textBackgroundColor?(n=s[b],g===o.textBackgroundColor&&(g=o.textBackgroundColor,a||(a=f+r+this._getWidthOfCharsAt(t,p,b)),h=d+u,c+=this._getWidthOfChar(t,n,p,b),l=e/this.lineHeight)):g=""
l&&c&&(t.fillStyle=g,t.fillRect(a,h,c,l),a=h=c=l=0),u+=e}else u+=e
t.restore()},_getCacheProp:function(t,e){return t+e.fontSize+e.fontWeight+e.fontStyle},_getFontCache:function(t){return fabric.charWidthsCache[t]||(fabric.charWidthsCache[t]={}),fabric.charWidthsCache[t]},_applyCharStylesGetWidth:function(e,i,r,s,n){var o,a,h,c=n||this._getStyleDeclaration(r,s),l=t(c)
if(this._applyFontStyles(l),h=this._getFontCache(l.fontFamily),a=this._getCacheProp(i,l),!c&&h[a]&&this.caching)return h[a]
"string"==typeof l.shadow&&(l.shadow=new fabric.Shadow(l.shadow))
var u=l.fill||this.fill
return e.fillStyle=u.toLive?u.toLive(e,this):u,l.stroke&&(e.strokeStyle=l.stroke&&l.stroke.toLive?l.stroke.toLive(e,this):l.stroke),e.lineWidth=l.strokeWidth||this.strokeWidth,e.font=this._getFontDeclaration.call(l),l.shadow&&(l.scaleX=this.scaleX,l.scaleY=this.scaleY,l.canvas=this.canvas,l.getObjectScaling=this.getObjectScaling,this._setShadow.call(l,e)),this.caching&&h[a]?h[a]:(o=e.measureText(i).width,this.caching&&(h[a]=o),o)},_applyFontStyles:function(t){t.fontFamily||(t.fontFamily=this.fontFamily),t.fontSize||(t.fontSize=this.fontSize),t.fontWeight||(t.fontWeight=this.fontWeight),t.fontStyle||(t.fontStyle=this.fontStyle)},_getStyleDeclaration:function(e,i,r){return r?this.styles[e]&&this.styles[e][i]?t(this.styles[e][i]):{}:this.styles[e]&&this.styles[e][i]?this.styles[e][i]:null},_setStyleDeclaration:function(t,e,i){this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){delete this.styles[t][e]},_getLineStyle:function(t){return this.styles[t]},_setLineStyle:function(t,e){this.styles[t]=e},_deleteLineStyle:function(t){delete this.styles[t]},_getWidthOfChar:function(t,e,i,r){if(!this._isMeasuring&&"justify"===this.textAlign&&this._reSpacesAndTabs.test(e))return this._getWidthOfSpace(t,i)
t.save()
var s=this._applyCharStylesGetWidth(t,e,i,r)
return 0!==this.charSpacing&&(s+=this._getWidthOfCharSpacing()),t.restore(),s>0?s:0},_getHeightOfChar:function(t,e,i){var r=this._getStyleDeclaration(e,i)
return r&&r.fontSize?r.fontSize:this.fontSize},_getWidthOfCharsAt:function(t,e,i){var r,s,n=0
for(r=0;r<i;r++)s=this._textLines[e][r],n+=this._getWidthOfChar(t,s,e,r)
return n},_measureLine:function(t,e){this._isMeasuring=!0
var i=this._getWidthOfCharsAt(t,e,this._textLines[e].length)
return 0!==this.charSpacing&&(i-=this._getWidthOfCharSpacing()),this._isMeasuring=!1,i>0?i:0},_getWidthOfSpace:function(t,e){if(this.__widthOfSpace[e])return this.__widthOfSpace[e]
var i=this._textLines[e],r=this._getWidthOfWords(t,i,e,0),s=this.width-r,n=i.length-i.replace(this._reSpacesAndTabs,"").length,o=Math.max(s/n,t.measureText(" ").width)
return this.__widthOfSpace[e]=o,o},_getWidthOfWords:function(t,e,i,r){for(var s=0,n=0;n<e.length;n++){var o=e[n]
o.match(/\s/)||(s+=this._getWidthOfChar(t,o,i,n+r))}return s},_getHeightOfLine:function(t,e){if(this.__lineHeights[e])return this.__lineHeights[e]
for(var i=this._textLines[e],r=this._getHeightOfChar(t,e,0),s=1,n=i.length;s<n;s++){var o=this._getHeightOfChar(t,e,s)
o>r&&(r=o)}return this.__lineHeights[e]=r*this.lineHeight*this._fontSizeMult,this.__lineHeights[e]},_getTextHeight:function(t){for(var e,i=0,r=0,s=this._textLines.length;r<s;r++)e=this._getHeightOfLine(t,r),i+=r===s-1?e/this.lineHeight:e
return i},toObject:function(e){return fabric.util.object.extend(this.callSuper("toObject",e),{styles:t(this.styles,!0)})}}),fabric.IText.fromObject=function(t,e,i){return fabric.Object._fromObject("IText",t,e,i,"text")}}(),function(){var t=fabric.util.object.clone
fabric.util.object.extend(fabric.IText.prototype,{initBehavior:function(){this.initAddedHandler(),this.initRemovedHandler(),this.initCursorSelectionHandlers(),this.initDoubleClickSimulation(),this.mouseMoveHandler=this.mouseMoveHandler.bind(this)},onDeselect:function(){this.isEditing&&this.exitEditing(),this.selected=!1,this.callSuper("onDeselect")},initAddedHandler:function(){var t=this
this.on("added",function(){var e=t.canvas
e&&(e._hasITextHandlers||(e._hasITextHandlers=!0,t._initCanvasHandlers(e)),e._iTextInstances=e._iTextInstances||[],e._iTextInstances.push(t))})},initRemovedHandler:function(){var t=this
this.on("removed",function(){var e=t.canvas
e&&(e._iTextInstances=e._iTextInstances||[],fabric.util.removeFromArray(e._iTextInstances,t),0===e._iTextInstances.length&&(e._hasITextHandlers=!1,t._removeCanvasHandlers(e)))})},_initCanvasHandlers:function(t){t._mouseUpITextHandler=function(){t._iTextInstances&&t._iTextInstances.forEach(function(t){t.__isMousedown=!1})}.bind(this),t.on("mouse:up",t._mouseUpITextHandler)},_removeCanvasHandlers:function(t){t.off("mouse:up",t._mouseUpITextHandler)},_tick:function(){this._currentTickState=this._animateCursor(this,1,this.cursorDuration,"_onTickComplete")},_animateCursor:function(t,e,i,r){var s
return s={isAborted:!1,abort:function(){this.isAborted=!0}},t.animate("_currentCursorOpacity",e,{duration:i,onComplete:function(){s.isAborted||t[r]()},onChange:function(){t.canvas&&t.selectionStart===t.selectionEnd&&t.renderCursorOrSelection()},abort:function(){return s.isAborted}}),s},_onTickComplete:function(){var t=this
this._cursorTimeout1&&clearTimeout(this._cursorTimeout1),this._cursorTimeout1=setTimeout(function(){t._currentTickCompleteState=t._animateCursor(t,0,this.cursorDuration/2,"_tick")},100)},initDelayedCursor:function(t){var e=this,i=t?0:this.cursorDelay
this.abortCursorAnimation(),this._currentCursorOpacity=1,this._cursorTimeout2=setTimeout(function(){e._tick()},i)},abortCursorAnimation:function(){var t=this._currentTickState||this._currentTickCompleteState
this._currentTickState&&this._currentTickState.abort(),this._currentTickCompleteState&&this._currentTickCompleteState.abort(),clearTimeout(this._cursorTimeout1),clearTimeout(this._cursorTimeout2),this._currentCursorOpacity=0,t&&this.canvas&&this.canvas.clearContext(this.canvas.contextTop||this.ctx)},selectAll:function(){this.selectionStart=0,this.selectionEnd=this.text.length,this._fireSelectionChanged(),this._updateTextarea()},getSelectedText:function(){return this.text.slice(this.selectionStart,this.selectionEnd)},findWordBoundaryLeft:function(t){var e=0,i=t-1
if(this._reSpace.test(this.text.charAt(i)))for(;this._reSpace.test(this.text.charAt(i));)e++,i--
for(;/\S/.test(this.text.charAt(i))&&i>-1;)e++,i--
return t-e},findWordBoundaryRight:function(t){var e=0,i=t
if(this._reSpace.test(this.text.charAt(i)))for(;this._reSpace.test(this.text.charAt(i));)e++,i++
for(;/\S/.test(this.text.charAt(i))&&i<this.text.length;)e++,i++
return t+e},findLineBoundaryLeft:function(t){for(var e=0,i=t-1;!/\n/.test(this.text.charAt(i))&&i>-1;)e++,i--
return t-e},findLineBoundaryRight:function(t){for(var e=0,i=t;!/\n/.test(this.text.charAt(i))&&i<this.text.length;)e++,i++
return t+e},getNumNewLinesInSelectedText:function(){for(var t=this.getSelectedText(),e=0,i=0,r=t.length;i<r;i++)"\n"===t[i]&&e++
return e},searchWordBoundary:function(t,e){for(var i=this._reSpace.test(this.text.charAt(t))?t-1:t,r=this.text.charAt(i),s=/[ \n\.,;!\?\-]/;!s.test(r)&&i>0&&i<this.text.length;)i+=e,r=this.text.charAt(i)
return s.test(r)&&"\n"!==r&&(i+=1===e?0:1),i},selectWord:function(t){t=t||this.selectionStart
var e=this.searchWordBoundary(t,-1),i=this.searchWordBoundary(t,1)
this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()},selectLine:function(t){t=t||this.selectionStart
var e=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t)
this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea()},enterEditing:function(t){if(!this.isEditing&&this.editable)return this.canvas&&this.exitEditingOnOthers(this.canvas),this.isEditing=!0,this.selected=!0,this.initHiddenTextarea(t),this.hiddenTextarea.focus(),this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick(),this.fire("editing:entered"),this._fireSelectionChanged(),this.canvas?(this.canvas.fire("text:editing:entered",{target:this}),this.initMouseMoveHandler(),this.canvas.renderAll(),this):this},exitEditingOnOthers:function(t){t._iTextInstances&&t._iTextInstances.forEach(function(t){t.selected=!1,t.isEditing&&t.exitEditing()})},initMouseMoveHandler:function(){this.canvas.on("mouse:move",this.mouseMoveHandler)},mouseMoveHandler:function(t){if(this.__isMousedown&&this.isEditing){var e=this.getSelectionStartFromPointer(t.e),i=this.selectionStart,r=this.selectionEnd;(e===this.__selectionStartOnMouseDown&&i!==r||i!==e&&r!==e)&&(e>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=e):(this.selectionStart=e,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this.restartCursorIfNeeded(),this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}},_setEditingProps:function(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0},_updateTextarea:function(){if(this.hiddenTextarea&&!this.inCompositionMode&&(this.cursorOffsetCache={},this.hiddenTextarea.value=this.text,this.hiddenTextarea.selectionStart=this.selectionStart,this.hiddenTextarea.selectionEnd=this.selectionEnd,this.selectionStart===this.selectionEnd)){var t=this._calcTextareaPosition()
this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top,this.hiddenTextarea.style.fontSize=t.fontSize}},_calcTextareaPosition:function(){if(!this.canvas)return{x:1,y:1}
var t=this.text.split(""),e=this._getCursorBoundaries(t,"cursor"),i=this.get2DCursorLocation(),r=i.lineIndex,s=i.charIndex,n=this.getCurrentCharFontSize(r,s),o=e.leftOffset,a=this.calcTransformMatrix(),h={x:e.left+o,y:e.top+e.topOffset+n},c=this.canvas.upperCanvasEl,l=c.width-n,u=c.height-n
return h=fabric.util.transformPoint(h,a),(h=fabric.util.transformPoint(h,this.canvas.viewportTransform)).x<0&&(h.x=0),h.x>l&&(h.x=l),h.y<0&&(h.y=0),h.y>u&&(h.y=u),h.x+=this.canvas._offset.left,h.y+=this.canvas._offset.top,{left:h.x+"px",top:h.y+"px",fontSize:n}},_saveEditingProps:function(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}},_restoreEditingProps:function(){this._savedProps&&(this.hoverCursor=this._savedProps.overCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor))},exitEditing:function(){var t=this._textBeforeEdit!==this.text
return this.selected=!1,this.isEditing=!1,this.selectable=!0,this.selectionEnd=this.selectionStart,this.hiddenTextarea&&(this.hiddenTextarea.blur&&this.hiddenTextarea.blur(),this.canvas&&this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea),this.hiddenTextarea=null),this.abortCursorAnimation(),this._restoreEditingProps(),this._currentCursorOpacity=0,this.fire("editing:exited"),t&&this.fire("modified"),this.canvas&&(this.canvas.off("mouse:move",this.mouseMoveHandler),this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this},_removeExtraneousStyles:function(){for(var t in this.styles)this._textLines[t]||delete this.styles[t]},_removeCharsFromTo:function(t,e){for(;e!==t;)this._removeSingleCharAndStyle(t+1),e--
this.selectionStart=t,this.selectionEnd=t},_removeSingleCharAndStyle:function(t){var e="\n"===this.text[t-1],i=e?t:t-1
this.removeStyleObject(e,i),this.text=this.text.slice(0,t-1)+this.text.slice(t),this._textLines=this._splitTextIntoLines()},insertChars:function(t,e){var i
if(this.selectionEnd-this.selectionStart>1&&this._removeCharsFromTo(this.selectionStart,this.selectionEnd),e||!this.isEmptyStyles())for(var r=0,s=t.length;r<s;r++)e&&(i=fabric.util.object.clone(fabric.copiedTextStyle[r],!0)),this.insertChar(t[r],r<s-1,i)
else this.insertChar(t,!1)},insertChar:function(t,e,i){var r="\n"===this.text[this.selectionStart]
this.text=this.text.slice(0,this.selectionStart)+t+this.text.slice(this.selectionEnd),this._textLines=this._splitTextIntoLines(),this.insertStyleObjects(t,r,i),this.selectionStart+=t.length,this.selectionEnd=this.selectionStart,e||(this._updateTextarea(),this.setCoords(),this._fireSelectionChanged(),this.fire("changed"),this.restartCursorIfNeeded(),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.renderAll()))},restartCursorIfNeeded:function(){this._currentTickState&&!this._currentTickState.isAborted&&this._currentTickCompleteState&&!this._currentTickCompleteState.isAborted||this.initDelayedCursor()},insertNewlineStyleObject:function(e,i,r){this.shiftLineStyles(e,1)
var s={},n={}
if(this.styles[e]&&this.styles[e][i-1]&&(s=this.styles[e][i-1]),r&&s)n[0]=t(s),this.styles[e+1]=n
else{var o=!1
for(var a in this.styles[e]){var h=parseInt(a,10)
h>=i&&(o=!0,n[h-i]=this.styles[e][a],delete this.styles[e][a])}o&&(this.styles[e+1]=n)}this._forceClearCache=!0},insertCharStyleObject:function(e,i,r){var s=this.styles[e],n=t(s)
0!==i||r||(i=1)
for(var o in n){var a=parseInt(o,10)
a>=i&&(s[a+1]=n[a],n[a-1]||delete s[a])}var h=r||t(s[i-1])
h&&(this.styles[e][i]=h),this._forceClearCache=!0},insertStyleObjects:function(t,e,i){var r=this.get2DCursorLocation(),s=r.lineIndex,n=r.charIndex
this._getLineStyle(s)||this._setLineStyle(s,{}),"\n"===t?this.insertNewlineStyleObject(s,n,e):this.insertCharStyleObject(s,n,i)},shiftLineStyles:function(e,i){var r=t(this.styles)
for(var s in r){(n=parseInt(s,10))<=e&&delete r[n]}for(var s in this.styles){var n;(n=parseInt(s,10))>e&&(this.styles[n+i]=r[n],r[n-i]||delete this.styles[n])}},removeStyleObject:function(t,e){var i=this.get2DCursorLocation(e),r=i.lineIndex,s=i.charIndex
this._removeStyleObject(t,i,r,s)},_getTextOnPreviousLine:function(t){return this._textLines[t-1]},_removeStyleObject:function(e,i,r,s){if(e){var n=this._getTextOnPreviousLine(i.lineIndex),o=n?n.length:0
this.styles[r-1]||(this.styles[r-1]={})
for(s in this.styles[r])this.styles[r-1][parseInt(s,10)+o]=this.styles[r][s]
this.shiftLineStyles(i.lineIndex,-1)}else{var a=this.styles[r]
a&&delete a[s]
var h=t(a)
for(var c in h){var l=parseInt(c,10)
l>=s&&0!==l&&(a[l-1]=h[l],delete a[l])}}},insertNewline:function(){this.insertChars("\n")},setSelectionStartEndWithShift:function(t,e,i){i<=t?(e===t?this._selectionDirection="left":"right"===this._selectionDirection&&(this._selectionDirection="left",this.selectionEnd=t),this.selectionStart=i):i>t&&i<e?"right"===this._selectionDirection?this.selectionEnd=i:this.selectionStart=i:(e===t?this._selectionDirection="right":"left"===this._selectionDirection&&(this._selectionDirection="right",this.selectionStart=e),this.selectionEnd=i)},setSelectionInBoundaries:function(){var t=this.text.length
this.selectionStart>t?this.selectionStart=t:this.selectionStart<0&&(this.selectionStart=0),this.selectionEnd>t?this.selectionEnd=t:this.selectionEnd<0&&(this.selectionEnd=0)}})}(),fabric.util.object.extend(fabric.IText.prototype,{initDoubleClickSimulation:function(){this.__lastClickTime=+new Date,this.__lastLastClickTime=+new Date,this.__lastPointer={},this.on("mousedown",this.onMouseDown.bind(this))},onMouseDown:function(t){this.__newClickTime=+new Date
var e=this.canvas.getPointer(t.e)
this.isTripleClick(e,t.e)?(this.fire("tripleclick",t),this._stopEvent(t.e)):this.isDoubleClick(e)&&(this.fire("dblclick",t),this._stopEvent(t.e)),this.__lastLastClickTime=this.__lastClickTime,this.__lastClickTime=this.__newClickTime,this.__lastPointer=e,this.__lastIsEditing=this.isEditing,this.__lastSelected=this.selected},isDoubleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y&&this.__lastIsEditing},isTripleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastClickTime-this.__lastLastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y},_stopEvent:function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},initCursorSelectionHandlers:function(){this.initMousedownHandler(),this.initMouseupHandler(),this.initClicks()},initClicks:function(){this.on("dblclick",function(t){this.selectWord(this.getSelectionStartFromPointer(t.e))}),this.on("tripleclick",function(t){this.selectLine(this.getSelectionStartFromPointer(t.e))})},initMousedownHandler:function(){this.on("mousedown",function(t){if(this.editable&&(!t.e.button||1===t.e.button)){var e=this.canvas.getPointer(t.e)
this.__mousedownX=e.x,this.__mousedownY=e.y,this.__isMousedown=!0,this.selected&&this.setCursorByClick(t.e),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection())}})},_isObjectMoved:function(t){var e=this.canvas.getPointer(t)
return this.__mousedownX!==e.x||this.__mousedownY!==e.y},initMouseupHandler:function(){this.on("mouseup",function(t){this.__isMousedown=!1,!this.editable||this._isObjectMoved(t.e)||t.e.button&&1!==t.e.button||(this.__lastSelected&&!this.__corner&&(this.enterEditing(t.e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection()),this.selected=!0)})},setCursorByClick:function(t){var e=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd
t.shiftKey?this.setSelectionStartEndWithShift(i,r,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())},getSelectionStartFromPointer:function(t){for(var e,i=this.getLocalPointer(t),r=0,s=0,n=0,o=0,a=0,h=this._textLines.length;a<h;a++){e=this._textLines[a],n+=this._getHeightOfLine(this.ctx,a)*this.scaleY
var c=this._getLineWidth(this.ctx,a)
s=this._getLineLeftOffset(c)*this.scaleX
for(var l=0,u=e.length;l<u;l++){if(r=s,s+=this._getWidthOfChar(this.ctx,e[l],a,this.flipX?u-l:l)*this.scaleX,!(n<=i.y||s<=i.x))return this._getNewSelectionStartFromOffset(i,r,s,o+a,u)
o++}if(i.y<n)return this._getNewSelectionStartFromOffset(i,r,s,o+a-1,u)}return this.text.length},_getNewSelectionStartFromOffset:function(t,e,i,r,s){var n=t.x-e,o=r+(i-t.x>n?0:1)
return this.flipX&&(o=s-o),o>this.text.length&&(o=this.text.length),o}}),fabric.util.object.extend(fabric.IText.prototype,{initHiddenTextarea:function(){this.hiddenTextarea=fabric.document.createElement("textarea"),this.hiddenTextarea.setAttribute("autocapitalize","off"),this.hiddenTextarea.setAttribute("autocorrect","off"),this.hiddenTextarea.setAttribute("autocomplete","off"),this.hiddenTextarea.setAttribute("spellcheck","false"),this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea",""),this.hiddenTextarea.setAttribute("wrap","off")
var t=this._calcTextareaPosition()
this.hiddenTextarea.style.cssText="position: absolute; top: "+t.top+"; left: "+t.left+"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; line-height: 1px; paddingｰtop: "+t.fontSize+";",fabric.document.body.appendChild(this.hiddenTextarea),fabric.util.addListener(this.hiddenTextarea,"keydown",this.onKeyDown.bind(this)),fabric.util.addListener(this.hiddenTextarea,"keyup",this.onKeyUp.bind(this)),fabric.util.addListener(this.hiddenTextarea,"input",this.onInput.bind(this)),fabric.util.addListener(this.hiddenTextarea,"copy",this.copy.bind(this)),fabric.util.addListener(this.hiddenTextarea,"cut",this.cut.bind(this)),fabric.util.addListener(this.hiddenTextarea,"paste",this.paste.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionstart",this.onCompositionStart.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionupdate",this.onCompositionUpdate.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionend",this.onCompositionEnd.bind(this)),!this._clickHandlerInitialized&&this.canvas&&(fabric.util.addListener(this.canvas.upperCanvasEl,"click",this.onClick.bind(this)),this._clickHandlerInitialized=!0)},keysMap:{8:"removeChars",9:"exitEditing",27:"exitEditing",13:"insertNewline",33:"moveCursorUp",34:"moveCursorDown",35:"moveCursorRight",36:"moveCursorLeft",37:"moveCursorLeft",38:"moveCursorUp",39:"moveCursorRight",40:"moveCursorDown",46:"forwardDelete"},ctrlKeysMapUp:{67:"copy",88:"cut"},ctrlKeysMapDown:{65:"selectAll"},onClick:function(){this.hiddenTextarea&&this.hiddenTextarea.focus()},onKeyDown:function(t){if(this.isEditing){if(t.keyCode in this.keysMap)this[this.keysMap[t.keyCode]](t)
else{if(!(t.keyCode in this.ctrlKeysMapDown&&(t.ctrlKey||t.metaKey)))return
this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.renderAll()}},onKeyUp:function(t){this.isEditing&&!this._copyDone?t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.renderAll()):this._copyDone=!1},onInput:function(t){if(this.isEditing&&!this.inCompositionMode){var e,i,r,s=this.selectionStart||0,n=this.selectionEnd||0,o=this.text.length,a=this.hiddenTextarea.value.length
a>o?(r="left"===this._selectionDirection?n:s,e=a-o,i=this.hiddenTextarea.value.slice(r,r+e)):(e=a-o+n-s,i=this.hiddenTextarea.value.slice(s,s+e)),this.insertChars(i),t.stopPropagation()}},onCompositionStart:function(){this.inCompositionMode=!0,this.prevCompositionLength=0,this.compositionStart=this.selectionStart},onCompositionEnd:function(){this.inCompositionMode=!1},onCompositionUpdate:function(t){var e=t.data
this.selectionStart=this.compositionStart,this.selectionEnd=this.selectionEnd===this.selectionStart?this.compositionStart+this.prevCompositionLength:this.selectionEnd,this.insertChars(e,!1),this.prevCompositionLength=e.length},forwardDelete:function(t){if(this.selectionStart===this.selectionEnd){if(this.selectionStart===this.text.length)return
this.moveCursorRight(t)}this.removeChars(t)},copy:function(t){if(this.selectionStart!==this.selectionEnd){var e=this.getSelectedText(),i=this._getClipboardData(t)
i&&i.setData("text",e),fabric.copiedText=e,fabric.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd),t.stopImmediatePropagation(),t.preventDefault(),this._copyDone=!0}},paste:function(t){var e=null,i=this._getClipboardData(t),r=!0
i?(e=i.getData("text").replace(/\r/g,""),fabric.copiedTextStyle&&fabric.copiedText===e||(r=!1)):e=fabric.copiedText,e&&this.insertChars(e,r),t.stopImmediatePropagation(),t.preventDefault()},cut:function(t){this.selectionStart!==this.selectionEnd&&(this.copy(t),this.removeChars(t))},_getClipboardData:function(t){return t&&t.clipboardData||fabric.window.clipboardData},_getWidthBeforeCursor:function(t,e){for(var i,r=this._textLines[t].slice(0,e),s=this._getLineWidth(this.ctx,t),n=this._getLineLeftOffset(s),o=0,a=r.length;o<a;o++)i=r[o],n+=this._getWidthOfChar(this.ctx,i,t,o)
return n},getDownCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),r=this.get2DCursorLocation(i),s=r.lineIndex
if(s===this._textLines.length-1||t.metaKey||34===t.keyCode)return this.text.length-i
var n=r.charIndex,o=this._getWidthBeforeCursor(s,n),a=this._getIndexOnLine(s+1,o)
return this._textLines[s].slice(n).length+a+2},_getSelectionForOffset:function(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart},getUpCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),r=this.get2DCursorLocation(i),s=r.lineIndex
if(0===s||t.metaKey||33===t.keyCode)return-i
var n=r.charIndex,o=this._getWidthBeforeCursor(s,n),a=this._getIndexOnLine(s-1,o),h=this._textLines[s].slice(0,n)
return-this._textLines[s-1].length+a-h.length},_getIndexOnLine:function(t,e){for(var i,r=this._getLineWidth(this.ctx,t),s=this._textLines[t],n=this._getLineLeftOffset(r),o=0,a=0,h=s.length;a<h;a++){var c=s[a],l=this._getWidthOfChar(this.ctx,c,t,a)
if((n+=l)>e){i=!0
var u=n-l,f=n,d=Math.abs(u-e)
o=Math.abs(f-e)<d?a:a-1
break}}return i||(o=s.length-1),o},moveCursorDown:function(t){this.selectionStart>=this.text.length&&this.selectionEnd>=this.text.length||this._moveCursorUpOrDown("Down",t)},moveCursorUp:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorUpOrDown("Up",t)},_moveCursorUpOrDown:function(t,e){var i=this["get"+t+"CursorOffset"](e,"right"===this._selectionDirection)
e.shiftKey?this.moveCursorWithShift(i):this.moveCursorWithoutShift(i),0!==i&&(this.setSelectionInBoundaries(),this.abortCursorAnimation(),this._currentCursorOpacity=1,this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},moveCursorWithShift:function(t){var e="left"===this._selectionDirection?this.selectionStart+t:this.selectionEnd+t
return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),0!==t},moveCursorWithoutShift:function(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),0!==t},moveCursorLeft:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorLeftOrRight("Left",t)},_move:function(t,e,i){var r
if(t.altKey)r=this["findWordBoundary"+i](this[e])
else{if(!t.metaKey&&35!==t.keyCode&&36!==t.keyCode)return this[e]+="Left"===i?-1:1,!0
r=this["findLineBoundary"+i](this[e])}if(void 0!==typeof r&&this[e]!==r)return this[e]=r,!0},_moveLeft:function(t,e){return this._move(t,e,"Left")},_moveRight:function(t,e){return this._move(t,e,"Right")},moveCursorLeftWithoutShift:function(t){var e=!0
return this._selectionDirection="left",this.selectionEnd===this.selectionStart&&0!==this.selectionStart&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e},moveCursorLeftWithShift:function(t){return"right"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):0!==this.selectionStart?(this._selectionDirection="left",this._moveLeft(t,"selectionStart")):void 0},moveCursorRight:function(t){this.selectionStart>=this.text.length&&this.selectionEnd>=this.text.length||this._moveCursorLeftOrRight("Right",t)},_moveCursorLeftOrRight:function(t,e){var i="moveCursor"+t+"With"
this._currentCursorOpacity=1,e.shiftKey?i+="Shift":i+="outShift",this[i](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},moveCursorRightWithShift:function(t){return"left"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this.text.length?(this._selectionDirection="right",this._moveRight(t,"selectionEnd")):void 0},moveCursorRightWithoutShift:function(t){var e=!0
return this._selectionDirection="right",this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e},removeChars:function(t){this.selectionStart===this.selectionEnd?this._removeCharsNearCursor(t):this._removeCharsFromTo(this.selectionStart,this.selectionEnd),this.set("dirty",!0),this.setSelectionEnd(this.selectionStart),this._removeExtraneousStyles(),this.canvas&&this.canvas.renderAll(),this.setCoords(),this.fire("changed"),this.canvas&&this.canvas.fire("text:changed",{target:this})},_removeCharsNearCursor:function(t){if(0!==this.selectionStart)if(t.metaKey){var e=this.findLineBoundaryLeft(this.selectionStart)
this._removeCharsFromTo(e,this.selectionStart),this.setSelectionStart(e)}else if(t.altKey){var i=this.findWordBoundaryLeft(this.selectionStart)
this._removeCharsFromTo(i,this.selectionStart),this.setSelectionStart(i)}else this._removeSingleCharAndStyle(this.selectionStart),this.setSelectionStart(this.selectionStart-1)}}),function(){var t=fabric.util.toFixed,e=fabric.Object.NUM_FRACTION_DIGITS
fabric.util.object.extend(fabric.IText.prototype,{_setSVGTextLineText:function(t,e,i,r,s,n){this._getLineStyle(t)?this._setSVGTextLineChars(t,e,i,r,n):fabric.Text.prototype._setSVGTextLineText.call(this,t,e,i,r,s)},_setSVGTextLineChars:function(t,e,i,r,s){for(var n=this._textLines[t],o=0,a=this._getLineLeftOffset(this._getLineWidth(this.ctx,t))-this.width/2,h=this._getSVGLineTopOffset(t),c=this._getHeightOfLine(this.ctx,t),l=0,u=n.length;l<u;l++){var f=this._getStyleDeclaration(t,l)||{}
e.push(this._createTextCharSpan(n[l],f,a,h.lineTop+h.offset,o))
var d=this._getWidthOfChar(this.ctx,n[l],t,l)
f.textBackgroundColor&&s.push(this._createTextCharBg(f,a,h.lineTop,c,d,o)),o+=d}},_getSVGLineTopOffset:function(t){for(var e,i=0,r=0;r<t;r++)i+=this._getHeightOfLine(this.ctx,r)
return e=this._getHeightOfLine(this.ctx,r),{lineTop:i,offset:(this._fontSizeMult-this._fontSizeFraction)*e/(this.lineHeight*this._fontSizeMult)}},_createTextCharBg:function(i,r,s,n,o,a){return['\t\t<rect fill="',i.textBackgroundColor,'" x="',t(r+a,e),'" y="',t(s-this.height/2,e),'" width="',t(o,e),'" height="',t(n/this.lineHeight,e),'"></rect>\n'].join("")},_createTextCharSpan:function(i,r,s,n,o){var a=this.getSvgStyles.call(fabric.util.object.extend({visible:!0,fill:this.fill,stroke:this.stroke,type:"text",getSvgFilter:fabric.Object.prototype.getSvgFilter},r))
return['\t\t\t<tspan x="',t(s+o,e),'" y="',t(n-this.height/2,e),'" ',r.fontFamily?'font-family="'+r.fontFamily.replace(/"/g,"'")+'" ':"",r.fontSize?'font-size="'+r.fontSize+'" ':"",r.fontStyle?'font-style="'+r.fontStyle+'" ':"",r.fontWeight?'font-weight="'+r.fontWeight+'" ':"",r.textDecoration?'text-decoration="'+r.textDecoration+'" ':"",'style="',a,'">',fabric.util.string.escapeXml(i),"</tspan>\n"].join("")}})}(),function(t){"use strict"
var e=t.fabric||(t.fabric={})
e.Textbox=e.util.createClass(e.IText,e.Observable,{type:"textbox",minWidth:20,dynamicMinWidth:2,__cachedLines:null,lockScalingY:!0,lockScalingFlip:!0,noScaleCache:!1,initialize:function(t,i){this.callSuper("initialize",t,i),this.setControlsVisibility(e.Textbox.getTextboxControlVisibility()),this.ctx=this.objectCaching?this._cacheContext:e.util.createCanvasElement().getContext("2d"),this._dimensionAffectingProps.push("width")},_initDimensions:function(t){this.__skipDimension||(t||(t=e.util.createCanvasElement().getContext("2d"),this._setTextStyles(t),this.clearContextTop()),this.dynamicMinWidth=0,this._textLines=this._splitTextIntoLines(t),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this._clearCache(),this.height=this._getTextHeight(t))},_generateStyleMap:function(){for(var t=0,e=0,i=0,r={},s=0;s<this._textLines.length;s++)"\n"===this.text[i]&&s>0?(e=0,i++,t++):" "===this.text[i]&&s>0&&(e++,i++),r[s]={line:t,offset:e},i+=this._textLines[s].length,e+=this._textLines[s].length
return r},_getStyleDeclaration:function(t,e,i){if(this._styleMap){var r=this._styleMap[t]
if(!r)return i?{}:null
t=r.line,e=r.offset+e}return this.callSuper("_getStyleDeclaration",t,e,i)},_setStyleDeclaration:function(t,e,i){var r=this._styleMap[t]
t=r.line,e=r.offset+e,this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){var i=this._styleMap[t]
t=i.line,e=i.offset+e,delete this.styles[t][e]},_getLineStyle:function(t){var e=this._styleMap[t]
return this.styles[e.line]},_setLineStyle:function(t,e){var i=this._styleMap[t]
this.styles[i.line]=e},_deleteLineStyle:function(t){var e=this._styleMap[t]
delete this.styles[e.line]},_wrapText:function(t,e){var i,r=e.split(this._reNewline),s=[]
for(i=0;i<r.length;i++)s=s.concat(this._wrapLine(t,r[i],i))
return s},_measureText:function(t,e,i,r){var s=0
r=r||0
for(var n=0,o=e.length;n<o;n++)s+=this._getWidthOfChar(t,e[n],i,n+r)
return s},_wrapLine:function(t,e,i){for(var r=0,s=[],n="",o=e.split(" "),a="",h=0,c=0,l=0,u=0,f=!0,d=this._getWidthOfCharSpacing(),g=0;g<o.length;g++)a=o[g],c=this._measureText(t,a,i,h),h+=a.length,(r+=l+c-d)>=this.width&&!f?(s.push(n),n="",r=c,f=!0):r+=d,f||(n+=" "),n+=a,l=this._measureText(t," ",i,h),h++,f=!1,c>u&&(u=c)
return g&&s.push(n),u>this.dynamicMinWidth&&(this.dynamicMinWidth=u-d),s},_splitTextIntoLines:function(t){t=t||this.ctx
var e=this.textAlign
this._styleMap=null,t.save(),this._setTextStyles(t),this.textAlign="left"
var i=this._wrapText(t,this.text)
return this.textAlign=e,t.restore(),this._textLines=i,this._styleMap=this._generateStyleMap(),i},setOnGroup:function(t,e){"scaleX"===t&&(this.set("scaleX",Math.abs(1/e)),this.set("width",this.get("width")*e/(void 0===this.__oldScaleX?1:this.__oldScaleX)),this.__oldScaleX=e)},get2DCursorLocation:function(t){void 0===t&&(t=this.selectionStart)
for(var e=this._textLines.length,i=0,r=0;r<e;r++){var s=this._textLines[r].length
if(t<=i+s)return{lineIndex:r,charIndex:t-i}
i+=s,"\n"!==this.text[i]&&" "!==this.text[i]||i++}return{lineIndex:e-1,charIndex:this._textLines[e-1].length}},_getCursorBoundariesOffsets:function(t,e){for(var i=0,r=0,s=this.get2DCursorLocation(),n=this._textLines[s.lineIndex].split(""),o=this._getLineLeftOffset(this._getLineWidth(this.ctx,s.lineIndex)),a=0;a<s.charIndex;a++)r+=this._getWidthOfChar(this.ctx,n[a],s.lineIndex,a)
for(a=0;a<s.lineIndex;a++)i+=this._getHeightOfLine(this.ctx,a)
return"cursor"===e&&(i+=(1-this._fontSizeFraction)*this._getHeightOfLine(this.ctx,s.lineIndex)/this.lineHeight-this.getCurrentCharFontSize(s.lineIndex,s.charIndex)*(1-this._fontSizeFraction)),{top:i,left:r,lineLeft:o}},getMinWidth:function(){return Math.max(this.minWidth,this.dynamicMinWidth)},toObject:function(t){return this.callSuper("toObject",["minWidth"].concat(t))}}),e.Textbox.fromObject=function(t,i,r){return e.Object._fromObject("Textbox",t,i,r,"text")},e.Textbox.getTextboxControlVisibility=function(){return{tl:!1,tr:!1,br:!1,bl:!1,ml:!0,mt:!1,mr:!0,mb:!1,mtr:!0}}}("undefined"!=typeof exports?exports:this),function(){var t=fabric.Canvas.prototype._setObjectScale
fabric.Canvas.prototype._setObjectScale=function(e,i,r,s,n,o,a){var h=i.target
if(!(h instanceof fabric.Textbox))return t.call(fabric.Canvas.prototype,e,i,r,s,n,o,a)
var c=h.width*(e.x/i.scaleX/(h.width+h.strokeWidth))
return c>=h.getMinWidth()?(h.set("width",c),!0):void 0},fabric.Group.prototype._refreshControlsVisibility=function(){if(void 0!==fabric.Textbox)for(var t=this._objects.length;t--;)if(this._objects[t]instanceof fabric.Textbox)return void this.setControlsVisibility(fabric.Textbox.getTextboxControlVisibility())},fabric.util.object.extend(fabric.Textbox.prototype,{_removeExtraneousStyles:function(){for(var t in this._styleMap)this._textLines[t]||delete this.styles[this._styleMap[t].line]},insertCharStyleObject:function(t,e,i){var r=this._styleMap[t]
t=r.line,e=r.offset+e,fabric.IText.prototype.insertCharStyleObject.apply(this,[t,e,i])},insertNewlineStyleObject:function(t,e,i){var r=this._styleMap[t]
t=r.line,e=r.offset+e,fabric.IText.prototype.insertNewlineStyleObject.apply(this,[t,e,i])},shiftLineStyles:function(t,e){t=this._styleMap[t].line,fabric.IText.prototype.shiftLineStyles.call(this,t,e)},_getTextOnPreviousLine:function(t){for(var e=this._textLines[t-1];this._styleMap[t-2]&&this._styleMap[t-2].line===this._styleMap[t-1].line;)e=this._textLines[t-2]+e,t--
return e},removeStyleObject:function(t,e){var i=this.get2DCursorLocation(e),r=this._styleMap[i.lineIndex],s=r.line,n=r.offset+i.charIndex
this._removeStyleObject(t,i,s,n)}})}(),function(){var t=fabric.IText.prototype._getNewSelectionStartFromOffset
fabric.IText.prototype._getNewSelectionStartFromOffset=function(e,i,r,s,n){s=t.call(this,e,i,r,s,n)
for(var o=0,a=0,h=0;h<this._textLines.length&&!((o+=this._textLines[h].length)+a>=s);h++)"\n"!==this.text[o+a]&&" "!==this.text[o+a]||a++
return s-h+a}}(),function(){if("undefined"==typeof document||"undefined"==typeof window){var DOMParser=require("xmldom").DOMParser,URL=require("url"),HTTP=require("http"),HTTPS=require("https"),Canvas=require("canvas"),Image=require("canvas").Image
fabric.util.loadImage=function(t,e,i){function r(r){r?(s.src=new Buffer(r,"binary"),s._src=t,e&&e.call(i,s)):(s=null,e&&e.call(i,null,!0))}var s=new Image
t&&(t instanceof Buffer||0===t.indexOf("data"))?(s.src=s._src=t,e&&e.call(i,s)):t&&0!==t.indexOf("http")?requestFs(t,r):t?request(t,"binary",r):e&&e.call(i,t)},fabric.loadSVGFromURL=function(t,e,i){0!==(t=t.replace(/^\n\s*/,"").replace(/\?.*$/,"").trim()).indexOf("http")?requestFs(t,function(t){fabric.loadSVGFromString(t.toString(),e,i)}):request(t,"",function(t){fabric.loadSVGFromString(t,e,i)})},fabric.loadSVGFromString=function(t,e,i){var r=(new DOMParser).parseFromString(t)
fabric.parseSVGDocument(r.documentElement,function(t,i){e&&e(t,i)},i)},fabric.util.getScript=function(url,callback){request(url,"",function(body){eval(body),callback&&callback()})},fabric.createCanvasForNode=function(t,e,i,r){r=r||i
var s=fabric.document.createElement("canvas"),n=new Canvas(t||600,e||600,r),o=new Canvas(t||600,e||600,r)
s.style={},s.width=n.width,s.height=n.height,(i=i||{}).nodeCanvas=n,i.nodeCacheCanvas=o
var a=new(fabric.Canvas||fabric.StaticCanvas)(s,i)
return a.nodeCanvas=n,a.nodeCacheCanvas=o,a.contextContainer=n.getContext("2d"),a.contextCache=o.getContext("2d"),a.Font=Canvas.Font,a}
var originaInitStatic=fabric.StaticCanvas.prototype._initStatic
fabric.StaticCanvas.prototype._initStatic=function(t,e){t=t||fabric.document.createElement("canvas"),this.nodeCanvas=new Canvas(t.width,t.height),this.nodeCacheCanvas=new Canvas(t.width,t.height),originaInitStatic.call(this,t,e),this.contextContainer=this.nodeCanvas.getContext("2d"),this.contextCache=this.nodeCacheCanvas.getContext("2d"),this.Font=Canvas.Font},fabric.StaticCanvas.prototype.createPNGStream=function(){return this.nodeCanvas.createPNGStream()},fabric.StaticCanvas.prototype.createJPEGStream=function(t){return this.nodeCanvas.createJPEGStream(t)},fabric.StaticCanvas.prototype._initRetinaScaling=function(){if(this._isRetinaScaling())return this.lowerCanvasEl.setAttribute("width",this.width*fabric.devicePixelRatio),this.lowerCanvasEl.setAttribute("height",this.height*fabric.devicePixelRatio),this.nodeCanvas.width=this.width*fabric.devicePixelRatio,this.nodeCanvas.height=this.height*fabric.devicePixelRatio,this.contextContainer.scale(fabric.devicePixelRatio,fabric.devicePixelRatio),this},fabric.Canvas&&(fabric.Canvas.prototype._initRetinaScaling=fabric.StaticCanvas.prototype._initRetinaScaling)
var origSetBackstoreDimension=fabric.StaticCanvas.prototype._setBackstoreDimension
fabric.StaticCanvas.prototype._setBackstoreDimension=function(t,e){return origSetBackstoreDimension.call(this,t,e),this.nodeCanvas[t]=e,this},fabric.Canvas&&(fabric.Canvas.prototype._setBackstoreDimension=fabric.StaticCanvas.prototype._setBackstoreDimension)}function request(t,e,i){var r=URL.parse(t)
r.port||(r.port=0===r.protocol.indexOf("https:")?443:80)
var s=(0===r.protocol.indexOf("https:")?HTTPS:HTTP).request({hostname:r.hostname,port:r.port,path:r.path,method:"GET"},function(t){var r=""
e&&t.setEncoding(e),t.on("end",function(){i(r)}),t.on("data",function(e){200===t.statusCode&&(r+=e)})})
s.on("error",function(t){t.errno===process.ECONNREFUSED?fabric.log("ECONNREFUSED: connection refused to "+r.hostname+":"+r.port):fabric.log(t.message),i(null)}),s.end()}function requestFs(t,e){require("fs").readFile(t,function(t,i){if(t)throw fabric.log(t),t
e(i)})}}()
