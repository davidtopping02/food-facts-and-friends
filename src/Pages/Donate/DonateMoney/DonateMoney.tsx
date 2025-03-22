import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardItem from "../../../Components/CardItem/CardItem";
import StyledButton from "../../../Components/StyledButton/StyledButton";
import { donationMethods } from "./donationMethods";

const DonateMoney: React.FC = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col md={10}>
        <Card className="shadow-lg p-4">
          <Card.Body>
            <Card.Title className="text-center">
              <h2>Financial Donation</h2>
            </Card.Title>
            <Card.Text className="text-center">
              We rely on voluntary income to keep our Community Hub operating.
              Every donation helps us continue supporting people in crisis.
            </Card.Text>

            <Row className="mt-3">
              {donationMethods.map((method, idx) => (
                <Col key={idx} md={6} className="d-flex mb-3 mb-md-0">
                  <CardItem {...method} />
                </Col>
              ))}
            </Row>

            <Row className="mt-3 justify-content-center">
              <Col xs="auto" className="mb-3 mb-md-0">
                <StyledButton
                  text="FFF Donation Form"
                  onClick={() =>
                    window.open(
                      "https://www.foodfactsfriends.org.uk/gallery/FFF%20Donatio%20Form.pdf"
                    )
                  }
                />
              </Col>
              <Col xs="auto">
                <StyledButton
                  text="Gift Aid Declaration"
                  onClick={() =>
                    window.open(
                      "https://www.foodfactsfriends.org.uk/gallery/Charity%20Gift%20Aid%20Declaration.pdf"
                    )
                  }
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default DonateMoney;
