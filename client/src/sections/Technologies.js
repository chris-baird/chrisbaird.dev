import React, { useState, useEffect, useContext } from "react";
import TechnologyCard from "../componets/TechnologyCard";
import TechnologyForm from "../componets/TechnologyForm";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { getTechnologies } from "../helpers/api";
import UserContext from "../contexts/UserContext";


export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const user = useContext(UserContext);
  const handleSetTechnologies = (newTechnology) => {
    const technologiesArray = [...technologies, newTechnology];
    return setTechnologies(technologiesArray);
  };

  useEffect(() => {
    async function getTechnologyData() {
      setModal(false);
      if (technologies.length === 0) {
        try {
          const apiTechnolgies = await getTechnologies();

          setTechnologies(apiTechnolgies.length !== 0 ? apiTechnolgies : [{}]);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getTechnologyData();
  }, [technologies]);

  return (
    <section className="pb-5">
      <Container>
        <h2 className="mb-5 mt-5 pt-5 text-center">My Tech Stack</h2>
        <Row className="mb-5">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-row flex-wrap justify-content-center">
            <img className="w-25 m-4" src="assets/images/projects/techIcons/MongoDB.svg" alt="MongoDB Icon" />
            <img className="w-25 m-4" src="assets/images/projects/techIcons/Express.svg" alt="Express Icon" />
            <img className="w-25 m-4" src="assets/images/projects/techIcons/React.svg" alt="React Icon" />
            <img className="w-25 m-4" src="assets/images/projects/techIcons/Node.svg" alt="Node Icon" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className="text-muted"><span className="lead font-weight-bold">MongoDB</span> With Flexible document schemas, High speed, and Scalability, MongoDb is an enjoyable database that is easy to work with within various situations.</p>
            <p className="text-muted"><span className="lead font-weight-bold">Express</span> Data-intensive applications need a scaleable, non Blocking solution. Express offers a rigid unopinionated set of tools to build API foundations.</p>
            <p className="text-muted"><span className="lead font-weight-bold">React</span> The modern web experience is a seamless stream of data. React offers many tools for creating data-rich, stateful, single-page applications.</p>
            <p className="text-muted"><span className="lead font-weight-bold">Node</span> An asynchronous event-driven JavaScript runtime built on top of Chromes V8 Engine offers Fast, lightweight, and efficient. JavaScript's best friend.</p>
          </Col>
        </Row>
        <h2 className="mb-5 pt-5 text-center">Other Languages I Use</h2>
        <Row className="mb-5">
          <Col xs={{ order: 2, size: 12 }} sm={{ order: 2, size: 12 }} md={{ order: 1, size: 6 }} lg={{ order: 1, size: 6 }} xl={{ order: 1, size: 6 }}>
            <p className="text-muted"><span className="lead font-weight-bold">TypeScript</span> Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
            <p className="text-muted"><span className="lead font-weight-bold">Python</span> Multi-paradigm programming language that makes dealing with large data sets and data visualizations an easy experience.</p>
            <p className="text-muted"><span className="lead font-weight-bold">Ruby</span> With a focus on simplicity and productivity, it has an elegant syntax that is natural to read and easy to write automation scripts.</p>
          </Col>
          <Col xxs={{ order: 1, size: 12 }} sm={{ order: 1, size: 12 }} md={{ order: 2, size: 6 }} lg={{ order: 2, size: 6 }} xl={{ order: 2, size: 6 }} className="d-flex">
            <img className="w-25 m-3" src="assets/images/projects/techIcons/TS.svg" alt="TypeScript Icon" />
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Python.svg" alt="Python Icon" />
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Ruby.svg" alt="Ruby Icon" />
          </Col>
        </Row>
        <h2 className="mb-5 pt-5 text-center">Tech Tools</h2>
        <Row className="mb-5">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Git.svg" alt="Git Icon" />
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Jest.svg" alt="Jest Icon" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className="text-muted"><span className="lead font-weight-bold">Git</span> Used for coordinating work among programmers collaboratively developing source code during software development. A time machine for your code.</p>
            <p className="text-muted"><span className="lead font-weight-bold">Jest</span> A Testing Framework that focuses on simplicity, Zero configs needed, and well-documented API makes writing tests not suck.</p>
          </Col>
        </Row>
        {/* <h2 className="mb-5 pt-5 text-center">My Tech Stack</h2>
      <Container className="d-flex flex-row flex-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
        <section>
          <section className="d-flex justify-content-center">
            <img className="w-25 m-3" src="assets/images/projects/techIcons/MongoDB.svg" alt="MongoDB Icon" />
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Express.svg" alt="Express Icon" />
          </section>
          <section className="d-flex justify-content-center">
            <img className="w-25 m-3" src="assets/images/projects/techIcons/React.svg" alt="React Icon" />
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Node.svg" alt="Node Icon" />
          </section>
        </section>
        <section>
          <p><span className="lead">MongoDB</span> ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
          <p><span className="lead">Express</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
          <p><span className="lead">React</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
          <p><span className="lead">Node</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
        </section>
      </Container>


      <h2 className="mb-5 pt-5 text-center">Other Languages I Use</h2>
      <Container className="d-flex flex-row flex-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
        <section className="d-flex flex-column align-items-end">
          <p className=""><span className="lead">TypeScript</span> ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
          <p className=""><span className="lead">Python</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
          <p className=""><span className="lead">Ruby</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
        </section>

        <section>
          <section className="d-flex justify-content-center">
            <img className="w-25 m-3" src="assets/images/projects/techIcons/TS.svg" alt="TypeScript Icon" />
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Python.svg" alt="Python Icon" />
          </section>
          <section className="d-flex justify-content-center">
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Ruby.svg" alt="Ruby Icon" />
          </section>
        </section>

      </Container>


      <h2 className="mb-5 pt-5 text-center">Tech Tools</h2>
      <Container className="d-flex flex-row flex-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
        <section>
          <section className="d-flex justify-content-center">
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Git.svg" alt="Git Icon" />
            <img className="w-25 m-3" src="assets/images/projects/techIcons/Jest.svg" alt="Jest Icon" />
          </section>
        </section>
        <section>
          <p><span className="lead">Git</span> ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
          <p><span className="lead">Jest</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex placeat repellat! Dolor rem et officia perspiciatis numquam accusamus.</p>
        </section>
      </Container> */}



        <h2 className="mb-5 pt-5 text-center">Everything Else</h2>
        <div>
          {user.email ? (
            <Button
              className="d-block mx-auto mb-3"
              color="danger"
              onClick={toggle}
            >
              Add A New Technology
            </Button>
          ) : null}

          <Modal isOpen={modal} toggle={toggle} className="">
            <ModalHeader className="font-weight-bolder" toggle={toggle}>
              Add A New Technology
            </ModalHeader>
            <ModalBody>
              <TechnologyForm handleSetTechnologies={handleSetTechnologies} />
            </ModalBody>
          </Modal>
        </div>
        <Row>
          {technologies.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value).map((technology) => (
              <TechnologyCard
                key={technology._id}
                imageUrl={technology.imageUrl}
                technologyName={technology.technologyName}
              />
            ))}
        </Row>
      </Container>
    </section>
  );
}
