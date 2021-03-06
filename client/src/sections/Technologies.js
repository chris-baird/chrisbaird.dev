import React, { useState, useEffect, useContext } from "react";
import TechnologyCard from "../componets/TechnologyCard";
import TechnologyForm from "../componets/TechnologyForm";
import {
  Button,
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
    <section className="bg-light pb-5">
      <Container>
        <h2 className="mt-5 mb-5 pt-5 text-center">Technologies I Know</h2>
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
