"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[486],{28249:function(t,a,e){e.r(a),e.d(a,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return k}});var n=e(87462),l=e(63366),r=(e(67294),e(3905)),i=e(10073),m=["components"],u={sidebar_position:5},o="Chat Item",d={unversionedId:"chatitem",id:"chatitem",title:"Chat Item",description:"Chat Component",source:"@site/docs/chatitem.md",sourceDirName:".",slug:"/chatitem",permalink:"/docs-react-chat-elements/docs/chatitem",editUrl:"https://github.com/Detaysoft/react-chat-elements/docs/chatitem.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Message List",permalink:"/docs-react-chat-elements/docs/messagelist"},next:{title:"Input",permalink:"/docs-react-chat-elements/docs/input"}},p={},k=[{value:"Chat Component",id:"chat-component",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Chat Item Props",id:"chat-item-props",level:2}],s={toc:k};function g(t){var a=t.components,e=(0,l.Z)(t,m);return(0,r.kt)("wrapper",(0,n.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chat-item"},"Chat Item"),(0,r.kt)("h2",{id:"chat-component"},"Chat Component"),(0,r.kt)("p",null,"Items in the ChatList can also be defined separately."),(0,r.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,r.kt)(i.ChatItem,{avatar:"https://avatars.githubusercontent.com/u/41473129?v=4",alt:"emre_avatar",title:"Emre",subtitle:"What are you doing ?",date:new Date,unread:0,mdxType:"ChatItem"})),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ChatItem } from "react-chat-elements"\n\n<ChatItem\n  avatar="https://avatars.githubusercontent.com/u/80540635?v=4"\n  alt="kursat_avatar"\n  title="Kursat"\n  subtitle="Ok. See you !"\n  date={new Date()}\n  unread={0}\n/>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result")),(0,r.kt)("div",{style:{color:"black"}},(0,r.kt)(i.ChatItem,{avatar:"https://avatars.githubusercontent.com/u/80540635?v=4",alt:"kursat_avatar",title:"Kursat",subtitle:"Ok. See you !",date:new Date,unread:0,mdxType:"ChatItem"})),(0,r.kt)("h2",{id:"chat-item-props"},"Chat Item Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"prop"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem avatar photo url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avatarFlexible"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"flexible ChatItem avatar photo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alt"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem avatar photo alt text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subtitle"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem subtitle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateString"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem represents dateString or timeagojs(now, date)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unread"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem unread count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem on click")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onContextMenu"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem on context menu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statusColor"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem status color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statusColorType"),(0,r.kt)("td",{parentName:"tr",align:null},"badge"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem status color type (encircle, badge)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statusText"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatItem status text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lazyLoadingImage"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"image path"),(0,r.kt)("td",{parentName:"tr",align:null},"lazy loading image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"muted"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"chat mute info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showMute"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"chat mute button visibilty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showVideoCall"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"chat video call button visibilty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClickMute"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"mute button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClickVideoCall"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"video call button")))))}g.isMDXComponent=!0}}]);