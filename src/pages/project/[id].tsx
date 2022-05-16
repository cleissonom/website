import Head from "next/head";
import { useRouter } from "next/router";
import { MainBox } from "../../components/MainBox";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Personal Website</title>
      </Head>
      <MainBox>
        <>Project {id}</>
      </MainBox>
    </>
  );
}
