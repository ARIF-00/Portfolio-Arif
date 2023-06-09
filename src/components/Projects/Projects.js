import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import solar from "../../Assets/Project_Solar.png";
import news from "../../Assets/news2.jpg";
import login from "../../Assets/login.jpg";
import furniture from "../../Assets/furniture.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Web"
              description="Tools used: Java Script, HTML, CSS  .Developed a news website . Used Bootsrap and basic HTML , JavaScript , CSS to design the front-end 
              also used API to get a HTTP request for getting the latest news"
              ghLink="https://github.com/ARIF-00/newswebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solar Power Prediction using ML"
              description="Tools/Libraries used : Pandas , NumPy, Matplotlib, Scikit-learn . 
              Developed this model which takes different weather parameters and predicts the solar power produced in
              that area from different Machine Learning models and compared their accuracy ."
              ghLink="https://github.com/ARIF-00/power_prediction"


            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="NOTE MANAGER
"
              description="Tools used: MongoDB , Express , React , Node . Used MongoDB Compass to store notes and React to design the frontend . 
              Designed and implemented the MERN stack to perform basic CRUD operations."
              ghLink="https://github.com/ARIF-00/NOTE-MANAGER"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniture}
              isBlog={false}
              title="FURNITURE RENTAL STORE SYSTEM "
              description="This is a desktop application programmed using Python which can be used as a platform where people can
              search, rent and loan furniture . There are two major actors in the system: 
              Admin : Creates accounts and manages inventory. Customer : Searches, rents and loans furniture. "
              ghLink="https://github.com/ARIF-00/furniture_store"

            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
