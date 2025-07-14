import { useState } from "react"
import styles from "./Controls.module.css"
export function Controls({ onSend }){
    const[content, setContent] = useState("");

    function handleContentChange(e){
        setContent(e.target.value);
    }

    function handleContentSend(){
        if(content.length > 0){
            onSend(content);
            setContent("");
        }
    }

    function handleEnterPress(event){
        if(event.key === "Enter" && !event.shiftKey){
            event.preventDefault();
            handleContentSend();
        }
    }
    return(
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea 
                    className={styles.TextArea} 
                    value={content}
                    onChange={handleContentChange} 
                    placeholder="Message Ai chatbot"
                    onKeyDown={handleEnterPress}
                    />
            </div>
            <button 
                className={styles.Button}
                onClick={handleContentSend}
                >
                    <SendIcon />
            </button>
        </div>
    )
};

function SendIcon(){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="42px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#e8eaed">
        <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z"/></svg>
    )
}