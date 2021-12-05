import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import {
  Select,
  Form,
  Input,
  Button,
  Row,
  Col,
  DatePicker,
  List,
  Skeleton,
  Avatar,
  Space,
  Card
} from "antd";
import Link from "next/link";
import {
  LikeOutlined,
  MessageOutlined,
  ScheduleOutlined,
  StarOutlined
} from "@ant-design/icons";

React.useLayoutEffect = React.useEffect;

export const DetailObjek = ({data=null}) => {

console.log(data)
  const { Option } = Select;

  const onChange = (value) => {
  };

  const onClick = () => {
    setstate((prev) => ({ ...prev, filtered: null }));
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

  const gridStyle = {
    width: "50%",
    textAlign: "left",
    loopcard: []
  };
  return data != null && (
    <>
      <DashboardLayout>
        <Form
          layout="vertical"
        >
        <Form.Item label="Destinasi :">
            <h2>{data.destination}</h2>
        </Form.Item>
          <Form.Item label="Deskripsi :">
          <h5 className="font-weight-normal">{data.description}</h5>
          </Form.Item>
          <Form.Item label="Link :">
          <h6 className="font-weight-normal font-italic">{data.link}</h6>
          </Form.Item>
        
      {/* <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
        </Form>
      </DashboardLayout>
    </>
  );
};