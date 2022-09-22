import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { server } from "../../utils/domain";
import { FiShare, FiBookmark, FiMap, FiClock, FiCopy } from "react-icons/fi";
import Slider from "../../components/Sliders/RelatedSlider";
import moment from "moment";
import Map from "../../components/Maps/SpotMap";
import { useState, useEffect, useRef } from "react";
import listenForOutsideClick from "../../utils/Listen";
import useCopyToClipboard from "../../utils/copy";
import Head from "next/head";
import { useRouter } from "next/router";

function SingleSpot({ spot, relatedSpots, category, comments }) {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const router = useRouter();


  const url = `mtlspots.ca/spots/${spot.category}/${spot._id}`;

  const refStyle = useRef(null);

  const [value, copy] = useCopyToClipboard();

  const [savedSpot, setSavedSpot] = useState("");

  // get savedSpot string from localStorage
  useEffect(() => {
    const item = localStorage.getItem("savedList");
    setSavedSpot(item);
  }, []);

  // save/unsave spot on click
  const saveSpot = (e) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("savedList");
      // unsave spot
      if (saved && saved.includes(spot._id)) {
        refStyle.current.classList.remove("actives");
        let removeSpot = localStorage
          .getItem("savedList")
          .replace(spot._id + ",", "");
        localStorage.setItem("savedList", removeSpot);
        setSavedSpot(removeSpot);
        return;
      } else {
        // save spot
        refStyle.current.classList.add("actives");
        saved
          ? localStorage.setItem("savedList", saved + spot._id + ",")
          : localStorage.setItem("savedList", spot._id + ",");
        setSavedSpot(localStorage.getItem("savedList"));
      }
    }
  };


  // use state for array, clear and reset on url change below
  // const [mapSpots, setMapSpots] = useState([]);

  // form
  const [form, setForm] = useState({
    comment: "",
    spot: spot._id
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createSpot = async () => {
    try {
      const res = await fetch(`${server}/api/spots/comments`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form }),
      });

      // re-render comment list here - use state ? prolly
      // const newComments = await fetch(`${server}/api/spots/comments?spot=${spot._id}`);
      // const data = await newComments.json();
      // comments = data.comment

    } catch (error) {
      console.log(error);
    }
  };

  const sumbitForm = async (e) => {
    e.preventDefault()
    if(!form.comment){
        setError("please enter your comment")
    } else {
      setError("");
      setForm({
        ...form,
        comment: ""
      });
      createSpot();

    }
    
  }

  const [count, setCount] = useState(3);

  // reset count on url change - 
  // used for 'show more' comments
  useEffect(() => {
    router.events.on('routeChangeStart',  () => {
      setCount(3)
    })
  }, [])

  return (
    <div className="outer__inner">
      <Head>
        <title>mtlspots - {spot.title.toLowerCase()} </title>
        <link rel="apple-touch-icon" href={spot.image} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={spot.image} />
        <meta property="og:image:url" content={spot.image} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
      </Head>
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
                    {spot.category === "Skate Parks" ? "parks" : spot.category}
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
                    {moment(Date.parse(spot.time)).fromNow()}
                  </div>
                </div>
                {/* <div className="product__options">
                  <div className="product__option location__icon">
                    <FiClock size={22} />
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

                  {/* <div className="actions__body js-actions-body saved__msg">
                    <div className="actions__title saved__title">
                      This spot has been saved
                    </div>
                  </div> */}
                </div>

                <div className="actions__item actions__item_map js-actions-item">
                  <Link
                    className="button-circle-stroke button-small actions__button js-actions-button"
                    href={`/map?spot=${spot._id}`}
                  >
                    <button className="button-circle-stroke button-small actions__button js-actions-button">
                      <FiMap size={22} className="icon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery">
            <div className="gallery__list gallery__list_stays">
              <div className="gallery__preview">
                <img src={spot.image} alt="Gallery" className="gallery__img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section description">
        <div className="description__center center">
          <div className="description__wrapper">
            <h4 className="description__title h4 spot__title">{spot.title}</h4>
            <div className="description__profile">
              <div className="description__name">Category: {spot.category}</div>
            </div>
            <div className="description__profile">
              <div className="description__name">Bust Level: {spot.bust}</div>
            </div>
            {spot.ig && (
              <div className="description__profile">
                <div className="description__name">
                  Shared By: @
                  <a
                    href={`https://www.instagram.com/${spot.ig}/`}
                    target="_blank"
                    rel="noopener"
                  >
                    {spot.ig.includes("@") ? spot.ig.replace("@", "") : spot.ig}
                  </a>
                </div>
              </div>
            )}
            <div className="description__parameters"></div>

            {spot.description ? (
              <div className="description__content">
                <p>
                  <span className="weight">description:</span>{" "}
                  {spot.description}
                </p>
              </div>
            ) : (
              <div className="description__content weight">
                <p>No description available...</p>
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
                find spot location on google maps
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

      <div className="section comments">
        <div className="comments__center center">
          <div className="comment">
            <form className="comment__form" onSubmit={sumbitForm}>
              <div className="comment__title">Comments</div>
              <div className="comment__head">
                <div className="comment__text">
                  Share Additional Infromation
                </div>
              </div>
              <div className="comment__field">
                <input
                  className="comment__input"
                  type="text"
                  name="comment"
                  placeholder="Share your thoughts..."
                  onChange={handleChange}
                  value={form.comment}
                />
                <button className="button-small comment__button" type="submit">
                  <span>Post it!</span>
                </button>
              </div>
              <div className="error">{error}</div>
            </form>
            <div className="comment__head">
              <div className="comment__title">{comments.length} {comments.length !== 1 ? "comments" : "comment"}</div>
            </div>
            <div className="comment__list">
              {comments.slice(0, count).map((comment) => (
              <div className="comment__item" key={comment._id}>
                <div className="comment__avatar">
                  <img src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg" alt="Avatar" />
                </div>
                <div className="comment__details">
                  <div className="comment__content">
                  {comment.comment}
                  </div>
                  <div className="comment__foot">
                    <div className="comment__time">{moment(Date.parse(comment.time)).fromNow()}</div>
                  </div>
                </div>
              </div>
              ))}
            </div>

            {comments.length > 0 &&
              <div className="comment__btns">
                <button className="button-stroke button-small comment__button" onClick={() => setCount(count + 6)}>
                  <span>show more</span>
                </button>
              </div>
            }

          </div>
        </div>
      </div>

      {relatedSpots.length >= 1 && (
        <Slider spots={relatedSpots} category={category} />
      )}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const spotID = query.params[1];

  const res = await fetch(`${server}/api/spots/category/${spotID}`);
  const data = await res.json();

  // const res2 = await fetch(`${server}/api/spots/comments?spot=${spotID}`);
  // const data2 = await res2.json();

  return {
    props: {
      spot: data.data,
      relatedSpots: data.related,
      category: data.data.category,
      // comments: data2.comment
      comments: data.comments
    },
  };
}

export default SingleSpot;
