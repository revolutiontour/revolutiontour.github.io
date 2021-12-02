import { message } from "antd";
export default function Notif(type, pesan) {
  return message[type](pesan);
}
