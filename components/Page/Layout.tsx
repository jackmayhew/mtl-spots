import Meta from "./Meta";
import Navbar from "../NavBar/Navbar";
import Footer from "./Footer";


function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar  />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
