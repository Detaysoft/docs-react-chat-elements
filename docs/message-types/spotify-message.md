---
sidebar_position: 8
custom_edit_url: null
---
import { MessageBox, SpotifyMessage } from "react-chat-elements";

# Spotify Message

## SpotifyMessage Component

<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"spotify"}
    title={"Kursat"}
    theme="white"
    view="coverart"
    uri={"spotify:artist:7dGJo4pcD2V6oG8kP0tJRR"}
  />
</div>

## Example Usage

```jsx
import { SpotifyMessage } from "react-chat-elements"

<SpotifyMessage
  uri="spotify:artist:6UBA15slIuadJ8h2lPRPos"
/>
```

**Result**

<SpotifyMessage
  uri="spotify:artist:6UBA15slIuadJ8h2lPRPos"
/>

## Spotify Message with Message Box

:::tip Message Box

It is enough to define a message component with using "MessageBox".

However you have to specify type for them.

:::

```jsx
import { MessageBox } from "react-chat-elements"

<MessageBox
  position="left"
  type="spotify"
  title="Esra"
  uri="spotify:artist:53XhwfbYqKCa1cC15pYq2q"
/>
```

**Result**

<MessageBox
  position="left"
  type="spotify"
  title="Esra"
  uri="spotify:artist:53XhwfbYqKCa1cC15pYq2q"
/>


## SpotifyMessage Props [(extends IMessage)](/docs/message-types/spotify-message#imessage-props)


| prop   | default | type             | description                                |
|--------|---------|------------------|--------------------------------------------|
| uri    | none    | string           | spotify url                                |
| width  | none    | number \| string | The Spotify Message's width and optional.  |
| height | none    | number \| string | The Spotify Message's height and optional. |



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