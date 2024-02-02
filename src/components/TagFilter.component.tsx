import classNames from "classnames";
import { Dispatch, ReactElement } from "react";

import { FilterTypeAction } from "../enums/FilterTypeAction.enum";
import { Tag } from "../enums/Tag.enum";
import { ActionFilters } from "../types/ActionFilters.type";

export function TagFilter({
  tag,
  dispatch,
  amount,
  active = true,
}: {
  tag: Tag;
  dispatch: Dispatch<ActionFilters>;
  amount?: number;
  active?: boolean;
}): ReactElement {
  const tagElement = getTag(tag);

  const buttonClass = (tag: TagElement): string =>
    classNames(
      `${tag.color} flex w-full flex-row items-baseline text-left capitalize`,
      { "opacity-50": !active },
    );

  const spanClass = (tag: TagElement): string =>
    classNames(
      `${tag.bgColor} block flex flex-row items-center justify-center mr-1 size-6 text-white text-inherit rounded-full`,
    );

  return (
    <button
      type="button"
      className={buttonClass(tagElement)}
      onClick={() =>
        dispatch({
          type: FilterTypeAction.TOGGLE_TAG_FILTER,
          selectedFilter: tag,
        })
      }
    >
      <span className={spanClass(tagElement)}>{amount}</span>
      {tagName(tagElement)}
    </button>
  );
}

export function TagBadge({ tag }: { tag: Tag }): ReactElement {
  const tagElement = getTag(tag);

  const badgeClass = (tag: TagElement): string =>
    classNames(
      `${tag.bgColor} rounded-lg mb-1 px-2 py-1 text-white shadow mr-1 capitalize`,
    );

  return <span className={badgeClass(tagElement)}>{tagName(tagElement)}</span>;
}

const getTag = (tag: Tag) => Tags.find((t: TagElement) => t.name === tag)!;

const tagName = (tag: TagElement): string => {
  let tagName = tag.name.toLocaleLowerCase();
  if (tag.emoji.length > 0) {
    tagName += " " + tag.emoji;
  }
  return tagName;
};

type TagElement = {
  name: Tag;
  color: string;
  bgColor: string;
  emoji: string;
};

// This constant must be present for Tailwind to interpret the colors correctly
const Tags: TagElement[] = [
  {
    name: Tag.AIRBYTE,
    color: "text-sky-600",
    bgColor: "bg-sky-600",
    emoji: "📑",
  },
  {
    name: Tag.AIRTABLE,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400",
    emoji: "🧮",
  },
  {
    name: Tag.ANGULAR,
    color: "text-red-600",
    bgColor: "bg-red-600",
    emoji: "🛡️",
  },
  {
    name: Tag.BOOTSTRAP,
    color: "text-purple-700",
    bgColor: "bg-purple-700",
    emoji: "💄",
  },
  {
    name: Tag.C,
    color: "text-gray-400",
    bgColor: "bg-gray-400",
    emoji: "",
  },
  {
    name: Tag.CLIMBING,
    color: "text-stone-400",
    bgColor: "bg-stone-400",
    emoji: "🧗",
  },
  {
    name: Tag.CPP,
    color: "text-sky-600",
    bgColor: "bg-sky-600",
    emoji: "",
  },
  {
    name: Tag.CSS,
    color: "text-blue-800",
    bgColor: "bg-blue-800",
    emoji: "",
  },
  {
    name: Tag.DAGSTER,
    color: "text-indigo-600",
    bgColor: "bg-indigo-600",
    emoji: "🐙",
  },
  {
    name: Tag.DBT,
    color: "text-orange-600",
    bgColor: "bg-orange-600",
    emoji: "⚙️",
  },
  {
    name: Tag.EXPRESS,
    color: "text-black",
    bgColor: "bg-black",
    emoji: "",
  },
  {
    name: Tag.GIT,
    color: "text-red-500",
    bgColor: "bg-red-500",
    emoji: "",
  },
  {
    name: Tag.HIKING,
    color: "text-green-700",
    bgColor: "bg-green-700",
    emoji: "🥾",
  },
  {
    name: Tag.HTML,
    color: "text-orange-500",
    bgColor: "bg-orange-500",
    emoji: "",
  },
  {
    name: Tag.JAVA,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500",
    emoji: "☕",
  },
  {
    name: Tag.JAVASCRIPT,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400",
    emoji: "",
  },
  {
    name: Tag.JEST,
    color: "text-pink-900",
    bgColor: "bg-pink-900",
    emoji: "🧦",
  },
  {
    name: Tag.KERAS,
    color: "text-red-700",
    bgColor: "bg-red-700",
    emoji: "",
  },
  {
    name: Tag.MATLAB,
    color: "text-sky-800",
    bgColor: "bg-sky-800",
    emoji: "📈",
  },
  {
    name: Tag.METABASE,
    color: "text-blue-400",
    bgColor: "bg-blue-400",
    emoji: "📊",
  },
  {
    name: Tag.MONGO,
    color: "text-green-400",
    bgColor: "bg-green-400",
    emoji: "🍃",
  },
  {
    name: Tag.MONGOOSE,
    color: "text-red-950",
    bgColor: "bg-red-950",
    emoji: "",
  },
  {
    name: Tag.NODE,
    color: "text-lime-500",
    bgColor: "bg-lime-500",
    emoji: "",
  },
  {
    name: Tag.POSTGRES,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    emoji: "🐘",
  },
  {
    name: Tag.PYTHON,
    color: "text-blue-800",
    bgColor: "bg-blue-800",
    emoji: "🐍",
  },
  {
    name: Tag.RESTAURANT,
    color: "text-orange-200",
    bgColor: "bg-orange-200",
    emoji: "🍽️",
  },
  {
    name: Tag.RUNNING,
    color: "text-slate-400",
    bgColor: "bg-slate-400",
    emoji: "🏃",
  },
  {
    name: Tag.SUPERSET,
    color: "text-teal-500",
    bgColor: "bg-teal-500",
    emoji: "📊",
  },
  {
    name: Tag.TYPESCRIPT,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    emoji: "",
  },
];
