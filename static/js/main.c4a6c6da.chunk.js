(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},7:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),c=n(5),o=n(4),a=n(1),i=n.n(a),u=n(6),h=n.n(u),j=(n(13),n(0));function p(e){var t=e.posts;e.comments;return 0===t.length?Object(j.jsx)("div",{children:"Loading..."}):Object(j.jsx)(a.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" Top 10 Stories"}),Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,children:e.title})},e.id)}))})]})})}function l(){var e=i.a.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1],u=i.a.useState([]),h=Object(o.a)(u,2),l=h[0],f=h[1];return i.a.useEffect((function(){function e(){return(e=Object(c.a)(s.a.mark((function e(){var t,n,c,o,a,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hacker-news.firebaseio.com/v0/topstories.json",e.prev=1,e.next=4,fetch("https://hacker-news.firebaseio.com/v0/topstories.json");case 4:if(!1!==(t=e.sent).ok){e.next=7;break}throw new Error("Response Error:"+t.text);case 7:return e.next=9,t.json();case 9:return n=e.sent,c=n.slice(0,15).map((function(e){return fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json")).then((function(e){return e.json()}))})),e.next=13,Promise.all(c);case 13:return o=e.sent,a=o[0].kids,i=a.map((function(e){return fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json")).then((function(e){return e.json()}))})),e.next=18,Promise.all(i);case 18:u=e.sent,console.log("Testing",u),r(o),f(u),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(1),console.error(e.t0);case 27:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsx)(a.Fragment,{children:Object(j.jsx)("div",{className:"hacker",children:Object(j.jsx)(p,{posts:n,comments:l})})})}var f=document.getElementById("root");h.a.render(Object(j.jsx)(l,{}),f)}},[[7,1,2]]]);
//# sourceMappingURL=main.c4a6c6da.chunk.js.map