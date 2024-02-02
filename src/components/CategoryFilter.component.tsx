import classNames from "classnames";
import { Dispatch, ReactElement } from "react";

import { Category } from "../enums/Category.enum";
import { ActionFilters } from "../types/ActionFilters.type";
import { FilterTypeAction } from "../enums/FilterTypeAction.enum";

export function CategoryFilter({
  category,
  dispatch,
  amount,
  active = true,
}: {
  category: Category;
  dispatch: Dispatch<ActionFilters>;
  amount?: number;
  active?: boolean;
}): ReactElement {
  const categoryElement = Categories.find(
    (c: CategoryElement) => c.name === category,
  )!;

  const categoryName = (tag: CategoryElement): string => {
    let tagName = tag.name.toLocaleLowerCase();
    if (tag.emoji.length > 0) {
      tagName += " " + tag.emoji;
    }
    return tagName;
  };

  const buttonClass = (category: CategoryElement): string =>
    classNames(
      `${category.color} flex w-full flex-row items-baseline text-left capitalize`,
      { "opacity-50": !active },
    );

  const spanClass = (category: CategoryElement): string =>
    classNames(
      `${category.bgColor} block flex flex-row items-center justify-center mr-1 size-6 text-white text-inherit rounded-full`,
    );

  return (
    <button
      type="button"
      className={buttonClass(categoryElement)}
      onClick={() =>
        dispatch({
          type: FilterTypeAction.TOGGLE_CAT_FILTER,
          selectedFilter: category,
        })
      }
    >
      <span className={spanClass(categoryElement)}>{amount}</span>
      {categoryName(categoryElement)}
    </button>
  );
}

type CategoryElement = {
  name: Category;
  color: string;
  bgColor: string;
  emoji: string;
};

// This constant must be present for Tailwind to interpret the colors correctly
const Categories: CategoryElement[] = [
  {
    name: Category.ACTIVITY,
    color: "text-green-400",
    bgColor: "bg-green-400",
    emoji: "#️⃣",
  },
  {
    name: Category.EDUCATION,
    color: "text-blue-400",
    bgColor: "bg-blue-400",
    emoji: "🎓",
  },
  {
    name: Category.WORK,
    color: "text-orange-400",
    bgColor: "bg-orange-400",
    emoji: "💼",
  },
];
