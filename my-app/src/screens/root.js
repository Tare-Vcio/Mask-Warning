import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Contact from "../components/Contact"

const ScreensRoot  = () => {
    return (
      <Routes>  
        <Route path="/"        element={ <Home /> } />  
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    )
}
export default ScreensRoot 
