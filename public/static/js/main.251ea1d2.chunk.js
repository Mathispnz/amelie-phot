(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,a,t){},26:function(e,a,t){},45:function(e,a){},47:function(e,a,t){e.exports=t(98)},52:function(e,a,t){},53:function(e,a,t){},75:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=(t(52),t(10)),i=t(14),s=t(17),m=t(15),u=t(18),p=(t(26),t(20)),h=t(22),d=t(2),g=(t(53),t(4)),E=t.n(g),b=function e(){var a=this;Object(o.a)(this,e),this.login=function(e,t){return a.service.post("/login",{username:e,password:t}).then((function(e){return e.data}))},this.loggedin=function(){return a.service.get("/loggedin").then((function(e){return e.data}))},this.logout=function(){return a.service.post("/logout").then((function(e){return e.data}))};var t=E.a.create({baseURL:"".concat("https://ameliepeingnezphotography.herokuapp.com/api/","auth"),withCredentials:!0});this.service=t},v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).logoutUser=function(){t.service.logout().then((function(){t.setState({adminLoggedIn:null}),t.props.getUser(null),t.props.history.push("/")}))},t.openMenu=function(){t.state.mobMenuOpen?t.setState({mobMenuOpen:!1}):t.setState({mobMenuOpen:!0})},t.state={adminLoggedIn:null,mobMenuOpen:!1,scrollTop:!1},t.service=new b,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{adminLoggedIn:e.adminInSession}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.mobMenuOpen,n=a.scrollTop;return this.state.adminLoggedIn?r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"Navbar_Cont"},r.a.createElement("div",{className:"Navbar_Left"},r.a.createElement(d.b,{className:"Navbar-Link Link--Bold Navbar_marginLeft__none",to:"/"},"AM\xc9LIE PEINGNEZ")),r.a.createElement("div",{className:"Navbar_Right"},r.a.createElement(d.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/contact"},"Contact"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/add"},"Add Pic"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/photos"},"\xc9diteur"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/logout",onClick:function(){return e.logoutUser()}},"Logout")),r.a.createElement("div",{className:"Navbar_Right--Mob"},r.a.createElement("div",{className:"Navbar_Right--Mob_Open ".concat(n?"Navbar_Right__fixed":""),onClick:function(){return e.openMenu()}},r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open3":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open2":""," ")})),r.a.createElement("div",{className:"Navbar_Right--Mob_Menu ".concat(t?"":"Navbar_Right--Mob_Menu--hidden")},r.a.createElement(d.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/contact"},"Contact"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/add"},"Add Pic"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/photos"},"\xc9diteur"),r.a.createElement(d.b,{className:"Navbar-Link Navbar_marginRight__none",to:"/logout",onClick:function(){return e.logoutUser()}},"Logout"))))):r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"Navbar_Cont"},r.a.createElement("div",{className:"Navbar_Left"},r.a.createElement(d.b,{className:"Navbar-Link Link--Bold Navbar_marginLeft__none",to:"/"},"AM\xc9LIE PEINGNEZ")),r.a.createElement("div",{className:"Navbar_Right"},r.a.createElement(d.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(d.b,{className:"Navbar-Link Navbar_marginRight__none",to:"/contact"},"Contact")),r.a.createElement("div",{className:"Navbar_Right--Mob"},r.a.createElement("div",{className:"Navbar_Right--Mob_Open ".concat(n?"Navbar_Right__fixed":""),onClick:function(){return e.openMenu()}},r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open3":""," ")}),r.a.createElement("div",{className:"Navbar_Right--Mob_Open_line ".concat(t?"Navbar_Right--Mob_Open_line_open2":""," ")})),r.a.createElement("div",{className:"Navbar_Right--Mob_Menu ".concat(t?"":"Navbar_Right--Mob_Menu--hidden")},r.a.createElement(d.b,{className:"Navbar-Link",to:"/galerie"},"Galerie"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/about"},"\xc0 propos"),r.a.createElement(d.b,{className:"Navbar-Link",to:"/contact"},"Contact")))))}}]),a}(n.Component),f=Object(p.g)(v),N=(t(75),t(16)),_=t(44),O=t.n(_),k={infinite:!0,indicators:!1,arrows:!1,duration:5e3,transitionDuration:800};function j(){return r.a.createElement(O.a,null,r.a.createElement("div",{className:"Home"},r.a.createElement(N.Fade,Object.assign({className:"Home_Background"},k),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{className:"Home_Background_Pic",src:"pictures/home4.jpg",alt:"Background home"})),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{className:"Home_Background_Pic",src:"pictures/home2.jpg",alt:"Background home"})),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{className:"Home_Background_Pic",src:"pictures/home3.jpg",alt:"Background home"}))),r.a.createElement("div",{className:"Home_Container"},r.a.createElement("h2",{className:"Home_Title"},"AM\xc9LIE PEINGNEZ"),r.a.createElement("div",{className:"Home_Text"},r.a.createElement(d.b,{className:"Home_Link",to:"/galerie"},"Galerie"))),r.a.createElement("a",{href:"https://www.instagram.com/coachingphotovoyage/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"Home_Social"},r.a.createElement("img",{src:"pictures/instagram-brands.svg",alt:"Instagram"})))))}var y=t(6);t(88);function C(){var e=Object(n.useState)([{src:"pictures/faune.jpg"},{src:"pictures/flore.jpg"},{src:"pictures/terre.jpg"},{src:"pictures/mer.jpg"}]),a=Object(y.a)(e,1)[0];return r.a.createElement("div",{className:"Galerie"},r.a.createElement("h2",null,"Ma galerie"),r.a.createElement("div",{className:"Galerie-Theme"},r.a.createElement(d.b,{to:"/faune"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[0].src,alt:"Faune"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Faune"))),r.a.createElement(d.b,{to:"/flore"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[1].src,alt:"Flore"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Flore"))),r.a.createElement(d.b,{to:"/terre"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[2].src,alt:"Terre"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Terre"))),r.a.createElement(d.b,{to:"/mer"},r.a.createElement("div",{className:"Galerie-Theme-One"},r.a.createElement("img",{className:"Galerie-Theme-One-Image",src:a[3].src,alt:"Mer"}),r.a.createElement("h4",{className:"Galerie-Theme-One-Text"},"Mer")))))}t(89);function L(){var e=Object(n.useState)([]),a=Object(y.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E.a.get("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos")).then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"allphotos"},r.a.createElement("h2",null,"\xc9diteur"),t.map((function(e,a){return r.a.createElement("div",{key:a,className:"allphotos_photo"},r.a.createElement(d.b,{to:"/photos/".concat(e._id)},r.a.createElement("img",{className:"allphotos_photo_img",alt:"photographie",src:e.url})))})))}var M=t(19),S=(t(90),t(12)),T=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).getSinglePhoto=function(){var e=t.props.match.params;E.a.get("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos/").concat(e.id)).then((function(e){t.setState(e.data)})).catch((function(e){console.log(e)}))},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(M.a)({},n,r))},t.handleUpload=function(e){var a=new FormData;a.append("imageUrl",e.target.files[0]),E.a.post("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos/upload"),a).then((function(e){t.setState({url:e.data.secure_url}),Object(S.b)("La photo a bien \xe9t\xe9 ajout\xe9e \xe0 Cloudinary !")})).catch((function(e){console.log("Error while uploading the file",e)}))},t.handleSubmit=function(e){e.preventDefault();var a=t.props.match.params,n=t.state,r=n.name,l=n.color,c=n.url,o=n.location,i=n.description,s=n.theme;E.a.put("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos/").concat(a.id),{name:r,color:l,url:c,location:o,description:i,theme:s}).then((function(e){Object(S.b)("La photo a bien \xe9t\xe9 modifi\xe9e !")})).catch((function(e){console.log(e)}))},t.showModal=function(){t.state.show?t.setState({show:!1}):t.setState({show:!0})},t.deleteProject=function(){var e=t.props.match.params;E.a.delete("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos/").concat(e.id)).then((function(){t.props.history.push("/photos")})).catch((function(e){console.log(e)}))},t.state={name:"",color:"",url:"",location:"",description:"",theme:"",show:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getSinglePhoto()}},{key:"render",value:function(){var e=this,a=this.state.show;return r.a.createElement("div",{className:"sglpic"},r.a.createElement("div",{className:"BackToMob"},r.a.createElement(d.b,{className:"BackToMob_Link",to:"/photos"},"Retourner \xe0 l'\xe9diteur")),r.a.createElement("div",{className:"sglpic_flex"},r.a.createElement("div",{className:"sglpic_details"},r.a.createElement("h2",null,"D\xe9tails de la photo"),r.a.createElement("div",{className:"sglpic_pic"},r.a.createElement("p",null,r.a.createElement("span",null,"Nom:")," ",r.a.createElement("br",null),this.state.name),r.a.createElement("img",{alt:"DetailsImg",src:this.state.url}),r.a.createElement("p",null,r.a.createElement("span",null,"Color:")," ",this.state.color),r.a.createElement("p",null,r.a.createElement("span",null,"Location:")," ",this.state.location),r.a.createElement("p",{className:"sglpic_pic-des"},r.a.createElement("span",null,"Description:")," ",r.a.createElement("br",null)," ",this.state.description),r.a.createElement("p",null,r.a.createElement("span",null,"Th\xe8me:")," ",this.state.theme))),r.a.createElement("hr",null),r.a.createElement("div",{className:"sglpic_divide-desk"}),r.a.createElement("div",{className:"sglpic_edit"},r.a.createElement("h2",null,"\xc9diter la photo"),r.a.createElement("form",null,r.a.createElement("label",{className:"sglpic_edit_label-first"},"Nom: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(a){return e.handleChange(a)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Couleur: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"color",value:this.state.color,onChange:function(a){return e.handleChange(a)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Location: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:function(a){return e.handleChange(a)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Description: "),r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",name:"description",value:this.state.description,onChange:function(a){return e.handleChange(a)},className:"sglpic_edit-des"}),r.a.createElement("br",null),r.a.createElement("label",null,"Photo: "),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"url",onChange:function(a){return e.handleUpload(a)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Th\xe8me: "),r.a.createElement("br",null),r.a.createElement("select",{name:"theme",value:this.state.theme,onChange:function(a){return e.handleChange(a)}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Faune"},"Faune"),r.a.createElement("option",{value:"Flore"},"Flore"),r.a.createElement("option",{value:"Terre"},"Terre"),r.a.createElement("option",{value:"Mer"},"Mer")),r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement(S.a,{autoClose:3e3}),r.a.createElement("button",{onClick:function(a){return e.handleSubmit(a)},type:"submit",className:"sglpic_btn"},"\xc9diter la photo"),r.a.createElement("button",{className:"sglpic_btn",onClick:function(){return e.showModal()}},"Supprimer la photo"),r.a.createElement("div",{className:"sglpic_confirm ".concat(a?"sglpic_confirm-show":"")},"Confirmer la suppression de la photo ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.showModal()}},"Annuler"),r.a.createElement("button",{onClick:function(){return e.deleteProject()}},"Confirmer")))}}]),a}(n.Component),w=(t(24),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BackToMob"},r.a.createElement(d.b,{className:"BackToMob_Link",to:"/galerie"},"Voir les th\xe8mes"))}}]),a}(n.Component)),I={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,pauseOnHover:!0,arrows:!0};function F(){var e=Object(n.useState)([]),a=Object(y.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E.a.get("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos")).then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Faune theme__padding"},r.a.createElement(w,null),r.a.createElement("h2",null,"Faune"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(N.Fade,I,t.filter((function(e){return"Faune"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Faune"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var R={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,arrows:!0};function x(){var e=Object(n.useState)([]),a=Object(y.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E.a.get("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos")).then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Flore theme__padding"},r.a.createElement(w,null),r.a.createElement("h2",null,"Flore"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(N.Fade,R,t.filter((function(e){return"Flore"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Flore"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var P={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,arrows:!0};function z(){var e=Object(n.useState)([]),a=Object(y.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E.a.get("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos")).then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Terre theme__padding"},r.a.createElement(w,null),r.a.createElement("h2",null,"Terre"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(N.Fade,P,t.filter((function(e){return"Terre"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Terre"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var A={duration:5e3,transitionDuration:1e3,infinite:!0,indicators:!0,arrows:!0};function G(){var e=Object(n.useState)([]),a=Object(y.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E.a.get("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos")).then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Mer theme__padding"},r.a.createElement(w,null),r.a.createElement("h2",null,"Mer"),r.a.createElement("div",{className:"containerSlide"},r.a.createElement(N.Fade,A,t.filter((function(e){return"Mer"===e.theme})).map((function(e,a){return r.a.createElement("div",{className:"containerSlide_slide",key:a},r.a.createElement("img",{className:"containerSlide_img",src:e.url,alt:"Mer"}),r.a.createElement("p",{className:"container_des--size"},e.location),r.a.createElement("p",{className:"container_description container_des--size"},e.description))})))))}var U=t(45),D=t.n(U);t(93);function B(){return r.a.createElement("div",{className:"About"},r.a.createElement("h2",null,"\xc0 propos"),r.a.createElement("div",{className:"About-Picture_Wrap"},r.a.createElement("img",{src:"pictures/profile.jpg",className:"About-Picture_Wrap__Img",alt:"Profile"})),r.a.createElement("div",{className:"About-Text"},r.a.createElement("p",{className:"About-Para"},"Mes parents m\u2019ont offert mon premier appareil photo num\xe9rique en 2005 lorsque j\u2019avais 17 ans. Une v\xe9ritable r\xe9v\xe9lation. J\u2019ai alors pass\xe9 toutes mes vacances derri\xe8re un viseur. Depuis ce jour, j\u2019ai toujours associ\xe9 le voyage \xe0 la photographie et la photographie au voyage.",r.a.createElement("br",null),r.a.createElement("br",null),"C\u2019est 10 ans plus tard que ma vie a pris un tournant quand mon compagnon et moi avons d\xe9cid\xe9 de partir voyager pendant deux ans et demi. A nous la d\xe9couverte de l\u2019Australie, de l\u2019Indon\xe9sie, la Nouvelle-Z\xe9lande, Hawaii, l\u2019Ouest Am\xe9ricain, Cuba et le Qu\xe9bec. ",r.a.createElement("br",null),r.a.createElement("br",null),"Tous ces paysages que j\u2019ai vu d\xe9filer. Ces regards \xe9chang\xe9s. Ces faunes et ces flores que je d\xe9couvrais. Ils marquent \xe0 jamais.  J\u2019ai v\xe9cu ces moments. Je suis ces moments. Je ne pouvais pas garder toutes ces beaut\xe9s pour moi. J\u2019avais besoin de les partager. ",r.a.createElement("br",null),r.a.createElement("br",null),"Quoi de mieux que la photographie pour le faire ? ",r.a.createElement("br",null)),r.a.createElement("p",{className:"About-Qwig"},"Am\xe9lie"),r.a.createElement("a",{href:"https://www.instagram.com/coachingphotovoyage/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"About-Text_Insta"},r.a.createElement("img",{className:"About-Text_Insta-img",src:"pictures/instagram-brands.svg",alt:"Instagram"})))))}t(94);var H=t(46),q=t.n(H);function J(){return r.a.createElement("div",{className:"Contact"},r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,"Pour tout renseignement, veuillez envoyer un e-mail \xe0:"),r.a.createElement("p",{className:"contact_mail",onClick:function(){q()("ameliepeingnezphotography@gmail.com"),document.querySelector(".contact_mail").style="color: grey",Object(S.b)("Copi\xe9 !",{autoClose:0,draggable:!1,closeButton:!1})}},"ameliepeingnezphotography@gmail.com"," ",r.a.createElement("img",{style:{width:"20px"},src:"https://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/copy-icon.png",alt:"Copy Icon"})),r.a.createElement(S.a,{style:{margin:"10px auto"}}))}function W(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",{className:"Footer_Title"},"Am\xe9lie Peingnez Photography"),r.a.createElement("div",{className:"Footer_Social"},r.a.createElement("a",{className:"Footer_Social_IG",href:"https://www.instagram.com/coachingphotovoyage/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{style:{width:"100%",margin:"auto",display:"block"},src:"pictures/instagram-brands.svg",alt:"Instagram"})),r.a.createElement("div",{className:"Footer_Social_Line"}),r.a.createElement(d.b,{to:"/contact",className:"Footer_Social_CT"},"Contact")))}t(96);function Z(){var e=Object(n.useReducer)((function(e,a){return Object(h.a)({},e,{},a)}),{name:"",color:"",location:"",description:"",url:"",theme:""}),a=Object(y.a)(e,2),t=a[0],l=a[1],c=function(e){var a=e.target.name,t=e.target.value;l(Object(M.a)({},a,t))};return r.a.createElement("div",{className:"AddPicture"},r.a.createElement(S.a,{autoClose:3e3}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E.a.post("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos/add"),t).then((function(e){Object(S.b)("".concat(t.name," a bien \xe9t\xe9 charg\xe9e sur le site !"),{autoClose:3e3}),l({name:"",color:"",url:"",theme:"",location:"",description:""})})).catch((function(e){console.log("Error while trying to add a new picture :",e)}))},className:"AddPicture_Form"},r.a.createElement("label",null,"Nom: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:c}),r.a.createElement("br",null),r.a.createElement("label",null,"Couleur: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"color",value:t.color,onChange:c}),r.a.createElement("br",null),r.a.createElement("label",null,"Location: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"location",value:t.location,onChange:c}),r.a.createElement("br",null),r.a.createElement("label",null,"Description: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"description",value:t.description,onChange:c}),r.a.createElement("br",null),r.a.createElement("label",null,"Photo: "),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"url",onChange:function(e){var a=new FormData;a.append("imageUrl",e.target.files[0]),E.a.post("".concat("https://ameliepeingnezphotography.herokuapp.com/api/","photos/upload"),a).then((function(e){l({url:e.data.secure_url}),Object(S.b)("La photo a \xe9t\xe9 t\xe9l\xe9charg\xe9e \xe0 Cloudinary !",{autoClose:3e3})})).catch((function(e){console.log("Error while uploading the file",e)}))}}),r.a.createElement("br",null),r.a.createElement("label",null,"Th\xe8me: "),r.a.createElement("br",null),r.a.createElement("select",{name:"theme",value:t.theme,onChange:c},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Faune"},"Faune"),r.a.createElement("option",{value:"Flore"},"Flore"),r.a.createElement("option",{value:"Terre"},"Terre"),r.a.createElement("option",{value:"Mer"},"Mer")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Envoyer")))}t(97);var Q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(M.a)({},n,r))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.password;t.service.login(n,r).then((function(e){t.setState({username:"",password:""}),t.props.getUser(e)})).catch((function(e){return console.log(e)}))},t.state={username:"",password:"",adminLoggedIn:null},t.service=new b,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{adminLoggedIn:e.adminInSession}))}},{key:"render",value:function(){var e=this;return this.state.adminLoggedIn?r.a.createElement(p.a,{to:"/galerie"}):r.a.createElement("div",{className:"Login"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("button",null,"Login")))}}]),a}(n.Component),V=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).getTheUser=function(e){t.setState({adminLoggedIn:e})},t.state={adminLoggedIn:null},t.service=new b,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"fetchUser",value:function(){var e=this;null===this.state.adminLoggedIn&&this.service.loggedin().then((function(a){console.log(e.state.adminLoggedIn),e.setState({adminLoggedIn:a})})).catch((function(a){e.setState({adminLoggedIn:!1})}))}},{key:"render",value:function(){var e=this;return this.state.adminLoggedIn?r.a.createElement("div",{className:"App"},r.a.createElement(f,{adminInSession:this.state.adminLoggedIn,getUser:this.getTheUser}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:j}),r.a.createElement(p.b,{path:"/galerie",component:C}),r.a.createElement(p.b,{path:"/destinations",component:D.a}),r.a.createElement(p.b,{path:"/about",component:B}),r.a.createElement(p.b,{path:"/contact",component:J}),r.a.createElement(p.b,{path:"/add",component:Z}),r.a.createElement(p.b,{exact:!0,path:"/photos",component:L}),r.a.createElement(p.b,{exact:!0,path:"/photos/:id",component:T}),r.a.createElement(p.b,{path:"/faune",component:F}),r.a.createElement(p.b,{path:"/flore",component:x}),r.a.createElement(p.b,{path:"/terre",component:z}),r.a.createElement(p.b,{path:"/mer",component:G}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(Q,{getUser:e.getTheUser,adminInSession:e.state.adminLoggedIn})}})),r.a.createElement(W,null)):r.a.createElement("div",{className:"App"},r.a.createElement(f,{adminInSession:this.state.adminLoggedIn}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:j}),r.a.createElement(p.b,{path:"/galerie",component:C}),r.a.createElement(p.b,{path:"/about",component:B}),r.a.createElement(p.b,{path:"/contact",component:J}),r.a.createElement(p.b,{path:"/faune",component:F}),r.a.createElement(p.b,{path:"/flore",component:x}),r.a.createElement(p.b,{path:"/terre",component:z}),r.a.createElement(p.b,{path:"/mer",component:G}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(Q,{getUser:e.getTheUser})}})),r.a.createElement(W,null))}}]),a}(n.Component);c.a.render(r.a.createElement(d.a,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.251ea1d2.chunk.js.map