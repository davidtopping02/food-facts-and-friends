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
    <animated.div style={fadeIn}>
      <div className="row">
        <div className="col">
          <img
            src={supportersBanner}
            alt="Supporters Banner"
            className="img-fluid mt-2"
          />
        </div>
      </div>
      <SupportersGallery logos={logos} />
    </animated.div>
  );
}

export default Supporters;
