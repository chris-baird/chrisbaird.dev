import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

export default function EmailForm({ handleSetEmails }) {
  const [messageSent, setMessageSent] = useState(false);

  // Posts new email to web api and returns a database object copy
  const handleEmailPost = async (formData) => {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const newEmail = await res.json();
      return newEmail;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(1, "You must enter at least one character.")
          .max(35, "Must be less than 35 characters.")
          .required("A name is required."),
        email: Yup.string().email().required("A email is required."),
        subject: Yup.string()
          .min(1, "You must enter at least one character.")
          .max(120, "Must be less than 120 characters.")
          .required("A subject is required."),
        message: Yup.string()
          .min(1, "You must enter at least one character.")
          .max(350, "Must be less than 350 characters.")
          .required("A message is required."),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const response = await handleEmailPost(values);
        resetForm();
        return setMessageSent(response);
      }}
    >
      {({ handleSubmit, handleChange, isSubmitting, values }) => (
        <Form onSubmit={handleSubmit}>
          <Alert className="text-center" isOpen={messageSent}>
            <h4 className="font-weight-bolder">Your message has been sent!</h4>
            <p className="lead">
              Thank you for reaching out to me. I will get back to you as soon
              as possible.
            </p>
            <small>Best Regards, Chris Baird</small>
          </Alert>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <FormGroup>
                <Label>Name</Label>
                <Input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Enter your name."
                />
                <ErrorMessage name="name" className="text-danger">
                  {(error) => <p className="text-danger">{error}</p>}
                </ErrorMessage>
              </FormGroup>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <FormGroup>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="text"
                  onChange={handleChange}
                  value={values.email}
                />
                <ErrorMessage name="email" className="text-danger">
                  {(error) => <p className="text-danger">{error}</p>}
                </ErrorMessage>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>Subject</Label>
            <Input
              name="subject"
              type="text"
              onChange={handleChange}
              value={values.subject}
            />
            <ErrorMessage name="subject" className="text-danger">
              {(error) => <p className="text-danger">{error}</p>}
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Input
              name="message"
              type="textarea"
              onChange={handleChange}
              value={values.message}
            />
            <ErrorMessage name="message" className="text-danger">
              {(error) => <p className="text-danger">{error}</p>}
            </ErrorMessage>
          </FormGroup>
          <Button type="submit" color="info" disabled={isSubmitting}>
            Send Message
          </Button>
        </Form>
      )}
    </Formik>
  );
}
