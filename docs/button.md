---
sidebar_position: 7
custom_edit_url: null
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

| prop            | default | type     | description                                            |
|-----------------|---------|----------|--------------------------------------------------------|
| type            | none    | string   | button type (outlined, transparent)                    |
| disabled        | none    | string   | button is disabled ?                                   |
| text            | none    | string   | button text                                            |
| buttonRef       | none    | function | button ref                                             |
| title           | none    | string   | button title (Hover over the button to see the title.) |
| className       | none    | string   | className for optional Button                          |
| backgroundColor | #3979aa | string   | button background color                                |
| color           | #ffffff | string   | button color                                           |
| onClick         | none    | function | button onClick event                                   |
| icon            | none    | object   | button icon (see details below)                        |

### Button Icon Props

| prop      | default | type       | description      |
|-----------|---------|------------|------------------|
| float     | none    | string     | span float       |
| size      | 12      | number     | font size number |
| component | none    | ReactChild | icon component   |