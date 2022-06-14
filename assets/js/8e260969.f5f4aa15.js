"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[254],{8298:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return k}});var a=n(87462),o=n(63366),r=n(67294),p=n(3905),l=n(10073),u=function(t){var e=t.buttonText,n=r.useState(!1),a=n[0],o=n[1];return r.createElement("div",{className:"popupCompDiv"},r.createElement(l.Button,{text:e,onClick:function(){return o(!0)}}),r.createElement(l.Popup,{show:a,header:"Example Popup",headerButtons:[{type:"transparent",color:"black",text:"X",onClick:function(){o(!1)}}],text:"Here is a sample popup component to use in your projects.",footerButtons:[{color:"white",backgroundColor:"#ff5e3e",text:"Cancel",onClick:function(){o(!1)}},{color:"white",backgroundColor:"lightgreen",text:"OK",onClick:function(){o(!1)}}]}))},i=["components"],s={sidebar_position:8},d="Popup",c={unversionedId:"popup",id:"popup",title:"Popup",description:"Popup Component",source:"@site/docs/popup.md",sourceDirName:".",slug:"/popup",permalink:"/docs-react-chat-elements/docs/popup",editUrl:"https://github.com/Detaysoft/react-chat-elements/docs/popup.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs-react-chat-elements/docs/button"},next:{title:"Sidebar",permalink:"/docs-react-chat-elements/docs/sidebar"}},m={},k=[{value:"Popup Component",id:"popup-component",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Popup Props",id:"popup-props",level:2}],g={toc:k};function N(t){var e=t.components,n=(0,o.Z)(t,i);return(0,p.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"popup"},"Popup"),(0,p.kt)("h2",{id:"popup-component"},"Popup Component"),(0,p.kt)("p",null,"We need the popup component in many places, with this package you get a nice popup component without any hassle."),(0,p.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,p.kt)(u,{buttonText:"Show Popup",mdxType:"PopupComp"})),(0,p.kt)("h2",{id:"example-usage"},"Example Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Popup, Button } from "react-chat-elements"\n\nconst [show, setShow] = React.useState(false);\n\n<Button text={"Show Result"} onClick={() => setShow(true)} />\n\n<Popup\n  show={show}\n  header="Example Popup"\n  headerButtons={[\n      {\n          type: "transparent",\n          color: "black",\n          text: "X",\n          onClick: () => {\n              setShow(false);\n          },\n      },\n  ]}\n  text="Here is a sample popup component to use in your projects."\n  footerButtons={[\n      {\n          color: "white",\n          backgroundColor: "#ff5e3e",\n          text: "Cancel",\n          onClick: () => {\n              setShow(false);\n          },\n      },\n      {\n          color: "white",\n          backgroundColor: "lightgreen",\n          text: "OK",\n          onClick: () => {\n              setShow(false);\n          },\n      },\n  ]}\n/>\n')),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Result")),(0,p.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,p.kt)(u,{buttonText:"Show Result",mdxType:"PopupComp"})),(0,p.kt)("h2",{id:"popup-props"},"Popup Props"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"prop"),(0,p.kt)("th",{parentName:"tr",align:null},"default"),(0,p.kt)("th",{parentName:"tr",align:null},"type"),(0,p.kt)("th",{parentName:"tr",align:null},"description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"show"),(0,p.kt)("td",{parentName:"tr",align:null},"false"),(0,p.kt)("td",{parentName:"tr",align:null},"bool"),(0,p.kt)("td",{parentName:"tr",align:null},"popup visible")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"header"),(0,p.kt)("td",{parentName:"tr",align:null},"none"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"popup title (header) message")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"headerButtons"),(0,p.kt)("td",{parentName:"tr",align:null},"none"),(0,p.kt)("td",{parentName:"tr",align:null},"array"),(0,p.kt)("td",{parentName:"tr",align:null},"popup title (header) buttons")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"text"),(0,p.kt)("td",{parentName:"tr",align:null},"none"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"popup content (center) message")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"color"),(0,p.kt)("td",{parentName:"tr",align:null},"#333"),(0,p.kt)("td",{parentName:"tr",align:null},"string (color)"),(0,p.kt)("td",{parentName:"tr",align:null},"popup content message color")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"footerButtons"),(0,p.kt)("td",{parentName:"tr",align:null},"none"),(0,p.kt)("td",{parentName:"tr",align:null},"array"),(0,p.kt)("td",{parentName:"tr",align:null},"popup footer buttons")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"renderHeader"),(0,p.kt)("td",{parentName:"tr",align:null},"none"),(0,p.kt)("td",{parentName:"tr",align:null},"function (component)"),(0,p.kt)("td",{parentName:"tr",align:null},"render header function")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"renderContent"),(0,p.kt)("td",{parentName:"tr",align:null},"none"),(0,p.kt)("td",{parentName:"tr",align:null},"function (component)"),(0,p.kt)("td",{parentName:"tr",align:null},"render content function")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"renderFooter"),(0,p.kt)("td",{parentName:"tr",align:null},"none"),(0,p.kt)("td",{parentName:"tr",align:null},"function (component)"),(0,p.kt)("td",{parentName:"tr",align:null},"render footer function")))))}N.isMDXComponent=!0}}]);