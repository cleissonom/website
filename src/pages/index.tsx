import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Home</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <section className={styles.profile}>
          <Image
            src="/images/avatar.jpeg"
            alt="Image Profile"
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
            {`- Specialized in delivering creative solutions in various technical
            formats for solving real problems. I'm always expanding my
            knowledge, studying and improving my skills about Technology.`}
          </p>
          <ul>
            <li>- Programming Languages: JavaScript/TypeScript and SQL</li>
            <li>- Spoken Languages: 🇧🇷 - 🇺🇸 - 🇪🇸</li>
          </ul>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
