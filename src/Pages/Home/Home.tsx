import React from "react";
import { animated } from "react-spring";

import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import OurLocation from "../../Components/OurLocation/OurLocation";
import CommunityHubMessage from "../../Components/CommunityHubMessage/CommunityHubMessage";

import homeBanner from "../../assets/images/banners/home_banner.jpg";
import useFadeInOnLoad from "../../hooks/useFadeInOnLoad";
import { communityMessageText, homeInfoCardText } from "./HomeText";

const Home: React.FC = () => {
  const fadeIn = useFadeInOnLoad();
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <animated.div className="row" style={fadeIn}>
        <div className="col">
          <img src={homeBanner} alt="Home Banner" className="img-fluid mt-2" />
        </div>
      </animated.div>

      <animated.div className="row mt-2" style={fadeIn}>
        <div className="col">
          <CommunityHubMessage text={communityMessageText} />
        </div>
      </animated.div>

      <animated.div className="row mt-4" style={fadeIn}>
        <div className="col">
          <HomeInfo cardData={homeInfoCardText} />
        </div>
      </animated.div>

      <animated.div className="row mt-4" style={fadeIn}>
        <div className="col">
          <OurLocation
            center={{ lat: 55.82806634557245, lng: -3.2227402445162725 }}
            zoom={14}
            googleMapsApiKey={googleMapsApiKey}
            mapId="74ab8317d68dac1c"
          />
        </div>
      </animated.div>
    </>
  );
};

export default Home;
