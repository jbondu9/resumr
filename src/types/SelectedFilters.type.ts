import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";

export type SelectedFilters = {
  categories: Category[];
  tags: Tag[];
};
