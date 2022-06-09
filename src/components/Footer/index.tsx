import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiExercism, SiHackerrank, SiFreecodecamp } from "react-icons/si";
import styles from "./styles.module.scss";

const socialButtons = [
  {
    href: "https://github.com/cleissonom",
    name: "github",
    title: "Github",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/cleissonom",
    name: "linkedin",
    title: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.freecodecamp.org/cleissonom",
    name: "freeCodeCamp",
    title: "freeCodeCamp",
    icon: <SiFreecodecamp />,
  },
  {
    href: "https://www.freecodecamp.org/cleissonom",
    name: "twitter",
    title: "Twitter",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.hackerrank.com/cleissonconstc",
    name: "hackerrank",
    title: "Hackerrank",
    icon: <SiHackerrank />,
  },
  {
    href: "https://exercism.org/profiles/cleissonom",
    name: "exercism",
    title: "Exercism",
    icon: <SiExercism />,
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        {socialButtons.map((button) => {
          return (
            <li key={button.name}>
              <a
                target="_blank"
                rel="noreferrer"
                href={button.href}
                className={styles[`${button.name}`]}
                title={button.title}
              >
                {button.icon}
                {button.title}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
