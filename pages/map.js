import { useState } from "react";
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from "next/link";

// function Home(){
//     return (<><div>
//         <h1>Home page</h1>
//         <Link href="/sobre">
//             <a>Sobre</a>
//         </Link>
//     </div>
//     <div id="map">
//     </div></>)   
// }
// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/greggs.json?access_token=${process.env.MAPBOX_KEY}&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`;
// mapboxgl.accessToken = process.env.MAPBOX_KEY;

export default function Map() {

    const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 10
  });
  return (
  
  <div>
  <h1>Tá complicado...</h1>
  <p>Tentando renderizar um mapa do Map box usando o Next JS</p>
  <Link href="/sobre">
    <a>Sobre</a>
  </Link>
  <ReactMapGL
    mapStyle="mapbox://styles/mapbox/streets-v11"
    mapboxApiAccessToken = "pk.eyJ1Ijoicm9nZXJpb2xpbWF0aGVkZXYiLCJhIjoiY2t6M2FoaWs2MDFrdzJ2cDQzaHNkYXJwZSJ9._MyQKNc9qDkcccffQ23bkQ"
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
  </ReactMapGL>
  </div>)

  }


