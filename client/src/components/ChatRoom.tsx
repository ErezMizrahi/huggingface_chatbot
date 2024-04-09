import React from 'react'
import styles from './styles/chat.module.css';
import ChatInput from './ChatInput';
import Conversation from './Conversation';
import { socket } from '../utils/socket.io';

const ChatRoom = () => {
    const onNewMessageEvent = (message: string) => {
        console.log('send...')
        socket.emit('send_message', { message });
    }

  return (
    <div className={styles.chatRoom}>
        <Conversation />
        <ChatInput onNewMessageEvent={onNewMessageEvent}/>
    </div>
  )
}

export default ChatRoom