import React, { useEffect } from "react";
import Login from "../../components/Login/Login";
import Layout from "../../layouts/Layout";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const index = () => {
  const isLogged = useSelector((state) => state.member.success);
  const { push } = useRouter();
  useEffect(() => {
    if (isLogged) {
      return push("/dashboard");
    }
  }, []);
  if (isLogged) {
    return (<>Loading...</>)
  }else{
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Login | Tourify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout bgContent="#F39C12">
        <Login />
      </Layout>
    </>
  );
  }
};

export default index;
