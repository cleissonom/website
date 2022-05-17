import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MainBox } from "../components/MainBox/";
import styles from "./styles.module.scss";

const id = "teste";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personal Website</title>
      </Head>
      <MainBox>
        <div className={styles.content}>
          <section className={styles.avatarSection}>
            <div>
              <img
                src="/images/backAvatar.png"
                alt="Blackhole image"
                className={styles.backImage}
              />
              <img
                src="/images/frontAvatar.jpeg"
                alt="Profile image"
                className={styles.frontImage}
              />
            </div>
            <h1>Cleisson de Oliveira Moura</h1>
            <h3>Software Engineer</h3>
          </section>
          <section className={styles.aboutSection}>
            <h2>{`Hello World! ,👋 I'm Cleisson.`}</h2>
            <p>
              {`Specialized in delivering creative solutions in various technical
              formats for solving real problems. I'm always expanding my
              knowledge, studying and improving my skills about Technology. I
              love that!`}
            </p>
            <ul>
              <li>Programming Languages: JavaScript/TypeScript and SQL.</li>
              <li>
                Spoken Languages: <span title="Portuguese">🇧🇷</span> -{" "}
                <span title="English">🇺🇸</span> -{" "}
                <span title="Spanish">🇪🇸</span>
              </li>
            </ul>
            <div>
              <Link as={`/experiences`} href="/experiences">
                <a className={styles.buttonNav}>Experiences</a>
              </Link>
              <Link as={`/projects`} href="/projects">
                <a className={styles.buttonNav}>Projects</a>
              </Link>
            </div>
          </section>
        </div>
      </MainBox>
    </>
  );
};

export default Home;
