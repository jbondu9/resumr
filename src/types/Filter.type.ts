import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";

export type Filter = {
  categories: Category[];
  tags: Tag[];
};

export type FilterKey = keyof Filter;
