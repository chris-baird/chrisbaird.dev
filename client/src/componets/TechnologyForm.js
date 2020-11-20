import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function TechnologyForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="technology-name">Technology Name</Label>
        <Input
          type="text"
          id="technologyName"
          name="technology-name"
          placeholder="React, Node, Javascript, ETC....."
        />
      </FormGroup>
      <FormGroup>
        <Label for="technology-file">Technology Logo</Label>
        <Input type="file" name="technologyFile" id="technology-logo"></Input>
      </FormGroup>
    </Form>
  );
}
