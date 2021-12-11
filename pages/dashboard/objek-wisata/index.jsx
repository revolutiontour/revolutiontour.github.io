import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DashboardObjekWisata} from "../../../components/Dashboard";
import { listObject } from "../../../store/actions/object";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { useSelector } from "react-redux";
import { tourifyLocal } from "../../../repositories/Repository";

export default function ObjekWisata({data=[]}) {
  const state = useSelector(state => state.object)
  var nudata = state.oAll.map((el,i) =>({...el,
    href:'/dashboard/objek-wisata/'+el.id,
    avatar:"https://joeschmoe.io/api/v1/random"}))
  return (
    <>
      <Head>
        <title>Objek Wisata</title>
        <meta name="description" content="Tourify Objek Wisata" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardObjekWisata data={nudata} />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps( store =>
  async() => {
    await store.dispatch(listObject())
    await store.dispatch(END)
    await store.sagaTask.toPromise()
  if (!store.getState().object.oAll) {
    return {
      notFound: false,
    }
  }

})