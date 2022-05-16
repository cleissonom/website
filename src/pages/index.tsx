import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MainBox } from "../components/MainBox/";

const id = "teste";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personal Website</title>
      </Head>
      <MainBox>
        <div>
          <Link as={`/experiences`} href="/experiences">
            <a>Go to Experiences</a>
          </Link>
          <br />
          <Link as={`/projects`} href="/projects">
            <a>Go to Projects</a>
          </Link>
          <br />
          <Link as={`/project/${id}`} href="project/[id]">
            <a>Go to project {id}</a>
          </Link>
        </div>
      </MainBox>
    </>
  );
};

export default Home;
