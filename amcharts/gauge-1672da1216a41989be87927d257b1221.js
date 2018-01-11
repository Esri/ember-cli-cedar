(function(){var t=window.AmCharts
t.GaugeAxis=t.Class({construct:function(i){this.cname="GaugeAxis",this.radius="95%",this.createEvents("rollOverBand","rollOutBand","clickBand"),this.labelsEnabled=!0,this.startAngle=-120,this.endAngle=120,this.startValue=0,this.endValue=200,this.gridCount=5,this.tickLength=10,this.minorTickLength=5,this.tickColor="#555555",this.labelFrequency=this.tickThickness=this.tickAlpha=1,this.inside=!0,this.labelOffset=10,this.showLastLabel=this.showFirstLabel=!0,this.axisThickness=1,this.axisColor="#000000",this.axisAlpha=1,this.gridInside=!0,this.topTextYOffset=0,this.topTextBold=!0,this.bottomTextYOffset=0,this.bottomTextBold=!0,this.centerY=this.centerX="0%",this.bandOutlineAlpha=this.bandOutlineThickness=0,this.bandOutlineColor="#000000",this.bandAlpha=1,this.bcn="gauge-axis",t.applyTheme(this,i,"GaugeAxis")},value2angle:function(t){return(t-this.startValue)/(this.endValue-this.startValue)*(this.endAngle-this.startAngle)+this.startAngle},setTopText:function(i){if(void 0!==i){this.topText=i
var e=this.chart
if(this.axisCreated){this.topTF&&this.topTF.remove()
var s=this.topTextFontSize
s||(s=e.fontSize)
var a=this.topTextColor
a||(a=e.color),i=t.text(e.container,i,a,e.fontFamily,s,void 0,this.topTextBold),t.setCN(e,i,"axis-top-label"),i.translate(this.centerXReal,this.centerYReal-this.radiusReal/2+this.topTextYOffset),this.set.push(i),this.topTF=i}}},setBottomText:function(i){if(void 0!==i){this.bottomText=i
var e=this.chart
if(this.axisCreated){this.bottomTF&&this.bottomTF.remove()
var s=this.bottomTextFontSize
s||(s=e.fontSize)
var a=this.bottomTextColor
a||(a=e.color),i=t.text(e.container,i,a,e.fontFamily,s,void 0,this.bottomTextBold),t.setCN(e,i,"axis-bottom-label"),i.translate(this.centerXReal,this.centerYReal+this.radiusReal/2+this.bottomTextYOffset),this.bottomTF=i,this.set.push(i)}}},draw:function(){var i=this.chart,e=i.container.set()
this.set=e,t.setCN(i,e,this.bcn),t.setCN(i,e,this.bcn+"-"+this.id),i.graphsSet.push(e),this.bandSet=i.container.set(),this.set.push(this.bandSet)
var s=this.startValue,a=this.endValue,h=this.valueInterval
isNaN(h)&&(h=(a-s)/this.gridCount)
var r=this.minorTickInterval
isNaN(r)&&(r=h/5)
var n=this.startAngle,o=this.endAngle,l=this.tickLength,u=(a-s)/h+1,d=(o-n)/(u-1)
this.singleValueAngle=d/h
var c=i.container,g=this.tickColor,f=this.tickAlpha,v=this.tickThickness,m=d/(r=h/r),p=this.minorTickLength,x=this.labelFrequency,A=this.radiusReal
this.inside||(A-=15),this.radiusRealReal=A
var w=i.centerX+t.toCoordinate(this.centerX,i.realWidth),b=i.centerY+t.toCoordinate(this.centerY,i.realHeight)
this.centerXReal=w,this.centerYReal=b
var N,C,T={fill:this.axisColor,"fill-opacity":this.axisAlpha,"stroke-width":0,"stroke-opacity":0}
this.gridInside?C=N=A:C=(N=A-l)+p,this.minorTickRadius=C,this.drawBands()
var V=this.axisThickness/2
o=t.wedge(c,w,b,n,o-n,N+V,N+V,N-V,0,T)
for(t.setCN(i,o.wedge,"axis-line"),e.push(o),o=t.doNothing,t.isModern||(o=Math.round),T=t.getDecimals(s),N=t.getDecimals(a),a=t.getDecimals(h),a=Math.max(a,T,N),h=t.roundTo(h,a+1),T=0;T<u;T++){V=t.roundTo(s+T*h,a),N=n+T*d
var B=o(w+A*Math.sin(N/180*Math.PI)),k=o(b-A*Math.cos(N/180*Math.PI)),R=o(w+(A-l)*Math.sin(N/180*Math.PI)),M=o(b-(A-l)*Math.cos(N/180*Math.PI))
B=t.line(c,[B,R],[k,M],g,f,v,0,!1,!1,!0)
t.setCN(i,B,"axis-tick"),e.push(B),B=-1,R=this.labelOffset,this.inside||(R=-R-l,B=1)
k=w+(A-l-R)*Math.sin(N/180*Math.PI),R=b-(A-l-R)*Math.cos(N/180*Math.PI)
var S=this.fontSize
isNaN(S)&&(S=i.fontSize)
M=Math.sin((N-90)/180*Math.PI)
var F=Math.cos((N-90)/180*Math.PI)
if(0<x&&this.labelsEnabled&&T/x==Math.round(T/x)&&(this.showLastLabel||T!=u-1)&&(this.showFirstLabel||0!==T)){var O
O=this.usePrefixes?t.addPrefix(V,i.prefixesOfBigNumbers,i.prefixesOfSmallNumbers,i.nf,!0):t.formatNumber(V,i.nf,a)
var I=this.unit
I&&(O="left"==this.unitPosition?I+O:O+I),(I=this.labelFunction)&&(O=I(V)),void 0===(V=this.color)&&(V=i.color),V=t.text(c,O,V,i.fontFamily,S),t.setCN(i,V,"axis-label"),S=V.getBBox(),V.translate(k+B*S.width/2*F,R+B*S.height/2*M),e.push(V)}if(T<u-1)for(V=1;V<r;V++)M=N+m*V,B=o(w+C*Math.sin(M/180*Math.PI)),k=o(b-C*Math.cos(M/180*Math.PI)),R=o(w+(C-p)*Math.sin(M/180*Math.PI)),M=o(b-(C-p)*Math.cos(M/180*Math.PI)),B=t.line(c,[B,R],[k,M],g,f,v,0,!1,!1,!0),t.setCN(i,B,"axis-tick-minor"),e.push(B)}this.axisCreated=!0,this.setTopText(this.topText),this.setBottomText(this.bottomText),i=i.graphsSet.getBBox(),this.width=i.width,this.height=i.height},drawBands:function(){var i=this.bands
if(i)for(var e=0;e<i.length;e++){var s=i[e]
s&&(s.axis=this,t.processObject(s,t.GaugeBand,this.theme),s.draw(s.startValue,s.endValue))}},fireEvent:function(t,i,e){this.fire({type:t,dataItem:i,chart:this,event:e})},addEventListeners:function(i,e){var s=this,a=s.chart
i.mouseover(function(t){a.showBalloon(e.balloonText,e.color,!0),s.fireEvent("rollOverBand",e,t)}).mouseout(function(t){a.hideBalloon(),s.fireEvent("rollOutBand",e,t)}).click(function(i){s.fireEvent("clickBand",e,i),t.getURL(e.url,a.urlTarget)}).touchend(function(i){s.fireEvent("clickBand",e,i),t.getURL(e.url,a.urlTarget)})}})})(),function(){var t=window.AmCharts
t.GaugeArrow=t.Class({construct:function(i){this.cname="GaugeArrow",this.color="#000000",this.nailAlpha=this.alpha=1,this.startWidth=this.nailRadius=8,this.endWidth=0,this.borderAlpha=1,this.radius="90%",this.nailBorderAlpha=this.innerRadius=0,this.nailBorderThickness=1,this.frame=0,t.applyTheme(this,i,"GaugeArrow")},setValue:function(t){var i=this.chart
i&&i.setValue?i.setValue(this,t):this.previousValue=this.value=t}}),t.GaugeBand=t.Class({construct:function(){this.cname="GaugeBand",this.frame=0},draw:function(i,e){var s=this.axis
this.bandGraphics&&this.bandGraphics.remove()
var a=s.chart,h=s.startAngle,r=s.radiusRealReal,n=s.singleValueAngle,o=a.container,l=s.minorTickLength,u=t.toCoordinate(this.radius,r)
isNaN(u)&&(u=s.minorTickRadius),r=t.toCoordinate(this.innerRadius,r),isNaN(r)&&(r=u-l)
h+=n*(i-s.startValue),l=n*(e-i)
var d=this.outlineColor
void 0===d&&(d=s.bandOutlineColor)
var c=this.outlineThickness
isNaN(c)&&(c=s.bandOutlineThickness)
var g=this.outlineAlpha
isNaN(g)&&(g=s.bandOutlineAlpha),n=this.alpha,isNaN(n)&&(n=s.bandAlpha),d={fill:this.color,stroke:d,"stroke-width":c,"stroke-opacity":g},this.url&&(d.cursor="pointer"),(c=this.gradientRatio)||(c=s.bandGradientRatio),o=t.wedge(o,s.centerXReal,s.centerYReal,h,l,u,u,r,0,d,c,void 0,void 0,"radial"),t.setCN(a,o.wedge,"axis-band"),void 0!==this.id&&t.setCN(a,o.wedge,"axis-band-"+this.id),o.setAttr("opacity",n),s.bandSet.push(o),this.bandGraphics=o,this.currentStartValue=i,this.currentEndValue=e,s.addEventListeners(o,this)},update:function(){var i=(s=this.axis).chart
if(s&&s.value2angle){if(this.frame>=i.totalFrames)i=this.endValue,s=this.startValue
else{this.frame++
var e=t.getEffect(i.startEffect),s=t[e](0,this.frame,this.previousStartValue,this.startValue-this.previousStartValue,i.totalFrames)
i=t[e](0,this.frame,this.previousEndValue,this.endValue-this.previousEndValue,i.totalFrames)
isNaN(s)&&(s=this.startValue),isNaN(i)&&(i=this.endValue)}s==this.currentStartValue&&i==this.currentEndValue||this.draw(s,i)}},setStartValue:function(t){this.previousStartValue=this.startValue,this.startValue=t,this.frame=0},setEndValue:function(t){this.previousEndValue=this.endValue,this.endValue=t,this.frame=0}})}(),function(){var t=window.AmCharts
t.AmAngularGauge=t.Class({inherits:t.AmChart,construct:function(i){this.cname="AmAngularGauge",t.AmAngularGauge.base.construct.call(this,i),this.theme=i,this.type="gauge",this.minRadius=this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=10,this.faceColor="#FAFAFA",this.faceAlpha=0,this.faceBorderWidth=1,this.faceBorderColor="#555555",this.faceBorderAlpha=0,this.arrows=[],this.axes=[],this.startDuration=1,this.startEffect="easeOutSine",this.adjustSize=!0,this.extraHeight=this.extraWidth=0,t.applyTheme(this,i,this.cname)},addAxis:function(t){t.chart=this,this.axes.push(t)},formatString:function(i,e){return t.formatValue(i,e,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers)},initChart:function(){var i,e
for(t.AmAngularGauge.base.initChart.call(this),0===this.axes.length&&(i=new t.GaugeAxis(this.theme),this.addAxis(i)),e=0;e<this.axes.length;e++)i=this.axes[e],i=t.processObject(i,t.GaugeAxis,this.theme),i.id||(i.id="axisAuto"+e+"_"+(new Date).getTime()),i.chart=this,this.axes[e]=i
var s=this.arrows
for(e=0;e<s.length;e++){i=s[e],(i=t.processObject(i,t.GaugeArrow,this.theme)).id||(i.id="arrowAuto"+e+"_"+(new Date).getTime()),i.chart=this,s[e]=i
var a=i.axis
t.isString(a)&&(i.axis=t.getObjById(this.axes,a)),i.axis||(i.axis=this.axes[0]),isNaN(i.value)&&i.setValue(i.axis.startValue),isNaN(i.previousValue)&&(i.previousValue=i.axis.startValue)}this.setLegendData(s),this.drawChart(),this.totalFrames=this.startDuration*t.updateRate},drawChart:function(){t.AmAngularGauge.base.drawChart.call(this)
var i=this.container,e=this.updateWidth()
this.realWidth=e
var s=this.updateHeight()
this.realHeight=s
var a=(l=t.toCoordinate)(this.marginLeft,e),h=l(this.marginRight,e),r=l(this.marginTop,s)+this.getTitleHeight(),n=l(this.marginBottom,s),o=l(this.radius,e,s),l=e-a-h,u=s-r-n+this.extraHeight
o||(o=Math.min(l,u)/2),o<this.minRadius&&(o=this.minRadius),this.radiusReal=o,this.centerX=(e-a-h)/2+a,this.centerY=(s-r-n)/2+r+this.extraHeight/2,isNaN(this.gaugeX)||(this.centerX=this.gaugeX),isNaN(this.gaugeY)||(this.centerY=this.gaugeY)
var d
e=this.faceAlpha,s=this.faceBorderAlpha
for((0<e||0<s)&&((d=t.circle(i,o,this.faceColor,e,this.faceBorderWidth,this.faceBorderColor,s,!1)).translate(this.centerX,this.centerY),d.toBack(),(i=this.facePattern)&&d.pattern(i,NaN,this.path)),e=o=i=0;e<this.axes.length;e++)s=this.axes[e],a=s.radius,s.radiusReal=t.toCoordinate(a,this.radiusReal),s.draw(),h=1,-1!==String(a).indexOf("%")&&(h=1+(100-Number(a.substr(0,a.length-1)))/100),s.width*h>i&&(i=s.width*h),s.height*h>o&&(o=s.height*h)
for((e=this.legend)&&e.invalidateSize(),this.adjustSize&&!this.sizeAdjusted&&(d&&((d=d.getBBox()).width>i&&(i=d.width),d.height>o&&(o=d.height)),d=0,(u>o||l>i)&&(d=Math.min(u-o,l-i)),5<d&&(this.extraHeight=d,this.sizeAdjusted=!0,this.validateNow())),l=this.arrows.length,e=0;e<l;e++)u=this.arrows[e],u.drawnAngle=NaN
this.dispDUpd()},validateSize:function(){this.extraHeight=this.extraWidth=0,this.chartCreated=this.sizeAdjusted=!1,t.AmAngularGauge.base.validateSize.call(this)},addArrow:function(t){this.arrows.push(t)},removeArrow:function(i){t.removeFromArray(this.arrows,i),this.validateNow()},removeAxis:function(i){t.removeFromArray(this.axes,i),this.validateNow()},drawArrow:function(i,e){i.set&&i.set.remove()
var s=this.container
i.set=s.set(),t.setCN(this,i.set,"gauge-arrow"),t.setCN(this,i.set,"gauge-arrow-"+i.id)
var a=(c=i.axis).radiusReal,h=c.centerXReal,r=c.centerYReal,n=i.startWidth,o=i.endWidth,l=t.toCoordinate(i.innerRadius,c.radiusReal),u=t.toCoordinate(i.radius,c.radiusReal)
c.inside||(u-=15),(g=i.nailColor)||(g=i.color)
var d=i.nailColor
d||(d=i.color),0<i.nailRadius&&(g=t.circle(s,i.nailRadius,g,i.nailAlpha,i.nailBorderThickness,g,i.nailBorderAlpha),t.setCN(this,g,"gauge-arrow-nail"),i.set.push(g),g.translate(h,r)),isNaN(u)&&(u=a-c.tickLength)
var c=Math.sin(e/180*Math.PI),g=(a=Math.cos(e/180*Math.PI),Math.sin((e+90)/180*Math.PI)),f=Math.cos((e+90)/180*Math.PI)
s=t.polygon(s,[h-n/2*g+l*c,h+u*c-o/2*g,h+u*c+o/2*g,h+n/2*g+l*c],[r+n/2*f-l*a,r-u*a+o/2*f,r-u*a-o/2*f,r-n/2*f-l*a],i.color,i.alpha,1,d,i.borderAlpha,void 0,!0)
t.setCN(this,s,"gauge-arrow"),i.set.push(s),this.graphsSet.push(i.set),i.hidden&&this.hideArrow(i)},setValue:function(t,i){t.axis&&t.axis.value2angle&&(t.frame=0,t.previousValue=t.value),t.value=i
var e=this.legend
e&&e.updateValues(),this.accessible&&this.background&&this.makeAccessible(this.background,i)},handleLegendEvent:function(t){var i=t.type
if(t=t.dataItem,!this.legend.data&&t)switch(i){case"hideItem":this.hideArrow(t)
break
case"showItem":this.showArrow(t)}},hideArrow:function(t){t.set.hide(),t.hidden=!0,this.legend&&this.legend.invalidateSize()},showArrow:function(t){t.set.show(),t.hidden=!1,this.legend&&this.legend.invalidateSize()},updateAnimations:function(){t.AmAngularGauge.base.updateAnimations.call(this)
for(var i,e,s=this.arrows.length,a=0;a<s;a++)i=this.arrows[a],i.axis&&i.axis.value2angle&&(i.frame>=this.totalFrames?e=i.value:(i.frame++,i.clockWiseOnly&&i.value<i.previousValue&&(e=i.axis,i.previousValue-=e.endValue-e.startValue),e=t.getEffect(this.startEffect),e=t[e](0,i.frame,i.previousValue,i.value-i.previousValue,this.totalFrames),isNaN(e)&&(e=i.value)),e=i.axis.value2angle(e),i.drawnAngle!=e&&(this.drawArrow(i,e),i.drawnAngle=e))
for(i=(s=this.axes).length-1;0<=i;i--)if(e=s[i],e.bands)for(a=e.bands.length-1;0<=a;a--){var h=e.bands[a]
h.update&&h.update()}}})}()
