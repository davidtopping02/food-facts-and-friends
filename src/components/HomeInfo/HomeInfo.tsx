import React from "react";

const cardData = [
  {
    title: "How to Donate",
    text: "Support our mission by making a donation. Every contribution helps us continue our work.",
    link: "#",
    buttonText: "Donate Now",
  },
  {
    title: "Our Opening Hours",
    text: "Check our hours to find the best time to visit us.",
    link: "#",
    buttonText: "View Hours",
  },
  {
    title: "Our Latest News",
    text: "Stay updated with our latest events, community stories, and important announcements.",
    link: "#",
    buttonText: "Read News",
  },
];

const HomeInfo: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card w-100 h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link} className="btn btn-primary">
                  {card.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeInfo;
