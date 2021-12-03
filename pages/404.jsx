import React from "react";
import Head from "next/head";
import { DashboardLayout } from "../components/Dashboard/shared/Layout";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Tourify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
          <div className="d-flex flex-column align-self-center justify-content-center h-100">
          <h4 className="text-center">Mohon maaf data yang anda cari tidak ada, silakan kembali ke halaman dashboard utama</h4>
          </div>
      </DashboardLayout>
    </>
  );
};
