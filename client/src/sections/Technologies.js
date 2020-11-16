import React, {useState, useEffect} from "react";
import TechnologyCard from "../componets/TechnologyCard";
import { Container, Row } from "reactstrap";
import {getTechnologies} from '../helpers/api'

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(async() => {
    console.log(technologies);
   if(technologies.length === 0) {
     console.log("inside if");
     try {
      const apiTechnolgies = await getTechnologies();
      console.log(apiTechnolgies)

      setTechnologies(apiTechnolgies)

     } catch (error) {
       console.log(error)
     }
   }
  },[])

  return (
    <section className="bg-light pb-5">
      <Container>
        <h2 className="mt-5 mb-5 pt-5 text-center">Technologies I Know</h2>
        <Row>
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
        </Row>
      </Container>
    </section>
  );
}
