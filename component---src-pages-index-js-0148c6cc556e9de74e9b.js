(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t);var a=n(153),r=n.n(a),i=(n(164),n(0)),o=n.n(i),l=n(151),s=n(149),c=n(189),u=n.n(c),d=n(215),p=n(155),f=n(172),m=n(188),h=n(187),g=n(168),y=(n(32),n(7)),E=n.n(y),b=n(157);function w(){var e=r()(["\n    p {\n      display: none;\n    }\n    h1 {\n      top: 33vw !important;\n      color: #000;\n    }\n  "]);return w=function(){return e},e}function x(){var e=r()(["\n    max-width: 90%;\n  "]);return x=function(){return e},e}function v(){var e=r()(["\n    & > a > div, & > a > div::after {\n      transform: skewY(-5.2deg);\n\n    }\n  "]);return v=function(){return e},e}var S=s.default.div.withConfig({displayName:"portfolio__Tile",componentId:"sc-1bteqw2-0"})(["box-shadow:0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22);position:relative;margin-bottom:32px;overflow:hidden;& > a > div,& > a > div::after{z-index:-1;transition:all 0.5s ease-in-out;transform:skewY(-2.2deg);}& a > div{top:-8px;}&:hover > a > div{transform:scale(1.1);}&:hover > a > div::after{opacity:0.5;}img{height:55% !important;}",""],p.a.ws(v())),k=s.default.a.withConfig({displayName:"portfolio__TileContent",componentId:"sc-1bteqw2-1"})(["color:#fff;text-decoration:none !important;cursor:pointer;h1{position:absolute;top:6vw;left:5%;right:5%;font-family:'Raleway';border:none;}p{font-size:1.2em;position:absolute;bottom:2vw;left:5%;right:5%;color:#111;font-family:'Lato';font-weight:500;}"," "," @media (max-width:1594px){p{bottom:0;font-size:1em;}h1{top:1vw;}}@media (max-width:1258px){p{line-height:1em;}h1{margin-top:1vw;}@media (max-width:828px){p{line-height:inherit;}h1{margin-top:12vw;}@media (max-width:640px){p{line-height:1.5em;font-size:1.5em;}@media (max-width:440px){p{line-height:inherit;font-size:1.1em;}@media (max-width:342px){p{line-height:1.2em;font-size:0.95em;}}"],p.a.md(x()),p.a.ws(w())),C=function(e){var t=e.excerpt,n=e.image,a=(e.tags,e.slug),r=e.title;e.timeToRead;return o.a.createElement(S,null,o.a.createElement("a",{href:a},n?o.a.createElement(u.a,{sizes:n.childImageSharp.sizes}):o.a.createElement("div",null)),o.a.createElement(k,{href:a},o.a.createElement("h1",null,r),o.a.createElement("p",null,t)))},I=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={items:[],viewAll:!1},n}E()(t,e);var n=t.prototype;return n.componentWillRecievedProps=function(e,t){e.items&&JSON.stringify(e.items)!==JSON.stringify(t.items)&&this.setState({items:e.items})},n.toggleShow=function(){this.setState({viewAll:!this.state.viewAll})},n.render=function(){var e=this,t=this.props.items.map(function(e){return o.a.createElement(l.Box,{key:e.node.fields.slug,px:2,width:[1,.5,1/3,.25]},o.a.createElement(C,Object.assign({key:e.node.fields.slug,excerpt:e.node.excerpt,slug:e.node.fields.slug,timeToRead:e.node.timeToRead},e.node.frontmatter)))});return this.state.viewAll||t.splice(4),o.a.createElement(l.Flex,{justifyContent:"center",px:1,flexWrap:"wrap"},t,o.a.createElement(l.Box,{m:"auto"},o.a.createElement(b.a,{center:!0,onClick:function(){return e.toggleShow()}},this.state.viewAll?"View Less":"View More")))},t}(o.a.Component);function R(){var e=r()(["\n    width: 95%;\n    margin-left: 0;\n  "]);return R=function(){return e},e}var j=s.default.div.withConfig({displayName:"showcase__Base",componentId:"sc-15umyfg-0"})(["width:40%;margin:0 auto !important;padding:0;overflow:hidden;padding-top:40px;",""],p.a.xs(R())),N=function(e){function t(){return e.apply(this,arguments)||this}return E()(t,e),t.prototype.render=function(){var e=this.props.images.reverse().map(function(e){return o.a.createElement(l.Box,{key:e.node.id,px:2,width:[.5,1/3]},o.a.createElement(u.a,{sizes:e.node.childImageSharp.sizes}))});return o.a.createElement(j,null,o.a.createElement(l.Flex,{flexWrap:"wrap"},e))},t}(o.a.Component);function _(){var e=r()(["\n    width: 90%;\n\n  "]);return _=function(){return e},e}function O(){var e=r()(["\n        & > div {\n          margin-left: 3vw !important;\n        }\n    "]);return O=function(){return e},e}n.d(t,"pageQuery",function(){return B});var T=s.default.div.withConfig({displayName:"pages__Content",componentId:"sc-6kvjaa-0"})(["& > a{visibility:hidden;display:block;height:0;}& > h1{text-align:center;}"]),L=(s.default.div.withConfig({displayName:"pages__Testo",componentId:"sc-6kvjaa-1"})(["width:100vw !important;height:100vh !important;background:gray;"]),s.default.h1.withConfig({displayName:"pages__Title",componentId:"sc-6kvjaa-2"})(['font-family:"Raleway";text-transform:uppercase;letter-spacing:6px;margin-bottom:40px;font-weight:400;font-size:32px;line-height:40px;border:none;color:#292929;',""],function(e){return e.small&&Object(s.css)(["font-size:12px;letter-spacing:2px;font-weight:700;line-height:24px;"])})),z=s.default.div.withConfig({displayName:"pages__Section",componentId:"sc-6kvjaa-3"})(['text-align:center;padding-top:45px;padding-bottom:40px;a{font-family:"Lato";}p{margin-bottom:64px;sfont-size:large;color:#666;}h1,h2,h3,h4,h5,h6{font-family:"Raleway";text-transform:uppercase;color:#292929;}h4{letter-spacing:3px;font-weight:400;font-size:24px;line-height:32px;color:#292929;}span{color:#666;opacity:0.5;display:block;}& > div:last-child{border-bottom:none !important;}'," ",""],function(e){return e.center&&Object(s.css)(["text-align:left;& > *{margin-left:30vw;}h4{margin-left:20vw;}",""],p.a.xs(O()))},function(e){return e.dark&&Object(s.css)(["background:#292929;*{color:#eee;}span{text-align:left;font-size:16px;line-height:28px;font-weight:400;opacity:0.5;}span,p{color:#fefefe !important;}h6{color:#fff;font-weight:700;}h4{color:#fff;}div{border-bottom:1px solid #333 !important;}"])}),A=s.default.div.withConfig({displayName:"pages__Item",componentId:"sc-6kvjaa-4"})(["width:40%;margin:0 auto;border:none;border-bottom:1px solid #eee;h6{letter-spacing:2px;font-weight:700;padding-top:6px;}span,p{font-size:13px;line-height:24px;color:#666;}span{opacity:0.75;float:right;text-transform:uppercase;}p{margin-bottom:24px;opacity:0.5;}",""],p.a.xs(_())),B=(t.default=function(e){var t=o.a.createElement(T,null,o.a.createElement(d.a,{api_key:"1b4e5b0203fab0d5731afe68f0a543e1",user_id:"132343752@N06",album_id:"72157694825254121",fillPage:!0}),o.a.createElement(h.a,null),o.a.createElement(g.a,{style:{position:"absolute",margin:"0 auto",left:0,right:0,bottom:16},icons:[{name:"twitter",href:"https://twitter.com/darren_britton"},{name:"github-alt",href:"https://github.com/darrenbritton"},{name:"linkedin",href:"https://ie.linkedin.com/in/darrenbritton"}]}),o.a.createElement("a",{id:"about-me"},"About Me"),o.a.createElement(z,null,o.a.createElement(L,null,"About Me"),o.a.createElement(l.Flex,{alignItems:"center",flexDirection:"column"},o.a.createElement(l.Box,{px:2,width:[1,.5]},o.a.createElement("p",null,"Currently working as a software engineer at"," ",o.a.createElement("a",{href:"https://shutterstock.com"},"Shutterstock")," focusing on the editorial content platform. As far as my work goes I've probably worn every hat on the rack, most notible being Web Developer, Software Engineer and Photographer. Don’t let my clean lines and weakness for Swiss type fool you; My work has been pretty diverse and enjoyable. For more information about me follow one of my social media links above or at the bottom of the page.")),o.a.createElement(l.Box,{px:2,width:180},o.a.createElement(u.a,{sizes:e.data.allFile?e.data.allFile.edges[0].node.childImageSharp.sizes:{}})))),o.a.createElement(L,{small:!0},"Portfolio"),o.a.createElement("a",{id:"portfolio"},"Portfolio"),o.a.createElement(I,{items:e.data.allMarkdownRemark.edges}),o.a.createElement("a",{id:"experience"},"Experience"),o.a.createElement(z,{center:!0,dark:!0},o.a.createElement("h4",null,"Experience"),o.a.createElement("span",null,"Where I've worked."),o.a.createElement(A,null,o.a.createElement("span",null,"MAY 2018 - CURRENT"),o.a.createElement("h6",null,"SHUTTERSTOCK"),o.a.createElement("p",null,"Software Engineer")),o.a.createElement(A,null,o.a.createElement("span",null,"JUNE 2016 - APRIL 2018"),o.a.createElement("h6",null,"SAP IRELAND"),o.a.createElement("p",null,"Full Stack Developer")),o.a.createElement(A,null,o.a.createElement("span",null,"FEB 2015 - AUG 2015"),o.a.createElement("h6",null,"SAP IRELAND"),o.a.createElement("p",null,"Support Engineer")),o.a.createElement(A,null,o.a.createElement("span",null,"JAN 2014 - JULY 2014"),o.a.createElement("h6",null,"ST DECLAN'S COLLEGE"),o.a.createElement("p",null,"Full Stack Developer"))),o.a.createElement("a",{id:"tech"},"Tech"),o.a.createElement(z,{center:!0},o.a.createElement("h4",null,"Tech"),o.a.createElement("span",null,"Technologies I enjoy working with."),o.a.createElement(N,{images:e.data.allImageSharp?e.data.allImageSharp.edges:[]})),o.a.createElement("a",{id:"education"},"Education"),o.a.createElement(z,{dark:!0,center:!0},o.a.createElement("h4",null,"EDUCATION"),o.a.createElement("span",null,"Education I've recieved."),o.a.createElement(A,null,o.a.createElement("span",null,"2012 - 2016"),o.a.createElement("h6",null,"BSC COMPUTER SCIENCE (1st Class Honours)"),o.a.createElement("p",null,"Dublin Institute of Technology")),o.a.createElement(A,null,o.a.createElement("span",null,"2006 - 2012"),o.a.createElement("h6",null,"SECONDARY EDUCATION"),o.a.createElement("p",null,"Saint Declan's College"))),o.a.createElement("a",{id:"honoursAndAwards"},"Honours & Awards"),o.a.createElement(z,{center:!0},o.a.createElement("h4",null,"HONORS & AWARDS"),o.a.createElement("span",null,"A list of honors and awards I have recieved for my work."),o.a.createElement(A,null,o.a.createElement("span",null,"2016"),o.a.createElement("h6",null,"BEST PROJECT (IN THE DIT PROJECT FAIR)"),o.a.createElement("p",null,"SAP")),o.a.createElement(A,null,o.a.createElement("span",null,"2014"),o.a.createElement("h6",null,"GAMES STUDIO IRELAND CHALLENGE: BEST IN ORIGINAL STORY"),o.a.createElement("p",null,"Games Fleadh")),o.a.createElement(A,null,o.a.createElement("span",null,"2010"),o.a.createElement("h6",null,"ACCESS ACCENTURE ACHIEVEMENT AWARD"),o.a.createElement("p",null,"Accenture"))));return o.a.createElement(f.a,{location:e.location},o.a.createElement(m.a,{main:!0,children:t.props.children}),t)},"773474175")},152:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},155:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(149),r={ws:function(){return Object(a.css)(["@media (max-width:280px){","}"],a.css.apply(void 0,arguments))},xs:function(){return Object(a.css)(["@media (max-width:767px){","}"],a.css.apply(void 0,arguments))},sm:function(){return Object(a.css)(["@media (max-width:991px){","}"],a.css.apply(void 0,arguments))},md:function(){return Object(a.css)(["@media (max-width:1199px){","}"],a.css.apply(void 0,arguments))},lg:function(){return Object(a.css)(["@media (min-width:1200px){","}"],a.css.apply(void 0,arguments))}}},157:function(e,t,n){"use strict";n(164);var a=n(149),r=a.default.button.withConfig({displayName:"button__Button",componentId:"r1rucv-0"})(["border:2px solid #47b475;background-color:#fff;padding:0 26px;height:40px;min-width:150px;line-height:36px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-radius:0;color:#47b475;text-align:center;transition:all 0.3s ease;-webkit-transition:all 0.3s ease;-moz-transition:all 0.3s ease;margin-right:8px;margin-bottom:24px;cursor:pointer;&:hover{color:#fff;background-color:#47b475;}"," "," "," ",""],function(e){return e.dark&&Object(a.css)(["color:#949494;border-color:#949494;&:hover{color:#fff;background-color:#949494;}"])},function(e){return e.light&&Object(a.css)(["color:#ddd;border-color:#ddd;"])},function(e){return e.opaque&&Object(a.css)(["background:none;&:hover{background-color:transparent;color:#fff;border-color:#fff;}"])},function(e){return e.small&&Object(a.css)(["height:30px;font-size:11px;line-height:27px;min-width:0;"])});t.a=r},160:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(52),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),i=(n(185),n(164),n(0)),o=n.n(i),l=n(149),s=l.default.a.withConfig({displayName:"name__Base",componentId:"sc-1mf0bh0-0"})(["font-size:20pt;font-family:'Pacifico',cursive;color:#fff;margin:20px 0;width:fit-content;white-space:nowrap;transition-property:transform;transition-duration:0.8s;&:hover{cursor:pointer;-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-image:url(https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif);text-decoration:none;-webkit-transform:rotate(354deg);}"," "," "," ",""],function(e){return e.dark&&Object(l.css)(["color:#444;"])},function(e){return e.block&&Object(l.css)(["display:block;"])},function(e){return e.small&&Object(l.css)(["font-size:1em;"])},function(e){return e.big&&Object(l.css)(["font-size:2em;"])}),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(s,Object.assign({},this.props,{href:"/"}),"Darren Britton")},t}(o.a.Component);t.a=c},168:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=(n(159),n(0)),o=n.n(i),l=n(149),s=n(186),c=n.n(s),u=function(e){var t=e.name,n=e.href;return o.a.createElement("a",{href:n},o.a.createElement(c.a,{name:t}))},d=l.default.div.withConfig({displayName:"socialIcons__Base",componentId:"v4txrh-0"})(["margin:20px 0;text-align:center;& a{display:inline-block;margin 5px;color:#fff;}& a span{transition:color .2s ease-in;}& a:hover{text-decoration:none;}& a:hover span.fa-linkedin{color:#4875b4;}& a:hover span.fa-twitter{color:#3cf;}& a:hover span.fa-github-alt{color:#fc6d26;}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.icons.map(function(e){return o.a.createElement(u,{key:e.name,name:e.name,href:e.href})});return o.a.createElement(d,this.props,e)},t}(o.a.Component);t.a=p},170:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f}),n.d(t,"useStaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(148),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(152),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},m=function(e){r.a.useContext;var t=r.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,n){"use strict";var a=n(153),r=n.n(a),i=n(0),o=n.n(i),l=(n(4),n(148),n(182)),s=n(149),c=n(151),u=n(7),d=n.n(u),p=n(171),f=n.n(p),m=n(190),h=n(163),g=n(157),y=n(168),E=s.default.div.withConfig({displayName:"footer__Base",componentId:"r54yyk-0"})(["height:fit-contents;padding:0;background:#292929;"]),b=s.default.div.withConfig({displayName:"footer__FooterText",componentId:"r54yyk-1"})(["padding-top:6px;color:#fff;text-align:center;a{color:#9880dc;}"]),w=Object(s.default)(y.a).withConfig({displayName:"footer__SocialIconsStyled",componentId:"r54yyk-2"})(["margin-left:-8px;text-align:left;"]),x=Object(s.default)(c.Box).withConfig({displayName:"footer__CenteredButtonBox",componentId:"r54yyk-3"})(["margin:2em auto;"]),v=s.default.div.withConfig({displayName:"footer__GalleryContainer",componentId:"r54yyk-4"})(["& > div > div{width:fit-content;display:grid;grid-template-columns:repeat(4,1fr);}"]),S=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return o.a.createElement(E,this.props,o.a.createElement(c.Flex,{flexWrap:"wrap",justifyContent:"space-around"},o.a.createElement(c.Box,{px:2,width:[1,.5,1/3,1/6]},o.a.createElement(c.Flex,{flexDirection:"column"},o.a.createElement(c.Box,null,o.a.createElement(h.a,{block:!0})),o.a.createElement(c.Box,null,o.a.createElement(w,{icons:[{name:"twitter",href:"https://twitter.com/darren_britton"},{name:"github-alt",href:"https://github.com/darrenbritton"},{name:"linkedin",href:"https://ie.linkedin.com/in/darrenbritton"}]})))),o.a.createElement(c.Box,{width:[1,.5,1/3,1/6]},o.a.createElement(c.Flex,{justifyContent:"center",flexDirection:"column"},o.a.createElement(c.Box,null,o.a.createElement(b,null,o.a.createElement("h4",null,"Made with ❤️ using"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"GatsbyJS")))),o.a.createElement(x,null,o.a.createElement(g.a,{onClick:function(){f()("html")},small:"small",dark:"dark",opaque:"opaque"},"Top")))),o.a.createElement(c.Box,{width:[.8,.5,1/3,1/6],pt:2},o.a.createElement(c.Flex,{alignItems:"center",justifyContent:"center"},o.a.createElement(v,null,o.a.createElement(m.a,{api_key:"1b4e5b0203fab0d5731afe68f0a543e1",user_id:"132343752@N06",limit:8}))))))},t}(o.a.Component);function k(){var e=r()(['\n  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";\n\n  html {\n    max-width: 100vw;\n    overflow-x: hidden;\n  }\n']);return k=function(){return e},e}var C=Object(s.createGlobalStyle)(k()),I=s.default.div.withConfig({displayName:"layout__Body",componentId:"ii2kc2-0"})(["display:flex;min-height:100vh;flex-direction:column;width:100vw;img{margin-bottom:0;}"]),R=s.default.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["flex:1;"]);t.a=function(e){var t=e.location,n=e.children;return o.a.createElement(I,null,o.a.createElement(C,null),o.a.createElement(l.Helmet,{title:"Darren Britton",meta:[{name:"description",content:"portfolio"},{name:"keywords",content:"darren, britton, portfolio"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}),o.a.createElement(R,null,n),t&&"/404"!=t.pathname&&o.a.createElement(S,null))}},187:function(e,t,n){"use strict";n(32),n(74);var a=n(7),r=n.n(a),i=n(153),o=n.n(i),l=n(0),s=n.n(l),c=n(149),u=n(213),d=n.n(u),p=n(155);function f(){var e=o()(["\n  left: 3%;\n  top: 15%;\n  letter-spacing: 12px;\n"]);return f=function(){return e},e}function m(){var e=o()(["\n  left: 25%;\n  top: 40%;\n"]);return m=function(){return e},e}var h=Object(c.default)(d.a).withConfig({displayName:"heroText__StyledTypist",componentId:"sc-1rzjf9x-0"})(['color:#fff;letter-spacing:17px;max-width:100%;font-size:72px;line-height:80px;font-weight:100;text-transform:uppercase;font-family:"Raleway";position:absolute;top:50%;left:50%;'," ",""],p.a.md(m()),p.a.xs(f())),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return this.props.text?s.a.createElement(d.a,null,s.a.createElement(h,this.props,s.a.createElement("strong",null,this.props.text.split(" ").slice(0,1),s.a.createElement("br",null)),this.props.text.split(" ").slice(1).join(" "))):s.a.createElement(h,Object.assign({cursor:{show:!1}},this.props),s.a.createElement("strong",null,"I Make")," Websites",s.a.createElement(d.a.Backspace,{count:9,delay:300}),s.a.createElement("span",null," Web Apps"),s.a.createElement(d.a.Backspace,{count:9,delay:300}),s.a.createElement("span",null," Video Games"),s.a.createElement(d.a.Backspace,{count:12,delay:300}),s.a.createElement("span",null," Poor Life Decisions"),s.a.createElement(d.a.Delay,{ms:100}),s.a.createElement("span",null,"."),s.a.createElement(d.a.Delay,{ms:200}),s.a.createElement("span",null,"."),s.a.createElement(d.a.Delay,{ms:300}),s.a.createElement("span",null,"."),s.a.createElement(d.a.Backspace,{count:29,delay:10}),s.a.createElement("strong",null,"But Mostly Just")," Cool Web Stuff")},t}(s.a.Component);t.a=g},188:function(e,t,n){"use strict";n(159);var a=n(7),r=n.n(a),i=n(153),o=n.n(i),l=n(0),s=n.n(l),c=n(149),u=n(151),d=n(171),p=n.n(d),f=n(163),m=n(155);function h(){var e=o()(["\n    & ul {\n      display: none;\n    }\n  "]);return h=function(){return e},e}var g=c.default.div.withConfig({displayName:"navbar__Base",componentId:"sc-1lkjaee-0"})(["padding:0;margin:0;max-height:62px;line-height:62px;width:100vw;& ul{width:100%;height:62px;padding:0;margin:0;list-style:none;font-size:13px;}& ul > li a,& ul > li{height:62px;font-size:11px;float:right;position:relative;color:#fff;text-decoration:none;cursor:pointer;transition:opacity .3s ease;}& ul > li a{font-family:'Raleway';text-transform:uppercase;font-weight:600;letter-spacing:1px;margin-right:32px;}"," "," ",""],function(e){return e.dark&&Object(c.css)(["background:#fff;& ul > li a,& ul > li{color:#242424;opacity:0.6;}& ul > li a:hover{opacity:1;}a{color:#000;}"])},function(e){return e.main&&Object(c.css)(["background:transparent;position:absolute;top:0;left:0;z-index:100;"])},m.a.xs(h())),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children.map(function(e){if(e.props.id)return{name:e.props.children,href:"#"+e.props.id}}).filter(function(e){return null!=e}).reverse().map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{onClick:function(){p()(e.href)}},e.name))});return s.a.createElement(g,this.props,s.a.createElement(u.Flex,null,s.a.createElement(u.Box,{px:2,width:[1,1/3,2/6]},s.a.createElement(f.a,null)),s.a.createElement(u.Box,{px:2,width:[0,2/3,4/6]},s.a.createElement("ul",null,e))))},t}(s.a.Component);t.a=y},189:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.default=void 0;var r,i=a(n(7)),o=a(n(54)),l=a(n(197)),s=a(n(198)),c=a(n(0)),u=a(n(4)),d=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},f=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return p[n]||!1},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+r+"<img "+l+s+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var n=e.style,a=e.onLoad,r=e.onError,i=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,s.default)({},i,{onLoad:a,onError:r,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var E=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,r=!1,i=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var s=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:a,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:s,seenBefore:l},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,p[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,p=void 0===u?{}:u,f=e.placeholderClassName,m=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.Tag,w=e.itemProp,x="boolean"==typeof E?"lightgray":E,v=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,p),S=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),k={title:t,alt:this.state.isVisible?"":n,style:v,className:f};if(m){var C=m;return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),C.base64&&c.default.createElement(y,(0,s.default)({src:C.base64},k)),C.tracedSVG&&c.default.createElement(y,(0,s.default)({src:C.tracedSVG},k)),x&&c.default.createElement(b,{title:t,style:{backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),c.default.createElement(y,{alt:n,title:t,src:C.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:n,title:t},C))}}))}if(h){var I=h,R=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&c.default.createElement(y,(0,s.default)({src:I.base64},k)),I.tracedSVG&&c.default.createElement(y,(0,s.default)({src:I.tracedSVG},k)),x&&c.default.createElement(b,{title:t,style:{backgroundColor:x,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),c.default.createElement(y,{alt:n,title:t,width:I.width,height:I.height,src:I.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:n,title:t,width:I.width,height:I.height},I))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});E.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var x=E;t.default=x}}]);
//# sourceMappingURL=component---src-pages-index-js-0148c6cc556e9de74e9b.js.map