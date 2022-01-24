import React, { useEffect,useState } from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DashboardJadwal} from "../../../components/Dashboard";
import { listSchedule } from "../../../store/actions/schedule";
import { connect, useSelector,useDispatch } from "react-redux";
import { tourifyLocal } from "../../../repositories/Repository";
import { END } from "redux-saga";
import { wrapper } from "../../../store";

const Jadwal =({data}) =>{
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listSchedule())
    setloading(true)
  }, [])
  const state = useSelector(state => state)
  if(loading){
    var nudata = state.schedule.sAll?.map((el,i)=> ({
      ...el,
      avatar : "https://joeschmoe.io/api/v1/random",
      title : `${el.title} #${i+1}`,
      href : '/dashboard/jadwal/detail?id='+el.tourId.split("TTRDEV")[1],
      customUrl:'/dashboard/jadwal/'+el.tourId.split("TTRDEV")[1],
    }))
  }
  return !loading?
    <>Loading...</>
    : (
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



// export const getStaticProps = wrapper.getStaticProps( store =>
//   async() => {
//     store.dispatch(listSchedule())
//     store.dispatch(END)
//     await store.sagaTask.toPromise()
//   if (!store.getState().schedule.sAll) {
//     return {
//       notFound: false,
//     }
//   }
//   return {
//     props:{
//       data:store.getState().schedule
//     },
//     revalidate: 1, // In seconds
//   }

// })


 export default Jadwal;
