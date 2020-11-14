import React from "react";
import { Container, Row } from "reactstrap";
import Project from "../componets/Project";

export default function Projects() {
  return (
    <section className="bg-light">
      <Container>
        <h3 className="pt-5">Projects</h3>
        <Row>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </Row>
      </Container>
    </section>
  );
}
