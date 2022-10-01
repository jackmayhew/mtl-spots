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
    !document.querySelector("html").classList.contains("lock")
      ? document.querySelector("html").classList.add("lock")
      : document.querySelector("html").classList.remove("lock");
  };

  const handleMobileMenuLogo = () => {
    setMobileMenu(false);
    document.querySelector("body").classList.remove("lock");
  };

  const [language, setLanguage] = useState("english");

  const languageHandle = (e) => {
    setLanguage("english");
    // setLanguage(e.target.id);
  };

  return (
    <header className="header js-header">
      <div className="header__center center">
        <Link href="/">
          <a className="header__logo" onClick={() => handleMobileMenuLogo()}>
            <img className="some-icon" src="/logo.png" alt="mtlspots logo" />
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
                Spots
              </a>
            </Link>
            <Link href="/map">
              <a
                className={
                  router.asPath.includes("/map")
                    ? "header__item active mobile__nav"
                    : "header__item mobile__nav"
                }
              >
                Map
              </a>
            </Link>
            <Link href="/share">
              <a
                className={
                  router.asPath.includes("/share")
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
                  router.asPath.includes("/saved")
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

          <LanguageDrop
            language={language}
            setLanguage={setLanguage}
            languageHandle={languageHandle}
          />
        </div>

        <UserDrop
          language={language}
          setLanguage={setLanguage}
          languageHandle={languageHandle}
        />

        <button
          className={
            mobileMenu
              ? "header__burger js-header-burger active"
              : "header__burger js-header-burger"
          }
          aria-label="Mobile Menu"
          onClick={() => handleMobileMenu()}
        ></button>
      </div>
    </header>
  );
}

export default NavBar;
