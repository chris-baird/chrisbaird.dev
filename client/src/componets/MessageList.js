import React from "react";
import { Card, Col, Row } from "reactstrap";
export default function MessageList() {
  const CARDS = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <div style={{ maxHeight: "500px", overflowX: "hidden", overflowY: "auto" }}>
      {CARDS.map((card) => (
        <Card className="mb-2 p-2">
          <Row>
            <Col>
              <p className="float-left font-weight-bold">Chris</p>
            </Col>
            <Col>
              <small className="">11:22 PM Tues Nov 23, 2020</small>
            </Col>
          </Row>
          <p className="font-weight-bold">Test Subject</p>
          <p>
            Reprehenderit in sint sit cupidatat ullamco ipsum aliqua do non do
            qui...
          </p>
        </Card>
      ))}
    </div>
  );
}
