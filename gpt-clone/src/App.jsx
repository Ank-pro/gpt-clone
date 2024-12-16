import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SideBar } from "./components/sidebar/SideBar";
import { MainComponent } from "./components/MainComponent/MainComponent";

function App() {
  
  return (
    <>
      <SideBar/>
      <MainComponent/>
      
      
    </>
  );
}

export default App;
