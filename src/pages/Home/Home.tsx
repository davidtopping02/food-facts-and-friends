import React from "react";
import "./Home.css";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import OurLocation from "../../Components/OurLocation/OurLocation";
import homeBanner from "../../assets/images/home_banner.jpg";

const Home: React.FC = () => {
  return (
    <>
      <img src={homeBanner} alt="Home Banner" className="img-fluid mt-2" />

      <div className="container text-center">
        <div className="row mt-5">
          <div className="col">
            <h5>
              <em>
                Food Facts Friends Community Hub is here to help anyone who is
                facing hunger because of crisis, be that parents skipping meals
                to feed their children, using any money to pay the rent, or
                anyone forced with the choice ‘heat or eat’ We are a Community
                Hub, supported by local businesses and individuals, working to
                prevent poverty and hunger across Midlothian.
              </em>
            </h5>
          </div>
        </div>

        <div className="row">
          <HomeInfo />
        </div>

        <div className="row mt-5">
          <OurLocation />{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
