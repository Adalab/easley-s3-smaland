(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/descarga.0118e311.svg"},11:function(e,a,t){e.exports=t(18)},18:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(9),r=t.n(s),c=(t(8),t(1)),o=t(2),i=t(4),m=t(3),p=t(5),d=t(6),u=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",null,n.a.createElement("section",{className:"footer__section"},n.a.createElement("p",{className:"footer__text-reg"},"Awesome profile-cards \xa92018"),n.a.createElement("div",{className:"footer__conection-logo"})))}}]),a}(l.Component),h=t(10),f=t.n(h),E=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"header__container-designCard"},n.a.createElement("div",{className:"header__position-card"},n.a.createElement("a",{className:"header__gonext",href:"../index.html"}),n.a.createElement("img",{className:"header__logo",src:f.a,alt:"logo awesome profile-cards"})))}}]),a}(l.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.dataBack;return n.a.createElement("div",{className:"box__card ".concat(this.props.colorClass),id:"box"},n.a.createElement("div",{className:"userInfo ".concat(this.props.fontClass),id:"userInfo"},n.a.createElement("div",{className:"detail"}),n.a.createElement("h2",{className:"userInfo__name"},e.name||"Nombre Apellido"," "),n.a.createElement("h3",{className:"userInfo__job"},e.job||"Front-End Developer")),n.a.createElement("div",{className:"img image-preview__file"}),n.a.createElement("ul",{className:"list__icon"},n.a.createElement("li",{className:"list__item"},n.a.createElement("a",{className:"item__link mobile",href:e.phone},n.a.createElement("i",{className:"fas fa-mobile-alt"}))),n.a.createElement("li",{className:"list__item"},n.a.createElement("a",{className:"item__link email",href:"mailto:".concat(e.email)},n.a.createElement("i",{className:"far fa-envelope"}))),n.a.createElement("li",{className:"list__item"},n.a.createElement("a",{className:"item__link linkedin",href:"https://www.linkedin.com/in/".concat(e.linkedin)},n.a.createElement("i",{className:"fab fa-linkedin-in"}))),n.a.createElement("li",{className:"list__item"},n.a.createElement("a",{className:"item__link github",href:"https://www.github.com/".concat(e.github)},n.a.createElement("i",{className:"fab fa-github-alt"})))),n.a.createElement("div",{className:"separation"}),n.a.createElement("ul",{className:"list__skills"},e.skills.map(function(e,a){return n.a.createElement("li",{key:a,className:"list__item-skills"},e)})))}}]),a}(l.Component),_=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("button",{type:this.props.type,className:this.props.styles},this.props.children)}}]),a}(l.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section__card"},n.a.createElement("div",{className:"container__width"},n.a.createElement(_,{type:"reset",styles:"button__reset"},n.a.createElement("i",{className:"far fa-trash-alt"}),n.a.createElement("span",{className:"button"},"Reset")),n.a.createElement(N,{dataBack:this.props.dataBack,colorClass:this.props.colorClass,fontClass:this.props.fontClass})))}}]),a}(l.Component),v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.name;return n.a.createElement(l.Fragment,null,n.a.createElement("label",{for:e,className:"item-label"},this.props.content),n.a.createElement("input",{placeholder:this.props.example,id:e,type:this.props.type,name:e,className:"item-input",required:!0}))}}]),a}(l.Component),k=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).saveSkills=t.saveSkills.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"renderSkills",value:function(){var e=this;return this.props.skills.map(function(a){return n.a.createElement("label",{for:a,className:"checkbox-label"},n.a.createElement("input",{id:a,type:"checkbox",value:a,name:"skills",className:"checkbox-input",onClick:e.saveSkills}),n.a.createElement("p",null,a))})}},{key:"saveSkills",value:function(e){var a=this.props.dataBack,t=e.currentTarget.value;return a.skills.push(t)}},{key:"render",value:function(){return n.a.createElement("div",{className:"tunning__responsive"},n.a.createElement("section",{className:"design-card"},n.a.createElement("div",{className:"title-dropdown"},n.a.createElement("div",{className:"title-dropdown__icontitle"},n.a.createElement("i",{className:"far fa-object-ungroup title-dropdown__icon-design"}),n.a.createElement("h2",{className:"title-dropdown__title-design"},"Dise\xf1a")),n.a.createElement("div",{className:"title-dropdown__arrow arrowDesign"},n.a.createElement("i",{className:"arrowD fas fa-chevron-up"}))),n.a.createElement("div",{className:"design-card__options"},n.a.createElement("div",{className:"design-card__colors"},n.a.createElement("h3",{className:"title-colors"},"Colores"),n.a.createElement("form",{className:"design-card__colors__select-palette"},n.a.createElement("label",{for:"palette-green",className:"palette"},n.a.createElement("input",{className:"radio",id:"palette-green",type:"radio","data-palette":"paletteGreen",value:"1",required:!0,name:"selectPalete",onChange:this.props.handleColorInput}),n.a.createElement("div",{className:"colors-palette"},n.a.createElement("div",{className:"colors-palette__item green1"}),n.a.createElement("div",{className:"colors-palette__item green2"}),n.a.createElement("div",{className:"colors-palette__item green3"}))),n.a.createElement("label",{for:"palette-red",className:"palette"},n.a.createElement("input",{className:"radio palette2",id:"palette-red",type:"radio","data-palette":"paletteRed",value:"2",name:"selectPalete",onChange:this.props.handleColorInput}),n.a.createElement("div",{className:"colors-palette"},n.a.createElement("div",{className:"colors-palette__item red1"}),n.a.createElement("div",{className:"colors-palette__item red2"}),n.a.createElement("div",{className:"colors-palette__item red3"}))),n.a.createElement("label",{for:"palette-blue",className:"palette"},n.a.createElement("input",{className:"radio palette3",id:"palette-blue",type:"radio","data-palette":"paletteGrey",value:"3",name:"selectPalete",onChange:this.props.handleColorInput}),n.a.createElement("div",{className:"colors-palette"},n.a.createElement("div",{className:"colors-palette__item blue1"}),n.a.createElement("div",{className:"colors-palette__item blue2"}),n.a.createElement("div",{className:"colors-palette__item blue3"}))),n.a.createElement("label",{for:"palette-purple",className:"palette inactive"},n.a.createElement("input",{className:"radio palette4",id:"palette-purple",type:"radio","data-palette":"palettePurple",value:"4",name:"selectPalete",onChange:this.props.handleColorInput}),n.a.createElement("div",{className:"colors-palette"},n.a.createElement("div",{className:"colors-palette__item purple1"}),n.a.createElement("div",{className:"colors-palette__item purple2"}),n.a.createElement("div",{className:"colors-palette__item purple3"}))),n.a.createElement("label",{for:"palette-orange",className:"palette inactive"},n.a.createElement("input",{className:"radio",id:"palette-orange",type:"radio","data-palette":"paletteOrange",value:"5",name:"selectPalete",onChange:this.props.handleColorInput}),n.a.createElement("div",{className:"colors-palette palette5"},n.a.createElement("div",{className:"colors-palette__item orange1"}),n.a.createElement("div",{className:"colors-palette__item orange2"}),n.a.createElement("div",{className:"colors-palette__item orange3"}))))),n.a.createElement("div",{className:"design-card__fonts"},n.a.createElement("h3",{className:"title-fonts"},"Fuentes"),n.a.createElement("form",{className:"design-Card__colors__select-font"},n.a.createElement("label",{for:"font-Ubuntu",className:"font"},n.a.createElement("input",{className:"radio fontradio typography1",id:"font-Ubuntu",type:"radio","data-font":"Ubuntu",value:"1",required:!0,name:"selectFont",onChange:this.props.handleFontInput}),n.a.createElement("p",{className:"font-Ubuntu"},"Ubuntu")),n.a.createElement("label",{for:"font-ComicSans ",className:"font "},n.a.createElement("input",{className:"radio fontradio typography2",id:"font-ComicSans",type:"radio","data-font":"ComicSans",value:"2",name:"selectFont",onChange:this.props.handleFontInput}),n.a.createElement("p",{className:"font-ComicSans"},"Comic Sans")),n.a.createElement("label",{for:"font-Montserrat ",className:"font"},n.a.createElement("input",{className:"radio  fontradio typography3",id:"font-Montserrat",type:"radio","data-font":"Montserrat",value:"3",name:"selectFont",onChange:this.props.handleFontInput,checked:this.props.checked}),n.a.createElement("p",{className:"font-Monserrat"},"Monserrat")),n.a.createElement("label",{for:"font-Indie ",className:"font inactive"},n.a.createElement("input",{className:"radio fontradio typography4",id:"font-Indie",type:"radio","data-font":"Indie",value:"4",name:"selectFont",onChange:this.props.handleFontInput,checked:this.props.checked}),n.a.createElement("p",{className:"font-Indie"},"Indie")),n.a.createElement("label",{for:"font-Baskerville ",className:"font inactive"},n.a.createElement("input",{className:"radio  fontradio  typography5",id:"font-Baskerville",type:"radio","data-font":"Baskerville",value:"5",name:"selectFont",onChange:this.props.handleFontInput,checked:this.props.checked}),n.a.createElement("p",{className:"font-Baskerville"},"Baskerville")))))),n.a.createElement("section",{className:"fill-card"},n.a.createElement("div",{className:"title-dropdown-fill"},n.a.createElement("div",{className:"title-dropdown__icontitle"},n.a.createElement("i",{className:"far fa-keyboard"}),n.a.createElement("h2",{className:"title-dropdown__title-fill"},"Rellena")),n.a.createElement("div",{className:"title-dropdown__arrow arrowFill"},n.a.createElement("i",{className:"arrowF fas fa-chevron-down"}))),n.a.createElement("form",{action:"/signup",method:"post",className:"form "},n.a.createElement(v,{name:"name",content:"Nombre completo",example:"Ej: Sally Jill",type:"text"}),n.a.createElement(v,{name:"job",content:"Profesi\xf3n",example:"Ej: Front-end unicorn",type:"text"}),n.a.createElement("p",{className:"item-label"},"Imagen de perfil"),n.a.createElement("div",{className:"container-image"},n.a.createElement("button",{className:"image-link",type:"submit"},"A\xf1adir imagen"),n.a.createElement("input",{type:"file",name:"",id:"img-selector",className:"action__hiddenField"}),n.a.createElement("div",{className:"image-preview image-preview-small"})),n.a.createElement(v,{name:"email",content:"Email",example:"Ej: sally-hill@gmail.com",type:"email"}),n.a.createElement(v,{name:"phone",content:"Tel\xe9fono",example:"Ej: 555\xb755\xb755\xb755",type:"tel"}),n.a.createElement(v,{name:"Linkedin",content:"Linkedin",example:"Ej: sally-hill",type:"text"}),n.a.createElement(v,{name:"Github",content:"Github",example:"Ej: sally-hill",type:"text"}),n.a.createElement("div",{className:"container-skills"},n.a.createElement("p",{className:"text-skills"},"Habilidades (m\xe1ximo 3)"),this.renderSkills()))),n.a.createElement("section",{className:"share"},n.a.createElement("div",{className:"container-section"},n.a.createElement("div",{className:"container-title"},n.a.createElement("div",{className:"container-icon-title"},n.a.createElement("div",{className:"title-dropdown__icon-share"},n.a.createElement("i",{className:"fas fa-share-alt"})),n.a.createElement("h2",{className:"title-dropdown__title-share"},"Comparte")),n.a.createElement("div",{className:"arrow-share-down"}),n.a.createElement("i",{className:"arrowSa fas fa-chevron-down"})),n.a.createElement("div",{className:"container-share hidden"},n.a.createElement("button",{type:"submit",className:"button-create no-clicked"},n.a.createElement("i",{className:"far fa-address-card"}),n.a.createElement("p",null,"Crear tarjeta")),n.a.createElement("span",{className:"loading"}),n.a.createElement("div",{className:"container-hide-section hidden"},n.a.createElement("h3",{className:"text-hide-section"},"La tarjeta ha sido creada:"),n.a.createElement("a",{className:"link-profile-card",href:"enlace a tarjeta"}),n.a.createElement("a",{className:"share-twitter twitter-share-button",href:""},n.a.createElement("i",{className:"fab fa-twitter"}),n.a.createElement("p",{className:"share-twitter-text"},"Compartir en twitter")))))))}}]),a}(l.Component),g={palette:"1",typography:"1",name:"",job:"",phone:"555555555",email:"eision@hotmail.com",linkedin:"lauraferrandof",github:"lauraferrandof",photo:"",skills:["HTML","CSS","Gulp"]},y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={dataBack:g,skills:[],colorClass:"",fontClass:""},t.handleColorInput=t.handleColorInput.bind(Object(d.a)(Object(d.a)(t))),t.handleColorClass=t.handleColorClass.bind(Object(d.a)(Object(d.a)(t))),t.handleFontClass=t.handleFontClass.bind(Object(d.a)(Object(d.a)(t))),t.handleFontInput=t.handleFontInput.bind(Object(d.a)(Object(d.a)(t))),t.getSkills(),t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"handleColorInput",value:function(e){var a=e.target.value;g.palette=a,console.log(g),this.handleColorClass()}},{key:"handleColorClass",value:function(){var e=this.state.dataBack.palette;"1"===e?this.setState({colorClass:"box__card"}):"2"===e?this.setState({colorClass:"box__card--red"}):"3"===e?this.setState({colorClass:"box__card--grey"}):"4"===e?this.setState({colorClass:"box__card--purple"}):"5"===e&&this.setState({colorClass:"box__card--orange"})}},{key:"handleFontInput",value:function(e){var a=e.target.value;g.typography=a,this.handleFontClass()}},{key:"handleFontClass",value:function(){var e=this.state.dataBack.typography;"1"===e?this.setState({fontClass:"userInfo--ubuntu"}):"2"===e?this.setState({fontClass:"userInfo--quaternary"}):"3"===e?this.setState({fontClass:"userInfo--mont"}):"4"===e?this.setState({fontClass:"userInfo--hand"}):"5"===e&&this.setState({fontClass:"userInfo-libre"})}},{key:"getSkills",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json").then(function(e){return e.json()}).then(function(a){e.setState({skills:a.skills})})}},{key:"render",value:function(){var e=this.state.skills;return n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement("main",{className:"created__target"},n.a.createElement(b,{dataBack:this.state.dataBack,colorClass:this.state.colorClass,fontClass:this.state.fontClass}),n.a.createElement(k,{skills:e,handleColorInput:this.handleColorInput,handleFontInput:this.handleFontInput,dataBack:this.state.dataBack})),n.a.createElement(u,null))}}]),a}(l.Component);r.a.render(n.a.createElement(y,null),document.getElementById("root"))},8:function(e,a,t){}},[[11,2,1]]]);
//# sourceMappingURL=main.3c962de0.chunk.js.map