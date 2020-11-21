import React from "react";
import { Col } from "reactstrap";
export default function TechnologyCard(props) {
  return (
    <Col xs="3" sm="3" md="3" lg="3" xl="3">
      <img
        src={props.imageUrl}
        alt="Icon"
        style={{ width: "50px" }}
        className="d-block mx-auto"
      />
      <p className="text-center">{props.technologyName}</p>
    </Col>
  );
}
