import Head from "next/head";
// import Image from "next/image";
import Layout from "../layouts/Layout";
import styles from "../styles/Home.module.css";
import { Row, Col, Button } from "react-bootstrap";
import {
  FacebookIcon,
  Globe,
  GreenGlobe,
  HomeSchedule,
  IconHP,
  InstagramIcon,
  PencarianPeserta,
  SearchLocation,
  SendIcon,
  TourifyLogo,
  TwitterIcon
} from "../components/shared/icons";
import { CustomSlider } from "../components/Landing";
import { InputGroup, FormControl } from "react-bootstrap";
import objectRepository from "../repositories/objectRepository"
import { useState } from "react";

export default function Home() {
  const [getLoc, setgetLoc] = useState(null)
  const date = new Date();
const currentDate = date.toLocaleDateString('en-GB', {
  day: '2-digit', month: 'long', year: 'numeric'
}).replace(/ /g, ' ');

if(!getLoc){
  navigator.geolocation.getCurrentPosition(async function(position) {
    let getloc = await objectRepository.getCurrentLoc({
      lat:position.coords.latitude,
      long:position.coords.longitude
    })
    console.log(getloc)
    setgetLoc(getloc.items[0].address.city)
  });
}
console.log(getLoc)

  return (
    <>
      <Layout bgContent="transparent" isLinearbg>
        <Row className="py-5">
          <Col xs="12" md="6" className="my-5 align-self-center">
            <h1 className="mt-5 font-weight-bold display-4">
              Jadilah partisipan dari salah satu perjalanan tur kami
            </h1>
            <p className="my-5">
              Kami selalu membuat para pelanggan senang dan menyediakan fitur
              terbaik pada produk kami
            </p>
            <div className="d-none d-md-inline-flex flex-row rounded-pill p-2 shadow-lg bg-white">
              <Globe />
              <div className="ml-3 flex-column align-self-center pr-5 border-right">
                <p className="m-0">Lokasi</p>
                <p className="m-0">{getLoc??"Jakarta, Indonesia"}</p>
              </div>
              <div className="ml-3 align-self-center">
                <HomeSchedule />
              </div>
              <div className="ml-3 flex-column align-self-center pr-5">
                <p className="m-0">Jadwal</p>
                <p className="m-0">{currentDate}</p>
              </div>
              <SearchLocation />
            </div>
          </Col>
          <Col
            xs="12"
            md="6"
            className="d-flex justify-content-center justify-content-md-end position-relative"
          >
            <img src="img/phone.png" />
          </Col>
        </Row>
        <Row className="py-5 align-content-center align-items-center h-100">
          <Col
            xs="12"
            md="4"
            className="my-5 my-md-0 mr-md-5 align-self-center"
          >
            <h4 className="text-orange font-weight-bold">
              Apa yang kami sediakan?
            </h4>
            <h1>Layanan terbaik untuk kamu 🔥</h1>
            <p>Berbagai fitur menarik pada aplikasi yang dapat kamu nikmati</p>
          </Col>
          <Col
            xs="12"
            md="2"
            className="my-5 my-md-0 mx-md-4 align-self-center"
          >
            <p className="text-left">
              <GreenGlobe />
            </p>
            <h6>Objek Wisata Beragam</h6>
            <p>Tersedia fitur tujuan objek menarik terdekat</p>
          </Col>
          <Col
            xs="12"
            md="2"
            className="my-5 my-md-0 mx-md-4 align-self-center"
          >
            <p className="text-left">
              <PencarianPeserta />
            </p>
            <h6>Pencarian Peserta Tour</h6>
            <p>Tersedia fitur pencarian peserta yang keluar jalur perjalanan</p>
          </Col>
          <Col
            xs="12"
            md="2"
            className="my-5 my-md-0 mx-md-4 align-self-center"
          >
            <p className="text-left">
              <IconHP />
            </p>
            <h6>Pelacakan Posisi Peserta</h6>
            <p>Tersedia fitur pelacakan posisi peserta secara realtime</p>
          </Col>
        </Row>
        <div className="container-fluid py-5 px-0">
          <CustomSlider />
        </div>
      </Layout>
      <section
        className="d-md-block"
        style={{
          background: "#FFF8EF"
        }}
      >
        <div className="ant-row ant-row-center">
          <div className="ant-col ant-col-18 align-self-center">
            <div className="row py-5">
              <div className="col-12 col-md-3 me-5 d-flex flex-column mb-5">
                <TourifyLogo width={60} />
                <p className="my-4">
                  Kami selalu menyediakan produk terbaik dan membuat para
                  pelanggan puas
                </p>
                <div className="d-flex flex-row">
                  <a className="sosmed bg-white rounded-circle p-3 mr-3 text-decoration-none">
                    <InstagramIcon />
                  </a>
                  <a className="sosmed bg-white rounded-circle p-3 mr-3 text-decoration-none">
                    <FacebookIcon />
                  </a>
                  <a className="sosmed bg-white rounded-circle p-3 mr-3 text-decoration-none">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-2 me-5 d-flex flex-column mb-5">
                <h5 className="mb-3">About</h5>
                <p className="mb-3">About Us</p>
                <p className="mb-3">Berita</p>
              </div>
              <div className="col-12 col-md-2 me-5 d-flex flex-column mb-5">
                <h5 className="mb-3">Information</h5>
                <p className="mb-3">Kontak</p>
                <p className="mb-3">Blog</p>
                <p className="mb-3">Partnership</p>
              </div>
              <div className="col-12 col-md-2 me-5 d-flex flex-column mb-5">
                <h5 className="mb-3">Bantuan</h5>
                <p className="mb-3">FAQ</p>
                <p className="mb-3">Pusat Bantuan</p>
              </div>
              <div className="col-12 col-md-3 me-5 d-flex flex-column mb-5">
                <h5 className="mb-3">Saran dan masukan</h5>
                <p className="mb-4">
                  Pertanyaan atau saran, bisa disampaikan melalui kolom berikut
                </p>

                <InputGroup className="mb-3 p-2 rounded-pill bg-white rounded shadow-lg">
                  <FormControl
                    className="border-0 align-self-center"
                    placeholder="Email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    className="bg-orange mx-auto p-3 rounded-circle text-white"
                    id="basic-addon2"
                  >
                    <SendIcon />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
