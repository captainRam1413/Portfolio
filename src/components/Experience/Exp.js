import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard"; // You need to create this component

function Exp() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my professional experiences.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              title="Backend Developer Intern"
              company="Habbinson International Pvt Ltd"
              duration="June 2024 - July 2023"
              description="Utilized Python Flask to develop back-end functionality and Database design for JARAKA project. Conducted comprehensive API testing using Postman."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              title="Android Developer Intern"
              company="Ekatta Innovation Ltd"
              duration="Feb 2022 - May 2022"
              description="Implemented front-end code for the HamBanjara app project and developed expertise in AndroidDevelopment while completing various project assignments."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              title="Web Developer Intern"
              company="Ethas Cyber Security Hub"
              duration="Feb 2023 - May 2023"
              description="Implemented the programming code for both the front-end and back-end of ethasHub project, gaining valuable experience in full-stack web development."
            />
          </Col>
          {/* Add more ExperienceCard components as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Exp;
