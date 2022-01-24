import React, { useEffect,useState } from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DashboardObjekWisata} from "../../../components/Dashboard";
import { listObject } from "../../../store/actions/object";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { useSelector } from "react-redux";
import { tourifyLocal } from "../../../repositories/Repository";
import { useDispatch } from "react-redux";

export default function ObjekWisata({data=[]}) {
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listObject())
    setloading(true)
  }, [])
  const state = useSelector(state => state.object)
  if(loading){

    var nudata = state.oAll?.map((el,i) =>({...el,
      href:'/dashboard/objek-wisata/detail?id='+el.id,
      customUrl:'/dashboard/objek-wisata/'+el.id,
      avatar:"https://joeschmoe.io/api/v1/random"}))
  }
    return !loading?
    <>Loading...</>
    :
  (
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

// export const getStaticProps = wrapper.getStaticProps( store =>
//   async() => {
//     store.dispatch(listObject())
//     store.dispatch(END)
//     await store.sagaTask.toPromise()
//   if (!store.getState().object.oAll) {
//     return {
//       notFound: false,
//     }
//   }
//   return {
//     props:{
//       data:store.getState().object
//     },
//     revalidate: 1, // In seconds
//   }

// })