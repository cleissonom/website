import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Projects() {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Projects</title>
      </Head>
      <main className={styles.container}>
        <h1>Projects</h1>
        <hr />
        <div className={styles.projects}>
          <section>
            <picture className={styles.image}>
              <Image
                src="/images/projects/websiteImage.png"
                loading="lazy"
                alt="Website image"
                width="3840"
                height="2160"
                layout="intrinsic"
              />
            </picture>
            <h2>Personal Website</h2>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cleisson.vercel.app"
              >
                Link
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cleissonom/website"
              >
                Source
              </a>
            </div>
            <Link as={"/project/website"} href="/project/website">
              <a className={styles.seeMore}>See More...</a>
            </Link>
          </section>
          <section>
            <picture className={styles.image}>
              <Image
                src="/images/projects/idealtiImage.png"
                loading="lazy"
                alt="IdealTi store image"
                width="3840"
                height="2160"
                layout="intrinsic"
              />
            </picture>
            <h2>IdealTi Store</h2>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ideal-store.vercel.app/"
              >
                Link
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cleissonom/desafio-03/tree/main/cleisson-de-oliveira-moura"
              >
                Source
              </a>
            </div>
            <Link as={"/project/idealti"} href="/project/idealti">
              <a className={styles.seeMore}>See More...</a>
            </Link>
          </section>
          <section>
            <picture className={styles.image}>
              <Image
                src="/images/projects/dtmoneyImage.png"
                loading="lazy"
                alt="DTMoney store image"
                width="3840"
                height="2160"
                layout="intrinsic"
              />
            </picture>
            <h2>DT Money</h2>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cleissonom/project.chap02-rjs-dtmoney"
              >
                Source
              </a>
            </div>
            <Link as={"/project/dtmoney"} href="/project/dtmoney">
              <a className={styles.seeMore}>See More...</a>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
