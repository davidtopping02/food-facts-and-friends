import "./SupportersGallery.css";
import useFadeIn from "../../hooks/useFadeInOnScroll";

interface SupportersGalleryProps {
  logos: { default: string }[];
}

function SupportersGallery({ logos }: SupportersGalleryProps) {
  useFadeIn(".logo-item");

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-lg-4 mb-4 logo-item text-center"
          >
            <img
              src={logo.default}
              alt={`Supporter Logo ${index + 1}`}
              className="img-fluid logo-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportersGallery;
