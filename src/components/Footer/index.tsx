import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://twitter.com/cleissonom"
            target="_blank"
            rel="noreferrer"
            className={styles.twitter}
            title="Twitter"
          >
            <FaTwitter />
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/cleissonom"
            className={styles.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/cleissonom"
            className={styles.github}
            title="Github"
          >
            <FaGithub />
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}
