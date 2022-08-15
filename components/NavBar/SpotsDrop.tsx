import React, { useState, useRef, useEffect } from "react";
import listenForOutsideClick from "../../utils/Listen";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const SpotsDrop = () => {
  // toggle menu
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));


  const router = useRouter();

  return (
    <div
      ref={menuRef}
      className={
        isOpen
          ? "header__item header__item_dropdown js-header-item active"
          : "header__item header__item_dropdown js-header-item"
      }
    >
      <button className="header__head js-header-head" onClick={toggle}>
        Find Spots
        <IoIosArrowDown className="icon icon-arrow-down" />
      </button>

      <div className="header__body desktop__nav">
        <div className="header__menu" onClick={toggle}>
          <Link href="/spots">
            <a
              className={
                router.asPath === "/spots"
                  ? "header__link active"
                  : "header__link"
              }
              // onClick={handleActive}
            >
              All Spots
            </a>
          </Link>
          <Link href="/spots/stairs">
            <a
              className={
                router.asPath === "/spots/stairs"
                  ? "header__link active"
                  : "header__link"
              }
            >
              Stairs
            </a>
          </Link>
          <Link href="/spots/rails">
            <a
              className={
                router.asPath === "/spots/rails"
                  ? "header__link active"
                  : "header__link"
              }
            >
              Rails
            </a>
          </Link>
          <Link href="/spots/ledges">
            <a
              className={
                router.asPath === "/spots/ledges"
                  ? "header__link active"
                  : "header__link"
              }
            >
              Ledges
            </a>
          </Link>
          <Link href="/spots/gaps">
            <a
              className={
                router.asPath === "/spots/gaps"
                  ? "header__link active"
                  : "header__link"
              }
            >
              Gaps
            </a>
          </Link>
        </div>
      </div>

      {/* <div className="header__body mobile__nav">
        <div className="header__menu">
          <Link href="/spots">
            <a  onClick={() => setMenuState(!menuState)}
              className={
                router.asPath === "/spots"
                  ? "header__link active"
                  : "header__link"
              }
              // onClick={handleActive}
            >
              All Spots
            </a>
          </Link>
        </div>
      </div> */}

      
    </div>
  );
};

export default SpotsDrop;
