import React from "react";
import { Col } from "reactstrap";

export default function WorkCard({ imageUrl, companyName, position, points }) {
  return (
    <Col xs="12" sm="12" md="3" lg="3" xl="3">
      <section className="bg-light p-2 shadow">
        <img src={imageUrl} alt="Work" className="img-fluid" />
        <h3>{companyName}</h3>
        <p className="text-muted">{position}</p>
        <ul>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </section>
    </Col>
  );
}
