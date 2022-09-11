import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { server } from "../utils/domain";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../components/Cards/Card";
import Pagination from "../components/Pagination/Pagination";

function All({ initialSpots, initialPage }) {
  const router = useRouter();

  const [spots, setSpots] = useState([]);
  const [renderedSpots, setRenderedSpots] = useState([]);

  const [spotCheck, setSpotCheck] = useState(false);


  useEffect(() => {
    if (localStorage.getItem("savedList")) {
      // get ids from local storage
      setSpotCheck(true)
      const array = localStorage
        .getItem("savedList")
        .split(",")
        .filter(function (array) {
          return array !== "";
        });

      // filter spots with saved ids from api query
      let filteredSpots = initialSpots.filter((spot) =>
        array.includes(spot._id)
      );
      setSpots(filteredSpots);

      // show spots onload
      setRenderedSpots(
        filteredSpots
          // .filter((spot) => array.includes(spot._id))
          .slice(parseInt(initialPage) * 12 - 12, parseInt(initialPage) * 12)
      );

      // pagination - show correct 12 spots per page on click
      const handleRouteChange = (url) => {
        let pageCount = parseInt(`${url}`.split("=").pop());

        isNaN(pageCount) || pageCount === 0
          ? (pageCount = 1)
          : (pageCount = pageCount);

        setRenderedSpots(
          filteredSpots
            // .filter((spot) => array.includes(spot._id))
            .slice(pageCount * 12 - 12, pageCount * 12)
        );
      };

      router.events.on("routeChangeStart", handleRouteChange);
    }
  }, []);

  return (
    <div className="outer__inner">
      <div className="section-mb80 main main_cars-category">
        <div className="section catalog">
          <div className="sorting">
            <div className="sorting__center center">
              <div className="control">
                <ul className="breadcrumbs">
                  <li className="breadcrumbs__item">
                    <Link href={`/`}>
                      <a className="breadcrumbs__link">Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link href={`/saved`}>
                      <a className="breadcrumbs__link">Saved Spots</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sorting__body">
                <div className="sorting__box">
                  <h2 className="sorting__title h2">
                    {spots.length}
                    {spots.length > 1 || !spots.length
                      ? " Saved Spots"
                      : " Saved Spot"}
                  </h2>
                  <h2>
                  Click the "save" button while viewing a spot and it will appear here.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="catalog__body">
            <div className="catalog__center center">
              {initialSpots.length > 0 && (
                <div className="catalog__cards">
                  {renderedSpots.map((spot) => (
                    <Card spot={spot} key={spot._id} />
                  ))}
                </div>
              )}
              {renderedSpots.length > 0 && (
                <div className="catalog__btns">
                  <Pagination
                    count={spots.length}
                    page={initialPage}
                    spotCategory={""}
                    url={`/saved?`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  query.page == 0 || query.page == undefined
    ? (query.page = 1)
    : (query.page = query.page);

  const res = await fetch(`${server}/api/spots/saved?page=${query.page}`);

  const data = await res.json();

  return {
    props: {
      initialSpots: data.data,
      initialPage: query.page,
    },
  };
}

export default All;
