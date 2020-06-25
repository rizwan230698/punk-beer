(this["webpackJsonppunk-beer"]=this["webpackJsonppunk-beer"]||[]).push([[0],{175:function(e,n,t){e.exports=t.p+"static/media/logo.7eeef0ca.jpg"},180:function(e,n,t){e.exports=t.p+"static/media/beer.ecd70c19.png"},184:function(e,n,t){e.exports=t(307)},189:function(e,n,t){},307:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(6),o=t.n(c),i=(t(189),t(67)),u=t(18),l=t(121),f=t.n(l),s=t(160),p=t(42),b=t(79),d=t(100),m=t(56),g=t(80),v=t.n(g),x=v.a.create({baseURL:"https://api.punkapi.com/v2/"}),h=a.a.createContext(),O=function(e,n){switch(n.type){case"FETCH_BEERS":return Object(m.a)({},e,{beers:[].concat(Object(d.a)(e.beers),Object(d.a)(n.payload))});case"ADD_TO_FAVOURITE":return Object(m.a)({},e,{favourites:Object(m.a)({},e.favourites,Object(b.a)({},n.payload.id,!0)),favouriteBeers:[].concat(Object(d.a)(e.favouriteBeers),[n.payload])});case"REMOVE_FROM_FAVOURITE":return Object(m.a)({},e,{favourites:Object(m.a)({},e.favourites,Object(b.a)({},n.payload.id,!1)),favouriteBeers:e.favouriteBeers.filter((function(e){return e.id!==n.payload.id}))});case"RESET_BEERS_STATE":return Object(m.a)({},e,{beers:[]});default:return e}},j=function(e){var n=e.children,t=Object(r.useReducer)(O,{favourites:{},beers:[],favouriteBeers:[]}),c=Object(p.a)(t,2),o=c[0],i=c[1],u=Object(r.useState)(!1),l=Object(p.a)(u,2),b=l[0],d=l[1],m=Object(r.useState)(!1),g=Object(p.a)(m,2),v=g[0],j=g[1],E=Object(r.useCallback)(Object(s.a)(f.a.mark((function e(){var n,t,r=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,d(!0),e.next=4,x.get("/beers?page=".concat(n,"&per_page=15"));case 4:t=e.sent,j(t.data.length>0),i({type:"FETCH_BEERS",payload:t.data}),d(!1);case 8:case"end":return e.stop()}}),e)}))),[]),y=Object(r.useCallback)((function(e){i({type:"FETCH_BEERS",payload:e}),d(!1)}),[]),k=Object(r.useCallback)((function(){return i({type:"RESET_BEERS_STATE"})}),[]);return a.a.createElement(h.Provider,{value:{state:o,loading:b,hasMore:v,setHasMore:j,setLoading:d,fetchBeers:E,addToFavourite:function(e){i({type:"ADD_TO_FAVOURITE",payload:e})},removeFromFavourite:function(e){i({type:"REMOVE_FROM_FAVOURITE",payload:e})},fetchBeersByName:y,resetBeersState:k}},n)},E=t(315),y=t(71),k=t.n(y);t(209);k.a.initializeApp({apiKey:"AIzaSyBnXAaOYioD2t-3hx9LfRZWlyPdRfj5LBI",authDomain:"punk-beer-d4df8.firebaseapp.com",databaseURL:"https://punk-beer-d4df8.firebaseio.com",projectId:"punk-beer-d4df8",storageBucket:"punk-beer-d4df8.appspot.com",messagingSenderId:"1037812390279",appId:"1:1037812390279:web:b078132ec9c8e4fa67db22",measurementId:"G-5E8EWS5F94"});var w=k.a.auth(),C=new k.a.auth.GoogleAuthProvider;C.setCustomParameters({prompt:"select_account"});var S=function(){return k.a.auth().signInWithPopup(C)},B=(k.a,a.a.createContext()),R=function(e){var n=e.children,t=Object(r.useState)(JSON.parse(localStorage.getItem("user"))),c=Object(p.a)(t,2),o=c[0],i=c[1],u=Object(r.useCallback)((function(e){localStorage.setItem("user",JSON.stringify(e)),i(e),E.a.info("Welcome ".concat(e.displayName))}),[]);return a.a.createElement(B.Provider,{value:{currentUser:o,setUser:u,removeUser:function(){localStorage.removeItem("user"),w.signOut()}}},n)},T=t(73),_=t(35),I=t(310),F=t(4),z=t(8);function A(){var e=Object(F.a)(["\n  padding: 80px 0px;\n  padding-top:",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return A=function(){return e},e}var U=z.b.div(A(),(function(e){var n=e.pt;return n?"".concat(n,"px"):"80px"})),D=function(e){var n=e.size,t=e.pt;return a.a.createElement(U,{pt:t},a.a.createElement(I.a,{size:n}))},L=t(314),M=t(317),P=t(318),H=t(311);function N(){var e=Object(F.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return N=function(){return e},e}var V={smalldevice:320,mobile:576,tablet:768,desktop:992,laptop:1200},J=Object.keys(V).reduce((function(e,n){return e[n]=function(){return Object(z.a)(N(),V[n]/16,z.a.apply(void 0,arguments))},e}),{});function W(){var e=Object(F.a)(["\n  font-size: 16px;\n  font-weight: 400;\n"]);return W=function(){return e},e}function G(){var e=Object(F.a)(["\n  font-size: 14.5px;\n  font-weight: 500;\n  margin-bottom: 8px;\n"]);return G=function(){return e},e}function K(){var e=Object(F.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  user-select: none;\n"]);return K=function(){return e},e}function X(){var e=Object(F.a)(["\n  height: 240px;\n  width: 100px;\n"]);return X=function(){return e},e}function Y(){var e=Object(F.a)(["\n  padding-right: 24px;\n  padding-bottom: 0px;\n  "]);return Y=function(){return e},e}function Z(){var e=Object(F.a)(["\n  padding-right: 24px;\n  padding-bottom: 0px;\n  "]);return Z=function(){return e},e}function q(){var e=Object(F.a)(["\n  flex: 0 0 35%;\n  padding-right: 24px;\n\n  @media (max-width: 1070px) {\n    padding-right: 0px;\n    padding-bottom: 24px;\n  }\n\n  ","\n\n  @media (max-width: 740px) {\n    padding-right: 0px;\n    padding-bottom: 24px;\n  }\n\n  ","\n"]);return q=function(){return e},e}function Q(){var e=Object(F.a)(["\n    flex-direction: row;\n      align-items: unset;\n    "]);return Q=function(){return e},e}function $(){var e=Object(F.a)(["\n    flex-direction: row;\n      align-items: unset;\n    "]);return $=function(){return e},e}function ee(){var e=Object(F.a)(["\n  position: relative;\n  height: 100%;\n  & > .ant-card-body {\n    display: flex;\n    padding-top: 34px;\n\n    @media (max-width: 1070px) {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    ","\n\n    @media (max-width: 740px) {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    ","\n\n    & > span {\n      position: absolute;\n      right: 14px;\n      top: 4px;\n      font-size: 16px;\n      color: #00d1b2;\n      cursor: pointer;\n      padding: 10px;\n    }\n  }\n"]);return ee=function(){return e},e}var ne=Object(z.b)(H.a)(ee(),J.desktop($()),J.mobile(Q())),te=z.b.div(q(),J.desktop(Z()),J.mobile(Y())),re=z.b.img(X()),ae=z.b.div(K()),ce=z.b.h3(G()),oe=z.b.p(W()),ie=t(172),ue=a.a.forwardRef((function(e,n){var t=e.beer,c=t.id,o=t.name,i=t.description,u=t.image_url,l=t.tagline,f=Object(r.useContext)(h),s=f.state.favourites,p=f.addToFavourite,b=f.removeFromFavourite;return a.a.createElement(L.a,{title:l,placement:"bottom",color:"#0D0D0D"},a.a.createElement(ne,{hoverable:!0},a.a.createElement(te,{ref:n},a.a.createElement(re,{src:u,alt:o})),a.a.createElement(ae,null,a.a.createElement(ce,null,o),a.a.createElement(oe,null,function(e){var n,t=e.split(" "),r="",a=Object(ie.a)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(r.length+c.length>=150)return"".concat(r.trim(),"...");r+=" ".concat(c)}}catch(o){a.e(o)}finally{a.f()}return r.trim()}(i))),s[c]?a.a.createElement(P.a,{onClick:function(){return b(t)}}):a.a.createElement(M.a,{onClick:function(){return p(t)}})))})),le=t(313);function fe(){var e=Object(F.a)(["\n  flex: 0 0 100%\n  "]);return fe=function(){return e},e}function se(){var e=Object(F.a)(["\n  flex : 0 0 75%\n  "]);return se=function(){return e},e}function pe(){var e=Object(F.a)(["\n  flex : 0 0 70%\n  "]);return pe=function(){return e},e}function be(){var e=Object(F.a)(["\n  flex: 0 0 60%;\n  \n  &:focus,&:hover{\n    border-color: #00d1b2;\n  }\n  &:focus{\n    box-shadow: 0 0 0 2px rgba(0, 209, 178,.2);\n  }\n  \n  \n  }\n\n  ","\n\n  ","\n\n  ","\n"]);return be=function(){return e},e}function de(){var e=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n"]);return de=function(){return e},e}var me=z.b.div(de()),ge=Object(z.b)(le.a)(be(),J.desktop(pe()),J.tablet(se()),J.mobile(fe())),ve=function(e){var n=e.handleInputChange,t=e.value;return a.a.createElement(me,null,a.a.createElement(ge,{placeholder:"Search beer by name",onChange:n,value:t}))};function xe(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return xe=function(){return e},e}var he=z.b.div(xe()),Oe=t(312),je=t(175),Ee=t.n(je);function ye(){var e=Object(F.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 40px;\n  letter-spacing: 0.5px;\n  line-height: 40px;\n  padding: 0 30px;\n  font-size: 15px;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bolder;\n  border: none;\n  display: flex;\n  justify-content: center;\n  background-color: #4285f4;\n  color: white;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #3571e8;\n    border: none;\n  }\n  &:focus {\n    border: none;\n    outline: none;\n  }\n"]);return ye=function(){return e},e}function ke(){var e=Object(F.a)(["\n  height: 100px;\n  width: 100px;\n  -weblit-shape-outside: circle(50% at 50% 50%);\n  shape-outside: circle(50% at 50% 50%);\n"]);return ke=function(){return e},e}function we(){var e=Object(F.a)(["\n  font-size: 34px;\n  color: #09c3ff;\n  margin-bottom: 0;\n  font-family: 'Dancing Script', cursive;\n  padding: 0 10px;\n"]);return we=function(){return e},e}function Ce(){var e=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Se=function(){return e},e}var Be=z.b.div(Se()),Re=z.b.div(Ce()),Te=z.b.h1(we()),_e=z.b.img(ke()),Ie=z.b.button(ye()),Fe=function(){var e=Object(r.useContext)(B).currentUser;return a.a.createElement(Oe.a,{visible:!e,closable:!1,footer:null},a.a.createElement(Be,null,a.a.createElement(Re,null,a.a.createElement(_e,{src:Ee.a}),a.a.createElement(Te,null,"Punk Beer")),a.a.createElement(Ie,{onClick:S},"Sign in with Google")))},ze=function(){var e=Object(r.useState)(""),n=Object(p.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(1),i=Object(p.a)(o,2),u=i[0],l=i[1],f=Object(r.useContext)(h),s=f.state,b=f.loading,d=f.hasMore,m=f.setHasMore,g=f.setLoading,O=f.fetchBeers,j=f.fetchBeersByName,E=f.resetBeersState,y=Object(r.useContext)(B).setUser,k=Object(r.useRef)(),C=Object(r.useCallback)((function(e){b||(k.current&&k.current.disconnect(),k.current=new IntersectionObserver((function(e){e[0].isIntersecting&&d&&l((function(e){return e+1}))})),e&&k.current.observe(e))}),[b,d]);return Object(r.useEffect)((function(){""===t&&O(u)}),[t,u,O]),Object(r.useEffect)((function(){var e;""!==t&&(g(!0),x.get("/beers?page=".concat(u,"&per_page=10&beer_name=").concat(t),{cancelToken:new v.a.CancelToken((function(n){return e=n}))}).then((function(e){m(e.data.length>0),j(e.data)})).catch((function(e){v.a.isCancel(e)})));return function(){return e&&e()}}),[t,u,g,m,j]),Object(r.useEffect)((function(){E()}),[t,E]),Object(r.useEffect)((function(){w.onAuthStateChanged((function(e){return y(e)}))}),[y]),a.a.createElement(he,null,a.a.createElement(ve,{handleInputChange:function(e){c(e.target.value),l(1)},value:t}),0!==s.beers.length?a.a.createElement(T.a,{gutter:[16,16],type:"flex"},s.beers.map((function(e,n){return a.a.createElement(_.a,{lg:8,md:12,sm:12,xs:24,key:e.id},s.beers.length===n+1?a.a.createElement(ue,{beer:e,ref:C}):a.a.createElement(ue,{beer:e}))}))):a.a.createElement(D,{size:"large"}),b&&0!==s.beers.length&&a.a.createElement(D,{size:"large",pt:15}),a.a.createElement(Fe,null))},Ae=t(72),Ue=t(180),De=t.n(Ue);function Le(){var e=Object(F.a)(["\n  height: calc(100vh - 204px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Le=function(){return e},e}var Me=z.b.div(Le()),Pe=function(){return a.a.createElement(Me,null,a.a.createElement(Ae.a,{description:"No favourite beer found.",image:De.a}))},He=function(){var e=Object(r.useContext)(h).state.favouriteBeers;return 0===e.length?a.a.createElement(Pe,null):a.a.createElement(T.a,{gutter:[16,16]},e.map((function(e){return a.a.createElement(_.a,{lg:8,md:12,sm:12,xs:24,key:e.id},a.a.createElement(ue,{beer:e}))})))},Ne=t(316);function Ve(){var e=Object(F.a)(["\n  background-color: #fff;\n"]);return Ve=function(){return e},e}function Je(){var e=Object(F.a)(["\n  padding: 24px;\n  "]);return Je=function(){return e},e}function We(){var e=Object(F.a)(["\n  background-color: #fff;\n  min-height: calc(100vh - 139px);\n  padding: 24px 50px;\n  z-index: 1;\n\n  @media (max-width: 1100px) {\n    padding: 24px 30px;\n    min-height: calc(100vh - 156px);\n  }\n\n  ","\n"]);return We=function(){return e},e}function Ge(){var e=Object(F.a)(["\n  padding: 0 4px;\n  "]);return Ge=function(){return e},e}function Ke(){var e=Object(F.a)(["\n  padding: 0 10px;\n  cursor: pointer;\n\n  ","\n"]);return Ke=function(){return e},e}function Xe(){var e=Object(F.a)(["\n  font-size: 20px;\n  font-family: 'Dancing Script', cursive;\n  font-weight: 500;\n  "]);return Xe=function(){return e},e}function Ye(){var e=Object(F.a)(["\n  margin-right: auto;\n  margin-bottom: 0;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 300;\n\n  ","\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(F.a)(["\n  padding: 10px 24px;\n  "]);return Ze=function(){return e},e}function qe(){var e=Object(F.a)(["\n  position: sticky;\n  top: 0;\n  "]);return qe=function(){return e},e}function Qe(){var e=Object(F.a)(["\n  background-color: #00d1b2;\n  padding: 10px 50px;\n  display: flex;\n  align-items: center;\n  color: white;\n  z-index: 10;\n\n  @media (max-width: 1100px) {\n    padding: 10px 30px;\n  }\n\n  ","\n\n  ","\n"]);return Qe=function(){return e},e}var $e=Ne.a.Header,en=Ne.a.Content,nn=Ne.a.Footer,tn=Object(z.b)($e)(Qe(),J.tablet(qe()),J.mobile(Ze())),rn=Object(z.b)(i.b)(Ye(),J.mobile(Xe())),an=Object(z.b)(i.b)(Ke(),J.mobile(Ge())),cn=Object(z.b)(en)(We(),J.mobile(Je())),on=Object(z.b)(nn)(Ve()),un=Object(u.g)((function(e){var n=e.children,t=e.history,c=Object(r.useContext)(B),o=c.currentUser,i=c.removeUser;return a.a.createElement(Ne.a,null,a.a.createElement(tn,null,a.a.createElement(rn,{to:"/"},"Beans Love Beers"),a.a.createElement(an,{to:"/"},"Home"),a.a.createElement(an,{as:"div",onClick:function(){t.push("/favourite"),window.scrollTo(0,0)}},"Favourite"),o&&a.a.createElement(an,{as:"div",onClick:i},"Logout")),a.a.createElement(cn,null,n),a.a.createElement(on,{style:{textAlign:"center"}},"Punk Beer \xa92020 Created by Rizwan Anwar"))})),ln=function(){var e=Object(r.useContext)(B).currentUser;return a.a.createElement(j,null,a.a.createElement(i.a,{basename:"".concat("/punk-beer","/")},a.a.createElement(un,null,a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/",component:ze}),a.a.createElement(u.b,{exact:!0,path:"/favourite",render:function(){return e?a.a.createElement(He,null):a.a.createElement(u.a,{to:"/"})}})))))},fn=function(){return a.a.createElement(R,null,a.a.createElement(ln,null))};o.a.render(a.a.createElement(fn,null),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.9d21a426.chunk.js.map