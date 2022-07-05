---
sidebar_position: 10
custom_edit_url: null
---

import SidebarComp from '../src/components/SidebarComp.js'

# Sidebar

## Sidebar Component

Use the sidebar component by giving components to the top, bottom, center sections separately.

<div style={{ color:"black", margin:"50px 0px"}}>
  <SidebarComp type="dark" isSecondData={false}/>
</div>

## Example Usage

```jsx
import { SideBar } from "react-chat-elements"

const SidebarData = {
  top: "About Me",
  center: "Chat List",
  bottom: "Detaysoft",
}

<SideBar type="light" data={SidebarData} />
<br />
<SideBar type="dark" data={SidebarData} />
```

**Result**

<div style={{ color:"black", margin:"50px 0px"}}>
<SidebarComp type="dark" isSecondData={true}/>
<br />
<SidebarComp type="light" isSecondData={true}/>
</div>

## Sidebar Props

| prop | default | type   | description                         |
| ---: | ------- | ------ | ----------------------------------- |
| type | light   | string | sidebar style type (eg: light,dark) |
| data | none    | object | sidebar data object                 |

### Sidebar data Props

|   prop | default | type   | description              |
| -----: | ------- | ------ | ------------------------ |
|    top | none    | string | sidebar top component    |
| center | none    | string | sidebar center component |
| bottom | none    | string | sidebar bottom component |
