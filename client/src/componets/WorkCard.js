import React from "react";
import { Col } from "reactstrap";

export default function WorkCard() {
  return (
    <Col xs="12" sm="12" md="4" lg="4" xl="4">
      <img src="https://via.placeholder.com/200x100" alt="Work" />
      <h3>Company Name</h3>
      <p className="text-muted">Position</p>
      <p>Point One</p>
      <p>Point Two</p>
      <p>Point Three</p>
    </Col>
  );
}
