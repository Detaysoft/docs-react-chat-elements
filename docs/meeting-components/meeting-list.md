---
sidebar_position: 3
---
import { MeetingList } from 'react-chat-elements'

# Meeting List

## Meeting List Component

If you need the MeetingItem list, you can use the MeetingList component.

<div style={{ color:"black", margin:"50px 0px"}}>
  <MeetingList
    className='meeting-list'
    dataSource={[
      {
        id: '1',
        subject: 'Need Help !',
        date: new Date(),
        avatars: [{
            src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
        }]
      },
      {
        id: '1',
        subject: 'Daily',
        date: new Date(),
        avatars: [
          {
            src: 'https://avatars.githubusercontent.com/u/41473129?v=4',
          },
          {
            src: 'https://avatars.githubusercontent.com/u/15075759?v=4',
          }
        ]
      },
    ]}
  />
</div>

## Example Usage

```jsx
import { MeetingList } from "react-chat-elements"

<MeetingList
  className='meeting-list'
  dataSource={[
    {
      id: '1',
      subject: 'Calling',
      date: new Date(),
      avatars: [{
          src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
      }]
    },
    {
      id: '1',
      subject: 'Calling',
      date: new Date(),
      avatars: [
        {
          src: 'https://avatars.githubusercontent.com/u/41473129?v=4',
        },
      ]
    },
  ]}
/>
```

**Result**

<div style={{ color:"black"}}>
  <MeetingList
    className='meeting-list'
    dataSource={[
      {
        id: '1',
        subject: "Emre's Calling",
        date: new Date(),
        avatars: [
          {
            src: 'https://avatars.githubusercontent.com/u/41473129?v=4',
          },
        ]
      },
      {
        id: '1',
        subject: "Kursat's Calling",
        date: new Date(),
        avatars: [{
            src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
        }]
      },
    ]}
  />
</div>

## Meeting List Props


| prop             | default | type       | description                                                      |
| ---------------- | ------- | ---------- | ---------------------------------------------------------------- |
| className        | none    | string     | optional meeting list className                                  |
| dataSource       | []      | array      | meeting list array                                               |
| onClick          | none    | function   | meeting list item on click (meeting(object) is returned)         |
| onMeetingClick   | none    | function   | meeting list item on meeting click (meeting(object) is returned) |
| onShareClick     | none    | function   | meeting list item on share click (meeting(object) is returned)   |
| onCloseClick     | none    | function   | meeting list item on close click (meeting(object) is returned)   |
| onContextMenu    | none    | function   | meeting list item on context menu (meeting(object) is returned)  |
| onAvatarError    | none    | function   | meeting list item on error avatar img                            |
| lazyLoadingImage | none    | image path | lazy loading image                                               |