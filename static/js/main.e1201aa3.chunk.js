(this["webpackJsonpreact-hooks-use"]=this["webpackJsonpreact-hooks-use"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),s=(a(16),a(9)),u=a(3);var m=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),m=Object(u.a)(c,2),o=m[0],i=m[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e);var t=new Array(e.length).fill(null);i(t)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("p",{className:"heading"},"Users From JSONPlaceholder API"),a.map((function(e,t){return l.a.createElement("div",{className:"container",key:e.id},l.a.createElement("div",{className:"app__container"},l.a.createElement("p",{className:"user__name"},e.name),l.a.createElement("button",{className:"btn",onClick:function(e){!function(e,t){e.preventDefault();var n=Object(s.a)(o);n[t]?n[t]=null:n[t]=a[t],i(n)}(e,t)}},"Click Here")),o[t]?l.a.createElement(h,{user:o[t]}):null)})))},o=a(6),i=a(7),p=a(10),E=a(8),d=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.user,t=e.name,a=e.username,n=e.email,r=e.phone,c=e.website,s=e.address,u=e.company,m=s.street,o=s.city,i=s.zipcode,p=u.name;return l.a.createElement("div",{className:"user"},l.a.createElement("div",{className:"user__details"},l.a.createElement("p",{style:f.horizonatalRow},"Name: ",l.a.createElement("span",null," ",t," "),"\xa0\xa0 @ ",l.a.createElement("span",null,a)),l.a.createElement("p",null,"Email: ",l.a.createElement("span",null,n)),l.a.createElement("p",null,"Phone: ",l.a.createElement("span",null,r)),l.a.createElement("p",null,"Website: ",l.a.createElement("span",null,c)),l.a.createElement("p",null,"Company: ",l.a.createElement("span",null,p)),l.a.createElement("div",null,l.a.createElement("p",null,"Address: ",l.a.createElement("span",null,m),l.a.createElement("span",null,o," - ",i)))))}}]),a}(n.Component),f={horizonatalRow:{display:"flex",justifyContent:"spaceBetween"}},h=d;c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e1201aa3.chunk.js.map