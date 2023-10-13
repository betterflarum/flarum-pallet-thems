module.exports=function(t){var a={};function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=31)}([function(t,a){t.exports=flarum.core.compat["common/app"]},function(t,a){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,a){t.exports=flarum.core.compat["common/extend"]},function(t,a){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,a){t.exports=flarum.core.compat["components/IndexPage"]},function(t,a){t.exports=flarum.core.compat["common/components/Button"]},function(t,a){t.exports=flarum.core.compat["tags/common/utils/sortTags"]},function(t,a){t.exports=flarum.core.compat["common/Component"]},function(t,a){t.exports=flarum.core.compat["components/Link"]},function(t,a){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,a){t.exports=flarum.core.compat["utils/formatNumber"]},function(t,a){t.exports=flarum.core.compat["tags/components/TagsPage"]},function(t,a){t.exports=flarum.core.compat["forum/components/AffixedSidebar"]},function(t,a){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,a){t.exports=flarum.core.compat["forum/components/DiscussionList"]},function(t,a){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,a){t.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(t,a){t.exports=flarum.core.compat["forum/ForumApplication"]},function(t,a){t.exports=flarum.core.compat["common/components/HeaderSecondary"]},function(t,a){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,a){t.exports=flarum.core.compat["common/components/LogInModal"]},function(t,a){t.exports=flarum.core.compat["common/components/SignUpModal"]},function(t,a){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,a){t.exports=flarum.core.compat["utils/humanTime"]},function(t,a){t.exports=flarum.core.compat["tags/components/TagHero"]},function(t,a){t.exports=flarum.core.compat["tags/components/TagLinkButton"]},function(t,a){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,a){t.exports=flarum.core.compat["tags/common/helpers/tagIcon"]},function(t,a){t.exports=flarum.core.compat["tags/common/helpers/tagLabel"]},,,function(t,a,o){"use strict";o.r(a);var e=o(2),n=o(0),r=o.n(n),s=o(12),i=o.n(s),c=o(5),u=o.n(c),l=o(13),p=o.n(l),f=o(14),d=o.n(f),g=o(15),v=o.n(g),b=o(16),h=o.n(b),y=o(17),x=o.n(y),k=o(18),N=o.n(k),I=o(4),_=o.n(I),P=o(8),T=o.n(P),w=o(19),j=o.n(w);function C(t,a){return(C=Object.setPrototypeOf||function(t,a){return t.__proto__=a,t})(t,a)}function A(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,C(t,a)}var O=o(7),D=o.n(O),B=o(9),L=o.n(B),S=o(1),M=o.n(S),z=o(20),U=o.n(z),E=function(t){function a(){return t.apply(this,arguments)||this}return A(a,t),a.prototype.view=function(){return m("li",{className:"separator"})},a}(D.a);E.isListItem=!0;var F=E,G=o(21),H=o.n(G),W=o(22),q=o.n(W),J=o(10),K=o.n(J),Q=o(23),R=o.n(Q),V=o(3),X=o.n(V),Y=function(t){function a(){return t.apply(this,arguments)||this}A(a,t);var o=a.prototype;return o.view=function(){var t=app.session.user;return m("div",{class:"App-sidebar-container"},m("div",{class:"App-sidebar-user-block"},t?[m("div",{className:"loggedIn"},m("div",{class:"avatarWrapper"},m("div",{className:"Avatar-container"},q()(t),m("ul",{className:"badges"},X()(t.badges().toArray())))),m("h4",null,t.username()),m("p",null,app.translator.trans("core.forum.user.joined_date_text",{ago:R()(t.joinTime())})),m("div",{class:"App-sidebar-user-stats"},m("div",{class:"statItem"},m("span",null,app.translator.trans("core.forum.user.posts_link")),m("span",null,K()(t.commentCount()))),m("div",{class:"statItem"},m("span",null,app.translator.trans("core.forum.user.discussions_link")),m("span",null,K()(t.discussionCount())))))]:[m("div",{className:"guest"},m("h4",{className:"guestGreeting"},app.translator.trans("the-turk-pallet-theme.forum.howdy")),m("p",{className:"guestMessage"},app.translator.trans("the-turk-pallet-theme.forum.involve")),m("div",{className:"guestButtons"},this.sessionItems().toArray()))]),m("div",{class:"App-sidebar-items"},m("div",{class:"App-sidebar-items-container"},m("ul",null,X()(this.items().toArray()),t?X()(this.sessionItems().toArray()):""))))},o.sessionItems=function(){var t=new L.a,a=app.session.user;return a?(t.add("profile",M.a.component({icon:"fas fa-user",href:app.route.user(a)},app.translator.trans("core.forum.header.profile_button")),40),t.add("settings",M.a.component({icon:"fas fa-cog",href:app.route("settings")},app.translator.trans("core.forum.header.settings_button")),30),t.add("separator",F.component(),25),app.forum.attribute("adminUrl")&&t.add("administration",M.a.component({icon:"fas fa-wrench",href:app.forum.attribute("adminUrl"),target:"_blank"},app.translator.trans("core.forum.header.admin_button")),20),t.add("logOut",M.a.component({icon:"fas fa-sign-out-alt",onclick:app.session.logout.bind(app.session)},app.translator.trans("core.forum.header.log_out_button")),10)):(app.forum.attribute("allowSignUp")&&t.add("signUp",u.a.component({className:"Button Button--secondary Button--block",onclick:function(){return app.modal.show(H.a)}},app.translator.trans("core.forum.header.sign_up_link")),20),t.add("logIn",u.a.component({className:"Button Button--secondary Button--block",onclick:function(){return app.modal.show(U.a)}},app.translator.trans("core.forum.header.log_in_link")),10)),t},o.items=function(){var t=new L.a,a=app.search.stickyParams(),o=app.session.user;return t.add("allDiscussions",M.a.component({href:app.route("index",a),icon:"far fa-comments"},app.translator.trans("core.forum.index.all_discussions_link")),40),app.forum.attribute("blogAddSidebarNav")&&"0"!==app.forum.attribute("blogAddSidebarNav")&&t.add("blog",m(M.a,{icon:"fas fa-comment",href:app.route("blog")},app.translator.trans("v17development-flarum-blog.forum.blog")),39),t.add("tags",m(M.a,{icon:"fas fa-th-large",href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.tags_link")),20),app.initializers.has("justoverclock/flarum-ext-keywords")&&t.add("Glossary",m(M.a,{href:app.route("GlossaryPage"),icon:"fas fa-atlas"},app.translator.trans("flarum-ext-keywords.forum.title")),21),app.initializers.has("askvortsov/flarum-categories")&&t.add("categories",m(M.a,{icon:"fas fa-th-list",href:app.route("categories")},app.translator.trans("askvortsov-categories.forum.index.categories_link")),22),app.forum.attribute("clarkwinkelmann-group-list.showSideNavLink")&&t.add("clarkwinkelmann-group-list-item",M.a.component({href:app.route("clarkwinkelmann-group-list"),icon:"fas fa-users"},app.translator.trans("clarkwinkelmann-group-list.forum.nav")),23),app.forum.attribute("canSeeUserDirectoryLink")&&t.add("fof-user-directory",M.a.component({href:app.route("fof_user_directory"),icon:"far fa-address-book"},app.translator.trans("fof-user-directory.forum.page.nav")),24),o&&(app.initializers.has("fof-byobu")&&t.add("privateDiscussions",M.a.component({icon:app.forum.data.attributes["byobu.icon-badge"],href:app.route("byobuPrivate")},app.translator.trans("fof-byobu.forum.nav.nav_item")),29),t.add("following",M.a.component({href:app.route("following",a),icon:"fas fa-star"},app.translator.trans("flarum-subscriptions.forum.index.following_link")),30),t.add("separator",F.component(),10)),app.initializers.has("justoverclock/flarum-ext-contactme")&&t.add("contactPage",m(M.a,{href:app.route("contactPage"),icon:"fas fa-at"},app.translator.trans("flarum-ext-contactme.forum.title")),8),t},a}(D.a),Z=o(24),tt=o.n(Z),at=o(25),ot=o.n(at),et=o(11),nt=o.n(et),rt=o(26),st=o.n(rt),it=o(6),ct=o.n(it),mt=o(27),ut=o.n(mt),lt=o(28),pt=o.n(lt);function ft(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,a,o,e){return a+a+o+o+e+e}));var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16):null}r.a.initializers.add("the-turk-pallet-theme",(function(){r.a.initializers.has("flarum-tags")?(Object(e.extend)(p.a.prototype,"view",(function(t){if(0!=r.a.forum.attribute("darkFlarum")){var a=ct()(this.attrs.discussion.tags());if(a&&a.length){var o=a[0].color();o&&(t.attrs.style={backgroundColor:"rgba("+ft(o)+", 0.6)"})}}})),Object(e.extend)(v.a.prototype,"oncreate",(function(t,a){var o=$(a.dom).find(".DiscussionListItem-content"),e=o.find(".item-sticky"),n=o.find(".item-locked");e.length&&e.closest(".DiscussionListItem").addClass("stickyDiscussion"),n.length&&n.closest(".DiscussionListItem").addClass("lockedDiscussion")})),Object(e.extend)(h.a.prototype,"onupdate",(function(t,a){$(a.dom).find("nav .Button--primary").removeClass("Button--primary").addClass("Button--secondary")})),Object(e.extend)(x.a.prototype,"mount",(function(){var t=document.getElementById("header-primary"),a=document.createElement("div");a.className="App-sidebar",t.parentNode.insertBefore(a,t.nextSibling),m.mount(a,Y)})),Object(e.extend)(N.a.prototype,"items",(function(t){var a=r.a.forum.attribute("canStartDiscussion")||!r.a.session.user;t.add("newDiscussion",u.a.component({icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion Button--header",itemClassName:"App-primaryControl",onclick:function(){return _.a.prototype.newDiscussionAction().catch((function(){}))},disabled:!a},r.a.translator.trans(a?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")),19)})),Object(e.extend)(_.a.prototype,"oncreate",(function(t,a){var o=this.currentTag(),e=$(a.dom).find(".container"),n=$(a.dom).find(".sideNav");n.addClass("sideNav--hidden"),e.addClass("container--shrink"),o&&(e.removeClass("container--shrink"),n.removeClass("sideNav--hidden"))})),Object(e.extend)(_.a.prototype,"navItems",(function(t){if(!r.a.current.matches(nt.a)){var a=r.a.search.stickyParams(),o=r.a.store.all("tags"),e=this.currentTag();if(ct()(o).forEach((function(a){t.remove("tag"+a.id())})),t.has("moreTags")&&t.remove("moreTags"),e){var n=function(o){var n=e===o;n||(n=e.parent()===o),t.remove("tag"+o.id()),t.add("navTag"+o.id(),ot.a.component({model:o,params:a,active:n},null==o?void 0:o.name()),-14)};ct()(o).filter((function(t){return null!==t.position()&&(t===e||t===e.parent()||t.isChild()&&(t.parent()===e||t.parent()===e.parent()))})).forEach(n),o.filter((function(t){return null===t.position()})).sort((function(t,a){return a.discussionCount()-t.discussionCount()})).forEach(n)}}})),Object(e.override)(_.a.prototype,"view",(function(){return m("div",{className:"IndexPage"},this.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m(i.a,null,m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,X()(this.sidebarItems().toArray())))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},X()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},X()(this.actionItems().toArray()))),m(d.a,{state:r.a.discussions})))))})),Object(e.extend)(tt.a.prototype,"view",(function(t){if(0!=r.a.forum.attribute("darkFlarum")){var a=this.attrs.model.color();t.attrs.style=a?{color:"#fff",backgroundColor:"rgba("+ft(a)+", 0.6)"}:""}})),Object(e.override)(nt.a.prototype,"view",(function(){if(this.loading)return m(j.a,null);var t=this.tags.filter((function(t){return null!==t.position()})),a=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},_.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,X()(_.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content"},m("div",{className:"TagFlex"},t.map((function(t){var a=t.lastPostedDiscussion(),o=ct()(t.children()||[]);return m("div",{className:"TagItem"},m("div",{className:"TagItem-borderLine",style:"border-color: rgba("+ft(t.color())+", 0.5)"}),m("div",{className:"TagItem-col"},m("div",{className:"TagItem-infoContainer"},m("div",{className:"TagItem-icon"},t.icon()&&ut()(t,{className:"fa-3x"},{useColor:!1})),m("div",{className:"TagItem-info"},m(T.a,{href:r.a.route.tag(t)},m("span",{className:"TagItem-title"},t.name())),m("p",{className:"TagItem-desc"},t.description()),o?m("div",{className:"TagItem-children"},o.map((function(t){return[m(T.a,{href:r.a.route.tag(t)},t.name())," "]}))):"")),a?m("div",{className:"TagItem-detailContainer"},m("div",{className:"TagItem-lastPostedDiscussion"},m(T.a,{className:"TagItem-lastPostedDiscussion-link",href:r.a.route.discussion(a,a.lastPostNumber())},m("span",{className:"TagItem-lastPostedDiscussion-title"},a.title())),st()(a.lastPostedAt()))):""))}))),a.length?m("div",{className:"TagCloud"},a.map((function(t){return[pt()(t,{link:!0})," "]}))):"")))}))):console.error("[the-turk/flarum-pallet-theme] flarum/tags is not enabled")}))}]);
//# sourceMappingURL=forum.js.map