import Head from "next/head";
import styles from "./styles.module.scss";

export default function Project() {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Website</title>
      </Head>
      <main className={styles.container}>
        <h1>Website</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          corporis libero, consequuntur maiores, impedit, natus nobis nulla
          laborum voluptatibus quibusdam enim iure asperiores delectus minima
          harum eligendi eos quam rerum!
        </p>
      </main>
    </div>
  );
}
