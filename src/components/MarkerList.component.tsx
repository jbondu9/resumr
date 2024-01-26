import { ReactElement } from "react";
import { Marker } from "react-leaflet";

import { MarkerElement } from "../types/MarkerElement.type";

export default function MarkerList({
  markers,
  onClick,
}: {
  markers: MarkerElement[];
  onClick: (marker: MarkerElement) => void;
}): ReactElement {
  return (
    <>
      {markers.map((marker: MarkerElement) => (
        <Marker
          key={marker.id}
          position={marker.position}
          eventHandlers={{
            click: () => {
              onClick(marker);
            },
          }}
        ></Marker>
      ))}
    </>
  );
}
