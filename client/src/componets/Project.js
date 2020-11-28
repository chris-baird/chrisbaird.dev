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
}) {
  return (
    <Col className="mt-3" xs="12" sm="12" md="6" lg="4" xl="3">
      <Card className="shadow border-0">
        <CardTitle className="m-2 font-weight-bold" tag="h4">
          {projectName}
        </CardTitle>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 font-weight-bold">
            Application Type:
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-3 text-muted">
            {applicationType}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="font-weight-bold">
            Technologies Used:
          </CardSubtitle>
          {technologies.map((technology) => (
            <Badge key={technology} className="mr-1" color="primary" pill>
              {technology}
            </Badge>
          ))}
          <CardSubtitle tag="h6" className="mt-2 mb-2 font-weight-bold">
            Features:
          </CardSubtitle>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <Row className="mt-3">
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
              <a href={liveUrl} target="blank">
                View Project
              </a>
            </Col>
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
              {repoUrl !== null ? (
                <a href={repoUrl} target="blank">
                  Repository
                </a>
              ) : null}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
