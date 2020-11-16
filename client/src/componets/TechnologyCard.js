import React from "react";
import { Col } from "reactstrap";
export default function TechnologyCard(props) {
  return (
    <Col>
      <img src={props.imageUrl} alt="Icon" />
      <p>{props.technologyName}</p>
    </Col>
  );
}
