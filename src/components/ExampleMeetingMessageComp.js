import React from 'react'
import { MessageBox } from "react-chat-elements"

const ExampleMeetingMessageComp = () => {
  const meetingData = {
    subject: new Date().toString(),
    title:"Daily Meeting",
    date: new Date(),
    dateString: new Date().toDateString,
    collapseTitle:"Info",
    participants:[
        {
          id: '1',
          title: 'Kursat'
        },
        {
          id: '2',
          title: 'You'
        },
    ],
    dataSource:
      [
        {
          id: '1',
          avatar: 'https://avatars.githubusercontent.com/u/19151996?s=200&v=4',
          message: "Let's start the daily !",
          title: 'Daily Meeting',
          avatarFlexible: true,
          date: new Date(),
        }
      ]
  }
  return (
    <MessageBox
      position={"left"}
      title="Esra"
      type={"meeting"}
      meeting={meetingData}
    />
  )
}

export default ExampleMeetingMessageComp