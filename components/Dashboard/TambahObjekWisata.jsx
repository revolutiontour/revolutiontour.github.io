import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import { Select, Form,Input,Button, Row, Col, DatePicker  } from "antd";
import Link from 'next/link'
import { useDispatch,useSelector } from "react-redux";
import { currentObject, registObject } from "../../store/actions/object";

React.useLayoutEffect = React.useEffect;

export const TambahObjekWisata = () => {
  const [state,setstate] = useState({})
  const data = useSelector(state => state.object.CurrentData)
  const {destination,desc,link} = data
  const dispatch = useDispatch()
  console.log(data)
  const { TextArea } = Input;
  const { Option } = Select;
  const onChange = (e) => {
    const {name,value} = e.target
    setstate(prev=>({
      ...prev,
      [name]:value
    }))
    dispatch(currentObject(
      {
        ...data,
        [name]:value
      }
    ))
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
    const {lat,lng} = data.map.position
    
    const formdata = new FormData();
    formdata.append('destination', `${destination}`);
    formdata.append('desc', `${desc}`);
    formdata.append('link', `${link}`);
    formdata.append('lat', `${lat}`);
    formdata.append('lon', `${lng}`);
    dispatch(registObject(formdata))
    // console.log('Success:', data);
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
          <Input name="destination" placeholder="Masukkan nama objek destinasi disini..." defaultValue={destination} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Lokasi Objek Destinasi">
          <Link href="/dashboard/objek-wisata/map">
          <Button danger={data.map?true:false}>{data.map?"x "+data.map.title:"+ Pilih lokasi"}</Button>
        </Link>
          {/* <Input placeholder="Masukkan lokasi objek destinasi disini..." /> */}
          </Form.Item>
          <Form.Item name="desc" label="Deskripsi">
              <TextArea name="desc"  placeholder="Masukkan Deskripsi Objek wisata" rows={4} defaultValue={desc} onChange={onChange} />
          </Form.Item>
           
        <Form.Item name="link" label="Link">
          <Input name="link" placeholder="Masukkan Link Objek wisata" defaultValue={link} onChange={onChange}  />
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
