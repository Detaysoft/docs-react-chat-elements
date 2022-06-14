---
sidebar_position: 9
custom_edit_url: null
---
import { SideBar } from "react-chat-elements"

# Sidebar

## Sidebar Component

Use the sidebar component by giving components to the top, bottom, center sections separately.

<div style={{ color:"black", margin:"50px 0px"}}>
  <SideBar
    top=<div>'TOP' AREA</div>
    center=<div>'CENTER' AREA</div>
    bottom=<div>'BOTTOM' AREA</div>
    type="light"
  />
</div>

## Example Usage

```jsx
import { SideBar } from "react-chat-elements"

<SideBar
  top=<div>About Me</div>
  center=<div>Chat List</div>
  bottom=<div>Detaysoft</div>
  type="light"
/>
<br />
<SideBar
  top=<div>About Me</div>
  center=<div>Chat List</div>
  bottom=<div>Detaysoft</div>
  type="dark"
/>
```

**Result**

<div style={{ color:"black"}}>
  <SideBar
    top=<div>About Me</div>
    center=<div>Chat List</div>
    bottom=<div>Detaysoft</div>
    type="light"
  />
  <br />
  <SideBar
    top=<div>About Me</div>
    center=<div>Chat List</div>
    bottom=<div>Detaysoft</div>
    type="dark"
  />
</div>

## Sidebar Props

| prop   | default | type      | description                          |
| ------ | ------- | --------- | ------------------------------------ |
| type   | light   | string    | sidebar style type (eg: light, dark) |
| top    | none    | component | sidebar top component                |
| center | none    | component | sidebar center component             |
| bottom | none    | component | sidebar bottom component             |