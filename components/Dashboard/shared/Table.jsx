import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table, Button, Space, Popconfirm } from "antd";
import Notif from "../../shared/notification";
import { delTodo } from "/store/actions/todoActions";
export default function DashboardTable({openForm, data, getIndex, edit, form,setstate}){
    
  const dispatch = useDispatch();

  const editData = (recordEdit, index) => {
    form.setFieldsValue(recordEdit);
    setstate(prevState=>({
      ...prevState,
      getIndex: index,
      edit: !edit,
      openForm: !openForm,
    }));
  };

  const deleteData = (record) => {
    dispatch(delTodo(record.key));
    Notif("success", "Data berhasil dihapus");
  };

  const column = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Barang",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Harga",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="primary" onClick={() => editData(record, index)}>
            Edit
          </Button>
          <Button danger>
            <Popconfirm title="Yakin mau dihapus?" onConfirm={() => deleteData(record)} danger>
              Delete
            </Popconfirm>
          </Button>
        </Space>
      ),
    },
  ];
    return(
        
      <Table columns={column} dataSource={data} />
    )
}