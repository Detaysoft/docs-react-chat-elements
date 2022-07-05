---
sidebar_position: 12
custom_edit_url: null
---

import { Dropdown } from "react-chat-elements"
import IconExample from "../src/components/ComponentExample.js"

# Dropdown

## Dropdown Component

When you need the dropdown menu, you can use it simply by giving the items.

<div style={{ color:"black", margin:"50px 0px"}}>
  <Dropdown
    buttonProps={{
        text: "Dropdown",
    }}
    items={[
      {
        text: "React",
      },
      {
        text: "Chat",
      },
      {
        text: "Elements",
      },
    ]}
  />
</div>

## Example Usage

```jsx
import { Dropdown } from "react-chat-elements";
<Dropdown
  title="Dropdown Title"
  animationType="default"
  animationPosition="southeast"
  buttonProps={{
    text: "Electronic",
  }}
  onSelect={(e) => {
    console.log(e);
  }}
  items={[
    {
      text: "Computers",
      icon: {
        float: "right",
        color: "blue",
        size: 10,
        component: <IconExample />,
      },
    },
    {
      text: "Phones",
    },
  ]}
/>;
```

**Result**

<div style={{ color:"tomato"}}>
  <Dropdown
    title="Dropdown Title"
    animationPosition="southeast"
    animationType="default"
    buttonProps={{
        text: "Electronic",
    }}
    onSelect={(e) => {
      console.log(e)
    }}
    items={[
    {
      text: "Computers",
      icon: {
        float: "right",
        color: "blue",
        size: 10,
        component: < IconExample/>,
      },
    },
    {
      text: "Phones",
    },
  ]}
  />
</div>

## Dropdown Props

| prop              | default  | type     | description                                                         |
| ----------------- | -------- | -------- | ------------------------------------------------------------------- |
| animationType     | none     | string   | fade or default                                                     |
| animationPosition | nortwest | string   | animation start position (nortwest, norteast, southwest, southeast) |
| items             | none     | array    | dropdown items array (see details below)                            |
| onSelect          | none     | function | item on select                                                      |
| buttonProps       | none     | object   | button properties                                                   |
| className         | none     | string   | className for optional Dropdown                                     |
| title             | none     | string   | Dropdown menu title                                                 |

:::tip About Dropdown Items

Dropdown Items can be define as just string array --> ["dropdown","items","example"]

On the other hand it can also be define as object array that contains belows props.

:::

### Dropdown Items Props

| prop | default | type   | description                            |
| ---- | ------- | ------ | -------------------------------------- |
| text | none    | string | dropdown item text                     |
| icon | none    | object | dropdown item icon (see details below) |

### Dropdown Items Icon Props

| prop      | default | type       | description                 |
| --------- | ------- | ---------- | --------------------------- |
| float     | none    | string     | icon style float            |
| color     | none    | string     | icon color                  |
| size      | 12      | number     | font size                   |
| className | none    | string     | className for optional icon |
| component | none    | ReactChild | icon component              |
