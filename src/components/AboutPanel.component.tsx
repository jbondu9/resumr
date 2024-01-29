import classNames from "classnames";
import { ReactElement, useState } from "react";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutPanel(): ReactElement {
  const [visible, setVisible] = useState(false);

  const menuToggleClass = classNames(
    "leaflet-top leaflet-right w-3/5 text-amber-400 z-[2000] translate-x-full transition-transform md:max-w-72",
    { "translate-x-[1px]": visible },
  );

  const menuClass = classNames(
    "leaflet-top leaflet-right h-full w-3/5 translate-x-full border-l border-amber-400 bg-white transition-transform md:max-w-72",
    { "translate-x-0": visible },
  );

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className={menuToggleClass}>
        <div className="leaflet-control mt-4">
          <button
            className="flex -translate-x-full cursor-pointer flex-col items-center rounded-l-full border-y border-l border-y-amber-400 border-l-amber-400 bg-white py-2 pl-2 pr-1"
            onClick={handleClick}
          >
            {visible ? (
              <FontAwesomeIcon icon={faXmark} className="size-4" />
            ) : (
              <FontAwesomeIcon icon={faUser} className="size-4" />
            )}
          </button>
        </div>
      </div>
      <div className={menuClass}>
        <div className="leaflet-control flex flex-col justify-stretch">
          <div className="mb-4 ml-[10px] flex flex-row items-center">
            <div className="mr-4 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full shadow md:size-16">
              <img
                src="src/assets/images/profile-pic.jpg"
                alt="Me"
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col font-bold">
              <h1 className="text-lg">Jimmy Bondu</h1>
              <h2 className="text-base leading-none">
                Fullstack web and data developer
              </h2>
            </div>
          </div>
          <div className="ml-[10px] overflow-y-auto text-sm">
            <h3 className="mb-2 border-b border-neutral-400 pb-1 uppercase text-neutral-400">
              About me
            </h3>
            <div className="space-y-2 italic">
              <p>Hi!</p>
              <p>
                My name is Jimmy and I'm a fullstack web and data developer.
                Keen on building impactful software that empower people, I'm
                looking for a new opportunity where high tech could serve people
                who work day-to-day to change our society.
              </p>
              <p>
                If you're looking for someone motivated, eager to learn and
                committed to his work, don't hesitate to contact me to see if
                can work together.
              </p>
              <p>
                On top of that, I'm a runner, an hiker and a rock climber
                addict, and I love to eat delicious food and share my best
                spots!
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <a
                href="mailto:jimmy.bondu@zoho.com?subject=Hello%Jimmy"
                className="flex flex-row items-center justify-center space-x-3 rounded-lg bg-amber-400 px-4 py-2 font-semibold shadow hover:ring-1 hover:ring-amber-300 hover:ring-opacity-75"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="size-4"
                  style={{ color: "#ffffff" }}
                />
                <span className="text-white">Contact me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
