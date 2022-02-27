import React, { useState, useEffect, useContext } from "react";
import { DashboardLayout } from "./shared/Layout";
import { Select, Form,Input,Button, Row, Col, DatePicker  } from "antd";
import Link from 'next/link'
import { currentObject, registObject } from "../../context/object/action";
import { GetRootContext, RootContext } from "../../context/context";


export const TambahObjekWisata = () => {
  const context = useContext(RootContext)
  const [state,setstate] = useState({})
  const data = context.state.object.CurrentData
  const {destination,desc,link} = data
  const dispatch = context.dispatch
  console.log(data)
  const { TextArea } = Input;
  const { Option } = Select;
  const onChange = (e) => {
    const {name,value} = e.target
    setstate(prev=>({
      ...prev,
      [name]:value
    }))
    currentObject(
      {
        ...data,
        [name]:value
      }
    )(dispatch)
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
    registObject(formdata)(dispatch)
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
          <Form.Item name="destination" label="Nama Objek Destinasi"  
          rules={[{ 
            required: true,
            message: 'Mohon diisi Nama Objek Destinasi',
           }]}>
          <Input name="destination" placeholder="Masukkan nama objek destinasi disini..."    
          rules={[{ 
            required: true,
            message: 'Mohon diisi Nama Objek Destinasi',
           }]} defaultValue={destination} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Lokasi Objek Destinasi"   
          rules={[{ 
            required: true,
            message: 'Mohon diisi Lokasi Objek Destinasi',
           }]}>
          <Link href="/dashboard/objek-wisata/map">
          <Button danger={data.map?true:false}>{data.map?"x "+data.map.title:"+ Pilih lokasi"}</Button>
        </Link>
          {/* <Input placeholder="Masukkan lokasi objek destinasi disini..." /> */}
          </Form.Item>
          <Form.Item name="desc" label="Deskripsi"   
          rules={[{ 
            required: true,
            message: 'Mohon diisi Deskripsi Objek wisata',
           }]}>
              <TextArea name="desc"  placeholder="Masukkan Deskripsi Objek wisata" rows={4}  defaultValue={desc} onChange={onChange} />
          </Form.Item>
           
        <Form.Item name="link" label="Link">
          <Input name="link" placeholder="Masukkan Link Objek wisata" defaultValue={link} onChange={onChange}  />
        </Form.Item>
        
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
      </DashboardLayout>
    </>
  );
};
