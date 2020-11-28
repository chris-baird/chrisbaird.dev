import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";

export default function LoginForm({ setUser, toggleModal }) {
  const [errorMessage, setErrorMessage] = useState(false);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={async (values) => {
        try {
          const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ ...values }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          });
          const userToken = await response.json();
          // Checking if log in was a success
          if (userToken !== null) {
            toggleModal();
            return setUser({ email: values.email, token: userToken.token });
          }
          // Setting error message if failure
          return setErrorMessage(true);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ handleSubmit, handleChange, isSubmitting, values }) => (
        <Form onSubmit={handleSubmit}>
          <Alert isOpen={errorMessage} color="danger">
            Invalid Email or Password
          </Alert>
          <FormGroup>
            <Label>Email:</Label>
            <Input name="email" value={values.email} onChange={handleChange} />
            <ErrorMessage name="email" className="text-danger">
              {(error) => <p className="text-danger">{error}</p>}
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <ErrorMessage name="password" className="text-danger">
              {(error) => <p className="text-danger">{error}</p>}
            </ErrorMessage>
          </FormGroup>
          <ModalFooter>
            <Button color="primary" disabled={isSubmitting}>
              Login
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
}
