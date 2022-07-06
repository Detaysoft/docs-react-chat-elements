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

### MessageType List

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


### IMessageBoxProps

| props                   | default | type            | description                         |
|-------------------------|---------|-----------------|-------------------------------------|
| onMessageFocused        | none    | -               | message box focused                 |
| renderAddCmp            | none    | React.Component | message box renderAddCmp            |
| onClick                 | none    | function        | message box onClick event           |
| onOpen                  | none    | function        | message box on open event           |
| onPhotoError            | none    | function        | message box onPhotoError            |
| onContextMenu           | none    | function        | message box onContextMenu           |
| onForwardClick          | none    | function        | message box onForwardClick          |
| onReplyClick            | none    | function        | message box onReplyClick            |
| onRemoveMessageClick    | none    | function        | message box onRemoveMessageClick    |
| onTitleClick            | none    | function        | message box onTitleClick            |
| onReplyMessageClick     | none    | function        | message box onReplyMessageClick     |
| onMeetingMessageClick   | none    | function        | message box onMeetingMessageClick   |
| onDownload              | none    | function        | message box onDownload              |
| onMeetingMoreSelect     | none    | function        | message box onMeetingMoreSelect     |
| onMeetingLinkClick      | none    | function        | message box onMeetingLinkClick      |
| onMeetingTitleClick     | none    | function        | message box onMeetingTitleClick     |
| onMeetingVideoLinkClick | none    | function        | message box onMeetingVideoLinkClick |
