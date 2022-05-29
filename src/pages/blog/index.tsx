import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export default function Project() {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Home</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Posts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
          culpa porro doloremque rem illo accusamus tempore! Numquam magnam nemo
          velit sunt commodi consequuntur, sint necessitatibus, totam porro
          blanditiis voluptate.
        </p>
      </main>
      <Footer />
    </div>
  );
}
