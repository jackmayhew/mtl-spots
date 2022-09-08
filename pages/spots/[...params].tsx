import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { server } from "../../utils/domain";
import {
  FiSearch,
  FiMapPin,
  FiShare,
  FiBookmark,
  FiMap,
  FiStar,
  FiClock,
  FiList,
  FiFrown,
  FiClipboard,
  FiCopy,
} from "react-icons/fi";
import Slider from "../../components/Sliders/Slider";
import moment from "moment";
import Map from "../../components/Maps/SpotMap";
import { useState, useEffect, useRef } from "react";
import listenForOutsideClick from "../../utils/Listen";

import useCopyToClipboard from "../../components/copy";




function SingleSpot({ spot, relatedSpots, category }) {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const url = `mtlspots.ca/spots/${spot.category}/${spot._id}`;

  const [saved, setSaved] = useState(null);

  const refStyle = useRef(null);

  const [value, copy] = useCopyToClipboard();

  const [savedSpot, setSavedSpot] = useState("");

  useEffect(() => {
    const item = localStorage.getItem("savedList");
    setSavedSpot(item);
  }, []);

  const saveSpot = (e) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("savedList");
      if (saved && saved.includes(spot._id)) {
        refStyle.current.classList.remove("actives");
        let removeSpot = localStorage.getItem("savedList");
        removeSpot = removeSpot.replace(spot._id + ",", "");
        localStorage.setItem("savedList", removeSpot);
        setSavedSpot(removeSpot);
        return;
      } else {
        refStyle.current.classList.add("actives");
        saved
          ? localStorage.setItem("savedList", saved + spot._id + ",")
          : localStorage.setItem("savedList", spot._id + ",");
        setSavedSpot(localStorage.getItem("savedList"));
      }
    }
  };

  return (
    <div className="outer__inner">
      <div className="section-mb64 product">
        <div className="product__center center">
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
                <Link href={`/spots/${spot.category}`}>
                  <a className="breadcrumbs__link">
                    {capitalizeFirstLetter(spot.category)}
                  </a>
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link href={`/spots/${spot.category}/${spot._id}`}>
                  <a className="breadcrumbs__link">{spot.title}</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="product__head">
            <div className="product__box">
              <h2 className="product__title h2">{spot.title}</h2>
              <div className="product__line">
                <div className="product__rating">
                  <FiClock />
                  <div className="product__number">
                    {moment(`${spot.time}`, "YYYYMMDD").fromNow()}
                  </div>
                </div>
                {/* <div className="product__options">
                  <div className="product__option location__icon">
                    <FiMapPin size={22} />
                    Rosemont
                  </div>
                </div> */}
              </div>
            </div>

            <div className="actions js-actions">
              <div className="actions__list">
                <div
                  ref={menuRef}
                  className={
                    isOpen
                      ? "actions__item actions__item_share js-actions-item active"
                      : "actions__item actions__item_share js-actions-item"
                  }
                >
                  <button
                    className="button-circle-stroke button-small actions__button js-actions-button"
                    onClick={toggle}
                  >
                    <FiShare size={22} className="icon" />
                  </button>

                  <div className="actions__body js-actions-body link__body">
                    <div className="actions__title">
                      {value
                        ? "Link has been copied!"
                        : "Share a link to this page"}
                    </div>
                    <div className="actions__list  share__modal">
                      <a
                        className="actions__link btn-twitter"
                        onClick={() => copy(url)}
                      >
                        <span>
                          <FiCopy size={22} />
                        </span>
                      </a>
                      <a className="url">
                        <span>
                          mtlspots.ca/spots/{spot.category}/{spot._id}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  ref={refStyle}
                  // className={
                  //   saved
                  //     ? "actions__item actions__item_share js-actions-item actives"
                  //     : "actions__item actions__item_share js-actions-item"
                  // }
                  className="actions__item actions__item_share js-actions-item"
                >
                  <button
                    className={
                      savedSpot && savedSpot.includes(spot._id)
                        ? "button-circle-stroke button-small actions__button js-actions-button spot__saved"
                        : "button-circle-stroke button-small actions__button js-actions-button"
                    }
                    onClick={saveSpot}
                  >
                    <FiBookmark size={22} className="icon icon__disable" />
                  </button>

                  <div className="actions__body js-actions-body">
                    <div className="actions__title saved__title">
                      This spot has been saved.
                    </div>
                  </div>
                </div>

                <div className="actions__item actions__item_map js-actions-item">
                  <button className="button-circle-stroke button-small actions__button js-actions-button">
                    <FiMap size={22} className="icon" />
                  </button>
                  <div className="actions__body js-actions-body">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63817.0803287881!2d168.63234961382247!3d-45.04173987887954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2z0JrRg9C40L3RgdGC0LDRg9C9LCDQndC-0LLQsNGPINCX0LXQu9Cw0L3QtNC40Y8!5e0!3m2!1sru!2sua!4v1624887132616!5m2!1sru!2sua"
                      width="600"
                      height="450"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery">
            <div className="gallery__list gallery__list_stays">
              <div className="gallery__preview">
                <img
                  src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section description">
        <div className="description__center center">
          <div className="description__wrapper">
            <h4 className="description__title h4">{spot.title}</h4>
            {spot.ig && (
              <div className="description__profile">
                <div className="description__name">
                  Shared By: @
                  <a
                    href={`https://www.instagram.com/${spot.ig}/`}
                    target="_blank"
                    rel="noopener"
                  >
                    {spot.ig}
                  </a>
                </div>
              </div>
            )}
            <div className="description__parameters">
              <div className="description__parameter">Bust Level: Low</div>
            </div>
            {spot.description && (
              <div className="description__content">
                <p>{spot.description}</p>
              </div>
            )}
          </div>
          <div className="receipt">
            <div className="receipt__head">
              <div className="receipt__details">
                <div className="receipt__cost">
                  <div className="receipt__actual">Map Location</div>
                </div>
              </div>
            </div>

            <div className="upload__item">
              <div className="upload__note map__note">
                Drag or choose your file to upload
              </div>
              <div className="upload__file map__spot">
                <Map location={spot.location} />{" "}
              </div>
            </div>
            <div className="receipt__btns">
              <a
                className="button receipt__button"
                target="_blank"
                href={`https://maps.google.com/?q=${spot.location}`}
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <Slider spots={relatedSpots} category={category} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const spotID = query.params[1];

  const res = await fetch(`${server}/api/spots/category/${spotID}`);
  const data = await res.json();

  return {
    props: {
      spot: data.data,
      relatedSpots: data.related,
      category: data.data.category,
    },
  };
}

export default SingleSpot;
