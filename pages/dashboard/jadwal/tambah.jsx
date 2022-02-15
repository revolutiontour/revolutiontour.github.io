import React,{useEffect,useState} from "react";
import Head from "next/head";
import {TambahJadwal} from "../../../components/Dashboard";
import { listLeader } from "../../../context/member/action";
import { listObject } from "../../../context/object/action";
import { withContext } from "../../../context/context";
import {useRouter} from "next/router";

function AddJadwal({state,dispatch}) {
  const [loading, setloading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    listObject()(dispatch)
    listLeader()(dispatch)
    setloading(true)
  }, [])

  if(loading){
    if(!state.object.oAll || !state.member.leader){
    router.push({
      pathname:"/404"
    })
  }
    var data = {
      object:state.object?.oAll,
      leader:state.member?.leader
    }
  }
return !loading?
<>Loading...</>
:
(
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
export default withContext(AddJadwal)

