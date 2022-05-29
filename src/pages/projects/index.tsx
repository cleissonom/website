import Head from "next/head";
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
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          blanditiis dolor quidem distinctio modi natus consectetur magnam
          minima minus mollitia aliquid error incidunt nam, facere explicabo
          quod nobis sed praesentium.
        </h1>
      </main>
      <Footer />
    </div>
  );
}
