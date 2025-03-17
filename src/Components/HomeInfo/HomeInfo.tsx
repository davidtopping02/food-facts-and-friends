// Object imports
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"; // Import Button from react-bootstrap

// Type imports
import { CardData } from "../../Types/CardData";

// Props interface
interface HomeInfoProps {
  cardData: CardData[];
}

const HomeInfo: React.FC<HomeInfoProps> = ({ cardData }) => {
  return (
    <div className="row justify-content-center">
      {cardData.map((card, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card w-100 h-100">
            <div className="card-body d-flex flex-column">
              <h3 className="heading heading-2 text-center">{card.title}</h3>
              <p className="card-text text-center flex-grow-1">{card.text}</p>
              <div className="mt-auto text-center">
                <Link to={card.link}>
                  <Button className="btn-custom">{card.buttonText}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeInfo;
