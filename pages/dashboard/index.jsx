import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../layouts/Layout";
import {DashboardLanding} from "../../components/Dashboard";
import withReduxSaga from "next-redux-saga";
import { useDispatch, useSelector } from "react-redux";
import { listLeader, listParticipant } from "../../store/actions/member";
import { listSchedule } from "../../store/actions/schedule";
import { listObject } from "../../store/actions/object";

export default function DashboardIndex() {
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(listParticipant())
  dispatch(listSchedule())
  dispatch(listObject())
  setloading(true)
  }, [])
  
  const state = useSelector(state => state)
  
  return !loading?
  <>Loading...</>
  :(
    <>
      <Head>
        <title>Dashboard | Tourify</title>
        <meta name="description" content="Dashboard | Tourify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardLanding data={state}/>
    </>
  );
};

