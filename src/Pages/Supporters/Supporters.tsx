import SupportersGallery from "../../Components/SupportersGallery/SupportersGallery";
import supportersBanner from "../../assets/images/banners/volunteers.jpg";
import { animated } from "react-spring";
import useFadeInOnLoad from "../../hooks/useFadeInOnLoad";

function Supporters() {
  const logos = Object.values(
    import.meta.glob("/src/assets/supporters-logos/*.png", { eager: true })
  ) as { default: string }[];

  const fadeIn = useFadeInOnLoad();

  return (
    <>
      <animated.div style={fadeIn}>
        <div className="row">
          <img
            src={supportersBanner}
            alt="Supporters Banner"
            className="img-fluid mt-2"
          />
        </div>

        <div className="row">
          <h2 className="heading page-title mt-5">Our Supporters Gallery</h2>
        </div>
      </animated.div>

      <SupportersGallery logos={logos} />
    </>
  );
}

export default Supporters;
