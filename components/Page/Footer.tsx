import React from "react";
import ThemeChanger from "./Theme";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__center center">
        <div className="footer__row">
          <div className="footer__col">
            <Link href="/">
              <a className="footer__logo">
                <img
                  className="some-icon"
                  src="/logo.png"
                  alt="mtlspots logo"
                />
              </a>
            </Link>
            <a target="_blank" rel="noopener" href="https://www.instagram.com/mtl_spots/" className="footer__ig"><FiInstagram size={18} /><span>mtl_spots</span></a>

            {/* <div className="footer__theme">
              <div className="footer__switch">
                <ThemeChanger />
              </div>
            </div> */}
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
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            Copyright © 2022. Built By{" "}
            <a
              href="https://www.jackmayhew.com/"
              target="_blank"
              rel="noopener"
              className="built__by"
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
