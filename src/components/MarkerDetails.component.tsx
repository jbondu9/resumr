import { ReactElement } from "react";

import { Skill } from "../enums/Skill.enum";
import { MarkerElement } from "../types/MarkerElement.type";

export default function MarkerDetails({
  marker,
}: {
  marker: MarkerElement;
}): ReactElement {
  return (
    <div>
      <h1>{marker.title}</h1>
      {typeof marker.subtitle !== "undefined" && marker.subtitle.length > 0 && (
        <h2>{marker.subtitle}</h2>
      )}
      <p>{marker.description}</p>
      {typeof marker.skills !== "undefined" && marker.skills.length > 0 && (
        <ul>
          {marker.skills.map((skill: Skill) => (
            <li key={skill.toLowerCase() + "-" + marker.id}>
              {skill.toLocaleLowerCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
