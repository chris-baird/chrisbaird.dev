import React from "react";
import { Col } from "reactstrap";
export default function TechnologyCard(props) {
  return (
    <Col xs="12" sm="12" md="4" lg="4" xl="4">
      <img src={props.imageUrl} alt="Icon" style={{ width: "50px" }} />
      <p>{props.technologyName}</p>
    </Col>
  );
}
