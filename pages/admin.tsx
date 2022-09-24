import fetch from "isomorphic-unfetch";
import { server } from "../utils/domain";
import { useState, useEffect, useRef } from "react";
import listenForOutsideClick from "../utils/Listen";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";

function SingleSpot({ spot, relatedSpots, category, comments }) {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const { user, isLoading } = useUser();

  return (
      <div className="outer__inner">
        {/* <a href="/api/auth/login">Login</a> */}
        {user && <h1>{user.sub}</h1>}
      </div>
  );
}

// export async function getServerSideProps({ query }) {
//   const spotID = query.params[1];

//   const res = await fetch(`${server}/api/spots/category/${spotID}`);
//   const data = await res.json();

//   return {
//     props: {
//       spot: data.data,
//       relatedSpots: data.related,
//       category: data.data.category,
//       comments: data.comments
//     },
//   };
// }

export default SingleSpot;
