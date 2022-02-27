import React, { useEffect,useState } from "react";
import Head from "next/head";
import {DashboardObjekWisata} from "../../../components/Dashboard";
import { listObject } from "../../../context/object/action";
import { withContext } from "../../../context/context";

function ObjekWisata({state:RootState,dispatch}) {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    listObject()(dispatch)
    setloading(true)
  }, [])
  const TheState = RootState.object
  if(loading){

    var nudata = TheState.oAll?.map((el,i) =>({...el,
      href:'/dashboard/objek-wisata/detail?id='+el.id,
      customUrl:'/dashboard/objek-wisata/'+el.id,
    }))
  }
    return !loading?
    <>Loading...</>
    :
  (
    <>
      <Head>
        <title>Objek Wisata</title>
        <meta name="description" content="Tourify Objek Wisata" />
        <link rel="icon" href="/api/admin/favicon.ico" />
      </Head>
        <DashboardObjekWisata data={nudata} />
    </>
  );
};

export default withContext(ObjekWisata)

// export const getStaticProps = wrapper.getStaticProps( store =>
//   async() => {
//     store.dispatch(listObject())
//     store.dispatch(END)
//     await store.sagaTask.toPromise()
//   if (!store.getState().object.oAll) {
//     return {
//       notFound: false,
//     }
//   }
//   return {
//     props:{
//       data:store.getState().object
//     },
//     revalidate: 1, // In seconds
//   }

// })