(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(17),n=a.n(s),i=a(19),r=a(11),l=a(2),o=a.p+"static/media/logo.de13d484.png",d=function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,species:e.species,origin:e.origin.name,episode:e.episode,status:e.status}}))}))},j=(a(24),a(25),a(0)),u=function(e){return Object(j.jsx)("input",{className:"input",type:"text",onChange:function(t){e.handleFilter({key:"name",value:t.target.value})},value:e.name,placeholder:"Write the name"})},h=(a(27),function(e){return Object(j.jsxs)("select",{className:"select",onChange:function(t){e.handleFilter({key:"status",value:t.target.value})},children:[Object(j.jsx)("option",{className:"option",value:"all",children:"All"}),Object(j.jsx)("option",{className:"option",value:"Alive",children:"Alive"}),Object(j.jsx)("option",{className:"option",value:"Dead",children:"Dead"}),Object(j.jsx)("option",{className:"option",value:"unknown",children:"Unknown"})]})}),m=function(e){return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)(u,{handleFilter:e.handleFilter,name:e.name}),Object(j.jsx)(h,{handleFilter:e.handleFilter,status:e.status})]})})},b=a(7),O=(a(28),function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(b.b,{className:"detail-link",to:"/character/".concat(e.character.id),style:{color:"#ffffff"},children:[Object(j.jsx)("img",{className:"image",src:e.character.image,alt:e.character.name}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("h3",{className:"name-character",children:e.character.name}),Object(j.jsx)("p",{className:"specie-character",children:e.character.species})]})]})})}),x=a.p+"static/media/advertencia.7560a5cc.png",f=a.p+"static/media/loading.a3806e6d.png",g=(a(37),function(e){if(e.isLoading)return Object(j.jsxs)("div",{className:"loading",children:[Object(j.jsx)("h2",{className:"title-loading",children:"Loading..."}),Object(j.jsx)("img",{className:"image-loading",src:f,alt:"loading"})]});if(0===e.characters.length)return Object(j.jsxs)("div",{className:"not-found",children:[Object(j.jsx)("img",{className:"image-not-found",src:x,alt:"Not found"}),Object(j.jsxs)("div",{className:"container-not-found",children:[Object(j.jsx)("h2",{className:"title-not-found",children:"Oops!"}),Object(j.jsxs)("h3",{className:"subtitle-not-found",children:["Sorry... but we couldn\xb4t find the character '",e.name,"'"]})]})]});var t=e.characters.map((function(e){return console.log(e),Object(j.jsx)("li",{className:"list",children:Object(j.jsx)(O,{character:e})},e.id)}));return Object(j.jsx)("section",{children:Object(j.jsx)("ul",{className:"container",children:t})})}),p=(a(38),function(e){return e.isLoading?Object(j.jsxs)("div",{className:"loading",children:[Object(j.jsx)("h2",{className:"title-loading",children:"Loading..."}),Object(j.jsx)("img",{className:"image-loading",src:f,alt:"loading"})]}):void 0===e.character?Object(j.jsxs)("div",{className:"not-found",children:[Object(j.jsx)("img",{className:"image-not-found",src:x,alt:"Not found"}),Object(j.jsxs)("div",{className:"container-not-found",children:[Object(j.jsx)("h2",{className:"title-not-found",children:"Oops!"}),Object(j.jsx)("h3",{className:"subtitle-not-found",children:"Sorry... but we couldn\xb4t find the character"}),Object(j.jsx)(b.b,{to:"/",className:"detail-link",children:Object(j.jsx)("button",{className:"back-not-found",children:"Back to homepage"})})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b.b,{to:"/",className:"detail-link",children:Object(j.jsxs)("p",{className:"back",children:[" ","<"," Volver"]})}),Object(j.jsxs)("div",{className:"detail",children:[Object(j.jsx)("img",{className:"image-detail",src:e.character.image,alt:e.character.name}),Object(j.jsxs)("div",{className:"character-details",children:[Object(j.jsx)("h3",{className:"name-detail",children:e.character.name}),Object(j.jsxs)("ul",{children:["Alive"===e.character.status?Object(j.jsxs)("li",{className:"list-detail",children:["Status: ",e.character.status," \u2764\ufe0f"]}):"Dead"===e.character.status?Object(j.jsxs)("li",{className:"list-detail",children:["Status: ",e.character.status," \ud83d\udc80"]}):"unknown"===e.character.status?Object(j.jsxs)("li",{className:"list-detail",children:["Status: ",e.character.status," \ud83e\udd37\ud83c\udffb\u200d\u2640\ufe0f"]}):void 0,Object(j.jsxs)("li",{className:"list-detail",children:["Species: ",e.character.species]}),Object(j.jsxs)("li",{className:"list-detail",children:["Origin: ",e.character.origin]}),Object(j.jsxs)("li",{className:"list-detail",children:["Episodes: ",e.character.episode.length]})]})]})]})]})}),N=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),u=Object(r.a)(n,2),h=u[0],b=u[1],O=Object(c.useState)("all"),x=Object(r.a)(O,2),f=x[0],N=x[1],v=Object(c.useState)(!0),k=Object(r.a)(v,2),y=k[0],F=k[1];Object(c.useEffect)((function(){d().then((function(e){s(e),F(!1)}))}),[]);var S=a.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})).filter((function(e){return"all"===f||e.status===f}));return Object(c.useEffect)((function(){var e=Object(i.a)(a).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));s(e),console.log(e)}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("img",{className:"title",src:o,alt:"Ricky and Morty"})}),Object(j.jsxs)(l.c,{children:[Object(j.jsxs)(l.a,{exact:!0,path:"/",children:[Object(j.jsx)(m,{handleFilter:function(e){"name"===e.key?b(e.value):"status"===e.key&&N(e.value)},name:h,status:f}),Object(j.jsx)(g,{isLoading:y,characters:S,name:h,status:f})]}),Object(j.jsx)(l.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),c=a.find((function(e){return e.id===t}));return Object(j.jsx)(p,{isLoading:y,character:c})}})]})]})})};n.a.render(Object(j.jsx)(b.a,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6e21f1a7.chunk.js.map