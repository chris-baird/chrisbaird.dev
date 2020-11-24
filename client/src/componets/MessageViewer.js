import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageView from "./MessageView";
import { Button, Col, Container, ModalHeader, Row } from "reactstrap";

export default function MessageViewer() {
  const selectedMessage = true;
  const messages = [""];
  return (
    <Container>
      <Row className="p-2">
        <Col
          xs={{ size: 12, order: 2 }}
          sm={{ size: 12, order: 2 }}
          md={{ size: 4, order: 1 }}
          lg={{ size: 4, order: 1 }}
          xl={{ size: 4, order: 1 }}
        >
          <p className="font-weight-bold">All Messages</p>
          {messages.length > 0 ? (
            <MessageList />
          ) : (
            <p className="font-weight-bold">No Messages</p>
          )}
        </Col>
        <Col
          xs={{ size: 12, order: 1 }}
          sm={{ size: 12, order: 1 }}
          md="8"
          lg="8"
          xl="8"
        >
          <p className="font-weight-bold">Current Message</p>
          {selectedMessage ? <MessageView /> : null}
        </Col>
      </Row>
    </Container>
  );
}
