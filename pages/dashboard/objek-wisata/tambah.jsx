import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {TambahObjekWisata} from "../../../components/Dashboard";
export default function TambahWisata() {
  return (
    <>
      <Head>
        <title>Tambah Wisata</title>
        <meta name="description" content="Tambah objek wisata" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TambahObjekWisata/>
    </>
  );
};

