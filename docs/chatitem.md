---
sidebar_position: 5
custom_edit_url: null
---
import { ChatItem } from "react-chat-elements"

# Chat Item

## Chat Component

Items in the ChatList can also be defined separately.

<div style={{ color:"black", margin:"50px 0px"}}>
  <ChatItem
    avatar="https://avatars.githubusercontent.com/u/41473129?v=4"
    alt="emre_avatar"
    title="Emre"
    subtitle="What are you doing ?"
    date={new Date()}
    unread={0}
  />
</div>

## Example Usage

```jsx
import { ChatItem } from "react-chat-elements"

<ChatItem
  avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
  alt="kursat_avatar"
  title="Kursat"
  subtitle="Ok. See you !"
  date={new Date()}
  unread={0}
/>
```

**Result**

<div style={{ color:"black"}}>
  <ChatItem
    avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
    alt="kursat_avatar"
    title="Kursat"
    subtitle="Ok. See you !"
    date={new Date()}
    unread={0}
  />
</div>

## Chat Item Props

|       prop       | default |       type       |                       description                      |
|:----------------:|:-------:|:----------------:|:------------------------------------------------------:|
| id               | none    | string \| number | ChatItem id                                            |
| className        | none    | string           | className for optional ChatItem                        |
| avatar           | none    | string           | ChatItem avatar photo url                              |
| avatarFlexible   | false   | boolean          | flexible ChatItem avatar photo                         |
| letterItem       | none    | object           | Avatar letter item                                     |
| alt              | none    | string           | ChatItem avatar photo alt text                         |
| title            | none    | string           | ChatItem title                                         |
| subtitle         | none    | string           | ChatItem subtitle                                      |
| date             | none    | date             | ChatItem date                                          |
| dateString       | none    | string           | ChatItem represents dateString or timeagojs(now, date) |
| unread           | 0       | int              | ChatItem unread count                                  |
| onClick          | none    | function         | ChatItem on click                                      |
| onContextMenu    | none    | function         | ChatItem on context menu                               |
| statusColor      | none    | color            | ChatItem status color                                  |
| statusColorType  | badge   | string           | ChatItem status color type (encircle, badge)           |
| statusText       | none    | color            | ChatItem status text                                   |
| lazyLoadingImage | none    | image path       | lazy loading image                                     |
| muted            | false   | bool             | chat mute info                                         |
| showMute         | false   | bool             | chat mute button visibilty                             |
| showVideoCall    | false   | bool             | chat video call button visibilty                       |
| onClickMute      | none    | function         | mute button                                            |
| onClickVideoCall | none    | function         | video call button                                      |
| onAvatarError    | none    | function         | onerror event for avatar (img)                         |
| onDragOver       | none    | function         | ondragover event                                       |
| onDragEnter      | none    | function         | ondragenter event                                      |
| onDrop           | none    | function         | ondrop event                                           |
| onDragLeave      | none    | function         | ondragleave event                                      |
| onDragComponent  | none    | function         | the component which showing while drag                 |