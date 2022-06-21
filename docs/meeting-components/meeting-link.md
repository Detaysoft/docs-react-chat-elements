---
sidebar_position: 2
custom_edit_url: null
---
import { MeetingLink, MessageBox } from "react-chat-elements"

# Meeting Link

## Meeting Link Component

MeetingLink component can be use for sending meeting links. On the other hand can be use in message box.

<div style={{ color:"black", margin:"50px 0px"}}>
  <MeetingLink
    message={
      {
        title:"This is a meeting link for tomorrow's event.",
        meetingID:"5"
      }
    }
  />
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
/>
```

**Result**

<div style={{ color:"black", marginBottom:"30px"}}>
  
</div>

```jsx
import { MeetingLink } from "react-chat-elements"

<MeetingLink
  message={
    {
      title:"This is a meeting link for tomorrow's event.",
      meetingID:"5"
    }
  }
/>
```

**Result**

<div style={{ color:"black"}}>
  <MeetingLink
    message={
      {
        title:"This is a meeting link for tomorrow's event.",
        meetingID:"5"
      }
    }
  />
</div>

## Meeting Link Props

| prop                | default | type     | description                                  |
|---------------------|---------|----------|----------------------------------------------|
| message             | none    | object   | MeetingLink message data (see details below) |
| onMeetingMoreSelect | none    | function | link click function (returns meeting id)     |

### Meeting Link Message Props

| prop               | default | type     | description                 |
| ------------------ | ------- | -------- | --------------------------- |
| meetingID          | none    | string   | Meeting Link id             |
| title              | none    | string   | Meeting Link title          |