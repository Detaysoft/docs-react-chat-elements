"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[4],{52737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),l=n(67294),i=n(3905),s=n(10073),g=function(){var e={subject:(new Date).toString(),title:"Daily Meeting",date:new Date,dateString:(new Date).toDateString,collapseTitle:"Info",participants:[{id:"1",title:"Kursat"},{id:"2",title:"You"}],dataSource:[{id:"1",avatar:"https://avatars.githubusercontent.com/u/80540635?v=4",message:"Junior Developer",title:"Kursat",avatarFlexible:!0,date:new Date}]};return l.createElement(s.MessageBox,{position:"left",title:"Esra",type:"meeting",meeting:e})},m=["components"],o={sidebar_position:4,custom_edit_url:null},p="Meeting Message",u={unversionedId:"meeting-components/meeting-message",id:"meeting-components/meeting-message",title:"Meeting Message",description:"Meeting Message Component",source:"@site/docs/meeting-components/meeting-message.md",sourceDirName:"meeting-components",slug:"/meeting-components/meeting-message",permalink:"/docs-react-chat-elements/docs/meeting-components/meeting-message",editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Meeting List",permalink:"/docs-react-chat-elements/docs/meeting-components/meeting-list"}},d={},c=[{value:"Meeting Message Component",id:"meeting-message-component",level:2},{value:"Example Usages",id:"example-usages",level:2},{value:"Meeting Message Props",id:"meeting-message-props",level:2}],k={toc:c};function N(e){var t,n,l=e.components,o=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},k,o,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meeting-message"},"Meeting Message"),(0,i.kt)("h2",{id:"meeting-message-component"},"Meeting Message Component"),(0,i.kt)("p",null,"Message announcing the meetings can be defined."),(0,i.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,i.kt)(s.MeetingMessage,{subject:"BNet Department",title:"Detaysoft Daily",date:new Date,dateString:null==(t=o.messageItem)?void 0:t.dateString,collapseTitle:"Info",participants:[{id:"1",title:"Kursat"},{id:"1",title:"Emre"}],dataSource:[{id:"1",avatar:"https://avatars.githubusercontent.com/u/41473129?v=4",message:"Team Lead",title:"Emre",avatarFlexible:!0,date:new Date},{id:"2",avatar:"https://avatars.githubusercontent.com/u/80540635?v=4",message:"Junior Developer",title:"Kursat",avatarFlexible:!0,date:new Date}],mdxType:"MeetingMessage"})),(0,i.kt)("h2",{id:"example-usages"},"Example Usages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { MeetingMessage } from \"react-chat-elements\"\n\n<MeetingMessage\n  subject=\"Example Meeting Message\"\n  title=\"Meeting Message\"\n  date={new Date()}\n  dateString={props.messageItem?.dateString}\n  collapseTitle=\"Info\"\n  participants={\n    [\n      {\n        id: '1',\n        title: 'Esra'\n      },\n      {\n        id: '2',\n        title: 'Abdurrahman'\n      },\n    ]\n  }\n  dataSource={\n    [\n      {\n        id: '1',\n        avatar: 'https://avatars.githubusercontent.com/u/53093667?s=100&v=4',\n        message: \"Frontend Developer\",\n        title: 'Esra',\n        avatarFlexible: true,\n        date: new Date(),\n      },\n      {\n        id: '1',\n        avatar: 'https://avatars.githubusercontent.com/u/15075759?v=4',\n        message: \"Solution Architect\",\n        title: 'Abdurrahman',\n        avatarFlexible: true,\n        date: new Date(),\n      }\n    ]\n  }\n/>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result")),(0,i.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,i.kt)(s.MeetingMessage,{subject:"Example Meeting Message",title:"Meeting Message",date:new Date,dateString:null==(n=o.messageItem)?void 0:n.dateString,collapseTitle:"Info",participants:[{id:"1",title:"Esra"},{id:"2",title:"Abdurrahman"}],dataSource:[{id:"1",avatar:"https://avatars.githubusercontent.com/u/53093667?s=100&v=4",message:"Frontend Developer",title:"Esra",avatarFlexible:!0,date:new Date},{id:"1",avatar:"https://avatars.githubusercontent.com/u/15075759?v=4",message:"Solution Architect",title:"Abdurrahman",avatarFlexible:!0,date:new Date}],mdxType:"MeetingMessage"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { MessageBox } from \"react-chat-elements\"\n\nconst meetingData = {\n  subject: new Date().toString(),\n  title:\"Daily Meeting\",\n  date: new Date(),\n  dateString: new Date().toDateString,\n  collapseTitle:\"Info\",\n  participants:[\n      {\n        id: '1',\n        title: 'Kursat'\n      },\n      {\n        id: '2',\n        title: 'You'\n      },\n  ],\n  dataSource:\n    [\n      {\n        id: '1',\n        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',\n        message: \"Junior Developer\",\n        title: 'Kursat',\n        avatarFlexible: true,\n        date: new Date(),\n      }\n    ]\n}\n\n<MessageBox\n  position=\"left\"\n  title=\"Esra\"\n  type=\"meeting\"\n  meeting={meetingData}\n/>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result")),(0,i.kt)("div",{style:{color:"black"}},(0,i.kt)(g,{mdxType:"ExampleMeetingMessageComp"})),(0,i.kt)("h2",{id:"meeting-message-props"},"Meeting Message Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"default"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subject"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting messagee")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting title")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"date"),(0,i.kt)("td",{parentName:"tr",align:null},"new Date()"),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"collapseTitle"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting subtitle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participants"),(0,i.kt)("td",{parentName:"tr",align:null},"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting participant array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"moreItems"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"message more items")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"meeting list array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onClick"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"meeting message on click event (message(object) is returned)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMeetingTitleClick"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"meeting title message on click event (message(object) is returned)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMeetingVideoLinkClick"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"meeting video link message on click event (message(object) is returned)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMeetingMoreSelect"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"message list item onMeetingMoreSelect event, gets 3 parameters: message item, index of item, event")))))}N.isMDXComponent=!0}}]);