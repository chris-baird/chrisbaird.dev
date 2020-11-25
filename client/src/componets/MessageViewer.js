import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import MessageView from "./MessageView";
import { getMessages } from "../helpers/api";
import { Col, Container, Row } from "reactstrap";

export default function MessageViewer() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState({});

  const deleteMessage = async (messageId) => {
    const response = await fetch("/api/messages/" + messageId, {
      method: "POST",
    });
    const status = await response.json();
  };

  useEffect(() => {
    console.log(selectedMessage);
    console.log("fdssd");
    async function getMessageData() {
      if (messages.length === 0) {
        try {
          const messageData = await getMessages();
          console.log(messageData);
          return setMessages(messageData);
        } catch (error) {
          throw error;
        }
      }
    }
    getMessageData();
  }, [messages, selectedMessage]);

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
            <MessageList
              messages={messages}
              setSelectedMessage={setSelectedMessage}
            />
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
          {selectedMessage.name ? (
            <MessageView selectedMessage={selectedMessage} />
          ) : (
            <p>No Message Selected</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
