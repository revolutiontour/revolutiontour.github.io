import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import { Select, Form,Input,Button, Row, Col, DatePicker  } from "antd";

React.useLayoutEffect = React.useEffect;

export const TambahObjekWisata = () => {
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
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Tambah Objek Wisata</h4>
        <Form
          layout="vertical"
        >
          <Form.Item label="Nama Objek Destinasi">
          <Input placeholder="Masukkan nama objek destinasi disini..." />
          </Form.Item>
          <Form.Item label="Lokasi Objek Destinasi">
          <Input placeholder="Masukkan lokasi objek destinasi disini..." />
          </Form.Item>
          <Form.Item label="Deskripsi">
              <TextArea  placeholder="Masukkan Deskripsi Objek wisata" rows={4} />
          </Form.Item>
           
        <Form.Item label="Link">
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
