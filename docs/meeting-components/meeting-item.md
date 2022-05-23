---
sidebar_position: 1
---
import { MeetingItem } from "react-chat-elements"

# Meeting Item

## Meeting Item Component

Create an item that specifies meeting calls.

<div style={{ color:"black", margin:"50px 0px"}}>
  <MeetingItem
    subject={"New Calling !"}
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
  subject={"About Tomorrow !"}
  avatars={[
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
    subject={"About Tomorrow !"}
    avatars={[
      { src: "https://avatars.githubusercontent.com/u/15075759?v=4", },
      { src: "https://avatars.githubusercontent.com/u/41473129?v=4", },
    ]}
    onMeetingClick={() => alert("Clicked Join Meeting")}
    onShareClick={() => alert("Clicked Share Meeting")}
  />
</div>

## Meeting Item Props

| prop             | default | type       | description                                               |
| ---------------- | ------- | ---------- | --------------------------------------------------------- |
| subject          | none    | string     | MeetingItem subject                                       |
| subjectLimit     | 60      | int        | MeetingItem subject text limit                            |
| date             | none    | date       | MeetingItem date                                          |
| dateString       | none    | string     | MeetingItem represents dateString or timeagojs(now, date) |
| lazyLoadingImage | none    | image path | lazy loading image                                        |
| closable         | true    | boolean    | MeetingItem closable                                      |
| onClick          | none    | function   | MeetingItem on click                                      |
| onMeetingClick   | none    | function   | MeetingItem on meeting click                              |
| onShareClick     | none    | function   | MeetingItem on share click                                |
| onCloseClick     | none    | function   | MeetingItem on close click                                |
| avatars          | none    | date       | MeetingItem avatars                                       |
| avatarLimit      | 5       | date       | MeetingItem avatars limit                                 |
| audioMuted       | true    | boolean    | MeetingItem audio muted                                   |
| audioSource      | null    | string     | MeetingItem audio source                                  |