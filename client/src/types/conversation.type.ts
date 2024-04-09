export interface Message { 
    msg: string;
    date: string;
}

export interface ConversationMessages { 
    sender: Message;
    bot: Message;
}