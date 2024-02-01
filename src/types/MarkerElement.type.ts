import { LatLngExpression } from "leaflet";

import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";

export type MarkerElement = {
  id: string;
  position: LatLngExpression;
  category: Category;
  title: string;
  subtitle?: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  tags: Tag[];
};
