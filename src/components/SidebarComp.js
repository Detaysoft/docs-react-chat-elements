import React from 'react'
import { SideBar } from 'react-chat-elements';

const SidebarComp = ({type, isSecondData}) => {
  const SidebarData = {
    top: "TOP AREA",
    center: "CENTER AREA",
    bottom: "BOTTOM AREA",
  }

  const SidebarDataSecond = {
    top: "About Me",
    center: "Chat List",
    bottom: "Detaysoft",
  }
  return (
    <div>
      <SideBar
        type={type}
        data={isSecondData ? SidebarDataSecond : SidebarData}
      />
    </div>
  )
}

export default SidebarComp