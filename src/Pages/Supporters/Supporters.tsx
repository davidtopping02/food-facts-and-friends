function Supporters() {
  const logos = Object.values(
    import.meta.glob("/src/assets/supporters-logos/*.png", { eager: true })
  ) as { default: string }[];

  return (
    <div className="container mt-5">
      <div className="row">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          >
            <div className="logo-container">
              <img
                src={logo.default}
                alt={`Supporter Logo ${index + 1}`}
                className="img-fluid logo-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Supporters;
