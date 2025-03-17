import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const ContactForm = () => (
  <div className="container-fluid pt-1 pb-1">
    <div className="card">
      <div className="card-body text-center d-flex flex-column justify-content-center">
        <h3 className="heading heading-3">Send us an email</h3>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="input" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className="btn-custom">Submit</Button>
        </Form>
      </div>
    </div>
  </div>
);
