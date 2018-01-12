(function(){var t=window.AmCharts
t.AmSlicedChart=t.Class({inherits:t.AmChart,construct:function(i){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice","rightClickSlice"),t.AmSlicedChart.base.construct.call(this,i),this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" "),this.alpha=1,this.groupPercent=0,this.groupedTitle="Other",this.groupedPulled=!1,this.groupedAlpha=1,this.marginLeft=0,this.marginBottom=this.marginTop=10,this.marginRight=0,this.hoverAlpha=1,this.outlineColor="#FFFFFF",this.outlineAlpha=0,this.outlineThickness=1,this.startAlpha=0,this.startDuration=1,this.startEffect="bounce",this.sequencedAnimation=!0,this.pullOutDuration=1,this.pullOutEffect="bounce",this.pullOnHover=this.pullOutOnlyOne=!1,this.labelsEnabled=!0,this.labelTickColor="#000000",this.labelTickAlpha=.2,this.hideLabelsPercent=0,this.urlTarget="_self",this.autoMarginOffset=10,this.gradientRatio=[],this.maxLabelWidth=200
this.accessibleLabel="[[title]]: [[percents]]% [[value]] [[description]]",t.applyTheme(this,i,"AmSlicedChart")},initChart:function(){t.AmSlicedChart.base.initChart.call(this),this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,this.setLegendData(this.chartData)),this.drawChart()},handleLegendEvent:function(t){var i=t.type,e=t.dataItem,a=this.legend
if(e.wedge&&e){var s=e.hidden
switch(t=t.event,i){case"clickMarker":s||a.switchable||this.clickSlice(e,t)
break
case"clickLabel":s||this.clickSlice(e,t,!1)
break
case"rollOverItem":s||this.rollOverSlice(e,!1,t)
break
case"rollOutItem":s||this.rollOutSlice(e,t)
break
case"hideItem":this.hideSlice(e,t)
break
case"showItem":this.showSlice(e,t)}}},invalidateVisibility:function(){this.recalculatePercents(),this.initChart()
var t=this.legend
t&&t.invalidateSize()},addEventListeners:function(t,i){var e=this
t.mouseover(function(t){e.rollOverSlice(i,!0,t)}).mouseout(function(t){e.rollOutSlice(i,t)}).touchend(function(t){e.rollOverSlice(i,t)}).mouseup(function(t){e.clickSlice(i,t)}).contextmenu(function(t){e.handleRightClick(i,t)}).focus(function(t){e.rollOverSlice(i,t)}).blur(function(t){e.rollOutSlice(i,t)})},formatString:function(i,e,a){i=t.formatValue(i,e,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers)
var s=this.pf.precision
return isNaN(this.tempPrec)||(this.pf.precision=this.tempPrec),i=t.formatValue(i,e,["percents"],this.pf),i=t.massReplace(i,{"[[title]]":e.title,"[[description]]":e.description}),this.pf.precision=s,-1!=i.indexOf("[[")&&(i=t.formatDataContextValue(i,e.dataContext)),i=a?t.fixNewLines(i):t.fixBrakes(i),t.cleanFromEmpty(i)},startSlices:function(){var t
for(t=0;t<this.chartData.length;t++)0<this.startDuration&&this.sequencedAnimation?this.setStartTO(t):this.startSlice(this.chartData[t])},setStartTO:function(t){var i=this
t=setTimeout(function(){i.startSequenced.call(i)},i.startDuration/i.chartData.length*500*t),i.timeOuts.push(t)},pullSlices:function(t){var i,e=this.chartData
for(i=0;i<e.length;i++){var a=e[i]
a.pulled&&this.pullSlice(a,1,t)}},startSequenced:function(){var t,i=this.chartData
for(t=0;t<i.length;t++)if(!i[t].started){this.startSlice(this.chartData[t])
break}},startSlice:function(t){t.started=!0
var i=t.wedge,e=this.startDuration,a=t.labelSet
i&&0<e&&(0<t.alpha&&i.show(),i.translate(t.startX,t.startY),this.animatable.push(i),i.animate({opacity:1,translate:"0,0"},e,this.startEffect)),a&&0<e&&(0<t.alpha&&a.show(),a.translate(t.startX,t.startY),a.animate({opacity:1,translate:"0,0"},e,this.startEffect))},showLabels:function(){var t,i=this.chartData
for(t=0;t<i.length;t++){var e=i[t]
if(0<e.alpha){var a=e.label
a&&a.show(),(e=e.tick)&&e.show()}}},showSlice:function(t){isNaN(t)?t.hidden=!1:this.chartData[t].hidden=!1,this.invalidateVisibility()},hideSlice:function(t){isNaN(t)?t.hidden=!0:this.chartData[t].hidden=!0,this.hideBalloon(),this.invalidateVisibility()},rollOverSlice:function(i,e,a){if(isNaN(i)||(i=this.chartData[i]),clearTimeout(this.hoverInt),!i.hidden){this.pullOnHover&&this.pullSlice(i,1),1>this.hoverAlpha&&i.wedge&&i.wedge.attr({opacity:this.hoverAlpha})
var s=i.balloonX,l=i.balloonY
i.pulled&&(s+=i.pullX,l+=i.pullY)
var h=this.formatString(this.balloonText,i,!0),r=this.balloonFunction
r&&(h=r(i,h)),r=t.adjustLuminosity(i.color,-.15),h?this.showBalloon(h,r,e,s,l):this.hideBalloon(),0===i.value&&this.hideBalloon(),this.fire({type:"rollOverSlice",dataItem:i,chart:this,event:a})}},rollOutSlice:function(t,i){isNaN(t)||(t=this.chartData[t]),t.wedge&&t.wedge.attr({opacity:1}),this.hideBalloon(),this.fire({type:"rollOutSlice",dataItem:t,chart:this,event:i})},clickSlice:function(i,e,a){this.checkTouchDuration(e)&&(isNaN(i)||(i=this.chartData[i]),i.pulled?this.pullSlice(i,0):this.pullSlice(i,1),t.getURL(i.url,this.urlTarget),a||this.fire({type:"clickSlice",dataItem:i,chart:this,event:e}))},handleRightClick:function(t,i){isNaN(t)||(t=this.chartData[t]),this.fire({type:"rightClickSlice",dataItem:t,chart:this,event:i})},drawTicks:function(){var i,e=this.chartData
for(i=0;i<e.length;i++){var a=e[i]
if(a.label&&!a.skipTick){var s=a.ty
s=t.line(this.container,[a.tx0,a.tx,a.tx2],[a.ty0,s,s],this.labelTickColor,this.labelTickAlpha)
t.setCN(this,s,this.type+"-tick"),t.setCN(this,s,a.className,!0),a.tick=s,a.wedge.push(s),"AmFunnelChart"==this.cname&&s.toBack()}}},initialStart:function(){var t=this,i=t.startDuration,e=setTimeout(function(){t.showLabels.call(t)},1e3*i)
t.timeOuts.push(e),t.chartCreated?t.pullSlices(!0):(t.startSlices(),0<i?(i=setTimeout(function(){t.pullSlices.call(t)},1200*i),t.timeOuts.push(i)):t.pullSlices(!0))},pullSlice:function(t,i,e){var a=this.pullOutDuration
!0===e&&(a=0),(e=t.wedge)&&(0<a?(e.animate({translate:i*t.pullX+","+i*t.pullY},a,this.pullOutEffect),t.labelSet&&t.labelSet.animate({translate:i*t.pullX+","+i*t.pullY},a,this.pullOutEffect)):(t.labelSet&&t.labelSet.translate(i*t.pullX,i*t.pullY),e.translate(i*t.pullX,i*t.pullY))),1==i?(t.pulled=!0,this.pullOutOnlyOne&&this.pullInAll(t.index),t={type:"pullOutSlice",dataItem:t,chart:this}):(t.pulled=!1,t={type:"pullInSlice",dataItem:t,chart:this}),this.fire(t)},pullInAll:function(t){var i,e=this.chartData
for(i=0;i<this.chartData.length;i++)i!=t&&e[i].pulled&&this.pullSlice(e[i],0)},pullOutAll:function(){var t,i=this.chartData
for(t=0;t<i.length;t++)i[t].pulled||this.pullSlice(i[t],1)},parseData:function(){var i=[]
this.chartData=i
var e=this.dataProvider
if(isNaN(this.pieAlpha)||(this.alpha=this.pieAlpha),void 0!==e){var a,s,l,h=e.length,r=0
for(a=0;a<h;a++){s={}
var n=e[a]
s.dataContext=n,null!==n[this.valueField]&&(s.value=Number(n[this.valueField])),(l=n[this.titleField])||(l=""),s.title=l,s.pulled=t.toBoolean(n[this.pulledField],!1),(l=n[this.descriptionField])||(l=""),s.description=l,s.labelRadius=Number(n[this.labelRadiusField]),s.switchable=!0,s.className=n[this.classNameField],s.url=n[this.urlField],!(l=n[this.patternField])&&this.patterns&&(l=this.patterns[a]),s.pattern=l,s.visibleInLegend=t.toBoolean(n[this.visibleInLegendField],!0),l=n[this.alphaField],s.alpha=void 0!==l?Number(l):this.alpha,void 0!==(l=n[this.colorField])&&(s.color=l),s.labelColor=t.toColor(n[this.labelColorField]),r+=s.value,s.hidden=!1,i[a]=s}for(a=e=0;a<h;a++)s=i[a],s.percents=s.value/r*100,s.percents<this.groupPercent&&e++
for(1<e&&(this.groupValue=0,this.removeSmallSlices(),i.push({title:this.groupedTitle,value:this.groupValue,percents:this.groupValue/r*100,pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha,pattern:this.groupedPattern,className:this.groupedClassName,dataContext:{}})),(h=this.baseColor)||(h=this.pieBaseColor),(r=this.brightnessStep)||(r=this.pieBrightnessStep),a=0;a<i.length;a++)h?l=t.adjustLuminosity(h,a*r/100):(l=this.colors[a],void 0===l&&(l=t.randomColor())),void 0===i[a].color&&(i[a].color=l)
this.recalculatePercents()}},recalculatePercents:function(){var t,i,e=this.chartData,a=0
for(t=0;t<e.length;t++)i=e[t],!i.hidden&&0<i.value&&(a+=i.value)
for(t=0;t<e.length;t++)i=this.chartData[t],i.percents=!i.hidden&&0<i.value?100*i.value/a:0},removeSmallSlices:function(){var t,i=this.chartData
for(t=i.length-1;0<=t;t--)i[t].percents<this.groupPercent&&(this.groupValue+=i[t].value,i.splice(t,1))},animateAgain:function(){var t=this
t.startSlices()
for(var i=0;i<t.chartData.length;i++){var e=t.chartData[i]
e.started=!1
var a=e.wedge
a&&(a.setAttr("opacity",t.startAlpha),a.translate(e.startX,e.startY)),(a=e.labelSet)&&(a.setAttr("opacity",t.startAlpha),a.translate(e.startX,e.startY))}0<(i=t.startDuration)?(i=setTimeout(function(){t.pullSlices.call(t)},1200*i),t.timeOuts.push(i)):t.pullSlices()},measureMaxLabel:function(){var i,e=this.chartData,a=0
for(i=0;i<e.length;i++){var s=e[i],l=this.formatString(this.labelText,s),h=this.labelFunction
h&&(l=h(s,l)),(l=(s=t.text(this.container,l,this.color,this.fontFamily,this.fontSize)).getBBox().width)>a&&(a=l),s.remove()}return a}})})(),function(){var t=window.AmCharts
t.AmFunnelChart=t.Class({inherits:t.AmSlicedChart,construct:function(i){this.type="funnel",t.AmFunnelChart.base.construct.call(this,i),this.cname="AmFunnelChart",this.startX=this.startY=0,this.baseWidth="100%",this.neckHeight=this.neckWidth=0,this.rotate=!1,this.valueRepresents="height",this.pullDistance=30,this.labelPosition="center",this.labelText="[[title]]: [[value]]",this.balloonText="[[title]]: [[value]]\n[[description]]",t.applyTheme(this,i,this.cname)},drawChart:function(){t.AmFunnelChart.base.drawChart.call(this)
var i=this.chartData
if(t.ifArray(i))if(0<this.realWidth&&0<this.realHeight){var e=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180)),a=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180)),s=this.container,l=this.startDuration,h=this.rotate,r=this.updateWidth()
this.realWidth=r
var n=this.updateHeight()
this.realHeight=n
var o=(d=t.toCoordinate)(this.marginLeft,r),c=d(this.marginRight,r),u=d(this.marginTop,n)+this.getTitleHeight(),d=d(this.marginBottom,n)
0<e&&0>a&&(this.neckHeight=this.neckWidth=0,h?d-=a/2:u-=a/2)
c=r-o-c
var p=t.toCoordinate(this.baseWidth,c),f=t.toCoordinate(this.neckWidth,c),g=n-d-u,m=u+g-(N=t.toCoordinate(this.neckHeight,g))
h&&(m=(u=n-d)-g+N),this.firstSliceY=u,t.VML&&(this.startAlpha=1)
for(var v=c/2+o,b=(g-N)/((p-f)/2),S=1,C=p/2,w=(p=(g-N)*(p+f)/2+f*N,u),D=0,N=0;N<i.length;N++){var y,A=i[N]
if(!0!==A.hidden&&(this.showZeroSlices||0!==A.percents)){var F,M=[],k=[]
if("height"==this.valueRepresents)F=g*A.percents/100
else{var x=-p*A.percents/100/2,L=C
F=-1/(2*b),0>(T=Math.pow(L,2)-4*F*x)&&(T=0),F=(Math.sqrt(T)-L)/(2*F),!h&&u>=m||h&&u<=m?F=2*-x/f:(!h&&u+F>m||h&&u-F<m)&&(1/0!=(x=2*(-x-(L-(T=(y=h?Math.round(F+(u-F-m)):Math.round(F-(u+F-m)))/b)/2)*y)/f)&&(F=y+x))}if(x=C-F/b,L=!1,!h&&u+F>m||h&&u-F<m?(x=f/2,M.push(v-C,v+C,v+x,v+x,v-x,v-x),h?(y=F+(u-F-m),u<m&&(y=0),k.push(u,u,u-y,u-F,u-F,u-y,u)):(y=F-(u+F-m),u>m&&(y=0),k.push(u,u,u+y,u+F,u+F,u+y,u)),L=!0):(M.push(v-C,v+C,v+x,v-x),h?k.push(u,u,u-F,u-F):k.push(u,u,u+F,u+F)),y=s.set(),0<e&&0>a?(k=x/C,M=-1,h||(M=1),isNaN(S)&&(S=0),(M=new t.Cuboid(s,2*C,M*F,e,a*S,A.color,A.alpha,this.outlineThickness,this.outlineColor,this.outlineAlpha,90,0,!1,0,A.pattern,k).set).translate(v-C,u-a/2*S),S*=k):M=t.polygon(s,M,k,A.color,A.alpha,this.outlineThickness,this.outlineColor,this.outlineAlpha),t.setCN(this,y,"funnel-item"),t.setCN(this,M,"funnel-slice"),t.setCN(this,y,A.className,!0),y.push(M),this.graphsSet.push(y),h||y.toBack(),A.wedge=y,A.index=N,k=this.gradientRatio){var O,T=[]
for(O=0;O<k.length;O++)T.push(t.adjustLuminosity(A.color,k[O]))
0<T.length&&M.gradient("linearGradient",T),A.pattern&&M.pattern(A.pattern,NaN,this.path)}0<l&&(this.chartCreated||y.setAttr("opacity",this.startAlpha)),this.addEventListeners(y,A),A.ty0=h?u-F/2:u+F/2,this.labelsEnabled&&this.labelText&&A.percents>=this.hideLabelsPercent&&(k=this.formatString(this.labelText,A),(M=this.labelFunction)&&(k=M(A,k)),(T=A.labelColor)||(T=this.color),O="left","center"==(M=this.labelPosition)&&(O="middle"),"left"==M&&(O="right"),""!==k&&(k=t.wrappedText(s,k,T,this.fontFamily,this.fontSize,O,!1,this.maxLabelWidth),t.setCN(this,k,"funnel-label"),t.setCN(this,k,A.className,!0),k.node.style.pointerEvents="none",y.push(k),T=v,h?(O=u-F/2,A.ty0=O):(O=u+F/2,A.ty0=O,O<w+D+5&&(O=w+D+5),O>n-d&&(O=n-d)),"right"==M&&(T=c+10+o,A.tx0=v+(C-F/2/b),L&&(A.tx0=v+x)),"left"==M&&(A.tx0=v-(C-F/2/b),L&&(A.tx0=v-x),T=o),A.label=k,A.labelX=T,A.labelY=O,A.labelHeight=k.getBBox().height,k.translate(T,O),C=k.getBBox(),(w=t.rect(s,C.width+5,C.height+5,"#ffffff",.005)).translate(T+C.x,O+C.y),y.push(w),A.hitRect=w,D=k.getBBox().height,w=O)),(0===A.alpha||0<l&&!this.chartCreated)&&y.hide(),u=h?u-F:u+F,C=x,A.startX=t.toCoordinate(this.startX,r),A.startY=t.toCoordinate(this.startY,n),A.pullX=t.toCoordinate(this.pullDistance,r),A.pullY=0,A.balloonX=v,A.balloonY=A.ty0,this.accessible&&this.accessibleLabel&&(A=this.formatString(this.accessibleLabel,A),this.makeAccessible(y,A)),void 0!==this.tabIndex&&y.setAttr("tabindex",this.tabIndex)}}this.arrangeLabels(),this.initialStart(),(i=this.legend)&&i.invalidateSize()}else this.cleanChart()
this.dispDUpd()},arrangeLabels:function(){var t,i=this.rotate
t=i?0:this.realHeight
for(var e,a=0,s=this.chartData,l=s.length,h=0;h<l;h++){var r=(e=s[l-h-1]).label,n=e.labelY,o=e.labelX,c=e.labelHeight,u=n
i?t+a+5>n&&(u=t+a+5):n+c+5>t&&(u=t-5-c),t=u,a=c,r&&(r.translate(o,u),r=r.getBBox(),e.hitRect&&e.hitRect.translate(o+r.x,u+r.y)),e.labelY=u,e.tx=o,e.ty=u,e.tx2=o}"center"!=this.labelPosition&&this.drawTicks()}})}(),function(){var t=window.AmCharts
t.Cuboid=t.Class({construct:function(t,i,e,a,s,l,h,r,n,o,c,u,d,p,f,g,m){this.set=t.set(),this.container=t,this.h=Math.round(e),this.w=Math.round(i),this.dx=a,this.dy=s,this.colors=l,this.alpha=h,this.bwidth=r,this.bcolor=n,this.balpha=o,this.dashLength=p,this.topRadius=g,this.pattern=f,this.rotate=d,this.bcn=m,d?0>i&&0===c&&(c=180):0>e&&270==c&&(c=90),this.gradientRotation=c,0===a&&0===s&&(this.cornerRadius=u),this.draw()},draw:function(){var i=this.set
i.clear()
var e=this.container,a=e.chart,s=this.w,l=this.h,h=this.dx,r=this.dy,n=this.colors,o=this.alpha,c=this.bwidth,u=this.bcolor,d=this.balpha,p=this.gradientRotation,f=this.cornerRadius,g=this.dashLength,m=this.pattern,v=this.topRadius,b=this.bcn,S=n,C=n
"object"==typeof n&&(S=n[0],C=n[n.length-1])
var w,D,N,y,A,F,M,k,x,L=o
m&&(o=0)
var O,T,B,R,I=this.rotate
if(0<Math.abs(h)||0<Math.abs(r))if(isNaN(v))M=C,C=t.adjustLuminosity(S,-.2),C=t.adjustLuminosity(S,-.2),w=t.polygon(e,[0,h,s+h,s,0],[0,r,r,0,0],C,o,1,u,0,p),0<d&&(x=t.line(e,[0,h,s+h],[0,r,r],u,d,c,g)),D=t.polygon(e,[0,0,s,s,0],[0,l,l,0,0],C,o,1,u,0,p),D.translate(h,r),0<d&&(N=t.line(e,[h,h],[r,r+l],u,d,c,g)),y=t.polygon(e,[0,0,h,h,0],[0,l,l+r,r,0],C,o,1,u,0,p),A=t.polygon(e,[s,s,s+h,s+h,s],[0,l,l+r,r,0],C,o,1,u,0,p),0<d&&(F=t.line(e,[s,s+h,s+h,s],[0,r,l+r,l],u,d,c,g)),C=t.adjustLuminosity(M,.2),M=t.polygon(e,[0,h,s+h,s,0],[l,l+r,l+r,l,l],C,o,1,u,0,p),0<d&&(k=t.line(e,[0,h,s+h],[l,l+r,l+r],u,d,c,g))
else{var P,Y,E
I?(P=l/2,C=h/2,E=l/2,Y=s+h/2,T=Math.abs(l/2),O=Math.abs(h/2)):(C=s/2,P=r/2,Y=s/2,E=l+r/2+1,O=Math.abs(s/2),T=Math.abs(r/2)),B=O*v,R=T*v,.1<O&&.1<O&&(w=t.circle(e,O,S,o,c,u,d,!1,T)).translate(C,P),.1<B&&.1<B&&(M=t.circle(e,B,t.adjustLuminosity(S,.5),o,c,u,d,!1,R)).translate(Y,E)}for(o=L,1>Math.abs(l)&&(l=0),1>Math.abs(s)&&(s=0),!isNaN(v)&&(0<Math.abs(h)||0<Math.abs(r))?(n={fill:n=[S],stroke:u,"stroke-width":c,"stroke-opacity":d,"fill-opacity":o},I?(o="M0,0 L"+s+","+(l/2-l/2*v),c=" B",0<s&&(c=" A"),t.VML?o=(o+=c+Math.round(s-B)+","+Math.round(l/2-R)+","+Math.round(s+B)+","+Math.round(l/2+R)+","+s+",0,"+s+","+l)+" L0,"+l+(c+Math.round(-O))+","+Math.round(l/2-T)+","+Math.round(O)+","+Math.round(l/2+T)+",0,"+l+",0,0":(o+="A"+B+","+R+",0,0,0,"+s+","+(l-l/2*(1-v))+"L0,"+l,o+="A"+O+","+T+",0,0,1,0,0"),O=90):(o="M0,0 L"+(c=s/2-s/2*v)+","+l,t.VML?(o="M0,0 L"+c+","+l,c=" B",0>l&&(c=" A"),o+=c+Math.round(s/2-B)+","+Math.round(l-R)+","+Math.round(s/2+B)+","+Math.round(l+R)+",0,"+l+","+s+","+l,o+=" L"+s+",0",o+=c+Math.round(s/2+O)+","+Math.round(T)+","+Math.round(s/2-O)+","+Math.round(-T)+","+s+",0,0,0"):(o+="A"+B+","+R+",0,0,0,"+(s-s/2*(1-v))+","+l+"L"+s+",0",o+="A"+O+","+T+",0,0,1,0,0"),O=180),(e=e.path(o).attr(n)).gradient("linearGradient",[S,t.adjustLuminosity(S,-.3),t.adjustLuminosity(S,-.3),S],O),I?e.translate(h/2,0):e.translate(0,r/2)):e=0===l?t.line(e,[0,s],[0,0],u,d,c,g):0===s?t.line(e,[0,0],[0,l],u,d,c,g):0<f?t.rect(e,s,l,n,o,c,u,d,f,p,g):t.polygon(e,[0,0,s,s,0],[0,l,l,0,0],n,o,c,u,d,p,!1,g),s=isNaN(v)?0>l?[w,x,D,N,y,A,F,M,k,e]:[M,k,D,N,y,A,w,x,F,e]:I?0<s?[w,e,M]:[M,e,w]:0>l?[w,e,M]:[M,e,w],t.setCN(a,e,b+"front"),t.setCN(a,D,b+"back"),t.setCN(a,M,b+"top"),t.setCN(a,w,b+"bottom"),t.setCN(a,y,b+"left"),t.setCN(a,A,b+"right"),w=0;w<s.length;w++)(D=s[w])&&(i.push(D),t.setCN(a,D,b+"element"))
m&&e.pattern(m,NaN,a.path)},width:function(t){isNaN(t)&&(t=0),this.w=Math.round(t),this.draw()},height:function(t){isNaN(t)&&(t=0),this.h=Math.round(t),this.draw()},animateHeight:function(i,e){var a=this
a.animationFinished=!1,a.easing=e,a.totalFrames=i*t.updateRate,a.rh=a.h,a.frame=0,a.height(1),setTimeout(function(){a.updateHeight.call(a)},1e3/t.updateRate)},updateHeight:function(){var i=this
i.frame++
var e=i.totalFrames
i.frame<=e?(e=i.easing(0,i.frame,1,i.rh-1,e),i.height(e),window.requestAnimationFrame?window.requestAnimationFrame(function(){i.updateHeight.call(i)}):setTimeout(function(){i.updateHeight.call(i)},1e3/t.updateRate)):(i.height(i.rh),i.animationFinished=!0)},animateWidth:function(i,e){var a=this
a.animationFinished=!1,a.easing=e,a.totalFrames=i*t.updateRate,a.rw=a.w,a.frame=0,a.width(1),setTimeout(function(){a.updateWidth.call(a)},1e3/t.updateRate)},updateWidth:function(){var i=this
i.frame++
var e=i.totalFrames
i.frame<=e?(e=i.easing(0,i.frame,1,i.rw-1,e),i.width(e),window.requestAnimationFrame?window.requestAnimationFrame(function(){i.updateWidth.call(i)}):setTimeout(function(){i.updateWidth.call(i)},1e3/t.updateRate)):(i.width(i.rw),i.animationFinished=!0)}})}()
