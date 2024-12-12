import "./side.css";
import openImg from "../../assets/open.png";
import searchImg from "../../assets/search.png";
import chatImg from "../../assets/newChat.png";

export function SideBar({ setShowSidebar ,isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      <div className="top">
        <img 
          className="open-bar" 
          src={openImg} 
          alt="" 
          onClick={() => setShowSidebar(false)} 
        />
        <div className="top-1">
          <img className="search" src={searchImg} alt="" />
          <img className="new-chat" src={chatImg} alt="" />
        </div>
      </div>
    </div>
  );
}
