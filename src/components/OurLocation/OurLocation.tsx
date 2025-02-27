import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 55.82806634557245,
  lng: -3.2227402445162725,
};

const OurLocation: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}`;

  return (
    <>
      <h4>Our Location</h4>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "block",
          textAlign: "center",
        }}
      >
        Open in Google Maps
      </a>

      <LoadScript googleMapsApiKey="AIzaSyAUbF8xYUeRk7vQokGUV12_58taVXcivL4">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {/* Marker with Label */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default OurLocation;
