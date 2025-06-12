import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rameshwar Pund </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently pursuing my B.Tech in <span className="purple">Artificial Intelligence and Data Science</span> at VIT.
            <br />
            <br />
            I am a passionate <span className="purple">Full Stack Developer</span> and a <span className="purple">Competitive Programmer</span>.
            <br />
            <br />
            I have over 2 years of experience in full-stack development and have worked on several impactful projects like{" "}
  <span className="purple">JARAKA, GenSim, GURUKUL, and HAMBANJARA</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
