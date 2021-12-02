import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {TambahAnggota} from "../../../components/Dashboard";

export default function DashboardIndex() {
  return (
    <>
      <Head>
        <title>Tambah Anggota</title>
        <meta name="description" content="Tourify Tambah anggota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TambahAnggota />
    </>
  );
};

