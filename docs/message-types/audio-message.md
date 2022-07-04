---
sidebar_position: 4
custom_edit_url: null
---
import { MessageBox } from "react-chat-elements";

# Audio Message

## Message Box

:::tip Message Box

It is enough to define a message component with using "MessageBox".

However you have to specify type for them.

:::

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"audio"}
    title={"Esra"}
    data={{
        audioURL: "https://www.sample-videos.com/audio/mp3/wave.mp3",
    }}
  />
</div>

## Example Usage

```jsx
import { MessageBox } from "react-chat-elements";

<MessageBox
    position={"left"}
    type={"audio"}
    title={"Emre"}
    data={{
      audioURL: "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3",
    }}
  />
```

**Result**

<MessageBox
    position={"left"}
    type={"audio"}
    title={"Emre"}
    data={{
        audioURL: "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3",
    }}
  />


## Audio Message Props

### IAudioMessageProps [(extends IAudioMessage)](/docs/message-types/audio-message#iaudiomessage-extends-imessage)

| props       | default | type   | description               |
|-------------|---------|--------|---------------------------|
| audioProps  | none    | object | [key: string]: unknown    |
| customStyle | none    | -      | audio message customStyle |

### IAudioMessage (extends IMessage)

| props        | default | type                  | description                                        |
|--------------|---------|-----------------------|----------------------------------------------------|
| data         | none    | object                | contains audioURL, audioType, controlsList (below) |
| audioURL     | none    | string                | audioURL must be in data object (optional)         |
| audioType    | none    | 'audio/mp3' \| string | audioType must be in data object (optional)        |
| controlsList | none    | string                | controlsList must be in data object (optional)     |

## MessageBox Props


| prop                    | default    | type                 | description                                                                                        |
| ----------------------- | ---------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| id                      | i (index)  | string               | message box id                                                                                     |
| position                | left       | string               | message box position                                                                               |
| type                    | text       | string               | message type (text, photo, file, location, spotify, video, audio)                                  |
| text                    | none       | string               | message text                                                                                       |
| title                   | none       | string               | message title                                                                                      |
| titleColor              | none       | string(color)        | message title color                                                                                |
| data                    | {}         | object               | message data                                                                                       |
| date                    | new Date() | Date                 | message date                                                                                       |
| dateString              | none       | string               | message represents dateString or timeagojs(now, date)                                              |
| onClick                 | none       | function             | message on click (message(object) is returned)                                                     |
| onOpen                  | none       | function             | message on open (file or photo) (message(object) is returned)                                      |
| onDownload              | none       | function             | message on download (file or photo) (message(object) is returned)                                  |
| onLoad                  | none       | function             | message on load photo                                                                              |
| onPhotoError            | none       | function             | message on error photo                                                                             |
| onTitleClick            | none       | function             | message title on click event                                                                       |
| onForwardClick          | none       | function             | message forward on click event                                                                     |
| onReplyClick            | none       | function             | message reply on click event                                                                       |
| onMeetingMessageClick   | none       | function             | meeting message on click event                                                                     |
| onMeetingTitleClick     | none       | function             | meeting title message on click event                                                               |
| onMeetingVideoLinkClick | none       | function             | meeting video link message on click event                                                          |
| onReplyMessageClick     | none       | function             | reply message on click event                                                                       |
| onRemoveMessageClick    | none       | function             | message remove on click event                                                                      |
| onMeetingMoreSelect     | none       | function             | message list item onMeetingMoreSelect event, gets 3 parameters: message item, index of item, event |
| onMeetingLinkClick      | none       | function             | meeting link on click event                                                                        |
| onContextMenu           | none       | function             | message contextmenu click event                                                                    |
| forwarded               | none       | boolean              | message forward icon                                                                               |
| replyButton             | none       | boolean              | message reply icon                                                                                 |
| removeButton            | none       | boolean              | message remove icon                                                                                |
| status                  | none       | string               | message status info (waiting, sent, received, read)                                                |
| notch                   | true       | boolean              | message box notch                                                                                  |
| avatar                  | none       | url                  | message box avatar url                                                                             |
| renderAddCmp            | none       | function (component) | adding custom components to message box                                                            |
| copiableDate            | false      | boolean              | message box date text copiable                                                                     |
| focus                   | false      | boolean              | used in message focus feature in MessageList component, makes style of the component focused       |
| onMessageFocused        | none       | function             | makes focus value false after the message becomes focus                                            |
| reply                   | none       | object               | reply data                                                                                         |
| retracted               | none       | boolean              | message deleted or retracted                                                                       |