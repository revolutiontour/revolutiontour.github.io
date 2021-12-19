import Link from "next/link";
import router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import { LogoutUser } from "../store/actions/UserActions";
// import Image from "next/image";
export default function Header() {
  const { Header } = Layout;
  const { pathname, push } = useRouter();
  const isLogged = useSelector((state) => state.member.success);
  const dispatch = useDispatch();
  const menu = [
    {
      url: "/",
      text: "Home",
    },
    // {
    //   url: "/users/register",
    //   text: "Registration",
    // },

    {
      url: "/dashboard",
      text: "Dashboard",
      login: true,
    },
  ];
  const Logout = () => {
    dispatch(LogoutUser());
    push("/users/login");
  };
  return (
    <>
      <Header style={{ zIndex: 1, width: "100%", background: "#fff" }}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={[pathname]} style={{ lineHeight: "64px", width: "50%", float: "left" }}>
          <Menu.Item key="logo">
            {/* <Image src="/img/logo/tesla.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </Menu.Item>
          {menu.map((el) =>
            el.login ? (
              isLogged && (
                <Menu.Item key={el.url}>
                  <Link href={el.url}>{el.text}</Link>
                </Menu.Item>
              )
            ) : (
              <Menu.Item key={el.url}>
                <Link href={el.url}>{el.text}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            lineHeight: "64px",
            width: "50%",
            float: "right",
            justifyContent: "end",
          }}
        >
          {isLogged ? (
            <Menu.Item key="logo" style={{ marginRight: 0 }} onClick={Logout}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="logo" style={{ marginRight: 0 }}>
              <Link href="/users/login">Login</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </>
  );
}
