import React from "react";
import Head from "next/head";
import Layout from "../../layouts/Layout";
import {DashboardPendaftaran} from "../../components/Dashboard";
import { listSchedule } from "../../store/actions/schedule";
import { listParticipant } from "../../store/actions/member";
import { END } from "redux-saga";
import { wrapper } from "../../store";
import { useSelector } from "react-redux";

export default function DashboardIndex() { 
  const state = useSelector(state => state)
  const schedule = state.schedule.sAll.map((el,i) =>({
      ...el,
      id:el.tourId.split("TTRDEV")[1]
  }))
  var data = {
    schedule,
    participant:state.member.participant
  }
  return (
    <>
      <Head>
        <title>Pendaftaran</title>
        <meta name="description" content="Register | Tourify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardPendaftaran data={data} />
    </>
  );
}; 
export const getStaticProps = wrapper.getStaticProps( store =>
  async() => {
    store.dispatch(listSchedule())
    store.dispatch(listParticipant())
    store.dispatch(END)
    await store.sagaTask.toPromise()
  if (!store.getState().schedule.sAll || !store.getState().member.participant) {
    return {
      notFound: true,
    }
  }

})