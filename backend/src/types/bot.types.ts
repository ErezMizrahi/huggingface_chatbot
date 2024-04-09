export interface Message { 
    msg: string;
    date: string;
}

export interface BotResponse {
    sender: Message;
    bot: Message
}
