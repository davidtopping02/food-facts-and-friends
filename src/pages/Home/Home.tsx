import React from "react";
import "./Home.css";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import OurLocation from "../../Components/OurLocation/OurLocation";
import homeBanner from "../../assets/images/home_banner.jpg";
import CommunityHubMessage from "../../Components/CommunityHubMessage/CommunityHubMessage";

const Home: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <img src={homeBanner} alt="Home Banner" className="img-fluid mt-2" />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <CommunityHubMessage />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <HomeInfo />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <OurLocation />
        </div>
      </div>
    </>
  );
};

export default Home;
