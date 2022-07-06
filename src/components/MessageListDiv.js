import React, { useEffect, useState } from 'react'
import { fileMessageExampleData, locationMessageExampleData, meetingMessageExampleData, photoMessageExampleData, spotifyMessageExampleData, textMessageExampleData, videoMessageExampleData, voiceMessageExampleData } from './Contents'
import styles from '../pages/index.module.css'
import { Avatar, MessageBox, Input, Button, MeetingMessage, MeetingLink } from "react-chat-elements"

const MessageListDiv = ({ type, chatInfo }) => {
  const meetingData = {
    subject: new Date().toString(),
    title:"Daily Meeting",
    date: new Date(),
    dateString: new Date().toDateString,
    collapseTitle:"Info",
    participants:[
        {
          id: '1',
          title: 'Ahmet'
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
    <div className={styles.MessageListDiv}>
      <MessageBox
        position={"left"}
        type={"text"}
        title={chatInfo.name}
        text={chatInfo.subtitle}
      />
      {
        type === "text" ?
          textMessageExampleData.map((x, i) => {
            return <MessageBox
              key={i}
              position={"right"}
              type={"text"}
              text={x}
            />
          })
        :
          type === "photo" ?
            photoMessageExampleData.map((x, i) => {
              return <MessageBox
                key={i}
                position={"right"}
                type={"photo"}
                data={{
                    uri: x
                }}
              />
            })
          :
            type === "voice" ?
              voiceMessageExampleData.map((x, i) => {
                return <MessageBox
                  key={i}
                  position={"right"}
                  type={"audio"}
                  data={{
                      audioURL: x
                  }}
                />
              })
            :
              type === "location" ?
                locationMessageExampleData.map((x, i) => {
                  return <MessageBox
                    key={i}
                    position={"right"}
                    type={"location"}
                    src={x.src}
                    data={x.data}
                  />
                })
              :
                type === "spotify" ?
                  spotifyMessageExampleData.map((x, i) => {
                    return <MessageBox
                      key={i}
                      position={"right"}
                      type={"spotify"}
                      theme={x.theme}
                      view={x.view}
                      uri={x.uri}
                    />
                  })
                :
                  type === "video" ?
                    videoMessageExampleData.map((x, i) => {
                      return <MessageBox
                        key={i}
                        position={"right"}
                        type={"video"}
                        data={x.data}
                      />
                    })
                  :
                    type === "meeting" ?
                      [
                        <MessageBox
                          position={"left"}
                          type={"meeting"}
                          subject={new Date().toString()}
                          title="Daily Meeting"
                          date={new Date()}
                          dateString={new Date().toDateString}
                          collapseTitle="Info"
                          participants={[
                              {
                                id: '1',
                                title: 'Ahmet'
                              },
                              {
                                id: '2',
                                title: 'You'
                              },
                          ]}
                          dataSource=
                            {[
                              {
                                id: '1',
                                avatar: 'https://avatars.githubusercontent.com/u/19151996?s=200&v=4',
                                message: "Let's start the daily !",
                                title: 'Daily Meeting',
                                avatarFlexible: true,
                                date: new Date(),
                              }
                            ]}
                        />,
                        meetingMessageExampleData.map((x, i) => {
                          return <MessageBox
                              reply={{
                                  title: "Ahmet",
                                  titleColor: "#8717ae",
                                  message: "Let's join the daily meeting.",
                              }}
                              key={i}
                              position={"right"}
                              type={"meetingLink"}
                              meetingID="1"
                              text={x}
                            />
                        })
                      ]
                    :
                    fileMessageExampleData.map((x, i) => {
                      return <MessageBox
                        key={i}
                        position={"right"}
                        type={"file"}
                        text="rce-document"
                        data={x.data}
                      />
                    })
      }
    </div>
  )
}

export default MessageListDiv