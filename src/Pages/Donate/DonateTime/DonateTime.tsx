import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import StyledButton from "../../../Components/StyledButton/StyledButton";

const DonateTime: React.FC = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title className="text-center">
                <h2>Donate Time</h2>
              </Card.Title>
              <Card.Text className="text-center">
                Volunteering your time helps us make a real difference. Your
                skills and efforts are invaluable to our cause.
              </Card.Text>

              <Row className="mt-3">
                <Col md={6} className="d-flex mb-3 mb-md-0">
                  <Card className="border-secondary text-center p-3 w-100 h-100 d-flex flex-column">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="heading heading-4">
                        Email Us
                      </Card.Title>
                      <Card.Text className="flex-grow-1">
                        If you'd like to volunteer, email us at: <br />
                        <strong>
                          <a href="mailto:foodfactsfriends@gmail.com">
                            foodfactsfriends@gmail.com
                          </a>
                        </strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} className="d-flex">
                  <Card className="border-secondary text-center p-3 w-100 h-100 d-flex flex-column">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="heading heading-4">
                        Call Us
                      </Card.Title>
                      <Card.Text className="flex-grow-1">
                        Alternatively, you can call us at: <br />
                        <strong>
                          <a href="tel:+447507697109">01968 675417</a>
                        </strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <h5 className="mt-4 text-center">Learn More:</h5>
              <Row className="mt-3 justify-content-center">
                <Col xs="auto" className="mb-3 mb-md-0">
                  <StyledButton
                    text="Opening Hours"
                    onClick={() => (window.location.href = "/opening-hours")}
                  />
                </Col>
                <Col xs="auto">
                  <StyledButton
                    text="Contact Us"
                    onClick={() => (window.location.href = "/contact-us")}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateTime;
