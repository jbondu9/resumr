import { ReactElement } from "react";

import { Tag } from "../enums/Tag.enum";
import { MarkerElement } from "../types/MarkerElement.type";

export default function MarkerDetails({
  marker,
}: {
  marker: MarkerElement;
}): ReactElement {
  return (
    <>
      <h1>{marker.title}</h1>
      {typeof marker.subtitle !== "undefined" && marker.subtitle.length > 0 && (
        <h2>{marker.subtitle}</h2>
      )}
      <p>{marker.description}</p>
      {typeof marker.tags !== "undefined" && marker.tags.length > 0 && (
        <ul>
          {marker.tags.map((tag: Tag) => (
            <li key={tag.toLowerCase() + "-" + marker.id}>
              {tag.toLocaleLowerCase()}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
