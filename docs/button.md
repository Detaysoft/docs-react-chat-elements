---
sidebar_position: 8
custom_edit_url: null
---

import { Button } from "react-chat-elements"
import IconExample from "../src/components/ComponentExample.js"

# Button

## Button Component

May need to button component in chat apps. It can be define very easily.

<div style={{ color:"black", margin:"50px 0px"}}>
  <Button text={"click me!"} onClick={() => alert("Clicked !")} />
</div>

## Example Usage

```jsx
import { Button } from "react-chat-elements";


<Button text={"Send"} onClick={() => alert("Sending...")} title="Send" />;
<Button text={"Send"} onClick={() => alert("Sending...")} type='transparent' title="Send" />;
<Button
  text={"Send"}
  onClick={() => alert("Sending...")}
  title="Send"
  icon ={
    float:'left',
    size:15,
    component:<IconExample/>
  }/>
```

**Result**

<div style={{ color:"black", display:'flex' ,flexDirection:'row' , alignItems:'center' , justifyContent:'space-evenly'}}>
  <Button text={"Send"} onClick={() => alert("Sending...")} title="Send" />
  <Button text={"TransperantButton"} onClick={() => alert("Sending...")} type='transparent' color='#3979aa' title="TransparentButton" />
  <Button 
    text={"Send"} 
    onClick={() => alert("Sending...")} 
    title="Send"
    icon = {{
      component : <IconExample/>,
      float:'left',
      size:12
    }}
 />
</div>

## Button Props

| prop            | default | type     | description                                            |
| --------------- | ------- | -------- | ------------------------------------------------------ |
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
| --------- | ------- | ---------- | ---------------- | --- |
| float     | none    | string     | span float       |
| size      | 12      | number     | font size number |
| component | none    | ReactChild | icon component   | c   |
