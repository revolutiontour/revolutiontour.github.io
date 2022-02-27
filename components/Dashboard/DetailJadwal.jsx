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

export const DetailJadwal = ({data}) => {


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
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Detail Jadwal</h4>
        <Form
          layout="vertical"
        >
        <Form.Item label="Nama Acara">
            <h4>{data?.title}</h4>
        </Form.Item>
          <Form.Item label="Tanggal Mulai Acara :">
          <p>{data?.startDate}</p>
          </Form.Item>
          <Form.Item label="Tanggal Selesai Acara :">
          <p>{data?.endDate}</p>
          </Form.Item>
          <Form.Item label="Objek Destinasi :">
          <p>{data?.destination}</p>
          </Form.Item>
          <Form.Item label="Tour Leader :">
              <p>{data?.leaderName}</p>
          </Form.Item>
          
          <Card className="shadow-sm rounded-lg" title="Partisipan :" style={gridStyle}>
                {data?.participants?.map(({id,name}) => (
                  <Card.Grid hoverable={false} style={{width:'100%'}}>
                    <h6>{name}</h6>
                  </Card.Grid>
                ))||<p>Belum ada partisipan</p>}
              </Card>
        
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
