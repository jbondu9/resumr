import { MarkerElement } from "../types/MarkerElement.type";
import { SelectedFilters } from "../types/SelectedFilters.type";

export const filterMarkers = (
  markers: MarkerElement[],
  filters: SelectedFilters,
): MarkerElement[] => {
  const { categories, tags } = filters;
  let filteredMarkers: MarkerElement[] = markers;
  if (categories.length > 0) {
    filteredMarkers = filteredMarkers.filter((m) =>
      categories.includes(m.category),
    );
  }
  if (tags.length > 0) {
    filteredMarkers = filteredMarkers.filter(
      (m) => m.tags.length > 0 && m.tags.every((t) => tags.includes(t)),
    );
  }
  return filteredMarkers;
};
