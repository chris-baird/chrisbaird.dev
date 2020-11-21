import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function TechnologyForm({ handleSetTechnologies }) {
  // Maxium allowed file size calculation
  const FILE_SIZE = 160 * 1024;
  // Supported image formats
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

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
      validationSchema={Yup.object({
        technologyName: Yup.string()
          .min(1, "You must enter at least one character.")
          .max(35, "Must be less than 35 characters.")
          .required("A technology name is required."),
        file: Yup.mixed()
          .required("A file is required")
          .test(
            "fileSize",
            "File too large",
            (value) => value && value.size <= FILE_SIZE
          )
          .test(
            "fileFormat",
            "Unsupported Format",
            (value) => value && SUPPORTED_FORMATS.includes(value.type)
          ),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const formatedFormData = handleFormatFormData(values);
        const newTechnology = await handleTechnologyPost(formatedFormData);
        return handleSetTechnologies(newTechnology);
      }}
    >
      {({
        setFieldValue,
        handleSubmit,
        handleChange,
        isSubmitting,
        values,
      }) => (
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
            <ErrorMessage name="technologyName" className="text-danger" />
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
            <ErrorMessage name="file" className="text-danger" />
          </FormGroup>
          <Button color="success" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
