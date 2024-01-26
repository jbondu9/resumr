import { ReactElement } from "react";

import { Markers } from "../constants/Markers.constant";

import { Skill } from "../enums/Skill.enum";
import { Tag } from "../enums/Tag.enum";

import { FilterKey } from "../types/Filter.type";

export default function FilterPanel({
  onClick,
}: {
  onClick: (filterValue: Skill | Tag, filterKey: FilterKey) => void;
}): ReactElement {
  const tags: string[] = [];
  const skills: string[] = [];

  for (const tag in Tag) {
    tags.push(tag);
  }

  for (const skill in Skill) {
    skills.push(skill);
  }

  return (
    <>
      <h1>{Markers.length} items in total</h1>
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
      <div>
        <h2>Skills ({skills.length})</h2>
        <ul>
          {skills.map((skill: string) => (
            <li key={skill.toLowerCase()}>
              <button
                type="button"
                onClick={() => onClick(skill as Skill, "skills")}
              >
                {skill.toLocaleLowerCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
