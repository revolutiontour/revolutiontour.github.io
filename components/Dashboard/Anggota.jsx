import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import {
  Select,
  Form,
  Input,
  Button,
  Row,
  Col,
  List,
  Skeleton,
  Space,
  Avatar,
  Radio
} from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { listLeader } from "../../store/actions/member";
import { useSelector } from "react-redux";

React.useLayoutEffect = React.useEffect;

export const DashboardAnggota = ({data}) => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
      i%2===0?
    listData.push({
      href: "https://ant.design",
      role:"leader",
      title: `mamangkesbor${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content: "content"
    })
    :
    listData.push({
      href: "https://ant.design",
      role:"participant",
      title: `mamangkesbor${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content: "content"
    })
    ;
  }
  
  const [state, setstate] = useState({
    filtered: null,
    role:"participant",
    thedata:data.filter((user)=>user.role==='participant'&&user)
  });
  const filterData = (value) => {
      var{thedata} = state
      return thedata.filter((user) => {
      return (
        (user.name.toLowerCase().search(value.toLowerCase()) != -1 ||
        user.email.toLowerCase().search(value.toLowerCase()) != -1) && user.role === state.role
      );
    });
  };
  
  const filterRole = (e) => {
    const { value } = e.target;
    var thedata = data.filter((user)=>user.role===value&&user);
    setstate(prev=>({...prev,thedata,role:value}))
  };
  const { Option } = Select;
  const onChange = (e) => {
    const { value } = e.target;
    var filtered = ''
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
          <Row>
            <Col span={22} className="align-self-center">
              <Form.Item label="">
                <Input size="large" onChange={onChange} placeholder="Search..." />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item label=" " className="ml-3" colon={false}>
                <Button type="primary" htmlType="submit">
                  Cari
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Radio.Group
            onChange={filterRole}
            value={role}
            className="align-self-center"
            >
              <Radio value={"participant"}>Participant</Radio>
              <Radio value={"leader"}>Leader</Radio>
            </Radio.Group>
            
            <Link href="/dashboard/anggota/tambah">
                <Button className="ml-3" type="primary" htmlType="submit">
                  + Tambah Anggota
                </Button>
                </Link>
          </Row>
        </Form>
        <List
          itemLayout="horizontal"
          size="large"
          pagination={{
            // onChange: (page) => {
            //   console.log(page);
            // },
            pageSize: 3,
          }}
          dataSource={state.filtered || state.thedata}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
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
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.name}</a>}
                  description={item.email}
                />
                {/* {item.content} */}
              </Skeleton>
            </List.Item>
          )}
        />
      </DashboardLayout>
    </>
  );
};
