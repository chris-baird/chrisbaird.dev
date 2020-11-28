import React from "react";
import { Container, Row } from "reactstrap";
import WorkCard from "../componets/WorkCard";
import workPlaces from "../helpers/work.json";

export default function Work() {
  return (
    <section>
      <Container className="mt-5 mb-5">
        <h2 className="mb-5 text-center">Places I Have Worked</h2>
        <Row>
          {workPlaces.map((workplace) => (
            <WorkCard
              key={workplace.companyName}
              imageUrl={workplace.imageUrl}
              companyName={workplace.companyName}
              position={workplace.position}
              points={workplace.points}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
