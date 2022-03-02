import React, { useState, useContext } from "react";
import {
  Collapse,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import LoginForm from "./LoginForm";
import UserContext from "../contexts/UserContext";

const NavBar = ({ setUser }) => {
  const user = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setIsOpen(false);
    setModal(!modal);
  };

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
          <NavbarToggler onClick={toggle} className="border-light bg-white p-3" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="#about" onClick={toggle}>
                  About
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink
                  className="text-white"
                  href="#portfolio"
                  onClick={toggle}
                >
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink
                  className="text-white"
                  href="#contact"
                  onClick={toggle}
                >
                  Contact
                </NavLink>
              </NavItem>
              {/* TODO: Relocate to footer */}
              {/* <NavItem className="ml-auto">
                {!user.email ? (
                  <NavLink
                    className="text-white"
                    href="#"
                    onClick={toggleModal}
                  >
                    Login
                  </NavLink>
                ) : (
                  <NavLink
                    className="text-white"
                    href="#"
                    onClick={() => {
                      setIsOpen(false);
                      setUser({ email: null, password: null });
                    }}
                  >
                    Logout
                  </NavLink>
                )}
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Admin Login</ModalHeader>
        <ModalBody>
          <LoginForm setUser={setUser} toggleModal={toggleModal} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default NavBar;
