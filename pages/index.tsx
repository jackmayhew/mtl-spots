import HomeSlider from "../components/Sliders/Slider";
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
              className="hero__vid"
              ></video>
          </div>
          <div className="panel panel_stays-category">
            <div className="panel__background"></div>

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

                <Link href="/share">
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

      <HomeSlider spots={spots} category="" />

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
                    <h1 className="description__title h2">
                      Ready to Get Started?
                    </h1>
                    <div className="description__text">
                      Start finding and sharing skate spots today
                    </div>
                    <div className="description__btns">
                      <Link href="/spots">
                        <a className="button-stroke description__button cta__button">
                          Find Spots
                        </a>
                      </Link>
                      <Link href="/share">
                        <a className="button-stroke description__button cta__button">
                          Share Spots
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="testimonials__col">
                  <div className="testimonials__preview">
                    <img
                      src="https://robert.accettura.com/wp-content/uploads/2007/10/20071014_chimp_skateboard.jpg"
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
