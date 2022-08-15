import React, { useState } from "react";
import Link from "next/link";
import SpotsDrop from "./SpotsDrop";
import LanguageDrop from "./LanguageDrop";
import UserDrop from "./UserDrop";
import { useRouter } from "next/router";

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    !document.querySelector("body").classList.contains("lock")
      ? document.querySelector("body").classList.add("lock")
      : document.querySelector("body").classList.remove("lock");
  };

  const handleMobileMenuLogo = () => {
    setMobileMenu(false);
    document.querySelector("body").classList.remove("lock");
  };

  return (
    <header className="header js-header">
      <div className="header__center center">
        <Link href="/">
          <a className="header__logo" onClick={() => handleMobileMenuLogo()}>
            <img
              className="some-icon"
              src="https://ui8-fleet-html.herokuapp.com/img/logo-dark.svg"
              alt="Fleet"
            />
          </a>
        </Link>

        <div
          className={
            mobileMenu
              ? "header__wrapper js-header-wrapper visible"
              : "header__wrapper js-header-wrapper"
          }
        >
          <SpotsDrop />

          <div className="mobile__wrapper" onClick={() => handleMobileMenu()}>
            <Link href="/">
              <a
                className={
                  router.asPath === "/"
                    ? "header__item active mobile__nav"
                    : "header__item mobile__nav"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/spots">
              <a
                className={
                  router.asPath.includes("/spots")
                    ? "header__item active mobile__nav"
                    : "header__item mobile__nav"
                }
              >
                Find
              </a>
            </Link>
            <Link href="/map">
              <a
                className={
                  router.asPath === "/map"
                    ? "header__item active mobile__nav"
                    : "header__item mobile__nav"
                }
              >
                Map
              </a>
            </Link>
            <Link href="/upload">
              <a
                className={
                  router.asPath === "/upload"
                    ? "header__item active mobile__nav"
                    : "header__item mobile__nav"
                }
              >
                Share
              </a>
            </Link>
            <Link href="/saved">
              <a
                className={
                  router.asPath === "/saved"
                    ? "header__item active mobile__nav"
                    : "header__item mobile__nav"
                }
              >
                Saved
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.asPath === "/contact"
                    ? "header__item active mobile__nav"
                    : "header__item mobile__nav"
                }
              >
                Contact
              </a>
            </Link>
          </div>

          <LanguageDrop />
        </div>

        <UserDrop />

        <button
          className={
            mobileMenu
              ? "header__burger js-header-burger active"
              : "header__burger js-header-burger"
          }
          onClick={() => handleMobileMenu()}
        ></button>
      </div>
    </header>
  );
}

export default NavBar;
