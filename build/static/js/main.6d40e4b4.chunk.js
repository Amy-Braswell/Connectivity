(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(28),c=a.n(n),r=a(0),l=a.n(r),m=a(5),o=a(8),s=a(29),i=a(19),u=a(7),d=a(23),p=a(57),b=a.n(p),E={user:null},_=Object(r.createContext)({user:null,photos:[],isAuth:!1,login:function(e){},logout:function(){},updateUser:function(e){}});if(localStorage.getItem("jwtToken")){var f=b()(localStorage.getItem("jwtToken"));1e3*f.exp<Date.now()?localStorage.removeItem("jwtToken"):E.user=f}function v(e,t){var a=t.type,n=t.payload;switch(a){case"CREATE_PHOTO":return Object(d.a)(Object(d.a)({},e),{},{newPicture:n});case"LOGIN":return Object(d.a)(Object(d.a)({},e),{},{user:n});case"LOGOUT":return Object(d.a)(Object(d.a)({},e),{},{user:null});default:return e}}function N(e){var t=Object(r.useReducer)(v,E),a=Object(u.a)(t,2),n=a[0],c=a[1];return l.a.createElement(_.Provider,Object.assign({value:{user:n.user,photos:n.photos,isAuth:n.isAuth,login:function(e){localStorage.setItem("jwtToken",e.token||e.tokenId),c({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),c({type:"LOGOUT"})},dispatch:c}},e))}var h=a(39);var g=function(e){var t=e.component,a=Object(h.a)(e,["component"]),n=Object(r.useContext)(_).user;return l.a.createElement(o.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(t,e):l.a.createElement(o.a,{to:"/login"})}}))},y=a(6),O=a(59);a(83);function j(e){var t=e.title,a=e.items,n=void 0===a?[]:a,c=(e.multiSelect,Object(r.useState)(!1)),m=Object(u.a)(c,2),o=m[0],s=m[1],i=function(){return s(!o)};return j.handleClickOutside=function(){return s(!1)},l.a.createElement("div",{className:"dd-wrapper"},l.a.createElement("div",{tabIndex:0,className:"dd-header",role:"button",onKeyPress:function(){return i()},onClick:function(){return i()}},l.a.createElement("div",{className:"dd-header__title"},l.a.createElement("p",{className:"dd-header__title--bold"},t)),l.a.createElement("div",{className:"dd-header__action"},l.a.createElement("p",null,o?l.a.createElement(y.a,{className:"bars",icon:["fas","times"]}):l.a.createElement(y.a,{className:"times",icon:["fas","bars"]})))),o&&l.a.createElement("ul",{className:"dd__list"},n.map(function(e){return l.a.createElement("li",{className:"dd__list-item",key:e.id},l.a.createElement("button",{className:"dd__li__button",type:"button",onKeyPress:function(){return i()},onClick:function(){return i()}},e.value))})))}var k={handleClickOutside:function(){return j.handleClickOutside}},I=Object(O.a)(j,k);a(84);function C(){var e=Object(r.useContext)(_),t=e.user,a=e.logout;return t?l.a.createElement("nav",null,l.a.createElement("div",{className:"menubar__flex-container"},l.a.createElement("div",{className:"menubar__flex-item"},l.a.createElement(m.b,{to:"/"},t&&t.name)),l.a.createElement("div",{className:"menubar__flex-item"},l.a.createElement(m.b,{to:"/login",onClick:a},"Logout")))):l.a.createElement("nav",null,l.a.createElement("div",{className:"menubar__flex-container"},l.a.createElement("div",{className:"menubar__flex-item"})))}a(85);function x(){var e=Object(r.useContext)(_),t=e.user,a=e.logout,n=[{id:1,value:l.a.createElement(m.b,{to:"/login",onClick:a},l.a.createElement("span",{className:"dd__li--width"},"Logout"))}];return l.a.createElement("header",null,l.a.createElement("div",{className:"Desktop__header"},l.a.createElement("div",{className:"app__header__logo__container"},l.a.createElement("h1",null,l.a.createElement(m.b,{to:"/"},"Connectivity")," ")),l.a.createElement("div",{className:"menubar__container"},l.a.createElement(C,null))),l.a.createElement("div",{className:"Mobile__header"},l.a.createElement("div",{className:"app__header__logo__container"},l.a.createElement("h1",null,l.a.createElement(m.b,{to:"/"},"Connectivity")," ")),l.a.createElement("div",{className:"dropdown__container"},t?l.a.createElement(I,{items:n}):l.a.createElement("div",null))))}a(86);function w(e){return l.a.createElement("span",{className:"Tooltip"},l.a.createElement("span",{className:"Tooltip-content",style:{color:e.color}},e.children),l.a.createElement("div",{className:"Tooltip-message",style:{top:e.top,left:e.left}},e.message))}a(87);function $(){return Object(r.useContext)(_).user?l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav__flex-container nav__bar"},l.a.createElement("div",{className:"nav__item"},l.a.createElement(w,{message:"Posts"},l.a.createElement(m.b,{to:"/",name:"posts"},l.a.createElement(y.a,{icon:["fa","address-card"]})))),l.a.createElement("div",{className:"nav__item"},l.a.createElement(w,{message:"Members"},l.a.createElement(m.b,{to:"/members",name:"members"},l.a.createElement(y.a,{icon:["fa","users"]})))),l.a.createElement("div",{className:"nav__item"},l.a.createElement(w,{message:"Edit Profile"},l.a.createElement(m.b,{to:"/update",name:"update"},l.a.createElement(y.a,{icon:["fa","pencil-alt"]})))))):l.a.createElement("div",null,"")}var P=a(9),S=a(31),A=a.n(S);a(89);function B(e){var t=e.post,a=t.id,n=t.commentCount,c=0!==n?l.a.createElement("button",{className:"Button--comment",type:"button"},l.a.createElement("span",null," ",l.a.createElement(y.a,{icon:["fas","comment"]})," "),l.a.createElement("span",null," ",n)):l.a.createElement("button",{className:"Button--comment",type:"button"},l.a.createElement("span",null,l.a.createElement(y.a,{icon:["fas","comment"]})," "));return l.a.createElement("div",{className:"comment__button"},l.a.createElement(w,{message:"Comment"},l.a.createElement(m.b,{to:"/posts/".concat(a)},c)))}var D=a(60),L=a(13),q=a(14),F=a.n(q);function T(){var e=Object(L.a)(["\n  mutation deleteComment($postId: ID!, $commentId: ID!) {\n    deleteComment(postId: $postId, commentId: $commentId) {\n      id\n      comments {\n        id\n        name\n        createdAt\n        picture\n        body\n      }\n      commentCount\n    }\n  }\n"]);return T=function(){return e},e}function U(){var e=Object(L.a)(["\n  mutation createComment($postId: ID!, $body: String!) {\n    createComment(postId: $postId, body: $body) {\n      id\n      comments {\n        id\n        body\n        picture\n        createdAt\n        name\n      }\n      commentCount\n    }\n  }\n"]);return U=function(){return e},e}function W(){var e=Object(L.a)(["\nmutation likePost($postId: ID!) {\n  likePost(postId: $postId) {\n    id\n    likes {\n      id\n      name\n    }\n    likeCount\n  }\n}\n"]);return W=function(){return e},e}function Q(){var e=Object(L.a)(["\n  mutation deletePost($postId: ID!) {\n    deletePost(postId: $postId)\n  }\n"]);return Q=function(){return e},e}function G(){var e=Object(L.a)(["\n  mutation createPost($body: String!) {\n    createPost(body: $body) {\n      id\n      body\n      createdAt\n      name\n      userId\n      picture\n      likes {\n        id\n        name\n        createdAt\n      }\n      likeCount\n      comments {\n        id\n        body\n        picture\n        name\n        createdAt\n      }\n      commentCount\n    }\n  }\n"]);return G=function(){return e},e}function M(){var e=Object(L.a)(["\nmutation updateProfile(\n  $email: String!\n  $phone: String\n  $city: String\n  $state: String\n  $about: String\n  $relation: String\n  $picture: String\n  $banner: String\n) {\n  updateProfile(\n    updateInput: {\n      email: $email\n      phone: $phone\n      city: $city\n      state: $state\n      about: $about\n      relation: $relation\n      picture: $picture\n      banner: $banner\n    }\n  ) {\n    email\n    phone\n    city\n    state\n    about\n    relation\n    picture\n    banner \n  }\n}\n"]);return M=function(){return e},e}function R(){var e=Object(L.a)(["\nmutation register(\n  $name: String!\n  $email: String!\n  $password: String!\n  $confirmPassword: String!\n) {\n  register(\n    registerInput: {\n      name: $name\n      email: $email\n      password: $password\n      confirmPassword: $confirmPassword\n    }\n  ) {\n    id\n    email\n    name\n    createdAt\n    token\n  }\n}\n"]);return R=function(){return e},e}function J(){var e=Object(L.a)(["\nmutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    id\n    email\n    name\n    about\n    city\n    state\n    picture\n    banner\n    phone\n    relation\n    createdAt\n    token\n  }\n}\n"]);return J=function(){return e},e}var H=F()(J()),K=(F()(R()),F()(M())),Y=F()(G()),z=F()(Q()),V=F()(W()),X=F()(U()),Z=F()(T());function ee(){var e=Object(L.a)(["\n  query($photoId: ID!) {\n    getPhoto(photoId: $photoId) {\n      id\n      image\n      createdAt\n      folder{\n        name\n        createdAt\n      }\n    }\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(L.a)(["\n  {\n    getPhotos {\n      id\n      image\n      createdAt\n      folder{\n        name\n        createdAt\n      }\n    }\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(L.a)(["\n  query($userId: ID!) {\n    getUser(userId: $userId) {\n    id\n    name\n    phone\n    about\n    city\n    state\n    relation\n    banner\n    email\n    picture\n    createdAt\n    }\n  }\n"]);return ae=function(){return e},e}function ne(){var e=Object(L.a)(["\n  {\n    getUsers {\n    id\n    name\n    phone\n    about\n    city\n    state\n    relation\n    email\n    picture\n    banner\n    token\n    createdAt\n    }\n  }\n"]);return ne=function(){return e},e}function ce(){var e=Object(L.a)(["\n  query($postId: ID!) {\n    getPost(postId: $postId) {\n      id\n      body\n      createdAt\n      name\n      userId\n      picture\n      likeCount\n      likes {\n        name\n      }\n      commentCount\n      comments {\n        id\n        name\n        picture\n        createdAt\n        body\n      }\n    }\n  }\n"]);return ce=function(){return e},e}function re(){var e=Object(L.a)(["\n  {\n    getPosts {\n      id\n      body\n      createdAt\n      name\n      userId\n      picture\n      likeCount\n      likes {\n        name\n      }\n      commentCount\n      comments {\n        id\n        name\n        picture\n        createdAt\n        body\n      }\n    }\n  }\n"]);return re=function(){return e},e}var le=F()(re()),me=F()(ce()),oe=F()(ne()),se=F()(ae());F()(te()),F()(ee()),a(90);function ie(e){var t=e.postId,a=e.commentId,n=e.callback,c=a?Z:z,r=Object(P.a)(c,{update:function(e){if(!a){var c=e.readQuery({query:le});c.getPosts=c.getPosts.filter(function(e){return e.id!==t}),e.writeQuery({query:le,data:c})}n&&n()},variables:{postId:t,commentId:a}}),m=Object(u.a)(r,1)[0];return l.a.createElement("div",{className:"delete__button"},l.a.createElement(w,{left:"-20px",message:a?"Delete comment":"Delete post"},l.a.createElement("button",{className:"Button--delete",type:"button",onClick:function(){return Object(D.confirmAlert)({message:"Are you sure?",buttons:[{label:"No",onClick:function(){}},{label:"Yes",onClick:function(){m()}}]})}},l.a.createElement(y.a,{icon:["fa","trash-alt"]}))))}a(94);function ue(e){var t=e.user,a=e.post,n=a.id,c=a.likeCount,m=a.likes,o=Object(r.useState)(!1),s=Object(u.a)(o,2),i=s[0],d=s[1];Object(r.useEffect)(function(){t&&m.find(function(e){return e.name===t.name}),d(!1)},[t,m]);var p=Object(P.a)(V,{variables:{postId:n}}),b=Object(u.a)(p,1)[0],E=0!==c?l.a.createElement("button",{className:"Button--like",type:"button"},l.a.createElement("span",null," ",l.a.createElement(y.a,{icon:["fa","thumbs-up"]})," "),l.a.createElement("span",null," ",c)):l.a.createElement("button",{className:"Button--like",type:"button"},l.a.createElement("span",null," ",l.a.createElement(y.a,{icon:["fa","thumbs-up"]})," "));return l.a.createElement("div",{className:"like__button",onClick:b},l.a.createElement(w,{left:"-15px",message:i?"Unlike":"Like"},E))}a(95);function de(e){var t=e.post,a=t.body,n=t.createdAt,c=t.id,o=t.name,s=t.picture,i=t.likeCount,u=t.commentCount,d=t.likes,p=Object(r.useContext)(_).user,b=A()(n).fromNow();return l.a.createElement("section",{className:"post-card__flex-container"},l.a.createElement("div",{className:"post-card__thumbnail"},l.a.createElement(m.b,{to:"/members/".concat(c)},l.a.createElement("div",{className:"post-card__thumbnail--round"},l.a.createElement("img",{src:s,alt:"member headshot"})))),l.a.createElement("div",{className:"post-card__info"},l.a.createElement("h3",{className:"post-card__title"},l.a.createElement(m.b,{to:"/posts/".concat(c)},o)),l.a.createElement(m.b,{to:"/posts/".concat(c)},l.a.createElement("span",{className:"post-card__dates"},b)),l.a.createElement("p",{className:"post-card__body"},a),l.a.createElement("div",{className:"post-card__button-container__flex-container"},l.a.createElement("div",{className:"other-buttons__container"},l.a.createElement(ue,{user:o,post:{id:c,likes:d,likeCount:i}}),l.a.createElement(B,{post:{id:c,commentCount:u}})),l.a.createElement("div",{className:"delete-button__container"},p&&p.name===o&&l.a.createElement(ie,{postId:c})))))}var pe=a(68);function be(e){var t=e.className,a=Object(h.a)(e,["className"]);return l.a.createElement("form",Object.assign({className:[t].join(" "),action:"#"},a))}var Ee=a(36),_e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(r.useState)(t),n=Object(u.a)(a,2),c=n[0],l=n[1];return{onChange:function(e){l(Object(d.a)(Object(d.a)({},c),{},Object(Ee.a)({},e.target.name,e.target.value)))},onSubmit:function(t){t.preventDefault(),e()},values:c}};a(96);function fe(){var e=_e(function(){m()},{body:""}),t=e.values,a=e.onChange,n=e.onSubmit,c=Object(P.a)(Y,{variables:t,update:function(e,a){var n=e.readQuery({query:le});n.getPosts=[a.data.createPost].concat(Object(pe.a)(n.getPosts)),e.writeQuery({query:le,data:n}),t.body=""}}),r=Object(u.a)(c,2),m=r[0],o=r[1].loading;return l.a.createElement("section",{className:"add-post__form"},l.a.createElement(be,{onSubmit:n,className:o?"Loading add-post--loading":""},l.a.createElement("h3",{className:"add-post__title"},"Create a post:"),l.a.createElement("div",{className:"add-post__flex-container"},l.a.createElement("div",{className:"add-post__form-group"},l.a.createElement("label",{htmlFor:"post-content"},l.a.createElement("textarea",{className:"new-post__content",id:"post-content-input",placeholder:"What's on your mind?",name:"body",onChange:a,value:t.body}))),l.a.createElement("div",{className:"Button--submit add-post__button"},l.a.createElement("button",{type:"submit"},"Submit")))))}a(97);function ve(){var e=Object(r.useContext)(_).user,t=Object(P.b)(le),a=t.loading,n=t.data.getPosts;return l.a.createElement("section",{className:"home-main"},l.a.createElement("h2",{className:"home__title"},"Public Posts"),l.a.createElement("ul",null,e&&l.a.createElement(fe,null),a?l.a.createElement("h2",null,"Loading posts.."):n&&n.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(de,{post:e}))})))}a(98);function Ne(e){var t=Object(r.useContext)(_),a=Object(r.useState)({}),n=Object(u.a)(a,2),c=n[0],m=n[1],o=_e(function(){E()},{email:"demo-user@email.com",password:"demo-user"}),s=o.onChange,i=o.onSubmit,d=o.values,p=Object(P.a)(H,{update:function(a,n){var c=n.data.login;t.login(c),e.history.push("/")},onError:function(e){m(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),b=Object(u.a)(p,2),E=b[0],f=b[1].loading;return l.a.createElement("section",{className:"login-main"},l.a.createElement("div",{className:"login-section"},l.a.createElement(be,{onSubmit:i,className:f?"login-form loading-login":"login-form"},Object.keys(c).length>0&&l.a.createElement("div",{className:"Error Message"},l.a.createElement("ul",{className:"Error__list"},Object.values(c).map(function(e){return l.a.createElement("li",{key:e},e)}))),l.a.createElement("ul",{className:"noBullet"},l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"Email"},l.a.createElement("input",{className:"inputFields",id:"email",placeholder:"Email...",name:"email",type:"text",value:d.email,error:c.email?"true":"false",onChange:s}))),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"Password"},l.a.createElement("input",{className:"inputFields",placeholder:"Password...",name:"password",type:"password",value:d.password,error:c.password?"true":"false",onChange:s}))),l.a.createElement("li",null,l.a.createElement("input",{type:"submit",id:"join-btn",name:"join",alt:"Join",value:"Login"}))))),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,".")))}a(99);function he(e){var t=e.user,a=t.id,n=t.name,c=t.city,r=t.state,o=t.picture,s=t.relation;return l.a.createElement("section",{className:"member-card__flex-container"},l.a.createElement("div",{className:"member-card__thumbnail"},l.a.createElement(m.b,{to:"/members/".concat(a)},l.a.createElement(w,{left:"-15px",message:s},l.a.createElement("div",{className:"member-card__thumbnail--round"},l.a.createElement("img",{src:o,alt:"member headshot"}))))),l.a.createElement("div",{className:"member-card__info"},l.a.createElement(m.b,{to:"/members/".concat(a)},l.a.createElement("h3",{className:"member-card__title"},n)),c?l.a.createElement("p",{className:"member-card__location"},c,", ",r):""))}a(100);function ge(){var e=Object(P.b)(oe),t=e.loading,a=e.data.getUsers;return l.a.createElement("section",{className:"members-main"},l.a.createElement("h2",{className:"members__title"},"Group Members"),l.a.createElement("ul",{className:"members__grid--container"},t?l.a.createElement("h2",null,"Loading members.."):a&&a.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(he,{user:e}))})))}a(101);function ye(e){var t,a=e.match.params.postId,n=Object(r.useContext)(_).user,c=Object(r.useRef)(null),o=Object(r.useState)(""),s=Object(u.a)(o,2),i=s[0],d=s[1],p=Object(P.b)(me,{variables:{postId:a}}).data.getPost,b=Object(P.a)(X,{update:function(){d(""),c.current.blur()},variables:{postId:a,body:i}}),E=Object(u.a)(b,1)[0];if(p){var f=p.id,v=p.body,N=p.createdAt,h=p.name,g=p.picture,y=p.comments,O=p.likes,j=p.likeCount,k=p.commentCount;t=l.a.createElement("section",{className:"single-post-main"},l.a.createElement("h2",{className:"single-post__title"},"Public Post"),l.a.createElement("button",{className:"Button--back",onClick:function(){e.history.replace("/")}},"Back"),l.a.createElement("div",{className:"single-post-card__flex-container"},l.a.createElement("div",{className:"single-post-card__thumbnail"},l.a.createElement("div",{className:"post-card__thumbnail--round"},l.a.createElement("img",{src:g,alt:"member headshot"}))),l.a.createElement("div",{className:"single-post-card__info"},l.a.createElement("h3",{className:"single-post-card__title"},l.a.createElement(m.b,{to:"/postId/".concat(f)},h)),l.a.createElement("div",{className:"single-post-card__dates"},l.a.createElement("div",{className:"single-post-card__dates-created_at"},l.a.createElement("span",{className:"Date"},A()(N).fromNow()))),l.a.createElement("p",{className:"single-post-card__body"},v),l.a.createElement("div",{className:"single-post-card__button-container__flex-container"},l.a.createElement("div",{className:"single-other-buttons__container"},l.a.createElement(ue,{user:h,post:{id:f,likeCount:j,likes:O}}),l.a.createElement(B,{post:{id:f,commentCount:k}})),l.a.createElement("div",{className:"single-post-card-delete-button__container"},n&&n.name===h&&l.a.createElement(ie,{postId:f,callback:function(){e.history.replace("/")}}))))),l.a.createElement("div",{className:"single-post-comments-section add-comment__form"},l.a.createElement(be,null,l.a.createElement("h3",{className:"add-comment__form__title"},"Share a Public Comment"),l.a.createElement("div",{className:"add-comment__flex-container"},l.a.createElement("div",{className:"add-comment__form-group"},l.a.createElement("label",{htmlFor:"comment-content"},l.a.createElement("textarea",{className:"new-comment__content",id:"comment-content-input",type:"text",placeholder:"What's on your mind?",name:"comment",value:i,onChange:function(e){return d(e.target.value)},ref:c}))),l.a.createElement("div",{className:"Button--submit add-comment__button"},l.a.createElement("button",{type:"submit",disabled:""===i.trim(),onClick:E},"Submit")))),l.a.createElement("div",{className:"comments"},l.a.createElement("ul",{className:"comments__comment-list"},y.map(function(e){return l.a.createElement("li",{key:e.id,className:"comment-in-list__flex-container"},l.a.createElement("div",{className:"comment__thumbnail--round"},l.a.createElement(m.b,{to:"/members/".concat(f)},l.a.createElement("div",{className:"comment__thumbnail"},l.a.createElement("img",{src:e.picture,alt:"member headshot"})))),l.a.createElement("div",{className:"comment__content__flex-container"},l.a.createElement("div",{className:"comment__info"},l.a.createElement("h3",{className:"comment__title"},e.name),l.a.createElement("div",{className:"comment__dates"},l.a.createElement("div",{className:"comment__dates-created_at"},l.a.createElement("span",{className:"Date"},A()(e.createdAt).fromNow()))),l.a.createElement("p",{className:"comment__body"},e.body)),l.a.createElement("div",{className:"comment__button-container__flex-container"},l.a.createElement("div",{className:"comment-card-other-buttons__container"},l.a.createElement(ue,{className:"comment__like-button",user:h,post:{id:f,likeCount:j,likes:O}})),l.a.createElement("div",{className:"comment-card-delete-button__container"},n&&n.name===e.name&&l.a.createElement(ie,{postId:f,commentId:e.id})))))})))))}else t=l.a.createElement("p",null,"Loading post..");return t}var Oe=a(21);a(102);function je(e){var t,a=e.match.params.memberId,n=Object(P.b)(le).data.getPosts,c=Object(P.b)(se,{variables:{userId:a}}).data.getUser;if(c){var r=c.name,m=c.email,o=c.phone,s=c.city,i=c.state,u=c.about,d=c.relation,p=c.picture,b=c.banner,E=l.a.createElement("div",{className:"single-member-card__info"},d&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"question"},"What is your relation to the group?"),l.a.createElement("p",{className:"answer"},d)),u&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"question"},"What are your hobbies, interests, etc?"),l.a.createElement("p",{className:"answer"},u)),i&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"question"},"Where do you currently live?"),l.a.createElement("p",{className:"answer"},s,", ",i)),l.a.createElement("p",{className:"question"},"Contact Info:"),o&&l.a.createElement("p",{className:"answer"},l.a.createElement(y.a,{icon:["fa","phone"]}),function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?"("+t[1]+") "+t[2]+"-"+t[3]:null}(o)),m&&l.a.createElement("p",{className:"answer"},l.a.createElement(y.a,{icon:["fa","envelope"]}),m)),_=l.a.createElement("div",{className:"member__activity__section"},l.a.createElement("ul",{className:"filtered-post-list"},function(e){var t=[];return e.map(function(e){return e.name===r?t.push(e):""}),t.slice(0,5)}(n).map(function(e){return l.a.createElement("li",{key:e.id,className:"filtered-post-in-list__flex-container"},l.a.createElement("div",{className:"Item__in__activity__list__FlexItem__Info"},l.a.createElement(de,{post:e})))}))),f=l.a.createElement(Oe.d,{defaultIndex:0,onSelect:function(e){return e}},l.a.createElement(Oe.b,null,l.a.createElement(Oe.a,null,"Info"),l.a.createElement(Oe.a,null,"Recent Posts")),l.a.createElement(Oe.c,null,E),l.a.createElement(Oe.c,null,_));t=l.a.createElement("section",{className:"single-member-main"},l.a.createElement("h2",{className:"single-member__title"},r),l.a.createElement("button",{className:"Button--back",onClick:function(){e.history.replace("/members")}},"Back"),l.a.createElement("div",{className:"single-member-card__profile-pix"},b&&l.a.createElement("div",{className:"single-member-card__banner"},l.a.createElement("img",{src:b,alt:"member headshot"})),p&&l.a.createElement("div",{className:"single-member-card__thumbnail--round"},l.a.createElement("img",{src:p,alt:"member headshot"}))),l.a.createElement("div",{className:"single-member-card__flex-container"},l.a.createElement("h2",{className:"single-member-card__name"},r),f))}else t=l.a.createElement("p",null,"Loading user..");return t}a(33),a(46),a(64),a(65),a(120);function ke(e){var t=Object(r.useState)({}),a=Object(u.a)(t,2),n=a[0],c=a[1],m=Object(r.useState)(""),o=Object(u.a)(m,2),s=(o[0],o[1],Object(r.useContext)(_)),i=(s.dispatch,s.user),d=i,p=d.newPicture,b=_e(function(){g()},{email:d.email,about:"",relation:"",city:"",state:"",phone:"",picture:p||d.picture,banner:d.banner}),E=b.onChange,f=b.onSubmit,v=b.values,N=Object(P.a)(K,{update:function(t,a){a.data.update;e.history.push("/members/".concat(d.id))},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:v}),h=Object(u.a)(N,2),g=h[0],O=h[1].loading;var j=l.a.createElement("div",{className:"single-member-card__info"},Object.keys(n).length>0&&l.a.createElement("div",{className:"Error Message error"},l.a.createElement("ul",{className:"Error__list"},Object.values(n).map(function(e){return l.a.createElement("li",{key:e},e)}))),l.a.createElement(be,{onSubmit:f,noValidate:!0,className:O?"Loading register--loading":""},l.a.createElement("p",{className:"update-question"},"How are you connected to the group?"),l.a.createElement("label",{htmlFor:"Relation"}),l.a.createElement("span",{className:"update-pencil"},l.a.createElement(y.a,{icon:["fa","pencil-alt"]})),l.a.createElement("input",{className:"update-answer",placeholder:d.relation,name:"relation",type:"text",value:v.relation,error:n.relation?"true":"false",onChange:E}),l.a.createElement("p",{className:"update-question"},"What are your hobbies, interests, etc?"),l.a.createElement("label",{htmlFor:"About"}),l.a.createElement("span",{className:"update-pencil"},l.a.createElement(y.a,{icon:["fa","pencil-alt"]})),l.a.createElement("input",{className:"update-answer",placeholder:d.about,name:"about",type:"text",value:v.about,error:n.about?"true":"false",onChange:E}),l.a.createElement("p",{className:"update-question"},"Where do you currently live?"),l.a.createElement("div",{className:"update-answer-half__flex-container"},l.a.createElement("div",{className:"update-answer-half"},l.a.createElement("label",{htmlFor:"City"}),l.a.createElement("span",{className:"update-pencil"},l.a.createElement(y.a,{icon:["fa","pencil-alt"]})),l.a.createElement("input",{className:"update-answer",placeholder:d.city,name:"city",type:"text",value:v.city,error:n.city?"true":"false",onChange:E})),l.a.createElement("div",{className:"update-answer-half"},l.a.createElement("label",{htmlFor:"State"}),l.a.createElement("span",{className:"update-pencil"},l.a.createElement(y.a,{icon:["fa","pencil-alt"]})),l.a.createElement("input",{className:"update-answer",placeholder:d.state,name:"state",type:"text",value:v.state,error:n.state?"true":"false",onChange:E}))),l.a.createElement("p",{className:"update-question"},"Contact Info:"),l.a.createElement("label",{htmlFor:"Phone"}),l.a.createElement("span",{className:"update-pencil"},l.a.createElement(y.a,{icon:["fa","pencil-alt"]})),l.a.createElement("input",{className:"update-answer",placeholder:d.phone,name:"phone",type:"text",value:v.phone,error:n.phone?"true":"false",onChange:E}),l.a.createElement("div",{className:"Button--submit update__buttons"},l.a.createElement("button",{className:"update--button",type:"submit"},"Update")),l.a.createElement("div",{className:"Button--submit update__buttons"},l.a.createElement("button",{className:"update--button",type:"cancel",onClick:function(){e.history.replace("/")}},"Cancel")))),k=l.a.createElement(Oe.d,{defaultIndex:0},l.a.createElement(Oe.b,null,l.a.createElement(Oe.a,null,"Update Info")),l.a.createElement(Oe.c,null,j));return l.a.createElement("section",{className:"update-member-main"},l.a.createElement("h2",{className:"update-member__title"},"Update Your Profile"),l.a.createElement("div",{className:"update-member-card__profile-pix"},l.a.createElement("div",{className:"update-member-card__banner"},l.a.createElement("img",{src:d.banner,alt:"member cover"})),l.a.createElement("div",{className:"update-member-card__thumbnail--round"},l.a.createElement("img",{src:d.newPicture||d.picture,alt:"member headshot"}))),l.a.createElement("div",{className:"update-member-card__flex-container"},l.a.createElement("h2",{className:"update-member-card__name"},d.name),k))}a(121),a(122);s.b.add(i.a,i.b,i.c,i.d,i.e,i.f,i.g,i.h,i.i,i.j,i.k,i.l);var Ie=function(){return l.a.createElement("div",null,l.a.createElement(N,null,l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App__sidebar"},l.a.createElement($,null)),l.a.createElement("div",{className:"navigation"},l.a.createElement(x,null)),l.a.createElement("main",{className:"App__main"},l.a.createElement(g,{exact:!0,path:"/",component:ve}),l.a.createElement(g,{exact:!0,path:"/posts",component:ve}),l.a.createElement(g,{exact:!0,path:"/posts/:postId",component:ye}),l.a.createElement(g,{exact:!0,path:"/members",component:ge}),l.a.createElement(g,{exact:!0,path:"/members/:memberId",component:je}),l.a.createElement(g,{exact:!0,path:"/update",component:ke}),l.a.createElement(o.b,{exact:!0,path:"/login",component:Ne}))))))},Ce=a(25),xe=a(67),we=a(69),$e=a(12),Pe=a(66),Se=Object(we.a)({uri:"https://connectivity-braswell.herokuapp.com/"}),Ae=Object(Pe.a)(function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}}),Be=new Ce.c({link:Ae.concat(Se),cache:new xe.a}),De=l.a.createElement($e.a,{client:Be},l.a.createElement(Ie,null));a(123);c.a.render(De,document.getElementById("root"))},70:function(e,t,a){e.exports=a(124)},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.6d40e4b4.chunk.js.map