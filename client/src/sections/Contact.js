import React, { useState, useContext } from "react";
import EmailForm from "../componets/EmailForm";
import MessageViewer from "../componets/MessageViewer";
import { Button, Col, Container, Modal, ModalHeader, Row } from "reactstrap";
import UserContext from "../contexts/UserContext";
export default function Contact() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    return setModal(!modal);
  };

  // Currently signed in user email and token
  const user = useContext(UserContext);

  return (
    <section className="mb-5" id="contact">
      <Container className="pt-5">
        <h2 className="text-center mb-5">Let's Connect</h2>
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
        <Row>
          <Col
            xs={{ order: 2, size: 12 }}
            sm={{ order: 1, size: 12 }}
            md="6"
            lg="8"
            lx="8"
          >
            <h4 className="text-center mb-5">Send Me A Message</h4>
            <EmailForm />
          </Col>
          <Col
            xs={{ order: 1, size: 12 }}
            sm={{ order: 2, size: 12 }}
            md="6"
            lg="4"
            lx="4"
          >
            <h4 className="text-center mb-5">Follow Me On</h4>

            <Row>
              <Col md="12">
                <a href="https://github.com/chris-baird" target="blank">
                  <img
                    className="img-fluid"
                    src="/assets/images/social/GITHUBSOCIALICON.png"
                    alt="Github social media icon"
                  ></img>
                </a>
              </Col>
              <Col md="12">
                <a
                  href="https://www.linkedin.com/in/c-baird/"
                  target="blank"
                  className="mt-5"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/social/LINKEDINSOCIALLOGO.png"
                    alt="LinkedIn social media icon"
                  ></img>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
