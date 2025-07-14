// You're using React's useState hook to manage the chat history (messages).
import { useState } from 'react';
// Chat is likely a component that displays messages in the conversation.
import { Chat } from './components/Chat/Chat';
// Controls is likely a component with an input field and a send button.
import { Controls } from './components/controls/Controls';
// we're importing the Assistant class from the Google Gemini implementation (Gemini 1.5 model).
// This class wraps the Google Generative AI SDK.
import { Assistant } from './assistants/googleai';
import styles from './App.module.css'; 

function App() {
  //You create a new instance of the Assistant class. By default, it starts with gemini-1.5-flash and an empty history.
  const assistant = new Assistant();
  // React state for storing the chat conversation history.
  const [messages, setMessages] = useState([]);

  function addMessage(message){
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  // handleContentSend(content) flow:
  async function handleContentSend(content){
    // Adds your user message to the state.
    addMessage({ content, role : "user"});
    try {
      // Calls the assistant.chat() method, passing the message and current history.
      const result = await assistant.chat(content, messages);
      // Adds the AI's response to the message list as an "assistant" role.
      addMessage({ content : result, role : "assistant"});
    } 
    // If there’s an error (e.g., API failure), adds a "system" message saying it failed.
    catch (error) {
      addMessage({ content : "Sorry i couldn't process your request please try again !!!", role: "system"});
    }
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src="/bot.png" className={styles.logo} />
        <h1 className={styles.title}>AI Chatbot</h1>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages}/>
      </div>
      <Controls onSend={handleContentSend}/>
    </div>
  )
}
export default App
