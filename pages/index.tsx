import HomeSlider from "../components/HomePage/Slider";
import { FiSearch, FiMap, FiShare } from "react-icons/fi";
import Link from "next/link";
import { server } from "../utils/domain";
import useMediaQuery from "../utils/width";

function Home({ spots }) {
  const isBreakpoint = useMediaQuery(768);

  return (
    <div className="outer__inner">

      <div className="section-mb80 main main_stays-category">
        <div className="main__center center">
          <div className="main__preview">
            <video
              src={isBreakpoint ? "mobile.mp4" : "desktop.mp4"}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="panel panel_stays-category">
            <div className="panel__background"></div>

            {/* hero ctas */}
            <div className="panel__body">
              <div className="panel__row">
                <Link href="/spots">
                  <a className="button">
                    <h3>Find</h3>
                    <div className="location__icon">
                      <FiSearch />
                    </div>
                  </a>
                </Link>

                <Link href="/upload">
                  <a className="button">
                    <h3>Share</h3>
                    <div className="location__icon">
                      <FiShare />
                    </div>
                  </a>
                </Link>

                <Link href="/map">
                  <a className="button map__cta">
                    <h3>Map</h3>
                    <div className="location__icon">
                      <FiMap />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeSlider spots={spots} />

      <div className="section work">
        <div className="work__center center">
          <div className="work__head">
            <h2 className="work__title h2">How it works</h2>
            <div className="work__info info">Keep calm &amp; travel on</div>
          </div>
          <div className="work__body">
            <div className="work__line"></div>
            <div className="work__list">
              <div className="work__item">
                <div className="work__preview">
                  <img
                    className="some-icon"
                    src="https://ui8-fleet-html.herokuapp.com/img/content/work-pic-1@2x.png"
                    alt="Work"
                  />
                </div>
                <div className="work__subtitle">Share</div>
                <div className="work__content">
                  We realize ideas from simple to complex, everything becomes
                  easy to use.
                </div>
              </div>
              <div className="work__item">
                <div className="work__preview">
                  <img
                    className="some-icon"
                    src="https://ui8-fleet-html.herokuapp.com/img/content/work-pic-2@2x.png"
                    alt="Work"
                  />
                </div>
                <div className="work__subtitle">Find</div>
                <div className="work__content">
                  We realize ideas from simple to complex, everything becomes
                  easy to use.
                </div>
              </div>
              <div className="work__item">
                <div className="work__preview">
                  <img
                    className="some-icon"
                    src="https://ui8-fleet-html.herokuapp.com/img/content/work-pic-3@2x.png"
                    alt="Work"
                  />
                </div>
                <div className="work__subtitle">Skate</div>
                <div className="work__content">
                  We realize ideas from simple to complex, everything becomes
                  easy to use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-pd section-mb0">
        <div className="testimonials__center center js-tabs">
          <div className="testimonials__container">
            <div className="testimonials__item js-tabs-item">
              <div className="testimonials__row">
                <div className="testimonials__col">
                  <div className="description__wrap">
                    <h1 className="description__title h1">
                      Ready to Get Started?
                    </h1>
                    <div className="description__text">
                      Start finding and sharing skate spots today
                    </div>
                    <div className="description__btns">
                      <Link href="/upload">
                        <a className="button description__button cta__button">
                          Find Spots
                        </a>
                      </Link>
                      <Link href="/spots">
                        <a className="button-stroke description__button cta__button">
                          Share Spots
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="testimonials__col">
                  {/* <div className="testimonials__preview"><img src="https://cdn.dribbble.com/users/1358460/screenshots/14122916/media/3ef2a6f2eef409eb2b7e9e3fcef8928f.jpg?compress=1&resize=1600x1200&vertical=top" alt="Testimonials" /> */}
                  <div className="testimonials__preview">
                    <img
                      src="https://i.pinimg.com/originals/c3/9c/7a/c39c7a00816a2bb0ca6f33b4fe69fc99.gif"
                      alt="Testimonials"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/home`);
  const data = await res.json();
  return {
    props: {
      spots: data.data,
    },
  };
}

export default Home;
