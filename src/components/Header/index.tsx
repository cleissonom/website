import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/images/bgLogo.png"
              alt="Image Profile"
              width="50"
              height="50"
              layout="fixed"
            />
            <h1>CleissonOM</h1>
          </a>
        </Link>
        <button></button>
      </div>
      <nav>
        <Link as={"/"} href="/">
          <a className={styles.activeNav}>Home</a>
        </Link>
        <Link as={"/projects"} href="/projects">
          <a>Projects</a>
        </Link>
        <Link as={"/experiences"} href="/experiences">
          <a>Experiences</a>
        </Link>
        <Link as={"/blog"} href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </header>
  );
}
