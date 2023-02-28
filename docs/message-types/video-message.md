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

### IVideoMessageProps [(extends IVideoMessage)](/docs/message-types/video-message#ivideomessage-extends-imessage)

| props      | default | type     | description                                  |
|------------|---------|----------|----------------------------------------------|
| onDownload | none    | function | video message onDownload function (optional) |
| onOpen     | none    | function | video message onOpen event (onClick)         |
| onLoad     | none    | function | video message onLoad event  (img)                 |
| onPhotoError    | none    | function | video message onPhotoError event (img)                 |

### IVideoMessage [(extends IMessage)](/docs/message-types/video-message#imessage-props)

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

## IMessage Props

| props        | default | type                                       | description                                                                            |
|--------------|---------|--------------------------------------------|----------------------------------------------------------------------------------------|
| id           | none    | string \| number                           | message id                                                                             |
| position     | none    | string                                     | message position                                                                       |
| text         | none    | string                                     | message text                                                                           |
| title        | none    | string                                     | message title                                                                          |
| focus        | none    | boolean                                    | message focus                                                                          |
| date         | none    | number \| Date                             | message date                                                                           |
| dateString   | none    | string                                     | message date string                                                                    |
| avatar       | none    | string                                     | message avatar                                                                         |
| titleColor   | none    | string                                     | message title color                                                                    |
| forwarded    | none    | boolean                                    | message forwarded                                                                      |
| replyButton  | none    | boolean                                    | message reply button                                                                   |
| removeButton | none    | boolean                                    | message remove button                                                                  |
| status       | none    | 'waiting'\| 'sent' \| 'received' \| 'read' | message status                                                                         |
| statusTitle  | none    | string                                     | message status title                                                                     |
| notch        | none    | boolean                                    | message notch                                                                          |
| copiableDate | none    | boolean                                    | message copiable date                                                                  |
| retracted    | none    | boolean                                    | message retracted                                                                      |
| className    | none    | string                                     | message className                                                                      |
| letterItem   | none    | object                                     | message letterItem contains id:string, letter:ReactChild                               |
| reply        | none    | object \| any                              | message reply should be both any and object (contains message:string, photoURL:string) |
| type         | none    | string                                     | message type                                                                           |