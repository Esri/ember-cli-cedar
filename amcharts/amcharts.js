(function(){var t
window.AmCharts?t=window.AmCharts:(t={},window.AmCharts=t,t.themes={},t.maps={},t.inheriting={},t.charts=[],t.onReadyArray=[],t.useUTC=!1,t.updateRate=60,t.uid=0,t.lang={},t.translations={},t.mapTranslations={},t.windows={},t.initHandlers=[],t.amString="am",t.pmString="pm"),t.Class=function(e){var i=function(){arguments[0]!==t.inheriting&&(this.events={},this.construct.apply(this,arguments))}
e.inherits?(i.prototype=new e.inherits(t.inheriting),i.base=e.inherits.prototype,delete e.inherits):(i.prototype.createEvents=function(){for(var t=0;t<arguments.length;t++)this.events[arguments[t]]=[]},i.prototype.listenTo=function(t,e,i){this.removeListener(t,e,i),t.events[e].push({handler:i,scope:this})},i.prototype.addListener=function(t,e,i){this.removeListener(this,t,e),t&&this.events[t]&&this.events[t].push({handler:e,scope:i})},i.prototype.removeListener=function(t,e,i){if(t&&t.events&&(t=t.events[e]))for(e=t.length-1;0<=e;e--)t[e].handler===i&&t.splice(e,1)},i.prototype.fire=function(t){for(var e=this.events[t.type],i=0;i<e.length;i++){var s=e[i]
s.handler.call(s.scope,t)}})
for(var s in e)i.prototype[s]=e[s]
return i},t.addChart=function(e){window.requestAnimationFrame?t.animationRequested||(t.animationRequested=!0,window.requestAnimationFrame(t.update)):t.updateInt||(t.updateInt=setInterval(function(){t.update()},Math.round(1e3/t.updateRate))),t.charts.push(e)},t.removeChart=function(e){for(var i=t.charts,s=i.length-1;0<=s;s--)i[s]==e&&i.splice(s,1)
0===i.length&&(t.requestAnimation&&(window.cancelAnimationFrame(t.requestAnimation),t.animationRequested=!1),t.updateInt&&(clearInterval(t.updateInt),t.updateInt=NaN))},t.isModern=!0,t.getIEVersion=function(){var t,e=0
return"Microsoft Internet Explorer"==navigator.appName&&(t=navigator.userAgent,null!==/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(t)&&(e=parseFloat(RegExp.$1))),e},t.applyLang=function(e,i){var s=t.translations
i.dayNames=t.extend({},t.dayNames),i.shortDayNames=t.extend({},t.shortDayNames),i.monthNames=t.extend({},t.monthNames),i.shortMonthNames=t.extend({},t.shortMonthNames),i.amString="am",i.pmString="pm",s&&(s=s[e])&&(t.lang=s,i.langObj=s,s.monthNames&&(i.dayNames=t.extend({},s.dayNames),i.shortDayNames=t.extend({},s.shortDayNames),i.monthNames=t.extend({},s.monthNames),i.shortMonthNames=t.extend({},s.shortMonthNames)),s.am&&(i.amString=s.am),s.pm&&(i.pmString=s.pm)),t.amString=i.amString,t.pmString=i.pmString},t.IEversion=t.getIEVersion(),9>t.IEversion&&0<t.IEversion&&(t.isModern=!1,t.isIE=!0),t.dx=0,t.dy=0,(document.addEventListener||window.opera)&&(t.isNN=!0,t.isIE=!1,t.dx=.5,t.dy=.5),document.attachEvent&&(t.isNN=!1,t.isIE=!0,t.isModern||(t.dx=0,t.dy=0)),window.chrome&&(t.chrome=!0),t.handleMouseUp=function(e){for(var i=t.charts,s=0;s<i.length;s++){var a=i[s]
a&&a.handleReleaseOutside&&a.handleReleaseOutside(e)}},t.handleMouseMove=function(e){for(var i=t.charts,s=0;s<i.length;s++){var a=i[s]
a&&a.handleMouseMove&&a.handleMouseMove(e)}},t.handleKeyUp=function(e){for(var i=t.charts,s=0;s<i.length;s++){var a=i[s]
a&&a.handleKeyUp&&a.handleKeyUp(e)}},t.handleWheel=function(e){for(var i=t.charts,s=0;s<i.length;s++){var a=i[s]
if(a&&a.mouseIsOver){(a.mouseWheelScrollEnabled||a.mouseWheelZoomEnabled)&&a.handleWheel&&(a.handleMouseMove(e),a.handleWheel(e))
break}}},t.resetMouseOver=function(){for(var e=t.charts,i=0;i<e.length;i++){var s=e[i]
s&&(s.mouseIsOver=!1)}},t.ready=function(e){t.onReadyArray.push(e)},t.handleLoad=function(){t.isReady=!0
for(var e=t.onReadyArray,i=0;i<e.length;i++){var s=e[i]
isNaN(t.processDelay)?s():setTimeout(s,t.processDelay*i)}t.onReadyArray=[]},t.addInitHandler=function(e,i){t.initHandlers.push({method:e,types:i})},t.callInitHandler=function(e){var i=t.initHandlers
if(t.initHandlers)for(var s=0;s<i.length;s++){var a=i[s]
a.types?t.isInArray(a.types,e.type)&&a.method(e):a.method(e)}},t.getUniqueId=function(){return t.uid++,"AmChartsEl-"+t.uid},t.addGlobalListeners=function(){t.globalListenersAdded||(t.globalListenersAdded=!0,t.isNN&&(document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("keyup",t.handleKeyUp),document.addEventListener("mouseup",t.handleMouseUp,!0),window.addEventListener("load",t.handleLoad,!0)),t.isIE&&(document.attachEvent("onmousemove",t.handleMouseMove),document.attachEvent("onmouseup",t.handleMouseUp),window.attachEvent("onload",t.handleLoad)))},t.addGlobalListeners(),t.addWheelListeners=function(){t.wheelIsListened||(t.isNN&&(window.addEventListener("DOMMouseScroll",t.handleWheel,!0),document.addEventListener("mousewheel",t.handleWheel,!0)),t.isIE&&document.attachEvent("onmousewheel",t.handleWheel)),t.wheelIsListened=!0},t.clear=function(){var e=t.charts
if(e)for(var i=e.length-1;0<=i;i--)e[i].clear()
t.updateInt&&clearInterval(t.updateInt),t.requestAnimation&&window.cancelAnimationFrame(t.requestAnimation),t.charts=[],t.isNN&&(document.removeEventListener("mousemove",t.handleMouseMove,!0),document.removeEventListener("keyup",t.handleKeyUp,!0),document.removeEventListener("mouseup",t.handleMouseUp,!0),window.removeEventListener("load",t.handleLoad,!0),window.removeEventListener("DOMMouseScroll",t.handleWheel,!0),document.removeEventListener("mousewheel",t.handleWheel,!0)),t.isIE&&(document.detachEvent("onmousemove",t.handleMouseMove),document.detachEvent("onmouseup",t.handleMouseUp),window.detachEvent("onload",t.handleLoad)),t.globalListenersAdded=!1,t.wheelIsListened=!1},t.makeChart=function(e,i,s){var a,h=i.type,r=i.theme
switch(t.addGlobalListeners(),t.isString(r)&&(r=t.themes[r],i.theme=r),h){case"serial":a=new t.AmSerialChart(r)
break
case"xy":a=new t.AmXYChart(r)
break
case"pie":a=new t.AmPieChart(r)
break
case"radar":a=new t.AmRadarChart(r)
break
case"gauge":a=new t.AmAngularGauge(r)
break
case"funnel":a=new t.AmFunnelChart(r)
break
case"map":a=new t.AmMap(r)
break
case"stock":a=new t.AmStockChart(r)
break
case"gantt":a=new t.AmGanttChart(r)}return t.extend(a,i),t.isReady?isNaN(s)?a.write(e):setTimeout(function(){t.realWrite(a,e)},s):t.ready(function(){isNaN(s)?a.write(e):setTimeout(function(){t.realWrite(a,e)},s)}),a},t.realWrite=function(t,e){t.write(e)}
t.updateCount=0,t.validateAt=Math.round(t.updateRate/10),t.update=function(){var e=t.charts
t.updateCount++
var i=!1
if(t.updateCount==t.validateAt&&(i=!0,t.updateCount=0),e)for(var s=e.length-1;0<=s;s--)e[s].update&&e[s].update(),i&&(e[s].autoResize?e[s].validateSize&&e[s].validateSize():e[s].premeasure&&e[s].premeasure())
window.requestAnimationFrame&&(t.requestAnimation=window.requestAnimationFrame(t.update))},"complete"==document.readyState&&t.handleLoad()})(),function(){var t=window.AmCharts
t.toBoolean=function(t,e){if(void 0===t)return e
switch(String(t).toLowerCase()){case"true":case"yes":case"1":return!0
case"false":case"no":case"0":case null:return!1
default:return!!t}},t.removeFromArray=function(t,e){var i
if(void 0!==e&&void 0!==t)for(i=t.length-1;0<=i;i--)t[i]==e&&t.splice(i,1)},t.getPath=function(){var t=document.getElementsByTagName("script")
if(t)for(var e=0;e<t.length;e++){var i=t[e].src
if(-1!==i.search(/\/(amcharts|ammap)\.js/))return i.replace(/\/(amcharts|ammap)\.js.*/,"/")}},t.normalizeUrl=function(t){return""!==t&&-1===t.search(/\/$/)?t+"/":t},t.isAbsolute=function(t){return 0===t.search(/^http[s]?:|^\//)},t.isInArray=function(t,e){for(var i=0;i<t.length;i++)if(t[i]==e)return!0
return!1},t.getDecimals=function(t){var e=0
return isNaN(t)||(-1!=(t=String(t)).indexOf("e-")?e=Number(t.split("-")[1]):-1!=t.indexOf(".")&&(e=t.split(".")[1].length)),e},t.wordwrap=function(e,i,s,a){var h,r,n,o
if(e+="",1>i)return e
for(h=-1,e=(o=e.split(/\r\n|\n|\r/)).length;++h<e;o[h]+=n){for(n=o[h],o[h]="";n.length>i;o[h]+=t.trim(n.slice(0,r))+((n=n.slice(r)).length?s:""))r=2==a||(r=n.slice(0,i+1).match(/\S*(\s)?$/))[1]?i:r.input.length-r[0].length||1==a&&i||r.input.length+(r=n.slice(i).match(/^\S*/))[0].length
n=t.trim(n)}return o.join(s)},t.trim=function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},t.wrappedText=function(e,i,s,a,h,r,n,o){var l=t.text(e,i,s,a,h,r,n)
if(l){var d=l.getBBox()
if(d.width>o){var u="\n"
t.isModern||(u="<br>"),2<(o=Math.floor(o/(d.width/i.length)))&&(o-=2),i=t.wordwrap(i,o,u,!0),l.remove(),l=t.text(e,i,s,a,h,r,n)}}return l},t.getStyle=function(t,e){var i=""
if(document.defaultView&&document.defaultView.getComputedStyle)try{i=document.defaultView.getComputedStyle(t,"").getPropertyValue(e)}catch(t){}else t.currentStyle&&(e=e.replace(/\-(\w)/g,function(t,e){return e.toUpperCase()}),i=t.currentStyle[e])
return i},t.removePx=function(t){if(void 0!==t)return Number(t.substring(0,t.length-2))},t.getURL=function(e,i){if(e)if("_self"!=i&&i)if("_top"==i&&window.top)window.top.location.href=e
else if("_parent"==i&&window.parent)window.parent.location.href=e
else if("_blank"==i)window.open(e)
else{var s=document.getElementsByName(i)[0]
s?s.src=e:(s=t.windows[i])&&s.opener&&!s.opener.closed?s.location.href=e:t.windows[i]=window.open(e)}else window.location.href=e},t.ifArray=function(t){return!!(t&&"object"==typeof t&&0<t.length)},t.callMethod=function(t,e){var i
for(i=0;i<e.length;i++){var s=e[i]
if(s){s[t]&&s[t]()
var a,h=s.length
if(0<h)for(a=0;a<h;a++){var r=s[a]
r&&r[t]&&r[t]()}}}},t.toNumber=function(t){return"number"==typeof t?t:Number(String(t).replace(/[^0-9\-.]+/g,""))},t.toColor=function(t){if(""!==t&&void 0!==t)if(-1!=t.indexOf(",")){var e
for(t=t.split(","),e=0;e<t.length;e++){var i=t[e].substring(t[e].length-6,t[e].length)
t[e]="#"+i}}else t=t.substring(t.length-6,t.length),t="#"+t
return t},t.toCoordinate=function(t,e,i){var s
return void 0!==t&&(t=String(t),i&&i<e&&(e=i),s=Number(t),-1!=t.indexOf("!")&&(s=e-Number(t.substr(1))),-1!=t.indexOf("%")&&(s=e*Number(t.substr(0,t.length-1))/100)),s},t.fitToBounds=function(t,e,i){return t<e&&(t=e),t>i&&(t=i),t},t.isDefined=function(t){return void 0!==t},t.stripNumbers=function(t){return t.replace(/[0-9]+/g,"")},t.roundTo=function(t,e){if(0>e)return t
var i=Math.pow(10,e)
return Math.round(t*i)/i},t.toFixed=function(t,e){var i=!1
0>t&&(i=!0,t=Math.abs(t))
var s=String(Math.round(t*Math.pow(10,e)))
if(0<e){var a,h=s.length
if(h<e)for(a=0;a<e-h;a++)s="0"+s
return""===(h=s.substring(0,s.length-e))&&(h=0),s=h+"."+s.substring(s.length-e,s.length),i?"-"+s:s}return String(s)},t.formatDuration=function(e,i,s,a,h,r){var n=t.intervals,o=r.decimalSeparator
if(e>=n[i].contains){var l=e-Math.floor(e/n[i].contains)*n[i].contains
return"ss"==i?1==(l=t.formatNumber(l,r)).split(o)[0].length&&(l="0"+l):l=t.roundTo(l,r.precision),("mm"==i||"hh"==i)&&10>l&&(l="0"+l),s=l+""+a[i]+s,e=Math.floor(e/n[i].contains),i=n[i].nextInterval,t.formatDuration(e,i,s,a,h,r)}if("ss"==i&&(1==(e=t.formatNumber(e,r)).split(o)[0].length&&(e="0"+e)),"mm"==i&&(e=t.roundTo(e,r.precision)),("mm"==i||"hh"==i)&&10>e&&(e="0"+e),s=e+""+a[i]+s,n[h].count>n[i].count)for(e=n[i].count;e<n[h].count;e++)i=n[i].nextInterval,"ss"==i||"mm"==i||"hh"==i?s="00"+a[i]+s:"DD"==i&&(s="0"+a[i]+s)
return":"==s.charAt(s.length-1)&&(s=s.substring(0,s.length-1)),s},t.formatNumber=function(e,i,s,a,h){e=t.roundTo(e,i.precision),isNaN(s)&&(s=i.precision)
var r,n=i.decimalSeparator
i=i.thousandsSeparator,void 0==n&&(n=","),void 0==i&&(i=" "),r=0>e?"-":"",e=Math.abs(e)
var o=!1;-1!=(u=String(e)).indexOf("e")&&(o=!0),0<=s&&!o&&(u=t.toFixed(e,s))
var l=""
if(o)l=u
else{var d,u=u.split(".")
for(d=(o=String(u[0])).length;0<=d;d-=3)l=d!=o.length?0!==d?o.substring(d-3,d)+i+l:o.substring(d-3,d)+l:o.substring(d-3,d)
void 0!==u[1]&&(l=l+n+u[1]),void 0!==s&&0<s&&"0"!=l&&(l=t.addZeroes(l,n,s))}return l=r+l,""===r&&!0===a&&0!==e&&(l="+"+l),!0===h&&(l+="%"),l},t.addZeroes=function(e,i,s){return void 0===(e=e.split(i))[1]&&0<s&&(e[1]="0"),e[1].length<s?(e[1]+="0",t.addZeroes(e[0]+i+e[1],i,s)):void 0!==e[1]?e[0]+i+e[1]:e[0]},t.scientificToNormal=function(t){var e,i
if("-"==(t=String(t).split("e"))[1].substr(0,1)){for(e="0.",i=0;i<Math.abs(Number(t[1]))-1;i++)e+="0"
e+=t[0].split(".").join("")}else{var s=0
for((e=t[0].split("."))[1]&&(s=e[1].length),e=t[0].split(".").join(""),i=0;i<Math.abs(Number(t[1]))-s;i++)e+="0"}return e},t.toScientific=function(t,e){if(0===t)return"0"
var i=Math.floor(Math.log(Math.abs(t))*Math.LOG10E),s=String(s).split(".").join(e)
return String(s)+"e"+i},t.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)},t.hitTest=function(e,i,s){var a=!1,h=e.x,r=e.x+e.width,n=e.y,o=e.y+e.height,l=t.isInRectangle
return a||(a=l(h,n,i)),a||(a=l(h,o,i)),a||(a=l(r,n,i)),a||(a=l(r,o,i)),a||!0===s||(a=t.hitTest(i,e,!0)),a}
t.isInRectangle=function(t,e,i){return t>=i.x-5&&t<=i.x+i.width+5&&e>=i.y-5&&e<=i.y+i.height+5},t.isPercents=function(t){if(-1!=String(t).indexOf("%"))return!0},t.formatValue=function(e,i,s,a,h,r,n,o){var l
if(i)for(void 0===h&&(h=""),l=0;l<s.length;l++){var d=s[l],u=i[d]
void 0!==u&&(u=r?t.addPrefix(u,o,n,a):t.formatNumber(u,a),e=e.replace(new RegExp("\\[\\["+h+d+"\\]\\]","g"),u))}return e},t.formatDataContextValue=function(t,e){if(t){var i,s=t.match(/\[\[.*?\]\]/g)
for(i=0;i<s.length;i++){var a
void 0!==e[a=(a=s[i]).substr(2,a.length-4)]&&(t=t.replace(new RegExp("\\[\\["+a+"\\]\\]","g"),e[a]))}}return t},t.massReplace=function(t,e){for(var i in e)if(e.hasOwnProperty(i)){var s=e[i]
void 0===s&&(s=""),t=t.replace(i,s)}return t},t.cleanFromEmpty=function(t){return t.replace(/\[\[[^\]]*\]\]/g,"")},t.addPrefix=function(e,i,s,a,h){var r,n,o,l=t.formatNumber(e,a),d=""
if(0===e)return"0"
if(0>e&&(d="-"),1<(e=Math.abs(e))){for(r=i.length-1;-1<r;r--)if(e>=i[r].number&&(n=e/i[r].number,1>(o=Number(a.precision))&&(o=1),s=t.roundTo(n,o),o=t.formatNumber(s,{precision:-1,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator}),!h||n==s)){l=d+""+o+i[r].prefix
break}}else for(r=0;r<s.length;r++)if(e<=s[r].number){n=e/s[r].number,o=Math.abs(Math.floor(Math.log(n)*Math.LOG10E)),l=d+""+(n=t.roundTo(n,o))+s[r].prefix
break}return l},t.remove=function(t){t&&t.remove()},t.getEffect=function(t){return">"==t&&(t="easeOutSine"),"<"==t&&(t="easeInSine"),"elastic"==t&&(t="easeOutElastic"),t},t.getObjById=function(t,e){var i,s
for(s=0;s<t.length;s++){var a=t[s]
if(a.id==e){i=a
break}}return i},t.applyTheme=function(e,i,s){i||(i=t.theme)
try{i=JSON.parse(JSON.stringify(i))}catch(t){}i&&i[s]&&t.extend(e,i[s])},t.isString=function(t){return"string"==typeof t},t.extend=function(t,e,i){var s
t||(t={})
for(s in e)i?t.hasOwnProperty(s)||(t[s]=e[s]):t[s]=e[s]
return t},t.copyProperties=function(t,e){for(var i in t)t.hasOwnProperty(i)&&"events"!=i&&void 0!==t[i]&&"function"!=typeof t[i]&&"cname"!=i&&(e[i]=t[i])},t.processObject=function(e,i,s,a){if(!1==e instanceof i&&(e=a?t.extend(new i(s),e):t.extend(e,new i(s),!0)).listeners)for(var h in e.listeners)i=e.listeners[h],e.addListener(i.event,i.method)
return e},t.fixNewLines=function(t){var e=RegExp("\\n","g")
return t&&(t=t.replace(e,"<br />")),t},t.fixBrakes=function(e){if(t.isModern){var i=RegExp("<br>","g")
e&&(e=e.replace(i,"\n"))}else e=t.fixNewLines(e)
return e},t.deleteObject=function(e,i){if(e&&(void 0!==i&&null!==i||(i=20),0!==i))if("[object Array]"===Object.prototype.toString.call(e))for(var s=0;s<e.length;s++)t.deleteObject(e[s],i-1),e[s]=null
else if(e&&!e.tagName)try{for(s in e.theme=null,e)e[s]&&("object"==typeof e[s]&&t.deleteObject(e[s],i-1),"function"!=typeof e[s]&&(e[s]=null))}catch(t){}},t.bounce=function(t,e,i,s,a){return(e/=a)<1/2.75?7.5625*s*e*e+i:e<2/2.75?s*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?s*(7.5625*(e-=2.25/2.75)*e+.9375)+i:s*(7.5625*(e-=2.625/2.75)*e+.984375)+i},t.easeInOutQuad=function(t,e,i,s,a){return 1>(e/=a/2)?s/2*e*e+i:-s/2*(--e*(e-2)-1)+i},t.easeInSine=function(t,e,i,s,a){return-s*Math.cos(e/a*(Math.PI/2))+s+i},t.easeOutSine=function(t,e,i,s,a){return s*Math.sin(e/a*(Math.PI/2))+i},t.easeOutElastic=function(t,e,i,s,a){t=1.70158
var h=0,r=s
return 0===e?i:1==(e/=a)?i+s:(h||(h=.3*a),r<Math.abs(s)?(r=s,t=h/4):t=h/(2*Math.PI)*Math.asin(s/r),r*Math.pow(2,-10*e)*Math.sin(2*(e*a-t)*Math.PI/h)+s+i)},t.fixStepE=function(e){e=e.toExponential(0).split("e")
var i=Number(e[1])
return 9==Number(e[0])&&i++,t.generateNumber(1,i)},t.generateNumber=function(t,e){var i,s,a=""
for(i=0>e?Math.abs(e)-1:Math.abs(e),s=0;s<i;s++)a+="0"
return 0>e?Number("0."+a+String(t)):Number(String(t)+a)},t.setCN=function(t,e,i,s){if(t.addClassNames&&e&&(e=e.node)&&i){var a=e.getAttribute("class")
t=t.classNamePrefix+"-",s&&(t=""),a?e.setAttribute("class",a+" "+t+i):e.setAttribute("class",t+i)}},t.removeCN=function(t,e,i){e&&(e=e.node)&&i&&(e=e.classList)&&e.remove(t.classNamePrefix+"-"+i)},t.parseDefs=function(e,i){for(var s in e){var a=typeof e[s]
if(0<e[s].length&&"object"==a)for(var h=0;h<e[s].length;h++)a=document.createElementNS(t.SVG_NS,s),i.appendChild(a),t.parseDefs(e[s][h],a)
else"object"==a?(a=document.createElementNS(t.SVG_NS,s),i.appendChild(a),t.parseDefs(e[s],a)):i.setAttribute(s,e[s])}}}(),function(){var t=window.AmCharts
t.AxisBase=t.Class({construct:function(e){this.createEvents("clickItem","rollOverItem","rollOutItem","rollOverGuide","rollOutGuide","clickGuide"),this.titleDY=this.y=this.x=this.dy=this.dx=0,this.axisThickness=1,this.axisColor="#000000",this.axisAlpha=1,this.gridCount=this.tickLength=5,this.gridAlpha=.15,this.gridThickness=1,this.gridColor="#000000",this.dashLength=0,this.labelFrequency=1,this.showLastLabel=this.showFirstLabel=!0,this.fillColor="#FFFFFF",this.fillAlpha=0,this.labelsEnabled=!0,this.labelRotation=0,this.autoGridCount=!0,this.offset=0,this.guides=[],this.visible=!0,this.counter=0,this.guides=[],this.ignoreAxisWidth=this.inside=!1,this.minHorizontalGap=75,this.minVerticalGap=35,this.titleBold=!0,this.minorGridEnabled=!1,this.minorGridAlpha=.07,this.autoWrap=!1,this.titleAlign="middle"
this.labelOffset=0,this.bcn="axis-",this.centerLabels=!1,this.firstDayOfWeek=1,this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0,this.titleWidth=0,this.periods=[{period:"fff",count:1},{period:"fff",count:5},{period:"fff",count:10},{period:"fff",count:50},{period:"fff",count:100},{period:"fff",count:500},{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}],this.dateFormats=[{period:"fff",format:"NN:SS.QQQ"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}],this.nextPeriod={fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"},t.applyTheme(this,e,"AxisBase")},zoom:function(t,e){this.start=t,this.end=e,this.dataChanged=!0,this.draw()},fixAxisPosition:function(){var t=this.position
"H"==this.orientation?("left"==t&&(t="bottom"),"right"==t&&(t="top")):("bottom"==t&&(t="left"),"top"==t&&(t="right")),this.position=t},init:function(){this.createBalloon()},draw:function(){var t=this.chart
this.prevBY=this.prevBX=NaN,this.allLabels=[],this.counter=0,this.destroy(),this.fixAxisPosition(),this.setBalloonBounds(),this.labels=[]
var e=t.container,i=e.set()
t.gridSet.push(i),this.set=i,e=e.set(),t.axesLabelsSet.push(e),this.labelsSet=e,this.axisLine=new this.axisRenderer(this),this.autoGridCount?("V"==this.orientation?3>(t=this.height/this.minVerticalGap)&&(t=3):t=this.width/this.minHorizontalGap,this.gridCountR=Math.max(t,1)):this.gridCountR=this.gridCount,this.axisWidth=this.axisLine.axisWidth,this.addTitle()},setOrientation:function(t){this.orientation=t?"H":"V"},addTitle:function(){var e=this.title
if(this.titleLabel=null,e){var i=this.chart,s=this.titleColor
void 0===s&&(s=i.color)
var a=this.titleFontSize
isNaN(a)&&(a=i.fontSize+1),e=t.text(i.container,e,s,i.fontFamily,a,this.titleAlign,this.titleBold),t.setCN(i,e,this.bcn+"title"),this.titleLabel=e}},positionTitle:function(){var e=this.titleLabel
if(e){var i,s,a={}
0<(h=this.labelsSet).length()?a=h.getBBox():(a.x=0,a.y=0,a.width=this.width,a.height=this.height,t.VML&&(a.y+=this.y,a.x+=this.x)),h.push(e)
var h=a.x,r=a.y
t.VML&&(r-=this.y,h-=this.x)
var n=a.width,o=(a=a.height,this.width),l=this.height,d=0,u=e.getBBox().height/2,c=this.inside,p=this.titleAlign
switch(this.position){case"top":i="left"==p?-1:"right"==p?o:o/2,s=r-10-u
break
case"bottom":i="left"==p?-1:"right"==p?o:o/2,s=r+a+10+u
break
case"left":i=h-10-u,c&&(i-=5),d=-90,s=("left"==p?l+1:"right"==p?-1:l/2)+this.titleDY,this.titleWidth=u+10
break
case"right":i=h+n+10+u,c&&(i+=7),s=("left"==p?l+2:"right"==p?-2:l/2)+this.titleDY,this.titleWidth=u+10,d=-90}this.marginsChanged?(e.translate(i,s),this.tx=i,this.ty=s):e.translate(this.tx,this.ty),this.marginsChanged=!1,isNaN(this.titleRotation)||(d=this.titleRotation),0!==d&&e.rotate(d)}},pushAxisItem:function(t,e){var i=this,s=t.graphics()
0<s.length()&&(e?i.labelsSet.push(s):i.set.push(s)),(s=t.getLabel())&&(i.labelsSet.push(s),s.click(function(e){i.handleMouse(e,t,"clickItem")}).touchend(function(e){i.handleMouse(e,t,"clickItem")}).mouseover(function(e){i.handleMouse(e,t,"rollOverItem")}).mouseout(function(e){i.handleMouse(e,t,"rollOutItem")}))},handleMouse:function(t,e,i){this.fire({type:i,value:e.value,serialDataItem:e.serialDataItem,axis:this,target:e.label,chart:this.chart,event:t})},addGuide:function(e){for(var i=this.guides,s=!1,a=i.length,h=0;h<i.length;h++)i[h]==e&&(s=!0,a=h);(e=t.processObject(e,t.Guide,this.theme)).id||(e.id="guideAuto"+a+"_"+(new Date).getTime()),s||i.push(e)},removeGuide:function(t){var e,i=this.guides
for(e=0;e<i.length;e++)i[e]==t&&i.splice(e,1)},handleGuideOver:function(t){clearTimeout(this.chart.hoverInt)
var e={x:0,y:0,width:0,height:0}
t.graphics&&(e=t.graphics.getBBox())
var i=this.x+e.x+e.width/2,s=(e=this.y+e.y+e.height/2,t.fillColor)
void 0===s&&(s=t.lineColor),this.chart.showBalloon(t.balloonText,s,!0,i,e),this.fire({type:"rollOverGuide",guide:t,chart:this.chart})},handleGuideOut:function(t){this.chart.hideBalloon(),this.fire({type:"rollOutGuide",guide:t,chart:this.chart})},handleGuideClick:function(t){this.chart.hideBalloon(),this.fire({type:"clickGuide",guide:t,chart:this.chart})},addEventListeners:function(t,e){var i=this
t.mouseover(function(){i.handleGuideOver(e)}),t.mouseup(function(){i.handleGuideClick(e)}),t.touchstart(function(){i.handleGuideOver(e)}),t.mouseout(function(){i.handleGuideOut(e)})},getBBox:function(){var e
return this.labelsSet&&(e=this.labelsSet.getBBox()),e?t.VML||(e={x:e.x+this.x,y:e.y+this.y,width:e.width,height:e.height}):e={x:0,y:0,width:0,height:0},e},destroy:function(){t.remove(this.set),t.remove(this.labelsSet)
var e=this.axisLine
e&&t.remove(e.axisSet),t.remove(this.grid0)},chooseMinorFrequency:function(t){for(var e=10;0<e;e--)if(t/e==Math.round(t/e))return t/e},parseDatesDraw:function(){var e,i,s,a,h,r,n,o=this.chart,l=this.showFirstLabel,d=this.showLastLabel,u="",c=t.extractPeriod(this.minPeriod),p=t.getPeriodDuration(c.period,c.count),m=this.firstDayOfWeek,f=this.boldPeriodBeginning
e=this.minorGridEnabled
var g,v,b=this.gridAlpha,x=(N=this.choosePeriod(0)).period,N=N.count,C=t.getPeriodDuration(x,N)
C<p&&(x=c.period,N=c.count,C=p),"WW"==(c=x)&&(c="DD"),this.stepWidth=this.getStepWidth(this.timeDifference)
var y=Math.ceil(this.timeDifference/C)+5,w=s=t.resetDateToMin(new Date(this.startTime-C),x,N,m).getTime();(c==x&&1==N&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)&&(h=C*this.stepWidth,this.autoWrap&&!this.centerLabels&&(h=-h)),this.cellWidth=p*this.stepWidth,p=-1,(r=Math.round(s/C))/2==Math.round(r/2)&&(p=-2,s-=C),r=this.firstTime
var M=0,A=0
if(e&&1<N&&(g=this.chooseMinorFrequency(N),v=t.getPeriodDuration(x,g),"DD"==x&&(v+=t.getPeriodDuration("hh")),"fff"==x&&(v=1)),0<this.gridCountR)for(y-5-p>this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),e=p;e<=y;e++){if(n=r+C*(e+Math.floor((w-r)/C))-M,"DD"==x&&(n+=36e5),n=t.resetDateToMin(new Date(n),x,N,m).getTime(),"MM"==x&&(i=(n-s)/C,1.5<=(n-s)/C&&(n=n-(i-1)*C+t.getPeriodDuration("DD",3),n=t.resetDateToMin(new Date(n),x,1).getTime(),M+=C)),i=(n-this.startTime)*this.stepWidth,"radar"==o.type){if(0>(i=this.axisWidth-i)||i>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&(A=-C*this.stepWidth/2):"date"==this.type&&(i=this.axisWidth-i)
if(u=!1,this.nextPeriod[c]&&(u=this.checkPeriodChange(this.nextPeriod[c],1,n,s,c)),s=!1,u&&this.markPeriodChange?(u=this.dateFormatsObject[this.nextPeriod[c]],this.twoLineMode&&(u=this.dateFormatsObject[c]+"\n"+u,u=t.fixBrakes(u)),s=!0):u=this.dateFormatsObject[c],f||(s=!1),this.currentDateFormat=u,u=t.formatDate(new Date(n),u,o),(e==p&&!l||e==y&&!d)&&(u=" "),this.labelFunction&&(u=this.labelFunction(u,new Date(n),this,x,N,a).toString()),this.boldLabels&&(s=!0),a=new this.axisItemRenderer(this,i,u,!1,h,A,!1,s),this.pushAxisItem(a),a=s=n,!isNaN(g))for(i=1;i<N;i+=g)this.gridAlpha=this.minorGridAlpha,u=n+v*i,u=t.resetDateToMin(new Date(u),x,g,m).getTime(),u=new this.axisItemRenderer(this,(u-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0),this.pushAxisItem(u)
this.gridAlpha=b}},choosePeriod:function(e){var i=t.getPeriodDuration(this.periods[e].period,this.periods[e].count),s=this.periods
return this.timeDifference<i&&0<e?s[e-1]:Math.ceil(this.timeDifference/i)<=this.gridCountR?s[e]:e+1<s.length?this.choosePeriod(e+1):s[e]},getStepWidth:function(t){var e
return this.startOnAxis?(e=this.axisWidth/(t-1),1==t&&(e=this.axisWidth)):e=this.axisWidth/t,e},timeZoom:function(t,e){this.startTime=t,this.endTime=e},minDuration:function(){var e=t.extractPeriod(this.minPeriod)
return t.getPeriodDuration(e.period,e.count)},checkPeriodChange:function(e,i,s,a,h){s=new Date(s)
var r=new Date(a),n=this.firstDayOfWeek
return a=i,"DD"==e&&(i=1),s=t.resetDateToMin(s,e,i,n).getTime(),i=t.resetDateToMin(r,e,i,n).getTime(),!("DD"==e&&"hh"!=h&&s-i<t.getPeriodDuration(e,a)-t.getPeriodDuration("hh",1))&&s!=i},generateDFObject:function(){var t
for(this.dateFormatsObject={},t=0;t<this.dateFormats.length;t++){var e=this.dateFormats[t]
this.dateFormatsObject[e.period]=e.format}},hideBalloon:function(){this.balloon&&this.balloon.hide&&this.balloon.hide(),this.prevBY=this.prevBX=NaN},formatBalloonText:function(t){return t},showBalloon:function(t,e,i,s){var a,h=this.offset
switch(this.position){case"bottom":e=this.height+h
break
case"top":e=-h
break
case"left":t=-h
break
case"right":t=this.width+h}if(i||(i=this.currentDateFormat),"V"==this.orientation){if(0>e||e>this.height)return
if(isNaN(e))return void this.hideBalloon()
e=this.adjustBalloonCoordinate(e,s),s=this.coordinateToValue(e)}else{if(0>t||t>this.width)return
if(isNaN(t))return void this.hideBalloon()
t=this.adjustBalloonCoordinate(t,s),s=this.coordinateToValue(t)}(h=this.chart.chartCursor)&&(a=h.index),this.balloon&&void 0!==s&&this.balloon.enabled&&(this.balloonTextFunction?("date"!=this.type&&!0!==this.parseDates||(s=new Date(s)),s=this.balloonTextFunction(s)):this.balloonText?s=this.formatBalloonText(this.balloonText,a,i):isNaN(s)||(s=this.formatValue(s,i)),t==this.prevBX&&e==this.prevBY||(this.balloon.setPosition(t,e),this.prevBX=t,this.prevBY=e,s&&this.balloon.showBalloon(s)))},adjustBalloonCoordinate:function(t){return t},createBalloon:function(){var e=this.chart,i=e.chartCursor
i&&("mouse"!=(i=i.cursorPosition)&&(this.stickBalloonToCategory=!0),"start"==i&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1)),this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),t.extend(this.balloon,e.balloon,!0))},setBalloonBounds:function(){var t=this.balloon
if(t){var e=this.chart
t.cornerRadius=0,t.shadowAlpha=0,t.borderThickness=1,t.borderAlpha=1,t.adjustBorderColor=!1,t.showBullet=!1,this.balloon=t,t.chart=e,t.mainSet=e.plotBalloonsSet,t.pointerWidth=this.tickLength,(this.parseDates||"date"==this.type)&&(t.pointerWidth=0),t.className=this.id,e="V","V"==this.orientation&&(e="H"),this.stickBalloonToCategory||(t.animationDuration=0)
var i,s,a,h,r=this.inside,n=this.width,o=this.height
switch(this.position){case"bottom":i=0,s=n,r?(a=0,h=o):(a=o,h=o+1e3)
break
case"top":i=0,s=n,r?(a=0,h=o):(a=-1e3,h=0)
break
case"left":a=0,h=o,r?(i=0,s=n):(i=-1e3,s=0)
break
case"right":a=0,h=o,r?(i=0,s=n):(i=n,s=n+1e3)}t.drop||(t.pointerOrientation=e),t.setBounds(i,a,s,h)}}})}(),function(){var t=window.AmCharts
t.ValueAxis=t.Class({inherits:t.AxisBase,construct:function(e){this.cname="ValueAxis",this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed","axisIntZoomed"),t.ValueAxis.base.construct.call(this,e),this.dataChanged=!0,this.stackType="none",this.position="left",this.unitPosition="right",this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1,this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""},this.scrollbar=!1,this.baseValue=0,this.radarCategoriesEnabled=!0,this.axisFrequency=1,this.gridType="polygons",this.useScientificNotation=!1,this.axisTitleOffset=10,this.pointPosition="axis",this.minMaxMultiplier=1,this.logGridLimit=2,this.totalTextOffset=this.treatZeroAs=0,this.minPeriod="ss",this.relativeStart=0,this.relativeEnd=1,t.applyTheme(this,e,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1),this.totals=[],this.data=this.chart.chartData
var e=this.chart
"xy"!=e.type&&(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step")),this.recalculateToPercents&&this.recalculate(),this.synchronizationMultiplier&&this.synchronizeWith?(t.isString(this.synchronizeWith)&&(this.synchronizeWith=e.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0)):(this.foundGraphs=!1,this.getMinMax(),(0===this.start&&this.end==this.data.length-1&&isNaN(this.minZoom)&&isNaN(this.maxZoom)||isNaN(this.fullMin)&&isNaN(this.fullMax))&&(this.fullMin=this.min,this.fullMax=this.max,"date"!=this.type&&this.strictMinMax&&(isNaN(this.minimum)||(this.fullMin=this.minimum),isNaN(this.maximum)||(this.fullMax=this.maximum)),this.logarithmic&&(this.fullMin=this.logMin,0===this.fullMin&&(this.fullMin=this.treatZeroAs)),"date"==this.type&&(this.minimumDate||(this.fullMin=this.minRR),this.maximumDate||(this.fullMax=this.maxRR),this.strictMinMax&&(this.minimumDate&&(this.fullMin=this.minimumDate.getTime()),this.maximumDate&&(this.fullMax=this.maximumDate.getTime())))))},draw:function(){t.ValueAxis.base.draw.call(this)
var e=this.chart,i=this.set
this.labelRotationR=this.labelRotation,t.setCN(e,this.set,"value-axis value-axis-"+this.id),t.setCN(e,this.labelsSet,"value-axis value-axis-"+this.id),t.setCN(e,this.axisLine.axisSet,"value-axis value-axis-"+this.id)
var s=this.type
if("duration"==s&&(this.duration="ss"),!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1),"date"==s&&(this.logarithmic=!1,this.min=this.minRR,this.max=this.maxRR,this.reversed=!1,this.getDateMinMax()),this.logarithmic){var a=this.treatZeroAs,h=this.getExtremes(0,this.data.length-1).min
if(!isNaN(this.minimum)&&this.minimum<h&&(h=this.minimum),this.logMin=h,this.minReal<h&&(this.minReal=h),isNaN(this.minReal)&&(this.minReal=h),0<a&&0===h&&(this.minReal=h=a),0>=h||0>=this.minimum)return void this.fire({type:"logarithmicAxisFailed",chart:e})}this.grid0=null
var r,n,o=e.dx,l=e.dy
a=!1,h=this.logarithmic
if(isNaN(this.min)||isNaN(this.max)||!this.foundGraphs||1/0==this.min||-1/0==this.max)a=!0
else{"date"==this.type&&this.min==this.max&&(this.max+=this.minDuration(),this.min-=this.minDuration())
var d=this.labelFrequency,u=this.showFirstLabel,c=this.showLastLabel,p=1,m=0
if(this.minCalc=this.min,this.maxCalc=this.max,this.strictMinMax&&(isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||(this.max=this.maximum),this.min==this.max))return
if(isNaN(this.minZoom)||(this.minReal=this.min=this.minZoom),isNaN(this.maxZoom)||(this.max=this.maxZoom),this.logarithmic){n=this.fullMin
var f=this.fullMax
isNaN(this.minimum)||(n=this.minimum),isNaN(this.maximum)||(f=this.maximum)
f=Math.log(f)*Math.LOG10E-Math.log(n)*Math.LOG10E
var g=Math.log(this.max)/Math.LN10-Math.log(n)*Math.LOG10E
this.relativeStart=t.roundTo((Math.log(this.minReal)/Math.LN10-Math.log(n)*Math.LOG10E)/f,5),this.relativeEnd=t.roundTo(g/f,5)}else this.relativeStart=t.roundTo(t.fitToBounds((this.min-this.fullMin)/(this.fullMax-this.fullMin),0,1),5),this.relativeEnd=t.roundTo(t.fitToBounds((this.max-this.fullMin)/(this.fullMax-this.fullMin),0,1),5)
var v
f=Math.round((this.maxCalc-this.minCalc)/this.step)+1
!0===h?(v=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/v,v>this.logGridLimit&&(f=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,m=Math.round(Math.log(this.minReal)*Math.LOG10E),f>this.gridCountR&&(p=Math.ceil(f/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min)
var b,x=0
for(1>this.step&&-1<this.step&&(x=t.getDecimals(this.step)),this.integersOnly&&(x=0),x>this.maxDecCount&&(x=this.maxDecCount),g=this.precision,isNaN(g)||(x=g),isNaN(this.maxZoom)&&(this.max=t.roundTo(this.max,this.maxDecCount),this.min=t.roundTo(this.min,this.maxDecCount)),(n={}).precision=x,n.decimalSeparator=e.nf.decimalSeparator,n.thousandsSeparator=e.nf.thousandsSeparator,this.numberFormatter=n,this.exponential=!1,n=m;n<f;n+=p){var N=t.roundTo(this.step*n+this.min,x);-1!=String(N).indexOf("e")&&(this.exponential=!0)}this.duration&&(this.maxInterval=t.getMaxInterval(this.max,this.duration))
var C
x=this.step,N=this.minorGridAlpha
if(this.minorGridEnabled&&(C=this.getMinorGridStep(x,this.stepWidth*x)),this.autoGridCount||0!==this.gridCount)if("date"==s)this.generateDFObject(),this.timeDifference=this.max-this.min,this.maxTime=this.lastTime=this.max,this.startTime=this.firstTime=this.min,this.parseDatesDraw()
else for(f>=this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),s=this.minCalc,h&&(f++,s=this.maxCalc-f*x),this.gridCountReal=f,n=this.startCount=m;n<f;n+=p)if(m=x*n+s,m=t.roundTo(m,this.maxDecCount+1),(!this.integersOnly||Math.round(m)==m)&&(isNaN(g)||Number(t.toFixed(m,g))==m)){if(!0===h)if(v>this.logGridLimit){if((m=Math.pow(10,n))>this.max)continue}else if(0>=m&&(m=s+x*n+x/2,0>=m))continue
var y
if(b=this.formatValue(m,!1,n),Math.round(n/d)!=n/d&&(b=void 0),(0===n&&!u||n==f-1&&!c)&&(b=" "),r=this.getCoordinate(m),this.rotate&&this.autoWrap&&(y=this.stepWidth*x-10),b=new this.axisItemRenderer(this,r,b,void 0,y,void 0,void 0,this.boldLabels),this.pushAxisItem(b),m==this.baseValue&&"radar"!=e.type){var w,M,A=this.width,S=this.height
"H"==this.orientation?0<=r&&r<=A+1&&(w=[r,r,r+o],M=[S,0,l]):0<=r&&r<=S+1&&(w=[0,A,A+o],M=[r,r,r+l]),w&&(r=t.fitToBounds(2*this.gridAlpha,0,1),isNaN(this.zeroGridAlpha)||(r=this.zeroGridAlpha),(r=t.line(e.container,w,M,this.gridColor,r,1,this.dashLength)).translate(this.x,this.y),this.grid0=r,e.axesSet.push(r),r.toBack(),t.setCN(e,r,this.bcn+"zero-grid-"+this.id),t.setCN(e,r,this.bcn+"zero-grid"))}if(!isNaN(C)&&0<N&&n<f-1){for(r=x/C,h&&(C=x*(n+p)+this.minCalc,C=t.roundTo(C,this.maxDecCount+1),v>this.logGridLimit&&(C=Math.pow(10,n+p)),C=(C-m)/(r=9)),A=this.gridAlpha,this.gridAlpha=this.minorGridAlpha,S=1;S<r;S++){var D=this.getCoordinate(m+C*S)
D=new this.axisItemRenderer(this,D,"",!1,0,0,!1,!1,0,!0)
this.pushAxisItem(D)}this.gridAlpha=A}}if(0<(y=(v=this.guides).length)){for(w=this.fillAlpha,n=this.fillAlpha=0;n<y;n++)M=v[n],o=NaN,C=M.above,isNaN(M.toValue)||(o=this.getCoordinate(M.toValue),b=new this.axisItemRenderer(this,o,"",!0,NaN,NaN,M),this.pushAxisItem(b,C)),l=NaN,isNaN(M.value)||(l=this.getCoordinate(M.value),b=new this.axisItemRenderer(this,l,M.label,!0,NaN,(o-l)/2,M),this.pushAxisItem(b,C)),isNaN(o)&&(l-=3,o=l+3),b&&(d=b.label)&&this.addEventListeners(d,M),isNaN(o-l)||0>l&&0>o||(o=new this.guideFillRenderer(this,l,o,M),this.pushAxisItem(o,C),C=o.graphics(),M.graphics=C,this.addEventListeners(C,M))
this.fillAlpha=w}b=this.baseValue,this.min>this.baseValue&&this.max>this.baseValue&&(b=this.min),this.min<this.baseValue&&this.max<this.baseValue&&(b=this.max),h&&b<this.minReal&&(b=this.minReal),this.baseCoord=this.getCoordinate(b,!0),(b={type:"axisChanged",target:this,chart:e}).min=h?this.minReal:this.min,b.max=this.max,this.fire(b),this.axisCreated=!0}h=this.axisLine.set,b=this.labelsSet,i.translate(this.x,this.y),b.translate(this.x,this.y),this.positionTitle(),"radar"!=e.type&&h.toFront(),!this.visible||a?(i.hide(),h.hide(),b.hide()):(i.show(),h.show(),b.show()),this.axisY=this.y,this.axisX=this.x},getDateMinMax:function(){this.minimumDate&&(this.minimumDate instanceof Date||(this.minimumDate=t.getDate(this.minimumDate,this.chart.dataDateFormat,"fff")),this.min=this.minimumDate.getTime()),this.maximumDate&&(this.maximumDate instanceof Date||(this.maximumDate=t.getDate(this.maximumDate,this.chart.dataDateFormat,"fff")),this.max=this.maximumDate.getTime())},formatValue:function(e,i,s){var a=this.exponential,h=this.logarithmic,r=this.numberFormatter,n=this.chart
if(r)return!0===this.logarithmic&&(a=-1!=String(e).indexOf("e")),this.useScientificNotation&&(a=!0),this.usePrefixes&&(a=!1),a?(s=-1==String(e).indexOf("e")?e.toExponential(15):String(e),a=s.split("e"),s=Number(a[0]),a=Number(a[1]),s=t.roundTo(s,14),i||isNaN(this.precision)||(s=t.roundTo(s,this.precision)),10==s&&(s=1,a+=1),s=s+"e"+a,0===e&&(s="0"),1==e&&(s="1")):(h&&(a=String(e).split("."),a[1]?(r.precision=a[1].length,0>s&&(r.precision=Math.abs(s)),i&&1<e&&(r.precision=0),i||isNaN(this.precision)||(r.precision=this.precision)):r.precision=-1),s=this.usePrefixes?t.addPrefix(e,n.prefixesOfBigNumbers,n.prefixesOfSmallNumbers,r,!i):t.formatNumber(e,r,r.precision)),this.duration&&(i&&(r.precision=0),s=t.formatDuration(e,this.duration,"",this.durationUnits,this.maxInterval,r)),"date"==this.type&&(s=t.formatDate(new Date(e),this.currentDateFormat,n)),this.recalculateToPercents?s+="%":(i=this.unit)&&(s="left"==this.unitPosition?i+s:s+i),this.labelFunction&&(s="date"==this.type?this.labelFunction(s,new Date(e),this).toString():this.labelFunction(e,s,this).toString()),s},getMinorGridStep:function(t,e){var i=[5,4,2]
60>e&&i.shift()
for(var s=Math.floor(Math.log(Math.abs(t))*Math.LOG10E),a=0;a<i.length;a++){var h=t/i[a],r=Math.floor(Math.log(Math.abs(h))*Math.LOG10E)
if(!(1<Math.abs(s-r)))if(1>t){if((r=Math.pow(10,-r)*h)==Math.round(r))return h}else if(h==Math.round(h))return h}return 1},stackGraphs:function(e){var i=this.stackType
"stacked"==i&&(i="regular"),"line"==i&&(i="none"),"100% stacked"==i&&(i="100%"),this.stackType=i
var s,a,h,r,n,o,l=[],d=[],u=[],c=[],p=this.chart.graphs,m=this.baseValue,f=!1
if("line"!=e&&"step"!=e&&"smoothedLine"!=e||(f=!0),f&&("regular"==i||"100%"==i))for(n=0;n<p.length;n++)r=p[n],r.stackGraph=null,r.hidden||(h=r.type,r.chart==this.chart&&r.valueAxis==this&&e==h&&r.stackable&&(a&&(r.stackGraph=a),a=r))
for(r=this.start-10,a=this.end+10,n=this.data.length-1,r=t.fitToBounds(r,0,n),a=t.fitToBounds(a,0,n),o=r;o<=a;o++){var g=0
for(n=0;n<p.length;n++)if(r=p[n],r.hidden)r.newStack&&(u[o]=NaN,d[o]=NaN)
else if(h=r.type,r.chart==this.chart&&r.valueAxis==this&&e==h&&r.stackable)if(h=this.data[o].axes[this.id].graphs[r.id],s=h.values.value,isNaN(s))r.newStack&&(u[o]=NaN,d[o]=NaN)
else{var v=t.getDecimals(s)
g<v&&(g=v),isNaN(c[o])?c[o]=Math.abs(s):c[o]+=Math.abs(s),c[o]=t.roundTo(c[o],g),v=r.fillToGraph,f&&v&&(v=this.data[o].axes[this.id].graphs[v.id])&&(h.values.open=v.values.value),"regular"==i&&(f&&(isNaN(l[o])?(l[o]=s,h.values.close=s,h.values.open=this.baseValue):(isNaN(s)?h.values.close=l[o]:h.values.close=s+l[o],h.values.open=l[o],l[o]=h.values.close)),"column"==e&&(r.newStack&&(u[o]=NaN,d[o]=NaN),h.values.close=s,0>s?(h.values.close=s,isNaN(d[o])?h.values.open=m:(h.values.close+=d[o],h.values.open=d[o]),d[o]=h.values.close):(h.values.close=s,isNaN(u[o])?h.values.open=m:(h.values.close+=u[o],h.values.open=u[o]),u[o]=h.values.close)))}}for(o=this.start;o<=this.end;o++)for(n=0;n<p.length;n++)r=p[n],r.hidden?r.newStack&&(u[o]=NaN,d[o]=NaN):(h=r.type,r.chart==this.chart&&r.valueAxis==this&&e==h&&r.stackable&&(h=this.data[o].axes[this.id].graphs[r.id],s=h.values.value,isNaN(s)||(l=s/c[o]*100,h.values.percents=l,h.values.total=c[o],r.newStack&&(u[o]=NaN,d[o]=NaN),"100%"==i&&(isNaN(d[o])&&(d[o]=0),isNaN(u[o])&&(u[o]=0),0>l?(h.values.close=t.fitToBounds(l+d[o],-100,100),h.values.open=d[o],d[o]=h.values.close):(h.values.close=t.fitToBounds(l+u[o],-100,100),h.values.open=u[o],u[o]=h.values.close)))))},recalculate:function(){var e,i=this.chart,s=i.graphs
for(e=0;e<s.length;e++){var a=s[e]
if(a.valueAxis==this){var h="value"
"candlestick"!=a.type&&"ohlc"!=a.type||(h="open")
var r,n,o,l=this.end+2
l=t.fitToBounds(this.end+1,0,this.data.length-1)
if(0<(p=this.start)&&p--,n=this.start,a.compareFromStart&&(n=0),!isNaN(i.startTime)&&(o=i.categoryAxis)){var d=o.minDuration(),u=(d=new Date(i.startTime+d/2),t.resetDateToMin(new Date(i.startTime),o.minPeriod).getTime())
t.resetDateToMin(new Date(d),o.minPeriod).getTime()>u&&n++}for((o=i.recalculateFromDate)&&(o=t.getDate(o,i.dataDateFormat,"fff"),n=i.getClosestIndex(i.chartData,"time",o.getTime(),!0,0,i.chartData.length),l=i.chartData.length-1),o=n;o<=l&&(r=(n=this.data[o].axes[this.id].graphs[a.id]).values[h],a.recalculateValue&&(r=n.dataContext[a.valueField+a.recalculateValue]),isNaN(r));o++);for(this.recBaseValue=r,h=p;h<=l;h++){(n=this.data[h].axes[this.id].graphs[a.id]).percents={}
var c,p=n.values
for(c in p)n.percents[c]="percents"!=c?p[c]/r*100-100:p[c]}}}},getMinMax:function(){var e,i=!1,s=this.chart,a=s.graphs
for(e=0;e<a.length;e++){var h=a[e].type;("line"==h||"step"==h||"smoothedLine"==h)&&this.expandMinMax&&(i=!0)}if(i&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++),"serial"==s.type&&(!0!==s.categoryAxis.parseDates||i||this.end<this.data.length-1&&this.end++),this.includeAllValues&&(this.start=0,this.end=this.data.length-1),i=this.minMaxMultiplier,s=this.getExtremes(this.start,this.end),this.min=s.min,this.max=s.max,this.minRR=this.min,this.maxRR=this.max,i=(this.max-this.min)*(i-1),this.min-=i,this.max+=i,i=this.guides.length,this.includeGuidesInMinMax&&0<i)for(s=0;s<i;s++)a=this.guides[s],a.toValue<this.min&&(this.min=a.toValue),a.value<this.min&&(this.min=a.value),a.toValue>this.max&&(this.max=a.toValue),a.value>this.max&&(this.max=a.value)
isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||(this.max=this.maximum),"date"==this.type&&this.getDateMinMax(),this.min>this.max&&(i=this.max,this.max=this.min,this.min=i),isNaN(this.minZoom)||(this.min=this.minZoom),isNaN(this.maxZoom)||(this.max=this.maxZoom),this.minCalc=this.min,this.maxCalc=this.max,this.minReal=this.min,this.maxReal=this.max,0===this.min&&0===this.max&&(this.max=9),this.min>this.max&&(this.min=this.max-1),i=this.min,s=this.max,e=0===(a=this.max-this.min)?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,isNaN(this.maximum)&&(this.max=Math.ceil(this.max/e)*e+e),isNaN(this.minimum)&&(this.min=Math.floor(this.min/e)*e-e),0>this.min&&0<=i&&(this.min=0),0<this.max&&0>=s&&(this.max=0),"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100),a=this.max-this.min,e=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,this.step=Math.ceil(a/this.gridCountR/e)*e,a=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E)),a=t.fixStepE(a),5<(e=Math.ceil(this.step/a))&&(e=10),5>=e&&2<e&&(e=5),this.step=Math.ceil(this.step/(a*e))*a*e,isNaN(this.setStep)||(this.step=this.setStep),1>a?(this.maxDecCount=Math.abs(Math.log(Math.abs(a))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=t.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0,this.min=this.step*Math.floor(this.min/this.step),this.max=this.step*Math.ceil(this.max/this.step),0>this.min&&0<=i&&(this.min=0),0<this.max&&0>=s&&(this.max=0),1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal)),a=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*Math.LOG10E)),0===this.min&&(this.minReal=a),0===this.min&&1<this.minReal&&(this.minReal=1),0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min),this.logarithmic&&(2<Math.log(s)*Math.LOG10E-Math.log(i)*Math.LOG10E?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(i))*Math.LOG10E)),this.maxReal=this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(s))*Math.LOG10E))):(i=Math.pow(10,Math.floor(Math.log(Math.abs(i))*Math.LOG10E))/10,Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*Math.LOG10E))/10<i&&(this.minReal=this.min=10*i)))},getExtremes:function(t,e){var i,s,a
for(a=t;a<=e;a++){var h,r=this.data[a].axes[this.id].graphs
for(h in r)if(r.hasOwnProperty(h)){var n,o=this.chart.graphsById[h]
if(o.includeInMinMax&&(!o.hidden||this.includeHidden))if(isNaN(i)&&(i=1/0),isNaN(s)&&(s=-1/0),this.foundGraphs=!0,o=r[h].values,this.recalculateToPercents&&(o=r[h].percents),this.minMaxField)n=o[this.minMaxField],n<i&&(i=n),n>s&&(s=n)
else for(var l in o)o.hasOwnProperty(l)&&"percents"!=l&&"total"!=l&&"error"!=l&&(n=o[l],n<i&&(i=n),n>s&&(s=n))}}return{min:i,max:s}},zoomOut:function(t){this.maxZoom=this.minZoom=NaN,this.zoomToRelativeValues(0,1,t)},zoomToRelativeValues:function(t,e,i){if(this.reversed){var s=t
t=1-e,e=1-s}var a=this.fullMax,h=(s=this.fullMin)+(a-s)*t,r=s+(a-s)*e
return 0<=this.minimum&&0>h&&(h=0),this.logarithmic&&(isNaN(this.minimum)||(s=this.minimum),isNaN(this.maximum)||(a=this.maximum),a=Math.log(a)*Math.LOG10E-Math.log(s)*Math.LOG10E,h=Math.pow(10,a*t+Math.log(s)*Math.LOG10E),r=Math.pow(10,a*e+Math.log(s)*Math.LOG10E)),this.zoomToValues(h,r,i)},zoomToValues:function(e,i,s){if(i<e){var a=i
i=e,e=a}var h=this.fullMax
a=this.fullMin
if(this.relativeStart=t.roundTo((e-a)/(h-a),9),this.relativeEnd=t.roundTo((i-a)/(h-a),9),this.logarithmic){isNaN(this.minimum)||(a=this.minimum),isNaN(this.maximum)||(h=this.maximum)
h=Math.log(h)*Math.LOG10E-Math.log(a)*Math.LOG10E
var r=Math.log(i)/Math.LN10-Math.log(a)*Math.LOG10E
this.relativeStart=t.roundTo((Math.log(e)/Math.LN10-Math.log(a)*Math.LOG10E)/h,9),this.relativeEnd=t.roundTo(r/h,9)}if(this.minZoom!=e||this.maxZoom!=i)return this.minZoom=e,this.maxZoom=i,a={type:"axisZoomed"},a.chart=this.chart,a.valueAxis=this,a.startValue=e,a.endValue=i,a.relativeStart=this.relativeStart,a.relativeEnd=this.relativeEnd,this.prevStartValue==e&&this.prevEndValue==i||this.fire(a),this.prevStartValue=e,this.prevEndValue=i,s||(e={},t.copyProperties(a,e),e.type="axisIntZoomed",this.fire(e)),0===this.relativeStart&&1==this.relativeEnd&&(this.maxZoom=this.minZoom=NaN),!0},coordinateToValue:function(t){if(isNaN(t))return NaN
var e=this.axisWidth,i=this.stepWidth,s=this.reversed,a=this.rotate,h=this.min,r=this.minReal
return!0===this.logarithmic?Math.pow(10,(a?!0===s?(e-t)/i:t/i:!0===s?t/i:(e-t)/i)+Math.log(r)*Math.LOG10E):!0===s?a?h-(t-e)/i:t/i+h:a?t/i+h:h-(t-e)/i},getCoordinate:function(t,e){if(isNaN(t))return NaN
var i=this.rotate,s=this.reversed,a=this.axisWidth,h=this.stepWidth,r=this.min,n=this.minReal
return!0===this.logarithmic?(0===t&&(t=this.treatZeroAs),r=Math.log(t)*Math.LOG10E-Math.log(n)*Math.LOG10E,i=i?!0===s?a-h*r:h*r:!0===s?h*r:a-h*r):i=!0===s?i?a-h*(t-r):h*(t-r):i?h*(t-r):a-h*(t-r),1e7<Math.abs(i)&&(i=i/Math.abs(i)*1e7),e||(i=Math.round(i)),i},synchronizeWithAxis:function(t){this.synchronizeWith=t,this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},handleSynchronization:function(){if(this.synchronizeWith){t.isString(this.synchronizeWith)&&(this.synchronizeWith=this.chart.getValueAxisById(this.synchronizeWith))
var e=(s=this.synchronizeWith).min,i=s.max,s=s.step,a=this.synchronizationMultiplier
a&&(this.min=e*a,this.max=i*a,this.step=s*a,e=Math.abs(Math.log(Math.abs(Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E))))*Math.LOG10E),this.maxDecCount=e=Math.round(e),this.draw())}}})}(),function(){var t=window.AmCharts
t.RecAxis=t.Class({construct:function(e){var i=e.chart,s=e.axisThickness,a=e.axisColor,h=e.axisAlpha,r=e.offset,n=e.dx,o=e.dy,l=e.x,d=e.y,u=e.height,c=e.width,p=i.container
"H"==e.orientation?(a=t.line(p,[0,c],[0,0],a,h,s),this.axisWidth=e.width,"bottom"==e.position?(o=s/2+r+u+d-1,s=l):(o=-s/2-r+d+o,s=n+l)):(this.axisWidth=e.height,"right"==e.position?(a=t.line(p,[0,0,-n],[0,u,u-o],a,h,s),o=d+o,s=s/2+r+n+c+l-1):(a=t.line(p,[0,0],[0,u],a,h,s),o=d,s=-s/2-r+l)),a.translate(s,o),(s=i.container.set()).push(a),i.axesSet.push(s),t.setCN(i,a,e.bcn+"line"),this.axisSet=s,this.set=a}})}(),function(){var t=window.AmCharts
t.RecItem=t.Class({construct:function(e,i,s,a,h,r,n,o,l,d,u,c){i=Math.round(i)
var p=e.chart
this.value=s,void 0==s&&(s=""),l||(l=0),void 0==a&&(a=!0)
var m=p.fontFamily,f=e.fontSize
void 0==f&&(f=p.fontSize)
var g=e.color
void 0==g&&(g=p.color),void 0!==u&&(g=u)
var v=e.chart.container,b=v.set()
this.set=b
var x=e.axisThickness,N=e.axisColor,C=e.axisAlpha,y=e.tickLength,w=e.gridAlpha,M=e.gridThickness,A=e.gridColor,S=e.dashLength,D=e.fillColor,L=e.fillAlpha,T=e.labelsEnabled
u=e.labelRotationR
var k,B,R=e.counter,O=e.inside,E=e.labelOffset,I=e.dx,G=e.dy,F=e.orientation,z=e.position,P=e.previousCoord,W=e.height,Y=e.width,H=e.offset
n?(void 0!==n.id&&(c=p.classNamePrefix+"-guide-"+n.id),T=!0,isNaN(n.tickLength)||(y=n.tickLength),void 0!=n.lineColor&&(A=n.lineColor),void 0!=n.color&&(g=n.color),isNaN(n.lineAlpha)||(w=n.lineAlpha),isNaN(n.dashLength)||(S=n.dashLength),isNaN(n.lineThickness)||(M=n.lineThickness),!0===n.inside&&(O=!0,0<H&&(H=0)),isNaN(n.labelRotation)||(u=n.labelRotation),isNaN(n.fontSize)||(f=n.fontSize),n.position&&(z=n.position),void 0!==n.boldLabel&&(o=n.boldLabel),isNaN(n.labelOffset)||(E=n.labelOffset)):""===s&&(y=0),d&&!isNaN(e.minorTickLength)&&(y=e.minorTickLength)
var V="start"
0<h&&(V="middle"),e.centerLabels&&(V="middle")
var X,U,j,Z=u*Math.PI/180,q=0,K=0,_=0,J=X=0,Q=0
"V"==F&&(u=0),T&&""!==s&&(J=(V=(j=e.autoWrap&&0===u?t.wrappedText(v,s,g,m,f,V,o,Math.abs(h),0):t.text(v,s,g,m,f,V,o)).getBBox()).width,Q=V.height),"H"==F?(0<=i&&i<=Y+1&&(0<y&&0<C&&i+l<=Y+1&&(k=t.line(v,[i+l,i+l],[0,y],N,C,M),b.push(k)),0<w&&(B=t.line(v,[i,i+I,i+I],[W,W+G,G],A,w,M,S),b.push(B))),K=0,q=i,n&&90==u&&O&&(q-=f),!1===a?(V="start",K="bottom"==z?O?K+y:K-y:O?K-y:K+y,q+=3,0<h&&(q+=h/2-3,V="middle"),0<u&&(V="middle")):V="middle",1==R&&0<L&&!n&&!d&&P<Y&&(0<(X=(a=t.fitToBounds(i,0,Y))-(P=t.fitToBounds(P,0,Y)))&&((U=t.rect(v,X,e.height,D,L)).translate(a-X+I,G),b.push(U))),"bottom"==z?(K+=W+f/2+H,O?(0<u?(K=W-J/2*Math.sin(Z)-y-3,e.centerRotatedLabels||(q+=J/2*Math.cos(Z)-4+2)):0>u?(K=W+J*Math.sin(Z)-y-3+2,q+=-J*Math.cos(Z)-Q*Math.sin(Z)-4):K-=y+f+3+3,K-=E):(0<u?(K=W+J/2*Math.sin(Z)+y+3,e.centerRotatedLabels||(q-=J/2*Math.cos(Z))):0>u?(K=W+y+3-J/2*Math.sin(Z)+2,q+=J/2*Math.cos(Z)):K+=y+x+3+3,K+=E)):(K+=G+f/2-H,q+=I,O?(0<u?(K=J/2*Math.sin(Z)+y+3,e.centerRotatedLabels||(q-=J/2*Math.cos(Z))):K+=y+3,K+=E):(0<u?(K=-J/2*Math.sin(Z)-y-6,e.centerRotatedLabels||(q+=J/2*Math.cos(Z))):K-=y+f+3+x+3,K-=E)),"bottom"==z?X=(O?W-y-1:W+x-1)+H:(_=I,X=(O?G:G-y-x+1)-H),r&&(q+=r),f=q,0<u&&(f+=J/2*Math.cos(Z)),j&&(r=0,O&&(r=J/2*Math.cos(Z)),f+r>Y+2||0>f)&&(j.remove(),j=null)):(0<=i&&i<=W+1&&(0<y&&0<C&&i+l<=W+1&&(k=t.line(v,[0,y+1],[i+l,i+l],N,C,M),b.push(k)),0<w&&(B=t.line(v,[0,I,Y+I],[i,i+G,i+G],A,w,M,S),b.push(B))),V="end",(!0===O&&"left"==z||!1===O&&"right"==z)&&(V="start"),K=i-Q/2+2,1==R&&0<L&&!n&&!d&&(Z=(a=t.fitToBounds(i,0,W))-(P=t.fitToBounds(P,0,W)),(U=t.polygon(v,[0,e.width,e.width,0],[0,0,Z,Z],D,L)).translate(I,a-Z+G),b.push(U)),K+=f/2,"right"==z?(q+=I+Y+H,K+=G,O?(r||(K-=f/2+3),q=q-(y+4)-E):(q+=y+4+x,K-=2,q+=E)):O?(q+=y+4-H,r||(K-=f/2+3),n&&(q+=I,K+=G),q+=E):(q+=-y-x-4-2-H,K-=2,q-=E),k&&("right"==z?(_+=I+H+Y-1,X+=G,_=O?_-x:_+x):(_-=H,O||(_-=y+x))),r&&(K+=r),O=-3,"right"==z&&(O+=G),j&&(K>W+1||K<O-f/10)&&(j.remove(),j=null)),k&&(k.translate(_,X),t.setCN(p,k,e.bcn+"tick"),t.setCN(p,k,c,!0),n&&t.setCN(p,k,"guide")),!1===e.visible&&(k&&k.remove(),j&&(j.remove(),j=null)),j&&(j.attr({"text-anchor":V}),j.translate(q,K,NaN,!0),0!==u&&j.rotate(-u,e.chart.backgroundColor),e.allLabels.push(j),this.label=j,t.setCN(p,j,e.bcn+"label"),t.setCN(p,j,c,!0),n&&t.setCN(p,j,"guide")),B&&(t.setCN(p,B,e.bcn+"grid"),t.setCN(p,B,c,!0),n&&t.setCN(p,B,"guide")),U&&(t.setCN(p,U,e.bcn+"fill"),t.setCN(p,U,c,!0)),d?B&&t.setCN(p,B,e.bcn+"grid-minor"):(e.counter=0===R?1:0,e.previousCoord=i),0===this.set.node.childNodes.length&&this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}})}(),function(){var t=window.AmCharts
t.RecFill=t.Class({construct:function(e,i,s,a){var h=e.dx,r=e.dy,n=e.orientation,o=0
if(s<i){var l=i
i=s,s=l}var d=a.fillAlpha
isNaN(d)&&(d=0)
l=e.chart.container
var u=a.fillColor
"V"==n?(i=t.fitToBounds(i,0,e.height),s=t.fitToBounds(s,0,e.height)):(i=t.fitToBounds(i,0,e.width),s=t.fitToBounds(s,0,e.width)),s-=i,isNaN(s)&&(s=4,o=2,d=0),0>s&&"object"==typeof u&&(u=u.join(",").split(",").reverse()),"V"==n?(n=t.rect(l,e.width,s,u,d)).translate(h,i-o+r):(n=t.rect(l,s,e.height,u,d)).translate(i-o+h,r),t.setCN(e.chart,n,"guide-fill"),a.id&&t.setCN(e.chart,n,"guide-fill-"+a.id),this.set=l.set([n])},graphics:function(){return this.set},getLabel:function(){}})}(),function(){var t=window.AmCharts
t.AmChart=t.Class({construct:function(e){this.svgIcons=this.tapToActivate=!0,this.theme=e,this.classNamePrefix="amcharts",this.addClassNames=!1,this.version="3.21.14",t.addChart(this),this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished"),this.height=this.width="100%",this.dataChanged=!0,this.chartCreated=!1,this.previousWidth=this.previousHeight=0,this.backgroundColor="#FFFFFF",this.borderAlpha=this.backgroundAlpha=0,this.color=this.borderColor="#000000",this.fontFamily="Verdana",this.fontSize=11,this.usePrefixes=!1,this.autoResize=!0,this.autoDisplay=!1,this.addCodeCredits=this.accessible=!0,this.touchStartTime=this.touchClickDuration=0,this.precision=-1,this.percentPrecision=2,this.decimalSeparator=".",this.thousandsSeparator=",",this.labels=[],this.allLabels=[],this.titles=[],this.marginRight=this.marginLeft=this.autoMarginOffset=0,this.timeOuts=[]
this.creditsPosition="top-left"
var i=document.createElement("div"),s=i.style
s.overflow="hidden",s.position="relative",s.textAlign="left",this.chartDiv=i,(s=(i=document.createElement("div")).style).overflow="hidden",s.position="relative",s.textAlign="left",this.legendDiv=i,this.titleHeight=0,this.hideBalloonTime=150,this.handDrawScatter=2,this.cssScale=this.handDrawThickness=1,this.cssAngle=0,this.prefixesOfBigNumbers=[{number:1e3,prefix:"k"},{number:1e6,prefix:"M"},{number:1e9,prefix:"G"},{number:1e12,prefix:"T"},{number:1e15,prefix:"P"},{number:1e18,prefix:"E"},{number:1e21,prefix:"Z"},{number:1e24,prefix:"Y"}],this.prefixesOfSmallNumbers=[{number:1e-24,prefix:"y"},{number:1e-21,prefix:"z"},{number:1e-18,prefix:"a"},{number:1e-15,prefix:"f"},{number:1e-12,prefix:"p"},{number:1e-9,prefix:"n"},{number:1e-6,prefix:"μ"},{number:.001,prefix:"m"}],this.panEventsEnabled=!0,this.product="amcharts",this.animations=[],this.balloon=new t.AmBalloon(this.theme),this.balloon.chart=this,this.processTimeout=0,this.processCount=1e3,this.animatable=[],this.langObj={},t.applyTheme(this,e,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(t,e,i){this.accessible&&t&&(i&&t.setAttr("role",i),t.setAttr("aria-label",e))},drawBackground:function(){t.remove(this.background)
var e=this.container,i=this.backgroundColor,s=this.backgroundAlpha,a=this.set
t.isModern||0!==s||(s=.001)
var h=this.updateWidth()
this.realWidth=h
var r=this.updateHeight()
this.realHeight=r,i=t.polygon(e,[0,h-1,h-1,0],[0,0,r-1,r-1],i,s,1,this.borderColor,this.borderAlpha),t.setCN(this,i,"bg"),this.background=i,a.push(i),(i=this.backgroundImage)&&(e=e.image(i,0,0,h,r),t.setCN(this,i,"bg-image"),this.bgImg=e,a.push(e))},drawTitles:function(e){var i=this.titles
if(this.titleHeight=0,t.ifArray(i)){var s,a=20
for(s=0;s<i.length;s++){var h=i[s]
if(!1!==(h=t.processObject(h,t.Title,this.theme)).enabled){var r=h.color
void 0===r&&(r=this.color)
var n=h.size
isNaN(n)&&(n=this.fontSize+2),isNaN(h.alpha)
var o=this.marginLeft,l=!0
void 0!==h.bold&&(l=h.bold),(r=t.wrappedText(this.container,h.text,r,this.fontFamily,n,"middle",l,this.realWidth-35-this.marginRight-o)).translate(o+(this.realWidth-this.marginRight-o)/2,a),r.node.style.pointerEvents="none",h.sprite=r,void 0!==h.tabIndex&&r.setAttr("tabindex",h.tabIndex),t.setCN(this,r,"title"),h.id&&t.setCN(this,r,"title-"+h.id),r.attr({opacity:h.alpha}),a+=r.getBBox().height+5,e?r.remove():this.freeLabelsSet.push(r)}}this.titleHeight=a-10}},write:function(t){var e=this
if(e.listeners)for(var i=0;i<e.listeners.length;i++){var s=e.listeners[i]
e.addListener(s.event,s.method)}e.fire({type:"buildStarted",chart:e}),e.afterWriteTO&&clearTimeout(e.afterWriteTO),0<e.processTimeout?e.afterWriteTO=setTimeout(function(){e.afterWrite.call(e,t)},e.processTimeout):e.afterWrite(t)},afterWrite:function(e){var i
if(i="object"!=typeof e?document.getElementById(e):e){for(;i.firstChild;)i.removeChild(i.firstChild)
this.div=i,i.style.overflow="hidden",i.style.textAlign="left",e=this.chartDiv
var s=this.legendDiv,a=this.legend,h=s.style,r=e.style
this.measure(),this.previousHeight=this.divRealHeight,this.previousWidth=this.divRealWidth
var n,o=document.createElement("div")
if((n=o.style).position="relative",this.containerDiv=o,o.className=this.classNamePrefix+"-main-div",e.className=this.classNamePrefix+"-chart-div",i.appendChild(o),(i=this.exportConfig)&&t.AmExport&&!this.AmExport&&(this.AmExport=new t.AmExport(this,i)),this.amExport&&t.AmExport&&(this.AmExport=t.extend(this.amExport,new t.AmExport(this),!0)),this.AmExport&&this.AmExport.init&&this.AmExport.init(),a){if((a=this.addLegend(a,a.divId)).enabled)switch(h.left=null,h.top=null,h.right=null,r.left=null,r.right=null,r.top=null,h.position="relative",r.position="relative",n.width="100%",n.height="100%",a.position){case"bottom":o.appendChild(e),o.appendChild(s)
break
case"top":o.appendChild(s),o.appendChild(e)
break
case"absolute":h.position="absolute",r.position="absolute",void 0!==a.left&&(h.left=a.left+"px"),void 0!==a.right&&(h.right=a.right+"px"),void 0!==a.top&&(h.top=a.top+"px"),void 0!==a.bottom&&(h.bottom=a.bottom+"px"),a.marginLeft=0,a.marginRight=0,o.appendChild(e),o.appendChild(s)
break
case"right":h.position="relative",r.position="absolute",o.appendChild(e),o.appendChild(s)
break
case"left":h.position="absolute",r.position="relative",o.appendChild(e),o.appendChild(s)
break
case"outside":o.appendChild(e)}else o.appendChild(e)
this.prevLegendPosition=a.position}else o.appendChild(e)
this.listenersAdded||(this.addListeners(),this.listenersAdded=!0),(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&t.addWheelListeners(),this.initChart()}},createLabelsSet:function(){t.remove(this.labelsSet),this.labelsSet=this.container.set(),this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=t.processObject(this.balloon,t.AmBalloon,this.theme),window.AmCharts_path&&(this.path=window.AmCharts_path),void 0===this.path&&(this.path=t.getPath()),void 0===this.path&&(this.path="amcharts/"),this.path=t.normalizeUrl(this.path),void 0===this.pathToImages&&(this.pathToImages=this.path+"images/"),this.initHC||(t.callInitHandler(this),this.initHC=!0),t.applyLang(this.language,this)
var e=this.numberFormatter
e&&(isNaN(e.precision)||(this.precision=e.precision),void 0!==e.thousandsSeparator&&(this.thousandsSeparator=e.thousandsSeparator),void 0!==e.decimalSeparator&&(this.decimalSeparator=e.decimalSeparator)),(e=this.percentFormatter)&&!isNaN(e.precision)&&(this.percentPrecision=e.precision),this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator},this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator},this.destroy(),(e=this.container)?(e.container.innerHTML="",e.width=this.realWidth,e.height=this.realHeight,e.addDefs(this),this.chartDiv.appendChild(e.container)):e=new t.AmDraw(this.chartDiv,this.realWidth,this.realHeight,this),this.container=e,this.extension=".png",this.svgIcons&&t.SVG&&(this.extension=".svg"),this.checkDisplay(),this.checkTransform(this.div),e.chart=this,t.VML||t.SVG?(e.handDrawn=this.handDrawn,e.handDrawScatter=this.handDrawScatter,e.handDrawThickness=this.handDrawThickness,t.remove(this.set),this.set=e.set(),t.remove(this.gridSet),this.gridSet=e.set(),t.remove(this.cursorLineSet),this.cursorLineSet=e.set(),t.remove(this.graphsBehindSet),this.graphsBehindSet=e.set(),t.remove(this.bulletBehindSet),this.bulletBehindSet=e.set(),t.remove(this.columnSet),this.columnSet=e.set(),t.remove(this.graphsSet),this.graphsSet=e.set(),t.remove(this.trendLinesSet),this.trendLinesSet=e.set(),t.remove(this.axesSet),this.axesSet=e.set(),t.remove(this.cursorSet),this.cursorSet=e.set(),t.remove(this.scrollbarsSet),this.scrollbarsSet=e.set(),t.remove(this.bulletSet),this.bulletSet=e.set(),t.remove(this.freeLabelsSet),this.freeLabelsSet=e.set(),t.remove(this.axesLabelsSet),this.axesLabelsSet=e.set(),t.remove(this.balloonsSet),this.balloonsSet=e.set(),t.remove(this.plotBalloonsSet),this.plotBalloonsSet=e.set(),t.remove(this.zoomButtonSet),this.zoomButtonSet=e.set(),t.remove(this.zbSet),this.zbSet=null,t.remove(this.linkSet),this.linkSet=e.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var t=this.div
if(t){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(t){}var e=t.offsetWidth,i=t.offsetHeight
t.clientHeight&&(e=t.clientWidth,i=t.clientHeight),e==this.mw&&i==this.mh||(this.mw=e,this.mh=i,this.measure())}},measure:function(){if(h=this.div){var e=this.chartDiv,i=h.offsetWidth,s=h.offsetHeight,a=this.container
h.clientHeight&&(i=h.clientWidth,s=h.clientHeight)
s=Math.round(s),i=Math.round(i)
var h=Math.round(t.toCoordinate(this.width,i)),r=Math.round(t.toCoordinate(this.height,s));(i!=this.previousWidth||s!=this.previousHeight)&&0<h&&0<r&&(e.style.width=h+"px",e.style.height=r+"px",e.style.padding=0,a&&a.setSize(h,r),this.balloon=t.processObject(this.balloon,t.AmBalloon,this.theme)),this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,h-2,r),this.updateWidth(),this.balloon.chart=this,this.realWidth=h,this.realHeight=r,this.divRealWidth=i,this.divRealHeight=s}},checkDisplay:function(){if(this.autoDisplay&&this.container){var e=t.rect(this.container,10,10),i=e.getBBox()
0===i.width&&0===i.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN),e.remove()}},checkTransform:function(t){if(this.autoTransform&&window.getComputedStyle&&t){if(t.style)if((e=window.getComputedStyle(t,null))&&(e=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform"))&&"none"!==e){var e=(i=e.split("(")[1].split(")")[0].split(","))[0],i=i[1]
e=Math.sqrt(e*e+i*i)
isNaN(e)||(this.cssScale*=e)}t.parentNode&&this.checkTransform(t.parentNode)}},destroy:function(){this.chartDiv.innerHTML="",this.clearTimeOuts(),this.legend&&this.legend.destroy&&this.legend.destroy()},clearTimeOuts:function(){var t,e=this.timeOuts
if(e)for(t=0;t<e.length;t++)clearTimeout(e[t])
this.timeOuts=[]},clear:function(e){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(t){}if(t.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]),this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null,this.clearTimeOuts(),this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv)),e||t.removeChart(this),e=this.div)for(;e.firstChild;)e.removeChild(e.firstChild)
this.legend&&this.legend.destroy&&this.legend.destroy(),this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(e){"auto"==e&&t.isNN&&(e="default"),this.chartDiv.style.cursor=e,this.legendDiv.style.cursor=e},redrawLabels:function(){this.labels=[]
var t,e=this.allLabels
for(this.createLabelsSet(),t=0;t<e.length;t++)this.drawLabel(e[t])},drawLabel:function(e){var i=this
if(i.container&&!1!==e.enabled){var s=(e=t.processObject(e,t.Label,i.theme)).y,a=e.text,h=e.align,r=e.size,n=e.color,o=e.rotation,l=e.alpha,d=e.bold,u=t.toCoordinate(e.x,i.realWidth)
s=t.toCoordinate(s,i.realHeight)
u||(u=0),s||(s=0),void 0===n&&(n=i.color),isNaN(r)&&(r=i.fontSize),h||(h="start"),"left"==h&&(h="start"),"right"==h&&(h="end"),"center"==h&&(h="middle",o?s=i.realHeight-s+s/2:u=i.realWidth/2-u),void 0===l&&(l=1),void 0===o&&(o=0),s+=r/2,(a=t.text(i.container,a,n,i.fontFamily,r,h,d,l)).translate(u,s),void 0!==e.tabIndex&&a.setAttr("tabindex",e.tabIndex),t.setCN(i,a,"label"),e.id&&t.setCN(i,a,"label-"+e.id),0!==o&&a.rotate(o),e.url?(a.setAttr("cursor","pointer"),a.click(function(){t.getURL(e.url,i.urlTarget)})):a.node.style.pointerEvents="none",i.labelsSet.push(a),i.labels.push(a)}},addLabel:function(t,e,i,s,a,h,r,n,o,l){t={x:t,y:e,text:i,align:s,size:a,color:h,alpha:n,rotation:r,bold:o,url:l,enabled:!0},this.container&&this.drawLabel(t),this.allLabels.push(t)},clearLabels:function(){var t,e=this.labels
for(t=e.length-1;0<=t;t--)e[t].remove()
this.labels=[],this.allLabels=[]},updateHeight:function(){var t=this.divRealHeight
if(e=this.legend){var e,i=this.legendDiv.offsetHeight
"top"!=(e=e.position)&&"bottom"!=e||((0>(t-=i)||isNaN(t))&&(t=0),this.chartDiv.style.height=t+"px")}return t},updateWidth:function(){var t=this.divRealWidth,e=this.divRealHeight,i=this.legend
if(i){var s=(h=this.legendDiv).offsetWidth
isNaN(i.width)||(s=i.width),i.ieW&&(s=i.ieW)
var a=h.offsetHeight,h=h.style,r=this.chartDiv.style,n=i.position
"right"!=n&&"left"!=n||void 0!==i.divId||((0>(t-=s)||isNaN(t))&&(t=0),r.width=t+"px",this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,t-2,this.realHeight),"left"==n?(r.left=s+"px",h.left="0px"):(r.left="0px",h.left=t+"px"),e>a&&(h.top=(e-a)/2+"px"))}return t},getTitleHeight:function(){return this.drawTitles(!0),this.titleHeight},addTitle:function(t,e,i,s,a){return isNaN(e)&&(e=this.fontSize+2),t={text:t,size:e,color:i,alpha:s,bold:a,enabled:!0},this.titles.push(t),t},handleWheel:function(t){var e=0
t||(t=window.event),t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),e&&this.handleWheelReal(e,t.shiftKey),t.preventDefault&&t.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove(),this.tmx=this.mouseX,this.tmy=this.mouseY,this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(t){var e=this,i=(new Date).getTime()
if(t)if(t.touches)e.isTouchEvent=!0
else if(!e.isTouchEvent)return!0
if(i-e.touchStartTime>e.touchClickDuration)return!0
setTimeout(function(){e.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var t=this,e=t.chartDiv
document.addEventListener?("ontouchstart"in document.documentElement&&(e.addEventListener("touchstart",function(e){t.handleTouchStart.call(t,e)},!0),e.addEventListener("touchmove",function(e){t.handleMouseMove.call(t,e)},!0),e.addEventListener("touchend",function(e){t.handleTouchEnd.call(t,e)},!0),t.docfn1=function(e){t.handleDocTouchStart.call(t,e)},t.docfn2=function(e){t.handleDocTouchEnd.call(t,e)},document.addEventListener("touchstart",t.docfn1,!0),document.addEventListener("touchend",t.docfn2,!0)),e.addEventListener("mousedown",function(e){t.mouseIsOver=!0,t.handleMouseMove.call(t,e),t.handleMouseDown.call(t,e),t.handleDocTouchStart.call(t,e)},!0),e.addEventListener("mouseover",function(e){t.handleMouseOver.call(t,e)},!0),e.addEventListener("mouseout",function(e){t.handleMouseOut.call(t,e)},!0),e.addEventListener("mouseup",function(e){t.handleDocTouchEnd.call(t,e)},!0)):(e.attachEvent("onmousedown",function(e){t.handleMouseDown.call(t,e)}),e.attachEvent("onmouseover",function(e){t.handleMouseOver.call(t,e)}),e.attachEvent("onmouseout",function(e){t.handleMouseOut.call(t,e)}))},dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),!this.chartRendered&&0<this.divRealWidth&&0<this.divRealHeight&&(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this})),this.skipEvents=!1},validateSize:function(){var t=this
if(t.premeasure(),t.checkDisplay(),t.cssScale=1,t.cssAngle=0,t.checkTransform(t.div),t.divRealWidth!=t.previousWidth||t.divRealHeight!=t.previousHeight){var e=t.legend
if(0<t.realWidth&&0<t.realHeight){if(t.sizeChanged=!0,e){t.legendInitTO&&clearTimeout(t.legendInitTO)
var i=setTimeout(function(){e.invalidateSize()},10)
t.timeOuts.push(i),t.legendInitTO=i}t.marginsUpdated=!1,clearTimeout(t.initTO),i=setTimeout(function(){t.initChart()},10),t.timeOuts.push(i),t.initTO=i}t.renderFix(),e&&e.renderFix&&e.renderFix(),t.positionCred(),clearTimeout(t.resizedTO),t.resizedTO=setTimeout(function(){t.fire({type:"resized",chart:t})},10),t.previousHeight=t.divRealHeight,t.previousWidth=t.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN,this.invalidateSizeReal()},invalidateSizeReal:function(){var t=this
t.marginsUpdated=!1,clearTimeout(t.validateTO)
var e=setTimeout(function(){t.validateSize()},5)
t.timeOuts.push(e),t.validateTO=e},validateData:function(t){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(t))},validateNow:function(t,e){this.initTO&&clearTimeout(this.initTO),t&&(this.dataChanged=!0,this.marginsUpdated=!1),this.skipEvents=e,this.chartRendered=!1
var i=this.legend
i&&i.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,i.invalidateSize&&(i.invalidateSize(),this.validateSize())),this.write(this.div)},showItem:function(t){t.hidden=!1,this.initChart()},hideItem:function(t){t.hidden=!0,this.initChart()},hideBalloon:function(){var t=this
clearTimeout(t.hoverInt),clearTimeout(t.balloonTO),t.hoverInt=setTimeout(function(){t.hideBalloonReal.call(t)},t.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var t=this.balloon
t&&t.hide&&t.hide()},showBalloon:function(t,e,i,s,a){var h=this
clearTimeout(h.balloonTO),clearTimeout(h.hoverInt),h.balloonTO=setTimeout(function(){h.showBalloonReal.call(h,t,e,i,s,a)},1)},showBalloonReal:function(t,e,i,s,a){this.handleMouseMove()
var h=this.balloon
h.enabled&&(h.followCursor(!1),h.changeColor(e),!i||h.fixedPosition?(h.setPosition(s,a),isNaN(s)||isNaN(a)?h.followCursor(!0):h.followCursor(!1)):h.followCursor(!0),t&&h.showBalloon(t))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO),t.resetMouseOver(),this.mouseIsOver=!0},handleMouseOut:function(){var e=this
t.resetMouseOver(),e.outTO&&clearTimeout(e.outTO),e.outTO=setTimeout(function(){e.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(t){var e,i,s,a
if(t||(t=window.event),this.mouse2Y=this.mouse2X=NaN,t){if(t.touches){var h=t.touches.item(1)
if(h&&this.panEventsEnabled&&this.boundingRect&&(s=h.clientX-this.boundingRect.left,a=h.clientY-this.boundingRect.top),!(t=t.touches.item(0)))return}else this.wasTouched=!1
this.boundingRect&&t.clientX&&(e=t.clientX-this.boundingRect.left,i=t.clientY-this.boundingRect.top),isNaN(s)?this.mouseX=e:(this.mouseX=Math.min(e,s),this.mouse2X=Math.max(e,s)),isNaN(a)?this.mouseY=i:(this.mouseY=Math.min(i,a),this.mouse2Y=Math.max(i,a)),this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(t){this.hideBalloonReal(),t&&(t.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||(this.handleMouseMove(t),this.handleMouseDown(t))},handleTouchEnd:function(e){this.wasTouched=!0,this.handleMouseMove(e),t.resetMouseOver(),this.handleReleaseOutside(e)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(e){t.resetMouseOver(),this.mouseIsOver=!0,e&&e.preventDefault&&(this.panEventsEnabled?e.preventDefault():e.touches||e.preventDefault())},handleKeyUp:function(t){},addLegend:function(e,i){var s
return(e=t.processObject(e,t.AmLegend,this.theme)).divId=i,e.ieW=0,s="object"!=typeof i&&i?document.getElementById(i):i,this.legend=e,e.chart=this,s?(e.div=s,e.position="outside",e.autoMargins=!1):e.div=this.legendDiv,e},removeLegend:function(){this.legend=void 0,this.previousWidth=0,this.legendDiv.innerHTML=""},handleResize:function(){(t.isPercents(this.width)||t.isPercents(this.height))&&this.invalidateSizeReal(),this.renderFix()},renderFix:function(){if(!t.VML){var e=this.container
e&&e.renderFix()}},getSVG:function(){if(t.hasSVG)return this.container},animate:function(e,i,s,a,h,r,n){return e["an_"+i]&&t.removeFromArray(this.animations,e["an_"+i]),s={obj:e,frame:0,attribute:i,from:s,to:a,time:h,effect:r,suffix:n},e["an_"+i]=s,this.animations.push(s),s},setLegendData:function(t){var e=this.legend
e&&e.setData(t)},stopAnim:function(e){t.removeFromArray(this.animations,e)},updateAnimations:function(){var e
if(this.container&&this.container.update(),this.animations)for(e=this.animations.length-1;0<=e;e--){var i=this.animations[e],s=t.updateRate*i.time,a=i.frame+1,h=i.obj,r=i.attribute
if(a<=s){i.frame++
var n=Number(i.from),o=Number(i.to)-n
s=t[i.effect](0,a,n,o,s)
0===o?(this.animations.splice(e,1),h.node.style[r]=Number(i.to)+i.suffix):h.node.style[r]=s+i.suffix}else h.node.style[r]=Number(i.to)+i.suffix,h.animationFinished=!0,this.animations.splice(e,1)}},update:function(){this.updateAnimations()
var t=this.animatable
if(0<t.length){for(var e=!0,i=t.length-1;0<=i;i--){var s=t[i]
s&&(s.animationFinished?t.splice(i,1):e=!1)}e&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(t){return!0}},brr:function(){if(!this.hideCredits){var t,e="amcharts.com"
if(2<=(i=window.location.hostname.split(".")).length&&(t=i[i.length-2]+"."+i[i.length-1]),this.amLink&&(i=this.amLink.parentNode)&&i.removeChild(this.amLink),t!=e||!0===this.inIframe()){t=e="http://www."+e
var i="JavaScript charts",s="JS chart by amCharts"
"ammap"==this.product&&(t=e+"/javascript-maps/",i="Interactive JavaScript maps",s="JS map by amCharts"),e=document.createElement("a"),s=document.createTextNode(s),e.setAttribute("href",t),e.setAttribute("title",i),this.urlTarget&&e.setAttribute("target",this.urlTarget),e.appendChild(s),this.chartDiv.appendChild(e),this.amLink=e,(e=e.style).position="absolute",e.textDecoration="none",e.color=this.color,e.fontFamily=this.fontFamily,e.fontSize="11px",e.opacity=.7,e.display="block",this.positionCred()}}},positionCred:function(){if(s=this.amLink){var t=this.creditsPosition,e=s.style,i=s.offsetWidth,s=s.offsetHeight,a=0,h=0,r=this.realWidth,n=this.realHeight
"serial"!=(o=this.type)&&"xy"!=o&&"gantt"!=o||(a=this.marginLeftReal,h=this.marginTopReal,r=a+this.plotAreaWidth,n=h+this.plotAreaHeight)
var o=5+a,l=h+5
"bottom-left"==t&&(o=5+a,l=n-s-3),"bottom-right"==t&&(o=r-i-5,l=n-s-3),"top-right"==t&&(o=r-i-5,l=h+5),e.left=o+"px",e.top=l+"px"}}}),t.Slice=t.Class({construct:function(){}}),t.SerialDataItem=t.Class({construct:function(){}}),t.GraphDataItem=t.Class({construct:function(){}}),t.Guide=t.Class({construct:function(e){this.cname="Guide",t.applyTheme(this,e,this.cname)}}),t.Title=t.Class({construct:function(e){this.cname="Title",t.applyTheme(this,e,this.cname)}}),t.Label=t.Class({construct:function(e){this.cname="Label",t.applyTheme(this,e,this.cname)}})}(),function(){var t=window.AmCharts
t.AmGraph=t.Class({construct:function(e){this.cname="AmGraph",this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph"),this.type="line",this.stackable=!0,this.columnCount=1,this.columnIndex=0,this.centerCustomBullets=this.showBalloon=!0,this.maxBulletSize=50,this.minBulletSize=4,this.balloonText="[[value]]",this.hidden=this.scrollbar=this.animationPlayed=!1,this.pointPosition="middle",this.depthCount=1,this.includeInMinMax=!0,this.negativeBase=0,this.visibleInLegend=!0,this.showAllValueLabels=!1,this.showBulletsAt=this.showBalloonAt="close",this.lineThickness=1,this.dashLength=0,this.connect=!0,this.lineAlpha=1,this.bullet="none",this.bulletBorderThickness=2,this.bulletBorderAlpha=0,this.bulletAlpha=1,this.bulletSize=8,this.cornerRadiusTop=this.hideBulletsCount=this.bulletOffset=0,this.cursorBulletAlpha=1,this.gradientOrientation="vertical"
this.dy=this.dx=0,this.periodValue="",this.clustered=!0,this.periodSpan=1,this.accessibleLabel="[[title]] [[category]] [[value]]",this.accessibleSkipText="Press enter to skip [[title]]",this.y=this.x=0,this.switchable=!0,this.minDistance=.8,this.tcc=1,this.labelRotation=0,this.labelAnchor="auto",this.labelOffset=3,this.bcn="graph-",this.dateFormat="MMM DD, YYYY",this.noRounding=!0,t.applyTheme(this,e,this.cname)},init:function(){this.createBalloon()},draw:function(){var e=this.chart
e.isRolledOverBullet=!1
var i=e.type
if(e.drawGraphs){isNaN(this.precision)||(this.numberFormatter?this.numberFormatter.precision=this.precision:this.numberFormatter={precision:this.precision,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator})
var s=e.container
this.container=s,this.destroy()
var a=s.set()
this.set=a,a.translate(this.x,this.y)
var h=s.set()
this.bulletSet=h,h.translate(this.x,this.y),this.behindColumns?(e.graphsBehindSet.push(a),e.bulletBehindSet.push(h)):(e.graphsSet.push(a),e.bulletSet.push(h))
var r=this.bulletAxis
t.isString(r)&&(this.bulletAxis=e.getValueAxisById(r)),s=s.set(),t.remove(this.columnsSet),this.columnsSet=s,t.setCN(e,a,"graph-"+this.type),t.setCN(e,a,"graph-"+this.id),t.setCN(e,h,"graph-"+this.type),t.setCN(e,h,"graph-"+this.id),this.columnsArray=[],this.ownColumns=[],this.allBullets=[],this.animationArray=[],(h=this.labelPosition)||(r=this.valueAxis.stackType,h="top","column"==this.type&&(e.rotate&&(h="right"),"100%"==r||"regular"==r)&&(h="middle"),this.labelPosition=h),t.ifArray(this.data)&&(e=!1,"xy"==i?this.xAxis.axisCreated&&this.yAxis.axisCreated&&(e=!0):this.valueAxis.axisCreated&&(e=!0),!this.hidden&&e&&this.createGraph()),a.push(s)}},createGraph:function(){var e=this,i=e.chart
e.startAlpha=i.startAlpha,e.seqAn=i.sequencedAnimation,e.baseCoord=e.valueAxis.baseCoord,void 0===e.fillAlphas&&(e.fillAlphas=0),e.bulletColorR=e.bulletColor,void 0===e.bulletColorR&&(e.bulletColorR=e.lineColorR,e.bulletColorNegative=e.negativeLineColor),void 0===e.bulletAlpha&&(e.bulletAlpha=e.lineAlpha),("step"==s||t.VML)&&(e.noRounding=!1)
var s=i.type
if("gantt"==s&&(s="serial"),clearTimeout(e.playedTO),!isNaN(e.valueAxis.min)&&!isNaN(e.valueAxis.max)){switch(s){case"serial":e.categoryAxis&&(e.createSerialGraph(),"candlestick"==e.type&&1>e.valueAxis.minMaxMultiplier&&e.positiveClip(e.set))
break
case"radar":e.createRadarGraph()
break
case"xy":e.createXYGraph()}e.playedTO=setTimeout(function(){e.setAnimationPlayed.call(e)},500*e.chart.startDuration)}},setAnimationPlayed:function(){this.animationPlayed=!0},createXYGraph:function(){var t,e=[],i=[],s=this.xAxis,a=this.yAxis
for(this.pmh=a.height,this.pmw=s.width,this.pmy=this.pmx=0,t=this.start;t<=this.end;t++){var h=this.data[t].axes[s.id].graphs[this.id],r=(o=h.values).x,n=o.y,o=s.getCoordinate(r,this.noRounding),l=a.getCoordinate(n,this.noRounding)
if(!isNaN(r)&&!isNaN(n)&&(e.push(o),i.push(l),h.x=o,h.y=l,r=this.createBullet(h,o,l,t),n=this.labelText)){n=this.createLabel(h,n)
var d=0
r&&(d=r.size),this.positionLabel(h,o,l,n,d)}}this.drawLineGraph(e,i),this.launchAnimation()},createRadarGraph:function(){var t,e,i,s,a,h=this.valueAxis.stackType,r=[],n=[],o=[],l=[]
for(a=this.start;a<=this.end;a++){var d,u,c=this.data[a].axes[this.valueAxis.id].graphs[this.id]
if("none"==h||"3d"==h?d=c.values.value:(d=c.values.close,u=c.values.open),isNaN(d))this.connect||(this.drawLineGraph(r,n,o,l),r=[],n=[],o=[],l=[])
else{var p=(p=this.valueAxis.getCoordinate(d,this.noRounding)-this.height)*this.valueAxis.rMultiplier,m=-360/(this.end-this.start+1)*a
if("middle"==this.valueAxis.pointPosition&&(m-=180/(this.end-this.start+1)),d=p*Math.sin(m/180*Math.PI),p*=Math.cos(m/180*Math.PI),r.push(d),n.push(p),!isNaN(u)){var f,g=(f=(f=this.valueAxis.getCoordinate(u,this.noRounding)-this.height)*this.valueAxis.rMultiplier)*Math.sin(m/180*Math.PI)
m=f*Math.cos(m/180*Math.PI)
o.push(g),l.push(m),isNaN(i)&&(i=g),isNaN(s)&&(s=m)}m=this.createBullet(c,d,p,a),c.x=d,c.y=p,(g=this.labelText)&&(g=this.createLabel(c,g),f=0,m&&(f=m.size),this.positionLabel(c,d,p,g,f)),isNaN(t)&&(t=d),isNaN(e)&&(e=p)}}r.push(t),n.push(e),isNaN(i)||(o.push(i),l.push(s)),this.drawLineGraph(r,n,o,l),this.launchAnimation()},positionLabel:function(t,e,i,s,a){if(s){var h=this.chart,r=this.valueAxis,n="middle",o=!1,l=this.labelPosition,d=s.getBBox(),u=this.chart.rotate,c=t.isNegative
switch(void 0===(p=this.fontSize)&&(p=this.chart.fontSize),i-=d.height/2-p/2-1,void 0!==t.labelIsNegative&&(c=t.labelIsNegative),l){case"right":l=u&&c?"left":"right"
break
case"top":l=u?"top":c?"bottom":"top"
break
case"bottom":l=u?"bottom":c?"top":"bottom"
break
case"left":l=u&&c?"right":"left"}var p,m=0,f=0;(p=t.columnGraphics)&&(m=p.x,f=p.y)
var g=this.labelOffset
switch(l){case"right":n="start",e+=a/2+g
break
case"top":i=r.reversed?i+(a/2+d.height/2+g):i-(a/2+d.height/2+g)
break
case"bottom":i=r.reversed?i-(a/2+d.height/2+g):i+(a/2+d.height/2+g)
break
case"left":n="end",e-=a/2+g
break
case"inside":"column"==this.type&&(o=!0,u?c?(n="end",e=m-3-g):(n="start",e=m+3+g):i=c?f+7+g:f-10-g)
break
case"middle":"column"==this.type&&(o=!0,u?e-=(e-m)/2+g-3:i-=(i-f)/2+g-3)}return"auto"!=this.labelAnchor&&(n=this.labelAnchor),s.attr({"text-anchor":n}),this.labelRotation&&s.rotate(this.labelRotation),s.translate(e,i),!this.showAllValueLabels&&p&&o&&((d=s.getBBox()).height>t.columnHeight||d.width>t.columnWidth)&&(s.remove(),s=null),s&&"radar"!=h.type&&(u?((0>i||i>this.height)&&(s.remove(),s=null),!this.showAllValueLabels&&s&&(0>e||e>this.width)&&(s.remove(),s=null)):((0>e||e>this.width)&&(s.remove(),s=null),!this.showAllValueLabels&&s&&(0>i||i>this.height)&&(s.remove(),s=null))),s&&this.allBullets.push(s),s}},getGradRotation:function(){var t=270
return"horizontal"==this.gradientOrientation&&(t=0),this.gradientRotation=t},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0
var e=this.chart,i=this.id,s=this.index,a=this.data,h=this.chart.container,r=this.valueAxis,n=this.type,o=this.columnWidthReal,l=this.showBulletsAt
isNaN(this.columnWidth)||(o=this.columnWidth),isNaN(o)&&(o=.8)
var d,u,c,p,m,f=this.useNegativeColorIfDown,g=this.width,v=this.height,b=this.y,x=this.rotate,N=this.columnCount,C=t.toCoordinate(this.cornerRadiusTop,o/2),y=this.connect,w=[],M=[],A=this.chart.graphs.length,S=this.dx/this.tcc,D=this.dy/this.tcc,L=r.stackType,T=this.start,k=this.end,B=this.scrollbar,R="graph-column-"
B&&(R="scrollbar-graph-column-")
var O,E=this.categoryAxis,I=this.baseCoord,G=this.negativeBase,F=this.columnIndex,z=this.lineThickness,P=this.lineAlpha,W=this.lineColorR,Y=this.dashLength,H=this.set,V=this.getGradRotation(),X=this.chart.columnSpacing,U=E.cellWidth,j=(U*o-N)/N
X>j&&(X=j)
var Z,q,K,_=v,J=g,Q=0,$=0,tt=0,et=0,it=0,st=0,at=this.fillColorsR,ht=this.negativeFillColors,rt=this.negativeLineColor,nt=this.fillAlphas,ot=this.negativeFillAlphas
"object"==typeof nt&&(nt=nt[0]),"object"==typeof ot&&(ot=ot[0])
var lt=this.noRounding
"step"==n&&(lt=!1)
var dt=r.getCoordinate(r.min)
if(r.logarithmic&&(dt=r.getCoordinate(r.minReal)),this.minCoord=dt,this.resetBullet&&(this.bullet="none"),!(B||"line"!=n&&"smoothedLine"!=n&&"step"!=n||(1==a.length&&"step"!=n&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!ht&&void 0==rt||f))){var ut=G
ut>r.max&&(ut=r.max),ut<r.min&&(ut=r.min),r.logarithmic&&(ut=r.minReal)
var ct=r.getCoordinate(ut)+.5,pt=r.getCoordinate(r.max)
x?(_=v,J=Math.abs(pt-ct),tt=v,et=Math.abs(dt-ct),st=$=0,r.reversed?(Q=0,it=ct):(Q=ct,it=0)):(J=g,_=Math.abs(pt-ct),et=g,tt=Math.abs(dt-ct),it=Q=0,r.reversed?(st=b,$=ct):st=ct)}var mt=Math.round
this.pmx=mt(Q),this.pmy=mt($),this.pmh=mt(_),this.pmw=mt(J),this.nmx=mt(it),this.nmy=mt(st),this.nmh=mt(tt),this.nmw=mt(et),t.isModern||(this.nmy=this.nmx=0,this.nmh=this.height),this.clustered||(N=1),1>(o="column"==n?(U*o-X*(N-1))/N:U*o)&&(o=1)
var ft,gt=this.fixedColumnWidth
if(isNaN(gt)||(o=gt),"line"==n||"step"==n||"smoothedLine"==n){if(0<T){for(ft=T-1;-1<ft;ft--)if(Z=a[ft],q=Z.axes[r.id].graphs[i],K=q.values.value,!isNaN(K)){T=ft
break}if(this.lineColorField)for(ft=T;-1<ft;ft--)if(Z=a[ft],q=Z.axes[r.id].graphs[i],q.lineColor){this.lineColorSwitched=q.lineColor,void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched)
break}if(this.fillColorsField)for(ft=T;-1<ft;ft--)if(Z=a[ft],q=Z.axes[r.id].graphs[i],q.fillColors){this.fillColorsSwitched=q.fillColors
break}if(this.dashLengthField)for(ft=T;-1<ft;ft--)if(Z=a[ft],q=Z.axes[r.id].graphs[i],!isNaN(q.dashLength)){this.dashLengthSwitched=q.dashLength
break}}if(k<a.length-1)for(ft=k+1;ft<a.length;ft++)if(Z=a[ft],q=Z.axes[r.id].graphs[i],K=q.values.value,!isNaN(K)){k=ft
break}}k<a.length-1&&k++
var vt=[],bt=[],xt=!1
"line"!=n&&"step"!=n&&"smoothedLine"!=n||(this.stackable&&"regular"==L||"100%"==L||this.fillToGraph)&&(xt=!0)
var Nt=this.noStepRisers,Ct=-1e3,yt=-1e3,wt=this.minDistance,Mt=!0,At=!1
for(ft=T;ft<=k;ft++){(q=(Z=a[ft]).axes[r.id].graphs[i]).index=ft
var St,Dt=NaN
if(f&&void 0==this.openField)for(var Lt=ft+1;Lt<a.length&&(!a[Lt]||!(St=a[ft+1].axes[r.id].graphs[i])||!St.values||(Dt=St.values.value,isNaN(Dt)));Lt++);var Tt,kt,Bt,Rt,Ot,Et,It=NaN,Gt=NaN,Ft=NaN,zt=NaN,Pt=NaN,Wt=NaN,Yt=NaN,Ht=NaN,Vt=NaN,Xt=NaN,Ut=NaN,jt=NaN,Zt=NaN,qt=NaN,Kt=NaN,_t=NaN,Jt=NaN,Qt=void 0,$t=at,te=nt,ee=W,ie=this.proCandlesticks,se=this.topRadius,ae=v-1,he=g-1,re=this.pattern
void 0!=q.pattern&&(re=q.pattern),isNaN(q.alpha)||(te=q.alpha),isNaN(q.dashLength)||(Y=q.dashLength)
var ne=q.values
if(r.recalculateToPercents&&(ne=q.percents),"none"==L&&(F=isNaN(q.columnIndex)?this.columnIndex:q.columnIndex),ne){if(qt=this.stackable&&"none"!=L&&"3d"!=L?ne.close:ne.value,"candlestick"!=n&&"ohlc"!=n||(qt=ne.close,_t=ne.low,Yt=r.getCoordinate(_t),Kt=ne.high,Vt=r.getCoordinate(Kt)),Jt=ne.open,Ft=r.getCoordinate(qt,lt),isNaN(Jt)||(Pt=r.getCoordinate(Jt,lt),f&&"regular"!=L&&"100%"!=L&&(Dt=Jt,Jt=Pt=NaN)),f&&(void 0==this.openField?St&&(St.isNegative=Dt<qt,isNaN(Dt)&&(q.isNegative=!Mt)):q.isNegative=Dt>qt),!B)switch(this.showBalloonAt){case"close":q.y=Ft
break
case"open":q.y=Pt
break
case"high":q.y=Vt
break
case"low":q.y=Yt}It=Z.x[E.id]
var oe=this.periodSpan-1
"step"!=n||isNaN(Z.cellWidth)||(U=Z.cellWidth)
var le=Math.floor(U/2)+Math.floor(oe*U/2),de=le
if("left"==this.stepDirection&&(It-=(2*U+oe*U)/2),"center"==this.stepDirection&&(It-=U/2),"start"==this.pointPosition&&(It-=U/2+Math.floor(oe*U/2),le=0,de=Math.floor(U)+Math.floor(oe*U)),"end"==this.pointPosition&&(It+=U/2+Math.floor(oe*U/2),le=Math.floor(U)+Math.floor(oe*U),de=0),Nt){var ue=this.columnWidth
isNaN(ue)||(le*=ue,de*=ue)}B||(q.x=It),-1e5>It&&(It=-1e5),It>g+1e5&&(It=g+1e5),x?(Gt=Ft,zt=Pt,Pt=Ft=It,isNaN(Jt)&&!this.fillToGraph&&(zt=I),Wt=Yt,Ht=Vt):(zt=Gt=It,isNaN(Jt)&&!this.fillToGraph&&(Pt=I)),(!ie&&qt<Jt||ie&&qt<O)&&(q.isNegative=!0,ht&&($t=ht),ot&&(te=ot),void 0!=rt&&(ee=rt)),At=!1,isNaN(qt)||(f?qt>Dt?(Mt&&(At=!0),Mt=!1):(Mt||(At=!0),Mt=!0):q.isNegative=qt<G,O=qt)
var ce=!1
switch(B&&e.chartScrollbar.ignoreCustomColors&&(ce=!0),ce||(void 0!=q.color&&($t=q.color),q.fillColors&&($t=q.fillColors)),Ft=t.fitToBounds(Ft,-3e4,3e4),n){case"line":isNaN(qt)?y||(this.drawLineGraph(w,M,vt,bt),w=[],M=[],vt=[],bt=[]):((Math.abs(Gt-Ct)>=wt||Math.abs(Ft-yt)>=wt)&&(w.push(Gt),M.push(Ft),Ct=Gt,yt=Ft),Xt=Gt,Ut=Ft,jt=Gt,Zt=Ft,!xt||isNaN(Pt)||isNaN(zt)||(vt.push(zt),bt.push(Pt)),(At||void 0!=q.lineColor&&q.lineColor!=this.lineColorSwitched||void 0!=q.fillColors&&q.fillColors!=this.fillColorsSwitched||!isNaN(q.dashLength))&&(this.drawLineGraph(w,M,vt,bt),w=[Gt],M=[Ft],vt=[],bt=[],!xt||isNaN(Pt)||isNaN(zt)||(vt.push(zt),bt.push(Pt)),f?(Mt?(this.lineColorSwitched=W,this.fillColorsSwitched=at):(this.lineColorSwitched=rt,this.fillColorsSwitched=ht),void 0===this.bulletColor&&(this.bulletColorSwitched=W)):(this.lineColorSwitched=q.lineColor,this.fillColorsSwitched=q.fillColors,void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched)),this.dashLengthSwitched=q.dashLength),q.gap&&(this.drawLineGraph(w,M,vt,bt),w=[],M=[],vt=[],bt=[],yt=Ct=-1e3))
break
case"smoothedLine":isNaN(qt)?y||(this.drawSmoothedGraph(w,M,vt,bt),w=[],M=[],vt=[],bt=[]):((Math.abs(Gt-Ct)>=wt||Math.abs(Ft-yt)>=wt)&&(w.push(Gt),M.push(Ft),Ct=Gt,yt=Ft),Xt=Gt,Ut=Ft,jt=Gt,Zt=Ft,!xt||isNaN(Pt)||isNaN(zt)||(vt.push(zt),bt.push(Pt)),(At||void 0!=q.lineColor&&q.lineColor!=this.lineColorSwitched||void 0!=q.fillColors&&q.fillColors!=this.fillColorsSwitched||!isNaN(q.dashLength))&&(this.drawSmoothedGraph(w,M,vt,bt),w=[Gt],M=[Ft],vt=[],bt=[],!xt||isNaN(Pt)||isNaN(zt)||(vt.push(zt),bt.push(Pt)),this.lineColorSwitched=q.lineColor,this.fillColorsSwitched=q.fillColors,this.dashLengthSwitched=q.dashLength),q.gap&&(this.drawSmoothedGraph(w,M,vt,bt),w=[],M=[],vt=[],bt=[]))
break
case"step":if(isNaN(qt))y||((1>=this.periodSpan||1<this.periodSpan&&Gt-d>le+de)&&(d=u=NaN),this.drawLineGraph(w,M,vt,bt),w=[],M=[],vt=[],bt=[])
else{if(x?(isNaN(d)||(w.push(d),M.push(Ft-le)),M.push(Ft-le),w.push(Gt),M.push(Ft+de),w.push(Gt),!xt||isNaN(Pt)||isNaN(zt)||(isNaN(c)||(vt.push(c),bt.push(Pt-le)),vt.push(zt),bt.push(Pt-le),vt.push(zt),bt.push(Pt+de))):(isNaN(u)||(M.push(u),w.push(Gt-le)),w.push(Gt-le),M.push(Ft),w.push(Gt+de),M.push(Ft),!xt||isNaN(Pt)||isNaN(zt)||(isNaN(p)||(vt.push(zt-le),bt.push(p)),vt.push(zt-le),bt.push(Pt),vt.push(zt+de),bt.push(Pt))),d=Gt,u=Ft,c=zt,p=Pt,Xt=Gt,Ut=Ft,jt=Gt,Zt=Ft,At||void 0!=q.lineColor||void 0!=q.fillColors||!isNaN(q.dashLength)){var pe=w[w.length-2],me=M[M.length-2]
w.pop(),M.pop(),vt.pop(),bt.pop(),this.drawLineGraph(w,M,vt,bt),w=[pe],M=[me],vt=[],bt=[],xt&&(vt=[pe,pe+le+de],bt=[p,p]),x?(M.push(Ft+de),w.push(Gt)):(w.push(Gt+de),M.push(Ft)),this.lineColorSwitched=q.lineColor,this.fillColorsSwitched=q.fillColors,this.dashLengthSwitched=q.dashLength,f&&(Mt?(this.lineColorSwitched=W,this.fillColorsSwitched=at):(this.lineColorSwitched=rt,this.fillColorsSwitched=ht))}(Nt||q.gap)&&(d=u=NaN,q.gap&&2>=w.length||this.drawLineGraph(w,M,vt,bt),w=[],M=[],vt=[],bt=[])}break
case"column":if(Ot=ee,void 0!=q.lineColor&&(Ot=q.lineColor),!isNaN(qt)){f||(q.isNegative=qt<G),q.isNegative&&(ht&&($t=ht),void 0!=rt&&(Ot=rt))
var fe,ge=r.min,ve=r.max,be=Jt
if(isNaN(be)&&(be=G),!(qt<ge&&be<ge||qt>ve&&be>ve))if(x)"3d"==L?(kt=Ft-(N/2-this.depthCount+1)*(o+X)+X/2+D*F,Tt=zt+S*F,fe=F):(kt=Math.floor(Ft-(N/2-F)*(o+X)+X/2),Tt=zt,fe=0),Xt=Gt,Ut=kt+o/2,jt=Gt,Zt=kt+o/2,kt+(Bt=o)>v+fe*D&&(Bt=v-kt+fe*D),kt<fe*D&&(Bt+=kt,kt=fe*D),Rt=Gt-zt,Rt+=Tt-(Tt=t.fitToBounds(Tt,0,g)),Rt=t.fitToBounds(Rt,-Tt,g-Tt+S*F),q.labelIsNegative=0>Rt,0===Rt&&1/qt==-1/0&&(q.labelIsNegative=!0),isNaN(Z.percentWidthValue)||(Ut=(kt=It-(Bt=this.height*Z.percentWidthValue/100)/2)+Bt/2),Bt=t.roundTo(Bt,2),Rt=t.roundTo(Rt,2),kt<v&&0<Bt&&(Qt=new t.Cuboid(h,Rt,Bt,S-e.d3x,D-e.d3y,$t,te,z,Ot,P,V,C,x,Y,re,se,R),q.columnWidth=Math.abs(Rt),q.columnHeight=Math.abs(Bt))
else"3d"==L?(Tt=Gt-(N/2-this.depthCount+1)*(o+X)+X/2+S*F,kt=Pt+D*F,fe=F):(Tt=Gt-(N/2-F)*(o+X)+X/2,kt=Pt,fe=0),Xt=Tt+o/2,Ut=Ft,jt=Tt+o/2,Zt=Ft,Tt+(Bt=o)>g+fe*S&&(Bt=g-Tt+fe*S),Tt<fe*S&&(Bt+=Tt-fe*S,Tt=fe*S),Rt=Ft-Pt,q.labelIsNegative=0<Rt,0===Rt&&1/qt!=1/Math.abs(qt)&&(q.labelIsNegative=!0),Rt+=kt-(kt=t.fitToBounds(kt,this.dy,v)),Rt=t.fitToBounds(Rt,D*fe-kt,v-kt),isNaN(Z.percentWidthValue)||(Xt=(Tt=It-(Bt=this.width*Z.percentWidthValue/100)/2)+Bt/2),Bt=t.roundTo(Bt,2),Rt=t.roundTo(Rt,2),Tt<g+F*S&&0<Bt&&(this.showOnAxis&&(kt-=D/2),Qt=new t.Cuboid(h,Bt,Rt,S-e.d3x,D-e.d3y,$t,te,z,Ot,this.lineAlpha,V,C,x,Y,re,se,R),q.columnHeight=Math.abs(Rt),q.columnWidth=Math.abs(Bt))
Qt&&(Et=Qt.set,t.setCN(e,Qt.set,"graph-"+this.type),t.setCN(e,Qt.set,"graph-"+this.id),q.className&&t.setCN(e,Qt.set,q.className,!0),q.columnGraphics=Et,Tt=t.roundTo(Tt,2),kt=t.roundTo(kt,2),Et.translate(Tt,kt),(q.url||this.showHandOnHover)&&Et.setAttr("cursor","pointer"),B||("none"==L&&(m=x?(this.end+1-ft)*A-s:A*ft+s),"3d"==L&&(x?(m=(this.end+1-ft)*A-s-1e3*this.depthCount,Xt+=S*F,jt+=S*F,q.y+=S*F):(m=(A-s)*(ft+1)+1e3*this.depthCount,Ut+=D*F,Zt+=D*F,q.y+=D*F)),"regular"!=L&&"100%"!=L||(m=x?0<ne.value?(this.end+1-ft)*A+s+1e3*this.depthCount:(this.end+1-ft)*A-s+1e3*this.depthCount:0<ne.value?A*ft+s:A*ft-s),this.columnsArray.push({column:Qt,depth:m}),q.x=x?kt+Bt/2:Tt+Bt/2,this.ownColumns.push(Qt),this.animateColumns(Qt,ft,Gt,zt,Ft,Pt),this.addListeners(Et,q),void 0!==this.tabIndex&&Et.setAttr("tabindex",this.tabIndex)),this.columnsSet.push(Et))}break
case"candlestick":if(!isNaN(Jt)&&!isNaN(qt)){var xe,Ne
if(Ot=ee,void 0!=q.lineColor&&(Ot=q.lineColor),Xt=Gt,Zt=Ut=Ft,jt=Gt,x){if("open"==l&&(jt=zt),"high"==l&&(jt=Ht),"low"==l&&(jt=Wt),Gt=t.fitToBounds(Gt,0,he),zt=t.fitToBounds(zt,0,he),Wt=t.fitToBounds(Wt,0,he),Ht=t.fitToBounds(Ht,0,he),0===Gt&&0===zt&&0===Wt&&0===Ht)continue
if(Gt==he&&zt==he&&Wt==he&&Ht==he)continue
var Ce,ye
if(Tt=zt,(kt=Ft-o/2)+(Bt=o)>v&&(Bt=v-kt),0>kt&&(Bt+=kt,kt=0),kt<v&&0<Bt)qt>Jt?(Ce=[Gt,Ht],ye=[zt,Wt]):(Ce=[zt,Ht],ye=[Gt,Wt]),!isNaN(Ht)&&!isNaN(Wt)&&Ft<v&&0<Ft&&(xe=t.line(h,Ce,[Ft,Ft],Ot,P,z),Ne=t.line(h,ye,[Ft,Ft],Ot,P,z)),Rt=Gt-zt,Qt=new t.Cuboid(h,Rt,Bt,S,D,$t,nt,z,Ot,P,V,C,x,Y,re,se,R)}else{if("open"==l&&(Zt=Pt),"high"==l&&(Zt=Vt),"low"==l&&(Zt=Yt),Ft=t.fitToBounds(Ft,0,ae),Pt=t.fitToBounds(Pt,0,ae),Yt=t.fitToBounds(Yt,0,ae),Vt=t.fitToBounds(Vt,0,ae),0===Ft&&0===Pt&&0===Yt&&0===Vt)continue
if(Ft==ae&&Pt==ae&&Yt==ae&&Vt==ae)continue
if(kt=Pt+z/2,(Tt=Gt-o/2)+(Bt=o)>g&&(Bt=g-Tt),0>Tt&&(Bt+=Tt,Tt=0),Rt=Ft-Pt,Tt<g&&0<Bt){ie&&qt>=Jt&&(te=0)
var we,Me
Qt=new t.Cuboid(h,Bt,Rt,S,D,$t,te,z,Ot,P,V,C,x,Y,re,se,R)
qt>Jt?(we=[Ft,Vt],Me=[Pt,Yt]):(we=[Pt,Vt],Me=[Ft,Yt]),!isNaN(Vt)&&!isNaN(Yt)&&Gt<g&&0<Gt&&(xe=t.line(h,[Gt,Gt],we,Ot,P,z),Ne=t.line(h,[Gt,Gt],Me,Ot,P,z),t.setCN(e,xe,this.bcn+"line-high"),q.className&&t.setCN(e,xe,q.className,!0),t.setCN(e,Ne,this.bcn+"line-low"),q.className&&t.setCN(e,Ne,q.className,!0))}}Qt&&(Et=Qt.set,q.columnGraphics=Et,H.push(Et),Et.translate(Tt,kt-z/2),(q.url||this.showHandOnHover)&&Et.setAttr("cursor","pointer"),xe&&(H.push(xe),H.push(Ne)),B||(q.x=x?kt+Bt/2:Tt+Bt/2,this.animateColumns(Qt,ft,Gt,zt,Ft,Pt),this.addListeners(Et,q),void 0!==this.tabIndex&&Et.setAttr("tabindex",this.tabIndex)))}break
case"ohlc":if(!(isNaN(Jt)||isNaN(Kt)||isNaN(_t)||isNaN(qt))){var Ae,Se,De,Le=h.set()
if(H.push(Le),qt<Jt&&(q.isNegative=!0,void 0!=rt&&(ee=rt)),void 0!=q.lineColor&&(ee=q.lineColor),x){if(Zt=Ft,jt=Gt,"open"==l&&(jt=zt),"high"==l&&(jt=Ht),"low"==l&&(jt=Wt),Wt=t.fitToBounds(Wt,0,he),Ht=t.fitToBounds(Ht,0,he),0===Gt&&0===zt&&0===Wt&&0===Ht)continue
if(Gt==he&&zt==he&&Wt==he&&Ht==he)continue
var Te=Ft-o/2,ke=(Te=t.fitToBounds(Te,0,v),t.fitToBounds(Ft,0,v)),Be=Ft+o/2
Be=t.fitToBounds(Be,0,v)
0<=zt&&zt<=he&&(Se=t.line(h,[zt,zt],[Te,ke],ee,P,z,Y)),0<Ft&&Ft<v&&(Ae=t.line(h,[Wt,Ht],[Ft,Ft],ee,P,z,Y)),0<=Gt&&Gt<=he&&(De=t.line(h,[Gt,Gt],[ke,Be],ee,P,z,Y))}else{Zt=Ft,"open"==l&&(Zt=Pt),"high"==l&&(Zt=Vt),"low"==l&&(Zt=Yt)
jt=Gt,Yt=t.fitToBounds(Yt,0,ae),Vt=t.fitToBounds(Vt,0,ae)
var Re=Gt-o/2,Oe=(Re=t.fitToBounds(Re,0,g),t.fitToBounds(Gt,0,g)),Ee=Gt+o/2
Ee=t.fitToBounds(Ee,0,g)
0<=Pt&&Pt<=ae&&(Se=t.line(h,[Re,Oe],[Pt,Pt],ee,P,z,Y)),0<Gt&&Gt<g&&(Ae=t.line(h,[Gt,Gt],[Yt,Vt],ee,P,z,Y)),0<=Ft&&Ft<=ae&&(De=t.line(h,[Oe,Ee],[Ft,Ft],ee,P,z,Y))}H.push(Se),H.push(Ae),H.push(De),t.setCN(e,Se,this.bcn+"stroke-open"),t.setCN(e,De,this.bcn+"stroke-close"),t.setCN(e,Ae,this.bcn+"stroke"),q.className&&t.setCN(e,Le,q.className,!0),Ae&&this.addListeners(Ae,q),De&&this.addListeners(De,q),Se&&this.addListeners(Se,q),Xt=Gt,Ut=Ft}}if(!B&&!isNaN(qt)){var Ie=this.hideBulletsCount
if(this.end-this.start<=Ie||0===Ie){var Ge=this.createBullet(q,jt,Zt,ft),Fe=this.labelText
if(Fe&&!isNaN(Xt)&&!isNaN(Xt)){var ze=this.createLabel(q,Fe),Pe=0
Ge&&(Pe=Ge.size),this.positionLabel(q,Xt,Ut,ze,Pe)}if("regular"==L||"100%"==L){var We=r.totalText
if(We){var Ye=this.createLabel(q,We,r.totalTextColor)
if(t.setCN(e,Ye,this.bcn+"label-total"),this.allBullets.push(Ye),Ye){var He,Ve,Xe=Ye.getBBox(),Ue=Xe.width,je=Xe.height,Ze=r.totalTextOffset,qe=r.totals[ft]
qe&&qe.remove()
var Ke=0
"column"!=n&&(Ke=this.bulletSize),x?(Ve=Ut,He=0>qt?Gt-Ue/2-2-Ke-Ze:Gt+Ue/2+3+Ke+Ze):(He=Xt,Ve=0>qt?Ft+je/2+Ke+Ze:Ft-je/2-3-Ke-Ze),Ye.translate(He,Ve),r.totals[ft]=Ye,x?(0>Ve||Ve>v)&&Ye.remove():(0>He||He>g)&&Ye.remove()}}}}}}}this.lastDataItem=q,"line"!=n&&"step"!=n&&"smoothedLine"!=n||("smoothedLine"==n?this.drawSmoothedGraph(w,M,vt,bt):this.drawLineGraph(w,M,vt,bt),B||this.launchAnimation()),this.bulletsHidden&&this.hideBullets(),this.customBulletsHidden&&this.hideCustomBullets()},animateColumns:function(t,e){var i=this,s=i.chart.startDuration
0<s&&!i.animationPlayed&&(i.seqAn?(t.set.hide(),i.animationArray.push(t),s=setTimeout(function(){i.animate.call(i)},s/(i.end-i.start+1)*(e-i.start)*1e3),i.timeOuts.push(s)):i.animate(t),i.chart.animatable.push(t))},createLabel:function(e,i,s){var a=this.chart,h=e.labelColor
h||(h=this.color),h||(h=a.color),s&&(h=s),void 0===(s=this.fontSize)&&(this.fontSize=s=a.fontSize)
var r=this.labelFunction
if(i=a.formatString(i,e),i=t.cleanFromEmpty(i),r&&(i=r(e,i)),void 0!==i&&""!==i)return e=t.text(this.container,i,h,a.fontFamily,s),e.node.style.pointerEvents="none",t.setCN(a,e,this.bcn+"label"),this.bulletSet.push(e),e},positiveClip:function(t){t.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(t){t.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(e,i,s,a){var h=this
if(1<e.length){var r=h.noRounding,n=h.set,o=h.chart,l=h.container,d=l.set(),u=l.set()
n.push(u),n.push(d)
var c=h.lineAlpha,p=h.lineThickness,m=(n=h.fillAlphas,h.lineColorR),f=h.negativeLineAlpha
isNaN(f)&&(f=c),(g=h.lineColorSwitched)&&(m=g)
var g=h.fillColorsR;(b=h.fillColorsSwitched)&&(g=b)
var v=h.dashLength;(b=h.dashLengthSwitched)&&(v=b)
var b=h.negativeLineColor,x=h.negativeFillColors,N=h.negativeFillAlphas,C=h.baseCoord
0!==h.negativeBase&&((C=h.valueAxis.getCoordinate(h.negativeBase,r))>h.height&&(C=h.height),0>C&&(C=0)),(c=t.line(l,e,i,m,c,p,v,!1,!1,r)).node.setAttribute("stroke-linejoin","round"),t.setCN(o,c,h.bcn+"stroke"),d.push(c),d.click(function(t){h.handleGraphEvent(t,"clickGraph")}).mouseover(function(t){h.handleGraphEvent(t,"rollOverGraph")}).mouseout(function(t){h.handleGraphEvent(t,"rollOutGraph")}).touchmove(function(t){h.chart.handleMouseMove(t)}).touchend(function(t){h.chart.handleTouchEnd(t)}),void 0===b||h.useNegativeColorIfDown||((p=t.line(l,e,i,b,f,p,v,!1,!1,r)).node.setAttribute("stroke-linejoin","round"),t.setCN(o,p,h.bcn+"stroke"),t.setCN(o,p,h.bcn+"stroke-negative"),u.push(p)),(0<n||0<N)&&(p=e.join(";").split(";"),f=i.join(";").split(";"),"serial"==(c=o.type)||"radar"==c?0<s.length?(s.reverse(),a.reverse(),p=e.concat(s),f=i.concat(a)):"radar"==c?(f.push(0),p.push(0)):h.rotate?(f.push(f[f.length-1]),p.push(C),f.push(f[0]),p.push(C),f.push(f[0]),p.push(p[0])):(p.push(p[p.length-1]),f.push(C),p.push(p[0]),f.push(C),p.push(e[0]),f.push(f[0])):"xy"==c&&(i=h.fillToAxis)&&(t.isString(i)&&(i=o.getValueAxisById(i)),"H"==i.orientation?(C="top"==i.position?0:i.height,p.push(p[p.length-1]),f.push(C),p.push(p[0]),f.push(C),p.push(e[0]),f.push(f[0])):(C="left"==i.position?0:i.width,f.push(f[f.length-1]),p.push(C),f.push(f[0]),p.push(C),f.push(f[0]),p.push(p[0]))),e=h.gradientRotation,0<n&&((i=t.polygon(l,p,f,g,n,1,"#000",0,e,r)).pattern(h.pattern,NaN,o.path),t.setCN(o,i,h.bcn+"fill"),d.push(i),i.toBack()),(x||void 0!==b)&&(isNaN(N)&&(N=n),x||(x=b),r=t.polygon(l,p,f,x,N,1,"#000",0,e,r),t.setCN(o,r,h.bcn+"fill"),t.setCN(o,r,h.bcn+"fill-negative"),r.pattern(h.pattern,NaN,o.path),u.push(r),r.toBack(),u.click(function(t){h.handleGraphEvent(t,"clickGraph")}).mouseover(function(t){h.handleGraphEvent(t,"rollOverGraph")}).mouseout(function(t){h.handleGraphEvent(t,"rollOutGraph")}).touchmove(function(t){h.chart.handleMouseMove(t)}).touchend(function(t){h.chart.handleTouchEnd(t)}))),h.applyMask(u,d)}},applyMask:function(t,e){var i=t.length()
"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(e),0<i&&this.negativeClip(t))},drawSmoothedGraph:function(e,i,s,a){if(1<e.length){var h=this.set,r=this.chart,n=this.container,o=n.set(),l=n.set()
h.push(l),h.push(o)
var d=this.lineAlpha,u=this.lineThickness,c=(h=this.dashLength,this.fillAlphas),p=this.lineColorR,m=this.fillColorsR,f=this.negativeLineColor,g=this.negativeFillColors,v=this.negativeFillAlphas,b=this.baseCoord,x=this.lineColorSwitched
x&&(p=x),(x=this.fillColorsSwitched)&&(m=x)
var N=this.negativeLineAlpha
isNaN(N)&&(N=d),x=this.getGradRotation(),d=new t.Bezier(n,e,i,p,d,u,m,0,h,void 0,x),t.setCN(r,d,this.bcn+"stroke"),o.push(d.path),void 0!==f&&(u=new t.Bezier(n,e,i,f,N,u,m,0,h,void 0,x),t.setCN(r,u,this.bcn+"stroke"),t.setCN(r,u,this.bcn+"stroke-negative"),l.push(u.path)),0<c&&(u=e.join(";").split(";"),d=i.join(";").split(";"),p="",0<s.length?(s.push("M"),a.push("M"),s.reverse(),a.reverse(),u=e.concat(s),d=i.concat(a)):(this.rotate?(p+=" L"+b+","+i[i.length-1],p+=" L"+b+","+i[0]):(p+=" L"+e[e.length-1]+","+b,p+=" L"+e[0]+","+b),p+=" L"+e[0]+","+i[0]),e=new t.Bezier(n,u,d,NaN,0,0,m,c,h,p,x),t.setCN(r,e,this.bcn+"fill"),e.path.pattern(this.pattern,NaN,r.path),o.push(e.path),g||void 0!==f)&&(v||(v=c),g||(g=f),(n=new t.Bezier(n,u,d,NaN,0,0,g,v,h,p,x)).path.pattern(this.pattern,NaN,r.path),t.setCN(r,n,this.bcn+"fill"),t.setCN(r,n,this.bcn+"fill-negative"),l.push(n.path)),this.applyMask(l,o)}},launchAnimation:function(){var e=this,i=e.chart.startDuration
if(0<i&&!e.animationPlayed){var s=e.set,a=e.bulletSet
t.VML||(s.attr({opacity:e.startAlpha}),a.attr({opacity:e.startAlpha})),s.hide(),a.hide(),e.seqAn?(i=setTimeout(function(){e.animateGraphs.call(e)},e.index*i*1e3),e.timeOuts.push(i)):e.animateGraphs()}},animateGraphs:function(){var t=this.chart,e=this.set,i=this.bulletSet,s=this.x,a=this.y
e.show(),i.show()
var h=t.startDuration,r=t.startEffect
e&&(this.rotate?(e.translate(-1e3,a),i.translate(-1e3,a)):(e.translate(s,-1e3),i.translate(s,-1e3)),e.animate({opacity:1,translate:s+","+a},h,r),i.animate({opacity:1,translate:s+","+a},h,r),t.animatable.push(e))},animate:function(e){var i=this.chart,s=this.animationArray
!e&&0<s.length&&(e=s[0],s.shift()),s=t[t.getEffect(i.startEffect)],i=i.startDuration,e&&(this.rotate?e.animateWidth(i,s):e.animateHeight(i,s),e.set.show())},legendKeyColor:function(){var t=this.legendColor,e=this.lineAlpha
return void 0===t&&(t=this.lineColorR,0===e&&(e=this.fillColorsR)&&(t="object"==typeof e?e[0]:e)),t},legendKeyAlpha:function(){var t=this.legendAlpha
return void 0===t&&(t=this.lineAlpha,this.fillAlphas>t&&(t=this.fillAlphas),0===t&&(t=this.bulletAlpha),0===t&&(t=1)),t},createBullet:function(e,i,s){if(!isNaN(i)&&!isNaN(s)&&("none"!=this.bullet||this.customBullet||e.bullet||e.customBullet)){var a=this.chart,h=this.container,r=this.bulletOffset,n=this.bulletSize
isNaN(e.bulletSize)||(n=e.bulletSize)
var o,l=e.values.value,d=this.maxValue,u=this.minValue,c=this.maxBulletSize,p=this.minBulletSize
isNaN(d)||(isNaN(l)||(n=(l-u)/(d-u)*(c-p)+p),u==d&&(n=c)),d=n,this.bulletAxis&&(n=e.values.error,isNaN(n)||(l=n),n=this.bulletAxis.stepWidth*l),n<this.minBulletSize&&(n=this.minBulletSize),this.rotate?i=e.isNegative?i-r:i+r:s=e.isNegative?s+r:s-r,p=this.bulletColorR,e.lineColor&&void 0===this.bulletColor&&(this.bulletColorSwitched=e.lineColor),this.bulletColorSwitched&&(p=this.bulletColorSwitched),e.isNegative&&void 0!==this.bulletColorNegative&&(p=this.bulletColorNegative),void 0!==e.color&&(p=e.color),"xy"==a.type&&this.valueField&&(o=this.pattern,e.pattern&&(o=e.pattern)),r=this.bullet,e.bullet&&(r=e.bullet)
l=this.bulletBorderThickness,u=this.bulletBorderColorR,c=this.bulletBorderAlpha
var m=this.bulletAlpha
u||(u=p),this.useLineColorForBulletBorder&&(u=this.lineColorR,e.isNegative&&this.negativeLineColor&&(u=this.negativeLineColor),this.lineColorSwitched&&(u=this.lineColorSwitched))
var f=e.alpha
return isNaN(f)||(m=f),o=t.bullet(h,r,n,p,m,l,u,c,d,0,o,a.path),d=this.customBullet,e.customBullet&&(d=e.customBullet),d&&(o&&o.remove(),"function"==typeof d?((d=new d).chart=a,e.bulletConfig&&(d.availableSpace=s,d.graph=this,d.graphDataItem=e,d.bulletY=s,e.bulletConfig.minCoord=this.minCoord-s,d.bulletConfig=e.bulletConfig),d.write(h),o&&d.showBullet&&d.set.push(o),e.customBulletGraphics=d.cset,o=d.set):(o=h.set(),d=h.image(d,0,0,n,n),o.push(d),this.centerCustomBullets&&d.translate(-n/2,-n/2))),o&&((e.url||this.showHandOnHover)&&o.setAttr("cursor","pointer"),"serial"!=a.type&&"gantt"!=a.type||(-.5>i||i>this.width||s<-n/2||s>this.height)&&(o.remove(),o=null),o&&(this.bulletSet.push(o),o.translate(i,s),this.addListeners(o,e),this.allBullets.push(o)),e.bx=i,e.by=s,t.setCN(a,o,this.bcn+"bullet"),e.className&&t.setCN(a,o,e.className,!0)),o?(o.size=n||0,(a=this.bulletHitAreaSize)&&((h=t.circle(h,a,"#FFFFFF",.001,0)).translate(i,s),e.hitBullet=h,this.bulletSet.push(h),this.addListeners(h,e)),e.bulletGraphics=o,void 0!==this.tabIndex&&o.setAttr("tabindex",this.tabIndex)):o={size:0},o.graphDataItem=e,o}},showBullets:function(){var t,e=this.allBullets
for(this.bulletsHidden=!1,t=0;t<e.length;t++)e[t].show()},hideBullets:function(){var t,e=this.allBullets
for(this.bulletsHidden=!0,t=0;t<e.length;t++)e[t].hide()},showCustomBullets:function(){var t,e=this.allBullets
for(this.customBulletsHidden=!1,t=0;t<e.length;t++){var i=e[t].graphDataItem
i&&i.customBulletGraphics&&i.customBulletGraphics.show()}},hideCustomBullets:function(){var t,e=this.allBullets
for(this.customBulletsHidden=!0,t=0;t<e.length;t++){var i=e[t].graphDataItem
i&&i.customBulletGraphics&&i.customBulletGraphics.hide()}},addListeners:function(t,e){var i=this
t.mouseover(function(t){i.handleRollOver(e,t)}).mouseout(function(t){i.handleRollOut(e,t)}).touchend(function(t){i.handleRollOver(e,t),i.chart.panEventsEnabled&&i.handleClick(e,t)}).touchstart(function(t){i.handleRollOver(e,t)}).click(function(t){i.handleClick(e,t)}).dblclick(function(t){i.handleDoubleClick(e,t)}).contextmenu(function(t){i.handleRightClick(e,t)})
var s=i.chart
if(s.accessible&&i.accessibleLabel){var a=s.formatString(i.accessibleLabel,e)
s.makeAccessible(t,a)}},handleRollOver:function(t,e){if(this.handleGraphEvent(e,"rollOverGraph"),t){var i=this.chart
t.bulletConfig&&(i.isRolledOverBullet=!0)
var s={type:"rollOverGraphItem",item:t,index:t.index,graph:this,target:this,chart:this.chart,event:e}
this.fire(s),i.fire(s),clearTimeout(i.hoverInt),(i=i.chartCursor)&&i.valueBalloonsEnabled||this.showGraphBalloon(t,"V",!0)}},handleRollOut:function(t,e){var i=this.chart
if(t){var s={type:"rollOutGraphItem",item:t,index:t.index,graph:this,target:this,chart:this.chart,event:e}
this.fire(s),i.fire(s),i.isRolledOverBullet=!1}this.handleGraphEvent(e,"rollOutGraph"),(i=i.chartCursor)&&i.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(e,i){if(!this.chart.checkTouchMoved()&&this.chart.checkTouchDuration(i)){if(e){var s={type:"clickGraphItem",item:e,index:e.index,graph:this,target:this,chart:this.chart,event:i}
this.fire(s),this.chart.fire(s),t.getURL(e.url,this.urlTarget)}this.handleGraphEvent(i,"clickGraph")}},handleGraphEvent:function(t,e){var i={type:e,graph:this,target:this,chart:this.chart,event:t}
this.fire(i),this.chart.fire(i)},handleRightClick:function(t,e){if(t){var i={type:"rightClickGraphItem",item:t,index:t.index,graph:this,target:this,chart:this.chart,event:e}
this.fire(i),this.chart.fire(i)}},handleDoubleClick:function(t,e){if(t){var i={type:"doubleClickGraphItem",item:t,index:t.index,graph:this,target:this,chart:this.chart,event:e}
this.fire(i),this.chart.fire(i)}},zoom:function(t,e){this.start=t,this.end=e,this.draw()},changeOpacity:function(t){var e,i=this.set
if(i&&i.setAttr("opacity",t),i=this.ownColumns)for(e=0;e<i.length;e++){var s=i[e].set
s&&s.setAttr("opacity",t)}(i=this.bulletSet)&&i.setAttr("opacity",t)},destroy:function(){t.remove(this.set),t.remove(this.bulletSet)
var e,i=this.timeOuts
if(i)for(e=0;e<i.length;e++)clearTimeout(i[e])
this.timeOuts=[]},createBalloon:function(){var e=this.chart
this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon={}
var i=this.balloon
t.extend(i,e.balloon,!0),i.chart=e,i.mainSet=e.plotBalloonsSet,i.className=this.id},hideBalloon:function(){var t=this,e=t.chart
e.chartCursor?e.chartCursor.valueBalloonsEnabled||e.hideBalloon():e.hideBalloon(),clearTimeout(t.hoverInt),t.hoverInt=setTimeout(function(){t.hideBalloonReal.call(t)},e.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide(),this.fixBulletSize()},fixBulletSize:function(){if(t.isModern){var e=this.resizedDItem
if(e){var i=e.bulletGraphics
if(i&&!i.doNotScale){i.translate(e.bx,e.by,1)
var s=this.bulletAlpha
isNaN(e.alpha)||(s=e.alpha),i.setAttr("fill-opacity",s),i.setAttr("stroke-opacity",this.bulletBorderAlpha)}}this.resizedDItem=null}},showGraphBalloon:function(e,i,s,a,h){if(e){var r=this.chart,n=this.balloon,o=0,l=0,d=!0
if((u=r.chartCursor)?u.valueBalloonsEnabled||(n=r.balloon,o=this.x,l=this.y,d=!1):(n=r.balloon,o=this.x,l=this.y,d=!1),clearTimeout(this.hoverInt),r.chartCursor&&(this.currentDataItem=e,"serial"==r.type&&r.isRolledOverBullet&&r.chartCursor.valueBalloonsEnabled))return void this.hideBalloonReal()
if(this.resizeBullet(e,a,h),n&&n.enabled&&this.showBalloon&&!this.hidden){var u=r.formatString(this.balloonText,e,!0),c=this.balloonFunction
c&&(u=c(e,e.graph)),u&&(u=t.cleanFromEmpty(u)),u&&""!==u?(a=r.getBalloonColor(this,e),n.drop||(n.pointerOrientation=i),i=e.x,h=e.y,r.rotate&&(i=e.y,h=e.x),i+=o,h+=l,isNaN(i)||isNaN(h)?this.hideBalloonReal():(e=this.width,c=this.height,d&&n.setBounds(o,l,e+o,c+l),n.changeColor(a),n.setPosition(i,h),n.fixPrevious(),n.fixedPosition&&(s=!1),!s&&"radar"!=r.type&&(i<o-.5||i>e+o||h<l-.5||h>c+l)?(n.showBalloon(u),n.hide(0)):(n.followCursor(s),n.showBalloon(u)))):(this.hideBalloonReal(),n.hide(),this.resizeBullet(e,a,h))}else this.hideBalloonReal()}},resizeBullet:function(e,i,s){if(this.fixBulletSize(),e&&t.isModern&&(1!=i||!isNaN(s))){var a=e.bulletGraphics
a&&!a.doNotScale&&(a.translate(e.bx,e.by,i),isNaN(s)||(a.setAttr("fill-opacity",s),a.setAttr("stroke-opacity",s)),this.resizedDItem=e)}}})}(),function(){var t=window.AmCharts
t.ChartCursor=t.Class({construct:function(e){this.cname="ChartCursor",this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted"),this.enabled=!0,this.cursorAlpha=1,this.selectionAlpha=.2,this.cursorColor="#CC0000",this.categoryBalloonAlpha=1,this.color="#FFFFFF",this.type="cursor",this.zoomed=!1,this.zoomable=!0,this.pan=!1,this.categoryBalloonDateFormat="MMM DD, YYYY",this.categoryBalloonText="[[category]]",this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0,this.rolledOver=!1,this.cursorPosition="middle",this.bulletsEnabled=this.skipZoomDispatch=!1,this.bulletSize=8,this.selectWithoutZooming=this.oneBalloonOnly=!1,this.graphBulletSize=1.7,this.animationDuration=.3,this.zooming=!1,this.adjustment=0,this.avoidBalloonOverlapping=!0,this.leaveCursor=!1,this.leaveAfterTouch=!0,this.valueZoomable=!1,this.balloonPointerOrientation="horizontal",this.hLineEnabled=this.vLineEnabled=!0
this.vZoomEnabled=this.hZoomEnabled=!1,t.applyTheme(this,e,this.cname)},draw:function(){this.destroy()
var e=this.chart
e.panRequired=!0
var i=e.container
this.rotate=e.rotate,this.container=i,this.prevLineHeight=this.prevLineWidth=NaN,(i=i.set()).translate(this.x,this.y),this.set=i,e.cursorSet.push(i),this.createElements(),t.isString(this.limitToGraph)&&(this.limitToGraph=t.getObjById(e.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle"),this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase(),this.isHidden=!1,this.hideLines(),this.valueLineAxis||(this.valueLineAxis=e.valueAxes[0])},createElements:function(){var e,i,s=this,a=s.chart,h=a.dx,r=a.dy,n=s.width,o=s.height,l=s.cursorAlpha,d=s.valueLineAlpha
s.rotate?(e=d,i=l):(i=d,e=l),"xy"==a.type&&(i=l,void 0!==d&&(i=d),e=l),s.vvLine=t.line(s.container,[h,0,0],[r,0,o],s.cursorColor,e,1),t.setCN(a,s.vvLine,"cursor-line"),t.setCN(a,s.vvLine,"cursor-line-vertical"),s.hhLine=t.line(s.container,[0,n,n+h],[0,0,r],s.cursorColor,i,1),t.setCN(a,s.hhLine,"cursor-line"),t.setCN(a,s.hhLine,"cursor-line-horizontal"),s.vLine=s.rotate?s.vvLine:s.hhLine,s.set.push(s.vvLine),s.set.push(s.hhLine),s.set.node.style.pointerEvents="none",s.fullLines=s.container.set(),(a=a.cursorLineSet).push(s.fullLines),a.translate(s.x,s.y),a.clipRect(-1,-1,n+2,o+2),void 0!==s.tabIndex&&(a.setAttr("tabindex",s.tabIndex),a.keyup(function(t){s.handleKeys(t)}).focus(function(t){s.showCursor()}).blur(function(t){s.hideCursor()})),s.set.clipRect(0,0,n,o)},handleKeys:function(e){var i=this.prevIndex,s=this.chart
if(s){var a=s.chartData
a&&(isNaN(i)&&(i=a.length-1),37!=e.keyCode&&40!=e.keyCode||i--,39!=e.keyCode&&38!=e.keyCode||i++,i=t.fitToBounds(i,s.startIndex,s.endIndex),(e=this.chart.chartData[i])&&this.setPosition(e.x.categoryAxis),this.prevIndex=i)}},update:function(){var t=this.chart
if(t){var e,i=t.mouseX-this.x,s=t.mouseY-this.y
if(this.mouseX=i,this.mouseY=s,this.mouse2X=t.mouse2X-this.x,this.mouse2Y=t.mouse2Y-this.y,t.chartData&&0<t.chartData.length){if(this.mouseIsOver()?(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(t.rotate||!this.limitToGraph)&&this.vvLine.translate(i,0),!this.hhLine||!isNaN(this.fy)||t.rotate&&this.limitToGraph||this.hhLine.translate(0,s),isNaN(this.mouse2X)?this.dispatchMovedEvent(i,s):e=!1):this.forceShow||this.hideCursor(),this.zooming){if(!isNaN(this.mouse2X))return void(isNaN(this.mouse2X0)||this.dispatchPanEvent())
if(this.pan)return void this.dispatchPanEvent();(this.hZoomEnabled||this.vZoomEnabled)&&this.zooming&&this.updateSelection()}e&&this.showCursor()}}},updateDrawing:function(){if(this.drawing&&this.chart.setMouseCursor("crosshair"),this.drawingNow&&(t.remove(this.drawingLine),1<Math.abs(this.drawStartX-this.mouseX)||1<Math.abs(this.drawStartY-this.mouseY))){var e=(i=this.chart).marginTop,i=i.marginLeft
this.drawingLine=t.line(this.container,[this.drawStartX+i,this.mouseX+i],[this.drawStartY+e,this.mouseY+e],this.cursorColor,1,1)}},fixWidth:function(e){if(this.fullWidth&&this.prevLineWidth!=e){var i=this.vvLine,s=0
i&&(i.remove(),s=i.x),(i=this.container.set()).translate(s,0),s=t.rect(this.container,e,this.height,this.cursorColor,this.cursorAlpha,this.cursorAlpha,this.cursorColor),t.setCN(this.chart,s,"cursor-fill"),s.translate(-e/2-1,0),i.push(s),this.vvLine=i,this.fullLines.push(i),this.prevLineWidth=e}},fixHeight:function(e){if(this.fullWidth&&this.prevLineHeight!=e){var i=this.hhLine,s=0
i&&(i.remove(),s=i.y),(i=this.container.set()).translate(0,s),(s=t.rect(this.container,this.width,e,this.cursorColor,this.cursorAlpha)).translate(0,-e/2),i.push(s),this.fullLines.push(i),this.hhLine=i,this.prevLineHeight=e}},fixVLine:function(t,e){if(!isNaN(t)&&this.vvLine){if(isNaN(this.prevLineX)){var i=0,s=this.mouseX
if(this.limitToGraph){var a=this.chart.categoryAxis
a&&(this.chart.rotate||(i="bottom"==a.position?this.height:-this.height),s=t)}this.vvLine.translate(s,i)}else this.prevLineX!=t&&this.vvLine.translate(this.prevLineX,this.prevLineY)
this.fx=t,this.prevLineX!=t&&(i=this.animationDuration,this.zooming&&(i=0),this.vvLine.stop(),this.vvLine.animate({translate:t+","+e},i,"easeOutSine"),this.prevLineX=t,this.prevLineY=e)}},fixHLine:function(t,e){if(!isNaN(t)&&this.hhLine){if(isNaN(this.prevLineY)){var i=0,s=this.mouseY
if(this.limitToGraph){var a=this.chart.categoryAxis
a&&(this.chart.rotate&&(i="right"==a.position?this.width:-this.width),s=t)}this.hhLine.translate(i,s)}else this.prevLineY!=t&&this.hhLine.translate(this.prevLineX,this.prevLineY)
this.fy=t,this.prevLineY!=t&&(i=this.animationDuration,this.zooming&&(i=0),this.hhLine.stop(),this.hhLine.animate({translate:e+","+t},i,"easeOutSine"),this.prevLineY=t,this.prevLineX=e)}},hideCursor:function(t){this.forceShow=!1,this.chart.wasTouched&&this.leaveAfterTouch||this.isHidden||this.leaveCursor||(this.hideCursorReal(),t?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideCursorReal:function(){this.hideLines(),this.isHidden=!0,this.index=this.prevLineY=this.prevLineX=this.mouseY0=this.mouseX0=this.fy=this.fx=NaN},hideLines:function(){this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.hide(),this.fullLines&&this.fullLines.hide(),this.isHidden=!0,this.chart.handleCursorHide()},showCursor:function(t){!this.drawing&&this.enabled&&(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),t||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&this.vvLine.hide())},updateSelection:function(){if(!this.pan&&this.enabled){var e=this.mouseX,i=this.mouseY
isNaN(this.fx)||(e=this.fx),isNaN(this.fy)||(i=this.fy),this.clearSelection()
var s,a=this.mouseX0,h=this.mouseY0,r=this.width,n=this.height
e=t.fitToBounds(e,0,r),i=t.fitToBounds(i,0,n)
e<a&&(s=e,e=a,a=s),i<h&&(s=i,i=h,h=s),this.hZoomEnabled?r=e-a:a=0,this.vZoomEnabled?n=i-h:h=0,isNaN(this.mouse2X)&&0<Math.abs(r)&&0<Math.abs(n)&&(e=this.chart,i=t.rect(this.container,r,n,this.cursorColor,this.selectionAlpha),t.setCN(e,i,"cursor-selection"),i.width=r,i.height=n,i.translate(a,h),this.set.push(i),this.selection=i),this.updateFullLine()}},mouseIsOver:function(){var t=this.mouseX,e=this.mouseY
return this.justReleased?(this.justReleased=!1,!0):!!this.mouseIsDown||(this.chart.mouseIsOver?0<t&&t<this.width&&0<e&&e<this.height||(this.handleMouseOut(),!1):(this.handleMouseOut(),!1))},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){if(this.update(),this.mouseIsOver())if(this.mouseIsDown=!0,this.mouseX0=this.mouseX,this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0
else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||(this.mouseX0=this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0
var t={chart:this.chart,target:this,type:"zoomStarted"}
t.x=this.mouseX/this.width,t.y=this.mouseY/this.height,this.index0=t.index=this.index,this.timestamp0=this.timestamp,this.fire(t)}},registerInitialMouse:function(){},handleReleaseOutside:function(){if(this.mouseIsDown=!1,this.drawingNow){this.drawingNow=!1,t.remove(this.drawingLine)
var e=this.drawStartX,i=this.drawStartY,s=this.mouseX,a=this.mouseY,h=this.chart;(2<Math.abs(e-s)||2<Math.abs(i-a))&&this.fire({type:"draw",target:this,chart:h,initialX:e,initialY:i,finalX:s,finalY:a})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?this.dispatchZoomEvent("selected"):(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY)),this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(t){if(!this.pan&&((l=this.selection)&&3<Math.abs(l.width)&&3<Math.abs(l.height))){var e=Math.min(this.index,this.index0),i=Math.max(this.index,this.index0),s=e,a=i,h=this.chart,r=h.chartData,n=h.categoryAxis
n&&n.parseDates&&!n.equalSpacing&&(s=r[e]?r[e].time:Math.min(this.timestamp0,this.timestamp),a=r[i]?h.getEndTime(r[i].time):Math.max(this.timestamp0,this.timestamp))
var o,l={type:t,chart:this.chart,target:this,end:a,start:s,startIndex:e,endIndex:i,selectionHeight:l.height,selectionWidth:l.width,selectionY:l.y,selectionX:l.x}
this.hZoomEnabled&&4<Math.abs(this.mouseX0-this.mouseX)&&(l.startX=this.mouseX0/this.width,l.endX=this.mouseX/this.width,o=!0),this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(l.startY=1-this.mouseY0/this.height,l.endY=1-this.mouseY/this.height,o=!0),o&&(this.prevY=this.prevX=NaN,this.fire(l),"selected"!=t&&this.clearSelection()),this.hideCursor()}},dispatchMovedEvent:function(t,e,i,s){if(t=Math.round(t),e=Math.round(e),!this.isHidden&&(t!=this.prevX||e!=this.prevY||"changed"==i)){i||(i="moved")
var a=this.fx,h=this.fy
isNaN(a)&&(a=t),isNaN(h)&&(h=e)
var r=!1
this.zooming&&this.pan&&(r=!0),r={hidden:this.isHidden,type:i,chart:this.chart,target:this,x:t,y:e,finalX:a,finalY:h,zooming:this.zooming,panning:r,mostCloseGraph:this.mostCloseGraph,index:this.index,skip:s,hideBalloons:this.hideGraphBalloons},this.prevIndex=this.index,this.rotate?(r.position=e,r.finalPosition=h):(r.position=t,r.finalPosition=a),this.prevX=t,this.prevY=e,s?this.chart.handleCursorMove(r):(this.fire(r),"changed"==i&&this.chart.fire(r))}},dispatchPanEvent:function(){if(this.mouseIsDown){var e=t.roundTo((this.mouseX-this.mouseX0)/this.width,3),i=t.roundTo((this.mouseY-this.mouseY0)/this.height,3),s=t.roundTo((this.mouse2X-this.mouse2X0)/this.width,3),a=t.roundTo((this.mouse2Y-this.mouse2Y0)/this.height,2),h=!1
0!==Math.abs(e)&&0!==Math.abs(i)&&(h=!0),this.prevDeltaX!=e&&this.prevDeltaY!=i||(h=!1),isNaN(s)||isNaN(a)||(0!==Math.abs(s)&&0!==Math.abs(a)&&(h=!0),this.prevDelta2X!=s&&this.prevDelta2Y!=a)||(h=!1),h&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:e,deltaY:i,delta2X:s,delta2Y:a,index:this.index}),this.prevDeltaX=e,this.prevDeltaY=i,this.prevDelta2X=s,this.prevDelta2Y=a)}},clearSelection:function(){var t=this.selection
t&&(t.width=0,t.height=0,t.remove())},destroy:function(){this.clear(),t.remove(this.selection),this.selection=null,clearTimeout(this.syncTO),t.remove(this.set)},clear:function(){},setTimestamp:function(t){this.timestamp=t},setIndex:function(t,e){t!=this.index&&(this.index=t,e||this.isHidden||this.dispatchMovedEvent(this.mouseX,this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),this.rolledOver=!1)},showCursorAt:function(t){var e=this.chart.categoryAxis
e&&this.setPosition(e.categoryToCoordinate(t),t)},setPosition:function(t,e){var i,s,a=this.chart,h=a.categoryAxis
h&&(void 0===e&&(e=h.coordinateToValue(t)),h.showBalloonAt(e,t),this.forceShow=!0,h.stickBalloonToCategory?a.rotate?this.fixHLine(t,0):this.fixVLine(t,0):(this.showCursor(),a.rotate?this.hhLine.translate(0,t):this.vvLine.translate(t,0)),a.rotate?i=t:s=t,a.rotate?(this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),this.vvLine&&this.vvLine.show()),this.updateFullLine(),this.isHidden=!1,this.dispatchMovedEvent(s,i,"moved",!0))},enableDrawing:function(t){this.enabled=!t,this.hideCursor(),this.drawing=t},syncWithCursor:function(t,e){clearTimeout(this.syncTO),t&&(t.isHidden?this.hideCursor(!0):this.syncWithCursorReal(t,e))},isZooming:function(t){this.zooming=t},syncWithCursorReal:function(t,e){var i=t.vvLine,s=t.hhLine
this.index=t.index,this.forceShow=!0,this.zooming&&this.pan||this.showCursor(!0),this.hideGraphBalloons=e,this.justReleased=t.justReleased,this.zooming=t.zooming,this.index0=t.index0,this.mouseX0=t.mouseX0,this.mouseY0=t.mouseY0,this.mouse2X0=t.mouse2X0,this.mouse2Y0=t.mouse2Y0,this.timestamp0=t.timestamp0,this.prevDeltaX=t.prevDeltaX,this.prevDeltaY=t.prevDeltaY,this.prevDelta2X=t.prevDelta2X,this.prevDelta2Y=t.prevDelta2Y,this.fx=t.fx,this.fy=t.fy,t.zooming&&this.updateSelection()
var a=t.mouseX,h=t.mouseY
this.rotate?(a=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&s&&(isNaN(t.fy)?this.hhLine.translate(0,t.mouseY):this.fixHLine(t.fy,0))):(h=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&i&&(isNaN(t.fx)?this.vvLine.translate(t.mouseX,0):this.fixVLine(t.fx,0))),this.dispatchMovedEvent(a,h,"moved",!0)}})}(),function(){var t=window.AmCharts
t.SimpleChartScrollbar=t.Class({construct:function(e){this.createEvents("zoomed","zoomStarted","zoomEnded"),this.backgroundColor="#D4D4D4",this.backgroundAlpha=1,this.selectedBackgroundColor="#EFEFEF",this.scrollDuration=this.selectedBackgroundAlpha=1,this.resizeEnabled=!0,this.hideResizeGrips=!1,this.scrollbarHeight=20,this.updateOnReleaseOnly=!1,9>document.documentMode&&(this.updateOnReleaseOnly=!0),this.dragIconHeight=this.dragIconWidth=35,this.dragIcon="dragIconRoundBig",this.dragCursorHover="cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;",this.dragCursorDown="cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;",this.vResizeCursor="ns-resize",this.hResizeCursor="ew-resize",this.enabled=!0,this.percentStart=this.offset=0,this.percentEnd=1,t.applyTheme(this,e,"SimpleChartScrollbar")},getPercents:function(){var t=(s=this.getDBox()).x,e=s.y,i=s.width,s=s.height
this.rotate?(t=1-e/this.height,e=1-(e+s)/this.height):(e=t/this.width,t=(t+i)/this.width),this.percentStart=e,this.percentEnd=t},draw:function(){var e=this
if(e.destroy(),e.enabled){var i=e.chart.container,s=e.rotate,a=e.chart
a.panRequired=!0
var h,r,n=i.set()
if(e.set=n,s?t.setCN(a,n,"scrollbar-vertical"):t.setCN(a,n,"scrollbar-horizontal"),a.scrollbarsSet.push(n),s?(h=e.scrollbarHeight,r=a.plotAreaHeight):(r=e.scrollbarHeight,h=a.plotAreaWidth),e.width=h,(e.height=r)&&h){var o=t.rect(i,h,r,e.backgroundColor,e.backgroundAlpha,1,e.backgroundColor,e.backgroundAlpha)
t.setCN(a,o,"scrollbar-bg"),e.bg=o,n.push(o),o=t.rect(i,h,r,"#000",.005),n.push(o),e.invisibleBg=o,o.click(function(){e.handleBgClick()}).mouseover(function(){e.handleMouseOver()}).mouseout(function(){e.handleMouseOut()}).touchend(function(){e.handleBgClick()}),o=t.rect(i,h,r,e.selectedBackgroundColor,e.selectedBackgroundAlpha),t.setCN(a,o,"scrollbar-bg-selected"),e.selectedBG=o,n.push(o),h=t.rect(i,h,r,"#000",.005),e.dragger=h,n.push(h),h.mousedown(function(t){e.handleDragStart(t)}).mouseup(function(){e.handleDragStop()}).mouseover(function(){e.handleDraggerOver()}).mouseout(function(){e.handleMouseOut()}).touchstart(function(t){e.handleDragStart(t)}).touchend(function(){e.handleDragStop()}),r=a.pathToImages
var l
o=e.dragIcon.replace(/\.[a-z]*$/i,"")
t.isAbsolute(o)&&(r=""),s?(l=r+o+"H"+a.extension,r=e.dragIconWidth,s=e.dragIconHeight):(l=r+o+a.extension,s=e.dragIconWidth,r=e.dragIconHeight),o=i.image(l,0,0,s,r),t.setCN(a,o,"scrollbar-grip-left"),l=i.image(l,0,0,s,r),t.setCN(a,l,"scrollbar-grip-right")
var d=10,u=20
a.panEventsEnabled&&(d=25,u=e.scrollbarHeight)
var c=t.rect(i,d,u,"#000",.005),p=t.rect(i,d,u,"#000",.005)
p.translate(-(d-s)/2,-(u-r)/2),c.translate(-(d-s)/2,-(u-r)/2),s=i.set([o,p]),i=i.set([l,c]),e.iconLeft=s,n.push(e.iconLeft),e.iconRight=i,n.push(i),e.updateGripCursor(!1),a.makeAccessible(s,e.accessibleLabel),a.makeAccessible(i,e.accessibleLabel),a.makeAccessible(h,e.accessibleLabel),s.setAttr("role","menuitem"),i.setAttr("role","menuitem"),h.setAttr("role","menuitem"),void 0!==e.tabIndex&&(s.setAttr("tabindex",e.tabIndex),s.keyup(function(t){e.handleKeys(t,1,0)})),void 0!==e.tabIndex&&(h.setAttr("tabindex",e.tabIndex),h.keyup(function(t){e.handleKeys(t,1,1)})),void 0!==e.tabIndex&&(i.setAttr("tabindex",e.tabIndex),i.keyup(function(t){e.handleKeys(t,0,1)})),s.mousedown(function(){e.leftDragStart()}).mouseup(function(){e.leftDragStop()}).mouseover(function(){e.iconRollOver()}).mouseout(function(){e.iconRollOut()}).touchstart(function(){e.leftDragStart()}).touchend(function(){e.leftDragStop()}),i.mousedown(function(){e.rightDragStart()}).mouseup(function(){e.rightDragStop()}).mouseover(function(){e.iconRollOver()}).mouseout(function(){e.iconRollOut()}).touchstart(function(){e.rightDragStart()}).touchend(function(){e.rightDragStop()}),t.ifArray(a.chartData)?n.show():n.hide(),e.hideDragIcons(),e.clipDragger(!1)}n.translate(e.x,e.y),n.node.style.msTouchAction="none",n.node.style.touchAction="none"}},handleKeys:function(t,e,i){this.getPercents()
var s=this.percentStart,a=this.percentEnd
if(this.rotate){var h=a
a=s,s=h}37!=t.keyCode&&40!=t.keyCode||(s-=.02*e,a-=.02*i),39!=t.keyCode&&38!=t.keyCode||(s+=.02*e,a+=.02*i),this.rotate&&(t=a,a=s,s=t),isNaN(a)||isNaN(s)||this.percentZoom(s,a,!0)},updateScrollbarSize:function(t,e){if(!isNaN(t)&&!isNaN(e)){t=Math.round(t),e=Math.round(e)
var i,s,a,h,r,n=this.dragger
this.rotate?(i=0,s=t,a=this.width+1,h=e-t,n.setAttr("height",e-t),n.setAttr("y",s)):(i=t,s=0,a=e-t,h=this.height+1,r=e-t,n.setAttr("x",i),n.setAttr("width",r)),this.clipAndUpdate(i,s,a,h)}},update:function(){var t,e,i,s=!1,a=this.x,h=this.y,r=this.dragger
if(o=this.getDBox()){e=o.x+a,i=o.y+h
var n=o.width,o=o.height,l=this.rotate,d=this.chart,u=this.width,c=this.height,p=d.mouseX
d=d.mouseY
if(t=this.initialMouse,this.forceClip&&this.clipDragger(!0),this.dragging){var m=this.initialCoord
l?(0>(t=m+(d-t))&&(t=0),t>(m=c-o)&&(t=m),r.setAttr("y",t)):(0>(t=m+(p-t))&&(t=0),(t>(m=u-n)||isNaN(t))&&(t=m),r.setAttr("x",t)),this.clipDragger(!0)}this.resizingRight&&(l?(t=d-i,!isNaN(this.maxHeight)&&t>this.maxHeight&&(t=this.maxHeight),t+i>c+h&&(t=c-i+h),0>t?(this.resizingRight=!1,s=this.resizingLeft=!0):((0===t||isNaN(t))&&(t=.1),r.setAttr("height",t))):(t=p-e,!isNaN(this.maxWidth)&&t>this.maxWidth&&(t=this.maxWidth),t+e>u+a&&(t=u-e+a),0>t?(this.resizingRight=!1,s=this.resizingLeft=!0):((0===t||isNaN(t))&&(t=.1),r.setAttr("width",t))),this.clipDragger(!0)),this.resizingLeft&&(l?(e=i,(i=d)<h&&(i=h),isNaN(i)&&(i=h),i>c+h&&(i=c+h),t=!0===s?e-i:o+e-i,!isNaN(this.maxHeight)&&t>this.maxHeight&&(t=this.maxHeight,i=e),0>t?(this.resizingRight=!0,this.resizingLeft=!1,r.setAttr("y",e+o-h)):((0===t||isNaN(t))&&(t=.1),r.setAttr("y",i-h),r.setAttr("height",t))):((i=p)<a&&(i=a),isNaN(i)&&(i=a),i>u+a&&(i=u+a),t=!0===s?e-i:n+e-i,!isNaN(this.maxWidth)&&t>this.maxWidth&&(t=this.maxWidth,i=e),0>t?(this.resizingRight=!0,this.resizingLeft=!1,r.setAttr("x",e+n-a)):((0===t||isNaN(t))&&(t=.1),r.setAttr("x",i-a),r.setAttr("width",t))),this.clipDragger(!0))}},stopForceClip:function(){this.animating=this.forceClip=!1},clipDragger:function(t){if(a=this.getDBox()){var e=a.x,i=a.y,s=a.width,a=a.height,h=!1
this.rotate?(e=0,s=this.width+1,(this.clipY!=i||this.clipH!=a)&&(h=!0)):(i=0,a=this.height+1,(this.clipX!=e||this.clipW!=s)&&(h=!0)),h&&this.clipAndUpdate(e,i,s,a),t&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent())}},maskGraphs:function(){},clipAndUpdate:function(t,e,i,s){this.clipX=t,this.clipY=e,this.clipW=i,this.clipH=s,this.selectedBG.setAttr("width",i),this.selectedBG.setAttr("height",s),this.selectedBG.translate(t,e),this.updateDragIconPositions(),this.maskGraphs(t,e,i,s)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1
else{var t=this.chart
t.hideBalloon()
var e=(a=this.getDBox()).x,i=a.y,s=a.width,a=a.height
this.getPercents(),this.rotate?(e=i,s=this.height/a):s=this.width/s,t={type:"zoomed",position:e,chart:t,target:this,multiplier:s,relativeStart:this.percentStart,relativeEnd:this.percentEnd},this.percentStart==this.prevPercentStart&&this.percentEnd==this.prevPercentEnd&&this.prevMultiplier==s||(this.fire(t),this.prevPercentStart=this.percentStart,this.prevPercentEnd=this.percentEnd,this.prevMultiplier=s)}},updateDragIconPositions:function(){var t,e,i=this.getDBox(),s=i.x,a=i.y,h=this.iconLeft,r=this.iconRight,n=this.scrollbarHeight
this.rotate?(t=this.dragIconWidth,e=this.dragIconHeight,h.translate((n-e)/2,a-t/2),r.translate((n-e)/2,a+i.height-t/2)):(t=this.dragIconHeight,e=this.dragIconWidth,h.translate(s-e/2,(n-t)/2),r.translate(s-e/2+i.width,(n-t)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){this.resizingLeft||this.resizingRight||this.dragging||(!this.hideResizeGrips&&this.resizeEnabled||(this.iconLeft.hide(),this.iconRight.hide()),this.removeCursors())},removeCursors:function(){this.chart.setMouseCursor("auto")},fireZoomEvent:function(t){this.fire({type:t,chart:this.chart,target:this})},percentZoom:function(e,i,s){var a,h;(e=t.fitToBounds(e,0,i),i=t.fitToBounds(i,e,1),this.dragger&&this.enabled)&&(this.dragger.stop(),isNaN(e)&&(e=0),isNaN(i)&&(i=1),this.rotate?(i=(a=this.height)-a*i,h=a-a*e):(h=(a=this.width)*i,i=a*e),this.updateScrollbarSize(i,h),this.clipDragger(!1),this.getPercents(),s&&this.dispatchScrollbarEvent())},destroy:function(){this.clear(),t.remove(this.set),t.remove(this.iconRight),t.remove(this.iconLeft)},clear:function(){},handleDragStart:function(){if(this.enabled){this.fireZoomEvent("zoomStarted")
var e=this.chart
this.dragger.stop(),this.removeCursors(),t.isModern&&(this.dragger.node.style.cssText=this.dragCursorDown),this.dragging=!0
var i=this.getDBox()
this.rotate?(this.initialCoord=i.y,this.initialMouse=e.mouseY):(this.initialCoord=i.x,this.initialMouse=e.mouseX)}},handleDragStop:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent()),this.dragging=!1,this.mouseIsOver&&this.removeCursors(),t.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover),this.update(),this.fireZoomEvent("zoomEnded")},handleDraggerOver:function(){this.handleMouseOver(),t.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover)},leftDragStart:function(){this.fireZoomEvent("zoomStarted"),this.dragger.stop(),this.resizingLeft=!0,this.updateGripCursor(!0)},updateGripCursor:function(e){t.isModern&&(e=this.rotate?e?this.vResizeCursorDown:this.vResizeCursorHover:e?this.hResizeCursorDown:this.hResizeCursorHover)&&(this.iconRight&&(this.iconRight.node.style.cssText=e),this.iconLeft&&(this.iconLeft.node.style.cssText=e))},leftDragStop:function(){this.resizingLeft&&(this.resizingLeft=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded")),this.updateGripCursor(!1)},rightDragStart:function(){this.fireZoomEvent("zoomStarted"),this.dragger.stop(),this.resizingRight=!0,this.updateGripCursor(!0)},rightDragStop:function(){this.resizingRight&&(this.resizingRight=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded")),this.updateGripCursor(!1)},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.vResizeCursor&&this.chart.setMouseCursor(this.vResizeCursor):this.hResizeCursor&&this.chart.setMouseCursor(this.hResizeCursor),this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},handleBgClick:function(){var e=this
if(!e.resizingRight&&!e.resizingLeft){e.zooming=!0
var i,s,a=e.scrollDuration,h=e.dragger,r=(i=e.getDBox()).height,n=i.width
s=e.chart
var o=e.y,l=e.x,d=e.rotate
d?(i="y",s=s.mouseY-r/2-o,s=t.fitToBounds(s,0,e.height-r)):(i="x",s=s.mouseX-n/2-l,s=t.fitToBounds(s,0,e.width-n)),e.updateOnReleaseOnly?(e.skipEvent=!1,h.setAttr(i,s),e.dispatchScrollbarEvent(),e.clipDragger()):(e.animating=!0,s=Math.round(s),d?h.animate({y:s},a,">"):h.animate({x:s},a,">"),e.forceClip=!0,clearTimeout(e.forceTO),e.forceTO=setTimeout(function(){e.stopForceClip.call(e)},5e3*a))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){this.set&&((this.resizingLeft||this.resizingRight||this.dragging)&&(this.dragging=this.resizingRight=this.resizingLeft=!1,this.updateOnRelease(),this.removeCursors()),this.animating=this.mouseIsOver=!1,this.hideDragIcons(),this.update())},handleMouseOver:function(){this.mouseIsOver=!0,this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=!1,this.hideDragIcons(),this.removeCursors()}})}(),function(){var t=window.AmCharts
t.ChartScrollbar=t.Class({inherits:t.SimpleChartScrollbar,construct:function(e){this.cname="ChartScrollbar",t.ChartScrollbar.base.construct.call(this,e),this.graphLineColor="#BBBBBB",this.graphLineAlpha=0,this.graphFillColor="#BBBBBB",this.graphFillAlpha=1,this.selectedGraphLineColor="#888888",this.selectedGraphLineAlpha=0,this.selectedGraphFillColor="#888888",this.selectedGraphFillAlpha=1,this.gridCount=0,this.gridColor="#FFFFFF",this.gridAlpha=.7,this.skipEvent=this.autoGridCount=!1,this.color="#FFFFFF",this.scrollbarCreated=!1,this.oppositeAxis=!0,this.accessibleLabel="Zoom chart using cursor arrows",t.applyTheme(this,e,this.cname)},init:function(){var e=this.categoryAxis,i=this.chart,s=this.gridAxis
e||("CategoryAxis"==this.gridAxis.cname?(this.catScrollbar=!0,(e=new t.CategoryAxis).id="scrollbar"):((e=new t.ValueAxis).data=i.chartData,e.id=s.id,e.type=s.type,e.maximumDate=s.maximumDate,e.minimumDate=s.minimumDate,e.minPeriod=s.minPeriod,e.minMaxField=s.minMaxField),this.categoryAxis=e),e.chart=i
var a=i.categoryAxis
a&&(e.firstDayOfWeek=a.firstDayOfWeek),e.dateFormats=s.dateFormats,e.markPeriodChange=s.markPeriodChange,e.boldPeriodBeginning=s.boldPeriodBeginning,e.labelFunction=s.labelFunction,e.axisItemRenderer=t.RecItem,e.axisRenderer=t.RecAxis,e.guideFillRenderer=t.RecFill,e.inside=!0,e.fontSize=this.fontSize,e.tickLength=0,e.axisAlpha=0,t.isString(this.graph)&&(this.graph=t.getObjById(i.graphs,this.graph)),(e=this.graph)&&this.catScrollbar&&((s=this.valueAxis)||(this.valueAxis=s=new t.ValueAxis,s.visible=!1,s.scrollbar=!0,s.axisItemRenderer=t.RecItem,s.axisRenderer=t.RecAxis,s.guideFillRenderer=t.RecFill,s.labelsEnabled=!1,s.chart=i),(i=this.unselectedGraph)||((i=new t.AmGraph).scrollbar=!0,this.unselectedGraph=i,i.negativeBase=e.negativeBase,i.noStepRisers=e.noStepRisers),(i=this.selectedGraph)||((i=new t.AmGraph).scrollbar=!0,this.selectedGraph=i,i.negativeBase=e.negativeBase,i.noStepRisers=e.noStepRisers)),this.scrollbarCreated=!0},draw:function(){var e=this
if(t.ChartScrollbar.base.draw.call(e),e.enabled){e.scrollbarCreated||e.init()
var i=e.chart,s=i.chartData,a=e.categoryAxis,h=e.rotate,r=e.x,n=e.y,o=e.width,l=e.height,d=e.gridAxis,u=e.set
if(a.setOrientation(!h),a.parseDates=d.parseDates,"ValueAxis"==e.categoryAxis.cname&&(a.rotate=!h),a.equalSpacing=d.equalSpacing,a.minPeriod=d.minPeriod,a.startOnAxis=d.startOnAxis,a.width=o-1,a.height=l,a.gridCount=e.gridCount,a.gridColor=e.gridColor,a.gridAlpha=e.gridAlpha,a.color=e.color,a.tickLength=0,a.axisAlpha=0,a.autoGridCount=e.autoGridCount,a.parseDates&&!a.equalSpacing&&a.timeZoom(i.firstTime,i.lastTime),a.minimum=e.gridAxis.fullMin,a.maximum=e.gridAxis.fullMax,a.strictMinMax=!0,a.zoom(0,s.length-1),(d=e.graph)&&e.catScrollbar){var c=e.valueAxis,p=d.valueAxis
c.id=p.id,c.rotate=h,c.setOrientation(h),c.width=o,c.height=l,c.dataProvider=s,c.reversed=p.reversed,c.logarithmic=p.logarithmic,c.gridAlpha=0,c.axisAlpha=0,u.push(c.set),h?(c.y=n,c.x=0):(c.x=r,c.y=0)
var m
r=1/0,n=-1/0
for(m=0;m<s.length;m++){var f,g=s[m].axes[p.id].graphs[d.id].values
for(f in g)if(g.hasOwnProperty(f)&&"percents"!=f&&"total"!=f){var v=g[f]
v<r&&(r=v),v>n&&(n=v)}}1/0!=r&&(c.minimum=r),-1/0!=n&&(c.maximum=n+.1*(n-r)),r==n&&(--c.minimum,c.maximum+=1),void 0!==e.minimum&&(c.minimum=e.minimum),void 0!==e.maximum&&(c.maximum=e.maximum),c.zoom(0,s.length-1),(f=e.unselectedGraph).id=d.id,f.bcn="scrollbar-graph-",f.rotate=h,f.chart=i,f.data=s,f.valueAxis=c,f.chart=d.chart,f.categoryAxis=e.categoryAxis,f.periodSpan=d.periodSpan,f.valueField=d.valueField,f.openField=d.openField,f.closeField=d.closeField,f.highField=d.highField,f.lowField=d.lowField,f.lineAlpha=e.graphLineAlpha,f.lineColorR=e.graphLineColor,f.fillAlphas=e.graphFillAlpha,f.fillColorsR=e.graphFillColor,f.connect=d.connect,f.hidden=d.hidden,f.width=o,f.height=l,f.pointPosition=d.pointPosition,f.stepDirection=d.stepDirection,f.periodSpan=d.periodSpan,(p=e.selectedGraph).id=d.id,p.bcn=f.bcn+"selected-",p.rotate=h,p.chart=i,p.data=s,p.valueAxis=c,p.chart=d.chart,p.categoryAxis=a,p.periodSpan=d.periodSpan,p.valueField=d.valueField,p.openField=d.openField,p.closeField=d.closeField,p.highField=d.highField,p.lowField=d.lowField,p.lineAlpha=e.selectedGraphLineAlpha,p.lineColorR=e.selectedGraphLineColor,p.fillAlphas=e.selectedGraphFillAlpha,p.fillColorsR=e.selectedGraphFillColor,p.connect=d.connect,p.hidden=d.hidden,p.width=o,p.height=l,p.pointPosition=d.pointPosition,p.stepDirection=d.stepDirection,p.periodSpan=d.periodSpan,(i=e.graphType)||(i=d.type)
f.type=i,p.type=i,s=s.length-1,f.zoom(0,s),p.zoom(0,s),p.set.click(function(){e.handleBackgroundClick()}).mouseover(function(){e.handleMouseOver()}).mouseout(function(){e.handleMouseOut()}),f.set.click(function(){e.handleBackgroundClick()}).mouseover(function(){e.handleMouseOver()}).mouseout(function(){e.handleMouseOut()}),u.push(f.set),u.push(p.set)}u.push(a.set),u.push(a.labelsSet),e.bg.toBack(),e.invisibleBg.toFront(),e.dragger.toFront(),e.iconLeft.toFront(),e.iconRight.toFront()}},timeZoom:function(e,i,s){this.startTime=e,this.endTime=i,this.timeDifference=i-e,this.skipEvent=!t.toBoolean(s),this.zoomScrollbar(),this.dispatchScrollbarEvent()},zoom:function(t,e){this.start=t,this.end=e,this.skipEvent=!0,this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.categoryAxis&&"ValueAxis"==this.categoryAxis.cname)t.ChartScrollbar.base.dispatchScrollbarEvent.call(this)
else if(this.skipEvent)this.skipEvent=!1
else{var e,i,s=this.chart.chartData
e=(r=this.dragger.getBBox()).x
var a=r.y,h=r.width,r=r.height,n=this.chart
this.rotate?(e=a,i=r):i=h,(h={type:"zoomed",target:this}).chart=n
var o=this.categoryAxis,l=this.stepWidth,d=(a=n.minSelectedTime,r=n.maxSelectedTime,!1)
o.parseDates&&!o.equalSpacing?(s=n.lastTime,n=n.firstTime,(o=Math.round(e/l)+n)>(e=this.dragging?o+this.timeDifference:Math.round((e+i)/l)+n)&&(o=e),0<a&&e-o<a&&(o=(e=Math.round(o+(e-o)/2))-(d=Math.round(a/2)),e+=d,d=!0),0<r&&e-o>r&&(o=(e=Math.round(o+(e-o)/2))-(d=Math.round(r/2)),e+=d,d=!0),e>s&&(e=s),e-a<o&&(o=e-a),o<n&&(o=n),o+a>e&&(e=o+a),(o!=this.startTime||e!=this.endTime)&&(this.startTime=o,this.endTime=e,h.start=o,h.end=e,h.startDate=new Date(o),h.endDate=new Date(e),this.fire(h))):(o.startOnAxis||(e+=l/2),i-=this.stepWidth/2,a=o.xToIndex(e),e=o.getCoordinate(a)-this.stepWidth/2,e=o.xToIndex(e+i),a==this.start&&this.end==e||(o.startOnAxis&&(this.resizingRight&&a==e&&e++,this.resizingLeft&&a==e&&(0<a?a--:e=1)),this.start=a,this.end=this.dragging?this.start+this.difference:e,h.start=this.start,h.end=this.end,o.parseDates&&(s[this.start]&&(h.startDate=new Date(s[this.start].time)),s[this.end]&&(h.endDate=new Date(s[this.end].time))),this.fire(h)),this.percentStart=a,this.percentEnd=e),d&&this.zoomScrollbar(!0)}},zoomScrollbar:function(t){if((!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)||t)&&this.dragger&&this.enabled){var e,i,s=this.chart
t=s.chartData
var a=this.categoryAxis
a.parseDates&&!a.equalSpacing?(t=a.stepWidth,i=s.firstTime,e=t*(this.startTime-i),i=t*(this.endTime-i)):(t[this.start]&&(e=t[this.start].x[a.id]),t[this.end]&&(i=t[this.end].x[a.id]),t=a.stepWidth,a.startOnAxis||(e-=s=t/2,i+=s)),this.stepWidth=t,isNaN(e)||isNaN(i)||this.updateScrollbarSize(e,i)}},maskGraphs:function(t,e,i,s){var a=this.selectedGraph
a&&a.set.clipRect(t,e,i,s)},handleDragStart:function(){t.ChartScrollbar.base.handleDragStart.call(this),this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){t.ChartScrollbar.base.handleBackgroundClick.call(this),this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}})}(),function(){var t=window.AmCharts
t.AmBalloon=t.Class({construct:function(e){this.cname="AmBalloon",this.enabled=!0,this.fillColor="#FFFFFF",this.fillAlpha=.8,this.borderThickness=2,this.borderColor="#FFFFFF",this.borderAlpha=1,this.cornerRadius=0,this.maxWidth=220,this.horizontalPadding=8,this.verticalPadding=4,this.pointerWidth=6,this.pointerOrientation="V",this.color="#000000",this.adjustBorderColor=!0,this.show=this.follow=this.showBullet=!1,this.bulletSize=3,this.shadowAlpha=.4,this.shadowColor="#000000",this.fadeOutDuration=this.animationDuration=.3,this.fixedPosition=!0,this.offsetY=6,this.offsetX=1,this.textAlign="center",this.disableMouseEvents=!0,this.deltaSignX=this.deltaSignY=1,t.isModern||(this.offsetY*=1.5),this.sdy=this.sdx=0,t.applyTheme(this,e,this.cname)},draw:function(){var e=this.pointToX,i=this.pointToY
t.isModern||(this.drop=!1)
var s=this.chart
if(t.VML&&(this.fadeOutDuration=0),this.xAnim&&s.stopAnim(this.xAnim),this.yAnim&&s.stopAnim(this.yAnim),this.sdy=this.sdx=0,!isNaN(e)){var a=this.follow,h=s.container,r=this.set
if(t.remove(r),this.removeDiv(),(r=h.set()).node.style.pointerEvents="none",this.set=r,this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):s.balloonsSet.push(r),this.show){var n=this.l,o=this.t,l=this.r,d=this.b,u=this.balloonColor,c=this.fillColor,p=this.borderColor,m=c
void 0!=u&&(this.adjustBorderColor?m=p=u:c=u)
var f=this.horizontalPadding,g=this.verticalPadding,v=this.pointerWidth,b=this.pointerOrientation,x=this.cornerRadius,N=s.fontFamily
void 0==(D=this.fontSize)&&(D=s.fontSize)
u=document.createElement("div")
var C=s.classNamePrefix
u.className=C+"-balloon-div",this.className&&(u.className=u.className+" "+C+"-balloon-div-"+this.className),C=u.style,this.disableMouseEvents&&(C.pointerEvents="none"),C.position="absolute"
var y=this.minWidth,w=document.createElement("div")
u.appendChild(w)
var M=w.style
isNaN(y)||(M.minWidth=y-2*f+"px"),M.textAlign=this.textAlign,M.maxWidth=this.maxWidth+"px",M.fontSize=D+"px",M.color=this.color,M.fontFamily=N,w.innerHTML=this.text,s.chartDiv.appendChild(u),this.textDiv=u
M=u.offsetWidth
var A=u.offsetHeight
u.clientHeight&&(M=u.clientWidth,A=u.clientHeight),N=A+2*g,w=M+2*f,!isNaN(y)&&w<y&&(w=y),window.opera&&(N+=2)
var S=!1,D=this.offsetY
s.handDrawn&&(D+=s.handDrawScatter+2),"H"!=b?(y=e-w/2,i<o+N+10&&"down"!=b?(S=!0,a&&(i+=D),D=i+v,this.deltaSignY=-1):(a&&(i-=D),D=i-N-v,this.deltaSignY=1)):(2*v>N&&(v=N/2),D=i-N/2,e<n+(l-n)/2?(y=e+v,this.deltaSignX=-1):(y=e-w-v,this.deltaSignX=1)),D+N>=d&&(D=d-N),D<o&&(D=o),y<n&&(y=n),y+w>l&&(y=l-w)
o=D+g,d=y+f
var L,T=this.shadowAlpha,k=this.shadowColor,B=(f=this.borderThickness,this.bulletSize),R=(g=this.fillAlpha,this.borderAlpha)
this.showBullet&&(L=t.circle(h,B,m,g),r.push(L)),this.drop?(n=w/1.6,l=0,"V"==b&&(b="down"),"H"==b&&(b="left"),"down"==b&&(y=e+1,D=i-n-n/3),"up"==b&&(l=180,y=e+1,D=i+n+n/3),"left"==b&&(l=270,y=e+n+n/3+2,D=i),"right"==b&&(l=90,y=e-n-n/3+2,D=i),o=D-A/2+1,d=y-M/2-1,c=t.drop(h,n,l,c,g,f,p,R)):0<x||0===v?(0<T&&(e=t.rect(h,w,N,c,0,f+1,k,T,x),t.isModern?e.translate(1,1):e.translate(4,4),r.push(e)),c=t.rect(h,w,N,c,g,f,p,R,x)):(m=[],x=[],"H"!=b?((n=e-y)>w-v&&(n=w-v),n<v&&(n=v),m=[0,n-v,e-y,n+v,w,w,0,0],x=S?[0,0,i-D,0,0,N,N,0]:[N,N,i-D,N,N,0,0,N]):((b=i-D)>N-v&&(b=N-v),b<v&&(b=v),x=[0,b-v,i-D,b+v,N,N,0,0],m=e<n+(l-n)/2?[0,0,y<e?0:e-y,0,0,w,w,0]:[w,w,y+w>e?w:e-y,w,w,0,0,w]),0<T&&((e=t.polygon(h,m,x,c,0,f,k,T)).translate(1,1),r.push(e)),c=t.polygon(h,m,x,c,g,f,p,R)),this.bg=c,r.push(c),c.toFront(),t.setCN(s,c,"balloon-bg"),this.className&&t.setCN(s,c,"balloon-bg-"+this.className),h=1*this.deltaSignX,d+=this.sdx,o+=this.sdy,C.left=d+"px",C.top=o+"px",r.translate(y-h,D,1,!0),c=c.getBBox(),this.bottom=D+N+1,this.yPos=c.y+D,L&&L.translate(this.pointToX-y+h,i-D),i=this.animationDuration,0<this.animationDuration&&!a&&!isNaN(this.prevX)&&(r.translate(this.prevX,this.prevY,NaN,!0),r.animate({translate:y-h+","+D},i,"easeOutSine"),u&&(C.left=this.prevTX+"px",C.top=this.prevTY+"px",this.xAnim=s.animate({node:u},"left",this.prevTX,d,i,"easeOutSine","px"),this.yAnim=s.animate({node:u},"top",this.prevTY,o,i,"easeOutSine","px"))),this.prevX=y-h,this.prevY=D,this.prevTX=d,this.prevTY=o}}},fixPrevious:function(){this.rPrevX=this.prevX,this.rPrevY=this.prevY,this.rPrevTX=this.prevTX,this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX,this.prevY=this.rPrevY,this.prevTX=this.rPrevTX,this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var t=this.chart.mouseX-this.offsetX*this.deltaSignX-this.sdx,e=this.chart.mouseY-this.sdy
if(this.pointToX=t,this.pointToY=e,t!=this.previousX||e!=this.previousY)if(this.previousX=t,this.previousY=e,0===this.cornerRadius)this.draw()
else{var i=this.set
if(i){var s=i.getBBox(),a=(t=t-s.width/2,e-s.height-10)
t<this.l&&(t=this.l),t>this.r-s.width&&(t=this.r-s.width),a<this.t&&(a=e+10),i.translate(t,a),(e=this.textDiv.style).left=t+this.horizontalPadding+"px",e.top=a+this.verticalPadding+"px"}}}},changeColor:function(t){this.balloonColor=t},setBounds:function(t,e,i,s){this.l=t,this.t=e,this.r=i,this.b=s,this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(t){(this.text!=t||this.positionChanged)&&(this.text=t,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),t=this.chart,this.fadeAnim1&&t.stopAnim(this.fadeAnim1),this.fadeAnim2&&t.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1)},hide:function(t){var e=this
e.text=void 0,isNaN(t)&&(t=e.fadeOutDuration)
var i=e.chart
if(0<t&&!e.isHiding){e.isHiding=!0,e.destroyTO&&clearTimeout(e.destroyTO),e.destroyTO=setTimeout(function(){e.destroy.call(e)},1e3*t),e.follow=!1,e.show=!1
var s=e.set
s&&(s.setAttr("opacity",e.fillAlpha),e.fadeAnim1=s.animate({opacity:0},t,"easeInSine")),e.textDiv&&(e.fadeAnim2=i.animate({node:e.textDiv},"opacity",1,0,t,"easeInSine",""))}else e.show=!1,e.follow=!1,e.destroy()},setPosition:function(t,e){t==this.pointToX&&e==this.pointToY||(this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=t,this.pointToY=e,this.positionChanged=!0)},followCursor:function(t){var e=this
e.follow=t,clearInterval(e.interval)
var i=e.chart.mouseX-e.sdx,s=e.chart.mouseY-e.sdy
!isNaN(i)&&t&&(e.pointToX=i-e.offsetX*e.deltaSignX,e.pointToY=s,e.followMouse(),e.interval=setInterval(function(){e.followMouse.call(e)},40))},removeDiv:function(){if(this.textDiv){var t=this.textDiv.parentNode
t&&t.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval),t.remove(this.set),this.removeDiv(),this.set=null}})}(),function(){var t=window.AmCharts
t.AmCoordinateChart=t.Class({inherits:t.AmChart,construct:function(e){t.AmCoordinateChart.base.construct.call(this,e),this.theme=e,this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph"),this.startAlpha=1,this.startDuration=0,this.startEffect="elastic",this.sequencedAnimation=!0,this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" "),this.balloonDateFormat="MMM DD, YYYY",this.valueAxes=[],this.graphs=[],this.guides=[],this.gridAboveGraphs=!1,t.applyTheme(this,e,"AmCoordinateChart")},initChart:function(){t.AmCoordinateChart.base.initChart.call(this),this.drawGraphs=!0
var e=this.categoryAxis
e&&(this.categoryAxis=t.processObject(e,t.CategoryAxis,this.theme)),this.processValueAxes(),this.createValueAxes(),this.processGraphs(),this.processGuides(),t.VML&&(this.startAlpha=1),this.setLegendData(this.graphs),this.gridAboveGraphs&&(this.gridSet.toFront(),this.bulletSet.toFront(),this.balloonsSet.toFront())},createValueAxes:function(){if(0===this.valueAxes.length){var e=new t.ValueAxis
this.addValueAxis(e)}},parseData:function(){this.processValueAxes(),this.processGraphs()},parseSerialData:function(t){if(this.chartData=[],t)if(0<this.processTimeout){1>this.processCount&&(this.processCount=1)
var e=t.length/this.processCount
this.parseCount=Math.ceil(e)-1
for(var i=0;i<e;i++)this.delayParseSerialData(t,i)}else this.parseCount=0,this.parsePartSerialData(t,0,t.length,0)
else this.onDataUpdated()},delayParseSerialData:function(t,e){var i=this,s=i.processCount
setTimeout(function(){i.parsePartSerialData.call(i,t,e*s,(e+1)*s,e)},i.processTimeout)},parsePartSerialData:function(e,i,s,a){s>e.length&&(s=e.length)
var h=this.graphs,r={},n=this.seriesIdField
n||(n=this.categoryField)
var o,l,d,u,c=!1,p=this.categoryAxis
p&&(c=p.parseDates,l=p.forceShowField,u=p.classNameField,d=p.labelColorField,o=p.categoryFunction)
var m,f,g,v={}
c&&(f=(m=t.extractPeriod(p.minPeriod)).period,m=m.count,g=t.getPeriodDuration(f,m))
var b={}
this.lookupTable=b
var x,N=this.dataDateFormat,C={}
for(x=i;x<s;x++){var y={},w=e[x]
if(i=w[this.categoryField],y.dataContext=w,y.category=o?o(i,w,p):String(i),l&&(y.forceShow=w[l]),u&&(y.className=w[u]),d&&(y.labelColor=w[d]),b[w[n]]=y,!c||(p.categoryFunction?i=p.categoryFunction(i,w,p):(!N||i instanceof Date||(i=i.toString()+" |"),i=t.getDate(i,N,p.minPeriod)),i=t.resetDateToMin(i,f,m,p.firstDayOfWeek),y.category=i,y.time=i.getTime(),!isNaN(y.time))){var M,A=this.valueAxes
for(y.axes={},y.x={},M=0;M<A.length;M++){var S,D=A[M].id
for(y.axes[D]={},y.axes[D].graphs={},S=0;S<h.length;S++){var L=(i=h[S]).id,T=1.1
isNaN(i.gapPeriod)||(T=i.gapPeriod)
var k=i.periodValue
if(i.valueAxis.id==D){y.axes[D].graphs[L]={}
var B={}
B.index=x
var R=w
if(i.dataProvider&&(R=r),B.values=this.processValues(R,i,k),!i.connect||i.forceGap&&!isNaN(i.gapPeriod))if(C&&C[L]&&0<T&&y.time-v[L]>=g*T&&(C[L].gap=!0),i.forceGap){var O
T=0
for(O in B.values)T++
0<T&&(v[L]=y.time,C[L]=B)}else v[L]=y.time,C[L]=B
this.processFields(i,B,R),B.category=y.category,B.serialDataItem=y,B.graph=i,y.axes[D].graphs[L]=B}}}this.chartData[x]=y}}if(this.parseCount==a){for(e=0;e<h.length;e++)i=h[e],i.dataProvider&&this.parseGraphData(i)
this.dataChanged=!1,this.dispatchDataUpdated=!0,this.onDataUpdated()}},processValues:function(e,i,s){var a,h={},r=!1
"candlestick"!=i.type&&"ohlc"!=i.type||""===s||(r=!0)
for(var n="value error open close low high".split(" "),o=0;o<n.length;o++){var l=n[o]
"value"!=l&&"error"!=l&&r&&(s=l.charAt(0).toUpperCase()+l.slice(1))
var d=e[i[l+"Field"]+s]
null!==d&&(a=Number(d),isNaN(a)||(h[l]=a),"date"==i.valueAxis.type&&void 0!==d&&(a=t.getDate(d,i.chart.dataDateFormat),h[l]=a.getTime()))}return h},parseGraphData:function(t){var e,i=t.dataProvider,s=t.seriesIdField
for(s||(s=this.seriesIdField),s||(s=this.categoryField),e=0;e<i.length;e++){var a=i[e],h=this.lookupTable[String(a[s])],r=t.valueAxis.id
h&&((r=h.axes[r].graphs[t.id]).serialDataItem=h,r.values=this.processValues(a,t,t.periodValue),this.processFields(t,r,a))}},addValueAxis:function(t){t.chart=this,this.valueAxes.push(t),this.validateData()},removeValueAxesAndGraphs:function(){var t,e=this.valueAxes
for(t=e.length-1;-1<t;t--)this.removeValueAxis(e[t])},removeValueAxis:function(t){var e,i=this.graphs
for(e=i.length-1;0<=e;e--){var s=i[e]
s&&s.valueAxis==t&&this.removeGraph(s)}for(e=(i=this.valueAxes).length-1;0<=e;e--)i[e]==t&&i.splice(e,1)
this.validateData()},addGraph:function(t){this.graphs.push(t),this.chooseGraphColor(t,this.graphs.length-1),this.validateData()},removeGraph:function(t){var e,i=this.graphs
for(e=i.length-1;0<=e;e--)i[e]==t&&(i.splice(e,1),t.destroy())
this.validateData()},handleValueAxisZoom:function(){},processValueAxes:function(){var e,i=this.valueAxes
for(e=0;e<i.length;e++){var s=i[e]
s=t.processObject(s,t.ValueAxis,this.theme)
i[e]=s,s.chart=this,s.init(),this.listenTo(s,"axisIntZoomed",this.handleValueAxisZoom),s.id||(s.id="valueAxisAuto"+e+"_"+(new Date).getTime()),void 0===s.usePrefixes&&(s.usePrefixes=this.usePrefixes)}},processGuides:function(){var e=this.guides,i=this.categoryAxis
if(e)for(var s=0;s<e.length;s++){var a=e[s];(void 0!==a.category||void 0!==a.date)&&i&&i.addGuide(a),a.id||(a.id="guideAuto"+s+"_"+(new Date).getTime())
var h=a.valueAxis
h?(t.isString(h)&&(h=this.getValueAxisById(h)),h?h.addGuide(a):this.valueAxes[0].addGuide(a)):isNaN(a.value)||this.valueAxes[0].addGuide(a)}},processGraphs:function(){var e,i=this.graphs
for(this.graphsById={},e=0;e<i.length;e++){var s=i[e]
s=t.processObject(s,t.AmGraph,this.theme)
i[e]=s,this.chooseGraphColor(s,e),s.chart=this,s.init(),t.isString(s.valueAxis)&&(s.valueAxis=this.getValueAxisById(s.valueAxis)),s.valueAxis||(s.valueAxis=this.valueAxes[0]),s.id||(s.id="graphAuto"+e+"_"+(new Date).getTime()),this.graphsById[s.id]=s}},formatString:function(e,i,s){var a=i.graph,h=a.valueAxis
if(h.duration&&h.maxInterval&&i.values.value){var r=h.numberFormatter
r||(r=chart.nf),h=t.formatDuration(i.values.value,h.duration,"",h.durationUnits,h.maxInterval,r),e=e.split("[[value]]").join(h)}return e=t.massReplace(e,{"[[title]]":a.title,"[[description]]":i.description}),e=s?t.fixNewLines(e):t.fixBrakes(e),t.cleanFromEmpty(e)},getBalloonColor:function(e,i,s){var a=e.lineColor,h=e.balloonColor
return s&&(h=a),"object"==typeof(s=e.fillColorsR)?a=s[0]:void 0!==s&&(a=s),i.isNegative&&(s=e.negativeLineColor,"object"==typeof(e=e.negativeFillColors)?s=e[0]:void 0!==e&&(s=e),void 0!==s&&(a=s)),void 0!==i.color&&(a=i.color),void 0!==i.lineColor&&(a=i.lineColor),void 0!==(i=i.fillColors)&&(a=i,t.ifArray(i)&&(a=i[0])),void 0===h&&(h=a),h},getGraphById:function(e){return t.getObjById(this.graphs,e)},getValueAxisById:function(e){return t.getObjById(this.valueAxes,e)},processFields:function(e,i,s){if(e.itemColors){var a=e.itemColors,h=i.index
i.color=h<a.length?a[h]:t.randomColor()}for(a="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" "),h=0;h<a.length;h++){var r=a[h],n=e[r+"Field"]
n&&(n=s[n],t.isDefined(n)&&(i[r]=n))}i.dataContext=s},chooseGraphColor:function(e,i){var s
e.lineColor?e.lineColorR=e.lineColor:(s=this.colors.length>i?this.colors[i]:e.lineColorR?e.lineColorR:t.randomColor(),e.lineColorR=s)
e.fillColorsR=e.fillColors?e.fillColors:e.lineColorR,e.bulletBorderColorR=e.bulletBorderColor?e.bulletBorderColor:e.useLineColorForBulletBorder?e.lineColorR:e.bulletColor,e.bulletColorR=e.bulletColor?e.bulletColor:e.lineColorR,(s=this.patterns)&&(e.pattern=s[i])},handleLegendEvent:function(t){var e=t.type
if(t=t.dataItem){var i=t.hidden,s=t.showBalloon
switch(e){case"clickMarker":this.textClickEnabled&&(s?this.hideGraphsBalloon(t):this.showGraphsBalloon(t))
break
case"clickLabel":s?this.hideGraphsBalloon(t):this.showGraphsBalloon(t)
break
case"rollOverItem":i||this.highlightGraph(t)
break
case"rollOutItem":i||this.unhighlightGraph()
break
case"hideItem":this.hideGraph(t)
break
case"showItem":this.showGraph(t)}}},highlightGraph:function(t){var e=this.graphs
if(e){var i,s=.2
if(this.legend&&(s=this.legend.rollOverGraphAlpha),1!=s)for(i=0;i<e.length;i++){var a=e[i]
a!=t&&a.changeOpacity(s)}}},unhighlightGraph:function(){var t,e
if(this.legend&&(t=this.legend.rollOverGraphAlpha),1!=t)for(t=this.graphs,e=0;e<t.length;e++)t[e].changeOpacity(1)},showGraph:function(t){t.switchable&&(t.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(t){t.switchable&&(this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),t.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(t){t.showBalloon=!1,this.updateLegend()},showGraphsBalloon:function(t){t.showBalloon=!0,this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){this.animatable=[]
var t,e=this.graphs
if(e)for(t=0;t<e.length;t++)e[t].animationPlayed=!1},animateAgain:function(){this.resetAnimation(),this.validateNow()}})}(),function(){var t=window.AmCharts
t.TrendLine=t.Class({construct:function(e){this.cname="TrendLine",this.createEvents("click","rollOver","rollOut"),this.isProtected=!1,this.dashLength=0,this.lineColor="#00CC00",this.lineThickness=this.lineAlpha=1,t.applyTheme(this,e,this.cname)},draw:function(){var e=this
e.destroy()
var i,s,a,h,r=e.chart,n=r.container,o=e.categoryAxis,l=e.initialDate,d=e.initialCategory,u=e.finalDate,c=e.finalCategory,p=e.valueAxis,m=e.valueAxisX,f=e.initialXValue,g=e.finalXValue,v=e.initialValue,b=e.finalValue,x=p.recalculateToPercents,N=r.dataDateFormat
o&&(l&&(l=t.getDate(l,N,"fff"),e.initialDate=l,i=o.dateToCoordinate(l)),d&&(i=o.categoryToCoordinate(d)),u&&(u=t.getDate(u,N,"fff"),e.finalDate=u,s=o.dateToCoordinate(u)),c&&(s=o.categoryToCoordinate(c))),m&&!x&&(isNaN(f)||(i=m.getCoordinate(f)),isNaN(g)||(s=m.getCoordinate(g))),p&&!x&&(isNaN(v)||(a=p.getCoordinate(v)),isNaN(b)||(h=p.getCoordinate(b))),isNaN(i)||isNaN(s)||isNaN(a)||isNaN(a)||(r.rotate?(o=[a,h],h=[i,s]):(o=[i,s],h=[a,h]),a=t.line(n,o,h,e.lineColor,e.lineAlpha,e.lineThickness,e.dashLength),i=o,s=h,u=o[1]-o[0],c=h[1]-h[0],0===u&&(u=.01),0===c&&(c=.01),l=u/Math.abs(u),d=c/Math.abs(c),c=90*Math.PI/180-Math.asin(u/(u*c/Math.abs(u*c)*Math.sqrt(Math.pow(u,2)+Math.pow(c,2)))),u=Math.abs(5*Math.cos(c)),c=Math.abs(5*Math.sin(c)),i.push(o[1]-l*c,o[0]-l*c),s.push(h[1]+d*u,h[0]+d*u),h=t.polygon(n,i,s,"#ffffff",.005,0),(n=n.set([h,a])).translate(r.marginLeftReal,r.marginTopReal),r.trendLinesSet.push(n),t.setCN(r,a,"trend-line"),t.setCN(r,a,"trend-line-"+e.id),e.line=a,e.set=n,(a=e.initialImage)&&((a=t.processObject(a,t.Image,e.theme)).chart=r,a.draw(),a.translate(i[0]+a.offsetX,s[0]+a.offsetY),n.push(a.set)),(a=e.finalImage)&&((a=t.processObject(a,t.Image,e.theme)).chart=r,a.draw(),a.translate(i[1]+a.offsetX,s[1]+a.offsetY),n.push(a.set)),n.mouseup(function(){e.handleLineClick()}).mouseover(function(){e.handleLineOver()}).mouseout(function(){e.handleLineOut()}),n.touchend&&n.touchend(function(){e.handleLineClick()}),n.clipRect(0,0,r.plotAreaWidth,r.plotAreaHeight))},handleLineClick:function(){this.fire({type:"click",trendLine:this,chart:this.chart})},handleLineOver:function(){var t=this.rollOverColor
void 0!==t&&this.line.attr({stroke:t}),this.balloonText&&(clearTimeout(this.chart.hoverInt),t=this.line.getBBox(),this.chart.showBalloon(this.balloonText,this.lineColor,!0,this.x+t.x+t.width/2,this.y+t.y+t.height/2)),this.fire({type:"rollOver",trendLine:this,chart:this.chart})},handleLineOut:function(){this.line.attr({stroke:this.lineColor}),this.balloonText&&this.chart.hideBalloon(),this.fire({type:"rollOut",trendLine:this,chart:this.chart})},destroy:function(){t.remove(this.set)}})}(),function(){var t=window.AmCharts
t.Image=t.Class({construct:function(e){this.cname="Image",this.height=this.width=20,this.rotation=this.offsetY=this.offsetX=0,this.balloonColor=this.color="#000000",this.opacity=1,t.applyTheme(this,e,this.cname)},draw:function(){var t=this
t.set&&t.set.remove()
var e,i,s=t.chart.container
t.set=s.set(),t.url?(e=s.image(t.url,0,0,t.width,t.height),i=1):t.svgPath&&((e=s.path(t.svgPath)).setAttr("fill",t.color),e.setAttr("stroke",t.outlineColor),s=e.getBBox(),i=Math.min(t.width/s.width,t.height/s.height)),e&&(e.setAttr("opacity",t.opacity),t.set.rotate(t.rotation),e.translate(-t.width/2,-t.height/2,i),t.balloonText&&e.mouseover(function(){t.chart.showBalloon(t.balloonText,t.balloonColor,!0)}).mouseout(function(){t.chart.hideBalloon()}).touchend(function(){t.chart.hideBalloon()}).touchstart(function(){t.chart.showBalloon(t.balloonText,t.balloonColor,!0)}),t.set.push(e))},translate:function(t,e){this.set&&this.set.translate(t,e)}})}(),function(){var t=window.AmCharts
t.circle=function(e,i,s,a,h,r,n,o,l){return 0>=i&&(i=.001),void 0!=h&&0!==h||(h=.01),void 0===r&&(r="#000000"),void 0===n&&(n=0),a={fill:s,stroke:r,"fill-opacity":a,"stroke-width":h,"stroke-opacity":n},e=isNaN(l)?e.circle(0,0,i).attr(a):e.ellipse(0,0,i,l).attr(a),o&&e.gradient("radialGradient",[s,t.adjustLuminosity(s,-.6)]),e},t.text=function(e,i,s,a,h,r,n,o){return r||(r="middle"),"right"==r&&(r="end"),"left"==r&&(r="start"),isNaN(o)&&(o=1),void 0!==i&&(i=String(i),t.isIE&&!t.isModern&&(i=(i=i.replace("&amp;","&")).replace("&","&amp;"))),s={fill:s,"font-family":a,"font-size":h+"px",opacity:o},!0===n&&(s["font-weight"]="bold"),s["text-anchor"]=r,e.text(i,s)},t.polygon=function(e,i,s,a,h,r,n,o,l,d,u){isNaN(r)&&(r=.01),isNaN(o)&&(o=h)
var c=a,p=!1
for("object"==typeof c&&1<c.length&&(p=!0,c=c[0]),void 0===n&&(n=c),h={fill:c,stroke:n,"fill-opacity":h,"stroke-width":r,"stroke-opacity":o},void 0!==u&&0<u&&(h["stroke-dasharray"]=u),u=t.dx,r=t.dy,e.handDrawn&&(i=(s=t.makeHD(i,s,e.handDrawScatter))[0],s=s[1]),n=Math.round,d&&(n=Number),o="M"+(n(i[0])+u)+","+(n(s[0])+r),c=1;c<i.length;c++)d&&(i[c]=t.roundTo(i[c],5),s[c]=t.roundTo(s[c],5)),o+=" L"+(n(i[c])+u)+","+(n(s[c])+r)
return e=e.path(o+" Z").attr(h),p&&e.gradient("linearGradient",a,l),e},t.rect=function(e,i,s,a,h,r,n,o,l,d,u){if(isNaN(i)||isNaN(s))return e.set()
isNaN(r)&&(r=0),void 0===l&&(l=0),void 0===d&&(d=270),isNaN(h)&&(h=0)
var c=a,p=!1
"object"==typeof c&&(c=c[0],p=!0),void 0===n&&(n=c),void 0===o&&(o=h),i=Math.round(i),s=Math.round(s)
var m=0,f=0
return 0>i&&(m=-(i=Math.abs(i))),0>s&&(f=-(s=Math.abs(s))),m+=t.dx,f+=t.dy,h={fill:c,stroke:n,"fill-opacity":h,"stroke-opacity":o},void 0!==u&&0<u&&(h["stroke-dasharray"]=u),e=e.rect(m,f,i,s,l,r).attr(h),p&&e.gradient("linearGradient",a,d),e},t.bullet=function(e,i,s,a,h,r,n,o,l,d,u,c,p){var m
switch("circle"==i&&(i="round"),i){case"round":m=t.circle(e,s/2,a,h,r,n,o)
break
case"square":m=t.polygon(e,[-s/2,s/2,s/2,-s/2],[s/2,s/2,-s/2,-s/2],a,h,r,n,o,d-180,void 0,p)
break
case"rectangle":m=t.polygon(e,[-s,s,s,-s],[s/2,s/2,-s/2,-s/2],a,h,r,n,o,d-180,void 0,p)
break
case"diamond":m=t.polygon(e,[-s/2,0,s/2,0],[0,-s/2,0,s/2],a,h,r,n,o)
break
case"triangleUp":m=t.triangle(e,s,0,a,h,r,n,o)
break
case"triangleDown":m=t.triangle(e,s,180,a,h,r,n,o)
break
case"triangleLeft":m=t.triangle(e,s,270,a,h,r,n,o)
break
case"triangleRight":m=t.triangle(e,s,90,a,h,r,n,o)
break
case"bubble":m=t.circle(e,s/2,a,h,r,n,o,!0)
break
case"line":m=t.line(e,[-s/2,s/2],[0,0],a,h,r,n,o)
break
case"yError":(m=e.set()).push(t.line(e,[0,0],[-s/2,s/2],a,h,r)),m.push(t.line(e,[-l,l],[-s/2,-s/2],a,h,r)),m.push(t.line(e,[-l,l],[s/2,s/2],a,h,r))
break
case"xError":(m=e.set()).push(t.line(e,[-s/2,s/2],[0,0],a,h,r)),m.push(t.line(e,[-s/2,-s/2],[-l,l],a,h,r)),m.push(t.line(e,[s/2,s/2],[-l,l],a,h,r))}return m&&m.pattern(u,NaN,c),m},t.triangle=function(t,e,i,s,a,h,r,n){var o
return void 0!==h&&0!==h||(h=1),void 0===r&&(r="#000"),void 0===n&&(n=0),s={fill:s,stroke:r,"fill-opacity":a,"stroke-width":h,"stroke-opacity":n},e/=2,0===i&&(o=" M"+-e+","+e+" L0,"+-e+" L"+e+","+e+" Z"),180==i&&(o=" M"+-e+","+-e+" L0,"+e+" L"+e+","+-e+" Z"),90==i&&(o=" M"+-e+","+-e+" L"+e+",0 L"+-e+","+e+" Z"),270==i&&(o=" M"+-e+",0 L"+e+","+e+" L"+e+","+-e+" Z"),t.path(o).attr(s)},t.line=function(e,i,s,a,h,r,n,o,l,d,u){if(e.handDrawn&&!u)return t.handDrawnLine(e,i,s,a,h,r,n,o,l,d,u)
for(r={fill:"none","stroke-width":r},void 0!==n&&0<n&&(r["stroke-dasharray"]=n),isNaN(h)||(r["stroke-opacity"]=h),a&&(r.stroke=a),a=Math.round,d&&(a=Number,i[0]=t.roundTo(i[0],5),s[0]=t.roundTo(s[0],5)),d=t.dx,h=t.dy,n="M"+(a(i[0])+d)+","+(a(s[0])+h),o=1;o<i.length;o++)i[o]=t.roundTo(i[o],5),s[o]=t.roundTo(s[o],5),n+=" L"+(a(i[o])+d)+","+(a(s[o])+h)
return t.VML?e.path(n,void 0,!0).attr(r):(l&&(n+=" M0,0 L0,0"),e.path(n).attr(r))},t.makeHD=function(t,e,i){for(var s=[],a=[],h=1;h<t.length;h++)for(var r=Number(t[h-1]),n=Number(e[h-1]),o=Number(t[h]),l=Number(e[h]),d=Math.round(Math.sqrt(Math.pow(o-r,2)+Math.pow(l-n,2))/50)+1,u=(o=(o-r)/d,l=(l-n)/d,0);u<=d;u++){var c=n+u*l+Math.random()*i
s.push(r+u*o+Math.random()*i),a.push(c)}return[s,a]},t.handDrawnLine=function(e,i,s,a,h,r,n,o,l,d){var u,c=e.set()
for(u=1;u<i.length;u++)for(var p=[i[u-1],i[u]],m=[s[u-1],s[u]],f=(m=t.makeHD(p,m,e.handDrawScatter),p=m[0],m=m[1],1);f<p.length;f++)c.push(t.line(e,[p[f-1],p[f]],[m[f-1],m[f]],a,h,r+Math.random()*e.handDrawThickness-e.handDrawThickness/2,n,o,l,d,!0))
return c},t.doNothing=function(t){return t},t.drop=function(t,e,i,s,a,h,r,n){var o=1/180*Math.PI,l=i-20,d=Math.sin(l*o)*e,u=Math.cos(l*o)*e,c=Math.sin((l+40)*o)*e,p=Math.cos((l+40)*o)*e,m=.8*e,f=-e/3,g=e/3
return 0===i&&(f=-f,g=0),180==i&&(g=0),90==i&&(f=0),270==i&&(f=0,g=-g),i={fill:s,stroke:r,"stroke-width":h,"stroke-opacity":n,"fill-opacity":a},e="M"+d+","+u+" A"+e+","+e+",0,1,1,"+c+","+p+" A"+m+","+m+",0,0,0,"+(Math.sin((l+20)*o)*e+g)+","+(Math.cos((l+20)*o)*e+f),e+=" A"+m+","+m+",0,0,0,"+d+","+u,t.path(e,void 0,void 0,"1000,1000").attr(i)},t.wedge=function(e,i,s,a,h,r,n,o,l,d,u,c,p,m){var f=Math.round
r=f(r)
var g=f((n=f(n))/r*(o=f(o))),v=t.VML
359.94<(C=359.5+r/100)&&(C=359.94),h>=C&&(h=C)
var b,x,N=1/180*Math.PI,C=i+Math.sin(a*N)*o,y=s-Math.cos(a*N)*g,w=i+Math.sin(a*N)*r,M=s-Math.cos(a*N)*n,A=i+Math.sin((a+h)*N)*r,S=s-Math.cos((a+h)*N)*n,D=i+Math.sin((a+h)*N)*o,L=(N=s-Math.cos((a+h)*N)*g,{fill:t.adjustLuminosity(d.fill,-.2),"stroke-opacity":0,"fill-opacity":d["fill-opacity"]}),T=0
if(180<Math.abs(h)&&(T=1),a=e.set(),v&&(C=f(10*C),w=f(10*w),A=f(10*A),D=f(10*D),y=f(10*y),M=f(10*M),S=f(10*S),N=f(10*N),i=f(10*i),l=f(10*l),s=f(10*s),r*=10,n*=10,o*=10,g*=10,1>Math.abs(h)&&1>=Math.abs(A-w)&&1>=Math.abs(S-M)&&(b=!0)),h="",c&&(L["fill-opacity"]=0,L["stroke-opacity"]=d["stroke-opacity"]/2,L.stroke=d.stroke),0<l){x=" M"+C+","+(y+l)+" L"+w+","+(M+l),v?(b||(x+=" A"+(i-r)+","+(l+s-n)+","+(i+r)+","+(l+s+n)+","+w+","+(M+l)+","+A+","+(S+l)),x+=" L"+D+","+(N+l),0<o&&(b||(x+=" B"+(i-o)+","+(l+s-g)+","+(i+o)+","+(l+s+g)+","+D+","+(l+N)+","+C+","+(l+y)))):(x+=" A"+r+","+n+",0,"+T+",1,"+A+","+(S+l)+" L"+D+","+(N+l),0<o&&(x+=" A"+o+","+g+",0,"+T+",0,"+C+","+(y+l))),x+=" Z"
var k=l
v&&(k/=10)
for(var B=0;B<k;B+=10){var R=e.path(x,void 0,void 0,"1000,1000").attr(L)
a.push(R),R.translate(0,-B)}x=e.path(" M"+C+","+y+" L"+C+","+(y+l)+" L"+w+","+(M+l)+" L"+w+","+M+" L"+C+","+y+" Z",void 0,void 0,"1000,1000").attr(L),l=e.path(" M"+A+","+S+" L"+A+","+(S+l)+" L"+D+","+(N+l)+" L"+D+","+N+" L"+A+","+S+" Z",void 0,void 0,"1000,1000").attr(L),a.push(x),a.push(l)}if(v?(b||(h=" A"+f(i-r)+","+f(s-n)+","+f(i+r)+","+f(s+n)+","+f(w)+","+f(M)+","+f(A)+","+f(S)),n=" M"+f(C)+","+f(y)+" L"+f(w)+","+f(M)+h+" L"+f(D)+","+f(N)):n=" M"+C+","+y+" L"+w+","+M+" A"+r+","+n+",0,"+T+",1,"+A+","+S+" L"+D+","+N,0<o&&(v?b||(n+=" B"+(i-o)+","+(s-g)+","+(i+o)+","+(s+g)+","+D+","+N+","+C+","+y):n+=" A"+o+","+g+",0,"+T+",0,"+C+","+y),e.handDrawn&&(o=t.line(e,[C,w],[y,M],d.stroke,d.thickness*Math.random()*e.handDrawThickness,d["stroke-opacity"]),a.push(o)),e=e.path(n+" Z",void 0,void 0,"1000,1000").attr(d),u){for(o=[],g=0;g<u.length;g++)o.push(t.adjustLuminosity(d.fill,u[g]))
"radial"!=m||t.isModern||(o=[]),0<o.length&&e.gradient(m+"Gradient",o)}return t.isModern&&"radial"==m&&e.grad&&(e.grad.setAttribute("gradientUnits","userSpaceOnUse"),e.grad.setAttribute("r",r),e.grad.setAttribute("cx",i),e.grad.setAttribute("cy",s)),e.pattern(c,NaN,p),a.wedge=e,a.push(e),a},t.rgb2hex=function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""},t.adjustLuminosity=function(e,i){e&&-1!=e.indexOf("rgb")&&(e=t.rgb2hex(e)),6>(e=String(e).replace(/[^0-9a-f]/gi,"")).length&&(e=String(e[0])+String(e[0])+String(e[1])+String(e[1])+String(e[2])+String(e[2])),i=i||0
var s,a,h="#"
for(a=0;3>a;a++)s=parseInt(e.substr(2*a,2),16),s=Math.round(Math.min(Math.max(0,s+s*i),255)).toString(16),h+=("00"+s).substr(s.length)
return h}}(),function(){var t=window.AmCharts
t.Bezier=t.Class({construct:function(e,i,s,a,h,r,n,o,l,d,u){var c,p,m=e.chart,f=t.bezierX,g=t.bezierY
for(isNaN(m.bezierX)||(f=m.bezierX),isNaN(m.bezierY)||(g=m.bezierY),isNaN(f)&&(m.rotate?(f=20,g=4):(g=20,f=4)),"object"==typeof n&&1<n.length&&(p=!0,c=n,n=n[0]),"object"==typeof o&&(o=o[0]),0===o&&(n="none"),r={fill:n,"fill-opacity":o,"stroke-width":r},void 0!==l&&0<l&&(r["stroke-dasharray"]=l),isNaN(h)||(r["stroke-opacity"]=h),a&&(r.stroke=a),a="M"+Math.round(i[0])+","+Math.round(s[0])+" ",h=[],l=0;l<i.length;l++)isNaN(i[l])||isNaN(s[l])?(a+=this.drawSegment(h,f,g),l<i.length-1&&(a+="L"+i[l+1]+","+s[l+1]+" "),h=[]):h.push({x:Number(i[l]),y:Number(s[l])})
a+=this.drawSegment(h,f,g),d&&(a+=d),this.path=e.path(a).attr(r),this.node=this.path.node,p&&this.path.gradient("linearGradient",c,u)},drawSegment:function(t,e,i){var s=""
if(2<t.length)for(var a=0;a<t.length-1;a++){var h=[],r=t[a-1],n=t[a],o=t[a+1],l=t[a+2]
0===a?(h.push({x:n.x,y:n.y}),h.push({x:n.x,y:n.y}),h.push({x:o.x,y:o.y}),h.push({x:l.x,y:l.y})):a>=t.length-2?(h.push({x:r.x,y:r.y}),h.push({x:n.x,y:n.y}),h.push({x:o.x,y:o.y}),h.push({x:o.x,y:o.y})):(h.push({x:r.x,y:r.y}),h.push({x:n.x,y:n.y}),h.push({x:o.x,y:o.y}),h.push({x:l.x,y:l.y})),r=[],n=Math.round,r.push({x:n(h[1].x),y:n(h[1].y)}),r.push({x:n((-h[0].x+e*h[1].x+h[2].x)/e),y:n((-h[0].y+i*h[1].y+h[2].y)/i)}),r.push({x:n((h[1].x+e*h[2].x-h[3].x)/e),y:n((h[1].y+i*h[2].y-h[3].y)/i)}),r.push({x:n(h[2].x),y:n(h[2].y)}),s+="C"+r[1].x+","+r[1].y+","+r[2].x+","+r[2].y+","+r[3].x+","+r[3].y+" "}else 1<t.length&&(s+="L"+t[1].x+","+t[1].y)
return s}})}(),function(){var t=window.AmCharts
t.AmDraw=t.Class({construct:function(e,i,s,a){t.SVG_NS="http://www.w3.org/2000/svg",t.SVG_XLINK="http://www.w3.org/1999/xlink",t.hasSVG=!!document.createElementNS&&!!document.createElementNS(t.SVG_NS,"svg").createSVGRect,1>i&&(i=10),1>s&&(s=10),this.div=e,this.width=i,this.height=s,this.rBin=document.createElement("div"),t.hasSVG?(t.SVG=!0,i=this.createSvgElement("svg"),e.appendChild(i),this.container=i,this.addDefs(a),this.R=new t.SVGRenderer(this)):t.isIE&&t.VMLRenderer&&(t.VML=!0,t.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?((i=document.createStyleSheet()).addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),t.vmlStyleSheet=i):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=e,this.R=new t.VMLRenderer(this,a),this.R.disableSelection(e))},createSvgElement:function(e){return document.createElementNS(t.SVG_NS,e)},circle:function(e,i,s,a){var h=new t.AmDObject("circle",this)
return h.attr({r:s,cx:e,cy:i}),this.addToContainer(h.node,a),h},ellipse:function(e,i,s,a,h){var r=new t.AmDObject("ellipse",this)
return r.attr({rx:s,ry:a,cx:e,cy:i}),this.addToContainer(r.node,h),r},setSize:function(t,e){0<t&&0<e&&(this.container.style.width=t+"px",this.container.style.height=e+"px")},rect:function(e,i,s,a,h,r,n){var o=new t.AmDObject("rect",this)
return t.VML&&(h=Math.round(100*h/Math.min(s,a)),s+=2*r,a+=2*r,o.bw=r,o.node.style.marginLeft=-r,o.node.style.marginTop=-r),1>s&&(s=1),1>a&&(a=1),o.attr({x:e,y:i,width:s,height:a,rx:h,ry:h,"stroke-width":r}),this.addToContainer(o.node,n),o},image:function(e,i,s,a,h,r){var n=new t.AmDObject("image",this)
return n.attr({x:i,y:s,width:a,height:h}),this.R.path(n,e),this.addToContainer(n.node,r),n},addToContainer:function(t,e){e||(e=this.container),e.appendChild(t)},text:function(t,e,i){return this.R.text(t,e,i)},path:function(e,i,s,a){var h=new t.AmDObject("path",this)
return a||(a="100,100"),h.attr({cs:a}),s?h.attr({dd:e}):h.attr({d:e}),this.addToContainer(h.node,i),h},set:function(t){return this.R.set(t)},remove:function(t){if(t){var e=this.rBin
e.appendChild(t),e.innerHTML=""}},renderFix:function(){var t=this.container,e=t.style
e.top="0px",e.left="0px"
try{var i=t.getBoundingClientRect(),s=i.left-Math.round(i.left),a=i.top-Math.round(i.top)
s&&(e.left=s+"px"),a&&(e.top=a+"px")}catch(t){}},update:function(){this.R.update()},addDefs:function(e){if(t.hasSVG){var i=this.createSvgElement("desc"),s=this.container
if(s.setAttribute("version","1.1"),s.style.position="absolute",this.setSize(this.width,this.height),e.accessibleTitle){var a=this.createSvgElement("text")
s.appendChild(a),a.innerHTML=e.accessibleTitle,a.style.opacity=0}t.rtl&&(s.setAttribute("direction","rtl"),s.style.left="auto",s.style.right="0px"),e&&(e.addCodeCredits&&i.appendChild(document.createTextNode("JavaScript chart by amCharts "+e.version)),e.accessibleDescription&&(i.innerHTML="",i.appendChild(document.createTextNode(e.accessibleDescription))),s.appendChild(i),e.defs&&(i=this.createSvgElement("defs"),s.appendChild(i),t.parseDefs(e.defs,i),this.defs=i))}}})}(),function(){var t=window.AmCharts
t.AmDObject=t.Class({construct:function(t,e){this.D=e,this.R=e.R,this.node=this.R.create(this,t),this.y=this.x=0,this.scale=1},attr:function(t){return this.R.attr(this,t),this},getAttr:function(t){return this.node.getAttribute(t)},setAttr:function(t,e){return this.R.setAttr(this,t,e),this},clipRect:function(t,e,i,s){this.R.clipRect(this,t,e,i,s)},translate:function(t,e,i,s){s||(t=Math.round(t),e=Math.round(e)),this.R.move(this,t,e,i),this.x=t,this.y=e,this.scale=i,this.angle&&this.rotate(this.angle)},rotate:function(t,e){this.R.rotate(this,t,e),this.angle=t},animate:function(e,i,s){for(var a in e)if(e.hasOwnProperty(a)){var h=a,r=e[a]
s=t.getEffect(s),this.R.animate(this,h,r,i,s)}},push:function(t){if(t){var e=this.node
e.appendChild(t.node)
var i=t.clipPath
i&&e.appendChild(i),(t=t.grad)&&e.appendChild(t)}},text:function(t){this.R.setText(this,t)},remove:function(){this.stop(),this.R.remove(this)},clear:function(){var t=this.node
if(t.hasChildNodes())for(;1<=t.childNodes.length;)t.removeChild(t.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var t=this.node
if(t){this.prevNextNode=t.nextSibling
var e=t.parentNode
e&&e.appendChild(t)}},toPrevious:function(){var t=this.node
t&&this.prevNextNode&&(t=t.parentNode)&&t.insertBefore(this.prevNextNode,null)},toBack:function(){var t=this.node
if(t){this.prevNextNode=t.nextSibling
var e=t.parentNode
if(e){var i=e.firstChild
i&&e.insertBefore(t,i)}}},mouseover:function(t){return this.R.addListener(this,"mouseover",t),this},mouseout:function(t){return this.R.addListener(this,"mouseout",t),this},click:function(t){return this.R.addListener(this,"click",t),this},dblclick:function(t){return this.R.addListener(this,"dblclick",t),this},mousedown:function(t){return this.R.addListener(this,"mousedown",t),this},mouseup:function(t){return this.R.addListener(this,"mouseup",t),this},touchmove:function(t){return this.R.addListener(this,"touchmove",t),this},touchstart:function(t){return this.R.addListener(this,"touchstart",t),this},touchend:function(t){return this.R.addListener(this,"touchend",t),this},keyup:function(t){return this.R.addListener(this,"keyup",t),this},focus:function(t){return this.R.addListener(this,"focus",t),this},blur:function(t){return this.R.addListener(this,"blur",t),this},contextmenu:function(t){return this.node.addEventListener?this.node.addEventListener("contextmenu",t,!0):this.R.addListener(this,"contextmenu",t),this},stop:function(){t.removeFromArray(this.R.animations,this.an_translate),t.removeFromArray(this.R.animations,this.an_y),t.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(t,e,i){this.R.gradient(this,t,e,i)},pattern:function(t,e,i){t&&this.R.pattern(this,t,e,i)}})}(),function(){var t=window.AmCharts
t.VMLRenderer=t.Class({construct:function(t,e){this.chart=e,this.D=t,this.cNames={circle:"oval",ellipse:"oval",rect:"roundrect",path:"shape"},this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(t,e){var i
if("group"==e)i=document.createElement("div"),t.type="div"
else if("text"==e)i=document.createElement("div"),t.type="text"
else if("image"==e)i=document.createElement("img"),t.type="image"
else{t.type="shape",t.shapeType=this.cNames[e],i=document.createElement("amvml:"+this.cNames[e])
var s=document.createElement("amvml:stroke")
i.appendChild(s),t.stroke=s
var a=document.createElement("amvml:fill")
i.appendChild(a),t.fill=a,a.className="amvml",s.className="amvml",i.className="amvml"}return i.style.position="absolute",i.style.top=0,i.style.left=0,i},path:function(t,e){t.node.setAttribute("src",e)},setAttr:function(e,i,s){if(void 0!==s){var a
8===document.documentMode&&(a=!0)
var h=e.node,r=e.type,n=h.style
"r"==i&&(n.width=2*s,n.height=2*s),"oval"==e.shapeType&&("rx"==i&&(n.width=2*s),"ry"==i&&(n.height=2*s)),"roundrect"==e.shapeType&&("width"!=i&&"height"!=i||--s),"cursor"==i&&(n.cursor=s),"cx"==i&&(n.left=s-t.removePx(n.width)/2),"cy"==i&&(n.top=s-t.removePx(n.height)/2)
var o=this.styleMap[i]
if("width"==o&&0>s&&(s=0),void 0!==o&&(n[o]=s),"text"==r&&("text-anchor"==i&&(e.anchor=s,o=h.clientWidth,"end"==s&&(n.marginLeft=-o+"px"),"middle"==s&&(n.marginLeft=-o/2+"px",n.textAlign="center"),"start"==s&&(n.marginLeft="0px")),"fill"==i&&(n.color=s),"font-weight"==i&&(n.fontWeight=s)),n=e.children)for(o=0;o<n.length;o++)n[o].setAttr(i,s)
"shape"==r&&("cs"==i&&(h.style.width="100px",h.style.height="100px",h.setAttribute("coordsize",s)),"d"==i&&h.setAttribute("path",this.svgPathToVml(s)),"dd"==i&&h.setAttribute("path",s),r=e.stroke,e=e.fill,"stroke"==i&&(a?r.color=s:r.setAttribute("color",s)),"stroke-width"==i&&(a?r.weight=s:r.setAttribute("weight",s)),"stroke-opacity"==i&&(a?r.opacity=s:r.setAttribute("opacity",s)),"stroke-dasharray"==i&&(n="solid",0<s&&3>s&&(n="dot"),3<=s&&6>=s&&(n="dash"),6<s&&(n="longdash"),a?r.dashstyle=n:r.setAttribute("dashstyle",n)),"fill-opacity"!=i&&"opacity"!=i||(0===s?a?e.on=!1:e.setAttribute("on",!1):a?e.opacity=s:e.setAttribute("opacity",s)),"fill"==i&&(a?e.color=s:e.setAttribute("color",s)),"rx"==i&&(a?h.arcSize=s+"%":h.setAttribute("arcsize",s+"%")))}},attr:function(t,e){for(var i in e)e.hasOwnProperty(i)&&this.setAttr(t,i,e[i])},text:function(e,i,s){var a=new t.AmDObject("text",this.D),h=a.node
return h.style.whiteSpace="pre",h.innerHTML=e,this.D.addToContainer(h,s),this.attr(a,i),a},getBBox:function(t){return this.getBox(t.node)},getBox:function(t){var e,i=t.offsetLeft,s=t.offsetTop,a=t.offsetWidth,h=t.offsetHeight
if(t.hasChildNodes()){var r,n,o
for(o=0;o<t.childNodes.length;o++){var l=(e=this.getBox(t.childNodes[o])).x
isNaN(l)||(isNaN(r)?r=l:l<r&&(r=l))
var d=e.y
isNaN(d)||(isNaN(n)?n=d:d<n&&(n=d)),l=e.width+l,isNaN(l)||(a=Math.max(a,l)),e=e.height+d,isNaN(e)||(h=Math.max(h,e))}0>r&&(i+=r),0>n&&(s+=n)}return{x:i,y:s,width:a,height:h}},setText:function(t,e){var i=t.node
i&&(i.innerHTML=e),this.setAttr(t,"text-anchor",t.anchor)},addListener:function(t,e,i){t.node["on"+e]=i},move:function(e,i,s){var a=e.node,h=a.style
"text"==e.type&&(s-=t.removePx(h.fontSize)/2-1),"oval"==e.shapeType&&(i-=t.removePx(h.width)/2,s-=t.removePx(h.height)/2),e=e.bw,isNaN(e)||(i-=e,s-=e),isNaN(i)||isNaN(s)||(a.style.left=i+"px",a.style.top=s+"px")},svgPathToVml:function(t){var e=t.split(" ")
t=""
var i,s,a=Math.round
for(s=0;s<e.length;s++){var h,r=(h=e[s]).substring(0,1),n=(h=h.substring(1)).split(","),o=a(n[0])+","+a(n[1])
if("M"==r&&(t+=" m "+o),"L"==r&&(t+=" l "+o),"Z"==r&&(t+=" x e"),"Q"==r){var l=i.length,d=i[l-1],u=n[0],c=n[1],p=(o=n[2],n[3])
t+=" c "+(i=a(i[l-2]/3+2/3*u))+","+(d=a(d/3+2/3*c))+","+(u=a(2/3*u+o/3))+","+(c=a(2/3*c+p/3))+","+o+","+p}"C"==r&&(t+=" c "+n[0]+","+n[1]+","+n[2]+","+n[3]+","+n[4]+","+n[5]),"A"==r&&(t+=" wa "+h),"B"==r&&(t+=" at "+h),i=n}return t},animate:function(t,e,i,s,a){var h=t.node,r=this.chart
if(t.animationFinished=!1,"translate"==e){i=(e=i.split(","))[1]
var n=h.offsetTop
r.animate(t,"left",h.offsetLeft,e[0],s,a,"px"),r.animate(t,"top",n,i,s,a,"px")}},clipRect:function(t,e,i,s,a){t=t.node,0===e&&0===i?(t.style.width=s+"px",t.style.height=a+"px",t.style.overflow="hidden"):t.style.clip="rect("+i+"px "+(e+s)+"px "+(i+a)+"px "+e+"px)"},rotate:function(e,i,s){if(0!==Number(i)){e=(l=e.node).style,s||(s=this.getBGColor(l.parentNode)),e.backgroundColor=s,e.paddingLeft=1,s=i*Math.PI/180
var a=Math.cos(s),h=Math.sin(s),r=t.removePx(e.left),n=t.removePx(e.top),o=l.offsetWidth,l=l.offsetHeight
i/=Math.abs(i),e.left=r+o/2-o/2*Math.cos(s)-i*l/2*Math.sin(s)+3,e.top=n-i*o/2*Math.sin(s)+i*l/2*Math.sin(s),e.cssText=e.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+a+"', M12='"+-h+"', M21='"+h+"', M22='"+a+"', sizingmethod='auto expand');"}},getBGColor:function(t){var e="#FFFFFF"
if(t.style){var i=t.style.backgroundColor
""!==i?e=i:t.parentNode&&(e=this.getBGColor(t.parentNode))}return e},set:function(e){var i,s=new t.AmDObject("group",this.D)
if(this.D.container.appendChild(s.node),e)for(i=0;i<e.length;i++)s.push(e[i])
return s},gradient:function(t,e,i,s){var a,h=""
for("radialGradient"==e&&(e="gradientradial",i.reverse()),"linearGradient"==e&&(e="gradient"),a=0;a<i.length;a++)h+=Math.round(100*a/(i.length-1))+"% "+i[a],a<i.length-1&&(h+=",")
t=t.fill,90==s?s=0:270==s?s=180:180==s?s=90:0===s&&(s=270),8===document.documentMode?(t.type=e,t.angle=s):(t.setAttribute("type",e),t.setAttribute("angle",s)),h&&(t.colors.value=h)},remove:function(t){t.clipPath&&this.D.remove(t.clipPath),this.D.remove(t.node)},disableSelection:function(t){t.onselectstart=function(){return!1},t.style.cursor="default"},pattern:function(e,i,s,a){s=e.node,e=e.fill
var h="none"
i.color&&(h=i.color),s.fillColor=h,i=i.url,t.isAbsolute(i)||(i=a+i),8===document.documentMode?(e.type="tile",e.src=i):(e.setAttribute("type","tile"),e.setAttribute("src",i))},update:function(){}})}(),function(){var t=window.AmCharts
t.SVGRenderer=t.Class({construct:function(t){this.D=t,this.animations=[]},create:function(e,i){return document.createElementNS(t.SVG_NS,i)},attr:function(t,e){for(var i in e)e.hasOwnProperty(i)&&this.setAttr(t,i,e[i])},setAttr:function(t,e,i){void 0!==i&&t.node.setAttribute(e,i)},animate:function(e,i,s,a,h){e.animationFinished=!1
var r=e.node
e["an_"+i]&&t.removeFromArray(this.animations,e["an_"+i]),"translate"==i?0===(r=(r=(r=(r=r.getAttribute("transform"))?String(r).substring(10,r.length-1):"0,0").split(", ").join(" ")).split(" ").join(","))&&(r="0,0"):r=Number(r.getAttribute(i)),s={obj:e,frame:0,attribute:i,from:r,to:s,time:a,effect:h},this.animations.push(s),e["an_"+i]=s},update:function(){var e,i=this.animations
for(e=i.length-1;0<=e;e--){var s,a,h,r=i[e],n=r.time*t.updateRate,o=r.frame+1,l=r.obj,d=r.attribute
if(o<=n){if(r.frame++,"translate"==d){if(s=r.from.split(","),d=Number(s[0]),s=Number(s[1]),isNaN(s)&&(s=0),a=r.to.split(","),h=Number(a[0]),a=Number(a[1]),h=0==h-d?h:Math.round(t[r.effect](0,o,d,h-d,n)),r=0==a-s?a:Math.round(t[r.effect](0,o,s,a-s,n)),d="transform",isNaN(h)||isNaN(r))continue
r="translate("+h+","+r+")"}else a=Number(r.from),s=Number(r.to),h=s-a,r=t[r.effect](0,o,a,h,n),isNaN(r)&&(r=s),0===h&&this.animations.splice(e,1)
this.setAttr(l,d,r)}else"translate"==d?(a=r.to.split(","),h=Number(a[0]),a=Number(a[1]),l.translate(h,a)):(s=Number(r.to),this.setAttr(l,d,s)),l.animationFinished=!0,this.animations.splice(e,1)}},getBBox:function(t){if(t=t.node)try{return t.getBBox()}catch(t){}return{width:0,height:0,x:0,y:0}},path:function(e,i){e.node.setAttributeNS(t.SVG_XLINK,"xlink:href",i)},clipRect:function(e,i,s,a,h){var r=e.node,n=e.clipPath
n&&this.D.remove(n)
var o=r.parentNode
o&&(r=document.createElementNS(t.SVG_NS,"clipPath"),n=t.getUniqueId(),r.setAttribute("id",n),this.D.rect(i,s,a,h,0,0,r),o.appendChild(r),i="#",t.baseHref&&!t.isIE&&(i=this.removeTarget(window.location.href)+i),this.setAttr(e,"clip-path","url("+i+n+")"),this.clipPathC++,e.clipPath=r)},text:function(e,i,s){var a=new t.AmDObject("text",this.D)
e=String(e).split("\n")
var h,r=t.removePx(i["font-size"])
for(h=0;h<e.length;h++){var n=this.create(null,"tspan")
n.appendChild(document.createTextNode(e[h])),n.setAttribute("y",(r+2)*h+Math.round(r/2)),n.setAttribute("x",0),a.node.appendChild(n)}return a.node.setAttribute("y",Math.round(r/2)),this.attr(a,i),this.D.addToContainer(a.node,s),a},setText:function(t,e){var i=t.node
i&&(i.removeChild(i.firstChild),i.appendChild(document.createTextNode(e)))},move:function(t,e,i,s){isNaN(e)&&(e=0),isNaN(i)&&(i=0),e="translate("+e+","+i+")",s&&(e=e+" scale("+s+")"),this.setAttr(t,"transform",e)},rotate:function(t,e){var i=t.node.getAttribute("transform"),s="rotate("+e+")"
i&&(s=i+" "+s),this.setAttr(t,"transform",s)},set:function(e){var i,s=new t.AmDObject("g",this.D)
if(this.D.container.appendChild(s.node),e)for(i=0;i<e.length;i++)s.push(e[i])
return s},addListener:function(t,e,i){t.node["on"+e]=i},gradient:function(e,i,s,a){var h=e.node,r=e.grad
if(r&&this.D.remove(r),i=document.createElementNS(t.SVG_NS,i),r=t.getUniqueId(),i.setAttribute("id",r),!isNaN(a)){var n=0,o=0,l=0,d=0
90==a?l=100:270==a?d=100:180==a?n=100:0===a&&(o=100),i.setAttribute("x1",n+"%"),i.setAttribute("x2",o+"%"),i.setAttribute("y1",l+"%"),i.setAttribute("y2",d+"%")}for(a=0;a<s.length;a++)n=document.createElementNS(t.SVG_NS,"stop"),o=100*a/(s.length-1),0===a&&(o=0),n.setAttribute("offset",o+"%"),n.setAttribute("stop-color",s[a]),i.appendChild(n)
h.parentNode.appendChild(i),s="#",t.baseHref&&!t.isIE&&(s=this.removeTarget(window.location.href)+s),h.setAttribute("fill","url("+s+r+")"),e.grad=i},removeTarget:function(t){return t.split("#")[0]},pattern:function(e,i,s,a){var h=e.node
isNaN(s)&&(s=1),(r=e.patternNode)&&this.D.remove(r)
var r=document.createElementNS(t.SVG_NS,"pattern"),n=t.getUniqueId(),o=i
i.url&&(o=i.url),t.isAbsolute(o)||-1!=o.indexOf("data:image")||(o=a+o),a=Number(i.width),isNaN(a)&&(a=4)
var l=Number(i.height)
isNaN(l)&&(l=4),a/=s,l/=s,s=i.x,isNaN(s)&&(s=0)
var d=-Math.random()*Number(i.randomX)
isNaN(d)||(s=d),d=i.y,isNaN(d)&&(d=0)
var u=-Math.random()*Number(i.randomY)
isNaN(u)||(d=u),r.setAttribute("id",n),r.setAttribute("width",a),r.setAttribute("height",l),r.setAttribute("patternUnits","userSpaceOnUse"),r.setAttribute("xlink:href",o),i.color&&((u=document.createElementNS(t.SVG_NS,"rect")).setAttributeNS(null,"height",a),u.setAttributeNS(null,"width",l),u.setAttributeNS(null,"fill",i.color),r.appendChild(u)),this.D.image(o,0,0,a,l,r).translate(s,d),o="#",t.baseHref&&!t.isIE&&(o=this.removeTarget(window.location.href)+o),h.setAttribute("fill","url("+o+n+")"),e.patternNode=r,h.parentNode.appendChild(r)},remove:function(t){t.clipPath&&this.D.remove(t.clipPath),t.grad&&this.D.remove(t.grad),t.patternNode&&this.D.remove(t.patternNode),this.D.remove(t.node)}})}(),function(){var t=window.AmCharts
t.AmLegend=t.Class({construct:function(e){this.enabled=!0,this.cname="AmLegend",this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel"),this.position="bottom",this.borderColor=this.color="#000000",this.borderAlpha=0,this.markerLabelGap=5,this.verticalGap=10,this.align="left",this.horizontalGap=0,this.spacing=10,this.markerDisabledColor="#AAB3B3",this.markerType="square",this.markerSize=16,this.markerBorderThickness=this.markerBorderAlpha=1,this.marginBottom=this.marginTop=0,this.marginLeft=this.marginRight=20,this.autoMargins=!0,this.valueWidth=50,this.switchable=!0,this.switchType="x",this.switchColor="#FFFFFF",this.rollOverColor="#CC0000",this.reversedOrder=!1,this.labelText="[[title]]",this.valueText="[[value]]",this.accessibleLabel="[[title]]",this.useMarkerColorForLabels=!1,this.rollOverGraphAlpha=1,this.textClickEnabled=!1
this.equalWidths=!0,this.backgroundColor="#FFFFFF",this.backgroundAlpha=0,this.useGraphSettings=!1,this.showEntries=!0,this.labelDx=0,t.applyTheme(this,e,this.cname)},setData:function(t){this.legendData=t,this.invalidateSize()},invalidateSize:function(){this.destroy(),this.entries=[],this.valueLabels=[]
var e=this.legendData
this.enabled&&(t.ifArray(e)||t.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var e=this.chart,i=this.position,s=this.width,a=e.divRealWidth,h=e.divRealHeight,r=this.div,n=this.legendData
if(this.data&&(n=this.combineLegend?this.legendData.concat(this.data):this.data),isNaN(this.fontSize)&&(this.fontSize=e.fontSize),this.maxColumnsReal=this.maxColumns,"right"==i||"left"==i)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10)
else if(this.autoMargins){this.marginRight=e.marginRight,this.marginLeft=e.marginLeft
var o=e.autoMarginOffset
"bottom"==i?(this.marginBottom=o,this.marginTop=0):(this.marginTop=o,this.marginBottom=0)}if(s=void 0!==s?t.toCoordinate(s,a):"right"!=i&&"left"!=i?e.realWidth:0<this.ieW?this.ieW:e.realWidth,"outside"==i?(s=r.offsetWidth,h=r.offsetHeight,r.clientHeight&&(s=r.clientWidth,h=r.clientHeight)):(isNaN(s)||(r.style.width=s+"px"),r.className="amChartsLegend "+e.classNamePrefix+"-legend-div"),this.divWidth=s,(i=this.container)?(i.container.innerHTML="",r.appendChild(i.container),i.width=s,i.height=h,i.setSize(s,h),i.addDefs(e)):i=new t.AmDraw(r,s,h,e),this.container=i,this.lx=0,this.ly=8,(h=this.markerSize)>this.fontSize&&(this.ly=h/2-1),0<h&&(this.lx+=h+this.markerLabelGap),this.titleWidth=0,(h=this.title)&&(h=t.text(this.container,h,this.color,e.fontFamily,this.fontSize,"start",!0),t.setCN(e,h,"legend-title"),h.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),e=h.getBBox(),this.titleWidth=e.width+15,this.titleHeight=e.height+6),this.index=this.maxLabelWidth=0,this.showEntries){for(e=0;e<n.length;e++)this.createEntry(n[e])
for(e=this.index=0;e<n.length;e++)this.createValue(n[e])}this.arrangeEntries(),this.updateValues()},arrangeEntries:function(){var e=this.position,i=this.marginLeft+this.titleWidth,s=this.marginRight,a=this.marginTop,h=this.marginBottom,r=this.horizontalGap,n=this.div,o=this.divWidth,l=this.maxColumnsReal,d=this.verticalGap,u=this.spacing,c=o-s-i,p=0,m=0,f=this.container
this.set&&this.set.remove()
var g=f.set()
this.set=g
var v=f.set()
g.push(v)
var b,x,N=this.entries
for(x=0;x<N.length;x++){(C=(b=N[x].getBBox()).width)>p&&(p=C),(b=b.height)>m&&(m=b)}var C=m=0,y=r,w=0,M=0
for(x=0;x<N.length;x++){var A,S=N[x]
this.reversedOrder&&(S=N[N.length-x-1]),b=S.getBBox(),this.equalWidths?A=C*(p+u+this.markerLabelGap):(A=y,y=y+b.width+r+u),A+b.width>c&&0<x&&0!==C&&(m++,y=(A=C=0)+b.width+r+u,w=w+M+d,M=0),b.height>M&&(M=b.height),S.translate(A,w),C++,!isNaN(l)&&C>=l&&(C=0,m++,w=w+M+d,y=r,M=0),v.push(S)}l=(b=v.getBBox()).height+2*d-1,"left"==e||"right"==e?(o=(u=b.width+2*r)+i+s,n.style.width=o+"px",this.ieW=o):u=o-i-s-1,s=t.polygon(this.container,[0,u,u,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha),t.setCN(this.chart,s,"legend-bg"),g.push(s),g.translate(i,a),s.toBack(),i=r,"top"!=e&&"bottom"!=e&&"absolute"!=e&&"outside"!=e||("center"==this.align?i=r+(u-b.width)/2:"right"==this.align&&(i=r+u-b.width)),v.translate(i,d+1),this.titleHeight>l&&(l=this.titleHeight),0>(a=l+a+h+1)&&(a=0),"absolute"!=e&&"outside"!=e&&a>this.chart.divRealHeight&&(n.style.top="0px"),n.style.height=Math.round(a)+"px",f.setSize(this.divWidth,a)},createEntry:function(e){if(!1!==e.visibleInLegend&&!e.hideFromLegend){var i=this,s=i.chart,a=i.useGraphSettings,h=e.markerType
h&&(a=!1),e.legendEntryWidth=i.markerSize,h||(h=i.markerType)
var r,n=e.color,o=e.alpha
e.legendKeyColor&&(n=e.legendKeyColor()),e.legendKeyAlpha&&(o=e.legendKeyAlpha()),!0===e.hidden&&(r=n=i.markerDisabledColor)
var l,d=e.pattern,u=e.customMarker
u||(u=i.customMarker)
var c,p,m=i.container,f=i.markerSize,g=0,v=0,b=f/2
if(a)a=e.type,i.switchType=void 0,"line"==a||"step"==a||"smoothedLine"==a||"ohlc"==a?(l=m.set(),e.hidden||(n=e.lineColorR,r=e.bulletBorderColorR),g=t.line(m,[0,2*f],[f/2,f/2],n,e.lineAlpha,e.lineThickness,e.dashLength),t.setCN(s,g,"graph-stroke"),l.push(g),e.bullet&&(e.hidden||(n=e.bulletColorR),g=t.bullet(m,e.bullet,e.bulletSize,n,e.bulletAlpha,e.bulletBorderThickness,r,e.bulletBorderAlpha))&&(t.setCN(s,g,"graph-bullet"),g.translate(f+1,f/2),l.push(g)),b=0,g=f,v=f/3):(e.getGradRotation&&(0===(l=e.getGradRotation())&&(l=180)),g=e.fillColorsR,!0===e.hidden&&(g=n),(l=i.createMarker("rectangle",g,e.fillAlphas,e.lineThickness,n,e.lineAlpha,l,d,e.dashLength))&&(b=f,l.translate(b,f/2)),g=f),t.setCN(s,l,"graph-"+a),t.setCN(s,l,"graph-"+e.id)
else if(u)l=m.image(u,0,0,f,f)
else{var x
isNaN(i.gradientRotation)||(x=180+i.gradientRotation),(l=i.createMarker(h,n,o,void 0,void 0,void 0,x,d))&&l.translate(f/2,f/2)}t.setCN(s,l,"legend-marker"),i.addListeners(l,e),m=m.set([l]),i.switchable&&e.switchable&&m.setAttr("cursor","pointer"),void 0!==e.id&&t.setCN(s,m,"legend-item-"+e.id),t.setCN(s,m,e.className,!0),(r=i.switchType)&&"none"!=r&&0<f&&("x"==r?(c=i.createX()).translate(f/2,f/2):c=i.createV(),c.dItem=e,!0!==e.hidden?"x"==r?c.hide():c.show():"x"!=r&&c.hide(),i.switchable||c.hide(),i.addListeners(c,e),e.legendSwitch=c,m.push(c),t.setCN(s,c,"legend-switch")),r=i.color,e.showBalloon&&i.textClickEnabled&&void 0!==i.selectedColor&&(r=i.selectedColor),i.useMarkerColorForLabels&&!d&&(r=n),!0===e.hidden&&(r=i.markerDisabledColor),n=t.massReplace(i.labelText,{"[[title]]":e.title}),void 0!==i.tabIndex&&(m.setAttr("tabindex",i.tabIndex),m.setAttr("role","menuitem"),m.keyup(function(t){13==t.keyCode&&i.clickMarker(e,t)})),s.accessible&&i.accessibleLabel&&(d=t.massReplace(i.accessibleLabel,{"[[title]]":e.title}),s.makeAccessible(m,d)),d=i.fontSize,l&&(f<=d&&(f=f/2+i.ly-d/2+(d+2-f)/2-v,l.translate(b,f),c&&c.translate(c.x,f)),e.legendEntryWidth=l.getBBox().width),n&&(n=t.fixBrakes(n),e.legendTextReal=n,p=i.labelWidth,p=isNaN(p)?t.text(i.container,n,r,s.fontFamily,d,"start"):t.wrappedText(i.container,n,r,s.fontFamily,d,"start",!1,p,0),t.setCN(s,p,"legend-label"),p.translate(i.lx+g,i.ly),m.push(p),i.labelDx=g,s=p.getBBox().width,i.maxLabelWidth<s&&(i.maxLabelWidth=s)),i.entries[i.index]=m,e.legendEntry=i.entries[i.index],e.legendMarker=l,e.legendLabel=p,i.index++}},addListeners:function(t,e){var i=this
t&&t.mouseover(function(t){i.rollOverMarker(e,t)}).mouseout(function(t){i.rollOutMarker(e,t)}).click(function(t){i.clickMarker(e,t)})},rollOverMarker:function(t,e){this.switchable&&this.dispatch("rollOverMarker",t,e),this.dispatch("rollOverItem",t,e)},rollOutMarker:function(t,e){this.switchable&&this.dispatch("rollOutMarker",t,e),this.dispatch("rollOutItem",t,e)},clickMarker:function(t,e){this.switchable&&(!0===t.hidden?this.dispatch("showItem",t,e):this.dispatch("hideItem",t,e)),this.dispatch("clickMarker",t,e)},rollOverLabel:function(t,e){t.hidden||this.textClickEnabled&&t.legendLabel&&t.legendLabel.attr({fill:this.rollOverColor}),this.dispatch("rollOverItem",t,e)},rollOutLabel:function(t,e){if(!t.hidden&&this.textClickEnabled&&t.legendLabel){var i=this.color
void 0!==this.selectedColor&&t.showBalloon&&(i=this.selectedColor),this.useMarkerColorForLabels&&(void 0===(i=t.lineColor)&&(i=t.color)),t.legendLabel.attr({fill:i})}this.dispatch("rollOutItem",t,e)},clickLabel:function(t,e){this.textClickEnabled?t.hidden||this.dispatch("clickLabel",t,e):this.switchable&&(!0===t.hidden?this.dispatch("showItem",t,e):this.dispatch("hideItem",t,e))},dispatch:function(t,e,i){t={type:t,dataItem:e,target:this,event:i,chart:this.chart},this.chart&&this.chart.handleLegendEvent(t),this.fire(t)},createValue:function(e){var i=this,s=i.fontSize,a=i.chart
if(!1!==e.visibleInLegend&&!e.hideFromLegend){var h=i.maxLabelWidth,r=0
i.forceWidth&&(h=i.labelWidth),i.equalWidths||(i.valueAlign="left"),r={x:0,y:0,width:0,height:0},e.legendLabel&&(r=e.legendLabel.getBBox()),"left"==i.valueAlign&&(h=r.width)
r=r.height
var n=h,o=i.markerSize
if(o<s+7&&(o=s+7,t.VML&&(o+=3)),i.valueText&&0<i.valueWidth){var l=i.color
i.useMarkerColorForValues&&(l=e.color,e.legendKeyColor&&(l=e.legendKeyColor())),!0===e.hidden&&(l=i.markerDisabledColor)
var d=i.valueText,u=(h=h+i.lx+i.labelDx+i.markerLabelGap+i.valueWidth,"end")
"left"==i.valueAlign&&(h-=i.valueWidth,u="start"),s=t.text(i.container,d,l,i.chart.fontFamily,s,u),t.setCN(a,s,"legend-value"),s.translate(h,i.ly),i.entries[i.index].push(s),n+=i.valueWidth+2*i.markerLabelGap,s.dItem=e,i.valueLabels.push(s),o<r+5&&(o=r+5)}i.index++,(a=i.container.rect(e.legendEntryWidth,0,n,o,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005})).dItem=e,i.entries[i.index-1].push(a),a.mouseover(function(t){i.rollOverLabel(e,t)}).mouseout(function(t){i.rollOutLabel(e,t)}).click(function(t){i.clickLabel(e,t)})}},createV:function(){var e=this.markerSize
return t.polygon(this.container,[e/5,e/2,e-e/5,e/2],[e/3,e-e/5,e/5,e/1.7],this.switchColor)},createX:function(){var e=(this.markerSize-4)/2,i={stroke:this.switchColor,"stroke-width":3},s=this.container,a=t.line(s,[-e,e],[-e,e]).attr(i)
e=t.line(s,[-e,e],[e,-e]).attr(i)
return this.container.set([a,e])},createMarker:function(e,i,s,a,h,r,n,o,l){var d=this.markerSize,u=this.container
return h||(h=this.markerBorderColor),h||(h=i),isNaN(a)&&(a=this.markerBorderThickness),isNaN(r)&&(r=this.markerBorderAlpha),t.bullet(u,e,d,i,s,a,h,r,d,n,o,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var e,i=this.valueLabels,s=this.chart,a=this.data
if(i)for(e=0;e<i.length;e++){var h=i[e],r=h.dItem
r.periodDataItem=void 0,r.periodPercentDataItem=void 0
var n=" "
if(a)r.value?h.text(r.value):h.text("")
else{var o=null
if(void 0!==r.type){o=r.currentDataItem
var l=this.periodValueText
r.legendPeriodValueText&&(l=r.legendPeriodValueText),r.legendPeriodValueTextR&&(l=r.legendPeriodValueTextR),o?(n=this.valueText,r.legendValueText&&(n=r.legendValueText),r.legendValueTextR&&(n=r.legendValueTextR),n=s.formatString(n,o)):l&&s.formatPeriodString&&(l=t.massReplace(l,{"[[title]]":r.title}),n=s.formatPeriodString(l,r))}else n=s.formatString(this.valueText,r)
l=r,o&&(l=o)
var d,u=this.valueFunction
u&&(n=u(l,n,s.periodDataItem)),this.useMarkerColorForLabels&&!o&&r.lastDataItem&&(o=r.lastDataItem),o?d=s.getBalloonColor(r,o):r.legendKeyColor&&(d=r.legendKeyColor()),r.legendColorFunction&&(d=r.legendColorFunction(l,n,r.periodDataItem,r.periodPercentDataItem)),h.text(n),!r.pattern&&(this.useMarkerColorForValues&&h.setAttr("fill",d),this.useMarkerColorForLabels)&&((h=r.legendMarker)&&(h.setAttr("fill",d),h.setAttr("stroke",d)),(h=r.legendLabel)&&(r.hidden?h.setAttr("fill",this.markerDisabledColor):h.setAttr("fill",d)))}}},renderFix:function(){if(!t.VML&&this.enabled){var e=this.container
e&&e.renderFix()}},destroy:function(){this.div.innerHTML="",t.remove(this.set)}})}(),function(){var t=window.AmCharts
t.formatMilliseconds=function(t,e){if(-1!=t.indexOf("fff")){var i=e.getMilliseconds(),s=String(i)
10>i&&(s="00"+i),10<=i&&100>i&&(s="0"+i),t=t.replace(/fff/g,s)}return t},t.extractPeriod=function(e){var i=t.stripNumbers(e),s=1
return i!=e&&(s=Number(e.slice(0,e.indexOf(i)))),{period:i,count:s}},t.getDate=function(e,i,s){return e instanceof Date?t.newDate(e,s):i&&isNaN(e)?t.stringToDate(e,i):new Date(e)},t.daysInMonth=function(t){return new Date(t.getYear(),t.getMonth()+1,0).getDate()},t.newDate=function(t,e){return e&&-1==e.indexOf("fff")?new Date(t):new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())},t.resetDateToMin=function(e,i,s,a){var h,r,n,o,l,d,u
switch(void 0===a&&(a=1),t.useUTC?(h=e.getUTCFullYear(),r=e.getUTCMonth(),n=e.getUTCDate(),o=e.getUTCHours(),l=e.getUTCMinutes(),d=e.getUTCSeconds(),u=e.getUTCMilliseconds(),e=e.getUTCDay()):(h=e.getFullYear(),r=e.getMonth(),n=e.getDate(),o=e.getHours(),l=e.getMinutes(),d=e.getSeconds(),u=e.getMilliseconds(),e=e.getDay()),i){case"YYYY":h=Math.floor(h/s)*s,r=0,n=1,u=d=l=o=0
break
case"MM":r=Math.floor(r/s)*s,n=1,u=d=l=o=0
break
case"WW":n=e>=a?n-e+a:n-(7+e)+a,u=d=l=o=0
break
case"DD":u=d=l=o=0
break
case"hh":o=Math.floor(o/s)*s,u=d=l=0
break
case"mm":l=Math.floor(l/s)*s,u=d=0
break
case"ss":d=Math.floor(d/s)*s,u=0
break
case"fff":u=Math.floor(u/s)*s}return t.useUTC?((e=new Date).setUTCFullYear(h,r,n),e.setUTCHours(o,l,d,u)):e=new Date(h,r,n,o,l,d,u),e},t.getPeriodDuration=function(t,e){var i
switch(void 0===e&&(e=1),t){case"YYYY":i=316224e5
break
case"MM":i=26784e5
break
case"WW":i=6048e5
break
case"DD":i=864e5
break
case"hh":i=36e5
break
case"mm":i=6e4
break
case"ss":i=1e3
break
case"fff":i=1}return i*e},t.intervals={s:{nextInterval:"ss",contains:1e3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:1/0,count:3}},t.getMaxInterval=function(e,i){var s=t.intervals
return e>=s[i].contains?(e=Math.round(e/s[i].contains),i=s[i].nextInterval,t.getMaxInterval(e,i)):"ss"==i?s[i].nextInterval:i},t.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),t.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" "),t.monthNames="January February March April May June July August September October November December".split(" "),t.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),t.getWeekNumber=function(t){(t=new Date(t)).setHours(0,0,0),t.setDate(t.getDate()+4-(t.getDay()||7))
var e=new Date(t.getFullYear(),0,1)
return Math.ceil(((t-e)/864e5+1)/7)},t.stringToDate=function(e,i){var s={},a=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],h=!0;-1!=(l=i.indexOf("AA"))&&(e.substr(l,2),"pm"==e.toLowerCase&&(h=!1))
var r,n,o,l=i
for(o=0;o<a.length;o++)n=a[o].period,s[n]=0,"date"==n&&(s[n]=1)
for(o=0;o<a.length;o++)if(r=a[o].pattern,n=a[o].period,-1!=i.indexOf(r)){var d=t.getFromDateString(r,e,l)
i=i.replace(r,""),"KK"!=r&&"K"!=r&&"LL"!=r&&"L"!=r||h||(d+=12),s[n]=d}return t.useUTC?((a=new Date).setUTCFullYear(s.year,s.month,s.date),a.setUTCHours(s.hours,s.minutes,s.seconds,s.milliseconds)):a=new Date(s.year,s.month,s.date,s.hours,s.minutes,s.seconds,s.milliseconds),a},t.getFromDateString=function(t,e,i){if(void 0!==e)return i=i.indexOf(t),e=String(e),e=e.substr(i,t.length),"0"==e.charAt(0)&&(e=e.substr(1,e.length-1)),e=Number(e),isNaN(e)&&(e=0),-1!=t.indexOf("M")&&e--,e},t.formatDate=function(e,i,s){s||(s=t)
var a,h,r,n,o,l,d,u,c=t.getWeekNumber(e)
t.useUTC?(a=e.getUTCFullYear(),h=e.getUTCMonth(),r=e.getUTCDate(),n=e.getUTCDay(),o=e.getUTCHours(),l=e.getUTCMinutes(),d=e.getUTCSeconds(),u=e.getUTCMilliseconds()):(a=e.getFullYear(),h=e.getMonth(),r=e.getDate(),n=e.getDay(),o=e.getHours(),l=e.getMinutes(),d=e.getSeconds(),u=e.getMilliseconds())
var p=String(a).substr(2,2),m="0"+n
i=i.replace(/W/g,c),24==(c=o)&&(c=0)
var f=c
10>f&&(f="0"+f),i=(i=i.replace(/JJ/g,f)).replace(/J/g,c),0===(f=o)&&(f=24,-1!=i.indexOf("H")&&(0===--r&&((a=new Date(e)).setDate(a.getDate()-1),h=a.getMonth(),r=a.getDate(),a=a.getFullYear()))),e=h+1,9>h&&(e="0"+e),c=r,10>r&&(c="0"+r)
var g=f
return 10>g&&(g="0"+g),i=(i=i.replace(/HH/g,g)).replace(/H/g,f),11<(f=o)&&(f-=12),10>(g=f)&&(g="0"+g),i=(i=i.replace(/KK/g,g)).replace(/K/g,f),0===(f=o)&&(f=12),12<f&&(f-=12),10>(g=f)&&(g="0"+g),i=(i=i.replace(/LL/g,g)).replace(/L/g,f),10>(f=l)&&(f="0"+f),i=(i=i.replace(/NN/g,f)).replace(/N/g,l),10>(l=d)&&(l="0"+l),i=(i=i.replace(/SS/g,l)).replace(/S/g,d),10>(d=u)?d="00"+d:100>d&&(d="0"+d),10>(l=u)&&(l="00"+l),i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=i.replace(/A/g,"@A@")).replace(/QQQ/g,d)).replace(/QQ/g,l)).replace(/Q/g,u)).replace(/YYYY/g,"@IIII@")).replace(/YY/g,"@II@")).replace(/MMMM/g,"@XXXX@")).replace(/MMM/g,"@XXX@")).replace(/MM/g,"@XX@")).replace(/M/g,"@X@")).replace(/DD/g,"@RR@")).replace(/D/g,"@R@")).replace(/EEEE/g,"@PPPP@")).replace(/EEE/g,"@PPP@")).replace(/EE/g,"@PP@")).replace(/E/g,"@P@")).replace(/@IIII@/g,a)).replace(/@II@/g,p)).replace(/@XXXX@/g,s.monthNames[h])).replace(/@XXX@/g,s.shortMonthNames[h])).replace(/@XX@/g,e)).replace(/@X@/g,h+1)).replace(/@RR@/g,c)).replace(/@R@/g,r)).replace(/@PPPP@/g,s.dayNames[n])).replace(/@PPP@/g,s.shortDayNames[n])).replace(/@PP@/g,m)).replace(/@P@/g,n),12>o?i.replace(/@A@/g,s.amString):i.replace(/@A@/g,s.pmString)},t.changeDate=function(e,i,s,a,h){if(t.useUTC)return t.changeUTCDate(e,i,s,a,h)
var r=-1
switch(void 0===a&&(a=!0),void 0===h&&(h=!1),!0===a&&(r=1),i){case"YYYY":e.setFullYear(e.getFullYear()+s*r),a||h||e.setDate(e.getDate()+1)
break
case"MM":i=e.getMonth()
var n=e.getFullYear()
e.setMonth(i+s*r)
var o=e.getMonth()
if(a&&o-i>s)for(;e.getMonth()-i>s;)e.setDate(e.getDate()-1)
n==e.getFullYear()&&e.getMonth()>i+s*r&&e.setDate(e.getDate()-1),a||h||e.setDate(e.getDate()+1)
break
case"DD":e.setDate(e.getDate()+s*r)
break
case"WW":e.setDate(e.getDate()+s*r*7)
break
case"hh":e.setHours(e.getHours()+s*r)
break
case"mm":e.setMinutes(e.getMinutes()+s*r)
break
case"ss":e.setSeconds(e.getSeconds()+s*r)
break
case"fff":e.setMilliseconds(e.getMilliseconds()+s*r)}return e},t.changeUTCDate=function(t,e,i,s,a){var h=-1
switch(void 0===s&&(s=!0),void 0===a&&(a=!1),!0===s&&(h=1),e){case"YYYY":t.setUTCFullYear(t.getUTCFullYear()+i*h),s||a||t.setUTCDate(t.getUTCDate()+1)
break
case"MM":e=t.getUTCMonth(),t.setUTCMonth(t.getUTCMonth()+i*h),t.getUTCMonth()>e+i*h&&t.setUTCDate(t.getUTCDate()-1),s||a||t.setUTCDate(t.getUTCDate()+1)
break
case"DD":t.setUTCDate(t.getUTCDate()+i*h)
break
case"WW":t.setUTCDate(t.getUTCDate()+i*h*7)
break
case"hh":t.setUTCHours(t.getUTCHours()+i*h)
break
case"mm":t.setUTCMinutes(t.getUTCMinutes()+i*h)
break
case"ss":t.setUTCSeconds(t.getUTCSeconds()+i*h)
break
case"fff":t.setUTCMilliseconds(t.getUTCMilliseconds()+i*h)}return t}}()
