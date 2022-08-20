import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { server } from "../../utils/domain";
import {
  FiSearch,
  FiNavigation,
  FiMapPin,
  FiShare,
  FiSend,
  FiHeart,
  FiBookmark,
  FiMap,
  FiGrid,
  FiStar,
  FiUpload,
} from "react-icons/fi";

function SingleSpot({ spot }) {
  return (
    <div className="outer__inner">
      <div className="section-mb64 product">
        <div className="product__center center">
          <div className="control">
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="index.html">
                  Home
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="index.html">
                  Stays
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="stays-category.html">
                  New Zealand
                </a>
              </li>
              <li className="breadcrumbs__item">South Island</li>
            </ul>
          </div>

          <div className="product__head">
            <div className="product__box">
              <h2 className="product__title h2">{spot.title}</h2>
              <div className="product__line">
                <div className="product__rating">
                  <FiStar color="#FFD266" />
                  <div className="product__number">4.8</div>
                  <div className="product__reviews">(256 reviews)</div>
                </div>
                <div className="product__options">
                  {/* <div className="product__option">
                    <FiSearch size={22} />
                    Superhost
                  </div> */}
                  <div className="product__option">
                    <FiMapPin size={22} />
                    Rosemont
                  </div>
                </div>
              </div>
            </div>

            <div className="actions js-actions">
              <div className="actions__list">
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

                <div className="actions__item actions__item_share js-actions-item">
                  <button className="button-circle-stroke button-small actions__button js-actions-button">
                    <FiShare size={22} className="icon" />
                  </button>

                  <div className="actions__body js-actions-body">
                    <div className="actions__title">
                      Share link to this page
                    </div>
                    <div
                      className="actions__list share-btn"
                      data-url="https://ui8.net"
                    >
                      <a className="actions__link btn-twitter" data-id="tw">
                        <span>
                          <FiSearch size={22} />
                        </span>
                      </a>
                      <a className="actions__link btn-facebook" data-id="fb">
                        <span>
                          <FiSearch size={22} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="actions__item">
                  <button className="button-circle-stroke button-small actions__favorite js-actions-favorite">
                    <FiBookmark size={22} className="icon" />
                  </button>
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
            {/* <div className="description__profile">
              <div className="description__name">Located In: Rosement</div>
            </div> */}
            <div className="description__parameters">
              <div className="description__parameter">
                <FiSearch size={22} className="icon" />
                Category
              </div>
              <div className="description__parameter">
                <FiSearch size={22} className="icon" />
                Location
              </div>
              <div className="description__parameter">
                <FiSearch size={22} className="icon" />1 private bath
              </div>
            </div>
            <div className="description__content">
              <p>
                Described by Queenstown House &amp; Garden magazine as having
                'one of the best views we've ever seen' you will love relaxing
                in this newly built, architectural house sitting proudly on
                Queenstown Hill.
              </p>
              <p>
                Enjoy breathtaking 180' views of Lake Wakatipu from your well
                appointed &amp; privately accessed bedroom with modern en suite
                and floor-to-ceiling windows.
              </p>
              <p>
                Your private patio takes in the afternoon sun, letting you soak
                up unparalleled lake and mountain views by day and the stars
                &amp; city lights by night.
              </p>
            </div>
            {/* <div className="description__info">Amenities</div> */}
            {/* <div className="description__options">
              <div className="description__option">
                <FiSearch size={22} />
                Free wifi 24/7
              </div>
              <div className="description__option">
                <FiSearch size={22} />
                Free clean bathroom
              </div>
              <div className="description__option">
                <FiSearch size={22} />
                Free computer
              </div>
              <div className="description__option">
                <FiSearch size={22} />
                Breakfast included
              </div>
              <div className="description__option">
                <FiSearch size={22} />
                Free wifi 24/7
              </div>
              <div className="description__option">
                <FiSearch size={22} />
                ATM
              </div>
              <div className="description__option">
                <FiSearch size={22} />
                Free wifi 24/7
              </div>
              <div className="description__option">
                <FiSearch size={22} />
                Nearby city
              </div>
            </div> */}
            {/* <div className="description__full">
              <div className="description__content description__content_hide">
                <p>
                  Described by Queenstown House &amp; Garden magazine as having
                  'one of the best views we've ever seen' you will love relaxing
                  in this newly built, architectural house sitting proudly on
                  Queenstown Hill.
                </p>
                <p>
                  Enjoy breathtaking 180' views of Lake Wakatipu from your well
                  appointed &amp; privately accessed bedroom with modern en
                  suite and floor-to-ceiling windows.
                </p>
              </div>
              <button className="button-stroke button-small description__button">
                More detail
              </button>
            </div> */}
          </div>
          <div className="receipt">
            <div className="receipt__head">
              <div className="receipt__details">
                <div className="receipt__cost">
                  {/* <div className="receipt__old">$119</div> */}
                  <div className="receipt__actual">Add More Photos</div>
                  {/* <div className="receipt__note">/night</div> */}
                </div>
                {/* <div className="receipt__rating">
                  <FiSearch size={22} />
                  <div className="receipt__number">4.8</div>
                  <div className="receipt__reviews">(256 reviews)</div>
                </div> */}
              </div>
              {/* <div className="receipt__avatar">
                <img src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg" alt="Avatar" />
                <div className="receipt__check">
                  <FiSearch size={22} />
                </div>
              </div> */}
            </div>
            {/* <div className="receipt__description receipt__description_flex">
              <div className="receipt__item">
                <div className="receipt__icon">
                  <FiSearch size={22} />
                </div>
                <div className="receipt__box">
                  <div className="receipt__category">Check-in</div>
                  <div className="receipt__subtitle">May 15, 2021</div>
                </div>
              </div>
              <div className="receipt__item">
                <div className="receipt__icon">
                  <FiSearch size={22} />
                </div>
                <div className="receipt__box">
                  <div className="receipt__category">Check-out</div>
                  <div className="receipt__subtitle">May 22, 2021</div>
                </div>
              </div>
              <div className="receipt__item">
                <div className="receipt__icon">
                  <FiSearch size={22} />
                </div>
                <div className="receipt__box">
                  <div className="receipt__category">Guest</div>
                  <div className="receipt__subtitle">2 guests</div>
                </div>
              </div>
            </div> */}
            <div className="upload__item">
              {/* <div className="upload__category">Upload photos</div> */}
              <div className="upload__note">
                Drag or choose your file to upload
              </div>
              <div className="upload__file">
                <input className="upload__input" type="file" />
                <div className="upload__icon">
                  <FiUpload />
                </div>
                <div className="upload__format">
                  PNG, GIF, WEBP, MP4. Max 500Mb.
                </div>
              </div>
            </div>
            <div className="receipt__btns">
              <button className="button-stroke receipt__button">
                <span>Save</span>
                <span>
                  <FiSearch size={22} />
                  <FiSearch size={22} />
                </span>
              </button>
              <a className="button receipt__button" href="stays-checkout.html">
                <span>Reserve</span>
                <FiSearch size={22} />
              </a>
            </div>
            <div className="receipt__table">
              <div className="receipt__line">
                <div className="receipt__cell">$119 x 7 nights</div>
                <div className="receipt__cell">$833</div>
              </div>
              <div className="receipt__line">
                <div className="receipt__cell">10% campaign discount</div>
                <div className="receipt__cell">-$125</div>
              </div>
              <div className="receipt__line">
                <div className="receipt__cell">Service fee</div>
                <div className="receipt__cell">$103</div>
              </div>
              <div className="receipt__line">
                <div className="receipt__cell">Total</div>
                <div className="receipt__cell">$833</div>
              </div>
            </div>
            <div className="receipt__foot">
              <button className="receipt__report">
                <FiSearch size={22} />
                Report this property
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section comments">
        <div className="comments__center center">
          <div className="profile">
            <div className="profile__head">
              <div className="profile__line">
                <div className="profile__avatar">
                  <img
                    src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg"
                    alt="Avatar"
                  />
                  <div className="profile__check">
                    <FiSearch size={22} />
                  </div>
                </div>
                <div className="profile__details">
                  <div className="profile__man">Zoe towne</div>
                  <div className="profile__rating">
                    <FiSearch size={22} />
                    <div className="profile__number">4.8</div>
                    <div className="profile__reviews">(256 reviews)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__body">
              <div className="profile__parameters">
                <div className="profile__parameter">
                  <FiSearch size={22} />
                  Superhost
                </div>
                <div className="profile__parameter">
                  <FiSearch size={22} />
                  256 reviews
                </div>
              </div>
              <div className="profile__info">
                Described by Queenstown House &amp; Garden magazine as having
                'one of the best views we've ever seen' you will love relaxing
                in this newly built
              </div>
              <a
                className="profile__site"
                href="https://ui8.net"
                target="_blank"
              >
                <FiSearch size={22} />
                https://ui8.net
              </a>
              <div className="profile__control">
                <a
                  className="button-stroke button-small profile__button"
                  href="message-center.html"
                >
                  Contact
                </a>
                <div className="actions js-actions">
                  <div className="actions__item actions__item_share js-actions-item">
                    <button className="button-circle-stroke button-small actions__button js-actions-button">
                      <FiSearch size={22} />
                    </button>
                    <div className="actions__body actions__body_up js-actions-body">
                      <div className="actions__title">
                        Share link to this page
                      </div>
                      <div
                        className="actions__list share-btn"
                        data-url="https://ui8.net"
                      >
                        <a className="actions__link btn-twitter" data-id="tw">
                          <span>
                            <FiSearch size={22} />
                          </span>
                        </a>
                        <a className="actions__link btn-facebook" data-id="fb">
                          <span>
                            <FiSearch size={22} />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__socials">
                <a
                  className="profile__social"
                  href="https://twitter.com/ui8"
                  target="_blank"
                >
                  <FiSearch size={22} />
                </a>
                <a
                  className="profile__social"
                  href="https://www.instagram.com/ui8net/"
                  target="_blank"
                >
                  <FiSearch size={22} />
                </a>
                <a
                  className="profile__social"
                  href="https://www.facebook.com/ui8.net/"
                  target="_blank"
                >
                  <FiSearch size={22} />
                </a>
              </div>
              <div className="profile__note">Member since Mar 15, 2021</div>
              <button className="profile__report">
                <FiSearch size={22} />
                Report this property
              </button>
            </div>
          </div>
          <div className="comment">
            <form className="comment__form">
              <div className="comment__title">Add a review</div>
              <div className="comment__head">
                <div className="comment__text">
                  Be the first to review{" "}
                  <span>Spectacular views of Queenstown</span>
                </div>
                {/* <div className="rating js-rating jq-ry-container" data-rating="4" data-read="false"><div className="jq-ry-group-wrapper"><div className="jq-ry-normal-group jq-ry-group"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div><div className="jq-ry-rated-group jq-ry-group" style="width: 79.2793%;"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div></div></div> */}
              </div>
              <div className="comment__field">
                <input
                  className="comment__input"
                  type="text"
                  name="comment"
                  placeholder="Share your thoughts"
                />
                <div className="smile js-smile">
                  <button
                    className="smile__button js-smile-button"
                    type="button"
                  >
                    <FiSearch size={22} />
                    <FiSearch size={22} />
                  </button>
                  <div className="smile__body js-smile-body">
                    <div className="smile__item">❤️</div>
                    <div className="smile__item">🙌</div>
                    <div className="smile__item">👍</div>
                    <div className="smile__item">😊</div>
                    <div className="smile__item">🤣</div>
                    <div className="smile__item">😡</div>
                  </div>
                </div>
                <button className="button-small comment__button">
                  <span>Post it!</span>
                  <FiSearch size={22} />
                </button>
              </div>
            </form>
            <div className="comment__head">
              <div className="comment__title">3 comments</div>
              <select className="select">
                <option>Newest</option>
                <option>Popular</option>
                <option>All</option>
              </select>
              <div className="nice-select select">
                <span className="current">Newest</span>
                <ul className="list">
                  <li data-value="Newest" className="option selected">
                    Newest
                  </li>
                  <li data-value="Popular" className="option">
                    Popular
                  </li>
                  <li data-value="All" className="option">
                    All
                  </li>
                </ul>
              </div>
            </div>
            <div className="comment__list">
              <div className="comment__item">
                <div className="comment__avatar">
                  <img
                    src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className="comment__details">
                  <div className="comment__top">
                    <div className="comment__author">Myrtie Runolfsson</div>
                    {/* <div className="rating js-rating jq-ry-container" data-rating="5" data-read="true" readonly="readonly" style="width: 111px;"><div className="jq-ry-group-wrapper"><div className="jq-ry-normal-group jq-ry-group"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div><div className="jq-ry-rated-group jq-ry-group" style="width: 100%;"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div></div></div> */}
                  </div>
                  <div className="comment__content">
                    We had the most spectacular view. Unfortunately it was very
                    hot in the room from 2-830 pm due to no air conditioning and
                    no shade.
                  </div>
                  <div className="comment__foot">
                    <div className="comment__time">about 1 hour ago</div>
                    <div className="comment__actions">
                      <button className="comment__action">Like</button>
                      <button className="comment__action">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment__item">
                <div className="comment__avatar">
                  <img
                    src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className="comment__details">
                  <div className="comment__top">
                    <div className="comment__author">Osbaldo Beahan</div>
                    {/* <div className="rating js-rating jq-ry-container" data-rating="5" data-read="true" readonly="readonly"><div className="jq-ry-group-wrapper"><div className="jq-ry-normal-group jq-ry-group"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div><div className="jq-ry-rated-group jq-ry-group" style="width: 100%;"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div></div></div> */}
                  </div>
                  <div className="comment__content">
                    Stunning views of Queenstown. Very peaceful. Love it so
                    much. Definitely gonna come back and visit.
                  </div>
                  <div className="comment__foot">
                    <div className="comment__time">about 5 hour ago</div>
                    <div className="comment__actions">
                      <button className="comment__action">Like</button>
                      <button className="comment__action">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment__item">
                <div className="comment__avatar">
                  <img
                    src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className="comment__details">
                  <div className="comment__top">
                    <div className="comment__author">Tobin Hackett</div>
                    {/* <div className="rating js-rating jq-ry-container" data-rating="5" data-read="true" readonly="readonly"><div className="jq-ry-group-wrapper"><div className="jq-ry-normal-group jq-ry-group"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#B1B5C3" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div><div className="jq-ry-rated-group jq-ry-group" style="width: 100%;"><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg><svg width="19px" height="19px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD166" style="margin-left: 4px;"><path d="M6.49075 5.87586L9.19442 0.468508C9.29094 0.275471 9.56642 0.275471 9.66293 0.468508L12.3666 5.87586C12.4054 5.95351 12.4802 6.00687 12.5663 6.01834L18.3319 6.7871C18.547 6.81577 18.6359 7.07849 18.4825 7.2319L14.2421 11.4723C14.1802 11.5342 14.1533 11.623 14.1705 11.7089L15.3237 17.4749C15.3664 17.6886 15.1446 17.858 14.9497 17.7605L9.54581 15.0586C9.47207 15.0217 9.38529 15.0217 9.31155 15.0586L3.90765 17.7605C3.71271 17.858 3.49096 17.6886 3.5337 17.4749L4.6869 11.7089C4.70408 11.623 4.6772 11.5342 4.61528 11.4723L0.374865 7.2319C0.221458 7.07849 0.310398 6.81577 0.525446 6.7871L6.29111 6.01834C6.37715 6.00687 6.45193 5.95351 6.49075 5.87586Z" fill-opacity="1"></path></svg></div></div></div> */}
                  </div>
                  <div className="comment__content">
                    Best place I stayed in all of NZ. 🙌 🎉 😎
                  </div>
                  <div className="comment__foot">
                    <div className="comment__time">1 day ago</div>
                    <div className="comment__actions">
                      <button className="comment__action">Like</button>
                      <button className="comment__action">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment__btns">
              <button className="button-stroke button-small comment__button">
                <div className="loader"></div>
                <span>Loading comment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section browse">
        <div className="browse__center center">
          <div className="browse__inner">
            <div className="browse__head">
              <h2 className="browse__title h2">Browse by property type</h2>
              <div className="browse__info info">Let’s go on an adventure</div>
            </div>
          </div>
        </div>
      </div>
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
    },
  };
}

export default SingleSpot;
