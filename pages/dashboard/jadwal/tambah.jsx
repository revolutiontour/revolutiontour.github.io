import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {TambahJadwal} from "../../../components/Dashboard";
import { useSelector } from "react-redux";
import { listLeader } from "../../../store/actions/member";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { listObject } from "../../../store/actions/object";

export default function AddJadwal() {
  const state = useSelector(state => state)
  var data = {
    object:state.object.oAll,
    leader:state.member.leader
  }

  return (
    <>
      <Head>
        <title>Tambah Jadwal</title>
        <meta name="description" content="Tourify Tambah jadwal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TambahJadwal data={data}/>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps( store =>
  async() => {
    store.dispatch(listObject())
    store.dispatch(listLeader())
    store.dispatch(END)

    await store.sagaTask.toPromise()
  if (!store.getState().object.oAll || !store.getState().member.leader) {
    return {
      notFound: true,
    }
  }
})
