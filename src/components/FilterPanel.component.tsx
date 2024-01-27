import { ReactElement } from "react";

import { Markers } from "../constants/Markers.constant";

import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";

import { FilterKey } from "../types/Filter.type";

export default function FilterPanel({
  onClick,
}: {
  onClick: (filterValue: Tag | Category, filterKey: FilterKey) => void;
}): ReactElement {
  const categories: string[] = [];
  const tags: string[] = [];

  for (const category in Category) {
    categories.push(category);
  }

  for (const tag in Tag) {
    tags.push(tag);
  }

  return (
    <>
      <h1>{Markers.length} items in total</h1>
      <div>
        <h2>Categories ({categories.length})</h2>
        <ul>
          {categories.map((category: string) => (
            <li key={category.toLowerCase()}>
              <button
                type="button"
                onClick={() => onClick(category as Category, "categories")}
              >
                {category.toLocaleLowerCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Tags ({tags.length})</h2>
        <ul>
          {tags.map((tag: string) => (
            <li key={tag.toLowerCase()}>
              <button type="button" onClick={() => onClick(tag as Tag, "tags")}>
                {tag.toLocaleLowerCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
