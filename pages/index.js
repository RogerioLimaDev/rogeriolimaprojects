import dynamic from "next/dynamic";


const Map = dynamic(() => import("./map"), {
    loading: () => "Loading...",
    ssr: false
  });


// export default Map;

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/greggs.json?access_token=${process.env.MAPBOX_KEY}&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`;
export default function IndexPage() {
//   const [locations, setLocations] = useState([]);
//   useEffect(() => {
//     const fetchLocations = async () => {
//       await fetch(url).then((response) =>
//         response.text()).then((res) => JSON.parse(res))
//       .then((json) => {
//         setLocations(json.features);
//       }).catch((err) => console.log({ err }));
//     };
//     fetchLocations();
//   }, []);
  return (<div>
  <h1>Tá foda</h1>
  </div>);
}