import fetch from "isomorphic-unfetch";
import { server } from "../utils/domain";
import { useState, useEffect, useRef } from "react";
import listenForOutsideClick from "../utils/Listen";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Pagination from "../components/Pagination/Pagination";
import AdminCard from "../components/Cards/AdminCard";
Admin.title = "admin";

function Admin({
  initialSpots,
  initialCount,
  initialPage,
  initialCategory,
}) {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const [query, setQuery] = useState(initialCategory);
  const { user } = useUser();


  return (
    <div>
        <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
       {user && user.sub === process.env.NEXT_PUBLIC_ADMIN_ID ? (
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
                    </ul>
                  </div>
                  <div className="sorting__body">
                    <div className="sorting__box">
                      <h2 className="sorting__title h2">
                        {initialCount} Spots Found
                      </h2>
                      <div className="sorting__line">
                        <div className="sorting__details">
                          {query === "All" || !query
                            ? "Showing All Spots"
                            : `Showing ${query}`}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sorting__foot spotspage__search">
                    <div className="sorting__select" ref={menuRef}>
                      <div
                        className={
                          isOpen
                            ? "nice-select select open"
                            : "nice-select select"
                        }
                        onClick={toggle}
                      >
                        <span className="current">
                          {query ? query : "Browse By"}
                        </span>
                        <ul className="list">
                          <Link scroll={false} href={`/admin?category=`}>
                            <li
                              onClick={() => setQuery("All")}
                              className={
                                query === "All"
                                  ? "option selected focus"
                                  : "option"
                              }
                            >
                              <a>All</a>
                            </li>
                          </Link>
                          <Link scroll={false} href={`/admin?category=stairs`}>
                            <li
                              onClick={() => setQuery("stairs")}
                              className={
                                query === "stairs"
                                  ? "option selected focus"
                                  : "option"
                              }
                            >
                              <a>Stairs</a>
                            </li>
                          </Link>
                          <Link scroll={false} href={`/admin?category=rails`}>
                            <li
                              onClick={() => setQuery("rails")}
                              className={
                                query === "rails"
                                  ? "option selected focus"
                                  : "option"
                              }
                            >
                              <a>Rails</a>
                            </li>
                          </Link>
                          <Link scroll={false} href={`/admin?category=ledges`}>
                            <li
                              onClick={() => setQuery("ledges")}
                              className={
                                query === "ledges"
                                  ? "option selected focus"
                                  : "option"
                              }
                            >
                              <a>Ledges</a>
                            </li>
                          </Link>
                          <Link scroll={false} href={`/admin?category=gaps`}>
                            <li
                              onClick={() => setQuery("gaps")}
                              className={
                                query === "gaps"
                                  ? "option selected focus"
                                  : "option"
                              }
                            >
                              <a>Gaps</a>
                            </li>
                          </Link>
                          <Link
                            scroll={false}
                            href={`/admin?category=skate parks`}
                          >
                            <li
                              onClick={() => setQuery("skate parks")}
                              className={
                                query === "skate parks"
                                  ? "option selected focus"
                                  : "option"
                              }
                            >
                              <a>skate parks</a>
                            </li>
                          </Link>
                          <Link scroll={false} href={`/admin?category=other`}>
                            <li
                              onClick={() => setQuery("other")}
                              className={
                                query === "other"
                                  ? "option selected focus"
                                  : "option"
                              }
                            >
                              <a>Other</a>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="catalog__body">
                <div className="catalog__center center">
                  <div className="catalog__cards">
                    {initialSpots.map((spot) => (
                      <AdminCard spot={spot} key={spot._id} user={user.sub} />
                    ))}
                  </div>

                  {initialSpots.length > 0 && (
                    <div className="catalog__btns">
                      <Pagination
                        count={initialCount}
                        page={initialPage}
                        url={`/admin?category=${initialCategory}&`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  query.page == 0 || query.page == undefined
    ? (query.page = 1)
    : (query.page = query.page);

  query.category == "" || query.category == undefined
    ? (query.category = "")
    : (query.category = query.category);

  const res = await fetch(
    `${server}/api/spots?category=${query.category}&page=${query.page}`
  );

  const data = await res.json();

  return {
    props: {
      initialSpots: data.data,
      initialCount: data.count,
      initialPage: query.page,
      initialCategory: query.category,
    },
  };
}


export default Admin;
