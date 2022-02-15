import React from "react"
import { Row, Col, Container } from "reactstrap"

export default function About() {
  return (
    <section className="bg-light pt-5 pb-5" id="about">
      <Container>
        <Row className="mt-5">
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <img
              src="./assets/images/misc/ME.png"
              alt="Placeholder of me"
              className="img-fluid rounded d-block mx-auto mb-5 w-75"
            />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <h2 className="mb-5">A bit about me</h2>
            <p className="lead">
              I am a software engineer with over five years of professional experience working with JavaScript and the MERN stack (Mongo/MySql, Express, React, Node js). I am an extremely self-sufficient individual that is more than capable of rapidly teaching myself new technologies, with the capability to turn around and instruct others on what I just learned. I am two years into obtaining my bachelor of computer science, where I have completed my Python, Java, C++, and Data Science classes with A's. I am a respectful person, have a high work ethic, and enjoy working with others when needed. I strive to create robust and scalable software with clean and sensible code that will stand the test of time.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col className="mb-5" xs="12" sm="12" md="4" lg="4" xl="4">
            <h3 className="text-center">Personality Type</h3>
            <p className="text-center">INTP</p>
            <img className="w-50 d-block mx-auto" src="/assets/images/misc/mbti.png" alt="intp man solving a pizzle" />
          </Col>
          <Col className="mb-5" xs="12" sm="12" md="4" lg="4" xl="4">
            <h3 className="text-center">Astrological Sign</h3>
            <p className="text-center mb-4">Scorpio</p>
            <img className="w-75 d-block mx-auto" src="/assets/images/misc/as.png" alt="intp man solving a pizzle" />
          </Col>
          <Col className="mb-5" xs="12" sm="12" md="4" lg="4" xl="4">
            <h3 className="text-center mb-5">Intrests</h3>
            <ul className="list-unstyled lead">
              <li><span className="text-muted font-weight-bold">Music:</span> Rock, Thrash Metal, Classic Rock</li>
              <li><span className="text-muted font-weight-bold">Animals:</span> Cats, Dogs, Birds</li>
              <li><span className="text-muted font-weight-bold">TV/Movies:</span> Ancient Aliens, Mr Robot, Silicon valley</li>
              <li><span className="text-muted font-weight-bold">Sports</span> Hockey, Baseball, Nascar</li>
              <li><span className="text-muted font-weight-bold">Misc</span> Reverse Engineering, Aircraft, Design Patterns</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
