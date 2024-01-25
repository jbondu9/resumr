import "leaflet/dist/leaflet.css";

import { ReactElement, useState } from "react";

import "./App.css";

import Map from "./components/Map.component";
import MapMarker from "./components/MapMarker.component";
import MarkerDetails from "./components/MarkerDetails.component";
import { Markers } from "./constants/Markers.constant";
import { MarkerElement } from "./types/MarkerElement.type";

export default function App(): ReactElement {
  const [selectedMarker, setSelectedMarker] = useState<MarkerElement | null>(
    null,
  );

  const handleMarkerClick = (marker: MarkerElement) => {
    setSelectedMarker(marker);
  };

  const handleMapClick = () => {
    setSelectedMarker(null);
  };

  const markers = (
    <>
      {Markers.map((marker: MarkerElement) => (
        <MapMarker
          key={marker.id}
          marker={marker}
          onClick={handleMarkerClick}
        />
      ))}
    </>
  );

  return (
    <>
      <Map onClick={handleMapClick}>{markers}</Map>
      {selectedMarker !== null && <MarkerDetails marker={selectedMarker} />}
    </>
  );
}
