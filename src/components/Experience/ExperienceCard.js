import React from "react";
import Card from "react-bootstrap/Card";
import { FaBriefcase } from "react-icons/fa";
import "./ExperienceSection.css";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <div className="experience-icon">
          <FaBriefcase />
        </div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-4 "><strong>{props.company}</strong></Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.duration}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;