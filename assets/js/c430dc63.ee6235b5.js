"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[71],{93597:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=n(10073),s=["components"],m={sidebar_position:3},o="Meeting List",g={unversionedId:"meeting-components/meeting-list",id:"meeting-components/meeting-list",title:"Meeting List",description:"Meeting List Component",source:"@site/docs/meeting-components/meeting-list.md",sourceDirName:"meeting-components",slug:"/meeting-components/meeting-list",permalink:"/docs/meeting-components/meeting-list",editUrl:"https://github.com/Detaysoft/react-chat-elements/docs/meeting-components/meeting-list.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Meeting Link",permalink:"/docs/meeting-components/meeting-link"},next:{title:"Meeting Message",permalink:"/docs/meeting-components/meeting-message"}},u={},p=[{value:"Meeting List Component",id:"meeting-list-component",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Meeting List Props",id:"meeting-list-props",level:2}],c={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meeting-list"},"Meeting List"),(0,r.kt)("h2",{id:"meeting-list-component"},"Meeting List Component"),(0,r.kt)("p",null,"If you need the MeetingItem list, you can use the MeetingList component."),(0,r.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,r.kt)(l.MeetingList,{className:"meeting-list",dataSource:[{id:"1",subject:"Need Help !",date:new Date,avatars:[{src:"https://avatars.githubusercontent.com/u/80540635?v=4"}]},{id:"1",subject:"Daily",date:new Date,avatars:[{src:"https://avatars.githubusercontent.com/u/41473129?v=4"},{src:"https://avatars.githubusercontent.com/u/15075759?v=4"}]}],mdxType:"MeetingList"})),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { MeetingList } from \"react-chat-elements\"\n\n<MeetingList\n  className='meeting-list'\n  dataSource={[\n    {\n      id: '1',\n      subject: 'Calling',\n      date: new Date(),\n      avatars: [{\n          src: 'https://avatars.githubusercontent.com/u/80540635?v=4',\n      }]\n    },\n    {\n      id: '1',\n      subject: 'Calling',\n      date: new Date(),\n      avatars: [\n        {\n          src: 'https://avatars.githubusercontent.com/u/41473129?v=4',\n        },\n      ]\n    },\n  ]}\n/>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result")),(0,r.kt)("div",{style:{color:"black"}},(0,r.kt)(l.MeetingList,{className:"meeting-list",dataSource:[{id:"1",subject:"Emre's Calling",date:new Date,avatars:[{src:"https://avatars.githubusercontent.com/u/41473129?v=4"}]},{id:"1",subject:"Kursat's Calling",date:new Date,avatars:[{src:"https://avatars.githubusercontent.com/u/80540635?v=4"}]}],mdxType:"MeetingList"})),(0,r.kt)("h2",{id:"meeting-list-props"},"Meeting List Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"prop"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional meeting list className")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"meeting list array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"meeting list item on click (meeting(object) is returned)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMeetingClick"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"meeting list item on meeting click (meeting(object) is returned)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onShareClick"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"meeting list item on share click (meeting(object) is returned)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCloseClick"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"meeting list item on close click (meeting(object) is returned)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onContextMenu"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"meeting list item on context menu (meeting(object) is returned)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onAvatarError"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"meeting list item on error avatar img")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lazyLoadingImage"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"image path"),(0,r.kt)("td",{parentName:"tr",align:null},"lazy loading image")))))}d.isMDXComponent=!0}}]);