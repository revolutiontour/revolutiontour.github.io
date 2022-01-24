import Link from "next/link";
import router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import { LogoutUser } from "../store/actions/UserActions";
import { CustomNav } from "../components/Landing"; 
// import Image from "next/image";
export default function Header() {
  return (
    <>
    <CustomNav/>
    </>
  );
}
