import Meta from "./Meta";
import Navbar from "../NavBar/Navbar";
import Footer from "./Footer";


function Layout({ children, titles }) {
  return (
    <>
      <Meta titles={titles} />
      <Navbar  />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
