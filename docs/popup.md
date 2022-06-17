---
sidebar_position: 8
custom_edit_url: null
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

const popup = {
  show:show,
  header:"Example Popup",
  headerButtons: [
      {
          type: "transparent",
          color: "black",
          text: "X",
          onClick: () => {
              setShow(false);
          },
      },
  ],
  text:"Here is a sample popup component to use in your projects.",
  footerButtons: [
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
  ]
}

<Popup
  popup={popup}
/>
```

**Result**
<div style={{ color:"black", margin:"50px 0px"}}>
  <PopupComp buttonText="Show Result" />
</div>

## Popup Props

| prop      | default | type   | description                      |
|-----------|---------|--------|----------------------------------|
| popup     | none    | object | popup data (see details below)   |
| type      | none    | string | popup type                       |
| className | none    | string | className for optional className |

### Popup popup Props

| prop          | default | type                 | description                    |
| ------------- | ------- | -------------------- | ------------------------------ |
| show          | false   | bool                 | popup visible                  |
| header        | none    | string               | popup title (header) message   |
| headerButtons | none    | array                | popup title (header) buttons (see details below) |
| text          | none    | string               | popup content (center) message |
| color         | #333    | string (color)       | popup content message color    |
| footerButtons | none    | array                | popup footer buttons (see details below) |
| renderHeader  | none    | function (component) | render header function         |
| renderContent | none    | function (component) | render content function        |
| renderFooter  | none    | function (component) | render footer function         |

### Popup headerButtons Props

| prop    | default | type     | description                           |
|---------|---------|----------|---------------------------------------|
| type    | none    | string   | popup header type                     |
| color   | none    | string   | popup header color                    |
| onClick | none    | function | popup header onClick event            |
| icon    | none    | object   | popup header icon (see details below) |

### Popup headerButtons icon Props

| prop      | default | type       | description                 |
|-----------|---------|------------|-----------------------------|
| size      | 12      | number     | popup header icon font size |
| component | none    | ReactChild | popup header icon component |

### Popup footerButtons Props

| prop    | default | type     | description                           |
|---------|---------|----------|---------------------------------------|
| text    | none    | string   | popup footer text                     |
| color   | none    | string   | popup footer color                    |
| onClick | none    | function | popup footer onClick event            |
| backgroundColor    | none    | string   | popup footer background color  |