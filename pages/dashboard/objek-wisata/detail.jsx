import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DetailObjek} from "../../../components/Dashboard";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useRouter} from 'next/router';
import { detailObject, listObject } from "../../../store/actions/object";
import { withRouter } from 'next/router'
import { compose } from "redux";

export default function D2Objek(){
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  // const [list, setlist] = useState(null)
  const {query} = useRouter()
  const {id} = query
  useEffect(() => {
    if(id&&!loading){
      dispatch(detailObject(id))
      setloading(true)
    }
  }, [id,loading])
  const list = useSelector(state => state.object.oDetail)
  console.log(list)
  return !loading && !list?
  <>Loading...</>
  : (
    <>
      <Head>
        <title>Objek Wisata</title>
        <meta name="description" content="Tourify Objek Wisata" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <DetailObjek data={list} />
    </>
  );
}