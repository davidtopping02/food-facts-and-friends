import React from "react";
import "./Home.css";
import FacebookPage from "../../Components/Facebook/Facebook";
import OurLocation from "../../Components/OurLocation/OurLocation";

import groupPhoto from "../../assets/images/home_banner.jpg";

const Home: React.FC = () => {
  return (
    <>
      <div className="container text-center">
        <img src={groupPhoto} alt="Home Banner" className="img-fluid mt-3" />

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

        <div className="row mt-5">
          <div className="col">{/* <FacebookPage /> */}</div>

          <div className="col">{/* <OurLocation />{" "} */}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
