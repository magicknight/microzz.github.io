webpackJsonp([1],{17:function(t,s,i){i(45);var a=i(42)(i(74),i(43),null,null);t.exports=a.exports},38:function(t,s,i){t.exports=i.p+"static/img/help.f1f3932.png"},43:function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("i",{staticClass:"icon-menu",on:{click:function(s){t.isShowMenu=!0}}}),t._v(" "),a("h1",[t._v("GitHub Ranking")])]),t._v(" "),a("div",{staticClass:"content"},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"icon-loading"}),t._v(" "),t._l(t.infos,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"item"},[a("div",{staticClass:"name"},[a("a",{attrs:{href:s?s.link:"https://microzz.com/",target:"_blank"}},[t._v(t._s(s?s.title:""))])]),t._v(" "),a("div",{staticClass:"desc"},[t._v("\n        "+t._s(s?s.desc:"")+"\n      ")]),t._v(" "),a("div",{staticClass:"infos"},[a("div",{staticClass:"lang"},[a("span",{class:[t.lang.replace("#","")]}),t._v(t._s(t.lang)+"\n        ")]),t._v(" "),a("div",{staticClass:"star"},[a("svg",{staticClass:"octicon octicon-star",attrs:{"aria-label":"star",height:"16",role:"img",version:"1.1",viewBox:"0 0 14 16",width:"14"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"}})]),t._v("\n          "+t._s(s?s.star:"")+"\n        ")])]),t._v(" "),a("div",{staticClass:"update"},[t._v("\n        "+t._s(s?s.updateDate:"")+"\n      ")])])})],2),t._v(" "),a("transition",{attrs:{name:"fadeIn"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"menu"},[a("div",{staticClass:"aside"},[a("div",{staticClass:"aside-title"},[a("h2",[t._v("Languages")])]),t._v(" "),a("div",{staticClass:"aside-content"},[t._l(t.langs,function(s,i){return a("div",{staticClass:"lang-name",class:{current:i===t.currentIndex},on:{click:function(a){t.search(s,i)}}},[t._v(t._s(s))])}),t._v(" "),a("div",{staticClass:"lang-name",on:{click:function(s){t.isShowAbout=!0}}},[t._v("About")]),t._v(" "),a("div",{staticClass:"pos"})],2)]),t._v(" "),a("div",{staticClass:"mask",on:{click:function(s){t.isShowMenu=!1}}})])]),t._v(" "),a("transition",{attrs:{name:"showAbout"}},[t.isShowAbout?a("div",{staticClass:"about"},[a("i",{staticClass:"close",on:{click:function(s){t.isShowAbout=!1}}}),t._v(" "),a("div",{staticClass:"about-content"},[a("h1",[t._v("关于")]),t._v(" "),a("p",{staticClass:"skill"},[a("b",[t._v("技术栈")]),t._v("：")]),t._v(" "),a("div",[t._v("Vue2"),a("br"),t._v("axios"),a("br"),t._v("SASS(SCSS)"),a("br"),t._v("Express(上线版本是Koa2)"),a("br"),t._v("cheerio"),a("br"),t._v("request、request-promise"),a("br"),t._v("Webpack"),a("br"),t._v("ES6"),a("br"),t._v("HTML5"),a("br"),t._v("CSS3")]),t._v(" "),a("p",{staticClass:"url"},[a("b",[t._v("源码地址")]),t._v("："),a("a",{attrs:{href:"https://github.com/microzz/github-ranking",target:"_blank"}},[t._v("GitHub")])]),t._v(" "),a("p",{staticClass:"url"},[a("b",[t._v("个人网站")]),t._v("："),a("a",{attrs:{href:"https://microzz.com/",target:"_blank"}},[t._v("microzz")])]),t._v(" "),a("p",[a("br"),t._v("   待业码农，求工作～～如果你觉得该项目不错，还可以请我吃辣条😄↓↓↓")]),t._v(" "),a("div",{staticClass:"help"},[a("img",{attrs:{src:i(38),alt:"microzz.com"}})]),t._v(" "),a("p",{staticClass:"copyright"},[t._v("有任何疑问请联系作者↓ "),a("br"),t._v("📩："),a("a",{attrs:{href:"mailto:zhaohui@microzz.com"}},[t._v("zhaohui@microzz.com")])])]),t._v(" "),a("div",{staticClass:"mask",on:{click:function(s){t.isShowAbout=!1}}})]):t._e()])],1)},staticRenderFns:[]}},45:function(t,s){},74:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i(73),o=i.n(a);s.default={name:"app",data:function(){return{infos:[],isLoading:!1,isShowMenu:!0,langs:["JavaScript","HTML","CSS","PHP","Java","Ruby","CoffeScript","Python","TypeScript","C#"],lang:"JavaScript",currentIndex:"",isShowAbout:!1}},methods:{getData:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"JavaScript",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"stars";this.axios.get("https://microzz.com:3000/api/github-ranking/"+s.replace("#","%23")+"/"+i).then(function(t){return t.data}).then(function(s){o()(s).forEach(function(i){s[i].forEach(function(s,a){t.infos[a]||(t.infos[a]={}),t.infos[a][i.replace(/s$/,"")]=s})}),t.isLoading=!1})},search:function(t,s){this.currentIndex=s,this.lang=t,this.getData(t),this.isShowMenu=!1,this.isLoading=!0}},created:function(){console.log("%c Powered by Zhaohui - microzz.com","background-image:-webkit-gradient( linear, left top,right top, color-stop(0, #00a419),color-stop(0.15, #f44336), color-stop(0.29, #ff4300),color-stop(0.3, #AA00FF),color-stop(0.4, #8BC34A), color-stop(0.45, #607D8B),color-stop(0.6, #4096EE), color-stop(0.75, #D50000),color-stop(0.9, #4096EE), color-stop(1, #FF1A00));color:transparent;-webkit-background-clip:text;font-size:13px;")}}},75:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i(19),o=i(17),n=i.n(o),e=i(16),c=i.n(e),r=i(18),l=i.n(r);a.a.use(l.a,c.a),a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:n.a}})}},[75]);
//# sourceMappingURL=app.500c9a6f12571d922bde.js.map