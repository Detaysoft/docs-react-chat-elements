---
sidebar_position: 9
custom_edit_url: null
---
import { MeetingMessage, MessageBox } from 'react-chat-elements'

# Meeting Message

## Meeting Message Component

Message announcing the meetings can be defined.

<div style={{ color:"black", margin:"50px 0px"}}>
  <MeetingMessage
    subject="BNet Department"
    title="Detaysoft Daily"
    date={new Date()}
    dateString={new Date().toDateString}
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


## Example Usage

```jsx
import { MeetingMessage } from "react-chat-elements";

<MeetingMessage
  subject="Example Meeting Message"
  title="Meeting Message"
  date={new Date()}
  dateString={new Date().toDateString}
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

<div style={{ color:"black"}}>
  <MeetingMessage
    subject="Example Meeting Message"
    title="Meeting Message"
    date={new Date()}
    dateString={new Date().toDateString}
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


## Meeting Message with Message Box

```jsx
import { MessageBox } from "react-chat-elements";

<MessageBox
  type="meeting"
  subject="Example Meeting Message"
  title="Meeting Message"
  date={new Date()}
  dateString={new Date().toDateString}
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

<div style={{ color:"black"}}>
  <MessageBox
    type="meeting"
    subject="Example Meeting Message"
    title="Meeting Message"
    date={new Date()}
    dateString={new Date().toDateString}
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

## Meeting Message Props [(extends IMessage)](/docs/meeting-components/meeting-message#imessage-props)

| prop                    | default    | type     | description                                                                                        |
|-------------------------|------------|----------|----------------------------------------------------------------------------------------------------|
| subject                 | none       | string   | Meeting messagee                                                                                   |
| title                   | none       | string   | Meeting title                                                                                      |
| date                    | new Date() | Date     | Meeting date                                                                                       |
| dateString              | none       | string   | Meeting date string                                                                                |
| collapseTitle           | none       | string   | Meeting subtitle                                                                                   |
| [participants](/docs/meeting-components/meeting-message#meetingmessage-participants-props)             | []         | array    | Meeting participants array (see details below)   |
| participantsLimit       | none       | number   | Meeting participants count limit                                                                   |
| [moreItems](/docs/meeting-components/meeting-message#meetingmessage-moreitems-props)               | none       | array    | message more items (see details below)                                                                                |
| [dataSource](/docs/meeting-components/meeting-message#meetingmessage-datasource-props)               | []         | array    | meeting list array         (see details below)                                                                           |
| onClick                 | none       | function | meeting message on click event (message(object) is returned)                                       |
| onMeetingTitleClick     | none       | function | meeting title message on click event (message(object) is returned)                                 |
| onMeetingVideoLinkClick | none       | function | meeting video link message on click event (message(object) is returned)                            |
| onMeetingMoreSelect     | none       | function | message list item onMeetingMoreSelect event, gets 3 parameters: message item, index of item, event |

### MeetingMessage participants Props

| prop  | default | type             | description       |
|-------|---------|------------------|-------------------|
| id    | none    | number \| string | participant id    |
| title | none    | string           | participant title |

### MeetingMessage moreItems Props

| prop | default | type   | description                                      |
|------|---------|--------|--------------------------------------------------|
| text | none    | string | MeetingMessage (dropdown) text                     |
| [icon](/docs/meeting-components/meeting-message#meetingmessage-dropdown-items-icon-props) | none    | object | MeetingMessage (dropdown) icon (see details below) |

### MeetingMessage (Dropdown) Items Icon Props

| prop      | default | type       | description                 |
|-----------|---------|------------|-----------------------------|
| float     | none    | string     | icon style float            |
| color     | none    | string     | icon color                  |
| size      | 12      | number     | font size                   |
| component | none    | ReactChild | icon component              |

### MeetingMessage dataSource Props

| prop       | default | type           | description                                      |
|------------|---------|----------------|--------------------------------------------------|
| message    | none    | string         | MeetingMessage message of data                   |
| avatar     | none    | string         | MeetingMessage avatar                            |
| date       | none    | number \| Date | MeetingMessage date                              |
| dateString | none    | string         | MeetingMessage dateString                        |
| title      | none    | string         | MeetingMessage title                             |
| [event](/docs/meeting-components/meeting-message#meetingmessage-datasource-event-props)      | none    | object         | MeetingMessage event object (see details below)  |
| [record](/docs/meeting-components/meeting-message#meetingmessage-datasource-record-props)     | none    | object         | MeetingMessage record object (see details below) |

### MeetingMessage dataSource event Props

| prop         | default | type   | description                              |
|--------------|---------|--------|------------------------------------------|
| title        | none    | string | event title                              |
| avatars      | none    | array  | Avatar component props (see Avatar docs) |
| avatarsLimit | none    | any    | event avatarsLimit                       |

### MeetingMessage dataSource record Props

| prop    | default | type   | description        |
|---------|---------|--------|--------------------|
| avatar  | none    | string | record avatar path |
| title   | none    | string | record title       |
| savedBy | none    | string | record savedBy     |
| time    | none    | string | record time        |


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