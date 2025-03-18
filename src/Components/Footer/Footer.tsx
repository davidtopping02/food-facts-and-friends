import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="custom-footer mt-4">
    <Container>
      <Row className="text-center">
        <Col>
          <p>
            &copy; {new Date().getFullYear()} Food Facts and Friends. All rights
            reserved.
          </p>
          <p>
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
