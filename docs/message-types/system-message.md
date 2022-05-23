---
sidebar_position: 10
---
import { MessageBox } from "react-chat-elements"
import { SystemMessage } from "react-chat-elements"

# System Message

## Information Message

Sometimes you may want to show system messages in the message list.
<div style={{ color:"black", margin:"50px 0px"}}>
  <MessageBox
    position={"left"}
    type={"text"}
    title={"Emre"}
    text="Hi there !"
  />
  <MessageBox
    position={"left"}
    type={"text"}
    title={"Esra"}
    text="Hii !"
  />
  <MessageBox
    position={"right"}
    type={"text"}
    title={"Kursat"}
    text="Heyy ! How are you ?"
  />
  <SystemMessage text={"End of conversation"} />
</div>

## Example Usage

```jsx
import { SystemMessage } from "react-chat-elements"

<SystemMessage text={"Here is an example of system message."} />
```

**Result**

<div style={{ color:"black"}}>
  <SystemMessage text={"Here is an example of system message."} />
</div>


## System Message Props

| prop | default | type   | description  |
| ---- | ------- | ------ | ------------ |
| text | none    | string | message text |