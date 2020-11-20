import React, { useState, useEffect } from "react";
import TechnologyCard from "../componets/TechnologyCard";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
} from "reactstrap";
import { getTechnologies } from "../helpers/api";

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    async function getTechnologyData() {
      if (technologies.length === 0) {
        console.log("inside if");
        try {
          const apiTechnolgies = await getTechnologies();

          setTechnologies(apiTechnolgies);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getTechnologyData();
  }, [technologies]);

  return (
    <section className="bg-light pb-5">
      <Container>
        <h2 className="mt-5 mb-5 pt-5 text-center">Technologies I Know</h2>
        <div>
          <Button color="danger" onClick={toggle}>
            Test
          </Button>
          <Modal isOpen={modal} toggle={toggle} className="">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <Row>
          {technologies.map((technology) => (
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
