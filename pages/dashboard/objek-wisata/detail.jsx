import React, { useEffect, useState } from "react";
import Head from "next/head";
import {DetailObjek} from "../../../components/Dashboard";
import {useRouter} from 'next/router';
import { detailObject, listObject } from "../../../context/object/action";
import { withContext } from "../../../context/context";

function D2Objek({state,dispatch}){
  const [loading, setloading] = useState(false)
  // const [list, setlist] = useState(null)
  const {query} = useRouter()
  const {id} = query
  useEffect(() => {
    if(id&&!loading){
      detailObject(id)(dispatch)
      setloading(true)
    }
  }, [id,loading])
  const list = state.object.oDetail
  console.log(list)
  return !loading && !list?
  <>Loading...</>
  : (
    <>
      <Head>
        <title>Objek Wisata</title>
        <meta name="description" content="Tourify Objek Wisata" />
        <link rel="icon" href="/api/admin/favicon.ico" />
      </Head>
            <DetailObjek data={list} />
    </>
  );
}
export default withContext(D2Objek)