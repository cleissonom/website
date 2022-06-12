import Head from "next/head";
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
      <main className={styles.container}>
        <div className={styles.alert}>
          <h1>Important!!</h1>
          <p>
            {`In that Blog i will post about Technology in general and some guides
               and concepts about Software Engineering, but don't forget, that is my
               personal vision and knowledge about these contents, you should do your own
               research, learn by yourself and create your own knowledge.`}
          </p>
          <hr />
        </div>
        <h1>Posts</h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            culpa porro doloremque rem illo accusamus tempore! Numquam magnam
            nemo velit sunt commodi consequuntur, sint necessitatibus, totam
            porro blanditiis voluptate.
          </p>
        </article>
      </main>
    </div>
  );
}
