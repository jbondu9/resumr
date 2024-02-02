import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Dispatch, ReactElement } from "react";

import { CategoryFilter } from "./CategoryFilter.component";
import { TagFilter } from "./TagFilter.component";

import { Markers } from "../constants/Markers.constant";

import { Category } from "../enums/Category.enum";
import { Panel } from "../enums/Panel.enum";
import { Tag } from "../enums/Tag.enum";

import { ActionFilters } from "../types/ActionFilters.type";
import { SelectedFilters } from "../types/SelectedFilters.type";

export default function Filters({
  filters,
  active,
  dispatcher,
}: {
  filters: SelectedFilters;
  active: boolean;
  dispatcher: {
    dispatchFilters: Dispatch<ActionFilters>;
    dispatchPanels: Dispatch<Panel>;
    setMarker: (marker: null) => void;
  };
}): ReactElement {
  const { dispatchFilters, dispatchPanels, setMarker } = dispatcher;

  const categories = Markers.map((m) => m.category).reduce<{
    [key in Category]?: number;
  }>((d, c) => {
    if (typeof d[c] !== "undefined") {
      d[c]! += 1;
    } else {
      d[c] = 1;
    }
    return d;
  }, {});

  const tags = Markers.map((m) => m.tags)
    .flat()
    .reduce<{ [key in Tag]?: number }>((d, t) => {
      if (typeof d[t] !== "undefined") {
        d[t]! += 1;
      } else {
        d[t] = 1;
      }
      return d;
    }, {});

  return (
    <div className="relative">
      <button
        type="button"
        id="filter-control"
        className="absolute right-0 top-5 rounded-r-full border-y border-l border-r border-y-amber-400 border-l-white border-r-amber-400 bg-white py-1 pl-1 pr-2 text-amber-400 md:hidden"
        onClick={() => {
          dispatchPanels(Panel.FILTERS);
          setMarker(null);
        }}
      >
        {active ? (
          <FontAwesomeIcon icon={faXmark} className="size-5" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="size-5" />
        )}
      </button>
      <div className="h-screen border-r border-r-amber-400">
        <div className="h-full bg-white py-3 pl-3">
          <div className="flex h-full flex-col overflow-hidden">
            <h1 className="mb-4 text-base font-bold">12 Items</h1>
            <div className="overflow-y-auto text-sm">
              <h3 className="mb-2 mr-3 border-b border-neutral-400 pb-1 uppercase text-neutral-400">
                Categories ({Object.keys(categories).length})
              </h3>
              <ul className="mb-4 mr-3">
                {Object.entries(categories).map((e) => (
                  <li key={e[0]} className="mb-1">
                    <CategoryFilter
                      category={e[0] as Category}
                      dispatch={dispatchFilters}
                      amount={e[1]}
                      active={isActiveCat(e[0] as Category, filters.categories)}
                    />
                  </li>
                ))}
              </ul>
              <h3 className="mb-2 mr-3 border-b border-neutral-400 pb-1 uppercase text-neutral-400">
                Tags ({Object.keys(tags).length})
              </h3>
              <ul className="mr-3">
                {Object.entries(tags).map((e) => (
                  <li key={e[0]} className="mb-1">
                    <TagFilter
                      tag={e[0] as Tag}
                      dispatch={dispatchFilters}
                      amount={e[1]}
                      active={isActiveTag(e[0] as Tag, filters.tags)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const isActiveCat = (category: Category, categories: Category[]): boolean =>
  categories.length === 0 || categories.includes(category);

const isActiveTag = (tag: Tag, tags: Tag[]): boolean =>
  tags.length === 0 || tags.includes(tag);
