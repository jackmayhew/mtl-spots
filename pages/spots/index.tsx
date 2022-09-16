import React, { useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import { server } from "../../utils/domain";
import Link from "next/link";
import Pagination from "../../components/Pagination/Pagination";
import listenForOutsideClick from "../../utils/Listen";
import { FiSearch } from "react-icons/fi";
import Card from "../../components/Cards/Card";
AllSpots.title = "Spots"

function AllSpots({ initialSpots, initialCount, initialPage, initialCategory }) {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const [query, setQuery] = useState(initialCategory);

  const [search, setSearch] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    /\S/.test(searchValue) ? setSearch(true) : setSearch(false);
  };

  const handleSubmit = (e) => {
    search ? null : e.preventDefault();
  };

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
                    <Link href={`/spots`}>
                      <a className="breadcrumbs__link">Spots</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sorting__body">
                <div className="sorting__box">
                  <h2 className="sorting__title h2">
                    {initialCount} Spots Found
                  </h2>
                  <div className="sorting__line">
                    <div className="sorting__details">
                      {query === "All" || !query
                        ? "Showing All Spots"
                        : `Showing ${capitalizeFirstLetter(query)}`}
                    </div>
                  </div>
                </div>
              </div>
              <div className="sorting__foot spotspage__search">
                <div className="sorting__select" ref={menuRef}>
                  <div
                    className={
                      isOpen ? "nice-select select open" : "nice-select select"
                    }
                    onClick={toggle}
                  >
                    <span className="current">
                      {query ? capitalizeFirstLetter(query) : "Browse By"}
                    </span>
                    <ul className="list">
                      <Link scroll={false} href={`/spots?category=`}>
                        <li
                          onClick={() => setQuery("All")}
                          className={
                            query === "All" ? "option selected focus" : "option"
                          }
                        >
                          <a>All</a>
                        </li>
                      </Link>
                      <Link scroll={false} href={`/spots?category=stairs`}>
                        <li
                          onClick={() => setQuery("stairs")}
                          className={
                            query === "stairs"
                              ? "option selected focus"
                              : "option"
                          }
                        >
                          <a>Stairs</a>
                        </li>
                      </Link>
                      <Link scroll={false} href={`/spots?category=rails`}>
                        <li
                          onClick={() => setQuery("rails")}
                          className={
                            query === "rails"
                              ? "option selected focus"
                              : "option"
                          }
                        >
                          <a>Rails</a>
                        </li>
                      </Link>
                      <Link scroll={false} href={`/spots?category=ledges`}>
                        <li
                          onClick={() => setQuery("ledges")}
                          className={
                            query === "ledges"
                              ? "option selected focus"
                              : "option"
                          }
                        >
                          <a>Ledges</a>
                        </li>
                      </Link>
                      <Link scroll={false} href={`/spots?category=gaps`}>
                        <li
                          onClick={() => setQuery("gaps")}
                          className={
                            query === "gaps"
                              ? "option selected focus"
                              : "option"
                          }
                        >
                          <a>Gaps</a>
                        </li>
                      </Link>
                      <Link scroll={false} href={`/spots?category=other`}>
                        <li
                          onClick={() => setQuery("other")}
                          className={
                            query === "other"
                              ? "option selected focus"
                              : "option"
                          }
                        >
                          <a>Other</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>

                <div className="location js-location location_small location_down active spots__search">
                  <div className="location__head js-location-head">
                    <div className="location__icon search__icon">
                      <form action="/search" onSubmit={handleSubmit}>
                        <div className="form__left">
                          <input
                            className="location__input js-location-input"
                            type="text"
                            name="term"
                            placeholder="Search..."
                            autoComplete="off"
                            onKeyUp={handleSearch}
                          />
                        </div>
                        <button>
                          <FiSearch
                            className={
                              search
                                ? "icon icon-globe share__icon submit__icon submit__icon__show"
                                : "icon icon-globe share__icon submit__icon"
                            }
                            size={28}
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="catalog__body">
            <div className="catalog__center center">
              <div className="catalog__cards">
                {initialSpots.map((spot) => (
                  <Card spot={spot} key={spot._id} />
                ))}
              </div>

              {initialSpots.length > 0 && (
                <div className="catalog__btns">
                  <Pagination
                    count={initialCount}
                    page={initialPage}
                    url={`/spots?category=${initialCategory}&`}
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

  query.category == "" || query.category == undefined
    ? (query.category = "")
    : (query.category = query.category);

  const res = await fetch(
    `${server}/api/spots?category=${query.category}&page=${query.page}`
  );

  const data = await res.json();

  return {
    props: {
      initialSpots: data.data,
      initialCount: data.count,
      initialPage: query.page,
      initialCategory: query.category,
    },
  };
}

export default AllSpots;
