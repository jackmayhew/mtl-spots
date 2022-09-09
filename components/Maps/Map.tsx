import GoogleMapReact from "google-map-react";

function Marker({ lat, lng, spot }) {
  const markerClick = () => {
    
    let allMarkers = document.getElementsByClassName("map__modal");
    for (let i = 0; i < allMarkers.length; i++) {
      allMarkers[i].classList.remove("modal__show");
    }
    document.getElementById(spot._id).classList.add("modal__show");
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
          onClick={markerClick}
        />
      </div>

      <div id={spot._id} className="map__modal" onClick={modalClick}>
        <h2>{spot.title}</h2>
        <h3>{spot.category}</h3>
        <h4><a href={`https://mtlspots.ca/spots/${spot.category}/${spot._id}`} target="_blank">View Spot</a></h4>
        <h4><a href={`https://maps.google.com/?q=${spot.location}`} target="_blank">Google Maps</a></h4>
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
    // disableDoubleClickZoom: true,
    minZoom: 5,
    maxZoom: 20,

    mapTypeControl: true,
    zoomControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT,
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

function SimpleMap({ initialSpots, isBreakpoint }) {
  const defaultProps = {
    center: {
      lat: 45.510141,
      lng: -73.635064,
    },
  };

  const removeModals = () => {
    let allModals = document.getElementsByClassName("map__modal");
    for (let i = 0; i < allModals.length; i++) {
      allModals[i].classList.remove("modal__show");
    }
  };

  return (
    <div style={{ height: "100%", width: "100%" }} className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API }}
        center={defaultProps.center}
        zoom={isBreakpoint ? 10.5 : 10.9}
        options={getMapOptions}
        showModal={true}
        onClick={removeModals}
      >
        {initialSpots.map((spot) => (
          <Marker
            key={spot._id}
            lat={spot.location.split(",")[0]}
            lng={spot.location.split(",")[1]}
            spot={spot}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

function Map({ initialSpots, isBreakpoint }) {
  return (
    <div className="map__height main__height">
      <div className="sorting__map js-sorting-map show simple__map main__map">
        <SimpleMap initialSpots={initialSpots} isBreakpoint={isBreakpoint} />
      </div>
    </div>
  );
}

export default Map;
