---
sidebar_position: 7
---
import { Button } from "react-chat-elements"

# Button

## Button Component

May need to button component in chat apps. It can be define very easily.

<div style={{ color:"black", margin:"50px 0px"}}>
  <Button text={"click me!"} onClick={() => alert("Clicked !")} />
</div>

## Example Usage

```jsx
import { Button } from "react-chat-elements"

<Button text={"Send"} onClick={() => alert("Sending...")} />
```

**Result**

<div style={{ color:"black"}}>
  <Button text={"Send"} onClick={() => alert("Sending...")} />
</div>

## Button Props

| prop      | default | type     | description                         |
| --------- | ------- | -------- | ----------------------------------- |
| type      | none    | string   | button type (outlined, transparent) |
| disabled  | none    | string   | button is disabled?                 |
| text      | none    | string   | button text                         |
| buttonRef | none    | function | button ref                          |
| title     | none    | string   | button title                        |