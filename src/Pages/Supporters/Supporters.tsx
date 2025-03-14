import SupportersGallery from "../../Components/SupportersGallery/SupportersGallery";

function Supporters() {
  const logos = Object.values(
    import.meta.glob("/src/assets/supporters-logos/*.png", { eager: true })
  ) as { default: string }[];

  return (
    <div className="mt-5">
      <h2 className="heading page-title">Our Supporters Gallery</h2>
      <SupportersGallery logos={logos} />
    </div>
  );
}

export default Supporters;
