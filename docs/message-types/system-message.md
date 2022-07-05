---
sidebar_position: 10
custom_edit_url: null
---
import { MessageBox } from "react-chat-elements"
import { SystemMessage } from "react-chat-elements"

# System Message

## Information Message

Sometimes you may want to show system messages in the message list.
<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"text"}
    title={"Emre"}
    text="Hi there !"
  />
  <MessageBox
    position={"left"}
    type={"text"}
    title={"Esra"}
    text="Hii !"
  />
  <MessageBox
    position={"right"}
    type={"text"}
    title={"Kursat"}
    text="Heyy ! How are you ?"
  />
  <SystemMessage text={"End of conversation"} />
</div>

## Example Usage

```jsx
import { SystemMessage } from "react-chat-elements"

<SystemMessage text={"Here is an example of system message."} />
```

**Result**

<div style={{ color:"black"}}>
  <SystemMessage text={"Here is an example of system message."} />
</div>


## System Message Props [(extends IMessage)](/docs/message-types/system-message#imessage-props)

| prop | default | type   | description  |
| ---- | ------- | ------ | ------------ |
| text | none    | string | message text |
| className | none    | string | System message className |


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