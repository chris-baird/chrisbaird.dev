import React from "react";
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

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, isSubmitting, values }) => (
        <Form onSubmit={handleSubmit}>
          <Alert isOpen={false}>Test</Alert>
          <FormGroup on>
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
            <Button color="secondary">Cancel</Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
}
