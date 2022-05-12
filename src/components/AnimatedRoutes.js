
import { IntroComponent } from "./Intro";
import { PortfolioComponent } from "./Portfolio.js";
import { CvComponent } from "./Cv.js";
import {Route, Routes, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"

export const AnimatedRoutes = (props) => {
    const location = useLocation()
    
    return (
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<IntroComponent background={props.backgroundColor} text={props.textColor}/>} />
        <Route path="/cv" element={<CvComponent background={props.backgroundColor} text={props.textColor}/>} />
        <Route path="/portfolio" element={<PortfolioComponent background={props.backgroundColor} text={props.textColor}/>} />
        <Route path="#" element={<IntroComponent background={props.backgroundColor} text={props.textColor}/>}/>
      </Routes>
      </AnimatePresence>
    )
}