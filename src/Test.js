// import axios from "axios";
// import { useState } from "react";
// import { AsyncPaginate } from "react-select-async-paginate";

// export default function Test() {
//   let [x, setX] = useState([]);
//   let arr;

//   console.log("Start");
//   const getX = () => {
//     axios.get("users.json").then((response) => {
//       arr = response.data;
//       setX([...x, ...arr]);
//       console.log(x);
//     });
//   };

//   console.log("End");

//   useEffect(() => {
//     getX();
//     console.log("use effect");
//   }, []);

//   console.log(x);
//   return (
//     <h1>
//       hello world{x[0] === undefined ? "  error" : x[0].name}
//       {console.log("Return")}
//     </h1>
//   );
// }

// export default function Test({ onSearchChange }) {
//   const [search, setSearch] = useState(null);

//   const handleOnChange = (searchData) => {
//     setSearch(searchData);
//     onSearchChange(searchData);
//   };

//   const loadOptions = (inputValue) => {
//     return axios
//       .get(`https://api.teleport.org/api/cities/?search=${inputValue}&limit=5`)
//       .then((response) =>
//         // console.log(response.data._embedded["city:search-results"])
//         {
//           return {
//             options: response.data._embedded["city:search-results"].map(
//               (city) => {
//                 const cityFullName = city.matching_full_name.split(" ");
//                 const cityName = `${cityFullName[0]} ${
//                   cityFullName[cityFullName.length - 1]
//                 }`;
//                 return {
//                   value: `${cityName}`,
//                   label: `${cityName}`,
//                 };
//               }
//             ),
//           };
//         }
//       )
//       .catch((err) => console.log(err));
//   };

//   return (
//     <AsyncPaginate
//       placeholder="Search for city"
//       debounceTimeout={600}
//       value={search}
//       onChange={handleOnChange}
//       loadOptions={loadOptions}
//     />
//   );
// }

export default function Test() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // var dayName = days[d.getDay()];

  const dtt = new Date("2022-09-16 24:00:00").getDay();
  //   const day = dtt;
  console.log(days[dtt]);
  return (
    <div>
      hello
      {/* {day}
      {dt} */}
    </div>
  );
}
