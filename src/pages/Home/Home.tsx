// Object imports
import React from "react";
import { useSpring, animated } from "react-spring";

// Component imports
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import OurLocation from "../../Components/OurLocation/OurLocation";
import CommunityHubMessage from "../../Components/CommunityHubMessage/CommunityHubMessage";

// Asset imports
import homeBanner from "../../assets/images/home_banner.jpg";

// Text imports
import { communityMessageText, homeInfoCardText } from "./HomeText";

const Home: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 800 },
  });

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
          />
        </div>
      </animated.div>
    </>
  );
};

export default Home;
