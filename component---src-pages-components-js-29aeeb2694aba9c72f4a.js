(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=(n(148),n(151)),l=n(172),s=n(157),u=n(181),p=n(179),d=n(315),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.images.map(function(e){return o.a.createElement("img",{key:e,src:e})});return o.a.createElement(d.a,{wrapAround:!0,dragging:!0,autoplay:!0},e)},t}(o.a.Component),m=n(188),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=o.a.createElement("div",null,o.a.createElement("h1",{id:"buttons"},"Buttons"),o.a.createElement(s.a,null,"Default"),o.a.createElement(s.a,{dark:!0},"Dark"),o.a.createElement(s.a,{opaque:!0},"Opaque"),o.a.createElement(s.a,{small:!0},"small"),o.a.createElement("h1",{id:"bar"},"Bar"),o.a.createElement(u.a,null),o.a.createElement("h1",{id:"breadcrumb"},"Breadcrumb"),o.a.createElement(p.a,{dark:!0,crumbs:[{name:"a",link:"/components#a"},{name:"b",link:"/components#b"},{name:"c",link:"/components#c"},{name:"d",link:"/components#d"},{name:"e",link:"/components#e"},{name:"f",link:"/components#f"}]}),o.a.createElement("h1",{id:"carousel"},"Carousel"),o.a.createElement(f,{images:["/cdn/images/digicahA.PNG","/cdn/images/digicahB.PNG","/cdn/images/digicahC.PNG"]}));return o.a.createElement(l.a,null,o.a.createElement(m.a,{dark:!0,children:e.props.children}),o.a.createElement(c.Flex,{alignItems:"center",justifyContent:"center"},o.a.createElement(c.Box,{width:[.9,2/3,.75]},e)))},t}(o.a.Component);t.default=h},152:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},155:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(149),r={ws:function(){return Object(a.css)(["@media (max-width:280px){","}"],a.css.apply(void 0,arguments))},xs:function(){return Object(a.css)(["@media (max-width:767px){","}"],a.css.apply(void 0,arguments))},sm:function(){return Object(a.css)(["@media (max-width:991px){","}"],a.css.apply(void 0,arguments))},md:function(){return Object(a.css)(["@media (max-width:1199px){","}"],a.css.apply(void 0,arguments))},lg:function(){return Object(a.css)(["@media (min-width:1200px){","}"],a.css.apply(void 0,arguments))}}},157:function(e,t,n){"use strict";n(164);var a=n(149),r=a.default.button.withConfig({displayName:"button__Button",componentId:"r1rucv-0"})(["border:2px solid #47b475;background-color:#fff;padding:0 26px;height:40px;min-width:150px;line-height:36px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-radius:0;color:#47b475;text-align:center;transition:all 0.3s ease;-webkit-transition:all 0.3s ease;-moz-transition:all 0.3s ease;margin-right:8px;margin-bottom:24px;cursor:pointer;&:hover{color:#fff;background-color:#47b475;}"," "," "," ",""],function(e){return e.dark&&Object(a.css)(["color:#949494;border-color:#949494;&:hover{color:#fff;background-color:#949494;}"])},function(e){return e.light&&Object(a.css)(["color:#ddd;border-color:#ddd;"])},function(e){return e.opaque&&Object(a.css)(["background:none;&:hover{background-color:transparent;color:#fff;border-color:#fff;}"])},function(e){return e.small&&Object(a.css)(["height:30px;font-size:11px;line-height:27px;min-width:0;"])});t.a=r},160:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},163:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),i=(n(185),n(164),n(0)),o=n.n(i),c=n(149),l=c.default.a.withConfig({displayName:"name__Base",componentId:"sc-1mf0bh0-0"})(["font-size:20pt;font-family:'Pacifico',cursive;color:#fff;margin:20px 0;width:fit-content;white-space:nowrap;transition-property:transform;transition-duration:0.8s;&:hover{cursor:pointer;-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-image:url(https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif);text-decoration:none;-webkit-transform:rotate(354deg);}"," "," "," ",""],function(e){return e.dark&&Object(c.css)(["color:#444;"])},function(e){return e.block&&Object(c.css)(["display:block;"])},function(e){return e.small&&Object(c.css)(["font-size:1em;"])},function(e){return e.big&&Object(c.css)(["font-size:2em;"])}),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(l,Object.assign({},this.props,{href:"/"}),"Darren Britton")},t}(o.a.Component);t.a=s},168:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=(n(159),n(0)),o=n.n(i),c=n(149),l=n(186),s=n.n(l),u=function(e){var t=e.name,n=e.href;return o.a.createElement("a",{href:n},o.a.createElement(s.a,{name:t}))},p=c.default.div.withConfig({displayName:"socialIcons__Base",componentId:"v4txrh-0"})(["margin:20px 0;text-align:center;& a{display:inline-block;margin 5px;color:#fff;}& a span{transition:color .2s ease-in;}& a:hover{text-decoration:none;}& a:hover span.fa-linkedin{color:#4875b4;}& a:hover span.fa-twitter{color:#3cf;}& a:hover span.fa-github-alt{color:#fc6d26;}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.icons.map(function(e){return o.a.createElement(u,{key:e.name,name:e.name,href:e.href})});return o.a.createElement(p,this.props,e)},t}(o.a.Component);t.a=d},170:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f}),n.d(t,"useStaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(148),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},m=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,n){"use strict";var a=n(153),r=n.n(a),i=n(0),o=n.n(i),c=(n(4),n(148),n(182)),l=n(149),s=n(151),u=n(7),p=n.n(u),d=n(171),f=n.n(d),m=n(190),h=n(163),g=n(157),b=n(168),y=l.default.div.withConfig({displayName:"footer__Base",componentId:"r54yyk-0"})(["height:fit-contents;padding:0;background:#292929;"]),x=l.default.div.withConfig({displayName:"footer__FooterText",componentId:"r54yyk-1"})(["padding-top:6px;color:#fff;text-align:center;a{color:#9880dc;}"]),w=Object(l.default)(b.a).withConfig({displayName:"footer__SocialIconsStyled",componentId:"r54yyk-2"})(["margin-left:-8px;text-align:left;"]),v=Object(l.default)(s.Box).withConfig({displayName:"footer__CenteredButtonBox",componentId:"r54yyk-3"})(["margin:2em auto;"]),E=l.default.div.withConfig({displayName:"footer__GalleryContainer",componentId:"r54yyk-4"})(["& > div > div{width:fit-content;display:grid;grid-template-columns:repeat(4,1fr);}"]),k=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){return o.a.createElement(y,this.props,o.a.createElement(s.Flex,{flexWrap:"wrap",justifyContent:"space-around"},o.a.createElement(s.Box,{px:2,width:[1,.5,1/3,1/6]},o.a.createElement(s.Flex,{flexDirection:"column"},o.a.createElement(s.Box,null,o.a.createElement(h.a,{block:!0})),o.a.createElement(s.Box,null,o.a.createElement(w,{icons:[{name:"twitter",href:"https://twitter.com/darren_britton"},{name:"github-alt",href:"https://github.com/darrenbritton"},{name:"linkedin",href:"https://ie.linkedin.com/in/darrenbritton"}]})))),o.a.createElement(s.Box,{width:[1,.5,1/3,1/6]},o.a.createElement(s.Flex,{justifyContent:"center",flexDirection:"column"},o.a.createElement(s.Box,null,o.a.createElement(x,null,o.a.createElement("h4",null,"Made with ❤️ using"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"GatsbyJS")))),o.a.createElement(v,null,o.a.createElement(g.a,{onClick:function(){f()("html")},small:"small",dark:"dark",opaque:"opaque"},"Top")))),o.a.createElement(s.Box,{width:[.8,.5,1/3,1/6],pt:2},o.a.createElement(s.Flex,{alignItems:"center",justifyContent:"center"},o.a.createElement(E,null,o.a.createElement(m.a,{api_key:"1b4e5b0203fab0d5731afe68f0a543e1",user_id:"132343752@N06",limit:8}))))))},t}(o.a.Component);function C(){var e=r()(['\n  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";\n\n  html {\n    max-width: 100vw;\n    overflow-x: hidden;\n  }\n']);return C=function(){return e},e}var j=Object(l.createGlobalStyle)(C()),_=l.default.div.withConfig({displayName:"layout__Body",componentId:"ii2kc2-0"})(["display:flex;min-height:100vh;flex-direction:column;width:100vw;img{margin-bottom:0;}"]),B=l.default.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["flex:1;"]);t.a=function(e){var t=e.location,n=e.children;return o.a.createElement(_,null,o.a.createElement(j,null),o.a.createElement(c.Helmet,{title:"Darren Britton",meta:[{name:"description",content:"portfolio"},{name:"keywords",content:"darren, britton, portfolio"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}),o.a.createElement(B,null,n),t&&"/404"!=t.pathname&&o.a.createElement(k,null))}},179:function(e,t,n){"use strict";n(180),n(159);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(149),l=n(148),s=n.n(l),u=c.default.ol.withConfig({displayName:"breadcrumb__Base",componentId:"sc-1tnfc9j-0"})(['padding-top:10px;list-style:none;margin:0;& li a,& li{font-family:"Raleway","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:24px;font-weight:400;text-transform:uppercase;letter-spacing:2px;font-weight:700;font-size:11px;font-weight:600;text-decoration:none;display:inline-block;color:#fff;}& > li + li:before{padding:0 8px;color:#ccc;content:"/\0a0";}& > li:last-child > a{color:#777;pointer-events:none;cursor:default;}@media (min-width:831px){float:right;}',""],function(e){return e.dark&&Object(c.css)(["& li a,& li{color:#444;}"])}),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.crumbs.map(function(e){return o.a.createElement("li",{key:e.name},o.a.createElement(s.a,{to:e.link},e.name))});return o.a.createElement(u,this.props,e)},t}(o.a.Component);t.a=p},181:function(e,t,n){"use strict";var a=n(149).default.hr.withConfig({displayName:"bar__Bar",componentId:"sc-7kfhr0-0"})(["margin-bottom:48px;border:none;border-top:1px solid #555;margin:0 0 24px;width:100%;height:0;box-sizing:content-box;"]);t.a=a},188:function(e,t,n){"use strict";n(159);var a=n(7),r=n.n(a),i=n(153),o=n.n(i),c=n(0),l=n.n(c),s=n(149),u=n(151),p=n(171),d=n.n(p),f=n(163),m=n(155);function h(){var e=o()(["\n    & ul {\n      display: none;\n    }\n  "]);return h=function(){return e},e}var g=s.default.div.withConfig({displayName:"navbar__Base",componentId:"sc-1lkjaee-0"})(["padding:0;margin:0;max-height:62px;line-height:62px;width:100vw;& ul{width:100%;height:62px;padding:0;margin:0;list-style:none;font-size:13px;}& ul > li a,& ul > li{height:62px;font-size:11px;float:right;position:relative;color:#fff;text-decoration:none;cursor:pointer;transition:opacity .3s ease;}& ul > li a{font-family:'Raleway';text-transform:uppercase;font-weight:600;letter-spacing:1px;margin-right:32px;}"," "," ",""],function(e){return e.dark&&Object(s.css)(["background:#fff;& ul > li a,& ul > li{color:#242424;opacity:0.6;}& ul > li a:hover{opacity:1;}a{color:#000;}"])},function(e){return e.main&&Object(s.css)(["background:transparent;position:absolute;top:0;left:0;z-index:100;"])},m.a.xs(h())),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children.map(function(e){if(e.props.id)return{name:e.props.children,href:"#"+e.props.id}}).filter(function(e){return null!=e}).reverse().map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{onClick:function(){d()(e.href)}},e.name))});return l.a.createElement(g,this.props,l.a.createElement(u.Flex,null,l.a.createElement(u.Box,{px:2,width:[1,1/3,2/6]},l.a.createElement(f.a,null)),l.a.createElement(u.Box,{px:2,width:[0,2/3,4/6]},l.a.createElement("ul",null,e))))},t}(l.a.Component);t.a=b}}]);
//# sourceMappingURL=component---src-pages-components-js-29aeeb2694aba9c72f4a.js.map