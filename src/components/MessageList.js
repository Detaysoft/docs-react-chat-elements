import React, { useEffect, useState, useRef } from 'react'
import styles from '../pages/index.module.css'
import { Avatar, MessageBox, Input, Button } from "react-chat-elements"
import { fileMessageExampleData, locationMessageExampleData, meetingMessageExampleData, photoMessageExampleData, spotifyMessageExampleData, textMessageExampleData, videoMessageExampleData, voiceMessageExampleData } from './Contents'
import MessageListDiv from './MessageListDiv'

let clearRef = () => {};

const MessageList = ({ chatInfo, chatType, updateState }) => {
  const messageInput = useRef(null);
  const [inputValue, setInputValue] = useState("")
  return (
    <div className={styles.messageListContainer}>
      <div className={styles.chatInfoDiv}>
        <Avatar
          src={chatInfo.avatar}
          alt="avatar"
          size="xlarge"
          type="circle"
        />
        <div className={styles.chatInfoArea}>
          <label className={styles.nameLabel}>
            {chatInfo.name}
          </label>
          <label className={styles.statusLabel}>
            Online
          </label>
        </div>
      </div>
      <div className={styles.chatMessageListDiv}>
        <MessageListDiv type={chatType} chatInfo={chatInfo} />
      </div>
      <div className={styles.chatFooterDiv}>
        {
          chatType === "text" ?
            <Input
              className="inputStyle"
              placeholder="Type here..."
              multiline={false}
              referance={messageInput}
              clear={(clear) => clearRef = clear}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  if (inputValue !== "") {
                    textMessageExampleData.push(inputValue)
                    clearRef();
                    updateState([]);
                  }
                }
              }}
              onChange={(event) => setInputValue(event.target.value)}
              rightButtons={<Button text=">" className="sendButton" onClick={() => {
                if (inputValue !== "") {
                  textMessageExampleData.push(inputValue)
                  clearRef();
                  updateState([]);
                }
              }} />}
            />
          :
            <div className={styles.sendSomethingArea} onClick={() => {
              if (chatType === "photo") {
                photoMessageExampleData.push("https://picsum.photos/200/150")
              }
              else if (chatType === "voice") {
                voiceMessageExampleData.push("https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3")
              }
              else if (chatType === "location") {
                locationMessageExampleData.push({
                  "src" : "https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png",
                  "data" : {
                      latitude: "39.74047838338539",
                      longitude: "37.01549275396775",
                      mapURL: "https://www.google.com/maps/@39.7362086,37.0366986,14z"
                  }
                })
              }
              else if (chatType === "spotify") {
                spotifyMessageExampleData.push({
                  "theme": "white",
                  "view": "coverart",
                  "uri" : "spotify:artist:53XhwfbYqKCa1cC15pYq2q",
                })
              }
              else if (chatType === "file") {
                fileMessageExampleData.push({
                  "data": {
                    uri: "https://www.sample-videos.com/pdf/Sample-pdf-5mb.pdf",
                    status: {
                      click: false,
                      loading: 0,
                    },
                  }
                })
              }
              else if (chatType === "video") {
                videoMessageExampleData.push({
                  "data": {
                    videoURL: "https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
                    status: {
                      click: true,
                      loading: 0.5,
                      download: true,
                    },
                  }
                })
              }
              else if (chatType === "meeting") {
                meetingMessageExampleData.push("New daily meeting link here.")
              }
              updateState([]);
            }}>
              {
                chatType === "photo" ?  "Send Photo"
                : chatType === "voice" ? "Send Voice"
                  : chatType === "location" ? "Send Location"
                    : chatType === "spotify" ? "Send Spotify List"
                      : chatType === "video" ? "Send Video"
                        : chatType === "meeting" ? "Send Meeting Link"
                        : "Send File"
              }
            </div>
        }
      </div>
    </div>
  )
}

export default MessageList