import { notification, message } from "antd";
import Router from "next/router";
import objectRepository from "../../repositories/objectRepository";

const modalSuccess = (type, name) => {
  notification[type]({
    message: "Wellcome back " + name,
    description: "You are login successful!"
  });
};

const modalSuccessRegis = (type) => {
  notification[type]({
    message: "Tambah data berhasil",
    description: "Silakan kembali ke list objek wisata untuk melihat!"
  });
};

const modalWarning = (type) => {
  notification[type]({
    message: "Good bye!",
    description: "Your account has been logged out!"
  });
};

const modalFailed = (type) => {
  notification[type]({
    message: "Gagal",
    description: "Gagal mendapatkan detail objek"
  });
};

const loginFailed = (type, msg) => {
  notification[type]({
    message: "Login gagal!",
    description: msg
  });
};

const modalVerification = (type) => {
  notification[type]({
    message: "Verification sukses.",
    description: "Verification berhasil dilakukan",
    duration: 5
  });
};

const modalForgot = (type) => {
  notification[type]({
    message: "Forgot password sukses.",
    description: "Mohon untuk cek email anda",
    duration: 5
  });
};

const modalChangePass = (type) => {
  notification[type]({
    message: "Mengganti password sukses.",
    description: "Mohon untuk login kembali",
    duration: 5
  });
};

const modalEmailAlready = (type) => {
  notification[type]({
    message: "Email anda sudah terdaftar",
    description: "Mohon untuk menggunakan email lain",
    duration: 5
  });
};

const modalRegistFailed = (type) => {
  notification[type]({
    message: "Register gagal!",
    description: "Mohon dicek kembali fieldnya"
  });
};

export const actionTypes = {
  CURRENT_REGISTER_OBJECT: "CURRENT_REGISTER_OBJECT",
  REGISTER_OBJECT_REQUEST: "REGISTER_OBJECT_REQUEST",
  REGISTER_OBJECT_SUCCESS: "REGISTER_OBJECT_SUCCESS",
  REGISTER_MAP_OBJECT_REQUEST: "REGISTER_MAP_OBJECT_REQUEST",
  REGISTER_MAP_OBJECT_SUCCESS: "REGISTER_MAP_OBJECT_SUCCESS",
  LIST_OBJECT_REQUEST: "LIST_OBJECT_REQUEST",
  LIST_OBJECT_SUCCESS: "LIST_OBJECT_SUCCESS",
  DETAIL_OBJECT_REQUEST: "DETAIL_OBJECT_REQUEST",
  DETAIL_OBJECT_SUCCESS: "DETAIL_OBJECT_SUCCESS"
};

export const listObject = () => async (dispatch) => {
  try {
    const getObject = await objectRepository.getObjekWisata();
    if (getObject.responseMessage == "SUCCESS") {
      dispatch(listObjectSuccess(getObject.data));
    }
  } catch (error) {
    console.log(error);
  }
};
export const listObjectSuccess = (data) => {
  return {
    type: actionTypes.LIST_OBJECT_SUCCESS,
    payload: data
  };
};
export const detailObject = (payload) => async (dispatch) => {
  try {
    const detail = await objectRepository.getDetailObjekWisata(payload);
    if (!detail) {
      modalFailed("error", "");
    } else {
      if (detail.responseMessage === "SUCCESS") {
        dispatch(detailObjectSuccess(detail.data));
      } else {
        modalFailed("error", detail.responseMessage);
        Router.push({
          pathname: "/dashboard/objek-wisata"
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
export const currentObject = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.CURRENT_REGISTER_OBJECT,
    payload: data
  });
};
export const detailObjectSuccess = (data) => {
  return {
    type: actionTypes.DETAIL_OBJECT_SUCCESS,
    payload: data
  };
};
export const registObject = (payload) => async (dispatch) => {
  try {
    const hide = message.loading({
      content: "Data sedang diproses...",
      className: "custom-class",
      style: {
        marginTop: "20vh"
      }
    });
    // Dismiss manually and asynchronously
    setTimeout(hide, 1500);
    const regis = await objectRepository.registObjekWisata(payload);
    if (regis.responseMessage == "SUCCESS") {
      dispatch(registObjectSuccess(regis.data));
      listObject()(dispatch);
      modalSuccessRegis("success");
      Router.push({
        pathname: "/dashboard"
      });
    } else {
      modalRegistFailed("error");
    }
  } catch (error) {
    console.log(error);
  }
};
export const registObjectSuccess = (data) => {
  return {
    type: actionTypes.REGISTER_OBJECT_SUCCESS,
    payload: data
  };
};
export const registMapObject = (data) => {
  return {
    type: actionTypes.REGISTER_MAP_OBJECT_REQUEST,
    payload: data
  };
};
export const registMapObjectSuccess = (data) => {
  return {
    type: actionTypes.REGISTER_MAP_OBJECT_SUCCESS,
    payload: data
  };
};
