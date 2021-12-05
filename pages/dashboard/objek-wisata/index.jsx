import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DashboardObjekWisata} from "../../../components/Dashboard";
import { listObject } from "../../../store/actions/object";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { useSelector } from "react-redux";
import { tourifyLocal } from "../../../repositories/Repository";

export default function ObjekWisata() {
  const state = useSelector(state => state.object)
  var data = state.All.map((el,i) =>({...el,
    href:'/dashboard/objek-wisata/'+el.id,
    avatar:"https://joeschmoe.io/api/v1/random"}))
  return (
    <>
      <Head>
        <title>Objek Wisata</title>
        <meta name="description" content="Tourify Objek Wisata" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardObjekWisata data={data} />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps( store =>
  async() => {
    store.dispatch(listObject())
    store.dispatch(END)
    await store.sagaTask.toPromise()
  if (!store.getState().object.Detail) {
    return {
      notFound: false,
    }
  }

})