import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./OurLocation.css"; // Import the CSS file

const center = {
  lat: 55.82806634557245,
  lng: -3.2227402445162725,
};

const OurLocation: React.FC = () => {
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
      <LoadScript googleMapsApiKey="AIzaSyAUbF8xYUeRk7vQokGUV12_58taVXcivL4">
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default OurLocation;
