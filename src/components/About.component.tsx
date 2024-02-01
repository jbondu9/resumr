import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactElement } from "react";

export default function About(): ReactElement {
  return (
    <div className="relative">
      <button
        type="button"
        id="about-control"
        className="absolute left-0 top-5 rounded-l-full border-y border-l border-r border-y-amber-400 border-l-amber-400 border-r-white bg-white py-1 pl-2 pr-1 text-amber-400"
      >
        <FontAwesomeIcon icon={faUser} className="size-5" />
      </button>
      <div className="h-screen border-l border-l-amber-400">
        <div className="h-full bg-white py-3 pl-3">
          <div className="flex h-full flex-col overflow-hidden">
            <div className="mb-4 flex shrink-0 flex-row items-center">
              <div className="mr-2 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full shadow">
                <img
                  src="src/assets/images/profile-pic.jpg"
                  alt="Me"
                  className="h-auto w-full"
                />
              </div>
              <div className="flex flex-col font-bold">
                <h1 className="text-base leading-none">Jimmy Bondu</h1>
                <h2 className="text-sm leading-none">
                  Fullstack web and data developer
                </h2>
              </div>
            </div>
            <div className="overflow-y-auto text-sm">
              <h3 className="mb-2 mr-3 border-b border-neutral-400 pb-1 uppercase text-neutral-400">
                About me
              </h3>
              <div className="mr-3 space-y-2 italic">
                <p>Hi!</p>
                <p>
                  My name is Jimmy and I'm a fullstack web and data developer.
                  Keen on building impactful software that empower people, I'm
                  looking for a new opportunity where high tech could serve
                  people who work day-to-day to change our society.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus ac augue vitae est commodo ultricies eget nec tortor.
                  Nam eu pulvinar mi. Pellentesque rutrum lectus sit amet ligula
                  hendrerit, id nec.
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
              <div className="mr-3 mt-4 flex flex-col items-center">
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
      </div>
    </div>
  );
}
