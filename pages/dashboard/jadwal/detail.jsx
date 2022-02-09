import React, { useEffect,useState } from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DetailJadwal} from "../../../components/Dashboard";
import { detailSchedule } from "../../../store/actions/schedule";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useRouter} from 'next/router';

export default function D2Jadwal(){
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  // const [list, setlist] = useState(null)
  const {query} = useRouter()
  const {id} = query
  useEffect(() => {
    if(id&&!loading){
      dispatch(detailSchedule(id))
      setloading(true)
    }
  }, [id,loading])
  
  const list = useSelector(state => state.schedule.sDetail)
  console.log(list)
  return !loading && !list?
  <>Loading...</>
  : (
    <>
      <Head>
        <title>Jadwal</title>
        <meta name="description" content="Tourify Jadwal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DetailJadwal data={list} />
    </>
  );
}

