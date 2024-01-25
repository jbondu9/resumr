import { ReactElement } from "react";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";

function MapClickHandler({ onClick }: { onClick: () => void }) {
  useMapEvent("click", () => onClick());
  return null;
}

export default function Map({
  children,
  onClick,
}: {
  children?: ReactElement;
  onClick: () => void;
}): ReactElement {
  return (
    <MapContainer center={[46.3408, 2.6033]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
      <MapClickHandler onClick={onClick} />
    </MapContainer>
  );
}
