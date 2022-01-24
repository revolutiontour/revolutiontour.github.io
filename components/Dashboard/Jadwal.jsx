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
  Space
} from "antd";
import Link from "next/link";
import {
  LikeOutlined,
  MessageOutlined,
  ScheduleOutlined,
  StarOutlined
} from "@ant-design/icons";
import { Jadwal as JadwalIcon } from "../shared/icons";

React.useLayoutEffect = React.useEffect;

export const DashboardJadwal = (props) => {
  console.log(props)
  const {data} = props

  const IconText = ({ icon, text, className }) => (
    <>
      {React.createElement(icon, { className })}
      {React.createElement("span", { className: `${className} ml-1` }, text)}
    </>
  );

  const [state, setstate] = useState({
    filtered: null,
  });

  const { Option } = Select;

  const filterDate = (value) => {
    var thedata = data.filter((user) => user.startDate === value && user);
    return thedata;
  };

  const onChange = (value, dateString) => {
    if (dateString == "" || dateString == null) {
      return setstate((prev) => ({ ...prev, filtered: null }));
    }

    var date = new Date(value);
    var day = ('0' + date.getDate()).slice(-2)
    var month = ('0' + date.getMonth() + 1).slice(-2)
    var year = date.getFullYear();
    var filtered = filterDate([day, month, year].join("/"));
    setstate((prev) => ({ ...prev, dateString, filtered }));
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
  console.log("data :",data)
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Jadwal</h4>
        <Form layout="horizontal" className="mb-3">
          <div className="row">
            <div className="col-8 col-md-11 align-self-center">
              <Form.Item label="">
                <DatePicker
                  className="w-100"
                  size="large"
                  placeholder="Pilih Jadwal"
                  onChange={onChange}
                />
              </Form.Item>
            </div>
            <div className="col-4 col-md-1">
            <Button type="primary" htmlType="submit" onClick={onClick}>
                Cari
              </Button>
            </div>
          </div>

          <div className="d-flex">
            <div className="mr-3 align-self-center">
              <Button type="ghost" htmlType="submit" onClick={onClick}>
                Reset
              </Button>
            </div>
            <div className="mr-3 align-self-center">
                
            <Link href="/dashboard/jadwal/tambah">
                <Button type="primary" htmlType="submit">
                  + Tambah
                </Button>
                </Link>
            </div>
          </div>
        </Form>

        <List
          itemLayout="horizontal"
          size="large"
          pagination={{
            // onChange: (page) => {
            //   console.log(page);
            // },
            pageSize: 3
          }}
          dataSource={state.filtered || data}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              // actions={[
              //   <a key="list-loadmore-edit">edit</a>,
              //   <a key="list-loadmore-more">more</a>
              // ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <JadwalIcon/>
                  // <Avatar src={item.avatar} />
                }
                  title={<Link href={item.href} as={item.customUrl}>{item.title}</Link>}
                  description={[
                    <div className="d-inline-flex align-items-center mr-3">
                      <IconText
                        icon={ScheduleOutlined}
                        text={"Start : " + item.startDate}
                        className="align-self-center"
                      />
                    </div>,
                    <div className="d-inline-flex align-items-center mr-3">
                      <IconText
                        icon={ScheduleOutlined}
                        text={"End : " + item.endDate}
                        className="align-self-center"
                      />
                    </div>
                  ]}
                />
                {item.destination}
              </Skeleton>
            </List.Item>
          )}
        />
      </DashboardLayout>
    </>
  );
};
