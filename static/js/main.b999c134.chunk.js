(this["webpackJsonpreact-employee-dir"]=this["webpackJsonpreact-employee-dir"]||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),a=t.n(c),i=t(19),s=t.n(i),o=(t(29),t(30),t(3)),d=t(4);function u(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #D5E964;\n"]);return u=function(){return e},e}var l=d.a.div(u()),j=function(e){var n=e.children;return Object(r.jsxs)(l,{children:[" ",n," "]})};function h(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #23DA62;\n"]);return h=function(){return e},e}var f=d.a.div(h()),b=function(){return Object(r.jsxs)(f,{children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on column name to sort by heading or use search box to narrow results"})]})},O=t(5),m=a.a.createContext({users:[{}],filteredUsers:[{}],order:"",headings:[{}],handleSearchChange:function(){},handleSort:function(){}}),x=function(){var e=Object(c.useContext)(m).filteredUsers;console.log(e);var n=function(e){var n=e.split("-"),t=n[2].split("T"),r=n[0];return[n[1],t[0],r].join("-")};return Object(r.jsx)("tbody",{children:void 0!==e[0]&&void 0!==e[0].name?e.map((function(e){var t=e.name,c=e.picture,a=e.phone,i=e.email,s=e.dob,o=e.login;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-header":"Image",children:Object(r.jsx)("img",{src:c.medium,alt:"picture of "+t.first+" "+t.last})}),Object(r.jsxs)("td",{"data-header":"Name",children:[t.first," ",t.last]}),Object(r.jsx)("td",{"data-header":"Phone",children:a}),Object(r.jsx)("td",{"data-header":"Email",children:i}),Object(r.jsx)("td",{"data-header":"DOB",children:n(s.date)})]},o.uuid)})):Object(r.jsx)("tr",{children:"No matches found"})})};function v(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  table{\n    font-weight: bold;\n  }\n  tbody tr::nth-child(odd){\n    background-color: #DFEEDA;\n  }\n  tbody tr::nth-child(even){\n    background-color: #C2D1BD;\n  } \n"]);return v=function(){return e},e}var g=d.a.div(v()),p=function(){var e=Object(c.useContext)(m),n=e.headings,t=e.handleSort;return Object(r.jsx)(g,{children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:n.map((function(e){var n=e.name,c=e.width;return"Name"===n?Object(r.jsx)("th",{style:{width:c},onClick:t,children:n},n):Object(r.jsx)("th",{style:{width:c},children:n},n)}))})}),Object(r.jsx)(x,{})]})})},y=t(23),w=t.n(y),C={getUsers:function(){return w.a.get("https://randomuser.me/api/?results=100&nat=us")}};function S(){var e=Object(o.a)(["\n    input {\n      height: 40px;\n      border-radius: 5px;\n      background-color: #D0F9DE;\n      color: #ffffff;\n      font-size: 20px;\n    }\n"]);return S=function(){return e},e}var D=d.a.div(S()),k=function(){var e=Object(c.useContext)(m).handleSearchChange;return Object(r.jsx)(D,{children:Object(r.jsx)("input",{onChange:e,name:"search",type:"text",placeholder:"Search",id:"search"})})};function E(){var e=Object(o.a)(["\n\n"]);return E=function(){return e},e}d.a.div(E());var U=function(){var e=Object(c.useState)([{}]),n=Object(O.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)([{}]),s=Object(O.a)(i,2),o=s[0],d=s[1],u=Object(c.useState)("decending"),l=Object(O.a)(u,2),j=l[0],h=l[1],f=Object(c.useState)([{name:"Image",width:"10%"},{name:"Name",width:"15%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"15%"}]),b=Object(O.a)(f,2),x=b[0];b[1];Object(c.useEffect)((function(){C.getUsers().then((function(e){a(e.data.results),d(e.data.results)})).catch((function(e){console.log(e)}))}),[]);return Object(r.jsxs)(m.Provider,{value:{users:t,filteredUsers:o,order:j,headings:x,handleSearchChange:function(e){var n=e.target.value,r=t.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));d(r)},handleSort:function(){"decending"===j?(o.sort((function(e,n){return e.name.first<n.name.first||e.name.first===n.name.first&&e.name.last<n.name.last?1:-1})),h("ascending")):(o.sort((function(e,n){return e.name.first>n.name.first||e.name.first===n.name.first&&e.name.last>n.name.last?1:-1})),h("decending"))}},children:[Object(r.jsx)(k,{}),Object(r.jsx)(p,{})]})};function B(){var e=Object(o.a)(["\n\n"]);return B=function(){return e},e}var N=d.a.div(B()),I=function(){return Object(r.jsxs)(N,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(j,{children:Object(r.jsx)(U,{})})]})};var P=function(){return Object(r.jsx)(I,{})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b999c134.chunk.js.map