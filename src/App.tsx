import "leaflet/dist/leaflet.css";

import { ReactElement, useState } from "react";

import "./App.css";

import FilterPanel from "./components/FilterPanel.component";
import Map from "./components/Map.component";
import MarkerDetails from "./components/MarkerDetails.component";
import MarkerList from "./components/MarkerList.component";

import { Markers } from "./constants/Markers.constant";

import { Skill } from "./enums/Skill.enum";
import { Tag } from "./enums/Tag.enum";

import { Filter, FilterKey } from "./types/Filter.type";
import { MarkerElement } from "./types/MarkerElement.type";

export default function App(): ReactElement {
  const [selectedMarker, setSelectedMarker] = useState<MarkerElement | null>(
    null,
  );
  const [selectedFilters, setSelectedFilters] = useState<Filter | null>(null);

  const handleMarkerClick = (marker: MarkerElement) => {
    setSelectedMarker(marker);
  };

  const handleMapClick = () => {
    setSelectedMarker(null);
  };

  const handleMenuClick = (filterValue: Skill | Tag, filterKey: FilterKey) => {
    const newSelectedFilters: Filter = {
      skills: [],
      tags: [],
      ...selectedFilters,
    };

    const filterArray =
      filterKey === "skills"
        ? newSelectedFilters.skills
        : newSelectedFilters.tags;
    const index = filterArray.indexOf(filterValue as never);

    if (index >= 0) {
      filterArray.splice(index, 1);
    } else {
      filterArray.push(filterValue as never);
    }

    setSelectedFilters(newSelectedFilters);
  };

  const markers = Markers.filter((marker: MarkerElement) => {
    if (!selectedFilters) return true;

    const tagMatches =
      !selectedFilters.tags.length || selectedFilters.tags.includes(marker.tag);
    const skillMatches =
      !selectedFilters.skills.length ||
      selectedFilters.skills.some((s) => marker.skills?.includes(s));

    return tagMatches && skillMatches;
  });

  return (
    <main>
      <section>
        <FilterPanel onClick={handleMenuClick} />
      </section>
      <section>
        <Map onClick={handleMapClick}>
          <MarkerList markers={markers} onClick={handleMarkerClick} />
        </Map>
      </section>
      {selectedMarker !== null && (
        <section>
          <MarkerDetails marker={selectedMarker} />
        </section>
      )}
    </main>
  );
}
