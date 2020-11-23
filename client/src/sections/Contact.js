import React, { useState, useEffect } from "react";
import EmailForm from "../componets/EmailForm";
import { Container } from "reactstrap";

export default function Contact() {
  return (
    <section className="mb-5">
      <Container className="pt-5">
        <h2 className="text-center mb-5">Send Me A Message</h2>
        <EmailForm />
      </Container>
    </section>
  );
}
