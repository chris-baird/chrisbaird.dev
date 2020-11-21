import React from "react";
import { Formik } from "formik";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function TechnologyForm({ handleSetTechnologies }) {
  // Formats form data into multipart/form-data object
  const handleFormatFormData = (formData) => {
    let formatedFormData = new FormData();
    formatedFormData.append("technologyName", formData.technologyName);
    formatedFormData.append("file", formData.file);
    return formatedFormData;
  };
  // Posts new technology to web api and returns a database object copy
  const handleTechnologyPost = async (formatedFormData) => {
    try {
      const res = await fetch("/api/technologies", {
        method: "POST",
        body: formatedFormData,
      });
      const newTechnology = await res.json();
      return newTechnology;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Formik
      initialValues={{
        technologyName: "",
        file: "",
      }}
      onSubmit={async (values) => {
        const formatedFormData = handleFormatFormData(values);
        const newTechnology = await handleTechnologyPost(formatedFormData);
        return handleSetTechnologies(newTechnology);
      }}
    >
      {({ setFieldValue, handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="technology-name">Technology Name</Label>
            <Input
              type="text"
              id="technologyName"
              name="technologyName"
              onChange={handleChange}
              placeholder="React, Node, Javascript, ETC....."
              value={values.technologyName}
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
          <Button color="success" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
