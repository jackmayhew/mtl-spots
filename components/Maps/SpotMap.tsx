import GoogleMapReact from "google-map-react";

function Marker({ lat, lng }) {
  return (
    <div className="map__marker">
      <img
        src="../../marker.png"
        style={{ width: 18, height: "auto" }}
        className="map__marker"
      />
    </div>
  );
}

function getMapOptions(maps, id) {
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
    maxZoom: 22,

    mapTypeControl: true,
    mapTypeId: maps.MapTypeId.ROADMAP,
    rotateControlOptions: {
      position: maps.ControlPosition.BOTTOM_LEFT,
    },
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

function SimpleMap({ location }) {
  let cords = location.split(",");
  const defaultProps = {
    center: {
      lat: 45.540141,
      lng: -73.635064,
    },
    zoom: 9,
  };

  return (
    <div style={{ height: "100%", width: "100%" }} className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        options={getMapOptions}
      >
        <Marker lat={cords[0]} lng={cords[1]} />
      </GoogleMapReact>
    </div>
  );
}

function Map({ location }) {
  return (
    <div className="map__height">
      <div className="sorting__map js-sorting-map show simple__map">
        <SimpleMap location={location} />
      </div>
    </div>
  );
}

export default Map;
