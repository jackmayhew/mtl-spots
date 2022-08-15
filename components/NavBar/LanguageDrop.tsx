import React, { useState, useRef, useEffect } from "react";
import listenForOutsideClick from "../../utils/Listen";
import { FiGlobe } from "react-icons/fi";

const LanguageDrop = () => {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const [language, setLanguage] = useState("english");
  
  const languageHandle = (e) => {
    setLanguage(e.target.id)
  }

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

      <div className="header__body js-header-body language__body" onClick={toggle}>
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
    </div>
  );
};

export default LanguageDrop;
