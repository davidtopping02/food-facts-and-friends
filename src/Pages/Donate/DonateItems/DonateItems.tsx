import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { donationItems } from "./donationItems";

const DonateItems: React.FC = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col md={10}>
        <Card className="shadow-lg p-4">
          <Card.Body>
            <Card.Title className="text-center">
              <h2 className="heading heading-2">Donate Items</h2>
            </Card.Title>
            <Card.Text className="text-center">
              Your contributions help us make a real difference! Besides food
              parcels, Food Facts Friends also provides essential non-food items
              to adults and children in crisis.
            </Card.Text>
            <p className="text-center">
              These lists outline what we generally need the most. Please check
              with us before donating to see what supplies we currently need.
            </p>

            {/* Desktop Layout */}
            <div className="d-none d-md-block">
              <Row className="g-4">
                {donationItems.map((category, idx) => (
                  <Col md={6} key={idx}>
                    <Card className="h-100">
                      <Card.Header className="bg-secondary text-white">
                        {category.title}
                      </Card.Header>
                      <Card.Body>
                        <ul className="mb-0">
                          {category.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Mobile Layout */}
            <Accordion className="d-md-none" defaultActiveKey="0">
              {donationItems.map((category, idx) => (
                <Accordion.Item eventKey={String(idx)} key={idx}>
                  <Accordion.Header>{category.title}</Accordion.Header>
                  <Accordion.Body>
                    <ul className="mb-0">
                      {category.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <Card className="bg-light mt-4">
              <Card.Body className="text-center">
                <Card.Title>Before Donating</Card.Title>
                <Card.Text>
                  Please check our current needs and opening hours before
                  bringing donations to ensure we can accept them.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default DonateItems;
