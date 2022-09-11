import GoogleMapReact from "google-map-react";

function Marker({ lat, lng, spot, openSpot }) {
  const openModal = () => {
    let allMarkers = document.getElementsByClassName("map__modal");
    for (let i = 0; i < allMarkers.length; i++) {
      allMarkers[i].classList.remove("modal__show");
    }
    setTimeout(() => {
      document.getElementById(spot._id).classList.add("modal__show");
    }, 20);
  };

  const modalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className="map__marker">
        <img
          src="marker.png"
          alt=""
          style={{ width: 18, height: "auto" }}
          className="map__marker"
          onClick={openModal}
        />
      </div>

      <div
        id={spot._id}
        className={
          openSpot === spot._id ? "map__modal modal__show" : "map__modal"
        }
        onClick={modalClick}
      >
        <div className="card modal__card">
          <div className="card__body">
            <div className="card__line">
              <div className="card__title map__title">{spot.title}</div>
            </div>
            <div className="card__options">
              <div className="card__option">{spot.category}</div>
            </div>
            <div className="card__foot modal__foot">
              <div className="card__flex">
                <div className="card__cost">
                  <a
                    href={`https://mtlspots.ca/spots/${spot.category}/${spot._id}`}
                    target="_blank"
                    className="card__reviews"
                  >
                    View Spot
                  </a>
                </div>
                <div className="card__rating">
                  <a
                    className="card__reviews"
                    href={`https://maps.google.com/?q=${spot.location}`}
                    target="_blank"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getMapOptions(maps) {
  return {
    streetViewControl: false,
    scaleControl: true,
    // fullscreenControl: false,
    styles: [
      {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
    gestureHandling: "greedy",
    // gestureHandling: "cooperative",
    minZoom: 5,
    maxZoom: 22,
    rotateControl: true,
    mapTypeControl: true,
    zoomControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT,
    },
    rotateControlOptions: {
      position: maps.ControlPosition.TOP_LEFT,
    },
    mapTypeId: maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
      style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: maps.ControlPosition.TOP_LEFT,
      mapTypeIds: [
        maps.MapTypeId.ROADMAP,
        maps.MapTypeId.SATELLITE,
        maps.MapTypeId.HYBRID,
      ],
    },
    zoomControl: true,
    clickableIcons: false,
  };
}

function SimpleMap({ initialSpots, isBreakpoint, openSpot }) {
  const defaultProps = {
    center: {
      lat: 45.510141,
      lng: -73.635064,
    },
  };

  const closeModals = (e) => {
    let allModals = document.getElementsByClassName("map__modal");
    for (let i = 0; i < allModals.length; i++) {
      allModals[i].classList.remove("modal__show");
    }
    console.log(e.target)
  };


  if (typeof window !== 'undefined'){
  let ah = document.querySelector('.gm-style-moc')
  


  ah.addEventListener('click', () => {
    console.log('ah')
  })

  }




  return (
    <div style={{ height: "100%", width: "100%" }} className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API }}
        center={defaultProps.center}
        zoom={isBreakpoint ? 10 : 10.9}
        options={getMapOptions}
        showModal={true}
        onClick={closeModals} 
      >
        {initialSpots.map((spot) => (
          <Marker
            key={spot._id}
            lat={spot.location.split(",")[0]}
            lng={spot.location.split(",")[1]}
            spot={spot}
            openSpot={openSpot}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

function Map({ initialSpots, isBreakpoint, openSpot }) {
  return (
    <div className="map__height main__height">
      <div className="sorting__map js-sorting-map show simple__map main__map">
        <SimpleMap
          initialSpots={initialSpots}
          isBreakpoint={isBreakpoint}
          openSpot={openSpot}
        />
      </div>
    </div>
  );
}

export default Map;
