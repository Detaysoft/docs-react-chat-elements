---
sidebar_position: 2
custom_edit_url: null
---

import { MeetingLink, MessageBox } from "react-chat-elements"
import { ExampleMeetingLink, ExampleMessageBoxMeetingLink} from '../../src/components/ExampleMeetingLink.js'

# Meeting Link

## Meeting Link Component

MeetingLink component can be use for sending meeting links. On the other hand can be use in message box.

<div style={{ color:"black", margin:"50px 0px"}}>
  <ExampleMeetingLink />
</div>

## Example Usages

```jsx
import { MessageBox } from "react-chat-elements"

<MessageBox
  position={"left"}
  title="Emre"
  type={"meetingLink"}
  meetingID="1"
  text="This is a meeting link for tomorrow's event."
  actionButtons={[
    {
      onClickButton: () => {
        alert("Joined")
      },
      Component: () => <div>Join</div>,
    },
    {
      onClickButton: () => {
        alert("Postponed")
      },
      Component: () => <div>Later</div>,
    },
  ]}
/>
```

**Result**

<div style={{ color:"black", marginBottom:"30px"}}>
  <ExampleMessageBoxMeetingLink />
</div>

```jsx
import { MeetingLink } from "react-chat-elements"

<MeetingLink
  text="This is a meeting link for tomorrow's event."
  meetingID="1"
  actionButtons={[
    {
      onClickButton: () => {
        alert("Joined")
      },
      Component: () => <div>Join</div>,
    },
    {
      onClickButton: () => {
        alert("Postponed")
      },
      Component: () => <div>Later</div>,
    },
  ]}
/>
```

**Result**

<div style={{ color:"black"}}>
  <ExampleMeetingLink />
</div>

## Meeting Link Props

| prop          | default | type                      | description             |
| ------------- | ------- | ------------------------- | ----------------------- |
| meetingID     | none    | string                    | meeting link meeting id |
| text          | none    | string                    | meeting link text       |
| actionButtons | none    | IMeetingLinkActionButtons | meeting link buttons    |

### IMeetingLinkActionButtons Props

| prop          | default | type                    | description          |
| ------------- | ------- | ----------------------- | -------------------- |
| onClickButton | none    | function                | button onClick event |
| Component     | none    | React.FunctionComponent | button component     |
