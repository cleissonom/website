import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import idealtiImageURL from "../../../public/images/projects/idealtiImage.png";
import websiteImageURL from "../../../public/images/projects/websiteImage.png";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export default function Projects() {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Projects</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Projects</h1>
        <hr />
        <div className={styles.projects}>
          <section>
            <picture className={styles.image}>
              <Image
                src={websiteImageURL}
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
                src={idealtiImageURL}
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
