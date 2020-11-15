import React from "react";
import { Container, Row } from "reactstrap";
import WorkCard from "../componets/WorkCard";

export default function Work() {
  return (
    <section>
      <Container className="mt-5 mb-5">
        <h2 className="mb-5 text-center">Places I Have Worked</h2>
        <Row>
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </Row>
      </Container>
    </section>
  );
}
