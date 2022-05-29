import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            src="/images/bgLogo.png"
            alt="Image Profile"
            width="30"
            height="30"
            layout="fixed"
          />
          <h1>CleissonOM</h1>
        </a>
      </Link>
      <nav>
        <Link as={"/"} href="/">
          <a>Home</a>
        </Link>
        <Link as={"/projects"} href="/projects">
          <a>Projects</a>
        </Link>
        <Link as={"/blog"} href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
      <div>
        <label>Language: </label>
        <select name="language" id="language">
          {/* <option value="pt">PT</option> */}
          <option value="en">EN</option>
          {/* <option value="fr">FR</option>
          <option value="es">ES</option> */}
        </select>
      </div>
    </header>
  );
}
