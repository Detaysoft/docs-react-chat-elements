---
sidebar_position: 6
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

| prop              | default | type              | description                   |
| ----------------- | ------- | ----------------- | ----------------------------- |
| referance         | none    | object            | input ref                     |
| className         | none    | string            | optional input className      |
| placeholder       | none    | string            | input placeholder text        |
| defaultValue      | none    | string            | input default value           |
| onChange          | none    | function          | input onChange function       |
| multiline         | false   | bool              | input is textarea             |
| autoHeight        | true    | bool              | input auto height             |
| minHeight         | 25      | int               | input min height              |
| maxHeight         | 200     | int               | input max height              |
| inputStyle        | none    | object            | inputStyle object             |
| leftButtons       | none    | object(component) | left buttons component        |
| rightButtons      | none    | object(component) | right buttons component       |
| ref               | none    | function          | input or textarea ref         |
| maxlength         | none    | int               | input or textarea maxlength   |
| onMaxLengthExceed | none    | function          | called when max length exceed |
| autofocus         | false   | bool              | input autofocus               |