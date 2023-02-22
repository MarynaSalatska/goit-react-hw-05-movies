"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{854:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(243),a=n(184);function u(){return(0,a.jsx)(r.Fe,{height:"80",width:"80",color:"#6a67ce ",ariaLabel:"line-wave-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},126:function(e,t,n){n.d(t,{Z:function(){return i}});n(791);var r=n(689),a=n(87),u=n(184);function i(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:t&&t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{state:{from:n},to:"/movies/".concat(e.id),children:(0,u.jsx)("span",{children:e.title})})},e.id)}))})}},767:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(433),a=n(861),u=n(439),i=n(757),c=n.n(i),o=n(854),s=n(126),f=n(791),p=n(87),d=n(184);function l(e){var t=e.handleSubmit,n=(0,p.lr)(),r=(0,u.Z)(n,1)[0].get("name"),a=(0,f.useState)(null!==r&&void 0!==r?r:""),i=(0,u.Z)(a,2),c=i[0],o=i[1];return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c)},children:[(0,d.jsx)("input",{type:"text",placeholder:"Enter  movie",name:c,value:c||"",onChange:function(e){o(e.target.value)}}),(0,d.jsx)("button",{children:"Search"})]})})}var v=n(843);function h(){var e=(0,f.useState)("idle"),t=(0,u.Z)(e,2),n=t[0],i=t[1],h=(0,p.lr)(),g=(0,u.Z)(h,2),m=g[0],b=g[1],x=m.get("query"),Z=(0,f.useState)([]),w=(0,u.Z)(Z,2),y=w[0],k=w[1];return console.log(x),(0,f.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("LOADING"),e.prev=1,i("FULFILLED"),e.next=5,(0,v.IW)(x);case 5:t=e.sent,console.log(t),k((0,r.Z)(t)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),i({status:"REJECTED"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}null!==x&&function(){e.apply(this,arguments)}(x)}),[x]),console.log(y),(0,d.jsxs)(d.Fragment,{children:["LOADING"===n&&(0,d.jsx)(o.Z,{}),(0,d.jsx)(l,{handleSubmit:function(e){b({query:e})}}),(0,d.jsx)(s.Z,{movies:y})]})}},843:function(e,t,n){n.d(t,{Cf:function(){return o},IW:function(){return s},kb:function(){return f},lc:function(){return c},uR:function(){return p}});var r=n(861),a=n(757),u=n.n(a),i=n(912);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US&page=1&include_adult=false&query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=fbd6a6d8896024a6d6681f42c8e9a3b7&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=767.d360139f.chunk.js.map