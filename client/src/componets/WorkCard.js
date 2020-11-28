import React from "react";
import { Col } from "reactstrap";

export default function WorkCard({ imageUrl, companyName, position, points }) {
  return (
    <Col xs="12" sm="12" md="6" lg="4" xl="4">
      <section className="bg-light p-2 shadow">
        <img src={imageUrl} alt="Work" className="img-fluid" />
        <h3>{companyName}</h3>
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
