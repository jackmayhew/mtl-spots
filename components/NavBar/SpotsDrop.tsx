import React, { useState, useRef, useEffect } from "react";
import listenForOutsideClick from "../../utils/Listen";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiUpload } from "react-icons/fi";

const SpotsDrop = () => {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const router = useRouter();

  const handle = () => {
    toggle;
    console.log('ahh')
  }
  return (
    <div className="find__share__wrap">
      <div
        ref={menuRef}
        className={
          isOpen
            ? "header__item header__item_dropdown js-header-item spot__upload active"
            : "header__item header__item_dropdown js-header-item spot__upload"
        }
      >
        <button className="header__head js-header-head find__spots" onClick={toggle}>
          <span
            className={
              router.asPath.includes("/spots") ? "spots__drop__active" : ""
            }
          >
            Find Spots
            <IoIosArrowDown className="icon icon-arrow-down" />
          </span>
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
      </div>
      <div className="header__item header__item_language upload__link">
        <Link href="/share">
          <a
            className={
              router.asPath === "/share"
                ? "header__head upload__active"
                : "header__head"
            }
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Share Spots
            <FiUpload className="icon icon-globe share__icon" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SpotsDrop;
