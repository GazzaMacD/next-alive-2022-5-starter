import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/page-styles/Home.module.scss";
import _ from "lodash";

const Home: NextPage = () => {
  const complexObj = { nest: { complex: null } };
  const cpyComplexObj = _.cloneDeep(complexObj);
  console.log(cpyComplexObj);
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
