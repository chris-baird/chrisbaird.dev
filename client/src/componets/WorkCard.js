import React from "react";
import { Col } from "reactstrap";

export default function WorkCard({ imageUrl, companyName, position, points }) {
  return (
    <Col xs="12" sm="12" md="12" lg="12" xl="12">
      <section className="bg-light p-2 shadow d-flex">
        <img src={imageUrl} alt="Work" className="img-fluid" />
        <p className="text-muted">{position}</p>
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </Col>
  );
}
