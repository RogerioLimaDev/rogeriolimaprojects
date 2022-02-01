import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";


const Map = dynamic(() => import("./map"), {
    loading: () => "Loading...",
    ssr: false
  });


export default Map;

// function Home({locations}){
//     // return (<><div>
//     //     <h1>Home page</h1>
//     //     <Link href="/sobre">
//     //         <a>Sobre</a>
//     //     </Link>
//     // </div>
//     // <div id="map">
//     // </div></>)   
//       }


// export default Home;