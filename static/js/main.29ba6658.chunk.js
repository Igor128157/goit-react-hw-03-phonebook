(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={deleteButton:"Contact_deleteButton__2HzE5"}},15:function(t,e,n){t.exports=n(23)},20:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(12),r=n.n(o),l=(n(20),n(14)),u=n(3),i=n(4),m=n(6),s=n(5),d=n(2),h=n(7),b=n(1),p=n(8),f=n.n(p),v={name:"",id:"",number:""},g=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=Object(h.a)({},v),t.nameInputId=Object(b.v4)(),t.numberInputId=Object(b.v4)(),t.handleChange=function(e){var n,a=e.target,c=a.name,o=a.value;t.setState((n={},Object(d.a)(n,c,o),Object(d.a)(n,"id",Object(b.v4)()),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(h.a)({},t.state)),t.setState(Object(h.a)({},v))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=f.a.contactForm,o=f.a.submitButton,r=f.a.inputForm;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:a},c.a.createElement("label",{htmlFor:this.nameInputId},"Name"),c.a.createElement("input",{className:r,type:"text",id:this.nameInputId,name:"name",onChange:this.handleChange,value:e}),c.a.createElement("label",{htmlFor:this.numberInputId},"Number"),c.a.createElement("input",{className:r,type:"tel",id:this.numberInputId,name:"number",onChange:this.handleChange,value:n}),c.a.createElement("button",{className:o,type:"submit",disabled:!e||!n},"Add contact"))}}]),n}(a.Component),C=n(13),E=n.n(C),O=function(t){var e=t.name,n=t.number,a=t.onDelete;return c.a.createElement("li",null,c.a.createElement("span",null,e," : ",n),c.a.createElement("button",{type:"button",onClick:a,className:E.a.deleteButton},"Delete"))},j=function(t){var e=t.contacts,n=t.onDelete;return e.length>0&&c.a.createElement("ul",null,e.map((function(t){var e=t.name,a=t.id,o=t.number;return c.a.createElement(O,{key:a,name:e,number:o,onDelete:function(){return n(a)}})})))},F=function(t){var e=t.value,n=t.onChangeFilter,a=t.contactListLength,o=Object(b.v4)();return a>=2&&c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlFor:o},"Find contacts by name"),c.a.createElement("input",{type:"text",id:o,placeholder:"Enter contact name...",value:e,onChange:n}))},y=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){var n=e.target.value;t.setState({filter:n})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;t.contacts!==e&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(g,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(F,{value:n,onChangeFilter:this.changeFilter,contactListLength:e.length}),c.a.createElement(j,{contacts:a,onDelete:this.deleteContact}))}}]),n}(a.Component);r.a.render(c.a.createElement(y,null),document.getElementById("root"))},8:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__OrlO3",inputForm:"ContactForm_inputForm__2GJhT",submitButton:"ContactForm_submitButton__1j4U7"}}},[[15,1,2]]]);
//# sourceMappingURL=main.29ba6658.chunk.js.map