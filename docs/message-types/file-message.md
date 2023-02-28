---
sidebar_position: 5
custom_edit_url: null
---
import { MessageBox } from "react-chat-elements";

# File Message

## Message Box

:::tip Message Box

It is enough to define a message component with using "MessageBox".

However you have to specify type for them.

:::

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position="left"
    type="file"
    title="Kursat"
    text="Here is an example of file message"
    data={{
      uri: "https://www.sample-videos.com/pdf/Sample-pdf-5mb.pdf",
      status: {
        click: false,
        loading: 0,
      },
    }}
  />
</div>

## Example Usage

```jsx
import { MessageBox } from "react-chat-elements";

<MessageBox
  position={"left"}
  type={"file"}
  title={"Esra"}
  text="Sample PDF"
  data={{
    uri: "https://www.sample-videos.com/pdf/Sample-pdf-5mb.pdf",
    status: {
      click: false,
      loading: 0,
    },
  }}
/>
```

**Result**

<MessageBox
  position="left"
  type="file"
  title="Esra"
  text="Sample PDF"
  data={{
    uri: "https://www.sample-videos.com/pdf/Sample-pdf-5mb.pdf",
    status: {
      click: false,
      loading: 0,
    },
  }}
/>


## File Message Props

### IFileMessageProps [(extends IFileMessage)](/docs/message-types/file-message#ifilemessage-extends-imessage)

| props      | default | type     | description                         |
|------------|---------|----------|-------------------------------------|
| onDownload | none    | function | file message onDownload function    |
| onOpen     | none    | function | file message onOpen event (onClick) |


### IFileMessage [(extends IMessage)](/docs/message-types/file-message#imessage-props)

| props     | default | type   | description                                                                                                                                                              |
|-----------|---------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| data      | none    | object | contains name, extension, size, id, uri, status (below)                                                                                                                  |
| name      | none    | string | name must be in data object (optional)                                                                                                                                   |
| extension | none    | string | extension must be in data object (optional)                                                                                                                              |
| size      | none    | string | size must be in data object (optional)                                                                                                                                   |
| id        | none    | string | id must be in data object (optional)                                                                                                                                     |
| uri       | none    | string | uri must be in data object (optional)                                                                                                                                    |
| status    | none    | object | status must be in data object (optional) and contains autoDownload:boolean, error:boolean,  download:Function\|boolean, click:Function\|boolean, loading:boolean\|number |

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