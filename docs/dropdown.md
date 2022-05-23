---
sidebar_position: 11
---
import { Dropdown } from "react-chat-elements"

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
import { Dropdown } from "react-chat-elements"

<Dropdown
  buttonProps={{
      text: "Electronic",
  }}
  items={[
    {
      text: "Computers",
    },
    {
      text: "Phones",
    }
  ]}
/>
```

**Result**

<div style={{ color:"tomato"}}>
  <Dropdown
    buttonProps={{
        text: "Electronic",
    }}
    items={[
      {
        text: "Computers",
      },
      {
        text: "Phones",
      }
    ]}
  />
</div>

## Dropdown Props

| prop              | default  | type     | description                                                         |
| ----------------- | -------- | -------- | ------------------------------------------------------------------- |
| animationType     | none     | string   | fade or default                                                     |
| animationPosition | nortwest | string   | animation start position (nortwest, norteast, southwest, southeast) |
| items             | none     | array    | dropdown items array                                                |
| onSelect          | none     | function | item on select                                                      |
| buttonProps       | none     | object   | button properties                                                   |