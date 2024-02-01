import {
  faBriefcase,
  faGraduationCap,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactElement } from "react";

import { TagBadge } from "./TagFilter.component";

import { Category } from "../enums/Category.enum";
import { CustomIcon } from "../types/CustomIcon.type";
import { MarkerElement } from "../types/MarkerElement.type";

export default function MarkerDetails({
  marker,
}: {
  marker: MarkerElement;
}): ReactElement {
  const formatDate = (date: Date): string =>
    date.toLocaleDateString("en-US", { year: "numeric", month: "short" });

  const timePeriod = (startDate: Date, endDate?: Date): string => {
    let res = formatDate(startDate);
    if (endDate) {
      res = `${res} - ${formatDate(endDate)}`;
    }
    return res;
  };

  return (
    <div className="h-screen overflow-hidden rounded-xl shadow-md md:rounded-none md:border-l md:border-l-amber-400">
      <div className="h-full bg-white p-3 md:py-3 md:pl-3 md:pr-0">
        <div className="flex h-full flex-col overflow-hidden">
          <div className="items-top flex shrink-0 flex-row md:mr-3">
            {customHeader(marker.category)}
            <div className="flex flex-col font-bold">
              <h1 className="text-base leading-none">{marker.title}</h1>
              {(marker.subtitle || marker.startDate) && (
                <div className="flex flex-row items-start justify-between">
                  {marker.subtitle && marker.subtitle.length > 0 && (
                    <h2 className="text-sm leading-none">{marker.subtitle}</h2>
                  )}
                  {marker.startDate && (
                    <span className="text-right font-mono text-xs">
                      ({timePeriod(marker.startDate, marker.endDate)})
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 overflow-x-auto border-t border-neutral-400 text-sm md:mr-3">
            <p className="mt-2 italic">{marker.description}</p>
            {marker.tags.length > 0 && (
              <div className="mt-2 text-xs">
                <ul className="flex flex-row flex-wrap">
                  {marker.tags.map((t) => (
                    <li key={marker.id + t} className="ml-1 shrink-0 py-1">
                      <TagBadge tag={t} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const customHeader = (category: Category): ReactElement => {
  const { icon, bgColor } = getIcon(category);

  return (
    <div
      className={`${bgColor} mr-2 flex size-8 shrink-0 items-center justify-center rounded-full text-white`}
    >
      {icon}
    </div>
  );
};

// This function must be present for Tailwind to interpret the background color correctly
const getIcon = (category: Category): CustomIcon => {
  switch (category) {
    case Category.ACTIVITY: {
      return {
        icon: <FontAwesomeIcon icon={faHashtag} className="size-4" />,
        bgColor: "bg-green-400",
      };
    }
    case Category.EDUCATION: {
      return {
        icon: <FontAwesomeIcon icon={faGraduationCap} className="size-4" />,
        bgColor: "bg-blue-400",
      };
    }
    case Category.WORK: {
      return {
        icon: <FontAwesomeIcon icon={faBriefcase} className="size-4" />,
        bgColor: "bg-orange-400",
      };
    }
    default: {
      throw new Error("CustomIcon Error: Unrecognized category");
    }
  }
};
