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
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import {Col, Row} from "react-bootstrap"
import { ObjekWisataIcon } from "../shared/icons/objekwisata";
import { List404 } from "./shared/404List";

React.useLayoutEffect = React.useEffect;
export const DashboardObjekWisata = ({data}) => {

  const [state, setstate] = useState({
    filtered: null,
    thedata: data?.length>0?data:[]
  });
  const filterData = (value) => {
    var { thedata } = state;
    return thedata.filter((user) => {
      return (
        user.name.toLowerCase().search(value.toLowerCase()) != -1 ||
        user.desc.toLowerCase().search(value.toLowerCase()) != -1
      );
    });
  };

  const { Option } = Select;
  const onChange = (e) => {
    const { value } = e.target;
    var filtered = "";
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
  const { role } = state;
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Objek Wisata</h4>
        <Form layout="horizontal" className="mb-3">
          <Row className="mb-3">
            <Col className="align-self-center" xs={8} md={10}>
                <Input
                  size="large"
                  onChange={onChange}
                  placeholder="Search..."
                />
            </Col>
            <Col>
                <Button type="primary" htmlType="submit">
                  Cari
                </Button>
            </Col>
          </Row>
          <Row>
            <Col>
            <Link href="/dashboard/objek-wisata/tambah">
              <Button type="primary" htmlType="submit">
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
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10
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
                  <ObjekWisataIcon/>
                }
                  title={<Link href={item.href} as={item.customUrl}>{item.name}</Link>}
                  description={item.desc}
                />
                {/* {item.content} */}
              </Skeleton>
            </List.Item>
          )}
        />
      :
      
      <List404 msg="Objek Wisata"/>
      }
      </DashboardLayout>
    </>
  );
};