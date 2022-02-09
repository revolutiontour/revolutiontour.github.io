import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import { Select, Form,Input,Button, Row, Col, DatePicker,Radio } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { registTourLeader, registTourParticipant } from "../../store/actions/member";
import { connect } from "react-redux";

React.useLayoutEffect = React.useEffect;
const TbhAnggota = () => {
  const dispatch = useDispatch();
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

    const {role} = values
    
    var formdata = new FormData();
    formdata.append('email', `${values.email}`);
    formdata.append('name', `${values.name}`);
    formdata.append('phone', `${values.phone}`);
    if(role==="participant"){
      dispatch(registTourParticipant(formdata))
    }else{
      dispatch(registTourLeader(formdata))
    }
    console.log('Success:', values);
  };
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Form Tambah Anggota</h4>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item name="name" label="Nama lengkap"    
          rules={[{ 
            required: true,
            message: 'Mohon diisi Nama Lengkap',
           }]}>
          <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item name="phone" label="No. HP"    
          rules={[{ 
            required: true,
            message: 'Mohon diisi No. Hp',
           }]}>
          <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item name="email" label="Alamat email"   
          rules={[{ 
            required: true,
            message: 'Mohon diisi Email',
           }]}>
          <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item name="role" label="Role"   
          rules={[{ 
            required: true,
            message: 'Mohon diisi Role',
           }]}>
          <Radio.Group
            // onChange={filterRole}
            // value={role}
            className="align-self-center"
            >
              <Radio value={"participant"}>Participant</Radio>
              <Radio value={"leader"}>Leader</Radio>
            </Radio.Group>
          </Form.Item>
        
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
      </DashboardLayout>
    </>
  );
};
// const mapStateToProps = (state) => {
//   return state;
// };
// const mapDispatchToProps = {
//   registTourLeader,
//   registTourParticipant
//  };
export const TambahAnggota = TbhAnggota