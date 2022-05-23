import React from 'react'
import { MeetingList } from "react-chat-elements"

const MeetingSide = () => {
  return (
    <div>
      <MeetingList
        className='meeting-list'
        dataSource={[
          {
            id: '1',
            subject: "How's it going",
            date: new Date(),
            avatars: [{
                src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            }]
          },
          {
            id: '1',
            subject: 'Daily',
            date: new Date(),
            avatars: [
              {
                src: 'https://avatars.githubusercontent.com/u/41473129?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/80540635?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/15075759?s=100&v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/53093667?s=100&v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/50342489?s=100&v=4',
              }
            ]
          },
          {
            id: '1',
            subject: 'About the presentation',
            date: new Date(),
            avatars: [
              {
                src: 'https://avatars.githubusercontent.com/u/15075759?s=100&v=4',
              },
            ]
          },
          {
            id: '1',
            subject: 'For tomorrow',
            date: new Date(),
            avatars: [
              {
                src: 'https://avatars.githubusercontent.com/u/80754124?s=100&v=4',
              },
            ]
          },
          {
            id: '1',
            subject: 'Interview',
            date: new Date(),
            avatars: [
              {
                src: 'https://avatars.githubusercontent.com/u/50342489?s=100&v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/15075759?s=100&v=4',
              },
            ]
          },
          {
            id: '1',
            subject: 'Next Event',
            date: new Date(),
            avatars: [
              {
                src: 'https://avatars.githubusercontent.com/u/90318672?v=4',
              },
            ]
          },
        ]}
      />
    </div>
  )
}

export default MeetingSide