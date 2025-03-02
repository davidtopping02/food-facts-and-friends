import React from "react";
import { useSpring, animated } from "react-spring";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import OurLocation from "../../Components/OurLocation/OurLocation";
import homeBanner from "../../assets/images/home_banner.jpg";
import CommunityHubMessage from "../../Components/CommunityHubMessage/CommunityHubMessage";

const Home: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 800 },
  });

  return (
    <>
      <animated.div className="row" style={fadeIn}>
        <div className="col">
          <img src={homeBanner} alt="Home Banner" className="img-fluid mt-2" />
        </div>
      </animated.div>

      <animated.div className="row mt-2" style={fadeIn}>
        <div className="col">
          <CommunityHubMessage />
        </div>
      </animated.div>

      <animated.div className="row mt-4" style={fadeIn}>
        <div className="col">
          <HomeInfo />
        </div>
      </animated.div>

      <animated.div className="row mt-4" style={fadeIn}>
        <div className="col">
          <OurLocation />
        </div>
      </animated.div>
    </>
  );
};

export default Home;
