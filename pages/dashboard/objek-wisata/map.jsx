import React from "react";
import Head from "next/head";
import MyAwesomeMap from "../../../components/Map"
// const MyAwesomeMap = dynamic(() => import("../../../components/Map"), { ssr:false })
// import MyAwesomeMap from "../../../components/Map"

export default function ObjekWisata() {
  return (
    <>
      <Head>
        <title>Objek Wisata</title>
        <meta name="description" content="Tourify Objek Wisata" />
        <link rel="icon" href="/api/admin/favicon.ico" />
      </Head>
        <MyAwesomeMap />
    </>
  );
};

