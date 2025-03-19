import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import StyledButton from "../../../Components/StyledButton/StyledButton";

const DonateMoney: React.FC = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title className="text-center">
                <h2>Donate Money</h2>
              </Card.Title>
              <Card.Text className="text-center">
                We rely on voluntary income to keep our Community Hub operating.
                Every donation helps us continue supporting people in crisis.
              </Card.Text>

              <Row className="mt-3">
                <Col md={6} className="d-flex mb-3 mb-md-0">
                  <Card className="border-secondary text-center p-3 w-100 h-100 d-flex flex-column">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="heading heading-4">
                        Bank Transfer
                      </Card.Title>
                      <Card.Text className="flex-grow-1">
                        <strong>Account Name:</strong> Food Facts Friends
                        Project <br />
                        <strong>Sort Code:</strong> 83–26–10 <br />
                        <strong>Account Number:</strong> 00709837
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} className="d-flex">
                  <Card className="border-secondary text-center p-3 w-100 h-100 d-flex flex-column">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="heading heading-4">
                        Cheque
                      </Card.Title>
                      <Card.Text className="flex-grow-1">
                        <strong>Payable to:</strong> <br />
                        <em>Food Facts Friends Project</em>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <h5 className="mt-4 text-center">Download Forms:</h5>
              <Row className="mt-3 justify-content-center">
                <Col xs="auto" className="mb-3 mb-md-0">
                  <StyledButton
                    text="FFF Donation Form"
                    onClick={() =>
                      window.open("/path-to-fff-donation-form.pdf")
                    }
                  />
                </Col>
                <Col xs="auto">
                  <StyledButton
                    text="Gift Aid Declaration"
                    onClick={() => window.open("/path-to-gift-aid-form.pdf")}
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

export default DonateMoney;
