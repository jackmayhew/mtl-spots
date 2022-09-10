import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Card({ spot }) {
  const router = useRouter();

  const openMap = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/map?spot=${spot._id}`);
  };

  return (
    <Link href={`/spots/${spot.category}/${spot._id}`}>
      <a className="card">
        <div className="card__preview">
          <img src={spot.image} alt="Entire serviced classy moutain house" />
          {/* <div className="category card__category">superhost</div> */}
        </div>
        <div className="card__body">
          <div className="card__line">
            <div className="card__title">{spot.title}</div>
            <div className="card__price">
              <div className="card__actual">info</div>
            </div>
          </div>
          <div className="card__options">
            <div className="card__option">{spot.category}</div>
          </div>
          <div className="card__foot">
            <div className="card__flex">
              <div className="card__cost">Bust Level: {spot.bust}</div>
              <div className="card__rating">
                <div className="card__reviews" onClick={openMap}>
                  Open Map
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
