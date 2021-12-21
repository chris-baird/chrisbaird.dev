import React from "react"
import DeveloperInfo from "./DeveloperInfo"
import { Row, Col, Container } from "reactstrap"

export default function About() {
  return (
    <section className="bg-light pt-5 pb-5" id="about">
      <Container>
        <Row className="mt-5">
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <h2 className="text-center mb-5">Hello, I'm Chris Baird</h2>
            <img
              src="./assets/images/misc/ME.png"
              alt="Placeholder of me"
              className="img-fluid rounded d-block mx-auto mb-5"
            />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <p className="lead">
              I am a 35-year-old software engineer with four years of professional experience working with JavaScript and the MERN stack (Mongo/MySql, Express, React, Node js). My experience includes working with, teaching, providing code reviews, and one on one tutor sessions with JavaScript and the MERN stack. I am currently looking for a small to medium-sized development team to contribute and produce high-quality self-documented code in the long term. I am an extremely self-sufficient individual that is more than capable of rapidly teaching myself new technologies, with the capability to turn around and instruct others on what I just learned. I am two years into obtaining my bachelor of computer science, where I have completed my Python, Java, C++, and Data Science classes with A's. I am a respectful person, have a high work ethic, and enjoy working with others when needed. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
