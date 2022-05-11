import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import chromeExtensionImg from "../img/undraw_close_tab_re_4cj6.svg"
import webScraperImg from "../img/undraw_instant_analysis_re_mid5.svg"
import buildingBlocksImg from "../img/undraw_building_blocks_re_rwls.svg"
import programmingImg from "../img/undraw_programming_re_kg9v.svg"
import { useFetch } from "./UseFetch"
const gitHubUrl = "https://api.github.com/users/hrnanhrnanhrnan/repos"
const images = [chromeExtensionImg, webScraperImg, buildingBlocksImg, programmingImg]


export const PortfolioComponent = (props) => {
    const {data, isLoading, error} = useFetch(gitHubUrl, {})

    const getRandomImage = () => {
        return images[Math.floor(Math.random()* images.length)]
    }

    return (
        <section className={`text-center pt-5 ${ props.backgrond } ${props.text}`}>
            {
                isLoading ? (
                    <>
                    <div className="spinner-border text-muted">
                    </div>
                    <p>Loading projects</p>
                    <p>{error}</p>
                    </>
                ) : (
                    
                    <Container className="con" id="portfolio-div">
                        <h1 className="display-4"><span className="display-3 highlighted-text">Projects</span> that <span className="highlighted-text">I've</span> been <span className="highlighted-text">working</span> on</h1>
                        <Row className="d-flex justify-content-center" xs={1} sm={2} md={2} lg={4}>
                            {
                                data.map((repo) => (
                                    <Col key={repo.id} className="col">
                                            <div id={repo["html_url"]} onClick={() => {
                                                const a = document.createElement("a")
                                                const div = document.getElementById("portfolio-div")
                                                a.setAttribute("hidden", "true")
                                                a.setAttribute("target", "_blank")
                                                a.href = repo["html_url"]
                                                div.appendChild(a)
                                                a.click()
                                                div.removeChild(a)
                                            }} className="card rounded-3 mb-3 pt-4">
                                                <img className="img-fluid" 
                                                    src={repo.name === "chrome_extension" ? chromeExtensionImg :
                                                        repo.name === "web-scraper" ? webScraperImg
                                                        : getRandomImage()} 
                                                    alt={repo.name === "chrome_extension" ? "Illustration of person holding tab-object in window" :
                                                        repo.name === "web-scraper" ? "Illustration of person picking pieces of data"
                                                        : "Illustration of a person"} />
                                            <div className="card-footer bg-dark text-light text-center">
                                                <h4 className="highlighted-text">{repo.name}</h4>
                                                <p>{repo.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                )
            }
        </section>
    )
}