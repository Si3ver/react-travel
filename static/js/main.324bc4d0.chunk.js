(this["webpackJsonpreact-travel"]=this["webpackJsonpreact-travel"]||[]).push([[0],{106:function(e,t,i){e.exports={content:"ProductCollection_content__24wv7","side-image":"ProductCollection_side-image__2qQ9t"}},122:function(e,t,i){e.exports={"side-menu":"SideMenu_side-menu__qusO9"}},123:function(e,t,i){e.exports={slider:"Carousel_slider__2aVPa"}},125:function(e,t,i){e.exports={content:"BusinessPartners_content__2Hrtw"}},126:function(e,t,i){e.exports={"page-content":"HomePage_page-content__2B3m-"}},127:function(e,t,i){e.exports={App:"App_App__16ZpL"}},128:function(e){e.exports=JSON.parse('{"header":{"slogan":"\u8ba9\u65c5\u884c\u66f4\u5e78\u798f","add_new_language":"\u6dfb\u52a0\u65b0\u8bed\u8a00","title":"\u5f00\u5fc3\u65c5\u6e38\u7f51","register":"\u6ce8\u518c","signin":"\u767b\u5f55","home_page":"\u65c5\u6e38\u9996\u9875","weekend":"\u5468\u672b\u6e38","group":"\u8ddf\u56e2\u6e38","backpack":"\u81ea\u7531\u884c","private":"\u79c1\u5bb6\u56e2","cruise":"\u90ae\u8f6e","hotel":"\u9152\u5e97+\u666f\u70b9","local":"\u5f53\u5730\u73a9\u4e50","theme":"\u4e3b\u9898\u6e38","custom":"\u5b9a\u5236\u6e38","study":"\u6e38\u5b66","visa":"\u7b7e\u8bc1","enterprise":"\u4f01\u4e1a\u6e38","high_end":"\u9ad8\u7aef\u6e38","outdoor":"\u7231\u73a9\u6237\u5916","insurance":"\u4fdd\u9669"},"footer":{"detail":"\u7248\u6743\u6240\u6709 @ \u5f00\u5fc3\u65c5\u6e38\u7f51"},"home_page":{"hot_recommended":"\u7206\u6b3e\u63a8\u8350","new_arrival":"\u65b0\u54c1\u4e0a\u5e02","domestic_travel":"\u56fd\u5185\u6e38\u63a8\u8350","joint_venture":"\u5408\u4f5c\u4f01\u4e1a","start_from":"(\u8d77)"}}')},129:function(e){e.exports=JSON.parse('{"header":{"slogan":"Make travel happier","add_new_language":"add new language","title":"Happy Travel","register":"Register","signin":"Sign In","home_page":"Home","weekend":"Weekend","group":"Group","backpack":"Backpack","private":"Private","cruise":"Cruise","hotel":"Hotel & Attractions","local":"Local","theme":"Theme","custom":"Custom","study":"Study","visa":"Visa","enterprise":"Enterprise","high_end":"High-end","outdoor":"Outdoor","insurance":"Insurance"},"footer":{"detail":"All rights reserved @ HappyTravel"},"home_page":{"hot_recommended":"Hot Recommended","new_arrival":"New arrival","domestic_travel":"Domestic travel","joint_venture":"Joint Venture","start_from":"(start from)"}}')},167:function(e,t,i){},168:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),s=i(23),c=i.n(s),n=i(69),u=i(22),l=i(78),o=i(79),p=i(96),d=i(95),j=i(171),h=i(178),g=i(180),b=i(174),m=i(179),O=i(177),x=i(65),_=i(170),f=i(176),z=i(181),v=i(112),w=i(130),P=i(77),R=i(73),y={language:"zh",languageList:[{name:"\u4e2d\u6587",code:"zh"},{name:"English",code:"en"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"change_language":return R.a.changeLanguage(t.payload),Object(P.a)(Object(P.a)({},e),{},{language:t.payload});case"add_language":return Object(P.a)(Object(P.a)({},e),{},{languageList:[].concat(Object(w.a)(e.languageList),[t.payload])});default:return e}},k=Object(v.a)(I),q=i.p+"static/media/logo.6ce24c58.svg",M=i(42),S=i.n(M),H=i(4),N=function(e){Object(p.a)(i,e);var t=Object(d.a)(i);function i(e){var a;Object(l.a)(this,i),(a=t.call(this,e)).handleStoreChange=function(){var e=k.getState();a.setState({language:e.language,languageList:e.languageList})},a.menuClickHandler=function(e){var t;t="new"===e.key?{type:"add_language",payload:{code:"new_lang",name:"\u65b0\u8bed\u8a00"}}:{type:"change_language",payload:e.key},k.dispatch(t)};var r=k.getState();return a.state={language:r.language,languageList:r.languageList},k.subscribe(a.handleStoreChange),a}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props,t=e.history,i=e.t;return Object(H.jsxs)("div",{className:S.a["app-header"],children:[Object(H.jsx)("div",{className:S.a["top-header"],children:Object(H.jsxs)("div",{className:S.a.inner,children:[Object(H.jsx)(b.a.Text,{children:i("header.slogan")}),Object(H.jsx)(m.a.Button,{style:{marginLeft:15},overlay:Object(H.jsx)(O.a,{onClick:this.menuClickHandler,children:this.state.languageList.map((function(e){return Object(H.jsx)(O.a.Item,{children:e.name},e.code)}))}),icon:Object(H.jsx)(z.a,{}),children:"zh"===this.state.language?"\u4e2d\u6587":"English"}),Object(H.jsxs)(x.a.Group,{className:S.a["button-group"],children:[Object(H.jsx)(x.a,{onClick:function(){t.push("register")},children:i("header.register")}),Object(H.jsx)(x.a,{onClick:function(){t.push("signIn")},children:i("header.signin")})]})]})}),Object(H.jsxs)(_.a.Header,{className:S.a["main-header"],children:[Object(H.jsxs)("span",{onClick:function(){t.push("/")},children:[Object(H.jsx)("img",{src:q,alt:"logo",className:S.a["App-logo"]}),Object(H.jsx)(b.a.Title,{level:3,className:S.a.title,children:i("header.title")})]}),Object(H.jsx)(f.a.Search,{placeholder:"\u8bf7\u8f93\u5165\u76ee\u7684\u5730\u3001\u4e3b\u9898\u6216\u5173\u952e\u5b57",className:S.a["search-input"]})]}),Object(H.jsxs)(O.a,{mode:"horizontal",className:S.a["main-menu"],children:[Object(H.jsx)(O.a.Item,{children:i("header.home_page")},1),Object(H.jsx)(O.a.Item,{children:i("header.weekend")},2),Object(H.jsx)(O.a.Item,{children:i("header.group")},3),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.backpack")," "]},"4"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.private")," "]},"5"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.cruise")," "]},"6"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.hotel")," "]},"7"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.local")," "]},"8"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.theme")," "]},"9"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.custom")," "]},"10"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.study")," "]},"11"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.visa")," "]},"12"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.enterprise")," "]},"13"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.high_end")," "]},"14"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.outdoor")," "]},"15"),Object(H.jsxs)(O.a.Item,{children:[" ",i("header.insurance")," "]},"16")]})]})}}]),i}(r.a.Component),C=Object(j.a)()(Object(u.f)(N)),T=i(118),A=function(){var e=Object(T.a)().t;return Object(H.jsx)(_.a.Footer,{children:Object(H.jsx)(b.a.Title,{level:3,style:{textAlign:"center"},children:e("footer.detail")})})},L=i(182),F=[{title:"\u4e3b\u9898\u65c5\u6e38",subMenu:[{title:"\u7238\u5988\u6e38",subMenu:["\u7948\u798f\u62dc\u4f5b","\u53e4\u9547\u6e38\u73a9","\u6842\u6797\u5c71\u6c34","\u7ea2\u8272\u4e4b\u65c5"]},{title:"\u4eb2\u5b50\u6e38",subMenu:["\u4e0a\u6d77\u8fea\u58eb\u5c3c","\u63a2\u9669\u4f53\u9a8c","\u6d77\u6d0b\u516c\u56ed","\u611f\u53d7\u540d\u6821"]},{title:"\u871c\u6708\u6e38",subMenu:["\u6d6a\u6f2b\u6d77\u5c9b","\u8c6a\u534e\u9152\u5e97","\u8d2d\u7269\u8840\u62fc","\u5168\u7403\u5a5a\u793c"]}]},{title:"\u5468\u8fb9\u6e38",subMenu:[{title:"\u5468\u8fb9\u76ee\u7684\u5730",subMenu:["\u676d\u5dde","\u5357\u4eac","\u82cf\u5dde","\u9ec4\u5c71"]},{title:"\u70ed\u95e8\u666f\u70b9",subMenu:["\u666e\u9640\u5c71","\u5343\u5c9b\u6e56","\u4e4c\u9547\u53e4\u9547","\u5b8f\u6751"]}]},{title:"\u56fd\u5185\u6e38",subMenu:[{title:"\u5e7f\u4e1c",subMenu:["\u5e7f\u5dde","\u6df1\u5733","\u73e0\u6d77","\u60e0\u5dde"]},{title:"\u6d59\u6c5f",subMenu:["\u676d\u5dde","\u666e\u9640\u5c71","\u5343\u5c9b\u6e56","\u5b81\u6ce2"]},{title:"\u6c5f\u82cf",subMenu:["\u821f\u5c71","\u4e4c\u9547","\u5e72\u5c71","\u6e56\u5dde"]}]},{title:"\u4e1c\u5357\u4e9a",subMenu:[{title:"\u70ed\u95e8\u76ee\u7684\u5730",subMenu:["\u65b0\u52a0\u5761","\u5df4\u5398\u5c9b","\u8d8a\u5357","\u67ec\u57d4\u5be8"]},{title:"\u70ed\u95e8\u666f\u70b9",subMenu:["\u4e0b\u9f99\u6e7e","\u5434\u54e5\u7a9f","\u897f\u54c8\u52aa\u514b","\u69df\u57ce\u73cd\u73e0\u5c9b"]}]},{title:"\u6b27\u6d32",subMenu:[{title:"\u70ed\u95e8\u90ae\u8f6e\u822a\u7ebf",subMenu:["\u6b27\u6d32\u6cb3\u8f6e","\u5317\u6b27\u90ae\u8f6e","\u7231\u7434\u6d77\u90ae\u8f6e","\u82f1\u4f26\u4e09\u5c9b"]},{title:"\u70ed\u95e8\u666f\u70b9",subMenu:["\u8d1d\u52a0\u5c14\u6e56","\u666e\u7f57\u65fa\u65af","\u963f\u5c14\u5351\u65af","\u5723\u6258\u91cc\u5c3c\u5c9b"]},{title:"\u871c\u6708\u6e38",subMenu:["\u6781\u5149\u4e2d\u5fc3","\u4fc4\u7f57\u65af\u8fdc\u4e1c\u5730\u533a","\u82f1\u683c\u5170\u5c11\u5973\u5cf0","\u73bb\u7483\u6d77\u6ee9"]}]}],B=i(122),J=i.n(B),D=function(){return Object(H.jsx)(O.a,{mode:"vertical",className:J.a["side-menu"],children:F.map((function(e,t){return Object(H.jsx)(O.a.SubMenu,{title:Object(H.jsxs)("span",{children:[Object(H.jsx)(L.a,{}),e.title]}),children:e.subMenu.map((function(e,i){return Object(H.jsx)(O.a.SubMenu,{title:Object(H.jsxs)("span",{children:[Object(H.jsx)(L.a,{}),e.title]}),children:e.subMenu.map((function(e,a){return Object(H.jsx)(O.a.Item,{children:Object(H.jsxs)("span",{children:[Object(H.jsx)(L.a,{}),e]})},"sub-sub-menu-".concat(t,"-").concat(i,"-").concat(a))}))},"sub-menu-".concat(t,"-").concat(i))}))},"side-menu-".concat(t))}))})},E=i(123),V=i.n(E),G=i(175),Q=i(173),U=i.p+"static/media/carousel_1.8a3dd591.jpg",Z=i.p+"static/media/carousel_2.b79314aa.jpg",W=i.p+"static/media/carousel_3.39c09c71.jpg",X=function(){return Object(H.jsxs)(G.a,{autoplay:!0,className:V.a.slider,children:[Object(H.jsx)(Q.a,{src:U}),Object(H.jsx)(Q.a,{src:Z}),Object(H.jsx)(Q.a,{src:W})]})},Y=i(106),K=i.n(Y),$=i(172),ee=function(e){var t=e.id,i=e.size,a=e.imageSrc,r=e.price,s=e.title,c=Object(T.a)().t;return Object(H.jsxs)(n.b,{to:"detail/".concat(t),children:["large"===i?Object(H.jsx)(Q.a,{src:a,height:285,width:490}):Object(H.jsx)(Q.a,{src:a,height:120,width:240}),Object(H.jsxs)("div",{children:[Object(H.jsx)(b.a.Text,{type:"secondary",children:s.slice(0,25)}),Object(H.jsxs)(b.a.Text,{type:"danger",strong:!0,children:["\xa5 ",r," ",c("home_page.start_from")]})]})]})},te=function(e){var t=e.title,i=e.sideImage,a=e.products;return Object(H.jsxs)("div",{className:K.a.content,children:[Object(H.jsx)($.a,{orientation:"left",children:t}),Object(H.jsxs)(h.a,{children:[Object(H.jsx)(g.a,{span:4,children:Object(H.jsx)("img",{src:i,className:K.a["side-image"],alt:""})}),Object(H.jsxs)(g.a,{span:20,children:[Object(H.jsxs)(h.a,{children:[Object(H.jsx)(g.a,{span:12,children:Object(H.jsx)(ee,{id:a[0].id,size:"large",title:a[0].title,imageSrc:a[0].touristRoutePictures[0].url,price:a[0].price})}),Object(H.jsxs)(g.a,{span:12,children:[Object(H.jsxs)(h.a,{children:[Object(H.jsx)(g.a,{span:12,children:Object(H.jsx)(ee,{id:a[1].id,size:"small",title:a[1].title,imageSrc:a[1].touristRoutePictures[0].url,price:a[1].price})}),Object(H.jsx)(g.a,{span:12,children:Object(H.jsx)(ee,{id:a[2].id,size:"small",title:a[2].title,imageSrc:a[2].touristRoutePictures[0].url,price:a[2].price})})]}),Object(H.jsxs)(h.a,{children:[Object(H.jsx)(g.a,{span:12,children:Object(H.jsx)(ee,{id:a[3].id,size:"small",title:a[3].title,imageSrc:a[3].touristRoutePictures[0].url,price:a[3].price})}),Object(H.jsx)(g.a,{span:12,children:Object(H.jsx)(ee,{id:a[4].id,size:"small",title:a[4].title,imageSrc:a[4].touristRoutePictures[0].url,price:a[4].price})})]})]})]}),Object(H.jsxs)(h.a,{children:[Object(H.jsx)(g.a,{span:6,children:Object(H.jsx)(ee,{id:a[5].id,size:"small",title:a[5].title,imageSrc:a[5].touristRoutePictures[0].url,price:a[5].price})}),Object(H.jsx)(g.a,{span:6,children:Object(H.jsx)(ee,{id:a[6].id,size:"small",title:a[6].title,imageSrc:a[6].touristRoutePictures[0].url,price:a[6].price})}),Object(H.jsx)(g.a,{span:6,children:Object(H.jsx)(ee,{id:a[7].id,size:"small",title:a[7].title,imageSrc:a[7].touristRoutePictures[0].url,price:a[7].price})}),Object(H.jsx)(g.a,{span:6,children:Object(H.jsx)(ee,{id:a[8].id,size:"small",title:a[8].title,imageSrc:a[8].touristRoutePictures[0].url,price:a[8].price})})]})]})]})]})},ie=i.p+"static/media/microsoft-80658_640.7799e3ac.png",ae=i.p+"static/media/icon-720944_640.66777c45.png",re=i.p+"static/media/follow-826033_640.0d322875.png",se=i.p+"static/media/facebook-807588_640.c91f8a1f.png",ce=i(125),ne=i.n(ce),ue=[{src:ie,title:"Microsoft"},{src:ae,title:"Youtube"},{src:re,title:"Ins"},{src:se,title:"Facebook"}],le=function(e){var t=Object(T.a)().t;return Object(H.jsxs)("div",{className:ne.a.content,children:[Object(H.jsx)($.a,{orientation:"left",children:Object(H.jsx)(b.a.Title,{level:3,children:t("home_page.joint_venture")})}),Object(H.jsx)(h.a,{children:ue.map((function(e,t){return Object(H.jsx)(g.a,{span:6,children:Object(H.jsx)("img",{alt:"bussiness-partner",src:e.src,style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto"}})},"bussiness-partner-"+t)}))})]})},oe=[{id:1,title:"\u57c3\u53ca\u963f\u65af\u65fa+\u5362\u514b\u7d22+\u7ea2\u6d77Red Sea+\u5f00\u7f57+\u4e9a\u5386\u5c71\u592712\u65e5\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u5b98\u65b9\u65d7\u8230\u660e\u661f\u7eaf\u73a9\u56e2\u301125\u4eba\u5c01\u9876|\u542b\u7b7e\u8bc1\u5c0f\u8d39\u5168\u7a0b\u9910|3\u665a\u5c3c\u7f57\u6cb3\u6e38\u8f6e+3\u665a\u7ea2\u6d77\u5168\u5305\u5ea6\u5047\u6751+1\u665a\u5e95\u6bd4\u65af\u53e4\u90fd|\u5347\u7ea7\u5185\u9646\u98de\u673a|\u4f18\u8d28\u4e2d\u6587\u5bfc\u6e38\u961f\u4f0d|\u4e03\u5927\u795e\u5e99+\u8d60\u9879\u76ee",price:"11990",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:2,title:"\u6469\u6d1b\u54e5\u6492\u54c8\u62c9\u6c99\u6f20+\u5361\u8428\u5e03\u5170\u5361+\u9a6c\u62c9\u5580\u4ec0+\u820d\u592b\u6c99...",price:"13290",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:3,title:"\u8d8a\u5357\u80e1\u5fd7\u660e\u5e02+\u7f8e\u5948+\u82bd\u5e84+\u6cb3\u51857\u65e56\u665a\u8ddf\u56e2\u6e38(4\u94bb)...",price:"4000",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:4,title:"\u8fea\u62dc+\u963f\u5e03\u624e\u6bd46\u65e5\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u643a\u7a0b\u56fd\u65c5\u7eaf\u73a9...",price:"7399",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:5,title:"\u6cf0\u56fd\u66fc\u8c37+\u82ad\u5824\u96c56\u65e55\u665a\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u7eaf\u73a9\u3011\u300e\u53ef...",price:"3499",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:6,title:"\u65e5\u672c\u5927\u962a+\u4eac\u90fd+\u7bb1\u6839+\u4e1c\u4eac6\u65e55\u665a\u8ddf\u56e2\u6e38(4\u94bb)\xb7\u3010\u6d6a...",price:"5999",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:7,title:"\u65b0\u52a0\u5761+\u9a6c\u6765\u897f\u4e9a6\u65e55\u665a\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u7eaf\u73a9\u65e0\u8d2d\u7269...",price:"6199",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:8,title:"\u6cd5\u56fd+\u5fb7\u56fd+\u610f\u5927\u5229+\u745e\u58eb12\u65e5\u8ddf\u56e2\u6e38(4\u94bb)\xb7\u3010\u5320\u5fc3\u5b9a...",price:"13699",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:9,title:"\u5370\u5ea6\u5c3c\u897f\u4e9a\u5df4\u5398\u5c9b7\u65e55\u665a\u79c1\u5bb6\u56e2(5\u94bb)\xb7A\u7ebf\u72ec\u680b\u6cf3...",price:"5021",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]}],pe=[{id:10,title:"\u5357\u4eac3\u65e52\u665a\u8ddf\u56e2\u6e38(4\u94bb)\xb7\u89c2\u4e2d\u5c71\u9675+\u6e38\u603b\u7edf\u5e9c+\u89c8\u535a\u7269\u9662\u300e\u6e38\u516d\u671d\u53e4\u90fd \u542c\u6f2b\u957f\u5386\u53f2\u300f&\u901b\u79e6\u6dee\u6cb3\u98ce\u5149\u5e26+\u8001\u95e8\u4e1c\u300e\u54c1\u7f8e\u98df \u5524\u9192\u60a8\u7684\u820c\u5c16\u300f&\u725b\u9996\u5c71+\u62a5\u6069\u5bfa\u300e\u8bda\u5fc3\u7948\u798f \u653e\u7a7a\u5fc3\u7075\u300f& 2\u665a\u8fde\u4f4f4\u94bb\u9152\u5e97",price:"11990",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:11,title:"\u6469\u6d1b\u54e5\u6492\u54c8\u62c9\u6c99\u6f20+\u5361\u8428\u5e03\u5170\u5361+\u9a6c\u62c9\u5580\u4ec0+\u820d\u592b\u6c99...",price:"13290",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:12,title:"\u8d8a\u5357\u80e1\u5fd7\u660e\u5e02+\u7f8e\u5948+\u82bd\u5e84+\u6cb3\u51857\u65e56\u665a\u8ddf\u56e2\u6e38(4\u94bb)...",price:"4000",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:13,title:"\u8fea\u62dc+\u963f\u5e03\u624e\u6bd46\u65e5\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u643a\u7a0b\u56fd\u65c5\u7eaf\u73a9...",price:"7399",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:14,title:"\u6cf0\u56fd\u66fc\u8c37+\u82ad\u5824\u96c56\u65e55\u665a\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u7eaf\u73a9\u3011\u300e\u53ef...",price:"3499",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:15,title:"\u65e5\u672c\u5927\u962a+\u4eac\u90fd+\u7bb1\u6839+\u4e1c\u4eac6\u65e55\u665a\u8ddf\u56e2\u6e38(4\u94bb)\xb7\u3010\u6d6a...",price:"5999",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:16,title:"\u65b0\u52a0\u5761+\u9a6c\u6765\u897f\u4e9a6\u65e55\u665a\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u7eaf\u73a9\u65e0\u8d2d\u7269...",price:"6199",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:17,title:"\u6cd5\u56fd+\u5fb7\u56fd+\u610f\u5927\u5229+\u745e\u58eb12\u65e5\u8ddf\u56e2\u6e38(4\u94bb)\xb7\u3010\u5320\u5fc3\u5b9a...",price:"13699",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:18,title:"\u5370\u5ea6\u5c3c\u897f\u4e9a\u5df4\u5398\u5c9b7\u65e55\u665a\u79c1\u5bb6\u56e2(5\u94bb)\xb7A\u7ebf\u72ec\u680b\u6cf3...",price:"5021",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]}],de=[{id:19,title:"\u57c3\u53ca\u963f\u65af\u65fa+\u5362\u514b\u7d22+\u7ea2\u6d77Red Sea+\u5f00\u7f57+\u4e9a\u5386\u5c71\u592712\u65e5\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u5b98\u65b9\u65d7\u8230\u660e\u661f\u7eaf\u73a9\u56e2\u301125\u4eba\u5c01\u9876|\u542b\u7b7e\u8bc1\u5c0f\u8d39\u5168\u7a0b\u9910|3\u665a\u5c3c\u7f57...",price:"11990",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:20,title:"\u6469\u6d1b\u54e5\u6492\u54c8\u62c9\u6c99\u6f20+\u5361\u8428\u5e03\u5170\u5361+\u9a6c\u62c9\u5580\u4ec0+\u820d\u592b\u6c99...",price:"13290",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:21,title:"\u8d8a\u5357\u80e1\u5fd7\u660e\u5e02+\u7f8e\u5948+\u82bd\u5e84+\u6cb3\u51857\u65e56\u665a\u8ddf\u56e2\u6e38(4\u94bb)...",price:"4000",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:22,title:"\u8fea\u62dc+\u963f\u5e03\u624e\u6bd46\u65e5\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u643a\u7a0b\u56fd\u65c5\u7eaf\u73a9...",price:"7399",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:23,title:"\u6cf0\u56fd\u66fc\u8c37+\u82ad\u5824\u96c56\u65e55\u665a\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u7eaf\u73a9\u3011\u300e\u53ef...",price:"3499",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:24,title:"\u65e5\u672c\u5927\u962a+\u4eac\u90fd+\u7bb1\u6839+\u4e1c\u4eac6\u65e55\u665a\u8ddf\u56e2\u6e38(4\u94bb)\xb7\u3010\u6d6a...",price:"5999",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:25,title:"\u65b0\u52a0\u5761+\u9a6c\u6765\u897f\u4e9a6\u65e55\u665a\u8ddf\u56e2\u6e38(5\u94bb)\xb7\u3010\u7eaf\u73a9\u65e0\u8d2d\u7269...",price:"6199",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:26,title:"\u6cd5\u56fd+\u5fb7\u56fd+\u610f\u5927\u5229+\u745e\u58eb12\u65e5\u8ddf\u56e2\u6e38(4\u94bb)\xb7\u3010\u5320\u5fc3\u5b9a...",price:"13699",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]},{id:27,title:"\u5370\u5ea6\u5c3c\u897f\u4e9a\u5df4\u5398\u5c9b7\u65e55\u665a\u79c1\u5bb6\u56e2(5\u94bb)\xb7A\u7ebf\u72ec\u680b\u6cf3...",price:"5021",touristRoutePictures:[{url:"https://imgs.qunarzz.com/sight/p0/1612/14/14bef79602a7780a3.water.jpg"}]}],je=i.p+"static/media/sider_2019_12-09.d016ce66.png",he=i.p+"static/media/sider_2019_02-04.600e70c8.png",ge=i.p+"static/media/sider_2019_02-04-2.e8593237.png",be=i(126),me=i.n(be),Oe=function(e){Object(p.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props.t;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(C,{}),Object(H.jsxs)("div",{className:me.a["page-content"],children:[Object(H.jsxs)(h.a,{style:{marginTop:20},children:[Object(H.jsx)(g.a,{span:6,children:Object(H.jsx)(D,{})}),Object(H.jsx)(g.a,{span:18,children:Object(H.jsx)(X,{})})]}),Object(H.jsx)(te,{title:Object(H.jsx)(b.a.Title,{level:3,type:"warning",children:e("home_page.hot_recommended")}),sideImage:je,products:oe}),Object(H.jsx)(te,{title:Object(H.jsx)(b.a.Title,{level:3,type:"danger",children:e("home_page.new_arrival")}),sideImage:he,products:pe}),Object(H.jsx)(te,{title:Object(H.jsx)(b.a.Title,{level:3,type:"success",children:e("home_page.domestic_travel")}),sideImage:ge,products:de}),Object(H.jsx)(le,{})]}),Object(H.jsx)(A,{})]})}}]),i}(r.a.Component),xe=Object(j.a)()(Oe),_e=function(){return Object(H.jsx)("h1",{children:"\u767b\u5f55\u9875\u9762"})},fe=function(){return Object(H.jsx)("h1",{children:"\u6ce8\u518c\u9875\u9762"})},ze=function(e){return Object(H.jsxs)("h1",{children:["\u8def\u7ebf\u8be6\u60c5\u9875\u9762\uff0c\u8def\u7ebfID: ",e.match.params.touristRouteId]})},ve=i(127),we=i.n(ve);var Pe=function(){return Object(H.jsx)("div",{className:we.a.App,children:Object(H.jsx)(n.a,{children:Object(H.jsxs)(u.c,{children:[Object(H.jsx)(u.a,{exact:!0,path:"/",component:xe}),Object(H.jsx)(u.a,{path:"/signIn",component:_e}),Object(H.jsx)(u.a,{path:"/register",component:fe}),Object(H.jsx)(u.a,{path:"/detail/:touristRouteId",component:ze}),Object(H.jsx)(u.a,{render:function(){return Object(H.jsx)("h1",{children:"404 \u9875\u9762\u53bb\u6d77\u738b\u661f\u4e86\uff01"})}})]})})})},Re=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,183)).then((function(t){var i=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),r(e),s(e),c(e)}))},ye=i(76),Ie={zh:{translation:i(128)},en:{translation:i(129)}};R.a.use(ye.e).init({resources:Ie,lng:"zh",interpolation:{escapeValue:!1}});R.a,i(166),i(167);c.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(Pe,{})}),document.getElementById("root")),Re()},42:function(e,t,i){e.exports={"app-header":"Header_app-header__3U82T","top-header":"Header_top-header__1Ua6u",inner:"Header_inner__3b3NM","button-group":"Header_button-group__1Dxrp","main-header":"Header_main-header__OC3nw","App-logo":"Header_App-logo__3z1ki","App-logo-spin":"Header_App-logo-spin__2JzXp",title:"Header_title__3_fub","search-input":"Header_search-input__19kTQ","main-menu":"Header_main-menu__iZfNm"}}},[[168,1,2]]]);
//# sourceMappingURL=main.324bc4d0.chunk.js.map