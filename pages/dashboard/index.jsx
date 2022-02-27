import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../layouts/Layout";
import {DashboardLanding} from "../../components/Dashboard";
import { listLeader, listParticipant } from "../../context/member/action";
import { listSchedule } from "../../context/schedule/action";
import { listObject } from "../../context/object/action";
import { withContext } from "../../context/context";

function DashboardIndex({state,dispatch}) {
  const [loading, setloading] = useState(false)
  useEffect(() => {
  listParticipant()(dispatch)
  listSchedule()(dispatch)
  listObject()(dispatch)
  setloading(true)
  }, [])
  
  return !loading?
  <>Loading...</>
  :(
    <>
      <Head>
        <title>Dashboard | Tourify</title>
        <meta name="description" content="Dashboard | Tourify" />
        <link rel="icon" href="/api/admin/favicon.ico" />
      </Head>
        <DashboardLanding data={state}/>
    </>
  );
};

export default withContext(DashboardIndex)

