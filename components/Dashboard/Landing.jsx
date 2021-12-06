import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Table,
  Button,
  Space,
  Popconfirm,
  Form,
  Layout,
  Menu,
  Card,
  // Col,
  // Row
} from "antd";
import {Col, Row} from "react-bootstrap"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProjectOutlined,
  ScheduleOutlined,
  ShopOutlined,
  UserAddOutlined,
  TeamOutlined
} from "@ant-design/icons";
import ModalForm from "./shared/ModalForm";
import { useSelector, useDispatch } from "react-redux";
import DashboardTable from "./shared/Table";
import { DashboardLayout } from "./shared/Layout";
React.useLayoutEffect = React.useEffect;

export const DashboardLanding = () => {
  const [state, setstate] = useState({
    openForm: false,
    edit: false,
    getIndex: null,
    record: null
  });
  const [form] = Form.useForm();

  const addData = () => {
    setstate({
      ...state,
      edit: false,
      openForm: true
    });
  };

  const gridStyle = {
    width: "100%",
    textAlign: "left",
    loopcard: []
  };

  return (
    <>
      <DashboardLayout>
        <div className="site-card-wrapper">
          <Row>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card
                className="text-white rounded-lg"
                style={{
                  backgroundColor: "#2196f3",
                  border: "none"
                }}
              >
                <div className="row">
                  <div className="col-6 align-self-center text-center">
                    <span>Logo</span>
                  </div>
                  <div className="col-6">
                    <h1 className="text-white">47</h1>
                    <h6 className="text-white">Partisipan bergabung</h6>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card
                className="text-white rounded-lg"
                style={{
                  backgroundColor: "#4cb051",
                  border: "none"
                }}
              >
              <div className="row">
                <div className="col-6 align-self-center text-center">
                  <span>Logo</span>
                </div>
                <div className="col-6">
                  <h1 className="text-white">100</h1>
                  <h6 className="text-white">Jadwal perjalanan</h6>
                </div>
              </div>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card
                className="text-white rounded-lg"
                style={{
                  backgroundColor: "#ff9800",
                  border: "none"
                }}
              >
              <div className="row">
                <div className="col-6 align-self-center text-center">
                  <span>Logo</span>
                </div>
                <div className="col-6">
                  <h1 className="text-white">25</h1>
                  <h6 className="text-white">Objek Destinasi</h6>
                </div>
              </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="site-card-wrapper mt-5">
          <Row>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card className="shadow-sm rounded-lg" title="Jadwal Terdekat">
                {[...Array(3)].map((x, i) => (
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <h6>Tour wisata alam</h6>
                    <p>Destinasi : Gunung Salak</p>
                    <div className="row">
                      <div className="col-6 align-self-center">
                        <ScheduleOutlined
                          style={{ verticalAlign: "0.125em" }}
                        />{" "}
                        <span className="ml-2">Start : 21/ 08/2021</span>
                      </div>
                      <div className="col-6 align-self-center">
                        <ScheduleOutlined
                          style={{ verticalAlign: "0.125em" }}
                        />{" "}
                        <span className="ml-2">End : 22/ 08/2021</span>
                      </div>
                    </div>
                  </Card.Grid>
                ))}
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card className="shadow-sm rounded-lg" title="Objek Destinasi">
                {[...Array(3)].map((x, i) => (
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <h6>Gunung Salak</h6>
                    <p>
                      Wisata alam dengan pemandangan yang masih penuh dengan
                      pepohonan
                    </p>
                    <p>Link : www.gunungsalak.com</p>
                  </Card.Grid>
                ))}
              </Card>
            </Col>
          </Row>
        </div>
        {/* <Button className="my-5" onClick={addData}>
              Tambah Data
            </Button>
            <DashboardTable
              {...state}
              data={data}
              setstate={setstate}
              form={form}
            />
            <ModalForm {...state} data={data} setstate={setstate} form={form} /> */}
      </DashboardLayout>
    </>
  );
};
