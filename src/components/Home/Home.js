import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/header-img.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TrackVisibility from 'react-on-screen';


export const Home = () => {

  return (
    <section className="home">
      {/* <Container fluid className="home-section" id="home">
        <Particle />
        
      </Container> */}

      <Container fluid className="about-section">
        <Particle />

        <Container className="home-content">
          <Row >
            <Col md={8} className="home-header">

              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h6 style={{ paddingBottom: 15 }} className="heading">
                      Hi There!{" "}
                      <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                      </span>
                    </h6>

                    <h10 className="heading-name">
                      I'M
                      <strong > Arif Mohammed</strong>
                    </h10>


                  </div>}
              </TrackVisibility>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col xs={12} md={3} xl={4} style={{ paddingBottom: 0 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
              <TrackVisibility>
                {({ isVisible }) =>
                  <div >
                    <img src={homeLogo} alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "550px" }} />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>


    </section>
  );
}

export default Home;
