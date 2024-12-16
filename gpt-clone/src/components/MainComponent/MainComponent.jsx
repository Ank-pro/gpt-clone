import "./main.css";
import closeImg from "../../assets/close.png";
import profileImg from "../../assets/profile-img.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../slices/centralSlice";

export function MainComponent() {
  
  const dispatch = useDispatch();
  const {showSidebar : isClose} = useSelector((state)=> state.central);

  return (
    <main className={`main ${isClose ? 'shift' : ''}`}>
      <div className="close-side">
      {!isClose && <div className="close-img">
        <img
          className="close-sidebar"
          onClick={() => dispatch(toggleSidebar())}
          src={closeImg}
          alt="close-img"
        />
      </div>}
        <p id="app-name">GEM-AI</p>
      </div>

      <div className="chat-list">
        <div className="heading">What can I help with?</div>
        <div className="chat">
          <input type="text" placeholder="Message GPT" />
        </div>
        <div className="suggestion"></div>
      </div>

      <div className="profile-img">
        <img className="profile" src={profileImg} alt="profile-img" />
      </div>
    </main>
  );
}
