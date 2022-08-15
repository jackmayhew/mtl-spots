import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import SpotsDrop from "../../components/NavBar/SpotsDrop";

function All({ spot }) {

  return <div>single spot</div>
  // return <div>{spot.data.title}</div>
}

// All.getInitialProps = async ({ query }) => {
//   const spotID = query.params[1];

//   const res = await fetch(`http://localhost:3000/api/spots/category/${spotID}`);
//   const data = await res.json();

//   return { spot: data };
// };

export default All;
