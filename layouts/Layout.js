import Footer from "./Footer";
import Header from "./Header";
import { Row, Col } from "antd";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
// import Sidebar from './Sidebar';
export default function Layout(props) {
  const {asPath} = useRouter()
  const { children, bgContent = "white",isLinearbg=false } = props;
  return (
    <>
    <Head>
      <title>Tourify</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <style jsx global>
      {`
      .bg-orange {
        background:#FF730E !important;
        border-color:#FF730E !important;
      }
      .text-orange {
        color:#FF730E !important;
      }
      .shadow-lg-orange {
        box-shadow:0 20px 25px -5px rgb(232 140 48/20%),0 10px 10px -5px rgb(232 140 48/4%)!important;
      }
      .sosmed:hover {
        background:#FF730E!important;
      }
      .sosmed:hover svg path {
        fill:white;
      }
      `}
    </style>
    <div className="landing-layout" style={{
      background:isLinearbg && "linear-gradient(135deg, rgba(252,229,213,1) 0%, rgba(255,255,255,1) 65%)"
    }}>
      <Header />
      <Row
        justify="center"
        style={{ backgroundColor: bgContent, minHeight: "100vh" }}
      >
        {asPath==="/" && 
          <div className="position-absolute" style={{
            right:0}}>
          <img src="img/map.png"/>
          </div>
        }
        <Col className="align-self-center" xs={20} md={18}>
          {children}
        </Col>
      </Row>
    </div>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>

      <Script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></Script>

      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></Script>
      {/* <Row justify="center" align="middle">
        <Col span={24} flex="auto">
          <Footer />
        </Col>
      </Row> */}
    </>
  );
}
