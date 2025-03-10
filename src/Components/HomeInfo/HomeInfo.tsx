// Object imports
import React from "react";
import { Link } from "react-router-dom";

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
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <h3 className="heading heading-2">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <Link to={card.link} className="btn-custom mt-auto">
                {card.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeInfo;
