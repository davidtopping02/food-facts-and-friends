import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DonateBanner from "../../assets/images/banners/donate_banner.jpg";
import Banner from "../../Components/Banner/Banner";
import StyledButton from "../../Components/StyledButton/StyledButton";
import "bootstrap-icons/font/bootstrap-icons.css";
import { donationOptions } from "./DonationOptions";

function Donate() {
  return (
    <>
      <Banner
        imageSrc={DonateBanner}
        altText="Supporters Banner"
        title="How You Can Help"
      />
      <Container className="my-5">
        <Row>
          {donationOptions.map((option, idx) => (
            <Col
              key={idx}
              md={3}
              className="d-flex justify-content-center mb-4"
            >
              <Card
                className="text-center h-100 position-relative"
                style={{ width: "18rem" }}
              >
                <div
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <i
                    className={`bi ${option.iconClass} text-dark`}
                    style={{ fontSize: "6rem", opacity: 0.8 }}
                  ></i>
                </div>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title>{option.title}</Card.Title>
                  <Card.Text>{option.description}</Card.Text>
                  <Link to={option.link}>
                    <StyledButton text="Learn More" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Donate;
