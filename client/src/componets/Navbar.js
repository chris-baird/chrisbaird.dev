import React, { useState } from "react";
import {
  Button,
  Collapse,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <div>
      <Navbar color="dark shadow" light expand="md">
        <Container>
          <NavbarBrand
            href="/"
            className="p-3 border border-light text-white rounded-lg font-weight-bolder"
          >
            CB
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="/components/">
                  About
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="/components/">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="/components/">
                  Work Experience
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="/components/">
                  Developer Commitment
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="/components/">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="#" onClick={toggleModal}>
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Admin Login</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Login
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Example;
