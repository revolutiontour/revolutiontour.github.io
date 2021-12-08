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
  // const state = useSelector(state => state.object)
  var nudata = data.map((el,i) =>({...el,
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
    store.dispatch(listObject())
    store.dispatch(END)
    await store.sagaTask.toPromise()
  if (!store.getState().object.All) {
    return {
      notFound: false,
    }
  }
  const data = await store.getState().object.All
  return {
    props: { data }, // will be passed to the page component as props
  }

})