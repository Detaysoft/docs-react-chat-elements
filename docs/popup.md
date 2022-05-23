---
sidebar_position: 8
---
import PopupComp from '../src/components/PopupComp.js'


# Popup

## Popup Component

We need the popup component in many places, with this package you get a nice popup component without any hassle.

<div style={{ color:"black", margin:"50px 0px"}}>
  <PopupComp buttonText="Show Popup" />
</div>

## Example Usage

```jsx
import { Popup, Button } from "react-chat-elements"

const [show, setShow] = React.useState(false);

<Button text={"Show Result"} onClick={() => setShow(true)} />

<Popup
  show={show}
  header="Example Popup"
  headerButtons={[
      {
          type: "transparent",
          color: "black",
          text: "X",
          onClick: () => {
              setShow(false);
          },
      },
  ]}
  text="Here is a sample popup component to use in your projects."
  footerButtons={[
      {
          color: "white",
          backgroundColor: "#ff5e3e",
          text: "Cancel",
          onClick: () => {
              setShow(false);
          },
      },
      {
          color: "white",
          backgroundColor: "lightgreen",
          text: "OK",
          onClick: () => {
              setShow(false);
          },
      },
  ]}
/>
```

**Result**
<div style={{ color:"black", margin:"50px 0px"}}>
  <PopupComp buttonText="Show Result" />
</div>

## Popup Props

| prop          | default | type                 | description                    |
| ------------- | ------- | -------------------- | ------------------------------ |
| show          | false   | bool                 | popup visible                  |
| header        | none    | string               | popup title (header) message   |
| headerButtons | none    | array                | popup title (header) buttons   |
| text          | none    | string               | popup content (center) message |
| color         | #333    | string (color)       | popup content message color    |
| footerButtons | none    | array                | popup footer buttons           |
| renderHeader  | none    | function (component) | render header function         |
| renderContent | none    | function (component) | render content function        |
| renderFooter  | none    | function (component) | render footer function         |