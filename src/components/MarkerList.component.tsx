import {
  faBriefcase,
  faGraduationCap,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DivIcon, MarkerCluster, divIcon } from "leaflet";
import { Dispatch, ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Category } from "../enums/Category.enum";
import { Panel } from "../enums/Panel.enum";

import { ActionPanels } from "../types/ActionPanels.type";
import { CustomIcon } from "../types/CustomIcon.type";
import { MarkerElement } from "../types/MarkerElement.type";

export default function MarkerList({
  markers,
  onClick,
}: {
  markers: MarkerElement[];
  onClick: {
    setMarker: (marker: MarkerElement) => void;
    dispatchPanels: Dispatch<ActionPanels>;
  };
}): ReactElement {
  const { setMarker, dispatchPanels } = onClick;

  return (
    <MarkerClusterGroup
      chunkedLoading
      showCoverageOnHover={false}
      iconCreateFunction={customClusterIcon}
      onClick={() => dispatchPanels({ markerId: "", panel: null })}
    >
      {markers.map((marker: MarkerElement) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={customIcon(marker.category)}
          eventHandlers={{
            click: () => {
              setMarker(marker);
              dispatchPanels({ markerId: marker.id, panel: Panel.MARKER });
            },
          }}
        ></Marker>
      ))}
    </MarkerClusterGroup>
  );
}

const customIcon = (category: Category): DivIcon => {
  const { icon, bgColor } = getIcon(category);

  return divIcon({
    html: renderToString(
      <div
        className={`${bgColor} flex size-8 -translate-x-1 -translate-y-1 items-center justify-center rounded-full border-[3px] border-white text-white shadow-md`}
      >
        <div className="flex h-3/4 w-3/4 items-center justify-center">
          {icon}
        </div>
      </div>,
    ),
  });
};

// This function must be present for Tailwind to interpret the background color correctly
const getIcon = (category: Category): CustomIcon => {
  const iconClass = "size-4";

  switch (category) {
    case Category.ACTIVITY: {
      return {
        icon: <FontAwesomeIcon icon={faHashtag} className={iconClass} />,
        bgColor: "bg-green-400",
      };
    }
    case Category.EDUCATION: {
      return {
        icon: <FontAwesomeIcon icon={faGraduationCap} className={iconClass} />,
        bgColor: "bg-blue-400",
      };
    }
    case Category.WORK: {
      return {
        icon: <FontAwesomeIcon icon={faBriefcase} className={iconClass} />,
        bgColor: "bg-orange-400",
      };
    }
    default: {
      throw new Error("getIcon Error: Unrecognized category");
    }
  }
};

function customClusterIcon(cluster: MarkerCluster): DivIcon {
  return divIcon({
    html: renderToString(
      <div className="flex size-9 -translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-amber-400 opacity-80 shadow-sm">
        <div className="flex h-3/4 w-3/4 items-center justify-center rounded-full bg-amber-400 opacity-90">
          <span className="bg-amber-400 text-base font-semibold leading-none text-white">
            {cluster.getChildCount()}
          </span>
        </div>
      </div>,
    ),
  });
}
