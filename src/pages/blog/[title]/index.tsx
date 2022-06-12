import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export default function Post() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | {title}</title>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <main className={styles.container}>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
          fuga assumenda neque, sapiente sit quis doloribus incidunt voluptatem,
          ad amet sed itaque. Repellat maiores itaque dolore officiis eveniet
          voluptas?
        </p>
      </main>
    </div>
  );
}
