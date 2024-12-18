import "./main.css";
import closeImg from "../../assets/close.png";
import profileImg from "../../assets/profile-img.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../slices/centralSlice";
import { useEffect, useState } from "react";
import run from "../../gemini/gem";

export function MainComponent() {
  const dispatch = useDispatch();
  const { showSidebar: isClose } = useSelector((state) => state.central);
  const [message, setMessage] = useState("");
  const [response,setResponse] = useState("")

  async function handleMessage() {
    try {
      const res = await run(message)
      setResponse(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className={`main ${isClose ? "shift" : ""}`}>
      <div className="close-side">
        {!isClose && (
          <div className="close-img">
            <img
              className="close-sidebar"
              onClick={() => dispatch(toggleSidebar())}
              src={closeImg}
              alt="close-img"
            />
          </div>
        )}
        <p id="app-name">GEM-AI</p>
      </div>

      <div className="chat-list">
        <div className="heading">What can I help with?</div>
        <div className="chat">
          <input
            type="text"
            placeholder="Message GPT"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleMessage}>Send</button>
        </div>
        <div className="response">{response}</div>
      </div>

      <div className="profile-img">
        <img className="profile" src={profileImg} alt="profile-img" />
      </div>
    </main>
  );
}
