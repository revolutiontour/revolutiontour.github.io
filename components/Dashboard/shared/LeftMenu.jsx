import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Link from "next/link";

const menu = [
    {
      url: "/",
      text: "Tourify"
    }
    // {
    //   url: "/users/register",
    //   text: "Registration",
    // },

    // {
    //   url: "/dashboard",
    //   text: "Dashboard",
    //   login: true,
    // },
  ];
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       {menu.map(({url,text})=>
       <Menu.Item key="mail">
          <Link href={url}>{text}</Link>
        </Menu.Item>
        )}
      </Menu>
    );
  }
}
export default LeftMenu;