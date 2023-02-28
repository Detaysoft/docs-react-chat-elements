"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[99],{5984:function(t,n,e){e.r(n),e.d(n,{assets:function(){return g},contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var i=e(7462),o=e(3366),a=e(7294),l=e(3905),r=e(9793),m=function(){return a.createElement(r.Eb,{text:"This is a meeting link for tomorrow's event.",meetingID:"1",actionButtons:[{onClickButton:function(){alert("Joined")},Component:function(){return a.createElement("div",null,"Join")}},{onClickButton:function(){alert("Postponed")},Component:function(){return a.createElement("div",null,"Later")}}]})},p=function(){return a.createElement(r._p,{position:"left",title:"Emre",type:"meetingLink",meetingID:"1",text:"This is a meeting link for tomorrow's event.",actionButtons:[{onClickButton:function(){alert("Joined")},Component:function(){return a.createElement("div",null,"Join")}},{onClickButton:function(){alert("Postponed")},Component:function(){return a.createElement("div",null,"Later")}}]})},s=["components"],u={sidebar_position:2,custom_edit_url:null},k="Meeting Link",c={unversionedId:"meeting-components/meeting-link",id:"meeting-components/meeting-link",title:"Meeting Link",description:"Meeting Link Component",source:"@site/docs/meeting-components/meeting-link.md",sourceDirName:"meeting-components",slug:"/meeting-components/meeting-link",permalink:"/docs-react-chat-elements/docs/meeting-components/meeting-link",editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Meeting Item",permalink:"/docs-react-chat-elements/docs/meeting-components/meeting-item"},next:{title:"Meeting List",permalink:"/docs-react-chat-elements/docs/meeting-components/meeting-list"}},g={},d=[{value:"Meeting Link Component",id:"meeting-link-component",level:2},{value:"Example Usages",id:"example-usages",level:2},{value:"Meeting Link Props",id:"meeting-link-props",level:2},{value:"IMeetingLinkActionButtons Props",id:"imeetinglinkactionbuttons-props",level:3}],N={toc:d};function f(t){var n=t.components,e=(0,o.Z)(t,s);return(0,l.kt)("wrapper",(0,i.Z)({},N,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"meeting-link"},"Meeting Link"),(0,l.kt)("h2",{id:"meeting-link-component"},"Meeting Link Component"),(0,l.kt)("p",null,"MeetingLink component can be use for sending meeting links. On the other hand can be use in message box."),(0,l.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,l.kt)(m,{mdxType:"ExampleMeetingLink"})),(0,l.kt)("h2",{id:"example-usages"},"Example Usages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { MessageBox } from "react-chat-elements"\n\n<MessageBox\n  position={"left"}\n  title="Emre"\n  type={"meetingLink"}\n  meetingID="1"\n  text="This is a meeting link for tomorrow\'s event."\n  actionButtons={[\n    {\n      onClickButton: () => {\n        alert("Joined")\n      },\n      Component: () => <div>Join</div>,\n    },\n    {\n      onClickButton: () => {\n        alert("Postponed")\n      },\n      Component: () => <div>Later</div>,\n    },\n  ]}\n/>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("div",{style:{color:"black",marginBottom:"30px"}},(0,l.kt)(p,{mdxType:"ExampleMessageBoxMeetingLink"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { MeetingLink } from "react-chat-elements"\n\n<MeetingLink\n  text="This is a meeting link for tomorrow\'s event."\n  meetingID="1"\n  actionButtons={[\n    {\n      onClickButton: () => {\n        alert("Joined")\n      },\n      Component: () => <div>Join</div>,\n    },\n    {\n      onClickButton: () => {\n        alert("Postponed")\n      },\n      Component: () => <div>Later</div>,\n    },\n  ]}\n/>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("div",{style:{color:"black"}},(0,l.kt)(m,{mdxType:"ExampleMeetingLink"})),(0,l.kt)("h2",{id:"meeting-link-props"},"Meeting Link Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meetingID"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"meeting link meeting id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"meeting link text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actionButtons"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"IMeetingLinkActionButtons"),(0,l.kt)("td",{parentName:"tr",align:null},"meeting link buttons")))),(0,l.kt)("h3",{id:"imeetinglinkactionbuttons-props"},"IMeetingLinkActionButtons Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClickButton"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"button onClick event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Component"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"React.FunctionComponent"),(0,l.kt)("td",{parentName:"tr",align:null},"button component")))))}f.isMDXComponent=!0}}]);