import React, { useEffect,useState } from "react";
import Head from "next/head";
import {DashboardPendaftaran} from "../../components/Dashboard";
import { listSchedule } from "../../context/schedule/action";
import { listParticipant } from "../../context/member/action";
import { GetRootContext } from "../../context/context";

export default function DashboardIndex({data}) { 
  const [loading, setloading] = useState(false)
  const {state,dispatch} = GetRootContext()
  useEffect(() => {
    listSchedule()(dispatch)
    listParticipant()(dispatch)
    setloading(true)
  }, [])
  if(loading){

    const schedule = state.schedule.sAll?.map((el,i) =>({
      ...el,
      id:el.tourId.split("TTRDEV")[1]
  }))
  var data = {
    schedule,
    participant:state.member?.participant
  }
  }
  return !loading?
    <>Loading...</>
    : (
    <>
      <Head>
        <title>Pendaftaran</title>
        <meta name="description" content="Register | Tourify" />
        <link rel="icon" href="/api/admin/favicon.ico" />
      </Head>
        <DashboardPendaftaran data={data} />
    </>
  );
}; 
// export const getStaticProps = wrapper.getStaticProps( store =>
//   async() => {
//     store.dispatch(listSchedule())
//     store.dispatch(listParticipant())
//     store.dispatch(END)
//     await store.sagaTask.toPromise()
//   if (!store.getState().schedule.sAll || !store.getState().member.participant) {
//     return {
//       notFound: false,
//     }
//   }
//   return {
//     props:{
//       data:store.getState()
//     },
//     revalidate: 1, // In seconds
//   }

// })