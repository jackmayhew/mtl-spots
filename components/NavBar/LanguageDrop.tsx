import React, { useState, useRef, useEffect } from "react";
import listenForOutsideClick from "../../utils/Listen";
import { FiGlobe } from "react-icons/fi";

const LanguageDrop = ({ language, setLanguage, languageHandle }) => {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  return (
    <div
      ref={menuRef}
      className={
        isOpen
          ? "header__item header__item_language js-header-item active"
          : "header__item header__item_language js-header-item"
      }
    >
      <button className="header__head js-header-head" onClick={toggle}>
        <FiGlobe className="icon icon-globe" />
        Language
      </button>

      <div
        className="header__body js-header-body language__body"
        onClick={toggle}
      >
        <div className="header__list">
          <div
            className={
              language === "english" ? "header__box active" : "header__box"
            }
            id="english"
            onClick={languageHandle}
          >
            <div className="header__category">English</div>
            <div className="header__country">Canada</div>
          </div>
          <div
            className={
              language === "french" ? "header__box active" : "header__box"
            }
            id="french"
            onClick={languageHandle}
          >
            <div className="header__category">Français</div>
            <div className="header__country">Bientôt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDrop;
