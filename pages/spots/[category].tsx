import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Pagination from "../../components/Pagination";
import {server} from '../../utils/domain'

function Category({ spots, count, page }) {
  const router = useRouter();
  const spotCategory = router.query.category;

  return (
    //   <div>
    //     {spots.map((spot) => (
    //       <div className="spot" key={spot._id}>
    //         <Link href={`/spots/${spot.category}/${spot._id}`}>
    //           <a>{spot.title}s</a>
    //         </Link>
    //       </div>
    //     ))}
    //   <Pagination count={count} page={page} spotCategory={spotCategory} />
    // </div>
    <div className="outer__inner">
        <div className="section-mb80 main main_cars-category">
          <div className="main__bg"><img src="https://ui8-fleet-html.herokuapp.com/img/content/bg-flight-1.jpg" alt="Main" />
          </div>
          <div className="main__center center">
            <div className="panel panel_cars-category">
              <div className="panel__background"></div>
              <div className="panel__controls">
                <button className="button-stroke button-small panel__button active">Return to same location</button>
                <button className="button-stroke button-small panel__button">Return to same different location</button>
              </div>
              <div className="panel__body">
                <div className="panel__row">
                  <div className="location js-location location_small location_down">
                    <div className="location__head js-location-head">
                      <div className="location__icon">
                        {/* <svg className="icon icon-marker">
                          <use xlink:href="#icon-marker"></use>
                        </svg> */}
                      </div>
                      <input className="location__input js-location-input" type="text" name="location" placeholder="Pickup location" pwa2-uuid="EDITOR/input-E4D-B9A-961D4-632" pwa-fake-editor="" />
                      <button className="location__clear js-location-clear">
                        {/* <svg className="icon icon-close-circle">
                          <use xlink:href="#icon-close-circle"></use>
                        </svg> */}
                      </button>
                    </div>
                    <div className="location__body js-location-body">
                      <div className="location__list"><a className="location__item js-location-item" href="#">New York, NY</a><a className="location__item js-location-item" href="#">New York, Manhattan</a><a className="location__item js-location-item" href="#">New Zealand</a><a className="location__item js-location-item" href="#">New Smyrna Beach, FL</a><a className="location__item js-location-item" href="#">Newark, NJ</a></div>
                    </div>
                  </div>
                  <div className="datepicker js-date-range datepicker_small datepicker_down" data-format="ddd, MMM DD" data-container=".datepicker">
                    <div className="datepicker__list">
                      <div className="datepicker__item">
                        <input className="datepicker__input js-date-from" type="text" placeholder="Check in" />
                        <div className="datepicker__icon">
                          {/* <svg className="icon icon-calendar">
                            <use xlink:href="#icon-calendar"></use>
                          </svg> */}
                        </div>
                      </div>
                      <div className="datepicker__item">
                        <input className="datepicker__input js-date-to" type="text" placeholder="Check out" />
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
              <div className="control"><a className="button-stroke button-small control__button" href="cars.html">
                  {/* <svg className="icon icon-arrow-left">
                    <use xlink:href="#icon-arrow-left"></use>
                  </svg> */}
                  <span>Go home</span></a>
                <ul className="breadcrumbs">
                  <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="index.html">Home</a></li>
                  <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="index.html">Stays</a></li>
                  <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="stays-category.html">New Zealand</a></li>
                  <li className="breadcrumbs__item">South Island</li>
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
                  <button className="button-stroke sorting__button js-sorting-button"><span>Show map</span>
                    {/* <svg className="icon icon-arrow-bottom">
                      <use xlink:href="#icon-arrow-bottom"></use>
                    </svg> */}
                  </button>
                  <div className="sorting__map js-sorting-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63817.0803287881!2d168.63234961382247!3d-45.04173987887954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2z0JrRg9C40L3RgdGC0LDRg9C9LCDQndC-0LLQsNGPINCX0LXQu9Cw0L3QtNC40Y8!5e0!3m2!1sru!2sua!4v1624887132616!5m2!1sru!2sua" width="600" height="450" loading="lazy"></iframe>
                  </div>
                </div>
              </div>
              <div className="sorting__foot">
                <div className="nav"><a className="nav__link active" href="#">Sightseeing</a><a className="nav__link" href="#">Transportation activities</a><a className="nav__link" href="#">Art and culture</a></div>
                <div className="sorting__select tablet-show">
                  <select className="select">
                    <option>Sightseeing</option>
                    <option>Transportation activities</option>
                    <option>Art and culture</option>
                  </select><div className="nice-select select" ><span className="current">Sightseeing</span><ul className="list"><li data-value="Sightseeing" className="option selected">Sightseeing</li><li data-value="Transportation activities" className="option">Transportation activities</li><li data-value="Art and culture" className="option">Art and culture</li></ul></div>
                </div>
                <div className="sorting__select">
                  <select className="select">
                    <option>Time of day</option>
                    <option>Time of week</option>
                  </select><div className="nice-select select" ><span className="current">Time of day</span><ul className="list"><li data-value="Time of day" className="option selected">Time of day</li><li data-value="Time of week" className="option">Time of week</li></ul></div>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog__body">
            <div className="catalog__center center">
              <div className="catalog__cards">
                <a className="card card_row" href="cars-product.html">
                  <div className="card__preview"><img src="img/content/cars-pic-1.jpg" alt="London - Kings Cross" />
                    <div className="category card__category">popular</div>
                  </div>
                  <div className="card__body">
                    <div className="card__line">
                      <div className="card__title">London - Kings Cross</div>
                      <div className="card__price">
                        <div className="card__old">/day</div>
                        <div className="card__actual">$356</div>
                      </div>
                    </div>
                    <div className="card__options">
                      <div className="card__option">
                        {/* <svg className="icon icon-route">
                          <use xlink:href="#icon-route"></use>
                        </svg> */}
                        136 - 150, Pentonville Road, Kings Cross, London, UK
                      </div>
                      <div className="card__option">
                        {/* <svg className="icon icon-user">
                          <use xlink:href="#icon-user"></use>
                        </svg> */}
                        1 Supplier
                      </div>
                    </div>
                    <div className="card__foot">
                      <div className="card__flex">
                        <div className="card__cost">$600 total</div>
                        <div className="card__rating">
                          {/* <svg className="icon icon-star">
                            <use xlink:href="#icon-star"></use>
                          </svg> */}
                          <div className="card__number">4.8</div>
                          <div className="card__reviews">(12 reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="card card_row" href="cars-product.html">
                  <div className="card__preview"><img src="img/content/cars-pic-1.jpg" alt="London - Kings Cross" />
                    <div className="category card__category">popular</div>
                  </div>
                  <div className="card__body">
                    <div className="card__line">
                      <div className="card__title">London - Kings Cross</div>
                      <div className="card__price">
                        <div className="card__old">/day</div>
                        <div className="card__actual">$356</div>
                      </div>
                    </div>
                    <div className="card__options">
                      <div className="card__option">
                        {/* <svg className="icon icon-route">
                          <use xlink:href="#icon-route"></use>
                        </svg> */}
                        136 - 150, Pentonville Road, Kings Cross, London, UK
                      </div>
                      <div className="card__option">
                        {/* <svg className="icon icon-user">
                          <use xlink:href="#icon-user"></use>
                        </svg> */}
                        1 Supplier
                      </div>
                    </div>
                    <div className="card__foot">
                      <div className="card__flex">
                        <div className="card__cost">$600 total</div>
                        <div className="card__rating">
                          {/* <svg className="icon icon-star">
                            <use xlink:href="#icon-star"></use>
                          </svg> */}
                          <div className="card__number">4.8</div>
                          <div className="card__reviews">(12 reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="card card_row" href="cars-product.html">
                  <div className="card__preview"><img src="img/content/cars-pic-1.jpg" alt="London - Kings Cross" />
                    <div className="category card__category">popular</div>
                  </div>
                  <div className="card__body">
                    <div className="card__line">
                      <div className="card__title">London - Kings Cross</div>
                      <div className="card__price">
                        <div className="card__old">/day</div>
                        <div className="card__actual">$356</div>
                      </div>
                    </div>
                    <div className="card__options">
                      <div className="card__option">
                        {/* <svg className="icon icon-route">
                          <use xlink:href="#icon-route"></use>
                        </svg> */}
                        136 - 150, Pentonville Road, Kings Cross, London, UK
                      </div>
                      <div className="card__option">
                        {/* <svg className="icon icon-user">
                          <use xlink:href="#icon-user"></use>
                        </svg> */}
                        1 Supplier
                      </div>
                    </div>
                    <div className="card__foot">
                      <div className="card__flex">
                        <div className="card__cost">$600 total</div>
                        <div className="card__rating">
                          {/* <svg className="icon icon-star">
                            <use xlink:href="#icon-star"></use>
                          </svg> */}
                          <div className="card__number">4.8</div>
                          <div className="card__reviews">(12 reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="card card_row" href="cars-product.html">
                  <div className="card__preview"><img src="img/content/cars-pic-1.jpg" alt="London - Kings Cross" />
                    <div className="category card__category">popular</div>
                  </div>
                  <div className="card__body">
                    <div className="card__line">
                      <div className="card__title">London - Kings Cross</div>
                      <div className="card__price">
                        <div className="card__old">/day</div>
                        <div className="card__actual">$356</div>
                      </div>
                    </div>
                    <div className="card__options">
                      <div className="card__option">
                        {/* <svg className="icon icon-route">
                          <use xlink:href="#icon-route"></use>
                        </svg> */}
                        136 - 150, Pentonville Road, Kings Cross, London, UK
                      </div>
                      <div className="card__option">
                        {/* <svg className="icon icon-user">
                          <use xlink:href="#icon-user"></use>
                        </svg> */}
                        1 Supplier
                      </div>
                    </div>
                    <div className="card__foot">
                      <div className="card__flex">
                        <div className="card__cost">$600 total</div>
                        <div className="card__rating">
                          {/* <svg className="icon icon-star">
                            <use xlink:href="#icon-star"></use>
                          </svg> */}
                          <div className="card__number">4.8</div>
                          <div className="card__reviews">(12 reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="catalog__btns">
                <button className="button-stroke catalog__button">
                  <div className="loader"></div><span>Show more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
       

      </div>
</div>

  );
}

// Category.getInitialProps = async ({ query }) => {
//   const { category } = query;
//   query.page == 0 ? (query.page = 1) : (query.page = query.page);
//   const res = await fetch(
//     `http://localhost:3000/api/spots/${category}?page=${query.page}`
//   );
//   const data = await res.json();
//   // console.log(data)
//   // return { spots: data.data };
//   return {
//     spots: data.data,
//     count: data.count,
//     page: query.page,
//   };
// };


export async function getServerSideProps({ query }) {
  const { category } = query;
  query.page == 0 || query.page == undefined ? (query.page = 1) : (query.page = query.page);
  const res = await fetch(`${server}/api/spots/${category}?page=${query.page}`);
  const data = await res.json();
  console.log(data)
  return {
    props: {
      spots: data.data,
      count: data.count,
      page: query.page,
    }
  };
}

export default Category;
