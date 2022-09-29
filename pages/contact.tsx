import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
Contact.title = 'contact';

function Contact() {
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
                    <Link href={`/saved`}>
                      <a className="breadcrumbs__link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section faq">
            <div className="faq__center center">
              <div className="faq__top">
                <div className="faq__stage">
                  message us on instagram to get in touch
                </div>
                <h1 className="faq__title h2">Contact MTL SPOTS</h1>
                <div className="faq__info weight">
                  <a href="https://www.instagram.com/mtl_spots/" target="_blank"><FiInstagram size={22} />mtl_spots</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
