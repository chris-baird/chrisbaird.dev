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

export default function Project() {
  return (
    <Col className="mt-3" xs="12" sm="12" md="6" lg="4" xl="3">
      <Card>
        <CardTitle className="m-2 font-weight-bold" tag="h5">
          Jones Baseball Academy
        </CardTitle>
        <CardImg
          top
          width="100%"
          src="https://via.placeholder.com/250x150"
          alt="Card image cap"
        />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 font-weight-bold">
            Application Type:
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-3 text-muted">
            Social Media
          </CardSubtitle>
          <CardSubtitle tag="h6" className="font-weight-bold">
            Technologies Used:
          </CardSubtitle>
          <Badge className="mr-1" color="primary" pill>
            HTML
          </Badge>
          <Badge className="mr-1" color="primary" pill>
            CSS
          </Badge>
          <Badge className="mr-1" color="primary" pill>
            REACT
          </Badge>
          <Badge className="mr-1" color="primary" pill>
            NODE
          </Badge>
          <CardSubtitle tag="h6" className="mt-2 mb-2 font-weight-bold">
            Features:
          </CardSubtitle>
          <p>Email Notification</p>
          <p>User Authentaction</p>
          <p>Semantic HTML</p>
          <Row className="mt-3">
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
              <Button>View</Button>
            </Col>
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
              <Button>Repository</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
