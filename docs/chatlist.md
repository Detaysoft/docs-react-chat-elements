---
sidebar_position: 4
custom_edit_url: null
---
import { ChatList } from 'react-chat-elements'

# ChatList

## List Contacts
When we develop chat applications, we want to keep a list of the people we are messaging.

Here we can easily use the chatlist component.

<div style={{ color:"black", margin:"50px 0px"}}>
<ChatList
  className='chat-list'
  dataSource={[
    {
        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
        alt: 'kursat_avatar',
        title: 'Kursat',
        subtitle: 'Thank you so much.',
        date: new Date(),
        unread: 1,
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/41473129?v=4',
        alt: 'emre_avatar',
        title: 'Emre',
        subtitle: "Okey. I'll send you.",
        date: new Date(),
        unread: 0,
    },
]} />
</div>

## Example Usage

```jsx
import { ChatList } from "react-chat-elements"

<ChatList
  className='chat-list'
  dataSource={[
    {
      avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
      alt: 'kursat_avatar',
      title: 'Kursat',
      subtitle: "Why don't we go to the No Way Home movie this weekend ?",
      date: new Date(),
      unread: 3,
    }
]} />
```

**Result**

<div style={{ color:"black"}}>
  <ChatList
  className='chat-list'
  dataSource={[
    {
      avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
      alt: 'kursat_avatar',
      title: 'Kursat',
      subtitle: "Why don't we go to the No Way Home movie this weekend ?",
      date: new Date(),
      unread: 3,
    }
  ]} />
</div>

## ChatList Props

|       prop       | default |       type       |                      description                      |
|----------------|-------|----------------|-----------------------------------------------------|
| id               | none    | string \| number | Chatlist id                                           |
| className        | none    | string           | optional chat list className                          |
| dataSource       | []      | array            | chat list array                                       |
| onClick          | none    | function         | chat list item on click (chat(object) returns)        |
| onContextMenu    | none    | function         | chat list item on context menu (chat(object) returns) |
| onAvatarError    | none    | function         | chat list item on error avatar img                    |
| lazyLoadingImage | none    | string           | lazy loading image path                               |
| onClickMute      | none    | function         | mute click function (chat(object) returns)            |
| onClickVideoCall | none    | function         | video call click function (chat(object) returns)      |
| onDragOver       | none    | function         | ondragover event                                      |
| onDragEnter      | none    | function         | ondragenter event                                     |
| onDrop           | none    | function         | ondrop event                                          |
| onDragLeave      | none    | function         | ondragleave event                                     |
| onDragComponent  | none    | function         | the component which showing while drag                |