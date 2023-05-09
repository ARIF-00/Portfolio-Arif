import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <b>Arif Mohammed </b>
            from  <b>Silchar , Assam , India.</b>
            <br />I am a final year student from <b>NIT Silchar .</b>
           
          </p>          
        </blockquote>
        <blockquote className="blockquote mb-0">
          <br/>
        <p style={{ textAlign: "justify" }}>
          <br />I am fluent in classics like
            <b > C++, Javascript and Python. </b>          
          <br />
          <br />
          My field of Interest's are building new &nbsp;         
            <b >Web Technologies and Products </b>
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with <b >Node.js</b> and
            <b >
              {" "}
              Modern Javascript Library and Frameworks
            </b>
          &nbsp; like
            <b > React.js </b>
          </p></blockquote>
      </Card.Body>
      
    </Card>
  );
}

export default AboutCard;
