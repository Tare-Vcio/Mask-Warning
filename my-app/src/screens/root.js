import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import AboutUs from "../components/AboutUs"
import SignIn from "../components/Signin"
import Footer from "../components/Footer"

const ScreensRoot  = () => {
    return (
      
      <Routes>  
        <Route path="/"         element={ <Home /> } />  
        <Route path="/about-us" element={ <AboutUs />} />
        <Route path="/signIn"   element={ <SignIn />} />
        <Route path="/footer"   element={ <Footer />} />
      </Routes>
    )
}
export default ScreensRoot 
