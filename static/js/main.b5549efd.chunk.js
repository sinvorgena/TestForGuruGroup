(this["webpackJsonptest-task-for-guru-group-app"]=this["webpackJsonptest-task-for-guru-group-app"]||[]).push([[0],{0:function(c,e,a){c.exports={AdsPage:"Ads_AdsPage__1QK_p",wrapper:"Ads_wrapper__Hufxo",item:"Ads_item__1n6rt",itemImgBox:"Ads_itemImgBox__2T8Ar",itemImg:"Ads_itemImg__3nxcH",compareImg:"Ads_compareImg__3a9GX",likeImg:"Ads_likeImg__2AxUd",itemInfo:"Ads_itemInfo__CQh90",itemRow1:"Ads_itemRow1__1Wa38",oldPrice:"Ads_oldPrice__2udw8",ImgBox:"Ads_ImgBox__1EgwA",dealImg:"Ads_dealImg__3jVV1",deliveryImg:"Ads_deliveryImg__wJxK3",itemRow2:"Ads_itemRow2__3tRMx",itemRow3:"Ads_itemRow3__3rFMg",itemRow4:"Ads_itemRow4__3FLZV",city:"Ads_city__2ZdzA",date:"Ads_date__D93H3",showAllCardsBtn:"Ads_showAllCardsBtn__1Gnrx",showAllCardsLabel:"Ads_showAllCardsLabel__3L0Al",textItemHasBeenSeen:"Ads_textItemHasBeenSeen__m5urE",itemSeen:"Ads_itemSeen__6XKBo",swapImgLabel:"Ads_swapImgLabel__AVk1n",firstImg:"Ads_firstImg__1xtsm",swapImg:"Ads_swapImg__3w8OC",second:"Ads_second__1tL1L",third:"Ads_third__3ZCFh",four:"Ads_four__1jby8"}},41:function(c,e,a){},42:function(c,e,a){},67:function(c,e,a){"use strict";a.r(e);var t=a(2),s=a.n(t),n=a(13),r=a.n(n),i=(a(41),a(42),a(17)),o=a(7),l=a(0),m=a.n(l),d=a(8),j=a(16),u=a(18),g=a(10),b=a(22),O=b.create({baseURL:"https://6075786f0baf7c0017fa64ce.mockapi.io/products"}),p={getCards:function(){return O.get("")},getImg:function(c){return b.get("https://api.unsplash.com/search/photos?per_page=30&page=".concat(c,"&query=flat&client_id=RtqGDPtKbP8aX0Ujn_cR_Vp8EBGXaT0v1zaazNr8YF4"))}},I="SET_CARDS",h="SET_IMG_FOR_CARDS",x="SET_CURRENT_IMG",f={cardsData:[],imgUrlData:[],currentImg:0},N=function(c){return{type:h,imgUrlData:c}};window.AdsDefaulState=f;var w=a.p+"static/media/like.266fafe3.svg",_=a.p+"static/media/sravnit.ff24f33e.svg",v=a.p+"static/media/znachokdostavki.a2fe1155.svg",C=a.p+"static/media/znachoksdelki.7244cce4.svg",A=a.p+"static/media/znachokdostavkihover.d213d9d1.svg",y=a.p+"static/media/znachoksdelkihover.8d1bc3bf.svg",k=a.p+"static/media/likeHover.590e747f.svg",S=a.p+"static/media/sravnitHover.cbe348e0.svg",T=a(1),M=void 0,D=Object(d.d)(Object(j.b)((function(c){return{cardsData:c.Ads.cardsData,imgUrlData:c.Ads.imgUrlData,currentImg:c.Ads.currentImg}}),{getCards:function(){return function(c){p.getCards().then((function(e){var a;c((a=e.data,{type:I,cardsData:a}))}))}},getImgForCards:function(c){return function(e){for(var a=new Array,t=0;t<Math.ceil(4*c/30);t++)p.getImg(t+1).then((function(t){(a=[].concat(Object(u.a)(a),Object(u.a)(t.data.results))).length>=4*c&&e(N(a))}))}},setCurrentImgSucsess:function(c){return{type:x,currentImg:c}}}))((function(c){Object(t.useEffect)((function(){c.getCards()}),[]),Object(t.useEffect)((function(){c.getImgForCards(c.cardsData.length)}),[c.cardsData.length]),Object(t.useEffect)((function(){n(c.cardsData.slice(0,16).map((function(e){var a;return Object(T.jsxs)("div",{className:e.seen?"".concat(m.a.item," ").concat(m.a.itemSeen):"".concat(m.a.item),children:[Object(T.jsxs)("div",{className:m.a.itemImgBox,children:[Object(T.jsx)("p",{className:m.a.textItemHasBeenSeen,children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.firstImg),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+0)),e.currentImg=0},name:"switchImg",id:e.id+0}),Object(T.jsx)("label",{className:0==e.currentImg?"".concat(m.a.swapImgLabel," ").concat(m.a.firstImg):"".concat(m.a.swapImgLabel),htmlFor:e.id+0})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.second),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+1)),e.currentImg=1},name:"switchImg",id:e.id+1}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.second),htmlFor:e.id+1})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.third),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+2)),e.currentImg=2},name:"switchImg",id:e.id+2}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.third),htmlFor:e.id+2})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.four),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+3)),e.currentImg=3},name:"switchImg",id:e.id+3}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.four),htmlFor:e.id+3})]}),Object(T.jsx)("img",{src:"".concat(e.img[e.currentImg]),className:m.a.itemImg,alt:""}),Object(T.jsx)("img",(a={src:_,onMouseOver:function(c){c.currentTarget.src="".concat(S)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(_)}},Object(o.a)(a,"className",m.a.compareImg),Object(o.a)(a,"alt",""),a)),Object(T.jsx)("img",{src:w,onMouseOver:function(c){c.currentTarget.src="".concat(k)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(w)},alt:""})]}),Object(T.jsxs)("div",{className:m.a.itemInfo,children:[Object(T.jsxs)("div",{className:m.a.itemRow1,children:[Object(T.jsx)("span",{className:m.a.oldPrice,children:Object(T.jsxs)("span",{children:[e.oldPrice," \u20bd"]})}),Object(T.jsxs)("span",{className:m.a.ImgBox,children:[Object(T.jsx)("span",{className:m.a.deliveryImg,children:Object(T.jsx)("img",{className:m.a.deliveryImg,onMouseOver:function(c){c.currentTarget.src="".concat(A)},onMouseOut:function(c){c.currentTarget.src="".concat(v)},src:v,alt:""})}),Object(T.jsx)("span",{className:m.a.dealImg,children:Object(T.jsx)("img",{onMouseOver:function(c){c.currentTarget.src="".concat(y)},onMouseOut:function(c){c.currentTarget.src="".concat(C)},src:C,alt:""})})]})]}),Object(T.jsxs)("div",{className:m.a.itemRow2,children:[e.price," \u20bd"]}),Object(T.jsx)("div",{className:m.a.itemRow3,children:e.title}),Object(T.jsxs)("div",{className:m.a.itemRow4,children:[Object(T.jsx)("span",{className:m.a.city,children:e.locality}),Object(T.jsx)("span",{className:m.a.date,children:"".concat(e.date).slice(0,2)+"."+"".concat(e.date).slice(2,4)+"."+"".concat(e.date).slice(4,6)+", "+"".concat(e.date).slice(6,8)+"."+"".concat(e.date).slice(8,10)})]})]})]})}))),j(c.cardsData.map((function(c){var e;return Object(T.jsxs)("div",{className:c.seen?"".concat(m.a.item," ").concat(m.a.itemSeen):"".concat(m.a.item),children:[Object(T.jsxs)("div",{className:m.a.itemImgBox,children:[Object(T.jsx)("p",{className:m.a.textItemHasBeenSeen,children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.firstImg),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+0)),c.currentImg=0},name:"switchImg",id:c.id+0}),Object(T.jsx)("label",{className:0==c.currentImg?"".concat(m.a.swapImgLabel," ").concat(m.a.firstImg):"".concat(m.a.swapImgLabel),htmlFor:c.id+0})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.second),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+1)),c.currentImg=1},name:"switchImg",id:c.id+1}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.second),htmlFor:c.id+1})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.third),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+2)),c.currentImg=2},name:"switchImg",id:c.id+2}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.third),htmlFor:c.id+2})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.four),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+3)),c.currentImg=3},name:"switchImg",id:c.id+3}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.four),htmlFor:c.id+3})]}),Object(T.jsx)("img",{src:"".concat(c.img[c.currentImg]),className:m.a.itemImg,alt:""}),Object(T.jsx)("img",(e={src:_,onMouseOver:function(c){c.currentTarget.src="".concat(S)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(_)}},Object(o.a)(e,"className",m.a.compareImg),Object(o.a)(e,"alt",""),e)),Object(T.jsx)("img",{src:w,onMouseOver:function(c){c.currentTarget.src="".concat(k)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(w)},alt:""})]}),Object(T.jsxs)("div",{className:m.a.itemInfo,children:[Object(T.jsxs)("div",{className:m.a.itemRow1,children:[Object(T.jsx)("span",{className:m.a.oldPrice,children:Object(T.jsxs)("span",{children:[c.oldPrice," \u20bd"]})}),Object(T.jsxs)("span",{className:m.a.ImgBox,children:[Object(T.jsx)("span",{className:m.a.deliveryImg,children:Object(T.jsx)("img",{className:m.a.deliveryImg,onMouseOver:function(c){c.currentTarget.src="".concat(A)},onMouseOut:function(c){c.currentTarget.src="".concat(v)},src:v,alt:""})}),Object(T.jsx)("span",{className:m.a.dealImg,children:Object(T.jsx)("img",{onMouseOver:function(c){c.currentTarget.src="".concat(y)},onMouseOut:function(c){c.currentTarget.src="".concat(C)},src:C,alt:""})})]})]}),Object(T.jsxs)("div",{className:m.a.itemRow2,children:[c.price," \u20bd"]}),Object(T.jsx)("div",{className:m.a.itemRow3,children:c.title}),Object(T.jsxs)("div",{className:m.a.itemRow4,children:[Object(T.jsx)("span",{className:m.a.city,children:c.locality}),Object(T.jsx)("span",{className:m.a.date,children:"".concat(c.date).slice(0,2)+"."+"".concat(c.date).slice(2,4)+"."+"".concat(c.date).slice(4,6)+", "+"".concat(c.date).slice(6,8)+"."+"".concat(c.date).slice(8,10)})]})]})]})})))}),[c.imgUrlData.length,c.currentImg]);var e=Object(t.useState)(c.cardsData.slice(0,16).map((function(e){var a;return Object(T.jsxs)("div",{className:e.seen?"".concat(m.a.item," ").concat(m.a.itemSeen):"".concat(m.a.item),children:[Object(T.jsxs)("div",{className:m.a.itemImgBox,children:[Object(T.jsx)("p",{className:m.a.textItemHasBeenSeen,children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.firstImg),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+0)),e.currentImg=0},name:"switchImg",id:e.id+0}),Object(T.jsx)("label",{className:0==e.currentImg?"".concat(m.a.swapImgLabel," ").concat(m.a.firstImg):"".concat(m.a.swapImgLabel),htmlFor:e.id+0})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.second),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+1)),e.currentImg=1},name:"switchImg",id:e.id+1}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.second),htmlFor:e.id+1})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.third),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+2)),e.currentImg=2},name:"switchImg",id:e.id+2}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.third),htmlFor:e.id+2})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.four),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){c.setCurrentImgSucsess("".concat(e.id+3)),e.currentImg=3},name:"switchImg",id:e.id+3}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.four),htmlFor:e.id+3})]}),Object(T.jsx)("img",{src:"".concat(e.img[e.currentImg]),className:m.a.itemImg,alt:""}),Object(T.jsx)("img",(a={src:_,onMouseOver:function(c){c.currentTarget.src="".concat(S)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(_)}},Object(o.a)(a,"className",m.a.compareImg),Object(o.a)(a,"alt",""),a)),Object(T.jsx)("img",{src:w,onMouseOver:function(c){c.currentTarget.src="".concat(k)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(w)},alt:""})]}),Object(T.jsxs)("div",{className:m.a.itemInfo,children:[Object(T.jsxs)("div",{className:m.a.itemRow1,children:[Object(T.jsx)("span",{className:m.a.oldPrice,children:Object(T.jsxs)("span",{children:[e.oldPrice," \u20bd"]})}),Object(T.jsxs)("span",{className:m.a.ImgBox,children:[Object(T.jsx)("span",{className:m.a.deliveryImg,children:Object(T.jsx)("img",{className:m.a.deliveryImg,onMouseOver:function(c){c.currentTarget.src="".concat(A)},onMouseOut:function(c){c.currentTarget.src="".concat(v)},src:v,alt:""})}),Object(T.jsx)("span",{className:m.a.dealImg,children:Object(T.jsx)("img",{onMouseOver:function(c){c.currentTarget.src="".concat(y)},onMouseOut:function(c){c.currentTarget.src="".concat(C)},src:C,alt:""})})]})]}),Object(T.jsxs)("div",{className:m.a.itemRow2,children:[e.price," \u20bd"]}),Object(T.jsx)("div",{className:m.a.itemRow3,children:e.title}),Object(T.jsxs)("div",{className:m.a.itemRow4,children:[Object(T.jsx)("span",{className:m.a.city,children:e.locality}),Object(T.jsx)("span",{className:m.a.date,children:"".concat(e.date).slice(0,2)+"."+"".concat(e.date).slice(2,4)+"."+"".concat(e.date).slice(4,6)+", "+"".concat(e.date).slice(6,8)+"."+"".concat(e.date).slice(8,10)})]})]})]})}))),a=Object(i.a)(e,2),s=a[0],n=a[1],r=Object(t.useState)(c.cardsData.map((function(c){var e;return Object(T.jsxs)("div",{className:c.seen?"".concat(m.a.item," ").concat(m.a.itemSeen):"".concat(m.a.item),children:[Object(T.jsxs)("div",{className:m.a.itemImgBox,children:[Object(T.jsx)("p",{className:m.a.textItemHasBeenSeen,children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.firstImg),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+0)),c.currentImg=0},name:"switchImg",id:c.id+0}),Object(T.jsx)("label",{className:0==c.currentImg?"".concat(m.a.swapImgLabel," ").concat(m.a.firstImg):"".concat(m.a.swapImgLabel),htmlFor:c.id+0})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.second),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+1)),c.currentImg=1},name:"switchImg",id:c.id+1}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.second),htmlFor:c.id+1})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.third),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+2)),c.currentImg=2},name:"switchImg",id:c.id+2}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.third),htmlFor:c.id+2})]}),Object(T.jsxs)("span",{className:"".concat(m.a.swapImg," ").concat(m.a.four),children:[Object(T.jsx)("input",{type:"radio",onClick:function(){console.log("".concat(c.id)),M.props.setCurrentImgSucsess("".concat(c.id+3)),c.currentImg=3},name:"switchImg",id:c.id+3}),Object(T.jsx)("label",{className:"".concat(m.a.swapImgLabel," ").concat(m.a.four),htmlFor:c.id+3})]}),Object(T.jsx)("img",{src:"".concat(c.img[c.currentImg]),className:m.a.itemImg,alt:""}),Object(T.jsx)("img",(e={src:_,onMouseOver:function(c){c.currentTarget.src="".concat(S)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(_)}},Object(o.a)(e,"className",m.a.compareImg),Object(o.a)(e,"alt",""),e)),Object(T.jsx)("img",{src:w,onMouseOver:function(c){c.currentTarget.src="".concat(k)},className:m.a.likeImg,onMouseOut:function(c){c.currentTarget.src="".concat(w)},alt:""})]}),Object(T.jsxs)("div",{className:m.a.itemInfo,children:[Object(T.jsxs)("div",{className:m.a.itemRow1,children:[Object(T.jsx)("span",{className:m.a.oldPrice,children:Object(T.jsxs)("span",{children:[c.oldPrice," \u20bd"]})}),Object(T.jsxs)("span",{className:m.a.ImgBox,children:[Object(T.jsx)("span",{className:m.a.deliveryImg,children:Object(T.jsx)("img",{className:m.a.deliveryImg,onMouseOver:function(c){c.currentTarget.src="".concat(A)},onMouseOut:function(c){c.currentTarget.src="".concat(v)},src:v,alt:""})}),Object(T.jsx)("span",{className:m.a.dealImg,children:Object(T.jsx)("img",{onMouseOver:function(c){c.currentTarget.src="".concat(y)},onMouseOut:function(c){c.currentTarget.src="".concat(C)},src:C,alt:""})})]})]}),Object(T.jsxs)("div",{className:m.a.itemRow2,children:[c.price," \u20bd"]}),Object(T.jsx)("div",{className:m.a.itemRow3,children:c.title}),Object(T.jsxs)("div",{className:m.a.itemRow4,children:[Object(T.jsx)("span",{className:m.a.city,children:c.locality}),Object(T.jsx)("span",{className:m.a.date,children:"".concat(c.date).slice(0,2)+"."+"".concat(c.date).slice(2,4)+"."+"".concat(c.date).slice(4,6)+", "+"".concat(c.date).slice(6,8)+"."+"".concat(c.date).slice(8,10)})]})]})]})}))),l=Object(i.a)(r,2),d=l[0],j=l[1],u=Object(t.useState)(!1),g=Object(i.a)(u,2),b=g[0],O=g[1];return Object(T.jsxs)("div",{className:m.a.AdsPage,children:[Object(T.jsx)("div",{className:m.a.wrapper,children:b?d:s}),Object(T.jsx)("input",{type:"checkbox",id:"showAllCards",onClick:function(c){O(!0)},className:m.a.showAllCardsBtn}),Object(T.jsx)("label",{htmlFor:"showAllCards",className:m.a.showAllCardsLabel,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"})]})}));var R=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("h3",{children:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(T.jsx)(D,{})]})},L=a(35),F=Object(d.c)({Ads:function(){var c,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case I:return(c=Object(g.a)(Object(g.a)({},e),{},{cardsData:Object(u.a)(a.cardsData)})).cardsData.forEach((function(c){c.img=[],c.currentImg=0})),c;case x:return c=Object(g.a)(Object(g.a)({},e),{},{currentImg:a.currentImg});case h:c=Object(g.a)({},e),a.imgUrlData=a.imgUrlData.slice(0,4*c.cardsData.length),c.imgUrlData=a.imgUrlData;for(var t=0;t<c.cardsData.length;t++)c.cardsData[t].img=0==t?a.imgUrlData.slice(0,4).map((function(c){return c.urls.small})):1==t?a.imgUrlData.slice(4,8).map((function(c){return c.urls.small})):a.imgUrlData.slice(4*t,4*(t+1)).map((function(c){return c.urls.small}));return c}return e}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,P=Object(d.e)(F,B(Object(d.a)(L.a)));window.store=P;var E=P,U=function(c){c&&c instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(e){var a=e.getCLS,t=e.getFID,s=e.getFCP,n=e.getLCP,r=e.getTTFB;a(c),t(c),s(c),n(c),r(c)}))},H=a(36);r.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(H.a,{children:Object(T.jsx)(j.a,{store:E,children:Object(T.jsx)(R,{})})})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.b5549efd.chunk.js.map