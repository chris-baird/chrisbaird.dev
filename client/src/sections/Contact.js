import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";

export default function Contact() {
  return (
    <section className="mb-5">
      <Container className="pt-5">
        <h2 className="text-center mb-5">Send Me A Message</h2>
        <Form>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <FormGroup>
                <Label>Name</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <FormGroup>
                <Label>Email</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>Subject</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Input type="textarea" />
          </FormGroup>
          <Button color="info">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
}
