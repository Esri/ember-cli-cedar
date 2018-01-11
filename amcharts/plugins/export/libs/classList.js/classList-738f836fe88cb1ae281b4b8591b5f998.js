"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){"use strict"
if("Element"in t){var e="prototype",n=t.Element[e],i=Object,s=String[e].trim||function(){return this.replace(/^\s+|\s+$/g,"")},r=Array[e].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e
return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified")
if(/\s/.test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")
return r.call(t,e)},a=function(t){for(var e=s.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,r=n.length;i<r;i++)this.push(n[i])
this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=a[e]=[],u=function(){return new a(this)}
if(o[e]=Error[e],l.item=function(t){return this[t]||null},l.contains=function(t){return-1!==c(this,t+="")},l.add=function(){var t,e=arguments,n=0,i=e.length,s=!1
do{t=e[n]+"",-1===c(this,t)&&(this.push(t),s=!0)}while(++n<i)
s&&this._updateClassName()},l.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1
do{for(t=n[i]+"",e=c(this,t);-1!==e;)this.splice(e,1),r=!0,e=c(this,t)}while(++i<s)
r&&this._updateClassName()},l.toggle=function(t,e){t+=""
var n=this.contains(t),i=n?!0!==e&&"remove":!1!==e&&"add"
return i&&this[i](t),!0===e||!1===e?e:!n},l.toString=function(){return this.join(" ")},i.defineProperty){var h={get:u,enumerable:!0,configurable:!0}
try{i.defineProperty(n,"classList",h)}catch(t){void 0!==t.number&&-2146823252!==t.number||(h.enumerable=!1,i.defineProperty(n,"classList",h))}}else i[e].__defineGetter__&&n.__defineGetter__("classList",u)}}(self),function(){"use strict"
var t=document.createElement("_")
if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t]
DOMTokenList.prototype[t]=function(t){var n,i=arguments.length
for(n=0;n<i;n++)t=arguments[n],e.call(this,t)}}
e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle
DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}())
