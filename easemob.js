!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("easemob-kefu-webim-plugin",[],t):"object"==typeof exports?exports["easemob-kefu-webim-plugin"]=t():e["easemob-kefu-webim-plugin"]=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function i(){m=a.copy(d),a.extend(m,easemobim.config),f=a.copy(m);var e=""!==a.convertFalse(f.hide)?f.hide:l.json.hide,t=""!==a.convertFalse(f.resources)?f.resources:l.json.resources,o=""!==a.convertFalse(f.satisfaction)?f.satisfaction:l.json.sat;f.tenantId=f.tenantId||l.json.tenantId,f.configId=f.configId||l.json.configId,f.hide=a.convertFalse(e),f.resources=a.convertFalse(t),f.satisfaction=a.convertFalse(o),f.domain=f.domain||l.domain,f.path=f.path||l.domain+"/webim",f.staticPath=f.staticPath||l.domain+"/webim/static"}function n(){for(var e,t={},o=document.scripts,i=0,n=o.length;i<n;i++)if(~o[i].src.indexOf("easemob.js")){e=o[i].src;break}if(!e)return{json:t,domain:""};for(var a,s=e.indexOf("?"),r=~e.indexOf("//")?e.indexOf("//"):0,c=e.slice(r,e.indexOf("/",r+2)),d=e.slice(s+1).split("&"),m=0,l=d.length;m<l;m++)a=d[m].split("="),t[a[0]]=a.length>1?decodeURIComponent(a[1]):"";return{json:t,domain:c}}o(1);var a=o(2),s=o(3),r=o(5);o(10),window.easemobim=window.easemobim||{},window.easemobim.config=window.easemobim.config||{},window.easemobim.version="pre_47.14.11_robot_demo",window.easemobim.tenants={};var c,d={tenantId:"",to:"",agentName:"",appKey:"",domain:"",path:"",ticket:!0,staticPath:"",buttonText:"联系客服",dialogWidth:"360px",dialogHeight:"550px",dragenable:!0,minimum:!0,soundReminder:!0,dialogPosition:{x:"10px",y:"10px"},user:{username:"",password:"",token:""}},m=a.copy(d),l=n(),f={};if(i(),m.grUserId=a.get("gr_user_id"),window.easemobIM=function(e){easemobim.bind({emgroup:e})},window.easemobIMS=function(e,t){easemobim.bind({tenantId:e,emgroup:t})},easemobim.bind=function(e){e=e||{},e.emgroup=e.emgroup||easemobim.config.emgroup||"";var t=e.tenantId+e.emgroup;for(var o in easemobim.tenants)easemobim.tenants.hasOwnProperty(o)&&easemobim.tenants[o].close();c=easemobim.tenants[t],c?c.open():(s.show(),i(),a.extend(f,e),c=r(f),easemobim.tenants[t]=c,c.set(f,c.open))},easemobim.sendExt=function(e){c?c.send({ext:e}):console.error("The chat window is not initialized.")},easemobim.sendText=function(e){c?c.sendText(e):console.error("The chat window is not initialized.")},(!f.hide||f.autoConnect||f.eventCollector)&&!a.isMobile){var p=f.configId||m.tenantId+(m.emgroup||"");c=easemobim.tenants[p]||r(f),easemobim.tenants[p]=c,c.set(f,c.close),easemobim.config.eventCollector=!1}},function(e,t){window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length,o=Number(arguments[1])||0;for(o=o<0?Math.ceil(o):Math.floor(o),o<0&&(o+=t);o<t;o++)if(o in this&&this[o]===e)return o;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var o,i;if(null===this)throw new TypeError("this is null or not defined");var n=Object(this),a=n.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(o=t),i=0;i<a;){var s;i in n&&(s=n[i],e.call(o,s,i,n)),i++}}),function(e){"use strict";e.console||(e.console={});for(var t,o,i=e.console,n=function(){},a=["memory"],s="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");t=a.pop();)i[t]||(i[t]={});for(;o=s.pop();)i[o]||(i[o]=n)}("undefined"==typeof window?this:window)},function(e,t){"use strict";function o(e){var t=Object.prototype.toString.call(e);return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)}function i(e,t){a(e,t)||(e.className+=" "+t)}function n(e,t){a(e,t)&&(e.className=(" "+e.className+" ").replace(new RegExp(" "+t+" ","g")," ").trim())}function a(e,t){return!!~(" "+e.className+" ").indexOf(" "+t+" ")}function s(e,t){if("function"==typeof t){var i,n,a,s=o(e)?e:[e],r=[];for(i=2,n=arguments.length;i<n;++i)r.push(arguments[i]);for(i=0,n=s.length;i<n;++i)(a=s[i])&&t.apply(null,[a].concat(r))}}function r(e,t,o,i){e.addEventListener?e.addEventListener(t,o,i):e.attachEvent&&(e["_"+t]=function(){o.apply(e,arguments)},e.attachEvent("on"+t,e["_"+t]))}function c(e,t,o){var i="_"+t,n="on"+t;e.removeEventListener&&o?e.removeEventListener(t,o):e.detachEvent&&(e.detachEvent(n,e[i]),delete e[i])}function d(e,t){if(e){var o,i,n=document.createElement("div"),a=document.createDocumentFragment();for(n.innerHTML=t,o=n.childNodes,i=o[0];o.length>0;)a.appendChild(o[0]);return e.appendChild(a),i}}var m=/mobile/i.test(navigator.userAgent);e.exports={isTop:window.top===window.self,isNodeList:o,isAndroid:/android/i.test(navigator.userAgent),isQQBrowser:/MQQBrowser/i.test(navigator.userAgent),isIOS:/(iPad|iPhone|iPod)/i.test(navigator.userAgent),isMobile:m,click:m&&"ontouchstart"in window?"touchstart":"click",isBrowserMinimized:function(){return"hidden"===document.visibilityState||document.hidden},appendHTMLTo:d,appendHTMLToBody:function(e){return d(document.body,e)},createElementFromHTML:function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},getBrief:function(e,t){return"string"!=typeof e?"":e.length>t?e.slice(0,t)+"...":e},formatDate:function(e,t){var o=e?new Date(e):new Date,i=t||"M月d日 hh:mm",n={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds()};/(y+)/.test(i)&&(i=i.replace(RegExp.$1,(o.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in n)new RegExp("("+a+")").test(i)&&(i=i.replace(RegExp.$1,1===RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return i},filesizeFormat:function(e){var t,o,i=["B","KB","MB","GB","TB","PB","EB","ZB"];return e>0?(t=Math.floor(Math.log(e)/Math.log(1024)),o=(e/Math.pow(1024,t)).toFixed(2)+" "+i[t]):o=0===e?"0 B":"",o},uuid:function(){for(var e=[],t="0123456789abcdef",o=0;o<36;o++)e[o]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},convertFalse:function(e){return e="undefined"==typeof e?"":e,"false"!==e&&e},removeDom:function(e){e&&(e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e))},live:function(e,t,o,i){var n=this,a=i||document;n.on(a,t,function(t){var i,n,s,r=t||window.event,c=r.target||r.srcElement,d=c.parentNode,m=a.querySelectorAll(e);for(i=0,n=m.length;i<n;++i)s=m[i],s===c?o.call(c,r):s===d&&o.call(d,r)})},on:function(e,t,o,i){t.split(" ").forEach(function(t){t&&s(e,r,t,o,i)})},off:function(e,t,o){t.split(" ").forEach(function(t){t&&s(e,c,t,o)})},one:function(e,t,o,i){if(e&&t){var n=function(){o.apply(this,arguments),c(e,t,n)};r(e,t,n,i)}},trigger:function(e,t){if(document.createEvent){var o=document.createEvent("HTMLEvents");o.initEvent(t,!0,!1),e.dispatchEvent(o)}else e.fireEvent("on"+t)},extend:function(e,t){for(var o in t)if(t.hasOwnProperty(o)){var i=t[o],n=Object.prototype.toString.call(i);void 0===i?e[o]=i:"[object Array]"===n?(e[o]=[],this.extend(e[o],i)):"[object Object]"===n?(e[o]={},this.extend(e[o],i)):e[o]=i}return e},addClass:function(e,t){return s(e,i,t),e},removeClass:function(e,t){return s(e,n,t),e},hasClass:function(e,t){return!!e&&a(e,t)},toggleClass:function(e,t,o){if(e&&t){var s="undefined"==typeof o?!a(e,t):o;s?i(e,t):n(e,t)}},getDataByPath:function(e,t){function o(){var e=i.shift();return"string"!=typeof e?n:"object"==typeof n&&null!==n?(n=n[e],o()):void 0}var i=t.split("."),n=e;return o()},query:function(e){var t=new RegExp("[?&]"+e+"=([^&]*)(?=&|$)"),o=t.exec(location.search);return o?o[1]:""},setStore:function(e,t){try{localStorage.setItem(e,t)}catch(o){}},getStore:function(e){try{return localStorage.getItem(e)}catch(t){}},clearStore:function(e){try{localStorage.removeItem(e)}catch(t){}},clearAllStore:function(){try{localStorage.clear()}catch(e){}},set:function(e,t,o){var i=new Date,n=i.getTime()+24*(o||30)*3600*1e3;i.setTime(n),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+";path=/;expires="+i.toGMTString()},get:function(e){var t=document.cookie.match("(^|;) ?"+encodeURIComponent(e)+"=([^;]*)(;|$)");return t?decodeURIComponent(t[2]):""},getAvatarsFullPath:function(e,t){if(e){e=e.replace(/^(https?:)?\/\/?/,"");var o=~e.indexOf("img-cn"),i=~e.indexOf("ossimages");return o&&!i?t+"/ossimages/"+e:"//"+e}},copy:function(e){return this.extend({},e)}}},function(e,t,o){"use strict";var i=o(2),n=o(4),a=i.appendHTMLToBody(['<div class="easemobim-prompt-wrapper">','<div class="loading">',n.loadingSvg,"</div>","</div>"].join(""));e.exports={show:function(){a.style.display="block"},hide:function(){a.style.display="none"}}},function(e,t){e.exports={loadingSvg:['<div class="em-widget-loading">','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">','<circle opacity=".3" fill="none" stroke="#000" stroke-width="4" stroke-miterlimit="10" cx="35" cy="35" r="11"/>','<path fill="none" stroke="#E5E5E5" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M24 35c0-6.1 4.9-11 11-11 2.8 0 5.3 1 7.3 2.8"/>',"</svg>","</div>"].join(""),agentStatusText:{Idle:"(离线)",Online:"(空闲)",Busy:"(忙碌)",Leave:"(离开)",Hidden:"(隐身)",Offline:"(离线)",Logout:"(离线)",Other:""},eventMessageText:{NOTE:"当前暂无客服在线，请您留下联系方式，稍后我们将主动联系您"},SYSTEM_EVENT_MSG_TEXT:{ServiceSessionCreatedEvent:"会话创建成功",ServiceSessionClosedEvent:"会话已结束",ServiceSessionTransferedEvent:"会话已被转接至其他客服",ServiceSessionTransferedToAgentQueueEvent:"会话转接中，请稍候",ServiceSessionOpenedEvent:"会话已被客服接起"},SYSTEM_EVENT:{SESSION_CREATED:"ServiceSessionCreatedEvent",SESSION_OPENED:"ServiceSessionOpenedEvent",SESSION_CLOSED:"ServiceSessionClosedEvent",SESSION_TRANSFERED:"ServiceSessionTransferedEvent",SESSION_TRANSFERING:"ServiceSessionTransferedToAgentQueueEvent",SESSION_RESTORED:"session.restored",SESSION_NOT_CREATED:"session.not.created",AGENT_INFO_UPDATE:"agent.info.update",OFFICIAL_ACCOUNT_SWITCHED:"official.account.switched",NEW_OFFICIAL_ACCOUNT_FOUND:"new.official.account.found",SYSTEM_OFFICIAL_ACCOUNT_UPDATED:"system.official.account.updated",OFFICIAL_ACCOUNT_LIST_GOT:"official.account.list.got",MARKETING_MESSAGE_RECEIVED:"marketing.message.received",SATISFACTION_EVALUATION_MESSAGE_RECEIVED:"satisfaction.evaluation.message.received",MESSAGE_PROMPT:"message.prompt",CHAT_WINDOW_OPENED:"chat.window.opened",CHAT_WINDOW_CLOSED:"chat.window.closed",IM_CONNECTION_OPENED:"im.connection.opened",OFFLINE:"offline",MESSAGE_SENT:"message.sent",MESSAGE_APPENDED:"message.appended"},themeMap:{"天空之城":"theme-1","丛林物语":"theme-2","红瓦洋房":"theme-3","鲜美橙汁":"theme-4","青草田间":"theme-5","湖光山色":"theme-6","冷峻山峰":"theme-7","月色池塘":"theme-8","天籁湖光":"theme-9","商务风格":"theme-10"},IM:{WEBIM_CONNCTION_OPEN_ERROR:1,WEBIM_CONNCTION_AUTH_ERROR:2,WEBIM_CONNCTION_AJAX_ERROR:17,WEBIM_CONNCTION_CALLBACK_INNER_ERROR:31},EVENTS:{NOTIFY:"notify",RECOVERY:"recoveryTitle",SHOW:"showChat",CLOSE:"closeChat",CACHEUSER:"setUser",DRAGREADY:"dragReady",DRAGEND:"dragEnd",SLIDE:"titleSlide",ONMESSAGE:"onMessage",ONSESSIONCLOSED:"onSessionClosed",EXT:"ext",TEXTMSG:"textmsg",ONREADY:"onready",ON_OFFDUTY:"onOffDuty",SET_ITEM:"setItem",UPDATE_URL:"updateURL",REQUIRE_URL:"requireURL",INIT_CONFIG:"initConfig",SHOW_IMG:"showIMG",RESIZE_IFRAME:"resizeIframe",ADD_PROMPT:"add.prompt",REMOVE_PROMPT:"remove.prompt"},GRAY_LIST_KEYS:["audioVideo","msgPredictEnable","waitListNumberEnable","agentInputStateEnable","noteCategory"],ERROR_MSG:{VISITOR_DOES_NOT_EXIST:"visitor does not exist.",SESSION_DOES_NOT_EXIST:"session does not exist."},SESSION_STATE:{WAIT:"Wait",PROCESSING:"Processing",TERMINAL:"Terminal",ABORT:"Abort",RESOLVED:"Resolved",PREPARE:"Prepare"},AGENT_ROLE:{AGENT:1,ROBOT:6},UPLOAD_FILESIZE_LIMIT:10485760,FIRST_CHANNEL_MESSAGE_TIMEOUT:1e4,FIRST_CHANNEL_IMG_MESSAGE_TIMEOUT:15e3,SECOND_MESSAGE_CHANNEL_MAX_RETRY_COUNT:1,FIRST_CHANNEL_CONNECTION_TIMEOUT:2e4,HEART_BEAT_INTERVAL:6e4,SECOND_CHANNEL_MESSAGE_RECEIVE_INTERVAL:6e4,MESSAGE_PREDICT_MAX_LENGTH:100,MAX_TEXT_MESSAGE_LENGTH:1500,GET_HISTORY_MESSAGE_COUNT_EACH_TIME:10,AGENT_INPUT_STATE_INTERVAL:1e3,MESSAGE_TIME_SPAN_INTERVAL:6e4,for_block_only:null}},function(e,t,o){"use strict";function i(e,t){var o=window.event||t,i=document.documentElement.clientWidth,a=document.documentElement.clientHeight,s=i-o.clientX-e.rect.width+h.x,r=a-o.clientY-e.rect.height+h.y;o.clientX-h.x<=0?s=i-e.rect.width:o.clientX+e.rect.width-h.x>=i&&(s=0),o.clientY-h.y<=0?r=a-e.rect.height:o.clientY+e.rect.height-h.y>=a&&(r=0),e.shadow.style.left="auto",e.shadow.style.top="auto",e.shadow.style.right=s+"px",e.shadow.style.bottom=r+"px",e.position={x:s,y:r},clearTimeout(u),u=setTimeout(function(){n.call(e)},500)}function n(){var e=this,t=e.iframe,o=e.shadow;r.off(document,"mousemove",e._onMouseMove),t.style.left="auto",t.style.top="auto",t.style.right=e.position.x+"px",t.style.bottom=e.position.y+"px",o.style.left="auto",o.style.top="auto",o.style.right=e.position.x+"px",o.style.bottom=e.position.y+"px",r.removeClass(o,"easemobim-dragging"),r.removeClass(t,"easemobim-dragging")}function a(e){r.on(window,"resize",function(){if(e.rect&&e.rect.width){var t=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=+e.iframe.style.right.slice(0,-2),n=+e.iframe.style.bottom.slice(0,-2);t<e.rect.width?(e.iframe.style.left="auto",e.iframe.style.right=0,e.shadow.style.left="auto",e.shadow.style.right=0):t-i<e.rect.width?(e.iframe.style.right=t-e.rect.width+"px",e.iframe.style.left=0,e.shadow.style.right=t-e.rect.width+"px",e.shadow.style.left=0):(e.iframe.style.left="auto",e.shadow.style.left="auto"),o<e.rect.height?(e.iframe.style.top="auto",e.iframe.style.bottom=0):o-n<e.rect.height?(e.iframe.style.bottom=o-e.rect.height+"px",e.iframe.style.top=0):e.iframe.style.top="auto"}})}function s(){var e=this;e.config.dragenable&&!r.isMobile&&a(e),e.message=new d(e.iframe.id,"easemob",(!0)),e.onsessionclosedSt=0,e.onreadySt=0,e.config.parentId=e.iframe.id,e.callbackApi={onready:e.config.onready||g,onmessage:e.config.onmessage||g,onsessionclosed:e.config.onsessionclosed||g},delete e.config.onready,delete e.config.onmessage,delete e.config.onsessionclosed,e.message.send({event:c.EVENTS.INIT_CONFIG,data:e.config}).listen(function(t){if(t.to===e.iframe.id){var o=t.event,i=t.data;switch(o){case c.EVENTS.ONREADY:clearTimeout(e.onreadySt),m.hide(),e.onreadySt=setTimeout(function(){e.callbackApi.onready()},500);break;case c.EVENTS.ON_OFFDUTY:m.hide();break;case c.EVENTS.SHOW:e.open();break;case c.EVENTS.CLOSE:e.close();break;case c.EVENTS.NOTIFY:l(i.avatar,i.title,i.brief);break;case c.EVENTS.SLIDE:f.start();break;case c.EVENTS.RECOVERY:f.stop();break;case c.EVENTS.ONMESSAGE:e.callbackApi.onmessage(i);break;case c.EVENTS.ONSESSIONCLOSED:clearTimeout(e.onsessionclosedSt),e.onsessionclosedSt=setTimeout(function(){e.callbackApi.onsessionclosed()},500);break;case c.EVENTS.CACHEUSER:r.set(i.key,i.value);break;case c.EVENTS.DRAGREADY:h.x=+i.x||0,h.y=+i.y||0,r.addClass(e.iframe,"easemobim-dragging"),r.addClass(e.shadow,"easemobim-dragging"),r.on(document,"mousemove",e._onMouseMove);break;case c.EVENTS.DRAGEND:n.call(e);break;case c.EVENTS.SET_ITEM:r.setStore(t.data.key,t.data.value);break;case c.EVENTS.REQUIRE_URL:e.message.send({event:c.EVENTS.UPDATE_URL,data:location.href});break;case c.EVENTS.SHOW_IMG:p(i);break;case c.EVENTS.RESET_IFRAME:e.config.dialogWidth=i.dialogWidth,e.config.dialogHeight=i.dialogHeight,e.config.dialogPosition=i.dialogPosition,e._updatePosition();break;case c.EVENTS.ADD_PROMPT:r.addClass(e.iframe,"easemobim-has-prompt");break;case c.EVENTS.REMOVE_PROMPT:r.removeClass(e.iframe,"easemobim-has-prompt")}}},["main"]),"function"==typeof e.ready&&e.ready()}var r=o(2),c=o(4),d=o(6),m=o(3),l=o(7),f=o(8),p=o(9),u=0,h={x:0,y:0},g=function(){},E=function(e){if(!(this instanceof E))return new E(e);var t,o=this,a="easemob-iframe-"+r.uuid(),c="easemobim-chat-panel easemobim-hide easemobim-minimized",d=document.createElement("iframe");return r.isMobile&&(c+=" easemobim-mobile"),d.frameBorder=0,d.allowTransparency="true",d.id=a,d.className=c,document.body.appendChild(d),r.on(d,"load",function(){s.call(o)}),r.isMobile||(t=document.createElement("div"),t.className="easemobim-iframe-shadow",document.body.appendChild(t),r.on(t,"mouseup",function(){n.call(o)})),o.config=r.copy(e),o.iframe=d,o.shadow=t,o.show=!1,o._onMouseMove=function(e){i(o,e)},E.iframe=o,o};E.prototype.set=function(e,t){var o=location.protocol+this.config.staticPath+"/img/drag.png";return this.config=r.copy(e||this.config),this.config.user.username||(this.config.isUsernameFromCookie=!0,this.config.user.username=r.get(e.configId||(this.config.to||"")+this.config.tenantId+(this.config.emgroup||""))),this.config.guestId=r.getStore("guestId"),this.position={x:this.config.dialogPosition.x.slice(0,-2),y:this.config.dialogPosition.y.slice(0,-2)},this.rect={width:+this.config.dialogWidth.slice(0,-2),height:+this.config.dialogHeight.slice(0,-2)},this._updatePosition(),r.toggleClass(this.iframe,"easemobim-hide",this.config.hide),this.iframe.src=location.protocol+e.path+"/im.html?v=<%=WEBIM_PLUGIN_VERSION%>",this.shadow&&(this.shadow.style.backgroundImage="url("+o+")"),this.ready=t,this},E.prototype._updatePosition=function(){var e=this.iframe,t=this.shadow,o=this.config;e.style.width=o.dialogWidth,e.style.height=o.dialogHeight,e.style.right=o.dialogPosition.x,e.style.bottom=o.dialogPosition.y,t&&(t.style.width=o.dialogWidth,t.style.height=o.dialogHeight,t.style.right=o.dialogPosition.x,t.style.bottom=o.dialogPosition.y)},E.prototype.open=function(){var e=this.iframe;if(!this.show)return this.show=!0,r.isMobile&&(r.addClass(document.body,"easemobim-mobile-body"),r.addClass(document.documentElement,"easemobim-mobile-html")),r.removeClass(e,"easemobim-minimized"),r.removeClass(e,"easemobim-hide"),this.message&&this.message.send({event:c.EVENTS.SHOW}),this},E.prototype.close=function(){if(this.show!==!1)return this.show=!1,clearTimeout(u),r.isMobile&&(r.removeClass(document.body,"easemobim-mobile-body"),r.removeClass(document.documentElement,"easemobim-mobile-html")),r.addClass(this.iframe,"easemobim-minimized"),r.toggleClass(this.iframe,"easemobim-hide",this.config.hide),this.message&&this.message.send({event:c.EVENTS.CLOSE}),this},E.prototype.send=function(e){this.message.send({event:c.EVENTS.EXT,data:e})},E.prototype.sendText=function(e){this.message.send({event:c.EVENTS.TEXTMSG,data:e})},e.exports=E},function(e,t){"use strict";function o(e,t,o){var i,n,a,s=!1,r=e.data;if("object"==typeof r)i=r;else if("string"==typeof r){try{i=JSON.parse(r)}catch(c){}if("object"!=typeof i)return}if(o&&o.length)for(n=0,a=o.length;n<a;n++)i.key===o[n]&&(s=!0,"function"==typeof t&&t(i));else"function"==typeof t&&t(i);if(!s&&o)for(n=0,a=o.length;n<a;n++)if("data"===o[n]){"function"==typeof t&&t(i);break}}var i=function(){var e=!0;try{window.postMessage({toString:function(){e=!1}},"*")}catch(t){}return e}(),n=function(e,t,o){return this instanceof n?(this.key=t,this.iframe=document.getElementById(e),this.origin=location.protocol+"//"+location.host,void(this.useObject=o)):new n(e)};n.prototype.send=function(e,t){return e.origin=this.origin,e.key=this.key,this.to?e.to=this.to:t&&(e.to=t),i&&(this.useObject||e.useObject)||(e=JSON.stringify(e)),this.iframe?this.iframe.contentWindow.postMessage(e,"*"):window.parent.postMessage(e,"*"),this},n.prototype.listen=function(e,t){var i=this;return window.addEventListener?window.addEventListener("message",function(n){o.call(i,n,e,t)},!1):window.attachEvent&&window.attachEvent("onmessage",function(n){o.call(i,n,e,t)}),this},e.exports=n},function(e,t,o){var i=o(8),n=0;e.exports=function(e,t,o){if(0===n&&(n=setTimeout(function(){n=0},3e3),window.Notification))if("granted"===Notification.permission){var a=new Notification(t||"",{icon:e||"",body:o||""});a.onclick=function(){"function"==typeof window.focus&&window.focus(),this.close(),i.stop()},setTimeout(function(){a.close()},3e3)}else Notification.requestPermission()}},function(e,t){var o,i="新消息提醒",n=0,a=document.title,s=(a+i).split("");e.exports={stop:function(){clearInterval(n),n=0,document.title=a},start:function(){n||(n=setInterval(function(){o=s.shift(),document.title=o+Array.prototype.join.call(s,""),s.push(o)},360))}}},function(e,t,o){"use strict";var i=o(2),n=i.appendHTMLToBody(['<div class="easemobim-pc-img-view">','<div class="shadow"></div>',"<img>","</div>"].join("")),a=n.querySelector("img");i.on(n,"click",function(){n.style.display="none"},!1),e.exports=function(e){var t,o=e.imgFile;t=o?window.URL.createObjectURL(o):e.imgSrc,a.src=t,n.style.display="block"}},function(e,t,o){var i=o(11);"string"==typeof i&&(i=[[e.id,i,""]]);o(12)(i,{sourceMap:!0});i.locals&&(e.exports=i.locals)},function(e,t){e.exports=".easemobim-mobile-html{position:static!important;width:100%!important;height:100%!important;padding:0!important;margin:0!important}.easemobim-mobile-body{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important;overflow:hidden!important;padding:0!important;margin:0!important}.easemobim-mobile-body>*{display:none!important}.easemobim-mobile-body>.easemobim-chat-panel{display:block!important}.easemobim-chat-panel{z-index:16777269;overflow:hidden;position:fixed;bottom:10px;right:-5px;border:none;width:0;height:0;-webkit-transition:all .01s;-moz-transition:all .01s;transition:all .01s;box-shadow:0 4px 8px rgba(0,0,0,.2);border-radius:4px}.easemobim-chat-panel.easemobim-minimized{left:auto;top:auto;right:-5px;bottom:10px;border:none;box-shadow:none;height:37px!important;width:104px!important}.easemobim-chat-panel.easemobim-minimized.easemobim-has-prompt{width:360px!important;height:270px!important}.easemobim-chat-panel.easemobim-mobile{width:100%!important;height:100%!important;left:0!important;top:0!important;right:auto!important;bottom:auto!important;border-radius:0;box-shadow:none}.easemobim-chat-panel.easemobim-mobile.easemobim-minimized{height:0!important;width:0!important}.easemobim-chat-panel.easemobim-hide{visibility:hidden;width:1px!important;height:1px!important;border:none}.easemobim-chat-panel.easemobim-dragging{display:none}.easemobim-iframe-shadow{left:auto;top:auto;display:none;cursor:move;z-index:16777270;position:fixed;border:none;box-shadow:0 4px 8px rgba(0,0,0,.2);border-radius:4px;background-size:100% 100%;background-repeat:no-repeat}.easemobim-iframe-shadow.easemobim-dragging{display:block}.easemobim-prompt-wrapper{display:none;z-index:16777271;position:fixed;width:30px;height:30px;padding:10px;top:0;bottom:0;margin:auto;left:0;right:0;color:#fff;background-color:#000;text-align:center;border-radius:4px;-webkit-transition:all .5s;-moz-transition:all .5s;transition:all .5s;opacity:.7}.easemobim-prompt-wrapper>.loading{position:relative;width:30px;height:30px;display:inline-block;overflow:hidden;margin:0;padding:0;-webkit-animation:easemobim-loading-frame 1s linear infinite;-moz-animation:easemobim-loading-frame 1s linear infinite;animation:easemobim-loading-frame 1s linear infinite}@-webkit-keyframes easemobim-loading-frame{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-moz-keyframes easemobim-loading-frame{0%{-moz-transform:rotate(0);transform:rotate(0)}to{-moz-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes easemobim-loading-frame{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);transform:rotate(1turn)}}.easemobim-pc-img-view{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:16777270}.easemobim-pc-img-view>.shadow{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;background-color:rgba(0,0,0,.7);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=70)}.easemobim-pc-img-view>img{max-width:100%;max-height:100%;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0}"},function(e,t,o){function i(e,t){for(var o=0;o<e.length;o++){var i=e[o],n=f[i.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](i.parts[a]);for(;a<i.parts.length;a++)n.parts.push(c(i.parts[a],t))}else{for(var s=[],a=0;a<i.parts.length;a++)s.push(c(i.parts[a],t));f[i.id]={id:i.id,refs:1,parts:s}}}}function n(e){for(var t=[],o={},i=0;i<e.length;i++){var n=e[i],a=n[0],s=n[1],r=n[2],c=n[3],d={css:s,media:r,sourceMap:c};o[a]?o[a].parts.push(d):t.push(o[a]={id:a,parts:[d]})}return t}function a(e,t){var o=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);e.apply(t,o.concat(i))}}function s(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function r(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function c(e,t){var o,i,n;if(t.singleton){var c=E++;o=g||(g=s()),i=a(d,null,o,c,!1),n=a(d,null,o,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=r(),i=a(l,null,o),n=function(){o.parentNode.removeChild(o),o.href&&URL.revokeObjectURL(o.href)}):(o=s(),i=a(m,null,o),n=function(){o.parentNode.removeChild(o)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}function d(e,t,o,i){var n=o?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var a=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function m(e,t){var o=t.css,i=t.media;t.sourceMap;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function l(e,t){var o=t.css,i=(t.media,t.sourceMap);i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var n=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(n),a&&URL.revokeObjectURL(a)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},u=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,E=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=u());var o=n(e);return i(o,t),function(e){for(var a=[],s=0;s<o.length;s++){var r=o[s],c=f[r.id];c.refs--,a.push(c)}if(e){var d=n(e);i(d,t)}for(var s=0;s<a.length;s++){var c=a[s];if(0===c.refs){for(var m=0;m<c.parts.length;m++)c.parts[m]();delete f[c.id]}}}};var b=function(){var e=[];return function(t,o){var i=[];e[t]=o;for(var n=0;n<e.length;n++)e[n]&&i.push(e[n]);return i.join("\n")}}()}])});
//# sourceMappingURL=easemob.js.map