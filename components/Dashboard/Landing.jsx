import React, { useState, useEffect, useContext } from "react";
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
import { DashboardLayout } from "./shared/Layout";
import { GetRootContext, RootContext } from "../../context/context";

export const DashboardLanding = () => {
  const {state:globalState,dispatch}= useContext(RootContext)
  const [state, setstate] = useState({
    openForm: false,
    edit: false,
    getIndex: null,
    record: null
  });
  const [form] = Form.useForm();
  const topFiveObject = globalState.object?.oAll?.slice(-5).reverse()
  const topFiveSchedule = globalState.schedule?.sAll?.slice(-5).reverse()
  const topFiveParticipant = globalState.member?.participant?.slice(-5).reverse()
  console.log(topFiveSchedule)
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
                className="text-white text-center rounded-lg"
                style={{
                  backgroundColor: "#2196f3",
                  border: "none"
                }}
              >
                <div className="row">
                  <div className="col-12">
                    <h1 className="text-white">{globalState.member?.participant?.length||0}</h1>
                    <h6 className="text-white">Partisipan bergabung</h6>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card
                className="text-white rounded-lg text-center"
                style={{
                  backgroundColor: "#4cb051",
                  border: "none"
                }}
              >
              <div className="row">
                <div className="col-12">
                  <h1 className="text-white">{globalState.schedule?.sAll?.length||0}</h1>
                  <h6 className="text-white">Jadwal perjalanan</h6>
                </div>
              </div>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card
                className="text-white rounded-lg text-center"
                style={{
                  backgroundColor: "#ff9800",
                  border: "none"
                }}
              >
              <div className="row">
                <div className="col-12">
                  <h1 className="text-white">{globalState.object?.oAll?.length||0}</h1>
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
                {topFiveSchedule?.map(({title,destination,startDate,endDate}, i) => (
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <h6>{title}</h6>
                    <p>Destinasi : {destination}</p>
                    <div className="row">
                      <div className="col-6 align-self-center">
                        <ScheduleOutlined
                          style={{ verticalAlign: "0.125em" }}
                        />{" "}
                        <span className="ml-2">Start : {startDate}</span>
                      </div>
                      <div className="col-6 align-self-center">
                        <ScheduleOutlined
                          style={{ verticalAlign: "0.125em" }}
                        />{" "}
                        <span className="ml-2">End : {endDate}</span>
                      </div>
                    </div>
                  </Card.Grid>
                ))||
                <>Data tidak tersedia</>}
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card className="shadow-sm rounded-lg" title="Objek Destinasi">
                {topFiveObject?.map(({name,desc}, i) => (
                  <Card.Grid hoverable={false} style={gridStyle}>
                    <h6>{name}</h6>
                    <p>
                      {desc}
                    </p>
                    {/* <p>Link : www.gunungsalak.com</p> */}
                  </Card.Grid>
                ))||
                <>Data tidak tersedia</>}
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
