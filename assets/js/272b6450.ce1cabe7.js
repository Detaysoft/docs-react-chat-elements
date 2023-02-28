"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[4],{4385:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return o}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(9793),m=["components"],s={sidebar_position:9,custom_edit_url:null},g="Meeting Message",p={unversionedId:"meeting-components/meeting-message",id:"meeting-components/meeting-message",title:"Meeting Message",description:"Meeting Message Component",source:"@site/docs/meeting-components/meeting-message.md",sourceDirName:"meeting-components",slug:"/meeting-components/meeting-message",permalink:"/docs-react-chat-elements/docs/meeting-components/meeting-message",editUrl:null,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Meeting List",permalink:"/docs-react-chat-elements/docs/meeting-components/meeting-list"}},d={},o=[{value:"Meeting Message Component",id:"meeting-message-component",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Meeting Message with Message Box",id:"meeting-message-with-message-box",level:2},{value:"Meeting Message Props (extends IMessage)",id:"meeting-message-props-extends-imessage",level:2},{value:"MeetingMessage participants Props",id:"meetingmessage-participants-props",level:3},{value:"MeetingMessage moreItems Props",id:"meetingmessage-moreitems-props",level:3},{value:"MeetingMessage (Dropdown) Items Icon Props",id:"meetingmessage-dropdown-items-icon-props",level:3},{value:"MeetingMessage dataSource Props",id:"meetingmessage-datasource-props",level:3},{value:"MeetingMessage dataSource event Props",id:"meetingmessage-datasource-event-props",level:3},{value:"MeetingMessage dataSource record Props",id:"meetingmessage-datasource-record-props",level:3},{value:"IMessage Props",id:"imessage-props",level:2}],u={toc:o};function k(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"meeting-message"},"Meeting Message"),(0,l.kt)("h2",{id:"meeting-message-component"},"Meeting Message Component"),(0,l.kt)("p",null,"Message announcing the meetings can be defined."),(0,l.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,l.kt)(i.J4,{subject:"BNet Department",title:"Detaysoft Daily",date:new Date,dateString:(new Date).toDateString,collapseTitle:"Info",participants:[{id:"1",title:"Kursat"},{id:"1",title:"Emre"}],dataSource:[{id:"1",avatar:"https://avatars.githubusercontent.com/u/41473129?v=4",message:"Team Lead",title:"Emre",avatarFlexible:!0,date:new Date},{id:"2",avatar:"https://avatars.githubusercontent.com/u/80540635?v=4",message:"Junior Developer",title:"Kursat",avatarFlexible:!0,date:new Date}],mdxType:"MeetingMessage"})),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { MeetingMessage } from \"react-chat-elements\";\n\n<MeetingMessage\n  subject=\"Example Meeting Message\"\n  title=\"Meeting Message\"\n  date={new Date()}\n  dateString={new Date().toDateString}\n  collapseTitle=\"Info\"\n  participants={\n    [\n      {\n        id: '1',\n        title: 'Esra'\n      },\n      {\n        id: '2',\n        title: 'Abdurrahman'\n      },\n    ]\n  }\n  dataSource={\n    [\n      {\n        id: '1',\n        avatar: 'https://avatars.githubusercontent.com/u/53093667?s=100&v=4',\n        message: \"Frontend Developer\",\n        title: 'Esra',\n        avatarFlexible: true,\n        date: new Date(),\n      },\n      {\n        id: '1',\n        avatar: 'https://avatars.githubusercontent.com/u/15075759?v=4',\n        message: \"Solution Architect\",\n        title: 'Abdurrahman',\n        avatarFlexible: true,\n        date: new Date(),\n      }\n    ]\n  }\n/>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("div",{style:{color:"black"}},(0,l.kt)(i.J4,{subject:"Example Meeting Message",title:"Meeting Message",date:new Date,dateString:(new Date).toDateString,collapseTitle:"Info",participants:[{id:"1",title:"Esra"},{id:"2",title:"Abdurrahman"}],dataSource:[{id:"1",avatar:"https://avatars.githubusercontent.com/u/53093667?s=100&v=4",message:"Frontend Developer",title:"Esra",avatarFlexible:!0,date:new Date},{id:"1",avatar:"https://avatars.githubusercontent.com/u/15075759?v=4",message:"Solution Architect",title:"Abdurrahman",avatarFlexible:!0,date:new Date}],mdxType:"MeetingMessage"})),(0,l.kt)("h2",{id:"meeting-message-with-message-box"},"Meeting Message with Message Box"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { MessageBox } from \"react-chat-elements\";\n\n<MessageBox\n  type=\"meeting\"\n  subject=\"Example Meeting Message\"\n  title=\"Meeting Message\"\n  date={new Date()}\n  dateString={new Date().toDateString}\n  collapseTitle=\"Info\"\n  participants={\n    [\n      {\n        id: '1',\n        title: 'Esra'\n      },\n      {\n        id: '2',\n        title: 'Abdurrahman'\n      },\n    ]\n  }\n  dataSource={\n    [\n      {\n        id: '1',\n        avatar: 'https://avatars.githubusercontent.com/u/53093667?s=100&v=4',\n        message: \"Frontend Developer\",\n        title: 'Esra',\n        avatarFlexible: true,\n        date: new Date(),\n      },\n      {\n        id: '1',\n        avatar: 'https://avatars.githubusercontent.com/u/15075759?v=4',\n        message: \"Solution Architect\",\n        title: 'Abdurrahman',\n        avatarFlexible: true,\n        date: new Date(),\n      }\n    ]\n  }\n/>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("div",{style:{color:"black"}},(0,l.kt)(i._p,{type:"meeting",subject:"Example Meeting Message",title:"Meeting Message",date:new Date,dateString:(new Date).toDateString,collapseTitle:"Info",participants:[{id:"1",title:"Esra"},{id:"2",title:"Abdurrahman"}],dataSource:[{id:"1",avatar:"https://avatars.githubusercontent.com/u/53093667?s=100&v=4",message:"Frontend Developer",title:"Esra",avatarFlexible:!0,date:new Date},{id:"1",avatar:"https://avatars.githubusercontent.com/u/15075759?v=4",message:"Solution Architect",title:"Abdurrahman",avatarFlexible:!0,date:new Date}],mdxType:"MessageBox"})),(0,l.kt)("h2",{id:"meeting-message-props-extends-imessage"},"Meeting Message Props ",(0,l.kt)("a",{parentName:"h2",href:"/docs/meeting-components/meeting-message#imessage-props"},"(extends IMessage)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subject"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting messagee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"new Date()"),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateString"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting date string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collapseTitle"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting subtitle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/meeting-components/meeting-message#meetingmessage-participants-props"},"participants")),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting participants array (see details below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"participantsLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting participants count limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/meeting-components/meeting-message#meetingmessage-moreitems-props"},"moreItems")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"message more items (see details below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/meeting-components/meeting-message#meetingmessage-datasource-props"},"dataSource")),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"meeting list array         (see details below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"meeting message on click event (message(object) is returned)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMeetingTitleClick"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"meeting title message on click event (message(object) is returned)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMeetingVideoLinkClick"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"meeting video link message on click event (message(object) is returned)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMeetingMoreSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"message list item onMeetingMoreSelect event, gets 3 parameters: message item, index of item, event")))),(0,l.kt)("h3",{id:"meetingmessage-participants-props"},"MeetingMessage participants Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},"participant id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"participant title")))),(0,l.kt)("h3",{id:"meetingmessage-moreitems-props"},"MeetingMessage moreItems Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage (dropdown) text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/meeting-components/meeting-message#meetingmessage-dropdown-items-icon-props"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage (dropdown) icon (see details below)")))),(0,l.kt)("h3",{id:"meetingmessage-dropdown-items-icon-props"},"MeetingMessage (Dropdown) Items Icon Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"icon style float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"icon color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"font size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"component"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactChild"),(0,l.kt)("td",{parentName:"tr",align:null},"icon component")))),(0,l.kt)("h3",{id:"meetingmessage-datasource-props"},"MeetingMessage dataSource Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage message of data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage avatar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Date"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateString"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage dateString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/meeting-components/meeting-message#meetingmessage-datasource-event-props"},"event")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage event object (see details below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/meeting-components/meeting-message#meetingmessage-datasource-record-props"},"record")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"MeetingMessage record object (see details below)")))),(0,l.kt)("h3",{id:"meetingmessage-datasource-event-props"},"MeetingMessage dataSource event Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"event title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatars"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"Avatar component props (see Avatar docs)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatarsLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"event avatarsLimit")))),(0,l.kt)("h3",{id:"meetingmessage-datasource-record-props"},"MeetingMessage dataSource record Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"prop"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"record avatar path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"record title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"savedBy"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"record savedBy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"record time")))),(0,l.kt)("h2",{id:"imessage-props"},"IMessage Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"props"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:null},"message id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"message focus")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Date"),(0,l.kt)("td",{parentName:"tr",align:null},"message date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateString"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message date string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message avatar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"titleColor"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message title color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forwarded"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"message forwarded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replyButton"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"message reply button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removeButton"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"message remove button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"'waiting'","|"," 'sent' ","|"," 'received' ","|"," 'read'"),(0,l.kt)("td",{parentName:"tr",align:null},"message status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusTitle"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message status title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notch"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"message notch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"copiableDate"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"message copiable date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retracted"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"message retracted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message className")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"letterItem"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"message letterItem contains id:string, letter:ReactChild")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reply"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"object ","|"," any"),(0,l.kt)("td",{parentName:"tr",align:null},"message reply should be both any and object (contains message:string, photoURL:string)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"message type")))))}k.isMDXComponent=!0}}]);