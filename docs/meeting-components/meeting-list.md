---
sidebar_position: 3
custom_edit_url: null
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
        subjectLimit: 20,
        date: new Date(),
        avatars: [{
            src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
        }]
      },
      {
        id: '1',
        subject: 'Daily',
        subjectLimit: 20,
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
      subjectLimit: 10,
      date: new Date(),
      avatars: [{
          src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
      }]
    },
    {
      id: '1',
      subject: 'Calling',
      subjectLimit: 10,
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
        subject: 'Calling',
        subjectLimit: 10,
        date: new Date(),
        avatars: [{
            src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
        }]
      },
      {
        id: '1',
        subject: 'Calling',
        subjectLimit: 10,
        date: new Date(),
        avatars: [
          {
            src: 'https://avatars.githubusercontent.com/u/41473129?v=4',
          },
        ]
      },
    ]}
  />
</div>

## Meeting List Props

| prop             | default | type       | description                                                      |
|------------------|---------|------------|------------------------------------------------------------------|
| className        | none    | string     | optional meeting list className                                  |
| cmpRef           | none    | ref object | meeting list ref                                                 |
|[dataSource](/docs/meeting-components/meeting-list#meeting-list-datasource-meetingitem-props)      | []      | array      | meeting list array (see details below)                                              |
| onClick          | none    | function   | meeting list item on click (meeting(object) is returned)         |
| onMeetingClick   | none    | function   | meeting list item on meeting click (meeting(object) is returned) |
| onShareClick     | none    | function   | meeting list item on share click (meeting(object) is returned)   |
| onCloseClick     | none    | function   | meeting list item on close click (meeting(object) is returned)   |
| onContextMenu    | none    | function   | meeting list item on context menu (meeting(object) is returned)  |
| onAvatarError    | none    | function   | meeting list item on error avatar img       |
| lazyLoadingImage | none    | image path | lazy loading image                         |

### Meeting List dataSource (MeetingItem) Props

| prop             | default | type             | description                                       |
|------------------|---------|------------------|---------------------------------------------------|
| id               | none    | string \| number | The Meeting Item's id                             |
| subject          | none    | string           | The Meeting Item's subject and optional.          |
| subjectLimit     | 60      | int              | The Meeting Item's subject limit and optional.    |
| title            | none    | string           | The Meeting Item's title                          |
| subtitle         | none    | string           | The Meeting Item's subtitle                       |
| date             | none    | date             | The Meeting Item's date and optional.             |
| dateString       | none    | string           | The Meeting Item's date string and optional.      |
| lazyLoadingImage | none    | string           | lazy loading image (image path)                   |
| closable         | true    | boolean          | The Meeting Item's closable and optional.         |
| onClick          | none    | function         | MeetingItem on click                              |
| onMeetingClick   | none    | function         | MeetingItem on meeting click                      |
| onShareClick     | none    | function         | MeetingItem on share click                        |
| onCloseClick     | none    | function         | MeetingItem on close click                        |
| avatars          | none    | date             | MeetingItem avatars                               |
| avatarFlexible   | none    | boolean          | The Meeting Item's avatar flexible and optional.  |
| avatarLimit      | 5       | date             | MeetingItem avatars limit                         |
| audioMuted       | true    | boolean          | MeetingItem audio muted                           |
| audioSource      | null    | string           | MeetingItem audio source                          |
| alt              | none    | string           | The Meeting Item's alt and optional.              |
| statusColorType  | none    | string           | The Meeting Item's status color type and optional |
| className        | none    | string           | className for optional MeetingItem                |
| onAvatarError    | none    | function         | onerror event for Avatar (img)                    |
| onContextMenu    | none    | function         | MeetingItem on context menu                       |