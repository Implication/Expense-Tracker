(this["webpackJsonpexense-tracker"]=this["webpackJsonpexense-tracker"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),u=(n(11),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Expense Tracker"))}),o=n(1),i=n(5),m=n(2),s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(m.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(m.a)({},e,{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},d={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},E=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(s,d),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(E).transactions;console.log(e);var t=e.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},t))},b=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",className:"money minus"},"-$",n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(E).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("div",null,r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"$",Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},"x")))},x=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},h=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],m=u[1],s=Object(a.useContext)(E).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+i};s(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text...",required:!0})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return m(e.target.value)},placeholder:"Enter amount...",required:!0})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var O=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(h,null)))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.eb3853e5.chunk.js.map