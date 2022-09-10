import Link from "next/link";
import smoothscroll from 'smoothscroll-polyfill';

function Pagination({ count, page, spotCategory }) {
  
  smoothscroll.polyfill();


  let pageIndex = parseInt(page);
  page === undefined ? (pageIndex = 1) : (pageIndex = parseInt(page));

  const currentPage = pageIndex;
  const hasNextPage = 12 * pageIndex < count;
  const nextPage = pageIndex + 1;
  const previousPage = pageIndex - 1;
  const lastPage = Math.ceil(count / 12);

  // if browsing by category, add to url
  const path = `?category=${spotCategory}`;

  return (
    <div className="pagination p1">
      <ul>
        {/* 1/1 */}
        {count < 13 && (
          // <Link scroll={false} href={`/spots${path}`}>
          <a className="is-active">
            <li>1 / 1</li>
          </a>
          // </Link>
        )}

        {/* first */}
        {currentPage > 2 && (
          <Link scroll={false} href={`/spots${path}&page=1`}>
            <a
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <li>First</li>
            </a>
          </Link>
        )}

        {/* prev */}
        {currentPage >= 2 && (
          <Link scroll={false} href={`/spots${path}&page=${previousPage}`}>
            <a
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <li>{previousPage}</li>
            </a>
          </Link>
        )}

        {/* current */}
        {count >= 13 && (
          <Link scroll={false} href={`/spots${path}&page=${currentPage}`}>
            <a
              className="is-active"
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <li>{currentPage}</li>
            </a>
          </Link>
        )}

        {/* next */}
        {hasNextPage && (
          <Link scroll={false} href={`/spots${path}&page=${nextPage}`}>
            <a
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <li>{nextPage}</li>
            </a>
          </Link>
        )}

        {/* last */}
        {nextPage !== lastPage && currentPage !== lastPage && count > 13 && (
          <Link scroll={false} href={`/spots${path}&page=${lastPage}`}>
            <a
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <li>Last</li>
            </a>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
