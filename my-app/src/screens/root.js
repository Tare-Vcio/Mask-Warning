import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Contact from "../components/Contact"
import SignIn from "../components/Signin"

const ScreensRoot  = () => {
    return (
      
      <Routes>  
        <Route path="/"        element={ <Home /> } />  
        <Route path="/contact" element={ <Contact />} />
        <Route path="/signIn" element={ <SignIn />} />
      </Routes>
    )
}
export default ScreensRoot 
