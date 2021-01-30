import React from "react";
import DeveloperInfo from "./DeveloperInfo";
import { Row, Col, Container } from "reactstrap";

export default function About() {
  return (
    <section className="bg-light pt-5 pb-5" id="about">
      <Container>
        <h2 className="text-center">Hello, I'm Chris Baird</h2>
        <Row className="mt-5">
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <img
              src="./assets/images/misc/me.JPG"
              alt="Placeholder of me"
              className="img-fluid w-75 rounded"
            />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <p className="lead">
              I am a Full Stack Web Developer. I currently work as a Teaching
              Assistant for Trilogy Education teaching full stack web
              development where I strive to provide a welcoming, inspirational
              learning environment for students. I attended General Assembly’s
              Web Development Immersive program, where I spent over 420 hours in
              a 3 month span learning how to code. In my down time I enjoy
              hiking, watching science fiction and playing video games.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
