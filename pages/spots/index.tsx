import fetch from "isomorphic-unfetch";
import Categoru from "../../components/Spots";

function All({ spots, count, page }) {
  return (
    <Categoru spots={spots} count={count} page={page} />
  );
}

All.getInitialProps = async ({ query }) => {
  query.page == 0 ? (query.page = 1) : (query.page = query.page);
  const res = await fetch(`http://localhost:3000/api/spots?page=${query.page}`);
  const data = await res.json();
  return {
    spots: data.data,
    count: data.count,
    page: query.page,
  };
};

export default All;
