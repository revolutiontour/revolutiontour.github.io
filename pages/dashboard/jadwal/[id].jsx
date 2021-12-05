import React from "react";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import {DetailJadwal} from "../../../components/Dashboard";
import { detailSchedule } from "../../../store/actions/schedule";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useRouter} from 'next/router';

class DJadwal extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          loading:false
      }
  }
  componentDidUpdate(){
    if(this.props.schedule.Detail!=null && this.state.loading == false){
      this.setState({
          loading:true
      })
    }
  }

componentDidMount(){
  const id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
  console.log(id)
this.props.dispatch(detailSchedule(id))
// end the saga
this.props.dispatch(END);
}

  render(){
    if(this.state.loading == false){
      return(
        <>Loading...</>
      )
    }
    return (
      <>
        <Head>
          <title>Jadwal</title>
          <meta name="description" content="Tourify Jadwal" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <DetailJadwal data={this.props.schedule.Detail} />
      </>
    );
  }
}
export default connect(state => state)(DJadwal);
