(this["webpackJsonpreact-boot"]=this["webpackJsonpreact-boot"]||[]).push([[1],{12:function(e,t,a){"use strict";a.d(t,"p",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"m",(function(){return j})),a.d(t,"r",(function(){return b})),a.d(t,"g",(function(){return p})),a.d(t,"h",(function(){return m})),a.d(t,"b",(function(){return O})),a.d(t,"a",(function(){return h})),a.d(t,"d",(function(){return x})),a.d(t,"n",(function(){return f})),a.d(t,"o",(function(){return g})),a.d(t,"q",(function(){return y})),a.d(t,"l",(function(){return v})),a.d(t,"j",(function(){return N})),a.d(t,"u",(function(){return S})),a.d(t,"s",(function(){return w})),a.d(t,"k",(function(){return T})),a.d(t,"c",(function(){return _})),a.d(t,"f",(function(){return P})),a.d(t,"i",(function(){return D})),a.d(t,"t",(function(){return U}));var n=a(6),c=a.n(n),r=a(13),s=a(4),o=a.n(s),l="http://localhost:5000",i=localStorage.getItem("token");function d(e){return o.a.post("".concat(l,"/login/getUser"),e)}function u(e){return o.a.post("".concat(l,"/login/addUser"),e)}function j(e){return o.a.post("".concat(l,"/login/forgotPassword"),e)}function b(e){return o.a.post("".concat(l,"/login/recoverPassword"),e)}function p(e){return o.a.post("".concat(l,"/login/changePassword"),e)}function m(e){return o.a.post("".concat(l,"/login/editprofile"),e)}function O(e){return o.a.post("".concat(l,"/admin/addcolor"),e)}function h(e){return o.a.post("".concat(l,"/admin/addcategory"),e)}function x(e){return o.a.post("".concat(l,"/admin/addproduct"),e)}function f(){return o.a.get("".concat(l,"/admin/getcategories"))}function g(){return console.log(i),o.a.get("".concat(l,"/admin/getcolor"))}function y(){return o.a.get("".concat(l,"/product"))}function v(e){return o.a.post("".concat(l,"/product/fetchproduct"),e)}function N(e){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/fetchcart"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/setcart"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return I.apply(this,arguments)}function I(){return(I=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/searchProduct"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return A.apply(this,arguments)}function A(){return(A=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/fetchplacedorder"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/addplacedorder"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return z.apply(this,arguments)}function z(){return(z=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/cancelorder"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/fetchaddress"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l,"/product/setaddress"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},39:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(1),r=a.n(c),s=a(18),o=a.n(s),l=(a(39),a(33)),i=a(11),d=a(5),u=a(14),j=a(2),b=a(12),p=a(0);function m(){var e=Object(j.g)(),t=Object(i.c)((function(e){return e.isLoggedIn})),a=Object(i.c)((function(e){return e.cartCount})),n=(Object(i.c)((function(e){return e.Products})),Object(i.b)());return Object(p.jsxs)("div",{children:[Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsxs)(d.b,{className:"navbar-brand",style:{fontSize:"30px",padding:"0px 10px 0px 10px"},to:"/",children:["Neo",Object(p.jsx)("span",{style:{color:"red"},children:"Store"})]}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(p.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link active",style:{fontSize:"20px"},"aria-current":"page",to:"/",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link active",style:{fontSize:"20px"},"aria-current":"page",to:"/productpage",children:"Product"})}),Object(p.jsx)("li",{className:"nav-item",children:t?Object(p.jsx)(d.b,{className:"nav-link active",style:{fontSize:"20px"},"aria-current":"page",to:"order",children:"Order"}):Object(p.jsx)(d.b,{className:"nav-link active",style:{fontSize:"20px"},"aria-current":"page",to:"/login",children:"Order"})})]}),Object(p.jsxs)("form",{className:"d-flex",children:[Object(p.jsxs)(d.b,{to:"/search",style:{fontSize:"19px",width:"200px",marginRight:"10px",textAlign:"left"},className:"btn btn-light",children:[Object(p.jsx)("i",{style:{display:"inline",fontSize:"24px",padding:"5px 8px 5px 0px",marginRight:"0px"},className:"fa fa-search icon"}),"Search"]}),Object(p.jsxs)(d.b,{to:"/cart",className:"btn btn-light",children:[Object(p.jsx)("i",{style:{display:"inline",fontSize:"24px",paddingRight:"5px"},className:"fa",children:"\uf07a"}),"Cart",Object(p.jsx)("span",{className:"cartValue",children:a})]}),Object(p.jsxs)("div",{style:{marginLeft:"10px"},className:"dropdown",children:[Object(p.jsx)("button",{className:"btn btn-light dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(p.jsx)("i",{style:{fontSize:"29px"},className:"fa fa-user-circle-o"})}),Object(p.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[t?Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"dropdown-item",to:"/myAccount",children:"Account"})}):Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"dropdown-item",to:"/login",children:"Account"})}),Object(p.jsx)("li",{children:t?Object(p.jsx)("button",{className:"dropdown-item",onClick:function(){if(n({type:"ISLOGGEDOUT"}),void 0!==localStorage.getItem("token")&&void 0!==localStorage.getItem("myCart")){var t=localStorage.getItem("token"),a=Object(u.a)(t),c=localStorage.getItem("myCart");Object(b.u)({cartData:c,token:localStorage.getItem("token"),user_id:a.uid._id})}e("/")},children:"Logout"}):Object(p.jsx)(d.b,{className:"dropdown-item",to:"/login",children:"Login"})})]})]})]})]})]})}),Object(p.jsx)("br",{})]})}function O(){return Object(p.jsxs)("div",{className:"footerBody",children:[Object(p.jsxs)("div",{className:"row text-center",children:[Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("p",{className:"heading",children:"About Company"}),Object(p.jsxs)("p",{children:["Neostore E-commerece is here at your quick and easy service",Object(p.jsx)("br",{})," for shopping."]}),Object(p.jsx)("p",{children:"Contact Information"}),Object(p.jsx)("p",{children:"Email: singhgaurav9876@gmail.com"}),Object(p.jsx)("p",{children:"Phone: 9340282848"}),Object(p.jsx)("p",{children:"Bhopal, India"})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("p",{className:"heading",children:"Information"}),Object(p.jsx)(d.b,{to:"termsandconditions",style:{textDecoration:"none",color:"white"},children:"Terms and Conditions."}),Object(p.jsx)("p",{children:"Guarantee and Return Policy"}),Object(p.jsx)("p",{children:"Contact Us"}),Object(p.jsx)("p",{children:"Privacy Policy"}),Object(p.jsx)("p",{children:"Locate Us"})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("p",{className:"heading",children:"Newsletter"}),Object(p.jsxs)("p",{children:["signup to get exclusive offer from your favorite brands and to",Object(p.jsx)("br",{}),"be well up in the news"]}),Object(p.jsx)("input",{type:"email",placeholder:"Your emial..."}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"btn btn-light",children:"Subscribe"})]})]}),Object(p.jsx)("p",{style:{marginTop:"5px"},className:"text-center",children:"Copyright 2021 NeoStore E-commerce All rights reserved ! Designed by Gaurav Chouhan"})]})}var h=a(15),x=a(8);function f(){var e=Object(i.b)(),t=Object(j.g)(),a=Object(c.useState)({class:"toast",message:""}),r=Object(x.a)(a,2),s=r[0],o=r[1],l=Object(i.c)((function(e){return e.Products}));console.log(l),Object(c.useEffect)((function(){if(Object(b.q)().then((function(t){return e({type:"AddProduct",payload:t.data})})),void 0!=localStorage.getItem("token")){var t=localStorage.getItem("token"),a=Object(u.a)(t);if(e({type:"SETUID",payload:a.uid}),Object(b.j)({user_id:a.uid._id,token:localStorage.getItem("token")}).then((function(t){var a=JSON.parse(t.data.cart_value);if(void 0!=localStorage.getItem("myCart")){var n=JSON.parse(localStorage.getItem("myCart"));for(var c in a)if(Object.keys(n).includes(c)){var r=n[c],s=a[c];n[c]=r>s?r:s;var o=Object.keys(n);e({type:"CARTCOUNT",payload:o.length}),localStorage.setItem("myCart",JSON.stringify(n))}else{var l=a[c];n[c]=l;var i=Object.keys(n);e({type:"CARTCOUNT",payload:i.length}),localStorage.setItem("myCart",JSON.stringify(n))}}else{var d=Object.keys(a);e({type:"CARTCOUNT",payload:d.length}),localStorage.setItem("myCart",JSON.stringify(a))}})),void 0!=localStorage.getItem("myCart")){var n=localStorage.getItem("token"),c=Object(u.a)(n),r=localStorage.getItem("myCart");Object(b.u)({cartData:r,user_id:c.uid._id,token:localStorage.getItem("token")})}Object(b.i)({user_id:a.uid._id,token:localStorage.getItem("token")}).then((function(t){t.data&&e({type:"ADDRESS",payload:JSON.parse(t.data.address)})})),Object(b.k)({user_id:a.uid._id,token:localStorage.getItem("token")}).then((function(t){t.data&&e({type:"ORDER",payload:t.data})}))}}),[]);var d=function(e){o(Object(n.a)(Object(n.a)({},s),{},{class:"myclass",message:e})),setTimeout((function(){o(Object(n.a)(Object(n.a)({},s),{},{class:"toast"}))}),2e3)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide mt-3","data-bs-ride":"carousel",children:[Object(p.jsxs)("div",{className:"carousel-inner",children:[Object(p.jsx)("div",{className:"carousel-item active",children:Object(p.jsx)("img",{src:"media/1.jpg",height:"400px",className:"d-block w-100",alt:"..."})}),Object(p.jsx)("div",{className:"carousel-item",children:Object(p.jsx)("img",{src:"media/2.jpg",height:"400px",className:"d-block w-100",alt:"..."})}),Object(p.jsx)("div",{className:"carousel-item",children:Object(p.jsx)("img",{src:"media/3.jpg",height:"400px",className:"d-block w-100",alt:"..."})})]}),Object(p.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[Object(p.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(p.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(p.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[Object(p.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(p.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(p.jsx)("h2",{className:"text-center mt-4 ",children:"Popular Products"}),Object(p.jsx)("div",{className:"row my-4 container m-auto",children:l.slice(0,6).map((function(a){return Object(p.jsx)("div",{className:"col-lg-4 productCard",children:Object(p.jsxs)("div",{className:"productCardInner",style:{width:"19rem"},children:[Object(p.jsx)("img",{src:a.product_image[0].base64,onClick:function(){return e=a._id,void t("/productDetail/".concat(e));var e},className:"card-img-top m-auto",height:"180px",width:"100px",alt:"no image"}),Object(p.jsxs)("div",{className:"cardBody",children:[Object(p.jsx)("h5",{className:"cardTitle",children:a.product_name}),Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsxs)("span",{className:"productCardCost",children:["$",a.product_cost]}),Object(p.jsxs)("span",{className:"productCardRating",children:["Rating: ",Object(p.jsx)("span",{className:"cardRatingValue",children:a.product_rating}),Object(p.jsx)("i",{style:{color:"blue",fontSize:"20px"},className:"fa fa-star"})]})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){return function(t){if(void 0!=localStorage.getItem("myCart")){var a=JSON.parse(localStorage.getItem("myCart"));if(Object.keys(a).includes(String(t))){var n=a[t];a[t]=n+1;var c=Object.keys(a);e({type:"CARTCOUNT",payload:c.length}),localStorage.setItem("myCart",JSON.stringify(a)),d("Product Added!")}else{a[t]=1;var r=Object.keys(a);e({type:"CARTCOUNT",payload:r.length}),localStorage.setItem("myCart",JSON.stringify(a)),d("Product Added!")}}else{var s=Object(h.a)({},t,1),o=Object.keys(s);e({type:"CARTCOUNT",payload:o.length}),localStorage.setItem("myCart",JSON.stringify(s)),d("Product Added!")}}(a._id)},className:"btn btn-primary productCardBtn",children:"Add to Cart"})})]})]})},a._id)}))}),Object(p.jsx)("div",{className:"position-fixed top-0 end-0 p-3",style:{zIndex:"11"},children:Object(p.jsxs)("div",{id:"liveToast",className:s.class,role:"alert","aria-live":"assertive","aria-atomic":"true",children:[Object(p.jsxs)("div",{style:{backgroundColor:"#cff4fc",color:"black"},className:"toast-header",children:[Object(p.jsx)("strong",{class:"me-auto",children:"Message"}),Object(p.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]}),Object(p.jsx)("div",{style:{backgroundColor:"#cff4fc",color:"black"},className:"toast-body",children:s.message})]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})}function g(){var e=Object(j.g)(),t=Object(c.useState)([]),a=Object(x.a)(t,2),n=a[0],r=a[1],s=Object(c.useRef)(null),o=Object(c.useRef)(null),l=Object(c.useRef)(null),i=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useRef)(null);Object(c.useEffect)((function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token"),t=Object(u.a)(e);r(t.uid)}}),[]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Profile"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("p",{className:"profiletitle",children:"First Name"}),Object(p.jsx)("p",{className:"profiletitle",children:"Last Name"}),Object(p.jsx)("p",{className:"profiletitle",children:"Gender"}),Object(p.jsx)("p",{className:"profiletitle",children:"Date Of Birth"}),Object(p.jsx)("p",{className:"profiletitle",children:"Mobile Number"}),Object(p.jsx)("p",{className:"profiletitle",children:"Email"})]}),Object(p.jsxs)("div",{className:"col-md-8 editInput",children:[Object(p.jsx)("input",{ref:s,type:"text",defaultValue:void 0!=n.first_name?n.first_name:"",className:"form-control"}),Object(p.jsx)("input",{ref:o,type:"text",defaultValue:void 0!=n.last_name?n.last_name:"",className:"form-control"}),Object(p.jsx)("input",{ref:d,type:"text",defaultValue:void 0!=n.gender?n.gender:"",className:"form-control"}),Object(p.jsx)("input",{ref:i,type:"text",defaultValue:void 0!=n.date_of_birth?n.date_of_birth:"",className:"form-control"}),Object(p.jsx)("input",{ref:l,type:"text",defaultValue:void 0!=n.mobile?n.mobile:"",className:"form-control"}),Object(p.jsx)("input",{ref:m,type:"text",disabled:!0,defaultValue:void 0!=n.email?n.email:"",className:"form-control"})]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{onClick:function(){var t={email:m.current.value,first_name:s.current.value,last_name:o.current.value,mobile:l.current.value,gender:d.current.value,dob:i.current.value};Object(b.h)(t).then((function(t){t.data.success&&e("/")}))},className:"btn btn-outline-dark",children:"Save"})]})}function y(){var e=Object(j.g)(),t=Object(i.b)(),a=Object(c.useState)(!1),n=Object(x.a)(a,2),r=n[0],s=n[1],o=(Object(i.c)((function(e){return e.Products})),Object(c.useState)([])),l=Object(x.a)(o,2),d=l[0],u=l[1];return console.log(d),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("input",{style:{width:"50%",marginLeft:"300px"},className:"form-control me-2",type:"search",placeholder:"Search",name:"search",onChange:function(e){var t=e.target.value;Object(b.s)({value:t}).then((function(e){e.data&&u(e.data)})),s(!r)},"aria-label":"Search"}),Object(p.jsx)("div",{style:{minHeight:"270px"},className:"row my-4 container m-auto",children:d.map((function(a){return Object(p.jsx)("div",{className:"col-lg-4 productCard",children:Object(p.jsxs)("div",{className:"productCardInner",style:{width:"19rem"},children:[Object(p.jsx)("img",{src:a.product_image[0].base64,onClick:function(){return t=a._id,void e("/productDetail/".concat(t));var t},className:"card-img-top m-auto",height:"180px",width:"100px",alt:"no image"}),Object(p.jsxs)("div",{className:"cardBody",children:[Object(p.jsx)("h5",{className:"cardTitle",children:a.product_name}),Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsxs)("span",{className:"productCardCost",children:["$",a.product_cost]}),Object(p.jsxs)("span",{className:"productCardRating",children:["Rating: ",Object(p.jsx)("span",{className:"cardRatingValue",children:a.product_rating}),Object(p.jsx)("i",{style:{color:"blue",fontSize:"20px"},className:"fa fa-star"})]})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){return function(e){if(void 0!=localStorage.getItem("myCart")){var a=JSON.parse(localStorage.getItem("myCart"));if(Object.keys(a).includes(String(e))){var n=a[e];a[e]=n+1;var c=Object.keys(a);t({type:"CARTCOUNT",payload:c.length}),localStorage.setItem("myCart",JSON.stringify(a))}else{a[e]=1;var r=Object.keys(a);t({type:"CARTCOUNT",payload:r.length}),localStorage.setItem("myCart",JSON.stringify(a))}}else{var s=Object(h.a)({},e,1),o=Object.keys(s);t({type:"CARTCOUNT",payload:o.length}),localStorage.setItem("myCart",JSON.stringify(s))}}(a._id)},className:"btn btn-primary productCardBtn",children:"Add to Cart"})})]})]})},a._id)}))})]})}var v=r.a.lazy((function(){return a.e(18).then(a.bind(null,223))})),N=r.a.lazy((function(){return a.e(17).then(a.bind(null,224))})),C=r.a.lazy((function(){return a.e(16).then(a.bind(null,225))})),S=r.a.lazy((function(){return Promise.all([a.e(5),a.e(11)]).then(a.bind(null,241))})),k=r.a.lazy((function(){return a.e(12).then(a.bind(null,226))})),w=r.a.lazy((function(){return a.e(10).then(a.bind(null,227))})),I=r.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,228))})),T=r.a.lazy((function(){return Promise.all([a.e(0),a.e(21)]).then(a.bind(null,229))})),A=r.a.lazy((function(){return a.e(20).then(a.bind(null,230))})),_=r.a.lazy((function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,231))})),R=r.a.lazy((function(){return a.e(13).then(a.bind(null,232))})),P=r.a.lazy((function(){return a.e(24).then(a.bind(null,233))})),z=r.a.lazy((function(){return a.e(22).then(a.bind(null,234))})),D=r.a.lazy((function(){return a.e(23).then(a.bind(null,235))})),E=r.a.lazy((function(){return a.e(14).then(a.bind(null,236))})),U=r.a.lazy((function(){return Promise.all([a.e(7),a.e(15)]).then(a.bind(null,237))})),L=r.a.lazy((function(){return a.e(9).then(a.bind(null,238))})),J=r.a.lazy((function(){return a.e(8).then(a.bind(null,240))}));function B(){return Object(p.jsx)(c.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/invoice/:id",element:Object(p.jsx)(U,{})}),Object(p.jsx)(j.b,{path:"/",element:Object(p.jsx)(f,{})}),Object(p.jsx)(j.b,{path:"/login",element:Object(p.jsx)(S,{})}),Object(p.jsx)(j.b,{path:"/forgotpassword",element:Object(p.jsx)(w,{})}),Object(p.jsx)(j.b,{path:"/recoverpassword/:email",element:Object(p.jsx)(k,{})}),Object(p.jsx)(j.b,{path:"/recoverpassword",element:Object(p.jsx)(k,{})}),Object(p.jsx)(j.b,{path:"/register",element:Object(p.jsx)(I,{})}),Object(p.jsx)(j.b,{path:"/addproduct",element:Object(p.jsx)(T,{})}),Object(p.jsx)(j.b,{path:"/addcategory",element:Object(p.jsx)(_,{})}),Object(p.jsx)(j.b,{path:"/checkout",element:Object(p.jsx)(E,{})}),Object(p.jsx)(j.b,{path:"/addcolor",element:Object(p.jsx)(A,{})}),Object(p.jsxs)(j.b,{path:"/myAccount",element:Object(p.jsx)(C,{}),children:[Object(p.jsx)(j.b,{path:"/myAccount/order",element:Object(p.jsx)(N,{})}),Object(p.jsx)(j.b,{path:"/myAccount/",element:Object(p.jsx)(P,{})}),Object(p.jsx)(j.b,{path:"/myAccount/changePAssword",element:Object(p.jsx)(D,{})}),Object(p.jsx)(j.b,{path:"/myAccount/address",element:Object(p.jsx)(z,{})}),Object(p.jsx)(j.b,{path:"/myAccount/editprofile",element:Object(p.jsx)(g,{})})]}),Object(p.jsx)(j.b,{path:"/order",element:Object(p.jsx)(N,{})}),Object(p.jsx)(j.b,{path:"/productDetail/:id",element:Object(p.jsx)(J,{})}),Object(p.jsx)(j.b,{path:"/productpage",element:Object(p.jsx)(v,{})}),Object(p.jsx)(j.b,{path:"/cart",element:Object(p.jsx)(R,{})}),Object(p.jsx)(j.b,{path:"/termsandconditions",element:Object(p.jsx)(L,{})}),Object(p.jsx)(j.b,{path:"/search",element:Object(p.jsx)(y,{})})]})})}function G(){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(B,{}),Object(p.jsx)(O,{})]})}var V=function(e){e&&e instanceof Function&&a.e(26).then(a.bind(null,239)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},F=(a(65),{isLoggedIn:!1,uid:{},Products:[],cartCount:0,totalCost:0,address:[],order:[],searchData:[]});var M=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AddProduct":return Object(n.a)(Object(n.a)({},e),{},{Products:t.payload});case"SETUID":return Object(n.a)(Object(n.a)({},e),{},{uid:t.payload});case"ISLOGGEDIN":return Object(n.a)(Object(n.a)({},e),{},{isLoggedIn:!0});case"ISLOGGEDOUT":return Object(n.a)(Object(n.a)({},e),{},{isLoggedIn:!1});case"CARTCOUNT":return Object(n.a)(Object(n.a)({},e),{},{cartCount:t.payload});case"incTOTALCOST":return Object(n.a)(Object(n.a)({},e),{},{totalCost:e.totalCost+Number(t.payload)});case"ADDRESS":return Object(n.a)(Object(n.a)({},e),{},{address:t.payload});case"ORDER":return Object(n.a)(Object(n.a)({},e),{},{order:t.payload});case"SEARCHDATA":return Object(n.a)(Object(n.a)({},e),{},{searchData:t.payload});default:return e}}));o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(i.a,{store:M,children:Object(p.jsx)(G,{})})}),document.getElementById("root")),V()}},[[66,2,4]]]);
//# sourceMappingURL=main.9b5d0f6d.chunk.js.map