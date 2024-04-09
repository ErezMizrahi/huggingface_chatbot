import React, { useRef } from 'react'
import style from './styles/chat.module.css';

interface ChatInputProps {
        onNewMessageEvent: (message: string)=>void
}

const ChatInput = ({onNewMessageEvent}: ChatInputProps) => {

    const handleOnNewMessageEvent = () => {
        onNewMessageEvent(messageRef.current?.value || '');
        messageRef.current!.value = '';
    }

    const messageRef = useRef<HTMLTextAreaElement>(null);
    return (
        <div className={style.chatInputContainer}>
                <textarea placeholder='enter text...' ref={messageRef} />
                <button onClick={handleOnNewMessageEvent}>
                    Send
                </button>
        </div>
    )
}

export default ChatInput