(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,a,t){},30:function(e,a){},32:function(e,a,t){},46:function(e,a,t){e.exports=t(90)},51:function(e,a,t){},52:function(e,a,t){},74:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),o=(t(51),t(12)),i=t(14),s=t(16),m=t(15),u=t(17),p=(t(32),t(18)),d=t(21),h=t(3),g=(t(52),t(5)),b=t.n(g),E=function e(){var a=this;Object(o.a)(this,e),this.login=function(e,t){return a.service.post("/login",{username:e,password:t}).then((function(e){return e.data}))},this.loggedin=function(){return a.service.get("/loggedin").then((function(e){return e.data}))},this.logout=function(){return a.service.post("/logout").then((function(e){return e.data}))};var t=b.a.create({baseURL:"http://localhost:5530/api/auth",withCredentials:!0});this.service=t},v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).logoutUser=function(){t.service.logout().then((function(){t.setState({adminLoggedIn:null}),t.props.getUser(null),t.props.history.push("/")}))},t.openMenu=function(){t.state.mobMenuOpen?t.setState({mobMenuOpen:!1}):t.setState({mobMenuOpen:!0})},t.state={adminLoggedIn:null,mobMenuOpen:!1,scrollTop:!1},t.service=new E,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(d.a)({},this.state,{adminLoggedIn:e.adminInSession}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.mobMenuOpen,n=a.scrollTop;return this.state.adminLoggedIn?r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"Navbar_Cont"},r.a.createElement("div",{className:"Navbar_Left"},r.a.createElement(h.b,{className:"Navbar-Link Link--Bold Navbar_marginLeft__none",to:"/"},"AM\xc9LIE PEINGNEZ")),r.a.createElement("div",{className:"Navbar_Right"},r.a.createElement(h.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/contact"},"Contact"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/add"},"Add Pic"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/logout",onClick:function(){return e.logoutUser()}},"Logout")),r.a.createElement("div",{className:"Navbar_Right--Mob"},r.a.createElement("div",{className:"Navbar_Right--Mob_Open ".concat(n?"Navbar_Right__fixed":""),onClick:function(){return e.openMenu()}},r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open3":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open2":""," ")})),r.a.createElement("div",{className:"Navbar_Right--Mob_Menu ".concat(t?"":"Navbar_Right--Mob_Menu--hidden")},r.a.createElement(h.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/contact"},"Contact"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/add"},"Add Pic"),r.a.createElement(h.b,{className:"Navbar-Link Navbar_marginRight__none",to:"/logout",onClick:function(){return e.logoutUser()}},"Logout"))))):r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"Navbar_Cont"},r.a.createElement("div",{className:"Navbar_Left"},r.a.createElement(h.b,{className:"Navbar-Link Link--Bold Navbar_marginLeft__none",to:"/"},"AM\xc9LIE PEINGNEZ")),r.a.createElement("div",{className:"Navbar_Right"},r.a.createElement(h.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(h.b,{className:"Navbar-Link Navbar_marginRight__none",to:"/contact"},"Contact")),r.a.createElement("div",{className:"Navbar_Right--Mob"},r.a.createElement("div",{className:"Navbar_Right--Mob_Open ".concat(n?"Navbar_Right__fixed":""),onClick:function(){return e.openMenu()}},r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open3":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open2":""," ")})),r.a.createElement("div",{className:"Navbar_Right--Mob_Menu ".concat(t?"":"Navbar_Right--Mob_Menu--hidden")},r.a.createElement(h.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(h.b,{className:"Navbar-Link",to:"/contact"},"Contact")))))}}]),a}(n.Component),N=Object(p.g)(v),f=(t(74),t(13)),_={infinite:!0,indicators:!1,arrows:!1,duration:5e3,transitionDuration:800};function O(){return r.a.createElement("div",{className:"Home"},r.a.createElement(f.Fade,Object.assign({className:"Home_Background"},_),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{className:"Home_Background_Pic",src:"pictures/home4.jpg",alt:"Background home"})),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{className:"Home_Background_Pic",src:"pictures/home2.jpg",alt:"Background home"})),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{className:"Home_Background_Pic",src:"pictures/home3.jpg",alt:"Background home"}))),r.a.createElement("div",{className:"Home_Container"},r.a.createElement("h2",{className:"Home_Title"},"AM\xc9LIE PEINGNEZ"),r.a.createElement("div",{className:"Home_Text"},r.a.createElement(h.b,{className:"Home_Link",to:"/galerie"},"Galerie"))),r.a.createElement("a",{href:"https://www.instagram.com/coachingphotovoyage/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"Home_Social"},r.a.createElement("img",{src:"pictures/instagram-brands.svg",alt:"Instagram"}))))}var j=t(9);t(82);function k(){var e=Object(n.useState)([{src:"pictures/faune.jpg"},{src:"pictures/flore.jpg"},{src:"pictures/terre.jpg"},{src:"pictures/mer.jpg"}]),a=Object(j.a)(e,1)[0];return Object(n.useEffect)((function(){b.a.get("".concat("https://amelie-photography.herokuapp.com/","photos")).then((function(e){})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"Galerie"},r.a.createElement("h2",null,"Ma galerie"),r.a.createElement("div",{className:"Galerie-Theme"},r.a.createElement(h.b,{to:"/faune"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[0].src,alt:"Faune"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Faune"))),r.a.createElement(h.b,{to:"/flore"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[1].src,alt:"Flore"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Flore"))),r.a.createElement(h.b,{to:"/terre"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[2].src,alt:"Terre"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Terre"))),r.a.createElement(h.b,{to:"/mer"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[3].src,alt:"Mer"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Mer")))))}t(24);var L=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BackToMob"},r.a.createElement(h.b,{className:"BackToMob_Link",to:"/galerie"},"Voir les th\xe8mes"))}}]),a}(n.Component),y={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,pauseOnHover:!0,arrows:!0};function M(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){b.a.get("".concat("https://amelie-photography.herokuapp.com/","photos")).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Faune theme__padding"},r.a.createElement(L,null),r.a.createElement("h2",null,"Faune"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(f.Fade,y,t.filter((function(e){return"Faune"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Faune"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var C={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,arrows:!0};function I(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){b.a.get("".concat("https://amelie-photography.herokuapp.com/","photos")).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Flore theme__padding"},r.a.createElement(L,null),r.a.createElement("h2",null,"Flore"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(f.Fade,C,t.filter((function(e){return"Flore"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Flore"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var S={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,arrows:!0};function T(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){b.a.get("".concat("https://amelie-photography.herokuapp.com/","photos")).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Terre theme__padding"},r.a.createElement(L,null),r.a.createElement("h2",null,"Terre"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(f.Fade,S,t.filter((function(e){return"Terre"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Terre"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var w={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,arrows:!0};function R(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){b.a.get("".concat("https://amelie-photography.herokuapp.com/","photos")).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Mer theme__padding"},r.a.createElement(L,null),r.a.createElement("h2",null,"Mer"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(f.Fade,w,t.filter((function(e){return"Mer"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Mer"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var F=t(30),G=t.n(F);t(83);function P(){return r.a.createElement("div",{className:"About"},r.a.createElement("h2",null,"\xc0 propos"),r.a.createElement("div",{className:"About-Picture_Wrap"},r.a.createElement("img",{src:"pictures/profile.jpg",className:"About-Picture_Wrap__Img",alt:"Profile"})),r.a.createElement("div",{className:"About-Text"},r.a.createElement("p",{className:"About-Para"},"Mes parents m\u2019ont offert mon premier appareil photo num\xe9rique en 2005 lorsque j\u2019avais 17 ans. Une v\xe9ritable r\xe9v\xe9lation. J\u2019ai alors pass\xe9 toutes mes vacances derri\xe8re un viseur. Depuis ce jour, j\u2019ai toujours associ\xe9 le voyage \xe0 la photographie et la photographie au voyage.",r.a.createElement("br",null),r.a.createElement("br",null),"C\u2019est 10 ans plus tard que ma vie a pris un tournant quand mon compagnon et moi avons d\xe9cid\xe9 de partir voyager pendant deux ans et demi. A nous la d\xe9couverte de l\u2019Australie, de l\u2019Indon\xe9sie, la Nouvelle-Z\xe9lande, Hawaii, l\u2019Ouest Am\xe9ricain, Cuba et le Qu\xe9bec. ",r.a.createElement("br",null),r.a.createElement("br",null),"Tous ces paysages que j\u2019ai vu d\xe9filer. Ces regards \xe9chang\xe9s. Ces faunes et ces flores que je d\xe9couvrais. Ils marquent \xe0 jamais.  J\u2019ai v\xe9cu ces moments. Je suis ces moments. Je ne pouvais pas garder toutes ces beaut\xe9s pour moi. J\u2019avais besoin de les partager. ",r.a.createElement("br",null),r.a.createElement("br",null),"Quoi de mieux que la photographie pour le faire ? ",r.a.createElement("br",null)),r.a.createElement("p",{className:"About-Qwig"},"Am\xe9lie"),r.a.createElement("a",{href:"https://www.instagram.com/coachingphotovoyage/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"About-Text_Insta"},r.a.createElement("img",{className:"About-Text_Insta-img",src:"pictures/instagram-brands.svg",alt:"Instagram"})))))}t(84);var x=t(45),A=t.n(x),U=t(19);function B(){return r.a.createElement("div",{className:"Contact"},r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,"Pour tout renseignement, veuillez envoyer un e-mail \xe0:"),r.a.createElement("p",{className:"contact_mail",onClick:function(){A()("ameliepeingnezphotography@gmail.com"),document.querySelector(".contact_mail").style="color: grey",Object(U.b)("Copi\xe9 !",{autoClose:0,draggable:!1,closeButton:!1})}},"ameliepeingnezphotography@gmail.com"," ",r.a.createElement("img",{style:{width:"20px"},src:"https://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/copy-icon.png",alt:"Copy Icon"})),r.a.createElement(U.a,{style:{margin:"10px auto"}}))}function z(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",{className:"Footer_Title"},"Am\xe9lie Peingnez Photography"),r.a.createElement("div",{className:"Footer_Social"},r.a.createElement("a",{className:"Footer_Social_IG",href:"https://www.instagram.com/coachingphotovoyage/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{style:{width:"100%",margin:"auto",display:"block"},src:"pictures/instagram-brands.svg",alt:"Instagram"})),r.a.createElement("div",{className:"Footer_Social_Line"}),r.a.createElement(h.b,{to:"/contact",className:"Footer_Social_CT"},"Contact")))}var H=t(22);t(88);function D(){var e=Object(n.useReducer)((function(e,a){return Object(d.a)({},e,{},a)}),{name:"",color:"",location:"",description:"",url:"",theme:""}),a=Object(j.a)(e,2),t=a[0],c=a[1],l=function(e){var a=e.target.name,t=e.target.value;c(Object(H.a)({},a,t))};return r.a.createElement("div",{className:"AddPicture"},r.a.createElement(U.a,{autoClose:3e3}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b.a.post("".concat("https://amelie-photography.herokuapp.com/","photos/add"),t).then((function(e){Object(U.b)("".concat(t.name," a bien \xe9t\xe9 charg\xe9e sur le site !"),{autoClose:3e3}),c({name:"",color:"",url:"",theme:"",location:"",description:""})})).catch((function(e){console.log("Error while trying to add a new picture :",e)}))},className:"AddPicture_Form"},r.a.createElement("label",null,"Nom: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:l}),r.a.createElement("br",null),r.a.createElement("label",null,"Couleur: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"color",value:t.color,onChange:l}),r.a.createElement("br",null),r.a.createElement("label",null,"Location: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"location",value:t.location,onChange:l}),r.a.createElement("br",null),r.a.createElement("label",null,"Description: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"description",value:t.description,onChange:l}),r.a.createElement("br",null),r.a.createElement("label",null,"Photo: "),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"url",onChange:function(e){var a=new FormData;a.append("imageUrl",e.target.files[0]),b.a.post("".concat("https://amelie-photography.herokuapp.com/","photos/upload"),a).then((function(e){c({url:e.data.secure_url}),Object(U.b)("La photo a \xe9t\xe9 t\xe9l\xe9charg\xe9e \xe0 Cloudinary !",{autoClose:3e3})})).catch((function(e){console.log("Error while uploading the file",e)}))}}),r.a.createElement("br",null),r.a.createElement("label",null,"Th\xe8me: "),r.a.createElement("br",null),r.a.createElement("select",{name:"theme",value:t.theme,onChange:l},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Faune"},"Faune"),r.a.createElement("option",{value:"Flore"},"Flore"),r.a.createElement("option",{value:"Terre"},"Terre"),r.a.createElement("option",{value:"Mer"},"Mer"),r.a.createElement("option",{value:"Ville"},"Ville"),r.a.createElement("option",{value:"Portrait"},"Portrait")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Envoyer")))}t(89);var q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(H.a)({},n,r))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.password;t.service.login(n,r).then((function(e){t.setState({username:"",password:""}),t.props.getUser(e)})).catch((function(e){return console.log(e)}))},t.state={username:"",password:"",adminLoggedIn:null},t.service=new E,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(d.a)({},this.state,{adminLoggedIn:e.adminInSession}))}},{key:"render",value:function(){var e=this;return this.state.adminLoggedIn?r.a.createElement(p.a,{to:"/galerie"}):r.a.createElement("div",{className:"Login"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("button",null,"Login")))}}]),a}(n.Component),J=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).getTheUser=function(e){t.setState({adminLoggedIn:e})},t.state={adminLoggedIn:null},t.service=new E,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"fetchUser",value:function(){var e=this;null===this.state.adminLoggedIn&&this.service.loggedin().then((function(a){console.log(e.state.adminLoggedIn),e.setState({adminLoggedIn:a})})).catch((function(a){e.setState({adminLoggedIn:!1})}))}},{key:"render",value:function(){var e=this;return this.state.adminLoggedIn?r.a.createElement("div",{className:"App"},r.a.createElement(N,{adminInSession:this.state.adminLoggedIn,getUser:this.getTheUser}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:O}),r.a.createElement(p.b,{path:"/galerie",component:k}),r.a.createElement(p.b,{path:"/destinations",component:G.a}),r.a.createElement(p.b,{path:"/about",component:P}),r.a.createElement(p.b,{path:"/contact",component:B}),r.a.createElement(p.b,{path:"/add",component:D}),r.a.createElement(p.b,{path:"/faune",component:M}),r.a.createElement(p.b,{path:"/flore",component:I}),r.a.createElement(p.b,{path:"/terre",component:T}),r.a.createElement(p.b,{path:"/mer",component:R}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(q,{getUser:e.getTheUser,adminInSession:e.state.adminLoggedIn})}})),r.a.createElement(z,null)):r.a.createElement("div",{className:"App"},r.a.createElement(N,{adminInSession:this.state.adminLoggedIn}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:O}),r.a.createElement(p.b,{path:"/galerie",component:k}),r.a.createElement(p.b,{path:"/destinations",component:G.a}),r.a.createElement(p.b,{path:"/about",component:P}),r.a.createElement(p.b,{path:"/contact",component:B}),r.a.createElement(p.b,{path:"/faune",component:M}),r.a.createElement(p.b,{path:"/flore",component:I}),r.a.createElement(p.b,{path:"/terre",component:T}),r.a.createElement(p.b,{path:"/mer",component:R}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(q,{getUser:e.getTheUser})}})),r.a.createElement(z,null))}}]),a}(n.Component);l.a.render(r.a.createElement(h.a,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a78f0181.chunk.js.map