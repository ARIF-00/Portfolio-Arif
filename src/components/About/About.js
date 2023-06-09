import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about3.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="purple" >
              Know Who <b >I'M</b>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="about-img"
          > 
          <section className="homeee">
            <img src={laptopImg} alt="about" style={{
              maxHeight: "500px", maxWidth: "500px",
              justifyContent: "right",
              paddingTop: "-200px",
              paddingBottom: "50px",
            }} />
          </section>
          </Col>
        </Row>
        <h1 className="project-heading" >
          <div className="purple">
            Professional <b> Skillset</b>
          </div>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <div className="purple">
            <b>Tools</b> I use
          </div>
        </h1>
        <Toolstack />


      </Container>
    </Container>
  );
}

export default About;
