import { HfInference } from "@huggingface/inference";

interface Message { 
    msg: string;
    date: string;
}

interface BotResponse {
    sender: Message;
    bot: Message
}

class HFBot {

    constructor(private readonly hf = new HfInference('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')) {
        console.log('connected to hugging face...');
        
    }
        
    async Question(question: string): Promise<BotResponse> {
        const now = Date.now();
        const date = new Intl.DateTimeFormat('he-IL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(now);

        try {
            const response = await this.hf.textGeneration({
                model: 'tiiuae/falcon-7b-instruct',
                inputs: `${question}`,
                parameters: {
                    max_new_tokens: 128,
                    return_full_text: false,
                    temperature: 1.0,
                }
            } );

            return {
                sender: { msg: question, date },
                bot: { msg: response.generated_text, date}
            };
        } catch (e) {
            console.error(e);
        }
       
        return { sender: { msg: question, date } , bot: { msg: 'please try again later...', date }};
    }
}

const hfBot = new HFBot();
export default hfBot;