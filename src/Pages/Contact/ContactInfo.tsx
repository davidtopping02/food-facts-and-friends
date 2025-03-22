import { Envelope, TelephoneFill } from "react-bootstrap-icons";
import { Card, Container, Row, Col } from "react-bootstrap";
import { contactInfoCardText } from "./ContactText";

export const ContactInfo = () => {
  return (
    <Container fluid className="pt-1 pb-1">
      <Card>
        <Card.Body className="text-center">
          <Card.Title as="h3" className="heading heading-3">
            {contactInfoCardText.name}
          </Card.Title>
          <Card.Subtitle as="h4" className="heading heading-4">
            {contactInfoCardText.role}
          </Card.Subtitle>
          <div className="pt-4 pb-4">
            <Row className="align-items-center">
              <Col xs={2}>
                <Envelope />
              </Col>
              <Col xs={10}>{contactInfoCardText.email}</Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={2}>
                <TelephoneFill />
              </Col>
              <Col xs={10}>{contactInfoCardText.primaryPhone}</Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
