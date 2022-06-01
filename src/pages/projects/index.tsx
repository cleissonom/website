import Head from "next/head";
import Image from "next/image";
import idealtiImageURL from "../../../public/images/projects/idealtiImage.png";
import websiteImageURL from "../../../public/images/projects/websiteImage.png";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export default function Projects() {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Home</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Projects</h1>
        <hr />
        <div className={styles.projects}>
          <section>
            <h2>Website</h2>
            <picture className={styles.image}>
              <Image
                src={websiteImageURL}
                alt="Website image"
                width="2880"
                height="1646"
                layout="intrinsic"
              />
            </picture>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cleisson.vercel.app"
              >
                Demo
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cleissonom/website"
              >
                Source
              </a>
            </div>
          </section>
          <section>
            <h2>IdealTi Store</h2>
            <picture className={styles.image}>
              <Image
                src={idealtiImageURL}
                alt="IdealTi store image"
                width="2880"
                height="1646"
                layout="intrinsic"
              />
            </picture>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ideal-store.vercel.app/"
              >
                Demo
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cleissonom/desafio-03/tree/main/cleisson-de-oliveira-moura"
              >
                Source
              </a>
            </div>
          </section>
          <section>
            <h2>Lorem</h2>
            <picture className={styles.image}>
              <Image
                src={websiteImageURL}
                alt="Website image"
                width="2880"
                height="1646"
                layout="intrinsic"
              />
            </picture>
            <div>
              <a target="_blank" rel="noreferrer" href="#">
                Demo
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                Source
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
