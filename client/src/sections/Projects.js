import React from "react";
import { Container, Row } from "reactstrap";
import Project from "../componets/Project";

export default function Projects() {
  return (
    <section>
      <Container>
        <h2 className="pt-5 text-center">Things I Have Made</h2>
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
