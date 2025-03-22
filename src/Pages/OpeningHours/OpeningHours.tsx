import { Container } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
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
