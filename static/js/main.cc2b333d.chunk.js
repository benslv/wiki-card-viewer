(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),s=a(11),l=a(12),o=a(13),u=a(17),h=a(14),p=a(6),m=a(18),d=a(7),f=a.n(d),g=a(8);function v(){return(v=Object(g.a)(f.a.mark(function e(t){var a,n,r,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+t,e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,b(r);case 9:return i=e.sent,e.next=12,k(i);case 12:return i=e.sent,e.abrupt("return",i);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e){for(var t=[],a=0;a<e[1].length;a++){var n={title:e[1][a],description:e[2][a],link:e[3][a],imgUrl:""};t.push(n)}return t}function k(e){return w.apply(this,arguments)}function w(){return(w=Object(g.a)(f.a.mark(function e(t){var a,n,r,i,c,s,l,o,u,h;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=!0,n=!1,r=void 0,e.prev=3,i=t[Symbol.iterator]();case 5:if(a=(c=i.next()).done){e.next=20;break}return s=c.value,l="https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&pithumbsize=500&titles="+s.title,e.next=10,fetch(l);case 10:return o=e.sent,e.next=13,o.json();case 13:u=e.sent,h=void 0;try{h=u.query.pages[0].thumbnail.source}catch(p){console.log("Thumbnail not found. Appended default instead."),h="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/500px-Wikipedia-logo-v2.svg.png"}s.imgUrl=h;case 17:a=!0,e.next=5;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(3),n=!0,r=e.t0;case 26:e.prev=26,e.prev=27,a||null==i.return||i.return();case 29:if(e.prev=29,!n){e.next=32;break}throw r;case 32:return e.finish(29);case 33:return e.finish(26);case 34:return e.abrupt("return",t);case 35:case"end":return e.stop()}},e,null,[[3,22,26,34],[27,,29,33]])}))).apply(this,arguments)}var y=a(33);var x=function(e){return r.a.createElement(y.a,null,r.a.createElement(y.a.Img,{variant:"top",src:e.imgUrl}),r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,e.title),r.a.createElement(y.a.Text,null,e.description),r.a.createElement("a",{className:"stretched-link",href:e.link},"Read More")))},E=a(29),j=a(30),O=a(31),N=a(32),T=(a(27),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={data:[],searchTerm:""},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.queryAPI=e.queryAPI.bind(Object(p.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"queryAPI",value:function(){var e=this;""===!this.state.searchTerm&&(console.log(this.state.searchTerm),function(e){return v.apply(this,arguments)}(this.state.searchTerm).then(function(t){e.setState({data:t})}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){this.state.data.forEach(function(e){console.log(e)});var e=this.state.data.map(function(e){return r.a.createElement(x,{title:e.title,description:e.description,link:e.link,imgUrl:e.imgUrl})});return r.a.createElement("div",{className:"bg-light fullscreen py-5 d-flex align-items-center"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement("h1",{className:"display-1"},"WikiCards"),r.a.createElement("p",{className:"lead"},"Search for something!"),r.a.createElement("div",{className:"my-5 d-flex justify-content-center"},r.a.createElement("input",{name:"searchTerm",type:"text",className:"bg-white form-control-plaintext shadow p-3 text-dark text-left rounded-pill-left border-0 w-75 search-bar",placeholder:"Type here...",onChange:this.handleChange}),r.a.createElement("button",{className:"border-0 btn p-3 search-button shadow rounded-pill-right d-flex align-items-center justify-content-center",onClick:this.queryAPI},r.a.createElement("i",{className:"material-icons"},"search"))),r.a.createElement(N.a,null,e)))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.cc2b333d.chunk.js.map