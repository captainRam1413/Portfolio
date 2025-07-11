import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Import your project images here, e.g.:
// import jarakaImg from "../../Assets/Projects/jaraka.png";
// import genAiImg from "../../Assets/Projects/genai.png";
// import vervoMapImg from "../../Assets/Projects/vervomap.png";
// import hamBanjaraImg from "../../Assets/Projects/hambanjara.png";
// import cardSecImg from "../../Assets/Projects/cardsec.png";
import hotel from "../../Assets/Projects/hotel.png";

// Placeholder images - replace these with your actual image imports
import placeholderImg from "../../Assets/Projects/codeEditor.png"; // Create a generic placeholder image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg} // Replace with actual image path e.g., jarakaImg
              isBlog={false}
              title="Jaraka"
              description="A web project designed to provide consultant services. The back-end is developed using Python Flask, with the database managed via SQLAlchemy. (July 2022)"
              ghLink="https://github.com/captainRam1413/flask-backend.git" // Add your GitHub link here
              demoLink="https://flask-backend-7kfr.onrender.com" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg}
              isBlog={false}
              title="Alog-Visualizer-Plus"
              description="Algo-Visualizer-Plus is a web-based tool that visually illustrates fundamental and advanced algorithms in real-time. Designed with modern front-end tech, it helps students and developers understand algorithm behavior through clear, interactive animations."
              ghLink="https://github.com/captainRam1413/alog-visualizer-plus.git" // Add your GitHub link here
              demoLink="https://algovisualizer-cfe3a.web.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg} // Replace with actual image path e.g., cardSecImg
              isBlog={false}
              title="CropPredict: Smart Agriculture Assistant"
              description="A full-stack machine learning web application designed to assist farmers and agronomists in making data-driven agricultural decisions. The system predicts the most suitable crop and fertilizer combination based on district-level soil and weather conditions, helping improve yield and resource efficiency."
              ghLink="https://github.com/captainRam1413/cropPredictFrontend" // Add your GitHub link here
              demoLink="https://crop-predict-frontend.vercel.app/" // Add your demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg} 
              isBlog={false}
              title="TODO-List"
              description="A modern, feature-rich TODO list web application built with HTML, CSS, and JavaScript. It supports task management, filtering, sorting, dark mode, and progress tracking."
              ghLink="https://github.com/captainRam1413/TODO-LIST-JS.git" 
              demoLink="https://todo-list-js-seven-theta.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg} // Replace with actual image path e.g., cardSecImg
              isBlog={false}
              title="CardSec"
              description="Developed a cybersecurity-focused system for detecting credit card fraud, incorporating research from the dark web. The project integrates Stripe API to simulate real transactions and employs 4-5 machine learning models to predict fraudulent or legitimate transactions with 93.67 percent accuracy. Tech: Python, Tor, Machine Learning, Stripe API. (Dec ’24)"
              ghLink="https://github.com/captainRam1413/Credit-Card-Fraud-Detection-Using-Machine-Learning.git" // Add your GitHub link here
              demoLink="https://credit-card-fraud-detection-using-7wmf.onrender.com/" // Add your demo link here
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg} // Replace with actual image path e.g., genAiImg
              isBlog={false}
              title="GenAI-Circuite Simulator & Generator"
              description="Developed a logic simulation website powered by generative AI. Integrated APIs for real-time simulation and data processing. Provided an intuitive user interface for seamless logic simulations. Tech: PHP, JavaScript. (January 2024)"
              // ghLink="#" 
              // demoLink="#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel} // Replace with actual image path e.g., vervoMapImg
              isBlog={false}
              title="VervoMap"
              description="(Work in progress) Machine learning-based hotel mapping solution. Analyzed and categorized hotel data. Provided dynamic location insights and real-time recommendations. Tech: Python, TensorFlow. (June 2024)"
              ghLink="https://github.com/captainRam1413/Hotel-Mapping-Cancelation-Prediction.git" // Add your GitHub link here
              // demoLink="#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg} // Replace with actual image path e.g., hamBanjaraImg
              isBlog={false}
              title="HamBanjara"
              description="Android application created for the Banjara community to facilitate connections within the community. Tech: JAVA, Android Development. (May 2022)"
              // ghLink="#" 
              // demoLink="#" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
