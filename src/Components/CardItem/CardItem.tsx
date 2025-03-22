import { Card } from "react-bootstrap";
import StyledButton from "../StyledButton/StyledButton";

interface CardItemProps {
  title: string;
  subtitle?: string;
  description: string | JSX.Element;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
}) => (
  <Card className="border-secondary text-center p-3 w-100 h-100 d-flex flex-column">
    <Card.Body className="d-flex flex-column">
      <Card.Title className="heading heading-4">{title}</Card.Title>
      {subtitle && (
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
      )}
      <Card.Text className="flex-grow-1">{description}</Card.Text>
      {buttonText && onButtonClick && (
        <StyledButton text={buttonText} onClick={onButtonClick} />
      )}
    </Card.Body>
  </Card>
);

export default CardItem;
