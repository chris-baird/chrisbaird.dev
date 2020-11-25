import React from "react";
import { Button, Card, Col, Row } from "reactstrap";

export default function MessageView({ selectedMessage }) {
  return (
    <Card className="mb-3">
      <Row className="p-3">
        <Col>
          <h5 className="font-weight-bold">Name:</h5>
          <p>{selectedMessage.name}</p>
        </Col>
        <Col>
          <h5 className="font-weight-bold text-right">Contact:</h5>
          <p className="text-right">{selectedMessage.email}</p>
        </Col>
        <Col sm="12">
          <h5 className="font-weight-bold">Subject:</h5>
          <p>{selectedMessage.subject}</p>
        </Col>
        <Col
          style={{ maxHeight: "300px", overflowX: "hidden", overflowY: "auto" }}
        >
          <h4 className="font-weight-bold">Message:</h4>
          <p className="lead">{selectedMessage.message}</p>
        </Col>
      </Row>

      <Button className="m-3 w-25 ml-auto" color="danger">
        Delete Message
      </Button>
    </Card>
  );
}
