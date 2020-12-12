(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{298:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));var n={methods:{getPersonTypeLabel:function(t){var e=t.model;return"mentor"===e?"Mentor":"mentee"===e?"Mentee":"Mentor ve Mentee"}}},o={methods:{getPersonTypeColor:function(t){var e=t.model;return"mentor"===e?"var(--color-ui-03)":"mentee"===e?"var(--color-ui-04)":"var(--color-ui-05)"}}},c={methods:{getPersonTypeClass:function(t){var e=t.model;return"mentor"===e?"mentor":"mentee"===e?"mentee":"both"}}}},375:function(t,e,r){},376:function(t,e,r){},377:function(t,e,r){},718:function(t,e,r){"use strict";r(375)},719:function(t,e,r){"use strict";r(376)},720:function(t,e,r){"use strict";r(377)},731:function(t,e,r){"use strict";r.r(e);r(8),r(12),r(9),r(14),r(15),r(5),r(45),r(16),r(21),r(68),r(52);var n=r(20),o=r(384),c=r(388),l=new(r.n(c).a)({toc:!0,sanitize:!0}),d={components:{Timeline:o.Timeline},props:{person:{type:Object,required:!1,default:null}},data:function(){return{markdown:"",projects:[]}},computed:{twitterHandle:function(){return this.person.twitter_handle.split("twitter.com/")[1]}},created:function(){this.person.github.length>0&&this.renderMarkdown(),this.person.mentorships.length>0&&this.renderMentorshipProjects()},methods:{renderMarkdown:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,html;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.person.github.replace(/\/$/gi,"").split("/").pop(),e.next=3,fetch("https://raw.githubusercontent.com/".concat(r,"/").concat(r,"/master/README.md")).then((function(t){return 200===t.status?t.text():""}));case 3:return n=e.sent,e.next=6,l.toMarkup(n);case 6:o=e.sent,html=o.html,t.markdown=html;case 9:case"end":return e.stop()}}),e)})))()},renderMentorshipProjects:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],t.person.mentorships.map((function(t){var e=t.project_adress.split("/").slice(3).join("/");r.push(fetch("https://raw.githubusercontent.com/".concat(e,"/master/README.md")).then((function(t){return 200===t.status?t.text():""})).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,html;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.toMarkup(e);case 2:return r=t.sent,html=r.html,t.abrupt("return",html);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})),e.next=4,Promise.all(r);case 4:t.projects=e.sent;case 5:case"end":return e.stop()}}),e)})))()}}},m=(r(718),r(34)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("profile-person-card",{attrs:{person:t.person}}),t._v(" "),t.markdown.length>0?[r("h2",[t._v("\n        GitHub\n      ")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"app-card readme",domProps:{innerHTML:t._s(t.markdown)}})]:t._e(),t._v(" "),t.person.mentorships.length>0?[r("h2",[t._v("\n        Active Mentorships\n      ")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"app-card accordion",attrs:{role:"tablist"}},t._l(t.person.mentorships,(function(e,n){return r("b-card",{key:e.slug,staticClass:"mb-1 accordion-color",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.slug,expression:"mentorship.slug"}],attrs:{block:"",variant:"dark"}},[t._v("\n              "+t._s(e.slug)+"\n            ")])],1),t._v(" "),r("b-collapse",{attrs:{id:e.slug,accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[t.projects[n]?r("b-card-text",[r("a",{staticClass:"float-right",attrs:{href:e.project_adress,target:"_blank"}},[t._v("Go to project page")]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.projects[n])}})]):r("b-card-text",[t._v("\n                This project does not have README.md file,\n                "),r("a",{attrs:{href:e.project_adress,target:"_blank"}},[t._v("please visit project to see content.")])])],1)],1)],1)})),1)]:t._e(),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[[r("h2",[t._v("\n            💬 Give Feedback\n          ")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"app-card disqus_thread",attrs:{id:"disqus_thread"}})]],2),t._v(" "),r("div",{staticClass:"col-lg-6"},[t.person.twitter_handle.length>0?[r("h2",[t._v("\n            Tweets\n          ")]),t._v(" "),r("hr"),t._v(" "),r("Timeline",{directives:[{name:"show",rawName:"v-show",value:"dark"===t.$colorMode.value,expression:"$colorMode.value === 'dark'"}],attrs:{id:t.twitterHandle,"source-type":"profile",options:{tweetLimit:"5",theme:"dark"}}}),t._v(" "),r("Timeline",{directives:[{name:"show",rawName:"v-show",value:"light"===t.$colorMode.value,expression:"$colorMode.value === 'light'"}],attrs:{id:t.twitterHandle,"source-type":"profile",options:{tweetLimit:"5",theme:"light"}}})]:t._e()],2)])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProfilePersonCard:r(732).default})},732:function(t,e,r){"use strict";r.r(e);var n=r(298),o={name:"ProfilePersonCard",mixins:[n.c,n.b],props:{person:{type:Object,required:!0}},computed:{profileCardStyleAsPersonType:function(){return"\n        border-top: 4px solid ".concat(this.getPersonTypeColor({model:this.$lowerCase(this.person.mentor)}),"\n      ")}}},c=(r(719),r(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-person-card",style:t.profileCardStyleAsPersonType,attrs:{itemscope:"",itemtype:"https://schema.org/Person"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-3 d-flex justify-content-center"},[t.person.avatar.length>0?r("img",{staticClass:"profile-person-card__avatar",attrs:{src:t.person.avatar,loading:"lazy",itemprop:"image",alt:t.person.name}}):t._e()]),t._v(" "),r("div",{staticClass:"col-12 col-lg-9 pl-lg-0"},[r("div",{staticClass:"profile-person-card-meta flex-column justify-content-center flex-lg-row text-center text-lg-left"},[r("div",{staticClass:"profile-person-card-meta__infoBox"},[t.person.name?r("div",{staticClass:"profile-person-card-meta__name",attrs:{itemprop:"name"}},[t._v("\n            "+t._s(t.person.name)+"\n          ")]):t._e(),t._v(" "),r("app-badge",{attrs:{"bg-color":t.getPersonTypeColor({model:t.$lowerCase(t.person.mentor)}),"text-color":t.getPersonTypeColor({model:t.$lowerCase(t.person.mentor)})}},[t._v("\n            "+t._s(t.getPersonTypeLabel({model:t.$lowerCase(t.person.mentor)}))+"\n          ")]),t._v(" "),r("hr"),t._v(" "),t.person.interests.length>0?r("div",{staticClass:"text",attrs:{itemprop:"seeks"}},[r("b",[t._v("Interests:")]),t._v(" "+t._s(t.person.interests)+"\n          ")]):t._e(),t._v(" "),t.person.goals.length>0?r("div",{staticClass:"text",attrs:{itemprop:"description"}},[r("b",[t._v("Goals:")]),t._v(" "+t._s(t.person.goals)+"\n          ")]):t._e()],1),t._v(" "),r("a",{staticClass:"profile-person-card-meta__qrCode",attrs:{href:"https://findmentor.network/peer/"+t.person.slug,target:"_blank",rel:"noopener noreferrer",itemprop:"url"}},[r("qrcode",{attrs:{value:"https://findmentor.network/peer/"+t.person.slug,options:{width:200}}})],1)])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-9 offset-lg-3 pl-lg-0"},[r("div",{staticClass:"profile-person-card-social-media"},[t.person.twitter_handle.length>0?r("a",{staticClass:"profile-person-card-social-media__button profile-person-card-social-media__button--twitter",attrs:{href:t.person.twitter_handle,target:"_blank",itemprop:"sameAs"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"],color:"white"}}),t._v("\n          Twitter\n        ")],1):t._e(),t._v(" "),t.person.github.length>0?r("a",{staticClass:"profile-person-card-social-media__button profile-person-card-social-media__button--github",attrs:{href:t.person.github,target:"_blank",itemprop:"sameAs"}},[r("font-awesome-icon",{attrs:{icon:["fab","github"],color:"white"}}),t._v("\n          GitHub\n        ")],1):t._e(),t._v(" "),t.person.linkedin.length>0?r("a",{staticClass:"profile-person-card-social-media__button profile-person-card-social-media__button--linkedin",attrs:{href:t.person.linkedin,target:"_blank",itemprop:"sameAs"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"],color:"white"}}),t._v("\n          LinkedIn\n        ")],1):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppBadge:r(733).default})},733:function(t,e,r){"use strict";r.r(e);r(8);var n={name:"AppBadge",props:{tag:{type:String,required:!1,default:"span"},bgColor:{type:String,required:!1,default:"var(--color-ui-06)"},textColor:{type:String,required:!1,default:"var(--color-text-04)"}},computed:{colorStyle:function(){return"border-color: ".concat(this.bgColor,"; color: ").concat(this.textColor)}}},o=(r(720),r(34)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"app-badge",style:this.colorStyle},[this._t("default")],2)}),[],!1,null,"dfa4aed2",null);e.default=component.exports},739:function(t,e,r){"use strict";r.r(e);r(8),r(17);var n=r(40),o=(r(52),r(20)),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,c=t.error,e.next=3,r("persons").where({slug:{$eq:o.slug}}).fetch();case 3:if(l=e.sent,d=Object(n.a)(l,1),m=d[0]){e.next=8;break}return e.abrupt("return",c({statusCode:404,message:"Not found"}));case 8:return e.abrupt("return",{doc:m});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.doc.name,meta:[{hid:"description",name:"description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"twitter:title",name:"twitter:title",content:this.doc.name},{hid:"twitter:description",name:"twitter:description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"twitter:image",name:"twitter:image",content:this.doc.avatar},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.doc.name},{hid:"og:title",property:"og:title",content:this.doc.name},{hid:"og:description",property:"og:description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"og:image",property:"og:image",content:this.doc.avatar},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.doc.avatar},{hid:"og:image:alt",property:"og:image:alt",content:this.doc.name}],script:[{src:"/disqus.js"},{src:"//findmentor.disqus.com/count.js",id:"dsq-count-scr"}]}}},l=r(34),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page peer-page"},[e("PersonDetail",{attrs:{person:this.doc}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PersonDetail:r(731).default})}}]);