(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),i=(a(100),a(101),a(94)),o=a(13),u=a(14),s=a(16),m=a(15),p=a(17),h=a(23),b=a.n(h),f=a(24),E=a.n(f),v=a(26),y=a.n(v),g=a(25),x=a.n(g),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter User Details"}),r.a.createElement(y.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(x.a,{label:"continue",primary:!0,style:C.button,onClick:this.continue})))}}]),t}(n.Component),C={button:{margin:15}},O=d,j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter Personal Details"}),r.a.createElement(y.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter Your City",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(x.a,{label:"Continue",primary:!0,style:T.button,onClick:this.continue}),r.a.createElement(x.a,{label:"Back",primary:!1,style:T.button,onClick:this.back})))}}]),t}(n.Component),T={button:{margin:15}},S=j,k=a(27),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,c=e.city,i=e.bio;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Confirm User Data"}),r.a.createElement(k.List,null,r.a.createElement(k.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement("br",null),r.a.createElement(k.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement("br",null),r.a.createElement(k.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement("br",null),r.a.createElement(k.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement("br",null),r.a.createElement(k.ListItem,{primaryText:"City",secondaryText:c}),r.a.createElement("br",null),r.a.createElement(k.ListItem,{primaryText:"Bio",secondaryText:i})),r.a.createElement(x.a,{label:"Confirm & Continue",primary:!0,style:L.button,onClick:this.continue}),r.a.createElement(x.a,{label:"Back",primary:!1,style:L.button,onClick:this.back})))}}]),t}(n.Component),L={button:{margin:15}},w=N,D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Success"}),r.a.createElement("h1",null,"Thank You for Registering"),r.a.createElement("p",null,"You will get a confirmation email for this account")))}}]),t}(n.Component),Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(i.a)({},e,t.target.value))}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(O,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(S,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(w,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(D,null)}}}]),t}(n.Component);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,a){e.exports=a(238)}},[[95,1,2]]]);
//# sourceMappingURL=main.4b42fe5d.chunk.js.map