import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Home</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.profile}>
          <Image
            src="/images/avatar.webp"
            alt="Image Profile"
            loading="lazy"
            width="300"
            height="300"
            layout="intrinsic"
          />
          <h1>Cleisson de Oliveira Moura</h1>
          <h2>Software Engineer</h2>
        </section>
        <section className={styles.about}>
          <h3>{`Hello World! 👋 I'm Cleisson.`}</h3>
          <p>
            {`- Software Engineer trying to deliver creative solutions in various technical formats for solving real problems. I'm always improving my skills about Technology.`}
          </p>
          <ul>
            <li>- Programming Languages: JavaScript/TypeScript</li>
            <li>- Spoken Languages: 🇧🇷 - 🇺🇸 - 🇪🇸</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
