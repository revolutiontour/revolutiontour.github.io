import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import { Select, Form,Input,Button, Row, Col, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
React.useLayoutEffect = React.useEffect;

export const TambahJadwal = ({data}) => {
  const { Option } = Select;
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onImgChange = (e) => {
    const {files} = e.target
    console.log(`selected ${JSON.stringify(files)}`);
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
  const convertLong =(value)=>{
    var date = new Date(value);
    // var day = ('0' + date.getDate()).slice(-2)
    // var month = ('0' + date.getMonth() + 1).slice(-2)
    // var year = date.getFullYear();
    return date.getTime()
  }

  // Image Handling

  const onImageChange = ({ file: newFile }) => {
    var list = {};
    if (newFile.status === "removed") {
      list["image"] = "";
    } else if (newFile.status === "done") {
      list["image"] = newFile;
    }
    console.log(list)
  };

  const dummyRequest = (props) => {
    console.log("dummy req",props)
    setTimeout(() => {
      props.onSuccess("ok");
    }, 0);
  };

  const onFinish = (params)=>{
    console.log(convertLong(params.startDate))
    var startDate = convertLong(params.startDate)
    var endDate = convertLong(params.endDate)
    var formdata = new FormData();
    formdata.append('title', `${params.title}`);
    formdata.append('startDate', `${startDate}`);
    formdata.append('endDate', `${endDate}`);
    formdata.append('objectId', `${params.objectId}`);
    formdata.append('leaderId', `${params.leaderId}`);
  }
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Pendaftaran</h4>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
        <Form.Item name="title" label="Nama Acara">
          <Input placeholder="Nama acara yang diselenggarakan" />
        </Form.Item>
          <Form.Item name="startDate" label="Tanggal Mulai Acara">
          <DatePicker className="w-100"
              placeholder="Pilih tanggal" onChange={onChange} />
          </Form.Item>
          <Form.Item name="endDate" label="Tanggal Selesai Acara">
          <DatePicker className="w-100"
              placeholder="Pilih tanggal" onChange={onChange} />
          </Form.Item>
          <Form.Item name="objectId" label="Pilih Objek Destinasi">
            <Select
              showSearch
              placeholder="Pilih Objek Destinasi"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {data.object.map(({id,name})=>
              <Option value={id}>{name}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item name="leaderId" label="Pilih Tour Leader">
            <Select
              showSearch
              placeholder="Pilih Tour Leader"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
            {data.leader.map(({id,name})=>
            <Option value={id}>{name}</Option>)
            }
            </Select>
          </Form.Item>
          {/* <input type="file" onChange={onImgChange} /> */}
          <Form.Item
        name="upload"
        label="Upload"
      >
        <Upload customRequest={dummyRequest}
                maxCount={1} 
                onChange={onImageChange}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
      </Form.Item>
          {/* <Form.Item
        name="upload"
        label="Upload"
      >
        <Upload customRequest={dummyRequest}
                maxCount={1} 
                onChange={onImageChange}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
      </Form.Item> */}
        
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
