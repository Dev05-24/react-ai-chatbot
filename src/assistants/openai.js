import OpenAI from "openai";

const openai = new OpenAI({
    apiKey : import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})

export class Assistant{
    #model
    
    constructor(model = "gpt-4o"){
        this.#model = model
    }

    async chat(content, history){
        try {
             const result = await openai.chat.completions.create({
                 model: this.#model,
                 messages: [...history, {content, role : "user" }],
                });
            return result.choices[0].message.content;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}