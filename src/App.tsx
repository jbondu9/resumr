import "leaflet/dist/leaflet.css";

import { ReactElement } from "react";

import "./App.css";

import Map from "./components/Map.component";
import MapMarker from "./components/MapMarker.component";
import { Markers } from "./constants/Markers.constant";
import { MarkerElement } from "./types/MarkerElement.type";

export default function App(): ReactElement {
  const markers = (
    <>
      {Markers.map((marker: MarkerElement) => (
        <MapMarker key={marker.id} marker={marker} />
      ))}
    </>
  );
  return <Map>{markers}</Map>;
}
