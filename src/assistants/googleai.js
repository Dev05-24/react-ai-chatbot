import { GoogleGenerativeAI } from '@google/generative-ai';

//creating an instance of google ai and providing environment variable
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export class Assistant{
    #chat;
    constructor(model = "gemini-1.5-flash"){
        //creating gemini model
        const gemini = googleai.getGenerativeModel({ model })
        //now let's create a chat instance using gemini and the start method and history as an empty array
        this.#chat = gemini.startChat({ history : [] })
    }

    async chat(content){
        try {
            const result = await this.#chat.sendMessage(content);
            return result.response.text();
        } catch (error) {
            console.error("Gemini chat error:", error);
            throw error;
        }
    }
}