---
sidebar_position: 2
custom_edit_url: null
---
import { MessageBox } from "react-chat-elements";

# Photo Message

## Message Box

:::tip Message Box

It is enough to define a message component with using "MessageBox".

However you have to specify type for them.

:::

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"photo"}
    title={"Emre"}
    data={{
        uri: "https://picsum.photos/200/150",
    }}
  />
  <MessageBox
    position={"right"}
    type={"photo"}
    title={"Esra"}
    data={{
        uri: "https://picsum.photos/200/100",
    }}
  />
</div>

## Example Usage

```jsx
import { MessageBox } from "react-chat-elements"

<MessageBox
  position={"left"}
  type={"photo"}
  title={"Kursat"}
  data={{
      uri: "https://picsum.photos/200/200",
  }}
/>
```

**Result**

<MessageBox
  position={"left"}
  type={"photo"}
  title={"Kursat"}
  data={{
      uri: "https://picsum.photos/200/200",
  }}
/>

## Photo Message Props

### IPhotoMessageProps [(extends IPhotoMessage)](/docs/message-types/photo-message#iphotomessage-extends-imessage)

| props        | default | type     | description                                    |
|--------------|---------|----------|------------------------------------------------|
| onDownload   | none    | function | photo message onDownload function (optional)   |
| onOpen       | none    | function | photo message onOpen function (optional)       |
| onLoad       | none    | function | photo message onLoad function (optional)       |
| onPhotoError | none    | function | photo message onPhotoError function (optional) |

### IPhotoMessage [(extends IMessage)](/docs/message-types/photo-message#imessage-props)

| props  | default | type   | description                                                                                                                                                    |
|--------|---------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data   | none    | object | contains uri, width, height, alt, status                                                                                                                       |
| uri    | none    | string | uri must be in data object                                                                                                                                     |
| width  | none    | number | width must be in data object                                                                                                                                   |
| height | none    | number | height must be in data object                                                                                                                                  |
| alt    | none    | string | alt must be in data object                                                                                                                                     |
| status | none    | object | status must be in data object and contains autoDownload:boolean,  error:boolean, download:Function\|boolean, click:Function\|boolean,  loading:boolean\|number |

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