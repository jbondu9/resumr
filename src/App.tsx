import classNames from "classnames";
import Hammer from "hammerjs";
import { useEffect, useReducer, useRef, useState } from "react";

import "./App.css";

import About from "./components/About.component";
import Filters from "./components/Filters.component";
import Map from "./components/Map.component";
import MarkerDetails from "./components/MarkerDetails.component";
import MarkerList from "./components/MarkerList.component";

import { Markers } from "./constants/Markers.constant";

import { MarkerElement } from "./types/MarkerElement.type";

import { filtersReducer, initialFilters } from "./reducers/filters.reducer";
import { initialPanels, panelsReducer } from "./reducers/panels.reducer";

import { filterMarkers } from "./utils/filterMarkers";
import TopBar from "./components/TopBar.component";

export default function App() {
  const [marker, setMarker] = useState<MarkerElement | null>(null);
  const [size, setSize] = useState("translate-y-2/3");

  const [filters, dispatchFilters] = useReducer(filtersReducer, initialFilters);
  const [panels, dispatchPanels] = useReducer(panelsReducer, initialPanels);

  const ref = useRef<HTMLDivElement>(null);

  let markers = Markers;

  markers = filterMarkers(markers, filters);

  const filtersClass = classNames(
    "absolute left-0 top-10 z-[1000] w-3/5 transition-transform md:w-72 md:translate-x-0",
    { "-translate-x-full": !panels.filterPanel },
  );

  const aboutClass = classNames(
    "absolute right-0 top-10 z-[1000] w-3/5 transition-transform md:w-72",
    { "translate-x-full": !panels.aboutPanel },
  );

  useEffect(() => {
    if (ref.current) {
      const hammer = new Hammer(ref.current);
      hammer.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });

      hammer.on("panup pandown", (e) => {
        if (e.direction === Hammer.DIRECTION_UP) {
          setSize("translate-y-0"); // grow
        } else if (e.direction === Hammer.DIRECTION_DOWN) {
          setSize("translate-y-2/3"); // shrink
        }
      });

      return () => {
        hammer.destroy();
      };
    }
  }, [marker]);

  const markerDetailsClass = classNames(
    "absolute bottom-0 right-0 z-[1000] w-full transition-transform md:top-10 md:w-72 md:translate-y-0",
    size,
  );

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <TopBar />
      <div className={filtersClass}>
        <Filters
          filters={filters}
          active={panels.filterPanel}
          dispatcher={{ dispatchFilters, dispatchPanels, setMarker }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-10">
        <Map onClick={{ setMarker, dispatchPanels }}>
          <MarkerList
            markers={markers}
            onClick={{ setMarker, dispatchPanels }}
          />
        </Map>
      </div>
      <div className={aboutClass}>
        <About
          active={panels.aboutPanel}
          dispatcher={{ dispatchPanels, setMarker }}
        />
      </div>
      {marker && (
        <div className={markerDetailsClass} ref={ref}>
          <MarkerDetails marker={marker} />
        </div>
      )}
    </main>
  );
}
