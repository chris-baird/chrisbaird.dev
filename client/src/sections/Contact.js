import React, { useState, useContext } from "react";
import EmailForm from "../componets/EmailForm";
import MessageViewer from "../componets/MessageViewer";
import { Button, Container, Modal, ModalHeader } from "reactstrap";
import UserContext from "../contexts/UserContext";
export default function Contact() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    return setModal(!modal);
  };

  // Currently signed in user email and token
  const user = useContext(UserContext);

  return (
    <section className="mb-5">
      <Container className="pt-5">
        <h2 className="text-center mb-5">Send Me A Message</h2>
        {user.email ? (
          <Button
            type="button"
            color="danger"
            className="d-block mx-auto mb-3"
            onClick={toggleModal}
          >
            View Messages
          </Button>
        ) : null}
        <Modal centered={true} size="xl" isOpen={modal} toggle={toggleModal}>
          <ModalHeader className="font-weight-bolder" toggle={toggleModal}>
            Messages
          </ModalHeader>
          <MessageViewer />
        </Modal>
        <EmailForm />
      </Container>
    </section>
  );
}
