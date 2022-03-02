import React from "react";
import {
  Badge,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
} from "reactstrap";

export default function Project({
  projectName,
  imageUrl,
  applicationType,
  features,
  technologies,
  liveUrl,
  repoUrl,
  description
}) {
  return (
    <Col className="m-5 pl-5 pr-5 mx-auto d-flex flex-column justify-content-between" xs="12" sm="12" md="6" lg="4" xl="4">
      {/* <section className="mx-auto d-flex flex-column justify-content-between"> */}
      {/* <CardBody> */}
      <CardImg top src={imageUrl} alt="Card image cap" />
      <CardTitle className="mb-2 pb-2 border-bottom font-weight-bold text-center" tag="h4">
        {projectName}
      </CardTitle>
      <p>{description}</p>
      <section>
        <CardSubtitle tag="h6" className="mb-3 text-muted">
          Built With
        </CardSubtitle>
        <section className="d-flex justify-content-center">
          {technologies.map((technology) => (
            <img key={technology} alt={technology + " icon"} style={{ width: "40px" }} className="m-1" src={`/assets/images/projects/techIcons/${technology}.svg`}></img>
          ))}
        </section>
        <Row className="mt-3">
          <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <a className="btn btn-outline-success d-block mx-auto w-75 border" href={liveUrl} target="blank">
              Check it out
            </a>
          </Col>
        </Row>
      </section>
      {/* </CardBody> */}
      {/* </section> */}
    </Col>
  );
}
