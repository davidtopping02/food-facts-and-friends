import "./SupportersGallery.css";
import { useEffect } from "react";

interface SupportersGalleryProps {
  logos: { default: string }[];
}

function SupportersGallery({ logos }: SupportersGalleryProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".logo-item")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mt-5">
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
