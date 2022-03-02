import React from "react"
import db from "../db/developerListInfo.json"
import {
  Button,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap"
export default function DeveloperInfo() {
  console.log(db)
  return (
    <section className="pt-5 pb-5">
      <Container>
        <h2 className="text-center text-white m-3 pb-3">Developer Info</h2>
        <Row>
          {db.map((card) => {
            return (
              <Col md={6} lg={4} className="mb-3">
                <Card className="shadow">
                  <CardHeader>
                    <img
                      className="d-block mx-auto w-25"
                      src={`/assets/images/developerInfoIcons/${card.listIcon}`}
                    ></img>
                  </CardHeader>
                  <CardBody>
                    <CardTitle className="text-center" tag="h5">
                      {card.title}
                    </CardTitle>
                    <ul>
                      {card.list.map((listItem) => {
                        return <li>{listItem}</li>
                      })}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
