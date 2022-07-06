---
sidebar_position: 5
custom_edit_url: null
---
import { MessageList } from 'react-chat-elements'

# Message List

## List Messages

Of course we need to list the messages. Using the Message List component is not difficult at all.

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageList
	className='message-list'
	lockable={true}
	toBottomHeight={'100%'}
	dataSource={[
	    {
	      position:"left",
        type:"text",
        title:"Emre",
        text:"Hi there !",
	    },
      {
	      position:"left",
        type:"text",
        title:"Esra",
        text:"Hii !",
	    },
      {
	      position:"right",
        type:"text",
        title:"Kursat",
        text:"Heyy ! How are you ?",
	    },
	]} />
</div>

## Example Usage

```jsx
import { MessageList } from "react-chat-elements"

<MessageList
	className='message-list'
	lockable={true}
	toBottomHeight={'100%'}
	dataSource={[
    {
      position:"left",
      type:"text",
      title:"Kursat",
      text:"Give me a message list example !",
    },
    {
      position:"right",
      type:"text",
      title:"Emre",
      text:"That's all.",
    },
	]}
/>
```

**Result**

<div style={{ color:"black"}}>
  <MessageList
    className='message-list'
    lockable={true}
    toBottomHeight={'100%'}
    dataSource={[
      {
        position:"left",
        type:"text",
        title:"Kursat",
        text:"Give me a message list example !",
      },
      {
        position:"right",
        type:"text",
        title:"Emre",
        text:"That's all.",
      },
    ]} />
</div>

## Message List Props


| prop                    | default | type                       | description                                                                                                                                                                                                                                                                                                                |
|-------------------------|---------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| referance               | none    | object                     | message list ref                                                                                                                                                                                                                                                                                                           |
| className               | none    | string                     | optional message list className                                                                                                                                                                                                                                                                                            |
| customProps             | none    | object                     | message list customProps {[key:string]: unknown}                                                                                                                                                                                                                                                                           |
| children                | none    | ReactChild                 | message list children                                                                                                                                                                                                                                                                                                      |
| isShowChild             | none    | boolean                    | message list child show control                                                                                                                                                                                                                                                                                            |
| [dataSource](/docs/messagelist#messagelist-datasource-props)              | []      | array                      | message box array (see details below)                                                                                                                                                                                                                                                                                                         |
| lockable                | false   | boolean                    | It locks to scroll position when the dataSource has been changed                                                                                                                                                                                                                                                           |
| toBottomHeight          | 300     | int or string(only '100%') | If the toBottomHeight property's value higher than bottom value of the scrollbar when the data source has been changed Scrollbar goes to bottom at the end of the page. If the toBottomHeight property's value has been set '100%', scrollbar goes to bottom at the end of the page when the data source has been changed. |
| onClick                 | none    | function                   | message list item on click (message(object) is returned)                                                                                                                                                                                                                                                                   |
| onOpen                  | none    | function                   | message list item on open (file or photo) (message(object) is returned)                                                                                                                                                                                                                                                    |
| onDownload              | none    | function                   | message list item on download (file or photo) (message(object) is returned)                                                                                                                                                                                                                                                |
| onScroll                | none    | function                   | message list onScroll event                                                                                                                                                                                                                                                                                                |
| onForwardClick          | none    | function                   | message list item onForwardClick event                                                                                                                                                                                                                                                                                     |
| onReplyClick            | none    | function                   | message list item onReplyClick event                                                                                                                                                                                                                                                                                       |
| onReplyMessageClick     | none    | function                   | message list item onReplyMessageClick event                                                                                                                                                                                                                                                                                |
| downButton              | true    | boolean                    | message list scroll to bottom button                                                                                                                                                                                                                                                                                       |
| downButtonBadge         | none    | boolean                    | message list downButton badge content                                                                                                                                                                                                                                                                                      |
| onDownButtonClick       | none    | function                   | message list onDownButtonClick                                                                                                                                                                                                                                                                                             |
| onContextMenu           | none    | function                   | message list item onContextMenu event, gets 3 parameters: message item, index of item, event                                                                                                                                                                                                                               |
| onPhotoError            | none    | function                   | message list item on error photo                                                                                                                                                                                                                                                                                           |
| onMeetingMoreSelect     | none    | function                   | message list on meeting more select event                                                                                                                                                                                                                                                                                  |
| onMessageFocused        | none    | function                   | message list on message focus event                                                                                                                                                                                                                                                                                        |
| onTitleClick            | none    | function                   | message list on title click event                                                                                                                                                                                                                                                                                          |
| onRemoveMessageClick    | none    | function                   | message list on remove message click event                                                                                                                                                                                                                                                                                 |
| onMeetingMessageClick   | none    | function                   | message list on meeting message click event                                                                                                                                                                                                                                                                                |
| onMeetingTitleClick     | none    | function                   | message list on meeting title click event                                                                                                                                                                                                                                                                                  |
| onMeetingVideoLinkClick | none    | function                   | message list on meeting video link click event                                                                                                                                                                                                                                                                             |
| onMeetingLinkClick      | none    | function                   | message list on meeting link click event                                                                                                                                                                                                                                                                                   |


### MessageList dataSource Props


| type        | props details              |
|-------------|----------------------------|
| text        | [Text Message Props](/docs/message-types/text-message#text-message-props-extends-imessage)         |
| location    | [Location Message Props](/docs/message-types/location-message#location-message-props)     |
| photo       | [Photo Message Props](/docs/message-types/photo-message#photo-message-props)        |
| video       | [Video Message Props](/docs/message-types/video-message#video-message-props)        |
| meeting     | [Meeting Message Props](/docs/message-types/meeting-message#meeting-message-props-extends-imessage)      |
| system      | [System Message Props](/docs/message-types/system-message#system-message-props-extends-imessage)       |
| file        | [File Message Props](/docs/message-types/file-message#file-message-props)         |
| meetingLink | [Meeting Link Message Props](/docs/meeting-components/meeting-link#meeting-link-props) |
| audio       | [Audio Message Props](/docs/message-types/audio-message#audio-message-props)        |
| spotify     | [Spotify Message Props](/docs/message-types/spotify-message#spotifymessage-props-extends-imessage)      |