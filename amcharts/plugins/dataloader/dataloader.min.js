AmCharts.translations.dataLoader={},AmCharts.addInitHandler(function(t){function e(r,d,u,p){void 0===p&&(p="dataProvider"),u.showCurtain&&i(void 0,u.noStyles),l.remaining++,l.percentLoaded[r]=0,void 0!==u.progress&&"function"==typeof u.progress&&void 0===u._progress&&(u._progress=u.progress,u.progress=function(t){l.percentLoaded[r]=t
var e=0,a=0
for(var o in l.percentLoaded)l.percentLoaded.hasOwnProperty(o)&&(a++,e+=l.percentLoaded[o])
var i=Math.round(e/a*100)/100
u._progress.call(this,i,Math.round(100*t)/100,r)}),AmCharts.loadFile(r,u,function(i){if(!1===i)s(u.error,u,t),o(AmCharts.__("Error loading the file",t.language)+": "+r,!1,u)
else{switch(void 0===u.format&&(u.format="json"),u.format=u.format.toLowerCase(),u.format){case"json":if(d[p]=AmCharts.parseJSON(i),!1===d[p])return s(u.error,u,t),o(AmCharts.__("Error parsing JSON file",t.language)+": "+l.url,!1,u),void(d[p]=[])
d[p]=a(d[p],u),s(u.load,u,t)
break
case"csv":if(d[p]=AmCharts.parseCSV(i,u),!1===d[p])return s(u.error,u,t),o(AmCharts.__("Error parsing CSV file",t.language)+": "+l.url,!1,u),void(d[p]=[])
d[p]=a(d[p],u),s(u.load,u,t)
break
default:return s(u.error,u,t),void o(AmCharts.__("Unsupported data format",t.language)+": "+u.format,!1,u.noStyles)}if(l.remaining--,0===l.remaining&&(s(u.complete,t),u.async))if("map"===t.type)t.validateNow(!0),n()
else if("gauge"!==t.type&&t.addListener("dataUpdated",function(e){"stock"!==t.type||u.reloading||void 0===t.periodSelector||t.periodSelector.setDefaultPeriod(),n(),t.events.dataUpdated.pop()}),"gauge"===t.type?(n(),t.validateNow()):t.validateData(),l.startDuration)if("stock"===t.type){t.panelsSettings.startDuration=l.startDuration
for(var c=0;c<t.panels.length;c++)t.panels[c].startDuration=l.startDuration,t.panels[c].animateAgain()}else t.startDuration=l.startDuration,void 0!==t.animateAgain&&t.animateAgain()}u.reload&&(u.timeout&&clearTimeout(u.timeout),u.timeout=setTimeout(e,1e3*u.reload,r,d,u,p),u.reloading=!0)})}function a(e,a){if(void 0===a.postProcess||"function"!=typeof a.postProcess)return e
try{return a.postProcess.call(l,e,a,t)}catch(r){return o(AmCharts.__("Error loading file",t.language)+": "+a.url,!1,a),e}}function r(t){for(var e in u)u.hasOwnProperty(e)&&(a=t,r=e,o=u[e],void 0===a[r]&&(a[r]=o))
var a,r,o}function o(t,e,a){a.showErrors?i(t,a.noStyles):(n(),console.log(t))}function i(e,a){n(),void 0===e&&(e=AmCharts.__("Loading data...",t.language))
var r=document.createElement("div")
if(r.setAttribute("id",t.div.id+"-curtain"),r.className="amcharts-dataloader-curtain",!0!==a){r.style.position="absolute",r.style.top=0,r.style.left=0,r.style.width=(void 0!==t.realWidth?t.realWidth:t.divRealWidth)+"px",r.style.height=(void 0!==t.realHeight?t.realHeight:t.divRealHeight)+"px",r.style.textAlign="center",r.style.display="table",r.style.fontSize="20px"
try{r.style.background="rgba(255, 255, 255, 0.3)"}catch(t){r.style.background="rgb(255, 255, 255)"}r.innerHTML='<div style="display: table-cell; vertical-align: middle;">'+e+"</div>"}else r.innerHTML=e
t.containerDiv.appendChild(r),l.curtain=r}function n(){try{void 0!==l.curtain&&t.containerDiv.removeChild(l.curtain)}catch(t){}l.curtain=void 0}function s(t,e,a,r){"function"==typeof t&&t.call(l,e,a,r)}void 0!==t.dataLoader&&"object"==typeof t.dataLoader||(t.dataLoader={})
var d=t.version.split(".")
if(!(Number(d[0])<3||3===Number(d[0])&&Number(d[1])<13)){var l=t.dataLoader
l.remaining=0,l.percentLoaded={}
var u={async:!0,format:"json",showErrors:!0,showCurtain:!0,noStyles:!1,reload:0,timestamp:!1,delimiter:",",skip:0,skipEmpty:!0,emptyAs:void 0,useColumnNames:!1,init:!1,progress:!1,reverse:!1,reloading:!1,complete:!1,error:!1,numberFields:[],headers:[],chart:t}
l.loadData=function(){if("stock"===t.type)setTimeout(function(){0>t.panelsSettings.startDuration&&(l.startDuration=t.panelsSettings.startDuration,t.panelsSettings.startDuration=0)
for(var a=0;a<t.dataSets.length;a++){var o=t.dataSets[a]
void 0!==o.dataLoader&&void 0!==o.dataLoader.url&&(s(o.dataLoader.init,o.dataLoader,t),o.dataProvider=[],r(o.dataLoader),e(o.dataLoader.url,o,o.dataLoader,"dataProvider")),void 0!==o.eventDataLoader&&void 0!==o.eventDataLoader.url&&(s(o.eventDataLoader.init,o.eventDataLoader,t),o.events=[],r(o.eventDataLoader),e(o.eventDataLoader.url,o,o.eventDataLoader,"stockEvents"))}},100)
else{if(s(l.init,l,t),r(l),void 0===l.url)return
void 0!==t.startDuration&&0<t.startDuration&&(l.startDuration=t.startDuration,t.startDuration=0),"gauge"===t.type?(void 0===t.arrows&&(t.arrows=[]),e(l.url,t,l,"arrows")):(void 0===t.dataProvider&&(t.dataProvider="map"===t.type?{}:[]),e(l.url,t,l,"dataProvider"))}},l.loadData()}},["pie","serial","xy","funnel","radar","gauge","gantt","stock","map"]),void 0===AmCharts.__&&(AmCharts.__=function(t,e){return void 0!==e&&void 0!==AmCharts.translations.dataLoader[e]&&void 0!==AmCharts.translations.dataLoader[e][t]?AmCharts.translations.dataLoader[e][t]:t}),AmCharts.loadFile=function(t,e,a){var r
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
