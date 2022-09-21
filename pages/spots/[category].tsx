import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { server } from "../../utils/domain";
import Card from "../../components/Cards/Card";
import Pagination from "../../components/Pagination/Pagination";
import Head from "next/head";

function SpotCategory({
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
        <Head>
          <title key="title">mtlspots - {initialCategory}</title>      
        </Head>
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
                  <Card spot={spot} key={spot._id} />
                ))}
              </div>

              {initialSpots.length > 0 && (
                <div className="catalog__btns">
                  <Pagination
                    count={initialCount}
                    page={initialPage}
                    url={`/spots/${initialCategory}?`}
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

export default SpotCategory;
