import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import {
  Select,
  Form,
  Input,
  Button,
  // Row,
  // Col,
  List,
  Skeleton,
  Space,
  Avatar,
  Radio
} from "antd";
import {Col, Row} from "react-bootstrap"
import Link from "next/link";
import { ProfilePicture } from "../shared/icons";
import { List404 } from "./shared/404List";

React.useLayoutEffect = React.useEffect;

export const DashboardAnggota = ({data}) => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
      i%2===0?
    listData.push({
      href: "https://ant.design",
      role:"leader",
      title: `mamangkesbor${i}`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content: "content"
    })
    :
    listData.push({
      href: "https://ant.design",
      role:"participant",
      title: `mamangkesbor${i}`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content: "content"
    })
    ;
  }
  
  const [state, setstate] = useState({
    filtered: null,
    role:"participant",
    // thedata:[]
    thedata:data?.length>0?data.filter((user)=>user.role==='participant'&&user):[]
  });
  const filterData = (value) => {
      let{thedata} = state
      return thedata.filter((user) => {
      return (
        (user.name.toLowerCase().search(value.toLowerCase()) != -1 ||
        user.email.toLowerCase().search(value.toLowerCase()) != -1) && user.role === state.role
      );
    });
  };
  
  const filterRole = (e) => {
    const { value } = e.target;
    let thedata = data.filter((user)=>user.role===value&&user);
    setstate(prev=>({...prev,thedata,role:value}))
  };
  const { Option } = Select;
  const onChange = (e) => {
    const { value } = e.target;
    let filtered = ''
    filtered = filterData(value);

    setstate((prev) => ({
      ...prev,
      filtered
    }));
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
  const {role} = state
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Anggota</h4>
        <Form layout="horizontal" className="mb-3">
          <Row className="mb-3">
            <Col xs={8} md={10} className="align-self-center">
                <Input size="large" onChange={onChange} placeholder="Search..." />
            </Col>
            <Col className="align-self-center">
                <Button type="primary" htmlType="submit">
                  Cari
                </Button>
            </Col>
          </Row>
          <Row className="justify-content-start">
          <Col xs={12} md={2} className="mb-3 mb-md-0 align-self-center">
            <Radio.Group
            onChange={filterRole}
            value={role}
            className="align-self-center"
            >
              <Radio value={"participant"}>Participant</Radio>
              <Radio value={"leader"}>Leader</Radio>
            </Radio.Group>
            </Col>
          <Col xs={12} md="10">
            <Link href="/dashboard/anggota/tambah">
                <Button className="ml-0 ml-md-3" type="primary" htmlType="submit">
                  + Tambah
                </Button>
                </Link>
                </Col>
          </Row>
        </Form>
        {state.thedata.length>0?
        <List
          itemLayout="horizontal"
          size="large"
          pagination={{
            // onChange: (page) => {
            //   console.log(page);
            // },
            pageSize: 10,
          }}
          dataSource={state.filtered || state.thedata}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
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
                  <ProfilePicture />
                }
                  title={<a href={item.href}>{item.name}</a>}
                  description={item.email}
                />
                {/* {item.content} */}
              </Skeleton>
            </List.Item>
          )}
        />
        :
        <List404/>
        }
      </DashboardLayout>
    </>
  );
};
