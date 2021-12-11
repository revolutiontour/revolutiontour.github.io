import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Table,
  Button,
  Space,
  Popconfirm,
  Form,
  Layout,
  Menu,
  Card,
  Col,
  Row,Drawer
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProjectOutlined,
  ScheduleOutlined,
  ShopOutlined,
  UserAddOutlined,
  TeamOutlined
} from "@ant-design/icons";
import ModalForm from "./ModalForm";
import { useSelector, useDispatch } from "react-redux";
import { DashboardSidebar } from "./Sidebar";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

React.useLayoutEffect = React.useEffect;

export const DashboardLayout = ({ children }) => {
  const { push } = useRouter();
  const isLogged = useSelector((state) => state.member.success);
  const [state, setstate] = useState({
    openForm: false,
    edit: false,
    getIndex: null,
    record: null,
    collapsed: false,
    visible: false
  });
  const { Header, Sider, Content } = Layout;
  const { collapsed } = state;
  const toggle = () => {
    setstate({
      ...state,
      collapsed: !collapsed
    });
  };

  const showDrawer = () => {
    setstate(prev=>({
      ...prev,
      visible: true,
    }));
  };
const onClose = () => {
  setstate(prev=>({
    ...prev,
    visible: false,
  }));
  };


  useEffect(() => {
    if (!isLogged) {
      return push("/users/login");
    }
  }, []);
  if (!isLogged) {
    return (<>Loading...</>)
  }else{

    return (
      <>
        <Layout>
          <Sider
            trigger={null}
            style={{ backgroundColor: "#E88C30", minWidth: "20vw" }}
            width="300"
            collapsible
            collapsed={collapsed}
            className="d-none d-md-block"
          >
            <DashboardSidebar {...state} />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background px-0 px-md-5">
             
            <nav className="menuBar">
                <div 
            className="logo d-none d-md-block">
                  
                <a className="align-self-center" onClick={toggle}>
                    {!collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  </a>
                </div>
                <div className="menuCon">
                  <div className="leftMenu d-block">
                    <LeftMenu />
                  </div>
                  <div className="rightMenu">
                    <RightMenu />
                  </div>
                  {!collapsed &&
                  <div
                    className="float-right barsMenu"
                    onClick={showDrawer}
                  >
                  <a onClick={showDrawer}>
                     
                    <MenuFoldOutlined />
                    </a>
                  </div>}
                  <Drawer
                    title="Dashboard Menu"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={state.visible}
                  >
                    {/* <LeftMenu /> */}
                    <RightMenu />
                  </Drawer>
                </div>
              </nav>
            </Header>
            <Content
              className="site-layout-background px-5 py-4 rounded shadow-sm"
              style={{
                margin: "24px 16px",
                minHeight: "90vh"
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
};
