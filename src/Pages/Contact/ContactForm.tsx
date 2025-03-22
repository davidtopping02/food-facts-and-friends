import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export const ContactForm = () => (
  <Container fluid className="pt-1 pb-1">
    <Card>
      <Card.Body className="text-center d-flex flex-column justify-content-center">
        <Card.Title as="h3" className="heading heading-3">
          Send us an email
        </Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  </Container>
);
