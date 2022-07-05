---
sidebar_position: 11
custom_edit_url: null
---
import { Navbar } from "react-chat-elements"

# Navbar

## Navbar Component

Use the navbar component by giving components to the left, right, center sections separately.

<div style={{ color:"black", margin:"50px 0px"}}>
  <Navbar
    left=<div>'LEFT' AREA</div>
    center=<div>'CENTER' AREA</div>
    right=<div>'RIGHT' AREA</div>
    type="dark"
  />
</div>

## Example Usage

```jsx
import { Navbar } from "react-chat-elements"

<Navbar
  left=<div>Logo</div>
  center=<div>Home</div>
  right=<div>Contact</div>z
  type="light"
/>
<br />
<Navbar
  left=<div>Logo</div>
  center=<div>Home</div>
  right=<div>Contact</div>z
  type="dark"
/>
```

**Result**

<div style={{ color:"black"}}>
  <Navbar
    left=<div>Logo</div>
    center=<div>Home</div>
    right=<div>Contact</div>z
    type="light"
  />
  <br />
  <Navbar
    left=<div>Logo</div>
    center=<div>Home</div>
    right=<div>Contact</div>z
    type="dark"
  />
</div>

## Navbar Props

| prop   | default | type      | description                         |
| ------ | ------- | --------- | ----------------------------------- |
| type   | light   | string    | navbar style type (eg: light, dark) |
| left   | none    | component | navbar left component               |
| center | none    | component | navbar center component             |
| right  | none    | component | navbar right component              |