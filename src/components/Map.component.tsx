import "leaflet/dist/leaflet.css";

import { Dispatch, ReactElement } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

import { ActionPanels } from "../types/ActionPanels.type";

const MapClickHandler = ({
  dispatchPanels,
}: {
  dispatchPanels: Dispatch<ActionPanels>;
}): null => {
  useMapEvents({
    click: () => {
      dispatchPanels({ markerId: "", panel: null });
    },
  });

  return null; // Render nothing
};

export default function Map({
  onClick,
  children,
}: {
  onClick: Dispatch<ActionPanels>;
  children?: ReactElement;
}): ReactElement {
  return (
    <MapContainer
      center={[46.3408, 2.6033]}
      zoom={5}
      scrollWheelZoom={true}
      minZoom={3}
      maxZoom={16}
      worldCopyJump={true}
    >
      <MapClickHandler dispatchPanels={onClick} />
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
