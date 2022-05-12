import React from "react"
import { Container } from "react-bootstrap"
import image from "../img/undraw_welcoming_re_x0qo.svg"
import { motion } from "framer-motion"

export const IntroComponent = (props) => {
    return (
        <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1,  transition:{duration: 0.1}}} 
        exit={{opacity: 0}}
            className={`text-center pt-5 ${ props.backgrond } ${props.text}`}>
            <Container className="con">
                <div className="d-sm-flex justify-content-between">
                    <div className="m-auto">
                        <h1 className="display-1"><span className="highlighted-text">Welcome</span> to my <span className="highlighted-text">portfolio website</span></h1>
                        <p className="text-secondary">
                            My name is <span className="highlighted-text text-uppercase">Robin Hörnkvist</span> and I study to become a system and web engineer
                        </p>
                    </div>
                    <img className="img-fluid w-50 d-sm-block" src={image} alt="Illustration of a person waving in front of a tree" />
                </div>
            </Container>
        </motion.section>
    )
}