---
sidebar_position: 7
custom_edit_url: null
---
import { MessageBox } from "react-chat-elements";

# Reply Message

## Message Box

:::tip Message Box - Reply Status

Reply message can be use with given "reply" property at any time in your Message Box components.

:::

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"text"}
    title={"Emre"}
    text="Hi there !"
  />
  <MessageBox
    reply={{
      title: "Emre",
      titleColor: "#8717ae",
      message: "Hi there !",
    }}
    position={"right"}
    type={"text"}
    title="Kursat"
    text={
      "Hey ! How are you ?"
    }
  />
  <MessageBox
    reply={{
      title: "Kursat",
      titleColor: "#8717ae",
      message: "Hey ! How are you ?",
    }}
    position={"left"}
    type={"photo"}
    title={"Emre"}
    data={{
        uri: "https://picsum.photos/200/150",
    }}
  />
</div>

## Example Usage

```jsx
import { MessageBox } from "react-chat-elements"

<MessageBox
  reply={{
    title: "Emre",
    titleColor: "#8717ae",
    message: "Nice to meet you",
  }}
  position={"left"}
  type={"text"}
  title="Esra"
  text={
    "Nice to meet you too !"
  }
/>
```

**Result**

<div style={{ color:"black", marginBottom: "50px"}}>
  <MessageBox
    reply={{
      title: "Emre",
      titleColor: "#8717ae",
      message: "Nice to meet you",
    }}
    position={"left"}
    type={"text"}
    title="Esra"
    text={
      "Nice to meet you too !"
    }
  />
</div>

# Reply Message Props [(extends IMessage)](/docs/message-types/reply-message#imessage-props)

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