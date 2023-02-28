---
sidebar_position: 6
custom_edit_url: null
---
import { MessageBox } from "react-chat-elements";

# Location Message

## Message Box

:::tip Message Box

It is enough to define a message component with using "MessageBox".

However you have to specify type for them.

:::

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"location"}
    title={"Esra"}
    src="https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png"
    data={{
        latitude: "39.74047838338539",
        longitude: "37.01549275396775",
        mapURL: "https://www.google.com/maps/@39.7362086,37.0366986,14z"
    }}
  />
</div>

## Example Usage

```jsx
import { MessageBox } from "react-chat-elements";

<MessageBox
  position={"left"}
  type={"location"}
  title={"Esra"}
  src="https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_1280.png"
  data={{
      latitude: "39.74047838338539",
      longitude: "37.01549275396775"
  }}
/>
```

**Result**

<MessageBox
  position={"left"}
  type={"location"}
  title={"Esra"}
  src="https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_1280.png"
  data={{
      latitude: "39.74047838338539",
      longitude: "37.01549275396775"
  }}
/>


## Location Message Props

### ILocationMessageProps [(extends ILocationMessage)](/docs/message-types/location-message#ilocationmessage-extends-imessage)

| props       | default | type     | description                             |
|-------------|---------|----------|-----------------------------------------|
| markerColor | none    | string   | location message marker color           |
| zoom        | none    | string   | location message zoom                   |
| apiKey      | none    | string   | location message apiKey                 |
| className   | none    | string   | className for optional location message |
| src         | none    | string   | location message src                    |
| target      | none    | string   | location message target                 |
| href        | none    | string   | location message href                   |
| onOpen      | none    | function | location message onOpen event (onClick) |
| onError     | none    | function | location message (img) onError event    |


### ILocationMessage [(extends IMessage)](/docs/message-types/location-message#imessage-props)

| props     | default | type   | description                                             |
|-----------|---------|--------|---------------------------------------------------------|
| data      | none    | object | contains latitude, longitude, staticURL, mapURL (below) |
| latitude  | none    | string | latitude must be in data object                         |
| longitude | none    | string | longitude must be in data object                        |
| staticURL | none    | string | staticURL must be in data object                        |
| mapURL    | none    | string | mapURL must be in data object (optional)                |


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