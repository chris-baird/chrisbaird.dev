import React from "react";
import { Row, Col, Container } from "reactstrap";

export default function About() {
  return (
    <section className="bg-light pt-5 pb-5" id="about">
      <Container>
        <Row className="mt-5">
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <img
              src="./assets/images/misc/ME.png"
              alt="Placeholder of me"
              className="img-fluid rounded d-block mx-auto mb-5 "
            />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <h2 className="mb-4 text-center">A bit about me</h2>
            <p className="">
              <span className="lead">As</span> a highly skilled and adaptable
              web developer, I bring a wealth of experience and expertise to any
              project. I have a proven track record of successfully
              collaborating with teams to deliver innovative solutions, and my
              skills in back-end development, REST API endpoint development, and
              project coordination ensure that projects are completed within
              budget and timelines.
              <br />
              <br />
              In addition to my technical expertise, I have a passion for
              teaching and mentoring others. As a senior coding instructor, I
              have honed my teaching skills and am able to effectively convey
              complex concepts to students. My ability to tailor lessons to meet
              each student's unique needs has resulted in an increased passing
              rate on coding exams and improved coding proficiency among my
              students.
              <br />
              <br />
              One of my key strengths as a web developer is my ability to
              partner with product owners to understand their business
              requirements and deliver solutions that meet their needs. Whether
              it's developing cutting-edge content management systems or
              implementing essential security updates, I am dedicated to
              ensuring that my clients' websites are optimized for success.
              <br />
              <br />
              Overall, I am a passionate and versatile web developer who is
              committed to delivering exceptional results for my clients. With
              my extensive experience, technical expertise, and dedication to
              excellence, I am confident in my ability to exceed expectations
              and drive success for any project I take on.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
