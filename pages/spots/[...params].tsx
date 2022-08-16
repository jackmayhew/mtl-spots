import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { server } from "../../utils/domain";

function All({ spot }) {
  return <div>{spot.title}</div>;
}

export async function getServerSideProps({ query }) {
  const spotID = query.params[1];

  const res = await fetch(`${server}/api/spots/category/${spotID}`);
  const data = await res.json();

  return {
    props: {
      spot: data.data,
    },
  };
}

export default All;
