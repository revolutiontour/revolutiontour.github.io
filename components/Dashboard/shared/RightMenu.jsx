import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logoutMemberSuccess } from "../../../store/actions/member";
import Link from "next/link";
import {
  ProjectOutlined,
  ScheduleOutlined,
  ShopOutlined,
  UserAddOutlined,
  TeamOutlined
} from "@ant-design/icons";

export default function RightMenu() {
  const isLogged = useSelector((state) => state.member.success);

  const Logout = () => {
    dispatch(logoutMemberSuccess());
    push("/users/login");
  };
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;

  const { pathname, push } = useRouter();
  const dispatch = useDispatch();
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
    <Menu mode="inline" className="d-none d-md-block py-1 align-self-center">

    {isLogged ? (
      <Menu.Item key="logout"onClick={Logout}>
        Logout
      </Menu.Item>
    ) : (
      <Menu.Item key="login">
        <Link href="/users/login">Login</Link>
      </Menu.Item>
    )}
    </Menu>
    <Menu mode="inline" className="d-block d-md-none">
      
      {menu.map(({ url, icon, text, submenu }) => (
          submenu ? (
            <SubMenu key={url} icon={icon} title={text}>
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
      
    {isLogged ? (
      <Menu.Item key="app"onClick={Logout}>
        Logout
      </Menu.Item>
    ) : (
      <Menu.Item key="app">
        <Link href="/users/login">Login</Link>
      </Menu.Item>
    )}
    </Menu>
    </>
  );
}
