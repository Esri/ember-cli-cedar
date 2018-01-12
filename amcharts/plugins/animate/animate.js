(function(){"use strict"
if("undefined"==typeof requestAnimationFrame)var t=function(t){setTimeout(function(){t((new Date).getTime())},1e3/60)}
else t=requestAnimationFrame
function n(t){var n=1-t
return 1-(n*=n*n*n)}function i(t,n,i,e){this._object=t,this._key=n,this._from=i,this._to=e}function e(t,i,e,a,r){this._finished=!1,this._startTime=null,this._duration=t,this._easing=null==i?n:i,this._onComplete=e,this._tweens=a,this._chart=r}function a(){this._animating=!1,this._animations=[],this._onBeforeFrames=[],this._onAfterFrames=[]
var t=this
this._raf=function(n){t._onFrame(n)}}i.prototype.interpolate=function(t){var n,i,e
this._object[this._key]=(n=t,i=this._from,e=this._to,n*(e-i)+i)},e.prototype.cancel=function(){this._finished=!0,this._startTime=null,this._duration=null,this._easing=null,this._onComplete=null,this._tweens=null,this._chart=null},e.prototype._onFrame=function(t){if(this._finished)return!0
if(null===this._startTime)return this._startTime=t,!1
var n=t-this._startTime
return n<this._duration?(this._tick(n/this._duration),!1):(this._end(1),this.cancel(),!0)},e.prototype._tick=function(t){t=this._easing(t)
for(var n=this._tweens,i=0;i<n.length;++i)n[i].interpolate(t);(function(t,n){for(var i=0;i<t.length;++i)if(t[i]===n)return
t.push(n)})(o,this._chart)},e.prototype._end=function(t){this._tick(t),this._onComplete()},a.prototype.animate=function(n){this._animations.push(n),this._animating||(this._animating=!0,t(this._raf))},a.prototype.onBeforeFrame=function(t){this._onBeforeFrames.push(t)},a.prototype.onAfterFrame=function(t){this._onAfterFrames.push(t)},a.prototype._onFrame=function(n){for(var i=this._onBeforeFrames,e=0;e<i.length;++e)i[e](n)
var a=this._animations
for(e=0;e<a.length;++e){a[e]._onFrame(n)&&(a.splice(e,1),--e)}var r=this._onAfterFrames
for(e=0;e<r.length;++e)r[e](n)
0===a.length?this._animating=!1:t(this._raf)}
var r=new a,o=[]
function l(t,n){for(var i=0;i<t.length;++i)n(t[i])}function u(t,n,i,e){l(e,function(e){var a,r,o,l=i[e]
null!=l&&(a=t,(r=n)[o=l]||(r[o]=!0,a.push(o)))})}function s(t,n,i){u(n,i,t,["alphaField","valueField"])}function h(t,n,i){u(n,i,t,["alphaField","bulletSizeField","closeField","dashLengthField","errorField","highField","lowField","openField","valueField"])}function f(t,n,i){h(t,n,i),u(n,i,t,["xField","yField"])}function m(t,n,i,e){l(t,function(t){e(t,n,i)})}function c(t){var n,i,e,a,r=[],o={}
return"funnel"===t.type?s(t,r,o):"pie"===t.type?(s(i=t,e=r,a=o),u(e,a,i,["labelRadiusField"])):"serial"===t.type?(n=t.categoryAxis,u(r,o,n,["widthField"]),m(t.graphs,r,o,h)):"radar"===t.type?m(t.graphs,r,o,h):"xy"===t.type&&m(t.graphs,r,o,f),r}function p(t,n){var i,e=t[n]
return null==e?null:(i=e=+e)!=i?null:e}function _(t,n){var i=t[n]
return null==i?null:""+i}function d(t,n){if("xy"===t.type){var e=c(t)
return function(t,n,e){for(var a=[],r=Math.min(t.length,n.length),o=0;o<r;++o){var u=t[o],s=n[o]
l(e,function(t){var n=p(u,t),e=p(s,t)
null!=n&&null!=e&&a.push(new i(s,t,n,e))})}return a}(t.dataProvider,n,e)}var a,r,o,u,s,h,f,m,d="funnel"===(m=t).type||"pie"===m.type?m.titleField:"serial"===m.type||"radar"===m.type?m.categoryField:void 0,v=(e=c(t),s=t.dataProvider,h=d,f={},l(s,function(t){var n=_(t,h)
null!=n&&(f[n]=t)}),f)
return a=d,r=v,o=e,u=[],l(n,function(t){var n=_(t,a)
if(null!=n&&n in r){var e=r[n]
l(o,function(n){var a=p(e,n),r=p(t,n)
null!=a&&null!=r&&u.push(new i(t,n,a,r))})}}),u}function v(t,n){var i,a,o=this,u=d(o,t),s=(a={},"serial"!==(i=o).type&&"radar"!==i.type&&"xy"!==i.type||l(i.valueAxes,function(t){if(null==a[t.id]){a[t.id]={minimum:t.minimum,maximum:t.maximum}
var n,i=t.minRR,e=t.maxRR,r=e-i
n=0===r?Math.pow(10,Math.floor(Math.log(Math.abs(e))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(r))*Math.LOG10E))/10,null==t.minimum&&(t.minimum=Math.floor(i/n)*n-n),null==t.maximum&&(t.maximum=Math.ceil(e/n)*n+n)}}),a)
o.dataProvider=t
var h=new e(n.duration,n.easing,function(){var t,i
i=s,"serial"!==(t=o).type&&"radar"!==t.type&&"xy"!==t.type||l(t.valueAxes,function(t){var n=i[t.id]
null!=n&&(null==n.minimum&&delete t.minimum,null==n.maximum&&delete t.maximum)}),null!=n.complete&&n.complete()},u,o)
return r.animate(h),h}r.onAfterFrame(function(){for(var t=0;t<o.length;++t)o[t].validateData()
o.length=0}),AmCharts.addInitHandler(function(t){t.animateData=v},["funnel","pie","serial","radar","xy"])})()
