// import CallToActionWithIllustration from "../components/Home";
// import C2g from "../components/HomeGrid";
// import SliderComp from "../components/Slider";
// import Sj from "../components/HomeCTA";
import Homer from "../components/HomePage/Homer"
import {server} from '../utils/domain'

function Home({ spots }) {
  return (
    <Homer spots={spots} />
  );
}

// Home.getStaticProps  = async () => {
//   const res = await fetch(`${server}/api/home`);
//   const data = await res.json();
//   return {
//     spots: data.data,
//   };
// };

export default Home;


export const getStaticProps = async ()  => {
  const res = await fetch(`${server}/api/home`);
  const data = await res.json();
  return {
  props: { 
    spots: data.data
  }
}
}