import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DashboardAnggota} from "../../../components/Dashboard";
import { listLeader, listParticipant } from "../../../store/actions/member";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../../../store";

export default function DashboardIndex(props) {
  const state = useSelector(state => state.member)
  var data = state.participant.map((el,i)=> ({
    ...el,
    avatar : "https://joeschmoe.io/api/v1/random",
    role : 'participant'
  }))
  state.leader.map((el,i)=> {
    data.push({
      ...el,
      avatar:"https://joeschmoe.io/api/v1/random",
      role:'leader'
    })
  })
  return (
    <>
      <Head>
        <title>Anggota</title>
        <meta name="description" content="Tourify Anggota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardAnggota data={data} />
    </>
  );
};
export const getStaticProps = wrapper.getStaticProps(store =>
  async() => {
  if (!store.getState().member.participant) {
    store.dispatch(listParticipant())
    store.dispatch(listLeader())
    store.dispatch(END)
  }
  await store.sagaTask.toPromise()
  return {
    notFound: false,
  }
  // store.dispatch(END)
})
// DashboardIndex.getInitialProps = async()=>{
//   var arrOfObj = await fetch('http://167.172.62.14/api/member/participant')
//   arrOfObj = await arrOfObj.json()
//   arrOfObj = await arrOfObj.data
  
//   var result = arrOfObj.map(function(el) {
//     var o = Object.assign({}, el);
//     o.role = "participant";
//     return o;
//   })
//   return {
//     props:{result}
//   }
// }

