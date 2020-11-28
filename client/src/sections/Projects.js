import React from "react";
import { Container, Row } from "reactstrap";
import Project from "../componets/Project";
import PROJECTDATA from "../helpers/projects.json";

export default function Projects() {
  return (
    <section>
      <Container>
        <h2 className="pt-5 text-center pb-3">Things I Made</h2>
        <Row>
          {PROJECTDATA.map((project) => (
            <Project key={project.projectName} {...project} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
