import "leaflet/dist/leaflet.css";

import { ReactElement } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map({
  children,
}: {
  children?: ReactElement;
}): ReactElement {
  return (
    <MapContainer
      center={[46.3408, 2.6033]}
      zoom={5}
      scrollWheelZoom={true}
      minZoom={3}
      maxZoom={16}
    >
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
