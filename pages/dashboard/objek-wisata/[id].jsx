import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DetailObjek} from "../../../components/Dashboard";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useRouter} from 'next/router';
import { detailObject } from "../../../store/actions/object";
import Router from 'next/router'

class DObjek extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:false
        }
    }
  
  componentDidUpdate(){
    if(this.props.object.Detail!=null && this.state.loading == false){
      this.setState({
          loading:true
      })
    }
  }

  componentDidMount(){
    const id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    console.log(id)
  this.props.dispatch(detailObject(id))
  // end the saga
  this.props.dispatch(END);
  }
  
    render(){
      if( this.state.loading == false){
        return(
          <>Loading...</>
        )
      }
      return (
        <>
          <Head>
            <title>Objek Wisata</title>
            <meta name="description" content="Tourify Objek Wisata" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
                <DetailObjek data={this.props.object.Detail} />
        </>
      );
    }
  }
  export default connect(state => state)(DObjek);
