import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DashboardAnggota} from "../../../components/Dashboard";
import { listLeader, listParticipant } from "../../../store/actions/member";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../../../store";

export default function DashboardIndex({data}) {
  // const state = useSelector(state => state.member)
  var nudata = data.participant.map((el,i)=> ({
    ...el,
    avatar : "https://joeschmoe.io/api/v1/random",
    role : 'participant'
  }))
  data.leader.map((el,i)=> {
    nudata.push({
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
        <DashboardAnggota data={nudata} />
    </>
  );
};
export const getStaticProps = wrapper.getStaticProps(store =>
  async() => {
    store.dispatch(listParticipant())
    store.dispatch(listLeader())
    store.dispatch(END)
    await store.sagaTask.toPromise()
  if (!store.getState().member.participant) {
    return {
      notFound: false,
    }
  }
  const data = await store.getState().member
  return {
    props: { data }, // will be passed to the page component as props
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

