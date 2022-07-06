import React from 'react'
import { Popup, Button } from "react-chat-elements"



const PopupComp = ({ buttonText }) => {
  const [show, setShow] = React.useState(false);
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
  return (
    <div className='popupCompDiv'>
      <Button text={buttonText} onClick={() => setShow(true)} />
      <Popup
        popup={popup}
        type="dark"
      />
    </div>
  )
}

export default PopupComp