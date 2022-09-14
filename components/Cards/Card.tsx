import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'

function Card({ spot }) {
  const router = useRouter();

  const openMap = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/map?spot=${spot._id}`);
  };

  // slice after word "uploads"
  const myLoader = ({ src }) => {
    return `${src}${spot.image.split("uploads")[1]}?w=500`
    // return `${src}${spot.image.slice(64)}?w=500`
  }

  return (
    <Link href={`/spots/${spot.category}/${spot._id}`}>
      <a className="card">
        <div className="card__preview">
          <Image
            loader={myLoader}
            src={"https://mtlspots.imgix.net/next-s3-uploads"}
            layout='fill'
            alt={`${spot.title} skateboard spot in Montreal, Quebec`}
          />
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
              <div className="card__cost">Bust: {spot.bust}</div>
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
