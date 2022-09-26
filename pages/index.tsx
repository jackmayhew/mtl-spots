import HomeSlider from "../components/Sliders/Slider";
import { FiSearch, FiMap, FiShare } from "react-icons/fi";
import Link from "next/link";
import { server } from "../utils/domain";
import useMediaQuery from "../utils/width";
Home.title = "home";
import Head from "next/head";

function Home({ spots }) {
  
  const isBreakpoint = useMediaQuery(767);
  
  return (
    <div className="outer__inner">
      {/* apparently this is ok. taken from next docs */}
      <Head>
        <meta property="og:image" content="https://i.ibb.co/Jy9srLm/n590yq77mplvhduf6fpz937taf3mc6rz.jpg" />
        <meta property="og:image:url" content="https://i.ibb.co/Jy9srLm/n590yq77mplvhduf6fpz937taf3mc6rz.jpg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:image" content="https://i.ibb.co/Jy9srLm/n590yq77mplvhduf6fpz937taf3mc6rz.jpg" />
      </Head>
      <div id="p2" className="section-mb80 main main_stays-category">
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

      <HomeSlider spots={spots} />

      <div className="section work">
        <div className="work__center center">
          <div className="work__head">
            <h2 className="work__title h2">How it works</h2>
            <div className="work__info info">share, find &amp; skate</div>
          </div>
          <div className="work__body">
            <div className="work__line"></div>
            <div className="work__list">
              <div className="work__item">
                <div className="work__preview">
                  <img
                    className="some-icon"
                    src="spot1.jpeg"
                    alt="Work"
                  />
                </div>
                <div className="work__subtitle">Share</div>
                <div className="work__content">
                    share spot details with other skaters in montreal
                </div>
              </div>
              <div className="work__item">
                <div className="work__preview">
                  <img
                    className="some-icon"
                    src="spot2.jpeg"
                    alt="Work"
                  />
                </div>
                <div className="work__subtitle">Find</div>
                <div className="work__content">
                  browse, search or use the map page to find spots
                </div>
              </div>
              <div className="work__item">
                <div className="work__preview">
                  <img
                    className="some-icon"
                    src="spot3.jpeg"
                    alt="Work"
                  />
                </div>
                <div className="work__subtitle">Skate</div>
                <div className="work__content">
                    get out there and skate! and remember to respect the spots
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
                      ready to start?
                    </h1>
                    <div className="description__text">
                      <div className="work__info info">Start finding &amp; sharing skate spots</div>
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
                      src="spot4.jpg"
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
