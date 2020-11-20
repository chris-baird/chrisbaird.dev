import React from "react";
import { Formik } from "formik";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function TechnologyForm() {
  return (
    <Formik
      initialValues={{
        technology: "",
        file: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        let formData = new FormData();
        formData.append("file", values.file);
        formData.append("technology", values.technology);
        fetch("/api/technologies", {
          method: "POST",
          body: formData,
        });
      }}
    >
      {({ setFieldValue, handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="technology-name">Technology Name</Label>
            <Input
              type="text"
              id="technologyName"
              name="technology"
              onChange={handleChange}
              placeholder="React, Node, Javascript, ETC....."
              value={values.technology}
            />
          </FormGroup>
          <FormGroup>
            <Label for="technology-file">Technology Logo</Label>
            <Input
              type="file"
              name="file"
              id="technology-logo"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            ></Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}
