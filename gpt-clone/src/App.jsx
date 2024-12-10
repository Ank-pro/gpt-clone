import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import closeImg from "./assets/close.png";
import { SideBar } from "./components/SideBar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <SideBar setShowSidebar={setShowSidebar} isOpen={showSidebar} />
      <img
        className="close-sidebar"
        onClick={() => setShowSidebar(!showSidebar)}
        src={closeImg}
        alt="close-img"
      />
    </>
  );
}

export default App;
