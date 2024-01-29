import classNames from "classnames";
import { ReactElement, useState } from "react";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Markers } from "../constants/Markers.constant";

import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";

import { FilterKey } from "../types/Filter.type";

export default function FilterPanel({
  onClick,
}: {
  onClick: (filterValue: Tag | Category, filterKey: FilterKey) => void;
}): ReactElement {
  const [visible, setVisible] = useState(false);

  const categories: string[] = [];
  const tags: string[] = [];

  for (const category in Category) {
    categories.push(category);
  }

  for (const tag in Tag) {
    tags.push(tag);
  }

  const menuToggleClass = classNames(
    "leaflet-top leaflet-left w-3/5 text-amber-400 z-[2000] transition-transform md:hidden",
    { "translate-x-full": visible },
  );

  const menuClass = classNames(
    "leaflet-top leaflet-left h-full w-3/5 -translate-x-full border-r border-amber-400 bg-white transition-transform md:max-w-72 md:translate-x-0",
    { "translate-x-0": visible },
  );

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className={menuToggleClass}>
        <div className="leaflet-control mt-4">
          <button
            className="flex -translate-x-[11px] cursor-pointer flex-col items-center rounded-r-full border-y border-r border-y-amber-400 border-r-amber-400 bg-white py-2 pl-1 pr-2"
            onClick={handleClick}
          >
            {visible ? (
              <FontAwesomeIcon icon={faXmark} className="size-4" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="size-4" />
            )}
          </button>
        </div>
      </div>
      <div className={menuClass}>
        <div className="leaflet-control flex flex-col justify-stretch">
          <h1 className="mb-4 text-lg font-bold">
            {Markers.length} items in total
          </h1>
          <div className="overflow-y-auto text-sm">
            <div className="mr-[10px]">
              <h2 className="mb-2 border-b border-neutral-400 pb-1 uppercase text-neutral-400">
                Categories ({categories.length})
              </h2>
              <ul className="mb-4 flex flex-col items-start">
                {categories.map((category: string) => (
                  <li key={category.toLowerCase()}>
                    <button
                      className="text-left capitalize"
                      type="button"
                      onClick={() =>
                        onClick(category as Category, "categories")
                      }
                    >
                      {category.toLocaleLowerCase()}
                    </button>
                  </li>
                ))}
              </ul>
              <h2 className="mb-2 border-b border-neutral-400 pb-1 uppercase text-neutral-400">
                Tags ({tags.length})
              </h2>
              <ul className="flex flex-col items-start">
                {tags.map((tag: string) => (
                  <li key={tag.toLowerCase()}>
                    <button
                      className="text-left capitalize"
                      type="button"
                      onClick={() => onClick(tag as Tag, "tags")}
                    >
                      {tag.toLocaleLowerCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
