import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ChatList } from "react-chat-elements"
import { BsFillChatFill } from 'react-icons/bs'
import { AiFillVideoCamera } from 'react-icons/ai'
import MessageList from '../../components/MessageList'
import MeetingSide from '../../components/MeetingSide'
import logo from '../../../static/img/logo.png'
import detayLogo from '../../../static/img/detay-logo.png'
import githubLogo from '../../../static/img/github-logo.png'
import npmLogo from '../../../static/img/npm-logo.png'

const Demo = () => {
  const [unreadKursat, setUnreadKursat] = useState(0)
  const [unreadEmre, setUnreadEmre] = useState(1)
  const [unreadEsra, setUnreadEsra] = useState(1)
  const [unreadBensu, setUnreadBensu] = useState(1)
  const [unreadBurhan, setUnreadBurhan] = useState(1)
  const [unreadAbdurrahman, setUnreadAbdurrahman] = useState(1)
  const [unreadAbdurrahim, setUnreadAbdurrahim] = useState(1)
  const [unreadAhmet, setUnreadAhmet] = useState(1)

  const [isChatSide, setIsChatSide] = useState(true)

  const [chatInfo, setChatInfo] = useState({
    "name": "Kursat",
    "avatar" : "https://avatars.githubusercontent.com/u/80540635?v=4",
    "subtitle" : "Why don't we go to the mall this weekend ?"
  })

  const [chatType, setChatType] = useState(() => {
    if (chatInfo.name === "Kursat") return "text"
    else if (chatInfo.name === "Emre") return "photo"
    else if (chatInfo.name === "Esra") return "voice"
    else if (chatInfo.name === "Bensu") return "location"
    else if (chatInfo.name === "Burhan") return "spotify"
    else if (chatInfo.name === "Abdurrahman") return "file"
    else if (chatInfo.name === "Abdurrahim") return "video"
    else if (chatInfo.name === "Ahmet") return "meeting"
  })

  const [, updateState] = React.useState();


  useEffect(() => {
    if (chatInfo.name === "Kursat") {
      setChatType("text")
    }
    else if (chatInfo.name === "Emre") {
      setChatType("photo")
    }
    else if (chatInfo.name === "Esra") {
      setChatType("voice")
    }
    else if (chatInfo.name === "Bensu") {
      setChatType("location")
    }
    else if (chatInfo.name === "Burhan") {
      setChatType("spotify")
    }
    else if (chatInfo.name === "Abdurrahman") {
      setChatType("file")
    }
    else if (chatInfo.name === "Abdurrahim") {
      setChatType("video")
    }
    else if (chatInfo.name === "Ahmet") {
      setChatType("meeting")
    }
  }, [chatInfo])

  return (
    <div className={styles.demoContainer}>
      <div className={styles.leftDivContainer}>
        <div className={styles.infoDivContainer}>
          <div className={styles.infoContentDiv}>
            <a href='/docs-react-chat-elements/' className={styles.infoLogo}>
              <img src={logo} alt="logo" />
            </a>
            <a href='https://detaysoft.com/' className={styles.infoLogo}>
              <img src={detayLogo} alt="detay-logo" />
            </a>
            <a href='https://github.com/Detaysoft/react-chat-elements' className={styles.infoLogoSmall}>
            <img src={githubLogo} alt="github-logo" />
            </a>
            <a href='https://www.npmjs.com/package/react-chat-elements' className={styles.infoLogoSmall}>
              <img src={npmLogo} alt="npm-logo" />
            </a>
          </div>
        </div>
        <div className={styles.selectAreaDiv}>
          <BsFillChatFill className={styles.sideIcon} onClick={() => setIsChatSide(true)} />
          <AiFillVideoCamera className={styles.sideIcon} onClick={() => setIsChatSide(false)} />
        </div>
        <div className={styles.chatDivContainer}>
          {
            isChatSide ?
            <ChatList
              onClick={(info) => {
                if (info.title === "Kursat") setUnreadKursat(0)
                if (info.title === "Emre") setUnreadEmre(0)
                if (info.title === "Esra") setUnreadEsra(0)
                if (info.title === "Bensu") setUnreadBensu(0)
                if (info.title === "Burhan") setUnreadBurhan(0)
                if (info.title === "Abdurrahman") setUnreadAbdurrahman(0)
                if (info.title === "Abdurrahim") setUnreadAbdurrahim(0)
                if (info.title === "Ahmet") setUnreadAhmet(0)
                setChatInfo({
                  "name": info.title,
                  "avatar": info.avatar,
                  "subtitle": info.subtitle,
                })
              }}
              className='chat-list'
              dataSource={[
                {
                  avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                  alt: 'kursat_avatar',
                  title: 'Kursat',
                  subtitle: "Why don't we go to the mall this weekend ?",
                  date: new Date(),
                  unread: unreadKursat,
                },
                {
                  avatar: 'https://avatars.githubusercontent.com/u/41473129?v=4',
                  alt: 'emre_avatar',
                  title: 'Emre',
                  subtitle: "Send me our photos.",
                  date: new Date(),
                  unread: unreadEmre,
                },
                {
                  avatar: 'https://avatars.githubusercontent.com/u/90318672?v=4',
                  alt: 'abdurrahim_avatar',
                  title: 'Abdurrahim',
                  subtitle: "Hey ! Send me the animation video please.",
                  date: new Date(),
                  unread: unreadAbdurrahim,
                },
                {
                  avatar: 'https://avatars.githubusercontent.com/u/53093667?s=100&v=4',
                  alt: 'esra_avatar',
                  title: 'Esra',
                  subtitle: "I need a random voice.",
                  date: new Date(),
                  unread: unreadEsra,
                },
                {
                  avatar: 'https://avatars.githubusercontent.com/u/50342489?s=100&v=4',
                  alt: 'bensu_avatar',
                  title: 'Bensu',
                  subtitle: "Send your location.",
                  date: new Date(),
                  unread: unreadBensu,
                },
                {
                  avatar: 'https://avatars.githubusercontent.com/u/80754124?s=100&v=4',
                  alt: 'burhan_avatar',
                  title: 'Burhan',
                  subtitle: "Recommend me some songs.",
                  date: new Date(),
                  unread: unreadBurhan,
                },
                {
                  avatar: 'https://avatars.githubusercontent.com/u/15075759?s=100&v=4',
                  alt: 'abdurrahman_avatar',
                  title: 'Abdurrahman',
                  subtitle: "Where is the presentation file ?",
                  date: new Date(),
                  unread: unreadAbdurrahman,
                },
                {
                  avatar: 'https://avatars.githubusercontent.com/u/57258793?s=100&v=4',
                  alt: 'ahmet_avatar',
                  title: 'Ahmet',
                  subtitle: "Let's join the daily meeting.",
                  date: new Date(),
                  unread: unreadAhmet,
                }
            ]} />
            :
            <MeetingSide />
          }
        </div>
      </div>
      <div className={styles.rightDivContainer}>
        <MessageList chatInfo={chatInfo} chatType={chatType} updateState={updateState} />
      </div>
    </div>
  )
}

export default Demo