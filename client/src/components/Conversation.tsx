import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket.io'
import Bubble from './Bubble';
import style from './styles/chat.module.css';
import { ConversationMessages } from '../types/conversation.type';



const Conversation = () => {
  const [recivedMessage, setRecivedMessage] = useState<ConversationMessages[]>([]);

    useEffect(() => {
        socket.on('recive_message', (data) => {
            const conversation: ConversationMessages = JSON.parse(data);
            const messages = [...recivedMessage, conversation];
            setRecivedMessage(messages);
        })
      })
      
  return (
    <div className={style.conversationContainer}>
        {recivedMessage.map((msg, index) => (
            <Bubble key={`id-${index}`} conversation={msg} />
        ) )}
    </div>
  )
}

export default Conversation