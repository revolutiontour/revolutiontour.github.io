import { Select, Form,Input,Button, Row, Col, DatePicker  } from "antd";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { DashboardLayout } from "../Dashboard/shared/Layout";
import objectRepository from "../../repositories/objectRepository";
import { useState } from "react";

export default function Map(){
    const [state,setstate] = useState({
        lat:115.21793,
        lng:-8.66908
    })
    const apiKey = "BYrIifYEk_cazqQRnTgSzrkZcrq7UyvsF4ZPGTgg0fQ"
  const onChange = async(e) => {
    const { value } = e.target;
    const payload = {
        place:value
    }
    var res = await objectRepository.getPlaceWisata(payload)
    setstate(
        prev=>({
        ...prev,
        ...res.items[0].position
    }));
    console.log({...res.items[0].position})
  };

  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };
    return(
        <>
        <DashboardLayout>
        <Form layout="horizontal" className="mb-3">
          <Row>
            <Col className="align-self-center" span={22}>
              <Form.Item label="">
                <Input
                  size="large"
                  onChange={onChange}
                  placeholder="Search..."
                />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item label=" " className="ml-3" colon={false}>
                <Button type="primary" htmlType="submit">
                  Cari
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <MapContainer
        center={[state.lng, state.lat]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {
          ()=>{
            console.log(state.lng, state.lat)
          }
        }
        <TileLayer
          url={`https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/reduced.night/{z}/{x}/{y}/512/png8?apiKey=${apiKey}&ppi=320`}
          attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        />
        <Marker position={[state.lng, state.lat]} draggable={true} animate={true}>
          <Popup>Hey ! I live here</Popup>
        </Marker>
      </MapContainer>
        </DashboardLayout>
      </>
    );
}