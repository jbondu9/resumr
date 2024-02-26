import classNames from "classnames";
import Hammer from "hammerjs";
import { useEffect, useReducer, useRef, useState } from "react";

import "./App.css";

import About from "./components/About.component";
import Filters from "./components/Filters.component";
import Map from "./components/Map.component";
import MarkerDetails from "./components/MarkerDetails.component";
import MarkerList from "./components/MarkerList.component";
import TopBar from "./components/TopBar.component";

import { Markers } from "./constants/Markers.constant";

import { MarkerElement } from "./types/MarkerElement.type";

import { filtersReducer, initialFilters } from "./reducers/filters.reducer";
import { initialPanels, panelsReducer } from "./reducers/panels.reducer";

import { filterMarkers } from "./utils/filterMarkers";

export default function App() {
  const [filters, dispatchFilters] = useReducer(filtersReducer, initialFilters);

  let markers = Markers;

  markers = filterMarkers(markers, filters);

  const [marker, setMarker] = useState<MarkerElement>(
    markers.length > 0 ? markers[0] : Markers[0],
  );
  const [size, setSize] = useState("translate-y-2/3");

  const [panels, dispatchPanels] = useReducer(panelsReducer, initialPanels);

  const ref = useRef<HTMLDivElement>(null);

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
          if (size === "translate-y-0") {
            setSize("translate-y-2/3"); // shrink
          } else {
            dispatchPanels({ markerId: "", panel: null });
          }
        }
      });

      return () => {
        hammer.destroy();
      };
    }
  }, [size]);

  const markerDetailsClass = classNames(
    "absolute right-0 top-10 z-[1000] w-full transition-transform md:top-10 md:w-72 md:translate-y-0",
    size,
    { "translate-y-full md:translate-x-full": !panels.makerPanel },
  );

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <TopBar />
      <div className={filtersClass}>
        <Filters
          filters={filters}
          active={panels.filterPanel}
          dispatcher={{ dispatchFilters, dispatchPanels }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-10">
        <Map onClick={dispatchPanels}>
          <MarkerList
            markers={markers}
            onClick={{ setMarker, dispatchPanels }}
          />
        </Map>
      </div>
      <div className={aboutClass}>
        <About active={panels.aboutPanel} dispatcher={dispatchPanels} />
      </div>
      <div className={markerDetailsClass} ref={ref}>
        <MarkerDetails marker={marker} />
      </div>
      {panels.makerPanel && size === "translate-y-2/3" && (
        <div className="absolute bottom-0 z-[1000] h-1 w-full bg-white shadow-[0px_-8px_16px_rgba(255,255,255,.6)] md:hidden"></div>
      )}
    </main>
  );
}
