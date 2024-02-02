import { useReducer, useState } from "react";

import "./App.css";

import About from "./components/About.component";
import Filters from "./components/Filters.component";
import Map from "./components/Map.component";
import MarkerDetails from "./components/MarkerDetails.component";
import MarkerList from "./components/MarkerList.component";

import { Markers } from "./constants/Markers.constant";
import { MarkerElement } from "./types/MarkerElement.type";
import { filtersReducer, initialFilters } from "./reducers/filters.reducer";
import { filterMarkers } from "./utils/filterMarkers";

export default function App() {
  const [marker, setMarker] = useState<MarkerElement | null>(null);
  const [filters, dispatch] = useReducer(filtersReducer, initialFilters);

  let markers = Markers;

  markers = filterMarkers(markers, filters);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div className="absolute left-0 top-0 z-[1000] w-3/5 -translate-x-full md:w-72 md:translate-x-0">
        <Filters filters={filters} dispatch={dispatch} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <Map>
          <MarkerList markers={markers} />
        </Map>
      </div>
      <div className="absolute right-0 top-0 z-[1000] w-3/5 translate-x-full md:w-72">
        <About />
      </div>
      {marker && (
        <div className="absolute bottom-0 right-0 z-[1000] w-full translate-y-2/3 md:top-0 md:w-72">
          <MarkerDetails marker={marker} />
        </div>
      )}
    </main>
  );
}
