import React from 'react'
import db from "../db/developerListInfo.json";
import { Button, Container, Card, CardBody, CardHeader, CardText, CardTitle, Row, Col } from "reactstrap";
export default function DeveloperInfo() {
    console.log(db)
    return (
        <section className="pt-5 pb-5">
            <Container>
                <Row>
                    {db.map(card => {
                        return (<Col md={4} className="mb-3">
                            <Card className="shadow">
                                <CardHeader><img className="d-block mx-auto w-25" src={`/assets/images/developerInfoIcons/${card.listIcon}`} ></img></CardHeader>
                                <CardBody>
                                    <CardTitle className="text-center" tag="h5">{card.title}</CardTitle>
                                    {card.list.map(listItem => {
                                        return <CardText>{listItem}</CardText>
                                    })}
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