// React and library imports
import React from "react"; // Import React
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Component imports
import "./OurLocation.css";

// Prop type definitions
interface OurLocationProps {
  center: { lat: number; lng: number };
  zoom?: number;
  googleMapsApiKey: string;
}

const OurLocation: React.FC<OurLocationProps> = ({
  center,
  zoom = 14,
  googleMapsApiKey,
}) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}`;

  return (
    <div className="location-container">
      <h4>Where to find us</h4>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="location-link"
      >
        Open in Google Maps
      </a>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        {" "}
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={zoom}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default OurLocation;
