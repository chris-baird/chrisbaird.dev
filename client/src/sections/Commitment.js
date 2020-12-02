import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Commitment() {
  return (
    <section className="bg-light pt-5 pb-5">
      <Container>
        <h2 className="text-center mb-5">My Developer Commitment</h2>

        <Row>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <img
              src="./assets/images/misc/COMMITMENTIMAGE.png"
              className="img-fluid w-50 d-block mx-auto mb-3"
              alt="Check box is marked"
            />
          </Col>
          <Col xs="12" sm="12" md="8" lg="8" xl="8">
            <p className="lead">
              Whether In-House developer, Freelance Developer, or Developer
              Tutor, my commitment is to professional work ethics, treating all
              I encounter with the utmost respect and making a better internet
              one application at a time.
            </p>
            <span>
              -<em>Chris Baird</em>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
