(function(t){function e(e){for(var a,i,l=e[0],o=e[1],c=e[2],m=0,v=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,l=1;l<r.length;l++){var o=r[l];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([1,"chunk-vendors"]),r()})({0:function(t,e){},1:function(t,e,r){t.exports=r("56d7")},"10da":function(t,e,r){"use strict";r("a9c7")},2:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:""}},[r("v-list",{attrs:{dense:""}},[1==t.logged?r("div",[r("v-list",[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{attrs:{src:t.userdata.users[0].logo}})],1)],1),r("v-list-item",{attrs:{href:"https://www.twitch.tv/"+t.userdata.users[0].display_name,link:""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(" "+t._s(t.userdata.users[0].display_name)+" ")]),r("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(t._s(t.userdata.users[0].bio))])],1)],1)],1)],1):t._e(),r("v-list-item-group",{model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,a){return r("v-list-item",{key:a,attrs:{to:e.link}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)]],2),r("v-app-bar",{attrs:{app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("CyberCentralChat")])],1),r("v-main",[r("router-view")],1)],1)},n=[],i=r("1da1"),l=(r("96cf"),r("bc3a")),o=r.n(l),c={data:function(){return{drawer:null,userdata:"",logged:!1,selectedItem:1,items:[{text:"HOME",icon:"mdi-home",link:"/"},{text:"CHAT",icon:"mdi-message",link:"/chat"},{text:"USERS",icon:"mdi-account",link:"/users"},{text:"SETTINGS",icon:"mdi-cog-outline",link:"/settings"}]}},methods:{getUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=localStorage.getItem("username"),a="https://bejewled-understood-clove.glitch.me/twitchuser/".concat(r),e.prev=2,e.next=5,o.a.get(a);case 5:s=e.sent,t.userdata=s.data,t.logged=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),t.logged=!1;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()}},created:function(){localStorage.getItem("tts")||localStorage.setItem("tts",!1),localStorage.getItem("filterwhitelist")||localStorage.setItem("filterwhitelist",""),localStorage.getItem("readalertsfilter")||localStorage.setItem("readalertsfilter",!1),localStorage.getItem("filter")||localStorage.setItem("filter",!1),localStorage.getItem("filterbots")||localStorage.setItem("filterbots",!1),localStorage.getItem("username")||localStorage.setItem("username","cybercentral"),localStorage.getItem("filterurl")||localStorage.setItem("filterurl",!1),localStorage.getItem("font")||localStorage.setItem("font",15),this.getUser()}},u=c,m=r("2877"),v=r("6544"),d=r.n(v),h=r("7496"),f=r("40dc"),g=r("5bc1"),p=r("b0af"),b=r("132d"),w=r("adda"),S=r("8860"),I=r("da13"),_=r("8270"),x=r("5d23"),y=r("1baa"),C=r("34c3"),E=r("f6c4"),V=r("f774"),k=r("2a7f"),O=Object(m["a"])(u,s,n,!1,null,null,null),R=O.exports;d()(O,{VApp:h["a"],VAppBar:f["a"],VAppBarNavIcon:g["a"],VCard:p["a"],VIcon:b["a"],VImg:w["a"],VList:S["a"],VListItem:I["a"],VListItemAvatar:_["a"],VListItemContent:x["a"],VListItemGroup:y["a"],VListItemIcon:C["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:E["a"],VNavigationDrawer:V["a"],VToolbarTitle:k["a"]});var j=r("f309");a["a"].use(j["a"]);var T=new j["a"]({theme:{dark:!0}}),A=r("8c4f"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("carousel"),r("h1",{staticClass:"text-center",staticStyle:{"margin-top":"3%"}},[t._v("Features")]),r("features",{staticStyle:{"margin-top":"3%"}}),r("parallax",{staticStyle:{"margin-top":"3%","margin-bottom":"5%"}}),r("div",{staticClass:"text-center",staticStyle:{"margin-bottom":"3%"}},[t._v("Copyright 2021 CyberCentral")])],1)},P=[],U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-expansion-panels",t._l(t.items,(function(e){return r("v-expansion-panel",{key:e.id},[r("v-expansion-panel-header",[t._v(t._s(e.title))]),r("v-expansion-panel-content",[t._v(" "+t._s(e.description)+" ")])],1)})),1)],1)},N=[],$={data:function(){return{items:[{id:1,title:"Text-to-Speech",description:"profwaPlatzhalter"},{id:2,title:"Customizable",description:"profwaPlatzhalter"},{id:3,title:"Interactive Alerts",description:"profwaPlatzhalter"}]}}},B=$,M=r("a523"),J=r("cd55"),F=r("49e2"),H=r("c865"),z=r("0393"),D=Object(m["a"])(B,U,N,!1,null,null,null),G=D.exports;d()(D,{VContainer:M["a"],VExpansionPanel:J["a"],VExpansionPanelContent:F["a"],VExpansionPanelHeader:H["a"],VExpansionPanels:z["a"]});var W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-carousel",t._l(t.items,(function(t,e){return r("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)},K=[],q=r("ba57"),Q=r.n(q),X={data:function(){return{items:[{src:Q.a}]}}},Y=X,Z=r("5e66"),tt=r("3e35"),et=Object(m["a"])(Y,W,K,!1,null,null,null),rt=et.exports;d()(et,{VCarousel:Z["a"],VCarouselItem:tt["a"]});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-parallax",{attrs:{dark:"",src:t.earth}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[t._v("CyberCentralChat")]),r("h4",{staticClass:"subheading"},[t._v("Keep track from anywhere")])])],1)],1)},st=[],nt=r("d1e3"),it=r.n(nt),lt={data:function(){return{earth:it.a}}},ot=lt,ct=r("62ad"),ut=r("8b9c"),mt=r("0fd9"),vt=Object(m["a"])(ot,at,st,!1,null,null,null),dt=vt.exports;d()(vt,{VCol:ct["a"],VParallax:ut["a"],VRow:mt["a"]});var ht={created:function(){document.title="CyberCentral - Home"},components:{features:G,carousel:rt,parallax:dt}},ft=ht,gt=Object(m["a"])(ft,L,P,!1,null,null,null),pt=gt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("chat")},wt=[],St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t.connected?r("div",[r("viewercount"),r("alerts",{staticStyle:{"margin-top":"2%"}})],1):r("div",[t.username?r("div",[r("v-btn",{attrs:{outlined:"",block:""},on:{click:t.connectChat}},[t._v("CONNECT")])],1):r("div",[r("v-btn",{attrs:{disabled:"",outlined:"",block:""},on:{click:t.connectChat}},[t._v("CONNECT")])],1)]),r("v-card",{staticStyle:{"margin-top":"2%"}},[r("div",{staticStyle:{"max-height":"500px","overflow-y":"auto"},attrs:{id:"container"}},[r("ul",t._l(t.messages,(function(e){return r("li",{key:e.id,style:t.msgStyles},[r("div",{style:{color:e.color}},[r("b",[t._v(t._s(e.username))])]),r("div",{domProps:{innerHTML:t._s(e.message)}}),r("v-divider")],1)})),0)])])],1)},It=[],_t=(r("99af"),r("caad"),r("2532"),r("ac1f"),r("5319"),r("1276"),r("d81d"),r("fb6a"),r("a434"),r("a15b"),r("1913"),r("3cba")),xt=r.n(_t),yt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("CHAT: "+t._s(t.username))]),r("v-list-item-title",[t._v("VIEWER: "+t._s(t.chatters))])],1)],1)],1)},Ct=[],Et={data:function(){return{username:"",chatters:""}},methods:{getUpdate:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=localStorage.getItem("username"),a="https://bejewled-understood-clove.glitch.me/chatters/".concat(r),e.prev=2,e.next=5,o.a.get(a);case 5:s=e.sent,t.username=localStorage.getItem("username").toUpperCase(),t.chatters=s.data.chatter_count,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),t.chatters="API ERROR";case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=localStorage.getItem("username"),a="https://bejewled-understood-clove.glitch.me/chatters/".concat(r),e.prev=2,e.next=5,o.a.get(a);case 5:s=e.sent,t.username=localStorage.getItem("username").toUpperCase(),t.chatters=s.data.chatter_count,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),t.chatters="API ERROR";case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()},mounted:function(){var t=this;setInterval((function(){t.getUpdate()}),2e4)}},Vt=Et,kt=Object(m["a"])(Vt,yt,Ct,!1,null,null,null),Ot=kt.exports;d()(kt,{VCard:p["a"],VListItem:I["a"],VListItemContent:x["a"],VListItemTitle:x["c"]});var Rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(this.alerts,(function(e){return r("div",{key:e.message},[r("v-alert",{attrs:{value:e.toggle,color:e.color,dark:"",dismissible:"",border:"top",transition:"scale-transition"}},[r("h3",{staticClass:"text-h5"},[t._v(t._s(e.type))]),r("div",{domProps:{innerHTML:t._s(e.message)}})])],1)})),0)},jt=[],Tt={data:function(){return{alerts:[],message:"",username:""}},methods:{genAlert:function(t,e,r){var a={toggle:!0,type:t,message:e,color:r},s=this.alerts;return s.push(a)}},created:function(){var t=this;this.username=localStorage.getItem("username");var e={channels:[this.username]},r=new xt.a.client(e);r.connect(),r.on("subscription",(function(e,r,a,s,n){t.genAlert("SUB",n["system-msg"],"red")})),r.on("subgift",(function(e,r,a,s,n,i){t.genAlert("SUBGIFT",i["system-msg"],"red")})),r.on("cheer",(function(e,r,a){var s="".concat(r["display-name"]," just cheered ").concat(r.bits);if(console.log(e,r,a),""==!a&&a.includes("cheer")){for(var n=1;n<1e5;n++)a=a.replace("cheer"+n,"");s="".concat(r["display-name"]," just cheered ").concat(r.bits," bits.<br>Message: ").concat(a)}t.genAlert("CHEER",s,"red")})),r.on("resub",(function(e,r,a,s,n,i){t.genAlert("RESUB",n["system-msg"],"red")})),r.on("raided",(function(e,r,a){t.genAlert("RAID","".concat(r," just raided ").concat(e.replace("#","")," with ").concat(a," viewers!"),"red")}))}},At=Tt,Lt=r("0798"),Pt=Object(m["a"])(At,Rt,jt,!1,null,null,null),Ut=Pt.exports;d()(Pt,{VAlert:Lt["a"]});var Nt={name:"Home",data:function(){return{ids:0,connected:!1,messages:[],username:"",betterttv:"",betterttvemotes:[],betterttvglobalemotes:[],twitchemotes:"",ttson:!1,filterchat:!1,readalertsfilter:!1,filterbots:!1,filterwhitelist:!1,filterurl:!1,client:null,fontsize:""}},methods:{readAlert:function(t,e){var r="".concat(t," ALERT: ").concat(e);return this.speakClient(r)},reloadFunc:function(){window.localStorage&&(localStorage.getItem("firstLoad")?localStorage.removeItem("firstLoad"):(localStorage["firstLoad"]=!0,this.$router.go(this.$router.currentRoute)))},connectChat:function(){var t=this;this.connected=!0;var e={channels:[this.username]};this.client=new xt.a.client(e),this.client.connect(),this.readalertsfilter&&(this.client.on("subscription",(function(e,r,a,s,n){t.readAlert("SUB",n["system-msg"],"red")})),this.client.on("subgift",(function(e,r,a,s,n,i){t.readAlert("SUBGIFT",i["system-msg"],"red")})),this.client.on("cheer",(function(e,r,a){var s="".concat(r["display-name"]," just cheered ").concat(r.bits);if(console.log(e,r,a),""==!a&&a.includes("cheer")){for(var n=1;n<1e5;n++)a=a.replace("cheer"+n,"");s="".concat(r["display-name"]," just cheered ").concat(r.bits," bits.<br>Message: ").concat(a)}t.genAlert("CHEER",s,"red")})),this.client.on("resub",(function(e,r,a,s,n,i){t.readAlert("RESUB",n["system-msg"],"red")})),this.client.on("raided",(function(e,r,a){t.readAlert("RAID","".concat(r," just raided ").concat(e.replace("#","")," with ").concat(a," viewers!"),"red")}))),this.client.on("message",(function(e,r,a,s){var n=r["display-name"]+" ";r["mod"]&&(n=n.concat("| MODERATOR ")),r["subscriber"]&&(n=n.concat("| SUBSCRIBER "));var i={id:++t.ids,color:r["color"],message:t.formatEmotes(a,r["emotes"]),isModerator:r["mod"],isSubscriber:r["subscriber"],username:n};t.messages.push(i),t.readMessage(r,a),t.scrollToEnd()}))},scrollToEnd:function(){var t=this.$el.querySelector("#container");t.scrollTop=t.scrollHeight,this.messages.length>40&&this.messages.shift()},formatEmotes:function(t,e){var r=t.split("");for(var a in e){var s=e[a];for(var n in s){var i=s[n];if("string"==typeof i){i=i.split("-"),i=[parseInt(i[0]),parseInt(i[1])];var l=i[1]-i[0],o=Array.apply(null,new Array(l+1)).map((function(){return""}));r=r.slice(0,i[0]).concat(o).concat(r.slice(i[1]+1,r.length)),r.splice(i[0],1,'<img class="emoticon" width="25" height="25" src="https://static-cdn.jtvnw.net/emoticons/v1/'+a+'/3.0">')}}}return this.betterttvParser(r.join(""))},betterttvParser:function(t){for(var e=t,r=this.betterttv,a=this.betterttvglobalemotes,s=0;s<a.length;s++){var n=a[s];if(e.includes(n.code)){var i=" https://cdn.betterttv.net/emote/".concat(n.id,"/3x"),l=' <img class="emoticon" width="25" height="25" src="'.concat(i,'">');e=e.split(n.code).join(l)}}for(var o=0;o<r.channelEmotes.length;o++){var c=r.channelEmotes[o];if(e.includes(c.code)){var u=" https://cdn.betterttv.net/emote/".concat(c.id,"/3x"),m=' <img class="emoticon" width="25" height="25" src="'.concat(u,'">');e=e.split(c.code).join(m)}}for(var v=0;v<r.sharedEmotes.length;v++){var d=r.sharedEmotes[v];if(e.includes(d.code)){var h=" https://cdn.betterttv.net/emote/".concat(d.id,"/3x"),f=' <img class="emoticon" width="25" height="25" src="'.concat(h,'">');e=e.split(d.code).join(f)}}return e},removeEmotes:function(t,e){var r=t.split("");for(var a in e){var s=e[a];for(var n in s){var i=s[n];if("string"==typeof i){i=i.split("-"),i=[parseInt(i[0]),parseInt(i[1])];var l=i[1]-i[0],o=Array.apply(null,new Array(l+1)).map((function(){return""}));r=r.slice(0,i[0]).concat(o).concat(r.slice(i[1]+1,r.length)),r.splice(i[0],0)}}}return r.join("")},isBTTV:function(){for(var t=this.betterttv,e=this.betterttvglobalemotes,r=0;r<e.length;r++){var a=e[r];this.betterttvemotes.push(a.code)}for(var s=0;s<t.channelEmotes.length;s++){var n=t.channelEmotes[s];this.betterttvemotes.push(n.code)}for(var i=0;i<t.sharedEmotes.length;i++){var l=t.sharedEmotes[i];this.betterttvemotes.push(l.code)}},readMessage:function(t,e){if(1==this.ttson){if(1==this.filterchat){for(var r=this.filterwhitelist.split(", "),a=0;a<r.length;a++){var s=r[a];e.includes(s)||(e=this.removeEmotes(e,t["emotes"]),console.log(e))}for(var n=0;n<this.betterttvemotes.length;n++){var i=this.betterttvemotes[n];e.includes(i)&&(e=e.replace(i,""))}}if(1==this.filterbots)for(var l=["moobot","nightbot","fossabot","streamelements","streamlabs","thepositivebot","supibot","wizebot"],o=0;o<l.length;o++){var c=l[o];if(t["display-name"].toLowerCase()===c)return null}if(1==this.filterurl){var u=e.replace(/(?:https?|ftp):\/\/[\n\S]+/g,"");e=u}return""==e?null:this.speakClient("".concat(t["display-name"],": ").concat(e))}return null},speakClient:function(t){var e=new SpeechSynthesisUtterance,r=window.speechSynthesis;e.text=t,r.speak(e)},getBETTERTTV:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="https://bejewled-understood-clove.glitch.me/betterttv/".concat(t.userid),a="https://bejewled-understood-clove.glitch.me/betterttvglobal",e.prev=2,e.next=5,o.a.get(r);case 5:return s=e.sent,t.betterttv=s.data,e.next=9,o.a.get(a);case 9:n=e.sent,t.betterttvglobalemotes=n.data,t.isBTTV(),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),t.chatters="API ERROR";case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))()}},created:function(){var t=this;if(this.reloadFunc(),this.username=localStorage.getItem("username"),""==this.username)return this.username=null;this.userid=localStorage.getItem("userid"),this.getBETTERTTV(),this.fontsize=JSON.parse(localStorage.getItem("font")),this.readalertsfilter=JSON.parse(localStorage.getItem("readalertsfilter")),setInterval((function(){t.vueInsomnia().on(),t.ttson=JSON.parse(localStorage.getItem("tts")),t.filterwhitelist=localStorage.getItem("filterwhitelist"),t.filterchat=JSON.parse(localStorage.getItem("filter")),t.filterurl=JSON.parse(localStorage.getItem("filterurl")),t.filterbots=JSON.parse(localStorage.getItem("filterbots"))}),1e3)},computed:{msgStyles:function(){return{"font-size":"".concat(this.fontsize,"px")}}},components:{viewercount:Ot,alerts:Ut}},$t=Nt,Bt=(r("10da"),r("8336")),Mt=r("ce7e"),Jt=Object(m["a"])($t,St,It,!1,null,"2a3c37a1",null),Ft=Jt.exports;d()(Jt,{VBtn:Bt["a"],VCard:p["a"],VContainer:M["a"],VDivider:Mt["a"]});var Ht={created:function(){document.title="CyberCentral - Chat"},components:{chat:Ft}},zt=Ht,Dt=Object(m["a"])(zt,bt,wt,!1,null,null,null),Gt=Dt.exports,Wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("userlist")},Kt=[],qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("CHATTERS")]),r("v-list-item-subtitle",[t._v(t._s(t.chatters))])],1)],1),r("hr"),r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("BROADCASTER")]),t._l(t.broadcaster,(function(e){return r("v-list-item-subtitle",{key:e},[r("a",{attrs:{href:"https://www.twitch.tv/"+e}},[t._v(t._s(e))])])}))],2)],1),r("hr"),r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("MODERATORS")]),t._l(t.moderators,(function(e){return r("v-list-item-subtitle",{key:e},[r("a",{attrs:{href:"https://www.twitch.tv/"+e}},[t._v(t._s(e))])])}))],2)],1),r("hr"),r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("VIPS")]),t._l(t.vips,(function(e){return r("v-list-item-subtitle",{key:e},[r("a",{attrs:{href:"https://www.twitch.tv/"+e}},[t._v(t._s(e))])])}))],2)],1),r("hr"),r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("VIEWER")]),t._l(t.viewers,(function(e){return r("v-list-item-subtitle",{key:e},[r("a",{attrs:{href:"https://www.twitch.tv/"+e}},[t._v(t._s(e))])])}))],2)],1)],1)},Qt=[],Xt={data:function(){return{chatters:"",broadcaster:"",moderators:"",vips:"",viewers:""}},methods:{getUpdate:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=localStorage.getItem("username"),a="https://bejewled-understood-clove.glitch.me/chatters/".concat(r),e.prev=2,e.next=5,o.a.get(a);case 5:s=e.sent,t.chatters=s.data.chatter_count,t.broadcaster=s.data.chatters.broadcaster,t.moderators=s.data.chatters.moderators,t.vips=s.data.chatters.vips,t.viewers=s.data.chatters.viewers,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](2),t.info=e.t0.data;case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))()}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=localStorage.getItem("username"),a="https://bejewled-understood-clove.glitch.me/chatters/".concat(r),e.prev=2,e.next=5,o.a.get(a);case 5:s=e.sent,t.chatters=s.data.chatter_count,t.broadcaster=s.data.chatters.broadcaster,t.moderators=s.data.chatters.moderators,t.vips=s.data.chatters.vips,t.viewers=s.data.chatters.viewers,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](2),t.info=e.t0.data;case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))()},mounted:function(){var t=this;setInterval((function(){t.getUpdate()}),1e4)}},Yt=Xt,Zt=Object(m["a"])(Yt,qt,Qt,!1,null,null,null),te=Zt.exports;d()(Zt,{VCard:p["a"],VListItem:I["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"]});var ee={created:function(){document.title="CyberCentral - Users"},components:{userlist:te}},re=ee,ae=Object(m["a"])(re,Wt,Kt,!1,null,null,null),se=ae.exports,ne=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("settings")},ie=[],le=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-list",[r("v-subheader",[t._v("Settings")]),r("v-list-item-group",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Username")]),r("v-list-item-subtitle",[t._v("Select your chat.")]),r("v-text-field",{on:{change:function(e){t.save(),t.getID()}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Font size")]),r("v-list-item-subtitle",[t._v("Select the font size.")]),r("v-slider",{attrs:{"thumb-label":""},on:{change:t.save},model:{value:t.font,callback:function(e){t.font=e},expression:"font"}})],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Whitelist Emotes")]),r("v-list-item-subtitle",[t._v("Whitelist special emotes")]),r("v-text-field",{attrs:{placeholder:"Kappa, profwaKappa","thumb-label":""},on:{change:t.save},model:{value:t.filterwhitelist,callback:function(e){t.filterwhitelist=e},expression:"filterwhitelist"}})],1)],1),r("v-list-item",[r("v-list-item-action",[r("v-switch",{on:{change:t.save},model:{value:t.tts,callback:function(e){t.tts=e},expression:"tts"}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Text-to-Speech")]),r("v-list-item-subtitle",[t._v("Use Text-to-Speech to read the chat on your screen aloud.")])],1)],1),r("v-list-item",[r("v-list-item-action",[r("v-switch",{on:{change:t.save},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Filter Messages")]),r("v-list-item-subtitle",[t._v("Filter messages that contain emotes.")])],1)],1),r("v-list-item",[r("v-list-item-action",[r("v-switch",{on:{change:t.save},model:{value:t.filterurl,callback:function(e){t.filterurl=e},expression:"filterurl"}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v("URL Filter")]),r("v-list-item-subtitle",[t._v("Filter messages that contain URLs")])],1)],1),r("v-list-item",[r("v-list-item-action",[r("v-switch",{on:{change:t.save},model:{value:t.readalertsfilter,callback:function(e){t.readalertsfilter=e},expression:"readalertsfilter"}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Read Alerts")]),r("v-list-item-subtitle",[t._v("Read events (Subs, Resubs, Cheers, Subgifts)")])],1)],1),r("v-list-item",[r("v-list-item-action",[r("v-switch",{on:{change:t.save},model:{value:t.filterbots,callback:function(e){t.filterbots=e},expression:"filterbots"}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Filter Chatbot")]),r("v-list-item-subtitle",[t._v("Filter messages sended by a bot.")])],1)],1)],1)],1)],1)},oe=[],ce=(r("4de4"),{data:function(){return{tts:!1,filter:!1,filterbots:!1,filterurl:!1,filterwhitelist:"",readalertsfilter:!1,userid:"",font:"",username:""}},methods:{save:function(){localStorage.setItem("tts",this.tts),localStorage.setItem("filter",this.filter),localStorage.setItem("filterurl",this.filterurl),localStorage.setItem("font",this.font),localStorage.setItem("filterbots",this.filterbots),localStorage.setItem("filterwhitelist",this.filterwhitelist),localStorage.setItem("readalertsfilter",this.readalertsfilter),localStorage.setItem("username",this.username.toLowerCase())},getID:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=localStorage.getItem("username"),a="https://bejewled-understood-clove.glitch.me/twitchuser/".concat(r),e.prev=2,e.next=5,o.a.get(a);case 5:s=e.sent,localStorage.setItem("userid",s.data.users[0]._id),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),t.chatters="API ERROR";case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()}},created:function(){localStorage.getItem("tts")||localStorage.setItem("tts",!1),localStorage.getItem("filterwhitelist")||localStorage.setItem("filterwhitelist",""),localStorage.getItem("readalertsfilter")||localStorage.setItem("readalertsfilter",!1),localStorage.getItem("filter")||localStorage.setItem("filter",!1),localStorage.getItem("filterbots")||localStorage.setItem("filterbots",!1),localStorage.getItem("username")||localStorage.setItem("username","CyberCentral"),localStorage.getItem("filterurl")||localStorage.setItem("filterurl",!1),localStorage.getItem("font")||localStorage.setItem("font",15),this.tts=JSON.parse(localStorage.getItem("tts")),this.filterwhitelist=localStorage.getItem("filterwhitelist"),this.filterbots=JSON.parse(localStorage.getItem("filterbots")),this.filter=JSON.parse(localStorage.getItem("filter")),this.font=JSON.parse(localStorage.getItem("font")),this.filterurl=JSON.parse(localStorage.getItem("filterurl")),this.readalertsfilter=JSON.parse(localStorage.getItem("readalertsfilter")),this.username=localStorage.getItem("username")}}),ue=ce,me=r("1800"),ve=r("ba0d"),de=r("e0c7"),he=r("b73d"),fe=r("8654"),ge=Object(m["a"])(ue,le,oe,!1,null,null,null),pe=ge.exports;d()(ge,{VCard:p["a"],VList:S["a"],VListItem:I["a"],VListItemAction:me["a"],VListItemContent:x["a"],VListItemGroup:y["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VSlider:ve["a"],VSubheader:de["a"],VSwitch:he["a"],VTextField:fe["a"]});var be={created:function(){document.title="CyberCentral - Settings"},components:{settings:pe}},we=be,Se=Object(m["a"])(we,ne,ie,!1,null,null,null),Ie=Se.exports;a["a"].use(A["a"]);var _e=[{path:"/",name:"Home",component:pt},{path:"/chat",name:"Chat",component:Gt},{path:"/settings",name:"Settings",component:Ie},{path:"/users",name:"Users",component:se}],xe=new A["a"]({mode:"history",base:"/",routes:_e}),ye=xe,Ce=r("6f54");a["a"].use(Ce["a"]),a["a"].config.productionTip=!1,new a["a"]({vuetify:T,router:ye,render:function(t){return t(R)}}).$mount("#app")},a9c7:function(t,e,r){},ba57:function(t,e,r){t.exports=r.p+"img/banner1.d66b18a8.jpg"},d1e3:function(t,e,r){t.exports=r.p+"img/earth.d5a75970.jpg"}});
//# sourceMappingURL=app.483d63d2.js.map