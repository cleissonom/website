import Head from "next/head";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <Head>
        <title>CleissonOM | Blog</title>
      </Head>
    </>
  );
}
