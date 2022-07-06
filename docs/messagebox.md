---
sidebar_position: 3
custom_edit_url: null
---

import { MessageBox } from "react-chat-elements"

# Message Box

## Message Box Component

<div >
  <MessageBox
    position='left'
    title='Emre'
    type='text'
    text="What are you doing ?"
    date={new Date()}
  />
</div>

## Example Usage

```jsx
import { MessageBox } from "react-chat-elements";

<MessageBox
position='left'
title='Burhan'
type='text'
text="Hi there !"
date={new Date()}
replyButton={true}
/>

<MessageBox
position="right"
title="Emre"
type="meetingLink"
text="Click to join the meeting"
date={new Date()}
/>
```

**Result**

<MessageBox
position='left'
title='Burhan'
type='text'
text="Hi there !"
date={new Date()}
replyButton={true}
/>

<MessageBox
position="right"
title="Emre"
type="meetingLink"
text="Click to join the meeting"
date={new Date()}
/>

## MessageBox Props

| prop                    | default | type     | description                                                                                                                   |
|-------------------------|---------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| position                | none    | string   | MessageBox position (eg:left,right)                                                                                           |
| text                    | none    | string   | MessageBox text                                                                                                               |
| title                   | none    | string   | MessageBox title                                                                                                              |
| type                    | none    | string   | MessageBox message type 'location', 'photo', 'video',  'spotify', 'audio', 'meetingLink', 'file', 'text', 'system', 'meeting' |
| focus                   | none    | boolean  | MessageBox focus status                                                                                                       |
| date                    | none    | date     | MessageBox date                                                                                                               |
| dateString              | none    | string   | MessageBox dateString                                                                                                         |
| avatar                  | none    | string   | MessageBox avatar                                                                                                             |
| titleColor              | none    | string   | MessageBox title color                                                                                                        |
| forwarded               | none    | boolean  | MessageBox forwarded status                                                                                                   |
| status                  | none    | string   | MessageBox status (eg:waiting,sent,received,read)                                                                             |
| replyButton             | none    | boolean  | MessageBox replyButton                                                                                                        |
| removeButton            | none    | boolean  | MessageBox removeButton                                                                                                       |
| notch                   | none    | boolean  | MessageBox notch status                                                                                                       |
| retracted               | none    | boolean  | MessageBox retracted status                                                                                                   |
| letterItem              | none    | object   | MessageBox to be a letter                                                                                                     |
| onClick                 | none    | function | MessageBox on click (message(object) is returned                                                                              |
| onOpen                  | none    | function | MessageBox on open (file or photo)  (message(object) is returned)                                                             |
| onDownload              | none    | function | MessageBox on download (file or photo) (message(object)  is returned)                                                         |
| onLoad                  | none    | function | MessageBox on load photo                                                                                                      |
| onPhotoError            | none    | function | MessageBox on error photo                                                                                                     |
| onMeetingLinkClick      | none    | function | MessageBox meeting link on click event                                                                                        |
| onForwardClick          | none    | function | MessageBox forward on click event                                                                                             |
| onTitleClick            | none    | function | MessageBox title on click event                                                                                               |
| onReplyClick            | none    | function | MessageBox reply on click event                                                                                               |
| onMeetingMessageClick   | none    | function | MessageBox meetingmessage on click event                                                                                      |
| onMeetingTitleClick     | none    | function | MessageBox meeting title on click event                                                                                       |
| onMeetingVideoLinkClick | none    | function | MessageBox meeting video link on click event                                                                                  |
| onReplyMessageClick     | none    | function | Reply message on click event                                                                                                  |
| onRemoveMessageClick    | none    | function | MessageBox message remove on click event                                                                                      |
| onMeetingMoreSelect     | none    | function | message list item onMeetingMoreSelect event, gets 3 parameters: message item, index of item, event                            |
| onContextMenu           | none    | function | Message contextmenu click event                                                                                               |