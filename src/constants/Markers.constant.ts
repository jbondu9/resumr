import { Activities } from "./Activities.constant";
import { Career } from "./Career.constant";
import { Education } from "./Education.constant";

import { MarkerElement } from "../types/MarkerElement.type";

export const Markers: MarkerElement[] = [
  ...Activities,
  ...Career,
  ...Education,
];
