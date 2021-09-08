import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //   Transform the search result objects
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // get center
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/abhi886/cktaqihtc3wez18mg91upa9j6'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offSetTop={-10}
          >
            <p
              className='cursor-pointer animate-bounce'
              onClick={() => setSelectedLocation(result)}
            >
              📍
            </p>
          </Marker>
          {/* Popup to show if we click on the marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
