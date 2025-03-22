import React from "react";
import { Container, Card } from "react-bootstrap";
import recyclablesImage from "../../../assets/images/items_for_good_causes.png";

const DonateRecyclables: React.FC = () => (
  <Container className="my-5">
    <Card className="shadow-lg p-4">
      <Card.Body className="text-center">
        <Card.Title>
          <h2 className="heading heading-2">Donate Recyclables</h2>
        </Card.Title>
        <Card.Text>Your contributions help us make a difference!</Card.Text>
        <Card.Img
          variant="top"
          src={recyclablesImage}
          alt="Items for Good Causes"
          className="img-fluid my-4"
          style={{ maxHeight: "900px", objectFit: "contain" }}
        />
        <Card.Text>
          You can help us raise money by recycling any of the items shown below
          at the HUB.
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default DonateRecyclables;
