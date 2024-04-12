import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fayez Zouari </span>
            from <span className="purple"> Sousse, Tunisia.</span>
            <br />
            I am currently a student at INSAT (National Institute of Applied Sciences and Technology) in Tunis.
            <br />
            I am studying <span className="purple"> Industrial IT and Automation </span> Engineering and working as a freelancer in <span className="purple">Backend Web Development</span> and <span className="purple"> Internet Of Things</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring Students
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Remember or be remembered, it's up to you!"{" "}
          </p>
          <footer className="blockquote-footer">Fayez Z.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
