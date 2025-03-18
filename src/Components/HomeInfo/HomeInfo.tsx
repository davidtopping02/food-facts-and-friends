import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StyledButton from "../Button/StyledButton";
import { CardData } from "../../Types/CardData";

const HomeInfo: React.FC<{ cardData: CardData[] }> = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-center">
        {cardData.map(({ title, text, link, buttonText }, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <Card className="h-100 text-center d-flex flex-column">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="flex-grow-1">{text}</Card.Text>
                <StyledButton
                  text={buttonText}
                  onClick={() => navigate(link)}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeInfo;
