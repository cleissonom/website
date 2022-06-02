import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export default function Blog() {
  return (
    <div className={styles.content}>
      <Head>
        <title>CleissonOM | Blog</title>
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/52113875571_9491e0bfb3_k.jpg"
        />
        <meta name="title" property="og:title" content="CleissonOM | Blog" />
        <meta property="og:type" content="Blog" />
        <meta
          name="description"
          property="og:description"
          content="Thats my blog, I write about some tech concepts and much more"
        />
        <meta name="author" content="Cleisson de Oliveira Moura" />
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
