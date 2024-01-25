import { ReactElement } from "react";

import { Skill } from "../enums/Skill.enum";
import { Tag } from "../enums/Tag.enum";
import { FilterKey } from "../types/Filter.type";

export default function MapFilterPanel({
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
    <div>
      <div>
        <span></span>
      </div>
      <div>
        <div>
          <span>Tags ({tags.length})</span>
        </div>
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
        <div>
          <span>Skills ({skills.length})</span>
        </div>
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
    </div>
  );
}
