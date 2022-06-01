import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <meta
            name="image"
            property="og:image"
            content="https://live.staticflickr.com/65535/52113875571_9491e0bfb3_k.jpg"
          />
          <meta
            name="title"
            property="og:title"
            content="CleissonOM | Website"
          />
          <meta property="og:type" content="Website" />
          <meta
            name="description"
            property="og:description"
            content="Thats my personal Website to show more about my work!"
          />
          <meta name="author" content="Cleisson de Oliveira Moura" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
