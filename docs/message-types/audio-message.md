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

### IAudioMessage [(extends IMessage)](/docs/message-types/audio-message#imessage-props)

| props        | default | type                  | description                                        |
|--------------|---------|-----------------------|----------------------------------------------------|
| data         | none    | object                | contains audioURL, audioType, controlsList (below) |
| audioURL     | none    | string                | audioURL must be in data object (optional)         |
| audioType    | none    | 'audio/mp3' \| string | audioType must be in data object (optional)        |
| controlsList | none    | string                | controlsList must be in data object (optional)     |

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
| notch        | none    | boolean                                    | message notch                                                                          |
| copiableDate | none    | boolean                                    | message copiable date                                                                  |
| retracted    | none    | boolean                                    | message retracted                                                                      |
| className    | none    | string                                     | message className                                                                      |
| letterItem   | none    | object                                     | message letterItem contains id:string, letter:ReactChild                               |
| reply        | none    | object \| any                              | message reply should be both any and object (contains message:string, photoURL:string) |
| type         | none    | string                                     | message type                                                                           |