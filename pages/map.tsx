import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { GrLocationPin } from "react-icons/gr";

function Marker({ lat, lng }) {
  return (
    <div>
      <GrLocationPin />
    </div>
  );
}

function SimpleMap() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const defaultProps = {
    center: {
      lat: 45.540141,
      lng: -73.635064,
    },
    zoom: 10.5,
  };
  function getMapOptions (maps) {

    return {
        streetViewControl: false,
        scaleControl: true,
        fullscreenControl: false,
        styles: [{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }],
        gestureHandling: "greedy",
        disableDoubleClickZoom: true,
        minZoom: 11,
        maxZoom: 18,

        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: maps.ControlPosition.BOTTOM_CENTER,
            mapTypeIds: [
                maps.MapTypeId.ROADMAP,
                maps.MapTypeId.SATELLITE,
                maps.MapTypeId.HYBRID
            ]
        },

        zoomControl: true,
        clickableIcons: false
    };
}
  return (
    
    <div style={{ height: "100%", width: "100%" }} className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCK4CFCZkbvdwhkDGRI8IlBfq1KoCTAwoA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(ev) => {
          setLat(ev.lat);
          setLong(ev.lng);
        }}
        options={getMapOptions}
        // options={map => ({ mapTypeId: map.MapTypeId.SATELLITE })}
      >
        <Marker lat={lat} lng={long} />
        
      </GoogleMapReact>
      
    </div>
  );
}

function map() {
  return (
    <div>
      <button className="button-stroke sorting__button js-sorting-button">
        <span>Show map</span>
      </button>
      <div className="sorting__map js-sorting-map">
        <SimpleMap />
      </div>
    </div>
  );
}



export default map;
