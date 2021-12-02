import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DetailJadwal} from "../../../components/Dashboard";
import { detailSchedule } from "../../../store/actions/schedule";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { useSelector } from "react-redux";

export const DJadwal = (props) => {
  const state = useSelector(state => state)
  return (
    <>
      <Head>
        <title>Jadwal</title>
        <meta name="description" content="Tourify Jadwal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DetailJadwal data={state.schedule.Detail} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store =>
  async({params}) => {
  store.dispatch(detailSchedule(params.id))
    // end the saga
    store.dispatch(END);
    await store.sagaTask.toPromise();
    
  const detail = store.getState().schedule.Detail
  if(!detail){
    return {
      notFound:true
    }
  }
  return {
    props: {}, // Will be passed to the page component as props
    // notFound:false
  }
})
export default DJadwal
