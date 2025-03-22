import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

function Contact() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 800 },
  });

  return (
    <Container className="mt-5">
      <animated.div className="mb-5" style={fadeIn}>
        <h2 className="heading page-title">Contact Page</h2>
      </animated.div>
      <Row className="align-items-stretch">
        {/* First Column */}
        <Col md={6}>
          <animated.div style={fadeIn}>
            <ContactForm />
          </animated.div>
        </Col>
        {/* Second Column */}
        <Col md={6}>
          <animated.div style={fadeIn}>
            <ContactInfo />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
