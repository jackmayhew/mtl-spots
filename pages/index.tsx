// import CallToActionWithIllustration from "../components/Home";
// import C2g from "../components/HomeGrid";
// import SliderComp from "../components/Slider";
// import Sj from "../components/HomeCTA";
import Homer from "../components/HomePage/Homer"


function Home({ spots }) {
  return (
    <Homer spots={spots} />
  );
}

Home.getInitialProps = async () => {
  const res = await fetch(`http://localhost:3000/api/home`);
  const data = await res.json();
  return {
    spots: data.data,
  };
};

export default Home;
