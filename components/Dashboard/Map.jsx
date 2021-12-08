import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import {
  Select,
  Form,
  Input,
  Button,
  Row,
  Col,
  List,
  Skeleton,
  Space,
  Avatar,
  Radio
} from "antd";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
// import DisplayMapClass from "../Map";
import dynamic from 'next/dynamic';

const DisplayMapClass = dynamic(() => import('../Map'), { ssr: false });
// React.useLayoutEffect = React.useEffect;

export const DashboardMap = ({data}) => {
  const [state, setstate] = useState({
    lat:0,
    lng:0
  });

  const { Option } = Select;
  const onChange = async(e) => {
    const { value } = e.target;
    
    const res = await postData('https://discover.search.hereapi.com/v1/discover?at=40.7307999,-73.9973085&limit=1&q='+value+'&in=countryCode:IDN&apiKey=BYrIifYEk_cazqQRnTgSzrkZcrq7UyvsF4ZPGTgg0fQ')
    res.items.length>0 &&
    setstate(prevState=>({
      ...prevState,
      lat:res.items[0].position.lat,
      lng:res.items[0].position.lng
    }))
    console.log(state.lng,state.lat)
  };

  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };
  async function postData(url = '') {
    // Default options are marked with *
    const response = await fetch(url);
    return response.json(); // parses JSON response into native JavaScript objects
  }
  return (
    <>
      <DashboardLayout>
        <Form layout="vertical">
          <Form.Item label="Nama Objek Destinasi">
            <Input placeholder="Masukkan nama objek destinasi disini..." onChange={onChange} />
          </Form.Item>
        </Form>
        <DisplayMapClass lat={state.lat} lng={state.lng}/>
      </DashboardLayout>
    </>
  );
};
