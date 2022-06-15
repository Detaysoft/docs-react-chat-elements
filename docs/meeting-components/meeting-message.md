---
sidebar_position: 4
custom_edit_url: null
---
import ExampleMeetingMessageComp from '../../src/components/ExampleMeetingMessageComp.js'
import { MeetingMessage } from 'react-chat-elements'



# Meeting Message

## Meeting Message Component

Message announcing the meetings can be defined.

<div style={{ color:"black", margin:"50px 0px"}}>
  <MeetingMessage
    subject="BNet Department"
    title="Detaysoft Daily"
    date={new Date()}
    dateString={props.messageItem?.dateString}
    collapseTitle="Info"
    participants= {
      [
        {
          id: '1',
          title: 'Kursat'
        },
        {
          id: '1',
          title: 'Emre'
        },
      ]
    }
    dataSource={
      [
        {
          id: '1',
          avatar: 'https://avatars.githubusercontent.com/u/41473129?v=4',
          message: 'Team Lead',
          title: 'Emre',
          avatarFlexible: true,
          date: new Date(),
        },
        {
          id: '2',
          avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
          message: 'Junior Developer',
          title: 'Kursat',
          avatarFlexible: true,
          date: new Date(),
        }
      ]
    }
  />
</div>


## Example Usages

```jsx
import { MeetingMessage } from "react-chat-elements"

<MeetingMessage
  subject="Example Meeting Message"
  title="Meeting Message"
  date={new Date()}
  dateString={props.messageItem?.dateString}
  collapseTitle="Info"
  participants={
    [
      {
        id: '1',
        title: 'Esra'
      },
      {
        id: '2',
        title: 'Abdurrahman'
      },
    ]
  }
  dataSource={
    [
      {
        id: '1',
        avatar: 'https://avatars.githubusercontent.com/u/53093667?s=100&v=4',
        message: "Frontend Developer",
        title: 'Esra',
        avatarFlexible: true,
        date: new Date(),
      },
      {
        id: '1',
        avatar: 'https://avatars.githubusercontent.com/u/15075759?v=4',
        message: "Solution Architect",
        title: 'Abdurrahman',
        avatarFlexible: true,
        date: new Date(),
      }
    ]
  }
/>
```

**Result**

<div style={{ color:"black", margin:"50px 0px"}}>
  <MeetingMessage
    subject="Example Meeting Message"
    title="Meeting Message"
    date={new Date()}
    dateString={props.messageItem?.dateString}
    collapseTitle="Info"
    participants={
      [
        {
          id: '1',
          title: 'Esra'
        },
        {
          id: '2',
          title: 'Abdurrahman'
        },
      ]
    }
    dataSource={
      [
        {
          id: '1',
          avatar: 'https://avatars.githubusercontent.com/u/53093667?s=100&v=4',
          message: "Frontend Developer",
          title: 'Esra',
          avatarFlexible: true,
          date: new Date(),
        },
        {
          id: '1',
          avatar: 'https://avatars.githubusercontent.com/u/15075759?v=4',
          message: "Solution Architect",
          title: 'Abdurrahman',
          avatarFlexible: true,
          date: new Date(),
        }
      ]
    }
  />
</div>

```jsx
import { MessageBox } from "react-chat-elements"

const meetingData = {
  subject: new Date().toString(),
  title:"Daily Meeting",
  date: new Date(),
  dateString: new Date().toDateString,
  collapseTitle:"Info",
  participants:[
      {
        id: '1',
        title: 'Kursat'
      },
      {
        id: '2',
        title: 'You'
      },
  ],
  dataSource:
    [
      {
        id: '1',
        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
        message: "Junior Developer",
        title: 'Kursat',
        avatarFlexible: true,
        date: new Date(),
      }
    ]
}

<MessageBox
  position="left"
  title="Esra"
  type="meeting"
  meeting={meetingData}
/>
```

**Result**

<div style={{ color:"black"}}>
  <ExampleMeetingMessageComp />
</div>

## Meeting Message Props

| prop                    | default    | type     | description                                                                                        |
| ----------------------- | ---------- | -------- | -------------------------------------------------------------------------------------------------- |
| subject                 | none       | string   | Meeting messagee                                                                                   |
| title                   | none       | string   | Meeting title                                                                                      |
| date                    | new Date() | Date     | Meeting date                                                                                       |
| collapseTitle           | none       | string   | Meeting subtitle                                                                                   |
| participants            | []         | array    | Meeting participant array                                                                          |
| moreItems               | none       | array    | message more items                                                                                 |
| dataSource              | []         | array    | meeting list array                                                                                 |
| onClick                 | none       | function | meeting message on click event (message(object) is returned)                                       |
| onMeetingTitleClick     | none       | function | meeting title message on click event (message(object) is returned)                                 |
| onMeetingVideoLinkClick | none       | function | meeting video link message on click event (message(object) is returned)                            |
| onMeetingMoreSelect     | none       | function | message list item onMeetingMoreSelect event, gets 3 parameters: message item, index of item, event |

