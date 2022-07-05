---
sidebar_position: 3
custom_edit_url: null
---
import { MessageBox } from "react-chat-elements";

# Video Message

## Message Box

:::tip Message Box

It is enough to define a message component with using "MessageBox".

However you have to specify type for them.

:::

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"video"}
    title={"Emre"}
    data={{
        videoURL: "https://www.w3schools.com/html/mov_bbb.mp4",
        status: {
          click: true,
          loading: 0.5,
          download: true,
        },
    }}
  />
</div>

## Example Usage

```jsx
import { MessageBox } from "react-chat-elements"

<MessageBox
  position={"left"}
  type={"video"}
  title={"Kursat"}
  data={{
      videoURL: "https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
      status: {
        click: true,
        loading: 0.5,
        download: true,
      },
  }}
/>
```

**Result**

<MessageBox
  position={"left"}
  type={"video"}
  title={"Kursat"}
  data={{
      videoURL: "https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
      status: {
        click: true,
        loading: 0.5,
        download: true,
      },
  }}
/>


## Video Message Props

### IVideoMessageProps (extends IVideoMessage)

| props      | default | type     | description                                  |
|------------|---------|----------|----------------------------------------------|
| onDownload | none    | function | video message onDownload function (optional) |
| onOpen     | none    | function | video message onOpen event (onClick)         |
| onLoad     | none    | function | video message onLoad event                   |
| onError    | none    | function | video message onError event                  |

### IVideoMessage (extends IMessage)

| props        | default | type   | description                                                                                                                                                              |
|--------------|---------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| controlsList | none    | string | video message controls list                                                                                                                                              |
| data         | none    | object | contains videoURL, width, height, alt, uri, status (below)                                                                                                               |
| videoURL     | none    | string | videoURL must be in data object (optional)                                                                                                                               |
| width        | none    | number | width must be in data object (optional)                                                                                                                                  |
| height       | none    | number | height must be in data object (optional)                                                                                                                                 |
| alt          | none    | string | alt must be in data object (optional)                                                                                                                                    |
| uri          | none    | string | uri must be in data object (optional)                                                                                                                                    |
| status       | none    | object | status must be in data object (optional) and contains autoDownload:boolean, error:boolean,  download:Function\|boolean, click:Function\|boolean, loading:boolean\|number |

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