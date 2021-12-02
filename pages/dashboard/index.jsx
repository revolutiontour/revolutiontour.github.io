import React from "react";
import Head from "next/head";
import Layout from "../../layouts/Layout";
import {DashboardLanding} from "../../components/Dashboard";
import withReduxSaga from "next-redux-saga";

export default function DashboardIndex() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Kelompok 2 de bes ngab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardLanding />
    </>
  );
};

