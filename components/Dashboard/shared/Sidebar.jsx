import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu } from "antd";
import {
  ProjectOutlined,
  ScheduleOutlined,
  ShopOutlined,
  UserAddOutlined,
  TeamOutlined
} from "@ant-design/icons";

export const DashboardSidebar = ({collapsed}) => {
  const { SubMenu } = Menu;
  const { pathname } = useRouter();
  const menu = [
    {
      url: "/dashboard",
      text: "Dashboard",
      icon: (
        <>
          <ProjectOutlined />
        </>
      )
    },
    {
      url: "/dashboard/anggota",
      text: "Anggota",
      icon: (
        <>
          <TeamOutlined />
        </>
      ),
      submenu: [
        {
          url: "/dashboard/anggota",
          text: "List Anggota",
          icon: (
            <>
              <TeamOutlined />
            </>
          )
        },
        {
          url: "/dashboard/anggota/tambah",
          text: "Tambah Anggota",
          icon: (
            <>
              <TeamOutlined />
            </>
          )
        }
      ]
    },
    {
      url: "/dashboard/jadwal",
      text: "Jadwal",
      icon: (
        <>
          <ScheduleOutlined />
        </>
      ),
      submenu: [
        {
          url: "/dashboard/jadwal",
          text: "List Jadwal",
          icon: (
            <>
              <ScheduleOutlined />
            </>
          )
        },
        {
          url: "/dashboard/jadwal/tambah",
          text: "Tambah Jadwal",
          icon: (
            <>
              <ScheduleOutlined />
            </>
          )
        }
      ]
    },
    {
      url: "/dashboard/objek-wisata",
      text: "Objek Wisata",
      icon: (
        <>
          <ShopOutlined />
        </>
      ),
      submenu: [
        {
          url: "/dashboard/objek-wisata",
          text: "List Objek",
          icon: (
            <>
              <ShopOutlined />
            </>
          )
        },
        {
          url: "/dashboard/objek-wisata/tambah",
          text: "Tambah Objek",
          icon: (
            <>
              <ShopOutlined />
            </>
          )
        }
      ]
    },
    {
      url: "/dashboard/pendaftaran",
      text: "Pendaftaran",
      icon: (
        <>
          <UserAddOutlined />
        </>
      )
    }
  ];
  return (
    <>
    {!collapsed && 
    <h6 className="text-white p-4">
      <div className="row">
        <div className="col-6 align-self-center text-center">Logo</div>
        <div className="col-6">Tour Guide <br /> Dashboard</div>
      </div>
      </h6>}
    <Menu theme="dark" style={{backgroundColor:"#E88C30"}} mode="inline" defaultSelectedKeys={[pathname]}>
      
      {menu.map(({ url, icon, text, submenu }) => (
          submenu ? (
            <SubMenu className="sidebar-sub-menu" key={url} icon={icon} title={text}>
              {submenu.map((el) => (
                <>
                  <Menu.Item icon={el.icon} key={el.url}><Link href={el.url}>{el.text}</Link></Menu.Item>
                </>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={url} icon={icon}>
            <Link href={url}>{text}</Link>
            </Menu.Item>
          )
      ))}
    </Menu>
    </>
  );
};
