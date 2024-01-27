import { ReactElement } from "react";

export default function AboutPanel(): ReactElement {
  return (
    <>
      <div>
        <div>
          <img src="src/assets/images/profile-pic.jpg" alt="Me" />
          <h1>Jimmy Bondu</h1>
          <h2>Fullstack web and data developer</h2>
        </div>
        <div>
          <h3>Me in 2023</h3>
          <ul>
            <li>879 contributions on GitHub</li>
            <li>477km run with Strava</li>
            <li>898 boulders climbed in an Arkose hall</li>
          </ul>
        </div>
      </div>
      <div>
        <p>Hi!</p>
        <p>
          My name is Jimmy and I'm a fullstack web and data developer. Keen on
          building impactful software that empower people, I'm looking for a new
          opportunity where high tech could serve people who work day-to-day to
          change our society.
        </p>
        <p>
          If you're looking for someone motivated, eager to learn and committed
          to his work, don't hesitate to contact me to see if can work together.
        </p>
        <p>
          On top of that, I'm a runner, an hiker and a rock climber addict, and
          I love to eat delicious food and share my best spots!
        </p>
      </div>
      <div>
        <ul>
          <li>
            <a href="mailto:jimmy.bondu@zoho.com">Email</a>
          </li>
          <li>
            <a
              href="http://linkedin.com/in/jbondu"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="http://github.com/jbondu9"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
