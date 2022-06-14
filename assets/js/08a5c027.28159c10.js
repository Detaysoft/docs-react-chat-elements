"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[68],{84830:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return g},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(10073),m=["components"],o={sidebar_position:1},u="Meeting Item",g={unversionedId:"meeting-components/meeting-item",id:"meeting-components/meeting-item",title:"Meeting Item",description:"Meeting Item Component",source:"@site/docs/meeting-components/meeting-item.md",sourceDirName:"meeting-components",slug:"/meeting-components/meeting-item",permalink:"/docs/meeting-components/meeting-item",editUrl:"https://github.com/Detaysoft/react-chat-elements/docs/meeting-components/meeting-item.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Avatar",permalink:"/docs/avatar"},next:{title:"Meeting Link",permalink:"/docs/meeting-components/meeting-link"}},p={},d=[{value:"Meeting Item Component",id:"meeting-item-component",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Meeting Item Props",id:"meeting-item-props",level:2}],k={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"meeting-item"},"Meeting Item"),(0,l.kt)("h2",{id:"meeting-item-component"},"Meeting Item Component"),(0,l.kt)("p",null,"Create an item that specifies meeting calls."),(0,l.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,l.kt)(i.MeetingItem,{subject:"New Calling !",avatars:[{src:"https://avatars.githubusercontent.com/u/80540635?v=4"},{src:"https://avatars.githubusercontent.com/u/15075759?v=4"},{src:"https://avatars.githubusercontent.com/u/41473129?v=4"}],onMeetingClick:function(){return alert("Clicked Join Meeting")},onShareClick:function(){return alert("Clicked Share Meeting")},mdxType:"MeetingItem"})),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { MeetingItem } from "react-chat-elements"\n\n<MeetingItem\n  subject={"About Tomorrow !"}\n  avatars={[\n    { src: "https://avatars.githubusercontent.com/u/15075759?v=4", },\n    { src: "https://avatars.githubusercontent.com/u/41473129?v=4", },\n  ]}\n  onMeetingClick={() => alert("Clicked Join Meeting")}\n  onShareClick={() => alert("Clicked Share Meeting")}\n/>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("div",{style:{color:"black"}},(0,l.kt)(i.MeetingItem,{subject:"About Tomorrow !",avatars:[{src:"https://avatars.githubusercontent.com/u/15075759?v=4"},{src:"https://avatars.githubusercontent.com/u/41473129?v=4"}],onMeetingClick:function(){return alert("Clicked Join Meeting")},onShareClick:function(){return alert("Clicked Share Meeting")},mdxType:"MeetingItem"})),(0,l.kt)("h2",{id:"meeting-item-props"},"Meeting Item Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subject"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem subject")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subjectLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem subject text limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateString"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem represents dateString or timeagojs(now, date)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lazyLoadingImage"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"image path"),(0,l.kt)("td",{parentName:"tr",align:null},"lazy loading image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closable"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem closable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem on click")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMeetingClick"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem on meeting click")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onShareClick"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem on share click")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onCloseClick"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem on close click")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatars"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem avatars")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatarLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem avatars limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audioMuted"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem audio muted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audioSource"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingItem audio source")))))}c.isMDXComponent=!0}}]);