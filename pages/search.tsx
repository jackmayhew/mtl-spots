import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { server } from "../utils/domain";
import Link from "next/link";
import SearchPagination from "../components/Pagination/SearchPagination";
import { FiSearch, FiArrowLeft } from "react-icons/fi";
import Card from "../components/Cards/Card";

function Search({ initialSpots, initialCount, initialPage, initialTerm }) {
  const [searchTerm, setSearchTerm] = useState(initialTerm);

  const [search, setSearch] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    /\S/.test(searchValue) ? setSearch(true) : setSearch(false);
    setSearchTerm(e.target.value);
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
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Search</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link href={`/search?term=${initialTerm}`}>
                      <a className="breadcrumbs__link">
                        {initialTerm}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sorting__body">
                <div className="sorting__box sorting__search">
                  <h2 className="sorting__title h2">
                    {initialCount > 1 || initialCount === 0
                      ? `${initialCount} Spots Found`
                      : `${initialCount} Spot Found`}
                  </h2>
                  <div className="sorting__line">
                    <div className="sorting__details search__overflow">
                      Search Results: <span>{initialTerm}</span> 
                    </div>
                  </div>
                </div>
              </div>

              <div className="sorting__foot searchbar__flex">
                <Link href="/spots">
                  <a className="button button__back">
                    <div className="location__icon icon__back">
                      <FiArrowLeft size={22} />
                    </div>
                    <h3>Back</h3>
                  </a>
                </Link>

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
                            defaultValue={
                              initialTerm !== "none" ? initialTerm : ""
                            }
                          />
                        </div>
                        <button>
                          <FiSearch
                            className={
                              (search && searchTerm !== "none") ||
                              (searchTerm && searchTerm !== "none")
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
                  <SearchPagination
                    count={initialCount}
                    page={initialPage}
                    initialTerm={initialTerm}
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

export async function getServerSideProps({ query }) {
  query.page == 0 || query.page == undefined
    ? (query.page = 1)
    : (query.page = query.page);

  query.category == "" || query.category == undefined
    ? (query.category = "")
    : (query.category = query.category);

  query.term == "" || query.term == undefined
    ? (query.term = "none")
    : (query.term = query.term);

  const res = await fetch(
    `${server}/api/search?term=${query.term}&category=${query.category}&page=${query.page}`
  );

  const data = await res.json();

  return {
    props: {
      initialSpots: data.data,
      initialCount: data.count,
      initialPage: query.page,
      initialCategory: query.category,
      initialTerm: query.term,
    },
  };
}

export default Search;
