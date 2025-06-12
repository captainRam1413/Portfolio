import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m passionate about building intelligent and impactful software
              solutions. My journey in programming began with curiosity and has
              grown into a love for solving real-world problems through code.
              <br />
              <br />
              I’m fluent in languages like
              <i>
                <b className="purple"> Python, Java, and JavaScript. </b>
              </i>
              <br />
              <br />
              My areas of interest include developing scalable
              <i>
                <b className="purple"> Web Applications, AI-powered Systems</b>,
                and exploring the realms of{" "}
                <b className="purple">Machine Learning and GenAI.</b>
              </i>
              <br />
              <br />I enjoy bringing ideas to life using{" "}
              <b className="purple">Flask</b> for the backend and
              <i>
                <b className="purple"> React.js </b> for the frontend. I also
                work with tools like{" "}
                <b className="purple">SQLAlchemy, Tailwind CSS,</b> and
                <b className="purple"> Google Colab</b> for rapid prototyping.
              </i>
              <br />
              <br />
              Whether it's a community platform, a hotel recommender system, or
              an AI-based simulator — I love building tech that matters.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/captainRam1413"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rameshwar-pund-932084245/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the_king_ram._"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
