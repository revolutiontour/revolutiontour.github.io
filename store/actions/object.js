export const actionTypes = {
      REGISTER_OBJECT_REQUEST:"REGISTER_OBJECT_REQUEST",
      REGISTER_OBJECT_SUCCESS:"REGISTER_OBJECT_SUCCESS",
      LIST_OBJECT_REQUEST:"LIST_OBJECT_REQUEST",
      LIST_OBJECT_SUCCESS:"LIST_OBJECT_SUCCESS",
      DETAIL_OBJECT_REQUEST:"DETAIL_OBJECT_REQUEST",
      DETAIL_OBJECT_SUCCESS:"DETAIL_OBJECT_SUCCESS",
    }
    
    export const listObject = () => {
      return {
        type: actionTypes.LIST_OBJECT_REQUEST,
      };
    };
    export const listObjectSuccess = (data) => {
      return {
        type: actionTypes.LIST_OBJECT_SUCCESS,
        payload: data,
      };
    };
    export const detailObject = (data) => {
      return {
        type: actionTypes.DETAIL_OBJECT_REQUEST,
        payload: data,
      };
    };
    export const detailObjectSuccess = (data) => {
      return {
        type: actionTypes.DETAIL_OBJECT_SUCCESS,
        payload: data,
      };
    };
    export const registObject = (data) => {
      return {
        type: actionTypes.REGISTER_OBJECT_REQUEST,
        payload: data,
      };
    };
    export const registObjectSuccess = (data) => {
      return {
        type: actionTypes.REGISTER_OBJECT_SUCCESS,
        payload: data,
      };
    };
    