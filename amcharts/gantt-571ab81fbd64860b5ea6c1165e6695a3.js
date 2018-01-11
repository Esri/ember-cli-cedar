(function(){var t=window.AmCharts
t.AmGanttChart=t.Class({inherits:t.AmSerialChart,construct:function(a){this.type="gantt",t.AmGanttChart.base.construct.call(this,a),this.cname="AmGanttChart",this.period="ss",this.maxZoomFactor=1e6},initChart:function(){this.dataChanged&&this.processGanttData(),t.AmGanttChart.base.initChart.call(this)},parseData:function(){t.AmSerialChart.base.parseData.call(this),this.parseSerialData(this.ganttDataProvider)},processGanttData:function(){var a
this.graphs=[]
var i=this.dataProvider
this.ganttDataProvider=[]
var e,s=this.categoryField,r=this.startField,o=this.endField,l=this.durationField,h=this.startDateField,n=this.endDateField,m=this.colorField,u=(c=t.extractPeriod(this.period)).period,c=c.count,d=this.dataDateFormat,g=t.getDate(this.startDate,d,"fff")
if(this.categoryAxis.gridPosition="start",a=this.valueAxis,this.valueAxes=[a],"date"==a.type&&(e=!0),a.minimumDate&&(a.minimumDate=t.getDate(a.minimumDate,d,u)),a.maximumDate&&(a.maximumDate=t.getDate(a.maximumDate,d,u)),isNaN(a.minimum)||(a.minimumDate=t.changeDate(new Date(g),u,a.minimum,!0,!0)),isNaN(a.maximum)||(a.maximumDate=t.changeDate(new Date(g),u,a.maximum,!0,!0)),i)for(a=0;a<i.length;a++){var D=i[a],p={}
p[s]=D[s]
var f,v=D[this.segmentsField]
if(this.ganttDataProvider.push(p),D=D[m],this.colors[a]||(this.colors[a]=t.randomColor()),v)for(var C=0;C<v.length;C++){var F=v[C],N=F[r],b=F[o],x=F[l]
isNaN(N)&&(N=f),isNaN(x)||(b=N+x)
var A="end_"+a+"_"+C
p[x="start_"+a+"_"+C]=N,p[A]=b
var y,P,_="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className".split(" ")
for(P in _)y=_[P]+"Field",(f=this.graph[y])&&void 0!==F[f]&&(p[_[P]+"_"+a+"_"+C]=F[f])
if(f=b,e){y=t.getDate(F[h],d,u)
var w=t.getDate(F[n],d,u)
g&&(isNaN(N)||(y=t.changeDate(t.newDate(g,"fff"),u,N*c,!0,!0)),isNaN(b)||(w=t.changeDate(t.newDate(g,"fff"),u,b*c,!0,!0))),p[x]=y.getTime(),p[A]=w.getTime()}b={},t.copyProperties(F,b),N={},t.copyProperties(this.graph,N,!0)
for(P in _)y=_[P]+"Field",this.graph[y]&&(N[y]=_[P]+"_"+a+"_"+C)
N.customData=b,N.segmentData=F,N.labelFunction=this.graph.labelFunction,N.balloonFunction=this.graph.balloonFunction,N.customBullet=this.graph.customBullet,N.type="column",N.openField=x,N.valueField=A,N.clustered=!1,F[m]&&(D=F[m]),N.columnWidth=F[this.columnWidthField],void 0===D&&(D=this.colors[a]),(F=this.brightnessStep)&&(D=t.adjustLuminosity(D,C*F/100)),void 0===this.graph.lineColor&&(N.lineColor=D),void 0===this.graph.fillColors&&(N.fillColors=D),this.graphs.push(N)}}}})})()
