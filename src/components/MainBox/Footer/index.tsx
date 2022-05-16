import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImRocket } from "react-icons/im";
import { VscBracketDot } from "react-icons/vsc";
import styles from "./styles.module.scss";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <a
        href="https://twitter.com/cleissonom"
        title="Twitter button"
        className={styles.twitter}
      >
        {theme === "dark" ? (
          <FaTwitter size="1.75rem" color="#fff" />
        ) : (
          <FaTwitter size="1.75rem" color="#000" />
        )}
      </a>
      <a
        href="https://linkedin.com/in/cleissonom"
        title="Linkedin button"
        className={styles.linkedin}
      >
        {theme === "dark" ? (
          <FaLinkedin size="1.75rem" color="#fff" />
        ) : (
          <FaLinkedin size="1.75rem" color="#000" />
        )}
      </a>
      <a
        href="https://github.com/cleissonom"
        title="Github button"
        className={styles.github}
      >
        {theme === "dark" ? (
          <FaGithub size="1.75rem" color="#fff" />
        ) : (
          <FaGithub size="1.75rem" color="#000" />
        )}
      </a>
      <a
        href="https://github.com/cleissonom/website"
        title="SourceCode button"
        className={styles.source}
      >
        {theme === "dark" ? (
          <VscBracketDot size="1.75rem" color="#fff" />
        ) : (
          <VscBracketDot size="1.75rem" color="#000" />
        )}
      </a>
      <a
        href="https://rocketseat.com/cleissonom"
        title="Rocketseat button"
        className={styles.rocketseat}
      >
        {theme === "dark" ? (
          <ImRocket size="1.75rem" color="#fff" />
        ) : (
          <ImRocket size="1.75rem" color="#000" />
        )}
      </a>
    </footer>
  );
}
