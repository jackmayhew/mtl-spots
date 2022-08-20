import Link from "next/link";
import fetch from "isomorphic-unfetch";
import CategoryPagination from "../../components/Spots/CategoryPagination";
import { server } from "../../utils/domain";

function Category({
  initialSpots,
  initialCount,
  initialPage,
  initialCategory,
}) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="outer__inner">
      <div className="section-mb80 main main_cars-category">
        <div className="section catalog">
          <div className="sorting">
            <div className="sorting__center center">
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
                    <Link href={`/spots/${initialCategory}`}>
                      <a className="breadcrumbs__link">
                        {capitalizeFirstLetter(initialCategory)}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sorting__body">
                <div className="sorting__box">
                  <h2 className="sorting__title h2">
                    {initialCount} Spots Found
                  </h2>
                  <div className="sorting__line">
                    <div className="sorting__details">
                      Showing All {capitalizeFirstLetter(initialCategory)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="catalog__body">
            <div className="catalog__center center">
              <div className="catalog__cards">
                {initialSpots.map((spot) => (
                  <Link
                    href={`/spots/${spot.category}/${spot._id}`}
                    key={spot._id}
                  >
                    <a className="card" key={spot._id}>
                      <div className="card__preview">
                        <img
                          src="https://storage.googleapis.com/fsscs1/images/small/ei9lu6chhguclgn7yjt8ygyuk2vbvfx2.jpg"
                          alt="Entire serviced classy moutain house"
                        />
                      </div>
                      <div className="card__body">
                        <div className="card__line">
                          <div className="card__title">{spot.title}</div>
                          <div className="card__price">
                            <div className="card__actual">info</div>
                          </div>
                        </div>
                        <div className="card__options">
                          <div className="card__option">{spot.location}</div>
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
                ))}
              </div>

              {initialSpots.length > 0 && (
                <div className="catalog__btns">
                  <CategoryPagination
                    count={initialCount}
                    page={initialPage}
                    spotCategory={initialCategory}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { category } = query;
  query.page == 0 || query.page == undefined
    ? (query.page = 1)
    : (query.page = query.page);
  const res = await fetch(`${server}/api/spots/${category}?page=${query.page}`);
  const data = await res.json();
  return {
    props: {
      initialSpots: data.data,
      initialCount: data.count,
      initialPage: query.page,
      initialCategory: category,
    },
  };
}

export default Category;
