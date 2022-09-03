import "../styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Marvel Planet</title>
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;
