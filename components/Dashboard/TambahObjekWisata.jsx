import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import { Select, Form,Input,Button, Row, Col, DatePicker  } from "antd";
import Link from 'next/link'
import { useDispatch,useSelector } from "react-redux";
import { registObject } from "../../store/actions/object";

React.useLayoutEffect = React.useEffect;

export const TambahObjekWisata = () => {
  var data = useSelector(state => state.object.CurrentMap)
  const dispatch = useDispatch()
  console.log(data)
  const { TextArea } = Input;
  const { Option } = Select;
  const onChange = (value) => {
    console.log(`selected ${value}`);
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
  
  const onFinish = (values) => {
    // const dispatch = useDispatch()
    const {lat,lng} = data.position
    
    var formdata = new FormData();
    formdata.append('destination', `${values.destination}`);
    formdata.append('desc', `${values.desc}`);
    formdata.append('link', `${values.link}`);
    formdata.append('lat', `${lat}`);
    formdata.append('lon', `${lng}`);
    dispatch(registObject(formdata))
    console.log('Success:', values);
  };
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Tambah Objek Wisata</h4>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item name="destination" label="Nama Objek Destinasi">
          <Input placeholder="Masukkan nama objek destinasi disini..." />
          </Form.Item>
          <Form.Item label="Lokasi Objek Destinasi">
          <Link href="/dashboard/objek-wisata/map">
          <Button>{data?"x "+data.title:"+ Klik disini"}</Button>
        </Link>
          {/* <Input placeholder="Masukkan lokasi objek destinasi disini..." /> */}
          </Form.Item>
          <Form.Item name="desc" label="Deskripsi">
              <TextArea  placeholder="Masukkan Deskripsi Objek wisata" rows={4} />
          </Form.Item>
           
        <Form.Item name="link" label="Link">
          <Input placeholder="Masukkan Link Objek wisata" />
        </Form.Item>
        
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
      </DashboardLayout>
    </>
  );
};
