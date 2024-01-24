import { LatLngExpression } from "leaflet";

import { Skill } from "../enums/Skill.enum";
import { Tag } from "../enums/Tag.enum";

export type MarkerElement = {
  id: string;
  position: LatLngExpression;
  title: string;
  subtitle?: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  skills?: Skill[];
  tag: Tag;
};
