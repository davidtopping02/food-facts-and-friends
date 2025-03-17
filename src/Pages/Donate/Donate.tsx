import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DonateBanner from "../../assets/images/banners/donate_banner.jpg";
import Banner from "../../Components/Banner/Banner";

// import MoneyImage from "../../assets/images/donate/money.jpg";
// import TimeImage from "../../assets/images/donate/time.jpg";
// import FoodImage from "../../assets/images/donate/food.jpg";
// import RecycleImage from "../../assets/images/donate/recycle.jpg";

function Donate() {
  const donationOptions = [
    {
      title: "Donate Money",
      // image: MoneyImage,
      link: "/donate/money",
      description: "Contribute financially to support our mission.",
    },
    {
      title: "Donate Time",
      // image: TimeImage,
      link: "/donate/time",
      description: "Volunteer your time and make a difference.",
    },
    {
      title: "Donate Food Items",
      // image: FoodImage,
      link: "/donate/food",
      description: "Help us by donating non-perishable food items.",
    },
    {
      title: "Donate Recycle Items",
      // image: RecycleImage,
      link: "/donate/recycle",
      description: "Donate recyclable items and help the environment.",
    },
  ];

  return (
    <>
      <Banner
        imageSrc={DonateBanner}
        altText="Supporters Banner"
        title="How to Donate"
      />
      <Container className="my-5">
        <Row>
          {donationOptions.map((option, idx) => (
            <Col
              key={idx}
              md={3}
              className="d-flex justify-content-center mb-4"
            >
              <Card className="text-center h-100" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={option.image} alt={option.title} />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title>{option.title}</Card.Title>
                  <Card.Text>{option.description}</Card.Text>
                  <Link to={option.link}>
                    <Button className="btn-custom">Learn More</Button>
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
