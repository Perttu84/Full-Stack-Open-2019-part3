(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=function(e){var n=e.persons,t=e.deleteFunction;return r.a.createElement(r.a.Fragment,null,n.map(function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return function(e,n){window.confirm("Delete ".concat(e.name,"?"))&&n(e.id)}(e,t)}},"delete"))}))},i=function(e){var n=e.value,t=e.changeFunction;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,u=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t},n)},f=t(3),d=t.n(f),b="/api/persons",h=function(){return d.a.get(b)},v=function(e){return d.a.post(b,e)},p=function(e,n){return d.a.put("".concat(b,"/").concat(e),n)},w=function(e){return d.a.delete("".concat(b,"/").concat(e))},E=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(o.a)(c,2),d=f[0],b=f[1],E=Object(a.useState)(""),g=Object(o.a)(E,2),C=g[0],O=g[1],j=Object(a.useState)(""),N=Object(o.a)(j,2),y=N[0],S=N[1],k=Object(a.useState)(null),L=Object(o.a)(k,2),T=L[0],F=L[1],D=Object(a.useState)(null),I=Object(o.a)(D,2),P=I[0],x=I[1];Object(a.useEffect)(function(){h().then(function(e){u(e.data)})},[]);var J=t.filter(function(e){return e.name.toLowerCase().includes(y.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{message:T,className:P}),r.a.createElement(i,{value:y,changeFunction:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{addPerson:function(e){e.preventDefault();var n={name:d,number:C};if(-1===t.map(function(e){return e.name.toLowerCase()}).indexOf(d.toLowerCase()))v(n).then(function(e){u(t.concat(e.data)),F("Successfully added ".concat(d)),x("success"),setTimeout(function(){F(null),x(null)},2e3)}).catch(function(e){F(e.response.data.error),x("error"),setTimeout(function(){F(null),x(null)},2e3)});else if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var a=t.find(function(e){return e.name.toLowerCase()===d.toLowerCase()});p(a.id,{name:d,number:C}).then(function(e){u(t.map(function(n){return n.id!==a.id?n:e.data})),F("Successfully updated ".concat(d,"'s number")),x("success"),setTimeout(function(){F(null),x(null)},2e3)}).catch(function(e){"Validation failed: name: Cannot read property 'ownerDocument' of null"===e.response.data.error?(F("Information of ".concat(d," has already been removed from server")),u(t.filter(function(e){return e.id!==a.id}))):F(e.response.data.error),x("error"),setTimeout(function(){F(null),x(null)},2e3)})}b(""),O("")},newName:d,newNumber:C,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(l,{persons:J,deleteFunction:function(e){var n=t.find(function(n){return n.id===e});w(e).then(function(a){u(t.filter(function(n){return n.id!==e})),F("Successfully removed ".concat(n.name)),x("success"),setTimeout(function(){F(null),x(null)},2e3)}).catch(function(e){F("Information of ".concat(n.name," has already been removed from server")),u(t.filter(function(e){return e.id!==n.id})),x("error"),setTimeout(function(){F(null),x(null)},2e3)})}}))};t(37);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.020638db.chunk.js.map