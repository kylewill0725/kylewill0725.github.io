(function(e){function t(t){for(var a,u,c=t[0],l=t[1],i=t[2],d=0,s=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&s.push(r[u][0]),r[u]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"15a6":function(e,t,n){},2096:function(e,t,n){"use strict";n("15a6")},4270:function(e,t,n){"use strict";n("f03c")},"491a":function(e,t,n){"use strict";n("befa")},"6c66":function(e,t,n){},"6fd1":function(e,t,n){"use strict";n("9aad")},"80a9":function(e,t,n){"use strict";n("6c66")},"9aad":function(e,t,n){},befa:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app"};function o(e,t,n,o,u,c){var l=Object(a["n"])("Manager");return Object(a["i"])(),Object(a["d"])("div",r,[Object(a["f"])(l)])}var u=Object(a["r"])("data-v-48ef4f78");Object(a["k"])("data-v-48ef4f78");var c={class:"layout full"};Object(a["j"])();var l=u((function(e,t,n,r,o,u){var l=Object(a["n"])("AVSVideo"),i=Object(a["n"])("AVSAudio"),f=Object(a["n"])("AVSControls");return Object(a["i"])(),Object(a["d"])("div",c,[Object(a["f"])(l,{class:"video",src:e.videoFilePath,state:e.isPlaying,updateTime:e.updateTime,onOnTimeUpdate:e.updateCurrentTime,onOnMetadata:e.updateVideoMetadata},null,8,["src","state","updateTime","onOnTimeUpdate","onOnMetadata"]),Object(a["f"])(i,{class:"audio",videoFile:e.videoFile,frameCount:e.frames,currentFrame:e.currentFrame},null,8,["videoFile","frameCount","currentFrame"]),Object(a["f"])(f,{class:"controls",isPlaying:e.isPlaying,frameRate:e.frameRate,currentTime:e.timeString,onFrameRateChanged:e.updateFrameRate,onVideoSelected:e.updateVideoPath,onOnFrameShift:e.shiftFrames,onPlayToggle:e.updateIsPlaying},null,8,["isPlaying","frameRate","currentTime","onFrameRateChanged","onVideoSelected","onOnFrameShift","onPlayToggle"])])})),i=(n("a630"),n("3ca3"),n("2b3d"),n("d3b7"),n("ddb0"),Object(a["r"])("data-v-1bd2fc94")),f=i((function(e,t,n,r,o,u){return Object(a["i"])(),Object(a["d"])("video",{class:"full",id:"video",ref:"video",src:e.src,onLoadedmetadata:t[1]||(t[1]=function(){return e.onMetadata&&e.onMetadata.apply(e,arguments)})},null,40,["src"])})),d=(n("a9e3"),Object(a["g"])({props:{src:{type:String},state:{type:Boolean,default:!1},updateTime:{type:Number,default:0}},setup:function(e,t){var n,r=t.emit,o=Object(a["l"])(null),u=Object(a["p"])(e),c=u.state,l=u.updateTime,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=o.value;if(null!=t){if(null!=e){var n={id:0};return n.id=setInterval((function(){r("onTimeUpdate",t.currentTime)}),e.delayMs),function(){return clearInterval(n.id)}}r("onTimeUpdate",t.currentTime)}},f=function(){var e=o.value;switch(c.value){case!0:null===e||void 0===e||e.play(),n=i({delayMs:.5/30});break;case!1:if(null==e)break;e.pause(),void 0!=n&&n(),e.currentTime+=0,i();break}};return Object(a["q"])(c,f),Object(a["q"])(l,(function(e){null!=o.value&&(o.value.currentTime=e,i())})),{video:o,onMetadata:function(e){var t=e.target;t.volume=0,r("onMetadata",{duration:t.duration})}}}}));n("4270");d.render=f,d.__scopeId="data-v-1bd2fc94";var s=d,p={class:"full",ref:"canvas",id:"audioGraph"};function v(e,t,n,r,o,u){return Object(a["i"])(),Object(a["d"])("canvas",p,"Audio level over time",512)}var b=n("3835"),m=n("1da1");n("96cf"),n("159b"),n("7db0"),n("13d5"),n("2af1"),n("d81d");function O(e){return j.apply(this,arguments)}function j(){return j=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new AudioContext({sampleRate:48e3}),e.next=3,t.arrayBuffer();case 3:return a=e.sent,e.next=6,n.decodeAudioData(a);case 6:return r=e.sent,o=r.getChannelData(0),u=h(o,r.sampleRate),e.abrupt("return",{sampleRate:r.sampleRate,sampleCount:o.length,sampleGroups:u.map((function(e){return e.samples}))});case 10:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function h(e,t){var n=1/t,a=.02*t;return e.reduce((function(e,t,r){var o=(t-e.prevValue)/n;if(0!=e.prevVelSign&&Math.sign(o)!=e.prevVelSign&&t>.1)if(void 0!=e.lastSample&&e.lastSample.lastSampleNum>=r-a)e.lastSample.samples.push([e.prevIndex,e.prevValue]),e.lastSample.lastSampleNum=r;else{var u={firstSampleNum:r,lastSampleNum:r,samples:[[e.prevIndex,e.prevValue]]};e.result.push(u),e.lastSample=u}return e.prevVelSign=Math.sign(o),e.prevValue=t,e.prevIndex=r,e}),{result:[],prevVelSign:null,prevValue:0,prevIndex:-1,lastSample:null}).result}var g=Object(a["g"])({props:{videoFile:{type:Object},frameCount:{type:Number,default:0},currentFrame:{type:Number,default:0}},setup:function(e){var t=Object(a["p"])(e),n=t.frameCount,r=t.currentFrame,o=Object(a["l"])(null),u=Object(a["l"])(null),c=Object(a["q"])((function(){return e.videoFile}),function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!=t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,O(t);case 4:o.value=e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=Object(a["q"])([o,n,r],(function(e){var t,n=Object(b["a"])(e,3),a=n[0],r=n[1],o=n[2];if(null!=a){var c=null===(t=u.value)||void 0===t?void 0:t.getContext("2d");if(null!=c){var l=c.canvas.getClientRects()[0],i=Math.floor(l.width),f=Math.floor(l.height);c.canvas.width=i,c.canvas.height=f,c.fillStyle="white",c.fillRect(0,0,i,f),y(c,a,r),C(c,o,r)}}}));return{canvas:u,audioWatch:c,drawWatch:l}}});function y(e,t,n){var a,r=e.canvas.width,o=e.canvas.height,u=Math.ceil(t.sampleCount/n),c=Array.from({length:n},(function(e,t){return{samplesEnd:(t+1)*u-1,totalSampleValue:0,totalSampleCount:0,frame:t}}));t.sampleGroups.forEach((function(e){return e.forEach((function(e){(void 0==a||a.samplesEnd<e[0])&&(a=c.find((function(t){return t.samplesEnd>=e[0]}))),void 0!=a&&(a.totalSampleCount++,a.totalSampleValue+=e[1])}))}));var l=Math.ceil(r/n);e.fillStyle="aqua";for(var i=0;i<n;i++){var f=c[i].totalSampleValue/c[i].totalSampleCount||0,d=Math.max(5,f*o);e.fillRect(i*l,o-d,l,d)}}function C(e,t,n){var a=e.canvas.width,r=e.canvas.height,o=Math.ceil(a/n),u=(t+.5)*o;e.fillStyle="red",e.fillRect(u-1,0,1,r)}g.render=v;var S=g,M=Object(a["r"])("data-v-90c67842");Object(a["k"])("data-v-90c67842");var k={class:"full",id:"controls"},R=Object(a["f"])("br",null,null,-1),F={class:"vidControl",hidden:""},V={class:"vidControl",hidden:""},P=Object(a["f"])("br",null,null,-1),w=Object(a["f"])("label",null,"Frame Rate",-1),T=Object(a["f"])("option",null,"Custom",-1),A=Object(a["f"])("br",null,null,-1),I=Object(a["f"])("br",null,null,-1),x=Object(a["f"])("br",null,null,-1);Object(a["j"])();var N=M((function(e,t,n,r,o,u){var c=Object(a["n"])("ChevronsLeftIcon"),l=Object(a["n"])("ChevronLeftIcon"),i=Object(a["n"])("PauseCircleIcon"),f=Object(a["n"])("PlayCircleIcon"),d=Object(a["n"])("ChevronRightIcon"),s=Object(a["n"])("ChevronsRightIcon");return Object(a["i"])(),Object(a["d"])("div",k,[Object(a["f"])("input",{type:"file",accept:"video/*",onChange:t[1]||(t[1]=function(){return e.updateVideoPath&&e.updateVideoPath.apply(e,arguments)})},null,32),R,Object(a["f"])("button",F,[Object(a["f"])(c)]),Object(a["f"])("button",{class:"vidControl",onClick:t[2]||(t[2]=function(t){return e.shiftFrames(-1)})},[Object(a["f"])(l)]),e.isPlaying?(Object(a["i"])(),Object(a["d"])("button",{key:0,class:"vidControl",onClick:t[3]||(t[3]=function(t){return e.setPlayState(!1)})},[Object(a["f"])(i)])):Object(a["e"])("",!0),e.isPlaying?Object(a["e"])("",!0):(Object(a["i"])(),Object(a["d"])("button",{key:1,class:"vidControl",onClick:t[4]||(t[4]=function(t){return e.setPlayState(!0)})},[Object(a["f"])(f)])),Object(a["f"])("button",{class:"vidControl",onClick:t[5]||(t[5]=function(t){return e.shiftFrames(1)})},[Object(a["f"])(d)]),Object(a["f"])("button",V,[Object(a["f"])(s)]),P,w,Object(a["f"])("select",{name:"FrameRate",onChange:t[6]||(t[6]=function(){return e.updateFrameRate&&e.updateFrameRate.apply(e,arguments)})},[(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["m"])(e.supportedFrameRates,(function(e){return Object(a["i"])(),Object(a["d"])("option",{selected:30===e,value:e},Object(a["o"])(e)+" fps",9,["selected","value"])})),256)),T],32),A,Object(a["f"])("button",{onClick:t[7]||(t[7]=function(){return e.updateVideoMarker&&e.updateVideoMarker.apply(e,arguments)})},"Mark Video"),I,Object(a["f"])("button",{onClick:t[8]||(t[8]=function(){return e.updateAudioMarker&&e.updateAudioMarker.apply(e,arguments)})},"Mark Audio"),x,Object(a["f"])("p",null,"Audio Time: "+Object(a["o"])(e.toMs(e.audioMarker))+"ms",1),Object(a["f"])("p",null,"Video Time: "+Object(a["o"])(e.toMs(e.videoMarker))+"ms",1),Object(a["f"])("p",null,"Difference: "+Object(a["o"])(e.toMs(e.diffMarker))+"ms",1),Object(a["f"])("p",null,"Time: "+Object(a["o"])(e.formattedTime),1)])})),_=(n("99af"),n("0a35")),L=n("b85c"),U=function e(t){var n=t.props,a=n.attrs,r=n.class;return a&&(t.props=a,t.props.class=r),Array.isArray(t.children)&&(t.children=t.children.map((function(t){return e(t)}))),t},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"16";if(Array.isArray(e)){var n,r=Object(L["a"])(e);try{var o=function(){var e=n.value,r=e,o=r.render(a["h"],{props:{size:t},data:{}});r.render=function(){return U(o)}};for(r.s();!(n=r.n()).done;)o()}catch(l){r.e(l)}finally{r.f()}}else{var u=e,c=u.render(a["h"],{props:{size:t},data:{}});u.render=function(){return U(c)}}};function E(e,t){return Math.floor(e*t)}q([_["c"],_["a"],_["d"],_["b"],_["f"],_["e"]],"30");var B=[23.976,24,29.97,30,60],D=Object(a["g"])({components:{ChevronLeftIcon:_["a"],ChevronsLeftIcon:_["c"],ChevronRightIcon:_["b"],ChevronsRightIcon:_["d"],PlayCircleIcon:_["f"],PauseCircleIcon:_["e"]},props:{isPlaying:{type:Boolean,default:!1},frameRate:{type:Number,default:B[3]},currentTime:{type:Number,default:0}},setup:function(e,t){var n=t.emit,r=Object(a["p"])(e),o=r.currentTime,u=r.frameRate,c=Object(a["l"])(0),l=Object(a["l"])(0);return{supportedFrameRates:B,updateFrameRate:function(e){var t=e.target;n("frameRateChanged",Number(t.value))},updateVideoPath:function(e){var t,a=e.target,r=null===(t=a.files)||void 0===t?void 0:t.item(0);if(null==r)throw"File cannot be null";var o=URL.createObjectURL(r);n("videoSelected",{path:o,file:r})},updateVideoMarker:function(){l.value=o.value},updateAudioMarker:function(){c.value=o.value},setPlayState:function(e){n("playToggle",e)},shiftFrames:function(e){n("onFrameShift",e)},audioMarker:c,videoMarker:l,diffMarker:Object(a["b"])((function(){return l.value-c.value})),formattedTime:Object(a["b"])((function(){var e=E(o.value,u.value);return"".concat(Math.floor(1e3*o.value),"ms (Frame #").concat(e,")")})),toMs:function(e){return Math.floor(1e3*e)}}}});n("491a");D.render=N,D.__scopeId="data-v-90c67842";var G=D,z=Object(a["g"])({components:{AVSVideo:s,AVSAudio:S,AVSControls:G},setup:function(){var e=Object(a["l"])(null),t=Object(a["l"])(null),n=Object(a["l"])(0),r=Object(a["l"])(!1),o=Object(a["l"])(30),u=Object(a["l"])(0),c=Object(a["l"])(0),l=Object(a["b"])((function(){return Math.round(n.value*o.value)})),i=Object(a["b"])((function(){return Array.from({length:l.value},(function(e,t){return t/o.value+.5/o.value}))})),f=Object(a["b"])((function(){return E(u.value,o.value)}));return{videoFilePath:e,videoFile:t,videoDuration:n,frames:l,isPlaying:r,frameRate:o,currentTime:u,updateTime:c,currentFrame:f,frameTimeArray:i,updateVideoPath:function(n){void 0!=e.value&&URL.revokeObjectURL(e.value),e.value=n.path,t.value=n.file},updateVideoMetadata:function(e){n.value=e.duration},updateIsPlaying:function(e){r.value=e},updateFrameRate:function(e){o.value=e},updateCurrentTime:function(e){u.value=e},shiftFrames:function(e){c.value=(f.value+e+.5)/o.value},timeString:Object(a["b"])((function(){return u.value}))}}});n("2096"),n("6fd1");z.render=l,z.__scopeId="data-v-48ef4f78";var J=z,W={components:{Manager:J}};n("80a9");W.render=o;var H=W,K=n("9483");Object(K["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Q=Object(a["c"])(H);Q.mount("#app")},f03c:function(e,t,n){}});
//# sourceMappingURL=app.8ba89aac.js.map