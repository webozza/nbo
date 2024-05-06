import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* Optional: Add markers, polygons, etc. */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
