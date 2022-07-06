"use strict";(self.webpackChunkrce_docs=self.webpackChunkrce_docs||[]).push([[614],{4887:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),s=a(9793),i=["components"],d={sidebar_position:4,custom_edit_url:null},o="Audio Message",m={unversionedId:"message-types/audio-message",id:"message-types/audio-message",title:"Audio Message",description:"Message Box",source:"@site/docs/message-types/audio-message.md",sourceDirName:"message-types",slug:"/message-types/audio-message",permalink:"/docs-react-chat-elements/docs/message-types/audio-message",editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Video Message",permalink:"/docs-react-chat-elements/docs/message-types/video-message"},next:{title:"File Message",permalink:"/docs-react-chat-elements/docs/message-types/file-message"}},p={},g=[{value:"Message Box",id:"message-box",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Audio Message Props",id:"audio-message-props",level:2},{value:"IAudioMessageProps (extends IAudioMessage)",id:"iaudiomessageprops-extends-iaudiomessage",level:3},{value:"IAudioMessage (extends IMessage)",id:"iaudiomessage-extends-imessage",level:3},{value:"IMessage Props",id:"imessage-props",level:2}],u={toc:g};function k(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audio-message"},"Audio Message"),(0,r.kt)("h2",{id:"message-box"},"Message Box"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Message Box")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'It is enough to define a message component with using "MessageBox".'),(0,r.kt)("p",{parentName:"div"},"However you have to specify type for them."))),(0,r.kt)("div",{style:{color:"black",margin:"50px 0px"}},(0,r.kt)(s._p,{position:"left",type:"audio",title:"Esra",data:{audioURL:"https://www.sample-videos.com/audio/mp3/wave.mp3"},mdxType:"MessageBox"})),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { MessageBox } from "react-chat-elements";\n\n<MessageBox\n    position={"left"}\n    type={"audio"}\n    title={"Emre"}\n    data={{\n      audioURL: "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3",\n    }}\n  />\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result")),(0,r.kt)(s._p,{position:"left",type:"audio",title:"Emre",data:{audioURL:"https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3"},mdxType:"MessageBox"}),(0,r.kt)("h2",{id:"audio-message-props"},"Audio Message Props"),(0,r.kt)("h3",{id:"iaudiomessageprops-extends-iaudiomessage"},"IAudioMessageProps ",(0,r.kt)("a",{parentName:"h3",href:"/docs/message-types/audio-message#iaudiomessage-extends-imessage"},"(extends IAudioMessage)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audioProps"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"[key: string]",": unknown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"audio message customStyle")))),(0,r.kt)("h3",{id:"iaudiomessage-extends-imessage"},"IAudioMessage ",(0,r.kt)("a",{parentName:"h3",href:"/docs/message-types/audio-message#imessage-props"},"(extends IMessage)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"contains audioURL, audioType, controlsList (below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audioURL"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"audioURL must be in data object (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audioType"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"'audio/mp3' ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"audioType must be in data object (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"controlsList"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"controlsList must be in data object (optional)")))),(0,r.kt)("h2",{id:"imessage-props"},"IMessage Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"props"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:null},"message id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focus"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"message focus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," Date"),(0,r.kt)("td",{parentName:"tr",align:null},"message date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateString"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message date string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message avatar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"titleColor"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message title color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forwarded"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"message forwarded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replyButton"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"message reply button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeButton"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"message remove button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"'waiting'","|"," 'sent' ","|"," 'received' ","|"," 'read'"),(0,r.kt)("td",{parentName:"tr",align:null},"message status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notch"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"message notch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copiableDate"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"message copiable date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retracted"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"message retracted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message className")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"letterItem"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"message letterItem contains id:string, letter:ReactChild")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reply"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"object ","|"," any"),(0,r.kt)("td",{parentName:"tr",align:null},"message reply should be both any and object (contains message:string, photoURL:string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"message type")))))}k.isMDXComponent=!0}}]);