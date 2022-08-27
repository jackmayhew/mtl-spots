import React, { useState, useMemo } from "react";
import GoogleMapReact from "google-map-react";
import { GrLocationPin } from "react-icons/gr";

function Marker({ lat, lng }) {
  return (
    <div>
      <GrLocationPin size={44} />
    </div>
  );
}

function getMapOptions(maps) {
  return {
    streetViewControl: false,
    scaleControl: true,
    fullscreenControl: false,
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
    // disableDoubleClickZoom: true,
    minZoom: 5,
    maxZoom: 20,

    mapTypeControl: true,
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

function SimpleMap({ lat, setLat, long, setLong }) {
  const defaultProps = {
    center: {
      lat: 45.540141,
      lng: -73.635064,
    },
    zoom: 10.5,
  };

  return (
    <div style={{ height: "100%", width: "100%" }} className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(ev) => {
          setLat(ev.lat);
          setLong(ev.lng);
        }}
        options={getMapOptions}
      >
        <Marker lat={lat} lng={long}  />
      </GoogleMapReact>
    </div>
  );
}

function Map({ show, lat, setLat, long, setLong }) {
  return (
    <div>
      <div
        className={
          show
            ? "sorting__map js-sorting-map show"
            : "sorting__map js-sorting-map"
        }
      >
        <SimpleMap lat={lat} setLat={setLat} long={long} setLong={setLong} />
      </div>
    </div>
  );
}

export default Map;
