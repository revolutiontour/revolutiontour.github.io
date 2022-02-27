import React from "react";
import Head from "next/head";
import {TambahAnggota} from "../../../components/Dashboard";

export default function DashboardIndex() {
  return (
    <>
      <Head>
        <title>Tambah Anggota</title>
        <meta name="description" content="Tourify Tambah anggota" />
        <link rel="icon" href="/api/admin/favicon.ico" />
      </Head>
        <TambahAnggota />
    </>
  );
};

