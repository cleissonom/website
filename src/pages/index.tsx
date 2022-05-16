import type { NextPage } from "next";
import Head from "next/head";
import { MainBox } from "../components/MainBox/";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personal Website</title>
      </Head>
      <MainBox>
        <div>Hello World!</div>
      </MainBox>
    </>
  );
};

export default Home;
