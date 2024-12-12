// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import closeImg from "./assets/close.png";
// import { SideBar } from "./components/sidebar/SideBar";
// import { MainComponent } from "./components/MainComponent/MainComponent";

// function App() {
//   const [showSidebar, setShowSidebar] = useState(false);
//   return (
//     <>
//       <SideBar setShowSidebar={setShowSidebar} isOpen={showSidebar} />
//       <MainComponent/>
//       <img
//         className="close-sidebar"
//         onClick={() => setShowSidebar(!showSidebar)}
//         src={closeImg}
//         alt="close-img"
//       />
      
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css'; // Import external CSS

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} id="mySidebar">
        <button className="close-button" onClick={closeSidebar}>
          Close &times;
        </button>
        <a href="#" className="sidebar-link">Link 1</a>
        <a href="#" className="sidebar-link">Link 2</a>
        <a href="#" className="sidebar-link">Link 3</a>
      </div>

      {/* Main content */}
      <div className={`main ${sidebarOpen ? 'shifted' : ''}`} id="main">
        <div className="header">
          <button className="menu-button" id="openNav" onClick={openSidebar}>
            &#9776;
          </button>
          <div className="container">
            <h1>My Page</h1>
          </div>
        </div>



        <div className="container">
          <p>In this example, the sidebar is hidden (style="display:none")</p>
          <p>It is shown when you click on the menu icon in the top left corner.</p>
          <p>When it is opened, it shifts the page content to the right.</p>
          <p>We use JavaScript to add a 25% left margin to the div element with id="main" when this happens. The value "25%" matches the width of the sidebar.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
