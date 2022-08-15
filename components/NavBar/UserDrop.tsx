import React, { useState, useRef, useEffect } from "react";
import listenForOutsideClick from "../../utils/Listen";
import Link from "next/link";
import { FiUser, FiBookmark, FiAtSign } from "react-icons/fi";
import { useRouter } from "next/router";

import ThemeChanger from "../HomePage/Theme";

const UserDrop = () => {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const [language, setLanguage] = useState("english");
  
  const languageHandle = (e) => {
    setLanguage(e.target.id)
  }

  const router = useRouter();

  return (
    <div
      ref={menuRef}
      className={
        isOpen
          ? "header__item header__item_user js-header-item active"
          : "header__item header__item_user js-header-item"
      }
    >
      <button className="header__head js-header-head" onClick={toggle}>
        <FiUser size={24} className="user_icon" />
      </button>

      <div className="header__body js-header-body">
        <div className="header__group">
          <div className="header__menu">
            <Link href="/saved">
              <a
                className={
                  router.asPath === "/saved"
                    ? "header__link active"
                    : "header__link"
                }
                onClick={toggle}
              >
                <FiBookmark size={24} className="icon icon-home" />
                Saved Spots
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.asPath === "/contact"
                    ? "header__link active"
                    : "header__link"
                }
                onClick={toggle}
              >
                <FiAtSign size={24} className="icon icon-home" />
                Contact Us
              </a>
            </Link>
            {/* {theme === "light" ? (
              <a className="header__link" onClick={() => setTheme('dark')}>
                <FiMoon size={24} className="icon icon-home" />
                Dark Mode
              </a>
            ) : (
              <a className="header__link" onClick={() => setTheme('dark')}>
                <FiSun size={24} className="icon icon-home" />
                Light Mode
              </a>
            )} */}
          </div>
          <ThemeChanger />
          <div className="header__menu"></div>
        </div>
        <div className="header__btns">
          {/* <Link href="/spots">
            <a className="button button-small header__button" onClick={toggle}>
              Find Spots
            </a>
          </Link>
          <Link href="/upload">
            <a className="button button-small header__button" onClick={toggle}>
              Share Spots
            </a>
          </Link> */}

<div className="header__body js-header-body language__body slat">
        <div className="header__list">
          <a className={language === "english" ? "header__box active" : "header__box"} id="english" onClick={languageHandle}>
            <div className="header__category">English</div>
            <div className="header__country">United States</div>
          </a>
          <a className={language === "french" ? "header__box active" : "header__box"} id="french" onClick={languageHandle}>
            <div className="header__category">Français</div>
            <div className="header__country">Canada</div>
          </a>
        </div>
      </div>
      
          {/* <div className="header__body js-header-body language__body slat"><div className="header__list"><a className="header__box active" id="english"><div className="header__category">English</div><div className="header__country">United States</div></a><a className="header__box" id="french"><div className="header__category">Français</div><div className="header__country">Canada</div></a></div></div> */}
        </div>
      </div>
    </div>
  );
};

export default UserDrop;
