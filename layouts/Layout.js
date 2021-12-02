import Footer from "./Footer";
import Header from "./Header";
import { Row, Col } from "antd";
// import Sidebar from './Sidebar';
export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <Row justify="center">
        <Col span={18}>{children}</Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={24} flex="auto">
          <Footer />
        </Col>
      </Row>
    </>
  );
}
