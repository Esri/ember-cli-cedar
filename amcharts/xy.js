(function(){var t=window.AmCharts
t.AmRectangularChart=t.Class({inherits:t.AmCoordinateChart,construct:function(i){t.AmRectangularChart.base.construct.call(this,i),this.theme=i,this.createEvents("zoomed","changed"),this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20,this.depth3D=this.angle=0,this.plotAreaFillColors="#FFFFFF",this.plotAreaFillAlphas=0,this.plotAreaBorderColor="#000000",this.plotAreaBorderAlpha=0,this.maxZoomFactor=20,this.zoomOutButtonImageSize=19,this.zoomOutButtonImage="lens",this.zoomOutText="Show all",this.zoomOutButtonColor="#e5e5e5",this.zoomOutButtonAlpha=0,this.zoomOutButtonRollOverAlpha=1,this.zoomOutButtonPadding=8,this.trendLines=[],this.autoMargins=!0,this.marginsUpdated=!1,this.autoMarginOffset=10,t.applyTheme(this,i,"AmRectangularChart")},initChart:function(){t.AmRectangularChart.base.initChart.call(this),this.updateDxy(),!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),this.drawGraphs=!1),this.processScrollbars(),this.updateMargins(),this.updatePlotArea(),this.updateScrollbars(),this.updateTrendLines(),this.updateChartCursor(),this.updateValueAxes(),this.scrollbarOnly||this.updateGraphs()},drawChart:function(){if(t.AmRectangularChart.base.drawChart.call(this),this.drawPlotArea(),t.ifArray(this.chartData)){var i=this.chartCursor
i&&i.draw()}},resetMargins:function(){var t,i={}
if("xy"==this.type){var a=this.xAxes,e=this.yAxes
for(t=0;t<a.length;t++){var s=a[t]
s.ignoreAxisWidth||(s.setOrientation(!0),s.fixAxisPosition(),i[s.position]=!0)}for(t=0;t<e.length;t++)a=e[t],a.ignoreAxisWidth||(a.setOrientation(!1),a.fixAxisPosition(),i[a.position]=!0)}else{for(e=this.valueAxes,t=0;t<e.length;t++)a=e[t],a.ignoreAxisWidth||(a.setOrientation(this.rotate),a.fixAxisPosition(),i[a.position]=!0);(t=this.categoryAxis)&&!t.ignoreAxisWidth&&(t.setOrientation(!this.rotate),t.fixAxisPosition(),t.fixAxisPosition(),i[t.position]=!0)}i.left&&(this.marginLeft=0),i.right&&(this.marginRight=0),i.top&&(this.marginTop=0),i.bottom&&(this.marginBottom=0),this.fixMargins=i},measureMargins:function(){var t,i,a=this.valueAxes,e=this.autoMarginOffset,s=this.fixMargins,r=this.realWidth,o=this.realHeight,h=e,l=e,n=r
for(t=o,i=0;i<a.length;i++)a[i].handleSynchronization(),t=this.getAxisBounds(a[i],h,n,l,t),h=Math.round(t.l),n=Math.round(t.r),l=Math.round(t.t),t=Math.round(t.b);(a=this.categoryAxis)&&(t=this.getAxisBounds(a,h,n,l,t),h=Math.round(t.l),n=Math.round(t.r),l=Math.round(t.t),t=Math.round(t.b)),s.left&&h<e&&(this.marginLeft=Math.round(-h+e),!isNaN(this.minMarginLeft)&&this.marginLeft<this.minMarginLeft&&(this.marginLeft=this.minMarginLeft)),s.right&&n>=r-e&&(this.marginRight=Math.round(n-r+e),!isNaN(this.minMarginRight)&&this.marginRight<this.minMarginRight&&(this.marginRight=this.minMarginRight)),s.top&&l<e+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-l+e+this.titleHeight),!isNaN(this.minMarginTop)&&this.marginTop<this.minMarginTop&&(this.marginTop=this.minMarginTop)),s.bottom&&t>o-e&&(this.marginBottom=Math.round(this.marginBottom+t-o+e),!isNaN(this.minMarginBottom)&&this.marginBottom<this.minMarginBottom&&(this.marginBottom=this.minMarginBottom)),this.initChart()},getAxisBounds:function(t,i,a,e,s){if(!t.ignoreAxisWidth){var r=t.labelsSet,o=t.tickLength
if(t.inside&&(o=0),r)switch(r=t.getBBox(),t.position){case"top":e>(t=r.y)&&(e=t)
break
case"bottom":s<(t=r.y+r.height)&&(s=t)
break
case"right":a<(t=r.x+r.width+o+3)&&(a=t)
break
case"left":i>(t=r.x-o)&&(i=t)}}return{l:i,t:e,r:a,b:s}},drawZoomOutButton:function(){var i=this
if(!i.zbSet){var a=i.container.set()
i.zoomButtonSet.push(a)
var e,s=i.color,r=i.fontSize,o=i.zoomOutButtonImageSize,h=i.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),l=i.langObj.zoomOutText||i.zoomOutText,n=i.zoomOutButtonColor,u=i.zoomOutButtonAlpha,d=i.zoomOutButtonFontSize,c=i.zoomOutButtonPadding
isNaN(d)||(r=d),(d=i.zoomOutButtonFontColor)&&(s=d),(d=i.zoomOutButton)&&(d.fontSize&&(r=d.fontSize),d.color&&(s=d.color),d.backgroundColor&&(n=d.backgroundColor),isNaN(d.backgroundAlpha)||(i.zoomOutButtonRollOverAlpha=d.backgroundAlpha))
var m=d=0
m=i.pathToImages
for(h&&((t.isAbsolute(h)||void 0===m)&&(m=""),e=i.container.image(m+h+i.extension,0,0,o,o),t.setCN(i,e,"zoom-out-image"),a.push(e),d=(e=e.getBBox()).width+5),void 0!==l&&(s=t.text(i.container,l,s,i.fontFamily,r,"start"),t.setCN(i,s,"zoom-out-label"),r=s.getBBox(),m=e?e.height/2-3:r.height/2,s.translate(d,m),a.push(s)),e=a.getBBox(),s=1,t.isModern||(s=0),(n=t.rect(i.container,e.width+2*c+5,e.height+2*c-2,n,1,1,n,s)).setAttr("opacity",u),n.translate(-c,-c),t.setCN(i,n,"zoom-out-bg"),a.push(n),n.toBack(),i.zbBG=n,e=n.getBBox(),a.translate(i.marginLeftReal+i.plotAreaWidth-e.width+c,i.marginTopReal+c),a.hide(),a.mouseover(function(){i.rollOverZB()}).mouseout(function(){i.rollOutZB()}).click(function(){i.clickZB()}).touchstart(function(){i.rollOverZB()}).touchend(function(){i.rollOutZB(),i.clickZB()}),u=0;u<a.length;u++)a[u].attr({cursor:"pointer"})
void 0!==i.zoomOutButtonTabIndex&&(a.setAttr("tabindex",i.zoomOutButtonTabIndex),a.setAttr("role","menuitem"),a.keyup(function(t){13==t.keyCode&&i.clickZB()})),i.zbSet=a}},rollOverZB:function(){this.rolledOverZB=!0,this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1,this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1,this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var i=this.dx,a=this.dy,e=this.marginLeftReal,s=this.marginTopReal,r=this.plotAreaWidth-1,o=this.plotAreaHeight-1,h=this.plotAreaFillColors,l=this.plotAreaFillAlphas,n=this.plotAreaBorderColor,u=this.plotAreaBorderAlpha
"object"==typeof l&&(l=l[0]),h=t.polygon(this.container,[0,r,r,0,0],[0,0,o,o,0],h,l,1,n,u,this.plotAreaGradientAngle),t.setCN(this,h,"plot-area"),h.translate(e+i,s+a),this.set.push(h),0!==i&&0!==a&&("object"==typeof(h=this.plotAreaFillColors)&&(h=h[0]),h=t.adjustLuminosity(h,-.15),r=t.polygon(this.container,[0,i,r+i,r,0],[0,a,a,0,0],h,l,1,n,u),t.setCN(this,r,"plot-area-bottom"),r.translate(e,s+o),this.set.push(r),i=t.polygon(this.container,[0,0,i,i,0],[0,o,o+a,a,0],h,l,1,n,u),t.setCN(this,i,"plot-area-left"),i.translate(e,s),this.set.push(i)),(e=this.bbset)&&this.scrollbarOnly&&e.remove()},updatePlotArea:function(){var t=this.updateWidth(),i=this.updateHeight(),a=this.container
this.realWidth=t,this.realWidth=i,a&&this.container.setSize(t,i)
a=this.marginLeftReal
var e=this.marginTopReal
t=t-a-this.marginRightReal-this.dx,i=i-e-this.marginBottomReal
1>t&&(t=1),1>i&&(i=1),this.plotAreaWidth=Math.round(t),this.plotAreaHeight=Math.round(i),this.plotBalloonsSet.translate(a,e)},updateDxy:function(){this.dx=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180)),this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180)),this.d3x=Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180)),this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var t=this.getTitleHeight()
this.titleHeight=t,this.marginTopReal=this.marginTop-this.dy,this.fixMargins&&!this.fixMargins.top&&(this.marginTopReal+=t),this.marginBottomReal=this.marginBottom,this.marginLeftReal=this.marginLeft,this.marginRightReal=this.marginRight},updateValueAxes:function(){var t,i=this.valueAxes
for(t=0;t<i.length;t++){var a=i[t]
this.setAxisRenderers(a),this.updateObjectSize(a)}},setAxisRenderers:function(i){i.axisRenderer=t.RecAxis,i.guideFillRenderer=t.RecFill,i.axisItemRenderer=t.RecItem,i.marginsChanged=!0},updateGraphs:function(){var t,i=this.graphs
for(t=0;t<i.length;t++){var a=i[t]
a.index=t,a.rotate=this.rotate,this.updateObjectSize(a)}},updateObjectSize:function(t){t.width=this.plotAreaWidth-1,t.height=this.plotAreaHeight-1,t.x=this.marginLeftReal,t.y=this.marginTopReal,t.dx=this.dx,t.dy=this.dy},updateChartCursor:function(){var i=this.chartCursor
i&&(i=t.processObject(i,t.ChartCursor,this.theme),this.updateObjectSize(i),this.addChartCursor(i),i.chart=this)},processScrollbars:function(){var i=this.chartScrollbar
i&&(i=t.processObject(i,t.ChartScrollbar,this.theme),this.addChartScrollbar(i))},updateScrollbars:function(){},removeChartCursor:function(){t.callMethod("destroy",[this.chartCursor]),this.chartCursor=null},zoomTrendLines:function(){var t,i=this.trendLines
for(t=0;t<i.length;t++){var a=i[t]
a.valueAxis.recalculateToPercents?a.set&&a.set.hide():(a.x=this.marginLeftReal,a.y=this.marginTopReal,a.draw())}},handleCursorValueZoom:function(){},addTrendLine:function(t){this.trendLines.push(t)},zoomOutValueAxes:function(){for(var t=this.valueAxes,i=0;i<t.length;i++)t[i].zoomOut()},removeTrendLine:function(t){var i,a=this.trendLines
for(i=a.length-1;0<=i;i--)a[i]==t&&a.splice(i,1)},adjustMargins:function(t,i){var a=t.position,e=t.scrollbarHeight+t.offset
t.enabled&&("top"==a?i?this.marginLeftReal+=e:this.marginTopReal+=e:i?this.marginRightReal+=e:this.marginBottomReal+=e)},getScrollbarPosition:function(t,i,a){var e="bottom",s="top"
t.oppositeAxis||(s=e,e="top"),t.position=i?"bottom"==a||"left"==a?e:s:"top"==a||"right"==a?e:s},updateChartScrollbar:function(t,i){if(t){t.rotate=i
var a=this.marginTopReal,e=this.marginLeftReal,s=t.scrollbarHeight,r=this.dx,o=this.dy,h=t.offset
"top"==t.position?i?(t.y=a,t.x=e-s-h):(t.y=a-s+o-h,t.x=e+r):i?(t.y=a+o,t.x=e+this.plotAreaWidth+r+h):(t.y=a+this.plotAreaHeight+h,t.x=this.marginLeftReal)}},showZB:function(t){var i=this.zbSet
t&&(""!==(i=this.zoomOutText)&&i&&this.drawZoomOutButton()),(i=this.zbSet)&&(this.zoomButtonSet.push(i),t?i.show():i.hide(),this.rollOutZB())},handleReleaseOutside:function(i){t.AmRectangularChart.base.handleReleaseOutside.call(this,i),(i=this.chartCursor)&&i.handleReleaseOutside&&i.handleReleaseOutside()},handleMouseDown:function(i){t.AmRectangularChart.base.handleMouseDown.call(this,i)
var a=this.chartCursor
a&&a.handleMouseDown&&!this.rolledOverZB&&a.handleMouseDown(i)},update:function(){t.AmRectangularChart.base.update.call(this),this.chartCursor&&this.chartCursor.update&&this.chartCursor.update()},handleScrollbarValueZoom:function(t){this.relativeZoomValueAxes(t.target.valueAxes,t.relativeStart,t.relativeEnd),this.zoomAxesAndGraphs()},zoomValueScrollbar:function(t){if(t&&t.enabled){var i=t.valueAxes[0],a=i.relativeStart,e=i.relativeEnd
i.reversed&&(e=1-a,a=1-i.relativeEnd),t.percentZoom(a,e)}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var t,i=this.valueAxes
for(t=0;t<i.length;t++)i[t].zoom(this.start,this.end)
for(i=this.graphs,t=0;t<i.length;t++)i[t].zoom(this.start,this.end);(t=this.chartCursor)&&t.clearSelection(),this.zoomTrendLines()}},handleValueAxisZoomReal:function(t,i){if((e=t.relativeStart)>(s=t.relativeEnd))var a=e,e=s,s=a
this.relativeZoomValueAxes(i,e,s),this.updateAfterValueZoom()},updateAfterValueZoom:function(){this.zoomAxesAndGraphs(),this.zoomScrollbar()},relativeZoomValueAxes:function(i,a,e){if(this.hideBalloonReal(),(a=t.fitToBounds(a,0,1))>(e=t.fitToBounds(e,0,1))){var s=a
a=e,e=s}s=1/this.maxZoomFactor
var r=t.getDecimals(s)+4
if(e-a<s&&(a=(e=a+(e-a)/2)-s/2,1<(e+=s/2)&&(a-=e-1,e=1),0>a&&(a=0,e=s)),a=t.roundTo(a,r),e=t.roundTo(e,r),s=!1,i){for(r=0;r<i.length;r++){var o=i[r].zoomToRelativeValues(a,e,!0)
o&&(s=o)}this.showZB()}return s},addChartCursor:function(i){t.callMethod("destroy",[this.chartCursor]),i&&(this.listenTo(i,"moved",this.handleCursorMove),this.listenTo(i,"zoomed",this.handleCursorZoom),this.listenTo(i,"zoomStarted",this.handleCursorZoomStarted),this.listenTo(i,"panning",this.handleCursorPanning),this.listenTo(i,"onHideCursor",this.handleCursorHide)),this.chartCursor=i},handleCursorChange:function(){},handleCursorMove:function(t){var i,a=this.valueAxes
for(i=0;i<a.length;i++)if(!t.panning){var e=a[i]
e&&e.showBalloon&&e.showBalloon(t.x,t.y)}},handleCursorZoom:function(t){if(this.skipZoomed)this.skipZoomed=!1
else{var i=this.startX0,a=this.endX0,e=this.endY0,s=this.startY0,r=t.startX,o=t.endX,h=t.startY,l=t.endY
this.startX0=this.endX0=this.startY0=this.endY0=NaN,this.handleCursorZoomReal(i+r*(a-i),i+o*(a-i),s+h*(e-s),s+l*(e-s),t)}},handleCursorHide:function(){var t,i=this.valueAxes
for(t=0;t<i.length;t++)i[t].hideBalloon()
for(i=this.graphs,t=0;t<i.length;t++)i[t].hideBalloonReal()}})})(),function(){var t=window.AmCharts
t.AmXYChart=t.Class({inherits:t.AmRectangularChart,construct:function(i){this.type="xy",t.AmXYChart.base.construct.call(this,i),this.cname="AmXYChart",this.theme=i,this.createEvents("zoomed"),t.applyTheme(this,i,this.cname)},initChart:function(){t.AmXYChart.base.initChart.call(this),this.dataChanged&&this.updateData(),this.drawChart(),!this.marginsUpdated&&this.autoMargins&&(this.marginsUpdated=!0,this.measureMargins())
var i=this.marginLeftReal,a=this.marginTopReal,e=this.plotAreaWidth,s=this.plotAreaHeight
this.graphsSet.clipRect(i,a,e,s),this.bulletSet.clipRect(i,a,e,s),this.trendLinesSet.clipRect(i,a,e,s),this.drawGraphs=!0,this.showZB()},prepareForExport:function(){var t=this.bulletSet
t.clipPath&&this.container.remove(t.clipPath)},createValueAxes:function(){var i=[],a=[]
this.xAxes=i,this.yAxes=a
var e,s,r=this.valueAxes
for(s=0;s<r.length;s++){var o=(e=r[s]).position
"top"!=o&&"bottom"!=o||(e.rotate=!0),e.setOrientation(e.rotate),"V"==(o=e.orientation)&&a.push(e),"H"==o&&i.push(e)}for(0===a.length&&((e=new t.ValueAxis(this.theme)).rotate=!1,e.setOrientation(!1),r.push(e),a.push(e)),0===i.length&&((e=new t.ValueAxis(this.theme)).rotate=!0,e.setOrientation(!0),r.push(e),i.push(e)),s=0;s<r.length;s++)this.processValueAxis(r[s],s)
for(i=this.graphs,s=0;s<i.length;s++)this.processGraph(i[s],s)},drawChart:function(){t.AmXYChart.base.drawChart.call(this)
var i=this.chartData
this.legend&&(this.legend.valueText=void 0),0<this.realWidth&&0<this.realHeight&&(t.ifArray(i)?(this.chartScrollbar&&this.updateScrollbars(),this.zoomChart()):this.cleanChart(),(i=this.scrollbarH)&&(this.hideXScrollbar?(i&&i.destroy(),this.scrollbarH=null):i.draw()),(i=this.scrollbarV)&&(this.hideYScrollbar?(i.destroy(),this.scrollbarV=null):i.draw()),this.zoomScrollbar()),this.autoMargins&&!this.marginsUpdated||this.dispDUpd()},cleanChart:function(){t.callMethod("destroy",[this.valueAxes,this.graphs,this.scrollbarV,this.scrollbarH,this.chartCursor])},zoomChart:function(){this.zoomObjects(this.valueAxes),this.zoomObjects(this.graphs),this.zoomTrendLines(),this.prevPlotAreaWidth=this.plotAreaWidth,this.prevPlotAreaHeight=this.plotAreaHeight},validateData:function(){if(this.zoomOutOnDataUpdate)for(var i=this.valueAxes,a=0;a<i.length;a++)i[a].minZoom=NaN,i[a].maxZoom=NaN
t.AmXYChart.base.validateData.call(this)},zoomObjects:function(t){var i,a,e=t.length
for(i=0;i<e;i++)a=t[i],a.zoom(0,this.chartData.length-1)},updateData:function(){this.parseData()
var t,i,a=this.chartData,e=a.length-1,s=this.graphs,r=this.dataProvider,o=-1/0,h=1/0
if(r){for(t=0;t<s.length;t++)if(i=s[t],i.data=a,i.zoom(0,e),i=i.valueField){var l
for(l=0;l<r.length;l++){var n=Number(r[l][i])
null!==n&&(n>o&&(o=n),n<h&&(h=n))}}for(isNaN(this.minValue)||(h=this.minValue),isNaN(this.maxValue)||(o=this.maxValue),t=0;t<s.length;t++)i=s[t],i.maxValue=o,i.minValue=h;(a=this.chartCursor)&&(a.type="crosshair",a.valueBalloonsEnabled=!1),this.dataChanged=!1,this.dispatchDataUpdated=!0}},processValueAxis:function(t){t.chart=this,t.minMaxField="H"==t.orientation?"x":"y",t.min=NaN,t.max=NaN},processGraph:function(i){t.isString(i.xAxis)&&(i.xAxis=this.getValueAxisById(i.xAxis)),t.isString(i.yAxis)&&(i.yAxis=this.getValueAxisById(i.yAxis)),i.xAxis||(i.xAxis=this.xAxes[0]),i.yAxis||(i.yAxis=this.yAxes[0]),i.valueAxis=i.yAxis},parseData:function(){t.AmXYChart.base.parseData.call(this),this.chartData=[]
var i,a=this.dataProvider,e=this.valueAxes,s=this.graphs
if(a)for(i=0;i<a.length;i++){var r,o={axes:{},x:{},y:{}},h=this.dataDateFormat,l=a[i]
for(r=0;r<e.length;r++){var n,u=e[r].id
for(o.axes[u]={},o.axes[u].graphs={},n=0;n<s.length;n++){var d=s[n],c=d.id
if(d.xAxis.id==u||d.yAxis.id==u){var m={}
m.serialDataItem=o,m.index=i
var g={},p=l[d.valueField]
null!==p&&(p=Number(p),isNaN(p)||(g.value=p)),null!==(p=l[d.xField])&&("date"==d.xAxis.type&&(p=t.getDate(l[d.xField],h).getTime()),p=Number(p),isNaN(p)||(g.x=p)),null!==(p=l[d.yField])&&("date"==d.yAxis.type&&(p=t.getDate(l[d.yField],h).getTime()),p=Number(p),isNaN(p)||(g.y=p)),null!==(p=l[d.errorField])&&(p=Number(p),isNaN(p)||(g.error=p)),m.values=g,this.processFields(d,m,l),m.serialDataItem=o,m.graph=d,o.axes[u].graphs[c]=m}}}this.chartData[i]=o}this.start=0,this.end=this.chartData.length-1},formatString:function(i,a,e){var s,r,o=a.graph,h=o.numberFormatter
return h||(h=this.nf),"date"==a.graph.xAxis.type&&(s=t.formatDate(new Date(a.values.x),o.dateFormat,this),r=RegExp("\\[\\[x\\]\\]","g"),i=i.replace(r,s)),"date"==a.graph.yAxis.type&&(s=t.formatDate(new Date(a.values.y),o.dateFormat,this),r=RegExp("\\[\\[y\\]\\]","g"),i=i.replace(r,s)),-1!=(i=t.formatValue(i,a.values,["value","x","y"],h)).indexOf("[[")&&(i=t.formatDataContextValue(i,a.dataContext)),t.AmXYChart.base.formatString.call(this,i,a,e)},addChartScrollbar:function(i){if(t.callMethod("destroy",[this.chartScrollbar,this.scrollbarH,this.scrollbarV]),i){this.chartScrollbar=i,this.scrollbarHeight=i.scrollbarHeight
var a="backgroundColor backgroundAlpha selectedBackgroundColor selectedBackgroundAlpha scrollDuration resizeEnabled hideResizeGrips scrollbarHeight updateOnReleaseOnly".split(" ")
if(!this.hideYScrollbar){var e=new t.ChartScrollbar(this.theme)
e.skipEvent=!0,e.chart=this,this.listenTo(e,"zoomed",this.handleScrollbarValueZoom),t.copyProperties(i,e,a),e.rotate=!0,this.scrollbarV=e}this.hideXScrollbar||((e=new t.ChartScrollbar(this.theme)).skipEvent=!0,e.chart=this,this.listenTo(e,"zoomed",this.handleScrollbarValueZoom),t.copyProperties(i,e,a),e.rotate=!1,this.scrollbarH=e)}},updateTrendLines:function(){var i,a=this.trendLines
for(i=0;i<a.length;i++){var e=a[i]
e=t.processObject(e,t.TrendLine,this.theme)
a[i]=e,e.chart=this
var s=e.valueAxis
t.isString(s)&&(e.valueAxis=this.getValueAxisById(s)),s=e.valueAxisX,t.isString(s)&&(e.valueAxisX=this.getValueAxisById(s)),e.id||(e.id="trendLineAuto"+i+"_"+(new Date).getTime()),e.valueAxis||(e.valueAxis=this.yAxes[0]),e.valueAxisX||(e.valueAxisX=this.xAxes[0])}},updateMargins:function(){t.AmXYChart.base.updateMargins.call(this)
var i=this.scrollbarV
i&&(this.getScrollbarPosition(i,!0,this.yAxes[0].position),this.adjustMargins(i,!0)),(i=this.scrollbarH)&&(this.getScrollbarPosition(i,!1,this.xAxes[0].position),this.adjustMargins(i,!1))},updateScrollbars:function(){t.AmXYChart.base.updateScrollbars.call(this)
var i=this.scrollbarV
i&&(this.updateChartScrollbar(i,!0),i.valueAxes=this.yAxes,i.gridAxis||(i.gridAxis=this.yAxes[0])),(i=this.scrollbarH)&&(this.updateChartScrollbar(i,!1),i.valueAxes=this.xAxes,i.gridAxis||(i.gridAxis=this.xAxes[0]))},removeChartScrollbar:function(){t.callMethod("destroy",[this.scrollbarH,this.scrollbarV]),this.scrollbarV=this.scrollbarH=null},handleReleaseOutside:function(i){t.AmXYChart.base.handleReleaseOutside.call(this,i),t.callMethod("handleReleaseOutside",[this.scrollbarH,this.scrollbarV])},update:function(){t.AmXYChart.base.update.call(this),this.scrollbarH&&this.scrollbarH.update&&this.scrollbarH.update(),this.scrollbarV&&this.scrollbarV.update&&this.scrollbarV.update()},zoomScrollbar:function(){this.zoomValueScrollbar(this.scrollbarV),this.zoomValueScrollbar(this.scrollbarH)},handleCursorZoomReal:function(t,i,a,e){isNaN(t)||isNaN(i)||this.relativeZoomValueAxes(this.xAxes,t,i),isNaN(a)||isNaN(e)||this.relativeZoomValueAxes(this.yAxes,a,e),this.updateAfterValueZoom()},handleCursorZoomStarted:function(){if(this.xAxes){var t=this.xAxes[0]
this.startX0=t.relativeStart,this.endX0=t.relativeEnd,t.reversed&&(this.startX0=1-t.relativeEnd,this.endX0=1-t.relativeStart)}this.yAxes&&(t=this.yAxes[0],this.startY0=t.relativeStart,this.endY0=t.relativeEnd,t.reversed&&(this.startY0=1-t.relativeEnd,this.endY0=1-t.relativeStart))},updateChartCursor:function(){t.AmXYChart.base.updateChartCursor.call(this)
var i=this.chartCursor
if(i){i.valueLineEnabled=!0,i.categoryLineAxis||(i.categoryLineAxis=this.xAxes[0])
var a=this.valueAxis
if(i.valueLineBalloonEnabled){var e=i.categoryBalloonAlpha,s=i.categoryBalloonColor,r=i.color
void 0===s&&(s=i.cursorColor)
for(var o=0;o<this.valueAxes.length;o++){var h=(a=this.valueAxes[o]).balloon
h||(h={}),(h=t.extend(h,this.balloon,!0)).fillColor=s,h.balloonColor=s,h.fillAlpha=e,h.borderColor=s,h.color=r,a.balloon=h}}else for(e=0;e<this.valueAxes.length;e++)a=this.valueAxes[e],a.balloon&&(a.balloon=null)
i.zoomable&&(this.hideYScrollbar||(i.vZoomEnabled=!0),this.hideXScrollbar||(i.hZoomEnabled=!0))}},handleCursorPanning:function(i){var a,e=i.deltaX,s=i.delta2X
isNaN(s)&&(s=e,a=!0)
var r=this.endX0,o=this.startX0,h=r-o
s=r-h*s,r=h
a||(r=0),e=t.fitToBounds(o-h*e,0,1-r),s=t.fitToBounds(s,r,1),this.relativeZoomValueAxes(this.xAxes,e,s),h=i.deltaY,i=i.delta2Y,isNaN(i)&&(i=h,a=!0),h=(s=this.endY0)+(o=s-(e=this.startY0))*h,s=o,a||(s=0),a=t.fitToBounds(e+o*i,0,1-s),h=t.fitToBounds(h,s,1),this.relativeZoomValueAxes(this.yAxes,a,h),this.updateAfterValueZoom()},handleValueAxisZoom:function(t){this.handleValueAxisZoomReal(t,"V"==t.valueAxis.orientation?this.yAxes:this.xAxes)},showZB:function(){var i,a=this.valueAxes
if(a)for(var e=0;e<a.length;e++){var s=a[e]
0!==s.relativeStart&&(i=!0),1!=s.relativeEnd&&(i=!0)}t.AmXYChart.base.showZB.call(this,i)}})}()
