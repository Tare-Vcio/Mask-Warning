import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Contact from "../components/Contact"
import Guide from "../components/Guide"
import GuideConnectCamera from "../components/GuideConnectCamera"
import GuideReportDefect from "../components/GuideReportDefect"
import ForgotPassword from "../components/Forgot password"

const ScreensRoot  = () => {
    return (
      <Routes>  
        <Route path="/"        element={ <Home /> } />  
        <Route path="/contact" element={ <Contact />} />
        <Route path="/guide" element={ <Guide />} />
        <Route path="/connect-camera" element={ <GuideConnectCamera />} />
        <Route path="/report-defect" element={ <GuideReportDefect />} />
        <Route path="/forgot-password" element={ <ForgotPassword />} />
      </Routes>
    )
}
export default ScreensRoot 
