import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Card from "../../components/Cards/Card";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useMediaQuery from "../../utils/width";

function HomeSlider({ spots, category }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const [swiperIndex, setSwiperIndex] = useState(0);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const isBreakpoint = useMediaQuery(1024);
  const isBreakpoint2 = useMediaQuery(767);
  const isBreakpoint3 = useMediaQuery(474);

  return (
    <div className="section browse">
      {spots.length === 1 ? (
        <div className="browse__center center">
          <div className="browse__inner">
            <div className="browse__head">
              <h2 className="browse__title h2">
                Other {capitalizeFirstLetter(category)}
              </h2>

              <div className="browse__info info no__select">
                <div className="no__select">
                  Browse Other {capitalizeFirstLetter(category)}
                </div>

                <div className="slider_nav desktop__arrows hide__arrows">
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
                  <div ref={navigationNextRef} className="slider_arrow">
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
                shortSwipes={false}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                modules={[Navigation]}
                className="mySwiper swiper_container browse__slider"
                breakpoints={{
                  240: {
                    slidesPerView: 1,
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
                    <Card spot={spot} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <div className="browse__center center">
          <div className="browse__inner">
            <div className="browse__head">
              {category ? (
                <h2 className="browse__title h2">
                  Other {capitalizeFirstLetter(category)}
                </h2>
              ) : (
                <h2 className="browse__title h2 no__select">Recently Added</h2>
              )}

              <div className="browse__info info no__select">
                {category ? (
                  <div className="no__select">
                    Browse Other {capitalizeFirstLetter(category)}
                  </div>
                ) : (
                  <div className="no__select">Browse Recent Spots</div>
                )}

                <div
                  className={
                    spots.length > 4 ||
                    (spots.length > 3 && isBreakpoint) ||
                    (spots.length > 2 && isBreakpoint2) ||
                    (spots.length > 1 && isBreakpoint3)
                      ?
                        "slider_nav desktop__arrows"
                      : "slider_nav desktop__arrows hide__arrows"
                  }
                >
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
                  <div ref={navigationNextRef} className="slider_arrow">
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
                    <Card spot={spot} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeSlider;
