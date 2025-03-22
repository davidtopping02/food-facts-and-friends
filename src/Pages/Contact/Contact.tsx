import { Container, Row, Col } from "react-bootstrap";
import CardItem from "../../Components/CardItem/CardItem"; // Import CardItem
import Banner from "../../Components/Banner/Banner";
import contactBanner from "../../assets/images/banners/contact_banner.jpg";
import { contactInfoCardText } from "./ContactText";

function Contact() {
  return (
    <Container>
      <Banner imageSrc={contactBanner} altText="" title="Contact Us" />
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <CardItem
            title={contactInfoCardText.name}
            subtitle={contactInfoCardText.role}
            description={
              <>
                <div>
                  <i
                    className="bi bi-envelope"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <a href={`mailto:${contactInfoCardText.email}`}>
                    {contactInfoCardText.email}
                  </a>
                </div>

                <div>
                  <i
                    className="bi bi-telephone"
                    style={{ marginRight: "10px" }}
                  ></i>
                  {contactInfoCardText.primaryPhone}
                </div>

                <div>
                  <i
                    className="bi bi-telephone"
                    style={{ marginRight: "10px" }}
                  ></i>
                  {contactInfoCardText.secondaryPhone}
                </div>
              </>
            }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
