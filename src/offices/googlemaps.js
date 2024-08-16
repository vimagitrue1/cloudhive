import "./office.css";
import React, { useState ,useRef,useEffect} from "react";
import { Map, Marker , APIProvider ,useLoadScript} from "@vis.gl/react-google-maps";
// import { APIProvider ,useLoadScript} from "@vis.gl/react-google-maps";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


const GoogleMapComponent = () => {
  // shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  const [address, setAddress] = useState("");

  
  const handleMapClick = (event) => {
    const {lat ,lng} = event.detail.latLng;
    setMarkerLocation({ lat, lng });
    console.log(`Selected Location - Latitude: ${lat}, Longitude: ${lng}`);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  if (!apiKey) {
    console.error('Google Maps API key is missing.');
    return <div>Error: Google Maps API key is not configured.</div>;
  }
  return (<>
    
    <div className="map-container">
    <APIProvider apiKey={apiKey} >
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
        onClick={handleMapClick} // Attach the click event handler
      >
        <Marker position={markerLocation} />
      </Map>
      </APIProvider >    
    </div>
  </>);
}

export default GoogleMapComponent;
