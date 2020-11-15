import React from "react";
import TechnologyCard from "../componets/TechnologyCard";
import { Container, Row } from "reactstrap";

export default function Technologies() {
  return (
    <section className="bg-light pb-5">
      <Container>
        <h2 className="mt-5 mb-5 pt-5 text-center">Technologies I Know</h2>
        <Row>
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
        </Row>
      </Container>
    </section>
  );
}
