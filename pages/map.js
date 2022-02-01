import { accessToken } from "mapbox-gl";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/greggs.json?access_token=${process.env.MAPBOX_KEY}&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`;


export default function Map() {

    accessToken = process.env.MAPBOX_KEY;
    const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 10
  });
  return <ReactMapGL
    mapStyle="mapbox://styles/mapbox/streets-v11"
    // mapboxApiAccessToken = 
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
  </ReactMapGL>
  }
