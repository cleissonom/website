import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Project</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>{id}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          corporis libero, consequuntur maiores, impedit, natus nobis nulla
          laborum voluptatibus quibusdam enim iure asperiores delectus minima
          harum eligendi eos quam rerum!
        </p>
      </main>
      <Footer />
    </div>
  );
}
