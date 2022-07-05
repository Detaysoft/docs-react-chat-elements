---
sidebar_position: 13
custom_edit_url: null
---

import { Avatar } from "react-chat-elements"

# Avatar

## Avatar Component

Create beautiful designs using the avatar component.

<div style={{ color:"black", margin:"50px 0px", display:"flex", justifyContent:"space-evenly"}}>
  <Avatar
    src="https://avatars.githubusercontent.com/u/80540635?v=4"
    alt={"logo"}
    size="xlarge"
    type="circle flexible"
  />
  <Avatar
    src="https://avatars.githubusercontent.com/u/15075759?v=4"
    alt={"logo"}
    size="xlarge"
    type="circle flexible"
  />
  <Avatar
    src="https://avatars.githubusercontent.com/u/41473129?v=4"
    alt={"logo"}
    size="xlarge"
    type="circle flexible"
  />
</div>

## Example Usage

```jsx
import { Avatar } from "react-chat-elements";

<Avatar
  src="https://avatars.githubusercontent.com/u/80540635?v=4"
  alt="avatar"
  size="xlarge"
  type="rounded"
/>;
```

**Result**

<div style={{ color:"black"}}>
  <Avatar
    src="https://avatars.githubusercontent.com/u/80540635?v=4"
    alt="avatar"
    size="xlarge"
    type="rounded"
  />
</div>

## Avatar Props

| prop             | default | type       | description                                                                                     |
| ---------------- | ------- | ---------- | ----------------------------------------------------------------------------------------------- | --- |
| src              | none    | image      | image src                                                                                       |
| alt              | none    | string     | image alt description                                                                           |
| size             | default | string     | image size. default (25px), xsmall(30px), small(35px), medium(40px), large(45px), xlarge (55px) |
| type             | default | string     | types: default, circle, rounded(border radius 5px), flexible                                    |
| letterItem       | none    | object     | avatar to be a letter                                                                           |
| sideElement      | none    | component  | avatar side element                                                                             |
| onError          | none    | component  | avatar img onerror                                                                              |
| lazyLoadingImage | none    | image path | lazy loading image                                                                              |
| className        | none    | string     | className for optional Avatar                                                                   |     |
