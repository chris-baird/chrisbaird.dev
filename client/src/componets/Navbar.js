import React, { useState } from "react";
import {
  Collapse,
  Container,
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
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
