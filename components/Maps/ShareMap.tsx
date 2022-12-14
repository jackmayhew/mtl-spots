import GoogleMapReact from "google-map-react";

function Marker({ lat, lng }) {
  return (
    <div className="map__marker">
      <img
        src="../marker.png"
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

function SimpleMap({
  lat,
  setLat,
  long,
  setLong,
  defaultLat,
  defaultLong,
  defaultZoom,
  setDefaultZoom,
}) {
  const defaultProps = {
    center: {
      lat: defaultLat,
      lng: defaultLong,
    },
    zoom: defaultZoom,
  };

  return (
    <div style={{ height: "100%", width: "100%" }} className="googleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API }}
        center={defaultProps.center}
        zoom={defaultZoom}
        onClick={(ev) => {
          if (ev.x && ev.event.target.nodeName !== "BUTTON") {
            setLat(ev.lat);
            setLong(ev.lng);
          }
        }}
        options={getMapOptions}
      >
        <Marker lat={lat} lng={long} />
      </GoogleMapReact>
    </div>
  );
}

function Map({
  show,
  lat,
  setLat,
  long,
  setLong,
  defaultLat,
  defaultLong,
  defaultZoom,
  setDefaultZoom,
}) {
  return (
    <div>
      <div
        className={
          show
            ? "sorting__map js-sorting-map show"
            : "sorting__map js-sorting-map"
        }
      >
        <SimpleMap
          lat={lat}
          setLat={setLat}
          long={long}
          setLong={setLong}
          defaultLat={defaultLat}
          defaultLong={defaultLong}
          defaultZoom={defaultZoom}
          setDefaultZoom={setDefaultZoom}
        />
      </div>
    </div>
  );
}

export default Map;
