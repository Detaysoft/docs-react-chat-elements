---
sidebar_position: 1
custom_edit_url: null
---
import { MeetingItem } from "react-chat-elements"

# Meeting Item

## Meeting Item Component

Create an item that specifies meeting calls.

<div style={{ color:"black", margin:"50px 0px"}}>
  <MeetingItem
    subject={"New Calling !"}
    subjectLimit={20}
    date={new Date()}
    avatars={[
      { src: "https://avatars.githubusercontent.com/u/80540635?v=4", },
      { src: "https://avatars.githubusercontent.com/u/15075759?v=4", },
      { src: "https://avatars.githubusercontent.com/u/41473129?v=4", },
    ]}
    onMeetingClick={() => alert("Clicked Join Meeting")}
    onShareClick={() => alert("Clicked Share Meeting")}
  />
</div>

## Example Usage

```jsx
import { MeetingItem } from "react-chat-elements"

<MeetingItem
  subject={"New Calling !"}
  subjectLimit={10}
  date={new Date()}
  avatars={[
    { src: "https://avatars.githubusercontent.com/u/80540635?v=4", },
    { src: "https://avatars.githubusercontent.com/u/15075759?v=4", },
    { src: "https://avatars.githubusercontent.com/u/41473129?v=4", },
  ]}
  onMeetingClick={() => alert("Clicked Join Meeting")}
  onShareClick={() => alert("Clicked Share Meeting")}
/>
```

**Result**

<div style={{ color:"black"}}>
  <MeetingItem
    subject={"New Calling !"}
    subjectLimit={10}
    date={new Date()}
    avatars={[
      { src: "https://avatars.githubusercontent.com/u/80540635?v=4", },
      { src: "https://avatars.githubusercontent.com/u/15075759?v=4", },
      { src: "https://avatars.githubusercontent.com/u/41473129?v=4", },
    ]}
    onMeetingClick={() => alert("Clicked Join Meeting")}
    onShareClick={() => alert("Clicked Share Meeting")}
  />
</div>

## Meeting Item Props

|       prop       | default |   type   |                    description                    |
|------------------|---------|----------|---------------------------------------------------|
| subject          | none    | string   | The Meeting Item's subject and optional.          |
| subjectLimit     | 60      | int      | The Meeting Item's subject limit and optional.    |
| date             | none    | date     | The Meeting Item's date and optional.             |
| dateString       | none    | string   | The Meeting Item's date string and optional.      |
| lazyLoadingImage | none    | string   | lazy loading image (image path)                   |
| closable         | true    | boolean  | The Meeting Item's closable and optional.         |
| onClick          | none    | function | MeetingItem on click                              |
| onMeetingClick   | none    | function | MeetingItem on meeting click                      |
| onShareClick     | none    | function | MeetingItem on share click                        |
| onCloseClick     | none    | function | MeetingItem on close click                        |
| [avatars](/docs/meeting-components/meeting-item#meeting-item-avatar-props)          | none    | array     | MeetingItem avatars array (see details below)                               |
| avatarFlexible   | none    | boolean  | The Meeting Item's avatar flexible and optional.  |
| avatarLimit      | 5       | date     | MeetingItem avatars limit                         |
| audioMuted       | true    | boolean  | MeetingItem audio muted                           |
| audioSource      | null    | string   | MeetingItem audio source                          |
| alt              | none    | string   | The Meeting Item's alt and optional.              |
| statusColorType  | none    | string   | The Meeting Item's status color type and optional |
| className        | none    | string   | className for optional MeetingItem                |
| onAvatarError    | none    | function | onerror event for Avatar (img)                    |
| onContextMenu    | none    | function | MeetingItem on context menu                       |


### Meeting Item avatars Props

| prop            | default | type   | description                                         |
|-----------------|---------|--------|-----------------------------------------------------|
| src             | none    | string | meeting item avatar img src                         |
| alt             | none    | string | meeting item avatar img alt                         |
| statusColorType | none    | string | meeting item avatar status color type               |
| statusColor     | none    | string | meeting item avatar status color                    |
| [letterItem](/docs/meeting-components/meeting-item#meeting-item-avatar-letteritem-props)      | none    | object | meeting item avatar letter item (see details below) |
| statusText      | none    | string | meeting item avatar status text                     |

### Meeting Item avatar letterItem props

| prop            | default | type   | description                                         |
|-----------------|---------|--------|-----------------------------------------------------|
| id             | none    | string | meeting item avatar letterItem id                         |
| letter             | none    | ReactChild | meeting item avatar letterItem letter                        |
