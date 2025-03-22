import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import StyledButton from "../../Components/StyledButton/StyledButton";
import "bootstrap-icons/font/bootstrap-icons.css";

function OpeningHours() {
  return (
    <>
      <Banner title="Our Opening Hours" />
      <Container className="my-5"></Container>
    </>
  );
}

export default OpeningHours;
