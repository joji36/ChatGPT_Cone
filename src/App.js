import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./OpenAi";
import { useState } from "react";

function App() {

  const[input, setInput] = useState("");

  const handleSend =async () =>{
    const res =  await sendMsgToOpenAI(input)
    console.log(res);
  }


  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand ">ChatGPT by JOJI</span>{" "}
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" /> New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is Programmming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              How to Use an API ?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listItemImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listItemImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="listItemImg" />
            Upgrade To Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="GPT Logo" />
            <p className="txt">
              Hello! I am a language model developed by OpenAI. My primary
              function is generating human-like text based on the prompts given
              to me
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="GPT Logo" />
            <p className="txt">
              Hello! I am a language model developed by OpenAI. My primary
              function is generating human-like text based on the prompts given
              to me
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Type a message..."  value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button className="send" onClick={handleSend}>
              {/* <img src={sendBtn} alt="send" /> */}
            </button>
          </div>
          <p>
            © 2023 GPT4.2 By Joji - All rights reserved | Designed & Developed by JOJI
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
