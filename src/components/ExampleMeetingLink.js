import React from "react"
import { MeetingLink, MessageBox } from "react-chat-elements"

export const ExampleMeetingLink = () => {
  return (
    <MeetingLink
      text="This is a meeting link for tomorrow's event."
      meetingID="1"
      actionButtons={[
        {
          onClickButton: () => {
            alert("Joined")
          },
          Component: () => <div>Join</div>,
        },
        {
          onClickButton: () => {
            alert("Postponed")
          },
          Component: () => <div>Later</div>,
        },
      ]}
    />
  )
}

export const ExampleMessageBoxMeetingLink = () => {
  return (
    <MessageBox
      position={"left"}
      title="Emre"
      type={"meetingLink"}
      meetingID="1"
      text="This is a meeting link for tomorrow's event."
      actionButtons={[
        {
          onClickButton: () => {
            alert("Joined")
          },
          Component: () => <div>Join</div>,
        },
        {
          onClickButton: () => {
            alert("Postponed")
          },
          Component: () => <div>Later</div>,
        },
      ]}
    />
  )
}
