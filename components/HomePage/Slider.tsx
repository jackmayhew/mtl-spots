import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function HomeSlider({ spots }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiperIndexMax, setSwiperIndexMax] = useState(0);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);


  return (
    <div className="section browse">
      <div className="browse__center center">
        <div className="browse__inner">
          <div className="browse__head">
            <h2 className="browse__title h2">Recently Added</h2>
            <div className="browse__info info">
              <h3>Browse Recent Spots</h3>

              <div className="slider_nav desktop__arrows">
                <div
                  onClick={() => {
                    navigationNextRef.current.className = "slider_arrow";
                  }}
                  ref={navigationPrevRef}
                  className={
                    swiperIndex === 0
                      ? "slider_arrow hover_disabled"
                      : "slider_arrow"
                  }
                >
                  <BsArrowLeft />
                </div>
                <div
                  ref={navigationNextRef}
                  // className={
                  //   swiperIndex === swiperIndexMax - what
                  //   // swiperIndex === swiperIndexMax - amount being shown
                  //     ? "slider_arrow hover_disabled"
                  //     : "slider_arrow"
                  // }
                  className="slider_arrow"
                  //  onClick={() => setSwiperIndexMax(swiperRef.slides.length)}
                  // onClick={() => console.log(swiperIndexMax - swiperIndex)}
                >
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="browse__wrapper">
            <Swiper
              onReachEnd={() => {
                navigationNextRef.current.className =
                  "slider_arrow hover_disabled";
              }}
              onSwiper={setSwiperRef}
              onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
              speed={500}
              slidesPerView={4}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              modules={[Navigation]}
              className="mySwiper swiper_container browse__slider"
              breakpoints={{
                240: {
                  slidesPerView: 1.2,
                },
                474: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              

              {spots.map((spot) => (
                  <SwiperSlide key={spot._id}>
                    <Link href={`/spots/${spot.category}/${spot._id}`}>
                    <a className="card">
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
                          <div className="card__option">{spot.location}</div>
                          <div className="card__option">Breakfast included</div>
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
                  </SwiperSlide>
                ))}

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
