import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic"
import MyAwesomeMap from "../../../components/Map"
// const MyAwesomeMap = dynamic(() => import("../../../components/Map"), { ssr:false })
// import MyAwesomeMap from "../../../components/Map"

export default function ObjekWisata() {
  return (
    <>
      <Head>
        <title>Objek Wisata</title>
        <meta name="description" content="Tourify Objek Wisata" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MyAwesomeMap />
    </>
  );
};

