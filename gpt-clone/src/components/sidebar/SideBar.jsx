import "./side.css";
import openImg from "../../assets/open.png";
import searchImg from "../../assets/search.png";
import chatImg from "../../assets/newChat.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../slices/centralSlice";

export function SideBar() {
  const dispatch = useDispatch();
  const { showSidebar: isOpen, recent } = useSelector((state) => state.central);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="top">
        <img
          className="open-bar"
          src={openImg}
          alt=""
          onClick={() => dispatch(toggleSidebar())}
        />
        <div className="top-1">
          <img className="search" src={searchImg} alt="" />
          <img className="new-chat" src={chatImg} alt="" />
        </div>
      </div>
      <div className="recent">
        <div className="header">
          <p>Recent</p>
        </div>
        <div className="tabs">
          {recent.map((rec,ind) => (
            <ul key={ind} id="tab">
              <li>{rec.content}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
