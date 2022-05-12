import React, {useState} from "react"
import {HashRouter as Router} from "react-router-dom"
import {ModalComponent} from "./components/Modal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { AnimatedRoutes } from "./components/AnimatedRoutes.js";
import { NavbarComponent } from "./components/Navbar.js";
const bodyEl = document.getElementById("body-el")

export const App = () => {
  const [backgroundColor, setBackground] = useState("bg-dark")
  const [textColor, setTextColor] = useState("text-light")

  const changeBackground = () => {
    if (backgroundColor === "bg-dark") {
      setBackground("bg-light")
      setTextColor("text-dark")
      bodyEl.className = "bg-light"
    }
    else {
      setBackground("bg-dark")
      setTextColor("text-light")
      bodyEl.className = "bg-dark"
    }
  }

  return (
    <div className={backgroundColor} id="app">
      <Router>
        <NavbarComponent onclick={changeBackground} />
        <AnimatedRoutes backgroundColor={backgroundColor} textColor={textColor} />
      </Router>
      <ModalComponent/>
    </div>
  )
}
