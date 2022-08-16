import React from "react";
import ThemeChanger from "./Theme";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__center center">
        <div className="footer__row">
          <div className="footer__col">
            <a className="footer__logo" href="index.html">
              <img
                className="some-icon"
                src="https://ui8-fleet-html.herokuapp.com/img/logo-dark.svg"
                alt="Fleet"
              />
            </a>
            <div className="footer__theme">
              <div className="footer__switch">
                <ThemeChanger />
              </div>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__menu">
              <Link href="/">
                <a className="footer__link">Home</a>
              </Link>
              <Link href="/spots">
                <a className="footer__link">Spots</a>
              </Link>
              <Link href="/share">
                <a className="footer__link">Share</a>
              </Link>
              <Link href="/map">
                <a className="footer__link">Map</a>
              </Link>
              <Link href="/saved">
                <a className="footer__link">Saved</a>
              </Link>
              <Link href="/contact">
                <a className="footer__link">Contact</a>
              </Link>
            </div>
          </div>
          {/* <div className="footer__col">
            <div className="footer__info">Find Us On Instagram</div>
            <FiInstagram size={24} className="icon icon-home" />
          </div> */}
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            Copyright © 2022. Built By{" "}
            <a
              href="https://www.jackmayhew.com/"
              target="_blank"
              rel="noopener"
            >
              Jack
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
