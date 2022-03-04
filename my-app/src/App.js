import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScreensRoot from "./screens/root";
import "./App.css";

function App() {
  return (
    <BrowserRouter> 
      <ScreensRoot />
    </BrowserRouter>
  );
}

export default App;
