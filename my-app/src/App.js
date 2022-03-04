import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScreensRoot from "./screens/root";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <Navbar />
      <ScreensRoot />
    </BrowserRouter>
     
    </div>
  );
}

export default App;
