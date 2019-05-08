(function(){"use strict"
if("undefined"==typeof requestAnimationFrame)var t=function(t){setTimeout(function(){t((new Date).getTime())},1e3/60)}
else t=requestAnimationFrame
function i(t){var i=1-t
return 1-(i*=i*i*i)}function n(t,i,n,e){this._object=t,this._key=i,this._from=n,this._to=e}function e(t,n,e,a,r){this._finished=!1,this._startTime=null,this._duration=t,this._easing=null==n?i:n,this._onComplete=e,this._tweens=a,this._chart=r}function a(){this._animating=!1,this._animations=[],this._onBeforeFrames=[],this._onAfterFrames=[]
var t=this
this._raf=function(i){t._onFrame(i)}}n.prototype.interpolate=function(t){var i,n,e
this._object[this._key]=(i=t,n=this._from,e=this._to,i*(e-n)+n)},e.prototype.cancel=function(){this._finished=!0,this._startTime=null,this._duration=null,this._easing=null,this._onComplete=null,this._tweens=null,this._chart=null},e.prototype._onFrame=function(t){if(this._finished)return!0
if(null===this._startTime)return this._startTime=t,!1
var i=t-this._startTime
return i<this._duration?(this._tick(i/this._duration),!1):(this._end(1),this.cancel(),!0)},e.prototype._tick=function(t){t=this._easing(t)
for(var i=this._tweens,n=0;n<i.length;++n)i[n].interpolate(t);(function(t,i){for(var n=0;n<t.length;++n)if(t[n]===i)return
t.push(i)})(o,this._chart)},e.prototype._end=function(t){this._tick(t),this._onComplete()},a.prototype.animate=function(i){this._animations.push(i),this._animating||(this._animating=!0,t(this._raf))},a.prototype.onBeforeFrame=function(t){this._onBeforeFrames.push(t)},a.prototype.onAfterFrame=function(t){this._onAfterFrames.push(t)},a.prototype._onFrame=function(i){for(var n=this._onBeforeFrames,e=0;e<n.length;++e)n[e](i)
var a=this._animations
for(e=0;e<a.length;++e){a[e]._onFrame(i)&&(a.splice(e,1),--e)}var r=this._onAfterFrames
for(e=0;e<r.length;++e)r[e](i)
0===a.length?this._animating=!1:t(this._raf)}
var r=new a,o=[]
function l(t,i){for(var n=0;n<t.length;++n)i(t[n])}function u(t,i,n,e){l(e,function(e){var a,r,o,l=n[e]
null!=l&&(a=t,(r=i)[o=l]||(r[o]=!0,a.push(o)))})}function s(t,i,n){u(i,n,t,["alphaField","valueField"])}function h(t,i,n){u(i,n,t,["alphaField","bulletSizeField","closeField","dashLengthField","errorField","highField","lowField","openField","valueField"])}function f(t,i,n){h(t,i,n),u(i,n,t,["xField","yField"])}function m(t,i,n,e){l(t,function(t){e(t,i,n)})}function c(t){var i,n,e,a,r=[],o={}
return"funnel"===t.type?s(t,r,o):"pie"===t.type?(s(n=t,e=r,a=o),u(e,a,n,["labelRadiusField"])):"serial"===t.type?(i=t.categoryAxis,u(r,o,i,["widthField"]),m(t.graphs,r,o,h)):"radar"===t.type?m(t.graphs,r,o,h):"xy"===t.type&&m(t.graphs,r,o,f),r}function p(t,i){var n,e=t[i]
return null==e?null:(n=e=+e)!=n?null:e}function _(t,i){var n=t[i]
return null==n?null:""+n}function d(t,i){if("xy"===t.type){var e=c(t)
return function(t,i,e){for(var a=[],r=Math.min(t.length,i.length),o=0;o<r;++o){var u=t[o],s=i[o]
l(e,function(t){var i=p(u,t),e=p(s,t)
null!=i&&null!=e&&a.push(new n(s,t,i,e))})}return a}(t.dataProvider,i,e)}var a,r,o,u,s,h,f,m,d="funnel"===(m=t).type||"pie"===m.type?m.titleField:"serial"===m.type||"radar"===m.type?m.categoryField:void 0,v=(e=c(t),s=t.dataProvider,h=d,f={},l(s,function(t){var i=_(t,h)
null!=i&&(f[i]=t)}),f)
return a=d,r=v,o=e,u=[],l(i,function(t){var i=_(t,a)
if(null!=i&&i in r){var e=r[i]
l(o,function(i){var a=p(e,i),r=p(t,i)
null!=a&&null!=r&&u.push(new n(t,i,a,r))})}}),u}function v(t,i){var n,a,o=this,u=d(o,t)
if(i.fixedMinMax)var s=(a={},"serial"!==(n=o).type&&"radar"!==n.type&&"xy"!==n.type||l(n.valueAxes,function(t){if(null==a[t.id]){a[t.id]={minimum:t.minimum,maximum:t.maximum}
var i,n=t.minRR,e=t.maxRR,r=e-n
i=0===r?Math.pow(10,Math.floor(Math.log(Math.abs(e))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(r))*Math.LOG10E))/10,null==t.minimum&&(t.minimum=Math.floor(n/i)*i-i),null==t.maximum&&(t.maximum=Math.ceil(e/i)*i+i)}}),a)
o.dataProvider=t
var h=new e(i.duration,i.easing,function(){var t,n
i.fixedMinMax&&(n=s,"serial"!==(t=o).type&&"radar"!==t.type&&"xy"!==t.type||l(t.valueAxes,function(t){var i=n[t.id]
null!=i&&(null==i.minimum&&delete t.minimum,null==i.maximum&&delete t.maximum)})),null!=i.complete&&i.complete()},u,o)
return r.animate(h),h}r.onAfterFrame(function(){for(var t=0;t<o.length;++t)o[t].validateData()
o.length=0}),AmCharts.addInitHandler(function(t){t.animateData=v},["funnel","pie","serial","radar","xy"])})()
