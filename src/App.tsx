import "leaflet/dist/leaflet.css";

import { ReactElement, useState } from "react";

import "./App.css";

import FilterPanel from "./components/FilterPanel.component";
import Map from "./components/Map.component";
import MarkerDetails from "./components/MarkerDetails.component";
import MarkerList from "./components/MarkerList.component";

import { Markers } from "./constants/Markers.constant";

import { Category } from "./enums/Category.enum";
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

  const handleMenuClick = (
    filterValue: Tag | Category,
    filterKey: FilterKey,
  ) => {
    const newSelectedFilters: Filter = {
      categories: [],
      tags: [],
      ...selectedFilters,
    };

    const filterArray =
      filterKey === "tags"
        ? newSelectedFilters.tags
        : newSelectedFilters.categories;
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

    const categoryMatches =
      !selectedFilters.categories.length ||
      selectedFilters.categories.includes(marker.category);
    const tagMatches =
      !selectedFilters.tags.length ||
      selectedFilters.tags.some((t) => marker.tags?.includes(t));

    return categoryMatches && tagMatches;
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
