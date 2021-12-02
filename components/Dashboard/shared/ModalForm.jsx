import React from "react";
import { Modal, Form, Input, InputNumber, Button } from "antd";
import Notif from "../../shared/notification";
import { addTodo, editTodo } from "/store/actions/todoActions";
import { useDispatch } from "react-redux";

const ModalForm = ({ openForm, setstate, data, getIndex, edit, form }) => {
  const dispatch = useDispatch();
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const submitData = (values) => {
    if (edit === false) {
      const max = data.reduce((prev, current) => (prev.key > current.key ? prev.key : current.key));
      values.key = max + 1;
      try {
        dispatch(addTodo(values));
        Notif("success", "Data berhasil ditambahkan");
      } catch {
        Notif("error", "Data gagal ditambahkan");
      }
    } else {
      var EditData = data;
      EditData[getIndex].title = values.title;
      EditData[getIndex].price = values.price;
      dispatch(editTodo(EditData));
      try {
        setstate((prevState) => ({
          ...prevState,
          edit: false,
        }));
        Notif("success", "Data berhasil diubah");
      } catch {
        Notif("error", "Data gagal diubah");
      }
    }
    form.resetFields();
    setstate((prevState) => ({
      ...prevState,
      openForm: !openForm,
    }));
  };
  return (
    <Modal
      title={edit ? "Edit Data" : "Tambah Data"}
      visible={openForm}
      footer={null}
      onCancel={() =>
        setstate((prevState) => ({
          ...prevState,
          openForm: !openForm,
        }))
      }
      forceRender
    >
      <Form {...layout} onFinish={submitData} form={form}>
        <Form.Item name="title" label="Barang">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Harga">
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
