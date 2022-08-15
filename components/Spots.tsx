import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import Link from "next/link";
import Pagination from "./Pagination";

function Categoru({ spots, count, page }) {
  const [mapView, setMapView] = useState(false);

  const [dropDown, setDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");

  return (
    <div className="outer__inner">
      {/* page */}
      <div className="section catalog">
        <div className="sorting">
          <div className="sorting__center center">
            {/* breadcrumbs */}
            <div className="control">
              <ul className="breadcrumbs">
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumbs__item">Spots</li>
              </ul>
            </div>

            {/* title / show map */}
            <div className="sorting__body">
              <div className="sorting__box">
                <h2 className="sorting__title h2">Places to stay</h2>
                <div className="sorting__line">
                  <div className="sorting__sale">300+ spots</div>
                </div>
              </div>

              {/* map */}
              <div className="sorting__location">
                <button
                  className="button-stroke sorting__button js-sorting-button"
                  onClick={() => setMapView(!mapView)}
                >
                  <span>Show map</span>
                </button>
                <div
                  className={
                    mapView === true
                      ? "sorting__map js-sorting-map show"
                      : "sorting__map js-sorting-map"
                  }
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63817.0803287881!2d168.63234961382247!3d-45.04173987887954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2z0JrRg9C40L3RgdGC0LDRg9C9LCDQndC-0LLQsNGPINCX0LXQu9Cw0L3QtNC40Y8!5e0!3m2!1sru!2sua!4v1624887132616!5m2!1sru!2sua"
                    width="600"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* tabs -> selects for mobile */}
            <div className="sorting__foot">
              <div className="nav">
                <Tabs>
                  <TabList>
                    <Link scroll={false} href={`/spots`}>
                      <Tab>
                        <a onClick={() => setDropDownValue("")}>All</a>
                      </Tab>
                    </Link>
                    <Link scroll={false} href={`/spots?category=stairs`}>
                      <Tab>
                        <a onClick={() => setDropDownValue("")}>Stairs</a>
                      </Tab>
                    </Link>
                    <Link scroll={false} href={`/spots?category=rails`}>
                      <Tab>
                        <a onClick={() => setDropDownValue("")}>Rails</a>
                      </Tab>
                    </Link>
                    <Link scroll={false} href={`/spots?category=ledges`}>
                      <Tab>
                        <a onClick={() => setDropDownValue("")}>Ledges</a>
                      </Tab>
                    </Link>
                    <Link scroll={false} href={`/spots?category=gaps`}>
                      <Tab>
                        <a onClick={() => setDropDownValue("")}>Gaps</a>
                      </Tab>
                    </Link>
                  </TabList>
                </Tabs>
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

        {/* cards */}
        <div className="catalog__body">
          <div className="catalog__center center">
            <h4 className="catalog__title h4">Over 300 stays</h4>
            <div className="catalog__list">
              {spots.map((spot) => (
                <a className="card" href="stays-product.html" key={spot._id}>
                  <div className="card__preview">
                    <img
                      src="https://ui8-fleet-html.herokuapp.com/img/content/catalog-pic-1.jpg"
                      alt="Entire serviced classy moutain house"
                    />
                    <div className="category card__category">superhost</div>
                  </div>
                  <div className="card__body">
                    <div className="card__line">
                      <div className="card__title">{spot.title}</div>
                      <div className="card__price">
                        <div className="card__old">$356</div>
                        <div className="card__actual">$267</div>
                      </div>
                    </div>
                    <div className="card__options">
                      <div className="card__option">Free wifi</div>
                      <div className="card__option">Breakfast included</div>
                    </div>
                    <div className="card__foot">
                      <div className="card__flex">
                        <div className="card__cost">$200 total</div>
                        <div className="card__rating">
                          <div className="card__number">4.8</div>
                          <div className="card__reviews">(12 reviews)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="catalog__btns">
              <Pagination count={count} page={page} spotCategory="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoru;

{
  /* <div className="catalog__list">
{spots.map((spot) => (
  <a className="card" href="stays-product.html" key={spot._id}>
    <div className="card__preview">
      <img
        src="https://ui8-fleet-html.herokuapp.com/img/content/catalog-pic-1.jpg"
        alt="Entire serviced classy moutain house"
      />
      <div className="category card__category">superhost</div>
    </div>
    <div className="card__body">
      <div className="card__line">
        <div className="card__title">{spot.title}</div>
        <div className="card__price">
          <div className="card__old">$356</div>
          <div className="card__actual">$267</div>
        </div>
      </div>
      <div className="card__options">
        <div className="card__option">Free wifi</div>
        <div className="card__option">Breakfast included</div>
      </div>
      <div className="card__foot">
        <div className="card__flex">
          <div className="card__cost">$200 total</div>
          <div className="card__rating">
            <div className="card__number">4.8</div>
            <div className="card__reviews">(12 reviews)</div>
          </div>
        </div>
      </div>
    </div>
  </a>
))}
</div>
<div className="catalog__btns">
<Pagination count={count} page={page} spotCategory="" />
</div> */
}
