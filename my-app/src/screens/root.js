import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Guide from "../components/Guide"
import GuideConnectCamera from "../components/Guide/GuideConnectCamera"
import GuideReportDefect from "../components/Guide/GuideReportDefect"
import ForgotPassword from "../components/Forgot password"
import AboutUs from "../components/AboutUs"
import SignIn from "../components/Signin"
import Footer from "../components/Footer"

const ScreensRoot  = () => {
    return (
      
      <Routes>  
        <Route path="/"        element={ <Home /> } />  
        <Route path="/guide" element={ <Guide />} />
        <Route path="/guide/connect-camera" element={ <GuideConnectCamera />} />
        <Route path="/guide/report-defect" element={ <GuideReportDefect />} />
        <Route path="/forgot-password" element={ <ForgotPassword />} />
        <Route path="/about-us" element={ <AboutUs />} />
        <Route path="/signIn"   element={ <SignIn />} />
        <Route path="/footer"   element={ <Footer />} />
      </Routes>
    )
}
export default ScreensRoot 
