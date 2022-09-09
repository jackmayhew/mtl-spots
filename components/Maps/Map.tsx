// import React, { useState, useMemo } from "react";
import { useState, useRef, useEffect  } from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationPin } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import listenForOutsideClick from "../../utils/Listen";
{
  /* <FaMapMarkerAlt size={26} className="map__marker" /> */
}

function Marker({ lat, lng, spot }) {
  
    const menuRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

    const deletepost = (e) => {
    // let p = document.getElementsByClassName("map__modal");
    // for (let i = 0; i < p.length; i++) {
    //   p[i].classList.remove("modal__show");
    // }
    document.getElementById(spot._id).classList.add("modal__show");
  };

  return (
    <div ref={menuRef}>
      <div className="map__marker">
        <img
          src="marker.png"
          alt=""
          style={{ width: 18, height: "auto" }}
          className="map__marker"
          onClick={deletepost}
          
        />
      </div>
      <div id={spot._id}  className={isOpen ? "map__modal modal__show" : "map__modal"} onClick={toggle}>

        <h5>{spot.title}</h5>

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

  return (
    <div style={{ height: "100%", width: "100%" }} className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API }}
        center={defaultProps.center}
        zoom={isBreakpoint ? 10.5 : 10.9}
        options={getMapOptions}
        showModal={true}
      >

{/* <Marker
        
            lat={45.510141}
            lng={-73.635064}
            spot={initialSpots[0]}
          /> */}

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
