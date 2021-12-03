import Head from "next/head";
import React from "react";
import Register from "../../components/Register/Register";
import Layout from "../../layouts/Layout";
export default function RegisterIndex() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Tourify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Register /> */}
      </Layout>
    </>
  );
}
