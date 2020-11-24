import React from "react";
import { Button, Card, Col, Row } from "reactstrap";

export default function MessageView() {
  return (
    <Card className="mb-3">
      <Row className="p-2">
        <Col>
          <h5 className="font-weight-bold">Name:</h5>
          <p>Chris</p>
        </Col>
        <Col>
          <h5 className="font-weight-bold text-right">Contact:</h5>
          <p className="text-right">cab3953@gmail.com</p>
        </Col>
        <Col sm="12">
          <h5 className="font-weight-bold">Subject:</h5>
          <p>Job task</p>
        </Col>
        <Col
          style={{ maxHeight: "300px", overflowX: "hidden", overflowY: "auto" }}
        >
          <h4 className="font-weight-bold">Message:</h4>
          <p className="lead">
            Officia tempor aliquip duis consectetur ipsum ea aliquip officia.
            Culpa dolore pariatur do occaecat officia est ea incididunt minim et
            ullamco sit ea aliqua. Veniam dolor laborum ipsum minim non qui eu.
            Pariatur mollit ad aliquip id id duis esse. Deserunt esse culpa anim
            excepteur eu sunt Lorem. Consectetur enim aliquip nulla proident
            mollit ullamco magna. Elit id minim pariatur enim voluptate sint ad
            incididunt. Officia tempor aliquip duis consectetur ipsum ea aliquip
            officia. Culpa dolore pariatur do occaecat officia est ea incididunt
            minim et ullamco sit ea aliqua. Veniam dolor laborum ipsum minim non
            qui eu. Pariatur mollit ad aliquip id id duis esse. Deserunt esse
            culpa anim excepteur eu sunt Lorem. Consectetur enim aliquip nulla
            proident mollit ullamco magna. Elit id minim pariatur enim voluptate
            sint ad incididunt. Officia tempor aliquip duis consectetur ipsum ea
            aliquip officia. Culpa dolore pariatur do occaecat officia est ea
            incididunt minim et ullamco sit ea aliqua. Veniam dolor laborum
            ipsum minim non qui eu. Pariatur mollit ad aliquip id id duis esse.
            Deserunt esse culpa anim excepteur eu sunt Lorem. Consectetur enim
            aliquip nulla proident mollit ullamco magna. Elit id minim pariatur
            enim voluptate sint ad incididunt. Officia tempor aliquip duis
            consectetur ipsum ea aliquip officia. Culpa dolore pariatur do
            occaecat officia est ea incididunt minim et ullamco sit ea aliqua.
            Veniam dolor laborum ipsum minim non qui eu. Pariatur mollit ad
            aliquip id id duis esse. Deserunt esse culpa anim excepteur eu sunt
            Lorem. Consectetur enim aliquip nulla proident mollit ullamco magna.
            Elit id minim pariatur enim voluptate sint ad incididunt.
          </p>
        </Col>
      </Row>

      <Button className="m-3 w-25 ml-auto" color="danger">
        Delete Message
      </Button>
    </Card>
  );
}
