import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
export default function Landing() {
  return (
    <section
      style={{
        backgroundImage: "url(./landing-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="pt-5 pb-5">
        <Row className="mb-5 mt-5">
          <Col
            className="text-white"
            xs="12"
            sm="12"
            md={{ size: 8, offset: 5 }}
            lg="8"
            xl="8"
          >
            <h1 className="font-weight-bolder">Chris Baird</h1>
            <h2 className="mt-2 mb-2">Full Stack Web Developer</h2>
            <p className="lead font-weight-light">
              Motivated developer with experience creating custom web
              applications through Javascript and React. Strong collaboration
              skills and proven history of application development. Methodical
              approach to solving problems. Proficient in learning new
              technologies and implementing solutions.
            </p>
            <Button color="danger" className="mr-2">
              View My Work
            </Button>
            <Button color="success" className="mr-2">
              Contact Me
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
