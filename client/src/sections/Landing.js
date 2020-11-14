import React from "react";
import { Container, Row, Col } from "reactstrap";
export default function Landing() {
  return (
    <Container className="mt-5 mb-5 pt-5 pb-5">
      <Row>
        <Col xs="12" sm="12" md="8" lg="8" xl="8">
          <h1 className="font-weight-bolder">Chris Baird</h1>
          <h2 className="mt-2 mb-2">Full Stack Web Developer</h2>
          <p className="lead font-weight-light">
            Motivated developer with experience creating custom web applications
            through Javascript and React. Strong collaboration skills and proven
            history of application development. Methodical approach to solving
            problems. Proficient in learning new technologies and implementing
            solutions.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
