import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ocr.png";
import emotion from "../../Assets/Projects/esp.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/rps.jpg";
import suicide from "../../Assets/Projects/ai.jpeg";
import bitsOfCode from "../../Assets/Projects/hand.jpeg";

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
              imgPath={chatify}
              isBlog={false}
              title="Rock Paper Scissors"
              description="I went through a tutorial to learn the basics of machine learning and preprocessing data algorithms in order to develop a model that is able to distinguish the rock from the paper from the scissors. "
              ghLink="https://github.com/fayezzouari/tensorflow_rps"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FingerCount"
              description="A simple app that uses the mediapipe library to detect the number of fingers shown in the webcam."
              ghLink="https://github.com/fayezzouari/fingercount_mediapipe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="IC Mobile App"
              description="My first Flutter app that I made to learn the basics of the framework and also used it in a project. It is a simple app that connects to a Firebase account and displays certain data for the user (in this case, it's an electricity counter measures). "
              ghLink="https://github.com/fayezzouari/IC_flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="IC Backend Server"
              description="My first python professional projects where I used OCR to read an electricity counter measures and store the obtained data on Firebase."
              ghLink="https://github.com/fayezzouari/IC_backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI Workshop"
              description="This repo contains a workshop in Machine Learning in which i helped introduce teenagers to the basics of this fiels as we developed a certain model and used an ESP32 Cam to get the frames and classify them in their computers."
              ghLink="https://github.com/fayezzouari/AI_workshop"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ESP32CAM-Computer connection"
              description="A server that assures the connection between an ESP32CAM and the computer once connected on the same hotspot."
              ghLink="https://github.com/fayezzouari/esp_cam_com"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
