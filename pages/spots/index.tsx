import React, { useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import Categoru from "../../components/Spots";
import {server} from '../../utils/domain'
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import { FiSearch, FiMap, FiShare } from "react-icons/fi";

function All({ spots, count, page }) {
  const [mapView, setMapView] = useState(false);

  const [dropDown, setDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");

  return (
    <div className="outer__inner">
      <div className="section-mb80 main main_cars-category">
        <div className="main__bg">
          <img
            src="https://images.unsplash.com/photo-1593984663685-b91c7036cc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Main"
          />
        </div>
        <div className="main__center center spots__page">
          <div className="panel panel_cars-category category__panel">
            <div className="panel__background"></div>
            {/* <div className="panel__controls">
              <button className="button-stroke button-small panel__button active">
                Return to same location
              </button>
              <button className="button-stroke button-small panel__button">
                Return to same different location
              </button>
            </div> */}
            <div className="panel__body">
              <div className="panel__row">
                <div className="location js-location location_small location_down">
                  <div className="location__head js-location-head">
                    <div className="location__icon">
                      {/* <svg className="icon icon-marker">
                          <use xlink:href="#icon-marker"></use>
                        </svg> */}
                    </div>
                    <input
                      className="location__input js-location-input"
                      type="text"
                      name="location"
                      placeholder="Pickup location"
                      pwa2-uuid="EDITOR/input-E4D-B9A-961D4-632"
                      pwa-fake-editor=""
                    />
                    <button className="location__clear js-location-clear">
                      {/* <svg className="icon icon-close-circle">
                          <use xlink:href="#icon-close-circle"></use>
                        </svg> */}
                    </button>
                  </div>
                  <div className="location__body js-location-body">
                    <div className="location__list">
                      <a className="location__item js-location-item" href="#">
                        New York, NY
                      </a>
                      <a className="location__item js-location-item" href="#">
                        New York, Manhattan
                      </a>
                      <a className="location__item js-location-item" href="#">
                        New Zealand
                      </a>
                      <a className="location__item js-location-item" href="#">
                        New Smyrna Beach, FL
                      </a>
                      <a className="location__item js-location-item" href="#">
                        Newark, NJ
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="datepicker js-date-range datepicker_small datepicker_down"
                  data-format="ddd, MMM DD"
                  data-container=".datepicker"
                >
                  <div className="datepicker__list">
                    <div className="datepicker__item">
                      <input
                        className="datepicker__input js-date-from"
                        type="text"
                        placeholder="Check in"
                      />
                      <div className="datepicker__icon">
                        {/* <svg className="icon icon-calendar">
                            <use xlink:href="#icon-calendar"></use>
                          </svg> */}
                      </div>
                    </div>
                    <div className="datepicker__item">
                      <input
                        className="datepicker__input js-date-to"
                        type="text"
                        placeholder="Check out"
                      />
                      <div className="datepicker__icon">
                        {/* <svg className="icon icon-calendar">
                            <use xlink:href="#icon-calendar"></use>
                          </svg> */}
                      </div>
                    </div>
                  </div>
                  <button className="panel__search">
                    {/* <svg className="icon icon-search">
                      <use xlink:href="#icon-search"></use>
                    </svg> */}
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section catalog">
          <div className="sorting">
            <div className="sorting__center center">
              <div className="control">
                {/* <a
                  className="button-stroke button-small control__button"
                  href="cars.html"
                >

                  <span>Go home</span>
                </a> */}
                <ul className="breadcrumbs">
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="index.html">
                      Spots
                    </a>
                  </li>
                  {/* <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="stays-category.html">
                      {capitalizeFirstLetter(query)}
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="sorting__body">
                <div className="sorting__box">
                  <h2 className="sorting__title h2">24 locations found</h2>
                  <div className="sorting__line">
                    <div className="sorting__sale">up to 25% off</div>
                    <div className="sorting__details">May 1 - 14, 2 guests</div>
                  </div>
                </div>
                <div className="sorting__location">
                  {/* <button className="button-stroke sorting__button js-sorting-button">
                    <span>Show map</span>
                  </button> */}
                  <div className="sorting__map js-sorting-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63817.0803287881!2d168.63234961382247!3d-45.04173987887954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2z0JrRg9C40L3RgdGC0LDRg9C9LCDQndC-0LLQsNGPINCX0LXQu9Cw0L3QtNC40Y8!5e0!3m2!1sru!2sua!4v1624887132616!5m2!1sru!2sua"
                      width="600"
                      height="450"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="sorting__foot">
                
                <div className="nav">
                  <a className="nav__link active" href="#">
                    Sightseeing
                  </a>
                  <a className="nav__link" href="#">
                    Transportation activities
                  </a>
                  <a className="nav__link" href="#">
                    Art and culture
                  </a>
                </div>

                <div className="sorting__select">
                <div
                  className={
                    dropDown === true
                      ? "nice-select select open"
                      : "nice-select select"
                  }
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                >
                  <span className="current">
                    {dropDownValue || "Browse By"}
                  </span>
                  <ul className="list">
                  <Link scroll={false} href={`/spots?category=all`}>
                      <li
                        onClick={() => setDropDownValue("All")}
                        className={
                          dropDownValue === "Stairs"
                            ? "option selected focus"
                            : "option"
                        }
                      >
                        <a>All</a>
                      </li>
                    </Link>
                    <Link scroll={false} href={`/spots?category=stairs`}>
                      <li
                        onClick={() => setDropDownValue("Stairs")}
                        className={
                          dropDownValue === "Stairs"
                            ? "option selected focus"
                            : "option"
                        }
                      >
                        <a>Stairs</a>
                      </li>
                    </Link>
                    <Link scroll={false} href={`/spots?category=rails`}>
                      <li
                        onClick={() => setDropDownValue("Rails")}
                        className={
                          dropDownValue === "Rails"
                            ? "option selected focus"
                            : "option"
                        }
                      >
                        <a>Rails</a>
                      </li>
                    </Link>
                    <Link scroll={false} href={`/spots?category=ledges`}>
                      <li
                        onClick={() => setDropDownValue("Ledges")}
                        className={
                          dropDownValue === "Ledges"
                            ? "option selected focus"
                            : "option"
                        }
                      >
                        <a>Ledges</a>
                      </li>
                    </Link>
                    <Link scroll={false} href={`/spots?category=gaps`}>
                      <li
                        onClick={() => setDropDownValue("Gaps")}
                        className={
                          dropDownValue === "Gaps"
                            ? "option selected focus"
                            : "option"
                        }
                      >
                        <a>Gaps</a>
                      </li>
                    </Link>
                    <Link scroll={false} href={`/spots?category=other`}>
                      <li
                        onClick={() => setDropDownValue("Other")}
                        className={
                          dropDownValue === "Other"
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

              </div>
            </div>
          </div>

          <div className="catalog__body">
            <div className="catalog__center center">
              <div className="catalog__cards">
                {spots.map((spot) => (
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
                              <div className="card__reviews">(12 reviews)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
              <div className="catalog__btns">
              <Pagination count={count} page={page} spotCategory="" />
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps({ query }) {
  query.page == 0 || query.page == undefined ? (query.page = 1) : (query.page = query.page);
  const res = await fetch(`${server}/api/spots?page=${query.page}`);
  const data = await res.json();
  return {
    props: {
    spots: data.data,
    count: data.count,
    page: query.page
    }
  };
}

export default All;
