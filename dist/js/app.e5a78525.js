(function(e){function n(n){for(var c,a,u=n[0],d=n[1],i=n[2],E=0,h=[];E<u.length;E++)a=u[E],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);f&&f(n);while(h.length)h.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-07bd54ad":"71de0574","chunk-0b849f14":"fab1c2aa","chunk-1d644db2":"3864bf76","chunk-1ea9c18c":"dda4339e","chunk-5517b0d3":"f9ee1f02","chunk-2d0c4dc5":"6ffc8e0a","chunk-2d0da315":"801c10e8","chunk-2fe7671a":"fb703138","chunk-3be0c3be":"833cb396","chunk-3dd0af7e":"34c1c9b8","chunk-4de93cca":"ac4a262a","chunk-5c311656":"7fa5c6ee","chunk-67d2bc96":"3ee9eb30","chunk-803af17c":"8ded1cb5","chunk-d51af2e6":"f2a6ab80","chunk-d7991728":"a7aa9501","chunk-fdd812a6":"438d848b"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-07bd54ad":1,"chunk-0b849f14":1,"chunk-1ea9c18c":1,"chunk-5517b0d3":1,"chunk-2fe7671a":1,"chunk-3be0c3be":1,"chunk-3dd0af7e":1,"chunk-4de93cca":1,"chunk-5c311656":1,"chunk-67d2bc96":1,"chunk-803af17c":1,"chunk-d51af2e6":1,"chunk-d7991728":1,"chunk-fdd812a6":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-07bd54ad":"8874ae7b","chunk-0b849f14":"c7f1d4d0","chunk-1d644db2":"31d6cfe0","chunk-1ea9c18c":"32d59d02","chunk-5517b0d3":"72353072","chunk-2d0c4dc5":"31d6cfe0","chunk-2d0da315":"31d6cfe0","chunk-2fe7671a":"e7aeb669","chunk-3be0c3be":"a9c8ae9f","chunk-3dd0af7e":"7a30d391","chunk-4de93cca":"e63a1cb6","chunk-5c311656":"8c056ae5","chunk-67d2bc96":"c0ad68a8","chunk-803af17c":"e088dcf8","chunk-d51af2e6":"dee58152","chunk-d7991728":"a2f952ce","chunk-fdd812a6":"785148ce"}[e]+".css",r=d.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],E=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(E===c||E===r))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){i=h[u],E=i.getAttribute("data-href");if(E===c||E===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],f.parentNode.removeChild(f),t(o)},f.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var i,E=document.createElement("script");E.charset="utf-8",E.timeout=120,d.nc&&E.setAttribute("nonce",d.nc),E.src=u(e);var h=new Error;i=function(n){E.onerror=E.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",h.name="ChunkLoadError",h.type=c,h.request=a,t[1](h)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:E})}),12e4);E.onerror=E.onload=i,document.head.appendChild(E)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],E=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var f=E;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("64a9"),a=t.n(c);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=(t("034f"),t("2877")),u={},d=Object(o["a"])(u,a,r,!1,null,null,null),i=d.exports,E=t("8c4f");c["a"].use(E["a"]);var h=new E["a"]({mode:"history",routes:[{path:"/",component:function(){return t.e("chunk-67d2bc96").then(t.bind(null,"ea2a"))},children:[{path:"",name:"login",component:function(){return t.e("chunk-5c311656").then(t.bind(null,"a55b"))}},{path:"register",name:"register",component:function(){return Promise.all([t.e("chunk-1d644db2"),t.e("chunk-1ea9c18c")]).then(t.bind(null,"73cf"))}},{path:"verify-alert",name:"alert",component:function(){return t.e("chunk-d51af2e6").then(t.bind(null,"475a"))}},{path:"welcome",name:"welcome",component:function(){return t.e("chunk-d7991728").then(t.bind(null,"eec5"))}},{path:"verify",name:"verify",component:function(){return Promise.all([t.e("chunk-1d644db2"),t.e("chunk-5517b0d3")]).then(t.bind(null,"9af5"))}},{path:"about-you",name:"about",component:function(){return t.e("chunk-0b849f14").then(t.bind(null,"f820"))}}]},{path:"/dashboard",component:function(){return t.e("chunk-3dd0af7e").then(t.bind(null,"994b"))},children:[{path:"",name:"dashboard",component:function(){return t.e("chunk-4de93cca").then(t.bind(null,"5dcc"))}},{path:"view-loan",name:"viewloan",component:function(){return t.e("chunk-803af17c").then(t.bind(null,"6380"))}},{path:"invite",name:"invite",component:function(){return t.e("chunk-2d0da315").then(t.bind(null,"6b0c"))}},{path:"take-loan",name:"takeloan",component:function(){return t.e("chunk-2d0c4dc5").then(t.bind(null,"3d42"))}},{path:"loan-apply",name:"applyloan",component:function(){return t.e("chunk-fdd812a6").then(t.bind(null,"f0d1"))}},{path:"source-income",name:"sourceincome",component:function(){return t.e("chunk-2fe7671a").then(t.bind(null,"6579"))}},{path:"add-income",name:"addincome",component:function(){return t.e("chunk-3be0c3be").then(t.bind(null,"4e68"))}},{path:"profile",name:"profile",component:function(){return t.e("chunk-07bd54ad").then(t.bind(null,"56d2"))}}]}]}),f=t("2f62"),s=t("dc59"),_=t("8aa5"),l=t.n(_);c["a"].use(f["a"]);var A=new f["a"].Store({state:{userId:"",userIsLoggedIn:!1,error:""},mutations:{setUser:function(e,n){e.userIsLoggedIn=n||!0},setUserId:function(e,n){e.userId=n},setError:function(e,n){e.error=n,setTimeout((function(){e.error=""}),5e3)}},actions:{signUser:function(e,n){var t=e.commit;l.a.auth().createUserWithEmailAndPassword(n.email,n.password).then((function(e){var c=e.user.uid;c&&s["a"].collection("users").add({email:n.email,firstName:n.firstName,lastName:n.lastName,mobileNumber:n.mobileNumber,id:e.user.uid}).then((function(){var e=l.a.auth().currentUser;e?(t("setUserId",e.uid),t("setUser",!0),console.log(e)):console.log("error")}))})).catch((function(e){t("setError",e)}))}}}),p=t("1dce"),b=t.n(p);c["a"].use(b.a),c["a"].config.productionTip=!1,new c["a"]({router:h,store:A,render:function(e){return e(i)}}).$mount("#app")},"64a9":function(e,n,t){},dc59:function(e,n,t){"use strict";var c=t("8aa5"),a=(t("e71f"),t("ea7b"),t("8934"),{apiKey:"AIzaSyAyJHKm9_avmoPADfiX8hIp4dcTCys0t0Y",authDomain:Object({NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyAyJHKm9_avmoPADfiX8hIp4dcTCys0t0Y",VUE_APP_FIREBASE_AUTH_DOMAIN:"shecluded.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"https://shecluded.firebaseio.com",VUE_APP_FIREBASE_STORAGE_BUCKET:"",VUE_APP_FIREBASE_MESSANGER_SENDER_ID:"795277390492",VUE_APP_FIREBASE_APP_ID:"1:795277390492:web:5b446501c9fc5c8b13b359",BASE_URL:"/"}).FIREBASE_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyAyJHKm9_avmoPADfiX8hIp4dcTCys0t0Y",VUE_APP_FIREBASE_AUTH_DOMAIN:"shecluded.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"https://shecluded.firebaseio.com",VUE_APP_FIREBASE_STORAGE_BUCKET:"",VUE_APP_FIREBASE_MESSANGER_SENDER_ID:"795277390492",VUE_APP_FIREBASE_APP_ID:"1:795277390492:web:5b446501c9fc5c8b13b359",BASE_URL:"/"}).FIREBASE_DATABASE_URL,projectId:"shecluded",storageBucket:Object({NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyAyJHKm9_avmoPADfiX8hIp4dcTCys0t0Y",VUE_APP_FIREBASE_AUTH_DOMAIN:"shecluded.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"https://shecluded.firebaseio.com",VUE_APP_FIREBASE_STORAGE_BUCKET:"",VUE_APP_FIREBASE_MESSANGER_SENDER_ID:"795277390492",VUE_APP_FIREBASE_APP_ID:"1:795277390492:web:5b446501c9fc5c8b13b359",BASE_URL:"/"}).FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyAyJHKm9_avmoPADfiX8hIp4dcTCys0t0Y",VUE_APP_FIREBASE_AUTH_DOMAIN:"shecluded.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"https://shecluded.firebaseio.com",VUE_APP_FIREBASE_STORAGE_BUCKET:"",VUE_APP_FIREBASE_MESSANGER_SENDER_ID:"795277390492",VUE_APP_FIREBASE_APP_ID:"1:795277390492:web:5b446501c9fc5c8b13b359",BASE_URL:"/"}).FIREBASE_MESSANGER_SENDER_ID,appId:Object({NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyAyJHKm9_avmoPADfiX8hIp4dcTCys0t0Y",VUE_APP_FIREBASE_AUTH_DOMAIN:"shecluded.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"https://shecluded.firebaseio.com",VUE_APP_FIREBASE_STORAGE_BUCKET:"",VUE_APP_FIREBASE_MESSANGER_SENDER_ID:"795277390492",VUE_APP_FIREBASE_APP_ID:"1:795277390492:web:5b446501c9fc5c8b13b359",BASE_URL:"/"}).FIREBASE_APP_ID}),r=c["initializeApp"](a);c["auth"](),c["functions"]();n["a"]=r.firestore()}});
//# sourceMappingURL=app.e5a78525.js.map