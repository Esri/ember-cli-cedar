var XLSX={};(function(e){e.version="0.10.3"
var t=1200
function r(){n(1200)}"undefined"!=typeof module&&"undefined"!=typeof require&&"undefined"==typeof cptable&&(global.cptable=require("./dist/cpexcel.js"))
var n=function(e){t=e}
function a(e){for(var t=[],r=0,n=e.length;r<n;++r)t[r]=e.charCodeAt(r)
return t}var s=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1)
return 255==t&&254==r?e.substr(2):254==t&&255==r?e.substr(2):65279==t?e.substr(1):e},i=function(e){return String.fromCharCode(e)}
"undefined"!=typeof cptable&&(n=function(e){t=e},s=function(e){return 255===e.charCodeAt(0)&&254===e.charCodeAt(1)?cptable.utils.decode(1200,a(e.substr(2))):e},i=function(e){return 1200===t?String.fromCharCode(e):cptable.utils.decode(t,[255&e,e>>8])[0]})
var c,o=null,l=(c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",{encode:function(e){for(var t,r,n,a,s,i,o,l="",f=0;f<e.length;)a=(t=e.charCodeAt(f++))>>2,s=(3&t)<<4|(r=e.charCodeAt(f++))>>4,i=(15&r)<<2|(n=e.charCodeAt(f++))>>6,o=63&n,isNaN(r)?i=o=64:isNaN(n)&&(o=64),l+=c.charAt(a)+c.charAt(s)+c.charAt(i)+c.charAt(o)
return l},decode:function(e){var t,r,n,a,s,i,o=""
e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"")
for(var l=0;l<e.length;)t=c.indexOf(e.charAt(l++))<<2|(a=c.indexOf(e.charAt(l++)))>>4,r=(15&a)<<4|(s=c.indexOf(e.charAt(l++)))>>2,n=(3&s)<<6|(i=c.indexOf(e.charAt(l++))),o+=String.fromCharCode(t),64!=s&&(o+=String.fromCharCode(r)),64!=i&&(o+=String.fromCharCode(n))
return o}}),f="undefined"!=typeof Buffer&&"undefined"!=typeof process&&void 0!==process.versions&&process.versions.node
function h(e){return new(f?Buffer:Array)(e)}function u(e){return f?new Buffer(e,"binary"):e.split("").map(function(e){return 255&e.charCodeAt(0)})}var d=function(e){return[].concat.apply([],e)},p=/\u0000/g,m=/[\u0001-\u0006]/,g={},b=function(e){function t(e){for(var t="",r=e.length-1;r>=0;)t+=e.charAt(r--)
return t}function r(e,t){for(var r="";r.length<t;)r+=e
return r}function n(e,t){var n=""+e
return n.length>=t?n:r("0",t-n.length)+n}function a(e,t){var n=""+e
return n.length>=t?n:r(" ",t-n.length)+n}function s(e,t){var n=""+e
return n.length>=t?n:n+r(" ",t-n.length)}e.version="0.9.3"
var i=Math.pow(2,32)
function c(e,t){if(e>i||e<-i)return n=e,a=t,s=""+Math.round(n),s.length>=a?s:r("0",a-s.length)+s
var n,a,s,c,o,l=Math.round(e)
return(o=""+l).length>=(c=t)?o:r("0",c-o.length)+o}function o(e,t){return t=t||0,e.length>=7+t&&103==(32|e.charCodeAt(t))&&101==(32|e.charCodeAt(t+1))&&110==(32|e.charCodeAt(t+2))&&101==(32|e.charCodeAt(t+3))&&114==(32|e.charCodeAt(t+4))&&97==(32|e.charCodeAt(t+5))&&108==(32|e.charCodeAt(t+6))}var l=[["date1904",0],["output",""],["WTF",!1]]
e.opts=l
var f=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],h=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]]
function u(e){e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e[65535]="General"}var d={}
function p(e,t,r){for(var n=e<0?-1:1,a=e*n,s=0,i=1,c=0,o=1,l=0,f=0,h=Math.floor(a);l<t&&(c=(h=Math.floor(a))*i+s,f=h*l+o,!(a-h<5e-8));)a=1/(a-h),s=i,i=c,o=l,l=f
if(f>t&&(l>t?(f=o,c=s):(f=l,c=i)),!r)return[0,n*c,f]
var u=Math.floor(n*c/f)
return[u,n*c-u*f,f]}function m(e){return""+e}u(d),e._general_int=m
var g=function(){var e=/\.(\d*[1-9])0+$/,t=/\.0*$/,r=/\.(\d*[1-9])0+/,n=/\.0*[Ee]/,a=/(E[+-])(\d)$/
function s(r){return r.indexOf(".")>-1?r.replace(t,"").replace(e,".$1"):r}return function(t){var i,c,o,l,f,h,u=Math.floor(Math.log(Math.abs(t))*Math.LOG10E)
return u>=-4&&u<=-1?i=t.toPrecision(10+u):Math.abs(u)<=9?(f=(l=t)<0?12:11,i=(h=s(l.toFixed(12))).length<=f?h:(h=l.toPrecision(10)).length<=f?h:l.toExponential(5)):10===u?i=t.toFixed(10).substr(0,12):((o=(c=t).toFixed(11).replace(e,".$1")).length>(c<0?12:11)&&(o=c.toPrecision(6)),i=o),s(function(e){for(var t=0;t!=e.length;++t)if(101==(32|e.charCodeAt(t)))return e.replace(r,".$1").replace(n,"E").replace("e","E").replace(a,"$10$2")
return e}(i))}}()
function b(e){switch(typeof e){case"string":return e
case"boolean":return e?"TRUE":"FALSE"
case"number":return(0|e)===e?m(e):g(e)
case"undefined":return""
case"object":if(null==e)return""}throw new Error("unsupported value in General format: "+e)}function E(e,t,r){if(e>2958465||e<0)return null
var n=0|e,a=Math.floor(86400*(e-n)),s=0,i=[],c={D:n,T:a,u:86400*(e-n)-a,y:0,m:0,d:0,H:0,M:0,S:0,q:0}
if(Math.abs(c.u)<1e-6&&(c.u=0),function(e){for(var t=0;t!=l.length;++t)void 0===e[l[t][0]]&&(e[l[t][0]]=l[t][1])}(null!=t?t:t=[]),t.date1904&&(n+=1462),c.u>.9999&&(c.u=0,86400==++a&&(c.T=a=0,++n,++c.D)),60===n)i=r?[1317,10,29]:[1900,2,29],s=3
else if(0===n)i=r?[1317,8,29]:[1900,1,0],s=6
else{n>60&&--n
var o=new Date(1900,0,1)
o.setDate(o.getDate()+n-1),i=[o.getFullYear(),o.getMonth()+1,o.getDate()],s=o.getDay(),n<60&&(s=(s+6)%7),r&&(s=0)}return c.y=i[0],c.m=i[1],c.d=i[2],c.S=a%60,a=Math.floor(a/60),c.M=a%60,a=Math.floor(a/60),c.H=a,c.q=s,c}function v(e,t,r,a){var s,i="",c=0,o=0,l=r.y,u=0
switch(e){case 98:l=r.y+543
case 121:switch(t.length){case 1:case 2:s=l%100,u=2
break
default:s=l%1e4,u=4}break
case 109:switch(t.length){case 1:case 2:s=r.m,u=t.length
break
case 3:return h[r.m-1][1]
case 5:return h[r.m-1][0]
default:return h[r.m-1][2]}break
case 100:switch(t.length){case 1:case 2:s=r.d,u=t.length
break
case 3:return f[r.q][0]
default:return f[r.q][1]}break
case 104:switch(t.length){case 1:case 2:s=1+(r.H+11)%12,u=t.length
break
default:throw"bad hour format: "+t}break
case 72:switch(t.length){case 1:case 2:s=r.H,u=t.length
break
default:throw"bad hour format: "+t}break
case 77:switch(t.length){case 1:case 2:s=r.M,u=t.length
break
default:throw"bad minute format: "+t}break
case 115:if(0===r.u)switch(t){case"s":case"ss":return n(r.S,t.length)}switch(t){case"s":case"ss":case".0":case".00":case".000":return o=a>=2?3===a?1e3:100:1===a?10:1,(c=Math.round(o*(r.S+r.u)))>=60*o&&(c=0),"s"===t?0===c?"0":""+c/o:(i=n(c,2+a),"ss"===t?i.substr(0,2):"."+i.substr(2,t.length-1))
default:throw"bad second format: "+t}case 90:switch(t){case"[h]":case"[hh]":s=24*r.D+r.H
break
case"[m]":case"[mm]":s=60*(24*r.D+r.H)+r.M
break
case"[s]":case"[ss]":s=60*(60*(24*r.D+r.H)+r.M)+Math.round(r.S+r.u)
break
default:throw"bad abstime format: "+t}u=3===t.length?1:2
break
case 101:s=l,u=1}return u>0?n(s,u):""}function S(e){if(e.length<=3)return e
for(var t=e.length%3,r=e.substr(0,t);t!=e.length;t+=3)r+=(r.length>0?",":"")+e.substr(t,3)
return r}e._general_num=g,e._general=b,e.parse_date_code=E
var B=function(){var e=/%/g
var i=/# (\?+)( ?)\/( ?)(\d+)/
var o=/^#*0*\.(0+)/,l=/\).*[0#]/,f=/\(###\) ###\\?-####/
function h(e){for(var t,r="",n=0;n!=e.length;++n)switch(t=e.charCodeAt(n)){case 35:break
case 63:r+=" "
break
case 48:r+="0"
break
default:r+=String.fromCharCode(t)}return r}function u(e,t){var r=Math.pow(10,t)
return""+Math.round(e*r)/r}function d(e,t){return t<(""+Math.round((e-Math.floor(e))*Math.pow(10,t))).length?0:Math.round((e-Math.floor(e))*Math.pow(10,t))}function m(g,b,E){if(40===g.charCodeAt(0)&&!b.match(l)){var v=b.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"")
return E>=0?m("n",v,E):"("+m("n",v,-E)+")"}if(44===b.charCodeAt(b.length-1))return function(e,t,r){for(var n=t.length-1;44===t.charCodeAt(n-1);)--n
return B(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}(g,b,E)
if(-1!==b.indexOf("%"))return C=g,T=b,w=E,k=T.replace(e,""),I=T.length-k.length,B(C,k,w*Math.pow(10,2*I))+r("%",I)
var C,T,w,k,I,A
if(-1!==b.indexOf("E"))return function e(t,r){var n,a=t.indexOf("E")-t.indexOf(".")-1
if(t.match(/^#+0.0E\+0$/)){if(0==r)return"0.0E+0"
if(r<0)return"-"+e(t,-r)
var s=t.indexOf(".");-1===s&&(s=t.indexOf("E"))
var i=Math.floor(Math.log(r)*Math.LOG10E)%s
if(i<0&&(i+=s),-1===(n=(r/Math.pow(10,i)).toPrecision(a+1+(s+i)%s)).indexOf("e")){var c=Math.floor(Math.log(r)*Math.LOG10E)
for(-1===n.indexOf(".")?n=n.charAt(0)+"."+n.substr(1)+"E+"+(c-n.length+i):n+="E+"+(c-i);"0."===n.substr(0,2);)n=(n=n.charAt(0)+n.substr(2,s)+"."+n.substr(2+s)).replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.")
n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,r,n){return t+r+n.substr(0,(s+i)%s)+"."+n.substr(i)+"E"})}else n=r.toExponential(a)
return t.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+"0"+n.charAt(n.length-1)),t.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,"e")),n.replace("e","E")}(b,E)
if(36===b.charCodeAt(0))return"$"+m(g,b.substr(" "==b.charAt(1)?2:1),E)
var x,R,D,O,F,P,y,N,_,M,L,U,H,V=Math.abs(E),W=E<0?"-":""
if(b.match(/^00+$/))return W+c(V,b.length)
if(b.match(/^[#?]+$/))return"0"===(A=c(E,0))&&(A=""),A.length>b.length?A:h(b.substr(0,b.length-A.length))+A
if(x=b.match(i))return O=x,F=V,P=W,y=parseInt(O[4],10),N=Math.round(F*y),_=Math.floor(N/y),M=N-_*y,L=y,P+(0===_?"":""+_)+" "+(0===M?r(" ",O[1].length+1+O[4].length):a(M,O[1].length)+O[2]+"/"+O[3]+n(L,O[4].length))
if(b.match(/^#+0+$/))return W+c(V,b.length-b.indexOf("0"))
if(x=b.match(o))return A=u(E,x[1].length).replace(/^([^\.]+)$/,"$1."+x[1]).replace(/\.$/,"."+x[1]).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",x[1].length-t.length)}),-1!==b.indexOf("0.")?A:A.replace(/^0\./,".")
if(b=b.replace(/^#+([0.])/,"$1"),x=b.match(/^(0*)\.(#*)$/))return W+u(V,x[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,x[1].length?"0.":".")
if(x=b.match(/^#{1,3},##0(\.?)$/))return W+S(c(V,0))
if(x=b.match(/^#,##0\.([#0]*0)$/))return E<0?"-"+m(g,b,-E):S(""+(Math.floor(E)+(U=E,(H=x[1].length)<(""+Math.round((U-Math.floor(U))*Math.pow(10,H))).length?1:0)))+"."+n(d(E,x[1].length),x[1].length)
if(x=b.match(/^#,#*,#0/))return m(g,b.replace(/^#,#*,/,""),E)
if(x=b.match(/^([0#]+)(\\?-([0#]+))+$/))return A=t(m(g,b.replace(/[\\-]/g,""),E)),R=0,t(t(b.replace(/\\/g,"")).replace(/[0#]/g,function(e){return R<A.length?A.charAt(R++):"0"===e?"0":""}))
if(b.match(f))return"("+(A=m(g,"##########",E)).substr(0,3)+") "+A.substr(3,3)+"-"+A.substr(6)
var X,G=""
if(x=b.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return R=Math.min(x[4].length,7),D=p(V,Math.pow(10,R)-1,!1),A=""+W," "==(G=B("n",x[1],D[1])).charAt(G.length-1)&&(G=G.substr(0,G.length-1)+"0"),A+=G+x[2]+"/"+x[3],(G=s(D[2],R)).length<x[4].length&&(G=h(x[4].substr(x[4].length-G.length))+G),A+=G
if(x=b.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return R=Math.min(Math.max(x[1].length,x[4].length),7),W+((D=p(V,Math.pow(10,R)-1,!0))[0]||(D[1]?"":"0"))+" "+(D[1]?a(D[1],R)+x[2]+"/"+x[3]+s(D[2],R):r(" ",2*R+1+x[2].length+x[3].length))
if(x=b.match(/^[#0?]+$/))return A=c(E,0),b.length<=A.length?A:h(b.substr(0,b.length-A.length))+A
if(x=b.match(/^([#0?]+)\.([#0]+)$/)){A=""+E.toFixed(Math.min(x[2].length,10)).replace(/([^0])0+$/,"$1"),R=A.indexOf(".")
var z=b.indexOf(".")-R,j=b.length-A.length-z
return h(b.substr(0,z)+A+b.substr(b.length-j))}if(x=b.match(/^00,000\.([#0]*0)$/))return R=d(E,x[1].length),E<0?"-"+m(g,b,-E):S((X=E,X<2147483647&&X>-2147483648?""+(X>=0?0|X:X-1|0):""+Math.floor(X))).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?n(0,3-e.length):"")+e})+"."+n(R,x[1].length)
switch(b){case"###,##0.00":return m(g,"#,##0.00",E)
case"###,###":case"##,###":case"#,###":var K=S(c(V,0))
return"0"!==K?W+K:""
case"###,###.00":return m(g,"###,##0.00",E).replace(/^0\./,".")
case"#,###.00":return m(g,"#,##0.00",E).replace(/^0\./,".")}throw new Error("unsupported format |"+b+"|")}function g(c,u,d){if(40===c.charCodeAt(0)&&!u.match(l)){var m=u.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"")
return d>=0?g("n",m,d):"("+g("n",m,-d)+")"}if(44===u.charCodeAt(u.length-1))return function(e,t,r){for(var n=t.length-1;44===t.charCodeAt(n-1);)--n
return B(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}(c,u,d)
if(-1!==u.indexOf("%"))return b=c,E=u,v=d,C=E.replace(e,""),T=E.length-C.length,B(b,C,v*Math.pow(10,2*T))+r("%",T)
var b,E,v,C,T,w
if(-1!==u.indexOf("E"))return function e(t,r){var n,a=t.indexOf("E")-t.indexOf(".")-1
if(t.match(/^#+0.0E\+0$/)){if(0==r)return"0.0E+0"
if(r<0)return"-"+e(t,-r)
var s=t.indexOf(".");-1===s&&(s=t.indexOf("E"))
var i=Math.floor(Math.log(r)*Math.LOG10E)%s
if(i<0&&(i+=s),!(n=(r/Math.pow(10,i)).toPrecision(a+1+(s+i)%s)).match(/[Ee]/)){var c=Math.floor(Math.log(r)*Math.LOG10E);-1===n.indexOf(".")?n=n.charAt(0)+"."+n.substr(1)+"E+"+(c-n.length+i):n+="E+"+(c-i),n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,r,n){return t+r+n.substr(0,(s+i)%s)+"."+n.substr(i)+"E"})}else n=r.toExponential(a)
return t.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+"0"+n.charAt(n.length-1)),t.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,"e")),n.replace("e","E")}(u,d)
if(36===u.charCodeAt(0))return"$"+g(c,u.substr(" "==u.charAt(1)?2:1),d)
var k,I,A,x,R,D,O=Math.abs(d),F=d<0?"-":""
if(u.match(/^00+$/))return F+n(O,u.length)
if(u.match(/^[#?]+$/))return w=""+d,0===d&&(w=""),w.length>u.length?w:h(u.substr(0,u.length-w.length))+w
if(k=u.match(i))return x=k,R=O,D=F,D+(0===R?"":""+R)+r(" ",x[1].length+2+x[4].length)
if(u.match(/^#+0+$/))return F+n(O,u.length-u.indexOf("0"))
if(k=u.match(o))return w=(w=(""+d).replace(/^([^\.]+)$/,"$1."+k[1]).replace(/\.$/,"."+k[1])).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",k[1].length-t.length)}),-1!==u.indexOf("0.")?w:w.replace(/^0\./,".")
if(u=u.replace(/^#+([0.])/,"$1"),k=u.match(/^(0*)\.(#*)$/))return F+(""+O).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,k[1].length?"0.":".")
if(k=u.match(/^#{1,3},##0(\.?)$/))return F+S(""+O)
if(k=u.match(/^#,##0\.([#0]*0)$/))return d<0?"-"+g(c,u,-d):S(""+d)+"."+r("0",k[1].length)
if(k=u.match(/^#,#*,#0/))return g(c,u.replace(/^#,#*,/,""),d)
if(k=u.match(/^([0#]+)(\\?-([0#]+))+$/))return w=t(g(c,u.replace(/[\\-]/g,""),d)),I=0,t(t(u.replace(/\\/g,"")).replace(/[0#]/g,function(e){return I<w.length?w.charAt(I++):"0"===e?"0":""}))
if(u.match(f))return"("+(w=g(c,"##########",d)).substr(0,3)+") "+w.substr(3,3)+"-"+w.substr(6)
var P=""
if(k=u.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return I=Math.min(k[4].length,7),A=p(O,Math.pow(10,I)-1,!1),w=""+F," "==(P=B("n",k[1],A[1])).charAt(P.length-1)&&(P=P.substr(0,P.length-1)+"0"),w+=P+k[2]+"/"+k[3],(P=s(A[2],I)).length<k[4].length&&(P=h(k[4].substr(k[4].length-P.length))+P),w+=P
if(k=u.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return I=Math.min(Math.max(k[1].length,k[4].length),7),F+((A=p(O,Math.pow(10,I)-1,!0))[0]||(A[1]?"":"0"))+" "+(A[1]?a(A[1],I)+k[2]+"/"+k[3]+s(A[2],I):r(" ",2*I+1+k[2].length+k[3].length))
if(k=u.match(/^[#0?]+$/))return w=""+d,u.length<=w.length?w:h(u.substr(0,u.length-w.length))+w
if(k=u.match(/^([#0]+)\.([#0]+)$/)){w=""+d.toFixed(Math.min(k[2].length,10)).replace(/([^0])0+$/,"$1"),I=w.indexOf(".")
var y=u.indexOf(".")-I,N=u.length-w.length-y
return h(u.substr(0,y)+w+u.substr(u.length-N))}if(k=u.match(/^00,000\.([#0]*0)$/))return d<0?"-"+g(c,u,-d):S(""+d).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?n(0,3-e.length):"")+e})+"."+n(0,k[1].length)
switch(u){case"###,###":case"##,###":case"#,###":var _=S(""+O)
return"0"!==_?F+_:""
default:if(u.match(/\.[0#?]*$/))return g(c,u.slice(0,u.lastIndexOf(".")),d)+h(u.slice(u.lastIndexOf(".")))}throw new Error("unsupported format |"+u+"|")}return function(e,t,r){return(0|r)===r?g(e,t,r):m(e,t,r)}}()
function C(e){for(var t=[],r=!1,n=0,a=0;n<e.length;++n)switch(e.charCodeAt(n)){case 34:r=!r
break
case 95:case 42:case 92:++n
break
case 59:t[t.length]=e.substr(a,n-a),a=n+1}if(t[t.length]=e.substr(a),!0===r)throw new Error("Format |"+e+"| unterminated string ")
return t}e._split=C
var T=/\[[HhMmSs]*\]/
function w(e){for(var t=0,r="",n="";t<e.length;)switch(r=e.charAt(t)){case"G":o(e,t)&&(t+=6),t++
break
case'"':for(;34!==e.charCodeAt(++t)&&t<e.length;)++t;++t
break
case"\\":case"_":t+=2
break
case"@":++t
break
case"B":case"b":if("1"===e.charAt(t+1)||"2"===e.charAt(t+1))return!0
case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0
case"A":if("A/P"===e.substr(t,3))return!0
if("AM/PM"===e.substr(t,5))return!0;++t
break
case"[":for(n=r;"]"!==e.charAt(t++)&&t<e.length;)n+=e.charAt(t)
if(n.match(T))return!0
break
case".":case"0":case"#":for(;t<e.length&&("0#?.,E+-%".indexOf(r=e.charAt(++t))>-1||"\\"==r&&"-"==e.charAt(t+1)&&"0#".indexOf(e.charAt(t+2))>-1););break
case"?":for(;e.charAt(++t)===r;);break
case"*":++t," "!=e.charAt(t)&&"*"!=e.charAt(t)||++t
break
case"(":case")":++t
break
case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;t<e.length&&"0123456789".indexOf(e.charAt(++t))>-1;);break
case" ":default:++t}return!1}function k(e,t,r,n){for(var a,s,i,c,l=[],f="",h=0,u="",d="t",p="H";h<e.length;)switch(u=e.charAt(h)){case"G":if(!o(e,h))throw new Error("unrecognized character "+u+" in "+e)
l[l.length]={t:"G",v:"General"},h+=7
break
case'"':for(f="";34!==(c=e.charCodeAt(++h))&&h<e.length;)f+=String.fromCharCode(c)
l[l.length]={t:"t",v:f},++h
break
case"\\":var m=e.charAt(++h),g="("===m||")"===m?m:"t"
l[l.length]={t:g,v:m},++h
break
case"_":l[l.length]={t:"t",v:" "},h+=2
break
case"@":l[l.length]={t:"T",v:t},++h
break
case"B":case"b":if("1"===e.charAt(h+1)||"2"===e.charAt(h+1)){if(null==s&&null==(s=E(t,r,"2"===e.charAt(h+1))))return""
l[l.length]={t:"X",v:e.substr(h,2)},d=u,h+=2
break}case"M":case"D":case"Y":case"H":case"S":case"E":u=u.toLowerCase()
case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0)return""
if(null==s&&null==(s=E(t,r)))return""
for(f=u;++h<e.length&&e.charAt(h).toLowerCase()===u;)f+=u
"m"===u&&"h"===d.toLowerCase()&&(u="M"),"h"===u&&(u=p),l[l.length]={t:u,v:f},d=u
break
case"A":if(a={t:u,v:"A"},null==s&&(s=E(t,r)),"A/P"===e.substr(h,3)?(null!=s&&(a.v=s.H>=12?"P":"A"),a.t="T",p="h",h+=3):"AM/PM"===e.substr(h,5)?(null!=s&&(a.v=s.H>=12?"PM":"AM"),a.t="T",h+=5,p="h"):(a.t="t",++h),null==s&&"T"===a.t)return""
l[l.length]=a,d=u
break
case"[":for(f=u;"]"!==e.charAt(h++)&&h<e.length;)f+=e.charAt(h)
if("]"!==f.slice(-1))throw'unterminated "[" block: |'+f+"|"
if(f.match(T)){if(null==s&&null==(s=E(t,r)))return""
l[l.length]={t:"Z",v:f.toLowerCase()},d=f.charAt(1)}else f.indexOf("$")>-1&&(f=(f.match(/\$([^-\[\]]*)/)||[])[1]||"$",w(e)||(l[l.length]={t:"t",v:f}))
break
case".":if(null!=s){for(f=u;"0"===(u=e.charAt(++h));)f+=u
l[l.length]={t:"s",v:f}
break}case"0":case"#":for(f=u;++h<e.length&&"0#?.,E+-%".indexOf(u=e.charAt(h))>-1||"\\"==u&&"-"==e.charAt(h+1)&&h<e.length-2&&"0#".indexOf(e.charAt(h+2))>-1;)f+=u
l[l.length]={t:"n",v:f}
break
case"?":for(f=u;e.charAt(++h)===u;)f+=u
a={t:u,v:f},l[l.length]=a,d=u
break
case"*":++h," "!=e.charAt(h)&&"*"!=e.charAt(h)||++h
break
case"(":case")":l[l.length]={t:1===n?"t":u,v:u},++h
break
case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(f=u;h<e.length&&"0123456789".indexOf(e.charAt(++h))>-1;)f+=e.charAt(h)
l[l.length]={t:"D",v:f}
break
case" ":l[l.length]={t:u,v:u},++h
break
default:if(-1===",$-+/():!^&'~{}<>=€acfijklopqrtuvwxz".indexOf(u))throw new Error("unrecognized character "+u+" in "+e)
l[l.length]={t:"t",v:u},++h}var S,C=0,k=0
for(h=l.length-1,d="t";h>=0;--h)switch(l[h].t){case"h":case"H":l[h].t=p,d="h",C<1&&(C=1)
break
case"s":(S=l[h].v.match(/\.0+$/))&&(k=Math.max(k,S[0].length-1)),C<3&&(C=3)
case"d":case"y":case"M":case"e":d=l[h].t
break
case"m":"s"===d&&(l[h].t="M",C<2&&(C=2))
break
case"X":break
case"Z":C<1&&l[h].v.match(/[Hh]/)&&(C=1),C<2&&l[h].v.match(/[Mm]/)&&(C=2),C<3&&l[h].v.match(/[Ss]/)&&(C=3)}switch(C){case 0:break
case 1:s.u>=.5&&(s.u=0,++s.S),s.S>=60&&(s.S=0,++s.M),s.M>=60&&(s.M=0,++s.H)
break
case 2:s.u>=.5&&(s.u=0,++s.S),s.S>=60&&(s.S=0,++s.M)}var I,A=""
for(h=0;h<l.length;++h)switch(l[h].t){case"t":case"T":case" ":case"D":break
case"X":l[h].v="",l[h].t=";"
break
case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":l[h].v=v(l[h].t.charCodeAt(0),l[h].v,s,k),l[h].t="t"
break
case"n":case"(":case"?":for(I=h+1;null!=l[I]&&("?"===(u=l[I].t)||"D"===u||(" "===u||"t"===u)&&null!=l[I+1]&&("?"===l[I+1].t||"t"===l[I+1].t&&"/"===l[I+1].v)||"("===l[h].t&&(" "===u||"n"===u||")"===u)||"t"===u&&("/"===l[I].v||" "===l[I].v&&null!=l[I+1]&&"?"==l[I+1].t));)l[h].v+=l[I].v,l[I]={v:"",t:";"},++I
A+=l[h].v,h=I-1
break
case"G":l[h].t="t",l[h].v=b(t)}var x,R,D=""
if(A.length>0){40==A.charCodeAt(0)?(x=t<0&&45===A.charCodeAt(0)?-t:t,R=B("(",A,x)):(R=B("n",A,x=t<0&&n>1?-t:t),x<0&&l[0]&&"t"==l[0].t&&(R=R.substr(1),l[0].v="-"+l[0].v)),I=R.length-1
var O=l.length
for(h=0;h<l.length;++h)if(null!=l[h]&&"t"!=l[h].t&&l[h].v.indexOf(".")>-1){O=h
break}var F=l.length
if(O===l.length&&-1===R.indexOf("E")){for(h=l.length-1;h>=0;--h)null!=l[h]&&-1!=="n?(".indexOf(l[h].t)&&(I>=l[h].v.length-1?(I-=l[h].v.length,l[h].v=R.substr(I+1,l[h].v.length)):I<0?l[h].v="":(l[h].v=R.substr(0,I+1),I=-1),l[h].t="t",F=h)
I>=0&&F<l.length&&(l[F].v=R.substr(0,I+1)+l[F].v)}else if(O!==l.length&&-1===R.indexOf("E")){for(I=R.indexOf(".")-1,h=O;h>=0;--h)if(null!=l[h]&&-1!=="n?(".indexOf(l[h].t)){for(i=l[h].v.indexOf(".")>-1&&h===O?l[h].v.indexOf(".")-1:l[h].v.length-1,D=l[h].v.substr(i+1);i>=0;--i)I>=0&&("0"===l[h].v.charAt(i)||"#"===l[h].v.charAt(i))&&(D=R.charAt(I--)+D)
l[h].v=D,l[h].t="t",F=h}for(I>=0&&F<l.length&&(l[F].v=R.substr(0,I+1)+l[F].v),I=R.indexOf(".")+1,h=O;h<l.length;++h)if(null!=l[h]&&(-1!=="n?(".indexOf(l[h].t)||h===O)){for(i=l[h].v.indexOf(".")>-1&&h===O?l[h].v.indexOf(".")+1:0,D=l[h].v.substr(0,i);i<l[h].v.length;++i)I<R.length&&(D+=R.charAt(I++))
l[h].v=D,l[h].t="t",F=h}}}for(h=0;h<l.length;++h)null!=l[h]&&"n(?".indexOf(l[h].t)>-1&&(x=n>1&&t<0&&h>0&&"-"===l[h-1].v?-t:t,l[h].v=B(l[h].t,l[h].v,x),l[h].t="t")
var P=""
for(h=0;h!==l.length;++h)null!=l[h]&&(P+=l[h].v)
return P}e.is_date=w,e._eval=k
var I=/\[[=<>]/,A=/\[([=<>]*)(-?\d+\.?\d*)\]/
function x(e,t){if(null==t)return!1
var r=parseFloat(t[2])
switch(t[1]){case"=":if(e==r)return!0
break
case">":if(e>r)return!0
break
case"<":if(e<r)return!0
break
case"<>":if(e!=r)return!0
break
case">=":if(e>=r)return!0
break
case"<=":if(e<=r)return!0}return!1}e._table=d,e.load=function(e,t){d[t]=e},e.format=function(e,t,r){null==r&&(r={})
var n=""
switch(typeof e){case"string":n="m/d/yy"==e&&r.dateNF?r.dateNF:e
break
case"number":n=14==e&&r.dateNF?r.dateNF:(null!=r.table?r.table:d)[e]}if(o(n,0))return b(t)
var a=function(e,t){var r=C(e),n=r.length,a=r[n-1].indexOf("@")
if(n<4&&a>-1&&--n,r.length>4)throw new Error("cannot find right format for |"+r.join("|")+"|")
if("number"!=typeof t)return[4,4===r.length||a>-1?r[r.length-1]:"@"]
switch(r.length){case 1:r=a>-1?["General","General","General",r[0]]:[r[0],r[0],r[0],"@"]
break
case 2:r=a>-1?[r[0],r[0],r[0],r[1]]:[r[0],r[1],r[0],"@"]
break
case 3:r=a>-1?[r[0],r[1],r[0],r[2]]:[r[0],r[1],r[2],"@"]}var s=t>0?r[0]:t<0?r[1]:r[2]
if(-1===r[0].indexOf("[")&&-1===r[1].indexOf("["))return[n,s]
if(null!=r[0].match(I)||null!=r[1].match(I)){var i=r[0].match(A),c=r[1].match(A)
return x(t,i)?[n,r[0]]:x(t,c)?[n,r[1]]:[n,r[null!=i&&null!=c?2:1]]}return[n,s]}(n,t)
if(o(a[1]))return b(t)
if(!0===t)t="TRUE"
else if(!1===t)t="FALSE"
else if(""===t||null==t)return""
return k(a[1],t,r,a[0])},e.get_table=function(){return d},e.load_table=function(t){for(var r=0;392!=r;++r)void 0!==t[r]&&e.load(t[r],r)},e.init_table=u}
b(g)
var E={"General Number":"General","General Date":g._table[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":g._table[15],"Short Date":g._table[14],"Long Time":g._table[19],"Medium Time":g._table[18],"Short Time":g._table[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:g._table[2],Standard:g._table[4],Percent:g._table[10],Scientific:g._table[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'},v=function(){var e,t={}
function r(e){var t,r,l,f,h,u,d=512,g=[],b=e.slice(0,512)
switch(nt(b,0),t=function(e){e.chk(c,"Header Signature: "),e.chk(o,"CLSID: ")
var t=e.read_shift(2,"u")
return[e.read_shift(2,"u"),t]}(b)[0]){case 3:d=512
break
case 4:d=4096
break
default:throw new Error("Major Version: Expected 3 or 4 saw "+t)}512!==d&&nt(b=e.slice(0,d),28)
var E=e.slice(0,d);(function(e,t){var r=9
switch(e.l+=2,r=e.read_shift(2)){case 9:if(3!=t)throw new Error("Sector Shift: Expected 9 saw "+r)
break
case 12:if(4!=t)throw new Error("Sector Shift: Expected 12 saw "+r)
break
default:throw new Error("Sector Shift: Expected 9 or 12 saw "+r)}e.chk("0600","Mini Sector Shift: "),e.chk("000000000000","Reserved: ")})(b,t)
var v=b.read_shift(4,"i")
if(3===t&&0!==v)throw new Error("# Directory Sectors: Expected 0 saw "+v)
b.l+=4,f=b.read_shift(4,"i"),b.l+=4,b.chk("00100000","Mini Stream Cutoff Size: "),h=b.read_shift(4,"i"),r=b.read_shift(4,"i"),u=b.read_shift(4,"i"),l=b.read_shift(4,"i")
for(var S,B=0;B<109&&!((S=b.read_shift(4,"i"))<0);++B)g[B]=S
var C=function(e,t){for(var r=Math.ceil(e.length/t)-1,n=new Array(r),a=1;a<r;++a)n[a-1]=e.slice(a*t,(a+1)*t)
return n[r-1]=e.slice(r*t),n}(e,d);(function e(t,r,n,a,s){var c
if(t===i){if(0!==r)throw new Error("DIFAT chain shorter than expected")}else if(-1!==t){var o=n[t],l=(a>>>2)-1
if(!o)return
for(var f=0;f<l&&(c=$e(o,4*f))!==i;++f)s.push(c)
e($e(o,a-4),r-1,n,a,s)}})(u,l,C,d,g)
var T=function(e,t,r,n){var a,s,i,c,o,l,f=e.length,h=new Array(f),u=new Array(f),d=n-1
for(i=0;i<f;++i)if(a=[],(o=i+t)>=f&&(o-=f),!0!==u[o]){for(s=[],c=o;c>=0;){u[c]=!0,a[a.length]=c,s.push(e[c])
var p=r[Math.floor(4*c/n)]
if(n<4+(l=4*c&d))throw new Error("FAT boundary crossed: "+c+" 4 "+n)
if(!e[p])break
c=$e(e[p],l)}h[o]={nodes:a,data:Ie([s])}}return h}(C,f,g,d)
T[f].name="!Directory",r>0&&h!==i&&(T[h].name="!MiniFAT"),T[g[0]].name="!FAT",T.fat_addrs=g,T.ssz=d
var w={},k=[],I=[],A=[],x={};(function(e,t,r,c,o,l,f){for(var h,u,d,p,m,g=0,b=c.length?2:0,E=t[e].data,v=0,S=0;v<E.length;v+=128)nt(h=E.slice(v,v+128),64),0!==(S=h.read_shift(2))&&(u=xe(h,0,S-b),c.push(u),d={name:u,type:h.read_shift(1),color:h.read_shift(1),L:h.read_shift(4,"i"),R:h.read_shift(4,"i"),C:h.read_shift(4,"i"),clsid:h.read_shift(16),state:h.read_shift(4,"i")},0!==(p=h.read_shift(2)+h.read_shift(2)+h.read_shift(2)+h.read_shift(2))&&(d.ctime=p,d.ct=a(h,h.l-8)),0!==(m=h.read_shift(2)+h.read_shift(2)+h.read_shift(2)+h.read_shift(2))&&(d.mtime=m,d.mt=a(h,h.l-8)),d.start=h.read_shift(4,"i"),d.size=h.read_shift(4,"i"),5===d.type?(g=d.start,o>0&&g!==i&&(t[g].name="!StreamData")):d.size>=4096?(d.storage="fat",void 0===t[d.start]&&(t[d.start]=n(r,d.start,t.fat_addrs,t.ssz)),t[d.start].name=d.name,d.content=t[d.start].data.slice(0,d.size),nt(d.content,0)):(d.storage="minifat",g!==i&&d.start!==i&&(d.content=t[g].data.slice(d.start*s,d.start*s+d.size),nt(d.content,0))),l[u]=d,f.push(d))})(f,T,C,k,r,w,I),function(e,t,r,n){for(var a=0,s=0,i=0,c=0,o=0,l=n.length,f=new Array(l),h=new Array(l);a<l;++a)f[a]=h[a]=a,r[a]=n[a]
for(;o<h.length;++o)a=h[o],s=e[a].L,i=e[a].R,c=e[a].C,f[a]===a&&(-1!==s&&f[s]!==s&&(f[a]=f[s]),-1!==i&&f[i]!==i&&(f[a]=f[i])),-1!==c&&(f[c]=a),-1!==s&&(f[s]=f[a],h.push(s)),-1!==i&&(f[i]=f[a],h.push(i))
for(a=1;a!==l;++a)f[a]===a&&(-1!==i&&f[i]!==i?f[a]=f[i]:-1!==s&&f[s]!==s&&(f[a]=f[s]))
for(a=1;a<l;++a)if(0!==e[a].type){if(0===(o=f[a]))r[a]=r[0]+"/"+r[a]
else for(;0!==o;)r[a]=r[o]+"/"+r[a],o=f[o]
f[a]=0}for(r[0]+="/",a=1;a<l;++a)2!==e[a].type&&(r[a]+="/"),t[r[a]]=e[a]}(I,x,A,k)
var R=k.shift()
return k.root=R,{raw:{header:E,sectors:C},FileIndex:I,FullPaths:A,FullPathDir:x,find:function(e,t,r,n,a){var s,i=new Array(e.length),c=new Array(t.length)
for(s=0;s<e.length;++s)i[s]=e[s].toUpperCase().replace(p,"").replace(m,"!")
for(s=0;s<t.length;++s)c[s]=t[s].toUpperCase().replace(p,"").replace(m,"!")
return function(e){var s
47===e.charCodeAt(0)?(s=!0,e=a+e):s=-1!==e.indexOf("/")
var o=e.toUpperCase().replace(p,"").replace(m,"!"),l=!0===s?i.indexOf(o):c.indexOf(o)
return-1===l?null:!0===s?r[l]:n[t[l]]}}(A,k,I,w,R)}}function n(e,t,r,n,a){var s,i,c=e.length
a||(a=new Array(c))
var o,l,f=n-1
for(s=[],i=[],o=t;o>=0;){a[o]=!0,s[s.length]=o,i.push(e[o])
var h=r[Math.floor(4*o/n)]
if(n<4+(l=4*o&f))throw new Error("FAT boundary crossed: "+o+" 4 "+n)
if(!e[h])break
o=$e(e[h],l)}return{nodes:s,data:Ie([i])}}function a(e,t){return new Date(1e3*(Ye(e,t+4)/1e7*Math.pow(2,32)+Ye(e,t)/1e7-11644473600))}t.version="0.11.1"
var s=64,i=-2,c="d0cf11e0a1b11ae1",o="00000000000000000000000000000000",f={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:i,FREESECT:-1,HEADER_SIGNATURE:c,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:o,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]}
return t.read=function(t,n){switch(void 0!==n&&void 0!==n.type?n.type:"base64"){case"file":return a=t,void 0===e&&(e=require("fs")),r(e.readFileSync(a))
case"base64":return r(u(l.decode(t)))
case"binary":return r(u(t))}var a
return r(t)},t.parse=r,t.utils={ReadShift:Ze,CheckField:rt,prep_blob:nt,bconcat:d,consts:f},t}()
function S(e){return void 0!==e&&null!==e}function B(e){return Object.keys(e)}function C(e){for(var t=[],r=B(e),n=0;n!==r.length;++n)t[e[r[n]]]=r[n]
return t}function T(e){for(var t=[],r=B(e),n=0;n!==r.length;++n)t[e[r[n]]]=parseInt(r[n],10)
return t}function w(e,t){var r=e.getTime()
return t&&(r+=1263168e5),(r+22091616e5)/864e5}function k(e){var t=g.parse_date_code(e),r=new Date
if(null==t)throw new Error("Bad Date Code: "+e)
return r.setUTCDate(t.d),r.setUTCMonth(t.m-1),r.setUTCFullYear(t.y),r.setUTCHours(t.H),r.setUTCMinutes(t.M),r.setUTCSeconds(t.S),r}function I(e){var t=0,r=0,n=!1,a=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/)
if(!a)throw new Error("|"+e+"| is not an ISO8601 Duration")
for(var s=1;s!=a.length;++s)if(a[s]){switch(r=1,s>3&&(n=!0),a[s].substr(a[s].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+a[s].substr(a[s].length-1))
case"D":r*=24
case"H":r*=60
case"M":if(!n)throw new Error("Unsupported ISO Duration Field: M")
r*=60}t+=r*parseInt(a[s],10)}return t}var A=new Date("2017-02-19T19:06:09.000Z")
isNaN(A.getFullYear())&&(A=new Date("2/19/17"))
var x,R,D=2017==A.getFullYear()
function O(e){var t=new Date(e)
if(D)return t
if(e instanceof Date)return e
if(1917==A.getFullYear()&&!isNaN(t.getFullYear())){var r=t.getFullYear()
return e.indexOf(""+r)>-1?t:(t.setFullYear(t.getFullYear()+100),t)}var n=e.match(/\d+/g)||["2017","2","19","0","0","0"]
return new Date(Date.UTC(+n[0],+n[1]-1,+n[2],+n[3]||0,+n[4]||0,+n[5]||0))}function F(e){for(var t="",r=0;r!=e.length;++r)t+=String.fromCharCode(e[r])
return t}function P(e){if("undefined"!=typeof JSON&&!Array.isArray(e))return JSON.parse(JSON.stringify(e))
if("object"!=typeof e||null==e)return e
var t={}
for(var r in e)e.hasOwnProperty(r)&&(t[r]=P(e[r]))
return t}function y(e,t){for(var r="";r.length<t;)r+=e
return r}function N(e){var t=new Date(e),r=new Date(NaN),n=t.getYear(),a=t.getMonth(),s=t.getDate()
return isNaN(s)?r:n<0||n>8099?r:(a>0||s>1)&&101!=n?t:e.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)?t:e.match(/[a-zA-Z]/)?r:t}function _(e){return e?e.data?s(e.data):e.asNodeBuffer&&f?s(e.asNodeBuffer().toString("binary")):e.asBinary?s(e.asBinary()):e._data&&e._data.getContent?s(F(Array.prototype.slice.call(e._data.getContent(),0))):null:null}function M(e){return e&&".bin"===e.name.slice(-4)?function(e){if(!e)return null
if(e.data)return a(e.data)
if(e.asNodeBuffer&&f)return e.asNodeBuffer()
if(e._data&&e._data.getContent){var t=e._data.getContent()
return"string"==typeof t?function(e){for(var t=[],r=0;r!=e.length;++r)t.push(e.charCodeAt(r))
return t}(t):Array.prototype.slice.call(t)}return null}(e):_(e)}function L(e,t){for(var r=B(e.files),n=t.toLowerCase(),a=n.replace(/\//g,"\\"),s=0;s<r.length;++s){var i=r[s].toLowerCase()
if(n==i||a==i)return e.files[r[s]]}return null}function U(e,t){var r=L(e,t)
if(null==r)throw new Error("Cannot find file "+t+" in zip")
return r}function H(e,t,r){if(!r)return M(U(e,t))
if(!t)return null
try{return H(e,t)}catch(e){return null}}function V(e,t,r){if(!r)return _(U(e,t))
if(!t)return null
try{return V(e,t)}catch(e){return null}}function W(e,t){var r=t.split("/")
"/"!=t.slice(-1)&&r.pop()
for(var n=e.split("/");0!==n.length;){var a=n.shift()
".."===a?r.pop():"."!==a&&r.push(a)}return r.join("/")}"undefined"!=typeof JSZip&&(R=JSZip),"undefined"!=typeof exports&&"undefined"!=typeof module&&module.exports&&(void 0===R&&(R=require("./jszip.js")),x=require("fs"))
var X=/([^"\s?>\/]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,G=/<[^>]*>/g,z=/<\w*:/,j=/<(\/?)\w+:/
function K(e,t){for(var r={},n=0,a=0;n!==e.length&&(32!==(a=e.charCodeAt(n))&&10!==a&&13!==a);++n);if(t||(r[0]=e.substr(0,n)),n===e.length)return r
var s=e.match(X),i=0,c="",o=0,l="",f="",h=1
if(s)for(o=0;o!=s.length;++o){for(f=s[o],a=0;a!=f.length&&61!==f.charCodeAt(a);++a);for(l=f.substr(0,a),h=34==(n=f.charCodeAt(a+1))||39==n?1:0,c=f.substring(a+1+h,f.length-h),i=0;i!=l.length&&58!==l.charCodeAt(i);++i);if(i===l.length)l.indexOf("_")>0&&(l=l.substr(0,l.indexOf("_"))),r[l]=c
else{var u=(5===i&&"xmlns"===l.substr(0,5)?"xmlns":"")+l.substr(i+1)
if(r[u]&&"ext"==l.substr(i-3,3))continue
r[u]=c}}return r}var Y,$,Q={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},Z=C(Q),J=(Y=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g,$=/_x([\da-fA-F]{4})_/g,function(e){return(e+"").replace(Y,function(e,t){return Q[e]||String.fromCharCode(parseInt(t,e.indexOf("x")>-1?16:10))||e}).replace($,function(e,t){return String.fromCharCode(parseInt(t,16))})}),q=/[&<>'"]/g,ee=/[\u0000-\u0008\u000b-\u001f]/g
function te(e,t){return(e+"").replace(q,function(e){return Z[e]}).replace(ee,function(e){return"_x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+"_"})}function re(e){return te(e).replace(/ /g,"_x0020_")}var ne=/[\u0000-\u001f]/g
function ae(e){return(e+"").replace(q,function(e){return Z[e]}).replace(ne,function(e){return"&#x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+";"})}var se=function(){var e=/&#(\d+);/g
function t(e,t){return String.fromCharCode(parseInt(t,10))}return function(r){return r.replace(e,t)}}(),ie=function(e){return e.replace(/(\r\n|[\r\n])/g,"&#10;")}
function ce(e,t){switch(e){case"1":case"true":case"TRUE":return!0
default:return!1}}var oe=function(e){for(var t="",r=0,n=0,a=0,s=0,i=0;r<e.length;)(n=e.charCodeAt(r++))<128?t+=String.fromCharCode(n):(a=e.charCodeAt(r++),n>191&&n<224?t+=String.fromCharCode((31&n)<<6|63&a):(s=e.charCodeAt(r++),n<240?t+=String.fromCharCode((15&n)<<12|(63&a)<<6|63&s):(i=((7&n)<<18|(63&a)<<12|(63&s)<<6|63&e.charCodeAt(r++))-65536,t+=String.fromCharCode(55296+(i>>>10&1023)),t+=String.fromCharCode(56320+(1023&i)))))
return t}
if(f){var le=function(e){var t,r,n,a=new Buffer(2*e.length),s=1,i=0,c=0
for(r=0;r<e.length;r+=s)s=1,(n=e.charCodeAt(r))<128?t=n:n<224?(t=64*(31&n)+(63&e.charCodeAt(r+1)),s=2):n<240?(t=4096*(15&n)+64*(63&e.charCodeAt(r+1))+(63&e.charCodeAt(r+2)),s=3):(s=4,t=262144*(7&n)+4096*(63&e.charCodeAt(r+1))+64*(63&e.charCodeAt(r+2))+(63&e.charCodeAt(r+3)),c=55296+((t-=65536)>>>10&1023),t=56320+(1023&t)),0!==c&&(a[i++]=255&c,a[i++]=c>>>8,c=0),a[i++]=t%256,a[i++]=t>>>8
return a.slice(0,i).toString("ucs2")},fe="foo bar bazâð£"
oe(fe)==le(fe)&&(oe=le)
var he=function(e){return Buffer(e,"binary").toString("utf8")}
oe(fe)==he(fe)&&(oe=he)}var ue,de,pe=(ue={},function(e,t){var r=e+"|"+(t||"")
return ue[r]?ue[r]:ue[r]=new RegExp("<(?:\\w+:)?"+e+'(?: xml:space="preserve")?(?:[^>]*)>([^☃]*)</(?:\\w+:)?'+e+">",t||"")}),me=(de={},function(e){return void 0!==de[e]?de[e]:de[e]=new RegExp("<(?:vt:)?"+e+">(.*?)</(?:vt:)?"+e+">","g")}),ge=/<\/?(?:vt:)?variant>/g,be=/<(?:vt:)([^>]*)>(.*)</
function Ee(e){var t=K(e),r=e.match(me(t.baseType))||[]
if(r.length!=t.size)throw new Error("unexpected vector length "+r.length+" != "+t.size)
var n=[]
return r.forEach(function(e){var t=e.replace(ge,"").match(be)
n.push({v:oe(t[2]),t:t[1]})}),n}var ve=/(^\s|\s$|\n)/
function Se(e,t){return"<"+e+(t.match(ve)?' xml:space="preserve"':"")+">"+t+"</"+e+">"}function Be(e){return B(e).map(function(t){return" "+t+'="'+e[t]+'"'}).join("")}function Ce(e,t,r){return"<"+e+(S(r)?Be(r):"")+(S(t)?(t.match(ve)?' xml:space="preserve"':"")+">"+t+"</"+e:"/")+">"}function Te(e,t){try{return e.toISOString().replace(/\.\d*/,"")}catch(e){if(t)throw e}return""}var we='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',ke={dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",mx:"http://schemas.microsoft.com/office/mac/excel/2008/main",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",sjs:"http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"}
ke.main=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"]
var Ie,Ae,xe,Re,De,Oe,Fe,Pe,ye,Ne,_e,Me,Le,Ue,He,Ve,We,Xe={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",ss:"urn:schemas-microsoft-com:office:spreadsheet",dt:"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml",html:"http://www.w3.org/TR/REC-html40"}
Ie=Ae=function(e){for(var t=[],r=0;r<e[0].length;++r)t.push.apply(t,e[0][r])
return t},xe=Re=function(e,t,r){for(var n=[],a=t;a<r;a+=2)n.push(String.fromCharCode(je(e,a)))
return n.join("")},De=Oe=function(e,t,r){return e.slice(t,t+r).map(function(e){return(e<16?"0":"")+e.toString(16)}).join("")},Fe=function(e,t,r){for(var n=[],a=t;a<r;a++)n.push(String.fromCharCode(ze(e,a)))
return n.join("")},Pe=ye=function(e,t){var r=Ye(e,t)
return r>0?Fe(e,t+4,t+4+r-1):""},Ne=_e=function(e,t){var r=2*Ye(e,t)
return r>0?Fe(e,t+4,t+4+r-1):""},Me=Le=function(e,t){var r=Ye(e,t)
return r>0?xe(e,t+4,t+4+r):""},Ue=He=function(e,t){var r=Ye(e,t)
return r>0?Fe(e,t+4,t+4+r):""},Ve=We=function(e,t){return function(e,t){for(var r=1-2*(e[t+7]>>>7),n=((127&e[t+7])<<4)+(e[t+6]>>>4&15),a=15&e[t+6],s=5;s>=0;--s)a=256*a+e[t+s]
return 2047==n?0==a?r*(1/0):NaN:(0==n?n=-1022:(n-=1023,a+=Math.pow(2,52)),r*Math.pow(2,n-52)*a)}(e,t)}
var Ge=function(e){return Array.isArray(e)}
f&&(xe=function(e,t,r){return Buffer.isBuffer(e)?e.toString("utf16le",t,r):Re(e,t,r)},De=function(e,t,r){return Buffer.isBuffer(e)?e.toString("hex",t,t+r):Oe(e,t,r)},Pe=function(e,t){if(!Buffer.isBuffer(e))return ye(e,t)
var r=e.readUInt32LE(t)
return r>0?e.toString("utf8",t+4,t+4+r-1):""},Ne=function(e,t){if(!Buffer.isBuffer(e))return _e(e,t)
var r=2*e.readUInt32LE(t)
return e.toString("utf16le",t+4,t+4+r-1)},Me=function(e,t){if(!Buffer.isBuffer(e))return Le(e,t)
var r=e.readUInt32LE(t)
return e.toString("utf16le",t+4,t+4+r)},Ue=function(e,t){if(!Buffer.isBuffer(e))return He(e,t)
var r=e.readUInt32LE(t)
return e.toString("utf8",t+4,t+4+r)},Fe=function(e,t,r){return e.toString("utf8",t,r)},Ie=function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0]):Ae(e)},d=function(e){return Buffer.isBuffer(e[0])?Buffer.concat(e):[].concat.apply([],e)},Ve=function(e,t){return Buffer.isBuffer(e)?e.readDoubleLE(t):We(e,t)},Ge=function(e){return Buffer.isBuffer(e)||Array.isArray(e)}),"undefined"!=typeof cptable&&(xe=function(e,t,r){return cptable.utils.decode(1200,e.slice(t,r))},Fe=function(e,t,r){return cptable.utils.decode(65001,e.slice(t,r))},Pe=function(e,r){var n=Ye(e,r)
return n>0?cptable.utils.decode(t,e.slice(r+4,r+4+n-1)):""},Ne=function(e,t){var r=2*Ye(e,t)
return r>0?cptable.utils.decode(1200,e.slice(t+4,t+4+r-1)):""},Me=function(e,t){var r=Ye(e,t)
return r>0?cptable.utils.decode(1200,e.slice(t+4,t+4+r)):""},Ue=function(e,t){var r=Ye(e,t)
return r>0?cptable.utils.decode(65001,e.slice(t+4,t+4+r)):""})
var ze=function(e,t){return e[t]},je=function(e,t){return 256*e[t+1]+e[t]},Ke=function(e,t){var r=256*e[t+1]+e[t]
return r<32768?r:-1*(65535-r+1)},Ye=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]},$e=function(e,t){return e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]},Qe=function(e){return e.match(/../g).map(function(e){return parseInt(e,16)})}
function Ze(e,r){var n,a,s,c,o,l,h="",u=[]
switch(r){case"dbcs":if(l=this.l,f&&Buffer.isBuffer(this))h=this.slice(this.l,this.l+2*e).toString("utf16le")
else for(o=0;o!=e;++o)h+=String.fromCharCode(je(this,l)),l+=2
e*=2
break
case"utf8":h=Fe(this,this.l,this.l+e)
break
case"utf16le":e*=2,h=xe(this,this.l,this.l+e)
break
case"wstr":if("undefined"==typeof cptable)return Ze.call(this,e,"dbcs")
h=cptable.utils.decode(t,this.slice(this.l,this.l+2*e)),e*=2
break
case"lpstr":e=5+(h=Pe(this,this.l)).length
break
case"lpwstr":e=5+(h=Ne(this,this.l)).length,"\0"==h[h.length-1]&&(e+=2)
break
case"lpp4":e=4+Ye(this,this.l),h=Me(this,this.l),2&e&&(e+=2)
break
case"8lpp4":e=4+Ye(this,this.l),h=Ue(this,this.l),3&e&&(e+=4-(3&e))
break
case"cstr":for(e=0,h="";0!==(s=ze(this,this.l+e++));)u.push(i(s))
h=u.join("")
break
case"_wstr":for(e=0,h="";0!==(s=je(this,this.l+e));)u.push(i(s)),e+=2
e+=2,h=u.join("")
break
case"dbcs-cont":for(h="",l=this.l,o=0;o!=e;++o){if(this.lens&&-1!==this.lens.indexOf(l))return s=ze(this,l),this.l=l+1,c=Ze.call(this,e-o,s?"dbcs-cont":"sbcs-cont"),u.join("")+c
u.push(i(je(this,l))),l+=2}h=u.join(""),e*=2
break
case"sbcs-cont":for(h="",l=this.l,o=0;o!=e;++o){if(this.lens&&-1!==this.lens.indexOf(l))return s=ze(this,l),this.l=l+1,c=Ze.call(this,e-o,s?"dbcs-cont":"sbcs-cont"),u.join("")+c
u.push(i(ze(this,l))),l+=1}h=u.join("")
break
default:switch(e){case 1:return n=ze(this,this.l),this.l++,n
case 2:return n=("i"===r?Ke:je)(this,this.l),this.l+=2,n
case 4:return"i"===r||0==(128&this[this.l+3])?(n=$e(this,this.l),this.l+=4,n):(a=Ye(this,this.l),this.l+=4,a)
case 8:if("f"===r)return a=Ve(this,this.l),this.l+=8,a
case 16:h=De(this,this.l,e)}}return this.l+=e,h}var Je=function(e,t,r){e[r]=255&t,e[r+1]=t>>>8&255},qe=function(e,t,r){e[r]=255&t,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24&255},et=function(e,t,r){e[r]=255&t,e[r+1]=t>>8&255,e[r+2]=t>>16&255,e[r+3]=t>>24&255}
function tt(e,t,r){var n=0,a=0
if("dbcs"===r){for(a=0;a!=t.length;++a)Je(this,t.charCodeAt(a),this.l+2*a)
n=2*t.length}else if("sbcs"===r){for(a=0;a!=t.length;++a)this[this.l+a]=255&t.charCodeAt(a)
n=t.length}else switch(e){case 1:n=1,this[this.l]=255&t
break
case 2:n=2,this[this.l]=255&t,t>>>=8,this[this.l+1]=255&t
break
case 3:n=3,this[this.l]=255&t,t>>>=8,this[this.l+1]=255&t,t>>>=8,this[this.l+2]=255&t
break
case 4:n=4,qe(this,t,this.l)
break
case 8:if(n=8,"f"===r){(function(e,t,r){var n=(t<0||1/t==-1/0?1:0)<<7,a=0,s=0,i=n?-t:t
isFinite(i)?(a=Math.floor(Math.log(i)*Math.LOG2E),s=t*Math.pow(2,52-a),a<=-1023&&(!isFinite(s)||s<Math.pow(2,52))?a=-1022:(s-=Math.pow(2,52),a+=1023)):(a=2047,s=isNaN(t)?26985:0)
for(var c=0;c<=5;++c,s/=256)e[r+c]=255&s
e[r+6]=(15&a)<<4|15&s,e[r+7]=a>>4|n})(this,t,this.l)
break}case 16:break
case-4:n=4,et(this,t,this.l)}return this.l+=n,this}function rt(e,t){var r=De(this,this.l,e.length>>1)
if(r!==e)throw t+"Expected "+e+" saw "+r
this.l+=e.length>>1}function nt(e,t){e.l=t,e.read_shift=Ze,e.chk=rt,e.write_shift=tt}function at(e,t){e.l+=t}function st(e){var t=h(e)
return nt(t,0),t}function it(e,t,r){if(e){var n,a,s
nt(e,e.l||0)
for(var i=e.length,c=0,o=0;e.l<i;){128&(c=e.read_shift(1))&&(c=(127&c)+((127&e.read_shift(1))<<7))
var l=Qu[c]||Qu[65535]
for(s=127&(n=e.read_shift(1)),a=1;a<4&&128&n;++a)s+=(127&(n=e.read_shift(1)))<<7*a
o=e.l+s
var f=l.f(e,s,r)
if(e.l=o,t(f,l.n,c))return}}}function ct(){var e=[],t=function(e){var t=st(e)
return nt(t,0),t},r=t(2048),n=function(){r&&(r.length>r.l&&(r=r.slice(0,r.l)),r.length>0&&e.push(r),r=null)},a=function(e){return r&&e<r.length-r.l?r:(n(),r=t(Math.max(e+1,2048)))}
return{next:a,push:function(e){n(),r=e,a(2048)},end:function(){return n(),Ie([e])},_bufs:e}}function ot(e,t,r,n){var a,s=Number(Zu[t])
if(!isNaN(s)){n||(n=Qu[s].p||(r||[]).length||0),a=1+(s>=128?1:0)+1+n,n>=128&&++a,n>=16384&&++a,n>=2097152&&++a
var i=e.next(a)
s<=127?i.write_shift(1,s):(i.write_shift(1,128+(127&s)),i.write_shift(1,s>>7))
for(var c=0;4!=c;++c){if(!(n>=128)){i.write_shift(1,n)
break}i.write_shift(1,128+(127&n)),n>>=7}n>0&&Ge(r)&&e.push(r)}}function lt(e,t,r){var n=P(e)
if(t.s?(n.cRel&&(n.c+=t.s.c),n.rRel&&(n.r+=t.s.r)):(n.c+=t.c,n.r+=t.r),!r||r.biff<12){for(;n.c>=256;)n.c-=256
for(;n.r>=65536;)n.r-=65536}return n}function ft(e,t,r){var n=P(e)
return n.s=lt(n.s,t.s,r),n.e=lt(n.e,t.s,r),n}function ht(e){var t=Tt(e)
return 0===e.cRel&&(t=vt(t)),0===e.rRel&&(t=mt(t)),t}function ut(e,t){return 0!=e.s.r||e.s.rRel||e.e.r!=t.biff>=12&&e.e.rRel?0!=e.s.c||e.s.cRel||e.e.c!=t.biff>=12&&e.e.cRel?ht(e.s)+":"+ht(e.e):(e.s.rRel?"":"$")+pt(e.s.r)+":"+(e.e.rRel?"":"$")+pt(e.e.r):(e.s.cRel?"":"$")+Et(e.s.c)+":"+(e.e.cRel?"":"$")+Et(e.e.c)}function dt(e){return parseInt(gt(e),10)-1}function pt(e){return""+(e+1)}function mt(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function gt(e){return e.replace(/\$(\d+)$/,"$1")}function bt(e){for(var t=St(e),r=0,n=0;n!==t.length;++n)r=26*r+t.charCodeAt(n)-64
return r-1}function Et(e){var t=""
for(++e;e;e=Math.floor((e-1)/26))t=String.fromCharCode((e-1)%26+65)+t
return t}function vt(e){return e.replace(/^([A-Z])/,"$$$1")}function St(e){return e.replace(/^\$([A-Z])/,"$1")}function Bt(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Ct(e){var t=Bt(e)
return{c:bt(t[0]),r:dt(t[1])}}function Tt(e){return Et(e.c)+pt(e.r)}function wt(e){var t=e.split(":").map(Ct)
return{s:t[0],e:t[t.length-1]}}function kt(e,t){return void 0===t||"number"==typeof t?kt(e.s,e.e):("string"!=typeof e&&(e=Tt(e)),"string"!=typeof t&&(t=Tt(t)),e==t?e:e+":"+t)}function It(e){var t={s:{c:0,r:0},e:{c:0,r:0}},r=0,n=0,a=0,s=e.length
for(r=0;n<s&&!((a=e.charCodeAt(n)-64)<1||a>26);++n)r=26*r+a
for(t.s.c=--r,r=0;n<s&&!((a=e.charCodeAt(n)-48)<0||a>9);++n)r=10*r+a
if(t.s.r=--r,n===s||58===e.charCodeAt(++n))return t.e.c=t.s.c,t.e.r=t.s.r,t
for(r=0;n!=s&&!((a=e.charCodeAt(n)-64)<1||a>26);++n)r=26*r+a
for(t.e.c=--r,r=0;n!=s&&!((a=e.charCodeAt(n)-48)<0||a>9);++n)r=10*r+a
return t.e.r=--r,t}function At(e,t){var r="d"==e.t&&t instanceof Date
if(null!=e.z)try{return e.w=g.format(e.z,r?w(t):t)}catch(e){}try{return e.w=g.format((e.XF||{}).ifmt||(r?14:0),r?w(t):t)}catch(e){return""+t}}function xt(e,t,r){return null==e||null==e.t||"z"==e.t?"":void 0!==e.w?e.w:("d"==e.t&&!e.z&&r&&r.dateNF&&(e.z=r.dateNF),At(e,void 0==t?e.v:t))}function Rt(e,t){var r=t&&t.sheet?t.sheet:"Sheet1",n={}
return n[r]=e,{SheetNames:[r],Sheets:n}}function Dt(e,t){var r=t||{}
null!=o&&null==r.dense&&(r.dense=o)
for(var n=r.dense?[]:{},a={s:{c:1e7,r:1e7},e:{c:0,r:0}},s=0;s!=e.length;++s)for(var i=0;i!=e[s].length;++i)if(void 0!==e[s][i]){var c={v:e[s][i]}
if(Array.isArray(c.v)&&(c.f=e[s][i][1],c.v=c.v[0]),a.s.r>s&&(a.s.r=s),a.s.c>i&&(a.s.c=i),a.e.r<s&&(a.e.r=s),a.e.c<i&&(a.e.c=i),null===c.v)if(c.f)c.t="n"
else{if(!r.cellStubs)continue
c.t="z"}else"number"==typeof c.v?c.t="n":"boolean"==typeof c.v?c.t="b":c.v instanceof Date?(c.z=r.dateNF||g._table[14],r.cellDates?(c.t="d",c.w=g.format(c.z,w(c.v))):(c.t="n",c.v=w(c.v),c.w=g.format(c.z,c.v))):c.t="s"
if(r.dense)n[s]||(n[s]=[]),n[s][i]=c
else n[Tt({c:i,r:s})]=c}return a.s.c<1e7&&(n["!ref"]=kt(a)),n}function Ot(e,t){return t||(t=st(4)),t.write_shift(4,e),t}function Ft(e){var t=e.read_shift(4)
return 0===t?"":e.read_shift(t,"dbcs")}function Pt(e,t){var r=!1
return null==t&&(r=!0,t=st(4+2*e.length)),t.write_shift(4,e.length),e.length>0&&t.write_shift(0,e,"dbcs"),r?t.slice(0,t.l):t}function yt(e,t){var r,n=e.l,a=e.read_shift(1),s=Ft(e),i=[],c={t:s,h:s}
if(0!=(1&a)){for(var o=e.read_shift(4),l=0;l!=o;++l)i.push((r=e,{ich:r.read_shift(2),ifnt:r.read_shift(2)}))
c.r=i}else c.r=[{ich:0,ifnt:0}]
return e.l=n+t,c}(function(e,t){var r
if(void 0!==t)r=t
else if("undefined"!=typeof require)try{r=require("crypto")}catch(e){r=null}e.rc4=function(e,t){var r=new Array(256),n=0,a=0,s=0,i=0
for(a=0;256!=a;++a)r[a]=a
for(a=0;256!=a;++a)s=s+r[a]+e[a%e.length].charCodeAt(0)&255,i=r[a],r[a]=r[s],r[s]=i
a=s=0
var c=Buffer(t.length)
for(n=0;n!=t.length;++n)s=(s+r[a=a+1&255])%256,i=r[a],r[a]=r[s],r[s]=i,c[n]=t[n]^r[r[a]+r[s]&255]
return c},e.md5=function(e){if(!r)throw new Error("Unsupported crypto")
return r.createHash("md5").update(e).digest("hex")}})({},"undefined"!=typeof crypto?crypto:void 0)
var Nt=yt
function _t(e,t){var r,n,a=!1
return null==t&&(a=!0,t=st(23+4*e.t.length)),t.write_shift(1,1),Pt(e.t,t),t.write_shift(4,1),r={ich:0,ifnt:0},(n=t)||(n=st(4)),n.write_shift(2,r.ich||0),n.write_shift(2,r.ifnt||0),a?t.slice(0,t.l):t}function Mt(e){var t=e.read_shift(4),r=e.read_shift(2)
r+=e.read_shift(1)<<16
e.read_shift(1)
return{c:t,iStyleRef:r}}function Lt(e,t){return null==t&&(t=st(8)),t.write_shift(-4,e.c),t.write_shift(3,e.iStyleRef||e.s),t.write_shift(1,0),t}var Ut=Ft,Ht=Pt
function Vt(e){var t=e.read_shift(4)
return 0===t||4294967295===t?"":e.read_shift(t,"dbcs")}function Wt(e,t){var r=!1
return null==t&&(r=!0,t=st(127)),t.write_shift(4,e.length>0?e.length:4294967295),e.length>0&&t.write_shift(0,e,"dbcs"),r?t.slice(0,t.l):t}var Xt=Ft,Gt=Vt,zt=Wt
function jt(e){var t=e.slice(e.l,e.l+4),r=1&t[0],n=2&t[0]
e.l+=4,t[0]&=252
var a=0===n?Ve([0,0,0,0,t[0],t[1],t[2],t[3]],0):$e(t,0)>>2
return r?a/100:a}function Kt(e){var t={s:{},e:{}}
return t.s.r=e.read_shift(4),t.e.r=e.read_shift(4),t.s.c=e.read_shift(4),t.e.c=e.read_shift(4),t}var Yt=Kt,$t=function(e,t){return t||(t=st(16)),t.write_shift(4,e.s.r),t.write_shift(4,e.e.r),t.write_shift(4,e.s.c),t.write_shift(4,e.e.c),t}
function Qt(e,t){return e.read_shift(8,"f")}function Zt(e,t){return(t||st(8)).write_shift(8,e,"f")}var Jt={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},qt=T(Jt)
function er(e,t){if(t||(t=st(8)),!e||e.auto)return t.write_shift(4,0),t.write_shift(4,0),t
e.index?(t.write_shift(1,2),t.write_shift(1,e.index)):e.theme?(t.write_shift(1,6),t.write_shift(1,e.theme)):(t.write_shift(1,5),t.write_shift(1,0))
var r=e.tint||0
if(r>0?r*=32767:r<0&&(r*=32768),t.write_shift(2,r),e.rgb){var n=e.rgb||"FFFFFF"
t.write_shift(1,parseInt(n.substr(0,2),16)),t.write_shift(1,parseInt(n.substr(2,2),16)),t.write_shift(1,parseInt(n.substr(4,2),16)),t.write_shift(1,255)}else t.write_shift(2,0),t.write_shift(1,0),t.write_shift(1,0)
return t}var tr=2,rr=3,nr=12,ar=81,sr=[80,ar],ir={1:{n:"CodePage",t:tr},2:{n:"Category",t:80},3:{n:"PresentationFormat",t:80},4:{n:"ByteCount",t:rr},5:{n:"LineCount",t:rr},6:{n:"ParagraphCount",t:rr},7:{n:"SlideCount",t:rr},8:{n:"NoteCount",t:rr},9:{n:"HiddenCount",t:rr},10:{n:"MultimediaClipCount",t:rr},11:{n:"Scale",t:11},12:{n:"HeadingPair",t:4096|nr},13:{n:"DocParts",t:4126},14:{n:"Manager",t:80},15:{n:"Company",t:80},16:{n:"LinksDirty",t:11},17:{n:"CharacterCount",t:rr},19:{n:"SharedDoc",t:11},22:{n:"HLinksChanged",t:11},23:{n:"AppVersion",t:rr,p:"version"},26:{n:"ContentType",t:80},27:{n:"ContentStatus",t:80},28:{n:"Language",t:80},29:{n:"Version",t:80},255:{}},cr={1:{n:"CodePage",t:tr},2:{n:"Title",t:80},3:{n:"Subject",t:80},4:{n:"Author",t:80},5:{n:"Keywords",t:80},6:{n:"Comments",t:80},7:{n:"Template",t:80},8:{n:"LastAuthor",t:80},9:{n:"RevNumber",t:80},10:{n:"EditTime",t:64},11:{n:"LastPrinted",t:64},12:{n:"CreatedDate",t:64},13:{n:"ModifiedDate",t:64},14:{n:"PageCount",t:rr},15:{n:"WordCount",t:rr},16:{n:"CharCount",t:rr},17:{n:"Thumbnail",t:71},18:{n:"ApplicationName",t:30},19:{n:"DocumentSecurity",t:rr},255:{}},or={2147483648:{n:"Locale",t:19},2147483651:{n:"Behavior",t:19},1919054434:{}};(function(){for(var e in or)or.hasOwnProperty(e)&&(ir[e]=cr[e]=or[e])})()
var lr={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},fr=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"]
var hr,ur=[0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(function(e){return[e>>16&255,e>>8&255,255&e]}),dr={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"TODO","application/vnd.ms-excel.sheetMetadata":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"TODO","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"vba","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"},pr=(B(hr={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}}).forEach(function(e){hr[e].xlsm||(hr[e].xlsm=hr[e].xlsx)}),B(hr).forEach(function(e){B(hr[e]).forEach(function(t){dr[hr[e][t]]=e})}),hr),mr=function(e){for(var t=[],r=B(e),n=0;n!==r.length;++n)null==t[e[r[n]]]&&(t[e[r[n]]]=[]),t[e[r[n]]].push(r[n])
return t}(dr)
ke.CT="http://schemas.openxmlformats.org/package/2006/content-types"
var gr=Ce("Types",null,{xmlns:ke.CT,"xmlns:xsd":ke.xsd,"xmlns:xsi":ke.xsi}),br=[["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels",mr.rels[0]]].map(function(e){return Ce("Default",null,{Extension:e[0],ContentType:e[1]})})
var Er={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"}
function vr(e){var t=e.lastIndexOf("/")
return e.substr(0,t+1)+"_rels/"+e.substr(t+1)+".rels"}function Sr(e,t){if(!e)return e
"/"!==t.charAt(0)&&(t="/"+t)
var r={},n={}
return(e.match(G)||[]).forEach(function(e){var a=K(e)
if("<Relationship"===a[0]){var s={}
s.Type=a.Type,s.Target=a.Target,s.Id=a.Id,s.TargetMode=a.TargetMode
var i="External"===a.TargetMode?a.Target:W(a.Target,t)
r[i]=s,n[a.Id]=s}}),r["!id"]=n,r}ke.RELS="http://schemas.openxmlformats.org/package/2006/relationships"
var Br=Ce("Relationships",null,{xmlns:ke.RELS})
function Cr(e){var t=[we,Br]
return B(e["!id"]).forEach(function(r){t[t.length]=Ce("Relationship",null,e["!id"][r])}),t.length>2&&(t[t.length]="</Relationships>",t[1]=t[1].replace("/>",">")),t.join("")}function Tr(e,t,r,n,a){if(a||(a={}),e["!id"]||(e["!id"]={}),t<0)for(t=1;e["!id"]["rId"+t];++t);if(a.Id="rId"+t,a.Type=n,a.Target=r,a.Type==Er.HLINK&&(a.TargetMode="External"),e["!id"][a.Id])throw new Error("Cannot rewrite rId "+t)
return e["!id"][a.Id]=a,e[("/"+a.Target).replace("//","/")]=a,t}var wr="application/vnd.oasis.opendocument.spreadsheet"
function kr(e,t,r){return['  <rdf:Description rdf:about="'+e+'">\n','    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/'+(r||"odf")+"#"+t+'"/>\n',"  </rdf:Description>\n"].join("")}var Ir,Ar=(Ir='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS '+e.version+"</meta:generator></office:meta></office:document-meta>",function(e,t){return Ir}),xr=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]]
ke.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/metadata/core-properties",Er.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"
var Rr=function(){for(var e=new Array(xr.length),t=0;t<xr.length;++t){var r=xr[t],n="(?:"+r[0].substr(0,r[0].indexOf(":"))+":)"+r[0].substr(r[0].indexOf(":")+1)
e[t]=new RegExp("<"+n+"[^>]*>(.*)</"+n+">")}return e}()
var Dr=Ce("cp:coreProperties",null,{"xmlns:cp":ke.CORE_PROPS,"xmlns:dc":ke.dc,"xmlns:dcterms":ke.dcterms,"xmlns:dcmitype":ke.dcmitype,"xmlns:xsi":ke.xsi})
function Or(e,t,r,n,a){null==a[e]&&null!=t&&""!==t&&(a[e]=t,n[n.length]=r?Ce(e,t,r):Se(e,t))}var Fr=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]]
ke.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",Er.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"
var Pr=Ce("Properties",null,{xmlns:ke.EXT_PROPS,"xmlns:vt":ke.vt})
ke.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",Er.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties"
var yr=/<[^>]+>[^<]*/g
var Nr=Ce("Properties",null,{xmlns:ke.CUST_PROPS,"xmlns:vt":ke.vt})
function _r(e,t){var r=[we,Nr]
if(!e)return r.join("")
var n=1
return B(e).forEach(function(t){++n,r[r.length]=Ce("property",function(e){switch(typeof e){case"string":return Ce("vt:lpwstr",e)
case"number":return Ce((0|e)==e?"vt:i4":"vt:r8",String(e))
case"boolean":return Ce("vt:bool",e?"true":"false")}if(e instanceof Date)return Ce("vt:filetime",Te(e))
throw new Error("Unable to serialize "+e)}(e[t]),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:n,name:t})}),r.length>2&&(r[r.length]="</Properties>",r[1]=r[1].replace("/>",">")),r.join("")}var Mr={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},Lr=C(Mr)
function Ur(e){var t=e.read_shift(4),r=e.read_shift(4)
return new Date(1e3*(r/1e7*Math.pow(2,32)+t/1e7-11644473600)).toISOString().replace(/\.000/,"")}function Hr(e,t,r){var n=e.read_shift(0,"lpstr")
return r&&(e.l+=4-(n.length+1&3)&3),n}function Vr(e,t,r){var n=e.read_shift(0,"lpwstr")
return r&&(e.l+=4-(n.length+1&3)&3),n}function Wr(e,t,r){return 31===t?Vr(e):Hr(e,0,r)}function Xr(e,t,r){return Wr(e,t,!1===r?0:4)}function Gr(e,t){for(var r=e.read_shift(4),n={},a=0;a!=r;++a){var s=e.read_shift(4),i=e.read_shift(4)
n[s]=e.read_shift(i,1200===t?"utf16le":"utf8").replace(p,"").replace(m,"!")}return 3&e.l&&(e.l=e.l>>3<<2),n}function zr(e){var t=e.read_shift(4),r=e.slice(e.l,e.l+t)
return(3&t)>0&&(e.l+=4-(3&t)&3),r}function jr(e,t,r){var n,a,s,i=e.read_shift(2),c=r||{}
if(e.l+=2,t!==nr&&i!==t&&-1===sr.indexOf(t))throw new Error("Expected type "+t+" saw "+i)
switch(t===nr?i:t){case 2:return n=e.read_shift(2,"i"),c.raw||(e.l+=2),n
case 3:return n=e.read_shift(4,"i")
case 11:return 0!==e.read_shift(4)
case 19:return n=e.read_shift(4)
case 30:return Hr(e,0,4).replace(p,"")
case 31:return Vr(e)
case 64:return Ur(e)
case 65:return zr(e)
case 71:return(s={}).Size=(a=e).read_shift(4),a.l+=s.Size,s
case 80:return Xr(e,i,!c.raw&&4).replace(p,"")
case 81:return function(e,t){if(!t)throw new Error("dafuq?")
return Wr(e,t,0)}(e,i).replace(p,"")
case 4108:return function(e){for(var t,r=e.read_shift(4),n=[],a=0;a!=r/2;++a)n.push((t=e,[jr(t,ar),jr(t,rr)]))
return n}(e)
case 4126:return function(e){for(var t=e.read_shift(4),r=[],n=0;n!=t;++n)r[n]=e.read_shift(0,"lpstr")
return r}(e)
default:throw new Error("TypedPropertyValue unrecognized type "+t+" "+i)}}function Kr(e,t){var r=e.l,a=e.read_shift(4),s=e.read_shift(4),i=[],c=0,o=0,l=-1,f={}
for(c=0;c!=s;++c){var h=e.read_shift(4),u=e.read_shift(4)
i[c]=[h,u+r]}var d={}
for(c=0;c!=s;++c){if(e.l!==i[c][1]){var p=!0
if(c>0&&t)switch(t[i[c-1][0]].t){case 2:e.l+2===i[c][1]&&(e.l+=2,p=!1)
break
case 80:case 4108:e.l<=i[c][1]&&(e.l=i[c][1],p=!1)}if(!t&&e.l<=i[c][1]&&(p=!1,e.l=i[c][1]),p)throw new Error("Read Error: Expected address "+i[c][1]+" at "+e.l+" :"+c)}if(t){var m=t[i[c][0]]
if(d[m.n]=jr(e,m.t,{raw:!0}),"version"===m.p&&(d[m.n]=String(d[m.n]>>16)+"."+String(65535&d[m.n])),"CodePage"==m.n)switch(d[m.n]){case 0:d[m.n]=1252
case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:n(o=d[m.n])
break
default:throw new Error("Unsupported CodePage: "+d[m.n])}}else if(1===i[c][0]){if(o=d.CodePage=jr(e,tr),n(o),-1!==l){var g=e.l
e.l=i[l][1],f=Gr(e,o),e.l=g}}else if(0===i[c][0]){if(0===o){l=c,e.l=i[c+1][1]
continue}f=Gr(e,o)}else{var b,E=f[i[c][0]]
switch(e[e.l]){case 65:e.l+=4,b=zr(e)
break
case 30:case 31:e.l+=4,b=Xr(e,e[e.l-4])
break
case 3:e.l+=4,b=e.read_shift(4,"i")
break
case 19:e.l+=4,b=e.read_shift(4)
break
case 5:e.l+=4,b=e.read_shift(8,"f")
break
case 11:e.l+=4,b=Qr(e,4)
break
case 64:e.l+=4,b=O(Ur(e))
break
default:throw new Error("unparsed value: "+e[e.l])}d[E]=b}}return e.l=r+a,d}function Yr(e,t){var r=e.content
nt(r,0)
var n,a,s,i,c=0
r.chk("feff","Byte Order: ")
r.read_shift(2)
var o=r.read_shift(4)
if(r.chk(v.utils.consts.HEADER_CLSID,"CLSID: "),1!==(n=r.read_shift(4))&&2!==n)throw new Error("Unrecognized #Sets: "+n)
if(a=r.read_shift(16),i=r.read_shift(4),1===n&&i!==r.l)throw new Error("Length mismatch: "+i+" !== "+r.l)
2===n&&(s=r.read_shift(16),c=r.read_shift(4))
var l,f=Kr(r,t),h={SystemIdentifier:o}
for(var u in f)h[u]=f[u]
if(h.FMTID=a,1===n)return h
if(r.l!==c)throw new Error("Length mismatch 2: "+r.l+" !== "+c)
try{l=Kr(r,null)}catch(e){}for(u in l)h[u]=l[u]
return h.FMTID=[a,s],h}function $r(e,t){return e.read_shift(t),null}function Qr(e,t){return 1===e.read_shift(t)}function Zr(e){return e.read_shift(2,"u")}function Jr(e,t){return function(e,t,r){for(var n=[],a=e.l+t;e.l<a;)n.push(r(e,a-e.l))
if(a!==e.l)throw new Error("Slurp error")
return n}(e,t,Zr)}function qr(e,r,n){var a=e.read_shift(n&&n.biff>=12?2:1),s="sbcs-cont",i=t;(n&&n.biff>=8&&(t=1200),n&&8!=n.biff)?12==n.biff&&(2,s="wstr"):e.read_shift(1)&&(2,s="dbcs-cont")
var c=a?e.read_shift(a,s):""
return t=i,c}function en(e){var r=t
t=1200
var n,a=e.read_shift(2),s=e.read_shift(1),i=4&s,c=8&s,o=0,l={}
c&&(o=e.read_shift(2)),i&&(n=e.read_shift(4))
var f=1&s?"dbcs-cont":"sbcs-cont",h=0===a?"":e.read_shift(a,f)
return c&&(e.l+=4*o),i&&(e.l+=n),l.t=h,c||(l.raw="<t>"+l.t+"</t>",l.r=l.t),t=r,l}function tn(e,t,r){if(r){if(r.biff>=2&&r.biff<=5)return e.read_shift(t,"sbcs-cont")
if(r.biff>=12)return e.read_shift(t,"dbcs-cont")}return 0===e.read_shift(1)?e.read_shift(t,"sbcs-cont"):e.read_shift(t,"dbcs-cont")}function rn(e,t,r){var n=e.read_shift(r&&2==r.biff?1:2)
return 0===n?(e.l++,""):tn(e,n,r)}function nn(e,t,r){if(r.biff>5)return rn(e,0,r)
var n=e.read_shift(1)
return 0===n?(e.l++,""):e.read_shift(n,"sbcs-cont")}var an=at,sn=function(e,t){var r=e.read_shift(16)
switch(16,r){case"e0c9ea79f9bace118c8200aa004ba90b":return function(e){var t=e.read_shift(4),r=e.l,n=!1
t>24&&(e.l+=t-24,"795881f43b1d7f48af2c825dc4852763"===e.read_shift(16)&&(n=!0),e.l=r)
var a=e.read_shift((n?t-24:t)>>1,"utf16le").replace(p,"")
return n&&(e.l+=24),a}(e)
case"0303000000000000c000000000000046":return function(e,t){e.read_shift(2)
var r=e.read_shift(4),n=e.read_shift(r,"cstr")
e.read_shift(2),e.read_shift(2)
if(0===e.read_shift(4))return n.replace(/\\/g,"/")
var a=e.read_shift(4)
e.read_shift(2)
return e.read_shift(a>>1,"utf16le").replace(p,"")}(e)
default:throw new Error("Unsupported Moniker "+r)}},cn=function(e,t){var r=e.read_shift(4)
return e.read_shift(r,"utf16le").replace(p,"")}
function on(e,t){return[e.read_shift(1),e.read_shift(1),e.read_shift(1),e.read_shift(1)]}function ln(e,t){var r=on(e)
return r[3]=0,r}function fn(e,t){return{r:e.read_shift(2),c:e.read_shift(2),ixfe:e.read_shift(2)}}var hn=Zr
function un(e,t){return[e.read_shift(2),jt(e)]}function dn(e,t){var r=e.read_shift(2),n=e.read_shift(2)
return{s:{c:e.read_shift(2),r:r},e:{c:e.read_shift(2),r:n}}}function pn(e,t){var r=e.read_shift(2),n=e.read_shift(2)
return{s:{c:e.read_shift(1),r:r},e:{c:e.read_shift(1),r:n}}}var mn=pn
function gn(e,t){e.l+=4
var r=e.read_shift(2),n=e.read_shift(2),a=e.read_shift(2)
return e.l+=12,[n,r,a]}function bn(e,t){e.l+=2,e.l+=e.read_shift(2)}var En={0:bn,4:bn,5:bn,6:bn,7:function(e,t){return e.l+=4,e.cf=e.read_shift(2),{}},8:bn,9:bn,10:bn,11:bn,12:bn,13:function(e,t){var r={}
return e.l+=4,e.l+=16,r.fSharedNote=e.read_shift(2),e.l+=4,r},14:bn,15:bn,16:bn,17:bn,18:bn,19:bn,20:bn,21:gn}
var vn=Zr
function Sn(e,t){var r={BIFFVer:0,dt:0}
switch(r.BIFFVer=e.read_shift(2),(t-=2)>=2&&(r.dt=e.read_shift(2),e.l-=2),r.BIFFVer){case 1536:case 1280:case 2:case 7:break
default:if(t>6)throw new Error("Unexpected BIFF Ver "+r.BIFFVer)}return e.read_shift(t),r}var Bn=$r
function Cn(e,t,r){var n=0
r&&2==r.biff||(n=e.read_shift(2))
var a=e.read_shift(2)
return r&&2==r.biff&&(n=1-(a>>15),a&=32767),[{Unsynced:1&n,DyZero:(2&n)>>1,ExAsc:(4&n)>>2,ExDsc:(8&n)>>3},a]}var Tn=nn
function wn(e,t,r){var n=e.l+t,a=8!=r.biff&&r.biff?2:4,s=e.read_shift(a),i=e.read_shift(a),c=e.read_shift(2),o=e.read_shift(2)
return e.l=n,{s:{r:s,c:c},e:{r:i,c:o}}}function kn(e,t,r,n){var a={},s=e.read_shift(4),i=e.read_shift(4),c=e.read_shift(4),o=e.read_shift(2)
return a.patternType=fr[c>>26],n.cellStyles?(a.alc=7&s,a.fWrap=s>>3&1,a.alcV=s>>4&7,a.fJustLast=s>>7&1,a.trot=s>>8&255,a.cIndent=s>>16&15,a.fShrinkToFit=s>>20&1,a.iReadOrder=s>>22&2,a.fAtrNum=s>>26&1,a.fAtrFnt=s>>27&1,a.fAtrAlc=s>>28&1,a.fAtrBdr=s>>29&1,a.fAtrPat=s>>30&1,a.fAtrProt=s>>31&1,a.dgLeft=15&i,a.dgRight=i>>4&15,a.dgTop=i>>8&15,a.dgBottom=i>>12&15,a.icvLeft=i>>16&127,a.icvRight=i>>23&127,a.grbitDiag=i>>30&3,a.icvTop=127&c,a.icvBottom=c>>7&127,a.icvDiag=c>>14&127,a.dgDiag=c>>21&15,a.icvFore=127&o,a.icvBack=o>>7&127,a.fsxButton=o>>14&1,a):a}function In(e,t,r){var n=fn(e)
2==r.biff&&++e.l
var a,s,i=(s=(a=e).read_shift(1),1===a.read_shift(1)?s:1===s)
return n.val=i,n.t=!0===i||!1===i?"b":"e",n}var An=function(e,t,r){return 0===t?"":nn(e,0,r)}
function xn(e,t,r){var n,a=e.read_shift(2),s={fBuiltIn:1&a,fWantAdvise:a>>>1&1,fWantPict:a>>>2&1,fOle:a>>>3&1,fOleLink:a>>>4&1,cf:a>>>5&1023,fIcon:a>>>15&1}
return 14849===r.sbcch&&(n=function(e,t,r){e.l+=4,t-=4
var n=e.l+t,a=qr(e,0,r),s=e.read_shift(2)
if(s!==(n-=e.l))throw new Error("Malformed AddinUdf: padding = "+n+" != "+s)
return e.l+=s,a}(e,t-2,r)),s.body=n||e.read_shift(t-2),"string"==typeof n&&(s.Name=n),s}function Rn(e,t,r){var n=e.l+t,a=(e.read_shift(2),e.read_shift(1)),s=e.read_shift(1),i=e.read_shift(r&&2==r.biff?1:2),c=0;(!r||r.biff>=5)&&(e.l+=2,c=e.read_shift(2),e.l+=4)
var o=tn(e,s,r),l=n-e.l
return r&&2==r.biff&&--l,{chKey:a,Name:o,itab:c,rgce:n==e.l||0==i?[]:function(e,t,r,n){var a,s=e.l+t,i=ah(e,n,r)
s!==e.l&&(a=nh(e,s-e.l,i,r))
return[i,a]}(e,l,r,i)}}function Dn(e,t,r){var n=mn(e,6)
switch(r.biff){case 2:e.l++,t-=7
break
case 3:case 4:e.l+=2,t-=8
break
default:e.l+=6,t-=12}return[n,function(e,t,r,n){e.l
var a,s=2==r.biff?1:2,i=e.read_shift(s)
if(65535==i)return[[],at(e,t-2)]
var c=ah(e,i,r)
t!==i+s&&(a=nh(e,t-i-s,c,r))
return[c,a]}(e,t,r)]}var On=[]
On[8]=function(e,t,r){var n=e.l+t
e.l+=10
var a=e.read_shift(2)
e.l+=4
e.read_shift(2)
e.l+=2
e.read_shift(2)
e.l+=4
var s=e.read_shift(1)
return e.l+=s,e.l=n,{fmt:a}}
function Fn(e,t,r){if(!r.cellStyles)return at(e,t)
var n=r&&r.biff>=12?4:2,a=e.read_shift(n),s=e.read_shift(n),i=e.read_shift(n),c=e.read_shift(n),o=e.read_shift(2)
return 2==n&&(e.l+=2),{s:a,e:s,w:i,ixfe:c,flags:o}}var Pn=at,yn=at,Nn=at,_n=Qr,Mn=fn,Ln=Qt,Un=Zr,Hn=Zr,Vn=Qt,Wn=Qr,Xn=Zr,Gn=Qr,zn=$r,jn=Qr,Kn=Zr,Yn=Qr,$n=Qr,Qn=Zr,Zn=$r,Jn=$r,qn=$r,ea=$r,ta=$r,ra=Zr,na=An,aa=Zr,sa=Qr,ia=An,ca=hn,oa=$r,la=Qt,fa=$r,ha=Qr,ua=Zr,da=Qr,pa=Qr,ma=Zr,ga=Qr,ba=Zr,Ea=Qr,va=Qr,Sa=Qt,Ba=Jr,Ca=Qr,Ta=Jr,wa=rn,ka=Qr,Ia=Qt,Aa=Qr,xa=Qr,Ra=Qr,Da=at,Oa=at,Fa=at,Pa=at,ya=at,Na=at,_a=at,Ma=at,La=at,Ua=at,Ha=at,Va=at,Wa=at,Xa=at,Ga=at,za=at,ja=at,Ka=at,Ya=at,$a=at,Qa=at,Za=at,Ja=at,qa=at,es=at,ts=at,rs=at,ns=at,as=at,ss=at,is=at,cs=at,os=at,ls=at,fs=at,hs=at,us=at,ds=at,ps=at,ms=at,gs=at,bs=at,Es=at,vs=at,Ss=at,Bs=at,Cs=at,Ts=at,ws=at,ks=at,Is=at,As=at,xs=at,Rs=at,Ds=at,Os=at,Fs=at,Ps=at,ys=at,Ns=at,_s=at,Ms=at,Ls=at,Us=at,Hs=at,Vs=at,Ws=at,Xs=at,Gs=at,zs=at,js=at,Ks=at,Ys=at,$s=at,Qs=at,Zs=at,Js=at,qs=at,ei=at,ti=at,ri=at,ni=at,ai=at,si=at,ii=at,ci=at,oi=at,li=at,fi=at,hi=at,ui=at,di=at,pi=at,mi=at,gi=at,bi=at,Ei=at,vi=at,Si=at,Bi=at,Ci=at,Ti=at,wi=at,ki=at,Ii=at,Ai=at,xi=at,Ri=at,Di=at,Oi=at,Fi=rn,Pi=at,yi=at,Ni=at,_i=at,Mi=at,Li=at,Ui=at,Hi=at,Vi=at,Wi=at,Xi=at,Gi=at,zi=at,ji=at,Ki=at,Yi=at,$i=at,Qi=at,Zi=at,Ji=at,qi=at,ec=at,tc=at,rc=at,nc=at,ac=at,sc=at,ic=at,cc=at,oc=at,lc=at,fc=at,hc=at,uc=at,dc=at,pc=at,mc=at,gc=at,bc=at,Ec=at,vc=at,Sc=at,Bc=at,Cc=at,Tc=at,wc=at,kc=at,Ic=at,Ac=at,xc=at,Rc=at,Dc=at,Oc=at,Fc=at,Pc=at,yc=at,Nc=at,_c=at,Mc=at,Lc=at,Uc=at,Hc=at,Vc=at,Wc=at,Xc=at,Gc=at,zc=at,jc=at,Kc=at,Yc=at,$c=at,Qc=at,Zc=at,Jc=at,qc=at,eo=at,to=at,ro=at,no=at,ao=at,so=at,io=at,co=at,oo=at,lo=at,fo=at,ho=at,uo=at,po=at,mo=at,go=at,bo=at,Eo=at,vo=at,So=at,Bo=at,Co=at,To=at,wo=at,ko=at,Io=at,Ao=at,xo=at,Ro=at,Do=at,Oo=at,Fo=at,Po=at,yo=at,No=at,_o=at,Mo=at,Lo=at,Uo=at,Ho=at,Vo=at,Wo=at,Xo=at,Go=at,zo=at,jo=at,Ko=at,Yo=at,$o=at,Qo=at,Zo=at,Jo=at,qo=at,el=at,tl=at,rl=at,nl=at,al=at,sl=at,il=at,cl=at,ol=at,ll=at,fl=at,hl=at,ul=at,dl=at
var pl=function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,255:16969}
function t(t,r){var n=r||{}
return n.dateNF||(n.dateNF="yyyymmdd"),Dt(function(t,r){var n=[],a=h(1)
switch(r.type){case"base64":a=u(l.decode(t))
break
case"binary":a=u(t)
break
case"buffer":case"array":a=t}nt(a,0)
var s=a.read_shift(1),i=!1,c=!1
switch(s){case 2:case 3:break
case 48:c=!0,i=!0
break
case 49:c=!0
break
case 131:case 139:case 245:i=!0
break
default:throw new Error("DBF Unsupported Version: "+s.toString(16))}new Date
var o=0,f=0
2==s&&(o=a.read_shift(2)),new Date(a.read_shift(1)+1900,a.read_shift(1)-1,a.read_shift(1)),2!=s&&(o=a.read_shift(4)),2!=s&&(f=a.read_shift(2))
var d=a.read_shift(2),p=1252
2!=s&&(a.l+=16,a.read_shift(1),0!==a[a.l]&&(p=e[a[a.l]]),a.l+=1,a.l+=2)
for(var m=[],g={},b=f-10-(c?264:0);2==s?a.l<a.length&&13!=a[a.l]:a.l<b;)switch((g={}).name=cptable.utils.decode(p,a.slice(a.l,a.l+10)).replace(/[\u0000\r\n].*$/g,""),a.l+=11,g.type=String.fromCharCode(a.read_shift(1)),2!=s&&(g.offset=a.read_shift(4)),g.len=a.read_shift(1),2==s&&(g.offset=a.read_shift(2)),g.dec=a.read_shift(1),g.name.length&&m.push(g),2!=s&&(a.l+=14),g.type){case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"T":case"Y":case"0":case"+":case"@":break
default:throw new Error("Unknown Field Type: "+g.type)}if(13!==a[a.l]?a.l=f-1:2==s&&(a.l=521),2!=s){if(13!==a.read_shift(1))throw new Error("DBF Terminator not found "+a.l+" "+a[a.l])
a.l=f}var E=0,v=0
for(n[0]=[],v=0;v!=m.length;++v)n[0][v]=m[v].name
for(;o-- >0;)if(42!==a[a.l])for(++a.l,n[++E]=[],v=0,v=0;v!=m.length;++v){var S=a.slice(a.l,a.l+m[v].len)
a.l+=m[v].len,nt(S,0)
var B=cptable.utils.decode(p,S)
switch(m[v].type){case"C":n[E][v]=cptable.utils.decode(p,S),n[E][v]=n[E][v].trim()
break
case"D":8===B.length?n[E][v]=new Date(+B.substr(0,4),+B.substr(4,2)-1,+B.substr(6,2)):n[E][v]=B
break
case"F":n[E][v]=parseFloat(B.trim())
break
case"I":n[E][v]=S.read_shift(4,"i")
break
case"L":switch(B.toUpperCase()){case"Y":case"T":n[E][v]=!0
break
case"N":case"F":n[E][v]=!1
break
case" ":case"?":n[E][v]=!1
break
default:throw new Error("DBF Unrecognized L:|"+B+"|")}break
case"M":if(!i)throw new Error("DBF Unexpected MEMO for type "+s.toString(16))
n[E][v]="##MEMO##"+S.read_shift(4)
break
case"N":n[E][v]=+B.replace(/\u0000/g,"").trim()
break
case"T":var C=S.read_shift(4),T=S.read_shift(4)
throw new Error(C+" | "+T)
case"Y":n[E][v]=S.read(4,"i")/1e4
break
case"0":if("_NullFlags"===m[v].name)break
default:throw new Error("DBF Unsupported data type "+m[v].type)}}else a.l+=d
if(2!=s&&a.l<a.length&&26!=a[a.l++])throw new Error("DBF EOF Marker missing "+(a.l-1)+" of "+a.length+" "+a[a.l-1].toString(16))
return n}(t,n),n)}return{to_workbook:function(e,r){try{return Rt(t(e,r),r)}catch(e){if(r&&r.WTF)throw e}return{SheetNames:[],Sheets:{}}},to_sheet:t}}(),ml=function(){function e(e,t){for(var r,n=e.split(/[\n\r]+/),a=-1,s=-1,i=0,c=0,o=[],l=[],f=null,h={},u=[],d=[],p=[],m=0;i!==n.length;++i){m=0
var b,E=n[i].trim(),v=E.replace(/;;/g,"").split(";").map(function(e){return e.replace(/\u0001/g,";")}),S=v[0]
if(E.length>0)switch(S){case"ID":case"E":case"B":case"O":break
case"P":"P"==v[1].charAt(0)&&l.push(E.substr(3).replace(/;;/g,";"))
break
case"C":for(c=1;c<v.length;++c)switch(v[c].charAt(0)){case"X":s=parseInt(v[c].substr(1))-1
break
case"Y":for(a=parseInt(v[c].substr(1))-1,s=0,r=o.length;r<=a;++r)o[r]=[]
break
case"K":'"'===(b=v[c].substr(1)).charAt(0)?b=b.substr(1,b.length-2):"TRUE"===b?b=!0:"FALSE"===b?b=!1:+b==+b?(b=+b,null!==f&&g.is_date(f)&&(b=k(b))):isNaN(N(b).getDate())||(b=O(b)),o[a][s]=b,f=null
break
case"E":var B=Hf(v[c].substr(1),{r:a,c:s})
o[a][s]=[o[a][s],B]
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+E)}break
case"F":var C=0
for(c=1;c<v.length;++c)switch(v[c].charAt(0)){case"X":s=parseInt(v[c].substr(1))-1,++C
break
case"Y":for(a=parseInt(v[c].substr(1))-1,r=o.length;r<=a;++r)o[r]=[]
break
case"M":m=parseInt(v[c].substr(1))/20
break
case"F":break
case"P":f=l[parseInt(v[c].substr(1))]
break
case"S":case"D":case"N":break
case"W":for(p=v[c].substr(1).split(" "),r=parseInt(p[0],10);r<=parseInt(p[1],10);++r)m=parseInt(p[2],10),d[r-1]=0==m?{hidden:!0}:{wch:m},nf(d[r-1])
break
case"C":d[s=parseInt(v[c].substr(1))-1]||(d[s]={})
break
case"R":u[a=parseInt(v[c].substr(1))-1]||(u[a]={}),m>0?(u[a].hpt=m,u[a].hpx=cf(m)):0==m&&(u[a].hidden=!0)
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+E)}C<1&&(f=null)
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+E)}}return u.length>0&&(h["!rows"]=u),d.length>0&&(h["!cols"]=d),[o,h]}function t(t,r){var n=function(t,r){switch(r.type){case"base64":return e(l.decode(t),r)
case"binary":return e(t,r)
case"buffer":return e(t.toString("binary"),r)
case"array":return e(F(t),r)}throw new Error("Unrecognized type "+r.type)}(t,r),a=n[0],s=n[1],i=Dt(a,r)
return B(s).forEach(function(e){i[e]=s[e]}),i}function r(e,t,r,n,a){var s="C;Y"+(r+1)+";X"+(n+1)+";K"
switch(e.t){case"n":s+=e.v||0,e.f&&!e.F&&(s+=";E"+Wf(e.f,{r:r,c:n}))
break
case"b":s+=e.v?"TRUE":"FALSE"
break
case"e":s+=e.w||e.v
break
case"d":s+='"'+(e.w||e.v)+'"'
break
case"s":s+='"'+e.v.replace(/"/g,"")+'"'}return s}return{to_workbook:function(e,r){return Rt(t(e,r),r)},to_sheet:t,from_sheet:function(e,t){var n,a,s,i=["ID;PWXL;N;E"],c=[],o=wt(e["!ref"]),l=Array.isArray(e)
i.push("P;PGeneral"),i.push("F;P0;DG0G8;M255"),e["!cols"]&&(a=i,e["!cols"].forEach(function(e,t){var r="F;W"+(t+1)+" "+(t+1)+" "
e.hidden?r+="0":("number"==typeof e.width&&(e.wpx=Jl(e.width)),"number"==typeof e.wpx&&(e.wch=ql(e.wpx)),"number"==typeof e.wch&&(r+=Math.round(e.wch)))," "!=r.charAt(r.length-1)&&a.push(r)})),e["!rows"]&&(s=i,e["!rows"].forEach(function(e,t){var r="F;"
e.hidden?r+="M0;":e.hpt?r+="M"+20*e.hpt+";":e.hpx&&(r+="M"+20*sf(e.hpx)+";"),r.length>2&&s.push(r+"R"+(t+1))})),i.push("B;Y"+(o.e.r-o.s.r+1)+";X"+(o.e.c-o.s.c+1)+";D"+[o.s.c,o.s.r,o.e.c,o.e.r].join(" "))
for(var f=o.s.r;f<=o.e.r;++f)for(var h=o.s.c;h<=o.e.c;++h){var u=Tt({r:f,c:h});(n=l?(e[f]||[])[h]:e[u])&&(null!=n.v||n.f&&!n.F)&&c.push(r(n,0,f,h))}return i.join("\r\n")+"\r\n"+c.join("\r\n")+"\r\nE\r\n"}}}(),gl=function(){function e(e,t){for(var r=e.split("\n"),n=-1,a=-1,s=0,i=[];s!==r.length;++s)if("BOT"!==r[s].trim()){if(!(n<0)){var c=r[s].trim().split(","),o=c[0],l=c[1],f=r[++s].trim()
switch(+o){case-1:if("BOT"===f){i[++n]=[],a=0
continue}if("EOD"!==f)throw new Error("Unrecognized DIF special command "+f)
break
case 0:"TRUE"===f?i[n][a]=!0:"FALSE"===f?i[n][a]=!1:+l==+l?i[n][a]=+l:isNaN(N(l).getDate())?i[n][a]=l:i[n][a]=O(l),++a
break
case 1:f=f.substr(1,f.length-2),i[n][a++]=""!==f?f:null}if("EOD"===f)break}}else i[++n]=[],a=0
return i}function t(t,r){return Dt(function(t,r){switch(r.type){case"base64":return e(l.decode(t))
case"binary":return e(t)
case"buffer":return e(t.toString("binary"))
case"array":return e(F(t))}throw new Error("Unrecognized type "+r.type)}(t,r),r)}var r,n
return{to_workbook:function(e,r){return Rt(t(e,r),r)},to_sheet:t,from_sheet:(r=function(e,t,r,n,a){e.push(t),e.push(r+","+n),e.push('"'+a.replace(/"/g,'""')+'"')},n=function(e,t,r,n){e.push(t+","+r),e.push(1==t?'"'+n.replace(/"/g,'""')+'"':n)},function(e,t){var a,s=[],i=wt(e["!ref"]),c=Array.isArray(e)
r(s,"TABLE",0,1,"sheetjs"),r(s,"VECTORS",0,i.e.r-i.s.r+1,""),r(s,"TUPLES",0,i.e.c-i.s.c+1,""),r(s,"DATA",0,0,"")
for(var o=i.s.r;o<=i.e.r;++o){n(s,-1,0,"BOT")
for(var l=i.s.c;l<=i.e.c;++l){var f=Tt({r:o,c:l})
if(a=c?(e[o]||[])[l]:e[f])switch(a.t){case"n":var h=a.w
h||null==a.v||(h=a.v),null==h?a.f&&!a.F?n(s,1,0,"="+a.f):n(s,1,0,""):n(s,0,h,"V")
break
case"b":n(s,0,a.v?1:0,a.v?"TRUE":"FALSE")
break
case"s":n(s,1,0,isNaN(a.v)?a.v:'="'+a.v+'"')
break
case"d":a.w||(a.w=g.format(a.z||g._table[14],w(O(a.v)))),n(s,0,a.w,"V")
break
default:n(s,1,0,"")}else n(s,1,0,"")}}return n(s,-1,0,"EOD"),s.join("\r\n")})}}(),bl=function(){function e(e,t,r,n){"TRUE"===e?t[r][n]=!0:"FALSE"===e?t[r][n]=!1:""===e||(+e==+e?t[r][n]=+e:isNaN(N(e).getDate())?t[r][n]=e:t[r][n]=O(e))}function t(e,t){var r=t||{},n=""
null!=o&&null==r.dense&&(r.dense=o)
var a=r.dense?[]:{},s={s:{c:0,r:0},e:{c:0,r:0}}
"sep="==e.substr(0,4)&&10==e.charCodeAt(5)?(n=e.charAt(4),e=e.substr(6)):n=-1==e.substr(0,1024).indexOf("\t")?",":"\t"
var i=0,c=0,l=0,f=0,h=0,u=n.charCodeAt(0),d=!1,p=0
function m(){var t=e.slice(f,h),n={}
61==t.charCodeAt(0)?(n.t="n",n.f=t.substr(1)):"TRUE"==t?(n.t="b",n.v=!0):"FALSE"==t?(n.t="b",n.v=!1):isNaN(l=+t)?isNaN(N(t).getDate())?(n.t="s",'"'==t.charAt(0)&&'"'==t.charAt(t.length-1)&&(t=t.slice(1,-1).replace(/""/g,'"')),n.v=t):(n.z=r.dateNF||g._table[14],r.cellDates?(n.t="d",n.v=O(t)):(n.t="n",n.v=w(O(t))),n.w=g.format(n.z,n.v instanceof Date?w(n.v):n.v)):(n.t="n",n.w=t,n.v=l),r.dense?(a[i]||(a[i]=[]),a[i][c]=n):a[Tt({c:c,r:i})]=n,f=h+1,s.e.c<c&&(s.e.c=c),s.e.r<i&&(s.e.r=i),p==u?++c:(c=0,++i)}for(e=e.replace(/\r\n/gm,"\n");h<e.length;++h)switch(p=e.charCodeAt(h)){case 34:d=!d
break
case u:case 10:case 13:d||m()}return h-f>0&&m(),a["!ref"]=kt(s),a}function r(r,n){return"sep="==r.substr(0,4)?t(r,n):r.indexOf("\t")>=0||r.indexOf(",")>=0?t(r,n):Dt(function(t,r){var n=[]
if(!t||0===t.length)return n
for(var a=t.split(/[\r\n]/),s=a.length-1;s>=0&&0===a[s].length;)--s
for(var i=10,c=0,o=0;o<=s;++o)-1==(c=a[o].indexOf(" "))?c=a[o].length:c++,i=Math.max(i,c)
for(o=0;o<=s;++o){n[o]=[]
var l=0
for(e(a[o].slice(0,i).trim(),n,o,l),l=1;l<=(a[o].length-i)/10+1;++l)e(a[o].slice(i+10*(l-1),i+10*l).trim(),n,o,l)}return n}(r),n)}function n(e,t){var n="",a=Dd(e,t)
switch(t.type){case"base64":n=l.decode(e)
break
case"binary":n=e
break
case"buffer":n=e.toString("binary")
break
case"array":n=F(e)
break
default:throw new Error("Unrecognized type "+t.type)}return 239==a[0]&&187==a[1]&&191==a[2]&&(n=oe(n)),r(n,t)}return{to_workbook:function(e,t){return Rt(n(e,t),t)},to_sheet:n,from_sheet:function(e,t){for(var r,n=[],a=wt(e["!ref"]),s=Array.isArray(e),i=a.s.r;i<=a.e.r;++i){for(var c=[],o=a.s.c;o<=a.e.c;++o){var l=Tt({r:i,c:o})
if((r=s?(e[i]||[])[o]:e[l])&&null!=r.v){for(var f=(r.w||(xt(r),r.w)||"").substr(0,10);f.length<10;)f+=" "
c.push(f+(0==o?" ":""))}else c.push("          ")}n.push(c.join(""))}return n.join("\n")}}}()
var El=function(){function e(e,t){if(!e)return e
var r=t||{}
null!=o&&null==r.dense&&(r.dense=o)
var n=r.dense?[]:{},a="Sheet1",s=0,l={},f=[a],h={s:{r:0,c:0},e:{r:0,c:0}}
if(2==e[2])r.Enum=i
else if(26==e[2])r.Enum=c
else{if(14!=e[2])throw new Error("Unrecognized LOTUS BOF "+e[2])
r.Enum=c,r.qpro=!0,e.l=0}return function(e,t,r){if(e){nt(e,e.l||0)
for(var n=r.Enum||i;e.l<e.length;){var a=e.read_shift(2),s=n[a]||n[255],c=e.read_shift(2),o=e.l+c,l=s.f(e,c,r)
if(e.l=o,t(l,s.n,a))return}}}(e,function(t,i,c){if(2==e[2])switch(c){case 0:r.vers=t,t>=4096&&(r.qpro=!0)
break
case 6:h=t
break
case 15:r.qpro||(t[1].v=t[1].v.substr(1))
case 13:case 14:case 16:case 51:14==c&&112==(112&t[2])&&(15&t[2])>1&&(15&t[2])<15&&(t[1].z=r.dateNF||g._table[14],r.cellDates&&(t[1].t="d",t[1].v=k(t[1].v))),r.dense?(n[t[0].r]||(n[t[0].r]=[]),n[t[0].r][t[0].c]=t[1]):n[Tt(t[0])]=t[1]}else switch(c){case 22:t[1].v=t[1].v.substr(1)
case 23:case 24:case 25:case 37:case 39:case 40:t[3]>s&&(n["!ref"]=kt(h),l[a]=n,n=r.dense?[]:{},h={s:{r:0,c:0},e:{r:0,c:0}},s=t[3],a="Sheet"+(s+1),f.push(a)),n[Tt(t[0])]=t[1],h.e.c<t[0].c&&(h.e.c=t[0].c),h.e.r<t[0].r&&(h.e.r=t[0].r)}},r),n["!ref"]=kt(h),l[a]=n,{SheetNames:f,Sheets:l}}function t(e,t,r){var n=[{c:0,r:0},{t:"n",v:0},0]
return r.qpro&&20768!=r.vers?(n[0].c=e.read_shift(1),e.l++,n[0].r=e.read_shift(2),e.l+=2):(n[2]=e.read_shift(1),n[0].c=e.read_shift(2),n[0].r=e.read_shift(2)),n}function r(e,r,n){var a=e.l+r,s=t(e,0,n)
if(s[1].t="s",20768==n.vers){e.l++
var i=e.read_shift(1)
return s[1].v=e.read_shift(i,"utf8"),s}return n.qpro&&e.l++,s[1].v=e.read_shift(a-e.l,"cstr"),s}function n(e,t){var r=[{c:0,r:0},{t:"n",v:0},0]
return r[0].r=e.read_shift(2),r[3]=e[e.l++],r[0].c=e[e.l++],r}function a(e,t){var r=n(e),a=e.read_shift(4),s=e.read_shift(4),i=e.read_shift(2)
if(65535==i)return r[1].v=0,r
return i=(32767&i)-16446,r[1].v=(i>0?s<<i:s>>>-i)+(i>-32?a<<i+32:a>>>-(i+32)),r}function s(e,t){var r=n(e),a=e.read_shift(8,"f")
return r[1].v=a,r}var i={0:{n:"BOF",f:Zr},1:{n:"EOF",f:at},2:{n:"CALCMODE",f:at},3:{n:"CALCORDER",f:at},4:{n:"SPLIT",f:at},5:{n:"SYNC",f:at},6:{n:"RANGE",f:function(e,t){var r={s:{c:0,r:0},e:{c:0,r:0}}
return r.s.c=e.read_shift(2),r.s.r=e.read_shift(2),r.e.c=e.read_shift(2),r.e.r=e.read_shift(2),65535==r.s.c&&(r.s.c=r.e.c=r.s.r=r.e.r=0),r}},7:{n:"WINDOW1",f:at},8:{n:"COLW1",f:at},9:{n:"WINTWO",f:at},10:{n:"COLW2",f:at},11:{n:"NAME",f:at},12:{n:"BLANK",f:at},13:{n:"INTEGER",f:function(e,r,n){var a=t(e,0,n)
return a[1].v=e.read_shift(2,"i"),a}},14:{n:"NUMBER",f:function(e,r,n){var a=t(e,0,n)
return a[1].v=e.read_shift(8,"f"),a}},15:{n:"LABEL",f:r},16:{n:"FORMULA",f:function(e,r,n){var a=e.l+r,s=t(e,0,n)
if(s[1].v=e.read_shift(8,"f"),n.qpro)e.l=a
else{var i=e.read_shift(2)
e.l+=i}return s}},24:{n:"TABLE",f:at},25:{n:"ORANGE",f:at},26:{n:"PRANGE",f:at},27:{n:"SRANGE",f:at},28:{n:"FRANGE",f:at},29:{n:"KRANGE1",f:at},32:{n:"HRANGE",f:at},35:{n:"KRANGE2",f:at},36:{n:"PROTEC",f:at},37:{n:"FOOTER",f:at},38:{n:"HEADER",f:at},39:{n:"SETUP",f:at},40:{n:"MARGINS",f:at},41:{n:"LABELFMT",f:at},42:{n:"TITLES",f:at},43:{n:"SHEETJS",f:at},45:{n:"GRAPH",f:at},46:{n:"NGRAPH",f:at},47:{n:"CALCCOUNT",f:at},48:{n:"UNFORMATTED",f:at},49:{n:"CURSORW12",f:at},50:{n:"WINDOW",f:at},51:{n:"STRING",f:r},55:{n:"PASSWORD",f:at},56:{n:"LOCKED",f:at},60:{n:"QUERY",f:at},61:{n:"QUERYNAME",f:at},62:{n:"PRINT",f:at},63:{n:"PRINTNAME",f:at},64:{n:"GRAPH2",f:at},65:{n:"GRAPHNAME",f:at},66:{n:"ZOOM",f:at},67:{n:"SYMSPLIT",f:at},68:{n:"NSROWS",f:at},69:{n:"NSCOLS",f:at},70:{n:"RULER",f:at},71:{n:"NNAME",f:at},72:{n:"ACOMM",f:at},73:{n:"AMACRO",f:at},74:{n:"PARSE",f:at},255:{n:"",f:at}},c={0:{n:"BOF",f:at},1:{n:"EOF",f:at},3:{n:"??",f:at},4:{n:"??",f:at},5:{n:"??",f:at},6:{n:"??",f:at},7:{n:"??",f:at},9:{n:"??",f:at},10:{n:"??",f:at},11:{n:"??",f:at},12:{n:"??",f:at},14:{n:"??",f:at},15:{n:"??",f:at},16:{n:"??",f:at},17:{n:"??",f:at},18:{n:"??",f:at},19:{n:"??",f:at},21:{n:"??",f:at},22:{n:"LABEL16",f:function(e,t){var r=n(e)
return r[1].t="s",r[1].v=e.read_shift(t-4,"cstr"),r}},23:{n:"NUMBER17",f:a},24:{n:"NUMBER18",f:function(e,t){var r=n(e)
r[1].v=e.read_shift(2)
var a=r[1].v>>1
if(1&r[1].v)switch(7&a){case 1:a=500*(a>>3)
break
case 2:a=(a>>3)/20
break
case 4:a=(a>>3)/2e3
break
case 6:a=(a>>3)/16
break
case 7:a=(a>>3)/64
break
default:throw"unknown NUMBER_18 encoding "+(7&a)}return r[1].v=a,r}},25:{n:"FORMULA19",f:function(e,t){var r=a(e)
return e.l+=t-14,r}},26:{n:"??",f:at},27:{n:"??",f:at},28:{n:"??",f:at},29:{n:"??",f:at},30:{n:"??",f:at},31:{n:"??",f:at},33:{n:"??",f:at},37:{n:"NUMBER25",f:function(e,t){var r=n(e),a=e.read_shift(4)
return r[1].v=a>>6,r}},39:{n:"NUMBER27",f:s},40:{n:"FORMULA28",f:function(e,t){var r=s(e)
return e.l+=t-10,r}},255:{n:"",f:at}}
return{to_workbook:function(t,r){switch(r.type){case"base64":return e(u(l.decode(t)),r)
case"binary":return e(u(t),r)
case"buffer":case"array":return e(t,r)}throw"Unsupported type "+r.type}}}(),vl={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},Sl=function(){var e=pe("t"),t=pe("rPr"),r=/<(?:\w+:)?r>/g,n=/<\/(?:\w+:)?r>/,a=/\r\n/g,s=function(e,t,r){var n={},a=65001,s="",i=e.match(G),c=0
if(i)for(;c!=i.length;++c){var o=K(i[c])
switch(o[0].replace(/\w*:/g,"")){case"<condense":case"<extend":break
case"<shadow":if(!o.val)break
case"<shadow>":case"<shadow/>":n.shadow=1
break
case"</shadow>":break
case"<charset":if("1"==o.val)break
a=vl[parseInt(o.val,10)]
break
case"<outline":if(!o.val)break
case"<outline>":case"<outline/>":n.outline=1
break
case"</outline>":break
case"<rFont":n.name=o.val
break
case"<sz":n.sz=o.val
break
case"<strike":if(!o.val)break
case"<strike>":case"<strike/>":n.strike=1
break
case"</strike>":break
case"<u":if(!o.val)break
switch(o.val){case"double":n.uval="double"
break
case"singleAccounting":n.uval="single-accounting"
break
case"doubleAccounting":n.uval="double-accounting"}case"<u>":case"<u/>":n.u=1
break
case"</u>":break
case"<b":if("0"==o.val)break
case"<b>":case"<b/>":n.b=1
break
case"</b>":break
case"<i":if("0"==o.val)break
case"<i>":case"<i/>":n.i=1
break
case"</i>":break
case"<color":o.rgb&&(n.color=o.rgb.substr(2,6))
break
case"<family":n.family=o.val
break
case"<vertAlign":s=o.val
break
case"<scheme":break
default:if(47!==o[0].charCodeAt(1))throw"Unrecognized rich format "+o[0]}}var l=[]
return n.u&&l.push("text-decoration: underline;"),n.uval&&l.push("text-underline-style:"+n.uval+";"),n.sz&&l.push("font-size:"+n.sz+";"),n.outline&&l.push("text-effect: outline;"),n.shadow&&l.push("text-shadow: auto;"),t.push('<span style="'+l.join("")+'">'),n.b&&(t.push("<b>"),r.push("</b>")),n.i&&(t.push("<i>"),r.push("</i>")),n.strike&&(t.push("<s>"),r.push("</s>")),"superscript"==s?s="sup":"subscript"==s&&(s="sub"),""!=s&&(t.push("<"+s+">"),r.push("</"+s+">")),r.push("</span>"),a}
function i(r){var n=[[],"",[]],i=r.match(e)
if(!S(i))return""
n[1]=i[1]
var c=r.match(t)
return S(c)&&s(c[1],n[0],n[2]),n[0].join("")+n[1].replace(a,"<br/>")+n[2].join("")}return function(e){return e.replace(r,"").split(n).map(i).join("")}}(),Bl=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,Cl=/<(?:\w+:)?r>/,Tl=/<(?:\w+:)?rPh.*?>(.*?)<\/(?:\w+:)?rPh>/g
function wl(e,t){var r=!t||t.cellHTML,n={}
return e?(e.match(/^\s*<(?:\w+:)?t[^>]*>/)?(n.t=oe(J(e.substr(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0])),n.r=oe(e),r&&(n.h=ae(n.t))):e.match(Cl)&&(n.r=oe(e),n.t=oe(J((e.replace(Tl,"").match(Bl)||[]).join("").replace(G,""))),r&&(n.h=Sl(n.r))),n):null}var kl=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,Il=/<(?:\w+:)?(?:si|sstItem)>/g,Al=/<\/(?:\w+:)?(?:si|sstItem)>/
Er.SST="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
var xl=/^\s|\s$|[\t\n\r]/
var Rl=function(e,t){var r=!1
return null==t&&(r=!0,t=st(15+4*e.t.length)),t.write_shift(1,0),Pt(e.t,t),r?t.slice(0,t.l):t}
function Dl(e,t){var r,n,a=ct()
ot(a,"BrtBeginSst",(r=e,n||(n=st(8)),n.write_shift(4,r.Count),n.write_shift(4,r.Unique),n))
for(var s=0;s<e.length;++s)ot(a,"BrtSSTItem",Rl(e[s]))
return ot(a,"BrtEndSst"),a.end()}function Ol(e){if("undefined"!=typeof cptable)return cptable.utils.encode(1252,e)
for(var t=[],r=e.split(""),n=0;n<r.length;++n)t[n]=r[n].charCodeAt(0)
return t}function Fl(e,t){var r={}
return r.Major=e.read_shift(2),r.Minor=e.read_shift(2),t>=4&&(e.l+=t-4),r}function Pl(e){for(var t=e.read_shift(4),r=(e.l,{}),n=e.read_shift(4),a=[];n-- >0;){var s={}
s.t=e.read_shift(4),s.v=e.read_shift(0,"lpp4"),a.push(s)}return r.name=e.read_shift(0,"lpp4"),r.comps=a,r}function yl(e,t){var r=function(e,t){var r={}
e.read_shift(4)
return e.l,e.l+=4,r.id=e.read_shift(0,"lpp4"),r.name=e.read_shift(0,"lpp4"),r.R=Fl(e,4),r.U=Fl(e,4),r.W=Fl(e,4),r}(e)
if(r.ename=e.read_shift(0,"8lpp4"),r.blksz=e.read_shift(4),r.cmode=e.read_shift(4),4!=e.read_shift(4))throw new Error("Bad !Primary record")
return r}function Nl(e,t){var r=e.l+t,n={}
n.Flags=63&e.read_shift(4),e.l+=4,n.AlgID=e.read_shift(4)
var a=!1
switch(n.AlgID){case 26126:case 26127:case 26128:a=36==n.Flags
break
case 26625:a=4==n.Flags
break
case 0:a=16==n.Flags||4==n.Flags||36==n.Flags
break
default:throw"Unrecognized encryption algorithm: "+n.AlgID}if(!a)throw new Error("Encryption Flags/AlgID mismatch")
return n.AlgIDHash=e.read_shift(4),n.KeySize=e.read_shift(4),n.ProviderType=e.read_shift(4),e.l+=8,n.CSPName=e.read_shift(r-e.l>>1,"utf16le").slice(0,-1),e.l=r,n}function _l(e,t){var r={}
e.l+=4,r.Salt=e.slice(e.l,e.l+16),e.l+=16,r.Verifier=e.slice(e.l,e.l+16),e.l+=16
var n=e.read_shift(4)
return r.VerifierHash=e.slice(e.l,e.l+n),e.l+=n,r}function Ml(e,t){var r=Fl(e)
switch(r.Minor){case 2:return function(e,t){if(36!=(63&e.read_shift(4)))throw new Error("EncryptionInfo mismatch")
var r=e.read_shift(4),n=(e.l,Nl(e,r)),a=_l(e,(e.length,e.l))
return{t:"Std",h:n,v:a}}(e)
case 3:return function(e,t){throw new Error("File is password-protected: ECMA-376 Extensible")}()
case 4:return function(e,t){throw new Error("File is password-protected: ECMA-376 Agile")}()}throw new Error("ECMA-376 Encryped file unrecognized Version: "+r.Minor)}function Ll(e){var t,r,n,a=0,s=Ol(e),i=s.length+1
for((t=h(i))[0]=s.length,r=1;r!=i;++r)t[r]=s[r-1]
for(r=i-1;r>=0;--r)n=t[r],a=((0==(16384&a)?0:1)|a<<1&32767)^n
return 52811^a}var Ul,Hl,Vl,Wl,Xl=(Ul=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],Hl=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],Vl=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],Wl=function(e,t){return 255&((r=e^t)/2|128*r)
var r},function(e){for(var t,r,n,a=Ol(e),s=function(e){for(var t=Hl[e.length-1],r=104,n=e.length-1;n>=0;--n)for(var a=e[n],s=0;7!=s;++s)64&a&&(t^=Vl[r]),a*=2,--r
return t}(a),i=a.length,c=h(16),o=0;16!=o;++o)c[o]=0
for(1==(1&i)&&(t=s>>8,c[i]=Wl(Ul[0],t),--i,t=255&s,r=a[a.length-1],c[i]=Wl(r,t));i>0;)t=s>>8,c[--i]=Wl(a[i],t),t=255&s,c[--i]=Wl(a[i],t)
for(i=15,n=15-a.length;n>0;)t=s>>8,c[i]=Wl(Ul[n],t),--n,t=255&s,c[--i]=Wl(a[i],t),--i,--n
return c}),Gl=function(e){var t=0,r=Xl(e)
return function(e){var n=function(e,t,r,n,a){var s,i
for(a||(a=t),n||(n=Xl(e)),s=0;s!=t.length;++s)i=t[s],i=255&((i^=n[r])>>5|i<<3),a[s]=i,++r
return[a,r,n]}("",e,t,r)
return t=n[1],n[0]}}
function zl(e,t,r){var n=r||{}
return n.Info=e.read_shift(2),e.l-=2,1===n.Info?n.Data=function(e,t){var r={},n=r.EncryptionVersionInfo=Fl(e,4)
if(1!=n.Major||1!=n.Minor)throw"unrecognized version code "+n.Major+" : "+n.Minor
return r.Salt=e.read_shift(16),r.EncryptedVerifier=e.read_shift(16),r.EncryptedVerifierHash=e.read_shift(16),r}(e):n.Data=function(e,t){var r={},n=r.EncryptionVersionInfo=Fl(e,4)
if(2!=n.Minor)throw"unrecognized minor version code: "+n.Minor
if(n.Major>4||n.Major<2)throw"unrecognized major version code: "+n.Major
r.Flags=e.read_shift(4)
var a=e.read_shift(4)
return r.EncryptionHeader=Nl(e,a),r.EncryptionVerifier=_l(e),r}(e),n}function jl(e){for(var t=0,r=1;3!=t;++t)r=256*r+(e[t]>255?255:e[t]<0?0:e[t])
return r.toString(16).toUpperCase().substr(1)}function Kl(e,t){if(0===t)return e
var r,n,a=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(t,r,n),s=Math.min(t,r,n),i=a-s
if(0===i)return[0,0,t]
var c,o=0,l=a+s
switch(c=i/(l>1?2-l:l),a){case t:o=((r-n)/i+6)%6
break
case r:o=(n-t)/i+2
break
case n:o=(t-r)/i+4}return[o/6,c,l/2]}((n=(r=e).substr("#"===r[0]?1:0,6),[parseInt(n.substr(0,2),16),parseInt(n.substr(2,2),16),parseInt(n.substr(4,2),16)]))
return a[2]=t<0?a[2]*(1+t):1-(1-a[2])*(1-t),jl(function(e){var t,r=e[0],n=e[1],a=e[2],s=2*n*(a<.5?a:1-a),i=a-s/2,c=[i,i,i],o=6*r
if(0!==n)switch(0|o){case 0:case 6:t=s*o,c[0]+=s,c[1]+=t
break
case 1:t=s*(2-o),c[0]+=t,c[1]+=s
break
case 2:t=s*(o-2),c[1]+=s,c[2]+=t
break
case 3:t=s*(4-o),c[1]+=t,c[2]+=s
break
case 4:t=s*(o-4),c[2]+=s,c[0]+=t
break
case 5:t=s*(6-o),c[2]+=t,c[0]+=s}for(var l=0;3!=l;++l)c[l]=Math.round(255*c[l])
return c}(a))}var Yl=6,$l=15,Ql=1,Zl=Yl
function Jl(e){return Math.floor((e+Math.round(128/Zl)/256)*Zl)}function ql(e){return Math.floor((e-5)/Zl*100+.5)/100}function ef(e){return Math.round((e*Zl+5)/Zl*256)/256}function tf(e){return ef(ql(Jl(e)))}function rf(e){var t=1/0,r=Ql
for(Zl=Ql;Zl<$l;++Zl)Math.abs(e-tf(e))<=t&&(t=Math.abs(e-tf(e)),r=Zl)
Zl=r}function nf(e){e.width?(e.wpx=Jl(e.width),e.wch=ql(e.wpx),e.MDW=Zl):e.wpx?(e.wch=ql(e.wpx),e.width=ef(e.wch),e.MDW=Zl):"number"==typeof e.wch&&(e.width=ef(e.wch),e.wpx=Jl(e.width),e.MDW=Zl),e.customWidth&&delete e.customWidth}var af=96
function sf(e){return 96*e/af}function cf(e){return e*af/96}var of={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"}
var lf,ff,hf,uf,df,pf=(lf=/<numFmts([^>]*)>.*<\/numFmts>/,ff=/<cellXfs([^>]*)>.*<\/cellXfs>/,hf=/<fills([^>]*)>.*<\/fills>/,uf=/<fonts([^>]*)>.*<\/fonts>/,df=/<borders([^>]*)>.*<\/borders>/,function(e,t,r){var n,a,s,i,c,o={}
return e?((n=e.match(lf))&&function(e,t,r){t.NumberFmt=[]
for(var n=B(g._table),a=0;a<n.length;++a)t.NumberFmt[n[a]]=g._table[n[a]]
var s=e[0].match(G)
if(s)for(a=0;a<s.length;++a){var i=K(s[a])
switch(i[0]){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break
case"<numFmt":var c=J(oe(i.formatCode)),o=parseInt(i.numFmtId,10)
t.NumberFmt[o]=c,o>0&&g.load(c,o)
break
case"</numFmt>":break
default:if(r.WTF)throw new Error("unrecognized "+i[0]+" in numFmts")}}}(n,o,r),(n=e.match(uf))&&function(e,t,r,n){t.Fonts=[]
var a={}
e[0].match(G).forEach(function(e){var s=K(e)
switch(s[0]){case"<fonts":case"<fonts>":case"</fonts>":break
case"<font":case"<font>":break
case"</font>":case"<font/>":t.Fonts.push(a),a={}
break
case"<name":s.val&&(a.name=s.val)
break
case"<name/>":case"</name>":break
case"<b":a.bold=s.val?ce(s.val):1
break
case"<b/>":a.bold=1
break
case"<i":a.italic=s.val?ce(s.val):1
break
case"<i/>":a.italic=1
break
case"<u":switch(s.val){case"none":a.underline=0
break
case"single":a.underline=1
break
case"double":a.underline=2
break
case"singleAccounting":a.underline=33
break
case"doubleAccounting":a.underline=34}break
case"<u/>":a.underline=1
break
case"<strike":a.strike=s.val?ce(s.val):1
break
case"<strike/>":a.strike=1
break
case"<outline":a.outline=s.val?ce(s.val):1
break
case"<outline/>":a.outline=1
break
case"<shadow":a.shadow=s.val?ce(s.val):1
break
case"<shadow/>":a.shadow=1
break
case"<condense":a.condense=s.val?ce(s.val):1
break
case"<condense/>":a.condense=1
break
case"<extend":a.extend=s.val?ce(s.val):1
break
case"<extend/>":a.extend=1
break
case"<sz":s.val&&(a.sz=+s.val)
break
case"<sz/>":case"</sz>":break
case"<vertAlign":s.val&&(a.vertAlign=s.val)
break
case"<vertAlign/>":case"</vertAlign>":break
case"<family":s.val&&(a.family=parseInt(s.val,10))
break
case"<family/>":case"</family>":break
case"<scheme":s.val&&(a.scheme=s.val)
break
case"<scheme/>":case"</scheme>":break
case"<charset":if("1"==s.val)break
s.codepage=vl[parseInt(s.val,10)]
break
case"<color":if(a.color||(a.color={}),s.auto&&(a.color.auto=ce(s.auto)),s.rgb)a.color.rgb=s.rgb
else if(s.indexed){a.color.index=parseInt(s.indexed,10)
var i=ur[a.color.index]
if(81==a.color.index&&(i=ur[1]),!i)throw new Error(e)
a.color.rgb=i[0].toString(16)+i[1].toString(16)+i[2].toString(16)}else s.theme&&(a.color.theme=parseInt(s.theme,10),s.tint&&(a.color.tint=parseFloat(s.tint)),s.theme&&r.themeElements&&r.themeElements.clrScheme&&(a.color.rgb=Kl(r.themeElements.clrScheme[a.color.theme].rgb,a.color.tint||0)))
break
case"<color/>":case"</color>":break
default:if(n&&n.WTF)throw new Error("unrecognized "+s[0]+" in fonts")}})}(n,o,t,r),(n=e.match(hf))&&function(e,t,r,n){t.Fills=[]
var a={}
e[0].match(G).forEach(function(e){var r=K(e)
switch(r[0]){case"<fills":case"<fills>":case"</fills>":case"<fill>":break
case"</fill>":t.Fills.push(a),a={}
break
case"<gradientFill>":break
case"</gradientFill>":t.Fills.push(a),a={}
break
case"<patternFill":case"<patternFill>":r.patternType&&(a.patternType=r.patternType)
break
case"<patternFill/>":case"</patternFill>":break
case"<bgColor":a.bgColor||(a.bgColor={}),r.indexed&&(a.bgColor.indexed=parseInt(r.indexed,10)),r.theme&&(a.bgColor.theme=parseInt(r.theme,10)),r.tint&&(a.bgColor.tint=parseFloat(r.tint)),r.rgb&&(a.bgColor.rgb=r.rgb.slice(-6))
break
case"<bgColor/>":case"</bgColor>":break
case"<fgColor":a.fgColor||(a.fgColor={}),r.theme&&(a.fgColor.theme=parseInt(r.theme,10)),r.tint&&(a.fgColor.tint=parseFloat(r.tint)),r.rgb&&(a.fgColor.rgb=r.rgb.slice(-6))
break
case"<fgColor/>":case"</fgColor>":break
case"<stop":case"<stop/>":case"</stop>":break
case"<color":case"<color/>":case"</color>":break
default:if(n&&n.WTF)throw new Error("unrecognized "+r[0]+" in fills")}})}(n,o,0,r),(n=e.match(df))&&function(e,t,r,n){t.Borders=[]
var a={}
e[0].match(G).forEach(function(e){var r=K(e)
switch(r[0]){case"<borders":case"<borders>":case"</borders>":break
case"<border":case"<border>":a={},r.diagonalUp&&(a.diagonalUp=r.diagonalUp),r.diagonalDown&&(a.diagonalDown=r.diagonalDown),t.Borders.push(a)
break
case"</border>":break
case"<left":case"<left/>":case"</left>":break
case"<right":case"<right/>":case"</right>":break
case"<top":case"<top/>":case"</top>":break
case"<bottom":case"<bottom/>":case"</bottom>":break
case"<diagonal":case"<diagonal/>":case"</diagonal>":break
case"<horizontal":case"<horizontal/>":case"</horizontal>":break
case"<vertical":case"<vertical/>":case"</vertical>":break
case"<start":case"<start/>":case"</start>":break
case"<end":case"<end/>":case"</end>":break
case"<color":case"<color/>":case"</color>":break
default:if(n&&n.WTF)throw new Error("unrecognized "+r[0]+" in borders")}})}(n,o,0,r),(n=e.match(ff))&&(a=n,i=r,(s=o).CellXf=[],a[0].match(G).forEach(function(e){var t=K(e)
switch(t[0]){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break
case"<xf":delete(c=t)[0],c.numFmtId&&(c.numFmtId=parseInt(c.numFmtId,10)),c.fillId&&(c.fillId=parseInt(c.fillId,10)),s.CellXf.push(c)
break
case"</xf>":break
case"<alignment":case"<alignment/>":var r={}
t.vertical&&(r.vertical=t.vertical),t.horizontal&&(r.horizontal=t.horizontal),null!=t.textRotation&&(r.textRotation=t.textRotation),t.indent&&(r.indent=t.indent),t.wrapText&&(r.wrapText=t.wrapText),c.alignment=r
break
case"</alignment>":break
case"<protection":case"</protection>":case"<protection/>":break
case"<extLst":case"</extLst>":case"<ext":break
default:if(i.WTF)throw new Error("unrecognized "+t[0]+" in cellXfs")}})),o):o}),mf=Ce("styleSheet",null,{xmlns:ke.main[0],"xmlns:vt":ke.vt})
function gf(e,t){var r,n,a,s,i,c=[we,mf]
return e.SSF&&null!=(n=e.SSF,a=["<numFmts>"],[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var t=e[0];t<=e[1];++t)null!=n[t]&&(a[a.length]=Ce("numFmt",null,{numFmtId:t,formatCode:te(n[t])}))}),r=1===a.length?"":(a[a.length]="</numFmts>",a[0]=Ce("numFmts",null,{count:a.length-2}).replace("/>",">"),a.join("")))&&(c[c.length]=r),c[c.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>',c[c.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>',c[c.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>',c[c.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',s=t.cellXfs,(i=[])[i.length]=Ce("cellXfs",null),s.forEach(function(e){i[i.length]=Ce("xf",null,e)}),i[i.length]="</cellXfs>",(r=2===i.length?"":(i[0]=Ce("cellXfs",null,{count:i.length-2}).replace("/>",">"),i.join("")))&&(c[c.length]=r),c[c.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>',c[c.length]='<dxfs count="0"/>',c[c.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>',c.length>2&&(c[c.length]="</styleSheet>",c[1]=c[1].replace("/>",">")),c.join("")}function bf(e,t){t||(t=st(153)),t.write_shift(2,20*e.sz),function(e,t){t||(t=st(2))
var r=(e.italic?2:0)|(e.strike?8:0)|(e.outline?16:0)|(e.shadow?32:0)|(e.condense?64:0)|(e.extend?128:0)
t.write_shift(1,r),t.write_shift(1,0)}(e,t),t.write_shift(2,e.bold?700:400)
var r=0
"superscript"==e.vertAlign?r=1:"subscript"==e.vertAlign&&(r=2),t.write_shift(2,r),t.write_shift(1,e.underline||0),t.write_shift(1,e.family||0),t.write_shift(1,e.charset||0),t.write_shift(1,0),er(e.color,t)
var n=0
return"major"==e.scheme&&(n=1),"minor"==e.scheme&&(n=2),t.write_shift(1,n),Pt(e.name,t),t.length>t.l?t.slice(0,t.l):t}Er.STY="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
var Ef=C(["none","solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"])
function vf(e,t){t||(t=st(84))
var r=Ef[e.patternType]
null==r&&(r=40),t.write_shift(4,r)
var n=0
if(40!=r)for(er({auto:1},t),er({auto:1},t);n<12;++n)t.write_shift(4,0)
else{for(;n<4;++n)t.write_shift(4,0)
for(;n<12;++n)t.write_shift(4,0)}return t.length>t.l?t.slice(0,t.l):t}function Sf(e,t,r){return r||(r=st(16)),r.write_shift(2,t||0),r.write_shift(2,e.numFmtId||0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r}function Bf(e,t){return t||(t=st(10)),t.write_shift(1,0),t.write_shift(1,0),t.write_shift(4,0),t.write_shift(4,0),t}function Cf(e,t){var r
ot(e,"BrtBeginBorders",Ot(1)),ot(e,"BrtBorder",(r||(r=st(51)),r.write_shift(1,0),Bf(0,r),Bf(0,r),Bf(0,r),Bf(0,r),Bf(0,r),r.length>r.l?r.slice(0,r.l):r)),ot(e,"BrtEndBorders")}function Tf(e,t){var r,n
ot(e,"BrtBeginStyles",Ot(1)),ot(e,"BrtStyle",(r={xfId:0,builtinId:0,name:"Normal"},n||(n=st(52)),n.write_shift(4,r.xfId),n.write_shift(2,1),n.write_shift(1,+r.builtinId),n.write_shift(1,0),Wt(r.name||"",n),n.length>n.l?n.slice(0,n.l):n)),ot(e,"BrtEndStyles")}function wf(e,t){var r,n,a,s
ot(e,"BrtBeginTableStyles",(r=0,n="TableStyleMedium9",a="PivotStyleMedium4",(s=st(2052)).write_shift(4,r),Wt(n,s),Wt(a,s),s.length>s.l?s.slice(0,s.l):s)),ot(e,"BrtEndTableStyles")}function kf(e,t){var r,n,a,s,i,c,o=ct()
return ot(o,"BrtBeginStyleSheet"),function(e,t){if(t){var r=0;[[5,8],[23,26],[41,44],[57,392]].forEach(function(e){for(var n=e[0];n<=e[1];++n)null!=t[n]&&++r}),0!=r&&(ot(e,"BrtBeginFmts",Ot(r)),[[5,8],[23,26],[41,44],[57,392]].forEach(function(r){for(var n=r[0];n<=r[1];++n)null!=t[n]&&ot(e,"BrtFmt",(a=n,s=t[n],i=void 0,i||(i=st(6+4*s.length)),i.write_shift(2,a),Pt(s,i),i.length>i.l?i.slice(0,i.l):i))
var a,s,i}),ot(e,"BrtEndFmts"))}}(o,e.SSF),ot(r=o,"BrtBeginFonts",Ot(1)),ot(r,"BrtFont",bf({sz:12,color:{theme:1},name:"Calibri",family:2,scheme:"minor"})),ot(r,"BrtEndFonts"),ot(n=o,"BrtBeginFills",Ot(2)),ot(n,"BrtFill",vf({patternType:"none"})),ot(n,"BrtFill",vf({patternType:"gray125"})),ot(n,"BrtEndFills"),Cf(o),ot(a=o,"BrtBeginCellStyleXFs",Ot(1)),ot(a,"BrtXF",Sf({numFmtId:0,fontId:0,fillId:0,borderId:0},65535)),ot(a,"BrtEndCellStyleXFs"),s=o,i=t.cellXfs,ot(s,"BrtBeginCellXFs",Ot(i.length)),i.forEach(function(e){ot(s,"BrtXF",Sf(e,0))}),ot(s,"BrtEndCellXFs"),Tf(o),ot(c=o,"BrtBeginDXFs",Ot(0)),ot(c,"BrtEndDXFs"),wf(o),ot(o,"BrtEndStyleSheet"),o.end()}Er.THEME="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
var If=/<a:clrScheme([^>]*)>[^\u2603]*<\/a:clrScheme>/,Af=/<a:fontScheme([^>]*)>[^\u2603]*<\/a:fontScheme>/,xf=/<a:fmtScheme([^>]*)>[^\u2603]*<\/a:fmtScheme>/
function Rf(e,t,r){var n
t.themeElements={},[["clrScheme",If,function(e,t,r){t.themeElements.clrScheme=[]
var n={};(e[0].match(G)||[]).forEach(function(e){var a=K(e)
switch(a[0]){case"<a:clrScheme":case"</a:clrScheme>":break
case"<a:srgbClr":n.rgb=a.val
break
case"<a:sysClr":n.rgb=a.lastClr
break
case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":"/"===a[0][1]?(t.themeElements.clrScheme.push(n),n={}):n.name=a[0].substring(3,a[0].length-1)
break
default:if(r&&r.WTF)throw new Error("Unrecognized "+a[0]+" in clrScheme")}})}],["fontScheme",Af,function(e,t,r){}],["fmtScheme",xf,function(e,t,r){}]].forEach(function(a){if(!(n=e.match(a[1])))throw new Error(a[0]+" not found in themeElements")
a[2](n,t,r)})}var Df=/<a:themeElements([^>]*)>[^\u2603]*<\/a:themeElements>/
function Of(e,t){if(t&&t.themeXLSX)return t.themeXLSX
var r=[we]
return r[r.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',r[r.length]="<a:themeElements>",r[r.length]='<a:clrScheme name="Office">',r[r.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',r[r.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',r[r.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',r[r.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',r[r.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',r[r.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',r[r.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',r[r.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',r[r.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',r[r.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',r[r.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',r[r.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',r[r.length]="</a:clrScheme>",r[r.length]='<a:fontScheme name="Office">',r[r.length]="<a:majorFont>",r[r.length]='<a:latin typeface="Cambria"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Times New Roman"/>',r[r.length]='<a:font script="Hebr" typeface="Times New Roman"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="MoolBoran"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Times New Roman"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:majorFont>",r[r.length]="<a:minorFont>",r[r.length]='<a:latin typeface="Calibri"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Arial"/>',r[r.length]='<a:font script="Hebr" typeface="Arial"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="DaunPenh"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Arial"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:minorFont>",r[r.length]="</a:fontScheme>",r[r.length]='<a:fmtScheme name="Office">',r[r.length]="<a:fillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="1"/>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="0"/>',r[r.length]="</a:gradFill>",r[r.length]="</a:fillStyleLst>",r[r.length]="<a:lnStyleLst>",r[r.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]="</a:lnStyleLst>",r[r.length]="<a:effectStyleLst>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',r[r.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',r[r.length]="</a:effectStyle>",r[r.length]="</a:effectStyleLst>",r[r.length]="<a:bgFillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]="</a:bgFillStyleLst>",r[r.length]="</a:fmtScheme>",r[r.length]="</a:themeElements>",r[r.length]="<a:objectDefaults>",r[r.length]="<a:spDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',r[r.length]="</a:spDef>",r[r.length]="<a:lnDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',r[r.length]="</a:lnDef>",r[r.length]="</a:objectDefaults>",r[r.length]="<a:extraClrSchemeLst/>",r[r.length]="</a:theme>",r.join("")}function Ff(e,t){var r={}
switch(r.xclrType=e.read_shift(2),r.nTintShade=e.read_shift(2),r.xclrType){case 0:e.l+=4
break
case 1:r.xclrValue=at(e,4)
break
case 2:r.xclrValue=on(e)
break
case 3:r.xclrValue=e.read_shift(4)
break
case 4:e.l+=4}return e.l+=8,r}function Pf(e,t){var r=e.read_shift(2),n=e.read_shift(2),a=[r]
switch(r){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:a[1]=Ff(e)
break
case 6:a[1]=at(e,n)
break
case 14:case 15:a[1]=e.read_shift(5===n?1:2)
break
default:throw new Error("Unrecognized ExtProp type: "+r+" "+n)}return a}Er.IMG="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",Er.DRAW="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
var yf=1024
function Nf(e,t){for(var r=[21600,21600],n=["m0,0l0",r[1],r[0],r[1],r[0],"0xe"].join(","),a=[Ce("xml",null,{"xmlns:v":Xe.v,"xmlns:o":Xe.o,"xmlns:x":Xe.x,"xmlns:mv":Xe.mv}).replace(/\/>/,">"),Ce("o:shapelayout",Ce("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"}),Ce("v:shapetype",[Ce("v:stroke",null,{joinstyle:"miter"}),Ce("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202","o:spt":202,coordsize:r.join(","),path:n})];yf<1e3*e;)yf+=1e3
return t.map(function(e){return Ct(e[0])}).forEach(function(e,t){a=a.concat(["<v:shape"+Be({id:"_x0000_s"+ ++yf,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10;visibility:hidden",fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",Ce("v:fill",Ce("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}),{color2:"#BEFF82",angle:"-180",type:"gradient"}),Ce("v:shadow",null,{on:"t",obscured:"t"}),Ce("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",Se("x:Anchor",[e.c,0,e.r,0,e.c+3,100,e.r+5,100].join(",")),Se("x:AutoFill","False"),Se("x:Row",String(e.r)),Se("x:Column",String(e.c)),"<x:Visible/>","</x:ClientData>","</v:shape>"])}),a.push("</xml>"),a.join("")}function _f(e,t,r){var n,a,s=Array.isArray(t)
r.forEach(function(e){if(s?(a=Ct(e.ref),t[a.r]||(t[a.r]=[]),n=t[a.r][a.c]):n=t[e.ref],!n){n={},s?t[a.r][a.c]=n:t[e.ref]=n
var r=It(t["!ref"]||"BDWGO1000001:A1"),i=Ct(e.ref)
r.s.r>i.r&&(r.s.r=i.r),r.e.r<i.r&&(r.e.r=i.r),r.s.c>i.c&&(r.s.c=i.c),r.e.c<i.c&&(r.e.c=i.c)
var c=kt(r)
c!==t["!ref"]&&(t["!ref"]=c)}n.c||(n.c=[])
var o={a:e.author,t:e.t,r:e.r}
e.h&&(o.h=e.h),n.c.push(o)})}Er.CMNT="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
var Mf=Ce("comments",null,{xmlns:ke.main[0]})
var Lf=Ft
function Uf(e,t){var r=ct(),n=[]
return ot(r,"BrtBeginComments"),ot(r,"BrtBeginCommentAuthors"),e.forEach(function(e){e[1].forEach(function(e){n.indexOf(e.a)>-1||(n.push(e.a.substr(0,54)),ot(r,"BrtCommentAuthor",Pt(e.a.substr(0,54))))})}),ot(r,"BrtEndCommentAuthors"),ot(r,"BrtBeginCommentList"),e.forEach(function(e){e[1].forEach(function(t){t.iauthor=n.indexOf(t.a)
var a,s,i={s:Ct(e[0]),e:Ct(e[0])}
ot(r,"BrtBeginComment",(a=[i,t],null==s&&(s=st(36)),s.write_shift(4,a[1].iauthor),$t(a[0],s),s.write_shift(4,0),s.write_shift(4,0),s.write_shift(4,0),s.write_shift(4,0),s)),t.t&&t.t.length>0&&ot(r,"BrtCommentText",_t(t)),ot(r,"BrtEndComment"),delete t.iauthor})}),ot(r,"BrtEndCommentList"),ot(r,"BrtEndComments"),r.end()}Er.DS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",Er.MS="http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet"
var Hf=function(){var e=/(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g,t={r:0,c:0}
function r(e,r,n,a,s,i){var c=a.length>0?0|parseInt(a,10):0,o=i.length>0?0|parseInt(i,10):0
o<0&&0===s.length&&(o=0)
var l=!1,f=!1
return(s.length>0||0==i.length)&&(l=!0),l?o+=t.c:--o,(n.length>0||0==a.length)&&(f=!0),f?c+=t.r:--c,r+(l?"":"$")+Et(o)+(f?"":"$")+pt(c)}return function(n,a){return t=a,n.replace(e,r)}}(),Vf=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)([1-9]\d{0,5}|10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6])(?![_.\(A-Za-z0-9])/g,Wf=function(e,t){return e.replace(Vf,function(e,r,n,a,s,i,c,o){var l=bt(a)-t.c,f=dt(i)-t.r
return r+"R"+(0==f?"":"["+f+"]")+"C"+(0==l?"":"["+l+"]")})}
function Xf(e,t,r){var n,a=wt(t).s,s=Ct(r),i={r:s.r-a.r,c:s.c-a.c}
return n=i,e.replace(Vf,function(e,t,r,a,s,i,c,o){return t+("$"==r?r+a:Et(bt(a)+n.c))+("$"==s?s+i:pt(dt(i)+n.r))})}function Gf(e){e.l+=1}function zf(e,t){var r=e.read_shift(1==t?1:2)
return[16383&r,r>>14&1,r>>15&1]}function jf(e,t,r){var n,a,s,i,c,o=2
if(r){if(r.biff>=2&&r.biff<=5)return n=e,a=zf(n,2),s=zf(n,2),i=n.read_shift(1),c=n.read_shift(1),{s:{r:a[0],c:i,cRel:a[1],rRel:a[2]},e:{r:s[0],c:c,cRel:s[1],rRel:s[2]}}
12==r.biff&&(o=4)}var l=e.read_shift(o),f=e.read_shift(o),h=zf(e,2),u=zf(e,2)
return{s:{r:l,c:h[0],cRel:h[1],rRel:h[2]},e:{r:f,c:u[0],cRel:u[1],rRel:u[2]}}}function Kf(e,t,r){if(r&&r.biff>=2&&r.biff<=5)return n=e,a=zf(n,2),s=n.read_shift(1),{r:a[0],c:s,cRel:a[1],rRel:a[2]}
var n,a,s,i=e.read_shift(r&&12==r.biff?4:2),c=zf(e,2)
return{r:i,c:c[0],cRel:c[1],rRel:c[2]}}function Yf(e,t){return[e.read_shift(1),e.read_shift(1)]}function $f(e,t){var r=[e.read_shift(1)]
if(12==t)switch(r[0]){case 2:r[0]=4
break
case 4:r[0]=16
break
case 0:r[0]=1
break
case 1:r[0]=2}switch(r[0]){case 4:r[1]=Qr(e,1)?"TRUE":"FALSE",e.l+=7
break
case 16:r[1]=Jt[e[e.l]],e.l+=8
break
case 0:e.l+=8
break
case 1:r[1]=Qt(e)
break
case 2:r[1]=nn(e,0,{biff:t>0&&t<8?2:t})}return r}function Qf(e,t){for(var r=e.read_shift(2),n=[],a=0;a!=r;++a)n.push(dn(e))
return n}function Zf(e,t,r){var n=0,a=0
12==r.biff?(n=e.read_shift(4),a=e.read_shift(4)):(a=1+e.read_shift(1),n=1+e.read_shift(2)),r.biff>=2&&r.biff<8&&(--n,0==--a&&(a=256))
for(var s=0,i=[];s!=n&&(i[s]=[]);++s)for(var c=0;c!=a;++c)i[s][c]=$f(e,r.biff)
return i}var Jf={1:{n:"PtgExp",f:function(e,t,r){return e.l++,r&&12==r.biff?[e.read_shift(4,"i"),0]:[e.read_shift(2),e.read_shift(r&&2==r.biff?1:2)]}},2:{n:"PtgTbl",f:at},3:{n:"PtgAdd",f:Gf},4:{n:"PtgSub",f:Gf},5:{n:"PtgMul",f:Gf},6:{n:"PtgDiv",f:Gf},7:{n:"PtgPower",f:Gf},8:{n:"PtgConcat",f:Gf},9:{n:"PtgLt",f:Gf},10:{n:"PtgLe",f:Gf},11:{n:"PtgEq",f:Gf},12:{n:"PtgGe",f:Gf},13:{n:"PtgGt",f:Gf},14:{n:"PtgNe",f:Gf},15:{n:"PtgIsect",f:Gf},16:{n:"PtgUnion",f:Gf},17:{n:"PtgRange",f:Gf},18:{n:"PtgUplus",f:Gf},19:{n:"PtgUminus",f:Gf},20:{n:"PtgPercent",f:Gf},21:{n:"PtgParen",f:Gf},22:{n:"PtgMissArg",f:Gf},23:{n:"PtgStr",f:function(e,t,r){return e.l++,qr(e,0,r)}},28:{n:"PtgErr",f:function(e,t){return e.l++,Jt[e.read_shift(1)]}},29:{n:"PtgBool",f:function(e,t){return e.l++,0!==e.read_shift(1)}},30:{n:"PtgInt",f:function(e,t){return e.l++,e.read_shift(2)}},31:{n:"PtgNum",f:function(e,t){return e.l++,Qt(e)}},32:{n:"PtgArray",f:function(e,t,r){var n=(96&e[e.l++])>>5
return e.l+=2==r.biff?6:12==r.biff?14:7,[n]}},33:{n:"PtgFunc",f:function(e,t,r){e[e.l]
var n=(96&e[e.l])>>5
e.l+=1
var a=e.read_shift(r&&r.biff<=3?1:2)
return[mh[a],ph[a],n]}},34:{n:"PtgFuncVar",f:function(e,t,r){e.l++
var n,a=e.read_shift(1),s=r&&r.biff<=3?[0,e.read_shift(1)]:[(n=e)[n.l+1]>>7,32767&n.read_shift(2)]
return[a,(0===s[0]?ph:dh)[s[1]]]}},35:{n:"PtgName",f:function(e,t,r){var n=e.read_shift(1)>>>5&3,a=!r||r.biff>=8?4:2,s=e.read_shift(a)
switch(r.biff){case 2:e.l+=5
break
case 3:case 4:e.l+=8
break
case 5:e.l+=12}return[n,0,s]}},36:{n:"PtgRef",f:function(e,t,r){e[e.l]
var n=(96&e[e.l])>>5
return e.l+=1,[n,Kf(e,0,r)]}},37:{n:"PtgArea",f:function(e,t,r){return[(96&e[e.l++])>>5,jf(e,r.biff>=2&&r.biff,r)]}},38:{n:"PtgMemArea",f:function(e,t,r){var n=e.read_shift(1)>>>5&3
return e.l+=r&&2==r.biff?3:4,[n,e.read_shift(r&&2==r.biff?1:2)]}},39:{n:"PtgMemErr",f:at},40:{n:"PtgMemNoMem",f:at},41:{n:"PtgMemFunc",f:function(e,t,r){return[e.read_shift(1)>>>5&3,e.read_shift(r&&2==r.biff?1:2)]}},42:{n:"PtgRefErr",f:function(e,t,r){var n=e.read_shift(1)>>>5&3
return e.l+=4,12==r.biff&&(e.l+=2),[n]}},43:{n:"PtgAreaErr",f:function(e,t,r){var n=(96&e[e.l++])>>5
return e.l+=r&&r.biff>8?12:8,[n]}},44:{n:"PtgRefN",f:function(e,t,r){var n=(96&e[e.l])>>5
return e.l+=1,[n,function(e,t,r){var n,a,s,i,c,o=r&&r.biff?r.biff:8
if(o>=2&&o<=5)return n=e,a=n.read_shift(2),s=n.read_shift(1),i=(32768&a)>>15,c=(16384&a)>>14,a&=16383,1==i&&a>=8192&&(a-=16384),1==c&&s>=128&&(s-=256),{r:a,c:s,cRel:c,rRel:i}
var l=e.read_shift(o>=12?4:2),f=e.read_shift(2),h=(32768&f)>>15,u=(16384&f)>>14
if(f&=16383,1==u)for(;l>524287;)l-=1048576
if(1==h)for(;f>8191;)f-=16384
return{r:l,c:f,cRel:h,rRel:u}}(e,0,r)]}},45:{n:"PtgAreaN",f:function(e,t,r){var n,a,s,i,c,o
return[(96&e[e.l++])>>5,(n=e,a=r&&r.biff>8?12:8,s=n.read_shift(12==a?4:2),i=n.read_shift(12==a?4:2),c=zf(n,2),o=zf(n,2),{s:{r:s,c:c[0],cRel:c[1],rRel:c[2]},e:{r:i,c:o[0],cRel:o[1],rRel:o[2]}})]}},57:{n:"PtgNameX",f:function(e,t,r){return 5==r.biff?function(e,t,r){var n=e.read_shift(1)>>>5&3,a=e.read_shift(2,"i")
e.l+=8
var s=e.read_shift(2)
return e.l+=12,[n,a,s]}(e):[e.read_shift(1)>>>5&3,e.read_shift(2),e.read_shift(4)]}},58:{n:"PtgRef3d",f:function(e,t,r){var n=(96&e[e.l])>>5
return e.l+=1,[n,e.read_shift(2),Kf(e,0,r)]}},59:{n:"PtgArea3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e.read_shift(2,"i")
if(r)switch(r.biff){case 5:e.l+=12}return[n,a,jf(e,0,r)]}},60:{n:"PtgRefErr3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e.read_shift(2),s=4
if(r)switch(r.biff){case 5:throw new Error("PtgRefErr3d -- 5")
case 12:s=6}return e.l+=s,[n,a]}},61:{n:"PtgAreaErr3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e.read_shift(2),s=8
if(r)switch(r.biff){case 5:e.l+=12,s=6
break
case 12:s=12}return e.l+=s,[n,a]}},255:{}},qf={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61};(function(){for(var e in qf)Jf[e]=Jf[qf[e]]})()
var eh={},th={1:{n:"PtgAttrSemi",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=r&&2==r.biff?3:4,[n]}},2:{n:"PtgAttrIf",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=2,[n,e.read_shift(r&&2==r.biff?1:2)]}},4:{n:"PtgAttrChoose",f:function(e,t,r){e.l+=2
for(var n=e.read_shift(r&&2==r.biff?1:2),a=[],s=0;s<=n;++s)a.push(e.read_shift(r&&2==r.biff?1:2))
return a}},8:{n:"PtgAttrGoto",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=2,[n,e.read_shift(r&&2==r.biff?1:2)]}},16:{n:"PtgAttrSum",f:function(e,t,r){e.l+=r&&2==r.biff?3:4}},32:{n:"PtgAttrBaxcel",f:function(e,t){var r=1&e[e.l+1]
return e.l+=4,[r,1]}},64:{n:"PtgAttrSpace",f:function(e,t){return e.read_shift(2),Yf(e)}},65:{n:"PtgAttrSpaceSemi",f:function(e,t){return e.read_shift(2),Yf(e)}},128:{n:"PtgAttrIfError",f:function(e,t){var r=255&e[e.l+1]?1:0
return e.l+=2,[r,e.read_shift(2)]}},255:{}}
function rh(e,t,r){var n=e.l+t,a=fn(e)
2==r.biff&&++e.l
var s=function(e){var t
if(65535!==je(e,e.l+6))return[Qt(e),"n"]
switch(e[e.l]){case 0:return e.l+=8,["String","s"]
case 1:return t=1===e[e.l+2],e.l+=8,[t,"b"]
case 2:return t=e[e.l+2],e.l+=8,[t,"e"]
case 3:return e.l+=8,["","s"]}return[]}(e),i=e.read_shift(1)
if(2!=r.biff&&(e.read_shift(1),r.biff>=5))e.read_shift(4)
var c=function(e,t,r){e.l
var n,a=2==r.biff?1:2,s=e.read_shift(a)
if(65535==s)return[[],at(e,t-2)]
var i=ah(e,s,r)
t!==s+a&&(n=nh(e,t-s-a,i,r))
return[i,n]}(e,n-e.l,r)
return{cell:a,val:s[0],formula:c,shared:i>>3&1,tt:s[1]}}function nh(e,t,r,n){if(n.biff<8)return at(e,t)
for(var a=e.l+t,s=[],i=0;i!==r.length;++i)switch(r[i][0]){case"PtgArray":r[i][1]=Zf(e,0,n),s.push(r[i][1])
break
case"PtgMemArea":r[i][2]=Qf(e,r[i][1]),s.push(r[i][2])
break
case"PtgExp":n&&12==n.biff&&(r[i][1][1]=e.read_shift(4),s.push(r[i][1]))}return 0!==(t=a-e.l)&&s.push(at(e,t)),s}function ah(e,t,r){for(var n,a,s=e.l+t,i=[];s!=e.l;)t=s-e.l,a=e[e.l],n=Jf[a],24!==a&&25!==a||(n=(24===(a=e[e.l+1])?eh:th)[a]),n&&n.f?i.push([n.n,n.f(e,t,r)]):at(e,t)
return i}function sh(e){for(var t=[],r=0;r<e.length;++r){for(var n=e[r],a=[],s=0;s<n.length;++s){var i=n[s]
if(i)switch(i[0]){case 2:a.push('"'+i[1].replace(/"/g,'""')+'"')
break
default:a.push(i[1])}else a.push("")}t.push(a.join(","))}return t.join(";")}var ih={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"}
function ch(e,t,r,n,a){var s,i,c,o,l={s:{c:0,r:0},e:{c:0,r:0}},f=[],h=0,u=0,d=""
if(!e[0]||!e[0][0])return""
for(var p=-1,m="",g=0,b=e[0].length;g<b;++g){var E=e[0][g]
switch(E[0]){case"PtgUminus":f.push("-"+f.pop())
break
case"PtgUplus":f.push("+"+f.pop())
break
case"PtgPercent":f.push(f.pop()+"%")
break
case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(s=f.pop(),i=f.pop(),p>=0){switch(e[0][p][1][0]){case 0:m=y(" ",e[0][p][1][1])
break
case 1:m=y("\r",e[0][p][1][1])
break
default:if(m="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][p][1][0])}i+=m,p=-1}f.push(i+ih[E[0]]+s)
break
case"PtgIsect":s=f.pop(),i=f.pop(),f.push(i+" "+s)
break
case"PtgUnion":s=f.pop(),i=f.pop(),f.push(i+","+s)
break
case"PtgRange":s=f.pop(),i=f.pop(),f.push(i+":"+s)
break
case"PtgAttrChoose":case"PtgAttrGoto":case"PtgAttrIf":case"PtgAttrIfError":break
case"PtgRef":E[1][0],c=lt(E[1][1],l,a),f.push(ht(c))
break
case"PtgRefN":E[1][0],c=r?lt(E[1][1],r,a):E[1][1],f.push(ht(c))
break
case"PtgRef3d":E[1][0],h=E[1][1],c=lt(E[1][2],l,a)
d=n.SheetNames[h]
f.push(d+"!"+ht(c))
break
case"PtgFunc":case"PtgFuncVar":var v=E[1][0],S=E[1][1]
v||(v=0)
var B=0==v?[]:f.slice(-v)
f.length-=v,"User"===S&&(S=B.shift()),f.push(S+"("+B.join(",")+")")
break
case"PtgBool":f.push(E[1]?"TRUE":"FALSE")
break
case"PtgInt":f.push(E[1])
break
case"PtgNum":f.push(String(E[1]))
break
case"PtgStr":f.push('"'+E[1]+'"')
break
case"PtgErr":f.push(E[1])
break
case"PtgAreaN":case"PtgArea":E[1][0],o=ft(E[1][1],l,a),f.push(ut(o,a))
break
case"PtgArea3d":E[1][0],h=E[1][1],o=E[1][2],d=n&&n[1]?n[1][h+1]:"**MISSING**",f.push(d+"!"+kt(o))
break
case"PtgAttrSum":f.push("SUM("+f.pop()+")")
break
case"PtgAttrSemi":break
case"PtgName":u=E[1][2]
var C=(n.names||[])[u-1]||(n[0]||[])[u],T=C?C.Name:"**MISSING**"+String(u)
T in gh&&(T=gh[T]),f.push(T)
break
case"PtgNameX":var w,k=E[1][1]
if(u=E[1][2],!(a.biff<=5)){n.SheetNames[k]
var I=""
14849==((n[k]||[])[0]||[])[0]||(1025==((n[k]||[])[0]||[])[0]?n[k][u]&&n[k][u].itab>0&&(I=n.SheetNames[n[k][u].itab-1]+"!"):I=n.SheetNames[u-1]+"!"),n[k]&&n[k][u]?I+=n[k][u].Name:n[0]&&n[0][u]?I+=n[0][u].Name:I+="??NAMEX??",f.push(I)
break}k<0&&(k=-k),n[k]&&(w=n[k][u]),w||(w={Name:"??NAMEX??"}),f.push(w.Name)
break
case"PtgParen":var A="(",x=")"
if(p>=0){switch(m="",e[0][p][1][0]){case 2:A=y(" ",e[0][p][1][1])+A
break
case 3:A=y("\r",e[0][p][1][1])+A
break
case 4:x=y(" ",e[0][p][1][1])+x
break
case 5:x=y("\r",e[0][p][1][1])+x
break
default:if(a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][p][1][0])}p=-1}f.push(A+f.pop()+x)
break
case"PtgRefErr":case"PtgRefErr3d":f.push("#REF!")
break
case"PtgExp":c={c:E[1][1],r:E[1][0]}
var R={c:r.c,r:r.r}
if(n.sharedf[Tt(c)]){var D=n.sharedf[Tt(c)]
f.push(ch(D,l,R,n,a))}else{var O=!1
for(s=0;s!=n.arrayf.length;++s)if(i=n.arrayf[s],!(c.c<i[0].s.c||c.c>i[0].e.c||c.r<i[0].s.r||c.r>i[0].e.r)){f.push(ch(i[1],l,R,n,a)),O=!0
break}O||f.push(E[1])}break
case"PtgArray":f.push("{"+sh(E[1])+"}")
break
case"PtgMemArea":break
case"PtgAttrSpace":case"PtgAttrSpaceSemi":p=g
break
case"PtgTbl":case"PtgMemErr":break
case"PtgMissArg":f.push("")
break
case"PtgAreaErr":case"PtgAreaErr3d":f.push("#REF!")
break
case"PtgMemFunc":break
default:throw new Error("Unrecognized Formula Token: "+String(E))}if(p>=0&&-1==["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"].indexOf(e[0][g][0])){var F=!0
switch((E=e[0][p])[1][0]){case 4:F=!1
case 0:m=y(" ",E[1][1])
break
case 5:F=!1
case 1:m=y("\r",E[1][1])
break
default:if(m="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+E[1][0])}f.push((F?m:"")+f.pop()+(F?"":m)),p=-1}}if(f.length>1&&a.WTF)throw new Error("bad formula stack")
return f[0]}function oh(e,t,r){e.l
var n=ah(e,e.read_shift(4),r),a=e.read_shift(4)
return[n,a>0?nh(e,a,n,r):null]}var lh=oh,fh=oh,hh=oh,uh=oh,dh={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},ph={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},mh={2:1,3:1,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,90:1,97:2,98:1,99:1,101:3,102:3,105:1,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0},gh={"_xlfn.ACOT":"ACOT","_xlfn.ACOTH":"ACOTH","_xlfn.AGGREGATE":"AGGREGATE","_xlfn.ARABIC":"ARABIC","_xlfn.AVERAGEIF":"AVERAGEIF","_xlfn.AVERAGEIFS":"AVERAGEIFS","_xlfn.BASE":"BASE","_xlfn.BETA.DIST":"BETA.DIST","_xlfn.BETA.INV":"BETA.INV","_xlfn.BINOM.DIST":"BINOM.DIST","_xlfn.BINOM.DIST.RANGE":"BINOM.DIST.RANGE","_xlfn.BINOM.INV":"BINOM.INV","_xlfn.BITAND":"BITAND","_xlfn.BITLSHIFT":"BITLSHIFT","_xlfn.BITOR":"BITOR","_xlfn.BITRSHIFT":"BITRSHIFT","_xlfn.BITXOR":"BITXOR","_xlfn.CEILING.MATH":"CEILING.MATH","_xlfn.CEILING.PRECISE":"CEILING.PRECISE","_xlfn.CHISQ.DIST":"CHISQ.DIST","_xlfn.CHISQ.DIST.RT":"CHISQ.DIST.RT","_xlfn.CHISQ.INV":"CHISQ.INV","_xlfn.CHISQ.INV.RT":"CHISQ.INV.RT","_xlfn.CHISQ.TEST":"CHISQ.TEST","_xlfn.COMBINA":"COMBINA","_xlfn.CONFIDENCE.NORM":"CONFIDENCE.NORM","_xlfn.CONFIDENCE.T":"CONFIDENCE.T","_xlfn.COT":"COT","_xlfn.COTH":"COTH","_xlfn.COUNTIFS":"COUNTIFS","_xlfn.COVARIANCE.P":"COVARIANCE.P","_xlfn.COVARIANCE.S":"COVARIANCE.S","_xlfn.CSC":"CSC","_xlfn.CSCH":"CSCH","_xlfn.DAYS":"DAYS","_xlfn.DECIMAL":"DECIMAL","_xlfn.ECMA.CEILING":"ECMA.CEILING","_xlfn.ERF.PRECISE":"ERF.PRECISE","_xlfn.ERFC.PRECISE":"ERFC.PRECISE","_xlfn.EXPON.DIST":"EXPON.DIST","_xlfn.F.DIST":"F.DIST","_xlfn.F.DIST.RT":"F.DIST.RT","_xlfn.F.INV":"F.INV","_xlfn.F.INV.RT":"F.INV.RT","_xlfn.F.TEST":"F.TEST","_xlfn.FILTERXML":"FILTERXML","_xlfn.FLOOR.MATH":"FLOOR.MATH","_xlfn.FLOOR.PRECISE":"FLOOR.PRECISE","_xlfn.FORMULATEXT":"FORMULATEXT","_xlfn.GAMMA":"GAMMA","_xlfn.GAMMA.DIST":"GAMMA.DIST","_xlfn.GAMMA.INV":"GAMMA.INV","_xlfn.GAMMALN.PRECISE":"GAMMALN.PRECISE","_xlfn.GAUSS":"GAUSS","_xlfn.HYPGEOM.DIST":"HYPGEOM.DIST","_xlfn.IFNA":"IFNA","_xlfn.IFERROR":"IFERROR","_xlfn.IMCOSH":"IMCOSH","_xlfn.IMCOT":"IMCOT","_xlfn.IMCSC":"IMCSC","_xlfn.IMCSCH":"IMCSCH","_xlfn.IMSEC":"IMSEC","_xlfn.IMSECH":"IMSECH","_xlfn.IMSINH":"IMSINH","_xlfn.IMTAN":"IMTAN","_xlfn.ISFORMULA":"ISFORMULA","_xlfn.ISO.CEILING":"ISO.CEILING","_xlfn.ISOWEEKNUM":"ISOWEEKNUM","_xlfn.LOGNORM.DIST":"LOGNORM.DIST","_xlfn.LOGNORM.INV":"LOGNORM.INV","_xlfn.MODE.MULT":"MODE.MULT","_xlfn.MODE.SNGL":"MODE.SNGL","_xlfn.MUNIT":"MUNIT","_xlfn.NEGBINOM.DIST":"NEGBINOM.DIST","_xlfn.NETWORKDAYS.INTL":"NETWORKDAYS.INTL","_xlfn.NIGBINOM":"NIGBINOM","_xlfn.NORM.DIST":"NORM.DIST","_xlfn.NORM.INV":"NORM.INV","_xlfn.NORM.S.DIST":"NORM.S.DIST","_xlfn.NORM.S.INV":"NORM.S.INV","_xlfn.NUMBERVALUE":"NUMBERVALUE","_xlfn.PDURATION":"PDURATION","_xlfn.PERCENTILE.EXC":"PERCENTILE.EXC","_xlfn.PERCENTILE.INC":"PERCENTILE.INC","_xlfn.PERCENTRANK.EXC":"PERCENTRANK.EXC","_xlfn.PERCENTRANK.INC":"PERCENTRANK.INC","_xlfn.PERMUTATIONA":"PERMUTATIONA","_xlfn.PHI":"PHI","_xlfn.POISSON.DIST":"POISSON.DIST","_xlfn.QUARTILE.EXC":"QUARTILE.EXC","_xlfn.QUARTILE.INC":"QUARTILE.INC","_xlfn.QUERYSTRING":"QUERYSTRING","_xlfn.RANK.AVG":"RANK.AVG","_xlfn.RANK.EQ":"RANK.EQ","_xlfn.RRI":"RRI","_xlfn.SEC":"SEC","_xlfn.SECH":"SECH","_xlfn.SHEET":"SHEET","_xlfn.SHEETS":"SHEETS","_xlfn.SKEW.P":"SKEW.P","_xlfn.STDEV.P":"STDEV.P","_xlfn.STDEV.S":"STDEV.S","_xlfn.SUMIFS":"SUMIFS","_xlfn.T.DIST":"T.DIST","_xlfn.T.DIST.2T":"T.DIST.2T","_xlfn.T.DIST.RT":"T.DIST.RT","_xlfn.T.INV":"T.INV","_xlfn.T.INV.2T":"T.INV.2T","_xlfn.T.TEST":"T.TEST","_xlfn.UNICHAR":"UNICHAR","_xlfn.UNICODE":"UNICODE","_xlfn.VAR.P":"VAR.P","_xlfn.VAR.S":"VAR.S","_xlfn.WEBSERVICE":"WEBSERVICE","_xlfn.WEIBULL.DIST":"WEIBULL.DIST","_xlfn.WORKDAY.INTL":"WORKDAY.INTL","_xlfn.XOR":"XOR","_xlfn.Z.TEST":"Z.TEST"}
var bh={},Eh={}
function vh(e,t){for(var r=0,n=e.length;r<n;++r)if(e[r].t===t)return e.Count++,r
return e[n]={t:t},e.Count++,e.Unique++,n}function Sh(e,t){var r={min:e+1,max:e+1},n=-1
return t.MDW&&(Zl=t.MDW),null!=t.width?r.customWidth=1:null!=t.wpx?n=ql(t.wpx):null!=t.wch&&(n=t.wch),n>-1?(r.width=ef(n),r.customWidth=1):null!=t.width&&(r.width=t.width),t.hidden&&(r.hidden=!0),r}function Bh(e,t){if(e){var r=[.7,.7,.75,.75,.3,.3]
"xlml"==t&&(r=[1,1,1,1,.5,.5]),null==e.left&&(e.left=r[0]),null==e.right&&(e.right=r[1]),null==e.top&&(e.top=r[2]),null==e.bottom&&(e.bottom=r[3]),null==e.header&&(e.header=r[4]),null==e.footer&&(e.footer=r[5])}}function Ch(e,t,r){var n=r.revssf[null!=t.z?t.z:"General"],a=60,s=e.length
if(null==n&&r.ssf)for(;a<392;++a)if(null==r.ssf[a]){g.load(t.z,a),r.ssf[a]=t.z,r.revssf[t.z]=n=a
break}for(a=0;a!=s;++a)if(e[a].numFmtId===n)return a
return e[s]={numFmtId:n,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},s}function Th(e,t,r,n,a,s){if("z"!==e.t){"d"===e.t&&"string"==typeof e.v&&(e.v=O(e.v))
try{n.cellNF&&(e.z=g._table[t])}catch(e){if(n.WTF)throw e}if(!n||!1!==n.cellText)try{if("e"===e.t)e.w=e.w||Jt[e.v]
else if(0===t)if("n"===e.t)(0|e.v)===e.v?e.w=g._general_int(e.v,Eh):e.w=g._general_num(e.v,Eh)
else if("d"===e.t){var i=w(e.v)
e.w=(0|i)===i?g._general_int(i,Eh):g._general_num(i,Eh)}else{if(void 0===e.v)return""
e.w=g._general(e.v,Eh)}else"d"===e.t?e.w=g.format(t,w(e.v),Eh):e.w=g.format(t,e.v,Eh)}catch(e){if(n.WTF)throw e}if(r)try{e.s=s.Fills[r],e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb&&(e.s.fgColor.rgb=Kl(a.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0),n.WTF&&(e.s.fgColor.raw_rgb=a.themeElements.clrScheme[e.s.fgColor.theme].rgb)),e.s.bgColor&&e.s.bgColor.theme&&(e.s.bgColor.rgb=Kl(a.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0),n.WTF&&(e.s.bgColor.raw_rgb=a.themeElements.clrScheme[e.s.bgColor.theme].rgb))}catch(e){if(n.WTF)throw e}}}Er.WS=["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"]
var wh=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,kh=/<(?:\w+:)?sheetData>([^\u2603]*)<\/(?:\w+:)?sheetData>/,Ih=/<(?:\w:)?hyperlink [^>]*>/gm,Ah=/"(\w*:\w*)"/,xh=/<(?:\w:)?col[^>]*[\/]?>/g,Rh=/<(?:\w:)?autoFilter[^>]*([\/]|>([^\u2603]*)<\/(?:\w:)?autoFilter)>/g,Dh=/<(?:\w:)?pageMargins[^>]*\/>/g
function Oh(e,t,r,n,a,s){if(!e)return e
null!=o&&null==t.dense&&(t.dense=o)
var i=t.dense?[]:{},c={s:{r:2e6,c:2e6},e:{r:0,c:0}},l="",f="",h=e.match(kh)
h?(l=e.substr(0,h.index),f=e.substr(h.index+h[0].length)):l=f=e
var u,d,p,m=(l.match(/<(?:\w*:)?dimension/)||{index:-1}).index
if(m>0){var g=l.substr(m,50).match(Ah)
g&&(u=i,d=g[1],(p=It(d)).s.r<=p.e.r&&p.s.c<=p.e.c&&p.s.r>=0&&p.s.c>=0&&(u["!ref"]=kt(p)))}var b=[]
if(t.cellStyles){var E=l.match(xh)
E&&function(e,t){for(var r=!1,n=0;n!=t.length;++n){var a=K(t[n],!0)
a.hidden&&(a.hidden=ce(a.hidden))
var s=parseInt(a.min,10)-1,i=parseInt(a.max,10)-1
for(delete a.min,delete a.max,a.width=+a.width,!r&&a.width&&(r=!0,rf(a.width)),nf(a);s<=i;)e[s++]=P(a)}}(b,E)}h&&Hh(h[1],i,t,c,a,s)
var v=f.match(Rh)
v&&(i["!autofilter"]={ref:(v[0].match(/ref="([^"]*)"/)||[])[1]})
var S=[],B=f.match(wh)
if(B)for(m=0;m!=B.length;++m)S[m]=It(B[m].substr(B[m].indexOf('"')+1))
var C=f.match(Ih)
C&&function(e,t,r){for(var n=Array.isArray(e),a=0;a!=t.length;++a){var s=K(t[a],!0)
if(!s.ref)return
var i=r?r["!id"][s.id]:null
i?(s.Target=i.Target,s.location&&(s.Target+="#"+s.location),s.Rel=i):(s.Target=s.location,i={Target:s.location,TargetMode:"Internal"},s.Rel=i),s.tooltip&&(s.Tooltip=s.tooltip,delete s.tooltip)
for(var c=It(s.ref),o=c.s.r;o<=c.e.r;++o)for(var l=c.s.c;l<=c.e.c;++l){var f=Tt({c:l,r:o})
n?(e[o]||(e[o]=[]),e[o][l]||(e[o][l]={t:"z",v:void 0}),e[o][l].l=s):(e[f]||(e[f]={t:"z",v:void 0}),e[f].l=s)}}}(i,C,r)
var T,w,k=f.match(Dh)
if(k&&(i["!margins"]=(T=K(k[0]),w={},["left","right","top","bottom","header","footer"].forEach(function(e){T[e]&&(w[e]=parseFloat(T[e]))}),w)),!i["!ref"]&&c.e.c>=c.s.c&&c.e.r>=c.s.r&&(i["!ref"]=kt(c)),t.sheetRows>0&&i["!ref"]){var I=It(i["!ref"])
t.sheetRows<+I.e.r&&(I.e.r=t.sheetRows-1,I.e.r>c.e.r&&(I.e.r=c.e.r),I.e.r<I.s.r&&(I.s.r=I.e.r),I.e.c>c.e.c&&(I.e.c=c.e.c),I.e.c<I.s.c&&(I.s.c=I.e.c),i["!fullref"]=i["!ref"],i["!ref"]=kt(I))}return S.length>0&&(i["!merges"]=S),b.length>0&&(i["!cols"]=b),i}function Fh(e,t,r,n,a,s){if(void 0===e.v&&void 0===e.f||"z"===e.t)return""
var i="",c=e.t,o=e.v
switch(e.t){case"b":i=e.v?"1":"0"
break
case"n":i=""+e.v
break
case"e":i=Jt[e.v]
break
case"d":n.cellDates?i=O(e.v).toISOString():(e.t="n",i=""+(e.v=w(O(e.v)))),void 0===e.z&&(e.z=g._table[14])
break
default:i=e.v}var l=Se("v",te(i)),f={r:t},h=Ch(n.cellXfs,e,n)
switch(0!==h&&(f.s=h),e.t){case"n":break
case"d":f.t="d"
break
case"b":f.t="b"
break
case"e":f.t="e"
break
default:if(null==e.v){delete e.t
break}if(n.bookSST){l=Se("v",""+vh(n.Strings,e.v)),f.t="s"
break}f.t="str"}if(e.t!=c&&(e.t=c,e.v=o),e.f){var u=e.F&&e.F.substr(0,t.length)==t?{t:"array",ref:e.F}:null
l=Ce("f",te(e.f),u)+(null!=e.v?l:"")}return e.l&&r["!links"].push([t,e.l]),e.c&&r["!comments"].push([t,e.c]),Ce("c",l,f)}var Ph,yh,Nh,_h,Mh,Lh,Uh,Hh=(Ph=/<(?:\w+:)?c[ >]/,yh=/<\/(?:\w+:)?row>/,Nh=/r=["']([^"']*)["']/,_h=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,Mh=/ref=["']([^"']*)["']/,Lh=pe("v"),Uh=pe("f"),function(e,t,r,n,a,s){for(var i,c,o,l,f,h=0,u="",d=[],p=[],m=0,b=0,E=0,v="",S=0,B=0,C=0,T=0,k=Array.isArray(s.CellXf),I=[],A=[],x=Array.isArray(t),R=[],D={},F=!1,P=e.split(yh),y=0,N=P.length;y!=N;++y){var _=(u=P[y].trim()).length
if(0!==_){for(h=0;h<_&&62!==u.charCodeAt(h);++h);if(++h,S=null!=(c=K(u.substr(0,h),!0)).r?parseInt(c.r,10):S+1,B=-1,!(r.sheetRows&&r.sheetRows<S))for(n.s.r>S-1&&(n.s.r=S-1),n.e.r<S-1&&(n.e.r=S-1),r&&r.cellStyles&&(D={},F=!1,c.ht&&(F=!0,D.hpt=parseFloat(c.ht),D.hpx=cf(D.hpt)),"1"==c.hidden&&(F=!0,D.hidden=!0),F&&(R[S-1]=D)),d=u.substr(h).split(Ph),h=0;h!=d.length;++h)if(0!==(u=d[h].trim()).length){if(p=u.match(Nh),m=h,b=0,E=0,u="<c "+("<"==u.substr(0,1)?">":"")+u,null!=p&&2===p.length){for(m=0,v=p[1],b=0;b!=v.length&&!((E=v.charCodeAt(b)-64)<1||E>26);++b)m=26*m+E
B=--m}else++B
for(b=0;b!=u.length&&62!==u.charCodeAt(b);++b);if(++b,(c=K(u.substr(0,b),!0)).r||(c.r=Tt({r:S-1,c:B})),i={t:""},null!=(p=(v=u.substr(b)).match(Lh))&&""!==p[1]&&(i.v=J(p[1])),r.cellFormula){null!=(p=v.match(Uh))&&""!==p[1]?(i.f=J(oe(p[1])).replace(/_xlfn\./,""),p[0].indexOf('t="array"')>-1?(i.F=(v.match(Mh)||[])[1],i.F.indexOf(":")>-1&&I.push([It(i.F),i.F])):p[0].indexOf('t="shared"')>-1&&(l=K(p[0]),A[parseInt(l.si,10)]=[l,J(oe(p[1]))])):(p=v.match(/<f[^>]*\/>/))&&A[(l=K(p[0])).si]&&(i.f=Xf(A[l.si][1],A[l.si][0].ref,c.r))
var M=Ct(c.r)
for(b=0;b<I.length;++b)M.r>=I[b][0].s.r&&M.r<=I[b][0].e.r&&M.c>=I[b][0].s.c&&M.c<=I[b][0].e.c&&(i.F=I[b][1])}if(null==c.t&&void 0===i.v)if(i.f||i.F)i.v=0,i.t="n"
else{if(!r.sheetStubs)continue
i.t="z"}else i.t=c.t||"n"
switch(n.s.c>m&&(n.s.c=m),n.e.c<m&&(n.e.c=m),i.t){case"n":i.v=parseFloat(i.v)
break
case"s":if(o=bh[parseInt(i.v,10)],void 0===i.v){if(!r.sheetStubs)continue
i.t="z"}i.v=o.t,i.r=o.r,r.cellHTML&&(i.h=o.h)
break
case"str":i.t="s",i.v=null!=i.v?oe(i.v):"",r.cellHTML&&(i.h=ae(i.v))
break
case"inlineStr":p=v.match(_h),i.t="s",null!=p&&(o=wl(p[1]))?i.v=o.t:i.v=""
break
case"b":i.v=ce(i.v)
break
case"d":r.cellDates||(i.v=w(O(i.v)),i.t="n")
break
case"e":r&&!1===r.cellText||(i.w=i.v),i.v=qt[i.v]}if(C=T=0,k&&void 0!==c.s&&null!=(f=s.CellXf[c.s])&&(null!=f.numFmtId&&(C=f.numFmtId),r.cellStyles&&null!=f.fillId&&(T=f.fillId)),Th(i,C,T,r,a,s),r.cellDates&&k&&"n"==i.t&&g.is_date(g._table[C])){var L=g.parse_date_code(i.v)
L&&(i.t="d",i.v=new Date(Date.UTC(L.y,L.m-1,L.d,L.H,L.M,L.S,L.u)))}if(x){var U=Ct(c.r)
t[U.r]||(t[U.r]=[]),t[U.r][U.c]=i}else t[c.r]=i}}}R.length>0&&(t["!rows"]=R)})
var Vh=Ce("worksheet",null,{xmlns:ke.main[0],"xmlns:r":ke.r})
function Wh(e,t,r,n){var a,s=[we,Vh],i=r.SheetNames[e],c="",o=r.Sheets[i]
null==o&&(o={})
var l,f,h=o["!ref"]
null==h&&(h="A1"),n||(n={}),o["!comments"]=[],o["!drawing"]=[],s[s.length]=Ce("sheetPr",null,{codeName:te(r.SheetNames[e])}),s[s.length]=Ce("dimension",null,{ref:h}),s[s.length]=Ce("sheetViews",Ce("sheetView",null,{workbookViewId:"0"}),{}),t.sheetFormat&&(s[s.length]=Ce("sheetFormatPr",null,{defaultRowHeight:t.sheetFormat.defaultRowHeight||"16",baseColWidth:t.sheetFormat.baseColWidth||"10"})),null!=o["!cols"]&&o["!cols"].length>0&&(s[s.length]=function(e,t){for(var r,n=["<cols>"],a=0;a!=t.length;++a)(r=t[a])&&(n[n.length]=Ce("col",null,Sh(a,r)))
return n[n.length]="</cols>",n.join("")}(0,o["!cols"])),s[a=s.length]="<sheetData/>",o["!links"]=[],null!=o["!ref"]&&(c=function(e,t,r,n,a){var s,i,c=[],o=[],l=It(e["!ref"]),f="",h=[],u=0,d=0,p=e["!rows"],m=Array.isArray(e)
for(d=l.s.c;d<=l.e.c;++d)h[d]=Et(d)
for(u=l.s.r;u<=l.e.r;++u){for(o=[],f=pt(u),d=l.s.c;d<=l.e.c;++d){i=h[d]+f
var g=m?(e[u]||[])[d]:e[i]
void 0!==g&&null!=(s=Fh(g,i,e,t))&&o.push(s)}if(o.length>0){var b={r:f}
if(p&&p[u]){var E=p[u]
E.hidden&&(b.hidden=1)
var v=-1
E.hpx?v=sf(E.hpx):E.hpt&&(v=E.hpt),v>-1&&(b.ht=v,b.customHeight=1)}c[c.length]=Ce("row",o.join(""),b)}}return c.join("")}(o,t)).length>0&&(s[s.length]=c),s.length>a+1&&(s[s.length]="</sheetData>",s[a]=s[a].replace("/>",">")),null!=o["!protect"]&&(s[s.length]=(l=o["!protect"],f={sheet:1},["objects","scenarios","selectLockedCells","selectUnlockedCells"].forEach(function(e){null!=l[e]&&l[e]&&(f[e]="1")}),["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"].forEach(function(e){null==l[e]||l[e]||(f[e]="0")}),l.password&&(f.password=Ll(l.password).toString(16).toUpperCase()),Ce("sheetProtection",null,f))),null!=o["!autofilter"]&&(s[s.length]=Ce("autoFilter",null,{ref:o["!autofilter"].ref})),null!=o["!merges"]&&o["!merges"].length>0&&(s[s.length]=function(e){if(0==e.length)return""
for(var t='<mergeCells count="'+e.length+'">',r=0;r!=e.length;++r)t+='<mergeCell ref="'+kt(e[r])+'"/>'
return t+"</mergeCells>"}(o["!merges"]))
var u,d,p=-1,m=-1
o["!links"].length>0&&(s[s.length]="<hyperlinks>",o["!links"].forEach(function(e){e[1].Target&&(m=Tr(n,-1,te(e[1].Target).replace(/#.*$/,""),Er.HLINK),u={ref:e[0],"r:id":"rId"+m},(p=e[1].Target.indexOf("#"))>-1&&(u.location=te(e[1].Target.substr(p+1))),e[1].Tooltip&&(u.tooltip=te(e[1].Tooltip)),s[s.length]=Ce("hyperlink",null,u))}),s[s.length]="</hyperlinks>"),delete o["!links"],null!=o["!margins"]&&(s[s.length]=(Bh(d=o["!margins"]),Ce("pageMargins",null,d)))
s.length
return s[s.length]="",o["!drawing"].length>0?(m=Tr(n,-1,"../drawings/drawing"+(e+1)+".xml",Er.DRAW),s[s.length]=Ce("drawing",null,{"r:id":"rId"+m})):delete o["!drawing"],o["!comments"].length>0&&(m=Tr(n,-1,"../drawings/vmlDrawing"+(e+1)+".vml",Er.VML),s[s.length]=Ce("legacyDrawing",null,{"r:id":"rId"+m}),o["!legacy"]=m),s.length>2&&(s[s.length]="</worksheet>",s[1]=s[1].replace("/>",">")),s.join("")}function Xh(e,t,r,n){var a=function(e,t,r){var n=st(145),a=(r["!rows"]||[])[e]||{}
n.write_shift(4,e),n.write_shift(4,0)
var s=320
a.hpx?s=20*sf(a.hpx):a.hpt&&(s=20*a.hpt),n.write_shift(2,s),n.write_shift(1,0)
var i=0
a.hidden&&(i|=16),(a.hpx||a.hpt)&&(i|=32),n.write_shift(1,i),n.write_shift(1,0)
var c=0,o=n.l
n.l+=4
for(var l={r:e,c:0},f=0;f<16;++f)if(!(t.s.c>f+1<<10||t.e.c<f<<10)){for(var h=-1,u=-1,d=f<<10;d<f+1<<10;++d)l.c=d,(Array.isArray(r)?(r[l.r]||[])[l.c]:r[Tt(l)])&&(h<0&&(h=d),u=d)
h<0||(++c,n.write_shift(4,h),n.write_shift(4,u))}var p=n.l
return n.l=o,n.write_shift(4,c),n.l=p,n.length>n.l?n.slice(0,n.l):n}(n,r,t)
a.length>17&&ot(e,"BrtRowHdr",a)}var Gh=Yt,zh=$t
function jh(e,t,r){return null==r&&(r=st(12)),Lt(t,r),function(e,t){null==t&&(t=st(4))
var r=0,n=0,a=100*e
if(e==(0|e)&&e>=-(1<<29)&&e<1<<29?n=1:a==(0|a)&&a>=-(1<<29)&&a<1<<29&&(n=1,r=1),!n)throw new Error("unsupported RkNumber "+e)
t.write_shift(-4,((r?a:e)<<2)+(r+2))}(e.v,r),r}var Kh=Yt,Yh=$t
function $h(e,t,r,n,a,s){if(void 0===t.v)return""
var i="",c=null
switch(t.t){case"b":i=t.v?"1":"0"
break
case"d":t.z=t.z||g._table[14],c=t.v,t.v=w(t.v),t.t="n"
break
case"n":case"e":i=""+t.v
break
default:i=t.v}var o,l,f,h,u,d,p,m,b,E,v,S,B,C={r:r,c:n}
switch(C.s=Ch(a.cellXfs,t,a),t.l&&s["!links"].push([Tt(C),t.l]),t.c&&s["!comments"].push([Tt(C),t.c]),t.t){case"s":case"str":return void(a.bookSST?(i=vh(a.Strings,t.v),C.t="s",C.v=i,ot(e,"BrtCellIsst",(E=C,null==v&&(v=st(12)),Lt(E,v),v.write_shift(4,E.v),v))):(C.t="str",ot(e,"BrtCellSt",(p=t,m=C,null==b&&(b=st(12+4*p.v.length)),Lt(m,b),Pt(p.v,b),b.length>b.l?b.slice(0,b.l):b))))
case"n":return t.v==(0|t.v)&&t.v>-1e3&&t.v<1e3?ot(e,"BrtCellRk",jh(t,C)):ot(e,"BrtCellReal",(h=t,u=C,null==d&&(d=st(16)),Lt(u,d),Zt(h.v,d),d)),void(c&&(t.t="d",t.v=c))
case"b":return C.t="b",void ot(e,"BrtCellBool",(o=t,l=C,null==f&&(f=st(9)),Lt(l,f),f.write_shift(1,o.v?1:0),f))
case"e":C.t="e"}ot(e,"BrtCellBlank",(S=C,null==B&&(B=st(8)),Lt(S,B)))}function Qh(e,t){var r,n
t&&t["!merges"]&&(ot(e,"BrtBeginMergeCells",(r=t["!merges"].length,null==n&&(n=st(4)),n.write_shift(4,r),n)),t["!merges"].forEach(function(t){ot(e,"BrtMergeCell",Yh(t))}),ot(e,"BrtEndMergeCells"))}function Zh(e,t,r,n,a){t&&t["!cols"]&&(ot(e,"BrtBeginColInfos"),t["!cols"].forEach(function(t,r){t&&ot(e,"BrtColInfo",function(e,t,r){null==r&&(r=st(18))
var n=Sh(e,t)
r.write_shift(-4,e),r.write_shift(-4,e),r.write_shift(4,256*(n.width||10)),r.write_shift(4,0)
var a=0
return t.hidden&&(a|=1),"number"==typeof n.width&&(a|=2),r.write_shift(1,a),r.write_shift(1,0),r}(r,t))}),ot(e,"BrtEndColInfos"))}function Jh(e,t,r){t["!links"].forEach(function(t){if(t[1].Target){var n=Tr(r,-1,t[1].Target.replace(/#.*$/,""),Er.HLINK)
ot(e,"BrtHLink",function(e,t,r){null==r&&(r=st(50+4*e[1].Target.length)),$t({s:Ct(e[0]),e:Ct(e[0])},r),zt("rId"+t,r)
var n=e[1].Target.indexOf("#")
return Pt((-1==n?"":e[1].Target.substr(n+1))||"",r),Pt(e[1].Tooltip||"",r),Pt("",r),r.slice(0,r.l)}(t,n))}}),delete t["!links"]}function qh(e,t){var r
ot(e,"BrtBeginWsViews"),ot(e,"BrtBeginWsView",(null==r&&(r=st(30)),r.write_shift(2,924),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(2,0),r.write_shift(2,100),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(4,0),r)),ot(e,"BrtEndWsView"),ot(e,"BrtEndWsViews")}function eu(e,t){var r,n
t["!protect"]&&ot(e,"BrtSheetProtection",(r=t["!protect"],null==n&&(n=st(66)),n.write_shift(2,r.password?Ll(r.password):0),n.write_shift(4,1),[["objects",!1],["scenarios",!1],["formatCells",!0],["formatColumns",!0],["formatRows",!0],["insertColumns",!0],["insertRows",!0],["insertHyperlinks",!0],["deleteColumns",!0],["deleteRows",!0],["selectLockedCells",!1],["sort",!0],["autoFilter",!0],["pivotTables",!0],["selectUnlockedCells",!1]].forEach(function(e){e[1]?n.write_shift(4,null==r[e[0]]||r[e[0]]?0:1):n.write_shift(4,null!=r[e[0]]&&r[e[0]]?0:1)}),n))}function tu(e,t,r,n){var a,s,i,c,o=ct(),l=r.SheetNames[e],f=r.Sheets[l]||{},h=It(f["!ref"]||"A1")
return f["!links"]=[],f["!comments"]=[],ot(o,"BrtBeginSheet"),ot(o,"BrtWsProp",function(e,t){null==t&&(t=st(84+4*e.length))
for(var r=0;r<3;++r)t.write_shift(1,0)
return er({auto:1},t),t.write_shift(-4,-1),t.write_shift(-4,-1),Ht(e,t),t.slice(0,t.l)}(l)),ot(o,"BrtWsDim",zh(h)),qh(o),Zh(o,f),function(e,t,r,n,a){var s,i=It(t["!ref"]||"A1"),c="",o=[]
ot(e,"BrtBeginSheetData")
for(var l=Array.isArray(t),f=i.s.r;f<=i.e.r;++f){c=pt(f),Xh(e,t,i,f)
for(var h=i.s.c;h<=i.e.c;++h){f===i.s.r&&(o[h]=Et(h)),s=o[h]+c
var u=l?(t[f]||[])[h]:t[s]
u&&$h(e,u,f,h,n,t)}}ot(e,"BrtEndSheetData")}(o,f,0,t),eu(o,f),a=o,(s=f)["!autofilter"]&&(ot(a,"BrtBeginAFilter",$t(wt(s["!autofilter"].ref))),ot(a,"BrtEndAFilter")),Qh(o,f),Jh(o,f,n),f["!margins"]&&ot(o,"BrtMargins",(i=f["!margins"],null==c&&(c=st(48)),Bh(i),Zt(i.left,c),Zt(i.right,c),Zt(i.top,c),Zt(i.bottom,c),Zt(i.header,c),Zt(i.footer,c),c)),function(e,t,r,n){if(t["!comments"].length>0){var a=Tr(n,-1,"../drawings/vmlDrawing"+(r+1)+".vml",Er.VML)
ot(e,"BrtLegacyDrawing",zt("rId"+a)),t["!legacy"]=a}}(o,f,e,n),ot(o,"BrtEndSheet"),o.end()}function ru(e,t,r,n,a,s){var i=s||{"!type":"chart"}
if(!e)return s
var c=0,o=0,l="A",f={s:{r:2e6,c:2e6},e:{r:0,c:0}}
return(e.match(/<c:numCache>.*?<\/c:numCache>/gm)||[]).forEach(function(e){var t=function(e){var t=[];(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm)||[]).forEach(function(e){var r=e.match(/<c:pt idx="(.*?)"><c:v>(.*)<\/c:v><\/c:pt>/)
r&&(t[+r[1]]=+r[2])})
var r=J((e.match(/<c:formatCode>(.*?)<\/c:formatCode>/)||["","General"])[1])
return[t,r]}(e)
f.s.r=f.s.c=0,f.e.c=c,l=Et(c),t[0].forEach(function(e,r){i[l+pt(r)]={t:"n",v:e,z:t[1]},o=r}),f.e.r<o&&(f.e.r=o),++c}),c>0&&(i["!ref"]=kt(f)),i}Er.CS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet"
Ce("chartsheet",null,{xmlns:ke.main[0],"xmlns:r":ke.r})
var nu=[["allowRefreshQuery","0"],["autoCompressPictures","1"],["backupFile","0"],["checkCompatibility","0"],["codeName",""],["date1904","0"],["dateCompatibility","1"],["filterPrivacy","0"],["hidePivotFieldList","0"],["promptedSolutions","0"],["publishItems","0"],["refreshAllConnections",!1],["saveExternalLinkValues","1"],["showBorderUnselectedTables","1"],["showInkAnnotation","1"],["showObjects","all"],["showPivotChartFilter","0"]],au=[["activeTab","0"],["autoFilterDateGrouping","1"],["firstSheet","0"],["minimized","0"],["showHorizontalScroll","1"],["showSheetTabs","1"],["showVerticalScroll","1"],["tabRatio","600"],["visibility","visible"]],su=[],iu=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]]
function cu(e,t){for(var r=0;r!=e.length;++r)for(var n=e[r],a=0;a!=t.length;++a){var s=t[a]
null==n[s[0]]&&(n[s[0]]=s[1])}}function ou(e,t){for(var r=0;r!=t.length;++r){var n=t[r]
null==e[n[0]]&&(e[n[0]]=n[1])}}function lu(e){ou(e.WBProps,nu),ou(e.CalcPr,iu),cu(e.WBView,au),cu(e.Sheets,su),Eh.date1904=ce(e.WBProps.date1904)}var fu="][*?/\\".split("")
function hu(e,t){if(e.length>31){if(t)return!1
throw new Error("Sheet names cannot exceed 31 chars")}var r=!0
return fu.forEach(function(n){if(-1!=e.indexOf(n)){if(!t)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")
r=!1}}),r}function uu(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook")
var t;(t=e.SheetNames).forEach(function(e,r){hu(e)
for(var n=0;n<r;++n)if(e==t[n])throw new Error("Duplicate Sheet Name: "+e)})}var du=/<\w+:workbook/
function pu(e,t){if(!e)throw new Error("Could not find file")
var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},n=!1,a="xmlns",s={},i=0
if(e.replace(G,function(c,o){var l=K(c)
switch(l[0].replace(j,"<$1")){case"<?xml":break
case"<workbook":c.match(du)&&(a="xmlns"+c.match(/<(\w+):/)[1]),r.xmlns=l[a]
break
case"</workbook>":break
case"<fileVersion":delete l[0],r.AppVersion=l
break
case"<fileVersion/>":case"</fileVersion>":break
case"<fileSharing":case"<fileSharing/>":break
case"<workbookPr":case"<workbookPr/>":delete l[0],r.WBProps=l
break
case"</workbookPr>":case"<workbookProtection":case"<workbookProtection/>":break
case"<bookViews>":case"</bookViews>":break
case"<workbookView":delete l[0],r.WBView.push(l)
break
case"</workbookView>":break
case"<sheets>":case"</sheets>":break
case"<sheet":switch(l.state){case"hidden":l.Hidden=1
break
case"veryHidden":l.Hidden=2
break
default:l.Hidden=0}delete l.state,l.name=J(oe(l.name)),delete l[0],r.Sheets.push(l)
break
case"</sheet>":break
case"<functionGroups":case"<functionGroups/>":case"<functionGroup":break
case"<externalReferences":case"</externalReferences>":case"<externalReferences>":case"<externalReference":case"<definedNames/>":break
case"<definedNames>":case"<definedNames":n=!0
break
case"</definedNames>":n=!1
break
case"<definedName":(s={}).Name=l.name,l.comment&&(s.Comment=l.comment),l.localSheetId&&(s.Sheet=+l.localSheetId),i=o+c.length
break
case"</definedName>":s.Ref=e.slice(i,o),r.Names.push(s)
break
case"<definedName/>":break
case"<calcPr":case"<calcPr/>":delete l[0],r.CalcPr=l
break
case"</calcPr>":case"<oleSize":break
case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break
case"<customWorkbookView":case"</customWorkbookView>":break
case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":case"<pivotCache":break
case"<smartTagPr":case"<smartTagPr/>":break
case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":case"<smartTagType":break
case"<webPublishing":case"<webPublishing/>":break
case"<fileRecoveryPr":case"<fileRecoveryPr/>":break
case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":case"<webPublishObject":break
case"<extLst>":case"</extLst>":case"<extLst/>":break
case"<ext":n=!0
break
case"</ext>":n=!1
break
case"<ArchID":break
case"<AlternateContent":n=!0
break
case"</AlternateContent>":n=!1
break
default:if(!n&&t.WTF)throw new Error("unrecognized "+l[0]+" in workbook")}return c}),-1===ke.main.indexOf(r.xmlns))throw new Error("Unknown Namespace: "+r.xmlns)
return lu(r),r}var mu=Ce("workbook",null,{xmlns:ke.main[0],"xmlns:r":ke.r})
function gu(e,t){var r=[we]
r[r.length]=mu
var n,a=e.Workbook&&(e.Workbook.Names||[]).length>0
r[r.length]=Ce("workbookPr",null,{date1904:(n=e,n.Workbook&&n.Workbook.WBProps&&ce(n.Workbook.WBProps.date1904)?"true":"false"),codeName:"ThisWorkbook"}),r[r.length]="<sheets>"
for(var s=e.Workbook&&e.Workbook.Sheets||[],i=0;i!=e.SheetNames.length;++i){var c={name:te(e.SheetNames[i].substr(0,31))}
if(c.sheetId=""+(i+1),c["r:id"]="rId"+(i+1),s[i])switch(s[i].Hidden){case 1:c.state="hidden"
break
case 2:c.state="veryHidden"}r[r.length]=Ce("sheet",null,c)}return r[r.length]="</sheets>",a&&(r[r.length]="<definedNames>",e.Workbook&&e.Workbook.Names&&e.Workbook.Names.forEach(function(e){var t={name:e.Name}
e.Comment&&(t.comment=e.Comment),null!=e.Sheet&&(t.localSheetId=""+e.Sheet),e.Ref&&(r[r.length]=Ce("definedName",String(e.Ref),t))}),r[r.length]="</definedNames>"),r.length>2&&(r[r.length]="</workbook>",r[1]=r[1].replace("/>",">")),r.join("")}function bu(e,t,r){if(t.Workbook&&t.Workbook.Sheets){for(var n,a,s=t.Workbook.Sheets,i=0,c=-1,o=-1;i<s.length;++i)!s[i]||!s[i].Hidden&&-1==c?c=i:1==s[i].Hidden&&-1==o&&(o=i)
if(!(o>c))ot(e,"BrtBeginBookViews"),ot(e,"BrtBookView",(n=c,a||(a=st(29)),a.write_shift(-4,0),a.write_shift(-4,460),a.write_shift(4,28800),a.write_shift(4,17600),a.write_shift(4,500),a.write_shift(4,n),a.write_shift(4,n),a.write_shift(1,120),a.length>a.l?a.slice(0,a.l):a)),ot(e,"BrtEndBookViews")}}function Eu(t,r){var n,a=ct()
return ot(a,"BrtBeginBook"),ot(a,"BrtFileVersion",function(t,r){r||(r=st(127))
for(var n=0;4!=n;++n)r.write_shift(4,0)
return Pt("SheetJS",r),Pt(e.version,r),Pt(e.version,r),Pt("7262",r),r.length=r.l,r.length>r.l?r.slice(0,r.l):r}()),ot(a,"BrtWbProp",(n||(n=st(72)),n.write_shift(4,0),n.write_shift(4,0),Ht("ThisWorkbook",n),n.slice(0,n.l))),bu(a,t),function(e,t,r){ot(e,"BrtBeginBundleShs")
for(var n=0;n!=t.SheetNames.length;++n){var a={Hidden:t.Workbook&&t.Workbook.Sheets&&t.Workbook.Sheets[n]&&t.Workbook.Sheets[n].Hidden||0,iTabID:n+1,strRelID:"rId"+(n+1),name:t.SheetNames[n]}
ot(e,"BrtBundleSh",(s=a,(i=void 0)||(i=st(127)),i.write_shift(4,s.Hidden),i.write_shift(4,s.iTabID),zt(s.strRelID,i),Pt(s.name.substr(0,31),i),i.length>i.l?i.slice(0,i.l):i))}var s,i
ot(e,"BrtEndBundleShs")}(a,t),ot(a,"BrtEndBook"),a.end()}function vu(e,t,r){return".bin"===t.slice(-4)?function(e,t){var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},n=!1
t||(t={}),t.biff=12
var a=[],s=[]
return s.SheetNames=[],it(e,function(e,i,c){switch(c){case 156:s.SheetNames.push(e.name),r.Sheets.push(e)
break
case 39:e.Ref=ch(e.Ptg,0,null,s,t),delete e.Ptg,a.push(e)
break
case 1036:break
case 2071:case 534:case 677:case 158:case 157:case 610:case 2050:case 362:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 361:case 596:case 667:case 355:case 358:case 357:case 2076:case 2075:case 2082:case 397:case 154:case 153:case 1117:case 553:case 2091:break
case 35:n=!0
break
case 36:n=!1
break
case 37:case 38:case 16:break
default:if((i||"").indexOf("Begin")>0);else if((i||"").indexOf("End")>0);else if(!n||t.WTF)throw new Error("Unexpected record "+c+" "+i)}},t),lu(r),r.Names=a,r}(e,r):pu(e,r)}function Su(e,t,r,n,a,s,i){return".bin"===t.slice(-4)?function(e,t,r,n,a,s){if(!e)return e
var i=t||{}
r||(r={"!id":{}}),null!=o&&null==i.dense&&(i.dense=o)
var c,l,f,h,u,d,p,m,b,E,v=i.dense?[]:{},S={s:{r:2e6,c:2e6},e:{r:0,c:0}},B=!1,C=!1,T=[]
i.biff=12,i["!row"]=0
var w=0,k=!1,I=[],A={},x=[[]]
x.sharedf=A,x.arrayf=I,x.SheetNames=n.SheetNames||n.Sheets.map(function(e){return e.name}),i.supbooks=x
for(var R=0;R<n.Names.length;++R)x[0][R+1]=n.Names[R]
var D=[],O=[],F=!1
if(it(e,function(e,t,n){if(!C)switch(n){case 148:c=e
break
case 0:l=e,i.sheetRows&&i.sheetRows<=l.r&&(C=!0),b=pt(u=l.r),i["!row"]=l.r,(e.hidden||e.hpt)&&(e.hpt&&(e.hpx=cf(e.hpt)),O[e.r]=e)
break
case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:switch(f={t:e[2]},e[2]){case"n":f.v=e[1]
break
case"s":m=bh[e[1]],f.v=m.t,f.r=m.r
break
case"b":f.v=!!e[1]
break
case"e":f.v=e[1],!1!==i.cellText&&(f.w=Jt[f.v])
break
case"str":f.t="s",f.v=oe(e[1])}if((h=s.CellXf[e[0].iStyleRef])&&Th(f,h.ifmt,null,i,a,s),d=e[0].c,i.dense?(v[u]||(v[u]=[]),v[u][d]=f):v[Et(d)+b]=f,i.cellFormula){for(k=!1,w=0;w<I.length;++w){var o=I[w]
l.r>=o[0].s.r&&l.r<=o[0].e.r&&d>=o[0].s.c&&d<=o[0].e.c&&(f.F=kt(o[0]),k=!0)}!k&&e.length>3&&(f.f=e[3])}if(S.s.r>l.r&&(S.s.r=l.r),S.s.c>d&&(S.s.c=d),S.e.r<l.r&&(S.e.r=l.r),S.e.c<d&&(S.e.c=d),i.cellDates&&h&&"n"==f.t&&g.is_date(g._table[h.ifmt])){var R=g.parse_date_code(f.v)
R&&(f.t="d",f.v=new Date(Date.UTC(R.y,R.m-1,R.d,R.H,R.M,R.S,R.u)))}break
case 1:if(!i.sheetStubs)break
f={t:"z",v:void 0},d=e[0].c,i.dense?(v[u]||(v[u]=[]),v[u][d]=f):v[Et(d)+b]=f,S.s.r>l.r&&(S.s.r=l.r),S.s.c>d&&(S.s.c=d),S.e.r<l.r&&(S.e.r=l.r),S.e.c<d&&(S.e.c=d)
break
case 176:T.push(e)
break
case 494:var P=r["!id"][e.relId]
for(P&&(e.Target=P.Target,e.loc&&(e.Target+="#"+e.loc),e.Rel=P),u=e.rfx.s.r;u<=e.rfx.e.r;++u)for(d=e.rfx.s.c;d<=e.rfx.e.c;++d)i.dense?(v[u]||(v[u]=[]),v[u][d]||(v[u][d]={t:"z",v:void 0}),v[u][d].l=e):(p=Tt({c:d,r:u}),v[p]||(v[p]={t:"z",v:void 0}),v[p].l=e)
break
case 426:if(!i.cellFormula)break
I.push(e),(E=i.dense?v[u][d]:v[Et(d)+b]).f=ch(e[1],0,{r:l.r,c:d},x,i),E.F=kt(e[0])
break
case 427:if(!i.cellFormula)break
A[Tt(e[0].s)]=e[1],(E=i.dense?v[u][d]:v[Et(d)+b]).f=ch(e[1],0,{r:l.r,c:d},x,i)
break
case 60:if(!i.cellStyles)break
for(;e.e>=e.s;)D[e.e--]={width:e.w/256,hidden:!!(1&e.flags)},F||(F=!0,rf(e.w/256)),nf(D[e.e+1])
break
case 161:v["!autofilter"]={ref:kt(e)}
break
case 476:v["!margins"]=e
break
case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 49:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 64:case 1053:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 151:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 152:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 50:case 2070:case 485:case 1045:case 147:break
case 35:B=!0
break
case 36:B=!1
break
case 37:case 38:break
default:if((t||"").indexOf("Begin")>0);else if((t||"").indexOf("End")>0);else if(!B||i.WTF)throw new Error("Unexpected record "+n+" "+t)}},i),delete i.supbooks,delete i["!row"],!v["!ref"]&&(S.s.r<2e6||c&&(c.e.r>0||c.e.c>0||c.s.r>0||c.s.c>0))&&(v["!ref"]=kt(c||S)),i.sheetRows&&v["!ref"]){var P=It(v["!ref"])
i.sheetRows<+P.e.r&&(P.e.r=i.sheetRows-1,P.e.r>S.e.r&&(P.e.r=S.e.r),P.e.r<P.s.r&&(P.s.r=P.e.r),P.e.c>S.e.c&&(P.e.c=S.e.c),P.e.c<P.s.c&&(P.s.c=P.e.c),v["!fullref"]=v["!ref"],v["!ref"]=kt(P))}return T.length>0&&(v["!merges"]=T),D.length>0&&(v["!cols"]=D),O.length>0&&(v["!rows"]=O),v}(e,r,n,a,s,i):Oh(e,r,n,0,s,i)}function Bu(e,t,r,n,a,s,i){return".bin"===t.slice(-4)?function(e,t,r,n,a,s){if(!e)return e
r||(r={"!id":{}})
var i={"!type":"chart","!chart":null,"!rel":""},c=[],o=!1
return it(e,function(e,r,n){switch(n){case 550:i["!rel"]=e
break
case 562:case 652:case 651:case 669:case 679:case 551:case 552:case 476:break
case 35:o=!0
break
case 36:o=!1
break
case 37:c.push(r)
break
case 38:c.pop()
break
default:if((r||"").indexOf("Begin")>0)c.push(r)
else if((r||"").indexOf("End")>0)c.pop()
else if(!o||t.WTF)throw new Error("Unexpected record "+n+" "+r)}},t),r["!id"][i["!rel"]]&&(i["!chart"]=r["!id"][i["!rel"]]),i}(e,r,n):function(e,t,r,n,a,s){if(!e)return e
r||(r={"!id":{}})
var i,c={"!type":"chart","!chart":null,"!rel":""}
return(i=e.match(/drawing r:id="(.*?)"/))&&(c["!rel"]=i[1]),r["!id"][c["!rel"]]&&(c["!chart"]=r["!id"][c["!rel"]]),c}(e,0,n)}function Cu(e,t,r,n){return".bin"===t.slice(-4)?function(e,t,r){var n={}
n.NumberFmt=[]
for(var a in g._table)n.NumberFmt[a]=g._table[a]
n.CellXf=[],n.Fonts=[]
var s=[],i=!1
return it(e,function(e,a,c){switch(c){case 44:n.NumberFmt[e[0]]=e[1],g.load(e[1],e[0])
break
case 43:n.Fonts.push(e),null!=e.color.theme&&t&&t.themeElements&&t.themeElements.clrScheme&&(e.color.rgb=Kl(t.themeElements.clrScheme[e.color.theme].rgb,e.color.tint||0))
break
case 1025:case 45:case 46:break
case 47:"BrtBeginCellXFs"==s[s.length-1]&&n.CellXf.push(e)
break
case 48:case 507:case 572:case 475:break
case 1171:case 2102:case 1130:case 512:case 2095:break
case 35:i=!0
break
case 36:i=!1
break
case 37:s.push(a)
break
case 38:s.pop()
break
default:if((a||"").indexOf("Begin")>0)s.push(a)
else if((a||"").indexOf("End")>0)s.pop()
else if(!i||r.WTF)throw new Error("Unexpected record "+c+" "+a)}}),n}(e,r,n):pf(e,r,n)}function Tu(e,t,r){return function e(t,r){if(!t||0===t.length)return e(Of())
var n,a={}
if(!(n=t.match(Df)))throw new Error("themeElements not found in theme")
return Rf(n[0],a,r),a}(e,r)}function wu(e,t,r){return".bin"===t.slice(-4)?(n=r,a=[],s=!1,it(e,function(e,t,r){switch(r){case 159:a.Count=e[0],a.Unique=e[1]
break
case 19:a.push(e)
break
case 160:return!0
case 35:s=!0
break
case 36:s=!1
break
default:if(t.indexOf("Begin")>0||t.indexOf("End"),!s||n.WTF)throw new Error("Unexpected record "+r+" "+t)}}),a):function(e,t){var r=[],n=""
if(!e)return r
var a=e.match(kl)
if(S(a)){n=a[2].replace(Il,"").split(Al)
for(var s=0;s!=n.length;++s){var i=wl(n[s].trim(),t)
null!=i&&(r[r.length]=i)}a=K(a[1]),r.Count=a.count,r.Unique=a.uniqueCount}return r}(e,r)
var n,a,s}function ku(e,t,r){return".bin"===t.slice(-4)?(n=r,a=[],s=[],i={},c=!1,it(e,function(e,t,r){switch(r){case 632:s.push(e)
break
case 635:i=e
break
case 637:i.t=e.t,i.h=e.h,i.r=e.r
break
case 636:if(i.author=s[i.iauthor],delete i.iauthor,n.sheetRows&&n.sheetRows<=i.rfx.r)break
i.t||(i.t=""),delete i.rfx,a.push(i)
break
case 35:c=!0
break
case 36:c=!1
break
case 37:case 38:break
default:if((t||"").indexOf("Begin")>0);else if((t||"").indexOf("End")>0);else if(!c||n.WTF)throw new Error("Unexpected record "+r+" "+t)}}),a):function(e,t){if(e.match(/<(?:\w+:)?comments *\/>/))return[]
var r=[],n=[],a=e.match(/<(?:\w+:)?authors>([^\u2603]*)<\/(?:\w+:)?authors>/)
a&&a[1]&&a[1].split(/<\/\w*:?author>/).forEach(function(e){if(""!==e&&""!==e.trim()){var t=e.match(/<(?:\w+:)?author[^>]*>(.*)/)
t&&r.push(t[1])}})
var s=e.match(/<(?:\w+:)?commentList>([^\u2603]*)<\/(?:\w+:)?commentList>/)
return s&&s[1]&&s[1].split(/<\/\w*:?comment>/).forEach(function(e,a){if(""!==e&&""!==e.trim()){var s=e.match(/<(?:\w+:)?comment[^>]*>/)
if(s){var i=K(s[0]),c={author:i.authorId&&r[i.authorId]?r[i.authorId]:"sheetjsghost",ref:i.ref,guid:i.guid},o=Ct(i.ref)
if(!(t.sheetRows&&t.sheetRows<=o.r)){var l=e.match(/<(?:\w+:)?text>([^\u2603]*)<\/(?:\w+:)?text>/),f=!!l&&!!l[1]&&wl(l[1])||{r:"",t:"",h:""}
c.r=f.r,"<t></t>"==f.r&&(f.t=f.h=""),c.t=f.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),t.cellHTML&&(c.h=f.h),n.push(c)}}}}),n}(e,r)
var n,a,s,i,c}function Iu(e,t,r){return".bin"===t.slice(-4)?(n=[],it(e,function(e,t,r){switch(r){case 63:n.push(e)
break
default:if((t||"").indexOf("Begin")>0);else if(!((t||"").indexOf("End")>0))throw new Error("Unexpected record "+r+" "+t)}}),n):function(e,t){var r=[]
if(!e)return r
var n=1
return(e.match(G)||[]).forEach(function(e){var t=K(e)
switch(t[0]){case"<?xml":break
case"<calcChain":case"<calcChain>":case"</calcChain>":break
case"<c":delete t[0],t.i?n=t.i:t.i=n,r.push(t)}}),r}(e)
var n}function Au(e,t,r){return(".bin"===t.slice(-4)?Dl:function(e,t){if(!t.bookSST)return""
var r=[we]
r[r.length]=Ce("sst",null,{xmlns:ke.main[0],count:e.Count,uniqueCount:e.Unique})
for(var n=0;n!=e.length;++n)if(null!=e[n]){var a=e[n],s="<si>"
a.r?s+=a.r:(s+="<t",a.t||(a.t=""),a.t.match(xl)&&(s+=' xml:space="preserve"'),s+=">"+te(a.t)+"</t>"),s+="</si>",r[r.length]=s}return r.length>2&&(r[r.length]="</sst>",r[1]=r[1].replace("/>",">")),r.join("")})(e,r)}function xu(e,t,r){return(".bin"===t.slice(-4)?Uf:function(e,t){var r=[we,Mf],n=[]
return r.push("<authors>"),e.map(function(e){return e[1]}).forEach(function(e){e.map(function(e){return te(e.a)}).forEach(function(e){n.indexOf(e)>-1||(n.push(e),r.push("<author>"+e+"</author>"))})}),r.push("</authors>"),r.push("<commentList>"),e.forEach(function(e){e[1].forEach(function(t){r.push('<comment ref="'+e[0]+'" authorId="'+n.indexOf(te(t.a))+'"><text>'),r.push(Se("t",null==t.t?"":t.t)),r.push("</text></comment>")})}),r.push("</commentList>"),r.length>2&&(r[r.length]="</comments>",r[1]=r[1].replace("/>",">")),r.join("")})(e,r)}var Ru=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,Du=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/,Ou=function(e){return String.fromCharCode(e)}
function Fu(e,t){var r=e.split(/\s+/),n=[]
if(t||(n[0]=r[0]),1===r.length)return n
var a,s,i,c=e.match(Ru)
if(c)for(i=0;i!=c.length;++i)-1===(s=(a=c[i].match(Du))[1].indexOf(":"))?n[a[1]]=a[2].substr(1,a[2].length-2):n["xmlns:"===a[1].substr(0,6)?"xmlns"+a[1].substr(6):a[1].substr(s+1)]=a[2].substr(1,a[2].length-2)
return n}function Pu(e){var t={}
if(1===e.split(/\s+/).length)return t
var r,n,a,s=e.match(Ru)
if(s)for(a=0;a!=s.length;++a)-1===(n=(r=s[a].match(Du))[1].indexOf(":"))?t[r[1]]=r[2].substr(1,r[2].length-2):t["xmlns:"===r[1].substr(0,6)?"xmlns"+r[1].substr(6):r[1].substr(n+1)]=r[2].substr(1,r[2].length-2)
return t}function yu(e,t,r,n){var a=n
switch((r[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":a=ce(n)
break
case"i2":case"int":a=parseInt(n,10)
break
case"r4":case"float":a=parseFloat(n)
break
case"date":case"dateTime.tz":a=O(n)
break
case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break
default:throw new Error("bad custprop:"+r[0])}e[J(t[3])]=a}function Nu(e,t,r){if("z"!==e.t){if(!r||!1!==r.cellText)try{"e"===e.t?e.w=e.w||Jt[e.v]:"General"===t?"n"===e.t?(0|e.v)===e.v?e.w=g._general_int(e.v):e.w=g._general_num(e.v):e.w=g._general(e.v):e.w=(n=t||"General",a=e.v,"General"===(s=E[n]||J(n))?g._general(a):g.format(s,a))}catch(e){if(r.WTF)throw e}var n,a,s
try{var i=E[t]||t||"General"
if(r.cellNF&&(e.z=i),r.cellDates&&"n"==e.t&&g.is_date(i)){var c=g.parse_date_code(e.v)
c&&(e.t="d",e.v=new Date(Date.UTC(c.y,c.m-1,c.d,c.H,c.M,c.S,c.u)))}}catch(e){if(r.WTF)throw e}}}function _u(e,t,r){if(r.cellStyles&&t.Interior){var n=t.Interior
n.Pattern&&(n.patternType=of[n.Pattern]||n.Pattern)}e[t.ID]=t}function Mu(e,t,r,n,a,s,i,c,o,l){var f="General",h=n.StyleID,u={}
l=l||{}
var d=[],p=0
for(void 0===h&&c&&(h=c.StyleID),void 0===h&&i&&(h=i.StyleID);void 0!==s[h]&&(s[h].nf&&(f=s[h].nf),s[h].Interior&&d.push(s[h].Interior),s[h].Parent);)h=s[h].Parent
switch(r.Type){case"Boolean":n.t="b",n.v=ce(e)
break
case"String":n.t="s",n.r=se(J(e)),n.v=e.indexOf("<")>-1?J(t):n.r
break
case"DateTime":"Z"!=e.slice(-1)&&(e+="Z"),n.v=(O(e)-new Date(Date.UTC(1899,11,30)))/864e5,n.v!=n.v?n.v=J(e):n.v<60&&(n.v=n.v-1),f&&"General"!=f||(f="yyyy-mm-dd")
case"Number":void 0===n.v&&(n.v=+e),n.t||(n.t="n")
break
case"Error":n.t="e",n.v=qt[e],!1!==l.cellText&&(n.w=e)
break
default:n.t="s",n.v=se(t||e)}if(Nu(n,f,l),!1!==l.cellFormula)if(n.Formula){var m=J(n.Formula)
61==m.charCodeAt(0)&&(m=m.substr(1)),n.f=Hf(m,a),delete n.Formula,"RC"==n.ArrayRange?n.F=Hf("RC:RC",a):n.ArrayRange&&(n.F=Hf(n.ArrayRange,a),o.push([It(n.F),n.F]))}else for(p=0;p<o.length;++p)a.r>=o[p][0].s.r&&a.r<=o[p][0].e.r&&a.c>=o[p][0].s.c&&a.c<=o[p][0].e.c&&(n.F=o[p][1])
l.cellStyles&&(d.forEach(function(e){!u.patternType&&e.patternType&&(u.patternType=e.patternType)}),n.s=u),n.ixfe=void 0!==n.StyleID?n.StyleID:"Default"}function Lu(e){if(f&&Buffer.isBuffer(e))return e.toString("utf8")
if("string"==typeof e)return e
throw new Error("Bad input format: expected Buffer or string")}var Uu=/<(\/?)([^\s?>!\/:]*:|)([^\s?>]*[^\s?>\/])[^>]*>/gm
function Hu(e,t){b(g)
var r,n=s(Lu(e))
if(t&&"binary"==t.type&&"undefined"!=typeof cptable&&(n=cptable.utils.decode(65001,a(n))),n.substr(0,1e3).indexOf("<html")>=0)return nd.to_workbook(n,t)
var i,c=[]
null!=o&&null==t.dense&&(t.dense=o)
var l,f,h,u,d,p={},m=[],v=t.dense?[]:{},S="",B={},C={},T=Fu('<Data ss:Type="String">'),w=0,k=0,I=0,A={s:{r:2e6,c:2e6},e:{r:0,c:0}},x={},R={},D="",O=0,F=[],y={},N={},_=0,M={},L=[],U={},H=[],V=!1,W=[],X=[],G={},z={Sheets:[]},j={}
for(Uu.lastIndex=0,n=n.replace(/<!--([^\u2603]*?)-->/gm,"");r=Uu.exec(n);)switch(r[3]){case"Data":if(c[c.length-1][1])break
"/"===r[1]?Mu(n.slice(w,r.index),D,T,"Comment"==c[c.length-1][0]?U:B,{c:k,r:I},x,H[k],C,W,t):(D="",T=Fu(r[0]),w=r.index+r[0].length)
break
case"Cell":if("/"===r[1]){if(L.length>0&&(B.c=L),(!t.sheetRows||t.sheetRows>I)&&void 0!==B.v&&(t.dense?(v[I]||(v[I]=[]),v[I][k]=B):v[Et(k)+pt(I)]=B),B.HRef&&(B.l={Target:B.HRef,Tooltip:B.HRefScreenTip},delete B.HRef,delete B.HRefScreenTip),B.MergeAcross||B.MergeDown){var Y=k+(0|parseInt(B.MergeAcross,10)),$=I+(0|parseInt(B.MergeDown,10))
F.push({s:{c:k,r:I},e:{c:Y,r:$}})}if(t.sheetStubs)if(B.MergeAcross||B.MergeDown){for(var Q=k;Q<=Y;++Q)for(var Z=I;Z<=$;++Z)(Q>k||Z>I)&&(t.dense?(v[Z]||(v[Z]=[]),v[Z][Q]={t:"z"}):v[Et(Q)+pt(Z)]={t:"z"})
k=Y+1}else++k
else B.MergeAcross?k=Y+1:++k}else(B=Pu(r[0])).Index&&(k=+B.Index-1),k<A.s.c&&(A.s.c=k),k>A.e.c&&(A.e.c=k),"/>"===r[0].slice(-2)&&++k,L=[]
break
case"Row":"/"===r[1]||"/>"===r[0].slice(-2)?(I<A.s.r&&(A.s.r=I),I>A.e.r&&(A.e.r=I),"/>"===r[0].slice(-2)&&(C=Fu(r[0])).Index&&(I=+C.Index-1),k=0,++I):((C=Fu(r[0])).Index&&(I=+C.Index-1),G={},"0"==C.AutoFitHeight&&(G.hpx=parseInt(C.Height,10),G.hpt=sf(G.hpx),X[I]=G),"1"==C.Hidden&&(G.hidden=!0,X[I]=G))
break
case"Worksheet":if("/"===r[1]){if((i=c.pop())[0]!==r[3])throw new Error("Bad state: "+i.join("|"))
m.push(S),A.s.r<=A.e.r&&A.s.c<=A.e.c&&(v["!ref"]=kt(A)),F.length&&(v["!merges"]=F),H.length>0&&(v["!cols"]=H),X.length>0&&(v["!rows"]=X),p[S]=v}else A={s:{r:2e6,c:2e6},e:{r:0,c:0}},I=k=0,c.push([r[3],!1]),i=Fu(r[0]),S=J(i.Name),v=t.dense?[]:{},F=[],W=[],X=[],j={name:S,Hidden:0},z.Sheets.push(j)
break
case"Table":if("/"===r[1]){if((i=c.pop())[0]!==r[3])throw new Error("Bad state: "+i.join("|"))}else{if("/>"==r[0].slice(-2))break
Fu(r[0]),c.push([r[3],!1]),H=[],V=!1}break
case"Style":"/"===r[1]?_u(x,R,t):R=Fu(r[0])
break
case"NumberFormat":R.nf=J(Fu(r[0]).Format||"General"),E[R.nf]&&(R.nf=E[R.nf])
for(var q=0;392!=q&&g._table[q]!=R.nf;++q);if(392==q)for(q=57;392!=q;++q)if(null==g._table[q]){g.load(R.nf,q)
break}break
case"Column":if("Table"!==c[c.length-1][0])break
if((l=Fu(r[0])).Hidden&&(l.hidden=!0,delete l.Hidden),l.Width&&(l.wpx=parseInt(l.Width,10)),!V&&l.wpx>10){V=!0,Zl=Yl
for(var ee=0;ee<H.length;++ee)H[ee]&&nf(H[ee])}V&&nf(l),H[l.Index-1||H.length]=l
for(var te=0;te<+l.Span;++te)H[H.length]=P(l)
break
case"NamedRange":z.Names||(z.Names=[])
var re=K(r[0]),ne={Name:re.Name,Ref:Hf(re.RefersTo.substr(1))}
z.Sheets.length>0&&(ne.Sheet=z.Sheets.length-1),z.Names.push(ne)
break
case"NamedCell":case"B":case"I":case"U":case"S":case"Sub":case"Sup":case"Span":case"Border":case"Alignment":case"Borders":break
case"Font":if("/>"===r[0].slice(-2))break
"/"===r[1]?D+=n.slice(O,r.index):O=r.index+r[0].length
break
case"Interior":if(!t.cellStyles)break
R.Interior=Fu(r[0])
break
case"Protection":break
case"Author":case"Title":case"Description":case"Created":case"Keywords":case"Subject":case"Category":case"Company":case"LastAuthor":case"LastSaved":case"LastPrinted":case"Version":case"Revision":case"TotalTime":case"HyperlinkBase":case"Manager":case"ContentStatus":case"Identifier":case"Language":if("/>"===r[0].slice(-2))break
"/"===r[1]?(h=y,u=r[3],d=n.slice(_,r.index),h[u=Lr[u]||u]=d):_=r.index+r[0].length
break
case"Paragraphs":break
case"Styles":case"Workbook":if("/"===r[1]){if((i=c.pop())[0]!==r[3])throw new Error("Bad state: "+i.join("|"))}else c.push([r[3],!1])
break
case"Comment":if("/"===r[1]){if((i=c.pop())[0]!==r[3])throw new Error("Bad state: "+i.join("|"));(f=U).t=f.v||"",f.t=f.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),f.v=f.w=f.ixfe=void 0,L.push(U)}else c.push([r[3],!1]),U={a:(i=Fu(r[0])).Author}
break
case"AutoFilter":if("/"===r[1]){if((i=c.pop())[0]!==r[3])throw new Error("Bad state: "+i.join("|"))}else if("/"!==r[0].charAt(r[0].length-2)){var ae=Fu(r[0])
v["!autofilter"]={ref:Hf(ae.Range).replace(/\$/g,"")},c.push([r[3],!0])}break
case"Name":break
case"ComponentOptions":case"DocumentProperties":case"CustomDocumentProperties":case"OfficeDocumentSettings":case"PivotTable":case"PivotCache":case"Names":case"MapInfo":case"PageBreaks":case"QueryTable":case"DataValidation":case"Sorting":case"Schema":case"data":case"ConditionalFormatting":case"SmartTagType":case"SmartTags":case"ExcelWorkbook":case"WorkbookOptions":case"WorksheetOptions":if("/"===r[1]){if((i=c.pop())[0]!==r[3])throw new Error("Bad state: "+i.join("|"))}else"/"!==r[0].charAt(r[0].length-2)&&c.push([r[3],!0])
break
default:if(0==c.length&&"document"==r[3])return od(n,t)
if(0==c.length&&"UOF"==r[3])return od(n,t)
var se=!0
switch(c[c.length-1][0]){case"OfficeDocumentSettings":switch(r[3]){case"AllowPNG":case"RemovePersonalInformation":case"DownloadComponents":case"LocationOfComponents":case"Colors":case"Color":case"Index":case"RGB":case"PixelsPerInch":case"TargetScreenSize":case"ReadOnlyRecommended":break
default:se=!1}break
case"ComponentOptions":switch(r[3]){case"Toolbar":case"HideOfficeLogo":case"SpreadsheetAutoFit":case"Label":case"Caption":case"MaxHeight":case"MaxWidth":case"NextSheetNumber":break
default:se=!1}break
case"ExcelWorkbook":switch(r[3]){case"WindowHeight":case"WindowWidth":case"WindowTopX":case"WindowTopY":case"TabRatio":case"ProtectStructure":case"ProtectWindows":case"ActiveSheet":case"DisplayInkNotes":case"FirstVisibleSheet":case"SupBook":case"SheetName":case"SheetIndex":case"SheetIndexFirst":case"SheetIndexLast":case"Dll":case"AcceptLabelsInFormulas":case"DoNotSaveLinkValues":case"Date1904":case"Iteration":case"MaxIterations":case"MaxChange":case"Path":case"Xct":case"Count":case"SelectedSheets":case"Calculation":case"Uncalced":case"StartupPrompt":case"Crn":case"ExternName":case"Formula":case"ColFirst":case"ColLast":case"WantAdvise":case"Boolean":case"Error":case"Text":case"OLE":case"NoAutoRecover":case"PublishObjects":case"DoNotCalculateBeforeSave":case"Number":case"RefModeR1C1":case"EmbedSaveSmartTags":break
default:se=!1}break
case"WorkbookOptions":switch(r[3]){case"OWCVersion":case"Height":case"Width":break
default:se=!1}break
case"WorksheetOptions":switch(r[3]){case"Visible":if("/>"===r[0].slice(-2));else if("/"===r[1])switch(n.slice(_,r.index)){case"SheetHidden":j.Hidden=1
break
case"SheetVeryHidden":j.Hidden=2}else _=r.index+r[0].length
break
case"Header":v["!margins"]||Bh(v["!margins"]={},"xlml"),v["!margins"].header=K(r[0]).Margin
break
case"Footer":v["!margins"]||Bh(v["!margins"]={},"xlml"),v["!margins"].footer=K(r[0]).Margin
break
case"PageMargins":var ie=K(r[0])
v["!margins"]||Bh(v["!margins"]={},"xlml"),ie.Top&&(v["!margins"].top=ie.Top),ie.Left&&(v["!margins"].left=ie.Left),ie.Right&&(v["!margins"].right=ie.Right),ie.Bottom&&(v["!margins"].bottom=ie.Bottom)
break
case"Unsynced":case"Print":case"Panes":case"Scale":case"Pane":case"Number":case"Layout":case"PageSetup":case"Selected":case"ProtectObjects":case"EnableSelection":case"ProtectScenarios":case"ValidPrinterInfo":case"HorizontalResolution":case"VerticalResolution":case"NumberofCopies":case"ActiveRow":case"ActiveCol":case"ActivePane":case"TopRowVisible":case"TopRowBottomPane":case"LeftColumnVisible":case"LeftColumnRightPane":case"FitToPage":case"RangeSelection":case"PaperSizeIndex":case"PageLayoutZoom":case"PageBreakZoom":case"FilterOn":case"DoNotDisplayGridlines":case"SplitHorizontal":case"SplitVertical":case"FreezePanes":case"FrozenNoSplit":case"FitWidth":case"FitHeight":case"CommentsLayout":case"Zoom":case"LeftToRight":case"Gridlines":case"AllowSort":case"AllowFilter":case"AllowInsertRows":case"AllowDeleteRows":case"AllowInsertCols":case"AllowDeleteCols":case"AllowInsertHyperlinks":case"AllowFormatCells":case"AllowSizeCols":case"AllowSizeRows":case"NoSummaryRowsBelowDetail":case"TabColorIndex":case"DoNotDisplayHeadings":case"ShowPageLayoutZoom":case"NoSummaryColumnsRightDetail":case"BlackAndWhite":case"DoNotDisplayZeros":case"DisplayPageBreak":case"RowColHeadings":case"DoNotDisplayOutline":case"NoOrientation":case"AllowUsePivotTables":case"ZeroHeight":case"ViewableRange":case"Selection":case"ProtectContents":break
default:se=!1}break
case"PivotTable":case"PivotCache":switch(r[3]){case"ImmediateItemsOnDrop":case"ShowPageMultipleItemLabel":case"CompactRowIndent":case"Location":case"PivotField":case"Orientation":case"LayoutForm":case"LayoutSubtotalLocation":case"LayoutCompactRow":case"Position":case"PivotItem":case"DataType":case"DataField":case"SourceName":case"ParentField":case"PTLineItems":case"PTLineItem":case"CountOfSameItems":case"Item":case"ItemType":case"PTSource":case"CacheIndex":case"ConsolidationReference":case"FileName":case"Reference":case"NoColumnGrand":case"NoRowGrand":case"BlankLineAfterItems":case"Hidden":case"Subtotal":case"BaseField":case"MapChildItems":case"Function":case"RefreshOnFileOpen":case"PrintSetTitles":case"MergeLabels":case"DefaultVersion":case"RefreshName":case"RefreshDate":case"RefreshDateCopy":case"VersionLastRefresh":case"VersionLastUpdate":case"VersionUpdateableMin":case"VersionRefreshableMin":case"Calculation":break
default:se=!1}break
case"PageBreaks":switch(r[3]){case"ColBreaks":case"ColBreak":case"RowBreaks":case"RowBreak":case"ColStart":case"ColEnd":case"RowEnd":break
default:se=!1}break
case"AutoFilter":switch(r[3]){case"AutoFilterColumn":case"AutoFilterCondition":case"AutoFilterAnd":case"AutoFilterOr":break
default:se=!1}break
case"QueryTable":switch(r[3]){case"Id":case"AutoFormatFont":case"AutoFormatPattern":case"QuerySource":case"QueryType":case"EnableRedirections":case"RefreshedInXl9":case"URLString":case"HTMLTables":case"Connection":case"CommandText":case"RefreshInfo":case"NoTitles":case"NextId":case"ColumnInfo":case"OverwriteCells":case"DoNotPromptForFile":case"TextWizardSettings":case"Source":case"Number":case"Decimal":case"ThousandSeparator":case"TrailingMinusNumbers":case"FormatSettings":case"FieldType":case"Delimiters":case"Tab":case"Comma":case"AutoFormatName":case"VersionLastEdit":case"VersionLastRefresh":break
default:se=!1}break
case"Sorting":case"ConditionalFormatting":case"DataValidation":switch(r[3]){case"Range":case"Type":case"Min":case"Max":case"Sort":case"Descending":case"Order":case"CaseSensitive":case"Value":case"ErrorStyle":case"ErrorMessage":case"ErrorTitle":case"CellRangeList":case"InputMessage":case"InputTitle":case"ComboHide":case"InputHide":case"Condition":case"Qualifier":case"UseBlank":case"Value1":case"Value2":case"Format":break
default:se=!1}break
case"MapInfo":case"Schema":case"data":switch(r[3]){case"Map":case"Entry":case"Range":case"XPath":case"Field":case"XSDType":case"FilterOn":case"Aggregate":case"ElementType":case"AttributeType":break
case"schema":case"element":case"complexType":case"datatype":case"all":case"attribute":case"extends":case"row":break
default:se=!1}break
case"SmartTags":break
default:se=!1}if(se)break
if(!c[c.length-1][1])throw"Unrecognized tag: "+r[3]+"|"+c.join("|")
if("CustomDocumentProperties"===c[c.length-1][0]){if("/>"===r[0].slice(-2))break
"/"===r[1]?yu(N,r,M,n.slice(_,r.index)):(M=r,_=r.index+r[0].length)
break}if(t.WTF)throw"Unrecognized tag: "+r[3]+"|"+c.join("|")}var ce={}
return t.bookSheets||t.bookProps||(ce.Sheets=p),ce.SheetNames=m,ce.Workbook=z,ce.SSF=g.get_table(),ce.Props=y,ce.Custprops=N,ce}function Vu(e,t){switch(Cd(t=t||{}),t.type||"base64"){case"base64":return Hu(l.decode(e),t)
case"binary":case"buffer":case"file":return Hu(e,t)
case"array":return Hu(e.map(Ou).join(""),t)}}function Wu(e,t){var r,n,a,s,i,c,o,l,f=[]
return e.Props&&f.push((r=e.Props,n=t,a=[],B(Mr).map(function(e){for(var t=0;t<xr.length;++t)if(xr[t][1]==e)return xr[t]
for(t=0;t<Fr.length;++t)if(Fr[t][1]==e)return Fr[t]
throw e}).forEach(function(e){if(null!=r[e[1]]){var t=n&&n.Props&&null!=n.Props[e[1]]?n.Props[e[1]]:r[e[1]]
switch(e[2]){case"date":t=new Date(t).toISOString().replace(/\.\d*Z/,"Z")}"number"==typeof t?t=String(t):!0===t||!1===t?t=t?"1":"0":t instanceof Date&&(t=new Date(t).toISOString().replace(/\.\d*Z/,"")),a.push(Se(Mr[e[1]]||e[1],t))}}),Ce("DocumentProperties",a.join(""),{xmlns:Xe.o}))),e.Custprops&&f.push((s=e.Props,i=e.Custprops,c=["Worksheets","SheetNames"],o="CustomDocumentProperties",l=[],s&&B(s).forEach(function(e){if(s.hasOwnProperty(e)){for(var t=0;t<xr.length;++t)if(e==xr[t][1])return
for(t=0;t<Fr.length;++t)if(e==Fr[t][1])return
for(t=0;t<c.length;++t)if(e==c[t])return
var r=s[e],n="string"
"number"==typeof r?(n="float",r=String(r)):!0===r||!1===r?(n="boolean",r=r?"1":"0"):r=String(r),l.push(Ce(re(e),r,{"dt:dt":n}))}}),i&&B(i).forEach(function(e){if(i.hasOwnProperty(e)){var t=i[e],r="string"
"number"==typeof t?(r="float",t=String(t)):!0===t||!1===t?(r="boolean",t=t?"1":"0"):t instanceof Date?(r="dateTime.tz",t=t.toISOString()):t=String(t),l.push(Ce(re(e),t,{"dt:dt":r}))}}),"<"+o+' xmlns="'+Xe.o+'">'+l.join("")+"</"+o+">")),f.join("")}function Xu(e,t,r,n,a,s,i){if(!e||void 0==e.v&&void 0==e.f)return"<Cell></Cell>"
var c={}
if(e.f&&(c["ss:Formula"]="="+te(Wf(e.f,i))),e.F&&e.F.substr(0,t.length)==t){var o=Ct(e.F.substr(t.length+1))
c["ss:ArrayRange"]="RC:R"+(o.r==i.r?"":"["+(o.r-i.r)+"]")+"C"+(o.c==i.c?"":"["+(o.c-i.c)+"]")}if(e.l&&e.l.Target&&(c["ss:HRef"]=te(e.l.Target),e.l.Tooltip&&(c["x:HRefScreenTip"]=te(e.l.Tooltip))),r["!merges"])for(var l=r["!merges"],f=0;f!=l.length;++f)l[f].s.c==i.c&&l[f].s.r==i.r&&(l[f].e.c>l[f].s.c&&(c["ss:MergeAcross"]=l[f].e.c-l[f].s.c),l[f].e.r>l[f].s.r&&(c["ss:MergeDown"]=l[f].e.r-l[f].s.r))
var h="",u=""
switch(e.t){case"z":return""
case"n":h="Number",u=String(e.v)
break
case"b":h="Boolean",u=e.v?"1":"0"
break
case"e":h="Error",u=Jt[e.v]
break
case"d":h="DateTime",u=new Date(e.v).toISOString()
break
case"s":h="String",u=te(e.v||"")}var d=null!=e.v?u:""
if(n&&"binary"==n.type&&"undefined"!=typeof cptable&&"s"==e.t){d=cptable.utils.encode(65001,d)
for(var p="",m=0;m<d.length;++m)p+=String.fromCharCode(d[m])
d=p}var g='<Data ss:Type="'+h+'">'+d+"</Data>"
return(e.c||[]).length>0&&(g+=e.c.map(function(e){return Ce("Comment",Ce("ss:Data",ie(e.t||""),{xmlns:"http://www.w3.org/TR/REC-html40"}),{"ss:Author":e.a})}).join("")),Ce("Cell",g,c)}function Gu(e,t,r){var n=[],a=r.SheetNames[e],s=r.Sheets[a],i=s?function(e,t,r,n){if(!e["!ref"])return""
var a=It(e["!ref"]),s=e["!merges"]||[],i=0,c=[]
e["!cols"]&&e["!cols"].forEach(function(e,t){nf(e)
var r=!!e.width,n=Sh(t,e),a={"ss:Index":t+1}
r&&(a["ss:Width"]=Jl(n.width)),e.hidden&&(a["ss:Hidden"]="1"),c.push(Ce("Column",null,a))})
for(var o,l,f,h=Array.isArray(e),u=a.s.r;u<=a.e.r;++u){for(var d=[(o=u,l=(e["!rows"]||[])[u],f=void 0,f='<Row ss:Index="'+(o+1)+'"',l&&(l.hpt&&!l.hpx&&(l.hpx=cf(l.hpt)),l.hpx&&(f+=' ss:AutoFitHeight="0" ss:Height="'+l.hpx+'"'),l.hidden&&(f+=' ss:Hidden="1"')),f+">")],p=a.s.c;p<=a.e.c;++p){var m=!1
for(i=0;i!=s.length;++i)if(!(s[i].s.c>p||s[i].s.r>u||s[i].e.c<p||s[i].e.r<u)){s[i].s.c==p&&s[i].s.r==u||(m=!0)
break}if(!m){var g={r:u,c:p},b=Tt(g),E=h?(e[u]||[])[p]:e[b]
d.push(Xu(E,b,e,t,0,0,g))}}d.push("</Row>"),d.length>2&&c.push(d.join(""))}return c.join("")}(s,t):""
return i.length>0&&n.push("<Table>"+i+"</Table>"),n.push(function(e,t,r,n){if(!e)return""
var a=[]
if(e["!margins"]&&(a.push("<PageSetup>"),e["!margins"].header&&a.push(Ce("Header",null,{"x:Margin":e["!margins"].header})),e["!margins"].footer&&a.push(Ce("Footer",null,{"x:Margin":e["!margins"].footer})),a.push(Ce("PageMargins",null,{"x:Bottom":e["!margins"].bottom||"0.75","x:Left":e["!margins"].left||"0.7","x:Right":e["!margins"].right||"0.7","x:Top":e["!margins"].top||"0.75"})),a.push("</PageSetup>")),n&&n.Workbook&&n.Workbook.Sheets&&n.Workbook.Sheets[r])if(n.Workbook.Sheets[r].Hidden)a.push(Ce("Visible",1==n.Workbook.Sheets[r].Hidden?"SheetHidden":"SheetVeryHidden",{}))
else{for(var s=0;s<r&&(!n.Workbook.Sheets[s]||n.Workbook.Sheets[s].Hidden);++s);s==r&&a.push("<Selected/>")}return e["!protect"]&&(a.push(Se("ProtectContents","True")),e["!protect"].objects&&a.push(Se("ProtectObjects","True")),e["!protect"].scenarios&&a.push(Se("ProtectScenarios","True")),null==e["!protect"].selectLockedCells||e["!protect"].selectLockedCells?null==e["!protect"].selectUnlockedCells||e["!protect"].selectUnlockedCells||a.push(Se("EnableSelection","UnlockedCells")):a.push(Se("EnableSelection","NoSelection")),[["formatColumns","AllowFormatCells"],["formatRows","AllowSizeCols"],["formatCells","AllowSizeRows"],["insertColumns","AllowInsertCols"],["insertRows","AllowInsertRows"],["insertHyperlinks","AllowInsertHyperlinks"],["deleteColumns","AllowDeleteCols"],["deleteRows","AllowDeleteRows"],["sort","AllowSort"],["autoFilter","AllowFilter"],["pivotTables","AllowUsePivotTables"]].forEach(function(t){e["!protect"][t[0]]&&a.push("<"+t[1]+"/>")})),0==a.length?"":Ce("WorksheetOptions",a.join(""),{xmlns:Xe.x})}(s,0,e,r)),n.join("")}function zu(e,t,r,n){var a=r,s=[],i=t.slice(t.l,t.l+a)
if(n&&n.enc&&n.enc.insitu_decrypt)switch(e.n){case"BOF":case"FilePass":case"FileLock":case"InterfaceHdr":case"RRDInfo":case"RRDHead":case"UsrExcl":break
default:if(0===i.length)break
n.enc.insitu_decrypt(i)}s.push(i),t.l+=a
for(var c=Ju[je(t,t.l)];null!=c&&"Continue"===c.n;)a=je(t,t.l+2),s.push(t.slice(t.l+4,t.l+4+a)),t.l+=4+a,c=Ju[je(t,t.l)]
var o=d(s)
nt(o,0)
var l=0
o.lens=[]
for(var f=0;f<s.length;++f)o.lens.push(l),l+=s[f].length
return e.f(o,o.length,n)}function ju(e,t,r){if("z"!==e.t&&e.XF){var n=0
try{n=e.z||e.XF.ifmt||0,t.cellNF&&(e.z=g._table[n])}catch(e){if(t.WTF)throw e}if(!t||!1!==t.cellText)try{if("e"===e.t?e.w=e.w||Jt[e.v]:0===n?"n"===e.t?(0|e.v)===e.v?e.w=g._general_int(e.v):e.w=g._general_num(e.v):e.w=g._general(e.v):e.w=g.format(n,e.v,{date1904:!!r}),t.cellDates&&n&&"n"==e.t&&g.is_date(g._table[n])){var a=g.parse_date_code(e.v)
a&&(e.t="d",e.v=new Date(Date.UTC(a.y,a.m-1,a.d,a.H,a.M,a.S,a.u)))}}catch(e){if(t.WTF)throw e}}}function Ku(e,t,r){return{v:e,ixfe:t,t:r}}function Yu(e,t){var r={opts:{}},a={}
null!=o&&null==t.dense&&(t.dense=o)
var s,i,c,l,f,h,u,d=t.dense?[]:{},p={},m={},b=null,E=[],v="",S={},B="",C={},T=[],w=!0,k=[],I=[],A={Sheets:[]},x={},R=function(e){return e<8?ur[e]:e<64?I[e-8]||ur[e]:ur[e]},D=function(e,t,r){if(!(H>1)&&w){var n,a,i,c
if(r.cellStyles&&t.XF&&t.XF.data&&(a=r,(c=(n=t).XF.data)&&c.patternType&&a&&a.cellStyles&&(n.s={},n.s.patternType=c.patternType,(i=jl(R(c.icvFore)))&&(n.s.fgColor={rgb:i}),(i=jl(R(c.icvBack)))&&(n.s.bgColor={rgb:i}))),s=e,B=Tt(e),m.s&&(e.r<m.s.r&&(m.s.r=e.r),e.c<m.s.c&&(m.s.c=e.c)),m.e&&(e.r+1>m.e.r&&(m.e.r=e.r+1),e.c+1>m.e.c&&(m.e.c=e.c+1)),r.cellFormula&&t.f)for(var o=0;o<T.length;++o)if(!(T[o][0].s.c>e.c||T[o][0].s.r>e.r||T[o][0].e.c<e.c||T[o][0].e.r<e.r)){t.F=kt(T[o][0]),T[o][0].s.c!=e.c&&delete t.f,T[o][0].s.r!=e.r&&delete t.f,t.f&&(t.f=""+ch(T[o][1],0,e,M,O))
break}r.sheetRows&&s.r>=r.sheetRows?w=!1:r.dense?(d[e.r]||(d[e.r]=[]),d[e.r][e.c]=t):d[B]=t}},O={enc:!1,sbcch:0,snames:[],sharedf:C,arrayf:T,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!t&&!!t.cellStyles,WTF:!!t&&!!t.wtf}
t.password&&(O.password=t.password)
var F=[],P=[],y=[],N=[],_=!1,M=[]
M.SheetNames=O.snames,M.sharedf=O.sharedf,M.arrayf=O.arrayf,M.names=[],M.XTI=[]
var L,U="",H=0,V=0,W=[],X=[]
for(O.codepage=1200,n(1200);e.l<e.length-1;){var G=e.l,z=e.read_shift(2)
if(0===z&&"EOF"===U)break
var j=e.l===e.length?0:e.read_shift(2),K=Ju[z]
if(K&&K.f){if(t.bookSheets&&"BoundSheet8"===U&&"BoundSheet8"!==K.n)break
if(U=K.n,2===K.r||12==K.r){var Y=e.read_shift(2)
if(j-=2,!O.enc&&Y!==z)throw"rt mismatch"
12==K.r&&(e.l+=10,j-=10)}var $
$="EOF"===K.n?K.f(e,j,O):zu(K,e,j,O)
var Q=K.n
switch(Q){case"Date1904":r.opts.Date1904=$
break
case"WriteProtect":r.opts.WriteProtect=!0
break
case"FilePass":if(O.enc||(e.l=0),O.enc=$,O.WTF&&console.error($),!t.password)throw new Error("File is password-protected")
if(null==$.valid)throw new Error("Encryption scheme unsupported")
if(!$.valid)throw new Error("Password is incorrect")
break
case"WriteAccess":O.lastuser=$
break
case"FileSharing":break
case"CodePage":21010===$?$=1200:32769===$&&($=1252),O.codepage=$,n($)
break
case"RRTabId":O.rrtabid=$
break
case"WinProtect":O.winlocked=$
break
case"Template":break
case"RefreshAll":r.opts.RefreshAll=$
break
case"BookBool":case"UsesELFs":case"MTRSettings":break
case"CalcCount":r.opts.CalcCount=$
break
case"CalcDelta":r.opts.CalcDelta=$
break
case"CalcIter":r.opts.CalcIter=$
break
case"CalcMode":r.opts.CalcMode=$
break
case"CalcPrecision":r.opts.CalcPrecision=$
break
case"CalcSaveRecalc":r.opts.CalcSaveRecalc=$
break
case"CalcRefMode":O.CalcRefMode=$
break
case"Uncalced":break
case"ForceFullCalculation":r.opts.FullCalc=$
break
case"WsBool":break
case"XF":k.push($)
break
case"ExtSST":case"BookExt":case"RichTextStream":case"BkHim":break
case"SupBook":M.push([$]),M[M.length-1].XTI=[]
break
case"ExternName":M[M.length-1].push($)
break
case"Index":break
case"Lbl":L={Name:$.Name,Ref:ch($.rgce,0,null,M,O)},$.itab>0&&(L.Sheet=$.itab-1),M.names.push(L),M[0]||(M[0]=[]),M[M.length-1].push($),"\r"==$.Name&&$.itab>0&&$.rgce&&$.rgce[0]&&$.rgce[0][0]&&"PtgArea3d"==$.rgce[0][0][0]&&(X[$.itab-1]={ref:kt($.rgce[0][0][1][2])})
break
case"ExternSheet":0==M.length&&(M[0]=[],M[0].XTI=[]),M[M.length-1].XTI=M[M.length-1].XTI.concat($),M.XTI=M.XTI.concat($)
break
case"NameCmt":if(O.biff<8)break
null!=L&&(L.Comment=$[1])
break
case"Protect":d["!protect"]=$
break
case"Password":0!==$&&O.WTF&&console.error("Password verifier: "+$)
break
case"Prot4Rev":case"Prot4RevPass":break
case"BoundSheet8":p[$.pos]=$,O.snames.push($.name)
break
case"EOF":if(--H)break
m.e&&(m.e.r>0&&m.e.c>0&&(m.e.r--,m.e.c--,d["!ref"]=kt(m),m.e.r++,m.e.c++),F.length>0&&(d["!merges"]=F),P.length>0&&(d["!objects"]=P),y.length>0&&(d["!cols"]=y),N.length>0&&(d["!rows"]=N),A.Sheets.push(x)),""===v?S=d:a[v]=d,d=t.dense?[]:{}
break
case"BOF":if(8!==O.biff||(9===z?O.biff=2:521===z?O.biff=3:1033===z?O.biff=4:1280===$.BIFFVer?O.biff=5:1536===$.BIFFVer?O.biff=8:2===$.BIFFVer?O.biff=2:7===$.BIFFVer&&(O.biff=2)),H++)break
if(w=!0,d=t.dense?[]:{},O.biff<5){""===v&&(v="Sheet1"),m={s:{r:0,c:0},e:{r:0,c:0}}
var Z={pos:e.l-j,name:v}
p[Z.pos]=Z,O.snames.push(v)}else v=(p[G]||{name:""}).name
32==$.dt&&(d["!type"]="chart"),F=[],P=[],T=[],O.arrayf=T,y=[],N=[],0,_=!1,x={Hidden:(p[G]||{hs:0}).hs,name:v}
break
case"Number":case"BIFF2NUM":case"BIFF2INT":"chart"==d["!type"]&&(t.dense?(d[$.r]||[])[$.c]:d[Tt({c:$.c,r:$.r})])&&++$.c,h={ixfe:$.ixfe,XF:k[$.ixfe]||{},v:$.val,t:"n"},V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:$.c,r:$.r},h,t)
break
case"BoolErr":h={ixfe:$.ixfe,XF:k[$.ixfe],v:$.val,t:$.t},V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:$.c,r:$.r},h,t)
break
case"RK":h={ixfe:$.ixfe,XF:k[$.ixfe],v:$.rknum,t:"n"},V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:$.c,r:$.r},h,t)
break
case"MulRk":for(var J=$.c;J<=$.C;++J){var q=$.rkrec[J-$.c][0]
h={ixfe:q,XF:k[q],v:$.rkrec[J-$.c][1],t:"n"},V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:J,r:$.r},h,t)}break
case"Formula":if("String"==$.val){b=$
break}if((h=Ku($.val,$.cell.ixfe,$.tt)).XF=k[h.ixfe],t.cellFormula){var ee=$.formula
if(ee&&ee[0]&&ee[0][0]&&"PtgExp"==ee[0][0][0]){var te=ee[0][0][1][0],re=ee[0][0][1][1],ne=Tt({r:te,c:re})
C[ne]?h.f=""+ch($.formula,0,$.cell,M,O):h.F=((t.dense?(d[te]||[])[re]:d[ne])||{}).F}else h.f=""+ch($.formula,0,$.cell,M,O)}V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D($.cell,h,t),b=$
break
case"String":if(!b)throw new Error("String record expects Formula")
b.val=$,(h=Ku($,b.cell.ixfe,"s")).XF=k[h.ixfe],t.cellFormula&&(h.f=""+ch(b.formula,0,b.cell,M,O)),V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D(b.cell,h,t),b=null
break
case"Array":T.push($)
var ae=Tt($[0].s)
if(i=t.dense?(d[$[0].s.r]||[])[$[0].s.c]:d[ae],t.cellFormula&&i){if(!b)break
if(!ae||!i)break
i.f=""+ch($[1],0,$[0],M,O),i.F=kt($[0])}break
case"ShrFmla":if(!w)break
if(!t.cellFormula)break
if(B){if(!b)break
C[Tt(b.cell)]=$[0],((i=t.dense?(d[b.cell.r]||[])[b.cell.c]:d[Tt(b.cell)])||{}).f=""+ch($[0],0,s,M,O)}break
case"LabelSst":(h=Ku(E[$.isst].t,$.ixfe,"s")).XF=k[h.ixfe],V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:$.c,r:$.r},h,t)
break
case"Blank":t.sheetStubs&&(h={ixfe:$.ixfe,XF:k[$.ixfe],t:"z"},V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:$.c,r:$.r},h,t))
break
case"MulBlank":if(t.sheetStubs)for(var se=$.c;se<=$.C;++se){var ie=$.ixfe[se-$.c]
h={ixfe:ie,XF:k[ie],t:"z"},V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:se,r:$.r},h,t)}break
case"RString":case"Label":case"BIFF2STR":(h=Ku($.val,$.ixfe,"s")).XF=k[h.ixfe],V>0&&(h.z=W[h.ixfe>>8&31]),ju(h,t,r.opts.Date1904),D({c:$.c,r:$.r},h,t)
break
case"Dimensions":1===H&&(m=$)
break
case"SST":E=$
break
case"Format":g.load($[1],$[0])
break
case"BIFF2FORMAT":W[V++]=$
for(var ce=0;ce<V+163&&g._table[ce]!=$;++ce);ce>=163&&g.load($,V+163)
break
case"MergeCells":F=F.concat($)
break
case"Obj":P[$.cmo[0]]=O.lastobj=$
break
case"TxO":O.lastobj.TxO=$
break
case"ImData":O.lastobj.ImData=$
break
case"HLink":for(f=$[0].s.r;f<=$[0].e.r;++f)for(l=$[0].s.c;l<=$[0].e.c;++l)(i=t.dense?(d[f]||[])[l]:d[Tt({c:l,r:f})])&&(i.l=$[1])
break
case"HLinkTooltip":for(f=$[0].s.r;f<=$[0].e.r;++f)for(l=$[0].s.c;l<=$[0].e.c;++l)(i=t.dense?(d[f]||[])[l]:d[Tt({c:l,r:f})])&&(i.l.Tooltip=$[1])
break
case"Note":if(O.biff<=5&&O.biff>=2)break
i=t.dense?(d[$[0].r]||[])[$[0].c]:d[Tt($[0])]
var oe=P[$[2]]
if(!i)break
i.c||(i.c=[]),c={a:$[1],t:oe.TxO.t},i.c.push(c)
break
default:switch(K.n){case"ClrtClient":break
case"XFExt":k[$.ixfe],$.ext.forEach(function(e){e[0]})
break
case"DefColWidth":$
break
case"DefaultRowHeight":$[1]
break
case"ColInfo":if(!O.cellStyles)break
for(;$.e>=$.s;)y[$.e--]={width:$.w/256},_||(_=!0,rf($.w/256)),nf(y[$.e+1])
break
case"Row":var le={}
$.hidden&&(N[$.r]=le,le.hidden=!0),$.hpt&&(N[$.r]=le,le.hpt=$.hpt,le.hpx=cf($.hpt))
break
case"LeftMargin":case"RightMargin":case"TopMargin":case"BottomMargin":d["!margins"]||Bh(d["!margins"]={}),d["!margins"][Q.slice(0,-6).toLowerCase()]=$
break
case"Setup":d["!margins"]||Bh(d["!margins"]={}),d["!margins"].header=$.header,d["!margins"].footer=$.footer
break
case"Header":case"Footer":case"HCenter":case"VCenter":case"Pls":case"GCW":case"LHRecord":case"DBCell":case"EntExU2":case"SxView":case"Sxvd":case"SXVI":case"SXVDEx":case"SxIvd":case"SXDI":case"SXLI":case"SXEx":case"QsiSXTag":case"Selection":case"Feat":break
case"FeatHdr":case"FeatHdr11":break
case"Feature11":case"Feature12":case"List12":break
case"Country":u=$
break
case"RecalcId":case"DxGCol":break
case"Fbi":case"Fbi2":case"GelFrame":case"Font":case"XFCRC":case"Style":case"StyleExt":break
case"Palette":I=$
break
case"Theme":case"ScenarioProtect":case"ObjProtect":case"CondFmt12":case"Table":case"TableStyles":case"TableStyle":case"TableStyleElement":case"SXStreamID":case"SXVS":case"DConRef":case"SXAddl":case"DConBin":case"DConName":case"SXPI":case"SxFormat":case"SxSelect":case"SxRule":case"SxFilt":case"SxItm":case"SxDXF":case"ScenMan":case"DCon":case"CellWatch":case"PrintRowCol":case"PrintGrid":case"PrintSize":case"XCT":case"CRN":case"Scl":case"SheetExt":case"SheetExtOptional":case"ObNoMacros":case"ObProj":case"CodeName":case"GUIDTypeLib":case"WOpt":case"PhoneticInfo":case"OleObjectSize":break
case"DXF":case"DXFN":case"DXFN12":case"DXFN12List":case"DXFN12NoCB":break
case"Dv":case"DVal":break
case"BRAI":case"Series":case"SeriesText":case"DConn":case"DbOrParamQry":case"DBQueryExt":case"IFmtRecord":break
case"CondFmt":case"CF":case"CF12":case"CFEx":case"Excel9File":case"Units":break
case"InterfaceHdr":case"Mms":case"InterfaceEnd":case"DSF":case"BuiltInFnGroupCount":break
case"Window1":case"Window2":case"HideObj":case"GridSet":case"Guts":case"UserBView":case"UserSViewBegin":case"UserSViewEnd":case"Pane":break
default:switch(K.n){case"Dat":case"Begin":case"End":case"StartBlock":case"EndBlock":case"Frame":case"Area":case"Axis":case"AxisLine":case"Tick":break
case"AxesUsed":case"CrtLayout12":case"CrtLayout12A":case"CrtLink":case"CrtLine":case"CrtMlFrt":case"CrtMlFrtContinue":break
case"LineFormat":case"AreaFormat":case"Chart":case"Chart3d":case"Chart3DBarShape":case"ChartFormat":case"ChartFrtInfo":break
case"PlotArea":case"PlotGrowth":break
case"SeriesList":case"SerParent":case"SerAuxTrend":break
case"DataFormat":case"SerToCrt":case"FontX":break
case"CatSerRange":case"AxcExt":case"SerFmt":case"ShtProps":break
case"DefaultText":case"Text":case"CatLab":case"DataLabExtContents":break
case"Legend":case"LegendException":break
case"Pie":case"Scatter":break
case"PieFormat":case"MarkerFormat":break
case"StartObject":case"EndObject":break
case"AlRuns":case"ObjectLink":case"SIIndex":break
case"AttachedLabel":case"YMult":break
case"Line":case"Bar":case"Surf":case"AxisParent":case"Pos":case"ValueRange":case"SXViewEx9":case"SXViewLink":case"PivotChartBits":case"SBaseRef":case"TextPropsStream":case"LnExt":case"MkrExt":case"CrtCoopt":break
case"Qsi":case"Qsif":case"Qsir":case"QsiSXTag":case"TxtQry":case"FilterMode":break
case"AutoFilter":case"AutoFilterInfo":case"AutoFilter12":case"DropDownObjIds":case"Sort":case"SortData":case"ShapePropsStream":break
case"MsoDrawing":case"MsoDrawingGroup":case"MsoDrawingSelection":break
case"WebPub":case"AutoWebPub":break
case"HeaderFooter":case"HFPicture":case"PLV":case"HorizontalPageBreaks":case"VerticalPageBreaks":break
case"Backup":case"CompressPictures":case"Compat12":break
case"Continue":case"ContinueFrt12":break
case"FrtFontList":case"FrtWrapper":break
default:switch(K.n){case"ExternCount":break
case"TabIdConf":case"Radar":case"RadarArea":case"DropBar":case"Intl":case"CoordList":case"SerAuxErrBar":break
case"BIFF2FONTCLR":case"BIFF2FMTCNT":case"BIFF2FONTXTRA":break
case"BIFF2XF":case"BIFF3XF":case"BIFF4XF":break
case"BIFF4FMTCNT":case"BIFF2ROW":case"BIFF2WINDOW2":break
case"SCENARIO":case"DConBin":case"PicF":case"DataLabExt":case"Lel":case"BopPop":case"BopPopCustom":case"RealTimeData":case"Name":break
default:if(t.WTF)throw"Unrecognized Record "+K.n}}}}}else e.l+=j}var fe=Object.keys(p).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return p[e].name})
fe.slice()
return r.Directory=fe,r.SheetNames=fe,t.bookSheets||(r.Sheets=a),r.Sheets&&X.forEach(function(e,t){r.Sheets[r.SheetNames[t]]["!autofilter"]=e}),r.Preamble=S,r.Strings=E,r.SSF=g.get_table(),O.enc&&(r.Encryption=O.enc),r.Metadata={},void 0!==u&&(r.Metadata.Country=u),M.names.length>0&&(A.Names=M.names),r.Workbook=A,r}function $u(e,t){var n,a,s
if(t||(t={}),Cd(t),r(),e.FullPaths?(n=e.find("!CompObj"),e.find("!SummaryInformation"),a=e.find("/Workbook")):(nt(e,0),a={content:e}),a||(a=e.find("/Book")),n&&function(e){var t,r={},n=e.content,a=28
switch(t=Pe(n,a),a+=4+Ye(n,a),r.UserType=t,t=Ye(n,a),a+=4,t){case 0:break
case 4294967295:case 4294967294:a+=4
break
default:if(t>400)throw new Error("Unsupported Clipboard: "+t.toString(16))
a+=t}if(a+=0===(t=Pe(n,a)).length?0:5+t.length,r.Reserved1=t,1907550708!==(t=Ye(n,a)))return r
throw new Error("Unsupported Unicode Extension")}(n),t.bookProps&&!t.bookSheets)s={}
else if(a)s=Yu(a.content,t,a.find)
else if(e.find("PerfectOffice_MAIN"))s=El.to_workbook(e.find("PerfectOffice_MAIN").content,t)
else{if(!e.find("NativeContent_MAIN"))throw new Error("Cannot find Workbook stream")
s=El.to_workbook(e.find("NativeContent_MAIN").content,t)}e.FullPaths&&function(e){var t=e.find("!DocumentSummaryInformation")
if(t)try{e.DocSummary=Yr(t,ir)}catch(e){}var r=e.find("!SummaryInformation")
if(r)try{e.Summary=Yr(r,cr)}catch(e){}}(e)
var i={}
for(var c in e.Summary)i[c]=e.Summary[c]
for(c in e.DocSummary)i[c]=e.DocSummary[c]
return s.Props=s.Custprops=i,t.bookFiles&&(s.cfb=e),s}var Qu={0:{n:"BrtRowHdr",f:function(e,t){var r={},n=e.l+t
r.r=e.read_shift(4),e.l+=4
var a=e.read_shift(2)
e.l+=1
var s=e.read_shift(1)
return e.l=n,16&s&&(r.hidden=!0),32&s&&(r.hpt=a/20),r}},1:{n:"BrtCellBlank",f:function(e,t){return[Mt(e)]}},2:{n:"BrtCellRk",f:function(e,t){return[Mt(e),jt(e),"n"]}},3:{n:"BrtCellError",f:function(e,t){return[Mt(e),e.read_shift(1),"e"]}},4:{n:"BrtCellBool",f:function(e,t){return[Mt(e),e.read_shift(1),"b"]}},5:{n:"BrtCellReal",f:function(e,t){return[Mt(e),Qt(e),"n"]}},6:{n:"BrtCellSt",f:function(e,t){return[Mt(e),Ft(e),"str"]}},7:{n:"BrtCellIsst",f:function(e,t){return[Mt(e),e.read_shift(4),"s"]}},8:{n:"BrtFmlaString",f:function(e,t,r){var n=e.l+t,a=Mt(e)
a.r=r["!row"]
var s=[a,Ft(e),"str"]
if(r.cellFormula){e.l+=2
var i=fh(e,n-e.l,r)
s[3]=ch(i,0,a,r.supbooks,r)}else e.l=n
return s}},9:{n:"BrtFmlaNum",f:function(e,t,r){var n=e.l+t,a=Mt(e)
a.r=r["!row"]
var s=[a,Qt(e),"n"]
if(r.cellFormula){e.l+=2
var i=fh(e,n-e.l,r)
s[3]=ch(i,0,a,r.supbooks,r)}else e.l=n
return s}},10:{n:"BrtFmlaBool",f:function(e,t,r){var n=e.l+t,a=Mt(e)
a.r=r["!row"]
var s=[a,e.read_shift(1),"b"]
if(r.cellFormula){e.l+=2
var i=fh(e,n-e.l,r)
s[3]=ch(i,0,a,r.supbooks,r)}else e.l=n
return s}},11:{n:"BrtFmlaError",f:function(e,t,r){var n=e.l+t,a=Mt(e)
a.r=r["!row"]
var s=[a,e.read_shift(1),"e"]
if(r.cellFormula){e.l+=2
var i=fh(e,n-e.l,r)
s[3]=ch(i,0,a,r.supbooks,r)}else e.l=n
return s}},16:{n:"BrtFRTArchID$",f:function(e,t){var r={}
return e.read_shift(4),r.ArchID=e.read_shift(4),e.l+=t-8,r}},19:{n:"BrtSSTItem",f:yt},20:{n:"BrtPCDIMissing",f:at},21:{n:"BrtPCDINumber",f:at},22:{n:"BrtPCDIBoolean",f:at},23:{n:"BrtPCDIError",f:at},24:{n:"BrtPCDIString",f:at},25:{n:"BrtPCDIDatetime",f:at},26:{n:"BrtPCDIIndex",f:at},27:{n:"BrtPCDIAMissing",f:at},28:{n:"BrtPCDIANumber",f:at},29:{n:"BrtPCDIABoolean",f:at},30:{n:"BrtPCDIAError",f:at},31:{n:"BrtPCDIAString",f:at},32:{n:"BrtPCDIADatetime",f:at},33:{n:"BrtPCRRecord",f:at},34:{n:"BrtPCRRecordDt",f:at},35:{n:"BrtFRTBegin",f:at},36:{n:"BrtFRTEnd",f:at},37:{n:"BrtACBegin",f:at},38:{n:"BrtACEnd",f:at},39:{n:"BrtName",f:function(e,t,r){var n=e.l+t,a=(e.read_shift(4),e.read_shift(1),e.read_shift(4)),s=Xt(e),i=hh(e,0,r),c=Vt(e)
e.l=n
var o={Name:s,Ptg:i,Comment:c}
return a<268435455&&(o.Sheet=a),o}},40:{n:"BrtIndexRowBlock",f:at},42:{n:"BrtIndexBlock",f:at},43:{n:"BrtFont",f:function(e,t,r){var n={}
n.sz=e.read_shift(2)/20
var a,s,i=(s=(a=e).read_shift(1),a.l++,{fItalic:2&s,fStrikeout:8&s,fOutline:16&s,fShadow:32&s,fCondense:64&s,fExtend:128&s})
switch(i.fCondense&&(n.condense=1),i.fExtend&&(n.extend=1),i.fShadow&&(n.shadow=1),i.fOutline&&(n.outline=1),i.fStrikeout&&(n.strike=1),i.fItalic&&(n.italic=1),700===e.read_shift(2)&&(n.bold=1),e.read_shift(2)){case 1:n.vertAlign="superscript"
break
case 2:n.vertAlign="subscript"}var c=e.read_shift(1)
0!=c&&(n.underline=c)
var o=e.read_shift(1)
o>0&&(n.family=o)
var l=e.read_shift(1)
switch(l>0&&(n.charset=l),e.l++,n.color=function(e,t){var r={},n=e.read_shift(1),a=n>>>1,s=e.read_shift(1),i=e.read_shift(2,"i"),c=e.read_shift(1),o=e.read_shift(1),l=e.read_shift(1)
switch(e.read_shift(1),a){case 0:r.auto=1
break
case 1:r.index=s
var f=ur[s]
f&&(r.rgb=f[0].toString(16)+f[1].toString(16)+f[2].toString(16))
break
case 2:r.rgb=c.toString(16)+o.toString(16)+l.toString(16)
break
case 3:r.theme=s}return 0!=i&&(r.tint=i>0?i/32767:i/32768),r}(e),e.read_shift(1)){case 1:n.scheme="major"
break
case 2:n.scheme="minor"}return n.name=Ft(e),n}},44:{n:"BrtFmt",f:function(e,t){return[e.read_shift(2),Ft(e)]}},45:{n:"BrtFill",f:at},46:{n:"BrtBorder",f:at},47:{n:"BrtXF",f:function(e,t){var r=e.read_shift(2),n=e.read_shift(2)
return at(e,t-4),{ixfe:r,ifmt:n}}},48:{n:"BrtStyle",f:at},49:{n:"BrtCellMeta",f:at},50:{n:"BrtValueMeta",f:at},51:{n:"BrtMdb",f:at},52:{n:"BrtBeginFmd",f:at},53:{n:"BrtEndFmd",f:at},54:{n:"BrtBeginMdx",f:at},55:{n:"BrtEndMdx",f:at},56:{n:"BrtBeginMdxTuple",f:at},57:{n:"BrtEndMdxTuple",f:at},58:{n:"BrtMdxMbrIstr",f:at},59:{n:"BrtStr",f:at},60:{n:"BrtColInfo",f:Fn},62:{n:"BrtCellRString",f:at},63:{n:"BrtCalcChainItem$",f:function(e,t){var r={}
r.i=e.read_shift(4)
var n={}
n.r=e.read_shift(4),n.c=e.read_shift(4),r.r=Tt(n)
var a=e.read_shift(1)
return 2&a&&(r.l="1"),8&a&&(r.a="1"),r}},64:{n:"BrtDVal",f:at},65:{n:"BrtSxvcellNum",f:at},66:{n:"BrtSxvcellStr",f:at},67:{n:"BrtSxvcellBool",f:at},68:{n:"BrtSxvcellErr",f:at},69:{n:"BrtSxvcellDate",f:at},70:{n:"BrtSxvcellNil",f:at},128:{n:"BrtFileVersion",f:at},129:{n:"BrtBeginSheet",f:at},130:{n:"BrtEndSheet",f:at},131:{n:"BrtBeginBook",f:at,p:0},132:{n:"BrtEndBook",f:at},133:{n:"BrtBeginWsViews",f:at},134:{n:"BrtEndWsViews",f:at},135:{n:"BrtBeginBookViews",f:at},136:{n:"BrtEndBookViews",f:at},137:{n:"BrtBeginWsView",f:at},138:{n:"BrtEndWsView",f:at},139:{n:"BrtBeginCsViews",f:at},140:{n:"BrtEndCsViews",f:at},141:{n:"BrtBeginCsView",f:at},142:{n:"BrtEndCsView",f:at},143:{n:"BrtBeginBundleShs",f:at},144:{n:"BrtEndBundleShs",f:at},145:{n:"BrtBeginSheetData",f:at},146:{n:"BrtEndSheetData",f:at},147:{n:"BrtWsProp",f:function(e,t){var r={}
return e.l+=19,r.name=Ut(e,t-19),r}},148:{n:"BrtWsDim",f:Gh,p:16},151:{n:"BrtPane",f:at},152:{n:"BrtSel",f:at},153:{n:"BrtWbProp",f:function(e,t){return e.read_shift(4),[e.read_shift(4),t>8?Ft(e):""]}},154:{n:"BrtWbFactoid",f:at},155:{n:"BrtFileRecover",f:at},156:{n:"BrtBundleSh",f:function(e,t){var r={}
return r.Hidden=e.read_shift(4),r.iTabID=e.read_shift(4),r.strRelID=Gt(e,t-8),r.name=Ft(e),r}},157:{n:"BrtCalcProp",f:at},158:{n:"BrtBookView",f:at},159:{n:"BrtBeginSst",f:function(e,t){return[e.read_shift(4),e.read_shift(4)]}},160:{n:"BrtEndSst",f:at},161:{n:"BrtBeginAFilter",f:Yt},162:{n:"BrtEndAFilter",f:at},163:{n:"BrtBeginFilterColumn",f:at},164:{n:"BrtEndFilterColumn",f:at},165:{n:"BrtBeginFilters",f:at},166:{n:"BrtEndFilters",f:at},167:{n:"BrtFilter",f:at},168:{n:"BrtColorFilter",f:at},169:{n:"BrtIconFilter",f:at},170:{n:"BrtTop10Filter",f:at},171:{n:"BrtDynamicFilter",f:at},172:{n:"BrtBeginCustomFilters",f:at},173:{n:"BrtEndCustomFilters",f:at},174:{n:"BrtCustomFilter",f:at},175:{n:"BrtAFilterDateGroupItem",f:at},176:{n:"BrtMergeCell",f:Kh},177:{n:"BrtBeginMergeCells",f:at},178:{n:"BrtEndMergeCells",f:at},179:{n:"BrtBeginPivotCacheDef",f:at},180:{n:"BrtEndPivotCacheDef",f:at},181:{n:"BrtBeginPCDFields",f:at},182:{n:"BrtEndPCDFields",f:at},183:{n:"BrtBeginPCDField",f:at},184:{n:"BrtEndPCDField",f:at},185:{n:"BrtBeginPCDSource",f:at},186:{n:"BrtEndPCDSource",f:at},187:{n:"BrtBeginPCDSRange",f:at},188:{n:"BrtEndPCDSRange",f:at},189:{n:"BrtBeginPCDFAtbl",f:at},190:{n:"BrtEndPCDFAtbl",f:at},191:{n:"BrtBeginPCDIRun",f:at},192:{n:"BrtEndPCDIRun",f:at},193:{n:"BrtBeginPivotCacheRecords",f:at},194:{n:"BrtEndPivotCacheRecords",f:at},195:{n:"BrtBeginPCDHierarchies",f:at},196:{n:"BrtEndPCDHierarchies",f:at},197:{n:"BrtBeginPCDHierarchy",f:at},198:{n:"BrtEndPCDHierarchy",f:at},199:{n:"BrtBeginPCDHFieldsUsage",f:at},200:{n:"BrtEndPCDHFieldsUsage",f:at},201:{n:"BrtBeginExtConnection",f:at},202:{n:"BrtEndExtConnection",f:at},203:{n:"BrtBeginECDbProps",f:at},204:{n:"BrtEndECDbProps",f:at},205:{n:"BrtBeginECOlapProps",f:at},206:{n:"BrtEndECOlapProps",f:at},207:{n:"BrtBeginPCDSConsol",f:at},208:{n:"BrtEndPCDSConsol",f:at},209:{n:"BrtBeginPCDSCPages",f:at},210:{n:"BrtEndPCDSCPages",f:at},211:{n:"BrtBeginPCDSCPage",f:at},212:{n:"BrtEndPCDSCPage",f:at},213:{n:"BrtBeginPCDSCPItem",f:at},214:{n:"BrtEndPCDSCPItem",f:at},215:{n:"BrtBeginPCDSCSets",f:at},216:{n:"BrtEndPCDSCSets",f:at},217:{n:"BrtBeginPCDSCSet",f:at},218:{n:"BrtEndPCDSCSet",f:at},219:{n:"BrtBeginPCDFGroup",f:at},220:{n:"BrtEndPCDFGroup",f:at},221:{n:"BrtBeginPCDFGItems",f:at},222:{n:"BrtEndPCDFGItems",f:at},223:{n:"BrtBeginPCDFGRange",f:at},224:{n:"BrtEndPCDFGRange",f:at},225:{n:"BrtBeginPCDFGDiscrete",f:at},226:{n:"BrtEndPCDFGDiscrete",f:at},227:{n:"BrtBeginPCDSDTupleCache",f:at},228:{n:"BrtEndPCDSDTupleCache",f:at},229:{n:"BrtBeginPCDSDTCEntries",f:at},230:{n:"BrtEndPCDSDTCEntries",f:at},231:{n:"BrtBeginPCDSDTCEMembers",f:at},232:{n:"BrtEndPCDSDTCEMembers",f:at},233:{n:"BrtBeginPCDSDTCEMember",f:at},234:{n:"BrtEndPCDSDTCEMember",f:at},235:{n:"BrtBeginPCDSDTCQueries",f:at},236:{n:"BrtEndPCDSDTCQueries",f:at},237:{n:"BrtBeginPCDSDTCQuery",f:at},238:{n:"BrtEndPCDSDTCQuery",f:at},239:{n:"BrtBeginPCDSDTCSets",f:at},240:{n:"BrtEndPCDSDTCSets",f:at},241:{n:"BrtBeginPCDSDTCSet",f:at},242:{n:"BrtEndPCDSDTCSet",f:at},243:{n:"BrtBeginPCDCalcItems",f:at},244:{n:"BrtEndPCDCalcItems",f:at},245:{n:"BrtBeginPCDCalcItem",f:at},246:{n:"BrtEndPCDCalcItem",f:at},247:{n:"BrtBeginPRule",f:at},248:{n:"BrtEndPRule",f:at},249:{n:"BrtBeginPRFilters",f:at},250:{n:"BrtEndPRFilters",f:at},251:{n:"BrtBeginPRFilter",f:at},252:{n:"BrtEndPRFilter",f:at},253:{n:"BrtBeginPNames",f:at},254:{n:"BrtEndPNames",f:at},255:{n:"BrtBeginPName",f:at},256:{n:"BrtEndPName",f:at},257:{n:"BrtBeginPNPairs",f:at},258:{n:"BrtEndPNPairs",f:at},259:{n:"BrtBeginPNPair",f:at},260:{n:"BrtEndPNPair",f:at},261:{n:"BrtBeginECWebProps",f:at},262:{n:"BrtEndECWebProps",f:at},263:{n:"BrtBeginEcWpTables",f:at},264:{n:"BrtEndECWPTables",f:at},265:{n:"BrtBeginECParams",f:at},266:{n:"BrtEndECParams",f:at},267:{n:"BrtBeginECParam",f:at},268:{n:"BrtEndECParam",f:at},269:{n:"BrtBeginPCDKPIs",f:at},270:{n:"BrtEndPCDKPIs",f:at},271:{n:"BrtBeginPCDKPI",f:at},272:{n:"BrtEndPCDKPI",f:at},273:{n:"BrtBeginDims",f:at},274:{n:"BrtEndDims",f:at},275:{n:"BrtBeginDim",f:at},276:{n:"BrtEndDim",f:at},277:{n:"BrtIndexPartEnd",f:at},278:{n:"BrtBeginStyleSheet",f:at},279:{n:"BrtEndStyleSheet",f:at},280:{n:"BrtBeginSXView",f:at},281:{n:"BrtEndSXVI",f:at},282:{n:"BrtBeginSXVI",f:at},283:{n:"BrtBeginSXVIs",f:at},284:{n:"BrtEndSXVIs",f:at},285:{n:"BrtBeginSXVD",f:at},286:{n:"BrtEndSXVD",f:at},287:{n:"BrtBeginSXVDs",f:at},288:{n:"BrtEndSXVDs",f:at},289:{n:"BrtBeginSXPI",f:at},290:{n:"BrtEndSXPI",f:at},291:{n:"BrtBeginSXPIs",f:at},292:{n:"BrtEndSXPIs",f:at},293:{n:"BrtBeginSXDI",f:at},294:{n:"BrtEndSXDI",f:at},295:{n:"BrtBeginSXDIs",f:at},296:{n:"BrtEndSXDIs",f:at},297:{n:"BrtBeginSXLI",f:at},298:{n:"BrtEndSXLI",f:at},299:{n:"BrtBeginSXLIRws",f:at},300:{n:"BrtEndSXLIRws",f:at},301:{n:"BrtBeginSXLICols",f:at},302:{n:"BrtEndSXLICols",f:at},303:{n:"BrtBeginSXFormat",f:at},304:{n:"BrtEndSXFormat",f:at},305:{n:"BrtBeginSXFormats",f:at},306:{n:"BrtEndSxFormats",f:at},307:{n:"BrtBeginSxSelect",f:at},308:{n:"BrtEndSxSelect",f:at},309:{n:"BrtBeginISXVDRws",f:at},310:{n:"BrtEndISXVDRws",f:at},311:{n:"BrtBeginISXVDCols",f:at},312:{n:"BrtEndISXVDCols",f:at},313:{n:"BrtEndSXLocation",f:at},314:{n:"BrtBeginSXLocation",f:at},315:{n:"BrtEndSXView",f:at},316:{n:"BrtBeginSXTHs",f:at},317:{n:"BrtEndSXTHs",f:at},318:{n:"BrtBeginSXTH",f:at},319:{n:"BrtEndSXTH",f:at},320:{n:"BrtBeginISXTHRws",f:at},321:{n:"BrtEndISXTHRws",f:at},322:{n:"BrtBeginISXTHCols",f:at},323:{n:"BrtEndISXTHCols",f:at},324:{n:"BrtBeginSXTDMPS",f:at},325:{n:"BrtEndSXTDMPs",f:at},326:{n:"BrtBeginSXTDMP",f:at},327:{n:"BrtEndSXTDMP",f:at},328:{n:"BrtBeginSXTHItems",f:at},329:{n:"BrtEndSXTHItems",f:at},330:{n:"BrtBeginSXTHItem",f:at},331:{n:"BrtEndSXTHItem",f:at},332:{n:"BrtBeginMetadata",f:at},333:{n:"BrtEndMetadata",f:at},334:{n:"BrtBeginEsmdtinfo",f:at},335:{n:"BrtMdtinfo",f:at},336:{n:"BrtEndEsmdtinfo",f:at},337:{n:"BrtBeginEsmdb",f:at},338:{n:"BrtEndEsmdb",f:at},339:{n:"BrtBeginEsfmd",f:at},340:{n:"BrtEndEsfmd",f:at},341:{n:"BrtBeginSingleCells",f:at},342:{n:"BrtEndSingleCells",f:at},343:{n:"BrtBeginList",f:at},344:{n:"BrtEndList",f:at},345:{n:"BrtBeginListCols",f:at},346:{n:"BrtEndListCols",f:at},347:{n:"BrtBeginListCol",f:at},348:{n:"BrtEndListCol",f:at},349:{n:"BrtBeginListXmlCPr",f:at},350:{n:"BrtEndListXmlCPr",f:at},351:{n:"BrtListCCFmla",f:at},352:{n:"BrtListTrFmla",f:at},353:{n:"BrtBeginExternals",f:at},354:{n:"BrtEndExternals",f:at},355:{n:"BrtSupBookSrc",f:at},357:{n:"BrtSupSelf",f:at},358:{n:"BrtSupSame",f:at},359:{n:"BrtSupTabs",f:at},360:{n:"BrtBeginSupBook",f:at},361:{n:"BrtPlaceholderName",f:at},362:{n:"BrtExternSheet",f:at},363:{n:"BrtExternTableStart",f:at},364:{n:"BrtExternTableEnd",f:at},366:{n:"BrtExternRowHdr",f:at},367:{n:"BrtExternCellBlank",f:at},368:{n:"BrtExternCellReal",f:at},369:{n:"BrtExternCellBool",f:at},370:{n:"BrtExternCellError",f:at},371:{n:"BrtExternCellString",f:at},372:{n:"BrtBeginEsmdx",f:at},373:{n:"BrtEndEsmdx",f:at},374:{n:"BrtBeginMdxSet",f:at},375:{n:"BrtEndMdxSet",f:at},376:{n:"BrtBeginMdxMbrProp",f:at},377:{n:"BrtEndMdxMbrProp",f:at},378:{n:"BrtBeginMdxKPI",f:at},379:{n:"BrtEndMdxKPI",f:at},380:{n:"BrtBeginEsstr",f:at},381:{n:"BrtEndEsstr",f:at},382:{n:"BrtBeginPRFItem",f:at},383:{n:"BrtEndPRFItem",f:at},384:{n:"BrtBeginPivotCacheIDs",f:at},385:{n:"BrtEndPivotCacheIDs",f:at},386:{n:"BrtBeginPivotCacheID",f:at},387:{n:"BrtEndPivotCacheID",f:at},388:{n:"BrtBeginISXVIs",f:at},389:{n:"BrtEndISXVIs",f:at},390:{n:"BrtBeginColInfos",f:at},391:{n:"BrtEndColInfos",f:at},392:{n:"BrtBeginRwBrk",f:at},393:{n:"BrtEndRwBrk",f:at},394:{n:"BrtBeginColBrk",f:at},395:{n:"BrtEndColBrk",f:at},396:{n:"BrtBrk",f:at},397:{n:"BrtUserBookView",f:at},398:{n:"BrtInfo",f:at},399:{n:"BrtCUsr",f:at},400:{n:"BrtUsr",f:at},401:{n:"BrtBeginUsers",f:at},403:{n:"BrtEOF",f:at},404:{n:"BrtUCR",f:at},405:{n:"BrtRRInsDel",f:at},406:{n:"BrtRREndInsDel",f:at},407:{n:"BrtRRMove",f:at},408:{n:"BrtRREndMove",f:at},409:{n:"BrtRRChgCell",f:at},410:{n:"BrtRREndChgCell",f:at},411:{n:"BrtRRHeader",f:at},412:{n:"BrtRRUserView",f:at},413:{n:"BrtRRRenSheet",f:at},414:{n:"BrtRRInsertSh",f:at},415:{n:"BrtRRDefName",f:at},416:{n:"BrtRRNote",f:at},417:{n:"BrtRRConflict",f:at},418:{n:"BrtRRTQSIF",f:at},419:{n:"BrtRRFormat",f:at},420:{n:"BrtRREndFormat",f:at},421:{n:"BrtRRAutoFmt",f:at},422:{n:"BrtBeginUserShViews",f:at},423:{n:"BrtBeginUserShView",f:at},424:{n:"BrtEndUserShView",f:at},425:{n:"BrtEndUserShViews",f:at},426:{n:"BrtArrFmla",f:function(e,t,r){var n=e.l+t,a=Kt(e),s=e.read_shift(1),i=[a]
if(i[2]=s,r.cellFormula){var c=lh(e,n-e.l,r)
i[1]=c}else e.l=n
return i}},427:{n:"BrtShrFmla",f:function(e,t,r){var n=e.l+t,a=[Yt(e,16)]
if(r.cellFormula){var s=uh(e,n-e.l,r)
a[1]=s,e.l=n}else e.l=n
return a}},428:{n:"BrtTable",f:at},429:{n:"BrtBeginExtConnections",f:at},430:{n:"BrtEndExtConnections",f:at},431:{n:"BrtBeginPCDCalcMems",f:at},432:{n:"BrtEndPCDCalcMems",f:at},433:{n:"BrtBeginPCDCalcMem",f:at},434:{n:"BrtEndPCDCalcMem",f:at},435:{n:"BrtBeginPCDHGLevels",f:at},436:{n:"BrtEndPCDHGLevels",f:at},437:{n:"BrtBeginPCDHGLevel",f:at},438:{n:"BrtEndPCDHGLevel",f:at},439:{n:"BrtBeginPCDHGLGroups",f:at},440:{n:"BrtEndPCDHGLGroups",f:at},441:{n:"BrtBeginPCDHGLGroup",f:at},442:{n:"BrtEndPCDHGLGroup",f:at},443:{n:"BrtBeginPCDHGLGMembers",f:at},444:{n:"BrtEndPCDHGLGMembers",f:at},445:{n:"BrtBeginPCDHGLGMember",f:at},446:{n:"BrtEndPCDHGLGMember",f:at},447:{n:"BrtBeginQSI",f:at},448:{n:"BrtEndQSI",f:at},449:{n:"BrtBeginQSIR",f:at},450:{n:"BrtEndQSIR",f:at},451:{n:"BrtBeginDeletedNames",f:at},452:{n:"BrtEndDeletedNames",f:at},453:{n:"BrtBeginDeletedName",f:at},454:{n:"BrtEndDeletedName",f:at},455:{n:"BrtBeginQSIFs",f:at},456:{n:"BrtEndQSIFs",f:at},457:{n:"BrtBeginQSIF",f:at},458:{n:"BrtEndQSIF",f:at},459:{n:"BrtBeginAutoSortScope",f:at},460:{n:"BrtEndAutoSortScope",f:at},461:{n:"BrtBeginConditionalFormatting",f:at},462:{n:"BrtEndConditionalFormatting",f:at},463:{n:"BrtBeginCFRule",f:at},464:{n:"BrtEndCFRule",f:at},465:{n:"BrtBeginIconSet",f:at},466:{n:"BrtEndIconSet",f:at},467:{n:"BrtBeginDatabar",f:at},468:{n:"BrtEndDatabar",f:at},469:{n:"BrtBeginColorScale",f:at},470:{n:"BrtEndColorScale",f:at},471:{n:"BrtCFVO",f:at},472:{n:"BrtExternValueMeta",f:at},473:{n:"BrtBeginColorPalette",f:at},474:{n:"BrtEndColorPalette",f:at},475:{n:"BrtIndexedColor",f:at},476:{n:"BrtMargins",f:function(e,t,r){return{left:Qt(e),right:Qt(e),top:Qt(e),bottom:Qt(e),header:Qt(e),footer:Qt(e)}}},477:{n:"BrtPrintOptions",f:at},478:{n:"BrtPageSetup",f:at},479:{n:"BrtBeginHeaderFooter",f:at},480:{n:"BrtEndHeaderFooter",f:at},481:{n:"BrtBeginSXCrtFormat",f:at},482:{n:"BrtEndSXCrtFormat",f:at},483:{n:"BrtBeginSXCrtFormats",f:at},484:{n:"BrtEndSXCrtFormats",f:at},485:{n:"BrtWsFmtInfo",f:at},486:{n:"BrtBeginMgs",f:at},487:{n:"BrtEndMGs",f:at},488:{n:"BrtBeginMGMaps",f:at},489:{n:"BrtEndMGMaps",f:at},490:{n:"BrtBeginMG",f:at},491:{n:"BrtEndMG",f:at},492:{n:"BrtBeginMap",f:at},493:{n:"BrtEndMap",f:at},494:{n:"BrtHLink",f:function(e,t,r){var n=e.l+t,a=Yt(e,16),s=Vt(e),i=Ft(e),c=Ft(e),o=Ft(e)
return e.l=n,{rfx:a,relId:s,loc:i,Tooltip:c,display:o}}},495:{n:"BrtBeginDCon",f:at},496:{n:"BrtEndDCon",f:at},497:{n:"BrtBeginDRefs",f:at},498:{n:"BrtEndDRefs",f:at},499:{n:"BrtDRef",f:at},500:{n:"BrtBeginScenMan",f:at},501:{n:"BrtEndScenMan",f:at},502:{n:"BrtBeginSct",f:at},503:{n:"BrtEndSct",f:at},504:{n:"BrtSlc",f:at},505:{n:"BrtBeginDXFs",f:at},506:{n:"BrtEndDXFs",f:at},507:{n:"BrtDXF",f:at},508:{n:"BrtBeginTableStyles",f:at},509:{n:"BrtEndTableStyles",f:at},510:{n:"BrtBeginTableStyle",f:at},511:{n:"BrtEndTableStyle",f:at},512:{n:"BrtTableStyleElement",f:at},513:{n:"BrtTableStyleClient",f:at},514:{n:"BrtBeginVolDeps",f:at},515:{n:"BrtEndVolDeps",f:at},516:{n:"BrtBeginVolType",f:at},517:{n:"BrtEndVolType",f:at},518:{n:"BrtBeginVolMain",f:at},519:{n:"BrtEndVolMain",f:at},520:{n:"BrtBeginVolTopic",f:at},521:{n:"BrtEndVolTopic",f:at},522:{n:"BrtVolSubtopic",f:at},523:{n:"BrtVolRef",f:at},524:{n:"BrtVolNum",f:at},525:{n:"BrtVolErr",f:at},526:{n:"BrtVolStr",f:at},527:{n:"BrtVolBool",f:at},528:{n:"BrtBeginCalcChain$",f:at},529:{n:"BrtEndCalcChain$",f:at},530:{n:"BrtBeginSortState",f:at},531:{n:"BrtEndSortState",f:at},532:{n:"BrtBeginSortCond",f:at},533:{n:"BrtEndSortCond",f:at},534:{n:"BrtBookProtection",f:at},535:{n:"BrtSheetProtection",f:at},536:{n:"BrtRangeProtection",f:at},537:{n:"BrtPhoneticInfo",f:at},538:{n:"BrtBeginECTxtWiz",f:at},539:{n:"BrtEndECTxtWiz",f:at},540:{n:"BrtBeginECTWFldInfoLst",f:at},541:{n:"BrtEndECTWFldInfoLst",f:at},542:{n:"BrtBeginECTwFldInfo",f:at},548:{n:"BrtFileSharing",f:at},549:{n:"BrtOleSize",f:at},550:{n:"BrtDrawing",f:Gt},551:{n:"BrtLegacyDrawing",f:at},552:{n:"BrtLegacyDrawingHF",f:at},553:{n:"BrtWebOpt",f:at},554:{n:"BrtBeginWebPubItems",f:at},555:{n:"BrtEndWebPubItems",f:at},556:{n:"BrtBeginWebPubItem",f:at},557:{n:"BrtEndWebPubItem",f:at},558:{n:"BrtBeginSXCondFmt",f:at},559:{n:"BrtEndSXCondFmt",f:at},560:{n:"BrtBeginSXCondFmts",f:at},561:{n:"BrtEndSXCondFmts",f:at},562:{n:"BrtBkHim",f:at},564:{n:"BrtColor",f:at},565:{n:"BrtBeginIndexedColors",f:at},566:{n:"BrtEndIndexedColors",f:at},569:{n:"BrtBeginMRUColors",f:at},570:{n:"BrtEndMRUColors",f:at},572:{n:"BrtMRUColor",f:at},573:{n:"BrtBeginDVals",f:at},574:{n:"BrtEndDVals",f:at},577:{n:"BrtSupNameStart",f:at},578:{n:"BrtSupNameValueStart",f:at},579:{n:"BrtSupNameValueEnd",f:at},580:{n:"BrtSupNameNum",f:at},581:{n:"BrtSupNameErr",f:at},582:{n:"BrtSupNameSt",f:at},583:{n:"BrtSupNameNil",f:at},584:{n:"BrtSupNameBool",f:at},585:{n:"BrtSupNameFmla",f:at},586:{n:"BrtSupNameBits",f:at},587:{n:"BrtSupNameEnd",f:at},588:{n:"BrtEndSupBook",f:at},589:{n:"BrtCellSmartTagProperty",f:at},590:{n:"BrtBeginCellSmartTag",f:at},591:{n:"BrtEndCellSmartTag",f:at},592:{n:"BrtBeginCellSmartTags",f:at},593:{n:"BrtEndCellSmartTags",f:at},594:{n:"BrtBeginSmartTags",f:at},595:{n:"BrtEndSmartTags",f:at},596:{n:"BrtSmartTagType",f:at},597:{n:"BrtBeginSmartTagTypes",f:at},598:{n:"BrtEndSmartTagTypes",f:at},599:{n:"BrtBeginSXFilters",f:at},600:{n:"BrtEndSXFilters",f:at},601:{n:"BrtBeginSXFILTER",f:at},602:{n:"BrtEndSXFilter",f:at},603:{n:"BrtBeginFills",f:at},604:{n:"BrtEndFills",f:at},605:{n:"BrtBeginCellWatches",f:at},606:{n:"BrtEndCellWatches",f:at},607:{n:"BrtCellWatch",f:at},608:{n:"BrtBeginCRErrs",f:at},609:{n:"BrtEndCRErrs",f:at},610:{n:"BrtCrashRecErr",f:at},611:{n:"BrtBeginFonts",f:at},612:{n:"BrtEndFonts",f:at},613:{n:"BrtBeginBorders",f:at},614:{n:"BrtEndBorders",f:at},615:{n:"BrtBeginFmts",f:at},616:{n:"BrtEndFmts",f:at},617:{n:"BrtBeginCellXFs",f:at},618:{n:"BrtEndCellXFs",f:at},619:{n:"BrtBeginStyles",f:at},620:{n:"BrtEndStyles",f:at},625:{n:"BrtBigName",f:at},626:{n:"BrtBeginCellStyleXFs",f:at},627:{n:"BrtEndCellStyleXFs",f:at},628:{n:"BrtBeginComments",f:at},629:{n:"BrtEndComments",f:at},630:{n:"BrtBeginCommentAuthors",f:at},631:{n:"BrtEndCommentAuthors",f:at},632:{n:"BrtCommentAuthor",f:Lf},633:{n:"BrtBeginCommentList",f:at},634:{n:"BrtEndCommentList",f:at},635:{n:"BrtBeginComment",f:function(e,t){var r={}
r.iauthor=e.read_shift(4)
var n=Yt(e,16)
return r.rfx=n.s,r.ref=Tt(n.s),e.l+=16,r}},636:{n:"BrtEndComment",f:at},637:{n:"BrtCommentText",f:Nt},638:{n:"BrtBeginOleObjects",f:at},639:{n:"BrtOleObject",f:at},640:{n:"BrtEndOleObjects",f:at},641:{n:"BrtBeginSxrules",f:at},642:{n:"BrtEndSxRules",f:at},643:{n:"BrtBeginActiveXControls",f:at},644:{n:"BrtActiveX",f:at},645:{n:"BrtEndActiveXControls",f:at},646:{n:"BrtBeginPCDSDTCEMembersSortBy",f:at},648:{n:"BrtBeginCellIgnoreECs",f:at},649:{n:"BrtCellIgnoreEC",f:at},650:{n:"BrtEndCellIgnoreECs",f:at},651:{n:"BrtCsProp",f:at},652:{n:"BrtCsPageSetup",f:at},653:{n:"BrtBeginUserCsViews",f:at},654:{n:"BrtEndUserCsViews",f:at},655:{n:"BrtBeginUserCsView",f:at},656:{n:"BrtEndUserCsView",f:at},657:{n:"BrtBeginPcdSFCIEntries",f:at},658:{n:"BrtEndPCDSFCIEntries",f:at},659:{n:"BrtPCDSFCIEntry",f:at},660:{n:"BrtBeginListParts",f:at},661:{n:"BrtListPart",f:at},662:{n:"BrtEndListParts",f:at},663:{n:"BrtSheetCalcProp",f:at},664:{n:"BrtBeginFnGroup",f:at},665:{n:"BrtFnGroup",f:at},666:{n:"BrtEndFnGroup",f:at},667:{n:"BrtSupAddin",f:at},668:{n:"BrtSXTDMPOrder",f:at},669:{n:"BrtCsProtection",f:at},671:{n:"BrtBeginWsSortMap",f:at},672:{n:"BrtEndWsSortMap",f:at},673:{n:"BrtBeginRRSort",f:at},674:{n:"BrtEndRRSort",f:at},675:{n:"BrtRRSortItem",f:at},676:{n:"BrtFileSharingIso",f:at},677:{n:"BrtBookProtectionIso",f:at},678:{n:"BrtSheetProtectionIso",f:at},679:{n:"BrtCsProtectionIso",f:at},680:{n:"BrtRangeProtectionIso",f:at},1024:{n:"BrtRwDescent",f:at},1025:{n:"BrtKnownFonts",f:at},1026:{n:"BrtBeginSXTupleSet",f:at},1027:{n:"BrtEndSXTupleSet",f:at},1028:{n:"BrtBeginSXTupleSetHeader",f:at},1029:{n:"BrtEndSXTupleSetHeader",f:at},1030:{n:"BrtSXTupleSetHeaderItem",f:at},1031:{n:"BrtBeginSXTupleSetData",f:at},1032:{n:"BrtEndSXTupleSetData",f:at},1033:{n:"BrtBeginSXTupleSetRow",f:at},1034:{n:"BrtEndSXTupleSetRow",f:at},1035:{n:"BrtSXTupleSetRowItem",f:at},1036:{n:"BrtNameExt",f:at},1037:{n:"BrtPCDH14",f:at},1038:{n:"BrtBeginPCDCalcMem14",f:at},1039:{n:"BrtEndPCDCalcMem14",f:at},1040:{n:"BrtSXTH14",f:at},1041:{n:"BrtBeginSparklineGroup",f:at},1042:{n:"BrtEndSparklineGroup",f:at},1043:{n:"BrtSparkline",f:at},1044:{n:"BrtSXDI14",f:at},1045:{n:"BrtWsFmtInfoEx14",f:at},1046:{n:"BrtBeginConditionalFormatting14",f:at},1047:{n:"BrtEndConditionalFormatting14",f:at},1048:{n:"BrtBeginCFRule14",f:at},1049:{n:"BrtEndCFRule14",f:at},1050:{n:"BrtCFVO14",f:at},1051:{n:"BrtBeginDatabar14",f:at},1052:{n:"BrtBeginIconSet14",f:at},1053:{n:"BrtDVal14",f:at},1054:{n:"BrtBeginDVals14",f:at},1055:{n:"BrtColor14",f:at},1056:{n:"BrtBeginSparklines",f:at},1057:{n:"BrtEndSparklines",f:at},1058:{n:"BrtBeginSparklineGroups",f:at},1059:{n:"BrtEndSparklineGroups",f:at},1061:{n:"BrtSXVD14",f:at},1062:{n:"BrtBeginSxview14",f:at},1063:{n:"BrtEndSxview14",f:at},1066:{n:"BrtBeginPCD14",f:at},1067:{n:"BrtEndPCD14",f:at},1068:{n:"BrtBeginExtConn14",f:at},1069:{n:"BrtEndExtConn14",f:at},1070:{n:"BrtBeginSlicerCacheIDs",f:at},1071:{n:"BrtEndSlicerCacheIDs",f:at},1072:{n:"BrtBeginSlicerCacheID",f:at},1073:{n:"BrtEndSlicerCacheID",f:at},1075:{n:"BrtBeginSlicerCache",f:at},1076:{n:"BrtEndSlicerCache",f:at},1077:{n:"BrtBeginSlicerCacheDef",f:at},1078:{n:"BrtEndSlicerCacheDef",f:at},1079:{n:"BrtBeginSlicersEx",f:at},1080:{n:"BrtEndSlicersEx",f:at},1081:{n:"BrtBeginSlicerEx",f:at},1082:{n:"BrtEndSlicerEx",f:at},1083:{n:"BrtBeginSlicer",f:at},1084:{n:"BrtEndSlicer",f:at},1085:{n:"BrtSlicerCachePivotTables",f:at},1086:{n:"BrtBeginSlicerCacheOlapImpl",f:at},1087:{n:"BrtEndSlicerCacheOlapImpl",f:at},1088:{n:"BrtBeginSlicerCacheLevelsData",f:at},1089:{n:"BrtEndSlicerCacheLevelsData",f:at},1090:{n:"BrtBeginSlicerCacheLevelData",f:at},1091:{n:"BrtEndSlicerCacheLevelData",f:at},1092:{n:"BrtBeginSlicerCacheSiRanges",f:at},1093:{n:"BrtEndSlicerCacheSiRanges",f:at},1094:{n:"BrtBeginSlicerCacheSiRange",f:at},1095:{n:"BrtEndSlicerCacheSiRange",f:at},1096:{n:"BrtSlicerCacheOlapItem",f:at},1097:{n:"BrtBeginSlicerCacheSelections",f:at},1098:{n:"BrtSlicerCacheSelection",f:at},1099:{n:"BrtEndSlicerCacheSelections",f:at},1100:{n:"BrtBeginSlicerCacheNative",f:at},1101:{n:"BrtEndSlicerCacheNative",f:at},1102:{n:"BrtSlicerCacheNativeItem",f:at},1103:{n:"BrtRangeProtection14",f:at},1104:{n:"BrtRangeProtectionIso14",f:at},1105:{n:"BrtCellIgnoreEC14",f:at},1111:{n:"BrtList14",f:at},1112:{n:"BrtCFIcon",f:at},1113:{n:"BrtBeginSlicerCachesPivotCacheIDs",f:at},1114:{n:"BrtEndSlicerCachesPivotCacheIDs",f:at},1115:{n:"BrtBeginSlicers",f:at},1116:{n:"BrtEndSlicers",f:at},1117:{n:"BrtWbProp14",f:at},1118:{n:"BrtBeginSXEdit",f:at},1119:{n:"BrtEndSXEdit",f:at},1120:{n:"BrtBeginSXEdits",f:at},1121:{n:"BrtEndSXEdits",f:at},1122:{n:"BrtBeginSXChange",f:at},1123:{n:"BrtEndSXChange",f:at},1124:{n:"BrtBeginSXChanges",f:at},1125:{n:"BrtEndSXChanges",f:at},1126:{n:"BrtSXTupleItems",f:at},1128:{n:"BrtBeginSlicerStyle",f:at},1129:{n:"BrtEndSlicerStyle",f:at},1130:{n:"BrtSlicerStyleElement",f:at},1131:{n:"BrtBeginStyleSheetExt14",f:at},1132:{n:"BrtEndStyleSheetExt14",f:at},1133:{n:"BrtBeginSlicerCachesPivotCacheID",f:at},1134:{n:"BrtEndSlicerCachesPivotCacheID",f:at},1135:{n:"BrtBeginConditionalFormattings",f:at},1136:{n:"BrtEndConditionalFormattings",f:at},1137:{n:"BrtBeginPCDCalcMemExt",f:at},1138:{n:"BrtEndPCDCalcMemExt",f:at},1139:{n:"BrtBeginPCDCalcMemsExt",f:at},1140:{n:"BrtEndPCDCalcMemsExt",f:at},1141:{n:"BrtPCDField14",f:at},1142:{n:"BrtBeginSlicerStyles",f:at},1143:{n:"BrtEndSlicerStyles",f:at},1144:{n:"BrtBeginSlicerStyleElements",f:at},1145:{n:"BrtEndSlicerStyleElements",f:at},1146:{n:"BrtCFRuleExt",f:at},1147:{n:"BrtBeginSXCondFmt14",f:at},1148:{n:"BrtEndSXCondFmt14",f:at},1149:{n:"BrtBeginSXCondFmts14",f:at},1150:{n:"BrtEndSXCondFmts14",f:at},1152:{n:"BrtBeginSortCond14",f:at},1153:{n:"BrtEndSortCond14",f:at},1154:{n:"BrtEndDVals14",f:at},1155:{n:"BrtEndIconSet14",f:at},1156:{n:"BrtEndDatabar14",f:at},1157:{n:"BrtBeginColorScale14",f:at},1158:{n:"BrtEndColorScale14",f:at},1159:{n:"BrtBeginSxrules14",f:at},1160:{n:"BrtEndSxrules14",f:at},1161:{n:"BrtBeginPRule14",f:at},1162:{n:"BrtEndPRule14",f:at},1163:{n:"BrtBeginPRFilters14",f:at},1164:{n:"BrtEndPRFilters14",f:at},1165:{n:"BrtBeginPRFilter14",f:at},1166:{n:"BrtEndPRFilter14",f:at},1167:{n:"BrtBeginPRFItem14",f:at},1168:{n:"BrtEndPRFItem14",f:at},1169:{n:"BrtBeginCellIgnoreECs14",f:at},1170:{n:"BrtEndCellIgnoreECs14",f:at},1171:{n:"BrtDxf14",f:at},1172:{n:"BrtBeginDxF14s",f:at},1173:{n:"BrtEndDxf14s",f:at},1177:{n:"BrtFilter14",f:at},1178:{n:"BrtBeginCustomFilters14",f:at},1180:{n:"BrtCustomFilter14",f:at},1181:{n:"BrtIconFilter14",f:at},1182:{n:"BrtPivotCacheConnectionName",f:at},2048:{n:"BrtBeginDecoupledPivotCacheIDs",f:at},2049:{n:"BrtEndDecoupledPivotCacheIDs",f:at},2050:{n:"BrtDecoupledPivotCacheID",f:at},2051:{n:"BrtBeginPivotTableRefs",f:at},2052:{n:"BrtEndPivotTableRefs",f:at},2053:{n:"BrtPivotTableRef",f:at},2054:{n:"BrtSlicerCacheBookPivotTables",f:at},2055:{n:"BrtBeginSxvcells",f:at},2056:{n:"BrtEndSxvcells",f:at},2057:{n:"BrtBeginSxRow",f:at},2058:{n:"BrtEndSxRow",f:at},2060:{n:"BrtPcdCalcMem15",f:at},2067:{n:"BrtQsi15",f:at},2068:{n:"BrtBeginWebExtensions",f:at},2069:{n:"BrtEndWebExtensions",f:at},2070:{n:"BrtWebExtension",f:at},2071:{n:"BrtAbsPath15",f:at},2072:{n:"BrtBeginPivotTableUISettings",f:at},2073:{n:"BrtEndPivotTableUISettings",f:at},2075:{n:"BrtTableSlicerCacheIDs",f:at},2076:{n:"BrtTableSlicerCacheID",f:at},2077:{n:"BrtBeginTableSlicerCache",f:at},2078:{n:"BrtEndTableSlicerCache",f:at},2079:{n:"BrtSxFilter15",f:at},2080:{n:"BrtBeginTimelineCachePivotCacheIDs",f:at},2081:{n:"BrtEndTimelineCachePivotCacheIDs",f:at},2082:{n:"BrtTimelineCachePivotCacheID",f:at},2083:{n:"BrtBeginTimelineCacheIDs",f:at},2084:{n:"BrtEndTimelineCacheIDs",f:at},2085:{n:"BrtBeginTimelineCacheID",f:at},2086:{n:"BrtEndTimelineCacheID",f:at},2087:{n:"BrtBeginTimelinesEx",f:at},2088:{n:"BrtEndTimelinesEx",f:at},2089:{n:"BrtBeginTimelineEx",f:at},2090:{n:"BrtEndTimelineEx",f:at},2091:{n:"BrtWorkBookPr15",f:at},2092:{n:"BrtPCDH15",f:at},2093:{n:"BrtBeginTimelineStyle",f:at},2094:{n:"BrtEndTimelineStyle",f:at},2095:{n:"BrtTimelineStyleElement",f:at},2096:{n:"BrtBeginTimelineStylesheetExt15",f:at},2097:{n:"BrtEndTimelineStylesheetExt15",f:at},2098:{n:"BrtBeginTimelineStyles",f:at},2099:{n:"BrtEndTimelineStyles",f:at},2100:{n:"BrtBeginTimelineStyleElements",f:at},2101:{n:"BrtEndTimelineStyleElements",f:at},2102:{n:"BrtDxf15",f:at},2103:{n:"BrtBeginDxfs15",f:at},2104:{n:"brtEndDxfs15",f:at},2105:{n:"BrtSlicerCacheHideItemsWithNoData",f:at},2106:{n:"BrtBeginItemUniqueNames",f:at},2107:{n:"BrtEndItemUniqueNames",f:at},2108:{n:"BrtItemUniqueName",f:at},2109:{n:"BrtBeginExtConn15",f:at},2110:{n:"BrtEndExtConn15",f:at},2111:{n:"BrtBeginOledbPr15",f:at},2112:{n:"BrtEndOledbPr15",f:at},2113:{n:"BrtBeginDataFeedPr15",f:at},2114:{n:"BrtEndDataFeedPr15",f:at},2115:{n:"BrtTextPr15",f:at},2116:{n:"BrtRangePr15",f:at},2117:{n:"BrtDbCommand15",f:at},2118:{n:"BrtBeginDbTables15",f:at},2119:{n:"BrtEndDbTables15",f:at},2120:{n:"BrtDbTable15",f:at},2121:{n:"BrtBeginDataModel",f:at},2122:{n:"BrtEndDataModel",f:at},2123:{n:"BrtBeginModelTables",f:at},2124:{n:"BrtEndModelTables",f:at},2125:{n:"BrtModelTable",f:at},2126:{n:"BrtBeginModelRelationships",f:at},2127:{n:"BrtEndModelRelationships",f:at},2128:{n:"BrtModelRelationship",f:at},2129:{n:"BrtBeginECTxtWiz15",f:at},2130:{n:"BrtEndECTxtWiz15",f:at},2131:{n:"BrtBeginECTWFldInfoLst15",f:at},2132:{n:"BrtEndECTWFldInfoLst15",f:at},2133:{n:"BrtBeginECTWFldInfo15",f:at},2134:{n:"BrtFieldListActiveItem",f:at},2135:{n:"BrtPivotCacheIdVersion",f:at},2136:{n:"BrtSXDI15",f:at},65535:{n:"",f:at}},Zu=function(e,t){for(var r=[],n=B(e),a=0;a!==n.length;++a)r[e[n[a]][t]]=n[a]
return r}(Qu,"n"),Ju={3:{n:"BIFF2NUM",f:function(e,t,r){var n=fn(e);++e.l
var a=Qt(e)
return n.t="n",n.val=a,n}},4:{n:"BIFF2STR",f:function(e,t,r){var n=fn(e);++e.l
var a=nn(e,0,r)
return n.t="str",n.val=a,n}},6:{n:"Formula",f:rh},9:{n:"BOF",f:Sn},10:{n:"EOF",f:qn},12:{n:"CalcCount",f:Hn},13:{n:"CalcMode",f:Xn},14:{n:"CalcPrecision",f:Gn},15:{n:"CalcRefMode",f:zn},16:{n:"CalcDelta",f:Vn},17:{n:"CalcIter",f:Wn},18:{n:"Protect",f:Ea},19:{n:"Password",f:ua},20:{n:"Header",f:ia},21:{n:"Footer",f:na},23:{n:"ExternSheet",f:function(e,t,r){if(r.biff<8)return qr(e,0,r)
for(var n,a=[],s=(e.l,e.read_shift(2));0!=s--;)a.push((n=e,[n.read_shift(2),n.read_shift(2,"i"),n.read_shift(2,"i")]))
return a}},24:{n:"Lbl",f:Rn},25:{n:"WinProtect",f:Ra},26:{n:"VerticalPageBreaks",f:Oa},27:{n:"HorizontalPageBreaks",f:Fa},28:{n:"Note",f:function(e,t,r){return function(e,t,r){if(!(r.biff<8)){var n=e.read_shift(2),a=e.read_shift(2),s=e.read_shift(2),i=e.read_shift(2),c=nn(e,0,r)
return r.biff<8&&e.read_shift(1),[{r:n,c:a},c,i,s]}}(e,0,r)}},29:{n:"Selection",f:Pa},34:{n:"Date1904",f:$n},35:{n:"ExternName",f:xn},38:{n:"LeftMargin",f:la},39:{n:"RightMargin",f:Sa},40:{n:"TopMargin",f:Ia},41:{n:"BottomMargin",f:Ln},42:{n:"PrintRowCol",f:pa},43:{n:"PrintGrid",f:da},47:{n:"FilePass",f:function(e,t,r){var n,a,s,i,c={Type:e.read_shift(2)}
return c.Type?zl(e,0,c):(a=r,s=c,i={key:Zr(n=e),verificationBytes:Zr(n)},a.password&&(i.verifier=Ll(a.password)),s.valid=i.verificationBytes===i.verifier,s.valid&&(s.insitu_decrypt=Gl(a.password))),c}},49:{n:"Font",f:function(e,t,r){var n={dyHeight:e.read_shift(2),fl:e.read_shift(2)}
switch(r&&r.biff||8){case 2:break
case 3:case 4:e.l+=2
break
default:e.l+=10}return n.name=qr(e,0,r),n}},51:{n:"PrintSize",f:ma},60:{n:"Continue",f:ya},61:{n:"Window1",f:function(e,t){return{Pos:[e.read_shift(2),e.read_shift(2)],Dim:[e.read_shift(2),e.read_shift(2)],Flags:e.read_shift(2),CurTab:e.read_shift(2),FirstTab:e.read_shift(2),Selected:e.read_shift(2),TabRatio:e.read_shift(2)}}},64:{n:"Backup",f:_n},65:{n:"Pane",f:Na},66:{n:"CodePage",f:Kn},77:{n:"Pls",f:_a},80:{n:"DCon",f:Ma},81:{n:"DConRef",f:La},82:{n:"DConName",f:Ua},85:{n:"DefColWidth",f:Qn},89:{n:"XCT",f:Ha},90:{n:"CRN",f:Va},91:{n:"FileSharing",f:Wa},92:{n:"WriteAccess",f:function(e,t,r){if(r.enc)return e.l+=t,""
var n=e.l,a=rn(e,0,r)
return e.read_shift(t+n-e.l),a}},93:{n:"Obj",f:function(e,t,r){if(r&&r.biff<8)return function(e,t,r){e.read_shift(4)
var n=e.read_shift(2),a=e.read_shift(2),s=e.read_shift(2)
e.read_shift(2),e.read_shift(2),e.read_shift(2),e.read_shift(2),e.read_shift(2),e.read_shift(2),e.read_shift(2),e.read_shift(2),e.read_shift(2),e.l+=6,t-=36
var i=[]
return i.push((On[n]||at)(e,t,r)),{cmo:[a,n,s],ft:i}}(e,t,r)
var n=gn(e)
return{cmo:n,ft:function(e,t,r){for(var n=e.l+t,a=[];e.l<n;){var s=e.read_shift(2)
e.l-=2
try{a.push(En[s](e,n-e.l))}catch(t){return e.l=n,a}}return e.l!=n&&(e.l=n),a}(e,t-22,n[1])}}},94:{n:"Uncalced",f:Xa},95:{n:"CalcSaveRecalc",f:jn},96:{n:"Template",f:Ga},97:{n:"Intl",f:za},99:{n:"ObjProtect",f:ha},125:{n:"ColInfo",f:Fn},128:{n:"Guts",f:function(e,t){e.l+=4
var r=[e.read_shift(2),e.read_shift(2)]
if(0!==r[0]&&r[0]--,0!==r[1]&&r[1]--,r[0]>7||r[1]>7)throw new Error("Bad Gutters: "+r.join("|"))
return r}},129:{n:"WsBool",f:ja},130:{n:"GridSet",f:aa},131:{n:"HCenter",f:sa},132:{n:"VCenter",f:xa},133:{n:"BoundSheet8",f:function(e,t,r){var n=e.read_shift(4),a=3&e.read_shift(1),s=e.read_shift(1)
switch(s){case 0:s="Worksheet"
break
case 1:s="Macrosheet"
break
case 2:s="Chartsheet"
break
case 6:s="VBAModule"}var i=qr(e,0,r)
return 0===i.length&&(i="Sheet1"),{pos:n,hs:a,dt:s,name:i}}},134:{n:"WriteProtect",f:Da},140:{n:"Country",f:function(e,t){var r,n=[]
return r=e.read_shift(2),n[0]=lr[r]||r,r=e.read_shift(2),n[1]=lr[r]||r,n}},141:{n:"HideObj",f:ca},144:{n:"Sort",f:Ka},146:{n:"Palette",f:function(e,t){for(var r=e.read_shift(2),n=[];r-- >0;)n.push(ln(e))
return n}},151:{n:"Sync",f:Ya},152:{n:"LPr",f:$a},153:{n:"DxGCol",f:Qa},154:{n:"FnGroupName",f:Za},155:{n:"FilterMode",f:Ja},156:{n:"BuiltInFnGroupCount",f:Un},157:{n:"AutoFilterInfo",f:qa},158:{n:"AutoFilter",f:es},160:{n:"Scl",f:Ta},161:{n:"Setup",f:function(e,t,r){var n={}
return e.l+=16,n.header=Qt(e),n.footer=Qt(e),e.l+=2,n}},174:{n:"ScenMan",f:ts},175:{n:"SCENARIO",f:rs},176:{n:"SxView",f:ns},177:{n:"Sxvd",f:as},178:{n:"SXVI",f:ss},180:{n:"SxIvd",f:is},181:{n:"SXLI",f:cs},182:{n:"SXPI",f:os},184:{n:"DocRoute",f:ls},185:{n:"RecipName",f:fs},189:{n:"MulRk",f:function(e,t){for(var r=e.l+t-2,n=e.read_shift(2),a=e.read_shift(2),s=[];e.l<r;)s.push(un(e))
if(e.l!==r)throw new Error("MulRK read error")
var i=e.read_shift(2)
if(s.length!=i-a+1)throw new Error("MulRK length mismatch")
return{r:n,c:a,C:i,rkrec:s}}},190:{n:"MulBlank",f:function(e,t){for(var r=e.l+t-2,n=e.read_shift(2),a=e.read_shift(2),s=[];e.l<r;)s.push(e.read_shift(2))
if(e.l!==r)throw new Error("MulBlank read error")
var i=e.read_shift(2)
if(s.length!=i-a+1)throw new Error("MulBlank length mismatch")
return{r:n,c:a,C:i,ixfe:s}}},193:{n:"Mms",f:fa},197:{n:"SXDI",f:hs},198:{n:"SXDB",f:us},199:{n:"SXFDB",f:ds},200:{n:"SXDBB",f:ps},201:{n:"SXNum",f:ms},202:{n:"SxBool",f:ka},203:{n:"SxErr",f:gs},204:{n:"SXInt",f:bs},205:{n:"SXString",f:Es},206:{n:"SXDtr",f:vs},207:{n:"SxNil",f:Ss},208:{n:"SXTbl",f:Bs},209:{n:"SXTBRGIITM",f:Cs},210:{n:"SxTbpg",f:Ts},211:{n:"ObProj",f:ws},213:{n:"SXStreamID",f:ks},215:{n:"DBCell",f:Is},216:{n:"SXRng",f:As},217:{n:"SxIsxoper",f:xs},218:{n:"BookBool",f:Rs},220:{n:"DbOrParamQry",f:Ds},221:{n:"ScenarioProtect",f:Ca},222:{n:"OleObjectSize",f:Os},224:{n:"XF",f:function(e,t,r){var n={}
return n.ifnt=e.read_shift(2),n.ifmt=e.read_shift(2),n.flags=e.read_shift(2),n.fStyle=n.flags>>2&1,n.data=kn(e,0,n.fStyle,r),n}},225:{n:"InterfaceHdr",f:function(e,t){return 0===t?1200:(e.read_shift(2),1200)}},226:{n:"InterfaceEnd",f:oa},227:{n:"SXVS",f:Fs},229:{n:"MergeCells",f:function(e,t){for(var r=[],n=e.read_shift(2);n--;)r.push(dn(e))
return r}},233:{n:"BkHim",f:Ps},235:{n:"MsoDrawingGroup",f:ys},236:{n:"MsoDrawing",f:Ns},237:{n:"MsoDrawingSelection",f:_s},239:{n:"PhoneticInfo",f:Ms},240:{n:"SxRule",f:Ls},241:{n:"SXEx",f:Us},242:{n:"SxFilt",f:Hs},244:{n:"SxDXF",f:Vs},245:{n:"SxItm",f:Ws},246:{n:"SxName",f:Xs},247:{n:"SxSelect",f:Gs},248:{n:"SXPair",f:zs},249:{n:"SxFmla",f:js},251:{n:"SxFormat",f:Ks},252:{n:"SST",f:function(e,t){for(var r=e.read_shift(4),n=e.read_shift(4),a=[],s=0;s!=n;++s)a.push(en(e))
return a.Count=r,a.Unique=n,a}},253:{n:"LabelSst",f:function(e,t){var r=fn(e)
return r.isst=e.read_shift(4),r}},255:{n:"ExtSST",f:function(e,t){var r={}
return r.dsst=e.read_shift(2),e.l+=t-2,r}},256:{n:"SXVDEx",f:Ys},259:{n:"SXFormula",f:$s},290:{n:"SXDBEx",f:Qs},311:{n:"RRDInsDel",f:Zs},312:{n:"RRDHead",f:Js},315:{n:"RRDChgCell",f:qs},317:{n:"RRTabId",f:Ba},318:{n:"RRDRenSheet",f:ei},319:{n:"RRSort",f:ti},320:{n:"RRDMove",f:ri},330:{n:"RRFormat",f:ni},331:{n:"RRAutoFmt",f:ai},333:{n:"RRInsertSh",f:si},334:{n:"RRDMoveBegin",f:ii},335:{n:"RRDMoveEnd",f:ci},336:{n:"RRDInsDelBegin",f:oi},337:{n:"RRDInsDelEnd",f:li},338:{n:"RRDConflict",f:fi},339:{n:"RRDDefName",f:hi},340:{n:"RRDRstEtxp",f:ui},351:{n:"LRng",f:di},352:{n:"UsesELFs",f:Aa},353:{n:"DSF",f:Zn},401:{n:"CUsr",f:pi},402:{n:"CbUsr",f:mi},403:{n:"UsrInfo",f:gi},404:{n:"UsrExcl",f:bi},405:{n:"FileLock",f:Ei},406:{n:"RRDInfo",f:vi},407:{n:"BCUsrs",f:Si},408:{n:"UsrChk",f:Bi},425:{n:"UserBView",f:Ci},426:{n:"UserSViewBegin",f:Ti},427:{n:"UserSViewEnd",f:wi},428:{n:"RRDUserView",f:ki},429:{n:"Qsi",f:Ii},430:{n:"SupBook",f:function(e,t,r){var n,a=e.l+t,s=e.read_shift(2),i=e.read_shift(2)
i>=1&&i<=255&&(n=tn(e,i))
var c=e.read_shift(a-e.l)
return r.sbcch=i,[i,s,n,c]}},431:{n:"Prot4Rev",f:ga},432:{n:"CondFmt",f:Ai},433:{n:"CF",f:xi},434:{n:"DVal",f:Ri},437:{n:"DConBin",f:Di},438:{n:"TxO",f:function(e,t,r){var n=e.l,a=""
try{e.l+=4
var s=(r.lastobj||{cmo:[0,0]}).cmo[1];-1==[0,5,7,11,12,14].indexOf(s)?e.l+=6:an(e,6,r)
var i=e.read_shift(2),c=(e.read_shift(2),vn(e,2),e.read_shift(2))
e.l+=c
for(var o=1;o<e.lens.length-1;++o){if(e.l-n!=e.lens[o])throw new Error("TxO: bad continue record")
var l=e[e.l]
if((a+=tn(e,e.lens[o+1]-e.lens[o]-1)).length>=(l?i:2*i))break}if(a.length!==i&&a.length!==2*i)throw new Error("cchText: "+i+" != "+a.length)
return e.l=n+t,{t:a}}catch(r){return e.l=n+t,{t:a}}}},439:{n:"RefreshAll",f:va},440:{n:"HLink",f:function(e,t){var r=dn(e)
return e.l+=16,[r,function(e,t){var r=e.l+t,n=e.read_shift(4)
if(2!==n)throw new Error("Unrecognized streamVersion: "+n)
var a,s,i,c,o=e.read_shift(2)
e.l+=2,16&o&&cn(e,e.l),128&o&&(a=cn(e,e.l)),257==(257&o)&&(s=cn(e,e.l)),1==(257&o)&&(i=sn(e,e.l)),8&o&&(c=cn(e,e.l)),32&o&&e.read_shift(16),64&o&&Ur(e),e.l=r
var l=a||s||i
return c&&(l+="#"+c),{Target:l}}(e,t-24)]}},441:{n:"Lel",f:Oi},442:{n:"CodeName",f:Fi},443:{n:"SXFDBType",f:Pi},444:{n:"Prot4RevPass",f:ba},445:{n:"ObNoMacros",f:yi},446:{n:"Dv",f:Ni},448:{n:"Excel9File",f:ea},449:{n:"RecalcId",f:function(e,t){return e.read_shift(2),e.read_shift(4)},r:2},450:{n:"EntExU2",f:Jn},512:{n:"Dimensions",f:wn},513:{n:"Blank",f:Mn},515:{n:"Number",f:function(e,t){var r=fn(e),n=Qt(e)
return r.val=n,r}},516:{n:"Label",f:function(e,t,r){e.l
var n=fn(e)
2==r.biff&&e.l++
var a=rn(e,e.l,r)
return n.val=a,n}},517:{n:"BoolErr",f:In},518:{n:"Formula",f:rh},519:{n:"String",f:wa},520:{n:"Row",f:function(e,t){var r={}
r.r=e.read_shift(2),r.c=e.read_shift(2),r.cnt=e.read_shift(2)-r.c
var n=e.read_shift(2)
e.l+=4
var a=e.read_shift(1)
return e.l+=3,32&a&&(r.hidden=!0),64&a&&(r.hpt=n/20),r}},523:{n:"Index",f:_i},545:{n:"Array",f:Dn},549:{n:"DefaultRowHeight",f:Cn},566:{n:"Table",f:Mi},574:{n:"Window2",f:Nn},638:{n:"RK",f:function(e,t){var r=e.read_shift(2),n=e.read_shift(2),a=un(e)
return{r:r,c:n,ixfe:a[0],rknum:a[1]}}},659:{n:"Style",f:Pn},1030:{n:"Formula",f:rh},1048:{n:"BigName",f:Li},1054:{n:"Format",f:function(e,t,r){return[e.read_shift(2),nn(e,0,r)]}},1084:{n:"ContinueBigName",f:Ui},1212:{n:"ShrFmla",f:function(e,t,r){pn(e),e.l++
var n=e.read_shift(1)
return[(a=e,s=t-=8,i=r,o=a.l+s,l=a.read_shift(2),f=ah(a,l,i),65535==l?[[],at(a,s-2)]:(s!==l+2&&(c=nh(a,o-l-2,f,i)),[f,c])),n]
var a,s,i,c,o,l,f}},2048:{n:"HLinkTooltip",f:function(e,t){e.l
e.read_shift(2)
var r=dn(e),n=e.read_shift((t-10)/2,"dbcs-cont")
return[r,n=n.replace(p,"")]}},2049:{n:"WebPub",f:Hi},2050:{n:"QsiSXTag",f:Vi},2051:{n:"DBQueryExt",f:Wi},2052:{n:"ExtString",f:Xi},2053:{n:"TxtQry",f:Gi},2054:{n:"Qsir",f:zi},2055:{n:"Qsif",f:ji},2056:{n:"RRDTQSIF",f:Ki},2057:{n:"BOF",f:Sn},2058:{n:"OleDbConn",f:Yi},2059:{n:"WOpt",f:$i},2060:{n:"SXViewEx",f:Qi},2061:{n:"SXTH",f:Zi},2062:{n:"SXPIEx",f:Ji},2063:{n:"SXVDTEx",f:qi},2064:{n:"SXViewEx9",f:ec},2066:{n:"ContinueFrt",f:tc},2067:{n:"RealTimeData",f:rc},2128:{n:"ChartFrtInfo",f:nc},2129:{n:"FrtWrapper",f:ac},2130:{n:"StartBlock",f:sc},2131:{n:"EndBlock",f:ic},2132:{n:"StartObject",f:cc},2133:{n:"EndObject",f:oc},2134:{n:"CatLab",f:lc},2135:{n:"YMult",f:fc},2136:{n:"SXViewLink",f:hc},2137:{n:"PivotChartBits",f:uc},2138:{n:"FrtFontList",f:dc},2146:{n:"SheetExt",f:pc},2147:{n:"BookExt",f:mc,r:12},2148:{n:"SXAddl",f:gc},2149:{n:"CrErr",f:bc},2150:{n:"HFPicture",f:Ec},2151:{n:"FeatHdr",f:ta},2152:{n:"Feat",f:vc},2154:{n:"DataLabExt",f:Sc},2155:{n:"DataLabExtContents",f:Bc},2156:{n:"CellWatch",f:Cc},2161:{n:"FeatHdr11",f:Tc},2162:{n:"Feature11",f:wc},2164:{n:"DropDownObjIds",f:kc},2165:{n:"ContinueFrt11",f:Ic},2166:{n:"DConn",f:Ac},2167:{n:"List12",f:xc},2168:{n:"Feature12",f:Rc},2169:{n:"CondFmt12",f:Dc},2170:{n:"CF12",f:Oc},2171:{n:"CFEx",f:Fc},2172:{n:"XFCRC",f:function(e,t){e.l+=2
var r={cxfs:0,crc:0}
return r.cxfs=e.read_shift(2),r.crc=e.read_shift(4),r},r:12},2173:{n:"XFExt",f:function(e,t){e.l,e.l+=2
var r=e.read_shift(2)
e.l+=2
for(var n=e.read_shift(2),a=[];n-- >0;)a.push(Pf(e,e.l))
return{ixfe:r,ext:a}},r:12},2174:{n:"AutoFilter12",f:Pc},2175:{n:"ContinueFrt12",f:yc},2180:{n:"MDTInfo",f:Nc},2181:{n:"MDXStr",f:_c},2182:{n:"MDXTuple",f:Mc},2183:{n:"MDXSet",f:Lc},2184:{n:"MDXProp",f:Uc},2185:{n:"MDXKPI",f:Hc},2186:{n:"MDB",f:Vc},2187:{n:"PLV",f:Wc},2188:{n:"Compat12",f:Yn,r:12},2189:{n:"DXF",f:Xc},2190:{n:"TableStyles",f:Gc,r:12},2191:{n:"TableStyle",f:zc},2192:{n:"TableStyleElement",f:jc},2194:{n:"StyleExt",f:yn},2195:{n:"NamePublish",f:Kc},2196:{n:"NameCmt",f:function(e,t,r){if(!(r.biff<8)){var n=e.read_shift(2),a=e.read_shift(2)
return[tn(e,n,r),tn(e,a,r)]}e.l+=t},r:12},2197:{n:"SortData",f:Yc},2198:{n:"Theme",f:function(e,t,r){124226!==e.read_shift(4)&&(e.l+=t-4)},r:12},2199:{n:"GUIDTypeLib",f:$c},2200:{n:"FnGrp12",f:Qc},2201:{n:"NameFnGrp12",f:Zc},2202:{n:"MTRSettings",f:function(e,t){return[0!==e.read_shift(4),0!==e.read_shift(4),e.read_shift(4)]},r:12},2203:{n:"CompressPictures",f:Bn},2204:{n:"HeaderFooter",f:Jc},2205:{n:"CrtLayout12",f:qc},2206:{n:"CrtMlFrt",f:eo},2207:{n:"CrtMlFrtContinue",f:to},2211:{n:"ForceFullCalculation",f:function(e,t){var r,n,a,s=(n=(r=e).read_shift(2),a=r.read_shift(2),r.l+=8,{type:n,flags:a})
if(2211!=s.type)throw new Error("Invalid Future Record "+s.type)
return 0!==e.read_shift(4)}},2212:{n:"ShapePropsStream",f:ro},2213:{n:"TextPropsStream",f:no},2214:{n:"RichTextStream",f:ao},2215:{n:"CrtLayout12A",f:so},4097:{n:"Units",f:io},4098:{n:"Chart",f:co},4099:{n:"Series",f:oo},4102:{n:"DataFormat",f:lo},4103:{n:"LineFormat",f:fo},4105:{n:"MarkerFormat",f:ho},4106:{n:"AreaFormat",f:uo},4107:{n:"PieFormat",f:po},4108:{n:"AttachedLabel",f:mo},4109:{n:"SeriesText",f:go},4116:{n:"ChartFormat",f:bo},4117:{n:"Legend",f:Eo},4118:{n:"SeriesList",f:vo},4119:{n:"Bar",f:So},4120:{n:"Line",f:Bo},4121:{n:"Pie",f:Co},4122:{n:"Area",f:To},4123:{n:"Scatter",f:wo},4124:{n:"CrtLine",f:ko},4125:{n:"Axis",f:Io},4126:{n:"Tick",f:Ao},4127:{n:"ValueRange",f:xo},4128:{n:"CatSerRange",f:Ro},4129:{n:"AxisLine",f:Do},4130:{n:"CrtLink",f:Oo},4132:{n:"DefaultText",f:Fo},4133:{n:"Text",f:Po},4134:{n:"FontX",f:ra},4135:{n:"ObjectLink",f:yo},4146:{n:"Frame",f:No},4147:{n:"Begin",f:_o},4148:{n:"End",f:Mo},4149:{n:"PlotArea",f:Lo},4154:{n:"Chart3d",f:Uo},4156:{n:"PicF",f:Ho},4157:{n:"DropBar",f:Vo},4158:{n:"Radar",f:Wo},4159:{n:"Surf",f:Xo},4160:{n:"RadarArea",f:Go},4161:{n:"AxisParent",f:zo},4163:{n:"LegendException",f:jo},4164:{n:"ShtProps",f:function(e,t,r){var n={area:!1}
if(5!=r.biff)return e.l+=t,n
var a=e.read_shift(1)
return e.l+=3,16&a&&(n.area=!0),n}},4165:{n:"SerToCrt",f:Ko},4166:{n:"AxesUsed",f:Yo},4168:{n:"SBaseRef",f:$o},4170:{n:"SerParent",f:Qo},4171:{n:"SerAuxTrend",f:Zo},4174:{n:"IFmtRecord",f:Jo},4175:{n:"Pos",f:qo},4176:{n:"AlRuns",f:el},4177:{n:"BRAI",f:tl},4187:{n:"SerAuxErrBar",f:rl},4188:{n:"ClrtClient",f:function(e,t){for(var r=e.read_shift(2),n=[];r-- >0;)n.push(ln(e))
return n}},4189:{n:"SerFmt",f:nl},4191:{n:"Chart3DBarShape",f:al},4192:{n:"Fbi",f:sl},4193:{n:"BopPop",f:il},4194:{n:"AxcExt",f:cl},4195:{n:"Dat",f:ol},4196:{n:"PlotGrowth",f:ll},4197:{n:"SIIndex",f:fl},4198:{n:"GelFrame",f:hl},4199:{n:"BopPopCustom",f:ul},4200:{n:"Fbi2",f:dl},0:{n:"Dimensions",f:wn},2:{n:"BIFF2INT",f:function(e,t){var r=fn(e);++e.l
var n=e.read_shift(2)
return r.t="n",r.val=n,r}},5:{n:"BoolErr",f:In},7:{n:"String",f:function(e,t){var r=e.read_shift(1)
return 0===r?(e.l++,""):e.read_shift(r,"sbcs-cont")}},8:{n:"BIFF2ROW",f:at},11:{n:"Index",f:_i},22:{n:"ExternCount",f:at},30:{n:"BIFF2FORMAT",f:Tn},31:{n:"BIFF2FMTCNT",f:at},32:{n:"BIFF2COLINFO",f:at},33:{n:"Array",f:Dn},37:{n:"DefaultRowHeight",f:Cn},50:{n:"BIFF2FONTXTRA",f:function(e,t){e.l+=6,e.l+=2,e.l+=1,e.l+=3,e.l+=1,e.l+=t-13}},62:{n:"BIFF2WINDOW2",f:at},69:{n:"BIFF2FONTCLR",f:at},86:{n:"BIFF4FMTCNT",f:at},126:{n:"RK",f:at},127:{n:"ImData",f:function(e,t,r){e.l
var n=e.read_shift(2),a=e.read_shift(2),s=e.read_shift(4),i={fmt:n,env:a,len:s,data:e.slice(e.l,e.l+s)}
return e.l+=s,i}},135:{n:"Addin",f:at},136:{n:"Edg",f:at},137:{n:"Pub",f:at},145:{n:"Sub",f:at},148:{n:"LHRecord",f:at},149:{n:"LHNGraph",f:at},150:{n:"Sound",f:at},169:{n:"CoordList",f:at},171:{n:"GCW",f:at},188:{n:"ShrFmla",f:at},194:{n:"AddMenu",f:at},195:{n:"DelMenu",f:at},214:{n:"RString",f:function(e,t,r){var n=e.l+t,a=fn(e),s=tn(e,e.read_shift(2),r)
return e.l=n,a.t="str",a.val=s,a}},223:{n:"UDDesc",f:at},234:{n:"TabIdConf",f:at},354:{n:"XL5Modify",f:at},421:{n:"FileSharing2",f:at},521:{n:"BOF",f:Sn},536:{n:"Lbl",f:Rn},547:{n:"ExternName",f:xn},561:{n:"Font",f:at},1033:{n:"BOF",f:Sn},2157:{n:"FeatInfo",f:at},2163:{n:"FeatInfo11",f:at},2177:{n:"SXAddl12",f:at},2240:{n:"AutoWebPub",f:at},2241:{n:"ListObj",f:at},2242:{n:"ListField",f:at},2243:{n:"ListDV",f:at},2244:{n:"ListCondFmt",f:at},2245:{n:"ListCF",f:at},2246:{n:"FMQry",f:at},2247:{n:"FMSQry",f:at},2248:{n:"PLV",f:at},2249:{n:"LnExt",f:at},2250:{n:"MkrExt",f:at},2251:{n:"CrtCoopt",f:at},67:{n:"BIFF2XF",f:at},579:{n:"BIFF3XF",f:at},1091:{n:"BIFF4XF",f:at},29282:{}}
function qu(e,t,r,n){var a=n||(r||[]).length,s=e.next(4+a)
s.write_shift(2,t),s.write_shift(2,a),a>0&&Ge(r)&&e.push(r)}function ed(e,t,r){return e||(e=st(7)),e.write_shift(2,t),e.write_shift(2,r),e.write_shift(1,0),e.write_shift(1,0),e.write_shift(1,0),e}function td(e,t,r,n,a){if(null!=t.v)switch(t.t){case"d":case"n":var s="d"==t.t?w(t.v):t.v
return void(s==(0|s)&&s>=0&&s<65536?qu(e,2,(v=r,S=n,B=s,C=st(9),ed(C,v,S),C.write_shift(2,B),C)):qu(e,3,(m=r,g=n,b=s,E=st(15),ed(E,m,g),E.write_shift(8,b,"f"),E)))
case"b":case"e":return void qu(e,5,(f=r,h=n,u=t.v,d=t.t,p=st(9),ed(p,f,h),"e"==d?(p.write_shift(1,u),p.write_shift(1,1)):(p.write_shift(1,u?1:0),p.write_shift(1,0)),p))
case"s":case"str":return void qu(e,4,(i=r,c=n,o=t.v,l=st(8+2*o.length),ed(l,i,c),l.write_shift(1,o.length),l.write_shift(o.length,o,"sbcs"),l.l<l.length?l.slice(0,l.l):l))}var i,c,o,l,f,h,u,d,p,m,g,b,E,v,S,B,C
qu(e,1,ed(null,r,n))}function rd(e,t){var r=t||{}
null!=o&&null==r.dense&&(r.dense=o)
for(var n=ct(),a=0,s=0;s<e.SheetNames.length;++s)e.SheetNames[s]==r.sheet&&(a=s)
if(0==a&&r.sheet&&e.SheetNames[0]!=r.sheet)throw new Error("Sheet not found: "+r.sheet)
return qu(n,9,function(e,t){if("biff2"!=t.bookType)throw"unsupported BIFF version"
var r=st(4)
return r.write_shift(2,2),r.write_shift(2,16),r}(0,r)),function(e,t,r,n,a){for(var s,i=Array.isArray(t),c=It(t["!ref"]||"A1"),o="",l=[],f=c.s.r;f<=c.e.r;++f){o=pt(f)
for(var h=c.s.c;h<=c.e.c;++h){f===c.s.r&&(l[h]=Et(h)),s=l[h]+o
var u=i?t[f][h]:t[s]
u&&td(e,u,f,h)}}}(n,e.Sheets[e.SheetNames[a]]),qu(n,10),n.end()}var nd=function(){function e(e,t){var r=t||{}
null!=o&&null==r.dense&&(r.dense=o)
var n=r.dense?[]:{},a=e.indexOf("<table"),s=e.indexOf("</table")
if(-1==a||-1==s)throw new Error("Invalid HTML: missing <table> / </table> pair")
var i=e.slice(a,s).split(/(:?<tr[^>]*>)/),c=-1,l=0,f=0,h=0,u={s:{r:1e7,c:1e7},e:{r:0,c:0}},d=[]
for(a=0;a<i.length;++a){var p=i[a].trim()
if("<tr"!=p.substr(0,3)){if("<td"==p.substr(0,3)){var m=p.split("</td>")
for(s=0;s<m.length;++s){var g=m[s].trim()
if("<td"==g.substr(0,3)){for(var b=g,E=0;"<"==b.charAt(0)&&(E=b.indexOf(">"))>-1;)b=b.slice(E+1)
for(;b.indexOf(">")>-1;)b=b.slice(0,b.lastIndexOf("<"))
var v=K(g.slice(0,g.indexOf(">")))
if(h=v.colspan?+v.colspan:1,((f=+v.rowspan)>0||h>1)&&d.push({s:{r:c,c:l},e:{r:c+(f||1)-1,c:l+h-1}}),b.length){if(b=J(b).replace(/[\r\n]/g,""),u.s.r>c&&(u.s.r=c),u.e.r<c&&(u.e.r=c),u.s.c>l&&(u.s.c=l),u.e.c<l&&(u.e.c=l),r.dense)n[c]||(n[c]=[]),Number(b)==Number(b)?n[c][l]={t:"n",v:+b}:n[c][l]={t:"s",v:b}
else{var S=Tt({r:c,c:l})
Number(b)==Number(b)?n[S]={t:"n",v:+b}:n[S]={t:"s",v:b}}l+=h}else l+=h}}}}else++c,l=0}return n["!ref"]=kt(u),n}function t(e,t,r,n){for(var a=e["!merges"]||[],s=[],i="<td"+(n.editable?' contenteditable="true"':"")+"></td>",c=t.s.c;c<=t.e.c;++c){for(var o=0,l=0,f=0;f<a.length;++f)if(!(a[f].s.r>r||a[f].s.c>c||a[f].e.r<r||a[f].e.c<c)){if(a[f].s.r<r||a[f].s.c<c){o=-1
break}o=a[f].e.r-a[f].s.r+1,l=a[f].e.c-a[f].s.c+1
break}if(!(o<0)){var h=Tt({r:r,c:c}),u=n.dense?(e[r]||[])[c]:e[h]
if(u&&null!=u.v){var d=u.h||te(u.w||(xt(u),u.w)||""),p={}
o>1&&(p.rowspan=o),l>1&&(p.colspan=l),n.editable&&(p.contenteditable="true"),s.push(Ce("td",d,p))}else s.push(i)}}return"<tr>"+s.join("")+"</tr>"}var r="<html><head><title>SheetJS Table Export</title></head><body><table>",n="</table></body></html>"
return{to_workbook:function(t,r){return Rt(e(t,r),r)},to_sheet:e,_row:t,BEGIN:r,END:n,from_sheet:function(e,a){var s=a||{},i=[],c=wt(e["!ref"])
s.dense=Array.isArray(e)
for(var o=c.s.r;o<=c.e.r;++o)i.push(t(e,c,o,s))
var l=null!=s.header?s.header:r,f=null!=s.footer?s.footer:n
return l+i.join("")+f}}}()
function ad(e,t){var r=t||{}
null!=o&&(r.dense=o)
for(var n=r.dense?[]:{},a=e.getElementsByTagName("tr"),s={s:{r:0,c:0},e:{r:a.length-1,c:0}},i=[],c=0,l=0,f=0,h=0,u=0,d=0;l<a.length;++l){var p=a[l].children
for(f=h=0;f<p.length;++f){var m=p[f],b=p[f].innerText||p[f].textContent
for(c=0;c<i.length;++c){var E=i[c]
E.s.c==h&&E.s.r<=l&&l<=E.e.r&&(h=E.e.c+1,c=-1)}d=+m.getAttribute("colspan")||1,((u=+m.getAttribute("rowspan"))>0||d>1)&&i.push({s:{r:l,c:h},e:{r:l+(u||1)-1,c:h+d-1}})
var v={t:"s",v:b}
null!=b&&b.length&&(isNaN(Number(b))?isNaN(N(b).getDate())||(v={t:"d",v:O(b)},r.cellDates||(v={t:"n",v:w(v.v)}),v.z=r.dateNF||g._table[14]):v={t:"n",v:Number(b)}),r.dense?(n[l]||(n[l]=[]),n[l][h]=v):n[Tt({c:h,r:l})]=v,s.e.c<h&&(s.e.c=h),h+=d}}return n["!merges"]=i,n["!ref"]=kt(s),n}var sd,id=(sd={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"]},function(e,t){var r=t||{}
null!=o&&null==r.dense&&(r.dense=o)
var n,a,s,i,c,l,f,h,u,d,p=Lu(e),m=[],g={name:""},b="",E=0,v={},S=[],B=r.dense?[]:{},C={value:""},T="",k=0,A=-1,x=-1,R={s:{r:1e6,c:1e7},e:{r:0,c:0}},D={},F=[],y={},N=[],_=[],M={},L="",U=0,H=1,V=!1,W=0
for(Uu.lastIndex=0,p=p.replace(/<!--([^\u2603]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");c=Uu.exec(p);)switch(c[3]=c[3].replace(/_.*$/,"")){case"table":case"工作表":"/"===c[1]?(R.e.c>=R.s.c&&R.e.r>=R.s.r&&(B["!ref"]=kt(R)),F.length&&(B["!merges"]=F),s.name=oe(s["名称"]||s.name),S.push(s.name),v[s.name]=B):"/"!==c[0].charAt(c[0].length-2)&&(s=K(c[0],!1),A=x=-1,R.s.r=R.s.c=1e7,R.e.r=R.e.c=0,B=r.dense?[]:{},F=[])
break
case"table-row":case"行":if("/"===c[1])break;(i=K(c[0],!1))["行号"]?A=i["行号"]-1:++A,x=-1
break
case"covered-table-cell":++x,r.sheetStubs&&(r.dense?(B[A]||(B[A]=[]),B[A][x]={t:"z"}):B[Tt({r:A,c:x})]={t:"z"})
break
case"table-cell":case"数据":if("/"===c[0].charAt(c[0].length-2))(C=K(c[0],!1))["number-columns-repeated"]?x+=parseInt(C["number-columns-repeated"],10):++x
else if("/"!==c[1]){if(H=1,++x>R.e.c&&(R.e.c=x),A>R.e.r&&(R.e.r=A),x<R.s.c&&(R.s.c=x),A<R.s.r&&(R.s.r=A),_=[],M={},l={t:(C=K(c[0],!1))["数据类型"]||C["value-type"],v:null},r.cellFormula)if(C.formula&&(C.formula=J(C.formula)),C["number-matrix-columns-spanned"]&&C["number-matrix-rows-spanned"]&&(y={s:{r:A,c:x},e:{r:A+(parseInt(C["number-matrix-rows-spanned"],10)||0)-1,c:x+(parseInt(C["number-matrix-columns-spanned"],10)||0)-1}},l.F=kt(y),N.push([y,l.F])),C.formula)l.f=(d=C.formula,"of:"==d.substr(0,3)&&(d=d.substr(3)),61==d.charCodeAt(0)&&61==(d=d.substr(1)).charCodeAt(0)&&(d=d.substr(1)),(d=(d=(d=d.replace(/COM\.MICROSOFT\./g,"")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(e,t){return t.replace(/\./g,"")})).replace(/\[.(#[A-Z]*[?!])\]/g,"$1")).replace(/[;~]/g,",").replace(/\|/g,";"))
else for(W=0;W<N.length;++W)A>=N[W][0].s.r&&A<=N[W][0].e.r&&x>=N[W][0].s.c&&x<=N[W][0].e.c&&(l.F=N[W][1])
switch((C["number-columns-spanned"]||C["number-rows-spanned"])&&(y={s:{r:A,c:x},e:{r:A+(parseInt(C["number-rows-spanned"],10)||0)-1,c:x+(parseInt(C["number-columns-spanned"],10)||0)-1}},F.push(y)),C["number-columns-repeated"]&&(H=parseInt(C["number-columns-repeated"],10)),l.t){case"boolean":l.t="b",l.v=ce(C["boolean-value"])
break
case"float":case"percentage":case"currency":l.t="n",l.v=parseFloat(C.value)
break
case"date":l.t="d",l.v=O(C["date-value"]),r.cellDates||(l.t="n",l.v=w(l.v)),l.z="m/d/yy"
break
case"time":l.t="n",l.v=I(C["time-value"])/86400
break
case"number":l.t="n",l.v=parseFloat(C["数据数值"])
break
default:if("string"!==l.t&&"text"!==l.t&&l.t)throw new Error("Unsupported value type "+l.t)
l.t="s",null!=C["string-value"]&&(T=J(C["string-value"]))}}else{if(V=!1,"s"===l.t&&(l.v=T||"",V=0==k),_.length>0&&(l.c=_,_=[]),T&&!1!==r.cellText&&(l.w=T),!V||r.sheetStubs){if(!(r.sheetRows&&r.sheetRows<A)){if(r.dense)for(B[A]||(B[A]=[]),B[A][x]=l;--H>0;)B[A][++x]=P(l)
else for(B[Tt({r:A,c:x})]=l;--H>0;)B[Tt({r:A,c:++x})]=P(l)
R.e.c<=x&&(R.e.c=x)}}else x+=H,H=0
l={},T=""}break
case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":if("/"===c[1]){if((n=m.pop())[0]!==c[3])throw"Bad state: "+n}else"/"!==c[0].charAt(c[0].length-2)&&m.push([c[3],!0])
break
case"annotation":if("/"===c[1]){if((n=m.pop())[0]!==c[3])throw"Bad state: "+n
M.t=T,M.a=L,_.push(M)}else"/"!==c[0].charAt(c[0].length-2)&&m.push([c[3],!1])
L="",U=0,T="",k=0
break
case"creator":"/"===c[1]?L=p.slice(U,c.index):U=c.index+c[0].length
break
case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":if("/"===c[1]){if((n=m.pop())[0]!==c[3])throw"Bad state: "+n}else"/"!==c[0].charAt(c[0].length-2)&&m.push([c[3],!1])
T="",k=0
break
case"scientific-number":case"currency-symbol":case"currency-style":break
case"number-style":case"percentage-style":case"date-style":case"time-style":if("/"===c[1]){if(D[g.name]=b,(n=m.pop())[0]!==c[3])throw"Bad state: "+n}else"/"!==c[0].charAt(c[0].length-2)&&(b="",g=K(c[0],!1),m.push([c[3],!0]))
break
case"script":case"libraries":case"automatic-styles":case"master-styles":break
case"default-style":case"page-layout":case"style":case"map":case"font-face":case"paragraph-properties":case"table-properties":case"table-column-properties":case"table-row-properties":case"table-cell-properties":break
case"number":switch(m[m.length-1][0]){case"time-style":case"date-style":a=K(c[0],!1),b+=sd[c[3]]["long"===a.style?1:0]}break
case"fraction":break
case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(m[m.length-1][0]){case"time-style":case"date-style":a=K(c[0],!1),b+=sd[c[3]]["long"===a.style?1:0]}break
case"boolean-style":case"boolean":case"text-style":break
case"text":if("/>"===c[0].slice(-2))break
if("/"===c[1])switch(m[m.length-1][0]){case"number-style":case"date-style":case"time-style":b+=p.slice(E,c.index)}else E=c.index+c[0].length
break
case"text-content":case"text-properties":break
case"body":case"电子表格":case"forms":case"table-column":case"null-date":case"graphic-properties":case"calculation-settings":case"named-expressions":case"named-range":case"named-expression":case"sort":case"sort-by":case"sort-groups":case"span":case"line-break":break
case"p":case"文本串":"/"===c[1]?T=(T.length>0?T+"\n":"")+(u=p.slice(k,c.index),J(u.replace(/<text:s\/>/g," ").replace(/<[^>]*>/g,""))):(K(c[0],!1),k=c.index+c[0].length)
break
case"database-range":if("/"===c[1])break
try{var X=(f=K(c[0])["target-range-address"],h=void 0,[(h=f.split(":"))[0].split(".")[0],h[0].split(".")[1]+":"+h[1].split(".")[1]])
v[X[0]]["!autofilter"]={ref:X[1]}}catch(e){}break
case"s":case"date":case"object":break
case"title":case"标题":case"desc":case"table-source":case"iteration":case"content-validations":case"content-validation":case"error-message":case"database-ranges":case"filter":case"filter-and":case"filter-or":case"filter-condition":case"list-level-style-bullet":case"list-level-style-number":case"list-level-properties":break
case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":case"event-listener":break
case"initial-creator":case"creation-date":case"generator":case"document-statistic":case"user-defined":case"config-item":case"page-number":case"page-count":case"time":break
case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":case"rect":break
case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":case"properties":case"property":case"a":case"table-protection":case"data-pilot-grand-total":break
default:if("dc:"===c[2])break
if("draw:"===c[2])break
if("style:"===c[2])break
if("calcext:"===c[2])break
if("loext:"===c[2])break
if("uof:"===c[2])break
if("表:"===c[2])break
if("字:"===c[2])break
if(r.WTF)throw new Error(c)}return{Sheets:v,SheetNames:S}})
function cd(e,t){t=t||{}
var r=!!L(e,"objectdata")
if(r)(function(e,t){for(var r,n,a=Lu(e);r=Uu.exec(a);)switch(r[3]){case"manifest":break
case"file-entry":if("/"==(n=K(r[0],!1)).path&&n.type!==wr)throw new Error("This OpenDocument is not a spreadsheet")
break
case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption")
default:if(t&&t.WTF)throw r}})(H(e,"META-INF/manifest.xml"),t)
var n=V(e,"content.xml")
if(!n)throw new Error("Missing content.xml in "+(r?"ODS":"UOF")+" file")
return id(r?n:oe(n),t)}function od(e,t){return id(e,t)}var ld,fd,hd=function(e,t){return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-styles xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" office:version="1.2"></office:document-styles>'},ud=(ld="          <table:table-cell />\n",fd=function(e,t,r,n){var a=[]
a.push('      <table:table table:name="'+te(t.SheetNames[r])+'">\n')
var s=0,i=0,c=wt(e["!ref"]),o=e["!merges"]||[],l=0,f=Array.isArray(e)
for(s=0;s<c.s.r;++s)a.push("        <table:table-row></table:table-row>\n")
for(;s<=c.e.r;++s){for(a.push("        <table:table-row>\n"),i=0;i<c.s.c;++i)a.push(ld)
for(;i<=c.e.c;++i){var h=!1,u={},d=""
for(l=0;l!=o.length;++l)if(!(o[l].s.c>i||o[l].s.r>s||o[l].e.c<i||o[l].e.r<s)){o[l].s.c==i&&o[l].s.r==s||(h=!0),u["table:number-columns-spanned"]=o[l].e.c-o[l].s.c+1,u["table:number-rows-spanned"]=o[l].e.r-o[l].s.r+1
break}if(h)a.push("          <table:covered-table-cell/>\n")
else{var p=Tt({r:s,c:i}),m=f?(e[s]||[])[i]:e[p]
if(m&&m.f&&(u["table:formula"]=te(("of:="+m.f.replace(Vf,"$1[.$2$3$4$5]").replace(/\]:\[/g,":")).replace(/;/g,"|").replace(/,/g,";")),m.F&&m.F.substr(0,p.length)==p)){var g=wt(m.F)
u["table:number-matrix-columns-spanned"]=g.e.c-g.s.c+1,u["table:number-matrix-rows-spanned"]=g.e.r-g.s.r+1}if(m){switch(m.t){case"b":d=m.v?"TRUE":"FALSE",u["office:value-type"]="boolean",u["office:boolean-value"]=m.v?"true":"false"
break
case"n":d=m.w||String(m.v||0),u["office:value-type"]="float",u["office:value"]=m.v||0
break
case"s":case"str":d=te(m.v),u["office:value-type"]="string"
break
case"d":d=m.w||O(m.v).toISOString(),u["office:value-type"]="date",u["office:date-value"]=O(m.v).toISOString(),u["table:style-name"]="ce1"
break
default:a.push(ld)
continue}a.push("          "+Ce("table:table-cell",Ce("text:p",d,{}),u)+"\n")}else a.push(ld)}}a.push("        </table:table-row>\n")}return a.push("      </table:table>\n"),a.join("")},function(e,t){var r,n=[we],a=Be({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:meta":"urn:oasis:names:tc:opendocument:xmlns:meta:1.0","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:presentation":"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:chart":"urn:oasis:names:tc:opendocument:xmlns:chart:1.0","xmlns:dr3d":"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0","xmlns:math":"http://www.w3.org/1998/Math/MathML","xmlns:form":"urn:oasis:names:tc:opendocument:xmlns:form:1.0","xmlns:script":"urn:oasis:names:tc:opendocument:xmlns:script:1.0","xmlns:ooo":"http://openoffice.org/2004/office","xmlns:ooow":"http://openoffice.org/2004/writer","xmlns:oooc":"http://openoffice.org/2004/calc","xmlns:dom":"http://www.w3.org/2001/xml-events","xmlns:xforms":"http://www.w3.org/2002/xforms","xmlns:xsd":"http://www.w3.org/2001/XMLSchema","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:sheet":"urn:oasis:names:tc:opendocument:sh33tjs:1.0","xmlns:rpt":"http://openoffice.org/2005/report","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","xmlns:xhtml":"http://www.w3.org/1999/xhtml","xmlns:grddl":"http://www.w3.org/2003/g/data-view#","xmlns:tableooo":"http://openoffice.org/2009/table","xmlns:drawooo":"http://openoffice.org/2010/draw","xmlns:calcext":"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0","xmlns:loext":"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0","xmlns:field":"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0","xmlns:formx":"urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0","xmlns:css3t":"http://www.w3.org/TR/css3-text/","office:version":"1.2"}),s=Be({"xmlns:config":"urn:oasis:names:tc:opendocument:xmlns:config:1.0","office:mimetype":"application/vnd.oasis.opendocument.spreadsheet"})
"fods"==t.bookType?n.push("<office:document"+a+s+">\n"):n.push("<office:document-content"+a+">\n"),(r=n).push(" <office:automatic-styles>\n"),r.push('  <number:date-style style:name="N37" number:automatic-order="true">\n'),r.push('   <number:month number:style="long"/>\n'),r.push("   <number:text>/</number:text>\n"),r.push('   <number:day number:style="long"/>\n'),r.push("   <number:text>/</number:text>\n"),r.push("   <number:year/>\n"),r.push("  </number:date-style>\n"),r.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'),r.push(" </office:automatic-styles>\n"),n.push("  <office:body>\n"),n.push("    <office:spreadsheet>\n")
for(var i=0;i!=e.SheetNames.length;++i)n.push(fd(e.Sheets[e.SheetNames[i]],e,i))
return n.push("    </office:spreadsheet>\n"),n.push("  </office:body>\n"),"fods"==t.bookType?n.push("</office:document>"):n.push("</office:document-content>"),n.join("")})
function dd(e,t){if("fods"==t.bookType)return ud(e,t)
var r=new R,n="",a=[],s=[]
return n="mimetype",r.file(n,"application/vnd.oasis.opendocument.spreadsheet"),n="content.xml",r.file(n,ud(e,t)),a.push([n,"text/xml"]),s.push([n,"ContentFile"]),n="styles.xml",r.file(n,hd(e,t)),a.push([n,"text/xml"]),s.push([n,"StylesFile"]),n="manifest.rdf",r.file(n,function(e,t){var r,n,a=[we]
a.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n')
for(var s=0;s!=e.length;++s)a.push(kr(e[s][0],e[s][1])),a.push((r="",n=e[s][0],['  <rdf:Description rdf:about="'+r+'">\n','    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="'+n+'"/>\n',"  </rdf:Description>\n"].join("")))
return a.push(kr("","Document","pkg")),a.push("</rdf:RDF>"),a.join("")}(s)),a.push([n,"application/rdf+xml"]),n="meta.xml",r.file(n,Ar(e,t)),a.push([n,"text/xml"]),s.push([n,"MetadataFile"]),n="META-INF/manifest.xml",r.file(n,function(e,t){var r=[we]
r.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'),r.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n')
for(var n=0;n<e.length;++n)r.push('  <manifest:file-entry manifest:full-path="'+e[n][0]+'" manifest:media-type="'+e[n][1]+'"/>\n')
return r.push("</manifest:manifest>"),r.join("")}(a)),r}function pd(e){return function(t,r){for(var n=0,a=0;a<t.SheetNames.length;++a)t.SheetNames[a]==r.sheet&&(n=a)
if(0==n&&r.sheet&&t.SheetNames[0]!=r.sheet)throw new Error("Sheet not found: "+r.sheet)
return e.from_sheet(t.Sheets[t.SheetNames[n]],r)}}var md=pd(nd),gd=pd({from_sheet:Hd}),bd=pd(ml),Ed=pd(gl),vd=pd(bl),Sd=pd({from_sheet:function(e,t){t||(t={})
t.FS="\t",t.RS="\n"
var r=Hd(e,t)
return"undefined"==typeof cptable?r:"ÿþ"+cptable.utils.encode(1200,r)}})
function Bd(e){return function(t){for(var r=0;r!=e.length;++r){var n=e[r]
void 0===t[n[0]]&&(t[n[0]]=n[1]),"n"===n[2]&&(t[n[0]]=Number(t[n[0]]))}}}var Cd=Bd([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]]),Td=Bd([["cellDates",!1],["bookSST",!1],["bookType","xlsx"],["compression",!1],["WTF",!1]])
function wd(e,t){if(!e)return 0
try{e=t.map(function(t){return t.id||(t.id=t.strRelID),[t.name,e["!id"][t.id].Target,(r=e["!id"][t.id].Type,Er.WS.indexOf(r)>-1?"sheet":Er.CS&&r==Er.CS?"chart":Er.DS&&r==Er.DS?"dialog":Er.MS&&r==Er.MS?"macro":r&&r.length?r:"sheet")]
var r})}catch(e){return null}return e&&0!==e.length?e:null}function kd(e,t,r,n,a,s,i,c,o,l,f){try{a[n]=Sr(V(e,r,!0),t)
var h=H(e,t)
switch(i){case"sheet":s[n]=Su(h,t,c,a[n],o,l,f)
break
case"chart":var u=Bu(h,t,c,a[n])
if(s[n]=u,!u||!u["!chart"])break
var d=W(u["!chart"].Target,t),p=vr(d),m=W(function(e,t){if(!e)return"??"
var r=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1]
return t["!id"][r].Target}(V(e,d,!0),Sr(V(e,p,!0),d)),d),g=vr(m)
u=ru(V(e,m,!0),0,0,Sr(V(e,g,!0),m),0,u)
break
case"macro":s[n]=(E=t,a[n],E.slice(-4),{"!type":"macro"})
break
case"dialog":s[n]=(b=t,a[n],b.slice(-4),{"!type":"dialog"})}}catch(e){if(c.WTF)throw e}var b,E}var Id=function(e){return"/"!=e.slice(-1)}
function Ad(e,t){if(b(g),Cd(t=t||{}),r(),L(e,"META-INF/manifest.xml"))return cd(e,t)
if(L(e,"objectdata.xml"))return cd(e,t)
var a,s,i=B(e.files).filter(Id).sort(),c=function(e,t){var r={workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],TODO:[],xmlns:""}
if(!e||!e.match)return r
var n={}
if((e.match(G)||[]).forEach(function(e){var t=K(e)
switch(t[0].replace(z,"<")){case"<?xml":break
case"<Types":r.xmlns=t["xmlns"+(t[0].match(/<(\w+):/)||["",""])[1]]
break
case"<Default":n[t.Extension]=t.ContentType
break
case"<Override":void 0!==r[dr[t.ContentType]]&&r[dr[t.ContentType]].push(t.PartName)}}),r.xmlns!==ke.CT)throw new Error("Unknown Namespace: "+r.xmlns)
return r.calcchain=r.calcchains.length>0?r.calcchains[0]:"",r.sst=r.strs.length>0?r.strs[0]:"",r.style=r.styles.length>0?r.styles[0]:"",r.defaults=n,delete r.calcchains,r}(V(e,"[Content_Types].xml")),o=!1
if(0===c.workbooks.length&&H(e,s="xl/workbook.xml",!0)&&c.workbooks.push(s),0===c.workbooks.length){if(!U(e,s="xl/workbook.bin"))throw new Error("Could not find workbook")
c.workbooks.push(s),o=!0}"bin"==c.workbooks[0].slice(-3)&&(o=!0),o&&n(1200)
var l={},f={}
t.bookSheets||t.bookProps||(bh=[],c.sst&&(bh=wu(H(e,c.sst.replace(/^\//,"")),c.sst,t)),t.cellStyles&&c.themes.length&&(l=Tu(V(e,c.themes[0].replace(/^\//,""),!0)||"",c.themes[0],t)),c.style&&(f=Cu(H(e,c.style.replace(/^\//,"")),c.style,l,t)))
var h=vu(H(e,c.workbooks[0].replace(/^\//,"")),c.workbooks[0],t),u={},d=""
0!==c.coreprops.length&&((d=V(e,c.coreprops[0].replace(/^\//,""),!0))&&(u=function(e){for(var t={},r=0;r<xr.length;++r){var n=xr[r],a=e.match(Rr[r])
null!=a&&a.length>0&&(t[n[1]]=a[1]),"date"===n[2]&&t[n[1]]&&(t[n[1]]=O(t[n[1]]))}return t}(d)),0!==c.extprops.length&&(d=V(e,c.extprops[0].replace(/^\//,""),!0))&&function(e,t){var r={}
if(t||(t={}),Fr.forEach(function(n){switch(n[2]){case"string":t[n[1]]=(e.match(pe(n[0]))||[])[1]
break
case"bool":t[n[1]]="true"===(e.match(pe(n[0]))||[])[1]
break
case"raw":var a=e.match(new RegExp("<"+n[0]+"[^>]*>(.*)</"+n[0]+">"))
a&&a.length>0&&(r[n[1]]=a[1])}}),r.HeadingPairs&&r.TitlesOfParts)for(var n=Ee(r.HeadingPairs),a=Ee(r.TitlesOfParts).map(function(e){return e.v}),s=0,i=0,c=0;c!==n.length;c+=2){switch(i=+n[c+1].v,n[c].v){case"Worksheets":case"工作表":case"Листы":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Werkbladen":t.Worksheets=i,t.SheetNames=a.slice(s,s+i)
break
case"Named Ranges":case"Benannte Bereiche":t.NamedRanges=i,t.DefinedNames=a.slice(s,s+i)
break
case"Charts":case"Diagramme":t.Chartsheets=i,t.ChartNames=a.slice(s,s+i)}s+=i}}(d,u))
var p={}
t.bookSheets&&!t.bookProps||0!==c.custprops.length&&(d=V(e,c.custprops[0].replace(/^\//,""),!0))&&(p=function(e,t){var r={},n="",a=e.match(yr)
if(a)for(var s=0;s!=a.length;++s){var i=a[s],c=K(i)
switch(c[0]){case"<?xml":case"<Properties":break
case"<property":n=c.name
break
case"</property>":n=null
break
default:if(0===i.indexOf("<vt:")){var o=i.split(">"),l=o[0].substring(4),f=o[1]
switch(l){case"lpstr":case"bstr":case"lpwstr":r[n]=J(f)
break
case"bool":r[n]=ce(f)
break
case"i1":case"i2":case"i4":case"i8":case"int":case"uint":r[n]=parseInt(f,10)
break
case"r4":case"r8":case"decimal":r[n]=parseFloat(f)
break
case"filetime":case"date":r[n]=O(f)
break
case"cy":case"error":r[n]=J(f)
break
default:t.WTF&&"undefined"!=typeof console&&console.warn("Unexpected",i,l,o)}}else if("</"===i.substr(0,2));else if(t.WTF)throw new Error(i)}}return r}(d,t))
var m={}
if((t.bookSheets||t.bookProps)&&(h.Sheets?a=h.Sheets.map(function(e){return e.name}):u.Worksheets&&u.SheetNames.length>0&&(a=u.SheetNames),t.bookProps&&(m.Props=u,m.Custprops=p),t.bookSheets&&void 0!==a&&(m.SheetNames=a),t.bookSheets?m.SheetNames:t.bookProps))return m
a={}
var E={}
t.bookDeps&&c.calcchain&&(E=Iu(H(e,c.calcchain.replace(/^\//,"")),c.calcchain))
var v,S=0,C={},T=h.Sheets
u.Worksheets=T.length,u.SheetNames=[]
for(var w=0;w!=T.length;++w)u.SheetNames[w]=T[w].name
var k=o?"bin":"xml",I="xl/_rels/workbook."+k+".rels",A=Sr(V(e,I,!0),I)
A&&(A=wd(A,h.Sheets))
var x=H(e,"xl/worksheets/sheet.xml",!0)?1:0
for(S=0;S!=u.Worksheets;++S){var R="sheet"
A&&A[S]?(v="xl/"+A[S][1].replace(/[\/]?xl\//,""),R=A[S][2]):v=(v="xl/worksheets/sheet"+(S+1-x)+"."+k).replace(/sheet0\./,"sheet."),kd(e,v,v.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),u.SheetNames[S],C,a,R,t,h,l,f)}return c.comments&&function(e,t,r,n,a){for(var s=0;s!=t.length;++s){var i=t[s],c=ku(H(e,i.replace(/^\//,""),!0),i,a)
if(c&&c.length)for(var o=B(r),l=0;l!=o.length;++l){var f=o[l],h=n[f]
h&&h[i]&&_f(0,r[f],c)}}}(e,c.comments,a,C,t),m={Directory:c,Workbook:h,Props:u,Custprops:p,Deps:E,Sheets:a,SheetNames:u.SheetNames,Strings:bh,Styles:f,Themes:l,SSF:g.get_table()},t.bookFiles&&(m.keys=i,m.files=e.files),t.bookVBA&&(c.vba.length>0?m.vbaraw=H(e,c.vba[0].replace(/^\//,""),!0):c.defaults&&"application/vnd.ms-office.vbaProject"===c.defaults.bin&&(m.vbaraw=H(e,"xl/vbaProject.bin",!0))),m}function xd(e,t){var r="Version",n=e.find(r)
if(!n)throw new Error("ECMA-376 Encrypted file missing "+r)
var a,s
a=n.content,(s={}).id=a.read_shift(0,"lpp4"),s.R=Fl(a,4),s.U=Fl(a,4),s.W=Fl(a,4)
if(r="DataSpaceMap",!(n=e.find(r)))throw new Error("ECMA-376 Encrypted file missing "+r)
var i=function(e,t){var r=[]
e.l+=4
for(var n=e.read_shift(4);n-- >0;)r.push(Pl(e))
return r}(n.content)
if(1!=i.length||1!=i[0].comps.length||0!=i[0].comps[0].t||"StrongEncryptionDataSpace"!=i[0].name||"EncryptedPackage"!=i[0].comps[0].v)throw new Error("ECMA-376 Encrypted file bad "+r)
if(r="StrongEncryptionDataSpace",!(n=e.find(r)))throw new Error("ECMA-376 Encrypted file missing "+r)
var c=function(e,t){var r=[]
e.l+=4
for(var n=e.read_shift(4);n-- >0;)r.push(e.read_shift(0,"lpp4"))
return r}(n.content)
if(1!=c.length||"StrongEncryptionTransform"!=c[0])throw new Error("ECMA-376 Encrypted file bad "+r)
if(r="!Primary",!(n=e.find(r)))throw new Error("ECMA-376 Encrypted file missing "+r)
yl(n.content)
if(r="EncryptionInfo",!(n=e.find(r)))throw new Error("ECMA-376 Encrypted file missing "+r)
Ml(n.content)
throw new Error("File is password-protected")}function Rd(e,t){if(yf=1024,"ods"==t.bookType)return dd(e,t)
e&&!e.SSF&&(e.SSF=g.get_table()),e&&e.SSF&&(b(g),g.load_table(e.SSF),t.revssf=T(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF),t.rels={},t.wbrels={},t.Strings=[],t.Strings.Count=0,t.Strings.Unique=0
var r="xlsb"==t.bookType?"bin":"xml",n="xlsb"==t.bookType||"xlsm"==t.bookType,a={workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],TODO:[],xmlns:""}
Td(t=t||{})
var s,i,c,o,l,f,h,u,d,p,m,E=new R,v="",S=0
for(t.cellXfs=[],Ch(t.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),v="docProps/core.xml",E.file(v,function(e,t){var r=t||{},n=[we,Dr],a={}
if(!e&&!r.Props)return n.join("")
e&&(null!=e.CreatedDate&&Or("dcterms:created","string"==typeof e.CreatedDate?e.CreatedDate:Te(e.CreatedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a),null!=e.ModifiedDate&&Or("dcterms:modified","string"==typeof e.ModifiedDate?e.ModifiedDate:Te(e.ModifiedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a))
for(var s=0;s!=xr.length;++s){var i=xr[s],c=r.Props&&null!=r.Props[i[1]]?r.Props[i[1]]:e?e[i[1]]:null
!0===c?c="1":!1===c?c="0":"number"==typeof c&&(c=String(c)),null!=c&&Or(i[0],c,null,n,a)}return n.length>2&&(n[n.length]="</cp:coreProperties>",n[1]=n[1].replace("/>",">")),n.join("")}(e.Props,t)),a.coreprops.push(v),Tr(t.rels,2,v,Er.CORE_PROPS),v="docProps/app.xml",e.Props&&e.Props.SheetNames||(e.Workbook&&e.Workbook.Sheets?e.Props.SheetNames=e.SheetNames.map(function(t,r){return[2!=(e.Workbook.Sheets[r]||{}).Hidden,t]}).filter(function(e){return e[0]}).map(function(e){return e[1]}):e.Props.SheetNames=e.SheetNames),e.Props.Worksheets=e.Props.SheetNames.length,E.file(v,(s=e.Props,i=[],c=Ce,s||(s={}),s.Application="SheetJS",i[i.length]=we,i[i.length]=Pr,Fr.forEach(function(e){if(void 0!==s[e[1]]){var t
switch(e[2]){case"string":t=String(s[e[1]])
break
case"bool":t=s[e[1]]?"true":"false"}void 0!==t&&(i[i.length]=c(e[0],t))}}),i[i.length]=c("HeadingPairs",c("vt:vector",c("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+c("vt:variant",c("vt:i4",String(s.Worksheets))),{size:2,baseType:"variant"})),i[i.length]=c("TitlesOfParts",c("vt:vector",s.SheetNames.map(function(e){return"<vt:lpstr>"+te(e)+"</vt:lpstr>"}).join(""),{size:s.Worksheets,baseType:"lpstr"})),i.length>2&&(i[i.length]="</Properties>",i[1]=i[1].replace("/>",">")),i.join(""))),a.extprops.push(v),Tr(t.rels,3,v,Er.EXT_PROPS),e.Custprops!==e.Props&&B(e.Custprops||{}).length>0&&(v="docProps/custom.xml",E.file(v,_r(e.Custprops)),a.custprops.push(v),Tr(t.rels,4,v,Er.CUST_PROPS)),v="xl/workbook."+r,E.file(v,(o=e,l=t,(".bin"===v.slice(-4)?Eu:gu)(o,l))),a.workbooks.push(v),Tr(t.rels,1,v,Er.WB),S=1;S<=e.SheetNames.length;++S){var C={"!id":{}},w=e.Sheets[e.SheetNames[S-1]]
switch((w||{})["!type"]||"sheet"){case"chart":default:v="xl/worksheets/sheet"+S+"."+r,E.file(v,(f=S-1,h=t,u=e,d=C,(".bin"===v.slice(-4)?tu:Wh)(f,h,u,d))),a.sheets.push(v),Tr(t.wbrels,-1,"worksheets/sheet"+S+"."+r,Er.WS[0])}if(w){var k=w["!comments"]
if(k&&k.length>0){var I="xl/comments"+S+"."+r
E.file(I,xu(k,I,t)),a.comments.push(I),Tr(C,-1,"../comments"+S+"."+r,Er.CMNT)}w["!legacy"]&&E.file("xl/drawings/vmlDrawing"+S+".vml",Nf(S,w["!comments"])),delete w["!comments"],delete w["!legacy"]}C["!id"].rId1&&E.file(vr(v),Cr(C))}return null!=t.Strings&&t.Strings.length>0&&(v="xl/sharedStrings."+r,E.file(v,Au(t.Strings,v,t)),a.strs.push(v),Tr(t.wbrels,-1,"sharedStrings."+r,Er.SST)),v="xl/theme/theme1.xml",E.file(v,Of(e.Themes,t)),a.themes.push(v),Tr(t.wbrels,-1,"theme/theme1.xml",Er.THEME),v="xl/styles."+r,E.file(v,(p=e,m=t,(".bin"===v.slice(-4)?kf:gf)(p,m))),a.styles.push(v),Tr(t.wbrels,-1,"styles."+r,Er.STY),e.vbaraw&&n&&(v="xl/vbaProject.bin",E.file(v,e.vbaraw),a.vba.push(v),Tr(t.wbrels,-1,"vbaProject.bin",Er.VBA)),E.file("[Content_Types].xml",function(e,t){var r,n=[]
n[n.length]=we,n[n.length]=gr,n=n.concat(br)
var a=function(a){e[a]&&e[a].length>0&&(r=e[a][0],n[n.length]=Ce("Override",null,{PartName:("/"==r[0]?"":"/")+r,ContentType:pr[a][t.bookType||"xlsx"]}))},s=function(r){(e[r]||[]).forEach(function(e){n[n.length]=Ce("Override",null,{PartName:("/"==e[0]?"":"/")+e,ContentType:pr[r][t.bookType||"xlsx"]})})},i=function(t){(e[t]||[]).forEach(function(e){n[n.length]=Ce("Override",null,{PartName:("/"==e[0]?"":"/")+e,ContentType:mr[t][0]})})}
return a("workbooks"),s("sheets"),s("charts"),i("themes"),["strs","styles"].forEach(a),["coreprops","extprops","custprops"].forEach(i),i("vba"),i("comments"),i("drawings"),n.length>2&&(n[n.length]="</Types>",n[1]=n[1].replace("/>",">")),n.join("")}(a,t)),E.file("_rels/.rels",Cr(t.rels)),E.file("xl/_rels/workbook."+r+".rels",Cr(t.wbrels)),delete t.revssf,delete t.ssf,E}function Dd(e,t){var r=""
switch((t||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3]]
case"base64":r=l.decode(e.substr(0,24))
break
case"binary":r=e
break
case"array":return[e[0],e[1],e[2],e[3]]
default:throw new Error("Unrecognized type "+(t?t.type:"undefined"))}return[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3)]}function Od(e,t){var r,n,a,s,i=e,c=[0],o=t||{}
switch(Eh={},o.dateNF&&(Eh.dateNF=o.dateNF),o.type||(o.type=f&&Buffer.isBuffer(e)?"buffer":"base64"),"file"==o.type&&(o.type="buffer",i=x.readFileSync(e)),(c=Dd(i,o))[0]){case 208:return a=v.read(i,o),s=o,a.find("EncryptedPackage")?xd(a):$u(a,s)
case 9:return $u(u("base64"===o.type?l.decode(i):i),o)
case 60:return Vu(i,o)
case 73:if(68==c[1])return function(e,t){var r=t||{},n=!!r.WTF
r.WTF=!0
try{var a=ml.to_workbook(e,r)
return r.WTF=n,a}catch(a){if(r.WTF=n,!a.message.match(/SYLK bad record ID/)&&n)throw a
return bl.to_workbook(e,t)}}(i,o)
break
case 84:if(65==c[1]&&66==c[2]&&76==c[3])return gl.to_workbook(i,o)
break
case 80:if(75==c[1]&&c[2]<32&&c[3]<32)return function(e,t){var r,n=e,a=t||{}
switch(a.type||(a.type=f&&Buffer.isBuffer(e)?"buffer":"base64"),a.type){case"base64":r=new R(n,{base64:!0})
break
case"binary":case"array":r=new R(n,{base64:!1})
break
case"buffer":r=new R(n)
break
default:throw new Error("Unrecognized type "+a.type)}return Ad(r,a)}(i,o)
break
case 239:return 60==c[3]?Vu(i,o):bl.to_workbook(i,o)
case 255:if(254==c[1])return n=i,"base64"==(r=o).type&&(n=l.decode(n)),n=cptable.utils.decode(1200,n.slice(2)),r.type="binary",60==n.charCodeAt(0)?Vu(n,r):bl.to_workbook(n,r)
break
case 0:if(0==c[1]&&c[2]>=2&&0==c[3])return El.to_workbook(i,o)
break
case 3:case 131:case 139:return pl.to_workbook(i,o)}if(c[2]<=12&&c[3]<=31)return pl.to_workbook(i,o)
if(32>c[0]||c[0]>127)throw new Error("Unsupported file "+c.join("|"))
return bl.to_workbook(i,o)}function Fd(e,t){var r=t||{}
return r.type="file",Od(e,r)}function Pd(e,t){switch(t.type){case"base64":return l.encode(e)
case"binary":return e
case"file":return x.writeFileSync(t.file,e,"utf8")
case"buffer":return f?new Buffer(e,"utf8"):e.split("").map(function(e){return e.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}function yd(e,t){uu(e)
var r=t||{}
switch(r.bookType||"xlsb"){case"xml":case"xlml":return Pd(function(e,t){var r=[]
r.push(Wu(e,t)),r.push(""),r.push("")
for(var n=0;n<e.SheetNames.length;++n)r.push(Ce("Worksheet",Gu(n,t,e),{"ss:Name":te(e.SheetNames[n])}))
return we+Ce("Workbook",r.join(""),{xmlns:Xe.ss,"xmlns:o":Xe.o,"xmlns:x":Xe.x,"xmlns:ss":Xe.ss,"xmlns:dt":Xe.dt,"xmlns:html":Xe.html})}(e,r),r)
case"slk":case"sylk":return Pd(bd(e,r),r)
case"html":return Pd(md(e,r),r)
case"txt":return function(e,t){switch(t.type){case"base64":return l.encode(e)
case"binary":return e
case"file":return x.writeFileSync(t.file,e,"binary")
case"buffer":return f?new Buffer(e,"utf8"):e.split("").map(function(e){return e.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}(Sd(e,r),r)
case"csv":return Pd(gd(e,r),r)
case"dif":return Pd(Ed(e,r),r)
case"prn":return Pd(vd(e,r),r)
case"fods":return Pd(dd(e,r),r)
case"biff2":return function(e,t){switch(t.type){case"base64":case"binary":for(var r="",n=0;n<e.length;++n)r+=String.fromCharCode(e[n])
return"base64"==t.type?l.encode(r):r
case"file":return x.writeFileSync(t.file,e)
case"buffer":return e
default:throw new Error("Unrecognized type "+t.type)}}(rd(e,r),r)
case"xlsx":case"xlsm":case"xlsb":case"ods":return function(e,t){var r=t||{},n=Rd(e,r),a={}
switch(r.compression&&(a.compression="DEFLATE"),r.type){case"base64":a.type="base64"
break
case"binary":a.type="string"
break
case"buffer":case"file":a.type="nodebuffer"
break
default:throw new Error("Unrecognized type "+r.type)}return"file"===r.type?x.writeFileSync(r.file,n.generate(a)):n.generate(a)}(e,r)
default:throw new Error("Unrecognized bookType |"+r.bookType+"|")}}function Nd(e){if(!e.bookType)switch(e.file.slice(e.file.lastIndexOf(".")).toLowerCase()){case".xlsx":e.bookType="xlsx"
break
case".xlsm":e.bookType="xlsm"
break
case".xlsb":e.bookType="xlsb"
break
case".fods":e.bookType="fods"
break
case".xlml":e.bookType="xlml"
break
case".sylk":e.bookType="sylk"
break
case".html":e.bookType="html"
break
case".xls":e.bookType="biff2"
break
case".xml":e.bookType="xml"
break
case".ods":e.bookType="ods"
break
case".csv":e.bookType="csv"
break
case".txt":e.bookType="txt"
break
case".dif":e.bookType="dif"
break
case".prn":e.bookType="prn"
break
case".slk":e.bookType="sylk"
break
case".htm":e.bookType="html"}}function _d(e,t,r){var n=r||{}
return n.type="file",n.file=t,Nd(n),yd(e,n)}function Md(e,t){if(null==e||null==e["!ref"])return[]
var r={t:"n",v:0},n=0,a=1,s=[],i=!0,c=0,o="",l={s:{r:0,c:0},e:{r:0,c:0}},f=null!=t?t:{},h=f.raw,u=f.defval,d=null!=f.range?f.range:e["!ref"]
switch(1===f.header?n=1:"A"===f.header?n=2:Array.isArray(f.header)&&(n=3),typeof d){case"string":l=It(d)
break
case"number":(l=It(e["!ref"])).s.r=d
break
default:l=d}n>0&&(a=0)
var p=pt(l.s.r),m=new Array(l.e.c-l.s.c+1),g=new Array(l.e.r-l.s.r-a+1),b=0,E=0,v=Array.isArray(e),S=l.s.r,B=0,C=0
for(v&&!e[S]&&(e[S]=[]),B=l.s.c;B<=l.e.c;++B)switch(m[B]=Et(B),r=v?e[S][B]:e[m[B]+p],n){case 1:s[B]=B-l.s.c
break
case 2:s[B]=m[B]
break
case 3:s[B]=f.header[B-l.s.c]
break
default:if(null==r)continue
for(o=c=xt(r,null,f),E=0,C=0;C<s.length;++C)s[C]==o&&(o=c+"_"+ ++E)
s[B]=o}var T=1===n?[]:{}
for(S=l.s.r+a;S<=l.e.r;++S){if(p=pt(S),i=!0,1===n)T=[]
else if(T={},Object.defineProperty)try{Object.defineProperty(T,"__rowNum__",{value:S,enumerable:!1})}catch(e){T.__rowNum__=S}else T.__rowNum__=S
if(!v||e[S])for(B=l.s.c;B<=l.e.c;++B)if(void 0!==(r=v?e[S][B]:e[m[B]+p])&&void 0!==r.t){switch(c=r.v,r.t){case"z":if(null==c)break
continue
case"e":continue
case"s":case"d":case"b":case"n":break
default:throw new Error("unrecognized type "+r.t)}if(null!=s[B]){if(null==c)if(void 0!==u)T[s[B]]=u
else{if(!h||null!==c)continue
T[s[B]]=null}else T[s[B]]=h?c:xt(r,c,f)
i=!1}}else{if(void 0===u)continue
null!=s[B]&&(T[s[B]]=u,i=!1)}(!1===i||(1===n?!1!==f.blankrows:f.blankrows))&&(g[b++]=T)}return g.length=b,g}var Ld=/"/g
function Ud(e,t,r,n,a,s,i,c){for(var o=!0,l="",f="",h=pt(r),u=t.s.c;u<=t.e.c;++u){var d=c.dense?(e[r]||[])[u]:e[n[u]+h]
if(null==d)f=""
else if(null!=d.v){o=!1,f=""+xt(d,null,c)
for(var p=0,m=0;p!==f.length;++p)if((m=f.charCodeAt(p))===a||m===s||34===m){f='"'+f.replace(Ld,'""')+'"'
break}"ID"==f&&(f='"ID"')}else null==d.f||d.F?f="":(o=!1,(f="="+d.f).indexOf(",")>=0&&(f='"'+f.replace(Ld,'""')+'"'))
l+=(u===t.s.c?"":i)+f}return!1===c.blankrows&&o?null:l}function Hd(e,t){var r=[],n=null==t?{}:t
if(null==e||null==e["!ref"])return""
var a=It(e["!ref"]),s=void 0!==n.FS?n.FS:",",i=s.charCodeAt(0),c=void 0!==n.RS?n.RS:"\n",o=c.charCodeAt(0),l=new RegExp(("|"==s?"\\|":s)+"+$"),f="",h=[]
n.dense=Array.isArray(e)
for(var u=a.s.c;u<=a.e.c;++u)h[u]=Et(u)
for(var d=a.s.r;d<=a.e.r;++d)null!=(f=Ud(e,a,d,h,i,o,s,n))&&(n.strip&&(f=f.replace(l,"")),r.push(f+c))
return delete n.dense,r.join("")}function Vd(e){var t,r="",n=""
if(null==e||null==e["!ref"])return[]
var a,s=It(e["!ref"]),i="",c=[],o=new Array((s.e.r-s.s.r+1)*(s.e.c-s.s.c+1)),l=0,f=Array.isArray(e)
for(a=s.s.c;a<=s.e.c;++a)c[a]=Et(a)
for(var h=s.s.r;h<=s.e.r;++h)for(i=pt(h),a=s.s.c;a<=s.e.c;++a)if(r=c[a]+i,n="",void 0!==(t=f?(e[h]||[])[a]:e[r])){if(null!=t.F){if(r=t.F,!t.f)continue
n=t.f,-1==r.indexOf(":")&&(r=r+":"+r)}if(null!=t.f)n=t.f
else{if("z"==t.t)continue
if("n"==t.t&&null!=t.v)n=""+t.v
else if("b"==t.t)n=t.v?"TRUE":"FALSE"
else if(void 0!==t.w)n="'"+t.w
else{if(void 0===t.v)continue
n="s"==t.t?"'"+t.v:""+t.v}}o[l++]=r+"="+n}return o.length=l,o}var Wd,Xd={encode_col:Et,encode_row:pt,encode_cell:Tt,encode_range:kt,decode_col:bt,decode_row:dt,split_cell:Bt,decode_cell:Ct,decode_range:wt,format_cell:xt,get_formulae:Vd,make_csv:Hd,make_json:Md,make_formulae:Vd,aoa_to_sheet:Dt,json_to_sheet:function(e,t){for(var r,n=t||{},a={},s={s:{c:0,r:0},e:{c:0,r:e.length}},i=n.header||[],c=0,o=0;o!=e.length;++o)Object.keys(e[o]).filter(function(t){return e[o].hasOwnProperty(t)}).forEach(function(t){-1==(c=i.indexOf(t))&&(i[c=i.length]=t)
var s=e[o][t],l="z",f=""
"number"==typeof s?l="n":"boolean"==typeof s?l="b":"string"==typeof s?l="s":s instanceof Date&&(l="d",n.cellDates||(l="n",s=w(s)),f=n.dateNF||g._table[14]),a[Tt({c:c,r:o+1})]=r={t:l,v:s},f&&(r.z=f)})
for(s.e.c=i.length-1,c=0;c<i.length;++c)a[Et(c)+"1"]={t:"s",v:i[c]}
return a["!ref"]=kt(s),a},table_to_sheet:ad,table_to_book:function(e,t){return Rt(ad(e,t),t)},sheet_to_csv:Hd,sheet_to_json:Md,sheet_to_html:nd.from_sheet,sheet_to_formulae:Vd,sheet_to_row_object_array:Md};(function(e){function t(e,t,r){return null!=e[t]?e[t]:e[t]=r}function r(e,t,n){return"string"==typeof t?e[t]||(e[t]={t:"z"}):r(e,Tt("number"!=typeof t?t:{r:t,c:n||0}))}e.consts=e.consts||{},e.book_new=function(){return{SheetNames:[],Sheets:{}}},e.book_append_sheet=function(e,t,r){if(!r)for(var n=1;n<=65535&&-1!=e.SheetNames.indexOf(r="Sheet"+n);++n);if(!r)throw new Error("Too many worksheets")
if(hu(r),e.SheetNames.indexOf(r)>=0)throw new Error("Worksheet with name |"+r+"| already exists!")
e.SheetNames.push(r),e.Sheets[r]=t},e.book_set_sheet_visibility=function(e,r,n){t(e,"Workbook",{}),t(e.Workbook,"Sheets",[])
var a=function(e,t){if("number"==typeof t){if(t>=0&&e.SheetNames.length>t)return t
throw new Error("Cannot find sheet # "+t)}if("string"==typeof t){var r=e.SheetNames.indexOf(t)
if(r>-1)return r
throw new Error("Cannot find sheet name |"+t+"|")}throw new Error("Cannot find sheet |"+t+"|")}(e,r)
switch(t(e.Workbook.Sheets,a,{}),n){case 0:case 1:case 2:break
default:throw new Error("Bad sheet visibility setting "+n)}e.Workbook.Sheets[a].Hidden=n},[["SHEET_VISIBLE",0],["SHEET_HIDDEN",1],["SHEET_VERY_HIDDEN",2]].forEach(function(t){e.consts[t[0]]=t[1]}),e.cell_set_number_format=function(e,t){return e.z=t,e},e.cell_set_hyperlink=function(e,t,r){return t?(e.l={Target:t},r&&(e.l.Tooltip=r)):delete e.l,e},e.cell_add_comment=function(e,t,r){e.c||(e.c=[]),e.c.push({t:t,a:r||"SheetJS"})},e.sheet_set_array_formula=function(e,t,n){for(var a="string"!=typeof t?t:It(t),s="string"==typeof t?t:kt(t),i=a.s.r;i<=a.e.r;++i)for(var c=a.s.c;c<=a.e.c;++c){var o=r(e,i,c)
o.t="n",o.F=s,delete o.v,i==a.s.r&&c==a.s.c&&(o.f=n)}return e}})(Xd),f&&"undefined"!=typeof require&&(Wd=require("stream").Readable,e.stream={to_html:function(e,t){var r=Wd(),n=null==t?{}:t,a=wt(e["!ref"])
n.dense=Array.isArray(e),r.push(nd.BEGIN)
var s=a.s.r,i=!1
return r._read=function(){if(s>a.e.r)return i||(i=!0,r.push(nd.END)),r.push(null)
for(;s<=a.e.r;){r.push(nd._row(e,a,s,n)),++s
break}},r},to_csv:function(e,t){var r=Wd(),n=null==t?{}:t
if(null==e||null==e["!ref"])return r.push(null),r
var a=It(e["!ref"]),s=void 0!==n.FS?n.FS:",",i=s.charCodeAt(0),c=void 0!==n.RS?n.RS:"\n",o=c.charCodeAt(0),l=new RegExp(("|"==s?"\\|":s)+"+$"),f="",h=[]
n.dense=Array.isArray(e)
for(var u=a.s.c;u<=a.e.c;++u)h[u]=Et(u)
var d=a.s.r
return r._read=function(){if(d>a.e.r)return r.push(null)
for(;d<=a.e.r;)if(f=Ud(e,a,d,h,i,o,s,n),++d,null!=f){n.strip&&(f=f.replace(l,"")),r.push(f+c)
break}},r}}),e.parse_xlscfb=$u,e.parse_ods=cd,e.parse_fods=od,e.write_ods=dd,e.parse_zip=Ad,e.read=Od,e.readFile=Fd,e.readFileSync=Fd,e.write=yd,e.writeFile=_d,e.writeFileSync=_d,e.writeFileAsync=function(e,t,r,n){var a=r||{}
a.type="file",a.file=e,Nd(a),a.type="buffer"
var s=n
return s instanceof Function||(s=r),x.writeFile(e,yd(t,a),s)},e.utils=Xd,e.SSF=g})("undefined"!=typeof exports?exports:XLSX)
var XLS=XLSX,ODS=XLSX
