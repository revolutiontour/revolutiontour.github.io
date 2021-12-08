import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DashboardJadwal} from "../../../components/Dashboard";
import { listSchedule } from "../../../store/actions/schedule";
import { connect, useSelector,useDispatch } from "react-redux";
import { tourifyLocal } from "../../../repositories/Repository";
import { END } from "redux-saga";
import { wrapper } from "../../../store";

const Jadwal =({data}) =>{
  // const state = useSelector(state => state)
  
  var nudata = data.map((el,i)=> ({
    ...el,
    avatar : "https://joeschmoe.io/api/v1/random",
    title : `${el.title} #${i+1}`,
    href : '/dashboard/jadwal/'+ el.tourId.split("TTRDEV")[1]
  }))
  return (
    <>
      <Head>
        <title>Jadwal</title>
        <meta name="description" content="Tourify Jadwal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardJadwal data={nudata}/>
    </>
  );
};



export const getStaticProps = wrapper.getStaticProps( store =>
  async() => {
    store.dispatch(listSchedule())
    store.dispatch(END)
    await store.sagaTask.toPromise()
  if (!store.getState().schedule.All) {
    return {
      notFound: false,
    }
  }
  const data = await store.getState().schedule.All
  return {
    props: { data }, // will be passed to the page component as props
  }

})


 export default Jadwal;
