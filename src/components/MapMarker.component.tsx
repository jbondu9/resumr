import { ReactElement } from "react";
import { Marker } from "react-leaflet";

import { MarkerElement } from "../types/MarkerElement.type";

export default function MapMarker({
  marker,
}: {
  marker: MarkerElement;
}): ReactElement {
  return <Marker position={marker.position}></Marker>;
}
