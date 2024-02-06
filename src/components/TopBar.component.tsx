import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactElement } from "react";

export default function TopBar(): ReactElement {
  return (
    <div className="flex h-10 w-full flex-row items-center justify-between border-b border-b-neutral-400 shadow-md">
      <div className="md:w-72 md:border-r md:border-r-neutral-400">
        <h1 className="ml-3 text-lg font-bold">Jimmy Bondu</h1>
      </div>
      <div>
        <ul className="mr-3 flex flex-row items-center justify-end space-x-5">
          <li className="mt-1">
            <a
              href="http://linkedin.com/in/jbondu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="size-5 md:size-6" />
            </a>
          </li>
          <li className="mt-1">
            <a href="mailto:jimmy.bondu@zoho.com?subject=Hello%Jimmy">
              <FontAwesomeIcon icon={faEnvelope} className="size-5 md:size-6" />
            </a>
          </li>
          <li className="mt-1">
            <a href="/resumr/resume.pdf">
              <FontAwesomeIcon icon={faFilePdf} className="size-5 md:size-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
