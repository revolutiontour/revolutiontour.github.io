import React, { useEffect,useState } from "react";
import Head from "next/head";
import {DetailJadwal} from "../../../components/Dashboard";
import { detailSchedule } from "../../../context/schedule/action";
import {useRouter} from 'next/router';
import { withContext } from "../../../context/context";

function D2Jadwal({state,dispatch}){
  const [loading, setloading] = useState(false)
  // const [list, setlist] = useState(null)
  const {query} = useRouter()
  const {id} = query
  useEffect(() => {
    if(id&&!loading){
      detailSchedule(id)({state,dispatch})
      setloading(true)
    }
  }, [id,loading])
  
  const list = state.schedule.sDetail
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
export default withContext(D2Jadwal)

