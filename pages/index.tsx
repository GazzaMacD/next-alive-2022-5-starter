import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/page-styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Div}>
        <h1 className={styles.Div__title}>Alive Starter</h1>
      </div>
    </div>
  );
};

export default Home;
