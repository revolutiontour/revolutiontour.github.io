import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logoutMemberSuccess } from "../../../store/actions/member";
import Link from "next/link";

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
  return (
    <Menu mode="horizontal">
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
  );
}
