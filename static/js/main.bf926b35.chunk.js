(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){"use strict";var n=a(19),r=a(12),o=a(0),c=a.n(o),i=a(72),l=a(253),s=a(26),d=function(){var e=Object(o.useContext)(s.b).preparedGoods;return c.a.createElement(l.a,{container:!0,spacing:2},e.map(function(e){return c.a.createElement(i.a,Object.assign({key:e.id},e))}))},m=a(251),u=a(278),p=a(139),y=a.n(p),b=a(25),E=function(e){var t=e.value,a=e.onChange,n=Object(b.b)("Service").Search;return c.a.createElement(m.a,{id:"outlined-search",label:n,type:"search",variant:"standard",fullWidth:!0,sx:{mb:"1rem"},value:t,onChange:a,InputProps:{readOnly:!1,startAdornment:c.a.createElement(u.a,{position:"start"},c.a.createElement(y.a,null))}})},g=a(75),f=a(280),h=a(281),v=a(282),D=a(283),O=a(266),A=a(237),k=a(239),C=a(256),S=a(8),j=a(279),B=Object(S.a)(j.a)(function(e){var t=e.theme;return{width:61,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{content:"'UA'",position:"absolute",width:"100%",height:"100%",left:5,top:5},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#CB1D44",width:32,height:32,"&:before":{content:"'EN'",position:"absolute",width:"100%",height:"100%",left:5,top:5}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}),T=a(42),R=a(32),x=function(e){var t=e.openCart,a=Object(o.useContext)(s.b),n=a.language,r=a.setLanguage,i=a.order,l=Object(o.useContext)(s.a)||function(){},d=Object(b.b)("Description").FootballBadges,m=Object(b.b)("Message"),u=m.ChangeLanguage,p=m.GoodsInBasket,y=Object(T.a)(f.a),E=Object(T.a)(h.a);return c.a.createElement(v.a,{position:"sticky"},c.a.createElement(D.a,null,c.a.createElement(h.a,{color:"inherit",sx:{cursor:"initial"}},c.a.createElement(A.a,null)),c.a.createElement(O.a,{variant:"h6",component:"span",sx:{flexGrow:1}},d),c.a.createElement(y,{title:u,control:c.a.createElement(B,{sx:{m:1}}),checked:"ua"===n,onChange:function(e){var t=e.target.checked?"ua":"en";l({type:R.a.UPDATE_LANGUAGE,payload:t}),r(t),Object(b.a)(t)}}),c.a.createElement(E,{title:p,placement:"bottom-start",color:"inherit",onClick:t},c.a.createElement(C.a,{badgeContent:i.length,color:"secondary"},c.a.createElement(k.a,null)))))},_=a(285),P=a(286),N=a(241),K=a(258),w=a(277),G=a(252),L=a(284),M=a(257),F=a(240),I=a(242),W=a(212),H=a(143),X=a.n(H),U=function(e){var t=e.name,a=e.price,n=e.id,r=e.quantity,i=e.poster,l=Object(o.useContext)(s.b),d=l.order,m=l.setOrder,u=Object(o.useContext)(s.a)||function(){},p=Object(b.b)("Service").Hryvna,y=Object(b.b)("Message"),E=y.DeletedFromBasket,g=y.DeleteFromBasket,f=Object(T.a)(h.a);return c.a.createElement(G.a,null,c.a.createElement(L.a,null,c.a.createElement(M.a,{alt:t,src:i})),c.a.createElement(F.a,{primary:t,secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"},a," ",p," x ",r," "," = "),c.a.createElement(O.a,{variant:"body2",component:"span",fontWeight:"700"},a*r," ","\u20b4")),sx:{pr:1}}),c.a.createElement(f,{title:g,transitionComponent:W.a,placement:"bottom-start",enterDelay:500,leaveDelay:0,arrow:!0,onClick:function(){var e;e=n,m(d.filter(function(t){return t.id!==e})),u({type:R.a.ADD_TO_ORDER,payload:d.filter(function(t){return t.id!==e})}),u({type:R.a.OPEN_SNACKBAR,payload:!0}),u({type:R.a.SNACKBAR_TEXT,payload:E}),u({type:R.a.SNACKBAR_SEVERITY,payload:"warning"})},ariaLabel:"delete"},c.a.createElement(X.a,null)))},q=a(146),z=a.n(q),J=a(145),Y=a.n(J),V=function(e){var t=e.isOpened,a=e.closeCart,n=Object(o.useContext)(s.b).order,r=void 0===n?[]:n,i=Object(b.b)("Service"),l=i.Basket,d=i.TotalPrice,m=i.AddedGoods,u=Object(b.b)("Message"),p=u.BasketIsEmpty,y=u.CloseBasket,E=Object(T.a)(N.a);return c.a.createElement(K.a,{anchor:"right",open:t,onClose:a},c.a.createElement(w.a,{sx:{width:"400px",maxWidth:"75vw"}},c.a.createElement(G.a,null,c.a.createElement(N.a,null,c.a.createElement(L.a,null,c.a.createElement(M.a,null,c.a.createElement(Y.a,null)))),c.a.createElement(F.a,{primary:c.a.createElement(O.a,{fontWeight:"500"},l),secondary:m}),c.a.createElement(E,{onClick:a,title:y,placement:"bottom-start"},c.a.createElement(h.a,null,c.a.createElement(z.a,null)))),c.a.createElement(I.a,{variant:"fullWidth"}),r.length?c.a.createElement(c.a.Fragment,null,r.map(function(e,t){return c.a.createElement(c.a.Fragment,{key:t},t>0&&c.a.createElement(I.a,{variant:"inset",component:"li"}),c.a.createElement(U,e))}),c.a.createElement(I.a,{variant:"fullWidth"}),c.a.createElement(G.a,{sx:{my:2}},c.a.createElement(O.a,{sx:{fontWeight:"700"}},d,":"," ",r.reduce(function(e,t){return e+t.price*t.quantity},0)," ","\u20b4","."))):c.a.createElement(G.a,null,p)))},Q=a(247),Z=a(248),$=function(){var e=Object(o.useContext)(s.b),t=e.isOpenSnackbar,a=e.snackBarText,n=e.snackSeverity,r=Object(o.useContext)(s.a)||function(){},i=Object(b.b)("Service").Buy,l=function(e){e&&e.target.textContent===i||r({type:R.a.OPEN_SNACKBAR,payload:!1})};return c.a.createElement(Q.a,{open:t,autoHideDuration:3e3,onClose:l},c.a.createElement(Z.a,{variant:"filled",severity:n,onClose:l,sx:{width:"100%"}},a))};t.a=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(o.useState)(!1),m=Object(r.a)(l,2),u=m[0],p=m[1],y=Object(o.useContext)(s.b),f=y.language,h=y.translatedGoods,v=Object(o.useContext)(s.a)||function(){};Object(o.useEffect)(function(){var e=Object(b.b)("Description"),t=Object.keys(e),a=g.a.map(function(a,r){return Object(n.a)({},a,{name:e[t[r+1]]})});v({type:"SET_PREPARED",payload:a}),v({type:"SET_TRANSLATED",payload:a})},[f]);return c.a.createElement("div",{className:"App"},c.a.createElement(_.a,{sx:{minWidth:"340px"}},c.a.createElement(x,{openCart:function(){return p(!0)}}),c.a.createElement(P.a,{sx:{mt:"1rem",minWidth:"340px"}},c.a.createElement(E,{value:a,onChange:function(e){if(!e.target.value)return v({type:"SET_PREPARED",payload:h}),void i("");i(e.target.value),v({type:"SET_PREPARED",payload:h.filter(function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})})}}),c.a.createElement(d,null)),c.a.createElement(V,{isOpened:u,closeCart:function(){return p(!1)}}),c.a.createElement($,null)))}},122:function(e,t,a){e.exports=a(158)},129:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(109),c=a.n(o),i=(a(129),a(108)),l=a(150),s=a(246),d=a(94),m=a(12),u=r.a.lazy(function(){return Promise.all([a.e(3),a.e(1)]).then(a.bind(null,261))}),p=a(26),y=Object(l.a)({palette:{primary:{main:"#001D42"},secondary:{main:"#ff7f50"}}});c.a.createRoot(document.getElementById("root")).render(r.a.createElement(s.a,{theme:y},r.a.createElement(d.d,{ComponentPreviews:u,useInitialHook:function(){var e=Object(n.useState)({loading:!1,error:!1}),t=Object(m.a)(e,2),a=t[0];t[1];return a}},r.a.createElement(p.c,null,r.a.createElement(i.a,null)))))},25:function(e,t,a){"use strict";var n={Description:{FootballBadges:"\u0424\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u0456 \u0437\u043d\u0430\u0447\u043a\u0438",HunterTompson:"\u0425\u0430\u043d\u0442\u0435\u0440 \u0422\u043e\u043c\u043f\u0441\u043e\u043d \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u0414\u0438\u043d\u0430\u043c\u043e",ACAB:"\u0410\u041a\u0410\u0411. \u0421\u0442\u0438\u043b\u044c \u041f\u0435\u043f\u0441\u0456",DonaldDuck:"\u041a\u0430\u0447\u043a\u0430 \u0414\u043e\u043d\u0430\u043b\u044c\u0434 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u043a\u0438\u044f\u043d",DynamoKit:"\u0406\u0433\u0440\u043e\u0432\u0430 \u0444\u043e\u0440\u043c\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",Lazio:"\u041b\u0430\u0446\u0456\u043e \u0420\u0438\u043c",DynamoRhomb:"\u0420\u043e\u043c\u0431 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",PearlOfFootball:"\u0414\u0438\u043d\u0430\u043c\u043e, \u0436\u0435\u043c\u0447\u0443\u0436\u0438\u043d\u0430 \u0444\u0443\u0442\u0431\u043e\u043b\u0430",CasualDynamo:"\u041a\u0435\u0448\u0443\u0430\u043b\u0441 \u0424\u041a\u0414\u041a",RealMadrid:"\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u044f \u0437\u043d\u0430\u0447\u043a\u0456\u0432 \u0420\u0435\u0430\u043b \u041c\u0430\u0434\u0440\u0438\u0434",ModernDynamoKit:"\u0421\u0443\u0447\u0430\u0441\u043d\u0430 \u0456\u0433\u0440\u043e\u0432\u0430 \u0444\u043e\u0440\u043c\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",DynamoDisk:"\u0428\u0430\u0439\u0431\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",Sportcomitet:"\u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432. \u0421\u043f\u043e\u0440\u0442\u043a\u043e\u043c\u0456\u0442\u0435\u0442"},Service:{Basket:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Search:"\u041f\u043e\u0448\u0443\u043a",Price:"\u0426\u0456\u043d\u0430",Buy:"\u041a\u0443\u043f\u0438\u0442\u0438",TotalPrice:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430",Hryvna:"\u0433\u0440\u043d",AddedGoods:"\u0414\u043e\u0434\u0430\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"},Message:{BasketIsEmpty:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!",AddedToBasket:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0440\u0437\u0438\u043d\u0438!",DeletedFromBasket:"\u0422\u043e\u0432\u0430\u0440 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e \u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u0438!",DeleteFromBasket:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0442\u043e\u0432\u0430\u0440",AddGoodToBasket:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0442\u043e\u0432\u0430\u0440 \u0434\u043e \u043a\u043e\u0440\u0437\u0438\u043d\u0438",ChangeLanguage:"\u0417\u043c\u0456\u043d\u0456\u0442\u044c \u043c\u043e\u0432\u0443",GoodsInBasket:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u044c\u0442\u0435 \u0434\u043e\u0434\u0430\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438",CloseBasket:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}},r={Description:{FootballBadges:"Football badges",HunterTompson:"Hunter Tompson supports Dynamo",ACAB:"ACAB. Pepsi style",DonaldDuck:"Donald Duck supports Kyiv",DynamoKit:"Dynamo Kyiv kit",Lazio:"Lazio Rome",DynamoRhomb:"Dynamo Kyiv rhomb",PearlOfFootball:"Dynamo, the pearl of football",CasualDynamo:"CasualsFCDK",RealMadrid:"Real Madrid badges collection",ModernDynamoKit:"Modern Dynamo Kyiv kit",DynamoDisk:"Dynamo Kyiv disk",Sportcomitet:"Dynamo Kyiv. Sportcomitet"},Service:{Basket:"Basket",Search:"Search",Price:"Price",Buy:"Buy",TotalPrice:"Total price",Hryvna:"grn",AddedGoods:"Added goods"},Message:{BasketIsEmpty:"Basket is empty!",AddedToBasket:"Added to the basket!",DeletedFromBasket:"Deleted from the basket!",DeleteFromBasket:"Delete item",AddGoodToBasket:"Add good to the basket",ChangeLanguage:"\u0421hange language",GoodsInBasket:"View added goods",CloseBasket:"Close basket"}};a.d(t,"a",function(){return c}),a.d(t,"b",function(){return i});var o=JSON.parse(localStorage.getItem("language")),c=function(e){o=e},i=function(e){var t;switch(o){case"en":t=r;break;case"ua":t=n;break;default:t=n}return t[e]||""}},26:function(e,t,a){"use strict";var n=a(12),r=a(19),o=a(0),c=a.n(o),i=function(e,t){var a=Object(o.useState)(JSON.parse(localStorage.getItem(e))||t),r=Object(n.a)(a,2),c=r[0],i=r[1];return[c,function(t){i(t),localStorage.setItem(e,JSON.stringify(t))}]},l=a(75),s=a(32);a.d(t,"a",function(){return m}),a.d(t,"b",function(){return u}),a.d(t,"c",function(){return p});var d=function(e,t){switch(t.type){case s.a.UPDATE_LANGUAGE:return Object(r.a)({},e,{language:t.payload});case s.a.OPEN_SNACKBAR:return Object(r.a)({},e,{isOpenSnackbar:t.payload});case s.a.SNACKBAR_TEXT:return Object(r.a)({},e,{snackBarText:t.payload});case s.a.SNACKBAR_SEVERITY:return Object(r.a)({},e,{snackSeverity:t.payload});case s.a.ADD_TO_ORDER:return Object(r.a)({},e,{order:t.payload});case s.a.SET_TRANSLATED:return Object(r.a)({},e,{translatedGoods:t.payload});case s.a.SET_PREPARED:return Object(r.a)({},e,{preparedGoods:t.payload});default:return e}},m=Object(o.createContext)(null),u=Object(o.createContext)(null),p=function(e){var t=e.children,a=i("language",""),r=Object(n.a)(a,2),s=r[0],p=r[1],y=i("order",[]),b=Object(n.a)(y,2),E={language:s,setLanguage:p,isOpenSnackbar:!1,snackBarText:"",snackSeverity:"",order:b[0],setOrder:b[1],translatedGoods:l.a,preparedGoods:l.a},g=Object(o.useReducer)(d,E),f=Object(n.a)(g,2),h=f[0],v=f[1];return c.a.createElement(m.Provider,{value:v},c.a.createElement(u.Provider,{value:h},t))}},32:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={UPDATE_LANGUAGE:"UPDATE_LANGUAGE",OPEN_SNACKBAR:"OPEN_SNACKBAR",SNACKBAR_TEXT:"SNACKBAR_TEXT",SNACKBAR_SEVERITY:"SNACKBAR_SEVERITY",ADD_TO_ORDER:"ADD_TO_ORDER",SET_TRANSLATED:"SET_TRANSLATED",SET_PREPARED:"SET_PREPARED"}},42:function(e,t,a){"use strict";var n=a(110),r=a(212),o=a(262),c=a(0),i=a.n(c);t.a=function(e){return function(t){var a=Object(n.a)({},t),c=a.children,l=a.title,s=a.transitionComponent,d=void 0===s?r.a:s,m=a.placement,u=void 0===m?"bottom":m,p=a.enterDelay,y=void 0===p?1e3:p,b=a.leaveDelay,E=void 0===b?0:b,g=a.arrow,f=void 0===g||g,h=a.onClick,v=void 0===h?function(){}:h,D=a.onChange,O=void 0===D?function(){}:D,A=a.control,k=void 0===A?null:A,C=a.checked,S=void 0!==C&&C,j=a.color,B=void 0===j?"inherit":j,T=a.ariaLabel,R=void 0===T?"":T;return i.a.createElement(o.a,{title:l,TransitionComponent:d,placement:u,enterDelay:y,leaveDelay:E,arrow:f},i.a.createElement(e,{variant:"contained",onClick:v,control:k,checked:S,onChange:O,color:B,"aria-label":R},c))}}},72:function(e,t,a){"use strict";var n=a(16),r=a(0),o=a.n(r),c=a(264),i=a(253),l=a(265),s=a(255),d=a(267),m=a(268),u=a(269),p=a(266),y=a(270),b=a(137),E=a.n(b),g=a(25),f=a(42),h=a(26),v=a(32);t.a=function(e){var t=e.poster,a=e.name,b=e.price,D=e.id,O=Object(r.useContext)(h.b).order,A=Object(r.useContext)(h.a)||function(){},k=Object(g.b)("Service"),C=k.Hryvna,S=k.Price,j=k.Buy,B=Object(g.b)("Message"),T=B.AddedToBasket,R=B.AddGoodToBasket,x=function(e){var t=1,a=O.findIndex(function(t){return t.id===e.id});a>-1?(t=O[a].quantity+1,A({type:v.a.ADD_TO_ORDER,payload:O.map(function(a){return a.id!==e.id?a:{id:a.id,name:a.name,price:a.price,poster:a.poster,quantity:t}})})):A({type:v.a.ADD_TO_ORDER,payload:[].concat(Object(n.a)(O),[{id:e.id,name:e.name,price:e.price,poster:e.poster,quantity:t}])})},_=Object(f.a)(c.a);return o.a.createElement(i.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(l.a,{sx:{height:"100%"}},o.a.createElement(s.a,{href:t,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(d.a,{sx:{height:140},component:"img",src:t,title:a,alt:a})),o.a.createElement(m.a,{sx:{height:"50%"},justifyContent:"space-between"},o.a.createElement(u.a,null,o.a.createElement(p.a,{gutterBottom:!0,variant:"h6",component:"h3"},a),o.a.createElement(p.a,{variant:"body1",color:"text.secondary"},S,": ",b," ",C)),o.a.createElement(y.a,null,o.a.createElement(_,{color:"primary",title:R,placement:"right",onClick:function(){x({id:D,name:a,price:b,poster:t}),A({type:v.a.OPEN_SNACKBAR,payload:!0}),A({type:v.a.SNACKBAR_TEXT,payload:T}),A({type:v.a.SNACKBAR_SEVERITY,payload:"success"})}},j,o.a.createElement(E.a,{sx:{ml:1}}))))))}},75:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(25),r=Object(n.b)("Description"),o=r.HunterTompson,c=r.ACAB,i=r.CasualDynamo,l=r.DonaldDuck,s=r.DynamoDisk,d=r.DynamoKit,m=r.DynamoRhomb,u=r.ModernDynamoKit,p=[{id:"1",category:"dynamo",name:o,poster:"https://i.postimg.cc/YS9msQ4N/hunter-tompson.jpg",price:1350},{id:"2",category:"amf",name:c,poster:"https://i.postimg.cc/W4HJLtrB/acab.jpg",price:1300},{id:"3",category:"sport",name:l,poster:"https://i.postimg.cc/QdNBFcqL/sokil-dynamo.jpg",price:1250},{id:"4",category:"dynamo",name:d,poster:"https://i.postimg.cc/YCtFQ5Ms/dynamo-unifrom-collection.jpg",price:3850},{id:"5",category:"sport",name:r.Lazio,poster:"https://i.postimg.cc/fWXSpzbP/lazio.jpg",price:2730},{id:"6",category:"dynamo",name:m,poster:"https://i.postimg.cc/9Xqy2PLJ/dynamo-romb.jpg",price:1500},{id:"7",category:"dynamo",name:r.PearlOfFootball,poster:"https://i.postimg.cc/MKSf8CMp/perl-of-football.jpg",price:1450},{id:"8",category:"dynamo",name:i,poster:"https://i.postimg.cc/4N6t7fkc/casuals-fcdk.jpg",price:1470},{id:"9",category:"sport",name:r.RealMadrid,poster:"https://i.postimg.cc/zXFbDxKS/real-madrid.jpg",price:14750},{id:"10",category:"dynamo",name:u,poster:"https://i.postimg.cc/ZRvvTZxC/dynamo-uniform.jpg",price:2300},{id:"11",category:"dynamo",name:s,poster:"https://i.postimg.cc/BnNKpmvQ/dynamo-shaiba.jpg",price:1550},{id:"12",category:"dynamo",name:r.Sportcomitet,poster:"https://i.postimg.cc/D0qWXgDh/huray.jpg",price:1800}]}},[[122,4,2]]]);
//# sourceMappingURL=main.bf926b35.chunk.js.map