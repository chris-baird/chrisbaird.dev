import React from "react";
import { Card, Col, Row } from "reactstrap";
export default function MessageList({ messages, setSelectedMessage }) {
  const truncateMessage = (message) => {
    return message.substring(0, 40) + "...";
  };
  return (
    <div style={{ maxHeight: "500px", overflowX: "hidden", overflowY: "auto" }}>
      {messages.map((message) => (
        <Card
          className="mb-2 p-2"
          onClick={() => setSelectedMessage(message)}
          style={{ cursor: "pointer" }}
          key={message._id}
        >
          <Row>
            <Col>
              <p className="float-left font-weight-bold">{message.name}</p>
            </Col>
            <Col>
              <small className="">11:22 PM Tues Nov 23, 2020</small>
            </Col>
          </Row>
          <p className="font-weight-bold">{message.subject}</p>
          <p>{truncateMessage(message.message)}</p>
        </Card>
      ))}
    </div>
  );
}
