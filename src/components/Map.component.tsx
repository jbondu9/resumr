import "leaflet/dist/leaflet.css";

import { Dispatch, ReactElement } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

const MapClickHandler = ({
  setMarker,
  dispatchPanels,
}: {
  setMarker: (marker: null) => void;
  dispatchPanels: Dispatch<null>;
}): null => {
  useMapEvents({
    click: () => {
      setMarker(null);
      dispatchPanels(null);
    },
  });

  return null; // Render nothing
};

export default function Map({
  onClick,
  children,
}: {
  onClick: {
    setMarker: (marker: null) => void;
    dispatchPanels: Dispatch<null>;
  };
  children?: ReactElement;
}): ReactElement {
  const { setMarker, dispatchPanels } = onClick;

  return (
    <MapContainer
      center={[46.3408, 2.6033]}
      zoom={5}
      scrollWheelZoom={true}
      minZoom={3}
      maxZoom={16}
    >
      <MapClickHandler setMarker={setMarker} dispatchPanels={dispatchPanels} />
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
