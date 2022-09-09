import React, { useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import { server } from "../utils/domain";
import Link from "next/link";
import SavedPagination from "../components/Spots/SavedPagination";
import { useRouter } from "next/router";

function All({ initialSpots, initialPage }) {
  const router = useRouter();

  const [spots, setSpots] = useState([]);
  const [renderedSpots, setRenderedSpots] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("savedList")) {
      // get ids from local storage
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
                    {!spots.length
                      ? 'No saved spots yet. Click the "save" button while viewing a spot and it will appear here.'
                      : null}
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
                    <Link
                      href={`/spots/${spot.category}/${spot._id}`}
                      key={spot._id}
                    >
                      <a className="card" key={spot._id}>
                        <div className="card__preview">
                          <img
                            src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg"
                            alt="Entire serviced classy moutain house"
                          />
                          {/* <div className="category card__category">superhost</div> */}
                        </div>
                        <div className="card__body">
                          <div className="card__line">
                            <div className="card__title">{spot.title}</div>
                            <div className="card__price">
                              <div className="card__actual">info</div>
                            </div>
                          </div>
                          <div className="card__options">
                            <div className="card__option">{spot.location}</div>
                          </div>
                          <div className="card__foot">
                            <div className="card__flex">
                              <div className="card__cost">{spot.category}</div>
                              <div className="card__rating">
                                <div className="card__number">4.8</div>
                                <div className="card__reviews">
                                  (12 reviews)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              )}
              {renderedSpots.length > 0 && (
                <div className="catalog__btns">
                  <SavedPagination count={spots.length} page={initialPage} />
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
