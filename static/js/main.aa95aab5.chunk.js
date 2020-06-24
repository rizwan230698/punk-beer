(this["webpackJsonppunk-beer"]=this["webpackJsonppunk-beer"]||[]).push([[0],{128:function(e,n,t){e.exports=t(224)},133:function(e,n,t){},224:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(11),i=t.n(c),o=(t(133),t(59)),u=t(10),l=t(79),f=t.n(l),p=t(109),b=t(42),d=t(55),s=t(68),m=t(43),v=t(56),x=t.n(v),g=x.a.create({baseURL:"https://api.punkapi.com/v2/"}),O=a.a.createContext(),h=function(e,n){switch(n.type){case"FETCH_BEERS":return Object(m.a)({},e,{beers:[].concat(Object(s.a)(e.beers),Object(s.a)(n.payload))});case"ADD_TO_FAVOURITE":return Object(m.a)({},e,{favourites:Object(m.a)({},e.favourites,Object(d.a)({},n.payload.id,!0)),favouriteBeers:[].concat(Object(s.a)(e.favouriteBeers),[n.payload])});case"REMOVE_FROM_FAVOURITE":return Object(m.a)({},e,{favourites:Object(m.a)({},e.favourites,Object(d.a)({},n.payload.id,!1)),favouriteBeers:e.favouriteBeers.filter((function(e){return e.id!==n.payload.id}))});case"RESET_BEERS_STATE":return Object(m.a)({},e,{beers:[]});default:return e}},E=function(e){var n=e.children,t=Object(r.useReducer)(h,{favourites:{},beers:[],favouriteBeers:[]}),c=Object(b.a)(t,2),i=c[0],o=c[1],u=Object(r.useState)(!1),l=Object(b.a)(u,2),d=l[0],s=l[1],m=Object(r.useState)(!1),v=Object(b.a)(m,2),x=v[0],E=v[1],j=function(){var e=Object(p.a)(f.a.mark((function e(){var n,t,r=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,s(!0),e.next=4,g.get("/beers?page=".concat(n,"&per_page=20"));case 4:t=e.sent,E(t.data.length>0),o({type:"FETCH_BEERS",payload:t.data}),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(O.Provider,{value:{state:i,loading:d,hasMore:x,setHasMore:E,setLoading:s,fetchBeers:j,addToFavourite:function(e){o({type:"ADD_TO_FAVOURITE",payload:e})},removeFromFavourite:function(e){o({type:"REMOVE_FROM_FAVOURITE",payload:e})},fetchBeersByName:function(e){o({type:"FETCH_BEERS",payload:e}),s(!1)},resetBeersState:function(){return o({type:"RESET_BEERS_STATE"})}}},n)},j=t(52),y=t(31),w=t(227),k=t(4),B=t(7);function R(){var e=Object(k.a)(["\n  padding: 80px 0px;\n  padding-top:",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return R=function(){return e},e}var T=B.b.div(R(),(function(e){var n=e.pt;return n?"".concat(n,"px"):"80px"})),_=function(e){var n=e.size,t=e.pt;return a.a.createElement(T,{pt:t},a.a.createElement(w.a,{size:n}))},C=t(231),F=t(232),S=t(228);function z(){var e=Object(k.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return z=function(){return e},e}var A={smalldevice:320,mobile:576,tablet:768,desktop:992,laptop:1200},I=Object.keys(A).reduce((function(e,n){return e[n]=function(){return Object(B.a)(z(),A[n]/16,B.a.apply(void 0,arguments))},e}),{});function M(){var e=Object(k.a)(["\n  font-size: 16px;\n  font-weight: 400;\n"]);return M=function(){return e},e}function H(){var e=Object(k.a)(["\n  font-size: 14.5px;\n  font-weight: 500;\n  margin-bottom: 8px;\n"]);return H=function(){return e},e}function V(){var e=Object(k.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return V=function(){return e},e}function U(){var e=Object(k.a)(["\n  height: 240px;\n  width: 100px;\n"]);return U=function(){return e},e}function D(){var e=Object(k.a)(["\n  padding-right: 24px;\n  padding-bottom: 0px;\n  "]);return D=function(){return e},e}function L(){var e=Object(k.a)(["\n  padding-right: 24px;\n  padding-bottom: 0px;\n  "]);return L=function(){return e},e}function N(){var e=Object(k.a)(["\n  flex: 0 0 35%;\n  padding-right: 24px;\n\n  @media (max-width: 1070px) {\n    padding-right: 0px;\n    padding-bottom: 24px;\n  }\n\n  ","\n\n  @media (max-width: 740px) {\n    padding-right: 0px;\n    padding-bottom: 24px;\n  }\n\n  ","\n"]);return N=function(){return e},e}function J(){var e=Object(k.a)(["\n    flex-direction: row;\n      align-items: unset;\n    "]);return J=function(){return e},e}function P(){var e=Object(k.a)(["\n    flex-direction: row;\n      align-items: unset;\n    "]);return P=function(){return e},e}function q(){var e=Object(k.a)(["\n  position: relative;\n  height: 100%;\n  & > .ant-card-body {\n    display: flex;\n    padding-top: 34px;\n\n    @media (max-width: 1070px) {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    ","\n\n    @media (max-width: 740px) {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    ","\n\n    & > span {\n      position: absolute;\n      right: 14px;\n      top: 4px;\n      font-size: 16px;\n      color: #00d1b2;\n      cursor: pointer;\n      padding: 10px;\n    }\n  }\n"]);return q=function(){return e},e}var G=Object(B.b)(S.a)(q(),I.desktop(P()),I.mobile(J())),K=B.b.div(N(),I.desktop(L()),I.mobile(D())),Q=B.b.img(U()),W=B.b.div(V()),X=B.b.h3(H()),Y=B.b.p(M()),Z=t(122),$=a.a.forwardRef((function(e,n){var t=e.beer,c=t.id,i=t.name,o=t.description,u=t.image_url,l=Object(r.useContext)(O),f=l.state.favourites,p=l.addToFavourite,b=l.removeFromFavourite;return a.a.createElement(G,{hoverable:!0},a.a.createElement(K,{ref:n},a.a.createElement(Q,{src:u,alt:i})),a.a.createElement(W,null,a.a.createElement(X,null,i),a.a.createElement(Y,null,function(e){var n,t=e.split(" "),r="",a=Object(Z.a)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(r.length+c.length>=150)return"".concat(r.trim(),"...");r+=" ".concat(c)}}catch(i){a.e(i)}finally{a.f()}return r.trim()}(o))),f[c]?a.a.createElement(F.a,{onClick:function(){return b(t)}}):a.a.createElement(C.a,{onClick:function(){return p(t)}}))})),ee=t(229);function ne(){var e=Object(k.a)(["\n  flex: 0 0 100%\n  "]);return ne=function(){return e},e}function te(){var e=Object(k.a)(["\n  flex : 0 0 75%\n  "]);return te=function(){return e},e}function re(){var e=Object(k.a)(["\n  flex : 0 0 70%\n  "]);return re=function(){return e},e}function ae(){var e=Object(k.a)(["\n  flex: 0 0 60%;\n  \n  &:focus,&:hover{\n    border-color: #00d1b2;\n  }\n  &:focus{\n    box-shadow: 0 0 0 2px rgba(0, 209, 178,.2);\n  }\n  \n  \n  }\n\n  ","\n\n  ","\n\n  ","\n"]);return ae=function(){return e},e}function ce(){var e=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n"]);return ce=function(){return e},e}var ie=B.b.div(ce()),oe=Object(B.b)(ee.a)(ae(),I.desktop(re()),I.tablet(te()),I.mobile(ne())),ue=function(e){var n=e.handleInputChange,t=e.value;return a.a.createElement(ie,null,a.a.createElement(oe,{placeholder:"Search beer by name",onChange:n,value:t}))};function le(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return le=function(){return e},e}var fe=B.b.div(le()),pe=function(){var e=Object(r.useState)(""),n=Object(b.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(1),o=Object(b.a)(i,2),u=o[0],l=o[1],f=Object(r.useContext)(O),p=f.state,d=f.loading,s=f.hasMore,m=f.setHasMore,v=f.setLoading,h=f.fetchBeers,E=f.fetchBeersByName,w=f.resetBeersState,k=Object(r.useRef)(),B=Object(r.useCallback)((function(e){d||(k.current&&k.current.disconnect(),k.current=new IntersectionObserver((function(e){e[0].isIntersecting&&s&&l((function(e){return e+1}))})),e&&k.current.observe(e))}),[d]);return Object(r.useEffect)((function(){""===t&&h(u)}),[t,u]),Object(r.useEffect)((function(){var e;""!==t&&(v(!0),g.get("/beers?page=".concat(u,"&per_page=20&beer_name=").concat(t),{cancelToken:new x.a.CancelToken((function(n){return e=n}))}).then((function(e){m(e.data.length>0),E(e.data)})).catch((function(e){x.a.isCancel(e)})));return function(){return e&&e()}}),[t,u]),Object(r.useEffect)((function(){w()}),[t]),a.a.createElement(fe,null,a.a.createElement(ue,{handleInputChange:function(e){c(e.target.value),l(1)},value:t}),0!==p.beers.length?a.a.createElement(j.a,{gutter:[16,16],type:"flex"},p.beers.map((function(e,n){return a.a.createElement(y.a,{lg:8,md:12,sm:12,xs:24,key:e.id},p.beers.length===n+1?a.a.createElement($,{beer:e,ref:B}):a.a.createElement($,{beer:e}))}))):a.a.createElement(_,{size:"large"}),d&&0!==p.beers.length&&a.a.createElement(_,{size:"large",pt:15}))},be=t(51);function de(){var e=Object(k.a)(["\n  height: calc(100vh - 204px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return de=function(){return e},e}var se=B.b.div(de()),me=function(){return a.a.createElement(se,null,a.a.createElement(be.a,{description:"No favourite beer found."}))},ve=function(){var e=Object(r.useContext)(O).state.favouriteBeers;return 0===e.length?a.a.createElement(me,null):a.a.createElement(j.a,{gutter:[16,16]},e.map((function(e){return a.a.createElement(y.a,{lg:8,md:12,sm:12,xs:24,key:e.id},a.a.createElement($,{beer:e}))})))},xe=t(230);function ge(){var e=Object(k.a)(["\n  background-color: #fff;\n"]);return ge=function(){return e},e}function Oe(){var e=Object(k.a)(["\n  padding: 24px;\n  "]);return Oe=function(){return e},e}function he(){var e=Object(k.a)(["\n  background-color: #fff;\n  min-height: calc(100vh - 139px);\n  padding: 24px 50px;\n\n  @media (max-width: 1100px) {\n    padding: 24px 30px;\n    min-height: calc(100vh - 156px);\n  }\n\n  ","\n"]);return he=function(){return e},e}function Ee(){var e=Object(k.a)(["\n  padding: 0 5px;\n  "]);return Ee=function(){return e},e}function je(){var e=Object(k.a)(["\n  padding: 0 10px;\n\n  ","\n"]);return je=function(){return e},e}function ye(){var e=Object(k.a)(["\n  font-size: 20px;\n  font-weight: 500;\n  "]);return ye=function(){return e},e}function we(){var e=Object(k.a)(["\n  margin-right: auto;\n  margin-bottom: 0;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 300;\n\n  ","\n"]);return we=function(){return e},e}function ke(){var e=Object(k.a)(["\n  padding: 10px 24px;\n  "]);return ke=function(){return e},e}function Be(){var e=Object(k.a)(["\n  background-color: #00d1b2;\n  padding: 10px 50px;\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 1100px) {\n    padding: 10px 30px;\n  }\n\n  ","\n"]);return Be=function(){return e},e}var Re=xe.a.Header,Te=xe.a.Content,_e=xe.a.Footer,Ce=Object(B.b)(Re)(Be(),I.mobile(ke())),Fe=Object(B.b)(o.b)(we(),I.mobile(ye())),Se=Object(B.b)(o.b)(je(),I.mobile(Ee())),ze=Object(B.b)(Te)(he(),I.mobile(Oe())),Ae=Object(B.b)(_e)(ge()),Ie=function(e){var n=e.children;return a.a.createElement(xe.a,null,a.a.createElement(Ce,null,a.a.createElement(Fe,{to:"/"},"Beans Love Beers"),a.a.createElement(Se,{to:"/"},"Home"),a.a.createElement(Se,{to:"/favourite"},"Favourite")),a.a.createElement(ze,null,n),a.a.createElement(Ae,{style:{textAlign:"center"}},"Punk Beer \xa92020 Created by Rizwan Anwar"))},Me=function(){return a.a.createElement(E,null,a.a.createElement(o.a,{basename:"".concat("/punk-beer","/")},a.a.createElement(Ie,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:pe}),a.a.createElement(u.a,{exact:!0,path:"/favourite",component:ve})))))};i.a.render(a.a.createElement(Me,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.aa95aab5.chunk.js.map