import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import MessageView from "./MessageView";
import { getMessages } from "../helpers/api";
import { Col, Container, Row } from "reactstrap";
import { deleteDatabaseMessageById } from "../helpers/api";
export default function MessageViewer() {
  const [messages, setMessages] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleDeleteMessageById = async (id) => {
    try {
      const deletedMessage = await deleteDatabaseMessageById(id);
      const newMessagesArray = messages.filter(
        (message) => message._id !== deletedMessage._id
      );
      setSelectedMessage(null);
      setMessages(newMessagesArray);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    async function getMessageData() {
      if (!messages) {
        try {
          const messageData = await getMessages();
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
          {messages !== null ? (
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
          {selectedMessage ? (
            <MessageView
              selectedMessage={selectedMessage}
              deleteMessageById={handleDeleteMessageById}
            />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}
