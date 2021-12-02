import React from "react";
import Login from "../../components/Login/Login";
import Layout from "../../layouts/Layout";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Login | Tourify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default index;
