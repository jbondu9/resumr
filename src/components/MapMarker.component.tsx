import { ReactElement } from "react";
import { Marker } from "react-leaflet";

import { MarkerElement } from "../types/MarkerElement.type";

export default function MapMarker({
  marker,
  onClick,
}: {
  marker: MarkerElement;
  onClick: (marker: MarkerElement) => void;
}): ReactElement {
  return (
    <Marker
      position={marker.position}
      eventHandlers={{
        click: () => {
          onClick(marker);
        },
      }}
    ></Marker>
  );
}
