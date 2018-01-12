!function(){"use strict"
function t(t){var n=1-t
return 1-(n*=n*n*n)}function n(t,n,i,e){this._object=t,this._key=n,this._from=i,this._to=e}function i(n,i,e,a,r){this._finished=!1,this._startTime=null,this._duration=n,this._easing=null==i?t:i,this._onComplete=e,this._tweens=a,this._chart=r}function e(){this._animating=!1,this._animations=[],this._onBeforeFrames=[],this._onAfterFrames=[]
var t=this
this._raf=function(n){t._onFrame(n)}}function a(t,n){for(var i=0;i<t.length;++i)n(t[i])}function r(t,n,i,e){a(e,function(e){var a,r,o,l=i[e]
null!=l&&(a=t,(r=n)[o=l]||(r[o]=!0,a.push(o)))})}function o(t,n,i){r(n,i,t,["alphaField","valueField"])}function l(t,n,i){r(n,i,t,["alphaField","bulletSizeField","closeField","dashLengthField","errorField","highField","lowField","openField","valueField"])}function u(t,n,i){l(t,n,i),r(n,i,t,["xField","yField"])}function s(t,n,i,e){a(t,function(t){e(t,n,i)})}function h(t){var n,i,e,a,h=[],f={}
return"funnel"===t.type?o(t,h,f):"pie"===t.type?(o(i=t,e=h,a=f),r(e,a,i,["labelRadiusField"])):"serial"===t.type?(n=t.categoryAxis,r(h,f,n,["widthField"]),s(t.graphs,h,f,l)):"radar"===t.type?s(t.graphs,h,f,l):"xy"===t.type&&s(t.graphs,h,f,u),h}function f(t,n){var i,e=t[n]
return null==e?null:(i=e=+e)!=i?null:e}function m(t,n){var i=t[n]
return null==i?null:""+i}function c(t,i){if("xy"===t.type){var e=h(t)
return function(t,i,e){for(var r=[],o=Math.min(t.length,i.length),l=0;o>l;++l){var u=t[l],s=i[l]
a(e,function(t){var i=f(u,t),e=f(s,t)
null!=i&&null!=e&&r.push(new n(s,t,i,e))})}return r}(t.dataProvider,i,e)}var r,o,l,u,s,c,p,_,d="funnel"===(u=t).type||"pie"===u.type?u.titleField:"serial"===u.type||"radar"===u.type?u.categoryField:void 0,v=(e=h(t),r=t.dataProvider,o=d,l={},a(r,function(t){var n=m(t,o)
null!=n&&(l[n]=t)}),l)
return s=d,c=v,p=e,_=[],a(i,function(t){var i=m(t,s)
if(null!=i&&i in c){var e=c[i]
a(p,function(i){var a=f(e,i),r=f(t,i)
null!=a&&null!=r&&_.push(new n(t,i,a,r))})}}),_}function p(t,n){var e,r,o=this,l=c(o,t),u=(r={},("serial"===(e=o).type||"radar"===e.type||"xy"===e.type)&&a(e.valueAxes,function(t){if(null==r[t.id]){r[t.id]={minimum:t.minimum,maximum:t.maximum}
var n,i=t.minRR,e=t.maxRR,a=e-i
n=0===a?Math.pow(10,Math.floor(Math.log(Math.abs(e))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,null==t.minimum&&(t.minimum=Math.floor(i/n)*n-n),null==t.maximum&&(t.maximum=Math.ceil(e/n)*n+n)}}),r)
o.dataProvider=t
var s=new i(n.duration,n.easing,function(){var t,i
i=u,("serial"===(t=o).type||"radar"===t.type||"xy"===t.type)&&a(t.valueAxes,function(t){var n=i[t.id]
null!=n&&(null==n.minimum&&delete t.minimum,null==n.maximum&&delete t.maximum)}),null!=n.complete&&n.complete()},l,o)
return d.animate(s),s}if("undefined"==typeof requestAnimationFrame)var _=function(t){setTimeout(function(){t((new Date).getTime())},1e3/60)}
else _=requestAnimationFrame
n.prototype.interpolate=function(t){var n,i,e
this._object[this._key]=(n=t,i=this._from,e=this._to,n*(e-i)+i)},i.prototype.cancel=function(){this._finished=!0,this._startTime=null,this._duration=null,this._easing=null,this._onComplete=null,this._tweens=null,this._chart=null},i.prototype._onFrame=function(t){if(this._finished)return!0
if(null===this._startTime)return this._startTime=t,!1
var n=t-this._startTime
return n<this._duration?(this._tick(n/this._duration),!1):(this._end(1),this.cancel(),!0)},i.prototype._tick=function(t){t=this._easing(t)
for(var n=this._tweens,i=0;i<n.length;++i)n[i].interpolate(t);(function(t,n){for(var i=0;i<t.length;++i)if(t[i]===n)return
t.push(n)})(v,this._chart)},i.prototype._end=function(t){this._tick(t),this._onComplete()},e.prototype.animate=function(t){this._animations.push(t),this._animating||(this._animating=!0,_(this._raf))},e.prototype.onBeforeFrame=function(t){this._onBeforeFrames.push(t)},e.prototype.onAfterFrame=function(t){this._onAfterFrames.push(t)},e.prototype._onFrame=function(t){for(var n=this._onBeforeFrames,i=0;i<n.length;++i)n[i](t)
var e=this._animations
for(i=0;i<e.length;++i){e[i]._onFrame(t)&&(e.splice(i,1),--i)}var a=this._onAfterFrames
for(i=0;i<a.length;++i)a[i](t)
0===e.length?this._animating=!1:_(this._raf)}
var d=new e,v=[]
d.onAfterFrame(function(){for(var t=0;t<v.length;++t)v[t].validateData()
v.length=0}),AmCharts.addInitHandler(function(t){t.animateData=p},["funnel","pie","serial","radar","xy"])}()
