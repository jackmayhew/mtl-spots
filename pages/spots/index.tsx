import fetch from "isomorphic-unfetch";
import Categoru from "../../components/Spots";
import {server} from '../../utils/domain'

function All({ spots, count, page }) {
  return (
    // <Categoru spots={spots} count={count} page={page} />
    <h1>spots</h1>
  );
}

// All.getInitialProps = async ({ query }) => {
//   query.page == 0 ? (query.page = 1) : (query.page = query.page);
//   const res = await fetch(`${server}/api/spots?page=${query.page}`);
//   const data = await res.json();
//   return {
//     spots: data.data,
//     count: data.count,
//     page: query.page,
//   };
// };

export default All;
