import { useRouter } from "next/router";
import Image from "next/image";
import { server } from "../../utils/domain";

function AdminCard({ spot, user }) {
    const router = useRouter();

    const openMap = (e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/map?spot=${spot._id}`);
    };

    const myLoader = ({ src }) => {
        return `${src}${spot.image.split("uploads")[1]}?w=500`;
    };

    const createSpot = async () => {
        try {
            await fetch(`${server}/api/admin/${spot._id}?user=${user}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            router.reload()
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createSpot();
    };

    return (
        <div className="card">
            <div className="card__preview">
                <Image
                    loader={myLoader}
                    src={"https://mtlspots.imgix.net/next-s3-uploads"}
                    layout="fill"
                    alt={`${spot.title} skateboard spot in Montreal, Quebec`}
                />
            </div>
            <div className="card__body">
                <div className="card__line">
                    <div className="card__title">{spot.title}</div>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <button className="card__price" type="submit">
                            <span className="card__actual">delete</span>
                        </button>
                    </form>
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
        </div>
    );
}

export default AdminCard;
