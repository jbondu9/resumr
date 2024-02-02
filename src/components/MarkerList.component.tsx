import {
  faBriefcase,
  faGraduationCap,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DivIcon, divIcon } from "leaflet";
import { Dispatch, ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { Marker } from "react-leaflet";

import { Category } from "../enums/Category.enum";
import { Panel } from "../enums/Panel.enum";

import { CustomIcon } from "../types/CustomIcon.type";
import { MarkerElement } from "../types/MarkerElement.type";

export default function MarkerList({
  markers,
  onClick,
}: {
  markers: MarkerElement[];
  onClick: {
    setMarker: (marker: MarkerElement) => void;
    dispatchPanels: Dispatch<Panel>;
  };
}): ReactElement {
  const { setMarker, dispatchPanels } = onClick;

  return (
    <>
      {markers.map((marker: MarkerElement) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={customIcon(marker.category)}
          eventHandlers={{
            click: () => {
              setMarker(marker);
              dispatchPanels(Panel.MARKER);
            },
          }}
        ></Marker>
      ))}
    </>
  );
}

const customIcon = (category: Category): DivIcon => {
  const { icon, bgColor } = getIcon(category);

  return divIcon({
    html: renderToString(
      <div
        className={`${bgColor} flex size-6 -translate-x-1 -translate-y-1 items-center justify-center rounded-full text-white shadow-md outline outline-2 outline-white`}
      >
        {icon}
      </div>,
    ),
  });
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
      throw new Error("getIcon Error: Unrecognized category");
    }
  }
};
