import React from "react"
import { Container } from "react-bootstrap"
import image from "../img/undraw_personal_info_re_ur1n.svg"
import { useFetch } from "./UseFetch"
const url = "data.json"

export const CvComponent = (props) => {
   const {data, isLoading, error} = useFetch(url, {headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}})

    return (
        <section className={`text-center pt-5 ${ props.backgrond } ${props.text}`}>
        {
            isLoading ? (
                    <>
                    <div className="spinner-border text-muted">
                    </div>
                    <p>Loading experiences</p>
                    <p>{error}</p>
                    </>
                ) : (

                <Container className="rounded-3 p-1 con">
                    <div className="wrapper d-sm-flex p-3 justify-content-between">
                        <img className="img-fluid w-50 d-none d-md-block p-2" src={image} alt="Illustration of a person displaying personal information" />
                        
                        <div id="work-education-container" className="m-auto p-2">
                            <h4 id="work-header" className="cv-header display-5 highlighted-text">Work Experiences</h4>
                                
                                {

                                    data["work experience"].map((work, id) => (
                                    <div className="pb-2" key={id}>
                                    <h5 key={id + 1 }>{work["work-place"]}</h5>
                                    <h6 key={id + 2} className="secondary-highlighted-text">{work["work-title"]} - {work["working years"]}</h6>
                                    <p key={id + 3}>{work["work-description"]}</p>
                                    </div>
                                ))
                                
                                }

                            <h4 id="education-header" className="cv-header display-5 highlighted-text">Educations</h4>

                                {
                                    data["education"].map((education, id) => (
                                    <div className="pb-2" key={id}>
                                    <h5 key={id + 1}>{education["school"]}</h5>
                                    <h6 key={id + 2} className="secondary-highlighted-text">{education["program"]} - {education["duration"]}</h6>
                                    <p key={id + 3}>{education["description"]}</p>
                                    </div>
                                ))
                                }

                        </div>
                    </div>
                </Container>
            )
        
        }

        </section>
    )
}