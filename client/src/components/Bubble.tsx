import style from './styles/chat.module.css';
import { ConversationMessages } from '../types/conversation.type';

interface BubbleProps {
    conversation: ConversationMessages;
}

const Bubble = ({ conversation } : BubbleProps) => {
    const now = Date.now();
    const date = new Intl.DateTimeFormat('he-IL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(now);

  return (
    <div className={style.conversationMessageContainer}> 
        <div className={style.bubble} style={{alignSelf: 'start'}}>
            <label>{conversation.sender.msg}</label>
            <label style={{fontSize: '0.7em'}}>{conversation.sender.date}</label>
        </div>
        <div className={style.bubble} style={{alignSelf: 'end'}}>
            <label>{conversation.bot.msg}</label>
            <label style={{fontSize: '0.7em'}}>{conversation.bot.date}</label>
        </div>
    </div>
  )
}

export default Bubble