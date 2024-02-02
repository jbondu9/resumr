import { Category } from "../enums/Category.enum";
import { FilterTypeAction } from "../enums/FilterTypeAction.enum";
import { Tag } from "../enums/Tag.enum";

export type ActionFilters = {
  type: FilterTypeAction;
  selectedFilter: Category | Tag;
};
