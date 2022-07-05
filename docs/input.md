---
sidebar_position: 7
custom_edit_url: null
---
import { Input, Button } from "react-chat-elements"

# Input

## Input Component

Input component should be used to write a message.

<div className="inputDiv">
  <Input
    className="inputStyle"
    placeholder="Type here..."
    multiline={true}
    rightButtons={<Button color="white" backgroundColor="black" text="Send" onClick={() => alert("Sending...")} />}
  />
</div>

## Example Usage

```jsx
import { Input } from 'react-chat-elements'

<Input
  placeholder="Type here..."
  multiline={true}
/>
```

**Result**

<div className="inputDiv">
  <Input
    className="inputStyle"
    placeholder="Type here..."
    multiline={true}
  />
</div>

## Input Props

| prop              | default | type              | description                          |
|-------------------|---------|-------------------|--------------------------------------|
| type              | text    | string            | input type if multiline is false     |
| referance         | none    | object            | input ref                            |
| className         | none    | string            | optional input className             |
| placeholder       | none    | string            | input placeholder text               |
| defaultValue      | none    | string            | input default value                  |
| onChange          | none    | function          | input onChange function              |
| multiline         | false   | bool              | input is textarea                    |
| autoHeight        | true    | bool              | input auto height                    |
| minHeight         | 25      | int               | input min height                     |
| maxHeight         | 200     | int               | input max height                     |
| inputStyle        | none    | object            | inputStyle object                    |
| leftButtons       | none    | object(component) | left buttons component               |
| rightButtons      | none    | object(component) | right buttons component              |
| maxlength         | none    | int               | input or textarea maxlength          |
| onMaxLengthExceed | none    | function          | called when max length exceed        |
| autofocus         | false   | bool              | input autofocus                      |
| clear             | none    | function          | input clear func if it has referance |
| onCopy            | none    | function          | input onfunction event               |
| onCut             | none    | function          | input oncut event                    |
| onPaste           | none    | function          | input onpaste event                  |
| onSelect          | none    | function          | input onselect event                 |
| onBlur            | none    | function          | input onblur event                   |
| onFocus           | none    | function          | input onfocus event                  |
| onSubmit          | none    | function          | input onsubmit event                 |
| onReset           | none    | function          | input onreset event                  |
| onKeyDown         | none    | function          | input onkeydown event                |
| onKeyPress        | none    | function          | input onkeypress event               |
| onKeyUp           | none    | function          | input onkeyup event                  |