import React from "react";
import { Col, Row } from "reactstrap";

export default function WorkCard({ imageUrl, companyName, position, points }) {
  return (
    <Col xs="12" sm="12" md="12" lg="12" xl="12">
      <section className="bg-light p-2 shadow d-flex m-2">
        <Row>
      <Col xs="12" sm="12" md="2" lg="2" xl="2" className="d-flex align-items-center">
        <img src={imageUrl} alt="Work" className="img-fluid" />
      </Col>
      <Col xs="12" sm="12" md="10" lg="10" xl="10">
      <ul className="list-group list-group-flush">
        <p className="font-weight-bold">{position}</p>
          {points.map((point) => (
            <li className="list-group-item" key={point}>{point}</li>
          ))}
        </ul>
      </Col>
      </Row>  
        
        
      </section>
    </Col>
  );
}
