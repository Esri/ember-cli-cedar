AmCharts.translations.dataLoader={},AmCharts.addInitHandler(function(t){void 0!==t.dataLoader&&"object"==typeof t.dataLoader||(t.dataLoader={})
var e=t.version.split(".")
if(!(Number(e[0])<3||3===Number(e[0])&&Number(e[1])<13)){var a=t.dataLoader
a.remaining=0,a.percentLoaded={}
var r={async:!0,format:"json",showErrors:!0,showCurtain:!0,noStyles:!1,reload:0,timestamp:!1,delimiter:",",skip:0,skipEmpty:!0,emptyAs:void 0,useColumnNames:!1,init:!1,progress:!1,reverse:!1,reloading:!1,complete:!1,error:!1,numberFields:[],headers:[],chart:t}
a.loadData=function(){if("stock"===t.type)setTimeout(function(){0>t.panelsSettings.startDuration&&(a.startDuration=t.panelsSettings.startDuration,t.panelsSettings.startDuration=0)
for(var e=0;e<t.dataSets.length;e++){var r=t.dataSets[e]
void 0!==r.dataLoader&&void 0!==r.dataLoader.url&&(p(r.dataLoader.init,r.dataLoader,t),r.dataProvider=[],n(r.dataLoader),o(r.dataLoader.url,r,r.dataLoader,"dataProvider")),void 0!==r.eventDataLoader&&void 0!==r.eventDataLoader.url&&(p(r.eventDataLoader.init,r.eventDataLoader,t),r.events=[],n(r.eventDataLoader),o(r.eventDataLoader.url,r,r.eventDataLoader,"stockEvents"))}},100)
else{if(p(a.init,a,t),n(a),void 0===a.url)return
void 0!==t.startDuration&&0<t.startDuration&&(a.startDuration=t.startDuration,t.startDuration=0),"gauge"===t.type?(void 0===t.arrows&&(t.arrows=[]),o(a.url,t,a,"arrows")):(void 0===t.dataProvider&&(t.dataProvider="map"===t.type?{}:[]),o(a.url,t,a,"dataProvider"))}},a.loadData()}function o(e,r,n,s){void 0===s&&(s="dataProvider"),n.showCurtain&&l(void 0,n.noStyles),a.remaining++,a.percentLoaded[e]=0,void 0!==n.progress&&"function"==typeof n.progress&&void 0===n._progress&&(n._progress=n.progress,n.progress=function(t){a.percentLoaded[e]=t
var r=0,o=0
for(var i in a.percentLoaded)a.percentLoaded.hasOwnProperty(i)&&(o++,r+=a.percentLoaded[i])
var s=Math.round(r/o*100)/100
n._progress.call(this,s,Math.round(100*t)/100,e)}),AmCharts.loadFile(e,n,function(l){if(!1===l)p(n.error,n,t),d(AmCharts.__("Error loading the file",t.language)+": "+e,!1,n)
else{switch(void 0===n.format&&(n.format="json"),n.format=n.format.toLowerCase(),n.format){case"json":if(r[s]=AmCharts.parseJSON(l),!1===r[s])return p(n.error,n,t),d(AmCharts.__("Error parsing JSON file",t.language)+": "+a.url,!1,n),void(r[s]=[])
r[s]=i(r[s],n),p(n.load,n,t)
break
case"csv":if(r[s]=AmCharts.parseCSV(l,n),!1===r[s])return p(n.error,n,t),d(AmCharts.__("Error parsing CSV file",t.language)+": "+a.url,!1,n),void(r[s]=[])
r[s]=i(r[s],n),p(n.load,n,t)
break
default:return p(n.error,n,t),void d(AmCharts.__("Unsupported data format",t.language)+": "+n.format,!1,n.noStyles)}if(a.remaining--,0===a.remaining&&(p(n.complete,t),n.async))if("map"===t.type)t.validateNow(!0),u()
else if("gauge"!==t.type&&t.addListener("dataUpdated",function(e){"stock"!==t.type||n.reloading||void 0===t.periodSelector||t.periodSelector.setDefaultPeriod(),u(),t.events.dataUpdated.pop()}),"gauge"===t.type?(u(),t.validateNow()):t.validateData(),a.startDuration)if("stock"===t.type){t.panelsSettings.startDuration=a.startDuration
for(var c=0;c<t.panels.length;c++)t.panels[c].startDuration=a.startDuration,t.panels[c].animateAgain()}else t.startDuration=a.startDuration,void 0!==t.animateAgain&&t.animateAgain()}n.reload&&(n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout(o,1e3*n.reload,e,r,n,s),n.reloading=!0)})}function i(e,r){if(void 0===r.postProcess||"function"!=typeof r.postProcess)return e
try{return r.postProcess.call(a,e,r,t)}catch(a){return d(AmCharts.__("Error loading file",t.language)+": "+r.url,!1,r),e}}function n(t){for(var e in r)r.hasOwnProperty(e)&&s(t,e,r[e])}function s(t,e,a){void 0===t[e]&&(t[e]=a)}function d(t,e,a){a.showErrors?l(t,a.noStyles):(u(),console.log(t))}function l(e,r){u(),void 0===e&&(e=AmCharts.__("Loading data...",t.language))
var o=document.createElement("div")
if(o.setAttribute("id",t.div.id+"-curtain"),o.className="amcharts-dataloader-curtain",!0!==r){o.style.position="absolute",o.style.top=0,o.style.left=0,o.style.width=(void 0!==t.realWidth?t.realWidth:t.divRealWidth)+"px",o.style.height=(void 0!==t.realHeight?t.realHeight:t.divRealHeight)+"px",o.style.textAlign="center",o.style.display="table",o.style.fontSize="20px"
try{o.style.background="rgba(255, 255, 255, 0.3)"}catch(t){o.style.background="rgb(255, 255, 255)"}o.innerHTML='<div style="display: table-cell; vertical-align: middle;">'+e+"</div>"}else o.innerHTML=e
t.containerDiv.appendChild(o),a.curtain=o}function u(){try{void 0!==a.curtain&&t.containerDiv.removeChild(a.curtain)}catch(t){}a.curtain=void 0}function p(t,e,r,o){"function"==typeof t&&t.call(a,e,r,o)}},["pie","serial","xy","funnel","radar","gauge","gantt","stock","map"]),void 0===AmCharts.__&&(AmCharts.__=function(t,e){return void 0!==e&&void 0!==AmCharts.translations.dataLoader[e]&&void 0!==AmCharts.translations.dataLoader[e][t]?AmCharts.translations.dataLoader[e][t]:t}),AmCharts.loadFile=function(t,e,a){var r
"object"!=typeof e&&(e={}),void 0===e.async&&(e.async=!0),r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")
try{r.open("GET",e.timestamp?AmCharts.timestampUrl(t):t,e.async)}catch(t){a.call(this,!1)}if(void 0!==e.headers&&e.headers.length)for(var o=0;o<e.headers.length;o++){var i=e.headers[o]
r.setRequestHeader(i.key,i.value)}void 0!==e.progress&&"function"==typeof e.progress&&(r.onprogress=function(t){var a=t.loaded/t.total*100
e.progress.call(this,a)}),r.onreadystatechange=function(){4!==r.readyState||404!==r.status&&500!==r.status?4===r.readyState&&200===r.status&&a.call(this,r.responseText):a.call(this,!1)}
try{r.send()}catch(t){a.call(this,!1)}},AmCharts.parseJSON=function(response){try{return void 0!==JSON?JSON.parse(response):eval(response)}catch(t){return!1}},AmCharts.parseCSV=function(t,e){var a,r,o,i=AmCharts.CSVToArray(t,e.delimiter),n=e.numberFields&&e.numberFields.length>0,s=[],d=[]
if(e.useColumnNames){d=i.shift()
for(var l=0;l<d.length;l++)""===(a=d[l].replace(/^\s+|\s+$/gm,""))&&(a="col"+l),d[l]=a
0<e.skip&&e.skip--}for(r=0;r<e.skip;r++)i.shift()
for(;o=e.reverse?i.pop():i.shift();)if(!e.skipEmpty||1!==o.length||""!==o[0]){var u={}
for(r=0;r<o.length;r++)u[a=void 0===d[r]?"col"+r:d[r]]=""===o[r]?e.emptyAs:o[r],n&&-1!==e.numberFields.indexOf(a)&&(u[a]=Number(u[a]))
s.push(u)}return s},AmCharts.CSVToArray=function(t,e){e=e||","
for(var a=new RegExp("(\\"+e+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+e+"\\r\\n]*))","gi"),r=[[]],o=null;o=a.exec(t);){var i,n=o[1]
n.length&&n!==e&&r.push([]),i=o[2]?o[2].replace(new RegExp('""',"g"),'"'):o[3],r[r.length-1].push(i)}return r},AmCharts.timestampUrl=function(t){var e=t.split("?")
return 1===e.length?e[1]=(new Date).getTime():e[1]+="&"+(new Date).getTime(),e.join("?")}
