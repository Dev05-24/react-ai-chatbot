import { useState } from 'react';
import styles from './App.module.css'; 
import { Chat } from './components/chat/Chat';
function App() {
  const [messages, setMessages] = useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src="/bot.png" className={styles.logo} />
        <h1 className={styles.title}>AI Chatbot</h1>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages}/>
      </div>
    </div>
  )
}
const MESSAGES = [
  {
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
  {
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
  {
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
  {
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, inventore iure debitis quod vero rerum illo aliquid itaque autem reiciendis."
  },
]
export default App
