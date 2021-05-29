import React from "react"
import DeveloperInfo from "./DeveloperInfo"
import { Row, Col, Container } from "reactstrap"

export default function About() {
  return (
    <section className="bg-light pt-5 pb-5" id="about">
      <Container>
        <Row className="mt-5">
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <h2 className="text-center mb-5">Hello, I'm Chris Baird</h2>
            <img
              src="./assets/images/misc/ME.png"
              alt="Placeholder of me"
              className="img-fluid rounded d-block mx-auto mb-5"
            />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <p className="lead">
              I am a Full-Stack Web Developer based out of the Orange County
              region. I attended General Assemblies web development immersive
              program. I earned an endorsed certificate upon contributing more
              than 420 hours in 4 months studying the full-stack JavaScript
              ecosystem, building web API's and working with advanced frameworks
              and libraries such as React Express and Angular. Upon graduation,
              I immediately worked as a freelance web developer creating and
              executing projects for clients such as a spa salon business owner,
              a start-up baseball coach, and high school graduation streaming
              solutions for schools affected by covid. It is here that I learn
              to manage projects, gather requirements, and utilize the AGILE
              SCRUM methodology to deliver high-quality software in a small
              amount of time.
            </p>
            <p className="lead">
              After expanding my experience in the freelance market, I decided
              to take on a job as a teaching assistant for the coding Bootcamp
              offered by Trilogy Education. It is here that I discovered to be
              humble and to learn through teaching. I gained the ability to
              break down complex problems into smaller chunks that are easier to
              explain to others. Seeking more challenges, I took up online
              tutoring to give individual support to students going through
              coding boot camps. In this role, I strive to provide high-quality
              education, respect, and emotional support to students facing the
              challenges of coding boot camps. To date, I have amassed more than
              670 hours of delivering high-quality individual instruction to
              students via Zoom sessions. My latest chapter in understanding
              software development has brought me to Southern New Hampshire
              University, where I aspire to be the first in my family to obtain
              a Bachelors degree in Computer Science and gain a deep insight
              into software architecture.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
