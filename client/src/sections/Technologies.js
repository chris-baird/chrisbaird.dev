import React, { useState, useEffect } from "react";
import TechnologyCard from "../componets/TechnologyCard";
import { Container, Row } from "reactstrap";
import { getTechnologies } from "../helpers/api";

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);

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
