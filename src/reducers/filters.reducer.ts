import { Category } from "../enums/Category.enum";
import { FilterTypeAction } from "../enums/FilterTypeAction.enum";
import { Tag } from "../enums/Tag.enum";

import { ActionFilters } from "../types/ActionFilters.type";
import { SelectedFilters } from "../types/SelectedFilters.type";

export const initialFilters: SelectedFilters = {
  categories: [],
  tags: [],
};

export const filtersReducer = (
  filters: SelectedFilters,
  action: ActionFilters,
): SelectedFilters => {
  const { selectedFilter, type } = action;

  switch (type) {
    case FilterTypeAction.TOGGLE_CAT_FILTER: {
      if (filters.categories.includes(selectedFilter as Category)) {
        return {
          categories: filters.categories.filter(
            (c) => c !== (selectedFilter as Category),
          ),
          tags: filters.tags,
        };
      } else {
        return {
          categories: [...filters.categories, selectedFilter as Category],
          tags: filters.tags,
        };
      }
    }
    case FilterTypeAction.TOGGLE_TAG_FILTER: {
      if (filters.tags.includes(selectedFilter as Tag)) {
        return {
          categories: filters.categories,
          tags: filters.tags.filter((t) => t !== (selectedFilter as Tag)),
        };
      } else {
        return {
          categories: filters.categories,
          tags: [...filters.tags, selectedFilter as Tag],
        };
      }
    }
    default: {
      new Error("filtersReducer Error: Unrecognized action type");
      return initialFilters;
    }
  }
};
