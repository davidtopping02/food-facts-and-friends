// Object imports
import React from "react";

// Type imports
import { CardData } from "../../Types/CardData";

// Props interface
interface HomeInfoProps {
  cardData: CardData[];
}

// Component
const HomeInfo: React.FC<HomeInfoProps> = ({ cardData }) => {
  return (
    <div className="row justify-content-center">
      {cardData.map((card, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card w-100 h-100">
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <a href={card.link} className="btn btn-primary mt-auto">
                {card.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeInfo;
