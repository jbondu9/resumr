import { Skill } from "../enums/Skill.enum";
import { Tag } from "../enums/Tag.enum";

export type Filter = {
  skills: Skill[];
  tags: Tag[];
};

export type FilterKey = keyof Filter;
