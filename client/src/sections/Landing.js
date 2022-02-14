import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
export default function Landing() {
  return (
    <section
      className="landing-section"
      style={
        {
          // backgroundImage: "url(./landing-bg.png)",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }
      }
    >
      <Container className="pt-5 pb-5 text-center">
        <Row className="mb-5 mt-5">
          <Col
            className="text-white"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
          >
            <h1 className="font-weight-bolder">Chris Baird</h1>
            <h2 className="mt-2 mb-2">Full Stack Web Developer</h2>
            <p className="lead">
              Practical problem-solver with over five years of JavaScript experience creating Rest API’s and data-driven single-page applications using modern web technologies
            </p>
            <a href="#portfolio">
              <Button color="light" className="mr-2">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button color="dark" className="mr-2">
                Contact Me
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
