import React, { useState, useEffect } from "react";
import { DashboardLayout } from "./shared/Layout";
import { Select, Form,Input,Button, Row, Col, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { registTourGroupSchedule, registTourSchedule } from "../../store/actions/schedule";
React.useLayoutEffect = React.useEffect;

export const DashboardPendaftaran = ({data}) => {
  const dispatch = useDispatch();
  const {schedule,participant} = data
  console.log(data)
  const { Option } = Select;
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onFinish = (values) => {
    
    var formdata = new FormData();
    formdata.append('participantId', `${values.participantId}`);
    formdata.append('scheduleId', `${values.scheduleId}`);
    dispatch(registTourGroupSchedule(formdata))
  }

  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };
  return (
    <>
      <DashboardLayout>
        <h4 className="text-dark font-weight-bold mb-4">Pendaftaran</h4>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
        <Form.Item name="scheduleId" label="Jadwal"
          rules={[{ 
            required: true,
            message: 'Mohon Dipilih Jadwal',
           }]}>
          <Select
            showSearch
            placeholder="Pilih Jadwal"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {schedule.map(({id,title})=>
            <Option value={id}>{title}</Option>
            )}
          </Select>
        </Form.Item>
          <Form.Item name="participantId" label="Partisipan"
          rules={[{ 
            required: true,
            message: 'Mohon Dipilih Partisipan',
           }]}>
            <Select
              showSearch
              placeholder="Pilih Partisipan"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {participant.map(({id,name})=>
              <Option value={id}>{name}</Option>
              )}
            </Select>
          </Form.Item>
        
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
      </DashboardLayout>
    </>
  );
};
